import { EventEmitter, NgZone } from '@angular/core';
import { IGridEditEventArgs } from '../grids/grid-base.component';
export interface GridSelectionRange {
    rowStart: number;
    rowEnd: number;
    columnStart: string | number;
    columnEnd: string | number;
}
export interface ISelectionNode {
    row: number;
    column: number;
    layout?: IMultiRowLayoutNode;
    isSummaryRow?: boolean;
}
export interface IMultiRowLayoutNode {
    rowStart: number;
    colStart: number;
    rowEnd: number;
    colEnd: number;
    columnVisibleIndex: number;
}
interface ISelectionKeyboardState {
    node: null | ISelectionNode;
    shift: boolean;
    range: GridSelectionRange;
    active: boolean;
}
interface ISelectionPointerState extends ISelectionKeyboardState {
    ctrl: boolean;
    primaryButton: boolean;
}
declare type SelectionState = ISelectionKeyboardState | ISelectionPointerState;
export declare class IgxRow {
    id: any;
    index: number;
    data: any;
    transactionState: any;
    state: any;
    newData: any;
    constructor(id: any, index: number, data: any);
    createEditEventArgs(): IGridEditEventArgs;
}
export declare class IgxCell {
    id: any;
    rowIndex: number;
    column: any;
    value: any;
    editValue: any;
    rowData: any;
    primaryKey: any;
    state: any;
    constructor(id: any, rowIndex: number, column: any, value: any, editValue: any, rowData: any);
    castToNumber(value: any): any;
    createEditEventArgs(): IGridEditEventArgs;
}
export declare class IgxGridCRUDService {
    grid: any;
    cell: IgxCell | null;
    row: IgxRow | null;
    createCell(cell: any): IgxCell;
    createRow(cell: IgxCell): IgxRow;
    sameRow(rowIndex: any): boolean;
    sameCell(cell: IgxCell): boolean;
    readonly inEditMode: boolean;
    readonly rowEditing: boolean;
    readonly primaryKey: any;
    beginRowEdit(): void;
    endRowEdit(): void;
    begin(cell: any): void;
    end(): void;
    isInEditMode(rowIndex: number, columnIndex: number): boolean;
}
export declare class IgxGridSelectionService {
    private zone;
    dragMode: boolean;
    activeElement: ISelectionNode | null;
    keyboardState: ISelectionKeyboardState;
    pointerState: ISelectionPointerState;
    selection: Map<number, Set<number>>;
    temp: Map<number, Set<number>>;
    _ranges: Set<string>;
    _selectionRange: Range;
    /**
     * Returns the current selected ranges in the grid from both
     * keyboard and pointer interactions
     */
    readonly ranges: GridSelectionRange[];
    primaryButton: boolean;
    constructor(zone: NgZone);
    /**
     * Resets the keyboard state
     */
    initKeyboardState(): void;
    /**
     * Resets the pointer state
     */
    initPointerState(): void;
    /**
     * Adds a single node.
     * Single clicks | Ctrl + single clicks on cells is the usual case.
     */
    add(node: ISelectionNode): void;
    /**
     * Adds the active keyboard range selection (if any) to the `ranges` meta.
     */
    addKeyboardRange(): void;
    remove(node: ISelectionNode): void;
    isInMap(node: ISelectionNode): boolean;
    selected(node: ISelectionNode): boolean;
    isActiveNode(node: ISelectionNode, mrl?: boolean): boolean;
    isActiveLayout(current: IMultiRowLayoutNode, target: IMultiRowLayoutNode): boolean;
    addRangeMeta(node: ISelectionNode, state?: SelectionState): void;
    removeRangeMeta(node: ISelectionNode, state?: SelectionState): void;
    /**
     * Generates a new selection range from the given `node`.
     * If `state` is passed instead it will generate the range based on the passed `node`
     * and the start node of the `state`.
     */
    generateRange(node: ISelectionNode, state?: SelectionState): GridSelectionRange;
    /**
     *
     */
    keyboardStateOnKeydown(node: ISelectionNode, shift: boolean, shiftTab: boolean): void;
    keyboardStateOnFocus(node: ISelectionNode, emitter: EventEmitter<GridSelectionRange>, dom: any): void;
    pointerDown(node: ISelectionNode, shift: boolean, ctrl: boolean): void;
    pointerDownShiftKey(node: ISelectionNode): void;
    mergeMap(target: Map<number, Set<number>>, source: Map<number, Set<number>>): void;
    pointerEnter(node: ISelectionNode, event: PointerEvent): boolean;
    pointerUp(node: ISelectionNode, emitter: EventEmitter<GridSelectionRange>): boolean;
    selectRange(node: ISelectionNode, state: SelectionState, collection?: Map<number, Set<number>>): void;
    dragSelect(node: ISelectionNode, state: SelectionState): void;
    clear(): void;
    clearTextSelection(): void;
    restoreTextSelection(): void;
    /**
     * (╯°□°）╯︵ ┻━┻
     * Chrome and Chromium don't care about the active
     * range after keyboard navigation, thus this.
     */
    _moveSelectionChrome(node: Node): void;
}
export declare function isChromium(): boolean;
export {};