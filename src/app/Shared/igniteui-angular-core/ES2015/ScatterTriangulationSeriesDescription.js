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
export class ScatterTriangulationSeriesDescription extends SeriesDescription {
    constructor() {
        super();
        this.bw = null;
        this.by = null;
        this.bv = null;
        this.bx = null;
        this.bs = null;
        this.bt = null;
        this.bu = null;
    }
    get_type() {
        return "ScatterTriangulationSeries";
    }
    get xMemberPath() {
        return this.bw;
    }
    set xMemberPath(a) {
        this.bw = a;
        this.e("XMemberPath");
    }
    get yMemberPath() {
        return this.by;
    }
    set yMemberPath(a) {
        this.by = a;
        this.e("YMemberPath");
    }
    get xAxisRef() {
        return this.bv;
    }
    set xAxisRef(a) {
        this.bv = a;
        this.e("XAxisRef");
    }
    get yAxisRef() {
        return this.bx;
    }
    set yAxisRef(a) {
        this.bx = a;
        this.e("YAxisRef");
    }
    get triangleVertexMemberPath1() {
        return this.bs;
    }
    set triangleVertexMemberPath1(a) {
        this.bs = a;
        this.e("TriangleVertexMemberPath1");
    }
    get triangleVertexMemberPath2() {
        return this.bt;
    }
    set triangleVertexMemberPath2(a) {
        this.bt = a;
        this.e("TriangleVertexMemberPath2");
    }
    get triangleVertexMemberPath3() {
        return this.bu;
    }
    set triangleVertexMemberPath3(a) {
        this.bu = a;
        this.e("TriangleVertexMemberPath3");
    }
}
ScatterTriangulationSeriesDescription.$t = markType(ScatterTriangulationSeriesDescription, 'ScatterTriangulationSeriesDescription', SeriesDescription.$);
//# sourceMappingURL=ScatterTriangulationSeriesDescription.js.map