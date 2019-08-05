/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { CategoryDateTimeXAxisDescriptionMetadata } from "./CategoryDateTimeXAxisDescriptionMetadata";
import { TimeXAxisDescriptionMetadata } from "./TimeXAxisDescriptionMetadata";
/**
 * @hidden
 */
export class DataChartExtendedAxesDescriptionModule extends Base {
    static register(a) {
        CategoryDateTimeXAxisDescriptionMetadata.d(a);
        TimeXAxisDescriptionMetadata.d(a);
    }
}
DataChartExtendedAxesDescriptionModule.$t = markType(DataChartExtendedAxesDescriptionModule, 'DataChartExtendedAxesDescriptionModule');
//# sourceMappingURL=DataChartExtendedAxesDescriptionModule.js.map