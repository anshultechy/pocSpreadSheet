/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ObservableCollection$1 } from "./ObservableCollection$1";
import { Color } from "./Color";
import { NotifyCollectionChangedEventArgs } from "./NotifyCollectionChangedEventArgs";
import { fromEnum, markType } from "./type";
/**
 * @hidden
 */
export class ObservableColorCollection extends ObservableCollection$1 {
    constructor() {
        super(Color.$, 0);
        this.ae = 0;
    }
    get af() {
        return this.ae;
    }
    set af(a) {
        if (this.ae != a) {
            this.ae = a;
            this.ac(new NotifyCollectionChangedEventArgs(0, 4));
        }
    }
    equals(a) {
        if (a == null) {
            return false;
        }
        let b = a;
        if (b.count != this.count) {
            return false;
        }
        for (let c = 0; c < b.count; c++) {
            if (!b._inner[c].equals(this._inner[c])) {
                return false;
            }
        }
        return true;
    }
    static ag(a) {
        let b = new ObservableColorCollection();
        for (let c of fromEnum(a)) {
            let d = new Color();
            d.colorString = c;
            b.add(d);
        }
        return b;
    }
}
ObservableColorCollection.$t = markType(ObservableColorCollection, 'ObservableColorCollection', ObservableCollection$1.$.specialize(Color.$));
//# sourceMappingURL=ObservableColorCollection.js.map