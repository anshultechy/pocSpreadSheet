/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Number_$type, Boolean_$type, getBoxIfEnum, markType } from "./type";
import { List$1 } from "./List$1";
import { Dictionary$2 } from "./Dictionary$2";
import { HashSet$1 } from "./HashSet$1";
/**
 * @hidden
 */
export class FastIterationDictionary$2 extends Base {
    constructor($tKey, $tValue, a, ..._rest) {
        super();
        this.$tKey = null;
        this.$tValue = null;
        this.k = null;
        this.o = null;
        this.q = null;
        this.p = null;
        this.l = null;
        this.c = false;
        this.$tKey = $tKey;
        this.$tValue = $tValue;
        this.$type = this.$type.specialize(this.$tKey, this.$tValue);
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = [null];
                    {
                        let e = c[0];
                        this.k = new Dictionary$2(this.$tKey, this.$tValue, 2, e);
                        this.o = new List$1(this.$tKey, 0);
                        this.q = new List$1(this.$tValue, 0);
                        this.l = new Dictionary$2(this.$tKey, Number_$type, 0);
                        this.p = new List$1(Boolean_$type, 0);
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    this.k = new Dictionary$2(this.$tKey, this.$tValue, 2, c);
                    this.o = new List$1(this.$tKey, 0);
                    this.q = new List$1(this.$tValue, 0);
                    this.l = new Dictionary$2(this.$tKey, Number_$type, 0);
                    this.p = new List$1(Boolean_$type, 0);
                }
                break;
        }
    }
    s(a, b) {
        this.k.addItem(a, b);
        this.o.add(a);
        this.q.add(b);
        this.l.addItem(a, this.o.count - 1);
        this.p.add(false);
    }
    i() {
        for (let a = 0; a < this.o.count; a++) {
            if (this.p._inner[a]) {
                continue;
            }
            if (this.item(this.o._inner[a]) != this.q._inner[a]) {
                return false;
            }
        }
        return true;
    }
    e() {
        let a = new HashSet$1(this.$tValue, 0);
        for (let b = 0; b < this.q.count; b++) {
            if (this.p._inner[b]) {
                continue;
            }
            if (a.contains(this.q._inner[b])) {
                return true;
            }
            a.add_1(this.q._inner[b]);
        }
        return false;
    }
    j(a) {
        for (let b = 0; b < this.q.count; b++) {
            if (this.p._inner[b]) {
                continue;
            }
            let c = a(this.q._inner[b]);
            if (!Base.equalsStatic(c, getBoxIfEnum(this.$tKey, this.o._inner[b]))) {
                return false;
            }
        }
        return true;
    }
    u() {
        this.k.clear();
        this.o.clear();
        this.q.clear();
        this.l.clear();
        this.p.clear();
    }
    d(a) {
        return this.k.containsKey(a);
    }
    get r() {
        return this.k.count;
    }
    get m() {
        return this.k.keys;
    }
    get g() {
        return this.c;
    }
    set g(a) {
        this.c = a;
        if (this.p.count > (this.l.count * 3)) {
            this.t();
        }
    }
    f(a) {
        let b = this.k.removeItem(a);
        if (b) {
            let c = this.l.item(a);
            this.p._inner[c] = true;
            this.l.removeItem(a);
            if (this.p.count > (this.l.count * 3)) {
                this.t();
            }
            return b;
        }
        return b;
    }
    t() {
        if (this.g) {
            return;
        }
        let a = this.p.count;
        let b = 0;
        let c = false;
        for (let d = 0; d < a; d++) {
            if (this.p._inner[d]) {
                this.o.removeAt(d);
                this.q.removeAt(d);
                this.p.removeAt(d);
                d--;
                a--;
                c = true;
            }
            else {
                if (c) {
                    this.l.removeItem(this.o._inner[d]);
                    this.l.addItem(this.o._inner[d], b);
                }
                b++;
            }
        }
    }
    h(a, b) {
        return {
            ret: ((() => { let c = this.k.tryGetValue(a, b); b = c.p1; return c.ret; })()),
            p1: b
        };
    }
    b(a) {
        return this.k.f(a);
    }
    get n() {
        return this.k.values;
    }
    item(a, b) {
        if (arguments.length === 2) {
            if (!this.d(a)) {
                this.s(a, b);
            }
            else {
                this.k.item(a, b);
                let c = this.l.item(a);
                this.q._inner[c] = b;
                this.p._inner[c] = false;
            }
            return b;
        }
        else {
            return this.k.item(a);
        }
    }
}
FastIterationDictionary$2.$t = markType(FastIterationDictionary$2, 'FastIterationDictionary$2');
//# sourceMappingURL=FastIterationDictionary$2.js.map