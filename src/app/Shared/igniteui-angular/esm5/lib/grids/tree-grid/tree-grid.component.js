/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var NEXT_ID = 0;
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
var IgxTreeGridComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxTreeGridComponent, _super);
    function IgxTreeGridComponent(selectionService, crudService, colResizingService, gridAPI, selection, _transactions, elementRef, zone, document, cdr, resolver, differs, viewRef, navigation, filteringService, overlayService, summaryService, _displayDensityOptions) {
        var _this = _super.call(this, selectionService, crudService, gridAPI, selection, _transactions, elementRef, zone, document, cdr, resolver, differs, viewRef, navigation, filteringService, overlayService, summaryService, _displayDensityOptions) || this;
        _this.colResizingService = colResizingService;
        _this._transactions = _transactions;
        _this.document = document;
        _this.overlayService = overlayService;
        _this._displayDensityOptions = _displayDensityOptions;
        _this._id = "igx-tree-grid-" + NEXT_ID++;
        /**
         * Returns a map of all `ITreeGridRecord`s.
         * ```typescript
         * // gets the record with primaryKey=2
         * const states = this.grid.records.get(2);
         * ```
         * \@memberof IgxTreeGridComponent
         */
        _this.records = new Map();
        /**
         * Returns a map of all processed (filtered and sorted) `ITreeGridRecord`s.
         * ```typescript
         * // gets the processed record with primaryKey=2
         * const states = this.grid.processedRecords.get(2);
         * ```
         * \@memberof IgxTreeGridComponent
         */
        _this.processedRecords = new Map();
        /**
         * An \@Input property indicating whether child records should be deleted when their parent gets deleted.
         * By default it is set to true and deletes all children along with the parent.
         * ```html
         * <igx-tree-grid [data]="employeeData" [primaryKey]="'employeeID'" [foreignKey]="'parentID'" cascadeOnDelete="false">
         * </igx-tree-grid>
         * ```
         * \@memberof IgxTreeGridComponent
         */
        _this.cascadeOnDelete = true;
        _this._expansionDepth = Infinity;
        _this._expansionStates = new Map();
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
        _this.dragIndicatorIconTemplate = null;
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
        _this.onRowToggle = new EventEmitter();
        /**
         * @hidden
         */
        _this.loadingRows = new Set();
        _this._filteredData = null;
        _this._gridAPI = (/** @type {?} */ (gridAPI));
        return _this;
    }
    Object.defineProperty(IgxTreeGridComponent.prototype, "id", {
        /**
         * An @Input property that sets the value of the `id` attribute. If not provided it will be automatically generated.
         * ```html
         * <igx-tree-grid [id]="'igx-tree-grid-1'"></igx-tree-grid>
         * ```
         * @memberof IgxTreeGridComponent
         */
        get: /**
         * An \@Input property that sets the value of the `id` attribute. If not provided it will be automatically generated.
         * ```html
         * <igx-tree-grid [id]="'igx-tree-grid-1'"></igx-tree-grid>
         * ```
         * \@memberof IgxTreeGridComponent
         * @return {?}
         */
        function () {
            return this._id;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTreeGridComponent.prototype, "data", {
        /**
         * An @Input property that lets you fill the `IgxTreeGridComponent` with an array of data.
         * ```html
         * <igx-tree-grid [data]="Data" [autoGenerate]="true"></igx-tree-grid>
         * ```
         * @memberof IgxTreeGridComponent
         */
        get: /**
         * An \@Input property that lets you fill the `IgxTreeGridComponent` with an array of data.
         * ```html
         * <igx-tree-grid [data]="Data" [autoGenerate]="true"></igx-tree-grid>
         * ```
         * \@memberof IgxTreeGridComponent
         * @return {?}
         */
        function () {
            return this._data;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._data = value;
            this.summaryService.clearSummaryCache();
            if (this.shouldGenerate) {
                this.setupColumns();
                this.reflow();
            }
            this.cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTreeGridComponent.prototype, "filteredData", {
        /**
         * Returns an array of objects containing the filtered data in the `IgxGridComponent`.
         * ```typescript
         * let filteredData = this.grid.filteredData;
         * ```
         * @memberof IgxTreeGridComponent
         */
        get: /**
         * Returns an array of objects containing the filtered data in the `IgxGridComponent`.
         * ```typescript
         * let filteredData = this.grid.filteredData;
         * ```
         * \@memberof IgxTreeGridComponent
         * @return {?}
         */
        function () {
            return this._filteredData;
        },
        /**
         * Sets an array of objects containing the filtered data in the `IgxGridComponent`.
         * ```typescript
         * this.grid.filteredData = [{
         *       ID: 1,
         *       Name: "A"
         * }];
         * ```
         * @memberof IgxTreeGridComponent
         */
        set: /**
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
        function (value) {
            this._filteredData = value;
            if (this.rowSelectable) {
                this.updateHeaderCheckboxStatusOnFilter(this._filteredData);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTreeGridComponent.prototype, "transactions", {
        /**
         * Get transactions service for the grid.
         * @experimental @hidden
         */
        get: /**
         * Get transactions service for the grid.
         * \@experimental \@hidden
         * @return {?}
         */
        function () {
            return this._transactions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTreeGridComponent.prototype, "expansionDepth", {
        /**
         * An @Input property that sets the count of levels to be expanded in the `IgxTreeGridComponent`. By default it is
         * set to `Infinity` which means all levels would be expanded.
         * ```html
         * <igx-tree-grid #grid [data]="employeeData" [childDataKey]="'employees'" expansionDepth="1" [autoGenerate]="true"></igx-tree-grid>
         * ```
         * @memberof IgxTreeGridComponent
         */
        get: /**
         * An \@Input property that sets the count of levels to be expanded in the `IgxTreeGridComponent`. By default it is
         * set to `Infinity` which means all levels would be expanded.
         * ```html
         * <igx-tree-grid #grid [data]="employeeData" [childDataKey]="'employees'" expansionDepth="1" [autoGenerate]="true"></igx-tree-grid>
         * ```
         * \@memberof IgxTreeGridComponent
         * @return {?}
         */
        function () {
            return this._expansionDepth;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._expansionDepth = value;
            this.cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTreeGridComponent.prototype, "expansionStates", {
        /**
         * Returns a list of key-value pairs [row ID, expansion state]. Includes only states that differ from the default one.
         * ```typescript
         * const expansionStates = this.grid.expansionStates;
         * ```
         * @memberof IgxTreeGridComponent
         */
        get: /**
         * Returns a list of key-value pairs [row ID, expansion state]. Includes only states that differ from the default one.
         * ```typescript
         * const expansionStates = this.grid.expansionStates;
         * ```
         * \@memberof IgxTreeGridComponent
         * @return {?}
         */
        function () {
            return this._expansionStates;
        },
        /**
         * Sets a list of key-value pairs [row ID, expansion state].
         * ```typescript
         * const states = new Map<any, boolean>();
         * states.set(1, true);
         * this.grid.expansionStates = states;
         * ```
         * @memberof IgxTreeGridComponent
         */
        set: /**
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
        function (value) {
            this._expansionStates = this.cloneMap(value);
            this.cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTreeGridComponent.prototype, "rowLoadingIndicatorTemplate", {
        /**
         * An @Input property that provides a template for the row loading indicator when load on demand is enabled.
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
         * @memberof IgxTreeGridComponent
         */
        get: /**
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
        function () {
            return this._rowLoadingIndicatorTemplate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._rowLoadingIndicatorTemplate = value;
            this.cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTreeGridComponent.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.onRowToggle.pipe(takeUntil(this.destroy$)).subscribe(function (args) {
            _this.loadChildrenOnRowExpansion(args);
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTreeGridComponent.prototype.ngAfterContentInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.rowLoadingTemplate) {
            this._rowLoadingIndicatorTemplate = this.rowLoadingTemplate.template;
        }
        _super.prototype.ngAfterContentInit.call(this);
    };
    /**
     * @private
     * @param {?} args
     * @return {?}
     */
    IgxTreeGridComponent.prototype.loadChildrenOnRowExpansion = /**
     * @private
     * @param {?} args
     * @return {?}
     */
    function (args) {
        var _this = this;
        if (this.loadChildrenOnDemand) {
            /** @type {?} */
            var parentID_1 = args.rowID;
            if (args.expanded && !this._expansionStates.has(parentID_1)) {
                this.loadingRows.add(parentID_1);
                this.loadChildrenOnDemand(parentID_1, function (children) {
                    _this.loadingRows.delete(parentID_1);
                    _this.addChildRows(children, parentID_1);
                    _this.cdr.markForCheck();
                    requestAnimationFrame(function () {
                        /** @type {?} */
                        var cellID = _this.selection.first_item(_this.id + "-cell");
                        if (cellID) {
                            /** @type {?} */
                            var cell = _this._gridAPI.get_cell_by_index(cellID.rowIndex, cellID.columnID);
                            if (cell) {
                                cell.nativeElement.focus();
                            }
                        }
                    });
                });
            }
        }
    };
    /**
     * @private
     * @param {?} children
     * @param {?} parentID
     * @return {?}
     */
    IgxTreeGridComponent.prototype.addChildRows = /**
     * @private
     * @param {?} children
     * @param {?} parentID
     * @return {?}
     */
    function (children, parentID) {
        var _this = this;
        var e_1, _a, _b;
        if (this.primaryKey && this.foreignKey) {
            try {
                for (var children_1 = tslib_1.__values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                    var child = children_1_1.value;
                    child[this.foreignKey] = parentID;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            (_b = this.data).push.apply(_b, tslib_1.__spread(children));
        }
        else if (this.childDataKey) {
            /** @type {?} */
            var parent_1 = this.records.get(parentID);
            /** @type {?} */
            var parentData = parent_1.data;
            if (this.transactions.enabled && this.transactions.getAggregatedChanges(true).length) {
                /** @type {?} */
                var path = [];
                while (parent_1) {
                    path.push(parent_1.rowID);
                    parent_1 = parent_1.parent;
                }
                /** @type {?} */
                var collection = this.data;
                /** @type {?} */
                var record = void 0;
                var _loop_1 = function (i) {
                    /** @type {?} */
                    var pid = path[i];
                    record = collection.find(function (r) { return r[_this.primaryKey] === pid; });
                    if (!record) {
                        return "break";
                    }
                    collection = record[this_1.childDataKey];
                };
                var this_1 = this;
                for (var i = path.length - 1; i >= 0; i--) {
                    var state_1 = _loop_1(i);
                    if (state_1 === "break")
                        break;
                }
                if (record) {
                    parentData = record;
                }
            }
            parentData[this.childDataKey] = children;
        }
        this._pipeTrigger++;
    };
    /**
     * @private
     * @param {?} mapIn
     * @return {?}
     */
    IgxTreeGridComponent.prototype.cloneMap = /**
     * @private
     * @param {?} mapIn
     * @return {?}
     */
    function (mapIn) {
        /** @type {?} */
        var mapCloned = new Map();
        mapIn.forEach(function (value, key, mapObj) {
            mapCloned.set(key, value);
        });
        return mapCloned;
    };
    /**
     * Expands the `IgxTreeGridRowComponent` with the specified rowID.
     * @param rowID The identifier of the row to be expanded.
     * ```typescript
     * this.grid.expandRow(2);
     * ```
     * @memberof IgxTreeGridComponent
     */
    /**
     * Expands the `IgxTreeGridRowComponent` with the specified rowID.
     * \@memberof IgxTreeGridComponent
     * @param {?} rowID The identifier of the row to be expanded.
     * ```typescript
     * this.grid.expandRow(2);
     * ```
     * @return {?}
     */
    IgxTreeGridComponent.prototype.expandRow = /**
     * Expands the `IgxTreeGridRowComponent` with the specified rowID.
     * \@memberof IgxTreeGridComponent
     * @param {?} rowID The identifier of the row to be expanded.
     * ```typescript
     * this.grid.expandRow(2);
     * ```
     * @return {?}
     */
    function (rowID) {
        this._gridAPI.expand_row(rowID);
    };
    /**
     * Collapses the `IgxTreeGridRowComponent` with the specified rowID.
     * @param rowID The identifier of the row to be collapsed.
     * ```typescript
     * this.grid.collapseRow(2);
     * ```
     * @memberof IgxTreeGridComponent
     */
    /**
     * Collapses the `IgxTreeGridRowComponent` with the specified rowID.
     * \@memberof IgxTreeGridComponent
     * @param {?} rowID The identifier of the row to be collapsed.
     * ```typescript
     * this.grid.collapseRow(2);
     * ```
     * @return {?}
     */
    IgxTreeGridComponent.prototype.collapseRow = /**
     * Collapses the `IgxTreeGridRowComponent` with the specified rowID.
     * \@memberof IgxTreeGridComponent
     * @param {?} rowID The identifier of the row to be collapsed.
     * ```typescript
     * this.grid.collapseRow(2);
     * ```
     * @return {?}
     */
    function (rowID) {
        this._gridAPI.collapse_row(rowID);
    };
    /**
     * Toggles the expansion state of the `IgxTreeGridRowComponent` with the specified rowID.
     * @param rowID The identifier of the row to be toggled.
     * ```typescript
     * this.grid.toggleRow(2);
     * ```
     * @memberof IgxTreeGridComponent
     */
    /**
     * Toggles the expansion state of the `IgxTreeGridRowComponent` with the specified rowID.
     * \@memberof IgxTreeGridComponent
     * @param {?} rowID The identifier of the row to be toggled.
     * ```typescript
     * this.grid.toggleRow(2);
     * ```
     * @return {?}
     */
    IgxTreeGridComponent.prototype.toggleRow = /**
     * Toggles the expansion state of the `IgxTreeGridRowComponent` with the specified rowID.
     * \@memberof IgxTreeGridComponent
     * @param {?} rowID The identifier of the row to be toggled.
     * ```typescript
     * this.grid.toggleRow(2);
     * ```
     * @return {?}
     */
    function (rowID) {
        this._gridAPI.toggle_row_expansion(rowID);
    };
    /**
     * Expands all rows.
     * ```typescript
     * this.grid.expandAll();
     * ```
     * @memberof IgxTreeGridComponent
     */
    /**
     * Expands all rows.
     * ```typescript
     * this.grid.expandAll();
     * ```
     * \@memberof IgxTreeGridComponent
     * @return {?}
     */
    IgxTreeGridComponent.prototype.expandAll = /**
     * Expands all rows.
     * ```typescript
     * this.grid.expandAll();
     * ```
     * \@memberof IgxTreeGridComponent
     * @return {?}
     */
    function () {
        this._expansionDepth = Infinity;
        this.expansionStates = new Map();
    };
    /**
     * Collapses all rows.
     * ```typescript
     * this.grid.collapseAll();
     * ```
     * @memberof IgxTreeGridComponent
     */
    /**
     * Collapses all rows.
     * ```typescript
     * this.grid.collapseAll();
     * ```
     * \@memberof IgxTreeGridComponent
     * @return {?}
     */
    IgxTreeGridComponent.prototype.collapseAll = /**
     * Collapses all rows.
     * ```typescript
     * this.grid.collapseAll();
     * ```
     * \@memberof IgxTreeGridComponent
     * @return {?}
     */
    function () {
        this._expansionDepth = 0;
        this.expansionStates = new Map();
    };
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
     * @param data
     * @param parentRowID
     * @memberof IgxTreeGridComponent
     */
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
    IgxTreeGridComponent.prototype.addRow = /**
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
    function (data, parentRowID) {
        if (parentRowID !== undefined && parentRowID !== null) {
            _super.prototype.endEdit.call(this, true);
            /** @type {?} */
            var state = this.transactions.getState(parentRowID);
            // we should not allow adding of rows as child of deleted row
            if (state && state.type === TransactionType.DELETE) {
                throw Error("Cannot add child row to deleted parent row");
            }
            /** @type {?} */
            var parentRecord = this.records.get(parentRowID);
            if (!parentRecord) {
                throw Error('Invalid parent row ID!');
            }
            this.summaryService.clearSummaryCache({ rowID: parentRecord.rowID });
            if (this.primaryKey && this.foreignKey) {
                data[this.foreignKey] = parentRowID;
                _super.prototype.addRow.call(this, data);
            }
            else {
                /** @type {?} */
                var parentData = parentRecord.data;
                /** @type {?} */
                var childKey = this.childDataKey;
                if (this.transactions.enabled) {
                    /** @type {?} */
                    var rowId = this.primaryKey ? data[this.primaryKey] : data;
                    /** @type {?} */
                    var path = [];
                    path.push.apply(path, tslib_1.__spread(this.generateRowPath(parentRowID)));
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
                this.onRowAdded.emit({ data: data });
                this._pipeTrigger++;
                this.cdr.markForCheck();
            }
        }
        else {
            if (this.primaryKey && this.foreignKey) {
                /** @type {?} */
                var rowID = data[this.foreignKey];
                this.summaryService.clearSummaryCache({ rowID: rowID });
            }
            _super.prototype.addRow.call(this, data);
        }
    };
    /** @hidden */
    /**
     * @hidden
     * @param {?} rowId
     * @return {?}
     */
    IgxTreeGridComponent.prototype.deleteRowById = /**
     * @hidden
     * @param {?} rowId
     * @return {?}
     */
    function (rowId) {
        //  if this is flat self-referencing data, and CascadeOnDelete is set to true
        //  and if we have transactions we should start pending transaction. This allows
        //  us in case of delete action to delete all child rows as single undo action
        this._gridAPI.deleteRowById(rowId);
    };
    /** @hidden */
    /**
     * @hidden
     * @param {?} rowId
     * @return {?}
     */
    IgxTreeGridComponent.prototype.generateRowPath = /**
     * @hidden
     * @param {?} rowId
     * @return {?}
     */
    function (rowId) {
        /** @type {?} */
        var path = [];
        /** @type {?} */
        var record = this.records.get(rowId);
        while (record.parent) {
            path.push(record.parent.rowID);
            record = record.parent;
        }
        return path.reverse();
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @protected
     * @return {?}
     */
    IgxTreeGridComponent.prototype.getDataBasedBodyHeight = /**
     * @hidden \@internal
     * @protected
     * @return {?}
     */
    function () {
        return !this.flatData || (this.flatData.length < this._defaultTargetRecordNumber) ?
            0 : this.defaultTargetBodyHeight;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    IgxTreeGridComponent.prototype.scrollTo = /**
     * @hidden
     * @protected
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    function (row, column) {
        var _this = this;
        /** @type {?} */
        var delayScrolling = false;
        /** @type {?} */
        var record;
        if (typeof (row) !== 'number') {
            /** @type {?} */
            var rowData = row;
            /** @type {?} */
            var rowID = this._gridAPI.get_row_id(rowData);
            record = this.processedRecords.get(rowID);
            this._gridAPI.expand_path_to_record(record);
            if (this.paging) {
                /** @type {?} */
                var rowIndex = this.processedExpandedFlatData.indexOf(rowData);
                /** @type {?} */
                var page = Math.floor(rowIndex / this.perPage);
                if (this.page !== page) {
                    delayScrolling = true;
                    this.page = page;
                }
            }
        }
        if (delayScrolling) {
            this.verticalScrollContainer.onDataChanged.pipe(first()).subscribe(function () {
                _this.scrollDirective(_this.verticalScrollContainer, typeof (row) === 'number' ? row : _this.verticalScrollContainer.igxForOf.indexOf(record));
            });
        }
        else {
            this.scrollDirective(this.verticalScrollContainer, typeof (row) === 'number' ? row : this.verticalScrollContainer.igxForOf.indexOf(record));
        }
        this.scrollToHorizontally(column);
    };
    /**
    * @hidden
    */
    /**
     * @hidden
     * @param {?} rowData
     * @param {?} rowIndex
     * @return {?}
     */
    IgxTreeGridComponent.prototype.getContext = /**
     * @hidden
     * @param {?} rowData
     * @param {?} rowIndex
     * @return {?}
     */
    function (rowData, rowIndex) {
        return {
            $implicit: rowData,
            index: rowIndex,
            templateID: this.isSummaryRow(rowData) ? 'summaryRow' : 'dataRow'
        };
    };
    /**
     * @inheritdoc
     */
    /**
     * \@inheritdoc
     * @param {?=} formatters
     * @param {?=} headers
     * @return {?}
     */
    IgxTreeGridComponent.prototype.getSelectedData = /**
     * \@inheritdoc
     * @param {?=} formatters
     * @param {?=} headers
     * @return {?}
     */
    function (formatters, headers) {
        if (formatters === void 0) { formatters = false; }
        if (headers === void 0) { headers = false; }
        /** @type {?} */
        var source = [];
        /** @type {?} */
        var process = function (record) {
            if (record.summaries) {
                source.push(null);
                return;
            }
            source.push(record.data);
        };
        this.verticalScrollContainer.igxForOf.forEach(process);
        return this.extractDataFromSelection(source, formatters, headers);
    };
    Object.defineProperty(IgxTreeGridComponent.prototype, "template", {
        /**
        * @hidden
        */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            if (this.filteredData && this.filteredData.length === 0) {
                return this.emptyGridTemplate ? this.emptyGridTemplate : this.emptyFilteredGridTemplate;
            }
            if (this.isLoading && (!this.data || this.dataLength === 0)) {
                return this.loadingGridTemplate ? this.loadingGridTemplate : this.loadingGridDefaultTemplate;
            }
            if (this.dataLength === 0) {
                return this.emptyGridTemplate ? this.emptyGridTemplate : this.emptyGridDefaultTemplate;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @protected
     * @param {?} rowIndex
     * @param {?} value
     * @return {?}
     */
    IgxTreeGridComponent.prototype.writeToData = /**
     * @protected
     * @param {?} rowIndex
     * @param {?} value
     * @return {?}
     */
    function (rowIndex, value) {
        mergeObjects(this.flatData[rowIndex], value);
    };
    /**
     * @hidden
    */
    /**
     * @hidden
     * @protected
     * @param {?} collection
     * @param {?=} cb
     * @return {?}
     */
    IgxTreeGridComponent.prototype.initColumns = /**
     * @hidden
     * @protected
     * @param {?} collection
     * @param {?=} cb
     * @return {?}
     */
    function (collection, cb) {
        if (cb === void 0) { cb = null; }
        if (this.hasColumnLayouts) {
            // invalid configuration - tree grid should not allow column layouts
            // remove column layouts
            /** @type {?} */
            var nonColumnLayoutColumns = this.columnList.filter(function (col) { return !col.columnLayout && !col.columnLayoutChild; });
            this.columnList.reset(nonColumnLayoutColumns);
        }
        _super.prototype.initColumns.call(this, collection, cb);
    };
    IgxTreeGridComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    selector: 'igx-tree-grid',
                    template: "<igx-grid-toolbar role=\"rowgroup\" [style.width.px]='outerWidth' *ngIf=\"showToolbar\" [gridID]=\"id\"\n    [displayDensity]=\"displayDensity\" #toolbar>\n</igx-grid-toolbar>\n\n<div class=\"igx-grid__thead\">\n    <div class=\"igx-grid__thead-wrapper\" role=\"rowgroup\" [style.width.px]='calcWidth + 1' #theadRow>\n        <div class=\"igx-grid__tr\" [style.width.px]='calcWidth + 1' role=\"row\">\n            <span *ngIf=\"hasMovableColumns && draggedColumn && pinnedColumns.length <= 0\"\n                [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\" id=\"left\"\n                class=\"igx-grid__scroll-on-drag-left\" [style.left.px]=\"featureColumnsWidth\"></span>\n            <span *ngIf=\"hasMovableColumns && draggedColumn && pinnedColumns.length > 0\"\n                [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\" id=\"left\"\n                class=\"igx-grid__scroll-on-drag-pinned\" [style.left.px]=\"pinnedWidth\"></span>\n            <ng-container *ngIf=\"rowDraggable\">\n                <div class=\"igx-grid__drag-indicator\" #headerDragContainer>\n                    <div style=\"visibility: hidden;\">\n                        <ng-container\n                            *ngTemplateOutlet=\"this.dragIndicatorIconTemplate ? this.dragIndicatorIconTemplate : this.dragIndicatorIconBase\">\n                        </ng-container>\n                    </div>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"rowSelectable\">\n                <div class=\"igx-grid__cbx-selection\" #headerCheckboxContainer [ngClass]=\"{\n                    'igx-grid__cbx-selection--push': filteringService.isFilterRowVisible\n                }\">\n                    <igx-checkbox [checked]=\"allRowsSelected\" (change)=\"onHeaderCheckboxClick($event, filteredData)\"\n                        disableRipple=\"true\" [aria-label]=\"headerCheckboxAriaLabel\" #headerCheckbox></igx-checkbox>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"pinnedColumns.length > 0\">\n                <ng-template ngFor let-col [ngForOf]=\"pinnedColumns | igxTopLevel\">\n                    <igx-grid-header-group [column]=\"col\" [gridID]=\"id\" [style.min-width.px]=\"getHeaderGroupWidth(col)\"\n                        [style.flex-basis.px]=\"getHeaderGroupWidth(col)\"></igx-grid-header-group>\n                </ng-template>\n            </ng-container>\n            <ng-template igxGridFor let-col [igxGridForOf]=\"unpinnedColumns | igxTopLevel\"\n                [igxForScrollOrientation]=\"'horizontal'\" [igxForScrollContainer]=\"parentVirtDir\"\n                [igxForContainerSize]='unpinnedWidth' [igxForTrackBy]='trackColumnChanges'\n                [igxForSizePropName]=\"'calcPixelWidth'\" #headerContainer>\n                <igx-grid-header-group [column]=\"col\" [gridID]=\"id\" [style.min-width.px]=\"getHeaderGroupWidth(col)\"\n                    [style.flex-basis.px]=\"getHeaderGroupWidth(col)\"></igx-grid-header-group>\n            </ng-template>\n        </div>\n        <igx-grid-filtering-row #filteringRow *ngIf=\"filteringService.isFilterRowVisible\"\n            [column]=\"filteringService.filteredColumn\"></igx-grid-filtering-row>\n    </div>\n    <div class=\"igx-grid__thead-thumb\" [hidden]='!hasVerticalSroll()' [style.width.px]=\"scrollWidth\"></div>\n    <span *ngIf=\"hasMovableColumns && draggedColumn\" [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\"\n        id=\"right\" class=\"igx-grid__scroll-on-drag-right\"></span>\n</div>\n\n<div igxGridBody (keydown.control.c)=\"copyHandlerIE()\" (copy)=\"copyHandler($event)\" class=\"igx-grid__tbody\">\n    <div class=\"igx-grid__tbody-content\" role=\"rowgroup\" (onDragStop)=\"selectionService.dragMode = $event\"\n        (onDragScroll)=\"dragScroll($event)\" [igxGridDragSelect]=\"selectionService.dragMode\"\n        [style.height.px]='calcHeight' [style.width.px]='calcWidth' #tbody (scroll)='scrollHandler($event)'\n        (wheel)=\"wheelHandler()\">\n        <span *ngIf=\"hasMovableColumns && draggedColumn && pinnedColumns.length <= 0\"\n            [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\" id=\"left\"\n            class=\"igx-grid__scroll-on-drag-left\"></span>\n        <span *ngIf=\"hasMovableColumns && draggedColumn && pinnedColumns.length > 0\"\n            [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\" id=\"left\"\n            class=\"igx-grid__scroll-on-drag-pinned\" [style.left.px]=\"pinnedWidth\"></span>\n        <ng-template igxGridFor let-rowData\n            [igxGridForOf]=\"data\n        | treeGridTransaction:id:pipeTrigger\n        | treeGridHierarchizing:primaryKey:foreignKey:childDataKey:id:pipeTrigger\n        | treeGridFiltering:filteringExpressionsTree:id:pipeTrigger\n        | treeGridSorting:sortingExpressions:id:pipeTrigger\n        | treeGridFlattening:id:expansionDepth:expansionStates:pipeTrigger\n        | treeGridPaging:page:perPage:id:pipeTrigger\n        | treeGridSummary:hasSummarizedColumns:summaryCalculationMode:summaryPosition:id:pipeTrigger:summaryPipeTrigger\" let-rowIndex=\"index\"\n            [igxForScrollOrientation]=\"'vertical'\" [igxForScrollContainer]='verticalScroll'\n            [igxForContainerSize]='calcHeight' [igxForItemSize]=\"renderedRowHeight\" #verticalScrollContainer\n            (onChunkPreload)=\"dataLoading($event)\">\n            <ng-template #record_template>\n                <igx-tree-grid-row [gridID]=\"id\" [index]=\"rowIndex\" [treeRow]=\"rowData\" #row>\n                </igx-tree-grid-row>\n            </ng-template>\n            <ng-template #summary_template>\n                <igx-grid-summary-row [gridID]=\"id\" [summaries]=\"rowData.summaries\"\n                    [firstCellIndentation]=\"rowData.cellIndentation\" [index]=\"rowIndex\"\n                    class=\"igx-grid__summaries--body\" #summaryRow>\n                </igx-grid-summary-row>\n            </ng-template>\n\n            <ng-template [igxTemplateOutlet]='isSummaryRow(rowData) ? summary_template : record_template'\n                [igxTemplateOutletContext]='getContext(rowData, rowIndex)'\n                (onCachedViewLoaded)='cachedViewLoaded($event)'>\n            </ng-template>\n        </ng-template>\n        <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n        <div class=\"igx-grid__row-editing-outlet\" igxOverlayOutlet #igxRowEditingOverlayOutlet></div>\n    </div>\n    <span *ngIf=\"hasMovableColumns && draggedColumn\" [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\"\n        id=\"right\" class=\"igx-grid__scroll-on-drag-right\"></span>\n    <div [hidden]='!hasVerticalSroll()' class=\"igx-grid__tbody-scrollbar\" [style.width.px]=\"scrollWidth\"\n        [style.height.px]='calcHeight'>\n        <ng-template igxGridFor [igxGridForOf]='[]' #verticalScrollHolder></ng-template>\n    </div>\n</div>\n\n<div class=\"igx-grid__tfoot\" [style.width.px]='outerWidth' role=\"rowgroup\" [style.height.px]='summariesHeight' #tfoot>\n    <igx-grid-summary-row [style.width.px]='calcWidth' [style.height.px]='summariesHeight'\n        *ngIf=\"hasSummarizedColumns && rootSummariesEnabled\" [gridID]=\"id\"\n        [summaries]=\"id | igxGridSummaryDataPipe:summaryService.retriggerRootPipe\" [index]=\"0\"\n        class=\"igx-grid__summaries\" #summaryRow>\n    </igx-grid-summary-row>\n    <div class=\"igx-grid__tfoot-thumb\" [hidden]='!hasVerticalSroll()' [style.height.px]='summariesHeight'\n        [style.width.px]=\"scrollWidth\"></div>\n</div>\n\n<div class=\"igx-grid__scroll\" [style.height]=\"'18px'\" #scr [hidden]=\"unpinnedWidth - totalWidth >= 0\">\n    <div class=\"igx-grid__scroll-start\" [style.width.px]='pinnedWidth' [hidden]=\"pinnedWidth === 0\"></div>\n    <div class=\"igx-grid__scroll-main\" [style.width.px]='unpinnedWidth'>\n        <ng-template igxGridFor [igxGridForOf]='[]' #scrollContainer>\n        </ng-template>\n    </div>\n</div>\n\n<div class=\"igx-grid__footer\" #footer>\n    <ng-content select=\"igx-grid-footer\"></ng-content>\n    <ng-container *ngIf=\"paging && totalRecords\">\n        <ng-container\n            *ngTemplateOutlet=\"paginationTemplate ? paginationTemplate : defaultPaginator; context: {$implicit: this}\">\n        </ng-container>\n    </ng-container>\n</div>\n\n<ng-template #defaultPaginator>\n    <igx-paginator [displayDensity]=\"displayDensity\" [(page)]=\"page\" [totalRecords]=\"processedExpandedFlatData.length\"\n        [(perPage)]=\"perPage\">\n    </igx-paginator>\n</ng-template>\n\n<ng-template #emptyFilteredGrid>\n    <span class=\"igx-grid__tbody-message\">{{emptyFilteredGridMessage}}</span>\n</ng-template>\n\n<ng-template #defaultEmptyGrid>\n    <span class=\"igx-grid__tbody-message\">{{emptyGridMessage}}</span>\n</ng-template>\n\n<ng-template #defaultLoadingGrid>\n    <div class=\"igx-grid__loading\">\n        <igx-circular-bar [indeterminate]=\"true\">\n        </igx-circular-bar>\n    </div>\n</ng-template>\n\n<div *ngIf=\"rowEditable\" igxToggle>\n    <div [className]=\"bannerClass\">\n        <ng-container\n            *ngTemplateOutlet=\"rowEditContainer; context: { rowChangesCount: rowChangesCount, endEdit: endEdit.bind(this) }\">\n        </ng-container>\n    </div>\n</div>\n\n<ng-template #defaultRowEditText>\n    You have {{ rowChangesCount }} changes in this row\n</ng-template>\n\n<ng-template #defaultRowEditActions>\n    <button igxButton igxRowEditTabStop (click)=\"endEdit(false, $event)\">Cancel</button>\n    <button igxButton igxRowEditTabStop (click)=\"endEdit(true, $event)\">Done</button>\n</ng-template>\n\n<ng-template #defaultRowEditTemplate>\n    <div class=\"igx-banner__message\">\n        <span class=\"igx-banner__text\">\n            <ng-container\n                *ngTemplateOutlet=\"rowEditText ? rowEditText : defaultRowEditText; context: { $implicit: rowChangesCount }\">\n            </ng-container>\n        </span>\n    </div>\n    <div class=\"igx-banner__actions\">\n        <div class=\"igx-banner__row\">\n            <ng-container\n                *ngTemplateOutlet=\"rowEditActions ? rowEditActions : defaultRowEditActions; context: { $implicit: endEdit.bind(this) }\">\n            </ng-container>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #dragIndicatorIconBase>\n    <igx-icon fontSet=\"material\">drag_indicator</igx-icon>\n</ng-template>\n\n<igx-grid-column-resizer *ngIf=\"colResizingService.showResizer\"></igx-grid-column-resizer>\n<div class=\"igx-grid__outlet\" #igxFilteringOverlayOutlet igxOverlayOutlet></div>\n",
                    providers: [
                        IgxGridSelectionService, IgxGridCRUDService, IgxTreeGridNavigationService, IgxGridSummaryService,
                        { provide: GridBaseAPIService, useClass: IgxTreeGridAPIService },
                        { provide: IgxGridBaseComponent, useExisting: forwardRef(function () { return IgxTreeGridComponent; }) }, IgxFilteringService, IgxForOfSyncService
                    ]
                }] }
    ];
    /** @nocollapse */
    IgxTreeGridComponent.ctorParameters = function () { return [
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
    ]; };
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
    return IgxTreeGridComponent;
}(IgxGridBaseComponent));
export { IgxTreeGridComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvdHJlZS1ncmlkL3RyZWUtZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsTUFBTSxFQUNOLFlBQVksRUFDWixNQUFNLEVBQ04sTUFBTSxFQUNOLFVBQVUsRUFDVixRQUFRLEVBRVIsV0FBVyxFQUVYLFlBQVksRUFFWixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFxQixNQUFNLHdCQUF3QixDQUFDO0FBQ3JHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBELE9BQU8sRUFBMEIsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV4RixPQUFPLEVBQThDLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3JILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMx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QUFDLDZCQUE2QixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzhDQWlCL0UsS0FBSzt1Q0F1QkwsS0FBSzs4QkFzQkwsTUFBTTt3Q0FlTixTQUFTLFNBQUMsdUJBQXVCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBOFgzRSwyQkFBQztDQUFBLEFBOXNCRCxDQVUwQyxvQkFBb0IsR0Fvc0I3RDtTQXBzQlksb0JBQW9COzs7Ozs7SUFDN0IsbUNBQTJDOzs7OztJQUMzQyxxQ0FBYzs7Ozs7SUFDZCw0REFBdUQ7Ozs7O0lBZ0Z2RCx3Q0FBdUI7Ozs7O0lBS3ZCLHlEQUF3Qzs7Ozs7Ozs7OztJQVV4QywyQ0FBc0M7Ozs7Ozs7Ozs7SUFVdEMsdUNBQTRFOzs7Ozs7Ozs7O0lBVTVFLG9EQUErQzs7Ozs7Ozs7OztJQVUvQyxnREFBcUY7Ozs7Ozs7OztJQVNyRiw0Q0FDb0I7Ozs7Ozs7Ozs7SUFVcEIsMENBQ2tCOzs7Ozs7Ozs7Ozs7O0lBYWxCLDhDQUNzQjs7Ozs7Ozs7Ozs7SUFXdEIsK0NBQzhCOzs7OztJQUU5QiwrQ0FBbUM7Ozs7O0lBb0JuQyxnREFBc0U7Ozs7OztJQStCdEUsa0RBQ3NFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW9CdEUseURBQzBEOzs7Ozs7Ozs7Ozs7Ozs7SUF1QzFELG9EQUNzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBcUJ0RiwyQ0FDNkQ7Ozs7O0lBSzdELDJDQUFvQzs7Ozs7SUFFcEMsd0NBQXdDOzs7OztJQUN4Qyw2Q0FBNkI7Ozs7OztJQU03QixxREFDK0M7O0lBSzNDLGtEQUFtRDs7Ozs7SUFHbkQsNkNBQWtJOztJQUdsSSx3Q0FBaUM7Ozs7O0lBT2pDLDhDQUFzRTs7Ozs7SUFFdEUsc0RBQWlHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnQsXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSW5wdXQsXG4gICAgSXRlcmFibGVEaWZmZXJzLFxuICAgIFZpZXdDb250YWluZXJSZWYsXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbmplY3QsXG4gICAgTmdab25lLFxuICAgIGZvcndhcmRSZWYsXG4gICAgT3B0aW9uYWwsXG4gICAgT25Jbml0LFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9zZWxlY3Rpb24nO1xuaW1wb3J0IHsgSWd4VHJlZUdyaWRBUElTZXJ2aWNlIH0gZnJvbSAnLi90cmVlLWdyaWQtYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4R3JpZEJhc2VDb21wb25lbnQsIElneEdyaWRUcmFuc2FjdGlvbiwgSUdyaWREYXRhQmluZGFibGUgfSBmcm9tICcuLi9ncmlkLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElUcmVlR3JpZFJlY29yZCB9IGZyb20gJy4vdHJlZS1ncmlkLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgSURpc3BsYXlEZW5zaXR5T3B0aW9ucywgRGlzcGxheURlbnNpdHlUb2tlbiB9IGZyb20gJy4uLy4uL2NvcmUvZGlzcGxheURlbnNpdHknO1xuaW1wb3J0IHsgSVJvd1RvZ2dsZUV2ZW50QXJncyB9IGZyb20gJy4vdHJlZS1ncmlkLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgSGllcmFyY2hpY2FsVHJhbnNhY3Rpb24sIEhpZXJhcmNoaWNhbFN0YXRlLCBUcmFuc2FjdGlvblR5cGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90cmFuc2FjdGlvbi90cmFuc2FjdGlvbic7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJZ3hIaWVyYXJjaGljYWxUcmFuc2FjdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBJZ3hGaWx0ZXJpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vZmlsdGVyaW5nL2dyaWQtZmlsdGVyaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4VHJlZUdyaWROYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4vdHJlZS1ncmlkLW5hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hHcmlkU3VtbWFyeVNlcnZpY2UgfSBmcm9tICcuLi9zdW1tYXJpZXMvZ3JpZC1zdW1tYXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4R3JpZFNlbGVjdGlvblNlcnZpY2UsIElneEdyaWRDUlVEU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvZ3JpZC1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgbWVyZ2VPYmplY3RzIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBJZ3hPdmVybGF5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IElneENvbHVtblJlc2l6aW5nU2VydmljZSB9IGZyb20gJy4uL2dyaWQtY29sdW1uLXJlc2l6aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBmaXJzdCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSWd4Um93TG9hZGluZ0luZGljYXRvclRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi90cmVlLWdyaWQuZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBJZ3hGb3JPZlN5bmNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9mb3Itb2YvZm9yX29mLnN5bmMuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hEcmFnSW5kaWNhdG9ySWNvbkRpcmVjdGl2ZSB9IGZyb20gJy4uL3Jvdy1kcmFnLmRpcmVjdGl2ZSc7XG5cbmxldCBORVhUX0lEID0gMDtcblxuLyoqXG4gKiAqKklnbml0ZSBVSSBmb3IgQW5ndWxhciBUcmVlIEdyaWQqKiAtXG4gKiBbRG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly93d3cuaW5mcmFnaXN0aWNzLmNvbS9wcm9kdWN0cy9pZ25pdGUtdWktYW5ndWxhci9hbmd1bGFyL2NvbXBvbmVudHMvZ3JpZC5odG1sKVxuICpcbiAqIFRoZSBJZ25pdGUgVUkgVHJlZSBHcmlkIGRpc3BsYXlzIGFuZCBtYW5pcHVsYXRlcyBoaWVyYXJjaGljYWwgZGF0YSB3aXRoIGNvbnNpc3RlbnQgc2NoZW1hIGZvcm1hdHRlZCBhcyBhIHRhYmxlIGFuZFxuICogcHJvdmlkZXMgZmVhdHVyZXMgc3VjaCBhcyBzb3J0aW5nLCBmaWx0ZXJpbmcsIGVkaXRpbmcsIGNvbHVtbiBwaW5uaW5nLCBwYWdpbmcsIGNvbHVtbiBtb3ZpbmcgYW5kIGhpZGluZy5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgaHRtbFxuICogPGlneC10cmVlLWdyaWQgW2RhdGFdPVwiZW1wbG95ZWVEYXRhXCIgcHJpbWFyeUtleT1cImVtcGxveWVlSURcIiBmb3JlaWduS2V5PVwiUElEXCIgYXV0b0dlbmVyYXRlPVwiZmFsc2VcIj5cbiAqICAgPGlneC1jb2x1bW4gZmllbGQ9XCJmaXJzdFwiIGhlYWRlcj1cIkZpcnN0IE5hbWVcIj48L2lneC1jb2x1bW4+XG4gKiAgIDxpZ3gtY29sdW1uIGZpZWxkPVwibGFzdFwiIGhlYWRlcj1cIkxhc3QgTmFtZVwiPjwvaWd4LWNvbHVtbj5cbiAqICAgPGlneC1jb2x1bW4gZmllbGQ9XCJyb2xlXCIgaGVhZGVyPVwiUm9sZVwiPjwvaWd4LWNvbHVtbj5cbiAqIDwvaWd4LXRyZWUtZ3JpZD5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgICBzZWxlY3RvcjogJ2lneC10cmVlLWdyaWQnLFxuICAgIHRlbXBsYXRlVXJsOiAndHJlZS1ncmlkLmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSWd4R3JpZFNlbGVjdGlvblNlcnZpY2UsIElneEdyaWRDUlVEU2VydmljZSwgSWd4VHJlZUdyaWROYXZpZ2F0aW9uU2VydmljZSwgSWd4R3JpZFN1bW1hcnlTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6IEdyaWRCYXNlQVBJU2VydmljZSwgdXNlQ2xhc3M6IElneFRyZWVHcmlkQVBJU2VydmljZSB9LFxuICAgICAgICB7IHByb3ZpZGU6IElneEdyaWRCYXNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJZ3hUcmVlR3JpZENvbXBvbmVudCkgfSwgSWd4RmlsdGVyaW5nU2VydmljZSwgSWd4Rm9yT2ZTeW5jU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgSWd4VHJlZUdyaWRDb21wb25lbnQgZXh0ZW5kcyBJZ3hHcmlkQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIElHcmlkRGF0YUJpbmRhYmxlLCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xuICAgIHByaXZhdGUgX2lkID0gYGlneC10cmVlLWdyaWQtJHtORVhUX0lEKyt9YDtcbiAgICBwcml2YXRlIF9kYXRhO1xuICAgIHByaXZhdGUgX3Jvd0xvYWRpbmdJbmRpY2F0b3JUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBgaWRgIGF0dHJpYnV0ZS4gSWYgbm90IHByb3ZpZGVkIGl0IHdpbGwgYmUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtdHJlZS1ncmlkIFtpZF09XCInaWd4LXRyZWUtZ3JpZC0xJ1wiPjwvaWd4LXRyZWUtZ3JpZD5cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneFRyZWVHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBsZXRzIHlvdSBmaWxsIHRoZSBgSWd4VHJlZUdyaWRDb21wb25lbnRgIHdpdGggYW4gYXJyYXkgb2YgZGF0YS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC10cmVlLWdyaWQgW2RhdGFdPVwiRGF0YVwiIFthdXRvR2VuZXJhdGVdPVwidHJ1ZVwiPjwvaWd4LXRyZWUtZ3JpZD5cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneFRyZWVHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGRhdGEoKTogYW55W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGRhdGEodmFsdWU6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zdW1tYXJ5U2VydmljZS5jbGVhclN1bW1hcnlDYWNoZSgpO1xuICAgICAgICBpZiAodGhpcy5zaG91bGRHZW5lcmF0ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXR1cENvbHVtbnMoKTtcbiAgICAgICAgICAgIHRoaXMucmVmbG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBvYmplY3RzIGNvbnRhaW5pbmcgdGhlIGZpbHRlcmVkIGRhdGEgaW4gdGhlIGBJZ3hHcmlkQ29tcG9uZW50YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGZpbHRlcmVkRGF0YSA9IHRoaXMuZ3JpZC5maWx0ZXJlZERhdGE7XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hUcmVlR3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBmaWx0ZXJlZERhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJlZERhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhbiBhcnJheSBvZiBvYmplY3RzIGNvbnRhaW5pbmcgdGhlIGZpbHRlcmVkIGRhdGEgaW4gdGhlIGBJZ3hHcmlkQ29tcG9uZW50YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5ncmlkLmZpbHRlcmVkRGF0YSA9IFt7XG4gICAgICogICAgICAgSUQ6IDEsXG4gICAgICogICAgICAgTmFtZTogXCJBXCJcbiAgICAgKiB9XTtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneFRyZWVHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgc2V0IGZpbHRlcmVkRGF0YSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9maWx0ZXJlZERhdGEgPSB2YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5yb3dTZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUhlYWRlckNoZWNrYm94U3RhdHVzT25GaWx0ZXIodGhpcy5fZmlsdGVyZWREYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0cmFuc2FjdGlvbnMgc2VydmljZSBmb3IgdGhlIGdyaWQuXG4gICAgICogQGV4cGVyaW1lbnRhbCBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IHRyYW5zYWN0aW9ucygpOiBJZ3hIaWVyYXJjaGljYWxUcmFuc2FjdGlvblNlcnZpY2U8SGllcmFyY2hpY2FsVHJhbnNhY3Rpb24sIEhpZXJhcmNoaWNhbFN0YXRlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2FjdGlvbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBwdWJsaWMgZmxhdERhdGE6IGFueVtdO1xuXG4gICAgLyoqXG4gICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBwdWJsaWMgcHJvY2Vzc2VkRXhwYW5kZWRGbGF0RGF0YTogYW55W107XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHRoZSByb290IGxldmVsIGBJVHJlZUdyaWRSZWNvcmRgcy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0cyB0aGUgcm9vdCByZWNvcmQgd2l0aCBpbmRleD0yXG4gICAgICogY29uc3Qgc3RhdGVzID0gdGhpcy5ncmlkLnJvb3RSZWNvcmRzWzJdO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4VHJlZUdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgcm9vdFJlY29yZHM6IElUcmVlR3JpZFJlY29yZFtdO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIG1hcCBvZiBhbGwgYElUcmVlR3JpZFJlY29yZGBzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRzIHRoZSByZWNvcmQgd2l0aCBwcmltYXJ5S2V5PTJcbiAgICAgKiBjb25zdCBzdGF0ZXMgPSB0aGlzLmdyaWQucmVjb3Jkcy5nZXQoMik7XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hUcmVlR3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyByZWNvcmRzOiBNYXA8YW55LCBJVHJlZUdyaWRSZWNvcmQ+ID0gbmV3IE1hcDxhbnksIElUcmVlR3JpZFJlY29yZD4oKTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgcHJvY2Vzc2VkIChmaWx0ZXJlZCBhbmQgc29ydGVkKSByb290IGBJVHJlZUdyaWRSZWNvcmRgcy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0cyB0aGUgcHJvY2Vzc2VkIHJvb3QgcmVjb3JkIHdpdGggaW5kZXg9MlxuICAgICAqIGNvbnN0IHN0YXRlcyA9IHRoaXMuZ3JpZC5wcm9jZXNzZWRSb290UmVjb3Jkc1syXTtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneFRyZWVHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHByb2Nlc3NlZFJvb3RSZWNvcmRzOiBJVHJlZUdyaWRSZWNvcmRbXTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBtYXAgb2YgYWxsIHByb2Nlc3NlZCAoZmlsdGVyZWQgYW5kIHNvcnRlZCkgYElUcmVlR3JpZFJlY29yZGBzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRzIHRoZSBwcm9jZXNzZWQgcmVjb3JkIHdpdGggcHJpbWFyeUtleT0yXG4gICAgICogY29uc3Qgc3RhdGVzID0gdGhpcy5ncmlkLnByb2Nlc3NlZFJlY29yZHMuZ2V0KDIpO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4VHJlZUdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgcHJvY2Vzc2VkUmVjb3JkczogTWFwPGFueSwgSVRyZWVHcmlkUmVjb3JkPiA9IG5ldyBNYXA8YW55LCBJVHJlZUdyaWRSZWNvcmQ+KCk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSBjaGlsZCBkYXRhIGtleSBvZiB0aGUgYElneFRyZWVHcmlkQ29tcG9uZW50YC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC10cmVlLWdyaWQgI2dyaWQgW2RhdGFdPVwiZW1wbG95ZWVEYXRhXCIgW2NoaWxkRGF0YUtleV09XCInZW1wbG95ZWVzJ1wiIFthdXRvR2VuZXJhdGVdPVwidHJ1ZVwiPjwvaWd4LXRyZWUtZ3JpZD5cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneFRyZWVHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY2hpbGREYXRhS2V5O1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgZm9yZWlnbiBrZXkgb2YgdGhlIGBJZ3hUcmVlR3JpZENvbXBvbmVudGAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtdHJlZS1ncmlkICNncmlkIFtkYXRhXT1cImVtcGxveWVlRGF0YVwiIFtwcmltYXJ5S2V5XT1cIidlbXBsb3llZUlEJ1wiIFtmb3JlaWduS2V5XT1cIidwYXJlbnRJRCdcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIj5cbiAgICAgKiA8L2lneC10cmVlLWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hUcmVlR3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGZvcmVpZ25LZXk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSBrZXkgaW5kaWNhdGluZyB3aGV0aGVyIGEgcm93IGhhcyBjaGlsZHJlbi5cbiAgICAgKiBUaGlzIHByb3BlcnR5IGlzIG9ubHkgdXNlZCBmb3IgbG9hZCBvbiBkZW1hbmQgc2NlbmFyaW9zLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXRyZWUtZ3JpZCAjZ3JpZCBbZGF0YV09XCJlbXBsb3llZURhdGFcIiBbcHJpbWFyeUtleV09XCInZW1wbG95ZWVJRCdcIiBbZm9yZWlnbktleV09XCIncGFyZW50SUQnXCJcbiAgICAgKiAgICAgICAgICAgICAgICBbbG9hZENoaWxkcmVuT25EZW1hbmRdPVwibG9hZENoaWxkcmVuXCJcbiAgICAgKiAgICAgICAgICAgICAgICBbaGFzQ2hpbGRyZW5LZXldPVwiJ2hhc0VtcGxveWVlcydcIj5cbiAgICAgKiA8L2lneC10cmVlLWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hUcmVlR3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGhhc0NoaWxkcmVuS2V5O1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IGluZGljYXRpbmcgd2hldGhlciBjaGlsZCByZWNvcmRzIHNob3VsZCBiZSBkZWxldGVkIHdoZW4gdGhlaXIgcGFyZW50IGdldHMgZGVsZXRlZC5cbiAgICAgKiBCeSBkZWZhdWx0IGl0IGlzIHNldCB0byB0cnVlIGFuZCBkZWxldGVzIGFsbCBjaGlsZHJlbiBhbG9uZyB3aXRoIHRoZSBwYXJlbnQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtdHJlZS1ncmlkIFtkYXRhXT1cImVtcGxveWVlRGF0YVwiIFtwcmltYXJ5S2V5XT1cIidlbXBsb3llZUlEJ1wiIFtmb3JlaWduS2V5XT1cIidwYXJlbnRJRCdcIiBjYXNjYWRlT25EZWxldGU9XCJmYWxzZVwiPlxuICAgICAqIDwvaWd4LXRyZWUtZ3JpZD5cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneFRyZWVHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY2FzY2FkZU9uRGVsZXRlID0gdHJ1ZTtcblxuICAgIHByaXZhdGUgX2V4cGFuc2lvbkRlcHRoID0gSW5maW5pdHk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSBjb3VudCBvZiBsZXZlbHMgdG8gYmUgZXhwYW5kZWQgaW4gdGhlIGBJZ3hUcmVlR3JpZENvbXBvbmVudGAuIEJ5IGRlZmF1bHQgaXQgaXNcbiAgICAgKiBzZXQgdG8gYEluZmluaXR5YCB3aGljaCBtZWFucyBhbGwgbGV2ZWxzIHdvdWxkIGJlIGV4cGFuZGVkLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXRyZWUtZ3JpZCAjZ3JpZCBbZGF0YV09XCJlbXBsb3llZURhdGFcIiBbY2hpbGREYXRhS2V5XT1cIidlbXBsb3llZXMnXCIgZXhwYW5zaW9uRGVwdGg9XCIxXCIgW2F1dG9HZW5lcmF0ZV09XCJ0cnVlXCI+PC9pZ3gtdHJlZS1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4VHJlZUdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgZXhwYW5zaW9uRGVwdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4cGFuc2lvbkRlcHRoO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZXhwYW5zaW9uRGVwdGgodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9leHBhbnNpb25EZXB0aCA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9leHBhbnNpb25TdGF0ZXM6IE1hcDxhbnksIGJvb2xlYW4+ID0gbmV3IE1hcDxhbnksIGJvb2xlYW4+KCk7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBrZXktdmFsdWUgcGFpcnMgW3JvdyBJRCwgZXhwYW5zaW9uIHN0YXRlXS4gSW5jbHVkZXMgb25seSBzdGF0ZXMgdGhhdCBkaWZmZXIgZnJvbSB0aGUgZGVmYXVsdCBvbmUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGV4cGFuc2lvblN0YXRlcyA9IHRoaXMuZ3JpZC5leHBhbnNpb25TdGF0ZXM7XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hUcmVlR3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBleHBhbnNpb25TdGF0ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9leHBhbnNpb25TdGF0ZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhIGxpc3Qgb2Yga2V5LXZhbHVlIHBhaXJzIFtyb3cgSUQsIGV4cGFuc2lvbiBzdGF0ZV0uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHN0YXRlcyA9IG5ldyBNYXA8YW55LCBib29sZWFuPigpO1xuICAgICAqIHN0YXRlcy5zZXQoMSwgdHJ1ZSk7XG4gICAgICogdGhpcy5ncmlkLmV4cGFuc2lvblN0YXRlcyA9IHN0YXRlcztcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneFRyZWVHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHNldCBleHBhbnNpb25TdGF0ZXModmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZXhwYW5zaW9uU3RhdGVzID0gdGhpcy5jbG9uZU1hcCh2YWx1ZSk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChJZ3hSb3dMb2FkaW5nSW5kaWNhdG9yVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogSWd4Um93TG9hZGluZ0luZGljYXRvclRlbXBsYXRlRGlyZWN0aXZlLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgcm93TG9hZGluZ1RlbXBsYXRlOiBJZ3hSb3dMb2FkaW5nSW5kaWNhdG9yVGVtcGxhdGVEaXJlY3RpdmU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VzdG9tIHRlbXBsYXRlLCBpZiBhbnksIHRoYXQgc2hvdWxkIGJlIHVzZWQgd2hlbiByZW5kZXJpbmcgdGhlIHJvdyBkcmFnIGluZGljYXRvciBpY29uXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gU2V0IGluIHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBteUN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbXlDb21wb25lbnQuY3VzdG9tVGVtcGxhdGU7XG4gICAgICogbXlDb21wb25lbnQuZHJhZ0luZGljYXRvckljb25UZW1wbGF0ZSA9IG15Q3VzdG9tVGVtcGxhdGU7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDwhLS0gU2V0IGluIG1hcmt1cCAtLT5cbiAgICAgKiAgPGlneC1ncmlkICNncmlkPlxuICAgICAqICAgICAgLi4uXG4gICAgICogICAgICA8bmctdGVtcGxhdGUgaWd4RHJhZ0luZGljYXRvckljb24+XG4gICAgICogICAgICAgICAgPGlneC1pY29uIGZvbnRTZXQ9XCJtYXRlcmlhbFwiPmluZm88L2lneC1pY29uPlxuICAgICAqICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgKiAgPC9pZ3gtZ3JpZD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneERyYWdJbmRpY2F0b3JJY29uRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgZHJhZ0luZGljYXRvckljb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBwcm92aWRlcyBhIHRlbXBsYXRlIGZvciB0aGUgcm93IGxvYWRpbmcgaW5kaWNhdG9yIHdoZW4gbG9hZCBvbiBkZW1hbmQgaXMgZW5hYmxlZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPG5nLXRlbXBsYXRlICNyb3dMb2FkaW5nVGVtcGxhdGU+XG4gICAgICogICAgIDxpZ3gtaWNvbiBmb250U2V0PVwibWF0ZXJpYWxcIj5sb29wPC9pZ3gtaWNvbj5cbiAgICAgKiA8L25nLXRlbXBsYXRlPlxuICAgICAqXG4gICAgICogPGlneC10cmVlLWdyaWQgI2dyaWQgW2RhdGFdPVwiZW1wbG95ZWVEYXRhXCIgW3ByaW1hcnlLZXldPVwiJ0lEJ1wiIFtmb3JlaWduS2V5XT1cIidwYXJlbnRJRCdcIlxuICAgICAqICAgICAgICAgICAgICAgIFtsb2FkQ2hpbGRyZW5PbkRlbWFuZF09XCJsb2FkQ2hpbGRyZW5cIlxuICAgICAqICAgICAgICAgICAgICAgIFtyb3dMb2FkaW5nSW5kaWNhdG9yVGVtcGxhdGVdPVwicm93TG9hZGluZ1RlbXBsYXRlXCI+XG4gICAgICogPC9pZ3gtdHJlZS1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4VHJlZUdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcm93TG9hZGluZ0luZGljYXRvclRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm93TG9hZGluZ0luZGljYXRvclRlbXBsYXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcm93TG9hZGluZ0luZGljYXRvclRlbXBsYXRlKHZhbHVlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgICAgIHRoaXMuX3Jvd0xvYWRpbmdJbmRpY2F0b3JUZW1wbGF0ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBwcm92aWRlcyBhIGNhbGxiYWNrIGZvciBsb2FkaW5nIGNoaWxkIHJvd3Mgb24gZGVtYW5kLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXRyZWUtZ3JpZCBbZGF0YV09XCJlbXBsb3llZURhdGFcIiBbcHJpbWFyeUtleV09XCInZW1wbG95ZWVJRCdcIiBbZm9yZWlnbktleV09XCIncGFyZW50SUQnXCIgW2xvYWRDaGlsZHJlbk9uRGVtYW5kXT1cImxvYWRDaGlsZHJlblwiPlxuICAgICAqIDwvaWd4LXRyZWUtZ3JpZD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogcHVibGljIGxvYWRDaGlsZHJlbiA9IChwYXJlbnRJRDogYW55LCBkb25lOiAoY2hpbGRyZW46IGFueVtdKSA9PiB2b2lkKSA9PiB7XG4gICAgICogICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2V0RGF0YShwYXJlbnRJRCwgY2hpbGRyZW4gPT4gZG9uZShjaGlsZHJlbikpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneFRyZWVHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbG9hZENoaWxkcmVuT25EZW1hbmQ6IChwYXJlbnRJRDogYW55LCBkb25lOiAoY2hpbGRyZW46IGFueVtdKSA9PiB2b2lkKSA9PiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCB3aGVuIHRoZSBleHBhbmRlZCBzdGF0ZSBvZiBhIHJvdyBnZXRzIGNoYW5nZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHJvd1RvZ2dsZShldmVudDogSVJvd1RvZ2dsZUV2ZW50QXJncyl7XG4gICAgICogIC8vIHRoZSBpZCBvZiB0aGUgcm93XG4gICAgICogIGNvbnN0IHJvd0lEID0gZXZlbnQucm93SUQ7XG4gICAgICogIC8vIHRoZSBuZXcgZXhwYW5zaW9uIHN0YXRlXG4gICAgICogIGNvbnN0IG5ld0V4cGFuZGVkU3RhdGUgPSBldmVudC5leHBhbmRlZDtcbiAgICAgKiAgLy8gdGhlIG9yaWdpbmFsIGV2ZW50IHRoYXQgdHJpZ2dlcmVkIG9uUm93VG9nZ2xlXG4gICAgICogIGNvbnN0IG9yaWdpbmFsRXZlbnQgPSBldmVudC5ldmVudDtcbiAgICAgKiAgLy8gd2hldGhlciB0aGUgZXZlbnQgc2hvdWxkIGJlIGNhbmNlbGxlZFxuICAgICAqICBldmVudC5jYW5jZWwgPSB0cnVlO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC10cmVlLWdyaWQgW2RhdGFdPVwiZW1wbG95ZWVEYXRhXCIgKG9uUm93VG9nZ2xlKT1cInJvd1RvZ2dsZSgkZXZlbnQpXCIgW2F1dG9HZW5lcmF0ZV09XCJ0cnVlXCI+PC9pZ3gtdHJlZS1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4VHJlZUdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25Sb3dUb2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyPElSb3dUb2dnbGVFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGxvYWRpbmdSb3dzID0gbmV3IFNldDxhbnk+KCk7XG5cbiAgICBwcml2YXRlIF9ncmlkQVBJOiBJZ3hUcmVlR3JpZEFQSVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfZmlsdGVyZWREYXRhID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdkcmFnSW5kaWNhdG9ySWNvbkJhc2UnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgZHJhZ0luZGljYXRvckljb25CYXNlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHNlbGVjdGlvblNlcnZpY2U6IElneEdyaWRTZWxlY3Rpb25TZXJ2aWNlLFxuICAgICAgICBjcnVkU2VydmljZTogSWd4R3JpZENSVURTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgY29sUmVzaXppbmdTZXJ2aWNlOiBJZ3hDb2x1bW5SZXNpemluZ1NlcnZpY2UsXG4gICAgICAgIGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPixcbiAgICAgICAgc2VsZWN0aW9uOiBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KElneEdyaWRUcmFuc2FjdGlvbikgcHJvdGVjdGVkIF90cmFuc2FjdGlvbnM6IElneEhpZXJhcmNoaWNhbFRyYW5zYWN0aW9uU2VydmljZTxIaWVyYXJjaGljYWxUcmFuc2FjdGlvbiwgSGllcmFyY2hpY2FsU3RhdGU+LFxuICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICB6b25lOiBOZ1pvbmUsXG4gICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHB1YmxpYyBkb2N1bWVudCxcbiAgICAgICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgZGlmZmVyczogSXRlcmFibGVEaWZmZXJzLFxuICAgICAgICB2aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBuYXZpZ2F0aW9uOiBJZ3hUcmVlR3JpZE5hdmlnYXRpb25TZXJ2aWNlLFxuICAgICAgICBmaWx0ZXJpbmdTZXJ2aWNlOiBJZ3hGaWx0ZXJpbmdTZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KElneE92ZXJsYXlTZXJ2aWNlKSBwcm90ZWN0ZWQgb3ZlcmxheVNlcnZpY2U6IElneE92ZXJsYXlTZXJ2aWNlLFxuICAgICAgICBzdW1tYXJ5U2VydmljZTogSWd4R3JpZFN1bW1hcnlTZXJ2aWNlLFxuICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERpc3BsYXlEZW5zaXR5VG9rZW4pIHByb3RlY3RlZCBfZGlzcGxheURlbnNpdHlPcHRpb25zOiBJRGlzcGxheURlbnNpdHlPcHRpb25zKSB7XG4gICAgICAgICAgICBzdXBlcihzZWxlY3Rpb25TZXJ2aWNlLCBjcnVkU2VydmljZSwgZ3JpZEFQSSwgc2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgIF90cmFuc2FjdGlvbnMsIGVsZW1lbnRSZWYsIHpvbmUsIGRvY3VtZW50LCBjZHIsIHJlc29sdmVyLCBkaWZmZXJzLCB2aWV3UmVmLCBuYXZpZ2F0aW9uLFxuICAgICAgICAgICAgICAgIGZpbHRlcmluZ1NlcnZpY2UsIG92ZXJsYXlTZXJ2aWNlLCBzdW1tYXJ5U2VydmljZSwgX2Rpc3BsYXlEZW5zaXR5T3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2dyaWRBUEkgPSA8SWd4VHJlZUdyaWRBUElTZXJ2aWNlPmdyaWRBUEk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcblxuICAgICAgICB0aGlzLm9uUm93VG9nZ2xlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGFyZ3MpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZENoaWxkcmVuT25Sb3dFeHBhbnNpb24oYXJncyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICBpZiAodGhpcy5yb3dMb2FkaW5nVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jvd0xvYWRpbmdJbmRpY2F0b3JUZW1wbGF0ZSA9IHRoaXMucm93TG9hZGluZ1RlbXBsYXRlLnRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLm5nQWZ0ZXJDb250ZW50SW5pdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZENoaWxkcmVuT25Sb3dFeHBhbnNpb24oYXJnczogSVJvd1RvZ2dsZUV2ZW50QXJncykge1xuICAgICAgICBpZiAodGhpcy5sb2FkQ2hpbGRyZW5PbkRlbWFuZCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50SUQgPSBhcmdzLnJvd0lEO1xuXG4gICAgICAgICAgICBpZiAoYXJncy5leHBhbmRlZCAmJiAhdGhpcy5fZXhwYW5zaW9uU3RhdGVzLmhhcyhwYXJlbnRJRCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdSb3dzLmFkZChwYXJlbnRJRCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRDaGlsZHJlbk9uRGVtYW5kKHBhcmVudElELCBjaGlsZHJlbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1Jvd3MuZGVsZXRlKHBhcmVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDaGlsZFJvd3MoY2hpbGRyZW4sIHBhcmVudElEKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGxJRCA9IHRoaXMuc2VsZWN0aW9uLmZpcnN0X2l0ZW0oYCR7dGhpcy5pZH0tY2VsbGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGxJRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLl9ncmlkQVBJLmdldF9jZWxsX2J5X2luZGV4KGNlbGxJRC5yb3dJbmRleCwgY2VsbElELmNvbHVtbklEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDaGlsZFJvd3MoY2hpbGRyZW46IGFueVtdLCBwYXJlbnRJRDogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLnByaW1hcnlLZXkgJiYgdGhpcy5mb3JlaWduS2V5KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRbdGhpcy5mb3JlaWduS2V5XSA9IHBhcmVudElEO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhLnB1c2goLi4uY2hpbGRyZW4pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2hpbGREYXRhS2V5KSB7XG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5yZWNvcmRzLmdldChwYXJlbnRJRCk7XG4gICAgICAgICAgICBsZXQgcGFyZW50RGF0YSA9IHBhcmVudC5kYXRhO1xuXG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc2FjdGlvbnMuZW5hYmxlZCAmJiB0aGlzLnRyYW5zYWN0aW9ucy5nZXRBZ2dyZWdhdGVkQ2hhbmdlcyh0cnVlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRoID0gW107XG4gICAgICAgICAgICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnB1c2gocGFyZW50LnJvd0lEKTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgY29sbGVjdGlvbiA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgICAgICBsZXQgcmVjb3JkOiBhbnk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGlkID0gcGF0aFtpXTtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkID0gY29sbGVjdGlvbi5maW5kKHIgPT4gclt0aGlzLnByaW1hcnlLZXldID09PSBwaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uID0gcmVjb3JkW3RoaXMuY2hpbGREYXRhS2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnREYXRhID0gcmVjb3JkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFyZW50RGF0YVt0aGlzLmNoaWxkRGF0YUtleV0gPSBjaGlsZHJlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3BpcGVUcmlnZ2VyKys7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbG9uZU1hcChtYXBJbjogTWFwPGFueSwgYm9vbGVhbj4pOiBNYXA8YW55LCBib29sZWFuPiB7XG4gICAgICAgIGNvbnN0IG1hcENsb25lZDogTWFwPGFueSwgYm9vbGVhbj4gPSBuZXcgTWFwPGFueSwgYm9vbGVhbj4oKTtcblxuICAgICAgICBtYXBJbi5mb3JFYWNoKCh2YWx1ZTogYm9vbGVhbiwga2V5OiBhbnksIG1hcE9iajogTWFwPGFueSwgYm9vbGVhbj4pID0+IHtcblxuICAgICAgICAgICAgbWFwQ2xvbmVkLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG1hcENsb25lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHBhbmRzIHRoZSBgSWd4VHJlZUdyaWRSb3dDb21wb25lbnRgIHdpdGggdGhlIHNwZWNpZmllZCByb3dJRC5cbiAgICAgKiBAcGFyYW0gcm93SUQgVGhlIGlkZW50aWZpZXIgb2YgdGhlIHJvdyB0byBiZSBleHBhbmRlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5ncmlkLmV4cGFuZFJvdygyKTtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneFRyZWVHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGV4cGFuZFJvdyhyb3dJRDogYW55KSB7XG4gICAgICAgIHRoaXMuX2dyaWRBUEkuZXhwYW5kX3Jvdyhyb3dJRCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29sbGFwc2VzIHRoZSBgSWd4VHJlZUdyaWRSb3dDb21wb25lbnRgIHdpdGggdGhlIHNwZWNpZmllZCByb3dJRC5cbiAgICAgKiBAcGFyYW0gcm93SUQgVGhlIGlkZW50aWZpZXIgb2YgdGhlIHJvdyB0byBiZSBjb2xsYXBzZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZ3JpZC5jb2xsYXBzZVJvdygyKTtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneFRyZWVHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGNvbGxhcHNlUm93KHJvd0lEOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fZ3JpZEFQSS5jb2xsYXBzZV9yb3cocm93SUQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIGV4cGFuc2lvbiBzdGF0ZSBvZiB0aGUgYElneFRyZWVHcmlkUm93Q29tcG9uZW50YCB3aXRoIHRoZSBzcGVjaWZpZWQgcm93SUQuXG4gICAgICogQHBhcmFtIHJvd0lEIFRoZSBpZGVudGlmaWVyIG9mIHRoZSByb3cgdG8gYmUgdG9nZ2xlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5ncmlkLnRvZ2dsZVJvdygyKTtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneFRyZWVHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHRvZ2dsZVJvdyhyb3dJRDogYW55KSB7XG4gICAgICAgIHRoaXMuX2dyaWRBUEkudG9nZ2xlX3Jvd19leHBhbnNpb24ocm93SUQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4cGFuZHMgYWxsIHJvd3MuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZ3JpZC5leHBhbmRBbGwoKTtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneFRyZWVHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGV4cGFuZEFsbCgpIHtcbiAgICAgICAgdGhpcy5fZXhwYW5zaW9uRGVwdGggPSBJbmZpbml0eTtcbiAgICAgICAgdGhpcy5leHBhbnNpb25TdGF0ZXMgPSBuZXcgTWFwPGFueSwgYm9vbGVhbj4oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb2xsYXBzZXMgYWxsIHJvd3MuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZ3JpZC5jb2xsYXBzZUFsbCgpO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4VHJlZUdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgY29sbGFwc2VBbGwoKSB7XG4gICAgICAgIHRoaXMuX2V4cGFuc2lvbkRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5leHBhbnNpb25TdGF0ZXMgPSBuZXcgTWFwPGFueSwgYm9vbGVhbj4oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGBJZ3hUcmVlR3JpZFJvd0NvbXBvbmVudGAgd2l0aCB0aGUgZ2l2ZW4gZGF0YS4gSWYgYSBwYXJlbnRSb3dJRCBpcyBub3Qgc3BlY2lmaWVkLCB0aGUgbmV3bHkgY3JlYXRlZFxuICAgICAqIHJvdyB3b3VsZCBiZSBhZGRlZCBhdCB0aGUgcm9vdCBsZXZlbC4gT3RoZXJ3aXNlLCBpdCB3b3VsZCBiZSBhZGRlZCBhcyBhIGNoaWxkIG9mIHRoZSByb3cgd2hvc2UgcHJpbWFyeUtleSBtYXRjaGVzXG4gICAgICogdGhlIHNwZWNpZmllZCBwYXJlbnRSb3dJRC4gSWYgdGhlIHBhcmVudFJvd0lEIGRvZXMgbm90IGV4aXN0LCBhbiBlcnJvciB3b3VsZCBiZSB0aHJvd24uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHJlY29yZCA9IHtcbiAgICAgKiAgICAgSUQ6IHRoaXMuZ3JpZC5kYXRhW3RoaXMuZ3JpZDEuZGF0YS5sZW5ndGggLSAxXS5JRCArIDEsXG4gICAgICogICAgIE5hbWU6IHRoaXMubmV3UmVjb3JkXG4gICAgICogfTtcbiAgICAgKiB0aGlzLmdyaWQuYWRkUm93KHJlY29yZCwgMSk7IC8vIEFkZHMgYSBuZXcgY2hpbGQgcm93IHRvIHRoZSByb3cgd2l0aCBJRD0xLlxuICAgICAqIGBgYFxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIHBhcmVudFJvd0lEXG4gICAgICogQG1lbWJlcm9mIElneFRyZWVHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGFkZFJvdyhkYXRhOiBhbnksIHBhcmVudFJvd0lEPzogYW55KSB7XG4gICAgICAgIGlmIChwYXJlbnRSb3dJRCAhPT0gdW5kZWZpbmVkICYmIHBhcmVudFJvd0lEICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdXBlci5lbmRFZGl0KHRydWUpO1xuXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMudHJhbnNhY3Rpb25zLmdldFN0YXRlKHBhcmVudFJvd0lEKTtcbiAgICAgICAgICAgIC8vIHdlIHNob3VsZCBub3QgYWxsb3cgYWRkaW5nIG9mIHJvd3MgYXMgY2hpbGQgb2YgZGVsZXRlZCByb3dcbiAgICAgICAgICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS50eXBlID09PSBUcmFuc2FjdGlvblR5cGUuREVMRVRFKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYENhbm5vdCBhZGQgY2hpbGQgcm93IHRvIGRlbGV0ZWQgcGFyZW50IHJvd2ApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRSZWNvcmQgPSB0aGlzLnJlY29yZHMuZ2V0KHBhcmVudFJvd0lEKTtcblxuICAgICAgICAgICAgaWYgKCFwYXJlbnRSZWNvcmQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignSW52YWxpZCBwYXJlbnQgcm93IElEIScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdW1tYXJ5U2VydmljZS5jbGVhclN1bW1hcnlDYWNoZSh7cm93SUQ6IHBhcmVudFJlY29yZC5yb3dJRH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJpbWFyeUtleSAmJiB0aGlzLmZvcmVpZ25LZXkpIHtcbiAgICAgICAgICAgICAgICBkYXRhW3RoaXMuZm9yZWlnbktleV0gPSBwYXJlbnRSb3dJRDtcbiAgICAgICAgICAgICAgICBzdXBlci5hZGRSb3coZGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudERhdGEgPSBwYXJlbnRSZWNvcmQuZGF0YTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEtleSA9IHRoaXMuY2hpbGREYXRhS2V5O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zYWN0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd0lkID0gdGhpcy5wcmltYXJ5S2V5ID8gZGF0YVt0aGlzLnByaW1hcnlLZXldIDogZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF0aDogYW55W10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5wdXNoKC4uLnRoaXMuZ2VuZXJhdGVSb3dQYXRoKHBhcmVudFJvd0lEKSk7XG4gICAgICAgICAgICAgICAgICAgIHBhdGgucHVzaChwYXJlbnRSb3dJRCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25zLmFkZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcm93SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBUcmFuc2FjdGlvblR5cGUuQUREXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgSGllcmFyY2hpY2FsVHJhbnNhY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcmVudERhdGFbY2hpbGRLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnREYXRhW2NoaWxkS2V5XSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudERhdGFbY2hpbGRLZXldLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMub25Sb3dBZGRlZC5lbWl0KHsgZGF0YSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9waXBlVHJpZ2dlcisrO1xuICAgICAgICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJpbWFyeUtleSAmJiB0aGlzLmZvcmVpZ25LZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dJRCA9IGRhdGFbdGhpcy5mb3JlaWduS2V5XTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1bW1hcnlTZXJ2aWNlLmNsZWFyU3VtbWFyeUNhY2hlKHtyb3dJRDogcm93SUR9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1cGVyLmFkZFJvdyhkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHVibGljIGRlbGV0ZVJvd0J5SWQocm93SWQ6IGFueSkge1xuICAgICAgICAvLyAgaWYgdGhpcyBpcyBmbGF0IHNlbGYtcmVmZXJlbmNpbmcgZGF0YSwgYW5kIENhc2NhZGVPbkRlbGV0ZSBpcyBzZXQgdG8gdHJ1ZVxuICAgICAgICAvLyAgYW5kIGlmIHdlIGhhdmUgdHJhbnNhY3Rpb25zIHdlIHNob3VsZCBzdGFydCBwZW5kaW5nIHRyYW5zYWN0aW9uLiBUaGlzIGFsbG93c1xuICAgICAgICAvLyAgdXMgaW4gY2FzZSBvZiBkZWxldGUgYWN0aW9uIHRvIGRlbGV0ZSBhbGwgY2hpbGQgcm93cyBhcyBzaW5nbGUgdW5kbyBhY3Rpb25cbiAgICAgICAgdGhpcy5fZ3JpZEFQSS5kZWxldGVSb3dCeUlkKHJvd0lkKTtcblxuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHVibGljIGdlbmVyYXRlUm93UGF0aChyb3dJZDogYW55KTogYW55W10ge1xuICAgICAgICBjb25zdCBwYXRoOiBhbnlbXSA9IFtdO1xuICAgICAgICBsZXQgcmVjb3JkID0gdGhpcy5yZWNvcmRzLmdldChyb3dJZCk7XG5cbiAgICAgICAgd2hpbGUgKHJlY29yZC5wYXJlbnQpIHtcbiAgICAgICAgICAgIHBhdGgucHVzaChyZWNvcmQucGFyZW50LnJvd0lEKTtcbiAgICAgICAgICAgIHJlY29yZCA9IHJlY29yZC5wYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0aC5yZXZlcnNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0RGF0YUJhc2VkQm9keUhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gIXRoaXMuZmxhdERhdGEgfHwgKHRoaXMuZmxhdERhdGEubGVuZ3RoIDwgdGhpcy5fZGVmYXVsdFRhcmdldFJlY29yZE51bWJlcikgP1xuICAgICAgICAgICAgMCA6IHRoaXMuZGVmYXVsdFRhcmdldEJvZHlIZWlnaHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzY3JvbGxUbyhyb3c6IGFueSB8IG51bWJlciwgY29sdW1uOiBhbnkgfCBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IGRlbGF5U2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgIGxldCByZWNvcmQ6IElUcmVlR3JpZFJlY29yZDtcblxuICAgICAgICBpZiAodHlwZW9mKHJvdykgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBjb25zdCByb3dEYXRhID0gcm93O1xuICAgICAgICAgICAgY29uc3Qgcm93SUQgPSB0aGlzLl9ncmlkQVBJLmdldF9yb3dfaWQocm93RGF0YSk7XG4gICAgICAgICAgICByZWNvcmQgPSB0aGlzLnByb2Nlc3NlZFJlY29yZHMuZ2V0KHJvd0lEKTtcbiAgICAgICAgICAgIHRoaXMuX2dyaWRBUEkuZXhwYW5kX3BhdGhfdG9fcmVjb3JkKHJlY29yZCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2luZykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvd0luZGV4ID0gdGhpcy5wcm9jZXNzZWRFeHBhbmRlZEZsYXREYXRhLmluZGV4T2Yocm93RGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZSA9IE1hdGguZmxvb3Iocm93SW5kZXggLyB0aGlzLnBlclBhZ2UpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFnZSAhPT0gcGFnZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxheVNjcm9sbGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlbGF5U2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLm9uRGF0YUNoYW5nZWQucGlwZShmaXJzdCgpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsRGlyZWN0aXZlKHRoaXMudmVydGljYWxTY3JvbGxDb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZihyb3cpID09PSAnbnVtYmVyJyA/IHJvdyA6IHRoaXMudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2YuaW5kZXhPZihyZWNvcmQpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxEaXJlY3RpdmUodGhpcy52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICB0eXBlb2Yocm93KSA9PT0gJ251bWJlcicgPyByb3cgOiB0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLmluZGV4T2YocmVjb3JkKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcm9sbFRvSG9yaXpvbnRhbGx5KGNvbHVtbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBwdWJsaWMgZ2V0Q29udGV4dChyb3dEYXRhLCByb3dJbmRleCk6IGFueSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAkaW1wbGljaXQ6IHJvd0RhdGEsXG4gICAgICAgICAgICBpbmRleDogcm93SW5kZXgsXG4gICAgICAgICAgICB0ZW1wbGF0ZUlEOiB0aGlzLmlzU3VtbWFyeVJvdyhyb3dEYXRhKSA/ICdzdW1tYXJ5Um93JyA6ICdkYXRhUm93J1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWREYXRhKGZvcm1hdHRlcnMgPSBmYWxzZSwgaGVhZGVycyA9IGZhbHNlKTogYW55W10ge1xuICAgICAgICBjb25zdCBzb3VyY2UgPSBbXTtcblxuICAgICAgICBjb25zdCBwcm9jZXNzID0gKHJlY29yZCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlY29yZC5zdW1tYXJpZXMpIHtcbiAgICAgICAgICAgICAgICBzb3VyY2UucHVzaChudWxsKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzb3VyY2UucHVzaChyZWNvcmQuZGF0YSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5pZ3hGb3JPZi5mb3JFYWNoKHByb2Nlc3MpO1xuICAgICAgICByZXR1cm4gdGhpcy5leHRyYWN0RGF0YUZyb21TZWxlY3Rpb24oc291cmNlLCBmb3JtYXR0ZXJzLCBoZWFkZXJzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIHB1YmxpYyBnZXQgdGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlcmVkRGF0YSAmJiB0aGlzLmZpbHRlcmVkRGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVtcHR5R3JpZFRlbXBsYXRlID8gdGhpcy5lbXB0eUdyaWRUZW1wbGF0ZSA6IHRoaXMuZW1wdHlGaWx0ZXJlZEdyaWRUZW1wbGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzTG9hZGluZyAmJiAoIXRoaXMuZGF0YSB8fCB0aGlzLmRhdGFMZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkaW5nR3JpZFRlbXBsYXRlID8gdGhpcy5sb2FkaW5nR3JpZFRlbXBsYXRlIDogdGhpcy5sb2FkaW5nR3JpZERlZmF1bHRUZW1wbGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRhdGFMZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVtcHR5R3JpZFRlbXBsYXRlID8gdGhpcy5lbXB0eUdyaWRUZW1wbGF0ZSA6IHRoaXMuZW1wdHlHcmlkRGVmYXVsdFRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHdyaXRlVG9EYXRhKHJvd0luZGV4OiBudW1iZXIsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgbWVyZ2VPYmplY3RzKHRoaXMuZmxhdERhdGFbcm93SW5kZXhdLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICovXG4gICBwcm90ZWN0ZWQgaW5pdENvbHVtbnMoY29sbGVjdGlvbjogUXVlcnlMaXN0PElneENvbHVtbkNvbXBvbmVudD4sIGNiOiBGdW5jdGlvbiA9IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzQ29sdW1uTGF5b3V0cykge1xuICAgICAgICAgICAgLy8gaW52YWxpZCBjb25maWd1cmF0aW9uIC0gdHJlZSBncmlkIHNob3VsZCBub3QgYWxsb3cgY29sdW1uIGxheW91dHNcbiAgICAgICAgICAgIC8vIHJlbW92ZSBjb2x1bW4gbGF5b3V0c1xuICAgICAgICAgICAgY29uc3Qgbm9uQ29sdW1uTGF5b3V0Q29sdW1ucyA9IHRoaXMuY29sdW1uTGlzdC5maWx0ZXIoKGNvbCkgPT4gIWNvbC5jb2x1bW5MYXlvdXQgJiYgIWNvbC5jb2x1bW5MYXlvdXRDaGlsZCk7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbkxpc3QucmVzZXQobm9uQ29sdW1uTGF5b3V0Q29sdW1ucyk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuaW5pdENvbHVtbnMoY29sbGVjdGlvbiwgY2IpO1xuICAgIH1cbn1cbiJdfQ==