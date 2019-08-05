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
export class ShapeSeriesBaseDescription extends SeriesDescription {
    constructor() {
        super();
        this.bu = null;
        this.bv = null;
        this.bw = null;
        this.bs = 0;
    }
    get_type() {
        return "ShapeSeriesBase";
    }
    get shapeMemberPath() {
        return this.bu;
    }
    set shapeMemberPath(a) {
        this.bu = a;
        this.e("ShapeMemberPath");
    }
    get xAxisRef() {
        return this.bv;
    }
    set xAxisRef(a) {
        this.bv = a;
        this.e("XAxisRef");
    }
    get yAxisRef() {
        return this.bw;
    }
    set yAxisRef(a) {
        this.bw = a;
        this.e("YAxisRef");
    }
    get shapeFilterResolution() {
        return this.bs;
    }
    set shapeFilterResolution(a) {
        this.bs = a;
        this.e("ShapeFilterResolution");
    }
}
ShapeSeriesBaseDescription.$t = markType(ShapeSeriesBaseDescription, 'ShapeSeriesBaseDescription', SeriesDescription.$);
//# sourceMappingURL=ShapeSeriesBaseDescription.js.map