/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { AxisDescription } from "./AxisDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var CategoryAxisBaseDescription = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryAxisBaseDescription, _super);
    function CategoryAxisBaseDescription() {
        var _this = _super.call(this) || this;
        _this.c6 = 0;
        _this.c2 = 0;
        _this.c3 = 0;
        _this.c0 = false;
        _this.c8 = null;
        return _this;
    }
    CategoryAxisBaseDescription.prototype.get_type = function () {
        return "CategoryAxisBase";
    };
    Object.defineProperty(CategoryAxisBaseDescription.prototype, "itemsCount", {
        get: function () {
            return this.c6;
        },
        set: function (a) {
            this.c6 = a;
            this.e("ItemsCount");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryAxisBaseDescription.prototype, "gap", {
        get: function () {
            return this.c2;
        },
        set: function (a) {
            this.c2 = a;
            this.e("Gap");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryAxisBaseDescription.prototype, "overlap", {
        get: function () {
            return this.c3;
        },
        set: function (a) {
            this.c3 = a;
            this.e("Overlap");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryAxisBaseDescription.prototype, "useClusteringMode", {
        get: function () {
            return this.c0;
        },
        set: function (a) {
            this.c0 = a;
            this.e("UseClusteringMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryAxisBaseDescription.prototype, "dataSourceRef", {
        get: function () {
            return this.c8;
        },
        set: function (a) {
            this.c8 = a;
            this.e("DataSourceRef");
        },
        enumerable: true,
        configurable: true
    });
    CategoryAxisBaseDescription.$t = markType(CategoryAxisBaseDescription, 'CategoryAxisBaseDescription', AxisDescription.$);
    return CategoryAxisBaseDescription;
}(AxisDescription));
export { CategoryAxisBaseDescription };
//# sourceMappingURL=CategoryAxisBaseDescription.js.map