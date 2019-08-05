/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
export class ChartSeriesEventArgsDescription extends Description {
    constructor() {
        super();
        this.f = null;
    }
    get_type() {
        return "ChartSeriesEventArgs";
    }
    get type() {
        return this.get_type();
    }
    get series() {
        return this.f;
    }
    set series(a) {
        this.f = a;
        this.e("Series");
    }
}
ChartSeriesEventArgsDescription.$t = markType(ChartSeriesEventArgsDescription, 'ChartSeriesEventArgsDescription', Description.$);
//# sourceMappingURL=ChartSeriesEventArgsDescription.js.map