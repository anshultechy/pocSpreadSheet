/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ColumnSortDescriptionDescription } from "./ColumnSortDescriptionDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class ColumnGroupDescriptionDescription extends ColumnSortDescriptionDescription {
    constructor() {
        super();
        this.l = null;
        this.k = null;
        this.m = null;
    }
    get_type() {
        return "ColumnGroupDescription";
    }
    get formatOverrideRef() {
        return this.l;
    }
    set formatOverrideRef(a) {
        this.l = a;
        this.e("FormatOverrideRef");
    }
    get displayName() {
        return this.k;
    }
    set displayName(a) {
        this.k = a;
        this.e("DisplayName");
    }
    get FormatTextRef() {
        return this.m;
    }
    set FormatTextRef(a) {
        this.m = a;
        this.e("FormatTextRef");
    }
}
ColumnGroupDescriptionDescription.$t = markType(ColumnGroupDescriptionDescription, 'ColumnGroupDescriptionDescription', ColumnSortDescriptionDescription.$);
//# sourceMappingURL=ColumnGroupDescriptionDescription.js.map