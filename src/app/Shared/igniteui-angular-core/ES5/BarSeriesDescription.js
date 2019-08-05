/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { VerticalAnchoredCategorySeriesDescription } from "./VerticalAnchoredCategorySeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var BarSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(BarSeriesDescription, _super);
    function BarSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.c4 = 0;
        _this.c5 = 0;
        return _this;
    }
    BarSeriesDescription.prototype.get_type = function () {
        return "BarSeries";
    };
    Object.defineProperty(BarSeriesDescription.prototype, "radiusX", {
        get: function () {
            return this.c4;
        },
        set: function (a) {
            this.c4 = a;
            this.e("RadiusX");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarSeriesDescription.prototype, "radiusY", {
        get: function () {
            return this.c5;
        },
        set: function (a) {
            this.c5 = a;
            this.e("RadiusY");
        },
        enumerable: true,
        configurable: true
    });
    BarSeriesDescription.$t = markType(BarSeriesDescription, 'BarSeriesDescription', VerticalAnchoredCategorySeriesDescription.$);
    return BarSeriesDescription;
}(VerticalAnchoredCategorySeriesDescription));
export { BarSeriesDescription };
//# sourceMappingURL=BarSeriesDescription.js.map