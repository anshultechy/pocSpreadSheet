/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ValueBrushScaleDescriptionMetadata } from "./ValueBrushScaleDescriptionMetadata";
import { ContourValueResolverDescriptionMetadata } from "./ContourValueResolverDescriptionMetadata";
import { ScatterTriangulationSeriesDescriptionMetadata } from "./ScatterTriangulationSeriesDescriptionMetadata";
import { ScatterContourSeriesDescription } from "./ScatterContourSeriesDescription";
/**
 * @hidden
 */
export class ScatterContourSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (ScatterContourSeriesDescriptionMetadata.a == null) {
            ScatterContourSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ScatterContourSeriesDescriptionMetadata.c(a, ScatterContourSeriesDescriptionMetadata.a);
            ValueBrushScaleDescriptionMetadata.d(a);
            ContourValueResolverDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        ScatterTriangulationSeriesDescriptionMetadata.c(a, b);
        b.item("ValueMemberPath", "String");
        b.item("FillScale", "ExportedType");
        b.item("ValueResolver", "ExportedType");
    }
    static d(a) {
        ScatterContourSeriesDescriptionMetadata.b(a);
        a.n("ScatterContourSeries", () => new ScatterContourSeriesDescription());
        a.m("ScatterContourSeries", ScatterContourSeriesDescriptionMetadata.a);
    }
}
ScatterContourSeriesDescriptionMetadata.$t = markType(ScatterContourSeriesDescriptionMetadata, 'ScatterContourSeriesDescriptionMetadata');
ScatterContourSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=ScatterContourSeriesDescriptionMetadata.js.map