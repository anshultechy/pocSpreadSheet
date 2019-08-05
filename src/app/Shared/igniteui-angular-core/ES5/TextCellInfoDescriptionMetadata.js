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
import { TextCellInfoDescription } from "./TextCellInfoDescription";
/**
 * @hidden
 */
var TextCellInfoDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(TextCellInfoDescriptionMetadata, _super);
    function TextCellInfoDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextCellInfoDescriptionMetadata.b = function (a) {
        if (TextCellInfoDescriptionMetadata.a == null) {
            TextCellInfoDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TextCellInfoDescriptionMetadata.c(a, TextCellInfoDescriptionMetadata.a);
        }
    };
    TextCellInfoDescriptionMetadata.c = function (a, b) {
        CellInfoDescriptionMetadata.c(a, b);
        b.item("TextValue", "String");
    };
    TextCellInfoDescriptionMetadata.d = function (a) {
        TextCellInfoDescriptionMetadata.b(a);
        a.n("TextCellInfo", function () { return new TextCellInfoDescription(); });
        a.m("TextCellInfo", TextCellInfoDescriptionMetadata.a);
    };
    TextCellInfoDescriptionMetadata.$t = markType(TextCellInfoDescriptionMetadata, 'TextCellInfoDescriptionMetadata');
    TextCellInfoDescriptionMetadata.a = null;
    return TextCellInfoDescriptionMetadata;
}(Base));
export { TextCellInfoDescriptionMetadata };
//# sourceMappingURL=TextCellInfoDescriptionMetadata.js.map