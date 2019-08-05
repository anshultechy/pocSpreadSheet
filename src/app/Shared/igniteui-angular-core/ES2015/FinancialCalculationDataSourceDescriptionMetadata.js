/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CalculatedColumnDescriptionMetadata } from "./CalculatedColumnDescriptionMetadata";
import { FinancialCalculationDataSourceDescription } from "./FinancialCalculationDataSourceDescription";
/**
 * @hidden
 */
export class FinancialCalculationDataSourceDescriptionMetadata extends Base {
    static b(a) {
        if (FinancialCalculationDataSourceDescriptionMetadata.a == null) {
            FinancialCalculationDataSourceDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FinancialCalculationDataSourceDescriptionMetadata.c(a, FinancialCalculationDataSourceDescriptionMetadata.a);
            CalculatedColumnDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("TypicalColumn", "ExportedType");
        b.item("TrueRange", "ExportedType");
        b.item("TrueLow", "ExportedType");
        b.item("Period", "Number:int");
        b.item("ShortPeriod", "Number:int");
        b.item("LongPeriod", "Number:int");
        b.item("Count", "Number:int");
        b.item("CalculateFrom", "Number:int");
        b.item("CalculateCount", "Number:int");
        b.item("Multiplier", "Number:double");
        b.item("MinimumValue", "Number:double");
        b.item("MaximumValue", "Number:double");
        b.item("SpecifiesRange", "Boolean");
    }
    static d(a) {
        FinancialCalculationDataSourceDescriptionMetadata.b(a);
        a.n("FinancialCalculationDataSource", () => new FinancialCalculationDataSourceDescription());
        a.m("FinancialCalculationDataSource", FinancialCalculationDataSourceDescriptionMetadata.a);
    }
}
FinancialCalculationDataSourceDescriptionMetadata.$t = markType(FinancialCalculationDataSourceDescriptionMetadata, 'FinancialCalculationDataSourceDescriptionMetadata');
FinancialCalculationDataSourceDescriptionMetadata.a = null;
//# sourceMappingURL=FinancialCalculationDataSourceDescriptionMetadata.js.map