/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ValueType, IEquatable$1_$type, Base, Nullable$1, typeCast, markStruct } from "../../igniteui-angular-core/ES2015/type";
import { ComparisonComparer$1 } from "./ComparisonComparer$1";
import { stringFormat } from "../../igniteui-angular-core/ES2015/stringExtended";
/**
 * @hidden
 */
export class IntRange extends ValueType {
    constructor(a, ..._rest) {
        super();
        this._i = 0;
        this._h = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    if (c < d) {
                        this._i = c;
                        this._h = d;
                    }
                    else {
                        this._i = d;
                        this._h = c;
                    }
                }
                break;
        }
    }
    equals1(a) {
        if (typeCast(IntRange.$, a) !== null) {
            return this.equals(a);
        }
        return false;
    }
    getHashCode() {
        return this._i << 16 ^ this._h;
    }
    toString() {
        return stringFormat("{0}-{1}", this._i, this._h);
    }
    static get _f() {
        if (IntRange._d == null) {
            IntRange._d = new ComparisonComparer$1(IntRange.$, (a, b) => Base.compareSimple(a._i, b._i));
        }
        return IntRange._d;
    }
    static get _g() {
        if (IntRange._e == null) {
            IntRange._e = new ComparisonComparer$1(IntRange.$, (a, b) => {
                let c = Base.compareSimple(a._i, b._i);
                if (c == 0) {
                    c = Base.compareSimple(a._h, b._h);
                }
                return c;
            });
        }
        return IntRange._e;
    }
    _c(a) {
        return this._i <= a && a <= this._h;
    }
    _j(a) {
        if (this._h < a._i || this._i > a._h) {
            return Nullable$1.toNullable(IntRange.$, null);
        }
        let b = this._i < a._i ? a._i : this._i;
        let c = this._h < a._h ? this._h : a._h;
        return Nullable$1.toNullable(IntRange.$, new IntRange(1, b, c));
    }
    _a(a) {
        if (this._i >= a) {
            return this;
        }
        let b = a;
        let c = this._h < a ? a : this._h;
        return new IntRange(1, b, c);
    }
    _b(a) {
        if (this._h <= a) {
            return this;
        }
        let b = this._i < a ? this._i : a;
        let c = a;
        return new IntRange(1, b, c);
    }
    equals(a) {
        return this._i == a._i && this._h == a._h;
    }
}
IntRange.$t = markStruct(IntRange, 'IntRange', ValueType.$, [IEquatable$1_$type.specialize(-1)]).initSelfReferences();
IntRange._d = null;
IntRange._e = null;
//# sourceMappingURL=IntRange.js.map