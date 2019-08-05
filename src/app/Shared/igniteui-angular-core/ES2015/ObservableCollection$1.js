/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { List$1 } from "./List$1";
import { INotifyCollectionChanged_$type } from "./INotifyCollectionChanged";
import { INotifyPropertyChanged_$type, PropertyChangedEventArgs, getBoxIfEnum, markType } from "./type";
import { NotifyCollectionChangedEventArgs } from "./NotifyCollectionChangedEventArgs";
/**
 * @hidden
 */
export class ObservableCollection$1 extends List$1 {
    constructor($t, a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    super($t, 0);
                    this.$t = $t;
                    this.$type = this.$type.specialize(this.$t);
                    this.collectionChanged = null;
                    this.propertyChanged = null;
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    super($t, 1, c);
                    this.$t = $t;
                    this.$type = this.$type.specialize(this.$t);
                    this.collectionChanged = null;
                    this.propertyChanged = null;
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    super($t, 2, c);
                    this.$t = $t;
                    this.$type = this.$type.specialize(this.$t);
                    this.collectionChanged = null;
                    this.propertyChanged = null;
                }
                break;
        }
    }
    x(a, b) {
        let c = this._inner[a];
        super.x(a, b);
        if (this.propertyChanged != null) {
            this.ad(new PropertyChangedEventArgs("Item[]"));
        }
        if (this.collectionChanged != null) {
            let d = new NotifyCollectionChangedEventArgs(2, 2, getBoxIfEnum(this.$t, b), getBoxIfEnum(this.$t, c), a);
            this.ac(d);
        }
    }
    p() {
        super.p();
        if (this.propertyChanged != null) {
            this.ad(new PropertyChangedEventArgs("Count"));
            this.ad(new PropertyChangedEventArgs("Item[]"));
        }
        if (this.collectionChanged != null) {
            let a = new NotifyCollectionChangedEventArgs(0, 4);
            this.ac(a);
        }
    }
    r(a, b) {
        super.r(a, b);
        if (this.propertyChanged != null) {
            this.ad(new PropertyChangedEventArgs("Count"));
            this.ad(new PropertyChangedEventArgs("Item[]"));
        }
        if (this.collectionChanged != null) {
            let c = new NotifyCollectionChangedEventArgs(1, 0, getBoxIfEnum(this.$t, b), a);
            this.ac(c);
        }
    }
    n(a) {
        super.n(a);
        if (this.propertyChanged != null) {
            this.ad(new PropertyChangedEventArgs("Count"));
            this.ad(new PropertyChangedEventArgs("Item[]"));
        }
        if (this.collectionChanged != null) {
            let b = new NotifyCollectionChangedEventArgs(1, 0, getBoxIfEnum(this.$t, a), this.count - 1);
            this.ac(b);
        }
    }
    u(a) {
        let b = this._inner[a];
        super.u(a);
        if (this.propertyChanged != null) {
            this.ad(new PropertyChangedEventArgs("Count"));
            this.ad(new PropertyChangedEventArgs("Item[]"));
        }
        if (this.collectionChanged != null) {
            let c = new NotifyCollectionChangedEventArgs(1, 1, getBoxIfEnum(this.$t, b), a);
            this.ac(c);
        }
    }
    ad(a) {
        if (this.propertyChanged != null) {
            this.propertyChanged(this, a);
        }
    }
    ac(a) {
        if (this.collectionChanged != null) {
            this.collectionChanged(this, a);
        }
    }
}
ObservableCollection$1.$t = markType(ObservableCollection$1, 'ObservableCollection$1', List$1.$.specialize(0), [INotifyCollectionChanged_$type, INotifyPropertyChanged_$type]);
//# sourceMappingURL=ObservableCollection$1.js.map