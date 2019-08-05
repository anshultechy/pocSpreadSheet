/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, PropertyChangedEventArgs, runOn, delegateRemove, delegateCombine, markType } from "./type";
import { IDataSource_$type } from "./IDataSource";
import { IDataSourceDataProviderUpdateNotifier_$type } from "./IDataSourceDataProviderUpdateNotifier";
import { SortDescriptionCollection } from "./SortDescriptionCollection";
import { FilterExpressionCollection } from "./FilterExpressionCollection";
import { DataSourceSchemaChangedEventArgs } from "./DataSourceSchemaChangedEventArgs";
/**
 * @hidden
 */
export class BaseDataSource extends Base {
    constructor() {
        super();
        this.aa = false;
        this.ah = null;
        this.m = null;
        this.o = null;
        this.n = null;
        this.e = null;
        this.f = null;
        this.k = null;
        this.ad = 0;
        this.ae = 0;
        this.af = 0;
        this.l = null;
        this.propertyChanged = null;
        this.h = null;
        this.j = null;
        this.schemaChanged = null;
        this.s = false;
        this.r = false;
        this.b = null;
        this.a = null;
        this.c = null;
        this.t = false;
        this.u = false;
        this.p = false;
        this.w = true;
        this.v = false;
        this.x = true;
        this.q = false;
        this.d = null;
        this.h = new DefaultDataSourceDataProviderUpdateNotifier(this);
        this.o = new SortDescriptionCollection();
        this.n = new SortDescriptionCollection();
        this.o.n(runOn(this, this.bt));
        this.n.n(runOn(this, this.a3));
        this.e = new FilterExpressionCollection();
        this.e.m(runOn(this, this.a1));
    }
    bt(a, b) {
        this.onSortDescriptionsChanged(b);
    }
    a3(a, b) {
        this.onGroupDescriptionsChanged(b);
    }
    a1(a, b) {
        this.onFilterExpressionsChanged(b);
    }
    onSortDescriptionsChanged(a) {
        this.queueAutoRefresh();
    }
    onGroupDescriptionsChanged(a) {
        if (this.isGroupingSupported) {
            if (this.groupDescriptions != null && this.groupDescriptions.k.count > 0) {
                this.aa = true;
            }
            else {
                this.aa = false;
            }
            this.queueAutoRefresh();
        }
    }
    onFilterExpressionsChanged(a) {
        this.queueAutoRefresh();
    }
    isPlaceholderItem(a) {
        return false;
    }
    get actualSchema() {
        return this.k;
    }
    set actualSchema(a) {
        let b = this.k;
        this.k = a;
        if (b != this.k) {
            this.onPropertyUpdated("ActualSchema", b, this.k);
        }
    }
    get actualCount() {
        return this.ad;
    }
    set actualCount(a) {
        let b = this.ad;
        this.ad = a;
        if (b != this.ad) {
            this.onPropertyUpdated("ActualCount", b, this.ad);
        }
    }
    get firstVisibleIndexRequested() {
        return this.ae;
    }
    set firstVisibleIndexRequested(a) {
        let b = this.ae;
        this.ae = a;
        if (b != this.ae) {
            this.onPropertyUpdated("FirstVisibleIndexRequested", b, this.ae);
        }
    }
    get lastVisibleIndexRequested() {
        return this.af;
    }
    set lastVisibleIndexRequested(a) {
        let b = this.af;
        this.af = a;
        if (b != this.af) {
            this.onPropertyUpdated("LastVisibleIndexRequested", b, this.af);
        }
    }
    get updateNotifier() {
        return this.l;
    }
    set updateNotifier(a) {
        let b = this.l;
        this.l = a;
        if (b != this.l) {
            this.onPropertyUpdated("UpdateNotifier", b, this.l);
        }
    }
    getItemAtIndex(a) {
        return null;
    }
    getItemProperty(a, b) {
        if (this.actualBaseDataProvider != null) {
            let item_ = a;
            if ((item_ != null && item_.$$isSpecialRow !== undefined)) {
                return this.getSpecialRowItemValue(a, b);
            }
            return this.actualBaseDataProvider.getItemValue(a, b);
        }
        return null;
    }
    getSpecialRowItemValue(a, b) {
        if (a.rowType == 3) {
            return this.getItemProperty(a.targetRow, b);
        }
        return a.getValue(b);
    }
    getItemPropertyAtIndex(a, b) {
        return null;
    }
    get_fullSectionInformationWillForceLoad() {
        return false;
    }
    get fullSectionInformationWillForceLoad() {
        return this.get_fullSectionInformationWillForceLoad();
    }
    onPropertyUpdated(a, b, c) {
        if (this.propertyChanged != null) {
            this.propertyChanged(this, new PropertyChangedEventArgs(a));
        }
        this.propertyUpdatedOverride(a, b, c);
    }
    propertyUpdatedOverride(a, b, c) {
        switch (a) {
            case "PrimaryKey":
                this.actualPrimaryKey = this.primaryKey;
                break;
            case "ActualPrimaryKey":
                this.onActualPrimaryKeyChanged(b, c);
                break;
            case "ExecutionContext":
                if (this.actualBaseDataProvider != null) {
                    this.actualBaseDataProvider.executionContext = this.executionContext;
                }
                this.queueAutoRefresh();
                break;
            case "LastVisibleIndexRequested":
            case "FirstVisibleIndexRequested":
                this.onRequestedVisibleRangeChanged();
                break;
            case "ActualDataProvider":
                this.onActualDataProviderChanged(b, c);
                break;
            case "DeferAutoRefresh":
                if (this.actualBaseDataProvider != null) {
                    this.actualBaseDataProvider.deferAutoRefresh = this.deferAutoRefresh;
                }
                if (!c) {
                    this.queueAutoRefresh();
                }
                break;
            case "PropertiesRequested":
                if (this.actualBaseDataProvider != null) {
                    this.actualBaseDataProvider.propertiesRequested = this.propertiesRequested;
                }
                break;
            case "ShouldEmitSectionFooters":
            case "ShouldEmitSectionHeaders":
            case "ShouldEmitShiftedRows":
                this.queueAutoRefresh();
                break;
        }
    }
    onActualPrimaryKeyChanged(a, b) {
        this.onActualPrimaryKeyChangedOverrride(a, b);
    }
    onActualPrimaryKeyChangedOverrride(a, b) {
    }
    get_isVirtual() {
        return false;
    }
    get isVirtual() {
        return this.get_isVirtual();
    }
    get dataProviderUpdateNotifier() {
        return this.h;
    }
    onActualDataProviderChanged(a, b) {
        let c = a;
        let d = b;
        if (c != null) {
            c.updateNotifier = null;
        }
        if (d != null) {
            d.updateNotifier = this.h;
        }
        if (c != null) {
            c.schemaChanged = delegateRemove(c.schemaChanged, runOn(this, this.ay));
        }
        if (d != null) {
            d.schemaChanged = delegateCombine(d.schemaChanged, runOn(this, this.ay));
            d.executionContext = this.executionContext;
            this.notifyUsingSourceIndexes = this.actualBaseDataProvider.notifyUsingSourceIndexes;
        }
        else {
            this.notifyUsingSourceIndexes = false;
        }
        if (c != null) {
            this.sortDescriptions.syncTarget = null;
            this.groupDescriptions.syncTarget = null;
            this.filterExpressions.syncTarget = null;
        }
        if (d != null) {
            this.sortDescriptions.syncTarget = d.sortDescriptions;
            this.groupDescriptions.syncTarget = d.groupDescriptions;
            this.filterExpressions.syncTarget = d.filterExpressions;
            if (this.propertiesRequested != null) {
                d.propertiesRequested = this.propertiesRequested;
            }
        }
        this.queueAutoRefresh();
    }
    onRequestedVisibleRangeChanged() {
    }
    get executionContext() {
        return this.j;
    }
    set executionContext(a) {
        let b = this.j;
        this.j = a;
        if (this.j != b) {
            this.onPropertyUpdated("ExecutionContext", b, this.j);
        }
    }
    canInitialize() {
        if (this.j != null && this.actualBaseDataProvider != null) {
            return true;
        }
        return false;
    }
    get isInitializing() {
        return this.s;
    }
    get_isSortingSupported() {
        return false;
    }
    get isSortingSupported() {
        return this.get_isSortingSupported();
    }
    get_isFilteringSupported() {
        return false;
    }
    get isFilteringSupported() {
        return this.get_isFilteringSupported();
    }
    get sortDescriptions() {
        return this.o;
    }
    get groupDescriptions() {
        return this.n;
    }
    get filterExpressions() {
        return this.e;
    }
    get deferAutoRefresh() {
        return this.r;
    }
    set deferAutoRefresh(a) {
        let b = this.r;
        this.r = a;
        if (this.r != b) {
            this.onPropertyUpdated("DeferAutoRefresh", b, this.r);
        }
    }
    get primaryKey() {
        return this.b;
    }
    set primaryKey(a) {
        let b = this.b;
        this.b = a;
        if (this.b != b) {
            this.onPropertyUpdated("PrimaryKey", b, this.b);
        }
    }
    get actualPrimaryKey() {
        return this.a;
    }
    set actualPrimaryKey(a) {
        let b = this.a;
        this.a = a;
        if (this.a != b) {
            this.onPropertyUpdated("ActualPrimaryKey", b, this.a);
        }
    }
    get propertiesRequested() {
        return this.c;
    }
    set propertiesRequested(a) {
        let b = this.c;
        this.c = a;
        if (this.c != b) {
            this.onPropertyUpdated("PropertiesRequested", b, this.c);
        }
    }
    get notifyUsingSourceIndexes() {
        return this.t;
    }
    set notifyUsingSourceIndexes(a) {
        let b = this.t;
        this.t = a;
        if (this.t != b) {
            this.onPropertyUpdated("NotifyUsingSourceIndexes", b, this.t);
        }
    }
    get_isItemIndexLookupSupported() {
        return false;
    }
    get isItemIndexLookupSupported() {
        return this.get_isItemIndexLookupSupported();
    }
    get_isKeyIndexLookupSupported() {
        return false;
    }
    get isKeyIndexLookupSupported() {
        return this.get_isKeyIndexLookupSupported();
    }
    initializeOverride() {
    }
    resolveFullCount(a) {
        return a;
    }
    ay(a, b) {
        let c = this.executionContext;
        c.execute(() => {
            this.u = true;
            this.q = true;
            this.queueAutoRefresh();
            if (this.deferAutoRefresh) {
                this.actualSchema = b.schema;
                this.actualCount = this.resolveFullCount(b.count);
                this.a5();
            }
        });
    }
    a5() {
        if (this.schemaChanged != null) {
            this.schemaChanged(this, new DataSourceSchemaChangedEventArgs(this.actualSchema, this.actualCount));
        }
    }
    onSetItem(a, b, c) {
        this.onSetItemOverride(a, b, c);
    }
    onBroadcastSetItem(a, b, c) {
        if (this.updateNotifier != null) {
            this.updateNotifier.notifySetItem(a, b, c);
        }
    }
    onSetItemOverride(a, b, c) {
        if (this.actualBaseDataProvider != null) {
            this.actualCount = this.resolveFullCount(this.actualBaseDataProvider.actualCount);
        }
        this.onBroadcastSetItem(a, b, c);
    }
    onClearItems() {
        this.onClearItemsOverride();
    }
    onBroadcastClearItems() {
        if (this.updateNotifier != null) {
            this.updateNotifier.notifyClearItems();
        }
    }
    onClearItemsOverride() {
        if (this.actualBaseDataProvider != null) {
            this.actualCount = this.resolveFullCount(this.actualBaseDataProvider.actualCount);
        }
        this.onBroadcastClearItems();
    }
    onInsertItem(a, b) {
        this.onInsertItemOverride(a, b);
    }
    onBroadcastInsertItem(a, b) {
        if (this.updateNotifier != null) {
            this.updateNotifier.notifyInsertItem(a, b);
        }
    }
    onInsertItemOverride(a, b) {
        if (this.actualBaseDataProvider != null) {
            this.actualCount = this.resolveFullCount(this.actualBaseDataProvider.actualCount);
        }
        this.onBroadcastInsertItem(a, b);
    }
    onRemoveItem(a, b) {
        this.onRemoveItemOverride(a, b);
    }
    onBroadcastRemoveItem(a, b) {
        if (this.updateNotifier != null) {
            this.updateNotifier.notifyRemoveItem(a, b);
        }
    }
    onRemoveItemOverride(a, b) {
        if (this.actualBaseDataProvider != null) {
            this.actualCount = this.resolveFullCount(this.actualBaseDataProvider.actualCount);
        }
        this.onBroadcastRemoveItem(a, b);
    }
    notifySetItem(a, b, c) {
        if (this.actualBaseDataProvider != null) {
            this.actualBaseDataProvider.notifySetItem(a, b, c);
        }
    }
    notifyClearItems() {
        if (this.actualBaseDataProvider != null) {
            this.actualBaseDataProvider.notifyClearItems();
        }
    }
    notifyInsertItem(a, b) {
        if (this.actualBaseDataProvider != null) {
            this.actualBaseDataProvider.notifyInsertItem(a, b);
        }
        ;
    }
    notifyRemoveItem(a, b) {
        if (this.actualBaseDataProvider != null) {
            this.actualBaseDataProvider.notifyRemoveItem(a, b);
        }
        ;
    }
    queueAutoRefresh() {
        if (this.deferAutoRefresh) {
            return;
        }
        if (this.actualBaseDataProvider != null) {
            this.actualBaseDataProvider.queueAutoRefresh();
        }
        if (this.p) {
            return;
        }
        if (this.executionContext != null) {
            this.p = true;
            this.executionContext.enqueueAction(runOn(this, this.az));
        }
    }
    az() {
        if (this.deferAutoRefresh) {
            this.p = false;
            return;
        }
        if (this.actualBaseDataProvider != null) {
            this.actualBaseDataProvider.flushAutoRefresh();
        }
        if (!this.p) {
            return;
        }
        this.p = false;
        this.br();
    }
    br() {
        if (this.actualBaseDataProvider != null) {
            this.actualSchema = this.actualBaseDataProvider.actualSchema;
            this.actualCount = this.resolveFullCount(this.actualBaseDataProvider.actualCount);
        }
        if (this.actualSchema != null && this.primaryKey == null) {
            this.actualPrimaryKey = this.actualSchema.primaryKey;
        }
        this.refreshInternalOverride();
        if (this.u) {
            this.u = false;
            this.a5();
        }
    }
    refreshInternalOverride() {
    }
    flushAutoRefresh() {
        this.az();
    }
    refresh() {
        if (this.actualBaseDataProvider != null) {
            this.actualBaseDataProvider.refresh();
        }
        this.br();
    }
    indexOfItem(a) {
        return -1;
    }
    indexOfKey(a) {
        return -1;
    }
    getPrimaryKeyValue(a, b) {
        let c = this.actualPrimaryKey;
        if (c == null || c.length < 1 || this.actualBaseDataProvider == null) {
            return;
        }
        for (let d = 0; d < c.length; d++) {
            b[d] = this.actualBaseDataProvider.getItemValue(a, c[d]);
        }
    }
    getRowType(a) {
        return 0;
    }
    getMainValuePath(a) {
        return "SectionInformation";
    }
    getStickyRows() {
        return null;
    }
    isRowSpanning(a) {
        return a == 1 || a == 2;
    }
    getStickyRowPriority(a) {
        return -1;
    }
    isExclusivelySticky(a) {
        return false;
    }
    pinRow(a) {
    }
    unpinRow(a) {
    }
    clearPinnedRows() {
    }
    isRowPinned(a) {
        return false;
    }
    get_isGroupingSupported() {
        return false;
    }
    get isGroupingSupported() {
        return this.get_isGroupingSupported();
    }
    get shouldEmitSectionHeaders() {
        return this.w;
    }
    set shouldEmitSectionHeaders(a) {
        let b = this.w;
        this.w = a;
        if (this.w != b) {
            this.onPropertyUpdated("ShouldEmitSectionHeaders", b, this.w);
        }
    }
    get shouldEmitSectionFooters() {
        return this.v;
    }
    set shouldEmitSectionFooters(a) {
        let b = this.v;
        this.v = a;
        if (this.v != b) {
            this.onPropertyUpdated("ShouldEmitSectionFooters", b, this.v);
        }
    }
    get shouldEmitShiftedRows() {
        return this.x;
    }
    set shouldEmitShiftedRows(a) {
        let b = this.x;
        this.x = a;
        if (this.x != b) {
            this.onPropertyUpdated("ShouldEmitShiftedRows", b, this.x);
        }
    }
    ensureComparables(a) {
        if (this.q && this.actualCount > 0) {
            this.d = new Array(a.propertyNames.length);
            this.q = false;
        }
    }
    resolveSchemaPropertyType(a) {
        return this.actualBaseDataProvider.resolveSchemaPropertyType(a);
    }
}
BaseDataSource.$t = markType(BaseDataSource, 'BaseDataSource', Base.$, [IDataSource_$type]);
/**
 * @hidden
 */
export class DefaultDataSourceDataProviderUpdateNotifier extends Base {
    constructor(a) {
        super();
        this.a = null;
        this.a = a;
    }
    notifySetItem(a, b, c) {
        this.a.onSetItem(a, b, c);
    }
    notifyClearItems() {
        this.a.onClearItems();
    }
    notifyInsertItem(a, b) {
        this.a.onInsertItem(a, b);
    }
    notifyRemoveItem(a, b) {
        this.a.onRemoveItem(a, b);
    }
}
DefaultDataSourceDataProviderUpdateNotifier.$t = markType(DefaultDataSourceDataProviderUpdateNotifier, 'DefaultDataSourceDataProviderUpdateNotifier', Base.$, [IDataSourceDataProviderUpdateNotifier_$type]);
//# sourceMappingURL=BaseDataSource_combined.js.map