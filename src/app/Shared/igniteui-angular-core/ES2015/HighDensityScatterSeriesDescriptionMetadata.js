/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";
import { HighDensityScatterSeriesDescription } from "./HighDensityScatterSeriesDescription";
/**
 * @hidden
 */
export class HighDensityScatterSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (HighDensityScatterSeriesDescriptionMetadata.a == null) {
            HighDensityScatterSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            HighDensityScatterSeriesDescriptionMetadata.c(a, HighDensityScatterSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        SeriesDescriptionMetadata.c(a, b);
        b.item("XAxisRef", "(w:XAxis,wf:XAxis)DataRef::object");
        b.item("YAxisRef", "(w:YAxis,wf:YAxis)DataRef::object");
        b.item("XMemberPath", "String");
        b.item("YMemberPath", "String");
        b.item("UseBruteForce", "Boolean");
        b.item("ProgressiveLoad", "Boolean");
        b.item("HeatMinimum", "Number:double");
        b.item("HeatMaximum", "Number:double");
        b.item("HeatMinimumColor", "Color");
        b.item("HeatMaximumColor", "Color");
        b.item("PointExtent", "Number:int");
        b.item("ProgressiveStatus", "Number:int");
    }
    static d(a) {
        HighDensityScatterSeriesDescriptionMetadata.b(a);
        a.n("HighDensityScatterSeries", () => new HighDensityScatterSeriesDescription());
        a.m("HighDensityScatterSeries", HighDensityScatterSeriesDescriptionMetadata.a);
    }
}
HighDensityScatterSeriesDescriptionMetadata.$t = markType(HighDensityScatterSeriesDescriptionMetadata, 'HighDensityScatterSeriesDescriptionMetadata');
HighDensityScatterSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=HighDensityScatterSeriesDescriptionMetadata.js.map