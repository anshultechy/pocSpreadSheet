/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { PieChartBaseDescriptionMetadata } from "./PieChartBaseDescriptionMetadata";
import { PieChartDescription } from "./PieChartDescription";
/**
 * @hidden
 */
export class PieChartDescriptionMetadata extends Base {
    static e(a, b) {
        b.item("_qualifiedName", "String:Infragistics.Controls.Charts.XamPieChart");
        b.item("Width", "(w:Width/DimensionTransform)String");
        b.item("Height", "(w:Height/DimensionTransform)String");
        b.item("LegendRef", "(w:Legend)DataRef:String");
        b.item("Background", "(wf:BackColor/ColorTransform)Brush");
    }
    static b(a) {
        if (PieChartDescriptionMetadata.a == null) {
            PieChartDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PieChartDescriptionMetadata.c(a, PieChartDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        PieChartBaseDescriptionMetadata.c(a, b);
        PieChartDescriptionMetadata.e(a, b);
    }
    static d(a) {
        PieChartDescriptionMetadata.b(a);
        a.n("PieChart", () => new PieChartDescription());
        a.m("PieChart", PieChartDescriptionMetadata.a);
    }
}
PieChartDescriptionMetadata.$t = markType(PieChartDescriptionMetadata, 'PieChartDescriptionMetadata');
PieChartDescriptionMetadata.a = null;
//# sourceMappingURL=PieChartDescriptionMetadata.js.map