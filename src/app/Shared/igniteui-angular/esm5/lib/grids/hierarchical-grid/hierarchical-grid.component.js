/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var NEXT_ID = 0;
/**
 * @record
 */
export function HierarchicalStateRecord() { }
if (false) {
    /** @type {?} */
    HierarchicalStateRecord.prototype.rowID;
}
var IgxHierarchicalGridComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxHierarchicalGridComponent, _super);
    function IgxHierarchicalGridComponent(selectionService, crudService, colResizingService, gridAPI, selection, transactionFactory, elementRef, zone, document, cdr, resolver, differs, viewRef, navigation, filteringService, overlayService, summaryService, _displayDensityOptions) {
        var _this = _super.call(this, selectionService, crudService, gridAPI, selection, typeof transactionFactory === 'function' ? transactionFactory() : transactionFactory, elementRef, zone, document, cdr, resolver, differs, viewRef, navigation, filteringService, overlayService, summaryService, _displayDensityOptions) || this;
        _this.selectionService = selectionService;
        _this.colResizingService = colResizingService;
        _this.transactionFactory = transactionFactory;
        _this.document = document;
        _this.overlayService = overlayService;
        _this.summaryService = summaryService;
        _this._displayDensityOptions = _displayDensityOptions;
        /**
         * @hidden
         */
        _this.childLayoutKeys = [];
        /**
         * @hidden
         */
        _this.highlightedRowID = null;
        /**
         * @hidden
         */
        _this.updateOnRender = false;
        /**
         * @hidden
         */
        _this.parent = null;
        _this._hierarchicalState = [];
        _this._filteredData = null;
        _this.h_id = "igx-hierarchical-grid-" + NEXT_ID++;
        _this.childGridTemplates = new Map();
        _this.scrollTop = 0;
        _this.scrollLeft = 0;
        _this.hgridAPI = (/** @type {?} */ (gridAPI));
        return _this;
    }
    Object.defineProperty(IgxHierarchicalGridComponent.prototype, "id", {
        /**
         * Sets the value of the `id` attribute. If not provided it will be automatically generated.
         * ```html
         * <igx-hierarchical-grid [id]="'igx-hgrid-1'" [data]="Data" [autoGenerate]="true"></igx-hierarchical-grid>
         * ```
         * @memberof IgxHierarchicalGridComponent
         */
        get: /**
         * Sets the value of the `id` attribute. If not provided it will be automatically generated.
         * ```html
         * <igx-hierarchical-grid [id]="'igx-hgrid-1'" [data]="Data" [autoGenerate]="true"></igx-hierarchical-grid>
         * ```
         * \@memberof IgxHierarchicalGridComponent
         * @return {?}
         */
        function () {
            return this.h_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxHierarchicalGridComponent.prototype, "data", {
        /**
         * Returns an array of data set to the `IgxHierarchicalGridComponent`.
         * ```typescript
         * let filteredData = this.grid.filteredData;
         * ```
         * @memberof IgxHierarchicalGridComponent
         */
        get: /**
         * Returns an array of data set to the `IgxHierarchicalGridComponent`.
         * ```typescript
         * let filteredData = this.grid.filteredData;
         * ```
         * \@memberof IgxHierarchicalGridComponent
         * @return {?}
         */
        function () {
            return this._data;
        },
        /**
         * An @Input property that lets you fill the `IgxHierarchicalGridComponent` with an array of data.
         * ```html
         * <igx-hierarchical-grid [data]="Data" [autoGenerate]="true"></igx-hierarchical-grid>
         * ```
         * @memberof IgxHierarchicalGridComponent
         */
        set: /**
         * An \@Input property that lets you fill the `IgxHierarchicalGridComponent` with an array of data.
         * ```html
         * <igx-hierarchical-grid [data]="Data" [autoGenerate]="true"></igx-hierarchical-grid>
         * ```
         * \@memberof IgxHierarchicalGridComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._data = value;
            this.summaryService.clearSummaryCache();
            if (this.shouldGenerate) {
                this.setupColumns();
                this.reflow();
            }
            this.cdr.markForCheck();
            if (this.parent && (this.height === null || this.height.indexOf('%') !== -1)) {
                // If the height will change based on how much data there is, recalculate sizes in igxForOf.
                requestAnimationFrame(function () {
                    _this.updateParentSizes();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxHierarchicalGridComponent.prototype, "hierarchicalState", {
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
        * @memberof IgxHierarchicalGridComponent
        */
        get: /**
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
        function () {
            return this._hierarchicalState;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            this._hierarchicalState = val;
            if (this.parent) {
                requestAnimationFrame(function () {
                    _this.updateParentSizes();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxHierarchicalGridComponent.prototype, "filteredData", {
        /**
         * Returns an array of objects containing the filtered data in the `IgxHierarchicalGridComponent`.
         * ```typescript
         * let filteredData = this.grid.filteredData;
         * ```
         * @memberof IgxHierarchicalGridComponent
         */
        get: /**
         * Returns an array of objects containing the filtered data in the `IgxHierarchicalGridComponent`.
         * ```typescript
         * let filteredData = this.grid.filteredData;
         * ```
         * \@memberof IgxHierarchicalGridComponent
         * @return {?}
         */
        function () {
            return this._filteredData;
        },
        /**
         * Sets an array of objects containing the filtered data in the `IgxHierarchicalGridComponent`.
         * ```typescript
         * this.grid.filteredData = [{
         *       ID: 1,
         *       Name: "A"
         * }];
         * ```
         * @memberof IgxHierarchicalGridComponent
         */
        set: /**
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
        function (value) {
            this._filteredData = value;
            if (this.rowSelectable) {
                this.updateHeaderCheckboxStatusOnFilter(this._filteredData);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxHierarchicalGridComponent.prototype, "expandChildren", {
        /**
         * Gets if all immediate children of the `IgxHierarchicalGridComponent` previously have been set to be expanded/collapsed.
         * If previously set and some rows have been manually expanded/collapsed it will still return the last set value.
         * ```typescript
         * const expanded = this.grid.expandChildren;
         * ```
         * @memberof IgxHierarchicalGridComponent
         */
        get: /**
         * Gets if all immediate children of the `IgxHierarchicalGridComponent` previously have been set to be expanded/collapsed.
         * If previously set and some rows have been manually expanded/collapsed it will still return the last set value.
         * ```typescript
         * const expanded = this.grid.expandChildren;
         * ```
         * \@memberof IgxHierarchicalGridComponent
         * @return {?}
         */
        function () {
            return this._expandChildren;
        },
        /**
         * Sets if all immediate children of the `IgxHierarchicalGridComponent` should be expanded/collapsed.
         * Defult value is false.
         * ```html
         * <igx-hierarchical-grid [id]="'igx-grid-1'" [data]="Data" [autoGenerate]="true" [expandChildren]="true"></igx-hierarchical-grid>
         * ```
         * @memberof IgxHierarchicalGridComponent
         */
        set: /**
         * Sets if all immediate children of the `IgxHierarchicalGridComponent` should be expanded/collapsed.
         * Defult value is false.
         * ```html
         * <igx-hierarchical-grid [id]="'igx-grid-1'" [data]="Data" [autoGenerate]="true" [expandChildren]="true"></igx-hierarchical-grid>
         * ```
         * \@memberof IgxHierarchicalGridComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._expandChildren = value;
            if (value && this.data) {
                this.hierarchicalState = this.data.map(function (rec) {
                    return { rowID: _this.primaryKey ? rec[_this.primaryKey] : rec };
                });
            }
            else if (this.data) {
                this.hierarchicalState = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxHierarchicalGridComponent.prototype, "foreignKey", {
        /**
         * Gets the unique identifier of the parent row. It may be a `string` or `number` if `primaryKey` of the
         * parent grid is set or an object reference of the parent record otherwise.
         * ```typescript
         * const foreignKey = this.grid.foreignKey;
         * ```
         * @memberof IgxHierarchicalGridComponent
         */
        get: /**
         * Gets the unique identifier of the parent row. It may be a `string` or `number` if `primaryKey` of the
         * parent grid is set or an object reference of the parent record otherwise.
         * ```typescript
         * const foreignKey = this.grid.foreignKey;
         * ```
         * \@memberof IgxHierarchicalGridComponent
         * @return {?}
         */
        function () {
            if (!this.parent) {
                return null;
            }
            return this.parent.hgridAPI.getParentRowId(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxHierarchicalGridComponent.prototype, "hasExpandableChildren", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return !!this.childLayoutKeys.length;
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
    IgxHierarchicalGridComponent.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        this._transactions = this.parentIsland ? this.parentIsland.transactions : this._transactions;
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.ngAfterViewInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngAfterViewInit.call(this);
        this.verticalScrollContainer.getVerticalScroll().addEventListener('scroll', this.hg_verticalScrollHandler.bind(this));
        this.parentVirtDir.getHorizontalScroll().addEventListener('scroll', this.hg_horizontalScrollHandler.bind(this));
        if (this.expandChildren && this.data && this.hierarchicalState.length !== this.data.length) {
            this.hierarchicalState = this.data.map(function (rec) {
                return { rowID: _this.primaryKey ? rec[_this.primaryKey] : rec };
            });
            this.cdr.detectChanges();
        }
        this.verticalScrollContainer.onBeforeViewDestroyed.pipe(takeUntil(this.destroy$)).subscribe(function (view) {
            /** @type {?} */
            var rowData = view.context.$implicit;
            if (_this.isChildGridRecord(rowData)) {
                /** @type {?} */
                var cachedData = _this.childGridTemplates.get(rowData.rowID);
                if (cachedData) {
                    /** @type {?} */
                    var tmlpOutlet = cachedData.owner;
                    tmlpOutlet._viewContainerRef.detach(0);
                }
            }
        });
        if (this.parent) {
            this._displayDensity = this.rootGrid._displayDensity;
            this.rootGrid.onDensityChanged.pipe(takeUntil(this.destroy$)).subscribe(function () {
                requestAnimationFrame(function () {
                    _this._displayDensity = _this.rootGrid._displayDensity;
                    if (document.body.contains(_this.nativeElement)) {
                        _this.reflow();
                    }
                    else {
                        _this.updateOnRender = true;
                    }
                });
            });
            this.childLayoutKeys = this.parentIsland.children.map(function (item) { return item.key; });
        }
        this.toolbarCustomContentTemplates = this.parentIsland ?
            this.parentIsland.toolbarCustomContentTemplates :
            this.toolbarCustomContentTemplates;
    };
    Object.defineProperty(IgxHierarchicalGridComponent.prototype, "outletDirective", {
        get: /**
         * @return {?}
         */
        function () {
            return this.rootGrid._outletDirective;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxHierarchicalGridComponent.prototype, "parentRowOutletDirective", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this === this.rootGrid ? null : this.rootGrid.rowEditingOutletDirective;
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
    IgxHierarchicalGridComponent.prototype.ngAfterContentInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        this.updateColumnList(false);
        this.childLayoutKeys = this.parent ?
            this.parentIsland.children.map(function (item) { return item.key; }) :
            this.childLayoutKeys = this.childLayoutList.map(function (item) { return item.key; });
        this.childLayoutList.notifyOnChanges();
        this.childLayoutList.changes.pipe(takeUntil(this.destroy$))
            .subscribe(function () { return _this.onRowIslandChange(); });
        _super.prototype.ngAfterContentInit.call(this);
    };
    /**
    * @hidden
    */
    /**
     * @hidden
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.onRowIslandChange = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.parent) {
            this.childLayoutKeys = this.parentIsland.children.filter(function (item) { return !((/** @type {?} */ (item)))._destroyed; }).map(function (item) { return item.key; });
        }
        else {
            this.childLayoutKeys = this.childLayoutList.filter(function (item) { return !((/** @type {?} */ (item)))._destroyed; }).map(function (item) { return item.key; });
        }
        if (!((/** @type {?} */ (this.cdr))).destroyed) {
            this.cdr.detectChanges();
        }
    };
    /**
     * @protected
     * @param {?} change
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.onColumnsChanged = /**
     * @protected
     * @param {?} change
     * @return {?}
     */
    function (change) {
        var _this = this;
        this.updateColumnList();
        /** @type {?} */
        var cols = change.filter(function (c) { return c.grid === _this; });
        if (cols.length > 0) {
            this.columnList.reset(cols);
            _super.prototype.onColumnsChanged.call(this, this.columnList);
        }
    };
    /**
     * @private
     * @param {?=} recalcColSizes
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.updateColumnList = /**
     * @private
     * @param {?=} recalcColSizes
     * @return {?}
     */
    function (recalcColSizes) {
        if (recalcColSizes === void 0) { recalcColSizes = true; }
        /** @type {?} */
        var childLayouts = this.parent ? this.childLayoutList : this.allLayoutList;
        /** @type {?} */
        var nestedColumns = childLayouts.map(function (layout) {
            return layout.columnList.toArray();
        });
        /** @type {?} */
        var colsArray = [].concat.apply([], nestedColumns);
        /** @type {?} */
        var colLength = this.columnList.length;
        if (colsArray.length > 0) {
            /** @type {?} */
            var topCols = this.columnList.filter(function (item) {
                return colsArray.indexOf(item) === -1;
            });
            this.columnList.reset(topCols);
            if (recalcColSizes && this.columnList.length !== colLength) {
                this.calculateGridSizes();
            }
        }
    };
    /**
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (!this.parent) {
            this.hgridAPI.getChildGrids(true).forEach(function (grid) {
                if (!grid.childRow.cdr.destroyed) {
                    grid.childRow.cdr.destroy();
                }
            });
        }
        if (this.parent && this.selectionService.activeElement) {
            // in case selection is in destroyed child grid, selection should be cleared.
            this._clearSeletionHighlights();
        }
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @private
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype._clearSeletionHighlights = /**
     * @private
     * @return {?}
     */
    function () {
        tslib_1.__spread([this.rootGrid], this.rootGrid.getChildGrids(true)).forEach(function (grid) {
            grid.selectionService.clear();
            grid.selectionService.activeElement = null;
            grid.nativeElement.classList.remove('igx-grid__tr--highlighted');
            grid.highlightedRowID = null;
            grid.cdr.markForCheck();
        });
    };
    Object.defineProperty(IgxHierarchicalGridComponent.prototype, "template", {
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
     * @hidden
     * Gets the combined width of the columns that are specific to the enabled grid features. They are fixed.
     * TODO: Remove for Angular 8. Calling parent class getter using super is not supported for now.
     */
    /**
     * @hidden
     * Gets the combined width of the columns that are specific to the enabled grid features. They are fixed.
     * TODO: Remove for Angular 8. Calling parent class getter using super is not supported for now.
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.getFeatureColumnsWidth = /**
     * @hidden
     * Gets the combined width of the columns that are specific to the enabled grid features. They are fixed.
     * TODO: Remove for Angular 8. Calling parent class getter using super is not supported for now.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var width = _super.prototype.getFeatureColumnsWidth.call(this);
        if (this.hasExpandableChildren) {
            width += this.headerHierarchyExpander.nativeElement.offsetWidth || this.getDefaultExpanderWidth();
        }
        return width;
    };
    /**
     * @private
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.getDefaultExpanderWidth = /**
     * @private
     * @return {?}
     */
    function () {
        switch (this.displayDensity) {
            case DisplayDensity.cosy:
                return 57;
            case DisplayDensity.compact:
                return 49;
            default:
                return 72;
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} rowData
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.isRowHighlighted = /**
     * @hidden
     * @param {?} rowData
     * @return {?}
     */
    function (rowData) {
        return this.highlightedRowID === rowData.rowID;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} record
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.isHierarchicalRecord = /**
     * @hidden
     * @param {?} record
     * @return {?}
     */
    function (record) {
        return this.childLayoutList.length !== 0 && record[this.childLayoutList.first.key];
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} record
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.isChildGridRecord = /**
     * @hidden
     * @param {?} record
     * @return {?}
     */
    function (record) {
        // Can be null when there is defined layout but no child data was found
        return record.childGridsData !== undefined;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} index
     * @param {?} rec
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.trackChanges = /**
     * @hidden
     * @param {?} index
     * @param {?} rec
     * @return {?}
     */
    function (index, rec) {
        if (rec.childGridsData !== undefined) {
            // if is child rec
            return rec.rowID;
        }
        return rec;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} rowData
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.getContext = /**
     * @hidden
     * @param {?} rowData
     * @return {?}
     */
    function (rowData) {
        if (this.isChildGridRecord(rowData)) {
            /** @type {?} */
            var cachedData = this.childGridTemplates.get(rowData.rowID);
            if (cachedData) {
                /** @type {?} */
                var view = cachedData.view;
                /** @type {?} */
                var tmlpOutlet = cachedData.owner;
                return {
                    $implicit: rowData,
                    moveView: view,
                    owner: tmlpOutlet,
                    index: this.verticalScrollContainer.igxForOf.indexOf(rowData)
                };
            }
            else {
                /** @type {?} */
                var rowID = this.primaryKey ? rowData.rowID : this.data.indexOf(rowData.rowID);
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
    };
    Object.defineProperty(IgxHierarchicalGridComponent.prototype, "rootGrid", {
        /**
         * @hidden
        */
        get: /**
         * @hidden
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        function () {
            /** @type {?} */
            var currGrid = (/** @type {?} */ (this));
            while (currGrid.parent) {
                currGrid = currGrid.parent;
            }
            return currGrid;
        },
        enumerable: true,
        configurable: true
    });
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
    IgxHierarchicalGridComponent.prototype.initColumns = /**
     * @hidden
     * @protected
     * @param {?} collection
     * @param {?=} cb
     * @return {?}
     */
    function (collection, cb) {
        if (cb === void 0) { cb = null; }
        if (this.hasColumnLayouts) {
            // invalid configuration - hierarchical grid should not allow column layouts
            // remove column layouts
            /** @type {?} */
            var nonColumnLayoutColumns = this.columnList.filter(function (col) { return !col.columnLayout && !col.columnLayoutChild; });
            this.columnList.reset(nonColumnLayoutColumns);
        }
        _super.prototype.initColumns.call(this, collection, cb);
    };
    /**
     * @hidden
     * Gets the visible content height that includes header + tbody + footer.
     * For hierarchical child grid it may be scrolled and not fully visible.
     */
    /**
     * @hidden
     * Gets the visible content height that includes header + tbody + footer.
     * For hierarchical child grid it may be scrolled and not fully visible.
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.getVisibleContentHeight = /**
     * @hidden
     * Gets the visible content height that includes header + tbody + footer.
     * For hierarchical child grid it may be scrolled and not fully visible.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var height = _super.prototype.getVisibleContentHeight.call(this);
        if (this.parent) {
            /** @type {?} */
            var rootHeight = this.rootGrid.getVisibleContentHeight();
            /** @type {?} */
            var topDiff = this.nativeElement.getBoundingClientRect().top - this.rootGrid.nativeElement.getBoundingClientRect().top;
            height = rootHeight - topDiff > height ? height : rootHeight - topDiff;
        }
        return height;
    };
    /**
     * @hidden
    */
    /**
     * @hidden
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.collapseAllRows = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.hierarchicalState = [];
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} record
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.isExpanded = /**
     * @hidden
     * @param {?} record
     * @return {?}
     */
    function (record) {
        var _this = this;
        /** @type {?} */
        var inState;
        if (record.childGridsData !== undefined) {
            inState = !!this.hierarchicalState.find(function (v) { return v.rowID === record.rowID; });
        }
        else {
            inState = !!this.hierarchicalState.find(function (v) {
                return _this.primaryKey ? v.rowID === record[_this.primaryKey] : v.rowID === record;
            });
        }
        return inState && this.childLayoutList.length !== 0;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} args
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.viewCreatedHandler = /**
     * @hidden
     * @param {?} args
     * @return {?}
     */
    function (args) {
        if (this.isChildGridRecord(args.context.$implicit)) {
            /** @type {?} */
            var key = args.context.$implicit.rowID;
            this.childGridTemplates.set(key, args);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} args
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.viewMovedHandler = /**
     * @hidden
     * @param {?} args
     * @return {?}
     */
    function (args) {
        var _this = this;
        if (this.isChildGridRecord(args.context.$implicit)) {
            // view was moved, update owner in cache
            /** @type {?} */
            var key = args.context.$implicit.rowID;
            /** @type {?} */
            var cachedData = this.childGridTemplates.get(key);
            cachedData.owner = args.owner;
            this.childLayoutList.forEach(function (layout) {
                /** @type {?} */
                var relatedGrid = _this.hgridAPI.getChildGridByID(layout.key, args.context.$implicit.rowID);
                if (relatedGrid && relatedGrid.updateOnRender) {
                    // Detect changes if `expandChildren` has changed when the grid wasn't visible. This is for performance reasons.
                    relatedGrid.reflow();
                    relatedGrid.updateOnRender = false;
                }
            });
            /** @type {?} */
            var childGrids = this.getChildGrids(true);
            childGrids.forEach(function (grid) {
                if (grid.isPercentWidth) {
                    grid.reflow();
                }
                grid.updateScrollPosition();
            });
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.updateScrollPosition = /**
     * @hidden
     * @return {?}
     */
    function () {
        /** @type {?} */
        var vScr = this.verticalScrollContainer.getVerticalScroll();
        /** @type {?} */
        var hScr = this.parentVirtDir.getHorizontalScroll();
        if (vScr) {
            vScr.scrollTop = this.scrollTop;
        }
        if (hScr) {
            hScr.scrollLeft = this.scrollLeft;
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.getPossibleColumnWidth = /**
     * @hidden
     * @return {?}
     */
    function () {
        /** @type {?} */
        var computedWidth = this.calcWidth || parseInt(this.document.defaultView.getComputedStyle(this.nativeElement).getPropertyValue('width'), 10);
        computedWidth -= this.headerHierarchyExpander.nativeElement.clientWidth;
        return _super.prototype.getPossibleColumnWidth.call(this, computedWidth);
    };
    /**
     * @protected
     * @param {?=} inDeph
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.getChildGrids = /**
     * @protected
     * @param {?=} inDeph
     * @return {?}
     */
    function (inDeph) {
        return this.hgridAPI.getChildGrids(inDeph);
    };
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.generateDataFields = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        return _super.prototype.generateDataFields.call(this, data).filter(function (field) {
            /** @type {?} */
            var layoutsList = _this.parentIsland ? _this.parentIsland.children : _this.childLayoutList;
            /** @type {?} */
            var keys = layoutsList.map(function (item) { return item.key; });
            return keys.indexOf(field) === -1;
        });
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.hg_verticalScrollHandler = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.scrollTop = event.target.scrollTop;
    };
    /**
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.onContainerScroll = /**
     * @return {?}
     */
    function () {
        this.hideOverlays();
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.hg_horizontalScrollHandler = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.scrollLeft = event.target.scrollLeft;
    };
    /**
     * @private
     * @return {?}
     */
    IgxHierarchicalGridComponent.prototype.updateParentSizes = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currGrid = this.parent;
        while (currGrid) {
            /** @type {?} */
            var hadScrollbar = currGrid.hasVerticalSroll();
            /** @type {?} */
            var virt = currGrid.verticalScrollContainer;
            virt.recalcUpdateSizes();
            /** @type {?} */
            var offset = parseInt(virt.dc.instance._viewContainer.element.nativeElement.style.top, 10);
            /** @type {?} */
            var scr = virt.getVerticalScroll();
            scr.scrollTop = virt.getScrollForIndex(virt.state.startIndex) - offset;
            if (hadScrollbar !== currGrid.hasVerticalSroll()) {
                // If after recalculations the grid should show vertical scrollbar it should also reflow.
                currGrid.reflow();
            }
            currGrid = currGrid.parent;
        }
    };
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
                        { provide: IgxGridBaseComponent, useExisting: forwardRef(function () { return IgxHierarchicalGridComponent; }) },
                        IgxGridSummaryService,
                        IgxFilteringService,
                        IgxHierarchicalGridNavigationService,
                        IgxForOfSyncService
                    ]
                }] }
    ];
    /** @nocollapse */
    IgxHierarchicalGridComponent.ctorParameters = function () { return [
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
    ]; };
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
    return IgxHierarchicalGridComponent;
}(IgxHierarchicalGridBaseComponent));
export { IgxHierarchicalGridComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGllcmFyY2hpY2FsLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9oaWVyYXJjaGljYWwtZ3JpZC9oaWVyYXJjaGljYWwtZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUNMLFVBQVUsRUFDVixXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsTUFBTSxFQUNOLHdCQUF3QixFQUd4QixRQUFRLEVBR1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUEwQixtQkFBbUIsRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV4RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxx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QywwQkFBMEIsRUFBRSxFQUFFLElBQUksRUFBRSwwQkFBMEIsRUFBRTttQ0FNN0UsWUFBWSxTQUFDLHdCQUF3QixFQUFFLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFOztJQWtmOUUsbUNBQUM7Q0FBQSxBQTFyQkQsQ0FnQmtELGdDQUFnQyxHQTBxQmpGO1NBMXFCWSw0QkFBNEI7Ozs7OztJQTZKckMsdURBQ3lEOzs7OztJQUt6RCxxREFDdUQ7Ozs7O0lBRXZELGtFQUN1RDs7Ozs7SUFFdkQscURBQzBDOzs7OztJQUUxQywrREFDOEM7Ozs7O0lBSzlDLHVEQUN1Qzs7Ozs7SUFLdkMsd0RBQzZEOzs7OztJQVk3RCx1REFBNEI7Ozs7O0lBSzVCLHdEQUErQjs7Ozs7SUFLL0Isc0RBQThCOzs7OztJQUs5Qiw4Q0FBcUI7Ozs7O0lBRXJCLDBEQUFnQzs7Ozs7SUFDaEMsNkNBQWM7Ozs7O0lBQ2QscURBQTZCOzs7OztJQUM3Qiw0Q0FBb0Q7Ozs7O0lBQ3BELDBEQUFzRDs7Ozs7SUFDdEQsaURBQXNCOzs7OztJQUN0QixrREFBdUI7O0lBR25CLHdEQUFnRDs7SUFFaEQsMERBQW1EOzs7OztJQUduRCwwREFBNkQ7O0lBRzdELGdEQUFpQzs7Ozs7SUFPakMsc0RBQXNFOztJQUN0RSxzREFBNEM7Ozs7O0lBQzVDLDhEQUFpRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ29tcG9uZW50LFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LFxuICAgIGZvcndhcmRSZWYsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgVmlld0NoaWxkLFxuICAgIFZpZXdDaGlsZHJlbixcbiAgICBRdWVyeUxpc3QsXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgTmdab25lLFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIEl0ZXJhYmxlRGlmZmVycyxcbiAgICBWaWV3Q29udGFpbmVyUmVmLFxuICAgIEluamVjdCxcbiAgICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIE9wdGlvbmFsLFxuICAgIE9uSW5pdCxcbiAgICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hHcmlkQmFzZUNvbXBvbmVudCwgSWd4R3JpZFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vZ3JpZC1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcmlkQmFzZUFQSVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hIaWVyYXJjaGljYWxHcmlkQVBJU2VydmljZSB9IGZyb20gJy4vaGllcmFyY2hpY2FsLWdyaWQtYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4Um93SXNsYW5kQ29tcG9uZW50IH0gZnJvbSAnLi9yb3ctaXNsYW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hDaGlsZEdyaWRSb3dDb21wb25lbnQgfSBmcm9tICcuL2NoaWxkLWdyaWQtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hGaWx0ZXJpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vZmlsdGVyaW5nL2dyaWQtZmlsdGVyaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSURpc3BsYXlEZW5zaXR5T3B0aW9ucywgRGlzcGxheURlbnNpdHlUb2tlbiwgRGlzcGxheURlbnNpdHkgfSBmcm9tICcuLi8uLi9jb3JlL2Rpc3BsYXlEZW5zaXR5JztcbmltcG9ydCB7IElHcmlkRGF0YUJpbmRhYmxlLCBJZ3hDb2x1bW5Db21wb25lbnQsIH0gZnJvbSAnLi4vZ3JpZC9pbmRleCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJZ3hIaWVyYXJjaGljYWxTZWxlY3Rpb25BUElTZXJ2aWNlIH0gZnJvbSAnLi9zZWxlY3Rpb24nO1xuaW1wb3J0IHsgSWd4SGllcmFyY2hpY2FsR3JpZE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9oaWVyYXJjaGljYWwtZ3JpZC1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4R3JpZFN1bW1hcnlTZXJ2aWNlIH0gZnJvbSAnLi4vc3VtbWFyaWVzL2dyaWQtc3VtbWFyeS5zZXJ2aWNlJztcbmltcG9ydCB7IElneEhpZXJhcmNoaWNhbEdyaWRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9oaWVyYXJjaGljYWwtZ3JpZC1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJZ3hUZW1wbGF0ZU91dGxldERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdGVtcGxhdGUtb3V0bGV0L3RlbXBsYXRlX291dGxldC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4R3JpZFNlbGVjdGlvblNlcnZpY2UsIElneEdyaWRDUlVEU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvZ3JpZC1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgSWd4T3ZlcmxheVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBJZ3hDb2x1bW5SZXNpemluZ1NlcnZpY2UgfSBmcm9tICcuLi9ncmlkLWNvbHVtbi1yZXNpemluZy5zZXJ2aWNlJztcbmltcG9ydCB7IElneEZvck9mU3luY1NlcnZpY2UgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2Zvci1vZi9mb3Jfb2Yuc3luYy5zZXJ2aWNlJztcblxubGV0IE5FWFRfSUQgPSAwO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhpZXJhcmNoaWNhbFN0YXRlUmVjb3JkIHtcbiAgICByb3dJRDogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgICBzZWxlY3RvcjogJ2lneC1oaWVyYXJjaGljYWwtZ3JpZCcsXG4gICAgdGVtcGxhdGVVcmw6ICdoaWVyYXJjaGljYWwtZ3JpZC5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIElneEdyaWRTZWxlY3Rpb25TZXJ2aWNlLFxuICAgICAgICBJZ3hHcmlkQ1JVRFNlcnZpY2UsXG4gICAgICAgIHsgcHJvdmlkZTogR3JpZEJhc2VBUElTZXJ2aWNlLCB1c2VDbGFzczogSWd4SGllcmFyY2hpY2FsR3JpZEFQSVNlcnZpY2UgfSxcbiAgICAgICAgeyBwcm92aWRlOiBJZ3hHcmlkQmFzZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudCkgfSxcbiAgICAgICAgSWd4R3JpZFN1bW1hcnlTZXJ2aWNlLFxuICAgICAgICBJZ3hGaWx0ZXJpbmdTZXJ2aWNlLFxuICAgICAgICBJZ3hIaWVyYXJjaGljYWxHcmlkTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgICAgIElneEZvck9mU3luY1NlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnQgZXh0ZW5kcyBJZ3hIaWVyYXJjaGljYWxHcmlkQmFzZUNvbXBvbmVudFxuICAgIGltcGxlbWVudHMgSUdyaWREYXRhQmluZGFibGUsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSBgaWRgIGF0dHJpYnV0ZS4gSWYgbm90IHByb3ZpZGVkIGl0IHdpbGwgYmUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtaGllcmFyY2hpY2FsLWdyaWQgW2lkXT1cIidpZ3gtaGdyaWQtMSdcIiBbZGF0YV09XCJEYXRhXCIgW2F1dG9HZW5lcmF0ZV09XCJ0cnVlXCI+PC9pZ3gtaGllcmFyY2hpY2FsLWdyaWQ+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5oX2lkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGxldHMgeW91IGZpbGwgdGhlIGBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50YCB3aXRoIGFuIGFycmF5IG9mIGRhdGEuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtaGllcmFyY2hpY2FsLWdyaWQgW2RhdGFdPVwiRGF0YVwiIFthdXRvR2VuZXJhdGVdPVwidHJ1ZVwiPjwvaWd4LWhpZXJhcmNoaWNhbC1ncmlkPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGRhdGEodmFsdWU6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zdW1tYXJ5U2VydmljZS5jbGVhclN1bW1hcnlDYWNoZSgpO1xuICAgICAgICBpZiAodGhpcy5zaG91bGRHZW5lcmF0ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXR1cENvbHVtbnMoKTtcbiAgICAgICAgICAgIHRoaXMucmVmbG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudCAmJiAodGhpcy5oZWlnaHQgPT09IG51bGwgfHwgdGhpcy5oZWlnaHQuaW5kZXhPZignJScpICE9PSAtMSkpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBoZWlnaHQgd2lsbCBjaGFuZ2UgYmFzZWQgb24gaG93IG11Y2ggZGF0YSB0aGVyZSBpcywgcmVjYWxjdWxhdGUgc2l6ZXMgaW4gaWd4Rm9yT2YuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGFyZW50U2l6ZXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBkYXRhIHNldCB0byB0aGUgYElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgZmlsdGVyZWREYXRhID0gdGhpcy5ncmlkLmZpbHRlcmVkRGF0YTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZGF0YSgpOiBhbnlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogU2V0cyB0aGUgc3RhdGUgb2YgdGhlIGBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50YCBjb250YWluaW5nIHdoaWNoIHJvd3MgYXJlIGV4cGFuZGVkLlxuICAgICogYGBgdHlwZXNjcmlwdFxuICAgICogdGhpcy5ncmlkU3RhdGUgPSBbeyByb3dJRDogMSB9LCB7IHJvd0lEOiA0fV07XG4gICAgKiBgYGBcbiAgICAqIGBgYGh0bWxcbiAgICAqIDxpZ3gtaGllcmFyY2hpY2FsLWdyaWQgW3ByaW1hcnlLZXldPVwiJ0lEJ1wiIFtkYXRhXT1cIkRhdGFcIiBbYXV0b0dlbmVyYXRlXT1cImZhbHNlXCIgW2hpZXJhcmNoaWNhbFN0YXRlXT1cImhncmlkU3RhdGVcIj5cbiAgICAqICAgICAgPGlneC1jb2x1bW4gZmllbGQ9XCJJRFwiICBbZGF0YVR5cGVdPSdudW1iZXInPjwvaWd4LWNvbHVtbj5cbiAgICAqICAgICAgPGlneC1jb2x1bW4gZmllbGQ9XCJQcm9kdWN0XCIgIFtkYXRhVHlwZV09J3N0cmluZyc+PC9pZ3gtY29sdW1uPlxuICAgICogICAgICA8aWd4LWNvbHVtbiBmaWVsZD1cIkRlc2NyaXB0aW9uXCIgIFtkYXRhVHlwZV09J3N0cmluZyc+PC9pZ3gtY29sdW1uPlxuICAgICogPC9pZ3gtaGllcmFyY2hpY2FsLWdyaWQ+XG4gICAgKiBgYGBcbiAgICAqIEBtZW1iZXJvZiBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50XG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaGllcmFyY2hpY2FsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oaWVyYXJjaGljYWxTdGF0ZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBoaWVyYXJjaGljYWxTdGF0ZSh2YWwpIHtcbiAgICAgICAgdGhpcy5faGllcmFyY2hpY2FsU3RhdGUgPSB2YWw7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBhcmVudFNpemVzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgYW4gYXJyYXkgb2Ygb2JqZWN0cyBjb250YWluaW5nIHRoZSBmaWx0ZXJlZCBkYXRhIGluIHRoZSBgSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZ3JpZC5maWx0ZXJlZERhdGEgPSBbe1xuICAgICAqICAgICAgIElEOiAxLFxuICAgICAqICAgICAgIE5hbWU6IFwiQVwiXG4gICAgICogfV07XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGZpbHRlcmVkRGF0YSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9maWx0ZXJlZERhdGEgPSB2YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5yb3dTZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUhlYWRlckNoZWNrYm94U3RhdHVzT25GaWx0ZXIodGhpcy5fZmlsdGVyZWREYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2Ygb2JqZWN0cyBjb250YWluaW5nIHRoZSBmaWx0ZXJlZCBkYXRhIGluIHRoZSBgSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBmaWx0ZXJlZERhdGEgPSB0aGlzLmdyaWQuZmlsdGVyZWREYXRhO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldCBmaWx0ZXJlZERhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJlZERhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBpZiBhbGwgaW1tZWRpYXRlIGNoaWxkcmVuIG9mIHRoZSBgSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudGAgc2hvdWxkIGJlIGV4cGFuZGVkL2NvbGxhcHNlZC5cbiAgICAgKiBEZWZ1bHQgdmFsdWUgaXMgZmFsc2UuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtaGllcmFyY2hpY2FsLWdyaWQgW2lkXT1cIidpZ3gtZ3JpZC0xJ1wiIFtkYXRhXT1cIkRhdGFcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIiBbZXhwYW5kQ2hpbGRyZW5dPVwidHJ1ZVwiPjwvaWd4LWhpZXJhcmNoaWNhbC1ncmlkPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBzZXQgZXhwYW5kQ2hpbGRyZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fZXhwYW5kQ2hpbGRyZW4gPSB2YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmIHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5oaWVyYXJjaGljYWxTdGF0ZSA9IHRoaXMuZGF0YS5tYXAoKHJlYykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHJvd0lEOiB0aGlzLnByaW1hcnlLZXkgPyByZWNbdGhpcy5wcmltYXJ5S2V5XSA6IHJlYyB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmhpZXJhcmNoaWNhbFN0YXRlID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGlmIGFsbCBpbW1lZGlhdGUgY2hpbGRyZW4gb2YgdGhlIGBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50YCBwcmV2aW91c2x5IGhhdmUgYmVlbiBzZXQgdG8gYmUgZXhwYW5kZWQvY29sbGFwc2VkLlxuICAgICAqIElmIHByZXZpb3VzbHkgc2V0IGFuZCBzb21lIHJvd3MgaGF2ZSBiZWVuIG1hbnVhbGx5IGV4cGFuZGVkL2NvbGxhcHNlZCBpdCB3aWxsIHN0aWxsIHJldHVybiB0aGUgbGFzdCBzZXQgdmFsdWUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGV4cGFuZGVkID0gdGhpcy5ncmlkLmV4cGFuZENoaWxkcmVuO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGV4cGFuZENoaWxkcmVuKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhwYW5kQ2hpbGRyZW47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHBhcmVudCByb3cuIEl0IG1heSBiZSBhIGBzdHJpbmdgIG9yIGBudW1iZXJgIGlmIGBwcmltYXJ5S2V5YCBvZiB0aGVcbiAgICAgKiBwYXJlbnQgZ3JpZCBpcyBzZXQgb3IgYW4gb2JqZWN0IHJlZmVyZW5jZSBvZiB0aGUgcGFyZW50IHJlY29yZCBvdGhlcndpc2UuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGZvcmVpZ25LZXkgPSB0aGlzLmdyaWQuZm9yZWlnbktleTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZm9yZWlnbktleSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmhncmlkQVBJLmdldFBhcmVudFJvd0lkKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkcmVuKElneFJvd0lzbGFuZENvbXBvbmVudCwgeyByZWFkOiBJZ3hSb3dJc2xhbmRDb21wb25lbnQsIGRlc2NlbmRhbnRzOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBjaGlsZExheW91dExpc3Q6IFF1ZXJ5TGlzdDxJZ3hSb3dJc2xhbmRDb21wb25lbnQ+O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGRyZW4oSWd4Um93SXNsYW5kQ29tcG9uZW50LCB7IHJlYWQ6IElneFJvd0lzbGFuZENvbXBvbmVudCwgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgICBwdWJsaWMgYWxsTGF5b3V0TGlzdDogUXVlcnlMaXN0PElneFJvd0lzbGFuZENvbXBvbmVudD47XG5cbiAgICBAVmlld0NoaWxkKCdoaWVyYXJjaGljYWxfcmVjb3JkX3RlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGhpZXJhcmNoaWNhbFJlY29yZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnY2hpbGRfcmVjb3JkX3RlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGNoaWxkVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdoZWFkZXJIaWVyYXJjaHlFeHBhbmRlcicsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGhlYWRlckhpZXJhcmNoeUV4cGFuZGVyOiBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGRyZW4oSWd4VGVtcGxhdGVPdXRsZXREaXJlY3RpdmUsIHsgcmVhZDogSWd4VGVtcGxhdGVPdXRsZXREaXJlY3RpdmUgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVPdXRsZXRzOiBRdWVyeUxpc3Q8YW55PjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkcmVuKElneENoaWxkR3JpZFJvd0NvbXBvbmVudCwgeyByZWFkOiBJZ3hDaGlsZEdyaWRSb3dDb21wb25lbnQgfSlcbiAgICBwdWJsaWMgaGllcmFyY2hpY2FsUm93czogUXVlcnlMaXN0PElneENoaWxkR3JpZFJvd0NvbXBvbmVudD47XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IGhhc0V4cGFuZGFibGVDaGlsZHJlbigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5jaGlsZExheW91dEtleXMubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2hpbGRMYXlvdXRLZXlzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGhpZ2hsaWdodGVkUm93SUQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGVPblJlbmRlciA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBwYXJlbnQgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfaGllcmFyY2hpY2FsU3RhdGUgPSBbXTtcbiAgICBwcml2YXRlIF9kYXRhO1xuICAgIHByaXZhdGUgX2ZpbHRlcmVkRGF0YSA9IG51bGw7XG4gICAgcHJpdmF0ZSBoX2lkID0gYGlneC1oaWVyYXJjaGljYWwtZ3JpZC0ke05FWFRfSUQrK31gO1xuICAgIHByaXZhdGUgY2hpbGRHcmlkVGVtcGxhdGVzOiBNYXA8YW55LCBhbnk+ID0gbmV3IE1hcCgpO1xuICAgIHByaXZhdGUgc2Nyb2xsVG9wID0gMDtcbiAgICBwcml2YXRlIHNjcm9sbExlZnQgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBzZWxlY3Rpb25TZXJ2aWNlOiBJZ3hHcmlkU2VsZWN0aW9uU2VydmljZSxcbiAgICAgICAgY3J1ZFNlcnZpY2U6IElneEdyaWRDUlVEU2VydmljZSxcbiAgICAgICAgcHVibGljIGNvbFJlc2l6aW5nU2VydmljZTogSWd4Q29sdW1uUmVzaXppbmdTZXJ2aWNlLFxuICAgICAgICBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4sXG4gICAgICAgIHNlbGVjdGlvbjogSWd4SGllcmFyY2hpY2FsU2VsZWN0aW9uQVBJU2VydmljZSxcbiAgICAgICAgQEluamVjdChJZ3hHcmlkVHJhbnNhY3Rpb24pIHByb3RlY3RlZCB0cmFuc2FjdGlvbkZhY3Rvcnk6IGFueSxcbiAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgem9uZTogTmdab25lLFxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwdWJsaWMgZG9jdW1lbnQsXG4gICAgICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgIGRpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcbiAgICAgICAgdmlld1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgbmF2aWdhdGlvbjogSWd4SGllcmFyY2hpY2FsR3JpZE5hdmlnYXRpb25TZXJ2aWNlLFxuICAgICAgICBmaWx0ZXJpbmdTZXJ2aWNlOiBJZ3hGaWx0ZXJpbmdTZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KElneE92ZXJsYXlTZXJ2aWNlKSBwcm90ZWN0ZWQgb3ZlcmxheVNlcnZpY2U6IElneE92ZXJsYXlTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgc3VtbWFyeVNlcnZpY2U6IElneEdyaWRTdW1tYXJ5U2VydmljZSxcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChEaXNwbGF5RGVuc2l0eVRva2VuKSBwcm90ZWN0ZWQgX2Rpc3BsYXlEZW5zaXR5T3B0aW9uczogSURpc3BsYXlEZW5zaXR5T3B0aW9ucykge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIHNlbGVjdGlvblNlcnZpY2UsXG4gICAgICAgICAgICBjcnVkU2VydmljZSxcbiAgICAgICAgICAgIGdyaWRBUEksXG4gICAgICAgICAgICBzZWxlY3Rpb24sXG4gICAgICAgICAgICB0eXBlb2YgdHJhbnNhY3Rpb25GYWN0b3J5ID09PSAnZnVuY3Rpb24nID8gdHJhbnNhY3Rpb25GYWN0b3J5KCkgOiB0cmFuc2FjdGlvbkZhY3RvcnksXG4gICAgICAgICAgICBlbGVtZW50UmVmLFxuICAgICAgICAgICAgem9uZSxcbiAgICAgICAgICAgIGRvY3VtZW50LFxuICAgICAgICAgICAgY2RyLFxuICAgICAgICAgICAgcmVzb2x2ZXIsXG4gICAgICAgICAgICBkaWZmZXJzLFxuICAgICAgICAgICAgdmlld1JlZixcbiAgICAgICAgICAgIG5hdmlnYXRpb24sXG4gICAgICAgICAgICBmaWx0ZXJpbmdTZXJ2aWNlLFxuICAgICAgICAgICAgb3ZlcmxheVNlcnZpY2UsXG4gICAgICAgICAgICBzdW1tYXJ5U2VydmljZSxcbiAgICAgICAgICAgIF9kaXNwbGF5RGVuc2l0eU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmhncmlkQVBJID0gPElneEhpZXJhcmNoaWNhbEdyaWRBUElTZXJ2aWNlPmdyaWRBUEk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl90cmFuc2FjdGlvbnMgPSB0aGlzLnBhcmVudElzbGFuZCA/IHRoaXMucGFyZW50SXNsYW5kLnRyYW5zYWN0aW9ucyA6IHRoaXMuX3RyYW5zYWN0aW9ucztcbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcbiAgICAgICAgdGhpcy52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGdfdmVydGljYWxTY3JvbGxIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnBhcmVudFZpcnREaXIuZ2V0SG9yaXpvbnRhbFNjcm9sbCgpLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGdfaG9yaXpvbnRhbFNjcm9sbEhhbmRsZXIuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kQ2hpbGRyZW4gJiYgdGhpcy5kYXRhICYmIHRoaXMuaGllcmFyY2hpY2FsU3RhdGUubGVuZ3RoICE9PSB0aGlzLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmhpZXJhcmNoaWNhbFN0YXRlID0gdGhpcy5kYXRhLm1hcCgocmVjKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcm93SUQ6IHRoaXMucHJpbWFyeUtleSA/IHJlY1t0aGlzLnByaW1hcnlLZXldIDogcmVjIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmVydGljYWxTY3JvbGxDb250YWluZXIub25CZWZvcmVWaWV3RGVzdHJveWVkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKHZpZXcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0RhdGEgPSB2aWV3LmNvbnRleHQuJGltcGxpY2l0O1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDaGlsZEdyaWRSZWNvcmQocm93RGF0YSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWNoZWREYXRhID0gdGhpcy5jaGlsZEdyaWRUZW1wbGF0ZXMuZ2V0KHJvd0RhdGEucm93SUQpO1xuICAgICAgICAgICAgICAgIGlmIChjYWNoZWREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRtbHBPdXRsZXQgPSBjYWNoZWREYXRhLm93bmVyO1xuICAgICAgICAgICAgICAgICAgICB0bWxwT3V0bGV0Ll92aWV3Q29udGFpbmVyUmVmLmRldGFjaCgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5fZGlzcGxheURlbnNpdHkgPSB0aGlzLnJvb3RHcmlkLl9kaXNwbGF5RGVuc2l0eTtcbiAgICAgICAgICAgIHRoaXMucm9vdEdyaWQub25EZW5zaXR5Q2hhbmdlZC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXNwbGF5RGVuc2l0eSA9IHRoaXMucm9vdEdyaWQuX2Rpc3BsYXlEZW5zaXR5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLm5hdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZmxvdygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVPblJlbmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jaGlsZExheW91dEtleXMgPSB0aGlzLnBhcmVudElzbGFuZC5jaGlsZHJlbi5tYXAoKGl0ZW0pID0+IGl0ZW0ua2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG9vbGJhckN1c3RvbUNvbnRlbnRUZW1wbGF0ZXMgPSB0aGlzLnBhcmVudElzbGFuZCA/XG4gICAgICAgICAgICB0aGlzLnBhcmVudElzbGFuZC50b29sYmFyQ3VzdG9tQ29udGVudFRlbXBsYXRlcyA6XG4gICAgICAgICAgICB0aGlzLnRvb2xiYXJDdXN0b21Db250ZW50VGVtcGxhdGVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgb3V0bGV0RGlyZWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb290R3JpZC5fb3V0bGV0RGlyZWN0aXZlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHBhcmVudFJvd091dGxldERpcmVjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMgPT09IHRoaXMucm9vdEdyaWQgPyBudWxsIDogdGhpcy5yb290R3JpZC5yb3dFZGl0aW5nT3V0bGV0RGlyZWN0aXZlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ29sdW1uTGlzdChmYWxzZSk7XG4gICAgICAgIHRoaXMuY2hpbGRMYXlvdXRLZXlzID0gdGhpcy5wYXJlbnQgP1xuICAgICAgICB0aGlzLnBhcmVudElzbGFuZC5jaGlsZHJlbi5tYXAoKGl0ZW0pID0+IGl0ZW0ua2V5KSA6XG4gICAgICAgIHRoaXMuY2hpbGRMYXlvdXRLZXlzID0gdGhpcy5jaGlsZExheW91dExpc3QubWFwKChpdGVtKSA9PiBpdGVtLmtleSk7XG4gICAgICAgIHRoaXMuY2hpbGRMYXlvdXRMaXN0Lm5vdGlmeU9uQ2hhbmdlcygpO1xuICAgICAgICB0aGlzLmNoaWxkTGF5b3V0TGlzdC5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMub25Sb3dJc2xhbmRDaGFuZ2UoKSk7XG4gICAgICAgIHN1cGVyLm5nQWZ0ZXJDb250ZW50SW5pdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQGhpZGRlblxuICAgICovXG4gICAgcHVibGljIG9uUm93SXNsYW5kQ2hhbmdlKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRMYXlvdXRLZXlzID0gdGhpcy5wYXJlbnRJc2xhbmQuY2hpbGRyZW4uZmlsdGVyKGl0ZW0gPT4gIShpdGVtIGFzIGFueSkuX2Rlc3Ryb3llZCkubWFwKChpdGVtKSA9PiBpdGVtLmtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkTGF5b3V0S2V5cyA9IHRoaXMuY2hpbGRMYXlvdXRMaXN0LmZpbHRlcihpdGVtID0+ICEoaXRlbSBhcyBhbnkpLl9kZXN0cm95ZWQpLm1hcCgoaXRlbSkgPT4gaXRlbS5rZXkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKHRoaXMuY2RyIGFzIGFueSkuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Db2x1bW5zQ2hhbmdlZChjaGFuZ2U6IFF1ZXJ5TGlzdDxJZ3hDb2x1bW5Db21wb25lbnQ+KSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ29sdW1uTGlzdCgpO1xuICAgICAgICBjb25zdCBjb2xzID0gY2hhbmdlLmZpbHRlcihjID0+IGMuZ3JpZCA9PT0gdGhpcyk7XG4gICAgICAgIGlmIChjb2xzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY29sdW1uTGlzdC5yZXNldChjb2xzKTtcbiAgICAgICAgICAgIHN1cGVyLm9uQ29sdW1uc0NoYW5nZWQodGhpcy5jb2x1bW5MaXN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQ29sdW1uTGlzdChyZWNhbGNDb2xTaXplcyA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgY2hpbGRMYXlvdXRzID0gdGhpcy5wYXJlbnQgPyB0aGlzLmNoaWxkTGF5b3V0TGlzdCA6IHRoaXMuYWxsTGF5b3V0TGlzdDtcbiAgICAgICAgY29uc3QgbmVzdGVkQ29sdW1ucyA9IGNoaWxkTGF5b3V0cy5tYXAoKGxheW91dCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGxheW91dC5jb2x1bW5MaXN0LnRvQXJyYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNvbHNBcnJheSA9IFtdLmNvbmNhdC5hcHBseShbXSwgbmVzdGVkQ29sdW1ucyk7XG4gICAgICAgIGNvbnN0IGNvbExlbmd0aCA9IHRoaXMuY29sdW1uTGlzdC5sZW5ndGg7XG4gICAgICAgIGlmIChjb2xzQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgdG9wQ29scyA9IHRoaXMuY29sdW1uTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sc0FycmF5LmluZGV4T2YoaXRlbSkgPT09IC0xO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbkxpc3QucmVzZXQodG9wQ29scyk7XG4gICAgICAgICAgICBpZiAocmVjYWxjQ29sU2l6ZXMgJiYgdGhpcy5jb2x1bW5MaXN0Lmxlbmd0aCAhPT0gY29sTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVHcmlkU2l6ZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAoIXRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLmhncmlkQVBJLmdldENoaWxkR3JpZHModHJ1ZSkuZm9yRWFjaCgoZ3JpZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZ3JpZC5jaGlsZFJvdy5jZHIuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQuY2hpbGRSb3cuY2RyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wYXJlbnQgJiYgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIGluIGNhc2Ugc2VsZWN0aW9uIGlzIGluIGRlc3Ryb3llZCBjaGlsZCBncmlkLCBzZWxlY3Rpb24gc2hvdWxkIGJlIGNsZWFyZWQuXG4gICAgICAgICAgICB0aGlzLl9jbGVhclNlbGV0aW9uSGlnaGxpZ2h0cygpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2xlYXJTZWxldGlvbkhpZ2hsaWdodHMoKSB7XG4gICAgICAgIFt0aGlzLnJvb3RHcmlkLCAuLi50aGlzLnJvb3RHcmlkLmdldENoaWxkR3JpZHModHJ1ZSldLmZvckVhY2goZ3JpZCA9PiB7XG4gICAgICAgICAgICBncmlkLnNlbGVjdGlvblNlcnZpY2UuY2xlYXIoKTtcbiAgICAgICAgICAgIGdyaWQuc2VsZWN0aW9uU2VydmljZS5hY3RpdmVFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGdyaWQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpZ3gtZ3JpZF9fdHItLWhpZ2hsaWdodGVkJyk7XG4gICAgICAgICAgICBncmlkLmhpZ2hsaWdodGVkUm93SUQgPSBudWxsO1xuICAgICAgICAgICAgZ3JpZC5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQGhpZGRlblxuICAgICovXG4gICAgcHVibGljIGdldCB0ZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyZWREYXRhICYmIHRoaXMuZmlsdGVyZWREYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1wdHlHcmlkVGVtcGxhdGUgPyB0aGlzLmVtcHR5R3JpZFRlbXBsYXRlIDogdGhpcy5lbXB0eUZpbHRlcmVkR3JpZFRlbXBsYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNMb2FkaW5nICYmICghdGhpcy5kYXRhIHx8IHRoaXMuZGF0YUxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRpbmdHcmlkVGVtcGxhdGUgPyB0aGlzLmxvYWRpbmdHcmlkVGVtcGxhdGUgOiB0aGlzLmxvYWRpbmdHcmlkRGVmYXVsdFRlbXBsYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGF0YUxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1wdHlHcmlkVGVtcGxhdGUgPyB0aGlzLmVtcHR5R3JpZFRlbXBsYXRlIDogdGhpcy5lbXB0eUdyaWREZWZhdWx0VGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogR2V0cyB0aGUgY29tYmluZWQgd2lkdGggb2YgdGhlIGNvbHVtbnMgdGhhdCBhcmUgc3BlY2lmaWMgdG8gdGhlIGVuYWJsZWQgZ3JpZCBmZWF0dXJlcy4gVGhleSBhcmUgZml4ZWQuXG4gICAgICogVE9ETzogUmVtb3ZlIGZvciBBbmd1bGFyIDguIENhbGxpbmcgcGFyZW50IGNsYXNzIGdldHRlciB1c2luZyBzdXBlciBpcyBub3Qgc3VwcG9ydGVkIGZvciBub3cuXG4gICAgICovXG4gICAgcHVibGljIGdldEZlYXR1cmVDb2x1bW5zV2lkdGgoKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IHN1cGVyLmdldEZlYXR1cmVDb2x1bW5zV2lkdGgoKTtcblxuICAgICAgICBpZiAodGhpcy5oYXNFeHBhbmRhYmxlQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHdpZHRoICs9IHRoaXMuaGVhZGVySGllcmFyY2h5RXhwYW5kZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCB8fCB0aGlzLmdldERlZmF1bHRFeHBhbmRlcldpZHRoKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXREZWZhdWx0RXhwYW5kZXJXaWR0aCgpOiBudW1iZXIge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuZGlzcGxheURlbnNpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgRGlzcGxheURlbnNpdHkuY29zeTpcbiAgICAgICAgICAgICAgICByZXR1cm4gNTc7XG4gICAgICAgICAgICBjYXNlIERpc3BsYXlEZW5zaXR5LmNvbXBhY3Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDQ5O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gNzI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGlzUm93SGlnaGxpZ2h0ZWQocm93RGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaWdobGlnaHRlZFJvd0lEID09PSByb3dEYXRhLnJvd0lEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNIaWVyYXJjaGljYWxSZWNvcmQocmVjb3JkOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRMYXlvdXRMaXN0Lmxlbmd0aCAhPT0gMCAmJiByZWNvcmRbdGhpcy5jaGlsZExheW91dExpc3QuZmlyc3Qua2V5XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGlzQ2hpbGRHcmlkUmVjb3JkKHJlY29yZDogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIC8vIENhbiBiZSBudWxsIHdoZW4gdGhlcmUgaXMgZGVmaW5lZCBsYXlvdXQgYnV0IG5vIGNoaWxkIGRhdGEgd2FzIGZvdW5kXG4gICAgICAgIHJldHVybiByZWNvcmQuY2hpbGRHcmlkc0RhdGEgIT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHRyYWNrQ2hhbmdlcyhpbmRleCwgcmVjKSB7XG4gICAgICAgIGlmIChyZWMuY2hpbGRHcmlkc0RhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gaWYgaXMgY2hpbGQgcmVjXG4gICAgICAgICAgICByZXR1cm4gcmVjLnJvd0lEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDb250ZXh0KHJvd0RhdGEpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy5pc0NoaWxkR3JpZFJlY29yZChyb3dEYXRhKSkge1xuICAgICAgICAgICAgY29uc3QgY2FjaGVkRGF0YSA9IHRoaXMuY2hpbGRHcmlkVGVtcGxhdGVzLmdldChyb3dEYXRhLnJvd0lEKTtcbiAgICAgICAgICAgIGlmIChjYWNoZWREYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlldyA9IGNhY2hlZERhdGEudmlldztcbiAgICAgICAgICAgICAgICBjb25zdCB0bWxwT3V0bGV0ID0gY2FjaGVkRGF0YS5vd25lcjtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAkaW1wbGljaXQ6IHJvd0RhdGEsXG4gICAgICAgICAgICAgICAgICAgIG1vdmVWaWV3OiB2aWV3LFxuICAgICAgICAgICAgICAgICAgICBvd25lcjogdG1scE91dGxldCxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2YuaW5kZXhPZihyb3dEYXRhKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvd0lEID0gdGhpcy5wcmltYXJ5S2V5ID8gcm93RGF0YS5yb3dJRCA6IHRoaXMuZGF0YS5pbmRleE9mKHJvd0RhdGEucm93SUQpO1xuICAgICAgICAgICAgICAgIC8vIGNoaWxkIHJvd3MgY29udGFpbiB1bmlxdWUgZ3JpZHMsIGhlbmNlIHNob3VsZCBoYXZlIHVuaXF1ZSB0ZW1wbGF0ZXNcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAkaW1wbGljaXQ6IHJvd0RhdGEsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlSUQ6ICdjaGlsZFJvdy0nICsgcm93SUQsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLmluZGV4T2Yocm93RGF0YSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAkaW1wbGljaXQ6IHJvd0RhdGEsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVJRDogJ2RhdGFSb3cnLFxuICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLmluZGV4T2Yocm93RGF0YSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBwdWJsaWMgZ2V0IHJvb3RHcmlkKCkge1xuICAgICAgICBsZXQgY3VyckdyaWQgPSB0aGlzO1xuICAgICAgICB3aGlsZSAoY3VyckdyaWQucGFyZW50KSB7XG4gICAgICAgICAgICBjdXJyR3JpZCA9IGN1cnJHcmlkLnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VyckdyaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICovXG4gICAgcHJvdGVjdGVkIGluaXRDb2x1bW5zKGNvbGxlY3Rpb246IFF1ZXJ5TGlzdDxJZ3hDb2x1bW5Db21wb25lbnQ+LCBjYjogRnVuY3Rpb24gPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0NvbHVtbkxheW91dHMpIHtcbiAgICAgICAgICAgIC8vIGludmFsaWQgY29uZmlndXJhdGlvbiAtIGhpZXJhcmNoaWNhbCBncmlkIHNob3VsZCBub3QgYWxsb3cgY29sdW1uIGxheW91dHNcbiAgICAgICAgICAgIC8vIHJlbW92ZSBjb2x1bW4gbGF5b3V0c1xuICAgICAgICAgICAgY29uc3Qgbm9uQ29sdW1uTGF5b3V0Q29sdW1ucyA9IHRoaXMuY29sdW1uTGlzdC5maWx0ZXIoKGNvbCkgPT4gIWNvbC5jb2x1bW5MYXlvdXQgJiYgIWNvbC5jb2x1bW5MYXlvdXRDaGlsZCk7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbkxpc3QucmVzZXQobm9uQ29sdW1uTGF5b3V0Q29sdW1ucyk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuaW5pdENvbHVtbnMoY29sbGVjdGlvbiwgY2IpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBHZXRzIHRoZSB2aXNpYmxlIGNvbnRlbnQgaGVpZ2h0IHRoYXQgaW5jbHVkZXMgaGVhZGVyICsgdGJvZHkgKyBmb290ZXIuXG4gICAgICogRm9yIGhpZXJhcmNoaWNhbCBjaGlsZCBncmlkIGl0IG1heSBiZSBzY3JvbGxlZCBhbmQgbm90IGZ1bGx5IHZpc2libGUuXG4gICAgICovXG4gICAgcHVibGljIGdldFZpc2libGVDb250ZW50SGVpZ2h0KCkge1xuICAgICAgICBsZXQgaGVpZ2h0ID0gc3VwZXIuZ2V0VmlzaWJsZUNvbnRlbnRIZWlnaHQoKTtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICBjb25zdCByb290SGVpZ2h0ID0gdGhpcy5yb290R3JpZC5nZXRWaXNpYmxlQ29udGVudEhlaWdodCgpO1xuICAgICAgICAgICAgY29uc3QgdG9wRGlmZiA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB0aGlzLnJvb3RHcmlkLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICAgICAgaGVpZ2h0ID0gcm9vdEhlaWdodCAtIHRvcERpZmYgPiBoZWlnaHQgPyBoZWlnaHQgOiByb290SGVpZ2h0IC0gdG9wRGlmZjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIHB1YmxpYyBjb2xsYXBzZUFsbFJvd3MoKSB7XG4gICAgICAgIHRoaXMuaGllcmFyY2hpY2FsU3RhdGUgPSBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGlzRXhwYW5kZWQocmVjb3JkOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGluU3RhdGU7XG4gICAgICAgIGlmIChyZWNvcmQuY2hpbGRHcmlkc0RhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaW5TdGF0ZSA9ICEhdGhpcy5oaWVyYXJjaGljYWxTdGF0ZS5maW5kKHYgPT4gdi5yb3dJRCA9PT0gcmVjb3JkLnJvd0lEKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluU3RhdGUgPSAhIXRoaXMuaGllcmFyY2hpY2FsU3RhdGUuZmluZCh2ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcmltYXJ5S2V5ID8gdi5yb3dJRCA9PT0gcmVjb3JkW3RoaXMucHJpbWFyeUtleV0gOiB2LnJvd0lEID09PSByZWNvcmQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5TdGF0ZSAmJiB0aGlzLmNoaWxkTGF5b3V0TGlzdC5sZW5ndGggIT09IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyB2aWV3Q3JlYXRlZEhhbmRsZXIoYXJncykge1xuICAgICAgICBpZiAodGhpcy5pc0NoaWxkR3JpZFJlY29yZChhcmdzLmNvbnRleHQuJGltcGxpY2l0KSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gYXJncy5jb250ZXh0LiRpbXBsaWNpdC5yb3dJRDtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRHcmlkVGVtcGxhdGVzLnNldChrZXksIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyB2aWV3TW92ZWRIYW5kbGVyKGFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDaGlsZEdyaWRSZWNvcmQoYXJncy5jb250ZXh0LiRpbXBsaWNpdCkpIHtcbiAgICAgICAgICAgIC8vIHZpZXcgd2FzIG1vdmVkLCB1cGRhdGUgb3duZXIgaW4gY2FjaGVcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGFyZ3MuY29udGV4dC4kaW1wbGljaXQucm93SUQ7XG4gICAgICAgICAgICBjb25zdCBjYWNoZWREYXRhID0gdGhpcy5jaGlsZEdyaWRUZW1wbGF0ZXMuZ2V0KGtleSk7XG4gICAgICAgICAgICBjYWNoZWREYXRhLm93bmVyID0gYXJncy5vd25lcjtcblxuICAgICAgICAgICAgdGhpcy5jaGlsZExheW91dExpc3QuZm9yRWFjaCgobGF5b3V0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVsYXRlZEdyaWQgPSB0aGlzLmhncmlkQVBJLmdldENoaWxkR3JpZEJ5SUQobGF5b3V0LmtleSwgYXJncy5jb250ZXh0LiRpbXBsaWNpdC5yb3dJRCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlbGF0ZWRHcmlkICYmIHJlbGF0ZWRHcmlkLnVwZGF0ZU9uUmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIERldGVjdCBjaGFuZ2VzIGlmIGBleHBhbmRDaGlsZHJlbmAgaGFzIGNoYW5nZWQgd2hlbiB0aGUgZ3JpZCB3YXNuJ3QgdmlzaWJsZS4gVGhpcyBpcyBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAgICAgICAgICAgICAgICAgICAgcmVsYXRlZEdyaWQucmVmbG93KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlbGF0ZWRHcmlkLnVwZGF0ZU9uUmVuZGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoaWxkR3JpZHMgPSB0aGlzLmdldENoaWxkR3JpZHModHJ1ZSk7XG4gICAgICAgICAgICBjaGlsZEdyaWRzLmZvckVhY2goKGdyaWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZ3JpZC5pc1BlcmNlbnRXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICBncmlkLnJlZmxvdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBncmlkLnVwZGF0ZVNjcm9sbFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlU2Nyb2xsUG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnN0IHZTY3IgPSB0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmdldFZlcnRpY2FsU2Nyb2xsKCk7XG4gICAgICAgIGNvbnN0IGhTY3IgPSB0aGlzLnBhcmVudFZpcnREaXIuZ2V0SG9yaXpvbnRhbFNjcm9sbCgpO1xuICAgICAgICBpZiAodlNjcikge1xuICAgICAgICAgICAgdlNjci5zY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFRvcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaFNjcikge1xuICAgICAgICAgICAgaFNjci5zY3JvbGxMZWZ0ID0gdGhpcy5zY3JvbGxMZWZ0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRQb3NzaWJsZUNvbHVtbldpZHRoKCkge1xuICAgICAgICBsZXQgY29tcHV0ZWRXaWR0aCA9IHRoaXMuY2FsY1dpZHRoIHx8IHBhcnNlSW50KFxuICAgICAgICAgICAgdGhpcy5kb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHRoaXMubmF0aXZlRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKSwgMTApO1xuICAgICAgICBjb21wdXRlZFdpZHRoIC09IHRoaXMuaGVhZGVySGllcmFyY2h5RXhwYW5kZXIubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldFBvc3NpYmxlQ29sdW1uV2lkdGgoY29tcHV0ZWRXaWR0aCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldENoaWxkR3JpZHMoaW5EZXBoPzogYm9vbGVhbikge1xuICAgICAgICByZXR1cm4gdGhpcy5oZ3JpZEFQSS5nZXRDaGlsZEdyaWRzKGluRGVwaCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdlbmVyYXRlRGF0YUZpZWxkcyhkYXRhOiBhbnlbXSk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdlbmVyYXRlRGF0YUZpZWxkcyhkYXRhKS5maWx0ZXIoKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYXlvdXRzTGlzdCA9IHRoaXMucGFyZW50SXNsYW5kID8gdGhpcy5wYXJlbnRJc2xhbmQuY2hpbGRyZW4gOiB0aGlzLmNoaWxkTGF5b3V0TGlzdDtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBsYXlvdXRzTGlzdC5tYXAoKGl0ZW0pID0+IGl0ZW0ua2V5KTtcbiAgICAgICAgICAgIHJldHVybiBrZXlzLmluZGV4T2YoZmllbGQpID09PSAtMTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoZ192ZXJ0aWNhbFNjcm9sbEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSBldmVudC50YXJnZXQuc2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNvbnRhaW5lclNjcm9sbCgpIHtcbiAgICAgICAgdGhpcy5oaWRlT3ZlcmxheXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhnX2hvcml6b250YWxTY3JvbGxIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsTGVmdCA9IGV2ZW50LnRhcmdldC5zY3JvbGxMZWZ0O1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUGFyZW50U2l6ZXMoKSB7XG4gICAgICAgIGxldCBjdXJyR3JpZCA9IHRoaXMucGFyZW50O1xuICAgICAgICB3aGlsZSAoY3VyckdyaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGhhZFNjcm9sbGJhciA9IGN1cnJHcmlkLmhhc1ZlcnRpY2FsU3JvbGwoKTtcbiAgICAgICAgICAgIGNvbnN0IHZpcnQgPSBjdXJyR3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lcjtcbiAgICAgICAgICAgIHZpcnQucmVjYWxjVXBkYXRlU2l6ZXMoKTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHBhcnNlSW50KHZpcnQuZGMuaW5zdGFuY2UuX3ZpZXdDb250YWluZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCwgMTApO1xuICAgICAgICAgICAgY29uc3Qgc2NyID0gdmlydC5nZXRWZXJ0aWNhbFNjcm9sbCgpO1xuICAgICAgICAgICAgc2NyLnNjcm9sbFRvcCA9IHZpcnQuZ2V0U2Nyb2xsRm9ySW5kZXgodmlydC5zdGF0ZS5zdGFydEluZGV4KSAtIG9mZnNldDtcblxuICAgICAgICAgICAgaWYgKGhhZFNjcm9sbGJhciAhPT0gY3VyckdyaWQuaGFzVmVydGljYWxTcm9sbCgpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYWZ0ZXIgcmVjYWxjdWxhdGlvbnMgdGhlIGdyaWQgc2hvdWxkIHNob3cgdmVydGljYWwgc2Nyb2xsYmFyIGl0IHNob3VsZCBhbHNvIHJlZmxvdy5cbiAgICAgICAgICAgICAgICBjdXJyR3JpZC5yZWZsb3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VyckdyaWQgPSBjdXJyR3JpZC5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=