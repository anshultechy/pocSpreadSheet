/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { List$1 } from "./List$1";
import { RefValueChangedTarget } from "./RefValueChangedTarget";
import { DescriptionRefValueChangedEventArgs } from "./DescriptionRefValueChangedEventArgs";
/**
 * @hidden
 */
export class DescriptionRef extends Base {
    constructor(a) {
        super();
        this.c = null;
        this.a = null;
        this.c = a;
        this.a = new List$1(RefValueChangedTarget.$, 0);
    }
    get d() {
        return this.c;
    }
    get b() {
        return this.a.count;
    }
    f(a, b, c) {
        this.a.add(((() => {
            let $ret = new RefValueChangedTarget();
            $ret.b = a;
            $ret.c = b;
            $ret.a = c;
            return $ret;
        })()));
    }
    i(a, b) {
        for (let c = this.a.count - 1; c >= 0; c--) {
            if (this.a._inner[c].b == a && this.a._inner[c].c == b) {
                this.a.removeAt(c);
            }
        }
    }
    g() {
        this.a.clear();
    }
    h(a) {
        for (let b = this.a.count - 1; b >= 0; b--) {
            if (this.a._inner[b].b == a) {
                this.a.removeAt(b);
            }
        }
    }
    e(a, b) {
        for (let c = 0; c < this.a.count; c++) {
            this.a._inner[c].a(this, ((() => {
                let $ret = new DescriptionRefValueChangedEventArgs();
                $ret.b = a;
                $ret.a = b;
                return $ret;
            })()));
        }
    }
}
DescriptionRef.$t = markType(DescriptionRef, 'DescriptionRef');
//# sourceMappingURL=DescriptionRef.js.map