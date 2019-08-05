/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { DataChartCategorySeriesDescriptionCoreModule } from "./DataChartCategorySeriesDescriptionCoreModule";
import { CategoryYAxisDescriptionMetadata } from "./CategoryYAxisDescriptionMetadata";
import { NumericXAxisDescriptionMetadata } from "./NumericXAxisDescriptionMetadata";
import { BarSeriesDescriptionMetadata } from "./BarSeriesDescriptionMetadata";
/**
 * @hidden
 */
export class DataChartVerticalCategorySeriesDescriptionModule extends Base {
    static register(a) {
        DataChartCategorySeriesDescriptionCoreModule.register(a);
        CategoryYAxisDescriptionMetadata.d(a);
        NumericXAxisDescriptionMetadata.d(a);
        BarSeriesDescriptionMetadata.d(a);
    }
}
DataChartVerticalCategorySeriesDescriptionModule.$t = markType(DataChartVerticalCategorySeriesDescriptionModule, 'DataChartVerticalCategorySeriesDescriptionModule');
//# sourceMappingURL=DataChartVerticalCategorySeriesDescriptionModule.js.map