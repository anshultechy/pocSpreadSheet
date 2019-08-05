/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { SeriesDescription } from "./SeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class AnnotationLayerDescription extends SeriesDescription {
    constructor() {
        super();
        this.bw = false;
        this.bx = false;
        this.bs = null;
        this.bu = false;
        this.bv = false;
    }
    get_type() {
        return "AnnotationLayer";
    }
    get useIndex() {
        return this.bw;
    }
    set useIndex(a) {
        this.bw = a;
        this.e("UseIndex");
    }
    get useLegend() {
        return this.bx;
    }
    set useLegend(a) {
        this.bx = a;
        this.e("UseLegend");
    }
    get cursorPosition() {
        return this.bs;
    }
    set cursorPosition(a) {
        this.bs = a;
        this.e("CursorPosition");
    }
    get isDefaultCrosshairDisabled() {
        return this.bu;
    }
    set isDefaultCrosshairDisabled(a) {
        this.bu = a;
        this.e("IsDefaultCrosshairDisabled");
    }
    get shouldRenderAsOverlay() {
        return this.bv;
    }
    set shouldRenderAsOverlay(a) {
        this.bv = a;
        this.e("ShouldRenderAsOverlay");
    }
}
AnnotationLayerDescription.$t = markType(AnnotationLayerDescription, 'AnnotationLayerDescription', SeriesDescription.$);
//# sourceMappingURL=AnnotationLayerDescription.js.map