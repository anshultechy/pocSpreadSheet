/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StackedColumnSeriesDescriptionMetadata } from "./StackedColumnSeriesDescriptionMetadata";
import { Stacked100ColumnSeriesDescription } from "./Stacked100ColumnSeriesDescription";
/**
 * @hidden
 */
export class Stacked100ColumnSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (Stacked100ColumnSeriesDescriptionMetadata.a == null) {
            Stacked100ColumnSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            Stacked100ColumnSeriesDescriptionMetadata.c(a, Stacked100ColumnSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        StackedColumnSeriesDescriptionMetadata.c(a, b);
    }
    static d(a) {
        Stacked100ColumnSeriesDescriptionMetadata.b(a);
        a.n("Stacked100ColumnSeries", () => new Stacked100ColumnSeriesDescription());
        a.m("Stacked100ColumnSeries", Stacked100ColumnSeriesDescriptionMetadata.a);
    }
}
Stacked100ColumnSeriesDescriptionMetadata.$t = markType(Stacked100ColumnSeriesDescriptionMetadata, 'Stacked100ColumnSeriesDescriptionMetadata');
Stacked100ColumnSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=Stacked100ColumnSeriesDescriptionMetadata.js.map