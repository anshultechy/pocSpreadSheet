/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { CancelEventArgs } from "../../igniteui-angular-core/ES2015/CancelEventArgs";
import { WorksheetProtectedRange, Worksheet, ExcelUtils, SecureString } from "../../igniteui-angular-excel/ES2015/excel.core";
import { ReadOnlyCollection$1 } from "../../igniteui-angular-core/ES2015/ReadOnlyCollection$1";
import { Enumerable } from "../../igniteui-angular-core/ES2015/Enumerable";
import { typeCast, fromEnum, markType } from "../../igniteui-angular-core/ES2015/type";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
/**
 * @hidden
 */
export class SpreadsheetEditRangePasswordNeededEventArgs extends CancelEventArgs {
    constructor(a, b) {
        super(0);
        this._e = null;
        this._f = null;
        this._g = null;
        this._f = b;
        this._e = a;
        this._g = new ReadOnlyCollection$1(WorksheetProtectedRange.$, 1, this._e);
    }
    get ranges() {
        return Enumerable.a(WorksheetProtectedRange.$, this._g);
    }
    _i(a) {
        let b = new List$1(WorksheetProtectedRange.$, 0);
        this._j(a, this._e, b);
        if (b.count > 0) {
            let c = new List$1(WorksheetProtectedRange.$, 0);
            ExcelUtils.fm(Worksheet.$, this._f, (d) => c.o(d.protection._allowedEditRanges$i));
            this._j(a, c, null);
        }
    }
    _j(a, b, c) {
        let d = typeCast(SecureString.$, a);
        for (let e of fromEnum(b)) {
            if (e.isProtected) {
                e.unprotect();
                if (c != null && !e.isProtected) {
                    c.add(e);
                }
            }
        }
    }
    _getRangesArray() {
        return this.ranges;
    }
    unprotect() {
        this._i(null);
    }
}
SpreadsheetEditRangePasswordNeededEventArgs.$t = markType(SpreadsheetEditRangePasswordNeededEventArgs, 'SpreadsheetEditRangePasswordNeededEventArgs', CancelEventArgs.$);
//# sourceMappingURL=SpreadsheetEditRangePasswordNeededEventArgs.js.map
