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
export class CalloutSeriesSelectingEventArgsDescription extends Description {
    constructor() {
        super();
        this.j = null;
        this.k = null;
        this.h = null;
        this.f = null;
        this.i = null;
    }
    get_type() {
        return "CalloutSeriesSelectingEventArgs";
    }
    get type() {
        return this.get_type();
    }
    get xValueRef() {
        return this.j;
    }
    set xValueRef(a) {
        this.j = a;
        this.e("XValueRef");
    }
    get yValueRef() {
        return this.k;
    }
    set yValueRef(a) {
        this.k = a;
        this.e("YValueRef");
    }
    get itemRef() {
        return this.h;
    }
    set itemRef(a) {
        this.h = a;
        this.e("ItemRef");
    }
    get series() {
        return this.f;
    }
    set series(a) {
        this.f = a;
        this.e("Series");
    }
    get seriesName() {
        return this.i;
    }
    set seriesName(a) {
        this.i = a;
        this.e("SeriesName");
    }
}
CalloutSeriesSelectingEventArgsDescription.$t = markType(CalloutSeriesSelectingEventArgsDescription, 'CalloutSeriesSelectingEventArgsDescription', Description.$);
//# sourceMappingURL=CalloutSeriesSelectingEventArgsDescription.js.map