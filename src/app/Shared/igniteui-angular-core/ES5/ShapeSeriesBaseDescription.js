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
var ShapeSeriesBaseDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ShapeSeriesBaseDescription, _super);
    function ShapeSeriesBaseDescription() {
        var _this = _super.call(this) || this;
        _this.bu = null;
        _this.bv = null;
        _this.bw = null;
        _this.bs = 0;
        return _this;
    }
    ShapeSeriesBaseDescription.prototype.get_type = function () {
        return "ShapeSeriesBase";
    };
    Object.defineProperty(ShapeSeriesBaseDescription.prototype, "shapeMemberPath", {
        get: function () {
            return this.bu;
        },
        set: function (a) {
            this.bu = a;
            this.e("ShapeMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShapeSeriesBaseDescription.prototype, "xAxisRef", {
        get: function () {
            return this.bv;
        },
        set: function (a) {
            this.bv = a;
            this.e("XAxisRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShapeSeriesBaseDescription.prototype, "yAxisRef", {
        get: function () {
            return this.bw;
        },
        set: function (a) {
            this.bw = a;
            this.e("YAxisRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShapeSeriesBaseDescription.prototype, "shapeFilterResolution", {
        get: function () {
            return this.bs;
        },
        set: function (a) {
            this.bs = a;
            this.e("ShapeFilterResolution");
        },
        enumerable: true,
        configurable: true
    });
    ShapeSeriesBaseDescription.$t = markType(ShapeSeriesBaseDescription, 'ShapeSeriesBaseDescription', SeriesDescription.$);
    return ShapeSeriesBaseDescription;
}(SeriesDescription));
export { ShapeSeriesBaseDescription };
//# sourceMappingURL=ShapeSeriesBaseDescription.js.map