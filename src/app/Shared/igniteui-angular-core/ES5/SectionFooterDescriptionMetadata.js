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
import { SectionFooterDescription } from "./SectionFooterDescription";
/**
 * @hidden
 */
var SectionFooterDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(SectionFooterDescriptionMetadata, _super);
    function SectionFooterDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SectionFooterDescriptionMetadata.b = function (a) {
        if (SectionFooterDescriptionMetadata.a == null) {
            SectionFooterDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SectionFooterDescriptionMetadata.c(a, SectionFooterDescriptionMetadata.a);
        }
    };
    SectionFooterDescriptionMetadata.c = function (a, b) {
        DefinitionBaseDescriptionMetadata.c(a, b);
    };
    SectionFooterDescriptionMetadata.d = function (a) {
        SectionFooterDescriptionMetadata.b(a);
        a.n("SectionFooter", function () { return new SectionFooterDescription(); });
        a.m("SectionFooter", SectionFooterDescriptionMetadata.a);
    };
    SectionFooterDescriptionMetadata.$t = markType(SectionFooterDescriptionMetadata, 'SectionFooterDescriptionMetadata');
    SectionFooterDescriptionMetadata.a = null;
    return SectionFooterDescriptionMetadata;
}(Base));
export { SectionFooterDescriptionMetadata };
//# sourceMappingURL=SectionFooterDescriptionMetadata.js.map