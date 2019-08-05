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
export class FormatGroupTextEventArgsDescription extends Description {
    constructor() {
        super();
        this.h = null;
        this.i = null;
        this.g = null;
        this.f = null;
    }
    get_type() {
        return "FormatGroupTextEventArgs";
    }
    get type() {
        return this.get_type();
    }
    get groupName() {
        return this.h;
    }
    set groupName(a) {
        this.h = a;
        this.e("GroupName");
    }
    get groupValueRef() {
        return this.i;
    }
    set groupValueRef(a) {
        this.i = a;
        this.e("GroupValueRef");
    }
    get formattedValue() {
        return this.g;
    }
    set formattedValue(a) {
        this.g = a;
        this.e("FormattedValue");
    }
    get formattedText() {
        return this.f;
    }
    set formattedText(a) {
        this.f = a;
        this.e("FormattedText");
    }
}
FormatGroupTextEventArgsDescription.$t = markType(FormatGroupTextEventArgsDescription, 'FormatGroupTextEventArgsDescription', Description.$);
//# sourceMappingURL=FormatGroupTextEventArgsDescription.js.map