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
export class FunctionFilterExpressionDescription extends FilterExpressionDescription {
    constructor() {
        super();
        this.g = null;
    }
    get_type() {
        return "FunctionFilterExpression";
    }
    get functionType() {
        return this.g;
    }
    set functionType(a) {
        this.g = a;
        this.e("FunctionType");
    }
}
FunctionFilterExpressionDescription.$t = markType(FunctionFilterExpressionDescription, 'FunctionFilterExpressionDescription', FilterExpressionDescription.$);
//# sourceMappingURL=FunctionFilterExpressionDescription.js.map