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
export class SelectedItemsChangedEventArgsDescription extends Description {
    constructor() {
        super();
        this.g = null;
        this.f = null;
    }
    get_type() {
        return "SelectedItemsChangedEventArgs";
    }
    get type() {
        return this.get_type();
    }
    get oldItemsRef() {
        return this.g;
    }
    set oldItemsRef(a) {
        this.g = a;
        this.e("OldItemsRef");
    }
    get newItemsRef() {
        return this.f;
    }
    set newItemsRef(a) {
        this.f = a;
        this.e("NewItemsRef");
    }
}
SelectedItemsChangedEventArgsDescription.$t = markType(SelectedItemsChangedEventArgsDescription, 'SelectedItemsChangedEventArgsDescription', Description.$);
//# sourceMappingURL=SelectedItemsChangedEventArgsDescription.js.map