/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ValueType, markStruct } from "../../igniteui-angular-core/ES2015/type";
import { ArgumentException } from "../../igniteui-angular-core/ES2015/ArgumentException";
import { isNaN_, isInfinity } from "../../igniteui-angular-core/ES2015/number";
/**
 * @hidden
 */
export class RowColLength extends ValueType {
    constructor(a, ..._rest) {
        super();
        this.h = 0;
        this.c = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    let c = _rest[0];
                    RowColLength.j(c, 1);
                    this.h = c;
                    this.c = 1;
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    RowColLength.j(c, d);
                    this.h = ((d == 0) ? 0 : c);
                    this.c = d;
                }
                break;
        }
    }
    get e() {
        return this.c == 1;
    }
    get f() {
        return this.c == 0;
    }
    get g() {
        return this.c == 2;
    }
    get d() {
        return this.c;
    }
    static get a() {
        return RowColLength.b;
    }
    get i() {
        if (this.c != 0) {
            return this.h;
        }
        return 1;
    }
    static j(a, b) {
        if (isNaN_(a)) {
            throw new ArgumentException(0);
        }
        if (isInfinity(a)) {
            throw new ArgumentException(0);
        }
        if (b != 0 && b != 1 && b != 2) {
            throw new ArgumentException(0);
        }
    }
}
RowColLength.$t = markStruct(RowColLength, 'RowColLength');
RowColLength.b = new RowColLength(2, 1, 0);
//# sourceMappingURL=RowColLength.js.map