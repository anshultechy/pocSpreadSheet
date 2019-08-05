/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { LegendBaseDescriptionMetadata } from "./LegendBaseDescriptionMetadata";
import { FinancialLegendDescription } from "./FinancialLegendDescription";
/**
 * @hidden
 */
var FinancialLegendDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(FinancialLegendDescriptionMetadata, _super);
    function FinancialLegendDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinancialLegendDescriptionMetadata.b = function (a) {
        if (FinancialLegendDescriptionMetadata.a == null) {
            FinancialLegendDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FinancialLegendDescriptionMetadata.c(a, FinancialLegendDescriptionMetadata.a);
        }
    };
    FinancialLegendDescriptionMetadata.c = function (a, b) {
        LegendBaseDescriptionMetadata.c(a, b);
    };
    FinancialLegendDescriptionMetadata.d = function (a) {
        FinancialLegendDescriptionMetadata.b(a);
        a.n("FinancialLegend", function () { return new FinancialLegendDescription(); });
        a.m("FinancialLegend", FinancialLegendDescriptionMetadata.a);
    };
    FinancialLegendDescriptionMetadata.$t = markType(FinancialLegendDescriptionMetadata, 'FinancialLegendDescriptionMetadata');
    FinancialLegendDescriptionMetadata.a = null;
    return FinancialLegendDescriptionMetadata;
}(Base));
export { FinancialLegendDescriptionMetadata };
//# sourceMappingURL=FinancialLegendDescriptionMetadata.js.map