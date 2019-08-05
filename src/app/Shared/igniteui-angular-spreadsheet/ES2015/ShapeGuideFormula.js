/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class ShapeGuideFormula extends Base {
    static j(a) {
        let t1 = a;
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
    }
    static k(a) {
        switch (a) {
            case "at2": return ShapeGuideFormula.g;
            case "cos": return ShapeGuideFormula.i;
            case "max": return ShapeGuideFormula.n;
            case "min": return ShapeGuideFormula.o;
            case "sin": return ShapeGuideFormula.t;
            case "tan": return ShapeGuideFormula.v;
            default: return null;
        }
    }
    static l(a) {
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
    }
    static b(a) {
        return a / 60000 / 180 * Math.PI;
    }
    static a(a) {
        return a * 180 / Math.PI * 60000;
    }
}
ShapeGuideFormula.$t = markType(ShapeGuideFormula, 'ShapeGuideFormula');
ShapeGuideFormula.d = (a) => Math.abs(a);
ShapeGuideFormula.u = (a) => Math.sqrt(a);
ShapeGuideFormula.w = (a) => a;
ShapeGuideFormula.g = (a, b) => ShapeGuideFormula.a(Math.atan2(b, a));
ShapeGuideFormula.i = (a, b) => a * Math.cos(ShapeGuideFormula.b(b));
ShapeGuideFormula.n = (a, b) => a > b ? a : b;
ShapeGuideFormula.o = (a, b) => a < b ? a : b;
ShapeGuideFormula.t = (a, b) => a * Math.sin(ShapeGuideFormula.b(b));
ShapeGuideFormula.v = (a, b) => a * Math.tan(ShapeGuideFormula.b(b));
ShapeGuideFormula.q = (a, b, c) => (a * b) / c;
ShapeGuideFormula.f = (a, b, c) => (a + b) - c;
ShapeGuideFormula.e = (a, b, c) => (a + b) / c;
ShapeGuideFormula.m = (a, b, c) => a > 0 ? b : c;
ShapeGuideFormula.h = (a, b, c) => a * Math.cos(Math.atan2(c, b));
ShapeGuideFormula.p = (a, b, c) => Math.sqrt(a * a + b * b + c * c);
ShapeGuideFormula.r = (a, b, c) => b < a ? a : (b > c ? c : b);
ShapeGuideFormula.s = (a, b, c) => a * Math.sin(Math.atan2(c, b));
//# sourceMappingURL=ShapeGuideFormula.js.map