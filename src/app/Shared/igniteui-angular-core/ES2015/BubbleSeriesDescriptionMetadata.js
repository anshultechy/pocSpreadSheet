/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SizeScaleDescriptionMetadata } from "./SizeScaleDescriptionMetadata";
import { BrushScaleDescriptionMetadata } from "./BrushScaleDescriptionMetadata";
import { ScatterBaseDescriptionMetadata } from "./ScatterBaseDescriptionMetadata";
import { BubbleSeriesDescription } from "./BubbleSeriesDescription";
/**
 * @hidden
 */
export class BubbleSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (BubbleSeriesDescriptionMetadata.a == null) {
            BubbleSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            BubbleSeriesDescriptionMetadata.c(a, BubbleSeriesDescriptionMetadata.a);
            SizeScaleDescriptionMetadata.d(a);
            BrushScaleDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        ScatterBaseDescriptionMetadata.c(a, b);
        b.item("RadiusMemberPath", "String");
        b.item("RadiusScale", "ExportedType");
        b.item("LabelMemberPath", "String");
        b.item("FillMemberPath", "String");
        b.item("FillScale", "ExportedType");
    }
    static d(a) {
        BubbleSeriesDescriptionMetadata.b(a);
        a.n("BubbleSeries", () => new BubbleSeriesDescription());
        a.m("BubbleSeries", BubbleSeriesDescriptionMetadata.a);
    }
}
BubbleSeriesDescriptionMetadata.$t = markType(BubbleSeriesDescriptionMetadata, 'BubbleSeriesDescriptionMetadata');
BubbleSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=BubbleSeriesDescriptionMetadata.js.map