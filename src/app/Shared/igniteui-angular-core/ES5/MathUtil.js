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
var MathUtil = /** @class */ (function (_super) {
    tslib_1.__extends(MathUtil, _super);
    function MathUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MathUtil.a = function (a) {
        return Math.log(a + Math.sqrt(a * a + 1));
    };
    MathUtil.e = function (a, b) {
        return Math.sqrt(a * a + b * b);
    };
    MathUtil.l = function (a) {
        return a * a;
    };
    MathUtil.b = function (a, b, c) {
        return Math.min(c, Math.max(b, a));
    };
    MathUtil.k = function (a) {
        return Math.PI * a / 180;
    };
    MathUtil.d = function (a) {
        return 180 * a / Math.PI;
    };
    MathUtil.i = function (a, b, c) {
        return Math.min(a, Math.min(b, c));
    };
    MathUtil.g = function (a, b, c) {
        return Math.max(a, Math.max(b, c));
    };
    MathUtil.h = function () {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        var b = a[0];
        for (var c = 1; c < a.length; ++c) {
            b = Math.min(b, a[c]);
        }
        return b;
    };
    MathUtil.f = function () {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        var b = a[0];
        for (var c = 1; c < a.length; ++c) {
            b = Math.max(b, a[c]);
        }
        return b;
    };
    MathUtil.$t = markType(MathUtil, 'MathUtil');
    MathUtil.j = (1 + Math.sqrt(5)) / 2;
    MathUtil.m = Math.sqrt(2);
    return MathUtil;
}(Base));
export { MathUtil };
//# sourceMappingURL=MathUtil.js.map