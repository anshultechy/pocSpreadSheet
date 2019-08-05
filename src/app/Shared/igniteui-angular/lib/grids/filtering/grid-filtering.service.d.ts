import { OnDestroy } from '@angular/core';
import { IgxIconService } from '../../icon/icon.service';
import { FilteringExpressionsTree, IFilteringExpressionsTree } from '../../data-operations/filtering-expressions-tree';
import { IgxGridBaseComponent, IGridDataBindable } from '../grid-base.component';
import { IFilteringExpression, FilteringLogic } from '../../data-operations/filtering-expression.interface';
import { IgxDatePipeComponent } from '../grid.common';
import { IgxColumnComponent } from '../column.component';
import { IFilteringOperation } from '../../data-operations/filtering-condition';
import { GridBaseAPIService } from '../api.service';
/**
 *@hidden
 */
export declare class ExpressionUI {
    expression: IFilteringExpression;
    beforeOperator: FilteringLogic;
    afterOperator: FilteringLogic;
    isSelected: boolean;
    isVisible: boolean;
}
/**
 *@hidden
 */
export declare class IgxFilteringService implements OnDestroy {
    private gridAPI;
    private iconService;
    private columnsWithComplexFilter;
    private areEventsSubscribed;
    private destroy$;
    private isFiltering;
    private columnToExpressionsMap;
    private _datePipe;
    private columnStartIndex;
    gridId: string;
    isFilterRowVisible: boolean;
    filteredColumn: IgxColumnComponent;
    selectedExpression: IFilteringExpression;
    columnToFocus: IgxColumnComponent;
    shouldFocusNext: boolean;
    columnToMoreIconHidden: Map<string, boolean>;
    grid: IgxGridBaseComponent;
    constructor(gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>, iconService: IgxIconService);
    ngOnDestroy(): void;
    readonly displayContainerWidth: number;
    readonly displayContainerScrollLeft: number;
    readonly areAllColumnsInView: boolean;
    readonly unpinnedFilterableColumns: IgxColumnComponent[];
    readonly unpinnedColumns: IgxColumnComponent[];
    readonly datePipe: IgxDatePipeComponent;
    /**
     * Subscribe to grid's events.
     */
    subscribeToEvents(): void;
    /**
     * Internal method to create expressionsTree and filter grid used in both filter modes.
     */
    filterInternal(field: string, expressions?: FilteringExpressionsTree | Array<ExpressionUI>): void;
    /**
     * Execute filtering on the grid.
     */
    filter(field: string, value: any, conditionOrExpressionTree?: IFilteringOperation | IFilteringExpressionsTree, ignoreCase?: boolean): void;
    /**
     * Clear the filter of a given column.
     */
    clearFilter(field: string): void;
    /**
     * Filters all the `IgxColumnComponent` in the `IgxGridComponent` with the same condition.
     */
    filterGlobal(value: any, condition: any, ignoreCase?: any): void;
    /**
     * Register filtering SVG icons in the icon service.
     */
    registerSVGIcons(): void;
    /**
     * Returns the ExpressionUI array for a given column.
     */
    getExpressions(columnId: string): ExpressionUI[];
    /**
     * Recreates all ExpressionUIs for all columns. Executed after filtering to refresh the cache.
     */
    refreshExpressions(): void;
    /**
     * Remove an ExpressionUI for a given column.
     */
    removeExpression(columnId: string, indexToRemove: number): void;
    /**
     * Generate filtering tree for a given column from existing ExpressionUIs.
     */
    createSimpleFilteringTree(columnId: string, expressionUIList?: any): FilteringExpressionsTree;
    /**
     * Returns whether a complex filter is applied to a given column.
     */
    isFilterComplex(columnId: string): boolean;
    /**
     * Returns the string representation of the FilteringLogic operator.
     */
    getOperatorAsString(operator: FilteringLogic): any;
    /**
     * Generate the label of a chip from a given filtering expression.
     */
    getChipLabel(expression: IFilteringExpression): any;
    /**
     * Updates the content of a filterCell.
     */
    updateFilteringCell(column: IgxColumnComponent): void;
    /**
     * Focus a chip in a filterCell.
     */
    focusFilterCellChip(column: IgxColumnComponent, focusFirst: boolean): void;
    /**
     * Focus the close button in the filtering row.
     */
    focusFilterRowCloseButton(): void;
    readonly filteredData: any[];
    /**
     * Scrolls to a filterCell.
     */
    scrollToFilterCell(column: IgxColumnComponent, shouldFocusNext: boolean): void;
    private isFilteringTreeComplex;
    private getChildAndOperatorsCount;
    generateExpressionsList(expressions: IFilteringExpressionsTree | IFilteringExpression, operator: FilteringLogic, expressionsUIs: ExpressionUI[]): void;
    private generateExpressionsListRecursive;
    isFilteringExpressionsTreeEmpty(): boolean;
}
