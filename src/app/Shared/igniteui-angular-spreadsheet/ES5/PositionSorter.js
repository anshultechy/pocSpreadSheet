/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IList$1_$type, String_$type, fromEnum, markType } from "../../igniteui-angular-core/ES5/type";
import { Dictionary$2 } from "../../igniteui-angular-core/ES5/Dictionary$2";
import { ISupportPositioning_$type } from "./ISupportPositioning";
import { HashSet$1 } from "../../igniteui-angular-core/ES5/HashSet$1";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { Enumerable } from "../../igniteui-angular-core/ES5/Enumerable";
/**
 * @hidden
 */
var PositionSorter = /** @class */ (function (_super) {
    tslib_1.__extends(PositionSorter, _super);
    function PositionSorter() {
        var _this = _super.call(this) || this;
        _this.i = null;
        _this.j = null;
        _this.g = new Dictionary$2(String_$type, IList$1_$type.specialize(ISupportPositioning_$type), 0);
        _this.f = new Dictionary$2(ISupportPositioning_$type, HashSet$1.$.specialize(ISupportPositioning_$type), 0);
        _this.c = new Dictionary$2(ISupportPositioning_$type, HashSet$1.$.specialize(ISupportPositioning_$type), 0);
        _this.e = new Dictionary$2(ISupportPositioning_$type, HashSet$1.$.specialize(ISupportPositioning_$type), 0);
        _this.d = new Dictionary$2(ISupportPositioning_$type, HashSet$1.$.specialize(ISupportPositioning_$type), 0);
        _this.a = false;
        return _this;
    }
    PositionSorter.n = function (a, b, c) {
        if (c === void 0) { c = null; }
        var d = ((function () {
            var $ret = new PositionSorter();
            $ret.j = a;
            $ret.i = c;
            return $ret;
        })());
        b = d.b();
        return {
            p1: b
        };
    };
    PositionSorter.prototype.m = function (a, b) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(this.f.item(a))), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                if (!b.contains(c)) {
                    b.add_1(c);
                    this.m(c, b);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    PositionSorter.prototype.l = function (a, b) {
        var e_2, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(this.c.item(a))), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                if (!b.contains(c)) {
                    b.add_1(c);
                    this.l(c, b);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    PositionSorter.prototype.k = function (a, b, c) {
        if (c === void 0) { c = 0; }
        if (a == b) {
            return 0;
        }
        if (this.e.item(a).contains(b)) {
            return -1;
        }
        if (this.d.item(a).contains(b)) {
            return 1;
        }
        if (1 == c) {
            if (a.key != b.key) {
                this.a = true;
            }
            if (this.i != null) {
                return this.i.compare(a, b);
            }
            return 0;
        }
        return -this.k(b, a, 1);
    };
    PositionSorter.prototype.h = function (a, b) {
        var _this = this;
        var c = b ? a.before : a.after;
        var d = new HashSet$1(ISupportPositioning_$type, 0);
        if (null != c) {
            d.w(Enumerable.p(String_$type, ISupportPositioning_$type, Enumerable.u(String_$type, c, function (e) { return _this.g.containsKey(e); }), function (e) { return _this.g.item(e); }));
        }
        return d;
    };
    PositionSorter.prototype.b = function () {
        var _this = this;
        var e_3, _a, e_4, _b, e_5, _c, e_6, _d, e_7, _e, e_8, _f;
        var a = true;
        var _loop_1 = function (b) {
            var c;
            if (!((function () { var d = _this.g.tryGetValue(b.key, c); c = d.p1; return d.ret; })())) {
                this_1.g.item(b.key, c = new List$1(ISupportPositioning_$type, 0));
            }
            c.add(b);
        };
        var this_1 = this;
        try {
            for (var _g = tslib_1.__values(fromEnum(this.j)), _h = _g.next(); !_h.done; _h = _g.next()) {
                var b = _h.value;
                _loop_1(b);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_h && !_h.done && (_a = _g.return)) _a.call(_g);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            for (var _j = tslib_1.__values(fromEnum(this.j)), _k = _j.next(); !_k.done; _k = _j.next()) {
                var d = _k.value;
                this.f.item(d, this.h(d, true));
                this.c.item(d, this.h(d, false));
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_k && !_k.done && (_b = _j.return)) _b.call(_j);
            }
            finally { if (e_4) throw e_4.error; }
        }
        try {
            for (var _l = tslib_1.__values(fromEnum(this.j)), _m = _l.next(); !_m.done; _m = _l.next()) {
                var e = _m.value;
                try {
                    for (var _o = tslib_1.__values(fromEnum(this.f.item(e))), _p = _o.next(); !_p.done; _p = _o.next()) {
                        var f = _p.value;
                        this.c.item(f).add_1(e);
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_p && !_p.done && (_d = _o.return)) _d.call(_o);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
                try {
                    for (var _q = tslib_1.__values(fromEnum(this.c.item(e))), _r = _q.next(); !_r.done; _r = _q.next()) {
                        var g = _r.value;
                        this.f.item(g).add_1(e);
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (_r && !_r.done && (_e = _q.return)) _e.call(_q);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_m && !_m.done && (_c = _l.return)) _c.call(_l);
            }
            finally { if (e_5) throw e_5.error; }
        }
        try {
            for (var _s = tslib_1.__values(fromEnum(this.j)), _t = _s.next(); !_t.done; _t = _s.next()) {
                var h = _t.value;
                var i = new HashSet$1(ISupportPositioning_$type, 0);
                var j = new HashSet$1(ISupportPositioning_$type, 0);
                this.m(h, i);
                this.l(h, j);
                this.e.item(h, i);
                this.d.item(h, j);
                if (i.i(j)) {
                    a = false;
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_t && !_t.done && (_f = _s.return)) _f.call(_s);
            }
            finally { if (e_8) throw e_8.error; }
        }
        this.j.aa(function (k, l) { return _this.k(k, l); });
        if (this.a) {
        }
        return a;
    };
    PositionSorter.$t = markType(PositionSorter, 'PositionSorter');
    return PositionSorter;
}(Base));
export { PositionSorter };
//# sourceMappingURL=PositionSorter.js.map
