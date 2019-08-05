/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { MarkerSeriesDescription } from "./MarkerSeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var CategorySeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(CategorySeriesDescription, _super);
    function CategorySeriesDescription() {
        var _this = _super.call(this) || this;
        _this.b7 = false;
        _this.b6 = false;
        _this.b9 = false;
        _this.cg = null;
        _this.b8 = false;
        _this.cf = null;
        _this.ce = null;
        return _this;
    }
    CategorySeriesDescription.prototype.get_type = function () {
        return "CategorySeries";
    };
    Object.defineProperty(CategorySeriesDescription.prototype, "isCustomCategoryStyleAllowed", {
        get: function () {
            return this.b7;
        },
        set: function (a) {
            this.b7 = a;
            this.e("IsCustomCategoryStyleAllowed");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategorySeriesDescription.prototype, "isCustomCategoryMarkerStyleAllowed", {
        get: function () {
            return this.b6;
        },
        set: function (a) {
            this.b6 = a;
            this.e("IsCustomCategoryMarkerStyleAllowed");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategorySeriesDescription.prototype, "useHighMarkerFidelity", {
        get: function () {
            return this.b9;
        },
        set: function (a) {
            this.b9 = a;
            this.e("UseHighMarkerFidelity");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategorySeriesDescription.prototype, "transitionInMode", {
        get: function () {
            return this.cg;
        },
        set: function (a) {
            this.cg = a;
            this.e("TransitionInMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategorySeriesDescription.prototype, "isTransitionInEnabled", {
        get: function () {
            return this.b8;
        },
        set: function (a) {
            this.b8 = a;
            this.e("IsTransitionInEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategorySeriesDescription.prototype, "AssigningCategoryStyleRef", {
        get: function () {
            return this.cf;
        },
        set: function (a) {
            this.cf = a;
            this.e("AssigningCategoryStyleRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategorySeriesDescription.prototype, "AssigningCategoryMarkerStyleRef", {
        get: function () {
            return this.ce;
        },
        set: function (a) {
            this.ce = a;
            this.e("AssigningCategoryMarkerStyleRef");
        },
        enumerable: true,
        configurable: true
    });
    CategorySeriesDescription.$t = markType(CategorySeriesDescription, 'CategorySeriesDescription', MarkerSeriesDescription.$);
    return CategorySeriesDescription;
}(MarkerSeriesDescription));
export { CategorySeriesDescription };
//# sourceMappingURL=CategorySeriesDescription.js.map