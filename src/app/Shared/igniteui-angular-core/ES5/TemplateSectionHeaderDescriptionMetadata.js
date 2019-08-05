/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TemplateSectionHeaderCellUpdatingEventArgsDescriptionMetadata } from "./TemplateSectionHeaderCellUpdatingEventArgsDescriptionMetadata";
import { SectionHeaderDescriptionMetadata } from "./SectionHeaderDescriptionMetadata";
import { TemplateSectionHeaderDescription } from "./TemplateSectionHeaderDescription";
/**
 * @hidden
 */
var TemplateSectionHeaderDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(TemplateSectionHeaderDescriptionMetadata, _super);
    function TemplateSectionHeaderDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateSectionHeaderDescriptionMetadata.b = function (a) {
        if (TemplateSectionHeaderDescriptionMetadata.a == null) {
            TemplateSectionHeaderDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TemplateSectionHeaderDescriptionMetadata.c(a, TemplateSectionHeaderDescriptionMetadata.a);
            TemplateSectionHeaderCellUpdatingEventArgsDescriptionMetadata.d(a);
        }
    };
    TemplateSectionHeaderDescriptionMetadata.c = function (a, b) {
        SectionHeaderDescriptionMetadata.c(a, b);
        b.item("CellUpdatingRef", "EventRef::cellUpdating");
    };
    TemplateSectionHeaderDescriptionMetadata.d = function (a) {
        TemplateSectionHeaderDescriptionMetadata.b(a);
        a.n("TemplateSectionHeader", function () { return new TemplateSectionHeaderDescription(); });
        a.m("TemplateSectionHeader", TemplateSectionHeaderDescriptionMetadata.a);
    };
    TemplateSectionHeaderDescriptionMetadata.$t = markType(TemplateSectionHeaderDescriptionMetadata, 'TemplateSectionHeaderDescriptionMetadata');
    TemplateSectionHeaderDescriptionMetadata.a = null;
    return TemplateSectionHeaderDescriptionMetadata;
}(Base));
export { TemplateSectionHeaderDescriptionMetadata };
//# sourceMappingURL=TemplateSectionHeaderDescriptionMetadata.js.map