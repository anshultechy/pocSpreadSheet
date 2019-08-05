/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { RangeCategorySeriesDescription } from "./RangeCategorySeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var HorizontalRangeCategorySeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(HorizontalRangeCategorySeriesDescription, _super);
    function HorizontalRangeCategorySeriesDescription() {
        var _this = _super.call(this) || this;
        _this.co = null;
        _this.cp = null;
        return _this;
    }
    HorizontalRangeCategorySeriesDescription.prototype.get_type = function () {
        return "HorizontalRangeCategorySeries";
    };
    Object.defineProperty(HorizontalRangeCategorySeriesDescription.prototype, "xAxisRef", {
        get: function () {
            return this.co;
        },
        set: function (a) {
            this.co = a;
            this.e("XAxisRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalRangeCategorySeriesDescription.prototype, "yAxisRef", {
        get: function () {
            return this.cp;
        },
        set: function (a) {
            this.cp = a;
            this.e("YAxisRef");
        },
        enumerable: true,
        configurable: true
    });
    HorizontalRangeCategorySeriesDescription.$t = markType(HorizontalRangeCategorySeriesDescription, 'HorizontalRangeCategorySeriesDescription', RangeCategorySeriesDescription.$);
    return HorizontalRangeCategorySeriesDescription;
}(RangeCategorySeriesDescription));
export { HorizontalRangeCategorySeriesDescription };
//# sourceMappingURL=HorizontalRangeCategorySeriesDescription.js.map