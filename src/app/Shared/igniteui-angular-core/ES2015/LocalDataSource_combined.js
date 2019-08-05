/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { BaseDataSource } from "./BaseDataSource";
import { Base, typeCast, Array_$type, Number_$type, markType } from "./type";
import { RearrangedListView } from "./RearrangedListView";
import { DataSourcePropertiesComparer } from "./DataSourcePropertiesComparer";
import { List$1 } from "./List$1";
import { DataSourceExecutionContext } from "./DataSourceExecutionContext";
import { DataSourceLocalDataProvider } from "./DataSourceLocalDataProvider";
import { DataSourceSpecialRow } from "./DataSourceSpecialRow";
import { ISupportsDataChangeNotifications_$type } from "./ISupportsDataChangeNotifications";
/**
 * @hidden
 */
export class LocalDataSource extends BaseDataSource {
    constructor() {
        super();
        this.bw = null;
        this.bv = null;
        this.cl = null;
        this.b1 = null;
        this.b5 = null;
        this.b7 = null;
        this.b3 = null;
        this.cg = new List$1(Array_$type, 0);
        this.b8 = false;
        this.bu = null;
        this.cj = -1;
        this.ch = -1;
        this.ck = -1;
        this.ci = -1;
        this.executionContext = new DataSourceExecutionContext();
    }
    get_actualBaseDataProvider() {
        return this.actualDataProvider;
    }
    get actualBaseDataProvider() {
        return this.get_actualBaseDataProvider();
    }
    get dataProvider() {
        return this.bw;
    }
    set dataProvider(a) {
        let b = this.bw;
        this.bw = a;
        if (b != this.bw) {
            this.onPropertyUpdated("DataProvider", b, this.bw);
        }
    }
    get actualDataProvider() {
        if (this.bv == null) {
            this.actualDataProvider = this.resolveDataProvider();
        }
        return this.bv;
    }
    set actualDataProvider(a) {
        let b = this.bv;
        this.bv = a;
        if (b != this.bv) {
            this.onPropertyUpdated("ActualDataProvider", b, this.bv);
        }
    }
    get itemsSource() {
        return this.cl;
    }
    set itemsSource(a) {
        let b = this.cl;
        this.cl = a;
        if (b != this.cl) {
            this.onPropertyUpdated("ItemsSource", b, this.cl);
        }
    }
    canInitialize() {
        let a = super.canInitialize();
        if (!a) {
            return false;
        }
        return this.itemsSource != null;
    }
    get b2() {
        return this.b1;
    }
    set b2(a) {
        this.b1 = a;
        this.actualDataProvider = this.resolveDataProvider();
    }
    resolveDataProvider() {
        let provider_ = new DataSourceLocalDataProvider();
        provider_.executionContext = new DataSourceExecutionContext();
        return provider_;
    }
    propertyUpdatedOverride(a, b, c) {
        super.propertyUpdatedOverride(a, b, c);
        switch (a) {
            case "DataProvider":
                this.actualDataProvider = this.dataProvider;
                break;
            case "ActualDataProvider":
                if (this.actualDataProvider != null) {
                    this.actualDataProvider.dataSource = this.itemsSource;
                    this.actualSchema = this.actualDataProvider.actualSchema;
                    this.actualCount = this.resolveFullCount(this.actualDataProvider.actualCount);
                }
                this.queueAutoRefresh();
                break;
            case "ItemsSource":
                if (this.actualDataProvider != null) {
                    this.actualDataProvider.dataSource = this.itemsSource;
                    this.actualSchema = this.actualDataProvider.actualSchema;
                    this.actualCount = this.resolveFullCount(this.actualDataProvider.actualCount);
                }
                this.queueAutoRefresh();
                break;
        }
    }
    getItemAtIndex(a) {
        if (this.b5 != null && this.b5.ag != null) {
            return this.b5.ag.item(a);
        }
        else {
            return this.actualDataProvider.getItemAtIndex(a);
        }
    }
    getItemPropertyAtIndex(a, b) {
        let c;
        if (this.b5 != null) {
            c = this.b5.ag.item(a);
        }
        else {
            c = this.actualDataProvider.getItemAtIndex(a);
        }
        let item_ = c;
        if ((item_ != null && item_.$$isSpecialRow !== undefined)) {
            return this.getSpecialRowItemValue(c, b);
        }
        return this.actualDataProvider.getItemValue(c, b);
    }
    b0() {
        return this.actualDataProvider;
    }
    ca() {
        return this.cg != null && this.cg.count > 0;
    }
    refreshInternalOverride() {
        super.refreshInternalOverride();
        if (this.actualDataProvider != null) {
            if (this.cb() || this.cc() || this.cd() || this.ca()) {
                if (this.b5 == null) {
                    if (this.b7 == null) {
                        this.b7 = new LocalDataSourceViewUpdateNotifier(this);
                    }
                    this.b5 = new RearrangedListView(this.actualDataProvider);
                    this.b5.n = this.b7;
                }
                this.ensureComparables(this.actualDataProvider.actualSchema);
                this.b5.w = this.shouldEmitSectionHeaders && this.aa;
                this.b5.v = this.shouldEmitSectionFooters && this.aa;
                this.b5.x = this.shouldEmitShiftedRows;
                this.b5.a1(this.cg);
                this.b5.ac = this.cf();
                this.b5.ab = this.ce();
                this.b5.g = this.b4();
                this.b5.o = this.groupDescriptions;
                this.b5.p = this.sortDescriptions;
                this.b5.d = this;
                this.b5.t = this.groupDescriptions != null && this.groupDescriptions.k.count > 0;
                this.b5.i = this.b6();
                this.b5.ay();
                this.actualSchema = this.actualDataProvider.actualSchema;
                this.actualCount = this.b5.ag.count;
            }
            else {
                let a = this.b0();
                this.actualSchema = this.actualDataProvider.actualSchema;
                if (a != null) {
                    this.actualCount = a.actualCount;
                }
                else {
                    this.actualCount = 0;
                }
                if (this.b5 != null) {
                    this.b5.n = null;
                    this.b5 = null;
                    this.onBroadcastClearItems();
                }
            }
        }
        else {
            this.actualCount = 0;
            this.actualSchema = null;
        }
    }
    get_isItemIndexLookupSupported() {
        return true;
    }
    get_isKeyIndexLookupSupported() {
        return true;
    }
    indexOfItem(a) {
        if (this.b5 != null) {
            return this.b5.ag.indexOf(a);
        }
        if (this.actualDataProvider != null && this.actualDataProvider.isItemIndexLookupSupported) {
            return this.actualDataProvider.indexOfItem(a);
        }
        if (this.actualDataProvider != null) {
            let b = this.actualDataProvider.actualCount;
            let c;
            for (let d = 0; d < b; d++) {
                c = this.actualDataProvider.getItemAtIndex(d);
                if (this.b9(c, a)) {
                    return d;
                }
            }
        }
        return -1;
    }
    b9(a, b) {
        if (a == null && b == null) {
            return true;
        }
        if (a == null || b == null) {
            return false;
        }
        return Base.equalsStatic(a, b);
    }
    indexOfKey(a) {
        let b = this.actualPrimaryKey;
        if (b == null || b.length < 1 || this.actualBaseDataProvider == null) {
            return this.indexOfItem(a[0]);
        }
        let c = this.b4();
        let d;
        if (this.b5 != null) {
            let e = this.b5.ag.count;
            for (let f = 0; f < e; f++) {
                d = this.b5.ag.item(f);
                if (!(typeCast(DataSourceSpecialRow.$, d) !== null) && c.i(d, a) == 0) {
                    return f;
                }
            }
            return -1;
        }
        if (this.actualDataProvider != null && this.actualDataProvider.isKeyIndexLookupSupported) {
            return this.actualDataProvider.indexOfKey(a);
        }
        if (this.actualDataProvider != null) {
            let g = this.actualDataProvider.actualCount;
            for (let h = 0; h < g; h++) {
                d = this.actualDataProvider.getItemAtIndex(h);
                if (c.i(d, a) == 0) {
                    return h;
                }
            }
        }
        return -1;
    }
    onActualPrimaryKeyChangedOverrride(a, b) {
        super.onActualPrimaryKeyChangedOverrride(a, b);
        this.b3 = null;
    }
    b4() {
        if (this.b3 != null) {
            return this.b3;
        }
        if (this.actualPrimaryKey == null) {
            this.b3 = new DataSourcePropertiesComparer(null, null, null, this);
            return this.b3;
        }
        let a = new Array(this.actualPrimaryKey.length);
        for (let b = 0; b < a.length; b++) {
            a[b] = 0;
        }
        this.b3 = new DataSourcePropertiesComparer(this.actualPrimaryKey, a, this.d, this);
        return this.b3;
    }
    b6() {
        if (this.filterExpressions.j.count == 0) {
            return null;
        }
        let a = this.actualDataProvider;
        let b = this.actualDataProvider.actualSchema;
        let c = this.filterExpressions.j;
        let d = (e) => {
            for (let f = 0; f < c.count; f++) {
                if (!c.item(f).match(e, a, b)) {
                    return false;
                }
            }
            return true;
        };
        return d;
    }
    cf() {
        let a = 0;
        if (this.sortDescriptions.k.count == 0 && (this.groupDescriptions == null || this.groupDescriptions.k.count == 0)) {
            return null;
        }
        a = this.sortDescriptions.k.count;
        if (this.groupDescriptions != null) {
            a += this.groupDescriptions.k.count;
        }
        let b = new Array(a);
        let c = new Array(a);
        let d = 0;
        if (this.groupDescriptions != null) {
            for (let e = 0; e < this.groupDescriptions.k.count; e++) {
                b[e] = this.groupDescriptions.k.item(e).propertyName;
                c[e] = this.groupDescriptions.k.item(e).direction;
                d++;
            }
        }
        for (let f = 0; f < this.sortDescriptions.k.count; f++) {
            b[f + d] = this.sortDescriptions.k.item(f).propertyName;
            c[f + d] = this.sortDescriptions.k.item(f).direction;
        }
        return new DataSourcePropertiesComparer(b, c, this.d, this);
    }
    ce() {
        if (this.groupDescriptions == null || this.groupDescriptions.k.count < 1) {
            return null;
        }
        let a = 0;
        a = this.groupDescriptions.k.count;
        let b = new Array(a);
        let c = new Array(a);
        if (this.groupDescriptions != null) {
            for (let d = 0; d < this.groupDescriptions.k.count; d++) {
                b[d] = this.groupDescriptions.k.item(d).propertyName;
                c[d] = this.groupDescriptions.k.item(d).direction;
            }
        }
        return new DataSourcePropertiesComparer(b, c, this.d, this);
    }
    cc() {
        if (this.groupDescriptions == null || this.groupDescriptions.k.count < 1) {
            return false;
        }
        if (this.actualDataProvider == null) {
            return false;
        }
        if (this.actualDataProvider.isGroupingSupported) {
            return false;
        }
        return true;
    }
    cd() {
        if (this.sortDescriptions == null || this.sortDescriptions.k.count < 1) {
            return false;
        }
        if (this.actualDataProvider == null) {
            return false;
        }
        if (this.actualDataProvider.isSortingSupported) {
            return false;
        }
        return true;
    }
    cb() {
        return this.filterExpressions != null && this.filterExpressions.j.count > 0;
    }
    onClearItemsOverride() {
        if (this.b5 != null) {
            this.b5.notifyClearItems();
        }
        else {
            super.onClearItemsOverride();
        }
    }
    onSetItemOverride(a, b, c) {
        if (this.b5 != null) {
            this.b5.notifySetItem(a, b, c);
        }
        else {
            super.onSetItemOverride(a, b, c);
        }
    }
    onInsertItemOverride(a, b) {
        if (this.b5 != null) {
            this.b5.notifyInsertItem(a, b);
        }
        else {
            super.onInsertItemOverride(a, b);
        }
    }
    onRemoveItemOverride(a, b) {
        if (this.b5 != null) {
            this.b5.notifyRemoveItem(a, b);
        }
        else {
            super.onRemoveItemOverride(a, b);
        }
    }
    cq() {
        this.actualCount = this.b5.ag.count;
        this.onBroadcastClearItems();
    }
    ct(a, b, c) {
        this.actualCount = this.b5.ag.count;
        this.onBroadcastSetItem(a, b, c);
    }
    cr(a, b) {
        this.actualCount = this.b5.ag.count;
        this.onBroadcastInsertItem(a, b);
    }
    cs(a, b) {
        this.actualCount = this.b5.ag.count;
        this.onBroadcastRemoveItem(a, b);
    }
    pinRow(a) {
        super.pinRow(a);
        this.cj = -1;
        this.ch = -1;
        if (this.b5 != null) {
            this.cg.add(a);
            this.b5.ax(a);
        }
        else {
            this.cg.add(a);
            this.queueAutoRefresh();
        }
    }
    unpinRow(a) {
        super.unpinRow(a);
        let b = this.b4();
        if (this.b5 != null) {
            for (let c = this.cg.count - 1; c >= 0; c--) {
                let d = this.cg._inner[c];
                if (d.length != a.length) {
                    continue;
                }
                if (b.h(d, a) == 0) {
                    this.cg.removeAt(c);
                    this.b5.a3(d);
                }
            }
        }
        else {
            for (let e = this.cg.count - 1; e >= 0; e--) {
                let f = this.cg._inner[e];
                if (f.length != a.length) {
                    continue;
                }
                if (b.h(f, a) == 0) {
                    this.cg.removeAt(e);
                }
            }
            this.queueAutoRefresh();
        }
        this.cj = -1;
        this.ch = -1;
    }
    clearPinnedRows() {
        for (let a = this.cg.count - 1; a >= 0; a--) {
            this.unpinRow(this.cg._inner[a]);
        }
    }
    isRowPinned(a) {
        if (this.b5 == null) {
            return false;
        }
        let b = this.getItemAtIndex(a);
        if (b == null) {
            return false;
        }
        let item_ = b;
        if ((item_ != null && item_.$$isSpecialRow !== undefined)) {
            if (item_.rowType == 3) {
                return true;
            }
        }
        let c = this.b4();
        let d;
        if (this.actualPrimaryKey == null) {
            d = new Array(1);
            d[0] = b;
        }
        else {
            let e = this.actualPrimaryKey;
            let f = e.length;
            d = new Array(f);
            for (let g = 0; g < f; g++) {
                d[g] = this.getItemProperty(b, e[g]);
            }
        }
        for (let h = 0; h < this.cg.count; h++) {
            if (c.h(this.cg._inner[h], d) == 0) {
                return true;
            }
        }
        return false;
    }
    get_isSortingSupported() {
        if (this.m != null && !this.b8) {
            this.b8 = true;
            let a = this.m.isSortingSupportedOverride;
            this.b8 = false;
            return a;
        }
        return true;
    }
    get_isFilteringSupported() {
        if (this.m != null && !this.b8) {
            this.b8 = true;
            let a = this.m.isFilteringSupportedOverride;
            this.b8 = false;
            return a;
        }
        return true;
    }
    get_isGroupingSupported() {
        if (this.m != null && !this.b8) {
            this.b8 = true;
            let a = this.m.isGroupingSupportedOverride;
            this.b8 = false;
            return a;
        }
        return true;
    }
    getStickyRowPriority(a) {
        if (this.getRowType(a) == 1 || this.getRowType(a) == 2) {
            return 3;
        }
        else if (this.getRowType(a) == 3) {
            return 2;
        }
        return 1;
    }
    getStickyRows() {
        if (this.b5 == null || ((this.groupDescriptions == null || this.groupDescriptions.k.count == 0) && !this.ca())) {
            return null;
        }
        let a = null;
        let b = null;
        if (this.b5.af.count == 1) {
            a = this.b5.af._inner[0];
            b = this.b5.af._inner[0];
        }
        else {
            a = this.b5.k(this.firstVisibleIndexRequested);
            b = this.b5.k(this.lastVisibleIndexRequested);
        }
        if (a == null || b == null) {
            return null;
        }
        if (a.f == this.cj && a.d == this.ck && b.f == this.ch && b.d == this.ci) {
            return this.bu;
        }
        this.cj = a.f;
        this.ch = b.f;
        this.ck = a.d;
        this.ci = b.d;
        if (this.b5.af.count == 1) {
            this.ch = b.e;
        }
        let c = 0;
        if (this.shouldEmitSectionHeaders && this.aa) {
            c = 1;
        }
        let d = new List$1(Number_$type, 0);
        for (let e = a.f; e <= b.f; e++) {
            if (this.shouldEmitSectionHeaders && this.aa) {
                d.add(this.b5.af._inner[e].g);
            }
            if (this.shouldEmitShiftedRows) {
                for (let f = 0; f < this.b5.af._inner[e].d; f++) {
                    d.add(this.b5.af._inner[e].g + f + c);
                }
            }
            if (this.shouldEmitSectionFooters && this.aa) {
                d.add(this.b5.af._inner[e].e);
            }
        }
        this.bu = d.toArray();
        return this.bu;
    }
    isExclusivelySticky(a) {
        return this.getRowType(a) == 1 || this.getRowType(a) == 2;
    }
    getRowType(a) {
        if (a < 0) {
            return 0;
        }
        let b = this.getItemAtIndex(a);
        let item_ = b;
        if ((item_ != null && item_.$$isSpecialRow !== undefined)) {
            return b.rowType;
        }
        return 0;
    }
}
LocalDataSource.$t = markType(LocalDataSource, 'LocalDataSource', BaseDataSource.$);
/**
 * @hidden
 */
export class LocalDataSourceViewUpdateNotifier extends Base {
    constructor(a) {
        super();
        this.a = null;
        this.a = a;
    }
    notifyClearItems() {
        this.a.cq();
    }
    notifyInsertItem(a, b) {
        this.a.cr(a, b);
    }
    notifyRemoveItem(a, b) {
        this.a.cs(a, b);
    }
    notifySetItem(a, b, c) {
        this.a.ct(a, b, c);
    }
}
LocalDataSourceViewUpdateNotifier.$t = markType(LocalDataSourceViewUpdateNotifier, 'LocalDataSourceViewUpdateNotifier', Base.$, [ISupportsDataChangeNotifications_$type]);
//# sourceMappingURL=LocalDataSource_combined.js.map