/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnSupportingCalculationDescription } from "./ColumnSupportingCalculationDescription";
/**
 * @hidden
 */
export class ColumnSupportingCalculationDescriptionMetadata extends Base {
    static b(a) {
        if (ColumnSupportingCalculationDescriptionMetadata.a == null) {
            ColumnSupportingCalculationDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ColumnSupportingCalculationDescriptionMetadata.c(a, ColumnSupportingCalculationDescriptionMetadata.a);
        }
    }
    static c(a, b) {
    }
    static d(a) {
        ColumnSupportingCalculationDescriptionMetadata.b(a);
        a.n("ColumnSupportingCalculation", () => new ColumnSupportingCalculationDescription());
        a.m("ColumnSupportingCalculation", ColumnSupportingCalculationDescriptionMetadata.a);
    }
}
ColumnSupportingCalculationDescriptionMetadata.$t = markType(ColumnSupportingCalculationDescriptionMetadata, 'ColumnSupportingCalculationDescriptionMetadata');
ColumnSupportingCalculationDescriptionMetadata.a = null;
//# sourceMappingURL=ColumnSupportingCalculationDescriptionMetadata.js.map