/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { DataChartScatterSeriesDescriptionCoreModule } from "./DataChartScatterSeriesDescriptionCoreModule";
import { ScatterSeriesDescriptionMetadata } from "./ScatterSeriesDescriptionMetadata";
import { ScatterLineSeriesDescriptionMetadata } from "./ScatterLineSeriesDescriptionMetadata";
import { ScatterSplineSeriesDescriptionMetadata } from "./ScatterSplineSeriesDescriptionMetadata";
import { BubbleSeriesDescriptionMetadata } from "./BubbleSeriesDescriptionMetadata";
import { SizeScaleDescriptionMetadata } from "./SizeScaleDescriptionMetadata";
import { ColorScaleDescriptionMetadata } from "./ColorScaleDescriptionMetadata";
import { CustomPaletteColorScaleDescriptionMetadata } from "./CustomPaletteColorScaleDescriptionMetadata";
/**
 * @hidden
 */
var DataChartScatterSeriesDescriptionModule = /** @class */ (function (_super) {
    tslib_1.__extends(DataChartScatterSeriesDescriptionModule, _super);
    function DataChartScatterSeriesDescriptionModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataChartScatterSeriesDescriptionModule.register = function (a) {
        DataChartScatterSeriesDescriptionCoreModule.register(a);
        ScatterSeriesDescriptionMetadata.d(a);
        ScatterLineSeriesDescriptionMetadata.d(a);
        ScatterSplineSeriesDescriptionMetadata.d(a);
        BubbleSeriesDescriptionMetadata.d(a);
        SizeScaleDescriptionMetadata.d(a);
        ColorScaleDescriptionMetadata.d(a);
        CustomPaletteColorScaleDescriptionMetadata.d(a);
    };
    DataChartScatterSeriesDescriptionModule.$t = markType(DataChartScatterSeriesDescriptionModule, 'DataChartScatterSeriesDescriptionModule');
    return DataChartScatterSeriesDescriptionModule;
}(Base));
export { DataChartScatterSeriesDescriptionModule };
//# sourceMappingURL=DataChartScatterSeriesDescriptionModule.js.map