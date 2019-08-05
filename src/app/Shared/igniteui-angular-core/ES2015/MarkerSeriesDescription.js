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
export class MarkerSeriesDescription extends SeriesDescription {
    constructor() {
        super();
        this.by = null;
        this.bx = null;
        this.bu = null;
        this.bv = null;
        this.bs = null;
        this.bw = null;
        this.bt = null;
    }
    get_type() {
        return "MarkerSeries";
    }
    get markerType() {
        return this.by;
    }
    set markerType(a) {
        this.by = a;
        this.e("MarkerType");
    }
    get markerTemplateRef() {
        return this.bx;
    }
    set markerTemplateRef(a) {
        this.bx = a;
        this.e("MarkerTemplateRef");
    }
    get actualMarkerTemplateRef() {
        return this.bu;
    }
    set actualMarkerTemplateRef(a) {
        this.bu = a;
        this.e("ActualMarkerTemplateRef");
    }
    get markerBrush() {
        return this.bv;
    }
    set markerBrush(a) {
        this.bv = a;
        this.e("MarkerBrush");
    }
    get actualMarkerBrush() {
        return this.bs;
    }
    set actualMarkerBrush(a) {
        this.bs = a;
        this.e("ActualMarkerBrush");
    }
    get markerOutline() {
        return this.bw;
    }
    set markerOutline(a) {
        this.bw = a;
        this.e("MarkerOutline");
    }
    get actualMarkerOutline() {
        return this.bt;
    }
    set actualMarkerOutline(a) {
        this.bt = a;
        this.e("ActualMarkerOutline");
    }
}
MarkerSeriesDescription.$t = markType(MarkerSeriesDescription, 'MarkerSeriesDescription', SeriesDescription.$);
//# sourceMappingURL=MarkerSeriesDescription.js.map