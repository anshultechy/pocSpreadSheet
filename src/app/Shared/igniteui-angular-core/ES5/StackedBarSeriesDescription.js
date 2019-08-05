/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { VerticalStackedSeriesBaseDescription } from "./VerticalStackedSeriesBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var StackedBarSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(StackedBarSeriesDescription, _super);
    function StackedBarSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.cw = 0;
        _this.cx = 0;
        return _this;
    }
    StackedBarSeriesDescription.prototype.get_type = function () {
        return "StackedBarSeries";
    };
    Object.defineProperty(StackedBarSeriesDescription.prototype, "radiusX", {
        get: function () {
            return this.cw;
        },
        set: function (a) {
            this.cw = a;
            this.e("RadiusX");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedBarSeriesDescription.prototype, "radiusY", {
        get: function () {
            return this.cx;
        },
        set: function (a) {
            this.cx = a;
            this.e("RadiusY");
        },
        enumerable: true,
        configurable: true
    });
    StackedBarSeriesDescription.$t = markType(StackedBarSeriesDescription, 'StackedBarSeriesDescription', VerticalStackedSeriesBaseDescription.$);
    return StackedBarSeriesDescription;
}(VerticalStackedSeriesBaseDescription));
export { StackedBarSeriesDescription };
//# sourceMappingURL=StackedBarSeriesDescription.js.map