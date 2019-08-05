/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, EventArgs, typeCast, Point_$type, runOn, Type, markType, PointUtil, delegateRemove, delegateCombine } from "../../igniteui-angular-core/ES2015/type";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { Rect } from "../../igniteui-angular-core/ES2015/Rect";
import { InputProxy } from "./InputProxy";
import { IComparer$1_$type } from "../../igniteui-angular-core/ES2015/IComparer$1";
import { isNaN_ } from "../../igniteui-angular-core/ES2015/number";
import { Stack$1 } from "../../igniteui-angular-core/ES2015/Stack$1";
import { dateMinValue, dateNow } from "../../igniteui-angular-core/ES2015/date";
import { timeSpanTotalMilliseconds } from "../../igniteui-angular-core/ES2015/timespan";
/**
 * @hidden
 */
export class VisualElement extends Base {
    constructor(a, b) {
        super();
        this.bc = 16 | 8 | 8192 | 32768;
        this.ax = 0;
        this.a2 = 0;
        this.av = 0;
        this.a3 = 0;
        this.h = null;
        this.bv = null;
        this.a7 = null;
        this.ap = null;
        this._parent = null;
        this.aq = null;
        this.a8 = 0;
        this.ar = null;
        this.bx = null;
        this.afterHasDescendantChanged = null;
        this.disposed = null;
        this._parent = a;
        this.bx = b;
        if (a != null) {
            if (a.aq == null) {
                a.aq = new List$1(VisualElement.$, 0);
            }
            a.aq.add(this);
            this.b1();
            a.t = true;
        }
    }
    get a9() {
        return this.aq != null ? this.aq.count : 0;
    }
    get i() {
        return (this.bc & 131072) != 0;
    }
    get bw() {
        return this.bv;
    }
    set bw(a) {
        if (a != this.bv) {
            this.bv = a;
            this.bc |= 1024;
            this.b1();
        }
    }
    get j() {
        return (this.bc & 32768) != 0;
    }
    set j(a) {
        if (a) {
            this.b1();
        }
        else {
            this.bc &= ~32768;
        }
    }
    get n() {
        return (this.bc & 4096) != 0;
    }
    set n(a) {
        this.b9(4096, a);
    }
    get o() {
        return (this.bc & 16384) != 0;
    }
    set o(a) {
        this.b9(16384, a);
    }
    get k() {
        return (this.bc & 1024) != 0;
    }
    set k(a) {
        this.b9(1024, a);
    }
    get l() {
        return (this.bc & 512) != 0;
    }
    set l(a) {
        if (this.ak(512, a) && a) {
            let b = this.afterHasDescendantChanged;
            if (b != null) {
                b(this, EventArgs.empty);
            }
            this.b1();
        }
    }
    get m() {
        return (this.bc & 32) != 0;
    }
    set m(a) {
        this.b9(32, a);
    }
    get p() {
        return (this.bc & 4) != 0;
    }
    set p(a) {
        this.b9(4, a);
    }
    get q() {
        return (this.bc & 1) != 0;
    }
    set q(a) {
        this.b9(1, a);
    }
    get r() {
        return (this.bc & 64) != 0;
    }
    set r(a) {
        this.b9(64, a);
    }
    get s() {
        return (this.bc & 2048) != 0;
    }
    set s(a) {
        this.aj(2048, 4096, a);
    }
    get t() {
        return (this.bc & 65536) != 0;
    }
    set t(a) {
        this.b9(65536, a);
        if (a) {
            this.bc |= 512;
        }
    }
    get u() {
        return (this.bc & 16) != 0;
    }
    set u(a) {
        if (this.aj(16, 32, a)) {
            this.b3();
        }
    }
    get v() {
        let a = this;
        while (a != null) {
            if (!a.u) {
                return false;
            }
            a = a._parent;
        }
        return true;
    }
    get w() {
        return (this.bc & 8) != 0;
    }
    set w(a) {
        this.ak(8, a);
    }
    get_x() {
        return false;
    }
    get x() {
        return this.get_x();
    }
    get y() {
        return (this.bc & 2) != 0;
    }
    set y(a) {
        this.aj(2, 4, a);
    }
    get ab() {
        return (this.bc & 256) != 0;
    }
    set ab(a) {
        if (this.ak(256, a)) {
            if (a) {
                this.b1();
                let b = typeCast(RootVisualElement.$, this.d());
                if (b != null && b.cr) {
                    b.dk(this);
                }
            }
            else {
                this.b5();
            }
        }
    }
    get ac() {
        return (this.bc & 8192) != 0;
    }
    set ac(a) {
        if (this.aj(8192, 16384, a) && this._parent != null) {
            this._parent.t = true;
        }
    }
    get_ay() {
        return this.h != null ? this.h.l : 0;
    }
    get ay() {
        return this.get_ay();
    }
    get_az() {
        return this.h != null ? this.h.m : 0;
    }
    get az() {
        return this.get_az();
    }
    get a0() {
        let a = this.av;
        if (this.h != null) {
            a += this.h.b.a;
        }
        return a;
    }
    get a1() {
        let a = this.a3;
        if (this.h != null) {
            a += this.h.b.d;
        }
        return a;
    }
    get parent() {
        return this._parent;
    }
    get aw() {
        let a = this.av;
        let b = this.h;
        if (b != null) {
            a -= b.a.a;
            a -= b.c.a;
            if (a < 0) {
                a = 0;
            }
        }
        return a;
    }
    get a4() {
        let a = this.a3;
        let b = this.h;
        if (b != null) {
            a -= b.a.d;
            a -= b.c.d;
            if (a < 0) {
                a = 0;
            }
        }
        return a;
    }
    get bu() {
        return this.a8;
    }
    set bu(a) {
        if (a != this.a8) {
            this.a8 = a;
            this.bc |= 64;
            if (this._parent != null) {
                this._parent.bc |= 128;
            }
            this.b1();
        }
    }
    by(a) {
        let b = a.visitElement(this);
        if (b && this.aq != null) {
            let c = 0;
            while (c < this.aq.count) {
                let d = this.aq._inner[c];
                d.by(a);
                if (d._parent != null) {
                    c++;
                }
            }
        }
    }
    at(a) {
        let b = a;
        let c = this.h;
        if (c != null) {
            b = c.g(b);
            b = c.e(b);
        }
        return b;
    }
    au(a) {
        let b = a;
        let c = this.h;
        if (c != null) {
            b = c.h(b);
            b = c.f(b);
        }
        return b;
    }
    bz() {
        if (this.aq != null) {
            for (let a = 0; a < this.aq.count; a++) {
                this.aq._inner[a].bz();
            }
        }
        let b = this.disposed;
        if (b != null) {
            b(this, EventArgs.empty);
        }
    }
    g($t) {
        let a = this._parent;
        while (a != null) {
            if (typeCast($t, a) !== null) {
                return a;
            }
            a = a._parent;
        }
        return null;
    }
    ce() {
        let a = this;
        let b = 0;
        let c = 0;
        while (a != null) {
            b += a.ax;
            c += a.a2;
            a = a._parent;
        }
        return new Rect(0, b, c, this.a3, this.av);
    }
    b(a) {
        return this.aq._inner[a];
    }
    cd(a = null) {
        let b = this;
        let c = 0;
        let d = 0;
        while (b != null && b != a) {
            c += b.ax;
            d += b.a2;
            b = b._parent;
        }
        return { $type: Point_$type, x: c, y: d };
    }
    c(a) {
        if (this.aq != null) {
            for (let b = 0, c = this.aq.count; b < c; b++) {
                let d = this.aq._inner[b];
                if (d.bx == a && d.ab) {
                    return d;
                }
            }
        }
        return null;
    }
    d() {
        let a = this;
        while (a._parent != null) {
            a = a._parent;
        }
        return a;
    }
    e(a, b, c) {
        let d = a;
        let e = b;
        if (!this.aa(d, e)) {
            return null;
        }
        let f = this;
        if (c && (this.bc & 24) != 24) {
            return null;
        }
        while (f != null) {
            let g = null;
            let h = f.as();
            if (h != null) {
                for (let i = h.count - 1; i >= 0; i--) {
                    let j = h._inner[i];
                    if (c && (j.bc & 24) != 24) {
                        continue;
                    }
                    let k = d - j.ax;
                    if (k >= 0 && k < j.a3) {
                        let l = e - j.a2;
                        if (l >= 0 && l < j.av) {
                            if (j.aa(k, l)) {
                                d = k;
                                e = l;
                                g = j;
                                break;
                            }
                        }
                    }
                }
            }
            if (g != null) {
                f = g;
            }
            else {
                break;
            }
        }
        return f;
    }
    as() {
        if ((this.bc & 128) != 0) {
            this.cc();
        }
        if (this.ar != null && this.ar.count > 0) {
            return this.ar;
        }
        return this.aq;
    }
    b0() {
        if ((this.bc & 131072) != 0) {
            let a = typeCast(RootVisualElement.$, this.d());
            let b = a.cj;
            while (b != null) {
                b.bc &= ~131072;
                b = b._parent;
            }
            a.db();
        }
    }
    z() {
        let a = this.y;
        let b = this._parent;
        while (!a && b != null) {
            a = b.y;
            b = b._parent;
        }
        return a;
    }
    aa(a, b) {
        if (!this.ac) {
            return false;
        }
        return a >= 0 && b >= 0 && a < this.a3 && b < this.av;
    }
    b1() {
        this.bc |= 32768;
        let a = this._parent;
        while (a != null && (a.bc & 512) == 0) {
            a.bc |= 512;
            let b = a.afterHasDescendantChanged;
            if (b != null) {
                b(a, EventArgs.empty);
            }
            a = a._parent;
        }
    }
    b2() {
    }
    b3() {
        if ((this.y && !this.v) || (!this.y && this.z() && this.v)) {
            let a = typeCast(RootVisualElement.$, this.d());
            if (a != null) {
                a.cs = true;
            }
        }
    }
    b4() {
    }
    ad(a) {
        return false;
    }
    ae(a) {
        return false;
    }
    af(a) {
        return false;
    }
    ag(a) {
        return false;
    }
    ah(a) {
        return false;
    }
    ai(a, b) {
        return false;
    }
    b5() {
        if (this.aq != null) {
            for (let a = 0, b = this.aq.count; a < b; a++) {
                let c = this.aq._inner[a];
                if ((c.bc & 256) == 0) {
                    c.b5();
                }
            }
        }
    }
    b6() {
        if (this.t) {
            this.t = false;
            let a = 0;
            let b = 0;
            let c = this.a3;
            let d = this.av;
            let e = this.h;
            if (e != null) {
                a += e.a.b + e.c.b;
                b += e.a.c + e.c.c;
                c -= e.a.d + e.c.d;
                d -= e.a.a + e.c.a;
                if (c < 0) {
                    c = 0;
                }
                if (d < 0) {
                    d = 0;
                }
            }
            this.b7(a, b, c, d);
        }
    }
    b7(a, b, c, d) {
    }
    b8() {
        if (this._parent != null) {
            if ((this.bc & 131072) != 0) {
                this.b0();
            }
            let a = this._parent;
            this._parent = null;
            if (a.aq.remove(this)) {
                if (a.ar != null) {
                    a.ar.remove(this);
                }
            }
        }
    }
    aj(a, b, c) {
        let d = this.ak(a, c);
        if (d) {
            this.b9(b, true);
        }
        return d;
    }
    ak(a, b) {
        let c = this.bc;
        if (b) {
            c |= a;
        }
        else {
            c &= ~a;
        }
        let d = c != this.bc;
        this.bc = c;
        return d;
    }
    b9(a, b) {
        if (this.ak(a, b) && b) {
            this.b1();
        }
    }
    am(a) {
        return this.al(a.x, a.y, a.width, a.height);
    }
    al(a, b, c, d) {
        let e = this.h;
        if (e != null) {
            return e.d(a, b, c, d, runOn(this, this.an));
        }
        else {
            return this.an(a, b, c, d);
        }
    }
    an(a, b, c, d) {
        if (a != this.ax || b != this.a2 || (c != this.a3 && (!isNaN_(c) || isNaN_(this.a3))) || (d != this.av && (!isNaN_(d) || isNaN_(this.av)))) {
            this.q = true;
            this.t = true;
            this.ax = a;
            this.a2 = b;
            this.a3 = c;
            this.av = d;
            return true;
        }
        return false;
    }
    ca(a, b, c, d = null) {
        let e = typeCast(RootVisualElement.$, this.d());
        if (e == null) {
            return;
        }
        if (e.cj != null) {
            e.cj.b0();
        }
        if (e.cj != null) {
            return;
        }
        let f = this;
        while (f != null) {
            f.bc |= 131072;
            f = f._parent;
        }
        e.di(this, a, b, c, d);
    }
    cb() {
        if (this.ab) {
            return;
        }
        if (this.t) {
            this.b6();
        }
        if (this.l && this.aq != null) {
            for (let a = 0, b = this.aq.count; a < b; a++) {
                this.aq._inner[a].cb();
            }
        }
    }
    cc() {
        if ((this.bc & 128) != 0) {
            this.bc &= ~128;
            if (this.ar != null) {
                this.ar.clear();
            }
            if (this.aq != null) {
                let a = 0;
                for (let b = 0, c = this.aq.count; b < c; b++) {
                    let d = this.aq._inner[b];
                    if (a > 0 || d.a8 != 0) {
                        let e;
                        if (a == 0) {
                            if (this.ar == null) {
                                this.ar = new List$1(VisualElement.$, 0);
                            }
                            for (let f = 0; f < b; f++) {
                                this.ar.add(this.aq._inner[f]);
                            }
                            a = this.ar.count;
                            e = d.a8 < 0 ? 0 : this.ar.count;
                        }
                        else {
                            e = this.ar.g(d, VisualElement_ZComparer._a);
                            if (e < 0) {
                                e = ~e;
                            }
                            else {
                                while (e < a && d.a8 == this.ar._inner[e].a8) {
                                    e++;
                                }
                            }
                        }
                        this.ar.insert(e, d);
                        a++;
                    }
                }
            }
        }
    }
    ao(a) {
        if (!a(this)) {
            return false;
        }
        if (this.aq != null) {
            for (let b = 0; b < this.aq.count; b++) {
                this.aq._inner[b].ao(a);
            }
        }
        return true;
    }
}
VisualElement.$t = markType(VisualElement, 'VisualElement');
/**
 * @hidden
 */
export let IVisualElementVisitor_$type = new Type(null, 'IVisualElementVisitor');
/**
 * @hidden
 */
export class RootVisualElement extends VisualElement {
    constructor(a) {
        super(null, a);
        this.cn = null;
        this.ch = null;
        this.cg = null;
        this.c7 = null;
        this.c0 = dateMinValue();
        this.c4 = 0;
        this.dn = PointUtil.create();
        this.dm = PointUtil.create();
        this.cf = null;
        this.ci = null;
        this.c1 = 0;
        this.c2 = 0;
        this.c3 = null;
        this.cs = false;
        this.cp = false;
        RootVisualElement.c5++;
        this.c7 = "VisualElementTreeWindow" + RootVisualElement.c5;
    }
    bz() {
        super.bz();
        this.co = null;
    }
    an(a, b, c, d) {
        let e = super.an(a, b, c, d);
        if (e && this.cn != null) {
            this.cn.bd.x = a;
            this.cn.bd.y = b;
            this.cn.bd.width = c;
            this.cn.bd.height = d;
        }
        return e;
    }
    get cj() {
        return this.ci;
    }
    get co() {
        return this.cn;
    }
    set co(a) {
        if (a != this.cn) {
            let b = this.cn;
            if (this.cn != null) {
                this.cy = false;
                let c = this.cn;
                c.onFlingStarted = delegateRemove(c.onFlingStarted, runOn(this, this.ct));
                let d = this.cn;
                d.onMouseDown = delegateRemove(d.onMouseDown, runOn(this, this.dc));
                let e = this.cn;
                e.onMouseEnter = delegateRemove(e.onMouseEnter, runOn(this, this.dd));
                let f = this.cn;
                f.onMouseLeave = delegateRemove(f.onMouseLeave, runOn(this, this.de));
                let g = this.cn;
                g.onMouseOver = delegateRemove(g.onMouseOver, runOn(this, this.df));
                let h = this.cn;
                h.onMouseUp = delegateRemove(h.onMouseUp, runOn(this, this.dg));
                let i = this.cn;
                i.onMouseWheel = delegateRemove(i.onMouseWheel, runOn(this, this.cv));
                this.cn.ai = this.c3;
            }
            this.cn = a;
            if (this.ch != null) {
                this.dk(this.ch);
            }
            if (a != null) {
                this.c3 = this.cn.ai;
                this.cn.ai = runOn(this, this.cz);
                let j = this.cn;
                j.onFlingStarted = delegateCombine(j.onFlingStarted, runOn(this, this.ct));
                let k = this.cn;
                k.onMouseDown = delegateCombine(k.onMouseDown, runOn(this, this.dc));
                let l = this.cn;
                l.onMouseEnter = delegateCombine(l.onMouseEnter, runOn(this, this.dd));
                let m = this.cn;
                m.onMouseLeave = delegateCombine(m.onMouseLeave, runOn(this, this.de));
                let n = this.cn;
                n.onMouseOver = delegateCombine(n.onMouseOver, runOn(this, this.df));
                let o = this.cn;
                o.onMouseUp = delegateCombine(o.onMouseUp, runOn(this, this.dg));
                let p = this.cn;
                p.onMouseWheel = delegateCombine(p.onMouseWheel, runOn(this, this.cv));
                this.cn.bd = new Rect(0, this.ax, this.a2, this.a3, this.av);
            }
            this.da(b, a);
        }
    }
    get cr() {
        return this.ch != null;
    }
    get cy() {
        return this.cp;
    }
    set cy(a) {
        if (a != this.cp) {
            this.cp = a;
        }
    }
    cq(a) {
        this.ch = a;
        this.cy = true;
        a.b2();
        return true;
    }
    cl(a, b, c, d, e) {
        if (a == null) {
            return null;
        }
        let f = b.x;
        let g = b.y;
        let h = a;
        while (h != null) {
            f -= h.ax;
            g -= h.a2;
            h = h._parent;
        }
        return new VisualElementInputProxy(this, c, this.cn, f, g, a, d, e);
    }
    cm(a, b, c, d) {
        let e = this.e(a.x, a.y, true);
        return this.cl(e, a, b, c, d);
    }
    ck(a, b) {
        let c = this.c6(a);
        let d = this.c6(b);
        if (c == 0 || d == 0) {
            return null;
        }
        while (c > d) {
            a = a._parent;
            c--;
        }
        while (d > c) {
            b = b._parent;
            d--;
        }
        while (b != a) {
            b = b._parent;
            a = a._parent;
        }
        return a;
    }
    c6(a) {
        let b = 0;
        while (a != null) {
            b++;
            a = a._parent;
        }
        return b;
    }
    c8(a) {
    }
    c9(a) {
        this.cu(a, 2, 1, 0);
    }
    da(a, b) {
    }
    ct(a, b, c) {
        return false;
    }
    db() {
        if (this.ci != null) {
            this.ci = null;
            this.cf.ac = false;
        }
    }
    cu(a, b, c, d, e = null) {
        this.c8(d);
        let f = d == 0;
        if (this.ch != null && this != this.ch.d()) {
            this.dk(this.ch);
        }
        let g = this.ch != null ? this.cl(this.ch, a, b, c, f) : this.cm(a, b, c, f);
        this.dj(a, g);
        if (g != null) {
            let h = g.h();
            let i = h.x;
            let j = h.y;
            let k = g.l;
            while (k != null) {
                switch (d) {
                    case 1:
                        if (k.ag(g)) {
                            return true;
                        }
                        break;
                    case 0:
                        if (k.ad(g)) {
                            return true;
                        }
                        break;
                    case 2:
                        if (k.ah(g)) {
                            return true;
                        }
                        break;
                    case 3:
                        if (k.ai(g, e)) {
                            return true;
                        }
                        break;
                }
                i += k.ax;
                j += k.a2;
                g.r(i, j, k._parent);
                k = k._parent;
            }
        }
        return false;
    }
    dc(a) {
        if (this.cw(a)) {
            return;
        }
        let b = dateNow();
        if (Math.abs(a.x - this.dn.x) < 8 && Math.abs(a.y - this.dn.y) < 8 && timeSpanTotalMilliseconds((+b - +(this.c0))) < 500) {
            this.c4++;
        }
        else {
            this.c4 = 1;
            this.c0 = b;
            this.dn.x = a.x;
            this.dn.y = a.y;
        }
        let c = this.cn.ag ? 2 : 1;
        this.cu(a, c, this.c4, 0);
    }
    df(a, b, c) {
        this.cu(a, 0, 0, 1);
    }
    de(a) {
        if (!this.cp) {
            this.dj(a, null);
        }
    }
    dd(a) {
        if (!this.cp) {
            let b = this.cm(a, 0, 0, false);
            this.dj(a, b);
        }
    }
    dg(a) {
        let b = this.cn.ag ? 2 : 1;
        this.dh(a, b);
    }
    dh(a, b) {
        if (this.ch == null && this.co != null && this.co.bd.containsPoint(a) && !this.co.ai(a)) {
            return;
        }
        this.cu(a, b, 1, 2);
    }
    cv(a, b) {
        b *= 10;
        if (this.cx(a, b)) {
            return true;
        }
        return this.cu(a, 0, 1, 3, b);
    }
    cw(a) {
        return false;
    }
    cx(a, b) {
        return false;
    }
    di(a, b, c, d, e) {
        this.ci = a;
        if (this.cf == null) {
            this.cf = new ToolTipVisualElement(this, "ToolTip");
            this.cf.bu = 10000;
        }
        this.c1 = c;
        this.c2 = d;
        this.cf.cq = b;
        this.cf.cr = e;
        let f = a;
        while (f != this) {
            c += f.ax;
            d += f.a2;
            f = f._parent;
        }
        this.cf.al(c, d, NaN, NaN);
        this.cf.ac = true;
    }
    dj(a, b) {
        if (PointUtil.notEquals(a, this.dm)) {
            this.dm.x = a.x;
            this.dm.y = a.y;
        }
        this.cs = false;
        let c = this.cg;
        let d = b;
        let e = d != null ? d.l : null;
        if (e == c) {
            return;
        }
        let f = this.ck(c, e);
        let g = new Stack$1(VisualElement.$);
        if (d == null) {
            d = new VisualElementInputProxy(this, 0, this.cn, a.x, a.y, this, 0, false);
        }
        let h = d.h().x;
        let i = d.h().y;
        let j = h;
        let k = i;
        let l = d.l;
        this.cg = e;
        while (e != null && e != f) {
            g.h(e);
            h += e.ax;
            i += e.a2;
            e = e._parent;
        }
        let m = h;
        let n = i;
        let o = c;
        while (o != null && o != f) {
            m -= o.ax;
            n -= o.a2;
            o = o._parent;
        }
        while (c != null && c != f) {
            d.r(m, n, c);
            c.af(d);
            c.y = false;
            m += c.ax;
            n += c.a2;
            c = c._parent;
        }
        while (g.f > 0) {
            let p = g.e();
            d.r(h, i, p);
            p.y = true;
            p.ae(d);
            h += p.ax;
            i += p.a2;
        }
        d.r(j, k, l);
    }
    dk(a) {
        if (this.ch == a) {
            this.ch = null;
            this.cy = false;
            a.b4();
        }
    }
    cz(a) {
        if (this.cr) {
            return true;
        }
        if (this.c3 != null && !this.c3(a)) {
            return false;
        }
        return true;
    }
    dl() {
        let a = this.cg == null ? null : this.cm(this.dm, 0, 0, false);
        this.dj(this.dm, a);
    }
}
RootVisualElement.$t = markType(RootVisualElement, 'RootVisualElement', VisualElement.$);
RootVisualElement.c5 = 0;
/**
 * @hidden
 */
export class ToolTipVisualElement extends VisualElement {
    constructor(a, b) {
        super(a, b);
        this.ch = false;
        this.cl = null;
        this.ci = false;
        this.cm = null;
        this.cf = null;
        this.cg = null;
        this.w = false;
        this.cg = new VisualElement(this, "ToolTipTitle");
        this.cf = new VisualElement(this, "ToolTipBody");
        this.cg.q = false;
        this.cf.q = false;
    }
    get cq() {
        return this.cl;
    }
    set cq(a) {
        if (a != this.cl) {
            this.cl = a;
            this.cj = true;
        }
    }
    get cj() {
        return this.ch;
    }
    set cj(a) {
        if (a != this.ch) {
            this.ch = a;
            if (a) {
                this.b1();
            }
        }
    }
    get cr() {
        return this.cm;
    }
    set cr(a) {
        if (a != this.cm) {
            this.cm = a;
            this.ck = true;
        }
    }
    get ck() {
        return this.ci;
    }
    set ck(a) {
        if (a != this.ci) {
            this.ci = a;
            if (a) {
                this.b1();
            }
        }
    }
}
ToolTipVisualElement.$t = markType(ToolTipVisualElement, 'ToolTipVisualElement', VisualElement.$);
/**
 * @hidden
 */
export class VisualElement_ZComparer extends Base {
    compare(a, b) {
        if (a == b) {
            return 0;
        }
        if (a == null) {
            return -1;
        }
        else if (b == null) {
            return 1;
        }
        return Base.compareSimple(a.a8, b.a8);
    }
}
VisualElement_ZComparer.$t = markType(VisualElement_ZComparer, 'VisualElement_ZComparer', Base.$, [IComparer$1_$type.specialize(VisualElement.$)]);
VisualElement_ZComparer._a = new VisualElement_ZComparer();
/**
 * @hidden
 */
export class VisualElementInputProxy extends InputProxy {
    constructor(a, b, c, d, e, f, g, h) {
        super();
        this.j = null;
        this.i = 0;
        this.m = null;
        this.k = null;
        this.s = null;
        this.o = 0;
        this.n = false;
        this.p = 0;
        this.j = a;
        this.i = b;
        this.m = c;
        this.o = g;
        this.n = h;
        this.p = VisualElementInputProxy.q;
        this.s = PointUtil.create();
        this.r(d, e, f);
    }
    f() {
        this.j.dk(this.k);
    }
    a() {
        return this.i;
    }
    c() {
        if (this.p != VisualElementInputProxy.q) {
            return false;
        }
        return this.n;
    }
    e() {
        return this.o;
    }
    g() {
        return this.m.ba;
    }
    h() {
        return this.s;
    }
    b() {
        return this.j.cr;
    }
    d() {
        return this.j.cq(this.k);
    }
    get l() {
        return this.k;
    }
    r(a, b, c) {
        this.s.x = a;
        this.s.y = b;
        this.k = c;
    }
}
VisualElementInputProxy.$t = markType(VisualElementInputProxy, 'VisualElementInputProxy', InputProxy.$);
VisualElementInputProxy.q = 0;
//# sourceMappingURL=VisualElement_combined.js.map