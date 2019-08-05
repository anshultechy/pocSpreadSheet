/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, fromEnum, markType } from "../../igniteui-angular-core/ES2015/type";
import { Dictionary$2 } from "../../igniteui-angular-core/ES2015/Dictionary$2";
import { Worksheet, MutableWorksheetRegionAddress } from "../../igniteui-angular-excel/ES2015/excel.core";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
/**
 * @hidden
 */
export class SpreadsheetChartDataInfo extends Base {
    constructor(a) {
        super();
        this.c = false;
        this.b = null;
        this.g = null;
        this.h = null;
        this.b = a;
        this.g = new Dictionary$2(Worksheet.$, MutableWorksheetRegionAddress.$, 0);
        this.h = new List$1(MutableWorksheetRegionAddress.$, 0);
    }
    get d() {
        return this.c;
    }
    get e() {
        return this.c || this.g.count > 0;
    }
    i() {
        if (this.g.count > 0) {
            this.g.clear();
            for (let a of fromEnum(this.h)) {
                if (a != null && !a.b) {
                    a.n();
                }
            }
        }
    }
    j() {
        this.c = false;
        this.i();
    }
    k(a, b, c) {
        if (!this.c) {
            let d = this.a(a);
            d.q(b, c);
        }
    }
    l() {
        this.c = true;
        this.i();
    }
    m(a, b) {
        if (!this.c) {
            let c = this.a(a);
            c.p(b.getRegionAddress());
        }
    }
    a(a) {
        let b = a.index;
        if (b > this.h.count - 1) {
            this.n();
        }
        let c = this.h._inner[b];
        if (c.b) {
            this.g.item(a, c);
        }
        return c;
    }
    f(a) {
        if (this.c) {
            return true;
        }
        for (let b of fromEnum(this.g)) {
            if (a.isReferencingAnythingInRegion(b.key, b.value.a())) {
                return true;
            }
        }
        return false;
    }
    n() {
        let a = this.b._worksheets$i.count;
        for (let b = this.h.count; b < a; b++) {
            this.h.add(new MutableWorksheetRegionAddress());
        }
    }
}
SpreadsheetChartDataInfo.$t = markType(SpreadsheetChartDataInfo, 'SpreadsheetChartDataInfo');
//# sourceMappingURL=SpreadsheetChartDataInfo.js.map
