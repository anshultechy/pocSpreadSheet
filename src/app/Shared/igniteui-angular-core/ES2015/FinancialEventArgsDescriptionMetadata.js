/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FinancialCalculationDataSourceDescriptionMetadata } from "./FinancialCalculationDataSourceDescriptionMetadata";
import { FinancialCalculationSupportingCalculationsDescriptionMetadata } from "./FinancialCalculationSupportingCalculationsDescriptionMetadata";
import { FinancialEventArgsDescription } from "./FinancialEventArgsDescription";
/**
 * @hidden
 */
export class FinancialEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (FinancialEventArgsDescriptionMetadata.a == null) {
            FinancialEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FinancialEventArgsDescriptionMetadata.c(a, FinancialEventArgsDescriptionMetadata.a);
            FinancialCalculationDataSourceDescriptionMetadata.d(a);
            FinancialCalculationSupportingCalculationsDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("Position", "Number:int");
        b.item("Count", "Number:int");
        b.item("DataSource", "ExportedType");
        b.item("SupportingCalculations", "ExportedType");
    }
    static d(a) {
        FinancialEventArgsDescriptionMetadata.b(a);
        a.n("FinancialEventArgs", () => new FinancialEventArgsDescription());
        a.m("FinancialEventArgs", FinancialEventArgsDescriptionMetadata.a);
    }
}
FinancialEventArgsDescriptionMetadata.$t = markType(FinancialEventArgsDescriptionMetadata, 'FinancialEventArgsDescriptionMetadata');
FinancialEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=FinancialEventArgsDescriptionMetadata.js.map