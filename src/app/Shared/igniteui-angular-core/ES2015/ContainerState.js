/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Number_$type, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
export class ContainerState extends Base {
    constructor() {
        super(...arguments);
        this.e = null;
        this.b = new Dictionary$2(Number_$type, Base.$, 0);
        this.c = new Dictionary$2(Base.$, Number_$type, 0);
        this.a = new Dictionary$2(Number_$type, String_$type, 0);
    }
    g(a, b, c, d) {
        if (c.b("Name")) {
            this.a.item(a, c.a("Name").b);
            d(this.a.item(a), b, false);
        }
        this.b.item(a, b);
        this.c.item(b, a);
    }
    f(a) {
        return this.b.item(a);
    }
    h(a, b) {
        let c = this.b.item(a);
        this.c.removeItem(c);
        this.b.removeItem(a);
        if (this.a.containsKey(a)) {
            let d = this.a.item(a);
            this.a.removeItem(a);
            b(d, false);
        }
    }
    d(a) {
        if (this.c.containsKey(a)) {
            return this.c.item(a);
        }
        return -1;
    }
}
ContainerState.$t = markType(ContainerState, 'ContainerState');
//# sourceMappingURL=ContainerState.js.map