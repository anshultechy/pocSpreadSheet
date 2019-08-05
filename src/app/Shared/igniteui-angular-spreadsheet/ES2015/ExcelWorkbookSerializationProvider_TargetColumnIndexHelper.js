/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Nullable$1, Number_$type, fromEnum, toEnum, markType, getEnumerator } from "../../igniteui-angular-core/ES2015/type";
import { SpreadsheetCellRange } from "./SpreadsheetCellRange";
import { IntRange } from "./IntRange";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator } from "./ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator";
import { ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator } from "./ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator";
import { ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator } from "./ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator";
import { boxArray$1 } from "../../igniteui-angular-core/ES2015/array";
import { nullableEquals, nullableNotEquals } from "../../igniteui-angular-core/ES2015/nullable";
import { intDivide } from "../../igniteui-angular-core/ES2015/number";
/**
 * @hidden
 */
export class ExcelWorkbookSerializationProvider_TargetColumnIndexHelper extends Base {
    constructor(a, b, c, d) {
        super();
        this.c = new SpreadsheetCellRange();
        this.b = null;
        this.a = null;
        this.d = false;
        this.e = false;
        this.c = a;
        this.b = b;
        this.d = c;
        this.e = d;
        this.a = [new IntRange(1, a.firstColumn, a.lastColumn)];
    }
    i(a) {
        let b = a.worksheet._tables$i;
        let c = new List$1(IntRange.$, 0);
        let d = a.index;
        for (let e = 0; e < b.count; e++) {
            let f = b._item(e)._by;
            if (f._ac <= d && f._ae >= d) {
                c.add(new IntRange(1, f._w, f._x));
            }
        }
        if (c.count > 1) {
            c.z(IntRange._f);
        }
        return c;
    }
    h() {
        return boxArray$1(this.a);
    }
    *_f(a, b) {
        let c = Nullable$1.toNullable(Number_$type, null);
        let d = 0;
        for (let e of fromEnum(this.g(a, b))) {
            if (nullableEquals(c, null)) {
                c = Nullable$1.toNullable(Number_$type, d = e);
            }
            else if (e == d + 1) {
                d = e;
            }
            else {
                yield new IntRange(1, c.value, d);
                c = Nullable$1.toNullable(Number_$type, d = e);
            }
        }
        if (nullableNotEquals(c, null)) {
            yield new IntRange(1, c.value, d);
        }
    }
    f(a, b) {
        return toEnum(() => this._f(a, b));
    }
    *_g(a, b) {
        let c = -1;
        let d = intDivide(this.c._ad, this.b.l);
        let e = new ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator(a, this.b, this.c.firstColumn, d);
        if (!e.moveNext()) {
            e = null;
        }
        let f = getEnumerator(b._ch(this.c.firstColumn, this.c.lastColumn));
        if (!f.moveNext()) {
            f = null;
        }
        let g = null;
        let h = null;
        if (this.d) {
            {
                g = new ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator(b.worksheet, 1);
                if (!g.moveNext()) {
                    g = null;
                }
            }
            {
                h = new ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator(a.worksheet, d);
                if (!h.moveNext()) {
                    h = null;
                }
            }
        }
        let i = null;
        if (this.e) {
            i = new ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator(this.i(a), this.b.l, d);
            if (!i.moveNext()) {
                i = null;
            }
        }
        while (true) {
            let j = 0x7FFFFFFF;
            while (e != null) {
                if (e.current > c) {
                    j = e.current;
                    break;
                }
                if (!e.moveNext()) {
                    e = null;
                }
            }
            while (f != null) {
                if (f.current.r > c) {
                    if (f.current.r < j) {
                        j = f.current.r;
                    }
                    break;
                }
                let k = f.current;
                if (!f.moveNext()) {
                    f = null;
                }
                k.u();
            }
            if (this.d) {
                let l = ExcelWorkbookSerializationProvider_TargetColumnIndexHelper.j(c, g, j);
                g = l.p1;
                j = l.p2;
                let m = ExcelWorkbookSerializationProvider_TargetColumnIndexHelper.j(c, h, j);
                h = m.p1;
                j = m.p2;
            }
            if (i != null) {
                let n = ExcelWorkbookSerializationProvider_TargetColumnIndexHelper.j(c, i, j);
                i = n.p1;
                j = n.p2;
            }
            if (j == 0x7FFFFFFF) {
                break;
            }
            yield j;
            c = j;
        }
    }
    g(a, b) {
        return toEnum(() => this._g(a, b));
    }
    static j(a, b, c) {
        while (b != null) {
            if (b.current._c((a + 1))) {
                c = a + 1;
                break;
            }
            if (b.current._i > c) {
                break;
            }
            if (b.current._c(c)) {
                break;
            }
            if (b.current._i < c && b.current._h > a) {
                c = Math.max(a + 1, b.current._i);
                break;
            }
            if (!b.moveNext()) {
                b = null;
            }
        }
        return {
            p1: b,
            p2: c
        };
    }
}
ExcelWorkbookSerializationProvider_TargetColumnIndexHelper.$t = markType(ExcelWorkbookSerializationProvider_TargetColumnIndexHelper, 'ExcelWorkbookSerializationProvider_TargetColumnIndexHelper');
//# sourceMappingURL=ExcelWorkbookSerializationProvider_TargetColumnIndexHelper.js.map
