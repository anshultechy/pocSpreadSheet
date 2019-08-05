/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
export class AxisAnnotationDescription extends Description {
    constructor() {
        super();
        this.u = null;
        this.s = null;
        this.q = null;
        this.t = null;
        this.p = null;
        this.r = null;
        this.j = 0;
        this.g = 0;
        this.i = 0;
        this.h = 0;
        this.f = 0;
    }
    get_type() {
        return "AxisAnnotation";
    }
    get type() {
        return this.get_type();
    }
    get valueRef() {
        return this.u;
    }
    set valueRef(a) {
        this.u = a;
        this.e("ValueRef");
    }
    get text() {
        return this.s;
    }
    set text(a) {
        this.s = a;
        this.e("Text");
    }
    get formatLabelRef() {
        return this.q;
    }
    set formatLabelRef(a) {
        this.q = a;
        this.e("FormatLabelRef");
    }
    get textColor() {
        return this.t;
    }
    set textColor(a) {
        this.t = a;
        this.e("TextColor");
    }
    get background() {
        return this.p;
    }
    set background(a) {
        this.p = a;
        this.e("Background");
    }
    get outline() {
        return this.r;
    }
    set outline(a) {
        this.r = a;
        this.e("Outline");
    }
    get strokeThickness() {
        return this.j;
    }
    set strokeThickness(a) {
        this.j = a;
        this.e("StrokeThickness");
    }
    get backgroundPaddingLeft() {
        return this.g;
    }
    set backgroundPaddingLeft(a) {
        this.g = a;
        this.e("BackgroundPaddingLeft");
    }
    get backgroundPaddingTop() {
        return this.i;
    }
    set backgroundPaddingTop(a) {
        this.i = a;
        this.e("BackgroundPaddingTop");
    }
    get backgroundPaddingRight() {
        return this.h;
    }
    set backgroundPaddingRight(a) {
        this.h = a;
        this.e("BackgroundPaddingRight");
    }
    get backgroundPaddingBottom() {
        return this.f;
    }
    set backgroundPaddingBottom(a) {
        this.f = a;
        this.e("BackgroundPaddingBottom");
    }
}
AxisAnnotationDescription.$t = markType(AxisAnnotationDescription, 'AxisAnnotationDescription', Description.$);
//# sourceMappingURL=AxisAnnotationDescription.js.map