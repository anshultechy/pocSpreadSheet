/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { DomainChartDescription } from "./DomainChartDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var XYChartDescription = /** @class */ (function (_super) {
    tslib_1.__extends(XYChartDescription, _super);
    function XYChartDescription() {
        var _this = _super.call(this) || this;
        _this.e9 = null;
        _this.fp = null;
        _this.df = 0;
        _this.dh = 0;
        _this.dg = 0;
        _this.de = 0;
        _this.dx = 0;
        _this.dz = 0;
        _this.dy = 0;
        _this.dw = 0;
        _this.fc = null;
        _this.ft = null;
        _this.dr = 0;
        _this.d8 = 0;
        _this.dq = 0;
        _this.d7 = 0;
        _this.dt = 0;
        _this.ea = 0;
        _this.ds = 0;
        _this.d9 = 0;
        _this.dp = 0;
        _this.d6 = 0;
        _this.fn = null;
        _this.f4 = null;
        _this.fd = null;
        _this.fu = null;
        _this.fo = null;
        _this.f5 = null;
        _this.fb = null;
        _this.fs = null;
        _this.fg = null;
        _this.fx = null;
        _this.di = 0;
        _this.d0 = 0;
        _this.dj = 0;
        _this.d1 = 0;
        _this.fi = null;
        _this.fz = null;
        _this.fj = null;
        _this.f0 = null;
        _this.dk = 0;
        _this.d2 = 0;
        _this.dl = 0;
        _this.d3 = 0;
        _this.fk = null;
        _this.f1 = null;
        _this.dm = 0;
        _this.d4 = 0;
        _this.fl = null;
        _this.f2 = null;
        _this.fh = null;
        _this.fy = null;
        _this.dd = 0;
        _this.dv = 0;
        _this.dc = 0;
        _this.du = 0;
        _this.dn = 0;
        _this.d5 = 0;
        _this.c8 = false;
        _this.c9 = false;
        _this.fm = null;
        _this.f3 = null;
        _this.fa = null;
        _this.fq = null;
        _this.fe = null;
        _this.fv = null;
        _this.ff = null;
        _this.fw = null;
        _this.fr = null;
        return _this;
    }
    XYChartDescription.prototype.get_type = function () {
        return "XYChart";
    };
    Object.defineProperty(XYChartDescription.prototype, "xAxisFormatLabelRef", {
        get: function () {
            return this.e9;
        },
        set: function (a) {
            this.e9 = a;
            this.e("XAxisFormatLabelRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisFormatLabelRef", {
        get: function () {
            return this.fp;
        },
        set: function (a) {
            this.fp = a;
            this.e("YAxisFormatLabelRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisLabelLeftMargin", {
        get: function () {
            return this.df;
        },
        set: function (a) {
            this.df = a;
            this.e("XAxisLabelLeftMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisLabelTopMargin", {
        get: function () {
            return this.dh;
        },
        set: function (a) {
            this.dh = a;
            this.e("XAxisLabelTopMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisLabelRightMargin", {
        get: function () {
            return this.dg;
        },
        set: function (a) {
            this.dg = a;
            this.e("XAxisLabelRightMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisLabelBottomMargin", {
        get: function () {
            return this.de;
        },
        set: function (a) {
            this.de = a;
            this.e("XAxisLabelBottomMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisLabelLeftMargin", {
        get: function () {
            return this.dx;
        },
        set: function (a) {
            this.dx = a;
            this.e("YAxisLabelLeftMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisLabelTopMargin", {
        get: function () {
            return this.dz;
        },
        set: function (a) {
            this.dz = a;
            this.e("YAxisLabelTopMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisLabelRightMargin", {
        get: function () {
            return this.dy;
        },
        set: function (a) {
            this.dy = a;
            this.e("YAxisLabelRightMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisLabelBottomMargin", {
        get: function () {
            return this.dw;
        },
        set: function (a) {
            this.dw = a;
            this.e("YAxisLabelBottomMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisLabelTextColor", {
        get: function () {
            return this.fc;
        },
        set: function (a) {
            this.fc = a;
            this.e("XAxisLabelTextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisLabelTextColor", {
        get: function () {
            return this.ft;
        },
        set: function (a) {
            this.ft = a;
            this.e("YAxisLabelTextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisTitleMargin", {
        get: function () {
            return this.dr;
        },
        set: function (a) {
            this.dr = a;
            this.e("XAxisTitleMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisTitleMargin", {
        get: function () {
            return this.d8;
        },
        set: function (a) {
            this.d8 = a;
            this.e("YAxisTitleMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisTitleLeftMargin", {
        get: function () {
            return this.dq;
        },
        set: function (a) {
            this.dq = a;
            this.e("XAxisTitleLeftMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisTitleLeftMargin", {
        get: function () {
            return this.d7;
        },
        set: function (a) {
            this.d7 = a;
            this.e("YAxisTitleLeftMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisTitleTopMargin", {
        get: function () {
            return this.dt;
        },
        set: function (a) {
            this.dt = a;
            this.e("XAxisTitleTopMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisTitleTopMargin", {
        get: function () {
            return this.ea;
        },
        set: function (a) {
            this.ea = a;
            this.e("YAxisTitleTopMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisTitleRightMargin", {
        get: function () {
            return this.ds;
        },
        set: function (a) {
            this.ds = a;
            this.e("XAxisTitleRightMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisTitleRightMargin", {
        get: function () {
            return this.d9;
        },
        set: function (a) {
            this.d9 = a;
            this.e("YAxisTitleRightMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisTitleBottomMargin", {
        get: function () {
            return this.dp;
        },
        set: function (a) {
            this.dp = a;
            this.e("XAxisTitleBottomMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisTitleBottomMargin", {
        get: function () {
            return this.d6;
        },
        set: function (a) {
            this.d6 = a;
            this.e("YAxisTitleBottomMargin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisTitleTextColor", {
        get: function () {
            return this.fn;
        },
        set: function (a) {
            this.fn = a;
            this.e("XAxisTitleTextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisTitleTextColor", {
        get: function () {
            return this.f4;
        },
        set: function (a) {
            this.f4 = a;
            this.e("YAxisTitleTextColor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisLabelTextStyle", {
        get: function () {
            return this.fd;
        },
        set: function (a) {
            this.fd = a;
            this.e("XAxisLabelTextStyle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisLabelTextStyle", {
        get: function () {
            return this.fu;
        },
        set: function (a) {
            this.fu = a;
            this.e("YAxisLabelTextStyle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisTitleTextStyle", {
        get: function () {
            return this.fo;
        },
        set: function (a) {
            this.fo = a;
            this.e("XAxisTitleTextStyle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisTitleTextStyle", {
        get: function () {
            return this.f5;
        },
        set: function (a) {
            this.f5 = a;
            this.e("YAxisTitleTextStyle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisLabelRef", {
        get: function () {
            return this.fb;
        },
        set: function (a) {
            this.fb = a;
            this.e("XAxisLabelRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisLabelRef", {
        get: function () {
            return this.fs;
        },
        set: function (a) {
            this.fs = a;
            this.e("YAxisLabelRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisMajorStroke", {
        get: function () {
            return this.fg;
        },
        set: function (a) {
            this.fg = a;
            this.e("XAxisMajorStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisMajorStroke", {
        get: function () {
            return this.fx;
        },
        set: function (a) {
            this.fx = a;
            this.e("YAxisMajorStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisMajorStrokeThickness", {
        get: function () {
            return this.di;
        },
        set: function (a) {
            this.di = a;
            this.e("XAxisMajorStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisMajorStrokeThickness", {
        get: function () {
            return this.d0;
        },
        set: function (a) {
            this.d0 = a;
            this.e("YAxisMajorStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisMinorStrokeThickness", {
        get: function () {
            return this.dj;
        },
        set: function (a) {
            this.dj = a;
            this.e("XAxisMinorStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisMinorStrokeThickness", {
        get: function () {
            return this.d1;
        },
        set: function (a) {
            this.d1 = a;
            this.e("YAxisMinorStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisStrip", {
        get: function () {
            return this.fi;
        },
        set: function (a) {
            this.fi = a;
            this.e("XAxisStrip");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisStrip", {
        get: function () {
            return this.fz;
        },
        set: function (a) {
            this.fz = a;
            this.e("YAxisStrip");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisStroke", {
        get: function () {
            return this.fj;
        },
        set: function (a) {
            this.fj = a;
            this.e("XAxisStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisStroke", {
        get: function () {
            return this.f0;
        },
        set: function (a) {
            this.f0 = a;
            this.e("YAxisStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisStrokeThickness", {
        get: function () {
            return this.dk;
        },
        set: function (a) {
            this.dk = a;
            this.e("XAxisStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisStrokeThickness", {
        get: function () {
            return this.d2;
        },
        set: function (a) {
            this.d2 = a;
            this.e("YAxisStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisTickLength", {
        get: function () {
            return this.dl;
        },
        set: function (a) {
            this.dl = a;
            this.e("XAxisTickLength");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisTickLength", {
        get: function () {
            return this.d3;
        },
        set: function (a) {
            this.d3 = a;
            this.e("YAxisTickLength");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisTickStroke", {
        get: function () {
            return this.fk;
        },
        set: function (a) {
            this.fk = a;
            this.e("XAxisTickStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisTickStroke", {
        get: function () {
            return this.f1;
        },
        set: function (a) {
            this.f1 = a;
            this.e("YAxisTickStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisTickStrokeThickness", {
        get: function () {
            return this.dm;
        },
        set: function (a) {
            this.dm = a;
            this.e("XAxisTickStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisTickStrokeThickness", {
        get: function () {
            return this.d4;
        },
        set: function (a) {
            this.d4 = a;
            this.e("YAxisTickStrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisTitle", {
        get: function () {
            return this.fl;
        },
        set: function (a) {
            this.fl = a;
            this.e("XAxisTitle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisTitle", {
        get: function () {
            return this.f2;
        },
        set: function (a) {
            this.f2 = a;
            this.e("YAxisTitle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisMinorStroke", {
        get: function () {
            return this.fh;
        },
        set: function (a) {
            this.fh = a;
            this.e("XAxisMinorStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisMinorStroke", {
        get: function () {
            return this.fy;
        },
        set: function (a) {
            this.fy = a;
            this.e("YAxisMinorStroke");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisLabelAngle", {
        get: function () {
            return this.dd;
        },
        set: function (a) {
            this.dd = a;
            this.e("XAxisLabelAngle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisLabelAngle", {
        get: function () {
            return this.dv;
        },
        set: function (a) {
            this.dv = a;
            this.e("YAxisLabelAngle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisExtent", {
        get: function () {
            return this.dc;
        },
        set: function (a) {
            this.dc = a;
            this.e("XAxisExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisExtent", {
        get: function () {
            return this.du;
        },
        set: function (a) {
            this.du = a;
            this.e("YAxisExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisTitleAngle", {
        get: function () {
            return this.dn;
        },
        set: function (a) {
            this.dn = a;
            this.e("XAxisTitleAngle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisTitleAngle", {
        get: function () {
            return this.d5;
        },
        set: function (a) {
            this.d5 = a;
            this.e("YAxisTitleAngle");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisInverted", {
        get: function () {
            return this.c8;
        },
        set: function (a) {
            this.c8 = a;
            this.e("XAxisInverted");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisInverted", {
        get: function () {
            return this.c9;
        },
        set: function (a) {
            this.c9 = a;
            this.e("YAxisInverted");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisTitleAlignment", {
        get: function () {
            return this.fm;
        },
        set: function (a) {
            this.fm = a;
            this.e("XAxisTitleAlignment");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisTitleAlignment", {
        get: function () {
            return this.f3;
        },
        set: function (a) {
            this.f3 = a;
            this.e("YAxisTitleAlignment");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisLabelHorizontalAlignment", {
        get: function () {
            return this.fa;
        },
        set: function (a) {
            this.fa = a;
            this.e("XAxisLabelHorizontalAlignment");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisLabelHorizontalAlignment", {
        get: function () {
            return this.fq;
        },
        set: function (a) {
            this.fq = a;
            this.e("YAxisLabelHorizontalAlignment");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisLabelVerticalAlignment", {
        get: function () {
            return this.fe;
        },
        set: function (a) {
            this.fe = a;
            this.e("XAxisLabelVerticalAlignment");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisLabelVerticalAlignment", {
        get: function () {
            return this.fv;
        },
        set: function (a) {
            this.fv = a;
            this.e("YAxisLabelVerticalAlignment");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "xAxisLabelVisibility", {
        get: function () {
            return this.ff;
        },
        set: function (a) {
            this.ff = a;
            this.e("XAxisLabelVisibility");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisLabelVisibility", {
        get: function () {
            return this.fw;
        },
        set: function (a) {
            this.fw = a;
            this.e("YAxisLabelVisibility");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XYChartDescription.prototype, "yAxisLabelLocation", {
        get: function () {
            return this.fr;
        },
        set: function (a) {
            this.fr = a;
            this.e("YAxisLabelLocation");
        },
        enumerable: true,
        configurable: true
    });
    XYChartDescription.$t = markType(XYChartDescription, 'XYChartDescription', DomainChartDescription.$);
    return XYChartDescription;
}(DomainChartDescription));
export { XYChartDescription };
//# sourceMappingURL=XYChartDescription.js.map