/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Nullable$1, String_$type, typeCast, Date_$type, fromEnum, markType } from "../../igniteui-angular-core/ES2015/type";
import { ReadOnlyCollection$1 } from "../../igniteui-angular-core/ES2015/ReadOnlyCollection$1";
import { Formula, ErrorValue, ExcelUtils, WorksheetRegionAddress, WorksheetPaneSelection, WorksheetCellAddress } from "../../igniteui-angular-excel/ES2015/excel.core";
import { CultureInfo } from "../../igniteui-angular-core/ES2015/culture";
import { boxArray$1 } from "../../igniteui-angular-core/ES2015/array";
import { isNaN_ } from "../../igniteui-angular-core/ES2015/number";
import { numberToString } from "../../igniteui-angular-core/ES2015/numberExtended";
/**
 * @hidden
 */
export class WorkbookSerializationProviderBase extends Base {
    constructor(a, ..._rest) {
        super();
        this.e = null;
        this.f = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = [];
                    for (let b = 0; b < _rest.length; b++) {
                        c[b - 0] = _rest[b];
                    }
                    let d = [c, c];
                    {
                        let f = d[0];
                        let g = d[1];
                        this.e = new ReadOnlyCollection$1(String_$type, 1, boxArray$1(f || WorkbookSerializationProviderBase.a));
                        this.f = new ReadOnlyCollection$1(String_$type, 1, boxArray$1(g || WorkbookSerializationProviderBase.a));
                    }
                }
                break;
            case 1:
                {
                    let d = _rest[0];
                    let e = _rest[1];
                    this.e = new ReadOnlyCollection$1(String_$type, 1, boxArray$1(d || WorkbookSerializationProviderBase.a));
                    this.f = new ReadOnlyCollection$1(String_$type, 1, boxArray$1(e || WorkbookSerializationProviderBase.a));
                }
                break;
        }
    }
    b(a, b, c, d, e) {
        if (c == null && isNaN_(b)) {
            return true;
        }
        let f = d.getCellFormula(e);
        let g = d.worksheet;
        let h = g.workbook;
        let i = CultureInfo.invariantCulture;
        if (f != null) {
            if (f._as) {
                g._h3(f, false);
                f._bt(h);
            }
            let j = f._bk(h.cellReferenceMode, i).substr(1);
            if (c != null) {
                f = Formula._parse4("=(" + j + ")" + WorkbookSerializationProviderBase.i(a) + "(" + c._bk(h.cellReferenceMode, i).substr(1) + ")", h.cellReferenceMode, i);
            }
            else {
                f = Formula._parse4("=(" + j + ")" + WorkbookSerializationProviderBase.i(a) + numberToString(b, i), h.cellReferenceMode, i);
            }
        }
        else {
            let k = WorkbookSerializationProviderBase.g(h, d._getCellValue1(e));
            if (isNaN_(k)) {
                return true;
            }
            if (c != null) {
                f = Formula._parse4("=" + numberToString(k, i) + WorkbookSerializationProviderBase.i(a) + "(" + c._bk(h.cellReferenceMode, i).substr(1) + ")", h.cellReferenceMode, i);
            }
            else {
                let l;
                switch (a) {
                    case 1:
                        l = k + b;
                        break;
                    case 2:
                        l = k - b;
                        break;
                    case 3:
                        l = k * b;
                        break;
                    case 4:
                        if (b == 0) {
                            l = ErrorValue.divisionByZero;
                        }
                        else {
                            l = k / b;
                        }
                        break;
                    default: return false;
                }
                d.setCellValue(e, l);
                return true;
            }
        }
        f._bp(d, e);
        return true;
    }
    static i(a) {
        switch (a) {
            default:
            case 0: return "";
            case 1: return "+";
            case 2: return "-";
            case 4: return "/";
            case 3: return "*";
        }
    }
    static g(a, b) {
        let c;
        if (b == null) {
            c = 0;
        }
        else if (ExcelUtils.ba(b) || typeCast(Date_$type, b) !== null) {
            if (!((() => { let d = ExcelUtils.b0(a, b, c); c = d.p2; return d.ret; })())) {
                c = NaN;
            }
        }
        else {
            c = NaN;
        }
        return c;
    }
    j(a) {
        for (let b of fromEnum(this.e)) {
            if (a.e(b)) {
                return b;
            }
        }
        return null;
    }
    static h(a, b) {
        let c = Nullable$1.toNullable(WorksheetRegionAddress.$, null);
        for (let e = 0; e < a.length; e++) {
            let d = a[e];
            let f = d.displayOptions._af;
            let g = f.a(d.displayOptions._z);
            if (g == null) {
                g = WorksheetPaneSelection.c(d.displayOptions._z);
                f.b.add(g);
            }
            if (g.f >= b.length || false == b[g.f]._g(g.b) || false == b[g.f].equals(g.d.item(g.f))) {
                let h = g.f = Math.min(g.f, b.length - 1);
                g.b = new WorksheetCellAddress(1, b[h]._ac, b[h]._w);
            }
            g.d.clear();
            for (let i = 0; i < b.length; i++) {
                let j = b[i];
                let k = d._hi(j);
                j = k.p0;
                if (WorksheetRegionAddress._p(c, Nullable$1.toNullable(WorksheetRegionAddress.$, null)) && WorksheetRegionAddress._q(j, b[i])) {
                    c = Nullable$1.toNullable(WorksheetRegionAddress.$, b[i]);
                }
                g.d.add(j);
            }
        }
        return c;
    }
}
WorkbookSerializationProviderBase.$t = markType(WorkbookSerializationProviderBase, 'WorkbookSerializationProviderBase');
WorkbookSerializationProviderBase.a = new Array(0);
//# sourceMappingURL=WorkbookSerializationProviderBase.js.map
