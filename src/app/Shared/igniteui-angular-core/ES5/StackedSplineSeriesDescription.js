/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { HorizontalStackedSeriesBaseDescription } from "./HorizontalStackedSeriesBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var StackedSplineSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(StackedSplineSeriesDescription, _super);
    function StackedSplineSeriesDescription() {
        return _super.call(this) || this;
    }
    StackedSplineSeriesDescription.prototype.get_type = function () {
        return "StackedSplineSeries";
    };
    StackedSplineSeriesDescription.$t = markType(StackedSplineSeriesDescription, 'StackedSplineSeriesDescription', HorizontalStackedSeriesBaseDescription.$);
    return StackedSplineSeriesDescription;
}(HorizontalStackedSeriesBaseDescription));
export { StackedSplineSeriesDescription };
//# sourceMappingURL=StackedSplineSeriesDescription.js.map