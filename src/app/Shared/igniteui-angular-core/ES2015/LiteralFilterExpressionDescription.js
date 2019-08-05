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
export class LiteralFilterExpressionDescription extends FilterExpressionDescription {
    constructor() {
        super();
        this.i = null;
        this.g = false;
    }
    get_type() {
        return "LiteralFilterExpression";
    }
    get literalValueRef() {
        return this.i;
    }
    set literalValueRef(a) {
        this.i = a;
        this.e("LiteralValueRef");
    }
    get leaveUnquoted() {
        return this.g;
    }
    set leaveUnquoted(a) {
        this.g = a;
        this.e("LeaveUnquoted");
    }
}
LiteralFilterExpressionDescription.$t = markType(LiteralFilterExpressionDescription, 'LiteralFilterExpressionDescription', FilterExpressionDescription.$);
//# sourceMappingURL=LiteralFilterExpressionDescription.js.map