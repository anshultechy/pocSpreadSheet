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
var ScatterContourSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ScatterContourSeriesDescription, _super);
    function ScatterContourSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.ca = null;
        _this.b8 = null;
        _this.b6 = null;
        return _this;
    }
    ScatterContourSeriesDescription.prototype.get_type = function () {
        return "ScatterContourSeries";
    };
    Object.defineProperty(ScatterContourSeriesDescription.prototype, "valueMemberPath", {
        get: function () {
            return this.ca;
        },
        set: function (a) {
            this.ca = a;
            this.e("ValueMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterContourSeriesDescription.prototype, "fillScale", {
        get: function () {
            return this.b8;
        },
        set: function (a) {
            this.b8 = a;
            this.e("FillScale");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScatterContourSeriesDescription.prototype, "valueResolver", {
        get: function () {
            return this.b6;
        },
        set: function (a) {
            this.b6 = a;
            this.e("ValueResolver");
        },
        enumerable: true,
        configurable: true
    });
    ScatterContourSeriesDescription.$t = markType(ScatterContourSeriesDescription, 'ScatterContourSeriesDescription', ScatterTriangulationSeriesDescription.$);
    return ScatterContourSeriesDescription;
}(ScatterTriangulationSeriesDescription));
export { ScatterContourSeriesDescription };
//# sourceMappingURL=ScatterContourSeriesDescription.js.map