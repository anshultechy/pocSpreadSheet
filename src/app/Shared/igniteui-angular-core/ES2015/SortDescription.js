/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
/**
 * @hidden
 */
export class SortDescription extends Base {
    constructor() {
        super();
        this.b = false;
        this.g = null;
        this.d = 0;
    }
    get propertyName() {
        return this.g;
    }
    set propertyName(a) {
        this.g = a;
    }
    get direction() {
        return this.d;
    }
    set direction(a) {
        this.d = a;
    }
    equals(a) {
        let b = a;
        if (b == null) {
            return super.equals(a);
        }
        return b.propertyName == this.propertyName && b.direction == this.direction;
    }
    getHashCode() {
        return Base.getHashCodeStatic(this.propertyName) * 17 + this.direction;
    }
    i() {
        this.b = true;
    }
    static create(a, b) {
        let c = new SortDescription();
        c.propertyName = a;
        c.direction = b;
        return c;
    }
}
SortDescription.$t = markType(SortDescription, 'SortDescription');
//# sourceMappingURL=SortDescription.js.map