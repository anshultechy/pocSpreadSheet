/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnDescriptionMetadata } from "./ColumnDescriptionMetadata";
import { NumericColumnDescription } from "./NumericColumnDescription";
/**
 * @hidden
 */
var NumericColumnDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(NumericColumnDescriptionMetadata, _super);
    function NumericColumnDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumericColumnDescriptionMetadata.b = function (a) {
        if (NumericColumnDescriptionMetadata.a == null) {
            NumericColumnDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            NumericColumnDescriptionMetadata.c(a, NumericColumnDescriptionMetadata.a);
        }
    };
    NumericColumnDescriptionMetadata.c = function (a, b) {
        ColumnDescriptionMetadata.c(a, b);
        b.item("NegativePrefix", "String");
        b.item("PositivePrefix", "String");
        b.item("NegativeSuffix", "String");
        b.item("PositiveSuffix", "String");
        b.item("MaxFractionDigits", "Number:int");
        b.item("MinFractionDigits", "Number:int");
        b.item("MinIntegerDigits", "Number:int");
        b.item("ShowGroupingSeparator", "Boolean");
        b.item("FormatOverrideRef", "(w:FormatOverride,wf:FormatOverride)DataRef");
    };
    NumericColumnDescriptionMetadata.d = function (a) {
        NumericColumnDescriptionMetadata.b(a);
        a.n("NumericColumn", function () { return new NumericColumnDescription(); });
        a.m("NumericColumn", NumericColumnDescriptionMetadata.a);
    };
    NumericColumnDescriptionMetadata.$t = markType(NumericColumnDescriptionMetadata, 'NumericColumnDescriptionMetadata');
    NumericColumnDescriptionMetadata.a = null;
    return NumericColumnDescriptionMetadata;
}(Base));
export { NumericColumnDescriptionMetadata };
//# sourceMappingURL=NumericColumnDescriptionMetadata.js.map