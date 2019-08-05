/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IList$1_$type, String_$type, fromEnum, markType } from "../../igniteui-angular-core/ES2015/type";
import { Dictionary$2 } from "../../igniteui-angular-core/ES2015/Dictionary$2";
import { ISupportPositioning_$type } from "./ISupportPositioning";
import { HashSet$1 } from "../../igniteui-angular-core/ES2015/HashSet$1";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { Enumerable } from "../../igniteui-angular-core/ES2015/Enumerable";
/**
 * @hidden
 */
export class PositionSorter extends Base {
    constructor() {
        super();
        this.i = null;
        this.j = null;
        this.g = new Dictionary$2(String_$type, IList$1_$type.specialize(ISupportPositioning_$type), 0);
        this.f = new Dictionary$2(ISupportPositioning_$type, HashSet$1.$.specialize(ISupportPositioning_$type), 0);
        this.c = new Dictionary$2(ISupportPositioning_$type, HashSet$1.$.specialize(ISupportPositioning_$type), 0);
        this.e = new Dictionary$2(ISupportPositioning_$type, HashSet$1.$.specialize(ISupportPositioning_$type), 0);
        this.d = new Dictionary$2(ISupportPositioning_$type, HashSet$1.$.specialize(ISupportPositioning_$type), 0);
        this.a = false;
    }
    static n(a, b, c = null) {
        let d = ((() => {
            let $ret = new PositionSorter();
            $ret.j = a;
            $ret.i = c;
            return $ret;
        })());
        b = d.b();
        return {
            p1: b
        };
    }
    m(a, b) {
        for (let c of fromEnum(this.f.item(a))) {
            if (!b.contains(c)) {
                b.add_1(c);
                this.m(c, b);
            }
        }
    }
    l(a, b) {
        for (let c of fromEnum(this.c.item(a))) {
            if (!b.contains(c)) {
                b.add_1(c);
                this.l(c, b);
            }
        }
    }
    k(a, b, c = 0) {
        if (a == b) {
            return 0;
        }
        if (this.e.item(a).contains(b)) {
            return -1;
        }
        if (this.d.item(a).contains(b)) {
            return 1;
        }
        if (1 == c) {
            if (a.key != b.key) {
                this.a = true;
            }
            if (this.i != null) {
                return this.i.compare(a, b);
            }
            return 0;
        }
        return -this.k(b, a, 1);
    }
    h(a, b) {
        let c = b ? a.before : a.after;
        let d = new HashSet$1(ISupportPositioning_$type, 0);
        if (null != c) {
            d.w(Enumerable.p(String_$type, ISupportPositioning_$type, Enumerable.u(String_$type, c, (e) => this.g.containsKey(e)), (e) => this.g.item(e)));
        }
        return d;
    }
    b() {
        let a = true;
        for (let b of fromEnum(this.j)) {
            let c;
            if (!((() => { let d = this.g.tryGetValue(b.key, c); c = d.p1; return d.ret; })())) {
                this.g.item(b.key, c = new List$1(ISupportPositioning_$type, 0));
            }
            c.add(b);
        }
        for (let d of fromEnum(this.j)) {
            this.f.item(d, this.h(d, true));
            this.c.item(d, this.h(d, false));
        }
        for (let e of fromEnum(this.j)) {
            for (let f of fromEnum(this.f.item(e))) {
                this.c.item(f).add_1(e);
            }
            for (let g of fromEnum(this.c.item(e))) {
                this.f.item(g).add_1(e);
            }
        }
        for (let h of fromEnum(this.j)) {
            let i = new HashSet$1(ISupportPositioning_$type, 0);
            let j = new HashSet$1(ISupportPositioning_$type, 0);
            this.m(h, i);
            this.l(h, j);
            this.e.item(h, i);
            this.d.item(h, j);
            if (i.i(j)) {
                a = false;
            }
        }
        this.j.aa((k, l) => this.k(k, l));
        if (this.a) {
        }
        return a;
    }
}
PositionSorter.$t = markType(PositionSorter, 'PositionSorter');
//# sourceMappingURL=PositionSorter.js.map