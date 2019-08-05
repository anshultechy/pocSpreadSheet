/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, runOn, Point_$type, markType } from "./type";
import { List$1 } from "./List$1";
import { LabelCollisionPlacementPositions_$type } from "./LabelCollisionPlacementPositions";
import { QuadTree } from "./QuadTree";
import { LinkedList$1 } from "./LinkedList$1";
import { LabelCollisionInfo } from "./LabelCollisionInfo";
import { QuadTreeBoundingBox } from "./QuadTreeBoundingBox";
import { Random } from "./Random";
import { HashSet$1 } from "./HashSet$1";
import { GeometryUtil } from "./GeometryUtil";
import { truncate, isNaN_ } from "./number";
/**
 * @hidden
 */
var LabelCollisionManager = /** @class */ (function (_super) {
    tslib_1.__extends(LabelCollisionManager, _super);
    function LabelCollisionManager(a, b, c, d, e, f, g, h, i, j) {
        var _this = _super.call(this) || this;
        _this.t = null;
        _this.labelsMoved = null;
        _this.h = null;
        _this.f = null;
        _this.e = 0;
        _this.c = null;
        _this.y = 0;
        _this.af = 0;
        _this.ae = 0;
        _this.az = null;
        _this.z = 0;
        _this.x = 0;
        _this.r = new LinkedList$1(LabelCollisionInfo.$);
        _this.ab = 0;
        _this.s = new List$1(LabelCollisionInfo.$, 0);
        _this.k = false;
        _this.j = false;
        _this.ad = 0;
        _this.aa = 0;
        _this.u = 0;
        _this.v = 0;
        _this.ac = 0;
        _this.l = false;
        _this.i = false;
        _this.ak = null;
        _this.ai = null;
        _this.az = c;
        _this.z = a;
        _this.x = b;
        _this.f = new QuadTree(a, b, 8, 8);
        _this.e = f;
        _this.c = d;
        _this.t = new List$1(LabelCollisionPlacementPositions_$type, 0);
        _this.t.add(0);
        _this.t.add(5);
        _this.t.add(7);
        _this.t.add(2);
        _this.t.add(3);
        _this.t.add(6);
        _this.t.add(1);
        _this.t.add(4);
        _this.t.remove(g);
        _this.t.insert(0, g);
        _this.y = e;
        _this.af = h;
        _this.ae = i;
        _this.i = j;
        return _this;
    }
    LabelCollisionManager.prototype.g = function (a, b, c, d, e) {
        var f = 0;
        var g = 0;
        switch (b) {
            case 0:
                f = a.o;
                g = (((a.p - a.m) - a.k) - this.y - d);
                break;
            case 4:
                f = (((a.o - a.n) - a.l) - this.y) - c;
                g = (((a.p - a.m) - a.k) - this.y) - d;
                break;
            case 5:
                f = (((a.o + a.n) + a.l) + this.y) + c;
                g = (((a.p - a.m) - a.k) - this.y) - d;
                break;
            case 1:
                f = (((a.o - a.n) - a.l) - this.y) - c;
                g = a.p;
                break;
            case 2:
                f = (((a.o + a.n) + a.l) + this.y) + c;
                g = a.p;
                break;
            case 3:
                f = a.o;
                g = (((a.p + a.m) + a.k) + this.y) + d;
                break;
            case 6:
                f = (((a.o - a.n) - a.l) - this.y) - c;
                g = (((a.p + a.m) + a.k) + this.y) + d;
                break;
            case 7:
                f = (((a.o + a.n) + a.l) + this.y) + c;
                g = (((a.p + a.m) + a.k) + this.y) - d;
                break;
        }
        var h = new QuadTreeBoundingBox();
        h.b = f;
        h.c = g;
        h.e = a.l;
        h.d = a.k;
        h.g = a;
        if (this.o(h) && !e) {
            return null;
        }
        return h;
    };
    LabelCollisionManager.prototype.o = function (a) {
        var b = a.b - a.e;
        var c = a.b + a.e;
        var d = a.c - a.d;
        var e = a.c + a.d;
        var f = this.az;
        if (b < f.left || c > f.right || d < f.top || e > f.bottom) {
            return true;
        }
        return false;
    };
    LabelCollisionManager.prototype.ar = function (a, b, c, d, e) {
        this.aq(a, b, c, d, e);
    };
    LabelCollisionManager.prototype.aq = function (a, b, c, d, e) {
        this.f.d(a);
        a.b = b;
        a.c = c;
        a.e = d;
        a.d = e;
        this.f.c(a);
    };
    LabelCollisionManager.prototype.av = function (a) {
        this.f.d(a);
    };
    LabelCollisionManager.prototype.al = function (a) {
        this.ab++;
        this.r.f(a);
        a.e = this.r.d;
        if (a.c == null) {
            a.c = new QuadTreeBoundingBox();
            a.c.b = a.o;
            a.c.c = a.p;
            a.c.e = a.n;
            a.c.d = a.m;
            a.c.g = a;
            this.f.c(a.c);
        }
    };
    LabelCollisionManager.prototype.aw = function (a) {
        if (a.c != null) {
            this.f.d(a.c);
            a.c = null;
        }
        if (a.b != null) {
            this.f.d(a.b);
            a.b = null;
        }
        if (a.e != null) {
            this.r.h(a.e);
            a.e = null;
        }
        this.ab--;
    };
    LabelCollisionManager.prototype.at = function (a) {
        if (a.c != null && a.c.b == a.o && a.c.c == a.p) {
            return;
        }
        if (a.c != null) {
            this.f.d(a.c);
        }
        var b = NaN;
        var c = NaN;
        if (a.c == null) {
            a.c = new QuadTreeBoundingBox();
            a.c.g = a;
        }
        else {
            if (a.b != null) {
                b = a.b.b - a.c.b;
                c = a.b.c - a.c.c;
            }
        }
        a.c.b = a.o;
        a.c.c = a.p;
        a.c.e = a.n;
        a.c.d = a.m;
        this.f.c(a.c);
        if (a.b != null) {
            this.f.d(a.b);
            if (!isNaN_(b)) {
                a.b = new QuadTreeBoundingBox();
                a.b.b = a.c.b + b;
                a.b.c = a.c.c + c;
                a.b.g = a;
                a.b.e = a.l;
                a.b.d = a.k;
                a.g = a.b.b;
                a.h = a.b.c;
                this.f.c(a.b);
            }
            else {
                a.b = this.g(a, a.a, 0, 0, true);
                a.g = a.b.b;
                a.h = a.b.c;
                this.f.c(a.b);
            }
        }
    };
    LabelCollisionManager.prototype.as = function (a) {
        this.f.d(a.b);
        a.b.b = a.g;
        a.b.c = a.h;
        a.b.e = a.l;
        a.b.d = a.k;
        this.f.c(a.b);
    };
    LabelCollisionManager.prototype.ay = function () {
        this.j = false;
        {
            var a = this.r.c;
            while (a != null) {
                if (a.c.b != null) {
                    this.f.d(a.c.b);
                    a.c.b = null;
                    if (a.c.f != null) {
                        a.c.f.clear();
                    }
                }
                a = a.a;
            }
            this.ac = 0;
        }
        this.aa = 0;
        this.u = 0.4;
        this.v = 0.4;
        var b = truncate(Math.ceil((this.ae / 150) * this.af));
        this.ad = b;
        this.an();
    };
    LabelCollisionManager.prototype.am = function () {
        this.j = true;
    };
    LabelCollisionManager.prototype.ap = function () {
        this.k = false;
        if (this.j) {
            return;
        }
        this.an();
    };
    LabelCollisionManager.prototype.an = function () {
        this.s.clear();
        this.au(false);
        if (this.e == 0) {
            for (var a = 0; a < this.af; a++) {
                this.v = this.u * (this.ad - this.aa) / this.ad;
                this.ao();
                this.aa++;
                if (this.aa > this.ad) {
                    if (this.h != null) {
                        this.h();
                    }
                    return;
                }
            }
            if (this.labelsMoved != null) {
                this.labelsMoved(this.s);
            }
            if (this.ac > 0) {
                if (!this.k) {
                    this.k = true;
                    this.c.executeDelayed(runOn(this, this.ap), 150);
                }
            }
            else {
                if (this.h != null) {
                    this.h();
                }
            }
        }
        else {
            if (this.e == 2) {
                var b = this.r.c;
                this.f.k();
                while (b != null) {
                    var c = b.c;
                    if (c.b != null) {
                        this.f.d(c.b);
                        c.b = null;
                        c.d = false;
                        c.f = null;
                    }
                    b = b.a;
                }
                this.ac = 0;
                this.au(true);
            }
            if (this.labelsMoved != null) {
                this.labelsMoved(this.s);
            }
        }
    };
    LabelCollisionManager.prototype.ao = function () {
        var a = truncate(Math.round((this.ab - 1) * LabelCollisionManager.aj.nextDouble()));
        var b = 0;
        var c = this.r.c;
        var d = this.w(null);
        var e = 30;
        var f = 60;
        while (c != null) {
            var g = c.c;
            var h = 0;
            var i = 0;
            if (this.i) {
                h = LabelCollisionManager.aj.nextDouble() * g.l * 2;
                i = LabelCollisionManager.aj.nextDouble() * g.k * 2;
            }
            if (b == a) {
                var j = truncate(Math.round((this.t.count - 1) * LabelCollisionManager.aj.nextDouble()));
                while (this.t._inner[j] == g.a) {
                    j = truncate(Math.round((this.t.count - 1) * LabelCollisionManager.aj.nextDouble()));
                }
                var k = g.b;
                var l = this.g(g, this.t._inner[j], h, i, false);
                var m = 0;
                while (l == null) {
                    if (m >= e) {
                        h = 0;
                        i = 0;
                    }
                    if (m >= f) {
                        break;
                    }
                    j = truncate(Math.round((this.t.count - 1) * LabelCollisionManager.aj.nextDouble()));
                    l = this.g(g, this.t._inner[j], h, i, false);
                    m++;
                }
                g.b = l;
                if (k != null) {
                    this.f.d(k);
                }
                if (l != null) {
                    this.f.c(l);
                    var n = this.w(g);
                    var o = d > n;
                    if (!o) {
                        var p = Math.exp(-(n - d) / this.v);
                        if (LabelCollisionManager.aj.nextDouble() < p) {
                            o = true;
                        }
                    }
                    if (!o && k != null) {
                        this.f.d(l);
                        this.f.c(k);
                        g.b = k;
                        if (!this.l) {
                            this.w(g);
                        }
                    }
                    else {
                        g.a = this.t._inner[j];
                        g.g = g.b.b;
                        g.h = g.b.c;
                        this.s.add(g);
                    }
                }
                else {
                    if (!this.l) {
                        this.w(g);
                    }
                    g.d = false;
                    this.s.add(g);
                }
                break;
            }
            b++;
            c = c.a;
        }
    };
    LabelCollisionManager.prototype.w = function (a) {
        if (this.l) {
            var b = 0;
            var c = this.r.c;
            while (c != null) {
                var d = c.c;
                var e = d.d;
                d.d = false;
                if (d.b != null) {
                    var f = this.f.e(d.b);
                    for (var g = 0; g < f.count; g++) {
                        var h = f._inner[g].l.c;
                        while (h != null) {
                            var i = h.c;
                            if (i.g == d) {
                                h = h.a;
                                continue;
                            }
                            if (d.b.a(i)) {
                                d.d = true;
                                b += d.b.f(i);
                            }
                            h = h.a;
                        }
                    }
                    if (d.d != e) {
                        this.s.add(d);
                    }
                }
                c = c.a;
            }
            return b;
        }
        else {
            if (a != null) {
                var j = new HashSet$1(LabelCollisionInfo.$, 0);
                var k = new HashSet$1(LabelCollisionInfo.$, 0);
                var l = new HashSet$1(LabelCollisionInfo.$, 0);
                var m = new List$1(LabelCollisionInfo.$, 0);
                if (a.f != null) {
                    for (var n = 0; n < a.f.count; n++) {
                        j.add_1(a.f._inner[n]);
                        k.add_1(a.f._inner[n]);
                    }
                }
                var o = a.d;
                a.d = false;
                if (a.b != null) {
                    var p = this.f.e(a.b);
                    for (var q = 0; q < p.count; q++) {
                        var r = p._inner[q].l.c;
                        while (r != null) {
                            var s = r.c;
                            if (s.g == a) {
                                r = r.a;
                                continue;
                            }
                            if (a.b.a(s) && !l.contains(s.g)) {
                                a.d = true;
                                l.add_1(s.g);
                                m.add(s.g);
                            }
                            r = r.a;
                        }
                    }
                    p = this.f.e(a.c);
                    for (var t = 0; t < p.count; t++) {
                        var u = p._inner[t].l.c;
                        while (u != null) {
                            var v = u.c;
                            if (v.g == a) {
                                u = u.a;
                                continue;
                            }
                            if (this.m(a.c, v)) {
                                u = u.a;
                                continue;
                            }
                            if (a.c.a(v) && !l.contains(v.g)) {
                                a.d = true;
                                l.add_1(v.g);
                                m.add(v.g);
                            }
                            u = u.a;
                        }
                    }
                    if (a.d != o) {
                        this.s.add(a);
                    }
                    if (a.f != null) {
                        for (var w = a.f.count - 1; w >= 0; w--) {
                            if (!l.contains(a.f._inner[w])) {
                                var x = a.f._inner[w];
                                var y = x.f.remove(a);
                                a.f.removeAt(w);
                                if (x.f.count == 0 && y) {
                                    this.ac--;
                                }
                                var z = j.remove(x);
                                if (j.count == 0 && z) {
                                    this.ac--;
                                }
                            }
                        }
                    }
                    for (var aa = 0; aa < m.count; aa++) {
                        var ab = m._inner[aa];
                        if (!j.contains(ab)) {
                            if (a.f == null) {
                                a.f = new List$1(LabelCollisionInfo.$, 0);
                            }
                            a.f.add(ab);
                            if (j.count == 0) {
                                this.ac++;
                            }
                            j.add_1(ab);
                            if (ab.f == null) {
                                ab.f = new List$1(LabelCollisionInfo.$, 0);
                            }
                            if (ab.f.count == 0) {
                                this.ac++;
                            }
                            ab.f.add(a);
                        }
                    }
                }
            }
            return this.ac;
        }
    };
    LabelCollisionManager.prototype.m = function (a, b) {
        if (a.g.c == a && b.g.c == b) {
            return true;
        }
        return false;
    };
    Object.defineProperty(LabelCollisionManager.prototype, "ag", {
        get: function () {
            return this.ac;
        },
        enumerable: true,
        configurable: true
    });
    LabelCollisionManager.prototype.ax = function (a, b, c) {
        this.az = c;
        var d = new QuadTree(a, b, this.f.i, this.f.f);
        var e = this.r.c;
        while (e != null) {
            d.c(e.c.c);
            if (e.c.b != null) {
                d.c(e.c.b);
            }
            e = e.a;
        }
        this.f = d;
        this.z = a;
        this.x = b;
    };
    LabelCollisionManager.prototype.q = function () {
        var a = this.r.c;
        while (a != null) {
            a.c.d = false;
            if (a.c.b != null) {
                if (this.o(a.c.b)) {
                    return true;
                }
            }
            a = a.a;
        }
        return false;
    };
    LabelCollisionManager.prototype.ah = function () {
        var a = this.r.c;
        while (a != null) {
            a.c.d = false;
            a = a.a;
        }
        a = this.r.c;
        while (a != null) {
            var b = a.c.b;
            var c = a.c.c;
            var d = this.f.e(c);
            for (var e = 0; e < d.count; e++) {
                var f = d._inner[e].l.c;
                while (f != null) {
                    var g = f.c;
                    if (this.m(c, g)) {
                        f = f.a;
                        continue;
                    }
                    if (c.a(g)) {
                        var h = f.c.g;
                        if (h != a.c) {
                            h.d = true;
                            a.c.d = true;
                        }
                    }
                    f = f.a;
                }
            }
            if (b == null) {
                return -1;
            }
            d = this.f.e(b);
            for (var i = 0; i < d.count; i++) {
                var j = d._inner[i].l.c;
                while (j != null) {
                    var k = j.c;
                    if (b.a(k)) {
                        var l = j.c.g;
                        if (l != a.c) {
                            l.d = true;
                            a.c.d = true;
                        }
                    }
                    j = j.a;
                }
            }
            a = a.a;
        }
        var m = 0;
        a = this.r.c;
        while (a != null) {
            if (a.c.d) {
                m++;
            }
            a = a.a;
        }
        return m;
    };
    LabelCollisionManager.prototype.au = function (a) {
        var b = this.r.c;
        while (b != null) {
            var c = b.c;
            if (c.b == null || a) {
                var d = false;
                if (a) {
                    var e = this.f.a(c.o, c.p, 1.5);
                    var f = this.a(e);
                    for (var g = 0; g < f.length; g++) {
                        var h = f[g];
                        var i = this.g(c, h, 0, 0, false);
                        if (i == null) {
                            continue;
                        }
                        var j = this.f.e(i);
                        d = true;
                        for (var k = 0; k < j.count; k++) {
                            var l = j._inner[k].l.c;
                            while (l != null) {
                                var m = l.c;
                                if (i.a(m)) {
                                    d = false;
                                    break;
                                }
                                l = l.a;
                            }
                        }
                        if (d) {
                            c.b = i;
                            c.a = h;
                            c.g = c.b.b;
                            c.h = c.b.c;
                            this.f.c(c.b);
                            this.s.add(c);
                            break;
                        }
                    }
                }
                if (!d) {
                    d = this.p(c);
                }
            }
            b = b.a;
        }
    };
    LabelCollisionManager.prototype.p = function (a) {
        var b = false;
        if (!b) {
            for (var c = 0; c < this.t.count; c++) {
                var d = this.g(a, this.t._inner[c], 0, 0, false);
                if (d == null) {
                    continue;
                }
                b = !this.n(d, a);
                var e = a.c;
                if (e == null) {
                    e = new QuadTreeBoundingBox();
                    e.g = a;
                    e.b = a.o;
                    e.c = a.p;
                    e.e = a.n;
                    e.d = a.m;
                    this.f.c(e);
                    a.c = e;
                }
                var f = this.n(e, a);
                b = b && !f;
                if (b) {
                    a.b = d;
                    a.a = this.t._inner[c];
                    a.g = a.b.b;
                    a.h = a.b.c;
                    this.f.c(a.b);
                    this.s.add(a);
                    break;
                }
            }
        }
        if (!b) {
            var g = Number.POSITIVE_INFINITY;
            var h = 0;
            var i = null;
            for (var j = 0; j < this.t.count; j++) {
                var k = 0;
                var l = null;
                var m = new HashSet$1(LabelCollisionInfo.$, 0);
                if (!this.l) {
                    l = new List$1(LabelCollisionInfo.$, 0);
                }
                var n = this.g(a, this.t._inner[j], 0, 0, false);
                if (n == null) {
                    continue;
                }
                var o = this.f.e(n);
                for (var p = 0; p < o.count; p++) {
                    var q = o._inner[p].l.c;
                    while (q != null) {
                        var r = q.c;
                        if (n.a(r)) {
                            k += n.f(r);
                            if (!this.l) {
                                if (!m.contains(r.g)) {
                                    l.add(r.g);
                                    m.add_1(r.g);
                                }
                            }
                        }
                        q = q.a;
                    }
                }
                var s = a.c;
                if (s == null) {
                    s = new QuadTreeBoundingBox();
                    s.g = a;
                    s.b = a.o;
                    s.c = a.p;
                    s.e = a.n;
                    s.d = a.m;
                }
                o = this.f.e(s);
                for (var t = 0; t < o.count; t++) {
                    var u = o._inner[t].l.c;
                    while (u != null) {
                        var v = u.c;
                        if (u.c.g == a) {
                            u = u.a;
                            continue;
                        }
                        if (this.m(s, v)) {
                            u = u.a;
                            continue;
                        }
                        if (s.a(v)) {
                            if (!this.l) {
                                if (!m.contains(v.g)) {
                                    l.add(v.g);
                                    m.add_1(v.g);
                                }
                            }
                        }
                        u = u.a;
                    }
                }
                if (k < g) {
                    var w = this.g(a, this.t._inner[j], 0, 0, false);
                    if (w != null) {
                        g = k;
                        h = j;
                        if (!this.l) {
                            i = l;
                        }
                    }
                }
            }
            var x = this.g(a, this.t._inner[h], 0, 0, false);
            a.d = true;
            if (!this.l) {
                if (a.f != null && a.f.count > 0) {
                    this.ac--;
                    for (var y = a.f.count - 1; y >= 0; y--) {
                        var z = a.f._inner[y];
                        if (z.f != null) {
                            z.f.remove(a);
                            if (z.f.count == 0) {
                                this.ac--;
                            }
                        }
                    }
                }
                if (i == null) {
                    a.d = false;
                    this.s.add(a);
                    return false;
                }
                a.f = i;
                if (i.count > 0) {
                    this.ac++;
                }
                for (var aa = 0; aa < i.count; aa++) {
                    var ab = i._inner[aa];
                    if (ab.f == null) {
                        ab.f = new List$1(LabelCollisionInfo.$, 0);
                    }
                    if (!ab.f.contains(a)) {
                        if (ab.f.count == 0) {
                            this.ac++;
                        }
                        ab.f.add(a);
                    }
                }
            }
            a.b = x;
            a.a = this.t._inner[h];
            a.g = a.b.b;
            a.h = a.b.c;
            this.f.c(a.b);
            this.s.add(a);
        }
        return b;
    };
    LabelCollisionManager.prototype.n = function (a, b) {
        var c = false;
        var d = this.f.e(a);
        for (var e = 0; e < d.count; e++) {
            var f = d._inner[e].l.c;
            while (f != null) {
                if (f.c.g == b) {
                    f = f.a;
                    continue;
                }
                var g = f.c;
                if (this.m(a, g)) {
                    f = f.a;
                    continue;
                }
                if (a.a(g)) {
                    c = true;
                    break;
                }
                f = f.a;
            }
        }
        return c;
    };
    LabelCollisionManager.prototype.a = function (a) {
        var b = new Array(3);
        var c = GeometryUtil.e({ $type: Point_$type, x: 0, y: 0 }, { $type: Point_$type, x: a.a, y: a.b });
        c = c * 180 / Math.PI;
        c = GeometryUtil.g(c);
        if ((c >= 0 && c <= 22.5) || (c >= 337.5 && c <= 360)) {
            b[0] = 2;
            b[1] = 5;
            b[2] = 7;
        }
        if (c >= 22.5 && c <= 67.5) {
            b[0] = 2;
            b[1] = 7;
            b[2] = 3;
        }
        if (c >= 67.5 && c <= 112.5) {
            b[0] = 7;
            b[1] = 3;
            b[2] = 6;
        }
        if (c >= 112.5 && c <= 157.5) {
            b[0] = 3;
            b[1] = 6;
            b[2] = 1;
        }
        if (c >= 157.5 && c <= 202.5) {
            b[0] = 6;
            b[1] = 1;
            b[2] = 4;
        }
        if (c >= 202.5 && c <= 247.5) {
            b[0] = 1;
            b[1] = 4;
            b[2] = 0;
        }
        if (c >= 247.5 && c <= 292.5) {
            b[0] = 4;
            b[1] = 0;
            b[2] = 5;
        }
        if (c >= 292.5 && c <= 337.5) {
            b[0] = 0;
            b[1] = 5;
            b[2] = 2;
        }
        return b;
    };
    LabelCollisionManager.prototype.d = function (a, b) {
        var c = false;
        var d = null;
        var e = new QuadTreeBoundingBox();
        e.b = a.x;
        e.c = a.y;
        e.e = 5;
        e.d = 5;
        var f = this.f.e(e);
        for (var g = 0; g < f.count; g++) {
            var h = f._inner[g].l.c;
            while (h != null) {
                var i = h.c;
                if (i.g.c == i) {
                    h = h.a;
                    continue;
                }
                if (e.a(i)) {
                    d = i;
                    c = true;
                    break;
                }
                h = h.a;
            }
        }
        if (c) {
            return d.g;
        }
        else {
            return null;
        }
    };
    LabelCollisionManager.$t = markType(LabelCollisionManager, 'LabelCollisionManager');
    LabelCollisionManager.aj = new Random(0);
    return LabelCollisionManager;
}(Base));
export { LabelCollisionManager };
//# sourceMappingURL=LabelCollisionManager.js.map