/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";
import { FinancialChartCustomIndicatorArgsDescription } from "./FinancialChartCustomIndicatorArgsDescription";
/**
 * @hidden
 */
export class FinancialChartCustomIndicatorArgsDescriptionMetadata extends Base {
    static b(a) {
        if (FinancialChartCustomIndicatorArgsDescriptionMetadata.a == null) {
            FinancialChartCustomIndicatorArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FinancialChartCustomIndicatorArgsDescriptionMetadata.c(a, FinancialChartCustomIndicatorArgsDescriptionMetadata.a);
            SeriesDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("Series", "ExportedType");
        b.item("Index", "Number:int");
    }
    static d(a) {
        FinancialChartCustomIndicatorArgsDescriptionMetadata.b(a);
        a.n("FinancialChartCustomIndicatorArgs", () => new FinancialChartCustomIndicatorArgsDescription());
        a.m("FinancialChartCustomIndicatorArgs", FinancialChartCustomIndicatorArgsDescriptionMetadata.a);
    }
}
FinancialChartCustomIndicatorArgsDescriptionMetadata.$t = markType(FinancialChartCustomIndicatorArgsDescriptionMetadata, 'FinancialChartCustomIndicatorArgsDescriptionMetadata');
FinancialChartCustomIndicatorArgsDescriptionMetadata.a = null;
//# sourceMappingURL=FinancialChartCustomIndicatorArgsDescriptionMetadata.js.map