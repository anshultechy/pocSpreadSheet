/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { isNaN_ } from "./number";
/**
 * @hidden
 */
var DeviceUtils = /** @class */ (function (_super) {
    tslib_1.__extends(DeviceUtils, _super);
    function DeviceUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceUtils.g = function (a) {
        return a;
    };
    DeviceUtils.f = function (a) {
        return a;
    };
    DeviceUtils.a = function (a) {
        if (isNaN_(a)) {
            return NaN;
        }
        if (a <= 0) {
            return NaN;
        }
        return a;
    };
    DeviceUtils.c = function (a) {
        return a * DeviceUtils.d();
    };
    DeviceUtils.b = function (a) {
        return a * DeviceUtils.e();
    };
    DeviceUtils.d = function () {
        var a = DeviceUtils.g(2);
        return 2 / a;
    };
    DeviceUtils.e = function () {
        var a = DeviceUtils.f(2);
        return 2 / a;
    };
    DeviceUtils.$t = markType(DeviceUtils, 'DeviceUtils');
    return DeviceUtils;
}(Base));
export { DeviceUtils };
//# sourceMappingURL=DeviceUtils.js.map