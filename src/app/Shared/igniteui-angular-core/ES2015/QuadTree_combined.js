/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { QuadTreeBoundingBox } from "./QuadTreeBoundingBox";
import { List$1 } from "./List$1";
import { HashSet$1 } from "./HashSet$1";
import { LinkedList$1 } from "./LinkedList$1";
import { QuadTreeForceVector } from "./QuadTreeForceVector";
/**
 * @hidden
 */
export class QuadTree extends Base {
    constructor(a, b, c, d) {
        super();
        this.b = null;
        this.f = 0;
        this.i = 0;
        this.b = new QuadTreeNode();
        this.b.b = this;
        this.b.c = new QuadTreeBoundingBox();
        let e = Math.max(a, b);
        this.b.c.b = e / 2;
        this.b.c.c = e / 2;
        this.b.c.e = e / 2;
        this.b.c.d = e / 2;
        this.f = d;
        this.i = c;
    }
    c(a) {
        return this.b.i(a);
    }
    d(a) {
        return this.b.k(a);
    }
    e(a) {
        let b = new List$1(QuadTreeNode.$, 0);
        this.b.x(a, b);
        return b;
    }
    j() {
        this.b.w();
    }
    k() {
        this.b.z();
    }
    g() {
        return this.h(this.b, new HashSet$1(QuadTreeBoundingBox.$, 0));
    }
    h(a, b) {
        if (a.j) {
            let c = 0;
            let d = a.l.c;
            while (d != null) {
                if (!b.contains(d.c)) {
                    c += 1;
                    b.add_1(d.c);
                }
                d = d.a;
            }
            return c;
        }
        let e = this.h(a.f, b);
        e += this.h(a.e, b);
        e += this.h(a.h, b);
        e += this.h(a.g, b);
        return e;
    }
    a(a, b, c) {
        return this.b.d(a, b, c);
    }
}
QuadTree.$t = markType(QuadTree, 'QuadTree');
/**
 * @hidden
 */
export class QuadTreeNode extends Base {
    constructor() {
        super();
        this.b = null;
        this.l = null;
        this.t = 0;
        this.c = null;
        this.q = 0;
        this.a = null;
        this.m = 0;
        this.n = 0;
        this.o = 0;
        this.m = 0;
        this.n = 0;
        this.o = 0;
        this.l = new LinkedList$1(QuadTreeBoundingBox.$);
        this.a = new Array(4);
        this.c = new QuadTreeBoundingBox();
        for (let a = 0; a < 4; a++) {
            this.a[a] = null;
        }
    }
    k(a) {
        if (!this.c.a(a)) {
            return false;
        }
        let b = this.f == null && this.e == null && this.h == null && this.g == null;
        if (b) {
            let c = this.l.c;
            while (c != null) {
                if (c.c == a) {
                    this.l.h(c);
                    this.t--;
                    return true;
                }
                c = c.a;
            }
            return false;
        }
        this.f.k(a);
        this.e.k(a);
        this.h.k(a);
        this.g.k(a);
        return false;
    }
    get j() {
        return this.f == null && this.e == null && this.h == null && this.g == null;
    }
    x(a, b) {
        if (!this.c.a(a)) {
            return;
        }
        if (this.j) {
            b.add(this);
            return;
        }
        this.f.x(a, b);
        this.e.x(a, b);
        this.h.x(a, b);
        this.g.x(a, b);
    }
    w() {
        if (this.f != null) {
            this.f.w();
        }
        if (this.e != null) {
            this.e.w();
        }
        if (this.h != null) {
            this.h.w();
        }
        if (this.g != null) {
            this.h.w();
        }
        if (this.f.j && this.f.t == 0 && this.e.j && this.e.t == 0 && this.h.j && this.h.t == 0 && this.g.j && this.g.t == 0) {
            this.f = this.e = this.h = this.g = null;
            return;
        }
    }
    i(a) {
        if (!this.c.a(a)) {
            return false;
        }
        let b = this.f == null && this.e == null && this.h == null && this.g == null;
        if (b && this.t < this.b.f) {
            this.l.f(a);
            this.t++;
            return true;
        }
        else if (b && this.q < this.b.i) {
            this.y();
        }
        else if (b) {
            this.l.f(a);
            this.t++;
            return true;
        }
        let c = this.f.i(a);
        c = this.e.i(a) || c;
        c = this.h.i(a) || c;
        c = this.g.i(a) || c;
        return c;
    }
    y() {
        this.f = new QuadTreeNode();
        this.e = new QuadTreeNode();
        this.h = new QuadTreeNode();
        this.g = new QuadTreeNode();
        let a = this.c.e / 2;
        this.f.c.b = this.c.b - a;
        this.f.c.c = this.c.c - a;
        this.e.c.b = this.c.b + a;
        this.e.c.c = this.c.c - a;
        this.h.c.b = this.c.b - a;
        this.h.c.c = this.c.c + a;
        this.g.c.b = this.c.b + a;
        this.g.c.c = this.c.c + a;
        for (let b = 0; b < 4; b++) {
            this.a[b].q = this.q + 1;
            this.a[b].c.e = a;
            this.a[b].c.d = a;
            this.a[b].b = this.b;
        }
        let c = this.l.c;
        while (c != null) {
            let d = c.c;
            this.f.i(d);
            this.e.i(d);
            this.h.i(d);
            this.g.i(d);
            c = c.a;
        }
        this.l.g();
        this.t = 0;
    }
    z() {
        if (this.j) {
            let a = 0;
            let b = 0;
            let c = this.l.c;
            while (c != null) {
                let d = c.c;
                a += d.b;
                b += d.c;
                c = c.a;
            }
            if (this.t == 0) {
                this.m = 0;
                this.n = 0;
                this.o = 0;
            }
            else {
                this.m = a / this.t;
                this.n = b / this.t;
                this.o = this.t;
            }
        }
        else {
            this.f.z();
            this.h.z();
            this.e.z();
            this.g.z();
            let e = 0;
            let f = 0;
            let g = 0;
            for (let h = 0; h < 4; h++) {
                g += this.a[h].o;
                e += this.a[h].m * this.a[h].o;
                f += this.a[h].n * this.a[h].o;
            }
            if (this.o > 0) {
                this.m = e / g;
                this.n = f / g;
            }
            this.o = g;
        }
    }
    d(a, b, c) {
        let d = Math.sqrt((a - this.m) * (a - this.m) + (b - this.n) * (b - this.n));
        let e = this.c.e * 2;
        if (e / d < c || this.j) {
            let f = (a - this.m) * this.o / (d * d);
            let g = (b - this.n) * this.o / (d * d);
            return ((() => {
                let $ret = new QuadTreeForceVector();
                $ret.a = f;
                $ret.b = g;
                return $ret;
            })());
        }
        else {
            let h = 0;
            let i = 0;
            for (let j = 0; j < 4; j++) {
                let k = this.a[j].d(a, b, c);
                h += k.a;
                i += k.b;
            }
            return ((() => {
                let $ret = new QuadTreeForceVector();
                $ret.a = h;
                $ret.b = i;
                return $ret;
            })());
        }
    }
    get f() {
        return this.a[0];
    }
    set f(a) {
        this.a[0] = a;
    }
    get e() {
        return this.a[1];
    }
    set e(a) {
        this.a[1] = a;
    }
    get h() {
        return this.a[2];
    }
    set h(a) {
        this.a[2] = a;
    }
    get g() {
        return this.a[3];
    }
    set g(a) {
        this.a[3] = a;
    }
}
QuadTreeNode.$t = markType(QuadTreeNode, 'QuadTreeNode');
//# sourceMappingURL=QuadTree_combined.js.map