/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ValueType, markStruct } from "../../igniteui-angular-core/ES2015/type";
import { Convert } from "../../igniteui-angular-core/ES2015/Convert";
import { u32BitwiseAnd } from "../../igniteui-angular-core/ES2015/numberExtended";
/**
 * @hidden
 */
export class LongValue extends ValueType {
    constructor(a, ..._rest) {
        super();
        this.j = 0;
        this.i = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    this.j = c;
                    this.i = d;
                }
                break;
        }
    }
    static a() {
        return new LongValue(1, -1, -1);
    }
    f(a) {
        return (a.j & this.j) == a.j && (a.i & this.i) == a.i;
    }
    g(a) {
        return (a.j & this.j) != 0 || (a.i & this.i) != 0;
    }
    h(a, b) {
        return !this.g(a) && this.f(b);
    }
    static c(a, b) {
        return new LongValue(1, a.j | b.j, a.i | b.i);
    }
    d(a) {
        return new LongValue(1, this.j, this.i | a);
    }
    e(a) {
        return new LongValue(1, this.j | a, this.i);
    }
    static b(a) {
        return new LongValue(1, (u32BitwiseAnd(a, 4294967295)), Convert.toInt32(a / Math.pow(2, 32)));
    }
    k() {
        return Convert.toInt64(this.i * Math.pow(2, 32) + this.j);
    }
}
LongValue.$t = markStruct(LongValue, 'LongValue');
//# sourceMappingURL=LongValue.js.map