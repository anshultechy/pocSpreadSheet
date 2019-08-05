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
export class SelectedItemChangedEventArgsDescription extends Description {
    constructor() {
        super();
        this.g = null;
        this.f = null;
    }
    get_type() {
        return "SelectedItemChangedEventArgs";
    }
    get type() {
        return this.get_type();
    }
    get oldItemRef() {
        return this.g;
    }
    set oldItemRef(a) {
        this.g = a;
        this.e("OldItemRef");
    }
    get newItemRef() {
        return this.f;
    }
    set newItemRef(a) {
        this.f = a;
        this.e("NewItemRef");
    }
}
SelectedItemChangedEventArgsDescription.$t = markType(SelectedItemChangedEventArgsDescription, 'SelectedItemChangedEventArgsDescription', Description.$);
//# sourceMappingURL=SelectedItemChangedEventArgsDescription.js.map