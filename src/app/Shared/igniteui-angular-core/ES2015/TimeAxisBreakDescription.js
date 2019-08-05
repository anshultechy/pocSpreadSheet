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
export class TimeAxisBreakDescription extends Description {
    constructor() {
        super();
        this.g = new Date();
        this.f = new Date();
        this.j = 0;
    }
    get_type() {
        return "TimeAxisBreak";
    }
    get type() {
        return this.get_type();
    }
    get start() {
        return this.g;
    }
    set start(a) {
        this.g = a;
        this.e("Start");
    }
    get end() {
        return this.f;
    }
    set end(a) {
        this.f = a;
        this.e("End");
    }
    get interval() {
        return this.j;
    }
    set interval(a) {
        this.j = a;
        this.e("Interval");
    }
}
TimeAxisBreakDescription.$t = markType(TimeAxisBreakDescription, 'TimeAxisBreakDescription', Description.$);
//# sourceMappingURL=TimeAxisBreakDescription.js.map