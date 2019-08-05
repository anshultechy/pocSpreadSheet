import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { IGroupByRecord } from '../../data-operations/groupby-record.interface';
import { GridBaseAPIService } from '../api.service';
import { IgxGridBaseComponent, IGridDataBindable } from '../grid-base.component';
import { IgxGridSelectionService, ISelectionNode } from '../../core/grid-selection';
export declare class IgxGridGroupByRowComponent {
    gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>;
    private gridSelection;
    element: ElementRef;
    cdr: ChangeDetectorRef;
    constructor(gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>, gridSelection: IgxGridSelectionService, element: ElementRef, cdr: ChangeDetectorRef);
    /**
     * @hidden
     */
    protected defaultCssClass: string;
    /**
     * @hidden
     */
    protected paddingIndentationCssClass: string;
    /**
     * @hidden
     */
    protected isFocused: boolean;
    /**
     * Returns whether the row is focused.
     * ```
     * let gridRowFocused = this.grid1.rowList.first.focused;
     * ```
     */
    readonly focused: boolean;
    /**
     * An @Input property that sets the index of the row.
     * ```html
     * <igx-grid-groupby-row [gridID]="id" [index]="rowIndex" [groupRow]="rowData" #row></igx-grid-groupby-row>
     * ```
     */
    index: number;
    /**
     * An @Input property that sets the id of the grid the row belongs to.
     * ```html
     * <igx-grid-groupby-row [gridID]="id" [index]="rowIndex" [groupRow]="rowData" #row></igx-grid-groupby-row>
     * ```
     */
    gridID: string;
    /**
     * An @Input property that specifies the group record the component renders for.
     * ```typescript
     * <igx-grid-groupby-row [gridID]="id" [index]="rowIndex" [groupRow]="rowData" #row></igx-grid-groupby-row>
     * ```
     */
    groupRow: IGroupByRecord;
    /**
     * Returns a reference of the content of the group.
     * ```typescript
     * const groupRowContent = this.grid1.rowList.first.groupContent;
     * ```
     */
    groupContent: ElementRef;
    /**
     * Returns whether the group row is expanded.
     * ```typescript
     * const groupRowExpanded = this.grid1.rowList.first.expanded;
     * ```
     */
    readonly expanded: boolean;
    /**
     * @hidden
     */
    tabindex: number;
    /**
     * @hidden
     */
    readonly describedBy: string;
    readonly dataRowIndex: number;
    /**
     * Returns a reference to the underlying HTML element.
     * ```typescript
     * const groupRowElement = this.nativeElement;
     * ```
     */
    readonly nativeElement: any;
    /**
     * Returns the style classes applied to the group rows.
     * ```typescript
     * const groupCssStyles = this.grid1.rowList.first.styleClasses;
     * ```
     */
    readonly styleClasses: string;
    /**
     *@hidden
     */
    onFocus(): void;
    /**
     *@hidden
     */
    onBlur(): void;
    /**
     * Toggles the group row.
     * ```typescript
     * this.grid1.rowList.first.toggle()
     * ```
     */
    toggle(): void;
    protected readonly selectionNode: ISelectionNode;
    /**
     * @hidden
     */
    onKeydown(event: any): void;
    /**
     * Returns a reference to the `IgxGridComponent` the `IgxGridGroupByRowComponent` belongs to.
     * ```typescript
     * this.grid1.rowList.first.grid;
     * ```
     */
    readonly grid: any;
    /**
     * @hidden
     */
    readonly dataType: any;
    private handleTabKey;
    private isKeySupportedInGroupRow;
    private isToggleKey;
}
