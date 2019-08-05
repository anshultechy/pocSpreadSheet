/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, fromEnum, markType } from "../../igniteui-angular-core/ES5/type";
import { WorksheetRegionAddress } from "../../igniteui-angular-excel/ES5/excel.core";
/**
 * @hidden
 */
var TableExpansionInfo = /** @class */ (function (_super) {
    tslib_1.__extends(TableExpansionInfo, _super);
    function TableExpansionInfo() {
        var _this = _super.call(this) || this;
        _this.d = null;
        _this.b = new WorksheetRegionAddress();
        _this.c = new WorksheetRegionAddress();
        return _this;
    }
    TableExpansionInfo.e = function (a, b, c) {
        var d = a._by;
        if (c) {
            return d._ac <= b._ac && d._ae >= b._ae;
        }
        else {
            return d._w <= b._w && d._x >= b._x;
        }
    };
    TableExpansionInfo.a = function (a, b) {
        var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _g, e_6, _k;
        if (a == null || a.length > 1) {
            return null;
        }
        if (b == null || b.length > 1) {
            return null;
        }
        var c = a[0];
        var d = b[0];
        var e = false;
        var f = null;
        if (c.isProtected) {
            return null;
        }
        try {
            for (var _l = tslib_1.__values(fromEnum(c._tables$i)), _o = _l.next(); !_o.done; _o = _l.next()) {
                var g = _o.value;
                if (g._by._j(d)) {
                    if (f == null) {
                        f = g;
                    }
                    else if (f != g) {
                        return null;
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_o && !_o.done && (_a = _l.return)) _a.call(_l);
            }
            finally { if (e_1) throw e_1.error; }
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
                try {
                    for (var _p = tslib_1.__values(fromEnum(c._tables$i)), _r = _p.next(); !_r.done; _r = _p.next()) {
                        var h = _r.value;
                        var i = h._by;
                        if (h._by._x + 1 == d._w && TableExpansionInfo.e(h, d, true)) {
                            e = true;
                            f = h;
                            break;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_r && !_r.done && (_b = _p.return)) _b.call(_p);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (f == null && d._ac > 0) {
                try {
                    for (var _s = tslib_1.__values(fromEnum(c._tables$i)), _u = _s.next(); !_u.done; _u = _s.next()) {
                        var j = _u.value;
                        var k = j._by;
                        if (j._by._ae + 1 == d._ac && !j.isTotalsRowVisible && TableExpansionInfo.e(j, d, false)) {
                            e = false;
                            f = j;
                            break;
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_u && !_u.done && (_c = _s.return)) _c.call(_s);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
            if (f == null) {
                return null;
            }
        }
        var l = f._by;
        var m = e ? new WorksheetRegionAddress(1, l._ac, l._ae, (l._x + 1), d._x) : new WorksheetRegionAddress(1, l._ae + 1, d._ae, l._w, l._x);
        try {
            for (var _v = tslib_1.__values(fromEnum(c._rows$i._m(m._ac, m._ae))), _y = _v.next(); !_y.done; _y = _v.next()) {
                var n = _y.value;
                try {
                    for (var _z = tslib_1.__values(fromEnum(n._ch(m._w, m._x, true))), _0 = _z.next(); !_0.done; _0 = _z.next()) {
                        var o = _0.value;
                        if (o.o && !d._i(n.index, o.r)) {
                            return null;
                        }
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (_0 && !_0.done && (_g = _z.return)) _g.call(_z);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_y && !_y.done && (_d = _v.return)) _d.call(_v);
            }
            finally { if (e_4) throw e_4.error; }
        }
        try {
            for (var _1 = tslib_1.__values(fromEnum(c._mergedCellsRegions$i)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var p = _2.value;
                if (p._t(m._ac, m._w, m._ae, m._x)) {
                    return null;
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_k = _1.return)) _k.call(_1);
            }
            finally { if (e_6) throw e_6.error; }
        }
        var q = new TableExpansionInfo();
        q.d = f;
        if (e) {
            q.b = l._e(d._x);
        }
        else {
            q.b = l._f(d._ae);
        }
        q.c = m;
        return q;
    };
    TableExpansionInfo.f = function (a, b, c) {
        var e_7, _a, e_8, _b;
        if (a == null || a.length > 1) {
            return false;
        }
        var d = a[0];
        var e = d._de(c.o, c.m);
        if (e == null) {
            return false;
        }
        var f = e._by;
        var g = 0;
        var h = e.isTotalsRowVisible ? f._f(f._ae - 1) : f;
        for (var j = 0; j < b.length; j++) {
            var i = b[j];
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
        var k = f._ae + g;
        try {
            for (var _c = tslib_1.__values(fromEnum(d._rows$i._m(f._ae + 1, f._ae + g))), _d = _c.next(); !_d.done; _d = _c.next()) {
                var l = _d.value;
                try {
                    for (var _g = tslib_1.__values(fromEnum(l._ch(f._w, f._x, true))), _k = _g.next(); !_k.done; _k = _g.next()) {
                        var m = _k.value;
                        if (m.o) {
                            k = l.index;
                            break;
                        }
                    }
                }
                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                finally {
                    try {
                        if (_k && !_k.done && (_b = _g.return)) _b.call(_g);
                    }
                    finally { if (e_8) throw e_8.error; }
                }
                if (k > f._ae) {
                    break;
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_7) throw e_7.error; }
        }
        var n = k - f._ae;
        var o = g - n;
        if (o > 0) {
            e.insertDataRows(e.dataAreaRegion._aa, o);
        }
        if (n > 0) {
            var p = e._by;
            p = p._f(p._ae + n);
            e._resize2(p._ah(true, true, 2, 1), 1);
        }
        return true;
    };
    TableExpansionInfo.prototype.g = function () {
        var e_9, _a, e_10, _b, e_11, _c;
        if (this.d.worksheet == null) {
            return;
        }
        try {
            for (var _d = tslib_1.__values(fromEnum(this.d.worksheet._tables$i)), _g = _d.next(); !_g.done; _g = _d.next()) {
                var a = _g.value;
                var b = a._by;
                if (b._j(this.c)) {
                    return;
                }
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_9) throw e_9.error; }
        }
        var c = true;
        try {
            for (var _k = tslib_1.__values(fromEnum(this.d.worksheet._rows$i._m(this.c._ac, this.c._ae))), _l = _k.next(); !_l.done; _l = _k.next()) {
                var d = _l.value;
                try {
                    for (var _o = tslib_1.__values(fromEnum(d._ch(this.c._w, this.c._x, true))), _p = _o.next(); !_p.done; _p = _o.next()) {
                        var e = _p.value;
                        if (e.o) {
                            c = false;
                            break;
                        }
                    }
                }
                catch (e_11_1) { e_11 = { error: e_11_1 }; }
                finally {
                    try {
                        if (_p && !_p.done && (_c = _o.return)) _c.call(_o);
                    }
                    finally { if (e_11) throw e_11.error; }
                }
                if (!c) {
                    break;
                }
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_l && !_l.done && (_b = _k.return)) _b.call(_k);
            }
            finally { if (e_10) throw e_10.error; }
        }
        if (c) {
            return;
        }
        if (WorksheetRegionAddress._q(this.d._by, this.b)) {
            this.d._resize2(this.b._ah(true, true, 2, 1), 1);
        }
    };
    TableExpansionInfo.$t = markType(TableExpansionInfo, 'TableExpansionInfo');
    return TableExpansionInfo;
}(Base));
export { TableExpansionInfo };
//# sourceMappingURL=TableExpansionInfo.js.map
