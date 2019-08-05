/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TemplateHeaderCellUpdatingEventArgsDescription } from "./TemplateHeaderCellUpdatingEventArgsDescription";
/**
 * @hidden
 */
var TemplateHeaderCellUpdatingEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(TemplateHeaderCellUpdatingEventArgsDescriptionMetadata, _super);
    function TemplateHeaderCellUpdatingEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.b = function (a) {
        if (TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.a == null) {
            TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.c(a, TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.a);
        }
    };
    TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.c = function (a, b) {
    };
    TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.d = function (a) {
        TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.b(a);
        a.n("TemplateHeaderCellUpdatingEventArgs", function () { return new TemplateHeaderCellUpdatingEventArgsDescription(); });
        a.m("TemplateHeaderCellUpdatingEventArgs", TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.a);
    };
    TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.$t = markType(TemplateHeaderCellUpdatingEventArgsDescriptionMetadata, 'TemplateHeaderCellUpdatingEventArgsDescriptionMetadata');
    TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.a = null;
    return TemplateHeaderCellUpdatingEventArgsDescriptionMetadata;
}(Base));
export { TemplateHeaderCellUpdatingEventArgsDescriptionMetadata };
//# sourceMappingURL=TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.js.map