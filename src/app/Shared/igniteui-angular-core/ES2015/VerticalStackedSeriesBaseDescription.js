/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { StackedSeriesBaseDescription } from "./StackedSeriesBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class VerticalStackedSeriesBaseDescription extends StackedSeriesBaseDescription {
    constructor() {
        super();
        this.cs = null;
        this.ct = null;
    }
    get_type() {
        return "VerticalStackedSeriesBase";
    }
    get xAxisRef() {
        return this.cs;
    }
    set xAxisRef(a) {
        this.cs = a;
        this.e("XAxisRef");
    }
    get yAxisRef() {
        return this.ct;
    }
    set yAxisRef(a) {
        this.ct = a;
        this.e("YAxisRef");
    }
}
VerticalStackedSeriesBaseDescription.$t = markType(VerticalStackedSeriesBaseDescription, 'VerticalStackedSeriesBaseDescription', StackedSeriesBaseDescription.$);
//# sourceMappingURL=VerticalStackedSeriesBaseDescription.js.map