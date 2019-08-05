/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { DataChartDescriptionCoreModule } from "./DataChartDescriptionCoreModule";
import { CategoryXAxisDescriptionMetadata } from "./CategoryXAxisDescriptionMetadata";
import { NumericYAxisDescriptionMetadata } from "./NumericYAxisDescriptionMetadata";
import { FinancialPriceSeriesDescriptionMetadata } from "./FinancialPriceSeriesDescriptionMetadata";
/**
 * @hidden
 */
export class DataChartFinancialSeriesDescriptionModule extends Base {
    static register(a) {
        DataChartDescriptionCoreModule.register(a);
        CategoryXAxisDescriptionMetadata.d(a);
        NumericYAxisDescriptionMetadata.d(a);
        FinancialPriceSeriesDescriptionMetadata.d(a);
    }
}
DataChartFinancialSeriesDescriptionModule.$t = markType(DataChartFinancialSeriesDescriptionModule, 'DataChartFinancialSeriesDescriptionModule');
//# sourceMappingURL=DataChartFinancialSeriesDescriptionModule.js.map