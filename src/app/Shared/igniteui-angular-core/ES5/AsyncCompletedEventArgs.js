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
var AsyncCompletedEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(AsyncCompletedEventArgs, _super);
    function AsyncCompletedEventArgs(a, b, c) {
        var _this = _super.call(this) || this;
        _this.d = null;
        _this.b = false;
        _this.f = null;
        _this.b = b;
        _this.d = a;
        _this.f = c;
        return _this;
    }
    Object.defineProperty(AsyncCompletedEventArgs.prototype, "error", {
        get: function () {
            return this.d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncCompletedEventArgs.prototype, "cancelled", {
        get: function () {
            return this.b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncCompletedEventArgs.prototype, "userState", {
        get: function () {
            return this.f;
        },
        enumerable: true,
        configurable: true
    });
    AsyncCompletedEventArgs.prototype.h = function () {
        if (this.error != null) {
            throw this.error;
        }
    };
    AsyncCompletedEventArgs.$t = markType(AsyncCompletedEventArgs, 'AsyncCompletedEventArgs', EventArgs.$);
    return AsyncCompletedEventArgs;
}(EventArgs));
export { AsyncCompletedEventArgs };
//# sourceMappingURL=AsyncCompletedEventArgs.js.map