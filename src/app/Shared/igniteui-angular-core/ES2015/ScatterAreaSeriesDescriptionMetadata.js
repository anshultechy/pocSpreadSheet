/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColorScaleDescriptionMetadata } from "./ColorScaleDescriptionMetadata";
import { ScatterTriangulationSeriesDescriptionMetadata } from "./ScatterTriangulationSeriesDescriptionMetadata";
import { ScatterAreaSeriesDescription } from "./ScatterAreaSeriesDescription";
/**
 * @hidden
 */
export class ScatterAreaSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (ScatterAreaSeriesDescriptionMetadata.a == null) {
            ScatterAreaSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ScatterAreaSeriesDescriptionMetadata.c(a, ScatterAreaSeriesDescriptionMetadata.a);
            ColorScaleDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        ScatterTriangulationSeriesDescriptionMetadata.c(a, b);
        b.item("ColorScale", "ExportedType");
        b.item("ColorMemberPath", "String");
    }
    static d(a) {
        ScatterAreaSeriesDescriptionMetadata.b(a);
        a.n("ScatterAreaSeries", () => new ScatterAreaSeriesDescription());
        a.m("ScatterAreaSeries", ScatterAreaSeriesDescriptionMetadata.a);
    }
}
ScatterAreaSeriesDescriptionMetadata.$t = markType(ScatterAreaSeriesDescriptionMetadata, 'ScatterAreaSeriesDescriptionMetadata');
ScatterAreaSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=ScatterAreaSeriesDescriptionMetadata.js.map