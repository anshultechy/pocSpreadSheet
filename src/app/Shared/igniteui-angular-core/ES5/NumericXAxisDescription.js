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
var NumericXAxisDescription = /** @class */ (function (_super) {
    tslib_1.__extends(NumericXAxisDescription, _super);
    function NumericXAxisDescription() {
        return _super.call(this) || this;
    }
    NumericXAxisDescription.prototype.get_type = function () {
        return "NumericXAxis";
    };
    NumericXAxisDescription.$t = markType(NumericXAxisDescription, 'NumericXAxisDescription', StraightNumericAxisBaseDescription.$);
    return NumericXAxisDescription;
}(StraightNumericAxisBaseDescription));
export { NumericXAxisDescription };
//# sourceMappingURL=NumericXAxisDescription.js.map