/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, fromEnum, markType } from "../../igniteui-angular-core/ES2015/type";
import { WorksheetRegionAddress } from "../../igniteui-angular-excel/ES2015/excel.core";
/**
 * @hidden
 */
export class TableExpansionInfo extends Base {
    constructor() {
        super();
        this.d = null;
        this.b = new WorksheetRegionAddress();
        this.c = new WorksheetRegionAddress();
    }
    static e(a, b, c) {
        let d = a._by;
        if (c) {
            return d._ac <= b._ac && d._ae >= b._ae;
        }
        else {
            return d._w <= b._w && d._x >= b._x;
        }
    }
    static a(a, b) {
        if (a == null || a.length > 1) {
            return null;
        }
        if (b == null || b.length > 1) {
            return null;
        }
        let c = a[0];
        let d = b[0];
        let e = false;
        let f = null;
        if (c.isProtected) {
            return null;
        }
        for (let g of fromEnum(c._tables$i)) {
            if (g._by._j(d)) {
                if (f == null) {
                    f = g;
                }
                else if (f != g) {
                    return null;
                }
            }
        }
        if (f != null) {
            if (f._by._h(d)) {
                return null;
            }
            if (TableExpansionInfo.e(f, d, true)) {
                if (d._w < f._by._w) {
                    return null;
                }
                e = true;
            }
            else {
                if (!TableExpansionInfo.e(f, d, false)) {
                    return null;
                }
                if (d._ac < f._by._ac) {
                    return null;
                }
                e = false;
            }
        }
        else {
            if (d._w > 0) {
                for (let h of fromEnum(c._tables$i)) {
                    let i = h._by;
                    if (h._by._x + 1 == d._w && TableExpansionInfo.e(h, d, true)) {
                        e = true;
                        f = h;
                        break;
                    }
                }
            }
            if (f == null && d._ac > 0) {
                for (let j of fromEnum(c._tables$i)) {
                    let k = j._by;
                    if (j._by._ae + 1 == d._ac && !j.isTotalsRowVisible && TableExpansionInfo.e(j, d, false)) {
                        e = false;
                        f = j;
                        break;
                    }
                }
            }
            if (f == null) {
                return null;
            }
        }
        let l = f._by;
        let m = e ? new WorksheetRegionAddress(1, l._ac, l._ae, (l._x + 1), d._x) : new WorksheetRegionAddress(1, l._ae + 1, d._ae, l._w, l._x);
        for (let n of fromEnum(c._rows$i._m(m._ac, m._ae))) {
            for (let o of fromEnum(n._ch(m._w, m._x, true))) {
                if (o.o && !d._i(n.index, o.r)) {
                    return null;
                }
            }
        }
        for (let p of fromEnum(c._mergedCellsRegions$i)) {
            if (p._t(m._ac, m._w, m._ae, m._x)) {
                return null;
            }
        }
        let q = new TableExpansionInfo();
        q.d = f;
        if (e) {
            q.b = l._e(d._x);
        }
        else {
            q.b = l._f(d._ae);
        }
        q.c = m;
        return q;
    }
    static f(a, b, c) {
        if (a == null || a.length > 1) {
            return false;
        }
        let d = a[0];
        let e = d._de(c.o, c.m);
        if (e == null) {
            return false;
        }
        let f = e._by;
        let g = 0;
        let h = e.isTotalsRowVisible ? f._f(f._ae - 1) : f;
        for (let j = 0; j < b.length; j++) {
            let i = b[j];
            if (h._h(i)) {
                continue;
            }
            if (!f._j(i)) {
                continue;
            }
            if (!h._j(i) && f._j(i) && i._ad == 1) {
                continue;
            }
            g = Math.max(g, i._ae - h._ae);
        }
        if (g == 0) {
            return false;
        }
        let k = f._ae + g;
        for (let l of fromEnum(d._rows$i._m(f._ae + 1, f._ae + g))) {
            for (let m of fromEnum(l._ch(f._w, f._x, true))) {
                if (m.o) {
                    k = l.index;
                    break;
                }
            }
            if (k > f._ae) {
                break;
            }
        }
        let n = k - f._ae;
        let o = g - n;
        if (o > 0) {
            e.insertDataRows(e.dataAreaRegion._aa, o);
        }
        if (n > 0) {
            let p = e._by;
            p = p._f(p._ae + n);
            e._resize2(p._ah(true, true, 2, 1), 1);
        }
        return true;
    }
    g() {
        if (this.d.worksheet == null) {
            return;
        }
        for (let a of fromEnum(this.d.worksheet._tables$i)) {
            let b = a._by;
            if (b._j(this.c)) {
                return;
            }
        }
        let c = true;
        for (let d of fromEnum(this.d.worksheet._rows$i._m(this.c._ac, this.c._ae))) {
            for (let e of fromEnum(d._ch(this.c._w, this.c._x, true))) {
                if (e.o) {
                    c = false;
                    break;
                }
            }
            if (!c) {
                break;
            }
        }
        if (c) {
            return;
        }
        if (WorksheetRegionAddress._q(this.d._by, this.b)) {
            this.d._resize2(this.b._ah(true, true, 2, 1), 1);
        }
    }
}
TableExpansionInfo.$t = markType(TableExpansionInfo, 'TableExpansionInfo');
//# sourceMappingURL=TableExpansionInfo.js.map
