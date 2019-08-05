/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ISupportsDataChangeNotifications_$type } from "./ISupportsDataChangeNotifications";
import { IDataSourceSupportsCount_$type } from "./IDataSourceSupportsCount";
import { Base, Type, markType } from "./type";
import { SyncableObservableCollection$1 } from "./SyncableObservableCollection$1";
/**
 * @hidden
 */
export let IDataSourceDataProvider_$type = new Type(null, 'IDataSourceDataProvider', null, [ISupportsDataChangeNotifications_$type, IDataSourceSupportsCount_$type]);
/**
 * @hidden
 */
export let IFilterExpression_$type = new Type(null, 'IFilterExpression');
/**
 * @hidden
 */
export class FilterExpressionCollection extends Base {
    constructor() {
        super();
        this.a = null;
        this.f = null;
        this.f = new SyncableObservableCollection$1(IFilterExpression_$type);
    }
    get syncTarget() {
        return this.a;
    }
    set syncTarget(a) {
        if (a == null) {
            this.f.syncTarget = null;
            this.a = null;
            return;
        }
        this.a = a;
        this.f.syncTarget = this.a.f;
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
    get onChanged() {
        return this.f.f;
    }
    set onChanged(a) {
        this.f.f = a;
    }
    m(a) {
        this.f.addListener(a);
    }
    p(a) {
        this.f.removeListener(a);
    }
    get j() {
        return this.f.all;
    }
}
FilterExpressionCollection.$t = markType(FilterExpressionCollection, 'FilterExpressionCollection');
//# sourceMappingURL=IDataSourceDataProvider_combined.js.map