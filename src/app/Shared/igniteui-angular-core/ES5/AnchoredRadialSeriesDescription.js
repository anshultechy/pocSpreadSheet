/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { RadialBaseDescription } from "./RadialBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var AnchoredRadialSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(AnchoredRadialSeriesDescription, _super);
    function AnchoredRadialSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.cl = null;
        _this.ck = null;
        _this.cj = null;
        _this.ci = null;
        _this.cc = 0;
        _this.ce = 0;
        _this.cf = 0;
        return _this;
    }
    AnchoredRadialSeriesDescription.prototype.get_type = function () {
        return "AnchoredRadialSeries";
    };
    Object.defineProperty(AnchoredRadialSeriesDescription.prototype, "valueMemberPath", {
        get: function () {
            return this.cl;
        },
        set: function (a) {
            this.cl = a;
            this.e("ValueMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnchoredRadialSeriesDescription.prototype, "trendLineType", {
        get: function () {
            return this.ck;
        },
        set: function (a) {
            this.ck = a;
            this.e("TrendLineType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnchoredRadialSeriesDescription.prototype, "trendLineBrush", {
        get: function () {
            return this.cj;
        },
        set: function (a) {
            this.cj = a;
            this.e("TrendLineBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnchoredRadialSeriesDescription.prototype, "actualTrendLineBrush", {
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
    Object.defineProperty(AnchoredRadialSeriesDescription.prototype, "trendLineThickness", {
        get: function () {
            return this.cc;
        },
        set: function (a) {
            this.cc = a;
            this.e("TrendLineThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnchoredRadialSeriesDescription.prototype, "trendLinePeriod", {
        get: function () {
            return this.ce;
        },
        set: function (a) {
            this.ce = a;
            this.e("TrendLinePeriod");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnchoredRadialSeriesDescription.prototype, "trendLineZIndex", {
        get: function () {
            return this.cf;
        },
        set: function (a) {
            this.cf = a;
            this.e("TrendLineZIndex");
        },
        enumerable: true,
        configurable: true
    });
    AnchoredRadialSeriesDescription.$t = markType(AnchoredRadialSeriesDescription, 'AnchoredRadialSeriesDescription', RadialBaseDescription.$);
    return AnchoredRadialSeriesDescription;
}(RadialBaseDescription));
export { AnchoredRadialSeriesDescription };
//# sourceMappingURL=AnchoredRadialSeriesDescription.js.map