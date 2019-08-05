/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var ShapeGuideFormula = /** @class */ (function (_super) {
    tslib_1.__extends(ShapeGuideFormula, _super);
    function ShapeGuideFormula() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShapeGuideFormula.j = function (a) {
        var t1 = a;
        L0: while (true) {
            switch (t1) {
                case "abs": return ShapeGuideFormula.d;
                case "sqrt": return ShapeGuideFormula.u;
                case "val": return ShapeGuideFormula.w;
                default:
                    t1 = "val";
                    continue L0;
            }
            break;
        }
    };
    ShapeGuideFormula.k = function (a) {
        switch (a) {
            case "at2": return ShapeGuideFormula.g;
            case "cos": return ShapeGuideFormula.i;
            case "max": return ShapeGuideFormula.n;
            case "min": return ShapeGuideFormula.o;
            case "sin": return ShapeGuideFormula.t;
            case "tan": return ShapeGuideFormula.v;
            default: return null;
        }
    };
    ShapeGuideFormula.l = function (a) {
        switch (a) {
            case "*/": return ShapeGuideFormula.q;
            case "+-": return ShapeGuideFormula.f;
            case "+/": return ShapeGuideFormula.e;
            case "?:": return ShapeGuideFormula.m;
            case "cat2": return ShapeGuideFormula.h;
            case "mod": return ShapeGuideFormula.p;
            case "pin": return ShapeGuideFormula.r;
            case "sat2": return ShapeGuideFormula.s;
            default: return null;
        }
    };
    ShapeGuideFormula.b = function (a) {
        return a / 60000 / 180 * Math.PI;
    };
    ShapeGuideFormula.a = function (a) {
        return a * 180 / Math.PI * 60000;
    };
    ShapeGuideFormula.$t = markType(ShapeGuideFormula, 'ShapeGuideFormula');
    ShapeGuideFormula.d = function (a) { return Math.abs(a); };
    ShapeGuideFormula.u = function (a) { return Math.sqrt(a); };
    ShapeGuideFormula.w = function (a) { return a; };
    ShapeGuideFormula.g = function (a, b) { return ShapeGuideFormula.a(Math.atan2(b, a)); };
    ShapeGuideFormula.i = function (a, b) { return a * Math.cos(ShapeGuideFormula.b(b)); };
    ShapeGuideFormula.n = function (a, b) { return a > b ? a : b; };
    ShapeGuideFormula.o = function (a, b) { return a < b ? a : b; };
    ShapeGuideFormula.t = function (a, b) { return a * Math.sin(ShapeGuideFormula.b(b)); };
    ShapeGuideFormula.v = function (a, b) { return a * Math.tan(ShapeGuideFormula.b(b)); };
    ShapeGuideFormula.q = function (a, b, c) { return (a * b) / c; };
    ShapeGuideFormula.f = function (a, b, c) { return (a + b) - c; };
    ShapeGuideFormula.e = function (a, b, c) { return (a + b) / c; };
    ShapeGuideFormula.m = function (a, b, c) { return a > 0 ? b : c; };
    ShapeGuideFormula.h = function (a, b, c) { return a * Math.cos(Math.atan2(c, b)); };
    ShapeGuideFormula.p = function (a, b, c) { return Math.sqrt(a * a + b * b + c * c); };
    ShapeGuideFormula.r = function (a, b, c) { return b < a ? a : (b > c ? c : b); };
    ShapeGuideFormula.s = function (a, b, c) { return a * Math.sin(Math.atan2(c, b)); };
    return ShapeGuideFormula;
}(Base));
export { ShapeGuideFormula };
//# sourceMappingURL=ShapeGuideFormula.js.map
