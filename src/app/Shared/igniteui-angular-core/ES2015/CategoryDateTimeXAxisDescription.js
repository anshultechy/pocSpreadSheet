/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { TimeAxisBaseDescription } from "./TimeAxisBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class CategoryDateTimeXAxisDescription extends TimeAxisBaseDescription {
    constructor() {
        super();
        this.dv = null;
        this.dp = 0;
        this.dm = 0;
        this.dq = 0;
        this.dn = 0;
    }
    get_type() {
        return "CategoryDateTimeXAxis";
    }
    get displayType() {
        return this.dv;
    }
    set displayType(a) {
        this.dv = a;
        this.e("DisplayType");
    }
    get interval() {
        return this.dp;
    }
    set interval(a) {
        this.dp = a;
        this.e("Interval");
    }
    get actualInterval() {
        return this.dm;
    }
    set actualInterval(a) {
        this.dm = a;
        this.e("ActualInterval");
    }
    get minorInterval() {
        return this.dq;
    }
    set minorInterval(a) {
        this.dq = a;
        this.e("MinorInterval");
    }
    get actualMinorInterval() {
        return this.dn;
    }
    set actualMinorInterval(a) {
        this.dn = a;
        this.e("ActualMinorInterval");
    }
}
CategoryDateTimeXAxisDescription.$t = markType(CategoryDateTimeXAxisDescription, 'CategoryDateTimeXAxisDescription', TimeAxisBaseDescription.$);
//# sourceMappingURL=CategoryDateTimeXAxisDescription.js.map