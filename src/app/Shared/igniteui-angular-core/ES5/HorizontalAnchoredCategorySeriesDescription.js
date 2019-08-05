/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { AnchoredCategorySeriesDescription } from "./AnchoredCategorySeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var HorizontalAnchoredCategorySeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(HorizontalAnchoredCategorySeriesDescription, _super);
    function HorizontalAnchoredCategorySeriesDescription() {
        var _this = _super.call(this) || this;
        _this.c0 = null;
        _this.c1 = null;
        return _this;
    }
    HorizontalAnchoredCategorySeriesDescription.prototype.get_type = function () {
        return "HorizontalAnchoredCategorySeries";
    };
    Object.defineProperty(HorizontalAnchoredCategorySeriesDescription.prototype, "xAxisRef", {
        get: function () {
            return this.c0;
        },
        set: function (a) {
            this.c0 = a;
            this.e("XAxisRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalAnchoredCategorySeriesDescription.prototype, "yAxisRef", {
        get: function () {
            return this.c1;
        },
        set: function (a) {
            this.c1 = a;
            this.e("YAxisRef");
        },
        enumerable: true,
        configurable: true
    });
    HorizontalAnchoredCategorySeriesDescription.$t = markType(HorizontalAnchoredCategorySeriesDescription, 'HorizontalAnchoredCategorySeriesDescription', AnchoredCategorySeriesDescription.$);
    return HorizontalAnchoredCategorySeriesDescription;
}(AnchoredCategorySeriesDescription));
export { HorizontalAnchoredCategorySeriesDescription };
//# sourceMappingURL=HorizontalAnchoredCategorySeriesDescription.js.map