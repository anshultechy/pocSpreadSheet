/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TemplateHeaderCellUpdatingEventArgsDescriptionMetadata } from "./TemplateHeaderCellUpdatingEventArgsDescriptionMetadata";
import { HeaderDescriptionMetadata } from "./HeaderDescriptionMetadata";
import { TemplateHeaderDescription } from "./TemplateHeaderDescription";
/**
 * @hidden
 */
var TemplateHeaderDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(TemplateHeaderDescriptionMetadata, _super);
    function TemplateHeaderDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateHeaderDescriptionMetadata.b = function (a) {
        if (TemplateHeaderDescriptionMetadata.a == null) {
            TemplateHeaderDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TemplateHeaderDescriptionMetadata.c(a, TemplateHeaderDescriptionMetadata.a);
            TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.d(a);
        }
    };
    TemplateHeaderDescriptionMetadata.c = function (a, b) {
        HeaderDescriptionMetadata.c(a, b);
        b.item("CellUpdatingRef", "EventRef::cellUpdating");
    };
    TemplateHeaderDescriptionMetadata.d = function (a) {
        TemplateHeaderDescriptionMetadata.b(a);
        a.n("TemplateHeader", function () { return new TemplateHeaderDescription(); });
        a.m("TemplateHeader", TemplateHeaderDescriptionMetadata.a);
    };
    TemplateHeaderDescriptionMetadata.$t = markType(TemplateHeaderDescriptionMetadata, 'TemplateHeaderDescriptionMetadata');
    TemplateHeaderDescriptionMetadata.a = null;
    return TemplateHeaderDescriptionMetadata;
}(Base));
export { TemplateHeaderDescriptionMetadata };
//# sourceMappingURL=TemplateHeaderDescriptionMetadata.js.map