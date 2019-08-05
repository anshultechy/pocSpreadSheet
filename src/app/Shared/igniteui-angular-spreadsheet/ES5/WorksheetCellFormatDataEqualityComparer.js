/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IEqualityComparer$1_$type, markType } from "../../igniteui-angular-core/ES5/type";
import { WorksheetCellFormatData } from "../../igniteui-angular-excel/ES5/excel.core";
/**
 * @hidden
 */
var WorksheetCellFormatDataEqualityComparer = /** @class */ (function (_super) {
    tslib_1.__extends(WorksheetCellFormatDataEqualityComparer, _super);
    function WorksheetCellFormatDataEqualityComparer() {
        return _super.call(this) || this;
    }
    WorksheetCellFormatDataEqualityComparer.prototype.equalsC = function (a, b) {
        return a == b || (a != null && b != null && a._ca(b));
    };
    WorksheetCellFormatDataEqualityComparer.prototype.getHashCodeC = function (a) {
        return a.getHashCode();
    };
    WorksheetCellFormatDataEqualityComparer.$t = markType(WorksheetCellFormatDataEqualityComparer, 'WorksheetCellFormatDataEqualityComparer', Base.$, [IEqualityComparer$1_$type.specialize(WorksheetCellFormatData.$)]);
    WorksheetCellFormatDataEqualityComparer._a = new WorksheetCellFormatDataEqualityComparer();
    return WorksheetCellFormatDataEqualityComparer;
}(Base));
export { WorksheetCellFormatDataEqualityComparer };
//# sourceMappingURL=WorksheetCellFormatDataEqualityComparer.js.map
