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
var DataSourceSupportingCalculationDescription = /** @class */ (function (_super) {
    tslib_1.__extends(DataSourceSupportingCalculationDescription, _super);
    function DataSourceSupportingCalculationDescription() {
        return _super.call(this) || this;
    }
    DataSourceSupportingCalculationDescription.prototype.get_type = function () {
        return "DataSourceSupportingCalculation";
    };
    Object.defineProperty(DataSourceSupportingCalculationDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    DataSourceSupportingCalculationDescription.$t = markType(DataSourceSupportingCalculationDescription, 'DataSourceSupportingCalculationDescription', Description.$);
    return DataSourceSupportingCalculationDescription;
}(Description));
export { DataSourceSupportingCalculationDescription };
//# sourceMappingURL=DataSourceSupportingCalculationDescription.js.map