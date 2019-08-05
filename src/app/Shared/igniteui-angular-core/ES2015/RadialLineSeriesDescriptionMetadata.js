/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AnchoredRadialSeriesDescriptionMetadata } from "./AnchoredRadialSeriesDescriptionMetadata";
import { RadialLineSeriesDescription } from "./RadialLineSeriesDescription";
/**
 * @hidden
 */
export class RadialLineSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (RadialLineSeriesDescriptionMetadata.a == null) {
            RadialLineSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RadialLineSeriesDescriptionMetadata.c(a, RadialLineSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        AnchoredRadialSeriesDescriptionMetadata.c(a, b);
        b.item("UnknownValuePlotting", "ExportedType:string:UnknownValuePlotting");
    }
    static d(a) {
        RadialLineSeriesDescriptionMetadata.b(a);
        a.n("RadialLineSeries", () => new RadialLineSeriesDescription());
        a.m("RadialLineSeries", RadialLineSeriesDescriptionMetadata.a);
    }
}
RadialLineSeriesDescriptionMetadata.$t = markType(RadialLineSeriesDescriptionMetadata, 'RadialLineSeriesDescriptionMetadata');
RadialLineSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=RadialLineSeriesDescriptionMetadata.js.map