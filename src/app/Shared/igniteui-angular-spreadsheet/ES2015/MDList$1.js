/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { ArgumentOutOfRangeException } from "../../igniteui-angular-core/ES2015/ArgumentOutOfRangeException";
import { arrayClear1 } from "../../igniteui-angular-core/ES2015/arrayExtended";
/**
 * @hidden
 */
export class MDList$1 extends Base {
    constructor($t, a, b) {
        super();
        this.$t = null;
        this.e = 0;
        this.g = 0;
        this.a = null;
        this.f = 0;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        this.j(a, b);
    }
    get h() {
        return this.e;
    }
    get c() {
        if (this.a != null) {
            for (let a = 0; a < this.g; a++) {
                let b = this.a[a];
                if (b != null) {
                    for (let c = 0; c < this.e; c++) {
                        if (b[c] != null) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }
    get i() {
        return this.g;
    }
    item(a, b, c) {
        if (arguments.length === 3) {
            if (a < 0 || a >= this.g || b < 0 || b >= this.e) {
                throw new ArgumentOutOfRangeException(0);
            }
            if (this.a == null) {
                if (c == null) {
                    return;
                }
                this.a = new Array(this.g);
            }
            let d = this.a[a];
            if (d == null) {
                if (c == null) {
                    return;
                }
                this.a[a] = d = new Array(this.f);
            }
            d[b] = c;
            return c;
        }
        else {
            if (a < 0 || a >= this.g || b < 0 || b >= this.e) {
                throw new ArgumentOutOfRangeException(0);
            }
            if (this.a == null) {
                return null;
            }
            let c = this.a[a];
            if (c == null) {
                return null;
            }
            return c[b];
        }
    }
    d(a) {
        if (a < 0 || a >= this.g) {
            throw new ArgumentOutOfRangeException(0);
        }
        return this.a != null && this.a[a] != null;
    }
    j(a, b) {
        if (a < 0 || b < 0) {
            throw new ArgumentOutOfRangeException(0);
        }
        if (this.a != null) {
            if (a > this.a.length) {
                this.a = null;
            }
            else if (b <= this.f) {
                for (let c = 0; c < this.g; c++) {
                    let d = this.a[c];
                    if (d != null) {
                        for (let e = 0; e < this.e; e++) {
                            d[e] = null;
                        }
                    }
                }
            }
            else {
                arrayClear1(this.a, 0, this.a.length);
            }
        }
        if (b > this.f) {
            this.f = b;
        }
        this.g = a;
        this.e = b;
    }
}
MDList$1.$t = markType(MDList$1, 'MDList$1');
//# sourceMappingURL=MDList$1.js.map