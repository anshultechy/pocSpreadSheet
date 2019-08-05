/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { TileImageCreatedEventArgs } from "./TileImageCreatedEventArgs";
import { markType } from "./type";
/**
 * @hidden
 */
var HeatTileImageCreatedEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(HeatTileImageCreatedEventArgs, _super);
    function HeatTileImageCreatedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._globalMinimumValue = 0;
        _this._globalMaximumValue = 0;
        _this._globalMaximumValueLongitude = 0;
        _this._globalMaximumValueLatitude = 0;
        _this._globalMinimumValueLongitude = 0;
        _this._globalMinimumValueLatitude = 0;
        return _this;
    }
    Object.defineProperty(HeatTileImageCreatedEventArgs.prototype, "globalMinimumValue", {
        get: function () {
            return this._globalMinimumValue;
        },
        set: function (a) {
            this._globalMinimumValue = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileImageCreatedEventArgs.prototype, "globalMaximumValue", {
        get: function () {
            return this._globalMaximumValue;
        },
        set: function (a) {
            this._globalMaximumValue = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileImageCreatedEventArgs.prototype, "globalMaximumValueLongitude", {
        get: function () {
            return this._globalMaximumValueLongitude;
        },
        set: function (a) {
            this._globalMaximumValueLongitude = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileImageCreatedEventArgs.prototype, "globalMaximumValueLatitude", {
        get: function () {
            return this._globalMaximumValueLatitude;
        },
        set: function (a) {
            this._globalMaximumValueLatitude = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileImageCreatedEventArgs.prototype, "globalMinimumValueLongitude", {
        get: function () {
            return this._globalMinimumValueLongitude;
        },
        set: function (a) {
            this._globalMinimumValueLongitude = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileImageCreatedEventArgs.prototype, "globalMinimumValueLatitude", {
        get: function () {
            return this._globalMinimumValueLatitude;
        },
        set: function (a) {
            this._globalMinimumValueLatitude = a;
        },
        enumerable: true,
        configurable: true
    });
    HeatTileImageCreatedEventArgs.$t = markType(HeatTileImageCreatedEventArgs, 'HeatTileImageCreatedEventArgs', TileImageCreatedEventArgs.$);
    return HeatTileImageCreatedEventArgs;
}(TileImageCreatedEventArgs));
export { HeatTileImageCreatedEventArgs };
//# sourceMappingURL=HeatTileImageCreatedEventArgs.js.map