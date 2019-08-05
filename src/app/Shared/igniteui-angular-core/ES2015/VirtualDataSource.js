/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
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
export class VirtualDataSource extends BaseDataSource {
    constructor() {
        super();
        this.bw = null;
        this.b6 = null;
        this.bz = null;
        this.by = null;
        this.cj = 50;
        this.ci = 200;
        this.actualPageSizePopulated = false;
        this.cf = 50;
        this.ca = false;
        this.b3 = null;
        this.b9 = new LRUCache$2(Base.$, IDataSourcePage_$type, 0, 200);
        this.ce = new Dictionary$2(Base.$, Number_$type, 0);
        this.cb = false;
        this.bu = null;
        this.b8 = new SectionMap();
        this.bv = null;
        this.ch = -1;
        this.cg = -1;
        this.b6 = new PagePredictionEngine();
        this.b6.e = this;
        this.b6.ag = this.actualPageSize;
        this.b6.f = this.b8;
        this.executionContext = new DataSourceExecutionContext();
        this.b6.b = this.executionContext;
    }
    get_actualBaseDataProvider() {
        return this.actualDataProvider;
    }
    get actualBaseDataProvider() {
        return this.get_actualBaseDataProvider();
    }
    get dataProvider() {
        return this.bz;
    }
    set dataProvider(a) {
        let b = this.bz;
        this.bz = a;
        if (b != this.bz) {
            this.onPropertyUpdated("DataProvider", b, this.bz);
        }
    }
    get actualDataProvider() {
        if (this.by == null) {
            this.actualDataProvider = this.resolveDataProvider();
        }
        return this.by;
    }
    set actualDataProvider(a) {
        let b = this.by;
        this.by = a;
        if (b != this.by) {
            this.onPropertyUpdated("ActualDataProvider", b, this.by);
        }
    }
    get pageSizeRequested() {
        return this.cj;
    }
    set pageSizeRequested(a) {
        let b = this.cj;
        this.cj = a;
        if (b != this.cj) {
            this.onPropertyUpdated("PageSizeRequested", b, this.cj);
        }
    }
    resetCache() {
        if (this.b4 != null) {
            this.b4.resetCache();
        }
        this.resetCacheOverride();
    }
    resetCacheOverride() {
        this.b9.i();
    }
    get maxCachedPages() {
        return this.ci;
    }
    set maxCachedPages(a) {
        let b = this.ci;
        this.ci = a;
        if (b != this.ci) {
            this.onPropertyUpdated("MaxCachedPages", b, this.ci);
        }
    }
    get actualPageSize() {
        return this.cf;
    }
    set actualPageSize(a) {
        let b = this.cf;
        this.cf = a;
        if (b != this.cf) {
            this.onPropertyUpdated("ActualPageSize", b, this.cf);
        }
    }
    get_isSortingSupported() {
        if (this.m != null && !this.ca) {
            this.ca = true;
            let a = this.m.isSortingSupportedOverride;
            this.ca = false;
            return a;
        }
        return false;
    }
    get_isFilteringSupported() {
        if (this.m != null && !this.ca) {
            this.ca = true;
            let a = this.m.isFilteringSupportedOverride;
            this.ca = false;
            return a;
        }
        return false;
    }
    get_isGroupingSupported() {
        if (this.m != null && !this.ca) {
            this.ca = true;
            let a = this.m.isGroupingSupportedOverride;
            this.ca = false;
            return a;
        }
        return false;
    }
    get b4() {
        return this.b3;
    }
    set b4(a) {
        this.b3 = a;
        this.actualDataProvider = this.resolveDataProvider();
    }
    resolveDataProvider() {
        if (this.b4 == null) {
            return null;
        }
        return this.b4.resolveDataProvider();
    }
    propertyUpdatedOverride(a, b, c) {
        super.propertyUpdatedOverride(a, b, c);
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
    }
    cm(a) {
        if (this.aa && this.b8.l) {
            let b = this.b7(a);
            if (b == null) {
                b = this.b8.c();
            }
            return a - b.c;
        }
        return a;
    }
    cx(a, b, c) {
        let d = this.executionContext;
        if (d != null) {
            d.execute(() => this.c1(a, b, c));
        }
        else {
            this.c1(a, b, c);
        }
    }
    c1(a, b, c) {
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
        let d = a.pageIndex();
        this.b6.a1(d);
        if (this.ce.containsKey(d)) {
            this.ce.removeItem(d);
        }
        this.b9.item(d, a);
        let e = a.schema();
        if (e != null) {
            this.actualSchema = e;
        }
        let f = a.getGroupInformation();
        if (this.bu == null && f != null) {
            this.bu = f;
            this.c0();
        }
        b = this.resolveFullCount(b);
        if (this.actualCount != b) {
            this.actualCount = b;
        }
        this.cz(a);
    }
    resolveFullCount(a) {
        if (this.bu != null) {
            return this.b8.o;
        }
        return a;
    }
    c0() {
        let a = 0;
        let b = 0;
        let c = 0;
        if (this.shouldEmitSectionHeaders) {
            c++;
        }
        if (this.shouldEmitSectionFooters) {
            c++;
        }
        let d = this.shouldEmitSectionHeaders;
        let e = this.shouldEmitSectionFooters;
        for (let f = 0; f < this.bu.length; f++) {
            let g = new SectionData();
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
    }
    cz(a) {
        if (this.updateNotifier != null) {
            let b = a.pageIndex() * this.actualPageSize;
            if (this.actualDataProvider != null) {
                if (b > this.actualDataProvider.actualCount) {
                    return;
                }
            }
            b = this.cl(b);
            let c = b + a.count() - 1;
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
    }
    cl(a) {
        if (this.aa && this.b8.l) {
            let b = this.b8.f(a);
            return a + b.c;
        }
        return a;
    }
    cy(a) {
        a();
    }
    get_isVirtual() {
        return true;
    }
    isPlaceholderItem(a) {
        let b = this.bx(a);
        let c = b[0];
        if (!this.b9.d(c)) {
            return true;
        }
        return false;
    }
    getItemAtIndex(a) {
        let b = this.bx(a);
        let c = b[0];
        if (!this.b9.d(c)) {
            if (b[1] == -1) {
                return this.cq(a);
            }
            return null;
        }
        let d = this.b9.item(c);
        let e = b[1];
        if (e == -1) {
            return this.cq(a);
        }
        return d.getItemAtIndex(e);
    }
    cq(a) {
        let b = this.b7(a);
        if (a == b.g) {
            let c = new DataSourceSpecialRow();
            c.rowType = 1;
            for (let d = 0; d < this.groupDescriptions.k.count; d++) {
                c.setSectionValue(this.groupDescriptions.k.item(d).propertyName, b.b[d]);
            }
            return c;
        }
        if (a == b.e) {
            let e = new DataSourceSpecialRow();
            e.rowType = 2;
            for (let f = 0; f < this.groupDescriptions.k.count; f++) {
                e.setSectionValue(this.groupDescriptions.k.item(f).propertyName, b.b[f]);
            }
            return e;
        }
        return null;
    }
    bx(a) {
        if (this.aa && this.b8.l) {
            let b = this.b7(a);
            let c = b.g;
            let d = false;
            if (a == c && this.shouldEmitSectionHeaders) {
                d = true;
            }
            if (a - c <= b.d) {
                d = true;
            }
            let e = a - b.c;
            let f = truncate(Math.floor(e / this.actualPageSize));
            let g = e % this.actualPageSize;
            if (d) {
                g = -1;
            }
            let h = new Array(2);
            h[0] = f;
            h[1] = g;
            return h;
        }
        else {
            let i = truncate(Math.floor(a / this.actualPageSize));
            let j = a % this.actualPageSize;
            let k = new Array(2);
            k[0] = i;
            k[1] = j;
            return k;
        }
    }
    b7(a) {
        return this.b8.d(a);
    }
    getItemPropertyAtIndex(a, b) {
        let c = this.bx(a);
        let d = c[0];
        if (!this.b9.d(d)) {
            if (c[1] == -1) {
                return this.cr(a, b);
            }
            return null;
        }
        let e = this.b9.item(d);
        let f = c[1];
        if (f == -1) {
            return this.cr(a, b);
        }
        return e.getItemValueAtIndex(f, b);
    }
    cr(a, b) {
        let c = this.cq(a);
        if (typeCast(DataSourceSpecialRow.$, c) !== null) {
            return c.getValue(b);
        }
        return null;
    }
    addCandidate(a, b) {
        if (!this.ce.containsKey(a) && !this.b9.d(a)) {
            this.ce.addItem(a, a);
            if (this.actualDataProvider != null) {
                this.actualDataProvider.addPageRequest(a, b);
            }
            return true;
        }
        return false;
    }
    removeCandidate(a) {
        if (this.ce.containsKey(a)) {
            this.ce.removeItem(a);
            if (this.actualDataProvider != null) {
                this.actualDataProvider.removePageRequest(a);
            }
        }
    }
    getUnrealizedCount() {
        let a = this.b9.g * this.actualPageSize;
        let b = this.actualCount - a;
        return b;
    }
    onSetItemOverride(a, b, c) {
        super.onSetItemOverride(a, b, c);
        let d = this.bx(a);
        let e = d[0];
        if (this.b9.d(e)) {
            this.b9.j(e);
        }
    }
    refreshInternalOverride() {
        super.refreshInternalOverride();
        this.actualPageSizePopulated = false;
        let a = this.actualCount != 0;
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
    }
    c2() {
        if (this.actualDataProvider != null) {
            for (let a of fromEnum(this.ce.values)) {
                this.actualDataProvider.addPageRequest(a, 1);
            }
        }
    }
    onClearItemsOverride() {
        super.onClearItemsOverride();
        if (!this.cb) {
            this.queueAutoRefresh();
        }
    }
    onInsertItemOverride(a, b) {
        super.onInsertItemOverride(a, b);
        this.queueAutoRefresh();
    }
    onRemoveItemOverride(a, b) {
        super.onRemoveItemOverride(a, b);
        this.queueAutoRefresh();
    }
    get_isItemIndexLookupSupported() {
        return true;
    }
    get_isKeyIndexLookupSupported() {
        return true;
    }
    indexOfItem(a) {
        let b = this.b9.b;
        let c = b.o;
        let d = b.q;
        let e = d.count;
        let f = b.p;
        for (let g = 0; g < e; g++) {
            if (f._inner[g]) {
                continue;
            }
            let h = d._inner[g].b;
            let i = h.count();
            for (let j = 0; j < i; j++) {
                if (this.cd(h.getItemAtIndex(j), a)) {
                    let k = typeGetValue(c._inner[g]);
                    let l = k * this.actualPageSize;
                    return l + j;
                }
            }
        }
        if (this.actualDataProvider != null && this.actualDataProvider.isItemIndexLookupSupported) {
            return this.actualDataProvider.indexOfItem(a);
        }
        return -1;
    }
    cd(a, b) {
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
            return -1;
        }
        this.ensureComparables(this.actualSchema);
        let c = this.b5();
        let d = this.b9.b;
        let e = d.o;
        let f = d.q;
        let g = f.count;
        let h = d.p;
        for (let i = 0; i < g; i++) {
            if (h._inner[i]) {
                continue;
            }
            let j = f._inner[i].b;
            let k = j.count();
            for (let l = 0; l < k; l++) {
                if (c.i(j.getItemAtIndex(l), a) == 0) {
                    let m = typeGetValue(e._inner[i]);
                    let n = m * this.actualPageSize;
                    return n + l;
                }
            }
        }
        if (this.actualDataProvider != null && this.actualDataProvider.isKeyIndexLookupSupported) {
            return this.actualDataProvider.indexOfKey(a);
        }
        return -1;
    }
    b5() {
        let a = new Array(this.actualPrimaryKey.length);
        for (let b = 0; b < a.length; b++) {
            a[b] = 0;
        }
        return new DataSourcePropertiesComparer(this.actualPrimaryKey, a, this.bw, this);
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
    unpinRow(a) {
        super.unpinRow(a);
    }
    pinRow(a) {
        super.pinRow(a);
    }
    isRowPinned(a) {
        return super.isRowPinned(a);
    }
    getStickyRows() {
        if (this.groupDescriptions == null || this.groupDescriptions.k.count == 0) {
            return null;
        }
        let a = this.b7(this.firstVisibleIndexRequested);
        let b = this.b7(this.lastVisibleIndexRequested);
        if (a == null || b == null) {
            return null;
        }
        if (a.f == this.ch && b.f == this.cg) {
            return this.bv;
        }
        this.cg = b.f;
        this.ch = a.f;
        let c = new List$1(Number_$type, 0);
        for (let d = a.f; d <= b.f; d++) {
            if (this.shouldEmitSectionHeaders) {
                c.add(this.b8.n._inner[d].g);
            }
            if (this.shouldEmitShiftedRows) {
                for (let e = 0; e < this.b8.n._inner[d].d; e++) {
                    c.add(this.b8.n._inner[d].g + e + 1);
                }
            }
            if (this.shouldEmitSectionFooters) {
                c.add(this.b8.n._inner[d].e);
            }
        }
        this.bv = c.toArray();
        return this.bv;
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
VirtualDataSource.$t = markType(VirtualDataSource, 'VirtualDataSource', BaseDataSource.$, [IPageCandidatesSink_$type]);
//# sourceMappingURL=VirtualDataSource.js.map