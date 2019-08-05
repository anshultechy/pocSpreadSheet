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
var AnchoredCategorySeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(AnchoredCategorySeriesDescription, _super);
    function AnchoredCategorySeriesDescription() {
        var _this = _super.call(this) || this;
        _this.ct = null;
        _this.cs = null;
        _this.cr = null;
        _this.co = null;
        _this.ck = 0;
        _this.cm = 0;
        _this.cq = null;
        _this.cp = null;
        return _this;
    }
    AnchoredCategorySeriesDescription.prototype.get_type = function () {
        return "AnchoredCategorySeries";
    };
    Object.defineProperty(AnchoredCategorySeriesDescription.prototype, "valueMemberPath", {
        get: function () {
            return this.ct;
        },
        set: function (a) {
            this.ct = a;
            this.e("ValueMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnchoredCategorySeriesDescription.prototype, "trendLineType", {
        get: function () {
            return this.cs;
        },
        set: function (a) {
            this.cs = a;
            this.e("TrendLineType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnchoredCategorySeriesDescription.prototype, "trendLineBrush", {
        get: function () {
            return this.cr;
        },
        set: function (a) {
            this.cr = a;
            this.e("TrendLineBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnchoredCategorySeriesDescription.prototype, "actualTrendLineBrush", {
        get: function () {
            return this.co;
        },
        set: function (a) {
            this.co = a;
            this.e("ActualTrendLineBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnchoredCategorySeriesDescription.prototype, "trendLineThickness", {
        get: function () {
            return this.ck;
        },
        set: function (a) {
            this.ck = a;
            this.e("TrendLineThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnchoredCategorySeriesDescription.prototype, "trendLinePeriod", {
        get: function () {
            return this.cm;
        },
        set: function (a) {
            this.cm = a;
            this.e("TrendLinePeriod");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnchoredCategorySeriesDescription.prototype, "markerCollisionAvoidance", {
        get: function () {
            return this.cq;
        },
        set: function (a) {
            this.cq = a;
            this.e("MarkerCollisionAvoidance");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnchoredCategorySeriesDescription.prototype, "consolidatedItemHitTestBehavior", {
        get: function () {
            return this.cp;
        },
        set: function (a) {
            this.cp = a;
            this.e("ConsolidatedItemHitTestBehavior");
        },
        enumerable: true,
        configurable: true
    });
    AnchoredCategorySeriesDescription.$t = markType(AnchoredCategorySeriesDescription, 'AnchoredCategorySeriesDescription', CategorySeriesDescription.$);
    return AnchoredCategorySeriesDescription;
}(CategorySeriesDescription));
export { AnchoredCategorySeriesDescription };
//# sourceMappingURL=AnchoredCategorySeriesDescription.js.map