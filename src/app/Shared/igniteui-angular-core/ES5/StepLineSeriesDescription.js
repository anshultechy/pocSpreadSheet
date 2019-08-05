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
var StepLineSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(StepLineSeriesDescription, _super);
    function StepLineSeriesDescription() {
        return _super.call(this) || this;
    }
    StepLineSeriesDescription.prototype.get_type = function () {
        return "StepLineSeries";
    };
    StepLineSeriesDescription.$t = markType(StepLineSeriesDescription, 'StepLineSeriesDescription', HorizontalAnchoredCategorySeriesDescription.$);
    return StepLineSeriesDescription;
}(HorizontalAnchoredCategorySeriesDescription));
export { StepLineSeriesDescription };
//# sourceMappingURL=StepLineSeriesDescription.js.map