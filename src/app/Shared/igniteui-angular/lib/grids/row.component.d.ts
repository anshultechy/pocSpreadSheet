import { ChangeDetectorRef, DoCheck, ElementRef, QueryList } from '@angular/core';
import { IgxCheckboxComponent } from '../checkbox/checkbox.component';
import { IgxSelectionAPIService } from '../core/selection';
import { IgxGridForOfDirective } from '../directives/for-of/for_of.directive';
import { GridBaseAPIService } from './api.service';
import { IgxGridCellComponent } from './cell.component';
import { IgxColumnComponent } from './column.component';
import { IgxGridBaseComponent, IGridDataBindable } from './grid-base.component';
import { IgxGridSelectionService, IgxGridCRUDService } from '../core/grid-selection';
export declare class IgxRowComponent<T extends IgxGridBaseComponent & IGridDataBindable> implements DoCheck {
    gridAPI: GridBaseAPIService<T>;
    crudService: IgxGridCRUDService;
    selectionService: IgxGridSelectionService;
    private selection;
    element: ElementRef;
    cdr: ChangeDetectorRef;
    private _rowData;
    /**
     *  The data passed to the row component.
     *
     * ```typescript
     * // get the row data for the first selected row
     * let selectedRowData = this.grid.selectedRows[0].rowData;
     * ```
     */
    rowData: any;
    /**
     * The index of the row.
     *
     * ```typescript
     * // get the index of the second selected row
     * let selectedRowIndex = this.grid.selectedRows[1].index;
     * ```
     */
    index: number;
    /**
     * @hidden
     */
    gridID: string;
    /**
     * @hidden
     */
    virtDirRow: IgxGridForOfDirective<any>;
    /**
     * @hidden
     */
    checkboxElement: IgxCheckboxComponent;
    /**
     * The rendered cells in the row component.
     *
     * ```typescript
     * // get the cells of the third selected row
     * let selectedRowCells = this.grid.selectedRows[2].cells;
     * ```
     */
    cells: QueryList<IgxGridCellComponent>;
    /**
     * @hidden
     */
    role: string;
    readonly dataRowIndex: number;
    /**
     * @hidden
     */
    readonly styleClasses: string;
    /**
     * @hidden
     */
    readonly columns: IgxColumnComponent[];
    /**
     * @hidden
     */
    readonly pinnedColumns: IgxColumnComponent[];
    /**
     * @hidden
     */
    readonly unpinnedColumns: IgxColumnComponent[];
    /**
     * @hidden
     */
    readonly rowSelectable: boolean;
    /**
     * @hidden
     */
    readonly showRowCheckboxes: boolean;
    /**
     * @hidden
     */
    isSelected: boolean;
    /** @hidden */
    readonly dirty: boolean;
    /**
     * @hidden
     */
    readonly rowDraggable: boolean;
    /** @hidden */
    readonly added: boolean;
    /** @hidden */
    readonly deleted: boolean;
    /**
     * @hidden
     */
    dragging: boolean;
    readonly inEditMode: boolean;
    /**
     * Get a reference to the grid that contains the selected row.
     *
     * ```typescript
     * handleRowSelection(event) {
     *  // the grid on which the onRowSelectionChange event was triggered
     *  const grid = event.row.grid;
     * }
     * ```
     *
     * ```html
     *  <igx-grid
     *    [data]="data"
     *    (onRowSelectionChange)="handleRowSelection($event)">
     *  </igx-grid>
     * ```
     */
    readonly grid: T;
    /**
     * Gets the ID of the row.
     * A row in the grid is identified either by:
     * - primaryKey data value,
     * - the whole rowData, if the primaryKey is omitted.
     *
     * ```typescript
     * let rowID = this.grid.selectedRows[2].rowID;
     * ```
     */
    readonly rowID: any;
    /**
     * The native DOM element representing the row. Could be null in certain environments.
     *
     * ```typescript
     * // get the nativeElement of the second selected row
     * let selectedRowNativeElement = this.grid.selectedRows[1].nativeElement;
     * ```
     */
    readonly nativeElement: any;
    /**
     * @hidden
     */
    focused: boolean;
    /**
     * @hidden
     * @internal
     */
    defaultCssClass: string;
    /**
     * @hidden
     */
    protected _rowSelection: boolean;
    constructor(gridAPI: GridBaseAPIService<T>, crudService: IgxGridCRUDService, selectionService: IgxGridSelectionService, selection: IgxSelectionAPIService, element: ElementRef, cdr: ChangeDetectorRef);
    /**
     * @hidden
     */
    onCheckboxClick(event: any): void;
    /**
     * Updates the specified row object and the data source record with the passed value.
     * This method emits `onEditDone` event.
     *
     * ```typescript
     * // update the second selected row's value
     * let newValue = "Apple";
     * this.grid.selectedRows[1].update(newValue);
     * ```
     */
    update(value: any): void;
    /**
     * Removes the specified row from the grid's data source.
     * This method emits `onRowDeleted` event.
     *
     * ```typescript
     * // delete the third selected row from the grid
     * this.grid.selectedRows[2].delete();
     * ```
     */
    delete(): void;
    /**
     * @hidden
     */
    readonly rowCheckboxAriaLabel: string;
    /**
     * @hidden
     */
    ngDoCheck(): void;
    /**
     * @hidden
     */
    protected resolveClasses(): string;
    /**
     * @hidden
     */
    readonly resolveDragIndicatorClasses: string;
}