/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { SeriesViewerDescription } from "./SeriesViewerDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var DataChartDescription = /** @class */ (function (_super) {
    tslib_1.__extends(DataChartDescription, _super);
    function DataChartDescription() {
        var _this = _super.call(this) || this;
        _this.eb = false;
        _this.en = 0;
        _this.eo = 0;
        _this.eh = 0;
        _this.ei = 0;
        _this.ea = false;
        _this.ec = false;
        _this.e0 = null;
        _this.d9 = false;
        _this.d0 = null;
        _this.d1 = null;
        _this.d3 = null;
        _this.d2 = null;
        _this.ez = null;
        _this.ex = null;
        _this.ey = null;
        _this.ek = 0;
        _this.em = 0;
        _this.el = 0;
        _this.ej = 0;
        _this.dz = null;
        _this.e2 = null;
        _this.e1 = null;
        return _this;
    }
    DataChartDescription.prototype.get_type = function () {
        return "DataChart";
    };
    Object.defineProperty(DataChartDescription.prototype, "isSquare", {
        get: function () {
            return this.eb;
        },
        set: function (a) {
            this.eb = a;
            this.e("IsSquare");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartDescription.prototype, "windowScaleHorizontal", {
        get: function () {
            return this.en;
        },
        set: function (a) {
            this.en = a;
            this.e("WindowScaleHorizontal");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartDescription.prototype, "windowScaleVertical", {
        get: function () {
            return this.eo;
        },
        set: function (a) {
            this.eo = a;
            this.e("WindowScaleVertical");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartDescription.prototype, "actualWindowScaleHorizontal", {
        get: function () {
            return this.eh;
        },
        set: function (a) {
            this.eh = a;
            this.e("ActualWindowScaleHorizontal");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartDescription.prototype, "actualWindowScaleVertical", {
        get: function () {
            return this.ei;
        },
        set: function (a) {
            this.ei = a;
            this.e("ActualWindowScaleVertical");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartDescription.prototype, "isHorizontalZoomEnabled", {
        get: function () {
            return this.ea;
        },
        set: function (a) {
            this.ea = a;
            this.e("IsHorizontalZoomEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartDescription.prototype, "isVerticalZoomEnabled", {
        get: function () {
            return this.ec;
        },
        set: function (a) {
            this.ec = a;
            this.e("IsVerticalZoomEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartDescription.prototype, "gridMode", {
        get: function () {
            return this.e0;
        },
        set: function (a) {
            this.e0 = a;
            this.e("GridMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartDescription.prototype, "alignsGridLinesToPixels", {
        get: function () {
            return this.d9;
        },
        set: function (a) {
            this.d9 = a;
            this.e("AlignsGridLinesToPixels");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartDescription.prototype, "brushes", {
        get: function () {
            return this.d0;
        },
        set: function (a) {
            this.d0 = a;
            this.e("Brushes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartDescription.prototype, "markerBrushes", {
        get: function () {
            return this.d1;
        },
        set: function (a) {
            this.d1 = a;
            this.e("MarkerBrushes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartDescription.prototype, "outlines", {
        get: function () {
            return this.d3;
        },
        set: function (a) {
            this.d3 = a;
            this.e("Outlines");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartDescription.prototype, "markerOutlines", {
        get: function () {
            return this.d2;
        },
        set: function (a) {
            this.d2 = a;
            this.e("MarkerOutlines");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartDescription.prototype, "defaultAxisStroke", {
        get: function () {
            return this.ez;
        },
        set: function (a) {
            this.ez = a;
            this.e("DefaultAxisStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartDescription.prototype, "defaultAxisMajorStroke", {
        get: function () {
            return this.ex;
        },
        set: function (a) {
            this.ex = a;
            this.e("DefaultAxisMajorStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartDescription.prototype, "defaultAxisMinorStroke", {
        get: function () {
            return this.ey;
        },
        set: function (a) {
            this.ey = a;
            this.e("DefaultAxisMinorStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartDescription.prototype, "plotAreaMarginLeft", {
        get: function () {
            return this.ek;
        },
        set: function (a) {
            this.ek = a;
            this.e("PlotAreaMarginLeft");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartDescription.prototype, "plotAreaMarginTop", {
        get: function () {
            return this.em;
        },
        set: function (a) {
            this.em = a;
            this.e("PlotAreaMarginTop");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartDescription.prototype, "plotAreaMarginRight", {
        get: function () {
            return this.el;
        },
        set: function (a) {
            this.el = a;
            this.e("PlotAreaMarginRight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartDescription.prototype, "plotAreaMarginBottom", {
        get: function () {
            return this.ej;
        },
        set: function (a) {
            this.ej = a;
            this.e("PlotAreaMarginBottom");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartDescription.prototype, "axes", {
        get: function () {
            return this.dz;
        },
        set: function (a) {
            this.dz = a;
            this.e("Axes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartDescription.prototype, "width", {
        get: function () {
            return this.e2;
        },
        set: function (a) {
            this.e2 = a;
            this.e("Width");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartDescription.prototype, "height", {
        get: function () {
            return this.e1;
        },
        set: function (a) {
            this.e1 = a;
            this.e("Height");
        },
        enumerable: true,
        configurable: true
    });
    DataChartDescription.$t = markType(DataChartDescription, 'DataChartDescription', SeriesViewerDescription.$);
    return DataChartDescription;
}(SeriesViewerDescription));
export { DataChartDescription };
//# sourceMappingURL=DataChartDescription.js.map