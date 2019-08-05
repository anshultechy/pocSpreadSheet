/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Nullable$1, markType } from "../../igniteui-angular-core/ES2015/type";
import { Color } from "../../igniteui-angular-core/ES2015/Color";
/**
 * @hidden
 */
export class SpreadsheetGridLinePen extends Base {
    constructor(a) {
        super();
        this.a = Nullable$1.toNullable(Color.$, null);
        this.a = a;
    }
    get b() {
        return this.a;
    }
}
SpreadsheetGridLinePen.$t = markType(SpreadsheetGridLinePen, 'SpreadsheetGridLinePen');
//# sourceMappingURL=SpreadsheetGridLinePen.js.map