/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { PropertyChangedEventArgs, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var ItemPropertyChangedEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(ItemPropertyChangedEventArgs, _super);
    function ItemPropertyChangedEventArgs(a, b) {
        var _this = _super.call(this, b) || this;
        _this._b = null;
        _this._b = a;
        return _this;
    }
    Object.defineProperty(ItemPropertyChangedEventArgs.prototype, "_item", {
        get: function () {
            return this._b;
        },
        enumerable: true,
        configurable: true
    });
    ItemPropertyChangedEventArgs.$t = markType(ItemPropertyChangedEventArgs, 'ItemPropertyChangedEventArgs', PropertyChangedEventArgs.$);
    return ItemPropertyChangedEventArgs;
}(PropertyChangedEventArgs));
export { ItemPropertyChangedEventArgs };
//# sourceMappingURL=ItemPropertyChangedEventArgs.js.map
