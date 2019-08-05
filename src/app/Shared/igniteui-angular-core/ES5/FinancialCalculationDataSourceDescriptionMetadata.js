/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CalculatedColumnDescriptionMetadata } from "./CalculatedColumnDescriptionMetadata";
import { FinancialCalculationDataSourceDescription } from "./FinancialCalculationDataSourceDescription";
/**
 * @hidden
 */
var FinancialCalculationDataSourceDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(FinancialCalculationDataSourceDescriptionMetadata, _super);
    function FinancialCalculationDataSourceDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinancialCalculationDataSourceDescriptionMetadata.b = function (a) {
        if (FinancialCalculationDataSourceDescriptionMetadata.a == null) {
            FinancialCalculationDataSourceDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FinancialCalculationDataSourceDescriptionMetadata.c(a, FinancialCalculationDataSourceDescriptionMetadata.a);
            CalculatedColumnDescriptionMetadata.d(a);
        }
    };
    FinancialCalculationDataSourceDescriptionMetadata.c = function (a, b) {
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
    };
    FinancialCalculationDataSourceDescriptionMetadata.d = function (a) {
        FinancialCalculationDataSourceDescriptionMetadata.b(a);
        a.n("FinancialCalculationDataSource", function () { return new FinancialCalculationDataSourceDescription(); });
        a.m("FinancialCalculationDataSource", FinancialCalculationDataSourceDescriptionMetadata.a);
    };
    FinancialCalculationDataSourceDescriptionMetadata.$t = markType(FinancialCalculationDataSourceDescriptionMetadata, 'FinancialCalculationDataSourceDescriptionMetadata');
    FinancialCalculationDataSourceDescriptionMetadata.a = null;
    return FinancialCalculationDataSourceDescriptionMetadata;
}(Base));
export { FinancialCalculationDataSourceDescriptionMetadata };
//# sourceMappingURL=FinancialCalculationDataSourceDescriptionMetadata.js.map