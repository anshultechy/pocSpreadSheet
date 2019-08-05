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
export class ColumnWidthDescription extends Description {
    constructor() {
        super();
        this.f = false;
        this.i = 0;
        this.h = 0;
    }
    get_type() {
        return "ColumnWidth";
    }
    get type() {
        return this.get_type();
    }
    get isStarSized() {
        return this.f;
    }
    set isStarSized(a) {
        this.f = a;
        this.e("IsStarSized");
    }
    get value() {
        return this.i;
    }
    set value(a) {
        this.i = a;
        this.e("Value");
    }
    get minimumWidth() {
        return this.h;
    }
    set minimumWidth(a) {
        this.h = a;
        this.e("MinimumWidth");
    }
}
ColumnWidthDescription.$t = markType(ColumnWidthDescription, 'ColumnWidthDescription', Description.$);
//# sourceMappingURL=ColumnWidthDescription.js.map