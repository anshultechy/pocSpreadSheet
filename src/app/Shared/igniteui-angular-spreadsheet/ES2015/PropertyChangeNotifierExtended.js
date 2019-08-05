/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { PropertyChangeNotifier } from "./PropertyChangeNotifier";
import { ISupportPropertyChangeNotifications_$type } from "./ISupportPropertyChangeNotifications";
import { Base, String_$type, markType } from "../../igniteui-angular-core/ES2015/type";
import { IPropertyChangeListener_$type } from "./IPropertyChangeListener";
import { ListenerList } from "./ListenerList";
/**
 * @hidden
 */
export class PropertyChangeNotifierExtended extends PropertyChangeNotifier {
    constructor() {
        super();
        this.b = null;
    }
    a(a) {
        super.a(a);
        this.d(this, a, null);
    }
    addListener(a, b) {
        this.b = ListenerList.add2(this.b, a, b);
    }
    d(a, b, c) {
        this.e(a, b, c);
    }
    e(a, b, c) {
        if (null != this.b) {
            ListenerList.aj(Base.$, String_$type, this.b, a, b, c);
        }
    }
    removeListener(a) {
        this.b = ListenerList.remove2(this.b, a);
    }
    onPropertyValueChanged(a, b, c) {
        this.d(a, b, c);
    }
}
PropertyChangeNotifierExtended.$t = markType(PropertyChangeNotifierExtended, 'PropertyChangeNotifierExtended', PropertyChangeNotifier.$, [ISupportPropertyChangeNotifications_$type, IPropertyChangeListener_$type]);
//# sourceMappingURL=PropertyChangeNotifierExtended.js.map