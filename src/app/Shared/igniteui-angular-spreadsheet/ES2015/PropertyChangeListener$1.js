/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { PropertyChangeListenerBase } from "./PropertyChangeListenerBase";
import { IPropertyChangeListener_$type } from "./IPropertyChangeListener";
import { typeCastObjTo$t, markType } from "../../igniteui-angular-core/ES2015/type";
import { ListenerList } from "./ListenerList";
import { CoreUtilities } from "./CoreUtilities";
import { WeakReference } from "../../igniteui-angular-core/ES2015/WeakReference";
/**
 * @hidden
 */
export class PropertyChangeListener$1 extends PropertyChangeListenerBase {
    constructor($tOwner, a, b, c) {
        super();
        this.$tOwner = null;
        this.d = null;
        this.c = null;
        this.$tOwner = $tOwner;
        this.$type = this.$type.specialize(this.$tOwner);
        CoreUtilities.y(a);
        this.d = c ? new WeakReference(a) : a;
        this.c = b;
    }
    get b() {
        return typeCastObjTo$t(this.$tOwner, ListenerList.ag(this.d));
    }
    onPropertyValueChanged(a, b, c) {
        let d = this.b;
        if (null != d && null != this.c) {
            this.c(d, a, b, c);
        }
    }
    a() {
        return this.b;
    }
}
PropertyChangeListener$1.$t = markType(PropertyChangeListener$1, 'PropertyChangeListener$1', PropertyChangeListenerBase.$, [IPropertyChangeListener_$type]);
//# sourceMappingURL=PropertyChangeListener$1.js.map