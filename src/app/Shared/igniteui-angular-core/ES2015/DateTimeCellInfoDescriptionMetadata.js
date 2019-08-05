/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CellInfoDescriptionMetadata } from "./CellInfoDescriptionMetadata";
import { DateTimeCellInfoDescription } from "./DateTimeCellInfoDescription";
/**
 * @hidden
 */
export class DateTimeCellInfoDescriptionMetadata extends Base {
    static b(a) {
        if (DateTimeCellInfoDescriptionMetadata.a == null) {
            DateTimeCellInfoDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            DateTimeCellInfoDescriptionMetadata.c(a, DateTimeCellInfoDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        CellInfoDescriptionMetadata.c(a, b);
        b.item("DateTimeValue", "Date");
        b.item("FormatOverrideRef", "(w:FormatOverride,wf:FormatOverride)DataRef");
        b.item("DateTimeFormat", "ExportedType:string:DateTimeFormats");
        b.item("IsOffsetValue", "Boolean");
    }
    static d(a) {
        DateTimeCellInfoDescriptionMetadata.b(a);
        a.n("DateTimeCellInfo", () => new DateTimeCellInfoDescription());
        a.m("DateTimeCellInfo", DateTimeCellInfoDescriptionMetadata.a);
    }
}
DateTimeCellInfoDescriptionMetadata.$t = markType(DateTimeCellInfoDescriptionMetadata, 'DateTimeCellInfoDescriptionMetadata');
DateTimeCellInfoDescriptionMetadata.a = null;
//# sourceMappingURL=DateTimeCellInfoDescriptionMetadata.js.map