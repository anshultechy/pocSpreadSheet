/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AnchoredRadialSeriesDescriptionMetadata } from "./AnchoredRadialSeriesDescriptionMetadata";
import { RadialColumnSeriesDescription } from "./RadialColumnSeriesDescription";
/**
 * @hidden
 */
export class RadialColumnSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (RadialColumnSeriesDescriptionMetadata.a == null) {
            RadialColumnSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RadialColumnSeriesDescriptionMetadata.c(a, RadialColumnSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        AnchoredRadialSeriesDescriptionMetadata.c(a, b);
        b.item("RadiusX", "Number:double");
        b.item("RadiusY", "Number:double");
    }
    static d(a) {
        RadialColumnSeriesDescriptionMetadata.b(a);
        a.n("RadialColumnSeries", () => new RadialColumnSeriesDescription());
        a.m("RadialColumnSeries", RadialColumnSeriesDescriptionMetadata.a);
    }
}
RadialColumnSeriesDescriptionMetadata.$t = markType(RadialColumnSeriesDescriptionMetadata, 'RadialColumnSeriesDescriptionMetadata');
RadialColumnSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=RadialColumnSeriesDescriptionMetadata.js.map