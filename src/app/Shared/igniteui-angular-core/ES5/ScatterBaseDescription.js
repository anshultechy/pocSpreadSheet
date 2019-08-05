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
var ScatterBaseDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ScatterBaseDescription, _super);
    function ScatterBaseDescription() {
        var _this = _super.call(this) || this;
        _this.ci = null;
        _this.ck = null;
        _this.cj = null;
        _this.cl = null;
        _this.ch = null;
        _this.cg = null;
        _this.ce = null;
        _this.b6 = 0;
        _this.b9 = 0;
        _this.cf = null;
        _this.ca = 0;
        _this.b8 = 0;
        return _this;
    }
    ScatterBaseDescription.prototype.get_type = function () {
        return "ScatterBase";
    };
    Object.defineProperty(ScatterBaseDescription.prototype, "xAxisRef", {
        get: function () {
            return this.ci;
        },
        set: function (a) {
            this.ci = a;
            this.e("XAxisRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterBaseDescription.prototype, "yAxisRef", {
        get: function () {
            return this.ck;
        },
        set: function (a) {
            this.ck = a;
            this.e("YAxisRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterBaseDescription.prototype, "xMemberPath", {
        get: function () {
            return this.cj;
        },
        set: function (a) {
            this.cj = a;
            this.e("XMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterBaseDescription.prototype, "yMemberPath", {
        get: function () {
            return this.cl;
        },
        set: function (a) {
            this.cl = a;
            this.e("YMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterBaseDescription.prototype, "trendLineType", {
        get: function () {
            return this.ch;
        },
        set: function (a) {
            this.ch = a;
            this.e("TrendLineType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterBaseDescription.prototype, "trendLineBrush", {
        get: function () {
            return this.cg;
        },
        set: function (a) {
            this.cg = a;
            this.e("TrendLineBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterBaseDescription.prototype, "actualTrendLineBrush", {
        get: function () {
            return this.ce;
        },
        set: function (a) {
            this.ce = a;
            this.e("ActualTrendLineBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterBaseDescription.prototype, "trendLineThickness", {
        get: function () {
            return this.b6;
        },
        set: function (a) {
            this.b6 = a;
            this.e("TrendLineThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterBaseDescription.prototype, "trendLinePeriod", {
        get: function () {
            return this.b9;
        },
        set: function (a) {
            this.b9 = a;
            this.e("TrendLinePeriod");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterBaseDescription.prototype, "markerCollisionAvoidance", {
        get: function () {
            return this.cf;
        },
        set: function (a) {
            this.cf = a;
            this.e("MarkerCollisionAvoidance");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterBaseDescription.prototype, "trendLineZIndex", {
        get: function () {
            return this.ca;
        },
        set: function (a) {
            this.ca = a;
            this.e("TrendLineZIndex");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterBaseDescription.prototype, "maximumMarkers", {
        get: function () {
            return this.b8;
        },
        set: function (a) {
            this.b8 = a;
            this.e("MaximumMarkers");
        },
        enumerable: true,
        configurable: true
    });
    ScatterBaseDescription.$t = markType(ScatterBaseDescription, 'ScatterBaseDescription', MarkerSeriesDescription.$);
    return ScatterBaseDescription;
}(MarkerSeriesDescription));
export { ScatterBaseDescription };
//# sourceMappingURL=ScatterBaseDescription.js.map