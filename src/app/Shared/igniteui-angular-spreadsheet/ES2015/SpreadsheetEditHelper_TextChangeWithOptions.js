/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Nullable$1, Boolean_$type, typeCast, fromEnum, markType } from "../../igniteui-angular-core/ES2015/type";
import { WorkbookColorInfo, MathUtilities } from "../../igniteui-angular-excel/ES2015/excel.core";
import { IGFormattedTextRun } from "./IGFormattedTextRun";
import { IGFormattedTextSpan } from "./IGFormattedTextSpan";
import { nullableNotEquals, nullableEquals } from "../../igniteui-angular-core/ES2015/nullable";
import { truncate } from "../../igniteui-angular-core/ES2015/number";
import { stringIsNullOrEmpty } from "../../igniteui-angular-core/ES2015/string";
/**
 * @hidden
 */
export class SpreadsheetEditHelper_TextChangeWithOptions extends Base {
    constructor(a, b, c) {
        super();
        this.b = null;
        this.a = null;
        this.c = null;
        this.a = c;
        this.b = b;
        this.c = a;
    }
    d(a, b) {
        if (!stringIsNullOrEmpty(b._v)) {
            a.name = b._v;
        }
        if (WorkbookColorInfo.l_op_Inequality(b._d, null)) {
            a.colorInfo = b._d;
        }
        if (nullableNotEquals(b._p, null)) {
            a.height = truncate(MathUtilities.f(b._p.value));
        }
        if (nullableNotEquals(b._r, null)) {
            a._strikeout$i = Nullable$1.toNullable(Boolean_$type, nullableEquals(b._r, true) ? true : false);
        }
        if (nullableNotEquals(b._t, null)) {
            a.underlineStyle = b._t.value;
        }
        if (nullableNotEquals(b._o, null)) {
            a._bold$i = Nullable$1.toNullable(Boolean_$type, nullableEquals(b._o, false) ? false : true);
        }
        if (nullableNotEquals(b._q, null)) {
            a._italic$i = Nullable$1.toNullable(Boolean_$type, nullableEquals(b._q, false) ? false : true);
        }
        if (nullableNotEquals(b._s, null)) {
            a.superscriptSubscriptStyle = b._s.value;
        }
    }
    e(a, b) {
        if (this.b._f()) {
            let c = a.getCellFormat(b);
            let d = c.font;
            let e = this.b;
            this.d(d, e);
        }
    }
    f(a) {
        this.g(a, this.a.h);
    }
    g(a, b) {
        if (a._owner == null) {
            return;
        }
        for (let c of fromEnum(b)) {
            let d = typeCast(IGFormattedTextRun.$, c);
            if (d != null) {
                if (d.e > 0) {
                    this.d(a._getFont1(d.f, d.e), d.a);
                }
            }
            else {
                let e = typeCast(IGFormattedTextSpan.$, c);
                if (e != null) {
                    this.g(a, e.h);
                }
            }
        }
    }
}
SpreadsheetEditHelper_TextChangeWithOptions.$t = markType(SpreadsheetEditHelper_TextChangeWithOptions, 'SpreadsheetEditHelper_TextChangeWithOptions');
//# sourceMappingURL=SpreadsheetEditHelper_TextChangeWithOptions.js.map
