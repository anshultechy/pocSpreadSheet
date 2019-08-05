/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ScatterTriangulationSeriesDescription } from "./ScatterTriangulationSeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class ScatterAreaSeriesDescription extends ScatterTriangulationSeriesDescription {
    constructor() {
        super();
        this.b6 = null;
        this.b8 = null;
    }
    get_type() {
        return "ScatterAreaSeries";
    }
    get colorScale() {
        return this.b6;
    }
    set colorScale(a) {
        this.b6 = a;
        this.e("ColorScale");
    }
    get colorMemberPath() {
        return this.b8;
    }
    set colorMemberPath(a) {
        this.b8 = a;
        this.e("ColorMemberPath");
    }
}
ScatterAreaSeriesDescription.$t = markType(ScatterAreaSeriesDescription, 'ScatterAreaSeriesDescription', ScatterTriangulationSeriesDescription.$);
//# sourceMappingURL=ScatterAreaSeriesDescription.js.map