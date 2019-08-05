/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { WeakEventHandler$3 } from "./WeakEventHandler$3";
import { INotifyPropertyChanged_$type, PropertyChangedEventArgs, runOn, delegateRemove, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class WeakPropertyChangedHandler$1 extends WeakEventHandler$3 {
    constructor($tInstance, a, b, c) {
        super($tInstance, INotifyPropertyChanged_$type, PropertyChangedEventArgs.$, a, b, c, (d, e) => e.propertyChanged = delegateRemove(e.propertyChanged, runOn(d, d.f)));
        this.$tInstance = null;
        this.$tInstance = $tInstance;
        this.$type = this.$type.specialize(this.$tInstance);
    }
}
WeakPropertyChangedHandler$1.$t = markType(WeakPropertyChangedHandler$1, 'WeakPropertyChangedHandler$1', WeakEventHandler$3.$.specialize(0, INotifyPropertyChanged_$type, PropertyChangedEventArgs.$));
//# sourceMappingURL=WeakPropertyChangedHandler$1.js.map