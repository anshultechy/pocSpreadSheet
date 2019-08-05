/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { LegendBaseDescriptionMetadata } from "./LegendBaseDescriptionMetadata";
import { ScaleLegendDescription } from "./ScaleLegendDescription";
/**
 * @hidden
 */
export class ScaleLegendDescriptionMetadata extends Base {
    static b(a) {
        if (ScaleLegendDescriptionMetadata.a == null) {
            ScaleLegendDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ScaleLegendDescriptionMetadata.c(a, ScaleLegendDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        LegendBaseDescriptionMetadata.c(a, b);
    }
    static d(a) {
        ScaleLegendDescriptionMetadata.b(a);
        a.n("ScaleLegend", () => new ScaleLegendDescription());
        a.m("ScaleLegend", ScaleLegendDescriptionMetadata.a);
    }
}
ScaleLegendDescriptionMetadata.$t = markType(ScaleLegendDescriptionMetadata, 'ScaleLegendDescriptionMetadata');
ScaleLegendDescriptionMetadata.a = null;
//# sourceMappingURL=ScaleLegendDescriptionMetadata.js.map