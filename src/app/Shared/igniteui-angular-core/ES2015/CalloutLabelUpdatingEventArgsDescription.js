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
export class CalloutLabelUpdatingEventArgsDescription extends Description {
    constructor() {
        super();
        this.h = null;
        this.i = null;
        this.f = null;
        this.g = null;
    }
    get_type() {
        return "CalloutLabelUpdatingEventArgs";
    }
    get type() {
        return this.get_type();
    }
    get xValueRef() {
        return this.h;
    }
    set xValueRef(a) {
        this.h = a;
        this.e("XValueRef");
    }
    get yValueRef() {
        return this.i;
    }
    set yValueRef(a) {
        this.i = a;
        this.e("YValueRef");
    }
    get itemRef() {
        return this.f;
    }
    set itemRef(a) {
        this.f = a;
        this.e("ItemRef");
    }
    get labelRef() {
        return this.g;
    }
    set labelRef(a) {
        this.g = a;
        this.e("LabelRef");
    }
}
CalloutLabelUpdatingEventArgsDescription.$t = markType(CalloutLabelUpdatingEventArgsDescription, 'CalloutLabelUpdatingEventArgsDescription', Description.$);
//# sourceMappingURL=CalloutLabelUpdatingEventArgsDescription.js.map