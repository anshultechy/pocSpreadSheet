import { ChangeDetectorRef, ElementRef, TemplateRef, NgZone, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { IgxSelectionAPIService } from '../core/selection';
import { IgxTextHighlightDirective } from '../directives/text-highlight/text-highlight.directive';
import { GridBaseAPIService } from './api.service';
import { IgxColumnComponent } from './column.component';
import { IgxGridBaseComponent, IGridDataBindable } from './grid-base.component';
import { IgxGridSelectionService, ISelectionNode, IgxGridCRUDService } from '../core/grid-selection';
/**
 * Providing reference to `IgxGridCellComponent`:
 * ```typescript
 * @ViewChild('grid', { read: IgxGridComponent })
 *  public grid: IgxGridComponent;
 * ```
 * ```typescript
 *  let column = this.grid.columnList.first;
 * ```
 * ```typescript
 *  let cell = column.cells[0];
 * ```
 */
export declare class IgxGridCellComponent implements OnInit, OnChanges, OnDestroy {
    protected selectionService: IgxGridSelectionService;
    protected crudService: IgxGridCRUDService;
    gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>;
    selection: IgxSelectionAPIService;
    cdr: ChangeDetectorRef;
    private element;
    protected zone: NgZone;
    private _vIndex;
    /**
     * Gets the column of the cell.
     * ```typescript
     *  let cellColumn = this.cell.column;
     * ```
     * @memberof IgxGridCellComponent
     */
    column: IgxColumnComponent;
    /**
     * Gets the row of the cell.
     * ```typescript
     * let cellRow = this.cell.row;
     * ```
     * @memberof IgxGridCellComponent
     */
    row: any;
    /**
     * Gets the data of the row of the cell.
     * ```typescript
     * let rowData = this.cell.rowData;
     * ```
     * @memberof IgxGridCellComponent
     */
    rowData: any;
    /**
     * Sets/gets the template of the cell.
     * ```html
     * <ng-template #cellTemplate igxCell let-value>
     *   <div style="font-style: oblique; color:blueviolet; background:red">
     *       <span>{{value}}</span>
     *   </div>
     * </ng-template>
     * ```
     * ```typescript
     * @ViewChild('cellTemplate',{read: TemplateRef})
     * cellTemplate: TemplateRef<any>;
     * ```
     * ```typescript
     * this.cell.cellTemplate = this.cellTemplate;
     * ```
     * ```typescript
     * let template =  this.cell.cellTemplate;
     * ```
     * @memberof IgxGridCellComponent
     */
    cellTemplate: TemplateRef<any>;
    /**
     * Sets/gets the cell value.
     * ```typescript
     * this.cell.value = "Cell Value";
     * ```
     * ```typescript
     * let cellValue = this.cell.value;
     * ```
     * @memberof IgxGridCellComponent
     */
    value: any;
    /**
     * Sets/gets the highlight class of the cell.
     * Default value is `"igx-highlight"`.
     * ```typescript
     * let highlightClass = this.cell.highlightClass;
     * ```
     * ```typescript
     * this.cell.highlightClass = 'igx-cell-highlight';
     * ```
     * @memberof IgxGridCellComponent
     */
    highlightClass: string;
    /**
     * Sets/gets the active highlight class class of the cell.
     * Default value is `"igx-highlight__active"`.
     * ```typescript
     * let activeHighlightClass = this.cell.activeHighlightClass;
     * ```
     * ```typescript
     * this.cell.activeHighlightClass = 'igx-cell-highlight_active';
     * ```
     * @memberof IgxGridCellComponent
     */
    activeHighlightClass: string;
    /**
     * Gets the cell formatter.
     * ```typescript
     * let cellForamatter = this.cell.formatter;
     * ```
     * @memberof IgxGridCellComponent
     */
    formatter: (value: any) => any;
    /**
     * Gets the cell template context object.
     * ```typescript
     *  let context = this.cell.context();
     * ```
     * @memberof IgxGridCellComponent
     */
    readonly context: any;
    /**
     * Gets the cell template.
     * ```typescript
     * let template = this.cell.template;
     * ```
     * @memberof IgxGridCellComponent
     */
    readonly template: TemplateRef<any>;
    /**
     * Gets the `id` of the grid in which the cell is stored.
     * ```typescript
     * let gridId = this.cell.gridID;
     * ```
     * @memberof IgxGridCellComponent
     */
    readonly gridID: any;
    /**
     * Gets the grid of the cell.
     * ```typescript
     * let grid = this.cell.grid;
     * ```
     * @memberof IgxGridCellComponent
     */
    readonly grid: any;
    /**
     * Gets the `index` of the row where the cell is stored.
     * ```typescript
     * let rowIndex = this.cell.rowIndex;
     * ```
     * @memberof IgxGridCellComponent
     */
    readonly rowIndex: number;
    /**
     * Gets the `index` of the cell column.
     * ```typescript
     * let columnIndex = this.cell.columnIndex;
     * ```
     * @memberof IgxGridCellComponent
     */
    readonly columnIndex: number;
    /**
     * Gets the visible `index` of the in which the cell is stored.
     * ```typescript
     * let visibleColumnIndex = this.cell.visibleColumnIndex;
     * ```
     * @memberof IgxGridCellComponent
     */
    visibleColumnIndex: number;
    /**
     * Gets the ID of the cell.
     * ```typescript
     * let cellID = this.cell.cellID;
     * ```
     * @memberof IgxGridCellComponent
     */
    readonly cellID: {
        rowID: any;
        columnID: number;
        rowIndex: number;
    };
    /**
     * Returns a reference to the nativeElement of the cell.
     * ```typescript
     * let cellNativeElement = this.cell.nativeElement;
     * ```
     * @memberof IgxGridCellComponent
     */
    readonly nativeElement: HTMLElement;
    /**
     * @deprecated
     * Use `cell.editMode` as a getter and
     * `cell.setEditMode(true | false)` to start/exit edit mode.
     *
     * Gets/sets whether the cell is in edit mode.
     * ```typescript
     * let isCellInEditMode = this.cell.inEditMode;
     * ```
     * @memberof IgxGridCellComponent
     */
    inEditMode: boolean;
    /**
     * @hidden
     * @internal
     */
    lastPinned: boolean;
    /**
     * Returns whether the cell is in edit mode.
     */
    editMode: boolean;
    /**
     * Sets/get the `tabindex` property of the cell.
     * Default value is `0`.
     * ```typescript
     * this.cell.tabindex = 1;
     * ```
     * ```typescript
     * let cellTabIndex = this.cell.tabindex;
     * ```
     * @memberof IgxGridCellComponent
     */
    tabindex: number;
    /**
     * Sets/get the `role` property of the cell.
     * Default value is `"gridcell"`.
     * ```typescript
     * this.cell.role = 'grid-cell';
     * ```
     * ```typescript
     * let cellRole = this.cell.role;
     * ```
     * @memberof IgxGridCellComponent
     */
    role: string;
    /**
     * Gets whether the cell is editable.
     * ```typescript
     * let isCellReadonly = this.cell.readonly;
     * ```
     * @memberof IgxGridCellComponent
     */
    readonly readonly: boolean;
    readonly gridRowSpan: number;
    readonly gridColumnSpan: number;
    readonly rowEnd: number;
    readonly colEnd: number;
    readonly rowStart: number;
    readonly colStart: number;
    /**
     * Returns a string containing the grid `id` and the column `field` concatenated by "_".
     * ```typescript
     * let describedBy = this.cell.describedBy;
     * ```
     * @memberof IgxGridCellComponent
     */
    readonly describedby: string;
    /**
     * Gets the width of the cell.
     * ```typescript
     * let cellWidth = this.cell.width;
     * ```
     * @memberof IgxGridCellComponent
     */
    width: string;
    /**
     * Gets whether the cell is selected.
     * ```typescript
     * let isSelected = this.cell.selected;
     * ```
     * @memberof IgxGridCellComponent
     */
    /**
    * Selects/deselects the cell.
    * ```typescript
    * this.cell.selected = true.
    * ```
    * @memberof IgxGridCellComponent
    */
    selected: boolean;
    readonly dirty: any;
    /**
     * Sets the current edit value while a cell is in edit mode.
     * Only for cell editing mode.
     * ```typescript
     * this.cell.editValue = value;
     * ```
     * @memberof IgxGridCellComponent
     */
    /**
    * Gets the current edit value while a cell is in edit mode.
    * Only for cell editing mode.
    * ```typescript
    * let editValue = this.cell.editValue;
    * ```
    * @memberof IgxGridCellComponent
    */
    editValue: any;
    /**
     * Returns whether the cell is editable.
     */
    readonly editable: boolean;
    /**
     * @hidden
     * @internal
     */
    focused: boolean;
    protected defaultCellTemplate: TemplateRef<any>;
    protected inlineEditorTemplate: TemplateRef<any>;
    protected highlight: IgxTextHighlightDirective;
    protected readonly selectionNode: ISelectionNode;
    protected isInCompositionMode: boolean;
    protected compositionStartHandler: any;
    protected compositionEndHandler: any;
    private _highlight;
    constructor(selectionService: IgxGridSelectionService, crudService: IgxGridCRUDService, gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>, selection: IgxSelectionAPIService, cdr: ChangeDetectorRef, element: ElementRef, zone: NgZone);
    /**
     * @hidden
     * @internal
     */
    ngOnInit(): void;
    /**
     * @hidden
     * @internal
     */
    ngOnDestroy(): void;
    /**
     * @hidden
     * @internal
     */
    _updateCRUDStatus(): void;
    /**
     * Gets whether the cell is selected.
     * ```typescript
     * let isCellSelected = thid.cell.isCellSelected();
     * ```
     * @memberof IgxGridCellComponent
     */
    isCellSelected(): boolean;
    /**
     * @hidden
     * @internal
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Starts/ends edit mode for the cell.
     *
     * ```typescript
     * cell.setEditMode(true);
     * ```
     */
    setEditMode(value: boolean): void;
    /**
     * Sets new value to the cell.
     * ```typescript
     * this.cell.update('New Value');
     * ```
     * @memberof IgxGridCellComponent
     */
    update(val: any): void;
    /**
     *
     * @hidden
     * @internal
     */
    pointerdown: (event: PointerEvent) => void;
    /**
     *
     * @hidden
     * @internal
     */
    pointerenter: (event: PointerEvent) => void;
    /**
     * @hidden
     * @internal
     */
    pointerup: (event: PointerEvent) => void;
    /**
     * @hidden
     * @internal
     */
    onDoubleClick(event: MouseEvent): void;
    /**
     * @hidden
     * @internal
     */
    onClick(event: MouseEvent): void;
    /**
     * @hidden
     * @internal
     */
    onContextMenu(event: MouseEvent): void;
    /**
     * @hidden
     * @internal
     */
    onFocus(event: FocusEvent): void;
    /**
     * @hidden
     * @internal
     */
    onBlur(): void;
    protected handleAlt(key: string, event: KeyboardEvent): void;
    protected handleTab(shift: boolean): void;
    protected handleEnd(ctrl: boolean): void;
    protected handleHome(ctrl: boolean): void;
    /**
     *
     * @hidden
     * @internal
     */
    dispatchEvent(event: KeyboardEvent): void;
    /**
     * @hidden
     * @internal
     */
    onKeydownEnterEditMode(): void;
    /**
     * @hidden
     * @internal
     */
    onKeydownExitEditMode(): void;
    /**
     * If the provided string matches the text in the cell, the text gets highlighted.
     * ```typescript
     * this.cell.highlightText('Cell Value', true);
     * ```
     * @memberof IgxGridCellComponent
     */
    highlightText(text: string, caseSensitive?: boolean, exactMatch?: boolean): number;
    /**
     * Clears the highlight of the text in the cell.
     * ```typescript
     * this.cell.clearHighLight();
     * ```
     * @memberof IgxGridCellComponent
     */
    clearHighlight(): void;
    /**
     * @hidden
     * @internal
     */
    calculateSizeToFit(range: any): number;
    private isToggleKey;
}