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
export class SortDescriptionDescription extends Description {
    constructor() {
        super();
        this.g = null;
        this.f = null;
    }
    get_type() {
        return "SortDescription";
    }
    get type() {
        return this.get_type();
    }
    get propertyName() {
        return this.g;
    }
    set propertyName(a) {
        this.g = a;
        this.e("PropertyName");
    }
    get direction() {
        return this.f;
    }
    set direction(a) {
        this.f = a;
        this.e("Direction");
    }
}
SortDescriptionDescription.$t = markType(SortDescriptionDescription, 'SortDescriptionDescription', Description.$);
//# sourceMappingURL=SortDescriptionDescription.js.map