/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Number_$type, markType } from "../../igniteui-angular-core/ES2015/type";
import { CoreUtilities } from "./CoreUtilities";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
/**
 * @hidden
 */
export class CommandMap extends Base {
    constructor(a, b) {
        super();
        this.a = null;
        this.d = null;
        CoreUtilities.z(a, "commands");
        this.a = a;
        if (null != b) {
            for (let d = 0; d < a.length; d++) {
                let c = a[d];
                let e;
                if (((() => { let f = b.tryGetValue(c.f, e); e = f.p1; return f.ret; })())) {
                    c.a = e;
                }
            }
            this.d = b;
        }
    }
    c(a, b) {
        let c = this.b(a);
        return c == null || b.h(c.a, c.b);
    }
    e(a, b, c) {
        let d = new List$1(Number_$type, 0);
        for (let e = 0; e < this.a.length; e++) {
            let f = this.a[e];
            if (f.d(a, b) && f.e(c)) {
                d.add(f.f);
            }
        }
        return d;
    }
    b(a) {
        let b;
        let c = this.d.tryGetValue(a, b);
        b = c.p1;
        return b;
    }
}
CommandMap.$t = markType(CommandMap, 'CommandMap');
//# sourceMappingURL=CommandMap.js.map
