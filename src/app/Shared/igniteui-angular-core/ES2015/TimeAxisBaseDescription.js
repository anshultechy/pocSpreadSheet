/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { CategoryAxisBaseDescription } from "./CategoryAxisBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class TimeAxisBaseDescription extends CategoryAxisBaseDescription {
    constructor() {
        super();
        this.dk = null;
        this.da = false;
        this.dd = new Date();
        this.dc = new Date();
        this.df = new Date();
        this.de = new Date();
    }
    get_type() {
        return "TimeAxisBase";
    }
    get dateTimeMemberPath() {
        return this.dk;
    }
    set dateTimeMemberPath(a) {
        this.dk = a;
        this.e("DateTimeMemberPath");
    }
    get isDataPreSorted() {
        return this.da;
    }
    set isDataPreSorted(a) {
        this.da = a;
        this.e("IsDataPreSorted");
    }
    get actualMinimumValue() {
        return this.dd;
    }
    set actualMinimumValue(a) {
        this.dd = a;
        this.e("ActualMinimumValue");
    }
    get actualMaximumValue() {
        return this.dc;
    }
    set actualMaximumValue(a) {
        this.dc = a;
        this.e("ActualMaximumValue");
    }
    get minimumValue() {
        return this.df;
    }
    set minimumValue(a) {
        this.df = a;
        this.e("MinimumValue");
    }
    get maximumValue() {
        return this.de;
    }
    set maximumValue(a) {
        this.de = a;
        this.e("MaximumValue");
    }
}
TimeAxisBaseDescription.$t = markType(TimeAxisBaseDescription, 'TimeAxisBaseDescription', CategoryAxisBaseDescription.$);
//# sourceMappingURL=TimeAxisBaseDescription.js.map