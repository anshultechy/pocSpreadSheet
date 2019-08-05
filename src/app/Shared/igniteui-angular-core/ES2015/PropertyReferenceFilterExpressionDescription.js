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
export class PropertyReferenceFilterExpressionDescription extends FilterExpressionDescription {
    constructor() {
        super();
        this.g = null;
    }
    get_type() {
        return "PropertyReferenceFilterExpression";
    }
    get propertyReference() {
        return this.g;
    }
    set propertyReference(a) {
        this.g = a;
        this.e("PropertyReference");
    }
}
PropertyReferenceFilterExpressionDescription.$t = markType(PropertyReferenceFilterExpressionDescription, 'PropertyReferenceFilterExpressionDescription', FilterExpressionDescription.$);
//# sourceMappingURL=PropertyReferenceFilterExpressionDescription.js.map