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
var MouseEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(MouseEventArgs, _super);
    function MouseEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._position = null;
        _this._originalSource = null;
        return _this;
    }
    Object.defineProperty(MouseEventArgs.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (a) {
            this._position = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouseEventArgs.prototype, "originalSource", {
        get: function () {
            return this._originalSource;
        },
        set: function (a) {
            this._originalSource = a;
        },
        enumerable: true,
        configurable: true
    });
    MouseEventArgs.prototype.getPosition = function (a) {
        return this.position;
    };
    MouseEventArgs.$t = markType(MouseEventArgs, 'MouseEventArgs', EventArgs.$);
    return MouseEventArgs;
}(EventArgs));
export { MouseEventArgs };
//# sourceMappingURL=MouseEventArgs.js.map