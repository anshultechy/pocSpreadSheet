/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { isNaN_ } from "../../igniteui-angular-core/ES5/number";
/**
 * @hidden
 */
var VisualElementConstraint = /** @class */ (function (_super) {
    tslib_1.__extends(VisualElementConstraint, _super);
    function VisualElementConstraint(a, b, c, d, e, f, g, h, i) {
        var _this = _super.call(this) || this;
        _this.k = 0;
        _this.j = 0;
        _this.m = 0;
        _this.l = 0;
        _this.n = 0;
        _this.i = 0;
        _this.b = null;
        _this.c = null;
        _this.a = null;
        if (b > c) {
            c = b;
        }
        if (a < b) {
            a = b;
        }
        else if (a > c) {
            a = c;
        }
        if (e > f) {
            f = e;
        }
        if (d < e) {
            d = e;
        }
        else if (d > f) {
            d = f;
        }
        _this.n = a;
        _this.m = b;
        _this.k = c;
        _this.j = f;
        _this.l = e;
        _this.i = d;
        _this.b = g;
        _this.a = h;
        _this.c = i;
        return _this;
    }
    VisualElementConstraint.prototype.e = function (a) {
        if (!isNaN_(this.i)) {
            a = this.i;
        }
        else if (a > this.j) {
            a = this.j;
        }
        else if (a < this.l) {
            a = this.l;
        }
        return a;
    };
    VisualElementConstraint.prototype.f = function (a) {
        if (!isNaN_(this.n)) {
            a = this.n;
        }
        else if (a > this.k) {
            a = this.k;
        }
        else if (a < this.m) {
            a = this.m;
        }
        return a;
    };
    VisualElementConstraint.prototype.g = function (a) {
        var b = a;
        b += this.c.a;
        b += this.a.a;
        b += this.b.a;
        return b;
    };
    VisualElementConstraint.prototype.h = function (a) {
        var b = a;
        b += this.c.d;
        b += this.a.d;
        b += this.b.d;
        return b;
    };
    VisualElementConstraint.prototype.d = function (a, b, c, d, e) {
        var f = this.b;
        if (f != null) {
            a += f.b;
            b += f.c;
            c -= f.d;
            d -= f.a;
        }
        var g = c;
        c = this.f(c);
        if (g != c) {
            a += (g - c) / 2;
        }
        var h = d;
        d = this.e(d);
        if (h != d) {
            b += (h - d) / 2;
        }
        return e(a, b, c, d);
    };
    VisualElementConstraint.$t = markType(VisualElementConstraint, 'VisualElementConstraint');
    return VisualElementConstraint;
}(Base));
export { VisualElementConstraint };
//# sourceMappingURL=VisualElementConstraint.js.map
