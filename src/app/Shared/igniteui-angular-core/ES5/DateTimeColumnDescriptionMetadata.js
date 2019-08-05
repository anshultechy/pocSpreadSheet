/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnDescriptionMetadata } from "./ColumnDescriptionMetadata";
import { DateTimeColumnDescription } from "./DateTimeColumnDescription";
/**
 * @hidden
 */
var DateTimeColumnDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(DateTimeColumnDescriptionMetadata, _super);
    function DateTimeColumnDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateTimeColumnDescriptionMetadata.b = function (a) {
        if (DateTimeColumnDescriptionMetadata.a == null) {
            DateTimeColumnDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            DateTimeColumnDescriptionMetadata.c(a, DateTimeColumnDescriptionMetadata.a);
        }
    };
    DateTimeColumnDescriptionMetadata.c = function (a, b) {
        ColumnDescriptionMetadata.c(a, b);
        b.item("DateTimeFormat", "ExportedType:string:DateTimeFormats");
        b.item("FormatOverrideRef", "(w:FormatOverride,wf:FormatOverride)DataRef");
    };
    DateTimeColumnDescriptionMetadata.d = function (a) {
        DateTimeColumnDescriptionMetadata.b(a);
        a.n("DateTimeColumn", function () { return new DateTimeColumnDescription(); });
        a.m("DateTimeColumn", DateTimeColumnDescriptionMetadata.a);
    };
    DateTimeColumnDescriptionMetadata.$t = markType(DateTimeColumnDescriptionMetadata, 'DateTimeColumnDescriptionMetadata');
    DateTimeColumnDescriptionMetadata.a = null;
    return DateTimeColumnDescriptionMetadata;
}(Base));
export { DateTimeColumnDescriptionMetadata };
//# sourceMappingURL=DateTimeColumnDescriptionMetadata.js.map