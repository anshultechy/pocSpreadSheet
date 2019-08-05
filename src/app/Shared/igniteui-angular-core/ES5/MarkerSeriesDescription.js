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
var MarkerSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(MarkerSeriesDescription, _super);
    function MarkerSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.by = null;
        _this.bx = null;
        _this.bu = null;
        _this.bv = null;
        _this.bs = null;
        _this.bw = null;
        _this.bt = null;
        return _this;
    }
    MarkerSeriesDescription.prototype.get_type = function () {
        return "MarkerSeries";
    };
    Object.defineProperty(MarkerSeriesDescription.prototype, "markerType", {
        get: function () {
            return this.by;
        },
        set: function (a) {
            this.by = a;
            this.e("MarkerType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerSeriesDescription.prototype, "markerTemplateRef", {
        get: function () {
            return this.bx;
        },
        set: function (a) {
            this.bx = a;
            this.e("MarkerTemplateRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerSeriesDescription.prototype, "actualMarkerTemplateRef", {
        get: function () {
            return this.bu;
        },
        set: function (a) {
            this.bu = a;
            this.e("ActualMarkerTemplateRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerSeriesDescription.prototype, "markerBrush", {
        get: function () {
            return this.bv;
        },
        set: function (a) {
            this.bv = a;
            this.e("MarkerBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerSeriesDescription.prototype, "actualMarkerBrush", {
        get: function () {
            return this.bs;
        },
        set: function (a) {
            this.bs = a;
            this.e("ActualMarkerBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerSeriesDescription.prototype, "markerOutline", {
        get: function () {
            return this.bw;
        },
        set: function (a) {
            this.bw = a;
            this.e("MarkerOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerSeriesDescription.prototype, "actualMarkerOutline", {
        get: function () {
            return this.bt;
        },
        set: function (a) {
            this.bt = a;
            this.e("ActualMarkerOutline");
        },
        enumerable: true,
        configurable: true
    });
    MarkerSeriesDescription.$t = markType(MarkerSeriesDescription, 'MarkerSeriesDescription', SeriesDescription.$);
    return MarkerSeriesDescription;
}(SeriesDescription));
export { MarkerSeriesDescription };
//# sourceMappingURL=MarkerSeriesDescription.js.map