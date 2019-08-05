/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { DefinitionBaseDescriptionMetadata } from "./DefinitionBaseDescriptionMetadata";
import { SectionHeaderDescription } from "./SectionHeaderDescription";
/**
 * @hidden
 */
var SectionHeaderDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(SectionHeaderDescriptionMetadata, _super);
    function SectionHeaderDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SectionHeaderDescriptionMetadata.b = function (a) {
        if (SectionHeaderDescriptionMetadata.a == null) {
            SectionHeaderDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SectionHeaderDescriptionMetadata.c(a, SectionHeaderDescriptionMetadata.a);
        }
    };
    SectionHeaderDescriptionMetadata.c = function (a, b) {
        DefinitionBaseDescriptionMetadata.c(a, b);
        b.item("SelectedBackground", "Brush");
        b.item("ActualSelectedBackground", "Brush");
        b.item("PaddingLeft", "Number:int");
        b.item("PaddingTop", "Number:int");
        b.item("PaddingRight", "Number:int");
        b.item("PaddingBottom", "Number:int");
    };
    SectionHeaderDescriptionMetadata.d = function (a) {
        SectionHeaderDescriptionMetadata.b(a);
        a.n("SectionHeader", function () { return new SectionHeaderDescription(); });
        a.m("SectionHeader", SectionHeaderDescriptionMetadata.a);
    };
    SectionHeaderDescriptionMetadata.$t = markType(SectionHeaderDescriptionMetadata, 'SectionHeaderDescriptionMetadata');
    SectionHeaderDescriptionMetadata.a = null;
    return SectionHeaderDescriptionMetadata;
}(Base));
export { SectionHeaderDescriptionMetadata };
//# sourceMappingURL=SectionHeaderDescriptionMetadata.js.map