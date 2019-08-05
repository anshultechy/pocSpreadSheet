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
var VerticalAnchoredCategorySeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(VerticalAnchoredCategorySeriesDescription, _super);
    function VerticalAnchoredCategorySeriesDescription() {
        var _this = _super.call(this) || this;
        _this.c0 = null;
        _this.c1 = null;
        return _this;
    }
    VerticalAnchoredCategorySeriesDescription.prototype.get_type = function () {
        return "VerticalAnchoredCategorySeries";
    };
    Object.defineProperty(VerticalAnchoredCategorySeriesDescription.prototype, "xAxisRef", {
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
    Object.defineProperty(VerticalAnchoredCategorySeriesDescription.prototype, "yAxisRef", {
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
    VerticalAnchoredCategorySeriesDescription.$t = markType(VerticalAnchoredCategorySeriesDescription, 'VerticalAnchoredCategorySeriesDescription', AnchoredCategorySeriesDescription.$);
    return VerticalAnchoredCategorySeriesDescription;
}(AnchoredCategorySeriesDescription));
export { VerticalAnchoredCategorySeriesDescription };
//# sourceMappingURL=VerticalAnchoredCategorySeriesDescription.js.map