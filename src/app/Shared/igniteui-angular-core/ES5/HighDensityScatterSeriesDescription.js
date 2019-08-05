/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { SeriesDescription } from "./SeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var HighDensityScatterSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(HighDensityScatterSeriesDescription, _super);
    function HighDensityScatterSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.b6 = null;
        _this.b8 = null;
        _this.b7 = null;
        _this.b9 = null;
        _this.bt = false;
        _this.bs = false;
        _this.bx = 0;
        _this.bw = 0;
        _this.b5 = null;
        _this.b4 = null;
        _this.b0 = 0;
        _this.b1 = 0;
        return _this;
    }
    HighDensityScatterSeriesDescription.prototype.get_type = function () {
        return "HighDensityScatterSeries";
    };
    Object.defineProperty(HighDensityScatterSeriesDescription.prototype, "xAxisRef", {
        get: function () {
            return this.b6;
        },
        set: function (a) {
            this.b6 = a;
            this.e("XAxisRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighDensityScatterSeriesDescription.prototype, "yAxisRef", {
        get: function () {
            return this.b8;
        },
        set: function (a) {
            this.b8 = a;
            this.e("YAxisRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighDensityScatterSeriesDescription.prototype, "xMemberPath", {
        get: function () {
            return this.b7;
        },
        set: function (a) {
            this.b7 = a;
            this.e("XMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighDensityScatterSeriesDescription.prototype, "yMemberPath", {
        get: function () {
            return this.b9;
        },
        set: function (a) {
            this.b9 = a;
            this.e("YMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighDensityScatterSeriesDescription.prototype, "useBruteForce", {
        get: function () {
            return this.bt;
        },
        set: function (a) {
            this.bt = a;
            this.e("UseBruteForce");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighDensityScatterSeriesDescription.prototype, "progressiveLoad", {
        get: function () {
            return this.bs;
        },
        set: function (a) {
            this.bs = a;
            this.e("ProgressiveLoad");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighDensityScatterSeriesDescription.prototype, "heatMinimum", {
        get: function () {
            return this.bx;
        },
        set: function (a) {
            this.bx = a;
            this.e("HeatMinimum");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighDensityScatterSeriesDescription.prototype, "heatMaximum", {
        get: function () {
            return this.bw;
        },
        set: function (a) {
            this.bw = a;
            this.e("HeatMaximum");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighDensityScatterSeriesDescription.prototype, "heatMinimumColor", {
        get: function () {
            return this.b5;
        },
        set: function (a) {
            this.b5 = a;
            this.e("HeatMinimumColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighDensityScatterSeriesDescription.prototype, "heatMaximumColor", {
        get: function () {
            return this.b4;
        },
        set: function (a) {
            this.b4 = a;
            this.e("HeatMaximumColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighDensityScatterSeriesDescription.prototype, "pointExtent", {
        get: function () {
            return this.b0;
        },
        set: function (a) {
            this.b0 = a;
            this.e("PointExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighDensityScatterSeriesDescription.prototype, "progressiveStatus", {
        get: function () {
            return this.b1;
        },
        set: function (a) {
            this.b1 = a;
            this.e("ProgressiveStatus");
        },
        enumerable: true,
        configurable: true
    });
    HighDensityScatterSeriesDescription.$t = markType(HighDensityScatterSeriesDescription, 'HighDensityScatterSeriesDescription', SeriesDescription.$);
    return HighDensityScatterSeriesDescription;
}(SeriesDescription));
export { HighDensityScatterSeriesDescription };
//# sourceMappingURL=HighDensityScatterSeriesDescription.js.map