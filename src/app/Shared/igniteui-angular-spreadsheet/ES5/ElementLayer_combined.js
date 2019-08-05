/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IDisposable_$type, Type, markType } from "../../igniteui-angular-core/ES5/type";
import { CoreUtilities } from "./CoreUtilities";
/**
 * @hidden
 */
var ElementLayer = /** @class */ (function (_super) {
    tslib_1.__extends(ElementLayer, _super);
    function ElementLayer(a, b) {
        var _this = _super.call(this) || this;
        _this._a = null;
        _this._c = null;
        CoreUtilities.y(a);
        CoreUtilities.y(b);
        _this._a = a;
        _this._c = b;
        return _this;
    }
    Object.defineProperty(ElementLayer.prototype, "_b", {
        get: function () {
            return this._a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementLayer.prototype, "_d", {
        get: function () {
            return this._c;
        },
        enumerable: true,
        configurable: true
    });
    ElementLayer.prototype._e = function () {
        this._c.invalidateArrange();
    };
    ElementLayer.prototype._f = function () {
        this._c.invalidateMeasure();
    };
    ElementLayer.prototype.dispose = function () {
    };
    ElementLayer.$t = markType(ElementLayer, 'ElementLayer', Base.$, [IDisposable_$type]);
    return ElementLayer;
}(Base));
export { ElementLayer };
/**
 * @hidden
 */
export var IElementLayerView_$type = new Type(null, 'IElementLayerView');
//# sourceMappingURL=ElementLayer_combined.js.map
