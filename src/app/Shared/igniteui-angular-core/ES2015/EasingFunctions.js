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
export class EasingFunctions extends Base {
    static c(a) {
        return a * a * a;
    }
    static g(a) {
        return (Math.exp(2 * a) - 1) / (Math.exp(2) - 1);
    }
    static a(a) {
        return 1 - Math.sqrt(1 - a * a);
    }
    static e(a, b) {
        let c = a * 2;
        return 0.5 * b(c);
    }
    static f(a, b) {
        let c = (1 - a) * 2;
        let d = 1 - b(c);
        return 0.5 * d + 0.5;
    }
    static cubicEase(a) {
        if (a < 0.5) {
            let b = a * 2;
            return 0.5 * EasingFunctions.c(b);
        }
        let c = (1 - a) * 2;
        let d = 1 - EasingFunctions.c(c);
        return 0.5 * d + 0.5;
    }
    static exponentialEase(a) {
        if (a < 0.5) {
            return EasingFunctions.e(a, EasingFunctions.g);
        }
        return EasingFunctions.f(a, EasingFunctions.g);
    }
    static circleEase(a) {
        if (a < 0.5) {
            return EasingFunctions.e(a, EasingFunctions.a);
        }
        return EasingFunctions.f(a, EasingFunctions.a);
    }
}
EasingFunctions.$t = markType(EasingFunctions, 'EasingFunctions');
//# sourceMappingURL=EasingFunctions.js.map