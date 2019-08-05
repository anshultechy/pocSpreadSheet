/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IEnumerator$1_$type, markType } from "../../igniteui-angular-core/ES2015/type";
import { IntRange } from "./IntRange";
/**
 * @hidden
 */
export class ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator extends Base {
    constructor(a, b, c) {
        super();
        this._b = null;
        this._d = 0;
        this._e = 0;
        this._a = null;
        this._c = 0;
        this._b = a;
        this._d = c;
        this._e = b;
        this.reset();
    }
    get current() {
        let a = this._c * this._e;
        return new IntRange(1, this._a.current._i + a, this._a.current._h + a);
    }
    dispose() {
    }
    get currentObject() {
        return this.current;
    }
    moveNext() {
        if (this._c < this._d) {
            if (this._a.moveNext()) {
                return true;
            }
            this._c++;
            if (this._c < this._d) {
                this._a = this._b.getEnumerator();
                return this.moveNext();
            }
        }
        return false;
    }
    reset() {
        this._c = 0;
        this._a = this._b.getEnumerator();
    }
}
ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator.$t = markType(ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator, 'ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator', Base.$, [IEnumerator$1_$type.specialize(IntRange.$)]);
//# sourceMappingURL=ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator.js.map
