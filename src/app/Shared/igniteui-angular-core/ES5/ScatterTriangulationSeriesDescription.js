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
var ScatterTriangulationSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ScatterTriangulationSeriesDescription, _super);
    function ScatterTriangulationSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.bw = null;
        _this.by = null;
        _this.bv = null;
        _this.bx = null;
        _this.bs = null;
        _this.bt = null;
        _this.bu = null;
        return _this;
    }
    ScatterTriangulationSeriesDescription.prototype.get_type = function () {
        return "ScatterTriangulationSeries";
    };
    Object.defineProperty(ScatterTriangulationSeriesDescription.prototype, "xMemberPath", {
        get: function () {
            return this.bw;
        },
        set: function (a) {
            this.bw = a;
            this.e("XMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterTriangulationSeriesDescription.prototype, "yMemberPath", {
        get: function () {
            return this.by;
        },
        set: function (a) {
            this.by = a;
            this.e("YMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterTriangulationSeriesDescription.prototype, "xAxisRef", {
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
    Object.defineProperty(ScatterTriangulationSeriesDescription.prototype, "yAxisRef", {
        get: function () {
            return this.bx;
        },
        set: function (a) {
            this.bx = a;
            this.e("YAxisRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterTriangulationSeriesDescription.prototype, "triangleVertexMemberPath1", {
        get: function () {
            return this.bs;
        },
        set: function (a) {
            this.bs = a;
            this.e("TriangleVertexMemberPath1");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterTriangulationSeriesDescription.prototype, "triangleVertexMemberPath2", {
        get: function () {
            return this.bt;
        },
        set: function (a) {
            this.bt = a;
            this.e("TriangleVertexMemberPath2");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterTriangulationSeriesDescription.prototype, "triangleVertexMemberPath3", {
        get: function () {
            return this.bu;
        },
        set: function (a) {
            this.bu = a;
            this.e("TriangleVertexMemberPath3");
        },
        enumerable: true,
        configurable: true
    });
    ScatterTriangulationSeriesDescription.$t = markType(ScatterTriangulationSeriesDescription, 'ScatterTriangulationSeriesDescription', SeriesDescription.$);
    return ScatterTriangulationSeriesDescription;
}(SeriesDescription));
export { ScatterTriangulationSeriesDescription };
//# sourceMappingURL=ScatterTriangulationSeriesDescription.js.map