/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, fromEnum, markType } from "../../igniteui-angular-core/ES2015/type";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { ReadOnlyCollection$1 } from "../../igniteui-angular-core/ES2015/ReadOnlyCollection$1";
import { Enumerable } from "../../igniteui-angular-core/ES2015/Enumerable";
import { WorksheetProtectedRange } from "../../igniteui-angular-excel/ES2015/excel.core";
import { HashSet$1 } from "../../igniteui-angular-core/ES2015/HashSet$1";
/**
 * @hidden
 */
export class LockedEditRangeInfoForOperation extends Base {
    constructor() {
        super();
        this.d = null;
        this.f = null;
        this.d = new List$1(LockedEditRangeInfoForWorksheet.$, 0);
        this.f = new ReadOnlyCollection$1(LockedEditRangeInfoForWorksheet.$, 1, this.d);
    }
    get c() {
        return this.d;
    }
    b() {
        for (let a of fromEnum(this.d)) {
            if (a.d) {
                return false;
            }
            if (a.h != null && Enumerable.af(WorksheetProtectedRange.$, a.h) == null) {
                return false;
            }
        }
        return true;
    }
    e(a) {
        let b = new List$1(WorksheetProtectedRange.$, 0);
        for (let c of fromEnum(this.c)) {
            let d = a ? c.h : c.g;
            if (d != null) {
                for (let e of fromEnum(d)) {
                    if (e.isProtected) {
                        b.add(e);
                    }
                }
            }
        }
        return b;
    }
    a(a) {
        for (let b of fromEnum(this.d)) {
            if (b.b == a) {
                return b;
            }
        }
        let c = new LockedEditRangeInfoForWorksheet(this, a);
        this.d.add(c);
        return c;
    }
}
LockedEditRangeInfoForOperation.$t = markType(LockedEditRangeInfoForOperation, 'LockedEditRangeInfoForOperation');
/**
 * @hidden
 */
export class LockedEditRangeInfoForWorksheet extends Base {
    constructor(a, b) {
        super();
        this.a = null;
        this.b = null;
        this.f = null;
        this.i = null;
        this.c = false;
        this.a = a;
        this.b = b;
        this.f = new HashSet$1(WorksheetProtectedRange.$, 0);
    }
    get g() {
        return this.f;
    }
    get d() {
        return this.c;
    }
    get h() {
        return this.i;
    }
    j(a) {
        if (a != null) {
            for (let b of fromEnum(a)) {
                this.f.add_1(b);
            }
        }
    }
    k() {
        this.c = true;
    }
    e(a, b) {
        let c = b;
        if (this.i == null) {
            this.i = new List$1(WorksheetProtectedRange.$, 0);
            for (let d of fromEnum(this.f)) {
                if (d.isProtected == false) {
                    continue;
                }
                for (let e of fromEnum(d.ranges)) {
                    if (e._h._i(a, c)) {
                        this.i.add(d);
                        break;
                    }
                }
            }
        }
        if (this.i.count > 0) {
            for (let f = this.i.count - 1; f >= 0; f--) {
                let g = false;
                for (let h of fromEnum(this.i._inner[f].ranges)) {
                    if (h._h._i(a, c)) {
                        g = true;
                        break;
                    }
                }
                if (g == false) {
                    this.i.removeAt(f);
                }
            }
        }
        return this.i.count > 0;
    }
}
LockedEditRangeInfoForWorksheet.$t = markType(LockedEditRangeInfoForWorksheet, 'LockedEditRangeInfoForWorksheet');
//# sourceMappingURL=LockedEditRangeInfoForOperation_combined.js.map
