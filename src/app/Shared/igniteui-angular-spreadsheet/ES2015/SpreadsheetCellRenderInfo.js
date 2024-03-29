/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { Color } from "../../igniteui-angular-core/ES2015/Color";
import { ExcelUtils } from "../../igniteui-angular-excel/ES2015/excel.core";
/**
 * @hidden
 */
export class SpreadsheetCellRenderInfo extends Base {
    constructor() {
        super(...arguments);
        this.f = null;
        this.d = 0;
        this.m = new Color();
        this.e = 0;
        this.n = new Color();
        this.k = 0;
        this.h = 0;
        this.i = 0;
        this.j = 0;
        this.g = null;
        this.c = 0;
        this.l = new Color();
        this.a = 0;
    }
    static b() {
        let a = new SpreadsheetCellRenderInfo();
        a.l = a.m = a.n = ExcelUtils.gv;
        return a;
    }
}
SpreadsheetCellRenderInfo.$t = markType(SpreadsheetCellRenderInfo, 'SpreadsheetCellRenderInfo');
//# sourceMappingURL=SpreadsheetCellRenderInfo.js.map
