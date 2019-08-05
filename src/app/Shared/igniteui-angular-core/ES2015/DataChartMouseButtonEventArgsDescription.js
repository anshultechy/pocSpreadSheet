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
export class DataChartMouseButtonEventArgsDescription extends Description {
    constructor() {
        super();
        this.j = false;
        this.l = null;
        this.f = null;
        this.h = null;
    }
    get_type() {
        return "DataChartMouseButtonEventArgs";
    }
    get type() {
        return this.get_type();
    }
    get handled() {
        return this.j;
    }
    set handled(a) {
        this.j = a;
        this.e("Handled");
    }
    get itemRef() {
        return this.l;
    }
    set itemRef(a) {
        this.l = a;
        this.e("ItemRef");
    }
    get series() {
        return this.f;
    }
    set series(a) {
        this.f = a;
        this.e("Series");
    }
    get chart() {
        return this.h;
    }
    set chart(a) {
        this.h = a;
        this.e("Chart");
    }
}
DataChartMouseButtonEventArgsDescription.$t = markType(DataChartMouseButtonEventArgsDescription, 'DataChartMouseButtonEventArgsDescription', Description.$);
//# sourceMappingURL=DataChartMouseButtonEventArgsDescription.js.map