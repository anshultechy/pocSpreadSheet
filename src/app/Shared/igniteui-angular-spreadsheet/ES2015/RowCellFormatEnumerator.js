/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { RowColumnBaseCellFormatEnumerator } from "./RowColumnBaseCellFormatEnumerator";
import { markType, getEnumerator } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class RowCellFormatEnumerator extends RowColumnBaseCellFormatEnumerator {
    constructor() {
        super(...arguments);
        this.i = null;
        this.n = 0;
        this.o = 0;
        this.k = null;
        this.l = null;
        this.m = 0;
        this.j = null;
    }
    h(a, b, c, d) {
        this.i = a;
        this.k = a._rows$i._aj(b);
        this.n = c;
        this.o = d;
        this.m = -1;
        this.l = null;
        this.j = null;
        this.a = null;
        this.e = -1;
        this.d = -1;
    }
    c() {
        if (this.d >= this.o) {
            this.a = null;
            this.e = this.d = this.o + 1;
            return false;
        }
        else if (this.m < 0) {
            this.m = this.n;
            if (this.k != null) {
                this.l = getEnumerator(this.k._ch(this.n, this.o));
                if (!this.l.moveNext()) {
                    this.l = null;
                }
            }
        }
        else {
            this.m = this.d + 1;
        }
        while (this.l != null) {
            let a = this.l.current;
            if (a.r >= this.m && a.n) {
                break;
            }
            if (!this.l.moveNext()) {
                this.l = null;
            }
        }
        if (this.l != null) {
            let b = this.l.current;
            if (b.r == this.m) {
                this.e = this.d = this.m;
                this.a = b.j;
                return true;
            }
        }
        if (this.j == null || this.j.r < this.m) {
            this.j = this.i._cb(this.m);
        }
        if (this.k != null && this.k._hasCellFormat) {
            this.a = this.k._cellFormatInternal.d;
        }
        else {
            this.a = this.j.b;
        }
        this.e = this.m;
        if (this.l != null && this.l.current.r <= this.j.r) {
            this.d = this.l.current.r - 1;
        }
        else {
            this.d = this.j.r;
        }
        return true;
    }
}
RowCellFormatEnumerator.$t = markType(RowCellFormatEnumerator, 'RowCellFormatEnumerator', RowColumnBaseCellFormatEnumerator.$);
//# sourceMappingURL=RowCellFormatEnumerator.js.map