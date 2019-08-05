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
var GetTileImageUriArgs = /** @class */ (function (_super) {
    tslib_1.__extends(GetTileImageUriArgs, _super);
    function GetTileImageUriArgs(a, b, c) {
        var _this = _super.call(this) || this;
        _this._tileLevel = 0;
        _this._tilePositionX = 0;
        _this._tilePositionY = 0;
        _this._tileImageUri = null;
        _this.tileLevel = a;
        _this.tilePositionX = b;
        _this.tilePositionY = c;
        return _this;
    }
    Object.defineProperty(GetTileImageUriArgs.prototype, "tileLevel", {
        get: function () {
            return this._tileLevel;
        },
        set: function (a) {
            this._tileLevel = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetTileImageUriArgs.prototype, "tilePositionX", {
        get: function () {
            return this._tilePositionX;
        },
        set: function (a) {
            this._tilePositionX = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetTileImageUriArgs.prototype, "tilePositionY", {
        get: function () {
            return this._tilePositionY;
        },
        set: function (a) {
            this._tilePositionY = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetTileImageUriArgs.prototype, "tileImageUri", {
        get: function () {
            return this._tileImageUri;
        },
        set: function (a) {
            this._tileImageUri = a;
        },
        enumerable: true,
        configurable: true
    });
    GetTileImageUriArgs.$t = markType(GetTileImageUriArgs, 'GetTileImageUriArgs', EventArgs.$);
    return GetTileImageUriArgs;
}(EventArgs));
export { GetTileImageUriArgs };
//# sourceMappingURL=GetTileImageUriArgs.js.map