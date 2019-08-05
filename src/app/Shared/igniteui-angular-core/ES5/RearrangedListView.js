/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
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
var RearrangedListView = /** @class */ (function (_super) {
    tslib_1.__extends(RearrangedListView, _super);
    function RearrangedListView(a) {
        var _this = _super.call(this) || this;
        _this.e = null;
        _this.ae = null;
        _this.l = new SectionMap();
        _this.f = null;
        _this.aa = null;
        _this.z = null;
        _this.h = null;
        _this.m = null;
        _this.d = null;
        _this.o = null;
        _this.p = null;
        _this.t = false;
        _this.w = false;
        _this.v = false;
        _this.x = false;
        _this.q = false;
        _this.ad = new List$1(Array_$type, 0);
        _this.e = a;
        return _this;
    }
    Object.defineProperty(RearrangedListView.prototype, "ag", {
        get: function () {
            return this.ae;
        },
        enumerable: true,
        configurable: true
    });
    RearrangedListView.prototype.k = function (a) {
        return this.l.d(a);
    };
    Object.defineProperty(RearrangedListView.prototype, "g", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RearrangedListView.prototype, "ac", {
        get: function () {
            return this.aa;
        },
        set: function (a) {
            this.aa = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RearrangedListView.prototype, "ab", {
        get: function () {
            return this.z;
        },
        set: function (a) {
            this.z = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RearrangedListView.prototype, "i", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RearrangedListView.prototype, "n", {
        get: function () {
            return this.m;
        },
        set: function (a) {
            this.m = a;
        },
        enumerable: true,
        configurable: true
    });
    RearrangedListView.prototype.ay = function () {
        var _this = this;
        if (this.ae == this.e || this.ae == null) {
            this.ae = new List$1(Base.$, 0);
        }
        this.ae.clear();
        if (this.e == null) {
            return;
        }
        var a = this.e.actualCount;
        if (this.h == null) {
            for (var b = 0; b < a; b++) {
                this.ae.add1(this.e.getItemAtIndex(b));
            }
        }
        else {
            for (var c = 0; c < a; c++) {
                var d = this.e.getItemAtIndex(c);
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
            this.l.n.add(((function () {
                var $ret = new SectionData();
                $ret.f = 0;
                $ret.a = null;
                $ret.b = null;
                $ret.g = 0;
                $ret.e = _this.ae.count;
                return $ret;
            })()));
        }
        var e = this.g;
        var f = new List$1(Base.$, 0);
        if (this.ad.count > 0 && this.x) {
            if (!this.q) {
                var g = this.l.n._inner[0];
                for (var h = 0; h < this.ad.count; h++) {
                    var i = this.d.indexOfKey(this.ad._inner[h]);
                    if (i != -1) {
                        this.am(g, this.ae._inner[i], h);
                    }
                }
            }
            else {
                for (var j = 0; j < this.ad.count; j++) {
                    var k = this.d.indexOfKey(this.ad._inner[j]);
                    if (k != -1) {
                        var l = this.l.d(k);
                        this.am(l, this.ae._inner[k], j);
                    }
                }
            }
        }
        if (this.n != null) {
            this.n.notifyClearItems();
        }
    };
    RearrangedListView.prototype.ai = function (a, b, c) {
        var d = a.g + a.d;
        this.ak(d, b);
        a.d++;
        a.e++;
        a.c++;
        if (c) {
            this.l.v(a, 1, 1);
        }
        return d;
    };
    RearrangedListView.prototype.aj = function (a, b, c) {
        this.ak(b, c);
        a.d++;
        a.e++;
        a.c++;
        this.l.v(a, 1, 1);
        return b;
    };
    RearrangedListView.prototype.ak = function (a, b) {
        var c = new DataSourceSpecialRow();
        c.rowType = 3;
        c.targetRow = b;
        var d = a;
        if (this.w) {
            d++;
        }
        this.ae.insert1(d, c);
        return a + 1;
    };
    RearrangedListView.prototype.al = function (a, b) {
        var c = -1;
        for (var d = 0; d < this.ad.count; d++) {
            if (this.g.i(b, this.ad._inner[d]) == 0) {
                c = d;
                break;
            }
        }
        return this.am(a, b, c);
    };
    RearrangedListView.prototype.am = function (a, b, c) {
        var d = -1;
        if (c != -1) {
            var e = a.g;
            var f = e + a.d;
            var g = false;
            for (var h = e; h < f; h++) {
                var i = this.w ? h + 1 : h;
                var j = typeCast(DataSourceSpecialRow.$, this.ae._inner[i]);
                if (this.aa != null) {
                    var k = this.aa.compare(b, j.targetRow);
                    if (k == 0 || k < 0) {
                        d = this.aj(a, h, b);
                        g = true;
                        break;
                    }
                }
                else {
                    var l = -1;
                    for (var m = 0; m < this.ad.count; m++) {
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
    };
    Object.defineProperty(RearrangedListView.prototype, "af", {
        get: function () {
            return this.l.n;
        },
        enumerable: true,
        configurable: true
    });
    RearrangedListView.prototype.at = function () {
        if (this.ae.count == 0) {
            return;
        }
        var a = null;
        var b = this.a();
        var c = this.b();
        var d = true;
        var e = this.ab;
        var f = 0;
        for (f = 0; f < this.ae.count; f++) {
            var g = this.ae._inner[f];
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
    };
    RearrangedListView.prototype.a = function () {
        var a = new Array(this.o.k.count + this.p.k.count);
        var b = 0;
        for (var c = 0; c < this.o.k.count; c++) {
            a[b] = this.o.k.item(c).propertyName;
            b++;
        }
        for (var d = 0; d < this.p.k.count; d++) {
            a[b] = this.p.k.item(d).propertyName;
            b++;
        }
        return a;
    };
    RearrangedListView.prototype.b = function () {
        var a = new Array(this.o.k.count);
        var b = 0;
        for (var c = 0; c < this.o.k.count; c++) {
            a[b] = this.o.k.item(c).propertyName;
            b++;
        }
        return a;
    };
    RearrangedListView.prototype.ap = function (a, b, c) {
        this.l.r(a);
    };
    RearrangedListView.prototype.a1 = function (a) {
        this.ad = new List$1(Array_$type, 0);
        for (var b = 0; b < a.count; b++) {
            this.ad.add(a._inner[b]);
        }
    };
    RearrangedListView.prototype.a2 = function (a, b, c) {
        this.l.y(a, this.d, b, c);
    };
    RearrangedListView.prototype.aq = function (a, b, c, d) {
        var e = new DataSourceSpecialRow();
        for (var f = 0; f < c.length; f++) {
            e.setValue(c[f], this.d.getItemProperty(b, c[f]));
            if (f < d.length) {
                e.setSectionValue(d[f], this.d.getItemProperty(b, d[f]));
            }
        }
        e.rowType = 2;
        this.ae.insert1(a, e);
    };
    RearrangedListView.prototype.ar = function (a, b, c, d) {
        var e = new DataSourceSpecialRow();
        for (var f = 0; f < c.length; f++) {
            e.setValue(c[f], this.d.getItemProperty(b, c[f]));
            if (f < d.length) {
                e.setSectionValue(d[f], this.d.getItemProperty(b, d[f]));
            }
        }
        e.rowType = 1;
        this.ae.insert1(a, e);
    };
    RearrangedListView.prototype.au = function () {
        this.ae.clear();
        if (this.n != null) {
            this.n.notifyClearItems();
        }
    };
    RearrangedListView.prototype.notifySetItem = function (a, b, c) {
        if (this.aa != null) {
            this.az(b);
            this.an(c);
        }
        else {
            this.a0(a, b);
            this.ao(a, c);
        }
    };
    RearrangedListView.prototype.ao = function (a, b) {
        if (!this.y(b)) {
            return;
        }
        var c = this.ah(a);
        this.av(c, b);
    };
    RearrangedListView.prototype.av = function (a, b) {
        this.as(a, b);
        this.a4(a, b);
    };
    RearrangedListView.prototype.as = function (a, b) {
        if (this.q) {
            var c = this.l.d(a);
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
                    var d = this.w ? 1 : 0;
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
    };
    RearrangedListView.prototype.a4 = function (a, b) {
        var c = null;
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
                var d = this.al(c, b);
                if (d != -1 && this.n != null) {
                    this.n.notifyInsertItem(d, this.ae._inner[d]);
                }
            }
        }
        else {
            var e = false;
            if (a <= c.g) {
                e = true;
            }
            var f = 0;
            var g = null;
            var h = null;
            var i = this.a();
            var j = this.b();
            if (this.w) {
                f++;
                this.ar(a, b, i, j);
                g = this.ae._inner[a];
                c.e--;
            }
            var k = new SectionData();
            k.g = a;
            k.e = a + 1;
            if (this.x) {
                for (var l = 0; l < this.ad.count; l++) {
                    if (this.g.i(b, this.ad._inner[l]) == 0) {
                        this.ai(k, b, false);
                        f++;
                        break;
                    }
                }
            }
            k.a = j;
            var m = this.c(j, b);
            k.b = m;
            var n = c.f + 1;
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
    };
    RearrangedListView.prototype.r = function (a, b, c) {
        if (this.o.k.count == 0) {
            return true;
        }
        if (this.ab.compare(b, c) == 0) {
            return true;
        }
        return false;
    };
    RearrangedListView.prototype.c = function (a, b) {
        var c = new Array(a.length);
        for (var d = 0; d < c.length; d++) {
            c[d] = this.d.getItemProperty(b, a[d]);
        }
        return c;
    };
    RearrangedListView.prototype.u = function (a, b) {
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
    };
    RearrangedListView.prototype.ah = function (a) {
        if (this.o.k.count == 0 && this.ad.count == 0 && this.h == null && this.e.actualCount == this.ae.count) {
            return a;
        }
        var b = 0;
        var c = 0;
        var d = this.ae.count;
        while (b < a && c < d) {
            while (c < d) {
                var e = this.ae._inner[c];
                var f = false;
                var viewItem_ = e;
                if ((viewItem_.$$isSpecialRow !== undefined)) {
                    f = true;
                }
                if (!f) {
                    break;
                }
                c++;
            }
            var g = this.e.getItemAtIndex(b);
            if (this.u(g, this.ae._inner[c])) {
                c++;
                b++;
            }
            else {
                b++;
            }
        }
        return c;
    };
    RearrangedListView.prototype.a0 = function (a, b) {
        var c = this.ah(a);
        if (c < this.ae.count) {
            if (this.u(b, this.ae._inner[c])) {
                this.aw(c, b);
            }
        }
    };
    RearrangedListView.prototype.aw = function (a, b) {
        this.ae.removeAt(a);
        if (this.n != null) {
            this.n.notifyRemoveItem(a, b);
        }
        this.a5(a, b);
    };
    RearrangedListView.prototype.a5 = function (a, b) {
        var c = null;
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
                for (var d = 0; d < c.d; d++) {
                    var e = 0;
                    if (this.w) {
                        e = 1;
                    }
                    var f = this.ae._inner[c.g + d + e];
                    var g = null;
                    var item_ = f;
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
                var h = 0;
                var i = null;
                var j = null;
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
    };
    RearrangedListView.prototype.s = function (a) {
        var b = (a.e - a.g) + 1;
        if (b > 2) {
            return false;
        }
        for (var c = a.g; c <= a.e; c++) {
            if (this.d.getRowType(c) == 0) {
                return false;
            }
        }
        return true;
    };
    RearrangedListView.prototype.an = function (a) {
        if (this.y(a)) {
            var b = this.ae.g(a, this.aa);
            if (b < 0) {
                b = ~b;
            }
            this.av(b, a);
        }
    };
    RearrangedListView.prototype.ax = function (a) {
        this.ad.add(a);
        var b = this.d.indexOfKey(a);
        var c = this.d.getItemAtIndex(b);
        if (b == -1) {
            return;
        }
        if (this.x) {
            var d = this.l.d(b);
            var e = this.al(d, this.ae._inner[b]);
            if (this.n != null) {
                this.n.notifyInsertItem(e, this.ae._inner[e]);
            }
        }
    };
    RearrangedListView.prototype.a3 = function (a) {
        if (this.ad.remove(a)) {
            var b = this.d.indexOfKey(a);
            var c = this.d.getItemAtIndex(b);
            if (b == -1) {
                return;
            }
            var d = this.l.d(b);
            var e = d.g;
            if (this.w) {
                e += 1;
            }
            if (this.x) {
                var f = this.j(e, this.ae._inner[b], d.d, this.a());
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
    };
    RearrangedListView.prototype.j = function (a, b, c, d) {
        var _loop_1 = function (e) {
            if (typeCast(DataSourceSpecialRow.$, this_1.ae._inner[e]) !== null) {
                var f_1 = this_1.ae._inner[e];
                if (f_1.rowType == 3) {
                    var g = f_1.targetRow;
                    if (g == b) {
                        this_1.ae.removeAt(e);
                        return { value: ((function () {
                                var $ret = new RemovedShiftedRowInfo();
                                $ret.item = f_1;
                                $ret.a = e;
                                return $ret;
                            })()) };
                    }
                }
            }
        };
        var this_1 = this;
        for (var e = a + (c - 1); e >= a; e--) {
            var state_1 = _loop_1(e);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return null;
    };
    RearrangedListView.prototype.az = function (a) {
        var b = this.ae.g(a, this.aa);
        if (b >= 0) {
            var c = this.ae.count;
            var d = 0;
            while (d < c) {
                var e = b - d;
                var f = b + d;
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
            var g = this.ae._inner[b];
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
            var h = this.ae.count;
            for (var i = 0; i < h; i++) {
                var j = this.ae._inner[i];
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
    };
    RearrangedListView.prototype.y = function (a) {
        if (this.h == null) {
            return true;
        }
        return this.h(a);
    };
    RearrangedListView.prototype.notifyClearItems = function () {
    };
    RearrangedListView.prototype.notifyInsertItem = function (a, b) {
        if (this.aa != null) {
            this.an(b);
        }
        else {
            this.ao(a, b);
        }
    };
    RearrangedListView.prototype.notifyRemoveItem = function (a, b) {
        if (this.aa != null) {
            this.az(b);
        }
        else {
            this.a0(a, b);
        }
    };
    RearrangedListView.$t = markType(RearrangedListView, 'RearrangedListView', Base.$, [ISupportsDataChangeNotifications_$type]);
    return RearrangedListView;
}(Base));
export { RearrangedListView };
//# sourceMappingURL=RearrangedListView.js.map