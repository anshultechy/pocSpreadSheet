/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ScatterTriangulationSeriesDescription } from "./ScatterTriangulationSeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var ScatterAreaSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ScatterAreaSeriesDescription, _super);
    function ScatterAreaSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.b6 = null;
        _this.b8 = null;
        return _this;
    }
    ScatterAreaSeriesDescription.prototype.get_type = function () {
        return "ScatterAreaSeries";
    };
    Object.defineProperty(ScatterAreaSeriesDescription.prototype, "colorScale", {
        get: function () {
            return this.b6;
        },
        set: function (a) {
            this.b6 = a;
            this.e("ColorScale");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterAreaSeriesDescription.prototype, "colorMemberPath", {
        get: function () {
            return this.b8;
        },
        set: function (a) {
            this.b8 = a;
            this.e("ColorMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    ScatterAreaSeriesDescription.$t = markType(ScatterAreaSeriesDescription, 'ScatterAreaSeriesDescription', ScatterTriangulationSeriesDescription.$);
    return ScatterAreaSeriesDescription;
}(ScatterTriangulationSeriesDescription));
export { ScatterAreaSeriesDescription };
//# sourceMappingURL=ScatterAreaSeriesDescription.js.map