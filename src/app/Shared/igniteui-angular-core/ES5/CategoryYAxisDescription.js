/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { CategoryAxisBaseDescription } from "./CategoryAxisBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var CategoryYAxisDescription = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryYAxisDescription, _super);
    function CategoryYAxisDescription() {
        var _this = _super.call(this) || this;
        _this.dc = 0;
        _this.da = 0;
        _this.dd = 0;
        _this.db = 0;
        return _this;
    }
    CategoryYAxisDescription.prototype.get_type = function () {
        return "CategoryYAxis";
    };
    Object.defineProperty(CategoryYAxisDescription.prototype, "interval", {
        get: function () {
            return this.dc;
        },
        set: function (a) {
            this.dc = a;
            this.e("Interval");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryYAxisDescription.prototype, "actualInterval", {
        get: function () {
            return this.da;
        },
        set: function (a) {
            this.da = a;
            this.e("ActualInterval");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryYAxisDescription.prototype, "minorInterval", {
        get: function () {
            return this.dd;
        },
        set: function (a) {
            this.dd = a;
            this.e("MinorInterval");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryYAxisDescription.prototype, "actualMinorInterval", {
        get: function () {
            return this.db;
        },
        set: function (a) {
            this.db = a;
            this.e("ActualMinorInterval");
        },
        enumerable: true,
        configurable: true
    });
    CategoryYAxisDescription.$t = markType(CategoryYAxisDescription, 'CategoryYAxisDescription', CategoryAxisBaseDescription.$);
    return CategoryYAxisDescription;
}(CategoryAxisBaseDescription));
export { CategoryYAxisDescription };
//# sourceMappingURL=CategoryYAxisDescription.js.map