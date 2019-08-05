/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IEnumerator$1_$type, markType, getEnumerator } from "../../igniteui-angular-core/ES2015/type";
import { IntRange } from "./IntRange";
import { WorksheetColumnBlock } from "../../igniteui-angular-excel/ES2015/excel.core";
import { Enumerable } from "../../igniteui-angular-core/ES2015/Enumerable";
/**
 * @hidden
 */
export class ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator extends Base {
    constructor(a, b) {
        super();
        this._b = null;
        this._d = 0;
        this._e = 0;
        this._a = null;
        this._c = 0;
        this._b = a._ff;
        this._d = b;
        this._e = a._columns$i.maxCount;
        this.reset();
    }
    get current() {
        let a = this._c * this._e;
        return new IntRange(1, this._a.current.q + a, this._a.current.r + a);
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
                this._a = getEnumerator(Enumerable.u(WorksheetColumnBlock.$, this._b, (a) => !a.b._ca(a.b.v._ca._p)));
                return this.moveNext();
            }
        }
        return false;
    }
    reset() {
        this._c = 0;
        this._a = getEnumerator(Enumerable.u(WorksheetColumnBlock.$, this._b, (a) => !a.b._ca(a.b.v._ca._p)));
    }
}
ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator.$t = markType(ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator, 'ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator', Base.$, [IEnumerator$1_$type.specialize(IntRange.$)]);
//# sourceMappingURL=ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator.js.map
