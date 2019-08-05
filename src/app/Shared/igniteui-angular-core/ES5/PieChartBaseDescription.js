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
var PieChartBaseDescription = /** @class */ (function (_super) {
    tslib_1.__extends(PieChartBaseDescription, _super);
    function PieChartBaseDescription() {
        var _this = _super.call(this) || this;
        _this.bq = null;
        _this.av = null;
        _this.aw = null;
        _this.v = 0;
        _this.ay = null;
        _this.ax = null;
        _this.w = 0;
        _this.br = null;
        _this.a3 = null;
        _this.ba = null;
        _this.a5 = null;
        _this.a4 = null;
        _this.a2 = null;
        _this.a7 = null;
        _this.a6 = null;
        _this.y = 0;
        _this.ab = 0;
        _this.be = null;
        _this.bd = null;
        _this.u = 0;
        _this.ad = 0;
        _this.o = false;
        _this.n = false;
        _this.g = null;
        _this.x = 0;
        _this.ag = 0;
        _this.bo = null;
        _this.bb = null;
        _this.bc = null;
        _this.aa = 0;
        _this.z = 0;
        _this.bk = null;
        _this.bl = null;
        _this.af = 0;
        _this.ae = 0;
        _this.f = null;
        _this.h = null;
        _this.a9 = null;
        _this.a8 = null;
        _this.p = false;
        _this.az = null;
        _this.a0 = null;
        _this.ac = 0;
        _this.t = 0;
        _this.bm = null;
        _this.bh = null;
        _this.i = null;
        _this.bp = null;
        _this.a1 = null;
        _this.bg = null;
        _this.bj = null;
        _this.bf = null;
        _this.bi = null;
        _this.bn = null;
        return _this;
    }
    Object.defineProperty(PieChartBaseDescription.prototype, "tooltipTemplateRef", {
        get: function () {
            return this.bq;
        },
        set: function (a) {
            this.bq = a;
            this.e("TooltipTemplateRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "dataSourceRef", {
        get: function () {
            return this.av;
        },
        set: function (a) {
            this.av = a;
            this.e("DataSourceRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "fontFamily", {
        get: function () {
            return this.aw;
        },
        set: function (a) {
            this.aw = a;
            this.e("FontFamily");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "fontSize", {
        get: function () {
            return this.v;
        },
        set: function (a) {
            this.v = a;
            this.e("FontSize");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "fontWeight", {
        get: function () {
            return this.ay;
        },
        set: function (a) {
            this.ay = a;
            this.e("FontWeight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "fontStyle", {
        get: function () {
            return this.ax;
        },
        set: function (a) {
            this.ax = a;
            this.e("FontStyle");
        },
        enumerable: true,
        configurable: true
    });
    PieChartBaseDescription.prototype.get_type = function () {
        return "PieChartBase";
    };
    Object.defineProperty(PieChartBaseDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "innerExtent", {
        get: function () {
            return this.w;
        },
        set: function (a) {
            this.w = a;
            this.e("InnerExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "valueMemberPath", {
        get: function () {
            return this.br;
        },
        set: function (a) {
            this.br = a;
            this.e("ValueMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "labelMemberPath", {
        get: function () {
            return this.a3;
        },
        set: function (a) {
            this.a3 = a;
            this.e("LabelMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "legendLabelMemberPath", {
        get: function () {
            return this.ba;
        },
        set: function (a) {
            this.ba = a;
            this.e("LegendLabelMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "labelsPosition", {
        get: function () {
            return this.a5;
        },
        set: function (a) {
            this.a5 = a;
            this.e("LabelsPosition");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "labelOuterColor", {
        get: function () {
            return this.a4;
        },
        set: function (a) {
            this.a4 = a;
            this.e("LabelOuterColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "labelInnerColor", {
        get: function () {
            return this.a2;
        },
        set: function (a) {
            this.a2 = a;
            this.e("LabelInnerColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "leaderLineVisibility", {
        get: function () {
            return this.a7;
        },
        set: function (a) {
            this.a7 = a;
            this.e("LeaderLineVisibility");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "leaderLineType", {
        get: function () {
            return this.a6;
        },
        set: function (a) {
            this.a6 = a;
            this.e("LeaderLineType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "leaderLineMargin", {
        get: function () {
            return this.y;
        },
        set: function (a) {
            this.y = a;
            this.e("LeaderLineMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "othersCategoryThreshold", {
        get: function () {
            return this.ab;
        },
        set: function (a) {
            this.ab = a;
            this.e("OthersCategoryThreshold");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "othersCategoryType", {
        get: function () {
            return this.be;
        },
        set: function (a) {
            this.be = a;
            this.e("OthersCategoryType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "othersCategoryText", {
        get: function () {
            return this.bd;
        },
        set: function (a) {
            this.bd = a;
            this.e("OthersCategoryText");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "explodedRadius", {
        get: function () {
            return this.u;
        },
        set: function (a) {
            this.u = a;
            this.e("ExplodedRadius");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "radiusFactor", {
        get: function () {
            return this.ad;
        },
        set: function (a) {
            this.ad = a;
            this.e("RadiusFactor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "allowSliceSelection", {
        get: function () {
            return this.o;
        },
        set: function (a) {
            this.o = a;
            this.e("AllowSliceSelection");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "allowSliceExplosion", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            this.n = a;
            this.e("AllowSliceExplosion");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "explodedSlices", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("ExplodedSlices");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "labelExtent", {
        get: function () {
            return this.x;
        },
        set: function (a) {
            this.x = a;
            this.e("LabelExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "startAngle", {
        get: function () {
            return this.ag;
        },
        set: function (a) {
            this.ag = a;
            this.e("StartAngle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "sweepDirection", {
        get: function () {
            return this.bo;
        },
        set: function (a) {
            this.bo = a;
            this.e("SweepDirection");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "othersCategoryFill", {
        get: function () {
            return this.bb;
        },
        set: function (a) {
            this.bb = a;
            this.e("OthersCategoryFill");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "othersCategoryStroke", {
        get: function () {
            return this.bc;
        },
        set: function (a) {
            this.bc = a;
            this.e("OthersCategoryStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "othersCategoryStrokeThickness", {
        get: function () {
            return this.aa;
        },
        set: function (a) {
            this.aa = a;
            this.e("OthersCategoryStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "othersCategoryOpacity", {
        get: function () {
            return this.z;
        },
        set: function (a) {
            this.z = a;
            this.e("OthersCategoryOpacity");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "selectedSliceFill", {
        get: function () {
            return this.bk;
        },
        set: function (a) {
            this.bk = a;
            this.e("SelectedSliceFill");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "selectedSliceStroke", {
        get: function () {
            return this.bl;
        },
        set: function (a) {
            this.bl = a;
            this.e("SelectedSliceStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "selectedSliceStrokeThickness", {
        get: function () {
            return this.af;
        },
        set: function (a) {
            this.af = a;
            this.e("SelectedSliceStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "selectedSliceOpacity", {
        get: function () {
            return this.ae;
        },
        set: function (a) {
            this.ae = a;
            this.e("SelectedSliceOpacity");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "brushes", {
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
    Object.defineProperty(PieChartBaseDescription.prototype, "outlines", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("Outlines");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "legendItemTemplateRef", {
        get: function () {
            return this.a9;
        },
        set: function (a) {
            this.a9 = a;
            this.e("LegendItemTemplateRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "legendItemBadgeTemplateRef", {
        get: function () {
            return this.a8;
        },
        set: function (a) {
            this.a8 = a;
            this.e("LegendItemBadgeTemplateRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "isSurfaceInteractionDisabled", {
        get: function () {
            return this.p;
        },
        set: function (a) {
            this.p = a;
            this.e("IsSurfaceInteractionDisabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "formatLabelRef", {
        get: function () {
            return this.az;
        },
        set: function (a) {
            this.az = a;
            this.e("FormatLabelRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "formatLegendLabelRef", {
        get: function () {
            return this.a0;
        },
        set: function (a) {
            this.a0 = a;
            this.e("FormatLegendLabelRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "pixelScalingRatio", {
        get: function () {
            return this.ac;
        },
        set: function (a) {
            this.ac = a;
            this.e("PixelScalingRatio");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "actualPixelScalingRatio", {
        get: function () {
            return this.t;
        },
        set: function (a) {
            this.t = a;
            this.e("ActualPixelScalingRatio");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "selectionMode", {
        get: function () {
            return this.bm;
        },
        set: function (a) {
            this.bm = a;
            this.e("SelectionMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "selectedItemRef", {
        get: function () {
            return this.bh;
        },
        set: function (a) {
            this.bh = a;
            this.e("SelectedItemRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "selectedItems", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("SelectedItems");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "textStyle", {
        get: function () {
            return this.bp;
        },
        set: function (a) {
            this.bp = a;
            this.e("TextStyle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "LabelClickRef", {
        get: function () {
            return this.a1;
        },
        set: function (a) {
            this.a1 = a;
            this.e("LabelClickRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "SelectedItemChangingRef", {
        get: function () {
            return this.bg;
        },
        set: function (a) {
            this.bg = a;
            this.e("SelectedItemChangingRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "SelectedItemsChangingRef", {
        get: function () {
            return this.bj;
        },
        set: function (a) {
            this.bj = a;
            this.e("SelectedItemsChangingRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "SelectedItemChangedRef", {
        get: function () {
            return this.bf;
        },
        set: function (a) {
            this.bf = a;
            this.e("SelectedItemChangedRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "SelectedItemsChangedRef", {
        get: function () {
            return this.bi;
        },
        set: function (a) {
            this.bi = a;
            this.e("SelectedItemsChangedRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartBaseDescription.prototype, "SliceClickRef", {
        get: function () {
            return this.bn;
        },
        set: function (a) {
            this.bn = a;
            this.e("SliceClickRef");
        },
        enumerable: true,
        configurable: true
    });
    PieChartBaseDescription.$t = markType(PieChartBaseDescription, 'PieChartBaseDescription', Description.$);
    return PieChartBaseDescription;
}(Description));
export { PieChartBaseDescription };
//# sourceMappingURL=PieChartBaseDescription.js.map