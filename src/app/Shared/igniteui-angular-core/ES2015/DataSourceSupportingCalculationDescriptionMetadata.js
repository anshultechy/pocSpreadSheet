/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { DataSourceSupportingCalculationDescription } from "./DataSourceSupportingCalculationDescription";
/**
 * @hidden
 */
export class DataSourceSupportingCalculationDescriptionMetadata extends Base {
    static b(a) {
        if (DataSourceSupportingCalculationDescriptionMetadata.a == null) {
            DataSourceSupportingCalculationDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            DataSourceSupportingCalculationDescriptionMetadata.c(a, DataSourceSupportingCalculationDescriptionMetadata.a);
        }
    }
    static c(a, b) {
    }
    static d(a) {
        DataSourceSupportingCalculationDescriptionMetadata.b(a);
        a.n("DataSourceSupportingCalculation", () => new DataSourceSupportingCalculationDescription());
        a.m("DataSourceSupportingCalculation", DataSourceSupportingCalculationDescriptionMetadata.a);
    }
}
DataSourceSupportingCalculationDescriptionMetadata.$t = markType(DataSourceSupportingCalculationDescriptionMetadata, 'DataSourceSupportingCalculationDescriptionMetadata');
DataSourceSupportingCalculationDescriptionMetadata.a = null;
//# sourceMappingURL=DataSourceSupportingCalculationDescriptionMetadata.js.map