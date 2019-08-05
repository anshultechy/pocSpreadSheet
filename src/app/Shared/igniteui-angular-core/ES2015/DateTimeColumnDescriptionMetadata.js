/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnDescriptionMetadata } from "./ColumnDescriptionMetadata";
import { DateTimeColumnDescription } from "./DateTimeColumnDescription";
/**
 * @hidden
 */
export class DateTimeColumnDescriptionMetadata extends Base {
    static b(a) {
        if (DateTimeColumnDescriptionMetadata.a == null) {
            DateTimeColumnDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            DateTimeColumnDescriptionMetadata.c(a, DateTimeColumnDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        ColumnDescriptionMetadata.c(a, b);
        b.item("DateTimeFormat", "ExportedType:string:DateTimeFormats");
        b.item("FormatOverrideRef", "(w:FormatOverride,wf:FormatOverride)DataRef");
    }
    static d(a) {
        DateTimeColumnDescriptionMetadata.b(a);
        a.n("DateTimeColumn", () => new DateTimeColumnDescription());
        a.m("DateTimeColumn", DateTimeColumnDescriptionMetadata.a);
    }
}
DateTimeColumnDescriptionMetadata.$t = markType(DateTimeColumnDescriptionMetadata, 'DateTimeColumnDescriptionMetadata');
DateTimeColumnDescriptionMetadata.a = null;
//# sourceMappingURL=DateTimeColumnDescriptionMetadata.js.map