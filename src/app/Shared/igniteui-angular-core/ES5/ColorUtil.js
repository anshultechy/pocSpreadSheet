/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { Color } from "./Color";
import { Random } from "./Random";
import { MathUtil } from "./MathUtil";
import { Brush } from "./Brush";
import { truncate } from "./number";
/**
 * @hidden
 */
var ColorUtil = /** @class */ (function (_super) {
    tslib_1.__extends(ColorUtil, _super);
    function ColorUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorUtil.p = function (a) {
        return Color.u(a, ColorUtil.f.next2(0, 255), ColorUtil.f.next2(0, 255), ColorUtil.f.next2(0, 255));
    };
    ColorUtil.q = function (a) {
        var b = ColorUtil.b(a);
        return ColorUtil.i(b[0], ColorUtil.f.next2(0, 359), b[2], b[3]);
    };
    ColorUtil.n = function (a, interpolation_, maximum_, b) {
        var min_ = a;
        switch (b) {
            case 1:
                {
                    var c = ColorUtil.b(a);
                    var d = ColorUtil.b(maximum_);
                    var e = c[1] >= 0 ? c[1] : d[1];
                    var f = d[1] >= 0 ? d[1] : c[1];
                    if (e >= 0 && f >= 0 && Math.abs(f - e) > 180) {
                        if (f > e) {
                            e += 360;
                        }
                        else {
                            f += 360;
                        }
                    }
                    interpolation_ = Math.max(0, Math.min(1, interpolation_));
                    return ColorUtil.i(c[0] + interpolation_ * (d[0] - c[0]), e + interpolation_ * (f - e), c[2] + interpolation_ * (d[2] - c[2]), c[3] + interpolation_ * (d[3] - c[3]));
                }
            case 0: return Color.u((min_._a + interpolation_ * (maximum_._a - min_._a)), (min_._r + interpolation_ * (maximum_._r - min_._r)), (min_._g + interpolation_ * (maximum_._g - min_._g)), (min_._b + interpolation_ * (maximum_._b - min_._b)));
        }
        return a;
    };
    ColorUtil.l = function (a, b, c) {
        var d = a[1] >= 0 ? a[1] : c[1];
        var e = c[1] >= 0 ? c[1] : a[1];
        if (d >= 0 && e >= 0 && Math.abs(e - d) > 180) {
            if (e > d) {
                d += 360;
            }
            else {
                e += 360;
            }
        }
        b = Math.max(0, Math.min(1, b));
        return ColorUtil.i(a[0] + b * (c[0] - a[0]), d + b * (e - d), a[2] + b * (c[2] - a[2]), a[3] + b * (c[3] - a[3]));
    };
    ColorUtil.o = function (a, b) {
        var c = ColorUtil.a(a);
        if (b < 0) {
            return ColorUtil.h(c[0], c[1], c[2], c[3] * (1 - MathUtil.b(-b, 0, 1)));
        }
        else {
            return ColorUtil.h(c[0], c[1], c[2], c[3] + MathUtil.b(b, 0, 1) * (1 - c[3]));
        }
    };
    ColorUtil.a = function (a) {
        var b = new Array(4);
        var c = a.o / 255;
        var d = a.n / 255;
        var e = a.m / 255;
        var f = Math.min(Math.min(c, d), e);
        var g = Math.max(Math.max(c, d), e);
        var h = g - f;
        b[0] = a.l / 255;
        b[3] = (g + f) / 2;
        if (h == 0) {
            b[1] = -1;
            b[2] = 0;
        }
        else {
            b[1] = ColorUtil.d(g, h, c, d, e);
            b[2] = b[3] < 0.5 ? h / (g + f) : h / (2 - g - f);
        }
        return b;
    };
    ColorUtil.b = function (a) {
        var b = a.l / 255;
        var c = a.o / 255;
        var d = a.n / 255;
        var e = a.m / 255;
        var f = Math.min(c, Math.min(d, e));
        var g = Math.max(c, Math.max(d, e));
        var h = g - f;
        var i = new Array(4);
        i[0] = b;
        i[3] = g;
        if (h == 0) {
            i[1] = -1;
            i[2] = 0;
        }
        else {
            i[1] = ColorUtil.d(g, h, c, d, e);
            i[2] = h / g;
        }
        return i;
    };
    ColorUtil.h = function (a, b, c, d) {
        var e;
        var f;
        var g;
        if (c == 0) {
            e = d;
            f = d;
            g = d;
        }
        else {
            var h = d < 0.5 ? d * (1 + c) : d + c - (d * c);
            var i = 2 * d - h;
            var j = b / 360;
            e = ColorUtil.c(i, h, j + 1 / 3);
            f = ColorUtil.c(i, h, j);
            g = ColorUtil.c(i, h, j - 1 / 3);
        }
        return Color.u(truncate((a * 255)), truncate((e * 255)), truncate((f * 255)), truncate((g * 255)));
    };
    ColorUtil.i = function (a, b, c, d) {
        var e;
        var f;
        var g;
        while (b >= 360) {
            b -= 360;
        }
        if (c == 0) {
            e = d;
            f = d;
            g = d;
        }
        else {
            b /= 60;
            var h = Math.floor(b);
            var i = b - h;
            var j = d * (1 - c);
            var k = d * (1 - c * i);
            var l = d * (1 - c * (1 - i));
            switch (truncate(h)) {
                case 0:
                    e = d;
                    f = l;
                    g = j;
                    break;
                case 1:
                    e = k;
                    f = d;
                    g = j;
                    break;
                case 2:
                    e = j;
                    f = d;
                    g = l;
                    break;
                case 3:
                    e = j;
                    f = k;
                    g = d;
                    break;
                case 4:
                    e = l;
                    f = j;
                    g = d;
                    break;
                default:
                    e = d;
                    f = j;
                    g = k;
                    break;
            }
        }
        return Color.u(truncate((a * 255)), truncate((e * 255)), truncate((f * 255)), truncate((g * 255)));
    };
    ColorUtil.d = function (a, b, c, d, e) {
        var f = c == a ? (d - e) / b : d == a ? 2 + (e - c) / b : 4 + (c - d) / b;
        f *= 60;
        if (f < 0) {
            f += 360;
        }
        return f;
    };
    ColorUtil.c = function (a, b, c) {
        c = c < 0 ? c + 1 : c > 1 ? c - 1 : c;
        if (c < 1 / 6) {
            return a + ((b - a) * 6 * c);
        }
        if (c < 1 / 2) {
            return b;
        }
        if (c < 2 / 3) {
            return a + ((b - a) * 6 * (2 / 3 - c));
        }
        return a;
    };
    ColorUtil.e = function (a) {
        var b = a.l / 255;
        var c = truncate((a.o * b));
        var d = truncate((a.n * b));
        var e = truncate((a.m * b));
        return a.l << 24 | c << 16 | d << 8 | e;
    };
    ColorUtil.m = function (a) {
        return a.color;
    };
    ColorUtil.k = function (a) {
        var b = new Color();
        b.colorString = a;
        return b;
    };
    ColorUtil.j = function (a) {
        var b = ((function () {
            var $ret = new Color();
            $ret.l = 255;
            return $ret;
        })());
        b = ColorUtil.k(a._fill);
        return b;
    };
    ColorUtil.g = function (a) {
        var b = null;
        var c = a.colorString;
        b = ((function () {
            var $ret = new Brush();
            $ret.fill = c;
            return $ret;
        })());
        return b;
    };
    ColorUtil.$t = markType(ColorUtil, 'ColorUtil');
    ColorUtil.f = new Random(0);
    return ColorUtil;
}(Base));
export { ColorUtil };
//# sourceMappingURL=ColorUtil.js.map