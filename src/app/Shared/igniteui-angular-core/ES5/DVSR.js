/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { stringEmpty } from "./string";
/**
 * @hidden
 */
var DVSR = /** @class */ (function (_super) {
    tslib_1.__extends(DVSR, _super);
    function DVSR(a) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.a = a;
        return _this;
    }
    Object.defineProperty(DVSR.prototype, "container", {
        get: function () {
            return this.a;
        },
        set: function (a) {
            this.a = a;
        },
        enumerable: true,
        configurable: true
    });
    DVSR.prototype.getString = function (resourceName_) {
        var a = stringEmpty();
        resourceName_ = resourceName_.charAt(0).toLowerCase() + resourceName_.substr(1);
        a = this.a.getResourceString(resourceName_);
        return a;
    };
    DVSR.$t = markType(DVSR, 'DVSR');
    return DVSR;
}(Base));
export { DVSR };
//# sourceMappingURL=DVSR.js.map