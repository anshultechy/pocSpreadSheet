/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { PolarLineSeriesBaseDescriptionMetadata } from "./PolarLineSeriesBaseDescriptionMetadata";
import { PolarAreaSeriesDescription } from "./PolarAreaSeriesDescription";
/**
 * @hidden
 */
export class PolarAreaSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (PolarAreaSeriesDescriptionMetadata.a == null) {
            PolarAreaSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PolarAreaSeriesDescriptionMetadata.c(a, PolarAreaSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        PolarLineSeriesBaseDescriptionMetadata.c(a, b);
        b.item("UnknownValuePlotting", "ExportedType:string:UnknownValuePlotting");
    }
    static d(a) {
        PolarAreaSeriesDescriptionMetadata.b(a);
        a.n("PolarAreaSeries", () => new PolarAreaSeriesDescription());
        a.m("PolarAreaSeries", PolarAreaSeriesDescriptionMetadata.a);
    }
}
PolarAreaSeriesDescriptionMetadata.$t = markType(PolarAreaSeriesDescriptionMetadata, 'PolarAreaSeriesDescriptionMetadata');
PolarAreaSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=PolarAreaSeriesDescriptionMetadata.js.map