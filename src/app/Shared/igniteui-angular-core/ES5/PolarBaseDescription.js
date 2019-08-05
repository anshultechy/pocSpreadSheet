/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { MarkerSeriesDescription } from "./MarkerSeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var PolarBaseDescription = /** @class */ (function (_super) {
    tslib_1.__extends(PolarBaseDescription, _super);
    function PolarBaseDescription() {
        var _this = _super.call(this) || this;
        _this.ck = null;
        _this.cm = null;
        _this.cj = null;
        _this.cl = null;
        _this.b7 = false;
        _this.cc = 0;
        _this.co = null;
        _this.cn = null;
        _this.ci = null;
        _this.ca = 0;
        _this.cd = 0;
        _this.ce = 0;
        _this.b6 = false;
        return _this;
    }
    PolarBaseDescription.prototype.get_type = function () {
        return "PolarBase";
    };
    Object.defineProperty(PolarBaseDescription.prototype, "angleMemberPath", {
        get: function () {
            return this.ck;
        },
        set: function (a) {
            this.ck = a;
            this.e("AngleMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolarBaseDescription.prototype, "radiusMemberPath", {
        get: function () {
            return this.cm;
        },
        set: function (a) {
            this.cm = a;
            this.e("RadiusMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolarBaseDescription.prototype, "angleAxisRef", {
        get: function () {
            return this.cj;
        },
        set: function (a) {
            this.cj = a;
            this.e("AngleAxisRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolarBaseDescription.prototype, "radiusAxisRef", {
        get: function () {
            return this.cl;
        },
        set: function (a) {
            this.cl = a;
            this.e("RadiusAxisRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolarBaseDescription.prototype, "useCartesianInterpolation", {
        get: function () {
            return this.b7;
        },
        set: function (a) {
            this.b7 = a;
            this.e("UseCartesianInterpolation");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolarBaseDescription.prototype, "maximumMarkers", {
        get: function () {
            return this.cc;
        },
        set: function (a) {
            this.cc = a;
            this.e("MaximumMarkers");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolarBaseDescription.prototype, "trendLineType", {
        get: function () {
            return this.co;
        },
        set: function (a) {
            this.co = a;
            this.e("TrendLineType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolarBaseDescription.prototype, "trendLineBrush", {
        get: function () {
            return this.cn;
        },
        set: function (a) {
            this.cn = a;
            this.e("TrendLineBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolarBaseDescription.prototype, "actualTrendLineBrush", {
        get: function () {
            return this.ci;
        },
        set: function (a) {
            this.ci = a;
            this.e("ActualTrendLineBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolarBaseDescription.prototype, "trendLineThickness", {
        get: function () {
            return this.ca;
        },
        set: function (a) {
            this.ca = a;
            this.e("TrendLineThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolarBaseDescription.prototype, "trendLinePeriod", {
        get: function () {
            return this.cd;
        },
        set: function (a) {
            this.cd = a;
            this.e("TrendLinePeriod");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolarBaseDescription.prototype, "trendLineZIndex", {
        get: function () {
            return this.ce;
        },
        set: function (a) {
            this.ce = a;
            this.e("TrendLineZIndex");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolarBaseDescription.prototype, "clipSeriesToBounds", {
        get: function () {
            return this.b6;
        },
        set: function (a) {
            this.b6 = a;
            this.e("ClipSeriesToBounds");
        },
        enumerable: true,
        configurable: true
    });
    PolarBaseDescription.$t = markType(PolarBaseDescription, 'PolarBaseDescription', MarkerSeriesDescription.$);
    return PolarBaseDescription;
}(MarkerSeriesDescription));
export { PolarBaseDescription };
//# sourceMappingURL=PolarBaseDescription.js.map