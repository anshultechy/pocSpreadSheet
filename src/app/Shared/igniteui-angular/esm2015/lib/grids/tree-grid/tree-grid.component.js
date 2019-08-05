/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, HostBinding, Input, IterableDiffers, ViewContainerRef, Output, EventEmitter, Inject, NgZone, forwardRef, Optional, TemplateRef, ContentChild, ViewChild } from '@angular/core';
import { IgxSelectionAPIService } from '../../core/selection';
import { IgxTreeGridAPIService } from './tree-grid-api.service';
import { IgxGridBaseComponent, IgxGridTransaction } from '../grid-base.component';
import { GridBaseAPIService } from '../api.service';
import { DisplayDensityToken } from '../../core/displayDensity';
import { TransactionType } from '../../services/transaction/transaction';
import { DOCUMENT } from '@angular/common';
import { IgxHierarchicalTransactionService } from '../../services/index';
import { IgxFilteringService } from '../filtering/grid-filtering.service';
import { IgxTreeGridNavigationService } from './tree-grid-navigation.service';
import { IgxGridSummaryService } from '../summaries/grid-summary.service';
import { IgxGridSelectionService, IgxGridCRUDService } from '../../core/grid-selection';
import { mergeObjects } from '../../core/utils';
import { IgxOverlayService } from '../../services/index';
import { IgxColumnResizingService } from '../grid-column-resizing.service';
import { first, takeUntil } from 'rxjs/operators';
import { IgxRowLoadingIndicatorTemplateDirective } from './tree-grid.directives';
import { IgxForOfSyncService } from '../../directives/for-of/for_of.sync.service';
import { IgxDragIndicatorIconDirective } from '../row-drag.directive';
/** @type {?} */
let NEXT_ID = 0;
/**
 * **Ignite UI for Angular Tree Grid** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid.html)
 *
 * The Ignite UI Tree Grid displays and manipulates hierarchical data with consistent schema formatted as a table and
 * provides features such as sorting, filtering, editing, column pinning, paging, column moving and hiding.
 *
 * Example:
 * ```html
 * <igx-tree-grid [data]="employeeData" primaryKey="employeeID" foreignKey="PID" autoGenerate="false">
 *   <igx-column field="first" header="First Name"></igx-column>
 *   <igx-column field="last" header="Last Name"></igx-column>
 *   <igx-column field="role" header="Role"></igx-column>
 * </igx-tree-grid>
 * ```
 */
export class IgxTreeGridComponent extends IgxGridBaseComponent {
    /**
     * @param {?} selectionService
     * @param {?} crudService
     * @param {?} colResizingService
     * @param {?} gridAPI
     * @param {?} selection
     * @param {?} _transactions
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
    constructor(selectionService, crudService, colResizingService, gridAPI, selection, _transactions, elementRef, zone, document, cdr, resolver, differs, viewRef, navigation, filteringService, overlayService, summaryService, _displayDensityOptions) {
        super(selectionService, crudService, gridAPI, selection, _transactions, elementRef, zone, document, cdr, resolver, differs, viewRef, navigation, filteringService, overlayService, summaryService, _displayDensityOptions);
        this.colResizingService = colResizingService;
        this._transactions = _transactions;
        this.document = document;
        this.overlayService = overlayService;
        this._displayDensityOptions = _displayDensityOptions;
        this._id = `igx-tree-grid-${NEXT_ID++}`;
        /**
         * Returns a map of all `ITreeGridRecord`s.
         * ```typescript
         * // gets the record with primaryKey=2
         * const states = this.grid.records.get(2);
         * ```
         * \@memberof IgxTreeGridComponent
         */
        this.records = new Map();
        /**
         * Returns a map of all processed (filtered and sorted) `ITreeGridRecord`s.
         * ```typescript
         * // gets the processed record with primaryKey=2
         * const states = this.grid.processedRecords.get(2);
         * ```
         * \@memberof IgxTreeGridComponent
         */
        this.processedRecords = new Map();
        /**
         * An \@Input property indicating whether child records should be deleted when their parent gets deleted.
         * By default it is set to true and deletes all children along with the parent.
         * ```html
         * <igx-tree-grid [data]="employeeData" [primaryKey]="'employeeID'" [foreignKey]="'parentID'" cascadeOnDelete="false">
         * </igx-tree-grid>
         * ```
         * \@memberof IgxTreeGridComponent
         */
        this.cascadeOnDelete = true;
        this._expansionDepth = Infinity;
        this._expansionStates = new Map();
        /**
         * The custom template, if any, that should be used when rendering the row drag indicator icon
         *
         * ```typescript
         * // Set in typescript
         * const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
         * myComponent.dragIndicatorIconTemplate = myCustomTemplate;
         * ```
         * ```html
         * <!-- Set in markup -->
         *  <igx-grid #grid>
         *      ...
         *      <ng-template igxDragIndicatorIcon>
         *          <igx-icon fontSet="material">info</igx-icon>
         *      </ng-template>
         *  </igx-grid>
         * ```
         */
        this.dragIndicatorIconTemplate = null;
        /**
         * Emitted when the expanded state of a row gets changed.
         * ```typescript
         * rowToggle(event: IRowToggleEventArgs){
         *  // the id of the row
         *  const rowID = event.rowID;
         *  // the new expansion state
         *  const newExpandedState = event.expanded;
         *  // the original event that triggered onRowToggle
         *  const originalEvent = event.event;
         *  // whether the event should be cancelled
         *  event.cancel = true;
         * }
         * ```
         * ```html
         * <igx-tree-grid [data]="employeeData" (onRowToggle)="rowToggle($event)" [autoGenerate]="true"></igx-tree-grid>
         * ```
         * \@memberof IgxTreeGridComponent
         */
        this.onRowToggle = new EventEmitter();
        /**
         * @hidden
         */
        this.loadingRows = new Set();
        this._filteredData = null;
        this._gridAPI = (/** @type {?} */ (gridAPI));
    }
    /**
     * An \@Input property that sets the value of the `id` attribute. If not provided it will be automatically generated.
     * ```html
     * <igx-tree-grid [id]="'igx-tree-grid-1'"></igx-tree-grid>
     * ```
     * \@memberof IgxTreeGridComponent
     * @return {?}
     */
    get id() {
        return this._id;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set id(value) {
        this._id = value;
    }
    /**
     * An \@Input property that lets you fill the `IgxTreeGridComponent` with an array of data.
     * ```html
     * <igx-tree-grid [data]="Data" [autoGenerate]="true"></igx-tree-grid>
     * ```
     * \@memberof IgxTreeGridComponent
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
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
    }
    /**
     * Returns an array of objects containing the filtered data in the `IgxGridComponent`.
     * ```typescript
     * let filteredData = this.grid.filteredData;
     * ```
     * \@memberof IgxTreeGridComponent
     * @return {?}
     */
    get filteredData() {
        return this._filteredData;
    }
    /**
     * Sets an array of objects containing the filtered data in the `IgxGridComponent`.
     * ```typescript
     * this.grid.filteredData = [{
     *       ID: 1,
     *       Name: "A"
     * }];
     * ```
     * \@memberof IgxTreeGridComponent
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
     * Get transactions service for the grid.
     * \@experimental \@hidden
     * @return {?}
     */
    get transactions() {
        return this._transactions;
    }
    /**
     * An \@Input property that sets the count of levels to be expanded in the `IgxTreeGridComponent`. By default it is
     * set to `Infinity` which means all levels would be expanded.
     * ```html
     * <igx-tree-grid #grid [data]="employeeData" [childDataKey]="'employees'" expansionDepth="1" [autoGenerate]="true"></igx-tree-grid>
     * ```
     * \@memberof IgxTreeGridComponent
     * @return {?}
     */
    get expansionDepth() {
        return this._expansionDepth;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set expansionDepth(value) {
        this._expansionDepth = value;
        this.cdr.markForCheck();
    }
    /**
     * Returns a list of key-value pairs [row ID, expansion state]. Includes only states that differ from the default one.
     * ```typescript
     * const expansionStates = this.grid.expansionStates;
     * ```
     * \@memberof IgxTreeGridComponent
     * @return {?}
     */
    get expansionStates() {
        return this._expansionStates;
    }
    /**
     * Sets a list of key-value pairs [row ID, expansion state].
     * ```typescript
     * const states = new Map<any, boolean>();
     * states.set(1, true);
     * this.grid.expansionStates = states;
     * ```
     * \@memberof IgxTreeGridComponent
     * @param {?} value
     * @return {?}
     */
    set expansionStates(value) {
        this._expansionStates = this.cloneMap(value);
        this.cdr.detectChanges();
    }
    /**
     * An \@Input property that provides a template for the row loading indicator when load on demand is enabled.
     * ```html
     * <ng-template #rowLoadingTemplate>
     *     <igx-icon fontSet="material">loop</igx-icon>
     * </ng-template>
     *
     * <igx-tree-grid #grid [data]="employeeData" [primaryKey]="'ID'" [foreignKey]="'parentID'"
     *                [loadChildrenOnDemand]="loadChildren"
     *                [rowLoadingIndicatorTemplate]="rowLoadingTemplate">
     * </igx-tree-grid>
     * ```
     * \@memberof IgxTreeGridComponent
     * @return {?}
     */
    get rowLoadingIndicatorTemplate() {
        return this._rowLoadingIndicatorTemplate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set rowLoadingIndicatorTemplate(value) {
        this._rowLoadingIndicatorTemplate = value;
        this.cdr.markForCheck();
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.onRowToggle.pipe(takeUntil(this.destroy$)).subscribe((args) => {
            this.loadChildrenOnRowExpansion(args);
        });
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.rowLoadingTemplate) {
            this._rowLoadingIndicatorTemplate = this.rowLoadingTemplate.template;
        }
        super.ngAfterContentInit();
    }
    /**
     * @private
     * @param {?} args
     * @return {?}
     */
    loadChildrenOnRowExpansion(args) {
        if (this.loadChildrenOnDemand) {
            /** @type {?} */
            const parentID = args.rowID;
            if (args.expanded && !this._expansionStates.has(parentID)) {
                this.loadingRows.add(parentID);
                this.loadChildrenOnDemand(parentID, children => {
                    this.loadingRows.delete(parentID);
                    this.addChildRows(children, parentID);
                    this.cdr.markForCheck();
                    requestAnimationFrame(() => {
                        /** @type {?} */
                        const cellID = this.selection.first_item(`${this.id}-cell`);
                        if (cellID) {
                            /** @type {?} */
                            const cell = this._gridAPI.get_cell_by_index(cellID.rowIndex, cellID.columnID);
                            if (cell) {
                                cell.nativeElement.focus();
                            }
                        }
                    });
                });
            }
        }
    }
    /**
     * @private
     * @param {?} children
     * @param {?} parentID
     * @return {?}
     */
    addChildRows(children, parentID) {
        if (this.primaryKey && this.foreignKey) {
            for (const child of children) {
                child[this.foreignKey] = parentID;
            }
            this.data.push(...children);
        }
        else if (this.childDataKey) {
            /** @type {?} */
            let parent = this.records.get(parentID);
            /** @type {?} */
            let parentData = parent.data;
            if (this.transactions.enabled && this.transactions.getAggregatedChanges(true).length) {
                /** @type {?} */
                const path = [];
                while (parent) {
                    path.push(parent.rowID);
                    parent = parent.parent;
                }
                /** @type {?} */
                let collection = this.data;
                /** @type {?} */
                let record;
                for (let i = path.length - 1; i >= 0; i--) {
                    /** @type {?} */
                    const pid = path[i];
                    record = collection.find(r => r[this.primaryKey] === pid);
                    if (!record) {
                        break;
                    }
                    collection = record[this.childDataKey];
                }
                if (record) {
                    parentData = record;
                }
            }
            parentData[this.childDataKey] = children;
        }
        this._pipeTrigger++;
    }
    /**
     * @private
     * @param {?} mapIn
     * @return {?}
     */
    cloneMap(mapIn) {
        /** @type {?} */
        const mapCloned = new Map();
        mapIn.forEach((value, key, mapObj) => {
            mapCloned.set(key, value);
        });
        return mapCloned;
    }
    /**
     * Expands the `IgxTreeGridRowComponent` with the specified rowID.
     * \@memberof IgxTreeGridComponent
     * @param {?} rowID The identifier of the row to be expanded.
     * ```typescript
     * this.grid.expandRow(2);
     * ```
     * @return {?}
     */
    expandRow(rowID) {
        this._gridAPI.expand_row(rowID);
    }
    /**
     * Collapses the `IgxTreeGridRowComponent` with the specified rowID.
     * \@memberof IgxTreeGridComponent
     * @param {?} rowID The identifier of the row to be collapsed.
     * ```typescript
     * this.grid.collapseRow(2);
     * ```
     * @return {?}
     */
    collapseRow(rowID) {
        this._gridAPI.collapse_row(rowID);
    }
    /**
     * Toggles the expansion state of the `IgxTreeGridRowComponent` with the specified rowID.
     * \@memberof IgxTreeGridComponent
     * @param {?} rowID The identifier of the row to be toggled.
     * ```typescript
     * this.grid.toggleRow(2);
     * ```
     * @return {?}
     */
    toggleRow(rowID) {
        this._gridAPI.toggle_row_expansion(rowID);
    }
    /**
     * Expands all rows.
     * ```typescript
     * this.grid.expandAll();
     * ```
     * \@memberof IgxTreeGridComponent
     * @return {?}
     */
    expandAll() {
        this._expansionDepth = Infinity;
        this.expansionStates = new Map();
    }
    /**
     * Collapses all rows.
     * ```typescript
     * this.grid.collapseAll();
     * ```
     * \@memberof IgxTreeGridComponent
     * @return {?}
     */
    collapseAll() {
        this._expansionDepth = 0;
        this.expansionStates = new Map();
    }
    /**
     * Creates a new `IgxTreeGridRowComponent` with the given data. If a parentRowID is not specified, the newly created
     * row would be added at the root level. Otherwise, it would be added as a child of the row whose primaryKey matches
     * the specified parentRowID. If the parentRowID does not exist, an error would be thrown.
     * ```typescript
     * const record = {
     *     ID: this.grid.data[this.grid1.data.length - 1].ID + 1,
     *     Name: this.newRecord
     * };
     * this.grid.addRow(record, 1); // Adds a new child row to the row with ID=1.
     * ```
     * \@memberof IgxTreeGridComponent
     * @param {?} data
     * @param {?=} parentRowID
     * @return {?}
     */
    addRow(data, parentRowID) {
        if (parentRowID !== undefined && parentRowID !== null) {
            super.endEdit(true);
            /** @type {?} */
            const state = this.transactions.getState(parentRowID);
            // we should not allow adding of rows as child of deleted row
            if (state && state.type === TransactionType.DELETE) {
                throw Error(`Cannot add child row to deleted parent row`);
            }
            /** @type {?} */
            const parentRecord = this.records.get(parentRowID);
            if (!parentRecord) {
                throw Error('Invalid parent row ID!');
            }
            this.summaryService.clearSummaryCache({ rowID: parentRecord.rowID });
            if (this.primaryKey && this.foreignKey) {
                data[this.foreignKey] = parentRowID;
                super.addRow(data);
            }
            else {
                /** @type {?} */
                const parentData = parentRecord.data;
                /** @type {?} */
                const childKey = this.childDataKey;
                if (this.transactions.enabled) {
                    /** @type {?} */
                    const rowId = this.primaryKey ? data[this.primaryKey] : data;
                    /** @type {?} */
                    const path = [];
                    path.push(...this.generateRowPath(parentRowID));
                    path.push(parentRowID);
                    this.transactions.add((/** @type {?} */ ({
                        id: rowId,
                        path: path,
                        newValue: data,
                        type: TransactionType.ADD
                    })), null);
                }
                else {
                    if (!parentData[childKey]) {
                        parentData[childKey] = [];
                    }
                    parentData[childKey].push(data);
                }
                this.onRowAdded.emit({ data });
                this._pipeTrigger++;
                this.cdr.markForCheck();
            }
        }
        else {
            if (this.primaryKey && this.foreignKey) {
                /** @type {?} */
                const rowID = data[this.foreignKey];
                this.summaryService.clearSummaryCache({ rowID: rowID });
            }
            super.addRow(data);
        }
    }
    /**
     * @hidden
     * @param {?} rowId
     * @return {?}
     */
    deleteRowById(rowId) {
        //  if this is flat self-referencing data, and CascadeOnDelete is set to true
        //  and if we have transactions we should start pending transaction. This allows
        //  us in case of delete action to delete all child rows as single undo action
        this._gridAPI.deleteRowById(rowId);
    }
    /**
     * @hidden
     * @param {?} rowId
     * @return {?}
     */
    generateRowPath(rowId) {
        /** @type {?} */
        const path = [];
        /** @type {?} */
        let record = this.records.get(rowId);
        while (record.parent) {
            path.push(record.parent.rowID);
            record = record.parent;
        }
        return path.reverse();
    }
    /**
     * @hidden \@internal
     * @protected
     * @return {?}
     */
    getDataBasedBodyHeight() {
        return !this.flatData || (this.flatData.length < this._defaultTargetRecordNumber) ?
            0 : this.defaultTargetBodyHeight;
    }
    /**
     * @hidden
     * @protected
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    scrollTo(row, column) {
        /** @type {?} */
        let delayScrolling = false;
        /** @type {?} */
        let record;
        if (typeof (row) !== 'number') {
            /** @type {?} */
            const rowData = row;
            /** @type {?} */
            const rowID = this._gridAPI.get_row_id(rowData);
            record = this.processedRecords.get(rowID);
            this._gridAPI.expand_path_to_record(record);
            if (this.paging) {
                /** @type {?} */
                const rowIndex = this.processedExpandedFlatData.indexOf(rowData);
                /** @type {?} */
                const page = Math.floor(rowIndex / this.perPage);
                if (this.page !== page) {
                    delayScrolling = true;
                    this.page = page;
                }
            }
        }
        if (delayScrolling) {
            this.verticalScrollContainer.onDataChanged.pipe(first()).subscribe(() => {
                this.scrollDirective(this.verticalScrollContainer, typeof (row) === 'number' ? row : this.verticalScrollContainer.igxForOf.indexOf(record));
            });
        }
        else {
            this.scrollDirective(this.verticalScrollContainer, typeof (row) === 'number' ? row : this.verticalScrollContainer.igxForOf.indexOf(record));
        }
        this.scrollToHorizontally(column);
    }
    /**
     * @hidden
     * @param {?} rowData
     * @param {?} rowIndex
     * @return {?}
     */
    getContext(rowData, rowIndex) {
        return {
            $implicit: rowData,
            index: rowIndex,
            templateID: this.isSummaryRow(rowData) ? 'summaryRow' : 'dataRow'
        };
    }
    /**
     * \@inheritdoc
     * @param {?=} formatters
     * @param {?=} headers
     * @return {?}
     */
    getSelectedData(formatters = false, headers = false) {
        /** @type {?} */
        const source = [];
        /** @type {?} */
        const process = (record) => {
            if (record.summaries) {
                source.push(null);
                return;
            }
            source.push(record.data);
        };
        this.verticalScrollContainer.igxForOf.forEach(process);
        return this.extractDataFromSelection(source, formatters, headers);
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
     * @protected
     * @param {?} rowIndex
     * @param {?} value
     * @return {?}
     */
    writeToData(rowIndex, value) {
        mergeObjects(this.flatData[rowIndex], value);
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
            // invalid configuration - tree grid should not allow column layouts
            // remove column layouts
            /** @type {?} */
            const nonColumnLayoutColumns = this.columnList.filter((col) => !col.columnLayout && !col.columnLayoutChild);
            this.columnList.reset(nonColumnLayoutColumns);
        }
        super.initColumns(collection, cb);
    }
}
IgxTreeGridComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'igx-tree-grid',
                template: "<igx-grid-toolbar role=\"rowgroup\" [style.width.px]='outerWidth' *ngIf=\"showToolbar\" [gridID]=\"id\"\n    [displayDensity]=\"displayDensity\" #toolbar>\n</igx-grid-toolbar>\n\n<div class=\"igx-grid__thead\">\n    <div class=\"igx-grid__thead-wrapper\" role=\"rowgroup\" [style.width.px]='calcWidth + 1' #theadRow>\n        <div class=\"igx-grid__tr\" [style.width.px]='calcWidth + 1' role=\"row\">\n            <span *ngIf=\"hasMovableColumns && draggedColumn && pinnedColumns.length <= 0\"\n                [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\" id=\"left\"\n                class=\"igx-grid__scroll-on-drag-left\" [style.left.px]=\"featureColumnsWidth\"></span>\n            <span *ngIf=\"hasMovableColumns && draggedColumn && pinnedColumns.length > 0\"\n                [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\" id=\"left\"\n                class=\"igx-grid__scroll-on-drag-pinned\" [style.left.px]=\"pinnedWidth\"></span>\n            <ng-container *ngIf=\"rowDraggable\">\n                <div class=\"igx-grid__drag-indicator\" #headerDragContainer>\n                    <div style=\"visibility: hidden;\">\n                        <ng-container\n                            *ngTemplateOutlet=\"this.dragIndicatorIconTemplate ? this.dragIndicatorIconTemplate : this.dragIndicatorIconBase\">\n                        </ng-container>\n                    </div>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"rowSelectable\">\n                <div class=\"igx-grid__cbx-selection\" #headerCheckboxContainer [ngClass]=\"{\n                    'igx-grid__cbx-selection--push': filteringService.isFilterRowVisible\n                }\">\n                    <igx-checkbox [checked]=\"allRowsSelected\" (change)=\"onHeaderCheckboxClick($event, filteredData)\"\n                        disableRipple=\"true\" [aria-label]=\"headerCheckboxAriaLabel\" #headerCheckbox></igx-checkbox>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"pinnedColumns.length > 0\">\n                <ng-template ngFor let-col [ngForOf]=\"pinnedColumns | igxTopLevel\">\n                    <igx-grid-header-group [column]=\"col\" [gridID]=\"id\" [style.min-width.px]=\"getHeaderGroupWidth(col)\"\n                        [style.flex-basis.px]=\"getHeaderGroupWidth(col)\"></igx-grid-header-group>\n                </ng-template>\n            </ng-container>\n            <ng-template igxGridFor let-col [igxGridForOf]=\"unpinnedColumns | igxTopLevel\"\n                [igxForScrollOrientation]=\"'horizontal'\" [igxForScrollContainer]=\"parentVirtDir\"\n                [igxForContainerSize]='unpinnedWidth' [igxForTrackBy]='trackColumnChanges'\n                [igxForSizePropName]=\"'calcPixelWidth'\" #headerContainer>\n                <igx-grid-header-group [column]=\"col\" [gridID]=\"id\" [style.min-width.px]=\"getHeaderGroupWidth(col)\"\n                    [style.flex-basis.px]=\"getHeaderGroupWidth(col)\"></igx-grid-header-group>\n            </ng-template>\n        </div>\n        <igx-grid-filtering-row #filteringRow *ngIf=\"filteringService.isFilterRowVisible\"\n            [column]=\"filteringService.filteredColumn\"></igx-grid-filtering-row>\n    </div>\n    <div class=\"igx-grid__thead-thumb\" [hidden]='!hasVerticalSroll()' [style.width.px]=\"scrollWidth\"></div>\n    <span *ngIf=\"hasMovableColumns && draggedColumn\" [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\"\n        id=\"right\" class=\"igx-grid__scroll-on-drag-right\"></span>\n</div>\n\n<div igxGridBody (keydown.control.c)=\"copyHandlerIE()\" (copy)=\"copyHandler($event)\" class=\"igx-grid__tbody\">\n    <div class=\"igx-grid__tbody-content\" role=\"rowgroup\" (onDragStop)=\"selectionService.dragMode = $event\"\n        (onDragScroll)=\"dragScroll($event)\" [igxGridDragSelect]=\"selectionService.dragMode\"\n        [style.height.px]='calcHeight' [style.width.px]='calcWidth' #tbody (scroll)='scrollHandler($event)'\n        (wheel)=\"wheelHandler()\">\n        <span *ngIf=\"hasMovableColumns && draggedColumn && pinnedColumns.length <= 0\"\n            [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\" id=\"left\"\n            class=\"igx-grid__scroll-on-drag-left\"></span>\n        <span *ngIf=\"hasMovableColumns && draggedColumn && pinnedColumns.length > 0\"\n            [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\" id=\"left\"\n            class=\"igx-grid__scroll-on-drag-pinned\" [style.left.px]=\"pinnedWidth\"></span>\n        <ng-template igxGridFor let-rowData\n            [igxGridForOf]=\"data\n        | treeGridTransaction:id:pipeTrigger\n        | treeGridHierarchizing:primaryKey:foreignKey:childDataKey:id:pipeTrigger\n        | treeGridFiltering:filteringExpressionsTree:id:pipeTrigger\n        | treeGridSorting:sortingExpressions:id:pipeTrigger\n        | treeGridFlattening:id:expansionDepth:expansionStates:pipeTrigger\n        | treeGridPaging:page:perPage:id:pipeTrigger\n        | treeGridSummary:hasSummarizedColumns:summaryCalculationMode:summaryPosition:id:pipeTrigger:summaryPipeTrigger\" let-rowIndex=\"index\"\n            [igxForScrollOrientation]=\"'vertical'\" [igxForScrollContainer]='verticalScroll'\n            [igxForContainerSize]='calcHeight' [igxForItemSize]=\"renderedRowHeight\" #verticalScrollContainer\n            (onChunkPreload)=\"dataLoading($event)\">\n            <ng-template #record_template>\n                <igx-tree-grid-row [gridID]=\"id\" [index]=\"rowIndex\" [treeRow]=\"rowData\" #row>\n                </igx-tree-grid-row>\n            </ng-template>\n            <ng-template #summary_template>\n                <igx-grid-summary-row [gridID]=\"id\" [summaries]=\"rowData.summaries\"\n                    [firstCellIndentation]=\"rowData.cellIndentation\" [index]=\"rowIndex\"\n                    class=\"igx-grid__summaries--body\" #summaryRow>\n                </igx-grid-summary-row>\n            </ng-template>\n\n            <ng-template [igxTemplateOutlet]='isSummaryRow(rowData) ? summary_template : record_template'\n                [igxTemplateOutletContext]='getContext(rowData, rowIndex)'\n                (onCachedViewLoaded)='cachedViewLoaded($event)'>\n            </ng-template>\n        </ng-template>\n        <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n        <div class=\"igx-grid__row-editing-outlet\" igxOverlayOutlet #igxRowEditingOverlayOutlet></div>\n    </div>\n    <span *ngIf=\"hasMovableColumns && draggedColumn\" [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\"\n        id=\"right\" class=\"igx-grid__scroll-on-drag-right\"></span>\n    <div [hidden]='!hasVerticalSroll()' class=\"igx-grid__tbody-scrollbar\" [style.width.px]=\"scrollWidth\"\n        [style.height.px]='calcHeight'>\n        <ng-template igxGridFor [igxGridForOf]='[]' #verticalScrollHolder></ng-template>\n    </div>\n</div>\n\n<div class=\"igx-grid__tfoot\" [style.width.px]='outerWidth' role=\"rowgroup\" [style.height.px]='summariesHeight' #tfoot>\n    <igx-grid-summary-row [style.width.px]='calcWidth' [style.height.px]='summariesHeight'\n        *ngIf=\"hasSummarizedColumns && rootSummariesEnabled\" [gridID]=\"id\"\n        [summaries]=\"id | igxGridSummaryDataPipe:summaryService.retriggerRootPipe\" [index]=\"0\"\n        class=\"igx-grid__summaries\" #summaryRow>\n    </igx-grid-summary-row>\n    <div class=\"igx-grid__tfoot-thumb\" [hidden]='!hasVerticalSroll()' [style.height.px]='summariesHeight'\n        [style.width.px]=\"scrollWidth\"></div>\n</div>\n\n<div class=\"igx-grid__scroll\" [style.height]=\"'18px'\" #scr [hidden]=\"unpinnedWidth - totalWidth >= 0\">\n    <div class=\"igx-grid__scroll-start\" [style.width.px]='pinnedWidth' [hidden]=\"pinnedWidth === 0\"></div>\n    <div class=\"igx-grid__scroll-main\" [style.width.px]='unpinnedWidth'>\n        <ng-template igxGridFor [igxGridForOf]='[]' #scrollContainer>\n        </ng-template>\n    </div>\n</div>\n\n<div class=\"igx-grid__footer\" #footer>\n    <ng-content select=\"igx-grid-footer\"></ng-content>\n    <ng-container *ngIf=\"paging && totalRecords\">\n        <ng-container\n            *ngTemplateOutlet=\"paginationTemplate ? paginationTemplate : defaultPaginator; context: {$implicit: this}\">\n        </ng-container>\n    </ng-container>\n</div>\n\n<ng-template #defaultPaginator>\n    <igx-paginator [displayDensity]=\"displayDensity\" [(page)]=\"page\" [totalRecords]=\"processedExpandedFlatData.length\"\n        [(perPage)]=\"perPage\">\n    </igx-paginator>\n</ng-template>\n\n<ng-template #emptyFilteredGrid>\n    <span class=\"igx-grid__tbody-message\">{{emptyFilteredGridMessage}}</span>\n</ng-template>\n\n<ng-template #defaultEmptyGrid>\n    <span class=\"igx-grid__tbody-message\">{{emptyGridMessage}}</span>\n</ng-template>\n\n<ng-template #defaultLoadingGrid>\n    <div class=\"igx-grid__loading\">\n        <igx-circular-bar [indeterminate]=\"true\">\n        </igx-circular-bar>\n    </div>\n</ng-template>\n\n<div *ngIf=\"rowEditable\" igxToggle>\n    <div [className]=\"bannerClass\">\n        <ng-container\n            *ngTemplateOutlet=\"rowEditContainer; context: { rowChangesCount: rowChangesCount, endEdit: endEdit.bind(this) }\">\n        </ng-container>\n    </div>\n</div>\n\n<ng-template #defaultRowEditText>\n    You have {{ rowChangesCount }} changes in this row\n</ng-template>\n\n<ng-template #defaultRowEditActions>\n    <button igxButton igxRowEditTabStop (click)=\"endEdit(false, $event)\">Cancel</button>\n    <button igxButton igxRowEditTabStop (click)=\"endEdit(true, $event)\">Done</button>\n</ng-template>\n\n<ng-template #defaultRowEditTemplate>\n    <div class=\"igx-banner__message\">\n        <span class=\"igx-banner__text\">\n            <ng-container\n                *ngTemplateOutlet=\"rowEditText ? rowEditText : defaultRowEditText; context: { $implicit: rowChangesCount }\">\n            </ng-container>\n        </span>\n    </div>\n    <div class=\"igx-banner__actions\">\n        <div class=\"igx-banner__row\">\n            <ng-container\n                *ngTemplateOutlet=\"rowEditActions ? rowEditActions : defaultRowEditActions; context: { $implicit: endEdit.bind(this) }\">\n            </ng-container>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #dragIndicatorIconBase>\n    <igx-icon fontSet=\"material\">drag_indicator</igx-icon>\n</ng-template>\n\n<igx-grid-column-resizer *ngIf=\"colResizingService.showResizer\"></igx-grid-column-resizer>\n<div class=\"igx-grid__outlet\" #igxFilteringOverlayOutlet igxOverlayOutlet></div>\n",
                providers: [
                    IgxGridSelectionService, IgxGridCRUDService, IgxTreeGridNavigationService, IgxGridSummaryService,
                    { provide: GridBaseAPIService, useClass: IgxTreeGridAPIService },
                    { provide: IgxGridBaseComponent, useExisting: forwardRef(() => IgxTreeGridComponent) }, IgxFilteringService, IgxForOfSyncService
                ]
            }] }
];
/** @nocollapse */
IgxTreeGridComponent.ctorParameters = () => [
    { type: IgxGridSelectionService },
    { type: IgxGridCRUDService },
    { type: IgxColumnResizingService },
    { type: GridBaseAPIService },
    { type: IgxSelectionAPIService },
    { type: IgxHierarchicalTransactionService, decorators: [{ type: Inject, args: [IgxGridTransaction,] }] },
    { type: ElementRef },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ChangeDetectorRef },
    { type: ComponentFactoryResolver },
    { type: IterableDiffers },
    { type: ViewContainerRef },
    { type: IgxTreeGridNavigationService },
    { type: IgxFilteringService },
    { type: IgxOverlayService, decorators: [{ type: Inject, args: [IgxOverlayService,] }] },
    { type: IgxGridSummaryService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
];
IgxTreeGridComponent.propDecorators = {
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    data: [{ type: Input }],
    childDataKey: [{ type: Input }],
    foreignKey: [{ type: Input }],
    hasChildrenKey: [{ type: Input }],
    cascadeOnDelete: [{ type: Input }],
    expansionDepth: [{ type: Input }],
    expansionStates: [{ type: Input }],
    rowLoadingTemplate: [{ type: ContentChild, args: [IgxRowLoadingIndicatorTemplateDirective, { read: IgxRowLoadingIndicatorTemplateDirective, static: true },] }],
    dragIndicatorIconTemplate: [{ type: ContentChild, args: [IgxDragIndicatorIconDirective, { read: TemplateRef, static: true },] }],
    rowLoadingIndicatorTemplate: [{ type: Input }],
    loadChildrenOnDemand: [{ type: Input }],
    onRowToggle: [{ type: Output }],
    dragIndicatorIconBase: [{ type: ViewChild, args: ['dragIndicatorIconBase', { read: TemplateRef, static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxTreeGridComponent.prototype._id;
    /**
     * @type {?}
     * @private
     */
    IgxTreeGridComponent.prototype._data;
    /**
     * @type {?}
     * @private
     */
    IgxTreeGridComponent.prototype._rowLoadingIndicatorTemplate;
    /**
     * @hidden
     * @type {?}
     */
    IgxTreeGridComponent.prototype.flatData;
    /**
     * @hidden
     * @type {?}
     */
    IgxTreeGridComponent.prototype.processedExpandedFlatData;
    /**
     * Returns an array of the root level `ITreeGridRecord`s.
     * ```typescript
     * // gets the root record with index=2
     * const states = this.grid.rootRecords[2];
     * ```
     * \@memberof IgxTreeGridComponent
     * @type {?}
     */
    IgxTreeGridComponent.prototype.rootRecords;
    /**
     * Returns a map of all `ITreeGridRecord`s.
     * ```typescript
     * // gets the record with primaryKey=2
     * const states = this.grid.records.get(2);
     * ```
     * \@memberof IgxTreeGridComponent
     * @type {?}
     */
    IgxTreeGridComponent.prototype.records;
    /**
     * Returns an array of processed (filtered and sorted) root `ITreeGridRecord`s.
     * ```typescript
     * // gets the processed root record with index=2
     * const states = this.grid.processedRootRecords[2];
     * ```
     * \@memberof IgxTreeGridComponent
     * @type {?}
     */
    IgxTreeGridComponent.prototype.processedRootRecords;
    /**
     * Returns a map of all processed (filtered and sorted) `ITreeGridRecord`s.
     * ```typescript
     * // gets the processed record with primaryKey=2
     * const states = this.grid.processedRecords.get(2);
     * ```
     * \@memberof IgxTreeGridComponent
     * @type {?}
     */
    IgxTreeGridComponent.prototype.processedRecords;
    /**
     * An \@Input property that sets the child data key of the `IgxTreeGridComponent`.
     * ```html
     * <igx-tree-grid #grid [data]="employeeData" [childDataKey]="'employees'" [autoGenerate]="true"></igx-tree-grid>
     * ```
     * \@memberof IgxTreeGridComponent
     * @type {?}
     */
    IgxTreeGridComponent.prototype.childDataKey;
    /**
     * An \@Input property that sets the foreign key of the `IgxTreeGridComponent`.
     * ```html
     * <igx-tree-grid #grid [data]="employeeData" [primaryKey]="'employeeID'" [foreignKey]="'parentID'" [autoGenerate]="true">
     * </igx-tree-grid>
     * ```
     * \@memberof IgxTreeGridComponent
     * @type {?}
     */
    IgxTreeGridComponent.prototype.foreignKey;
    /**
     * An \@Input property that sets the key indicating whether a row has children.
     * This property is only used for load on demand scenarios.
     * ```html
     * <igx-tree-grid #grid [data]="employeeData" [primaryKey]="'employeeID'" [foreignKey]="'parentID'"
     *                [loadChildrenOnDemand]="loadChildren"
     *                [hasChildrenKey]="'hasEmployees'">
     * </igx-tree-grid>
     * ```
     * \@memberof IgxTreeGridComponent
     * @type {?}
     */
    IgxTreeGridComponent.prototype.hasChildrenKey;
    /**
     * An \@Input property indicating whether child records should be deleted when their parent gets deleted.
     * By default it is set to true and deletes all children along with the parent.
     * ```html
     * <igx-tree-grid [data]="employeeData" [primaryKey]="'employeeID'" [foreignKey]="'parentID'" cascadeOnDelete="false">
     * </igx-tree-grid>
     * ```
     * \@memberof IgxTreeGridComponent
     * @type {?}
     */
    IgxTreeGridComponent.prototype.cascadeOnDelete;
    /**
     * @type {?}
     * @private
     */
    IgxTreeGridComponent.prototype._expansionDepth;
    /**
     * @type {?}
     * @private
     */
    IgxTreeGridComponent.prototype._expansionStates;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxTreeGridComponent.prototype.rowLoadingTemplate;
    /**
     * The custom template, if any, that should be used when rendering the row drag indicator icon
     *
     * ```typescript
     * // Set in typescript
     * const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
     * myComponent.dragIndicatorIconTemplate = myCustomTemplate;
     * ```
     * ```html
     * <!-- Set in markup -->
     *  <igx-grid #grid>
     *      ...
     *      <ng-template igxDragIndicatorIcon>
     *          <igx-icon fontSet="material">info</igx-icon>
     *      </ng-template>
     *  </igx-grid>
     * ```
     * @type {?}
     */
    IgxTreeGridComponent.prototype.dragIndicatorIconTemplate;
    /**
     * An \@Input property that provides a callback for loading child rows on demand.
     * ```html
     * <igx-tree-grid [data]="employeeData" [primaryKey]="'employeeID'" [foreignKey]="'parentID'" [loadChildrenOnDemand]="loadChildren">
     * </igx-tree-grid>
     * ```
     * ```typescript
     * public loadChildren = (parentID: any, done: (children: any[]) => void) => {
     *     this.dataService.getData(parentID, children => done(children));
     * }
     * ```
     * \@memberof IgxTreeGridComponent
     * @type {?}
     */
    IgxTreeGridComponent.prototype.loadChildrenOnDemand;
    /**
     * Emitted when the expanded state of a row gets changed.
     * ```typescript
     * rowToggle(event: IRowToggleEventArgs){
     *  // the id of the row
     *  const rowID = event.rowID;
     *  // the new expansion state
     *  const newExpandedState = event.expanded;
     *  // the original event that triggered onRowToggle
     *  const originalEvent = event.event;
     *  // whether the event should be cancelled
     *  event.cancel = true;
     * }
     * ```
     * ```html
     * <igx-tree-grid [data]="employeeData" (onRowToggle)="rowToggle($event)" [autoGenerate]="true"></igx-tree-grid>
     * ```
     * \@memberof IgxTreeGridComponent
     * @type {?}
     */
    IgxTreeGridComponent.prototype.onRowToggle;
    /**
     * @hidden
     * @type {?}
     */
    IgxTreeGridComponent.prototype.loadingRows;
    /**
     * @type {?}
     * @private
     */
    IgxTreeGridComponent.prototype._gridAPI;
    /**
     * @type {?}
     * @private
     */
    IgxTreeGridComponent.prototype._filteredData;
    /**
     * @hidden
     * \@internal
     * @type {?}
     */
    IgxTreeGridComponent.prototype.dragIndicatorIconBase;
    /** @type {?} */
    IgxTreeGridComponent.prototype.colResizingService;
    /**
     * @type {?}
     * @protected
     */
    IgxTreeGridComponent.prototype._transactions;
    /** @type {?} */
    IgxTreeGridComponent.prototype.document;
    /**
     * @type {?}
     * @protected
     */
    IgxTreeGridComponent.prototype.overlayService;
    /**
     * @type {?}
     * @protected
     */
    IgxTreeGridComponent.prototype._displayDensityOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvdHJlZS1ncmlkL3RyZWUtZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCx3QkFBd0IsRUFDeEIsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ0wsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixNQUFNLEVBQ04sWUFBWSxFQUNaLE1BQU0sRUFDTixNQUFNLEVBQ04sVUFBVSxFQUNWLFFBQVEsRUFFUixXQUFXLEVBRVgsWUFBWSxFQUVaLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQXFCLE1BQU0sd0JBQXdCLENBQUM7QUFDckcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEQsT0FBTyxFQUEwQixtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXhGLE9BQU8sRUFBOEMsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDckgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFF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cnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgRWxlbWVudFJlZixcbiAgICBIb3N0QmluZGluZyxcbiAgICBJbnB1dCxcbiAgICBJdGVyYWJsZURpZmZlcnMsXG4gICAgVmlld0NvbnRhaW5lclJlZixcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEluamVjdCxcbiAgICBOZ1pvbmUsXG4gICAgZm9yd2FyZFJlZixcbiAgICBPcHRpb25hbCxcbiAgICBPbkluaXQsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgUXVlcnlMaXN0LFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneFNlbGVjdGlvbkFQSVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL3NlbGVjdGlvbic7XG5pbXBvcnQgeyBJZ3hUcmVlR3JpZEFQSVNlcnZpY2UgfSBmcm9tICcuL3RyZWUtZ3JpZC1hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hHcmlkQmFzZUNvbXBvbmVudCwgSWd4R3JpZFRyYW5zYWN0aW9uLCBJR3JpZERhdGFCaW5kYWJsZSB9IGZyb20gJy4uL2dyaWQtYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JpZEJhc2VBUElTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSVRyZWVHcmlkUmVjb3JkIH0gZnJvbSAnLi90cmVlLWdyaWQuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBJRGlzcGxheURlbnNpdHlPcHRpb25zLCBEaXNwbGF5RGVuc2l0eVRva2VuIH0gZnJvbSAnLi4vLi4vY29yZS9kaXNwbGF5RGVuc2l0eSc7XG5pbXBvcnQgeyBJUm93VG9nZ2xlRXZlbnRBcmdzIH0gZnJvbSAnLi90cmVlLWdyaWQuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBIaWVyYXJjaGljYWxUcmFuc2FjdGlvbiwgSGllcmFyY2hpY2FsU3RhdGUsIFRyYW5zYWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IElneEhpZXJhcmNoaWNhbFRyYW5zYWN0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IElneEZpbHRlcmluZ1NlcnZpY2UgfSBmcm9tICcuLi9maWx0ZXJpbmcvZ3JpZC1maWx0ZXJpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hUcmVlR3JpZE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi90cmVlLWdyaWQtbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IElneEdyaWRTdW1tYXJ5U2VydmljZSB9IGZyb20gJy4uL3N1bW1hcmllcy9ncmlkLXN1bW1hcnkuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hHcmlkU2VsZWN0aW9uU2VydmljZSwgSWd4R3JpZENSVURTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9ncmlkLXNlbGVjdGlvbic7XG5pbXBvcnQgeyBtZXJnZU9iamVjdHMgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IElneE92ZXJsYXlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgSWd4Q29sdW1uUmVzaXppbmdTZXJ2aWNlIH0gZnJvbSAnLi4vZ3JpZC1jb2x1bW4tcmVzaXppbmcuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi9jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IGZpcnN0LCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJZ3hSb3dMb2FkaW5nSW5kaWNhdG9yVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3RyZWUtZ3JpZC5kaXJlY3RpdmVzJztcbmltcG9ydCB7IElneEZvck9mU3luY1NlcnZpY2UgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2Zvci1vZi9mb3Jfb2Yuc3luYy5zZXJ2aWNlJztcbmltcG9ydCB7IElneERyYWdJbmRpY2F0b3JJY29uRGlyZWN0aXZlIH0gZnJvbSAnLi4vcm93LWRyYWcuZGlyZWN0aXZlJztcblxubGV0IE5FWFRfSUQgPSAwO1xuXG4vKipcbiAqICoqSWduaXRlIFVJIGZvciBBbmd1bGFyIFRyZWUgR3JpZCoqIC1cbiAqIFtEb2N1bWVudGF0aW9uXShodHRwczovL3d3dy5pbmZyYWdpc3RpY3MuY29tL3Byb2R1Y3RzL2lnbml0ZS11aS1hbmd1bGFyL2FuZ3VsYXIvY29tcG9uZW50cy9ncmlkLmh0bWwpXG4gKlxuICogVGhlIElnbml0ZSBVSSBUcmVlIEdyaWQgZGlzcGxheXMgYW5kIG1hbmlwdWxhdGVzIGhpZXJhcmNoaWNhbCBkYXRhIHdpdGggY29uc2lzdGVudCBzY2hlbWEgZm9ybWF0dGVkIGFzIGEgdGFibGUgYW5kXG4gKiBwcm92aWRlcyBmZWF0dXJlcyBzdWNoIGFzIHNvcnRpbmcsIGZpbHRlcmluZywgZWRpdGluZywgY29sdW1uIHBpbm5pbmcsIHBhZ2luZywgY29sdW1uIG1vdmluZyBhbmQgaGlkaW5nLlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8aWd4LXRyZWUtZ3JpZCBbZGF0YV09XCJlbXBsb3llZURhdGFcIiBwcmltYXJ5S2V5PVwiZW1wbG95ZWVJRFwiIGZvcmVpZ25LZXk9XCJQSURcIiBhdXRvR2VuZXJhdGU9XCJmYWxzZVwiPlxuICogICA8aWd4LWNvbHVtbiBmaWVsZD1cImZpcnN0XCIgaGVhZGVyPVwiRmlyc3QgTmFtZVwiPjwvaWd4LWNvbHVtbj5cbiAqICAgPGlneC1jb2x1bW4gZmllbGQ9XCJsYXN0XCIgaGVhZGVyPVwiTGFzdCBOYW1lXCI+PC9pZ3gtY29sdW1uPlxuICogICA8aWd4LWNvbHVtbiBmaWVsZD1cInJvbGVcIiBoZWFkZXI9XCJSb2xlXCI+PC9pZ3gtY29sdW1uPlxuICogPC9pZ3gtdHJlZS1ncmlkPlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICAgIHNlbGVjdG9yOiAnaWd4LXRyZWUtZ3JpZCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0cmVlLWdyaWQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBJZ3hHcmlkU2VsZWN0aW9uU2VydmljZSwgSWd4R3JpZENSVURTZXJ2aWNlLCBJZ3hUcmVlR3JpZE5hdmlnYXRpb25TZXJ2aWNlLCBJZ3hHcmlkU3VtbWFyeVNlcnZpY2UsXG4gICAgICAgIHsgcHJvdmlkZTogR3JpZEJhc2VBUElTZXJ2aWNlLCB1c2VDbGFzczogSWd4VHJlZUdyaWRBUElTZXJ2aWNlIH0sXG4gICAgICAgIHsgcHJvdmlkZTogSWd4R3JpZEJhc2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElneFRyZWVHcmlkQ29tcG9uZW50KSB9LCBJZ3hGaWx0ZXJpbmdTZXJ2aWNlLCBJZ3hGb3JPZlN5bmNTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hUcmVlR3JpZENvbXBvbmVudCBleHRlbmRzIElneEdyaWRCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgSUdyaWREYXRhQmluZGFibGUsIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgcHJpdmF0ZSBfaWQgPSBgaWd4LXRyZWUtZ3JpZC0ke05FWFRfSUQrK31gO1xuICAgIHByaXZhdGUgX2RhdGE7XG4gICAgcHJpdmF0ZSBfcm93TG9hZGluZ0luZGljYXRvclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGBpZGAgYXR0cmlidXRlLiBJZiBub3QgcHJvdmlkZWQgaXQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC10cmVlLWdyaWQgW2lkXT1cIidpZ3gtdHJlZS1ncmlkLTEnXCI+PC9pZ3gtdHJlZS1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4VHJlZUdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGxldHMgeW91IGZpbGwgdGhlIGBJZ3hUcmVlR3JpZENvbXBvbmVudGAgd2l0aCBhbiBhcnJheSBvZiBkYXRhLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXRyZWUtZ3JpZCBbZGF0YV09XCJEYXRhXCIgW2F1dG9HZW5lcmF0ZV09XCJ0cnVlXCI+PC9pZ3gtdHJlZS1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4VHJlZUdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgZGF0YSgpOiBhbnlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZGF0YSh2YWx1ZTogYW55W10pIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnN1bW1hcnlTZXJ2aWNlLmNsZWFyU3VtbWFyeUNhY2hlKCk7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZEdlbmVyYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnNldHVwQ29sdW1ucygpO1xuICAgICAgICAgICAgdGhpcy5yZWZsb3coKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIG9iamVjdHMgY29udGFpbmluZyB0aGUgZmlsdGVyZWQgZGF0YSBpbiB0aGUgYElneEdyaWRDb21wb25lbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgZmlsdGVyZWREYXRhID0gdGhpcy5ncmlkLmZpbHRlcmVkRGF0YTtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneFRyZWVHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGZpbHRlcmVkRGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlcmVkRGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGFuIGFycmF5IG9mIG9iamVjdHMgY29udGFpbmluZyB0aGUgZmlsdGVyZWQgZGF0YSBpbiB0aGUgYElneEdyaWRDb21wb25lbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmdyaWQuZmlsdGVyZWREYXRhID0gW3tcbiAgICAgKiAgICAgICBJRDogMSxcbiAgICAgKiAgICAgICBOYW1lOiBcIkFcIlxuICAgICAqIH1dO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4VHJlZUdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBzZXQgZmlsdGVyZWREYXRhKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2ZpbHRlcmVkRGF0YSA9IHZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLnJvd1NlbGVjdGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSGVhZGVyQ2hlY2tib3hTdGF0dXNPbkZpbHRlcih0aGlzLl9maWx0ZXJlZERhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRyYW5zYWN0aW9ucyBzZXJ2aWNlIGZvciB0aGUgZ3JpZC5cbiAgICAgKiBAZXhwZXJpbWVudGFsIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgdHJhbnNhY3Rpb25zKCk6IElneEhpZXJhcmNoaWNhbFRyYW5zYWN0aW9uU2VydmljZTxIaWVyYXJjaGljYWxUcmFuc2FjdGlvbiwgSGllcmFyY2hpY2FsU3RhdGU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zYWN0aW9ucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIHB1YmxpYyBmbGF0RGF0YTogYW55W107XG5cbiAgICAvKipcbiAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIHB1YmxpYyBwcm9jZXNzZWRFeHBhbmRlZEZsYXREYXRhOiBhbnlbXTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIHJvb3QgbGV2ZWwgYElUcmVlR3JpZFJlY29yZGBzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRzIHRoZSByb290IHJlY29yZCB3aXRoIGluZGV4PTJcbiAgICAgKiBjb25zdCBzdGF0ZXMgPSB0aGlzLmdyaWQucm9vdFJlY29yZHNbMl07XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hUcmVlR3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyByb290UmVjb3JkczogSVRyZWVHcmlkUmVjb3JkW107XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbWFwIG9mIGFsbCBgSVRyZWVHcmlkUmVjb3JkYHMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldHMgdGhlIHJlY29yZCB3aXRoIHByaW1hcnlLZXk9MlxuICAgICAqIGNvbnN0IHN0YXRlcyA9IHRoaXMuZ3JpZC5yZWNvcmRzLmdldCgyKTtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneFRyZWVHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHJlY29yZHM6IE1hcDxhbnksIElUcmVlR3JpZFJlY29yZD4gPSBuZXcgTWFwPGFueSwgSVRyZWVHcmlkUmVjb3JkPigpO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBwcm9jZXNzZWQgKGZpbHRlcmVkIGFuZCBzb3J0ZWQpIHJvb3QgYElUcmVlR3JpZFJlY29yZGBzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRzIHRoZSBwcm9jZXNzZWQgcm9vdCByZWNvcmQgd2l0aCBpbmRleD0yXG4gICAgICogY29uc3Qgc3RhdGVzID0gdGhpcy5ncmlkLnByb2Nlc3NlZFJvb3RSZWNvcmRzWzJdO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4VHJlZUdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgcHJvY2Vzc2VkUm9vdFJlY29yZHM6IElUcmVlR3JpZFJlY29yZFtdO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIG1hcCBvZiBhbGwgcHJvY2Vzc2VkIChmaWx0ZXJlZCBhbmQgc29ydGVkKSBgSVRyZWVHcmlkUmVjb3JkYHMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldHMgdGhlIHByb2Nlc3NlZCByZWNvcmQgd2l0aCBwcmltYXJ5S2V5PTJcbiAgICAgKiBjb25zdCBzdGF0ZXMgPSB0aGlzLmdyaWQucHJvY2Vzc2VkUmVjb3Jkcy5nZXQoMik7XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hUcmVlR3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBwcm9jZXNzZWRSZWNvcmRzOiBNYXA8YW55LCBJVHJlZUdyaWRSZWNvcmQ+ID0gbmV3IE1hcDxhbnksIElUcmVlR3JpZFJlY29yZD4oKTtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIGNoaWxkIGRhdGEga2V5IG9mIHRoZSBgSWd4VHJlZUdyaWRDb21wb25lbnRgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXRyZWUtZ3JpZCAjZ3JpZCBbZGF0YV09XCJlbXBsb3llZURhdGFcIiBbY2hpbGREYXRhS2V5XT1cIidlbXBsb3llZXMnXCIgW2F1dG9HZW5lcmF0ZV09XCJ0cnVlXCI+PC9pZ3gtdHJlZS1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4VHJlZUdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjaGlsZERhdGFLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSBmb3JlaWduIGtleSBvZiB0aGUgYElneFRyZWVHcmlkQ29tcG9uZW50YC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC10cmVlLWdyaWQgI2dyaWQgW2RhdGFdPVwiZW1wbG95ZWVEYXRhXCIgW3ByaW1hcnlLZXldPVwiJ2VtcGxveWVlSUQnXCIgW2ZvcmVpZ25LZXldPVwiJ3BhcmVudElEJ1wiIFthdXRvR2VuZXJhdGVdPVwidHJ1ZVwiPlxuICAgICAqIDwvaWd4LXRyZWUtZ3JpZD5cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneFRyZWVHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZm9yZWlnbktleTtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIGtleSBpbmRpY2F0aW5nIHdoZXRoZXIgYSByb3cgaGFzIGNoaWxkcmVuLlxuICAgICAqIFRoaXMgcHJvcGVydHkgaXMgb25seSB1c2VkIGZvciBsb2FkIG9uIGRlbWFuZCBzY2VuYXJpb3MuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtdHJlZS1ncmlkICNncmlkIFtkYXRhXT1cImVtcGxveWVlRGF0YVwiIFtwcmltYXJ5S2V5XT1cIidlbXBsb3llZUlEJ1wiIFtmb3JlaWduS2V5XT1cIidwYXJlbnRJRCdcIlxuICAgICAqICAgICAgICAgICAgICAgIFtsb2FkQ2hpbGRyZW5PbkRlbWFuZF09XCJsb2FkQ2hpbGRyZW5cIlxuICAgICAqICAgICAgICAgICAgICAgIFtoYXNDaGlsZHJlbktleV09XCInaGFzRW1wbG95ZWVzJ1wiPlxuICAgICAqIDwvaWd4LXRyZWUtZ3JpZD5cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneFRyZWVHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaGFzQ2hpbGRyZW5LZXk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgaW5kaWNhdGluZyB3aGV0aGVyIGNoaWxkIHJlY29yZHMgc2hvdWxkIGJlIGRlbGV0ZWQgd2hlbiB0aGVpciBwYXJlbnQgZ2V0cyBkZWxldGVkLlxuICAgICAqIEJ5IGRlZmF1bHQgaXQgaXMgc2V0IHRvIHRydWUgYW5kIGRlbGV0ZXMgYWxsIGNoaWxkcmVuIGFsb25nIHdpdGggdGhlIHBhcmVudC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC10cmVlLWdyaWQgW2RhdGFdPVwiZW1wbG95ZWVEYXRhXCIgW3ByaW1hcnlLZXldPVwiJ2VtcGxveWVlSUQnXCIgW2ZvcmVpZ25LZXldPVwiJ3BhcmVudElEJ1wiIGNhc2NhZGVPbkRlbGV0ZT1cImZhbHNlXCI+XG4gICAgICogPC9pZ3gtdHJlZS1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4VHJlZUdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjYXNjYWRlT25EZWxldGUgPSB0cnVlO1xuXG4gICAgcHJpdmF0ZSBfZXhwYW5zaW9uRGVwdGggPSBJbmZpbml0eTtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIGNvdW50IG9mIGxldmVscyB0byBiZSBleHBhbmRlZCBpbiB0aGUgYElneFRyZWVHcmlkQ29tcG9uZW50YC4gQnkgZGVmYXVsdCBpdCBpc1xuICAgICAqIHNldCB0byBgSW5maW5pdHlgIHdoaWNoIG1lYW5zIGFsbCBsZXZlbHMgd291bGQgYmUgZXhwYW5kZWQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtdHJlZS1ncmlkICNncmlkIFtkYXRhXT1cImVtcGxveWVlRGF0YVwiIFtjaGlsZERhdGFLZXldPVwiJ2VtcGxveWVlcydcIiBleHBhbnNpb25EZXB0aD1cIjFcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIj48L2lneC10cmVlLWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hUcmVlR3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBleHBhbnNpb25EZXB0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhwYW5zaW9uRGVwdGg7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBleHBhbnNpb25EZXB0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2V4cGFuc2lvbkRlcHRoID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2V4cGFuc2lvblN0YXRlczogTWFwPGFueSwgYm9vbGVhbj4gPSBuZXcgTWFwPGFueSwgYm9vbGVhbj4oKTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBsaXN0IG9mIGtleS12YWx1ZSBwYWlycyBbcm93IElELCBleHBhbnNpb24gc3RhdGVdLiBJbmNsdWRlcyBvbmx5IHN0YXRlcyB0aGF0IGRpZmZlciBmcm9tIHRoZSBkZWZhdWx0IG9uZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgZXhwYW5zaW9uU3RhdGVzID0gdGhpcy5ncmlkLmV4cGFuc2lvblN0YXRlcztcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneFRyZWVHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGV4cGFuc2lvblN0YXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4cGFuc2lvblN0YXRlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgbGlzdCBvZiBrZXktdmFsdWUgcGFpcnMgW3JvdyBJRCwgZXhwYW5zaW9uIHN0YXRlXS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3Qgc3RhdGVzID0gbmV3IE1hcDxhbnksIGJvb2xlYW4+KCk7XG4gICAgICogc3RhdGVzLnNldCgxLCB0cnVlKTtcbiAgICAgKiB0aGlzLmdyaWQuZXhwYW5zaW9uU3RhdGVzID0gc3RhdGVzO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4VHJlZUdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGV4cGFuc2lvblN0YXRlcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9leHBhbnNpb25TdGF0ZXMgPSB0aGlzLmNsb25lTWFwKHZhbHVlKTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneFJvd0xvYWRpbmdJbmRpY2F0b3JUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBJZ3hSb3dMb2FkaW5nSW5kaWNhdG9yVGVtcGxhdGVEaXJlY3RpdmUsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCByb3dMb2FkaW5nVGVtcGxhdGU6IElneFJvd0xvYWRpbmdJbmRpY2F0b3JUZW1wbGF0ZURpcmVjdGl2ZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXN0b20gdGVtcGxhdGUsIGlmIGFueSwgdGhhdCBzaG91bGQgYmUgdXNlZCB3aGVuIHJlbmRlcmluZyB0aGUgcm93IGRyYWcgaW5kaWNhdG9yIGljb25cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBTZXQgaW4gdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IG15Q3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBteUNvbXBvbmVudC5jdXN0b21UZW1wbGF0ZTtcbiAgICAgKiBteUNvbXBvbmVudC5kcmFnSW5kaWNhdG9ySWNvblRlbXBsYXRlID0gbXlDdXN0b21UZW1wbGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLSBTZXQgaW4gbWFya3VwIC0tPlxuICAgICAqICA8aWd4LWdyaWQgI2dyaWQ+XG4gICAgICogICAgICAuLi5cbiAgICAgKiAgICAgIDxuZy10ZW1wbGF0ZSBpZ3hEcmFnSW5kaWNhdG9ySWNvbj5cbiAgICAgKiAgICAgICAgICA8aWd4LWljb24gZm9udFNldD1cIm1hdGVyaWFsXCI+aW5mbzwvaWd4LWljb24+XG4gICAgICogICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAqICA8L2lneC1ncmlkPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4RHJhZ0luZGljYXRvckljb25EaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBkcmFnSW5kaWNhdG9ySWNvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHByb3ZpZGVzIGEgdGVtcGxhdGUgZm9yIHRoZSByb3cgbG9hZGluZyBpbmRpY2F0b3Igd2hlbiBsb2FkIG9uIGRlbWFuZCBpcyBlbmFibGVkLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8bmctdGVtcGxhdGUgI3Jvd0xvYWRpbmdUZW1wbGF0ZT5cbiAgICAgKiAgICAgPGlneC1pY29uIGZvbnRTZXQ9XCJtYXRlcmlhbFwiPmxvb3A8L2lneC1pY29uPlxuICAgICAqIDwvbmctdGVtcGxhdGU+XG4gICAgICpcbiAgICAgKiA8aWd4LXRyZWUtZ3JpZCAjZ3JpZCBbZGF0YV09XCJlbXBsb3llZURhdGFcIiBbcHJpbWFyeUtleV09XCInSUQnXCIgW2ZvcmVpZ25LZXldPVwiJ3BhcmVudElEJ1wiXG4gICAgICogICAgICAgICAgICAgICAgW2xvYWRDaGlsZHJlbk9uRGVtYW5kXT1cImxvYWRDaGlsZHJlblwiXG4gICAgICogICAgICAgICAgICAgICAgW3Jvd0xvYWRpbmdJbmRpY2F0b3JUZW1wbGF0ZV09XCJyb3dMb2FkaW5nVGVtcGxhdGVcIj5cbiAgICAgKiA8L2lneC10cmVlLWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hUcmVlR3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCByb3dMb2FkaW5nSW5kaWNhdG9yVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yb3dMb2FkaW5nSW5kaWNhdG9yVGVtcGxhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCByb3dMb2FkaW5nSW5kaWNhdG9yVGVtcGxhdGUodmFsdWU6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICAgICAgdGhpcy5fcm93TG9hZGluZ0luZGljYXRvclRlbXBsYXRlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHByb3ZpZGVzIGEgY2FsbGJhY2sgZm9yIGxvYWRpbmcgY2hpbGQgcm93cyBvbiBkZW1hbmQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtdHJlZS1ncmlkIFtkYXRhXT1cImVtcGxveWVlRGF0YVwiIFtwcmltYXJ5S2V5XT1cIidlbXBsb3llZUlEJ1wiIFtmb3JlaWduS2V5XT1cIidwYXJlbnRJRCdcIiBbbG9hZENoaWxkcmVuT25EZW1hbmRdPVwibG9hZENoaWxkcmVuXCI+XG4gICAgICogPC9pZ3gtdHJlZS1ncmlkPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBwdWJsaWMgbG9hZENoaWxkcmVuID0gKHBhcmVudElEOiBhbnksIGRvbmU6IChjaGlsZHJlbjogYW55W10pID0+IHZvaWQpID0+IHtcbiAgICAgKiAgICAgdGhpcy5kYXRhU2VydmljZS5nZXREYXRhKHBhcmVudElELCBjaGlsZHJlbiA9PiBkb25lKGNoaWxkcmVuKSk7XG4gICAgICogfVxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4VHJlZUdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBsb2FkQ2hpbGRyZW5PbkRlbWFuZDogKHBhcmVudElEOiBhbnksIGRvbmU6IChjaGlsZHJlbjogYW55W10pID0+IHZvaWQpID0+IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIHdoZW4gdGhlIGV4cGFuZGVkIHN0YXRlIG9mIGEgcm93IGdldHMgY2hhbmdlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogcm93VG9nZ2xlKGV2ZW50OiBJUm93VG9nZ2xlRXZlbnRBcmdzKXtcbiAgICAgKiAgLy8gdGhlIGlkIG9mIHRoZSByb3dcbiAgICAgKiAgY29uc3Qgcm93SUQgPSBldmVudC5yb3dJRDtcbiAgICAgKiAgLy8gdGhlIG5ldyBleHBhbnNpb24gc3RhdGVcbiAgICAgKiAgY29uc3QgbmV3RXhwYW5kZWRTdGF0ZSA9IGV2ZW50LmV4cGFuZGVkO1xuICAgICAqICAvLyB0aGUgb3JpZ2luYWwgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgb25Sb3dUb2dnbGVcbiAgICAgKiAgY29uc3Qgb3JpZ2luYWxFdmVudCA9IGV2ZW50LmV2ZW50O1xuICAgICAqICAvLyB3aGV0aGVyIHRoZSBldmVudCBzaG91bGQgYmUgY2FuY2VsbGVkXG4gICAgICogIGV2ZW50LmNhbmNlbCA9IHRydWU7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXRyZWUtZ3JpZCBbZGF0YV09XCJlbXBsb3llZURhdGFcIiAob25Sb3dUb2dnbGUpPVwicm93VG9nZ2xlKCRldmVudClcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIj48L2lneC10cmVlLWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hUcmVlR3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblJvd1RvZ2dsZSA9IG5ldyBFdmVudEVtaXR0ZXI8SVJvd1RvZ2dsZUV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZGluZ1Jvd3MgPSBuZXcgU2V0PGFueT4oKTtcblxuICAgIHByaXZhdGUgX2dyaWRBUEk6IElneFRyZWVHcmlkQVBJU2VydmljZTtcbiAgICBwcml2YXRlIF9maWx0ZXJlZERhdGEgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2RyYWdJbmRpY2F0b3JJY29uQmFzZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBkcmFnSW5kaWNhdG9ySWNvbkJhc2U6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgc2VsZWN0aW9uU2VydmljZTogSWd4R3JpZFNlbGVjdGlvblNlcnZpY2UsXG4gICAgICAgIGNydWRTZXJ2aWNlOiBJZ3hHcmlkQ1JVRFNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBjb2xSZXNpemluZ1NlcnZpY2U6IElneENvbHVtblJlc2l6aW5nU2VydmljZSxcbiAgICAgICAgZ3JpZEFQSTogR3JpZEJhc2VBUElTZXJ2aWNlPElneEdyaWRCYXNlQ29tcG9uZW50ICYgSUdyaWREYXRhQmluZGFibGU+LFxuICAgICAgICBzZWxlY3Rpb246IElneFNlbGVjdGlvbkFQSVNlcnZpY2UsXG4gICAgICAgIEBJbmplY3QoSWd4R3JpZFRyYW5zYWN0aW9uKSBwcm90ZWN0ZWQgX3RyYW5zYWN0aW9uczogSWd4SGllcmFyY2hpY2FsVHJhbnNhY3Rpb25TZXJ2aWNlPEhpZXJhcmNoaWNhbFRyYW5zYWN0aW9uLCBIaWVyYXJjaGljYWxTdGF0ZT4sXG4gICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHpvbmU6IE5nWm9uZSxcbiAgICAgICAgQEluamVjdChET0NVTUVOVCkgcHVibGljIGRvY3VtZW50LFxuICAgICAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICBkaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsXG4gICAgICAgIHZpZXdSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIG5hdmlnYXRpb246IElneFRyZWVHcmlkTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgICAgIGZpbHRlcmluZ1NlcnZpY2U6IElneEZpbHRlcmluZ1NlcnZpY2UsXG4gICAgICAgIEBJbmplY3QoSWd4T3ZlcmxheVNlcnZpY2UpIHByb3RlY3RlZCBvdmVybGF5U2VydmljZTogSWd4T3ZlcmxheVNlcnZpY2UsXG4gICAgICAgIHN1bW1hcnlTZXJ2aWNlOiBJZ3hHcmlkU3VtbWFyeVNlcnZpY2UsXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRGlzcGxheURlbnNpdHlUb2tlbikgcHJvdGVjdGVkIF9kaXNwbGF5RGVuc2l0eU9wdGlvbnM6IElEaXNwbGF5RGVuc2l0eU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHN1cGVyKHNlbGVjdGlvblNlcnZpY2UsIGNydWRTZXJ2aWNlLCBncmlkQVBJLCBzZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgX3RyYW5zYWN0aW9ucywgZWxlbWVudFJlZiwgem9uZSwgZG9jdW1lbnQsIGNkciwgcmVzb2x2ZXIsIGRpZmZlcnMsIHZpZXdSZWYsIG5hdmlnYXRpb24sXG4gICAgICAgICAgICAgICAgZmlsdGVyaW5nU2VydmljZSwgb3ZlcmxheVNlcnZpY2UsIHN1bW1hcnlTZXJ2aWNlLCBfZGlzcGxheURlbnNpdHlPcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZ3JpZEFQSSA9IDxJZ3hUcmVlR3JpZEFQSVNlcnZpY2U+Z3JpZEFQSTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICBzdXBlci5uZ09uSW5pdCgpO1xuXG4gICAgICAgIHRoaXMub25Sb3dUb2dnbGUucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoYXJncykgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkQ2hpbGRyZW5PblJvd0V4cGFuc2lvbihhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJvd0xvYWRpbmdUZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fcm93TG9hZGluZ0luZGljYXRvclRlbXBsYXRlID0gdGhpcy5yb3dMb2FkaW5nVGVtcGxhdGUudGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIubmdBZnRlckNvbnRlbnRJbml0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkQ2hpbGRyZW5PblJvd0V4cGFuc2lvbihhcmdzOiBJUm93VG9nZ2xlRXZlbnRBcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLmxvYWRDaGlsZHJlbk9uRGVtYW5kKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRJRCA9IGFyZ3Mucm93SUQ7XG5cbiAgICAgICAgICAgIGlmIChhcmdzLmV4cGFuZGVkICYmICF0aGlzLl9leHBhbnNpb25TdGF0ZXMuaGFzKHBhcmVudElEKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1Jvd3MuYWRkKHBhcmVudElEKTtcblxuICAgICAgICAgICAgICAgIHRoaXMubG9hZENoaWxkcmVuT25EZW1hbmQocGFyZW50SUQsIGNoaWxkcmVuID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nUm93cy5kZWxldGUocGFyZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENoaWxkUm93cyhjaGlsZHJlbiwgcGFyZW50SUQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcblxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbElEID0gdGhpcy5zZWxlY3Rpb24uZmlyc3RfaXRlbShgJHt0aGlzLmlkfS1jZWxsYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbElEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuX2dyaWRBUEkuZ2V0X2NlbGxfYnlfaW5kZXgoY2VsbElELnJvd0luZGV4LCBjZWxsSUQuY29sdW1uSUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENoaWxkUm93cyhjaGlsZHJlbjogYW55W10sIHBhcmVudElEOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJpbWFyeUtleSAmJiB0aGlzLmZvcmVpZ25LZXkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBjaGlsZFt0aGlzLmZvcmVpZ25LZXldID0gcGFyZW50SUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGEucHVzaCguLi5jaGlsZHJlbik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jaGlsZERhdGFLZXkpIHtcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLnJlY29yZHMuZ2V0KHBhcmVudElEKTtcbiAgICAgICAgICAgIGxldCBwYXJlbnREYXRhID0gcGFyZW50LmRhdGE7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zYWN0aW9ucy5lbmFibGVkICYmIHRoaXMudHJhbnNhY3Rpb25zLmdldEFnZ3JlZ2F0ZWRDaGFuZ2VzKHRydWUpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhdGggPSBbXTtcbiAgICAgICAgICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGgucHVzaChwYXJlbnQucm93SUQpO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBjb2xsZWN0aW9uID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgICAgIGxldCByZWNvcmQ6IGFueTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwaWQgPSBwYXRoW2ldO1xuICAgICAgICAgICAgICAgICAgICByZWNvcmQgPSBjb2xsZWN0aW9uLmZpbmQociA9PiByW3RoaXMucHJpbWFyeUtleV0gPT09IHBpZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWNvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24gPSByZWNvcmRbdGhpcy5jaGlsZERhdGFLZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudERhdGEgPSByZWNvcmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYXJlbnREYXRhW3RoaXMuY2hpbGREYXRhS2V5XSA9IGNoaWxkcmVuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcGlwZVRyaWdnZXIrKztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsb25lTWFwKG1hcEluOiBNYXA8YW55LCBib29sZWFuPik6IE1hcDxhbnksIGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3QgbWFwQ2xvbmVkOiBNYXA8YW55LCBib29sZWFuPiA9IG5ldyBNYXA8YW55LCBib29sZWFuPigpO1xuXG4gICAgICAgIG1hcEluLmZvckVhY2goKHZhbHVlOiBib29sZWFuLCBrZXk6IGFueSwgbWFwT2JqOiBNYXA8YW55LCBib29sZWFuPikgPT4ge1xuXG4gICAgICAgICAgICBtYXBDbG9uZWQuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbWFwQ2xvbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4cGFuZHMgdGhlIGBJZ3hUcmVlR3JpZFJvd0NvbXBvbmVudGAgd2l0aCB0aGUgc3BlY2lmaWVkIHJvd0lELlxuICAgICAqIEBwYXJhbSByb3dJRCBUaGUgaWRlbnRpZmllciBvZiB0aGUgcm93IHRvIGJlIGV4cGFuZGVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmdyaWQuZXhwYW5kUm93KDIpO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4VHJlZUdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZXhwYW5kUm93KHJvd0lEOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fZ3JpZEFQSS5leHBhbmRfcm93KHJvd0lEKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb2xsYXBzZXMgdGhlIGBJZ3hUcmVlR3JpZFJvd0NvbXBvbmVudGAgd2l0aCB0aGUgc3BlY2lmaWVkIHJvd0lELlxuICAgICAqIEBwYXJhbSByb3dJRCBUaGUgaWRlbnRpZmllciBvZiB0aGUgcm93IHRvIGJlIGNvbGxhcHNlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5ncmlkLmNvbGxhcHNlUm93KDIpO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4VHJlZUdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgY29sbGFwc2VSb3cocm93SUQ6IGFueSkge1xuICAgICAgICB0aGlzLl9ncmlkQVBJLmNvbGxhcHNlX3Jvdyhyb3dJRCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgZXhwYW5zaW9uIHN0YXRlIG9mIHRoZSBgSWd4VHJlZUdyaWRSb3dDb21wb25lbnRgIHdpdGggdGhlIHNwZWNpZmllZCByb3dJRC5cbiAgICAgKiBAcGFyYW0gcm93SUQgVGhlIGlkZW50aWZpZXIgb2YgdGhlIHJvdyB0byBiZSB0b2dnbGVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmdyaWQudG9nZ2xlUm93KDIpO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4VHJlZUdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9nZ2xlUm93KHJvd0lEOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fZ3JpZEFQSS50b2dnbGVfcm93X2V4cGFuc2lvbihyb3dJRCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhwYW5kcyBhbGwgcm93cy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5ncmlkLmV4cGFuZEFsbCgpO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4VHJlZUdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZXhwYW5kQWxsKCkge1xuICAgICAgICB0aGlzLl9leHBhbnNpb25EZXB0aCA9IEluZmluaXR5O1xuICAgICAgICB0aGlzLmV4cGFuc2lvblN0YXRlcyA9IG5ldyBNYXA8YW55LCBib29sZWFuPigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbGxhcHNlcyBhbGwgcm93cy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5ncmlkLmNvbGxhcHNlQWxsKCk7XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hUcmVlR3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBjb2xsYXBzZUFsbCgpIHtcbiAgICAgICAgdGhpcy5fZXhwYW5zaW9uRGVwdGggPSAwO1xuICAgICAgICB0aGlzLmV4cGFuc2lvblN0YXRlcyA9IG5ldyBNYXA8YW55LCBib29sZWFuPigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgYElneFRyZWVHcmlkUm93Q29tcG9uZW50YCB3aXRoIHRoZSBnaXZlbiBkYXRhLiBJZiBhIHBhcmVudFJvd0lEIGlzIG5vdCBzcGVjaWZpZWQsIHRoZSBuZXdseSBjcmVhdGVkXG4gICAgICogcm93IHdvdWxkIGJlIGFkZGVkIGF0IHRoZSByb290IGxldmVsLiBPdGhlcndpc2UsIGl0IHdvdWxkIGJlIGFkZGVkIGFzIGEgY2hpbGQgb2YgdGhlIHJvdyB3aG9zZSBwcmltYXJ5S2V5IG1hdGNoZXNcbiAgICAgKiB0aGUgc3BlY2lmaWVkIHBhcmVudFJvd0lELiBJZiB0aGUgcGFyZW50Um93SUQgZG9lcyBub3QgZXhpc3QsIGFuIGVycm9yIHdvdWxkIGJlIHRocm93bi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgcmVjb3JkID0ge1xuICAgICAqICAgICBJRDogdGhpcy5ncmlkLmRhdGFbdGhpcy5ncmlkMS5kYXRhLmxlbmd0aCAtIDFdLklEICsgMSxcbiAgICAgKiAgICAgTmFtZTogdGhpcy5uZXdSZWNvcmRcbiAgICAgKiB9O1xuICAgICAqIHRoaXMuZ3JpZC5hZGRSb3cocmVjb3JkLCAxKTsgLy8gQWRkcyBhIG5ldyBjaGlsZCByb3cgdG8gdGhlIHJvdyB3aXRoIElEPTEuXG4gICAgICogYGBgXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcGFyYW0gcGFyZW50Um93SURcbiAgICAgKiBAbWVtYmVyb2YgSWd4VHJlZUdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkUm93KGRhdGE6IGFueSwgcGFyZW50Um93SUQ/OiBhbnkpIHtcbiAgICAgICAgaWYgKHBhcmVudFJvd0lEICE9PSB1bmRlZmluZWQgJiYgcGFyZW50Um93SUQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHN1cGVyLmVuZEVkaXQodHJ1ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy50cmFuc2FjdGlvbnMuZ2V0U3RhdGUocGFyZW50Um93SUQpO1xuICAgICAgICAgICAgLy8gd2Ugc2hvdWxkIG5vdCBhbGxvdyBhZGRpbmcgb2Ygcm93cyBhcyBjaGlsZCBvZiBkZWxldGVkIHJvd1xuICAgICAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlLnR5cGUgPT09IFRyYW5zYWN0aW9uVHlwZS5ERUxFVEUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgQ2Fubm90IGFkZCBjaGlsZCByb3cgdG8gZGVsZXRlZCBwYXJlbnQgcm93YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHBhcmVudFJlY29yZCA9IHRoaXMucmVjb3Jkcy5nZXQocGFyZW50Um93SUQpO1xuXG4gICAgICAgICAgICBpZiAoIXBhcmVudFJlY29yZCkge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIHBhcmVudCByb3cgSUQhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN1bW1hcnlTZXJ2aWNlLmNsZWFyU3VtbWFyeUNhY2hlKHtyb3dJRDogcGFyZW50UmVjb3JkLnJvd0lEfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmltYXJ5S2V5ICYmIHRoaXMuZm9yZWlnbktleSkge1xuICAgICAgICAgICAgICAgIGRhdGFbdGhpcy5mb3JlaWduS2V5XSA9IHBhcmVudFJvd0lEO1xuICAgICAgICAgICAgICAgIHN1cGVyLmFkZFJvdyhkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50RGF0YSA9IHBhcmVudFJlY29yZC5kYXRhO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkS2V5ID0gdGhpcy5jaGlsZERhdGFLZXk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNhY3Rpb25zLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93SWQgPSB0aGlzLnByaW1hcnlLZXkgPyBkYXRhW3RoaXMucHJpbWFyeUtleV0gOiBkYXRhO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXRoOiBhbnlbXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnB1c2goLi4udGhpcy5nZW5lcmF0ZVJvd1BhdGgocGFyZW50Um93SUQpKTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5wdXNoKHBhcmVudFJvd0lEKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByb3dJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFRyYW5zYWN0aW9uVHlwZS5BRERcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBIaWVyYXJjaGljYWxUcmFuc2FjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFyZW50RGF0YVtjaGlsZEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudERhdGFbY2hpbGRLZXldID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RGF0YVtjaGlsZEtleV0ucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5vblJvd0FkZGVkLmVtaXQoeyBkYXRhIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BpcGVUcmlnZ2VyKys7XG4gICAgICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmltYXJ5S2V5ICYmIHRoaXMuZm9yZWlnbktleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvd0lEID0gZGF0YVt0aGlzLmZvcmVpZ25LZXldO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VtbWFyeVNlcnZpY2UuY2xlYXJTdW1tYXJ5Q2FjaGUoe3Jvd0lEOiByb3dJRH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3VwZXIuYWRkUm93KGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBwdWJsaWMgZGVsZXRlUm93QnlJZChyb3dJZDogYW55KSB7XG4gICAgICAgIC8vICBpZiB0aGlzIGlzIGZsYXQgc2VsZi1yZWZlcmVuY2luZyBkYXRhLCBhbmQgQ2FzY2FkZU9uRGVsZXRlIGlzIHNldCB0byB0cnVlXG4gICAgICAgIC8vICBhbmQgaWYgd2UgaGF2ZSB0cmFuc2FjdGlvbnMgd2Ugc2hvdWxkIHN0YXJ0IHBlbmRpbmcgdHJhbnNhY3Rpb24uIFRoaXMgYWxsb3dzXG4gICAgICAgIC8vICB1cyBpbiBjYXNlIG9mIGRlbGV0ZSBhY3Rpb24gdG8gZGVsZXRlIGFsbCBjaGlsZCByb3dzIGFzIHNpbmdsZSB1bmRvIGFjdGlvblxuICAgICAgICB0aGlzLl9ncmlkQVBJLmRlbGV0ZVJvd0J5SWQocm93SWQpO1xuXG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBwdWJsaWMgZ2VuZXJhdGVSb3dQYXRoKHJvd0lkOiBhbnkpOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IHBhdGg6IGFueVtdID0gW107XG4gICAgICAgIGxldCByZWNvcmQgPSB0aGlzLnJlY29yZHMuZ2V0KHJvd0lkKTtcblxuICAgICAgICB3aGlsZSAocmVjb3JkLnBhcmVudCkge1xuICAgICAgICAgICAgcGF0aC5wdXNoKHJlY29yZC5wYXJlbnQucm93SUQpO1xuICAgICAgICAgICAgcmVjb3JkID0gcmVjb3JkLnBhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXRoLnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXREYXRhQmFzZWRCb2R5SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAhdGhpcy5mbGF0RGF0YSB8fCAodGhpcy5mbGF0RGF0YS5sZW5ndGggPCB0aGlzLl9kZWZhdWx0VGFyZ2V0UmVjb3JkTnVtYmVyKSA/XG4gICAgICAgICAgICAwIDogdGhpcy5kZWZhdWx0VGFyZ2V0Qm9keUhlaWdodDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNjcm9sbFRvKHJvdzogYW55IHwgbnVtYmVyLCBjb2x1bW46IGFueSB8IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgZGVsYXlTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgbGV0IHJlY29yZDogSVRyZWVHcmlkUmVjb3JkO1xuXG4gICAgICAgIGlmICh0eXBlb2Yocm93KSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0RhdGEgPSByb3c7XG4gICAgICAgICAgICBjb25zdCByb3dJRCA9IHRoaXMuX2dyaWRBUEkuZ2V0X3Jvd19pZChyb3dEYXRhKTtcbiAgICAgICAgICAgIHJlY29yZCA9IHRoaXMucHJvY2Vzc2VkUmVjb3Jkcy5nZXQocm93SUQpO1xuICAgICAgICAgICAgdGhpcy5fZ3JpZEFQSS5leHBhbmRfcGF0aF90b19yZWNvcmQocmVjb3JkKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucGFnaW5nKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93SW5kZXggPSB0aGlzLnByb2Nlc3NlZEV4cGFuZGVkRmxhdERhdGEuaW5kZXhPZihyb3dEYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdlID0gTWF0aC5mbG9vcihyb3dJbmRleCAvIHRoaXMucGVyUGFnZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYWdlICE9PSBwYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGF5U2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVsYXlTY3JvbGxpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudmVydGljYWxTY3JvbGxDb250YWluZXIub25EYXRhQ2hhbmdlZC5waXBlKGZpcnN0KCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxEaXJlY3RpdmUodGhpcy52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mKHJvdykgPT09ICdudW1iZXInID8gcm93IDogdGhpcy52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5pZ3hGb3JPZi5pbmRleE9mKHJlY29yZCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbERpcmVjdGl2ZSh0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHR5cGVvZihyb3cpID09PSAnbnVtYmVyJyA/IHJvdyA6IHRoaXMudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2YuaW5kZXhPZihyZWNvcmQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Ib3Jpem9udGFsbHkoY29sdW1uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIHB1YmxpYyBnZXRDb250ZXh0KHJvd0RhdGEsIHJvd0luZGV4KTogYW55IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICRpbXBsaWNpdDogcm93RGF0YSxcbiAgICAgICAgICAgIGluZGV4OiByb3dJbmRleCxcbiAgICAgICAgICAgIHRlbXBsYXRlSUQ6IHRoaXMuaXNTdW1tYXJ5Um93KHJvd0RhdGEpID8gJ3N1bW1hcnlSb3cnIDogJ2RhdGFSb3cnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZERhdGEoZm9ybWF0dGVycyA9IGZhbHNlLCBoZWFkZXJzID0gZmFsc2UpOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IFtdO1xuXG4gICAgICAgIGNvbnN0IHByb2Nlc3MgPSAocmVjb3JkKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVjb3JkLnN1bW1hcmllcykge1xuICAgICAgICAgICAgICAgIHNvdXJjZS5wdXNoKG51bGwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNvdXJjZS5wdXNoKHJlY29yZC5kYXRhKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLmZvckVhY2gocHJvY2Vzcyk7XG4gICAgICAgIHJldHVybiB0aGlzLmV4dHJhY3REYXRhRnJvbVNlbGVjdGlvbihzb3VyY2UsIGZvcm1hdHRlcnMsIGhlYWRlcnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQGhpZGRlblxuICAgICovXG4gICAgcHVibGljIGdldCB0ZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyZWREYXRhICYmIHRoaXMuZmlsdGVyZWREYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1wdHlHcmlkVGVtcGxhdGUgPyB0aGlzLmVtcHR5R3JpZFRlbXBsYXRlIDogdGhpcy5lbXB0eUZpbHRlcmVkR3JpZFRlbXBsYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNMb2FkaW5nICYmICghdGhpcy5kYXRhIHx8IHRoaXMuZGF0YUxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRpbmdHcmlkVGVtcGxhdGUgPyB0aGlzLmxvYWRpbmdHcmlkVGVtcGxhdGUgOiB0aGlzLmxvYWRpbmdHcmlkRGVmYXVsdFRlbXBsYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGF0YUxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1wdHlHcmlkVGVtcGxhdGUgPyB0aGlzLmVtcHR5R3JpZFRlbXBsYXRlIDogdGhpcy5lbXB0eUdyaWREZWZhdWx0VGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgd3JpdGVUb0RhdGEocm93SW5kZXg6IG51bWJlciwgdmFsdWU6IGFueSkge1xuICAgICAgICBtZXJnZU9iamVjdHModGhpcy5mbGF0RGF0YVtyb3dJbmRleF0sIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgIHByb3RlY3RlZCBpbml0Q29sdW1ucyhjb2xsZWN0aW9uOiBRdWVyeUxpc3Q8SWd4Q29sdW1uQ29tcG9uZW50PiwgY2I6IEZ1bmN0aW9uID0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5oYXNDb2x1bW5MYXlvdXRzKSB7XG4gICAgICAgICAgICAvLyBpbnZhbGlkIGNvbmZpZ3VyYXRpb24gLSB0cmVlIGdyaWQgc2hvdWxkIG5vdCBhbGxvdyBjb2x1bW4gbGF5b3V0c1xuICAgICAgICAgICAgLy8gcmVtb3ZlIGNvbHVtbiBsYXlvdXRzXG4gICAgICAgICAgICBjb25zdCBub25Db2x1bW5MYXlvdXRDb2x1bW5zID0gdGhpcy5jb2x1bW5MaXN0LmZpbHRlcigoY29sKSA9PiAhY29sLmNvbHVtbkxheW91dCAmJiAhY29sLmNvbHVtbkxheW91dENoaWxkKTtcbiAgICAgICAgICAgIHRoaXMuY29sdW1uTGlzdC5yZXNldChub25Db2x1bW5MYXlvdXRDb2x1bW5zKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5pbml0Q29sdW1ucyhjb2xsZWN0aW9uLCBjYik7XG4gICAgfVxufVxuIl19