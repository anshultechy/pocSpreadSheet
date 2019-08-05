/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { DomainChartDescription } from "./DomainChartDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class XYChartDescription extends DomainChartDescription {
    constructor() {
        super();
        this.e9 = null;
        this.fp = null;
        this.df = 0;
        this.dh = 0;
        this.dg = 0;
        this.de = 0;
        this.dx = 0;
        this.dz = 0;
        this.dy = 0;
        this.dw = 0;
        this.fc = null;
        this.ft = null;
        this.dr = 0;
        this.d8 = 0;
        this.dq = 0;
        this.d7 = 0;
        this.dt = 0;
        this.ea = 0;
        this.ds = 0;
        this.d9 = 0;
        this.dp = 0;
        this.d6 = 0;
        this.fn = null;
        this.f4 = null;
        this.fd = null;
        this.fu = null;
        this.fo = null;
        this.f5 = null;
        this.fb = null;
        this.fs = null;
        this.fg = null;
        this.fx = null;
        this.di = 0;
        this.d0 = 0;
        this.dj = 0;
        this.d1 = 0;
        this.fi = null;
        this.fz = null;
        this.fj = null;
        this.f0 = null;
        this.dk = 0;
        this.d2 = 0;
        this.dl = 0;
        this.d3 = 0;
        this.fk = null;
        this.f1 = null;
        this.dm = 0;
        this.d4 = 0;
        this.fl = null;
        this.f2 = null;
        this.fh = null;
        this.fy = null;
        this.dd = 0;
        this.dv = 0;
        this.dc = 0;
        this.du = 0;
        this.dn = 0;
        this.d5 = 0;
        this.c8 = false;
        this.c9 = false;
        this.fm = null;
        this.f3 = null;
        this.fa = null;
        this.fq = null;
        this.fe = null;
        this.fv = null;
        this.ff = null;
        this.fw = null;
        this.fr = null;
    }
    get_type() {
        return "XYChart";
    }
    get xAxisFormatLabelRef() {
        return this.e9;
    }
    set xAxisFormatLabelRef(a) {
        this.e9 = a;
        this.e("XAxisFormatLabelRef");
    }
    get yAxisFormatLabelRef() {
        return this.fp;
    }
    set yAxisFormatLabelRef(a) {
        this.fp = a;
        this.e("YAxisFormatLabelRef");
    }
    get xAxisLabelLeftMargin() {
        return this.df;
    }
    set xAxisLabelLeftMargin(a) {
        this.df = a;
        this.e("XAxisLabelLeftMargin");
    }
    get xAxisLabelTopMargin() {
        return this.dh;
    }
    set xAxisLabelTopMargin(a) {
        this.dh = a;
        this.e("XAxisLabelTopMargin");
    }
    get xAxisLabelRightMargin() {
        return this.dg;
    }
    set xAxisLabelRightMargin(a) {
        this.dg = a;
        this.e("XAxisLabelRightMargin");
    }
    get xAxisLabelBottomMargin() {
        return this.de;
    }
    set xAxisLabelBottomMargin(a) {
        this.de = a;
        this.e("XAxisLabelBottomMargin");
    }
    get yAxisLabelLeftMargin() {
        return this.dx;
    }
    set yAxisLabelLeftMargin(a) {
        this.dx = a;
        this.e("YAxisLabelLeftMargin");
    }
    get yAxisLabelTopMargin() {
        return this.dz;
    }
    set yAxisLabelTopMargin(a) {
        this.dz = a;
        this.e("YAxisLabelTopMargin");
    }
    get yAxisLabelRightMargin() {
        return this.dy;
    }
    set yAxisLabelRightMargin(a) {
        this.dy = a;
        this.e("YAxisLabelRightMargin");
    }
    get yAxisLabelBottomMargin() {
        return this.dw;
    }
    set yAxisLabelBottomMargin(a) {
        this.dw = a;
        this.e("YAxisLabelBottomMargin");
    }
    get xAxisLabelTextColor() {
        return this.fc;
    }
    set xAxisLabelTextColor(a) {
        this.fc = a;
        this.e("XAxisLabelTextColor");
    }
    get yAxisLabelTextColor() {
        return this.ft;
    }
    set yAxisLabelTextColor(a) {
        this.ft = a;
        this.e("YAxisLabelTextColor");
    }
    get xAxisTitleMargin() {
        return this.dr;
    }
    set xAxisTitleMargin(a) {
        this.dr = a;
        this.e("XAxisTitleMargin");
    }
    get yAxisTitleMargin() {
        return this.d8;
    }
    set yAxisTitleMargin(a) {
        this.d8 = a;
        this.e("YAxisTitleMargin");
    }
    get xAxisTitleLeftMargin() {
        return this.dq;
    }
    set xAxisTitleLeftMargin(a) {
        this.dq = a;
        this.e("XAxisTitleLeftMargin");
    }
    get yAxisTitleLeftMargin() {
        return this.d7;
    }
    set yAxisTitleLeftMargin(a) {
        this.d7 = a;
        this.e("YAxisTitleLeftMargin");
    }
    get xAxisTitleTopMargin() {
        return this.dt;
    }
    set xAxisTitleTopMargin(a) {
        this.dt = a;
        this.e("XAxisTitleTopMargin");
    }
    get yAxisTitleTopMargin() {
        return this.ea;
    }
    set yAxisTitleTopMargin(a) {
        this.ea = a;
        this.e("YAxisTitleTopMargin");
    }
    get xAxisTitleRightMargin() {
        return this.ds;
    }
    set xAxisTitleRightMargin(a) {
        this.ds = a;
        this.e("XAxisTitleRightMargin");
    }
    get yAxisTitleRightMargin() {
        return this.d9;
    }
    set yAxisTitleRightMargin(a) {
        this.d9 = a;
        this.e("YAxisTitleRightMargin");
    }
    get xAxisTitleBottomMargin() {
        return this.dp;
    }
    set xAxisTitleBottomMargin(a) {
        this.dp = a;
        this.e("XAxisTitleBottomMargin");
    }
    get yAxisTitleBottomMargin() {
        return this.d6;
    }
    set yAxisTitleBottomMargin(a) {
        this.d6 = a;
        this.e("YAxisTitleBottomMargin");
    }
    get xAxisTitleTextColor() {
        return this.fn;
    }
    set xAxisTitleTextColor(a) {
        this.fn = a;
        this.e("XAxisTitleTextColor");
    }
    get yAxisTitleTextColor() {
        return this.f4;
    }
    set yAxisTitleTextColor(a) {
        this.f4 = a;
        this.e("YAxisTitleTextColor");
    }
    get xAxisLabelTextStyle() {
        return this.fd;
    }
    set xAxisLabelTextStyle(a) {
        this.fd = a;
        this.e("XAxisLabelTextStyle");
    }
    get yAxisLabelTextStyle() {
        return this.fu;
    }
    set yAxisLabelTextStyle(a) {
        this.fu = a;
        this.e("YAxisLabelTextStyle");
    }
    get xAxisTitleTextStyle() {
        return this.fo;
    }
    set xAxisTitleTextStyle(a) {
        this.fo = a;
        this.e("XAxisTitleTextStyle");
    }
    get yAxisTitleTextStyle() {
        return this.f5;
    }
    set yAxisTitleTextStyle(a) {
        this.f5 = a;
        this.e("YAxisTitleTextStyle");
    }
    get xAxisLabelRef() {
        return this.fb;
    }
    set xAxisLabelRef(a) {
        this.fb = a;
        this.e("XAxisLabelRef");
    }
    get yAxisLabelRef() {
        return this.fs;
    }
    set yAxisLabelRef(a) {
        this.fs = a;
        this.e("YAxisLabelRef");
    }
    get xAxisMajorStroke() {
        return this.fg;
    }
    set xAxisMajorStroke(a) {
        this.fg = a;
        this.e("XAxisMajorStroke");
    }
    get yAxisMajorStroke() {
        return this.fx;
    }
    set yAxisMajorStroke(a) {
        this.fx = a;
        this.e("YAxisMajorStroke");
    }
    get xAxisMajorStrokeThickness() {
        return this.di;
    }
    set xAxisMajorStrokeThickness(a) {
        this.di = a;
        this.e("XAxisMajorStrokeThickness");
    }
    get yAxisMajorStrokeThickness() {
        return this.d0;
    }
    set yAxisMajorStrokeThickness(a) {
        this.d0 = a;
        this.e("YAxisMajorStrokeThickness");
    }
    get xAxisMinorStrokeThickness() {
        return this.dj;
    }
    set xAxisMinorStrokeThickness(a) {
        this.dj = a;
        this.e("XAxisMinorStrokeThickness");
    }
    get yAxisMinorStrokeThickness() {
        return this.d1;
    }
    set yAxisMinorStrokeThickness(a) {
        this.d1 = a;
        this.e("YAxisMinorStrokeThickness");
    }
    get xAxisStrip() {
        return this.fi;
    }
    set xAxisStrip(a) {
        this.fi = a;
        this.e("XAxisStrip");
    }
    get yAxisStrip() {
        return this.fz;
    }
    set yAxisStrip(a) {
        this.fz = a;
        this.e("YAxisStrip");
    }
    get xAxisStroke() {
        return this.fj;
    }
    set xAxisStroke(a) {
        this.fj = a;
        this.e("XAxisStroke");
    }
    get yAxisStroke() {
        return this.f0;
    }
    set yAxisStroke(a) {
        this.f0 = a;
        this.e("YAxisStroke");
    }
    get xAxisStrokeThickness() {
        return this.dk;
    }
    set xAxisStrokeThickness(a) {
        this.dk = a;
        this.e("XAxisStrokeThickness");
    }
    get yAxisStrokeThickness() {
        return this.d2;
    }
    set yAxisStrokeThickness(a) {
        this.d2 = a;
        this.e("YAxisStrokeThickness");
    }
    get xAxisTickLength() {
        return this.dl;
    }
    set xAxisTickLength(a) {
        this.dl = a;
        this.e("XAxisTickLength");
    }
    get yAxisTickLength() {
        return this.d3;
    }
    set yAxisTickLength(a) {
        this.d3 = a;
        this.e("YAxisTickLength");
    }
    get xAxisTickStroke() {
        return this.fk;
    }
    set xAxisTickStroke(a) {
        this.fk = a;
        this.e("XAxisTickStroke");
    }
    get yAxisTickStroke() {
        return this.f1;
    }
    set yAxisTickStroke(a) {
        this.f1 = a;
        this.e("YAxisTickStroke");
    }
    get xAxisTickStrokeThickness() {
        return this.dm;
    }
    set xAxisTickStrokeThickness(a) {
        this.dm = a;
        this.e("XAxisTickStrokeThickness");
    }
    get yAxisTickStrokeThickness() {
        return this.d4;
    }
    set yAxisTickStrokeThickness(a) {
        this.d4 = a;
        this.e("YAxisTickStrokeThickness");
    }
    get xAxisTitle() {
        return this.fl;
    }
    set xAxisTitle(a) {
        this.fl = a;
        this.e("XAxisTitle");
    }
    get yAxisTitle() {
        return this.f2;
    }
    set yAxisTitle(a) {
        this.f2 = a;
        this.e("YAxisTitle");
    }
    get xAxisMinorStroke() {
        return this.fh;
    }
    set xAxisMinorStroke(a) {
        this.fh = a;
        this.e("XAxisMinorStroke");
    }
    get yAxisMinorStroke() {
        return this.fy;
    }
    set yAxisMinorStroke(a) {
        this.fy = a;
        this.e("YAxisMinorStroke");
    }
    get xAxisLabelAngle() {
        return this.dd;
    }
    set xAxisLabelAngle(a) {
        this.dd = a;
        this.e("XAxisLabelAngle");
    }
    get yAxisLabelAngle() {
        return this.dv;
    }
    set yAxisLabelAngle(a) {
        this.dv = a;
        this.e("YAxisLabelAngle");
    }
    get xAxisExtent() {
        return this.dc;
    }
    set xAxisExtent(a) {
        this.dc = a;
        this.e("XAxisExtent");
    }
    get yAxisExtent() {
        return this.du;
    }
    set yAxisExtent(a) {
        this.du = a;
        this.e("YAxisExtent");
    }
    get xAxisTitleAngle() {
        return this.dn;
    }
    set xAxisTitleAngle(a) {
        this.dn = a;
        this.e("XAxisTitleAngle");
    }
    get yAxisTitleAngle() {
        return this.d5;
    }
    set yAxisTitleAngle(a) {
        this.d5 = a;
        this.e("YAxisTitleAngle");
    }
    get xAxisInverted() {
        return this.c8;
    }
    set xAxisInverted(a) {
        this.c8 = a;
        this.e("XAxisInverted");
    }
    get yAxisInverted() {
        return this.c9;
    }
    set yAxisInverted(a) {
        this.c9 = a;
        this.e("YAxisInverted");
    }
    get xAxisTitleAlignment() {
        return this.fm;
    }
    set xAxisTitleAlignment(a) {
        this.fm = a;
        this.e("XAxisTitleAlignment");
    }
    get yAxisTitleAlignment() {
        return this.f3;
    }
    set yAxisTitleAlignment(a) {
        this.f3 = a;
        this.e("YAxisTitleAlignment");
    }
    get xAxisLabelHorizontalAlignment() {
        return this.fa;
    }
    set xAxisLabelHorizontalAlignment(a) {
        this.fa = a;
        this.e("XAxisLabelHorizontalAlignment");
    }
    get yAxisLabelHorizontalAlignment() {
        return this.fq;
    }
    set yAxisLabelHorizontalAlignment(a) {
        this.fq = a;
        this.e("YAxisLabelHorizontalAlignment");
    }
    get xAxisLabelVerticalAlignment() {
        return this.fe;
    }
    set xAxisLabelVerticalAlignment(a) {
        this.fe = a;
        this.e("XAxisLabelVerticalAlignment");
    }
    get yAxisLabelVerticalAlignment() {
        return this.fv;
    }
    set yAxisLabelVerticalAlignment(a) {
        this.fv = a;
        this.e("YAxisLabelVerticalAlignment");
    }
    get xAxisLabelVisibility() {
        return this.ff;
    }
    set xAxisLabelVisibility(a) {
        this.ff = a;
        this.e("XAxisLabelVisibility");
    }
    get yAxisLabelVisibility() {
        return this.fw;
    }
    set yAxisLabelVisibility(a) {
        this.fw = a;
        this.e("YAxisLabelVisibility");
    }
    get yAxisLabelLocation() {
        return this.fr;
    }
    set yAxisLabelLocation(a) {
        this.fr = a;
        this.e("YAxisLabelLocation");
    }
}
XYChartDescription.$t = markType(XYChartDescription, 'XYChartDescription', DomainChartDescription.$);
//# sourceMappingURL=XYChartDescription.js.map