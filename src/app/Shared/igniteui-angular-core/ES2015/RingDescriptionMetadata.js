/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { RingSeriesBaseDescriptionMetadata } from "./RingSeriesBaseDescriptionMetadata";
import { RingDescription } from "./RingDescription";
/**
 * @hidden
 */
export class RingDescriptionMetadata extends Base {
    static b(a) {
        if (RingDescriptionMetadata.a == null) {
            RingDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RingDescriptionMetadata.c(a, RingDescriptionMetadata.a);
            RingSeriesBaseDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("Index", "Number:int");
        b.item("InnerExtend", "Number:double");
        b.item("ControlSize", "Size");
        b.item("Center", "Point");
        b.item("RingSeries", "ExportedType");
        b.item("RingBreadth", "Number:double");
    }
    static d(a) {
        RingDescriptionMetadata.b(a);
        a.n("Ring", () => new RingDescription());
        a.m("Ring", RingDescriptionMetadata.a);
    }
}
RingDescriptionMetadata.$t = markType(RingDescriptionMetadata, 'RingDescriptionMetadata');
RingDescriptionMetadata.a = null;
//# sourceMappingURL=RingDescriptionMetadata.js.map