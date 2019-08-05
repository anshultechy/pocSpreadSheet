/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ShapeSeriesBaseDescription } from "./ShapeSeriesBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class ScatterPolylineSeriesDescription extends ShapeSeriesBaseDescription {
    constructor() {
        super();
        this.b2 = null;
        this.b0 = null;
    }
    get_type() {
        return "ScatterPolylineSeries";
    }
    get shapeStyleSelector() {
        return this.b2;
    }
    set shapeStyleSelector(a) {
        this.b2 = a;
        this.e("ShapeStyleSelector");
    }
    get shapeStyle() {
        return this.b0;
    }
    set shapeStyle(a) {
        this.b0 = a;
        this.e("ShapeStyle");
    }
}
ScatterPolylineSeriesDescription.$t = markType(ScatterPolylineSeriesDescription, 'ScatterPolylineSeriesDescription', ShapeSeriesBaseDescription.$);
//# sourceMappingURL=ScatterPolylineSeriesDescription.js.map