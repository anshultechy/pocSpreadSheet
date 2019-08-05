/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Delegate_$type, runOn, delegateCombine, markType } from "./type";
import { IExternalDataSeriesAdapter_$type } from "./IExternalDataSeriesAdapter";
import { DataSeriesAdapterImplementation } from "./DataSeriesAdapterImplementation";
import { List$1 } from "./List$1";
import { DataSourceLocalDataProvider } from "./DataSourceLocalDataProvider";
/**
 * @hidden
 */
export class DataSeriesAdapter extends Base {
    constructor() {
        super();
        this.e = null;
        this.f = new List$1(Delegate_$type, 0);
        this.e = new DataSeriesAdapterImplementation();
        this.e.r = this;
        let a = this.e.dataSeries;
        a.collectionChanged = delegateCombine(a.collectionChanged, runOn(this, this.j));
    }
    j(a, b) {
        for (let c = 0; c < this.f.count; c++) {
            this.f._inner[c](this, this.a());
        }
    }
    get i() {
        return this.e.itemsSource;
    }
    set i(a) {
        this.e.itemsSource = a;
    }
    getDataProvider(a) {
        return ((() => {
            let $ret = new DataSourceLocalDataProvider();
            $ret.dataSource = a;
            return $ret;
        })());
    }
    l(a) {
        this.f.add(a);
    }
    x(a) {
        this.f.remove(a);
    }
    k(a) {
        this.e.dataSeries.add(a);
    }
    v(a) {
        this.e.dataSeries.remove(a);
    }
    w(a) {
        this.e.dataSeries.removeAt(a);
    }
    c(a) {
        return this.e.dataSeries._inner[a];
    }
    a() {
        let a = new Array(this.e.dataSeries.count);
        for (let b = 0; b < this.e.dataSeries.count; b++) {
            a[b] = this.e.dataSeries._inner[b];
        }
        return a;
    }
    n() {
        this.e.dataSeries.clear();
    }
    p(a, b) {
        this.e.dataSeries.insert(a, b);
    }
    g() {
        return this.e.dataSeries.count;
    }
    m(a) {
        this.e.rules.add(a);
    }
    y(a) {
        this.e.rules.remove(a);
    }
    z(a) {
        this.e.rules.removeAt(a);
    }
    d(a) {
        return this.e.rules._inner[a];
    }
    o() {
        this.e.rules.clear();
    }
    q(a, b) {
        this.e.rules.insert(a, b);
    }
    h() {
        return this.e.rules.count;
    }
    b() {
        let a = new Array(this.e.rules.count);
        for (let b = 0; b < this.e.rules.count; b++) {
            a[b] = this.e.rules._inner[b];
        }
        return a;
    }
    r(a) {
        this.e.notifyClearItems(a);
    }
    s(a, b, c) {
        this.e.notifyInsertItem(a, b, c);
    }
    t(a, b, c) {
        this.e.notifyRemoveItem(a, b, c);
    }
    u(a, b, c, d) {
        this.e.notifySetItem(a, b, c, d);
    }
}
DataSeriesAdapter.$t = markType(DataSeriesAdapter, 'DataSeriesAdapter', Base.$, [IExternalDataSeriesAdapter_$type]);
//# sourceMappingURL=DataSeriesAdapter.js.map