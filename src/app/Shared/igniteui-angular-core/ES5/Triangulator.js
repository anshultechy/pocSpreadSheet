/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
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
var Triangulator = /** @class */ (function (_super) {
    tslib_1.__extends(Triangulator, _super);
    function Triangulator(a, b, c) {
        var _this = _super.call(this) || this;
        _this.o = 0;
        _this.l = null;
        _this.m = null;
        _this.k = null;
        _this.p = 0;
        _this.triangulationStatusChanged = null;
        _this.o = a;
        _this.l = b;
        _this.m = c;
        return _this;
    }
    Triangulator.prototype.y = function () {
        {
            this.v();
            if (this.k != null) {
                this.k.c = true;
            }
            this.u();
        }
    };
    Triangulator.prototype.x = function () {
        {
            this.v();
            if (this.k != null) {
                this.k.c = false;
            }
            this.u();
        }
    };
    Triangulator.prototype.v = function () {
        var a = this.o;
        var b = this.l;
        var c = this.m;
        var d = new List$1(Triangle.$, 0);
        var e = ((function () {
            var $ret = new List$1(Number_$type, 0);
            $ret.h = a;
            return $ret;
        })());
        var f = new HashSet$1(Point_$type, 2, new PointComparer());
        for (var g = 0; g < a; ++g) {
            var h = b.item(g), i = c.item(g);
            if (isNaN_(h) || isNaN_(i) || isInfinity(h) || isInfinity(i)) {
                continue;
            }
            var j = { $type: Point_$type, x: h, y: i };
            if (f.contains(j)) {
                continue;
            }
            f.add_1(j);
            e.add(g);
        }
        a = e.count;
        if (a >= 3) {
            var k = function (l, m) {
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
            var l = b.item(e._inner[0]);
            var m = b.item(e._inner[a - 1]);
            var n = c.item(e._inner[0]);
            var o = n;
            for (var p = 1; p < a; p++) {
                var q = c.item(e._inner[p]);
                if (isNaN_(q)) {
                    continue;
                }
                n = Math.min(n, q);
                o = Math.max(o, q);
            }
            var r = m - l;
            var s = o - n;
            var t = Math.max(r, s);
            var u = (m + l) / 2;
            var v = (o + n) / 2;
            var w = { $type: Point_$type, x: u - 20 * t, y: v - t };
            var x = { $type: Point_$type, x: u, y: v + 20 * t };
            var y = { $type: Point_$type, x: u + 20 * t, y: v - t };
            var z = new LinkedList$1(Triangle.$);
            var aa = new LinkedList$1(Triangle.$);
            var ab = new HalfEdgeSet();
            var ac = new PointTester();
            z.e(((function () {
                var $ret = new Triangle();
                $ret.v1 = a;
                $ret.v2 = a + 1;
                $ret.v3 = a + 2;
                return $ret;
            })()));
            var ad = new TriangulatorContext();
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
            var ae = 1;
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
    };
    Triangulator.prototype.t = function () {
        this.s();
    };
    Triangulator.prototype.s = function () {
        if (this.triangulationStatusChanged != null) {
            this.triangulationStatusChanged(this, new TriangulationStatusEventArgs(this.p));
        }
    };
    Triangulator.prototype.n = function () {
        if (this.k == null) {
            return null;
        }
        return this.k.i;
    };
    Triangulator.prototype.w = function () {
        var e_1, _a;
        {
            if (this.k == null) {
                return;
            }
            var a = this.k;
            var b = this.k.j;
            var c = this.k.d;
            var d = this.k.e;
            var e_2 = this.k.h;
            var f = this.k.n;
            var g = this.k.o;
            var h = this.k.p;
            var i = this.k.i;
            var j = this.k.g;
            var k = this.k.f;
            var l = this.k.b;
            var m = this.k.a;
            var n = this.k.l;
            var o = this.k.k;
            var p = void 0;
            var q = void 0;
            var r = void 0;
            var s = void 0;
            var t = void 0;
            var u = void 0;
            var v = void 0;
            var w = void 0;
            var x = void 0;
            var y = void 0;
            var z = void 0;
            var aa_1;
            for (var ab = n; ab < o; ++ab) {
                m.e();
                if (ab < b) {
                    p = c.item(e_2._inner[ab]);
                    q = d.item(e_2._inner[ab]);
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
                var ac = null;
                for (var ad = j.c; ad != null; ad = ac) {
                    ac = ad.a;
                    aa_1 = ad.c;
                    r = aa_1.v1;
                    u = aa_1.v2;
                    x = aa_1.v3;
                    if (r < b) {
                        s = c.item(e_2._inner[r]);
                        t = d.item(e_2._inner[r]);
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
                        v = c.item(e_2._inner[u]);
                        w = d.item(e_2._inner[u]);
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
                        y = c.item(e_2._inner[x]);
                        z = d.item(e_2._inner[x]);
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
                        k.f(aa_1);
                        j.h(ad);
                    }
                    if (l.b) {
                        var ae = void 0;
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
                try {
                    for (var _b = tslib_1.__values(fromEnum(m)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var af = _c.value;
                        var ag = new Triangle();
                        ag.v1 = af.a;
                        ag.v2 = af.b;
                        ag.v3 = ab;
                        j.f(ag);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            if (o == b) {
                for (var ah = k.c; ah != null; ah = ah.a) {
                    aa_1 = ah.c;
                    if (aa_1.v1 < b && aa_1.v2 < b && aa_1.v3 < b) {
                        i.add(((function () {
                            var $ret = new Triangle();
                            $ret.v1 = e_2._inner[aa_1.v1];
                            $ret.v2 = e_2._inner[aa_1.v2];
                            $ret.v3 = e_2._inner[aa_1.v3];
                            return $ret;
                        })()));
                    }
                }
                for (var ai = j.c; ai != null; ai = ai.a) {
                    aa_1 = ai.c;
                    if (aa_1.v1 < b && aa_1.v2 < b && aa_1.v3 < b) {
                        i.add(((function () {
                            var $ret = new Triangle();
                            $ret.v1 = e_2._inner[aa_1.v1];
                            $ret.v2 = e_2._inner[aa_1.v2];
                            $ret.v3 = e_2._inner[aa_1.v3];
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
    };
    Triangulator.prototype.r = function () {
        {
            this.k = null;
        }
    };
    Triangulator.prototype.u = function () {
        {
            if (this.k != null && this.k.c) {
                window.setTimeout(runOn(this, this.w), 0);
            }
            else {
                this.w();
            }
        }
    };
    Object.defineProperty(Triangulator.prototype, "q", {
        get: function () {
            return this.p;
        },
        enumerable: true,
        configurable: true
    });
    Triangulator.$t = markType(Triangulator, 'Triangulator', DependencyObject.$);
    return Triangulator;
}(DependencyObject));
export { Triangulator };
//# sourceMappingURL=Triangulator.js.map