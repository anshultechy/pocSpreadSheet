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
export class CalloutContentUpdatingEventArgsDescription extends Description {
    constructor() {
        super();
        this.h = null;
        this.i = null;
        this.g = null;
        this.f = null;
    }
    get_type() {
        return "CalloutContentUpdatingEventArgs";
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
        return this.g;
    }
    set itemRef(a) {
        this.g = a;
        this.e("ItemRef");
    }
    get contentRef() {
        return this.f;
    }
    set contentRef(a) {
        this.f = a;
        this.e("ContentRef");
    }
}
CalloutContentUpdatingEventArgsDescription.$t = markType(CalloutContentUpdatingEventArgsDescription, 'CalloutContentUpdatingEventArgsDescription', Description.$);
//# sourceMappingURL=CalloutContentUpdatingEventArgsDescription.js.map