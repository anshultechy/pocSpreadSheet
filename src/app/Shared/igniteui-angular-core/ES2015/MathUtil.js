/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
/**
 * @hidden
 */
export class MathUtil extends Base {
    static a(a) {
        return Math.log(a + Math.sqrt(a * a + 1));
    }
    static e(a, b) {
        return Math.sqrt(a * a + b * b);
    }
    static l(a) {
        return a * a;
    }
    static b(a, b, c) {
        return Math.min(c, Math.max(b, a));
    }
    static k(a) {
        return Math.PI * a / 180;
    }
    static d(a) {
        return 180 * a / Math.PI;
    }
    static i(a, b, c) {
        return Math.min(a, Math.min(b, c));
    }
    static g(a, b, c) {
        return Math.max(a, Math.max(b, c));
    }
    static h(...a) {
        let b = a[0];
        for (let c = 1; c < a.length; ++c) {
            b = Math.min(b, a[c]);
        }
        return b;
    }
    static f(...a) {
        let b = a[0];
        for (let c = 1; c < a.length; ++c) {
            b = Math.max(b, a[c]);
        }
        return b;
    }
}
MathUtil.$t = markType(MathUtil, 'MathUtil');
MathUtil.j = (1 + Math.sqrt(5)) / 2;
MathUtil.m = Math.sqrt(2);
//# sourceMappingURL=MathUtil.js.map