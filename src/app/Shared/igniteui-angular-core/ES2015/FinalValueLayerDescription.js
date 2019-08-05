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
export class FinalValueLayerDescription extends AnnotationLayerDescription {
    constructor() {
        super();
        this.ci = null;
        this.ch = null;
        this.cg = null;
        this.ce = null;
        this.cc = 0;
        this.cf = null;
        this.b3 = 0;
        this.b5 = 0;
        this.b4 = 0;
        this.b2 = 0;
        this.b6 = 0;
    }
    get_type() {
        return "FinalValueLayer";
    }
    get targetSeriesRef() {
        return this.ci;
    }
    set targetSeriesRef(a) {
        this.ci = a;
        this.e("TargetSeriesRef");
    }
    get finalValueSelectionMode() {
        return this.ch;
    }
    set finalValueSelectionMode(a) {
        this.ch = a;
        this.e("FinalValueSelectionMode");
    }
    get axisAnnotationTextColor() {
        return this.cg;
    }
    set axisAnnotationTextColor(a) {
        this.cg = a;
        this.e("AxisAnnotationTextColor");
    }
    get axisAnnotationBackground() {
        return this.ce;
    }
    set axisAnnotationBackground(a) {
        this.ce = a;
        this.e("AxisAnnotationBackground");
    }
    get axisAnnotationInterpolatedValuePrecision() {
        return this.cc;
    }
    set axisAnnotationInterpolatedValuePrecision(a) {
        this.cc = a;
        this.e("AxisAnnotationInterpolatedValuePrecision");
    }
    get axisAnnotationOutline() {
        return this.cf;
    }
    set axisAnnotationOutline(a) {
        this.cf = a;
        this.e("AxisAnnotationOutline");
    }
    get axisAnnotationPaddingLeft() {
        return this.b3;
    }
    set axisAnnotationPaddingLeft(a) {
        this.b3 = a;
        this.e("AxisAnnotationPaddingLeft");
    }
    get axisAnnotationPaddingTop() {
        return this.b5;
    }
    set axisAnnotationPaddingTop(a) {
        this.b5 = a;
        this.e("AxisAnnotationPaddingTop");
    }
    get axisAnnotationPaddingRight() {
        return this.b4;
    }
    set axisAnnotationPaddingRight(a) {
        this.b4 = a;
        this.e("AxisAnnotationPaddingRight");
    }
    get axisAnnotationPaddingBottom() {
        return this.b2;
    }
    set axisAnnotationPaddingBottom(a) {
        this.b2 = a;
        this.e("AxisAnnotationPaddingBottom");
    }
    get axisAnnotationStrokeThickness() {
        return this.b6;
    }
    set axisAnnotationStrokeThickness(a) {
        this.b6 = a;
        this.e("AxisAnnotationStrokeThickness");
    }
}
FinalValueLayerDescription.$t = markType(FinalValueLayerDescription, 'FinalValueLayerDescription', AnnotationLayerDescription.$);
//# sourceMappingURL=FinalValueLayerDescription.js.map