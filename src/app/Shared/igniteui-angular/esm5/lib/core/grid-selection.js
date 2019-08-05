/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, NgZone } from '@angular/core';
/**
 * @record
 */
export function GridSelectionRange() { }
if (false) {
    /** @type {?} */
    GridSelectionRange.prototype.rowStart;
    /** @type {?} */
    GridSelectionRange.prototype.rowEnd;
    /** @type {?} */
    GridSelectionRange.prototype.columnStart;
    /** @type {?} */
    GridSelectionRange.prototype.columnEnd;
}
/**
 * @record
 */
export function ISelectionNode() { }
if (false) {
    /** @type {?} */
    ISelectionNode.prototype.row;
    /** @type {?} */
    ISelectionNode.prototype.column;
    /** @type {?|undefined} */
    ISelectionNode.prototype.layout;
    /** @type {?|undefined} */
    ISelectionNode.prototype.isSummaryRow;
}
/**
 * @record
 */
export function IMultiRowLayoutNode() { }
if (false) {
    /** @type {?} */
    IMultiRowLayoutNode.prototype.rowStart;
    /** @type {?} */
    IMultiRowLayoutNode.prototype.colStart;
    /** @type {?} */
    IMultiRowLayoutNode.prototype.rowEnd;
    /** @type {?} */
    IMultiRowLayoutNode.prototype.colEnd;
    /** @type {?} */
    IMultiRowLayoutNode.prototype.columnVisibleIndex;
}
/**
 * @record
 */
function ISelectionKeyboardState() { }
if (false) {
    /** @type {?} */
    ISelectionKeyboardState.prototype.node;
    /** @type {?} */
    ISelectionKeyboardState.prototype.shift;
    /** @type {?} */
    ISelectionKeyboardState.prototype.range;
    /** @type {?} */
    ISelectionKeyboardState.prototype.active;
}
/**
 * @record
 */
function ISelectionPointerState() { }
if (false) {
    /** @type {?} */
    ISelectionPointerState.prototype.ctrl;
    /** @type {?} */
    ISelectionPointerState.prototype.primaryButton;
}
// TODO: Refactor - export in a separate file
var 
// TODO: Refactor - export in a separate file
IgxRow = /** @class */ (function () {
    function IgxRow(id, index, data) {
        this.id = id;
        this.index = index;
        this.data = data;
    }
    /**
     * @return {?}
     */
    IgxRow.prototype.createEditEventArgs = /**
     * @return {?}
     */
    function () {
        return {
            rowID: this.id,
            oldValue: tslib_1.__assign({}, this.data),
            newValue: this.newData,
            cancel: false
        };
    };
    return IgxRow;
}());
// TODO: Refactor - export in a separate file
export { IgxRow };
if (false) {
    /** @type {?} */
    IgxRow.prototype.transactionState;
    /** @type {?} */
    IgxRow.prototype.state;
    /** @type {?} */
    IgxRow.prototype.newData;
    /** @type {?} */
    IgxRow.prototype.id;
    /** @type {?} */
    IgxRow.prototype.index;
    /** @type {?} */
    IgxRow.prototype.data;
}
var IgxCell = /** @class */ (function () {
    function IgxCell(id, rowIndex, column, value, editValue, rowData) {
        this.id = id;
        this.rowIndex = rowIndex;
        this.column = column;
        this.value = value;
        this.editValue = editValue;
        this.rowData = rowData;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    IgxCell.prototype.castToNumber = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.column.dataType === 'number' && !this.column.inlineEditorTemplate) {
            /** @type {?} */
            var v = parseFloat(value);
            return !isNaN(v) && isFinite(v) ? v : 0;
        }
        return value;
    };
    /**
     * @return {?}
     */
    IgxCell.prototype.createEditEventArgs = /**
     * @return {?}
     */
    function () {
        return {
            rowID: this.id.rowID,
            cellID: this.id,
            oldValue: this.value,
            newValue: this.editValue,
            cancel: false
        };
    };
    return IgxCell;
}());
export { IgxCell };
if (false) {
    /** @type {?} */
    IgxCell.prototype.primaryKey;
    /** @type {?} */
    IgxCell.prototype.state;
    /** @type {?} */
    IgxCell.prototype.id;
    /** @type {?} */
    IgxCell.prototype.rowIndex;
    /** @type {?} */
    IgxCell.prototype.column;
    /** @type {?} */
    IgxCell.prototype.value;
    /** @type {?} */
    IgxCell.prototype.editValue;
    /** @type {?} */
    IgxCell.prototype.rowData;
}
var IgxGridCRUDService = /** @class */ (function () {
    function IgxGridCRUDService() {
        this.cell = null;
        this.row = null;
    }
    /**
     * @param {?} cell
     * @return {?}
     */
    IgxGridCRUDService.prototype.createCell = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        return new IgxCell(cell.cellID, cell.rowIndex, cell.column, cell.value, cell.value, cell.row.rowData);
    };
    /**
     * @param {?} cell
     * @return {?}
     */
    IgxGridCRUDService.prototype.createRow = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        return new IgxRow(cell.id.rowID, cell.rowIndex, cell.rowData);
    };
    /**
     * @param {?} rowIndex
     * @return {?}
     */
    IgxGridCRUDService.prototype.sameRow = /**
     * @param {?} rowIndex
     * @return {?}
     */
    function (rowIndex) {
        return this.row && this.row.index === rowIndex;
    };
    /**
     * @param {?} cell
     * @return {?}
     */
    IgxGridCRUDService.prototype.sameCell = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        return (this.cell.id.rowID === cell.id.rowID &&
            this.cell.id.columnID === cell.id.columnID);
    };
    Object.defineProperty(IgxGridCRUDService.prototype, "inEditMode", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.cell;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCRUDService.prototype, "rowEditing", {
        get: /**
         * @return {?}
         */
        function () {
            return this.grid.rowEditable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridCRUDService.prototype, "primaryKey", {
        get: /**
         * @return {?}
         */
        function () {
            return this.grid.primaryKey;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IgxGridCRUDService.prototype.beginRowEdit = /**
     * @return {?}
     */
    function () {
        if (this.grid.rowEditable && (this.grid.primaryKey === undefined || this.grid.primaryKey === null)) {
            console.warn('The grid must have a `primaryKey` specified when using `rowEditable`!');
        }
        this.row = this.createRow(this.cell);
        /** @type {?} */
        var args = {
            rowID: this.row.id,
            oldValue: this.row.data,
            cancel: false
        };
        this.grid.onRowEditEnter.emit(args);
        if (args.cancel) {
            this.endRowEdit();
            return;
        }
        this.row.transactionState = this.grid.transactions.getAggregatedValue(this.row.id, true);
        this.grid.transactions.startPending();
        this.grid.openRowOverlay(this.row.id);
    };
    /**
     * @return {?}
     */
    IgxGridCRUDService.prototype.endRowEdit = /**
     * @return {?}
     */
    function () {
        this.row = null;
    };
    /**
     * @param {?} cell
     * @return {?}
     */
    IgxGridCRUDService.prototype.begin = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        this.cell = this.createCell(cell);
        this.cell.primaryKey = this.primaryKey;
        /** @type {?} */
        var args = {
            cellID: this.cell.id,
            rowID: this.cell.id.rowID,
            oldValue: this.cell.value,
            cancel: false
        };
        this.grid.onCellEditEnter.emit(args);
        if (args.cancel) {
            this.end();
            return;
        }
        if (this.rowEditing) {
            if (!this.row) {
                this.beginRowEdit();
                return;
            }
            if (this.row && !this.sameRow(this.cell.rowIndex)) {
                this.grid.endEdit(true);
                this.cell = this.createCell(cell);
                this.beginRowEdit();
                return;
            }
        }
        else {
            this.endRowEdit();
        }
    };
    /**
     * @return {?}
     */
    IgxGridCRUDService.prototype.end = /**
     * @return {?}
     */
    function () {
        this.cell = null;
    };
    /**
     * @param {?} rowIndex
     * @param {?} columnIndex
     * @return {?}
     */
    IgxGridCRUDService.prototype.isInEditMode = /**
     * @param {?} rowIndex
     * @param {?} columnIndex
     * @return {?}
     */
    function (rowIndex, columnIndex) {
        if (!this.cell) {
            return false;
        }
        return this.cell.column.index === columnIndex && this.cell.rowIndex === rowIndex;
    };
    IgxGridCRUDService.decorators = [
        { type: Injectable }
    ];
    return IgxGridCRUDService;
}());
export { IgxGridCRUDService };
if (false) {
    /** @type {?} */
    IgxGridCRUDService.prototype.grid;
    /** @type {?} */
    IgxGridCRUDService.prototype.cell;
    /** @type {?} */
    IgxGridCRUDService.prototype.row;
}
var IgxGridSelectionService = /** @class */ (function () {
    function IgxGridSelectionService(zone) {
        this.zone = zone;
        this.dragMode = false;
        this.keyboardState = (/** @type {?} */ ({}));
        this.pointerState = (/** @type {?} */ ({}));
        this.selection = new Map();
        this.temp = new Map();
        this._ranges = new Set();
        this.initPointerState();
        this.initKeyboardState();
    }
    Object.defineProperty(IgxGridSelectionService.prototype, "ranges", {
        /**
         * Returns the current selected ranges in the grid from both
         * keyboard and pointer interactions
         */
        get: /**
         * Returns the current selected ranges in the grid from both
         * keyboard and pointer interactions
         * @return {?}
         */
        function () {
            // The last action was keyboard + shift selection -> add it
            this.addKeyboardRange();
            /** @type {?} */
            var ranges = Array.from(this._ranges).map(function (range) { return JSON.parse(range); });
            // No ranges but we have a focused cell -> add it
            if (!ranges.length && this.activeElement) {
                ranges.push(this.generateRange(this.activeElement));
            }
            return ranges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridSelectionService.prototype, "primaryButton", {
        get: /**
         * @return {?}
         */
        function () {
            return this.pointerState.primaryButton;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.pointerState.primaryButton = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Resets the keyboard state
     */
    /**
     * Resets the keyboard state
     * @return {?}
     */
    IgxGridSelectionService.prototype.initKeyboardState = /**
     * Resets the keyboard state
     * @return {?}
     */
    function () {
        this.keyboardState.node = null;
        this.keyboardState.shift = false;
        this.keyboardState.range = null;
        this.keyboardState.active = false;
    };
    /**
     * Resets the pointer state
     */
    /**
     * Resets the pointer state
     * @return {?}
     */
    IgxGridSelectionService.prototype.initPointerState = /**
     * Resets the pointer state
     * @return {?}
     */
    function () {
        this.pointerState.node = null;
        this.pointerState.ctrl = false;
        this.pointerState.shift = false;
        this.pointerState.range = null;
        this.pointerState.primaryButton = true;
    };
    /**
     * Adds a single node.
     * Single clicks | Ctrl + single clicks on cells is the usual case.
     */
    /**
     * Adds a single node.
     * Single clicks | Ctrl + single clicks on cells is the usual case.
     * @param {?} node
     * @return {?}
     */
    IgxGridSelectionService.prototype.add = /**
     * Adds a single node.
     * Single clicks | Ctrl + single clicks on cells is the usual case.
     * @param {?} node
     * @return {?}
     */
    function (node) {
        this.selection.has(node.row) ? this.selection.get(node.row).add(node.column) :
            this.selection.set(node.row, new Set()).get(node.row).add(node.column);
        this._ranges.add(JSON.stringify(this.generateRange(node)));
    };
    /**
     * Adds the active keyboard range selection (if any) to the `ranges` meta.
     */
    /**
     * Adds the active keyboard range selection (if any) to the `ranges` meta.
     * @return {?}
     */
    IgxGridSelectionService.prototype.addKeyboardRange = /**
     * Adds the active keyboard range selection (if any) to the `ranges` meta.
     * @return {?}
     */
    function () {
        if (this.keyboardState.range) {
            this._ranges.add(JSON.stringify(this.keyboardState.range));
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    IgxGridSelectionService.prototype.remove = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (this.selection.has(node.row)) {
            this.selection.get(node.row).delete(node.column);
        }
        if (this.isActiveNode(node)) {
            this.activeElement = null;
        }
        this._ranges.delete(JSON.stringify(this.generateRange(node)));
    };
    /**
     * @param {?} node
     * @return {?}
     */
    IgxGridSelectionService.prototype.isInMap = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return (this.selection.has(node.row) && this.selection.get(node.row).has(node.column)) ||
            (this.temp.has(node.row) && this.temp.get(node.row).has(node.column));
    };
    /**
     * @param {?} node
     * @return {?}
     */
    IgxGridSelectionService.prototype.selected = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return this.isActiveNode(node) || this.isInMap(node);
    };
    /**
     * @param {?} node
     * @param {?=} mrl
     * @return {?}
     */
    IgxGridSelectionService.prototype.isActiveNode = /**
     * @param {?} node
     * @param {?=} mrl
     * @return {?}
     */
    function (node, mrl) {
        if (mrl === void 0) { mrl = false; }
        if (this.activeElement) {
            /** @type {?} */
            var isActive = this.activeElement.column === node.column && this.activeElement.row === node.row;
            if (mrl) {
                /** @type {?} */
                var layout = this.activeElement.layout;
                return isActive && this.isActiveLayout(layout, node.layout);
            }
            return isActive;
        }
        return false;
    };
    /**
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    IgxGridSelectionService.prototype.isActiveLayout = /**
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    function (current, target) {
        return current.columnVisibleIndex === target.columnVisibleIndex;
    };
    /**
     * @param {?} node
     * @param {?=} state
     * @return {?}
     */
    IgxGridSelectionService.prototype.addRangeMeta = /**
     * @param {?} node
     * @param {?=} state
     * @return {?}
     */
    function (node, state) {
        this._ranges.add(JSON.stringify(this.generateRange(node, state)));
    };
    /**
     * @param {?} node
     * @param {?=} state
     * @return {?}
     */
    IgxGridSelectionService.prototype.removeRangeMeta = /**
     * @param {?} node
     * @param {?=} state
     * @return {?}
     */
    function (node, state) {
        this._ranges.delete(JSON.stringify(this.generateRange(node, state)));
    };
    /**
     * Generates a new selection range from the given `node`.
     * If `state` is passed instead it will generate the range based on the passed `node`
     * and the start node of the `state`.
     */
    /**
     * Generates a new selection range from the given `node`.
     * If `state` is passed instead it will generate the range based on the passed `node`
     * and the start node of the `state`.
     * @param {?} node
     * @param {?=} state
     * @return {?}
     */
    IgxGridSelectionService.prototype.generateRange = /**
     * Generates a new selection range from the given `node`.
     * If `state` is passed instead it will generate the range based on the passed `node`
     * and the start node of the `state`.
     * @param {?} node
     * @param {?=} state
     * @return {?}
     */
    function (node, state) {
        if (!state) {
            return {
                rowStart: node.row,
                rowEnd: node.row,
                columnStart: node.column,
                columnEnd: node.column
            };
        }
        var _a = state.node, row = _a.row, column = _a.column;
        /** @type {?} */
        var rowStart = Math.min(node.row, row);
        /** @type {?} */
        var rowEnd = Math.max(node.row, row);
        /** @type {?} */
        var columnStart = Math.min(node.column, column);
        /** @type {?} */
        var columnEnd = Math.max(node.column, column);
        return { rowStart: rowStart, rowEnd: rowEnd, columnStart: columnStart, columnEnd: columnEnd };
    };
    /**
     *
     */
    /**
     *
     * @param {?} node
     * @param {?} shift
     * @param {?} shiftTab
     * @return {?}
     */
    IgxGridSelectionService.prototype.keyboardStateOnKeydown = /**
     *
     * @param {?} node
     * @param {?} shift
     * @param {?} shiftTab
     * @return {?}
     */
    function (node, shift, shiftTab) {
        this.keyboardState.active = true;
        this.initPointerState();
        this.keyboardState.shift = shift && !shiftTab;
        // Kb navigation with shift and no previous node.
        // Clear the current selection init the start node.
        if (this.keyboardState.shift && !this.keyboardState.node) {
            this.clear();
            this.keyboardState.node = node;
        }
    };
    /**
     * @param {?} node
     * @param {?} emitter
     * @param {?} dom
     * @return {?}
     */
    IgxGridSelectionService.prototype.keyboardStateOnFocus = /**
     * @param {?} node
     * @param {?} emitter
     * @param {?} dom
     * @return {?}
     */
    function (node, emitter, dom) {
        /** @type {?} */
        var kbState = this.keyboardState;
        // Focus triggered by keyboard navigation
        if (kbState.active) {
            if (isChromium()) {
                this._moveSelectionChrome(dom);
            }
            // Start generating a range if shift is hold
            if (kbState.shift) {
                this.dragSelect(node, kbState);
                kbState.range = this.generateRange(node, kbState);
                emitter.emit(this.generateRange(node, kbState));
                return;
            }
            this.initKeyboardState();
            this.clear();
            this.add(node);
        }
    };
    /**
     * @param {?} node
     * @param {?} shift
     * @param {?} ctrl
     * @return {?}
     */
    IgxGridSelectionService.prototype.pointerDown = /**
     * @param {?} node
     * @param {?} shift
     * @param {?} ctrl
     * @return {?}
     */
    function (node, shift, ctrl) {
        this.addKeyboardRange();
        this.initKeyboardState();
        this.pointerState.ctrl = ctrl;
        this.pointerState.shift = shift;
        // No ctrl key pressed - no multiple selection
        if (!ctrl) {
            this.clear();
        }
        if (shift) {
            // No previously 'clicked' node. Use the last active node.
            if (!this.pointerState.node) {
                this.pointerState.node = this.activeElement || node;
            }
            this.pointerDownShiftKey(node);
            this.clearTextSelection();
            return;
        }
        this.removeRangeMeta(node);
        this.pointerState.node = node;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    IgxGridSelectionService.prototype.pointerDownShiftKey = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        this.clear();
        this.selectRange(node, this.pointerState);
    };
    /**
     * @param {?} target
     * @param {?} source
     * @return {?}
     */
    IgxGridSelectionService.prototype.mergeMap = /**
     * @param {?} target
     * @param {?} source
     * @return {?}
     */
    function (target, source) {
        /** @type {?} */
        var iterator = source.entries();
        /** @type {?} */
        var pair = iterator.next();
        /** @type {?} */
        var key;
        /** @type {?} */
        var value;
        var _loop_1 = function () {
            var _a;
            _a = tslib_1.__read(pair.value, 2), key = _a[0], value = _a[1];
            if (target.has(key)) {
                /** @type {?} */
                var newValue_1 = target.get(key);
                value.forEach(function (record) { return newValue_1.add(record); });
                target.set(key, newValue_1);
            }
            else {
                target.set(key, value);
            }
            pair = iterator.next();
        };
        while (!pair.done) {
            _loop_1();
        }
    };
    /**
     * @param {?} node
     * @param {?} event
     * @return {?}
     */
    IgxGridSelectionService.prototype.pointerEnter = /**
     * @param {?} node
     * @param {?} event
     * @return {?}
     */
    function (node, event) {
        // https://www.w3.org/TR/pointerevents/#the-button-property
        this.dragMode = event.buttons === 1 && event.button === -1;
        if (!this.dragMode) {
            return false;
        }
        this.clearTextSelection();
        // If the users triggers a drag-like event by first clicking outside the grid cells
        // and then enters in the grid body we may not have a initial pointer starting node.
        // Assume the first pointerenter node is where we start.
        if (!this.pointerState.node) {
            this.pointerState.node = node;
        }
        this.pointerState.ctrl ? this.selectRange(node, this.pointerState, this.temp) :
            this.dragSelect(node, this.pointerState);
        return true;
    };
    /**
     * @param {?} node
     * @param {?} emitter
     * @return {?}
     */
    IgxGridSelectionService.prototype.pointerUp = /**
     * @param {?} node
     * @param {?} emitter
     * @return {?}
     */
    function (node, emitter) {
        var _this = this;
        if (this.dragMode) {
            this.restoreTextSelection();
            this.addRangeMeta(node, this.pointerState);
            this.mergeMap(this.selection, this.temp);
            this.zone.runTask(function () { return emitter.emit(_this.generateRange(node, _this.pointerState)); });
            this.temp.clear();
            this.dragMode = false;
            return true;
        }
        if (this.pointerState.shift) {
            this.clearTextSelection();
            this.restoreTextSelection();
            this.addRangeMeta(node, this.pointerState);
            emitter.emit(this.generateRange(node, this.pointerState));
            return true;
        }
        this.add(node);
        return false;
    };
    /**
     * @param {?} node
     * @param {?} state
     * @param {?=} collection
     * @return {?}
     */
    IgxGridSelectionService.prototype.selectRange = /**
     * @param {?} node
     * @param {?} state
     * @param {?=} collection
     * @return {?}
     */
    function (node, state, collection) {
        if (collection === void 0) { collection = this.selection; }
        if (collection === this.temp) {
            collection.clear();
        }
        var _a = this.generateRange(node, state), rowStart = _a.rowStart, rowEnd = _a.rowEnd, columnStart = _a.columnStart, columnEnd = _a.columnEnd;
        for (var i = rowStart; i <= rowEnd; i++) {
            for (var j = (/** @type {?} */ (columnStart)); j <= columnEnd; j++) {
                collection.has(i) ? collection.get(i).add(j) :
                    collection.set(i, new Set()).get(i).add(j);
            }
        }
    };
    /**
     * @param {?} node
     * @param {?} state
     * @return {?}
     */
    IgxGridSelectionService.prototype.dragSelect = /**
     * @param {?} node
     * @param {?} state
     * @return {?}
     */
    function (node, state) {
        if (!this.pointerState.ctrl) {
            this.selection.clear();
        }
        this.selectRange(node, state);
    };
    /**
     * @return {?}
     */
    IgxGridSelectionService.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.selection.clear();
        this.temp.clear();
        this._ranges.clear();
    };
    /**
     * @return {?}
     */
    IgxGridSelectionService.prototype.clearTextSelection = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selection = window.getSelection();
        if (selection.rangeCount) {
            this._selectionRange = selection.getRangeAt(0);
            this._selectionRange.collapse(true);
            selection.removeAllRanges();
        }
    };
    /**
     * @return {?}
     */
    IgxGridSelectionService.prototype.restoreTextSelection = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selection = window.getSelection();
        if (!selection.rangeCount) {
            selection.addRange(this._selectionRange || document.createRange());
        }
    };
    /**
     * (╯°□°）╯︵ ┻━┻
     * Chrome and Chromium don't care about the active
     * range after keyboard navigation, thus this.
     */
    /**
     * (╯°□°）╯︵ ┻━┻
     * Chrome and Chromium don't care about the active
     * range after keyboard navigation, thus this.
     * @param {?} node
     * @return {?}
     */
    IgxGridSelectionService.prototype._moveSelectionChrome = /**
     * (╯°□°）╯︵ ┻━┻
     * Chrome and Chromium don't care about the active
     * range after keyboard navigation, thus this.
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var selection = window.getSelection();
        selection.removeAllRanges();
        /** @type {?} */
        var range = new Range();
        range.selectNode(node);
        range.collapse(true);
        selection.addRange(range);
    };
    IgxGridSelectionService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    IgxGridSelectionService.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
    return IgxGridSelectionService;
}());
export { IgxGridSelectionService };
if (false) {
    /** @type {?} */
    IgxGridSelectionService.prototype.dragMode;
    /** @type {?} */
    IgxGridSelectionService.prototype.activeElement;
    /** @type {?} */
    IgxGridSelectionService.prototype.keyboardState;
    /** @type {?} */
    IgxGridSelectionService.prototype.pointerState;
    /** @type {?} */
    IgxGridSelectionService.prototype.selection;
    /** @type {?} */
    IgxGridSelectionService.prototype.temp;
    /** @type {?} */
    IgxGridSelectionService.prototype._ranges;
    /** @type {?} */
    IgxGridSelectionService.prototype._selectionRange;
    /**
     * @type {?}
     * @private
     */
    IgxGridSelectionService.prototype.zone;
}
/**
 * @return {?}
 */
export function isChromium() {
    return (/Chrom|e?ium/g.test(navigator.userAgent) || /Google Inc/g.test(navigator.vendor)) && !/Edge/g.test(navigator.userAgent);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1zZWxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvcmUvZ3JpZC1zZWxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFJakUsd0NBS0M7OztJQUpHLHNDQUFpQjs7SUFDakIsb0NBQWU7O0lBQ2YseUNBQTZCOztJQUM3Qix1Q0FBMkI7Ozs7O0FBRy9CLG9DQUtDOzs7SUFKRyw2QkFBWTs7SUFDWixnQ0FBZTs7SUFDZixnQ0FBNkI7O0lBQzdCLHNDQUF1Qjs7Ozs7QUFHM0IseUNBTUM7OztJQUxHLHVDQUFpQjs7SUFDakIsdUNBQWlCOztJQUNqQixxQ0FBZTs7SUFDZixxQ0FBZTs7SUFDZixpREFBMkI7Ozs7O0FBRy9CLHNDQUtDOzs7SUFKRyx1Q0FBNEI7O0lBQzVCLHdDQUFlOztJQUNmLHdDQUEwQjs7SUFDMUIseUNBQWdCOzs7OztBQUdwQixxQ0FHQzs7O0lBRkcsc0NBQWM7O0lBQ2QsK0NBQXVCOzs7QUFRM0I7OztJQUtJLGdCQUFtQixFQUFPLEVBQVMsS0FBYSxFQUFTLElBQVM7UUFBL0MsT0FBRSxHQUFGLEVBQUUsQ0FBSztRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFLO0lBQUcsQ0FBQzs7OztJQUV0RSxvQ0FBbUI7OztJQUFuQjtRQUNJLE9BQU87WUFDSCxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDZCxRQUFRLHVCQUFRLElBQUksQ0FBQyxJQUFJLENBQUU7WUFDM0IsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3RCLE1BQU0sRUFBRSxLQUFLO1NBQ2hCLENBQUM7SUFDTixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUFmRCxJQWVDOzs7OztJQWRHLGtDQUFzQjs7SUFDdEIsdUJBQVc7O0lBQ1gs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TUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3BJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUdyaWRFZGl0RXZlbnRBcmdzIH0gZnJvbSAnLi4vZ3JpZHMvZ3JpZC1iYXNlLmNvbXBvbmVudCc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBHcmlkU2VsZWN0aW9uUmFuZ2Uge1xuICAgIHJvd1N0YXJ0OiBudW1iZXI7XG4gICAgcm93RW5kOiBudW1iZXI7XG4gICAgY29sdW1uU3RhcnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgICBjb2x1bW5FbmQ6IHN0cmluZyB8IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2VsZWN0aW9uTm9kZSB7XG4gICAgcm93OiBudW1iZXI7XG4gICAgY29sdW1uOiBudW1iZXI7XG4gICAgbGF5b3V0PzogSU11bHRpUm93TGF5b3V0Tm9kZTtcbiAgICBpc1N1bW1hcnlSb3c/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElNdWx0aVJvd0xheW91dE5vZGUge1xuICAgIHJvd1N0YXJ0OiBudW1iZXI7XG4gICAgY29sU3RhcnQ6IG51bWJlcjtcbiAgICByb3dFbmQ6IG51bWJlcjtcbiAgICBjb2xFbmQ6IG51bWJlcjtcbiAgICBjb2x1bW5WaXNpYmxlSW5kZXg6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIElTZWxlY3Rpb25LZXlib2FyZFN0YXRlIHtcbiAgICBub2RlOiBudWxsIHwgSVNlbGVjdGlvbk5vZGU7XG4gICAgc2hpZnQ6IGJvb2xlYW47XG4gICAgcmFuZ2U6IEdyaWRTZWxlY3Rpb25SYW5nZTtcbiAgICBhY3RpdmU6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBJU2VsZWN0aW9uUG9pbnRlclN0YXRlIGV4dGVuZHMgSVNlbGVjdGlvbktleWJvYXJkU3RhdGUge1xuICAgIGN0cmw6IGJvb2xlYW47XG4gICAgcHJpbWFyeUJ1dHRvbjogYm9vbGVhbjtcbn1cblxudHlwZSBTZWxlY3Rpb25TdGF0ZSA9IElTZWxlY3Rpb25LZXlib2FyZFN0YXRlIHwgSVNlbGVjdGlvblBvaW50ZXJTdGF0ZTtcblxuXG4vLyBUT0RPOiBSZWZhY3RvciAtIGV4cG9ydCBpbiBhIHNlcGFyYXRlIGZpbGVcblxuZXhwb3J0IGNsYXNzIElneFJvdyB7XG4gICAgdHJhbnNhY3Rpb25TdGF0ZTogYW55O1xuICAgIHN0YXRlOiBhbnk7XG4gICAgbmV3RGF0YTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGlkOiBhbnksIHB1YmxpYyBpbmRleDogbnVtYmVyLCBwdWJsaWMgZGF0YTogYW55KSB7fVxuXG4gICAgY3JlYXRlRWRpdEV2ZW50QXJncygpOiBJR3JpZEVkaXRFdmVudEFyZ3Mge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm93SUQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBvbGRWYWx1ZTogeyAuLi4gdGhpcy5kYXRhIH0sXG4gICAgICAgICAgICBuZXdWYWx1ZTogdGhpcy5uZXdEYXRhLFxuICAgICAgICAgICAgY2FuY2VsOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIElneENlbGwge1xuXG4gICAgcHJpbWFyeUtleTogYW55O1xuICAgIHN0YXRlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGlkLFxuICAgICAgICBwdWJsaWMgcm93SW5kZXg6IG51bWJlcixcbiAgICAgICAgcHVibGljIGNvbHVtbixcbiAgICAgICAgcHVibGljIHZhbHVlOiBhbnksXG4gICAgICAgIHB1YmxpYyBlZGl0VmFsdWU6IGFueSxcbiAgICAgICAgcHVibGljIHJvd0RhdGE6IGFueSkge31cblxuICAgIGNhc3RUb051bWJlcih2YWx1ZTogYW55KTogYW55IHtcbiAgICAgICAgaWYgKHRoaXMuY29sdW1uLmRhdGFUeXBlID09PSAnbnVtYmVyJyAmJiAhdGhpcy5jb2x1bW4uaW5saW5lRWRpdG9yVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiAhaXNOYU4odikgJiYgaXNGaW5pdGUodikgPyB2IDogMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgY3JlYXRlRWRpdEV2ZW50QXJncygpOiBJR3JpZEVkaXRFdmVudEFyZ3Mge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm93SUQ6IHRoaXMuaWQucm93SUQsXG4gICAgICAgICAgICBjZWxsSUQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBvbGRWYWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgIG5ld1ZhbHVlOiB0aGlzLmVkaXRWYWx1ZSxcbiAgICAgICAgICAgIGNhbmNlbDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJZ3hHcmlkQ1JVRFNlcnZpY2Uge1xuXG4gICAgZ3JpZDtcbiAgICBjZWxsOiBJZ3hDZWxsIHwgbnVsbCA9IG51bGw7XG4gICAgcm93OiBJZ3hSb3cgfCBudWxsID0gbnVsbDtcblxuICAgIGNyZWF0ZUNlbGwoY2VsbCk6IElneENlbGwge1xuICAgICAgICByZXR1cm4gbmV3IElneENlbGwoY2VsbC5jZWxsSUQsIGNlbGwucm93SW5kZXgsIGNlbGwuY29sdW1uLCBjZWxsLnZhbHVlLCBjZWxsLnZhbHVlLCBjZWxsLnJvdy5yb3dEYXRhKTtcbiAgICB9XG5cbiAgICBjcmVhdGVSb3coY2VsbDogSWd4Q2VsbCk6IElneFJvdyB7XG4gICAgICAgIHJldHVybiBuZXcgSWd4Um93KGNlbGwuaWQucm93SUQsIGNlbGwucm93SW5kZXgsIGNlbGwucm93RGF0YSk7XG4gICAgfVxuXG4gICAgc2FtZVJvdyhyb3dJbmRleCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3cgJiYgdGhpcy5yb3cuaW5kZXggPT09IHJvd0luZGV4O1xuICAgIH1cblxuICAgIHNhbWVDZWxsKGNlbGw6IElneENlbGwpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmNlbGwuaWQucm93SUQgPT09IGNlbGwuaWQucm93SUQgJiZcbiAgICAgICAgICAgIHRoaXMuY2VsbC5pZC5jb2x1bW5JRCA9PT0gY2VsbC5pZC5jb2x1bW5JRCk7XG4gICAgfVxuXG4gICAgZ2V0IGluRWRpdE1vZGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuY2VsbDtcbiAgICB9XG5cbiAgICBnZXQgcm93RWRpdGluZygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5yb3dFZGl0YWJsZTtcbiAgICB9XG5cbiAgICBnZXQgcHJpbWFyeUtleSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnByaW1hcnlLZXk7XG4gICAgfVxuXG4gICAgYmVnaW5Sb3dFZGl0KCkge1xuICAgICAgICBpZiAodGhpcy5ncmlkLnJvd0VkaXRhYmxlICYmICh0aGlzLmdyaWQucHJpbWFyeUtleSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZ3JpZC5wcmltYXJ5S2V5ID09PSBudWxsKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdUaGUgZ3JpZCBtdXN0IGhhdmUgYSBgcHJpbWFyeUtleWAgc3BlY2lmaWVkIHdoZW4gdXNpbmcgYHJvd0VkaXRhYmxlYCEnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvdyA9IHRoaXMuY3JlYXRlUm93KHRoaXMuY2VsbCk7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSB7XG4gICAgICAgICAgICByb3dJRDogdGhpcy5yb3cuaWQsXG4gICAgICAgICAgICBvbGRWYWx1ZTogdGhpcy5yb3cuZGF0YSxcbiAgICAgICAgICAgIGNhbmNlbDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5ncmlkLm9uUm93RWRpdEVudGVyLmVtaXQoYXJncyk7XG4gICAgICAgIGlmIChhcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgdGhpcy5lbmRSb3dFZGl0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb3cudHJhbnNhY3Rpb25TdGF0ZSA9IHRoaXMuZ3JpZC50cmFuc2FjdGlvbnMuZ2V0QWdncmVnYXRlZFZhbHVlKHRoaXMucm93LmlkLCB0cnVlKTtcbiAgICAgICAgdGhpcy5ncmlkLnRyYW5zYWN0aW9ucy5zdGFydFBlbmRpbmcoKTtcbiAgICAgICAgdGhpcy5ncmlkLm9wZW5Sb3dPdmVybGF5KHRoaXMucm93LmlkKTtcbiAgICB9XG5cblxuICAgIGVuZFJvd0VkaXQoKSB7XG4gICAgICAgIHRoaXMucm93ID0gbnVsbDtcbiAgICB9XG5cbiAgICBiZWdpbihjZWxsKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2VsbCA9IHRoaXMuY3JlYXRlQ2VsbChjZWxsKTtcbiAgICAgICAgdGhpcy5jZWxsLnByaW1hcnlLZXkgPSB0aGlzLnByaW1hcnlLZXk7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSB7XG4gICAgICAgICAgICBjZWxsSUQ6IHRoaXMuY2VsbC5pZCxcbiAgICAgICAgICAgIHJvd0lEOiB0aGlzLmNlbGwuaWQucm93SUQsXG4gICAgICAgICAgICBvbGRWYWx1ZTogdGhpcy5jZWxsLnZhbHVlLFxuICAgICAgICAgICAgY2FuY2VsOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZ3JpZC5vbkNlbGxFZGl0RW50ZXIuZW1pdChhcmdzKTtcblxuICAgICAgICBpZiAoYXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICh0aGlzLnJvd0VkaXRpbmcpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5yb3cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJlZ2luUm93RWRpdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucm93ICYmICF0aGlzLnNhbWVSb3codGhpcy5jZWxsLnJvd0luZGV4KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5lbmRFZGl0KHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2VsbCA9IHRoaXMuY3JlYXRlQ2VsbChjZWxsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJlZ2luUm93RWRpdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW5kUm93RWRpdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5kKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNlbGwgPSBudWxsO1xuICAgIH1cblxuXG4gICAgaXNJbkVkaXRNb2RlKHJvd0luZGV4OiBudW1iZXIsIGNvbHVtbkluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLmNlbGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jZWxsLmNvbHVtbi5pbmRleCA9PT0gY29sdW1uSW5kZXggJiYgdGhpcy5jZWxsLnJvd0luZGV4ID09PSByb3dJbmRleDtcbiAgICB9XG59XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIElneEdyaWRTZWxlY3Rpb25TZXJ2aWNlIHtcblxuICAgIGRyYWdNb2RlID0gZmFsc2U7XG4gICAgYWN0aXZlRWxlbWVudDogSVNlbGVjdGlvbk5vZGUgfCBudWxsO1xuICAgIGtleWJvYXJkU3RhdGUgPSB7fSBhcyBJU2VsZWN0aW9uS2V5Ym9hcmRTdGF0ZTtcbiAgICBwb2ludGVyU3RhdGUgPSB7fSBhcyBJU2VsZWN0aW9uUG9pbnRlclN0YXRlO1xuXG5cbiAgICBzZWxlY3Rpb24gPSBuZXcgTWFwPG51bWJlciwgU2V0PG51bWJlcj4+KCk7XG4gICAgdGVtcCA9IG5ldyBNYXA8bnVtYmVyLCBTZXQ8bnVtYmVyPj4oKTtcbiAgICBfcmFuZ2VzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIF9zZWxlY3Rpb25SYW5nZTogUmFuZ2U7XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgc2VsZWN0ZWQgcmFuZ2VzIGluIHRoZSBncmlkIGZyb20gYm90aFxuICAgICAqIGtleWJvYXJkIGFuZCBwb2ludGVyIGludGVyYWN0aW9uc1xuICAgICAqL1xuICAgIGdldCByYW5nZXMoKTogR3JpZFNlbGVjdGlvblJhbmdlW10ge1xuXG4gICAgICAgIC8vIFRoZSBsYXN0IGFjdGlvbiB3YXMga2V5Ym9hcmQgKyBzaGlmdCBzZWxlY3Rpb24gLT4gYWRkIGl0XG4gICAgICAgIHRoaXMuYWRkS2V5Ym9hcmRSYW5nZSgpO1xuXG4gICAgICAgIGNvbnN0IHJhbmdlcyA9IEFycmF5LmZyb20odGhpcy5fcmFuZ2VzKS5tYXAocmFuZ2UgPT4gSlNPTi5wYXJzZShyYW5nZSkpO1xuXG4gICAgICAgIC8vIE5vIHJhbmdlcyBidXQgd2UgaGF2ZSBhIGZvY3VzZWQgY2VsbCAtPiBhZGQgaXRcbiAgICAgICAgaWYgKCFyYW5nZXMubGVuZ3RoICYmIHRoaXMuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgcmFuZ2VzLnB1c2godGhpcy5nZW5lcmF0ZVJhbmdlKHRoaXMuYWN0aXZlRWxlbWVudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJhbmdlcztcbiAgICB9XG5cbiAgICBnZXQgcHJpbWFyeUJ1dHRvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnRlclN0YXRlLnByaW1hcnlCdXR0b247XG4gICAgfVxuXG4gICAgc2V0IHByaW1hcnlCdXR0b24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5wb2ludGVyU3RhdGUucHJpbWFyeUJ1dHRvbiA9IHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lKSB7XG4gICAgICAgIHRoaXMuaW5pdFBvaW50ZXJTdGF0ZSgpO1xuICAgICAgICB0aGlzLmluaXRLZXlib2FyZFN0YXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSBrZXlib2FyZCBzdGF0ZVxuICAgICAqL1xuICAgIGluaXRLZXlib2FyZFN0YXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmtleWJvYXJkU3RhdGUubm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMua2V5Ym9hcmRTdGF0ZS5zaGlmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmtleWJvYXJkU3RhdGUucmFuZ2UgPSBudWxsO1xuICAgICAgICB0aGlzLmtleWJvYXJkU3RhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSBwb2ludGVyIHN0YXRlXG4gICAgICovXG4gICAgaW5pdFBvaW50ZXJTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wb2ludGVyU3RhdGUubm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMucG9pbnRlclN0YXRlLmN0cmwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb2ludGVyU3RhdGUuc2hpZnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb2ludGVyU3RhdGUucmFuZ2UgPSBudWxsO1xuICAgICAgICB0aGlzLnBvaW50ZXJTdGF0ZS5wcmltYXJ5QnV0dG9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgc2luZ2xlIG5vZGUuXG4gICAgICogU2luZ2xlIGNsaWNrcyB8IEN0cmwgKyBzaW5nbGUgY2xpY2tzIG9uIGNlbGxzIGlzIHRoZSB1c3VhbCBjYXNlLlxuICAgICAqL1xuICAgIGFkZChub2RlOiBJU2VsZWN0aW9uTm9kZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5oYXMobm9kZS5yb3cpID8gdGhpcy5zZWxlY3Rpb24uZ2V0KG5vZGUucm93KS5hZGQobm9kZS5jb2x1bW4pIDpcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnNldChub2RlLnJvdywgbmV3IFNldDxudW1iZXI+KCkpLmdldChub2RlLnJvdykuYWRkKG5vZGUuY29sdW1uKTtcblxuICAgICAgICB0aGlzLl9yYW5nZXMuYWRkKEpTT04uc3RyaW5naWZ5KHRoaXMuZ2VuZXJhdGVSYW5nZShub2RlKSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGFjdGl2ZSBrZXlib2FyZCByYW5nZSBzZWxlY3Rpb24gKGlmIGFueSkgdG8gdGhlIGByYW5nZXNgIG1ldGEuXG4gICAgICovXG4gICAgYWRkS2V5Ym9hcmRSYW5nZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMua2V5Ym9hcmRTdGF0ZS5yYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5fcmFuZ2VzLmFkZChKU09OLnN0cmluZ2lmeSh0aGlzLmtleWJvYXJkU3RhdGUucmFuZ2UpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZShub2RlOiBJU2VsZWN0aW9uTm9kZSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24uaGFzKG5vZGUucm93KSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uZ2V0KG5vZGUucm93KS5kZWxldGUobm9kZS5jb2x1bW4pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzQWN0aXZlTm9kZShub2RlKSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yYW5nZXMuZGVsZXRlKEpTT04uc3RyaW5naWZ5KHRoaXMuZ2VuZXJhdGVSYW5nZShub2RlKSkpO1xuICAgIH1cblxuICAgIGlzSW5NYXAobm9kZTogSVNlbGVjdGlvbk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnNlbGVjdGlvbi5oYXMobm9kZS5yb3cpICYmIHRoaXMuc2VsZWN0aW9uLmdldChub2RlLnJvdykuaGFzKG5vZGUuY29sdW1uKSkgfHxcbiAgICAgICAgICAgICh0aGlzLnRlbXAuaGFzKG5vZGUucm93KSAmJiB0aGlzLnRlbXAuZ2V0KG5vZGUucm93KS5oYXMobm9kZS5jb2x1bW4pKTtcbiAgICB9XG5cbiAgICBzZWxlY3RlZChub2RlOiBJU2VsZWN0aW9uTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZU5vZGUobm9kZSkgfHwgdGhpcy5pc0luTWFwKG5vZGUpO1xuICAgIH1cblxuICAgIGlzQWN0aXZlTm9kZShub2RlOiBJU2VsZWN0aW9uTm9kZSwgbXJsID0gZmFsc2UpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLmFjdGl2ZUVsZW1lbnQuY29sdW1uID09PSBub2RlLmNvbHVtbiAmJiB0aGlzLmFjdGl2ZUVsZW1lbnQucm93ID09PSBub2RlLnJvdztcbiAgICAgICAgICAgIGlmIChtcmwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXlvdXQgPSB0aGlzLmFjdGl2ZUVsZW1lbnQubGF5b3V0O1xuICAgICAgICAgICAgICAgIHJldHVybiBpc0FjdGl2ZSAmJiB0aGlzLmlzQWN0aXZlTGF5b3V0KGxheW91dCwgbm9kZS5sYXlvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlzQWN0aXZlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc0FjdGl2ZUxheW91dChjdXJyZW50OiBJTXVsdGlSb3dMYXlvdXROb2RlLCB0YXJnZXQ6IElNdWx0aVJvd0xheW91dE5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQuY29sdW1uVmlzaWJsZUluZGV4ID09PSB0YXJnZXQuY29sdW1uVmlzaWJsZUluZGV4O1xuICAgIH1cblxuICAgIGFkZFJhbmdlTWV0YShub2RlOiBJU2VsZWN0aW9uTm9kZSwgc3RhdGU/OiBTZWxlY3Rpb25TdGF0ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9yYW5nZXMuYWRkKEpTT04uc3RyaW5naWZ5KHRoaXMuZ2VuZXJhdGVSYW5nZShub2RlLCBzdGF0ZSkpKTtcbiAgICB9XG5cbiAgICByZW1vdmVSYW5nZU1ldGEobm9kZTogSVNlbGVjdGlvbk5vZGUsIHN0YXRlPzogU2VsZWN0aW9uU3RhdGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcmFuZ2VzLmRlbGV0ZShKU09OLnN0cmluZ2lmeSh0aGlzLmdlbmVyYXRlUmFuZ2Uobm9kZSwgc3RhdGUpKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgbmV3IHNlbGVjdGlvbiByYW5nZSBmcm9tIHRoZSBnaXZlbiBgbm9kZWAuXG4gICAgICogSWYgYHN0YXRlYCBpcyBwYXNzZWQgaW5zdGVhZCBpdCB3aWxsIGdlbmVyYXRlIHRoZSByYW5nZSBiYXNlZCBvbiB0aGUgcGFzc2VkIGBub2RlYFxuICAgICAqIGFuZCB0aGUgc3RhcnQgbm9kZSBvZiB0aGUgYHN0YXRlYC5cbiAgICAgKi9cbiAgICBnZW5lcmF0ZVJhbmdlKG5vZGU6IElTZWxlY3Rpb25Ob2RlLCBzdGF0ZT86IFNlbGVjdGlvblN0YXRlKTogR3JpZFNlbGVjdGlvblJhbmdlIHtcbiAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByb3dTdGFydDogbm9kZS5yb3csXG4gICAgICAgICAgICAgICAgcm93RW5kOiBub2RlLnJvdyxcbiAgICAgICAgICAgICAgICBjb2x1bW5TdGFydDogbm9kZS5jb2x1bW4sXG4gICAgICAgICAgICAgICAgY29sdW1uRW5kOiBub2RlLmNvbHVtblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgcm93LCBjb2x1bW4gfSA9IHN0YXRlLm5vZGU7XG4gICAgICAgIGNvbnN0IHJvd1N0YXJ0ID0gTWF0aC5taW4obm9kZS5yb3csIHJvdyk7XG4gICAgICAgIGNvbnN0IHJvd0VuZCA9IE1hdGgubWF4KG5vZGUucm93LCByb3cpO1xuICAgICAgICBjb25zdCBjb2x1bW5TdGFydCA9IE1hdGgubWluKG5vZGUuY29sdW1uLCBjb2x1bW4pO1xuICAgICAgICBjb25zdCBjb2x1bW5FbmQgPSBNYXRoLm1heChub2RlLmNvbHVtbiwgY29sdW1uKTtcblxuICAgICAgICByZXR1cm4geyByb3dTdGFydCwgcm93RW5kLCBjb2x1bW5TdGFydCwgY29sdW1uRW5kIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBrZXlib2FyZFN0YXRlT25LZXlkb3duKG5vZGU6IElTZWxlY3Rpb25Ob2RlLCBzaGlmdDogYm9vbGVhbiwgc2hpZnRUYWI6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5rZXlib2FyZFN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5pdFBvaW50ZXJTdGF0ZSgpO1xuICAgICAgICB0aGlzLmtleWJvYXJkU3RhdGUuc2hpZnQgPSBzaGlmdCAmJiAhc2hpZnRUYWI7XG5cbiAgICAgICAgLy8gS2IgbmF2aWdhdGlvbiB3aXRoIHNoaWZ0IGFuZCBubyBwcmV2aW91cyBub2RlLlxuICAgICAgICAvLyBDbGVhciB0aGUgY3VycmVudCBzZWxlY3Rpb24gaW5pdCB0aGUgc3RhcnQgbm9kZS5cbiAgICAgICAgaWYgKHRoaXMua2V5Ym9hcmRTdGF0ZS5zaGlmdCAmJiAhdGhpcy5rZXlib2FyZFN0YXRlLm5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRTdGF0ZS5ub2RlID0gbm9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGtleWJvYXJkU3RhdGVPbkZvY3VzKG5vZGU6IElTZWxlY3Rpb25Ob2RlLCBlbWl0dGVyOiBFdmVudEVtaXR0ZXI8R3JpZFNlbGVjdGlvblJhbmdlPiwgZG9tKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGtiU3RhdGUgPSB0aGlzLmtleWJvYXJkU3RhdGU7XG5cbiAgICAgICAgLy8gRm9jdXMgdHJpZ2dlcmVkIGJ5IGtleWJvYXJkIG5hdmlnYXRpb25cbiAgICAgICAgaWYgKGtiU3RhdGUuYWN0aXZlKSB7XG4gICAgICAgICAgICBpZiAoaXNDaHJvbWl1bSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW92ZVNlbGVjdGlvbkNocm9tZShkb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RhcnQgZ2VuZXJhdGluZyBhIHJhbmdlIGlmIHNoaWZ0IGlzIGhvbGRcbiAgICAgICAgICAgIGlmIChrYlN0YXRlLnNoaWZ0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnU2VsZWN0KG5vZGUsIGtiU3RhdGUpO1xuICAgICAgICAgICAgICAgIGtiU3RhdGUucmFuZ2UgPSB0aGlzLmdlbmVyYXRlUmFuZ2Uobm9kZSwga2JTdGF0ZSk7XG4gICAgICAgICAgICAgICAgZW1pdHRlci5lbWl0KHRoaXMuZ2VuZXJhdGVSYW5nZShub2RlLCBrYlN0YXRlKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmluaXRLZXlib2FyZFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLmFkZChub2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvaW50ZXJEb3duKG5vZGU6IElTZWxlY3Rpb25Ob2RlLCBzaGlmdDogYm9vbGVhbiwgY3RybDogYm9vbGVhbik6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuYWRkS2V5Ym9hcmRSYW5nZSgpO1xuICAgICAgICB0aGlzLmluaXRLZXlib2FyZFN0YXRlKCk7XG4gICAgICAgIHRoaXMucG9pbnRlclN0YXRlLmN0cmwgPSBjdHJsO1xuICAgICAgICB0aGlzLnBvaW50ZXJTdGF0ZS5zaGlmdCA9IHNoaWZ0O1xuXG4gICAgICAgIC8vIE5vIGN0cmwga2V5IHByZXNzZWQgLSBubyBtdWx0aXBsZSBzZWxlY3Rpb25cbiAgICAgICAgaWYgKCFjdHJsKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hpZnQpIHtcbiAgICAgICAgICAgIC8vIE5vIHByZXZpb3VzbHkgJ2NsaWNrZWQnIG5vZGUuIFVzZSB0aGUgbGFzdCBhY3RpdmUgbm9kZS5cbiAgICAgICAgICAgIGlmICghdGhpcy5wb2ludGVyU3RhdGUubm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9pbnRlclN0YXRlLm5vZGUgPSB0aGlzLmFjdGl2ZUVsZW1lbnQgfHwgbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucG9pbnRlckRvd25TaGlmdEtleShub2RlKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJUZXh0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbW92ZVJhbmdlTWV0YShub2RlKTtcbiAgICAgICAgdGhpcy5wb2ludGVyU3RhdGUubm9kZSA9IG5vZGU7XG4gICAgfVxuXG4gICAgcG9pbnRlckRvd25TaGlmdEtleShub2RlOiBJU2VsZWN0aW9uTm9kZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0UmFuZ2Uobm9kZSwgdGhpcy5wb2ludGVyU3RhdGUpO1xuICAgIH1cblxuICAgIG1lcmdlTWFwKHRhcmdldDogTWFwPG51bWJlciwgU2V0PG51bWJlcj4+LCBzb3VyY2U6IE1hcDxudW1iZXIsIFNldDxudW1iZXI+Pik6IHZvaWQge1xuICAgICAgICBjb25zdCBpdGVyYXRvciA9IHNvdXJjZS5lbnRyaWVzKCk7XG4gICAgICAgIGxldCBwYWlyID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICBsZXQga2V5OiBudW1iZXI7XG4gICAgICAgIGxldCB2YWx1ZTogU2V0PG51bWJlcj47XG5cbiAgICAgICAgd2hpbGUgKCFwYWlyLmRvbmUpIHtcbiAgICAgICAgICAgIFtrZXksIHZhbHVlXSA9IHBhaXIudmFsdWU7XG4gICAgICAgICAgICBpZiAodGFyZ2V0LmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0YXJnZXQuZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChyZWNvcmQgPT4gbmV3VmFsdWUuYWRkKHJlY29yZCkpO1xuICAgICAgICAgICAgICAgIHRhcmdldC5zZXQoa2V5LCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYWlyID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9pbnRlckVudGVyKG5vZGU6IElTZWxlY3Rpb25Ob2RlLCBldmVudDogUG9pbnRlckV2ZW50KTogYm9vbGVhbiB7XG4gICAgICAgIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9wb2ludGVyZXZlbnRzLyN0aGUtYnV0dG9uLXByb3BlcnR5XG4gICAgICAgIHRoaXMuZHJhZ01vZGUgPSBldmVudC5idXR0b25zID09PSAxICYmIGV2ZW50LmJ1dHRvbiA9PT0gLTE7XG4gICAgICAgIGlmICghdGhpcy5kcmFnTW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xlYXJUZXh0U2VsZWN0aW9uKCk7XG5cbiAgICAgICAgLy8gSWYgdGhlIHVzZXJzIHRyaWdnZXJzIGEgZHJhZy1saWtlIGV2ZW50IGJ5IGZpcnN0IGNsaWNraW5nIG91dHNpZGUgdGhlIGdyaWQgY2VsbHNcbiAgICAgICAgLy8gYW5kIHRoZW4gZW50ZXJzIGluIHRoZSBncmlkIGJvZHkgd2UgbWF5IG5vdCBoYXZlIGEgaW5pdGlhbCBwb2ludGVyIHN0YXJ0aW5nIG5vZGUuXG4gICAgICAgIC8vIEFzc3VtZSB0aGUgZmlyc3QgcG9pbnRlcmVudGVyIG5vZGUgaXMgd2hlcmUgd2Ugc3RhcnQuXG4gICAgICAgIGlmICghdGhpcy5wb2ludGVyU3RhdGUubm9kZSkge1xuICAgICAgICAgICAgdGhpcy5wb2ludGVyU3RhdGUubm9kZSA9IG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvaW50ZXJTdGF0ZS5jdHJsID8gdGhpcy5zZWxlY3RSYW5nZShub2RlLCB0aGlzLnBvaW50ZXJTdGF0ZSwgdGhpcy50ZW1wKSA6XG4gICAgICAgICAgICB0aGlzLmRyYWdTZWxlY3Qobm9kZSwgdGhpcy5wb2ludGVyU3RhdGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwb2ludGVyVXAobm9kZTogSVNlbGVjdGlvbk5vZGUsIGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxHcmlkU2VsZWN0aW9uUmFuZ2U+KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmRyYWdNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3RvcmVUZXh0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmFkZFJhbmdlTWV0YShub2RlLCB0aGlzLnBvaW50ZXJTdGF0ZSk7XG4gICAgICAgICAgICB0aGlzLm1lcmdlTWFwKHRoaXMuc2VsZWN0aW9uLCB0aGlzLnRlbXApO1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1blRhc2soKCkgPT4gZW1pdHRlci5lbWl0KHRoaXMuZ2VuZXJhdGVSYW5nZShub2RlLCB0aGlzLnBvaW50ZXJTdGF0ZSkpKTtcbiAgICAgICAgICAgIHRoaXMudGVtcC5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5kcmFnTW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wb2ludGVyU3RhdGUuc2hpZnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJUZXh0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnJlc3RvcmVUZXh0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmFkZFJhbmdlTWV0YShub2RlLCB0aGlzLnBvaW50ZXJTdGF0ZSk7XG4gICAgICAgICAgICBlbWl0dGVyLmVtaXQodGhpcy5nZW5lcmF0ZVJhbmdlKG5vZGUsIHRoaXMucG9pbnRlclN0YXRlKSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkKG5vZGUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc2VsZWN0UmFuZ2Uobm9kZTogSVNlbGVjdGlvbk5vZGUsIHN0YXRlOiBTZWxlY3Rpb25TdGF0ZSwgY29sbGVjdGlvbjogTWFwPG51bWJlciwgU2V0PG51bWJlcj4+ID0gdGhpcy5zZWxlY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgaWYgKGNvbGxlY3Rpb24gPT09IHRoaXMudGVtcCkge1xuICAgICAgICAgICAgY29sbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm93U3RhcnQsIHJvd0VuZCwgY29sdW1uU3RhcnQsIGNvbHVtbkVuZCB9ID0gdGhpcy5nZW5lcmF0ZVJhbmdlKG5vZGUsIHN0YXRlKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHJvd1N0YXJ0OyBpIDw9IHJvd0VuZDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gY29sdW1uU3RhcnQgYXMgbnVtYmVyOyBqIDw9IGNvbHVtbkVuZDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbi5oYXMoaSkgPyBjb2xsZWN0aW9uLmdldChpKS5hZGQoaikgOlxuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLnNldChpLCBuZXcgU2V0PG51bWJlcj4oKSkuZ2V0KGkpLmFkZChqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYWdTZWxlY3Qobm9kZTogSVNlbGVjdGlvbk5vZGUsIHN0YXRlOiBTZWxlY3Rpb25TdGF0ZSk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMucG9pbnRlclN0YXRlLmN0cmwpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RSYW5nZShub2RlLCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgIHRoaXMudGVtcC5jbGVhcigpO1xuICAgICAgICB0aGlzLl9yYW5nZXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBjbGVhclRleHRTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgaWYgKHNlbGVjdGlvbi5yYW5nZUNvdW50KSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25SYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uUmFuZ2UuY29sbGFwc2UodHJ1ZSk7XG4gICAgICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXN0b3JlVGV4dFNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICBpZiAoIXNlbGVjdGlvbi5yYW5nZUNvdW50KSB7XG4gICAgICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UodGhpcy5fc2VsZWN0aW9uUmFuZ2UgfHwgZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAo4pWvwrDilqHCsO+8ieKVr++4tSDilLvilIHilLtcbiAgICAgKiBDaHJvbWUgYW5kIENocm9taXVtIGRvbid0IGNhcmUgYWJvdXQgdGhlIGFjdGl2ZVxuICAgICAqIHJhbmdlIGFmdGVyIGtleWJvYXJkIG5hdmlnYXRpb24sIHRodXMgdGhpcy5cbiAgICAgKi9cbiAgICBfbW92ZVNlbGVjdGlvbkNocm9tZShub2RlOiBOb2RlKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICBjb25zdCByYW5nZSA9IG5ldyBSYW5nZSgpO1xuICAgICAgICByYW5nZS5zZWxlY3ROb2RlKG5vZGUpO1xuICAgICAgICByYW5nZS5jb2xsYXBzZSh0cnVlKTtcbiAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Nocm9taXVtKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoL0Nocm9tfGU/aXVtL2cudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSB8fCAvR29vZ2xlIEluYy9nLnRlc3QobmF2aWdhdG9yLnZlbmRvcikpICYmICEvRWRnZS9nLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG59XG4iXX0=