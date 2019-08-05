/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StyleSelectorDescriptionMetadata } from "./StyleSelectorDescriptionMetadata";
import { StyleDescriptionMetadata } from "./StyleDescriptionMetadata";
import { ShapeSeriesBaseDescriptionMetadata } from "./ShapeSeriesBaseDescriptionMetadata";
import { ScatterPolylineSeriesDescription } from "./ScatterPolylineSeriesDescription";
/**
 * @hidden
 */
export class ScatterPolylineSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (ScatterPolylineSeriesDescriptionMetadata.a == null) {
            ScatterPolylineSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ScatterPolylineSeriesDescriptionMetadata.c(a, ScatterPolylineSeriesDescriptionMetadata.a);
            StyleSelectorDescriptionMetadata.d(a);
            StyleDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        ShapeSeriesBaseDescriptionMetadata.c(a, b);
        b.item("ShapeStyleSelector", "ExportedType");
        b.item("ShapeStyle", "ExportedType");
    }
    static d(a) {
        ScatterPolylineSeriesDescriptionMetadata.b(a);
        a.n("ScatterPolylineSeries", () => new ScatterPolylineSeriesDescription());
        a.m("ScatterPolylineSeries", ScatterPolylineSeriesDescriptionMetadata.a);
    }
}
ScatterPolylineSeriesDescriptionMetadata.$t = markType(ScatterPolylineSeriesDescriptionMetadata, 'ScatterPolylineSeriesDescriptionMetadata');
ScatterPolylineSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=ScatterPolylineSeriesDescriptionMetadata.js.map