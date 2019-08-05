/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
var ColumnSupportingCalculationDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnSupportingCalculationDescription, _super);
    function ColumnSupportingCalculationDescription() {
        return _super.call(this) || this;
    }
    ColumnSupportingCalculationDescription.prototype.get_type = function () {
        return "ColumnSupportingCalculation";
    };
    Object.defineProperty(ColumnSupportingCalculationDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    ColumnSupportingCalculationDescription.$t = markType(ColumnSupportingCalculationDescription, 'ColumnSupportingCalculationDescription', Description.$);
    return ColumnSupportingCalculationDescription;
}(Description));
export { ColumnSupportingCalculationDescription };
//# sourceMappingURL=ColumnSupportingCalculationDescription.js.map