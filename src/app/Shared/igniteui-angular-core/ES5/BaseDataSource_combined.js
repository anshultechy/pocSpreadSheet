/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, PropertyChangedEventArgs, runOn, delegateRemove, delegateCombine, markType } from "./type";
import { IDataSource_$type } from "./IDataSource";
import { IDataSourceDataProviderUpdateNotifier_$type } from "./IDataSourceDataProviderUpdateNotifier";
import { SortDescriptionCollection } from "./SortDescriptionCollection";
import { FilterExpressionCollection } from "./FilterExpressionCollection";
import { DataSourceSchemaChangedEventArgs } from "./DataSourceSchemaChangedEventArgs";
/**
 * @hidden
 */
var BaseDataSource = /** @class */ (function (_super) {
    tslib_1.__extends(BaseDataSource, _super);
    function BaseDataSource() {
        var _this = _super.call(this) || this;
        _this.aa = false;
        _this.ah = null;
        _this.m = null;
        _this.o = null;
        _this.n = null;
        _this.e = null;
        _this.f = null;
        _this.k = null;
        _this.ad = 0;
        _this.ae = 0;
        _this.af = 0;
        _this.l = null;
        _this.propertyChanged = null;
        _this.h = null;
        _this.j = null;
        _this.schemaChanged = null;
        _this.s = false;
        _this.r = false;
        _this.b = null;
        _this.a = null;
        _this.c = null;
        _this.t = false;
        _this.u = false;
        _this.p = false;
        _this.w = true;
        _this.v = false;
        _this.x = true;
        _this.q = false;
        _this.d = null;
        _this.h = new DefaultDataSourceDataProviderUpdateNotifier(_this);
        _this.o = new SortDescriptionCollection();
        _this.n = new SortDescriptionCollection();
        _this.o.n(runOn(_this, _this.bt));
        _this.n.n(runOn(_this, _this.a3));
        _this.e = new FilterExpressionCollection();
        _this.e.m(runOn(_this, _this.a1));
        return _this;
    }
    BaseDataSource.prototype.bt = function (a, b) {
        this.onSortDescriptionsChanged(b);
    };
    BaseDataSource.prototype.a3 = function (a, b) {
        this.onGroupDescriptionsChanged(b);
    };
    BaseDataSource.prototype.a1 = function (a, b) {
        this.onFilterExpressionsChanged(b);
    };
    BaseDataSource.prototype.onSortDescriptionsChanged = function (a) {
        this.queueAutoRefresh();
    };
    BaseDataSource.prototype.onGroupDescriptionsChanged = function (a) {
        if (this.isGroupingSupported) {
            if (this.groupDescriptions != null && this.groupDescriptions.k.count > 0) {
                this.aa = true;
            }
            else {
                this.aa = false;
            }
            this.queueAutoRefresh();
        }
    };
    BaseDataSource.prototype.onFilterExpressionsChanged = function (a) {
        this.queueAutoRefresh();
    };
    BaseDataSource.prototype.isPlaceholderItem = function (a) {
        return false;
    };
    Object.defineProperty(BaseDataSource.prototype, "actualSchema", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            var b = this.k;
            this.k = a;
            if (b != this.k) {
                this.onPropertyUpdated("ActualSchema", b, this.k);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataSource.prototype, "actualCount", {
        get: function () {
            return this.ad;
        },
        set: function (a) {
            var b = this.ad;
            this.ad = a;
            if (b != this.ad) {
                this.onPropertyUpdated("ActualCount", b, this.ad);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataSource.prototype, "firstVisibleIndexRequested", {
        get: function () {
            return this.ae;
        },
        set: function (a) {
            var b = this.ae;
            this.ae = a;
            if (b != this.ae) {
                this.onPropertyUpdated("FirstVisibleIndexRequested", b, this.ae);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataSource.prototype, "lastVisibleIndexRequested", {
        get: function () {
            return this.af;
        },
        set: function (a) {
            var b = this.af;
            this.af = a;
            if (b != this.af) {
                this.onPropertyUpdated("LastVisibleIndexRequested", b, this.af);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataSource.prototype, "updateNotifier", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            var b = this.l;
            this.l = a;
            if (b != this.l) {
                this.onPropertyUpdated("UpdateNotifier", b, this.l);
            }
        },
        enumerable: true,
        configurable: true
    });
    BaseDataSource.prototype.getItemAtIndex = function (a) {
        return null;
    };
    BaseDataSource.prototype.getItemProperty = function (a, b) {
        if (this.actualBaseDataProvider != null) {
            var item_ = a;
            if ((item_ != null && item_.$$isSpecialRow !== undefined)) {
                return this.getSpecialRowItemValue(a, b);
            }
            return this.actualBaseDataProvider.getItemValue(a, b);
        }
        return null;
    };
    BaseDataSource.prototype.getSpecialRowItemValue = function (a, b) {
        if (a.rowType == 3) {
            return this.getItemProperty(a.targetRow, b);
        }
        return a.getValue(b);
    };
    BaseDataSource.prototype.getItemPropertyAtIndex = function (a, b) {
        return null;
    };
    BaseDataSource.prototype.get_fullSectionInformationWillForceLoad = function () {
        return false;
    };
    Object.defineProperty(BaseDataSource.prototype, "fullSectionInformationWillForceLoad", {
        get: function () {
            return this.get_fullSectionInformationWillForceLoad();
        },
        enumerable: true,
        configurable: true
    });
    BaseDataSource.prototype.onPropertyUpdated = function (a, b, c) {
        if (this.propertyChanged != null) {
            this.propertyChanged(this, new PropertyChangedEventArgs(a));
        }
        this.propertyUpdatedOverride(a, b, c);
    };
    BaseDataSource.prototype.propertyUpdatedOverride = function (a, b, c) {
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
    };
    BaseDataSource.prototype.onActualPrimaryKeyChanged = function (a, b) {
        this.onActualPrimaryKeyChangedOverrride(a, b);
    };
    BaseDataSource.prototype.onActualPrimaryKeyChangedOverrride = function (a, b) {
    };
    BaseDataSource.prototype.get_isVirtual = function () {
        return false;
    };
    Object.defineProperty(BaseDataSource.prototype, "isVirtual", {
        get: function () {
            return this.get_isVirtual();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataSource.prototype, "dataProviderUpdateNotifier", {
        get: function () {
            return this.h;
        },
        enumerable: true,
        configurable: true
    });
    BaseDataSource.prototype.onActualDataProviderChanged = function (a, b) {
        var c = a;
        var d = b;
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
    };
    BaseDataSource.prototype.onRequestedVisibleRangeChanged = function () {
    };
    Object.defineProperty(BaseDataSource.prototype, "executionContext", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            var b = this.j;
            this.j = a;
            if (this.j != b) {
                this.onPropertyUpdated("ExecutionContext", b, this.j);
            }
        },
        enumerable: true,
        configurable: true
    });
    BaseDataSource.prototype.canInitialize = function () {
        if (this.j != null && this.actualBaseDataProvider != null) {
            return true;
        }
        return false;
    };
    Object.defineProperty(BaseDataSource.prototype, "isInitializing", {
        get: function () {
            return this.s;
        },
        enumerable: true,
        configurable: true
    });
    BaseDataSource.prototype.get_isSortingSupported = function () {
        return false;
    };
    Object.defineProperty(BaseDataSource.prototype, "isSortingSupported", {
        get: function () {
            return this.get_isSortingSupported();
        },
        enumerable: true,
        configurable: true
    });
    BaseDataSource.prototype.get_isFilteringSupported = function () {
        return false;
    };
    Object.defineProperty(BaseDataSource.prototype, "isFilteringSupported", {
        get: function () {
            return this.get_isFilteringSupported();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataSource.prototype, "sortDescriptions", {
        get: function () {
            return this.o;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataSource.prototype, "groupDescriptions", {
        get: function () {
            return this.n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataSource.prototype, "filterExpressions", {
        get: function () {
            return this.e;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataSource.prototype, "deferAutoRefresh", {
        get: function () {
            return this.r;
        },
        set: function (a) {
            var b = this.r;
            this.r = a;
            if (this.r != b) {
                this.onPropertyUpdated("DeferAutoRefresh", b, this.r);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataSource.prototype, "primaryKey", {
        get: function () {
            return this.b;
        },
        set: function (a) {
            var b = this.b;
            this.b = a;
            if (this.b != b) {
                this.onPropertyUpdated("PrimaryKey", b, this.b);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataSource.prototype, "actualPrimaryKey", {
        get: function () {
            return this.a;
        },
        set: function (a) {
            var b = this.a;
            this.a = a;
            if (this.a != b) {
                this.onPropertyUpdated("ActualPrimaryKey", b, this.a);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataSource.prototype, "propertiesRequested", {
        get: function () {
            return this.c;
        },
        set: function (a) {
            var b = this.c;
            this.c = a;
            if (this.c != b) {
                this.onPropertyUpdated("PropertiesRequested", b, this.c);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataSource.prototype, "notifyUsingSourceIndexes", {
        get: function () {
            return this.t;
        },
        set: function (a) {
            var b = this.t;
            this.t = a;
            if (this.t != b) {
                this.onPropertyUpdated("NotifyUsingSourceIndexes", b, this.t);
            }
        },
        enumerable: true,
        configurable: true
    });
    BaseDataSource.prototype.get_isItemIndexLookupSupported = function () {
        return false;
    };
    Object.defineProperty(BaseDataSource.prototype, "isItemIndexLookupSupported", {
        get: function () {
            return this.get_isItemIndexLookupSupported();
        },
        enumerable: true,
        configurable: true
    });
    BaseDataSource.prototype.get_isKeyIndexLookupSupported = function () {
        return false;
    };
    Object.defineProperty(BaseDataSource.prototype, "isKeyIndexLookupSupported", {
        get: function () {
            return this.get_isKeyIndexLookupSupported();
        },
        enumerable: true,
        configurable: true
    });
    BaseDataSource.prototype.initializeOverride = function () {
    };
    BaseDataSource.prototype.resolveFullCount = function (a) {
        return a;
    };
    BaseDataSource.prototype.ay = function (a, b) {
        var _this = this;
        var c = this.executionContext;
        c.execute(function () {
            _this.u = true;
            _this.q = true;
            _this.queueAutoRefresh();
            if (_this.deferAutoRefresh) {
                _this.actualSchema = b.schema;
                _this.actualCount = _this.resolveFullCount(b.count);
                _this.a5();
            }
        });
    };
    BaseDataSource.prototype.a5 = function () {
        if (this.schemaChanged != null) {
            this.schemaChanged(this, new DataSourceSchemaChangedEventArgs(this.actualSchema, this.actualCount));
        }
    };
    BaseDataSource.prototype.onSetItem = function (a, b, c) {
        this.onSetItemOverride(a, b, c);
    };
    BaseDataSource.prototype.onBroadcastSetItem = function (a, b, c) {
        if (this.updateNotifier != null) {
            this.updateNotifier.notifySetItem(a, b, c);
        }
    };
    BaseDataSource.prototype.onSetItemOverride = function (a, b, c) {
        if (this.actualBaseDataProvider != null) {
            this.actualCount = this.resolveFullCount(this.actualBaseDataProvider.actualCount);
        }
        this.onBroadcastSetItem(a, b, c);
    };
    BaseDataSource.prototype.onClearItems = function () {
        this.onClearItemsOverride();
    };
    BaseDataSource.prototype.onBroadcastClearItems = function () {
        if (this.updateNotifier != null) {
            this.updateNotifier.notifyClearItems();
        }
    };
    BaseDataSource.prototype.onClearItemsOverride = function () {
        if (this.actualBaseDataProvider != null) {
            this.actualCount = this.resolveFullCount(this.actualBaseDataProvider.actualCount);
        }
        this.onBroadcastClearItems();
    };
    BaseDataSource.prototype.onInsertItem = function (a, b) {
        this.onInsertItemOverride(a, b);
    };
    BaseDataSource.prototype.onBroadcastInsertItem = function (a, b) {
        if (this.updateNotifier != null) {
            this.updateNotifier.notifyInsertItem(a, b);
        }
    };
    BaseDataSource.prototype.onInsertItemOverride = function (a, b) {
        if (this.actualBaseDataProvider != null) {
            this.actualCount = this.resolveFullCount(this.actualBaseDataProvider.actualCount);
        }
        this.onBroadcastInsertItem(a, b);
    };
    BaseDataSource.prototype.onRemoveItem = function (a, b) {
        this.onRemoveItemOverride(a, b);
    };
    BaseDataSource.prototype.onBroadcastRemoveItem = function (a, b) {
        if (this.updateNotifier != null) {
            this.updateNotifier.notifyRemoveItem(a, b);
        }
    };
    BaseDataSource.prototype.onRemoveItemOverride = function (a, b) {
        if (this.actualBaseDataProvider != null) {
            this.actualCount = this.resolveFullCount(this.actualBaseDataProvider.actualCount);
        }
        this.onBroadcastRemoveItem(a, b);
    };
    BaseDataSource.prototype.notifySetItem = function (a, b, c) {
        if (this.actualBaseDataProvider != null) {
            this.actualBaseDataProvider.notifySetItem(a, b, c);
        }
    };
    BaseDataSource.prototype.notifyClearItems = function () {
        if (this.actualBaseDataProvider != null) {
            this.actualBaseDataProvider.notifyClearItems();
        }
    };
    BaseDataSource.prototype.notifyInsertItem = function (a, b) {
        if (this.actualBaseDataProvider != null) {
            this.actualBaseDataProvider.notifyInsertItem(a, b);
        }
        ;
    };
    BaseDataSource.prototype.notifyRemoveItem = function (a, b) {
        if (this.actualBaseDataProvider != null) {
            this.actualBaseDataProvider.notifyRemoveItem(a, b);
        }
        ;
    };
    BaseDataSource.prototype.queueAutoRefresh = function () {
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
    };
    BaseDataSource.prototype.az = function () {
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
    };
    BaseDataSource.prototype.br = function () {
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
    };
    BaseDataSource.prototype.refreshInternalOverride = function () {
    };
    BaseDataSource.prototype.flushAutoRefresh = function () {
        this.az();
    };
    BaseDataSource.prototype.refresh = function () {
        if (this.actualBaseDataProvider != null) {
            this.actualBaseDataProvider.refresh();
        }
        this.br();
    };
    BaseDataSource.prototype.indexOfItem = function (a) {
        return -1;
    };
    BaseDataSource.prototype.indexOfKey = function (a) {
        return -1;
    };
    BaseDataSource.prototype.getPrimaryKeyValue = function (a, b) {
        var c = this.actualPrimaryKey;
        if (c == null || c.length < 1 || this.actualBaseDataProvider == null) {
            return;
        }
        for (var d = 0; d < c.length; d++) {
            b[d] = this.actualBaseDataProvider.getItemValue(a, c[d]);
        }
    };
    BaseDataSource.prototype.getRowType = function (a) {
        return 0;
    };
    BaseDataSource.prototype.getMainValuePath = function (a) {
        return "SectionInformation";
    };
    BaseDataSource.prototype.getStickyRows = function () {
        return null;
    };
    BaseDataSource.prototype.isRowSpanning = function (a) {
        return a == 1 || a == 2;
    };
    BaseDataSource.prototype.getStickyRowPriority = function (a) {
        return -1;
    };
    BaseDataSource.prototype.isExclusivelySticky = function (a) {
        return false;
    };
    BaseDataSource.prototype.pinRow = function (a) {
    };
    BaseDataSource.prototype.unpinRow = function (a) {
    };
    BaseDataSource.prototype.clearPinnedRows = function () {
    };
    BaseDataSource.prototype.isRowPinned = function (a) {
        return false;
    };
    BaseDataSource.prototype.get_isGroupingSupported = function () {
        return false;
    };
    Object.defineProperty(BaseDataSource.prototype, "isGroupingSupported", {
        get: function () {
            return this.get_isGroupingSupported();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataSource.prototype, "shouldEmitSectionHeaders", {
        get: function () {
            return this.w;
        },
        set: function (a) {
            var b = this.w;
            this.w = a;
            if (this.w != b) {
                this.onPropertyUpdated("ShouldEmitSectionHeaders", b, this.w);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataSource.prototype, "shouldEmitSectionFooters", {
        get: function () {
            return this.v;
        },
        set: function (a) {
            var b = this.v;
            this.v = a;
            if (this.v != b) {
                this.onPropertyUpdated("ShouldEmitSectionFooters", b, this.v);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataSource.prototype, "shouldEmitShiftedRows", {
        get: function () {
            return this.x;
        },
        set: function (a) {
            var b = this.x;
            this.x = a;
            if (this.x != b) {
                this.onPropertyUpdated("ShouldEmitShiftedRows", b, this.x);
            }
        },
        enumerable: true,
        configurable: true
    });
    BaseDataSource.prototype.ensureComparables = function (a) {
        if (this.q && this.actualCount > 0) {
            this.d = new Array(a.propertyNames.length);
            this.q = false;
        }
    };
    BaseDataSource.prototype.resolveSchemaPropertyType = function (a) {
        return this.actualBaseDataProvider.resolveSchemaPropertyType(a);
    };
    BaseDataSource.$t = markType(BaseDataSource, 'BaseDataSource', Base.$, [IDataSource_$type]);
    return BaseDataSource;
}(Base));
export { BaseDataSource };
/**
 * @hidden
 */
var DefaultDataSourceDataProviderUpdateNotifier = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultDataSourceDataProviderUpdateNotifier, _super);
    function DefaultDataSourceDataProviderUpdateNotifier(a) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.a = a;
        return _this;
    }
    DefaultDataSourceDataProviderUpdateNotifier.prototype.notifySetItem = function (a, b, c) {
        this.a.onSetItem(a, b, c);
    };
    DefaultDataSourceDataProviderUpdateNotifier.prototype.notifyClearItems = function () {
        this.a.onClearItems();
    };
    DefaultDataSourceDataProviderUpdateNotifier.prototype.notifyInsertItem = function (a, b) {
        this.a.onInsertItem(a, b);
    };
    DefaultDataSourceDataProviderUpdateNotifier.prototype.notifyRemoveItem = function (a, b) {
        this.a.onRemoveItem(a, b);
    };
    DefaultDataSourceDataProviderUpdateNotifier.$t = markType(DefaultDataSourceDataProviderUpdateNotifier, 'DefaultDataSourceDataProviderUpdateNotifier', Base.$, [IDataSourceDataProviderUpdateNotifier_$type]);
    return DefaultDataSourceDataProviderUpdateNotifier;
}(Base));
export { DefaultDataSourceDataProviderUpdateNotifier };
//# sourceMappingURL=BaseDataSource_combined.js.map