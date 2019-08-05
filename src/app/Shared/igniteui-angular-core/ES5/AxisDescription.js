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
var AxisDescription = /** @class */ (function (_super) {
    tslib_1.__extends(AxisDescription, _super);
    function AxisDescription() {
        var _this = _super.call(this) || this;
        _this.bb = null;
        _this.bs = null;
        _this.bq = null;
        _this.a7 = null;
        _this.aa = 0;
        _this.bp = null;
        _this.bl = null;
        _this.a5 = null;
        _this.y = 0;
        _this.bm = null;
        _this.a6 = null;
        _this.z = 0;
        _this.br = null;
        _this.ac = 0;
        _this.ab = 0;
        _this.g = false;
        _this.h = false;
        _this.k = false;
        _this.a3 = 0;
        _this.bi = null;
        _this.bh = null;
        _this.i = false;
        _this.r = 0;
        _this.t = 0;
        _this.v = 0;
        _this.w = 0;
        _this.x = 0;
        _this.s = 0;
        _this.bg = null;
        _this.bj = null;
        _this.a9 = null;
        _this.ba = null;
        _this.by = null;
        _this.bz = null;
        _this.bx = null;
        _this.b1 = null;
        _this.j = false;
        _this.ad = 0;
        _this.af = 0;
        _this.ah = 0;
        _this.ai = 0;
        _this.aj = 0;
        _this.ae = 0;
        _this.bw = null;
        _this.b0 = null;
        _this.a8 = null;
        _this.f = false;
        _this.bn = null;
        _this.bo = null;
        _this.bc = null;
        _this.bd = null;
        _this.u = 0;
        _this.bf = null;
        _this.be = null;
        _this.bt = null;
        _this.ag = 0;
        _this.bv = null;
        _this.bu = null;
        _this.bk = null;
        return _this;
    }
    AxisDescription.prototype.get_type = function () {
        return "Axis";
    };
    Object.defineProperty(AxisDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "formatLabelRef", {
        get: function () {
            return this.bb;
        },
        set: function (a) {
            this.bb = a;
            this.e("FormatLabelRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "title", {
        get: function () {
            return this.bs;
        },
        set: function (a) {
            this.bs = a;
            this.e("Title");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "stroke", {
        get: function () {
            return this.bq;
        },
        set: function (a) {
            this.bq = a;
            this.e("Stroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "actualStroke", {
        get: function () {
            return this.a7;
        },
        set: function (a) {
            this.a7 = a;
            this.e("ActualStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "strokeThickness", {
        get: function () {
            return this.aa;
        },
        set: function (a) {
            this.aa = a;
            this.e("StrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "strip", {
        get: function () {
            return this.bp;
        },
        set: function (a) {
            this.bp = a;
            this.e("Strip");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "majorStroke", {
        get: function () {
            return this.bl;
        },
        set: function (a) {
            this.bl = a;
            this.e("MajorStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "actualMajorStroke", {
        get: function () {
            return this.a5;
        },
        set: function (a) {
            this.a5 = a;
            this.e("ActualMajorStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "majorStrokeThickness", {
        get: function () {
            return this.y;
        },
        set: function (a) {
            this.y = a;
            this.e("MajorStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "minorStroke", {
        get: function () {
            return this.bm;
        },
        set: function (a) {
            this.bm = a;
            this.e("MinorStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "actualMinorStroke", {
        get: function () {
            return this.a6;
        },
        set: function (a) {
            this.a6 = a;
            this.e("ActualMinorStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "minorStrokeThickness", {
        get: function () {
            return this.z;
        },
        set: function (a) {
            this.z = a;
            this.e("MinorStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "tickStroke", {
        get: function () {
            return this.br;
        },
        set: function (a) {
            this.br = a;
            this.e("TickStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "tickStrokeThickness", {
        get: function () {
            return this.ac;
        },
        set: function (a) {
            this.ac = a;
            this.e("TickStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "tickLength", {
        get: function () {
            return this.ab;
        },
        set: function (a) {
            this.ab = a;
            this.e("TickLength");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "isDisabled", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("IsDisabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "isInverted", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("IsInverted");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "useEnhancedIntervalManagement", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.e("UseEnhancedIntervalManagement");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "enhancedIntervalMinimumCharacters", {
        get: function () {
            return this.a3;
        },
        set: function (a) {
            this.a3 = a;
            this.e("EnhancedIntervalMinimumCharacters");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "labelTextColor", {
        get: function () {
            return this.bi;
        },
        set: function (a) {
            this.bi = a;
            this.e("LabelTextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "labelLocation", {
        get: function () {
            return this.bh;
        },
        set: function (a) {
            this.bh = a;
            this.e("LabelLocation");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "labelShowFirstLabel", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("LabelShowFirstLabel");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "labelAngle", {
        get: function () {
            return this.r;
        },
        set: function (a) {
            this.r = a;
            this.e("LabelAngle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "labelExtent", {
        get: function () {
            return this.t;
        },
        set: function (a) {
            this.t = a;
            this.e("LabelExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "labelLeftMargin", {
        get: function () {
            return this.v;
        },
        set: function (a) {
            this.v = a;
            this.e("LabelLeftMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "labelRightMargin", {
        get: function () {
            return this.w;
        },
        set: function (a) {
            this.w = a;
            this.e("LabelRightMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "labelTopMargin", {
        get: function () {
            return this.x;
        },
        set: function (a) {
            this.x = a;
            this.e("LabelTopMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "labelBottomMargin", {
        get: function () {
            return this.s;
        },
        set: function (a) {
            this.s = a;
            this.e("LabelBottomMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "labelHorizontalAlignment", {
        get: function () {
            return this.bg;
        },
        set: function (a) {
            this.bg = a;
            this.e("LabelHorizontalAlignment");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "labelVerticalAlignment", {
        get: function () {
            return this.bj;
        },
        set: function (a) {
            this.bj = a;
            this.e("LabelVerticalAlignment");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "crossingAxisRef", {
        get: function () {
            return this.a9;
        },
        set: function (a) {
            this.a9 = a;
            this.e("CrossingAxisRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "crossingValueRef", {
        get: function () {
            return this.ba;
        },
        set: function (a) {
            this.ba = a;
            this.e("CrossingValueRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "titlePosition", {
        get: function () {
            return this.by;
        },
        set: function (a) {
            this.by = a;
            this.e("TitlePosition");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "titleTextColor", {
        get: function () {
            return this.bz;
        },
        set: function (a) {
            this.bz = a;
            this.e("TitleTextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "titleLocation", {
        get: function () {
            return this.bx;
        },
        set: function (a) {
            this.bx = a;
            this.e("TitleLocation");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "titleVisibility", {
        get: function () {
            return this.b1;
        },
        set: function (a) {
            this.b1 = a;
            this.e("TitleVisibility");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "titleShowFirstLabel", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("TitleShowFirstLabel");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "titleAngle", {
        get: function () {
            return this.ad;
        },
        set: function (a) {
            this.ad = a;
            this.e("TitleAngle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "titleExtent", {
        get: function () {
            return this.af;
        },
        set: function (a) {
            this.af = a;
            this.e("TitleExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "titleLeftMargin", {
        get: function () {
            return this.ah;
        },
        set: function (a) {
            this.ah = a;
            this.e("TitleLeftMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "titleRightMargin", {
        get: function () {
            return this.ai;
        },
        set: function (a) {
            this.ai = a;
            this.e("TitleRightMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "titleTopMargin", {
        get: function () {
            return this.aj;
        },
        set: function (a) {
            this.aj = a;
            this.e("TitleTopMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "titleBottomMargin", {
        get: function () {
            return this.ae;
        },
        set: function (a) {
            this.ae = a;
            this.e("TitleBottomMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "titleHorizontalAlignment", {
        get: function () {
            return this.bw;
        },
        set: function (a) {
            this.bw = a;
            this.e("TitleHorizontalAlignment");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "titleVerticalAlignment", {
        get: function () {
            return this.b0;
        },
        set: function (a) {
            this.b0 = a;
            this.e("TitleVerticalAlignment");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "coercionMethodsRef", {
        get: function () {
            return this.a8;
        },
        set: function (a) {
            this.a8 = a;
            this.e("CoercionMethodsRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "expectFunctions", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("ExpectFunctions");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "RangeChangedRef", {
        get: function () {
            return this.bn;
        },
        set: function (a) {
            this.bn = a;
            this.e("RangeChangedRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "RenderRequestedRef", {
        get: function () {
            return this.bo;
        },
        set: function (a) {
            this.bo = a;
            this.e("RenderRequestedRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "label", {
        get: function () {
            return this.bc;
        },
        set: function (a) {
            this.bc = a;
            this.e("Label");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "labelFontFamily", {
        get: function () {
            return this.bd;
        },
        set: function (a) {
            this.bd = a;
            this.e("LabelFontFamily");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "labelFontSize", {
        get: function () {
            return this.u;
        },
        set: function (a) {
            this.u = a;
            this.e("LabelFontSize");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "labelFontWeight", {
        get: function () {
            return this.bf;
        },
        set: function (a) {
            this.bf = a;
            this.e("LabelFontWeight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "labelFontStyle", {
        get: function () {
            return this.be;
        },
        set: function (a) {
            this.be = a;
            this.e("LabelFontStyle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "titleFontFamily", {
        get: function () {
            return this.bt;
        },
        set: function (a) {
            this.bt = a;
            this.e("TitleFontFamily");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "titleFontSize", {
        get: function () {
            return this.ag;
        },
        set: function (a) {
            this.ag = a;
            this.e("TitleFontSize");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "titleFontWeight", {
        get: function () {
            return this.bv;
        },
        set: function (a) {
            this.bv = a;
            this.e("TitleFontWeight");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "titleFontStyle", {
        get: function () {
            return this.bu;
        },
        set: function (a) {
            this.bu = a;
            this.e("TitleFontStyle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisDescription.prototype, "labelVisibility", {
        get: function () {
            return this.bk;
        },
        set: function (a) {
            this.bk = a;
            this.e("LabelVisibility");
        },
        enumerable: true,
        configurable: true
    });
    AxisDescription.$t = markType(AxisDescription, 'AxisDescription', Description.$);
    return AxisDescription;
}(Description));
export { AxisDescription };
//# sourceMappingURL=AxisDescription.js.map