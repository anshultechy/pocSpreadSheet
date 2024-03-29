/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { PolarLineSeriesBaseDescriptionMetadata } from "./PolarLineSeriesBaseDescriptionMetadata";
import { PolarLineSeriesDescription } from "./PolarLineSeriesDescription";
/**
 * @hidden
 */
export class PolarLineSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (PolarLineSeriesDescriptionMetadata.a == null) {
            PolarLineSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PolarLineSeriesDescriptionMetadata.c(a, PolarLineSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        PolarLineSeriesBaseDescriptionMetadata.c(a, b);
        b.item("UnknownValuePlotting", "ExportedType:string:UnknownValuePlotting");
    }
    static d(a) {
        PolarLineSeriesDescriptionMetadata.b(a);
        a.n("PolarLineSeries", () => new PolarLineSeriesDescription());
        a.m("PolarLineSeries", PolarLineSeriesDescriptionMetadata.a);
    }
}
PolarLineSeriesDescriptionMetadata.$t = markType(PolarLineSeriesDescriptionMetadata, 'PolarLineSeriesDescriptionMetadata');
PolarLineSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=PolarLineSeriesDescriptionMetadata.js.map