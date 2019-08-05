/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { List$1 } from "./List$1";
import { SectionData } from "./SectionData";
import { SectionDataStartIndexComparer } from "./SectionDataStartIndexComparer";
import { SectionDataUndisplacedStartIndexComparer } from "./SectionDataUndisplacedStartIndexComparer";
import { SectionSearchData } from "./SectionSearchData";
/**
 * @hidden
 */
export class SectionMap extends Base {
    constructor() {
        super();
        this.a = new SectionData();
        this.g = new SectionDataStartIndexComparer();
        this.h = new SectionDataUndisplacedStartIndexComparer();
        this.m = new List$1(SectionData.$, 0);
        this.j = new SectionSearchData();
        this.i = new SectionSearchData();
    }
    get n() {
        return this.m;
    }
    get o() {
        return this.m._inner[this.m.count - 1].e;
    }
    get l() {
        return this.n.count > 0;
    }
    k(a, b, c) {
        if (a >= 0 && a < this.m.count) {
            let d = this.m._inner[a];
            if (b >= d.g && b <= d.e) {
                c.c++;
                if (c.c >= c.a.length) {
                    c.c = 0;
                }
                c.b[c.c] = a;
                c.a[c.c] = d;
                return true;
            }
        }
        return false;
    }
    d(a) {
        return this.e(a, this.g, this.j);
    }
    e(a, b, c) {
        if (c.a == null) {
            c.a = new Array(5);
            c.b = new Array(5);
            for (let d = 0; d < c.a.length; d++) {
                c.a[d] = null;
                c.b[d] = -1;
            }
        }
        if (c.a[c.c] != null) {
            if (a >= c.a[c.c].g && a <= c.a[c.c].e) {
                return c.a[c.c];
            }
            for (let e = 0; e < c.a.length; e++) {
                if (c.a[e] != null) {
                    if (a >= c.a[e].g && a <= c.a[e].e) {
                        c.c = e;
                        return c.a[c.c];
                    }
                }
            }
            let f = c.b[c.c] + 1;
            if (this.k(f, a, c)) {
                return c.a[c.c];
            }
            f = c.b[c.c] - 1;
            if (this.k(f, a, c)) {
                return c.a[c.c];
            }
        }
        this.a.g = a;
        let g = this.m.g(this.a, b);
        if (g < 0) {
            g = ~g;
            g--;
        }
        if (this.k(g, a, c)) {
            return c.a[c.c];
        }
        if (this.k(g + 1, a, c)) {
            return c.a[c.c];
        }
        if (this.k(g - 1, a, c)) {
            return c.a[c.c];
        }
        return null;
    }
    p() {
        this.m.clear();
        this.j.a = null;
        this.i.a = null;
    }
    v(a, b, c) {
        for (let d = a.f + 1; d < this.m.count; d++) {
            let e = this.m._inner[d];
            e.c += c;
            e.g += b;
            e.e += b;
        }
    }
    u(a, b, c) {
        for (let d = a.f; d < this.m.count; d++) {
            let e = this.m._inner[d];
            e.c += c;
            e.g += b;
            e.e += b;
            e.f = d;
        }
    }
    r(a) {
        if (this.m.count == 0) {
            return;
        }
        let b = this.m._inner[this.m.count - 1];
        b.e = a;
    }
    y(a, b, c, d) {
        let e = new SectionData();
        e.g = a;
        e.a = d;
        e.f = this.m.count;
        if (this.m.count > 0) {
            e.c = this.m._inner[this.m.count - 1].c;
        }
        let f = new Array(d.length);
        for (let g = 0; g < f.length; g++) {
            f[g] = b.getItemProperty(c, d[g]);
        }
        e.b = f;
        this.m.add(e);
    }
    w(a, b, c) {
        for (let d = a.f + 1; d < this.m.count; d++) {
            this.m._inner[d].f = d;
            this.m._inner[d].c += c;
            this.m._inner[d].g += b;
            this.m._inner[d].e += b;
        }
    }
    t(a, b) {
        this.m.insert(a, b);
    }
    x(a) {
        if (this.j != null) {
            let b = this.j;
            SectionMap.q(a, b);
        }
        if (this.i != null) {
            let c = this.i;
            SectionMap.q(a, c);
        }
        this.m.removeAt(a);
    }
    static q(a, b) {
        if (b.a != null) {
            for (let c = 0; c < b.a.length; c++) {
                if (b.a[c] != null) {
                    if (b.a[c].f == a) {
                        b.a[c] = null;
                    }
                }
            }
        }
    }
    c() {
        return this.m._inner[this.m.count - 1];
    }
    b() {
        return this.m._inner[0];
    }
    s() {
        this.m._inner[this.m.count - 1].c++;
    }
    f(a) {
        return this.e(a, this.h, this.i);
    }
}
SectionMap.$t = markType(SectionMap, 'SectionMap');
//# sourceMappingURL=SectionMap.js.map