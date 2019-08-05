/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { DataChartRadialSeriesDescriptionCoreModule } from "./DataChartRadialSeriesDescriptionCoreModule";
import { RadialLineSeriesDescriptionMetadata } from "./RadialLineSeriesDescriptionMetadata";
import { RadialColumnSeriesDescriptionMetadata } from "./RadialColumnSeriesDescriptionMetadata";
import { RadialAreaSeriesDescriptionMetadata } from "./RadialAreaSeriesDescriptionMetadata";
import { RadialPieSeriesDescriptionMetadata } from "./RadialPieSeriesDescriptionMetadata";
/**
 * @hidden
 */
var DataChartRadialSeriesDescriptionModule = /** @class */ (function (_super) {
    tslib_1.__extends(DataChartRadialSeriesDescriptionModule, _super);
    function DataChartRadialSeriesDescriptionModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataChartRadialSeriesDescriptionModule.register = function (a) {
        DataChartRadialSeriesDescriptionCoreModule.register(a);
        RadialLineSeriesDescriptionMetadata.d(a);
        RadialColumnSeriesDescriptionMetadata.d(a);
        RadialAreaSeriesDescriptionMetadata.d(a);
        RadialPieSeriesDescriptionMetadata.d(a);
    };
    DataChartRadialSeriesDescriptionModule.$t = markType(DataChartRadialSeriesDescriptionModule, 'DataChartRadialSeriesDescriptionModule');
    return DataChartRadialSeriesDescriptionModule;
}(Base));
export { DataChartRadialSeriesDescriptionModule };
//# sourceMappingURL=DataChartRadialSeriesDescriptionModule.js.map