/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StackedAreaSeriesDescriptionMetadata } from "./StackedAreaSeriesDescriptionMetadata";
import { Stacked100AreaSeriesDescription } from "./Stacked100AreaSeriesDescription";
/**
 * @hidden
 */
export class Stacked100AreaSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (Stacked100AreaSeriesDescriptionMetadata.a == null) {
            Stacked100AreaSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            Stacked100AreaSeriesDescriptionMetadata.c(a, Stacked100AreaSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        StackedAreaSeriesDescriptionMetadata.c(a, b);
    }
    static d(a) {
        Stacked100AreaSeriesDescriptionMetadata.b(a);
        a.n("Stacked100AreaSeries", () => new Stacked100AreaSeriesDescription());
        a.m("Stacked100AreaSeries", Stacked100AreaSeriesDescriptionMetadata.a);
    }
}
Stacked100AreaSeriesDescriptionMetadata.$t = markType(Stacked100AreaSeriesDescriptionMetadata, 'Stacked100AreaSeriesDescriptionMetadata');
Stacked100AreaSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=Stacked100AreaSeriesDescriptionMetadata.js.map