/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IEqualityComparer$1_$type, markType } from "../../igniteui-angular-core/ES2015/type";
import { WorksheetCellFormatData } from "../../igniteui-angular-excel/ES2015/excel.core";
/**
 * @hidden
 */
export class WorksheetCellFormatDataEqualityComparer extends Base {
    constructor() {
        super();
    }
    equalsC(a, b) {
        return a == b || (a != null && b != null && a._ca(b));
    }
    getHashCodeC(a) {
        return a.getHashCode();
    }
}
WorksheetCellFormatDataEqualityComparer.$t = markType(WorksheetCellFormatDataEqualityComparer, 'WorksheetCellFormatDataEqualityComparer', Base.$, [IEqualityComparer$1_$type.specialize(WorksheetCellFormatData.$)]);
WorksheetCellFormatDataEqualityComparer._a = new WorksheetCellFormatDataEqualityComparer();
//# sourceMappingURL=WorksheetCellFormatDataEqualityComparer.js.map
