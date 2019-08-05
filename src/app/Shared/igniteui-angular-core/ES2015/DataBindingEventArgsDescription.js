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
export class DataBindingEventArgsDescription extends Description {
    constructor() {
        super();
        this.f = null;
        this.g = null;
    }
    get_type() {
        return "DataBindingEventArgs";
    }
    get type() {
        return this.get_type();
    }
    get resolvedValueRef() {
        return this.f;
    }
    set resolvedValueRef(a) {
        this.f = a;
        this.e("ResolvedValueRef");
    }
    get rowObjectRef() {
        return this.g;
    }
    set rowObjectRef(a) {
        this.g = a;
        this.e("RowObjectRef");
    }
}
DataBindingEventArgsDescription.$t = markType(DataBindingEventArgsDescription, 'DataBindingEventArgsDescription', Description.$);
//# sourceMappingURL=DataBindingEventArgsDescription.js.map