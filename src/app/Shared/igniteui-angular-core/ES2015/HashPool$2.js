/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, fromEnum, markType } from "./type";
import { IHashPool$2_$type } from "./IHashPool$2";
import { List$1 } from "./List$1";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
export class HashPool$2 extends Base {
    constructor($tKey, $tValue) {
        super();
        this.$tKey = null;
        this.$tValue = null;
        this.d = null;
        this.b = null;
        this._create = null;
        this._disactivate = null;
        this._activate = null;
        this._destroy = null;
        this.$tKey = $tKey;
        this.$tValue = $tValue;
        this.$type = this.$type.specialize(this.$tKey, this.$tValue);
        this.d = new List$1(this.$tValue, 0);
        this.b = new Dictionary$2(this.$tKey, this.$tValue, 0);
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
        let b;
        if (!((() => { let c = this.b.tryGetValue(a, b); b = c.p1; return c.ret; })())) {
            if (this.d.count > 0) {
                b = this.d._inner[this.d.count - 1];
                this.d.removeAt(this.d.count - 1);
            }
            else {
                b = this.create();
            }
            if (this.activate != null) {
                this.activate(b);
            }
            this.b.item(a, b);
        }
        return b;
    }
    get c() {
        return this.b.keys;
    }
    a(a) {
        return this.b.containsKey(a);
    }
    g(a) {
        let b;
        if (((() => { let c = this.b.tryGetValue(a, b); b = c.p1; return c.ret; })())) {
            this.b.removeItem(a);
            if (this.disactivate != null) {
                this.disactivate(b);
            }
            this.d.add(b);
            let c = this.b.count;
            let d = 2;
            while (c != 0) {
                c >>= 1;
                d <<= 1;
            }
            if (d < this.d.count) {
                for (let e = d; e < this.d.count; ++e) {
                    this.destroy(this.d._inner[e]);
                }
                this.d.v(d, this.d.count - d);
            }
        }
    }
    clear() {
        let a = new List$1(this.$tKey, 0);
        for (let b of fromEnum(this.b.keys)) {
            a.add(b);
        }
        for (let c of fromEnum(a)) {
            this.g(c);
        }
    }
    get e() {
        return this.b.count;
    }
    f(a) {
        for (let b = 0; b < this.d.count; b++) {
            a(this.d._inner[b]);
        }
        for (let c of fromEnum(this.b.values)) {
            a(c);
        }
    }
}
HashPool$2.$t = markType(HashPool$2, 'HashPool$2', Base.$, [IHashPool$2_$type.specialize(0, 1)]);
//# sourceMappingURL=HashPool$2.js.map