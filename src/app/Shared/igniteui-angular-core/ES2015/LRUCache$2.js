/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Type, markType } from "./type";
import { LinkedList$1 } from "./LinkedList$1";
import { LRUCacheItem$2 } from "./LRUCacheItem$2";
import { FastIterationDictionary$2 } from "./FastIterationDictionary$2";
/**
 * @hidden
 */
export class LRUCache$2 extends Base {
    constructor($tKey, $tValue, a, ..._rest) {
        super();
        this.$tKey = null;
        this.$tValue = null;
        this.f = 0;
        this.e = null;
        this.a = null;
        this.$tKey = $tKey;
        this.$tValue = $tValue;
        this.$type = this.$type.specialize(this.$tKey, this.$tValue);
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = [c, null];
                    {
                        let f = d[0];
                        let g = d[1];
                        this.e = new LinkedList$1(LRUCacheItem$2.$.specialize(this.$tKey, this.$tValue));
                        this.a = new FastIterationDictionary$2(this.$tKey, LRUCacheItem$2.$.specialize(this.$tKey, this.$tValue), 1, g);
                        this.f = f;
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    this.e = new LinkedList$1(LRUCacheItem$2.$.specialize(this.$tKey, this.$tValue));
                    this.a = new FastIterationDictionary$2(this.$tKey, LRUCacheItem$2.$.specialize(this.$tKey, this.$tValue), 1, d);
                    this.f = c;
                }
                break;
        }
    }
    get h() {
        return this.f;
    }
    set h(a) {
        this.f = a;
        while (this.a.r > this.f) {
            this.j(this.e.d.c.a);
        }
    }
    get b() {
        return this.a;
    }
    d(a) {
        return this.a.d(a);
    }
    item(a, b) {
        if (arguments.length === 2) {
            if (!this.a.d(a)) {
                let c = new LRUCacheItem$2(this.$tKey, this.$tValue);
                c.b = b;
                c.a = a;
                this.e.e(c);
                c.c = this.e.c;
                this.a.s(a, c);
            }
            else {
                let d = this.item(a);
                this.a.item(a).b = b;
            }
            while (this.a.r > this.f) {
                this.j(this.e.d.c.a);
            }
            return b;
        }
        else {
            if (!this.a.d(a)) {
                return Type.getDefaultValue(this.$tValue);
            }
            let b = this.a.item(a);
            let c = b.c;
            this.e.h(c);
            this.e.e(c.c);
            b.c = this.e.c;
            return b.b;
        }
    }
    j(a) {
        if (!this.a.d(a)) {
            return;
        }
        let b = this.a.item(a);
        this.e.h(b.c);
        this.a.f(b.a);
    }
    i() {
        this.a.u();
        this.e = new LinkedList$1(LRUCacheItem$2.$.specialize(this.$tKey, this.$tValue));
    }
    get g() {
        return this.a.r;
    }
}
LRUCache$2.$t = markType(LRUCache$2, 'LRUCache$2');
//# sourceMappingURL=LRUCache$2.js.map