/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { LegendBaseDescriptionMetadata } from "./LegendBaseDescriptionMetadata";
import { ItemLegendDescription } from "./ItemLegendDescription";
/**
 * @hidden
 */
var ItemLegendDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ItemLegendDescriptionMetadata, _super);
    function ItemLegendDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemLegendDescriptionMetadata.e = function (a, b) {
        b.item("Width", "(w:Width/DimensionTransform)String");
        b.item("Height", "(w:Height/DimensionTransform)String");
    };
    ItemLegendDescriptionMetadata.b = function (a) {
        if (ItemLegendDescriptionMetadata.a == null) {
            ItemLegendDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ItemLegendDescriptionMetadata.c(a, ItemLegendDescriptionMetadata.a);
        }
    };
    ItemLegendDescriptionMetadata.c = function (a, b) {
        LegendBaseDescriptionMetadata.c(a, b);
        ItemLegendDescriptionMetadata.e(a, b);
    };
    ItemLegendDescriptionMetadata.d = function (a) {
        ItemLegendDescriptionMetadata.b(a);
        a.n("ItemLegend", function () { return new ItemLegendDescription(); });
        a.m("ItemLegend", ItemLegendDescriptionMetadata.a);
    };
    ItemLegendDescriptionMetadata.$t = markType(ItemLegendDescriptionMetadata, 'ItemLegendDescriptionMetadata');
    ItemLegendDescriptionMetadata.a = null;
    return ItemLegendDescriptionMetadata;
}(Base));
export { ItemLegendDescriptionMetadata };
//# sourceMappingURL=ItemLegendDescriptionMetadata.js.map