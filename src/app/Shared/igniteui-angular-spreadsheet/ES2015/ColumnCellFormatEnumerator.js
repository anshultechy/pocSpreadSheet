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
export class ColumnCellFormatEnumerator extends RowColumnBaseCellFormatEnumerator {
    constructor() {
        super(...arguments);
        this.i = null;
        this.n = 0;
        this.o = 0;
        this.m = 0;
        this.l = 0;
        this.j = null;
        this.k = null;
    }
    h(a, b, c, d) {
        this.i = a;
        this.l = b;
        this.j = a._cb(b);
        this.n = c;
        this.o = d;
        this.m = -1;
        this.k = null;
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
            this.k = getEnumerator(this.i._rows$i._m(this.n, this.o));
            if (!this.k.moveNext()) {
                this.k = null;
            }
        }
        else {
            this.m = this.d + 1;
        }
        while (this.k != null) {
            let a = this.k.current;
            if (a.index >= this.m) {
                break;
            }
            if (!this.k.moveNext()) {
                this.k = null;
            }
        }
        if (this.k != null) {
            let b = this.k.current;
            if (b.index == this.m) {
                let c = b._a8(this.l);
                if (c == null && b._hasCellFormat) {
                    c = b._cellFormatInternal.d;
                }
                if (c != null) {
                    this.e = this.d = this.m;
                    this.a = c;
                    return true;
                }
            }
        }
        this.a = this.j.b;
        this.e = this.m;
        if (this.k != null && this.m == this.k.current.index && !this.k.moveNext()) {
            this.k = null;
        }
        this.d = this.k != null ? this.k.current.index - 1 : this.o;
        return true;
    }
}
ColumnCellFormatEnumerator.$t = markType(ColumnCellFormatEnumerator, 'ColumnCellFormatEnumerator', RowColumnBaseCellFormatEnumerator.$);
//# sourceMappingURL=ColumnCellFormatEnumerator.js.map
