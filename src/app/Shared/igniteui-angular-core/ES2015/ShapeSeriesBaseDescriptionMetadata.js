/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";
/**
 * @hidden
 */
export class ShapeSeriesBaseDescriptionMetadata extends Base {
    static b(a) {
        if (ShapeSeriesBaseDescriptionMetadata.a == null) {
            ShapeSeriesBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ShapeSeriesBaseDescriptionMetadata.c(a, ShapeSeriesBaseDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        SeriesDescriptionMetadata.c(a, b);
        b.item("ShapeMemberPath", "String");
        b.item("XAxisRef", "(w:XAxis,wf:XAxis)DataRef::object");
        b.item("YAxisRef", "(w:YAxis,wf:YAxis)DataRef::object");
        b.item("ShapeFilterResolution", "Number:double");
    }
    static d(a) {
        ShapeSeriesBaseDescriptionMetadata.b(a);
        a.m("ShapeSeriesBase", ShapeSeriesBaseDescriptionMetadata.a);
    }
}
ShapeSeriesBaseDescriptionMetadata.$t = markType(ShapeSeriesBaseDescriptionMetadata, 'ShapeSeriesBaseDescriptionMetadata');
ShapeSeriesBaseDescriptionMetadata.a = null;
//# sourceMappingURL=ShapeSeriesBaseDescriptionMetadata.js.map