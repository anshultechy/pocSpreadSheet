/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ValueType, markStruct } from "./type";
/**
 * @hidden
 */
export class Size extends ValueType {
    constructor(a, ..._rest) {
        super();
        this.i = 0;
        this.h = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    this.i = c;
                    this.h = d;
                }
                break;
        }
    }
    equals(a) {
        if (a == null) {
            return super.equals(a);
        }
        let b = a;
        return b.i == this.i && b.h == this.h;
    }
    getHashCode() {
        return (this.i) ^ (this.h);
    }
    get width() {
        return this.i;
    }
    set width(a) {
        this.i = a;
    }
    get height() {
        return this.h;
    }
    set height(a) {
        this.h = a;
    }
    get isEmpty() {
        return this.i < 0;
    }
    static get empty() {
        let a = new Size(0);
        a.i = Number.NEGATIVE_INFINITY;
        a.h = Number.NEGATIVE_INFINITY;
        return a;
    }
    static l_op_Inequality(a, b) {
        return !(Size.l_op_Equality(a, b));
    }
    static l_op_Inequality_Lifted(a, b) {
        if (!a.hasValue) {
            return b.hasValue;
        }
        else if (!b.hasValue) {
            return true;
        }
        return Size.l_op_Inequality(a.value, b.value);
    }
    static l_op_Equality(a, b) {
        return a.i == b.i && a.h == b.h;
    }
    static l_op_Equality_Lifted(a, b) {
        if (!a.hasValue) {
            return !b.hasValue;
        }
        else if (!b.hasValue) {
            return false;
        }
        return Size.l_op_Equality(a.value, b.value);
    }
}
Size.$t = markStruct(Size, 'Size');
//# sourceMappingURL=Size.js.map