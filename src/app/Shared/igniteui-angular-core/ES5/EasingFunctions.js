/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
/**
 * @hidden
 */
var EasingFunctions = /** @class */ (function (_super) {
    tslib_1.__extends(EasingFunctions, _super);
    function EasingFunctions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EasingFunctions.c = function (a) {
        return a * a * a;
    };
    EasingFunctions.g = function (a) {
        return (Math.exp(2 * a) - 1) / (Math.exp(2) - 1);
    };
    EasingFunctions.a = function (a) {
        return 1 - Math.sqrt(1 - a * a);
    };
    EasingFunctions.e = function (a, b) {
        var c = a * 2;
        return 0.5 * b(c);
    };
    EasingFunctions.f = function (a, b) {
        var c = (1 - a) * 2;
        var d = 1 - b(c);
        return 0.5 * d + 0.5;
    };
    EasingFunctions.cubicEase = function (a) {
        if (a < 0.5) {
            var b = a * 2;
            return 0.5 * EasingFunctions.c(b);
        }
        var c = (1 - a) * 2;
        var d = 1 - EasingFunctions.c(c);
        return 0.5 * d + 0.5;
    };
    EasingFunctions.exponentialEase = function (a) {
        if (a < 0.5) {
            return EasingFunctions.e(a, EasingFunctions.g);
        }
        return EasingFunctions.f(a, EasingFunctions.g);
    };
    EasingFunctions.circleEase = function (a) {
        if (a < 0.5) {
            return EasingFunctions.e(a, EasingFunctions.a);
        }
        return EasingFunctions.f(a, EasingFunctions.a);
    };
    EasingFunctions.$t = markType(EasingFunctions, 'EasingFunctions');
    return EasingFunctions;
}(Base));
export { EasingFunctions };
//# sourceMappingURL=EasingFunctions.js.map