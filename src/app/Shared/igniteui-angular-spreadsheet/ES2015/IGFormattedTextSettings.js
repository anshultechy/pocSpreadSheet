/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IEquatable$1_$type, Nullable$1, Boolean_$type, Number_$type, typeCast, String_$type, Type, markType } from "../../igniteui-angular-core/ES2015/type";
import { WorkbookColorInfo, FontSuperscriptSubscriptStyle_$type, FontUnderlineStyle_$type } from "../../igniteui-angular-excel/ES2015/excel.core";
import { EqualityComparer$1 } from "../../igniteui-angular-core/ES2015/EqualityComparer$1";
import { nullableNotEquals } from "../../igniteui-angular-core/ES2015/nullable";
/**
 * @hidden
 */
export class IGFormattedTextSettings extends Base {
    constructor() {
        super(...arguments);
        this._u = null;
        this._i = Nullable$1.toNullable(Boolean_$type, null);
        this._j = Nullable$1.toNullable(Number_$type, null);
        this._k = Nullable$1.toNullable(Boolean_$type, null);
        this._l = Nullable$1.toNullable(Boolean_$type, null);
        this._m = Nullable$1.toNullable(FontSuperscriptSubscriptStyle_$type, null);
        this._n = Nullable$1.toNullable(FontUnderlineStyle_$type, null);
        this._c = null;
        this._a = 0;
    }
    equals1(a) {
        let b = typeCast(IGFormattedTextSettings.$, a);
        return b != null && this.equals(b);
    }
    getHashCode() {
        return Base.getHashCodeStatic(this._a);
    }
    get _v() {
        return this._u;
    }
    set _v(a) {
        if (this._u != a) {
            this._u = a;
            this._ab(String_$type, a, 2);
        }
    }
    get _o() {
        return this._i;
    }
    set _o(a) {
        if (nullableNotEquals(this._i, a)) {
            this._i = a;
            this._ab(Nullable$1.$.specialize(Boolean_$type), a, 4);
        }
    }
    get _p() {
        return this._j;
    }
    set _p(a) {
        if (nullableNotEquals(this._j, a)) {
            this._j = a;
            this._ab(Nullable$1.$.specialize(Number_$type), a, 8);
        }
    }
    get _b() {
        return this._a;
    }
    get _q() {
        return this._k;
    }
    set _q(a) {
        if (nullableNotEquals(this._k, a)) {
            this._k = a;
            this._ab(Nullable$1.$.specialize(Boolean_$type), a, 16);
        }
    }
    get _r() {
        return this._l;
    }
    set _r(a) {
        if (nullableNotEquals(this._l, a)) {
            this._l = a;
            this._ab(Nullable$1.$.specialize(Boolean_$type), a, 32);
        }
    }
    get _s() {
        return this._m;
    }
    set _s(a) {
        if (nullableNotEquals(this._m, a)) {
            this._m = a;
            this._ab(Nullable$1.$.specialize(FontSuperscriptSubscriptStyle_$type), a, 64);
        }
    }
    get _t() {
        return this._n;
    }
    set _t(a) {
        if (nullableNotEquals(this._n, a)) {
            this._n = a;
            this._ab(Nullable$1.$.specialize(FontUnderlineStyle_$type), a, 256);
        }
    }
    get _d() {
        return this._c;
    }
    set _d(a) {
        if (WorkbookColorInfo.l_op_Inequality(this._c, a)) {
            this._c = a;
            this._ab(WorkbookColorInfo.$, a, 128);
        }
    }
    _w(a) {
        this._x(a, false);
    }
    _x(a, b) {
        let c = this._y(String_$type, this._u, a._u, b, 2);
        this._u = c.p0;
        let d = this._y(Nullable$1.$.specialize(Boolean_$type), this._i, a._i, b, 4);
        this._i = d.p0;
        let e = this._y(Nullable$1.$.specialize(Number_$type), this._j, a._j, b, 8);
        this._j = e.p0;
        let f = this._y(Nullable$1.$.specialize(Boolean_$type), this._l, a._l, b, 32);
        this._l = f.p0;
        let g = this._y(Nullable$1.$.specialize(Boolean_$type), this._k, a._k, b, 16);
        this._k = g.p0;
        let h = this._y(Nullable$1.$.specialize(FontSuperscriptSubscriptStyle_$type), this._m, a._m, b, 64);
        this._m = h.p0;
        let i = this._y(Nullable$1.$.specialize(FontUnderlineStyle_$type), this._n, a._n, b, 256);
        this._n = i.p0;
        let j = this._y(WorkbookColorInfo.$, this._c, a._c, b, 128);
        this._c = j.p0;
    }
    _y($t, a, b, c, d, e = null) {
        if ((e || EqualityComparer$1.defaultEqualityComparerValue($t)).equalsC(a, b) == c) {
            this._a &= ~d;
            a = Type.getDefaultValue($t);
        }
        return {
            p0: a
        };
    }
    _z(a) {
        this._x(a, true);
    }
    equals(a) {
        if (a._a != this._a) {
            return false;
        }
        if (nullableNotEquals(a._j, this._j) || nullableNotEquals(a._l, this._l) || nullableNotEquals(a._k, this._k) || nullableNotEquals(a._m, this._m) || nullableNotEquals(a._n, this._n) || nullableNotEquals(a._i, this._i)) {
            return false;
        }
        if (!Base.equalsStatic(a._u, this._u)) {
            return false;
        }
        if (!Base.equalsStatic(a._c, this._c)) {
            return false;
        }
        return true;
    }
    _f() {
        return this._a != 0;
    }
    _g(a) {
        return (a & this._a) != 0;
    }
    _aa(a) {
        if (a._a != 0) {
            if (!this._g(2)) {
                this._v = a._v;
            }
            if (!this._g(4)) {
                this._o = a._o;
            }
            if (!this._g(8)) {
                this._p = a._p;
            }
            if (!this._g(32)) {
                this._r = a._r;
            }
            if (!this._g(64)) {
                this._s = a._s;
            }
            if (!this._g(256)) {
                this._t = a._t;
            }
            if (!this._g(16)) {
                this._q = a._q;
            }
            if (!this._g(128)) {
                this._d = a._d;
            }
        }
    }
    _ab($t, a, b) {
        if (EqualityComparer$1.defaultEqualityComparerValue($t).equalsC(a, Type.getDefaultValue($t))) {
            this._a &= ~b;
        }
        else {
            this._a |= b;
        }
    }
}
IGFormattedTextSettings.$t = markType(IGFormattedTextSettings, 'IGFormattedTextSettings', Base.$, [IEquatable$1_$type.specialize(-1)]).initSelfReferences();
//# sourceMappingURL=IGFormattedTextSettings.js.map
