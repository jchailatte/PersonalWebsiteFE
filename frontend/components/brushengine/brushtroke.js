import Brush from "./brush";

/**
 * Modified from 
 * https://github.com/lmgonzalves/brushstroke
 * MIT License
 */ 

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.Brushstroke = factory();
    }
}(this, function () {
    
    /**
     * Curve calc function for canvas 2.3.4 - (c) Epistemex 2013-2016 - www.epistemex.com - MIT License
     */

    /**
     * Calculates an array containing points representing a cardinal spline through given point array.
     * Points must be arranged as: [x1, y1, x2, y2, ..., xn, yn].
     *
     * The points for the cardinal spline are returned as a new array.
     *
     * @param {Array} points - point array
     * @param {Number} [tension=0.5] - tension. Typically between [0.0, 1.0] but can be exceeded
     * @param {Number} [numOfSeg=25] - number of segments between two points (line resolution)
     * @param {Boolean} [close=false] - Close the ends making the line continuous
     * @returns {Float32Array} New array with the calculated points that was added to the path
     */
    function getCurvePoints(points, tension, numOfSeg, close) {

        'use strict';

        // options or defaults
        tension = (typeof tension === 'number') ? tension : 0.5;
        numOfSeg = (typeof numOfSeg === 'number') ? numOfSeg : 25;

        var pts,															// for cloning point array
            i = 1,
            l = points.length,
            rPos = 0,
            rLen = (l-2) * numOfSeg + 2 + (close ? 2 * numOfSeg: 0),
            res = new Float32Array(rLen),
            cache = new Float32Array((numOfSeg + 2) * 4),
            cachePtr = 4;

        pts = points.slice(0);

        if (close) {
            pts.unshift(points[l - 1]);										// insert end point as first point
            pts.unshift(points[l - 2]);
            pts.push(points[0], points[1]); 								// first point as last point
        }
        else {
            pts.unshift(points[1]);											// copy 1. point and insert at beginning
            pts.unshift(points[0]);
            pts.push(points[l - 2], points[l - 1]);							// duplicate end-points
        }

        // cache inner-loop calculations as they are based on t alone
        cache[0] = 1;														// 1,0,0,0

        for (; i < numOfSeg; i++) {

            const st = i / numOfSeg,
                st2 = st * st,
                st3 = st2 * st,
                st23 = st3 * 2,
                st32 = st2 * 3;

            cache[cachePtr++] =	st23 - st32 + 1;							// c1
            cache[cachePtr++] =	st32 - st23;								// c2
            cache[cachePtr++] =	st3 - 2 * st2 + st;							// c3
            cache[cachePtr++] =	st3 - st2;									// c4
        }

        cache[++cachePtr] = 1;												// 0,1,0,0

        // calc. points
        parse(pts, cache, l, tension);

        if (close) {
            pts = [];
            pts.push(points[l - 4], points[l - 3],
                points[l - 2], points[l - 1], 							// second last and last
                points[0], points[1],
                points[2], points[3]); 								// first and second
            parse(pts, cache, 4, tension);
        }

        function parse(pts, cache, l, tension) {

            for (var i = 2, t; i < l; i += 2) {

                var pt1 = pts[i],
                    pt2 = pts[i+1],
                    pt3 = pts[i+2],
                    pt4 = pts[i+3],

                    t1x = (pt3 - pts[i-2]) * tension,
                    t1y = (pt4 - pts[i-1]) * tension,
                    t2x = (pts[i+4] - pt1) * tension,
                    t2y = (pts[i+5] - pt2) * tension,
                    c = 0, c1, c2, c3, c4;

                for (t = 0; t < numOfSeg; t++) {

                    c1 = cache[c++];
                    c2 = cache[c++];
                    c3 = cache[c++];
                    c4 = cache[c++];

                    res[rPos++] = c1 * pt1 + c2 * pt3 + c3 * t1x + c4 * t2x;
                    res[rPos++] = c1 * pt2 + c2 * pt4 + c3 * t1y + c4 * t2y;
                }
            }
        }

        // add last point
        l = close ? 0 : points.length - 2;
        res[rPos++] = points[l++];
        res[rPos] = points[l];

        return res;
    }


   
    /********************
     * Brushstroke utils
     ********************/

    // Type of elements, most from anime.js

    const is = {
        obj: function(a) { return Object.prototype.toString.call(a).indexOf('Object') > -1 },
        num: function(a) { return typeof a === 'number' },
        str: function(a) { return typeof a === 'string' },
        fnc: function(a) { return typeof a === 'function' },
        und: function(a) { return typeof a === 'undefined' }
    };

    // Functions

    const callFunction = (fn, context, params) => {
        if (is.fnc(fn)) fn.call(context, params);
    }

    // Objects

    const extendSingle = (target, source) => {
        for (const key in source)
            target[key] = source[key];
        return target;
    }

    function extend (target, source) {
        if (!target) target = {};
        for (const argument of arguments)
            extendSingle(target, argument);
        return target;
    }

    // Promises

    function deferred() {
        return new function () {
            this.resolve = null;
            this.reject = null;

            this.promise = new Promise(function (resolve, reject) {
                this.resolve = resolve;
                this.reject = reject;
            }.bind(this));
        };
    }

    // Get random points in a 2d space

    function randomize(num, width, height) {
        var numPoints = num || 10;
        var points = [];
        for (var i = 0; i < numPoints; i++) {
            points.push(
                (width * Math.random() * 0.9 + width * 0.05) | 0,
                (height * Math.random() * 0.9 + height * 0.05) | 0
            );
        }
        return points;
    }

    /**************
     * Brushstroke
     **************/

    function Brushstroke(options) {

        // Default values

        this.defaults = {
            animation: 'to-bottom',
            path: undefined,
            points: undefined,
            frameAnimation: false,
            frames: 0,
            duration: 0,
            delay: 0,
            color: '#000000',
            width: 300,
            height: 120,
            size: 40,
            inkAmount: 1,
            lifting: false,
            dripping: false,
            splashing: true,
            padding: 30,
            overlap: 10,
            tension: 0.5,
            reduceOverflow: 20,
            image: undefined,
            repeat: 'no-repeat',
            stretch: false,
            centered: false,
            queue: false
        };

        this.init(options);
    }

    Brushstroke.prototype = {

        init: function (options) {
            const o = extend(this.defaults, options);

            var d = deferred();
            this.promise = d.promise;
            d.resolve();
        },

        run: function (options) {
            const that = this;

            function start() {
                if (options.render) {
                    that.render(options);
                } else {
                    callFunction(that.animations[options.animation], that, options);
                }
            }

            if (options.clear) {
                options.ctx.clearRect(0, 0, options.width, options.height);
                options.d.resolve();
            } else {
                start();
            }
        },

        draw: function (options) {
            const that = this;
            const o = extend({}, this.defaults, options);
            const _draw = function () {
                var d = deferred();
                that.run(extend(o, {d: d}));
                return d.promise;
            };
            if (o.queue) {
                this.promise = this.promise.then(_draw);
            } else {
                _draw();
            }
        },

        erase: function (options) {
            this.draw(extend({}, options, {erase: true}));
        },

        fill: function (options) {
            this.draw(extend({}, options, {fill: true}));
        },

        clear: function (options) {
            this.draw(extend({}, options, {clear: true}));
        },

        setPath: function (o) {
            var path = o.path;
            if (is.str(path)) {
                path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('d', o.path);
                o.path = path;
            }
            o.pathLenght = path.getTotalLength();
        },

        pointAt: function (t, o) {
            switch (o.animation) {
                case 'points':
                    var points = o.points;
                    var length = points.length;
                    var i = Math.round((length * t) / 2) * 2;
                    if (i >= length) i = length - 2;
                    return {x: points[i], y: points[i + 1]};
                case 'path':
                    return o.path.getPointAtLength(o.pathLenght * t);
                default:
                    return null;
            }
        },

        setPos: function (o, pos) {
            var first = !pos;
            if (first) pos = {};
            switch (o.direction) {
                case 'bottom':
                    pos.startY = first ? o.padding : pos.startY + o.size - o.overlap;
                    this.setPosBottomTop(o, pos, first);
                    break;
                case 'top':
                    pos.startY = first ? o.height - o.padding : pos.startY - o.size + o.overlap;
                    this.setPosBottomTop(o, pos, first);
                    break;
                case 'right':
                    pos.startX = first ? o.padding : pos.startX + o.size - o.overlap;
                    this.setPosRightLeft(o, pos, first);
                    break;
                case 'left':
                    pos.startX = first ? o.width - o.padding : pos.startX - o.size + o.overlap;
                    this.setPosRightLeft(o, pos, first);
                    break;
            }
            return pos;
        },

        setPosBottomTop: function (o, pos, first) {
            if (first) {
                pos.vertical = true;
            } else {
                var aux = pos.startX;
            }
            pos.startX = first ? o.padding : pos.x;
            pos.x = first ? o.width - o.padding : aux;
            pos.y = pos.startY;
        },

        setPosRightLeft: function (o, pos, first) {
            if (first) {
                pos.vertical = false;
            } else {
                var aux = pos.startY;
            }
            pos.x = pos.startX;
            pos.startY = first ? o.padding : pos.y;
            pos.y = first ? o.height - o.padding : aux;
        },

        render: function (o) {
            if (!is.und(o.duration) || !is.und(o.frames)) {
                var that = this;

                if (o.delay) {
                    var delay = o.delay;
                    delete o.delay;
                    setTimeout(function () {
                        that.render(o);
                    }, delay * 1000);
                    return;
                }

                if (o.erase) o.ctx.globalCompositeOperation = 'destination-out';

                var frame = 1, elapsed, time, t, point, x = 0, y = 0;
                var startTime = new Date();

                if (!is.und(o.startX)) x = o.startX;
                if (!is.und(o.startY)) y = o.startY;

                


                
                const brush = new Brush(x, y, o.pattern || o.color, o.size, o.inkAmount, o.angle, o.dripping, o.splashing);
                brush.startStroke(x, y);
                callFunction(o.begin);

                if (o.frameAnimation && o.duration) {
                    if (!o.frames) o.frames = parseFloat(o.duration) * 60;
                    delete o.duration;
                }

                (function calc() {
                    if (o.duration) {
                        elapsed = (new Date() - startTime) / 1000;
                        time = elapsed / parseFloat(o.duration);
                    } else {
                        time = frame / parseFloat(o.frames);
                    }
                    t = time;

                    if (is.fnc(o.easing)) {
                        t = o.easing(t);
                    }

                    if (time > 1) {
                        t = 1;
                    }

                    point = that.pointAt(t, o);
                    if (!point) {
                        point = {
                            x: x + (o.x - x) * t,
                            y: y + (o.y - y) * t
                        };
                    }

                    x = point.x;
                    y = point.y;
                    brush.render(o.ctx, x, y);

                    if (time >= 1) {
                        brush.endStroke();
                        if (o.erase) o.ctx.globalCompositeOperation = 'source-over';
                        callFunction(o.end);
                        o.d.resolve();
                    } else {
                        if (o.duration) {
                            requestAnimationFrame(calc);
                        } else {
                            frame++;
                            o.frameAnimation ? requestAnimationFrame(calc) : calc();
                        }
                    }
                })();
            }
        },

        animations: {
            'to-bottom': function(o) {
                callFunction(this.animations.basic, this, extend(o, {direction: 'bottom'}));
            },
            'to-top': function(o) {
                callFunction(this.animations.basic, this, extend(o, {direction: 'top'}));
            },
            'to-right': function(o) {
                callFunction(this.animations.basic, this, extend(o, {direction: 'right'}));
            },
            'to-left': function(o) {
                callFunction(this.animations.basic, this, extend(o, {direction: 'left'}));
            },
            'basic': function(o) {
                const pos = this.setPos(o);
                const brushstrokes = Math.ceil(((pos.vertical ? o.height : o.width) + (o.size / 2) - (o.padding * 2)) / (o.size - o.overlap));
                const angle = pos.vertical ? Math.PI * 0.5 : 0;
                const duration = o.duration / brushstrokes;
                const frames = o.frames / brushstrokes;
                const points = [];
                const alt = true;
                const overflow = o.reduceOverflow;
                let opts, first, last;

                const fixOverflow = (axis) => {
                    if (i === 0) pos[axis] = pos[axis] - overflow;
                    if (i === 1) pos[axis] = pos[axis] + overflow;
                    if (i === brushstrokes - 1) pos[axis] = alt ? pos[axis] + overflow : pos[axis] - overflow;
                }

                for (var i = 0; i < brushstrokes; i++) {
                    if (o.lifting) {
                        first = i === 0;
                        last = i === brushstrokes - 1;
                        opts = extend({}, o, pos, {duration: duration, frames: frames, angle: angle, render: true, queue: true});
                        if (!first) opts.begin = null;
                        if (!last) opts.end = null;
                        this.draw(opts);
                    } else {
                        if (overflow) {
                            pos.vertical ? fixOverflow('x') : fixOverflow('y');
                        }
                        points.push(pos.startX, pos.startY, pos.x, pos.y);
                    }
                    this.setPos(o, pos);
                    alt = !alt;
                }

                if (o.lifting) {
                    o.d.resolve();
                } else {
                    callFunction(this.animations.points, this, extend(o, {animation: 'points', points: points, angle: angle}));
                }
            },
            'path': function(o) {
                this.setPath(o);
                var point = this.pointAt(0, o);
                this.render(extend(o, {startX: point.x, startY: point.y}));
            },
            'points': function(o) {
                var points = o.points || 0;
                points = is.num(points) ? randomize(points, o.width, o.height) : points;
                points = getCurvePoints(points, o.tension);
                this.render(extend(o, {points: points, startX: points[0], startY: points[1]}));
            }
        }
    };

    return Brushstroke;

}));
