/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { UndoTransaction } from "./UndoTransaction";
import { IWorksheetUndoUnit_$type } from "./IWorksheetUndoUnit";
import { typeCast, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var WorksheetUndoTransaction = /** @class */ (function (_super) {
    tslib_1.__extends(WorksheetUndoTransaction, _super);
    function WorksheetUndoTransaction(a) {
        return _super.call(this, a, a) || this;
    }
    WorksheetUndoTransaction.prototype.k = function (a) {
        return new WorksheetUndoTransaction(this.y);
    };
    WorksheetUndoTransaction.prototype.b = function (a) {
        var b = _super.prototype.b.call(this, a);
        var c = null;
        if (typeCast(IWorksheetUndoUnit_$type, this) !== null) {
            c = this.sheet;
        }
        else {
            for (var d = 0; d < this.r.count; d++) {
                var e = typeCast(IWorksheetUndoUnit_$type, this.r.item(d));
                if (e != null) {
                    c = e.sheet;
                    break;
                }
            }
        }
        if (c != null) {
            var f = c.workbook;
            if (f != null) {
                f.windowOptions.selectedSheet = c;
            }
        }
        return b;
    };
    WorksheetUndoTransaction.$t = markType(WorksheetUndoTransaction, 'WorksheetUndoTransaction', UndoTransaction.$);
    return WorksheetUndoTransaction;
}(UndoTransaction));
export { WorksheetUndoTransaction };
//# sourceMappingURL=WorksheetUndoTransaction.js.map
