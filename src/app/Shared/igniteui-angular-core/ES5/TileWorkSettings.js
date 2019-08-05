/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { Color } from "./Color";
/**
 * @hidden
 */
var TileWorkSettings = /** @class */ (function (_super) {
    tslib_1.__extends(TileWorkSettings, _super);
    function TileWorkSettings() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._scaler = null;
        _this._blurRadius = 0;
        _this._maxBlurRadius = 0;
        _this._useBlurRadiusAdjustedForZoom = false;
        _this._minimumColor = new Color();
        _this._maximumColor = new Color();
        _this._tileViewport = null;
        _this._yValues = null;
        _this._xValues = null;
        _this._values = null;
        _this._isNewData = false;
        _this._minimumVisibleLatitude = 0;
        _this._maximumVisibleLatitude = 0;
        _this._minimumVisibleLongitude = 0;
        _this._maximumVisibleLongitude = 0;
        _this._z = 0;
        _this._x = 0;
        _this._y = 0;
        _this._window = null;
        _this._testRun = false;
        _this._globalMinimum = 0;
        _this._globalMaximum = 0;
        _this._useGlobalMinMax = false;
        _this._minimumValue = 0;
        _this._maximumValue = 0;
        _this._scaleColors = null;
        _this._scaleColorOffsets = null;
        _this._useLogarithmicScale = false;
        _this._logarithmBase = 0;
        _this._image = null;
        return _this;
    }
    Object.defineProperty(TileWorkSettings.prototype, "scaler", {
        get: function () {
            return this._scaler;
        },
        set: function (a) {
            this._scaler = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "blurRadius", {
        get: function () {
            return this._blurRadius;
        },
        set: function (a) {
            this._blurRadius = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "maxBlurRadius", {
        get: function () {
            return this._maxBlurRadius;
        },
        set: function (a) {
            this._maxBlurRadius = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "useBlurRadiusAdjustedForZoom", {
        get: function () {
            return this._useBlurRadiusAdjustedForZoom;
        },
        set: function (a) {
            this._useBlurRadiusAdjustedForZoom = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "minimumColor", {
        get: function () {
            return this._minimumColor;
        },
        set: function (a) {
            this._minimumColor = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "maximumColor", {
        get: function () {
            return this._maximumColor;
        },
        set: function (a) {
            this._maximumColor = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "tileViewport", {
        get: function () {
            return this._tileViewport;
        },
        set: function (a) {
            this._tileViewport = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "yValues", {
        get: function () {
            return this._yValues;
        },
        set: function (a) {
            this._yValues = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "xValues", {
        get: function () {
            return this._xValues;
        },
        set: function (a) {
            this._xValues = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "values", {
        get: function () {
            return this._values;
        },
        set: function (a) {
            this._values = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "isNewData", {
        get: function () {
            return this._isNewData;
        },
        set: function (a) {
            this._isNewData = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "minimumVisibleLatitude", {
        get: function () {
            return this._minimumVisibleLatitude;
        },
        set: function (a) {
            this._minimumVisibleLatitude = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "maximumVisibleLatitude", {
        get: function () {
            return this._maximumVisibleLatitude;
        },
        set: function (a) {
            this._maximumVisibleLatitude = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "minimumVisibleLongitude", {
        get: function () {
            return this._minimumVisibleLongitude;
        },
        set: function (a) {
            this._minimumVisibleLongitude = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "maximumVisibleLongitude", {
        get: function () {
            return this._maximumVisibleLongitude;
        },
        set: function (a) {
            this._maximumVisibleLongitude = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "z", {
        get: function () {
            return this._z;
        },
        set: function (a) {
            this._z = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (a) {
            this._x = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (a) {
            this._y = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "window", {
        get: function () {
            return this._window;
        },
        set: function (a) {
            this._window = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "testRun", {
        get: function () {
            return this._testRun;
        },
        set: function (a) {
            this._testRun = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "globalMinimum", {
        get: function () {
            return this._globalMinimum;
        },
        set: function (a) {
            this._globalMinimum = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "globalMaximum", {
        get: function () {
            return this._globalMaximum;
        },
        set: function (a) {
            this._globalMaximum = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "useGlobalMinMax", {
        get: function () {
            return this._useGlobalMinMax;
        },
        set: function (a) {
            this._useGlobalMinMax = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "minimumValue", {
        get: function () {
            return this._minimumValue;
        },
        set: function (a) {
            this._minimumValue = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "maximumValue", {
        get: function () {
            return this._maximumValue;
        },
        set: function (a) {
            this._maximumValue = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "scaleColors", {
        get: function () {
            return this._scaleColors;
        },
        set: function (a) {
            this._scaleColors = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "scaleColorOffsets", {
        get: function () {
            return this._scaleColorOffsets;
        },
        set: function (a) {
            this._scaleColorOffsets = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "useLogarithmicScale", {
        get: function () {
            return this._useLogarithmicScale;
        },
        set: function (a) {
            this._useLogarithmicScale = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "logarithmBase", {
        get: function () {
            return this._logarithmBase;
        },
        set: function (a) {
            this._logarithmBase = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileWorkSettings.prototype, "image", {
        get: function () {
            return this._image;
        },
        set: function (a) {
            this._image = a;
        },
        enumerable: true,
        configurable: true
    });
    TileWorkSettings.prototype.flatten = function () {
        var minA_ = this.minimumColor.l;
        var minR_ = this.minimumColor.o;
        var minG_ = this.minimumColor.n;
        var minB_ = this.minimumColor.m;
        var maxA_ = this.maximumColor.l;
        var maxR_ = this.maximumColor.o;
        var maxG_ = this.maximumColor.n;
        var maxB_ = this.maximumColor.m;
        var scaleColors_ = null;
        if (this.scaleColors != null) {
            scaleColors_ = new Array(this.scaleColors.length);
            for (var a = 0; a < this.scaleColors.length; a++) {
                var a_ = this.scaleColors[a].l;
                var r_ = this.scaleColors[a].o;
                var g_ = this.scaleColors[a].n;
                var b_ = this.scaleColors[a].m;
                var color_ = { a: a_, r: r_, g: g_, b: b_ };
                scaleColors_[a] = color_;
            }
        }
        return {
            blurRadius: this.blurRadius,
            maxBlurRadius: this.maxBlurRadius,
            //isLinearScaler: this.isLinearScaler,
            //linearScalerMinimumXValue: this.linearScalerMinimumXValue,
            //linearScalerMinimumYValue: this.linearScalerMinimumYValue,
            //linearScalerMaximumXValue: this.linearScalerMaximumXValue,
            //linearScalerMaximumYValue: this.linearScalerMaximumYValue,
            //linearScalerXIsInverted: this.linearScalerXIsInverted,
            //linearScalerYIsInverted: this.linearScalerYIsInverted,
            useBlurRadiusAdjustedForZoom: this.useBlurRadiusAdjustedForZoom,
            minimumColor: { a: minA_, r: minR_, g: minG_, b: minB_ },
            maximumColor: { a: maxA_, r: maxR_, g: maxG_, b: maxB_ },
            tileViewport: { left: this.tileViewport.left, top: this.tileViewport.top, width: this.tileViewport.width, height: this.tileViewport.height },
            yValues: this.yValues,
            xValues: this.xValues,
            values: this.values,
            isNewData: this.isNewData,
            minimumVisibleLatitude: this.minimumVisibleLatitude,
            minimumVisibleLongitude: this.minimumVisibleLongitude,
            maximumVisibleLatitude: this.maximumVisibleLatitude,
            maximumVisibleLongitude: this.maximumVisibleLongitude,
            z: this.z,
            x: this.x,
            y: this.y,
            window: { left: this.window.left, top: this.window.top, width: this.window.width, height: this.window.height },
            testRun: this.testRun,
            globalMinimum: this.globalMinimum,
            globalMaximum: this.globalMaximum,
            useGlobalMinMax: this.useGlobalMinMax,
            minimumValue: this.minimumValue,
            maximumValue: this.maximumValue,
            scaleColorOffsets: this.scaleColorOffsets,
            scaleColors: scaleColors_,
            useLogarithmicScale: this.useLogarithmicScale,
            logarithmBase: this.logarithmBase
        };
    };
    TileWorkSettings.$t = markType(TileWorkSettings, 'TileWorkSettings');
    return TileWorkSettings;
}(Base));
export { TileWorkSettings };
//# sourceMappingURL=TileWorkSettings.js.map