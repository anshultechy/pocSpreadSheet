/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";
import { ChartSeriesEventArgsDescription } from "./ChartSeriesEventArgsDescription";
/**
 * @hidden
 */
export class ChartSeriesEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (ChartSeriesEventArgsDescriptionMetadata.a == null) {
            ChartSeriesEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ChartSeriesEventArgsDescriptionMetadata.c(a, ChartSeriesEventArgsDescriptionMetadata.a);
            SeriesDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("Series", "ExportedType");
    }
    static d(a) {
        ChartSeriesEventArgsDescriptionMetadata.b(a);
        a.n("ChartSeriesEventArgs", () => new ChartSeriesEventArgsDescription());
        a.m("ChartSeriesEventArgs", ChartSeriesEventArgsDescriptionMetadata.a);
    }
}
ChartSeriesEventArgsDescriptionMetadata.$t = markType(ChartSeriesEventArgsDescriptionMetadata, 'ChartSeriesEventArgsDescriptionMetadata');
ChartSeriesEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=ChartSeriesEventArgsDescriptionMetadata.js.map