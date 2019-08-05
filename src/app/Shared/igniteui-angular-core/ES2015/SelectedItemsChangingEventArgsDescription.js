/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { SelectedItemsChangedEventArgsDescription } from "./SelectedItemsChangedEventArgsDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class SelectedItemsChangingEventArgsDescription extends SelectedItemsChangedEventArgsDescription {
    constructor() {
        super();
        this.k = false;
    }
    get_type() {
        return "SelectedItemsChangingEventArgs";
    }
    get cancel() {
        return this.k;
    }
    set cancel(a) {
        this.k = a;
        this.e("Cancel");
    }
}
SelectedItemsChangingEventArgsDescription.$t = markType(SelectedItemsChangingEventArgsDescription, 'SelectedItemsChangingEventArgsDescription', SelectedItemsChangedEventArgsDescription.$);
//# sourceMappingURL=SelectedItemsChangingEventArgsDescription.js.map