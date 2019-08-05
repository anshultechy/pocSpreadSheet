/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { AnnotationLayerDescription } from "./AnnotationLayerDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class CrosshairLayerDescription extends AnnotationLayerDescription {
    constructor() {
        super();
        this.cw = null;
        this.cz = null;
        this.cy = null;
        this.b4 = false;
        this.b2 = false;
        this.c3 = null;
        this.c1 = null;
        this.cs = 0;
        this.c2 = null;
        this.b9 = 0;
        this.cb = 0;
        this.ca = 0;
        this.b8 = 0;
        this.ce = 0;
        this.cg = 0;
        this.cf = 0;
        this.cd = 0;
        this.cc = 0;
        this.c6 = null;
        this.c4 = null;
        this.ct = 0;
        this.c5 = null;
        this.ch = 0;
        this.c0 = null;
        this.cx = null;
        this.b3 = false;
    }
    get_type() {
        return "CrosshairLayer";
    }
    get horizontalLineStroke() {
        return this.cw;
    }
    set horizontalLineStroke(a) {
        this.cw = a;
        this.e("HorizontalLineStroke");
    }
    get verticalLineStroke() {
        return this.cz;
    }
    set verticalLineStroke(a) {
        this.cz = a;
        this.e("VerticalLineStroke");
    }
    get targetSeriesRef() {
        return this.cy;
    }
    set targetSeriesRef(a) {
        this.cy = a;
        this.e("TargetSeriesRef");
    }
    get useInterpolation() {
        return this.b4;
    }
    set useInterpolation(a) {
        this.b4 = a;
        this.e("UseInterpolation");
    }
    get isAxisAnnotationEnabled() {
        return this.b2;
    }
    set isAxisAnnotationEnabled(a) {
        this.b2 = a;
        this.e("IsAxisAnnotationEnabled");
    }
    get xAxisAnnotationTextColor() {
        return this.c3;
    }
    set xAxisAnnotationTextColor(a) {
        this.c3 = a;
        this.e("XAxisAnnotationTextColor");
    }
    get xAxisAnnotationBackground() {
        return this.c1;
    }
    set xAxisAnnotationBackground(a) {
        this.c1 = a;
        this.e("XAxisAnnotationBackground");
    }
    get xAxisAnnotationInterpolatedValuePrecision() {
        return this.cs;
    }
    set xAxisAnnotationInterpolatedValuePrecision(a) {
        this.cs = a;
        this.e("XAxisAnnotationInterpolatedValuePrecision");
    }
    get xAxisAnnotationOutline() {
        return this.c2;
    }
    set xAxisAnnotationOutline(a) {
        this.c2 = a;
        this.e("XAxisAnnotationOutline");
    }
    get xAxisAnnotationPaddingLeft() {
        return this.b9;
    }
    set xAxisAnnotationPaddingLeft(a) {
        this.b9 = a;
        this.e("XAxisAnnotationPaddingLeft");
    }
    get xAxisAnnotationPaddingTop() {
        return this.cb;
    }
    set xAxisAnnotationPaddingTop(a) {
        this.cb = a;
        this.e("XAxisAnnotationPaddingTop");
    }
    get xAxisAnnotationPaddingRight() {
        return this.ca;
    }
    set xAxisAnnotationPaddingRight(a) {
        this.ca = a;
        this.e("XAxisAnnotationPaddingRight");
    }
    get xAxisAnnotationPaddingBottom() {
        return this.b8;
    }
    set xAxisAnnotationPaddingBottom(a) {
        this.b8 = a;
        this.e("XAxisAnnotationPaddingBottom");
    }
    get yAxisAnnotationPaddingLeft() {
        return this.ce;
    }
    set yAxisAnnotationPaddingLeft(a) {
        this.ce = a;
        this.e("YAxisAnnotationPaddingLeft");
    }
    get yAxisAnnotationPaddingTop() {
        return this.cg;
    }
    set yAxisAnnotationPaddingTop(a) {
        this.cg = a;
        this.e("YAxisAnnotationPaddingTop");
    }
    get yAxisAnnotationPaddingRight() {
        return this.cf;
    }
    set yAxisAnnotationPaddingRight(a) {
        this.cf = a;
        this.e("YAxisAnnotationPaddingRight");
    }
    get yAxisAnnotationPaddingBottom() {
        return this.cd;
    }
    set yAxisAnnotationPaddingBottom(a) {
        this.cd = a;
        this.e("YAxisAnnotationPaddingBottom");
    }
    get xAxisAnnotationStrokeThickness() {
        return this.cc;
    }
    set xAxisAnnotationStrokeThickness(a) {
        this.cc = a;
        this.e("XAxisAnnotationStrokeThickness");
    }
    get yAxisAnnotationTextColor() {
        return this.c6;
    }
    set yAxisAnnotationTextColor(a) {
        this.c6 = a;
        this.e("YAxisAnnotationTextColor");
    }
    get yAxisAnnotationBackground() {
        return this.c4;
    }
    set yAxisAnnotationBackground(a) {
        this.c4 = a;
        this.e("YAxisAnnotationBackground");
    }
    get yAxisAnnotationInterpolatedValuePrecision() {
        return this.ct;
    }
    set yAxisAnnotationInterpolatedValuePrecision(a) {
        this.ct = a;
        this.e("YAxisAnnotationInterpolatedValuePrecision");
    }
    get yAxisAnnotationOutline() {
        return this.c5;
    }
    set yAxisAnnotationOutline(a) {
        this.c5 = a;
        this.e("YAxisAnnotationOutline");
    }
    get yAxisAnnotationStrokeThickness() {
        return this.ch;
    }
    set yAxisAnnotationStrokeThickness(a) {
        this.ch = a;
        this.e("YAxisAnnotationStrokeThickness");
    }
    get verticalLineVisibility() {
        return this.c0;
    }
    set verticalLineVisibility(a) {
        this.c0 = a;
        this.e("VerticalLineVisibility");
    }
    get horizontalLineVisibility() {
        return this.cx;
    }
    set horizontalLineVisibility(a) {
        this.cx = a;
        this.e("HorizontalLineVisibility");
    }
    get skipUnknownValues() {
        return this.b3;
    }
    set skipUnknownValues(a) {
        this.b3 = a;
        this.e("SkipUnknownValues");
    }
}
CrosshairLayerDescription.$t = markType(CrosshairLayerDescription, 'CrosshairLayerDescription', AnnotationLayerDescription.$);
//# sourceMappingURL=CrosshairLayerDescription.js.map