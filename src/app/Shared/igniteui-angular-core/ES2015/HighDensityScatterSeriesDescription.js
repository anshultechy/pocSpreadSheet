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
export class HighDensityScatterSeriesDescription extends SeriesDescription {
    constructor() {
        super();
        this.b6 = null;
        this.b8 = null;
        this.b7 = null;
        this.b9 = null;
        this.bt = false;
        this.bs = false;
        this.bx = 0;
        this.bw = 0;
        this.b5 = null;
        this.b4 = null;
        this.b0 = 0;
        this.b1 = 0;
    }
    get_type() {
        return "HighDensityScatterSeries";
    }
    get xAxisRef() {
        return this.b6;
    }
    set xAxisRef(a) {
        this.b6 = a;
        this.e("XAxisRef");
    }
    get yAxisRef() {
        return this.b8;
    }
    set yAxisRef(a) {
        this.b8 = a;
        this.e("YAxisRef");
    }
    get xMemberPath() {
        return this.b7;
    }
    set xMemberPath(a) {
        this.b7 = a;
        this.e("XMemberPath");
    }
    get yMemberPath() {
        return this.b9;
    }
    set yMemberPath(a) {
        this.b9 = a;
        this.e("YMemberPath");
    }
    get useBruteForce() {
        return this.bt;
    }
    set useBruteForce(a) {
        this.bt = a;
        this.e("UseBruteForce");
    }
    get progressiveLoad() {
        return this.bs;
    }
    set progressiveLoad(a) {
        this.bs = a;
        this.e("ProgressiveLoad");
    }
    get heatMinimum() {
        return this.bx;
    }
    set heatMinimum(a) {
        this.bx = a;
        this.e("HeatMinimum");
    }
    get heatMaximum() {
        return this.bw;
    }
    set heatMaximum(a) {
        this.bw = a;
        this.e("HeatMaximum");
    }
    get heatMinimumColor() {
        return this.b5;
    }
    set heatMinimumColor(a) {
        this.b5 = a;
        this.e("HeatMinimumColor");
    }
    get heatMaximumColor() {
        return this.b4;
    }
    set heatMaximumColor(a) {
        this.b4 = a;
        this.e("HeatMaximumColor");
    }
    get pointExtent() {
        return this.b0;
    }
    set pointExtent(a) {
        this.b0 = a;
        this.e("PointExtent");
    }
    get progressiveStatus() {
        return this.b1;
    }
    set progressiveStatus(a) {
        this.b1 = a;
        this.e("ProgressiveStatus");
    }
}
HighDensityScatterSeriesDescription.$t = markType(HighDensityScatterSeriesDescription, 'HighDensityScatterSeriesDescription', SeriesDescription.$);
//# sourceMappingURL=HighDensityScatterSeriesDescription.js.map