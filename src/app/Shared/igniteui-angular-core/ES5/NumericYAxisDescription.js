/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { StraightNumericAxisBaseDescription } from "./StraightNumericAxisBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var NumericYAxisDescription = /** @class */ (function (_super) {
    tslib_1.__extends(NumericYAxisDescription, _super);
    function NumericYAxisDescription() {
        return _super.call(this) || this;
    }
    NumericYAxisDescription.prototype.get_type = function () {
        return "NumericYAxis";
    };
    NumericYAxisDescription.$t = markType(NumericYAxisDescription, 'NumericYAxisDescription', StraightNumericAxisBaseDescription.$);
    return NumericYAxisDescription;
}(StraightNumericAxisBaseDescription));
export { NumericYAxisDescription };
//# sourceMappingURL=NumericYAxisDescription.js.map