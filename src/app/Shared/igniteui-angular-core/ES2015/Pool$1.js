/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { IIndexedPool$1_$type } from "./IIndexedPool$1";
import { List$1 } from "./List$1";
/**
 * @hidden
 */
export class Pool$1 extends Base {
    constructor($t) {
        super();
        this.$t = null;
        this._create = null;
        this._disactivate = null;
        this._activate = null;
        this._destroy = null;
        this.a = null;
        this.b = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        this.a = new List$1(this.$t, 0);
        this.b = new List$1(this.$t, 0);
    }
    get create() {
        return this._create;
    }
    set create(a) {
        this._create = a;
    }
    get disactivate() {
        return this._disactivate;
    }
    set disactivate(a) {
        this._disactivate = a;
    }
    get activate() {
        return this._activate;
    }
    set activate(a) {
        this._activate = a;
    }
    get destroy() {
        return this._destroy;
    }
    set destroy(a) {
        this._destroy = a;
    }
    item(a) {
        if (a >= this.count) {
            this.count = a + 1;
        }
        return this.a._inner[a];
    }
    clear() {
        this.count = 0;
    }
    get count() {
        return this.a.count;
    }
    set count(a) {
        let b = this.a.count;
        while (a > this.a.count && this.b.count > 0) {
            let c = this.b._inner[this.b.count - 1];
            this.a.add(c);
            this.b.removeAt(this.b.count - 1);
            if (this.activate != null) {
                this.activate(c);
            }
        }
        while (a > this.a.count && this.b.count == 0) {
            let d = this.create();
            this.a.add(d);
            if (this.activate != null) {
                this.activate(d);
            }
        }
        let e = 2;
        while (b != 0) {
            b >>= 1;
            e <<= 1;
        }
        while (a < this.a.count) {
            let f = this.a._inner[this.a.count - 1];
            this.a.removeAt(this.a.count - 1);
            if (this.disactivate != null) {
                this.disactivate(f);
            }
            if (this.b.count < e) {
                this.b.add(f);
            }
            else {
                if (this.destroy != null) {
                    this.destroy(f);
                }
            }
        }
        if (e < this.b.count) {
            for (let g = e; g < this.b.count; ++g) {
                this.destroy(this.b._inner[g]);
            }
            this.b.v(e, this.b.count - e);
        }
    }
    c(a) {
        for (let b = 0; b < this.b.count; b++) {
            a(this.b._inner[b]);
        }
        for (let c = 0; c < this.a.count; c++) {
            a(this.a._inner[c]);
        }
    }
}
Pool$1.$t = markType(Pool$1, 'Pool$1', Base.$, [IIndexedPool$1_$type.specialize(0)]);
//# sourceMappingURL=Pool$1.js.map