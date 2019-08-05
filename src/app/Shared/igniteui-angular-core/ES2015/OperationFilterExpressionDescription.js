/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { FilterExpressionDescription } from "./FilterExpressionDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class OperationFilterExpressionDescription extends FilterExpressionDescription {
    constructor() {
        super();
        this.l = null;
        this.m = null;
        this.g = null;
        this.h = null;
        this.k = null;
    }
    get_type() {
        return "OperationFilterExpression";
    }
    get propertyName() {
        return this.l;
    }
    set propertyName(a) {
        this.l = a;
        this.e("PropertyName");
    }
    get valueRef() {
        return this.m;
    }
    set valueRef(a) {
        this.m = a;
        this.e("ValueRef");
    }
    get left() {
        return this.g;
    }
    set left(a) {
        this.g = a;
        this.e("Left");
    }
    get right() {
        return this.h;
    }
    set right(a) {
        this.h = a;
        this.e("Right");
    }
    get operator() {
        return this.k;
    }
    set operator(a) {
        this.k = a;
        this.e("Operator");
    }
}
OperationFilterExpressionDescription.$t = markType(OperationFilterExpressionDescription, 'OperationFilterExpressionDescription', FilterExpressionDescription.$);
//# sourceMappingURL=OperationFilterExpressionDescription.js.map