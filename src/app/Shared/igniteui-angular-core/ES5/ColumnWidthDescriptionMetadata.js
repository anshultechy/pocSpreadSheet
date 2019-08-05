/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnWidthDescription } from "./ColumnWidthDescription";
/**
 * @hidden
 */
var ColumnWidthDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnWidthDescriptionMetadata, _super);
    function ColumnWidthDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnWidthDescriptionMetadata.b = function (a) {
        if (ColumnWidthDescriptionMetadata.a == null) {
            ColumnWidthDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ColumnWidthDescriptionMetadata.c(a, ColumnWidthDescriptionMetadata.a);
        }
    };
    ColumnWidthDescriptionMetadata.c = function (a, b) {
        b.item("IsStarSized", "Boolean");
        b.item("Value", "Number:double");
        b.item("MinimumWidth", "Number:double");
    };
    ColumnWidthDescriptionMetadata.d = function (a) {
        ColumnWidthDescriptionMetadata.b(a);
        a.n("ColumnWidth", function () { return new ColumnWidthDescription(); });
        a.m("ColumnWidth", ColumnWidthDescriptionMetadata.a);
    };
    ColumnWidthDescriptionMetadata.$t = markType(ColumnWidthDescriptionMetadata, 'ColumnWidthDescriptionMetadata');
    ColumnWidthDescriptionMetadata.a = null;
    return ColumnWidthDescriptionMetadata;
}(Base));
export { ColumnWidthDescriptionMetadata };
//# sourceMappingURL=ColumnWidthDescriptionMetadata.js.map