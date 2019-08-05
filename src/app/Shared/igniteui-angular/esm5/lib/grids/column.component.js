/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef, forwardRef } from '@angular/core';
import { DataType } from '../data-operations/data-util';
import { GridBaseAPIService } from './api.service';
import { IgxDateSummaryOperand, IgxNumberSummaryOperand, IgxSummaryOperand } from './summaries/grid-summary';
import { IgxRowComponent } from './row.component';
import { IgxCellEditorTemplateDirective, IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxFilterCellTemplateDirective } from './grid.common';
import { DefaultSortingStrategy } from '../data-operations/sorting-strategy';
import { getNodeSizeViaRange, flatten } from '../core/utils';
import { IgxBooleanFilteringOperand, IgxNumberFilteringOperand, IgxDateFilteringOperand, IgxStringFilteringOperand, IgxFilteringOperand } from '../data-operations/filtering-condition';
import { DeprecateProperty } from '../core/deprecateDecorators';
import { DisplayDensity } from '../core/displayDensity';
/**
 * **Ignite UI for Angular Column** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid.html#columns-configuration)
 *
 * The Ignite UI Column is used within an `igx-grid` element to define what data the column will show. Features such as sorting,
 * filtering & editing are enabled at the column level.  You can also provide a template containing custom content inside
 * the column using `ng-template` which will be used for all cells within the column.
 */
var IgxColumnComponent = /** @class */ (function () {
    function IgxColumnComponent(gridAPI, cdr) {
        this.gridAPI = gridAPI;
        this.cdr = cdr;
        this._filterable = true;
        this._groupable = false;
        /**
         * Sets/gets the `header` value.
         * ```typescript
         * let columnHeader = this.column.header;
         * ```
         * ```html
         * <igx-column [header] = "'ID'"></igx-column>
         * ```
         *
         * \@memberof IgxColumnComponent
         */
        this.header = '';
        /**
         * Sets/gets whether the column is sortable.
         * Default value is `false`.
         * ```typescript
         * let isSortable = this.column.sortable;
         * ```
         * ```html
         * <igx-column [sortable] = "true"></igx-column>
         * ```
         * \@memberof IgxColumnComponent
         */
        this.sortable = false;
        /**
         * Sets/gets whether the column is resizable.
         * Default value is `false`.
         * ```typescript
         * let isResizable = this.column.resizable;
         * ```
         * ```html
         * <igx-column [resizable] = "true"></igx-column>
         * ```
         * \@memberof IgxColumnComponent
         */
        this.resizable = false;
        /**
         * Sets/gets whether the column is movable.
         * Default value is `false`.
         * ```typescript
         * let isMovable = this.column.movable;
         * ```
         * ```html
         * <igx-column [movable] = "true"></igx-column>
         * ```
         * \@memberof IgxColumnComponent
         */
        this.movable = false;
        this._calcWidth = null;
        /**
         * Sets/gets the class selector of the column header.
         * ```typescript
         * let columnHeaderClass = this.column.headerClasses;
         * ```
         * ```html
         * <igx-column [headerClasses] = "'column-header'"></igx-column>
         * ```
         * \@memberof IgxColumnComponent
         */
        this.headerClasses = '';
        /**
         * Sets/gets the class selector of the column group header.
         * ```typescript
         * let columnHeaderClass = this.column.headerGroupClasses;
         * ```
         * ```html
         * <igx-column [headerGroupClasses] = "'column-group-header'"></igx-column>
         * ```
         * \@memberof IgxColumnComponent
         */
        this.headerGroupClasses = '';
        /**
         * Sets/gets whether the column filtering should be case sensitive.
         * Default value is `true`.
         * ```typescript
         * let filteringIgnoreCase = this.column.filteringIgnoreCase;
         * ```
         * ```html
         * <igx-column [filteringIgnoreCase] = "false"></igx-column>
         * ```
         * \@memberof IgxColumnComponent
         */
        this.filteringIgnoreCase = true;
        /**
         * Sets/gets whether the column sorting should be case sensitive.
         * Default value is `true`.
         * ```typescript
         * let sortingIgnoreCase = this.column.sortingIgnoreCase;
         * ```
         * ```html
         * <igx-column [sortingIgnoreCase] = "false"></igx-column>
         * ```
         * \@memberof IgxColumnComponent
         */
        this.sortingIgnoreCase = true;
        /**
         * Sets/gets the data type of the column values.
         * Default value is `string`.
         * ```typescript
         * let columnDataType = this.column.dataType;
         * ```
         * ```html
         * <igx-column [dataType] = "'number'"></igx-column>
         * ```
         * \@memberof IgxColumnComponent
         */
        this.dataType = DataType.String;
        /**
         * Sets/gets whether the column is `searchable`.
         * Default value is `true`.
         * ```typescript
         * let isSearchable =  this.column.searchable';
         * ```
         * ```html
         *  <igx-column [searchable] = "false"></igx-column>
         * ```
         * \@memberof IgxColumnComponent
         */
        this.searchable = true;
        /**
         * Sets/gets the parent column.
         * ```typescript
         * let parentColumn = this.column.parent;
         * ```
         * ```typescript
         * this.column.parent = higherLevelColumn;
         * ```
         * \@memberof IgxColumnComponent
         */
        this.parent = null;
        /**
         * @hidden
         */
        this._pinned = false;
        /**
         * @hidden
         */
        this._summaries = null;
        /**
         * @hidden
         */
        this._filters = null;
        /**
         * @hidden
         */
        this._sortStrategy = DefaultSortingStrategy.instance();
        /**
         * @hidden
         */
        this._hidden = false;
        /**
         * @hidden
         */
        this._disableHiding = false;
        /**
         * @hidden
         */
        this._disablePinning = false;
        /**
         * @hidden
         */
        this._defaultMinWidth = '';
        /**
         * @hidden
         */
        this._hasSummary = false;
        this._vIndex = NaN;
    }
    Object.defineProperty(IgxColumnComponent.prototype, "groupable", {
        /**
         * Sets/gets whether the column is groupable.
         * Default value is `false`.
         * ```typescript
         * let isGroupable = this.column.groupable;
         * ```
         * ```html
         * <igx-column [groupable] = "true"></igx-column>
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Sets/gets whether the column is groupable.
         * Default value is `false`.
         * ```typescript
         * let isGroupable = this.column.groupable;
         * ```
         * ```html
         * <igx-column [groupable] = "true"></igx-column>
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            return this._groupable;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._groupable = val;
            if (this.grid) {
                this.grid.cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "editable", {
        /**
         * Gets whether the column is editable.
         * Default value is `false`.
         * ```typescript
         * let isEditable = this.column.editable;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Gets whether the column is editable.
         * Default value is `false`.
         * ```typescript
         * let isEditable = this.column.editable;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            // Updating the primary key when grid has transactions (incl. row edit)
            // should not be allowed, as that can corrupt transaction state.
            /** @type {?} */
            var rowEditable = this.grid && this.grid.rowEditable;
            /** @type {?} */
            var hasTransactions = this.grid && this.grid.transactions.enabled;
            if (this.isPrimaryColumn && (rowEditable || hasTransactions)) {
                return false;
            }
            if (this._editable !== undefined) {
                return this._editable;
            }
            else {
                return rowEditable;
            }
        },
        /**
         * Sets whether the column is editable.
         * ```typescript
         * this.column.editable = true;
         * ```
         * ```html
         * <igx-column [editable] = "true"></igx-column>
         * ```
         * @memberof IgxColumnComponent
         */
        set: /**
         * Sets whether the column is editable.
         * ```typescript
         * this.column.editable = true;
         * ```
         * ```html
         * <igx-column [editable] = "true"></igx-column>
         * ```
         * \@memberof IgxColumnComponent
         * @param {?} editable
         * @return {?}
         */
        function (editable) {
            this._editable = editable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "filterable", {
        /**
         * Sets/gets whether the column is filterable.
         * Default value is `true`.
         * ```typescript
         * let isFilterable = this.column.filterable;
         * ```
         * ```html
         * <igx-column [filterable] = "false"></igx-column>
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Sets/gets whether the column is filterable.
         * Default value is `true`.
         * ```typescript
         * let isFilterable = this.column.filterable;
         * ```
         * ```html
         * <igx-column [filterable] = "false"></igx-column>
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            return this._filterable;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._filterable = val;
            if (this.grid) {
                this.grid.cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "hasSummary", {
        /**
         * Gets a value indicating whether the summary for the column is enabled.
         * ```typescript
         * let hasSummary = this.column.hasSummary;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Gets a value indicating whether the summary for the column is enabled.
         * ```typescript
         * let hasSummary = this.column.hasSummary;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            return this._hasSummary;
        },
        /**
         * Sets a value indicating whether the summary for the column is enabled.
         * Default value is `false`.
         * ```html
         * <igx-column [hasSummary] = "true"></igx-column>
         * ```
         * @memberof IgxColumnComponent
         */
        set: /**
         * Sets a value indicating whether the summary for the column is enabled.
         * Default value is `false`.
         * ```html
         * <igx-column [hasSummary] = "true"></igx-column>
         * ```
         * \@memberof IgxColumnComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasSummary = value;
            if (this.grid) {
                this.grid.summaryService.recalculateSummaries();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "hidden", {
        /**
         * Gets whether the column is hidden.
         * ```typescript
         * let isHidden = this.column.hidden;
         * ```
         *@memberof IgxColumnComponent
         */
        get: /**
         * Gets whether the column is hidden.
         * ```typescript
         * let isHidden = this.column.hidden;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            return this._hidden;
        },
        /**
         * Sets the column hidden property.
         * Default value is `false`.
         * ```typescript
         * <igx-column [hidden] = "true"></igx-column>
         * ```
         * @memberof IgxColumnComponent
         */
        set: /**
         * Sets the column hidden property.
         * Default value is `false`.
         * ```typescript
         * <igx-column [hidden] = "true"></igx-column>
         * ```
         * \@memberof IgxColumnComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._hidden !== value) {
                this._hidden = value;
                if (this.grid) {
                    this.grid.resetCaches();
                    this.grid.endEdit(false);
                }
                // TODO: Simplify
                this.check();
                if (this.grid) {
                    this.grid.refreshSearch(true);
                    this.grid.summaryService.resetSummaryHeight();
                    this.grid.reflow();
                    this.grid.filteringService.refreshExpressions();
                }
                if (this.columnLayoutChild && this.parent.hidden !== value) {
                    this.parent.hidden = value;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "disableHiding", {
        /**
         * Gets whether the hiding is disabled.
         * ```typescript
         * let isHidingDisabled =  this.column.disableHiding;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Gets whether the hiding is disabled.
         * ```typescript
         * let isHidingDisabled =  this.column.disableHiding;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            return this._disableHiding;
        },
        /**
         * Enables/disables hiding for the column.
         * Default value is `false`.
         * ```typescript
         * <igx-column [hidden] = "true"></igx-column>
         * ```
         * @memberof IgxColumnComponent
         */
        set: /**
         * Enables/disables hiding for the column.
         * Default value is `false`.
         * ```typescript
         * <igx-column [hidden] = "true"></igx-column>
         * ```
         * \@memberof IgxColumnComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._disableHiding !== value) {
                this._disableHiding = value;
                this.check();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "disablePinning", {
        /**
         * Gets whether the pinning is disabled.
         * ```typescript
         * let isPinningDisabled =  this.column.disablePinning;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Gets whether the pinning is disabled.
         * ```typescript
         * let isPinningDisabled =  this.column.disablePinning;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            return this._disablePinning;
        },
        /**
         * Enables/disables pinning for the column.
         * Default value is `false`.
         * ```typescript
         * <igx-column [pinned] = "true"></igx-column>
         * ```
         * @memberof IgxColumnComponent
         */
        set: /**
         * Enables/disables pinning for the column.
         * Default value is `false`.
         * ```typescript
         * <igx-column [pinned] = "true"></igx-column>
         * ```
         * \@memberof IgxColumnComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._disablePinning !== value) {
                this._disablePinning = value;
                this.check();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "width", {
        /**
         * Gets the `width` of the column.
         * ```typescript
         * let columnWidth = this.column.width;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Gets the `width` of the column.
         * ```typescript
         * let columnWidth = this.column.width;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            return this.widthSetByUser ? this._width : this.defaultWidth;
        },
        /**
         * Sets the `width` of the column.
         * ```html
         * <igx-column [width] = "'25%'"></igx-column>
         * ```
         * @memberof IgxColumnComponent
         */
        set: /**
         * Sets the `width` of the column.
         * ```html
         * <igx-column [width] = "'25%'"></igx-column>
         * ```
         * \@memberof IgxColumnComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._calcWidth = null;
                this.calcPixelWidth = NaN;
                this.widthSetByUser = true;
                this._width = value;
                if (this.grid) {
                    this.cacheCalcWidth();
                    ((/** @type {?} */ (this.grid)))._derivePossibleWidth();
                    this.grid.cdr.markForCheck();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "calcWidth", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.getCalcWidth();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "minWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return !this._defaultMinWidth ? this.defaultMinWidth : this._defaultMinWidth;
        },
        /**
         * Sets/gets the minimum `width` of the column.
         * Default value is `88`;
         * ```typescript
         * let columnMinWidth = this.column.minWidth;
         * ```
         * ```html
         * <igx-column [minWidth] = "'15%'"></igx-column>
         * ```
         * @memberof IgxColumnComponent
         */
        set: /**
         * Sets/gets the minimum `width` of the column.
         * Default value is `88`;
         * ```typescript
         * let columnMinWidth = this.column.minWidth;
         * ```
         * ```html
         * <igx-column [minWidth] = "'15%'"></igx-column>
         * ```
         * \@memberof IgxColumnComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var minVal = parseFloat(value);
            if (Number.isNaN(minVal)) {
                return;
            }
            this._defaultMinWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "index", {
        /**
         * Gets the column index.
         * ```typescript
         * let columnIndex = this.column.index;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Gets the column index.
         * ```typescript
         * let columnIndex = this.column.index;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            return this.grid.columns.indexOf(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "pinned", {
        /**
         * Gets whether the column is `pinned`.
         * ```typescript
         * let isPinned = this.column.pinned;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Gets whether the column is `pinned`.
         * ```typescript
         * let isPinned = this.column.pinned;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            return this._pinned;
        },
        /**
         * Sets whether the column is pinned.
         * Default value is `false`.
         * ```html
         * <igx-column [pinned] = "true"></igx-column>
         * ```
         * @memberof IgxColumnComponent
         */
        set: /**
         * Sets whether the column is pinned.
         * Default value is `false`.
         * ```html
         * <igx-column [pinned] = "true"></igx-column>
         * ```
         * \@memberof IgxColumnComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._pinned !== value) {
                if (this.grid && this.width && !isNaN(parseInt(this.width, 10))) {
                    value ? this.pin() : this.unpin();
                    return;
                }
                /* No grid/width available at initialization. `initPinning` in the grid
                   will re-init the group (if present)
                */
                this._pinned = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "summaries", {
        /**
         * Gets the column `summaries`.
         * ```typescript
         * let columnSummaries = this.column.summaries;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Gets the column `summaries`.
         * ```typescript
         * let columnSummaries = this.column.summaries;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            return this._summaries;
        },
        /**
         * Sets the column `summaries`.
         * ```typescript
         * this.column.summaries = IgxNumberSummaryOperand;
         * ```
         * @memberof IgxColumnComponent
         */
        set: /**
         * Sets the column `summaries`.
         * ```typescript
         * this.column.summaries = IgxNumberSummaryOperand;
         * ```
         * \@memberof IgxColumnComponent
         * @param {?} classRef
         * @return {?}
         */
        function (classRef) {
            this._summaries = new classRef();
            if (this.grid) {
                this.grid.summaryService.removeSummariesCachePerColumn(this.field);
                ((/** @type {?} */ (this.grid)))._summaryPipeTrigger++;
                this.grid.summaryService.recalculateSummaries();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "filters", {
        /**
         * Gets the column `filters`.
         * ```typescript
         * let columnFilters = this.column.filters'
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Gets the column `filters`.
         * ```typescript
         * let columnFilters = this.column.filters'
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            return this._filters;
        },
        /**
         * Sets the column `filters`.
         * ```typescript
         * this.column.filters = IgxBooleanFilteringOperand.instance().
         * ```
         * @memberof IgxColumnComponent
         */
        set: /**
         * Sets the column `filters`.
         * ```typescript
         * this.column.filters = IgxBooleanFilteringOperand.instance().
         * ```
         * \@memberof IgxColumnComponent
         * @param {?} instance
         * @return {?}
         */
        function (instance) {
            this._filters = instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "sortStrategy", {
        /**
         * Gets the column `sortStrategy`.
         * ```typescript
         * let sortStrategy = this.column.sortStrategy'
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Gets the column `sortStrategy`.
         * ```typescript
         * let sortStrategy = this.column.sortStrategy'
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            return this._sortStrategy;
        },
        /**
         * Sets the column `sortStrategy`.
         * ```typescript
         * this.column.sortStrategy = new CustomSortingStrategy().
         *
         * class CustomSortingStrategy extends SortingStrategy {
         * ...
         * }
         * ```
         * @memberof IgxColumnComponent
         */
        set: /**
         * Sets the column `sortStrategy`.
         * ```typescript
         * this.column.sortStrategy = new CustomSortingStrategy().
         *
         * class CustomSortingStrategy extends SortingStrategy {
         * ...
         * }
         * ```
         * \@memberof IgxColumnComponent
         * @param {?} classRef
         * @return {?}
         */
        function (classRef) {
            this._sortStrategy = classRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "groupingComparer", {
        /**
        * Gets the function that compares values for grouping.
        * ```typescript
        * let groupingComparer = this.column.groupingComparer'
        * ```
        * @memberof IgxColumnComponent
        */
        get: /**
         * Gets the function that compares values for grouping.
         * ```typescript
         * let groupingComparer = this.column.groupingComparer'
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            return this._groupingComparer;
        },
        /**
         * Sets a custom function to compare values for grouping.
         * Subsequent values in the sorted data that the function returns 0 for are grouped.
         * ```typescript
         * this.column.groupingComparer = (a: any, b: any) => { return a === b ? 0 : -1; }
         * ```
         * @memberof IgxColumnComponent
         */
        set: /**
         * Sets a custom function to compare values for grouping.
         * Subsequent values in the sorted data that the function returns 0 for are grouped.
         * ```typescript
         * this.column.groupingComparer = (a: any, b: any) => { return a === b ? 0 : -1; }
         * ```
         * \@memberof IgxColumnComponent
         * @param {?} funcRef
         * @return {?}
         */
        function (funcRef) {
            this._groupingComparer = funcRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "defaultMinWidth", {
        /**
         * Gets the default minimum `width` of the column.
         * ```typescript
         * let defaultMinWidth =  this.column.defaultMinWidth;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Gets the default minimum `width` of the column.
         * ```typescript
         * let defaultMinWidth =  this.column.defaultMinWidth;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            if (!this.grid) {
                return '80';
            }
            switch (this.grid.displayDensity) {
                case DisplayDensity.cosy:
                    return '64';
                case DisplayDensity.compact:
                    return '56';
                default:
                    return '80';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "bodyTemplate", {
        /**
         * Returns a reference to the `bodyTemplate`.
         * ```typescript
         * let bodyTemplate = this.column.bodyTemplate;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Returns a reference to the `bodyTemplate`.
         * ```typescript
         * let bodyTemplate = this.column.bodyTemplate;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            return this._bodyTemplate;
        },
        /**
         * Sets the body template.
         * ```html
         * <ng-template #bodyTemplate igxCell let-val>
         *    <div style = "background-color: yellowgreen" (click) = "changeColor(val)">
         *       <span> {{val}} </span>
         *    </div>
         * </ng-template>
         * ```
         * ```typescript
         * @ViewChild("'bodyTemplate'", {read: TemplateRef })
         * public bodyTemplate: TemplateRef<any>;
         * this.column.bodyTemplate = this.bodyTemplate;
         * ```
         * @memberof IgxColumnComponent
         */
        set: /**
         * Sets the body template.
         * ```html
         * <ng-template #bodyTemplate igxCell let-val>
         *    <div style = "background-color: yellowgreen" (click) = "changeColor(val)">
         *       <span> {{val}} </span>
         *    </div>
         * </ng-template>
         * ```
         * ```typescript
         * \@ViewChild("'bodyTemplate'", {read: TemplateRef })
         * public bodyTemplate: TemplateRef<any>;
         * this.column.bodyTemplate = this.bodyTemplate;
         * ```
         * \@memberof IgxColumnComponent
         * @param {?} template
         * @return {?}
         */
        function (template) {
            this._bodyTemplate = template;
            if (this.grid) {
                this.grid.cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "headerTemplate", {
        /**
         * Returns a reference to the header template.
         * ```typescript
         * let headerTemplate = this.column.headerTemplate;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Returns a reference to the header template.
         * ```typescript
         * let headerTemplate = this.column.headerTemplate;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            return this._headerTemplate;
        },
        /**
         * Sets the header template.
         * Note that the column header height is fixed and any content bigger than it will be cut off.
         * ```html
         * <ng-template #headerTemplate>
         *   <div style = "background-color:black" (click) = "changeColor(val)">
         *       <span style="color:red" >{{column.field}}</span>
         *   </div>
         * </ng-template>
         * ```
         * ```typescript
         * @ViewChild("'headerTemplate'", {read: TemplateRef })
         * public headerTemplate: TemplateRef<any>;
         * this.column.headerTemplate = this.headerTemplate;
         * ```
         * @memberof IgxColumnComponent
         */
        set: /**
         * Sets the header template.
         * Note that the column header height is fixed and any content bigger than it will be cut off.
         * ```html
         * <ng-template #headerTemplate>
         *   <div style = "background-color:black" (click) = "changeColor(val)">
         *       <span style="color:red" >{{column.field}}</span>
         *   </div>
         * </ng-template>
         * ```
         * ```typescript
         * \@ViewChild("'headerTemplate'", {read: TemplateRef })
         * public headerTemplate: TemplateRef<any>;
         * this.column.headerTemplate = this.headerTemplate;
         * ```
         * \@memberof IgxColumnComponent
         * @param {?} template
         * @return {?}
         */
        function (template) {
            this._headerTemplate = template;
            if (this.grid) {
                this.grid.cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "inlineEditorTemplate", {
        /**
         * Returns a reference to the inline editor template.
         * ```typescript
         * let inlineEditorTemplate = this.column.inlineEditorTemplate;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Returns a reference to the inline editor template.
         * ```typescript
         * let inlineEditorTemplate = this.column.inlineEditorTemplate;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            return this._inlineEditorTemplate;
        },
        /**
         * Sets the inline editor template.
         * ```html
         * <ng-template #inlineEditorTemplate igxCellEditor let-cell="cell">
         *     <input type="string" [(ngModel)]="cell.value"/>
         * </ng-template>
         * ```
         * ```typescript
         * @ViewChild("'inlineEditorTemplate'", {read: TemplateRef })
         * public inlineEditorTemplate: TemplateRef<any>;
         * this.column.inlineEditorTemplate = this.inlineEditorTemplate;
         * ```
         * @memberof IgxColumnComponent
         */
        set: /**
         * Sets the inline editor template.
         * ```html
         * <ng-template #inlineEditorTemplate igxCellEditor let-cell="cell">
         *     <input type="string" [(ngModel)]="cell.value"/>
         * </ng-template>
         * ```
         * ```typescript
         * \@ViewChild("'inlineEditorTemplate'", {read: TemplateRef })
         * public inlineEditorTemplate: TemplateRef<any>;
         * this.column.inlineEditorTemplate = this.inlineEditorTemplate;
         * ```
         * \@memberof IgxColumnComponent
         * @param {?} template
         * @return {?}
         */
        function (template) {
            this._inlineEditorTemplate = template;
            if (this.grid) {
                this.grid.cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "filterCellTemplate", {
        /**
         * Returns a reference to the `filterCellTemplate`.
         * ```typescript
         * let filterCellTemplate = this.column.filterCellTemplate;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Returns a reference to the `filterCellTemplate`.
         * ```typescript
         * let filterCellTemplate = this.column.filterCellTemplate;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            return this._filterCellTemplate;
        },
        /**
         * Sets the quick filter template.
         * ```html
         * <ng-template #filterCellTemplate IgxFilterCellTemplate let-column="column">
         *    <input (input)="onInput()">
         * </ng-template>
         * ```
         * ```typescript
         * @ViewChild("'filterCellTemplate'", {read: TemplateRef })
         * public filterCellTemplate: TemplateRef<any>;
         * this.column.filterCellTemplate = this.filterCellTemplate;
         * ```
         * @memberof IgxColumnComponent
         */
        set: /**
         * Sets the quick filter template.
         * ```html
         * <ng-template #filterCellTemplate IgxFilterCellTemplate let-column="column">
         *    <input (input)="onInput()">
         * </ng-template>
         * ```
         * ```typescript
         * \@ViewChild("'filterCellTemplate'", {read: TemplateRef })
         * public filterCellTemplate: TemplateRef<any>;
         * this.column.filterCellTemplate = this.filterCellTemplate;
         * ```
         * \@memberof IgxColumnComponent
         * @param {?} template
         * @return {?}
         */
        function (template) {
            this._filterCellTemplate = template;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "cells", {
        /**
         * Gets the cells of the column.
         * ```typescript
         * let columnCells =  this.column.cells;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Gets the cells of the column.
         * ```typescript
         * let columnCells =  this.column.cells;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            var _this = this;
            return this.grid.rowList.filter(function (row) { return row instanceof IgxRowComponent; })
                .map(function (row) {
                if (row.cells) {
                    return row.cells.filter(function (cell) { return cell.columnIndex === _this.index; });
                }
            }).reduce(function (a, b) { return a.concat(b); }, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "visibleIndex", {
        /**
         * Gets the column visible index.
         * If the column is not visible, returns `-1`.
         * ```typescript
         * let visibleColumnIndex =  this.column.visibleIndex;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Gets the column visible index.
         * If the column is not visible, returns `-1`.
         * ```typescript
         * let visibleColumnIndex =  this.column.visibleIndex;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            var _this = this;
            if (!isNaN(this._vIndex)) {
                return this._vIndex;
            }
            /** @type {?} */
            var unpinnedColumns = this.grid.unpinnedColumns.filter(function (c) { return !c.columnGroup; });
            /** @type {?} */
            var pinnedColumns = this.grid.pinnedColumns.filter(function (c) { return !c.columnGroup; });
            /** @type {?} */
            var col = this;
            /** @type {?} */
            var vIndex = -1;
            if (this.columnGroup) {
                col = (/** @type {?} */ (this.allChildren.filter(function (c) { return !c.columnGroup; })[0]));
            }
            if (this.columnLayoutChild) {
                return this.parent.childrenVisibleIndexes.find(function (x) { return x.column === _this; }).index;
            }
            if (!this.pinned) {
                /** @type {?} */
                var indexInCollection = unpinnedColumns.indexOf(col);
                vIndex = indexInCollection === -1 ? -1 : pinnedColumns.length + indexInCollection;
            }
            else {
                vIndex = pinnedColumns.indexOf(col);
            }
            this._vIndex = vIndex;
            return vIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "columnGroup", {
        /**
         * Returns a boolean indicating if the column is a `ColumnGroup`.
         * ```typescript
         * let columnGroup =  this.column.columnGroup;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Returns a boolean indicating if the column is a `ColumnGroup`.
         * ```typescript
         * let columnGroup =  this.column.columnGroup;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "columnLayout", {
        /**
         * Returns a boolean indicating if the column is a `ColumnLayout` for multi-row layout.
         * ```typescript
         * let columnGroup =  this.column.columnGroup;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Returns a boolean indicating if the column is a `ColumnLayout` for multi-row layout.
         * ```typescript
         * let columnGroup =  this.column.columnGroup;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "columnLayoutChild", {
        /**
        * Returns a boolean indicating if the column is a child of a `ColumnLayout` for multi-row layout.
        * ```typescript
        * let columnLayoutChild =  this.column.columnLayoutChild;
        * ```
        * @memberof IgxColumnComponent
        */
        get: /**
         * Returns a boolean indicating if the column is a child of a `ColumnLayout` for multi-row layout.
         * ```typescript
         * let columnLayoutChild =  this.column.columnLayoutChild;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            return this.parent && this.parent.columnLayout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "allChildren", {
        /**
         * Returns the children columns collection.
         * Returns an empty array if the column does not contain children columns.
         * ```typescript
         * let childrenColumns =  this.column.allChildren;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Returns the children columns collection.
         * Returns an empty array if the column does not contain children columns.
         * ```typescript
         * let childrenColumns =  this.column.allChildren;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "level", {
        /**
         * Returns the level of the column in a column group.
         * Returns `0` if the column doesn't have a `parent`.
         * ```typescript
         * let columnLevel =  this.column.level;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Returns the level of the column in a column group.
         * Returns `0` if the column doesn't have a `parent`.
         * ```typescript
         * let columnLevel =  this.column.level;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            /** @type {?} */
            var ptr = this.parent;
            /** @type {?} */
            var lvl = 0;
            while (ptr) {
                lvl++;
                ptr = ptr.parent;
            }
            return lvl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "isLastPinned", {
        get: /**
         * @return {?}
         */
        function () {
            return this.grid.pinnedColumns[this.grid.pinnedColumns.length - 1] === this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "gridRowSpan", {
        get: /**
         * @return {?}
         */
        function () {
            return this.rowEnd && this.rowStart ? this.rowEnd - this.rowStart : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "gridColumnSpan", {
        get: /**
         * @return {?}
         */
        function () {
            return this.colEnd && this.colStart ? this.colEnd - this.colStart : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "filteringExpressionsTree", {
        /**
         * Returns the filteringExpressionsTree of the column.
         * ```typescript
         * let tree =  this.column.filteringExpressionsTree;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Returns the filteringExpressionsTree of the column.
         * ```typescript
         * let tree =  this.column.filteringExpressionsTree;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.grid.filteringExpressionsTree.find(this.field)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "isPrimaryColumn", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @protected
         * @return {?}
         */
        function () {
            return this.field !== undefined && this.grid !== undefined && this.field === this.grid.primaryKey;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     * @internal
     */
    /**
     * @hidden
     * \@internal
     * @return {?}
     */
    IgxColumnComponent.prototype.resetCaches = /**
     * @hidden
     * \@internal
     * @return {?}
     */
    function () {
        this._vIndex = NaN;
        if (this.grid) {
            this.cacheCalcWidth();
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxColumnComponent.prototype.ngAfterContentInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.cellTemplate) {
            this._bodyTemplate = this.cellTemplate.template;
        }
        if (this.headTemplate && this.headTemplate.length) {
            this._headerTemplate = this.headTemplate.toArray()[0].template;
        }
        if (this.editorTemplate) {
            this._inlineEditorTemplate = this.editorTemplate.template;
        }
        if (this.filterCellTemplateDirective) {
            this._filterCellTemplate = this.filterCellTemplateDirective.template;
        }
        if (!this.summaries) {
            switch (this.dataType) {
                case DataType.String:
                case DataType.Boolean:
                    this.summaries = IgxSummaryOperand;
                    break;
                case DataType.Number:
                    this.summaries = IgxNumberSummaryOperand;
                    break;
                case DataType.Date:
                    this.summaries = IgxDateSummaryOperand;
                    break;
                default:
                    this.summaries = IgxSummaryOperand;
                    break;
            }
        }
        if (!this.filters) {
            switch (this.dataType) {
                case DataType.Boolean:
                    this.filters = IgxBooleanFilteringOperand.instance();
                    break;
                case DataType.Number:
                    this.filters = IgxNumberFilteringOperand.instance();
                    break;
                case DataType.Date:
                    this.filters = IgxDateFilteringOperand.instance();
                    break;
                case DataType.String:
                default:
                    this.filters = IgxStringFilteringOperand.instance();
                    break;
            }
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} isRow
     * @param {?} isIE
     * @return {?}
     */
    IgxColumnComponent.prototype.getGridTemplate = /**
     * @hidden
     * @param {?} isRow
     * @param {?} isIE
     * @return {?}
     */
    function (isRow, isIE) {
        if (isRow) {
            /** @type {?} */
            var rowsCount = this.grid.multiRowLayoutRowSize;
            return isIE ?
                "(1fr)[" + rowsCount + "]" :
                "repeat(" + rowsCount + ",1fr)";
        }
        else {
            return this.getColumnSizesString(this.children);
        }
    };
    /**
     * @param {?} children
     * @return {?}
     */
    IgxColumnComponent.prototype.getInitialChildColumnSizes = /**
     * @param {?} children
     * @return {?}
     */
    function (children) {
        var _this = this;
        /** @type {?} */
        var columnSizes = [];
        // find the smallest col spans
        children.forEach(function (col) {
            if (!col.colStart) {
                return;
            }
            /** @type {?} */
            var newWidthSet = col.widthSetByUser && columnSizes[col.colStart - 1] && !columnSizes[col.colStart - 1].widthSetByUser;
            /** @type {?} */
            var newSpanSmaller = columnSizes[col.colStart - 1] && columnSizes[col.colStart - 1].colSpan > col.gridColumnSpan;
            /** @type {?} */
            var bothWidthsSet = col.widthSetByUser && columnSizes[col.colStart - 1] && columnSizes[col.colStart - 1].widthSetByUser;
            /** @type {?} */
            var bothWidthsNotSet = !col.widthSetByUser && columnSizes[col.colStart - 1] && !columnSizes[col.colStart - 1].widthSetByUser;
            if (columnSizes[col.colStart - 1] === undefined) {
                // If nothing is defined yet take any column at first
                // We use colEnd to know where the column actually ends, because not always it starts where we have it set in columnSizes.
                columnSizes[col.colStart - 1] = {
                    ref: col,
                    width: col.widthSetByUser || _this.grid.columnWidthSetByUser ? parseInt(col.calcWidth, 10) : null,
                    colSpan: col.gridColumnSpan,
                    colEnd: col.colStart + col.gridColumnSpan,
                    widthSetByUser: col.widthSetByUser
                };
            }
            else if (newWidthSet || (newSpanSmaller && ((bothWidthsSet) || (bothWidthsNotSet)))) {
                // If a column is set already it should either not have width defined or have width with bigger span than the new one.
                /**
                 *  If replaced column has bigger span, we want to fill the remaining columns
                 *  that the replacing column does not fill with the old one.
                 **/
                if (bothWidthsSet && newSpanSmaller) {
                    // Start from where the new column set would end and apply the old column to the rest depending on how much it spans.
                    // We have not yet replaced it so we can use it directly from the columnSizes collection.
                    // This is where colEnd is used because the colStart of the old column is not actually i + 1.
                    for (var i = col.colStart - 1 + col.gridColumnSpan; i < columnSizes[col.colStart - 1].colEnd - 1; i++) {
                        if (!columnSizes[i] || !columnSizes[i].widthSetByUser) {
                            columnSizes[i] = columnSizes[col.colStart - 1];
                        }
                        else {
                            break;
                        }
                    }
                }
                // Replace the old column with the new one.
                columnSizes[col.colStart - 1] = {
                    ref: col,
                    width: col.widthSetByUser || _this.grid.columnWidthSetByUser ? parseInt(col.calcWidth, 10) : null,
                    colSpan: col.gridColumnSpan,
                    colEnd: col.colStart + col.gridColumnSpan,
                    widthSetByUser: col.widthSetByUser
                };
            }
            else if (bothWidthsSet && columnSizes[col.colStart - 1].colSpan < col.gridColumnSpan) {
                // If the column already in the columnSizes has smaller span, we still need to fill any empty places with the current col.
                // Start from where the smaller column set would end and apply the bigger column to the rest depending on how much it spans.
                // Since here we do not have it in columnSizes we set it as a new column keeping the same colSpan.
                for (var i = col.colStart - 1 + columnSizes[col.colStart - 1].colSpan; i < col.colStart - 1 + col.gridColumnSpan; i++) {
                    if (!columnSizes[i] || !columnSizes[i].widthSetByUser) {
                        columnSizes[i] = {
                            ref: col,
                            width: col.widthSetByUser || _this.grid.columnWidthSetByUser ? parseInt(col.calcWidth, 10) : null,
                            colSpan: col.gridColumnSpan,
                            colEnd: col.colStart + col.gridColumnSpan,
                            widthSetByUser: col.widthSetByUser
                        };
                    }
                    else {
                        break;
                    }
                }
            }
        });
        // Flatten columnSizes so there are not columns with colSpan > 1
        for (var i = 0; i < columnSizes.length; i++) {
            if (columnSizes[i] && columnSizes[i].colSpan > 1) {
                /** @type {?} */
                var j = 1;
                // Replace all empty places depending on how much the current column spans starting from next col.
                for (; j < columnSizes[i].colSpan && i + j + 1 < columnSizes[i].colEnd; j++) {
                    if (columnSizes[i + j] &&
                        ((!columnSizes[i].width && columnSizes[i + j].width) ||
                            (!columnSizes[i].width && !columnSizes[i + j].width && columnSizes[i + j].colSpan <= columnSizes[i].colSpan) ||
                            (!!columnSizes[i + j].width && columnSizes[i + j].colSpan <= columnSizes[i].colSpan))) {
                        // If we reach an already defined column that has width and the current doesn't have or
                        // if the reached column has bigger colSpan we stop.
                        break;
                    }
                    else {
                        /** @type {?} */
                        var width = columnSizes[i].widthSetByUser ?
                            columnSizes[i].width / columnSizes[i].colSpan :
                            columnSizes[i].width;
                        columnSizes[i + j] = {
                            ref: columnSizes[i].ref,
                            width: width,
                            colSpan: 1,
                            colEnd: columnSizes[i].colEnd,
                            widthSetByUser: columnSizes[i].widthSetByUser
                        };
                    }
                }
                // Update the current column width so it is divided between all columns it spans and set it to 1.
                columnSizes[i].width = columnSizes[i].widthSetByUser ?
                    columnSizes[i].width / columnSizes[i].colSpan :
                    columnSizes[i].width;
                columnSizes[i].colSpan = 1;
                // Update the index based on how much we have replaced. Subtract 1 because we started from 1.
                i += j - 1;
            }
        }
        return columnSizes;
    };
    /**
     * @param {?} children
     * @return {?}
     */
    IgxColumnComponent.prototype.getFilledChildColumnSizes = /**
     * @param {?} children
     * @return {?}
     */
    function (children) {
        /** @type {?} */
        var columnSizes = this.getInitialChildColumnSizes(children);
        // fill the gaps if there are any
        /** @type {?} */
        var result = [];
        for (var i = 0; i < columnSizes.length; i++) {
            if (columnSizes[i] && !!columnSizes[i].width) {
                result.push(columnSizes[i].width + 'px');
            }
            else {
                result.push(parseInt(this.grid.getPossibleColumnWidth(), 10) + 'px');
            }
        }
        return result;
    };
    /**
     * @protected
     * @param {?} children
     * @return {?}
     */
    IgxColumnComponent.prototype.getColumnSizesString = /**
     * @protected
     * @param {?} children
     * @return {?}
     */
    function (children) {
        /** @type {?} */
        var res = this.getFilledChildColumnSizes(children);
        return res.join(' ');
    };
    /**
     * @return {?}
     */
    IgxColumnComponent.prototype.getResizableColUnderEnd = /**
     * @return {?}
     */
    function () {
        if (this.columnLayout || !this.columnLayoutChild || this.columnGroup) {
            return [{ target: this, spanUsed: 1 }];
        }
        /** @type {?} */
        var columnSized = this.getInitialChildColumnSizes(this.parent.children);
        /** @type {?} */
        var targets = [];
        /** @type {?} */
        var colEnd = this.colEnd ? this.colEnd : this.colStart + 1;
        for (var i = 0; i < columnSized.length; i++) {
            if (this.colStart <= i + 1 && i + 1 < colEnd) {
                targets.push({ target: columnSized[i].ref, spanUsed: 1 });
            }
        }
        /** @type {?} */
        var targetsSquashed = [];
        for (var j = 0; j < targets.length; j++) {
            if (targetsSquashed.length && targetsSquashed[targetsSquashed.length - 1].target.field === targets[j].target.field) {
                targetsSquashed[targetsSquashed.length - 1].spanUsed++;
            }
            else {
                targetsSquashed.push(targets[j]);
            }
        }
        return targetsSquashed;
    };
    /**
     * Pins the column at the provided index in the pinned area. Defaults to index `0` if not provided.
     * Returns `true` if the column is successfully pinned. Returns `false` if the column cannot be pinned.
     * Column cannot be pinned if:
     * - Is already pinned
     * - index argument is out of range
     * - The pinned area exceeds 80% of the grid width
     * ```typescript
     * let success = this.column.pin();
     * ```
     * @memberof IgxColumnComponent
     */
    /**
     * Pins the column at the provided index in the pinned area. Defaults to index `0` if not provided.
     * Returns `true` if the column is successfully pinned. Returns `false` if the column cannot be pinned.
     * Column cannot be pinned if:
     * - Is already pinned
     * - index argument is out of range
     * - The pinned area exceeds 80% of the grid width
     * ```typescript
     * let success = this.column.pin();
     * ```
     * \@memberof IgxColumnComponent
     * @param {?=} index
     * @return {?}
     */
    IgxColumnComponent.prototype.pin = /**
     * Pins the column at the provided index in the pinned area. Defaults to index `0` if not provided.
     * Returns `true` if the column is successfully pinned. Returns `false` if the column cannot be pinned.
     * Column cannot be pinned if:
     * - Is already pinned
     * - index argument is out of range
     * - The pinned area exceeds 80% of the grid width
     * ```typescript
     * let success = this.column.pin();
     * ```
     * \@memberof IgxColumnComponent
     * @param {?=} index
     * @return {?}
     */
    function (index) {
        // TODO: Probably should the return type of the old functions
        // should be moved as a event parameter.
        if (this.grid) {
            this.grid.endEdit(true);
        }
        if (this._pinned) {
            return false;
        }
        if (this.parent && !this.parent.pinned) {
            return this.topLevelParent.pin(index);
        }
        /** @type {?} */
        var grid = ((/** @type {?} */ (this.grid)));
        /** @type {?} */
        var hasIndex = index !== undefined;
        if (hasIndex && (index < 0 || index >= grid.pinnedColumns.length)) {
            return false;
        }
        /** @type {?} */
        var width = parseInt(this.width, 10);
        if (!this.parent && (grid.getUnpinnedWidth(true) - width < grid.unpinnedAreaMinWidth)) {
            return false;
        }
        this._pinned = true;
        this._unpinnedIndex = grid._unpinnedColumns.indexOf(this);
        index = index !== undefined ? index : grid._pinnedColumns.length;
        /** @type {?} */
        var targetColumn = grid._pinnedColumns[index];
        /** @type {?} */
        var args = { column: this, insertAtIndex: index, isPinned: true };
        grid.onColumnPinning.emit(args);
        if (grid._pinnedColumns.indexOf(this) === -1) {
            grid._pinnedColumns.splice(args.insertAtIndex, 0, this);
            if (grid._unpinnedColumns.indexOf(this) !== -1) {
                grid._unpinnedColumns.splice(grid._unpinnedColumns.indexOf(this), 1);
            }
        }
        if (hasIndex) {
            grid._moveColumns(this, targetColumn);
        }
        if (this.columnGroup) {
            this.allChildren.forEach(function (child) { return child.pin(); });
            grid.reinitPinStates();
        }
        grid.resetCaches();
        grid.cdr.detectChanges();
        if (this.columnLayoutChild) {
            this.grid.columns.filter(function (x) { return x.columnLayout; }).forEach(function (x) { return x.populateVisibleIndexes(); });
        }
        this.grid.filteringService.refreshExpressions();
        this.grid.refreshSearch(true);
        return true;
    };
    /**
     * Unpins the column and place it at the provided index in the unpinned area. Defaults to index `0` if not provided.
     * Returns `true` if the column is successfully unpinned. Returns `false` if the column cannot be unpinned.
     * Column cannot be unpinned if:
     * - Is already unpinned
     * - index argument is out of range
     * ```typescript
     * let success = this.column.unpin();
     * ```
     * @memberof IgxColumnComponent
     */
    /**
     * Unpins the column and place it at the provided index in the unpinned area. Defaults to index `0` if not provided.
     * Returns `true` if the column is successfully unpinned. Returns `false` if the column cannot be unpinned.
     * Column cannot be unpinned if:
     * - Is already unpinned
     * - index argument is out of range
     * ```typescript
     * let success = this.column.unpin();
     * ```
     * \@memberof IgxColumnComponent
     * @param {?=} index
     * @return {?}
     */
    IgxColumnComponent.prototype.unpin = /**
     * Unpins the column and place it at the provided index in the unpinned area. Defaults to index `0` if not provided.
     * Returns `true` if the column is successfully unpinned. Returns `false` if the column cannot be unpinned.
     * Column cannot be unpinned if:
     * - Is already unpinned
     * - index argument is out of range
     * ```typescript
     * let success = this.column.unpin();
     * ```
     * \@memberof IgxColumnComponent
     * @param {?=} index
     * @return {?}
     */
    function (index) {
        if (this.grid) {
            this.grid.endEdit(true);
        }
        if (!this._pinned) {
            return false;
        }
        if (this.parent && this.parent.pinned) {
            return this.topLevelParent.unpin(index);
        }
        /** @type {?} */
        var grid = ((/** @type {?} */ (this.grid)));
        /** @type {?} */
        var hasIndex = index !== undefined;
        if (hasIndex && (index < 0 || index >= grid._unpinnedColumns.length)) {
            return false;
        }
        index = (index !== undefined ? index :
            this._unpinnedIndex !== undefined ? this._unpinnedIndex : this.index);
        this._pinned = false;
        /** @type {?} */
        var targetColumn = grid._unpinnedColumns[index];
        grid._unpinnedColumns.splice(index, 0, this);
        if (grid._pinnedColumns.indexOf(this) !== -1) {
            grid._pinnedColumns.splice(grid._pinnedColumns.indexOf(this), 1);
        }
        if (hasIndex) {
            grid._moveColumns(this, targetColumn);
        }
        if (this.columnGroup) {
            this.allChildren.forEach(function (child) { return child.unpin(); });
        }
        grid.reinitPinStates();
        grid.resetCaches();
        /** @type {?} */
        var insertAtIndex = grid._unpinnedColumns.indexOf(this);
        /** @type {?} */
        var args = { column: this, insertAtIndex: insertAtIndex, isPinned: false };
        grid.onColumnPinning.emit(args);
        grid.cdr.detectChanges();
        if (this.columnLayoutChild) {
            this.grid.columns.filter(function (x) { return x.columnLayout; }).forEach(function (x) { return x.populateVisibleIndexes(); });
        }
        this.grid.filteringService.refreshExpressions();
        this.grid.refreshSearch(true);
        return true;
    };
    Object.defineProperty(IgxColumnComponent.prototype, "topLevelParent", {
        /**
         * Returns a reference to the top level parent column.
         * ```typescript
         * let topLevelParent =  this.column.topLevelParent;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Returns a reference to the top level parent column.
         * ```typescript
         * let topLevelParent =  this.column.topLevelParent;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            /** @type {?} */
            var parent = this.parent;
            while (parent && parent.parent) {
                parent = parent.parent;
            }
            return parent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *@hidden
     */
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    IgxColumnComponent.prototype.check = /**
     * @hidden
     * @protected
     * @return {?}
     */
    function () {
        if (this.grid) {
            this.grid.markForCheck();
        }
    };
    Object.defineProperty(IgxColumnComponent.prototype, "headerCell", {
        /**
         * Returns a reference to the header of the column.
         * ```typescript
         * let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
         * let headerCell = column.headerCell;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Returns a reference to the header of the column.
         * ```typescript
         * let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
         * let headerCell = column.headerCell;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            var _this = this;
            return this.grid.headerCellList.find(function (header) { return header.column === _this; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "filterCell", {
        /**
        * Returns a reference to the filter cell of the column.
        * ```typescript
        * let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
        * let filterell = column.filterell;
        * ```
        * @memberof IgxColumnComponent
        */
        get: /**
         * Returns a reference to the filter cell of the column.
         * ```typescript
         * let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
         * let filterell = column.filterell;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            var _this = this;
            return this.grid.filterCellList.find(function (filterCell) { return filterCell.column === _this; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnComponent.prototype, "headerGroup", {
        /**
         * Returns a reference to the header group of the column.
         * @memberof IgxColumnComponent
         */
        get: /**
         * Returns a reference to the header group of the column.
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            var _this = this;
            return this.grid.headerGroupsList.find(function (headerGroup) { return headerGroup.column === _this; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Autosize the column to the longest currently visible cell value, including the header cell.
     * ```typescript
     * @ViewChild('grid') grid: IgxGridComponent;
     *
     * let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
     * column.autosize();
     * ```
     * @memberof IgxColumnComponent
     */
    /**
     * Autosize the column to the longest currently visible cell value, including the header cell.
     * ```typescript
     * \@ViewChild('grid') grid: IgxGridComponent;
     *
     * let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
     * column.autosize();
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    IgxColumnComponent.prototype.autosize = /**
     * Autosize the column to the longest currently visible cell value, including the header cell.
     * ```typescript
     * \@ViewChild('grid') grid: IgxGridComponent;
     *
     * let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
     * column.autosize();
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    function () {
        if (!this.columnGroup) {
            this.width = this.getLargestCellWidth();
            this.grid.markForCheck();
            this.grid.reflow();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxColumnComponent.prototype.getCalcWidth = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this._calcWidth !== null && !isNaN(this.calcPixelWidth)) {
            return this._calcWidth;
        }
        this.cacheCalcWidth();
        return this._calcWidth;
    };
    /**
     * @hidden
     * Returns the size (in pixels) of the longest currently visible cell, including the header cell.
     * ```typescript
     * @ViewChild('grid') grid: IgxGridComponent;
     *
     * let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
     * let size = column.getLargestCellWidth();
     * ```
     * @memberof IgxColumnComponent
     */
    /**
     * @hidden
     * Returns the size (in pixels) of the longest currently visible cell, including the header cell.
     * ```typescript
     * \@ViewChild('grid') grid: IgxGridComponent;
     *
     * let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
     * let size = column.getLargestCellWidth();
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    IgxColumnComponent.prototype.getLargestCellWidth = /**
     * @hidden
     * Returns the size (in pixels) of the longest currently visible cell, including the header cell.
     * ```typescript
     * \@ViewChild('grid') grid: IgxGridComponent;
     *
     * let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
     * let size = column.getLargestCellWidth();
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    function () {
        /** @type {?} */
        var range = this.grid.document.createRange();
        /** @type {?} */
        var largest = new Map();
        if (this.cells.length > 0) {
            /** @type {?} */
            var cellsContentWidths_1 = [];
            if (this.cells[0].nativeElement.children.length > 0) {
                this.cells.forEach(function (cell) { return cellsContentWidths_1.push(cell.calculateSizeToFit(range)); });
            }
            else {
                cellsContentWidths_1 = this.cells.map(function (cell) { return getNodeSizeViaRange(range, cell.nativeElement); });
            }
            /** @type {?} */
            var index = cellsContentWidths_1.indexOf(Math.max.apply(Math, tslib_1.__spread(cellsContentWidths_1)));
            /** @type {?} */
            var cellStyle = this.grid.document.defaultView.getComputedStyle(this.cells[index].nativeElement);
            /** @type {?} */
            var cellPadding = parseFloat(cellStyle.paddingLeft) + parseFloat(cellStyle.paddingRight) +
                parseFloat(cellStyle.borderRightWidth);
            largest.set(Math.max.apply(Math, tslib_1.__spread(cellsContentWidths_1)), cellPadding);
        }
        if (this.headerCell) {
            /** @type {?} */
            var headerCell = void 0;
            if (this.headerTemplate && this.headerCell.elementRef.nativeElement.children[0].children.length > 0) {
                headerCell = Math.max.apply(Math, tslib_1.__spread(Array.from(this.headerCell.elementRef.nativeElement.children[0].children)
                    .map(function (child) { return getNodeSizeViaRange(range, child); })));
            }
            else {
                headerCell = getNodeSizeViaRange(range, this.headerCell.elementRef.nativeElement.children[0]);
            }
            if (this.sortable || this.filterable) {
                headerCell += this.headerCell.elementRef.nativeElement.children[1].getBoundingClientRect().width;
            }
            /** @type {?} */
            var headerStyle = this.grid.document.defaultView.getComputedStyle(this.headerCell.elementRef.nativeElement);
            /** @type {?} */
            var headerPadding = parseFloat(headerStyle.paddingLeft) + parseFloat(headerStyle.paddingRight) +
                parseFloat(headerStyle.borderRightWidth);
            largest.set(headerCell, headerPadding);
        }
        /** @type {?} */
        var largestCell = Math.max.apply(Math, tslib_1.__spread(Array.from(largest.keys())));
        /** @type {?} */
        var width = Math.ceil(largestCell + largest.get(largestCell));
        if (Number.isNaN(width)) {
            return this.width;
        }
        else {
            return width + 'px';
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxColumnComponent.prototype.getCellWidth = /**
     * @hidden
     * @return {?}
     */
    function () {
        /** @type {?} */
        var colWidth = this.width;
        /** @type {?} */
        var isPercentageWidth = colWidth && typeof colWidth === 'string' && colWidth.indexOf('%') !== -1;
        if (this.columnLayoutChild) {
            return '';
        }
        if (colWidth && !isPercentageWidth) {
            /** @type {?} */
            var cellWidth = colWidth;
            if (typeof cellWidth !== 'string' || cellWidth.endsWith('px') === false) {
                cellWidth += 'px';
            }
            return cellWidth;
        }
        else {
            return colWidth;
        }
    };
    /**
     * @hidden
     * @internal
     */
    /**
     * @hidden
     * \@internal
     * @protected
     * @return {?}
     */
    IgxColumnComponent.prototype.cacheCalcWidth = /**
     * @hidden
     * \@internal
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var grid = this.gridAPI.grid;
        /** @type {?} */
        var colWidth = this.width;
        /** @type {?} */
        var isPercentageWidth = colWidth && typeof colWidth === 'string' && colWidth.indexOf('%') !== -1;
        if (isPercentageWidth) {
            this._calcWidth = parseInt(colWidth, 10) / 100 * (grid.calcWidth - grid.featureColumnsWidth);
        }
        else if (!colWidth) {
            // no width
            this._calcWidth = this.defaultWidth || grid.getPossibleColumnWidth();
        }
        else {
            this._calcWidth = this.width;
        }
        this.calcPixelWidth = parseInt(this._calcWidth, 10);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxColumnComponent.prototype.populateVisibleIndexes = /**
     * @hidden
     * @return {?}
     */
    function () { };
    IgxColumnComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    selector: 'igx-column',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    IgxColumnComponent.ctorParameters = function () { return [
        { type: GridBaseAPIService },
        { type: ChangeDetectorRef }
    ]; };
    IgxColumnComponent.propDecorators = {
        field: [{ type: Input }],
        header: [{ type: Input }],
        sortable: [{ type: Input }],
        groupable: [{ type: Input }],
        editable: [{ type: Input }],
        filterable: [{ type: Input }],
        resizable: [{ type: Input }],
        hasSummary: [{ type: Input }],
        hidden: [{ type: Input }],
        disableHiding: [{ type: Input }],
        disablePinning: [{ type: Input }],
        movable: [{ type: Input }],
        width: [{ type: Input }],
        maxWidth: [{ type: Input }],
        minWidth: [{ type: Input }],
        headerClasses: [{ type: Input }],
        headerGroupClasses: [{ type: Input }],
        cellClasses: [{ type: Input }],
        formatter: [{ type: Input }],
        filteringIgnoreCase: [{ type: Input }],
        sortingIgnoreCase: [{ type: Input }],
        dataType: [{ type: Input }],
        pinned: [{ type: Input }],
        summaries: [{ type: Input }],
        searchable: [{ type: Input }],
        filters: [{ type: Input }],
        sortStrategy: [{ type: Input }],
        groupingComparer: [{ type: Input }],
        bodyTemplate: [{ type: Input, args: ['cellTemplate',] }],
        headerTemplate: [{ type: Input }],
        inlineEditorTemplate: [{ type: Input, args: ['cellEditorTemplate',] }],
        filterCellTemplate: [{ type: Input, args: ['filterCellTemplate',] }],
        rowEnd: [{ type: Input }],
        colEnd: [{ type: Input }],
        rowStart: [{ type: Input }],
        colStart: [{ type: Input }],
        cellTemplate: [{ type: ContentChild, args: [IgxCellTemplateDirective, { read: IgxCellTemplateDirective, static: true },] }],
        headTemplate: [{ type: ContentChildren, args: [IgxCellHeaderTemplateDirective, { read: IgxCellHeaderTemplateDirective, descendants: false },] }],
        editorTemplate: [{ type: ContentChild, args: [IgxCellEditorTemplateDirective, { read: IgxCellEditorTemplateDirective, static: true },] }],
        filterCellTemplateDirective: [{ type: ContentChild, args: [IgxFilterCellTemplateDirective, { read: IgxFilterCellTemplateDirective, static: true },] }]
    };
    tslib_1.__decorate([
        DeprecateProperty("The property is deprecated. Please, use `column.grid.id` instead."),
        tslib_1.__metadata("design:type", String)
    ], IgxColumnComponent.prototype, "gridID", void 0);
    return IgxColumnComponent;
}());
export { IgxColumnComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxColumnComponent.prototype._filterable;
    /**
     * @type {?}
     * @private
     */
    IgxColumnComponent.prototype._groupable;
    /**
     * Sets/gets the `field` value.
     * ```typescript
     * let columnField = this.column.field;
     * ```
     * ```html
     * <igx-column [field] = "'ID'"></igx-column>
     * ```
     * \@memberof IgxColumnComponent
     * @type {?}
     */
    IgxColumnComponent.prototype.field;
    /**
     * Sets/gets the `header` value.
     * ```typescript
     * let columnHeader = this.column.header;
     * ```
     * ```html
     * <igx-column [header] = "'ID'"></igx-column>
     * ```
     *
     * \@memberof IgxColumnComponent
     * @type {?}
     */
    IgxColumnComponent.prototype.header;
    /**
     * Sets/gets whether the column is sortable.
     * Default value is `false`.
     * ```typescript
     * let isSortable = this.column.sortable;
     * ```
     * ```html
     * <igx-column [sortable] = "true"></igx-column>
     * ```
     * \@memberof IgxColumnComponent
     * @type {?}
     */
    IgxColumnComponent.prototype.sortable;
    /**
     * Sets/gets whether the column is resizable.
     * Default value is `false`.
     * ```typescript
     * let isResizable = this.column.resizable;
     * ```
     * ```html
     * <igx-column [resizable] = "true"></igx-column>
     * ```
     * \@memberof IgxColumnComponent
     * @type {?}
     */
    IgxColumnComponent.prototype.resizable;
    /**
     * Sets/gets whether the column is movable.
     * Default value is `false`.
     * ```typescript
     * let isMovable = this.column.movable;
     * ```
     * ```html
     * <igx-column [movable] = "true"></igx-column>
     * ```
     * \@memberof IgxColumnComponent
     * @type {?}
     */
    IgxColumnComponent.prototype.movable;
    /**
     * @type {?}
     * @private
     */
    IgxColumnComponent.prototype._calcWidth;
    /** @type {?} */
    IgxColumnComponent.prototype.calcPixelWidth;
    /**
     * Sets/gets the maximum `width` of the column.
     * ```typescript
     * let columnMaxWidth = this.column.width;
     * ```
     * ```html
     * <igx-column [maxWidth] = "'75%'"></igx-column>
     * ```
     * \@memberof IgxColumnComponent
     * @type {?}
     */
    IgxColumnComponent.prototype.maxWidth;
    /**
     * Sets/gets the class selector of the column header.
     * ```typescript
     * let columnHeaderClass = this.column.headerClasses;
     * ```
     * ```html
     * <igx-column [headerClasses] = "'column-header'"></igx-column>
     * ```
     * \@memberof IgxColumnComponent
     * @type {?}
     */
    IgxColumnComponent.prototype.headerClasses;
    /**
     * Sets/gets the class selector of the column group header.
     * ```typescript
     * let columnHeaderClass = this.column.headerGroupClasses;
     * ```
     * ```html
     * <igx-column [headerGroupClasses] = "'column-group-header'"></igx-column>
     * ```
     * \@memberof IgxColumnComponent
     * @type {?}
     */
    IgxColumnComponent.prototype.headerGroupClasses;
    /**
     * Sets a conditional class selector of the column cells.
     * Accepts an object literal, containing key-value pairs,
     * where the key is the name of the CSS class, while the
     * value is either a callback function that returns a boolean,
     * or boolean, like so:
     * ```typescript
     * callback = (rowData, columnKey) => { return rowData[columnKey] > 6; }
     * cellClasses = { 'className' : this.callback };
     * ```
     * ```html
     * <igx-column [cellClasses] = "cellClasses"></igx-column>
     * <igx-column [cellClasses] = "{'class1' : true }"></igx-column>
     * ```
     * \@memberof IgxColumnComponent
     * @type {?}
     */
    IgxColumnComponent.prototype.cellClasses;
    /**
     * When autogenerating columns, the formatter is used to format the display of the column data
     * without modifying the underlying bound values.
     *
     * In this example, we check to see if the column name is Salary, and then provide a method as the column formatter
     * to format the value into a currency string.
     *
     * ```typescript
     * onColumnInit(column: IgxColumnComponent) {
     *   if (column.field == "Salary") {
     *     column.formatter = (salary => this.format(salary));
     *   }
     * }
     *
     * format(value: number) : string {
     *   return formatCurrency(value, "en-us", "$");
     * }
     * ```
     * \@memberof IgxColumnComponent
     * @type {?}
     */
    IgxColumnComponent.prototype.formatter;
    /**
     * Sets/gets whether the column filtering should be case sensitive.
     * Default value is `true`.
     * ```typescript
     * let filteringIgnoreCase = this.column.filteringIgnoreCase;
     * ```
     * ```html
     * <igx-column [filteringIgnoreCase] = "false"></igx-column>
     * ```
     * \@memberof IgxColumnComponent
     * @type {?}
     */
    IgxColumnComponent.prototype.filteringIgnoreCase;
    /**
     * Sets/gets whether the column sorting should be case sensitive.
     * Default value is `true`.
     * ```typescript
     * let sortingIgnoreCase = this.column.sortingIgnoreCase;
     * ```
     * ```html
     * <igx-column [sortingIgnoreCase] = "false"></igx-column>
     * ```
     * \@memberof IgxColumnComponent
     * @type {?}
     */
    IgxColumnComponent.prototype.sortingIgnoreCase;
    /**
     * Sets/gets the data type of the column values.
     * Default value is `string`.
     * ```typescript
     * let columnDataType = this.column.dataType;
     * ```
     * ```html
     * <igx-column [dataType] = "'number'"></igx-column>
     * ```
     * \@memberof IgxColumnComponent
     * @type {?}
     */
    IgxColumnComponent.prototype.dataType;
    /**
     * @deprecated
     * Gets/Sets the `id` of the `igx-grid`.
     * ```typescript
     * let columnGridId = this.column.gridID;
     * ```
     * ```typescript
     * this.column.gridID = 'grid-1';
     * ```
     * \@memberof IgxColumnComponent
     * @type {?}
     */
    IgxColumnComponent.prototype.gridID;
    /**
     * Sets/gets whether the column is `searchable`.
     * Default value is `true`.
     * ```typescript
     * let isSearchable =  this.column.searchable';
     * ```
     * ```html
     *  <igx-column [searchable] = "false"></igx-column>
     * ```
     * \@memberof IgxColumnComponent
     * @type {?}
     */
    IgxColumnComponent.prototype.searchable;
    /**
     * The reference to the `igx-grid` owner.
     * ```typescript
     * let gridComponent = this.column.grid;
     * ```
     * \@memberof IgxColumnComponent
     * @type {?}
     */
    IgxColumnComponent.prototype.grid;
    /**
     * Row index where the current field should end.
     * The amount of rows between rowStart and rowEnd will determine the amount of spanning rows to that field
     * ```html
     * <igx-column-layout>
     *   <igx-column [rowEnd]="2" [rowStart]="1" [colStart]="1"></igx-column>
     * </igx-column-layout>
     * ```
     * \@memberof IgxColumnComponent
     * @type {?}
     */
    IgxColumnComponent.prototype.rowEnd;
    /**
     * Column index where the current field should end.
     * The amount of columns between colStart and colEnd will determine the amount of spanning columns to that field
     * ```html
     * <igx-column-layout>
     *   <igx-column [colEnd]="3" [rowStart]="1" [colStart]="1"></igx-column>
     * </igx-column-layout>
     * ```
     * \@memberof IgxColumnComponent
     * @type {?}
     */
    IgxColumnComponent.prototype.colEnd;
    /**
     * Row index from which the field is starting.
     * ```html
     * <igx-column-layout>
     *   <igx-column [rowStart]="1" [colStart]="1"></igx-column>
     * </igx-column-layout>
     * ```
     * \@memberof IgxColumnComponent
     * @type {?}
     */
    IgxColumnComponent.prototype.rowStart;
    /**
     * Column index from which the field is starting.
     * ```html
     * <igx-column-layout>
     *   <igx-column [colStart]="1" [rowStart]="1"></igx-column>
     * </igx-column-layout>
     * ```
     * \@memberof IgxColumnComponent
     * @type {?}
     */
    IgxColumnComponent.prototype.colStart;
    /**
     * hidden
     * @type {?}
     */
    IgxColumnComponent.prototype.defaultWidth;
    /**
     * hidden
     * @type {?}
     */
    IgxColumnComponent.prototype.widthSetByUser;
    /**
     * Sets/gets the parent column.
     * ```typescript
     * let parentColumn = this.column.parent;
     * ```
     * ```typescript
     * this.column.parent = higherLevelColumn;
     * ```
     * \@memberof IgxColumnComponent
     * @type {?}
     */
    IgxColumnComponent.prototype.parent;
    /**
     * Sets/gets the children columns.
     * ```typescript
     * let columnChildren = this.column.children;
     * ```
     * ```typescript
     * this.column.children = childrenColumns;
     * ```
     * \@memberof IgxColumnComponent
     * @type {?}
     */
    IgxColumnComponent.prototype.children;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxColumnComponent.prototype._unpinnedIndex;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxColumnComponent.prototype._pinned;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxColumnComponent.prototype._bodyTemplate;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxColumnComponent.prototype._headerTemplate;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxColumnComponent.prototype._inlineEditorTemplate;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxColumnComponent.prototype._filterCellTemplate;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxColumnComponent.prototype._summaries;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxColumnComponent.prototype._filters;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxColumnComponent.prototype._sortStrategy;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxColumnComponent.prototype._groupingComparer;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxColumnComponent.prototype._hidden;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxColumnComponent.prototype._index;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxColumnComponent.prototype._disableHiding;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxColumnComponent.prototype._disablePinning;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxColumnComponent.prototype._width;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxColumnComponent.prototype._defaultMinWidth;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxColumnComponent.prototype._hasSummary;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxColumnComponent.prototype._editable;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxColumnComponent.prototype.cellTemplate;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxColumnComponent.prototype.headTemplate;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxColumnComponent.prototype.editorTemplate;
    /**
     * @type {?}
     * @protected
     */
    IgxColumnComponent.prototype._vIndex;
    /**
     * @hidden
     * @type {?}
     */
    IgxColumnComponent.prototype.filterCellTemplateDirective;
    /** @type {?} */
    IgxColumnComponent.prototype.gridAPI;
    /** @type {?} */
    IgxColumnComponent.prototype.cdr;
}
var IgxColumnGroupComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxColumnGroupComponent, _super);
    function IgxColumnGroupComponent(gridAPI, cdr) {
        var _this = 
        // D.P. constructor duplication due to es6 compilation, might be obsolete in the future
        _super.call(this, gridAPI, cdr) || this;
        _this.gridAPI = gridAPI;
        _this.cdr = cdr;
        _this.children = new QueryList();
        /**
         * Sets/gets whether the column group is `searchable`.
         * Default value is `true`.
         * ```typescript
         * let isSearchable =  this.columnGroup.searchable;
         * ```
         * ```html
         *  <igx-column-group [searchable] = "false"></igx-column-group>
         * ```
         * \@memberof IgxColumnGroupComponent
         */
        _this.searchable = true;
        return _this;
    }
    Object.defineProperty(IgxColumnGroupComponent.prototype, "summaries", {
        /**
         * Gets the column group `summaries`.
         * ```typescript
         * let columnGroupSummaries = this.columnGroup.summaries;
         * ```
         * @memberof IgxColumnGroupComponent
         */
        get: /**
         * Gets the column group `summaries`.
         * ```typescript
         * let columnGroupSummaries = this.columnGroup.summaries;
         * ```
         * \@memberof IgxColumnGroupComponent
         * @return {?}
         */
        function () {
            return this._summaries;
        },
        /**
         * Sets the column group `summaries`.
         * ```typescript
         * this.columnGroup.summaries = IgxNumberSummaryOperand;
         * ```
         * @memberof IgxColumnGroupComponent
         */
        set: /**
         * Sets the column group `summaries`.
         * ```typescript
         * this.columnGroup.summaries = IgxNumberSummaryOperand;
         * ```
         * \@memberof IgxColumnGroupComponent
         * @param {?} classRef
         * @return {?}
         */
        function (classRef) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnGroupComponent.prototype, "filters", {
        /**
         * Gets the column group `filters`.
         * ```typescript
         * let columnGroupFilters = this.columnGroup.filters;
         * ```
         * @memberof IgxColumnGroupComponent
         */
        get: /**
         * Gets the column group `filters`.
         * ```typescript
         * let columnGroupFilters = this.columnGroup.filters;
         * ```
         * \@memberof IgxColumnGroupComponent
         * @return {?}
         */
        function () {
            return this._filters;
        },
        /**
         * Sets the column group `filters`.
         * ```typescript
         * this.columnGroup.filters = IgxStringFilteringOperand;
         * ```
         * @memberof IgxColumnGroupComponent
         */
        set: /**
         * Sets the column group `filters`.
         * ```typescript
         * this.columnGroup.filters = IgxStringFilteringOperand;
         * ```
         * \@memberof IgxColumnGroupComponent
         * @param {?} classRef
         * @return {?}
         */
        function (classRef) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnGroupComponent.prototype, "bodyTemplate", {
        /**
         * Returns a reference to the body template.
         * ```typescript
         * let bodyTemplate = this.columnGroup.bodyTemplate;
         * ```
         * @memberof IgxColumnGroupComponent
         */
        get: /**
         * Returns a reference to the body template.
         * ```typescript
         * let bodyTemplate = this.columnGroup.bodyTemplate;
         * ```
         * \@memberof IgxColumnGroupComponent
         * @return {?}
         */
        function () {
            return this._bodyTemplate;
        },
        /**
         * @hidden
         */
        set: /**
         * @hidden
         * @param {?} template
         * @return {?}
         */
        function (template) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnGroupComponent.prototype, "inlineEditorTemplate", {
        /**
         * Returns a reference to the inline editor template.
         * ```typescript
         * let inlineEditorTemplate = this.columnGroup.inlineEditorTemplate;
         * ```
         * @memberof IgxColumnGroupComponent
         */
        get: /**
         * Returns a reference to the inline editor template.
         * ```typescript
         * let inlineEditorTemplate = this.columnGroup.inlineEditorTemplate;
         * ```
         * \@memberof IgxColumnGroupComponent
         * @return {?}
         */
        function () {
            return this._inlineEditorTemplate;
        },
        /**
         * @hidden
         */
        set: /**
         * @hidden
         * @param {?} template
         * @return {?}
         */
        function (template) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnGroupComponent.prototype, "cells", {
        /**
         * Gets the column group cells.
         * ```typescript
         * let columnCells = this.columnGroup.cells;
         * ```
         * @memberof IgxColumnGroupComponent
         */
        get: /**
         * Gets the column group cells.
         * ```typescript
         * let columnCells = this.columnGroup.cells;
         * ```
         * \@memberof IgxColumnGroupComponent
         * @return {?}
         */
        function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnGroupComponent.prototype, "hidden", {
        /**
         * Gets whether the column group is hidden.
         * ```typescript
         * let isHidden = this.columnGroup.hidden;
         * ```
         * @memberof IgxColumnGroupComponent
         */
        get: /**
         * Gets whether the column group is hidden.
         * ```typescript
         * let isHidden = this.columnGroup.hidden;
         * ```
         * \@memberof IgxColumnGroupComponent
         * @return {?}
         */
        function () {
            return this.allChildren.every(function (c) { return c.hidden; });
        },
        /**
         * Sets the column group hidden property.
         * ```typescript
         * <igx-column [hidden] = "true"></igx-column>
         * ```
         * @memberof IgxColumnGroupComponent
         */
        set: /**
         * Sets the column group hidden property.
         * ```typescript
         * <igx-column [hidden] = "true"></igx-column>
         * ```
         * \@memberof IgxColumnGroupComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hidden = value;
            this.children.forEach(function (child) { return child.hidden = value; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxColumnGroupComponent.prototype.ngAfterContentInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        /*
            @ContentChildren with descendants still returns the `parent`
            component in the query list.
        */
        if (this.headTemplate && this.headTemplate.length) {
            this._headerTemplate = this.headTemplate.toArray()[0].template;
        }
        this.children.reset(this.children.toArray().slice(1));
        this.children.forEach(function (child) {
            child.parent = _this;
        });
    };
    Object.defineProperty(IgxColumnGroupComponent.prototype, "allChildren", {
        /**
         * Returns the children columns collection.
         * ```typescript
         * let columns =  this.columnGroup.allChildren;
         * ```
         * @memberof IgxColumnGroupComponent
         */
        get: /**
         * Returns the children columns collection.
         * ```typescript
         * let columns =  this.columnGroup.allChildren;
         * ```
         * \@memberof IgxColumnGroupComponent
         * @return {?}
         */
        function () {
            return flatten(this.children.toArray());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnGroupComponent.prototype, "columnGroup", {
        /**
         * Returns a boolean indicating if the column is a `ColumnGroup`.
         * ```typescript
         * let isColumnGroup =  this.columnGroup.columnGroup
         * ```
         * @memberof IgxColumnGroupComponent
         */
        get: /**
         * Returns a boolean indicating if the column is a `ColumnGroup`.
         * ```typescript
         * let isColumnGroup =  this.columnGroup.columnGroup
         * ```
         * \@memberof IgxColumnGroupComponent
         * @return {?}
         */
        function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnGroupComponent.prototype, "columnLayout", {
        /**
         * Returns a boolean indicating if the column is a `ColumnLayout` for multi-row layout.
         * ```typescript
         * let columnGroup =  this.column.columnGroup;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Returns a boolean indicating if the column is a `ColumnLayout` for multi-row layout.
         * ```typescript
         * let columnGroup =  this.column.columnGroup;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnGroupComponent.prototype, "width", {
        /**
         * Gets the width of the column group.
         * ```typescript
         * let columnGroupWidth = this.columnGroup.width;
         * ```
         * @memberof IgxColumnGroupComponent
         */
        get: /**
         * Gets the width of the column group.
         * ```typescript
         * let columnGroupWidth = this.columnGroup.width;
         * ```
         * \@memberof IgxColumnGroupComponent
         * @return {?}
         */
        function () {
            /** @type {?} */
            var isChildrenWidthInPercent = false;
            /** @type {?} */
            var width;
            width = "" + this.children.reduce(function (acc, val) {
                if (val.hidden) {
                    return acc;
                }
                if (typeof val.width === 'string' && val.width.indexOf('%') !== -1) {
                    isChildrenWidthInPercent = true;
                }
                return acc + parseInt(val.width, 10);
            }, 0);
            return isChildrenWidthInPercent ? width + '%' : width;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { },
        enumerable: true,
        configurable: true
    });
    IgxColumnGroupComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: IgxColumnComponent, useExisting: forwardRef(function () { return IgxColumnGroupComponent; }) }],
                    selector: 'igx-column-group',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    IgxColumnGroupComponent.ctorParameters = function () { return [
        { type: GridBaseAPIService },
        { type: ChangeDetectorRef }
    ]; };
    IgxColumnGroupComponent.propDecorators = {
        children: [{ type: ContentChildren, args: [IgxColumnComponent, { read: IgxColumnComponent },] }],
        summaries: [{ type: Input }],
        searchable: [{ type: Input }],
        filters: [{ type: Input }],
        hidden: [{ type: Input }]
    };
    return IgxColumnGroupComponent;
}(IgxColumnComponent));
export { IgxColumnGroupComponent };
if (false) {
    /** @type {?} */
    IgxColumnGroupComponent.prototype.children;
    /**
     * Sets/gets whether the column group is `searchable`.
     * Default value is `true`.
     * ```typescript
     * let isSearchable =  this.columnGroup.searchable;
     * ```
     * ```html
     *  <igx-column-group [searchable] = "false"></igx-column-group>
     * ```
     * \@memberof IgxColumnGroupComponent
     * @type {?}
     */
    IgxColumnGroupComponent.prototype.searchable;
    /** @type {?} */
    IgxColumnGroupComponent.prototype.gridAPI;
    /** @type {?} */
    IgxColumnGroupComponent.prototype.cdr;
}
var IgxColumnLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxColumnLayoutComponent, _super);
    function IgxColumnLayoutComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.childrenVisibleIndexes = [];
        return _this;
    }
    Object.defineProperty(IgxColumnLayoutComponent.prototype, "width", {
        /**
         * Gets the width of the column layout.
         * ```typescript
         * let columnGroupWidth = this.columnGroup.width;
         * ```
         * @memberof IgxColumnGroupComponent
         */
        get: /**
         * Gets the width of the column layout.
         * ```typescript
         * let columnGroupWidth = this.columnGroup.width;
         * ```
         * \@memberof IgxColumnGroupComponent
         * @return {?}
         */
        function () {
            /** @type {?} */
            var width = this.getFilledChildColumnSizes(this.children).reduce(function (acc, val) { return acc + parseInt(val, 10); }, 0);
            return width;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnLayoutComponent.prototype, "columnLayout", {
        get: /**
         * @return {?}
         */
        function () {
            return true;
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
    IgxColumnLayoutComponent.prototype.getCalcWidth = /**
     * @hidden
     * @return {?}
     */
    function () {
        /** @type {?} */
        var borderWidth = 0;
        if (this.headerGroup && this.headerGroup.hasLastPinnedChildColumn) {
            /** @type {?} */
            var headerStyles = this.grid.document.defaultView.getComputedStyle(this.headerGroup.element.nativeElement.children[0]);
            borderWidth = parseInt(headerStyles.borderRightWidth, 10);
        }
        return _super.prototype.getCalcWidth.call(this) + borderWidth;
    };
    Object.defineProperty(IgxColumnLayoutComponent.prototype, "visibleIndex", {
        /**
         * Gets the column visible index.
         * If the column is not visible, returns `-1`.
         * ```typescript
         * let visibleColumnIndex =  this.column.visibleIndex;
         * ```
         * @memberof IgxColumnComponent
         */
        get: /**
         * Gets the column visible index.
         * If the column is not visible, returns `-1`.
         * ```typescript
         * let visibleColumnIndex =  this.column.visibleIndex;
         * ```
         * \@memberof IgxColumnComponent
         * @return {?}
         */
        function () {
            if (!isNaN(this._vIndex)) {
                return this._vIndex;
            }
            /** @type {?} */
            var unpinnedColumns = this.grid.unpinnedColumns.filter(function (c) { return c.columnLayout && !c.hidden; });
            /** @type {?} */
            var pinnedColumns = this.grid.pinnedColumns.filter(function (c) { return c.columnLayout && !c.hidden; });
            /** @type {?} */
            var vIndex = -1;
            if (!this.pinned) {
                /** @type {?} */
                var indexInCollection = unpinnedColumns.indexOf(this);
                vIndex = indexInCollection === -1 ? -1 : pinnedColumns.length + indexInCollection;
            }
            else {
                vIndex = pinnedColumns.indexOf(this);
            }
            this._vIndex = vIndex;
            return vIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnLayoutComponent.prototype, "hidden", {
        /*
         * Gets whether the column layout is hidden.
         * ```typescript
         * let isHidden = this.columnGroup.hidden;
         * ```
         * @memberof IgxColumnGroupComponent
         */
        get: /*
             * Gets whether the column layout is hidden.
             * ```typescript
             * let isHidden = this.columnGroup.hidden;
             * ```
             * @memberof IgxColumnGroupComponent
             */
        /**
         * @return {?}
         */
        function () {
            return this._hidden;
        },
        /**
         * Sets the column layout hidden property.
         * ```typescript
         * <igx-column-layout [hidden] = "true"></igx-column->
         * ```
         * @memberof IgxColumnGroupComponent
         */
        set: /**
         * Sets the column layout hidden property.
         * ```typescript
         * <igx-column-layout [hidden] = "true"></igx-column->
         * ```
         * \@memberof IgxColumnGroupComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hidden = value;
            this.children.forEach(function (child) { return child.hidden = value; });
            if (this.grid && this.grid.columns && this.grid.columns.length > 0) {
                // reset indexes in case columns are hidden/shown runtime
                this.grid.columns.filter(function (x) { return x.columnGroup; }).forEach(function (x) { return x.populateVisibleIndexes(); });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     *@hidden
    */
    /**
     * @hidden
     * @return {?}
     */
    IgxColumnLayoutComponent.prototype.ngAfterContentInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngAfterContentInit.call(this);
        if (!this.hidden) {
            this.hidden = this.allChildren.some(function (x) { return x.hidden; });
        }
        else {
            this.children.forEach(function (child) { return child.hidden = _this.hidden; });
        }
        this.children.forEach(function (child) {
            child.disableHiding = true;
            child.disablePinning = true;
            child.movable = false;
        });
    };
    Object.defineProperty(IgxColumnLayoutComponent.prototype, "hasLastPinnedChildColumn", {
        /*
         * Gets whether the group contains the last pinned child column of the column layout.
         * ```typescript
         * let columsHasLastPinned = this.columnLayout.hasLastPinnedChildColumn;
         * ```
         * @memberof IgxColumnLayoutComponent
         */
        get: /*
             * Gets whether the group contains the last pinned child column of the column layout.
             * ```typescript
             * let columsHasLastPinned = this.columnLayout.hasLastPinnedChildColumn;
             * ```
             * @memberof IgxColumnLayoutComponent
             */
        /**
         * @return {?}
         */
        function () {
            return this.children.some(function (child) { return child.isLastPinned; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     *@hidden
    */
    /**
     * @hidden
     * @return {?}
     */
    IgxColumnLayoutComponent.prototype.populateVisibleIndexes = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        this.childrenVisibleIndexes = [];
        /** @type {?} */
        var grid = this.gridAPI.grid;
        /** @type {?} */
        var columns = grid && grid.pinnedColumns && grid.unpinnedColumns ? grid.pinnedColumns.concat(grid.unpinnedColumns) : [];
        /** @type {?} */
        var orderedCols = columns
            .filter(function (x) { return !x.columnGroup && !x.hidden; })
            .sort(function (a, b) { return a.rowStart - b.rowStart || columns.indexOf(a.parent) - columns.indexOf(b.parent) || a.colStart - b.colStart; });
        this.children.forEach(function (child) {
            /** @type {?} */
            var rs = child.rowStart || 1;
            /** @type {?} */
            var vIndex = 0;
            // filter out all cols with larger rowStart
            /** @type {?} */
            var cols = orderedCols.filter(function (c) {
                return !c.columnGroup && (c.rowStart || 1) <= rs;
            });
            vIndex = cols.indexOf(child);
            _this.childrenVisibleIndexes.push({ column: child, index: vIndex });
        });
    };
    IgxColumnLayoutComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: IgxColumnComponent, useExisting: forwardRef(function () { return IgxColumnLayoutComponent; }) }],
                    selector: 'igx-column-layout',
                    template: ""
                }] }
    ];
    IgxColumnLayoutComponent.propDecorators = {
        hidden: [{ type: Input }]
    };
    return IgxColumnLayoutComponent;
}(IgxColumnGroupComponent));
export { IgxColumnLayoutComponent };
if (false) {
    /** @type {?} */
    IgxColumnLayoutComponent.prototype.childrenVisibleIndexes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvY29sdW1uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFSCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osZUFBZSxFQUNmLEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFVBQVUsRUFFYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzdHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQ0gsOEJBQThCLEVBQzlCLDhCQUE4QixFQUM5Qix3QkFBd0IsRUFDeEIsOEJBQThCLEVBQ2pDLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxzQkFBc0IsRUFBb0IsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFDSCwwQkFBMEIsRUFDMUIseUJBQXlCLEVBQ3pCLHVCQUF1QixFQUN2Qix5QkFBeUIsRUFDekIsbUJBQW1CLEVBQ3RCLE1BQU0sd0NBQXdDLENBQUM7QUFLaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7QUFVeEQ7SUFpakNJLDRCQUFtQixPQUFxRSxFQUFTLEdBQXNCO1FBQXBHLFlBQU8s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R0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQztnQkFDN0IsT0FBQSxDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFBekMsQ0FBeUMsQ0FBQztZQUM5QyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixLQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztRQUNyRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O2dCQS9JSixTQUFTLFNBQUM7b0JBQ1AsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHdCQUF3QixFQUF4QixDQUF3QixDQUFDLEVBQUUsQ0FBQztvQkFDckcsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLEVBQUU7aUJBQ2Y7Ozt5QkFxRUksS0FBSzs7SUF1RVYsK0JBQUM7Q0FBQSxBQWpKRCxDQU04Qyx1QkFBdUIsR0EySXBFO1NBM0lZLHdCQUF3Qjs7O0lBQ2pDLDBEQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnQsXG4gICAgQ29udGVudENoaWxkLFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBJbnB1dCxcbiAgICBRdWVyeUxpc3QsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgZm9yd2FyZFJlZixcbiAgICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi9kYXRhLW9wZXJhdGlvbnMvZGF0YS11dGlsJztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4R3JpZENlbGxDb21wb25lbnQgfSBmcm9tICcuL2NlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IElneERhdGVTdW1tYXJ5T3BlcmFuZCwgSWd4TnVtYmVyU3VtbWFyeU9wZXJhbmQsIElneFN1bW1hcnlPcGVyYW5kIH0gZnJvbSAnLi9zdW1tYXJpZXMvZ3JpZC1zdW1tYXJ5JztcbmltcG9ydCB7IElneFJvd0NvbXBvbmVudCB9IGZyb20gJy4vcm93LmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICAgIElneENlbGxFZGl0b3JUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJZ3hDZWxsSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgSWd4Q2VsbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIElneEZpbHRlckNlbGxUZW1wbGF0ZURpcmVjdGl2ZVxufSBmcm9tICcuL2dyaWQuY29tbW9uJztcbmltcG9ydCB7IElneEdyaWRIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2dyaWQtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWZhdWx0U29ydGluZ1N0cmF0ZWd5LCBJU29ydGluZ1N0cmF0ZWd5IH0gZnJvbSAnLi4vZGF0YS1vcGVyYXRpb25zL3NvcnRpbmctc3RyYXRlZ3knO1xuaW1wb3J0IHsgZ2V0Tm9kZVNpemVWaWFSYW5nZSwgZmxhdHRlbiB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHtcbiAgICBJZ3hCb29sZWFuRmlsdGVyaW5nT3BlcmFuZCxcbiAgICBJZ3hOdW1iZXJGaWx0ZXJpbmdPcGVyYW5kLFxuICAgIElneERhdGVGaWx0ZXJpbmdPcGVyYW5kLFxuICAgIElneFN0cmluZ0ZpbHRlcmluZ09wZXJhbmQsXG4gICAgSWd4RmlsdGVyaW5nT3BlcmFuZFxufSBmcm9tICcuLi9kYXRhLW9wZXJhdGlvbnMvZmlsdGVyaW5nLWNvbmRpdGlvbic7XG5pbXBvcnQgeyBJZ3hHcmlkQmFzZUNvbXBvbmVudCwgSUdyaWREYXRhQmluZGFibGUgfSBmcm9tICcuL2dyaWQtYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlIH0gZnJvbSAnLi4vZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1leHByZXNzaW9ucy10cmVlJztcbmltcG9ydCB7IElneEdyaWRGaWx0ZXJpbmdDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXJpbmcvZ3JpZC1maWx0ZXJpbmctY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4R3JpZEhlYWRlckdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9ncmlkLWhlYWRlci1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVwcmVjYXRlUHJvcGVydHkgfSBmcm9tICcuLi9jb3JlL2RlcHJlY2F0ZURlY29yYXRvcnMnO1xuaW1wb3J0IHsgTVJMQ29sdW1uU2l6ZUluZm8sIE1STFJlc2l6ZUNvbHVtbkluZm8gfSBmcm9tICcuLi9kYXRhLW9wZXJhdGlvbnMvbXVsdGktcm93LWxheW91dC5pbnRlcmZhY2VzJztcbmltcG9ydCB7IERpc3BsYXlEZW5zaXR5IH0gZnJvbSAnLi4vY29yZS9kaXNwbGF5RGVuc2l0eSc7XG5cbi8qKlxuICogKipJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgQ29sdW1uKiogLVxuICogW0RvY3VtZW50YXRpb25dKGh0dHBzOi8vd3d3LmluZnJhZ2lzdGljcy5jb20vcHJvZHVjdHMvaWduaXRlLXVpLWFuZ3VsYXIvYW5ndWxhci9jb21wb25lbnRzL2dyaWQuaHRtbCNjb2x1bW5zLWNvbmZpZ3VyYXRpb24pXG4gKlxuICogVGhlIElnbml0ZSBVSSBDb2x1bW4gaXMgdXNlZCB3aXRoaW4gYW4gYGlneC1ncmlkYCBlbGVtZW50IHRvIGRlZmluZSB3aGF0IGRhdGEgdGhlIGNvbHVtbiB3aWxsIHNob3cuIEZlYXR1cmVzIHN1Y2ggYXMgc29ydGluZyxcbiAqIGZpbHRlcmluZyAmIGVkaXRpbmcgYXJlIGVuYWJsZWQgYXQgdGhlIGNvbHVtbiBsZXZlbC4gIFlvdSBjYW4gYWxzbyBwcm92aWRlIGEgdGVtcGxhdGUgY29udGFpbmluZyBjdXN0b20gY29udGVudCBpbnNpZGVcbiAqIHRoZSBjb2x1bW4gdXNpbmcgYG5nLXRlbXBsYXRlYCB3aGljaCB3aWxsIGJlIHVzZWQgZm9yIGFsbCBjZWxscyB3aXRoaW4gdGhlIGNvbHVtbi5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gICAgc2VsZWN0b3I6ICdpZ3gtY29sdW1uJyxcbiAgICB0ZW1wbGF0ZTogYGBcbn0pXG5leHBvcnQgY2xhc3MgSWd4Q29sdW1uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgcHJpdmF0ZSBfZmlsdGVyYWJsZSA9IHRydWU7XG4gICAgcHJpdmF0ZSBfZ3JvdXBhYmxlID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgZmllbGRgIHZhbHVlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY29sdW1uRmllbGQgPSB0aGlzLmNvbHVtbi5maWVsZDtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb2x1bW4gW2ZpZWxkXSA9IFwiJ0lEJ1wiPjwvaWd4LWNvbHVtbj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZmllbGQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGBoZWFkZXJgIHZhbHVlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY29sdW1uSGVhZGVyID0gdGhpcy5jb2x1bW4uaGVhZGVyO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbHVtbiBbaGVhZGVyXSA9IFwiJ0lEJ1wiPjwvaWd4LWNvbHVtbj5cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBoZWFkZXIgPSAnJztcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgd2hldGhlciB0aGUgY29sdW1uIGlzIHNvcnRhYmxlLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYGZhbHNlYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzU29ydGFibGUgPSB0aGlzLmNvbHVtbi5zb3J0YWJsZTtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb2x1bW4gW3NvcnRhYmxlXSA9IFwidHJ1ZVwiPjwvaWd4LWNvbHVtbj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc29ydGFibGUgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgd2hldGhlciB0aGUgY29sdW1uIGlzIGdyb3VwYWJsZS5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc0dyb3VwYWJsZSA9IHRoaXMuY29sdW1uLmdyb3VwYWJsZTtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb2x1bW4gW2dyb3VwYWJsZV0gPSBcInRydWVcIj48L2lneC1jb2x1bW4+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBncm91cGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ncm91cGFibGU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZ3JvdXBhYmxlKHZhbCkge1xuICAgICAgICB0aGlzLl9ncm91cGFibGUgPSB2YWw7XG4gICAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIHRoZSBjb2x1bW4gaXMgZWRpdGFibGUuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNFZGl0YWJsZSA9IHRoaXMuY29sdW1uLmVkaXRhYmxlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBlZGl0YWJsZSgpOiBib29sZWFuIHtcbiAgICAgICAgLy8gVXBkYXRpbmcgdGhlIHByaW1hcnkga2V5IHdoZW4gZ3JpZCBoYXMgdHJhbnNhY3Rpb25zIChpbmNsLiByb3cgZWRpdClcbiAgICAgICAgLy8gc2hvdWxkIG5vdCBiZSBhbGxvd2VkLCBhcyB0aGF0IGNhbiBjb3JydXB0IHRyYW5zYWN0aW9uIHN0YXRlLlxuICAgICAgICBjb25zdCByb3dFZGl0YWJsZSA9IHRoaXMuZ3JpZCAmJiB0aGlzLmdyaWQucm93RWRpdGFibGU7XG4gICAgICAgIGNvbnN0IGhhc1RyYW5zYWN0aW9ucyA9IHRoaXMuZ3JpZCAmJiB0aGlzLmdyaWQudHJhbnNhY3Rpb25zLmVuYWJsZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNQcmltYXJ5Q29sdW1uICYmIChyb3dFZGl0YWJsZSB8fCBoYXNUcmFuc2FjdGlvbnMpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fZWRpdGFibGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2VkaXRhYmxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJvd0VkaXRhYmxlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgd2hldGhlciB0aGUgY29sdW1uIGlzIGVkaXRhYmxlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmNvbHVtbi5lZGl0YWJsZSA9IHRydWU7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY29sdW1uIFtlZGl0YWJsZV0gPSBcInRydWVcIj48L2lneC1jb2x1bW4+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIHNldCBlZGl0YWJsZShlZGl0YWJsZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9lZGl0YWJsZSA9IGVkaXRhYmxlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgd2hldGhlciB0aGUgY29sdW1uIGlzIGZpbHRlcmFibGUuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgdHJ1ZWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc0ZpbHRlcmFibGUgPSB0aGlzLmNvbHVtbi5maWx0ZXJhYmxlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbHVtbiBbZmlsdGVyYWJsZV0gPSBcImZhbHNlXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgZmlsdGVyYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlcmFibGU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZmlsdGVyYWJsZSh2YWwpIHtcbiAgICAgICAgdGhpcy5fZmlsdGVyYWJsZSA9IHZhbDtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICAgICAgdGhpcy5ncmlkLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgd2hldGhlciB0aGUgY29sdW1uIGlzIHJlc2l6YWJsZS5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc1Jlc2l6YWJsZSA9IHRoaXMuY29sdW1uLnJlc2l6YWJsZTtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb2x1bW4gW3Jlc2l6YWJsZV0gPSBcInRydWVcIj48L2lneC1jb2x1bW4+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJlc2l6YWJsZSA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEdldHMgYSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHN1bW1hcnkgZm9yIHRoZSBjb2x1bW4gaXMgZW5hYmxlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGhhc1N1bW1hcnkgPSB0aGlzLmNvbHVtbi5oYXNTdW1tYXJ5O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBoYXNTdW1tYXJ5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFzU3VtbWFyeTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBhIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgc3VtbWFyeSBmb3IgdGhlIGNvbHVtbiBpcyBlbmFibGVkLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYGZhbHNlYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb2x1bW4gW2hhc1N1bW1hcnldID0gXCJ0cnVlXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBzZXQgaGFzU3VtbWFyeSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9oYXNTdW1tYXJ5ID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICAgICAgdGhpcy5ncmlkLnN1bW1hcnlTZXJ2aWNlLnJlY2FsY3VsYXRlU3VtbWFyaWVzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIHRoZSBjb2x1bW4gaXMgaGlkZGVuLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNIaWRkZW4gPSB0aGlzLmNvbHVtbi5oaWRkZW47XG4gICAgICogYGBgXG4gICAgICpAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgaGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faGlkZGVuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjb2x1bW4gaGlkZGVuIHByb3BlcnR5LlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYGZhbHNlYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogPGlneC1jb2x1bW4gW2hpZGRlbl0gPSBcInRydWVcIj48L2lneC1jb2x1bW4+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIHNldCBoaWRkZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuX2hpZGRlbiAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZGRlbiA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5yZXNldENhY2hlcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5lbmRFZGl0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRPRE86IFNpbXBsaWZ5XG4gICAgICAgICAgICB0aGlzLmNoZWNrKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnJlZnJlc2hTZWFyY2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnN1bW1hcnlTZXJ2aWNlLnJlc2V0U3VtbWFyeUhlaWdodCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5yZWZsb3coKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQuZmlsdGVyaW5nU2VydmljZS5yZWZyZXNoRXhwcmVzc2lvbnMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuY29sdW1uTGF5b3V0Q2hpbGQgJiYgdGhpcy5wYXJlbnQuaGlkZGVuICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmhpZGRlbiA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgd2hldGhlciB0aGUgaGlkaW5nIGlzIGRpc2FibGVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNIaWRpbmdEaXNhYmxlZCA9ICB0aGlzLmNvbHVtbi5kaXNhYmxlSGlkaW5nO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBkaXNhYmxlSGlkaW5nKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZUhpZGluZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5hYmxlcy9kaXNhYmxlcyBoaWRpbmcgZm9yIHRoZSBjb2x1bW4uXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiA8aWd4LWNvbHVtbiBbaGlkZGVuXSA9IFwidHJ1ZVwiPjwvaWd4LWNvbHVtbj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgc2V0IGRpc2FibGVIaWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuX2Rpc2FibGVIaWRpbmcgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kaXNhYmxlSGlkaW5nID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmNoZWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIHRoZSBwaW5uaW5nIGlzIGRpc2FibGVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNQaW5uaW5nRGlzYWJsZWQgPSAgdGhpcy5jb2x1bW4uZGlzYWJsZVBpbm5pbmc7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGRpc2FibGVQaW5uaW5nKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZVBpbm5pbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuYWJsZXMvZGlzYWJsZXMgcGlubmluZyBmb3IgdGhlIGNvbHVtbi5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIDxpZ3gtY29sdW1uIFtwaW5uZWRdID0gXCJ0cnVlXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBzZXQgZGlzYWJsZVBpbm5pbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuX2Rpc2FibGVQaW5uaW5nICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZGlzYWJsZVBpbm5pbmcgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgd2hldGhlciB0aGUgY29sdW1uIGlzIG1vdmFibGUuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNNb3ZhYmxlID0gdGhpcy5jb2x1bW4ubW92YWJsZTtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb2x1bW4gW21vdmFibGVdID0gXCJ0cnVlXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtb3ZhYmxlID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYHdpZHRoYCBvZiB0aGUgY29sdW1uLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY29sdW1uV2lkdGggPSB0aGlzLmNvbHVtbi53aWR0aDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHdpZHRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLndpZHRoU2V0QnlVc2VyID8gdGhpcy5fd2lkdGggOiB0aGlzLmRlZmF1bHRXaWR0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYHdpZHRoYCBvZiB0aGUgY29sdW1uLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbHVtbiBbd2lkdGhdID0gXCInMjUlJ1wiPjwvaWd4LWNvbHVtbj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHNldCB3aWR0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fY2FsY1dpZHRoID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY2FsY1BpeGVsV2lkdGggPSBOYU47XG4gICAgICAgICAgICB0aGlzLndpZHRoU2V0QnlVc2VyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3dpZHRoID0gdmFsdWU7XG4gICAgICAgICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZUNhbGNXaWR0aCgpO1xuICAgICAgICAgICAgICAgICh0aGlzLmdyaWQgYXMgYW55KS5fZGVyaXZlUG9zc2libGVXaWR0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBjYWxjV2lkdGgoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2FsY1dpZHRoKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2FsY1dpZHRoID0gbnVsbDtcbiAgICBwdWJsaWMgY2FsY1BpeGVsV2lkdGg6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgbWF4aW11bSBgd2lkdGhgIG9mIHRoZSBjb2x1bW4uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bW5NYXhXaWR0aCA9IHRoaXMuY29sdW1uLndpZHRoO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbHVtbiBbbWF4V2lkdGhdID0gXCInNzUlJ1wiPjwvaWd4LWNvbHVtbj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWF4V2lkdGg6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIG1pbmltdW0gYHdpZHRoYCBvZiB0aGUgY29sdW1uLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYDg4YDtcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNvbHVtbk1pbldpZHRoID0gdGhpcy5jb2x1bW4ubWluV2lkdGg7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY29sdW1uIFttaW5XaWR0aF0gPSBcIicxNSUnXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgbWluV2lkdGgodmFsdWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBtaW5WYWwgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgaWYgKE51bWJlci5pc05hTihtaW5WYWwpKSB7IHJldHVybjsgfVxuICAgICAgICB0aGlzLl9kZWZhdWx0TWluV2lkdGggPSB2YWx1ZTtcblxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IG1pbldpZHRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAhdGhpcy5fZGVmYXVsdE1pbldpZHRoID8gdGhpcy5kZWZhdWx0TWluV2lkdGggOiB0aGlzLl9kZWZhdWx0TWluV2lkdGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgY2xhc3Mgc2VsZWN0b3Igb2YgdGhlIGNvbHVtbiBoZWFkZXIuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bW5IZWFkZXJDbGFzcyA9IHRoaXMuY29sdW1uLmhlYWRlckNsYXNzZXM7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY29sdW1uIFtoZWFkZXJDbGFzc2VzXSA9IFwiJ2NvbHVtbi1oZWFkZXInXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBoZWFkZXJDbGFzc2VzID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGNsYXNzIHNlbGVjdG9yIG9mIHRoZSBjb2x1bW4gZ3JvdXAgaGVhZGVyLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY29sdW1uSGVhZGVyQ2xhc3MgPSB0aGlzLmNvbHVtbi5oZWFkZXJHcm91cENsYXNzZXM7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY29sdW1uIFtoZWFkZXJHcm91cENsYXNzZXNdID0gXCInY29sdW1uLWdyb3VwLWhlYWRlcidcIj48L2lneC1jb2x1bW4+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGhlYWRlckdyb3VwQ2xhc3NlcyA9ICcnO1xuICAgIC8qKlxuICAgICAqIFNldHMgYSBjb25kaXRpb25hbCBjbGFzcyBzZWxlY3RvciBvZiB0aGUgY29sdW1uIGNlbGxzLlxuICAgICAqIEFjY2VwdHMgYW4gb2JqZWN0IGxpdGVyYWwsIGNvbnRhaW5pbmcga2V5LXZhbHVlIHBhaXJzLFxuICAgICAqIHdoZXJlIHRoZSBrZXkgaXMgdGhlIG5hbWUgb2YgdGhlIENTUyBjbGFzcywgd2hpbGUgdGhlXG4gICAgICogdmFsdWUgaXMgZWl0aGVyIGEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgYm9vbGVhbixcbiAgICAgKiBvciBib29sZWFuLCBsaWtlIHNvOlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjYWxsYmFjayA9IChyb3dEYXRhLCBjb2x1bW5LZXkpID0+IHsgcmV0dXJuIHJvd0RhdGFbY29sdW1uS2V5XSA+IDY7IH1cbiAgICAgKiBjZWxsQ2xhc3NlcyA9IHsgJ2NsYXNzTmFtZScgOiB0aGlzLmNhbGxiYWNrIH07XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY29sdW1uIFtjZWxsQ2xhc3Nlc10gPSBcImNlbGxDbGFzc2VzXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqIDxpZ3gtY29sdW1uIFtjZWxsQ2xhc3Nlc10gPSBcInsnY2xhc3MxJyA6IHRydWUgfVwiPjwvaWd4LWNvbHVtbj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY2VsbENsYXNzZXM6IGFueTtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjb2x1bW4gaW5kZXguXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bW5JbmRleCA9IHRoaXMuY29sdW1uLmluZGV4O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgaW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5jb2x1bW5zLmluZGV4T2YodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoZW4gYXV0b2dlbmVyYXRpbmcgY29sdW1ucywgdGhlIGZvcm1hdHRlciBpcyB1c2VkIHRvIGZvcm1hdCB0aGUgZGlzcGxheSBvZiB0aGUgY29sdW1uIGRhdGFcbiAgICAgKiB3aXRob3V0IG1vZGlmeWluZyB0aGUgdW5kZXJseWluZyBib3VuZCB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBJbiB0aGlzIGV4YW1wbGUsIHdlIGNoZWNrIHRvIHNlZSBpZiB0aGUgY29sdW1uIG5hbWUgaXMgU2FsYXJ5LCBhbmQgdGhlbiBwcm92aWRlIGEgbWV0aG9kIGFzIHRoZSBjb2x1bW4gZm9ybWF0dGVyXG4gICAgICogdG8gZm9ybWF0IHRoZSB2YWx1ZSBpbnRvIGEgY3VycmVuY3kgc3RyaW5nLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIG9uQ29sdW1uSW5pdChjb2x1bW46IElneENvbHVtbkNvbXBvbmVudCkge1xuICAgICAqICAgaWYgKGNvbHVtbi5maWVsZCA9PSBcIlNhbGFyeVwiKSB7XG4gICAgICogICAgIGNvbHVtbi5mb3JtYXR0ZXIgPSAoc2FsYXJ5ID0+IHRoaXMuZm9ybWF0KHNhbGFyeSkpO1xuICAgICAqICAgfVxuICAgICAqIH1cbiAgICAgKlxuICAgICAqIGZvcm1hdCh2YWx1ZTogbnVtYmVyKSA6IHN0cmluZyB7XG4gICAgICogICByZXR1cm4gZm9ybWF0Q3VycmVuY3kodmFsdWUsIFwiZW4tdXNcIiwgXCIkXCIpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBmb3JtYXR0ZXI6ICh2YWx1ZTogYW55KSA9PiBhbnk7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHdoZXRoZXIgdGhlIGNvbHVtbiBmaWx0ZXJpbmcgc2hvdWxkIGJlIGNhc2Ugc2Vuc2l0aXZlLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYHRydWVgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgZmlsdGVyaW5nSWdub3JlQ2FzZSA9IHRoaXMuY29sdW1uLmZpbHRlcmluZ0lnbm9yZUNhc2U7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY29sdW1uIFtmaWx0ZXJpbmdJZ25vcmVDYXNlXSA9IFwiZmFsc2VcIj48L2lneC1jb2x1bW4+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGZpbHRlcmluZ0lnbm9yZUNhc2UgPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB3aGV0aGVyIHRoZSBjb2x1bW4gc29ydGluZyBzaG91bGQgYmUgY2FzZSBzZW5zaXRpdmUuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgdHJ1ZWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBzb3J0aW5nSWdub3JlQ2FzZSA9IHRoaXMuY29sdW1uLnNvcnRpbmdJZ25vcmVDYXNlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbHVtbiBbc29ydGluZ0lnbm9yZUNhc2VdID0gXCJmYWxzZVwiPjwvaWd4LWNvbHVtbj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc29ydGluZ0lnbm9yZUNhc2UgPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgZGF0YSB0eXBlIG9mIHRoZSBjb2x1bW4gdmFsdWVzLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYHN0cmluZ2AuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bW5EYXRhVHlwZSA9IHRoaXMuY29sdW1uLmRhdGFUeXBlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbHVtbiBbZGF0YVR5cGVdID0gXCInbnVtYmVyJ1wiPjwvaWd4LWNvbHVtbj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGF0YVR5cGU6IERhdGFUeXBlID0gRGF0YVR5cGUuU3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEdldHMgd2hldGhlciB0aGUgY29sdW1uIGlzIGBwaW5uZWRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNQaW5uZWQgPSB0aGlzLmNvbHVtbi5waW5uZWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBwaW5uZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9waW5uZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgd2hldGhlciB0aGUgY29sdW1uIGlzIHBpbm5lZC5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY29sdW1uIFtwaW5uZWRdID0gXCJ0cnVlXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHBpbm5lZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5fcGlubmVkICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZCAmJiB0aGlzLndpZHRoICYmICFpc05hTihwYXJzZUludCh0aGlzLndpZHRoLCAxMCkpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPyB0aGlzLnBpbigpIDogdGhpcy51bnBpbigpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIE5vIGdyaWQvd2lkdGggYXZhaWxhYmxlIGF0IGluaXRpYWxpemF0aW9uLiBgaW5pdFBpbm5pbmdgIGluIHRoZSBncmlkXG4gICAgICAgICAgICAgICB3aWxsIHJlLWluaXQgdGhlIGdyb3VwIChpZiBwcmVzZW50KVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuX3Bpbm5lZCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICogR2V0cy9TZXRzIHRoZSBgaWRgIG9mIHRoZSBgaWd4LWdyaWRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY29sdW1uR3JpZElkID0gdGhpcy5jb2x1bW4uZ3JpZElEO1xuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmNvbHVtbi5ncmlkSUQgPSAnZ3JpZC0xJztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQERlcHJlY2F0ZVByb3BlcnR5KGBUaGUgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gUGxlYXNlLCB1c2UgXFxgY29sdW1uLmdyaWQuaWRcXGAgaW5zdGVhZC5gKVxuICAgIHB1YmxpYyBncmlkSUQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjb2x1bW4gYHN1bW1hcmllc2AuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bW5TdW1tYXJpZXMgPSB0aGlzLmNvbHVtbi5zdW1tYXJpZXM7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBzdW1tYXJpZXMoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1bW1hcmllcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY29sdW1uIGBzdW1tYXJpZXNgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmNvbHVtbi5zdW1tYXJpZXMgPSBJZ3hOdW1iZXJTdW1tYXJ5T3BlcmFuZDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHNldCBzdW1tYXJpZXMoY2xhc3NSZWY6IGFueSkge1xuICAgICAgICB0aGlzLl9zdW1tYXJpZXMgPSBuZXcgY2xhc3NSZWYoKTtcblxuICAgICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQuc3VtbWFyeVNlcnZpY2UucmVtb3ZlU3VtbWFyaWVzQ2FjaGVQZXJDb2x1bW4odGhpcy5maWVsZCk7XG4gICAgICAgICAgICAodGhpcy5ncmlkIGFzIGFueSkuX3N1bW1hcnlQaXBlVHJpZ2dlcisrO1xuICAgICAgICAgICAgdGhpcy5ncmlkLnN1bW1hcnlTZXJ2aWNlLnJlY2FsY3VsYXRlU3VtbWFyaWVzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHdoZXRoZXIgdGhlIGNvbHVtbiBpcyBgc2VhcmNoYWJsZWAuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgdHJ1ZWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc1NlYXJjaGFibGUgPSAgdGhpcy5jb2x1bW4uc2VhcmNoYWJsZSc7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWNvbHVtbiBbc2VhcmNoYWJsZV0gPSBcImZhbHNlXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZWFyY2hhYmxlID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjb2x1bW4gYGZpbHRlcnNgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY29sdW1uRmlsdGVycyA9IHRoaXMuY29sdW1uLmZpbHRlcnMnXG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBmaWx0ZXJzKCk6IElneEZpbHRlcmluZ09wZXJhbmQge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVycztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY29sdW1uIGBmaWx0ZXJzYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jb2x1bW4uZmlsdGVycyA9IElneEJvb2xlYW5GaWx0ZXJpbmdPcGVyYW5kLmluc3RhbmNlKCkuXG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgZmlsdGVycyhpbnN0YW5jZTogSWd4RmlsdGVyaW5nT3BlcmFuZCkge1xuICAgICAgICB0aGlzLl9maWx0ZXJzID0gaW5zdGFuY2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNvbHVtbiBgc29ydFN0cmF0ZWd5YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHNvcnRTdHJhdGVneSA9IHRoaXMuY29sdW1uLnNvcnRTdHJhdGVneSdcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHNvcnRTdHJhdGVneSgpOiBJU29ydGluZ1N0cmF0ZWd5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnRTdHJhdGVneTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY29sdW1uIGBzb3J0U3RyYXRlZ3lgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmNvbHVtbi5zb3J0U3RyYXRlZ3kgPSBuZXcgQ3VzdG9tU29ydGluZ1N0cmF0ZWd5KCkuXG4gICAgICpcbiAgICAgKiBjbGFzcyBDdXN0b21Tb3J0aW5nU3RyYXRlZ3kgZXh0ZW5kcyBTb3J0aW5nU3RyYXRlZ3kge1xuICAgICAqIC4uLlxuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHNldCBzb3J0U3RyYXRlZ3koY2xhc3NSZWY6IElTb3J0aW5nU3RyYXRlZ3kpIHtcbiAgICAgICAgdGhpcy5fc29ydFN0cmF0ZWd5ID0gY2xhc3NSZWY7XG4gICAgfVxuICAgIC8qKlxuICAgICogR2V0cyB0aGUgZnVuY3Rpb24gdGhhdCBjb21wYXJlcyB2YWx1ZXMgZm9yIGdyb3VwaW5nLlxuICAgICogYGBgdHlwZXNjcmlwdFxuICAgICogbGV0IGdyb3VwaW5nQ29tcGFyZXIgPSB0aGlzLmNvbHVtbi5ncm91cGluZ0NvbXBhcmVyJ1xuICAgICogYGBgXG4gICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgZ3JvdXBpbmdDb21wYXJlcigpOiAoYTogYW55LCBiOiBhbnkpID0+IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ncm91cGluZ0NvbXBhcmVyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgY3VzdG9tIGZ1bmN0aW9uIHRvIGNvbXBhcmUgdmFsdWVzIGZvciBncm91cGluZy5cbiAgICAgKiBTdWJzZXF1ZW50IHZhbHVlcyBpbiB0aGUgc29ydGVkIGRhdGEgdGhhdCB0aGUgZnVuY3Rpb24gcmV0dXJucyAwIGZvciBhcmUgZ3JvdXBlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jb2x1bW4uZ3JvdXBpbmdDb21wYXJlciA9IChhOiBhbnksIGI6IGFueSkgPT4geyByZXR1cm4gYSA9PT0gYiA/IDAgOiAtMTsgfVxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGdyb3VwaW5nQ29tcGFyZXIoZnVuY1JlZjogKGE6IGFueSwgYjogYW55KSA9PiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZ3JvdXBpbmdDb21wYXJlciA9IGZ1bmNSZWY7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGRlZmF1bHQgbWluaW11bSBgd2lkdGhgIG9mIHRoZSBjb2x1bW4uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBkZWZhdWx0TWluV2lkdGggPSAgdGhpcy5jb2x1bW4uZGVmYXVsdE1pbldpZHRoO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgZGVmYXVsdE1pbldpZHRoKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICghdGhpcy5ncmlkKSB7IHJldHVybiAnODAnOyB9XG4gICAgICAgIHN3aXRjaCAodGhpcy5ncmlkLmRpc3BsYXlEZW5zaXR5KSB7XG4gICAgICAgICAgICBjYXNlIERpc3BsYXlEZW5zaXR5LmNvc3k6XG4gICAgICAgICAgICAgICAgcmV0dXJuICc2NCc7XG4gICAgICAgICAgICBjYXNlIERpc3BsYXlEZW5zaXR5LmNvbXBhY3Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuICc1Nic7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnODAnO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSByZWZlcmVuY2UgdG8gdGhlIGBpZ3gtZ3JpZGAgb3duZXIuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBncmlkQ29tcG9uZW50ID0gdGhpcy5jb2x1bW4uZ3JpZDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdyaWQ6IElneEdyaWRCYXNlQ29tcG9uZW50O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGBib2R5VGVtcGxhdGVgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgYm9keVRlbXBsYXRlID0gdGhpcy5jb2x1bW4uYm9keVRlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoJ2NlbGxUZW1wbGF0ZScpXG4gICAgZ2V0IGJvZHlUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvZHlUZW1wbGF0ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYm9keSB0ZW1wbGF0ZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPG5nLXRlbXBsYXRlICNib2R5VGVtcGxhdGUgaWd4Q2VsbCBsZXQtdmFsPlxuICAgICAqICAgIDxkaXYgc3R5bGUgPSBcImJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuXCIgKGNsaWNrKSA9IFwiY2hhbmdlQ29sb3IodmFsKVwiPlxuICAgICAqICAgICAgIDxzcGFuPiB7e3ZhbH19IDwvc3Bhbj5cbiAgICAgKiAgICA8L2Rpdj5cbiAgICAgKiA8L25nLXRlbXBsYXRlPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKFwiJ2JvZHlUZW1wbGF0ZSdcIiwge3JlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gICAgICogcHVibGljIGJvZHlUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICAgKiB0aGlzLmNvbHVtbi5ib2R5VGVtcGxhdGUgPSB0aGlzLmJvZHlUZW1wbGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgc2V0IGJvZHlUZW1wbGF0ZSh0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgICAgICB0aGlzLl9ib2R5VGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICAgICAgdGhpcy5ncmlkLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBoZWFkZXIgdGVtcGxhdGUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBoZWFkZXJUZW1wbGF0ZSA9IHRoaXMuY29sdW1uLmhlYWRlclRlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBoZWFkZXJUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWRlclRlbXBsYXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBoZWFkZXIgdGVtcGxhdGUuXG4gICAgICogTm90ZSB0aGF0IHRoZSBjb2x1bW4gaGVhZGVyIGhlaWdodCBpcyBmaXhlZCBhbmQgYW55IGNvbnRlbnQgYmlnZ2VyIHRoYW4gaXQgd2lsbCBiZSBjdXQgb2ZmLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8bmctdGVtcGxhdGUgI2hlYWRlclRlbXBsYXRlPlxuICAgICAqICAgPGRpdiBzdHlsZSA9IFwiYmFja2dyb3VuZC1jb2xvcjpibGFja1wiIChjbGljaykgPSBcImNoYW5nZUNvbG9yKHZhbClcIj5cbiAgICAgKiAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOnJlZFwiID57e2NvbHVtbi5maWVsZH19PC9zcGFuPlxuICAgICAqICAgPC9kaXY+XG4gICAgICogPC9uZy10ZW1wbGF0ZT5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogQFZpZXdDaGlsZChcIidoZWFkZXJUZW1wbGF0ZSdcIiwge3JlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gICAgICogcHVibGljIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgICAqIHRoaXMuY29sdW1uLmhlYWRlclRlbXBsYXRlID0gdGhpcy5oZWFkZXJUZW1wbGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgc2V0IGhlYWRlclRlbXBsYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgICAgIHRoaXMuX2hlYWRlclRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgaW5saW5lIGVkaXRvciB0ZW1wbGF0ZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlubGluZUVkaXRvclRlbXBsYXRlID0gdGhpcy5jb2x1bW4uaW5saW5lRWRpdG9yVGVtcGxhdGU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgnY2VsbEVkaXRvclRlbXBsYXRlJylcbiAgICBnZXQgaW5saW5lRWRpdG9yVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmxpbmVFZGl0b3JUZW1wbGF0ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgaW5saW5lIGVkaXRvciB0ZW1wbGF0ZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPG5nLXRlbXBsYXRlICNpbmxpbmVFZGl0b3JUZW1wbGF0ZSBpZ3hDZWxsRWRpdG9yIGxldC1jZWxsPVwiY2VsbFwiPlxuICAgICAqICAgICA8aW5wdXQgdHlwZT1cInN0cmluZ1wiIFsobmdNb2RlbCldPVwiY2VsbC52YWx1ZVwiLz5cbiAgICAgKiA8L25nLXRlbXBsYXRlPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKFwiJ2lubGluZUVkaXRvclRlbXBsYXRlJ1wiLCB7cmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgICAgKiBwdWJsaWMgaW5saW5lRWRpdG9yVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgICogdGhpcy5jb2x1bW4uaW5saW5lRWRpdG9yVGVtcGxhdGUgPSB0aGlzLmlubGluZUVkaXRvclRlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBzZXQgaW5saW5lRWRpdG9yVGVtcGxhdGUodGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICAgICAgdGhpcy5faW5saW5lRWRpdG9yVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICAgICAgdGhpcy5ncmlkLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBgZmlsdGVyQ2VsbFRlbXBsYXRlYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGZpbHRlckNlbGxUZW1wbGF0ZSA9IHRoaXMuY29sdW1uLmZpbHRlckNlbGxUZW1wbGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KCdmaWx0ZXJDZWxsVGVtcGxhdGUnKVxuICAgIGdldCBmaWx0ZXJDZWxsVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJDZWxsVGVtcGxhdGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHF1aWNrIGZpbHRlciB0ZW1wbGF0ZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPG5nLXRlbXBsYXRlICNmaWx0ZXJDZWxsVGVtcGxhdGUgSWd4RmlsdGVyQ2VsbFRlbXBsYXRlIGxldC1jb2x1bW49XCJjb2x1bW5cIj5cbiAgICAgKiAgICA8aW5wdXQgKGlucHV0KT1cIm9uSW5wdXQoKVwiPlxuICAgICAqIDwvbmctdGVtcGxhdGU+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIEBWaWV3Q2hpbGQoXCInZmlsdGVyQ2VsbFRlbXBsYXRlJ1wiLCB7cmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgICAgKiBwdWJsaWMgZmlsdGVyQ2VsbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgICAqIHRoaXMuY29sdW1uLmZpbHRlckNlbGxUZW1wbGF0ZSA9IHRoaXMuZmlsdGVyQ2VsbFRlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBzZXQgZmlsdGVyQ2VsbFRlbXBsYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgICAgIHRoaXMuX2ZpbHRlckNlbGxUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjZWxscyBvZiB0aGUgY29sdW1uLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY29sdW1uQ2VsbHMgPSAgdGhpcy5jb2x1bW4uY2VsbHM7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBjZWxscygpOiBJZ3hHcmlkQ2VsbENvbXBvbmVudFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5yb3dMaXN0LmZpbHRlcigocm93KSA9PiByb3cgaW5zdGFuY2VvZiBJZ3hSb3dDb21wb25lbnQpXG4gICAgICAgICAgICAubWFwKChyb3cpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocm93LmNlbGxzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb3cuY2VsbHMuZmlsdGVyKChjZWxsKSA9PiBjZWxsLmNvbHVtbkluZGV4ID09PSB0aGlzLmluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5yZWR1Y2UoKGEsIGIpID0+IGEuY29uY2F0KGIpLCBbXSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNvbHVtbiB2aXNpYmxlIGluZGV4LlxuICAgICAqIElmIHRoZSBjb2x1bW4gaXMgbm90IHZpc2libGUsIHJldHVybnMgYC0xYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHZpc2libGVDb2x1bW5JbmRleCA9ICB0aGlzLmNvbHVtbi52aXNpYmxlSW5kZXg7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCB2aXNpYmxlSW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKCFpc05hTih0aGlzLl92SW5kZXgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdkluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVucGlubmVkQ29sdW1ucyA9IHRoaXMuZ3JpZC51bnBpbm5lZENvbHVtbnMuZmlsdGVyKGMgPT4gIWMuY29sdW1uR3JvdXApO1xuICAgICAgICBjb25zdCBwaW5uZWRDb2x1bW5zID0gdGhpcy5ncmlkLnBpbm5lZENvbHVtbnMuZmlsdGVyKGMgPT4gIWMuY29sdW1uR3JvdXApO1xuICAgICAgICBsZXQgY29sID0gdGhpcztcbiAgICAgICAgbGV0IHZJbmRleCA9IC0xO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbHVtbkdyb3VwKSB7XG4gICAgICAgICAgICBjb2wgPSB0aGlzLmFsbENoaWxkcmVuLmZpbHRlcihjID0+ICFjLmNvbHVtbkdyb3VwKVswXSBhcyBhbnk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29sdW1uTGF5b3V0Q2hpbGQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5jaGlsZHJlblZpc2libGVJbmRleGVzLmZpbmQoeCA9PiB4LmNvbHVtbiA9PT0gdGhpcykuaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMucGlubmVkKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleEluQ29sbGVjdGlvbiA9IHVucGlubmVkQ29sdW1ucy5pbmRleE9mKGNvbCk7XG4gICAgICAgICAgICB2SW5kZXggPSBpbmRleEluQ29sbGVjdGlvbiA9PT0gLTEgPyAtMSA6IHBpbm5lZENvbHVtbnMubGVuZ3RoICsgaW5kZXhJbkNvbGxlY3Rpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2SW5kZXggPSBwaW5uZWRDb2x1bW5zLmluZGV4T2YoY29sKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl92SW5kZXggPSB2SW5kZXg7XG4gICAgICAgIHJldHVybiB2SW5kZXg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhlIGNvbHVtbiBpcyBhIGBDb2x1bW5Hcm91cGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bW5Hcm91cCA9ICB0aGlzLmNvbHVtbi5jb2x1bW5Hcm91cDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGNvbHVtbkdyb3VwKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhlIGNvbHVtbiBpcyBhIGBDb2x1bW5MYXlvdXRgIGZvciBtdWx0aS1yb3cgbGF5b3V0LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY29sdW1uR3JvdXAgPSAgdGhpcy5jb2x1bW4uY29sdW1uR3JvdXA7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBjb2x1bW5MYXlvdXQoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAgLyoqXG4gICAgICogUmV0dXJucyBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGUgY29sdW1uIGlzIGEgY2hpbGQgb2YgYSBgQ29sdW1uTGF5b3V0YCBmb3IgbXVsdGktcm93IGxheW91dC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNvbHVtbkxheW91dENoaWxkID0gIHRoaXMuY29sdW1uLmNvbHVtbkxheW91dENoaWxkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgY29sdW1uTGF5b3V0Q2hpbGQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5jb2x1bW5MYXlvdXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2hpbGRyZW4gY29sdW1ucyBjb2xsZWN0aW9uLlxuICAgICAqIFJldHVybnMgYW4gZW1wdHkgYXJyYXkgaWYgdGhlIGNvbHVtbiBkb2VzIG5vdCBjb250YWluIGNoaWxkcmVuIGNvbHVtbnMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjaGlsZHJlbkNvbHVtbnMgPSAgdGhpcy5jb2x1bW4uYWxsQ2hpbGRyZW47XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBhbGxDaGlsZHJlbigpOiBJZ3hDb2x1bW5Db21wb25lbnRbXSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGV2ZWwgb2YgdGhlIGNvbHVtbiBpbiBhIGNvbHVtbiBncm91cC5cbiAgICAgKiBSZXR1cm5zIGAwYCBpZiB0aGUgY29sdW1uIGRvZXNuJ3QgaGF2ZSBhIGBwYXJlbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY29sdW1uTGV2ZWwgPSAgdGhpcy5jb2x1bW4ubGV2ZWw7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBsZXZlbCgpIHtcbiAgICAgICAgbGV0IHB0ciA9IHRoaXMucGFyZW50O1xuICAgICAgICBsZXQgbHZsID0gMDtcblxuICAgICAgICB3aGlsZSAocHRyKSB7XG4gICAgICAgICAgICBsdmwrKztcbiAgICAgICAgICAgIHB0ciA9IHB0ci5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGx2bDtcbiAgICB9XG5cbiAgICBnZXQgaXNMYXN0UGlubmVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnBpbm5lZENvbHVtbnNbdGhpcy5ncmlkLnBpbm5lZENvbHVtbnMubGVuZ3RoIC0gMV0gPT09IHRoaXM7XG4gICAgfVxuICAgIGdldCBncmlkUm93U3BhbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3dFbmQgJiYgdGhpcy5yb3dTdGFydCA/IHRoaXMucm93RW5kIC0gdGhpcy5yb3dTdGFydCA6IDE7XG4gICAgfVxuICAgIGdldCBncmlkQ29sdW1uU3BhbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xFbmQgJiYgdGhpcy5jb2xTdGFydCA/IHRoaXMuY29sRW5kIC0gdGhpcy5jb2xTdGFydCA6IDE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUm93IGluZGV4IHdoZXJlIHRoZSBjdXJyZW50IGZpZWxkIHNob3VsZCBlbmQuXG4gICAgICogVGhlIGFtb3VudCBvZiByb3dzIGJldHdlZW4gcm93U3RhcnQgYW5kIHJvd0VuZCB3aWxsIGRldGVybWluZSB0aGUgYW1vdW50IG9mIHNwYW5uaW5nIHJvd3MgdG8gdGhhdCBmaWVsZFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbHVtbi1sYXlvdXQ+XG4gICAgICogICA8aWd4LWNvbHVtbiBbcm93RW5kXT1cIjJcIiBbcm93U3RhcnRdPVwiMVwiIFtjb2xTdGFydF09XCIxXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqIDwvaWd4LWNvbHVtbi1sYXlvdXQ+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJvd0VuZDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQ29sdW1uIGluZGV4IHdoZXJlIHRoZSBjdXJyZW50IGZpZWxkIHNob3VsZCBlbmQuXG4gICAgICogVGhlIGFtb3VudCBvZiBjb2x1bW5zIGJldHdlZW4gY29sU3RhcnQgYW5kIGNvbEVuZCB3aWxsIGRldGVybWluZSB0aGUgYW1vdW50IG9mIHNwYW5uaW5nIGNvbHVtbnMgdG8gdGhhdCBmaWVsZFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbHVtbi1sYXlvdXQ+XG4gICAgICogICA8aWd4LWNvbHVtbiBbY29sRW5kXT1cIjNcIiBbcm93U3RhcnRdPVwiMVwiIFtjb2xTdGFydF09XCIxXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqIDwvaWd4LWNvbHVtbi1sYXlvdXQ+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbEVuZDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogUm93IGluZGV4IGZyb20gd2hpY2ggdGhlIGZpZWxkIGlzIHN0YXJ0aW5nLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbHVtbi1sYXlvdXQ+XG4gICAgICogICA8aWd4LWNvbHVtbiBbcm93U3RhcnRdPVwiMVwiIFtjb2xTdGFydF09XCIxXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqIDwvaWd4LWNvbHVtbi1sYXlvdXQ+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHJvd1N0YXJ0OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBDb2x1bW4gaW5kZXggZnJvbSB3aGljaCB0aGUgZmllbGQgaXMgc3RhcnRpbmcuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY29sdW1uLWxheW91dD5cbiAgICAgKiAgIDxpZ3gtY29sdW1uIFtjb2xTdGFydF09XCIxXCIgW3Jvd1N0YXJ0XT1cIjFcIj48L2lneC1jb2x1bW4+XG4gICAgICogPC9pZ3gtY29sdW1uLWxheW91dD5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KCkgY29sU3RhcnQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBkZWZhdWx0V2lkdGg6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyB3aWR0aFNldEJ5VXNlcjogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSBvZiB0aGUgY29sdW1uLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdHJlZSA9ICB0aGlzLmNvbHVtbi5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBmaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUoKTogRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUuZmluZCh0aGlzLmZpZWxkKSBhcyBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgcGFyZW50IGNvbHVtbi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHBhcmVudENvbHVtbiA9IHRoaXMuY29sdW1uLnBhcmVudDtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jb2x1bW4ucGFyZW50ID0gaGlnaGVyTGV2ZWxDb2x1bW47XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIHBhcmVudCA9IG51bGw7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBjaGlsZHJlbiBjb2x1bW5zLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY29sdW1uQ2hpbGRyZW4gPSB0aGlzLmNvbHVtbi5jaGlsZHJlbjtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jb2x1bW4uY2hpbGRyZW4gPSBjaGlsZHJlbkNvbHVtbnM7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBRdWVyeUxpc3Q8SWd4Q29sdW1uQ29tcG9uZW50PjtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX3VucGlubmVkSW5kZXg7XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9waW5uZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2JvZHlUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2hlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfaW5saW5lRWRpdG9yVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9maWx0ZXJDZWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9zdW1tYXJpZXMgPSBudWxsO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfZmlsdGVycyA9IG51bGw7XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9zb3J0U3RyYXRlZ3k6IElTb3J0aW5nU3RyYXRlZ3kgPSBEZWZhdWx0U29ydGluZ1N0cmF0ZWd5Lmluc3RhbmNlKCk7XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9ncm91cGluZ0NvbXBhcmVyOiAoYTogYW55LCBiOiBhbnkpID0+IG51bWJlcjtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2hpZGRlbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfaW5kZXg6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2Rpc2FibGVIaWRpbmcgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2Rpc2FibGVQaW5uaW5nID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF93aWR0aDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfZGVmYXVsdE1pbldpZHRoID0gJyc7XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9oYXNTdW1tYXJ5ID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfZWRpdGFibGU6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXQgaXNQcmltYXJ5Q29sdW1uKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5maWVsZCAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZ3JpZCAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZmllbGQgPT09IHRoaXMuZ3JpZC5wcmltYXJ5S2V5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneENlbGxUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBJZ3hDZWxsVGVtcGxhdGVEaXJlY3RpdmUsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCBjZWxsVGVtcGxhdGU6IElneENlbGxUZW1wbGF0ZURpcmVjdGl2ZTtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkcmVuKElneENlbGxIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBJZ3hDZWxsSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsIGRlc2NlbmRhbnRzOiBmYWxzZSB9KVxuICAgIHByb3RlY3RlZCBoZWFkVGVtcGxhdGU6IFF1ZXJ5TGlzdDxJZ3hDZWxsSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmU+O1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4Q2VsbEVkaXRvclRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IElneENlbGxFZGl0b3JUZW1wbGF0ZURpcmVjdGl2ZSwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGVkaXRvclRlbXBsYXRlOiBJZ3hDZWxsRWRpdG9yVGVtcGxhdGVEaXJlY3RpdmU7XG5cbiAgICBwcm90ZWN0ZWQgX3ZJbmRleCA9IE5hTjtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneEZpbHRlckNlbGxUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBJZ3hGaWx0ZXJDZWxsVGVtcGxhdGVEaXJlY3RpdmUsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBmaWx0ZXJDZWxsVGVtcGxhdGVEaXJlY3RpdmU6IElneEZpbHRlckNlbGxUZW1wbGF0ZURpcmVjdGl2ZTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4sIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzZXRDYWNoZXMoKSB7XG4gICAgICAgIHRoaXMuX3ZJbmRleCA9IE5hTjtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZUNhbGNXaWR0aCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY2VsbFRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9ib2R5VGVtcGxhdGUgPSB0aGlzLmNlbGxUZW1wbGF0ZS50ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oZWFkVGVtcGxhdGUgJiYgdGhpcy5oZWFkVGVtcGxhdGUubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9oZWFkZXJUZW1wbGF0ZSA9IHRoaXMuaGVhZFRlbXBsYXRlLnRvQXJyYXkoKVswXS50ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lZGl0b3JUZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5faW5saW5lRWRpdG9yVGVtcGxhdGUgPSB0aGlzLmVkaXRvclRlbXBsYXRlLnRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZpbHRlckNlbGxUZW1wbGF0ZURpcmVjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5fZmlsdGVyQ2VsbFRlbXBsYXRlID0gdGhpcy5maWx0ZXJDZWxsVGVtcGxhdGVEaXJlY3RpdmUudGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnN1bW1hcmllcykge1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmRhdGFUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBEYXRhVHlwZS5TdHJpbmc6XG4gICAgICAgICAgICAgICAgY2FzZSBEYXRhVHlwZS5Cb29sZWFuOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1bW1hcmllcyA9IElneFN1bW1hcnlPcGVyYW5kO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIERhdGFUeXBlLk51bWJlcjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdW1tYXJpZXMgPSBJZ3hOdW1iZXJTdW1tYXJ5T3BlcmFuZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBEYXRhVHlwZS5EYXRlOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1bW1hcmllcyA9IElneERhdGVTdW1tYXJ5T3BlcmFuZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdW1tYXJpZXMgPSBJZ3hTdW1tYXJ5T3BlcmFuZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmZpbHRlcnMpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5kYXRhVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuQm9vbGVhbjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJzID0gSWd4Qm9vbGVhbkZpbHRlcmluZ09wZXJhbmQuaW5zdGFuY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBEYXRhVHlwZS5OdW1iZXI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVycyA9IElneE51bWJlckZpbHRlcmluZ09wZXJhbmQuaW5zdGFuY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBEYXRhVHlwZS5EYXRlOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcnMgPSBJZ3hEYXRlRmlsdGVyaW5nT3BlcmFuZC5pbnN0YW5jZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIERhdGFUeXBlLlN0cmluZzpcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcnMgPSBJZ3hTdHJpbmdGaWx0ZXJpbmdPcGVyYW5kLmluc3RhbmNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGdldEdyaWRUZW1wbGF0ZShpc1JvdzogYm9vbGVhbiwgaXNJRTogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgICAgIGlmIChpc1Jvdykge1xuICAgICAgICAgICAgY29uc3Qgcm93c0NvdW50ID0gdGhpcy5ncmlkLm11bHRpUm93TGF5b3V0Um93U2l6ZTtcbiAgICAgICAgICAgIHJldHVybiBpc0lFID9cbiAgICAgICAgICAgICAgICBgKDFmcilbJHtyb3dzQ291bnR9XWAgOlxuICAgICAgICAgICAgICAgIGByZXBlYXQoJHtyb3dzQ291bnR9LDFmcilgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29sdW1uU2l6ZXNTdHJpbmcodGhpcy5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SW5pdGlhbENoaWxkQ29sdW1uU2l6ZXMoY2hpbGRyZW46IFF1ZXJ5TGlzdDxJZ3hDb2x1bW5Db21wb25lbnQ+KTogQXJyYXk8TVJMQ29sdW1uU2l6ZUluZm8+IHtcbiAgICAgICAgY29uc3QgY29sdW1uU2l6ZXM6IE1STENvbHVtblNpemVJbmZvW10gPSBbXTtcbiAgICAgICAgLy8gZmluZCB0aGUgc21hbGxlc3QgY29sIHNwYW5zXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goY29sID0+IHtcbiAgICAgICAgICAgIGlmICghY29sLmNvbFN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3V2lkdGhTZXQgPSAgY29sLndpZHRoU2V0QnlVc2VyICYmIGNvbHVtblNpemVzW2NvbC5jb2xTdGFydCAtIDFdICYmICFjb2x1bW5TaXplc1tjb2wuY29sU3RhcnQgLSAxXS53aWR0aFNldEJ5VXNlcjtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NwYW5TbWFsbGVyID0gY29sdW1uU2l6ZXNbY29sLmNvbFN0YXJ0IC0gMV0gJiYgY29sdW1uU2l6ZXNbY29sLmNvbFN0YXJ0IC0gMV0uY29sU3BhbiA+IGNvbC5ncmlkQ29sdW1uU3BhbjtcbiAgICAgICAgICAgIGNvbnN0IGJvdGhXaWR0aHNTZXQgPSBjb2wud2lkdGhTZXRCeVVzZXIgJiYgY29sdW1uU2l6ZXNbY29sLmNvbFN0YXJ0IC0gMV0gJiYgY29sdW1uU2l6ZXNbY29sLmNvbFN0YXJ0IC0gMV0ud2lkdGhTZXRCeVVzZXI7XG4gICAgICAgICAgICBjb25zdCBib3RoV2lkdGhzTm90U2V0ID0gIWNvbC53aWR0aFNldEJ5VXNlciAmJiBjb2x1bW5TaXplc1tjb2wuY29sU3RhcnQgLSAxXSAmJiAhY29sdW1uU2l6ZXNbY29sLmNvbFN0YXJ0IC0gMV0ud2lkdGhTZXRCeVVzZXI7XG5cbiAgICAgICAgICAgIGlmIChjb2x1bW5TaXplc1tjb2wuY29sU3RhcnQgLSAxXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgbm90aGluZyBpcyBkZWZpbmVkIHlldCB0YWtlIGFueSBjb2x1bW4gYXQgZmlyc3RcbiAgICAgICAgICAgICAgICAvLyBXZSB1c2UgY29sRW5kIHRvIGtub3cgd2hlcmUgdGhlIGNvbHVtbiBhY3R1YWxseSBlbmRzLCBiZWNhdXNlIG5vdCBhbHdheXMgaXQgc3RhcnRzIHdoZXJlIHdlIGhhdmUgaXQgc2V0IGluIGNvbHVtblNpemVzLlxuICAgICAgICAgICAgICAgIGNvbHVtblNpemVzW2NvbC5jb2xTdGFydCAtIDFdID0ge1xuICAgICAgICAgICAgICAgICAgICByZWY6IGNvbCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNvbC53aWR0aFNldEJ5VXNlciB8fCB0aGlzLmdyaWQuY29sdW1uV2lkdGhTZXRCeVVzZXIgPyBwYXJzZUludChjb2wuY2FsY1dpZHRoLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBjb2xTcGFuOiBjb2wuZ3JpZENvbHVtblNwYW4sXG4gICAgICAgICAgICAgICAgICAgIGNvbEVuZDogY29sLmNvbFN0YXJ0ICsgY29sLmdyaWRDb2x1bW5TcGFuLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aFNldEJ5VXNlcjogY29sLndpZHRoU2V0QnlVc2VyXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3V2lkdGhTZXQgfHwgKG5ld1NwYW5TbWFsbGVyICYmICgoYm90aFdpZHRoc1NldCkgfHwgKGJvdGhXaWR0aHNOb3RTZXQpKSkpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIGNvbHVtbiBpcyBzZXQgYWxyZWFkeSBpdCBzaG91bGQgZWl0aGVyIG5vdCBoYXZlIHdpZHRoIGRlZmluZWQgb3IgaGF2ZSB3aWR0aCB3aXRoIGJpZ2dlciBzcGFuIHRoYW4gdGhlIG5ldyBvbmUuXG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiAgSWYgcmVwbGFjZWQgY29sdW1uIGhhcyBiaWdnZXIgc3Bhbiwgd2Ugd2FudCB0byBmaWxsIHRoZSByZW1haW5pbmcgY29sdW1uc1xuICAgICAgICAgICAgICAgICAqICB0aGF0IHRoZSByZXBsYWNpbmcgY29sdW1uIGRvZXMgbm90IGZpbGwgd2l0aCB0aGUgb2xkIG9uZS5cbiAgICAgICAgICAgICAgICAgKiovXG4gICAgICAgICAgICAgICAgaWYgKGJvdGhXaWR0aHNTZXQgJiYgbmV3U3BhblNtYWxsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RhcnQgZnJvbSB3aGVyZSB0aGUgbmV3IGNvbHVtbiBzZXQgd291bGQgZW5kIGFuZCBhcHBseSB0aGUgb2xkIGNvbHVtbiB0byB0aGUgcmVzdCBkZXBlbmRpbmcgb24gaG93IG11Y2ggaXQgc3BhbnMuXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgbm90IHlldCByZXBsYWNlZCBpdCBzbyB3ZSBjYW4gdXNlIGl0IGRpcmVjdGx5IGZyb20gdGhlIGNvbHVtblNpemVzIGNvbGxlY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgd2hlcmUgY29sRW5kIGlzIHVzZWQgYmVjYXVzZSB0aGUgY29sU3RhcnQgb2YgdGhlIG9sZCBjb2x1bW4gaXMgbm90IGFjdHVhbGx5IGkgKyAxLlxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY29sLmNvbFN0YXJ0IC0gMSArIGNvbC5ncmlkQ29sdW1uU3BhbjsgaSA8IGNvbHVtblNpemVzW2NvbC5jb2xTdGFydCAtIDFdLmNvbEVuZCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb2x1bW5TaXplc1tpXSB8fCAhY29sdW1uU2l6ZXNbaV0ud2lkdGhTZXRCeVVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5TaXplc1tpXSA9IGNvbHVtblNpemVzW2NvbC5jb2xTdGFydCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIG9sZCBjb2x1bW4gd2l0aCB0aGUgbmV3IG9uZS5cbiAgICAgICAgICAgICAgICBjb2x1bW5TaXplc1tjb2wuY29sU3RhcnQgLSAxXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBjb2wsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjb2wud2lkdGhTZXRCeVVzZXIgfHwgdGhpcy5ncmlkLmNvbHVtbldpZHRoU2V0QnlVc2VyID8gcGFyc2VJbnQoY29sLmNhbGNXaWR0aCwgMTApIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgY29sU3BhbjogY29sLmdyaWRDb2x1bW5TcGFuLFxuICAgICAgICAgICAgICAgICAgICBjb2xFbmQ6IGNvbC5jb2xTdGFydCArIGNvbC5ncmlkQ29sdW1uU3BhbixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhTZXRCeVVzZXI6IGNvbC53aWR0aFNldEJ5VXNlclxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJvdGhXaWR0aHNTZXQgJiYgY29sdW1uU2l6ZXNbY29sLmNvbFN0YXJ0IC0gMV0uY29sU3BhbiA8IGNvbC5ncmlkQ29sdW1uU3Bhbikge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjb2x1bW4gYWxyZWFkeSBpbiB0aGUgY29sdW1uU2l6ZXMgaGFzIHNtYWxsZXIgc3Bhbiwgd2Ugc3RpbGwgbmVlZCB0byBmaWxsIGFueSBlbXB0eSBwbGFjZXMgd2l0aCB0aGUgY3VycmVudCBjb2wuXG4gICAgICAgICAgICAgICAgLy8gU3RhcnQgZnJvbSB3aGVyZSB0aGUgc21hbGxlciBjb2x1bW4gc2V0IHdvdWxkIGVuZCBhbmQgYXBwbHkgdGhlIGJpZ2dlciBjb2x1bW4gdG8gdGhlIHJlc3QgZGVwZW5kaW5nIG9uIGhvdyBtdWNoIGl0IHNwYW5zLlxuICAgICAgICAgICAgICAgIC8vIFNpbmNlIGhlcmUgd2UgZG8gbm90IGhhdmUgaXQgaW4gY29sdW1uU2l6ZXMgd2Ugc2V0IGl0IGFzIGEgbmV3IGNvbHVtbiBrZWVwaW5nIHRoZSBzYW1lIGNvbFNwYW4uXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvbC5jb2xTdGFydCAtIDEgKyBjb2x1bW5TaXplc1tjb2wuY29sU3RhcnQgLSAxXS5jb2xTcGFuOyBpIDwgY29sLmNvbFN0YXJ0IC0gMSArIGNvbC5ncmlkQ29sdW1uU3BhbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29sdW1uU2l6ZXNbaV0gfHwgIWNvbHVtblNpemVzW2ldLndpZHRoU2V0QnlVc2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5TaXplc1tpXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IGNvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY29sLndpZHRoU2V0QnlVc2VyIHx8IHRoaXMuZ3JpZC5jb2x1bW5XaWR0aFNldEJ5VXNlciA/IHBhcnNlSW50KGNvbC5jYWxjV2lkdGgsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sU3BhbjogY29sLmdyaWRDb2x1bW5TcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbEVuZDogY29sLmNvbFN0YXJ0ICsgY29sLmdyaWRDb2x1bW5TcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoU2V0QnlVc2VyOiBjb2wud2lkdGhTZXRCeVVzZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRmxhdHRlbiBjb2x1bW5TaXplcyBzbyB0aGVyZSBhcmUgbm90IGNvbHVtbnMgd2l0aCBjb2xTcGFuID4gMVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtblNpemVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29sdW1uU2l6ZXNbaV0gJiYgY29sdW1uU2l6ZXNbaV0uY29sU3BhbiA+IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgaiA9IDE7XG5cbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIGFsbCBlbXB0eSBwbGFjZXMgZGVwZW5kaW5nIG9uIGhvdyBtdWNoIHRoZSBjdXJyZW50IGNvbHVtbiBzcGFucyBzdGFydGluZyBmcm9tIG5leHQgY29sLlxuICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgY29sdW1uU2l6ZXNbaV0uY29sU3BhbiAmJiBpICsgaiArIDEgPCBjb2x1bW5TaXplc1tpXS5jb2xFbmQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sdW1uU2l6ZXNbaSArIGpdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoKCFjb2x1bW5TaXplc1tpXS53aWR0aCAmJiBjb2x1bW5TaXplc1tpICsgal0ud2lkdGgpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKCFjb2x1bW5TaXplc1tpXS53aWR0aCAmJiAhY29sdW1uU2l6ZXNbaSArIGpdLndpZHRoICYmIGNvbHVtblNpemVzW2kgKyBqXS5jb2xTcGFuIDw9IGNvbHVtblNpemVzW2ldLmNvbFNwYW4pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoISFjb2x1bW5TaXplc1tpICsgal0ud2lkdGggJiYgY29sdW1uU2l6ZXNbaSArIGpdLmNvbFNwYW4gPD0gY29sdW1uU2l6ZXNbaV0uY29sU3BhbikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSByZWFjaCBhbiBhbHJlYWR5IGRlZmluZWQgY29sdW1uIHRoYXQgaGFzIHdpZHRoIGFuZCB0aGUgY3VycmVudCBkb2Vzbid0IGhhdmUgb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSByZWFjaGVkIGNvbHVtbiBoYXMgYmlnZ2VyIGNvbFNwYW4gd2Ugc3RvcC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBjb2x1bW5TaXplc1tpXS53aWR0aFNldEJ5VXNlciA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uU2l6ZXNbaV0ud2lkdGggLyBjb2x1bW5TaXplc1tpXS5jb2xTcGFuIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5TaXplc1tpXS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblNpemVzW2kgKyBqXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IGNvbHVtblNpemVzW2ldLnJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sU3BhbjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xFbmQ6IGNvbHVtblNpemVzW2ldLmNvbEVuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aFNldEJ5VXNlcjogY29sdW1uU2l6ZXNbaV0ud2lkdGhTZXRCeVVzZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGN1cnJlbnQgY29sdW1uIHdpZHRoIHNvIGl0IGlzIGRpdmlkZWQgYmV0d2VlbiBhbGwgY29sdW1ucyBpdCBzcGFucyBhbmQgc2V0IGl0IHRvIDEuXG4gICAgICAgICAgICAgICAgY29sdW1uU2l6ZXNbaV0ud2lkdGggPSBjb2x1bW5TaXplc1tpXS53aWR0aFNldEJ5VXNlciA/XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtblNpemVzW2ldLndpZHRoIC8gY29sdW1uU2l6ZXNbaV0uY29sU3BhbiA6XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtblNpemVzW2ldLndpZHRoO1xuICAgICAgICAgICAgICAgIGNvbHVtblNpemVzW2ldLmNvbFNwYW4gPSAxO1xuXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBpbmRleCBiYXNlZCBvbiBob3cgbXVjaCB3ZSBoYXZlIHJlcGxhY2VkLiBTdWJ0cmFjdCAxIGJlY2F1c2Ugd2Ugc3RhcnRlZCBmcm9tIDEuXG4gICAgICAgICAgICAgICAgaSArPSBqIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2x1bW5TaXplcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RmlsbGVkQ2hpbGRDb2x1bW5TaXplcyhjaGlsZHJlbjogUXVlcnlMaXN0PElneENvbHVtbkNvbXBvbmVudD4pOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgY29sdW1uU2l6ZXMgPSB0aGlzLmdldEluaXRpYWxDaGlsZENvbHVtblNpemVzKGNoaWxkcmVuKTtcblxuICAgICAgICAvLyBmaWxsIHRoZSBnYXBzIGlmIHRoZXJlIGFyZSBhbnlcbiAgICAgICAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtblNpemVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29sdW1uU2l6ZXNbaV0gJiYgISFjb2x1bW5TaXplc1tpXS53aWR0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbHVtblNpemVzW2ldLndpZHRoICsgJ3B4Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcnNlSW50KHRoaXMuZ3JpZC5nZXRQb3NzaWJsZUNvbHVtbldpZHRoKCksIDEwKSArICdweCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldENvbHVtblNpemVzU3RyaW5nKGNoaWxkcmVuOiBRdWVyeUxpc3Q8SWd4Q29sdW1uQ29tcG9uZW50Pik6IHN0cmluZyB7XG4gICAgICAgY29uc3QgcmVzID0gdGhpcy5nZXRGaWxsZWRDaGlsZENvbHVtblNpemVzKGNoaWxkcmVuKTtcbiAgICAgICByZXR1cm4gcmVzLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UmVzaXphYmxlQ29sVW5kZXJFbmQoKTogTVJMUmVzaXplQ29sdW1uSW5mb1tdIHtcbiAgICAgICAgaWYgKHRoaXMuY29sdW1uTGF5b3V0IHx8ICF0aGlzLmNvbHVtbkxheW91dENoaWxkIHx8IHRoaXMuY29sdW1uR3JvdXApIHtcbiAgICAgICAgICAgIHJldHVybiBbeyB0YXJnZXQ6IHRoaXMsIHNwYW5Vc2VkOiAxIH1dO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29sdW1uU2l6ZWQgPSB0aGlzLmdldEluaXRpYWxDaGlsZENvbHVtblNpemVzKHRoaXMucGFyZW50LmNoaWxkcmVuKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0czogTVJMUmVzaXplQ29sdW1uSW5mb1tdID0gW107XG4gICAgICAgIGNvbnN0IGNvbEVuZCA9IHRoaXMuY29sRW5kID8gdGhpcy5jb2xFbmQgOiB0aGlzLmNvbFN0YXJ0ICsgMTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtblNpemVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb2xTdGFydCA8PSBpICsgMSAmJiBpICsgMSA8IGNvbEVuZCkge1xuICAgICAgICAgICAgICAgIHRhcmdldHMucHVzaCh7IHRhcmdldDogY29sdW1uU2l6ZWRbaV0ucmVmLCBzcGFuVXNlZDogMX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0c1NxdWFzaGVkOiBNUkxSZXNpemVDb2x1bW5JbmZvW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0YXJnZXRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0c1NxdWFzaGVkLmxlbmd0aCAmJiB0YXJnZXRzU3F1YXNoZWRbdGFyZ2V0c1NxdWFzaGVkLmxlbmd0aCAtIDFdLnRhcmdldC5maWVsZCA9PT0gdGFyZ2V0c1tqXS50YXJnZXQuZmllbGQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRzU3F1YXNoZWRbdGFyZ2V0c1NxdWFzaGVkLmxlbmd0aCAtIDFdLnNwYW5Vc2VkKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldHNTcXVhc2hlZC5wdXNoKHRhcmdldHNbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldHNTcXVhc2hlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQaW5zIHRoZSBjb2x1bW4gYXQgdGhlIHByb3ZpZGVkIGluZGV4IGluIHRoZSBwaW5uZWQgYXJlYS4gRGVmYXVsdHMgdG8gaW5kZXggYDBgIGlmIG5vdCBwcm92aWRlZC5cbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgY29sdW1uIGlzIHN1Y2Nlc3NmdWxseSBwaW5uZWQuIFJldHVybnMgYGZhbHNlYCBpZiB0aGUgY29sdW1uIGNhbm5vdCBiZSBwaW5uZWQuXG4gICAgICogQ29sdW1uIGNhbm5vdCBiZSBwaW5uZWQgaWY6XG4gICAgICogLSBJcyBhbHJlYWR5IHBpbm5lZFxuICAgICAqIC0gaW5kZXggYXJndW1lbnQgaXMgb3V0IG9mIHJhbmdlXG4gICAgICogLSBUaGUgcGlubmVkIGFyZWEgZXhjZWVkcyA4MCUgb2YgdGhlIGdyaWQgd2lkdGhcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHN1Y2Nlc3MgPSB0aGlzLmNvbHVtbi5waW4oKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHBpbihpbmRleD86IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICAvLyBUT0RPOiBQcm9iYWJseSBzaG91bGQgdGhlIHJldHVybiB0eXBlIG9mIHRoZSBvbGQgZnVuY3Rpb25zXG4gICAgICAgIC8vIHNob3VsZCBiZSBtb3ZlZCBhcyBhIGV2ZW50IHBhcmFtZXRlci5cbiAgICAgICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICAgICAgdGhpcy5ncmlkLmVuZEVkaXQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3Bpbm5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucGFyZW50ICYmICF0aGlzLnBhcmVudC5waW5uZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvcExldmVsUGFyZW50LnBpbihpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBncmlkID0gKHRoaXMuZ3JpZCBhcyBhbnkpO1xuICAgICAgICBjb25zdCBoYXNJbmRleCA9IGluZGV4ICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChoYXNJbmRleCAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID49IGdyaWQucGlubmVkQ29sdW1ucy5sZW5ndGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3aWR0aCA9IHBhcnNlSW50KHRoaXMud2lkdGgsIDEwKTtcblxuICAgICAgICBpZiAoIXRoaXMucGFyZW50ICYmIChncmlkLmdldFVucGlubmVkV2lkdGgodHJ1ZSkgLSB3aWR0aCA8IGdyaWQudW5waW5uZWRBcmVhTWluV2lkdGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9waW5uZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl91bnBpbm5lZEluZGV4ID0gZ3JpZC5fdW5waW5uZWRDb2x1bW5zLmluZGV4T2YodGhpcyk7XG4gICAgICAgIGluZGV4ID0gaW5kZXggIT09IHVuZGVmaW5lZCA/IGluZGV4IDogZ3JpZC5fcGlubmVkQ29sdW1ucy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHRhcmdldENvbHVtbiA9IGdyaWQuX3Bpbm5lZENvbHVtbnNbaW5kZXhdO1xuICAgICAgICBjb25zdCBhcmdzID0geyBjb2x1bW46IHRoaXMsIGluc2VydEF0SW5kZXg6IGluZGV4LCBpc1Bpbm5lZDogdHJ1ZSB9O1xuICAgICAgICBncmlkLm9uQ29sdW1uUGlubmluZy5lbWl0KGFyZ3MpO1xuXG4gICAgICAgIGlmIChncmlkLl9waW5uZWRDb2x1bW5zLmluZGV4T2YodGhpcykgPT09IC0xKSB7XG4gICAgICAgICAgICBncmlkLl9waW5uZWRDb2x1bW5zLnNwbGljZShhcmdzLmluc2VydEF0SW5kZXgsIDAsIHRoaXMpO1xuXG4gICAgICAgICAgICBpZiAoZ3JpZC5fdW5waW5uZWRDb2x1bW5zLmluZGV4T2YodGhpcykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgZ3JpZC5fdW5waW5uZWRDb2x1bW5zLnNwbGljZShncmlkLl91bnBpbm5lZENvbHVtbnMuaW5kZXhPZih0aGlzKSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzSW5kZXgpIHtcbiAgICAgICAgICAgIGdyaWQuX21vdmVDb2x1bW5zKHRoaXMsIHRhcmdldENvbHVtbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2x1bW5Hcm91cCkge1xuICAgICAgICAgICAgdGhpcy5hbGxDaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnBpbigpKTtcbiAgICAgICAgICAgIGdyaWQucmVpbml0UGluU3RhdGVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBncmlkLnJlc2V0Q2FjaGVzKCk7XG4gICAgICAgIGdyaWQuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgaWYgKHRoaXMuY29sdW1uTGF5b3V0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5jb2x1bW5zLmZpbHRlcih4ID0+IHguY29sdW1uTGF5b3V0KS5mb3JFYWNoKCB4ID0+IHgucG9wdWxhdGVWaXNpYmxlSW5kZXhlcygpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdyaWQuZmlsdGVyaW5nU2VydmljZS5yZWZyZXNoRXhwcmVzc2lvbnMoKTtcbiAgICAgICAgdGhpcy5ncmlkLnJlZnJlc2hTZWFyY2godHJ1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVbnBpbnMgdGhlIGNvbHVtbiBhbmQgcGxhY2UgaXQgYXQgdGhlIHByb3ZpZGVkIGluZGV4IGluIHRoZSB1bnBpbm5lZCBhcmVhLiBEZWZhdWx0cyB0byBpbmRleCBgMGAgaWYgbm90IHByb3ZpZGVkLlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBjb2x1bW4gaXMgc3VjY2Vzc2Z1bGx5IHVucGlubmVkLiBSZXR1cm5zIGBmYWxzZWAgaWYgdGhlIGNvbHVtbiBjYW5ub3QgYmUgdW5waW5uZWQuXG4gICAgICogQ29sdW1uIGNhbm5vdCBiZSB1bnBpbm5lZCBpZjpcbiAgICAgKiAtIElzIGFscmVhZHkgdW5waW5uZWRcbiAgICAgKiAtIGluZGV4IGFyZ3VtZW50IGlzIG91dCBvZiByYW5nZVxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgc3VjY2VzcyA9IHRoaXMuY29sdW1uLnVucGluKCk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyB1bnBpbihpbmRleD86IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQuZW5kRWRpdCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX3Bpbm5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnBpbm5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9wTGV2ZWxQYXJlbnQudW5waW4oaW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ3JpZCA9ICh0aGlzLmdyaWQgYXMgYW55KTtcbiAgICAgICAgY29uc3QgaGFzSW5kZXggPSBpbmRleCAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoaGFzSW5kZXggJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSBncmlkLl91bnBpbm5lZENvbHVtbnMubGVuZ3RoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXggPSAoaW5kZXggIT09IHVuZGVmaW5lZCA/IGluZGV4IDpcbiAgICAgICAgICAgIHRoaXMuX3VucGlubmVkSW5kZXggIT09IHVuZGVmaW5lZCA/IHRoaXMuX3VucGlubmVkSW5kZXggOiB0aGlzLmluZGV4KTtcbiAgICAgICAgdGhpcy5fcGlubmVkID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0Q29sdW1uID0gZ3JpZC5fdW5waW5uZWRDb2x1bW5zW2luZGV4XTtcblxuICAgICAgICBncmlkLl91bnBpbm5lZENvbHVtbnMuc3BsaWNlKGluZGV4LCAwLCB0aGlzKTtcbiAgICAgICAgaWYgKGdyaWQuX3Bpbm5lZENvbHVtbnMuaW5kZXhPZih0aGlzKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGdyaWQuX3Bpbm5lZENvbHVtbnMuc3BsaWNlKGdyaWQuX3Bpbm5lZENvbHVtbnMuaW5kZXhPZih0aGlzKSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzSW5kZXgpIHtcbiAgICAgICAgICAgIGdyaWQuX21vdmVDb2x1bW5zKHRoaXMsIHRhcmdldENvbHVtbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2x1bW5Hcm91cCkge1xuICAgICAgICAgICAgdGhpcy5hbGxDaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnVucGluKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JpZC5yZWluaXRQaW5TdGF0ZXMoKTtcbiAgICAgICAgZ3JpZC5yZXNldENhY2hlcygpO1xuXG4gICAgICAgIGNvbnN0IGluc2VydEF0SW5kZXggPSBncmlkLl91bnBpbm5lZENvbHVtbnMuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgY29uc3QgYXJncyA9IHsgY29sdW1uOiB0aGlzLCBpbnNlcnRBdEluZGV4LCBpc1Bpbm5lZDogZmFsc2UgfTtcbiAgICAgICAgZ3JpZC5vbkNvbHVtblBpbm5pbmcuZW1pdChhcmdzKTtcblxuICAgICAgICBncmlkLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIGlmICh0aGlzLmNvbHVtbkxheW91dENoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQuY29sdW1ucy5maWx0ZXIoeCA9PiB4LmNvbHVtbkxheW91dCkuZm9yRWFjaCggeCA9PiB4LnBvcHVsYXRlVmlzaWJsZUluZGV4ZXMoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncmlkLmZpbHRlcmluZ1NlcnZpY2UucmVmcmVzaEV4cHJlc3Npb25zKCk7XG4gICAgICAgIHRoaXMuZ3JpZC5yZWZyZXNoU2VhcmNoKHRydWUpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSB0b3AgbGV2ZWwgcGFyZW50IGNvbHVtbi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRvcExldmVsUGFyZW50ID0gIHRoaXMuY29sdW1uLnRvcExldmVsUGFyZW50O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgdG9wTGV2ZWxQYXJlbnQoKSB7XG4gICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudDtcbiAgICAgICAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQucGFyZW50KSB7XG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICAgICAgdGhpcy5ncmlkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgaGVhZGVyIG9mIHRoZSBjb2x1bW4uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bW4gPSB0aGlzLmdyaWQuY29sdW1uTGlzdC5maWx0ZXIoYyA9PiBjLmZpZWxkID09PSAnSUQnKVswXTtcbiAgICAgKiBsZXQgaGVhZGVyQ2VsbCA9IGNvbHVtbi5oZWFkZXJDZWxsO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgaGVhZGVyQ2VsbCgpOiBJZ3hHcmlkSGVhZGVyQ29tcG9uZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5oZWFkZXJDZWxsTGlzdC5maW5kKChoZWFkZXIpID0+IGhlYWRlci5jb2x1bW4gPT09IHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgZmlsdGVyIGNlbGwgb2YgdGhlIGNvbHVtbi5cbiAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAqIGxldCBjb2x1bW4gPSB0aGlzLmdyaWQuY29sdW1uTGlzdC5maWx0ZXIoYyA9PiBjLmZpZWxkID09PSAnSUQnKVswXTtcbiAgICAqIGxldCBmaWx0ZXJlbGwgPSBjb2x1bW4uZmlsdGVyZWxsO1xuICAgICogYGBgXG4gICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgKi9cbiAgICBnZXQgZmlsdGVyQ2VsbCgpOiBJZ3hHcmlkRmlsdGVyaW5nQ2VsbENvbXBvbmVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuZmlsdGVyQ2VsbExpc3QuZmluZCgoZmlsdGVyQ2VsbCkgPT4gZmlsdGVyQ2VsbC5jb2x1bW4gPT09IHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGhlYWRlciBncm91cCBvZiB0aGUgY29sdW1uLlxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgaGVhZGVyR3JvdXAoKTogSWd4R3JpZEhlYWRlckdyb3VwQ29tcG9uZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5oZWFkZXJHcm91cHNMaXN0LmZpbmQoKGhlYWRlckdyb3VwKSA9PiBoZWFkZXJHcm91cC5jb2x1bW4gPT09IHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF1dG9zaXplIHRoZSBjb2x1bW4gdG8gdGhlIGxvbmdlc3QgY3VycmVudGx5IHZpc2libGUgY2VsbCB2YWx1ZSwgaW5jbHVkaW5nIHRoZSBoZWFkZXIgY2VsbC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogQFZpZXdDaGlsZCgnZ3JpZCcpIGdyaWQ6IElneEdyaWRDb21wb25lbnQ7XG4gICAgICpcbiAgICAgKiBsZXQgY29sdW1uID0gdGhpcy5ncmlkLmNvbHVtbkxpc3QuZmlsdGVyKGMgPT4gYy5maWVsZCA9PT0gJ0lEJylbMF07XG4gICAgICogY29sdW1uLmF1dG9zaXplKCk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBhdXRvc2l6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbHVtbkdyb3VwKSB7XG5cbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmdldExhcmdlc3RDZWxsV2lkdGgoKTtcblxuICAgICAgICAgICAgdGhpcy5ncmlkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgdGhpcy5ncmlkLnJlZmxvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDYWxjV2lkdGgoKTogYW55IHtcbiAgICAgICAgaWYgKHRoaXMuX2NhbGNXaWR0aCAhPT0gbnVsbCAmJiAhaXNOYU4odGhpcy5jYWxjUGl4ZWxXaWR0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWxjV2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZUNhbGNXaWR0aCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FsY1dpZHRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBSZXR1cm5zIHRoZSBzaXplIChpbiBwaXhlbHMpIG9mIHRoZSBsb25nZXN0IGN1cnJlbnRseSB2aXNpYmxlIGNlbGwsIGluY2x1ZGluZyB0aGUgaGVhZGVyIGNlbGwuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIEBWaWV3Q2hpbGQoJ2dyaWQnKSBncmlkOiBJZ3hHcmlkQ29tcG9uZW50O1xuICAgICAqXG4gICAgICogbGV0IGNvbHVtbiA9IHRoaXMuZ3JpZC5jb2x1bW5MaXN0LmZpbHRlcihjID0+IGMuZmllbGQgPT09ICdJRCcpWzBdO1xuICAgICAqIGxldCBzaXplID0gY29sdW1uLmdldExhcmdlc3RDZWxsV2lkdGgoKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldExhcmdlc3RDZWxsV2lkdGgoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgcmFuZ2UgPSB0aGlzLmdyaWQuZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgY29uc3QgbGFyZ2VzdCA9IG5ldyBNYXA8bnVtYmVyLCBudW1iZXI+KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2VsbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGNlbGxzQ29udGVudFdpZHRocyA9IFtdO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2VsbHNbMF0ubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jZWxscy5mb3JFYWNoKChjZWxsKSA9PiBjZWxsc0NvbnRlbnRXaWR0aHMucHVzaChjZWxsLmNhbGN1bGF0ZVNpemVUb0ZpdChyYW5nZSkpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2VsbHNDb250ZW50V2lkdGhzID0gdGhpcy5jZWxscy5tYXAoKGNlbGwpID0+IGdldE5vZGVTaXplVmlhUmFuZ2UocmFuZ2UsIGNlbGwubmF0aXZlRWxlbWVudCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGNlbGxzQ29udGVudFdpZHRocy5pbmRleE9mKE1hdGgubWF4KC4uLmNlbGxzQ29udGVudFdpZHRocykpO1xuICAgICAgICAgICAgY29uc3QgY2VsbFN0eWxlID0gdGhpcy5ncmlkLmRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUodGhpcy5jZWxsc1tpbmRleF0ubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCBjZWxsUGFkZGluZyA9IHBhcnNlRmxvYXQoY2VsbFN0eWxlLnBhZGRpbmdMZWZ0KSArIHBhcnNlRmxvYXQoY2VsbFN0eWxlLnBhZGRpbmdSaWdodCkgK1xuICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoY2VsbFN0eWxlLmJvcmRlclJpZ2h0V2lkdGgpO1xuXG4gICAgICAgICAgICBsYXJnZXN0LnNldChNYXRoLm1heCguLi5jZWxsc0NvbnRlbnRXaWR0aHMpLCBjZWxsUGFkZGluZyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oZWFkZXJDZWxsKSB7XG4gICAgICAgICAgICBsZXQgaGVhZGVyQ2VsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLmhlYWRlclRlbXBsYXRlICYmIHRoaXMuaGVhZGVyQ2VsbC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGhlYWRlckNlbGwgPSBNYXRoLm1heCguLi5BcnJheS5mcm9tKHRoaXMuaGVhZGVyQ2VsbC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW4pXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGNoaWxkKSA9PiBnZXROb2RlU2l6ZVZpYVJhbmdlKHJhbmdlLCBjaGlsZCkpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyQ2VsbCA9IGdldE5vZGVTaXplVmlhUmFuZ2UocmFuZ2UsIHRoaXMuaGVhZGVyQ2VsbC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zb3J0YWJsZSB8fCB0aGlzLmZpbHRlcmFibGUpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJDZWxsICs9IHRoaXMuaGVhZGVyQ2VsbC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGhlYWRlclN0eWxlID0gdGhpcy5ncmlkLmRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUodGhpcy5oZWFkZXJDZWxsLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJQYWRkaW5nID0gcGFyc2VGbG9hdChoZWFkZXJTdHlsZS5wYWRkaW5nTGVmdCkgKyBwYXJzZUZsb2F0KGhlYWRlclN0eWxlLnBhZGRpbmdSaWdodCkgK1xuICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoaGVhZGVyU3R5bGUuYm9yZGVyUmlnaHRXaWR0aCk7XG4gICAgICAgICAgICBsYXJnZXN0LnNldChoZWFkZXJDZWxsLCBoZWFkZXJQYWRkaW5nKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGFyZ2VzdENlbGwgPSBNYXRoLm1heCguLi5BcnJheS5mcm9tKGxhcmdlc3Qua2V5cygpKSk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gTWF0aC5jZWlsKGxhcmdlc3RDZWxsICsgbGFyZ2VzdC5nZXQobGFyZ2VzdENlbGwpKTtcblxuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKHdpZHRoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gd2lkdGggKyAncHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldENlbGxXaWR0aCgpIHtcbiAgICAgICAgY29uc3QgY29sV2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICBjb25zdCBpc1BlcmNlbnRhZ2VXaWR0aCA9IGNvbFdpZHRoICYmIHR5cGVvZiBjb2xXaWR0aCA9PT0gJ3N0cmluZycgJiYgY29sV2lkdGguaW5kZXhPZignJScpICE9PSAtMTtcblxuICAgICAgICBpZiAodGhpcy5jb2x1bW5MYXlvdXRDaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbFdpZHRoICYmICFpc1BlcmNlbnRhZ2VXaWR0aCkge1xuXG4gICAgICAgICAgICBsZXQgY2VsbFdpZHRoID0gY29sV2lkdGg7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNlbGxXaWR0aCAhPT0gJ3N0cmluZycgfHwgY2VsbFdpZHRoLmVuZHNXaXRoKCdweCcpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNlbGxXaWR0aCArPSAncHgnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2VsbFdpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGNvbFdpZHRoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjYWNoZUNhbGNXaWR0aCgpOiBhbnkge1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkQVBJLmdyaWQ7XG4gICAgICAgIGNvbnN0IGNvbFdpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgY29uc3QgaXNQZXJjZW50YWdlV2lkdGggPSBjb2xXaWR0aCAmJiB0eXBlb2YgY29sV2lkdGggPT09ICdzdHJpbmcnICYmIGNvbFdpZHRoLmluZGV4T2YoJyUnKSAhPT0gLTE7XG4gICAgICAgIGlmIChpc1BlcmNlbnRhZ2VXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5fY2FsY1dpZHRoID0gcGFyc2VJbnQoY29sV2lkdGgsIDEwKSAvIDEwMCAqIChncmlkLmNhbGNXaWR0aCAtIGdyaWQuZmVhdHVyZUNvbHVtbnNXaWR0aCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIWNvbFdpZHRoKSB7XG4gICAgICAgICAgICAvLyBubyB3aWR0aFxuICAgICAgICAgICAgdGhpcy5fY2FsY1dpZHRoID0gdGhpcy5kZWZhdWx0V2lkdGggfHwgZ3JpZC5nZXRQb3NzaWJsZUNvbHVtbldpZHRoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jYWxjV2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FsY1BpeGVsV2lkdGggPSBwYXJzZUludCh0aGlzLl9jYWxjV2lkdGgsIDEwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHBvcHVsYXRlVmlzaWJsZUluZGV4ZXMoKSB7IH1cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IElneENvbHVtbkNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSWd4Q29sdW1uR3JvdXBDb21wb25lbnQpIH1dLFxuICAgIHNlbGVjdG9yOiAnaWd4LWNvbHVtbi1ncm91cCcsXG4gICAgdGVtcGxhdGU6IGBgXG59KVxuZXhwb3J0IGNsYXNzIElneENvbHVtbkdyb3VwQ29tcG9uZW50IGV4dGVuZHMgSWd4Q29sdW1uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKElneENvbHVtbkNvbXBvbmVudCwgeyByZWFkOiBJZ3hDb2x1bW5Db21wb25lbnQgfSlcbiAgICBjaGlsZHJlbiA9IG5ldyBRdWVyeUxpc3Q8SWd4Q29sdW1uQ29tcG9uZW50PigpO1xuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNvbHVtbiBncm91cCBgc3VtbWFyaWVzYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNvbHVtbkdyb3VwU3VtbWFyaWVzID0gdGhpcy5jb2x1bW5Hcm91cC5zdW1tYXJpZXM7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkdyb3VwQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHN1bW1hcmllcygpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3VtbWFyaWVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjb2x1bW4gZ3JvdXAgYHN1bW1hcmllc2AuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuY29sdW1uR3JvdXAuc3VtbWFyaWVzID0gSWd4TnVtYmVyU3VtbWFyeU9wZXJhbmQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkdyb3VwQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHNldCBzdW1tYXJpZXMoY2xhc3NSZWY6IGFueSkgeyB9XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHdoZXRoZXIgdGhlIGNvbHVtbiBncm91cCBpcyBgc2VhcmNoYWJsZWAuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgdHJ1ZWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc1NlYXJjaGFibGUgPSAgdGhpcy5jb2x1bW5Hcm91cC5zZWFyY2hhYmxlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiAgPGlneC1jb2x1bW4tZ3JvdXAgW3NlYXJjaGFibGVdID0gXCJmYWxzZVwiPjwvaWd4LWNvbHVtbi1ncm91cD5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uR3JvdXBDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZWFyY2hhYmxlID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjb2x1bW4gZ3JvdXAgYGZpbHRlcnNgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY29sdW1uR3JvdXBGaWx0ZXJzID0gdGhpcy5jb2x1bW5Hcm91cC5maWx0ZXJzO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Hcm91cENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBmaWx0ZXJzKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjb2x1bW4gZ3JvdXAgYGZpbHRlcnNgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmNvbHVtbkdyb3VwLmZpbHRlcnMgPSBJZ3hTdHJpbmdGaWx0ZXJpbmdPcGVyYW5kO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Hcm91cENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgZmlsdGVycyhjbGFzc1JlZjogYW55KSB7IH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGJvZHkgdGVtcGxhdGUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBib2R5VGVtcGxhdGUgPSB0aGlzLmNvbHVtbkdyb3VwLmJvZHlUZW1wbGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uR3JvdXBDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgYm9keVRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm9keVRlbXBsYXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgc2V0IGJvZHlUZW1wbGF0ZSh0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBpbmxpbmUgZWRpdG9yIHRlbXBsYXRlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaW5saW5lRWRpdG9yVGVtcGxhdGUgPSB0aGlzLmNvbHVtbkdyb3VwLmlubGluZUVkaXRvclRlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Hcm91cENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBpbmxpbmVFZGl0b3JUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lubGluZUVkaXRvclRlbXBsYXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgc2V0IGlubGluZUVkaXRvclRlbXBsYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjb2x1bW4gZ3JvdXAgY2VsbHMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bW5DZWxscyA9IHRoaXMuY29sdW1uR3JvdXAuY2VsbHM7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkdyb3VwQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGNlbGxzKCk6IElneEdyaWRDZWxsQ29tcG9uZW50W10ge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgd2hldGhlciB0aGUgY29sdW1uIGdyb3VwIGlzIGhpZGRlbi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzSGlkZGVuID0gdGhpcy5jb2x1bW5Hcm91cC5oaWRkZW47XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkdyb3VwQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgaGlkZGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxDaGlsZHJlbi5ldmVyeShjID0+IGMuaGlkZGVuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY29sdW1uIGdyb3VwIGhpZGRlbiBwcm9wZXJ0eS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogPGlneC1jb2x1bW4gW2hpZGRlbl0gPSBcInRydWVcIj48L2lneC1jb2x1bW4+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkdyb3VwQ29tcG9uZW50XG4gICAgICovXG4gICAgc2V0IGhpZGRlbih2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9oaWRkZW4gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLmhpZGRlbiA9IHZhbHVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICAvKlxuICAgICAgICAgICAgQENvbnRlbnRDaGlsZHJlbiB3aXRoIGRlc2NlbmRhbnRzIHN0aWxsIHJldHVybnMgdGhlIGBwYXJlbnRgXG4gICAgICAgICAgICBjb21wb25lbnQgaW4gdGhlIHF1ZXJ5IGxpc3QuXG4gICAgICAgICovXG4gICAgICAgIGlmICh0aGlzLmhlYWRUZW1wbGF0ZSAmJiB0aGlzLmhlYWRUZW1wbGF0ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX2hlYWRlclRlbXBsYXRlID0gdGhpcy5oZWFkVGVtcGxhdGUudG9BcnJheSgpWzBdLnRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucmVzZXQodGhpcy5jaGlsZHJlbi50b0FycmF5KCkuc2xpY2UoMSkpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gdGhpcztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNoaWxkcmVuIGNvbHVtbnMgY29sbGVjdGlvbi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNvbHVtbnMgPSAgdGhpcy5jb2x1bW5Hcm91cC5hbGxDaGlsZHJlbjtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uR3JvdXBDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgYWxsQ2hpbGRyZW4oKTogSWd4Q29sdW1uQ29tcG9uZW50W10ge1xuICAgICAgICByZXR1cm4gZmxhdHRlbih0aGlzLmNoaWxkcmVuLnRvQXJyYXkoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhlIGNvbHVtbiBpcyBhIGBDb2x1bW5Hcm91cGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc0NvbHVtbkdyb3VwID0gIHRoaXMuY29sdW1uR3JvdXAuY29sdW1uR3JvdXBcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uR3JvdXBDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgY29sdW1uR3JvdXAoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoZSBjb2x1bW4gaXMgYSBgQ29sdW1uTGF5b3V0YCBmb3IgbXVsdGktcm93IGxheW91dC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNvbHVtbkdyb3VwID0gIHRoaXMuY29sdW1uLmNvbHVtbkdyb3VwO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgY29sdW1uTGF5b3V0KCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHdpZHRoIG9mIHRoZSBjb2x1bW4gZ3JvdXAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bW5Hcm91cFdpZHRoID0gdGhpcy5jb2x1bW5Hcm91cC53aWR0aDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uR3JvdXBDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgd2lkdGgoKSB7XG4gICAgICAgIGxldCBpc0NoaWxkcmVuV2lkdGhJblBlcmNlbnQgPSBmYWxzZSwgd2lkdGg7XG4gICAgICAgIHdpZHRoID0gYCR7dGhpcy5jaGlsZHJlbi5yZWR1Y2UoKGFjYywgdmFsKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsLmhpZGRlbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbC53aWR0aCA9PT0gJ3N0cmluZycgJiYgdmFsLndpZHRoLmluZGV4T2YoJyUnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICBpc0NoaWxkcmVuV2lkdGhJblBlcmNlbnQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjYyArIHBhcnNlSW50KHZhbC53aWR0aCwgMTApO1xuICAgICAgICB9LCAwKX1gO1xuICAgICAgICByZXR1cm4gaXNDaGlsZHJlbldpZHRoSW5QZXJjZW50ID8gd2lkdGggKyAnJScgOiB3aWR0aDtcbiAgICB9XG5cbiAgICBzZXQgd2lkdGgodmFsKSB7IH1cblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4sIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIC8vIEQuUC4gY29uc3RydWN0b3IgZHVwbGljYXRpb24gZHVlIHRvIGVzNiBjb21waWxhdGlvbiwgbWlnaHQgYmUgb2Jzb2xldGUgaW4gdGhlIGZ1dHVyZVxuICAgICAgICBzdXBlcihncmlkQVBJLCBjZHIpO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBJZ3hDb2x1bW5Db21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElneENvbHVtbkxheW91dENvbXBvbmVudCkgfV0sXG4gICAgc2VsZWN0b3I6ICdpZ3gtY29sdW1uLWxheW91dCcsXG4gICAgdGVtcGxhdGU6IGBgXG59KVxuZXhwb3J0IGNsYXNzIElneENvbHVtbkxheW91dENvbXBvbmVudCBleHRlbmRzIElneENvbHVtbkdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgcHVibGljIGNoaWxkcmVuVmlzaWJsZUluZGV4ZXMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB3aWR0aCBvZiB0aGUgY29sdW1uIGxheW91dC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNvbHVtbkdyb3VwV2lkdGggPSB0aGlzLmNvbHVtbkdyb3VwLndpZHRoO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Hcm91cENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCB3aWR0aCgpOiBhbnkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0RmlsbGVkQ2hpbGRDb2x1bW5TaXplcyh0aGlzLmNoaWxkcmVuKS5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MgKyBwYXJzZUludCh2YWwsIDEwKSwgMCk7XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG5cbiAgICBzZXQgd2lkdGgodmFsOiBhbnkpIHsgfVxuXG4gICAgZ2V0IGNvbHVtbkxheW91dCgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDYWxjV2lkdGgoKTogYW55IHtcbiAgICAgICAgbGV0IGJvcmRlcldpZHRoID0gMDtcblxuICAgICAgICBpZiAodGhpcy5oZWFkZXJHcm91cCAmJiB0aGlzLmhlYWRlckdyb3VwLmhhc0xhc3RQaW5uZWRDaGlsZENvbHVtbikge1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyU3R5bGVzID0gdGhpcy5ncmlkLmRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUodGhpcy5oZWFkZXJHcm91cC5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgYm9yZGVyV2lkdGggPSBwYXJzZUludChoZWFkZXJTdHlsZXMuYm9yZGVyUmlnaHRXaWR0aCwgMTApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldENhbGNXaWR0aCgpICsgYm9yZGVyV2lkdGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY29sdW1uIHZpc2libGUgaW5kZXguXG4gICAgICogSWYgdGhlIGNvbHVtbiBpcyBub3QgdmlzaWJsZSwgcmV0dXJucyBgLTFgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdmlzaWJsZUNvbHVtbkluZGV4ID0gIHRoaXMuY29sdW1uLnZpc2libGVJbmRleDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IHZpc2libGVJbmRleCgpOiBudW1iZXIge1xuICAgICAgICBpZiAoIWlzTmFOKHRoaXMuX3ZJbmRleCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92SW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1bnBpbm5lZENvbHVtbnMgPSB0aGlzLmdyaWQudW5waW5uZWRDb2x1bW5zLmZpbHRlcihjID0+IGMuY29sdW1uTGF5b3V0ICYmICFjLmhpZGRlbik7XG4gICAgICAgIGNvbnN0IHBpbm5lZENvbHVtbnMgPSB0aGlzLmdyaWQucGlubmVkQ29sdW1ucy5maWx0ZXIoYyA9PiBjLmNvbHVtbkxheW91dCAmJiAhYy5oaWRkZW4pO1xuICAgICAgICBsZXQgdkluZGV4ID0gLTE7XG5cbiAgICAgICAgaWYgKCF0aGlzLnBpbm5lZCkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXhJbkNvbGxlY3Rpb24gPSB1bnBpbm5lZENvbHVtbnMuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIHZJbmRleCA9IGluZGV4SW5Db2xsZWN0aW9uID09PSAtMSA/IC0xIDogcGlubmVkQ29sdW1ucy5sZW5ndGggKyBpbmRleEluQ29sbGVjdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZJbmRleCA9IHBpbm5lZENvbHVtbnMuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl92SW5kZXggPSB2SW5kZXg7XG4gICAgICAgIHJldHVybiB2SW5kZXg7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBHZXRzIHdoZXRoZXIgdGhlIGNvbHVtbiBsYXlvdXQgaXMgaGlkZGVuLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNIaWRkZW4gPSB0aGlzLmNvbHVtbkdyb3VwLmhpZGRlbjtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uR3JvdXBDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBoaWRkZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oaWRkZW47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY29sdW1uIGxheW91dCBoaWRkZW4gcHJvcGVydHkuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIDxpZ3gtY29sdW1uLWxheW91dCBbaGlkZGVuXSA9IFwidHJ1ZVwiPjwvaWd4LWNvbHVtbi0+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkdyb3VwQ29tcG9uZW50XG4gICAgICovXG4gICAgc2V0IGhpZGRlbih2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9oaWRkZW4gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLmhpZGRlbiA9IHZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZCAmJiB0aGlzLmdyaWQuY29sdW1ucyAmJiB0aGlzLmdyaWQuY29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyByZXNldCBpbmRleGVzIGluIGNhc2UgY29sdW1ucyBhcmUgaGlkZGVuL3Nob3duIHJ1bnRpbWVcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5jb2x1bW5zLmZpbHRlcih4ID0+IHguY29sdW1uR3JvdXApLmZvckVhY2goIHggPT4geC5wb3B1bGF0ZVZpc2libGVJbmRleGVzKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgKi9cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHN1cGVyLm5nQWZ0ZXJDb250ZW50SW5pdCgpO1xuICAgICAgICBpZiAoIXRoaXMuaGlkZGVuKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGRlbiA9IHRoaXMuYWxsQ2hpbGRyZW4uc29tZSh4ID0+IHguaGlkZGVuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5oaWRkZW4gPSB0aGlzLmhpZGRlbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgY2hpbGQuZGlzYWJsZUhpZGluZyA9IHRydWU7XG4gICAgICAgICAgICBjaGlsZC5kaXNhYmxlUGlubmluZyA9IHRydWU7XG4gICAgICAgICAgICBjaGlsZC5tb3ZhYmxlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogR2V0cyB3aGV0aGVyIHRoZSBncm91cCBjb250YWlucyB0aGUgbGFzdCBwaW5uZWQgY2hpbGQgY29sdW1uIG9mIHRoZSBjb2x1bW4gbGF5b3V0LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY29sdW1zSGFzTGFzdFBpbm5lZCA9IHRoaXMuY29sdW1uTGF5b3V0Lmhhc0xhc3RQaW5uZWRDaGlsZENvbHVtbjtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uTGF5b3V0Q29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGhhc0xhc3RQaW5uZWRDaGlsZENvbHVtbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC5pc0xhc3RQaW5uZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICovXG4gICAgcHVibGljIHBvcHVsYXRlVmlzaWJsZUluZGV4ZXMoKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5WaXNpYmxlSW5kZXhlcyA9IFtdO1xuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkQVBJLmdyaWQ7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBncmlkICYmIGdyaWQucGlubmVkQ29sdW1ucyAmJiBncmlkLnVucGlubmVkQ29sdW1ucyA/IGdyaWQucGlubmVkQ29sdW1ucy5jb25jYXQoZ3JpZC51bnBpbm5lZENvbHVtbnMpIDogW107XG4gICAgICAgIGNvbnN0IG9yZGVyZWRDb2xzID0gY29sdW1uc1xuICAgICAgICAuZmlsdGVyKHggPT4gIXguY29sdW1uR3JvdXAgJiYgIXguaGlkZGVuKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5yb3dTdGFydCAtIGIucm93U3RhcnQgfHwgY29sdW1ucy5pbmRleE9mKGEucGFyZW50KSAtIGNvbHVtbnMuaW5kZXhPZihiLnBhcmVudCkgfHwgYS5jb2xTdGFydCAtIGIuY29sU3RhcnQpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnMgPSBjaGlsZC5yb3dTdGFydCB8fCAxO1xuICAgICAgICAgICAgbGV0IHZJbmRleCA9IDA7XG4gICAgICAgICAgICAvLyBmaWx0ZXIgb3V0IGFsbCBjb2xzIHdpdGggbGFyZ2VyIHJvd1N0YXJ0XG4gICAgICAgICAgICBjb25zdCBjb2xzID0gb3JkZXJlZENvbHMuZmlsdGVyKGMgPT5cbiAgICAgICAgICAgICAgICAhYy5jb2x1bW5Hcm91cCAmJiAoYy5yb3dTdGFydCB8fCAxKSA8PSBycyk7XG4gICAgICAgICAgICB2SW5kZXggPSBjb2xzLmluZGV4T2YoY2hpbGQpO1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlblZpc2libGVJbmRleGVzLnB1c2goe2NvbHVtbjogY2hpbGQsIGluZGV4OiB2SW5kZXh9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=