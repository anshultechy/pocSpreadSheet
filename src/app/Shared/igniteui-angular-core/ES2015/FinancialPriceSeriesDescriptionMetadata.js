/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FinancialSeriesDescriptionMetadata } from "./FinancialSeriesDescriptionMetadata";
import { FinancialPriceSeriesDescription } from "./FinancialPriceSeriesDescription";
/**
 * @hidden
 */
export class FinancialPriceSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (FinancialPriceSeriesDescriptionMetadata.a == null) {
            FinancialPriceSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FinancialPriceSeriesDescriptionMetadata.c(a, FinancialPriceSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        FinancialSeriesDescriptionMetadata.c(a, b);
        b.item("TrendLineType", "ExportedType:string:TrendLineType");
        b.item("TrendLineBrush", "Brush");
        b.item("ActualTrendLineBrush", "Brush");
        b.item("TrendLineThickness", "Number:double");
        b.item("TrendLinePeriod", "Number:int");
        b.item("DisplayType", "ExportedType:string:PriceDisplayType");
        b.item("NegativeOutline", "Brush");
    }
    static d(a) {
        FinancialPriceSeriesDescriptionMetadata.b(a);
        a.n("FinancialPriceSeries", () => new FinancialPriceSeriesDescription());
        a.m("FinancialPriceSeries", FinancialPriceSeriesDescriptionMetadata.a);
    }
}
FinancialPriceSeriesDescriptionMetadata.$t = markType(FinancialPriceSeriesDescriptionMetadata, 'FinancialPriceSeriesDescriptionMetadata');
FinancialPriceSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=FinancialPriceSeriesDescriptionMetadata.js.map