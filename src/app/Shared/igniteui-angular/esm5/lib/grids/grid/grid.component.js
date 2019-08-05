/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ContentChild, ViewChildren, QueryList, ViewChild, ElementRef, TemplateRef, NgZone, ChangeDetectorRef, ComponentFactoryResolver, IterableDiffers, ViewContainerRef, Inject, HostBinding, forwardRef, Optional } from '@angular/core';
import { GridBaseAPIService } from '../api.service';
import { IgxGridBaseComponent, IgxGridTransaction, FilterMode } from '../grid-base.component';
import { IgxGridNavigationService } from '../grid-navigation.service';
import { IgxGridAPIService } from './grid-api.service';
import { cloneArray } from '../../core/utils';
import { IgxGroupByRowTemplateDirective } from './grid.directives';
import { IgxGridGroupByRowComponent } from './groupby-row.component';
import { DisplayDensityToken } from '../../core/displayDensity';
import { IgxSelectionAPIService } from '../../core/selection';
import { DOCUMENT } from '@angular/common';
import { takeUntil } from 'rxjs/operators';
import { IgxFilteringService } from '../filtering/grid-filtering.service';
import { IgxColumnResizingService } from '../grid-column-resizing.service';
import { IgxGridSummaryService } from '../summaries/grid-summary.service';
import { IgxGridSelectionService, IgxGridCRUDService } from '../../core/grid-selection';
import { IgxOverlayService } from '../../services/index';
import { IgxForOfSyncService } from '../../directives/for-of/for_of.sync.service';
import { IgxDragIndicatorIconDirective } from '../row-drag.directive';
import { IgxGridMRLNavigationService } from '../grid-mrl-navigation.service';
/** @type {?} */
var NEXT_ID = 0;
/**
 * @record
 */
export function IGridFocusChangeEventArgs() { }
if (false) {
    /** @type {?} */
    IGridFocusChangeEventArgs.prototype.groupRow;
}
/**
 * @record
 */
export function IGroupingDoneEventArgs() { }
if (false) {
    /** @type {?} */
    IGroupingDoneEventArgs.prototype.expressions;
    /** @type {?} */
    IGroupingDoneEventArgs.prototype.groupedColumns;
    /** @type {?} */
    IGroupingDoneEventArgs.prototype.ungroupedColumns;
}
/**
 * **Ignite UI for Angular Grid** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid.html)
 *
 * The Ignite UI Grid is used for presenting and manipulating tabular data in the simplest way possible.  Once data
 * has been bound, it can be manipulated through filtering, sorting & editing operations.
 *
 * Example:
 * ```html
 * <igx-grid [data]="employeeData" autoGenerate="false">
 *   <igx-column field="first" header="First Name"></igx-column>
 *   <igx-column field="last" header="Last Name"></igx-column>
 *   <igx-column field="role" header="Role"></igx-column>
 * </igx-grid>
 * ```
 */
var IgxGridComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxGridComponent, _super);
    function IgxGridComponent(selectionService, crudService, colResizingService, gridAPI, selection, _transactions, elementRef, zone, document, cdr, resolver, differs, viewRef, navigation, filteringService, overlayService, summaryService, _displayDensityOptions) {
        var _this = _super.call(this, selectionService, crudService, gridAPI, selection, _transactions, elementRef, zone, document, cdr, resolver, differs, viewRef, navigation, filteringService, overlayService, summaryService, _displayDensityOptions) || this;
        _this.colResizingService = colResizingService;
        _this.document = document;
        _this.overlayService = overlayService;
        _this._displayDensityOptions = _displayDensityOptions;
        _this._id = "igx-grid-" + NEXT_ID++;
        /**
         * @hidden
         */
        _this._groupingExpressions = [];
        /**
         * @hidden
         */
        _this._groupingExpandState = [];
        _this._hideGroupedColumns = false;
        _this._dropAreaMessage = null;
        _this._filteredData = null;
        /**
         * An \@Input property that determines whether created groups are rendered expanded or collapsed.
         * The default rendered state is expanded.
         * ```html
         * <igx-grid #grid [data]="Data" [groupsExpanded]="false" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridComponent
         */
        _this.groupsExpanded = true;
        /**
         * A hierarchical representation of the group by records.
         * ```typescript
         * let groupRecords = this.grid.groupsRecords;
         * ```
         * \@memberof IgxGridComponent
         */
        _this.groupsRecords = [];
        /**
         * Emitted when a new `IgxColumnComponent` gets grouped/ungrouped, or multiple columns get
         * grouped/ungrouped at once by using the Group By API.
         * The `onGroupingDone` event would be raised only once if several columns get grouped at once by calling
         * the `groupBy()` or `clearGrouping()` API methods and passing an array as an argument.
         * The event arguments provide the `expressions`, `groupedColumns` and `ungroupedColumns` properties, which contain
         * the `ISortingExpression` and the `IgxColumnComponent` related to the grouping/ungrouping operation.
         * Please note that `groupedColumns` and `ungroupedColumns` show only the **newly** changed columns (affected by the **last**
         * grouping/ungrouping operation), not all columns which are currently grouped/ungrouped.
         * columns.
         * ```typescript
         * groupingDone(event: IGroupingDoneEventArgs){
         *     const expressions = event.expressions;
         *     //the newly grouped columns
         *     const groupedColumns = event.groupedColumns;
         *     //the newly ungrouped columns
         *     const ungroupedColumns = event.ungroupedColumns;
         * }
         * ```
         * ```html
         * <igx-grid #grid [data]="localData" (onGroupingDone)="groupingDone($event)" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridComponent
         */
        _this.onGroupingDone = new EventEmitter();
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
        _this._gridAPI = (/** @type {?} */ (gridAPI));
        return _this;
    }
    Object.defineProperty(IgxGridComponent.prototype, "id", {
        /**
         * An @Input property that sets the value of the `id` attribute. If not provided it will be automatically generated.
         * ```html
         * <igx-grid [id]="'igx-grid-1'" [data]="Data" [autoGenerate]="true"></igx-grid>
         * ```
         * @memberof IgxGridComponent
         */
        get: /**
         * An \@Input property that sets the value of the `id` attribute. If not provided it will be automatically generated.
         * ```html
         * <igx-grid [id]="'igx-grid-1'" [data]="Data" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridComponent
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
    Object.defineProperty(IgxGridComponent.prototype, "data", {
        /**
         * An @Input property that lets you fill the `IgxGridComponent` with an array of data.
         * ```html
         * <igx-grid [data]="Data" [autoGenerate]="true"></igx-grid>
         * ```
         * @memberof IgxGridComponent
        */
        get: /**
         * An \@Input property that lets you fill the `IgxGridComponent` with an array of data.
         * ```html
         * <igx-grid [data]="Data" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridComponent
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
    Object.defineProperty(IgxGridComponent.prototype, "filteredData", {
        /**
         * Returns an array of objects containing the filtered data in the `IgxGridComponent`.
         * ```typescript
         * let filteredData = this.grid.filteredData;
         * ```
         * @memberof IgxGridComponent
         */
        get: /**
         * Returns an array of objects containing the filtered data in the `IgxGridComponent`.
         * ```typescript
         * let filteredData = this.grid.filteredData;
         * ```
         * \@memberof IgxGridComponent
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
         * @memberof IgxGridComponent
         */
        set: /**
         * Sets an array of objects containing the filtered data in the `IgxGridComponent`.
         * ```typescript
         * this.grid.filteredData = [{
         *       ID: 1,
         *       Name: "A"
         * }];
         * ```
         * \@memberof IgxGridComponent
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
    Object.defineProperty(IgxGridComponent.prototype, "virtualizationState", {
        /**
         * Returns the state of the grid virtualization, including the start index and how many records are rendered.
         * ```typescript
         * const gridVirtState = this.grid1.virtualizationState;
         * ```
         * @memberof IgxGridComponent
         */
        get: /**
         * Returns the state of the grid virtualization, including the start index and how many records are rendered.
         * ```typescript
         * const gridVirtState = this.grid1.virtualizationState;
         * ```
         * \@memberof IgxGridComponent
         * @return {?}
         */
        function () {
            return this.verticalScrollContainer.state;
        },
        /**
         * @hidden
         */
        set: /**
         * @hidden
         * @param {?} state
         * @return {?}
         */
        function (state) {
            this.verticalScrollContainer.state = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridComponent.prototype, "totalItemCount", {
        /**
         * Returns the total number of records in the data source.
         * Works only with remote grid virtualization.
         * ```typescript
         * const itemCount = this.grid1.totalItemCount;
         * ```
         * @memberof IgxGridComponent
         */
        get: /**
         * Returns the total number of records in the data source.
         * Works only with remote grid virtualization.
         * ```typescript
         * const itemCount = this.grid1.totalItemCount;
         * ```
         * \@memberof IgxGridComponent
         * @return {?}
         */
        function () {
            return this.verticalScrollContainer.totalItemCount;
        },
        /**
         * Sets the total number of records in the data source.
         * This property is required for remote grid virtualization to function when it is bound to remote data.
         * ```typescript
         * this.grid1.totalItemCount = 55;
         * ```
         * @memberof IgxGridComponent
         */
        set: /**
         * Sets the total number of records in the data source.
         * This property is required for remote grid virtualization to function when it is bound to remote data.
         * ```typescript
         * this.grid1.totalItemCount = 55;
         * ```
         * \@memberof IgxGridComponent
         * @param {?} count
         * @return {?}
         */
        function (count) {
            this.verticalScrollContainer.totalItemCount = count;
            this.cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridComponent.prototype, "groupingExpressions", {
        /**
         * Returns the group by state of the `IgxGridComponent`.
         * ```typescript
         * let groupByState = this.grid.groupingExpressions;
         * ```
         * @memberof IgxGridComponent
         */
        get: /**
         * Returns the group by state of the `IgxGridComponent`.
         * ```typescript
         * let groupByState = this.grid.groupingExpressions;
         * ```
         * \@memberof IgxGridComponent
         * @return {?}
         */
        function () {
            return this._groupingExpressions;
        },
        /**
         * Sets the group by state of the `IgxGridComponent` and emits the `onGroupingDone`
         * event with the appropriate arguments.
         * ```typescript
         * this.grid.groupingExpressions = [{
         *     fieldName: "ID",
         *     dir: SortingDirection.Asc,
         *     ignoreCase: false
         * }];
         * ```
         * @memberof IgxGridComponent
         */
        set: /**
         * Sets the group by state of the `IgxGridComponent` and emits the `onGroupingDone`
         * event with the appropriate arguments.
         * ```typescript
         * this.grid.groupingExpressions = [{
         *     fieldName: "ID",
         *     dir: SortingDirection.Asc,
         *     ignoreCase: false
         * }];
         * ```
         * \@memberof IgxGridComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (value && value.length > 10) {
                throw Error('Maximum amount of grouped columns is 10.');
            }
            /** @type {?} */
            var oldExpressions = this.groupingExpressions;
            /** @type {?} */
            var newExpressions = value;
            this._groupingExpressions = cloneArray(value);
            this.chipsGoupingExpressions = cloneArray(value);
            if (this._gridAPI.grid) {
                /* grouping should work in conjunction with sorting
                and without overriding separate sorting expressions */
                this._applyGrouping();
                this._gridAPI.arrange_sorting_expressions();
                this.cdr.markForCheck();
            }
            else {
                // setter called before grid is registered in grid API service
                this.sortingExpressions.unshift.apply(this.sortingExpressions, this._groupingExpressions);
            }
            if (JSON.stringify(oldExpressions) !== JSON.stringify(newExpressions) && this.columnList) {
                /** @type {?} */
                var groupedCols_1 = [];
                /** @type {?} */
                var ungroupedCols_1 = [];
                /** @type {?} */
                var groupedColsArr = newExpressions.filter(function (obj) {
                    return !oldExpressions.some(function (obj2) {
                        return obj.fieldName === obj2.fieldName;
                    });
                });
                groupedColsArr.forEach(function (elem) {
                    groupedCols_1.push(_this.getColumnByName(elem.fieldName));
                }, this);
                /** @type {?} */
                var ungroupedColsArr = oldExpressions.filter(function (obj) {
                    return !newExpressions.some(function (obj2) {
                        return obj.fieldName === obj2.fieldName;
                    });
                });
                ungroupedColsArr.forEach(function (elem) {
                    ungroupedCols_1.push(_this.getColumnByName(elem.fieldName));
                }, this);
                this.cdr.detectChanges();
                /** @type {?} */
                var groupingDoneArgs = {
                    expressions: newExpressions,
                    groupedColumns: groupedCols_1,
                    ungroupedColumns: ungroupedCols_1
                };
                this.onGroupingDone.emit(groupingDoneArgs);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridComponent.prototype, "groupingExpansionState", {
        /**
         * Returns a list of expansion states for group rows.
         * Includes only states that differ from the default one (controlled through groupsExpanded and states that the user has changed.
         * Contains the expansion state (expanded: boolean) and the unique identifier for the group row (Array).
         * ```typescript
         * const groupExpState = this.grid.groupingExpansionState;
         * ```
         * @memberof IgxGridComponent
         */
        get: /**
         * Returns a list of expansion states for group rows.
         * Includes only states that differ from the default one (controlled through groupsExpanded and states that the user has changed.
         * Contains the expansion state (expanded: boolean) and the unique identifier for the group row (Array).
         * ```typescript
         * const groupExpState = this.grid.groupingExpansionState;
         * ```
         * \@memberof IgxGridComponent
         * @return {?}
         */
        function () {
            return this._groupingExpandState;
        },
        /**
         * Sets a list of expansion states for group rows.
         * ```typescript
         *      this.grid.groupingExpansionState = [{
         *      expanded: false,
         *      hierarchy: [{ fieldName: 'ID', value: 1 }]
         *   }];
         * // You can use DataUtil.getHierarchy(groupRow) to get the group `IgxGridRowComponent` hierarchy.
         * ```
         * @memberof IgxGridComponent
         */
        set: /**
         * Sets a list of expansion states for group rows.
         * ```typescript
         *      this.grid.groupingExpansionState = [{
         *      expanded: false,
         *      hierarchy: [{ fieldName: 'ID', value: 1 }]
         *   }];
         * // You can use DataUtil.getHierarchy(groupRow) to get the group `IgxGridRowComponent` hierarchy.
         * ```
         * \@memberof IgxGridComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._groupingExpandState = cloneArray(value);
            this.cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridComponent.prototype, "hideGroupedColumns", {
        /**
         * An @Input property that sets whether the grouped columns should be hidden as well.
         * The default value is "false"
         * ```html
         * <igx-grid #grid [data]="localData" [hideGroupedColumns]="true" [autoGenerate]="true"></igx-grid>
         * ```
         * @memberof IgxGridComponent
         */
        get: /**
         * An \@Input property that sets whether the grouped columns should be hidden as well.
         * The default value is "false"
         * ```html
         * <igx-grid #grid [data]="localData" [hideGroupedColumns]="true" [autoGenerate]="true"></igx-grid>
         * ```
         * \@memberof IgxGridComponent
         * @return {?}
         */
        function () {
            return this._hideGroupedColumns;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.groupingDiffer = this.differs.find(this.groupingExpressions).create();
            }
            else {
                this.groupingDiffer = null;
            }
            if (this.columnList && this.groupingExpressions) {
                this._setGroupColsVisibility(value);
            }
            this._hideGroupedColumns = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridComponent.prototype, "dropAreaMessage", {
        /**
         * An accessor that returns the message displayed inside the GroupBy drop area where columns can be dragged on.
        */
        get: /**
         * An accessor that returns the message displayed inside the GroupBy drop area where columns can be dragged on.
         * @return {?}
         */
        function () {
            return this._dropAreaMessage || this.resourceStrings.igx_grid_groupByArea_message;
        },
        /**
         * An @Input property that sets the message displayed inside the GroupBy drop area where columns can be dragged on.
         * Note: The grid needs to have at least one groupable column in order the GroupBy area to be displayed.
         * ```html
         * <igx-grid dropAreaMessage="Drop here to group!">
         *      <igx-column [groupable]="true" field="ID"></igx-column>
         * </igx-grid>
         * ```
         * @memberof IgxGridComponent
         */
        set: /**
         * An \@Input property that sets the message displayed inside the GroupBy drop area where columns can be dragged on.
         * Note: The grid needs to have at least one groupable column in order the GroupBy area to be displayed.
         * ```html
         * <igx-grid dropAreaMessage="Drop here to group!">
         *      <igx-column [groupable]="true" field="ID"></igx-column>
         * </igx-grid>
         * ```
         * \@memberof IgxGridComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dropAreaMessage = value;
            this.cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridComponent.prototype, "groupsRowList", {
        /**
         * A list of all group rows.
         * ```typescript
         * const groupList = this.grid.groupsRowList;
         * ```
         * @memberof IgxGridComponent
         */
        get: /**
         * A list of all group rows.
         * ```typescript
         * const groupList = this.grid.groupsRowList;
         * ```
         * \@memberof IgxGridComponent
         * @return {?}
         */
        function () {
            /** @type {?} */
            var res = new QueryList();
            if (!this._groupsRowList) {
                return res;
            }
            /** @type {?} */
            var rList = this._groupsRowList.filter(function (item) {
                return item.element.nativeElement.parentElement !== null;
            });
            res.reset(rList);
            return res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridComponent.prototype, "groupAreaHostClass", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.getComponentDensityClass('igx-drop-area');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridComponent.prototype, "groupRowTemplate", {
        /**
         * Returns the template reference of the `IgxGridComponent`'s group row.
         * ```
         * const groupRowTemplate = this.grid.groupRowTemplate;
         * ```
         * @memberof IgxGridComponent
         */
        get: /**
         * Returns the template reference of the `IgxGridComponent`'s group row.
         * ```
         * const groupRowTemplate = this.grid.groupRowTemplate;
         * ```
         * \@memberof IgxGridComponent
         * @return {?}
         */
        function () {
            return this._groupRowTemplate;
        },
        /**
         * Sets the template reference of the `IgxGridComponent`'s group `IgxGridRowComponent`.
         * ```typescript
         * this.grid.groupRowTemplate = myRowTemplate.
         * ```
         * @memberof IgxGridComponent
         */
        set: /**
         * Sets the template reference of the `IgxGridComponent`'s group `IgxGridRowComponent`.
         * ```typescript
         * this.grid.groupRowTemplate = myRowTemplate.
         * ```
         * \@memberof IgxGridComponent
         * @param {?} template
         * @return {?}
         */
        function (template) {
            this._groupRowTemplate = template;
            this.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridComponent.prototype, "groupAreaTemplate", {
        /**
         * Returns the template reference of the `IgxGridComponent`'s group area.
         * ```typescript
         * const groupAreaTemplate = this.grid.groupAreaTemplate;
         * ```
         * @memberof IgxGridComponent
         */
        get: /**
         * Returns the template reference of the `IgxGridComponent`'s group area.
         * ```typescript
         * const groupAreaTemplate = this.grid.groupAreaTemplate;
         * ```
         * \@memberof IgxGridComponent
         * @return {?}
         */
        function () {
            return this._groupAreaTemplate;
        },
        /**
         * Sets the template reference of the `IgxGridComponent`'s group area.
         * ```typescript
         * this.grid.groupAreaTemplate = myAreaTemplate.
         * ```
         * @memberof IgxGridComponent
         */
        set: /**
         * Sets the template reference of the `IgxGridComponent`'s group area.
         * ```typescript
         * this.grid.groupAreaTemplate = myAreaTemplate.
         * ```
         * \@memberof IgxGridComponent
         * @param {?} template
         * @return {?}
         */
        function (template) {
            this._groupAreaTemplate = template;
            this.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Groups by a new `IgxColumnComponent` based on the provided expression, or modifies an existing one.
     * Also allows for multiple columns to be grouped at once if an array of `ISortingExpression` is passed.
     * The onGroupingDone event would get raised only **once** if this method gets called multiple times with the same arguments.
     * ```typescript
     * this.grid.groupBy({ fieldName: name, dir: SortingDirection.Asc, ignoreCase: false });
     * this.grid.groupBy([
            { fieldName: name1, dir: SortingDirection.Asc, ignoreCase: false },
            { fieldName: name2, dir: SortingDirection.Desc, ignoreCase: true },
            { fieldName: name3, dir: SortingDirection.Desc, ignoreCase: false }
        ]);
     * ```
     * @memberof IgxGridComponent
     */
    /**
     * Groups by a new `IgxColumnComponent` based on the provided expression, or modifies an existing one.
     * Also allows for multiple columns to be grouped at once if an array of `ISortingExpression` is passed.
     * The onGroupingDone event would get raised only **once** if this method gets called multiple times with the same arguments.
     * ```typescript
     * this.grid.groupBy({ fieldName: name, dir: SortingDirection.Asc, ignoreCase: false });
     * this.grid.groupBy([
     * { fieldName: name1, dir: SortingDirection.Asc, ignoreCase: false },
     * { fieldName: name2, dir: SortingDirection.Desc, ignoreCase: true },
     * { fieldName: name3, dir: SortingDirection.Desc, ignoreCase: false }
     * ]);
     * ```
     * \@memberof IgxGridComponent
     * @param {?} expression
     * @return {?}
     */
    IgxGridComponent.prototype.groupBy = /**
     * Groups by a new `IgxColumnComponent` based on the provided expression, or modifies an existing one.
     * Also allows for multiple columns to be grouped at once if an array of `ISortingExpression` is passed.
     * The onGroupingDone event would get raised only **once** if this method gets called multiple times with the same arguments.
     * ```typescript
     * this.grid.groupBy({ fieldName: name, dir: SortingDirection.Asc, ignoreCase: false });
     * this.grid.groupBy([
     * { fieldName: name1, dir: SortingDirection.Asc, ignoreCase: false },
     * { fieldName: name2, dir: SortingDirection.Desc, ignoreCase: true },
     * { fieldName: name3, dir: SortingDirection.Desc, ignoreCase: false }
     * ]);
     * ```
     * \@memberof IgxGridComponent
     * @param {?} expression
     * @return {?}
     */
    function (expression) {
        this.endEdit(true);
        this._gridAPI.submit_value();
        if (expression instanceof Array) {
            this._gridAPI.groupBy_multiple(expression);
        }
        else {
            this._gridAPI.groupBy(expression);
        }
        this.cdr.detectChanges();
        this.calculateGridSizes();
    };
    /**
     * Clears all grouping in the grid, if no parameter is passed.
     * If a parameter is provided, clears grouping for a particular column or an array of columns.
     * ```typescript
     * this.grid.clearGrouping(); //clears all grouping
     * this.grid.clearGrouping("ID"); //ungroups a single column
     * this.grid.clearGrouping(["ID", "Column1", "Column2"]); //ungroups multiple columns
     * ```
     *
     */
    /**
     * Clears all grouping in the grid, if no parameter is passed.
     * If a parameter is provided, clears grouping for a particular column or an array of columns.
     * ```typescript
     * this.grid.clearGrouping(); //clears all grouping
     * this.grid.clearGrouping("ID"); //ungroups a single column
     * this.grid.clearGrouping(["ID", "Column1", "Column2"]); //ungroups multiple columns
     * ```
     *
     * @param {?=} name
     * @return {?}
     */
    IgxGridComponent.prototype.clearGrouping = /**
     * Clears all grouping in the grid, if no parameter is passed.
     * If a parameter is provided, clears grouping for a particular column or an array of columns.
     * ```typescript
     * this.grid.clearGrouping(); //clears all grouping
     * this.grid.clearGrouping("ID"); //ungroups a single column
     * this.grid.clearGrouping(["ID", "Column1", "Column2"]); //ungroups multiple columns
     * ```
     *
     * @param {?=} name
     * @return {?}
     */
    function (name) {
        this._gridAPI.clear_groupby(name);
        this.calculateGridSizes();
    };
    /**
     * Returns if a group is expanded or not.
     * ```typescript
     * public groupRow: IGroupByRecord;
     * const expandedGroup = this.grid.isExpandedGroup(this.groupRow);
     * ```
     * @memberof IgxGridComponent
     */
    /**
     * Returns if a group is expanded or not.
     * ```typescript
     * public groupRow: IGroupByRecord;
     * const expandedGroup = this.grid.isExpandedGroup(this.groupRow);
     * ```
     * \@memberof IgxGridComponent
     * @param {?} group
     * @return {?}
     */
    IgxGridComponent.prototype.isExpandedGroup = /**
     * Returns if a group is expanded or not.
     * ```typescript
     * public groupRow: IGroupByRecord;
     * const expandedGroup = this.grid.isExpandedGroup(this.groupRow);
     * ```
     * \@memberof IgxGridComponent
     * @param {?} group
     * @return {?}
     */
    function (group) {
        /** @type {?} */
        var state = this._getStateForGroupRow(group);
        return state ? state.expanded : this.groupsExpanded;
    };
    /**
     * Toggles the expansion state of a group.
     * ```typescript
     * public groupRow: IGroupByRecord;
     * const toggleExpGroup = this.grid.toggleGroup(this.groupRow);
     * ```
     * @memberof IgxGridComponent
     */
    /**
     * Toggles the expansion state of a group.
     * ```typescript
     * public groupRow: IGroupByRecord;
     * const toggleExpGroup = this.grid.toggleGroup(this.groupRow);
     * ```
     * \@memberof IgxGridComponent
     * @param {?} groupRow
     * @return {?}
     */
    IgxGridComponent.prototype.toggleGroup = /**
     * Toggles the expansion state of a group.
     * ```typescript
     * public groupRow: IGroupByRecord;
     * const toggleExpGroup = this.grid.toggleGroup(this.groupRow);
     * ```
     * \@memberof IgxGridComponent
     * @param {?} groupRow
     * @return {?}
     */
    function (groupRow) {
        this._toggleGroup(groupRow);
    };
    /**
     * Expands the specified group and all of its parent groups.
     * ```typescript
     * public groupRow: IGroupByRecord;
     * this.grid.fullyExpandGroup(this.groupRow);
     * ```
     * @memberof IgxGridComponent
     */
    /**
     * Expands the specified group and all of its parent groups.
     * ```typescript
     * public groupRow: IGroupByRecord;
     * this.grid.fullyExpandGroup(this.groupRow);
     * ```
     * \@memberof IgxGridComponent
     * @param {?} groupRow
     * @return {?}
     */
    IgxGridComponent.prototype.fullyExpandGroup = /**
     * Expands the specified group and all of its parent groups.
     * ```typescript
     * public groupRow: IGroupByRecord;
     * this.grid.fullyExpandGroup(this.groupRow);
     * ```
     * \@memberof IgxGridComponent
     * @param {?} groupRow
     * @return {?}
     */
    function (groupRow) {
        this._fullyExpandGroup(groupRow);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} record
     * @return {?}
     */
    IgxGridComponent.prototype.isGroupByRecord = /**
     * @hidden
     * @param {?} record
     * @return {?}
     */
    function (record) {
        // return record.records instance of GroupedRecords fails under Webpack
        return record.records && record.records.length;
    };
    /**
     * Toggles the expansion state of all group rows recursively.
     * ```typescript
     * this.grid.toggleAllGroupRows;
     * ```
     * @memberof IgxGridComponent
     */
    /**
     * Toggles the expansion state of all group rows recursively.
     * ```typescript
     * this.grid.toggleAllGroupRows;
     * ```
     * \@memberof IgxGridComponent
     * @return {?}
     */
    IgxGridComponent.prototype.toggleAllGroupRows = /**
     * Toggles the expansion state of all group rows recursively.
     * ```typescript
     * this.grid.toggleAllGroupRows;
     * ```
     * \@memberof IgxGridComponent
     * @return {?}
     */
    function () {
        this.groupingExpansionState = [];
        this.groupsExpanded = !this.groupsExpanded;
        this.cdr.detectChanges();
    };
    Object.defineProperty(IgxGridComponent.prototype, "hasGroupableColumns", {
        /**
         * Returns if the `IgxGridComponent` has groupable columns.
         * ```typescript
         * const groupableGrid = this.grid.hasGroupableColumns;
         * ```
         * @memberof IgxGridComponent
         */
        get: /**
         * Returns if the `IgxGridComponent` has groupable columns.
         * ```typescript
         * const groupableGrid = this.grid.hasGroupableColumns;
         * ```
         * \@memberof IgxGridComponent
         * @return {?}
         */
        function () {
            return this.columnList.some(function (col) { return col.groupable && !col.columnGroup; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    IgxGridComponent.prototype._setGroupColsVisibility = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (this.columnList && !this.hasColumnLayouts) {
            this.groupingExpressions.forEach(function (expr) {
                /** @type {?} */
                var col = _this.getColumnByName(expr.fieldName);
                col.hidden = value;
            });
        }
    };
    Object.defineProperty(IgxGridComponent.prototype, "dropAreaVisible", {
        /**
         * Returns if the grid's group by drop area is visible.
         * ```typescript
         * const dropVisible = this.grid.dropAreaVisible;
         * ```
         * @memberof IgxGridComponent
         */
        get: /**
         * Returns if the grid's group by drop area is visible.
         * ```typescript
         * const dropVisible = this.grid.dropAreaVisible;
         * ```
         * \@memberof IgxGridComponent
         * @return {?}
         */
        function () {
            return (this.draggedColumn && this.draggedColumn.groupable) ||
                !this.chipsGoupingExpressions.length;
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
     * @param {?} groupRow
     * @return {?}
     */
    IgxGridComponent.prototype._getStateForGroupRow = /**
     * @hidden
     * @protected
     * @param {?} groupRow
     * @return {?}
     */
    function (groupRow) {
        return this._gridAPI.groupBy_get_expanded_for_group(groupRow);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} groupRow
     * @return {?}
     */
    IgxGridComponent.prototype._toggleGroup = /**
     * @hidden
     * @protected
     * @param {?} groupRow
     * @return {?}
     */
    function (groupRow) {
        this._gridAPI.groupBy_toggle_group(groupRow);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} groupRow
     * @return {?}
     */
    IgxGridComponent.prototype._fullyExpandGroup = /**
     * @hidden
     * @protected
     * @param {?} groupRow
     * @return {?}
     */
    function (groupRow) {
        this._gridAPI.groupBy_fully_expand_group(groupRow);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    IgxGridComponent.prototype._applyGrouping = /**
     * @hidden
     * @protected
     * @return {?}
     */
    function () {
        this._gridAPI.sort_multiple(this._groupingExpressions);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} fieldName
     * @return {?}
     */
    IgxGridComponent.prototype.isColumnGrouped = /**
     * @hidden
     * @param {?} fieldName
     * @return {?}
     */
    function (fieldName) {
        return this.groupingExpressions.find(function (exp) { return exp.fieldName === fieldName; }) ? true : false;
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
    IgxGridComponent.prototype.getContext = /**
     * @hidden
     * @param {?} rowData
     * @param {?} rowIndex
     * @return {?}
     */
    function (rowData, rowIndex) {
        return {
            $implicit: rowData,
            index: rowIndex,
            templateID: this.isGroupByRecord(rowData) ? 'groupRow' : this.isSummaryRow(rowData) ? 'summaryRow' : 'dataRow'
        };
    };
    Object.defineProperty(IgxGridComponent.prototype, "template", {
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
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxGridComponent.prototype.onChipRemoved = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.clearGrouping(event.owner.id);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxGridComponent.prototype.chipsOrderChanged = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var newGrouping = [];
        var _loop_1 = function (i) {
            /** @type {?} */
            var expr = this_1.groupingExpressions.filter(function (item) {
                return item.fieldName === event.chipsArray[i].id;
            })[0];
            if (!this_1.getColumnByName(expr.fieldName).groupable) {
                return { value: void 0 };
            }
            newGrouping.push(expr);
        };
        var this_1 = this;
        for (var i = 0; i < event.chipsArray.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        this.groupingExpansionState = [];
        this.chipsGoupingExpressions = newGrouping;
        if (event.originalEvent instanceof KeyboardEvent) {
            // When reordered using keyboard navigation, we don't have `onMoveEnd` event.
            this.groupingExpressions = this.chipsGoupingExpressions;
        }
        this.markForCheck();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxGridComponent.prototype.chipsMovingEnded = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.groupingExpressions = this.chipsGoupingExpressions;
        this.markForCheck();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxGridComponent.prototype.onChipClicked = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var sortingExpr = this.sortingExpressions;
        /** @type {?} */
        var columnExpr = sortingExpr.find(function (expr) { return expr.fieldName === event.owner.id; });
        columnExpr.dir = 3 - columnExpr.dir;
        this.sort(columnExpr);
        this.markForCheck();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxGridComponent.prototype.onChipKeyDown = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.originalEvent.key === ' ' || event.originalEvent.key === 'Spacebar' || event.originalEvent.key === 'Enter') {
            /** @type {?} */
            var sortingExpr = this.sortingExpressions;
            /** @type {?} */
            var columnExpr = sortingExpr.find(function (expr) { return expr.fieldName === event.owner.id; });
            columnExpr.dir = 3 - columnExpr.dir;
            this.sort(columnExpr);
            this.markForCheck();
        }
    };
    Object.defineProperty(IgxGridComponent.prototype, "defaultTargetBodyHeight", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @protected
         * @return {?}
         */
        function () {
            /** @type {?} */
            var allItems = this.totalItemCount || this.dataLength;
            return this.renderedRowHeight * Math.min(this._defaultTargetRecordNumber, this.paging ? Math.min(allItems, this.perPage) : allItems);
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
     * @return {?}
     */
    IgxGridComponent.prototype.getGroupAreaHeight = /**
     * @hidden
     * @protected
     * @return {?}
     */
    function () {
        return this.groupArea ? this.groupArea.nativeElement.offsetHeight : 0;
    };
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
    IgxGridComponent.prototype.getFeatureColumnsWidth = /**
     * @hidden
     * Gets the combined width of the columns that are specific to the enabled grid features. They are fixed.
     * TODO: Remove for Angular 8. Calling parent class getter using super is not supported for now.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var width = _super.prototype.getFeatureColumnsWidth.call(this);
        if (this.groupingExpressions.length && this.headerGroupContainer) {
            width += this.headerGroupContainer.nativeElement.offsetWidth;
        }
        return width;
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
    IgxGridComponent.prototype.scrollTo = /**
     * @hidden
     * @protected
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    function (row, column) {
        if (this.groupingExpressions && this.groupingExpressions.length
            && typeof (row) !== 'number') {
            /** @type {?} */
            var rowIndex = this.groupingResult.indexOf(row);
            /** @type {?} */
            var groupByRecord = this.groupingMetadata[rowIndex];
            if (groupByRecord) {
                this._fullyExpandGroup(groupByRecord);
            }
        }
        _super.prototype.scrollTo.call(this, row, column, this.groupingFlatResult);
    };
    Object.defineProperty(IgxGridComponent.prototype, "dropAreaTemplateResolved", {
        /**
        * @hidden
        */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            if (this.dropAreaTemplate) {
                return this.dropAreaTemplate;
            }
            else {
                return this.defaultDropAreaTemplate;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} expression
     * @return {?}
     */
    IgxGridComponent.prototype.getGroupByChipTitle = /**
     * @hidden
     * @param {?} expression
     * @return {?}
     */
    function (expression) {
        return this.getColumnByName(expression.fieldName).header || expression.fieldName;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxGridComponent.prototype.ngAfterContentInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.allowFiltering && this.hasColumnLayouts) {
            this.filterMode = FilterMode.excelStyleFilter;
        }
        if (this.groupTemplate) {
            this._groupRowTemplate = this.groupTemplate.template;
        }
        _super.prototype.ngAfterContentInit.call(this);
        if (this.hideGroupedColumns && this.columnList && this.groupingExpressions) {
            this._setGroupColsVisibility(this.hideGroupedColumns);
        }
        this._setupNavigationService();
    };
    /**
     * @return {?}
     */
    IgxGridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.onGroupingDone.pipe(takeUntil(this.destroy$)).subscribe(function (args) {
            _this.endEdit(true);
            _this.summaryService.updateSummaryCache(args);
        });
    };
    /**
     * @return {?}
     */
    IgxGridComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngDoCheck.call(this);
        if (this.groupingDiffer && this.columnList && !this.hasColumnLayouts) {
            /** @type {?} */
            var changes = this.groupingDiffer.diff(this.groupingExpressions);
            if (changes && this.columnList) {
                changes.forEachAddedItem(function (rec) {
                    /** @type {?} */
                    var col = _this.getColumnByName(rec.item.fieldName);
                    col.hidden = true;
                });
                changes.forEachRemovedItem(function (rec) {
                    /** @type {?} */
                    var col = _this.getColumnByName(rec.item.fieldName);
                    col.hidden = false;
                });
            }
        }
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
    IgxGridComponent.prototype.getSelectedData = /**
     * \@inheritdoc
     * @param {?=} formatters
     * @param {?=} headers
     * @return {?}
     */
    function (formatters, headers) {
        if (formatters === void 0) { formatters = false; }
        if (headers === void 0) { headers = false; }
        if (this.groupingExpressions.length) {
            /** @type {?} */
            var source_1 = [];
            /** @type {?} */
            var process = function (record) {
                if (record.expression || record.summaries) {
                    source_1.push(null);
                    return;
                }
                source_1.push(record);
            };
            this.verticalScrollContainer.igxForOf.forEach(process);
            return this.extractDataFromSelection(source_1, formatters, headers);
        }
        else {
            return _super.prototype.getSelectedData.call(this, formatters, headers);
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxGridComponent.prototype._setupNavigationService = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.hasColumnLayouts) {
            this.navigation = new IgxGridMRLNavigationService();
            this.navigation.grid = this;
        }
    };
    IgxGridComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    providers: [IgxGridNavigationService, IgxGridSummaryService, IgxGridSelectionService, IgxGridCRUDService,
                        { provide: GridBaseAPIService, useClass: IgxGridAPIService },
                        { provide: IgxGridBaseComponent, useExisting: forwardRef(function () { return IgxGridComponent; }) },
                        IgxFilteringService, IgxColumnResizingService, IgxForOfSyncService
                    ],
                    selector: 'igx-grid',
                    template: "<igx-grid-toolbar [style.width.px]=\"outerWidth\" role=\"rowgroup\" *ngIf=\"showToolbar\" [gridID]=\"id\"\n    [displayDensity]=\"displayDensity\" #toolbar>\n</igx-grid-toolbar>\n\n<div [style.width.px]='outerWidth' class=\"igx-grid__grouparea\"\n    *ngIf=\"groupingExpressions.length > 0 || hasGroupableColumns\" #groupArea>\n    <igx-chips-area (onReorder)=\"chipsOrderChanged($event)\" (onMoveEnd)=\"chipsMovingEnded()\">\n        <ng-container *ngFor=\"let expr of chipsGoupingExpressions; let last = last;\">\n            <igx-chip [id]=\"expr.fieldName\" [attr.title]=\"getGroupByChipTitle(expr)\"\n                [removable]=\"getColumnByName(expr.fieldName).groupable\"\n                [draggable]=\"getColumnByName(expr.fieldName).groupable\" [displayDensity]=\"displayDensity\"\n                (onKeyDown)=\"onChipKeyDown($event)\" (onRemove)=\"onChipRemoved($event)\"\n                (onClick)=\"getColumnByName(expr.fieldName).groupable ? onChipClicked($event): null\"\n                [disabled]='!getColumnByName(expr.fieldName).groupable'>\n                <span>{{ getGroupByChipTitle(expr) }}</span>\n                <igx-icon igxSuffix>{{ expr.dir == 1 ? 'arrow_upward' : 'arrow_downward' }}</igx-icon>\n            </igx-chip>\n            <span class=\"igx-grid__grouparea-connector\">\n                <igx-icon [style.visibility]=\"(!last || dropAreaVisible) ? 'visible' : 'hidden'\">arrow_forward\n                </igx-icon>\n            </span>\n        </ng-container>\n        <div igxGroupAreaDrop [style.visibility]=\"dropAreaVisible ? 'visible' : 'hidden'\" [class]=\"groupAreaHostClass\"\n            [attr.gridId]='this.id'>\n            <ng-container *ngTemplateOutlet=\"dropAreaTemplateResolved\"></ng-container>\n        </div>\n    </igx-chips-area>\n</div>\n\n<div class=\"igx-grid__thead\">\n    <div class=\"igx-grid__thead-wrapper\" [class.igx-grid__tr--mrl]='hasColumnLayouts' role=\"rowgroup\"\n        [style.width.px]='calcWidth + 1' #theadRow>\n        <div class=\"igx-grid__tr\" role=\"row\" [style.width.px]='calcWidth + 1'>\n            <span *ngIf=\"hasMovableColumns && draggedColumn && pinnedColumns.length <= 0\"\n                [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\" id=\"left\"\n                class=\"igx-grid__scroll-on-drag-left\" [style.left.px]=\"featureColumnsWidth\"></span>\n            <span *ngIf=\"hasMovableColumns && draggedColumn && pinnedColumns.length > 0\"\n                [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\" id=\"left\"\n                class=\"igx-grid__scroll-on-drag-pinned\" [style.left.px]=\"pinnedWidth\"></span>\n            <ng-container *ngIf=\"groupingExpressions.length > 0\">\n                <div class=\"igx-grid__header-indentation igx-grid__row-indentation--level-{{groupingExpressions.length}}\"\n                    [ngClass]=\"{\n                    'igx-grid__header-indentation--no-border': rowSelectable || rowDraggable\n                }\" #headerGroupContainer>\n                    <igx-icon *ngIf=\"groupsExpanded\" role=\"button\" class=\"igx-grid__group-expand-btn\"\n                        (click)=\"toggleAllGroupRows()\" [ngClass]=\"{\n                        'igx-grid__group-expand-btn--push': filteringService.isFilterRowVisible\n                    }\">unfold_less</igx-icon>\n                    <igx-icon *ngIf=\"!groupsExpanded\" role=\"button\" class=\"igx-grid__group-expand-btn\"\n                        (click)=\"toggleAllGroupRows()\" [ngClass]=\"{\n                        'igx-grid__group-expand-btn--push': filteringService.isFilterRowVisible\n                    }\">unfold_more</igx-icon>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"rowDraggable\">\n                <div class=\"igx-grid__drag-indicator\" [ngClass]=\"{\n                    'igx-grid__drag-indicator--header': !rowSelectable\n                }\" #headerDragContainer>\n                    <div style=\"visibility: hidden;\">\n                        <ng-container\n                            *ngTemplateOutlet=\"this.dragIndicatorIconTemplate ? this.dragIndicatorIconTemplate : this.dragIndicatorIconBase\">\n                        </ng-container>\n                    </div>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"showRowCheckboxes\">\n                <div class=\"igx-grid__cbx-selection\" #headerCheckboxContainer [ngClass]=\"{\n                    'igx-grid__cbx-selection--push': filteringService.isFilterRowVisible\n                }\">\n                    <igx-checkbox [checked]=\"allRowsSelected\" (change)=\"onHeaderCheckboxClick($event, filteredData)\"\n                        disableRipple=\"true\" [aria-label]=\"headerCheckboxAriaLabel\" #headerCheckbox></igx-checkbox>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"pinnedColumns.length > 0\">\n                <ng-template ngFor let-col [ngForOf]=\"pinnedColumns | igxTopLevel\">\n                    <igx-grid-header-group [column]=\"col\" [gridID]=\"id\" [style.min-width.px]=\"getHeaderGroupWidth(col)\"\n                        [style.flex-basis.px]=\"getHeaderGroupWidth(col)\"></igx-grid-header-group>\n                </ng-template>\n            </ng-container>\n            <ng-template igxGridFor let-col [igxGridForOf]=\"unpinnedColumns | igxTopLevel\"\n                [igxForScrollOrientation]=\"'horizontal'\" [igxForScrollContainer]=\"parentVirtDir\"\n                [igxForContainerSize]='unpinnedWidth' [igxForTrackBy]='trackColumnChanges'\n                [igxForSizePropName]='\"calcPixelWidth\"' #headerContainer>\n                <igx-grid-header-group [column]=\"col\" [gridID]=\"id\" [style.min-width.px]=\"getHeaderGroupWidth(col)\"\n                    [style.flex-basis.px]=\"getHeaderGroupWidth(col)\"></igx-grid-header-group>\n            </ng-template>\n        </div>\n        <igx-grid-filtering-row #filteringRow [style.width.px]='calcWidth' *ngIf=\"filteringService.isFilterRowVisible\"\n            [column]=\"filteringService.filteredColumn\"></igx-grid-filtering-row>\n    </div>\n    <span *ngIf=\"hasMovableColumns && draggedColumn\" [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\"\n        id=\"right\" class=\"igx-grid__scroll-on-drag-right\"></span>\n    <div class=\"igx-grid__thead-thumb\" [hidden]='!hasVerticalSroll()' [style.width.px]=\"scrollWidth\"></div>\n</div>\n\n<div igxGridBody (keydown.control.c)=\"copyHandlerIE()\" (copy)=\"copyHandler($event)\" class=\"igx-grid__tbody\">\n    <div class=\"igx-grid__tbody-content\" role=\"rowgroup\" (onDragStop)=\"selectionService.dragMode = $event\"\n        (onDragScroll)=\"dragScroll($event)\" [igxGridDragSelect]=\"selectionService.dragMode\"\n        [style.height.px]='calcHeight' [style.width.px]='calcWidth + 1' #tbody (scroll)='scrollHandler($event)'\n        (wheel)=\"wheelHandler()\">\n        <span *ngIf=\"hasMovableColumns && draggedColumn && pinnedColumns.length <= 0\"\n            [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\" id=\"left\"\n            class=\"igx-grid__scroll-on-drag-left\"></span>\n        <span *ngIf=\"hasMovableColumns && draggedColumn && pinnedColumns.length > 0\"\n            [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\" id=\"left\"\n            class=\"igx-grid__scroll-on-drag-pinned\" [style.left.px]=\"pinnedWidth\"></span>\n        <ng-template igxGridFor let-rowData [igxGridForOf]=\"data\n        | gridTransaction:id:pipeTrigger\n        | gridFiltering:filteringExpressionsTree:id:pipeTrigger\n        | gridSort:sortingExpressions:id:pipeTrigger\n        | gridGroupBy:groupingExpressions:groupingExpansionState:groupsExpanded:id:groupsRecords:pipeTrigger\n        | gridPaging:page:perPage:id:pipeTrigger\n        | gridSummary:hasSummarizedColumns:summaryCalculationMode:summaryPosition:id:pipeTrigger:summaryPipeTrigger\"\n            let-rowIndex=\"index\" [igxForScrollOrientation]=\"'vertical'\" [igxForScrollContainer]='verticalScroll'\n            [igxForContainerSize]='calcHeight'\n            [igxForItemSize]=\"hasColumnLayouts ? rowHeight * multiRowLayoutRowSize + 1 : renderedRowHeight\"\n            #verticalScrollContainer (onChunkPreload)=\"dataLoading($event)\">\n            <ng-template #record_template>\n                <igx-grid-row [gridID]=\"id\" [index]=\"rowIndex\" [rowData]=\"rowData\" #row>\n                </igx-grid-row>\n            </ng-template>\n            <ng-template #group_template>\n                <igx-grid-groupby-row [gridID]=\"id\" [index]=\"rowIndex\" [groupRow]=\"rowData\" #row>\n                </igx-grid-groupby-row>\n            </ng-template>\n            <ng-template #summary_template>\n                <igx-grid-summary-row [gridID]=\"id\" [summaries]=\"rowData.summaries\" [index]=\"rowIndex\"\n                    class=\"igx-grid__summaries--body\" #summaryRow>\n                </igx-grid-summary-row>\n            </ng-template>\n            <ng-template\n                [igxTemplateOutlet]='isGroupByRecord(rowData) ? group_template : isSummaryRow(rowData) ? summary_template : record_template'\n                [igxTemplateOutletContext]='getContext(rowData, rowIndex)'\n                (onCachedViewLoaded)='cachedViewLoaded($event)'>\n            </ng-template>\n        </ng-template>\n        <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n        <div class=\"igx-grid__row-editing-outlet\" igxOverlayOutlet #igxRowEditingOverlayOutlet></div>\n    </div>\n    <span *ngIf=\"hasMovableColumns && draggedColumn\" [igxColumnMovingDrop]=\"parentVirtDir\" [attr.droppable]=\"true\"\n        id=\"right\" class=\"igx-grid__scroll-on-drag-right\"></span>\n    <div [hidden]='!hasVerticalSroll()' class=\"igx-grid__tbody-scrollbar\" [style.width.px]=\"scrollWidth\"\n        [style.height.px]='calcHeight'>\n        <ng-template igxGridFor [igxGridForOf]='[]' #verticalScrollHolder></ng-template>\n    </div>\n</div>\n\n\n<div class=\"igx-grid__tfoot\" role=\"rowgroup\" [style.height.px]='summariesHeight' #tfoot>\n    <igx-grid-summary-row [style.width.px]='calcWidth' [style.height.px]='summariesHeight'\n        *ngIf=\"hasSummarizedColumns && rootSummariesEnabled\" [gridID]=\"id\"\n        [summaries]=\"id | igxGridSummaryDataPipe:summaryService.retriggerRootPipe\" [index]=\"0\"\n        class=\"igx-grid__summaries\" #summaryRow>\n    </igx-grid-summary-row>\n    <div class=\"igx-grid__tfoot-thumb\" [hidden]='!hasVerticalSroll()' [style.height.px]='summariesHeight'\n        [style.width.px]=\"scrollWidth\"></div>\n</div>\n\n<div class=\"igx-grid__scroll\" [style.height]=\"'18px'\" #scr [hidden]=\"unpinnedWidth - totalWidth >= 0\">\n    <div class=\"igx-grid__scroll-start\" [style.width.px]='pinnedWidth' [hidden]=\"pinnedWidth === 0\"></div>\n    <div class=\"igx-grid__scroll-main\" [style.width.px]='unpinnedWidth'>\n        <ng-template igxGridFor [igxGridForOf]='[]' #scrollContainer>\n        </ng-template>\n    </div>\n</div>\n\n<div class=\"igx-grid__footer\" #footer>\n    <ng-content select=\"igx-grid-footer\"></ng-content>\n    <ng-container *ngIf=\"paging && totalRecords\">\n        <ng-container\n            *ngTemplateOutlet=\"paginationTemplate ? paginationTemplate : defaultPaginator; context: {$implicit: this}\">\n        </ng-container>\n    </ng-container>\n</div>\n\n<ng-template #defaultPaginator>\n    <igx-paginator [displayDensity]=\"displayDensity\" [(page)]=\"page\"\n        [totalRecords]=\"filteredData ? filteredData.length : totalRecords\" [(perPage)]=\"perPage\">\n    </igx-paginator>\n</ng-template>\n\n<ng-template #emptyFilteredGrid>\n    <span class=\"igx-grid__tbody-message\">{{emptyFilteredGridMessage}}</span>\n</ng-template>\n\n<ng-template #defaultEmptyGrid>\n    <span class=\"igx-grid__tbody-message\">{{emptyGridMessage}}</span>\n</ng-template>\n\n<ng-template #defaultLoadingGrid>\n    <div class=\"igx-grid__loading\">\n        <igx-circular-bar [indeterminate]=\"true\">\n        </igx-circular-bar>\n    </div>\n</ng-template>\n\n<ng-template #defaultDropArea>\n    <igx-icon fontSet=\"material\" class=\"igx-drop-area__icon\">group_work</igx-icon>\n    <span class=\"igx-drop-area__text\">{{dropAreaMessage}}</span>\n</ng-template>\n\n<div *ngIf=\"rowEditable\" igxToggle>\n    <div [className]=\"bannerClass\">\n        <ng-container\n            *ngTemplateOutlet=\"rowEditContainer; context: { rowChangesCount: rowChangesCount, endEdit: endEdit.bind(this) }\">\n        </ng-container>\n    </div>\n</div>\n\n<ng-template #defaultRowEditText>\n    You have {{ rowChangesCount }} changes in this row\n</ng-template>\n\n<ng-template #defaultRowEditActions>\n    <button igxButton igxRowEditTabStop (click)=\"endEdit(false, $event)\">Cancel</button>\n    <button igxButton igxRowEditTabStop (click)=\"endEdit(true, $event)\">Done</button>\n</ng-template>\n\n<ng-template #defaultRowEditTemplate>\n    <div class=\"igx-banner__message\">\n        <span class=\"igx-banner__text\">\n            <ng-container\n                *ngTemplateOutlet=\"rowEditText ? rowEditText : defaultRowEditText; context: { $implicit: rowChangesCount }\">\n            </ng-container>\n        </span>\n    </div>\n    <div class=\"igx-banner__actions\">\n        <div class=\"igx-banner__row\">\n            <ng-container\n                *ngTemplateOutlet=\"rowEditActions ? rowEditActions : defaultRowEditActions; context: { $implicit: endEdit.bind(this) }\">\n            </ng-container>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #dragIndicatorIconBase>\n    <igx-icon fontSet=\"material\">drag_indicator</igx-icon>\n</ng-template>\n\n<igx-grid-column-resizer *ngIf=\"colResizingService.showResizer\"></igx-grid-column-resizer>\n<div class=\"igx-grid__outlet\" #igxFilteringOverlayOutlet igxOverlayOutlet></div>\n"
                }] }
    ];
    /** @nocollapse */
    IgxGridComponent.ctorParameters = function () { return [
        { type: IgxGridSelectionService },
        { type: IgxGridCRUDService },
        { type: IgxColumnResizingService },
        { type: GridBaseAPIService },
        { type: IgxSelectionAPIService },
        { type: undefined, decorators: [{ type: Inject, args: [IgxGridTransaction,] }] },
        { type: ElementRef },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef },
        { type: ComponentFactoryResolver },
        { type: IterableDiffers },
        { type: ViewContainerRef },
        { type: IgxGridNavigationService },
        { type: IgxFilteringService },
        { type: IgxOverlayService, decorators: [{ type: Inject, args: [IgxOverlayService,] }] },
        { type: IgxGridSummaryService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
    ]; };
    IgxGridComponent.propDecorators = {
        id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
        data: [{ type: Input }],
        groupingExpressions: [{ type: Input }],
        groupingExpansionState: [{ type: Input }],
        groupsExpanded: [{ type: Input }],
        hideGroupedColumns: [{ type: Input }],
        dropAreaMessage: [{ type: Input }],
        dropAreaTemplate: [{ type: Input }],
        onGroupingDone: [{ type: Output }],
        groupTemplate: [{ type: ContentChild, args: [IgxGroupByRowTemplateDirective, { read: IgxGroupByRowTemplateDirective, static: true },] }],
        dragIndicatorIconTemplate: [{ type: ContentChild, args: [IgxDragIndicatorIconDirective, { read: TemplateRef, static: true },] }],
        _groupsRowList: [{ type: ViewChildren, args: [IgxGridGroupByRowComponent, { read: IgxGridGroupByRowComponent },] }],
        defaultDropAreaTemplate: [{ type: ViewChild, args: ['defaultDropArea', { read: TemplateRef, static: true },] }],
        groupArea: [{ type: ViewChild, args: ['groupArea', { static: false },] }]
    };
    return IgxGridComponent;
}(IgxGridBaseComponent));
export { IgxGridComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxGridComponent.prototype._id;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxGridComponent.prototype.groupingResult;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxGridComponent.prototype.groupingMetadata;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxGridComponent.prototype.groupingFlatResult;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridComponent.prototype._groupingExpressions;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridComponent.prototype._groupingExpandState;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridComponent.prototype._groupRowTemplate;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridComponent.prototype._groupAreaTemplate;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridComponent.prototype.groupingDiffer;
    /**
     * @type {?}
     * @private
     */
    IgxGridComponent.prototype._data;
    /**
     * @type {?}
     * @private
     */
    IgxGridComponent.prototype._hideGroupedColumns;
    /**
     * @type {?}
     * @private
     */
    IgxGridComponent.prototype._dropAreaMessage;
    /**
     * @type {?}
     * @private
     */
    IgxGridComponent.prototype._gridAPI;
    /**
     * @type {?}
     * @private
     */
    IgxGridComponent.prototype._filteredData;
    /**
     * An \@Input property that determines whether created groups are rendered expanded or collapsed.
     * The default rendered state is expanded.
     * ```html
     * <igx-grid #grid [data]="Data" [groupsExpanded]="false" [autoGenerate]="true"></igx-grid>
     * ```
     * \@memberof IgxGridComponent
     * @type {?}
     */
    IgxGridComponent.prototype.groupsExpanded;
    /**
     * A hierarchical representation of the group by records.
     * ```typescript
     * let groupRecords = this.grid.groupsRecords;
     * ```
     * \@memberof IgxGridComponent
     * @type {?}
     */
    IgxGridComponent.prototype.groupsRecords;
    /**
     * An \@Input property that sets the template that will be rendered as a GroupBy drop area.
     * Note: The grid needs to have at least one groupable column in order the GroupBy area to be displayed.
     * ```html
     * <igx-grid [dropAreaTemplate]="dropAreaRef">
     *      <igx-column [groupable]="true" field="ID"></igx-column>
     * </igx-grid>
     *
     * <ng-template #myDropArea>
     *      <span> Custom drop area! </span>
     * </ng-template>
     * ```
     * ```ts
     * \@ViewChild('myDropArea', { read: TemplateRef })
     * public dropAreaRef: TemplateRef<any>;
     * ```
     * \@memberof IgxGridComponent
     * @type {?}
     */
    IgxGridComponent.prototype.dropAreaTemplate;
    /**
     * Emitted when a new `IgxColumnComponent` gets grouped/ungrouped, or multiple columns get
     * grouped/ungrouped at once by using the Group By API.
     * The `onGroupingDone` event would be raised only once if several columns get grouped at once by calling
     * the `groupBy()` or `clearGrouping()` API methods and passing an array as an argument.
     * The event arguments provide the `expressions`, `groupedColumns` and `ungroupedColumns` properties, which contain
     * the `ISortingExpression` and the `IgxColumnComponent` related to the grouping/ungrouping operation.
     * Please note that `groupedColumns` and `ungroupedColumns` show only the **newly** changed columns (affected by the **last**
     * grouping/ungrouping operation), not all columns which are currently grouped/ungrouped.
     * columns.
     * ```typescript
     * groupingDone(event: IGroupingDoneEventArgs){
     *     const expressions = event.expressions;
     *     //the newly grouped columns
     *     const groupedColumns = event.groupedColumns;
     *     //the newly ungrouped columns
     *     const ungroupedColumns = event.ungroupedColumns;
     * }
     * ```
     * ```html
     * <igx-grid #grid [data]="localData" (onGroupingDone)="groupingDone($event)" [autoGenerate]="true"></igx-grid>
     * ```
     * \@memberof IgxGridComponent
     * @type {?}
     */
    IgxGridComponent.prototype.onGroupingDone;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridComponent.prototype.groupTemplate;
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
    IgxGridComponent.prototype.dragIndicatorIconTemplate;
    /**
     * @type {?}
     * @private
     */
    IgxGridComponent.prototype._groupsRowList;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridComponent.prototype.defaultDropAreaTemplate;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridComponent.prototype.groupArea;
    /** @type {?} */
    IgxGridComponent.prototype.colResizingService;
    /** @type {?} */
    IgxGridComponent.prototype.document;
    /**
     * @type {?}
     * @protected
     */
    IgxGridComponent.prototype.overlayService;
    /**
     * @type {?}
     * @protected
     */
    IgxGridComponent.prototype._displayDensityOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2dyaWQvZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQzNGLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBVyxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsd0JBQXdCLEVBQzNHLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQW9CLFdBQVcsRUFBRSxVQUFVLEVBQVUsUUFBUSxFQUN6RyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQTRDLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hJLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRSxPQUFPLEVBQTBCLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFLeEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFB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QUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBcWM3Qyx1QkFBQztDQUFBLEFBdDVCRCxDQVdzQyxvQkFBb0IsR0EyNEJ6RDtTQTM0QlksZ0JBQWdCOzs7Ozs7SUFDekIsK0JBQXNDOzs7OztJQUl0QywwQ0FBNkI7Ozs7O0lBSzdCLDRDQUErQjs7Ozs7SUFLL0IsOENBQWlDOzs7Ozs7SUFJakMsZ0RBQTJEOzs7Ozs7SUFJM0QsZ0RBQTJEOzs7Ozs7SUFJM0QsNkNBQThDOzs7Ozs7SUFJOUMsOENBQStDOzs7Ozs7SUFJL0MsMENBQXlCOzs7OztJQUN6QixpQ0FBYzs7Ozs7SUFDZCwrQ0FBb0M7Ozs7O0lBQ3BDLDRDQUFnQzs7Ozs7SUFnSGhDLG9DQUFvQzs7Ozs7SUFDcEMseUNBQTZCOzs7Ozs7Ozs7O0lBd0k3QiwwQ0FDNkI7Ozs7Ozs7OztJQVM3Qix5Q0FBNEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBcUU1Qyw0Q0FDMEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMEIxQywwQ0FDbUU7Ozs7OztJQUtuRSx5Q0FDd0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0J4RCxxREFDMEQ7Ozs7O0lBRTFELDBDQUM4RDs7Ozs7SUFLOUQsbURBQ2lEOzs7OztJQXdCakQscUNBQzZCOztJQTNTekIsOENBQW1EOztJQU1uRCxvQ0FBaUM7Ozs7O0lBT2pDLDBDQUFzRTs7Ozs7SUFFdEUsa0RBQWlHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZCwgVmlld0NoaWxkcmVuLFxuICAgIFF1ZXJ5TGlzdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZiwgRG9DaGVjaywgTmdab25lLCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIEl0ZXJhYmxlRGlmZmVycywgVmlld0NvbnRhaW5lclJlZiwgSW5qZWN0LCBBZnRlckNvbnRlbnRJbml0LCBIb3N0QmluZGluZywgZm9yd2FyZFJlZiwgT25Jbml0LCBPcHRpb25hbFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneEdyaWRCYXNlQ29tcG9uZW50LCBJZ3hHcmlkVHJhbnNhY3Rpb24sIElGb2N1c0NoYW5nZUV2ZW50QXJncywgSUdyaWREYXRhQmluZGFibGUsIEZpbHRlck1vZGUgfSBmcm9tICcuLi9ncmlkLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IElneEdyaWROYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2dyaWQtbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IElneEdyaWRBUElTZXJ2aWNlIH0gZnJvbSAnLi9ncmlkLWFwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElTb3J0aW5nRXhwcmVzc2lvbiB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9zb3J0aW5nLWV4cHJlc3Npb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IGNsb25lQXJyYXkgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IElHcm91cEJ5UmVjb3JkIH0gZnJvbSAnLi4vLi4vZGF0YS1vcGVyYXRpb25zL2dyb3VwYnktcmVjb3JkLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJZ3hHcm91cEJ5Um93VGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2dyaWQuZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBJZ3hHcmlkR3JvdXBCeVJvd0NvbXBvbmVudCB9IGZyb20gJy4vZ3JvdXBieS1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IElEaXNwbGF5RGVuc2l0eU9wdGlvbnMsIERpc3BsYXlEZW5zaXR5VG9rZW4gfSBmcm9tICcuLi8uLi9jb3JlL2Rpc3BsYXlEZW5zaXR5JztcbmltcG9ydCB7IElHcm91cEJ5RXhwYW5kU3RhdGUgfSBmcm9tICcuLi8uLi9kYXRhLW9wZXJhdGlvbnMvZ3JvdXBieS1leHBhbmQtc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IElCYXNlQ2hpcEV2ZW50QXJncywgSUNoaXBDbGlja0V2ZW50QXJncywgSUNoaXBLZXlEb3duRXZlbnRBcmdzIH0gZnJvbSAnLi4vLi4vY2hpcHMvY2hpcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSUNoaXBzQXJlYVJlb3JkZXJFdmVudEFyZ3MgfSBmcm9tICcuLi8uLi9jaGlwcy9jaGlwcy1hcmVhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVXRpbCB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9kYXRhLXV0aWwnO1xuaW1wb3J0IHsgSWd4U2VsZWN0aW9uQVBJU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvc2VsZWN0aW9uJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uU2VydmljZSwgVHJhbnNhY3Rpb24sIFN0YXRlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdHJhbnNhY3Rpb24vdHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSWd4Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJZ3hGaWx0ZXJpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vZmlsdGVyaW5nL2dyaWQtZmlsdGVyaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUdyb3VwaW5nRXhwcmVzc2lvbiB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9ncm91cGluZy1leHByZXNzaW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJZ3hDb2x1bW5SZXNpemluZ1NlcnZpY2UgfSBmcm9tICcuLi9ncmlkLWNvbHVtbi1yZXNpemluZy5zZXJ2aWNlJztcbmltcG9ydCB7IElneEdyaWRTdW1tYXJ5U2VydmljZSB9IGZyb20gJy4uL3N1bW1hcmllcy9ncmlkLXN1bW1hcnkuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hHcmlkU2VsZWN0aW9uU2VydmljZSwgSWd4R3JpZENSVURTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9ncmlkLXNlbGVjdGlvbic7XG5pbXBvcnQgeyBJZ3hPdmVybGF5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IElneEZvck9mU3luY1NlcnZpY2UgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2Zvci1vZi9mb3Jfb2Yuc3luYy5zZXJ2aWNlJztcbmltcG9ydCB7IElneERyYWdJbmRpY2F0b3JJY29uRGlyZWN0aXZlIH0gZnJvbSAnLi4vcm93LWRyYWcuZGlyZWN0aXZlJztcbmltcG9ydCB7IElneEdyaWRNUkxOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2dyaWQtbXJsLW5hdmlnYXRpb24uc2VydmljZSc7XG5cbmxldCBORVhUX0lEID0gMDtcblxuZXhwb3J0IGludGVyZmFjZSBJR3JpZEZvY3VzQ2hhbmdlRXZlbnRBcmdzIGV4dGVuZHMgSUZvY3VzQ2hhbmdlRXZlbnRBcmdzIHtcbiAgICBncm91cFJvdzogSWd4R3JpZEdyb3VwQnlSb3dDb21wb25lbnQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIElHcm91cGluZ0RvbmVFdmVudEFyZ3Mge1xuICAgIGV4cHJlc3Npb25zOiBBcnJheTxJU29ydGluZ0V4cHJlc3Npb24+IHwgSVNvcnRpbmdFeHByZXNzaW9uO1xuICAgIGdyb3VwZWRDb2x1bW5zOiBBcnJheTxJZ3hDb2x1bW5Db21wb25lbnQ+IHwgSWd4Q29sdW1uQ29tcG9uZW50O1xuICAgIHVuZ3JvdXBlZENvbHVtbnM6IEFycmF5PElneENvbHVtbkNvbXBvbmVudD4gfCBJZ3hDb2x1bW5Db21wb25lbnQ7XG59XG5cbi8qKlxuICogKipJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgR3JpZCoqIC1cbiAqIFtEb2N1bWVudGF0aW9uXShodHRwczovL3d3dy5pbmZyYWdpc3RpY3MuY29tL3Byb2R1Y3RzL2lnbml0ZS11aS1hbmd1bGFyL2FuZ3VsYXIvY29tcG9uZW50cy9ncmlkLmh0bWwpXG4gKlxuICogVGhlIElnbml0ZSBVSSBHcmlkIGlzIHVzZWQgZm9yIHByZXNlbnRpbmcgYW5kIG1hbmlwdWxhdGluZyB0YWJ1bGFyIGRhdGEgaW4gdGhlIHNpbXBsZXN0IHdheSBwb3NzaWJsZS4gIE9uY2UgZGF0YVxuICogaGFzIGJlZW4gYm91bmQsIGl0IGNhbiBiZSBtYW5pcHVsYXRlZCB0aHJvdWdoIGZpbHRlcmluZywgc29ydGluZyAmIGVkaXRpbmcgb3BlcmF0aW9ucy5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgaHRtbFxuICogPGlneC1ncmlkIFtkYXRhXT1cImVtcGxveWVlRGF0YVwiIGF1dG9HZW5lcmF0ZT1cImZhbHNlXCI+XG4gKiAgIDxpZ3gtY29sdW1uIGZpZWxkPVwiZmlyc3RcIiBoZWFkZXI9XCJGaXJzdCBOYW1lXCI+PC9pZ3gtY29sdW1uPlxuICogICA8aWd4LWNvbHVtbiBmaWVsZD1cImxhc3RcIiBoZWFkZXI9XCJMYXN0IE5hbWVcIj48L2lneC1jb2x1bW4+XG4gKiAgIDxpZ3gtY29sdW1uIGZpZWxkPVwicm9sZVwiIGhlYWRlcj1cIlJvbGVcIj48L2lneC1jb2x1bW4+XG4gKiA8L2lneC1ncmlkPlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICAgIHByb3ZpZGVyczogW0lneEdyaWROYXZpZ2F0aW9uU2VydmljZSwgSWd4R3JpZFN1bW1hcnlTZXJ2aWNlLCBJZ3hHcmlkU2VsZWN0aW9uU2VydmljZSwgSWd4R3JpZENSVURTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6IEdyaWRCYXNlQVBJU2VydmljZSwgdXNlQ2xhc3M6IElneEdyaWRBUElTZXJ2aWNlIH0sXG4gICAgICAgIHsgcHJvdmlkZTogSWd4R3JpZEJhc2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElneEdyaWRDb21wb25lbnQpIH0sXG4gICAgICAgIElneEZpbHRlcmluZ1NlcnZpY2UsIElneENvbHVtblJlc2l6aW5nU2VydmljZSwgSWd4Rm9yT2ZTeW5jU2VydmljZVxuICAgIF0sXG4gICAgc2VsZWN0b3I6ICdpZ3gtZ3JpZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2dyaWQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneEdyaWRDb21wb25lbnQgZXh0ZW5kcyBJZ3hHcmlkQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIElHcmlkRGF0YUJpbmRhYmxlLCBPbkluaXQsIERvQ2hlY2ssIEFmdGVyQ29udGVudEluaXQge1xuICAgIHByaXZhdGUgX2lkID0gYGlneC1ncmlkLSR7TkVYVF9JRCsrfWA7XG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ3JvdXBpbmdSZXN1bHQ6IGFueVtdO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ3JvdXBpbmdNZXRhZGF0YTogYW55W107XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBncm91cGluZ0ZsYXRSZXN1bHQ6IGFueVtdO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2dyb3VwaW5nRXhwcmVzc2lvbnM6IElHcm91cGluZ0V4cHJlc3Npb25bXSA9IFtdO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2dyb3VwaW5nRXhwYW5kU3RhdGU6IElHcm91cEJ5RXhwYW5kU3RhdGVbXSA9IFtdO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2dyb3VwUm93VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfZ3JvdXBBcmVhVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBncm91cGluZ0RpZmZlcjtcbiAgICBwcml2YXRlIF9kYXRhO1xuICAgIHByaXZhdGUgX2hpZGVHcm91cGVkQ29sdW1ucyA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2Ryb3BBcmVhTWVzc2FnZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYGlkYCBhdHRyaWJ1dGUuIElmIG5vdCBwcm92aWRlZCBpdCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgW2lkXT1cIidpZ3gtZ3JpZC0xJ1wiIFtkYXRhXT1cIkRhdGFcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIj48L2lneC1ncmlkPlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG4gICAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgbGV0cyB5b3UgZmlsbCB0aGUgYElneEdyaWRDb21wb25lbnRgIHdpdGggYW4gYXJyYXkgb2YgZGF0YS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkIFtkYXRhXT1cIkRhdGFcIiBbYXV0b0dlbmVyYXRlXT1cInRydWVcIj48L2lneC1ncmlkPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQ29tcG9uZW50XG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgZGF0YSgpOiBhbnlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZGF0YSh2YWx1ZTogYW55W10pIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnN1bW1hcnlTZXJ2aWNlLmNsZWFyU3VtbWFyeUNhY2hlKCk7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZEdlbmVyYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnNldHVwQ29sdW1ucygpO1xuICAgICAgICAgICAgdGhpcy5yZWZsb3coKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIG9iamVjdHMgY29udGFpbmluZyB0aGUgZmlsdGVyZWQgZGF0YSBpbiB0aGUgYElneEdyaWRDb21wb25lbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgZmlsdGVyZWREYXRhID0gdGhpcy5ncmlkLmZpbHRlcmVkRGF0YTtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgZmlsdGVyZWREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyZWREYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgYW4gYXJyYXkgb2Ygb2JqZWN0cyBjb250YWluaW5nIHRoZSBmaWx0ZXJlZCBkYXRhIGluIHRoZSBgSWd4R3JpZENvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZ3JpZC5maWx0ZXJlZERhdGEgPSBbe1xuICAgICAqICAgICAgIElEOiAxLFxuICAgICAqICAgICAgIE5hbWU6IFwiQVwiXG4gICAgICogfV07XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgc2V0IGZpbHRlcmVkRGF0YSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9maWx0ZXJlZERhdGEgPSB2YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5yb3dTZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUhlYWRlckNoZWNrYm94U3RhdHVzT25GaWx0ZXIodGhpcy5fZmlsdGVyZWREYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHN0YXRlIG9mIHRoZSBncmlkIHZpcnR1YWxpemF0aW9uLCBpbmNsdWRpbmcgdGhlIHN0YXJ0IGluZGV4IGFuZCBob3cgbWFueSByZWNvcmRzIGFyZSByZW5kZXJlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgZ3JpZFZpcnRTdGF0ZSA9IHRoaXMuZ3JpZDEudmlydHVhbGl6YXRpb25TdGF0ZTtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgdmlydHVhbGl6YXRpb25TdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmVydGljYWxTY3JvbGxDb250YWluZXIuc3RhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHNldCB2aXJ0dWFsaXphdGlvblN0YXRlKHN0YXRlKSB7XG4gICAgICAgIHRoaXMudmVydGljYWxTY3JvbGxDb250YWluZXIuc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB0b3RhbCBudW1iZXIgb2YgcmVjb3JkcyBpbiB0aGUgZGF0YSBzb3VyY2UuXG4gICAgICogVGhpcyBwcm9wZXJ0eSBpcyByZXF1aXJlZCBmb3IgcmVtb3RlIGdyaWQgdmlydHVhbGl6YXRpb24gdG8gZnVuY3Rpb24gd2hlbiBpdCBpcyBib3VuZCB0byByZW1vdGUgZGF0YS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5ncmlkMS50b3RhbEl0ZW1Db3VudCA9IDU1O1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIHNldCB0b3RhbEl0ZW1Db3VudChjb3VudCkge1xuICAgICAgICB0aGlzLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLnRvdGFsSXRlbUNvdW50ID0gY291bnQ7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0b3RhbCBudW1iZXIgb2YgcmVjb3JkcyBpbiB0aGUgZGF0YSBzb3VyY2UuXG4gICAgICogV29ya3Mgb25seSB3aXRoIHJlbW90ZSBncmlkIHZpcnR1YWxpemF0aW9uLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBpdGVtQ291bnQgPSB0aGlzLmdyaWQxLnRvdGFsSXRlbUNvdW50O1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCB0b3RhbEl0ZW1Db3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmVydGljYWxTY3JvbGxDb250YWluZXIudG90YWxJdGVtQ291bnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ3JpZEFQSTogSWd4R3JpZEFQSVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfZmlsdGVyZWREYXRhID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBzZWxlY3Rpb25TZXJ2aWNlOiBJZ3hHcmlkU2VsZWN0aW9uU2VydmljZSxcbiAgICAgICAgY3J1ZFNlcnZpY2U6IElneEdyaWRDUlVEU2VydmljZSxcbiAgICAgICAgcHVibGljIGNvbFJlc2l6aW5nU2VydmljZTogSWd4Q29sdW1uUmVzaXppbmdTZXJ2aWNlLFxuICAgICAgICBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4sXG4gICAgICAgIHNlbGVjdGlvbjogSWd4U2VsZWN0aW9uQVBJU2VydmljZSxcbiAgICAgICAgQEluamVjdChJZ3hHcmlkVHJhbnNhY3Rpb24pIF90cmFuc2FjdGlvbnM6IFRyYW5zYWN0aW9uU2VydmljZTxUcmFuc2FjdGlvbiwgU3RhdGU+LFxuICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICB6b25lOiBOZ1pvbmUsXG4gICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHB1YmxpYyBkb2N1bWVudCxcbiAgICAgICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgZGlmZmVyczogSXRlcmFibGVEaWZmZXJzLFxuICAgICAgICB2aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBuYXZpZ2F0aW9uOiBJZ3hHcmlkTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgICAgIGZpbHRlcmluZ1NlcnZpY2U6IElneEZpbHRlcmluZ1NlcnZpY2UsXG4gICAgICAgIEBJbmplY3QoSWd4T3ZlcmxheVNlcnZpY2UpIHByb3RlY3RlZCBvdmVybGF5U2VydmljZTogSWd4T3ZlcmxheVNlcnZpY2UsXG4gICAgICAgIHN1bW1hcnlTZXJ2aWNlOiBJZ3hHcmlkU3VtbWFyeVNlcnZpY2UsXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRGlzcGxheURlbnNpdHlUb2tlbikgcHJvdGVjdGVkIF9kaXNwbGF5RGVuc2l0eU9wdGlvbnM6IElEaXNwbGF5RGVuc2l0eU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHN1cGVyKHNlbGVjdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICBjcnVkU2VydmljZSwgZ3JpZEFQSSwgc2VsZWN0aW9uLCBfdHJhbnNhY3Rpb25zLCBlbGVtZW50UmVmLCB6b25lLCBkb2N1bWVudCwgY2RyLCByZXNvbHZlciwgZGlmZmVycywgdmlld1JlZiwgbmF2aWdhdGlvbixcbiAgICAgICAgICAgICAgICAgIGZpbHRlcmluZ1NlcnZpY2UsIG92ZXJsYXlTZXJ2aWNlLCBzdW1tYXJ5U2VydmljZSwgX2Rpc3BsYXlEZW5zaXR5T3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLl9ncmlkQVBJID0gPElneEdyaWRBUElTZXJ2aWNlPmdyaWRBUEk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZ3JvdXAgYnkgc3RhdGUgb2YgdGhlIGBJZ3hHcmlkQ29tcG9uZW50YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGdyb3VwQnlTdGF0ZSA9IHRoaXMuZ3JpZC5ncm91cGluZ0V4cHJlc3Npb25zO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGdyb3VwaW5nRXhwcmVzc2lvbnMoKTogSUdyb3VwaW5nRXhwcmVzc2lvbltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyb3VwaW5nRXhwcmVzc2lvbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZ3JvdXAgYnkgc3RhdGUgb2YgdGhlIGBJZ3hHcmlkQ29tcG9uZW50YCBhbmQgZW1pdHMgdGhlIGBvbkdyb3VwaW5nRG9uZWBcbiAgICAgKiBldmVudCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBhcmd1bWVudHMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZ3JpZC5ncm91cGluZ0V4cHJlc3Npb25zID0gW3tcbiAgICAgKiAgICAgZmllbGROYW1lOiBcIklEXCIsXG4gICAgICogICAgIGRpcjogU29ydGluZ0RpcmVjdGlvbi5Bc2MsXG4gICAgICogICAgIGlnbm9yZUNhc2U6IGZhbHNlXG4gICAgICogfV07XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgc2V0IGdyb3VwaW5nRXhwcmVzc2lvbnModmFsdWU6IElHcm91cGluZ0V4cHJlc3Npb25bXSkge1xuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdNYXhpbXVtIGFtb3VudCBvZiBncm91cGVkIGNvbHVtbnMgaXMgMTAuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2xkRXhwcmVzc2lvbnM6IElHcm91cGluZ0V4cHJlc3Npb25bXSA9IHRoaXMuZ3JvdXBpbmdFeHByZXNzaW9ucztcbiAgICAgICAgY29uc3QgbmV3RXhwcmVzc2lvbnM6IElHcm91cGluZ0V4cHJlc3Npb25bXSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9ncm91cGluZ0V4cHJlc3Npb25zID0gY2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuY2hpcHNHb3VwaW5nRXhwcmVzc2lvbnMgPSBjbG9uZUFycmF5KHZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMuX2dyaWRBUEkuZ3JpZCkge1xuICAgICAgICAgICAgLyogZ3JvdXBpbmcgc2hvdWxkIHdvcmsgaW4gY29uanVuY3Rpb24gd2l0aCBzb3J0aW5nXG4gICAgICAgICAgICBhbmQgd2l0aG91dCBvdmVycmlkaW5nIHNlcGFyYXRlIHNvcnRpbmcgZXhwcmVzc2lvbnMgKi9cbiAgICAgICAgICAgIHRoaXMuX2FwcGx5R3JvdXBpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuX2dyaWRBUEkuYXJyYW5nZV9zb3J0aW5nX2V4cHJlc3Npb25zKCk7XG4gICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNldHRlciBjYWxsZWQgYmVmb3JlIGdyaWQgaXMgcmVnaXN0ZXJlZCBpbiBncmlkIEFQSSBzZXJ2aWNlXG4gICAgICAgICAgICB0aGlzLnNvcnRpbmdFeHByZXNzaW9ucy51bnNoaWZ0LmFwcGx5KHRoaXMuc29ydGluZ0V4cHJlc3Npb25zLCB0aGlzLl9ncm91cGluZ0V4cHJlc3Npb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkob2xkRXhwcmVzc2lvbnMpICE9PSBKU09OLnN0cmluZ2lmeShuZXdFeHByZXNzaW9ucykgJiYgdGhpcy5jb2x1bW5MaXN0KSB7XG4gICAgICAgICAgICBjb25zdCBncm91cGVkQ29sczogSWd4Q29sdW1uQ29tcG9uZW50W10gPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHVuZ3JvdXBlZENvbHM6IElneENvbHVtbkNvbXBvbmVudFtdID0gW107XG4gICAgICAgICAgICBjb25zdCBncm91cGVkQ29sc0FyciA9IG5ld0V4cHJlc3Npb25zLmZpbHRlcigob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFvbGRFeHByZXNzaW9ucy5zb21lKChvYmoyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmouZmllbGROYW1lID09PSBvYmoyLmZpZWxkTmFtZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ3JvdXBlZENvbHNBcnIuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGdyb3VwZWRDb2xzLnB1c2godGhpcy5nZXRDb2x1bW5CeU5hbWUoZWxlbS5maWVsZE5hbWUpKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgY29uc3QgdW5ncm91cGVkQ29sc0FyciA9IG9sZEV4cHJlc3Npb25zLmZpbHRlcigob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFuZXdFeHByZXNzaW9ucy5zb21lKChvYmoyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmouZmllbGROYW1lID09PSBvYmoyLmZpZWxkTmFtZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdW5ncm91cGVkQ29sc0Fyci5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgdW5ncm91cGVkQ29scy5wdXNoKHRoaXMuZ2V0Q29sdW1uQnlOYW1lKGVsZW0uZmllbGROYW1lKSk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwaW5nRG9uZUFyZ3M6IElHcm91cGluZ0RvbmVFdmVudEFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbnM6IG5ld0V4cHJlc3Npb25zLFxuICAgICAgICAgICAgICAgIGdyb3VwZWRDb2x1bW5zOiBncm91cGVkQ29scyxcbiAgICAgICAgICAgICAgICB1bmdyb3VwZWRDb2x1bW5zOiB1bmdyb3VwZWRDb2xzXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5vbkdyb3VwaW5nRG9uZS5lbWl0KGdyb3VwaW5nRG9uZUFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGxpc3Qgb2YgZXhwYW5zaW9uIHN0YXRlcyBmb3IgZ3JvdXAgcm93cy5cbiAgICAgKiBJbmNsdWRlcyBvbmx5IHN0YXRlcyB0aGF0IGRpZmZlciBmcm9tIHRoZSBkZWZhdWx0IG9uZSAoY29udHJvbGxlZCB0aHJvdWdoIGdyb3Vwc0V4cGFuZGVkIGFuZCBzdGF0ZXMgdGhhdCB0aGUgdXNlciBoYXMgY2hhbmdlZC5cbiAgICAgKiBDb250YWlucyB0aGUgZXhwYW5zaW9uIHN0YXRlIChleHBhbmRlZDogYm9vbGVhbikgYW5kIHRoZSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGdyb3VwIHJvdyAoQXJyYXkpLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBncm91cEV4cFN0YXRlID0gdGhpcy5ncmlkLmdyb3VwaW5nRXhwYW5zaW9uU3RhdGU7XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgZ3JvdXBpbmdFeHBhbnNpb25TdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyb3VwaW5nRXhwYW5kU3RhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhIGxpc3Qgb2YgZXhwYW5zaW9uIHN0YXRlcyBmb3IgZ3JvdXAgcm93cy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogICAgICB0aGlzLmdyaWQuZ3JvdXBpbmdFeHBhbnNpb25TdGF0ZSA9IFt7XG4gICAgICogICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICogICAgICBoaWVyYXJjaHk6IFt7IGZpZWxkTmFtZTogJ0lEJywgdmFsdWU6IDEgfV1cbiAgICAgKiAgIH1dO1xuICAgICAqIC8vIFlvdSBjYW4gdXNlIERhdGFVdGlsLmdldEhpZXJhcmNoeShncm91cFJvdykgdG8gZ2V0IHRoZSBncm91cCBgSWd4R3JpZFJvd0NvbXBvbmVudGAgaGllcmFyY2h5LlxuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIHNldCBncm91cGluZ0V4cGFuc2lvblN0YXRlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2dyb3VwaW5nRXhwYW5kU3RhdGUgPSBjbG9uZUFycmF5KHZhbHVlKTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGRldGVybWluZXMgd2hldGhlciBjcmVhdGVkIGdyb3VwcyBhcmUgcmVuZGVyZWQgZXhwYW5kZWQgb3IgY29sbGFwc2VkLlxuICAgICAqIFRoZSBkZWZhdWx0IHJlbmRlcmVkIHN0YXRlIGlzIGV4cGFuZGVkLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgI2dyaWQgW2RhdGFdPVwiRGF0YVwiIFtncm91cHNFeHBhbmRlZF09XCJmYWxzZVwiIFthdXRvR2VuZXJhdGVdPVwidHJ1ZVwiPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ3JvdXBzRXhwYW5kZWQgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogQSBoaWVyYXJjaGljYWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdyb3VwIGJ5IHJlY29yZHMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBncm91cFJlY29yZHMgPSB0aGlzLmdyaWQuZ3JvdXBzUmVjb3JkcztcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ3JvdXBzUmVjb3JkczogSUdyb3VwQnlSZWNvcmRbXSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB3aGV0aGVyIHRoZSBncm91cGVkIGNvbHVtbnMgc2hvdWxkIGJlIGhpZGRlbiBhcyB3ZWxsLlxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIFwiZmFsc2VcIlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgI2dyaWQgW2RhdGFdPVwibG9jYWxEYXRhXCIgW2hpZGVHcm91cGVkQ29sdW1uc109XCJ0cnVlXCIgW2F1dG9HZW5lcmF0ZV09XCJ0cnVlXCI+PC9pZ3gtZ3JpZD5cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaGlkZUdyb3VwZWRDb2x1bW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGlkZUdyb3VwZWRDb2x1bW5zO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaGlkZUdyb3VwZWRDb2x1bW5zKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5ncm91cGluZ0RpZmZlciA9IHRoaXMuZGlmZmVycy5maW5kKHRoaXMuZ3JvdXBpbmdFeHByZXNzaW9ucykuY3JlYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdyb3VwaW5nRGlmZmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb2x1bW5MaXN0ICYmIHRoaXMuZ3JvdXBpbmdFeHByZXNzaW9ucykge1xuICAgICAgICAgICAgdGhpcy5fc2V0R3JvdXBDb2xzVmlzaWJpbGl0eSh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9oaWRlR3JvdXBlZENvbHVtbnMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSBtZXNzYWdlIGRpc3BsYXllZCBpbnNpZGUgdGhlIEdyb3VwQnkgZHJvcCBhcmVhIHdoZXJlIGNvbHVtbnMgY2FuIGJlIGRyYWdnZWQgb24uXG4gICAgICogTm90ZTogVGhlIGdyaWQgbmVlZHMgdG8gaGF2ZSBhdCBsZWFzdCBvbmUgZ3JvdXBhYmxlIGNvbHVtbiBpbiBvcmRlciB0aGUgR3JvdXBCeSBhcmVhIHRvIGJlIGRpc3BsYXllZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkIGRyb3BBcmVhTWVzc2FnZT1cIkRyb3AgaGVyZSB0byBncm91cCFcIj5cbiAgICAgKiAgICAgIDxpZ3gtY29sdW1uIFtncm91cGFibGVdPVwidHJ1ZVwiIGZpZWxkPVwiSURcIj48L2lneC1jb2x1bW4+XG4gICAgICogPC9pZ3gtZ3JpZD5cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHNldCBkcm9wQXJlYU1lc3NhZ2UodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9kcm9wQXJlYU1lc3NhZ2UgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gYWNjZXNzb3IgdGhhdCByZXR1cm5zIHRoZSBtZXNzYWdlIGRpc3BsYXllZCBpbnNpZGUgdGhlIEdyb3VwQnkgZHJvcCBhcmVhIHdoZXJlIGNvbHVtbnMgY2FuIGJlIGRyYWdnZWQgb24uXG4gICAgKi9cbiAgICBnZXQgZHJvcEFyZWFNZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcm9wQXJlYU1lc3NhZ2UgfHwgdGhpcy5yZXNvdXJjZVN0cmluZ3MuaWd4X2dyaWRfZ3JvdXBCeUFyZWFfbWVzc2FnZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSB0ZW1wbGF0ZSB0aGF0IHdpbGwgYmUgcmVuZGVyZWQgYXMgYSBHcm91cEJ5IGRyb3AgYXJlYS5cbiAgICAgKiBOb3RlOiBUaGUgZ3JpZCBuZWVkcyB0byBoYXZlIGF0IGxlYXN0IG9uZSBncm91cGFibGUgY29sdW1uIGluIG9yZGVyIHRoZSBHcm91cEJ5IGFyZWEgdG8gYmUgZGlzcGxheWVkLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQgW2Ryb3BBcmVhVGVtcGxhdGVdPVwiZHJvcEFyZWFSZWZcIj5cbiAgICAgKiAgICAgIDxpZ3gtY29sdW1uIFtncm91cGFibGVdPVwidHJ1ZVwiIGZpZWxkPVwiSURcIj48L2lneC1jb2x1bW4+XG4gICAgICogPC9pZ3gtZ3JpZD5cbiAgICAgKlxuICAgICAqIDxuZy10ZW1wbGF0ZSAjbXlEcm9wQXJlYT5cbiAgICAgKiAgICAgIDxzcGFuPiBDdXN0b20gZHJvcCBhcmVhISA8L3NwYW4+XG4gICAgICogPC9uZy10ZW1wbGF0ZT5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0c1xuICAgICAqIEBWaWV3Q2hpbGQoJ215RHJvcEFyZWEnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gICAgICogcHVibGljIGRyb3BBcmVhUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGRyb3BBcmVhVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIHdoZW4gYSBuZXcgYElneENvbHVtbkNvbXBvbmVudGAgZ2V0cyBncm91cGVkL3VuZ3JvdXBlZCwgb3IgbXVsdGlwbGUgY29sdW1ucyBnZXRcbiAgICAgKiBncm91cGVkL3VuZ3JvdXBlZCBhdCBvbmNlIGJ5IHVzaW5nIHRoZSBHcm91cCBCeSBBUEkuXG4gICAgICogVGhlIGBvbkdyb3VwaW5nRG9uZWAgZXZlbnQgd291bGQgYmUgcmFpc2VkIG9ubHkgb25jZSBpZiBzZXZlcmFsIGNvbHVtbnMgZ2V0IGdyb3VwZWQgYXQgb25jZSBieSBjYWxsaW5nXG4gICAgICogdGhlIGBncm91cEJ5KClgIG9yIGBjbGVhckdyb3VwaW5nKClgIEFQSSBtZXRob2RzIGFuZCBwYXNzaW5nIGFuIGFycmF5IGFzIGFuIGFyZ3VtZW50LlxuICAgICAqIFRoZSBldmVudCBhcmd1bWVudHMgcHJvdmlkZSB0aGUgYGV4cHJlc3Npb25zYCwgYGdyb3VwZWRDb2x1bW5zYCBhbmQgYHVuZ3JvdXBlZENvbHVtbnNgIHByb3BlcnRpZXMsIHdoaWNoIGNvbnRhaW5cbiAgICAgKiB0aGUgYElTb3J0aW5nRXhwcmVzc2lvbmAgYW5kIHRoZSBgSWd4Q29sdW1uQ29tcG9uZW50YCByZWxhdGVkIHRvIHRoZSBncm91cGluZy91bmdyb3VwaW5nIG9wZXJhdGlvbi5cbiAgICAgKiBQbGVhc2Ugbm90ZSB0aGF0IGBncm91cGVkQ29sdW1uc2AgYW5kIGB1bmdyb3VwZWRDb2x1bW5zYCBzaG93IG9ubHkgdGhlICoqbmV3bHkqKiBjaGFuZ2VkIGNvbHVtbnMgKGFmZmVjdGVkIGJ5IHRoZSAqKmxhc3QqKlxuICAgICAqIGdyb3VwaW5nL3VuZ3JvdXBpbmcgb3BlcmF0aW9uKSwgbm90IGFsbCBjb2x1bW5zIHdoaWNoIGFyZSBjdXJyZW50bHkgZ3JvdXBlZC91bmdyb3VwZWQuXG4gICAgICogY29sdW1ucy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogZ3JvdXBpbmdEb25lKGV2ZW50OiBJR3JvdXBpbmdEb25lRXZlbnRBcmdzKXtcbiAgICAgKiAgICAgY29uc3QgZXhwcmVzc2lvbnMgPSBldmVudC5leHByZXNzaW9ucztcbiAgICAgKiAgICAgLy90aGUgbmV3bHkgZ3JvdXBlZCBjb2x1bW5zXG4gICAgICogICAgIGNvbnN0IGdyb3VwZWRDb2x1bW5zID0gZXZlbnQuZ3JvdXBlZENvbHVtbnM7XG4gICAgICogICAgIC8vdGhlIG5ld2x5IHVuZ3JvdXBlZCBjb2x1bW5zXG4gICAgICogICAgIGNvbnN0IHVuZ3JvdXBlZENvbHVtbnMgPSBldmVudC51bmdyb3VwZWRDb2x1bW5zO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkICNncmlkIFtkYXRhXT1cImxvY2FsRGF0YVwiIChvbkdyb3VwaW5nRG9uZSk9XCJncm91cGluZ0RvbmUoJGV2ZW50KVwiIFthdXRvR2VuZXJhdGVdPVwidHJ1ZVwiPjwvaWd4LWdyaWQ+XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uR3JvdXBpbmdEb25lID0gbmV3IEV2ZW50RW1pdHRlcjxJR3JvdXBpbmdEb25lRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4R3JvdXBCeVJvd1RlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IElneEdyb3VwQnlSb3dUZW1wbGF0ZURpcmVjdGl2ZSwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGdyb3VwVGVtcGxhdGU6IElneEdyb3VwQnlSb3dUZW1wbGF0ZURpcmVjdGl2ZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXN0b20gdGVtcGxhdGUsIGlmIGFueSwgdGhhdCBzaG91bGQgYmUgdXNlZCB3aGVuIHJlbmRlcmluZyB0aGUgcm93IGRyYWcgaW5kaWNhdG9yIGljb25cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBTZXQgaW4gdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IG15Q3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBteUNvbXBvbmVudC5jdXN0b21UZW1wbGF0ZTtcbiAgICAgKiBteUNvbXBvbmVudC5kcmFnSW5kaWNhdG9ySWNvblRlbXBsYXRlID0gbXlDdXN0b21UZW1wbGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLSBTZXQgaW4gbWFya3VwIC0tPlxuICAgICAqICA8aWd4LWdyaWQgI2dyaWQ+XG4gICAgICogICAgICAuLi5cbiAgICAgKiAgICAgIDxuZy10ZW1wbGF0ZSBpZ3hEcmFnSW5kaWNhdG9ySWNvbj5cbiAgICAgKiAgICAgICAgICA8aWd4LWljb24gZm9udFNldD1cIm1hdGVyaWFsXCI+aW5mbzwvaWd4LWljb24+XG4gICAgICogICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAqICA8L2lneC1ncmlkPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4RHJhZ0luZGljYXRvckljb25EaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBkcmFnSW5kaWNhdG9ySWNvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcblxuICAgIEBWaWV3Q2hpbGRyZW4oSWd4R3JpZEdyb3VwQnlSb3dDb21wb25lbnQsIHsgcmVhZDogSWd4R3JpZEdyb3VwQnlSb3dDb21wb25lbnQgfSlcbiAgICBwcml2YXRlIF9ncm91cHNSb3dMaXN0OiBRdWVyeUxpc3Q8SWd4R3JpZEdyb3VwQnlSb3dDb21wb25lbnQ+O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2RlZmF1bHREcm9wQXJlYScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBkZWZhdWx0RHJvcEFyZWFUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIC8qKlxuICAgICAqIEEgbGlzdCBvZiBhbGwgZ3JvdXAgcm93cy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgZ3JvdXBMaXN0ID0gdGhpcy5ncmlkLmdyb3Vwc1Jvd0xpc3Q7XG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldCBncm91cHNSb3dMaXN0KCkge1xuICAgICAgICBjb25zdCByZXMgPSBuZXcgUXVlcnlMaXN0PGFueT4oKTtcbiAgICAgICAgaWYgKCF0aGlzLl9ncm91cHNSb3dMaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJMaXN0ID0gdGhpcy5fZ3JvdXBzUm93TGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50ICE9PSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzLnJlc2V0KHJMaXN0KTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnZ3JvdXBBcmVhJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIGdyb3VwQXJlYTogRWxlbWVudFJlZjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgZ3JvdXBBcmVhSG9zdENsYXNzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbXBvbmVudERlbnNpdHlDbGFzcygnaWd4LWRyb3AtYXJlYScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRlbXBsYXRlIHJlZmVyZW5jZSBvZiB0aGUgYElneEdyaWRDb21wb25lbnRgJ3MgZ3JvdXAgcm93LlxuICAgICAqIGBgYFxuICAgICAqIGNvbnN0IGdyb3VwUm93VGVtcGxhdGUgPSB0aGlzLmdyaWQuZ3JvdXBSb3dUZW1wbGF0ZTtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgZ3JvdXBSb3dUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyb3VwUm93VGVtcGxhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdGVtcGxhdGUgcmVmZXJlbmNlIG9mIHRoZSBgSWd4R3JpZENvbXBvbmVudGAncyBncm91cCBgSWd4R3JpZFJvd0NvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZ3JpZC5ncm91cFJvd1RlbXBsYXRlID0gbXlSb3dUZW1wbGF0ZS5cbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBzZXQgZ3JvdXBSb3dUZW1wbGF0ZSh0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgICAgICB0aGlzLl9ncm91cFJvd1RlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0ZW1wbGF0ZSByZWZlcmVuY2Ugb2YgdGhlIGBJZ3hHcmlkQ29tcG9uZW50YCdzIGdyb3VwIGFyZWEuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGdyb3VwQXJlYVRlbXBsYXRlID0gdGhpcy5ncmlkLmdyb3VwQXJlYVRlbXBsYXRlO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBncm91cEFyZWFUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyb3VwQXJlYVRlbXBsYXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHRlbXBsYXRlIHJlZmVyZW5jZSBvZiB0aGUgYElneEdyaWRDb21wb25lbnRgJ3MgZ3JvdXAgYXJlYS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5ncmlkLmdyb3VwQXJlYVRlbXBsYXRlID0gbXlBcmVhVGVtcGxhdGUuXG4gICAgICogYGBgXG5cdCAqIEBtZW1iZXJvZiBJZ3hHcmlkQ29tcG9uZW50XG4gICAgICovXG4gICAgc2V0IGdyb3VwQXJlYVRlbXBsYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgICAgIHRoaXMuX2dyb3VwQXJlYVRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR3JvdXBzIGJ5IGEgbmV3IGBJZ3hDb2x1bW5Db21wb25lbnRgIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBleHByZXNzaW9uLCBvciBtb2RpZmllcyBhbiBleGlzdGluZyBvbmUuXG4gICAgICogQWxzbyBhbGxvd3MgZm9yIG11bHRpcGxlIGNvbHVtbnMgdG8gYmUgZ3JvdXBlZCBhdCBvbmNlIGlmIGFuIGFycmF5IG9mIGBJU29ydGluZ0V4cHJlc3Npb25gIGlzIHBhc3NlZC5cbiAgICAgKiBUaGUgb25Hcm91cGluZ0RvbmUgZXZlbnQgd291bGQgZ2V0IHJhaXNlZCBvbmx5ICoqb25jZSoqIGlmIHRoaXMgbWV0aG9kIGdldHMgY2FsbGVkIG11bHRpcGxlIHRpbWVzIHdpdGggdGhlIHNhbWUgYXJndW1lbnRzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmdyaWQuZ3JvdXBCeSh7IGZpZWxkTmFtZTogbmFtZSwgZGlyOiBTb3J0aW5nRGlyZWN0aW9uLkFzYywgaWdub3JlQ2FzZTogZmFsc2UgfSk7XG4gICAgICogdGhpcy5ncmlkLmdyb3VwQnkoW1xuICAgICAgICAgICAgeyBmaWVsZE5hbWU6IG5hbWUxLCBkaXI6IFNvcnRpbmdEaXJlY3Rpb24uQXNjLCBpZ25vcmVDYXNlOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyBmaWVsZE5hbWU6IG5hbWUyLCBkaXI6IFNvcnRpbmdEaXJlY3Rpb24uRGVzYywgaWdub3JlQ2FzZTogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBmaWVsZE5hbWU6IG5hbWUzLCBkaXI6IFNvcnRpbmdEaXJlY3Rpb24uRGVzYywgaWdub3JlQ2FzZTogZmFsc2UgfVxuICAgICAgICBdKTtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ3JvdXBCeShleHByZXNzaW9uOiBJR3JvdXBpbmdFeHByZXNzaW9uIHwgQXJyYXk8SUdyb3VwaW5nRXhwcmVzc2lvbj4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbmRFZGl0KHRydWUpO1xuICAgICAgICB0aGlzLl9ncmlkQVBJLnN1Ym1pdF92YWx1ZSgpO1xuICAgICAgICBpZiAoZXhwcmVzc2lvbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICB0aGlzLl9ncmlkQVBJLmdyb3VwQnlfbXVsdGlwbGUoZXhwcmVzc2lvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9ncmlkQVBJLmdyb3VwQnkoZXhwcmVzc2lvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZUdyaWRTaXplcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgZ3JvdXBpbmcgaW4gdGhlIGdyaWQsIGlmIG5vIHBhcmFtZXRlciBpcyBwYXNzZWQuXG4gICAgICogSWYgYSBwYXJhbWV0ZXIgaXMgcHJvdmlkZWQsIGNsZWFycyBncm91cGluZyBmb3IgYSBwYXJ0aWN1bGFyIGNvbHVtbiBvciBhbiBhcnJheSBvZiBjb2x1bW5zLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmdyaWQuY2xlYXJHcm91cGluZygpOyAvL2NsZWFycyBhbGwgZ3JvdXBpbmdcbiAgICAgKiB0aGlzLmdyaWQuY2xlYXJHcm91cGluZyhcIklEXCIpOyAvL3VuZ3JvdXBzIGEgc2luZ2xlIGNvbHVtblxuICAgICAqIHRoaXMuZ3JpZC5jbGVhckdyb3VwaW5nKFtcIklEXCIsIFwiQ29sdW1uMVwiLCBcIkNvbHVtbjJcIl0pOyAvL3VuZ3JvdXBzIG11bHRpcGxlIGNvbHVtbnNcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhckdyb3VwaW5nKG5hbWU/OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2dyaWRBUEkuY2xlYXJfZ3JvdXBieShuYW1lKTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVHcmlkU2l6ZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGlmIGEgZ3JvdXAgaXMgZXhwYW5kZWQgb3Igbm90LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBwdWJsaWMgZ3JvdXBSb3c6IElHcm91cEJ5UmVjb3JkO1xuICAgICAqIGNvbnN0IGV4cGFuZGVkR3JvdXAgPSB0aGlzLmdyaWQuaXNFeHBhbmRlZEdyb3VwKHRoaXMuZ3JvdXBSb3cpO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBpc0V4cGFuZGVkR3JvdXAoZ3JvdXA6IElHcm91cEJ5UmVjb3JkKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHN0YXRlOiBJR3JvdXBCeUV4cGFuZFN0YXRlID0gdGhpcy5fZ2V0U3RhdGVGb3JHcm91cFJvdyhncm91cCk7XG4gICAgICAgIHJldHVybiBzdGF0ZSA/IHN0YXRlLmV4cGFuZGVkIDogdGhpcy5ncm91cHNFeHBhbmRlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIHRoZSBleHBhbnNpb24gc3RhdGUgb2YgYSBncm91cC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogcHVibGljIGdyb3VwUm93OiBJR3JvdXBCeVJlY29yZDtcbiAgICAgKiBjb25zdCB0b2dnbGVFeHBHcm91cCA9IHRoaXMuZ3JpZC50b2dnbGVHcm91cCh0aGlzLmdyb3VwUm93KTtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9nZ2xlR3JvdXAoZ3JvdXBSb3c6IElHcm91cEJ5UmVjb3JkKSB7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUdyb3VwKGdyb3VwUm93KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHBhbmRzIHRoZSBzcGVjaWZpZWQgZ3JvdXAgYW5kIGFsbCBvZiBpdHMgcGFyZW50IGdyb3Vwcy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogcHVibGljIGdyb3VwUm93OiBJR3JvdXBCeVJlY29yZDtcbiAgICAgKiB0aGlzLmdyaWQuZnVsbHlFeHBhbmRHcm91cCh0aGlzLmdyb3VwUm93KTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBmdWxseUV4cGFuZEdyb3VwKGdyb3VwUm93OiBJR3JvdXBCeVJlY29yZCkge1xuICAgICAgICB0aGlzLl9mdWxseUV4cGFuZEdyb3VwKGdyb3VwUm93KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGlzR3JvdXBCeVJlY29yZChyZWNvcmQ6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICAvLyByZXR1cm4gcmVjb3JkLnJlY29yZHMgaW5zdGFuY2Ugb2YgR3JvdXBlZFJlY29yZHMgZmFpbHMgdW5kZXIgV2VicGFja1xuICAgICAgICByZXR1cm4gcmVjb3JkLnJlY29yZHMgJiYgcmVjb3JkLnJlY29yZHMubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIGV4cGFuc2lvbiBzdGF0ZSBvZiBhbGwgZ3JvdXAgcm93cyByZWN1cnNpdmVseS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5ncmlkLnRvZ2dsZUFsbEdyb3VwUm93cztcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9nZ2xlQWxsR3JvdXBSb3dzKCkge1xuICAgICAgICB0aGlzLmdyb3VwaW5nRXhwYW5zaW9uU3RhdGUgPSBbXTtcbiAgICAgICAgdGhpcy5ncm91cHNFeHBhbmRlZCA9ICF0aGlzLmdyb3Vwc0V4cGFuZGVkO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBpZiB0aGUgYElneEdyaWRDb21wb25lbnRgIGhhcyBncm91cGFibGUgY29sdW1ucy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgZ3JvdXBhYmxlR3JpZCA9IHRoaXMuZ3JpZC5oYXNHcm91cGFibGVDb2x1bW5zO1xuICAgICAqIGBgYFxuXHQgKiBAbWVtYmVyb2YgSWd4R3JpZENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBoYXNHcm91cGFibGVDb2x1bW5zKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW5MaXN0LnNvbWUoKGNvbCkgPT4gY29sLmdyb3VwYWJsZSAmJiAhY29sLmNvbHVtbkdyb3VwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZXRHcm91cENvbHNWaXNpYmlsaXR5KHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbHVtbkxpc3QgJiYgIXRoaXMuaGFzQ29sdW1uTGF5b3V0cykge1xuICAgICAgICAgICAgdGhpcy5ncm91cGluZ0V4cHJlc3Npb25zLmZvckVhY2goKGV4cHIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSB0aGlzLmdldENvbHVtbkJ5TmFtZShleHByLmZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgY29sLmhpZGRlbiA9IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGlmIHRoZSBncmlkJ3MgZ3JvdXAgYnkgZHJvcCBhcmVhIGlzIHZpc2libGUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGRyb3BWaXNpYmxlID0gdGhpcy5ncmlkLmRyb3BBcmVhVmlzaWJsZTtcbiAgICAgKiBgYGBcblx0ICogQG1lbWJlcm9mIElneEdyaWRDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGRyb3BBcmVhVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmRyYWdnZWRDb2x1bW4gJiYgdGhpcy5kcmFnZ2VkQ29sdW1uLmdyb3VwYWJsZSkgfHxcbiAgICAgICAgICAgICF0aGlzLmNoaXBzR291cGluZ0V4cHJlc3Npb25zLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9nZXRTdGF0ZUZvckdyb3VwUm93KGdyb3VwUm93OiBJR3JvdXBCeVJlY29yZCk6IElHcm91cEJ5RXhwYW5kU3RhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ3JpZEFQSS5ncm91cEJ5X2dldF9leHBhbmRlZF9mb3JfZ3JvdXAoZ3JvdXBSb3cpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX3RvZ2dsZUdyb3VwKGdyb3VwUm93OiBJR3JvdXBCeVJlY29yZCkge1xuICAgICAgICB0aGlzLl9ncmlkQVBJLmdyb3VwQnlfdG9nZ2xlX2dyb3VwKGdyb3VwUm93KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9mdWxseUV4cGFuZEdyb3VwKGdyb3VwUm93OiBJR3JvdXBCeVJlY29yZCkge1xuICAgICAgICB0aGlzLl9ncmlkQVBJLmdyb3VwQnlfZnVsbHlfZXhwYW5kX2dyb3VwKGdyb3VwUm93KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9hcHBseUdyb3VwaW5nKCkge1xuICAgICAgICB0aGlzLl9ncmlkQVBJLnNvcnRfbXVsdGlwbGUodGhpcy5fZ3JvdXBpbmdFeHByZXNzaW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBpc0NvbHVtbkdyb3VwZWQoZmllbGROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBpbmdFeHByZXNzaW9ucy5maW5kKGV4cCA9PiBleHAuZmllbGROYW1lID09PSBmaWVsZE5hbWUpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQGhpZGRlblxuICAgICovXG4gICAgcHVibGljIGdldENvbnRleHQocm93RGF0YSwgcm93SW5kZXgpOiBhbnkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJGltcGxpY2l0OiByb3dEYXRhLFxuICAgICAgICAgICAgaW5kZXg6IHJvd0luZGV4LFxuICAgICAgICAgICAgdGVtcGxhdGVJRDogdGhpcy5pc0dyb3VwQnlSZWNvcmQocm93RGF0YSkgPyAnZ3JvdXBSb3cnIDogdGhpcy5pc1N1bW1hcnlSb3cocm93RGF0YSkgPyAnc3VtbWFyeVJvdycgOiAnZGF0YVJvdydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIHB1YmxpYyBnZXQgdGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlcmVkRGF0YSAmJiB0aGlzLmZpbHRlcmVkRGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVtcHR5R3JpZFRlbXBsYXRlID8gdGhpcy5lbXB0eUdyaWRUZW1wbGF0ZSA6IHRoaXMuZW1wdHlGaWx0ZXJlZEdyaWRUZW1wbGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzTG9hZGluZyAmJiAoIXRoaXMuZGF0YSB8fCB0aGlzLmRhdGFMZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkaW5nR3JpZFRlbXBsYXRlID8gdGhpcy5sb2FkaW5nR3JpZFRlbXBsYXRlIDogdGhpcy5sb2FkaW5nR3JpZERlZmF1bHRUZW1wbGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRhdGFMZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVtcHR5R3JpZFRlbXBsYXRlID8gdGhpcy5lbXB0eUdyaWRUZW1wbGF0ZSA6IHRoaXMuZW1wdHlHcmlkRGVmYXVsdFRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBvbkNoaXBSZW1vdmVkKGV2ZW50OiBJQmFzZUNoaXBFdmVudEFyZ3MpIHtcbiAgICAgICAgdGhpcy5jbGVhckdyb3VwaW5nKGV2ZW50Lm93bmVyLmlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGNoaXBzT3JkZXJDaGFuZ2VkKGV2ZW50OiBJQ2hpcHNBcmVhUmVvcmRlckV2ZW50QXJncykge1xuICAgICAgICBjb25zdCBuZXdHcm91cGluZyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LmNoaXBzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLmdyb3VwaW5nRXhwcmVzc2lvbnMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZmllbGROYW1lID09PSBldmVudC5jaGlwc0FycmF5W2ldLmlkO1xuICAgICAgICAgICAgfSlbMF07XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5nZXRDb2x1bW5CeU5hbWUoZXhwci5maWVsZE5hbWUpLmdyb3VwYWJsZSkge1xuICAgICAgICAgICAgICAgIC8vIGRpc2FsbG93IGNoYW5naW5nIG9yZGVyIGlmIHRoZXJlIGFyZSBjb2x1bW5zIHdpdGggZ3JvdXBhYmxlOiBmYWxzZVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0dyb3VwaW5nLnB1c2goZXhwcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncm91cGluZ0V4cGFuc2lvblN0YXRlID0gW107XG4gICAgICAgIHRoaXMuY2hpcHNHb3VwaW5nRXhwcmVzc2lvbnMgPSBuZXdHcm91cGluZztcblxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgICAgIC8vIFdoZW4gcmVvcmRlcmVkIHVzaW5nIGtleWJvYXJkIG5hdmlnYXRpb24sIHdlIGRvbid0IGhhdmUgYG9uTW92ZUVuZGAgZXZlbnQuXG4gICAgICAgICAgICB0aGlzLmdyb3VwaW5nRXhwcmVzc2lvbnMgPSB0aGlzLmNoaXBzR291cGluZ0V4cHJlc3Npb25zO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBjaGlwc01vdmluZ0VuZGVkKCkge1xuICAgICAgICB0aGlzLmdyb3VwaW5nRXhwcmVzc2lvbnMgPSB0aGlzLmNoaXBzR291cGluZ0V4cHJlc3Npb25zO1xuICAgICAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25DaGlwQ2xpY2tlZChldmVudDogSUNoaXBDbGlja0V2ZW50QXJncykge1xuICAgICAgICBjb25zdCBzb3J0aW5nRXhwciA9IHRoaXMuc29ydGluZ0V4cHJlc3Npb25zO1xuICAgICAgICBjb25zdCBjb2x1bW5FeHByID0gc29ydGluZ0V4cHIuZmluZCgoZXhwcikgPT4gZXhwci5maWVsZE5hbWUgPT09IGV2ZW50Lm93bmVyLmlkKTtcbiAgICAgICAgY29sdW1uRXhwci5kaXIgPSAzIC0gY29sdW1uRXhwci5kaXI7XG4gICAgICAgIHRoaXMuc29ydChjb2x1bW5FeHByKTtcbiAgICAgICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uQ2hpcEtleURvd24oZXZlbnQ6IElDaGlwS2V5RG93bkV2ZW50QXJncykge1xuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudC5rZXkgPT09ICcgJyB8fCBldmVudC5vcmlnaW5hbEV2ZW50LmtleSA9PT0gJ1NwYWNlYmFyJyB8fCBldmVudC5vcmlnaW5hbEV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgY29uc3Qgc29ydGluZ0V4cHIgPSB0aGlzLnNvcnRpbmdFeHByZXNzaW9ucztcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbkV4cHIgPSBzb3J0aW5nRXhwci5maW5kKChleHByKSA9PiBleHByLmZpZWxkTmFtZSA9PT0gZXZlbnQub3duZXIuaWQpO1xuICAgICAgICAgICAgY29sdW1uRXhwci5kaXIgPSAzIC0gY29sdW1uRXhwci5kaXI7XG4gICAgICAgICAgICB0aGlzLnNvcnQoY29sdW1uRXhwcik7XG4gICAgICAgICAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXQgZGVmYXVsdFRhcmdldEJvZHlIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgYWxsSXRlbXMgPSB0aGlzLnRvdGFsSXRlbUNvdW50IHx8IHRoaXMuZGF0YUxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZWRSb3dIZWlnaHQgKiBNYXRoLm1pbih0aGlzLl9kZWZhdWx0VGFyZ2V0UmVjb3JkTnVtYmVyLFxuICAgICAgICAgICAgdGhpcy5wYWdpbmcgPyBNYXRoLm1pbihhbGxJdGVtcywgdGhpcy5wZXJQYWdlKSA6IGFsbEl0ZW1zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldEdyb3VwQXJlYUhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5ncm91cEFyZWEgPyB0aGlzLmdyb3VwQXJlYS5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCA6IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEdldHMgdGhlIGNvbWJpbmVkIHdpZHRoIG9mIHRoZSBjb2x1bW5zIHRoYXQgYXJlIHNwZWNpZmljIHRvIHRoZSBlbmFibGVkIGdyaWQgZmVhdHVyZXMuIFRoZXkgYXJlIGZpeGVkLlxuICAgICAqIFRPRE86IFJlbW92ZSBmb3IgQW5ndWxhciA4LiBDYWxsaW5nIHBhcmVudCBjbGFzcyBnZXR0ZXIgdXNpbmcgc3VwZXIgaXMgbm90IHN1cHBvcnRlZCBmb3Igbm93LlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRGZWF0dXJlQ29sdW1uc1dpZHRoKCkge1xuICAgICAgICBsZXQgd2lkdGggPSBzdXBlci5nZXRGZWF0dXJlQ29sdW1uc1dpZHRoKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ3JvdXBpbmdFeHByZXNzaW9ucy5sZW5ndGggJiYgdGhpcy5oZWFkZXJHcm91cENvbnRhaW5lcikge1xuICAgICAgICAgICAgd2lkdGggKz0gdGhpcy5oZWFkZXJHcm91cENvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2Nyb2xsVG8ocm93OiBhbnkgfCBudW1iZXIsIGNvbHVtbjogYW55IHwgbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmdyb3VwaW5nRXhwcmVzc2lvbnMgJiYgdGhpcy5ncm91cGluZ0V4cHJlc3Npb25zLmxlbmd0aFxuICAgICAgICAgICAgJiYgdHlwZW9mKHJvdykgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBjb25zdCByb3dJbmRleCA9IHRoaXMuZ3JvdXBpbmdSZXN1bHQuaW5kZXhPZihyb3cpO1xuICAgICAgICAgICAgY29uc3QgZ3JvdXBCeVJlY29yZCA9IHRoaXMuZ3JvdXBpbmdNZXRhZGF0YVtyb3dJbmRleF07XG4gICAgICAgICAgICBpZiAoZ3JvdXBCeVJlY29yZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Z1bGx5RXhwYW5kR3JvdXAoZ3JvdXBCeVJlY29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5zY3JvbGxUbyhyb3csIGNvbHVtbiwgdGhpcy5ncm91cGluZ0ZsYXRSZXN1bHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQGhpZGRlblxuICAgICovXG4gICAgcHVibGljIGdldCBkcm9wQXJlYVRlbXBsYXRlUmVzb2x2ZWQoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgICAgIGlmICh0aGlzLmRyb3BBcmVhVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRyb3BBcmVhVGVtcGxhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0RHJvcEFyZWFUZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0R3JvdXBCeUNoaXBUaXRsZShleHByZXNzaW9uOiBJR3JvdXBpbmdFeHByZXNzaW9uKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29sdW1uQnlOYW1lKGV4cHJlc3Npb24uZmllbGROYW1lKS5oZWFkZXIgfHwgZXhwcmVzc2lvbi5maWVsZE5hbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmFsbG93RmlsdGVyaW5nICYmIHRoaXMuaGFzQ29sdW1uTGF5b3V0cykge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJNb2RlID0gRmlsdGVyTW9kZS5leGNlbFN0eWxlRmlsdGVyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdyb3VwVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2dyb3VwUm93VGVtcGxhdGUgPSB0aGlzLmdyb3VwVGVtcGxhdGUudGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIubmdBZnRlckNvbnRlbnRJbml0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaGlkZUdyb3VwZWRDb2x1bW5zICYmIHRoaXMuY29sdW1uTGlzdCAmJiB0aGlzLmdyb3VwaW5nRXhwcmVzc2lvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldEdyb3VwQ29sc1Zpc2liaWxpdHkodGhpcy5oaWRlR3JvdXBlZENvbHVtbnMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NldHVwTmF2aWdhdGlvblNlcnZpY2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgICAgIHRoaXMub25Hcm91cGluZ0RvbmUucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoYXJncykgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbmRFZGl0KHRydWUpO1xuICAgICAgICAgICAgdGhpcy5zdW1tYXJ5U2VydmljZS51cGRhdGVTdW1tYXJ5Q2FjaGUoYXJncyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm5nRG9DaGVjaygpO1xuICAgICAgICBpZiAodGhpcy5ncm91cGluZ0RpZmZlciAmJiB0aGlzLmNvbHVtbkxpc3QgJiYgIXRoaXMuaGFzQ29sdW1uTGF5b3V0cykge1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlcyA9IHRoaXMuZ3JvdXBpbmdEaWZmZXIuZGlmZih0aGlzLmdyb3VwaW5nRXhwcmVzc2lvbnMpO1xuICAgICAgICAgICAgaWYgKGNoYW5nZXMgJiYgdGhpcy5jb2x1bW5MaXN0KSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlcy5mb3JFYWNoQWRkZWRJdGVtKChyZWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sID0gdGhpcy5nZXRDb2x1bW5CeU5hbWUocmVjLml0ZW0uZmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY29sLmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2hhbmdlcy5mb3JFYWNoUmVtb3ZlZEl0ZW0oKHJlYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSB0aGlzLmdldENvbHVtbkJ5TmFtZShyZWMuaXRlbS5maWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBjb2wuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIGdldFNlbGVjdGVkRGF0YShmb3JtYXR0ZXJzID0gZmFsc2UsIGhlYWRlcnMgPSBmYWxzZSk6IGFueVtdIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JvdXBpbmdFeHByZXNzaW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IFtdO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzID0gKHJlY29yZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuZXhwcmVzc2lvbiB8fCByZWNvcmQuc3VtbWFyaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZS5wdXNoKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNvdXJjZS5wdXNoKHJlY29yZCk7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2YuZm9yRWFjaChwcm9jZXNzKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4dHJhY3REYXRhRnJvbVNlbGVjdGlvbihzb3VyY2UsIGZvcm1hdHRlcnMsIGhlYWRlcnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLmdldFNlbGVjdGVkRGF0YShmb3JtYXR0ZXJzLCBoZWFkZXJzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3NldHVwTmF2aWdhdGlvblNlcnZpY2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0NvbHVtbkxheW91dHMpIHtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvbiA9IG5ldyBJZ3hHcmlkTVJMTmF2aWdhdGlvblNlcnZpY2UoKTtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvbi5ncmlkID0gdGhpcztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==