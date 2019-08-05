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
var ScrollerScrollingEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(ScrollerScrollingEventArgs, _super);
    function ScrollerScrollingEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._deltaX = 0;
        _this._deltaY = 0;
        return _this;
    }
    Object.defineProperty(ScrollerScrollingEventArgs.prototype, "deltaX", {
        get: function () {
            return this._deltaX;
        },
        set: function (a) {
            this._deltaX = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollerScrollingEventArgs.prototype, "deltaY", {
        get: function () {
            return this._deltaY;
        },
        set: function (a) {
            this._deltaY = a;
        },
        enumerable: true,
        configurable: true
    });
    ScrollerScrollingEventArgs.$t = markType(ScrollerScrollingEventArgs, 'ScrollerScrollingEventArgs', EventArgs.$);
    return ScrollerScrollingEventArgs;
}(EventArgs));
export { ScrollerScrollingEventArgs };
//# sourceMappingURL=ScrollerScrollingEventArgs.js.map