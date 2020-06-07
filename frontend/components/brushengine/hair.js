import React from "react";
import PropTypes from "prop-types";
import { yellow } from "@material-ui/core/colors";

export default class Hair extends React.Component {

    constructor(x, y, inkAmount, color){
        super();

        this.x = x || 0;
        this.y = y || 0;
        this.inkAmount = inkAmount || 7;
        this.color = color || "#000000";

        this._latestPos = { x: x, y: y };
    }

    render = (ctx, offsetX, offsetY, offsetLength) => {
        this._latestPos.x = this.x;
        this._latestPos.y = this.y;
        this.x += offsetX;
        this.y += offsetY;

        let per = offsetLength ? this.inkAmount / offsetLength : 0;
        if      (per > 1) per = 1;
        else if (per < 0) per = 0;

        ctx.save();
        ctx.lineCap = ctx.lineJoin = 'round';
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.inkAmount * per;
        ctx.beginPath();
        ctx.moveTo(this._latestPos.x, this._latestPos.y);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        ctx.restore();
    };
}