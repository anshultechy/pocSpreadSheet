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
export class ColumnPropertySetterDescription extends Description {
    constructor() {
        super();
        this.f = null;
        this.g = null;
        this.h = null;
    }
    get_type() {
        return "ColumnPropertySetter";
    }
    get type() {
        return this.get_type();
    }
    get columnName() {
        return this.f;
    }
    set columnName(a) {
        this.f = a;
        this.e("ColumnName");
    }
    get propertyName() {
        return this.g;
    }
    set propertyName(a) {
        this.g = a;
        this.e("PropertyName");
    }
    get valueRef() {
        return this.h;
    }
    set valueRef(a) {
        this.h = a;
        this.e("ValueRef");
    }
}
ColumnPropertySetterDescription.$t = markType(ColumnPropertySetterDescription, 'ColumnPropertySetterDescription', Description.$);
//# sourceMappingURL=ColumnPropertySetterDescription.js.map