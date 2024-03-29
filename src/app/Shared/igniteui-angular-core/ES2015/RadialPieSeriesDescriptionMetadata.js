/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AnchoredRadialSeriesDescriptionMetadata } from "./AnchoredRadialSeriesDescriptionMetadata";
import { RadialPieSeriesDescription } from "./RadialPieSeriesDescription";
/**
 * @hidden
 */
export class RadialPieSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (RadialPieSeriesDescriptionMetadata.a == null) {
            RadialPieSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RadialPieSeriesDescriptionMetadata.c(a, RadialPieSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        AnchoredRadialSeriesDescriptionMetadata.c(a, b);
        b.item("RadiusX", "Number:double");
        b.item("RadiusY", "Number:double");
    }
    static d(a) {
        RadialPieSeriesDescriptionMetadata.b(a);
        a.n("RadialPieSeries", () => new RadialPieSeriesDescription());
        a.m("RadialPieSeries", RadialPieSeriesDescriptionMetadata.a);
    }
}
RadialPieSeriesDescriptionMetadata.$t = markType(RadialPieSeriesDescriptionMetadata, 'RadialPieSeriesDescriptionMetadata');
RadialPieSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=RadialPieSeriesDescriptionMetadata.js.map