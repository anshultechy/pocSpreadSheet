/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { DependencyObject } from "./DependencyObject";
import { TriangulatorContext } from "./TriangulatorContext";
import { Number_$type, Point_$type, fromEnum, runOn, markType } from "./type";
import { List$1 } from "./List$1";
import { Triangle } from "./Triangle";
import { HashSet$1 } from "./HashSet$1";
import { LinkedList$1 } from "./LinkedList$1";
import { HalfEdgeSet } from "./HalfEdgeSet";
import { PointTester } from "./PointTester";
import { PointComparer } from "./PointComparer";
import { TriangulationStatusEventArgs } from "./TriangulationStatusEventArgs";
import { HalfEdge } from "./HalfEdge";
import { truncate, isNaN_, isInfinity } from "./number";
/**
 * @hidden
 */
export class Triangulator extends DependencyObject {
    constructor(a, b, c) {
        super();
        this.o = 0;
        this.l = null;
        this.m = null;
        this.k = null;
        this.p = 0;
        this.triangulationStatusChanged = null;
        this.o = a;
        this.l = b;
        this.m = c;
    }
    y() {
        {
            this.v();
            if (this.k != null) {
                this.k.c = true;
            }
            this.u();
        }
    }
    x() {
        {
            this.v();
            if (this.k != null) {
                this.k.c = false;
            }
            this.u();
        }
    }
    v() {
        let a = this.o;
        let b = this.l;
        let c = this.m;
        let d = new List$1(Triangle.$, 0);
        let e = ((() => {
            let $ret = new List$1(Number_$type, 0);
            $ret.h = a;
            return $ret;
        })());
        let f = new HashSet$1(Point_$type, 2, new PointComparer());
        for (let g = 0; g < a; ++g) {
            let h = b.item(g), i = c.item(g);
            if (isNaN_(h) || isNaN_(i) || isInfinity(h) || isInfinity(i)) {
                continue;
            }
            let j = { $type: Point_$type, x: h, y: i };
            if (f.contains(j)) {
                continue;
            }
            f.add_1(j);
            e.add(g);
        }
        a = e.count;
        if (a >= 3) {
            let k = (l, m) => {
                if (b.item(l) < b.item(m)) {
                    return -1;
                }
                else if (b.item(l) > b.item(m)) {
                    return 1;
                }
                if (c.item(l) < c.item(m)) {
                    return -1;
                }
                else if (c.item(l) > c.item(m)) {
                    return 1;
                }
                return 0;
            };
            e.aa(k);
            let l = b.item(e._inner[0]);
            let m = b.item(e._inner[a - 1]);
            let n = c.item(e._inner[0]);
            let o = n;
            for (let p = 1; p < a; p++) {
                let q = c.item(e._inner[p]);
                if (isNaN_(q)) {
                    continue;
                }
                n = Math.min(n, q);
                o = Math.max(o, q);
            }
            let r = m - l;
            let s = o - n;
            let t = Math.max(r, s);
            let u = (m + l) / 2;
            let v = (o + n) / 2;
            let w = { $type: Point_$type, x: u - 20 * t, y: v - t };
            let x = { $type: Point_$type, x: u, y: v + 20 * t };
            let y = { $type: Point_$type, x: u + 20 * t, y: v - t };
            let z = new LinkedList$1(Triangle.$);
            let aa = new LinkedList$1(Triangle.$);
            let ab = new HalfEdgeSet();
            let ac = new PointTester();
            z.e(((() => {
                let $ret = new Triangle();
                $ret.v1 = a;
                $ret.v2 = a + 1;
                $ret.v3 = a + 2;
                return $ret;
            })()));
            let ad = new TriangulatorContext();
            ad.j = a;
            ad.n = w;
            ad.o = x;
            ad.p = y;
            ad.f = aa;
            ad.a = ab;
            ad.h = e;
            ad.b = ac;
            ad.i = d;
            ad.g = z;
            ad.d = b;
            ad.e = c;
            let ae = 1;
            if (a > 3000) {
                ae = 20;
            }
            ad.m = truncate(Math.ceil(a / ae));
            ad.l = 0;
            ad.k = ad.m;
            this.p = 0;
            this.t();
            this.k = ad;
        }
    }
    t() {
        this.s();
    }
    s() {
        if (this.triangulationStatusChanged != null) {
            this.triangulationStatusChanged(this, new TriangulationStatusEventArgs(this.p));
        }
    }
    n() {
        if (this.k == null) {
            return null;
        }
        return this.k.i;
    }
    w() {
        {
            if (this.k == null) {
                return;
            }
            let a = this.k;
            let b = this.k.j;
            let c = this.k.d;
            let d = this.k.e;
            let e = this.k.h;
            let f = this.k.n;
            let g = this.k.o;
            let h = this.k.p;
            let i = this.k.i;
            let j = this.k.g;
            let k = this.k.f;
            let l = this.k.b;
            let m = this.k.a;
            let n = this.k.l;
            let o = this.k.k;
            let p;
            let q;
            let r;
            let s;
            let t;
            let u;
            let v;
            let w;
            let x;
            let y;
            let z;
            let aa;
            for (let ab = n; ab < o; ++ab) {
                m.e();
                if (ab < b) {
                    p = c.item(e._inner[ab]);
                    q = d.item(e._inner[ab]);
                }
                else if (ab == b) {
                    p = f.x;
                    q = f.y;
                }
                else if (ab == b + 1) {
                    p = g.x;
                    q = g.y;
                }
                else {
                    p = h.x;
                    q = h.y;
                }
                let ac = null;
                for (let ad = j.c; ad != null; ad = ac) {
                    ac = ad.a;
                    aa = ad.c;
                    r = aa.v1;
                    u = aa.v2;
                    x = aa.v3;
                    if (r < b) {
                        s = c.item(e._inner[r]);
                        t = d.item(e._inner[r]);
                    }
                    else if (r == b) {
                        s = f.x;
                        t = f.y;
                    }
                    else if (r == b + 1) {
                        s = g.x;
                        t = g.y;
                    }
                    else {
                        s = h.x;
                        t = h.y;
                    }
                    if (u < b) {
                        v = c.item(e._inner[u]);
                        w = d.item(e._inner[u]);
                    }
                    else if (u == b) {
                        v = f.x;
                        w = f.y;
                    }
                    else if (u == b + 1) {
                        v = g.x;
                        w = g.y;
                    }
                    else {
                        v = h.x;
                        w = h.y;
                    }
                    if (x < b) {
                        y = c.item(e._inner[x]);
                        z = d.item(e._inner[x]);
                    }
                    else if (x == b) {
                        y = f.x;
                        z = f.y;
                    }
                    else if (x == b + 1) {
                        y = g.x;
                        z = g.y;
                    }
                    else {
                        y = h.x;
                        z = h.y;
                    }
                    l.c(p, q, s, t, v, w, y, z);
                    if (l.a) {
                        k.f(aa);
                        j.h(ad);
                    }
                    if (l.b) {
                        let ae;
                        ae = new HalfEdge(r, u);
                        if (m.a(ae)) {
                            m.f(ae);
                        }
                        else {
                            m.d(ae);
                        }
                        ae = new HalfEdge(u, x);
                        if (m.a(ae)) {
                            m.f(ae);
                        }
                        else {
                            m.d(ae);
                        }
                        ae = new HalfEdge(x, r);
                        if (m.a(ae)) {
                            m.f(ae);
                        }
                        else {
                            m.d(ae);
                        }
                        j.h(ad);
                    }
                }
                for (let af of fromEnum(m)) {
                    let ag = new Triangle();
                    ag.v1 = af.a;
                    ag.v2 = af.b;
                    ag.v3 = ab;
                    j.f(ag);
                }
            }
            if (o == b) {
                for (let ah = k.c; ah != null; ah = ah.a) {
                    aa = ah.c;
                    if (aa.v1 < b && aa.v2 < b && aa.v3 < b) {
                        i.add(((() => {
                            let $ret = new Triangle();
                            $ret.v1 = e._inner[aa.v1];
                            $ret.v2 = e._inner[aa.v2];
                            $ret.v3 = e._inner[aa.v3];
                            return $ret;
                        })()));
                    }
                }
                for (let ai = j.c; ai != null; ai = ai.a) {
                    aa = ai.c;
                    if (aa.v1 < b && aa.v2 < b && aa.v3 < b) {
                        i.add(((() => {
                            let $ret = new Triangle();
                            $ret.v1 = e._inner[aa.v1];
                            $ret.v2 = e._inner[aa.v2];
                            $ret.v3 = e._inner[aa.v3];
                            return $ret;
                        })()));
                    }
                }
                this.p = 100;
                this.t();
            }
            else {
                n = o;
                o += a.m;
                if (o > b) {
                    o = b;
                }
                a.l = n;
                a.k = o;
                this.p += truncate(Math.floor(100 / 20));
                this.t();
                this.u();
            }
        }
    }
    r() {
        {
            this.k = null;
        }
    }
    u() {
        {
            if (this.k != null && this.k.c) {
                window.setTimeout(runOn(this, this.w), 0);
            }
            else {
                this.w();
            }
        }
    }
    get q() {
        return this.p;
    }
}
Triangulator.$t = markType(Triangulator, 'Triangulator', DependencyObject.$);
//# sourceMappingURL=Triangulator.js.map