/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ColumnFilterConditionDescription } from "./ColumnFilterConditionDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class ColumnFilterConditionGroupDescription extends ColumnFilterConditionDescription {
    constructor() {
        super();
        this.i = false;
        this.g = null;
    }
    get_type() {
        return "ColumnFilterConditionGroup";
    }
    get usesOrOperator() {
        return this.i;
    }
    set usesOrOperator(a) {
        this.i = a;
        this.e("UsesOrOperator");
    }
    get item() {
        return this.g;
    }
    set item(a) {
        this.g = a;
        this.e("Item");
    }
}
ColumnFilterConditionGroupDescription.$t = markType(ColumnFilterConditionGroupDescription, 'ColumnFilterConditionGroupDescription', ColumnFilterConditionDescription.$);
//# sourceMappingURL=ColumnFilterConditionGroupDescription.js.map