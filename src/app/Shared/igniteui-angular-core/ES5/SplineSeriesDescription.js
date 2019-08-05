/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { SplineSeriesBaseDescription } from "./SplineSeriesBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var SplineSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(SplineSeriesDescription, _super);
    function SplineSeriesDescription() {
        return _super.call(this) || this;
    }
    SplineSeriesDescription.prototype.get_type = function () {
        return "SplineSeries";
    };
    SplineSeriesDescription.$t = markType(SplineSeriesDescription, 'SplineSeriesDescription', SplineSeriesBaseDescription.$);
    return SplineSeriesDescription;
}(SplineSeriesBaseDescription));
export { SplineSeriesDescription };
//# sourceMappingURL=SplineSeriesDescription.js.map