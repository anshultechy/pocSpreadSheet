/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
var AssigningCategoryStyleEventArgsBaseDescription = /** @class */ (function (_super) {
    tslib_1.__extends(AssigningCategoryStyleEventArgsBaseDescription, _super);
    function AssigningCategoryStyleEventArgsBaseDescription() {
        var _this = _super.call(this) || this;
        _this.aa = 0;
        _this.z = 0;
        _this.q = new Date();
        _this.p = new Date();
        _this.ae = null;
        _this.ad = null;
        _this.af = null;
        _this.u = 0;
        _this.f = null;
        _this.t = 0;
        _this.v = 0;
        _this.i = false;
        _this.h = false;
        _this.j = false;
        _this.k = false;
        return _this;
    }
    AssigningCategoryStyleEventArgsBaseDescription.prototype.get_type = function () {
        return "AssigningCategoryStyleEventArgsBase";
    };
    Object.defineProperty(AssigningCategoryStyleEventArgsBaseDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssigningCategoryStyleEventArgsBaseDescription.prototype, "startIndex", {
        get: function () {
            return this.aa;
        },
        set: function (a) {
            this.aa = a;
            this.e("StartIndex");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssigningCategoryStyleEventArgsBaseDescription.prototype, "endIndex", {
        get: function () {
            return this.z;
        },
        set: function (a) {
            this.z = a;
            this.e("EndIndex");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssigningCategoryStyleEventArgsBaseDescription.prototype, "startDate", {
        get: function () {
            return this.q;
        },
        set: function (a) {
            this.q = a;
            this.e("StartDate");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssigningCategoryStyleEventArgsBaseDescription.prototype, "endDate", {
        get: function () {
            return this.p;
        },
        set: function (a) {
            this.p = a;
            this.e("EndDate");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssigningCategoryStyleEventArgsBaseDescription.prototype, "getItemsRef", {
        get: function () {
            return this.ae;
        },
        set: function (a) {
            this.ae = a;
            this.e("GetItemsRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssigningCategoryStyleEventArgsBaseDescription.prototype, "fill", {
        get: function () {
            return this.ad;
        },
        set: function (a) {
            this.ad = a;
            this.e("Fill");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssigningCategoryStyleEventArgsBaseDescription.prototype, "stroke", {
        get: function () {
            return this.af;
        },
        set: function (a) {
            this.af = a;
            this.e("Stroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssigningCategoryStyleEventArgsBaseDescription.prototype, "opacity", {
        get: function () {
            return this.u;
        },
        set: function (a) {
            this.u = a;
            this.e("Opacity");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssigningCategoryStyleEventArgsBaseDescription.prototype, "highlightingInfo", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("HighlightingInfo");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssigningCategoryStyleEventArgsBaseDescription.prototype, "maxAllSeriesHighlightingProgress", {
        get: function () {
            return this.t;
        },
        set: function (a) {
            this.t = a;
            this.e("MaxAllSeriesHighlightingProgress");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssigningCategoryStyleEventArgsBaseDescription.prototype, "sumAllSeriesHighlightingProgress", {
        get: function () {
            return this.v;
        },
        set: function (a) {
            this.v = a;
            this.e("SumAllSeriesHighlightingProgress");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssigningCategoryStyleEventArgsBaseDescription.prototype, "highlightingHandled", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("HighlightingHandled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssigningCategoryStyleEventArgsBaseDescription.prototype, "hasDateRange", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("HasDateRange");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssigningCategoryStyleEventArgsBaseDescription.prototype, "isNegativeShape", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("IsNegativeShape");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssigningCategoryStyleEventArgsBaseDescription.prototype, "isThumbnail", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.e("IsThumbnail");
        },
        enumerable: true,
        configurable: true
    });
    AssigningCategoryStyleEventArgsBaseDescription.$t = markType(AssigningCategoryStyleEventArgsBaseDescription, 'AssigningCategoryStyleEventArgsBaseDescription', Description.$);
    return AssigningCategoryStyleEventArgsBaseDescription;
}(Description));
export { AssigningCategoryStyleEventArgsBaseDescription };
//# sourceMappingURL=AssigningCategoryStyleEventArgsBaseDescription.js.map