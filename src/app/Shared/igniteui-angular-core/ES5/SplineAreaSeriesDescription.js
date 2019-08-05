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
var SplineAreaSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(SplineAreaSeriesDescription, _super);
    function SplineAreaSeriesDescription() {
        return _super.call(this) || this;
    }
    SplineAreaSeriesDescription.prototype.get_type = function () {
        return "SplineAreaSeries";
    };
    SplineAreaSeriesDescription.$t = markType(SplineAreaSeriesDescription, 'SplineAreaSeriesDescription', SplineSeriesBaseDescription.$);
    return SplineAreaSeriesDescription;
}(SplineSeriesBaseDescription));
export { SplineAreaSeriesDescription };
//# sourceMappingURL=SplineAreaSeriesDescription.js.map