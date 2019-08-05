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
export class GridFilterDialogViewModelDescription extends Description {
    constructor() {
        super();
        this.l = null;
        this.h = false;
        this.j = 0;
        this.f = null;
    }
    get_type() {
        return "GridFilterDialogViewModel";
    }
    get type() {
        return this.get_type();
    }
    get propertyType() {
        return this.l;
    }
    set propertyType(a) {
        this.l = a;
        this.e("PropertyType");
    }
    get isTopLevelOr() {
        return this.h;
    }
    set isTopLevelOr(a) {
        this.h = a;
        this.e("IsTopLevelOr");
    }
    get maxGroupingLevels() {
        return this.j;
    }
    set maxGroupingLevels(a) {
        this.j = a;
        this.e("MaxGroupingLevels");
    }
    get rows() {
        return this.f;
    }
    set rows(a) {
        this.f = a;
        this.e("Rows");
    }
}
GridFilterDialogViewModelDescription.$t = markType(GridFilterDialogViewModelDescription, 'GridFilterDialogViewModelDescription', Description.$);
//# sourceMappingURL=GridFilterDialogViewModelDescription.js.map