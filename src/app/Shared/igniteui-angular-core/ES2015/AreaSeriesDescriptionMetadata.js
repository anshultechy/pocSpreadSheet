/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { HorizontalAnchoredCategorySeriesDescriptionMetadata } from "./HorizontalAnchoredCategorySeriesDescriptionMetadata";
import { AreaSeriesDescription } from "./AreaSeriesDescription";
/**
 * @hidden
 */
export class AreaSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (AreaSeriesDescriptionMetadata.a == null) {
            AreaSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            AreaSeriesDescriptionMetadata.c(a, AreaSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        HorizontalAnchoredCategorySeriesDescriptionMetadata.c(a, b);
        b.item("UnknownValuePlotting", "ExportedType:string:UnknownValuePlotting");
    }
    static d(a) {
        AreaSeriesDescriptionMetadata.b(a);
        a.n("AreaSeries", () => new AreaSeriesDescription());
        a.m("AreaSeries", AreaSeriesDescriptionMetadata.a);
    }
}
AreaSeriesDescriptionMetadata.$t = markType(AreaSeriesDescriptionMetadata, 'AreaSeriesDescriptionMetadata');
AreaSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=AreaSeriesDescriptionMetadata.js.map