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
var WeakReference = /** @class */ (function (_super) {
    tslib_1.__extends(WeakReference, _super);
    function WeakReference(a) {
        var _this = _super.call(this) || this;
        _this.b = null;
        _this.b = a;
        return _this;
    }
    WeakReference.prototype.get_a = function () {
        return true;
    };
    Object.defineProperty(WeakReference.prototype, "a", {
        get: function () {
            return this.get_a();
        },
        enumerable: true,
        configurable: true
    });
    WeakReference.prototype.get_c = function () {
        return this.b;
    };
    WeakReference.prototype.set_c = function (a) {
        this.b = a;
    };
    Object.defineProperty(WeakReference.prototype, "c", {
        get: function () {
            return this.get_c();
        },
        set: function (a) {
            this.set_c(a);
        },
        enumerable: true,
        configurable: true
    });
    WeakReference.$t = markType(WeakReference, 'WeakReference');
    return WeakReference;
}(Base));
export { WeakReference };
//# sourceMappingURL=WeakReference.js.map