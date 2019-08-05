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
export class PropertyUpdatedEventArgsDescription extends Description {
    constructor() {
        super();
        this.h = null;
        this.g = null;
        this.f = null;
    }
    get_type() {
        return "PropertyUpdatedEventArgs";
    }
    get type() {
        return this.get_type();
    }
    get propertyName() {
        return this.h;
    }
    set propertyName(a) {
        this.h = a;
        this.e("PropertyName");
    }
    get oldValueRef() {
        return this.g;
    }
    set oldValueRef(a) {
        this.g = a;
        this.e("OldValueRef");
    }
    get newValueRef() {
        return this.f;
    }
    set newValueRef(a) {
        this.f = a;
        this.e("NewValueRef");
    }
}
PropertyUpdatedEventArgsDescription.$t = markType(PropertyUpdatedEventArgsDescription, 'PropertyUpdatedEventArgsDescription', Description.$);
//# sourceMappingURL=PropertyUpdatedEventArgsDescription.js.map