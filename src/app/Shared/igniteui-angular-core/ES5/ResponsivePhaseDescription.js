/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
var ResponsivePhaseDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ResponsivePhaseDescription, _super);
    function ResponsivePhaseDescription() {
        var _this = _super.call(this) || this;
        _this.h = null;
        _this.f = 0;
        return _this;
    }
    ResponsivePhaseDescription.prototype.get_type = function () {
        return "ResponsivePhase";
    };
    Object.defineProperty(ResponsivePhaseDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsivePhaseDescription.prototype, "name", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("Name");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsivePhaseDescription.prototype, "delayMilliseconds", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("DelayMilliseconds");
        },
        enumerable: true,
        configurable: true
    });
    ResponsivePhaseDescription.$t = markType(ResponsivePhaseDescription, 'ResponsivePhaseDescription', Description.$);
    return ResponsivePhaseDescription;
}(Description));
export { ResponsivePhaseDescription };
//# sourceMappingURL=ResponsivePhaseDescription.js.map