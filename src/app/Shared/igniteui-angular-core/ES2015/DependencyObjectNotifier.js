/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { DependencyObject } from "./DependencyObject";
import { INotifyPropertyChanged_$type, PropertyChangedEventArgs, markType } from "./type";
/**
 * @hidden
 */
export class DependencyObjectNotifier extends DependencyObject {
    constructor() {
        super(...arguments);
        this.propertyChanged = null;
    }
    j(a) {
        if (this.propertyChanged != null) {
            this.propertyChanged(this, new PropertyChangedEventArgs(a));
        }
    }
}
DependencyObjectNotifier.$t = markType(DependencyObjectNotifier, 'DependencyObjectNotifier', DependencyObject.$, [INotifyPropertyChanged_$type]);
//# sourceMappingURL=DependencyObjectNotifier.js.map