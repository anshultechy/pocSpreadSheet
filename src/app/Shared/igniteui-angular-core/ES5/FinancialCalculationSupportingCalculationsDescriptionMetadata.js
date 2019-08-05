/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnSupportingCalculationDescriptionMetadata } from "./ColumnSupportingCalculationDescriptionMetadata";
import { DataSourceSupportingCalculationDescriptionMetadata } from "./DataSourceSupportingCalculationDescriptionMetadata";
import { FinancialCalculationSupportingCalculationsDescription } from "./FinancialCalculationSupportingCalculationsDescription";
/**
 * @hidden
 */
var FinancialCalculationSupportingCalculationsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(FinancialCalculationSupportingCalculationsDescriptionMetadata, _super);
    function FinancialCalculationSupportingCalculationsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinancialCalculationSupportingCalculationsDescriptionMetadata.b = function (a) {
        if (FinancialCalculationSupportingCalculationsDescriptionMetadata.a == null) {
            FinancialCalculationSupportingCalculationsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FinancialCalculationSupportingCalculationsDescriptionMetadata.c(a, FinancialCalculationSupportingCalculationsDescriptionMetadata.a);
            ColumnSupportingCalculationDescriptionMetadata.d(a);
            DataSourceSupportingCalculationDescriptionMetadata.d(a);
        }
    };
    FinancialCalculationSupportingCalculationsDescriptionMetadata.c = function (a, b) {
        b.item("EMA", "ExportedType");
        b.item("SMA", "ExportedType");
        b.item("STDEV", "ExportedType");
        b.item("MovingSum", "ExportedType");
        b.item("ShortVolumeOscillatorAverage", "ExportedType");
        b.item("LongVolumeOscillatorAverage", "ExportedType");
        b.item("ShortPriceOscillatorAverage", "ExportedType");
        b.item("LongPriceOscillatorAverage", "ExportedType");
        b.item("MakeSafeRef", "(w:MakeSafe,wf:MakeSafe)MethodRef");
    };
    FinancialCalculationSupportingCalculationsDescriptionMetadata.d = function (a) {
        FinancialCalculationSupportingCalculationsDescriptionMetadata.b(a);
        a.n("FinancialCalculationSupportingCalculations", function () { return new FinancialCalculationSupportingCalculationsDescription(); });
        a.m("FinancialCalculationSupportingCalculations", FinancialCalculationSupportingCalculationsDescriptionMetadata.a);
    };
    FinancialCalculationSupportingCalculationsDescriptionMetadata.$t = markType(FinancialCalculationSupportingCalculationsDescriptionMetadata, 'FinancialCalculationSupportingCalculationsDescriptionMetadata');
    FinancialCalculationSupportingCalculationsDescriptionMetadata.a = null;
    return FinancialCalculationSupportingCalculationsDescriptionMetadata;
}(Base));
export { FinancialCalculationSupportingCalculationsDescriptionMetadata };
//# sourceMappingURL=FinancialCalculationSupportingCalculationsDescriptionMetadata.js.map