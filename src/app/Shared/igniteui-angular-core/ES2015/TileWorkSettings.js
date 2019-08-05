/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { Color } from "./Color";
/**
 * @hidden
 */
export class TileWorkSettings extends Base {
    constructor() {
        super(...arguments);
        this._scaler = null;
        this._blurRadius = 0;
        this._maxBlurRadius = 0;
        this._useBlurRadiusAdjustedForZoom = false;
        this._minimumColor = new Color();
        this._maximumColor = new Color();
        this._tileViewport = null;
        this._yValues = null;
        this._xValues = null;
        this._values = null;
        this._isNewData = false;
        this._minimumVisibleLatitude = 0;
        this._maximumVisibleLatitude = 0;
        this._minimumVisibleLongitude = 0;
        this._maximumVisibleLongitude = 0;
        this._z = 0;
        this._x = 0;
        this._y = 0;
        this._window = null;
        this._testRun = false;
        this._globalMinimum = 0;
        this._globalMaximum = 0;
        this._useGlobalMinMax = false;
        this._minimumValue = 0;
        this._maximumValue = 0;
        this._scaleColors = null;
        this._scaleColorOffsets = null;
        this._useLogarithmicScale = false;
        this._logarithmBase = 0;
        this._image = null;
    }
    get scaler() {
        return this._scaler;
    }
    set scaler(a) {
        this._scaler = a;
    }
    get blurRadius() {
        return this._blurRadius;
    }
    set blurRadius(a) {
        this._blurRadius = a;
    }
    get maxBlurRadius() {
        return this._maxBlurRadius;
    }
    set maxBlurRadius(a) {
        this._maxBlurRadius = a;
    }
    get useBlurRadiusAdjustedForZoom() {
        return this._useBlurRadiusAdjustedForZoom;
    }
    set useBlurRadiusAdjustedForZoom(a) {
        this._useBlurRadiusAdjustedForZoom = a;
    }
    get minimumColor() {
        return this._minimumColor;
    }
    set minimumColor(a) {
        this._minimumColor = a;
    }
    get maximumColor() {
        return this._maximumColor;
    }
    set maximumColor(a) {
        this._maximumColor = a;
    }
    get tileViewport() {
        return this._tileViewport;
    }
    set tileViewport(a) {
        this._tileViewport = a;
    }
    get yValues() {
        return this._yValues;
    }
    set yValues(a) {
        this._yValues = a;
    }
    get xValues() {
        return this._xValues;
    }
    set xValues(a) {
        this._xValues = a;
    }
    get values() {
        return this._values;
    }
    set values(a) {
        this._values = a;
    }
    get isNewData() {
        return this._isNewData;
    }
    set isNewData(a) {
        this._isNewData = a;
    }
    get minimumVisibleLatitude() {
        return this._minimumVisibleLatitude;
    }
    set minimumVisibleLatitude(a) {
        this._minimumVisibleLatitude = a;
    }
    get maximumVisibleLatitude() {
        return this._maximumVisibleLatitude;
    }
    set maximumVisibleLatitude(a) {
        this._maximumVisibleLatitude = a;
    }
    get minimumVisibleLongitude() {
        return this._minimumVisibleLongitude;
    }
    set minimumVisibleLongitude(a) {
        this._minimumVisibleLongitude = a;
    }
    get maximumVisibleLongitude() {
        return this._maximumVisibleLongitude;
    }
    set maximumVisibleLongitude(a) {
        this._maximumVisibleLongitude = a;
    }
    get z() {
        return this._z;
    }
    set z(a) {
        this._z = a;
    }
    get x() {
        return this._x;
    }
    set x(a) {
        this._x = a;
    }
    get y() {
        return this._y;
    }
    set y(a) {
        this._y = a;
    }
    get window() {
        return this._window;
    }
    set window(a) {
        this._window = a;
    }
    get testRun() {
        return this._testRun;
    }
    set testRun(a) {
        this._testRun = a;
    }
    get globalMinimum() {
        return this._globalMinimum;
    }
    set globalMinimum(a) {
        this._globalMinimum = a;
    }
    get globalMaximum() {
        return this._globalMaximum;
    }
    set globalMaximum(a) {
        this._globalMaximum = a;
    }
    get useGlobalMinMax() {
        return this._useGlobalMinMax;
    }
    set useGlobalMinMax(a) {
        this._useGlobalMinMax = a;
    }
    get minimumValue() {
        return this._minimumValue;
    }
    set minimumValue(a) {
        this._minimumValue = a;
    }
    get maximumValue() {
        return this._maximumValue;
    }
    set maximumValue(a) {
        this._maximumValue = a;
    }
    get scaleColors() {
        return this._scaleColors;
    }
    set scaleColors(a) {
        this._scaleColors = a;
    }
    get scaleColorOffsets() {
        return this._scaleColorOffsets;
    }
    set scaleColorOffsets(a) {
        this._scaleColorOffsets = a;
    }
    get useLogarithmicScale() {
        return this._useLogarithmicScale;
    }
    set useLogarithmicScale(a) {
        this._useLogarithmicScale = a;
    }
    get logarithmBase() {
        return this._logarithmBase;
    }
    set logarithmBase(a) {
        this._logarithmBase = a;
    }
    get image() {
        return this._image;
    }
    set image(a) {
        this._image = a;
    }
    flatten() {
        let minA_ = this.minimumColor.l;
        let minR_ = this.minimumColor.o;
        let minG_ = this.minimumColor.n;
        let minB_ = this.minimumColor.m;
        let maxA_ = this.maximumColor.l;
        let maxR_ = this.maximumColor.o;
        let maxG_ = this.maximumColor.n;
        let maxB_ = this.maximumColor.m;
        let scaleColors_ = null;
        if (this.scaleColors != null) {
            scaleColors_ = new Array(this.scaleColors.length);
            for (let a = 0; a < this.scaleColors.length; a++) {
                let a_ = this.scaleColors[a].l;
                let r_ = this.scaleColors[a].o;
                let g_ = this.scaleColors[a].n;
                let b_ = this.scaleColors[a].m;
                let color_ = { a: a_, r: r_, g: g_, b: b_ };
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
    }
}
TileWorkSettings.$t = markType(TileWorkSettings, 'TileWorkSettings');
//# sourceMappingURL=TileWorkSettings.js.map