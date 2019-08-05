/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FinancialCalculationDataSourceDescriptionMetadata } from "./FinancialCalculationDataSourceDescriptionMetadata";
import { FinancialCalculationSupportingCalculationsDescriptionMetadata } from "./FinancialCalculationSupportingCalculationsDescriptionMetadata";
import { FinancialEventArgsDescription } from "./FinancialEventArgsDescription";
/**
 * @hidden
 */
var FinancialEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(FinancialEventArgsDescriptionMetadata, _super);
    function FinancialEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinancialEventArgsDescriptionMetadata.b = function (a) {
        if (FinancialEventArgsDescriptionMetadata.a == null) {
            FinancialEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FinancialEventArgsDescriptionMetadata.c(a, FinancialEventArgsDescriptionMetadata.a);
            FinancialCalculationDataSourceDescriptionMetadata.d(a);
            FinancialCalculationSupportingCalculationsDescriptionMetadata.d(a);
        }
    };
    FinancialEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("Position", "Number:int");
        b.item("Count", "Number:int");
        b.item("DataSource", "ExportedType");
        b.item("SupportingCalculations", "ExportedType");
    };
    FinancialEventArgsDescriptionMetadata.d = function (a) {
        FinancialEventArgsDescriptionMetadata.b(a);
        a.n("FinancialEventArgs", function () { return new FinancialEventArgsDescription(); });
        a.m("FinancialEventArgs", FinancialEventArgsDescriptionMetadata.a);
    };
    FinancialEventArgsDescriptionMetadata.$t = markType(FinancialEventArgsDescriptionMetadata, 'FinancialEventArgsDescriptionMetadata');
    FinancialEventArgsDescriptionMetadata.a = null;
    return FinancialEventArgsDescriptionMetadata;
}(Base));
export { FinancialEventArgsDescriptionMetadata };
//# sourceMappingURL=FinancialEventArgsDescriptionMetadata.js.map