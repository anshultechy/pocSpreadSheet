import { Subject } from 'rxjs';
import { ISortingExpression } from '../data-operations/sorting-expression.interface';
import { IgxGridCellComponent } from './cell.component';
import { IgxColumnComponent } from './column.component';
import { IgxGridBaseComponent, IGridDataBindable } from './grid-base.component';
import { IgxRowComponent } from './row.component';
import { IFilteringOperation } from '../data-operations/filtering-condition';
import { IFilteringExpressionsTree } from '../data-operations/filtering-expressions-tree';
import { IgxCell, IgxRow } from '../core/grid-selection';
/**
 *@hidden
 */
export declare class GridBaseAPIService<T extends IgxGridBaseComponent & IGridDataBindable> {
    grid: T;
    protected editCellState: Map<string, any>;
    protected editRowState: Map<string, {
        rowID: any;
        rowIndex: number;
    }>;
    protected destroyMap: Map<string, Subject<boolean>>;
    get_column_by_name(name: string): IgxColumnComponent;
    get_summary_data(): any[];
    /**
     * @hidden
     * @internal
     */
    getRowData(rowID: any): any;
    escape_editMode(): void;
    get_cell_inEditMode(): IgxCell;
    get_row_index_in_data(rowID: any): number;
    get_row_by_key(rowSelector: any): IgxRowComponent<IgxGridBaseComponent & IGridDataBindable>;
    get_row_by_index(rowIndex: number): IgxRowComponent<IgxGridBaseComponent & IGridDataBindable>;
    get_cell_by_key(rowSelector: any, field: string): IgxGridCellComponent;
    get_cell_by_index(rowIndex: number, columnIndex: number): IgxGridCellComponent;
    get_cell_by_visible_index(rowIndex: number, columnIndex: number): IgxGridCellComponent;
    submit_value(): void;
    update_cell(cell: IgxCell, value: any): import("./grid-base.component").IGridEditEventArgs;
    /**
     * Updates related row of provided grid's data source with provided new row value
     * @param grid Grid to update data for
     * @param rowID ID of the row to update
     * @param rowValueInDataSource Initial value of the row as it is in data source
     * @param rowCurrentValue Current value of the row as it is with applied previous transactions
     * @param rowNewValue New value of the row
     */
    protected updateData(grid: any, rowID: any, rowValueInDataSource: any, rowCurrentValue: any, rowNewValue: {
        [x: string]: any;
    }): void;
    _update_row(row: IgxRow, value?: any): void;
    update_row(row: IgxRow, value: any): import("./grid-base.component").IGridEditEventArgs;
    protected update_row_in_array(value: any, rowID: any, index: number): void;
    sort(expression: ISortingExpression): void;
    sort_multiple(expressions: ISortingExpression[]): void;
    filter(fieldName: string, term: any, conditionOrExpressionsTree: IFilteringOperation | IFilteringExpressionsTree, ignoreCase: boolean): void;
    filter_global(term: any, condition: any, ignoreCase: any): void;
    clear_filter(fieldName: string): void;
    clear_sort(fieldName: string): void;
    protected prepare_filtering_expression(filteringState: IFilteringExpressionsTree, fieldName: string, searchVal: any, conditionOrExpressionsTree: IFilteringOperation | IFilteringExpressionsTree, ignoreCase: boolean, insertAtIndex?: number): void;
    protected prepare_sorting_expression(stateCollections: Array<Array<any>>, expression: ISortingExpression): void;
    protected remove_grouping_expression(fieldName: any): void;
    should_apply_number_style(column: IgxColumnComponent): boolean;
    get_data(): any[];
    get_all_data(includeTransactions?: boolean): any[];
    get_filtered_data(): any[];
    protected getSortStrategyPerColumn(fieldName: string): import("../data-operations/sorting-strategy").ISortingStrategy;
    addRowToData(rowData: any): void;
    deleteRowFromData(rowID: any, index: number): void;
    deleteRowById(rowId: any): void;
    get_row_id(rowData: any): any;
    row_deleted_transaction(rowID: any): boolean;
    atInexistingPage(): Boolean;
}
