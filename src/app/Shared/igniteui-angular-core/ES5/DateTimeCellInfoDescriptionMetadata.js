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
import { DateTimeCellInfoDescription } from "./DateTimeCellInfoDescription";
/**
 * @hidden
 */
var DateTimeCellInfoDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(DateTimeCellInfoDescriptionMetadata, _super);
    function DateTimeCellInfoDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateTimeCellInfoDescriptionMetadata.b = function (a) {
        if (DateTimeCellInfoDescriptionMetadata.a == null) {
            DateTimeCellInfoDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            DateTimeCellInfoDescriptionMetadata.c(a, DateTimeCellInfoDescriptionMetadata.a);
        }
    };
    DateTimeCellInfoDescriptionMetadata.c = function (a, b) {
        CellInfoDescriptionMetadata.c(a, b);
        b.item("DateTimeValue", "Date");
        b.item("FormatOverrideRef", "(w:FormatOverride,wf:FormatOverride)DataRef");
        b.item("DateTimeFormat", "ExportedType:string:DateTimeFormats");
        b.item("IsOffsetValue", "Boolean");
    };
    DateTimeCellInfoDescriptionMetadata.d = function (a) {
        DateTimeCellInfoDescriptionMetadata.b(a);
        a.n("DateTimeCellInfo", function () { return new DateTimeCellInfoDescription(); });
        a.m("DateTimeCellInfo", DateTimeCellInfoDescriptionMetadata.a);
    };
    DateTimeCellInfoDescriptionMetadata.$t = markType(DateTimeCellInfoDescriptionMetadata, 'DateTimeCellInfoDescriptionMetadata');
    DateTimeCellInfoDescriptionMetadata.a = null;
    return DateTimeCellInfoDescriptionMetadata;
}(Base));
export { DateTimeCellInfoDescriptionMetadata };
//# sourceMappingURL=DateTimeCellInfoDescriptionMetadata.js.map