/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { DataChartDescriptionCoreModule } from "./DataChartDescriptionCoreModule";
import { CategoryAngleAxisDescriptionMetadata } from "./CategoryAngleAxisDescriptionMetadata";
import { NumericRadiusAxisDescriptionMetadata } from "./NumericRadiusAxisDescriptionMetadata";
/**
 * @hidden
 */
var DataChartRadialSeriesDescriptionCoreModule = /** @class */ (function (_super) {
    tslib_1.__extends(DataChartRadialSeriesDescriptionCoreModule, _super);
    function DataChartRadialSeriesDescriptionCoreModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataChartRadialSeriesDescriptionCoreModule.register = function (a) {
        DataChartDescriptionCoreModule.register(a);
        CategoryAngleAxisDescriptionMetadata.d(a);
        NumericRadiusAxisDescriptionMetadata.d(a);
    };
    DataChartRadialSeriesDescriptionCoreModule.$t = markType(DataChartRadialSeriesDescriptionCoreModule, 'DataChartRadialSeriesDescriptionCoreModule');
    return DataChartRadialSeriesDescriptionCoreModule;
}(Base));
export { DataChartRadialSeriesDescriptionCoreModule };
//# sourceMappingURL=DataChartRadialSeriesDescriptionCoreModule.js.map