/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { HorizontalAnchoredCategorySeriesDescription } from "./HorizontalAnchoredCategorySeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var StepAreaSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(StepAreaSeriesDescription, _super);
    function StepAreaSeriesDescription() {
        return _super.call(this) || this;
    }
    StepAreaSeriesDescription.prototype.get_type = function () {
        return "StepAreaSeries";
    };
    StepAreaSeriesDescription.$t = markType(StepAreaSeriesDescription, 'StepAreaSeriesDescription', HorizontalAnchoredCategorySeriesDescription.$);
    return StepAreaSeriesDescription;
}(HorizontalAnchoredCategorySeriesDescription));
export { StepAreaSeriesDescription };
//# sourceMappingURL=StepAreaSeriesDescription.js.map