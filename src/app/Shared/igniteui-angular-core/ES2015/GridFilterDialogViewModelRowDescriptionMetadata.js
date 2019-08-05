/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { GridFilterDialogViewModelRowDescription } from "./GridFilterDialogViewModelRowDescription";
/**
 * @hidden
 */
export class GridFilterDialogViewModelRowDescriptionMetadata extends Base {
    static b(a) {
        if (GridFilterDialogViewModelRowDescriptionMetadata.a == null) {
            GridFilterDialogViewModelRowDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            GridFilterDialogViewModelRowDescriptionMetadata.c(a, GridFilterDialogViewModelRowDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("OperatorTypes", "Array:string:ColumnComparisonConditionOperatorType");
        b.item("Operators", "Array:string");
        b.item("CurrentOperator", "String");
        b.item("OperandNumber", "Array:int");
        b.item("Operand1Ref", "(w:Operand1,wf:Operand1)DataRef");
        b.item("Operand2Ref", "(w:Operand2,wf:Operand2)DataRef");
    }
    static d(a) {
        GridFilterDialogViewModelRowDescriptionMetadata.b(a);
        a.n("GridFilterDialogViewModelRow", () => new GridFilterDialogViewModelRowDescription());
        a.m("GridFilterDialogViewModelRow", GridFilterDialogViewModelRowDescriptionMetadata.a);
    }
}
GridFilterDialogViewModelRowDescriptionMetadata.$t = markType(GridFilterDialogViewModelRowDescriptionMetadata, 'GridFilterDialogViewModelRowDescriptionMetadata');
GridFilterDialogViewModelRowDescriptionMetadata.a = null;
//# sourceMappingURL=GridFilterDialogViewModelRowDescriptionMetadata.js.map