/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { WorksheetRegionAddress, WorksheetCellAddress } from "../../igniteui-angular-excel/ES2015/excel.core";
/**
 * @hidden
 */
export class SortTargetResult extends Base {
    constructor(a, b, c, d, e, f) {
        super();
        this.e = null;
        this.d = new WorksheetRegionAddress();
        this.b = null;
        this.c = new WorksheetCellAddress();
        this.g = 0;
        this.a = 0;
        this.f = false;
        this.e = a;
        this.d = c;
        this.c = d;
        this.g = e;
        this.b = b;
        this.a = f;
        this.f = this.g > 0;
    }
}
SortTargetResult.$t = markType(SortTargetResult, 'SortTargetResult');
//# sourceMappingURL=SortTargetResult.js.map
