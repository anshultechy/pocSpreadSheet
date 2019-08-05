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
/**
 * @hidden
 */
var FinancialIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(FinancialIndicatorDescriptionMetadata, _super);
    function FinancialIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinancialIndicatorDescriptionMetadata.b = function (a) {
        if (FinancialIndicatorDescriptionMetadata.a == null) {
            FinancialIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FinancialIndicatorDescriptionMetadata.c(a, FinancialIndicatorDescriptionMetadata.a);
        }
    };
    FinancialIndicatorDescriptionMetadata.c = function (a, b) {
        FinancialSeriesDescriptionMetadata.c(a, b);
        b.item("DisplayType", "ExportedType:string:IndicatorDisplayType");
        b.item("IgnoreFirst", "Number:int");
        b.item("TrendLineType", "ExportedType:string:TrendLineType");
        b.item("TrendLineBrush", "Brush");
        b.item("ActualTrendLineBrush", "Brush");
        b.item("TrendLineThickness", "Number:double");
        b.item("TrendLinePeriod", "Number:int");
    };
    FinancialIndicatorDescriptionMetadata.d = function (a) {
        FinancialIndicatorDescriptionMetadata.b(a);
        a.m("FinancialIndicator", FinancialIndicatorDescriptionMetadata.a);
    };
    FinancialIndicatorDescriptionMetadata.$t = markType(FinancialIndicatorDescriptionMetadata, 'FinancialIndicatorDescriptionMetadata');
    FinancialIndicatorDescriptionMetadata.a = null;
    return FinancialIndicatorDescriptionMetadata;
}(Base));
export { FinancialIndicatorDescriptionMetadata };
//# sourceMappingURL=FinancialIndicatorDescriptionMetadata.js.map