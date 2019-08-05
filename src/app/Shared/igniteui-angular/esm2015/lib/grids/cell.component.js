/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, HostListener, Input, TemplateRef, ViewChild, NgZone } from '@angular/core';
import { IgxSelectionAPIService } from '../core/selection';
import { IgxTextHighlightDirective } from '../directives/text-highlight/text-highlight.directive';
import { GridBaseAPIService } from './api.service';
import { IgxColumnComponent } from './column.component';
import { getNodeSizeViaRange, ROW_COLLAPSE_KEYS, ROW_EXPAND_KEYS, SUPPORTED_KEYS, NAVIGATION_KEYS, isIE, isLeftClick } from '../core/utils';
import { IgxGridSelectionService, IgxGridCRUDService } from '../core/grid-selection';
import { DeprecateProperty } from '../core/deprecateDecorators';
/**
 * Providing reference to `IgxGridCellComponent`:
 * ```typescript
 * \@ViewChild('grid', { read: IgxGridComponent })
 *  public grid: IgxGridComponent;
 * ```
 * ```typescript
 *  let column = this.grid.columnList.first;
 * ```
 * ```typescript
 *  let cell = column.cells[0];
 * ```
 */
export class IgxGridCellComponent {
    /**
     * @param {?} selectionService
     * @param {?} crudService
     * @param {?} gridAPI
     * @param {?} selection
     * @param {?} cdr
     * @param {?} element
     * @param {?} zone
     */
    constructor(selectionService, crudService, gridAPI, selection, cdr, element, zone) {
        this.selectionService = selectionService;
        this.crudService = crudService;
        this.gridAPI = gridAPI;
        this.selection = selection;
        this.cdr = cdr;
        this.element = element;
        this.zone = zone;
        this._vIndex = -1;
        /**
         * Sets/gets the highlight class of the cell.
         * Default value is `"igx-highlight"`.
         * ```typescript
         * let highlightClass = this.cell.highlightClass;
         * ```
         * ```typescript
         * this.cell.highlightClass = 'igx-cell-highlight';
         * ```
         * \@memberof IgxGridCellComponent
         */
        this.highlightClass = 'igx-highlight';
        /**
         * Sets/gets the active highlight class class of the cell.
         * Default value is `"igx-highlight__active"`.
         * ```typescript
         * let activeHighlightClass = this.cell.activeHighlightClass;
         * ```
         * ```typescript
         * this.cell.activeHighlightClass = 'igx-cell-highlight_active';
         * ```
         * \@memberof IgxGridCellComponent
         */
        this.activeHighlightClass = 'igx-highlight__active';
        /**
         * @hidden
         * \@internal
         */
        this.lastPinned = false;
        /**
         * Returns whether the cell is in edit mode.
         */
        this.editMode = false;
        /**
         * Sets/get the `tabindex` property of the cell.
         * Default value is `0`.
         * ```typescript
         * this.cell.tabindex = 1;
         * ```
         * ```typescript
         * let cellTabIndex = this.cell.tabindex;
         * ```
         * \@memberof IgxGridCellComponent
         */
        this.tabindex = 0;
        /**
         * Sets/get the `role` property of the cell.
         * Default value is `"gridcell"`.
         * ```typescript
         * this.cell.role = 'grid-cell';
         * ```
         * ```typescript
         * let cellRole = this.cell.role;
         * ```
         * \@memberof IgxGridCellComponent
         */
        this.role = 'gridcell';
        /**
         * Gets the width of the cell.
         * ```typescript
         * let cellWidth = this.cell.width;
         * ```
         * \@memberof IgxGridCellComponent
         */
        this.width = '';
        /**
         * @hidden
         * \@internal
         */
        this.focused = false;
        this.isInCompositionMode = false;
        /**
         *
         * @hidden
         * \@internal
         */
        this.pointerdown = (event) => {
            if (!isLeftClick(event)) {
                this.selectionService.addKeyboardRange();
                this.selectionService.initKeyboardState();
                this.selectionService.primaryButton = false;
                return;
            }
            this.selectionService.pointerDown(this.selectionNode, event.shiftKey, event.ctrlKey);
        };
        /**
         *
         * @hidden
         * \@internal
         */
        this.pointerenter = (event) => {
            /** @type {?} */
            const dragMode = this.selectionService.pointerEnter(this.selectionNode, event);
            if (dragMode) {
                this.grid.cdr.detectChanges();
            }
        };
        /**
         * @hidden
         * \@internal
         */
        this.pointerup = (event) => {
            if (this.grid.hasColumnLayouts) {
                this.grid.navigation.setStartNavigationCell(this.colStart, this.rowStart, null);
            }
            if (!isLeftClick(event)) {
                return;
            }
            if (this.selectionService.pointerUp(this.selectionNode, this.grid.onRangeSelection)) {
                this.grid.cdr.detectChanges();
            }
            this._updateCRUDStatus();
        };
    }
    /**
     * Gets the cell template context object.
     * ```typescript
     *  let context = this.cell.context();
     * ```
     * \@memberof IgxGridCellComponent
     * @return {?}
     */
    get context() {
        return {
            $implicit: this.value,
            cell: this
        };
    }
    /**
     * Gets the cell template.
     * ```typescript
     * let template = this.cell.template;
     * ```
     * \@memberof IgxGridCellComponent
     * @return {?}
     */
    get template() {
        if (this.editMode) {
            /** @type {?} */
            const inlineEditorTemplate = this.column.inlineEditorTemplate;
            return inlineEditorTemplate ? inlineEditorTemplate : this.inlineEditorTemplate;
        }
        if (this.cellTemplate) {
            return this.cellTemplate;
        }
        return this.defaultCellTemplate;
    }
    /**
     * Gets the `id` of the grid in which the cell is stored.
     * ```typescript
     * let gridId = this.cell.gridID;
     * ```
     * \@memberof IgxGridCellComponent
     * @return {?}
     */
    get gridID() {
        return this.row.gridID;
    }
    /**
     * Gets the grid of the cell.
     * ```typescript
     * let grid = this.cell.grid;
     * ```
     * \@memberof IgxGridCellComponent
     * @return {?}
     */
    get grid() {
        return this.gridAPI.grid;
    }
    /**
     * Gets the `index` of the row where the cell is stored.
     * ```typescript
     * let rowIndex = this.cell.rowIndex;
     * ```
     * \@memberof IgxGridCellComponent
     * @return {?}
     */
    get rowIndex() {
        return this.row.index;
    }
    /**
     * Gets the `index` of the cell column.
     * ```typescript
     * let columnIndex = this.cell.columnIndex;
     * ```
     * \@memberof IgxGridCellComponent
     * @return {?}
     */
    get columnIndex() {
        return this.column.index;
    }
    /**
     * Gets the visible `index` of the in which the cell is stored.
     * ```typescript
     * let visibleColumnIndex = this.cell.visibleColumnIndex;
     * ```
     * \@memberof IgxGridCellComponent
     * @return {?}
     */
    get visibleColumnIndex() {
        return this.column.columnLayoutChild ? this.column.visibleIndex : this._vIndex;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set visibleColumnIndex(val) {
        this._vIndex = val;
    }
    /**
     * Gets the ID of the cell.
     * ```typescript
     * let cellID = this.cell.cellID;
     * ```
     * \@memberof IgxGridCellComponent
     * @return {?}
     */
    get cellID() {
        /** @type {?} */
        const primaryKey = this.grid.primaryKey;
        /** @type {?} */
        const rowID = primaryKey ? this.rowData[primaryKey] : this.rowData;
        return { rowID, columnID: this.columnIndex, rowIndex: this.rowIndex };
    }
    /**
     * Returns a reference to the nativeElement of the cell.
     * ```typescript
     * let cellNativeElement = this.cell.nativeElement;
     * ```
     * \@memberof IgxGridCellComponent
     * @return {?}
     */
    get nativeElement() {
        return this.element.nativeElement;
    }
    /**
     * @deprecated
     * Use `cell.editMode` as a getter and
     * `cell.setEditMode(true | false)` to start/exit edit mode.
     *
     * Gets/sets whether the cell is in edit mode.
     * ```typescript
     * let isCellInEditMode = this.cell.inEditMode;
     * ```
     * \@memberof IgxGridCellComponent
     * @return {?}
     */
    get inEditMode() {
        return this.editMode;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set inEditMode(value) {
        this.setEditMode(value);
    }
    /**
     * Gets whether the cell is editable.
     * ```typescript
     * let isCellReadonly = this.cell.readonly;
     * ```
     * \@memberof IgxGridCellComponent
     * @return {?}
     */
    get readonly() {
        return !this.column.editable;
    }
    /**
     * @return {?}
     */
    get gridRowSpan() {
        return this.column.gridRowSpan;
    }
    /**
     * @return {?}
     */
    get gridColumnSpan() {
        return this.column.gridColumnSpan;
    }
    /**
     * @return {?}
     */
    get rowEnd() {
        return this.column.rowEnd;
    }
    /**
     * @return {?}
     */
    get colEnd() {
        return this.column.colEnd;
    }
    /**
     * @return {?}
     */
    get rowStart() {
        return this.column.rowStart;
    }
    /**
     * @return {?}
     */
    get colStart() {
        return this.column.colStart;
    }
    /**
     * Returns a string containing the grid `id` and the column `field` concatenated by "_".
     * ```typescript
     * let describedBy = this.cell.describedBy;
     * ```
     * \@memberof IgxGridCellComponent
     * @return {?}
     */
    get describedby() {
        return `${this.row.gridID}_${this.column.field}`;
    }
    /**
     * Gets whether the cell is selected.
     * ```typescript
     * let isSelected = this.cell.selected;
     * ```
     * \@memberof IgxGridCellComponent
     * @return {?}
     */
    get selected() {
        return this.isCellSelected();
    }
    /**
     * Selects/deselects the cell.
     * ```typescript
     * this.cell.selected = true.
     * ```
     * \@memberof IgxGridCellComponent
     * @param {?} val
     * @return {?}
     */
    set selected(val) {
        /** @type {?} */
        const node = this.selectionNode;
        val ? this.selectionService.add(node) : this.selectionService.remove(node);
    }
    /**
     * @return {?}
     */
    get dirty() {
        if (this.grid.rowEditable) {
            /** @type {?} */
            const rowCurrentState = this.grid.transactions.getAggregatedValue(this.row.rowID, false);
            if (rowCurrentState) {
                return rowCurrentState[this.column.field] !== undefined && rowCurrentState[this.column.field] !== null;
            }
        }
        else {
            /** @type {?} */
            const rowTransaction = this.grid.transactions.getState(this.row.rowID);
            return rowTransaction && rowTransaction.value && rowTransaction.value[this.column.field];
        }
        return false;
    }
    /**
     * Sets the current edit value while a cell is in edit mode.
     * Only for cell editing mode.
     * ```typescript
     * this.cell.editValue = value;
     * ```
     * \@memberof IgxGridCellComponent
     * @param {?} value
     * @return {?}
     */
    set editValue(value) {
        if (this.crudService.inEditMode) {
            this.crudService.cell.editValue = value;
        }
    }
    /**
     * Gets the current edit value while a cell is in edit mode.
     * Only for cell editing mode.
     * ```typescript
     * let editValue = this.cell.editValue;
     * ```
     * \@memberof IgxGridCellComponent
     * @return {?}
     */
    get editValue() {
        if (this.crudService.inEditMode) {
            return this.crudService.cell.editValue;
        }
    }
    /**
     * Returns whether the cell is editable.
     * @return {?}
     */
    get editable() {
        return this.column.editable;
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    set highlight(value) {
        this._highlight = value;
        if (this._highlight && this.grid.lastSearchInfo.searchText) {
            this._highlight.highlight(this.grid.lastSearchInfo.searchText, this.grid.lastSearchInfo.caseSensitive, this.grid.lastSearchInfo.exactMatch);
            this._highlight.activateIfNecessary();
        }
    }
    /**
     * @protected
     * @return {?}
     */
    get highlight() {
        return this._highlight;
    }
    /**
     * @protected
     * @return {?}
     */
    get selectionNode() {
        return {
            row: this.rowIndex,
            column: this.column.columnLayoutChild ? this.column.parent.visibleIndex : this.visibleColumnIndex,
            layout: this.column.columnLayoutChild ? {
                rowStart: this.column.rowStart,
                colStart: this.column.colStart,
                rowEnd: this.column.rowEnd,
                colEnd: this.column.colEnd,
                columnVisibleIndex: this.visibleColumnIndex
            } : null
        };
    }
    /**
     * @hidden
     * \@internal
     * @return {?}
     */
    ngOnInit() {
        this.zone.runOutsideAngular(() => {
            this.nativeElement.addEventListener('pointerdown', this.pointerdown);
            this.nativeElement.addEventListener('pointerenter', this.pointerenter);
            this.nativeElement.addEventListener('pointerup', this.pointerup);
            // IE 11 workarounds
            if (isIE()) {
                this.compositionStartHandler = () => this.isInCompositionMode = true;
                this.compositionEndHandler = () => this.isInCompositionMode = false;
                // Hitting Enter with IME submits and exits from edit mode instead of first closing the IME dialog
                this.nativeElement.addEventListener('compositionstart', this.compositionStartHandler);
                this.nativeElement.addEventListener('compositionend', this.compositionEndHandler);
            }
        });
    }
    /**
     * @hidden
     * \@internal
     * @return {?}
     */
    ngOnDestroy() {
        this.zone.runOutsideAngular(() => {
            this.nativeElement.removeEventListener('pointerdown', this.pointerdown);
            this.nativeElement.removeEventListener('pointerenter', this.pointerenter);
            this.nativeElement.removeEventListener('pointerup', this.pointerup);
            if (isIE()) {
                this.nativeElement.removeEventListener('compositionstart', this.compositionStartHandler);
                this.nativeElement.removeEventListener('compositionend', this.compositionEndHandler);
            }
        });
    }
    /**
     * @hidden
     * \@internal
     * @return {?}
     */
    _updateCRUDStatus() {
        if (this.editMode) {
            return;
        }
        /** @type {?} */
        const crud = this.crudService;
        /** @type {?} */
        const editableCell = this.crudService.cell;
        /** @type {?} */
        const editMode = !!(crud.row || crud.cell);
        if (this.editable && editMode && !this.row.deleted) {
            if (editableCell) {
                this.gridAPI.update_cell(editableCell, editableCell.editValue);
            }
            crud.end();
            this.grid.cdr.markForCheck();
            crud.begin(this);
            return;
        }
        if (editableCell && crud.sameRow(this.rowIndex)) {
            this.gridAPI.submit_value();
        }
        else if (editMode && !crud.sameRow(this.rowIndex)) {
            this.grid.endEdit(true);
        }
    }
    /**
     * Gets whether the cell is selected.
     * ```typescript
     * let isCellSelected = thid.cell.isCellSelected();
     * ```
     * \@memberof IgxGridCellComponent
     * @return {?}
     */
    isCellSelected() {
        return this.selectionService.selected(this.selectionNode);
    }
    /**
     * @hidden
     * \@internal
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.value && !changes.value.firstChange) {
            if (this.highlight) {
                this.highlight.lastSearchInfo.searchedText = this.grid.lastSearchInfo.searchText;
                this.highlight.lastSearchInfo.caseSensitive = this.grid.lastSearchInfo.caseSensitive;
                this.highlight.lastSearchInfo.exactMatch = this.grid.lastSearchInfo.exactMatch;
            }
        }
    }
    /**
     * Starts/ends edit mode for the cell.
     *
     * ```typescript
     * cell.setEditMode(true);
     * ```
     * @param {?} value
     * @return {?}
     */
    setEditMode(value) {
        if (this.row.deleted) {
            return;
        }
        if (this.editable && value) {
            this.gridAPI.submit_value();
            this.crudService.begin(this);
        }
        else {
            this.gridAPI.escape_editMode();
        }
        this.grid.cdr.markForCheck();
    }
    /**
     * Sets new value to the cell.
     * ```typescript
     * this.cell.update('New Value');
     * ```
     * \@memberof IgxGridCellComponent
     * @param {?} val
     * @return {?}
     */
    // TODO: Refactor
    update(val) {
        if (this.row.deleted) {
            return;
        }
        /** @type {?} */
        const cell = this.crudService.createCell(this);
        /** @type {?} */
        const args = this.gridAPI.update_cell(cell, val);
        if (this.crudService.cell && this.crudService.sameCell(cell)) {
            if (args.cancel) {
                return;
            }
            this.gridAPI.escape_editMode();
        }
        this.cdr.markForCheck();
    }
    /**
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    onDoubleClick(event) {
        if (this.editable && !this.editMode && !this.row.deleted) {
            this.crudService.begin(this);
        }
        this.grid.onDoubleClick.emit({
            cell: this,
            event
        });
    }
    /**
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.grid.onCellClick.emit({
            cell: this,
            event
        });
    }
    /**
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    onContextMenu(event) {
        this.grid.onContextMenu.emit({
            cell: this,
            event
        });
    }
    /**
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    onFocus(event) {
        if (this.focused) {
            return;
        }
        /** @type {?} */
        const node = this.selectionNode;
        /** @type {?} */
        const mrl = this.grid.hasColumnLayouts;
        this.focused = true;
        this.row.focused = true;
        if (!this.selectionService.isActiveNode(node, mrl)) {
            this.grid.onSelection.emit({ cell: this, event });
        }
        if (this.selectionService.primaryButton) {
            this._updateCRUDStatus();
            this.selectionService.activeElement = node;
        }
        else {
            this.selectionService.activeElement = null;
            if (this.crudService.inEditMode && !this.editMode) {
                this.gridAPI.submit_value();
            }
        }
        this.selectionService.primaryButton = true;
        this.selectionService.keyboardStateOnFocus(node, this.grid.onRangeSelection, this.nativeElement);
    }
    /**
     * @hidden
     * \@internal
     * @return {?}
     */
    onBlur() {
        this.focused = false;
        this.row.focused = false;
    }
    /**
     * @protected
     * @param {?} key
     * @param {?} event
     * @return {?}
     */
    handleAlt(key, event) {
        if (this.row.nativeElement.tagName.toLowerCase() === 'igx-tree-grid-row' && this.isToggleKey(key)) {
            /** @type {?} */
            const collapse = ((/** @type {?} */ (this.row))).expanded && ROW_COLLAPSE_KEYS.has(key);
            /** @type {?} */
            const expand = !((/** @type {?} */ (this.row))).expanded && ROW_EXPAND_KEYS.has(key);
            if (collapse) {
                ((/** @type {?} */ (this.gridAPI))).trigger_row_expansion_toggle(this.row.treeRow, !this.row.expanded, event, this.visibleColumnIndex);
            }
            else if (expand) {
                ((/** @type {?} */ (this.gridAPI))).trigger_row_expansion_toggle(this.row.treeRow, !this.row.expanded, event, this.visibleColumnIndex);
            }
        }
    }
    /**
     * @protected
     * @param {?} shift
     * @return {?}
     */
    handleTab(shift) {
        if (shift) {
            this.grid.navigation.performShiftTabKey(this.row.nativeElement, this.selectionNode);
        }
        else {
            this.grid.navigation.performTab(this.row.nativeElement, this.selectionNode);
        }
    }
    /**
     * @protected
     * @param {?} ctrl
     * @return {?}
     */
    handleEnd(ctrl) {
        if (ctrl) {
            this.grid.navigation.goToLastCell();
        }
        else {
            this.grid.navigation.onKeydownEnd(this.rowIndex, false, this.rowStart);
        }
    }
    /**
     * @protected
     * @param {?} ctrl
     * @return {?}
     */
    handleHome(ctrl) {
        if (ctrl) {
            this.grid.navigation.goToFirstCell();
        }
        else {
            this.grid.navigation.onKeydownHome(this.rowIndex, false, this.rowStart);
        }
    }
    // TODO: Refactor
    /**
     *
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    dispatchEvent(event) {
        /** @type {?} */
        const key = event.key.toLowerCase();
        /** @type {?} */
        const shift = event.shiftKey;
        /** @type {?} */
        const ctrl = event.ctrlKey;
        /** @type {?} */
        const node = this.selectionNode;
        if (!SUPPORTED_KEYS.has(key)) {
            return;
        }
        event.stopPropagation();
        /** @type {?} */
        const keydownArgs = { targetType: 'dataCell', target: this, event: event, cancel: false };
        this.grid.onGridKeydown.emit(keydownArgs);
        if (keydownArgs.cancel) {
            this.selectionService.clear();
            this.selectionService.keyboardState.active = true;
            return;
        }
        if (event.altKey) {
            event.preventDefault();
            this.handleAlt(key, event);
            return;
        }
        this.selectionService.keyboardStateOnKeydown(node, shift, shift && key === 'tab');
        if (key === 'tab') {
            event.preventDefault();
        }
        if (this.editMode) {
            if (NAVIGATION_KEYS.has(key)) {
                if (this.column.inlineEditorTemplate) {
                    return;
                }
                if (['date', 'boolean'].indexOf(this.column.dataType) > -1) {
                    return;
                }
                return;
            }
        }
        if (NAVIGATION_KEYS.has(key)) {
            event.preventDefault();
        }
        // TODO: to be deleted when onFocusChange event is removed #4054
        /** @type {?} */
        const args = { cell: this, groupRow: null, event: event, cancel: false };
        this.grid._onFocusChange.emit(args);
        if (args.cancel) {
            return;
        }
        switch (key) {
            case 'tab':
                this.handleTab(shift);
                break;
            case 'end':
                this.handleEnd(ctrl);
                break;
            case 'home':
                this.handleHome(ctrl);
                break;
            case 'arrowleft':
            case 'left':
                if (ctrl) {
                    this.grid.navigation.onKeydownHome(node.row, false, this.rowStart);
                    break;
                }
                this.grid.navigation.onKeydownArrowLeft(this.nativeElement, this.selectionNode);
                break;
            case 'arrowright':
            case 'right':
                if (ctrl) {
                    this.grid.navigation.onKeydownEnd(node.row, false, this.rowStart);
                    break;
                }
                this.grid.navigation.onKeydownArrowRight(this.nativeElement, this.selectionNode);
                break;
            case 'arrowup':
            case 'up':
                if (ctrl) {
                    this.grid.navigation.navigateTop(this.visibleColumnIndex);
                    break;
                }
                this.grid.navigation.navigateUp(this.row.nativeElement, this.selectionNode);
                break;
            case 'arrowdown':
            case 'down':
                if (ctrl) {
                    this.grid.navigation.navigateBottom(this.visibleColumnIndex);
                    break;
                }
                this.grid.navigation.navigateDown(this.row.nativeElement, this.selectionNode);
                break;
            case 'enter':
            case 'f2':
                this.onKeydownEnterEditMode();
                break;
            case 'escape':
            case 'esc':
                this.onKeydownExitEditMode();
                break;
            case ' ':
            case 'spacebar':
            case 'space':
                if (this.row.rowSelectable) {
                    this.row.checkboxElement.toggle();
                }
                break;
            default:
                return;
        }
    }
    /**
     * @hidden
     * \@internal
     * @return {?}
     */
    onKeydownEnterEditMode() {
        if (this.isInCompositionMode) {
            return;
        }
        if (this.column.editable && !this.row.deleted) {
            if (this.editMode) {
                this.grid.endEdit(true);
                this.nativeElement.focus();
            }
            else {
                this.crudService.begin(this);
            }
        }
    }
    /**
     * @hidden
     * \@internal
     * @return {?}
     */
    onKeydownExitEditMode() {
        if (this.isInCompositionMode) {
            return;
        }
        if (this.editMode) {
            /** @type {?} */
            const args = this.crudService.cell.createEditEventArgs();
            this.grid.onCellEditCancel.emit(args);
            if (args.cancel) {
                return;
            }
            this.grid.endEdit(false);
            this.nativeElement.focus();
        }
    }
    /**
     * If the provided string matches the text in the cell, the text gets highlighted.
     * ```typescript
     * this.cell.highlightText('Cell Value', true);
     * ```
     * \@memberof IgxGridCellComponent
     * @param {?} text
     * @param {?=} caseSensitive
     * @param {?=} exactMatch
     * @return {?}
     */
    highlightText(text, caseSensitive, exactMatch) {
        return this.highlight && this.column.searchable ? this.highlight.highlight(text, caseSensitive, exactMatch) : 0;
    }
    /**
     * Clears the highlight of the text in the cell.
     * ```typescript
     * this.cell.clearHighLight();
     * ```
     * \@memberof IgxGridCellComponent
     * @return {?}
     */
    clearHighlight() {
        if (this.highlight && this.column.searchable) {
            this.highlight.clearHighlight();
        }
    }
    /**
     * @hidden
     * \@internal
     * @param {?} range
     * @return {?}
     */
    calculateSizeToFit(range) {
        return Math.max(...Array.from(this.nativeElement.children)
            .map((child) => getNodeSizeViaRange(range, child)));
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    isToggleKey(key) {
        return ROW_COLLAPSE_KEYS.has(key) || ROW_EXPAND_KEYS.has(key);
    }
}
IgxGridCellComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'igx-grid-cell',
                template: "<ng-template #defaultCell>\n    <div igxTextHighlight style=\"pointer-events: none\" [cssClass]=\"highlightClass\" [activeCssClass]=\"activeHighlightClass\" [groupName]=\"gridID\"\n        [value]=\"formatter ? formatter(value) : column.dataType === 'number' ? (value | igxdecimal: grid.locale) : column.dataType === 'date' ? (value | igxdate: grid.locale) : value\"\n        [row]=\"rowData\" [column]=\"this.column.field\" [containerClass]=\"'igx-grid__td-text'\"\n        class=\"igx-grid__td-text\">{{ formatter ? formatter(value) : column.dataType === 'number' ? (value | igxdecimal:\n        grid.locale) : column.dataType === 'date' ? (value | igxdate: grid.locale) : value }}</div>\n</ng-template>\n<ng-template #inlineEditor let-cell=\"cell\">\n    <ng-container *ngIf=\"column.dataType === 'string'\">\n        <igx-input-group displayDensity=\"compact\">\n            <input igxInput [value]=\"editValue\" (input)=\"editValue = $event.target.value\" [igxFocus]=\"focused\" />\n        </igx-input-group>\n    </ng-container>\n    <ng-container *ngIf=\"column.dataType === 'number'\">\n        <igx-input-group displayDensity=\"compact\">\n            <input igxInput [value]=\"editValue\" (input)=\"editValue = $event.target.value\" [igxFocus]=\"focused\" type=\"number\">\n        </igx-input-group>\n    </ng-container>\n    <ng-container *ngIf=\"column.dataType === 'boolean'\">\n        <igx-checkbox (change)=\"editValue = $event.checked\" [value]=\"editValue\" [checked]=\"editValue\"\n            [igxFocus]=\"focused\" [disableRipple]=\"true\"></igx-checkbox>\n    </ng-container>\n    <ng-container *ngIf=\"column.dataType === 'date'\">\n        <igx-date-picker [style.width.%]=\"100\" [outlet]=\"grid.outletDirective\" mode=\"dropdown\" (onSelection)=\"editValue = $event\"\n            [locale]=\"grid.locale\" [value]=\"editValue\" [igxFocus]=\"focused\" [labelVisibility]=\"false\">\n        </igx-date-picker>\n    </ng-container>\n</ng-template>\n<ng-container *ngTemplateOutlet=\"template; context: context\">\n</ng-container>\n"
            }] }
];
/** @nocollapse */
IgxGridCellComponent.ctorParameters = () => [
    { type: IgxGridSelectionService },
    { type: IgxGridCRUDService },
    { type: GridBaseAPIService },
    { type: IgxSelectionAPIService },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IgxGridCellComponent.propDecorators = {
    column: [{ type: Input }],
    row: [{ type: Input }],
    rowData: [{ type: Input }],
    cellTemplate: [{ type: Input }],
    value: [{ type: Input }],
    formatter: [{ type: Input }],
    rowIndex: [{ type: HostBinding, args: ['attr.data-rowIndex',] }],
    visibleColumnIndex: [{ type: HostBinding, args: ['attr.data-visibleIndex',] }, { type: Input }],
    lastPinned: [{ type: Input }, { type: HostBinding, args: ['class.igx-grid__td--pinned-last',] }],
    editMode: [{ type: Input }, { type: HostBinding, args: ['class.igx-grid__td--editing',] }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    readonly: [{ type: HostBinding, args: ['attr.aria-readonly',] }],
    gridRowSpan: [{ type: HostBinding, args: ['style.-ms-grid-row-span',] }],
    gridColumnSpan: [{ type: HostBinding, args: ['style.-ms-grid-column-span',] }],
    rowEnd: [{ type: HostBinding, args: ['style.grid-row-end',] }],
    colEnd: [{ type: HostBinding, args: ['style.grid-column-end',] }],
    rowStart: [{ type: HostBinding, args: ['style.-ms-grid-row',] }, { type: HostBinding, args: ['style.grid-row-start',] }],
    colStart: [{ type: HostBinding, args: ['style.-ms-grid-column',] }, { type: HostBinding, args: ['style.grid-column-start',] }],
    describedby: [{ type: HostBinding, args: ['attr.aria-describedby',] }],
    width: [{ type: HostBinding, args: ['style.min-width',] }, { type: HostBinding, args: ['style.max-width',] }, { type: HostBinding, args: ['style.flex-basis',] }, { type: Input }],
    selected: [{ type: HostBinding, args: ['attr.aria-selected',] }, { type: HostBinding, args: ['class.igx-grid__td--selected',] }],
    dirty: [{ type: HostBinding, args: ['class.igx-grid__td--edited',] }],
    focused: [{ type: HostBinding, args: ['class.igx-grid__td--active',] }],
    defaultCellTemplate: [{ type: ViewChild, args: ['defaultCell', { read: TemplateRef, static: true },] }],
    inlineEditorTemplate: [{ type: ViewChild, args: ['inlineEditor', { read: TemplateRef, static: true },] }],
    highlight: [{ type: ViewChild, args: [IgxTextHighlightDirective, { read: IgxTextHighlightDirective, static: false },] }],
    onDoubleClick: [{ type: HostListener, args: ['dblclick', ['$event'],] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onContextMenu: [{ type: HostListener, args: ['contextmenu', ['$event'],] }],
    onFocus: [{ type: HostListener, args: ['focus', ['$event'],] }],
    onBlur: [{ type: HostListener, args: ['blur',] }],
    dispatchEvent: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
tslib_1.__decorate([
    DeprecateProperty(`'inEditMode' is deprecated\nUse 'editMode' to get the current state and 'setEditMode(boolean)' as a setter`),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], IgxGridCellComponent.prototype, "inEditMode", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxGridCellComponent.prototype._vIndex;
    /**
     * Gets the column of the cell.
     * ```typescript
     *  let cellColumn = this.cell.column;
     * ```
     * \@memberof IgxGridCellComponent
     * @type {?}
     */
    IgxGridCellComponent.prototype.column;
    /**
     * Gets the row of the cell.
     * ```typescript
     * let cellRow = this.cell.row;
     * ```
     * \@memberof IgxGridCellComponent
     * @type {?}
     */
    IgxGridCellComponent.prototype.row;
    /**
     * Gets the data of the row of the cell.
     * ```typescript
     * let rowData = this.cell.rowData;
     * ```
     * \@memberof IgxGridCellComponent
     * @type {?}
     */
    IgxGridCellComponent.prototype.rowData;
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
     * \@ViewChild('cellTemplate',{read: TemplateRef})
     * cellTemplate: TemplateRef<any>;
     * ```
     * ```typescript
     * this.cell.cellTemplate = this.cellTemplate;
     * ```
     * ```typescript
     * let template =  this.cell.cellTemplate;
     * ```
     * \@memberof IgxGridCellComponent
     * @type {?}
     */
    IgxGridCellComponent.prototype.cellTemplate;
    /**
     * Sets/gets the cell value.
     * ```typescript
     * this.cell.value = "Cell Value";
     * ```
     * ```typescript
     * let cellValue = this.cell.value;
     * ```
     * \@memberof IgxGridCellComponent
     * @type {?}
     */
    IgxGridCellComponent.prototype.value;
    /**
     * Sets/gets the highlight class of the cell.
     * Default value is `"igx-highlight"`.
     * ```typescript
     * let highlightClass = this.cell.highlightClass;
     * ```
     * ```typescript
     * this.cell.highlightClass = 'igx-cell-highlight';
     * ```
     * \@memberof IgxGridCellComponent
     * @type {?}
     */
    IgxGridCellComponent.prototype.highlightClass;
    /**
     * Sets/gets the active highlight class class of the cell.
     * Default value is `"igx-highlight__active"`.
     * ```typescript
     * let activeHighlightClass = this.cell.activeHighlightClass;
     * ```
     * ```typescript
     * this.cell.activeHighlightClass = 'igx-cell-highlight_active';
     * ```
     * \@memberof IgxGridCellComponent
     * @type {?}
     */
    IgxGridCellComponent.prototype.activeHighlightClass;
    /**
     * Gets the cell formatter.
     * ```typescript
     * let cellForamatter = this.cell.formatter;
     * ```
     * \@memberof IgxGridCellComponent
     * @type {?}
     */
    IgxGridCellComponent.prototype.formatter;
    /**
     * @hidden
     * \@internal
     * @type {?}
     */
    IgxGridCellComponent.prototype.lastPinned;
    /**
     * Returns whether the cell is in edit mode.
     * @type {?}
     */
    IgxGridCellComponent.prototype.editMode;
    /**
     * Sets/get the `tabindex` property of the cell.
     * Default value is `0`.
     * ```typescript
     * this.cell.tabindex = 1;
     * ```
     * ```typescript
     * let cellTabIndex = this.cell.tabindex;
     * ```
     * \@memberof IgxGridCellComponent
     * @type {?}
     */
    IgxGridCellComponent.prototype.tabindex;
    /**
     * Sets/get the `role` property of the cell.
     * Default value is `"gridcell"`.
     * ```typescript
     * this.cell.role = 'grid-cell';
     * ```
     * ```typescript
     * let cellRole = this.cell.role;
     * ```
     * \@memberof IgxGridCellComponent
     * @type {?}
     */
    IgxGridCellComponent.prototype.role;
    /**
     * Gets the width of the cell.
     * ```typescript
     * let cellWidth = this.cell.width;
     * ```
     * \@memberof IgxGridCellComponent
     * @type {?}
     */
    IgxGridCellComponent.prototype.width;
    /**
     * @hidden
     * \@internal
     * @type {?}
     */
    IgxGridCellComponent.prototype.focused;
    /**
     * @type {?}
     * @protected
     */
    IgxGridCellComponent.prototype.defaultCellTemplate;
    /**
     * @type {?}
     * @protected
     */
    IgxGridCellComponent.prototype.inlineEditorTemplate;
    /**
     * @type {?}
     * @protected
     */
    IgxGridCellComponent.prototype.isInCompositionMode;
    /**
     * @type {?}
     * @protected
     */
    IgxGridCellComponent.prototype.compositionStartHandler;
    /**
     * @type {?}
     * @protected
     */
    IgxGridCellComponent.prototype.compositionEndHandler;
    /**
     * @type {?}
     * @private
     */
    IgxGridCellComponent.prototype._highlight;
    /**
     *
     * @hidden
     * \@internal
     * @type {?}
     */
    IgxGridCellComponent.prototype.pointerdown;
    /**
     *
     * @hidden
     * \@internal
     * @type {?}
     */
    IgxGridCellComponent.prototype.pointerenter;
    /**
     * @hidden
     * \@internal
     * @type {?}
     */
    IgxGridCellComponent.prototype.pointerup;
    /**
     * @type {?}
     * @protected
     */
    IgxGridCellComponent.prototype.selectionService;
    /**
     * @type {?}
     * @protected
     */
    IgxGridCellComponent.prototype.crudService;
    /** @type {?} */
    IgxGridCellComponent.prototype.gridAPI;
    /** @type {?} */
    IgxGridCellComponent.prototype.selection;
    /** @type {?} */
    IgxGridCellComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    IgxGridCellComponent.prototype.element;
    /**
     * @type {?}
     * @protected
     */
    IgxGridCellComponent.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2NlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNILHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULE1BQU0sRUFLVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHNUksT0FBTyxFQUFFLHVCQUF1QixFQUFrQixrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7Ozs7OztBQW9CaEUsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7Ozs7OztJQWllN0IsWUFDYyxnQkFBeUMsRUFDekMsV0FBK0IsRUFDbEMsT0FBcUUsRUFDckUsU0FBaUMsRUFDakMsR0FBc0IsRUFDckIsT0FBbUIsRUFDakIsSUFBWTtRQU5aLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFDekMsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQ2xDLFlBQU8sR0FBUCxPQUFPLENBQThEO1FBQ3JFLGNB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LG1EQUFzQzs7Ozs7SUFDdEMsdURBQWtDOzs7OztJQUNsQyxxREFBZ0M7Ozs7O0lBQ2hDLDBDQUE4Qzs7Ozs7OztJQTBKOUMsMkNBUUM7Ozs7Ozs7SUFPRCw0Q0FLQzs7Ozs7O0lBTUQseUNBU0M7Ozs7O0lBekxHLGdEQUFtRDs7Ozs7SUFDbkQsMkNBQXlDOztJQUN6Qyx1Q0FBNEU7O0lBQzVFLHlDQUF3Qzs7SUFDeEMsbUNBQTZCOzs7OztJQUM3Qix1Q0FBMkI7Ozs7O0lBQzNCLG9DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIElucHV0LFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFZpZXdDaGlsZCxcbiAgICBOZ1pvbmUsXG4gICAgT25Jbml0LFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkNoYW5nZXMsXG4gICAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneFNlbGVjdGlvbkFQSVNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlbGVjdGlvbic7XG5pbXBvcnQgeyBJZ3hUZXh0SGlnaGxpZ2h0RGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy90ZXh0LWhpZ2hsaWdodC90ZXh0LWhpZ2hsaWdodC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgR3JpZEJhc2VBUElTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuL2NvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgZ2V0Tm9kZVNpemVWaWFSYW5nZSwgUk9XX0NPTExBUFNFX0tFWVMsIFJPV19FWFBBTkRfS0VZUywgU1VQUE9SVEVEX0tFWVMsIE5BVklHQVRJT05fS0VZUywgaXNJRSwgaXNMZWZ0Q2xpY2sgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgSWd4R3JpZEJhc2VDb21wb25lbnQsIElHcmlkRWRpdEV2ZW50QXJncywgSUdyaWREYXRhQmluZGFibGUgfSBmcm9tICcuL2dyaWQtYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4R3JpZFNlbGVjdGlvblNlcnZpY2UsIElTZWxlY3Rpb25Ob2RlLCBJZ3hHcmlkQ1JVRFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL2dyaWQtc2VsZWN0aW9uJztcbmltcG9ydCB7IERlcHJlY2F0ZVByb3BlcnR5IH0gZnJvbSAnLi4vY29yZS9kZXByZWNhdGVEZWNvcmF0b3JzJztcblxuLyoqXG4gKiBQcm92aWRpbmcgcmVmZXJlbmNlIHRvIGBJZ3hHcmlkQ2VsbENvbXBvbmVudGA6XG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBAVmlld0NoaWxkKCdncmlkJywgeyByZWFkOiBJZ3hHcmlkQ29tcG9uZW50IH0pXG4gKiAgcHVibGljIGdyaWQ6IElneEdyaWRDb21wb25lbnQ7XG4gKiBgYGBcbiAqIGBgYHR5cGVzY3JpcHRcbiAqICBsZXQgY29sdW1uID0gdGhpcy5ncmlkLmNvbHVtbkxpc3QuZmlyc3Q7XG4gKiBgYGBcbiAqIGBgYHR5cGVzY3JpcHRcbiAqICBsZXQgY2VsbCA9IGNvbHVtbi5jZWxsc1swXTtcbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBzZWxlY3RvcjogJ2lneC1ncmlkLWNlbGwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jZWxsLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hHcmlkQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX3ZJbmRleCA9IC0xO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY29sdW1uIG9mIHRoZSBjZWxsLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgbGV0IGNlbGxDb2x1bW4gPSB0aGlzLmNlbGwuY29sdW1uO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQ2VsbENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcm93IG9mIHRoZSBjZWxsLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY2VsbFJvdyA9IHRoaXMuY2VsbC5yb3c7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcm93OiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBkYXRhIG9mIHRoZSByb3cgb2YgdGhlIGNlbGwuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCByb3dEYXRhID0gdGhpcy5jZWxsLnJvd0RhdGE7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcm93RGF0YTogYW55O1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSB0ZW1wbGF0ZSBvZiB0aGUgY2VsbC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPG5nLXRlbXBsYXRlICNjZWxsVGVtcGxhdGUgaWd4Q2VsbCBsZXQtdmFsdWU+XG4gICAgICogICA8ZGl2IHN0eWxlPVwiZm9udC1zdHlsZTogb2JsaXF1ZTsgY29sb3I6Ymx1ZXZpb2xldDsgYmFja2dyb3VuZDpyZWRcIj5cbiAgICAgKiAgICAgICA8c3Bhbj57e3ZhbHVlfX08L3NwYW4+XG4gICAgICogICA8L2Rpdj5cbiAgICAgKiA8L25nLXRlbXBsYXRlPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKCdjZWxsVGVtcGxhdGUnLHtyZWFkOiBUZW1wbGF0ZVJlZn0pXG4gICAgICogY2VsbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmNlbGwuY2VsbFRlbXBsYXRlID0gdGhpcy5jZWxsVGVtcGxhdGU7XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB0ZW1wbGF0ZSA9ICB0aGlzLmNlbGwuY2VsbFRlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQ2VsbENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNlbGxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgY2VsbCB2YWx1ZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jZWxsLnZhbHVlID0gXCJDZWxsIFZhbHVlXCI7XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjZWxsVmFsdWUgPSB0aGlzLmNlbGwudmFsdWU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmFsdWU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgaGlnaGxpZ2h0IGNsYXNzIG9mIHRoZSBjZWxsLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYFwiaWd4LWhpZ2hsaWdodFwiYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGhpZ2hsaWdodENsYXNzID0gdGhpcy5jZWxsLmhpZ2hsaWdodENsYXNzO1xuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmNlbGwuaGlnaGxpZ2h0Q2xhc3MgPSAnaWd4LWNlbGwtaGlnaGxpZ2h0JztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZENlbGxDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgaGlnaGxpZ2h0Q2xhc3MgPSAnaWd4LWhpZ2hsaWdodCc7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGFjdGl2ZSBoaWdobGlnaHQgY2xhc3MgY2xhc3Mgb2YgdGhlIGNlbGwuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgXCJpZ3gtaGlnaGxpZ2h0X19hY3RpdmVcImAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBhY3RpdmVIaWdobGlnaHRDbGFzcyA9IHRoaXMuY2VsbC5hY3RpdmVIaWdobGlnaHRDbGFzcztcbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jZWxsLmFjdGl2ZUhpZ2hsaWdodENsYXNzID0gJ2lneC1jZWxsLWhpZ2hsaWdodF9hY3RpdmUnO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQ2VsbENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBhY3RpdmVIaWdobGlnaHRDbGFzcyA9ICdpZ3gtaGlnaGxpZ2h0X19hY3RpdmUnO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY2VsbCBmb3JtYXR0ZXIuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjZWxsRm9yYW1hdHRlciA9IHRoaXMuY2VsbC5mb3JtYXR0ZXI7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBmb3JtYXR0ZXI6ICh2YWx1ZTogYW55KSA9PiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjZWxsIHRlbXBsYXRlIGNvbnRleHQgb2JqZWN0LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgbGV0IGNvbnRleHQgPSB0aGlzLmNlbGwuY29udGV4dCgpO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQ2VsbENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBjb250ZXh0KCk6IGFueSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAkaW1wbGljaXQ6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICBjZWxsOiB0aGlzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY2VsbCB0ZW1wbGF0ZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRlbXBsYXRlID0gdGhpcy5jZWxsLnRlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQ2VsbENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCB0ZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdE1vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGlubGluZUVkaXRvclRlbXBsYXRlID0gdGhpcy5jb2x1bW4uaW5saW5lRWRpdG9yVGVtcGxhdGU7XG4gICAgICAgICAgICByZXR1cm4gaW5saW5lRWRpdG9yVGVtcGxhdGUgPyBpbmxpbmVFZGl0b3JUZW1wbGF0ZSA6IHRoaXMuaW5saW5lRWRpdG9yVGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2VsbFRlbXBsYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jZWxsVGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdENlbGxUZW1wbGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgaWRgIG9mIHRoZSBncmlkIGluIHdoaWNoIHRoZSBjZWxsIGlzIHN0b3JlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGdyaWRJZCA9IHRoaXMuY2VsbC5ncmlkSUQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGdyaWRJRCgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3cuZ3JpZElEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGdyaWQgb2YgdGhlIGNlbGwuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBncmlkID0gdGhpcy5jZWxsLmdyaWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGdyaWQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZEFQSS5ncmlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGBpbmRleGAgb2YgdGhlIHJvdyB3aGVyZSB0aGUgY2VsbCBpcyBzdG9yZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCByb3dJbmRleCA9IHRoaXMuY2VsbC5yb3dJbmRleDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZENlbGxDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1yb3dJbmRleCcpXG4gICAgZ2V0IHJvd0luZGV4KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdy5pbmRleDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgaW5kZXhgIG9mIHRoZSBjZWxsIGNvbHVtbi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNvbHVtbkluZGV4ID0gdGhpcy5jZWxsLmNvbHVtbkluZGV4O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQ2VsbENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBjb2x1bW5JbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4uaW5kZXg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdmlzaWJsZSBgaW5kZXhgIG9mIHRoZSBpbiB3aGljaCB0aGUgY2VsbCBpcyBzdG9yZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB2aXNpYmxlQ29sdW1uSW5kZXggPSB0aGlzLmNlbGwudmlzaWJsZUNvbHVtbkluZGV4O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQ2VsbENvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5kYXRhLXZpc2libGVJbmRleCcpXG4gICAgQElucHV0KClcbiAgICBnZXQgdmlzaWJsZUNvbHVtbkluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4uY29sdW1uTGF5b3V0Q2hpbGQgPyB0aGlzLmNvbHVtbi52aXNpYmxlSW5kZXggOiB0aGlzLl92SW5kZXg7XG4gICAgfVxuXG4gICAgc2V0IHZpc2libGVDb2x1bW5JbmRleCh2YWwpIHtcbiAgICAgICAgdGhpcy5fdkluZGV4ID0gdmFsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIElEIG9mIHRoZSBjZWxsLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY2VsbElEID0gdGhpcy5jZWxsLmNlbGxJRDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZENlbGxDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGNlbGxJRCgpIHtcbiAgICAgICAgY29uc3QgcHJpbWFyeUtleSA9IHRoaXMuZ3JpZC5wcmltYXJ5S2V5O1xuICAgICAgICBjb25zdCByb3dJRCA9IHByaW1hcnlLZXkgPyB0aGlzLnJvd0RhdGFbcHJpbWFyeUtleV0gOiB0aGlzLnJvd0RhdGE7XG4gICAgICAgIHJldHVybiB7IHJvd0lELCBjb2x1bW5JRDogdGhpcy5jb2x1bW5JbmRleCwgcm93SW5kZXg6IHRoaXMucm93SW5kZXggfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBuYXRpdmVFbGVtZW50IG9mIHRoZSBjZWxsLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY2VsbE5hdGl2ZUVsZW1lbnQgPSB0aGlzLmNlbGwubmF0aXZlRWxlbWVudDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZENlbGxDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgbmF0aXZlRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIFVzZSBgY2VsbC5lZGl0TW9kZWAgYXMgYSBnZXR0ZXIgYW5kXG4gICAgICogYGNlbGwuc2V0RWRpdE1vZGUodHJ1ZSB8IGZhbHNlKWAgdG8gc3RhcnQvZXhpdCBlZGl0IG1vZGUuXG4gICAgICpcbiAgICAgKiBHZXRzL3NldHMgd2hldGhlciB0aGUgY2VsbCBpcyBpbiBlZGl0IG1vZGUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc0NlbGxJbkVkaXRNb2RlID0gdGhpcy5jZWxsLmluRWRpdE1vZGU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgQERlcHJlY2F0ZVByb3BlcnR5KGAnaW5FZGl0TW9kZScgaXMgZGVwcmVjYXRlZFxcblVzZSAnZWRpdE1vZGUnIHRvIGdldCB0aGUgY3VycmVudCBzdGF0ZSBhbmQgJ3NldEVkaXRNb2RlKGJvb2xlYW4pJyBhcyBhIHNldHRlcmApXG4gICAgZ2V0IGluRWRpdE1vZGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRNb2RlO1xuICAgIH1cblxuICAgIHNldCBpbkVkaXRNb2RlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc2V0RWRpdE1vZGUodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWdyaWRfX3RkLS1waW5uZWQtbGFzdCcpXG4gICAgbGFzdFBpbm5lZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBjZWxsIGlzIGluIGVkaXQgbW9kZS5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWdyaWRfX3RkLS1lZGl0aW5nJylcbiAgICBlZGl0TW9kZSA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXQgdGhlIGB0YWJpbmRleGAgcHJvcGVydHkgb2YgdGhlIGNlbGwuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgMGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuY2VsbC50YWJpbmRleCA9IDE7XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjZWxsVGFiSW5kZXggPSB0aGlzLmNlbGwudGFiaW5kZXg7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgICBwdWJsaWMgdGFiaW5kZXggPSAwO1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXQgdGhlIGByb2xlYCBwcm9wZXJ0eSBvZiB0aGUgY2VsbC5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBcImdyaWRjZWxsXCJgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmNlbGwucm9sZSA9ICdncmlkLWNlbGwnO1xuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY2VsbFJvbGUgPSB0aGlzLmNlbGwucm9sZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZENlbGxDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gICAgcHVibGljIHJvbGUgPSAnZ3JpZGNlbGwnO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIHRoZSBjZWxsIGlzIGVkaXRhYmxlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNDZWxsUmVhZG9ubHkgPSB0aGlzLmNlbGwucmVhZG9ubHk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtcmVhZG9ubHknKVxuICAgIGdldCByZWFkb25seSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmNvbHVtbi5lZGl0YWJsZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLi1tcy1ncmlkLXJvdy1zcGFuJylcbiAgICBnZXQgZ3JpZFJvd1NwYW4oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLmdyaWRSb3dTcGFuO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnc3R5bGUuLW1zLWdyaWQtY29sdW1uLXNwYW4nKVxuICAgIGdldCBncmlkQ29sdW1uU3BhbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4uZ3JpZENvbHVtblNwYW47XG4gICAgfVxuXG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmdyaWQtcm93LWVuZCcpXG4gICAgZ2V0IHJvd0VuZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4ucm93RW5kO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnc3R5bGUuZ3JpZC1jb2x1bW4tZW5kJylcbiAgICBnZXQgY29sRW5kKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbi5jb2xFbmQ7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS4tbXMtZ3JpZC1yb3cnKVxuICAgIEBIb3N0QmluZGluZygnc3R5bGUuZ3JpZC1yb3ctc3RhcnQnKVxuICAgIGdldCByb3dTdGFydCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4ucm93U3RhcnQ7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS4tbXMtZ3JpZC1jb2x1bW4nKVxuICAgIEBIb3N0QmluZGluZygnc3R5bGUuZ3JpZC1jb2x1bW4tc3RhcnQnKVxuICAgIGdldCBjb2xTdGFydCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4uY29sU3RhcnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHN0cmluZyBjb250YWluaW5nIHRoZSBncmlkIGBpZGAgYW5kIHRoZSBjb2x1bW4gYGZpZWxkYCBjb25jYXRlbmF0ZWQgYnkgXCJfXCIuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBkZXNjcmliZWRCeSA9IHRoaXMuY2VsbC5kZXNjcmliZWRCeTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZENlbGxDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kZXNjcmliZWRieScpXG4gICAgZ2V0IGRlc2NyaWJlZGJ5KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnJvdy5ncmlkSUR9XyR7dGhpcy5jb2x1bW4uZmllbGR9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB3aWR0aCBvZiB0aGUgY2VsbC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNlbGxXaWR0aCA9IHRoaXMuY2VsbC53aWR0aDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZENlbGxDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1pbi13aWR0aCcpXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5tYXgtd2lkdGgnKVxuICAgIEBIb3N0QmluZGluZygnc3R5bGUuZmxleC1iYXNpcycpXG4gICAgQElucHV0KClcbiAgICB3aWR0aCA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIHRoZSBjZWxsIGlzIHNlbGVjdGVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNTZWxlY3RlZCA9IHRoaXMuY2VsbC5zZWxlY3RlZDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZENlbGxDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1zZWxlY3RlZCcpXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZ3JpZF9fdGQtLXNlbGVjdGVkJylcbiAgICBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ2VsbFNlbGVjdGVkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0cy9kZXNlbGVjdHMgdGhlIGNlbGwuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuY2VsbC5zZWxlY3RlZCA9IHRydWUuXG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgc2V0IHNlbGVjdGVkKHZhbDogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5zZWxlY3Rpb25Ob2RlO1xuICAgICAgICB2YWwgPyB0aGlzLnNlbGVjdGlvblNlcnZpY2UuYWRkKG5vZGUpIDogdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLnJlbW92ZShub2RlKTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1ncmlkX190ZC0tZWRpdGVkJylcbiAgICBnZXQgZGlydHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmdyaWQucm93RWRpdGFibGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0N1cnJlbnRTdGF0ZSA9IHRoaXMuZ3JpZC50cmFuc2FjdGlvbnMuZ2V0QWdncmVnYXRlZFZhbHVlKHRoaXMucm93LnJvd0lELCBmYWxzZSk7XG4gICAgICAgICAgICBpZiAocm93Q3VycmVudFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvd0N1cnJlbnRTdGF0ZVt0aGlzLmNvbHVtbi5maWVsZF0gIT09IHVuZGVmaW5lZCAmJiByb3dDdXJyZW50U3RhdGVbdGhpcy5jb2x1bW4uZmllbGRdICE9PSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgcm93VHJhbnNhY3Rpb246IFN0YXRlID0gdGhpcy5ncmlkLnRyYW5zYWN0aW9ucy5nZXRTdGF0ZSh0aGlzLnJvdy5yb3dJRCk7XG4gICAgICAgICAgICByZXR1cm4gcm93VHJhbnNhY3Rpb24gJiYgcm93VHJhbnNhY3Rpb24udmFsdWUgJiYgcm93VHJhbnNhY3Rpb24udmFsdWVbdGhpcy5jb2x1bW4uZmllbGRdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGN1cnJlbnQgZWRpdCB2YWx1ZSB3aGlsZSBhIGNlbGwgaXMgaW4gZWRpdCBtb2RlLlxuICAgICAqIE9ubHkgZm9yIGNlbGwgZWRpdGluZyBtb2RlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmNlbGwuZWRpdFZhbHVlID0gdmFsdWU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHNldCBlZGl0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuY3J1ZFNlcnZpY2UuaW5FZGl0TW9kZSkge1xuICAgICAgICAgICAgdGhpcy5jcnVkU2VydmljZS5jZWxsLmVkaXRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY3VycmVudCBlZGl0IHZhbHVlIHdoaWxlIGEgY2VsbCBpcyBpbiBlZGl0IG1vZGUuXG4gICAgICogT25seSBmb3IgY2VsbCBlZGl0aW5nIG1vZGUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBlZGl0VmFsdWUgPSB0aGlzLmNlbGwuZWRpdFZhbHVlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQ2VsbENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZWRpdFZhbHVlKCkge1xuICAgICAgICBpZiAodGhpcy5jcnVkU2VydmljZS5pbkVkaXRNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcnVkU2VydmljZS5jZWxsLmVkaXRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgY2VsbCBpcyBlZGl0YWJsZS5cbiAgICAgKi9cbiAgICBnZXQgZWRpdGFibGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbi5lZGl0YWJsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZ3JpZF9fdGQtLWFjdGl2ZScpXG4gICAgcHVibGljIGZvY3VzZWQgPSBmYWxzZTtcblxuICAgIEBWaWV3Q2hpbGQoJ2RlZmF1bHRDZWxsJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGRlZmF1bHRDZWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdpbmxpbmVFZGl0b3InLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgaW5saW5lRWRpdG9yVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKElneFRleHRIaWdobGlnaHREaXJlY3RpdmUsIHsgcmVhZDogSWd4VGV4dEhpZ2hsaWdodERpcmVjdGl2ZSwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHByb3RlY3RlZCBzZXQgaGlnaGxpZ2h0KHZhbHVlOiBJZ3hUZXh0SGlnaGxpZ2h0RGlyZWN0aXZlKSB7XG4gICAgICAgIHRoaXMuX2hpZ2hsaWdodCA9IHZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLl9oaWdobGlnaHQgJiYgdGhpcy5ncmlkLmxhc3RTZWFyY2hJbmZvLnNlYXJjaFRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodC5oaWdobGlnaHQodGhpcy5ncmlkLmxhc3RTZWFyY2hJbmZvLnNlYXJjaFRleHQsXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLmxhc3RTZWFyY2hJbmZvLmNhc2VTZW5zaXRpdmUsXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLmxhc3RTZWFyY2hJbmZvLmV4YWN0TWF0Y2gpO1xuICAgICAgICAgICAgdGhpcy5faGlnaGxpZ2h0LmFjdGl2YXRlSWZOZWNlc3NhcnkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgaGlnaGxpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGlnaGxpZ2h0O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgc2VsZWN0aW9uTm9kZSgpOiBJU2VsZWN0aW9uTm9kZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByb3c6IHRoaXMucm93SW5kZXgsXG4gICAgICAgICAgICBjb2x1bW46IHRoaXMuY29sdW1uLmNvbHVtbkxheW91dENoaWxkID8gdGhpcy5jb2x1bW4ucGFyZW50LnZpc2libGVJbmRleCA6IHRoaXMudmlzaWJsZUNvbHVtbkluZGV4LFxuICAgICAgICAgICAgbGF5b3V0OiB0aGlzLmNvbHVtbi5jb2x1bW5MYXlvdXRDaGlsZCA/IHtcbiAgICAgICAgICAgICAgICByb3dTdGFydDogdGhpcy5jb2x1bW4ucm93U3RhcnQsXG4gICAgICAgICAgICAgICAgY29sU3RhcnQ6IHRoaXMuY29sdW1uLmNvbFN0YXJ0LFxuICAgICAgICAgICAgICAgIHJvd0VuZDogdGhpcy5jb2x1bW4ucm93RW5kLFxuICAgICAgICAgICAgICAgIGNvbEVuZDogdGhpcy5jb2x1bW4uY29sRW5kLFxuICAgICAgICAgICAgICAgIGNvbHVtblZpc2libGVJbmRleDogdGhpcy52aXNpYmxlQ29sdW1uSW5kZXhcbiAgICAgICAgICAgIH0gOiBudWxsXG4gICAgICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpc0luQ29tcG9zaXRpb25Nb2RlID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIGNvbXBvc2l0aW9uU3RhcnRIYW5kbGVyO1xuICAgIHByb3RlY3RlZCBjb21wb3NpdGlvbkVuZEhhbmRsZXI7XG4gICAgcHJpdmF0ZSBfaGlnaGxpZ2h0OiBJZ3hUZXh0SGlnaGxpZ2h0RGlyZWN0aXZlO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHNlbGVjdGlvblNlcnZpY2U6IElneEdyaWRTZWxlY3Rpb25TZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgY3J1ZFNlcnZpY2U6IElneEdyaWRDUlVEU2VydmljZSxcbiAgICAgICAgcHVibGljIGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPixcbiAgICAgICAgcHVibGljIHNlbGVjdGlvbjogSWd4U2VsZWN0aW9uQVBJU2VydmljZSxcbiAgICAgICAgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgcHJvdGVjdGVkIHpvbmU6IE5nWm9uZSkgeyB9XG5cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHRoaXMucG9pbnRlcmRvd24pO1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJlbnRlcicsIHRoaXMucG9pbnRlcmVudGVyKTtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCB0aGlzLnBvaW50ZXJ1cCk7XG5cbiAgICAgICAgICAgIC8vIElFIDExIHdvcmthcm91bmRzXG4gICAgICAgICAgICBpZiAoaXNJRSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb3NpdGlvblN0YXJ0SGFuZGxlciA9ICgpID0+IHRoaXMuaXNJbkNvbXBvc2l0aW9uTW9kZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb3NpdGlvbkVuZEhhbmRsZXIgPSAoKSA9PiB0aGlzLmlzSW5Db21wb3NpdGlvbk1vZGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBIaXR0aW5nIEVudGVyIHdpdGggSU1FIHN1Ym1pdHMgYW5kIGV4aXRzIGZyb20gZWRpdCBtb2RlIGluc3RlYWQgb2YgZmlyc3QgY2xvc2luZyB0aGUgSU1FIGRpYWxvZ1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbnN0YXJ0JywgdGhpcy5jb21wb3NpdGlvblN0YXJ0SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uZW5kJywgdGhpcy5jb21wb3NpdGlvbkVuZEhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLnBvaW50ZXJkb3duKTtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZW50ZXInLCB0aGlzLnBvaW50ZXJlbnRlcik7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdGhpcy5wb2ludGVydXApO1xuXG4gICAgICAgICAgICBpZiAoaXNJRSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uc3RhcnQnLCB0aGlzLmNvbXBvc2l0aW9uU3RhcnRIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25lbmQnLCB0aGlzLmNvbXBvc2l0aW9uRW5kSGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBfdXBkYXRlQ1JVRFN0YXR1cygpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdE1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNydWQgPSB0aGlzLmNydWRTZXJ2aWNlO1xuICAgICAgICBjb25zdCBlZGl0YWJsZUNlbGwgPSB0aGlzLmNydWRTZXJ2aWNlLmNlbGw7XG4gICAgICAgIGNvbnN0IGVkaXRNb2RlID0gISEoY3J1ZC5yb3cgfHwgY3J1ZC5jZWxsKTtcblxuICAgICAgICBpZiAodGhpcy5lZGl0YWJsZSAmJiBlZGl0TW9kZSAmJiAhdGhpcy5yb3cuZGVsZXRlZCkge1xuICAgICAgICAgICAgaWYgKGVkaXRhYmxlQ2VsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZEFQSS51cGRhdGVfY2VsbChlZGl0YWJsZUNlbGwsIGVkaXRhYmxlQ2VsbC5lZGl0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3J1ZC5lbmQoKTtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICBjcnVkLmJlZ2luKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVkaXRhYmxlQ2VsbCAmJiBjcnVkLnNhbWVSb3codGhpcy5yb3dJbmRleCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZEFQSS5zdWJtaXRfdmFsdWUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlZGl0TW9kZSAmJiAhY3J1ZC5zYW1lUm93KHRoaXMucm93SW5kZXgpKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQuZW5kRWRpdCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgd2hldGhlciB0aGUgY2VsbCBpcyBzZWxlY3RlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzQ2VsbFNlbGVjdGVkID0gdGhpZC5jZWxsLmlzQ2VsbFNlbGVjdGVkKCk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGlzQ2VsbFNlbGVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLnNlbGVjdGVkKHRoaXMuc2VsZWN0aW9uTm9kZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmIChjaGFuZ2VzLnZhbHVlICYmICFjaGFuZ2VzLnZhbHVlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oaWdobGlnaHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodC5sYXN0U2VhcmNoSW5mby5zZWFyY2hlZFRleHQgPSB0aGlzLmdyaWQubGFzdFNlYXJjaEluZm8uc2VhcmNoVGV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodC5sYXN0U2VhcmNoSW5mby5jYXNlU2Vuc2l0aXZlID0gdGhpcy5ncmlkLmxhc3RTZWFyY2hJbmZvLmNhc2VTZW5zaXRpdmU7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWdobGlnaHQubGFzdFNlYXJjaEluZm8uZXhhY3RNYXRjaCA9IHRoaXMuZ3JpZC5sYXN0U2VhcmNoSW5mby5leGFjdE1hdGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnRzL2VuZHMgZWRpdCBtb2RlIGZvciB0aGUgY2VsbC5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjZWxsLnNldEVkaXRNb2RlKHRydWUpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHNldEVkaXRNb2RlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnJvdy5kZWxldGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWRpdGFibGUgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZEFQSS5zdWJtaXRfdmFsdWUoKTtcbiAgICAgICAgICAgIHRoaXMuY3J1ZFNlcnZpY2UuYmVnaW4odGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdyaWRBUEkuZXNjYXBlX2VkaXRNb2RlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncmlkLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIG5ldyB2YWx1ZSB0byB0aGUgY2VsbC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jZWxsLnVwZGF0ZSgnTmV3IFZhbHVlJyk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgLy8gVE9ETzogUmVmYWN0b3JcbiAgICBwdWJsaWMgdXBkYXRlKHZhbDogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLnJvdy5kZWxldGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuY3J1ZFNlcnZpY2UuY3JlYXRlQ2VsbCh0aGlzKTtcbiAgICAgICAgY29uc3QgYXJncyA9IHRoaXMuZ3JpZEFQSS51cGRhdGVfY2VsbChjZWxsLCB2YWwpO1xuICAgICAgICBpZiAodGhpcy5jcnVkU2VydmljZS5jZWxsICYmIHRoaXMuY3J1ZFNlcnZpY2Uuc2FtZUNlbGwoY2VsbCkpIHtcbiAgICAgICAgICAgIGlmIChhcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ3JpZEFQSS5lc2NhcGVfZWRpdE1vZGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwb2ludGVyZG93biA9IChldmVudDogUG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghaXNMZWZ0Q2xpY2soZXZlbnQpKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvblNlcnZpY2UuYWRkS2V5Ym9hcmRSYW5nZSgpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmluaXRLZXlib2FyZFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvblNlcnZpY2UucHJpbWFyeUJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU2VydmljZS5wb2ludGVyRG93bih0aGlzLnNlbGVjdGlvbk5vZGUsIGV2ZW50LnNoaWZ0S2V5LCBldmVudC5jdHJsS2V5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwb2ludGVyZW50ZXIgPSAoZXZlbnQ6IFBvaW50ZXJFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCBkcmFnTW9kZSA9IHRoaXMuc2VsZWN0aW9uU2VydmljZS5wb2ludGVyRW50ZXIodGhpcy5zZWxlY3Rpb25Ob2RlLCBldmVudCk7XG4gICAgICAgIGlmIChkcmFnTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5ncmlkLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcG9pbnRlcnVwID0gKGV2ZW50OiBQb2ludGVyRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5oYXNDb2x1bW5MYXlvdXRzKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQubmF2aWdhdGlvbi5zZXRTdGFydE5hdmlnYXRpb25DZWxsKHRoaXMuY29sU3RhcnQsIHRoaXMucm93U3RhcnQsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNMZWZ0Q2xpY2soZXZlbnQpKSB7IHJldHVybjsgfVxuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25TZXJ2aWNlLnBvaW50ZXJVcCh0aGlzLnNlbGVjdGlvbk5vZGUsIHRoaXMuZ3JpZC5vblJhbmdlU2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgdGhpcy5ncmlkLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdXBkYXRlQ1JVRFN0YXR1cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdkYmxjbGljaycsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uRG91YmxlQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdGFibGUgJiYgIXRoaXMuZWRpdE1vZGUgJiYgIXRoaXMucm93LmRlbGV0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY3J1ZFNlcnZpY2UuYmVnaW4odGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdyaWQub25Eb3VibGVDbGljay5lbWl0KHtcbiAgICAgICAgICAgIGNlbGw6IHRoaXMsXG4gICAgICAgICAgICBldmVudFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHRoaXMuZ3JpZC5vbkNlbGxDbGljay5lbWl0KHtcbiAgICAgICAgICAgIGNlbGw6IHRoaXMsXG4gICAgICAgICAgICBldmVudFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignY29udGV4dG1lbnUnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbkNvbnRleHRNZW51KGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHRoaXMuZ3JpZC5vbkNvbnRleHRNZW51LmVtaXQoe1xuICAgICAgICAgICAgY2VsbDogdGhpcyxcbiAgICAgICAgICAgIGV2ZW50XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdmb2N1cycsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uRm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuc2VsZWN0aW9uTm9kZTtcbiAgICAgICAgY29uc3QgbXJsID0gdGhpcy5ncmlkLmhhc0NvbHVtbkxheW91dHM7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucm93LmZvY3VzZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmlzQWN0aXZlTm9kZShub2RlLCBtcmwpKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQub25TZWxlY3Rpb24uZW1pdCh7IGNlbGw6IHRoaXMsIGV2ZW50IH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uU2VydmljZS5wcmltYXJ5QnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVDUlVEU3RhdHVzKCk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvblNlcnZpY2UuYWN0aXZlRWxlbWVudCA9IG5vZGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvblNlcnZpY2UuYWN0aXZlRWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy5jcnVkU2VydmljZS5pbkVkaXRNb2RlICYmICF0aGlzLmVkaXRNb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkQVBJLnN1Ym1pdF92YWx1ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLnByaW1hcnlCdXR0b24gPSB0cnVlO1xuICAgICAgICB0aGlzLnNlbGVjdGlvblNlcnZpY2Uua2V5Ym9hcmRTdGF0ZU9uRm9jdXMobm9kZSwgdGhpcy5ncmlkLm9uUmFuZ2VTZWxlY3Rpb24sIHRoaXMubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICAgIHB1YmxpYyBvbkJsdXIoKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdy5mb2N1c2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhhbmRsZUFsdChrZXk6IHN0cmluZywgZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMucm93Lm5hdGl2ZUVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaWd4LXRyZWUtZ3JpZC1yb3cnICYmIHRoaXMuaXNUb2dnbGVLZXkoa2V5KSkge1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2UgPSAodGhpcy5yb3cgYXMgYW55KS5leHBhbmRlZCAmJiBST1dfQ09MTEFQU0VfS0VZUy5oYXMoa2V5KTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGFuZCA9ICEodGhpcy5yb3cgYXMgYW55KS5leHBhbmRlZCAmJiBST1dfRVhQQU5EX0tFWVMuaGFzKGtleSk7XG4gICAgICAgICAgICBpZiAoY29sbGFwc2UpIHtcbiAgICAgICAgICAgICAgICAodGhpcy5ncmlkQVBJIGFzIGFueSkudHJpZ2dlcl9yb3dfZXhwYW5zaW9uX3RvZ2dsZSh0aGlzLnJvdy50cmVlUm93LCAhdGhpcy5yb3cuZXhwYW5kZWQsIGV2ZW50LCB0aGlzLnZpc2libGVDb2x1bW5JbmRleCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV4cGFuZCkge1xuICAgICAgICAgICAgICAgICh0aGlzLmdyaWRBUEkgYXMgYW55KS50cmlnZ2VyX3Jvd19leHBhbnNpb25fdG9nZ2xlKHRoaXMucm93LnRyZWVSb3csICF0aGlzLnJvdy5leHBhbmRlZCwgZXZlbnQsIHRoaXMudmlzaWJsZUNvbHVtbkluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBoYW5kbGVUYWIoc2hpZnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHNoaWZ0KSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQubmF2aWdhdGlvbi5wZXJmb3JtU2hpZnRUYWJLZXkodGhpcy5yb3cubmF0aXZlRWxlbWVudCwgdGhpcy5zZWxlY3Rpb25Ob2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5uYXZpZ2F0aW9uLnBlcmZvcm1UYWIodGhpcy5yb3cubmF0aXZlRWxlbWVudCwgdGhpcy5zZWxlY3Rpb25Ob2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBoYW5kbGVFbmQoY3RybDogYm9vbGVhbikge1xuICAgICAgICBpZiAoY3RybCkge1xuICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24uZ29Ub0xhc3RDZWxsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQubmF2aWdhdGlvbi5vbktleWRvd25FbmQodGhpcy5yb3dJbmRleCwgZmFsc2UsIHRoaXMucm93U3RhcnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhhbmRsZUhvbWUoY3RybDogYm9vbGVhbikge1xuICAgICAgICBpZiAoY3RybCkge1xuICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24uZ29Ub0ZpcnN0Q2VsbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24ub25LZXlkb3duSG9tZSh0aGlzLnJvd0luZGV4LCBmYWxzZSwgdGhpcy5yb3dTdGFydCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUT0RPOiBSZWZhY3RvclxuICAgIC8qKlxuICAgICAqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICAgIGRpc3BhdGNoRXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gZXZlbnQua2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHNoaWZ0ID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICAgIGNvbnN0IGN0cmwgPSBldmVudC5jdHJsS2V5O1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5zZWxlY3Rpb25Ob2RlO1xuXG4gICAgICAgIGlmICghU1VQUE9SVEVEX0tFWVMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBrZXlkb3duQXJncyA9IHsgdGFyZ2V0VHlwZTogJ2RhdGFDZWxsJywgdGFyZ2V0OiB0aGlzLCBldmVudDogZXZlbnQsIGNhbmNlbDogZmFsc2UgfTtcbiAgICAgICAgdGhpcy5ncmlkLm9uR3JpZEtleWRvd24uZW1pdChrZXlkb3duQXJncyk7XG4gICAgICAgIGlmIChrZXlkb3duQXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU2VydmljZS5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmtleWJvYXJkU3RhdGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUFsdChrZXksIGV2ZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU2VydmljZS5rZXlib2FyZFN0YXRlT25LZXlkb3duKG5vZGUsIHNoaWZ0LCBzaGlmdCAmJiBrZXkgPT09ICd0YWInKTtcblxuXG4gICAgICAgIGlmIChrZXkgPT09ICd0YWInKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZWRpdE1vZGUpIHtcbiAgICAgICAgICAgIGlmIChOQVZJR0FUSU9OX0tFWVMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2x1bW4uaW5saW5lRWRpdG9yVGVtcGxhdGUpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKFsnZGF0ZScsICdib29sZWFuJ10uaW5kZXhPZih0aGlzLmNvbHVtbi5kYXRhVHlwZSkgPiAtMSkgeyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTkFWSUdBVElPTl9LRVlTLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETzogdG8gYmUgZGVsZXRlZCB3aGVuIG9uRm9jdXNDaGFuZ2UgZXZlbnQgaXMgcmVtb3ZlZCAjNDA1NFxuICAgICAgICBjb25zdCBhcmdzID0geyBjZWxsOiB0aGlzLCBncm91cFJvdzogbnVsbCwgZXZlbnQ6IGV2ZW50LCBjYW5jZWw6IGZhbHNlIH07XG4gICAgICAgIHRoaXMuZ3JpZC5fb25Gb2N1c0NoYW5nZS5lbWl0KGFyZ3MpO1xuICAgICAgICBpZiAoYXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICd0YWInOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVGFiKHNoaWZ0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFbmQoY3RybCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdob21lJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUhvbWUoY3RybCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhcnJvd2xlZnQnOlxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgaWYgKGN0cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24ub25LZXlkb3duSG9tZShub2RlLnJvdywgZmFsc2UsIHRoaXMucm93U3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24ub25LZXlkb3duQXJyb3dMZWZ0KHRoaXMubmF0aXZlRWxlbWVudCwgdGhpcy5zZWxlY3Rpb25Ob2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Fycm93cmlnaHQnOlxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIGlmIChjdHJsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5uYXZpZ2F0aW9uLm9uS2V5ZG93bkVuZChub2RlLnJvdywgZmFsc2UsIHRoaXMucm93U3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24ub25LZXlkb3duQXJyb3dSaWdodCh0aGlzLm5hdGl2ZUVsZW1lbnQsIHRoaXMuc2VsZWN0aW9uTm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhcnJvd3VwJzpcbiAgICAgICAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICAgICAgICBpZiAoY3RybCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWQubmF2aWdhdGlvbi5uYXZpZ2F0ZVRvcCh0aGlzLnZpc2libGVDb2x1bW5JbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQubmF2aWdhdGlvbi5uYXZpZ2F0ZVVwKHRoaXMucm93Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuc2VsZWN0aW9uTm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhcnJvd2Rvd24nOlxuICAgICAgICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgICAgICAgaWYgKGN0cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24ubmF2aWdhdGVCb3R0b20odGhpcy52aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24ubmF2aWdhdGVEb3duKHRoaXMucm93Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuc2VsZWN0aW9uTm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbnRlcic6XG4gICAgICAgICAgICBjYXNlICdmMic6XG4gICAgICAgICAgICAgICAgdGhpcy5vbktleWRvd25FbnRlckVkaXRNb2RlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlc2NhcGUnOlxuICAgICAgICAgICAgY2FzZSAnZXNjJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uS2V5ZG93bkV4aXRFZGl0TW9kZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgICBjYXNlICdzcGFjZWJhcic6XG4gICAgICAgICAgICBjYXNlICdzcGFjZSc6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm93LnJvd1NlbGVjdGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3cuY2hlY2tib3hFbGVtZW50LnRvZ2dsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBvbktleWRvd25FbnRlckVkaXRNb2RlKCkge1xuICAgICAgICBpZiAodGhpcy5pc0luQ29tcG9zaXRpb25Nb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29sdW1uLmVkaXRhYmxlICYmICF0aGlzLnJvdy5kZWxldGVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lZGl0TW9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5lbmRFZGl0KHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNydWRTZXJ2aWNlLmJlZ2luKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBvbktleWRvd25FeGl0RWRpdE1vZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSW5Db21wb3NpdGlvbk1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmVkaXRNb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBhcmdzID0gdGhpcy5jcnVkU2VydmljZS5jZWxsLmNyZWF0ZUVkaXRFdmVudEFyZ3MoKTtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5vbkNlbGxFZGl0Q2FuY2VsLmVtaXQoYXJncyk7XG4gICAgICAgICAgICBpZiAoYXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdyaWQuZW5kRWRpdChmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBwcm92aWRlZCBzdHJpbmcgbWF0Y2hlcyB0aGUgdGV4dCBpbiB0aGUgY2VsbCwgdGhlIHRleHQgZ2V0cyBoaWdobGlnaHRlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jZWxsLmhpZ2hsaWdodFRleHQoJ0NlbGwgVmFsdWUnLCB0cnVlKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZENlbGxDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgaGlnaGxpZ2h0VGV4dCh0ZXh0OiBzdHJpbmcsIGNhc2VTZW5zaXRpdmU/OiBib29sZWFuLCBleGFjdE1hdGNoPzogYm9vbGVhbik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpZ2hsaWdodCAmJiB0aGlzLmNvbHVtbi5zZWFyY2hhYmxlID8gdGhpcy5oaWdobGlnaHQuaGlnaGxpZ2h0KHRleHQsIGNhc2VTZW5zaXRpdmUsIGV4YWN0TWF0Y2gpIDogMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGhpZ2hsaWdodCBvZiB0aGUgdGV4dCBpbiB0aGUgY2VsbC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jZWxsLmNsZWFySGlnaExpZ2h0KCk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGNsZWFySGlnaGxpZ2h0KCkge1xuICAgICAgICBpZiAodGhpcy5oaWdobGlnaHQgJiYgdGhpcy5jb2x1bW4uc2VhcmNoYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHQuY2xlYXJIaWdobGlnaHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgY2FsY3VsYXRlU2l6ZVRvRml0KHJhbmdlOiBhbnkpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoLi4uQXJyYXkuZnJvbSh0aGlzLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4pXG4gICAgICAgICAgICAubWFwKChjaGlsZCkgPT4gZ2V0Tm9kZVNpemVWaWFSYW5nZShyYW5nZSwgY2hpbGQpKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1RvZ2dsZUtleShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gUk9XX0NPTExBUFNFX0tFWVMuaGFzKGtleSkgfHwgUk9XX0VYUEFORF9LRVlTLmhhcyhrZXkpO1xuICAgIH1cbn1cbiJdfQ==