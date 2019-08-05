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
/**
 * @hidden
 */
var HeaderDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(HeaderDescriptionMetadata, _super);
    function HeaderDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderDescriptionMetadata.b = function (a) {
        if (HeaderDescriptionMetadata.a == null) {
            HeaderDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            HeaderDescriptionMetadata.c(a, HeaderDescriptionMetadata.a);
        }
    };
    HeaderDescriptionMetadata.c = function (a, b) {
        DefinitionBaseDescriptionMetadata.c(a, b);
        b.item("PaddingLeft", "Number:int");
        b.item("PaddingTop", "Number:int");
        b.item("PaddingRight", "Number:int");
        b.item("PaddingBottom", "Number:int");
    };
    HeaderDescriptionMetadata.d = function (a) {
        HeaderDescriptionMetadata.b(a);
        a.m("Header", HeaderDescriptionMetadata.a);
    };
    HeaderDescriptionMetadata.$t = markType(HeaderDescriptionMetadata, 'HeaderDescriptionMetadata');
    HeaderDescriptionMetadata.a = null;
    return HeaderDescriptionMetadata;
}(Base));
export { HeaderDescriptionMetadata };
//# sourceMappingURL=HeaderDescriptionMetadata.js.map