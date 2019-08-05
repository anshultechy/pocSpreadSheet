/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ShapeSeriesBaseDescription } from "./ShapeSeriesBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var ScatterPolygonSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ScatterPolygonSeriesDescription, _super);
    function ScatterPolygonSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.b2 = null;
        _this.b0 = null;
        _this.cb = null;
        _this.ca = null;
        _this.b6 = null;
        _this.b7 = null;
        _this.b4 = null;
        _this.b9 = null;
        _this.b5 = null;
        _this.b8 = null;
        return _this;
    }
    ScatterPolygonSeriesDescription.prototype.get_type = function () {
        return "ScatterPolygonSeries";
    };
    Object.defineProperty(ScatterPolygonSeriesDescription.prototype, "shapeStyleSelector", {
        get: function () {
            return this.b2;
        },
        set: function (a) {
            this.b2 = a;
            this.e("ShapeStyleSelector");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterPolygonSeriesDescription.prototype, "shapeStyle", {
        get: function () {
            return this.b0;
        },
        set: function (a) {
            this.b0 = a;
            this.e("ShapeStyle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterPolygonSeriesDescription.prototype, "markerType", {
        get: function () {
            return this.cb;
        },
        set: function (a) {
            this.cb = a;
            this.e("MarkerType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterPolygonSeriesDescription.prototype, "markerTemplateRef", {
        get: function () {
            return this.ca;
        },
        set: function (a) {
            this.ca = a;
            this.e("MarkerTemplateRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterPolygonSeriesDescription.prototype, "actualMarkerTemplateRef", {
        get: function () {
            return this.b6;
        },
        set: function (a) {
            this.b6 = a;
            this.e("ActualMarkerTemplateRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterPolygonSeriesDescription.prototype, "markerBrush", {
        get: function () {
            return this.b7;
        },
        set: function (a) {
            this.b7 = a;
            this.e("MarkerBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterPolygonSeriesDescription.prototype, "actualMarkerBrush", {
        get: function () {
            return this.b4;
        },
        set: function (a) {
            this.b4 = a;
            this.e("ActualMarkerBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterPolygonSeriesDescription.prototype, "markerOutline", {
        get: function () {
            return this.b9;
        },
        set: function (a) {
            this.b9 = a;
            this.e("MarkerOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterPolygonSeriesDescription.prototype, "actualMarkerOutline", {
        get: function () {
            return this.b5;
        },
        set: function (a) {
            this.b5 = a;
            this.e("ActualMarkerOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterPolygonSeriesDescription.prototype, "markerCollisionAvoidance", {
        get: function () {
            return this.b8;
        },
        set: function (a) {
            this.b8 = a;
            this.e("MarkerCollisionAvoidance");
        },
        enumerable: true,
        configurable: true
    });
    ScatterPolygonSeriesDescription.$t = markType(ScatterPolygonSeriesDescription, 'ScatterPolygonSeriesDescription', ShapeSeriesBaseDescription.$);
    return ScatterPolygonSeriesDescription;
}(ShapeSeriesBaseDescription));
export { ScatterPolygonSeriesDescription };
//# sourceMappingURL=ScatterPolygonSeriesDescription.js.map