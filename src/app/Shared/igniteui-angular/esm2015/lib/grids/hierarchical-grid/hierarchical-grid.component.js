/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostBinding, Input, forwardRef, TemplateRef, ViewChild, ViewChildren, QueryList, ContentChildren, ElementRef, NgZone, ChangeDetectorRef, IterableDiffers, ViewContainerRef, Inject, ComponentFactoryResolver, Optional } from '@angular/core';
import { IgxGridBaseComponent, IgxGridTransaction } from '../grid-base.component';
import { GridBaseAPIService } from '../api.service';
import { IgxHierarchicalGridAPIService } from './hierarchical-grid-api.service';
import { IgxRowIslandComponent } from './row-island.component';
import { IgxChildGridRowComponent } from './child-grid-row.component';
import { IgxFilteringService } from '../filtering/grid-filtering.service';
import { DisplayDensityToken, DisplayDensity } from '../../core/displayDensity';
import { DOCUMENT } from '@angular/common';
import { IgxHierarchicalSelectionAPIService } from './selection';
import { IgxHierarchicalGridNavigationService } from './hierarchical-grid-navigation.service';
import { IgxGridSummaryService } from '../summaries/grid-summary.service';
import { IgxHierarchicalGridBaseComponent } from './hierarchical-grid-base.component';
import { takeUntil } from 'rxjs/operators';
import { IgxTemplateOutletDirective } from '../../directives/template-outlet/template_outlet.directive';
import { IgxGridSelectionService, IgxGridCRUDService } from '../../core/grid-selection';
import { IgxOverlayService } from '../../services/index';
import { IgxColumnResizingService } from '../grid-column-resizing.service';
import { IgxForOfSyncService } from '../../directives/for-of/for_of.sync.service';
/** @type {?} */
let NEXT_ID = 0;
/**
 * @record
 */
export function HierarchicalStateRecord() { }
if (false) {
    /** @type {?} */
    HierarchicalStateRecord.prototype.rowID;
}
export class IgxHierarchicalGridComponent extends IgxHierarchicalGridBaseComponent {
    /**
     * @param {?} selectionService
     * @param {?} crudService
     * @param {?} colResizingService
     * @param {?} gridAPI
     * @param {?} selection
     * @param {?} transactionFactory
     * @param {?} elementRef
     * @param {?} zone
     * @param {?} document
     * @param {?} cdr
     * @param {?} resolver
     * @param {?} differs
     * @param {?} viewRef
     * @param {?} navigation
     * @param {?} filteringService
     * @param {?} overlayService
     * @param {?} summaryService
     * @param {?} _displayDensityOptions
     */
    constructor(selectionService, crudService, colResizingService, gridAPI, selection, transactionFactory, elementRef, zone, document, cdr, resolver, differs, viewRef, navigation, filteringService, overlayService, summaryService, _displayDensityOptions) {
        super(selectionService, crudService, gridAPI, selection, typeof transactionFactory === 'function' ? transactionFactory() : transactionFactory, elementRef, zone, document, cdr, resolver, differs, viewRef, navigation, filteringService, overlayService, summaryService, _displayDensityOptions);
        this.selectionService = selectionService;
        this.colResizingService = colResizingService;
        this.transactionFactory = transactionFactory;
        this.document = document;
        this.overlayService = overlayService;
        this.summaryService = summaryService;
        this._displayDensityOptions = _displayDensityOptions;
        /**
         * @hidden
         */
        this.childLayoutKeys = [];
        /**
         * @hidden
         */
        this.highlightedRowID = null;
        /**
         * @hidden
         */
        this.updateOnRender = false;
        /**
         * @hidden
         */
        this.parent = null;
        this._hierarchicalState = [];
        this._filteredData = null;
        this.h_id = `igx-hierarchical-grid-${NEXT_ID++}`;
        this.childGridTemplates = new Map();
        this.scrollTop = 0;
        this.scrollLeft = 0;
        this.hgridAPI = (/** @type {?} */ (gridAPI));
    }
    /**
     * Sets the value of the `id` attribute. If not provided it will be automatically generated.
     * ```html
     * <igx-hierarchical-grid [id]="'igx-hgrid-1'" [data]="Data" [autoGenerate]="true"></igx-hierarchical-grid>
     * ```
     * \@memberof IgxHierarchicalGridComponent
     * @return {?}
     */
    get id() {
        return this.h_id;
    }
    /**
     * An \@Input property that lets you fill the `IgxHierarchicalGridComponent` with an array of data.
     * ```html
     * <igx-hierarchical-grid [data]="Data" [autoGenerate]="true"></igx-hierarchical-grid>
     * ```
     * \@memberof IgxHierarchicalGridComponent
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        this._data = value;
        this.summaryService.clearSummaryCache();
        if (this.shouldGenerate) {
            this.setupColumns();
            this.reflow();
        }
        this.cdr.markForCheck();
        if (this.parent && (this.height === null || this.height.indexOf('%') !== -1)) {
            // If the height will change based on how much data there is, recalculate sizes in igxForOf.
            requestAnimationFrame(() => {
                this.updateParentSizes();
            });
        }
    }
    /**
     * Returns an array of data set to the `IgxHierarchicalGridComponent`.
     * ```typescript
     * let filteredData = this.grid.filteredData;
     * ```
     * \@memberof IgxHierarchicalGridComponent
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * Sets the state of the `IgxHierarchicalGridComponent` containing which rows are expanded.
     * ```typescript
     * this.gridState = [{ rowID: 1 }, { rowID: 4}];
     * ```
     * ```html
     * <igx-hierarchical-grid [primaryKey]="'ID'" [data]="Data" [autoGenerate]="false" [hierarchicalState]="hgridState">
     *      <igx-column field="ID"  [dataType]='number'></igx-column>
     *      <igx-column field="Product"  [dataType]='string'></igx-column>
     *      <igx-column field="Description"  [dataType]='string'></igx-column>
     * </igx-hierarchical-grid>
     * ```
     * \@memberof IgxHierarchicalGridComponent
     * @return {?}
     */
    get hierarchicalState() {
        return this._hierarchicalState;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set hierarchicalState(val) {
        this._hierarchicalState = val;
        if (this.parent) {
            requestAnimationFrame(() => {
                this.updateParentSizes();
            });
        }
    }
    /**
     * Sets an array of objects containing the filtered data in the `IgxHierarchicalGridComponent`.
     * ```typescript
     * this.grid.filteredData = [{
     *       ID: 1,
     *       Name: "A"
     * }];
     * ```
     * \@memberof IgxHierarchicalGridComponent
     * @param {?} value
     * @return {?}
     */
    set filteredData(value) {
        this._filteredData = value;
        if (this.rowSelectable) {
            this.updateHeaderCheckboxStatusOnFilter(this._filteredData);
        }
    }
    /**
     * Returns an array of objects containing the filtered data in the `IgxHierarchicalGridComponent`.
     * ```typescript
     * let filteredData = this.grid.filteredData;
     * ```
     * \@memberof IgxHierarchicalGridComponent
     * @return {?}
     */
    get filteredData() {
        return this._filteredData;
    }
    /**
     * Sets if all immediate children of the `IgxHierarchicalGridComponent` should be expanded/collapsed.
     * Defult value is false.
     * ```html
     * <igx-hierarchical-grid [id]="'igx-grid-1'" [data]="Data" [autoGenerate]="true" [expandChildren]="true"></igx-hierarchical-grid>
     * ```
     * \@memberof IgxHierarchicalGridComponent
     * @param {?} value
     * @return {?}
     */
    set expandChildren(value) {
        this._expandChildren = value;
        if (value && this.data) {
            this.hierarchicalState = this.data.map((rec) => {
                return { rowID: this.primaryKey ? rec[this.primaryKey] : rec };
            });
        }
        else if (this.data) {
            this.hierarchicalState = [];
        }
    }
    /**
     * Gets if all immediate children of the `IgxHierarchicalGridComponent` previously have been set to be expanded/collapsed.
     * If previously set and some rows have been manually expanded/collapsed it will still return the last set value.
     * ```typescript
     * const expanded = this.grid.expandChildren;
     * ```
     * \@memberof IgxHierarchicalGridComponent
     * @return {?}
     */
    get expandChildren() {
        return this._expandChildren;
    }
    /**
     * Gets the unique identifier of the parent row. It may be a `string` or `number` if `primaryKey` of the
     * parent grid is set or an object reference of the parent record otherwise.
     * ```typescript
     * const foreignKey = this.grid.foreignKey;
     * ```
     * \@memberof IgxHierarchicalGridComponent
     * @return {?}
     */
    get foreignKey() {
        if (!this.parent) {
            return null;
        }
        return this.parent.hgridAPI.getParentRowId(this);
    }
    /**
     * @hidden
     * @return {?}
     */
    get hasExpandableChildren() {
        return !!this.childLayoutKeys.length;
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        this._transactions = this.parentIsland ? this.parentIsland.transactions : this._transactions;
        super.ngOnInit();
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.verticalScrollContainer.getVerticalScroll().addEventListener('scroll', this.hg_verticalScrollHandler.bind(this));
        this.parentVirtDir.getHorizontalScroll().addEventListener('scroll', this.hg_horizontalScrollHandler.bind(this));
        if (this.expandChildren && this.data && this.hierarchicalState.length !== this.data.length) {
            this.hierarchicalState = this.data.map((rec) => {
                return { rowID: this.primaryKey ? rec[this.primaryKey] : rec };
            });
            this.cdr.detectChanges();
        }
        this.verticalScrollContainer.onBeforeViewDestroyed.pipe(takeUntil(this.destroy$)).subscribe((view) => {
            /** @type {?} */
            const rowData = view.context.$implicit;
            if (this.isChildGridRecord(rowData)) {
                /** @type {?} */
                const cachedData = this.childGridTemplates.get(rowData.rowID);
                if (cachedData) {
                    /** @type {?} */
                    const tmlpOutlet = cachedData.owner;
                    tmlpOutlet._viewContainerRef.detach(0);
                }
            }
        });
        if (this.parent) {
            this._displayDensity = this.rootGrid._displayDensity;
            this.rootGrid.onDensityChanged.pipe(takeUntil(this.destroy$)).subscribe(() => {
                requestAnimationFrame(() => {
                    this._displayDensity = this.rootGrid._displayDensity;
                    if (document.body.contains(this.nativeElement)) {
                        this.reflow();
                    }
                    else {
                        this.updateOnRender = true;
                    }
                });
            });
            this.childLayoutKeys = this.parentIsland.children.map((item) => item.key);
        }
        this.toolbarCustomContentTemplates = this.parentIsland ?
            this.parentIsland.toolbarCustomContentTemplates :
            this.toolbarCustomContentTemplates;
    }
    /**
     * @return {?}
     */
    get outletDirective() {
        return this.rootGrid._outletDirective;
    }
    /**
     * @hidden
     * @return {?}
     */
    get parentRowOutletDirective() {
        return this === this.rootGrid ? null : this.rootGrid.rowEditingOutletDirective;
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateColumnList(false);
        this.childLayoutKeys = this.parent ?
            this.parentIsland.children.map((item) => item.key) :
            this.childLayoutKeys = this.childLayoutList.map((item) => item.key);
        this.childLayoutList.notifyOnChanges();
        this.childLayoutList.changes.pipe(takeUntil(this.destroy$))
            .subscribe(() => this.onRowIslandChange());
        super.ngAfterContentInit();
    }
    /**
     * @hidden
     * @return {?}
     */
    onRowIslandChange() {
        if (this.parent) {
            this.childLayoutKeys = this.parentIsland.children.filter(item => !((/** @type {?} */ (item)))._destroyed).map((item) => item.key);
        }
        else {
            this.childLayoutKeys = this.childLayoutList.filter(item => !((/** @type {?} */ (item)))._destroyed).map((item) => item.key);
        }
        if (!((/** @type {?} */ (this.cdr))).destroyed) {
            this.cdr.detectChanges();
        }
    }
    /**
     * @protected
     * @param {?} change
     * @return {?}
     */
    onColumnsChanged(change) {
        this.updateColumnList();
        /** @type {?} */
        const cols = change.filter(c => c.grid === this);
        if (cols.length > 0) {
            this.columnList.reset(cols);
            super.onColumnsChanged(this.columnList);
        }
    }
    /**
     * @private
     * @param {?=} recalcColSizes
     * @return {?}
     */
    updateColumnList(recalcColSizes = true) {
        /** @type {?} */
        const childLayouts = this.parent ? this.childLayoutList : this.allLayoutList;
        /** @type {?} */
        const nestedColumns = childLayouts.map((layout) => {
            return layout.columnList.toArray();
        });
        /** @type {?} */
        const colsArray = [].concat.apply([], nestedColumns);
        /** @type {?} */
        const colLength = this.columnList.length;
        if (colsArray.length > 0) {
            /** @type {?} */
            const topCols = this.columnList.filter((item) => {
                return colsArray.indexOf(item) === -1;
            });
            this.columnList.reset(topCols);
            if (recalcColSizes && this.columnList.length !== colLength) {
                this.calculateGridSizes();
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (!this.parent) {
            this.hgridAPI.getChildGrids(true).forEach((grid) => {
                if (!grid.childRow.cdr.destroyed) {
                    grid.childRow.cdr.destroy();
                }
            });
        }
        if (this.parent && this.selectionService.activeElement) {
            // in case selection is in destroyed child grid, selection should be cleared.
            this._clearSeletionHighlights();
        }
        super.ngOnDestroy();
    }
    /**
     * @private
     * @return {?}
     */
    _clearSeletionHighlights() {
        [this.rootGrid, ...this.rootGrid.getChildGrids(true)].forEach(grid => {
            grid.selectionService.clear();
            grid.selectionService.activeElement = null;
            grid.nativeElement.classList.remove('igx-grid__tr--highlighted');
            grid.highlightedRowID = null;
            grid.cdr.markForCheck();
        });
    }
    /**
     * @hidden
     * @return {?}
     */
    get template() {
        if (this.filteredData && this.filteredData.length === 0) {
            return this.emptyGridTemplate ? this.emptyGridTemplate : this.emptyFilteredGridTemplate;
        }
        if (this.isLoading && (!this.data || this.dataLength === 0)) {
            return this.loadingGridTemplate ? this.loadingGridTemplate : this.loadingGridDefaultTemplate;
        }
        if (this.dataLength === 0) {
            return this.emptyGridTemplate ? this.emptyGridTemplate : this.emptyGridDefaultTemplate;
        }
    }
    /**
     * @hidden
     * Gets the combined width of the columns that are specific to the enabled grid features. They are fixed.
     * TODO: Remove for Angular 8. Calling parent class getter using super is not supported for now.
     * @return {?}
     */
    getFeatureColumnsWidth() {
        /** @type {?} */
        let width = super.getFeatureColumnsWidth();
        if (this.hasExpandableChildren) {
            width += this.headerHierarchyExpander.nativeElement.offsetWidth || this.getDefaultExpanderWidth();
        }
        return width;
    }
    /**
     * @private
     * @return {?}
     */
    getDefaultExpanderWidth() {
        switch (this.displayDensity) {
            case DisplayDensity.cosy:
                return 57;
            case DisplayDensity.compact:
                return 49;
            default:
                return 72;
        }
    }
    /**
     * @hidden
     * @param {?} rowData
     * @return {?}
     */
    isRowHighlighted(rowData) {
        return this.highlightedRowID === rowData.rowID;
    }
    /**
     * @hidden
     * @param {?} record
     * @return {?}
     */
    isHierarchicalRecord(record) {
        return this.childLayoutList.length !== 0 && record[this.childLayoutList.first.key];
    }
    /**
     * @hidden
     * @param {?} record
     * @return {?}
     */
    isChildGridRecord(record) {
        // Can be null when there is defined layout but no child data was found
        return record.childGridsData !== undefined;
    }
    /**
     * @hidden
     * @param {?} index
     * @param {?} rec
     * @return {?}
     */
    trackChanges(index, rec) {
        if (rec.childGridsData !== undefined) {
            // if is child rec
            return rec.rowID;
        }
        return rec;
    }
    /**
     * @hidden
     * @param {?} rowData
     * @return {?}
     */
    getContext(rowData) {
        if (this.isChildGridRecord(rowData)) {
            /** @type {?} */
            const cachedData = this.childGridTemplates.get(rowData.rowID);
            if (cachedData) {
                /** @type {?} */
                const view = cachedData.view;
                /** @type {?} */
                const tmlpOutlet = cachedData.owner;
                return {
                    $implicit: rowData,
                    moveView: view,
                    owner: tmlpOutlet,
                    index: this.verticalScrollContainer.igxForOf.indexOf(rowData)
                };
            }
            else {
                /** @type {?} */
                const rowID = this.primaryKey ? rowData.rowID : this.data.indexOf(rowData.rowID);
                // child rows contain unique grids, hence should have unique templates
                return {
                    $implicit: rowData,
                    templateID: 'childRow-' + rowID,
                    index: this.verticalScrollContainer.igxForOf.indexOf(rowData)
                };
            }
        }
        else {
            return {
                $implicit: rowData,
                templateID: 'dataRow',
                index: this.verticalScrollContainer.igxForOf.indexOf(rowData)
            };
        }
    }
    /**
     * @hidden
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    get rootGrid() {
        /** @type {?} */
        let currGrid = (/** @type {?} */ (this));
        while (currGrid.parent) {
            currGrid = currGrid.parent;
        }
        return currGrid;
    }
    /**
     * @hidden
     * @protected
     * @param {?} collection
     * @param {?=} cb
     * @return {?}
     */
    initColumns(collection, cb = null) {
        if (this.hasColumnLayouts) {
            // invalid configuration - hierarchical grid should not allow column layouts
            // remove column layouts
            /** @type {?} */
            const nonColumnLayoutColumns = this.columnList.filter((col) => !col.columnLayout && !col.columnLayoutChild);
            this.columnList.reset(nonColumnLayoutColumns);
        }
        super.initColumns(collection, cb);
    }
    /**
     * @hidden
     * Gets the visible content height that includes header + tbody + footer.
     * For hierarchical child grid it may be scrolled and not fully visible.
     * @return {?}
     */
    getVisibleContentHeight() {
        /** @type {?} */
        let height = super.getVisibleContentHeight();
        if (this.parent) {
            /** @type {?} */
            const rootHeight = this.rootGrid.getVisibleContentHeight();
            /** @type {?} */
            const topDiff = this.nativeElement.getBoundingClientRect().top - this.rootGrid.nativeElement.getBoundingClientRect().top;
            height = rootHeight - topDiff > height ? height : rootHeight - topDiff;
        }
        return height;
    }
    /**
     * @hidden
     * @return {?}
     */
    collapseAllRows() {
        this.hierarchicalState = [];
    }
    /**
     * @hidden
     * @param {?} record
     * @return {?}
     */
    isExpanded(record) {
        /** @type {?} */
        let inState;
        if (record.childGridsData !== undefined) {
            inState = !!this.hierarchicalState.find(v => v.rowID === record.rowID);
        }
        else {
            inState = !!this.hierarchicalState.find(v => {
                return this.primaryKey ? v.rowID === record[this.primaryKey] : v.rowID === record;
            });
        }
        return inState && this.childLayoutList.length !== 0;
    }
    /**
     * @hidden
     * @param {?} args
     * @return {?}
     */
    viewCreatedHandler(args) {
        if (this.isChildGridRecord(args.context.$implicit)) {
            /** @type {?} */
            const key = args.context.$implicit.rowID;
            this.childGridTemplates.set(key, args);
        }
    }
    /**
     * @hidden
     * @param {?} args
     * @return {?}
     */
    viewMovedHandler(args) {
        if (this.isChildGridRecord(args.context.$implicit)) {
            // view was moved, update owner in cache
            /** @type {?} */
            const key = args.context.$implicit.rowID;
            /** @type {?} */
            const cachedData = this.childGridTemplates.get(key);
            cachedData.owner = args.owner;
            this.childLayoutList.forEach((layout) => {
                /** @type {?} */
                const relatedGrid = this.hgridAPI.getChildGridByID(layout.key, args.context.$implicit.rowID);
                if (relatedGrid && relatedGrid.updateOnRender) {
                    // Detect changes if `expandChildren` has changed when the grid wasn't visible. This is for performance reasons.
                    relatedGrid.reflow();
                    relatedGrid.updateOnRender = false;
                }
            });
            /** @type {?} */
            const childGrids = this.getChildGrids(true);
            childGrids.forEach((grid) => {
                if (grid.isPercentWidth) {
                    grid.reflow();
                }
                grid.updateScrollPosition();
            });
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    updateScrollPosition() {
        /** @type {?} */
        const vScr = this.verticalScrollContainer.getVerticalScroll();
        /** @type {?} */
        const hScr = this.parentVirtDir.getHorizontalScroll();
        if (vScr) {
            vScr.scrollTop = this.scrollTop;
        }
        if (hScr) {
            hScr.scrollLeft = this.scrollLeft;
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    getPossibleColumnWidth() {
        /** @type {?} */
        let computedWidth = this.calcWidth || parseInt(this.document.defaultView.getComputedStyle(this.nativeElement).getPropertyValue('width'), 10);
        computedWidth -= this.headerHierarchyExpander.nativeElement.clientWidth;
        return super.getPossibleColumnWidth(computedWidth);
    }
    /**
     * @protected
     * @param {?=} inDeph
     * @return {?}
     */
    getChildGrids(inDeph) {
        return this.hgridAPI.getChildGrids(inDeph);
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    generateDataFields(data) {
        return super.generateDataFields(data).filter((field) => {
            /** @type {?} */
            const layoutsList = this.parentIsland ? this.parentIsland.children : this.childLayoutList;
            /** @type {?} */
            const keys = layoutsList.map((item) => item.key);
            return keys.indexOf(field) === -1;
        });
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    hg_verticalScrollHandler(event) {
        this.scrollTop = event.target.scrollTop;
    }
    /**
     * @return {?}
     */
    onContainerScroll() {
        this.hideOverlays();
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    hg_horizontalScrollHandler(event) {
        this.scrollLeft = event.target.scrollLeft;
    }
    /**
     * @private
     * @return {?}
     */
    updateParentSizes() {
        /** @type {?} */
        let currGrid = this.parent;
        while (currGrid) {
            /** @type {?} */
            const hadScrollbar = currGrid.hasVerticalSroll();
            /** @type {?} */
            const virt = currGrid.verticalScrollContainer;
            virt.recalcUpdateSizes();
            /** @type {?} */
            const offset = parseInt(virt.dc.instance._viewContainer.element.nativeElement.style.top, 10);
            /** @type {?} */
            const scr = virt.getVerticalScroll();
            scr.scrollTop = virt.getScrollForIndex(virt.state.startIndex) - offset;
            if (hadScrollbar !== currGrid.hasVerticalSroll()) {
                // If after recalculations the grid should show vertical scrollbar it should also reflow.
                currGrid.reflow();
            }
            currGrid = currGrid.parent;
        }
    }
}
IgxHierarchicalGridComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'igx-hierarchical-grid',
                template: "<igx-grid-toolbar role=\"rowgroup\" [style.width.px]=\"outerWidth\" *ngIf=\"showToolbar\" [gridID]=\"id\"\n    [displayDensity]=\"displayDensity\" #toolbar>\n</igx-grid-toolbar>\n\n<div class=\"igx-grid__thead\">\n    <div class=\"igx-grid__thead-wrapper\" role=\"rowgroup\" [style.width.px]='calcWidth + 1' #theadRow>\n        <div class=\"igx-grid__tr\" role=\"row\" [style.width.px]='calcWidth + 1'>\n            <span *ngIf=\"hasMovableColumns && draggedColumn && pinnedColumns.length <= 0\"\n                [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\" id=\"left\"\n                class=\"igx-grid__scroll-on-drag-left\"></span>\n            <span *ngIf=\"hasMovableColumns && draggedColumn && pinnedColumns.length > 0\"\n                [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\" id=\"left\"\n                class=\"igx-grid__scroll-on-drag-pinned\" [style.left.px]=\"pinnedWidth\"></span>\n            <div class=\"igx-grid__hierarchical-expander igx-grid__hierarchical-expander--header\"\n                #headerHierarchyExpander [hidden]='!hasExpandableChildren' [ngClass]=\"{\n                    'igx-grid__hierarchical-expander--push': filteringService.isFilterRowVisible,\n                    'igx-grid__hierarchical-expander--no-border': rowSelectable || rowDraggable\n                }\">\n                <igx-icon role=\"button\" fontSet=\"material\"\n                    [isActive]='hierarchicalState.length > 0 && hasExpandableChildren' (click)=\"collapseAllRows()\">unfold_less</igx-icon>\n            </div>\n            <ng-container *ngIf=\"rowDraggable\">\n                <div class=\"igx-grid__drag-indicator\" [ngClass]=\"{\n                        'igx-grid__drag-indicator--header': !rowSelectable\n                    }\" #headerDragContainer>\n                    <div style=\"visibility: hidden;\">\n                        <ng-container\n                            *ngTemplateOutlet=\"this.dragIndicatorIconTemplate ? this.dragIndicatorIconTemplate : this.dragIndicatorIconBase\">\n                        </ng-container>\n                    </div>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"showRowCheckboxes\">\n                <div class=\"igx-grid__cbx-selection\" #headerCheckboxContainer [ngClass]=\"{\n                        'igx-grid__cbx-selection--push': filteringService.isFilterRowVisible\n                    }\">\n                    <igx-checkbox [checked]=\"allRowsSelected\" (change)=\"onHeaderCheckboxClick($event, filteredData)\"\n                        disableRipple=\"true\" [aria-label]=\"headerCheckboxAriaLabel\" #headerCheckbox></igx-checkbox>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"pinnedColumns.length > 0\">\n                <ng-template ngFor let-col [ngForOf]=\"pinnedColumns | igxTopLevel\">\n                    <igx-grid-header-group [column]=\"col\" [gridID]=\"id\" [style.min-width.px]=\"getHeaderGroupWidth(col)\"\n                        [style.flex-basis.px]=\"getHeaderGroupWidth(col)\"></igx-grid-header-group>\n                </ng-template>\n            </ng-container>\n            <ng-template igxGridFor let-col [igxGridForOf]=\"unpinnedColumns | igxTopLevel\"\n                [igxForScrollOrientation]=\"'horizontal'\" [igxForScrollContainer]=\"parentVirtDir\"\n                [igxForContainerSize]='unpinnedWidth' [igxForTrackBy]='trackColumnChanges'\n                [igxForSizePropName]='\"calcPixelWidth\"' #headerContainer>\n                <igx-grid-header-group [column]=\"col\" [gridID]=\"id\" [style.min-width.px]=\"getHeaderGroupWidth(col)\"\n                    [style.flex-basis.px]=\"getHeaderGroupWidth(col)\"></igx-grid-header-group>\n            </ng-template>\n        </div>\n        <igx-grid-filtering-row #filteringRow [style.width.px]='calcWidth' *ngIf=\"filteringService.isFilterRowVisible\"\n            [column]=\"filteringService.filteredColumn\"></igx-grid-filtering-row>\n    </div>\n    <span *ngIf=\"hasMovableColumns && draggedColumn\" [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\"\n        id=\"right\" class=\"igx-grid__scroll-on-drag-right\"></span>\n    <div class=\"igx-grid__thead-thumb\" [hidden]='!hasVerticalSroll()' [style.width.px]=\"scrollWidth\"></div>\n</div>\n\n<div igxGridBody (keydown.control.c)=\"copyHandlerIE()\" (copy)=\"copyHandler($event)\" class=\"igx-grid__tbody\">\n    <div class=\"igx-grid__tbody-content\" (onDragStop)=\"selectionService.dragMode = $event\"\n        (onDragScroll)=\"dragScroll($event)\" [igxGridDragSelect]=\"selectionService.dragMode\" role=\"rowgroup\"\n        [style.height.px]='calcHeight' [style.width.px]='calcWidth + 1' #tbody (scroll)='scrollHandler($event)'>\n        <span *ngIf=\"hasMovableColumns && draggedColumn && pinnedColumns.length <= 0\"\n            [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\" id=\"left\"\n            class=\"igx-grid__scroll-on-drag-left\"></span>\n        <span *ngIf=\"hasMovableColumns && draggedColumn && pinnedColumns.length > 0\"\n            [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\" id=\"left\"\n            class=\"igx-grid__scroll-on-drag-pinned\" [style.left.px]=\"pinnedWidth\"></span>\n        <ng-template igxGridFor let-rowData [igxGridForOf]=\"data\n        | gridTransaction:id:pipeTrigger\n        | gridFiltering:filteringExpressionsTree:id:pipeTrigger\n        | gridSort:sortingExpressions:id:pipeTrigger\n        | gridHierarchicalPaging:page:perPage:id:pipeTrigger\n        | gridHierarchical:hierarchicalState:id:primaryKey:childLayoutKeys:pipeTrigger\" let-rowIndex=\"index\"\n            [igxForScrollOrientation]=\"'vertical'\" [igxForScrollContainer]='verticalScroll'\n            [igxForContainerSize]='calcHeight' [igxForItemSize]=\"renderedRowHeight\" [igxForTrackBy]='trackChanges'\n            #verticalScrollContainer (onChunkPreload)=\"dataLoading($event)\">\n            <ng-template\n                [igxTemplateOutlet]='(isHierarchicalRecord(rowData) ? hierarchical_record_template : (isChildGridRecord(rowData) && isExpanded(rowData) ? child_record_template : hierarchical_record_template))'\n                [igxTemplateOutletContext]='getContext(rowData)' (onViewCreated)='viewCreatedHandler($event)'\n                (onViewMoved)='viewMovedHandler($event)' (onCachedViewLoaded)='cachedViewLoaded($event)'></ng-template>\n            <!-- <ng-container *igxTemplateOutlet=\"(isHierarchicalRecord(rowData) ? hierarchical_record_template : (isChildGridRecord(rowData) && isExpanded(rowData) ? child_record_template : hierarchical_record_template)); context: getContext(rowData)\"></ng-container> -->\n        </ng-template>\n        <ng-template #hierarchical_record_template let-rowIndex=\"index\" let-rowData>\n            <igx-hierarchical-grid-row [gridID]=\"id\" [index]=\"rowIndex\" [rowData]=\"rowData\" #row>\n            </igx-hierarchical-grid-row>\n        </ng-template>\n        <ng-template #child_record_template let-rowIndex=\"index\" let-rowData>\n            <div style=\"overflow:auto;width: 100%;\" [attr.data-rowindex]='rowIndex' (scroll)='onContainerScroll()'\n                [ngClass]=\"{\n                'igx-grid__tr-container': true,\n                'igx-grid__tr--highlighted':isRowHighlighted(rowData)\n            }\">\n                <igx-child-grid-row *ngFor=\"let layout of childLayoutList\" [parentGridID]=\"id\" [index]=\"rowIndex\"\n                    [rowData]=\"rowData\" [layout]='layout' #row>\n                </igx-child-grid-row>\n            </div>\n        </ng-template>\n        <ng-template #summary_template let-rowIndex=\"index\" let-rowData>\n            <igx-grid-summary-row [gridID]=\"id\" [summaries]=\"rowData.summaries\" [index]=\"rowIndex\"\n                class=\"igx-grid__summaries--body\" #summaryRow>\n            </igx-grid-summary-row>\n        </ng-template>\n        <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n        <span *ngIf=\"hasMovableColumns && draggedColumn\" [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\"\n            id=\"right\" class=\"igx-grid__scroll-on-drag-right\"></span>\n        <div class=\"igx-grid__row-editing-outlet\" igxOverlayOutlet #igxRowEditingOverlayOutlet></div>\n    </div>\n    <span *ngIf=\"hasMovableColumns && draggedColumn\" [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\"\n        id=\"right\" class=\"igx-grid__scroll-on-drag-right\"></span>\n    <div [hidden]='!hasVerticalSroll()' class=\"igx-grid__tbody-scrollbar\" [style.width.px]=\"scrollWidth\"\n        [style.height.px]='calcHeight'>\n        <ng-template igxGridFor [igxGridForOf]='[]' #verticalScrollHolder></ng-template>\n    </div>\n</div>\n\n\n<div class=\"igx-grid__tfoot\" role=\"rowgroup\" [style.height.px]='summariesHeight' #tfoot>\n    <igx-grid-summary-row [style.width.px]='calcWidth' [style.height.px]='summariesHeight'\n        *ngIf=\"hasSummarizedColumns && rootSummariesEnabled\" [gridID]=\"id\"\n        [summaries]=\"id | igxGridSummaryDataPipe:summaryService.retriggerRootPipe\" [index]=\"0\"\n        class=\"igx-grid__summaries\" #summaryRow>\n    </igx-grid-summary-row>\n    <div class=\"igx-grid__tfoot-thumb\" [hidden]='!hasVerticalSroll()' [style.height.px]='summariesHeight'\n        [style.width.px]=\"scrollWidth\"></div>\n</div>\n\n<div class=\"igx-grid__scroll\" [style.height]=\"'18px'\" #scr [hidden]=\"unpinnedWidth - totalWidth >= 0\">\n    <div class=\"igx-grid__scroll-start\" [style.width.px]='pinnedWidth' [hidden]=\"pinnedWidth === 0\"></div>\n    <div class=\"igx-grid__scroll-main\" [style.width.px]='unpinnedWidth'>\n        <ng-template igxGridFor [igxGridForOf]='[]' #scrollContainer>\n        </ng-template>\n    </div>\n</div>\n\n<div class=\"igx-grid__footer\" #footer>\n    <ng-content select=\"igx-grid-footer\"></ng-content>\n    <ng-container *ngIf=\"paging && totalRecords\">\n        <ng-container\n            *ngTemplateOutlet=\"paginationTemplate ? paginationTemplate : defaultPaginator; context: {$implicit: this}\">\n        </ng-container>\n    </ng-container>\n</div>\n\n<ng-template #defaultPaginator>\n    <igx-paginator [displayDensity]=\"displayDensity\" [(page)]=\"page\"\n        [totalRecords]=\"filteredData ? filteredData.length : totalRecords\" [(perPage)]=\"perPage\">\n    </igx-paginator>\n</ng-template>\n\n<ng-template #emptyFilteredGrid>\n    <span class=\"igx-grid__tbody-message\">{{emptyFilteredGridMessage}}</span>\n</ng-template>\n\n<ng-template #defaultEmptyGrid>\n    <span class=\"igx-grid__tbody-message\">{{emptyGridMessage}}</span>\n</ng-template>\n\n<ng-template #defaultLoadingGrid>\n    <div class=\"igx-grid__loading\">\n        <igx-circular-bar [indeterminate]=\"true\">\n        </igx-circular-bar>\n    </div>\n</ng-template>\n\n\n<div *ngIf=\"rowEditable\" igxToggle>\n    <div [className]=\"bannerClass\">\n        <ng-container\n            *ngTemplateOutlet=\"rowEditContainer; context: { rowChangesCount: rowChangesCount, endEdit: endEdit.bind(this) }\">\n        </ng-container>\n    </div>\n</div>\n<ng-template #defaultRowEditText>\n    You have {{ rowChangesCount }} changes in this row\n</ng-template>\n<ng-template #defaultRowEditActions>\n    <button igxButton igxRowEditTabStop (click)=\"endEdit(false, $event)\">Cancel</button>\n    <button igxButton igxRowEditTabStop (click)=\"endEdit(true, $event)\">Done</button>\n</ng-template>\n<ng-template #defaultRowEditTemplate>\n    <div class=\"igx-banner__message\">\n        <span class=\"igx-banner__text\">\n            <ng-container\n                *ngTemplateOutlet=\"rowEditText ? rowEditText : defaultRowEditText; context: { $implicit: rowChangesCount }\">\n            </ng-container>\n        </span>\n    </div>\n    <div class=\"igx-banner__actions\">\n        <div class=\"igx-banner__row\">\n            <ng-container\n                *ngTemplateOutlet=\"rowEditActions ? rowEditActions : defaultRowEditActions; context: { $implicit: endEdit.bind(this) }\">\n            </ng-container>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #dragIndicatorIconBase>\n    <igx-icon fontSet=\"material\">drag_indicator</igx-icon>\n</ng-template>\n\n<igx-grid-column-resizer *ngIf=\"colResizingService.showResizer\"></igx-grid-column-resizer>\n<div class=\"igx-grid__outlet\" #igxFilteringOverlayOutlet igxOverlayOutlet></div>\n",
                providers: [
                    IgxGridSelectionService,
                    IgxGridCRUDService,
                    { provide: GridBaseAPIService, useClass: IgxHierarchicalGridAPIService },
                    { provide: IgxGridBaseComponent, useExisting: forwardRef(() => IgxHierarchicalGridComponent) },
                    IgxGridSummaryService,
                    IgxFilteringService,
                    IgxHierarchicalGridNavigationService,
                    IgxForOfSyncService
                ]
            }] }
];
/** @nocollapse */
IgxHierarchicalGridComponent.ctorParameters = () => [
    { type: IgxGridSelectionService },
    { type: IgxGridCRUDService },
    { type: IgxColumnResizingService },
    { type: GridBaseAPIService },
    { type: IgxHierarchicalSelectionAPIService },
    { type: undefined, decorators: [{ type: Inject, args: [IgxGridTransaction,] }] },
    { type: ElementRef },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ChangeDetectorRef },
    { type: ComponentFactoryResolver },
    { type: IterableDiffers },
    { type: ViewContainerRef },
    { type: IgxHierarchicalGridNavigationService },
    { type: IgxFilteringService },
    { type: IgxOverlayService, decorators: [{ type: Inject, args: [IgxOverlayService,] }] },
    { type: IgxGridSummaryService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
];
IgxHierarchicalGridComponent.propDecorators = {
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    data: [{ type: Input }],
    hierarchicalState: [{ type: Input }],
    expandChildren: [{ type: Input }],
    childLayoutList: [{ type: ContentChildren, args: [IgxRowIslandComponent, { read: IgxRowIslandComponent, descendants: false },] }],
    allLayoutList: [{ type: ContentChildren, args: [IgxRowIslandComponent, { read: IgxRowIslandComponent, descendants: true },] }],
    hierarchicalRecordTemplate: [{ type: ViewChild, args: ['hierarchical_record_template', { read: TemplateRef, static: true },] }],
    childTemplate: [{ type: ViewChild, args: ['child_record_template', { read: TemplateRef, static: true },] }],
    headerHierarchyExpander: [{ type: ViewChild, args: ['headerHierarchyExpander', { read: ElementRef, static: true },] }],
    templateOutlets: [{ type: ViewChildren, args: [IgxTemplateOutletDirective, { read: IgxTemplateOutletDirective },] }],
    hierarchicalRows: [{ type: ViewChildren, args: [IgxChildGridRowComponent, { read: IgxChildGridRowComponent },] }]
};
if (false) {
    /**
     * @hidden
     * @type {?}
     */
    IgxHierarchicalGridComponent.prototype.childLayoutList;
    /**
     * @hidden
     * @type {?}
     */
    IgxHierarchicalGridComponent.prototype.allLayoutList;
    /**
     * @type {?}
     * @protected
     */
    IgxHierarchicalGridComponent.prototype.hierarchicalRecordTemplate;
    /**
     * @type {?}
     * @protected
     */
    IgxHierarchicalGridComponent.prototype.childTemplate;
    /**
     * @type {?}
     * @protected
     */
    IgxHierarchicalGridComponent.prototype.headerHierarchyExpander;
    /**
     * @hidden
     * @type {?}
     */
    IgxHierarchicalGridComponent.prototype.templateOutlets;
    /**
     * @hidden
     * @type {?}
     */
    IgxHierarchicalGridComponent.prototype.hierarchicalRows;
    /**
     * @hidden
     * @type {?}
     */
    IgxHierarchicalGridComponent.prototype.childLayoutKeys;
    /**
     * @hidden
     * @type {?}
     */
    IgxHierarchicalGridComponent.prototype.highlightedRowID;
    /**
     * @hidden
     * @type {?}
     */
    IgxHierarchicalGridComponent.prototype.updateOnRender;
    /**
     * @hidden
     * @type {?}
     */
    IgxHierarchicalGridComponent.prototype.parent;
    /**
     * @type {?}
     * @private
     */
    IgxHierarchicalGridComponent.prototype._hierarchicalState;
    /**
     * @type {?}
     * @private
     */
    IgxHierarchicalGridComponent.prototype._data;
    /**
     * @type {?}
     * @private
     */
    IgxHierarchicalGridComponent.prototype._filteredData;
    /**
     * @type {?}
     * @private
     */
    IgxHierarchicalGridComponent.prototype.h_id;
    /**
     * @type {?}
     * @private
     */
    IgxHierarchicalGridComponent.prototype.childGridTemplates;
    /**
     * @type {?}
     * @private
     */
    IgxHierarchicalGridComponent.prototype.scrollTop;
    /**
     * @type {?}
     * @private
     */
    IgxHierarchicalGridComponent.prototype.scrollLeft;
    /** @type {?} */
    IgxHierarchicalGridComponent.prototype.selectionService;
    /** @type {?} */
    IgxHierarchicalGridComponent.prototype.colResizingService;
    /**
     * @type {?}
     * @protected
     */
    IgxHierarchicalGridComponent.prototype.transactionFactory;
    /** @type {?} */
    IgxHierarchicalGridComponent.prototype.document;
    /**
     * @type {?}
     * @protected
     */
    IgxHierarchicalGridComponent.prototype.overlayService;
    /** @type {?} */
    IgxHierarchicalGridComponent.prototype.summaryService;
    /**
     * @type {?}
     * @protected
     */
    IgxHierarchicalGridComponent.prototype._displayDensityOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGllcmFyY2hpY2FsLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9oaWVyYXJjaGljYWwtZ3JpZC9oaWVyYXJjaGljYWwtZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBQ0wsVUFBVSxFQUNWLFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLE1BQU0sRUFDTixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixNQUFNLEVBQ04sd0JBQXdCLEVBR3hCLFFBQVEsRUFHWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNsRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQTBCLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXhHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDakUsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUYsT0FBTyxFQUFFLHFC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LFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzhCQU12RSxZQUFZLFNBQUMsMEJBQTBCLEVBQUUsRUFBRSxJQUFJLEVBQUUsMEJBQTBCLEVBQUU7K0JBTTdFLFlBQVksU0FBQyx3QkFBd0IsRUFBRSxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRTs7Ozs7OztJQTNCMUUsdURBQ3lEOzs7OztJQUt6RCxxREFDdUQ7Ozs7O0lBRXZELGtFQUN1RDs7Ozs7SUFFdkQscURBQzBDOzs7OztJQUUxQywrREFDOEM7Ozs7O0lBSzlDLHVEQUN1Qzs7Ozs7SUFLdkMsd0RBQzZEOzs7OztJQVk3RCx1REFBNEI7Ozs7O0lBSzVCLHdEQUErQjs7Ozs7SUFLL0Isc0RBQThCOzs7OztJQUs5Qiw4Q0FBcUI7Ozs7O0lBRXJCLDBEQUFnQzs7Ozs7SUFDaEMsNkNBQWM7Ozs7O0lBQ2QscURBQTZCOzs7OztJQUM3Qiw0Q0FBb0Q7Ozs7O0lBQ3BELDBEQUFzRDs7Ozs7SUFDdEQsaURBQXNCOzs7OztJQUN0QixrREFBdUI7O0lBR25CLHdEQUFnRDs7SUFFaEQsMERBQW1EOzs7OztJQUduRCwwREFBNkQ7O0lBRzdELGdEQUFpQzs7Ozs7SUFPakMsc0RBQXNFOztJQUN0RSxzREFBNEM7Ozs7O0lBQzVDLDhEQUFpRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ29tcG9uZW50LFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LFxuICAgIGZvcndhcmRSZWYsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgVmlld0NoaWxkLFxuICAgIFZpZXdDaGlsZHJlbixcbiAgICBRdWVyeUxpc3QsXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgTmdab25lLFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIEl0ZXJhYmxlRGlmZmVycyxcbiAgICBWaWV3Q29udGFpbmVyUmVmLFxuICAgIEluamVjdCxcbiAgICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIE9wdGlvbmFsLFxuICAgIE9uSW5pdCxcbiAgICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hHcmlkQmFzZUNvbXBvbmVudCwgSWd4R3JpZFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vZ3JpZC1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcmlkQmFzZUFQSVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hIaWVyYXJjaGljYWxHcmlkQVBJU2VydmljZSB9IGZyb20gJy4vaGllcmFyY2hpY2FsLWdyaWQtYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4Um93SXNsYW5kQ29tcG9uZW50IH0gZnJvbSAnLi9yb3ctaXNsYW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hDaGlsZEdyaWRSb3dDb21wb25lbnQgfSBmcm9tICcuL2NoaWxkLWdyaWQtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hGaWx0ZXJpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vZmlsdGVyaW5nL2dyaWQtZmlsdGVyaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSURpc3BsYXlEZW5zaXR5T3B0aW9ucywgRGlzcGxheURlbnNpdHlUb2tlbiwgRGlzcGxheURlbnNpdHkgfSBmcm9tICcuLi8uLi9jb3JlL2Rpc3BsYXlEZW5zaXR5JztcbmltcG9ydCB7IElHcmlkRGF0YUJpbmRhYmxlLCBJZ3hDb2x1bW5Db21wb25lbnQsIH0gZnJvbSAnLi4vZ3JpZC9pbmRleCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJZ3hIaWVyYXJjaGljYWxTZWxlY3Rpb25BUElTZXJ2aWNlIH0gZnJvbSAnLi9zZWxlY3Rpb24nO1xuaW1wb3J0IHsgSWd4SGllcmFyY2hpY2FsR3JpZE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9oaWVyYXJjaGljYWwtZ3JpZC1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4R3JpZFN1bW1hcnlTZXJ2aWNlIH0gZnJvbSAnLi4vc3VtbWFyaWVzL2dyaWQtc3VtbWFyeS5zZXJ2aWNlJztcbmltcG9ydCB7IElneEhpZXJhcmNoaWNhbEdyaWRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9oaWVyYXJjaGljYWwtZ3JpZC1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJZ3hUZW1wbGF0ZU91dGxldERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdGVtcGxhdGUtb3V0bGV0L3RlbXBsYXRlX291dGxldC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4R3JpZFNlbGVjdGlvblNlcnZpY2UsIElneEdyaWRDUlVEU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvZ3JpZC1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgSWd4T3ZlcmxheVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBJZ3hDb2x1bW5SZXNpemluZ1NlcnZpY2UgfSBmcm9tICcuLi9ncmlkLWNvbHVtbi1yZXNpemluZy5zZXJ2aWNlJztcbmltcG9ydCB7IElneEZvck9mU3luY1NlcnZpY2UgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2Zvci1vZi9mb3Jfb2Yuc3luYy5zZXJ2aWNlJztcblxubGV0IE5FWFRfSUQgPSAwO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhpZXJhcmNoaWNhbFN0YXRlUmVjb3JkIHtcbiAgICByb3dJRDogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgICBzZWxlY3RvcjogJ2lneC1oaWVyYXJjaGljYWwtZ3JpZCcsXG4gICAgdGVtcGxhdGVVcmw6ICdoaWVyYXJjaGljYWwtZ3JpZC5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIElneEdyaWRTZWxlY3Rpb25TZXJ2aWNlLFxuICAgICAgICBJZ3hHcmlkQ1JVRFNlcnZpY2UsXG4gICAgICAgIHsgcHJvdmlkZTogR3JpZEJhc2VBUElTZXJ2aWNlLCB1c2VDbGFzczogSWd4SGllcmFyY2hpY2FsR3JpZEFQSVNlcnZpY2UgfSxcbiAgICAgICAgeyBwcm92aWRlOiBJZ3hHcmlkQmFzZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudCkgfSxcbiAgICAgICAgSWd4R3JpZFN1bW1hcnlTZXJ2aWNlLFxuICAgICAgICBJZ3hGaWx0ZXJpbmdTZXJ2aWNlLFxuICAgICAgICBJZ3hIaWVyYXJjaGljYWxHcmlkTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgICAgIElneEZvck9mU3luY1NlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnQgZXh0ZW5kcyBJZ3hIaWVyYXJjaGljYWxHcmlkQmFzZUNvbXBvbmVudFxuICAgIGltcGxlbWVudHMgSUdyaWREYXRhQmluZGFibGUsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSBgaWRgIGF0dHJpYnV0ZS4gSWYgbm90IHByb3ZpZGVkIGl0IHdpbGwgYmUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtaGllcmFyY2hpY2FsLWdyaWQgW2lkXT1cIidpZ3gtaGdyaWQtMSdcIiBbZGF0YV09XCJEYXRhXCIgW2F1dG9HZW5lcmF0ZV09XCJ0cnVlXCI+PC9pZ3gtaGllcmFyY2hpY2FsLWdyaWQ+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5oX2lkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGxldHMgeW91IGZpbGwgdGhlIGBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50YCB3aXRoIGFuIGFycmF5IG9mIGRhdGEuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtaGllcmFyY2hpY2FsLWdyaWQgW2RhdGFdPVwiRGF0YVwiIFthdXRvR2VuZXJhdGVdPVwidHJ1ZVwiPjwvaWd4LWhpZXJhcmNoaWNhbC1ncmlkPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGRhdGEodmFsdWU6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zdW1tYXJ5U2VydmljZS5jbGVhclN1bW1hcnlDYWNoZSgpO1xuICAgICAgICBpZiAodGhpcy5zaG91bGRHZW5lcmF0ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXR1cENvbHVtbnMoKTtcbiAgICAgICAgICAgIHRoaXMucmVmbG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudCAmJiAodGhpcy5oZWlnaHQgPT09IG51bGwgfHwgdGhpcy5oZWlnaHQuaW5kZXhPZignJScpICE9PSAtMSkpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBoZWlnaHQgd2lsbCBjaGFuZ2UgYmFzZWQgb24gaG93IG11Y2ggZGF0YSB0aGVyZSBpcywgcmVjYWxjdWxhdGUgc2l6ZXMgaW4gaWd4Rm9yT2YuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGFyZW50U2l6ZXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBkYXRhIHNldCB0byB0aGUgYElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgZmlsdGVyZWREYXRhID0gdGhpcy5ncmlkLmZpbHRlcmVkRGF0YTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZGF0YSgpOiBhbnlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogU2V0cyB0aGUgc3RhdGUgb2YgdGhlIGBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50YCBjb250YWluaW5nIHdoaWNoIHJvd3MgYXJlIGV4cGFuZGVkLlxuICAgICogYGBgdHlwZXNjcmlwdFxuICAgICogdGhpcy5ncmlkU3RhdGUgPSBbeyByb3dJRDogMSB9LCB7IHJvd0lEOiA0fV07XG4gICAgKiBgYGBcbiAgICAqIGBgYGh0bWxcbiAgICAqIDxpZ3gtaGllcmFyY2hpY2FsLWdyaWQgW3ByaW1hcnlLZXldPVwiJ0lEJ1wiIFtkYXRhXT1cIkRhdGFcIiBbYXV0b0dlbmVyYXRlXT1cImZhbHNlXCIgW2hpZXJhcmNoaWNhbFN0YXRlXT1cImhncmlkU3RhdGVcIj5cbiAgICAqICAgICAgPGlneC1jb2x1bW4gZmllbGQ9XCJJRFwiICBbZGF0YVR5cGVdPSdudW1iZXInPjwvaWd4LWNvbHVtbj5cbiAgICAqICAgICAgPGlneC1jb2x1bW4gZmllbGQ9XCJQcm9kdWN0XCIgIFtkYXRhVHlwZV09J3N0cmluZyc+PC9pZ3gtY29sdW1uPlxuICAgICogICAgICA8aWd4LWNvbHVtbiBmaWVsZD1cIkRlc2NyaXB0aW9uXCIgIFtkYXRhVHlwZV09J3N0cmluZyc+PC9pZ3gtY29sdW1uPlxuICAgICogPC9pZ3gtaGllcmFyY2hpY2FsLWdyaWQ+XG4gICAgKiBgYGBcbiAgICAqIEBtZW1iZXJvZiBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50XG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaGllcmFyY2hpY2FsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oaWVyYXJjaGljYWxTdGF0ZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBoaWVyYXJjaGljYWxTdGF0ZSh2YWwpIHtcbiAgICAgICAgdGhpcy5faGllcmFyY2hpY2FsU3RhdGUgPSB2YWw7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBhcmVudFNpemVzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgYW4gYXJyYXkgb2Ygb2JqZWN0cyBjb250YWluaW5nIHRoZSBmaWx0ZXJlZCBkYXRhIGluIHRoZSBgSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZ3JpZC5maWx0ZXJlZERhdGEgPSBbe1xuICAgICAqICAgICAgIElEOiAxLFxuICAgICAqICAgICAgIE5hbWU6IFwiQVwiXG4gICAgICogfV07XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGZpbHRlcmVkRGF0YSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9maWx0ZXJlZERhdGEgPSB2YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5yb3dTZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUhlYWRlckNoZWNrYm94U3RhdHVzT25GaWx0ZXIodGhpcy5fZmlsdGVyZWREYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2Ygb2JqZWN0cyBjb250YWluaW5nIHRoZSBmaWx0ZXJlZCBkYXRhIGluIHRoZSBgSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBmaWx0ZXJlZERhdGEgPSB0aGlzLmdyaWQuZmlsdGVyZWREYXRhO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldCBmaWx0ZXJlZERhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJlZERhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBpZiBhbGwgaW1tZWRpYXRlIGNoaWxkcmVuIG9mIHRoZSBgSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudGAgc2hvdWxkIGJlIGV4cGFuZGVkL2NvbGxhcHNlZC5cbiAgICAgKiBEZWZ1bHQgdmFsdWUgaXMgZmFsc2UuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtaGllcmFyY2hpY2FsLWdyaWQgW2lkXT1cIidpZ3gtZ3JpZC0xJ1wiIFtkYXRhXT1cIkRhdGFcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIiBbZXhwYW5kQ2hpbGRyZW5dPVwidHJ1ZVwiPjwvaWd4LWhpZXJhcmNoaWNhbC1ncmlkPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBzZXQgZXhwYW5kQ2hpbGRyZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fZXhwYW5kQ2hpbGRyZW4gPSB2YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmIHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5oaWVyYXJjaGljYWxTdGF0ZSA9IHRoaXMuZGF0YS5tYXAoKHJlYykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHJvd0lEOiB0aGlzLnByaW1hcnlLZXkgPyByZWNbdGhpcy5wcmltYXJ5S2V5XSA6IHJlYyB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmhpZXJhcmNoaWNhbFN0YXRlID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGlmIGFsbCBpbW1lZGlhdGUgY2hpbGRyZW4gb2YgdGhlIGBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50YCBwcmV2aW91c2x5IGhhdmUgYmVlbiBzZXQgdG8gYmUgZXhwYW5kZWQvY29sbGFwc2VkLlxuICAgICAqIElmIHByZXZpb3VzbHkgc2V0IGFuZCBzb21lIHJvd3MgaGF2ZSBiZWVuIG1hbnVhbGx5IGV4cGFuZGVkL2NvbGxhcHNlZCBpdCB3aWxsIHN0aWxsIHJldHVybiB0aGUgbGFzdCBzZXQgdmFsdWUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGV4cGFuZGVkID0gdGhpcy5ncmlkLmV4cGFuZENoaWxkcmVuO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGV4cGFuZENoaWxkcmVuKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhwYW5kQ2hpbGRyZW47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHBhcmVudCByb3cuIEl0IG1heSBiZSBhIGBzdHJpbmdgIG9yIGBudW1iZXJgIGlmIGBwcmltYXJ5S2V5YCBvZiB0aGVcbiAgICAgKiBwYXJlbnQgZ3JpZCBpcyBzZXQgb3IgYW4gb2JqZWN0IHJlZmVyZW5jZSBvZiB0aGUgcGFyZW50IHJlY29yZCBvdGhlcndpc2UuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGZvcmVpZ25LZXkgPSB0aGlzLmdyaWQuZm9yZWlnbktleTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZm9yZWlnbktleSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmhncmlkQVBJLmdldFBhcmVudFJvd0lkKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkcmVuKElneFJvd0lzbGFuZENvbXBvbmVudCwgeyByZWFkOiBJZ3hSb3dJc2xhbmRDb21wb25lbnQsIGRlc2NlbmRhbnRzOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBjaGlsZExheW91dExpc3Q6IFF1ZXJ5TGlzdDxJZ3hSb3dJc2xhbmRDb21wb25lbnQ+O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGRyZW4oSWd4Um93SXNsYW5kQ29tcG9uZW50LCB7IHJlYWQ6IElneFJvd0lzbGFuZENvbXBvbmVudCwgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgICBwdWJsaWMgYWxsTGF5b3V0TGlzdDogUXVlcnlMaXN0PElneFJvd0lzbGFuZENvbXBvbmVudD47XG5cbiAgICBAVmlld0NoaWxkKCdoaWVyYXJjaGljYWxfcmVjb3JkX3RlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGhpZXJhcmNoaWNhbFJlY29yZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnY2hpbGRfcmVjb3JkX3RlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGNoaWxkVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdoZWFkZXJIaWVyYXJjaHlFeHBhbmRlcicsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGhlYWRlckhpZXJhcmNoeUV4cGFuZGVyOiBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGRyZW4oSWd4VGVtcGxhdGVPdXRsZXREaXJlY3RpdmUsIHsgcmVhZDogSWd4VGVtcGxhdGVPdXRsZXREaXJlY3RpdmUgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVPdXRsZXRzOiBRdWVyeUxpc3Q8YW55PjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkcmVuKElneENoaWxkR3JpZFJvd0NvbXBvbmVudCwgeyByZWFkOiBJZ3hDaGlsZEdyaWRSb3dDb21wb25lbnQgfSlcbiAgICBwdWJsaWMgaGllcmFyY2hpY2FsUm93czogUXVlcnlMaXN0PElneENoaWxkR3JpZFJvd0NvbXBvbmVudD47XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IGhhc0V4cGFuZGFibGVDaGlsZHJlbigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5jaGlsZExheW91dEtleXMubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2hpbGRMYXlvdXRLZXlzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGhpZ2hsaWdodGVkUm93SUQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGVPblJlbmRlciA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBwYXJlbnQgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfaGllcmFyY2hpY2FsU3RhdGUgPSBbXTtcbiAgICBwcml2YXRlIF9kYXRhO1xuICAgIHByaXZhdGUgX2ZpbHRlcmVkRGF0YSA9IG51bGw7XG4gICAgcHJpdmF0ZSBoX2lkID0gYGlneC1oaWVyYXJjaGljYWwtZ3JpZC0ke05FWFRfSUQrK31gO1xuICAgIHByaXZhdGUgY2hpbGRHcmlkVGVtcGxhdGVzOiBNYXA8YW55LCBhbnk+ID0gbmV3IE1hcCgpO1xuICAgIHByaXZhdGUgc2Nyb2xsVG9wID0gMDtcbiAgICBwcml2YXRlIHNjcm9sbExlZnQgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBzZWxlY3Rpb25TZXJ2aWNlOiBJZ3hHcmlkU2VsZWN0aW9uU2VydmljZSxcbiAgICAgICAgY3J1ZFNlcnZpY2U6IElneEdyaWRDUlVEU2VydmljZSxcbiAgICAgICAgcHVibGljIGNvbFJlc2l6aW5nU2VydmljZTogSWd4Q29sdW1uUmVzaXppbmdTZXJ2aWNlLFxuICAgICAgICBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4sXG4gICAgICAgIHNlbGVjdGlvbjogSWd4SGllcmFyY2hpY2FsU2VsZWN0aW9uQVBJU2VydmljZSxcbiAgICAgICAgQEluamVjdChJZ3hHcmlkVHJhbnNhY3Rpb24pIHByb3RlY3RlZCB0cmFuc2FjdGlvbkZhY3Rvcnk6IGFueSxcbiAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgem9uZTogTmdab25lLFxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwdWJsaWMgZG9jdW1lbnQsXG4gICAgICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgIGRpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcbiAgICAgICAgdmlld1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgbmF2aWdhdGlvbjogSWd4SGllcmFyY2hpY2FsR3JpZE5hdmlnYXRpb25TZXJ2aWNlLFxuICAgICAgICBmaWx0ZXJpbmdTZXJ2aWNlOiBJZ3hGaWx0ZXJpbmdTZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KElneE92ZXJsYXlTZXJ2aWNlKSBwcm90ZWN0ZWQgb3ZlcmxheVNlcnZpY2U6IElneE92ZXJsYXlTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgc3VtbWFyeVNlcnZpY2U6IElneEdyaWRTdW1tYXJ5U2VydmljZSxcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChEaXNwbGF5RGVuc2l0eVRva2VuKSBwcm90ZWN0ZWQgX2Rpc3BsYXlEZW5zaXR5T3B0aW9uczogSURpc3BsYXlEZW5zaXR5T3B0aW9ucykge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIHNlbGVjdGlvblNlcnZpY2UsXG4gICAgICAgICAgICBjcnVkU2VydmljZSxcbiAgICAgICAgICAgIGdyaWRBUEksXG4gICAgICAgICAgICBzZWxlY3Rpb24sXG4gICAgICAgICAgICB0eXBlb2YgdHJhbnNhY3Rpb25GYWN0b3J5ID09PSAnZnVuY3Rpb24nID8gdHJhbnNhY3Rpb25GYWN0b3J5KCkgOiB0cmFuc2FjdGlvbkZhY3RvcnksXG4gICAgICAgICAgICBlbGVtZW50UmVmLFxuICAgICAgICAgICAgem9uZSxcbiAgICAgICAgICAgIGRvY3VtZW50LFxuICAgICAgICAgICAgY2RyLFxuICAgICAgICAgICAgcmVzb2x2ZXIsXG4gICAgICAgICAgICBkaWZmZXJzLFxuICAgICAgICAgICAgdmlld1JlZixcbiAgICAgICAgICAgIG5hdmlnYXRpb24sXG4gICAgICAgICAgICBmaWx0ZXJpbmdTZXJ2aWNlLFxuICAgICAgICAgICAgb3ZlcmxheVNlcnZpY2UsXG4gICAgICAgICAgICBzdW1tYXJ5U2VydmljZSxcbiAgICAgICAgICAgIF9kaXNwbGF5RGVuc2l0eU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmhncmlkQVBJID0gPElneEhpZXJhcmNoaWNhbEdyaWRBUElTZXJ2aWNlPmdyaWRBUEk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl90cmFuc2FjdGlvbnMgPSB0aGlzLnBhcmVudElzbGFuZCA/IHRoaXMucGFyZW50SXNsYW5kLnRyYW5zYWN0aW9ucyA6IHRoaXMuX3RyYW5zYWN0aW9ucztcbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcbiAgICAgICAgdGhpcy52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGdfdmVydGljYWxTY3JvbGxIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnBhcmVudFZpcnREaXIuZ2V0SG9yaXpvbnRhbFNjcm9sbCgpLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGdfaG9yaXpvbnRhbFNjcm9sbEhhbmRsZXIuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kQ2hpbGRyZW4gJiYgdGhpcy5kYXRhICYmIHRoaXMuaGllcmFyY2hpY2FsU3RhdGUubGVuZ3RoICE9PSB0aGlzLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmhpZXJhcmNoaWNhbFN0YXRlID0gdGhpcy5kYXRhLm1hcCgocmVjKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcm93SUQ6IHRoaXMucHJpbWFyeUtleSA/IHJlY1t0aGlzLnByaW1hcnlLZXldIDogcmVjIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmVydGljYWxTY3JvbGxDb250YWluZXIub25CZWZvcmVWaWV3RGVzdHJveWVkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKHZpZXcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0RhdGEgPSB2aWV3LmNvbnRleHQuJGltcGxpY2l0O1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDaGlsZEdyaWRSZWNvcmQocm93RGF0YSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWNoZWREYXRhID0gdGhpcy5jaGlsZEdyaWRUZW1wbGF0ZXMuZ2V0KHJvd0RhdGEucm93SUQpO1xuICAgICAgICAgICAgICAgIGlmIChjYWNoZWREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRtbHBPdXRsZXQgPSBjYWNoZWREYXRhLm93bmVyO1xuICAgICAgICAgICAgICAgICAgICB0bWxwT3V0bGV0Ll92aWV3Q29udGFpbmVyUmVmLmRldGFjaCgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5fZGlzcGxheURlbnNpdHkgPSB0aGlzLnJvb3RHcmlkLl9kaXNwbGF5RGVuc2l0eTtcbiAgICAgICAgICAgIHRoaXMucm9vdEdyaWQub25EZW5zaXR5Q2hhbmdlZC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXNwbGF5RGVuc2l0eSA9IHRoaXMucm9vdEdyaWQuX2Rpc3BsYXlEZW5zaXR5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLm5hdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZmxvdygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVPblJlbmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jaGlsZExheW91dEtleXMgPSB0aGlzLnBhcmVudElzbGFuZC5jaGlsZHJlbi5tYXAoKGl0ZW0pID0+IGl0ZW0ua2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG9vbGJhckN1c3RvbUNvbnRlbnRUZW1wbGF0ZXMgPSB0aGlzLnBhcmVudElzbGFuZCA/XG4gICAgICAgICAgICB0aGlzLnBhcmVudElzbGFuZC50b29sYmFyQ3VzdG9tQ29udGVudFRlbXBsYXRlcyA6XG4gICAgICAgICAgICB0aGlzLnRvb2xiYXJDdXN0b21Db250ZW50VGVtcGxhdGVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgb3V0bGV0RGlyZWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb290R3JpZC5fb3V0bGV0RGlyZWN0aXZlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHBhcmVudFJvd091dGxldERpcmVjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMgPT09IHRoaXMucm9vdEdyaWQgPyBudWxsIDogdGhpcy5yb290R3JpZC5yb3dFZGl0aW5nT3V0bGV0RGlyZWN0aXZlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ29sdW1uTGlzdChmYWxzZSk7XG4gICAgICAgIHRoaXMuY2hpbGRMYXlvdXRLZXlzID0gdGhpcy5wYXJlbnQgP1xuICAgICAgICB0aGlzLnBhcmVudElzbGFuZC5jaGlsZHJlbi5tYXAoKGl0ZW0pID0+IGl0ZW0ua2V5KSA6XG4gICAgICAgIHRoaXMuY2hpbGRMYXlvdXRLZXlzID0gdGhpcy5jaGlsZExheW91dExpc3QubWFwKChpdGVtKSA9PiBpdGVtLmtleSk7XG4gICAgICAgIHRoaXMuY2hpbGRMYXlvdXRMaXN0Lm5vdGlmeU9uQ2hhbmdlcygpO1xuICAgICAgICB0aGlzLmNoaWxkTGF5b3V0TGlzdC5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMub25Sb3dJc2xhbmRDaGFuZ2UoKSk7XG4gICAgICAgIHN1cGVyLm5nQWZ0ZXJDb250ZW50SW5pdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQGhpZGRlblxuICAgICovXG4gICAgcHVibGljIG9uUm93SXNsYW5kQ2hhbmdlKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRMYXlvdXRLZXlzID0gdGhpcy5wYXJlbnRJc2xhbmQuY2hpbGRyZW4uZmlsdGVyKGl0ZW0gPT4gIShpdGVtIGFzIGFueSkuX2Rlc3Ryb3llZCkubWFwKChpdGVtKSA9PiBpdGVtLmtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkTGF5b3V0S2V5cyA9IHRoaXMuY2hpbGRMYXlvdXRMaXN0LmZpbHRlcihpdGVtID0+ICEoaXRlbSBhcyBhbnkpLl9kZXN0cm95ZWQpLm1hcCgoaXRlbSkgPT4gaXRlbS5rZXkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKHRoaXMuY2RyIGFzIGFueSkuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Db2x1bW5zQ2hhbmdlZChjaGFuZ2U6IFF1ZXJ5TGlzdDxJZ3hDb2x1bW5Db21wb25lbnQ+KSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ29sdW1uTGlzdCgpO1xuICAgICAgICBjb25zdCBjb2xzID0gY2hhbmdlLmZpbHRlcihjID0+IGMuZ3JpZCA9PT0gdGhpcyk7XG4gICAgICAgIGlmIChjb2xzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY29sdW1uTGlzdC5yZXNldChjb2xzKTtcbiAgICAgICAgICAgIHN1cGVyLm9uQ29sdW1uc0NoYW5nZWQodGhpcy5jb2x1bW5MaXN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQ29sdW1uTGlzdChyZWNhbGNDb2xTaXplcyA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgY2hpbGRMYXlvdXRzID0gdGhpcy5wYXJlbnQgPyB0aGlzLmNoaWxkTGF5b3V0TGlzdCA6IHRoaXMuYWxsTGF5b3V0TGlzdDtcbiAgICAgICAgY29uc3QgbmVzdGVkQ29sdW1ucyA9IGNoaWxkTGF5b3V0cy5tYXAoKGxheW91dCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGxheW91dC5jb2x1bW5MaXN0LnRvQXJyYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNvbHNBcnJheSA9IFtdLmNvbmNhdC5hcHBseShbXSwgbmVzdGVkQ29sdW1ucyk7XG4gICAgICAgIGNvbnN0IGNvbExlbmd0aCA9IHRoaXMuY29sdW1uTGlzdC5sZW5ndGg7XG4gICAgICAgIGlmIChjb2xzQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgdG9wQ29scyA9IHRoaXMuY29sdW1uTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sc0FycmF5LmluZGV4T2YoaXRlbSkgPT09IC0xO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbkxpc3QucmVzZXQodG9wQ29scyk7XG4gICAgICAgICAgICBpZiAocmVjYWxjQ29sU2l6ZXMgJiYgdGhpcy5jb2x1bW5MaXN0Lmxlbmd0aCAhPT0gY29sTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVHcmlkU2l6ZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAoIXRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLmhncmlkQVBJLmdldENoaWxkR3JpZHModHJ1ZSkuZm9yRWFjaCgoZ3JpZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZ3JpZC5jaGlsZFJvdy5jZHIuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQuY2hpbGRSb3cuY2RyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wYXJlbnQgJiYgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIGluIGNhc2Ugc2VsZWN0aW9uIGlzIGluIGRlc3Ryb3llZCBjaGlsZCBncmlkLCBzZWxlY3Rpb24gc2hvdWxkIGJlIGNsZWFyZWQuXG4gICAgICAgICAgICB0aGlzLl9jbGVhclNlbGV0aW9uSGlnaGxpZ2h0cygpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2xlYXJTZWxldGlvbkhpZ2hsaWdodHMoKSB7XG4gICAgICAgIFt0aGlzLnJvb3RHcmlkLCAuLi50aGlzLnJvb3RHcmlkLmdldENoaWxkR3JpZHModHJ1ZSldLmZvckVhY2goZ3JpZCA9PiB7XG4gICAgICAgICAgICBncmlkLnNlbGVjdGlvblNlcnZpY2UuY2xlYXIoKTtcbiAgICAgICAgICAgIGdyaWQuc2VsZWN0aW9uU2VydmljZS5hY3RpdmVFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGdyaWQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpZ3gtZ3JpZF9fdHItLWhpZ2hsaWdodGVkJyk7XG4gICAgICAgICAgICBncmlkLmhpZ2hsaWdodGVkUm93SUQgPSBudWxsO1xuICAgICAgICAgICAgZ3JpZC5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQGhpZGRlblxuICAgICovXG4gICAgcHVibGljIGdldCB0ZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyZWREYXRhICYmIHRoaXMuZmlsdGVyZWREYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1wdHlHcmlkVGVtcGxhdGUgPyB0aGlzLmVtcHR5R3JpZFRlbXBsYXRlIDogdGhpcy5lbXB0eUZpbHRlcmVkR3JpZFRlbXBsYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNMb2FkaW5nICYmICghdGhpcy5kYXRhIHx8IHRoaXMuZGF0YUxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRpbmdHcmlkVGVtcGxhdGUgPyB0aGlzLmxvYWRpbmdHcmlkVGVtcGxhdGUgOiB0aGlzLmxvYWRpbmdHcmlkRGVmYXVsdFRlbXBsYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGF0YUxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1wdHlHcmlkVGVtcGxhdGUgPyB0aGlzLmVtcHR5R3JpZFRlbXBsYXRlIDogdGhpcy5lbXB0eUdyaWREZWZhdWx0VGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogR2V0cyB0aGUgY29tYmluZWQgd2lkdGggb2YgdGhlIGNvbHVtbnMgdGhhdCBhcmUgc3BlY2lmaWMgdG8gdGhlIGVuYWJsZWQgZ3JpZCBmZWF0dXJlcy4gVGhleSBhcmUgZml4ZWQuXG4gICAgICogVE9ETzogUmVtb3ZlIGZvciBBbmd1bGFyIDguIENhbGxpbmcgcGFyZW50IGNsYXNzIGdldHRlciB1c2luZyBzdXBlciBpcyBub3Qgc3VwcG9ydGVkIGZvciBub3cuXG4gICAgICovXG4gICAgcHVibGljIGdldEZlYXR1cmVDb2x1bW5zV2lkdGgoKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IHN1cGVyLmdldEZlYXR1cmVDb2x1bW5zV2lkdGgoKTtcblxuICAgICAgICBpZiAodGhpcy5oYXNFeHBhbmRhYmxlQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHdpZHRoICs9IHRoaXMuaGVhZGVySGllcmFyY2h5RXhwYW5kZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCB8fCB0aGlzLmdldERlZmF1bHRFeHBhbmRlcldpZHRoKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXREZWZhdWx0RXhwYW5kZXJXaWR0aCgpOiBudW1iZXIge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuZGlzcGxheURlbnNpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgRGlzcGxheURlbnNpdHkuY29zeTpcbiAgICAgICAgICAgICAgICByZXR1cm4gNTc7XG4gICAgICAgICAgICBjYXNlIERpc3BsYXlEZW5zaXR5LmNvbXBhY3Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDQ5O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gNzI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGlzUm93SGlnaGxpZ2h0ZWQocm93RGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaWdobGlnaHRlZFJvd0lEID09PSByb3dEYXRhLnJvd0lEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNIaWVyYXJjaGljYWxSZWNvcmQocmVjb3JkOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRMYXlvdXRMaXN0Lmxlbmd0aCAhPT0gMCAmJiByZWNvcmRbdGhpcy5jaGlsZExheW91dExpc3QuZmlyc3Qua2V5XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGlzQ2hpbGRHcmlkUmVjb3JkKHJlY29yZDogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIC8vIENhbiBiZSBudWxsIHdoZW4gdGhlcmUgaXMgZGVmaW5lZCBsYXlvdXQgYnV0IG5vIGNoaWxkIGRhdGEgd2FzIGZvdW5kXG4gICAgICAgIHJldHVybiByZWNvcmQuY2hpbGRHcmlkc0RhdGEgIT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHRyYWNrQ2hhbmdlcyhpbmRleCwgcmVjKSB7XG4gICAgICAgIGlmIChyZWMuY2hpbGRHcmlkc0RhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gaWYgaXMgY2hpbGQgcmVjXG4gICAgICAgICAgICByZXR1cm4gcmVjLnJvd0lEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDb250ZXh0KHJvd0RhdGEpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy5pc0NoaWxkR3JpZFJlY29yZChyb3dEYXRhKSkge1xuICAgICAgICAgICAgY29uc3QgY2FjaGVkRGF0YSA9IHRoaXMuY2hpbGRHcmlkVGVtcGxhdGVzLmdldChyb3dEYXRhLnJvd0lEKTtcbiAgICAgICAgICAgIGlmIChjYWNoZWREYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlldyA9IGNhY2hlZERhdGEudmlldztcbiAgICAgICAgICAgICAgICBjb25zdCB0bWxwT3V0bGV0ID0gY2FjaGVkRGF0YS5vd25lcjtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAkaW1wbGljaXQ6IHJvd0RhdGEsXG4gICAgICAgICAgICAgICAgICAgIG1vdmVWaWV3OiB2aWV3LFxuICAgICAgICAgICAgICAgICAgICBvd25lcjogdG1scE91dGxldCxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2YuaW5kZXhPZihyb3dEYXRhKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvd0lEID0gdGhpcy5wcmltYXJ5S2V5ID8gcm93RGF0YS5yb3dJRCA6IHRoaXMuZGF0YS5pbmRleE9mKHJvd0RhdGEucm93SUQpO1xuICAgICAgICAgICAgICAgIC8vIGNoaWxkIHJvd3MgY29udGFpbiB1bmlxdWUgZ3JpZHMsIGhlbmNlIHNob3VsZCBoYXZlIHVuaXF1ZSB0ZW1wbGF0ZXNcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAkaW1wbGljaXQ6IHJvd0RhdGEsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlSUQ6ICdjaGlsZFJvdy0nICsgcm93SUQsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLmluZGV4T2Yocm93RGF0YSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAkaW1wbGljaXQ6IHJvd0RhdGEsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVJRDogJ2RhdGFSb3cnLFxuICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLmluZGV4T2Yocm93RGF0YSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBwdWJsaWMgZ2V0IHJvb3RHcmlkKCkge1xuICAgICAgICBsZXQgY3VyckdyaWQgPSB0aGlzO1xuICAgICAgICB3aGlsZSAoY3VyckdyaWQucGFyZW50KSB7XG4gICAgICAgICAgICBjdXJyR3JpZCA9IGN1cnJHcmlkLnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VyckdyaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICovXG4gICAgcHJvdGVjdGVkIGluaXRDb2x1bW5zKGNvbGxlY3Rpb246IFF1ZXJ5TGlzdDxJZ3hDb2x1bW5Db21wb25lbnQ+LCBjYjogRnVuY3Rpb24gPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0NvbHVtbkxheW91dHMpIHtcbiAgICAgICAgICAgIC8vIGludmFsaWQgY29uZmlndXJhdGlvbiAtIGhpZXJhcmNoaWNhbCBncmlkIHNob3VsZCBub3QgYWxsb3cgY29sdW1uIGxheW91dHNcbiAgICAgICAgICAgIC8vIHJlbW92ZSBjb2x1bW4gbGF5b3V0c1xuICAgICAgICAgICAgY29uc3Qgbm9uQ29sdW1uTGF5b3V0Q29sdW1ucyA9IHRoaXMuY29sdW1uTGlzdC5maWx0ZXIoKGNvbCkgPT4gIWNvbC5jb2x1bW5MYXlvdXQgJiYgIWNvbC5jb2x1bW5MYXlvdXRDaGlsZCk7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbkxpc3QucmVzZXQobm9uQ29sdW1uTGF5b3V0Q29sdW1ucyk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuaW5pdENvbHVtbnMoY29sbGVjdGlvbiwgY2IpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBHZXRzIHRoZSB2aXNpYmxlIGNvbnRlbnQgaGVpZ2h0IHRoYXQgaW5jbHVkZXMgaGVhZGVyICsgdGJvZHkgKyBmb290ZXIuXG4gICAgICogRm9yIGhpZXJhcmNoaWNhbCBjaGlsZCBncmlkIGl0IG1heSBiZSBzY3JvbGxlZCBhbmQgbm90IGZ1bGx5IHZpc2libGUuXG4gICAgICovXG4gICAgcHVibGljIGdldFZpc2libGVDb250ZW50SGVpZ2h0KCkge1xuICAgICAgICBsZXQgaGVpZ2h0ID0gc3VwZXIuZ2V0VmlzaWJsZUNvbnRlbnRIZWlnaHQoKTtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICBjb25zdCByb290SGVpZ2h0ID0gdGhpcy5yb290R3JpZC5nZXRWaXNpYmxlQ29udGVudEhlaWdodCgpO1xuICAgICAgICAgICAgY29uc3QgdG9wRGlmZiA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB0aGlzLnJvb3RHcmlkLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICAgICAgaGVpZ2h0ID0gcm9vdEhlaWdodCAtIHRvcERpZmYgPiBoZWlnaHQgPyBoZWlnaHQgOiByb290SGVpZ2h0IC0gdG9wRGlmZjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIHB1YmxpYyBjb2xsYXBzZUFsbFJvd3MoKSB7XG4gICAgICAgIHRoaXMuaGllcmFyY2hpY2FsU3RhdGUgPSBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGlzRXhwYW5kZWQocmVjb3JkOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGluU3RhdGU7XG4gICAgICAgIGlmIChyZWNvcmQuY2hpbGRHcmlkc0RhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaW5TdGF0ZSA9ICEhdGhpcy5oaWVyYXJjaGljYWxTdGF0ZS5maW5kKHYgPT4gdi5yb3dJRCA9PT0gcmVjb3JkLnJvd0lEKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluU3RhdGUgPSAhIXRoaXMuaGllcmFyY2hpY2FsU3RhdGUuZmluZCh2ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcmltYXJ5S2V5ID8gdi5yb3dJRCA9PT0gcmVjb3JkW3RoaXMucHJpbWFyeUtleV0gOiB2LnJvd0lEID09PSByZWNvcmQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5TdGF0ZSAmJiB0aGlzLmNoaWxkTGF5b3V0TGlzdC5sZW5ndGggIT09IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyB2aWV3Q3JlYXRlZEhhbmRsZXIoYXJncykge1xuICAgICAgICBpZiAodGhpcy5pc0NoaWxkR3JpZFJlY29yZChhcmdzLmNvbnRleHQuJGltcGxpY2l0KSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gYXJncy5jb250ZXh0LiRpbXBsaWNpdC5yb3dJRDtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRHcmlkVGVtcGxhdGVzLnNldChrZXksIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyB2aWV3TW92ZWRIYW5kbGVyKGFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDaGlsZEdyaWRSZWNvcmQoYXJncy5jb250ZXh0LiRpbXBsaWNpdCkpIHtcbiAgICAgICAgICAgIC8vIHZpZXcgd2FzIG1vdmVkLCB1cGRhdGUgb3duZXIgaW4gY2FjaGVcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGFyZ3MuY29udGV4dC4kaW1wbGljaXQucm93SUQ7XG4gICAgICAgICAgICBjb25zdCBjYWNoZWREYXRhID0gdGhpcy5jaGlsZEdyaWRUZW1wbGF0ZXMuZ2V0KGtleSk7XG4gICAgICAgICAgICBjYWNoZWREYXRhLm93bmVyID0gYXJncy5vd25lcjtcblxuICAgICAgICAgICAgdGhpcy5jaGlsZExheW91dExpc3QuZm9yRWFjaCgobGF5b3V0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVsYXRlZEdyaWQgPSB0aGlzLmhncmlkQVBJLmdldENoaWxkR3JpZEJ5SUQobGF5b3V0LmtleSwgYXJncy5jb250ZXh0LiRpbXBsaWNpdC5yb3dJRCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlbGF0ZWRHcmlkICYmIHJlbGF0ZWRHcmlkLnVwZGF0ZU9uUmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIERldGVjdCBjaGFuZ2VzIGlmIGBleHBhbmRDaGlsZHJlbmAgaGFzIGNoYW5nZWQgd2hlbiB0aGUgZ3JpZCB3YXNuJ3QgdmlzaWJsZS4gVGhpcyBpcyBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAgICAgICAgICAgICAgICAgICAgcmVsYXRlZEdyaWQucmVmbG93KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlbGF0ZWRHcmlkLnVwZGF0ZU9uUmVuZGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoaWxkR3JpZHMgPSB0aGlzLmdldENoaWxkR3JpZHModHJ1ZSk7XG4gICAgICAgICAgICBjaGlsZEdyaWRzLmZvckVhY2goKGdyaWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZ3JpZC5pc1BlcmNlbnRXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICBncmlkLnJlZmxvdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBncmlkLnVwZGF0ZVNjcm9sbFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlU2Nyb2xsUG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnN0IHZTY3IgPSB0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmdldFZlcnRpY2FsU2Nyb2xsKCk7XG4gICAgICAgIGNvbnN0IGhTY3IgPSB0aGlzLnBhcmVudFZpcnREaXIuZ2V0SG9yaXpvbnRhbFNjcm9sbCgpO1xuICAgICAgICBpZiAodlNjcikge1xuICAgICAgICAgICAgdlNjci5zY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFRvcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaFNjcikge1xuICAgICAgICAgICAgaFNjci5zY3JvbGxMZWZ0ID0gdGhpcy5zY3JvbGxMZWZ0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRQb3NzaWJsZUNvbHVtbldpZHRoKCkge1xuICAgICAgICBsZXQgY29tcHV0ZWRXaWR0aCA9IHRoaXMuY2FsY1dpZHRoIHx8IHBhcnNlSW50KFxuICAgICAgICAgICAgdGhpcy5kb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHRoaXMubmF0aXZlRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKSwgMTApO1xuICAgICAgICBjb21wdXRlZFdpZHRoIC09IHRoaXMuaGVhZGVySGllcmFyY2h5RXhwYW5kZXIubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldFBvc3NpYmxlQ29sdW1uV2lkdGgoY29tcHV0ZWRXaWR0aCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldENoaWxkR3JpZHMoaW5EZXBoPzogYm9vbGVhbikge1xuICAgICAgICByZXR1cm4gdGhpcy5oZ3JpZEFQSS5nZXRDaGlsZEdyaWRzKGluRGVwaCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdlbmVyYXRlRGF0YUZpZWxkcyhkYXRhOiBhbnlbXSk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdlbmVyYXRlRGF0YUZpZWxkcyhkYXRhKS5maWx0ZXIoKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYXlvdXRzTGlzdCA9IHRoaXMucGFyZW50SXNsYW5kID8gdGhpcy5wYXJlbnRJc2xhbmQuY2hpbGRyZW4gOiB0aGlzLmNoaWxkTGF5b3V0TGlzdDtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBsYXlvdXRzTGlzdC5tYXAoKGl0ZW0pID0+IGl0ZW0ua2V5KTtcbiAgICAgICAgICAgIHJldHVybiBrZXlzLmluZGV4T2YoZmllbGQpID09PSAtMTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoZ192ZXJ0aWNhbFNjcm9sbEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSBldmVudC50YXJnZXQuc2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNvbnRhaW5lclNjcm9sbCgpIHtcbiAgICAgICAgdGhpcy5oaWRlT3ZlcmxheXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhnX2hvcml6b250YWxTY3JvbGxIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsTGVmdCA9IGV2ZW50LnRhcmdldC5zY3JvbGxMZWZ0O1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUGFyZW50U2l6ZXMoKSB7XG4gICAgICAgIGxldCBjdXJyR3JpZCA9IHRoaXMucGFyZW50O1xuICAgICAgICB3aGlsZSAoY3VyckdyaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGhhZFNjcm9sbGJhciA9IGN1cnJHcmlkLmhhc1ZlcnRpY2FsU3JvbGwoKTtcbiAgICAgICAgICAgIGNvbnN0IHZpcnQgPSBjdXJyR3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lcjtcbiAgICAgICAgICAgIHZpcnQucmVjYWxjVXBkYXRlU2l6ZXMoKTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHBhcnNlSW50KHZpcnQuZGMuaW5zdGFuY2UuX3ZpZXdDb250YWluZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCwgMTApO1xuICAgICAgICAgICAgY29uc3Qgc2NyID0gdmlydC5nZXRWZXJ0aWNhbFNjcm9sbCgpO1xuICAgICAgICAgICAgc2NyLnNjcm9sbFRvcCA9IHZpcnQuZ2V0U2Nyb2xsRm9ySW5kZXgodmlydC5zdGF0ZS5zdGFydEluZGV4KSAtIG9mZnNldDtcblxuICAgICAgICAgICAgaWYgKGhhZFNjcm9sbGJhciAhPT0gY3VyckdyaWQuaGFzVmVydGljYWxTcm9sbCgpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYWZ0ZXIgcmVjYWxjdWxhdGlvbnMgdGhlIGdyaWQgc2hvdWxkIHNob3cgdmVydGljYWwgc2Nyb2xsYmFyIGl0IHNob3VsZCBhbHNvIHJlZmxvdy5cbiAgICAgICAgICAgICAgICBjdXJyR3JpZC5yZWZsb3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VyckdyaWQgPSBjdXJyR3JpZC5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=