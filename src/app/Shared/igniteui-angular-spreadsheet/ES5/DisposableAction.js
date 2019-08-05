/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IDisposable_$type, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var DisposableAction = /** @class */ (function (_super) {
    tslib_1.__extends(DisposableAction, _super);
    function DisposableAction(a) {
        var _this = _super.call(this) || this;
        _this._a = null;
        _this._a = a;
        return _this;
    }
    DisposableAction.prototype.dispose = function () {
        this._a = null;
    };
    DisposableAction.prototype._c = function () {
        if (this._a != null) {
            var a = this._a;
            this._a = null;
            a();
        }
    };
    Object.defineProperty(DisposableAction.prototype, "_b", {
        get: function () {
            return this._a != null;
        },
        enumerable: true,
        configurable: true
    });
    DisposableAction.$t = markType(DisposableAction, 'DisposableAction', Base.$, [IDisposable_$type]);
    return DisposableAction;
}(Base));
export { DisposableAction };
//# sourceMappingURL=DisposableAction.js.map
