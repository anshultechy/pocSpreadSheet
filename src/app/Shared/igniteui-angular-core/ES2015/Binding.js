/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { PropertyPath } from "./PropertyPath";
/**
 * @hidden
 */
export class Binding extends Base {
    constructor(a, ..._rest) {
        super();
        this.c = null;
        this.e = null;
        this.a = false;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    let c = _rest[0];
                    this.e = new PropertyPath(c);
                }
                break;
        }
    }
    get d() {
        return this.c;
    }
    set d(a) {
        this.c = a;
    }
    get f() {
        return this.e;
    }
    set f(a) {
        this.e = a;
    }
    get b() {
        return this.a;
    }
    set b(a) {
        this.a = a;
    }
}
Binding.$t = markType(Binding, 'Binding');
//# sourceMappingURL=Binding.js.map