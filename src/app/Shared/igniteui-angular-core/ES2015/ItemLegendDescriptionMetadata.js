/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { LegendBaseDescriptionMetadata } from "./LegendBaseDescriptionMetadata";
import { ItemLegendDescription } from "./ItemLegendDescription";
/**
 * @hidden
 */
export class ItemLegendDescriptionMetadata extends Base {
    static e(a, b) {
        b.item("Width", "(w:Width/DimensionTransform)String");
        b.item("Height", "(w:Height/DimensionTransform)String");
    }
    static b(a) {
        if (ItemLegendDescriptionMetadata.a == null) {
            ItemLegendDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ItemLegendDescriptionMetadata.c(a, ItemLegendDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        LegendBaseDescriptionMetadata.c(a, b);
        ItemLegendDescriptionMetadata.e(a, b);
    }
    static d(a) {
        ItemLegendDescriptionMetadata.b(a);
        a.n("ItemLegend", () => new ItemLegendDescription());
        a.m("ItemLegend", ItemLegendDescriptionMetadata.a);
    }
}
ItemLegendDescriptionMetadata.$t = markType(ItemLegendDescriptionMetadata, 'ItemLegendDescriptionMetadata');
ItemLegendDescriptionMetadata.a = null;
//# sourceMappingURL=ItemLegendDescriptionMetadata.js.map