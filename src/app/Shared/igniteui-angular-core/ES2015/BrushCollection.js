/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ObservableCollection$1 } from "./ObservableCollection$1";
import { Brush } from "./Brush";
import { NotifyCollectionChangedEventArgs } from "./NotifyCollectionChangedEventArgs";
import { Random } from "./Random";
import { markType } from "./type";
/**
 * @hidden
 */
export class BrushCollection extends ObservableCollection$1 {
    constructor() {
        super(Brush.$, 0);
        this.ae = 0;
    }
    ai() {
        return this.item(BrushCollection.ag.next1(this.count));
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
    item(a, b) {
        if (arguments.length === 2) {
            super.item(a, b);
            return b;
        }
        else {
            if (a < 0 || a >= this.count) {
                return null;
            }
            return super.item(a);
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
            if (!b.item(c).equals(this.item(c))) {
                return false;
            }
        }
        return true;
    }
}
BrushCollection.$t = markType(BrushCollection, 'BrushCollection', ObservableCollection$1.$.specialize(Brush.$));
BrushCollection.ag = new Random(0);
//# sourceMappingURL=BrushCollection.js.map