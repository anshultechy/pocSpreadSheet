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
export class WeakReference extends Base {
    constructor(a) {
        super();
        this.b = null;
        this.b = a;
    }
    get_a() {
        return true;
    }
    get a() {
        return this.get_a();
    }
    get_c() {
        return this.b;
    }
    set_c(a) {
        this.b = a;
    }
    get c() {
        return this.get_c();
    }
    set c(a) {
        this.set_c(a);
    }
}
WeakReference.$t = markType(WeakReference, 'WeakReference');
//# sourceMappingURL=WeakReference.js.map