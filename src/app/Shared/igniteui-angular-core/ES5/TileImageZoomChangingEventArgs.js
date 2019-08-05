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
var TileImageZoomChangingEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(TileImageZoomChangingEventArgs, _super);
    function TileImageZoomChangingEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._z = 0;
        _this._x = 0;
        _this._y = 0;
        return _this;
    }
    Object.defineProperty(TileImageZoomChangingEventArgs.prototype, "z", {
        get: function () {
            return this._z;
        },
        set: function (a) {
            this._z = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileImageZoomChangingEventArgs.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (a) {
            this._x = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileImageZoomChangingEventArgs.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (a) {
            this._y = a;
        },
        enumerable: true,
        configurable: true
    });
    TileImageZoomChangingEventArgs.$t = markType(TileImageZoomChangingEventArgs, 'TileImageZoomChangingEventArgs', EventArgs.$);
    return TileImageZoomChangingEventArgs;
}(EventArgs));
export { TileImageZoomChangingEventArgs };
//# sourceMappingURL=TileImageZoomChangingEventArgs.js.map