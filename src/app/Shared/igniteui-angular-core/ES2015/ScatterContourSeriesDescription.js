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
export class ScatterContourSeriesDescription extends ScatterTriangulationSeriesDescription {
    constructor() {
        super();
        this.ca = null;
        this.b8 = null;
        this.b6 = null;
    }
    get_type() {
        return "ScatterContourSeries";
    }
    get valueMemberPath() {
        return this.ca;
    }
    set valueMemberPath(a) {
        this.ca = a;
        this.e("ValueMemberPath");
    }
    get fillScale() {
        return this.b8;
    }
    set fillScale(a) {
        this.b8 = a;
        this.e("FillScale");
    }
    get valueResolver() {
        return this.b6;
    }
    set valueResolver(a) {
        this.b6 = a;
        this.e("ValueResolver");
    }
}
ScatterContourSeriesDescription.$t = markType(ScatterContourSeriesDescription, 'ScatterContourSeriesDescription', ScatterTriangulationSeriesDescription.$);
//# sourceMappingURL=ScatterContourSeriesDescription.js.map