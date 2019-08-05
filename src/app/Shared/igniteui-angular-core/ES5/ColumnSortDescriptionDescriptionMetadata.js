/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnSortDescriptionDescription } from "./ColumnSortDescriptionDescription";
/**
 * @hidden
 */
var ColumnSortDescriptionDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnSortDescriptionDescriptionMetadata, _super);
    function ColumnSortDescriptionDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnSortDescriptionDescriptionMetadata.b = function (a) {
        if (ColumnSortDescriptionDescriptionMetadata.a == null) {
            ColumnSortDescriptionDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ColumnSortDescriptionDescriptionMetadata.c(a, ColumnSortDescriptionDescriptionMetadata.a);
        }
    };
    ColumnSortDescriptionDescriptionMetadata.c = function (a, b) {
        b.item("PropertyPath", "String");
        b.item("SortDirection", "ExportedType:string:ListSortDirection");
    };
    ColumnSortDescriptionDescriptionMetadata.d = function (a) {
        ColumnSortDescriptionDescriptionMetadata.b(a);
        a.n("ColumnSortDescription", function () { return new ColumnSortDescriptionDescription(); });
        a.m("ColumnSortDescription", ColumnSortDescriptionDescriptionMetadata.a);
    };
    ColumnSortDescriptionDescriptionMetadata.$t = markType(ColumnSortDescriptionDescriptionMetadata, 'ColumnSortDescriptionDescriptionMetadata');
    ColumnSortDescriptionDescriptionMetadata.a = null;
    return ColumnSortDescriptionDescriptionMetadata;
}(Base));
export { ColumnSortDescriptionDescriptionMetadata };
//# sourceMappingURL=ColumnSortDescriptionDescriptionMetadata.js.map