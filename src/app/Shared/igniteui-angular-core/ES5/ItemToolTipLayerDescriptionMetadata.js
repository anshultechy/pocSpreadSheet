/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AnnotationLayerDescriptionMetadata } from "./AnnotationLayerDescriptionMetadata";
import { ItemToolTipLayerDescription } from "./ItemToolTipLayerDescription";
/**
 * @hidden
 */
var ItemToolTipLayerDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ItemToolTipLayerDescriptionMetadata, _super);
    function ItemToolTipLayerDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemToolTipLayerDescriptionMetadata.b = function (a) {
        if (ItemToolTipLayerDescriptionMetadata.a == null) {
            ItemToolTipLayerDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ItemToolTipLayerDescriptionMetadata.c(a, ItemToolTipLayerDescriptionMetadata.a);
        }
    };
    ItemToolTipLayerDescriptionMetadata.c = function (a, b) {
        AnnotationLayerDescriptionMetadata.c(a, b);
        b.item("UseInterpolation", "Boolean");
        b.item("SkipUnknownValues", "Boolean");
    };
    ItemToolTipLayerDescriptionMetadata.d = function (a) {
        ItemToolTipLayerDescriptionMetadata.b(a);
        a.n("ItemToolTipLayer", function () { return new ItemToolTipLayerDescription(); });
        a.m("ItemToolTipLayer", ItemToolTipLayerDescriptionMetadata.a);
    };
    ItemToolTipLayerDescriptionMetadata.$t = markType(ItemToolTipLayerDescriptionMetadata, 'ItemToolTipLayerDescriptionMetadata');
    ItemToolTipLayerDescriptionMetadata.a = null;
    return ItemToolTipLayerDescriptionMetadata;
}(Base));
export { ItemToolTipLayerDescriptionMetadata };
//# sourceMappingURL=ItemToolTipLayerDescriptionMetadata.js.map