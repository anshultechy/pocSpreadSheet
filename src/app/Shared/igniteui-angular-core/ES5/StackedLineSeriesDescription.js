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
var StackedLineSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(StackedLineSeriesDescription, _super);
    function StackedLineSeriesDescription() {
        return _super.call(this) || this;
    }
    StackedLineSeriesDescription.prototype.get_type = function () {
        return "StackedLineSeries";
    };
    StackedLineSeriesDescription.$t = markType(StackedLineSeriesDescription, 'StackedLineSeriesDescription', HorizontalStackedSeriesBaseDescription.$);
    return StackedLineSeriesDescription;
}(HorizontalStackedSeriesBaseDescription));
export { StackedLineSeriesDescription };
//# sourceMappingURL=StackedLineSeriesDescription.js.map