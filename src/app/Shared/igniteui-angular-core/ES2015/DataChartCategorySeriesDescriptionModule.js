/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { DataChartCategorySeriesDescriptionCoreModule } from "./DataChartCategorySeriesDescriptionCoreModule";
import { AreaSeriesDescriptionMetadata } from "./AreaSeriesDescriptionMetadata";
import { SplineAreaSeriesDescriptionMetadata } from "./SplineAreaSeriesDescriptionMetadata";
import { LineSeriesDescriptionMetadata } from "./LineSeriesDescriptionMetadata";
import { SplineSeriesDescriptionMetadata } from "./SplineSeriesDescriptionMetadata";
import { PointSeriesDescriptionMetadata } from "./PointSeriesDescriptionMetadata";
import { ColumnSeriesDescriptionMetadata } from "./ColumnSeriesDescriptionMetadata";
import { StepLineSeriesDescriptionMetadata } from "./StepLineSeriesDescriptionMetadata";
import { StepAreaSeriesDescriptionMetadata } from "./StepAreaSeriesDescriptionMetadata";
import { WaterfallSeriesDescriptionMetadata } from "./WaterfallSeriesDescriptionMetadata";
/**
 * @hidden
 */
export class DataChartCategorySeriesDescriptionModule extends Base {
    static register(a) {
        DataChartCategorySeriesDescriptionCoreModule.register(a);
        AreaSeriesDescriptionMetadata.d(a);
        SplineAreaSeriesDescriptionMetadata.d(a);
        LineSeriesDescriptionMetadata.d(a);
        SplineSeriesDescriptionMetadata.d(a);
        PointSeriesDescriptionMetadata.d(a);
        ColumnSeriesDescriptionMetadata.d(a);
        StepLineSeriesDescriptionMetadata.d(a);
        StepAreaSeriesDescriptionMetadata.d(a);
        WaterfallSeriesDescriptionMetadata.d(a);
    }
}
DataChartCategorySeriesDescriptionModule.$t = markType(DataChartCategorySeriesDescriptionModule, 'DataChartCategorySeriesDescriptionModule');
//# sourceMappingURL=DataChartCategorySeriesDescriptionModule.js.map