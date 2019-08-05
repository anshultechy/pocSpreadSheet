/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
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
var LocalDataSource = /** @class */ (function (_super) {
    tslib_1.__extends(LocalDataSource, _super);
    function LocalDataSource() {
        var _this = _super.call(this) || this;
        _this.bw = null;
        _this.bv = null;
        _this.cl = null;
        _this.b1 = null;
        _this.b5 = null;
        _this.b7 = null;
        _this.b3 = null;
        _this.cg = new List$1(Array_$type, 0);
        _this.b8 = false;
        _this.bu = null;
        _this.cj = -1;
        _this.ch = -1;
        _this.ck = -1;
        _this.ci = -1;
        _this.executionContext = new DataSourceExecutionContext();
        return _this;
    }
    LocalDataSource.prototype.get_actualBaseDataProvider = function () {
        return this.actualDataProvider;
    };
    Object.defineProperty(LocalDataSource.prototype, "actualBaseDataProvider", {
        get: function () {
            return this.get_actualBaseDataProvider();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalDataSource.prototype, "dataProvider", {
        get: function () {
            return this.bw;
        },
        set: function (a) {
            var b = this.bw;
            this.bw = a;
            if (b != this.bw) {
                this.onPropertyUpdated("DataProvider", b, this.bw);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalDataSource.prototype, "actualDataProvider", {
        get: function () {
            if (this.bv == null) {
                this.actualDataProvider = this.resolveDataProvider();
            }
            return this.bv;
        },
        set: function (a) {
            var b = this.bv;
            this.bv = a;
            if (b != this.bv) {
                this.onPropertyUpdated("ActualDataProvider", b, this.bv);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalDataSource.prototype, "itemsSource", {
        get: function () {
            return this.cl;
        },
        set: function (a) {
            var b = this.cl;
            this.cl = a;
            if (b != this.cl) {
                this.onPropertyUpdated("ItemsSource", b, this.cl);
            }
        },
        enumerable: true,
        configurable: true
    });
    LocalDataSource.prototype.canInitialize = function () {
        var a = _super.prototype.canInitialize.call(this);
        if (!a) {
            return false;
        }
        return this.itemsSource != null;
    };
    Object.defineProperty(LocalDataSource.prototype, "b2", {
        get: function () {
            return this.b1;
        },
        set: function (a) {
            this.b1 = a;
            this.actualDataProvider = this.resolveDataProvider();
        },
        enumerable: true,
        configurable: true
    });
    LocalDataSource.prototype.resolveDataProvider = function () {
        var provider_ = new DataSourceLocalDataProvider();
        provider_.executionContext = new DataSourceExecutionContext();
        return provider_;
    };
    LocalDataSource.prototype.propertyUpdatedOverride = function (a, b, c) {
        _super.prototype.propertyUpdatedOverride.call(this, a, b, c);
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
    };
    LocalDataSource.prototype.getItemAtIndex = function (a) {
        if (this.b5 != null && this.b5.ag != null) {
            return this.b5.ag.item(a);
        }
        else {
            return this.actualDataProvider.getItemAtIndex(a);
        }
    };
    LocalDataSource.prototype.getItemPropertyAtIndex = function (a, b) {
        var c;
        if (this.b5 != null) {
            c = this.b5.ag.item(a);
        }
        else {
            c = this.actualDataProvider.getItemAtIndex(a);
        }
        var item_ = c;
        if ((item_ != null && item_.$$isSpecialRow !== undefined)) {
            return this.getSpecialRowItemValue(c, b);
        }
        return this.actualDataProvider.getItemValue(c, b);
    };
    LocalDataSource.prototype.b0 = function () {
        return this.actualDataProvider;
    };
    LocalDataSource.prototype.ca = function () {
        return this.cg != null && this.cg.count > 0;
    };
    LocalDataSource.prototype.refreshInternalOverride = function () {
        _super.prototype.refreshInternalOverride.call(this);
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
                var a = this.b0();
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
    };
    LocalDataSource.prototype.get_isItemIndexLookupSupported = function () {
        return true;
    };
    LocalDataSource.prototype.get_isKeyIndexLookupSupported = function () {
        return true;
    };
    LocalDataSource.prototype.indexOfItem = function (a) {
        if (this.b5 != null) {
            return this.b5.ag.indexOf(a);
        }
        if (this.actualDataProvider != null && this.actualDataProvider.isItemIndexLookupSupported) {
            return this.actualDataProvider.indexOfItem(a);
        }
        if (this.actualDataProvider != null) {
            var b = this.actualDataProvider.actualCount;
            var c = void 0;
            for (var d = 0; d < b; d++) {
                c = this.actualDataProvider.getItemAtIndex(d);
                if (this.b9(c, a)) {
                    return d;
                }
            }
        }
        return -1;
    };
    LocalDataSource.prototype.b9 = function (a, b) {
        if (a == null && b == null) {
            return true;
        }
        if (a == null || b == null) {
            return false;
        }
        return Base.equalsStatic(a, b);
    };
    LocalDataSource.prototype.indexOfKey = function (a) {
        var b = this.actualPrimaryKey;
        if (b == null || b.length < 1 || this.actualBaseDataProvider == null) {
            return this.indexOfItem(a[0]);
        }
        var c = this.b4();
        var d;
        if (this.b5 != null) {
            var e = this.b5.ag.count;
            for (var f = 0; f < e; f++) {
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
            var g = this.actualDataProvider.actualCount;
            for (var h = 0; h < g; h++) {
                d = this.actualDataProvider.getItemAtIndex(h);
                if (c.i(d, a) == 0) {
                    return h;
                }
            }
        }
        return -1;
    };
    LocalDataSource.prototype.onActualPrimaryKeyChangedOverrride = function (a, b) {
        _super.prototype.onActualPrimaryKeyChangedOverrride.call(this, a, b);
        this.b3 = null;
    };
    LocalDataSource.prototype.b4 = function () {
        if (this.b3 != null) {
            return this.b3;
        }
        if (this.actualPrimaryKey == null) {
            this.b3 = new DataSourcePropertiesComparer(null, null, null, this);
            return this.b3;
        }
        var a = new Array(this.actualPrimaryKey.length);
        for (var b = 0; b < a.length; b++) {
            a[b] = 0;
        }
        this.b3 = new DataSourcePropertiesComparer(this.actualPrimaryKey, a, this.d, this);
        return this.b3;
    };
    LocalDataSource.prototype.b6 = function () {
        if (this.filterExpressions.j.count == 0) {
            return null;
        }
        var a = this.actualDataProvider;
        var b = this.actualDataProvider.actualSchema;
        var c = this.filterExpressions.j;
        var d = function (e) {
            for (var f = 0; f < c.count; f++) {
                if (!c.item(f).match(e, a, b)) {
                    return false;
                }
            }
            return true;
        };
        return d;
    };
    LocalDataSource.prototype.cf = function () {
        var a = 0;
        if (this.sortDescriptions.k.count == 0 && (this.groupDescriptions == null || this.groupDescriptions.k.count == 0)) {
            return null;
        }
        a = this.sortDescriptions.k.count;
        if (this.groupDescriptions != null) {
            a += this.groupDescriptions.k.count;
        }
        var b = new Array(a);
        var c = new Array(a);
        var d = 0;
        if (this.groupDescriptions != null) {
            for (var e = 0; e < this.groupDescriptions.k.count; e++) {
                b[e] = this.groupDescriptions.k.item(e).propertyName;
                c[e] = this.groupDescriptions.k.item(e).direction;
                d++;
            }
        }
        for (var f = 0; f < this.sortDescriptions.k.count; f++) {
            b[f + d] = this.sortDescriptions.k.item(f).propertyName;
            c[f + d] = this.sortDescriptions.k.item(f).direction;
        }
        return new DataSourcePropertiesComparer(b, c, this.d, this);
    };
    LocalDataSource.prototype.ce = function () {
        if (this.groupDescriptions == null || this.groupDescriptions.k.count < 1) {
            return null;
        }
        var a = 0;
        a = this.groupDescriptions.k.count;
        var b = new Array(a);
        var c = new Array(a);
        if (this.groupDescriptions != null) {
            for (var d = 0; d < this.groupDescriptions.k.count; d++) {
                b[d] = this.groupDescriptions.k.item(d).propertyName;
                c[d] = this.groupDescriptions.k.item(d).direction;
            }
        }
        return new DataSourcePropertiesComparer(b, c, this.d, this);
    };
    LocalDataSource.prototype.cc = function () {
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
    };
    LocalDataSource.prototype.cd = function () {
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
    };
    LocalDataSource.prototype.cb = function () {
        return this.filterExpressions != null && this.filterExpressions.j.count > 0;
    };
    LocalDataSource.prototype.onClearItemsOverride = function () {
        if (this.b5 != null) {
            this.b5.notifyClearItems();
        }
        else {
            _super.prototype.onClearItemsOverride.call(this);
        }
    };
    LocalDataSource.prototype.onSetItemOverride = function (a, b, c) {
        if (this.b5 != null) {
            this.b5.notifySetItem(a, b, c);
        }
        else {
            _super.prototype.onSetItemOverride.call(this, a, b, c);
        }
    };
    LocalDataSource.prototype.onInsertItemOverride = function (a, b) {
        if (this.b5 != null) {
            this.b5.notifyInsertItem(a, b);
        }
        else {
            _super.prototype.onInsertItemOverride.call(this, a, b);
        }
    };
    LocalDataSource.prototype.onRemoveItemOverride = function (a, b) {
        if (this.b5 != null) {
            this.b5.notifyRemoveItem(a, b);
        }
        else {
            _super.prototype.onRemoveItemOverride.call(this, a, b);
        }
    };
    LocalDataSource.prototype.cq = function () {
        this.actualCount = this.b5.ag.count;
        this.onBroadcastClearItems();
    };
    LocalDataSource.prototype.ct = function (a, b, c) {
        this.actualCount = this.b5.ag.count;
        this.onBroadcastSetItem(a, b, c);
    };
    LocalDataSource.prototype.cr = function (a, b) {
        this.actualCount = this.b5.ag.count;
        this.onBroadcastInsertItem(a, b);
    };
    LocalDataSource.prototype.cs = function (a, b) {
        this.actualCount = this.b5.ag.count;
        this.onBroadcastRemoveItem(a, b);
    };
    LocalDataSource.prototype.pinRow = function (a) {
        _super.prototype.pinRow.call(this, a);
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
    };
    LocalDataSource.prototype.unpinRow = function (a) {
        _super.prototype.unpinRow.call(this, a);
        var b = this.b4();
        if (this.b5 != null) {
            for (var c = this.cg.count - 1; c >= 0; c--) {
                var d = this.cg._inner[c];
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
            for (var e = this.cg.count - 1; e >= 0; e--) {
                var f = this.cg._inner[e];
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
    };
    LocalDataSource.prototype.clearPinnedRows = function () {
        for (var a = this.cg.count - 1; a >= 0; a--) {
            this.unpinRow(this.cg._inner[a]);
        }
    };
    LocalDataSource.prototype.isRowPinned = function (a) {
        if (this.b5 == null) {
            return false;
        }
        var b = this.getItemAtIndex(a);
        if (b == null) {
            return false;
        }
        var item_ = b;
        if ((item_ != null && item_.$$isSpecialRow !== undefined)) {
            if (item_.rowType == 3) {
                return true;
            }
        }
        var c = this.b4();
        var d;
        if (this.actualPrimaryKey == null) {
            d = new Array(1);
            d[0] = b;
        }
        else {
            var e = this.actualPrimaryKey;
            var f = e.length;
            d = new Array(f);
            for (var g = 0; g < f; g++) {
                d[g] = this.getItemProperty(b, e[g]);
            }
        }
        for (var h = 0; h < this.cg.count; h++) {
            if (c.h(this.cg._inner[h], d) == 0) {
                return true;
            }
        }
        return false;
    };
    LocalDataSource.prototype.get_isSortingSupported = function () {
        if (this.m != null && !this.b8) {
            this.b8 = true;
            var a = this.m.isSortingSupportedOverride;
            this.b8 = false;
            return a;
        }
        return true;
    };
    LocalDataSource.prototype.get_isFilteringSupported = function () {
        if (this.m != null && !this.b8) {
            this.b8 = true;
            var a = this.m.isFilteringSupportedOverride;
            this.b8 = false;
            return a;
        }
        return true;
    };
    LocalDataSource.prototype.get_isGroupingSupported = function () {
        if (this.m != null && !this.b8) {
            this.b8 = true;
            var a = this.m.isGroupingSupportedOverride;
            this.b8 = false;
            return a;
        }
        return true;
    };
    LocalDataSource.prototype.getStickyRowPriority = function (a) {
        if (this.getRowType(a) == 1 || this.getRowType(a) == 2) {
            return 3;
        }
        else if (this.getRowType(a) == 3) {
            return 2;
        }
        return 1;
    };
    LocalDataSource.prototype.getStickyRows = function () {
        if (this.b5 == null || ((this.groupDescriptions == null || this.groupDescriptions.k.count == 0) && !this.ca())) {
            return null;
        }
        var a = null;
        var b = null;
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
        var c = 0;
        if (this.shouldEmitSectionHeaders && this.aa) {
            c = 1;
        }
        var d = new List$1(Number_$type, 0);
        for (var e = a.f; e <= b.f; e++) {
            if (this.shouldEmitSectionHeaders && this.aa) {
                d.add(this.b5.af._inner[e].g);
            }
            if (this.shouldEmitShiftedRows) {
                for (var f = 0; f < this.b5.af._inner[e].d; f++) {
                    d.add(this.b5.af._inner[e].g + f + c);
                }
            }
            if (this.shouldEmitSectionFooters && this.aa) {
                d.add(this.b5.af._inner[e].e);
            }
        }
        this.bu = d.toArray();
        return this.bu;
    };
    LocalDataSource.prototype.isExclusivelySticky = function (a) {
        return this.getRowType(a) == 1 || this.getRowType(a) == 2;
    };
    LocalDataSource.prototype.getRowType = function (a) {
        if (a < 0) {
            return 0;
        }
        var b = this.getItemAtIndex(a);
        var item_ = b;
        if ((item_ != null && item_.$$isSpecialRow !== undefined)) {
            return b.rowType;
        }
        return 0;
    };
    LocalDataSource.$t = markType(LocalDataSource, 'LocalDataSource', BaseDataSource.$);
    return LocalDataSource;
}(BaseDataSource));
export { LocalDataSource };
/**
 * @hidden
 */
var LocalDataSourceViewUpdateNotifier = /** @class */ (function (_super) {
    tslib_1.__extends(LocalDataSourceViewUpdateNotifier, _super);
    function LocalDataSourceViewUpdateNotifier(a) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.a = a;
        return _this;
    }
    LocalDataSourceViewUpdateNotifier.prototype.notifyClearItems = function () {
        this.a.cq();
    };
    LocalDataSourceViewUpdateNotifier.prototype.notifyInsertItem = function (a, b) {
        this.a.cr(a, b);
    };
    LocalDataSourceViewUpdateNotifier.prototype.notifyRemoveItem = function (a, b) {
        this.a.cs(a, b);
    };
    LocalDataSourceViewUpdateNotifier.prototype.notifySetItem = function (a, b, c) {
        this.a.ct(a, b, c);
    };
    LocalDataSourceViewUpdateNotifier.$t = markType(LocalDataSourceViewUpdateNotifier, 'LocalDataSourceViewUpdateNotifier', Base.$, [ISupportsDataChangeNotifications_$type]);
    return LocalDataSourceViewUpdateNotifier;
}(Base));
export { LocalDataSourceViewUpdateNotifier };
//# sourceMappingURL=LocalDataSource_combined.js.map