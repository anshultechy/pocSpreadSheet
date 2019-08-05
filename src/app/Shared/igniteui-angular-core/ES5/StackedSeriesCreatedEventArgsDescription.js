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
var StackedSeriesCreatedEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(StackedSeriesCreatedEventArgsDescription, _super);
    function StackedSeriesCreatedEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.j = null;
        _this.l = null;
        _this.k = null;
        _this.m = null;
        _this.r = null;
        _this.h = 0;
        _this.s = null;
        _this.n = null;
        _this.o = null;
        _this.f = null;
        _this.p = null;
        _this.q = null;
        return _this;
    }
    StackedSeriesCreatedEventArgsDescription.prototype.get_type = function () {
        return "StackedSeriesCreatedEventArgs";
    };
    Object.defineProperty(StackedSeriesCreatedEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedSeriesCreatedEventArgsDescription.prototype, "brush", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("Brush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedSeriesCreatedEventArgsDescription.prototype, "legendItemTemplateRef", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("LegendItemTemplateRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedSeriesCreatedEventArgsDescription.prototype, "legendItemBadgeTemplateRef", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.e("LegendItemBadgeTemplateRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedSeriesCreatedEventArgsDescription.prototype, "legendItemVisibility", {
        get: function () {
            return this.m;
        },
        set: function (a) {
            this.m = a;
            this.e("LegendItemVisibility");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedSeriesCreatedEventArgsDescription.prototype, "outline", {
        get: function () {
            return this.r;
        },
        set: function (a) {
            this.r = a;
            this.e("Outline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedSeriesCreatedEventArgsDescription.prototype, "thickness", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("Thickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedSeriesCreatedEventArgsDescription.prototype, "titleRef", {
        get: function () {
            return this.s;
        },
        set: function (a) {
            this.s = a;
            this.e("TitleRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedSeriesCreatedEventArgsDescription.prototype, "markerBrush", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            this.n = a;
            this.e("MarkerBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedSeriesCreatedEventArgsDescription.prototype, "markerOutline", {
        get: function () {
            return this.o;
        },
        set: function (a) {
            this.o = a;
            this.e("MarkerOutline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedSeriesCreatedEventArgsDescription.prototype, "markerStyle", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("MarkerStyle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedSeriesCreatedEventArgsDescription.prototype, "markerTemplateRef", {
        get: function () {
            return this.p;
        },
        set: function (a) {
            this.p = a;
            this.e("MarkerTemplateRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackedSeriesCreatedEventArgsDescription.prototype, "markerType", {
        get: function () {
            return this.q;
        },
        set: function (a) {
            this.q = a;
            this.e("MarkerType");
        },
        enumerable: true,
        configurable: true
    });
    StackedSeriesCreatedEventArgsDescription.$t = markType(StackedSeriesCreatedEventArgsDescription, 'StackedSeriesCreatedEventArgsDescription', Description.$);
    return StackedSeriesCreatedEventArgsDescription;
}(Description));
export { StackedSeriesCreatedEventArgsDescription };
//# sourceMappingURL=StackedSeriesCreatedEventArgsDescription.js.map