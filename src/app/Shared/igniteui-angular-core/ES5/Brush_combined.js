/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { GradientStop } from "./GradientStop";
import { Base, Nullable$1, markType, typeCast, PointUtil } from "./type";
import { Color } from "./Color";
import { intDivide, isNaN_, isInfinity } from "./number";
import { stringContains } from "./string";
/**
 * @hidden
 */
var Brush = /** @class */ (function (_super) {
    tslib_1.__extends(Brush, _super);
    function Brush() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isGradient = false;
        _this.isRadialGradient = false;
        _this.isImageFill = false;
        _this._fill = null;
        _this.f = null;
        _this.k = new Color();
        return _this;
    }
    Object.defineProperty(Brush.prototype, "fill", {
        get: function () {
            return this._fill;
        },
        set: function (a) {
            this._fill = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Brush.prototype, "color", {
        get: function () {
            if (this._fill == null && (this.isGradient || this.isRadialGradient)) {
                this._fill = this.i();
            }
            if (this._fill == this.f) {
                return this.k;
            }
            var a = new Color();
            if (this._fill != null) {
                a.colorString = this._fill;
                this.k = a;
                this.f = this._fill;
                if (this._fill.length == 9) {
                    this._fill = this.k.colorString;
                    this.f = this._fill;
                }
            }
            return a;
        },
        set: function (a) {
            this.k = a;
            this.f = this.k.colorString;
            this._fill = this.f;
        },
        enumerable: true,
        configurable: true
    });
    Brush.prototype.i = function () {
        return null;
    };
    Brush.prototype.equals = function (a) {
        if (a == null) {
            return false;
        }
        var b = a;
        return Base.equalsStatic(this._fill, b._fill) && this.color.equals(b.color) && this.isGradient == b.isGradient && this.isImageFill == b.isImageFill && this.isRadialGradient == b.isRadialGradient;
    };
    Brush.prototype.getHashCode = function () {
        var a = Base.getHashCodeStatic(this.isGradient) ^ Base.getHashCodeStatic(this.isRadialGradient) ^ Base.getHashCodeStatic(this.isImageFill);
        if (this.f != null) {
            a ^= Base.getHashCodeStatic(this.f);
        }
        if (Color.e(Nullable$1.toNullable(Color.$, this.k), Nullable$1.toNullable(Color.$, null))) {
            a ^= this.k.getHashCode();
        }
        return a;
    };
    Brush.create = function (val_) {
        CssGradientUtil.touch();
        var b_ = new Brush();
        if (!val_) {
            return null;
        }
        if (typeof val_ == 'string') {
            if (CssGradientUtil.isGradient(val_)) {
                b_ = CssGradientUtil.brushFromGradientString(val_);
            }
            else {
                b_ = new Brush();
                b_.fill = val_;
            }
        }
        else if (val_.type == 'linearGradient') {
            b_ = new LinearGradientBrush();
            if (val_.startPoint && val_.endPoint) {
                b_.useCustomDirection = true;
                b_.startX = val_.startPoint.x;
                b_.startY = val_.startPoint.y;
                b_.endX = val_.endPoint.x;
                b_.endY = val_.endPoint.y;
            }
            if (val_.colorStops) {
                var stops = [];
                for (var i = 0; i < val_.colorStops.length; i++) {
                    var colorStop = new GradientStop();
                    colorStop.offset = val_.colorStops[i].offset;
                    colorStop.fill = val_.colorStops[i].color;
                    stops.push(colorStop);
                }
                b_.gradientStops = stops;
            }
        }
        ;
        return b_;
    };
    Brush.$t = markType(Brush, 'Brush');
    return Brush;
}(Base));
export { Brush };
/**
 * @hidden
 */
var LinearGradientBrush = /** @class */ (function (_super) {
    tslib_1.__extends(LinearGradientBrush, _super);
    function LinearGradientBrush() {
        var _this = _super.call(this) || this;
        _this.useCustomDirection = false;
        _this.startX = 0;
        _this.startY = 0;
        _this.endX = 0;
        _this.endY = 0;
        _this.isAbsolute = false;
        _this.gradientStops = null;
        _this.useCustomDirection = false;
        _this.startX = 0;
        _this.startY = 0;
        _this.endX = 0;
        _this.endY = 1;
        _this.isAbsolute = false;
        _this.gradientStops = new Array(0);
        _this.isGradient = true;
        return _this;
    }
    LinearGradientBrush.prototype.clone = function () {
        var a = new LinearGradientBrush();
        a.startX = this.startX;
        a.startY = this.startY;
        a.endX = this.endX;
        a.endY = this.endY;
        a.useCustomDirection = this.useCustomDirection;
        a.isAbsolute = this.isAbsolute;
        if (this.gradientStops != null) {
            a.gradientStops = new Array(this.gradientStops.length);
            for (var b = 0; b < this.gradientStops.length; b++) {
                a.gradientStops[b] = this.gradientStops[b].clone();
            }
        }
        return a;
    };
    LinearGradientBrush.prototype.equals = function (a) {
        if (a == null) {
            return false;
        }
        var b = typeCast(LinearGradientBrush.$, a);
        if (b == null) {
            return false;
        }
        var c = _super.prototype.equals.call(this, a) && this.startX == b.startX && this.startY == b.startY && this.endX == b.endX && this.endY == b.endY && this.isAbsolute == b.isAbsolute && this.useCustomDirection == b.useCustomDirection;
        if (c == false) {
            return false;
        }
        if (this.gradientStops.length != b.gradientStops.length) {
            return false;
        }
        for (var d = 0, e = this.gradientStops.length; d < e; d++) {
            if (!this.gradientStops[d].equals(b.gradientStops[d])) {
                return false;
            }
        }
        return true;
    };
    LinearGradientBrush.prototype.getHashCode = function () {
        return _super.prototype.getHashCode.call(this) ^ (this.startX) ^ (this.startY) ^ (this.endX) ^ (this.endY);
    };
    LinearGradientBrush.prototype.i = function () {
        if (this.gradientStops != null && this.gradientStops.length > 0) {
            return this.gradientStops[0].color.colorString;
        }
        return _super.prototype.i.call(this);
    };
    LinearGradientBrush.$t = markType(LinearGradientBrush, 'LinearGradientBrush', Brush.$);
    return LinearGradientBrush;
}(Brush));
export { LinearGradientBrush };
/**
 * @hidden
 */
var CssGradientUtil = /** @class */ (function (_super) {
    tslib_1.__extends(CssGradientUtil, _super);
    function CssGradientUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CssGradientUtil.touch = function () {
    };
    CssGradientUtil.isGradient = function (a) {
        return stringContains(a, "linear-gradient") || stringContains(a, "radial-gradient");
    };
    CssGradientUtil.brushFromGradientString = function (a) {
        var b = (/hsl\([\s\S]+?\)[\s\S]*?[,\)]|rgba?\([\s\S]+?\)[\s\S]*?[,\)]|[^\(\)]*?[,\)]/gim), c = (/\s*\d*%\s*$/), d = (/^\s\s*/), e = (/\s\s*$/), f = (/[,\)]?$/);
        var g;
        var h, i = 1, j = 0, k, l;
        var m = false;
        var n;
        var o = a.match(b);
        if (o == null || o.length <= 1) {
            return null;
        }
        var p = new LinearGradientBrush();
        k = o.length;
        g = o[0];
        if (stringContains(g, "to") || stringContains(g, "deg")) {
            h = CssGradientUtil.c(g);
            p.useCustomDirection = true;
            var q = CssGradientUtil.a(h);
            p.startX = q[0].x;
            p.startY = q[0].y;
            p.endX = q[1].x;
            p.endY = q[1].y;
            n = new Array(k - 1);
        }
        else {
            n = new Array(k);
            i = 0;
        }
        for (; i < k; i++) {
            var r = new GradientStop();
            g = o[i];
            g = g.replace(d, "").replace(e, "").replace(f, "");
            l = g.search(c);
            if (l != -1) {
                r._fill = g.substr(0, l);
                r.offset = parseFloat(g.substr(l + 1)) / 100;
            }
            else {
                r._fill = g;
                r.offset = -1;
                m = true;
            }
            n[j] = r;
            j++;
        }
        if (m) {
            if (n[0].offset == -1) {
                n[0].offset = 0;
            }
            if (n[n.length - 1].offset == -1) {
                n[n.length - 1].offset = 1;
            }
            CssGradientUtil.f(n);
        }
        p.gradientStops = n;
        return p;
    };
    CssGradientUtil.f = function (a) {
        var b, c, d, e, f = -1, g = -1, h = 0;
        var i = false;
        for (b = g + 1; b < a.length; b++) {
            var j = a[b];
            if (j.offset != -1) {
                f = Math.max(f, j.offset);
                j.offset = f;
                if (i) {
                    d = 1;
                    e = intDivide((f - h), (b - g));
                    for (c = g + 1; c < b; c++) {
                        a[c].offset = h + e * d;
                        d++;
                    }
                    i = false;
                }
                g = b;
                h = f;
            }
            else {
                i = true;
            }
        }
    };
    CssGradientUtil.c = function (a) {
        var b = (/to\s*top\s*/i), c = (/to\s*right\s*top\s*/i), d = (/to\s*right\s*/i), e = (/to\s*right\s*bottom\s*/i), f = (/to\s*bottom\s*/i), g = (/to\s*left\s*bottom\s*/i), h = (/to\s*left\s*/i), i = (/to\s*left\s*top\s*/i);
        if (stringContains(a, "deg")) {
            return parseFloat(a);
        }
        if (b.test(a)) {
            return 0;
        }
        if (c.test(a)) {
            return 45;
        }
        if (d.test(a)) {
            return 90;
        }
        if (e.test(a)) {
            return 135;
        }
        if (f.test(a)) {
            return 180;
        }
        if (g.test(a)) {
            return 225;
        }
        if (h.test(a)) {
            return 270;
        }
        return i.test(a) ? 315 : 180;
    };
    CssGradientUtil.d = function (a) {
        return Math.PI * a / 180;
    };
    CssGradientUtil.e = function (a) {
        if (isNaN_(a) || isInfinity(a)) {
            return a;
        }
        while (a > 360) {
            a -= 360;
        }
        while (a < 0) {
            a += 360;
        }
        return a;
    };
    CssGradientUtil.a = function (a) {
        var b = new Array(2);
        var c = PointUtil.create();
        var d = PointUtil.create();
        var e = CssGradientUtil.e(a);
        if (e >= 0 && e <= 45) {
            var f = Math.tan(CssGradientUtil.d(e));
            c.x = 0.5 - 0.5 * f;
            c.y = 1;
            d.x = 0.5 + 0.5 * f;
            d.y = 0;
        }
        else if (e > 180 && e <= 225) {
            var g = Math.tan(CssGradientUtil.d(e - 180));
            c.x = 0.5 + 0.5 * g;
            c.y = 0;
            d.x = 0.5 - 0.5 * g;
            d.y = 1;
        }
        else if (e > 135 && e <= 180) {
            var h = Math.tan(CssGradientUtil.d(180 - e));
            c.x = 0.5 - 0.5 * h;
            c.y = 0;
            d.x = 0.5 + 0.5 * h;
            d.y = 1;
        }
        else if (e > 315 && e < 360) {
            var i = Math.tan(CssGradientUtil.d(360 - e));
            c.x = 0.5 + 0.5 * i;
            c.y = 1;
            d.x = 0.5 - 0.5 * i;
            d.y = 0;
        }
        else if (e > 45 && e <= 90) {
            var j = Math.tan(CssGradientUtil.d(90 - e));
            d.y = 0.5 - 0.5 * j;
            d.x = 1;
            c.y = 0.5 + 0.5 * j;
            c.x = 0;
        }
        else if (e > 90 && e <= 135) {
            var k = Math.tan(CssGradientUtil.d(e - 90));
            d.y = 0.5 + 0.5 * k;
            d.x = 1;
            c.y = 0.5 - 0.5 * k;
            c.x = 0;
        }
        else if (e > 225 && e <= 270) {
            var l = Math.tan(CssGradientUtil.d(270 - e));
            c.y = 0.5 - 0.5 * l;
            c.x = 1;
            d.y = 0.5 + 0.5 * l;
            d.x = 0;
        }
        else if (e > 270 && e <= 315) {
            var m = Math.tan(CssGradientUtil.d(e - 270));
            c.y = 0.5 + 0.5 * m;
            c.x = 1;
            d.y = 0.5 - 0.5 * m;
            d.x = 0;
        }
        b[0] = c;
        b[1] = d;
        return b;
    };
    CssGradientUtil.$t = markType(CssGradientUtil, 'CssGradientUtil');
    return CssGradientUtil;
}(Base));
export { CssGradientUtil };
//# sourceMappingURL=Brush_combined.js.map