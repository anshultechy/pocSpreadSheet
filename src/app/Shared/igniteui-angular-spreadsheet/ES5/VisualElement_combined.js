/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, EventArgs, typeCast, Point_$type, runOn, Type, markType, PointUtil, delegateRemove, delegateCombine } from "../../igniteui-angular-core/ES5/type";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { Rect } from "../../igniteui-angular-core/ES5/Rect";
import { InputProxy } from "./InputProxy";
import { IComparer$1_$type } from "../../igniteui-angular-core/ES5/IComparer$1";
import { isNaN_ } from "../../igniteui-angular-core/ES5/number";
import { Stack$1 } from "../../igniteui-angular-core/ES5/Stack$1";
import { dateMinValue, dateNow } from "../../igniteui-angular-core/ES5/date";
import { timeSpanTotalMilliseconds } from "../../igniteui-angular-core/ES5/timespan";
/**
 * @hidden
 */
var VisualElement = /** @class */ (function (_super) {
    tslib_1.__extends(VisualElement, _super);
    function VisualElement(a, b) {
        var _this = _super.call(this) || this;
        _this.bc = 16 | 8 | 8192 | 32768;
        _this.ax = 0;
        _this.a2 = 0;
        _this.av = 0;
        _this.a3 = 0;
        _this.h = null;
        _this.bv = null;
        _this.a7 = null;
        _this.ap = null;
        _this._parent = null;
        _this.aq = null;
        _this.a8 = 0;
        _this.ar = null;
        _this.bx = null;
        _this.afterHasDescendantChanged = null;
        _this.disposed = null;
        _this._parent = a;
        _this.bx = b;
        if (a != null) {
            if (a.aq == null) {
                a.aq = new List$1(VisualElement.$, 0);
            }
            a.aq.add(_this);
            _this.b1();
            a.t = true;
        }
        return _this;
    }
    Object.defineProperty(VisualElement.prototype, "a9", {
        get: function () {
            return this.aq != null ? this.aq.count : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "i", {
        get: function () {
            return (this.bc & 131072) != 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "bw", {
        get: function () {
            return this.bv;
        },
        set: function (a) {
            if (a != this.bv) {
                this.bv = a;
                this.bc |= 1024;
                this.b1();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "j", {
        get: function () {
            return (this.bc & 32768) != 0;
        },
        set: function (a) {
            if (a) {
                this.b1();
            }
            else {
                this.bc &= ~32768;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "n", {
        get: function () {
            return (this.bc & 4096) != 0;
        },
        set: function (a) {
            this.b9(4096, a);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "o", {
        get: function () {
            return (this.bc & 16384) != 0;
        },
        set: function (a) {
            this.b9(16384, a);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "k", {
        get: function () {
            return (this.bc & 1024) != 0;
        },
        set: function (a) {
            this.b9(1024, a);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "l", {
        get: function () {
            return (this.bc & 512) != 0;
        },
        set: function (a) {
            if (this.ak(512, a) && a) {
                var b = this.afterHasDescendantChanged;
                if (b != null) {
                    b(this, EventArgs.empty);
                }
                this.b1();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "m", {
        get: function () {
            return (this.bc & 32) != 0;
        },
        set: function (a) {
            this.b9(32, a);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "p", {
        get: function () {
            return (this.bc & 4) != 0;
        },
        set: function (a) {
            this.b9(4, a);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "q", {
        get: function () {
            return (this.bc & 1) != 0;
        },
        set: function (a) {
            this.b9(1, a);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "r", {
        get: function () {
            return (this.bc & 64) != 0;
        },
        set: function (a) {
            this.b9(64, a);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "s", {
        get: function () {
            return (this.bc & 2048) != 0;
        },
        set: function (a) {
            this.aj(2048, 4096, a);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "t", {
        get: function () {
            return (this.bc & 65536) != 0;
        },
        set: function (a) {
            this.b9(65536, a);
            if (a) {
                this.bc |= 512;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "u", {
        get: function () {
            return (this.bc & 16) != 0;
        },
        set: function (a) {
            if (this.aj(16, 32, a)) {
                this.b3();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "v", {
        get: function () {
            var a = this;
            while (a != null) {
                if (!a.u) {
                    return false;
                }
                a = a._parent;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "w", {
        get: function () {
            return (this.bc & 8) != 0;
        },
        set: function (a) {
            this.ak(8, a);
        },
        enumerable: true,
        configurable: true
    });
    VisualElement.prototype.get_x = function () {
        return false;
    };
    Object.defineProperty(VisualElement.prototype, "x", {
        get: function () {
            return this.get_x();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "y", {
        get: function () {
            return (this.bc & 2) != 0;
        },
        set: function (a) {
            this.aj(2, 4, a);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "ab", {
        get: function () {
            return (this.bc & 256) != 0;
        },
        set: function (a) {
            if (this.ak(256, a)) {
                if (a) {
                    this.b1();
                    var b = typeCast(RootVisualElement.$, this.d());
                    if (b != null && b.cr) {
                        b.dk(this);
                    }
                }
                else {
                    this.b5();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "ac", {
        get: function () {
            return (this.bc & 8192) != 0;
        },
        set: function (a) {
            if (this.aj(8192, 16384, a) && this._parent != null) {
                this._parent.t = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    VisualElement.prototype.get_ay = function () {
        return this.h != null ? this.h.l : 0;
    };
    Object.defineProperty(VisualElement.prototype, "ay", {
        get: function () {
            return this.get_ay();
        },
        enumerable: true,
        configurable: true
    });
    VisualElement.prototype.get_az = function () {
        return this.h != null ? this.h.m : 0;
    };
    Object.defineProperty(VisualElement.prototype, "az", {
        get: function () {
            return this.get_az();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "a0", {
        get: function () {
            var a = this.av;
            if (this.h != null) {
                a += this.h.b.a;
            }
            return a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "a1", {
        get: function () {
            var a = this.a3;
            if (this.h != null) {
                a += this.h.b.d;
            }
            return a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "aw", {
        get: function () {
            var a = this.av;
            var b = this.h;
            if (b != null) {
                a -= b.a.a;
                a -= b.c.a;
                if (a < 0) {
                    a = 0;
                }
            }
            return a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "a4", {
        get: function () {
            var a = this.a3;
            var b = this.h;
            if (b != null) {
                a -= b.a.d;
                a -= b.c.d;
                if (a < 0) {
                    a = 0;
                }
            }
            return a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualElement.prototype, "bu", {
        get: function () {
            return this.a8;
        },
        set: function (a) {
            if (a != this.a8) {
                this.a8 = a;
                this.bc |= 64;
                if (this._parent != null) {
                    this._parent.bc |= 128;
                }
                this.b1();
            }
        },
        enumerable: true,
        configurable: true
    });
    VisualElement.prototype.by = function (a) {
        var b = a.visitElement(this);
        if (b && this.aq != null) {
            var c = 0;
            while (c < this.aq.count) {
                var d = this.aq._inner[c];
                d.by(a);
                if (d._parent != null) {
                    c++;
                }
            }
        }
    };
    VisualElement.prototype.at = function (a) {
        var b = a;
        var c = this.h;
        if (c != null) {
            b = c.g(b);
            b = c.e(b);
        }
        return b;
    };
    VisualElement.prototype.au = function (a) {
        var b = a;
        var c = this.h;
        if (c != null) {
            b = c.h(b);
            b = c.f(b);
        }
        return b;
    };
    VisualElement.prototype.bz = function () {
        if (this.aq != null) {
            for (var a = 0; a < this.aq.count; a++) {
                this.aq._inner[a].bz();
            }
        }
        var b = this.disposed;
        if (b != null) {
            b(this, EventArgs.empty);
        }
    };
    VisualElement.prototype.g = function ($t) {
        var a = this._parent;
        while (a != null) {
            if (typeCast($t, a) !== null) {
                return a;
            }
            a = a._parent;
        }
        return null;
    };
    VisualElement.prototype.ce = function () {
        var a = this;
        var b = 0;
        var c = 0;
        while (a != null) {
            b += a.ax;
            c += a.a2;
            a = a._parent;
        }
        return new Rect(0, b, c, this.a3, this.av);
    };
    VisualElement.prototype.b = function (a) {
        return this.aq._inner[a];
    };
    VisualElement.prototype.cd = function (a) {
        if (a === void 0) { a = null; }
        var b = this;
        var c = 0;
        var d = 0;
        while (b != null && b != a) {
            c += b.ax;
            d += b.a2;
            b = b._parent;
        }
        return { $type: Point_$type, x: c, y: d };
    };
    VisualElement.prototype.c = function (a) {
        if (this.aq != null) {
            for (var b = 0, c = this.aq.count; b < c; b++) {
                var d = this.aq._inner[b];
                if (d.bx == a && d.ab) {
                    return d;
                }
            }
        }
        return null;
    };
    VisualElement.prototype.d = function () {
        var a = this;
        while (a._parent != null) {
            a = a._parent;
        }
        return a;
    };
    VisualElement.prototype.e = function (a, b, c) {
        var d = a;
        var e = b;
        if (!this.aa(d, e)) {
            return null;
        }
        var f = this;
        if (c && (this.bc & 24) != 24) {
            return null;
        }
        while (f != null) {
            var g = null;
            var h = f.as();
            if (h != null) {
                for (var i = h.count - 1; i >= 0; i--) {
                    var j = h._inner[i];
                    if (c && (j.bc & 24) != 24) {
                        continue;
                    }
                    var k = d - j.ax;
                    if (k >= 0 && k < j.a3) {
                        var l = e - j.a2;
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
    };
    VisualElement.prototype.as = function () {
        if ((this.bc & 128) != 0) {
            this.cc();
        }
        if (this.ar != null && this.ar.count > 0) {
            return this.ar;
        }
        return this.aq;
    };
    VisualElement.prototype.b0 = function () {
        if ((this.bc & 131072) != 0) {
            var a = typeCast(RootVisualElement.$, this.d());
            var b = a.cj;
            while (b != null) {
                b.bc &= ~131072;
                b = b._parent;
            }
            a.db();
        }
    };
    VisualElement.prototype.z = function () {
        var a = this.y;
        var b = this._parent;
        while (!a && b != null) {
            a = b.y;
            b = b._parent;
        }
        return a;
    };
    VisualElement.prototype.aa = function (a, b) {
        if (!this.ac) {
            return false;
        }
        return a >= 0 && b >= 0 && a < this.a3 && b < this.av;
    };
    VisualElement.prototype.b1 = function () {
        this.bc |= 32768;
        var a = this._parent;
        while (a != null && (a.bc & 512) == 0) {
            a.bc |= 512;
            var b = a.afterHasDescendantChanged;
            if (b != null) {
                b(a, EventArgs.empty);
            }
            a = a._parent;
        }
    };
    VisualElement.prototype.b2 = function () {
    };
    VisualElement.prototype.b3 = function () {
        if ((this.y && !this.v) || (!this.y && this.z() && this.v)) {
            var a = typeCast(RootVisualElement.$, this.d());
            if (a != null) {
                a.cs = true;
            }
        }
    };
    VisualElement.prototype.b4 = function () {
    };
    VisualElement.prototype.ad = function (a) {
        return false;
    };
    VisualElement.prototype.ae = function (a) {
        return false;
    };
    VisualElement.prototype.af = function (a) {
        return false;
    };
    VisualElement.prototype.ag = function (a) {
        return false;
    };
    VisualElement.prototype.ah = function (a) {
        return false;
    };
    VisualElement.prototype.ai = function (a, b) {
        return false;
    };
    VisualElement.prototype.b5 = function () {
        if (this.aq != null) {
            for (var a = 0, b = this.aq.count; a < b; a++) {
                var c = this.aq._inner[a];
                if ((c.bc & 256) == 0) {
                    c.b5();
                }
            }
        }
    };
    VisualElement.prototype.b6 = function () {
        if (this.t) {
            this.t = false;
            var a = 0;
            var b = 0;
            var c = this.a3;
            var d = this.av;
            var e = this.h;
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
    };
    VisualElement.prototype.b7 = function (a, b, c, d) {
    };
    VisualElement.prototype.b8 = function () {
        if (this._parent != null) {
            if ((this.bc & 131072) != 0) {
                this.b0();
            }
            var a = this._parent;
            this._parent = null;
            if (a.aq.remove(this)) {
                if (a.ar != null) {
                    a.ar.remove(this);
                }
            }
        }
    };
    VisualElement.prototype.aj = function (a, b, c) {
        var d = this.ak(a, c);
        if (d) {
            this.b9(b, true);
        }
        return d;
    };
    VisualElement.prototype.ak = function (a, b) {
        var c = this.bc;
        if (b) {
            c |= a;
        }
        else {
            c &= ~a;
        }
        var d = c != this.bc;
        this.bc = c;
        return d;
    };
    VisualElement.prototype.b9 = function (a, b) {
        if (this.ak(a, b) && b) {
            this.b1();
        }
    };
    VisualElement.prototype.am = function (a) {
        return this.al(a.x, a.y, a.width, a.height);
    };
    VisualElement.prototype.al = function (a, b, c, d) {
        var e = this.h;
        if (e != null) {
            return e.d(a, b, c, d, runOn(this, this.an));
        }
        else {
            return this.an(a, b, c, d);
        }
    };
    VisualElement.prototype.an = function (a, b, c, d) {
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
    };
    VisualElement.prototype.ca = function (a, b, c, d) {
        if (d === void 0) { d = null; }
        var e = typeCast(RootVisualElement.$, this.d());
        if (e == null) {
            return;
        }
        if (e.cj != null) {
            e.cj.b0();
        }
        if (e.cj != null) {
            return;
        }
        var f = this;
        while (f != null) {
            f.bc |= 131072;
            f = f._parent;
        }
        e.di(this, a, b, c, d);
    };
    VisualElement.prototype.cb = function () {
        if (this.ab) {
            return;
        }
        if (this.t) {
            this.b6();
        }
        if (this.l && this.aq != null) {
            for (var a = 0, b = this.aq.count; a < b; a++) {
                this.aq._inner[a].cb();
            }
        }
    };
    VisualElement.prototype.cc = function () {
        if ((this.bc & 128) != 0) {
            this.bc &= ~128;
            if (this.ar != null) {
                this.ar.clear();
            }
            if (this.aq != null) {
                var a = 0;
                for (var b = 0, c = this.aq.count; b < c; b++) {
                    var d = this.aq._inner[b];
                    if (a > 0 || d.a8 != 0) {
                        var e = void 0;
                        if (a == 0) {
                            if (this.ar == null) {
                                this.ar = new List$1(VisualElement.$, 0);
                            }
                            for (var f = 0; f < b; f++) {
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
    };
    VisualElement.prototype.ao = function (a) {
        if (!a(this)) {
            return false;
        }
        if (this.aq != null) {
            for (var b = 0; b < this.aq.count; b++) {
                this.aq._inner[b].ao(a);
            }
        }
        return true;
    };
    VisualElement.$t = markType(VisualElement, 'VisualElement');
    return VisualElement;
}(Base));
export { VisualElement };
/**
 * @hidden
 */
export var IVisualElementVisitor_$type = new Type(null, 'IVisualElementVisitor');
/**
 * @hidden
 */
var RootVisualElement = /** @class */ (function (_super) {
    tslib_1.__extends(RootVisualElement, _super);
    function RootVisualElement(a) {
        var _this = _super.call(this, null, a) || this;
        _this.cn = null;
        _this.ch = null;
        _this.cg = null;
        _this.c7 = null;
        _this.c0 = dateMinValue();
        _this.c4 = 0;
        _this.dn = PointUtil.create();
        _this.dm = PointUtil.create();
        _this.cf = null;
        _this.ci = null;
        _this.c1 = 0;
        _this.c2 = 0;
        _this.c3 = null;
        _this.cs = false;
        _this.cp = false;
        RootVisualElement.c5++;
        _this.c7 = "VisualElementTreeWindow" + RootVisualElement.c5;
        return _this;
    }
    RootVisualElement.prototype.bz = function () {
        _super.prototype.bz.call(this);
        this.co = null;
    };
    RootVisualElement.prototype.an = function (a, b, c, d) {
        var e = _super.prototype.an.call(this, a, b, c, d);
        if (e && this.cn != null) {
            this.cn.bd.x = a;
            this.cn.bd.y = b;
            this.cn.bd.width = c;
            this.cn.bd.height = d;
        }
        return e;
    };
    Object.defineProperty(RootVisualElement.prototype, "cj", {
        get: function () {
            return this.ci;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RootVisualElement.prototype, "co", {
        get: function () {
            return this.cn;
        },
        set: function (a) {
            if (a != this.cn) {
                var b = this.cn;
                if (this.cn != null) {
                    this.cy = false;
                    var c = this.cn;
                    c.onFlingStarted = delegateRemove(c.onFlingStarted, runOn(this, this.ct));
                    var d = this.cn;
                    d.onMouseDown = delegateRemove(d.onMouseDown, runOn(this, this.dc));
                    var e = this.cn;
                    e.onMouseEnter = delegateRemove(e.onMouseEnter, runOn(this, this.dd));
                    var f = this.cn;
                    f.onMouseLeave = delegateRemove(f.onMouseLeave, runOn(this, this.de));
                    var g = this.cn;
                    g.onMouseOver = delegateRemove(g.onMouseOver, runOn(this, this.df));
                    var h = this.cn;
                    h.onMouseUp = delegateRemove(h.onMouseUp, runOn(this, this.dg));
                    var i = this.cn;
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
                    var j = this.cn;
                    j.onFlingStarted = delegateCombine(j.onFlingStarted, runOn(this, this.ct));
                    var k = this.cn;
                    k.onMouseDown = delegateCombine(k.onMouseDown, runOn(this, this.dc));
                    var l = this.cn;
                    l.onMouseEnter = delegateCombine(l.onMouseEnter, runOn(this, this.dd));
                    var m = this.cn;
                    m.onMouseLeave = delegateCombine(m.onMouseLeave, runOn(this, this.de));
                    var n = this.cn;
                    n.onMouseOver = delegateCombine(n.onMouseOver, runOn(this, this.df));
                    var o = this.cn;
                    o.onMouseUp = delegateCombine(o.onMouseUp, runOn(this, this.dg));
                    var p = this.cn;
                    p.onMouseWheel = delegateCombine(p.onMouseWheel, runOn(this, this.cv));
                    this.cn.bd = new Rect(0, this.ax, this.a2, this.a3, this.av);
                }
                this.da(b, a);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RootVisualElement.prototype, "cr", {
        get: function () {
            return this.ch != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RootVisualElement.prototype, "cy", {
        get: function () {
            return this.cp;
        },
        set: function (a) {
            if (a != this.cp) {
                this.cp = a;
            }
        },
        enumerable: true,
        configurable: true
    });
    RootVisualElement.prototype.cq = function (a) {
        this.ch = a;
        this.cy = true;
        a.b2();
        return true;
    };
    RootVisualElement.prototype.cl = function (a, b, c, d, e) {
        if (a == null) {
            return null;
        }
        var f = b.x;
        var g = b.y;
        var h = a;
        while (h != null) {
            f -= h.ax;
            g -= h.a2;
            h = h._parent;
        }
        return new VisualElementInputProxy(this, c, this.cn, f, g, a, d, e);
    };
    RootVisualElement.prototype.cm = function (a, b, c, d) {
        var e = this.e(a.x, a.y, true);
        return this.cl(e, a, b, c, d);
    };
    RootVisualElement.prototype.ck = function (a, b) {
        var c = this.c6(a);
        var d = this.c6(b);
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
    };
    RootVisualElement.prototype.c6 = function (a) {
        var b = 0;
        while (a != null) {
            b++;
            a = a._parent;
        }
        return b;
    };
    RootVisualElement.prototype.c8 = function (a) {
    };
    RootVisualElement.prototype.c9 = function (a) {
        this.cu(a, 2, 1, 0);
    };
    RootVisualElement.prototype.da = function (a, b) {
    };
    RootVisualElement.prototype.ct = function (a, b, c) {
        return false;
    };
    RootVisualElement.prototype.db = function () {
        if (this.ci != null) {
            this.ci = null;
            this.cf.ac = false;
        }
    };
    RootVisualElement.prototype.cu = function (a, b, c, d, e) {
        if (e === void 0) { e = null; }
        this.c8(d);
        var f = d == 0;
        if (this.ch != null && this != this.ch.d()) {
            this.dk(this.ch);
        }
        var g = this.ch != null ? this.cl(this.ch, a, b, c, f) : this.cm(a, b, c, f);
        this.dj(a, g);
        if (g != null) {
            var h = g.h();
            var i = h.x;
            var j = h.y;
            var k = g.l;
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
    };
    RootVisualElement.prototype.dc = function (a) {
        if (this.cw(a)) {
            return;
        }
        var b = dateNow();
        if (Math.abs(a.x - this.dn.x) < 8 && Math.abs(a.y - this.dn.y) < 8 && timeSpanTotalMilliseconds((+b - +(this.c0))) < 500) {
            this.c4++;
        }
        else {
            this.c4 = 1;
            this.c0 = b;
            this.dn.x = a.x;
            this.dn.y = a.y;
        }
        var c = this.cn.ag ? 2 : 1;
        this.cu(a, c, this.c4, 0);
    };
    RootVisualElement.prototype.df = function (a, b, c) {
        this.cu(a, 0, 0, 1);
    };
    RootVisualElement.prototype.de = function (a) {
        if (!this.cp) {
            this.dj(a, null);
        }
    };
    RootVisualElement.prototype.dd = function (a) {
        if (!this.cp) {
            var b = this.cm(a, 0, 0, false);
            this.dj(a, b);
        }
    };
    RootVisualElement.prototype.dg = function (a) {
        var b = this.cn.ag ? 2 : 1;
        this.dh(a, b);
    };
    RootVisualElement.prototype.dh = function (a, b) {
        if (this.ch == null && this.co != null && this.co.bd.containsPoint(a) && !this.co.ai(a)) {
            return;
        }
        this.cu(a, b, 1, 2);
    };
    RootVisualElement.prototype.cv = function (a, b) {
        b *= 10;
        if (this.cx(a, b)) {
            return true;
        }
        return this.cu(a, 0, 1, 3, b);
    };
    RootVisualElement.prototype.cw = function (a) {
        return false;
    };
    RootVisualElement.prototype.cx = function (a, b) {
        return false;
    };
    RootVisualElement.prototype.di = function (a, b, c, d, e) {
        this.ci = a;
        if (this.cf == null) {
            this.cf = new ToolTipVisualElement(this, "ToolTip");
            this.cf.bu = 10000;
        }
        this.c1 = c;
        this.c2 = d;
        this.cf.cq = b;
        this.cf.cr = e;
        var f = a;
        while (f != this) {
            c += f.ax;
            d += f.a2;
            f = f._parent;
        }
        this.cf.al(c, d, NaN, NaN);
        this.cf.ac = true;
    };
    RootVisualElement.prototype.dj = function (a, b) {
        if (PointUtil.notEquals(a, this.dm)) {
            this.dm.x = a.x;
            this.dm.y = a.y;
        }
        this.cs = false;
        var c = this.cg;
        var d = b;
        var e = d != null ? d.l : null;
        if (e == c) {
            return;
        }
        var f = this.ck(c, e);
        var g = new Stack$1(VisualElement.$);
        if (d == null) {
            d = new VisualElementInputProxy(this, 0, this.cn, a.x, a.y, this, 0, false);
        }
        var h = d.h().x;
        var i = d.h().y;
        var j = h;
        var k = i;
        var l = d.l;
        this.cg = e;
        while (e != null && e != f) {
            g.h(e);
            h += e.ax;
            i += e.a2;
            e = e._parent;
        }
        var m = h;
        var n = i;
        var o = c;
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
            var p = g.e();
            d.r(h, i, p);
            p.y = true;
            p.ae(d);
            h += p.ax;
            i += p.a2;
        }
        d.r(j, k, l);
    };
    RootVisualElement.prototype.dk = function (a) {
        if (this.ch == a) {
            this.ch = null;
            this.cy = false;
            a.b4();
        }
    };
    RootVisualElement.prototype.cz = function (a) {
        if (this.cr) {
            return true;
        }
        if (this.c3 != null && !this.c3(a)) {
            return false;
        }
        return true;
    };
    RootVisualElement.prototype.dl = function () {
        var a = this.cg == null ? null : this.cm(this.dm, 0, 0, false);
        this.dj(this.dm, a);
    };
    RootVisualElement.$t = markType(RootVisualElement, 'RootVisualElement', VisualElement.$);
    RootVisualElement.c5 = 0;
    return RootVisualElement;
}(VisualElement));
export { RootVisualElement };
/**
 * @hidden
 */
var ToolTipVisualElement = /** @class */ (function (_super) {
    tslib_1.__extends(ToolTipVisualElement, _super);
    function ToolTipVisualElement(a, b) {
        var _this = _super.call(this, a, b) || this;
        _this.ch = false;
        _this.cl = null;
        _this.ci = false;
        _this.cm = null;
        _this.cf = null;
        _this.cg = null;
        _this.w = false;
        _this.cg = new VisualElement(_this, "ToolTipTitle");
        _this.cf = new VisualElement(_this, "ToolTipBody");
        _this.cg.q = false;
        _this.cf.q = false;
        return _this;
    }
    Object.defineProperty(ToolTipVisualElement.prototype, "cq", {
        get: function () {
            return this.cl;
        },
        set: function (a) {
            if (a != this.cl) {
                this.cl = a;
                this.cj = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolTipVisualElement.prototype, "cj", {
        get: function () {
            return this.ch;
        },
        set: function (a) {
            if (a != this.ch) {
                this.ch = a;
                if (a) {
                    this.b1();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolTipVisualElement.prototype, "cr", {
        get: function () {
            return this.cm;
        },
        set: function (a) {
            if (a != this.cm) {
                this.cm = a;
                this.ck = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolTipVisualElement.prototype, "ck", {
        get: function () {
            return this.ci;
        },
        set: function (a) {
            if (a != this.ci) {
                this.ci = a;
                if (a) {
                    this.b1();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ToolTipVisualElement.$t = markType(ToolTipVisualElement, 'ToolTipVisualElement', VisualElement.$);
    return ToolTipVisualElement;
}(VisualElement));
export { ToolTipVisualElement };
/**
 * @hidden
 */
var VisualElement_ZComparer = /** @class */ (function (_super) {
    tslib_1.__extends(VisualElement_ZComparer, _super);
    function VisualElement_ZComparer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VisualElement_ZComparer.prototype.compare = function (a, b) {
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
    };
    VisualElement_ZComparer.$t = markType(VisualElement_ZComparer, 'VisualElement_ZComparer', Base.$, [IComparer$1_$type.specialize(VisualElement.$)]);
    VisualElement_ZComparer._a = new VisualElement_ZComparer();
    return VisualElement_ZComparer;
}(Base));
export { VisualElement_ZComparer };
/**
 * @hidden
 */
var VisualElementInputProxy = /** @class */ (function (_super) {
    tslib_1.__extends(VisualElementInputProxy, _super);
    function VisualElementInputProxy(a, b, c, d, e, f, g, h) {
        var _this = _super.call(this) || this;
        _this.j = null;
        _this.i = 0;
        _this.m = null;
        _this.k = null;
        _this.s = null;
        _this.o = 0;
        _this.n = false;
        _this.p = 0;
        _this.j = a;
        _this.i = b;
        _this.m = c;
        _this.o = g;
        _this.n = h;
        _this.p = VisualElementInputProxy.q;
        _this.s = PointUtil.create();
        _this.r(d, e, f);
        return _this;
    }
    VisualElementInputProxy.prototype.f = function () {
        this.j.dk(this.k);
    };
    VisualElementInputProxy.prototype.a = function () {
        return this.i;
    };
    VisualElementInputProxy.prototype.c = function () {
        if (this.p != VisualElementInputProxy.q) {
            return false;
        }
        return this.n;
    };
    VisualElementInputProxy.prototype.e = function () {
        return this.o;
    };
    VisualElementInputProxy.prototype.g = function () {
        return this.m.ba;
    };
    VisualElementInputProxy.prototype.h = function () {
        return this.s;
    };
    VisualElementInputProxy.prototype.b = function () {
        return this.j.cr;
    };
    VisualElementInputProxy.prototype.d = function () {
        return this.j.cq(this.k);
    };
    Object.defineProperty(VisualElementInputProxy.prototype, "l", {
        get: function () {
            return this.k;
        },
        enumerable: true,
        configurable: true
    });
    VisualElementInputProxy.prototype.r = function (a, b, c) {
        this.s.x = a;
        this.s.y = b;
        this.k = c;
    };
    VisualElementInputProxy.$t = markType(VisualElementInputProxy, 'VisualElementInputProxy', InputProxy.$);
    VisualElementInputProxy.q = 0;
    return VisualElementInputProxy;
}(InputProxy));
export { VisualElementInputProxy };
//# sourceMappingURL=VisualElement_combined.js.map
