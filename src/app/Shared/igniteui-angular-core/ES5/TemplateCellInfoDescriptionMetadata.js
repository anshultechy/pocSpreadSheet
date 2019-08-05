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
import { TemplateCellInfoDescription } from "./TemplateCellInfoDescription";
/**
 * @hidden
 */
var TemplateCellInfoDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(TemplateCellInfoDescriptionMetadata, _super);
    function TemplateCellInfoDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateCellInfoDescriptionMetadata.b = function (a) {
        if (TemplateCellInfoDescriptionMetadata.a == null) {
            TemplateCellInfoDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TemplateCellInfoDescriptionMetadata.c(a, TemplateCellInfoDescriptionMetadata.a);
        }
    };
    TemplateCellInfoDescriptionMetadata.c = function (a, b) {
        CellInfoDescriptionMetadata.c(a, b);
        b.item("ValueRef", "(w:Value,wf:Value)DataRef");
    };
    TemplateCellInfoDescriptionMetadata.d = function (a) {
        TemplateCellInfoDescriptionMetadata.b(a);
        a.n("TemplateCellInfo", function () { return new TemplateCellInfoDescription(); });
        a.m("TemplateCellInfo", TemplateCellInfoDescriptionMetadata.a);
    };
    TemplateCellInfoDescriptionMetadata.$t = markType(TemplateCellInfoDescriptionMetadata, 'TemplateCellInfoDescriptionMetadata');
    TemplateCellInfoDescriptionMetadata.a = null;
    return TemplateCellInfoDescriptionMetadata;
}(Base));
export { TemplateCellInfoDescriptionMetadata };
//# sourceMappingURL=TemplateCellInfoDescriptionMetadata.js.map