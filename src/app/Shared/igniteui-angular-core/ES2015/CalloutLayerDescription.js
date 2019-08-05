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
export class CalloutLayerDescription extends AnnotationLayerDescription {
    constructor() {
        super();
        this.c2 = null;
        this.c5 = null;
        this.c6 = null;
        this.c1 = null;
        this.b3 = false;
        this.c0 = null;
        this.c3 = null;
        this.cz = null;
        this.b2 = false;
        this.b5 = false;
        this.b4 = false;
        this.cm = 0;
        this.cy = null;
        this.cq = null;
        this.cn = 0;
        this.cv = null;
        this.cu = null;
        this.cb = 0;
        this.cd = 0;
        this.cc = 0;
        this.ca = 0;
        this.cr = null;
        this.ce = 0;
        this.cf = 0;
        this.c4 = null;
        this.cx = null;
        this.cs = null;
        this.ct = null;
        this.cw = null;
    }
    get_type() {
        return "CalloutLayer";
    }
    get labelMemberPath() {
        return this.c2;
    }
    set labelMemberPath(a) {
        this.c2 = a;
        this.e("LabelMemberPath");
    }
    get xMemberPath() {
        return this.c5;
    }
    set xMemberPath(a) {
        this.c5 = a;
        this.e("XMemberPath");
    }
    get yMemberPath() {
        return this.c6;
    }
    set yMemberPath(a) {
        this.c6 = a;
        this.e("YMemberPath");
    }
    get keyMemberPath() {
        return this.c1;
    }
    set keyMemberPath(a) {
        this.c1 = a;
        this.e("KeyMemberPath");
    }
    get isCalloutOffsettingEnabled() {
        return this.b3;
    }
    set isCalloutOffsettingEnabled(a) {
        this.b3 = a;
        this.e("IsCalloutOffsettingEnabled");
    }
    get contentMemberPath() {
        return this.c0;
    }
    set contentMemberPath(a) {
        this.c0 = a;
        this.e("ContentMemberPath");
    }
    get targetSeriesRef() {
        return this.c3;
    }
    set targetSeriesRef(a) {
        this.c3 = a;
        this.e("TargetSeriesRef");
    }
    get collisionChannel() {
        return this.cz;
    }
    set collisionChannel(a) {
        this.cz = a;
        this.e("CollisionChannel");
    }
    get isAutoCalloutBehaviorEnabled() {
        return this.b2;
    }
    set isAutoCalloutBehaviorEnabled(a) {
        this.b2 = a;
        this.e("IsAutoCalloutBehaviorEnabled");
    }
    get useValueForAutoCalloutLabels() {
        return this.b5;
    }
    set useValueForAutoCalloutLabels(a) {
        this.b5 = a;
        this.e("UseValueForAutoCalloutLabels");
    }
    get isCustomCalloutStyleEnabled() {
        return this.b4;
    }
    set isCustomCalloutStyleEnabled(a) {
        this.b4 = a;
        this.e("IsCustomCalloutStyleEnabled");
    }
    get autoCalloutLabelPrecision() {
        return this.cm;
    }
    set autoCalloutLabelPrecision(a) {
        this.cm = a;
        this.e("AutoCalloutLabelPrecision");
    }
    get calloutTextColor() {
        return this.cy;
    }
    set calloutTextColor(a) {
        this.cy = a;
        this.e("CalloutTextColor");
    }
    get calloutBackground() {
        return this.cq;
    }
    set calloutBackground(a) {
        this.cq = a;
        this.e("CalloutBackground");
    }
    get calloutInterpolatedValuePrecision() {
        return this.cn;
    }
    set calloutInterpolatedValuePrecision(a) {
        this.cn = a;
        this.e("CalloutInterpolatedValuePrecision");
    }
    get calloutOutline() {
        return this.cv;
    }
    set calloutOutline(a) {
        this.cv = a;
        this.e("CalloutOutline");
    }
    get calloutLeaderBrush() {
        return this.cu;
    }
    set calloutLeaderBrush(a) {
        this.cu = a;
        this.e("CalloutLeaderBrush");
    }
    get calloutPaddingLeft() {
        return this.cb;
    }
    set calloutPaddingLeft(a) {
        this.cb = a;
        this.e("CalloutPaddingLeft");
    }
    get calloutPaddingTop() {
        return this.cd;
    }
    set calloutPaddingTop(a) {
        this.cd = a;
        this.e("CalloutPaddingTop");
    }
    get calloutPaddingRight() {
        return this.cc;
    }
    set calloutPaddingRight(a) {
        this.cc = a;
        this.e("CalloutPaddingRight");
    }
    get calloutPaddingBottom() {
        return this.ca;
    }
    set calloutPaddingBottom(a) {
        this.ca = a;
        this.e("CalloutPaddingBottom");
    }
    get calloutCollisionMode() {
        return this.cr;
    }
    set calloutCollisionMode(a) {
        this.cr = a;
        this.e("CalloutCollisionMode");
    }
    get calloutPositionPadding() {
        return this.ce;
    }
    set calloutPositionPadding(a) {
        this.ce = a;
        this.e("CalloutPositionPadding");
    }
    get calloutStrokeThickness() {
        return this.cf;
    }
    set calloutStrokeThickness(a) {
        this.cf = a;
        this.e("CalloutStrokeThickness");
    }
    get textStyle() {
        return this.c4;
    }
    set textStyle(a) {
        this.c4 = a;
        this.e("TextStyle");
    }
    get CalloutStyleUpdatingRef() {
        return this.cx;
    }
    set CalloutStyleUpdatingRef(a) {
        this.cx = a;
        this.e("CalloutStyleUpdatingRef");
    }
    get CalloutContentUpdatingRef() {
        return this.cs;
    }
    set CalloutContentUpdatingRef(a) {
        this.cs = a;
        this.e("CalloutContentUpdatingRef");
    }
    get CalloutLabelUpdatingRef() {
        return this.ct;
    }
    set CalloutLabelUpdatingRef(a) {
        this.ct = a;
        this.e("CalloutLabelUpdatingRef");
    }
    get CalloutSeriesSelectingRef() {
        return this.cw;
    }
    set CalloutSeriesSelectingRef(a) {
        this.cw = a;
        this.e("CalloutSeriesSelectingRef");
    }
}
CalloutLayerDescription.$t = markType(CalloutLayerDescription, 'CalloutLayerDescription', AnnotationLayerDescription.$);
//# sourceMappingURL=CalloutLayerDescription.js.map