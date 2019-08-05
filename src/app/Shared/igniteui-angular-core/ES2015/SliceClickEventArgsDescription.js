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
export class SliceClickEventArgsDescription extends Description {
    constructor() {
        super();
        this.g = false;
        this.f = false;
        this.j = null;
    }
    get_type() {
        return "SliceClickEventArgs";
    }
    get type() {
        return this.get_type();
    }
    get isSelected() {
        return this.g;
    }
    set isSelected(a) {
        this.g = a;
        this.e("IsSelected");
    }
    get isExploded() {
        return this.f;
    }
    set isExploded(a) {
        this.f = a;
        this.e("IsExploded");
    }
    get originalEventRef() {
        return this.j;
    }
    set originalEventRef(a) {
        this.j = a;
        this.e("OriginalEventRef");
    }
}
SliceClickEventArgsDescription.$t = markType(SliceClickEventArgsDescription, 'SliceClickEventArgsDescription', Description.$);
//# sourceMappingURL=SliceClickEventArgsDescription.js.map