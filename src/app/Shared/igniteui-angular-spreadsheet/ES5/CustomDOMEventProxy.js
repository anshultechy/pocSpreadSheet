/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { CanvasGestureDOMEventProxy } from "../../igniteui-angular-core/ES5/CanvasGestureDOMEventProxy";
import { markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var CustomDOMEventProxy = /** @class */ (function (_super) {
    tslib_1.__extends(CustomDOMEventProxy, _super);
    function CustomDOMEventProxy(a, b, c) {
        var _this = _super.call(this, a, b, c) || this;
        _this._dz = null;
        return _this;
    }
    CustomDOMEventProxy.prototype.cl = function (a) {
        _super.prototype.cl.call(this, a);
        if (!this.ab && a.stopPropagation != null) {
            a.stopPropagation();
        }
    };
    CustomDOMEventProxy.prototype.cm = function (a) {
        if (this._dz != null && this._dz(a)) {
            return;
        }
        _super.prototype.cm.call(this, a);
    };
    CustomDOMEventProxy.$t = markType(CustomDOMEventProxy, 'CustomDOMEventProxy', CanvasGestureDOMEventProxy.$);
    return CustomDOMEventProxy;
}(CanvasGestureDOMEventProxy));
export { CustomDOMEventProxy };
//# sourceMappingURL=CustomDOMEventProxy.js.map
