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
var RectChangedEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(RectChangedEventArgs, _super);
    function RectChangedEventArgs(a, b) {
        var _this = _super.call(this) || this;
        _this._oldRect = null;
        _this._newRect = null;
        _this.oldRect = a;
        _this.newRect = b;
        return _this;
    }
    Object.defineProperty(RectChangedEventArgs.prototype, "oldRect", {
        get: function () {
            return this._oldRect;
        },
        set: function (a) {
            this._oldRect = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectChangedEventArgs.prototype, "newRect", {
        get: function () {
            return this._newRect;
        },
        set: function (a) {
            this._newRect = a;
        },
        enumerable: true,
        configurable: true
    });
    RectChangedEventArgs.$t = markType(RectChangedEventArgs, 'RectChangedEventArgs', EventArgs.$);
    return RectChangedEventArgs;
}(EventArgs));
export { RectChangedEventArgs };
//# sourceMappingURL=RectChangedEventArgs.js.map