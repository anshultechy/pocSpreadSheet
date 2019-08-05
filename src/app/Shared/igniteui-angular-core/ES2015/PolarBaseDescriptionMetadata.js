/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { MarkerSeriesDescriptionMetadata } from "./MarkerSeriesDescriptionMetadata";
/**
 * @hidden
 */
export class PolarBaseDescriptionMetadata extends Base {
    static b(a) {
        if (PolarBaseDescriptionMetadata.a == null) {
            PolarBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PolarBaseDescriptionMetadata.c(a, PolarBaseDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        MarkerSeriesDescriptionMetadata.c(a, b);
        b.item("AngleMemberPath", "String");
        b.item("RadiusMemberPath", "String");
        b.item("AngleAxisRef", "(w:AngleAxis,wf:AngleAxis)DataRef::object");
        b.item("RadiusAxisRef", "(w:RadiusAxis,wf:RadiusAxis)DataRef::object");
        b.item("UseCartesianInterpolation", "Boolean");
        b.item("MaximumMarkers", "Number:int");
        b.item("TrendLineType", "ExportedType:string:TrendLineType");
        b.item("TrendLineBrush", "Brush");
        b.item("ActualTrendLineBrush", "Brush");
        b.item("TrendLineThickness", "Number:double");
        b.item("TrendLinePeriod", "Number:int");
        b.item("TrendLineZIndex", "Number:int");
        b.item("ClipSeriesToBounds", "Boolean");
    }
    static d(a) {
        PolarBaseDescriptionMetadata.b(a);
        a.m("PolarBase", PolarBaseDescriptionMetadata.a);
    }
}
PolarBaseDescriptionMetadata.$t = markType(PolarBaseDescriptionMetadata, 'PolarBaseDescriptionMetadata');
PolarBaseDescriptionMetadata.a = null;
//# sourceMappingURL=PolarBaseDescriptionMetadata.js.map