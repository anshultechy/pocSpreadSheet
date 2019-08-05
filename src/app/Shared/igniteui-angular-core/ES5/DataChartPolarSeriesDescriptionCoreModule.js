/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { DataChartDescriptionCoreModule } from "./DataChartDescriptionCoreModule";
import { NumericAngleAxisDescriptionMetadata } from "./NumericAngleAxisDescriptionMetadata";
import { NumericRadiusAxisDescriptionMetadata } from "./NumericRadiusAxisDescriptionMetadata";
/**
 * @hidden
 */
var DataChartPolarSeriesDescriptionCoreModule = /** @class */ (function (_super) {
    tslib_1.__extends(DataChartPolarSeriesDescriptionCoreModule, _super);
    function DataChartPolarSeriesDescriptionCoreModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataChartPolarSeriesDescriptionCoreModule.register = function (a) {
        DataChartDescriptionCoreModule.register(a);
        NumericAngleAxisDescriptionMetadata.d(a);
        NumericRadiusAxisDescriptionMetadata.d(a);
    };
    DataChartPolarSeriesDescriptionCoreModule.$t = markType(DataChartPolarSeriesDescriptionCoreModule, 'DataChartPolarSeriesDescriptionCoreModule');
    return DataChartPolarSeriesDescriptionCoreModule;
}(Base));
export { DataChartPolarSeriesDescriptionCoreModule };
//# sourceMappingURL=DataChartPolarSeriesDescriptionCoreModule.js.map