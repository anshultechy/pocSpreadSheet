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
export class TimeAxisIntervalDescription extends Description {
    constructor() {
        super();
        this.h = 0;
        this.f = 0;
        this.j = null;
    }
    get_type() {
        return "TimeAxisInterval";
    }
    get type() {
        return this.get_type();
    }
    get range() {
        return this.h;
    }
    set range(a) {
        this.h = a;
        this.e("Range");
    }
    get interval() {
        return this.f;
    }
    set interval(a) {
        this.f = a;
        this.e("Interval");
    }
    get intervalType() {
        return this.j;
    }
    set intervalType(a) {
        this.j = a;
        this.e("IntervalType");
    }
}
TimeAxisIntervalDescription.$t = markType(TimeAxisIntervalDescription, 'TimeAxisIntervalDescription', Description.$);
//# sourceMappingURL=TimeAxisIntervalDescription.js.map