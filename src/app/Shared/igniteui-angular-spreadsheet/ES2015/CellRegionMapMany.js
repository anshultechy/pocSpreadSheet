/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { CellRegionMapBase } from "./CellRegionMapBase";
import { IComparer$1_$type } from "../../igniteui-angular-core/ES2015/IComparer$1";
import { WorksheetRegionAddress } from "../../igniteui-angular-excel/ES2015/excel.core";
import { IntRange } from "./IntRange";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { ArgumentNullException } from "../../igniteui-angular-core/ES2015/ArgumentNullException";
import { ArgumentException } from "../../igniteui-angular-core/ES2015/ArgumentException";
import { InvalidMultipleRangeSelection } from "./InvalidMultipleRangeSelection";
import { Enumerable } from "../../igniteui-angular-core/ES2015/Enumerable";
import { CellRegionMapSingle } from "./CellRegionMapSingle";
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { intDivide } from "../../igniteui-angular-core/ES2015/number";
/**
 * @hidden
 */
export class CellRegionMapMany extends CellRegionMapBase {
    constructor(a) {
        super();
        this._q = null;
        this._m = null;
        this._n = null;
        this._s = 0;
        this._r = 0;
        this._p = null;
        this._o = null;
        if (a == null) {
            throw new ArgumentNullException(1);
        }
        if (a.length < 2) {
            throw new ArgumentException(0);
        }
        let b = new List$1(WorksheetRegionAddress.$, 1, a);
        b.z(this);
        this._q = b.toArray();
        let c = 0;
        let d = this._q[0]._ac;
        for (let e = 0; e < this._q.length; e++) {
            if (this._q[e]._ac == d) {
                c++;
            }
            else {
                break;
            }
        }
        if (this._q.length % c != 0) {
            throw new InvalidMultipleRangeSelection();
        }
        for (let f = 0; f < a.length; f++) {
            let g = f % c;
            if (f != g) {
                if (this._q[f]._w != this._q[g]._w || this._q[f]._x != this._q[g]._x) {
                    throw new InvalidMultipleRangeSelection();
                }
            }
            else if (f > 0 && this._q[f]._w <= this._q[f - 1]._x) {
                throw new InvalidMultipleRangeSelection();
            }
            if (f % c != 0) {
                if (this._q[f]._ac != this._q[f - 1]._ac || this._q[f]._ae != this._q[f - 1]._ae) {
                    throw new InvalidMultipleRangeSelection();
                }
            }
            else if (f > 0 && this._q[f]._ac <= this._q[f - 1]._ae) {
                throw new InvalidMultipleRangeSelection();
            }
        }
        let h = intDivide(this._q.length, c);
        this._m = new Array(c);
        this._o = new Array(c);
        for (let i = 0; i < c; i++) {
            let j = this._q[i];
            this._m[i] = j._af;
            this._o[i] = new IntRange(1, j._w, j._x);
        }
        this._n = new Array(h);
        this._p = new Array(h);
        for (let k = 0; k < h; k++) {
            let l = this._q[k * c];
            this._n[k] = l._ad;
            this._p[k] = new IntRange(1, l._ac, l._ae);
        }
        this._s = CellRegionMapMany._u(this._m);
        this._r = CellRegionMapMany._u(this._n);
    }
    g(a) {
        let b = a % this._s;
        let c;
        let d = ((() => { let e = CellRegionMapMany._t(this._m, b, c); c = e.p2; return e.ret; })());
        return this._q[d]._w + c;
    }
    h(a) {
        let b = a % this._r;
        let c;
        let d = ((() => { let e = CellRegionMapMany._t(this._n, b, c); c = e.p2; return e.ret; })()) * this._m.length;
        return this._q[d]._ac + c;
    }
    j(a) {
        let b = this._q[a];
        let c = 0;
        let f = this._p;
        for (let e = 0; e < f.length; e++) {
            let d = f[e];
            if (d._i == b._ac) {
                break;
            }
            else {
                c += d._h - d._i;
            }
        }
        return c;
    }
    i(a) {
        let b = this._q[a];
        let c = 0;
        let f = this._o;
        for (let e = 0; e < f.length; e++) {
            let d = f[e];
            if (d._i == b._w) {
                break;
            }
            else {
                c += (d._h - d._i) + 1;
            }
        }
        return c;
    }
    get_a() {
        return this._o;
    }
    get a() {
        return this.get_a();
    }
    get_c() {
        return this._p;
    }
    get c() {
        return this.get_c();
    }
    get_b() {
        return this._q;
    }
    get b() {
        return this.get_b();
    }
    get_l() {
        return this._s;
    }
    get l() {
        return this.get_l();
    }
    get_k() {
        return this._r;
    }
    get k() {
        return this.get_k();
    }
    d() {
        let a = new WorksheetRegionAddress(1, this._p[0]._i, Enumerable.ah(IntRange.$, this._p)._h, this._o[0]._i, Enumerable.ah(IntRange.$, this._o)._h);
        return new CellRegionMapSingle(a);
    }
    static _t(a, b, c) {
        for (let d = 0; d < a.length; d++) {
            if (b < a[d]) {
                c = b;
                return {
                    ret: d,
                    p2: c
                };
            }
            b -= a[d];
        }
        c = 0;
        return {
            ret: 0,
            p2: c
        };
    }
    static _u(a) {
        let b = 0;
        for (let c = 0; c < a.length; c++) {
            b += a[c];
        }
        return b;
    }
    compare(a, b) {
        let c = Base.compareSimple(a._ac, b._ac);
        if (c == 0) {
            c = Base.compareSimple(a._w, b._w);
        }
        return c;
    }
}
CellRegionMapMany.$t = markType(CellRegionMapMany, 'CellRegionMapMany', CellRegionMapBase.$, [IComparer$1_$type.specialize(WorksheetRegionAddress.$)]);
//# sourceMappingURL=CellRegionMapMany.js.map
