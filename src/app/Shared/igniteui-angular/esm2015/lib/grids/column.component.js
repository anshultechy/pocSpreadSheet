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
export class IgxColumnComponent {
    /**
     * @param {?} gridAPI
     * @param {?} cdr
     */
    constructor(gridAPI, cdr) {
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
    /**
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
    get groupable() {
        return this._groupable;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set groupable(val) {
        this._groupable = val;
        if (this.grid) {
            this.grid.cdr.markForCheck();
        }
    }
    /**
     * Gets whether the column is editable.
     * Default value is `false`.
     * ```typescript
     * let isEditable = this.column.editable;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get editable() {
        // Updating the primary key when grid has transactions (incl. row edit)
        // should not be allowed, as that can corrupt transaction state.
        /** @type {?} */
        const rowEditable = this.grid && this.grid.rowEditable;
        /** @type {?} */
        const hasTransactions = this.grid && this.grid.transactions.enabled;
        if (this.isPrimaryColumn && (rowEditable || hasTransactions)) {
            return false;
        }
        if (this._editable !== undefined) {
            return this._editable;
        }
        else {
            return rowEditable;
        }
    }
    /**
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
    set editable(editable) {
        this._editable = editable;
    }
    /**
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
    get filterable() {
        return this._filterable;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set filterable(val) {
        this._filterable = val;
        if (this.grid) {
            this.grid.cdr.markForCheck();
        }
    }
    /**
     * Gets a value indicating whether the summary for the column is enabled.
     * ```typescript
     * let hasSummary = this.column.hasSummary;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get hasSummary() {
        return this._hasSummary;
    }
    /**
     * Sets a value indicating whether the summary for the column is enabled.
     * Default value is `false`.
     * ```html
     * <igx-column [hasSummary] = "true"></igx-column>
     * ```
     * \@memberof IgxColumnComponent
     * @param {?} value
     * @return {?}
     */
    set hasSummary(value) {
        this._hasSummary = value;
        if (this.grid) {
            this.grid.summaryService.recalculateSummaries();
        }
    }
    /**
     * Gets whether the column is hidden.
     * ```typescript
     * let isHidden = this.column.hidden;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get hidden() {
        return this._hidden;
    }
    /**
     * Sets the column hidden property.
     * Default value is `false`.
     * ```typescript
     * <igx-column [hidden] = "true"></igx-column>
     * ```
     * \@memberof IgxColumnComponent
     * @param {?} value
     * @return {?}
     */
    set hidden(value) {
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
    }
    /**
     * Gets whether the hiding is disabled.
     * ```typescript
     * let isHidingDisabled =  this.column.disableHiding;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get disableHiding() {
        return this._disableHiding;
    }
    /**
     * Enables/disables hiding for the column.
     * Default value is `false`.
     * ```typescript
     * <igx-column [hidden] = "true"></igx-column>
     * ```
     * \@memberof IgxColumnComponent
     * @param {?} value
     * @return {?}
     */
    set disableHiding(value) {
        if (this._disableHiding !== value) {
            this._disableHiding = value;
            this.check();
        }
    }
    /**
     * Gets whether the pinning is disabled.
     * ```typescript
     * let isPinningDisabled =  this.column.disablePinning;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get disablePinning() {
        return this._disablePinning;
    }
    /**
     * Enables/disables pinning for the column.
     * Default value is `false`.
     * ```typescript
     * <igx-column [pinned] = "true"></igx-column>
     * ```
     * \@memberof IgxColumnComponent
     * @param {?} value
     * @return {?}
     */
    set disablePinning(value) {
        if (this._disablePinning !== value) {
            this._disablePinning = value;
            this.check();
        }
    }
    /**
     * Gets the `width` of the column.
     * ```typescript
     * let columnWidth = this.column.width;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get width() {
        return this.widthSetByUser ? this._width : this.defaultWidth;
    }
    /**
     * Sets the `width` of the column.
     * ```html
     * <igx-column [width] = "'25%'"></igx-column>
     * ```
     * \@memberof IgxColumnComponent
     * @param {?} value
     * @return {?}
     */
    set width(value) {
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
    }
    /**
     * @hidden
     * @return {?}
     */
    get calcWidth() {
        return this.getCalcWidth();
    }
    /**
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
    set minWidth(value) {
        /** @type {?} */
        const minVal = parseFloat(value);
        if (Number.isNaN(minVal)) {
            return;
        }
        this._defaultMinWidth = value;
    }
    /**
     * @return {?}
     */
    get minWidth() {
        return !this._defaultMinWidth ? this.defaultMinWidth : this._defaultMinWidth;
    }
    /**
     * Gets the column index.
     * ```typescript
     * let columnIndex = this.column.index;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get index() {
        return this.grid.columns.indexOf(this);
    }
    /**
     * Gets whether the column is `pinned`.
     * ```typescript
     * let isPinned = this.column.pinned;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get pinned() {
        return this._pinned;
    }
    /**
     * Sets whether the column is pinned.
     * Default value is `false`.
     * ```html
     * <igx-column [pinned] = "true"></igx-column>
     * ```
     * \@memberof IgxColumnComponent
     * @param {?} value
     * @return {?}
     */
    set pinned(value) {
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
    }
    /**
     * Gets the column `summaries`.
     * ```typescript
     * let columnSummaries = this.column.summaries;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get summaries() {
        return this._summaries;
    }
    /**
     * Sets the column `summaries`.
     * ```typescript
     * this.column.summaries = IgxNumberSummaryOperand;
     * ```
     * \@memberof IgxColumnComponent
     * @param {?} classRef
     * @return {?}
     */
    set summaries(classRef) {
        this._summaries = new classRef();
        if (this.grid) {
            this.grid.summaryService.removeSummariesCachePerColumn(this.field);
            ((/** @type {?} */ (this.grid)))._summaryPipeTrigger++;
            this.grid.summaryService.recalculateSummaries();
        }
    }
    /**
     * Gets the column `filters`.
     * ```typescript
     * let columnFilters = this.column.filters'
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get filters() {
        return this._filters;
    }
    /**
     * Sets the column `filters`.
     * ```typescript
     * this.column.filters = IgxBooleanFilteringOperand.instance().
     * ```
     * \@memberof IgxColumnComponent
     * @param {?} instance
     * @return {?}
     */
    set filters(instance) {
        this._filters = instance;
    }
    /**
     * Gets the column `sortStrategy`.
     * ```typescript
     * let sortStrategy = this.column.sortStrategy'
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get sortStrategy() {
        return this._sortStrategy;
    }
    /**
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
    set sortStrategy(classRef) {
        this._sortStrategy = classRef;
    }
    /**
     * Gets the function that compares values for grouping.
     * ```typescript
     * let groupingComparer = this.column.groupingComparer'
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get groupingComparer() {
        return this._groupingComparer;
    }
    /**
     * Sets a custom function to compare values for grouping.
     * Subsequent values in the sorted data that the function returns 0 for are grouped.
     * ```typescript
     * this.column.groupingComparer = (a: any, b: any) => { return a === b ? 0 : -1; }
     * ```
     * \@memberof IgxColumnComponent
     * @param {?} funcRef
     * @return {?}
     */
    set groupingComparer(funcRef) {
        this._groupingComparer = funcRef;
    }
    /**
     * Gets the default minimum `width` of the column.
     * ```typescript
     * let defaultMinWidth =  this.column.defaultMinWidth;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get defaultMinWidth() {
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
    }
    /**
     * Returns a reference to the `bodyTemplate`.
     * ```typescript
     * let bodyTemplate = this.column.bodyTemplate;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get bodyTemplate() {
        return this._bodyTemplate;
    }
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
     * \@ViewChild("'bodyTemplate'", {read: TemplateRef })
     * public bodyTemplate: TemplateRef<any>;
     * this.column.bodyTemplate = this.bodyTemplate;
     * ```
     * \@memberof IgxColumnComponent
     * @param {?} template
     * @return {?}
     */
    set bodyTemplate(template) {
        this._bodyTemplate = template;
        if (this.grid) {
            this.grid.cdr.markForCheck();
        }
    }
    /**
     * Returns a reference to the header template.
     * ```typescript
     * let headerTemplate = this.column.headerTemplate;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get headerTemplate() {
        return this._headerTemplate;
    }
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
     * \@ViewChild("'headerTemplate'", {read: TemplateRef })
     * public headerTemplate: TemplateRef<any>;
     * this.column.headerTemplate = this.headerTemplate;
     * ```
     * \@memberof IgxColumnComponent
     * @param {?} template
     * @return {?}
     */
    set headerTemplate(template) {
        this._headerTemplate = template;
        if (this.grid) {
            this.grid.cdr.markForCheck();
        }
    }
    /**
     * Returns a reference to the inline editor template.
     * ```typescript
     * let inlineEditorTemplate = this.column.inlineEditorTemplate;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get inlineEditorTemplate() {
        return this._inlineEditorTemplate;
    }
    /**
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
    set inlineEditorTemplate(template) {
        this._inlineEditorTemplate = template;
        if (this.grid) {
            this.grid.cdr.markForCheck();
        }
    }
    /**
     * Returns a reference to the `filterCellTemplate`.
     * ```typescript
     * let filterCellTemplate = this.column.filterCellTemplate;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get filterCellTemplate() {
        return this._filterCellTemplate;
    }
    /**
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
    set filterCellTemplate(template) {
        this._filterCellTemplate = template;
    }
    /**
     * Gets the cells of the column.
     * ```typescript
     * let columnCells =  this.column.cells;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get cells() {
        return this.grid.rowList.filter((row) => row instanceof IgxRowComponent)
            .map((row) => {
            if (row.cells) {
                return row.cells.filter((cell) => cell.columnIndex === this.index);
            }
        }).reduce((a, b) => a.concat(b), []);
    }
    /**
     * Gets the column visible index.
     * If the column is not visible, returns `-1`.
     * ```typescript
     * let visibleColumnIndex =  this.column.visibleIndex;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get visibleIndex() {
        if (!isNaN(this._vIndex)) {
            return this._vIndex;
        }
        /** @type {?} */
        const unpinnedColumns = this.grid.unpinnedColumns.filter(c => !c.columnGroup);
        /** @type {?} */
        const pinnedColumns = this.grid.pinnedColumns.filter(c => !c.columnGroup);
        /** @type {?} */
        let col = this;
        /** @type {?} */
        let vIndex = -1;
        if (this.columnGroup) {
            col = (/** @type {?} */ (this.allChildren.filter(c => !c.columnGroup)[0]));
        }
        if (this.columnLayoutChild) {
            return this.parent.childrenVisibleIndexes.find(x => x.column === this).index;
        }
        if (!this.pinned) {
            /** @type {?} */
            const indexInCollection = unpinnedColumns.indexOf(col);
            vIndex = indexInCollection === -1 ? -1 : pinnedColumns.length + indexInCollection;
        }
        else {
            vIndex = pinnedColumns.indexOf(col);
        }
        this._vIndex = vIndex;
        return vIndex;
    }
    /**
     * Returns a boolean indicating if the column is a `ColumnGroup`.
     * ```typescript
     * let columnGroup =  this.column.columnGroup;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get columnGroup() {
        return false;
    }
    /**
     * Returns a boolean indicating if the column is a `ColumnLayout` for multi-row layout.
     * ```typescript
     * let columnGroup =  this.column.columnGroup;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get columnLayout() {
        return false;
    }
    /**
     * Returns a boolean indicating if the column is a child of a `ColumnLayout` for multi-row layout.
     * ```typescript
     * let columnLayoutChild =  this.column.columnLayoutChild;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get columnLayoutChild() {
        return this.parent && this.parent.columnLayout;
    }
    /**
     * Returns the children columns collection.
     * Returns an empty array if the column does not contain children columns.
     * ```typescript
     * let childrenColumns =  this.column.allChildren;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get allChildren() {
        return [];
    }
    /**
     * Returns the level of the column in a column group.
     * Returns `0` if the column doesn't have a `parent`.
     * ```typescript
     * let columnLevel =  this.column.level;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get level() {
        /** @type {?} */
        let ptr = this.parent;
        /** @type {?} */
        let lvl = 0;
        while (ptr) {
            lvl++;
            ptr = ptr.parent;
        }
        return lvl;
    }
    /**
     * @return {?}
     */
    get isLastPinned() {
        return this.grid.pinnedColumns[this.grid.pinnedColumns.length - 1] === this;
    }
    /**
     * @return {?}
     */
    get gridRowSpan() {
        return this.rowEnd && this.rowStart ? this.rowEnd - this.rowStart : 1;
    }
    /**
     * @return {?}
     */
    get gridColumnSpan() {
        return this.colEnd && this.colStart ? this.colEnd - this.colStart : 1;
    }
    /**
     * Returns the filteringExpressionsTree of the column.
     * ```typescript
     * let tree =  this.column.filteringExpressionsTree;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get filteringExpressionsTree() {
        return (/** @type {?} */ (this.grid.filteringExpressionsTree.find(this.field)));
    }
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    get isPrimaryColumn() {
        return this.field !== undefined && this.grid !== undefined && this.field === this.grid.primaryKey;
    }
    /**
     * @hidden
     * \@internal
     * @return {?}
     */
    resetCaches() {
        this._vIndex = NaN;
        if (this.grid) {
            this.cacheCalcWidth();
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterContentInit() {
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
    }
    /**
     * @hidden
     * @param {?} isRow
     * @param {?} isIE
     * @return {?}
     */
    getGridTemplate(isRow, isIE) {
        if (isRow) {
            /** @type {?} */
            const rowsCount = this.grid.multiRowLayoutRowSize;
            return isIE ?
                `(1fr)[${rowsCount}]` :
                `repeat(${rowsCount},1fr)`;
        }
        else {
            return this.getColumnSizesString(this.children);
        }
    }
    /**
     * @param {?} children
     * @return {?}
     */
    getInitialChildColumnSizes(children) {
        /** @type {?} */
        const columnSizes = [];
        // find the smallest col spans
        children.forEach(col => {
            if (!col.colStart) {
                return;
            }
            /** @type {?} */
            const newWidthSet = col.widthSetByUser && columnSizes[col.colStart - 1] && !columnSizes[col.colStart - 1].widthSetByUser;
            /** @type {?} */
            const newSpanSmaller = columnSizes[col.colStart - 1] && columnSizes[col.colStart - 1].colSpan > col.gridColumnSpan;
            /** @type {?} */
            const bothWidthsSet = col.widthSetByUser && columnSizes[col.colStart - 1] && columnSizes[col.colStart - 1].widthSetByUser;
            /** @type {?} */
            const bothWidthsNotSet = !col.widthSetByUser && columnSizes[col.colStart - 1] && !columnSizes[col.colStart - 1].widthSetByUser;
            if (columnSizes[col.colStart - 1] === undefined) {
                // If nothing is defined yet take any column at first
                // We use colEnd to know where the column actually ends, because not always it starts where we have it set in columnSizes.
                columnSizes[col.colStart - 1] = {
                    ref: col,
                    width: col.widthSetByUser || this.grid.columnWidthSetByUser ? parseInt(col.calcWidth, 10) : null,
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
                    for (let i = col.colStart - 1 + col.gridColumnSpan; i < columnSizes[col.colStart - 1].colEnd - 1; i++) {
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
                    width: col.widthSetByUser || this.grid.columnWidthSetByUser ? parseInt(col.calcWidth, 10) : null,
                    colSpan: col.gridColumnSpan,
                    colEnd: col.colStart + col.gridColumnSpan,
                    widthSetByUser: col.widthSetByUser
                };
            }
            else if (bothWidthsSet && columnSizes[col.colStart - 1].colSpan < col.gridColumnSpan) {
                // If the column already in the columnSizes has smaller span, we still need to fill any empty places with the current col.
                // Start from where the smaller column set would end and apply the bigger column to the rest depending on how much it spans.
                // Since here we do not have it in columnSizes we set it as a new column keeping the same colSpan.
                for (let i = col.colStart - 1 + columnSizes[col.colStart - 1].colSpan; i < col.colStart - 1 + col.gridColumnSpan; i++) {
                    if (!columnSizes[i] || !columnSizes[i].widthSetByUser) {
                        columnSizes[i] = {
                            ref: col,
                            width: col.widthSetByUser || this.grid.columnWidthSetByUser ? parseInt(col.calcWidth, 10) : null,
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
        for (let i = 0; i < columnSizes.length; i++) {
            if (columnSizes[i] && columnSizes[i].colSpan > 1) {
                /** @type {?} */
                let j = 1;
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
                        const width = columnSizes[i].widthSetByUser ?
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
    }
    /**
     * @param {?} children
     * @return {?}
     */
    getFilledChildColumnSizes(children) {
        /** @type {?} */
        const columnSizes = this.getInitialChildColumnSizes(children);
        // fill the gaps if there are any
        /** @type {?} */
        const result = [];
        for (let i = 0; i < columnSizes.length; i++) {
            if (columnSizes[i] && !!columnSizes[i].width) {
                result.push(columnSizes[i].width + 'px');
            }
            else {
                result.push(parseInt(this.grid.getPossibleColumnWidth(), 10) + 'px');
            }
        }
        return result;
    }
    /**
     * @protected
     * @param {?} children
     * @return {?}
     */
    getColumnSizesString(children) {
        /** @type {?} */
        const res = this.getFilledChildColumnSizes(children);
        return res.join(' ');
    }
    /**
     * @return {?}
     */
    getResizableColUnderEnd() {
        if (this.columnLayout || !this.columnLayoutChild || this.columnGroup) {
            return [{ target: this, spanUsed: 1 }];
        }
        /** @type {?} */
        const columnSized = this.getInitialChildColumnSizes(this.parent.children);
        /** @type {?} */
        const targets = [];
        /** @type {?} */
        const colEnd = this.colEnd ? this.colEnd : this.colStart + 1;
        for (let i = 0; i < columnSized.length; i++) {
            if (this.colStart <= i + 1 && i + 1 < colEnd) {
                targets.push({ target: columnSized[i].ref, spanUsed: 1 });
            }
        }
        /** @type {?} */
        const targetsSquashed = [];
        for (let j = 0; j < targets.length; j++) {
            if (targetsSquashed.length && targetsSquashed[targetsSquashed.length - 1].target.field === targets[j].target.field) {
                targetsSquashed[targetsSquashed.length - 1].spanUsed++;
            }
            else {
                targetsSquashed.push(targets[j]);
            }
        }
        return targetsSquashed;
    }
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
    pin(index) {
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
        const grid = ((/** @type {?} */ (this.grid)));
        /** @type {?} */
        const hasIndex = index !== undefined;
        if (hasIndex && (index < 0 || index >= grid.pinnedColumns.length)) {
            return false;
        }
        /** @type {?} */
        const width = parseInt(this.width, 10);
        if (!this.parent && (grid.getUnpinnedWidth(true) - width < grid.unpinnedAreaMinWidth)) {
            return false;
        }
        this._pinned = true;
        this._unpinnedIndex = grid._unpinnedColumns.indexOf(this);
        index = index !== undefined ? index : grid._pinnedColumns.length;
        /** @type {?} */
        const targetColumn = grid._pinnedColumns[index];
        /** @type {?} */
        const args = { column: this, insertAtIndex: index, isPinned: true };
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
            this.allChildren.forEach(child => child.pin());
            grid.reinitPinStates();
        }
        grid.resetCaches();
        grid.cdr.detectChanges();
        if (this.columnLayoutChild) {
            this.grid.columns.filter(x => x.columnLayout).forEach(x => x.populateVisibleIndexes());
        }
        this.grid.filteringService.refreshExpressions();
        this.grid.refreshSearch(true);
        return true;
    }
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
    unpin(index) {
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
        const grid = ((/** @type {?} */ (this.grid)));
        /** @type {?} */
        const hasIndex = index !== undefined;
        if (hasIndex && (index < 0 || index >= grid._unpinnedColumns.length)) {
            return false;
        }
        index = (index !== undefined ? index :
            this._unpinnedIndex !== undefined ? this._unpinnedIndex : this.index);
        this._pinned = false;
        /** @type {?} */
        const targetColumn = grid._unpinnedColumns[index];
        grid._unpinnedColumns.splice(index, 0, this);
        if (grid._pinnedColumns.indexOf(this) !== -1) {
            grid._pinnedColumns.splice(grid._pinnedColumns.indexOf(this), 1);
        }
        if (hasIndex) {
            grid._moveColumns(this, targetColumn);
        }
        if (this.columnGroup) {
            this.allChildren.forEach(child => child.unpin());
        }
        grid.reinitPinStates();
        grid.resetCaches();
        /** @type {?} */
        const insertAtIndex = grid._unpinnedColumns.indexOf(this);
        /** @type {?} */
        const args = { column: this, insertAtIndex, isPinned: false };
        grid.onColumnPinning.emit(args);
        grid.cdr.detectChanges();
        if (this.columnLayoutChild) {
            this.grid.columns.filter(x => x.columnLayout).forEach(x => x.populateVisibleIndexes());
        }
        this.grid.filteringService.refreshExpressions();
        this.grid.refreshSearch(true);
        return true;
    }
    /**
     * Returns a reference to the top level parent column.
     * ```typescript
     * let topLevelParent =  this.column.topLevelParent;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get topLevelParent() {
        /** @type {?} */
        let parent = this.parent;
        while (parent && parent.parent) {
            parent = parent.parent;
        }
        return parent;
    }
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    check() {
        if (this.grid) {
            this.grid.markForCheck();
        }
    }
    /**
     * Returns a reference to the header of the column.
     * ```typescript
     * let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
     * let headerCell = column.headerCell;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get headerCell() {
        return this.grid.headerCellList.find((header) => header.column === this);
    }
    /**
     * Returns a reference to the filter cell of the column.
     * ```typescript
     * let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
     * let filterell = column.filterell;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get filterCell() {
        return this.grid.filterCellList.find((filterCell) => filterCell.column === this);
    }
    /**
     * Returns a reference to the header group of the column.
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get headerGroup() {
        return this.grid.headerGroupsList.find((headerGroup) => headerGroup.column === this);
    }
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
    autosize() {
        if (!this.columnGroup) {
            this.width = this.getLargestCellWidth();
            this.grid.markForCheck();
            this.grid.reflow();
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    getCalcWidth() {
        if (this._calcWidth !== null && !isNaN(this.calcPixelWidth)) {
            return this._calcWidth;
        }
        this.cacheCalcWidth();
        return this._calcWidth;
    }
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
    getLargestCellWidth() {
        /** @type {?} */
        const range = this.grid.document.createRange();
        /** @type {?} */
        const largest = new Map();
        if (this.cells.length > 0) {
            /** @type {?} */
            let cellsContentWidths = [];
            if (this.cells[0].nativeElement.children.length > 0) {
                this.cells.forEach((cell) => cellsContentWidths.push(cell.calculateSizeToFit(range)));
            }
            else {
                cellsContentWidths = this.cells.map((cell) => getNodeSizeViaRange(range, cell.nativeElement));
            }
            /** @type {?} */
            const index = cellsContentWidths.indexOf(Math.max(...cellsContentWidths));
            /** @type {?} */
            const cellStyle = this.grid.document.defaultView.getComputedStyle(this.cells[index].nativeElement);
            /** @type {?} */
            const cellPadding = parseFloat(cellStyle.paddingLeft) + parseFloat(cellStyle.paddingRight) +
                parseFloat(cellStyle.borderRightWidth);
            largest.set(Math.max(...cellsContentWidths), cellPadding);
        }
        if (this.headerCell) {
            /** @type {?} */
            let headerCell;
            if (this.headerTemplate && this.headerCell.elementRef.nativeElement.children[0].children.length > 0) {
                headerCell = Math.max(...Array.from(this.headerCell.elementRef.nativeElement.children[0].children)
                    .map((child) => getNodeSizeViaRange(range, child)));
            }
            else {
                headerCell = getNodeSizeViaRange(range, this.headerCell.elementRef.nativeElement.children[0]);
            }
            if (this.sortable || this.filterable) {
                headerCell += this.headerCell.elementRef.nativeElement.children[1].getBoundingClientRect().width;
            }
            /** @type {?} */
            const headerStyle = this.grid.document.defaultView.getComputedStyle(this.headerCell.elementRef.nativeElement);
            /** @type {?} */
            const headerPadding = parseFloat(headerStyle.paddingLeft) + parseFloat(headerStyle.paddingRight) +
                parseFloat(headerStyle.borderRightWidth);
            largest.set(headerCell, headerPadding);
        }
        /** @type {?} */
        const largestCell = Math.max(...Array.from(largest.keys()));
        /** @type {?} */
        const width = Math.ceil(largestCell + largest.get(largestCell));
        if (Number.isNaN(width)) {
            return this.width;
        }
        else {
            return width + 'px';
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    getCellWidth() {
        /** @type {?} */
        const colWidth = this.width;
        /** @type {?} */
        const isPercentageWidth = colWidth && typeof colWidth === 'string' && colWidth.indexOf('%') !== -1;
        if (this.columnLayoutChild) {
            return '';
        }
        if (colWidth && !isPercentageWidth) {
            /** @type {?} */
            let cellWidth = colWidth;
            if (typeof cellWidth !== 'string' || cellWidth.endsWith('px') === false) {
                cellWidth += 'px';
            }
            return cellWidth;
        }
        else {
            return colWidth;
        }
    }
    /**
     * @hidden
     * \@internal
     * @protected
     * @return {?}
     */
    cacheCalcWidth() {
        /** @type {?} */
        const grid = this.gridAPI.grid;
        /** @type {?} */
        const colWidth = this.width;
        /** @type {?} */
        const isPercentageWidth = colWidth && typeof colWidth === 'string' && colWidth.indexOf('%') !== -1;
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
    }
    /**
     * @hidden
     * @return {?}
     */
    populateVisibleIndexes() { }
}
IgxColumnComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'igx-column',
                template: ``
            }] }
];
/** @nocollapse */
IgxColumnComponent.ctorParameters = () => [
    { type: GridBaseAPIService },
    { type: ChangeDetectorRef }
];
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
    DeprecateProperty(`The property is deprecated. Please, use \`column.grid.id\` instead.`),
    tslib_1.__metadata("design:type", String)
], IgxColumnComponent.prototype, "gridID", void 0);
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
export class IgxColumnGroupComponent extends IgxColumnComponent {
    /**
     * @param {?} gridAPI
     * @param {?} cdr
     */
    constructor(gridAPI, cdr) {
        // D.P. constructor duplication due to es6 compilation, might be obsolete in the future
        super(gridAPI, cdr);
        this.gridAPI = gridAPI;
        this.cdr = cdr;
        this.children = new QueryList();
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
        this.searchable = true;
    }
    /**
     * Gets the column group `summaries`.
     * ```typescript
     * let columnGroupSummaries = this.columnGroup.summaries;
     * ```
     * \@memberof IgxColumnGroupComponent
     * @return {?}
     */
    get summaries() {
        return this._summaries;
    }
    /**
     * Sets the column group `summaries`.
     * ```typescript
     * this.columnGroup.summaries = IgxNumberSummaryOperand;
     * ```
     * \@memberof IgxColumnGroupComponent
     * @param {?} classRef
     * @return {?}
     */
    set summaries(classRef) { }
    /**
     * Gets the column group `filters`.
     * ```typescript
     * let columnGroupFilters = this.columnGroup.filters;
     * ```
     * \@memberof IgxColumnGroupComponent
     * @return {?}
     */
    get filters() {
        return this._filters;
    }
    /**
     * Sets the column group `filters`.
     * ```typescript
     * this.columnGroup.filters = IgxStringFilteringOperand;
     * ```
     * \@memberof IgxColumnGroupComponent
     * @param {?} classRef
     * @return {?}
     */
    set filters(classRef) { }
    /**
     * Returns a reference to the body template.
     * ```typescript
     * let bodyTemplate = this.columnGroup.bodyTemplate;
     * ```
     * \@memberof IgxColumnGroupComponent
     * @return {?}
     */
    get bodyTemplate() {
        return this._bodyTemplate;
    }
    /**
     * @hidden
     * @param {?} template
     * @return {?}
     */
    set bodyTemplate(template) { }
    /**
     * Returns a reference to the inline editor template.
     * ```typescript
     * let inlineEditorTemplate = this.columnGroup.inlineEditorTemplate;
     * ```
     * \@memberof IgxColumnGroupComponent
     * @return {?}
     */
    get inlineEditorTemplate() {
        return this._inlineEditorTemplate;
    }
    /**
     * @hidden
     * @param {?} template
     * @return {?}
     */
    set inlineEditorTemplate(template) { }
    /**
     * Gets the column group cells.
     * ```typescript
     * let columnCells = this.columnGroup.cells;
     * ```
     * \@memberof IgxColumnGroupComponent
     * @return {?}
     */
    get cells() {
        return [];
    }
    /**
     * Gets whether the column group is hidden.
     * ```typescript
     * let isHidden = this.columnGroup.hidden;
     * ```
     * \@memberof IgxColumnGroupComponent
     * @return {?}
     */
    get hidden() {
        return this.allChildren.every(c => c.hidden);
    }
    /**
     * Sets the column group hidden property.
     * ```typescript
     * <igx-column [hidden] = "true"></igx-column>
     * ```
     * \@memberof IgxColumnGroupComponent
     * @param {?} value
     * @return {?}
     */
    set hidden(value) {
        this._hidden = value;
        this.children.forEach(child => child.hidden = value);
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterContentInit() {
        /*
            @ContentChildren with descendants still returns the `parent`
            component in the query list.
        */
        if (this.headTemplate && this.headTemplate.length) {
            this._headerTemplate = this.headTemplate.toArray()[0].template;
        }
        this.children.reset(this.children.toArray().slice(1));
        this.children.forEach(child => {
            child.parent = this;
        });
    }
    /**
     * Returns the children columns collection.
     * ```typescript
     * let columns =  this.columnGroup.allChildren;
     * ```
     * \@memberof IgxColumnGroupComponent
     * @return {?}
     */
    get allChildren() {
        return flatten(this.children.toArray());
    }
    /**
     * Returns a boolean indicating if the column is a `ColumnGroup`.
     * ```typescript
     * let isColumnGroup =  this.columnGroup.columnGroup
     * ```
     * \@memberof IgxColumnGroupComponent
     * @return {?}
     */
    get columnGroup() {
        return true;
    }
    /**
     * Returns a boolean indicating if the column is a `ColumnLayout` for multi-row layout.
     * ```typescript
     * let columnGroup =  this.column.columnGroup;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get columnLayout() {
        return false;
    }
    /**
     * Gets the width of the column group.
     * ```typescript
     * let columnGroupWidth = this.columnGroup.width;
     * ```
     * \@memberof IgxColumnGroupComponent
     * @return {?}
     */
    get width() {
        /** @type {?} */
        let isChildrenWidthInPercent = false;
        /** @type {?} */
        let width;
        width = `${this.children.reduce((acc, val) => {
            if (val.hidden) {
                return acc;
            }
            if (typeof val.width === 'string' && val.width.indexOf('%') !== -1) {
                isChildrenWidthInPercent = true;
            }
            return acc + parseInt(val.width, 10);
        }, 0)}`;
        return isChildrenWidthInPercent ? width + '%' : width;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set width(val) { }
}
IgxColumnGroupComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{ provide: IgxColumnComponent, useExisting: forwardRef(() => IgxColumnGroupComponent) }],
                selector: 'igx-column-group',
                template: ``
            }] }
];
/** @nocollapse */
IgxColumnGroupComponent.ctorParameters = () => [
    { type: GridBaseAPIService },
    { type: ChangeDetectorRef }
];
IgxColumnGroupComponent.propDecorators = {
    children: [{ type: ContentChildren, args: [IgxColumnComponent, { read: IgxColumnComponent },] }],
    summaries: [{ type: Input }],
    searchable: [{ type: Input }],
    filters: [{ type: Input }],
    hidden: [{ type: Input }]
};
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
export class IgxColumnLayoutComponent extends IgxColumnGroupComponent {
    constructor() {
        super(...arguments);
        this.childrenVisibleIndexes = [];
    }
    /**
     * Gets the width of the column layout.
     * ```typescript
     * let columnGroupWidth = this.columnGroup.width;
     * ```
     * \@memberof IgxColumnGroupComponent
     * @return {?}
     */
    get width() {
        /** @type {?} */
        const width = this.getFilledChildColumnSizes(this.children).reduce((acc, val) => acc + parseInt(val, 10), 0);
        return width;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set width(val) { }
    /**
     * @return {?}
     */
    get columnLayout() {
        return true;
    }
    /**
     * @hidden
     * @return {?}
     */
    getCalcWidth() {
        /** @type {?} */
        let borderWidth = 0;
        if (this.headerGroup && this.headerGroup.hasLastPinnedChildColumn) {
            /** @type {?} */
            const headerStyles = this.grid.document.defaultView.getComputedStyle(this.headerGroup.element.nativeElement.children[0]);
            borderWidth = parseInt(headerStyles.borderRightWidth, 10);
        }
        return super.getCalcWidth() + borderWidth;
    }
    /**
     * Gets the column visible index.
     * If the column is not visible, returns `-1`.
     * ```typescript
     * let visibleColumnIndex =  this.column.visibleIndex;
     * ```
     * \@memberof IgxColumnComponent
     * @return {?}
     */
    get visibleIndex() {
        if (!isNaN(this._vIndex)) {
            return this._vIndex;
        }
        /** @type {?} */
        const unpinnedColumns = this.grid.unpinnedColumns.filter(c => c.columnLayout && !c.hidden);
        /** @type {?} */
        const pinnedColumns = this.grid.pinnedColumns.filter(c => c.columnLayout && !c.hidden);
        /** @type {?} */
        let vIndex = -1;
        if (!this.pinned) {
            /** @type {?} */
            const indexInCollection = unpinnedColumns.indexOf(this);
            vIndex = indexInCollection === -1 ? -1 : pinnedColumns.length + indexInCollection;
        }
        else {
            vIndex = pinnedColumns.indexOf(this);
        }
        this._vIndex = vIndex;
        return vIndex;
    }
    /*
         * Gets whether the column layout is hidden.
         * ```typescript
         * let isHidden = this.columnGroup.hidden;
         * ```
         * @memberof IgxColumnGroupComponent
         */
    /**
     * @return {?}
     */
    get hidden() {
        return this._hidden;
    }
    /**
     * Sets the column layout hidden property.
     * ```typescript
     * <igx-column-layout [hidden] = "true"></igx-column->
     * ```
     * \@memberof IgxColumnGroupComponent
     * @param {?} value
     * @return {?}
     */
    set hidden(value) {
        this._hidden = value;
        this.children.forEach(child => child.hidden = value);
        if (this.grid && this.grid.columns && this.grid.columns.length > 0) {
            // reset indexes in case columns are hidden/shown runtime
            this.grid.columns.filter(x => x.columnGroup).forEach(x => x.populateVisibleIndexes());
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterContentInit() {
        super.ngAfterContentInit();
        if (!this.hidden) {
            this.hidden = this.allChildren.some(x => x.hidden);
        }
        else {
            this.children.forEach(child => child.hidden = this.hidden);
        }
        this.children.forEach(child => {
            child.disableHiding = true;
            child.disablePinning = true;
            child.movable = false;
        });
    }
    /*
         * Gets whether the group contains the last pinned child column of the column layout.
         * ```typescript
         * let columsHasLastPinned = this.columnLayout.hasLastPinnedChildColumn;
         * ```
         * @memberof IgxColumnLayoutComponent
         */
    /**
     * @return {?}
     */
    get hasLastPinnedChildColumn() {
        return this.children.some(child => child.isLastPinned);
    }
    /**
     * @hidden
     * @return {?}
     */
    populateVisibleIndexes() {
        this.childrenVisibleIndexes = [];
        /** @type {?} */
        const grid = this.gridAPI.grid;
        /** @type {?} */
        const columns = grid && grid.pinnedColumns && grid.unpinnedColumns ? grid.pinnedColumns.concat(grid.unpinnedColumns) : [];
        /** @type {?} */
        const orderedCols = columns
            .filter(x => !x.columnGroup && !x.hidden)
            .sort((a, b) => a.rowStart - b.rowStart || columns.indexOf(a.parent) - columns.indexOf(b.parent) || a.colStart - b.colStart);
        this.children.forEach(child => {
            /** @type {?} */
            const rs = child.rowStart || 1;
            /** @type {?} */
            let vIndex = 0;
            // filter out all cols with larger rowStart
            /** @type {?} */
            const cols = orderedCols.filter(c => !c.columnGroup && (c.rowStart || 1) <= rs);
            vIndex = cols.indexOf(child);
            this.childrenVisibleIndexes.push({ column: child, index: vIndex });
        });
    }
}
IgxColumnLayoutComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{ provide: IgxColumnComponent, useExisting: forwardRef(() => IgxColumnLayoutComponent) }],
                selector: 'igx-column-layout',
                template: ``
            }] }
];
IgxColumnLayoutComponent.propDecorators = {
    hidden: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    IgxColumnLayoutComponent.prototype.childrenVisibleIndexes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvY29sdW1uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFSCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osZUFBZSxFQUNmLEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFVBQVUsRUFFYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzdHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQ0gsOEJBQThCLEVBQzlCLDhCQUE4QixFQUM5Qix3QkFBd0IsRUFDeEIsOEJBQThCLEVBQ2pDLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxzQkFBc0IsRUFBb0IsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFDSCwwQkFBMEIsRUFDMUIseUJBQXlCLEVBQ3pCLHVCQUF1QixFQUN2Qix5QkFBeUIsRUFDekIsbUJBQW1CLEVBQ3RCLE1BQU0sd0NBQXdDLENBQUM7QUFLaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7QUFnQnhELE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBMmlDM0IsWUFBbUIsT0FBcUUs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UUFDNUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7O2tCQUNwQixFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsSUFBSSxDQUFDOztnQkFDMUIsTUFBTSxHQUFHLENBQUM7OztrQkFFUixJQUFJLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUNoQyxDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztRQUNyRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7OztZQS9JSixTQUFTLFNBQUM7Z0JBQ1AsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsd0JBQXdCLENBQUMsRUFBRSxDQUFDO2dCQUNyRyxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsRUFBRTthQUNmOzs7cUJBcUVJLEtBQUs7Ozs7SUFuRU4sMERBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIElucHV0LFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBmb3J3YXJkUmVmLFxuICAgIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uL2RhdGEtb3BlcmF0aW9ucy9kYXRhLXV0aWwnO1xuaW1wb3J0IHsgR3JpZEJhc2VBUElTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hHcmlkQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4RGF0ZVN1bW1hcnlPcGVyYW5kLCBJZ3hOdW1iZXJTdW1tYXJ5T3BlcmFuZCwgSWd4U3VtbWFyeU9wZXJhbmQgfSBmcm9tICcuL3N1bW1hcmllcy9ncmlkLXN1bW1hcnknO1xuaW1wb3J0IHsgSWd4Um93Q29tcG9uZW50IH0gZnJvbSAnLi9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7XG4gICAgSWd4Q2VsbEVkaXRvclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIElneENlbGxIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJZ3hDZWxsVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgSWd4RmlsdGVyQ2VsbFRlbXBsYXRlRGlyZWN0aXZlXG59IGZyb20gJy4vZ3JpZC5jb21tb24nO1xuaW1wb3J0IHsgSWd4R3JpZEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERlZmF1bHRTb3J0aW5nU3RyYXRlZ3ksIElTb3J0aW5nU3RyYXRlZ3kgfSBmcm9tICcuLi9kYXRhLW9wZXJhdGlvbnMvc29ydGluZy1zdHJhdGVneSc7XG5pbXBvcnQgeyBnZXROb2RlU2l6ZVZpYVJhbmdlLCBmbGF0dGVuIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQge1xuICAgIElneEJvb2xlYW5GaWx0ZXJpbmdPcGVyYW5kLFxuICAgIElneE51bWJlckZpbHRlcmluZ09wZXJhbmQsXG4gICAgSWd4RGF0ZUZpbHRlcmluZ09wZXJhbmQsXG4gICAgSWd4U3RyaW5nRmlsdGVyaW5nT3BlcmFuZCxcbiAgICBJZ3hGaWx0ZXJpbmdPcGVyYW5kXG59IGZyb20gJy4uL2RhdGEtb3BlcmF0aW9ucy9maWx0ZXJpbmctY29uZGl0aW9uJztcbmltcG9ydCB7IElneEdyaWRCYXNlQ29tcG9uZW50LCBJR3JpZERhdGFCaW5kYWJsZSB9IGZyb20gJy4vZ3JpZC1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUgfSBmcm9tICcuLi9kYXRhLW9wZXJhdGlvbnMvZmlsdGVyaW5nLWV4cHJlc3Npb25zLXRyZWUnO1xuaW1wb3J0IHsgSWd4R3JpZEZpbHRlcmluZ0NlbGxDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlcmluZy9ncmlkLWZpbHRlcmluZy1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hHcmlkSGVhZGVyR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2dyaWQtaGVhZGVyLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZXByZWNhdGVQcm9wZXJ0eSB9IGZyb20gJy4uL2NvcmUvZGVwcmVjYXRlRGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBNUkxDb2x1bW5TaXplSW5mbywgTVJMUmVzaXplQ29sdW1uSW5mbyB9IGZyb20gJy4uL2RhdGEtb3BlcmF0aW9ucy9tdWx0aS1yb3ctbGF5b3V0LmludGVyZmFjZXMnO1xuaW1wb3J0IHsgRGlzcGxheURlbnNpdHkgfSBmcm9tICcuLi9jb3JlL2Rpc3BsYXlEZW5zaXR5JztcblxuLyoqXG4gKiAqKklnbml0ZSBVSSBmb3IgQW5ndWxhciBDb2x1bW4qKiAtXG4gKiBbRG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly93d3cuaW5mcmFnaXN0aWNzLmNvbS9wcm9kdWN0cy9pZ25pdGUtdWktYW5ndWxhci9hbmd1bGFyL2NvbXBvbmVudHMvZ3JpZC5odG1sI2NvbHVtbnMtY29uZmlndXJhdGlvbilcbiAqXG4gKiBUaGUgSWduaXRlIFVJIENvbHVtbiBpcyB1c2VkIHdpdGhpbiBhbiBgaWd4LWdyaWRgIGVsZW1lbnQgdG8gZGVmaW5lIHdoYXQgZGF0YSB0aGUgY29sdW1uIHdpbGwgc2hvdy4gRmVhdHVyZXMgc3VjaCBhcyBzb3J0aW5nLFxuICogZmlsdGVyaW5nICYgZWRpdGluZyBhcmUgZW5hYmxlZCBhdCB0aGUgY29sdW1uIGxldmVsLiAgWW91IGNhbiBhbHNvIHByb3ZpZGUgYSB0ZW1wbGF0ZSBjb250YWluaW5nIGN1c3RvbSBjb250ZW50IGluc2lkZVxuICogdGhlIGNvbHVtbiB1c2luZyBgbmctdGVtcGxhdGVgIHdoaWNoIHdpbGwgYmUgdXNlZCBmb3IgYWxsIGNlbGxzIHdpdGhpbiB0aGUgY29sdW1uLlxuICovXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgICBzZWxlY3RvcjogJ2lneC1jb2x1bW4nLFxuICAgIHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBJZ3hDb2x1bW5Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgICBwcml2YXRlIF9maWx0ZXJhYmxlID0gdHJ1ZTtcbiAgICBwcml2YXRlIF9ncm91cGFibGUgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGBmaWVsZGAgdmFsdWUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bW5GaWVsZCA9IHRoaXMuY29sdW1uLmZpZWxkO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbHVtbiBbZmllbGRdID0gXCInSUQnXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBmaWVsZDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgYGhlYWRlcmAgdmFsdWUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bW5IZWFkZXIgPSB0aGlzLmNvbHVtbi5oZWFkZXI7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY29sdW1uIFtoZWFkZXJdID0gXCInSUQnXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGhlYWRlciA9ICcnO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB3aGV0aGVyIHRoZSBjb2x1bW4gaXMgc29ydGFibGUuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNTb3J0YWJsZSA9IHRoaXMuY29sdW1uLnNvcnRhYmxlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbHVtbiBbc29ydGFibGVdID0gXCJ0cnVlXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzb3J0YWJsZSA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB3aGV0aGVyIHRoZSBjb2x1bW4gaXMgZ3JvdXBhYmxlLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYGZhbHNlYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzR3JvdXBhYmxlID0gdGhpcy5jb2x1bW4uZ3JvdXBhYmxlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbHVtbiBbZ3JvdXBhYmxlXSA9IFwidHJ1ZVwiPjwvaWd4LWNvbHVtbj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGdyb3VwYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyb3VwYWJsZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBncm91cGFibGUodmFsKSB7XG4gICAgICAgIHRoaXMuX2dyb3VwYWJsZSA9IHZhbDtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICAgICAgdGhpcy5ncmlkLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHdoZXRoZXIgdGhlIGNvbHVtbiBpcyBlZGl0YWJsZS5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc0VkaXRhYmxlID0gdGhpcy5jb2x1bW4uZWRpdGFibGU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGVkaXRhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBVcGRhdGluZyB0aGUgcHJpbWFyeSBrZXkgd2hlbiBncmlkIGhhcyB0cmFuc2FjdGlvbnMgKGluY2wuIHJvdyBlZGl0KVxuICAgICAgICAvLyBzaG91bGQgbm90IGJlIGFsbG93ZWQsIGFzIHRoYXQgY2FuIGNvcnJ1cHQgdHJhbnNhY3Rpb24gc3RhdGUuXG4gICAgICAgIGNvbnN0IHJvd0VkaXRhYmxlID0gdGhpcy5ncmlkICYmIHRoaXMuZ3JpZC5yb3dFZGl0YWJsZTtcbiAgICAgICAgY29uc3QgaGFzVHJhbnNhY3Rpb25zID0gdGhpcy5ncmlkICYmIHRoaXMuZ3JpZC50cmFuc2FjdGlvbnMuZW5hYmxlZDtcblxuICAgICAgICBpZiAodGhpcy5pc1ByaW1hcnlDb2x1bW4gJiYgKHJvd0VkaXRhYmxlIHx8IGhhc1RyYW5zYWN0aW9ucykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9lZGl0YWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZWRpdGFibGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcm93RWRpdGFibGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB3aGV0aGVyIHRoZSBjb2x1bW4gaXMgZWRpdGFibGUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuY29sdW1uLmVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb2x1bW4gW2VkaXRhYmxlXSA9IFwidHJ1ZVwiPjwvaWd4LWNvbHVtbj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgc2V0IGVkaXRhYmxlKGVkaXRhYmxlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2VkaXRhYmxlID0gZWRpdGFibGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB3aGV0aGVyIHRoZSBjb2x1bW4gaXMgZmlsdGVyYWJsZS5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGB0cnVlYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzRmlsdGVyYWJsZSA9IHRoaXMuY29sdW1uLmZpbHRlcmFibGU7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY29sdW1uIFtmaWx0ZXJhYmxlXSA9IFwiZmFsc2VcIj48L2lneC1jb2x1bW4+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBmaWx0ZXJhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyYWJsZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBmaWx0ZXJhYmxlKHZhbCkge1xuICAgICAgICB0aGlzLl9maWx0ZXJhYmxlID0gdmFsO1xuICAgICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB3aGV0aGVyIHRoZSBjb2x1bW4gaXMgcmVzaXphYmxlLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYGZhbHNlYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzUmVzaXphYmxlID0gdGhpcy5jb2x1bW4ucmVzaXphYmxlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbHVtbiBbcmVzaXphYmxlXSA9IFwidHJ1ZVwiPjwvaWd4LWNvbHVtbj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmVzaXphYmxlID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogR2V0cyBhIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgc3VtbWFyeSBmb3IgdGhlIGNvbHVtbiBpcyBlbmFibGVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaGFzU3VtbWFyeSA9IHRoaXMuY29sdW1uLmhhc1N1bW1hcnk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGhhc1N1bW1hcnkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNTdW1tYXJ5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzdW1tYXJ5IGZvciB0aGUgY29sdW1uIGlzIGVuYWJsZWQuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbHVtbiBbaGFzU3VtbWFyeV0gPSBcInRydWVcIj48L2lneC1jb2x1bW4+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIHNldCBoYXNTdW1tYXJ5KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2hhc1N1bW1hcnkgPSB2YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQuc3VtbWFyeVNlcnZpY2UucmVjYWxjdWxhdGVTdW1tYXJpZXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHdoZXRoZXIgdGhlIGNvbHVtbiBpcyBoaWRkZW4uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc0hpZGRlbiA9IHRoaXMuY29sdW1uLmhpZGRlbjtcbiAgICAgKiBgYGBcbiAgICAgKkBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBoaWRkZW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oaWRkZW47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGNvbHVtbiBoaWRkZW4gcHJvcGVydHkuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiA8aWd4LWNvbHVtbiBbaGlkZGVuXSA9IFwidHJ1ZVwiPjwvaWd4LWNvbHVtbj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgc2V0IGhpZGRlbih2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5faGlkZGVuICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faGlkZGVuID0gdmFsdWU7XG4gICAgICAgICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnJlc2V0Q2FjaGVzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLmVuZEVkaXQoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVE9ETzogU2ltcGxpZnlcbiAgICAgICAgICAgIHRoaXMuY2hlY2soKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQucmVmcmVzaFNlYXJjaCh0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQuc3VtbWFyeVNlcnZpY2UucmVzZXRTdW1tYXJ5SGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnJlZmxvdygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5maWx0ZXJpbmdTZXJ2aWNlLnJlZnJlc2hFeHByZXNzaW9ucygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5jb2x1bW5MYXlvdXRDaGlsZCAmJiB0aGlzLnBhcmVudC5oaWRkZW4gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuaGlkZGVuID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIHRoZSBoaWRpbmcgaXMgZGlzYWJsZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc0hpZGluZ0Rpc2FibGVkID0gIHRoaXMuY29sdW1uLmRpc2FibGVIaWRpbmc7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGRpc2FibGVIaWRpbmcoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlSGlkaW5nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbmFibGVzL2Rpc2FibGVzIGhpZGluZyBmb3IgdGhlIGNvbHVtbi5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIDxpZ3gtY29sdW1uIFtoaWRkZW5dID0gXCJ0cnVlXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBzZXQgZGlzYWJsZUhpZGluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5fZGlzYWJsZUhpZGluZyAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2Rpc2FibGVIaWRpbmcgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHdoZXRoZXIgdGhlIHBpbm5pbmcgaXMgZGlzYWJsZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc1Bpbm5pbmdEaXNhYmxlZCA9ICB0aGlzLmNvbHVtbi5kaXNhYmxlUGlubmluZztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgZGlzYWJsZVBpbm5pbmcoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlUGlubmluZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5hYmxlcy9kaXNhYmxlcyBwaW5uaW5nIGZvciB0aGUgY29sdW1uLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYGZhbHNlYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogPGlneC1jb2x1bW4gW3Bpbm5lZF0gPSBcInRydWVcIj48L2lneC1jb2x1bW4+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIHNldCBkaXNhYmxlUGlubmluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5fZGlzYWJsZVBpbm5pbmcgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kaXNhYmxlUGlubmluZyA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5jaGVjaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB3aGV0aGVyIHRoZSBjb2x1bW4gaXMgbW92YWJsZS5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc01vdmFibGUgPSB0aGlzLmNvbHVtbi5tb3ZhYmxlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbHVtbiBbbW92YWJsZV0gPSBcInRydWVcIj48L2lneC1jb2x1bW4+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1vdmFibGUgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgd2lkdGhgIG9mIHRoZSBjb2x1bW4uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bW5XaWR0aCA9IHRoaXMuY29sdW1uLndpZHRoO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgd2lkdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkdGhTZXRCeVVzZXIgPyB0aGlzLl93aWR0aCA6IHRoaXMuZGVmYXVsdFdpZHRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBgd2lkdGhgIG9mIHRoZSBjb2x1bW4uXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY29sdW1uIFt3aWR0aF0gPSBcIicyNSUnXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHdpZHRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWxjV2lkdGggPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5jYWxjUGl4ZWxXaWR0aCA9IE5hTjtcbiAgICAgICAgICAgIHRoaXMud2lkdGhTZXRCeVVzZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fd2lkdGggPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlQ2FsY1dpZHRoKCk7XG4gICAgICAgICAgICAgICAgKHRoaXMuZ3JpZCBhcyBhbnkpLl9kZXJpdmVQb3NzaWJsZVdpZHRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGNhbGNXaWR0aCgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDYWxjV2lkdGgoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jYWxjV2lkdGggPSBudWxsO1xuICAgIHB1YmxpYyBjYWxjUGl4ZWxXaWR0aDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBtYXhpbXVtIGB3aWR0aGAgb2YgdGhlIGNvbHVtbi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNvbHVtbk1heFdpZHRoID0gdGhpcy5jb2x1bW4ud2lkdGg7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY29sdW1uIFttYXhXaWR0aF0gPSBcIic3NSUnXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtYXhXaWR0aDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgbWluaW11bSBgd2lkdGhgIG9mIHRoZSBjb2x1bW4uXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgODhgO1xuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY29sdW1uTWluV2lkdGggPSB0aGlzLmNvbHVtbi5taW5XaWR0aDtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb2x1bW4gW21pbldpZHRoXSA9IFwiJzE1JSdcIj48L2lneC1jb2x1bW4+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBtaW5XaWR0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG1pblZhbCA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKG1pblZhbCkpIHsgcmV0dXJuOyB9XG4gICAgICAgIHRoaXMuX2RlZmF1bHRNaW5XaWR0aCA9IHZhbHVlO1xuXG4gICAgfVxuICAgIHB1YmxpYyBnZXQgbWluV2lkdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLl9kZWZhdWx0TWluV2lkdGggPyB0aGlzLmRlZmF1bHRNaW5XaWR0aCA6IHRoaXMuX2RlZmF1bHRNaW5XaWR0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBjbGFzcyBzZWxlY3RvciBvZiB0aGUgY29sdW1uIGhlYWRlci5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNvbHVtbkhlYWRlckNsYXNzID0gdGhpcy5jb2x1bW4uaGVhZGVyQ2xhc3NlcztcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb2x1bW4gW2hlYWRlckNsYXNzZXNdID0gXCInY29sdW1uLWhlYWRlcidcIj48L2lneC1jb2x1bW4+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGhlYWRlckNsYXNzZXMgPSAnJztcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgY2xhc3Mgc2VsZWN0b3Igb2YgdGhlIGNvbHVtbiBncm91cCBoZWFkZXIuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bW5IZWFkZXJDbGFzcyA9IHRoaXMuY29sdW1uLmhlYWRlckdyb3VwQ2xhc3NlcztcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb2x1bW4gW2hlYWRlckdyb3VwQ2xhc3Nlc10gPSBcIidjb2x1bW4tZ3JvdXAtaGVhZGVyJ1wiPjwvaWd4LWNvbHVtbj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaGVhZGVyR3JvdXBDbGFzc2VzID0gJyc7XG4gICAgLyoqXG4gICAgICogU2V0cyBhIGNvbmRpdGlvbmFsIGNsYXNzIHNlbGVjdG9yIG9mIHRoZSBjb2x1bW4gY2VsbHMuXG4gICAgICogQWNjZXB0cyBhbiBvYmplY3QgbGl0ZXJhbCwgY29udGFpbmluZyBrZXktdmFsdWUgcGFpcnMsXG4gICAgICogd2hlcmUgdGhlIGtleSBpcyB0aGUgbmFtZSBvZiB0aGUgQ1NTIGNsYXNzLCB3aGlsZSB0aGVcbiAgICAgKiB2YWx1ZSBpcyBlaXRoZXIgYSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBib29sZWFuLFxuICAgICAqIG9yIGJvb2xlYW4sIGxpa2Ugc286XG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNhbGxiYWNrID0gKHJvd0RhdGEsIGNvbHVtbktleSkgPT4geyByZXR1cm4gcm93RGF0YVtjb2x1bW5LZXldID4gNjsgfVxuICAgICAqIGNlbGxDbGFzc2VzID0geyAnY2xhc3NOYW1lJyA6IHRoaXMuY2FsbGJhY2sgfTtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb2x1bW4gW2NlbGxDbGFzc2VzXSA9IFwiY2VsbENsYXNzZXNcIj48L2lneC1jb2x1bW4+XG4gICAgICogPGlneC1jb2x1bW4gW2NlbGxDbGFzc2VzXSA9IFwieydjbGFzczEnIDogdHJ1ZSB9XCI+PC9pZ3gtY29sdW1uPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjZWxsQ2xhc3NlczogYW55O1xuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNvbHVtbiBpbmRleC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNvbHVtbkluZGV4ID0gdGhpcy5jb2x1bW4uaW5kZXg7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBpbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmNvbHVtbnMuaW5kZXhPZih0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2hlbiBhdXRvZ2VuZXJhdGluZyBjb2x1bW5zLCB0aGUgZm9ybWF0dGVyIGlzIHVzZWQgdG8gZm9ybWF0IHRoZSBkaXNwbGF5IG9mIHRoZSBjb2x1bW4gZGF0YVxuICAgICAqIHdpdGhvdXQgbW9kaWZ5aW5nIHRoZSB1bmRlcmx5aW5nIGJvdW5kIHZhbHVlcy5cbiAgICAgKlxuICAgICAqIEluIHRoaXMgZXhhbXBsZSwgd2UgY2hlY2sgdG8gc2VlIGlmIHRoZSBjb2x1bW4gbmFtZSBpcyBTYWxhcnksIGFuZCB0aGVuIHByb3ZpZGUgYSBtZXRob2QgYXMgdGhlIGNvbHVtbiBmb3JtYXR0ZXJcbiAgICAgKiB0byBmb3JtYXQgdGhlIHZhbHVlIGludG8gYSBjdXJyZW5jeSBzdHJpbmcuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogb25Db2x1bW5Jbml0KGNvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50KSB7XG4gICAgICogICBpZiAoY29sdW1uLmZpZWxkID09IFwiU2FsYXJ5XCIpIHtcbiAgICAgKiAgICAgY29sdW1uLmZvcm1hdHRlciA9IChzYWxhcnkgPT4gdGhpcy5mb3JtYXQoc2FsYXJ5KSk7XG4gICAgICogICB9XG4gICAgICogfVxuICAgICAqXG4gICAgICogZm9ybWF0KHZhbHVlOiBudW1iZXIpIDogc3RyaW5nIHtcbiAgICAgKiAgIHJldHVybiBmb3JtYXRDdXJyZW5jeSh2YWx1ZSwgXCJlbi11c1wiLCBcIiRcIik7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGZvcm1hdHRlcjogKHZhbHVlOiBhbnkpID0+IGFueTtcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgd2hldGhlciB0aGUgY29sdW1uIGZpbHRlcmluZyBzaG91bGQgYmUgY2FzZSBzZW5zaXRpdmUuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgdHJ1ZWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBmaWx0ZXJpbmdJZ25vcmVDYXNlID0gdGhpcy5jb2x1bW4uZmlsdGVyaW5nSWdub3JlQ2FzZTtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb2x1bW4gW2ZpbHRlcmluZ0lnbm9yZUNhc2VdID0gXCJmYWxzZVwiPjwvaWd4LWNvbHVtbj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZmlsdGVyaW5nSWdub3JlQ2FzZSA9IHRydWU7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHdoZXRoZXIgdGhlIGNvbHVtbiBzb3J0aW5nIHNob3VsZCBiZSBjYXNlIHNlbnNpdGl2ZS5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGB0cnVlYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHNvcnRpbmdJZ25vcmVDYXNlID0gdGhpcy5jb2x1bW4uc29ydGluZ0lnbm9yZUNhc2U7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY29sdW1uIFtzb3J0aW5nSWdub3JlQ2FzZV0gPSBcImZhbHNlXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzb3J0aW5nSWdub3JlQ2FzZSA9IHRydWU7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBkYXRhIHR5cGUgb2YgdGhlIGNvbHVtbiB2YWx1ZXMuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgc3RyaW5nYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNvbHVtbkRhdGFUeXBlID0gdGhpcy5jb2x1bW4uZGF0YVR5cGU7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY29sdW1uIFtkYXRhVHlwZV0gPSBcIidudW1iZXInXCI+PC9pZ3gtY29sdW1uPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkYXRhVHlwZTogRGF0YVR5cGUgPSBEYXRhVHlwZS5TdHJpbmc7XG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIHRoZSBjb2x1bW4gaXMgYHBpbm5lZGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc1Bpbm5lZCA9IHRoaXMuY29sdW1uLnBpbm5lZDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHBpbm5lZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bpbm5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB3aGV0aGVyIHRoZSBjb2x1bW4gaXMgcGlubmVkLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYGZhbHNlYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb2x1bW4gW3Bpbm5lZF0gPSBcInRydWVcIj48L2lneC1jb2x1bW4+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgcGlubmVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLl9waW5uZWQgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ncmlkICYmIHRoaXMud2lkdGggJiYgIWlzTmFOKHBhcnNlSW50KHRoaXMud2lkdGgsIDEwKSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA/IHRoaXMucGluKCkgOiB0aGlzLnVucGluKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogTm8gZ3JpZC93aWR0aCBhdmFpbGFibGUgYXQgaW5pdGlhbGl6YXRpb24uIGBpbml0UGlubmluZ2AgaW4gdGhlIGdyaWRcbiAgICAgICAgICAgICAgIHdpbGwgcmUtaW5pdCB0aGUgZ3JvdXAgKGlmIHByZXNlbnQpXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5fcGlubmVkID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBHZXRzL1NldHMgdGhlIGBpZGAgb2YgdGhlIGBpZ3gtZ3JpZGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bW5HcmlkSWQgPSB0aGlzLmNvbHVtbi5ncmlkSUQ7XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuY29sdW1uLmdyaWRJRCA9ICdncmlkLTEnO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBARGVwcmVjYXRlUHJvcGVydHkoYFRoZSBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBQbGVhc2UsIHVzZSBcXGBjb2x1bW4uZ3JpZC5pZFxcYCBpbnN0ZWFkLmApXG4gICAgcHVibGljIGdyaWRJRDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNvbHVtbiBgc3VtbWFyaWVzYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNvbHVtblN1bW1hcmllcyA9IHRoaXMuY29sdW1uLnN1bW1hcmllcztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHN1bW1hcmllcygpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3VtbWFyaWVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjb2x1bW4gYHN1bW1hcmllc2AuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuY29sdW1uLnN1bW1hcmllcyA9IElneE51bWJlclN1bW1hcnlPcGVyYW5kO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHN1bW1hcmllcyhjbGFzc1JlZjogYW55KSB7XG4gICAgICAgIHRoaXMuX3N1bW1hcmllcyA9IG5ldyBjbGFzc1JlZigpO1xuXG4gICAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5zdW1tYXJ5U2VydmljZS5yZW1vdmVTdW1tYXJpZXNDYWNoZVBlckNvbHVtbih0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICh0aGlzLmdyaWQgYXMgYW55KS5fc3VtbWFyeVBpcGVUcmlnZ2VyKys7XG4gICAgICAgICAgICB0aGlzLmdyaWQuc3VtbWFyeVNlcnZpY2UucmVjYWxjdWxhdGVTdW1tYXJpZXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgd2hldGhlciB0aGUgY29sdW1uIGlzIGBzZWFyY2hhYmxlYC5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGB0cnVlYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzU2VhcmNoYWJsZSA9ICB0aGlzLmNvbHVtbi5zZWFyY2hhYmxlJztcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogIDxpZ3gtY29sdW1uIFtzZWFyY2hhYmxlXSA9IFwiZmFsc2VcIj48L2lneC1jb2x1bW4+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNlYXJjaGFibGUgPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNvbHVtbiBgZmlsdGVyc2AuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bW5GaWx0ZXJzID0gdGhpcy5jb2x1bW4uZmlsdGVycydcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGZpbHRlcnMoKTogSWd4RmlsdGVyaW5nT3BlcmFuZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjb2x1bW4gYGZpbHRlcnNgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmNvbHVtbi5maWx0ZXJzID0gSWd4Qm9vbGVhbkZpbHRlcmluZ09wZXJhbmQuaW5zdGFuY2UoKS5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHNldCBmaWx0ZXJzKGluc3RhbmNlOiBJZ3hGaWx0ZXJpbmdPcGVyYW5kKSB7XG4gICAgICAgIHRoaXMuX2ZpbHRlcnMgPSBpbnN0YW5jZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY29sdW1uIGBzb3J0U3RyYXRlZ3lgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgc29ydFN0cmF0ZWd5ID0gdGhpcy5jb2x1bW4uc29ydFN0cmF0ZWd5J1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgc29ydFN0cmF0ZWd5KCk6IElTb3J0aW5nU3RyYXRlZ3kge1xuICAgICAgICByZXR1cm4gdGhpcy5fc29ydFN0cmF0ZWd5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjb2x1bW4gYHNvcnRTdHJhdGVneWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuY29sdW1uLnNvcnRTdHJhdGVneSA9IG5ldyBDdXN0b21Tb3J0aW5nU3RyYXRlZ3koKS5cbiAgICAgKlxuICAgICAqIGNsYXNzIEN1c3RvbVNvcnRpbmdTdHJhdGVneSBleHRlbmRzIFNvcnRpbmdTdHJhdGVneSB7XG4gICAgICogLi4uXG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHNvcnRTdHJhdGVneShjbGFzc1JlZjogSVNvcnRpbmdTdHJhdGVneSkge1xuICAgICAgICB0aGlzLl9zb3J0U3RyYXRlZ3kgPSBjbGFzc1JlZjtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBHZXRzIHRoZSBmdW5jdGlvbiB0aGF0IGNvbXBhcmVzIHZhbHVlcyBmb3IgZ3JvdXBpbmcuXG4gICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgKiBsZXQgZ3JvdXBpbmdDb21wYXJlciA9IHRoaXMuY29sdW1uLmdyb3VwaW5nQ29tcGFyZXInXG4gICAgKiBgYGBcbiAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBncm91cGluZ0NvbXBhcmVyKCk6IChhOiBhbnksIGI6IGFueSkgPT4gbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyb3VwaW5nQ29tcGFyZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgYSBjdXN0b20gZnVuY3Rpb24gdG8gY29tcGFyZSB2YWx1ZXMgZm9yIGdyb3VwaW5nLlxuICAgICAqIFN1YnNlcXVlbnQgdmFsdWVzIGluIHRoZSBzb3J0ZWQgZGF0YSB0aGF0IHRoZSBmdW5jdGlvbiByZXR1cm5zIDAgZm9yIGFyZSBncm91cGVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmNvbHVtbi5ncm91cGluZ0NvbXBhcmVyID0gKGE6IGFueSwgYjogYW55KSA9PiB7IHJldHVybiBhID09PSBiID8gMCA6IC0xOyB9XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgZ3JvdXBpbmdDb21wYXJlcihmdW5jUmVmOiAoYTogYW55LCBiOiBhbnkpID0+IG51bWJlcikge1xuICAgICAgICB0aGlzLl9ncm91cGluZ0NvbXBhcmVyID0gZnVuY1JlZjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZGVmYXVsdCBtaW5pbXVtIGB3aWR0aGAgb2YgdGhlIGNvbHVtbi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGRlZmF1bHRNaW5XaWR0aCA9ICB0aGlzLmNvbHVtbi5kZWZhdWx0TWluV2lkdGg7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBkZWZhdWx0TWluV2lkdGgoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF0aGlzLmdyaWQpIHsgcmV0dXJuICc4MCc7IH1cbiAgICAgICAgc3dpdGNoICh0aGlzLmdyaWQuZGlzcGxheURlbnNpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgRGlzcGxheURlbnNpdHkuY29zeTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJzY0JztcbiAgICAgICAgICAgIGNhc2UgRGlzcGxheURlbnNpdHkuY29tcGFjdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJzU2JztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICc4MCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIHJlZmVyZW5jZSB0byB0aGUgYGlneC1ncmlkYCBvd25lci5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGdyaWRDb21wb25lbnQgPSB0aGlzLmNvbHVtbi5ncmlkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ3JpZDogSWd4R3JpZEJhc2VDb21wb25lbnQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgYGJvZHlUZW1wbGF0ZWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBib2R5VGVtcGxhdGUgPSB0aGlzLmNvbHVtbi5ib2R5VGVtcGxhdGU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgnY2VsbFRlbXBsYXRlJylcbiAgICBnZXQgYm9keVRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm9keVRlbXBsYXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBib2R5IHRlbXBsYXRlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8bmctdGVtcGxhdGUgI2JvZHlUZW1wbGF0ZSBpZ3hDZWxsIGxldC12YWw+XG4gICAgICogICAgPGRpdiBzdHlsZSA9IFwiYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW5cIiAoY2xpY2spID0gXCJjaGFuZ2VDb2xvcih2YWwpXCI+XG4gICAgICogICAgICAgPHNwYW4+IHt7dmFsfX0gPC9zcGFuPlxuICAgICAqICAgIDwvZGl2PlxuICAgICAqIDwvbmctdGVtcGxhdGU+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIEBWaWV3Q2hpbGQoXCInYm9keVRlbXBsYXRlJ1wiLCB7cmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgICAgKiBwdWJsaWMgYm9keVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgICAqIHRoaXMuY29sdW1uLmJvZHlUZW1wbGF0ZSA9IHRoaXMuYm9keVRlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBzZXQgYm9keVRlbXBsYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGhlYWRlciB0ZW1wbGF0ZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGhlYWRlclRlbXBsYXRlID0gdGhpcy5jb2x1bW4uaGVhZGVyVGVtcGxhdGU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGhlYWRlclRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faGVhZGVyVGVtcGxhdGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGhlYWRlciB0ZW1wbGF0ZS5cbiAgICAgKiBOb3RlIHRoYXQgdGhlIGNvbHVtbiBoZWFkZXIgaGVpZ2h0IGlzIGZpeGVkIGFuZCBhbnkgY29udGVudCBiaWdnZXIgdGhhbiBpdCB3aWxsIGJlIGN1dCBvZmYuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxuZy10ZW1wbGF0ZSAjaGVhZGVyVGVtcGxhdGU+XG4gICAgICogICA8ZGl2IHN0eWxlID0gXCJiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrXCIgKGNsaWNrKSA9IFwiY2hhbmdlQ29sb3IodmFsKVwiPlxuICAgICAqICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6cmVkXCIgPnt7Y29sdW1uLmZpZWxkfX08L3NwYW4+XG4gICAgICogICA8L2Rpdj5cbiAgICAgKiA8L25nLXRlbXBsYXRlPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKFwiJ2hlYWRlclRlbXBsYXRlJ1wiLCB7cmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgICAgKiBwdWJsaWMgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgICogdGhpcy5jb2x1bW4uaGVhZGVyVGVtcGxhdGUgPSB0aGlzLmhlYWRlclRlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBzZXQgaGVhZGVyVGVtcGxhdGUodGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICAgICAgdGhpcy5faGVhZGVyVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgICAgICAgdGhpcy5ncmlkLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBpbmxpbmUgZWRpdG9yIHRlbXBsYXRlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaW5saW5lRWRpdG9yVGVtcGxhdGUgPSB0aGlzLmNvbHVtbi5pbmxpbmVFZGl0b3JUZW1wbGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KCdjZWxsRWRpdG9yVGVtcGxhdGUnKVxuICAgIGdldCBpbmxpbmVFZGl0b3JUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lubGluZUVkaXRvclRlbXBsYXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBpbmxpbmUgZWRpdG9yIHRlbXBsYXRlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8bmctdGVtcGxhdGUgI2lubGluZUVkaXRvclRlbXBsYXRlIGlneENlbGxFZGl0b3IgbGV0LWNlbGw9XCJjZWxsXCI+XG4gICAgICogICAgIDxpbnB1dCB0eXBlPVwic3RyaW5nXCIgWyhuZ01vZGVsKV09XCJjZWxsLnZhbHVlXCIvPlxuICAgICAqIDwvbmctdGVtcGxhdGU+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIEBWaWV3Q2hpbGQoXCInaW5saW5lRWRpdG9yVGVtcGxhdGUnXCIsIHtyZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICAgICAqIHB1YmxpYyBpbmxpbmVFZGl0b3JUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICAgKiB0aGlzLmNvbHVtbi5pbmxpbmVFZGl0b3JUZW1wbGF0ZSA9IHRoaXMuaW5saW5lRWRpdG9yVGVtcGxhdGU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIHNldCBpbmxpbmVFZGl0b3JUZW1wbGF0ZSh0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgICAgICB0aGlzLl9pbmxpbmVFZGl0b3JUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGBmaWx0ZXJDZWxsVGVtcGxhdGVgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgZmlsdGVyQ2VsbFRlbXBsYXRlID0gdGhpcy5jb2x1bW4uZmlsdGVyQ2VsbFRlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoJ2ZpbHRlckNlbGxUZW1wbGF0ZScpXG4gICAgZ2V0IGZpbHRlckNlbGxUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlckNlbGxUZW1wbGF0ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcXVpY2sgZmlsdGVyIHRlbXBsYXRlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8bmctdGVtcGxhdGUgI2ZpbHRlckNlbGxUZW1wbGF0ZSBJZ3hGaWx0ZXJDZWxsVGVtcGxhdGUgbGV0LWNvbHVtbj1cImNvbHVtblwiPlxuICAgICAqICAgIDxpbnB1dCAoaW5wdXQpPVwib25JbnB1dCgpXCI+XG4gICAgICogPC9uZy10ZW1wbGF0ZT5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogQFZpZXdDaGlsZChcIidmaWx0ZXJDZWxsVGVtcGxhdGUnXCIsIHtyZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICAgICAqIHB1YmxpYyBmaWx0ZXJDZWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgICogdGhpcy5jb2x1bW4uZmlsdGVyQ2VsbFRlbXBsYXRlID0gdGhpcy5maWx0ZXJDZWxsVGVtcGxhdGU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIHNldCBmaWx0ZXJDZWxsVGVtcGxhdGUodGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICAgICAgdGhpcy5fZmlsdGVyQ2VsbFRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNlbGxzIG9mIHRoZSBjb2x1bW4uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bW5DZWxscyA9ICB0aGlzLmNvbHVtbi5jZWxscztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGNlbGxzKCk6IElneEdyaWRDZWxsQ29tcG9uZW50W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnJvd0xpc3QuZmlsdGVyKChyb3cpID0+IHJvdyBpbnN0YW5jZW9mIElneFJvd0NvbXBvbmVudClcbiAgICAgICAgICAgIC5tYXAoKHJvdykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyb3cuY2VsbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdy5jZWxscy5maWx0ZXIoKGNlbGwpID0+IGNlbGwuY29sdW1uSW5kZXggPT09IHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnJlZHVjZSgoYSwgYikgPT4gYS5jb25jYXQoYiksIFtdKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY29sdW1uIHZpc2libGUgaW5kZXguXG4gICAgICogSWYgdGhlIGNvbHVtbiBpcyBub3QgdmlzaWJsZSwgcmV0dXJucyBgLTFgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdmlzaWJsZUNvbHVtbkluZGV4ID0gIHRoaXMuY29sdW1uLnZpc2libGVJbmRleDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IHZpc2libGVJbmRleCgpOiBudW1iZXIge1xuICAgICAgICBpZiAoIWlzTmFOKHRoaXMuX3ZJbmRleCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92SW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdW5waW5uZWRDb2x1bW5zID0gdGhpcy5ncmlkLnVucGlubmVkQ29sdW1ucy5maWx0ZXIoYyA9PiAhYy5jb2x1bW5Hcm91cCk7XG4gICAgICAgIGNvbnN0IHBpbm5lZENvbHVtbnMgPSB0aGlzLmdyaWQucGlubmVkQ29sdW1ucy5maWx0ZXIoYyA9PiAhYy5jb2x1bW5Hcm91cCk7XG4gICAgICAgIGxldCBjb2wgPSB0aGlzO1xuICAgICAgICBsZXQgdkluZGV4ID0gLTE7XG5cbiAgICAgICAgaWYgKHRoaXMuY29sdW1uR3JvdXApIHtcbiAgICAgICAgICAgIGNvbCA9IHRoaXMuYWxsQ2hpbGRyZW4uZmlsdGVyKGMgPT4gIWMuY29sdW1uR3JvdXApWzBdIGFzIGFueTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb2x1bW5MYXlvdXRDaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmNoaWxkcmVuVmlzaWJsZUluZGV4ZXMuZmluZCh4ID0+IHguY29sdW1uID09PSB0aGlzKS5pbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5waW5uZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4SW5Db2xsZWN0aW9uID0gdW5waW5uZWRDb2x1bW5zLmluZGV4T2YoY29sKTtcbiAgICAgICAgICAgIHZJbmRleCA9IGluZGV4SW5Db2xsZWN0aW9uID09PSAtMSA/IC0xIDogcGlubmVkQ29sdW1ucy5sZW5ndGggKyBpbmRleEluQ29sbGVjdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZJbmRleCA9IHBpbm5lZENvbHVtbnMuaW5kZXhPZihjb2wpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZJbmRleCA9IHZJbmRleDtcbiAgICAgICAgcmV0dXJuIHZJbmRleDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGUgY29sdW1uIGlzIGEgYENvbHVtbkdyb3VwYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNvbHVtbkdyb3VwID0gIHRoaXMuY29sdW1uLmNvbHVtbkdyb3VwO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgY29sdW1uR3JvdXAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGUgY29sdW1uIGlzIGEgYENvbHVtbkxheW91dGAgZm9yIG11bHRpLXJvdyBsYXlvdXQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bW5Hcm91cCA9ICB0aGlzLmNvbHVtbi5jb2x1bW5Hcm91cDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGNvbHVtbkxheW91dCgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoZSBjb2x1bW4gaXMgYSBjaGlsZCBvZiBhIGBDb2x1bW5MYXlvdXRgIGZvciBtdWx0aS1yb3cgbGF5b3V0LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY29sdW1uTGF5b3V0Q2hpbGQgPSAgdGhpcy5jb2x1bW4uY29sdW1uTGF5b3V0Q2hpbGQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBjb2x1bW5MYXlvdXRDaGlsZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmNvbHVtbkxheW91dDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjaGlsZHJlbiBjb2x1bW5zIGNvbGxlY3Rpb24uXG4gICAgICogUmV0dXJucyBhbiBlbXB0eSBhcnJheSBpZiB0aGUgY29sdW1uIGRvZXMgbm90IGNvbnRhaW4gY2hpbGRyZW4gY29sdW1ucy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNoaWxkcmVuQ29sdW1ucyA9ICB0aGlzLmNvbHVtbi5hbGxDaGlsZHJlbjtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGFsbENoaWxkcmVuKCk6IElneENvbHVtbkNvbXBvbmVudFtdIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsZXZlbCBvZiB0aGUgY29sdW1uIGluIGEgY29sdW1uIGdyb3VwLlxuICAgICAqIFJldHVybnMgYDBgIGlmIHRoZSBjb2x1bW4gZG9lc24ndCBoYXZlIGEgYHBhcmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bW5MZXZlbCA9ICB0aGlzLmNvbHVtbi5sZXZlbDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGxldmVsKCkge1xuICAgICAgICBsZXQgcHRyID0gdGhpcy5wYXJlbnQ7XG4gICAgICAgIGxldCBsdmwgPSAwO1xuXG4gICAgICAgIHdoaWxlIChwdHIpIHtcbiAgICAgICAgICAgIGx2bCsrO1xuICAgICAgICAgICAgcHRyID0gcHRyLnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbHZsO1xuICAgIH1cblxuICAgIGdldCBpc0xhc3RQaW5uZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQucGlubmVkQ29sdW1uc1t0aGlzLmdyaWQucGlubmVkQ29sdW1ucy5sZW5ndGggLSAxXSA9PT0gdGhpcztcbiAgICB9XG4gICAgZ2V0IGdyaWRSb3dTcGFuKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvd0VuZCAmJiB0aGlzLnJvd1N0YXJ0ID8gdGhpcy5yb3dFbmQgLSB0aGlzLnJvd1N0YXJ0IDogMTtcbiAgICB9XG4gICAgZ2V0IGdyaWRDb2x1bW5TcGFuKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbEVuZCAmJiB0aGlzLmNvbFN0YXJ0ID8gdGhpcy5jb2xFbmQgLSB0aGlzLmNvbFN0YXJ0IDogMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSb3cgaW5kZXggd2hlcmUgdGhlIGN1cnJlbnQgZmllbGQgc2hvdWxkIGVuZC5cbiAgICAgKiBUaGUgYW1vdW50IG9mIHJvd3MgYmV0d2VlbiByb3dTdGFydCBhbmQgcm93RW5kIHdpbGwgZGV0ZXJtaW5lIHRoZSBhbW91bnQgb2Ygc3Bhbm5pbmcgcm93cyB0byB0aGF0IGZpZWxkXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY29sdW1uLWxheW91dD5cbiAgICAgKiAgIDxpZ3gtY29sdW1uIFtyb3dFbmRdPVwiMlwiIFtyb3dTdGFydF09XCIxXCIgW2NvbFN0YXJ0XT1cIjFcIj48L2lneC1jb2x1bW4+XG4gICAgICogPC9pZ3gtY29sdW1uLWxheW91dD5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcm93RW5kOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBDb2x1bW4gaW5kZXggd2hlcmUgdGhlIGN1cnJlbnQgZmllbGQgc2hvdWxkIGVuZC5cbiAgICAgKiBUaGUgYW1vdW50IG9mIGNvbHVtbnMgYmV0d2VlbiBjb2xTdGFydCBhbmQgY29sRW5kIHdpbGwgZGV0ZXJtaW5lIHRoZSBhbW91bnQgb2Ygc3Bhbm5pbmcgY29sdW1ucyB0byB0aGF0IGZpZWxkXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY29sdW1uLWxheW91dD5cbiAgICAgKiAgIDxpZ3gtY29sdW1uIFtjb2xFbmRdPVwiM1wiIFtyb3dTdGFydF09XCIxXCIgW2NvbFN0YXJ0XT1cIjFcIj48L2lneC1jb2x1bW4+XG4gICAgICogPC9pZ3gtY29sdW1uLWxheW91dD5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29sRW5kOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBSb3cgaW5kZXggZnJvbSB3aGljaCB0aGUgZmllbGQgaXMgc3RhcnRpbmcuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY29sdW1uLWxheW91dD5cbiAgICAgKiAgIDxpZ3gtY29sdW1uIFtyb3dTdGFydF09XCIxXCIgW2NvbFN0YXJ0XT1cIjFcIj48L2lneC1jb2x1bW4+XG4gICAgICogPC9pZ3gtY29sdW1uLWxheW91dD5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcm93U3RhcnQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIENvbHVtbiBpbmRleCBmcm9tIHdoaWNoIHRoZSBmaWVsZCBpcyBzdGFydGluZy5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb2x1bW4tbGF5b3V0PlxuICAgICAqICAgPGlneC1jb2x1bW4gW2NvbFN0YXJ0XT1cIjFcIiBbcm93U3RhcnRdPVwiMVwiPjwvaWd4LWNvbHVtbj5cbiAgICAgKiA8L2lneC1jb2x1bW4tbGF5b3V0PlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBjb2xTdGFydDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGRlZmF1bHRXaWR0aDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHdpZHRoU2V0QnlVc2VyOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlIG9mIHRoZSBjb2x1bW4uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB0cmVlID0gIHRoaXMuY29sdW1uLmZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSgpOiBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZS5maW5kKHRoaXMuZmllbGQpIGFzIEZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBwYXJlbnQgY29sdW1uLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgcGFyZW50Q29sdW1uID0gdGhpcy5jb2x1bW4ucGFyZW50O1xuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmNvbHVtbi5wYXJlbnQgPSBoaWdoZXJMZXZlbENvbHVtbjtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgcGFyZW50ID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGNoaWxkcmVuIGNvbHVtbnMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bW5DaGlsZHJlbiA9IHRoaXMuY29sdW1uLmNoaWxkcmVuO1xuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmNvbHVtbi5jaGlsZHJlbiA9IGNoaWxkcmVuQ29sdW1ucztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgY2hpbGRyZW46IFF1ZXJ5TGlzdDxJZ3hDb2x1bW5Db21wb25lbnQ+O1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfdW5waW5uZWRJbmRleDtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX3Bpbm5lZCA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfYm9keVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9pbmxpbmVFZGl0b3JUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2ZpbHRlckNlbGxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX3N1bW1hcmllcyA9IG51bGw7XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9maWx0ZXJzID0gbnVsbDtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX3NvcnRTdHJhdGVneTogSVNvcnRpbmdTdHJhdGVneSA9IERlZmF1bHRTb3J0aW5nU3RyYXRlZ3kuaW5zdGFuY2UoKTtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2dyb3VwaW5nQ29tcGFyZXI6IChhOiBhbnksIGI6IGFueSkgPT4gbnVtYmVyO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfaGlkZGVuID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9pbmRleDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfZGlzYWJsZUhpZGluZyA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfZGlzYWJsZVBpbm5pbmcgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX3dpZHRoOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9kZWZhdWx0TWluV2lkdGggPSAnJztcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2hhc1N1bW1hcnkgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9lZGl0YWJsZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldCBpc1ByaW1hcnlDb2x1bW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkICE9PSB1bmRlZmluZWQgJiYgdGhpcy5ncmlkICE9PSB1bmRlZmluZWQgJiYgdGhpcy5maWVsZCA9PT0gdGhpcy5ncmlkLnByaW1hcnlLZXk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4Q2VsbFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IElneENlbGxUZW1wbGF0ZURpcmVjdGl2ZSwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGNlbGxUZW1wbGF0ZTogSWd4Q2VsbFRlbXBsYXRlRGlyZWN0aXZlO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGRyZW4oSWd4Q2VsbEhlYWRlclRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IElneENlbGxIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSwgZGVzY2VuZGFudHM6IGZhbHNlIH0pXG4gICAgcHJvdGVjdGVkIGhlYWRUZW1wbGF0ZTogUXVlcnlMaXN0PElneENlbGxIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZT47XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChJZ3hDZWxsRWRpdG9yVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogSWd4Q2VsbEVkaXRvclRlbXBsYXRlRGlyZWN0aXZlLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgZWRpdG9yVGVtcGxhdGU6IElneENlbGxFZGl0b3JUZW1wbGF0ZURpcmVjdGl2ZTtcblxuICAgIHByb3RlY3RlZCBfdkluZGV4ID0gTmFOO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4RmlsdGVyQ2VsbFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IElneEZpbHRlckNlbGxUZW1wbGF0ZURpcmVjdGl2ZSwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGZpbHRlckNlbGxUZW1wbGF0ZURpcmVjdGl2ZTogSWd4RmlsdGVyQ2VsbFRlbXBsYXRlRGlyZWN0aXZlO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPiwgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyByZXNldENhY2hlcygpIHtcbiAgICAgICAgdGhpcy5fdkluZGV4ID0gTmFOO1xuICAgICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlQ2FsY1dpZHRoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jZWxsVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2JvZHlUZW1wbGF0ZSA9IHRoaXMuY2VsbFRlbXBsYXRlLnRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhlYWRUZW1wbGF0ZSAmJiB0aGlzLmhlYWRUZW1wbGF0ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX2hlYWRlclRlbXBsYXRlID0gdGhpcy5oZWFkVGVtcGxhdGUudG9BcnJheSgpWzBdLnRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVkaXRvclRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbmxpbmVFZGl0b3JUZW1wbGF0ZSA9IHRoaXMuZWRpdG9yVGVtcGxhdGUudGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyQ2VsbFRlbXBsYXRlRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLl9maWx0ZXJDZWxsVGVtcGxhdGUgPSB0aGlzLmZpbHRlckNlbGxUZW1wbGF0ZURpcmVjdGl2ZS50ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuc3VtbWFyaWVzKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGF0YVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIERhdGFUeXBlLlN0cmluZzpcbiAgICAgICAgICAgICAgICBjYXNlIERhdGFUeXBlLkJvb2xlYW46XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VtbWFyaWVzID0gSWd4U3VtbWFyeU9wZXJhbmQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuTnVtYmVyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1bW1hcmllcyA9IElneE51bWJlclN1bW1hcnlPcGVyYW5kO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIERhdGFUeXBlLkRhdGU6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VtbWFyaWVzID0gSWd4RGF0ZVN1bW1hcnlPcGVyYW5kO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1bW1hcmllcyA9IElneFN1bW1hcnlPcGVyYW5kO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuZmlsdGVycykge1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmRhdGFUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBEYXRhVHlwZS5Cb29sZWFuOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcnMgPSBJZ3hCb29sZWFuRmlsdGVyaW5nT3BlcmFuZC5pbnN0YW5jZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIERhdGFUeXBlLk51bWJlcjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJzID0gSWd4TnVtYmVyRmlsdGVyaW5nT3BlcmFuZC5pbnN0YW5jZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIERhdGFUeXBlLkRhdGU6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVycyA9IElneERhdGVGaWx0ZXJpbmdPcGVyYW5kLmluc3RhbmNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuU3RyaW5nOlxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVycyA9IElneFN0cmluZ0ZpbHRlcmluZ09wZXJhbmQuaW5zdGFuY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0R3JpZFRlbXBsYXRlKGlzUm93OiBib29sZWFuLCBpc0lFOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGlzUm93KSB7XG4gICAgICAgICAgICBjb25zdCByb3dzQ291bnQgPSB0aGlzLmdyaWQubXVsdGlSb3dMYXlvdXRSb3dTaXplO1xuICAgICAgICAgICAgcmV0dXJuIGlzSUUgP1xuICAgICAgICAgICAgICAgIGAoMWZyKVske3Jvd3NDb3VudH1dYCA6XG4gICAgICAgICAgICAgICAgYHJlcGVhdCgke3Jvd3NDb3VudH0sMWZyKWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDb2x1bW5TaXplc1N0cmluZyh0aGlzLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJbml0aWFsQ2hpbGRDb2x1bW5TaXplcyhjaGlsZHJlbjogUXVlcnlMaXN0PElneENvbHVtbkNvbXBvbmVudD4pOiBBcnJheTxNUkxDb2x1bW5TaXplSW5mbz4ge1xuICAgICAgICBjb25zdCBjb2x1bW5TaXplczogTVJMQ29sdW1uU2l6ZUluZm9bXSA9IFtdO1xuICAgICAgICAvLyBmaW5kIHRoZSBzbWFsbGVzdCBjb2wgc3BhbnNcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICAgICAgaWYgKCFjb2wuY29sU3RhcnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdXaWR0aFNldCA9ICBjb2wud2lkdGhTZXRCeVVzZXIgJiYgY29sdW1uU2l6ZXNbY29sLmNvbFN0YXJ0IC0gMV0gJiYgIWNvbHVtblNpemVzW2NvbC5jb2xTdGFydCAtIDFdLndpZHRoU2V0QnlVc2VyO1xuICAgICAgICAgICAgY29uc3QgbmV3U3BhblNtYWxsZXIgPSBjb2x1bW5TaXplc1tjb2wuY29sU3RhcnQgLSAxXSAmJiBjb2x1bW5TaXplc1tjb2wuY29sU3RhcnQgLSAxXS5jb2xTcGFuID4gY29sLmdyaWRDb2x1bW5TcGFuO1xuICAgICAgICAgICAgY29uc3QgYm90aFdpZHRoc1NldCA9IGNvbC53aWR0aFNldEJ5VXNlciAmJiBjb2x1bW5TaXplc1tjb2wuY29sU3RhcnQgLSAxXSAmJiBjb2x1bW5TaXplc1tjb2wuY29sU3RhcnQgLSAxXS53aWR0aFNldEJ5VXNlcjtcbiAgICAgICAgICAgIGNvbnN0IGJvdGhXaWR0aHNOb3RTZXQgPSAhY29sLndpZHRoU2V0QnlVc2VyICYmIGNvbHVtblNpemVzW2NvbC5jb2xTdGFydCAtIDFdICYmICFjb2x1bW5TaXplc1tjb2wuY29sU3RhcnQgLSAxXS53aWR0aFNldEJ5VXNlcjtcblxuICAgICAgICAgICAgaWYgKGNvbHVtblNpemVzW2NvbC5jb2xTdGFydCAtIDFdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBub3RoaW5nIGlzIGRlZmluZWQgeWV0IHRha2UgYW55IGNvbHVtbiBhdCBmaXJzdFxuICAgICAgICAgICAgICAgIC8vIFdlIHVzZSBjb2xFbmQgdG8ga25vdyB3aGVyZSB0aGUgY29sdW1uIGFjdHVhbGx5IGVuZHMsIGJlY2F1c2Ugbm90IGFsd2F5cyBpdCBzdGFydHMgd2hlcmUgd2UgaGF2ZSBpdCBzZXQgaW4gY29sdW1uU2l6ZXMuXG4gICAgICAgICAgICAgICAgY29sdW1uU2l6ZXNbY29sLmNvbFN0YXJ0IC0gMV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogY29sLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY29sLndpZHRoU2V0QnlVc2VyIHx8IHRoaXMuZ3JpZC5jb2x1bW5XaWR0aFNldEJ5VXNlciA/IHBhcnNlSW50KGNvbC5jYWxjV2lkdGgsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGNvbFNwYW46IGNvbC5ncmlkQ29sdW1uU3BhbixcbiAgICAgICAgICAgICAgICAgICAgY29sRW5kOiBjb2wuY29sU3RhcnQgKyBjb2wuZ3JpZENvbHVtblNwYW4sXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoU2V0QnlVc2VyOiBjb2wud2lkdGhTZXRCeVVzZXJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdXaWR0aFNldCB8fCAobmV3U3BhblNtYWxsZXIgJiYgKChib3RoV2lkdGhzU2V0KSB8fCAoYm90aFdpZHRoc05vdFNldCkpKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIGEgY29sdW1uIGlzIHNldCBhbHJlYWR5IGl0IHNob3VsZCBlaXRoZXIgbm90IGhhdmUgd2lkdGggZGVmaW5lZCBvciBoYXZlIHdpZHRoIHdpdGggYmlnZ2VyIHNwYW4gdGhhbiB0aGUgbmV3IG9uZS5cblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqICBJZiByZXBsYWNlZCBjb2x1bW4gaGFzIGJpZ2dlciBzcGFuLCB3ZSB3YW50IHRvIGZpbGwgdGhlIHJlbWFpbmluZyBjb2x1bW5zXG4gICAgICAgICAgICAgICAgICogIHRoYXQgdGhlIHJlcGxhY2luZyBjb2x1bW4gZG9lcyBub3QgZmlsbCB3aXRoIHRoZSBvbGQgb25lLlxuICAgICAgICAgICAgICAgICAqKi9cbiAgICAgICAgICAgICAgICBpZiAoYm90aFdpZHRoc1NldCAmJiBuZXdTcGFuU21hbGxlcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdGFydCBmcm9tIHdoZXJlIHRoZSBuZXcgY29sdW1uIHNldCB3b3VsZCBlbmQgYW5kIGFwcGx5IHRoZSBvbGQgY29sdW1uIHRvIHRoZSByZXN0IGRlcGVuZGluZyBvbiBob3cgbXVjaCBpdCBzcGFucy5cbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBub3QgeWV0IHJlcGxhY2VkIGl0IHNvIHdlIGNhbiB1c2UgaXQgZGlyZWN0bHkgZnJvbSB0aGUgY29sdW1uU2l6ZXMgY29sbGVjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyB3aGVyZSBjb2xFbmQgaXMgdXNlZCBiZWNhdXNlIHRoZSBjb2xTdGFydCBvZiB0aGUgb2xkIGNvbHVtbiBpcyBub3QgYWN0dWFsbHkgaSArIDEuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb2wuY29sU3RhcnQgLSAxICsgY29sLmdyaWRDb2x1bW5TcGFuOyBpIDwgY29sdW1uU2l6ZXNbY29sLmNvbFN0YXJ0IC0gMV0uY29sRW5kIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbHVtblNpemVzW2ldIHx8ICFjb2x1bW5TaXplc1tpXS53aWR0aFNldEJ5VXNlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblNpemVzW2ldID0gY29sdW1uU2l6ZXNbY29sLmNvbFN0YXJ0IC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgb2xkIGNvbHVtbiB3aXRoIHRoZSBuZXcgb25lLlxuICAgICAgICAgICAgICAgIGNvbHVtblNpemVzW2NvbC5jb2xTdGFydCAtIDFdID0ge1xuICAgICAgICAgICAgICAgICAgICByZWY6IGNvbCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNvbC53aWR0aFNldEJ5VXNlciB8fCB0aGlzLmdyaWQuY29sdW1uV2lkdGhTZXRCeVVzZXIgPyBwYXJzZUludChjb2wuY2FsY1dpZHRoLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBjb2xTcGFuOiBjb2wuZ3JpZENvbHVtblNwYW4sXG4gICAgICAgICAgICAgICAgICAgIGNvbEVuZDogY29sLmNvbFN0YXJ0ICsgY29sLmdyaWRDb2x1bW5TcGFuLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aFNldEJ5VXNlcjogY29sLndpZHRoU2V0QnlVc2VyXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYm90aFdpZHRoc1NldCAmJiBjb2x1bW5TaXplc1tjb2wuY29sU3RhcnQgLSAxXS5jb2xTcGFuIDwgY29sLmdyaWRDb2x1bW5TcGFuKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNvbHVtbiBhbHJlYWR5IGluIHRoZSBjb2x1bW5TaXplcyBoYXMgc21hbGxlciBzcGFuLCB3ZSBzdGlsbCBuZWVkIHRvIGZpbGwgYW55IGVtcHR5IHBsYWNlcyB3aXRoIHRoZSBjdXJyZW50IGNvbC5cbiAgICAgICAgICAgICAgICAvLyBTdGFydCBmcm9tIHdoZXJlIHRoZSBzbWFsbGVyIGNvbHVtbiBzZXQgd291bGQgZW5kIGFuZCBhcHBseSB0aGUgYmlnZ2VyIGNvbHVtbiB0byB0aGUgcmVzdCBkZXBlbmRpbmcgb24gaG93IG11Y2ggaXQgc3BhbnMuXG4gICAgICAgICAgICAgICAgLy8gU2luY2UgaGVyZSB3ZSBkbyBub3QgaGF2ZSBpdCBpbiBjb2x1bW5TaXplcyB3ZSBzZXQgaXQgYXMgYSBuZXcgY29sdW1uIGtlZXBpbmcgdGhlIHNhbWUgY29sU3Bhbi5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY29sLmNvbFN0YXJ0IC0gMSArIGNvbHVtblNpemVzW2NvbC5jb2xTdGFydCAtIDFdLmNvbFNwYW47IGkgPCBjb2wuY29sU3RhcnQgLSAxICsgY29sLmdyaWRDb2x1bW5TcGFuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb2x1bW5TaXplc1tpXSB8fCAhY29sdW1uU2l6ZXNbaV0ud2lkdGhTZXRCeVVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblNpemVzW2ldID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogY29sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjb2wud2lkdGhTZXRCeVVzZXIgfHwgdGhpcy5ncmlkLmNvbHVtbldpZHRoU2V0QnlVc2VyID8gcGFyc2VJbnQoY29sLmNhbGNXaWR0aCwgMTApIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xTcGFuOiBjb2wuZ3JpZENvbHVtblNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sRW5kOiBjb2wuY29sU3RhcnQgKyBjb2wuZ3JpZENvbHVtblNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGhTZXRCeVVzZXI6IGNvbC53aWR0aFNldEJ5VXNlclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBGbGF0dGVuIGNvbHVtblNpemVzIHNvIHRoZXJlIGFyZSBub3QgY29sdW1ucyB3aXRoIGNvbFNwYW4gPiAxXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uU2l6ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb2x1bW5TaXplc1tpXSAmJiBjb2x1bW5TaXplc1tpXS5jb2xTcGFuID4gMSkge1xuICAgICAgICAgICAgICAgIGxldCBqID0gMTtcblxuICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgYWxsIGVtcHR5IHBsYWNlcyBkZXBlbmRpbmcgb24gaG93IG11Y2ggdGhlIGN1cnJlbnQgY29sdW1uIHNwYW5zIHN0YXJ0aW5nIGZyb20gbmV4dCBjb2wuXG4gICAgICAgICAgICAgICAgZm9yICg7IGogPCBjb2x1bW5TaXplc1tpXS5jb2xTcGFuICYmIGkgKyBqICsgMSA8IGNvbHVtblNpemVzW2ldLmNvbEVuZDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2x1bW5TaXplc1tpICsgal0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICgoIWNvbHVtblNpemVzW2ldLndpZHRoICYmIGNvbHVtblNpemVzW2kgKyBqXS53aWR0aCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAoIWNvbHVtblNpemVzW2ldLndpZHRoICYmICFjb2x1bW5TaXplc1tpICsgal0ud2lkdGggJiYgY29sdW1uU2l6ZXNbaSArIGpdLmNvbFNwYW4gPD0gY29sdW1uU2l6ZXNbaV0uY29sU3BhbikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICghIWNvbHVtblNpemVzW2kgKyBqXS53aWR0aCAmJiBjb2x1bW5TaXplc1tpICsgal0uY29sU3BhbiA8PSBjb2x1bW5TaXplc1tpXS5jb2xTcGFuKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIHJlYWNoIGFuIGFscmVhZHkgZGVmaW5lZCBjb2x1bW4gdGhhdCBoYXMgd2lkdGggYW5kIHRoZSBjdXJyZW50IGRvZXNuJ3QgaGF2ZSBvclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHJlYWNoZWQgY29sdW1uIGhhcyBiaWdnZXIgY29sU3BhbiB3ZSBzdG9wLlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IGNvbHVtblNpemVzW2ldLndpZHRoU2V0QnlVc2VyID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5TaXplc1tpXS53aWR0aCAvIGNvbHVtblNpemVzW2ldLmNvbFNwYW4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblNpemVzW2ldLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uU2l6ZXNbaSArIGpdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogY29sdW1uU2l6ZXNbaV0ucmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xTcGFuOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbEVuZDogY29sdW1uU2l6ZXNbaV0uY29sRW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoU2V0QnlVc2VyOiBjb2x1bW5TaXplc1tpXS53aWR0aFNldEJ5VXNlclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgY3VycmVudCBjb2x1bW4gd2lkdGggc28gaXQgaXMgZGl2aWRlZCBiZXR3ZWVuIGFsbCBjb2x1bW5zIGl0IHNwYW5zIGFuZCBzZXQgaXQgdG8gMS5cbiAgICAgICAgICAgICAgICBjb2x1bW5TaXplc1tpXS53aWR0aCA9IGNvbHVtblNpemVzW2ldLndpZHRoU2V0QnlVc2VyID9cbiAgICAgICAgICAgICAgICAgICAgY29sdW1uU2l6ZXNbaV0ud2lkdGggLyBjb2x1bW5TaXplc1tpXS5jb2xTcGFuIDpcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uU2l6ZXNbaV0ud2lkdGg7XG4gICAgICAgICAgICAgICAgY29sdW1uU2l6ZXNbaV0uY29sU3BhbiA9IDE7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGluZGV4IGJhc2VkIG9uIGhvdyBtdWNoIHdlIGhhdmUgcmVwbGFjZWQuIFN1YnRyYWN0IDEgYmVjYXVzZSB3ZSBzdGFydGVkIGZyb20gMS5cbiAgICAgICAgICAgICAgICBpICs9IGogLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbHVtblNpemVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRGaWxsZWRDaGlsZENvbHVtblNpemVzKGNoaWxkcmVuOiBRdWVyeUxpc3Q8SWd4Q29sdW1uQ29tcG9uZW50Pik6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICBjb25zdCBjb2x1bW5TaXplcyA9IHRoaXMuZ2V0SW5pdGlhbENoaWxkQ29sdW1uU2l6ZXMoY2hpbGRyZW4pO1xuXG4gICAgICAgIC8vIGZpbGwgdGhlIGdhcHMgaWYgdGhlcmUgYXJlIGFueVxuICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uU2l6ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb2x1bW5TaXplc1tpXSAmJiAhIWNvbHVtblNpemVzW2ldLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29sdW1uU2l6ZXNbaV0ud2lkdGggKyAncHgnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyc2VJbnQodGhpcy5ncmlkLmdldFBvc3NpYmxlQ29sdW1uV2lkdGgoKSwgMTApICsgJ3B4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uU2l6ZXNTdHJpbmcoY2hpbGRyZW46IFF1ZXJ5TGlzdDxJZ3hDb2x1bW5Db21wb25lbnQ+KTogc3RyaW5nIHtcbiAgICAgICBjb25zdCByZXMgPSB0aGlzLmdldEZpbGxlZENoaWxkQ29sdW1uU2l6ZXMoY2hpbGRyZW4pO1xuICAgICAgIHJldHVybiByZXMuam9pbignICcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSZXNpemFibGVDb2xVbmRlckVuZCgpOiBNUkxSZXNpemVDb2x1bW5JbmZvW10ge1xuICAgICAgICBpZiAodGhpcy5jb2x1bW5MYXlvdXQgfHwgIXRoaXMuY29sdW1uTGF5b3V0Q2hpbGQgfHwgdGhpcy5jb2x1bW5Hcm91cCkge1xuICAgICAgICAgICAgcmV0dXJuIFt7IHRhcmdldDogdGhpcywgc3BhblVzZWQ6IDEgfV07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb2x1bW5TaXplZCA9IHRoaXMuZ2V0SW5pdGlhbENoaWxkQ29sdW1uU2l6ZXModGhpcy5wYXJlbnQuY2hpbGRyZW4pO1xuICAgICAgICBjb25zdCB0YXJnZXRzOiBNUkxSZXNpemVDb2x1bW5JbmZvW10gPSBbXTtcbiAgICAgICAgY29uc3QgY29sRW5kID0gdGhpcy5jb2xFbmQgPyB0aGlzLmNvbEVuZCA6IHRoaXMuY29sU3RhcnQgKyAxO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uU2l6ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbFN0YXJ0IDw9IGkgKyAxICYmIGkgKyAxIDwgY29sRW5kKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0cy5wdXNoKHsgdGFyZ2V0OiBjb2x1bW5TaXplZFtpXS5yZWYsIHNwYW5Vc2VkOiAxfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXJnZXRzU3F1YXNoZWQ6IE1STFJlc2l6ZUNvbHVtbkluZm9bXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRhcmdldHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXRzU3F1YXNoZWQubGVuZ3RoICYmIHRhcmdldHNTcXVhc2hlZFt0YXJnZXRzU3F1YXNoZWQubGVuZ3RoIC0gMV0udGFyZ2V0LmZpZWxkID09PSB0YXJnZXRzW2pdLnRhcmdldC5maWVsZCkge1xuICAgICAgICAgICAgICAgIHRhcmdldHNTcXVhc2hlZFt0YXJnZXRzU3F1YXNoZWQubGVuZ3RoIC0gMV0uc3BhblVzZWQrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0c1NxdWFzaGVkLnB1c2godGFyZ2V0c1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0c1NxdWFzaGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBpbnMgdGhlIGNvbHVtbiBhdCB0aGUgcHJvdmlkZWQgaW5kZXggaW4gdGhlIHBpbm5lZCBhcmVhLiBEZWZhdWx0cyB0byBpbmRleCBgMGAgaWYgbm90IHByb3ZpZGVkLlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBjb2x1bW4gaXMgc3VjY2Vzc2Z1bGx5IHBpbm5lZC4gUmV0dXJucyBgZmFsc2VgIGlmIHRoZSBjb2x1bW4gY2Fubm90IGJlIHBpbm5lZC5cbiAgICAgKiBDb2x1bW4gY2Fubm90IGJlIHBpbm5lZCBpZjpcbiAgICAgKiAtIElzIGFscmVhZHkgcGlubmVkXG4gICAgICogLSBpbmRleCBhcmd1bWVudCBpcyBvdXQgb2YgcmFuZ2VcbiAgICAgKiAtIFRoZSBwaW5uZWQgYXJlYSBleGNlZWRzIDgwJSBvZiB0aGUgZ3JpZCB3aWR0aFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgc3VjY2VzcyA9IHRoaXMuY29sdW1uLnBpbigpO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgcGluKGluZGV4PzogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIC8vIFRPRE86IFByb2JhYmx5IHNob3VsZCB0aGUgcmV0dXJuIHR5cGUgb2YgdGhlIG9sZCBmdW5jdGlvbnNcbiAgICAgICAgLy8gc2hvdWxkIGJlIG1vdmVkIGFzIGEgZXZlbnQgcGFyYW1ldGVyLlxuICAgICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQuZW5kRWRpdCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fcGlubmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wYXJlbnQgJiYgIXRoaXMucGFyZW50LnBpbm5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9wTGV2ZWxQYXJlbnQucGluKGluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdyaWQgPSAodGhpcy5ncmlkIGFzIGFueSk7XG4gICAgICAgIGNvbnN0IGhhc0luZGV4ID0gaW5kZXggIT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGhhc0luZGV4ICYmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gZ3JpZC5waW5uZWRDb2x1bW5zLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdpZHRoID0gcGFyc2VJbnQodGhpcy53aWR0aCwgMTApO1xuXG4gICAgICAgIGlmICghdGhpcy5wYXJlbnQgJiYgKGdyaWQuZ2V0VW5waW5uZWRXaWR0aCh0cnVlKSAtIHdpZHRoIDwgZ3JpZC51bnBpbm5lZEFyZWFNaW5XaWR0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3Bpbm5lZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3VucGlubmVkSW5kZXggPSBncmlkLl91bnBpbm5lZENvbHVtbnMuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgaW5kZXggPSBpbmRleCAhPT0gdW5kZWZpbmVkID8gaW5kZXggOiBncmlkLl9waW5uZWRDb2x1bW5zLmxlbmd0aDtcbiAgICAgICAgY29uc3QgdGFyZ2V0Q29sdW1uID0gZ3JpZC5fcGlubmVkQ29sdW1uc1tpbmRleF07XG4gICAgICAgIGNvbnN0IGFyZ3MgPSB7IGNvbHVtbjogdGhpcywgaW5zZXJ0QXRJbmRleDogaW5kZXgsIGlzUGlubmVkOiB0cnVlIH07XG4gICAgICAgIGdyaWQub25Db2x1bW5QaW5uaW5nLmVtaXQoYXJncyk7XG5cbiAgICAgICAgaWYgKGdyaWQuX3Bpbm5lZENvbHVtbnMuaW5kZXhPZih0aGlzKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGdyaWQuX3Bpbm5lZENvbHVtbnMuc3BsaWNlKGFyZ3MuaW5zZXJ0QXRJbmRleCwgMCwgdGhpcyk7XG5cbiAgICAgICAgICAgIGlmIChncmlkLl91bnBpbm5lZENvbHVtbnMuaW5kZXhPZih0aGlzKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBncmlkLl91bnBpbm5lZENvbHVtbnMuc3BsaWNlKGdyaWQuX3VucGlubmVkQ29sdW1ucy5pbmRleE9mKHRoaXMpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNJbmRleCkge1xuICAgICAgICAgICAgZ3JpZC5fbW92ZUNvbHVtbnModGhpcywgdGFyZ2V0Q29sdW1uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbHVtbkdyb3VwKSB7XG4gICAgICAgICAgICB0aGlzLmFsbENoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQucGluKCkpO1xuICAgICAgICAgICAgZ3JpZC5yZWluaXRQaW5TdGF0ZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyaWQucmVzZXRDYWNoZXMoKTtcbiAgICAgICAgZ3JpZC5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICBpZiAodGhpcy5jb2x1bW5MYXlvdXRDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5ncmlkLmNvbHVtbnMuZmlsdGVyKHggPT4geC5jb2x1bW5MYXlvdXQpLmZvckVhY2goIHggPT4geC5wb3B1bGF0ZVZpc2libGVJbmRleGVzKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ3JpZC5maWx0ZXJpbmdTZXJ2aWNlLnJlZnJlc2hFeHByZXNzaW9ucygpO1xuICAgICAgICB0aGlzLmdyaWQucmVmcmVzaFNlYXJjaCh0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVucGlucyB0aGUgY29sdW1uIGFuZCBwbGFjZSBpdCBhdCB0aGUgcHJvdmlkZWQgaW5kZXggaW4gdGhlIHVucGlubmVkIGFyZWEuIERlZmF1bHRzIHRvIGluZGV4IGAwYCBpZiBub3QgcHJvdmlkZWQuXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGNvbHVtbiBpcyBzdWNjZXNzZnVsbHkgdW5waW5uZWQuIFJldHVybnMgYGZhbHNlYCBpZiB0aGUgY29sdW1uIGNhbm5vdCBiZSB1bnBpbm5lZC5cbiAgICAgKiBDb2x1bW4gY2Fubm90IGJlIHVucGlubmVkIGlmOlxuICAgICAqIC0gSXMgYWxyZWFkeSB1bnBpbm5lZFxuICAgICAqIC0gaW5kZXggYXJndW1lbnQgaXMgb3V0IG9mIHJhbmdlXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBzdWNjZXNzID0gdGhpcy5jb2x1bW4udW5waW4oKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHVucGluKGluZGV4PzogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5lbmRFZGl0KHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fcGlubmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQucGlubmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b3BMZXZlbFBhcmVudC51bnBpbihpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBncmlkID0gKHRoaXMuZ3JpZCBhcyBhbnkpO1xuICAgICAgICBjb25zdCBoYXNJbmRleCA9IGluZGV4ICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChoYXNJbmRleCAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID49IGdyaWQuX3VucGlubmVkQ29sdW1ucy5sZW5ndGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpbmRleCA9IChpbmRleCAhPT0gdW5kZWZpbmVkID8gaW5kZXggOlxuICAgICAgICAgICAgdGhpcy5fdW5waW5uZWRJbmRleCAhPT0gdW5kZWZpbmVkID8gdGhpcy5fdW5waW5uZWRJbmRleCA6IHRoaXMuaW5kZXgpO1xuICAgICAgICB0aGlzLl9waW5uZWQgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0YXJnZXRDb2x1bW4gPSBncmlkLl91bnBpbm5lZENvbHVtbnNbaW5kZXhdO1xuXG4gICAgICAgIGdyaWQuX3VucGlubmVkQ29sdW1ucy5zcGxpY2UoaW5kZXgsIDAsIHRoaXMpO1xuICAgICAgICBpZiAoZ3JpZC5fcGlubmVkQ29sdW1ucy5pbmRleE9mKHRoaXMpICE9PSAtMSkge1xuICAgICAgICAgICAgZ3JpZC5fcGlubmVkQ29sdW1ucy5zcGxpY2UoZ3JpZC5fcGlubmVkQ29sdW1ucy5pbmRleE9mKHRoaXMpLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNJbmRleCkge1xuICAgICAgICAgICAgZ3JpZC5fbW92ZUNvbHVtbnModGhpcywgdGFyZ2V0Q29sdW1uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbHVtbkdyb3VwKSB7XG4gICAgICAgICAgICB0aGlzLmFsbENoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQudW5waW4oKSk7XG4gICAgICAgIH1cblxuICAgICAgICBncmlkLnJlaW5pdFBpblN0YXRlcygpO1xuICAgICAgICBncmlkLnJlc2V0Q2FjaGVzKCk7XG5cbiAgICAgICAgY29uc3QgaW5zZXJ0QXRJbmRleCA9IGdyaWQuX3VucGlubmVkQ29sdW1ucy5pbmRleE9mKHRoaXMpO1xuICAgICAgICBjb25zdCBhcmdzID0geyBjb2x1bW46IHRoaXMsIGluc2VydEF0SW5kZXgsIGlzUGlubmVkOiBmYWxzZSB9O1xuICAgICAgICBncmlkLm9uQ29sdW1uUGlubmluZy5lbWl0KGFyZ3MpO1xuXG4gICAgICAgIGdyaWQuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgaWYgKHRoaXMuY29sdW1uTGF5b3V0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5jb2x1bW5zLmZpbHRlcih4ID0+IHguY29sdW1uTGF5b3V0KS5mb3JFYWNoKCB4ID0+IHgucG9wdWxhdGVWaXNpYmxlSW5kZXhlcygpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdyaWQuZmlsdGVyaW5nU2VydmljZS5yZWZyZXNoRXhwcmVzc2lvbnMoKTtcbiAgICAgICAgdGhpcy5ncmlkLnJlZnJlc2hTZWFyY2godHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIHRvcCBsZXZlbCBwYXJlbnQgY29sdW1uLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdG9wTGV2ZWxQYXJlbnQgPSAgdGhpcy5jb2x1bW4udG9wTGV2ZWxQYXJlbnQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCB0b3BMZXZlbFBhcmVudCgpIHtcbiAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMucGFyZW50O1xuICAgICAgICB3aGlsZSAocGFyZW50ICYmIHBhcmVudC5wYXJlbnQpIHtcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNoZWNrKCkge1xuICAgICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBoZWFkZXIgb2YgdGhlIGNvbHVtbi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNvbHVtbiA9IHRoaXMuZ3JpZC5jb2x1bW5MaXN0LmZpbHRlcihjID0+IGMuZmllbGQgPT09ICdJRCcpWzBdO1xuICAgICAqIGxldCBoZWFkZXJDZWxsID0gY29sdW1uLmhlYWRlckNlbGw7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBoZWFkZXJDZWxsKCk6IElneEdyaWRIZWFkZXJDb21wb25lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmhlYWRlckNlbGxMaXN0LmZpbmQoKGhlYWRlcikgPT4gaGVhZGVyLmNvbHVtbiA9PT0gdGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBmaWx0ZXIgY2VsbCBvZiB0aGUgY29sdW1uLlxuICAgICogYGBgdHlwZXNjcmlwdFxuICAgICogbGV0IGNvbHVtbiA9IHRoaXMuZ3JpZC5jb2x1bW5MaXN0LmZpbHRlcihjID0+IGMuZmllbGQgPT09ICdJRCcpWzBdO1xuICAgICogbGV0IGZpbHRlcmVsbCA9IGNvbHVtbi5maWx0ZXJlbGw7XG4gICAgKiBgYGBcbiAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAqL1xuICAgIGdldCBmaWx0ZXJDZWxsKCk6IElneEdyaWRGaWx0ZXJpbmdDZWxsQ29tcG9uZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5maWx0ZXJDZWxsTGlzdC5maW5kKChmaWx0ZXJDZWxsKSA9PiBmaWx0ZXJDZWxsLmNvbHVtbiA9PT0gdGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgaGVhZGVyIGdyb3VwIG9mIHRoZSBjb2x1bW4uXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBoZWFkZXJHcm91cCgpOiBJZ3hHcmlkSGVhZGVyR3JvdXBDb21wb25lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmhlYWRlckdyb3Vwc0xpc3QuZmluZCgoaGVhZGVyR3JvdXApID0+IGhlYWRlckdyb3VwLmNvbHVtbiA9PT0gdGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXV0b3NpemUgdGhlIGNvbHVtbiB0byB0aGUgbG9uZ2VzdCBjdXJyZW50bHkgdmlzaWJsZSBjZWxsIHZhbHVlLCBpbmNsdWRpbmcgdGhlIGhlYWRlciBjZWxsLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKCdncmlkJykgZ3JpZDogSWd4R3JpZENvbXBvbmVudDtcbiAgICAgKlxuICAgICAqIGxldCBjb2x1bW4gPSB0aGlzLmdyaWQuY29sdW1uTGlzdC5maWx0ZXIoYyA9PiBjLmZpZWxkID09PSAnSUQnKVswXTtcbiAgICAgKiBjb2x1bW4uYXV0b3NpemUoKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGF1dG9zaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuY29sdW1uR3JvdXApIHtcblxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZ2V0TGFyZ2VzdENlbGxXaWR0aCgpO1xuXG4gICAgICAgICAgICB0aGlzLmdyaWQubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICB0aGlzLmdyaWQucmVmbG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldENhbGNXaWR0aCgpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy5fY2FsY1dpZHRoICE9PSBudWxsICYmICFpc05hTih0aGlzLmNhbGNQaXhlbFdpZHRoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGNXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlQ2FsY1dpZHRoKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWxjV2lkdGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIFJldHVybnMgdGhlIHNpemUgKGluIHBpeGVscykgb2YgdGhlIGxvbmdlc3QgY3VycmVudGx5IHZpc2libGUgY2VsbCwgaW5jbHVkaW5nIHRoZSBoZWFkZXIgY2VsbC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogQFZpZXdDaGlsZCgnZ3JpZCcpIGdyaWQ6IElneEdyaWRDb21wb25lbnQ7XG4gICAgICpcbiAgICAgKiBsZXQgY29sdW1uID0gdGhpcy5ncmlkLmNvbHVtbkxpc3QuZmlsdGVyKGMgPT4gYy5maWVsZCA9PT0gJ0lEJylbMF07XG4gICAgICogbGV0IHNpemUgPSBjb2x1bW4uZ2V0TGFyZ2VzdENlbGxXaWR0aCgpO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0TGFyZ2VzdENlbGxXaWR0aCgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCByYW5nZSA9IHRoaXMuZ3JpZC5kb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgICAgICBjb25zdCBsYXJnZXN0ID0gbmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKTtcblxuICAgICAgICBpZiAodGhpcy5jZWxscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgY2VsbHNDb250ZW50V2lkdGhzID0gW107XG4gICAgICAgICAgICBpZiAodGhpcy5jZWxsc1swXS5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxzLmZvckVhY2goKGNlbGwpID0+IGNlbGxzQ29udGVudFdpZHRocy5wdXNoKGNlbGwuY2FsY3VsYXRlU2l6ZVRvRml0KHJhbmdlKSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZWxsc0NvbnRlbnRXaWR0aHMgPSB0aGlzLmNlbGxzLm1hcCgoY2VsbCkgPT4gZ2V0Tm9kZVNpemVWaWFSYW5nZShyYW5nZSwgY2VsbC5uYXRpdmVFbGVtZW50KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2VsbHNDb250ZW50V2lkdGhzLmluZGV4T2YoTWF0aC5tYXgoLi4uY2VsbHNDb250ZW50V2lkdGhzKSk7XG4gICAgICAgICAgICBjb25zdCBjZWxsU3R5bGUgPSB0aGlzLmdyaWQuZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNlbGxzW2luZGV4XS5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxQYWRkaW5nID0gcGFyc2VGbG9hdChjZWxsU3R5bGUucGFkZGluZ0xlZnQpICsgcGFyc2VGbG9hdChjZWxsU3R5bGUucGFkZGluZ1JpZ2h0KSArXG4gICAgICAgICAgICAgICAgcGFyc2VGbG9hdChjZWxsU3R5bGUuYm9yZGVyUmlnaHRXaWR0aCk7XG5cbiAgICAgICAgICAgIGxhcmdlc3Quc2V0KE1hdGgubWF4KC4uLmNlbGxzQ29udGVudFdpZHRocyksIGNlbGxQYWRkaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhlYWRlckNlbGwpIHtcbiAgICAgICAgICAgIGxldCBoZWFkZXJDZWxsO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGVhZGVyVGVtcGxhdGUgJiYgdGhpcy5oZWFkZXJDZWxsLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyQ2VsbCA9IE1hdGgubWF4KC4uLkFycmF5LmZyb20odGhpcy5oZWFkZXJDZWxsLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5jaGlsZHJlbilcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoY2hpbGQpID0+IGdldE5vZGVTaXplVmlhUmFuZ2UocmFuZ2UsIGNoaWxkKSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJDZWxsID0gZ2V0Tm9kZVNpemVWaWFSYW5nZShyYW5nZSwgdGhpcy5oZWFkZXJDZWxsLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNvcnRhYmxlIHx8IHRoaXMuZmlsdGVyYWJsZSkge1xuICAgICAgICAgICAgICAgIGhlYWRlckNlbGwgKz0gdGhpcy5oZWFkZXJDZWxsLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlblsxXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaGVhZGVyU3R5bGUgPSB0aGlzLmdyaWQuZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmhlYWRlckNlbGwuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlclBhZGRpbmcgPSBwYXJzZUZsb2F0KGhlYWRlclN0eWxlLnBhZGRpbmdMZWZ0KSArIHBhcnNlRmxvYXQoaGVhZGVyU3R5bGUucGFkZGluZ1JpZ2h0KSArXG4gICAgICAgICAgICAgICAgcGFyc2VGbG9hdChoZWFkZXJTdHlsZS5ib3JkZXJSaWdodFdpZHRoKTtcbiAgICAgICAgICAgIGxhcmdlc3Quc2V0KGhlYWRlckNlbGwsIGhlYWRlclBhZGRpbmcpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsYXJnZXN0Q2VsbCA9IE1hdGgubWF4KC4uLkFycmF5LmZyb20obGFyZ2VzdC5rZXlzKCkpKTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBNYXRoLmNlaWwobGFyZ2VzdENlbGwgKyBsYXJnZXN0LmdldChsYXJnZXN0Q2VsbCkpO1xuXG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4od2lkdGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB3aWR0aCArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Q2VsbFdpZHRoKCkge1xuICAgICAgICBjb25zdCBjb2xXaWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgIGNvbnN0IGlzUGVyY2VudGFnZVdpZHRoID0gY29sV2lkdGggJiYgdHlwZW9mIGNvbFdpZHRoID09PSAnc3RyaW5nJyAmJiBjb2xXaWR0aC5pbmRleE9mKCclJykgIT09IC0xO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbHVtbkxheW91dENoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29sV2lkdGggJiYgIWlzUGVyY2VudGFnZVdpZHRoKSB7XG5cbiAgICAgICAgICAgIGxldCBjZWxsV2lkdGggPSBjb2xXaWR0aDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2VsbFdpZHRoICE9PSAnc3RyaW5nJyB8fCBjZWxsV2lkdGguZW5kc1dpdGgoJ3B4JykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY2VsbFdpZHRoICs9ICdweCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjZWxsV2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY29sV2lkdGg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNhY2hlQ2FsY1dpZHRoKCk6IGFueSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWRBUEkuZ3JpZDtcbiAgICAgICAgY29uc3QgY29sV2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICBjb25zdCBpc1BlcmNlbnRhZ2VXaWR0aCA9IGNvbFdpZHRoICYmIHR5cGVvZiBjb2xXaWR0aCA9PT0gJ3N0cmluZycgJiYgY29sV2lkdGguaW5kZXhPZignJScpICE9PSAtMTtcbiAgICAgICAgaWYgKGlzUGVyY2VudGFnZVdpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWxjV2lkdGggPSBwYXJzZUludChjb2xXaWR0aCwgMTApIC8gMTAwICogKGdyaWQuY2FsY1dpZHRoIC0gZ3JpZC5mZWF0dXJlQ29sdW1uc1dpZHRoKTtcbiAgICAgICAgfSBlbHNlIGlmICghY29sV2lkdGgpIHtcbiAgICAgICAgICAgIC8vIG5vIHdpZHRoXG4gICAgICAgICAgICB0aGlzLl9jYWxjV2lkdGggPSB0aGlzLmRlZmF1bHRXaWR0aCB8fCBncmlkLmdldFBvc3NpYmxlQ29sdW1uV2lkdGgoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGNXaWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWxjUGl4ZWxXaWR0aCA9IHBhcnNlSW50KHRoaXMuX2NhbGNXaWR0aCwgMTApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcG9wdWxhdGVWaXNpYmxlSW5kZXhlcygpIHsgfVxufVxuXG5cbkBDb21wb25lbnQoe1xuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogSWd4Q29sdW1uQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJZ3hDb2x1bW5Hcm91cENvbXBvbmVudCkgfV0sXG4gICAgc2VsZWN0b3I6ICdpZ3gtY29sdW1uLWdyb3VwJyxcbiAgICB0ZW1wbGF0ZTogYGBcbn0pXG5leHBvcnQgY2xhc3MgSWd4Q29sdW1uR3JvdXBDb21wb25lbnQgZXh0ZW5kcyBJZ3hDb2x1bW5Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oSWd4Q29sdW1uQ29tcG9uZW50LCB7IHJlYWQ6IElneENvbHVtbkNvbXBvbmVudCB9KVxuICAgIGNoaWxkcmVuID0gbmV3IFF1ZXJ5TGlzdDxJZ3hDb2x1bW5Db21wb25lbnQ+KCk7XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY29sdW1uIGdyb3VwIGBzdW1tYXJpZXNgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY29sdW1uR3JvdXBTdW1tYXJpZXMgPSB0aGlzLmNvbHVtbkdyb3VwLnN1bW1hcmllcztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uR3JvdXBDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgc3VtbWFyaWVzKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdW1tYXJpZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGNvbHVtbiBncm91cCBgc3VtbWFyaWVzYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jb2x1bW5Hcm91cC5zdW1tYXJpZXMgPSBJZ3hOdW1iZXJTdW1tYXJ5T3BlcmFuZDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uR3JvdXBDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHN1bW1hcmllcyhjbGFzc1JlZjogYW55KSB7IH1cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgd2hldGhlciB0aGUgY29sdW1uIGdyb3VwIGlzIGBzZWFyY2hhYmxlYC5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGB0cnVlYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzU2VhcmNoYWJsZSA9ICB0aGlzLmNvbHVtbkdyb3VwLnNlYXJjaGFibGU7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWNvbHVtbi1ncm91cCBbc2VhcmNoYWJsZV0gPSBcImZhbHNlXCI+PC9pZ3gtY29sdW1uLWdyb3VwPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Hcm91cENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNlYXJjaGFibGUgPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNvbHVtbiBncm91cCBgZmlsdGVyc2AuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bW5Hcm91cEZpbHRlcnMgPSB0aGlzLmNvbHVtbkdyb3VwLmZpbHRlcnM7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkdyb3VwQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGZpbHRlcnMoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlcnM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGNvbHVtbiBncm91cCBgZmlsdGVyc2AuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuY29sdW1uR3JvdXAuZmlsdGVycyA9IElneFN0cmluZ0ZpbHRlcmluZ09wZXJhbmQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkdyb3VwQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHNldCBmaWx0ZXJzKGNsYXNzUmVmOiBhbnkpIHsgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgYm9keSB0ZW1wbGF0ZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGJvZHlUZW1wbGF0ZSA9IHRoaXMuY29sdW1uR3JvdXAuYm9keVRlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Hcm91cENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBib2R5VGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib2R5VGVtcGxhdGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBzZXQgYm9keVRlbXBsYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGlubGluZSBlZGl0b3IgdGVtcGxhdGUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpbmxpbmVFZGl0b3JUZW1wbGF0ZSA9IHRoaXMuY29sdW1uR3JvdXAuaW5saW5lRWRpdG9yVGVtcGxhdGU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkdyb3VwQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGlubGluZUVkaXRvclRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5saW5lRWRpdG9yVGVtcGxhdGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBzZXQgaW5saW5lRWRpdG9yVGVtcGxhdGUodGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNvbHVtbiBncm91cCBjZWxscy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNvbHVtbkNlbGxzID0gdGhpcy5jb2x1bW5Hcm91cC5jZWxscztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uR3JvdXBDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgY2VsbHMoKTogSWd4R3JpZENlbGxDb21wb25lbnRbXSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIHRoZSBjb2x1bW4gZ3JvdXAgaXMgaGlkZGVuLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNIaWRkZW4gPSB0aGlzLmNvbHVtbkdyb3VwLmhpZGRlbjtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uR3JvdXBDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBoaWRkZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsbENoaWxkcmVuLmV2ZXJ5KGMgPT4gYy5oaWRkZW4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjb2x1bW4gZ3JvdXAgaGlkZGVuIHByb3BlcnR5LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiA8aWd4LWNvbHVtbiBbaGlkZGVuXSA9IFwidHJ1ZVwiPjwvaWd4LWNvbHVtbj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uR3JvdXBDb21wb25lbnRcbiAgICAgKi9cbiAgICBzZXQgaGlkZGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2hpZGRlbiA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQuaGlkZGVuID0gdmFsdWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICBAQ29udGVudENoaWxkcmVuIHdpdGggZGVzY2VuZGFudHMgc3RpbGwgcmV0dXJucyB0aGUgYHBhcmVudGBcbiAgICAgICAgICAgIGNvbXBvbmVudCBpbiB0aGUgcXVlcnkgbGlzdC5cbiAgICAgICAgKi9cbiAgICAgICAgaWYgKHRoaXMuaGVhZFRlbXBsYXRlICYmIHRoaXMuaGVhZFRlbXBsYXRlLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5faGVhZGVyVGVtcGxhdGUgPSB0aGlzLmhlYWRUZW1wbGF0ZS50b0FycmF5KClbMF0udGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGlsZHJlbi5yZXNldCh0aGlzLmNoaWxkcmVuLnRvQXJyYXkoKS5zbGljZSgxKSk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2hpbGRyZW4gY29sdW1ucyBjb2xsZWN0aW9uLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY29sdW1ucyA9ICB0aGlzLmNvbHVtbkdyb3VwLmFsbENoaWxkcmVuO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Hcm91cENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBhbGxDaGlsZHJlbigpOiBJZ3hDb2x1bW5Db21wb25lbnRbXSB7XG4gICAgICAgIHJldHVybiBmbGF0dGVuKHRoaXMuY2hpbGRyZW4udG9BcnJheSgpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGUgY29sdW1uIGlzIGEgYENvbHVtbkdyb3VwYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzQ29sdW1uR3JvdXAgPSAgdGhpcy5jb2x1bW5Hcm91cC5jb2x1bW5Hcm91cFxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Hcm91cENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBjb2x1bW5Hcm91cCgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhlIGNvbHVtbiBpcyBhIGBDb2x1bW5MYXlvdXRgIGZvciBtdWx0aS1yb3cgbGF5b3V0LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY29sdW1uR3JvdXAgPSAgdGhpcy5jb2x1bW4uY29sdW1uR3JvdXA7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBjb2x1bW5MYXlvdXQoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgd2lkdGggb2YgdGhlIGNvbHVtbiBncm91cC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNvbHVtbkdyb3VwV2lkdGggPSB0aGlzLmNvbHVtbkdyb3VwLndpZHRoO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Hcm91cENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCB3aWR0aCgpIHtcbiAgICAgICAgbGV0IGlzQ2hpbGRyZW5XaWR0aEluUGVyY2VudCA9IGZhbHNlLCB3aWR0aDtcbiAgICAgICAgd2lkdGggPSBgJHt0aGlzLmNoaWxkcmVuLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWwuaGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsLndpZHRoID09PSAnc3RyaW5nJyAmJiB2YWwud2lkdGguaW5kZXhPZignJScpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgIGlzQ2hpbGRyZW5XaWR0aEluUGVyY2VudCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjICsgcGFyc2VJbnQodmFsLndpZHRoLCAxMCk7XG4gICAgICAgIH0sIDApfWA7XG4gICAgICAgIHJldHVybiBpc0NoaWxkcmVuV2lkdGhJblBlcmNlbnQgPyB3aWR0aCArICclJyA6IHdpZHRoO1xuICAgIH1cblxuICAgIHNldCB3aWR0aCh2YWwpIHsgfVxuXG4gICAgY29uc3RydWN0b3IocHVibGljIGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPiwgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgLy8gRC5QLiBjb25zdHJ1Y3RvciBkdXBsaWNhdGlvbiBkdWUgdG8gZXM2IGNvbXBpbGF0aW9uLCBtaWdodCBiZSBvYnNvbGV0ZSBpbiB0aGUgZnV0dXJlXG4gICAgICAgIHN1cGVyKGdyaWRBUEksIGNkcik7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IElneENvbHVtbkNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSWd4Q29sdW1uTGF5b3V0Q29tcG9uZW50KSB9XSxcbiAgICBzZWxlY3RvcjogJ2lneC1jb2x1bW4tbGF5b3V0JyxcbiAgICB0ZW1wbGF0ZTogYGBcbn0pXG5leHBvcnQgY2xhc3MgSWd4Q29sdW1uTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgSWd4Q29sdW1uR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgICBwdWJsaWMgY2hpbGRyZW5WaXNpYmxlSW5kZXhlcyA9IFtdO1xuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHdpZHRoIG9mIHRoZSBjb2x1bW4gbGF5b3V0LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY29sdW1uR3JvdXBXaWR0aCA9IHRoaXMuY29sdW1uR3JvdXAud2lkdGg7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkdyb3VwQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IHdpZHRoKCk6IGFueSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRGaWxsZWRDaGlsZENvbHVtblNpemVzKHRoaXMuY2hpbGRyZW4pLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYyArIHBhcnNlSW50KHZhbCwgMTApLCAwKTtcbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cblxuICAgIHNldCB3aWR0aCh2YWw6IGFueSkgeyB9XG5cbiAgICBnZXQgY29sdW1uTGF5b3V0KCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldENhbGNXaWR0aCgpOiBhbnkge1xuICAgICAgICBsZXQgYm9yZGVyV2lkdGggPSAwO1xuXG4gICAgICAgIGlmICh0aGlzLmhlYWRlckdyb3VwICYmIHRoaXMuaGVhZGVyR3JvdXAuaGFzTGFzdFBpbm5lZENoaWxkQ29sdW1uKSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJTdHlsZXMgPSB0aGlzLmdyaWQuZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmhlYWRlckdyb3VwLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICBib3JkZXJXaWR0aCA9IHBhcnNlSW50KGhlYWRlclN0eWxlcy5ib3JkZXJSaWdodFdpZHRoLCAxMCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0Q2FsY1dpZHRoKCkgKyBib3JkZXJXaWR0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjb2x1bW4gdmlzaWJsZSBpbmRleC5cbiAgICAgKiBJZiB0aGUgY29sdW1uIGlzIG5vdCB2aXNpYmxlLCByZXR1cm5zIGAtMWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB2aXNpYmxlQ29sdW1uSW5kZXggPSAgdGhpcy5jb2x1bW4udmlzaWJsZUluZGV4O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Db21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgdmlzaWJsZUluZGV4KCk6IG51bWJlciB7XG4gICAgICAgIGlmICghaXNOYU4odGhpcy5fdkluZGV4KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVucGlubmVkQ29sdW1ucyA9IHRoaXMuZ3JpZC51bnBpbm5lZENvbHVtbnMuZmlsdGVyKGMgPT4gYy5jb2x1bW5MYXlvdXQgJiYgIWMuaGlkZGVuKTtcbiAgICAgICAgY29uc3QgcGlubmVkQ29sdW1ucyA9IHRoaXMuZ3JpZC5waW5uZWRDb2x1bW5zLmZpbHRlcihjID0+IGMuY29sdW1uTGF5b3V0ICYmICFjLmhpZGRlbik7XG4gICAgICAgIGxldCB2SW5kZXggPSAtMTtcblxuICAgICAgICBpZiAoIXRoaXMucGlubmVkKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleEluQ29sbGVjdGlvbiA9IHVucGlubmVkQ29sdW1ucy5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgICAgdkluZGV4ID0gaW5kZXhJbkNvbGxlY3Rpb24gPT09IC0xID8gLTEgOiBwaW5uZWRDb2x1bW5zLmxlbmd0aCArIGluZGV4SW5Db2xsZWN0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdkluZGV4ID0gcGlubmVkQ29sdW1ucy5pbmRleE9mKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZJbmRleCA9IHZJbmRleDtcbiAgICAgICAgcmV0dXJuIHZJbmRleDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEdldHMgd2hldGhlciB0aGUgY29sdW1uIGxheW91dCBpcyBoaWRkZW4uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc0hpZGRlbiA9IHRoaXMuY29sdW1uR3JvdXAuaGlkZGVuO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5Hcm91cENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGhpZGRlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hpZGRlbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjb2x1bW4gbGF5b3V0IGhpZGRlbiBwcm9wZXJ0eS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogPGlneC1jb2x1bW4tbGF5b3V0IFtoaWRkZW5dID0gXCJ0cnVlXCI+PC9pZ3gtY29sdW1uLT5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uR3JvdXBDb21wb25lbnRcbiAgICAgKi9cbiAgICBzZXQgaGlkZGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2hpZGRlbiA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQuaGlkZGVuID0gdmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5ncmlkICYmIHRoaXMuZ3JpZC5jb2x1bW5zICYmIHRoaXMuZ3JpZC5jb2x1bW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIHJlc2V0IGluZGV4ZXMgaW4gY2FzZSBjb2x1bW5zIGFyZSBoaWRkZW4vc2hvd24gcnVudGltZVxuICAgICAgICAgICAgdGhpcy5ncmlkLmNvbHVtbnMuZmlsdGVyKHggPT4geC5jb2x1bW5Hcm91cCkuZm9yRWFjaCggeCA9PiB4LnBvcHVsYXRlVmlzaWJsZUluZGV4ZXMoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAqL1xuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgc3VwZXIubmdBZnRlckNvbnRlbnRJbml0KCk7XG4gICAgICAgIGlmICghdGhpcy5oaWRkZW4pIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZGVuID0gdGhpcy5hbGxDaGlsZHJlbi5zb21lKHggPT4geC5oaWRkZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLmhpZGRlbiA9IHRoaXMuaGlkZGVuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBjaGlsZC5kaXNhYmxlSGlkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNoaWxkLmRpc2FibGVQaW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNoaWxkLm1vdmFibGUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBHZXRzIHdoZXRoZXIgdGhlIGdyb3VwIGNvbnRhaW5zIHRoZSBsYXN0IHBpbm5lZCBjaGlsZCBjb2x1bW4gb2YgdGhlIGNvbHVtbiBsYXlvdXQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bXNIYXNMYXN0UGlubmVkID0gdGhpcy5jb2x1bW5MYXlvdXQuaGFzTGFzdFBpbm5lZENoaWxkQ29sdW1uO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5MYXlvdXRDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgaGFzTGFzdFBpbm5lZENoaWxkQ29sdW1uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5zb21lKGNoaWxkID0+IGNoaWxkLmlzTGFzdFBpbm5lZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgKi9cbiAgICBwdWJsaWMgcG9wdWxhdGVWaXNpYmxlSW5kZXhlcygpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlblZpc2libGVJbmRleGVzID0gW107XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWRBUEkuZ3JpZDtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IGdyaWQgJiYgZ3JpZC5waW5uZWRDb2x1bW5zICYmIGdyaWQudW5waW5uZWRDb2x1bW5zID8gZ3JpZC5waW5uZWRDb2x1bW5zLmNvbmNhdChncmlkLnVucGlubmVkQ29sdW1ucykgOiBbXTtcbiAgICAgICAgY29uc3Qgb3JkZXJlZENvbHMgPSBjb2x1bW5zXG4gICAgICAgIC5maWx0ZXIoeCA9PiAheC5jb2x1bW5Hcm91cCAmJiAheC5oaWRkZW4pXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnJvd1N0YXJ0IC0gYi5yb3dTdGFydCB8fCBjb2x1bW5zLmluZGV4T2YoYS5wYXJlbnQpIC0gY29sdW1ucy5pbmRleE9mKGIucGFyZW50KSB8fCBhLmNvbFN0YXJ0IC0gYi5jb2xTdGFydCk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBycyA9IGNoaWxkLnJvd1N0YXJ0IHx8IDE7XG4gICAgICAgICAgICBsZXQgdkluZGV4ID0gMDtcbiAgICAgICAgICAgIC8vIGZpbHRlciBvdXQgYWxsIGNvbHMgd2l0aCBsYXJnZXIgcm93U3RhcnRcbiAgICAgICAgICAgIGNvbnN0IGNvbHMgPSBvcmRlcmVkQ29scy5maWx0ZXIoYyA9PlxuICAgICAgICAgICAgICAgICFjLmNvbHVtbkdyb3VwICYmIChjLnJvd1N0YXJ0IHx8IDEpIDw9IHJzKTtcbiAgICAgICAgICAgIHZJbmRleCA9IGNvbHMuaW5kZXhPZihjaGlsZCk7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuVmlzaWJsZUluZGV4ZXMucHVzaCh7Y29sdW1uOiBjaGlsZCwgaW5kZXg6IHZJbmRleH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==