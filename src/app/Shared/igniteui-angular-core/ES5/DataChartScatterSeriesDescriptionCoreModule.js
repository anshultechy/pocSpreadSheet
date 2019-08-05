/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { DataChartDescriptionCoreModule } from "./DataChartDescriptionCoreModule";
import { NumericXAxisDescriptionMetadata } from "./NumericXAxisDescriptionMetadata";
import { NumericYAxisDescriptionMetadata } from "./NumericYAxisDescriptionMetadata";
/**
 * @hidden
 */
var DataChartScatterSeriesDescriptionCoreModule = /** @class */ (function (_super) {
    tslib_1.__extends(DataChartScatterSeriesDescriptionCoreModule, _super);
    function DataChartScatterSeriesDescriptionCoreModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataChartScatterSeriesDescriptionCoreModule.register = function (a) {
        DataChartDescriptionCoreModule.register(a);
        NumericXAxisDescriptionMetadata.d(a);
        NumericYAxisDescriptionMetadata.d(a);
    };
    DataChartScatterSeriesDescriptionCoreModule.$t = markType(DataChartScatterSeriesDescriptionCoreModule, 'DataChartScatterSeriesDescriptionCoreModule');
    return DataChartScatterSeriesDescriptionCoreModule;
}(Base));
export { DataChartScatterSeriesDescriptionCoreModule };
//# sourceMappingURL=DataChartScatterSeriesDescriptionCoreModule.js.map