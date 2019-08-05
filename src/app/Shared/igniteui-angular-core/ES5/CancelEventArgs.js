/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { EventArgs, markType } from "./type";
/**
 * @hidden
 */
var CancelEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(CancelEventArgs, _super);
    function CancelEventArgs(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    _this = _super.call(this) || this;
                    _this._cancel = false;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    _this = _super.call(this) || this;
                    _this._cancel = false;
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(CancelEventArgs.prototype, "cancel", {
        get: function () {
            return this._cancel;
        },
        set: function (a) {
            this._cancel = a;
        },
        enumerable: true,
        configurable: true
    });
    CancelEventArgs.$t = markType(CancelEventArgs, 'CancelEventArgs', EventArgs.$);
    return CancelEventArgs;
}(EventArgs));
export { CancelEventArgs };
//# sourceMappingURL=CancelEventArgs.js.map