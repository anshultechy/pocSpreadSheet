/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";
import { FinancialChartCustomIndicatorArgsDescription } from "./FinancialChartCustomIndicatorArgsDescription";
/**
 * @hidden
 */
var FinancialChartCustomIndicatorArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(FinancialChartCustomIndicatorArgsDescriptionMetadata, _super);
    function FinancialChartCustomIndicatorArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinancialChartCustomIndicatorArgsDescriptionMetadata.b = function (a) {
        if (FinancialChartCustomIndicatorArgsDescriptionMetadata.a == null) {
            FinancialChartCustomIndicatorArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FinancialChartCustomIndicatorArgsDescriptionMetadata.c(a, FinancialChartCustomIndicatorArgsDescriptionMetadata.a);
            SeriesDescriptionMetadata.d(a);
        }
    };
    FinancialChartCustomIndicatorArgsDescriptionMetadata.c = function (a, b) {
        b.item("Series", "ExportedType");
        b.item("Index", "Number:int");
    };
    FinancialChartCustomIndicatorArgsDescriptionMetadata.d = function (a) {
        FinancialChartCustomIndicatorArgsDescriptionMetadata.b(a);
        a.n("FinancialChartCustomIndicatorArgs", function () { return new FinancialChartCustomIndicatorArgsDescription(); });
        a.m("FinancialChartCustomIndicatorArgs", FinancialChartCustomIndicatorArgsDescriptionMetadata.a);
    };
    FinancialChartCustomIndicatorArgsDescriptionMetadata.$t = markType(FinancialChartCustomIndicatorArgsDescriptionMetadata, 'FinancialChartCustomIndicatorArgsDescriptionMetadata');
    FinancialChartCustomIndicatorArgsDescriptionMetadata.a = null;
    return FinancialChartCustomIndicatorArgsDescriptionMetadata;
}(Base));
export { FinancialChartCustomIndicatorArgsDescriptionMetadata };
//# sourceMappingURL=FinancialChartCustomIndicatorArgsDescriptionMetadata.js.map