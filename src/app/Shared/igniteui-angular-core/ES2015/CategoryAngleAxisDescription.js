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
export class CategoryAngleAxisDescription extends CategoryAxisBaseDescription {
    constructor() {
        super();
        this.de = 0;
        this.dc = 0;
        this.da = 0;
        this.dd = 0;
        this.db = 0;
    }
    get_type() {
        return "CategoryAngleAxis";
    }
    get startAngleOffset() {
        return this.de;
    }
    set startAngleOffset(a) {
        this.de = a;
        this.e("StartAngleOffset");
    }
    get interval() {
        return this.dc;
    }
    set interval(a) {
        this.dc = a;
        this.e("Interval");
    }
    get actualInterval() {
        return this.da;
    }
    set actualInterval(a) {
        this.da = a;
        this.e("ActualInterval");
    }
    get minorInterval() {
        return this.dd;
    }
    set minorInterval(a) {
        this.dd = a;
        this.e("MinorInterval");
    }
    get actualMinorInterval() {
        return this.db;
    }
    set actualMinorInterval(a) {
        this.db = a;
        this.e("ActualMinorInterval");
    }
}
CategoryAngleAxisDescription.$t = markType(CategoryAngleAxisDescription, 'CategoryAngleAxisDescription', CategoryAxisBaseDescription.$);
//# sourceMappingURL=CategoryAngleAxisDescription.js.map