/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { NumericYAxisDescription } from "./NumericYAxisDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var PercentChangeYAxisDescription = /** @class */ (function (_super) {
    tslib_1.__extends(PercentChangeYAxisDescription, _super);
    function PercentChangeYAxisDescription() {
        return _super.call(this) || this;
    }
    PercentChangeYAxisDescription.prototype.get_type = function () {
        return "PercentChangeYAxis";
    };
    PercentChangeYAxisDescription.$t = markType(PercentChangeYAxisDescription, 'PercentChangeYAxisDescription', NumericYAxisDescription.$);
    return PercentChangeYAxisDescription;
}(NumericYAxisDescription));
export { PercentChangeYAxisDescription };
//# sourceMappingURL=PercentChangeYAxisDescription.js.map