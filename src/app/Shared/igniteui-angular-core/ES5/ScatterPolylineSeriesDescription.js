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
var ScatterPolylineSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ScatterPolylineSeriesDescription, _super);
    function ScatterPolylineSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.b2 = null;
        _this.b0 = null;
        return _this;
    }
    ScatterPolylineSeriesDescription.prototype.get_type = function () {
        return "ScatterPolylineSeries";
    };
    Object.defineProperty(ScatterPolylineSeriesDescription.prototype, "shapeStyleSelector", {
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
    Object.defineProperty(ScatterPolylineSeriesDescription.prototype, "shapeStyle", {
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
    ScatterPolylineSeriesDescription.$t = markType(ScatterPolylineSeriesDescription, 'ScatterPolylineSeriesDescription', ShapeSeriesBaseDescription.$);
    return ScatterPolylineSeriesDescription;
}(ShapeSeriesBaseDescription));
export { ScatterPolylineSeriesDescription };
//# sourceMappingURL=ScatterPolylineSeriesDescription.js.map