/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, INotifyPropertyChanged_$type, PropertyChangedEventArgs, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class PropertyChangeNotifier extends Base {
    constructor() {
        super(...arguments);
        this.propertyChanged = null;
    }
    a(a) {
        let b = this.propertyChanged;
        if (b != null) {
            b(this, new PropertyChangedEventArgs(a));
        }
    }
}
PropertyChangeNotifier.$t = markType(PropertyChangeNotifier, 'PropertyChangeNotifier', Base.$, [INotifyPropertyChanged_$type]);
//# sourceMappingURL=PropertyChangeNotifier.js.map