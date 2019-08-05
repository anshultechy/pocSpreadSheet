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
export class CalloutAnnotationDescription extends Description {
    constructor() {
        super();
        this.z = null;
        this.aa = null;
        this.x = null;
        this.u = null;
        this.s = null;
        this.f = null;
        this.t = null;
        this.y = null;
        this.r = null;
        this.w = null;
        this.v = null;
        this.l = 0;
        this.i = 0;
        this.k = 0;
        this.j = 0;
        this.h = 0;
    }
    get_type() {
        return "CalloutAnnotation";
    }
    get type() {
        return this.get_type();
    }
    get xValueRef() {
        return this.z;
    }
    set xValueRef(a) {
        this.z = a;
        this.e("XValueRef");
    }
    get yValueRef() {
        return this.aa;
    }
    set yValueRef(a) {
        this.aa = a;
        this.e("YValueRef");
    }
    get text() {
        return this.x;
    }
    set text(a) {
        this.x = a;
        this.e("Text");
    }
    get keyRef() {
        return this.u;
    }
    set keyRef(a) {
        this.u = a;
        this.e("KeyRef");
    }
    get contentRef() {
        return this.s;
    }
    set contentRef(a) {
        this.s = a;
        this.e("ContentRef");
    }
    get series() {
        return this.f;
    }
    set series(a) {
        this.f = a;
        this.e("Series");
    }
    get formatLabelRef() {
        return this.t;
    }
    set formatLabelRef(a) {
        this.t = a;
        this.e("FormatLabelRef");
    }
    get textColor() {
        return this.y;
    }
    set textColor(a) {
        this.y = a;
        this.e("TextColor");
    }
    get background() {
        return this.r;
    }
    set background(a) {
        this.r = a;
        this.e("Background");
    }
    get outline() {
        return this.w;
    }
    set outline(a) {
        this.w = a;
        this.e("Outline");
    }
    get leaderBrush() {
        return this.v;
    }
    set leaderBrush(a) {
        this.v = a;
        this.e("LeaderBrush");
    }
    get strokeThickness() {
        return this.l;
    }
    set strokeThickness(a) {
        this.l = a;
        this.e("StrokeThickness");
    }
    get backgroundPaddingLeft() {
        return this.i;
    }
    set backgroundPaddingLeft(a) {
        this.i = a;
        this.e("BackgroundPaddingLeft");
    }
    get backgroundPaddingTop() {
        return this.k;
    }
    set backgroundPaddingTop(a) {
        this.k = a;
        this.e("BackgroundPaddingTop");
    }
    get backgroundPaddingRight() {
        return this.j;
    }
    set backgroundPaddingRight(a) {
        this.j = a;
        this.e("BackgroundPaddingRight");
    }
    get backgroundPaddingBottom() {
        return this.h;
    }
    set backgroundPaddingBottom(a) {
        this.h = a;
        this.e("BackgroundPaddingBottom");
    }
}
CalloutAnnotationDescription.$t = markType(CalloutAnnotationDescription, 'CalloutAnnotationDescription', Description.$);
//# sourceMappingURL=CalloutAnnotationDescription.js.map