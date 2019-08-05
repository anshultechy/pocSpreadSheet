/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { WeakEventHandler$3 } from "./WeakEventHandler$3";
import { INotifyCollectionChanged_$type } from "../../igniteui-angular-core/ES2015/INotifyCollectionChanged";
import { NotifyCollectionChangedEventArgs } from "../../igniteui-angular-core/ES2015/NotifyCollectionChangedEventArgs";
import { runOn, delegateRemove, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class WeakCollectionChangedHandler$1 extends WeakEventHandler$3 {
    constructor($tInstance, a, b, c) {
        super($tInstance, INotifyCollectionChanged_$type, NotifyCollectionChangedEventArgs.$, a, b, c, (d, e) => e.collectionChanged = delegateRemove(e.collectionChanged, runOn(d, d.f)));
        this.$tInstance = null;
        this.$tInstance = $tInstance;
        this.$type = this.$type.specialize(this.$tInstance);
    }
}
WeakCollectionChangedHandler$1.$t = markType(WeakCollectionChangedHandler$1, 'WeakCollectionChangedHandler$1', WeakEventHandler$3.$.specialize(0, INotifyCollectionChanged_$type, NotifyCollectionChangedEventArgs.$));
//# sourceMappingURL=WeakCollectionChangedHandler$1.js.map