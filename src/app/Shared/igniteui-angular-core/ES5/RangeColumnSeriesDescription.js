/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { HorizontalRangeCategorySeriesDescription } from "./HorizontalRangeCategorySeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var RangeColumnSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(RangeColumnSeriesDescription, _super);
    function RangeColumnSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.cs = 0;
        _this.ct = 0;
        return _this;
    }
    RangeColumnSeriesDescription.prototype.get_type = function () {
        return "RangeColumnSeries";
    };
    Object.defineProperty(RangeColumnSeriesDescription.prototype, "radiusX", {
        get: function () {
            return this.cs;
        },
        set: function (a) {
            this.cs = a;
            this.e("RadiusX");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeColumnSeriesDescription.prototype, "radiusY", {
        get: function () {
            return this.ct;
        },
        set: function (a) {
            this.ct = a;
            this.e("RadiusY");
        },
        enumerable: true,
        configurable: true
    });
    RangeColumnSeriesDescription.$t = markType(RangeColumnSeriesDescription, 'RangeColumnSeriesDescription', HorizontalRangeCategorySeriesDescription.$);
    return RangeColumnSeriesDescription;
}(HorizontalRangeCategorySeriesDescription));
export { RangeColumnSeriesDescription };
//# sourceMappingURL=RangeColumnSeriesDescription.js.map