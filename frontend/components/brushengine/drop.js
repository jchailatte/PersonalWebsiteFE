import React from "react";
import PropTypes from "prop-types";
import { yellow } from "@material-ui/core/colors";

export default class Hair extends React.Component {

    constructor(x, y, size, color, strokeId){
        super();

        this.x = x || 0;
        this.y = y || 0;
        this.color = color || "000000";
        this.strokeId = strokeId;
        this.life = size * 1.5;
        this._latestPos = {x: x, y: y};
        this._xOffRatio = 0;
    };

    render = (ctx) => {
        if (Math.random() < 0.03) {
            this._xOffRatio += 0.06 * Math.random() - 0.03;
        } else if (Math.random() < 0.1) {
            this._xOffRatio *= 0.003;
        }

        this._latestPos.x = this.x;
        this._latestPos.y = this.y;
        this.x += this.life * this._xOffRatio;
        this.y += (this.life * 0.5) * Math.random();

        this.life -= (0.05 - 0.01) * Math.random() + 0.01;

        ctx.save();
        ctx.lineCap = ctx.lineJoin = 'round';
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.size + this.life * 0.3;
        ctx.beginPath();
        ctx.moveTo(this._latestPos.x, this._latestPos.y);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        ctx.restore();
        ctx.restore();
    };
};