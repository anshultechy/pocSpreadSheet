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
var RingSeriesBaseDescription = /** @class */ (function (_super) {
    tslib_1.__extends(RingSeriesBaseDescription, _super);
    function RingSeriesBaseDescription() {
        var _this = _super.call(this) || this;
        _this.a4 = null;
        _this.aj = null;
        _this.aw = null;
        _this.ak = null;
        _this.l = 0;
        _this.am = null;
        _this.al = null;
        _this.a5 = null;
        _this.ap = null;
        _this.av = null;
        _this.aq = null;
        _this.au = null;
        _this.ar = null;
        _this.as = null;
        _this.p = 0;
        _this.o = 0;
        _this.at = null;
        _this.n = 0;
        _this.s = 0;
        _this.a0 = null;
        _this.az = null;
        _this.an = null;
        _this.ao = null;
        _this.m = 0;
        _this.w = 0;
        _this.ax = null;
        _this.ay = null;
        _this.r = 0;
        _this.q = 0;
        _this.a2 = null;
        _this.a3 = null;
        _this.v = 0;
        _this.u = 0;
        _this.f = null;
        _this.g = null;
        _this.j = false;
        _this.t = 0;
        _this.a1 = null;
        return _this;
    }
    Object.defineProperty(RingSeriesBaseDescription.prototype, "tooltipTemplateRef", {
        get: function () {
            return this.a4;
        },
        set: function (a) {
            this.a4 = a;
            this.e("TooltipTemplateRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "dataSourceRef", {
        get: function () {
            return this.aj;
        },
        set: function (a) {
            this.aj = a;
            this.e("DataSourceRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "legendRef", {
        get: function () {
            return this.aw;
        },
        set: function (a) {
            this.aw = a;
            this.e("LegendRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "fontFamily", {
        get: function () {
            return this.ak;
        },
        set: function (a) {
            this.ak = a;
            this.e("FontFamily");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "fontSize", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("FontSize");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "fontWeight", {
        get: function () {
            return this.am;
        },
        set: function (a) {
            this.am = a;
            this.e("FontWeight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "fontStyle", {
        get: function () {
            return this.al;
        },
        set: function (a) {
            this.al = a;
            this.e("FontStyle");
        },
        enumerable: true,
        configurable: true
    });
    RingSeriesBaseDescription.prototype.get_type = function () {
        return "RingSeriesBase";
    };
    Object.defineProperty(RingSeriesBaseDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "valueMemberPath", {
        get: function () {
            return this.a5;
        },
        set: function (a) {
            this.a5 = a;
            this.e("ValueMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "labelMemberPath", {
        get: function () {
            return this.ap;
        },
        set: function (a) {
            this.ap = a;
            this.e("LabelMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "legendLabelMemberPath", {
        get: function () {
            return this.av;
        },
        set: function (a) {
            this.av = a;
            this.e("LegendLabelMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "labelsPosition", {
        get: function () {
            return this.aq;
        },
        set: function (a) {
            this.aq = a;
            this.e("LabelsPosition");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "leaderLineVisibility", {
        get: function () {
            return this.au;
        },
        set: function (a) {
            this.au = a;
            this.e("LeaderLineVisibility");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "leaderLineFill", {
        get: function () {
            return this.ar;
        },
        set: function (a) {
            this.ar = a;
            this.e("LeaderLineFill");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "leaderLineStroke", {
        get: function () {
            return this.as;
        },
        set: function (a) {
            this.as = a;
            this.e("LeaderLineStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "leaderLineStrokeThickness", {
        get: function () {
            return this.p;
        },
        set: function (a) {
            this.p = a;
            this.e("LeaderLineStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "leaderLineOpacity", {
        get: function () {
            return this.o;
        },
        set: function (a) {
            this.o = a;
            this.e("LeaderLineOpacity");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "leaderLineType", {
        get: function () {
            return this.at;
        },
        set: function (a) {
            this.at = a;
            this.e("LeaderLineType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "leaderLineMargin", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            this.n = a;
            this.e("LeaderLineMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "othersCategoryThreshold", {
        get: function () {
            return this.s;
        },
        set: function (a) {
            this.s = a;
            this.e("OthersCategoryThreshold");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "othersCategoryType", {
        get: function () {
            return this.a0;
        },
        set: function (a) {
            this.a0 = a;
            this.e("OthersCategoryType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "othersCategoryText", {
        get: function () {
            return this.az;
        },
        set: function (a) {
            this.az = a;
            this.e("OthersCategoryText");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "formatLabelRef", {
        get: function () {
            return this.an;
        },
        set: function (a) {
            this.an = a;
            this.e("FormatLabelRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "formatLegendLabelRef", {
        get: function () {
            return this.ao;
        },
        set: function (a) {
            this.ao = a;
            this.e("FormatLegendLabelRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "labelExtent", {
        get: function () {
            return this.m;
        },
        set: function (a) {
            this.m = a;
            this.e("LabelExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "startAngle", {
        get: function () {
            return this.w;
        },
        set: function (a) {
            this.w = a;
            this.e("StartAngle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "othersCategoryFill", {
        get: function () {
            return this.ax;
        },
        set: function (a) {
            this.ax = a;
            this.e("OthersCategoryFill");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "othersCategoryStroke", {
        get: function () {
            return this.ay;
        },
        set: function (a) {
            this.ay = a;
            this.e("OthersCategoryStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "othersCategoryStrokeThickness", {
        get: function () {
            return this.r;
        },
        set: function (a) {
            this.r = a;
            this.e("OthersCategoryStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "othersCategoryOpacity", {
        get: function () {
            return this.q;
        },
        set: function (a) {
            this.q = a;
            this.e("OthersCategoryOpacity");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "selectedSliceFill", {
        get: function () {
            return this.a2;
        },
        set: function (a) {
            this.a2 = a;
            this.e("SelectedSliceFill");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "selectedSliceStroke", {
        get: function () {
            return this.a3;
        },
        set: function (a) {
            this.a3 = a;
            this.e("SelectedSliceStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "selectedSliceStrokeThickness", {
        get: function () {
            return this.v;
        },
        set: function (a) {
            this.v = a;
            this.e("SelectedSliceStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "selectedSliceOpacity", {
        get: function () {
            return this.u;
        },
        set: function (a) {
            this.u = a;
            this.e("SelectedSliceOpacity");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "brushes", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("Brushes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "outlines", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("Outlines");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "isSurfaceInteractionDisabled", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("IsSurfaceInteractionDisabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "radiusFactor", {
        get: function () {
            return this.t;
        },
        set: function (a) {
            this.t = a;
            this.e("RadiusFactor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingSeriesBaseDescription.prototype, "PropertyUpdatedRef", {
        get: function () {
            return this.a1;
        },
        set: function (a) {
            this.a1 = a;
            this.e("PropertyUpdatedRef");
        },
        enumerable: true,
        configurable: true
    });
    RingSeriesBaseDescription.$t = markType(RingSeriesBaseDescription, 'RingSeriesBaseDescription', Description.$);
    return RingSeriesBaseDescription;
}(Description));
export { RingSeriesBaseDescription };
//# sourceMappingURL=RingSeriesBaseDescription.js.map