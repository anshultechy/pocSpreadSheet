/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { AnnotationLayerDescription } from "./AnnotationLayerDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var ItemToolTipLayerDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ItemToolTipLayerDescription, _super);
    function ItemToolTipLayerDescription() {
        var _this = _super.call(this) || this;
        _this.b3 = false;
        _this.b2 = false;
        return _this;
    }
    ItemToolTipLayerDescription.prototype.get_type = function () {
        return "ItemToolTipLayer";
    };
    Object.defineProperty(ItemToolTipLayerDescription.prototype, "useInterpolation", {
        get: function () {
            return this.b3;
        },
        set: function (a) {
            this.b3 = a;
            this.e("UseInterpolation");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemToolTipLayerDescription.prototype, "skipUnknownValues", {
        get: function () {
            return this.b2;
        },
        set: function (a) {
            this.b2 = a;
            this.e("SkipUnknownValues");
        },
        enumerable: true,
        configurable: true
    });
    ItemToolTipLayerDescription.$t = markType(ItemToolTipLayerDescription, 'ItemToolTipLayerDescription', AnnotationLayerDescription.$);
    return ItemToolTipLayerDescription;
}(AnnotationLayerDescription));
export { ItemToolTipLayerDescription };
//# sourceMappingURL=ItemToolTipLayerDescription.js.map