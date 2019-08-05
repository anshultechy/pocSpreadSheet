/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnSupportingCalculationDescriptionMetadata } from "./ColumnSupportingCalculationDescriptionMetadata";
import { DataSourceSupportingCalculationDescriptionMetadata } from "./DataSourceSupportingCalculationDescriptionMetadata";
import { FinancialCalculationSupportingCalculationsDescription } from "./FinancialCalculationSupportingCalculationsDescription";
/**
 * @hidden
 */
export class FinancialCalculationSupportingCalculationsDescriptionMetadata extends Base {
    static b(a) {
        if (FinancialCalculationSupportingCalculationsDescriptionMetadata.a == null) {
            FinancialCalculationSupportingCalculationsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FinancialCalculationSupportingCalculationsDescriptionMetadata.c(a, FinancialCalculationSupportingCalculationsDescriptionMetadata.a);
            ColumnSupportingCalculationDescriptionMetadata.d(a);
            DataSourceSupportingCalculationDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("EMA", "ExportedType");
        b.item("SMA", "ExportedType");
        b.item("STDEV", "ExportedType");
        b.item("MovingSum", "ExportedType");
        b.item("ShortVolumeOscillatorAverage", "ExportedType");
        b.item("LongVolumeOscillatorAverage", "ExportedType");
        b.item("ShortPriceOscillatorAverage", "ExportedType");
        b.item("LongPriceOscillatorAverage", "ExportedType");
        b.item("MakeSafeRef", "(w:MakeSafe,wf:MakeSafe)MethodRef");
    }
    static d(a) {
        FinancialCalculationSupportingCalculationsDescriptionMetadata.b(a);
        a.n("FinancialCalculationSupportingCalculations", () => new FinancialCalculationSupportingCalculationsDescription());
        a.m("FinancialCalculationSupportingCalculations", FinancialCalculationSupportingCalculationsDescriptionMetadata.a);
    }
}
FinancialCalculationSupportingCalculationsDescriptionMetadata.$t = markType(FinancialCalculationSupportingCalculationsDescriptionMetadata, 'FinancialCalculationSupportingCalculationsDescriptionMetadata');
FinancialCalculationSupportingCalculationsDescriptionMetadata.a = null;
//# sourceMappingURL=FinancialCalculationSupportingCalculationsDescriptionMetadata.js.map