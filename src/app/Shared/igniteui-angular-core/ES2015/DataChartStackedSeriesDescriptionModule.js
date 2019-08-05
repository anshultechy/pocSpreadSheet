/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { DataChartCategorySeriesDescriptionCoreModule } from "./DataChartCategorySeriesDescriptionCoreModule";
import { StackedColumnSeriesDescriptionMetadata } from "./StackedColumnSeriesDescriptionMetadata";
import { StackedAreaSeriesDescriptionMetadata } from "./StackedAreaSeriesDescriptionMetadata";
import { StackedLineSeriesDescriptionMetadata } from "./StackedLineSeriesDescriptionMetadata";
import { StackedBarSeriesDescriptionMetadata } from "./StackedBarSeriesDescriptionMetadata";
import { StackedSplineSeriesDescriptionMetadata } from "./StackedSplineSeriesDescriptionMetadata";
import { StackedSplineAreaSeriesDescriptionMetadata } from "./StackedSplineAreaSeriesDescriptionMetadata";
import { Stacked100ColumnSeriesDescriptionMetadata } from "./Stacked100ColumnSeriesDescriptionMetadata";
import { Stacked100AreaSeriesDescriptionMetadata } from "./Stacked100AreaSeriesDescriptionMetadata";
import { Stacked100LineSeriesDescriptionMetadata } from "./Stacked100LineSeriesDescriptionMetadata";
import { Stacked100BarSeriesDescriptionMetadata } from "./Stacked100BarSeriesDescriptionMetadata";
import { Stacked100SplineSeriesDescriptionMetadata } from "./Stacked100SplineSeriesDescriptionMetadata";
import { Stacked100SplineAreaSeriesDescriptionMetadata } from "./Stacked100SplineAreaSeriesDescriptionMetadata";
import { StackedFragmentSeriesDescriptionMetadata } from "./StackedFragmentSeriesDescriptionMetadata";
/**
 * @hidden
 */
export class DataChartStackedSeriesDescriptionModule extends Base {
    static register(a) {
        DataChartCategorySeriesDescriptionCoreModule.register(a);
        StackedColumnSeriesDescriptionMetadata.d(a);
        StackedAreaSeriesDescriptionMetadata.d(a);
        StackedLineSeriesDescriptionMetadata.d(a);
        StackedBarSeriesDescriptionMetadata.d(a);
        StackedSplineSeriesDescriptionMetadata.d(a);
        StackedSplineAreaSeriesDescriptionMetadata.d(a);
        Stacked100ColumnSeriesDescriptionMetadata.d(a);
        Stacked100AreaSeriesDescriptionMetadata.d(a);
        Stacked100LineSeriesDescriptionMetadata.d(a);
        Stacked100BarSeriesDescriptionMetadata.d(a);
        Stacked100SplineSeriesDescriptionMetadata.d(a);
        Stacked100SplineAreaSeriesDescriptionMetadata.d(a);
        StackedFragmentSeriesDescriptionMetadata.d(a);
    }
}
DataChartStackedSeriesDescriptionModule.$t = markType(DataChartStackedSeriesDescriptionModule, 'DataChartStackedSeriesDescriptionModule');
//# sourceMappingURL=DataChartStackedSeriesDescriptionModule.js.map