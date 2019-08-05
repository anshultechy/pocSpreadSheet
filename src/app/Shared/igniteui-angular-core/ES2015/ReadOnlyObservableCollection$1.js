/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ReadOnlyCollection$1 } from "./ReadOnlyCollection$1";
import { INotifyCollectionChanged_$type } from "./INotifyCollectionChanged";
import { INotifyPropertyChanged_$type, markType } from "./type";
/**
 * @hidden
 */
export class ReadOnlyObservableCollection$1 extends ReadOnlyCollection$1 {
    constructor($t, a) {
        super($t, 0);
        this.$t = null;
        this.collectionChanged = null;
        this.propertyChanged = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
    }
}
ReadOnlyObservableCollection$1.$t = markType(ReadOnlyObservableCollection$1, 'ReadOnlyObservableCollection$1', ReadOnlyCollection$1.$.specialize(0), [INotifyCollectionChanged_$type, INotifyPropertyChanged_$type]);
//# sourceMappingURL=ReadOnlyObservableCollection$1.js.map