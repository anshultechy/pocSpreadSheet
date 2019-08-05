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
var TileImageCreatedEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(TileImageCreatedEventArgs, _super);
    function TileImageCreatedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._imageData = null;
        _this._image = null;
        _this._z = 0;
        _this._x = 0;
        _this._y = 0;
        _this._url = null;
        return _this;
    }
    Object.defineProperty(TileImageCreatedEventArgs.prototype, "imageData", {
        get: function () {
            return this._imageData;
        },
        set: function (a) {
            this._imageData = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileImageCreatedEventArgs.prototype, "image", {
        get: function () {
            return this._image;
        },
        set: function (a) {
            this._image = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileImageCreatedEventArgs.prototype, "z", {
        get: function () {
            return this._z;
        },
        set: function (a) {
            this._z = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileImageCreatedEventArgs.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (a) {
            this._x = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileImageCreatedEventArgs.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (a) {
            this._y = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileImageCreatedEventArgs.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (a) {
            this._url = a;
        },
        enumerable: true,
        configurable: true
    });
    TileImageCreatedEventArgs.$t = markType(TileImageCreatedEventArgs, 'TileImageCreatedEventArgs', EventArgs.$);
    return TileImageCreatedEventArgs;
}(EventArgs));
export { TileImageCreatedEventArgs };
//# sourceMappingURL=TileImageCreatedEventArgs.js.map