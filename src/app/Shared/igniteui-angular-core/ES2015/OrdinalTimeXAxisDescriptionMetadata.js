/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CategoryXAxisDescriptionMetadata } from "./CategoryXAxisDescriptionMetadata";
import { OrdinalTimeXAxisDescription } from "./OrdinalTimeXAxisDescription";
/**
 * @hidden
 */
export class OrdinalTimeXAxisDescriptionMetadata extends Base {
    static b(a) {
        if (OrdinalTimeXAxisDescriptionMetadata.a == null) {
            OrdinalTimeXAxisDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            OrdinalTimeXAxisDescriptionMetadata.c(a, OrdinalTimeXAxisDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        CategoryXAxisDescriptionMetadata.c(a, b);
        b.item("DateTimeMemberPath", "String");
        b.item("MinimumValue", "Date");
        b.item("MaximumValue", "Date");
    }
    static d(a) {
        OrdinalTimeXAxisDescriptionMetadata.b(a);
        a.n("OrdinalTimeXAxis", () => new OrdinalTimeXAxisDescription());
        a.m("OrdinalTimeXAxis", OrdinalTimeXAxisDescriptionMetadata.a);
    }
}
OrdinalTimeXAxisDescriptionMetadata.$t = markType(OrdinalTimeXAxisDescriptionMetadata, 'OrdinalTimeXAxisDescriptionMetadata');
OrdinalTimeXAxisDescriptionMetadata.a = null;
//# sourceMappingURL=OrdinalTimeXAxisDescriptionMetadata.js.map