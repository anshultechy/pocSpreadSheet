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
var StackedSplineAreaSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(StackedSplineAreaSeriesDescription, _super);
    function StackedSplineAreaSeriesDescription() {
        return _super.call(this) || this;
    }
    StackedSplineAreaSeriesDescription.prototype.get_type = function () {
        return "StackedSplineAreaSeries";
    };
    StackedSplineAreaSeriesDescription.$t = markType(StackedSplineAreaSeriesDescription, 'StackedSplineAreaSeriesDescription', HorizontalStackedSeriesBaseDescription.$);
    return StackedSplineAreaSeriesDescription;
}(HorizontalStackedSeriesBaseDescription));
export { StackedSplineAreaSeriesDescription };
//# sourceMappingURL=StackedSplineAreaSeriesDescription.js.map