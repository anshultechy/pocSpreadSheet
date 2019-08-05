/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { HorizontalAnchoredCategorySeriesDescriptionMetadata } from "./HorizontalAnchoredCategorySeriesDescriptionMetadata";
import { ColumnSeriesDescription } from "./ColumnSeriesDescription";
/**
 * @hidden
 */
export class ColumnSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (ColumnSeriesDescriptionMetadata.a == null) {
            ColumnSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ColumnSeriesDescriptionMetadata.c(a, ColumnSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        HorizontalAnchoredCategorySeriesDescriptionMetadata.c(a, b);
        b.item("RadiusX", "Number:double");
        b.item("RadiusY", "Number:double");
        b.item("ConsolidatedColumnVerticalPosition", "ExportedType:string:ConsolidatedItemsPosition");
    }
    static d(a) {
        ColumnSeriesDescriptionMetadata.b(a);
        a.n("ColumnSeries", () => new ColumnSeriesDescription());
        a.m("ColumnSeries", ColumnSeriesDescriptionMetadata.a);
    }
}
ColumnSeriesDescriptionMetadata.$t = markType(ColumnSeriesDescriptionMetadata, 'ColumnSeriesDescriptionMetadata');
ColumnSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=ColumnSeriesDescriptionMetadata.js.map