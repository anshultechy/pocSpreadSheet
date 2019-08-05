/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";
import { DomainChartSeriesPointerEventArgsDescription } from "./DomainChartSeriesPointerEventArgsDescription";
/**
 * @hidden
 */
export class DomainChartSeriesPointerEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (DomainChartSeriesPointerEventArgsDescriptionMetadata.a == null) {
            DomainChartSeriesPointerEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            DomainChartSeriesPointerEventArgsDescriptionMetadata.c(a, DomainChartSeriesPointerEventArgsDescriptionMetadata.a);
            SeriesDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("Series", "ExportedType");
        b.item("ItemRef", "(w:Item,wf:Item)DataRef");
    }
    static d(a) {
        DomainChartSeriesPointerEventArgsDescriptionMetadata.b(a);
        a.n("DomainChartSeriesPointerEventArgs", () => new DomainChartSeriesPointerEventArgsDescription());
        a.m("DomainChartSeriesPointerEventArgs", DomainChartSeriesPointerEventArgsDescriptionMetadata.a);
    }
}
DomainChartSeriesPointerEventArgsDescriptionMetadata.$t = markType(DomainChartSeriesPointerEventArgsDescriptionMetadata, 'DomainChartSeriesPointerEventArgsDescriptionMetadata');
DomainChartSeriesPointerEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=DomainChartSeriesPointerEventArgsDescriptionMetadata.js.map