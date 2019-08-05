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
var StackedAreaSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(StackedAreaSeriesDescription, _super);
    function StackedAreaSeriesDescription() {
        return _super.call(this) || this;
    }
    StackedAreaSeriesDescription.prototype.get_type = function () {
        return "StackedAreaSeries";
    };
    StackedAreaSeriesDescription.$t = markType(StackedAreaSeriesDescription, 'StackedAreaSeriesDescription', HorizontalStackedSeriesBaseDescription.$);
    return StackedAreaSeriesDescription;
}(HorizontalStackedSeriesBaseDescription));
export { StackedAreaSeriesDescription };
//# sourceMappingURL=StackedAreaSeriesDescription.js.map