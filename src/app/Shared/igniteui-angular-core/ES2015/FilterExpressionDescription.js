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
export class FilterExpressionDescription extends Description {
    constructor() {
        super();
    }
    get_type() {
        return "FilterExpression";
    }
    get type() {
        return this.get_type();
    }
}
FilterExpressionDescription.$t = markType(FilterExpressionDescription, 'FilterExpressionDescription', Description.$);
//# sourceMappingURL=FilterExpressionDescription.js.map