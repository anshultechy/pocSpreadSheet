/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { WorksheetRegionAddress } from "../../igniteui-angular-excel/ES2015/excel.core";
/**
 * @hidden
 */
export class CellRegionMapBase extends Base {
    f(a) {
        let b = this.b;
        for (let c = 0; c < b.length; c++) {
            if (b[c]._h(a)) {
                return true;
            }
        }
        return false;
    }
    e(a, b) {
        let c = this.b;
        for (let d = 0; d < c.length; d++) {
            if (c[d]._i(a, b)) {
                return c[d];
            }
        }
        return WorksheetRegionAddress._b;
    }
}
CellRegionMapBase.$t = markType(CellRegionMapBase, 'CellRegionMapBase');
//# sourceMappingURL=CellRegionMapBase.js.map
