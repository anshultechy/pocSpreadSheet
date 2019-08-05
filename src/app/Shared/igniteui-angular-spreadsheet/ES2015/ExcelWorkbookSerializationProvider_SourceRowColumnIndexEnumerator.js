/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IEnumerator$1_$type, Number_$type, markType, getEnumerator } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator extends Base {
    constructor(a, b, c, d) {
        super();
        this._c = null;
        this._a = null;
        this._g = 0;
        this._f = 0;
        this._h = 0;
        this._d = null;
        this._e = 0;
        this._i = 0;
        this._j = 0;
        this._b = null;
        this._c = a;
        this._a = b;
        this._g = d;
        this._j = c;
        this.reset();
    }
    get current() {
        return this._e;
    }
    dispose() {
        this._d = null;
    }
    get currentObject() {
        return this.current;
    }
    _k() {
        if (this._b != null) {
            this._b.u();
        }
        this._b = null;
    }
    moveNext() {
        if (this._f < this._g) {
            if (this._d.moveNext()) {
                this._e = this._j + (this._f * this._a.l) + this._i + (this._d.current.r - this._a.a[this._h]._i);
                this._k();
                this._b = this._d.current;
                return true;
            }
            this._k();
            this._i += this._a.a[this._h]._h - this._a.a[this._h]._i + 1;
            this._h++;
            if (this._h >= this._a.a.length) {
                this._i = 0;
                this._h = 0;
                this._f++;
            }
            this._l();
            return this.moveNext();
        }
        return false;
    }
    _l() {
        this._k();
        this._d = getEnumerator(this._c._ch(this._a.a[this._h]._i, this._a.a[this._h]._h));
    }
    reset() {
        this._f = 0;
        this._h = 0;
        this._l();
    }
}
ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator.$t = markType(ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator, 'ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator', Base.$, [IEnumerator$1_$type.specialize(Number_$type)]);
//# sourceMappingURL=ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator.js.map
