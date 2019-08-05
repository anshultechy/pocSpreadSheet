/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CellInfoDescriptionMetadata } from "./CellInfoDescriptionMetadata";
import { NumericCellInfoDescription } from "./NumericCellInfoDescription";
/**
 * @hidden
 */
var NumericCellInfoDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(NumericCellInfoDescriptionMetadata, _super);
    function NumericCellInfoDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumericCellInfoDescriptionMetadata.b = function (a) {
        if (NumericCellInfoDescriptionMetadata.a == null) {
            NumericCellInfoDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            NumericCellInfoDescriptionMetadata.c(a, NumericCellInfoDescriptionMetadata.a);
        }
    };
    NumericCellInfoDescriptionMetadata.c = function (a, b) {
        CellInfoDescriptionMetadata.c(a, b);
        b.item("NumericValue", "Number:double");
        b.item("HasDecimalValue", "Boolean");
        b.item("FormatOverrideRef", "(w:FormatOverride,wf:FormatOverride)DataRef");
        b.item("NegativePrefix", "String");
        b.item("PositivePrefix", "String");
        b.item("NegativeSuffix", "String");
        b.item("PositiveSuffix", "String");
        b.item("MaxFractionDigits", "Number:int");
        b.item("MinFractionDigits", "Number:int");
        b.item("MinIntegerDigits", "Number:int");
        b.item("ShowGroupingSeparator", "Boolean");
    };
    NumericCellInfoDescriptionMetadata.d = function (a) {
        NumericCellInfoDescriptionMetadata.b(a);
        a.n("NumericCellInfo", function () { return new NumericCellInfoDescription(); });
        a.m("NumericCellInfo", NumericCellInfoDescriptionMetadata.a);
    };
    NumericCellInfoDescriptionMetadata.$t = markType(NumericCellInfoDescriptionMetadata, 'NumericCellInfoDescriptionMetadata');
    NumericCellInfoDescriptionMetadata.a = null;
    return NumericCellInfoDescriptionMetadata;
}(Base));
export { NumericCellInfoDescriptionMetadata };
//# sourceMappingURL=NumericCellInfoDescriptionMetadata.js.map