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
export class GridFilterDialogViewModelGroupingDescription extends Description {
    constructor() {
        super();
        this.i = 0;
        this.h = 0;
        this.f = false;
    }
    get_type() {
        return "GridFilterDialogViewModelGrouping";
    }
    get type() {
        return this.get_type();
    }
    get startIndex() {
        return this.i;
    }
    set startIndex(a) {
        this.i = a;
        this.e("StartIndex");
    }
    get endIndex() {
        return this.h;
    }
    set endIndex(a) {
        this.h = a;
        this.e("EndIndex");
    }
    get isOrGrouping() {
        return this.f;
    }
    set isOrGrouping(a) {
        this.f = a;
        this.e("IsOrGrouping");
    }
}
GridFilterDialogViewModelGroupingDescription.$t = markType(GridFilterDialogViewModelGroupingDescription, 'GridFilterDialogViewModelGroupingDescription', Description.$);
//# sourceMappingURL=GridFilterDialogViewModelGroupingDescription.js.map