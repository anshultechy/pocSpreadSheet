/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { BaseDataSource } from "./BaseDataSource";
import { IPageCandidatesSink_$type } from "./IPageCandidatesSink";
import { PagePredictionEngine } from "./PagePredictionEngine";
import { LRUCache$2 } from "./LRUCache$2";
import { Base, runOn, Number_$type, typeCast, fromEnum, typeGetValue, markType } from "./type";
import { IDataSourcePage_$type } from "./IDataSourcePage";
import { Dictionary$2 } from "./Dictionary$2";
import { SectionMap } from "./SectionMap";
import { DataSourceExecutionContext } from "./DataSourceExecutionContext";
import { SectionData } from "./SectionData";
import { List$1 } from "./List$1";
import { DataSourceSpecialRow } from "./DataSourceSpecialRow";
import { DataSourcePropertiesComparer } from "./DataSourcePropertiesComparer";
import { truncate } from "./number";
/**
 * @hidden
 */
var VirtualDataSource = /** @class */ (function (_super) {
    tslib_1.__extends(VirtualDataSource, _super);
    function VirtualDataSource() {
        var _this = _super.call(this) || this;
        _this.bw = null;
        _this.b6 = null;
        _this.bz = null;
        _this.by = null;
        _this.cj = 50;
        _this.ci = 200;
        _this.actualPageSizePopulated = false;
        _this.cf = 50;
        _this.ca = false;
        _this.b3 = null;
        _this.b9 = new LRUCache$2(Base.$, IDataSourcePage_$type, 0, 200);
        _this.ce = new Dictionary$2(Base.$, Number_$type, 0);
        _this.cb = false;
        _this.bu = null;
        _this.b8 = new SectionMap();
        _this.bv = null;
        _this.ch = -1;
        _this.cg = -1;
        _this.b6 = new PagePredictionEngine();
        _this.b6.e = _this;
        _this.b6.ag = _this.actualPageSize;
        _this.b6.f = _this.b8;
        _this.executionContext = new DataSourceExecutionContext();
        _this.b6.b = _this.executionContext;
        return _this;
    }
    VirtualDataSource.prototype.get_actualBaseDataProvider = function () {
        return this.actualDataProvider;
    };
    Object.defineProperty(VirtualDataSource.prototype, "actualBaseDataProvider", {
        get: function () {
            return this.get_actualBaseDataProvider();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualDataSource.prototype, "dataProvider", {
        get: function () {
            return this.bz;
        },
        set: function (a) {
            var b = this.bz;
            this.bz = a;
            if (b != this.bz) {
                this.onPropertyUpdated("DataProvider", b, this.bz);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualDataSource.prototype, "actualDataProvider", {
        get: function () {
            if (this.by == null) {
                this.actualDataProvider = this.resolveDataProvider();
            }
            return this.by;
        },
        set: function (a) {
            var b = this.by;
            this.by = a;
            if (b != this.by) {
                this.onPropertyUpdated("ActualDataProvider", b, this.by);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualDataSource.prototype, "pageSizeRequested", {
        get: function () {
            return this.cj;
        },
        set: function (a) {
            var b = this.cj;
            this.cj = a;
            if (b != this.cj) {
                this.onPropertyUpdated("PageSizeRequested", b, this.cj);
            }
        },
        enumerable: true,
        configurable: true
    });
    VirtualDataSource.prototype.resetCache = function () {
        if (this.b4 != null) {
            this.b4.resetCache();
        }
        this.resetCacheOverride();
    };
    VirtualDataSource.prototype.resetCacheOverride = function () {
        this.b9.i();
    };
    Object.defineProperty(VirtualDataSource.prototype, "maxCachedPages", {
        get: function () {
            return this.ci;
        },
        set: function (a) {
            var b = this.ci;
            this.ci = a;
            if (b != this.ci) {
                this.onPropertyUpdated("MaxCachedPages", b, this.ci);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualDataSource.prototype, "actualPageSize", {
        get: function () {
            return this.cf;
        },
        set: function (a) {
            var b = this.cf;
            this.cf = a;
            if (b != this.cf) {
                this.onPropertyUpdated("ActualPageSize", b, this.cf);
            }
        },
        enumerable: true,
        configurable: true
    });
    VirtualDataSource.prototype.get_isSortingSupported = function () {
        if (this.m != null && !this.ca) {
            this.ca = true;
            var a = this.m.isSortingSupportedOverride;
            this.ca = false;
            return a;
        }
        return false;
    };
    VirtualDataSource.prototype.get_isFilteringSupported = function () {
        if (this.m != null && !this.ca) {
            this.ca = true;
            var a = this.m.isFilteringSupportedOverride;
            this.ca = false;
            return a;
        }
        return false;
    };
    VirtualDataSource.prototype.get_isGroupingSupported = function () {
        if (this.m != null && !this.ca) {
            this.ca = true;
            var a = this.m.isGroupingSupportedOverride;
            this.ca = false;
            return a;
        }
        return false;
    };
    Object.defineProperty(VirtualDataSource.prototype, "b4", {
        get: function () {
            return this.b3;
        },
        set: function (a) {
            this.b3 = a;
            this.actualDataProvider = this.resolveDataProvider();
        },
        enumerable: true,
        configurable: true
    });
    VirtualDataSource.prototype.resolveDataProvider = function () {
        if (this.b4 == null) {
            return null;
        }
        return this.b4.resolveDataProvider();
    };
    VirtualDataSource.prototype.propertyUpdatedOverride = function (a, b, c) {
        _super.prototype.propertyUpdatedOverride.call(this, a, b, c);
        switch (a) {
            case "DataProvider":
                this.actualDataProvider = this.dataProvider;
                this.queueAutoRefresh();
                break;
            case "ExecutionContext":
                this.b6.b = this.executionContext;
                break;
            case "ActualDataProvider":
                this.actualDataProvider.pageSizeRequested = this.pageSizeRequested;
                this.actualDataProvider.pageLoaded = runOn(this, this.cx);
                this.queueAutoRefresh();
                break;
            case "PageSizeRequested":
                this.actualPageSize = this.pageSizeRequested;
                if (this.actualDataProvider != null) {
                    this.actualDataProvider.pageSizeRequested = this.pageSizeRequested;
                }
                this.queueAutoRefresh();
                break;
            case "ActualPageSize":
                this.b6.ag = this.actualPageSize;
                this.queueAutoRefresh();
                break;
            case "FirstVisibleIndexRequested":
                this.b6.aa = this.cm(this.firstVisibleIndexRequested);
                break;
            case "LastVisibleIndexRequested":
                this.b6.ae = this.cm(this.lastVisibleIndexRequested);
                break;
            case "ActualCount":
                if (this.actualDataProvider != null) {
                    this.b6.ab = this.actualDataProvider.actualCount;
                }
                else {
                    this.b6.ab = this.actualCount;
                }
                this.queueAutoRefresh();
                break;
            case "MaxCachedPages":
                this.b9.h = this.maxCachedPages;
                break;
        }
    };
    VirtualDataSource.prototype.cm = function (a) {
        if (this.aa && this.b8.l) {
            var b = this.b7(a);
            if (b == null) {
                b = this.b8.c();
            }
            return a - b.c;
        }
        return a;
    };
    VirtualDataSource.prototype.cx = function (a, b, c) {
        var _this = this;
        var d = this.executionContext;
        if (d != null) {
            d.execute(function () { return _this.c1(a, b, c); });
        }
        else {
            this.c1(a, b, c);
        }
    };
    VirtualDataSource.prototype.c1 = function (a, b, c) {
        if (a == null) {
            b = this.resolveFullCount(b);
            if (this.actualCount != b) {
                this.actualCount = b;
            }
            return;
        }
        if (c != this.actualPageSize && !this.actualPageSizePopulated) {
            this.actualPageSize = c;
        }
        this.actualPageSizePopulated = true;
        var d = a.pageIndex();
        this.b6.a1(d);
        if (this.ce.containsKey(d)) {
            this.ce.removeItem(d);
        }
        this.b9.item(d, a);
        var e = a.schema();
        if (e != null) {
            this.actualSchema = e;
        }
        var f = a.getGroupInformation();
        if (this.bu == null && f != null) {
            this.bu = f;
            this.c0();
        }
        b = this.resolveFullCount(b);
        if (this.actualCount != b) {
            this.actualCount = b;
        }
        this.cz(a);
    };
    VirtualDataSource.prototype.resolveFullCount = function (a) {
        if (this.bu != null) {
            return this.b8.o;
        }
        return a;
    };
    VirtualDataSource.prototype.c0 = function () {
        var a = 0;
        var b = 0;
        var c = 0;
        if (this.shouldEmitSectionHeaders) {
            c++;
        }
        if (this.shouldEmitSectionFooters) {
            c++;
        }
        var d = this.shouldEmitSectionHeaders;
        var e = this.shouldEmitSectionFooters;
        for (var f = 0; f < this.bu.length; f++) {
            var g = new SectionData();
            if (d) {
                b++;
            }
            g.g = a;
            g.f = f;
            g.e = a + (this.bu[f].endIndex - this.bu[f].startIndex);
            g.e += c;
            g.c = b;
            g.a = this.bu[f].groupKeyProperties;
            g.b = this.bu[f].groupKeyValues;
            if (e) {
                b++;
            }
            a = g.e + 1;
            this.b8.n.add(g);
        }
    };
    VirtualDataSource.prototype.cz = function (a) {
        if (this.updateNotifier != null) {
            var b = a.pageIndex() * this.actualPageSize;
            if (this.actualDataProvider != null) {
                if (b > this.actualDataProvider.actualCount) {
                    return;
                }
            }
            b = this.cl(b);
            var c = b + a.count() - 1;
            c = this.cl(c);
            if (b > 0 && this.getRowType(b - 1) == 1) {
                b--;
            }
            if (this.actualCount == 0 && a.count() == 0) {
                this.onClearItems();
            }
            else {
                this.updateNotifier.rangeActualized(b, c);
            }
        }
    };
    VirtualDataSource.prototype.cl = function (a) {
        if (this.aa && this.b8.l) {
            var b = this.b8.f(a);
            return a + b.c;
        }
        return a;
    };
    VirtualDataSource.prototype.cy = function (a) {
        a();
    };
    VirtualDataSource.prototype.get_isVirtual = function () {
        return true;
    };
    VirtualDataSource.prototype.isPlaceholderItem = function (a) {
        var b = this.bx(a);
        var c = b[0];
        if (!this.b9.d(c)) {
            return true;
        }
        return false;
    };
    VirtualDataSource.prototype.getItemAtIndex = function (a) {
        var b = this.bx(a);
        var c = b[0];
        if (!this.b9.d(c)) {
            if (b[1] == -1) {
                return this.cq(a);
            }
            return null;
        }
        var d = this.b9.item(c);
        var e = b[1];
        if (e == -1) {
            return this.cq(a);
        }
        return d.getItemAtIndex(e);
    };
    VirtualDataSource.prototype.cq = function (a) {
        var b = this.b7(a);
        if (a == b.g) {
            var c = new DataSourceSpecialRow();
            c.rowType = 1;
            for (var d = 0; d < this.groupDescriptions.k.count; d++) {
                c.setSectionValue(this.groupDescriptions.k.item(d).propertyName, b.b[d]);
            }
            return c;
        }
        if (a == b.e) {
            var e = new DataSourceSpecialRow();
            e.rowType = 2;
            for (var f = 0; f < this.groupDescriptions.k.count; f++) {
                e.setSectionValue(this.groupDescriptions.k.item(f).propertyName, b.b[f]);
            }
            return e;
        }
        return null;
    };
    VirtualDataSource.prototype.bx = function (a) {
        if (this.aa && this.b8.l) {
            var b = this.b7(a);
            var c = b.g;
            var d = false;
            if (a == c && this.shouldEmitSectionHeaders) {
                d = true;
            }
            if (a - c <= b.d) {
                d = true;
            }
            var e = a - b.c;
            var f = truncate(Math.floor(e / this.actualPageSize));
            var g = e % this.actualPageSize;
            if (d) {
                g = -1;
            }
            var h = new Array(2);
            h[0] = f;
            h[1] = g;
            return h;
        }
        else {
            var i = truncate(Math.floor(a / this.actualPageSize));
            var j = a % this.actualPageSize;
            var k = new Array(2);
            k[0] = i;
            k[1] = j;
            return k;
        }
    };
    VirtualDataSource.prototype.b7 = function (a) {
        return this.b8.d(a);
    };
    VirtualDataSource.prototype.getItemPropertyAtIndex = function (a, b) {
        var c = this.bx(a);
        var d = c[0];
        if (!this.b9.d(d)) {
            if (c[1] == -1) {
                return this.cr(a, b);
            }
            return null;
        }
        var e = this.b9.item(d);
        var f = c[1];
        if (f == -1) {
            return this.cr(a, b);
        }
        return e.getItemValueAtIndex(f, b);
    };
    VirtualDataSource.prototype.cr = function (a, b) {
        var c = this.cq(a);
        if (typeCast(DataSourceSpecialRow.$, c) !== null) {
            return c.getValue(b);
        }
        return null;
    };
    VirtualDataSource.prototype.addCandidate = function (a, b) {
        if (!this.ce.containsKey(a) && !this.b9.d(a)) {
            this.ce.addItem(a, a);
            if (this.actualDataProvider != null) {
                this.actualDataProvider.addPageRequest(a, b);
            }
            return true;
        }
        return false;
    };
    VirtualDataSource.prototype.removeCandidate = function (a) {
        if (this.ce.containsKey(a)) {
            this.ce.removeItem(a);
            if (this.actualDataProvider != null) {
                this.actualDataProvider.removePageRequest(a);
            }
        }
    };
    VirtualDataSource.prototype.getUnrealizedCount = function () {
        var a = this.b9.g * this.actualPageSize;
        var b = this.actualCount - a;
        return b;
    };
    VirtualDataSource.prototype.onSetItemOverride = function (a, b, c) {
        _super.prototype.onSetItemOverride.call(this, a, b, c);
        var d = this.bx(a);
        var e = d[0];
        if (this.b9.d(e)) {
            this.b9.j(e);
        }
    };
    VirtualDataSource.prototype.refreshInternalOverride = function () {
        _super.prototype.refreshInternalOverride.call(this);
        this.actualPageSizePopulated = false;
        var a = this.actualCount != 0;
        this.resetCache();
        this.cb = true;
        if (a) {
            this.onClearItems();
        }
        this.bu = null;
        this.b8.p();
        this.c2();
        this.b6.au();
        this.cb = false;
    };
    VirtualDataSource.prototype.c2 = function () {
        var e_1, _a;
        if (this.actualDataProvider != null) {
            try {
                for (var _b = tslib_1.__values(fromEnum(this.ce.values)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var a = _c.value;
                    this.actualDataProvider.addPageRequest(a, 1);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    VirtualDataSource.prototype.onClearItemsOverride = function () {
        _super.prototype.onClearItemsOverride.call(this);
        if (!this.cb) {
            this.queueAutoRefresh();
        }
    };
    VirtualDataSource.prototype.onInsertItemOverride = function (a, b) {
        _super.prototype.onInsertItemOverride.call(this, a, b);
        this.queueAutoRefresh();
    };
    VirtualDataSource.prototype.onRemoveItemOverride = function (a, b) {
        _super.prototype.onRemoveItemOverride.call(this, a, b);
        this.queueAutoRefresh();
    };
    VirtualDataSource.prototype.get_isItemIndexLookupSupported = function () {
        return true;
    };
    VirtualDataSource.prototype.get_isKeyIndexLookupSupported = function () {
        return true;
    };
    VirtualDataSource.prototype.indexOfItem = function (a) {
        var b = this.b9.b;
        var c = b.o;
        var d = b.q;
        var e = d.count;
        var f = b.p;
        for (var g = 0; g < e; g++) {
            if (f._inner[g]) {
                continue;
            }
            var h = d._inner[g].b;
            var i = h.count();
            for (var j = 0; j < i; j++) {
                if (this.cd(h.getItemAtIndex(j), a)) {
                    var k = typeGetValue(c._inner[g]);
                    var l = k * this.actualPageSize;
                    return l + j;
                }
            }
        }
        if (this.actualDataProvider != null && this.actualDataProvider.isItemIndexLookupSupported) {
            return this.actualDataProvider.indexOfItem(a);
        }
        return -1;
    };
    VirtualDataSource.prototype.cd = function (a, b) {
        if (a == null && b == null) {
            return true;
        }
        if (a == null || b == null) {
            return false;
        }
        return Base.equalsStatic(a, b);
    };
    VirtualDataSource.prototype.indexOfKey = function (a) {
        var b = this.actualPrimaryKey;
        if (b == null || b.length < 1 || this.actualBaseDataProvider == null) {
            return -1;
        }
        this.ensureComparables(this.actualSchema);
        var c = this.b5();
        var d = this.b9.b;
        var e = d.o;
        var f = d.q;
        var g = f.count;
        var h = d.p;
        for (var i = 0; i < g; i++) {
            if (h._inner[i]) {
                continue;
            }
            var j = f._inner[i].b;
            var k = j.count();
            for (var l = 0; l < k; l++) {
                if (c.i(j.getItemAtIndex(l), a) == 0) {
                    var m = typeGetValue(e._inner[i]);
                    var n = m * this.actualPageSize;
                    return n + l;
                }
            }
        }
        if (this.actualDataProvider != null && this.actualDataProvider.isKeyIndexLookupSupported) {
            return this.actualDataProvider.indexOfKey(a);
        }
        return -1;
    };
    VirtualDataSource.prototype.b5 = function () {
        var a = new Array(this.actualPrimaryKey.length);
        for (var b = 0; b < a.length; b++) {
            a[b] = 0;
        }
        return new DataSourcePropertiesComparer(this.actualPrimaryKey, a, this.bw, this);
    };
    VirtualDataSource.prototype.getStickyRowPriority = function (a) {
        if (this.getRowType(a) == 1 || this.getRowType(a) == 2) {
            return 3;
        }
        else if (this.getRowType(a) == 3) {
            return 2;
        }
        return 1;
    };
    VirtualDataSource.prototype.unpinRow = function (a) {
        _super.prototype.unpinRow.call(this, a);
    };
    VirtualDataSource.prototype.pinRow = function (a) {
        _super.prototype.pinRow.call(this, a);
    };
    VirtualDataSource.prototype.isRowPinned = function (a) {
        return _super.prototype.isRowPinned.call(this, a);
    };
    VirtualDataSource.prototype.getStickyRows = function () {
        if (this.groupDescriptions == null || this.groupDescriptions.k.count == 0) {
            return null;
        }
        var a = this.b7(this.firstVisibleIndexRequested);
        var b = this.b7(this.lastVisibleIndexRequested);
        if (a == null || b == null) {
            return null;
        }
        if (a.f == this.ch && b.f == this.cg) {
            return this.bv;
        }
        this.cg = b.f;
        this.ch = a.f;
        var c = new List$1(Number_$type, 0);
        for (var d = a.f; d <= b.f; d++) {
            if (this.shouldEmitSectionHeaders) {
                c.add(this.b8.n._inner[d].g);
            }
            if (this.shouldEmitShiftedRows) {
                for (var e = 0; e < this.b8.n._inner[d].d; e++) {
                    c.add(this.b8.n._inner[d].g + e + 1);
                }
            }
            if (this.shouldEmitSectionFooters) {
                c.add(this.b8.n._inner[d].e);
            }
        }
        this.bv = c.toArray();
        return this.bv;
    };
    VirtualDataSource.prototype.isExclusivelySticky = function (a) {
        return this.getRowType(a) == 1 || this.getRowType(a) == 2;
    };
    VirtualDataSource.prototype.getRowType = function (a) {
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
    VirtualDataSource.$t = markType(VirtualDataSource, 'VirtualDataSource', BaseDataSource.$, [IPageCandidatesSink_$type]);
    return VirtualDataSource;
}(BaseDataSource));
export { VirtualDataSource };
//# sourceMappingURL=VirtualDataSource.js.map