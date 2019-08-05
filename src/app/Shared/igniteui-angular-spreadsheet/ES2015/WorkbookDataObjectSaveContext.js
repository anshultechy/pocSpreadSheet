/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, fromEnum, String_$type, Boolean_$type, markType } from "../../igniteui-angular-core/ES2015/type";
import { ArgumentNullException } from "../../igniteui-angular-core/ES2015/ArgumentNullException";
import { Sheet, Worksheet, WorksheetRegionAddress } from "../../igniteui-angular-excel/ES2015/excel.core";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { CoreUtilities } from "./CoreUtilities";
import { ReadOnlyCollection$1 } from "../../igniteui-angular-core/ES2015/ReadOnlyCollection$1";
import { Enumerable } from "../../igniteui-angular-core/ES2015/Enumerable";
import { CellRegionMapSingle } from "./CellRegionMapSingle";
import { CellRegionMapMany } from "./CellRegionMapMany";
import { Dictionary$2 } from "../../igniteui-angular-core/ES2015/Dictionary$2";
/**
 * @hidden
 */
export class WorkbookDataObjectSaveContext extends Base {
    constructor(a, b, c, d) {
        super();
        this.q = null;
        this.i = null;
        this.n = null;
        this.o = null;
        this.k = null;
        this.j = null;
        this.c = false;
        this.d = false;
        this.a = null;
        this.b = null;
        CoreUtilities.z(a, "workbook");
        this.b = a;
        this.n = c;
        this.o = d;
        this.r = b;
        let e = new List$1(Sheet.$, 0);
        let f = new List$1(Worksheet.$, 0);
        for (let g of fromEnum(a._worksheets$i)) {
            if (g._w) {
                f.add(g);
                e.add(g);
            }
        }
        this.k = new ReadOnlyCollection$1(Worksheet.$, 1, f);
        this.j = new ReadOnlyCollection$1(Sheet.$, 1, e);
        let h = a.windowOptions.selectedWorksheet;
        if (h == null || h.type == 0) {
            h = Enumerable.af(Worksheet.$, f);
        }
        if (h != null) {
            h.displayOptions._br();
            let i = h.displayOptions._af;
            let j = i.a(h.displayOptions._z);
            if (j != null) {
                if (j.d.count == 1) {
                    this.a = new CellRegionMapSingle(j.d.item(0));
                }
                else {
                    this.a = new CellRegionMapMany(Enumerable.a(WorksheetRegionAddress.$, j.d));
                }
                this.c = this.a.c.length == 1 && this.a.c[0]._i == 0 && this.a.c[0]._h >= h._rows$i.maxCount - 1;
                this.d = this.a.a.length == 1 && this.a.a[0]._i == 0 && this.a.a[0]._h >= h._columns$i.maxCount - 1;
            }
        }
    }
    get r() {
        return this.q;
    }
    set r(a) {
        if (this.q != a) {
            if (a == null) {
                throw new ArgumentNullException(1);
            }
            this.q = a;
        }
    }
    get e() {
        return this.c;
    }
    get f() {
        return this.d;
    }
    get l() {
        return this.j;
    }
    get m() {
        return this.k;
    }
    p(a, b) {
        this.q.setData(a, b);
    }
    g(a) {
        if (this.n == null) {
            return true;
        }
        if (this.i == null) {
            this.i = new Dictionary$2(String_$type, Boolean_$type, 0);
        }
        let b;
        if (!((() => { let c = this.i.tryGetValue(a, b); b = c.p1; return c.ret; })())) {
            b = this.i.item(a, this.n(a));
        }
        return b;
    }
    h() {
        if (this.o != null) {
            return this.o();
        }
        return false;
    }
}
WorkbookDataObjectSaveContext.$t = markType(WorkbookDataObjectSaveContext, 'WorkbookDataObjectSaveContext');
//# sourceMappingURL=WorkbookDataObjectSaveContext.js.map
