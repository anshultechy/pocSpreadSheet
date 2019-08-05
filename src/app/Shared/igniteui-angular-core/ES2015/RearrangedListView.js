/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, typeCast, Array_$type, markType } from "./type";
import { ISupportsDataChangeNotifications_$type } from "./ISupportsDataChangeNotifications";
import { List$1 } from "./List$1";
import { SectionData } from "./SectionData";
import { SectionMap } from "./SectionMap";
import { DataSourceSpecialRow } from "./DataSourceSpecialRow";
import { RemovedShiftedRowInfo } from "./RemovedShiftedRowInfo";
/**
 * @hidden
 */
export class RearrangedListView extends Base {
    constructor(a) {
        super();
        this.e = null;
        this.ae = null;
        this.l = new SectionMap();
        this.f = null;
        this.aa = null;
        this.z = null;
        this.h = null;
        this.m = null;
        this.d = null;
        this.o = null;
        this.p = null;
        this.t = false;
        this.w = false;
        this.v = false;
        this.x = false;
        this.q = false;
        this.ad = new List$1(Array_$type, 0);
        this.e = a;
    }
    get ag() {
        return this.ae;
    }
    k(a) {
        return this.l.d(a);
    }
    get g() {
        return this.f;
    }
    set g(a) {
        this.f = a;
    }
    get ac() {
        return this.aa;
    }
    set ac(a) {
        this.aa = a;
    }
    get ab() {
        return this.z;
    }
    set ab(a) {
        this.z = a;
    }
    get i() {
        return this.h;
    }
    set i(a) {
        this.h = a;
    }
    get n() {
        return this.m;
    }
    set n(a) {
        this.m = a;
    }
    ay() {
        if (this.ae == this.e || this.ae == null) {
            this.ae = new List$1(Base.$, 0);
        }
        this.ae.clear();
        if (this.e == null) {
            return;
        }
        let a = this.e.actualCount;
        if (this.h == null) {
            for (let b = 0; b < a; b++) {
                this.ae.add1(this.e.getItemAtIndex(b));
            }
        }
        else {
            for (let c = 0; c < a; c++) {
                let d = this.e.getItemAtIndex(c);
                if (this.h(d)) {
                    this.ae.add1(d);
                }
            }
        }
        if (this.aa != null) {
            this.ae.z(this.aa);
        }
        this.q = false;
        this.l.p();
        if (this.o != null && this.o.k.count > 0) {
            this.q = true;
            this.at();
        }
        else {
            this.l.n.add(((() => {
                let $ret = new SectionData();
                $ret.f = 0;
                $ret.a = null;
                $ret.b = null;
                $ret.g = 0;
                $ret.e = this.ae.count;
                return $ret;
            })()));
        }
        let e = this.g;
        let f = new List$1(Base.$, 0);
        if (this.ad.count > 0 && this.x) {
            if (!this.q) {
                let g = this.l.n._inner[0];
                for (let h = 0; h < this.ad.count; h++) {
                    let i = this.d.indexOfKey(this.ad._inner[h]);
                    if (i != -1) {
                        this.am(g, this.ae._inner[i], h);
                    }
                }
            }
            else {
                for (let j = 0; j < this.ad.count; j++) {
                    let k = this.d.indexOfKey(this.ad._inner[j]);
                    if (k != -1) {
                        let l = this.l.d(k);
                        this.am(l, this.ae._inner[k], j);
                    }
                }
            }
        }
        if (this.n != null) {
            this.n.notifyClearItems();
        }
    }
    ai(a, b, c) {
        let d = a.g + a.d;
        this.ak(d, b);
        a.d++;
        a.e++;
        a.c++;
        if (c) {
            this.l.v(a, 1, 1);
        }
        return d;
    }
    aj(a, b, c) {
        this.ak(b, c);
        a.d++;
        a.e++;
        a.c++;
        this.l.v(a, 1, 1);
        return b;
    }
    ak(a, b) {
        let c = new DataSourceSpecialRow();
        c.rowType = 3;
        c.targetRow = b;
        let d = a;
        if (this.w) {
            d++;
        }
        this.ae.insert1(d, c);
        return a + 1;
    }
    al(a, b) {
        let c = -1;
        for (let d = 0; d < this.ad.count; d++) {
            if (this.g.i(b, this.ad._inner[d]) == 0) {
                c = d;
                break;
            }
        }
        return this.am(a, b, c);
    }
    am(a, b, c) {
        let d = -1;
        if (c != -1) {
            let e = a.g;
            let f = e + a.d;
            let g = false;
            for (let h = e; h < f; h++) {
                let i = this.w ? h + 1 : h;
                let j = typeCast(DataSourceSpecialRow.$, this.ae._inner[i]);
                if (this.aa != null) {
                    let k = this.aa.compare(b, j.targetRow);
                    if (k == 0 || k < 0) {
                        d = this.aj(a, h, b);
                        g = true;
                        break;
                    }
                }
                else {
                    let l = -1;
                    for (let m = 0; m < this.ad.count; m++) {
                        if (this.g.i(j.targetRow, this.ad._inner[m]) == 0) {
                            l = m;
                            break;
                        }
                    }
                    if (l > c) {
                        d = this.aj(a, h, b);
                        g = true;
                        break;
                    }
                }
            }
            if (!g) {
                d = this.ai(a, b, true);
                g = true;
            }
        }
        return d;
    }
    get af() {
        return this.l.n;
    }
    at() {
        if (this.ae.count == 0) {
            return;
        }
        let a = null;
        let b = this.a();
        let c = this.b();
        let d = true;
        let e = this.ab;
        let f = 0;
        for (f = 0; f < this.ae.count; f++) {
            let g = this.ae._inner[f];
            if (g == null) {
                continue;
            }
            if (d) {
                a = g;
                this.a2(f, a, c);
                if (this.w) {
                    this.ar(f, a, b, c);
                    this.l.s();
                }
                f++;
                d = false;
            }
            else {
                if (e.compare(a, g) != 0) {
                    if (this.v) {
                        this.aq(f, a, b, c);
                        f++;
                    }
                    this.ap(f - 1, a, c);
                    a = g;
                    this.a2(f, a, b);
                    if (this.v) {
                        this.l.s();
                    }
                    if (this.w) {
                        this.ar(f, a, b, c);
                        this.l.s();
                    }
                    f++;
                }
                a = g;
            }
        }
        this.ap(f - 1, a, c);
    }
    a() {
        let a = new Array(this.o.k.count + this.p.k.count);
        let b = 0;
        for (let c = 0; c < this.o.k.count; c++) {
            a[b] = this.o.k.item(c).propertyName;
            b++;
        }
        for (let d = 0; d < this.p.k.count; d++) {
            a[b] = this.p.k.item(d).propertyName;
            b++;
        }
        return a;
    }
    b() {
        let a = new Array(this.o.k.count);
        let b = 0;
        for (let c = 0; c < this.o.k.count; c++) {
            a[b] = this.o.k.item(c).propertyName;
            b++;
        }
        return a;
    }
    ap(a, b, c) {
        this.l.r(a);
    }
    a1(a) {
        this.ad = new List$1(Array_$type, 0);
        for (let b = 0; b < a.count; b++) {
            this.ad.add(a._inner[b]);
        }
    }
    a2(a, b, c) {
        this.l.y(a, this.d, b, c);
    }
    aq(a, b, c, d) {
        let e = new DataSourceSpecialRow();
        for (let f = 0; f < c.length; f++) {
            e.setValue(c[f], this.d.getItemProperty(b, c[f]));
            if (f < d.length) {
                e.setSectionValue(d[f], this.d.getItemProperty(b, d[f]));
            }
        }
        e.rowType = 2;
        this.ae.insert1(a, e);
    }
    ar(a, b, c, d) {
        let e = new DataSourceSpecialRow();
        for (let f = 0; f < c.length; f++) {
            e.setValue(c[f], this.d.getItemProperty(b, c[f]));
            if (f < d.length) {
                e.setSectionValue(d[f], this.d.getItemProperty(b, d[f]));
            }
        }
        e.rowType = 1;
        this.ae.insert1(a, e);
    }
    au() {
        this.ae.clear();
        if (this.n != null) {
            this.n.notifyClearItems();
        }
    }
    notifySetItem(a, b, c) {
        if (this.aa != null) {
            this.az(b);
            this.an(c);
        }
        else {
            this.a0(a, b);
            this.ao(a, c);
        }
    }
    ao(a, b) {
        if (!this.y(b)) {
            return;
        }
        let c = this.ah(a);
        this.av(c, b);
    }
    av(a, b) {
        this.as(a, b);
        this.a4(a, b);
    }
    as(a, b) {
        if (this.q) {
            let c = this.l.d(a);
            if (c == null) {
                c = this.l.c();
            }
            if (c.g == a) {
                if (!this.r(c, b, this.ae._inner[a])) {
                    c = this.l.d(a - 1);
                    if (c == null) {
                        c = this.l.b();
                        c.g++;
                    }
                }
                else {
                    let d = this.w ? 1 : 0;
                    a += d + c.d;
                }
            }
            c.e++;
            this.l.v(c, 1, 0);
        }
        this.ae.insert1(a, b);
        if (this.n != null) {
            this.n.notifyInsertItem(a, b);
        }
    }
    a4(a, b) {
        let c = null;
        if (this.q) {
            c = this.l.d(a);
        }
        else {
            c = this.l.n._inner[0];
        }
        if (c == null) {
            if (this.q && a == 0) {
                c = this.l.b();
            }
            else {
                c = this.l.c();
            }
        }
        if (this.r(c, b, this.ae._inner[c.g])) {
            if (this.x) {
                let d = this.al(c, b);
                if (d != -1 && this.n != null) {
                    this.n.notifyInsertItem(d, this.ae._inner[d]);
                }
            }
        }
        else {
            let e = false;
            if (a <= c.g) {
                e = true;
            }
            let f = 0;
            let g = null;
            let h = null;
            let i = this.a();
            let j = this.b();
            if (this.w) {
                f++;
                this.ar(a, b, i, j);
                g = this.ae._inner[a];
                c.e--;
            }
            let k = new SectionData();
            k.g = a;
            k.e = a + 1;
            if (this.x) {
                for (let l = 0; l < this.ad.count; l++) {
                    if (this.g.i(b, this.ad._inner[l]) == 0) {
                        this.ai(k, b, false);
                        f++;
                        break;
                    }
                }
            }
            k.a = j;
            let m = this.c(j, b);
            k.b = m;
            let n = c.f + 1;
            if (e) {
                n = c.f;
            }
            if (this.v) {
                f++;
                this.aq(a + (f - 1), b, i, j);
                h = this.ae._inner[a + (f - 1)];
            }
            k.f = n;
            this.l.t(n, k);
            this.l.w(k, f, f);
            if (this.n != null) {
                if (g != null) {
                    this.n.notifyInsertItem(a, g);
                }
                if (h != null) {
                    this.n.notifyInsertItem(a + (f - 1), h);
                }
            }
        }
    }
    r(a, b, c) {
        if (this.o.k.count == 0) {
            return true;
        }
        if (this.ab.compare(b, c) == 0) {
            return true;
        }
        return false;
    }
    c(a, b) {
        let c = new Array(a.length);
        for (let d = 0; d < c.length; d++) {
            c[d] = this.d.getItemProperty(b, a[d]);
        }
        return c;
    }
    u(a, b) {
        if (a == null && b == null) {
            return true;
        }
        if (a == null && b != null) {
            return false;
        }
        if (a != null && b == null) {
            return false;
        }
        return Base.equalsStatic(a, b);
    }
    ah(a) {
        if (this.o.k.count == 0 && this.ad.count == 0 && this.h == null && this.e.actualCount == this.ae.count) {
            return a;
        }
        let b = 0;
        let c = 0;
        let d = this.ae.count;
        while (b < a && c < d) {
            while (c < d) {
                let e = this.ae._inner[c];
                let f = false;
                let viewItem_ = e;
                if ((viewItem_.$$isSpecialRow !== undefined)) {
                    f = true;
                }
                if (!f) {
                    break;
                }
                c++;
            }
            let g = this.e.getItemAtIndex(b);
            if (this.u(g, this.ae._inner[c])) {
                c++;
                b++;
            }
            else {
                b++;
            }
        }
        return c;
    }
    a0(a, b) {
        let c = this.ah(a);
        if (c < this.ae.count) {
            if (this.u(b, this.ae._inner[c])) {
                this.aw(c, b);
            }
        }
    }
    aw(a, b) {
        this.ae.removeAt(a);
        if (this.n != null) {
            this.n.notifyRemoveItem(a, b);
        }
        this.a5(a, b);
    }
    a5(a, b) {
        let c = null;
        if (this.q) {
            c = this.l.d(a);
        }
        else {
            c = this.l.n._inner[0];
        }
        if (c != null) {
            c.e--;
            this.l.v(c, -1, 0);
            if (this.x) {
                for (let d = 0; d < c.d; d++) {
                    let e = 0;
                    if (this.w) {
                        e = 1;
                    }
                    let f = this.ae._inner[c.g + d + e];
                    let g = null;
                    let item_ = f;
                    if ((item_ != null && item_.$$isSpecialRow !== undefined)) {
                        g = f;
                    }
                    if (g != null) {
                        if (g.targetRow == b) {
                            this.ae.removeAt(c.g + d + e);
                            c.e--;
                            c.d--;
                            c.c--;
                            this.l.v(c, -1, -1);
                            if (this.n != null) {
                                this.n.notifyRemoveItem(c.g + d + e, g);
                            }
                        }
                    }
                }
            }
            if (this.q && this.s(c)) {
                let h = 0;
                let i = null;
                let j = null;
                if (this.w) {
                    i = this.ae._inner[c.g];
                    this.ae.removeAt(c.g);
                    h++;
                }
                if (this.v) {
                    j = this.ae._inner[c.e];
                    this.ae.removeAt(c.e);
                    h++;
                }
                this.l.x(c.f);
                this.l.u(c, -h, -h);
                if (this.n != null) {
                    if (i != null) {
                        this.n.notifyRemoveItem(c.g, i);
                    }
                    if (j != null) {
                        this.n.notifyRemoveItem(c.e, j);
                    }
                }
            }
        }
    }
    s(a) {
        let b = (a.e - a.g) + 1;
        if (b > 2) {
            return false;
        }
        for (let c = a.g; c <= a.e; c++) {
            if (this.d.getRowType(c) == 0) {
                return false;
            }
        }
        return true;
    }
    an(a) {
        if (this.y(a)) {
            let b = this.ae.g(a, this.aa);
            if (b < 0) {
                b = ~b;
            }
            this.av(b, a);
        }
    }
    ax(a) {
        this.ad.add(a);
        let b = this.d.indexOfKey(a);
        let c = this.d.getItemAtIndex(b);
        if (b == -1) {
            return;
        }
        if (this.x) {
            let d = this.l.d(b);
            let e = this.al(d, this.ae._inner[b]);
            if (this.n != null) {
                this.n.notifyInsertItem(e, this.ae._inner[e]);
            }
        }
    }
    a3(a) {
        if (this.ad.remove(a)) {
            let b = this.d.indexOfKey(a);
            let c = this.d.getItemAtIndex(b);
            if (b == -1) {
                return;
            }
            let d = this.l.d(b);
            let e = d.g;
            if (this.w) {
                e += 1;
            }
            if (this.x) {
                let f = this.j(e, this.ae._inner[b], d.d, this.a());
                if (f != null) {
                    d.e--;
                    d.d--;
                    d.c--;
                    this.l.v(d, -1, -1);
                    if (this.n != null) {
                        this.n.notifyRemoveItem(f.a, f.item);
                    }
                }
            }
        }
    }
    j(a, b, c, d) {
        for (let e = a + (c - 1); e >= a; e--) {
            if (typeCast(DataSourceSpecialRow.$, this.ae._inner[e]) !== null) {
                let f = this.ae._inner[e];
                if (f.rowType == 3) {
                    let g = f.targetRow;
                    if (g == b) {
                        this.ae.removeAt(e);
                        return ((() => {
                            let $ret = new RemovedShiftedRowInfo();
                            $ret.item = f;
                            $ret.a = e;
                            return $ret;
                        })());
                    }
                }
            }
        }
        return null;
    }
    az(a) {
        let b = this.ae.g(a, this.aa);
        if (b >= 0) {
            let c = this.ae.count;
            let d = 0;
            while (d < c) {
                let e = b - d;
                let f = b + d;
                if (e < 0 && f > c - 1) {
                    break;
                }
                if (e >= 0) {
                    if (this.ae._inner[e] != null && Base.equalsStatic(this.ae._inner[e], a)) {
                        b = e;
                        break;
                    }
                }
                if (f < c) {
                    if (this.ae._inner[f] != null && Base.equalsStatic(this.ae._inner[f], a)) {
                        b = f;
                        break;
                    }
                }
                d++;
            }
            if (b < 0 || b > c - 1) {
                return;
            }
            let g = this.ae._inner[b];
            if (g == null && a == null) {
                this.ae.removeAt(b);
                this.m.notifyRemoveItem(b, a);
                this.a5(b, a);
                return;
            }
            if (g == null) {
                return;
            }
            if (Base.equalsStatic(g, a)) {
                this.ae.removeAt(b);
                this.m.notifyRemoveItem(b, a);
                this.a5(b, a);
            }
        }
        else {
            let h = this.ae.count;
            for (let i = 0; i < h; i++) {
                let j = this.ae._inner[i];
                if (j == null && a == null) {
                    this.ae.removeAt(i);
                    break;
                }
                if (j == null) {
                    continue;
                }
                if (Base.equalsStatic(j, a)) {
                    this.ae.removeAt(i);
                    this.m.notifyRemoveItem(i, a);
                    this.a5(i, a);
                    break;
                }
            }
        }
    }
    y(a) {
        if (this.h == null) {
            return true;
        }
        return this.h(a);
    }
    notifyClearItems() {
    }
    notifyInsertItem(a, b) {
        if (this.aa != null) {
            this.an(b);
        }
        else {
            this.ao(a, b);
        }
    }
    notifyRemoveItem(a, b) {
        if (this.aa != null) {
            this.az(b);
        }
        else {
            this.a0(a, b);
        }
    }
}
RearrangedListView.$t = markType(RearrangedListView, 'RearrangedListView', Base.$, [ISupportsDataChangeNotifications_$type]);
//# sourceMappingURL=RearrangedListView.js.map