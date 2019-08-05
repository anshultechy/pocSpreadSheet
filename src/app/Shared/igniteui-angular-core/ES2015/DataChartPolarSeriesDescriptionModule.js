/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { DataChartPolarSeriesDescriptionCoreModule } from "./DataChartPolarSeriesDescriptionCoreModule";
import { PolarScatterSeriesDescriptionMetadata } from "./PolarScatterSeriesDescriptionMetadata";
import { PolarLineSeriesDescriptionMetadata } from "./PolarLineSeriesDescriptionMetadata";
import { PolarAreaSeriesDescriptionMetadata } from "./PolarAreaSeriesDescriptionMetadata";
import { PolarSplineAreaSeriesDescriptionMetadata } from "./PolarSplineAreaSeriesDescriptionMetadata";
import { PolarSplineSeriesDescriptionMetadata } from "./PolarSplineSeriesDescriptionMetadata";
/**
 * @hidden
 */
export class DataChartPolarSeriesDescriptionModule extends Base {
    static register(a) {
        DataChartPolarSeriesDescriptionCoreModule.register(a);
        PolarScatterSeriesDescriptionMetadata.d(a);
        PolarLineSeriesDescriptionMetadata.d(a);
        PolarAreaSeriesDescriptionMetadata.d(a);
        PolarSplineAreaSeriesDescriptionMetadata.d(a);
        PolarSplineSeriesDescriptionMetadata.d(a);
    }
}
DataChartPolarSeriesDescriptionModule.$t = markType(DataChartPolarSeriesDescriptionModule, 'DataChartPolarSeriesDescriptionModule');
//# sourceMappingURL=DataChartPolarSeriesDescriptionModule.js.map