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
export class GroupDataDescription extends Description {
    constructor() {
        super();
        this.g = null;
        this.h = null;
        this.f = null;
    }
    get_type() {
        return "GroupData";
    }
    get type() {
        return this.get_type();
    }
    get groupName() {
        return this.g;
    }
    set groupName(a) {
        this.g = a;
        this.e("GroupName");
    }
    get groupValueRef() {
        return this.h;
    }
    set groupValueRef(a) {
        this.h = a;
        this.e("GroupValueRef");
    }
    get formattedText() {
        return this.f;
    }
    set formattedText(a) {
        this.f = a;
        this.e("FormattedText");
    }
}
GroupDataDescription.$t = markType(GroupDataDescription, 'GroupDataDescription', Description.$);
//# sourceMappingURL=GroupDataDescription.js.map