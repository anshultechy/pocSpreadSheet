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
var IgxGridCellComponent = /** @class */ (function () {
    function IgxGridCellComponent(selectionService, crudService, gridAPI, selection, cdr, element, zone) {
        var _this = this;
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
        this.pointerdown = function (event) {
            if (!isLeftClick(event)) {
                _this.selectionService.addKeyboardRange();
                _this.selectionService.initKeyboardState();
                _this.selectionService.primaryButton = false;
                return;
            }
            _this.selectionService.pointerDown(_this.selectionNode, event.shiftKey, event.ctrlKey);
        };
        /**
         *
         * @hidden
         * \@internal
         */
        this.pointerenter = function (event) {
            /** @type {?} */
            var dragMode = _this.selectionService.pointerEnter(_this.selectionNode, event);
            if (dragMode) {
                _this.grid.cdr.detectChanges();
            }
        };
        /**
         * @hidden
         * \@internal
         */
        this.pointerup = function (event) {
            if (_this.grid.hasColumnLayouts) {
                _this.grid.navigation.setStartNavigationCell(_this.colStart, _this.rowStart, null);
            }
            if (!isLeftClick(event)) {
                return;
            }
            if (_this.selectionService.pointerUp(_this.selectionNode, _this.grid.onRangeSelection)) {
                _this.grid.cdr.detectChanges();
            }
            _this._updateCRUDStatus();
        };
    }
    Object.defineProperty(IgxGridCellComponent.prototype, "context", {
        /**
         * Gets the cell template context object.
         * ```typescript
         *  let context = this.cell.context();
         * ```
         * @memberof IgxGridCellComponent
         */
        get: /**
         * Gets the cell template context object.
         * ```typescript
         *  let context = this.cell.context();
         * ```
         * \@memberof IgxGridCellComponent
         * @return {?}
         */
        function () {
            return {
                $implicit: this.value,
                cell: this
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCellComponent.prototype, "template", {
        /**
         * Gets the cell template.
         * ```typescript
         * let template = this.cell.template;
         * ```
         * @memberof IgxGridCellComponent
         */
        get: /**
         * Gets the cell template.
         * ```typescript
         * let template = this.cell.template;
         * ```
         * \@memberof IgxGridCellComponent
         * @return {?}
         */
        function () {
            if (this.editMode) {
                /** @type {?} */
                var inlineEditorTemplate = this.column.inlineEditorTemplate;
                return inlineEditorTemplate ? inlineEditorTemplate : this.inlineEditorTemplate;
            }
            if (this.cellTemplate) {
                return this.cellTemplate;
            }
            return this.defaultCellTemplate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCellComponent.prototype, "gridID", {
        /**
         * Gets the `id` of the grid in which the cell is stored.
         * ```typescript
         * let gridId = this.cell.gridID;
         * ```
         * @memberof IgxGridCellComponent
         */
        get: /**
         * Gets the `id` of the grid in which the cell is stored.
         * ```typescript
         * let gridId = this.cell.gridID;
         * ```
         * \@memberof IgxGridCellComponent
         * @return {?}
         */
        function () {
            return this.row.gridID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCellComponent.prototype, "grid", {
        /**
         * Gets the grid of the cell.
         * ```typescript
         * let grid = this.cell.grid;
         * ```
         * @memberof IgxGridCellComponent
         */
        get: /**
         * Gets the grid of the cell.
         * ```typescript
         * let grid = this.cell.grid;
         * ```
         * \@memberof IgxGridCellComponent
         * @return {?}
         */
        function () {
            return this.gridAPI.grid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCellComponent.prototype, "rowIndex", {
        /**
         * Gets the `index` of the row where the cell is stored.
         * ```typescript
         * let rowIndex = this.cell.rowIndex;
         * ```
         * @memberof IgxGridCellComponent
         */
        get: /**
         * Gets the `index` of the row where the cell is stored.
         * ```typescript
         * let rowIndex = this.cell.rowIndex;
         * ```
         * \@memberof IgxGridCellComponent
         * @return {?}
         */
        function () {
            return this.row.index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCellComponent.prototype, "columnIndex", {
        /**
         * Gets the `index` of the cell column.
         * ```typescript
         * let columnIndex = this.cell.columnIndex;
         * ```
         * @memberof IgxGridCellComponent
         */
        get: /**
         * Gets the `index` of the cell column.
         * ```typescript
         * let columnIndex = this.cell.columnIndex;
         * ```
         * \@memberof IgxGridCellComponent
         * @return {?}
         */
        function () {
            return this.column.index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCellComponent.prototype, "visibleColumnIndex", {
        /**
         * Gets the visible `index` of the in which the cell is stored.
         * ```typescript
         * let visibleColumnIndex = this.cell.visibleColumnIndex;
         * ```
         * @memberof IgxGridCellComponent
         */
        get: /**
         * Gets the visible `index` of the in which the cell is stored.
         * ```typescript
         * let visibleColumnIndex = this.cell.visibleColumnIndex;
         * ```
         * \@memberof IgxGridCellComponent
         * @return {?}
         */
        function () {
            return this.column.columnLayoutChild ? this.column.visibleIndex : this._vIndex;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._vIndex = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCellComponent.prototype, "cellID", {
        /**
         * Gets the ID of the cell.
         * ```typescript
         * let cellID = this.cell.cellID;
         * ```
         * @memberof IgxGridCellComponent
         */
        get: /**
         * Gets the ID of the cell.
         * ```typescript
         * let cellID = this.cell.cellID;
         * ```
         * \@memberof IgxGridCellComponent
         * @return {?}
         */
        function () {
            /** @type {?} */
            var primaryKey = this.grid.primaryKey;
            /** @type {?} */
            var rowID = primaryKey ? this.rowData[primaryKey] : this.rowData;
            return { rowID: rowID, columnID: this.columnIndex, rowIndex: this.rowIndex };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCellComponent.prototype, "nativeElement", {
        /**
         * Returns a reference to the nativeElement of the cell.
         * ```typescript
         * let cellNativeElement = this.cell.nativeElement;
         * ```
         * @memberof IgxGridCellComponent
         */
        get: /**
         * Returns a reference to the nativeElement of the cell.
         * ```typescript
         * let cellNativeElement = this.cell.nativeElement;
         * ```
         * \@memberof IgxGridCellComponent
         * @return {?}
         */
        function () {
            return this.element.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCellComponent.prototype, "inEditMode", {
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
        get: /**
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
        function () {
            return this.editMode;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.setEditMode(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCellComponent.prototype, "readonly", {
        /**
         * Gets whether the cell is editable.
         * ```typescript
         * let isCellReadonly = this.cell.readonly;
         * ```
         * @memberof IgxGridCellComponent
         */
        get: /**
         * Gets whether the cell is editable.
         * ```typescript
         * let isCellReadonly = this.cell.readonly;
         * ```
         * \@memberof IgxGridCellComponent
         * @return {?}
         */
        function () {
            return !this.column.editable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCellComponent.prototype, "gridRowSpan", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.gridRowSpan;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCellComponent.prototype, "gridColumnSpan", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.gridColumnSpan;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCellComponent.prototype, "rowEnd", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.rowEnd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCellComponent.prototype, "colEnd", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.colEnd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCellComponent.prototype, "rowStart", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.rowStart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCellComponent.prototype, "colStart", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.colStart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCellComponent.prototype, "describedby", {
        /**
         * Returns a string containing the grid `id` and the column `field` concatenated by "_".
         * ```typescript
         * let describedBy = this.cell.describedBy;
         * ```
         * @memberof IgxGridCellComponent
         */
        get: /**
         * Returns a string containing the grid `id` and the column `field` concatenated by "_".
         * ```typescript
         * let describedBy = this.cell.describedBy;
         * ```
         * \@memberof IgxGridCellComponent
         * @return {?}
         */
        function () {
            return this.row.gridID + "_" + this.column.field;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCellComponent.prototype, "selected", {
        /**
         * Gets whether the cell is selected.
         * ```typescript
         * let isSelected = this.cell.selected;
         * ```
         * @memberof IgxGridCellComponent
         */
        get: /**
         * Gets whether the cell is selected.
         * ```typescript
         * let isSelected = this.cell.selected;
         * ```
         * \@memberof IgxGridCellComponent
         * @return {?}
         */
        function () {
            return this.isCellSelected();
        },
        /**
         * Selects/deselects the cell.
         * ```typescript
         * this.cell.selected = true.
         * ```
         * @memberof IgxGridCellComponent
         */
        set: /**
         * Selects/deselects the cell.
         * ```typescript
         * this.cell.selected = true.
         * ```
         * \@memberof IgxGridCellComponent
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var node = this.selectionNode;
            val ? this.selectionService.add(node) : this.selectionService.remove(node);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCellComponent.prototype, "dirty", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.grid.rowEditable) {
                /** @type {?} */
                var rowCurrentState = this.grid.transactions.getAggregatedValue(this.row.rowID, false);
                if (rowCurrentState) {
                    return rowCurrentState[this.column.field] !== undefined && rowCurrentState[this.column.field] !== null;
                }
            }
            else {
                /** @type {?} */
                var rowTransaction = this.grid.transactions.getState(this.row.rowID);
                return rowTransaction && rowTransaction.value && rowTransaction.value[this.column.field];
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCellComponent.prototype, "editValue", {
        /**
         * Gets the current edit value while a cell is in edit mode.
         * Only for cell editing mode.
         * ```typescript
         * let editValue = this.cell.editValue;
         * ```
         * @memberof IgxGridCellComponent
         */
        get: /**
         * Gets the current edit value while a cell is in edit mode.
         * Only for cell editing mode.
         * ```typescript
         * let editValue = this.cell.editValue;
         * ```
         * \@memberof IgxGridCellComponent
         * @return {?}
         */
        function () {
            if (this.crudService.inEditMode) {
                return this.crudService.cell.editValue;
            }
        },
        /**
         * Sets the current edit value while a cell is in edit mode.
         * Only for cell editing mode.
         * ```typescript
         * this.cell.editValue = value;
         * ```
         * @memberof IgxGridCellComponent
         */
        set: /**
         * Sets the current edit value while a cell is in edit mode.
         * Only for cell editing mode.
         * ```typescript
         * this.cell.editValue = value;
         * ```
         * \@memberof IgxGridCellComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.crudService.inEditMode) {
                this.crudService.cell.editValue = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCellComponent.prototype, "editable", {
        /**
         * Returns whether the cell is editable.
         */
        get: /**
         * Returns whether the cell is editable.
         * @return {?}
         */
        function () {
            return this.column.editable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCellComponent.prototype, "highlight", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this._highlight;
        },
        set: /**
         * @protected
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._highlight = value;
            if (this._highlight && this.grid.lastSearchInfo.searchText) {
                this._highlight.highlight(this.grid.lastSearchInfo.searchText, this.grid.lastSearchInfo.caseSensitive, this.grid.lastSearchInfo.exactMatch);
                this._highlight.activateIfNecessary();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCellComponent.prototype, "selectionNode", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
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
    IgxGridCellComponent.prototype.ngOnInit = /**
     * @hidden
     * \@internal
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.nativeElement.addEventListener('pointerdown', _this.pointerdown);
            _this.nativeElement.addEventListener('pointerenter', _this.pointerenter);
            _this.nativeElement.addEventListener('pointerup', _this.pointerup);
            // IE 11 workarounds
            if (isIE()) {
                _this.compositionStartHandler = function () { return _this.isInCompositionMode = true; };
                _this.compositionEndHandler = function () { return _this.isInCompositionMode = false; };
                // Hitting Enter with IME submits and exits from edit mode instead of first closing the IME dialog
                _this.nativeElement.addEventListener('compositionstart', _this.compositionStartHandler);
                _this.nativeElement.addEventListener('compositionend', _this.compositionEndHandler);
            }
        });
    };
    /**
     * @hidden
     * @internal
     */
    /**
     * @hidden
     * \@internal
     * @return {?}
     */
    IgxGridCellComponent.prototype.ngOnDestroy = /**
     * @hidden
     * \@internal
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.nativeElement.removeEventListener('pointerdown', _this.pointerdown);
            _this.nativeElement.removeEventListener('pointerenter', _this.pointerenter);
            _this.nativeElement.removeEventListener('pointerup', _this.pointerup);
            if (isIE()) {
                _this.nativeElement.removeEventListener('compositionstart', _this.compositionStartHandler);
                _this.nativeElement.removeEventListener('compositionend', _this.compositionEndHandler);
            }
        });
    };
    /**
     * @hidden
     * @internal
     */
    /**
     * @hidden
     * \@internal
     * @return {?}
     */
    IgxGridCellComponent.prototype._updateCRUDStatus = /**
     * @hidden
     * \@internal
     * @return {?}
     */
    function () {
        if (this.editMode) {
            return;
        }
        /** @type {?} */
        var crud = this.crudService;
        /** @type {?} */
        var editableCell = this.crudService.cell;
        /** @type {?} */
        var editMode = !!(crud.row || crud.cell);
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
    };
    /**
     * Gets whether the cell is selected.
     * ```typescript
     * let isCellSelected = thid.cell.isCellSelected();
     * ```
     * @memberof IgxGridCellComponent
     */
    /**
     * Gets whether the cell is selected.
     * ```typescript
     * let isCellSelected = thid.cell.isCellSelected();
     * ```
     * \@memberof IgxGridCellComponent
     * @return {?}
     */
    IgxGridCellComponent.prototype.isCellSelected = /**
     * Gets whether the cell is selected.
     * ```typescript
     * let isCellSelected = thid.cell.isCellSelected();
     * ```
     * \@memberof IgxGridCellComponent
     * @return {?}
     */
    function () {
        return this.selectionService.selected(this.selectionNode);
    };
    /**
     * @hidden
     * @internal
     */
    /**
     * @hidden
     * \@internal
     * @param {?} changes
     * @return {?}
     */
    IgxGridCellComponent.prototype.ngOnChanges = /**
     * @hidden
     * \@internal
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.value && !changes.value.firstChange) {
            if (this.highlight) {
                this.highlight.lastSearchInfo.searchedText = this.grid.lastSearchInfo.searchText;
                this.highlight.lastSearchInfo.caseSensitive = this.grid.lastSearchInfo.caseSensitive;
                this.highlight.lastSearchInfo.exactMatch = this.grid.lastSearchInfo.exactMatch;
            }
        }
    };
    /**
     * Starts/ends edit mode for the cell.
     *
     * ```typescript
     * cell.setEditMode(true);
     * ```
     */
    /**
     * Starts/ends edit mode for the cell.
     *
     * ```typescript
     * cell.setEditMode(true);
     * ```
     * @param {?} value
     * @return {?}
     */
    IgxGridCellComponent.prototype.setEditMode = /**
     * Starts/ends edit mode for the cell.
     *
     * ```typescript
     * cell.setEditMode(true);
     * ```
     * @param {?} value
     * @return {?}
     */
    function (value) {
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
    };
    /**
     * Sets new value to the cell.
     * ```typescript
     * this.cell.update('New Value');
     * ```
     * @memberof IgxGridCellComponent
     */
    // TODO: Refactor
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
    IgxGridCellComponent.prototype.update = /**
     * Sets new value to the cell.
     * ```typescript
     * this.cell.update('New Value');
     * ```
     * \@memberof IgxGridCellComponent
     * @param {?} val
     * @return {?}
     */
    // TODO: Refactor
    function (val) {
        if (this.row.deleted) {
            return;
        }
        /** @type {?} */
        var cell = this.crudService.createCell(this);
        /** @type {?} */
        var args = this.gridAPI.update_cell(cell, val);
        if (this.crudService.cell && this.crudService.sameCell(cell)) {
            if (args.cancel) {
                return;
            }
            this.gridAPI.escape_editMode();
        }
        this.cdr.markForCheck();
    };
    /**
     * @hidden
     * @internal
     */
    /**
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    IgxGridCellComponent.prototype.onDoubleClick = /**
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.editable && !this.editMode && !this.row.deleted) {
            this.crudService.begin(this);
        }
        this.grid.onDoubleClick.emit({
            cell: this,
            event: event
        });
    };
    /**
     * @hidden
     * @internal
     */
    /**
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    IgxGridCellComponent.prototype.onClick = /**
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.grid.onCellClick.emit({
            cell: this,
            event: event
        });
    };
    /**
     * @hidden
     * @internal
     */
    /**
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    IgxGridCellComponent.prototype.onContextMenu = /**
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.grid.onContextMenu.emit({
            cell: this,
            event: event
        });
    };
    /**
     * @hidden
     * @internal
     */
    /**
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    IgxGridCellComponent.prototype.onFocus = /**
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.focused) {
            return;
        }
        /** @type {?} */
        var node = this.selectionNode;
        /** @type {?} */
        var mrl = this.grid.hasColumnLayouts;
        this.focused = true;
        this.row.focused = true;
        if (!this.selectionService.isActiveNode(node, mrl)) {
            this.grid.onSelection.emit({ cell: this, event: event });
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
    };
    /**
     * @hidden
     * @internal
     */
    /**
     * @hidden
     * \@internal
     * @return {?}
     */
    IgxGridCellComponent.prototype.onBlur = /**
     * @hidden
     * \@internal
     * @return {?}
     */
    function () {
        this.focused = false;
        this.row.focused = false;
    };
    /**
     * @protected
     * @param {?} key
     * @param {?} event
     * @return {?}
     */
    IgxGridCellComponent.prototype.handleAlt = /**
     * @protected
     * @param {?} key
     * @param {?} event
     * @return {?}
     */
    function (key, event) {
        if (this.row.nativeElement.tagName.toLowerCase() === 'igx-tree-grid-row' && this.isToggleKey(key)) {
            /** @type {?} */
            var collapse = ((/** @type {?} */ (this.row))).expanded && ROW_COLLAPSE_KEYS.has(key);
            /** @type {?} */
            var expand = !((/** @type {?} */ (this.row))).expanded && ROW_EXPAND_KEYS.has(key);
            if (collapse) {
                ((/** @type {?} */ (this.gridAPI))).trigger_row_expansion_toggle(this.row.treeRow, !this.row.expanded, event, this.visibleColumnIndex);
            }
            else if (expand) {
                ((/** @type {?} */ (this.gridAPI))).trigger_row_expansion_toggle(this.row.treeRow, !this.row.expanded, event, this.visibleColumnIndex);
            }
        }
    };
    /**
     * @protected
     * @param {?} shift
     * @return {?}
     */
    IgxGridCellComponent.prototype.handleTab = /**
     * @protected
     * @param {?} shift
     * @return {?}
     */
    function (shift) {
        if (shift) {
            this.grid.navigation.performShiftTabKey(this.row.nativeElement, this.selectionNode);
        }
        else {
            this.grid.navigation.performTab(this.row.nativeElement, this.selectionNode);
        }
    };
    /**
     * @protected
     * @param {?} ctrl
     * @return {?}
     */
    IgxGridCellComponent.prototype.handleEnd = /**
     * @protected
     * @param {?} ctrl
     * @return {?}
     */
    function (ctrl) {
        if (ctrl) {
            this.grid.navigation.goToLastCell();
        }
        else {
            this.grid.navigation.onKeydownEnd(this.rowIndex, false, this.rowStart);
        }
    };
    /**
     * @protected
     * @param {?} ctrl
     * @return {?}
     */
    IgxGridCellComponent.prototype.handleHome = /**
     * @protected
     * @param {?} ctrl
     * @return {?}
     */
    function (ctrl) {
        if (ctrl) {
            this.grid.navigation.goToFirstCell();
        }
        else {
            this.grid.navigation.onKeydownHome(this.rowIndex, false, this.rowStart);
        }
    };
    // TODO: Refactor
    /**
     *
     * @hidden
     * @internal
     */
    // TODO: Refactor
    /**
     *
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    IgxGridCellComponent.prototype.dispatchEvent = 
    // TODO: Refactor
    /**
     *
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var key = event.key.toLowerCase();
        /** @type {?} */
        var shift = event.shiftKey;
        /** @type {?} */
        var ctrl = event.ctrlKey;
        /** @type {?} */
        var node = this.selectionNode;
        if (!SUPPORTED_KEYS.has(key)) {
            return;
        }
        event.stopPropagation();
        /** @type {?} */
        var keydownArgs = { targetType: 'dataCell', target: this, event: event, cancel: false };
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
        var args = { cell: this, groupRow: null, event: event, cancel: false };
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
    };
    /**
     * @hidden
     * @internal
     */
    /**
     * @hidden
     * \@internal
     * @return {?}
     */
    IgxGridCellComponent.prototype.onKeydownEnterEditMode = /**
     * @hidden
     * \@internal
     * @return {?}
     */
    function () {
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
    };
    /**
     * @hidden
     * @internal
     */
    /**
     * @hidden
     * \@internal
     * @return {?}
     */
    IgxGridCellComponent.prototype.onKeydownExitEditMode = /**
     * @hidden
     * \@internal
     * @return {?}
     */
    function () {
        if (this.isInCompositionMode) {
            return;
        }
        if (this.editMode) {
            /** @type {?} */
            var args = this.crudService.cell.createEditEventArgs();
            this.grid.onCellEditCancel.emit(args);
            if (args.cancel) {
                return;
            }
            this.grid.endEdit(false);
            this.nativeElement.focus();
        }
    };
    /**
     * If the provided string matches the text in the cell, the text gets highlighted.
     * ```typescript
     * this.cell.highlightText('Cell Value', true);
     * ```
     * @memberof IgxGridCellComponent
     */
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
    IgxGridCellComponent.prototype.highlightText = /**
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
    function (text, caseSensitive, exactMatch) {
        return this.highlight && this.column.searchable ? this.highlight.highlight(text, caseSensitive, exactMatch) : 0;
    };
    /**
     * Clears the highlight of the text in the cell.
     * ```typescript
     * this.cell.clearHighLight();
     * ```
     * @memberof IgxGridCellComponent
     */
    /**
     * Clears the highlight of the text in the cell.
     * ```typescript
     * this.cell.clearHighLight();
     * ```
     * \@memberof IgxGridCellComponent
     * @return {?}
     */
    IgxGridCellComponent.prototype.clearHighlight = /**
     * Clears the highlight of the text in the cell.
     * ```typescript
     * this.cell.clearHighLight();
     * ```
     * \@memberof IgxGridCellComponent
     * @return {?}
     */
    function () {
        if (this.highlight && this.column.searchable) {
            this.highlight.clearHighlight();
        }
    };
    /**
     * @hidden
     * @internal
     */
    /**
     * @hidden
     * \@internal
     * @param {?} range
     * @return {?}
     */
    IgxGridCellComponent.prototype.calculateSizeToFit = /**
     * @hidden
     * \@internal
     * @param {?} range
     * @return {?}
     */
    function (range) {
        return Math.max.apply(Math, tslib_1.__spread(Array.from(this.nativeElement.children)
            .map(function (child) { return getNodeSizeViaRange(range, child); })));
    };
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    IgxGridCellComponent.prototype.isToggleKey = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return ROW_COLLAPSE_KEYS.has(key) || ROW_EXPAND_KEYS.has(key);
    };
    IgxGridCellComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'igx-grid-cell',
                    template: "<ng-template #defaultCell>\n    <div igxTextHighlight style=\"pointer-events: none\" [cssClass]=\"highlightClass\" [activeCssClass]=\"activeHighlightClass\" [groupName]=\"gridID\"\n        [value]=\"formatter ? formatter(value) : column.dataType === 'number' ? (value | igxdecimal: grid.locale) : column.dataType === 'date' ? (value | igxdate: grid.locale) : value\"\n        [row]=\"rowData\" [column]=\"this.column.field\" [containerClass]=\"'igx-grid__td-text'\"\n        class=\"igx-grid__td-text\">{{ formatter ? formatter(value) : column.dataType === 'number' ? (value | igxdecimal:\n        grid.locale) : column.dataType === 'date' ? (value | igxdate: grid.locale) : value }}</div>\n</ng-template>\n<ng-template #inlineEditor let-cell=\"cell\">\n    <ng-container *ngIf=\"column.dataType === 'string'\">\n        <igx-input-group displayDensity=\"compact\">\n            <input igxInput [value]=\"editValue\" (input)=\"editValue = $event.target.value\" [igxFocus]=\"focused\" />\n        </igx-input-group>\n    </ng-container>\n    <ng-container *ngIf=\"column.dataType === 'number'\">\n        <igx-input-group displayDensity=\"compact\">\n            <input igxInput [value]=\"editValue\" (input)=\"editValue = $event.target.value\" [igxFocus]=\"focused\" type=\"number\">\n        </igx-input-group>\n    </ng-container>\n    <ng-container *ngIf=\"column.dataType === 'boolean'\">\n        <igx-checkbox (change)=\"editValue = $event.checked\" [value]=\"editValue\" [checked]=\"editValue\"\n            [igxFocus]=\"focused\" [disableRipple]=\"true\"></igx-checkbox>\n    </ng-container>\n    <ng-container *ngIf=\"column.dataType === 'date'\">\n        <igx-date-picker [style.width.%]=\"100\" [outlet]=\"grid.outletDirective\" mode=\"dropdown\" (onSelection)=\"editValue = $event\"\n            [locale]=\"grid.locale\" [value]=\"editValue\" [igxFocus]=\"focused\" [labelVisibility]=\"false\">\n        </igx-date-picker>\n    </ng-container>\n</ng-template>\n<ng-container *ngTemplateOutlet=\"template; context: context\">\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    IgxGridCellComponent.ctorParameters = function () { return [
        { type: IgxGridSelectionService },
        { type: IgxGridCRUDService },
        { type: GridBaseAPIService },
        { type: IgxSelectionAPIService },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
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
        DeprecateProperty("'inEditMode' is deprecated\nUse 'editMode' to get the current state and 'setEditMode(boolean)' as a setter"),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], IgxGridCellComponent.prototype, "inEditMode", null);
    return IgxGridCellComponent;
}());
export { IgxGridCellComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2NlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNILHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULE1BQU0sRUFLVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHNUksT0FBTyxFQUFFLHVCQUF1QixFQUFrQixrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7Ozs7OztBQWVoRTtJQXNlSSw4QkFDYyxnQkFBeUMsRUFDekMsV0FBK0IsRUFDbEMsT0FBcUUsRUFDckUsU0FBaUMsRUFDakMsR0FBc0IsRUFDckIsT0FBbUIsRUFDakIsSUFBWTtRQVAxQixpQkFPK0I7UUFOakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtRQUN6QyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFDbEMsWUFBTyxHQUFQLE9BQU8sQ0FBOEQ7UUFDckUsY0FBUyxHQUFULFNBQVMs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SUFZdEMscUNBQ2tCOzs7Ozs7Ozs7Ozs7O0lBYWxCLDhDQUF3Qzs7Ozs7Ozs7Ozs7OztJQWF4QyxvREFBc0Q7Ozs7Ozs7OztJQVN0RCx5Q0FDK0I7Ozs7OztJQWdKL0IsMENBRW1COzs7OztJQUtuQix3Q0FFaUI7Ozs7Ozs7Ozs7Ozs7SUFhakIsd0NBQ29COzs7Ozs7Ozs7Ozs7O0lBYXBCLG9DQUN5Qjs7Ozs7Ozs7O0lBa0V6QixxQ0FJVzs7Ozs7O0lBaUZYLHVDQUN1Qjs7Ozs7SUFFdkIsbURBQ2dEOzs7OztJQUVoRCxvREFDaUQ7Ozs7O0lBZ0NqRCxtREFBc0M7Ozs7O0lBQ3RDLHVEQUFrQzs7Ozs7SUFDbEMscURBQWdDOzs7OztJQUNoQywwQ0FBOEM7Ozs7Ozs7SUEwSjlDLDJDQVFDOzs7Ozs7O0lBT0QsNENBS0M7Ozs7OztJQU1ELHlDQVNDOzs7OztJQXpMRyxnREFBbUQ7Ozs7O0lBQ25ELDJDQUF5Qzs7SUFDekMsdUNBQTRFOztJQUM1RSx5Q0FBd0M7O0lBQ3hDLG1DQUE2Qjs7Ozs7SUFDN0IsdUNBQTJCOzs7OztJQUMzQixvQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBJbnB1dCxcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBWaWV3Q2hpbGQsXG4gICAgTmdab25lLFxuICAgIE9uSW5pdCxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25DaGFuZ2VzLFxuICAgIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZWxlY3Rpb24nO1xuaW1wb3J0IHsgSWd4VGV4dEhpZ2hsaWdodERpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvdGV4dC1oaWdobGlnaHQvdGV4dC1oaWdobGlnaHQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IGdldE5vZGVTaXplVmlhUmFuZ2UsIFJPV19DT0xMQVBTRV9LRVlTLCBST1dfRVhQQU5EX0tFWVMsIFNVUFBPUlRFRF9LRVlTLCBOQVZJR0FUSU9OX0tFWVMsIGlzSUUsIGlzTGVmdENsaWNrIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4uL3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IElneEdyaWRCYXNlQ29tcG9uZW50LCBJR3JpZEVkaXRFdmVudEFyZ3MsIElHcmlkRGF0YUJpbmRhYmxlIH0gZnJvbSAnLi9ncmlkLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IElneEdyaWRTZWxlY3Rpb25TZXJ2aWNlLCBJU2VsZWN0aW9uTm9kZSwgSWd4R3JpZENSVURTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9ncmlkLXNlbGVjdGlvbic7XG5pbXBvcnQgeyBEZXByZWNhdGVQcm9wZXJ0eSB9IGZyb20gJy4uL2NvcmUvZGVwcmVjYXRlRGVjb3JhdG9ycyc7XG5cbi8qKlxuICogUHJvdmlkaW5nIHJlZmVyZW5jZSB0byBgSWd4R3JpZENlbGxDb21wb25lbnRgOlxuICogYGBgdHlwZXNjcmlwdFxuICogQFZpZXdDaGlsZCgnZ3JpZCcsIHsgcmVhZDogSWd4R3JpZENvbXBvbmVudCB9KVxuICogIHB1YmxpYyBncmlkOiBJZ3hHcmlkQ29tcG9uZW50O1xuICogYGBgXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAgbGV0IGNvbHVtbiA9IHRoaXMuZ3JpZC5jb2x1bW5MaXN0LmZpcnN0O1xuICogYGBgXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAgbGV0IGNlbGwgPSBjb2x1bW4uY2VsbHNbMF07XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgc2VsZWN0b3I6ICdpZ3gtZ3JpZC1jZWxsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2VsbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZENlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF92SW5kZXggPSAtMTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNvbHVtbiBvZiB0aGUgY2VsbC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIGxldCBjZWxsQ29sdW1uID0gdGhpcy5jZWxsLmNvbHVtbjtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZENlbGxDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb2x1bW46IElneENvbHVtbkNvbXBvbmVudDtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHJvdyBvZiB0aGUgY2VsbC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNlbGxSb3cgPSB0aGlzLmNlbGwucm93O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQ2VsbENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJvdzogYW55O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZGF0YSBvZiB0aGUgcm93IG9mIHRoZSBjZWxsLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgcm93RGF0YSA9IHRoaXMuY2VsbC5yb3dEYXRhO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQ2VsbENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJvd0RhdGE6IGFueTtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgdGVtcGxhdGUgb2YgdGhlIGNlbGwuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxuZy10ZW1wbGF0ZSAjY2VsbFRlbXBsYXRlIGlneENlbGwgbGV0LXZhbHVlPlxuICAgICAqICAgPGRpdiBzdHlsZT1cImZvbnQtc3R5bGU6IG9ibGlxdWU7IGNvbG9yOmJsdWV2aW9sZXQ7IGJhY2tncm91bmQ6cmVkXCI+XG4gICAgICogICAgICAgPHNwYW4+e3t2YWx1ZX19PC9zcGFuPlxuICAgICAqICAgPC9kaXY+XG4gICAgICogPC9uZy10ZW1wbGF0ZT5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogQFZpZXdDaGlsZCgnY2VsbFRlbXBsYXRlJyx7cmVhZDogVGVtcGxhdGVSZWZ9KVxuICAgICAqIGNlbGxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jZWxsLmNlbGxUZW1wbGF0ZSA9IHRoaXMuY2VsbFRlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdGVtcGxhdGUgPSAgdGhpcy5jZWxsLmNlbGxUZW1wbGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZENlbGxDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjZWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGNlbGwgdmFsdWUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuY2VsbC52YWx1ZSA9IFwiQ2VsbCBWYWx1ZVwiO1xuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY2VsbFZhbHVlID0gdGhpcy5jZWxsLnZhbHVlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQ2VsbENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZhbHVlOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGhpZ2hsaWdodCBjbGFzcyBvZiB0aGUgY2VsbC5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBcImlneC1oaWdobGlnaHRcImAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBoaWdobGlnaHRDbGFzcyA9IHRoaXMuY2VsbC5oaWdobGlnaHRDbGFzcztcbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jZWxsLmhpZ2hsaWdodENsYXNzID0gJ2lneC1jZWxsLWhpZ2hsaWdodCc7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGhpZ2hsaWdodENsYXNzID0gJ2lneC1oaWdobGlnaHQnO1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBhY3RpdmUgaGlnaGxpZ2h0IGNsYXNzIGNsYXNzIG9mIHRoZSBjZWxsLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYFwiaWd4LWhpZ2hsaWdodF9fYWN0aXZlXCJgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgYWN0aXZlSGlnaGxpZ2h0Q2xhc3MgPSB0aGlzLmNlbGwuYWN0aXZlSGlnaGxpZ2h0Q2xhc3M7XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuY2VsbC5hY3RpdmVIaWdobGlnaHRDbGFzcyA9ICdpZ3gtY2VsbC1oaWdobGlnaHRfYWN0aXZlJztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZENlbGxDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgYWN0aXZlSGlnaGxpZ2h0Q2xhc3MgPSAnaWd4LWhpZ2hsaWdodF9fYWN0aXZlJztcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNlbGwgZm9ybWF0dGVyLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY2VsbEZvcmFtYXR0ZXIgPSB0aGlzLmNlbGwuZm9ybWF0dGVyO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQ2VsbENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZm9ybWF0dGVyOiAodmFsdWU6IGFueSkgPT4gYW55O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY2VsbCB0ZW1wbGF0ZSBjb250ZXh0IG9iamVjdC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIGxldCBjb250ZXh0ID0gdGhpcy5jZWxsLmNvbnRleHQoKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZENlbGxDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgY29udGV4dCgpOiBhbnkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJGltcGxpY2l0OiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgY2VsbDogdGhpc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNlbGwgdGVtcGxhdGUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB0ZW1wbGF0ZSA9IHRoaXMuY2VsbC50ZW1wbGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZENlbGxDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgdGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRNb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBpbmxpbmVFZGl0b3JUZW1wbGF0ZSA9IHRoaXMuY29sdW1uLmlubGluZUVkaXRvclRlbXBsYXRlO1xuICAgICAgICAgICAgcmV0dXJuIGlubGluZUVkaXRvclRlbXBsYXRlID8gaW5saW5lRWRpdG9yVGVtcGxhdGUgOiB0aGlzLmlubGluZUVkaXRvclRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNlbGxUZW1wbGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2VsbFRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRDZWxsVGVtcGxhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYGlkYCBvZiB0aGUgZ3JpZCBpbiB3aGljaCB0aGUgY2VsbCBpcyBzdG9yZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBncmlkSWQgPSB0aGlzLmNlbGwuZ3JpZElEO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQ2VsbENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBncmlkSUQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm93LmdyaWRJRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBncmlkIG9mIHRoZSBjZWxsLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgZ3JpZCA9IHRoaXMuY2VsbC5ncmlkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQ2VsbENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBncmlkKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRBUEkuZ3JpZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgaW5kZXhgIG9mIHRoZSByb3cgd2hlcmUgdGhlIGNlbGwgaXMgc3RvcmVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgcm93SW5kZXggPSB0aGlzLmNlbGwucm93SW5kZXg7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmRhdGEtcm93SW5kZXgnKVxuICAgIGdldCByb3dJbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3cuaW5kZXg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYGluZGV4YCBvZiB0aGUgY2VsbCBjb2x1bW4uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjb2x1bW5JbmRleCA9IHRoaXMuY2VsbC5jb2x1bW5JbmRleDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZENlbGxDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgY29sdW1uSW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLmluZGV4O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHZpc2libGUgYGluZGV4YCBvZiB0aGUgaW4gd2hpY2ggdGhlIGNlbGwgaXMgc3RvcmVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdmlzaWJsZUNvbHVtbkluZGV4ID0gdGhpcy5jZWxsLnZpc2libGVDb2x1bW5JbmRleDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZENlbGxDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS12aXNpYmxlSW5kZXgnKVxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHZpc2libGVDb2x1bW5JbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLmNvbHVtbkxheW91dENoaWxkID8gdGhpcy5jb2x1bW4udmlzaWJsZUluZGV4IDogdGhpcy5fdkluZGV4O1xuICAgIH1cblxuICAgIHNldCB2aXNpYmxlQ29sdW1uSW5kZXgodmFsKSB7XG4gICAgICAgIHRoaXMuX3ZJbmRleCA9IHZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBJRCBvZiB0aGUgY2VsbC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNlbGxJRCA9IHRoaXMuY2VsbC5jZWxsSUQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldCBjZWxsSUQoKSB7XG4gICAgICAgIGNvbnN0IHByaW1hcnlLZXkgPSB0aGlzLmdyaWQucHJpbWFyeUtleTtcbiAgICAgICAgY29uc3Qgcm93SUQgPSBwcmltYXJ5S2V5ID8gdGhpcy5yb3dEYXRhW3ByaW1hcnlLZXldIDogdGhpcy5yb3dEYXRhO1xuICAgICAgICByZXR1cm4geyByb3dJRCwgY29sdW1uSUQ6IHRoaXMuY29sdW1uSW5kZXgsIHJvd0luZGV4OiB0aGlzLnJvd0luZGV4IH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgbmF0aXZlRWxlbWVudCBvZiB0aGUgY2VsbC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNlbGxOYXRpdmVFbGVtZW50ID0gdGhpcy5jZWxsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IG5hdGl2ZUVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBVc2UgYGNlbGwuZWRpdE1vZGVgIGFzIGEgZ2V0dGVyIGFuZFxuICAgICAqIGBjZWxsLnNldEVkaXRNb2RlKHRydWUgfCBmYWxzZSlgIHRvIHN0YXJ0L2V4aXQgZWRpdCBtb2RlLlxuICAgICAqXG4gICAgICogR2V0cy9zZXRzIHdoZXRoZXIgdGhlIGNlbGwgaXMgaW4gZWRpdCBtb2RlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNDZWxsSW5FZGl0TW9kZSA9IHRoaXMuY2VsbC5pbkVkaXRNb2RlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQ2VsbENvbXBvbmVudFxuICAgICAqL1xuICAgIEBEZXByZWNhdGVQcm9wZXJ0eShgJ2luRWRpdE1vZGUnIGlzIGRlcHJlY2F0ZWRcXG5Vc2UgJ2VkaXRNb2RlJyB0byBnZXQgdGhlIGN1cnJlbnQgc3RhdGUgYW5kICdzZXRFZGl0TW9kZShib29sZWFuKScgYXMgYSBzZXR0ZXJgKVxuICAgIGdldCBpbkVkaXRNb2RlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5lZGl0TW9kZTtcbiAgICB9XG5cbiAgICBzZXQgaW5FZGl0TW9kZSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnNldEVkaXRNb2RlKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1ncmlkX190ZC0tcGlubmVkLWxhc3QnKVxuICAgIGxhc3RQaW5uZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgY2VsbCBpcyBpbiBlZGl0IG1vZGUuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1ncmlkX190ZC0tZWRpdGluZycpXG4gICAgZWRpdE1vZGUgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0IHRoZSBgdGFiaW5kZXhgIHByb3BlcnR5IG9mIHRoZSBjZWxsLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYDBgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmNlbGwudGFiaW5kZXggPSAxO1xuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY2VsbFRhYkluZGV4ID0gdGhpcy5jZWxsLnRhYmluZGV4O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQ2VsbENvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpXG4gICAgcHVibGljIHRhYmluZGV4ID0gMDtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0IHRoZSBgcm9sZWAgcHJvcGVydHkgb2YgdGhlIGNlbGwuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgXCJncmlkY2VsbFwiYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jZWxsLnJvbGUgPSAnZ3JpZC1jZWxsJztcbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNlbGxSb2xlID0gdGhpcy5jZWxsLnJvbGU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICAgIHB1YmxpYyByb2xlID0gJ2dyaWRjZWxsJztcblxuICAgIC8qKlxuICAgICAqIEdldHMgd2hldGhlciB0aGUgY2VsbCBpcyBlZGl0YWJsZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzQ2VsbFJlYWRvbmx5ID0gdGhpcy5jZWxsLnJlYWRvbmx5O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQ2VsbENvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXJlYWRvbmx5JylcbiAgICBnZXQgcmVhZG9ubHkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5jb2x1bW4uZWRpdGFibGU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS4tbXMtZ3JpZC1yb3ctc3BhbicpXG4gICAgZ2V0IGdyaWRSb3dTcGFuKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbi5ncmlkUm93U3BhbjtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLi1tcy1ncmlkLWNvbHVtbi1zcGFuJylcbiAgICBnZXQgZ3JpZENvbHVtblNwYW4oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLmdyaWRDb2x1bW5TcGFuO1xuICAgIH1cblxuXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5ncmlkLXJvdy1lbmQnKVxuICAgIGdldCByb3dFbmQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLnJvd0VuZDtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmdyaWQtY29sdW1uLWVuZCcpXG4gICAgZ2V0IGNvbEVuZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4uY29sRW5kO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnc3R5bGUuLW1zLWdyaWQtcm93JylcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmdyaWQtcm93LXN0YXJ0JylcbiAgICBnZXQgcm93U3RhcnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLnJvd1N0YXJ0O1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnc3R5bGUuLW1zLWdyaWQtY29sdW1uJylcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmdyaWQtY29sdW1uLXN0YXJ0JylcbiAgICBnZXQgY29sU3RhcnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLmNvbFN0YXJ0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJpbmcgY29udGFpbmluZyB0aGUgZ3JpZCBgaWRgIGFuZCB0aGUgY29sdW1uIGBmaWVsZGAgY29uY2F0ZW5hdGVkIGJ5IFwiX1wiLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgZGVzY3JpYmVkQnkgPSB0aGlzLmNlbGwuZGVzY3JpYmVkQnk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGVzY3JpYmVkYnknKVxuICAgIGdldCBkZXNjcmliZWRieSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5yb3cuZ3JpZElEfV8ke3RoaXMuY29sdW1uLmZpZWxkfWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgd2lkdGggb2YgdGhlIGNlbGwuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjZWxsV2lkdGggPSB0aGlzLmNlbGwud2lkdGg7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5taW4td2lkdGgnKVxuICAgIEBIb3N0QmluZGluZygnc3R5bGUubWF4LXdpZHRoJylcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmZsZXgtYmFzaXMnKVxuICAgIEBJbnB1dCgpXG4gICAgd2lkdGggPSAnJztcblxuICAgIC8qKlxuICAgICAqIEdldHMgd2hldGhlciB0aGUgY2VsbCBpcyBzZWxlY3RlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzU2VsZWN0ZWQgPSB0aGlzLmNlbGwuc2VsZWN0ZWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtc2VsZWN0ZWQnKVxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWdyaWRfX3RkLS1zZWxlY3RlZCcpXG4gICAgZ2V0IHNlbGVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0NlbGxTZWxlY3RlZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdHMvZGVzZWxlY3RzIHRoZSBjZWxsLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmNlbGwuc2VsZWN0ZWQgPSB0cnVlLlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQ2VsbENvbXBvbmVudFxuICAgICAqL1xuICAgIHNldCBzZWxlY3RlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuc2VsZWN0aW9uTm9kZTtcbiAgICAgICAgdmFsID8gdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmFkZChub2RlKSA6IHRoaXMuc2VsZWN0aW9uU2VydmljZS5yZW1vdmUobm9kZSk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZ3JpZF9fdGQtLWVkaXRlZCcpXG4gICAgZ2V0IGRpcnR5KCkge1xuICAgICAgICBpZiAodGhpcy5ncmlkLnJvd0VkaXRhYmxlKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDdXJyZW50U3RhdGUgPSB0aGlzLmdyaWQudHJhbnNhY3Rpb25zLmdldEFnZ3JlZ2F0ZWRWYWx1ZSh0aGlzLnJvdy5yb3dJRCwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHJvd0N1cnJlbnRTdGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByb3dDdXJyZW50U3RhdGVbdGhpcy5jb2x1bW4uZmllbGRdICE9PSB1bmRlZmluZWQgJiYgcm93Q3VycmVudFN0YXRlW3RoaXMuY29sdW1uLmZpZWxkXSAhPT0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd1RyYW5zYWN0aW9uOiBTdGF0ZSA9IHRoaXMuZ3JpZC50cmFuc2FjdGlvbnMuZ2V0U3RhdGUodGhpcy5yb3cucm93SUQpO1xuICAgICAgICAgICAgcmV0dXJuIHJvd1RyYW5zYWN0aW9uICYmIHJvd1RyYW5zYWN0aW9uLnZhbHVlICYmIHJvd1RyYW5zYWN0aW9uLnZhbHVlW3RoaXMuY29sdW1uLmZpZWxkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IGVkaXQgdmFsdWUgd2hpbGUgYSBjZWxsIGlzIGluIGVkaXQgbW9kZS5cbiAgICAgKiBPbmx5IGZvciBjZWxsIGVkaXRpbmcgbW9kZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jZWxsLmVkaXRWYWx1ZSA9IHZhbHVlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQ2VsbENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgZWRpdFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmNydWRTZXJ2aWNlLmluRWRpdE1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuY3J1ZFNlcnZpY2UuY2VsbC5lZGl0VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGN1cnJlbnQgZWRpdCB2YWx1ZSB3aGlsZSBhIGNlbGwgaXMgaW4gZWRpdCBtb2RlLlxuICAgICAqIE9ubHkgZm9yIGNlbGwgZWRpdGluZyBtb2RlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgZWRpdFZhbHVlID0gdGhpcy5jZWxsLmVkaXRWYWx1ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4R3JpZENlbGxDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGVkaXRWYWx1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3J1ZFNlcnZpY2UuaW5FZGl0TW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3J1ZFNlcnZpY2UuY2VsbC5lZGl0VmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIGNlbGwgaXMgZWRpdGFibGUuXG4gICAgICovXG4gICAgZ2V0IGVkaXRhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4uZWRpdGFibGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWdyaWRfX3RkLS1hY3RpdmUnKVxuICAgIHB1YmxpYyBmb2N1c2VkID0gZmFsc2U7XG5cbiAgICBAVmlld0NoaWxkKCdkZWZhdWx0Q2VsbCcsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCBkZWZhdWx0Q2VsbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnaW5saW5lRWRpdG9yJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGlubGluZUVkaXRvclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZChJZ3hUZXh0SGlnaGxpZ2h0RGlyZWN0aXZlLCB7IHJlYWQ6IElneFRleHRIaWdobGlnaHREaXJlY3RpdmUsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcm90ZWN0ZWQgc2V0IGhpZ2hsaWdodCh2YWx1ZTogSWd4VGV4dEhpZ2hsaWdodERpcmVjdGl2ZSkge1xuICAgICAgICB0aGlzLl9oaWdobGlnaHQgPSB2YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5faGlnaGxpZ2h0ICYmIHRoaXMuZ3JpZC5sYXN0U2VhcmNoSW5mby5zZWFyY2hUZXh0KSB7XG4gICAgICAgICAgICB0aGlzLl9oaWdobGlnaHQuaGlnaGxpZ2h0KHRoaXMuZ3JpZC5sYXN0U2VhcmNoSW5mby5zZWFyY2hUZXh0LFxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5sYXN0U2VhcmNoSW5mby5jYXNlU2Vuc2l0aXZlLFxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5sYXN0U2VhcmNoSW5mby5leGFjdE1hdGNoKTtcbiAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodC5hY3RpdmF0ZUlmTmVjZXNzYXJ5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGhpZ2hsaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hpZ2hsaWdodDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHNlbGVjdGlvbk5vZGUoKTogSVNlbGVjdGlvbk5vZGUge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm93OiB0aGlzLnJvd0luZGV4LFxuICAgICAgICAgICAgY29sdW1uOiB0aGlzLmNvbHVtbi5jb2x1bW5MYXlvdXRDaGlsZCA/IHRoaXMuY29sdW1uLnBhcmVudC52aXNpYmxlSW5kZXggOiB0aGlzLnZpc2libGVDb2x1bW5JbmRleCxcbiAgICAgICAgICAgIGxheW91dDogdGhpcy5jb2x1bW4uY29sdW1uTGF5b3V0Q2hpbGQgPyB7XG4gICAgICAgICAgICAgICAgcm93U3RhcnQ6IHRoaXMuY29sdW1uLnJvd1N0YXJ0LFxuICAgICAgICAgICAgICAgIGNvbFN0YXJ0OiB0aGlzLmNvbHVtbi5jb2xTdGFydCxcbiAgICAgICAgICAgICAgICByb3dFbmQ6IHRoaXMuY29sdW1uLnJvd0VuZCxcbiAgICAgICAgICAgICAgICBjb2xFbmQ6IHRoaXMuY29sdW1uLmNvbEVuZCxcbiAgICAgICAgICAgICAgICBjb2x1bW5WaXNpYmxlSW5kZXg6IHRoaXMudmlzaWJsZUNvbHVtbkluZGV4XG4gICAgICAgICAgICB9IDogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaXNJbkNvbXBvc2l0aW9uTW9kZSA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBjb21wb3NpdGlvblN0YXJ0SGFuZGxlcjtcbiAgICBwcm90ZWN0ZWQgY29tcG9zaXRpb25FbmRIYW5kbGVyO1xuICAgIHByaXZhdGUgX2hpZ2hsaWdodDogSWd4VGV4dEhpZ2hsaWdodERpcmVjdGl2ZTtcblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBzZWxlY3Rpb25TZXJ2aWNlOiBJZ3hHcmlkU2VsZWN0aW9uU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGNydWRTZXJ2aWNlOiBJZ3hHcmlkQ1JVRFNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4sXG4gICAgICAgIHB1YmxpYyBzZWxlY3Rpb246IElneFNlbGVjdGlvbkFQSVNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUpIHsgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLnBvaW50ZXJkb3duKTtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZW50ZXInLCB0aGlzLnBvaW50ZXJlbnRlcik7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdGhpcy5wb2ludGVydXApO1xuXG4gICAgICAgICAgICAvLyBJRSAxMSB3b3JrYXJvdW5kc1xuICAgICAgICAgICAgaWYgKGlzSUUoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9zaXRpb25TdGFydEhhbmRsZXIgPSAoKSA9PiB0aGlzLmlzSW5Db21wb3NpdGlvbk1vZGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9zaXRpb25FbmRIYW5kbGVyID0gKCkgPT4gdGhpcy5pc0luQ29tcG9zaXRpb25Nb2RlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gSGl0dGluZyBFbnRlciB3aXRoIElNRSBzdWJtaXRzIGFuZCBleGl0cyBmcm9tIGVkaXQgbW9kZSBpbnN0ZWFkIG9mIGZpcnN0IGNsb3NpbmcgdGhlIElNRSBkaWFsb2dcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25zdGFydCcsIHRoaXMuY29tcG9zaXRpb25TdGFydEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbmVuZCcsIHRoaXMuY29tcG9zaXRpb25FbmRIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgdGhpcy5wb2ludGVyZG93bik7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmVudGVyJywgdGhpcy5wb2ludGVyZW50ZXIpO1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHRoaXMucG9pbnRlcnVwKTtcblxuICAgICAgICAgICAgaWYgKGlzSUUoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbnN0YXJ0JywgdGhpcy5jb21wb3NpdGlvblN0YXJ0SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uZW5kJywgdGhpcy5jb21wb3NpdGlvbkVuZEhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgX3VwZGF0ZUNSVURTdGF0dXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjcnVkID0gdGhpcy5jcnVkU2VydmljZTtcbiAgICAgICAgY29uc3QgZWRpdGFibGVDZWxsID0gdGhpcy5jcnVkU2VydmljZS5jZWxsO1xuICAgICAgICBjb25zdCBlZGl0TW9kZSA9ICEhKGNydWQucm93IHx8IGNydWQuY2VsbCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWRpdGFibGUgJiYgZWRpdE1vZGUgJiYgIXRoaXMucm93LmRlbGV0ZWQpIHtcbiAgICAgICAgICAgIGlmIChlZGl0YWJsZUNlbGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRBUEkudXBkYXRlX2NlbGwoZWRpdGFibGVDZWxsLCBlZGl0YWJsZUNlbGwuZWRpdFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNydWQuZW5kKCk7XG4gICAgICAgICAgICB0aGlzLmdyaWQuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgY3J1ZC5iZWdpbih0aGlzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlZGl0YWJsZUNlbGwgJiYgY3J1ZC5zYW1lUm93KHRoaXMucm93SW5kZXgpKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWRBUEkuc3VibWl0X3ZhbHVlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWRpdE1vZGUgJiYgIWNydWQuc2FtZVJvdyh0aGlzLnJvd0luZGV4KSkge1xuICAgICAgICAgICAgdGhpcy5ncmlkLmVuZEVkaXQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHdoZXRoZXIgdGhlIGNlbGwgaXMgc2VsZWN0ZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc0NlbGxTZWxlY3RlZCA9IHRoaWQuY2VsbC5pc0NlbGxTZWxlY3RlZCgpO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQ2VsbENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBpc0NlbGxTZWxlY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uU2VydmljZS5zZWxlY3RlZCh0aGlzLnNlbGVjdGlvbk5vZGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBpZiAoY2hhbmdlcy52YWx1ZSAmJiAhY2hhbmdlcy52YWx1ZS5maXJzdENoYW5nZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGlnaGxpZ2h0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWdobGlnaHQubGFzdFNlYXJjaEluZm8uc2VhcmNoZWRUZXh0ID0gdGhpcy5ncmlkLmxhc3RTZWFyY2hJbmZvLnNlYXJjaFRleHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWdobGlnaHQubGFzdFNlYXJjaEluZm8uY2FzZVNlbnNpdGl2ZSA9IHRoaXMuZ3JpZC5sYXN0U2VhcmNoSW5mby5jYXNlU2Vuc2l0aXZlO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0Lmxhc3RTZWFyY2hJbmZvLmV4YWN0TWF0Y2ggPSB0aGlzLmdyaWQubGFzdFNlYXJjaEluZm8uZXhhY3RNYXRjaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cy9lbmRzIGVkaXQgbW9kZSBmb3IgdGhlIGNlbGwuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY2VsbC5zZXRFZGl0TW9kZSh0cnVlKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBzZXRFZGl0TW9kZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5yb3cuZGVsZXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVkaXRhYmxlICYmIHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWRBUEkuc3VibWl0X3ZhbHVlKCk7XG4gICAgICAgICAgICB0aGlzLmNydWRTZXJ2aWNlLmJlZ2luKHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ncmlkQVBJLmVzY2FwZV9lZGl0TW9kZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ3JpZC5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBuZXcgdmFsdWUgdG8gdGhlIGNlbGwuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuY2VsbC51cGRhdGUoJ05ldyBWYWx1ZScpO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQ2VsbENvbXBvbmVudFxuICAgICAqL1xuICAgIC8vIFRPRE86IFJlZmFjdG9yXG4gICAgcHVibGljIHVwZGF0ZSh2YWw6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5yb3cuZGVsZXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmNydWRTZXJ2aWNlLmNyZWF0ZUNlbGwodGhpcyk7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSB0aGlzLmdyaWRBUEkudXBkYXRlX2NlbGwoY2VsbCwgdmFsKTtcbiAgICAgICAgaWYgKHRoaXMuY3J1ZFNlcnZpY2UuY2VsbCAmJiB0aGlzLmNydWRTZXJ2aWNlLnNhbWVDZWxsKGNlbGwpKSB7XG4gICAgICAgICAgICBpZiAoYXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdyaWRBUEkuZXNjYXBlX2VkaXRNb2RlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcG9pbnRlcmRvd24gPSAoZXZlbnQ6IFBvaW50ZXJFdmVudCkgPT4ge1xuICAgICAgICBpZiAoIWlzTGVmdENsaWNrKGV2ZW50KSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmFkZEtleWJvYXJkUmFuZ2UoKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU2VydmljZS5pbml0S2V5Ym9hcmRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLnByaW1hcnlCdXR0b24gPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGlvblNlcnZpY2UucG9pbnRlckRvd24odGhpcy5zZWxlY3Rpb25Ob2RlLCBldmVudC5zaGlmdEtleSwgZXZlbnQuY3RybEtleSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcG9pbnRlcmVudGVyID0gKGV2ZW50OiBQb2ludGVyRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZHJhZ01vZGUgPSB0aGlzLnNlbGVjdGlvblNlcnZpY2UucG9pbnRlckVudGVyKHRoaXMuc2VsZWN0aW9uTm9kZSwgZXZlbnQpO1xuICAgICAgICBpZiAoZHJhZ01vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHBvaW50ZXJ1cCA9IChldmVudDogUG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmdyaWQuaGFzQ29sdW1uTGF5b3V0cykge1xuICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24uc2V0U3RhcnROYXZpZ2F0aW9uQ2VsbCh0aGlzLmNvbFN0YXJ0LCB0aGlzLnJvd1N0YXJ0LCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTGVmdENsaWNrKGV2ZW50KSkgeyByZXR1cm47IH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uU2VydmljZS5wb2ludGVyVXAodGhpcy5zZWxlY3Rpb25Ob2RlLCB0aGlzLmdyaWQub25SYW5nZVNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNSVURTdGF0dXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignZGJsY2xpY2snLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbkRvdWJsZUNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRhYmxlICYmICF0aGlzLmVkaXRNb2RlICYmICF0aGlzLnJvdy5kZWxldGVkKSB7XG4gICAgICAgICAgICB0aGlzLmNydWRTZXJ2aWNlLmJlZ2luKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ncmlkLm9uRG91YmxlQ2xpY2suZW1pdCh7XG4gICAgICAgICAgICBjZWxsOiB0aGlzLFxuICAgICAgICAgICAgZXZlbnRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25DbGljayhldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICB0aGlzLmdyaWQub25DZWxsQ2xpY2suZW1pdCh7XG4gICAgICAgICAgICBjZWxsOiB0aGlzLFxuICAgICAgICAgICAgZXZlbnRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25Db250ZXh0TWVudShldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICB0aGlzLmdyaWQub25Db250ZXh0TWVudS5lbWl0KHtcbiAgICAgICAgICAgIGNlbGw6IHRoaXMsXG4gICAgICAgICAgICBldmVudFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignZm9jdXMnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbkZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnNlbGVjdGlvbk5vZGU7XG4gICAgICAgIGNvbnN0IG1ybCA9IHRoaXMuZ3JpZC5oYXNDb2x1bW5MYXlvdXRzO1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnJvdy5mb2N1c2VkID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uU2VydmljZS5pc0FjdGl2ZU5vZGUobm9kZSwgbXJsKSkge1xuICAgICAgICAgICAgdGhpcy5ncmlkLm9uU2VsZWN0aW9uLmVtaXQoeyBjZWxsOiB0aGlzLCBldmVudCB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvblNlcnZpY2UucHJpbWFyeUJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ1JVRFN0YXR1cygpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmFjdGl2ZUVsZW1lbnQgPSBub2RlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmFjdGl2ZUVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3J1ZFNlcnZpY2UuaW5FZGl0TW9kZSAmJiAhdGhpcy5lZGl0TW9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZEFQSS5zdWJtaXRfdmFsdWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU2VydmljZS5wcmltYXJ5QnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmtleWJvYXJkU3RhdGVPbkZvY3VzKG5vZGUsIHRoaXMuZ3JpZC5vblJhbmdlU2VsZWN0aW9uLCB0aGlzLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgICBwdWJsaWMgb25CbHVyKCkge1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3cuZm9jdXNlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBoYW5kbGVBbHQoa2V5OiBzdHJpbmcsIGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnJvdy5uYXRpdmVFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lneC10cmVlLWdyaWQtcm93JyAmJiB0aGlzLmlzVG9nZ2xlS2V5KGtleSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNlID0gKHRoaXMucm93IGFzIGFueSkuZXhwYW5kZWQgJiYgUk9XX0NPTExBUFNFX0tFWVMuaGFzKGtleSk7XG4gICAgICAgICAgICBjb25zdCBleHBhbmQgPSAhKHRoaXMucm93IGFzIGFueSkuZXhwYW5kZWQgJiYgUk9XX0VYUEFORF9LRVlTLmhhcyhrZXkpO1xuICAgICAgICAgICAgaWYgKGNvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgKHRoaXMuZ3JpZEFQSSBhcyBhbnkpLnRyaWdnZXJfcm93X2V4cGFuc2lvbl90b2dnbGUodGhpcy5yb3cudHJlZVJvdywgIXRoaXMucm93LmV4cGFuZGVkLCBldmVudCwgdGhpcy52aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChleHBhbmQpIHtcbiAgICAgICAgICAgICAgICAodGhpcy5ncmlkQVBJIGFzIGFueSkudHJpZ2dlcl9yb3dfZXhwYW5zaW9uX3RvZ2dsZSh0aGlzLnJvdy50cmVlUm93LCAhdGhpcy5yb3cuZXhwYW5kZWQsIGV2ZW50LCB0aGlzLnZpc2libGVDb2x1bW5JbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaGFuZGxlVGFiKHNoaWZ0OiBib29sZWFuKSB7XG4gICAgICAgIGlmIChzaGlmdCkge1xuICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24ucGVyZm9ybVNoaWZ0VGFiS2V5KHRoaXMucm93Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuc2VsZWN0aW9uTm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQubmF2aWdhdGlvbi5wZXJmb3JtVGFiKHRoaXMucm93Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuc2VsZWN0aW9uTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaGFuZGxlRW5kKGN0cmw6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGN0cmwpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5uYXZpZ2F0aW9uLmdvVG9MYXN0Q2VsbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24ub25LZXlkb3duRW5kKHRoaXMucm93SW5kZXgsIGZhbHNlLCB0aGlzLnJvd1N0YXJ0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBoYW5kbGVIb21lKGN0cmw6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGN0cmwpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5uYXZpZ2F0aW9uLmdvVG9GaXJzdENlbGwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5uYXZpZ2F0aW9uLm9uS2V5ZG93bkhvbWUodGhpcy5yb3dJbmRleCwgZmFsc2UsIHRoaXMucm93U3RhcnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVE9ETzogUmVmYWN0b3JcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgICBkaXNwYXRjaEV2ZW50KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBzaGlmdCA9IGV2ZW50LnNoaWZ0S2V5O1xuICAgICAgICBjb25zdCBjdHJsID0gZXZlbnQuY3RybEtleTtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuc2VsZWN0aW9uTm9kZTtcblxuICAgICAgICBpZiAoIVNVUFBPUlRFRF9LRVlTLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3Qga2V5ZG93bkFyZ3MgPSB7IHRhcmdldFR5cGU6ICdkYXRhQ2VsbCcsIHRhcmdldDogdGhpcywgZXZlbnQ6IGV2ZW50LCBjYW5jZWw6IGZhbHNlIH07XG4gICAgICAgIHRoaXMuZ3JpZC5vbkdyaWRLZXlkb3duLmVtaXQoa2V5ZG93bkFyZ3MpO1xuICAgICAgICBpZiAoa2V5ZG93bkFyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvblNlcnZpY2UuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU2VydmljZS5rZXlib2FyZFN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVBbHQoa2V5LCBldmVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbGVjdGlvblNlcnZpY2Uua2V5Ym9hcmRTdGF0ZU9uS2V5ZG93bihub2RlLCBzaGlmdCwgc2hpZnQgJiYga2V5ID09PSAndGFiJyk7XG5cblxuICAgICAgICBpZiAoa2V5ID09PSAndGFiJykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmVkaXRNb2RlKSB7XG4gICAgICAgICAgICBpZiAoTkFWSUdBVElPTl9LRVlTLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sdW1uLmlubGluZUVkaXRvclRlbXBsYXRlKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmIChbJ2RhdGUnLCAnYm9vbGVhbiddLmluZGV4T2YodGhpcy5jb2x1bW4uZGF0YVR5cGUpID4gLTEpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE5BVklHQVRJT05fS0VZUy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE86IHRvIGJlIGRlbGV0ZWQgd2hlbiBvbkZvY3VzQ2hhbmdlIGV2ZW50IGlzIHJlbW92ZWQgIzQwNTRcbiAgICAgICAgY29uc3QgYXJncyA9IHsgY2VsbDogdGhpcywgZ3JvdXBSb3c6IG51bGwsIGV2ZW50OiBldmVudCwgY2FuY2VsOiBmYWxzZSB9O1xuICAgICAgICB0aGlzLmdyaWQuX29uRm9jdXNDaGFuZ2UuZW1pdChhcmdzKTtcbiAgICAgICAgaWYgKGFyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAndGFiJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVRhYihzaGlmdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRW5kKGN0cmwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVIb21lKGN0cmwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXJyb3dsZWZ0JzpcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIGlmIChjdHJsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5uYXZpZ2F0aW9uLm9uS2V5ZG93bkhvbWUobm9kZS5yb3csIGZhbHNlLCB0aGlzLnJvd1N0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5uYXZpZ2F0aW9uLm9uS2V5ZG93bkFycm93TGVmdCh0aGlzLm5hdGl2ZUVsZW1lbnQsIHRoaXMuc2VsZWN0aW9uTm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhcnJvd3JpZ2h0JzpcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICBpZiAoY3RybCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWQubmF2aWdhdGlvbi5vbktleWRvd25FbmQobm9kZS5yb3csIGZhbHNlLCB0aGlzLnJvd1N0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5uYXZpZ2F0aW9uLm9uS2V5ZG93bkFycm93UmlnaHQodGhpcy5uYXRpdmVFbGVtZW50LCB0aGlzLnNlbGVjdGlvbk5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXJyb3d1cCc6XG4gICAgICAgICAgICBjYXNlICd1cCc6XG4gICAgICAgICAgICAgICAgaWYgKGN0cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24ubmF2aWdhdGVUb3AodGhpcy52aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24ubmF2aWdhdGVVcCh0aGlzLnJvdy5uYXRpdmVFbGVtZW50LCB0aGlzLnNlbGVjdGlvbk5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXJyb3dkb3duJzpcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgICAgICAgIGlmIChjdHJsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5uYXZpZ2F0aW9uLm5hdmlnYXRlQm90dG9tKHRoaXMudmlzaWJsZUNvbHVtbkluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5uYXZpZ2F0aW9uLm5hdmlnYXRlRG93bih0aGlzLnJvdy5uYXRpdmVFbGVtZW50LCB0aGlzLnNlbGVjdGlvbk5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZW50ZXInOlxuICAgICAgICAgICAgY2FzZSAnZjInOlxuICAgICAgICAgICAgICAgIHRoaXMub25LZXlkb3duRW50ZXJFZGl0TW9kZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZXNjYXBlJzpcbiAgICAgICAgICAgIGNhc2UgJ2VzYyc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbktleWRvd25FeGl0RWRpdE1vZGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgICAgY2FzZSAnc3BhY2ViYXInOlxuICAgICAgICAgICAgY2FzZSAnc3BhY2UnOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvdy5yb3dTZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm93LmNoZWNrYm94RWxlbWVudC50b2dnbGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgb25LZXlkb3duRW50ZXJFZGl0TW9kZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNJbkNvbXBvc2l0aW9uTW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbHVtbi5lZGl0YWJsZSAmJiAhdGhpcy5yb3cuZGVsZXRlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWRpdE1vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQuZW5kRWRpdCh0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcnVkU2VydmljZS5iZWdpbih0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgb25LZXlkb3duRXhpdEVkaXRNb2RlKCkge1xuICAgICAgICBpZiAodGhpcy5pc0luQ29tcG9zaXRpb25Nb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5lZGl0TW9kZSkge1xuICAgICAgICAgICAgY29uc3QgYXJncyA9IHRoaXMuY3J1ZFNlcnZpY2UuY2VsbC5jcmVhdGVFZGl0RXZlbnRBcmdzKCk7XG4gICAgICAgICAgICB0aGlzLmdyaWQub25DZWxsRWRpdENhbmNlbC5lbWl0KGFyZ3MpO1xuICAgICAgICAgICAgaWYgKGFyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ncmlkLmVuZEVkaXQoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgcHJvdmlkZWQgc3RyaW5nIG1hdGNoZXMgdGhlIHRleHQgaW4gdGhlIGNlbGwsIHRoZSB0ZXh0IGdldHMgaGlnaGxpZ2h0ZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuY2VsbC5oaWdobGlnaHRUZXh0KCdDZWxsIFZhbHVlJywgdHJ1ZSk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRDZWxsQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGhpZ2hsaWdodFRleHQodGV4dDogc3RyaW5nLCBjYXNlU2Vuc2l0aXZlPzogYm9vbGVhbiwgZXhhY3RNYXRjaD86IGJvb2xlYW4pOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5oaWdobGlnaHQgJiYgdGhpcy5jb2x1bW4uc2VhcmNoYWJsZSA/IHRoaXMuaGlnaGxpZ2h0LmhpZ2hsaWdodCh0ZXh0LCBjYXNlU2Vuc2l0aXZlLCBleGFjdE1hdGNoKSA6IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBoaWdobGlnaHQgb2YgdGhlIHRleHQgaW4gdGhlIGNlbGwuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuY2VsbC5jbGVhckhpZ2hMaWdodCgpO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hHcmlkQ2VsbENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhckhpZ2hsaWdodCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGlnaGxpZ2h0ICYmIHRoaXMuY29sdW1uLnNlYXJjaGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0LmNsZWFySGlnaGxpZ2h0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGNhbGN1bGF0ZVNpemVUb0ZpdChyYW5nZTogYW55KTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KC4uLkFycmF5LmZyb20odGhpcy5uYXRpdmVFbGVtZW50LmNoaWxkcmVuKVxuICAgICAgICAgICAgLm1hcCgoY2hpbGQpID0+IGdldE5vZGVTaXplVmlhUmFuZ2UocmFuZ2UsIGNoaWxkKSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNUb2dnbGVLZXkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIFJPV19DT0xMQVBTRV9LRVlTLmhhcyhrZXkpIHx8IFJPV19FWFBBTkRfS0VZUy5oYXMoa2V5KTtcbiAgICB9XG59XG4iXX0=