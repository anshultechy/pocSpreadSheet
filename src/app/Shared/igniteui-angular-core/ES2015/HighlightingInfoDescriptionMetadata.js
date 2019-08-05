/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";
import { HighlightingInfoDescription } from "./HighlightingInfoDescription";
/**
 * @hidden
 */
export class HighlightingInfoDescriptionMetadata extends Base {
    static b(a) {
        if (HighlightingInfoDescriptionMetadata.a == null) {
            HighlightingInfoDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            HighlightingInfoDescriptionMetadata.c(a, HighlightingInfoDescriptionMetadata.a);
            SeriesDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("StartIndex", "Number:int");
        b.item("EndIndex", "Number:int");
        b.item("State", "ExportedType:string:HighlightingState");
        b.item("Progress", "Number:double");
        b.item("IsMarker", "Boolean");
        b.item("Series", "ExportedType");
    }
    static d(a) {
        HighlightingInfoDescriptionMetadata.b(a);
        a.n("HighlightingInfo", () => new HighlightingInfoDescription());
        a.m("HighlightingInfo", HighlightingInfoDescriptionMetadata.a);
    }
}
HighlightingInfoDescriptionMetadata.$t = markType(HighlightingInfoDescriptionMetadata, 'HighlightingInfoDescriptionMetadata');
HighlightingInfoDescriptionMetadata.a = null;
//# sourceMappingURL=HighlightingInfoDescriptionMetadata.js.map