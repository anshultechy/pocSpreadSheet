/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TemplateCellUpdatingEventArgsDescription } from "./TemplateCellUpdatingEventArgsDescription";
/**
 * @hidden
 */
var TemplateCellUpdatingEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(TemplateCellUpdatingEventArgsDescriptionMetadata, _super);
    function TemplateCellUpdatingEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateCellUpdatingEventArgsDescriptionMetadata.b = function (a) {
        if (TemplateCellUpdatingEventArgsDescriptionMetadata.a == null) {
            TemplateCellUpdatingEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TemplateCellUpdatingEventArgsDescriptionMetadata.c(a, TemplateCellUpdatingEventArgsDescriptionMetadata.a);
        }
    };
    TemplateCellUpdatingEventArgsDescriptionMetadata.c = function (a, b) {
    };
    TemplateCellUpdatingEventArgsDescriptionMetadata.d = function (a) {
        TemplateCellUpdatingEventArgsDescriptionMetadata.b(a);
        a.n("TemplateCellUpdatingEventArgs", function () { return new TemplateCellUpdatingEventArgsDescription(); });
        a.m("TemplateCellUpdatingEventArgs", TemplateCellUpdatingEventArgsDescriptionMetadata.a);
    };
    TemplateCellUpdatingEventArgsDescriptionMetadata.$t = markType(TemplateCellUpdatingEventArgsDescriptionMetadata, 'TemplateCellUpdatingEventArgsDescriptionMetadata');
    TemplateCellUpdatingEventArgsDescriptionMetadata.a = null;
    return TemplateCellUpdatingEventArgsDescriptionMetadata;
}(Base));
export { TemplateCellUpdatingEventArgsDescriptionMetadata };
//# sourceMappingURL=TemplateCellUpdatingEventArgsDescriptionMetadata.js.map