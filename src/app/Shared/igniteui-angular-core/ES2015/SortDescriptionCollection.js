/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { SyncableObservableCollection$1 } from "./SyncableObservableCollection$1";
import { SortDescription } from "./SortDescription";
/**
 * @hidden
 */
export class SortDescriptionCollection extends Base {
    constructor() {
        super();
        this.d = null;
        this.f = null;
        this.f = new SyncableObservableCollection$1(SortDescription.$);
    }
    g() {
        return this.f;
    }
    get syncTarget() {
        return this.d;
    }
    set syncTarget(a) {
        if (a == null) {
            this.f.syncTarget = null;
            this.d = null;
            return;
        }
        this.d = a;
        this.f.syncTarget = this.d.f;
    }
    add(a) {
        return this.f.add(a);
    }
    insert(a, b) {
        this.f.add1(a, b);
    }
    clear() {
        this.f.clear();
    }
    get(a) {
        return this.f.get(a);
    }
    indexOf(a) {
        return this.f.indexOf(a);
    }
    remove(a) {
        return this.f.remove1(a);
    }
    removeAt(a) {
        return this.f.remove(a);
    }
    set(a, b) {
        return this.f.set(a, b);
    }
    size() {
        return this.f.size();
    }
    n(a) {
        this.f.addListener(a);
    }
    q(a) {
        this.f.removeListener(a);
    }
    get onChanged() {
        return this.f.f;
    }
    set onChanged(a) {
        this.f.f = a;
    }
    get k() {
        return this.f.all;
    }
}
SortDescriptionCollection.$t = markType(SortDescriptionCollection, 'SortDescriptionCollection');
//# sourceMappingURL=SortDescriptionCollection.js.map