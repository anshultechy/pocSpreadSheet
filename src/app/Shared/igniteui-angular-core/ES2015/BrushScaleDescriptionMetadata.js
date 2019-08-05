/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { PropertyUpdatedEventArgsDescriptionMetadata } from "./PropertyUpdatedEventArgsDescriptionMetadata";
import { BrushScaleDescription } from "./BrushScaleDescription";
/**
 * @hidden
 */
export class BrushScaleDescriptionMetadata extends Base {
    static b(a) {
        if (BrushScaleDescriptionMetadata.a == null) {
            BrushScaleDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            BrushScaleDescriptionMetadata.c(a, BrushScaleDescriptionMetadata.a);
            PropertyUpdatedEventArgsDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("Brushes", "BrushCollection:string");
        b.item("PropertyUpdatedRef", "EventRef::propertyUpdated");
    }
    static d(a) {
        BrushScaleDescriptionMetadata.b(a);
        a.n("BrushScale", () => new BrushScaleDescription());
        a.m("BrushScale", BrushScaleDescriptionMetadata.a);
    }
}
BrushScaleDescriptionMetadata.$t = markType(BrushScaleDescriptionMetadata, 'BrushScaleDescriptionMetadata');
BrushScaleDescriptionMetadata.a = null;
//# sourceMappingURL=BrushScaleDescriptionMetadata.js.map