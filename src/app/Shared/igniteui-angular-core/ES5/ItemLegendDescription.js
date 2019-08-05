/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { LegendBaseDescription } from "./LegendBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var ItemLegendDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ItemLegendDescription, _super);
    function ItemLegendDescription() {
        var _this = _super.call(this) || this;
        _this.t = null;
        _this.s = null;
        return _this;
    }
    Object.defineProperty(ItemLegendDescription.prototype, "width", {
        get: function () {
            return this.t;
        },
        set: function (a) {
            this.t = a;
            this.e("Width");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemLegendDescription.prototype, "height", {
        get: function () {
            return this.s;
        },
        set: function (a) {
            this.s = a;
            this.e("Height");
        },
        enumerable: true,
        configurable: true
    });
    ItemLegendDescription.prototype.get_type = function () {
        return "ItemLegend";
    };
    ItemLegendDescription.$t = markType(ItemLegendDescription, 'ItemLegendDescription', LegendBaseDescription.$);
    return ItemLegendDescription;
}(LegendBaseDescription));
export { ItemLegendDescription };
//# sourceMappingURL=ItemLegendDescription.js.map