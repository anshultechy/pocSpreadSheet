/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FormatGroupTextEventArgsDescriptionMetadata } from "./FormatGroupTextEventArgsDescriptionMetadata";
import { ColumnSortDescriptionDescriptionMetadata } from "./ColumnSortDescriptionDescriptionMetadata";
import { ColumnGroupDescriptionDescription } from "./ColumnGroupDescriptionDescription";
/**
 * @hidden
 */
var ColumnGroupDescriptionDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnGroupDescriptionDescriptionMetadata, _super);
    function ColumnGroupDescriptionDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnGroupDescriptionDescriptionMetadata.b = function (a) {
        if (ColumnGroupDescriptionDescriptionMetadata.a == null) {
            ColumnGroupDescriptionDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ColumnGroupDescriptionDescriptionMetadata.c(a, ColumnGroupDescriptionDescriptionMetadata.a);
            FormatGroupTextEventArgsDescriptionMetadata.d(a);
        }
    };
    ColumnGroupDescriptionDescriptionMetadata.c = function (a, b) {
        ColumnSortDescriptionDescriptionMetadata.c(a, b);
        b.item("FormatOverrideRef", "(w:FormatOverride,wf:FormatOverride)DataRef");
        b.item("DisplayName", "String");
        b.item("FormatTextRef", "EventRef::formatText");
    };
    ColumnGroupDescriptionDescriptionMetadata.d = function (a) {
        ColumnGroupDescriptionDescriptionMetadata.b(a);
        a.n("ColumnGroupDescription", function () { return new ColumnGroupDescriptionDescription(); });
        a.m("ColumnGroupDescription", ColumnGroupDescriptionDescriptionMetadata.a);
    };
    ColumnGroupDescriptionDescriptionMetadata.$t = markType(ColumnGroupDescriptionDescriptionMetadata, 'ColumnGroupDescriptionDescriptionMetadata');
    ColumnGroupDescriptionDescriptionMetadata.a = null;
    return ColumnGroupDescriptionDescriptionMetadata;
}(Base));
export { ColumnGroupDescriptionDescriptionMetadata };
//# sourceMappingURL=ColumnGroupDescriptionDescriptionMetadata.js.map