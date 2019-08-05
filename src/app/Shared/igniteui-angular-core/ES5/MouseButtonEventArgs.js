/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { MouseEventArgs } from "./MouseEventArgs";
import { markType } from "./type";
/**
 * @hidden
 */
var MouseButtonEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(MouseButtonEventArgs, _super);
    function MouseButtonEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._handled = false;
        return _this;
    }
    Object.defineProperty(MouseButtonEventArgs.prototype, "handled", {
        get: function () {
            return this._handled;
        },
        set: function (a) {
            this._handled = a;
        },
        enumerable: true,
        configurable: true
    });
    MouseButtonEventArgs.$t = markType(MouseButtonEventArgs, 'MouseButtonEventArgs', MouseEventArgs.$);
    return MouseButtonEventArgs;
}(MouseEventArgs));
export { MouseButtonEventArgs };
//# sourceMappingURL=MouseButtonEventArgs.js.map