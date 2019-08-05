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
export class DoughnutChartDescription extends Description {
    constructor() {
        super();
        this.f = null;
        this.x = null;
        this.i = false;
        this.j = false;
        this.h = false;
        this.o = 0;
        this.z = null;
        this.aa = null;
        this.r = 0;
        this.q = 0;
        this.p = 0;
        this.n = 0;
        this.ab = null;
        this.y = null;
    }
    get series() {
        return this.f;
    }
    set series(a) {
        this.f = a;
        this.e("Series");
    }
    get background() {
        return this.x;
    }
    set background(a) {
        this.x = a;
        this.e("Background");
    }
    get_type() {
        return "DoughnutChart";
    }
    get type() {
        return this.get_type();
    }
    get allowSliceSelection() {
        return this.i;
    }
    set allowSliceSelection(a) {
        this.i = a;
        this.e("AllowSliceSelection");
    }
    get isSurfaceInteractionDisabled() {
        return this.j;
    }
    set isSurfaceInteractionDisabled(a) {
        this.j = a;
        this.e("IsSurfaceInteractionDisabled");
    }
    get allowSliceExplosion() {
        return this.h;
    }
    set allowSliceExplosion(a) {
        this.h = a;
        this.e("AllowSliceExplosion");
    }
    get innerExtent() {
        return this.o;
    }
    set innerExtent(a) {
        this.o = a;
        this.e("InnerExtent");
    }
    get selectedSliceFill() {
        return this.z;
    }
    set selectedSliceFill(a) {
        this.z = a;
        this.e("SelectedSliceFill");
    }
    get selectedSliceStroke() {
        return this.aa;
    }
    set selectedSliceStroke(a) {
        this.aa = a;
        this.e("SelectedSliceStroke");
    }
    get selectedSliceStrokeThickness() {
        return this.r;
    }
    set selectedSliceStrokeThickness(a) {
        this.r = a;
        this.e("SelectedSliceStrokeThickness");
    }
    get selectedSliceOpacity() {
        return this.q;
    }
    set selectedSliceOpacity(a) {
        this.q = a;
        this.e("SelectedSliceOpacity");
    }
    get pixelScalingRatio() {
        return this.p;
    }
    set pixelScalingRatio(a) {
        this.p = a;
        this.e("PixelScalingRatio");
    }
    get actualPixelScalingRatio() {
        return this.n;
    }
    set actualPixelScalingRatio(a) {
        this.n = a;
        this.e("ActualPixelScalingRatio");
    }
    get SliceClickRef() {
        return this.ab;
    }
    set SliceClickRef(a) {
        this.ab = a;
        this.e("SliceClickRef");
    }
    get HoleDimensionsChangedRef() {
        return this.y;
    }
    set HoleDimensionsChangedRef(a) {
        this.y = a;
        this.e("HoleDimensionsChangedRef");
    }
}
DoughnutChartDescription.$t = markType(DoughnutChartDescription, 'DoughnutChartDescription', Description.$);
//# sourceMappingURL=DoughnutChartDescription.js.map