/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { UndoTransaction } from "./UndoTransaction";
import { IWorksheetUndoUnit_$type } from "./IWorksheetUndoUnit";
import { typeCast, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class WorksheetUndoTransaction extends UndoTransaction {
    constructor(a) {
        super(a, a);
    }
    k(a) {
        return new WorksheetUndoTransaction(this.y);
    }
    b(a) {
        let b = super.b(a);
        let c = null;
        if (typeCast(IWorksheetUndoUnit_$type, this) !== null) {
            c = this.sheet;
        }
        else {
            for (let d = 0; d < this.r.count; d++) {
                let e = typeCast(IWorksheetUndoUnit_$type, this.r.item(d));
                if (e != null) {
                    c = e.sheet;
                    break;
                }
            }
        }
        if (c != null) {
            let f = c.workbook;
            if (f != null) {
                f.windowOptions.selectedSheet = c;
            }
        }
        return b;
    }
}
WorksheetUndoTransaction.$t = markType(WorksheetUndoTransaction, 'WorksheetUndoTransaction', UndoTransaction.$);
//# sourceMappingURL=WorksheetUndoTransaction.js.map