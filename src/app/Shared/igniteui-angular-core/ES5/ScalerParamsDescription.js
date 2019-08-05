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
var ScalerParamsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ScalerParamsDescription, _super);
    function ScalerParamsDescription() {
        var _this = _super.call(this) || this;
        _this.f = 0;
        return _this;
    }
    ScalerParamsDescription.prototype.get_type = function () {
        return "ScalerParams";
    };
    Object.defineProperty(ScalerParamsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScalerParamsDescription.prototype, "referenceValue", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("ReferenceValue");
        },
        enumerable: true,
        configurable: true
    });
    ScalerParamsDescription.$t = markType(ScalerParamsDescription, 'ScalerParamsDescription', Description.$);
    return ScalerParamsDescription;
}(Description));
export { ScalerParamsDescription };
//# sourceMappingURL=ScalerParamsDescription.js.map