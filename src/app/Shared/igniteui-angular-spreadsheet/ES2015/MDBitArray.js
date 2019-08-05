/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { BitArray } from "../../igniteui-angular-core/ES2015/BitArray";
import { ArgumentOutOfRangeException } from "../../igniteui-angular-core/ES2015/ArgumentOutOfRangeException";
/**
 * @hidden
 */
export class MDBitArray extends Base {
    constructor(a, b) {
        super();
        this.e = 0;
        this.f = 0;
        this.a = null;
        this.i(a, b);
    }
    get g() {
        return this.e;
    }
    get b() {
        if (this.a != null) {
            for (let a = 0; a < this.a.length; a++) {
                let b = this.a[a];
                if (b != null) {
                    for (let c = 0; c < this.e; c++) {
                        if (b.item(c)) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }
    get h() {
        return this.f;
    }
    item(a, b, c) {
        if (arguments.length === 3) {
            if (a < 0 || a >= this.f || b < 0 || b >= this.e) {
                throw new ArgumentOutOfRangeException(0);
            }
            if (this.a == null) {
                if (c == false) {
                    return;
                }
                this.a = new Array(this.f);
            }
            let d = this.a[a];
            if (d == null) {
                if (c == false) {
                    return;
                }
                this.a[a] = d = new BitArray(2, this.e);
            }
            d.item(b, c);
            return c;
        }
        else {
            if (a < 0 || a >= this.f || b < 0 || b >= this.e) {
                throw new ArgumentOutOfRangeException(0);
            }
            if (this.a == null) {
                return false;
            }
            let c = this.a[a];
            if (c == null) {
                return false;
            }
            return c.item(b);
        }
    }
    c(a) {
        if (a < 0 || a >= this.f) {
            throw new ArgumentOutOfRangeException(0);
        }
        return this.a != null && this.a[a] != null;
    }
    i(a, b) {
        if (a < 0 || b < 0) {
            throw new ArgumentOutOfRangeException(0);
        }
        if (this.a != null) {
            if (a > this.a.length) {
                this.a = null;
            }
            else {
                for (let c = 0; c < this.a.length; c++) {
                    let d = this.a[c];
                    if (d != null) {
                        d.j = b;
                        d.m(false);
                    }
                }
            }
        }
        this.f = a;
        this.e = b;
    }
}
MDBitArray.$t = markType(MDBitArray, 'MDBitArray');
//# sourceMappingURL=MDBitArray.js.map