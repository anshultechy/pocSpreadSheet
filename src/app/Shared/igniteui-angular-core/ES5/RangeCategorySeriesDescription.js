/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { CategorySeriesDescription } from "./CategorySeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var RangeCategorySeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(RangeCategorySeriesDescription, _super);
    function RangeCategorySeriesDescription() {
        var _this = _super.call(this) || this;
        _this.cl = null;
        _this.ck = null;
        return _this;
    }
    RangeCategorySeriesDescription.prototype.get_type = function () {
        return "RangeCategorySeries";
    };
    Object.defineProperty(RangeCategorySeriesDescription.prototype, "lowMemberPath", {
        get: function () {
            return this.cl;
        },
        set: function (a) {
            this.cl = a;
            this.e("LowMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeCategorySeriesDescription.prototype, "highMemberPath", {
        get: function () {
            return this.ck;
        },
        set: function (a) {
            this.ck = a;
            this.e("HighMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    RangeCategorySeriesDescription.$t = markType(RangeCategorySeriesDescription, 'RangeCategorySeriesDescription', CategorySeriesDescription.$);
    return RangeCategorySeriesDescription;
}(CategorySeriesDescription));
export { RangeCategorySeriesDescription };
//# sourceMappingURL=RangeCategorySeriesDescription.js.map