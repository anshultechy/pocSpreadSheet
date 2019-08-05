/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { PieChartBaseDescription } from "./PieChartBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class PieChartDescription extends PieChartBaseDescription {
    constructor() {
        super();
        this.ct = null;
        this.cr = null;
        this.cs = null;
        this.cq = null;
    }
    get width() {
        return this.ct;
    }
    set width(a) {
        this.ct = a;
        this.e("Width");
    }
    get height() {
        return this.cr;
    }
    set height(a) {
        this.cr = a;
        this.e("Height");
    }
    get legendRef() {
        return this.cs;
    }
    set legendRef(a) {
        this.cs = a;
        this.e("LegendRef");
    }
    get background() {
        return this.cq;
    }
    set background(a) {
        this.cq = a;
        this.e("Background");
    }
    get_type() {
        return "PieChart";
    }
}
PieChartDescription.$t = markType(PieChartDescription, 'PieChartDescription', PieChartBaseDescription.$);
//# sourceMappingURL=PieChartDescription.js.map