/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TemplateCellUpdatingEventArgsDescriptionMetadata } from "./TemplateCellUpdatingEventArgsDescriptionMetadata";
import { ColumnDescriptionMetadata } from "./ColumnDescriptionMetadata";
import { TemplateColumnDescription } from "./TemplateColumnDescription";
/**
 * @hidden
 */
var TemplateColumnDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(TemplateColumnDescriptionMetadata, _super);
    function TemplateColumnDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateColumnDescriptionMetadata.b = function (a) {
        if (TemplateColumnDescriptionMetadata.a == null) {
            TemplateColumnDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TemplateColumnDescriptionMetadata.c(a, TemplateColumnDescriptionMetadata.a);
            TemplateCellUpdatingEventArgsDescriptionMetadata.d(a);
        }
    };
    TemplateColumnDescriptionMetadata.c = function (a, b) {
        ColumnDescriptionMetadata.c(a, b);
        b.item("CellUpdatingRef", "EventRef::cellUpdating");
    };
    TemplateColumnDescriptionMetadata.d = function (a) {
        TemplateColumnDescriptionMetadata.b(a);
        a.n("TemplateColumn", function () { return new TemplateColumnDescription(); });
        a.m("TemplateColumn", TemplateColumnDescriptionMetadata.a);
    };
    TemplateColumnDescriptionMetadata.$t = markType(TemplateColumnDescriptionMetadata, 'TemplateColumnDescriptionMetadata');
    TemplateColumnDescriptionMetadata.a = null;
    return TemplateColumnDescriptionMetadata;
}(Base));
export { TemplateColumnDescriptionMetadata };
//# sourceMappingURL=TemplateColumnDescriptionMetadata.js.map