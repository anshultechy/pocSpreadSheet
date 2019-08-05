/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, HostBinding, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IgxCheckboxComponent } from '../checkbox/checkbox.component';
import { IgxSelectionAPIService } from '../core/selection';
import { IgxGridForOfDirective } from '../directives/for-of/for_of.directive';
import { GridBaseAPIService } from './api.service';
import { IgxGridCellComponent } from './cell.component';
import { TransactionType } from '../services';
import { IgxGridSelectionService, IgxGridCRUDService, IgxRow } from '../core/grid-selection';
/**
 * @template T
 */
export class IgxRowComponent {
    /**
     * @param {?} gridAPI
     * @param {?} crudService
     * @param {?} selectionService
     * @param {?} selection
     * @param {?} element
     * @param {?} cdr
     */
    constructor(gridAPI, crudService, selectionService, selection, element, cdr) {
        this.gridAPI = gridAPI;
        this.crudService = crudService;
        this.selectionService = selectionService;
        this.selection = selection;
        this.element = element;
        this.cdr = cdr;
        /**
         * @hidden
         */
        this.role = 'row';
        /**
         * @hidden
         */
        this.dragging = false;
        /**
         * @hidden
         */
        this.focused = false;
        /**
         * @hidden
         * \@internal
         */
        this.defaultCssClass = 'igx-grid__tr';
        /**
         * @hidden
         */
        this._rowSelection = false;
    }
    /**
     *  The data passed to the row component.
     *
     * ```typescript
     * // get the row data for the first selected row
     * let selectedRowData = this.grid.selectedRows[0].rowData;
     * ```
     * @return {?}
     */
    get rowData() {
        if (this.inEditMode) {
            return Object.assign({}, this._rowData, this.grid.transactions.getAggregatedValue(this.rowID, false));
        }
        return this._rowData;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set rowData(v) {
        this._rowData = v;
    }
    /**
     * @return {?}
     */
    get dataRowIndex() {
        return this.index;
    }
    /**
     * @hidden
     * @return {?}
     */
    get styleClasses() {
        return this.resolveClasses();
    }
    /**
     * @hidden
     * @return {?}
     */
    get columns() {
        return this.grid.visibleColumns;
    }
    /**
     * @hidden
     * @return {?}
     */
    get pinnedColumns() {
        return this.grid.pinnedColumns;
    }
    /**
     * @hidden
     * @return {?}
     */
    get unpinnedColumns() {
        return this.grid.unpinnedColumns;
    }
    /**
     * @hidden
     * @return {?}
     */
    get rowSelectable() {
        return this.grid.rowSelectable;
    }
    /**
     * @hidden
     * @return {?}
     */
    get showRowCheckboxes() {
        return this.grid.showRowCheckboxes;
    }
    /**
     * @hidden
     * @return {?}
     */
    get dirty() {
        /** @type {?} */
        const row = this.grid.transactions.getState(this.rowID);
        if (row) {
            return row.type === TransactionType.ADD || row.type === TransactionType.UPDATE;
        }
        return false;
    }
    /**
     * @hidden
     * @return {?}
     */
    get rowDraggable() {
        return this.grid.rowDraggable;
    }
    /**
     * @hidden
     * @return {?}
     */
    get added() {
        /** @type {?} */
        const row = this.grid.transactions.getState(this.rowID);
        if (row) {
            return row.type === TransactionType.ADD;
        }
        return false;
    }
    /**
     * @hidden
     * @return {?}
     */
    get deleted() {
        return this.gridAPI.row_deleted_transaction(this.rowID);
    }
    // TODO: Refactor
    /**
     * @return {?}
     */
    get inEditMode() {
        if (this.grid.rowEditable) {
            /** @type {?} */
            const editRowState = this.crudService.row;
            return (editRowState && editRowState.id === this.rowID) || false;
        }
        else {
            return false;
        }
    }
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
     * @return {?}
     */
    get grid() {
        return this.gridAPI.grid;
    }
    /**
     * Gets the ID of the row.
     * A row in the grid is identified either by:
     * - primaryKey data value,
     * - the whole rowData, if the primaryKey is omitted.
     *
     * ```typescript
     * let rowID = this.grid.selectedRows[2].rowID;
     * ```
     * @return {?}
     */
    get rowID() {
        /** @type {?} */
        const primaryKey = this.grid.primaryKey;
        return primaryKey ? this._rowData[primaryKey] : this._rowData;
    }
    /**
     * The native DOM element representing the row. Could be null in certain environments.
     *
     * ```typescript
     * // get the nativeElement of the second selected row
     * let selectedRowNativeElement = this.grid.selectedRows[1].nativeElement;
     * ```
     * @return {?}
     */
    get nativeElement() {
        return this.element.nativeElement;
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onCheckboxClick(event) {
        /** @type {?} */
        const newSelection = (event.checked) ?
            this.selection.add_item(this.gridID, this.rowID) :
            this.selection.delete_item(this.gridID, this.rowID);
        this.grid.triggerRowSelectionChange(newSelection, this, event);
    }
    /**
     * Updates the specified row object and the data source record with the passed value.
     * This method emits `onEditDone` event.
     *
     * ```typescript
     * // update the second selected row's value
     * let newValue = "Apple";
     * this.grid.selectedRows[1].update(newValue);
     * ```
     * @param {?} value
     * @return {?}
     */
    update(value) {
        /** @type {?} */
        const crudService = this.crudService;
        if (crudService.inEditMode && crudService.cell.id.rowID === this.rowID) {
            this.grid.endEdit(false);
        }
        /** @type {?} */
        const row = new IgxRow(this.rowID, this.index, this.rowData);
        this.gridAPI.update_row(row, value);
        this.cdr.markForCheck();
    }
    /**
     * Removes the specified row from the grid's data source.
     * This method emits `onRowDeleted` event.
     *
     * ```typescript
     * // delete the third selected row from the grid
     * this.grid.selectedRows[2].delete();
     * ```
     * @return {?}
     */
    delete() {
        this.grid.deleteRowById(this.rowID);
    }
    /**
     * @hidden
     * @return {?}
     */
    get rowCheckboxAriaLabel() {
        return this.grid.primaryKey ?
            this.isSelected ? 'Deselect row with key ' + this.rowID : 'Select row with key ' + this.rowID :
            this.isSelected ? 'Deselect row' : 'Select row';
    }
    /**
     * @hidden
     * @return {?}
     */
    ngDoCheck() {
        this.isSelected = this.rowSelectable ?
            this.grid.allRowsSelected ? true : this.selection.is_item_selected(this.gridID, this.rowID) :
            this.selection.is_item_selected(this.gridID, this.rowID);
        this.cdr.markForCheck();
        if (this.checkboxElement) {
            this.checkboxElement.checked = this.isSelected;
        }
    }
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    resolveClasses() {
        /** @type {?} */
        const indexClass = this.index % 2 ? this.grid.evenRowCSS : this.grid.oddRowCSS;
        /** @type {?} */
        const selectedClass = this.isSelected ? 'igx-grid__tr--selected' : '';
        /** @type {?} */
        const editClass = this.inEditMode ? 'igx-grid__tr--edit' : '';
        /** @type {?} */
        const dirtyClass = this.dirty ? 'igx-grid__tr--edited' : '';
        /** @type {?} */
        const deletedClass = this.deleted ? 'igx-grid__tr--deleted' : '';
        /** @type {?} */
        const mrlClass = this.grid.hasColumnLayouts ? 'igx-grid__tr--mrl' : '';
        /** @type {?} */
        const dragClass = this.dragging ? 'igx-grid__tr--drag' : '';
        return `${this.defaultCssClass} ${indexClass} ${selectedClass} ${editClass} ${dirtyClass}
         ${deletedClass} ${mrlClass} ${dragClass}`.trim();
    }
    /**
     * @hidden
     * @return {?}
     */
    get resolveDragIndicatorClasses() {
        /** @type {?} */
        const defaultDragIndicatorCssClass = 'igx-grid__drag-indicator';
        /** @type {?} */
        const dragIndicatorOff = this.grid.rowDragging && !this.dragging ? 'igx-grid__drag-indicator--off' : '';
        return `${defaultDragIndicatorCssClass} ${dragIndicatorOff}`;
    }
}
IgxRowComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'igx-row',
                template: "<ng-container *ngIf=\"grid.groupingExpressions.length > 0\">\n    <div class=\"igx-grid__row-indentation igx-grid__row-indentation--level-{{grid.groupingExpressions.length}}\"></div>\n</ng-container>\n<ng-container *ngIf=\"rowDraggable\">\n    <div [class]=\"resolveDragIndicatorClasses\" [igxRowDrag]=\"this\">\n        <ng-container *ngTemplateOutlet=\"this.grid.dragIndicatorIconTemplate ? this.grid.dragIndicatorIconTemplate : this.grid.dragIndicatorIconBase\"></ng-container>\n    </div>\n</ng-container>\n<ng-container *ngIf=\"showRowCheckboxes\">\n    <div class=\"igx-grid__cbx-selection\">\n        <igx-checkbox [checked]=\"isSelected\" [disabled]=\"deleted\" (change)=\"onCheckboxClick($event)\" disableRipple=\"true\" [disableTransitions]=\"grid.disableTransitions\" [aria-label]=\"rowCheckboxAriaLabel\"></igx-checkbox>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"!grid.hasColumnLayouts\">\n    <ng-container *ngIf=\"pinnedColumns.length > 0\">\n        <igx-grid-cell *ngFor=\"let col of pinnedColumns | igxNotGrouped\"\n            class=\"igx-grid__td igx-grid__td--fw igx-grid__td--pinned\"\n            [class.igx-grid__td--number]=\"col.dataType === 'number'\"\n            [ngClass]=\"col.cellClasses | igxCellStyles:rowData[col.field]:rowData:col.field\"\n            [editMode]=\"col.editable && crudService.isInEditMode(index, col.index)\"\n            [column]=\"col\"\n            [formatter]=\"col.formatter\"\n            [row]=\"this\"\n            [lastPinned]=\"col.isLastPinned\"\n            [style.min-height.px]=\"grid.rowHeight || 32\"\n            [rowData]=\"rowData\"\n            [style.min-width.px]=\"col.width\"\n            [style.flex-basis.px]=\"col.width\"\n            [width]=\"col.getCellWidth()\"\n            [visibleColumnIndex]=\"col.visibleIndex\"\n            [value]=\"rowData[col.field]\"\n            [cellTemplate]=\"col.bodyTemplate\">\n        </igx-grid-cell>\n    </ng-container>\n    <ng-template igxGridFor let-col [igxGridForOf]=\"unpinnedColumns | igxNotGrouped\" [igxForScrollContainer]=\"grid.parentVirtDir\" [igxForScrollOrientation]=\"'horizontal'\" [igxForContainerSize]='grid.unpinnedWidth' [igxForSizePropName]='\"calcPixelWidth\"' [igxForTrackBy]='grid.trackColumnChanges' #igxDirRef>\n        <igx-grid-cell\n            class=\"igx-grid__td igx-grid__td--fw\"\n            [class.igx-grid__td--number]=\"col.dataType === 'number'\"\n            [ngClass]=\"col.cellClasses | igxCellStyles:rowData[col.field]:rowData:col.field\"\n            [editMode]=\"col.editable && crudService.isInEditMode(index, col.index)\"\n            [column]=\"col\"\n            [formatter]=\"col.formatter\"\n            [row]=\"this\"\n            [style.min-height.px]=\"grid.rowHeight || 32\"\n            [rowData]=\"rowData\"\n            [style.min-width.px]=\"col.width\"\n            [style.flex-basis.px]=\"col.width\"\n            [width]=\"col.getCellWidth()\"\n            [visibleColumnIndex]=\"col.visibleIndex\"\n            [value]=\"rowData[col.field]\"\n            [cellTemplate]=\"col.bodyTemplate\">\n        </igx-grid-cell>\n    </ng-template>\n</ng-container>\n\n<ng-container *ngIf=\"grid.hasColumnLayouts\">\n    <ng-container *ngIf=\"pinnedColumns.length > 0\">\n        <div *ngFor=\"let col of pinnedColumns | igxTopLevel\" class=\"igx-grid__mrl-block\"\n        [ngClass]=\"{'igx-grid__td--pinned-last': col.hasLastPinnedChildColumn}\"\n        [ngStyle]=\"{'grid-template-rows':col.getGridTemplate(true, false),\n        'grid-template-columns':col.getGridTemplate(false, false),\n        'z-index': col.pinned ? 1 : null,\n        '-ms-grid-rows':col.getGridTemplate(true, true),\n        '-ms-grid-columns':col.getGridTemplate(false, true)}\">\n            <igx-grid-cell *ngFor=\"let child of col.children\"\n                class=\"igx-grid__td igx-grid__td--fw igx-grid__td--pinned\"\n                [class.igx-grid__td--number]=\"child.dataType === 'number'\"\n                [ngClass]=\"child.cellClasses | igxCellStyles:rowData[child.field]:rowData:child.field\"\n                [editMode]=\"child.editable && crudService.isInEditMode(index, child.index)\"\n                [column]=\"child\"\n                [formatter]=\"child.formatter\"\n                [row]=\"this\"\n                [style.min-height.px]=\"grid.rowHeight || 32\"\n                [rowData]=\"rowData\"\n                [visibleColumnIndex]=\"child.visibleIndex\"\n                [value]=\"rowData[child.field]\"\n                [cellTemplate]=\"child.bodyTemplate\"></igx-grid-cell>\n        </div>\n    </ng-container>\n    <ng-template igxGridFor let-col [igxGridForOf]=\"unpinnedColumns | igxTopLevel\" [igxForScrollContainer]=\"grid.parentVirtDir\" let-colIndex=\"index\" [igxForScrollOrientation]=\"'horizontal'\" [igxForContainerSize]='grid.unpinnedWidth' [igxForSizePropName]='\"calcPixelWidth\"' [igxForTrackBy]='grid.trackColumnChanges' #igxDirRef>\n        <div class=\"igx-grid__mrl-block\"\n        [ngStyle]=\"{'grid-template-rows':col.getGridTemplate(true, false),\n     'grid-template-columns':col.getGridTemplate(false, false),\n     '-ms-grid-rows':col.getGridTemplate(true, true),\n     '-ms-grid-columns':col.getGridTemplate(false, true)}\">\n            <igx-grid-cell *ngFor=\"let child of col.children\"\n                class=\"igx-grid__td igx-grid__td--fw\"\n                [class.igx-grid__td--number]=\"child.dataType === 'number'\"\n                [ngClass]=\"child.cellClasses | igxCellStyles:rowData[child.field]:rowData:child.field\"\n                [editMode]=\"child.editable && crudService.isInEditMode(index, child.index)\"\n                [column]=\"child\"\n                [formatter]=\"child.formatter\"\n                [row]=\"this\"\n                [style.min-height.px]=\"grid.rowHeight || 32\"\n                [rowData]=\"rowData\"\n                [visibleColumnIndex]=\"child.visibleIndex\"\n                [value]=\"rowData[child.field]\"\n                [cellTemplate]=\"child.bodyTemplate\"></igx-grid-cell>\n        </div>\n    </ng-template>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
IgxRowComponent.ctorParameters = () => [
    { type: GridBaseAPIService },
    { type: IgxGridCRUDService },
    { type: IgxGridSelectionService },
    { type: IgxSelectionAPIService },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
IgxRowComponent.propDecorators = {
    rowData: [{ type: Input }],
    index: [{ type: Input }],
    gridID: [{ type: Input }],
    virtDirRow: [{ type: ViewChild, args: ['igxDirRef', { read: IgxGridForOfDirective, static: false },] }],
    checkboxElement: [{ type: ViewChild, args: [forwardRef(() => IgxCheckboxComponent), { read: IgxCheckboxComponent, static: false },] }],
    cells: [{ type: ViewChildren, args: [forwardRef(() => IgxGridCellComponent),] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    dataRowIndex: [{ type: HostBinding, args: ['attr.data-rowIndex',] }],
    styleClasses: [{ type: HostBinding, args: ['class',] }],
    isSelected: [{ type: HostBinding, args: ['attr.aria-selected',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxRowComponent.prototype._rowData;
    /**
     * The index of the row.
     *
     * ```typescript
     * // get the index of the second selected row
     * let selectedRowIndex = this.grid.selectedRows[1].index;
     * ```
     * @type {?}
     */
    IgxRowComponent.prototype.index;
    /**
     * @hidden
     * @type {?}
     */
    IgxRowComponent.prototype.gridID;
    /**
     * @hidden
     * @type {?}
     */
    IgxRowComponent.prototype.virtDirRow;
    /**
     * @hidden
     * @type {?}
     */
    IgxRowComponent.prototype.checkboxElement;
    /**
     * The rendered cells in the row component.
     *
     * ```typescript
     * // get the cells of the third selected row
     * let selectedRowCells = this.grid.selectedRows[2].cells;
     * ```
     * @type {?}
     */
    IgxRowComponent.prototype.cells;
    /**
     * @hidden
     * @type {?}
     */
    IgxRowComponent.prototype.role;
    /**
     * @hidden
     * @type {?}
     */
    IgxRowComponent.prototype.isSelected;
    /**
     * @hidden
     * @type {?}
     */
    IgxRowComponent.prototype.dragging;
    /**
     * @hidden
     * @type {?}
     */
    IgxRowComponent.prototype.focused;
    /**
     * @hidden
     * \@internal
     * @type {?}
     */
    IgxRowComponent.prototype.defaultCssClass;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxRowComponent.prototype._rowSelection;
    /** @type {?} */
    IgxRowComponent.prototype.gridAPI;
    /** @type {?} */
    IgxRowComponent.prototype.crudService;
    /** @type {?} */
    IgxRowComponent.prototype.selectionService;
    /**
     * @type {?}
     * @private
     */
    IgxRowComponent.prototype.selection;
    /** @type {?} */
    IgxRowComponent.prototype.element;
    /** @type {?} */
    IgxRowComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUVULFVBQVUsRUFDVixVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFDZixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGVBQWUsRUFBUyxNQUFNLGFBQWEsQ0FBQztBQUVyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFRN0YsTUFBTSxPQUFPLGVBQWU7Ozs7Ozs7OztJQXlPeEIsWUFBbUIsT0FBOEIsRUFDdEMsV0FBK0IsRUFDL0IsZ0JBQXlDLEVBQ3hDLFNBQWlDLEVBQ2xDLE9BQW1CLEVBQ25CLEdBQXNCO1FBTGQsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFDeEMsY0FBUyxHQUFULFNBQVMsQ0FBd0I7UUFDbEMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixRQUFHLEdBQUgsR0FBRyxDQUFtQjs7OztRQTVLMUIsU0FBSSxHQUFHLEtBQUssQ0FBQzs7OztRQTJGYixhQUFRLEdBQUcsS0FBSyxDQUFDOzs7O1FBK0RqQixZQUFPLEdBQUcsS0FBSyxDQUFDOzs7OztRQU1oQixvQkFBZSxHQUFHLGNBQWMsQ0FBQzs7OztRQUs5QixrQkFBYSxHQUFHLEtBQUssQ0FBQztJQU9LLENBQUM7Ozs7Ozs7Ozs7SUFuT3RDLElBQ1csT0FBTztRQUNkLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3pHO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsSUFBVyxPQUFPLENBQUMsQ0FBTTtRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7O0lBK0NELElBQ0ksWUFBWTtRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUtELElBQ0ksWUFBWTtRQUNaLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBS0QsSUFBSSxPQUFPO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUtELElBQUksYUFBYTtRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFLRCxJQUFJLGVBQWU7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBS0QsSUFBVyxhQUFhO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFLRCxJQUFXLGlCQUFpQjtRQUN4QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFTRCxJQUFXLEtBQUs7O2NBQ04sR0FBRyxHQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlELElBQUksR0FBRyxFQUFFO1lBQ0wsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLGVBQWUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxlQUFlLENBQUMsTUFBTSxDQUFDO1NBQ2xGO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFLRCxJQUFXLFlBQVk7UUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUNsQyxDQUFDOzs7OztJQUdELElBQVcsS0FBSzs7Y0FDTixHQUFHLEdBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDOUQsSUFBSSxHQUFHLEVBQUU7WUFDTCxPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLEdBQUcsQ0FBQztTQUMzQztRQUVBLE9BQU8sS0FBSyxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBR0QsSUFBVyxPQUFPO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7OztJQVFELElBQVcsVUFBVTtRQUNqQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFOztrQkFDakIsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRztZQUN6QyxPQUFPLENBQUMsWUFBWSxJQUFJLFlBQVksQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQztTQUNwRTthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDaEI7SUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBbUJELElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDN0IsQ0FBQzs7Ozs7Ozs7Ozs7O0lBWUQsSUFBVyxLQUFLOztjQUNOLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7UUFDdkMsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEUsQ0FBQzs7Ozs7Ozs7OztJQVVELElBQUksYUFBYTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDdEMsQ0FBQzs7Ozs7O0lBNkJNLGVBQWUsQ0FBQyxLQUFLOztjQUNsQixZQUFZLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7Ozs7Ozs7OztJQVlNLE1BQU0sQ0FBQyxLQUFVOztjQUNkLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVztRQUNwQyxJQUFJLFdBQVcsQ0FBQyxVQUFVLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7O2NBQ0ssR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7Ozs7Ozs7O0lBV00sTUFBTTtRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUtELElBQUksb0JBQW9CO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFLTSxTQUFTO1FBQ1osSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzdGLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNsRDtJQUNMLENBQUM7Ozs7OztJQUtTLGNBQWM7O2NBQ2QsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTOztjQUN4RSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLEVBQUU7O2NBQy9ELFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRTs7Y0FDdkQsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxFQUFFOztjQUNyRCxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEVBQUU7O2NBQzFELFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsRUFBRTs7Y0FDaEUsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzNELE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLFVBQVUsSUFBSSxhQUFhLElBQUksU0FBUyxJQUFJLFVBQVU7V0FDckYsWUFBWSxJQUFJLFFBQVEsSUFBSSxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUtELElBQVcsMkJBQTJCOztjQUM1Qiw0QkFBNEIsR0FBRywwQkFBMEI7O2NBQ3pELGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDdkcsT0FBTyxHQUFHLDRCQUE0QixJQUFJLGdCQUFnQixFQUFFLENBQUM7SUFDakUsQ0FBQzs7O1lBOVVKLFNBQVMsU0FBQztnQkFDUCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLHErTEFBNkM7YUFDaEQ7Ozs7WUFaUSxrQkFBa0I7WUFLTyxrQkFBa0I7WUFBM0MsdUJBQXVCO1lBUHZCLHNCQUFzQjtZQVQzQixVQUFVO1lBSFYsaUJBQWlCOzs7c0JBc0NoQixLQUFLO29CQW1CTCxLQUFLO3FCQU1MLEtBQUs7eUJBTUwsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzhCQU1yRSxTQUFTLFNBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtvQkFXL0YsWUFBWSxTQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzttQkFNbkQsV0FBVyxTQUFDLFdBQVc7MkJBR3ZCLFdBQVcsU0FBQyxvQkFBb0I7MkJBUWhDLFdBQVcsU0FBQyxPQUFPO3lCQTJDbkIsV0FBVyxTQUFDLG9CQUFvQjs7Ozs7OztJQXJIakMsbUNBQXNCOzs7Ozs7Ozs7O0lBNEJ0QixnQ0FDcUI7Ozs7O0lBS3JCLGlDQUNzQjs7Ozs7SUFLdEIscUNBQzhDOzs7OztJQUs5QywwQ0FDNkM7Ozs7Ozs7Ozs7SUFVN0MsZ0NBQzhDOzs7OztJQUs5QywrQkFDb0I7Ozs7O0lBcURwQixxQ0FDMkI7Ozs7O0lBcUMzQixtQ0FBd0I7Ozs7O0lBK0R4QixrQ0FBdUI7Ozs7OztJQU12QiwwQ0FBd0M7Ozs7OztJQUt4Qyx3Q0FBZ0M7O0lBRXBCLGtDQUFxQzs7SUFDN0Msc0NBQXNDOztJQUN0QywyQ0FBZ0Q7Ozs7O0lBQ2hELG9DQUF5Qzs7SUFDekMsa0NBQTBCOztJQUMxQiw4QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBEb0NoZWNrLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgZm9yd2FyZFJlZixcbiAgICBIb3N0QmluZGluZyxcbiAgICBJbnB1dCxcbiAgICBRdWVyeUxpc3QsXG4gICAgVmlld0NoaWxkLFxuICAgIFZpZXdDaGlsZHJlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi4vY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7IElneFNlbGVjdGlvbkFQSVNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlbGVjdGlvbic7XG5pbXBvcnQgeyBJZ3hHcmlkRm9yT2ZEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2Zvci1vZi9mb3Jfb2YuZGlyZWN0aXZlJztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4R3JpZENlbGxDb21wb25lbnQgfSBmcm9tICcuL2NlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IElneENvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvblR5cGUsIFN0YXRlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgSWd4R3JpZEJhc2VDb21wb25lbnQsIElHcmlkRGF0YUJpbmRhYmxlIH0gZnJvbSAnLi9ncmlkLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IElneEdyaWRTZWxlY3Rpb25TZXJ2aWNlLCBJZ3hHcmlkQ1JVRFNlcnZpY2UsIElneFJvdyB9IGZyb20gJy4uL2NvcmUvZ3JpZC1zZWxlY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgICBzZWxlY3RvcjogJ2lneC1yb3cnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ncmlkL2dyaWQtcm93LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hSb3dDb21wb25lbnQ8VCBleHRlbmRzIElneEdyaWRCYXNlQ29tcG9uZW50ICYgSUdyaWREYXRhQmluZGFibGU+IGltcGxlbWVudHMgRG9DaGVjayB7XG5cbiAgICBwcml2YXRlIF9yb3dEYXRhOiBhbnk7XG4gICAgLyoqXG4gICAgICogIFRoZSBkYXRhIHBhc3NlZCB0byB0aGUgcm93IGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXQgdGhlIHJvdyBkYXRhIGZvciB0aGUgZmlyc3Qgc2VsZWN0ZWQgcm93XG4gICAgICogbGV0IHNlbGVjdGVkUm93RGF0YSA9IHRoaXMuZ3JpZC5zZWxlY3RlZFJvd3NbMF0ucm93RGF0YTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcm93RGF0YSgpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy5pbkVkaXRNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fcm93RGF0YSwgdGhpcy5ncmlkLnRyYW5zYWN0aW9ucy5nZXRBZ2dyZWdhdGVkVmFsdWUodGhpcy5yb3dJRCwgZmFsc2UpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcm93RGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHJvd0RhdGEodjogYW55KSB7XG4gICAgICAgIHRoaXMuX3Jvd0RhdGEgPSB2O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgaW5kZXggb2YgdGhlIHJvdy5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXQgdGhlIGluZGV4IG9mIHRoZSBzZWNvbmQgc2VsZWN0ZWQgcm93XG4gICAgICogbGV0IHNlbGVjdGVkUm93SW5kZXggPSB0aGlzLmdyaWQuc2VsZWN0ZWRSb3dzWzFdLmluZGV4O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGluZGV4OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ3JpZElEOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnaWd4RGlyUmVmJywgeyByZWFkOiBJZ3hHcmlkRm9yT2ZEaXJlY3RpdmUsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgdmlydERpclJvdzogSWd4R3JpZEZvck9mRGlyZWN0aXZlPGFueT47XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZChmb3J3YXJkUmVmKCgpID0+IElneENoZWNrYm94Q29tcG9uZW50KSwgeyByZWFkOiBJZ3hDaGVja2JveENvbXBvbmVudCwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBjaGVja2JveEVsZW1lbnQ6IElneENoZWNrYm94Q29tcG9uZW50O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJlbmRlcmVkIGNlbGxzIGluIHRoZSByb3cgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldCB0aGUgY2VsbHMgb2YgdGhlIHRoaXJkIHNlbGVjdGVkIHJvd1xuICAgICAqIGxldCBzZWxlY3RlZFJvd0NlbGxzID0gdGhpcy5ncmlkLnNlbGVjdGVkUm93c1syXS5jZWxscztcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gSWd4R3JpZENlbGxDb21wb25lbnQpKVxuICAgIHB1YmxpYyBjZWxsczogUXVlcnlMaXN0PElneEdyaWRDZWxsQ29tcG9uZW50PjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gICAgcHVibGljIHJvbGUgPSAncm93JztcblxuICAgIEBIb3N0QmluZGluZygnYXR0ci5kYXRhLXJvd0luZGV4JylcbiAgICBnZXQgZGF0YVJvd0luZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gICAgZ2V0IHN0eWxlQ2xhc3NlcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlQ2xhc3NlcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgY29sdW1ucygpOiBJZ3hDb2x1bW5Db21wb25lbnRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQudmlzaWJsZUNvbHVtbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGdldCBwaW5uZWRDb2x1bW5zKCk6IElneENvbHVtbkNvbXBvbmVudFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5waW5uZWRDb2x1bW5zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgdW5waW5uZWRDb2x1bW5zKCk6IElneENvbHVtbkNvbXBvbmVudFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC51bnBpbm5lZENvbHVtbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgcm93U2VsZWN0YWJsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5yb3dTZWxlY3RhYmxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHNob3dSb3dDaGVja2JveGVzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnNob3dSb3dDaGVja2JveGVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1zZWxlY3RlZCcpXG4gICAgcHVibGljIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIHB1YmxpYyBnZXQgZGlydHkoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHJvdzogU3RhdGUgPSB0aGlzLmdyaWQudHJhbnNhY3Rpb25zLmdldFN0YXRlKHRoaXMucm93SUQpO1xuICAgICAgICBpZiAocm93KSB7XG4gICAgICAgICAgICByZXR1cm4gcm93LnR5cGUgPT09IFRyYW5zYWN0aW9uVHlwZS5BREQgfHwgcm93LnR5cGUgPT09IFRyYW5zYWN0aW9uVHlwZS5VUERBVEU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgcm93RHJhZ2dhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnJvd0RyYWdnYWJsZTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIHB1YmxpYyBnZXQgYWRkZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHJvdzogU3RhdGUgPSB0aGlzLmdyaWQudHJhbnNhY3Rpb25zLmdldFN0YXRlKHRoaXMucm93SUQpO1xuICAgICAgICBpZiAocm93KSB7XG4gICAgICAgICAgICByZXR1cm4gcm93LnR5cGUgPT09IFRyYW5zYWN0aW9uVHlwZS5BREQ7XG4gICAgICAgIH1cblxuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHVibGljIGdldCBkZWxldGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkQVBJLnJvd19kZWxldGVkX3RyYW5zYWN0aW9uKHRoaXMucm93SUQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIC8vIFRPRE86IFJlZmFjdG9yXG4gICAgcHVibGljIGdldCBpbkVkaXRNb2RlKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5ncmlkLnJvd0VkaXRhYmxlKSB7XG4gICAgICAgICAgICBjb25zdCBlZGl0Um93U3RhdGUgPSB0aGlzLmNydWRTZXJ2aWNlLnJvdztcbiAgICAgICAgICAgIHJldHVybiAoZWRpdFJvd1N0YXRlICYmIGVkaXRSb3dTdGF0ZS5pZCA9PT0gdGhpcy5yb3dJRCkgfHwgZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSByZWZlcmVuY2UgdG8gdGhlIGdyaWQgdGhhdCBjb250YWlucyB0aGUgc2VsZWN0ZWQgcm93LlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGhhbmRsZVJvd1NlbGVjdGlvbihldmVudCkge1xuICAgICAqICAvLyB0aGUgZ3JpZCBvbiB3aGljaCB0aGUgb25Sb3dTZWxlY3Rpb25DaGFuZ2UgZXZlbnQgd2FzIHRyaWdnZXJlZFxuICAgICAqICBjb25zdCBncmlkID0gZXZlbnQucm93LmdyaWQ7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWdyaWRcbiAgICAgKiAgICBbZGF0YV09XCJkYXRhXCJcbiAgICAgKiAgICAob25Sb3dTZWxlY3Rpb25DaGFuZ2UpPVwiaGFuZGxlUm93U2VsZWN0aW9uKCRldmVudClcIj5cbiAgICAgKiAgPC9pZ3gtZ3JpZD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBnZXQgZ3JpZCgpOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZEFQSS5ncmlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIElEIG9mIHRoZSByb3cuXG4gICAgICogQSByb3cgaW4gdGhlIGdyaWQgaXMgaWRlbnRpZmllZCBlaXRoZXIgYnk6XG4gICAgICogLSBwcmltYXJ5S2V5IGRhdGEgdmFsdWUsXG4gICAgICogLSB0aGUgd2hvbGUgcm93RGF0YSwgaWYgdGhlIHByaW1hcnlLZXkgaXMgb21pdHRlZC5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgcm93SUQgPSB0aGlzLmdyaWQuc2VsZWN0ZWRSb3dzWzJdLnJvd0lEO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgcm93SUQoKSB7XG4gICAgICAgIGNvbnN0IHByaW1hcnlLZXkgPSB0aGlzLmdyaWQucHJpbWFyeUtleTtcbiAgICAgICAgcmV0dXJuIHByaW1hcnlLZXkgPyB0aGlzLl9yb3dEYXRhW3ByaW1hcnlLZXldIDogdGhpcy5fcm93RGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmF0aXZlIERPTSBlbGVtZW50IHJlcHJlc2VudGluZyB0aGUgcm93LiBDb3VsZCBiZSBudWxsIGluIGNlcnRhaW4gZW52aXJvbm1lbnRzLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldCB0aGUgbmF0aXZlRWxlbWVudCBvZiB0aGUgc2Vjb25kIHNlbGVjdGVkIHJvd1xuICAgICAqIGxldCBzZWxlY3RlZFJvd05hdGl2ZUVsZW1lbnQgPSB0aGlzLmdyaWQuc2VsZWN0ZWRSb3dzWzFdLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgZ2V0IG5hdGl2ZUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGZvY3VzZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZGVmYXVsdENzc0NsYXNzID0gJ2lneC1ncmlkX190cic7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9yb3dTZWxlY3Rpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8VD4sXG4gICAgICAgIHB1YmxpYyBjcnVkU2VydmljZTogSWd4R3JpZENSVURTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgc2VsZWN0aW9uU2VydmljZTogSWd4R3JpZFNlbGVjdGlvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc2VsZWN0aW9uOiBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uQ2hlY2tib3hDbGljayhldmVudCkge1xuICAgICAgICBjb25zdCBuZXdTZWxlY3Rpb24gPSAoZXZlbnQuY2hlY2tlZCkgP1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uYWRkX2l0ZW0odGhpcy5ncmlkSUQsIHRoaXMucm93SUQpIDpcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmRlbGV0ZV9pdGVtKHRoaXMuZ3JpZElELCB0aGlzLnJvd0lEKTtcbiAgICAgICAgdGhpcy5ncmlkLnRyaWdnZXJSb3dTZWxlY3Rpb25DaGFuZ2UobmV3U2VsZWN0aW9uLCB0aGlzLCBldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgc3BlY2lmaWVkIHJvdyBvYmplY3QgYW5kIHRoZSBkYXRhIHNvdXJjZSByZWNvcmQgd2l0aCB0aGUgcGFzc2VkIHZhbHVlLlxuICAgICAqIFRoaXMgbWV0aG9kIGVtaXRzIGBvbkVkaXREb25lYCBldmVudC5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyB1cGRhdGUgdGhlIHNlY29uZCBzZWxlY3RlZCByb3cncyB2YWx1ZVxuICAgICAqIGxldCBuZXdWYWx1ZSA9IFwiQXBwbGVcIjtcbiAgICAgKiB0aGlzLmdyaWQuc2VsZWN0ZWRSb3dzWzFdLnVwZGF0ZShuZXdWYWx1ZSk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIGNvbnN0IGNydWRTZXJ2aWNlID0gdGhpcy5jcnVkU2VydmljZTtcbiAgICAgICAgaWYgKGNydWRTZXJ2aWNlLmluRWRpdE1vZGUgJiYgY3J1ZFNlcnZpY2UuY2VsbC5pZC5yb3dJRCA9PT0gdGhpcy5yb3dJRCkge1xuICAgICAgICAgICAgdGhpcy5ncmlkLmVuZEVkaXQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdyA9IG5ldyBJZ3hSb3codGhpcy5yb3dJRCwgdGhpcy5pbmRleCwgdGhpcy5yb3dEYXRhKTtcbiAgICAgICAgdGhpcy5ncmlkQVBJLnVwZGF0ZV9yb3cocm93LCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIHNwZWNpZmllZCByb3cgZnJvbSB0aGUgZ3JpZCdzIGRhdGEgc291cmNlLlxuICAgICAqIFRoaXMgbWV0aG9kIGVtaXRzIGBvblJvd0RlbGV0ZWRgIGV2ZW50LlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGRlbGV0ZSB0aGUgdGhpcmQgc2VsZWN0ZWQgcm93IGZyb20gdGhlIGdyaWRcbiAgICAgKiB0aGlzLmdyaWQuc2VsZWN0ZWRSb3dzWzJdLmRlbGV0ZSgpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5kZWxldGVSb3dCeUlkKHRoaXMucm93SUQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgcm93Q2hlY2tib3hBcmlhTGFiZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQucHJpbWFyeUtleSA/XG4gICAgICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPyAnRGVzZWxlY3Qgcm93IHdpdGgga2V5ICcgKyB0aGlzLnJvd0lEIDogJ1NlbGVjdCByb3cgd2l0aCBrZXkgJyArIHRoaXMucm93SUQgOlxuICAgICAgICAgICAgdGhpcy5pc1NlbGVjdGVkID8gJ0Rlc2VsZWN0IHJvdycgOiAnU2VsZWN0IHJvdyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ0RvQ2hlY2soKSB7XG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRoaXMucm93U2VsZWN0YWJsZSA/XG4gICAgICAgICAgICB0aGlzLmdyaWQuYWxsUm93c1NlbGVjdGVkID8gdHJ1ZSA6IHRoaXMuc2VsZWN0aW9uLmlzX2l0ZW1fc2VsZWN0ZWQodGhpcy5ncmlkSUQsIHRoaXMucm93SUQpIDpcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmlzX2l0ZW1fc2VsZWN0ZWQodGhpcy5ncmlkSUQsIHRoaXMucm93SUQpO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tib3hFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94RWxlbWVudC5jaGVja2VkID0gdGhpcy5pc1NlbGVjdGVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCByZXNvbHZlQ2xhc3NlcygpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBpbmRleENsYXNzID0gdGhpcy5pbmRleCAlIDIgPyB0aGlzLmdyaWQuZXZlblJvd0NTUyA6IHRoaXMuZ3JpZC5vZGRSb3dDU1M7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ2xhc3MgPSB0aGlzLmlzU2VsZWN0ZWQgPyAnaWd4LWdyaWRfX3RyLS1zZWxlY3RlZCcgOiAnJztcbiAgICAgICAgY29uc3QgZWRpdENsYXNzID0gdGhpcy5pbkVkaXRNb2RlID8gJ2lneC1ncmlkX190ci0tZWRpdCcgOiAnJztcbiAgICAgICAgY29uc3QgZGlydHlDbGFzcyA9IHRoaXMuZGlydHkgPyAnaWd4LWdyaWRfX3RyLS1lZGl0ZWQnIDogJyc7XG4gICAgICAgIGNvbnN0IGRlbGV0ZWRDbGFzcyA9IHRoaXMuZGVsZXRlZCA/ICdpZ3gtZ3JpZF9fdHItLWRlbGV0ZWQnIDogJyc7XG4gICAgICAgIGNvbnN0IG1ybENsYXNzID0gdGhpcy5ncmlkLmhhc0NvbHVtbkxheW91dHMgPyAnaWd4LWdyaWRfX3RyLS1tcmwnIDogJyc7XG4gICAgICAgIGNvbnN0IGRyYWdDbGFzcyA9IHRoaXMuZHJhZ2dpbmcgPyAnaWd4LWdyaWRfX3RyLS1kcmFnJyA6ICcnO1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5kZWZhdWx0Q3NzQ2xhc3N9ICR7aW5kZXhDbGFzc30gJHtzZWxlY3RlZENsYXNzfSAke2VkaXRDbGFzc30gJHtkaXJ0eUNsYXNzfVxuICAgICAgICAgJHtkZWxldGVkQ2xhc3N9ICR7bXJsQ2xhc3N9ICR7ZHJhZ0NsYXNzfWAudHJpbSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHJlc29sdmVEcmFnSW5kaWNhdG9yQ2xhc3NlcygpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBkZWZhdWx0RHJhZ0luZGljYXRvckNzc0NsYXNzID0gJ2lneC1ncmlkX19kcmFnLWluZGljYXRvcic7XG4gICAgICAgIGNvbnN0IGRyYWdJbmRpY2F0b3JPZmYgPSB0aGlzLmdyaWQucm93RHJhZ2dpbmcgJiYgIXRoaXMuZHJhZ2dpbmcgPyAnaWd4LWdyaWRfX2RyYWctaW5kaWNhdG9yLS1vZmYnIDogJyc7XG4gICAgICAgIHJldHVybiBgJHtkZWZhdWx0RHJhZ0luZGljYXRvckNzc0NsYXNzfSAke2RyYWdJbmRpY2F0b3JPZmZ9YDtcbiAgICB9XG59XG4iXX0=