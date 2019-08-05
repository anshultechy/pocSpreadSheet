/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Point_$type, markType } from "./type";
import { List$1 } from "./List$1";
/**
 * @hidden
 */
var InterpolationUtil = /** @class */ (function (_super) {
    tslib_1.__extends(InterpolationUtil, _super);
    function InterpolationUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InterpolationUtil.a = function (a, b, c, d) {
        var e = 1 - b;
        if (a == null) {
            a = new List$1(Point_$type, 0);
        }
        if (c == null) {
            c = new List$1(Point_$type, 0);
        }
        var f = c.count;
        var g = d.count;
        var h = Math.max(f, g);
        var i = a.count;
        if (i < h) {
            a.s(i, new Array(h - i));
        }
        if (i > h) {
            a.v(h, i - h);
        }
        for (var j = 0; j < Math.min(f, g); ++j) {
            a._inner[j] = { $type: Point_$type, x: (c._inner[j].x * e) + (d._inner[j].x * b), y: (c._inner[j].y * e) + (d._inner[j].y * b) };
        }
        if (f < g) {
            var k = f > 0 ? c._inner[f - 1] : { $type: Point_$type, x: 0, y: 0 };
            for (var l = f; l < g; ++l) {
                a._inner[l] = { $type: Point_$type, x: (k.x * e) + (d._inner[l].x * b), y: (k.y * e) + (d._inner[l].y * b) };
            }
        }
        if (f > g) {
            var m = g > 0 ? d._inner[g - 1] : { $type: Point_$type, x: 0, y: 0 };
            for (var n = g; n < f; ++n) {
                a._inner[n] = a._inner[n] = { $type: Point_$type, x: (c._inner[n].x * e) + (m.x * b), y: (c._inner[n].y * e) + (m.y * b) };
            }
        }
        return a;
    };
    InterpolationUtil.b = function ($t, a, b, c, d, e, f) {
        var g = 1 - b;
        if (a == null) {
            a = new List$1($t, 0);
        }
        if (c == null) {
            c = new List$1($t, 0);
        }
        var h = c.count;
        var i = d.count;
        var j = Math.max(h, i);
        if (a.count < j) {
            var k = j - a.count;
            var l = new Array(k);
            a.s(a.count, l);
        }
        if (a.count > j) {
            a.v(j, a.count - j);
        }
        for (var m = 0; m < Math.min(h, i); ++m) {
            a._inner[m] = f(b, g, c._inner[m], d._inner[m]);
        }
        if (h < i) {
            var n = h > 0 ? c._inner[h - 1] : e();
            for (var o = h; o < i; ++o) {
                a._inner[o] = f(b, g, n, d._inner[o]);
            }
        }
        if (h > i) {
            var p = i > 0 ? d._inner[i - 1] : e();
            for (var q = i; q < h; ++q) {
                a._inner[q] = f(b, g, c._inner[q], p);
            }
        }
        return a;
    };
    InterpolationUtil.$t = markType(InterpolationUtil, 'InterpolationUtil');
    return InterpolationUtil;
}(Base));
export { InterpolationUtil };
//# sourceMappingURL=InterpolationUtil.js.map