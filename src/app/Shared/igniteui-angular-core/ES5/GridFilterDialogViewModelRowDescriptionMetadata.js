/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { GridFilterDialogViewModelRowDescription } from "./GridFilterDialogViewModelRowDescription";
/**
 * @hidden
 */
var GridFilterDialogViewModelRowDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(GridFilterDialogViewModelRowDescriptionMetadata, _super);
    function GridFilterDialogViewModelRowDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridFilterDialogViewModelRowDescriptionMetadata.b = function (a) {
        if (GridFilterDialogViewModelRowDescriptionMetadata.a == null) {
            GridFilterDialogViewModelRowDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            GridFilterDialogViewModelRowDescriptionMetadata.c(a, GridFilterDialogViewModelRowDescriptionMetadata.a);
        }
    };
    GridFilterDialogViewModelRowDescriptionMetadata.c = function (a, b) {
        b.item("OperatorTypes", "Array:string:ColumnComparisonConditionOperatorType");
        b.item("Operators", "Array:string");
        b.item("CurrentOperator", "String");
        b.item("OperandNumber", "Array:int");
        b.item("Operand1Ref", "(w:Operand1,wf:Operand1)DataRef");
        b.item("Operand2Ref", "(w:Operand2,wf:Operand2)DataRef");
    };
    GridFilterDialogViewModelRowDescriptionMetadata.d = function (a) {
        GridFilterDialogViewModelRowDescriptionMetadata.b(a);
        a.n("GridFilterDialogViewModelRow", function () { return new GridFilterDialogViewModelRowDescription(); });
        a.m("GridFilterDialogViewModelRow", GridFilterDialogViewModelRowDescriptionMetadata.a);
    };
    GridFilterDialogViewModelRowDescriptionMetadata.$t = markType(GridFilterDialogViewModelRowDescriptionMetadata, 'GridFilterDialogViewModelRowDescriptionMetadata');
    GridFilterDialogViewModelRowDescriptionMetadata.a = null;
    return GridFilterDialogViewModelRowDescriptionMetadata;
}(Base));
export { GridFilterDialogViewModelRowDescriptionMetadata };
//# sourceMappingURL=GridFilterDialogViewModelRowDescriptionMetadata.js.map