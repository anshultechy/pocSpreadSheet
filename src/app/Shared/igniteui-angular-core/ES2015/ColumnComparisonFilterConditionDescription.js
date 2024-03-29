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
export class ColumnComparisonFilterConditionDescription extends ColumnFilterConditionDescription {
    constructor() {
        super();
        this.i = null;
        this.j = null;
        this.g = false;
    }
    get_type() {
        return "ColumnComparisonFilterCondition";
    }
    get operator() {
        return this.i;
    }
    set operator(a) {
        this.i = a;
        this.e("Operator");
    }
    get valueRef() {
        return this.j;
    }
    set valueRef(a) {
        this.j = a;
        this.e("ValueRef");
    }
    get isCaseSensitive() {
        return this.g;
    }
    set isCaseSensitive(a) {
        this.g = a;
        this.e("IsCaseSensitive");
    }
}
ColumnComparisonFilterConditionDescription.$t = markType(ColumnComparisonFilterConditionDescription, 'ColumnComparisonFilterConditionDescription', ColumnFilterConditionDescription.$);
//# sourceMappingURL=ColumnComparisonFilterConditionDescription.js.map