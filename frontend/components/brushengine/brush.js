import React from "react";

import Hair from "./hair";
import Drop from "./drop";

/**
 * Brush by Akimitsu Hamamuro (http://codepen.io/akm2/pen/BonIh) - MIT License
 */

export default class Brush extends React.Component{

    constructor(x, y, color, size, inkAmount, angle, dripping, splashing) {
        super();

        this.x = x || 0;
        this.y = y || 0;
        this.color = color || '#000000';
        this.size = size || 35;
        this.inkAmount = inkAmount || 7,
        this.angle = angle || 0;
        this.dripping = dripping || true;
        this.splashing = splashing || true;

        this.maxHairs = 1000;
        this._SPLASHING_BRUSH_SPEED = 75;
        this._drops = [];
        this._tip = [];
        this._latestPos = null;
        this._strokeId = null;

        this._resetTip();
    }

    _resetTip = () => {
        let rad = this.size * 0.5,
            x0, y0, a0, x1, y1, a1, cv, sv,
            i, len;

        a1 = this.angle,
        len = rad * rad * Math.PI / this.inkAmount | 0;
        if(len < 1) len = 1;
        if(len > this.maxHairs) len = this.maxHairs;

        for(let i = 0; i < len; i++){
            x0 = rad * Math.random();
            y0 = x0 * 0.5;
            a0 = Math.PI * 2 * Math.random();
            x1 = x0 * Math.sin(a0);
            y1 = y0 * Math.cos(a0);
            cv = Math.cos(a1);
            sv = Math.sin(a1); 

            this._tip.push(new Hair(
                this.x + x1 * cv - y1 * sv,
                this.y + x1 * sv + y1 * cv,
                this.inkAmount,
                this.color
            ))
        }
    };

    isStroke = () => {
        return Boolean(this._strokeId);
    }

    startStroke = () => {
        if(this.isStroke()) return;

        this._resetTip();
        this._strokeId = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
    }

    endStroke = () => {
        this._strokeId = this._latestPos = null;
    }

    render = (ctx, x, y) => {
        let isStroke = this.isStroke(),
            dx, dy, 
            i, len;

        if(!this._latestPos) this._latestPos = {};
        this._latestPos.x = this.x;
        this._latestPos.y = this.y;
        this.x = x;
        this.y = y;

        if (this._drops.length) {
            let drops  = this._drops,
                drop,
                 sizeSq = this.size * this.size;

            for (i = 0, len = drops.length; i < len; i++) {
                drop = drops[i];

                dx = this.x - drop.x;
                dy = this.y - drop.y;

                if (
                    (isStroke && sizeSq > dx * dx + dy * dy && this._strokeId !== drop.strokeId) ||
                    drop.life <= 0
                ) {
                    drops.splice(i, 1);
                    len--;
                    i--;
                    continue;
                }

                drop.render(ctx);
            }
        }

        if (isStroke) {
            let tip = this._tip,
                strokeId = this._strokeId,
                dist;

            dx = this.x - this._latestPos.x;
            dy = this.y - this._latestPos.y;
            dist = Math.sqrt(dx * dx + dy * dy);

            if (this.splashing && dist > this._SPLASHING_BRUSH_SPEED) {
                var maxNum = (dist - this._SPLASHING_BRUSH_SPEED) * 0.5 | 0,
                    r, a, sr, sx, sy;

                ctx.save();
                ctx.fillStyle = this.color;
                ctx.beginPath();
                for (i = 0, len = maxNum * Math.random() | 0; i < len; i++) {
                    r = (dist - 1) * Math.random() + 1;
                    a = Math.PI * 2 * Math.random();
                    sr = 5 * Math.random();
                    sx = this.x + r * Math.sin(a);
                    sy = this.y + r * Math.cos(a);
                    ctx.moveTo(sx + sr, sy);
                    ctx.arc(sx, sy, sr, 0, Math.PI * 2, false);
                }
                ctx.fill();
                ctx.restore();

            } else if (this.dripping && dist < this.inkAmount * 2 && Math.random() < 0.05) {
                this._drops.push(new Drop(
                    this.x,
                    this.y,
                    (this.size + this.inkAmount) * 0.5 * ((0.25 - 0.1) * Math.random() + 0.1),
                    this.color,
                    this._strokeId
                ));
            }

            for (i = 0, len = tip.length; i < len; i++) {
                tip[i].render(ctx, dx, dy, dist);
            }
        }
    };

    dispose = () => {
        this._tip.length = this._drops.length = 0;
    };

}