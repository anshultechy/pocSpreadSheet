/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FinancialSeriesDescriptionMetadata } from "./FinancialSeriesDescriptionMetadata";
import { FinancialPriceSeriesDescription } from "./FinancialPriceSeriesDescription";
/**
 * @hidden
 */
var FinancialPriceSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(FinancialPriceSeriesDescriptionMetadata, _super);
    function FinancialPriceSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinancialPriceSeriesDescriptionMetadata.b = function (a) {
        if (FinancialPriceSeriesDescriptionMetadata.a == null) {
            FinancialPriceSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FinancialPriceSeriesDescriptionMetadata.c(a, FinancialPriceSeriesDescriptionMetadata.a);
        }
    };
    FinancialPriceSeriesDescriptionMetadata.c = function (a, b) {
        FinancialSeriesDescriptionMetadata.c(a, b);
        b.item("TrendLineType", "ExportedType:string:TrendLineType");
        b.item("TrendLineBrush", "Brush");
        b.item("ActualTrendLineBrush", "Brush");
        b.item("TrendLineThickness", "Number:double");
        b.item("TrendLinePeriod", "Number:int");
        b.item("DisplayType", "ExportedType:string:PriceDisplayType");
        b.item("NegativeOutline", "Brush");
    };
    FinancialPriceSeriesDescriptionMetadata.d = function (a) {
        FinancialPriceSeriesDescriptionMetadata.b(a);
        a.n("FinancialPriceSeries", function () { return new FinancialPriceSeriesDescription(); });
        a.m("FinancialPriceSeries", FinancialPriceSeriesDescriptionMetadata.a);
    };
    FinancialPriceSeriesDescriptionMetadata.$t = markType(FinancialPriceSeriesDescriptionMetadata, 'FinancialPriceSeriesDescriptionMetadata');
    FinancialPriceSeriesDescriptionMetadata.a = null;
    return FinancialPriceSeriesDescriptionMetadata;
}(Base));
export { FinancialPriceSeriesDescriptionMetadata };
//# sourceMappingURL=FinancialPriceSeriesDescriptionMetadata.js.map