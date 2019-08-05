/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Number_$type, markType } from "./type";
import { List$1 } from "./List$1";
import { MathUtil } from "./MathUtil";
import { isNaN_ } from "./number";
/**
 * @hidden
 */
var Flattener = /** @class */ (function (_super) {
    tslib_1.__extends(Flattener, _super);
    function Flattener() {
        return _super.call(this) || this;
    }
    Flattener.d = function (a, b, c, d) {
        var e = new List$1(Number_$type, 0);
        Flattener.c(e, b, c, 0, a - 1, d);
        return e;
    };
    Flattener.c = function (a, b, c, d, e, f) {
        return Flattener.b(a, function (g) { return g; }, b, c, d, e, f);
    };
    Flattener.a = function (a, b, c, d, e, f, g) {
        return Flattener.b(a, function (h) { return b.item(h); }, c, d, e, f, g);
    };
    Flattener.b = function (a, b, c, d, e, f, g) {
        if (e > f) {
            return a;
        }
        var h = c(b(e));
        var i = d(b(e));
        while ((isNaN_(h) || isNaN_(i)) && e < f) {
            ++e;
            h = c(b(e));
            i = d(b(e));
        }
        var j = c(b(f));
        var k = d(b(f));
        while ((isNaN_(j) || isNaN_(k)) && e < f) {
            --f;
            j = c(b(f));
            k = d(b(f));
        }
        if (e == f) {
            a.add(b(e));
            return a;
        }
        a.add(b(e));
        Flattener.e(a, b, c, d, e, f, g);
        a.add(b(f));
        return a;
    };
    Flattener.e = function (a, b, c, d, e, f, g) {
        var h = c(b(e));
        var i = d(b(e));
        while ((isNaN_(h) || isNaN_(i)) && e < f) {
            ++e;
            h = c(b(e));
            i = d(b(e));
        }
        var j = c(b(f));
        var k = d(b(f));
        while ((isNaN_(j) || isNaN_(k)) && e < f) {
            --f;
            j = c(b(f));
            k = d(b(f));
        }
        if (e + 1 >= f) {
            return;
        }
        var l = -1;
        var m = g;
        var n = MathUtil.e(j - h, k - i);
        if (n == 0) {
            for (var o = e + 1; o < f; ++o) {
                var p = c(b(o));
                var q = d(b(o));
                if (isNaN_(p) || isNaN_(q)) {
                    continue;
                }
                var r = MathUtil.e(j - p, k - q);
                if (r >= m) {
                    m = r;
                    l = o;
                }
            }
        }
        else {
            var s = j - h;
            var t = k - i;
            for (var u = e + 1; u < f; ++u) {
                var v = c(b(u));
                var w = d(b(u));
                if (isNaN_(v) || isNaN_(w)) {
                    continue;
                }
                var x = NaN;
                var y = c(b(u)) - h;
                var z = d(b(u)) - i;
                var aa = s * y + t * z;
                if (aa <= 0) {
                    x = MathUtil.e(h - v, i - w);
                }
                else {
                    var ab = s * s + t * t;
                    if (ab <= aa) {
                        x = MathUtil.e(j - v, k - w);
                    }
                    else {
                        var ac = aa / ab;
                        x = MathUtil.e(h + ac * s - v, i + ac * t - w);
                    }
                }
                if (x >= m) {
                    m = x;
                    l = u;
                }
            }
        }
        if (l != -1) {
            Flattener.e(a, b, c, d, e, l, g);
            a.add(b(l));
            Flattener.e(a, b, c, d, l, f, g);
        }
        return;
    };
    Flattener.$t = markType(Flattener, 'Flattener');
    return Flattener;
}(Base));
export { Flattener };
//# sourceMappingURL=Flattener.js.map