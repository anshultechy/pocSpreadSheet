/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { Stack$1 } from "./Stack$1";
/**
 * @hidden
 */
export class StackPool$1 extends Base {
    constructor($t) {
        super();
        this.$t = null;
        this.e = false;
        this.j = null;
        this.c = null;
        this.b = null;
        this.d = null;
        this.g = null;
        this.i = null;
        this.h = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        this.g = new Dictionary$2(this.$t, Base.$, 0);
        this.i = new Stack$1(this.$t);
        this.h = new Stack$1(this.$t);
    }
    a() {
        let a;
        if (this.i.f != 0) {
            a = this.i.e();
        }
        else {
            a = this.h.f != 0 ? this.h.e() : this.j();
            this.b(a);
        }
        this.g.addItem(a, null);
        return a;
    }
    n(a) {
        this.g.removeItem(a);
        if (this.f) {
            this.i.h(a);
        }
        else {
            this.c(a);
            let b = StackPool$1.m(this.$t, this.g.count);
            if (this.h.f < b) {
                this.d(a);
            }
            else {
                this.h.h(a);
            }
        }
    }
    get f() {
        return this.e;
    }
    set f(a) {
        if (this.e != a) {
            this.e = a;
            if (!this.e) {
                let b = StackPool$1.m(this.$t, this.g.count);
                while (this.i.f > 0 && this.h.f <= b) {
                    let c = this.i.e();
                    this.c(c);
                    this.h.h(c);
                }
                while (this.i.f > 0) {
                    let d = this.i.e();
                    this.c(d);
                    this.d(d);
                }
                while (this.h.f > b) {
                    this.d(this.h.e());
                }
            }
        }
    }
    get k() {
        return this.g.count;
    }
    get l() {
        return this.h.f;
    }
    static m($t, a) {
        let b = 2;
        while (a > b) {
            b = b << 1;
        }
        return b;
    }
}
StackPool$1.$t = markType(StackPool$1, 'StackPool$1');
//# sourceMappingURL=StackPool$1.js.map