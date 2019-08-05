/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
export class GridFilterDialogViewModelRowDescription extends Description {
    constructor() {
        super();
        this.h = null;
        this.g = null;
        this.l = null;
        this.f = null;
        this.m = null;
        this.n = null;
    }
    get_type() {
        return "GridFilterDialogViewModelRow";
    }
    get type() {
        return this.get_type();
    }
    get operatorTypes() {
        return this.h;
    }
    set operatorTypes(a) {
        this.h = a;
        this.e("OperatorTypes");
    }
    get operators() {
        return this.g;
    }
    set operators(a) {
        this.g = a;
        this.e("Operators");
    }
    get currentOperator() {
        return this.l;
    }
    set currentOperator(a) {
        this.l = a;
        this.e("CurrentOperator");
    }
    get operandNumber() {
        return this.f;
    }
    set operandNumber(a) {
        this.f = a;
        this.e("OperandNumber");
    }
    get operand1Ref() {
        return this.m;
    }
    set operand1Ref(a) {
        this.m = a;
        this.e("Operand1Ref");
    }
    get operand2Ref() {
        return this.n;
    }
    set operand2Ref(a) {
        this.n = a;
        this.e("Operand2Ref");
    }
}
GridFilterDialogViewModelRowDescription.$t = markType(GridFilterDialogViewModelRowDescription, 'GridFilterDialogViewModelRowDescription', Description.$);
//# sourceMappingURL=GridFilterDialogViewModelRowDescription.js.map