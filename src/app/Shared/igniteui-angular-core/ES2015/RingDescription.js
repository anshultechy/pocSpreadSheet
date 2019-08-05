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
export class RingDescription extends Description {
    constructor() {
        super();
        this.p = 0;
        this.l = 0;
        this.j = null;
        this.f = null;
        this.h = null;
        this.m = 0;
    }
    get_type() {
        return "Ring";
    }
    get type() {
        return this.get_type();
    }
    get index() {
        return this.p;
    }
    set index(a) {
        this.p = a;
        this.e("Index");
    }
    get innerExtend() {
        return this.l;
    }
    set innerExtend(a) {
        this.l = a;
        this.e("InnerExtend");
    }
    get controlSize() {
        return this.j;
    }
    set controlSize(a) {
        this.j = a;
        this.e("ControlSize");
    }
    get center() {
        return this.f;
    }
    set center(a) {
        this.f = a;
        this.e("Center");
    }
    get ringSeries() {
        return this.h;
    }
    set ringSeries(a) {
        this.h = a;
        this.e("RingSeries");
    }
    get ringBreadth() {
        return this.m;
    }
    set ringBreadth(a) {
        this.m = a;
        this.e("RingBreadth");
    }
}
RingDescription.$t = markType(RingDescription, 'RingDescription', Description.$);
//# sourceMappingURL=RingDescription.js.map