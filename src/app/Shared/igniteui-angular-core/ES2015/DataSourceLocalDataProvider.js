/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IList_$type, runOn, String_$type, typeCast, Array_$type, markType } from "./type";
import { IDataSourceLocalDataProvider_$type } from "./IDataSourceLocalDataProvider";
import { DataSourceSchemaPropertyType_$type } from "./DataSourceSchemaPropertyType";
import { DefaultDataSourceSchema } from "./DefaultDataSourceSchema";
import { SortDescriptionCollection } from "./SortDescriptionCollection";
import { Dictionary$2 } from "./Dictionary$2";
import { FastReflectionHelper } from "./FastReflectionHelper";
import { DataSourceDataProviderSchemaChangedEventArgs } from "./DataSourceDataProviderSchemaChangedEventArgs";
import { List$1 } from "./List$1";
import { HashSet$1 } from "./HashSet$1";
import { stringStartsWith } from "./string";
/**
 * @hidden
 */
export class DataSourceLocalDataProvider extends Base {
    constructor() {
        super();
        this.j = null;
        this.i = null;
        this.d = null;
        this.t = null;
        this.schemaChanged = null;
        this.o = new Dictionary$2(String_$type, FastReflectionHelper.$, 0);
        this.g = null;
        this.r = null;
        this.m = false;
        this.f = null;
        this.e = null;
        this.l = false;
        this.a = null;
        this.k = false;
        this.j = new SortDescriptionCollection();
        this.j.n(runOn(this, this.af));
    }
    af(a, b) {
        this.queueAutoRefresh();
    }
    get dataSource() {
        return this.t;
    }
    set dataSource(a) {
        let b = this.t;
        this.t = a;
        if (b != this.t) {
            this.ab("ItemsSource", b, this.t);
        }
    }
    getItemAtIndex(a) {
        if (this.r == null) {
            return null;
        }
        if (this.m) {
            return this.r[a];
        }
        return this.r.item(a);
    }
    getItemValue(a, b) {
        this.y();
        let c;
        let d = this.o.tryGetValue(b, c);
        c = d.p1;
        if (c == null) {
            return null;
        }
        let val_ = c.getPropertyValue(a);
        if ((val_ === undefined)) {
            return null;
        }
        return val_;
    }
    y() {
        if (this.g == null) {
            this.g = this.actualSchema;
            if (this.schemaChanged != null) {
                this.schemaChanged(this, new DataSourceDataProviderSchemaChangedEventArgs(this.g, this.actualCount));
            }
        }
    }
    get actualCount() {
        if (this.r == null) {
            return 0;
        }
        if (this.m) {
            return (this.r.length);
        }
        return this.r.count;
    }
    get actualSchema() {
        if (this.g == null) {
            if (this.r == null) {
                this.g = new DefaultDataSourceSchema([], [], null, null);
            }
            else {
                this.g = this.h();
            }
        }
        return this.g;
    }
    h() {
        let a = this.u();
        if (a == null) {
            return new DefaultDataSourceSchema([], [], null, null);
        }
        this.o.clear();
        let b = new List$1(String_$type, 0);
        let c = new HashSet$1(String_$type, 0);
        let d = new List$1(DataSourceSchemaPropertyType_$type, 0);
        let e = new List$1(List$1.$.specialize(String_$type), 0);
        let f = this.p(a);
        for (let g = 0; g < f.count; g++) {
            let h = f._inner[g];
            if (stringStartsWith(h, "_")) {
                continue;
            }
            if (h == "$hashCode") {
                continue;
            }
            if (c.contains(h)) {
                continue;
            }
            else {
                b.add(h);
                c.add_1(h);
                this.o.addItem(h, new FastReflectionHelper(false, h));
                d.add(this.b(a, h));
                e.add(this.q(a, h));
            }
        }
        let i = new Array(e.count);
        for (let j = 0; j < e.count; j++) {
            i[j] = e._inner[j].toArray();
        }
        return new DefaultDataSourceSchema(b.toArray(), d.toArray(), null, i);
    }
    resolveSchemaPropertyType(a) {
        let b = a.split('.');
        if (b.length == 1) {
            for (let c = 0; c < this.actualSchema.propertyNames.length; c++) {
                if (this.actualSchema.propertyNames[c] == b[0]) {
                    return this.actualSchema.propertyTypes[c];
                }
            }
            return 11;
        }
        else {
            let d = this.u();
            let e = this.getItemValue(d, a);
            if (e == null) {
                return 11;
            }
            else {
                return DataSourceLocalDataProvider.c(e);
            }
        }
    }
    p(schemaItem_) {
        let propertyKey_ = null;
        let ret_ = new List$1(String_$type, 0);
        let exclusions_ = {};
        for (propertyKey_ in schemaItem_) {
            if (!isNaN(propertyKey_)) {
                continue;
            }
            if (!exclusions_.hasOwnProperty(propertyKey_)) {
                ret_.add(propertyKey_);
            }
        }
        ;
        return ret_;
    }
    aa(a, item_, propertyName_, b) {
        if ((item_.__dataIntents !== undefined)) {
            if ((item_.__dataIntents[propertyName_] !== undefined)) {
                this.z(a, item_, propertyName_);
            }
            let selfName_ = "self." + propertyName_;
            if (!b && (item_.__dataIntents[selfName_] !== undefined)) {
                this.z(a, item_, selfName_);
            }
            let selfName2_ = "self_" + propertyName_;
            if (!b && (item_.__dataIntents[selfName2_] !== undefined)) {
                this.z(a, item_, selfName2_);
            }
        }
    }
    z(a, item_, propertyName_) {
        let b = item_.__dataIntents[propertyName_];
        if (typeCast(Array_$type, b) !== null) {
            let c = b;
            for (let d = 0; d < c.length; d++) {
                if (c[d] != null) {
                    a.add(c[d].toString());
                }
            }
        }
    }
    q(item_, propertyName_) {
        let a = new List$1(String_$type, 0);
        let list_ = this.r;
        let dataIntents_ = null;
        this.aa(a, item_, propertyName_, false);
        this.aa(a, list_, propertyName_, true);
        return a;
    }
    b(item_, propertyName_) {
        if (item_ == null) {
            return 11;
        }
        if ((item_[propertyName_] == undefined)) {
            return 11;
        }
        let value_ = item_[propertyName_];
        return DataSourceLocalDataProvider.c(value_);
    }
    static c(value_) {
        if (value_ == null) {
            return 11;
        }
        if ((typeof value_ == 'number')) {
            return 5;
        }
        if ((typeof value_ == 'boolean')) {
            return 2;
        }
        if ((typeof value_ == 'string')) {
            return 0;
        }
        if ((typeof value_ == 'object')) {
            if ((value_ instanceof Date)) {
                return 8;
            }
        }
        return 11;
    }
    u() {
        let a = 0;
        if (this.m) {
            a = (this.r.length);
        }
        else {
            a = this.r.count;
        }
        for (let b = 0; b < a; b++) {
            let c;
            if (this.m) {
                c = this.r[b];
            }
            else {
                c = this.r.item(b);
            }
            if (c != null) {
                return c;
            }
        }
        return null;
    }
    ab(a, b, c) {
        this.ac(a, b, c);
    }
    get s() {
        return this.r;
    }
    ac(a, b, c) {
        switch (a) {
            case "ItemsSource":
                this.g = null;
                if (this.dataSource != null) {
                    this.m = false;
                    if (typeCast(Array_$type, this.dataSource) !== null) {
                        this.m = true;
                        this.r = this.dataSource;
                    }
                    else if (typeCast(IList_$type, this.dataSource) !== null) {
                        this.r = this.dataSource;
                    }
                }
                else {
                    this.r = null;
                }
                this.y();
                break;
            case "DeferAutoRefresh":
                if (!c) {
                    this.queueAutoRefresh();
                }
                break;
        }
    }
    get executionContext() {
        return this.f;
    }
    set executionContext(a) {
        this.f = a;
    }
    get n() {
        return false;
    }
    notifySetItem(a, b, c) {
        if (this.n) {
            if (this.m) {
                this.r[a] = c;
            }
            else {
                this.r.item(a, c);
            }
        }
        if (this.updateNotifier != null) {
            this.updateNotifier.notifySetItem(a, b, c);
        }
    }
    notifyClearItems() {
        if (this.n) {
            if (this.m) {
                this.r.length = 0;
            }
            else {
                this.r.clear();
            }
        }
        if (this.updateNotifier != null) {
            this.updateNotifier.notifyClearItems();
        }
    }
    notifyInsertItem(a, b) {
        if (this.n) {
            if (this.m) {
                this.r.splice(a, 0, b);
            }
            else {
                this.r.insert(a, b);
            }
        }
        let c = 0;
        if (this.m) {
            c = (this.r.length);
        }
        else {
            c = this.r.count;
        }
        if (this.r != null && c == 1 && (this.actualSchema == null || this.actualSchema.propertyNames.length == 0)) {
            this.g = null;
            this.y();
        }
        if (this.updateNotifier != null) {
            this.updateNotifier.notifyInsertItem(a, b);
        }
    }
    notifyRemoveItem(a, b) {
        if (this.n) {
            if (this.m) {
                this.r.splice(a, 1);
            }
            else {
                this.r.remove(a);
            }
        }
        if (this.updateNotifier != null) {
            this.updateNotifier.notifyRemoveItem(a, b);
        }
    }
    get updateNotifier() {
        return this.e;
    }
    set updateNotifier(a) {
        this.e = a;
    }
    get deferAutoRefresh() {
        return this.l;
    }
    set deferAutoRefresh(a) {
        let b = this.l;
        this.l = a;
        if (this.l != b) {
            this.ab("DeferAutoRefresh", b, this.l);
        }
    }
    get isSortingSupported() {
        return false;
    }
    get isFilteringSupported() {
        return false;
    }
    get sortDescriptions() {
        return this.j;
    }
    get filterExpressions() {
        return this.d;
    }
    get notifyUsingSourceIndexes() {
        return true;
    }
    get propertiesRequested() {
        return this.a;
    }
    set propertiesRequested(a) {
        this.a = a;
    }
    get isItemIndexLookupSupported() {
        return true;
    }
    get isKeyIndexLookupSupported() {
        return false;
    }
    get isGroupingSupported() {
        return false;
    }
    get groupDescriptions() {
        return this.i;
    }
    queueAutoRefresh() {
        if (this.deferAutoRefresh) {
            return;
        }
        if (this.k) {
            return;
        }
        if (this.executionContext != null) {
            this.k = true;
            this.executionContext.enqueueAction(runOn(this, this.x));
        }
    }
    x() {
        if (this.deferAutoRefresh) {
            this.k = false;
            return;
        }
        if (!this.k) {
            return;
        }
        this.k = false;
        this.ad();
    }
    ad() {
        this.ae();
    }
    ae() {
    }
    flushAutoRefresh() {
        this.x();
    }
    refresh() {
        this.ad();
    }
    indexOfItem(a) {
        if (this.r == null) {
            return -1;
        }
        return this.r.indexOf(a);
    }
    indexOfKey(a) {
        return -1;
    }
}
DataSourceLocalDataProvider.$t = markType(DataSourceLocalDataProvider, 'DataSourceLocalDataProvider', Base.$, [IDataSourceLocalDataProvider_$type]);
//# sourceMappingURL=DataSourceLocalDataProvider.js.map