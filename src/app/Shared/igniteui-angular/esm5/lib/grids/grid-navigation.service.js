/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FilterMode } from './grid-base.component';
import { first } from 'rxjs/operators';
import { IgxGridGroupByRowComponent } from './grid/groupby-row.component';
/** @enum {string} */
var MoveDirection = {
    LEFT: 'left',
    RIGHT: 'right',
};
/**
 * @hidden
 */
var IgxGridNavigationService = /** @class */ (function () {
    function IgxGridNavigationService() {
    }
    Object.defineProperty(IgxGridNavigationService.prototype, "displayContainerWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return Math.round(this.grid.parentVirtDir.dc.instance._viewContainer.element.nativeElement.offsetWidth);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridNavigationService.prototype, "displayContainerScrollLeft", {
        get: /**
         * @return {?}
         */
        function () {
            return Math.round(this.grid.parentVirtDir.getHorizontalScroll().scrollLeft);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridNavigationService.prototype, "verticalDisplayContainerElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.grid.verticalScrollContainer.dc.instance._viewContainer.element.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} rowIndex
     * @return {?}
     */
    IgxGridNavigationService.prototype.horizontalScroll = /**
     * @param {?} rowIndex
     * @return {?}
     */
    function (rowIndex) {
        /** @type {?} */
        var rowComp = this.grid.dataRowList.find(function (row) { return row.index === rowIndex; }) || this.grid.dataRowList.first;
        if (!rowComp) {
            rowComp = this.grid.summariesRowList.find(function (row) { return row.index === rowIndex; });
        }
        return rowComp.virtDirRow;
    };
    /**
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    IgxGridNavigationService.prototype.getColumnUnpinnedIndex = /**
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    function (visibleColumnIndex) {
        /** @type {?} */
        var column = this.grid.unpinnedColumns.find(function (col) { return !col.columnGroup && col.visibleIndex === visibleColumnIndex; });
        return this.grid.pinnedColumns.length ? this.grid.unpinnedColumns.filter(function (c) { return !c.columnGroup; }).indexOf(column) :
            visibleColumnIndex;
    };
    /**
     * @param {?} columnIndex
     * @return {?}
     */
    IgxGridNavigationService.prototype.isColumnFullyVisible = /**
     * @param {?} columnIndex
     * @return {?}
     */
    function (columnIndex) {
        return this.isColumnRightEdgeVisible(columnIndex) && this.isColumnLeftEdgeVisible(columnIndex);
    };
    /**
     * @param {?} columnIndex
     * @return {?}
     */
    IgxGridNavigationService.prototype.isColumnRightEdgeVisible = /**
     * @param {?} columnIndex
     * @return {?}
     */
    function (columnIndex) {
        /** @type {?} */
        var forOfDir = this.forOfDir();
        if (this.isColumnPinned(columnIndex, forOfDir)) {
            return true;
        }
        /** @type {?} */
        var index = this.getColumnUnpinnedIndex(columnIndex);
        return this.displayContainerWidth >= forOfDir.getColumnScrollLeft(index + 1) - this.displayContainerScrollLeft;
    };
    /**
     * @param {?} columnIndex
     * @return {?}
     */
    IgxGridNavigationService.prototype.isColumnLeftEdgeVisible = /**
     * @param {?} columnIndex
     * @return {?}
     */
    function (columnIndex) {
        /** @type {?} */
        var forOfDir = this.forOfDir();
        if (this.isColumnPinned(columnIndex, forOfDir)) {
            return true;
        }
        /** @type {?} */
        var index = this.getColumnUnpinnedIndex(columnIndex);
        return this.displayContainerScrollLeft <= forOfDir.getColumnScrollLeft(index);
    };
    /**
     * @private
     * @return {?}
     */
    IgxGridNavigationService.prototype.forOfDir = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var forOfDir;
        if (this.grid.dataRowList.length > 0) {
            forOfDir = this.grid.dataRowList.first.virtDirRow;
        }
        else {
            forOfDir = this.grid.headerContainer;
        }
        return forOfDir;
    };
    /**
     * @private
     * @param {?} columnIndex
     * @param {?} forOfDir
     * @return {?}
     */
    IgxGridNavigationService.prototype.isColumnPinned = /**
     * @private
     * @param {?} columnIndex
     * @param {?} forOfDir
     * @return {?}
     */
    function (columnIndex, forOfDir) {
        /** @type {?} */
        var horizontalScroll = forOfDir.getHorizontalScroll();
        /** @type {?} */
        var column = this.grid.columnList.filter(function (c) { return !c.columnGroup; }).find(function (col) { return col.visibleIndex === columnIndex; });
        return (!horizontalScroll.clientWidth || column.pinned);
    };
    Object.defineProperty(IgxGridNavigationService.prototype, "gridOrderedColumns", {
        get: /**
         * @return {?}
         */
        function () {
            return tslib_1.__spread(this.grid.pinnedColumns, this.grid.unpinnedColumns).filter(function (c) { return !c.columnGroup; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} rowIndex
     * @return {?}
     */
    IgxGridNavigationService.prototype.isRowInEditMode = /**
     * @param {?} rowIndex
     * @return {?}
     */
    function (rowIndex) {
        return this.grid.rowEditable && (this.grid.rowInEditMode && this.grid.rowInEditMode.index === rowIndex);
    };
    /**
     * @param {?} direction
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    IgxGridNavigationService.prototype.findNextEditable = /**
     * @param {?} direction
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    function (direction, visibleColumnIndex) {
        // go trough all columns in one cycle instead of
        // splice().reverse().find()
        /** @type {?} */
        var gridColumns = this.gridOrderedColumns;
        /** @type {?} */
        var start = visibleColumnIndex;
        /** @type {?} */
        var end = 0;
        /** @type {?} */
        var step = 0;
        /** @type {?} */
        var result = -1;
        if (direction === MoveDirection.LEFT) {
            end = 0;
            step = -1;
        }
        else if (direction === MoveDirection.RIGHT) {
            end = gridColumns.length - 1;
            step = 1;
        }
        for (var c = start; (c * step) <= end; c += step) {
            /** @type {?} */
            var column = gridColumns[c];
            if (column.editable) {
                result = c;
                break;
            }
        }
        return result;
    };
    /**
     * @param {?} rowIndex
     * @param {?} visibleColumnIndex
     * @param {?=} isSummary
     * @return {?}
     */
    IgxGridNavigationService.prototype.getCellElementByVisibleIndex = /**
     * @param {?} rowIndex
     * @param {?} visibleColumnIndex
     * @param {?=} isSummary
     * @return {?}
     */
    function (rowIndex, visibleColumnIndex, isSummary) {
        if (isSummary === void 0) { isSummary = false; }
        /** @type {?} */
        var cellSelector = this.getCellSelector(visibleColumnIndex, isSummary);
        return this.grid.nativeElement.querySelector(cellSelector + "[data-rowindex=\"" + rowIndex + "\"][data-visibleIndex=\"" + visibleColumnIndex + "\"]");
    };
    /**
     * @param {?} element
     * @param {?} selectedNode
     * @return {?}
     */
    IgxGridNavigationService.prototype.onKeydownArrowRight = /**
     * @param {?} element
     * @param {?} selectedNode
     * @return {?}
     */
    function (element, selectedNode) {
        /** @type {?} */
        var rowIndex = selectedNode.row;
        /** @type {?} */
        var visibleColumnIndex = selectedNode.column;
        /** @type {?} */
        var isSummary = selectedNode.isSummaryRow;
        if (this.grid.unpinnedColumns[this.grid.unpinnedColumns.length - 1].visibleIndex === visibleColumnIndex) {
            return;
        }
        if (this.isColumnRightEdgeVisible(visibleColumnIndex + 1)) { // if next column is fully visible or is pinned
            if (element.classList.contains('igx-grid__td--pinned-last') || element.classList.contains('igx-grid-summary--pinned-last')) {
                if (this.isColumnLeftEdgeVisible(visibleColumnIndex + 1)) {
                    element.nextElementSibling.firstElementChild.focus({ preventScroll: true });
                }
                else {
                    this.getFocusableGrid().nativeElement.focus({ preventScroll: true });
                    this.grid.parentVirtDir.onChunkLoad
                        .pipe(first())
                        .subscribe(function () {
                        element.nextElementSibling.firstElementChild.focus({ preventScroll: true });
                    });
                    this.horizontalScroll(rowIndex).scrollTo(0);
                }
            }
            else {
                element.nextElementSibling.focus({ preventScroll: true });
            }
        }
        else {
            this.performHorizontalScrollToCell(rowIndex, visibleColumnIndex + 1, isSummary);
        }
    };
    /**
     * @param {?} element
     * @param {?} selectedNode
     * @return {?}
     */
    IgxGridNavigationService.prototype.onKeydownArrowLeft = /**
     * @param {?} element
     * @param {?} selectedNode
     * @return {?}
     */
    function (element, selectedNode) {
        /** @type {?} */
        var rowIndex = selectedNode.row;
        /** @type {?} */
        var visibleColumnIndex = selectedNode.column;
        /** @type {?} */
        var isSummary = selectedNode.isSummaryRow;
        if (visibleColumnIndex === 0) {
            return;
        }
        /** @type {?} */
        var index = this.getColumnUnpinnedIndex(visibleColumnIndex - 1);
        if (!element.previousElementSibling && this.grid.pinnedColumns.length && index === -1) {
            element.parentNode.previousElementSibling.focus({ preventScroll: true });
        }
        else if (!this.isColumnLeftEdgeVisible(visibleColumnIndex - 1)) {
            this.performHorizontalScrollToCell(rowIndex, visibleColumnIndex - 1, isSummary);
        }
        else {
            element.previousElementSibling.focus({ preventScroll: true });
        }
    };
    /**
     * @param {?} rowIndex
     * @param {?} currentColumnVisibleIndex
     * @return {?}
     */
    IgxGridNavigationService.prototype.movePreviousEditable = /**
     * @param {?} rowIndex
     * @param {?} currentColumnVisibleIndex
     * @return {?}
     */
    function (rowIndex, currentColumnVisibleIndex) {
        /** @type {?} */
        var prevEditableColumnIndex = this.findNextEditable(MoveDirection.LEFT, currentColumnVisibleIndex - 1);
        if (prevEditableColumnIndex === -1 && this.grid.rowEditTabs.length) {
            //  TODO: make gridAPI visible for internal use and remove cast to any
            ((/** @type {?} */ (this.grid))).gridAPI.submit_value();
            this.grid.rowEditTabs.last.element.nativeElement.focus();
            return;
        }
        this.focusEditableTarget(rowIndex, prevEditableColumnIndex);
    };
    /**
     * @param {?} rowIndex
     * @param {?} currentColumnVisibleIndex
     * @return {?}
     */
    IgxGridNavigationService.prototype.moveNextEditable = /**
     * @param {?} rowIndex
     * @param {?} currentColumnVisibleIndex
     * @return {?}
     */
    function (rowIndex, currentColumnVisibleIndex) {
        /** @type {?} */
        var nextEditableColumnIndex = this.findNextEditable(MoveDirection.RIGHT, currentColumnVisibleIndex + 1);
        if (nextEditableColumnIndex === -1 && this.grid.rowEditTabs.length) {
            //  TODO: make gridAPI visible for internal use and remove cast to any
            ((/** @type {?} */ (this.grid))).gridAPI.submit_value();
            this.grid.rowEditTabs.first.element.nativeElement.focus();
            return;
        }
        this.focusEditableTarget(rowIndex, nextEditableColumnIndex);
    };
    /**
     * @param {?} rowIndex
     * @param {?} columnIndex
     * @return {?}
     */
    IgxGridNavigationService.prototype.focusEditableTarget = /**
     * @param {?} rowIndex
     * @param {?} columnIndex
     * @return {?}
     */
    function (rowIndex, columnIndex) {
        if (this.isColumnFullyVisible(columnIndex)) {
            this.getCellElementByVisibleIndex(rowIndex, columnIndex).focus();
        }
        else {
            this.performHorizontalScrollToCell(rowIndex, columnIndex);
        }
    };
    /**
     * @param {?} rowIndex
     * @param {?=} isSummary
     * @return {?}
     */
    IgxGridNavigationService.prototype.onKeydownHome = /**
     * @param {?} rowIndex
     * @param {?=} isSummary
     * @return {?}
     */
    function (rowIndex, isSummary) {
        if (isSummary === void 0) { isSummary = false; }
        /** @type {?} */
        var rowList = isSummary ? this.grid.summariesRowList : this.grid.dataRowList;
        /** @type {?} */
        var rowElement = rowList.find(function (row) { return row.index === rowIndex; });
        /** @type {?} */
        var cellSelector = this.getCellSelector(0, isSummary);
        if (!rowElement) {
            return;
        }
        rowElement = rowElement.nativeElement;
        /** @type {?} */
        var firstCell = rowElement.querySelector(cellSelector);
        if (this.grid.pinnedColumns.length || this.displayContainerScrollLeft === 0) {
            firstCell.focus({ preventScroll: true });
        }
        else {
            this.getFocusableGrid().nativeElement.focus({ preventScroll: true });
            this.grid.parentVirtDir.onChunkLoad
                .pipe(first())
                .subscribe(function () {
                firstCell = rowElement.querySelector(cellSelector);
                firstCell.focus({ preventScroll: true });
            });
            this.horizontalScroll(rowIndex).scrollTo(0);
        }
    };
    /**
     * @param {?} rowIndex
     * @param {?=} isSummary
     * @return {?}
     */
    IgxGridNavigationService.prototype.onKeydownEnd = /**
     * @param {?} rowIndex
     * @param {?=} isSummary
     * @return {?}
     */
    function (rowIndex, isSummary) {
        var _this = this;
        if (isSummary === void 0) { isSummary = false; }
        /** @type {?} */
        var index = this.grid.unpinnedColumns[this.grid.unpinnedColumns.length - 1].visibleIndex;
        /** @type {?} */
        var rowList = isSummary ? this.grid.summariesRowList : this.grid.dataRowList;
        /** @type {?} */
        var rowElement = rowList.find(function (row) { return row.index === rowIndex; });
        if (!rowElement) {
            return;
        }
        rowElement = rowElement.nativeElement;
        if (this.isColumnRightEdgeVisible(index)) {
            /** @type {?} */
            var allCells = rowElement.querySelectorAll(this.getCellSelector(-1, isSummary));
            allCells[allCells.length - 1].focus({ preventScroll: true });
        }
        else {
            this.getFocusableGrid().nativeElement.focus({ preventScroll: true });
            this.grid.parentVirtDir.onChunkLoad
                .pipe(first())
                .subscribe(function () {
                /** @type {?} */
                var allCells = rowElement.querySelectorAll(_this.getCellSelector(-1, isSummary));
                allCells[allCells.length - 1].focus({ preventScroll: true });
            });
            this.horizontalScroll(rowIndex).scrollTo(this.getColumnUnpinnedIndex(index));
        }
    };
    /**
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    IgxGridNavigationService.prototype.navigateTop = /**
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    function (visibleColumnIndex) {
        var _this = this;
        /** @type {?} */
        var verticalScroll = this.grid.verticalScrollContainer.getVerticalScroll();
        /** @type {?} */
        var cellSelector = this.getCellSelector(visibleColumnIndex);
        if (verticalScroll.scrollTop === 0) {
            /** @type {?} */
            var cells = this.grid.nativeElement.querySelectorAll(cellSelector + "[data-visibleIndex=\"" + visibleColumnIndex + "\"]");
            cells[0].focus();
        }
        else {
            this.getFocusableGrid().nativeElement.focus({ preventScroll: true });
            this.grid.verticalScrollContainer.scrollTo(0);
            this.grid.verticalScrollContainer.onChunkLoad
                .pipe(first()).subscribe(function () {
                /** @type {?} */
                var cells = _this.grid.nativeElement.querySelectorAll(cellSelector + "[data-visibleIndex=\"" + visibleColumnIndex + "\"]");
                if (cells.length > 0) {
                    cells[0].focus();
                }
            });
        }
    };
    /**
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    IgxGridNavigationService.prototype.navigateBottom = /**
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    function (visibleColumnIndex) {
        var _this = this;
        /** @type {?} */
        var verticalScroll = this.grid.verticalScrollContainer.getVerticalScroll();
        /** @type {?} */
        var cellSelector = this.getCellSelector(visibleColumnIndex);
        if (verticalScroll.scrollHeight === 0 ||
            verticalScroll.scrollTop === verticalScroll.scrollHeight - this.grid.verticalScrollContainer.igxForContainerSize) {
            /** @type {?} */
            var cells = this.grid.nativeElement.querySelectorAll(cellSelector + "[data-visibleIndex=\"" + visibleColumnIndex + "\"]");
            cells[cells.length - 1].focus();
        }
        else {
            this.getFocusableGrid().nativeElement.focus({ preventScroll: true });
            this.grid.verticalScrollContainer.scrollTo(this.grid.verticalScrollContainer.igxForOf.length - 1);
            this.grid.verticalScrollContainer.onChunkLoad
                .pipe(first()).subscribe(function () {
                /** @type {?} */
                var cells = _this.grid.nativeElement.querySelectorAll(cellSelector + "[data-visibleIndex=\"" + visibleColumnIndex + "\"]");
                if (cells.length > 0) {
                    cells[cells.length - 1].focus();
                }
            });
        }
    };
    /**
     * @param {?} rowElement
     * @param {?} selectedNode
     * @return {?}
     */
    IgxGridNavigationService.prototype.navigateUp = /**
     * @param {?} rowElement
     * @param {?} selectedNode
     * @return {?}
     */
    function (rowElement, selectedNode) {
        var _this = this;
        /** @type {?} */
        var currentRowIndex = selectedNode.row;
        /** @type {?} */
        var visibleColumnIndex = selectedNode.column;
        if (currentRowIndex === 0) {
            return;
        }
        /** @type {?} */
        var containerTopOffset = parseInt(this.verticalDisplayContainerElement.style.top, 10);
        if (!rowElement.previousElementSibling ||
            rowElement.previousElementSibling.offsetTop < Math.abs(containerTopOffset)) {
            this.getFocusableGrid().nativeElement.focus({ preventScroll: true });
            this.grid.verticalScrollContainer.scrollTo(currentRowIndex - 1);
            this.grid.verticalScrollContainer.onChunkLoad
                .pipe(first())
                .subscribe(function () {
                /** @type {?} */
                var tag = rowElement.tagName.toLowerCase();
                /** @type {?} */
                var rowSelector = _this.getRowSelector();
                if (tag === rowSelector || tag === 'igx-grid-summary-row') {
                    rowElement = _this.getRowByIndex(currentRowIndex, tag);
                }
                else {
                    rowElement = _this.grid.nativeElement.querySelector("igx-grid-groupby-row[data-rowindex=\"" + currentRowIndex + "\"]");
                }
                _this.focusPreviousElement(rowElement, visibleColumnIndex);
            });
        }
        else {
            this.focusPreviousElement(rowElement, visibleColumnIndex);
        }
    };
    /**
     * @protected
     * @param {?} currentRowEl
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    IgxGridNavigationService.prototype.focusPreviousElement = /**
     * @protected
     * @param {?} currentRowEl
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    function (currentRowEl, visibleColumnIndex) {
        this.focusElem(currentRowEl.previousElementSibling, visibleColumnIndex);
    };
    /**
     * @param {?} rowElement
     * @param {?} selectedNode
     * @return {?}
     */
    IgxGridNavigationService.prototype.navigateDown = /**
     * @param {?} rowElement
     * @param {?} selectedNode
     * @return {?}
     */
    function (rowElement, selectedNode) {
        var _this = this;
        /** @type {?} */
        var currentRowIndex = selectedNode.row;
        /** @type {?} */
        var visibleColumnIndex = selectedNode.column;
        if (currentRowIndex === this.grid.verticalScrollContainer.igxForOf.length - 1 ||
            (currentRowIndex === 0 && rowElement.tagName.toLowerCase() === 'igx-grid-summary-row')) {
            // check if this is rootSummary row
            return;
        }
        /** @type {?} */
        var rowHeight = this.grid.verticalScrollContainer.getSizeAt(currentRowIndex + 1);
        /** @type {?} */
        var containerHeight = this.grid.calcHeight ? Math.ceil(this.grid.calcHeight) : 0;
        /** @type {?} */
        var targetEndTopOffset = rowElement.nextElementSibling ?
            rowElement.nextElementSibling.offsetTop + rowHeight + parseInt(this.verticalDisplayContainerElement.style.top, 10) :
            containerHeight + rowHeight;
        this.getFocusableGrid().nativeElement.focus({ preventScroll: true });
        if (containerHeight && containerHeight < targetEndTopOffset) {
            /** @type {?} */
            var nextIndex_1 = currentRowIndex + 1;
            this.grid.verticalScrollContainer.scrollTo(nextIndex_1);
            this.grid.verticalScrollContainer.onChunkLoad
                .pipe(first())
                .subscribe(function () {
                rowElement = _this.getNextRowByIndex(nextIndex_1);
                _this.focusElem(rowElement, visibleColumnIndex);
            });
        }
        else {
            this.focusNextElement(rowElement, visibleColumnIndex);
        }
    };
    /**
     * @protected
     * @param {?} rowElement
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    IgxGridNavigationService.prototype.focusElem = /**
     * @protected
     * @param {?} rowElement
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    function (rowElement, visibleColumnIndex) {
        if (rowElement.tagName.toLowerCase() === 'igx-grid-groupby-row') {
            rowElement.focus();
        }
        else {
            /** @type {?} */
            var isSummaryRow = rowElement.tagName.toLowerCase() === 'igx-grid-summary-row';
            if (this.isColumnFullyVisible(visibleColumnIndex)) {
                /** @type {?} */
                var cellSelector = this.getCellSelector(visibleColumnIndex, isSummaryRow);
                /** @type {?} */
                var cell = rowElement.querySelector(cellSelector + "[data-visibleIndex=\"" + visibleColumnIndex + "\"]");
                cell.focus();
                return cell;
            }
            this.performHorizontalScrollToCell(parseInt(rowElement.getAttribute('data-rowindex'), 10), visibleColumnIndex, isSummaryRow);
        }
    };
    /**
     * @protected
     * @param {?} rowElement
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    IgxGridNavigationService.prototype.focusNextElement = /**
     * @protected
     * @param {?} rowElement
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    function (rowElement, visibleColumnIndex) {
        return this.focusElem(rowElement.nextElementSibling, visibleColumnIndex);
    };
    /**
     * @return {?}
     */
    IgxGridNavigationService.prototype.goToFirstCell = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var verticalScroll = this.grid.verticalScrollContainer.getVerticalScroll();
        /** @type {?} */
        var horizontalScroll = this.grid.dataRowList.first.virtDirRow.getHorizontalScroll();
        if (verticalScroll.scrollTop === 0) {
            this.onKeydownHome(this.grid.dataRowList.first.index);
        }
        else {
            if (!horizontalScroll.clientWidth || parseInt(horizontalScroll.scrollLeft, 10) <= 1 || this.grid.pinnedColumns.length) {
                this.navigateTop(0);
            }
            else {
                this.getFocusableGrid().nativeElement.focus({ preventScroll: true });
                this.horizontalScroll(this.grid.dataRowList.first.index).scrollTo(0);
                this.grid.parentVirtDir.onChunkLoad
                    .pipe(first())
                    .subscribe(function () {
                    _this.navigateTop(0);
                });
            }
        }
    };
    /**
     * @return {?}
     */
    IgxGridNavigationService.prototype.goToLastCell = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var verticalScroll = this.grid.verticalScrollContainer.getVerticalScroll();
        if (verticalScroll.scrollHeight === 0 ||
            verticalScroll.scrollTop === verticalScroll.scrollHeight - this.grid.verticalScrollContainer.igxForContainerSize) {
            /** @type {?} */
            var rows = this.getAllRows();
            /** @type {?} */
            var rowIndex = parseInt(rows[rows.length - 1].getAttribute('data-rowIndex'), 10);
            this.onKeydownEnd(rowIndex);
        }
        else {
            this.getFocusableGrid().nativeElement.focus({ preventScroll: true });
            this.grid.verticalScrollContainer.scrollTo(this.grid.verticalScrollContainer.igxForOf.length - 1);
            this.grid.verticalScrollContainer.onChunkLoad
                .pipe(first()).subscribe(function () {
                /** @type {?} */
                var rows = _this.getAllRows();
                if (rows.length > 0) {
                    /** @type {?} */
                    var rowIndex = parseInt(rows[rows.length - 1].getAttribute('data-rowIndex'), 10);
                    _this.onKeydownEnd(rowIndex);
                }
            });
        }
    };
    /**
     * @return {?}
     */
    IgxGridNavigationService.prototype.goToLastBodyElement = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var verticalScroll = this.grid.verticalScrollContainer.getVerticalScroll();
        if (verticalScroll.scrollHeight === 0 ||
            verticalScroll.scrollTop === verticalScroll.scrollHeight - this.grid.verticalScrollContainer.igxForContainerSize) {
            /** @type {?} */
            var rowIndex = this.grid.verticalScrollContainer.igxForOf.length - 1;
            /** @type {?} */
            var row = this.grid.nativeElement.querySelector("[data-rowindex=\"" + rowIndex + "\"]");
            if (row && row.tagName.toLowerCase() === 'igx-grid-groupby-row') {
                row.focus();
                return;
            }
            /** @type {?} */
            var isSummary = (row && row.tagName.toLowerCase() === 'igx-grid-summary-row') ? true : false;
            this.onKeydownEnd(rowIndex, isSummary);
        }
        else {
            this.grid.verticalScrollContainer.scrollTo(this.grid.verticalScrollContainer.igxForOf.length - 1);
            this.grid.verticalScrollContainer.onChunkLoad
                .pipe(first()).subscribe(function () {
                /** @type {?} */
                var rowIndex = _this.grid.verticalScrollContainer.igxForOf.length - 1;
                /** @type {?} */
                var row = _this.grid.nativeElement.querySelector("[data-rowindex=\"" + rowIndex + "\"]");
                if (row && row.tagName.toLowerCase() === 'igx-grid-groupby-row') {
                    row.focus();
                    return;
                }
                /** @type {?} */
                var isSummary = (row && row.tagName.toLowerCase() === 'igx-grid-summary-row') ? true : false;
                _this.onKeydownEnd(rowIndex, isSummary);
            });
        }
    };
    /**
     * @param {?} currentRowEl
     * @param {?} selectedNode
     * @return {?}
     */
    IgxGridNavigationService.prototype.performTab = /**
     * @param {?} currentRowEl
     * @param {?} selectedNode
     * @return {?}
     */
    function (currentRowEl, selectedNode) {
        /** @type {?} */
        var rowIndex = selectedNode.row;
        /** @type {?} */
        var visibleColumnIndex = selectedNode.column;
        /** @type {?} */
        var isSummaryRow = selectedNode.isSummaryRow;
        if (isSummaryRow && rowIndex === 0 &&
            this.grid.unpinnedColumns[this.grid.unpinnedColumns.length - 1].visibleIndex === visibleColumnIndex) {
            return;
        }
        if (this.isRowInEditMode(rowIndex)) {
            this.moveNextEditable(rowIndex, visibleColumnIndex);
            return;
        }
        if (this.grid.unpinnedColumns[this.grid.unpinnedColumns.length - 1].visibleIndex === visibleColumnIndex) {
            /** @type {?} */
            var rowEl = this.grid.rowList.find(function (row) { return row.index === rowIndex + 1; }) ?
                this.grid.rowList.find(function (row) { return row.index === rowIndex + 1; }) :
                this.grid.summariesRowList.find(function (row) { return row.index === rowIndex + 1; });
            if (rowIndex === this.grid.verticalScrollContainer.igxForOf.length - 1 && this.grid.rootSummariesEnabled) {
                this.onKeydownHome(0, true);
                return;
            }
            if (rowEl) {
                this.navigateDown(currentRowEl, { row: rowIndex, column: 0 });
            }
        }
        else {
            /** @type {?} */
            var cell = this.getCellElementByVisibleIndex(rowIndex, visibleColumnIndex, isSummaryRow);
            if (cell) {
                this.onKeydownArrowRight(cell, selectedNode);
            }
        }
    };
    /**
     * @param {?=} toStart
     * @return {?}
     */
    IgxGridNavigationService.prototype.moveFocusToFilterCell = /**
     * @param {?=} toStart
     * @return {?}
     */
    function (toStart) {
        if (this.grid.filteringService.isFilterRowVisible) {
            this.grid.filteringService.focusFilterRowCloseButton();
            return;
        }
        /** @type {?} */
        var columns = this.grid.filteringService.unpinnedFilterableColumns;
        /** @type {?} */
        var targetIndex = toStart ? 0 : columns.length - 1;
        /** @type {?} */
        var visibleIndex = columns[targetIndex].visibleIndex;
        /** @type {?} */
        var isVisible = toStart ? this.isColumnLeftEdgeVisible(visibleIndex) : this.isColumnRightEdgeVisible(visibleIndex);
        if (isVisible) {
            this.grid.filteringService.focusFilterCellChip(columns[targetIndex], false);
        }
        else {
            this.grid.filteringService.scrollToFilterCell(columns[targetIndex], false);
        }
    };
    /**
     * @param {?} column
     * @param {?} eventArgs
     * @return {?}
     */
    IgxGridNavigationService.prototype.navigatePrevFilterCell = /**
     * @param {?} column
     * @param {?} eventArgs
     * @return {?}
     */
    function (column, eventArgs) {
        /** @type {?} */
        var cols = this.grid.filteringService.unpinnedFilterableColumns;
        /** @type {?} */
        var prevFilterableIndex = cols.indexOf(column) - 1;
        /** @type {?} */
        var visibleIndex = column.visibleIndex;
        if (visibleIndex === 0 || prevFilterableIndex < 0) {
            // prev is not filter cell
            /** @type {?} */
            var firstFiltarableCol = this.getFirstPinnedFilterableColumn();
            if (!firstFiltarableCol || column === firstFiltarableCol) {
                eventArgs.preventDefault();
            }
            return;
        }
        /** @type {?} */
        var prevColumn = cols[prevFilterableIndex];
        /** @type {?} */
        var prevVisibleIndex = prevColumn.visibleIndex;
        if (prevFilterableIndex >= 0 && visibleIndex > 0 && !this.isColumnLeftEdgeVisible(prevVisibleIndex) && !column.pinned) {
            eventArgs.preventDefault();
            this.grid.filteringService.scrollToFilterCell(prevColumn, false);
        }
    };
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    IgxGridNavigationService.prototype.navigateFirstCellIfPossible = /**
     * @param {?} eventArgs
     * @return {?}
     */
    function (eventArgs) {
        if (this.grid.rowList.length > 0) {
            if (this.grid.rowList.filter(function (row) { return row instanceof IgxGridGroupByRowComponent; }).length > 0) {
                eventArgs.stopPropagation();
                return;
            }
            this.goToFirstCell();
        }
        else if (this.grid.rootSummariesEnabled) {
            this.onKeydownHome(0, true);
        }
        eventArgs.preventDefault();
    };
    /**
     * @param {?} column
     * @param {?} eventArgs
     * @return {?}
     */
    IgxGridNavigationService.prototype.navigateNextFilterCell = /**
     * @param {?} column
     * @param {?} eventArgs
     * @return {?}
     */
    function (column, eventArgs) {
        /** @type {?} */
        var cols = this.grid.filteringService.unpinnedFilterableColumns;
        /** @type {?} */
        var nextFilterableIndex = cols.indexOf(column) + 1;
        if (nextFilterableIndex >= this.grid.filteringService.unpinnedFilterableColumns.length) {
            // next is not filter cell
            this.navigateFirstCellIfPossible(eventArgs);
            return;
        }
        /** @type {?} */
        var nextColumn = cols[nextFilterableIndex];
        /** @type {?} */
        var nextVisibleIndex = nextColumn.visibleIndex;
        if (!column.pinned && !this.isColumnRightEdgeVisible(nextVisibleIndex)) {
            eventArgs.preventDefault();
            this.grid.filteringService.scrollToFilterCell(nextColumn, true);
        }
        else if (column === this.getLastPinnedFilterableColumn() && !this.isColumnRightEdgeVisible(nextVisibleIndex)) {
            this.grid.filteringService.scrollToFilterCell(nextColumn, false);
            eventArgs.stopPropagation();
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxGridNavigationService.prototype.getLastPinnedFilterableColumn = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pinnedFilterableColums = this.grid.pinnedColumns.filter(function (col) { return !(col.columnGroup) && col.filterable; });
        return pinnedFilterableColums[pinnedFilterableColums.length - 1];
    };
    /**
     * @private
     * @return {?}
     */
    IgxGridNavigationService.prototype.getFirstPinnedFilterableColumn = /**
     * @private
     * @return {?}
     */
    function () {
        return this.grid.pinnedColumns.filter(function (col) { return !(col.columnGroup) && col.filterable; })[0];
    };
    /**
     * @param {?} currentRowEl
     * @param {?} selectedNode
     * @return {?}
     */
    IgxGridNavigationService.prototype.performShiftTabKey = /**
     * @param {?} currentRowEl
     * @param {?} selectedNode
     * @return {?}
     */
    function (currentRowEl, selectedNode) {
        /** @type {?} */
        var rowIndex = selectedNode.row;
        /** @type {?} */
        var visibleColumnIndex = selectedNode.column;
        /** @type {?} */
        var isSummary = selectedNode.isSummaryRow;
        if (isSummary && rowIndex === 0 && visibleColumnIndex === 0 && this.grid.rowList.length) {
            this.goToLastBodyElement();
            return;
        }
        if (this.isRowInEditMode(rowIndex)) {
            this.movePreviousEditable(rowIndex, visibleColumnIndex);
            return;
        }
        if (visibleColumnIndex === 0) {
            if (rowIndex === 0 && this.grid.allowFiltering && this.grid.filterMode === FilterMode.quickFilter) {
                this.moveFocusToFilterCell();
            }
            else {
                this.navigateUp(currentRowEl, {
                    row: rowIndex,
                    column: this.grid.unpinnedColumns[this.grid.unpinnedColumns.length - 1].visibleIndex
                });
            }
        }
        else {
            /** @type {?} */
            var cell = this.getCellElementByVisibleIndex(rowIndex, visibleColumnIndex, isSummary);
            if (cell) {
                this.onKeydownArrowLeft(cell, selectedNode);
            }
        }
    };
    /**
     * @param {?} targetRowIndex
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    IgxGridNavigationService.prototype.shouldPerformVerticalScroll = /**
     * @param {?} targetRowIndex
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    function (targetRowIndex, visibleColumnIndex) {
        /** @type {?} */
        var containerTopOffset = parseInt(this.verticalDisplayContainerElement.style.top, 10);
        /** @type {?} */
        var targetRow = this.grid.summariesRowList.filter(function (s) { return s.index !== 0; })
            .concat(this.grid.rowList.toArray()).find(function (r) { return r.index === targetRowIndex; });
        /** @type {?} */
        var rowHeight = this.grid.verticalScrollContainer.getSizeAt(targetRowIndex);
        /** @type {?} */
        var containerHeight = this.grid.calcHeight ? Math.ceil(this.grid.calcHeight) : 0;
        /** @type {?} */
        var targetEndTopOffset = targetRow ? targetRow.nativeElement.offsetTop + rowHeight + containerTopOffset :
            containerHeight + rowHeight;
        if (!targetRow || targetRow.nativeElement.offsetTop < Math.abs(containerTopOffset)
            || containerHeight && containerHeight < targetEndTopOffset) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} rowIndex
     * @param {?} visibleColIndex
     * @param {?=} cb
     * @return {?}
     */
    IgxGridNavigationService.prototype.performVerticalScrollToCell = /**
     * @param {?} rowIndex
     * @param {?} visibleColIndex
     * @param {?=} cb
     * @return {?}
     */
    function (rowIndex, visibleColIndex, cb) {
        this.grid.verticalScrollContainer.scrollTo(rowIndex);
        this.grid.verticalScrollContainer.onChunkLoad
            .pipe(first()).subscribe(function () {
            cb();
        });
    };
    /**
     * @param {?} rowIndex
     * @param {?} visibleColumnIndex
     * @param {?=} isSummary
     * @param {?=} cb
     * @return {?}
     */
    IgxGridNavigationService.prototype.performHorizontalScrollToCell = /**
     * @param {?} rowIndex
     * @param {?} visibleColumnIndex
     * @param {?=} isSummary
     * @param {?=} cb
     * @return {?}
     */
    function (rowIndex, visibleColumnIndex, isSummary, cb) {
        var _this = this;
        if (isSummary === void 0) { isSummary = false; }
        /** @type {?} */
        var unpinnedIndex = this.getColumnUnpinnedIndex(visibleColumnIndex);
        this.getFocusableGrid().nativeElement.focus({ preventScroll: true });
        this.grid.parentVirtDir.onChunkLoad
            .pipe(first())
            .subscribe(function () {
            if (cb) {
                cb();
            }
            else {
                /** @type {?} */
                var cellElement = _this.getCellElementByVisibleIndex(rowIndex, visibleColumnIndex, isSummary);
                if (cellElement) {
                    cellElement.focus({ preventScroll: true });
                }
            }
        });
        this.horizontalScroll(rowIndex).scrollTo(unpinnedIndex);
    };
    /**
     * @protected
     * @return {?}
     */
    IgxGridNavigationService.prototype.getFocusableGrid = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.grid;
    };
    /**
     * @protected
     * @param {?} index
     * @param {?=} selector
     * @return {?}
     */
    IgxGridNavigationService.prototype.getRowByIndex = /**
     * @protected
     * @param {?} index
     * @param {?=} selector
     * @return {?}
     */
    function (index, selector) {
        if (selector === void 0) { selector = this.getRowSelector(); }
        return this.grid.nativeElement.querySelector(selector + "[data-rowindex=\"" + index + "\"]");
    };
    /**
     * @protected
     * @param {?} nextIndex
     * @return {?}
     */
    IgxGridNavigationService.prototype.getNextRowByIndex = /**
     * @protected
     * @param {?} nextIndex
     * @return {?}
     */
    function (nextIndex) {
        return this.grid.tbody.nativeElement.querySelector("[data-rowindex=\"" + nextIndex + "\"]");
    };
    /**
     * @private
     * @return {?}
     */
    IgxGridNavigationService.prototype.getAllRows = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selector = this.getRowSelector();
        return this.grid.nativeElement.querySelectorAll(selector);
    };
    /**
     * @protected
     * @param {?=} visibleIndex
     * @param {?=} isSummary
     * @return {?}
     */
    IgxGridNavigationService.prototype.getCellSelector = /**
     * @protected
     * @param {?=} visibleIndex
     * @param {?=} isSummary
     * @return {?}
     */
    function (visibleIndex, isSummary) {
        if (isSummary === void 0) { isSummary = false; }
        return isSummary ? 'igx-grid-summary-cell' : 'igx-grid-cell';
    };
    /**
     * @protected
     * @return {?}
     */
    IgxGridNavigationService.prototype.getRowSelector = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'igx-grid-row';
    };
    IgxGridNavigationService.decorators = [
        { type: Injectable }
    ];
    return IgxGridNavigationService;
}());
export { IgxGridNavigationService };
if (false) {
    /** @type {?} */
    IgxGridNavigationService.prototype.grid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1uYXZpZ2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2dyaWQtbmF2aWdhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQXdCLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7O0lBS3RFLE1BQU8sTUFBTTtJQUNiLE9BQVEsT0FBTzs7Ozs7QUFJbkI7SUFBQTtJQW9uQkEsQ0FBQztJQWhuQkcsc0JBQUksMkRBQXFCOzs7O1FBQXpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUcsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxnRUFBMEI7Ozs7UUFBOUI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHFFQUErQjs7OztRQUFuQztZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzlGLENBQUM7OztPQUFBOzs7OztJQUVNLG1EQUFnQjs7OztJQUF2QixVQUF3QixRQUFROztZQUN4QixPQUFPLEdBQUcsSUFB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LElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQzlDLHNCQUFtQixTQUFTLFFBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRU8sNkNBQVU7Ozs7SUFBbEI7O1lBQ1UsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFDdEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7O0lBRVMsa0RBQWU7Ozs7OztJQUF6QixVQUEwQixZQUFxQixFQUFFLFNBQWlCO1FBQWpCLDBCQUFBLEVBQUEsaUJBQWlCO1FBQzlELE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO0lBQ2pFLENBQUM7Ozs7O0lBRVMsaURBQWM7Ozs7SUFBeEI7UUFDSSxPQUFPLGNBQWMsQ0FBQztJQUMxQixDQUFDOztnQkFubkJKLFVBQVU7O0lBb25CWCwrQkFBQztDQUFBLEFBcG5CRCxJQW9uQkM7U0FubkJZLHdCQUF3Qjs7O0lBQ2pDLHdDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneEdyaWRCYXNlQ29tcG9uZW50LCBGaWx0ZXJNb2RlIH0gZnJvbSAnLi9ncmlkLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSWd4Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IElneEdyaWRHcm91cEJ5Um93Q29tcG9uZW50IH0gZnJvbSAnLi9ncmlkL2dyb3VwYnktcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJU2VsZWN0aW9uTm9kZSB9IGZyb20gJy4uL2NvcmUvZ3JpZC1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgSWd4Rm9yT2ZEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2Zvci1vZi9mb3Jfb2YuZGlyZWN0aXZlJztcblxuZW51bSBNb3ZlRGlyZWN0aW9uIHtcbiAgICBMRUZUID0gJ2xlZnQnLFxuICAgIFJJR0hUID0gJ3JpZ2h0J1xufVxuXG4vKiogQGhpZGRlbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIElneEdyaWROYXZpZ2F0aW9uU2VydmljZSB7XG4gICAgcHVibGljIGdyaWQ6IElneEdyaWRCYXNlQ29tcG9uZW50O1xuXG4gICAgZ2V0IGRpc3BsYXlDb250YWluZXJXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5ncmlkLnBhcmVudFZpcnREaXIuZGMuaW5zdGFuY2UuX3ZpZXdDb250YWluZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoKTtcbiAgICB9XG5cbiAgICBnZXQgZGlzcGxheUNvbnRhaW5lclNjcm9sbExlZnQoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuZ3JpZC5wYXJlbnRWaXJ0RGlyLmdldEhvcml6b250YWxTY3JvbGwoKS5zY3JvbGxMZWZ0KTtcbiAgICB9XG5cbiAgICBnZXQgdmVydGljYWxEaXNwbGF5Q29udGFpbmVyRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5kYy5pbnN0YW5jZS5fdmlld0NvbnRhaW5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGhvcml6b250YWxTY3JvbGwocm93SW5kZXgpIHtcbiAgICAgICAgbGV0IHJvd0NvbXAgPSB0aGlzLmdyaWQuZGF0YVJvd0xpc3QuZmluZCgocm93KSA9PiByb3cuaW5kZXggPT09IHJvd0luZGV4KSB8fCB0aGlzLmdyaWQuZGF0YVJvd0xpc3QuZmlyc3Q7XG4gICAgICAgIGlmICghcm93Q29tcCkge1xuICAgICAgICAgICAgcm93Q29tcCA9IHRoaXMuZ3JpZC5zdW1tYXJpZXNSb3dMaXN0LmZpbmQoKHJvdykgPT4gcm93LmluZGV4ID09PSByb3dJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvd0NvbXAudmlydERpclJvdztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29sdW1uVW5waW5uZWRJbmRleCh2aXNpYmxlQ29sdW1uSW5kZXg6IG51bWJlcikge1xuICAgICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmdyaWQudW5waW5uZWRDb2x1bW5zLmZpbmQoKGNvbCkgPT4gIWNvbC5jb2x1bW5Hcm91cCAmJiBjb2wudmlzaWJsZUluZGV4ID09PSB2aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnBpbm5lZENvbHVtbnMubGVuZ3RoID8gdGhpcy5ncmlkLnVucGlubmVkQ29sdW1ucy5maWx0ZXIoKGMpID0+ICFjLmNvbHVtbkdyb3VwKS5pbmRleE9mKGNvbHVtbikgOlxuICAgICAgICAgICAgdmlzaWJsZUNvbHVtbkluZGV4O1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0NvbHVtbkZ1bGx5VmlzaWJsZShjb2x1bW5JbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ29sdW1uUmlnaHRFZGdlVmlzaWJsZShjb2x1bW5JbmRleCkgJiYgdGhpcy5pc0NvbHVtbkxlZnRFZGdlVmlzaWJsZShjb2x1bW5JbmRleCk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzQ29sdW1uUmlnaHRFZGdlVmlzaWJsZShjb2x1bW5JbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGZvck9mRGlyOiBJZ3hGb3JPZkRpcmVjdGl2ZTxhbnk+ID0gdGhpcy5mb3JPZkRpcigpO1xuICAgICAgICBpZiAodGhpcy5pc0NvbHVtblBpbm5lZChjb2x1bW5JbmRleCwgZm9yT2ZEaXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0Q29sdW1uVW5waW5uZWRJbmRleChjb2x1bW5JbmRleCk7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlDb250YWluZXJXaWR0aCA+PSBmb3JPZkRpci5nZXRDb2x1bW5TY3JvbGxMZWZ0KGluZGV4ICsgMSkgLSB0aGlzLmRpc3BsYXlDb250YWluZXJTY3JvbGxMZWZ0O1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0NvbHVtbkxlZnRFZGdlVmlzaWJsZShjb2x1bW5JbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGZvck9mRGlyID0gdGhpcy5mb3JPZkRpcigpO1xuICAgICAgICBpZiAodGhpcy5pc0NvbHVtblBpbm5lZChjb2x1bW5JbmRleCwgZm9yT2ZEaXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0Q29sdW1uVW5waW5uZWRJbmRleChjb2x1bW5JbmRleCk7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlDb250YWluZXJTY3JvbGxMZWZ0IDw9IGZvck9mRGlyLmdldENvbHVtblNjcm9sbExlZnQoaW5kZXgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZm9yT2ZEaXIoKTogSWd4Rm9yT2ZEaXJlY3RpdmU8YW55PiB7XG4gICAgICAgIGxldCBmb3JPZkRpcjogSWd4Rm9yT2ZEaXJlY3RpdmU8YW55PjtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5kYXRhUm93TGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3JPZkRpciA9IHRoaXMuZ3JpZC5kYXRhUm93TGlzdC5maXJzdC52aXJ0RGlyUm93O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yT2ZEaXIgPSB0aGlzLmdyaWQuaGVhZGVyQ29udGFpbmVyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JPZkRpcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzQ29sdW1uUGlubmVkKGNvbHVtbkluZGV4OiBudW1iZXIsIGZvck9mRGlyOiBJZ3hGb3JPZkRpcmVjdGl2ZTxhbnk+KTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGhvcml6b250YWxTY3JvbGwgPSBmb3JPZkRpci5nZXRIb3Jpem9udGFsU2Nyb2xsKCk7XG4gICAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuZ3JpZC5jb2x1bW5MaXN0LmZpbHRlcihjID0+ICFjLmNvbHVtbkdyb3VwKS5maW5kKChjb2wpID0+IGNvbC52aXNpYmxlSW5kZXggPT09IGNvbHVtbkluZGV4KTtcbiAgICAgICAgcmV0dXJuICghaG9yaXpvbnRhbFNjcm9sbC5jbGllbnRXaWR0aCB8fCBjb2x1bW4ucGlubmVkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGdyaWRPcmRlcmVkQ29sdW1ucygpOiBJZ3hDb2x1bW5Db21wb25lbnRbXSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy5ncmlkLnBpbm5lZENvbHVtbnMsIC4uLnRoaXMuZ3JpZC51bnBpbm5lZENvbHVtbnNdLmZpbHRlcihjID0+ICFjLmNvbHVtbkdyb3VwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNSb3dJbkVkaXRNb2RlKHJvd0luZGV4KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQucm93RWRpdGFibGUgJiYgKHRoaXMuZ3JpZC5yb3dJbkVkaXRNb2RlICYmIHRoaXMuZ3JpZC5yb3dJbkVkaXRNb2RlLmluZGV4ID09PSByb3dJbmRleCk7XG4gICAgfVxuXG4gICAgcHVibGljIGZpbmROZXh0RWRpdGFibGUoZGlyZWN0aW9uOiBzdHJpbmcsIHZpc2libGVDb2x1bW5JbmRleDogbnVtYmVyKSB7XG4gICAgICAgIC8vIGdvIHRyb3VnaCBhbGwgY29sdW1ucyBpbiBvbmUgY3ljbGUgaW5zdGVhZCBvZlxuICAgICAgICAvLyBzcGxpY2UoKS5yZXZlcnNlKCkuZmluZCgpXG4gICAgICAgIGNvbnN0IGdyaWRDb2x1bW5zID0gdGhpcy5ncmlkT3JkZXJlZENvbHVtbnM7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdmlzaWJsZUNvbHVtbkluZGV4O1xuICAgICAgICBsZXQgZW5kID0gMDtcbiAgICAgICAgbGV0IHN0ZXAgPSAwO1xuICAgICAgICBsZXQgcmVzdWx0ID0gLTE7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IE1vdmVEaXJlY3Rpb24uTEVGVCkge1xuICAgICAgICAgICAgZW5kID0gMDtcbiAgICAgICAgICAgIHN0ZXAgPSAtMTtcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IE1vdmVEaXJlY3Rpb24uUklHSFQpIHtcbiAgICAgICAgICAgIGVuZCA9IGdyaWRDb2x1bW5zLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBzdGVwID0gMTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBjID0gc3RhcnQ7IChjICogc3RlcCkgPD0gZW5kOyBjICs9IHN0ZXApIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IGdyaWRDb2x1bW5zW2NdO1xuICAgICAgICAgICAgaWYgKGNvbHVtbi5lZGl0YWJsZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2VsbEVsZW1lbnRCeVZpc2libGVJbmRleChyb3dJbmRleCwgdmlzaWJsZUNvbHVtbkluZGV4LCBpc1N1bW1hcnkgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjZWxsU2VsZWN0b3IgPSB0aGlzLmdldENlbGxTZWxlY3Rvcih2aXNpYmxlQ29sdW1uSW5kZXgsIGlzU3VtbWFyeSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYCR7Y2VsbFNlbGVjdG9yfVtkYXRhLXJvd2luZGV4PVwiJHtyb3dJbmRleH1cIl1bZGF0YS12aXNpYmxlSW5kZXg9XCIke3Zpc2libGVDb2x1bW5JbmRleH1cIl1gKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25LZXlkb3duQXJyb3dSaWdodChlbGVtZW50LCBzZWxlY3RlZE5vZGU6IElTZWxlY3Rpb25Ob2RlKSB7XG4gICAgICAgIGNvbnN0IHJvd0luZGV4ID0gc2VsZWN0ZWROb2RlLnJvdztcbiAgICAgICAgY29uc3QgdmlzaWJsZUNvbHVtbkluZGV4ID0gc2VsZWN0ZWROb2RlLmNvbHVtbjtcbiAgICAgICAgY29uc3QgaXNTdW1tYXJ5ID0gc2VsZWN0ZWROb2RlLmlzU3VtbWFyeVJvdztcbiAgICAgICAgaWYgKHRoaXMuZ3JpZC51bnBpbm5lZENvbHVtbnNbdGhpcy5ncmlkLnVucGlubmVkQ29sdW1ucy5sZW5ndGggLSAxXS52aXNpYmxlSW5kZXggPT09IHZpc2libGVDb2x1bW5JbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzQ29sdW1uUmlnaHRFZGdlVmlzaWJsZSh2aXNpYmxlQ29sdW1uSW5kZXggKyAxKSkgeyAvLyBpZiBuZXh0IGNvbHVtbiBpcyBmdWxseSB2aXNpYmxlIG9yIGlzIHBpbm5lZFxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpZ3gtZ3JpZF9fdGQtLXBpbm5lZC1sYXN0JykgfHwgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2lneC1ncmlkLXN1bW1hcnktLXBpbm5lZC1sYXN0JykpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NvbHVtbkxlZnRFZGdlVmlzaWJsZSh2aXNpYmxlQ29sdW1uSW5kZXggKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRGb2N1c2FibGVHcmlkKCkubmF0aXZlRWxlbWVudC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5wYXJlbnRWaXJ0RGlyLm9uQ2h1bmtMb2FkXG4gICAgICAgICAgICAgICAgICAgICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbFNjcm9sbChyb3dJbmRleCkuc2Nyb2xsVG8oMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1Ib3Jpem9udGFsU2Nyb2xsVG9DZWxsKHJvd0luZGV4LCB2aXNpYmxlQ29sdW1uSW5kZXggKyAxLCBpc1N1bW1hcnkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uS2V5ZG93bkFycm93TGVmdChlbGVtZW50LCBzZWxlY3RlZE5vZGU6IElTZWxlY3Rpb25Ob2RlKSB7XG4gICAgICAgIGNvbnN0IHJvd0luZGV4ID0gc2VsZWN0ZWROb2RlLnJvdztcbiAgICAgICAgY29uc3QgdmlzaWJsZUNvbHVtbkluZGV4ID0gc2VsZWN0ZWROb2RlLmNvbHVtbjtcbiAgICAgICAgY29uc3QgaXNTdW1tYXJ5ID0gc2VsZWN0ZWROb2RlLmlzU3VtbWFyeVJvdztcbiAgICAgICAgaWYgKHZpc2libGVDb2x1bW5JbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRDb2x1bW5VbnBpbm5lZEluZGV4KHZpc2libGVDb2x1bW5JbmRleCAtIDEpO1xuICAgICAgICBpZiAoIWVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZyAmJiB0aGlzLmdyaWQucGlubmVkQ29sdW1ucy5sZW5ndGggJiYgaW5kZXggPT09IC0gMSkge1xuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzQ29sdW1uTGVmdEVkZ2VWaXNpYmxlKHZpc2libGVDb2x1bW5JbmRleCAtIDEpKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1Ib3Jpem9udGFsU2Nyb2xsVG9DZWxsKHJvd0luZGV4LCB2aXNpYmxlQ29sdW1uSW5kZXggLSAxLCBpc1N1bW1hcnkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIG1vdmVQcmV2aW91c0VkaXRhYmxlKHJvd0luZGV4OiBudW1iZXIsIGN1cnJlbnRDb2x1bW5WaXNpYmxlSW5kZXg6IG51bWJlcikge1xuICAgICAgICBjb25zdCBwcmV2RWRpdGFibGVDb2x1bW5JbmRleCA9IHRoaXMuZmluZE5leHRFZGl0YWJsZShNb3ZlRGlyZWN0aW9uLkxFRlQsIGN1cnJlbnRDb2x1bW5WaXNpYmxlSW5kZXggLSAxKTtcbiAgICAgICAgaWYgKHByZXZFZGl0YWJsZUNvbHVtbkluZGV4ID09PSAtMSAmJiB0aGlzLmdyaWQucm93RWRpdFRhYnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyAgVE9ETzogbWFrZSBncmlkQVBJIHZpc2libGUgZm9yIGludGVybmFsIHVzZSBhbmQgcmVtb3ZlIGNhc3QgdG8gYW55XG4gICAgICAgICAgICAodGhpcy5ncmlkIGFzIGFueSkuZ3JpZEFQSS5zdWJtaXRfdmFsdWUoKTtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5yb3dFZGl0VGFicy5sYXN0LmVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9jdXNFZGl0YWJsZVRhcmdldChyb3dJbmRleCwgcHJldkVkaXRhYmxlQ29sdW1uSW5kZXgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlTmV4dEVkaXRhYmxlKHJvd0luZGV4OiBudW1iZXIsIGN1cnJlbnRDb2x1bW5WaXNpYmxlSW5kZXg6IG51bWJlcikge1xuICAgICAgICBjb25zdCBuZXh0RWRpdGFibGVDb2x1bW5JbmRleCA9IHRoaXMuZmluZE5leHRFZGl0YWJsZShNb3ZlRGlyZWN0aW9uLlJJR0hULCBjdXJyZW50Q29sdW1uVmlzaWJsZUluZGV4ICsgMSk7XG4gICAgICAgIGlmIChuZXh0RWRpdGFibGVDb2x1bW5JbmRleCA9PT0gLTEgJiYgdGhpcy5ncmlkLnJvd0VkaXRUYWJzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gIFRPRE86IG1ha2UgZ3JpZEFQSSB2aXNpYmxlIGZvciBpbnRlcm5hbCB1c2UgYW5kIHJlbW92ZSBjYXN0IHRvIGFueVxuICAgICAgICAgICAgKHRoaXMuZ3JpZCBhcyBhbnkpLmdyaWRBUEkuc3VibWl0X3ZhbHVlKCk7XG4gICAgICAgICAgICB0aGlzLmdyaWQucm93RWRpdFRhYnMuZmlyc3QuZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb2N1c0VkaXRhYmxlVGFyZ2V0KHJvd0luZGV4LCBuZXh0RWRpdGFibGVDb2x1bW5JbmRleCk7XG4gICAgfVxuXG4gICAgcHVibGljIGZvY3VzRWRpdGFibGVUYXJnZXQocm93SW5kZXg6IG51bWJlciwgY29sdW1uSW5kZXg6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5pc0NvbHVtbkZ1bGx5VmlzaWJsZShjb2x1bW5JbmRleCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2VsbEVsZW1lbnRCeVZpc2libGVJbmRleChyb3dJbmRleCwgY29sdW1uSW5kZXgpLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1Ib3Jpem9udGFsU2Nyb2xsVG9DZWxsKHJvd0luZGV4LCBjb2x1bW5JbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25LZXlkb3duSG9tZShyb3dJbmRleCwgaXNTdW1tYXJ5ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3Qgcm93TGlzdCA9IGlzU3VtbWFyeSA/IHRoaXMuZ3JpZC5zdW1tYXJpZXNSb3dMaXN0IDogdGhpcy5ncmlkLmRhdGFSb3dMaXN0O1xuICAgICAgICBsZXQgcm93RWxlbWVudCA9IHJvd0xpc3QuZmluZCgocm93KSA9PiByb3cuaW5kZXggPT09IHJvd0luZGV4KTtcbiAgICAgICAgY29uc3QgY2VsbFNlbGVjdG9yID0gdGhpcy5nZXRDZWxsU2VsZWN0b3IoMCwgaXNTdW1tYXJ5KTtcbiAgICAgICAgaWYgKCFyb3dFbGVtZW50KSB7IHJldHVybjsgfVxuICAgICAgICByb3dFbGVtZW50ID0gcm93RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBsZXQgZmlyc3RDZWxsID0gcm93RWxlbWVudC5xdWVyeVNlbGVjdG9yKGNlbGxTZWxlY3Rvcik7XG4gICAgICAgIGlmICh0aGlzLmdyaWQucGlubmVkQ29sdW1ucy5sZW5ndGggfHwgdGhpcy5kaXNwbGF5Q29udGFpbmVyU2Nyb2xsTGVmdCA9PT0gMCkge1xuICAgICAgICAgICAgZmlyc3RDZWxsLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Rm9jdXNhYmxlR3JpZCgpLm5hdGl2ZUVsZW1lbnQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgdGhpcy5ncmlkLnBhcmVudFZpcnREaXIub25DaHVua0xvYWRcbiAgICAgICAgICAgICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmaXJzdENlbGwgPSByb3dFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoY2VsbFNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RDZWxsLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbFNjcm9sbChyb3dJbmRleCkuc2Nyb2xsVG8oMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25LZXlkb3duRW5kKHJvd0luZGV4LCBpc1N1bW1hcnkgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ3JpZC51bnBpbm5lZENvbHVtbnNbdGhpcy5ncmlkLnVucGlubmVkQ29sdW1ucy5sZW5ndGggLSAxXS52aXNpYmxlSW5kZXg7XG4gICAgICAgIGNvbnN0IHJvd0xpc3QgPSBpc1N1bW1hcnkgPyB0aGlzLmdyaWQuc3VtbWFyaWVzUm93TGlzdCA6IHRoaXMuZ3JpZC5kYXRhUm93TGlzdDtcbiAgICAgICAgbGV0IHJvd0VsZW1lbnQgPSByb3dMaXN0LmZpbmQoKHJvdykgPT4gcm93LmluZGV4ID09PSByb3dJbmRleCk7XG4gICAgICAgIGlmICghcm93RWxlbWVudCkgeyByZXR1cm47IH1cbiAgICAgICAgcm93RWxlbWVudCA9IHJvd0VsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgaWYgKHRoaXMuaXNDb2x1bW5SaWdodEVkZ2VWaXNpYmxlKGluZGV4KSkge1xuICAgICAgICAgICAgY29uc3QgYWxsQ2VsbHMgPSByb3dFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5nZXRDZWxsU2VsZWN0b3IoLTEsIGlzU3VtbWFyeSkpO1xuICAgICAgICAgICAgYWxsQ2VsbHNbYWxsQ2VsbHMubGVuZ3RoIC0gMV0uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXRGb2N1c2FibGVHcmlkKCkubmF0aXZlRWxlbWVudC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgICAgICB0aGlzLmdyaWQucGFyZW50VmlydERpci5vbkNodW5rTG9hZFxuICAgICAgICAgICAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsbENlbGxzID0gcm93RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuZ2V0Q2VsbFNlbGVjdG9yKC0xLCBpc1N1bW1hcnkpKTtcbiAgICAgICAgICAgICAgICAgICAgYWxsQ2VsbHNbYWxsQ2VsbHMubGVuZ3RoIC0gMV0uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsU2Nyb2xsKHJvd0luZGV4KS5zY3JvbGxUbyh0aGlzLmdldENvbHVtblVucGlubmVkSW5kZXgoaW5kZXgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBuYXZpZ2F0ZVRvcCh2aXNpYmxlQ29sdW1uSW5kZXgpIHtcbiAgICAgICAgY29uc3QgdmVydGljYWxTY3JvbGwgPSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKTtcbiAgICAgICAgY29uc3QgY2VsbFNlbGVjdG9yID0gdGhpcy5nZXRDZWxsU2VsZWN0b3IodmlzaWJsZUNvbHVtbkluZGV4KTtcbiAgICAgICAgaWYgKHZlcnRpY2FsU2Nyb2xsLnNjcm9sbFRvcCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLmdyaWQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgIGAke2NlbGxTZWxlY3Rvcn1bZGF0YS12aXNpYmxlSW5kZXg9XCIke3Zpc2libGVDb2x1bW5JbmRleH1cIl1gKTtcbiAgICAgICAgICAgIGNlbGxzWzBdLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIHRoaXMuZ2V0Rm9jdXNhYmxlR3JpZCgpLm5hdGl2ZUVsZW1lbnQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvKDApO1xuICAgICAgICAgICAgdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLm9uQ2h1bmtMb2FkXG4gICAgICAgICAgICAgICAgLnBpcGUoZmlyc3QoKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLmdyaWQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y2VsbFNlbGVjdG9yfVtkYXRhLXZpc2libGVJbmRleD1cIiR7dmlzaWJsZUNvbHVtbkluZGV4fVwiXWApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbHMubGVuZ3RoID4gMCkgeyBjZWxsc1swXS5mb2N1cygpOyB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmF2aWdhdGVCb3R0b20odmlzaWJsZUNvbHVtbkluZGV4KSB7XG4gICAgICAgIGNvbnN0IHZlcnRpY2FsU2Nyb2xsID0gdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmdldFZlcnRpY2FsU2Nyb2xsKCk7XG4gICAgICAgIGNvbnN0IGNlbGxTZWxlY3RvciA9IHRoaXMuZ2V0Q2VsbFNlbGVjdG9yKHZpc2libGVDb2x1bW5JbmRleCk7XG4gICAgICAgIGlmICh2ZXJ0aWNhbFNjcm9sbC5zY3JvbGxIZWlnaHQgPT09IDAgfHxcbiAgICAgICAgICAgIHZlcnRpY2FsU2Nyb2xsLnNjcm9sbFRvcCA9PT0gdmVydGljYWxTY3JvbGwuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvckNvbnRhaW5lclNpemUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICBgJHtjZWxsU2VsZWN0b3J9W2RhdGEtdmlzaWJsZUluZGV4PVwiJHt2aXNpYmxlQ29sdW1uSW5kZXh9XCJdYCk7XG4gICAgICAgICAgICBjZWxsc1tjZWxscy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICB0aGlzLmdldEZvY3VzYWJsZUdyaWQoKS5uYXRpdmVFbGVtZW50LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5zY3JvbGxUbyh0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2YubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIub25DaHVua0xvYWRcbiAgICAgICAgICAgICAgICAucGlwZShmaXJzdCgpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuZ3JpZC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtjZWxsU2VsZWN0b3J9W2RhdGEtdmlzaWJsZUluZGV4PVwiJHt2aXNpYmxlQ29sdW1uSW5kZXh9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZWxscy5sZW5ndGggPiAwKSB7IGNlbGxzW2NlbGxzLmxlbmd0aCAtIDFdLmZvY3VzKCk7IH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBuYXZpZ2F0ZVVwKHJvd0VsZW1lbnQsIHNlbGVjdGVkTm9kZTogSVNlbGVjdGlvbk5vZGUpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFJvd0luZGV4ID0gc2VsZWN0ZWROb2RlLnJvdztcbiAgICAgICAgY29uc3QgdmlzaWJsZUNvbHVtbkluZGV4ID0gc2VsZWN0ZWROb2RlLmNvbHVtbjtcbiAgICAgICAgaWYgKGN1cnJlbnRSb3dJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclRvcE9mZnNldCA9IHBhcnNlSW50KHRoaXMudmVydGljYWxEaXNwbGF5Q29udGFpbmVyRWxlbWVudC5zdHlsZS50b3AsIDEwKTtcbiAgICAgICAgaWYgKCFyb3dFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcgfHxcbiAgICAgICAgICAgIHJvd0VsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5vZmZzZXRUb3AgPCBNYXRoLmFicyhjb250YWluZXJUb3BPZmZzZXQpKSB7XG4gICAgICAgICAgIHRoaXMuZ2V0Rm9jdXNhYmxlR3JpZCgpLm5hdGl2ZUVsZW1lbnQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvKGN1cnJlbnRSb3dJbmRleCAtIDEpO1xuICAgICAgICAgICAgdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLm9uQ2h1bmtMb2FkXG4gICAgICAgICAgICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFnID0gcm93RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd1NlbGVjdG9yID0gdGhpcy5nZXRSb3dTZWxlY3RvcigpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFnID09PSByb3dTZWxlY3RvciB8fCB0YWcgPT09ICdpZ3gtZ3JpZC1zdW1tYXJ5LXJvdycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd0VsZW1lbnQgPSB0aGlzLmdldFJvd0J5SW5kZXgoY3VycmVudFJvd0luZGV4LCB0YWcpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93RWxlbWVudCA9IHRoaXMuZ3JpZC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYGlneC1ncmlkLWdyb3VwYnktcm93W2RhdGEtcm93aW5kZXg9XCIke2N1cnJlbnRSb3dJbmRleH1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzUHJldmlvdXNFbGVtZW50KHJvd0VsZW1lbnQsIHZpc2libGVDb2x1bW5JbmRleCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzUHJldmlvdXNFbGVtZW50KHJvd0VsZW1lbnQsIHZpc2libGVDb2x1bW5JbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZm9jdXNQcmV2aW91c0VsZW1lbnQoY3VycmVudFJvd0VsLCB2aXNpYmxlQ29sdW1uSW5kZXgpIHtcbiAgICAgICAgdGhpcy5mb2N1c0VsZW0oY3VycmVudFJvd0VsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcsIHZpc2libGVDb2x1bW5JbmRleCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5hdmlnYXRlRG93bihyb3dFbGVtZW50LCBzZWxlY3RlZE5vZGU6IElTZWxlY3Rpb25Ob2RlKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRSb3dJbmRleCA9IHNlbGVjdGVkTm9kZS5yb3c7XG4gICAgICAgIGNvbnN0IHZpc2libGVDb2x1bW5JbmRleCA9IHNlbGVjdGVkTm9kZS5jb2x1bW47XG4gICAgICAgIGlmIChjdXJyZW50Um93SW5kZXggPT09IHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5pZ3hGb3JPZi5sZW5ndGggLSAxIHx8XG4gICAgICAgICAgICAoY3VycmVudFJvd0luZGV4ID09PSAwICYmIHJvd0VsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaWd4LWdyaWQtc3VtbWFyeS1yb3cnKSkge1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhpcyBpcyByb290U3VtbWFyeSByb3dcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3dIZWlnaHQgPSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0U2l6ZUF0KGN1cnJlbnRSb3dJbmRleCArIDEpO1xuICAgICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSB0aGlzLmdyaWQuY2FsY0hlaWdodCA/IE1hdGguY2VpbCh0aGlzLmdyaWQuY2FsY0hlaWdodCkgOiAwO1xuICAgICAgICBjb25zdCB0YXJnZXRFbmRUb3BPZmZzZXQgPSByb3dFbGVtZW50Lm5leHRFbGVtZW50U2libGluZyA/XG4gICAgICAgICAgICByb3dFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5vZmZzZXRUb3AgKyByb3dIZWlnaHQgKyBwYXJzZUludCh0aGlzLnZlcnRpY2FsRGlzcGxheUNvbnRhaW5lckVsZW1lbnQuc3R5bGUudG9wLCAxMCkgOlxuICAgICAgICAgICAgY29udGFpbmVySGVpZ2h0ICsgcm93SGVpZ2h0O1xuICAgICAgIHRoaXMuZ2V0Rm9jdXNhYmxlR3JpZCgpLm5hdGl2ZUVsZW1lbnQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICBpZiAoY29udGFpbmVySGVpZ2h0ICYmIGNvbnRhaW5lckhlaWdodCA8IHRhcmdldEVuZFRvcE9mZnNldCkge1xuICAgICAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gY3VycmVudFJvd0luZGV4ICsgMTtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5zY3JvbGxUbyhuZXh0SW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLm9uQ2h1bmtMb2FkXG4gICAgICAgICAgICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm93RWxlbWVudCA9IHRoaXMuZ2V0TmV4dFJvd0J5SW5kZXgobmV4dEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c0VsZW0ocm93RWxlbWVudCwgdmlzaWJsZUNvbHVtbkluZGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNOZXh0RWxlbWVudChyb3dFbGVtZW50LCB2aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGZvY3VzRWxlbShyb3dFbGVtZW50LCB2aXNpYmxlQ29sdW1uSW5kZXgpIHtcbiAgICAgICAgaWYgKHJvd0VsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaWd4LWdyaWQtZ3JvdXBieS1yb3cnKSB7XG4gICAgICAgICAgICByb3dFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpc1N1bW1hcnlSb3cgPSByb3dFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lneC1ncmlkLXN1bW1hcnktcm93JztcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ29sdW1uRnVsbHlWaXNpYmxlKHZpc2libGVDb2x1bW5JbmRleCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsU2VsZWN0b3IgPSB0aGlzLmdldENlbGxTZWxlY3Rvcih2aXNpYmxlQ29sdW1uSW5kZXgsIGlzU3VtbWFyeVJvdyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHJvd0VsZW1lbnQucXVlcnlTZWxlY3RvcihgJHtjZWxsU2VsZWN0b3J9W2RhdGEtdmlzaWJsZUluZGV4PVwiJHt2aXNpYmxlQ29sdW1uSW5kZXh9XCJdYCk7XG4gICAgICAgICAgICAgICAgY2VsbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjZWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wZXJmb3JtSG9yaXpvbnRhbFNjcm9sbFRvQ2VsbChwYXJzZUludChcbiAgICAgICAgICAgICAgICByb3dFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1yb3dpbmRleCcpLCAxMCksIHZpc2libGVDb2x1bW5JbmRleCwgaXNTdW1tYXJ5Um93KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBmb2N1c05leHRFbGVtZW50KHJvd0VsZW1lbnQsIHZpc2libGVDb2x1bW5JbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb2N1c0VsZW0ocm93RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcsIHZpc2libGVDb2x1bW5JbmRleCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdvVG9GaXJzdENlbGwoKSB7XG4gICAgICAgIGNvbnN0IHZlcnRpY2FsU2Nyb2xsID0gdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmdldFZlcnRpY2FsU2Nyb2xsKCk7XG4gICAgICAgIGNvbnN0IGhvcml6b250YWxTY3JvbGwgPSB0aGlzLmdyaWQuZGF0YVJvd0xpc3QuZmlyc3QudmlydERpclJvdy5nZXRIb3Jpem9udGFsU2Nyb2xsKCk7XG4gICAgICAgIGlmICh2ZXJ0aWNhbFNjcm9sbC5zY3JvbGxUb3AgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMub25LZXlkb3duSG9tZSh0aGlzLmdyaWQuZGF0YVJvd0xpc3QuZmlyc3QuaW5kZXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFob3Jpem9udGFsU2Nyb2xsLmNsaWVudFdpZHRoIHx8IHBhcnNlSW50KGhvcml6b250YWxTY3JvbGwuc2Nyb2xsTGVmdCwgMTApIDw9IDEgfHwgdGhpcy5ncmlkLnBpbm5lZENvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvcCgwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICB0aGlzLmdldEZvY3VzYWJsZUdyaWQoKS5uYXRpdmVFbGVtZW50LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhvcml6b250YWxTY3JvbGwodGhpcy5ncmlkLmRhdGFSb3dMaXN0LmZpcnN0LmluZGV4KS5zY3JvbGxUbygwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQucGFyZW50VmlydERpci5vbkNodW5rTG9hZFxuICAgICAgICAgICAgICAgICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUb3AoMCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdvVG9MYXN0Q2VsbCgpIHtcbiAgICAgICAgY29uc3QgdmVydGljYWxTY3JvbGwgPSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKTtcbiAgICAgICAgaWYgKHZlcnRpY2FsU2Nyb2xsLnNjcm9sbEhlaWdodCA9PT0gMCB8fFxuICAgICAgICAgICAgdmVydGljYWxTY3JvbGwuc2Nyb2xsVG9wID09PSB2ZXJ0aWNhbFNjcm9sbC5zY3JvbGxIZWlnaHQgLSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yQ29udGFpbmVyU2l6ZSkge1xuICAgICAgICAgICAgY29uc3Qgcm93cyA9IHRoaXMuZ2V0QWxsUm93cygpO1xuICAgICAgICAgICAgY29uc3Qgcm93SW5kZXggPSBwYXJzZUludChyb3dzW3Jvd3MubGVuZ3RoIC0gMV0uZ2V0QXR0cmlidXRlKCdkYXRhLXJvd0luZGV4JyksIDEwKTtcbiAgICAgICAgICAgIHRoaXMub25LZXlkb3duRW5kKHJvd0luZGV4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgdGhpcy5nZXRGb2N1c2FibGVHcmlkKCkubmF0aXZlRWxlbWVudC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgICAgICB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuc2Nyb2xsVG8odGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLm9uQ2h1bmtMb2FkXG4gICAgICAgICAgICAgICAgLnBpcGUoZmlyc3QoKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93cyA9IHRoaXMuZ2V0QWxsUm93cygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocm93cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dJbmRleCA9IHBhcnNlSW50KHJvd3Nbcm93cy5sZW5ndGggLSAxXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93SW5kZXgnKSwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbktleWRvd25FbmQocm93SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ29Ub0xhc3RCb2R5RWxlbWVudCgpIHtcbiAgICAgICAgY29uc3QgdmVydGljYWxTY3JvbGwgPSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKTtcbiAgICAgICAgaWYgKHZlcnRpY2FsU2Nyb2xsLnNjcm9sbEhlaWdodCA9PT0gMCB8fFxuICAgICAgICAgICAgdmVydGljYWxTY3JvbGwuc2Nyb2xsVG9wID09PSB2ZXJ0aWNhbFNjcm9sbC5zY3JvbGxIZWlnaHQgLSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yQ29udGFpbmVyU2l6ZSkge1xuICAgICAgICAgICAgY29uc3Qgcm93SW5kZXggPSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2YubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuZ3JpZC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvd2luZGV4PVwiJHtyb3dJbmRleH1cIl1gKTtcbiAgICAgICAgICAgIGlmIChyb3cgJiYgcm93LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lneC1ncmlkLWdyb3VwYnktcm93Jykge1xuICAgICAgICAgICAgICAgIHJvdy5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGlzU3VtbWFyeSA9IChyb3cgJiYgcm93LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lneC1ncmlkLXN1bW1hcnktcm93JykgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm9uS2V5ZG93bkVuZChyb3dJbmRleCwgaXNTdW1tYXJ5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5zY3JvbGxUbyh0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2YubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIub25DaHVua0xvYWRcbiAgICAgICAgICAgICAgICAucGlwZShmaXJzdCgpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dJbmRleCA9IHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5pZ3hGb3JPZi5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3cgPSB0aGlzLmdyaWQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3dpbmRleD1cIiR7cm93SW5kZXh9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3cgJiYgcm93LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lneC1ncmlkLWdyb3VwYnktcm93Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTdW1tYXJ5ID0gKHJvdyAmJiByb3cudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaWd4LWdyaWQtc3VtbWFyeS1yb3cnKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbktleWRvd25FbmQocm93SW5kZXgsIGlzU3VtbWFyeSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcGVyZm9ybVRhYihjdXJyZW50Um93RWwsIHNlbGVjdGVkTm9kZTogSVNlbGVjdGlvbk5vZGUpIHtcbiAgICAgICAgY29uc3Qgcm93SW5kZXggPSBzZWxlY3RlZE5vZGUucm93O1xuICAgICAgICBjb25zdCB2aXNpYmxlQ29sdW1uSW5kZXggPSBzZWxlY3RlZE5vZGUuY29sdW1uO1xuICAgICAgICBjb25zdCBpc1N1bW1hcnlSb3cgPSBzZWxlY3RlZE5vZGUuaXNTdW1tYXJ5Um93O1xuICAgICAgICBpZiAoaXNTdW1tYXJ5Um93ICYmIHJvd0luZGV4ID09PSAwICYmXG4gICAgICAgICAgICB0aGlzLmdyaWQudW5waW5uZWRDb2x1bW5zW3RoaXMuZ3JpZC51bnBpbm5lZENvbHVtbnMubGVuZ3RoIC0gMV0udmlzaWJsZUluZGV4ID09PSB2aXNpYmxlQ29sdW1uSW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzUm93SW5FZGl0TW9kZShyb3dJbmRleCkpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZU5leHRFZGl0YWJsZShyb3dJbmRleCwgdmlzaWJsZUNvbHVtbkluZGV4KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdyaWQudW5waW5uZWRDb2x1bW5zW3RoaXMuZ3JpZC51bnBpbm5lZENvbHVtbnMubGVuZ3RoIC0gMV0udmlzaWJsZUluZGV4ID09PSB2aXNpYmxlQ29sdW1uSW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0VsID0gdGhpcy5ncmlkLnJvd0xpc3QuZmluZChyb3cgPT4gcm93LmluZGV4ID09PSByb3dJbmRleCArIDEpID9cbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQucm93TGlzdC5maW5kKHJvdyA9PiByb3cuaW5kZXggPT09IHJvd0luZGV4ICsgMSkgOlxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5zdW1tYXJpZXNSb3dMaXN0LmZpbmQocm93ID0+IHJvdy5pbmRleCA9PT0gcm93SW5kZXggKyAxKTtcbiAgICAgICAgICAgIGlmIChyb3dJbmRleCA9PT0gdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLmxlbmd0aCAtIDEgJiYgdGhpcy5ncmlkLnJvb3RTdW1tYXJpZXNFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbktleWRvd25Ib21lKDAsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyb3dFbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVEb3duKGN1cnJlbnRSb3dFbCwgeyByb3c6IHJvd0luZGV4LCBjb2x1bW46IDAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRDZWxsRWxlbWVudEJ5VmlzaWJsZUluZGV4KHJvd0luZGV4LCB2aXNpYmxlQ29sdW1uSW5kZXgsIGlzU3VtbWFyeVJvdyk7XG4gICAgICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25LZXlkb3duQXJyb3dSaWdodChjZWxsLCBzZWxlY3RlZE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmVGb2N1c1RvRmlsdGVyQ2VsbCh0b1N0YXJ0PzogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5ncmlkLmZpbHRlcmluZ1NlcnZpY2UuaXNGaWx0ZXJSb3dWaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQuZmlsdGVyaW5nU2VydmljZS5mb2N1c0ZpbHRlclJvd0Nsb3NlQnV0dG9uKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5ncmlkLmZpbHRlcmluZ1NlcnZpY2UudW5waW5uZWRGaWx0ZXJhYmxlQ29sdW1ucztcbiAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSB0b1N0YXJ0ID8gMCA6IGNvbHVtbnMubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3QgdmlzaWJsZUluZGV4ID0gY29sdW1uc1t0YXJnZXRJbmRleF0udmlzaWJsZUluZGV4O1xuICAgICAgICBjb25zdCBpc1Zpc2libGUgPSB0b1N0YXJ0ID8gdGhpcy5pc0NvbHVtbkxlZnRFZGdlVmlzaWJsZSh2aXNpYmxlSW5kZXgpIDogdGhpcy5pc0NvbHVtblJpZ2h0RWRnZVZpc2libGUodmlzaWJsZUluZGV4KTtcbiAgICAgICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5ncmlkLmZpbHRlcmluZ1NlcnZpY2UuZm9jdXNGaWx0ZXJDZWxsQ2hpcChjb2x1bW5zW3RhcmdldEluZGV4XSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ncmlkLmZpbHRlcmluZ1NlcnZpY2Uuc2Nyb2xsVG9GaWx0ZXJDZWxsKGNvbHVtbnNbdGFyZ2V0SW5kZXhdLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmF2aWdhdGVQcmV2RmlsdGVyQ2VsbChjb2x1bW46IElneENvbHVtbkNvbXBvbmVudCwgZXZlbnRBcmdzKSB7XG4gICAgICAgIGNvbnN0IGNvbHMgPSB0aGlzLmdyaWQuZmlsdGVyaW5nU2VydmljZS51bnBpbm5lZEZpbHRlcmFibGVDb2x1bW5zO1xuICAgICAgICBjb25zdCBwcmV2RmlsdGVyYWJsZUluZGV4ID0gY29scy5pbmRleE9mKGNvbHVtbikgLSAxO1xuICAgICAgICBjb25zdCB2aXNpYmxlSW5kZXggPSBjb2x1bW4udmlzaWJsZUluZGV4O1xuICAgICAgICBpZiAodmlzaWJsZUluZGV4ID09PSAwIHx8IHByZXZGaWx0ZXJhYmxlSW5kZXggPCAwKSB7XG4gICAgICAgICAgICAvLyBwcmV2IGlzIG5vdCBmaWx0ZXIgY2VsbFxuICAgICAgICAgICAgY29uc3QgZmlyc3RGaWx0YXJhYmxlQ29sID0gdGhpcy5nZXRGaXJzdFBpbm5lZEZpbHRlcmFibGVDb2x1bW4oKTtcbiAgICAgICAgICAgIGlmICghZmlyc3RGaWx0YXJhYmxlQ29sIHx8IGNvbHVtbiA9PT0gZmlyc3RGaWx0YXJhYmxlQ29sKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRBcmdzLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkNvbHVtbiA9IGNvbHNbcHJldkZpbHRlcmFibGVJbmRleF07XG4gICAgICAgIGNvbnN0IHByZXZWaXNpYmxlSW5kZXggPSBwcmV2Q29sdW1uLnZpc2libGVJbmRleDtcblxuICAgICAgICBpZiAocHJldkZpbHRlcmFibGVJbmRleCA+PSAwICYmIHZpc2libGVJbmRleCA+IDAgJiYgIXRoaXMuaXNDb2x1bW5MZWZ0RWRnZVZpc2libGUocHJldlZpc2libGVJbmRleCkgJiYgIWNvbHVtbi5waW5uZWQpIHtcbiAgICAgICAgICAgIGV2ZW50QXJncy5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5ncmlkLmZpbHRlcmluZ1NlcnZpY2Uuc2Nyb2xsVG9GaWx0ZXJDZWxsKHByZXZDb2x1bW4sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBuYXZpZ2F0ZUZpcnN0Q2VsbElmUG9zc2libGUoZXZlbnRBcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLmdyaWQucm93TGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ncmlkLnJvd0xpc3QuZmlsdGVyKHJvdyA9PiByb3cgaW5zdGFuY2VvZiBJZ3hHcmlkR3JvdXBCeVJvd0NvbXBvbmVudCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGV2ZW50QXJncy5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdvVG9GaXJzdENlbGwoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdyaWQucm9vdFN1bW1hcmllc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25LZXlkb3duSG9tZSgwLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudEFyZ3MucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmF2aWdhdGVOZXh0RmlsdGVyQ2VsbChjb2x1bW46IElneENvbHVtbkNvbXBvbmVudCwgZXZlbnRBcmdzKSB7XG4gICAgICAgIGNvbnN0IGNvbHMgPSB0aGlzLmdyaWQuZmlsdGVyaW5nU2VydmljZS51bnBpbm5lZEZpbHRlcmFibGVDb2x1bW5zO1xuICAgICAgICBjb25zdCBuZXh0RmlsdGVyYWJsZUluZGV4ID0gY29scy5pbmRleE9mKGNvbHVtbikgKyAxO1xuICAgICAgICBpZiAobmV4dEZpbHRlcmFibGVJbmRleCA+PSB0aGlzLmdyaWQuZmlsdGVyaW5nU2VydmljZS51bnBpbm5lZEZpbHRlcmFibGVDb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gbmV4dCBpcyBub3QgZmlsdGVyIGNlbGxcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGVGaXJzdENlbGxJZlBvc3NpYmxlKGV2ZW50QXJncyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV4dENvbHVtbiA9IGNvbHNbbmV4dEZpbHRlcmFibGVJbmRleF07XG4gICAgICAgIGNvbnN0IG5leHRWaXNpYmxlSW5kZXggPSBuZXh0Q29sdW1uLnZpc2libGVJbmRleDtcbiAgICAgICAgaWYgKCFjb2x1bW4ucGlubmVkICYmICF0aGlzLmlzQ29sdW1uUmlnaHRFZGdlVmlzaWJsZShuZXh0VmlzaWJsZUluZGV4KSkge1xuICAgICAgICAgICAgZXZlbnRBcmdzLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmdyaWQuZmlsdGVyaW5nU2VydmljZS5zY3JvbGxUb0ZpbHRlckNlbGwobmV4dENvbHVtbiwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09PSB0aGlzLmdldExhc3RQaW5uZWRGaWx0ZXJhYmxlQ29sdW1uKCkgJiYgIXRoaXMuaXNDb2x1bW5SaWdodEVkZ2VWaXNpYmxlKG5leHRWaXNpYmxlSW5kZXgpKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQuZmlsdGVyaW5nU2VydmljZS5zY3JvbGxUb0ZpbHRlckNlbGwobmV4dENvbHVtbiwgZmFsc2UpO1xuICAgICAgICAgICAgZXZlbnRBcmdzLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRMYXN0UGlubmVkRmlsdGVyYWJsZUNvbHVtbigpOiBJZ3hDb2x1bW5Db21wb25lbnQge1xuICAgICAgICBjb25zdCBwaW5uZWRGaWx0ZXJhYmxlQ29sdW1zID1cbiAgICAgICAgICAgIHRoaXMuZ3JpZC5waW5uZWRDb2x1bW5zLmZpbHRlcihjb2wgPT4gIShjb2wuY29sdW1uR3JvdXApICYmIGNvbC5maWx0ZXJhYmxlKTtcbiAgICAgICAgcmV0dXJuIHBpbm5lZEZpbHRlcmFibGVDb2x1bXNbcGlubmVkRmlsdGVyYWJsZUNvbHVtcy5sZW5ndGggLSAxXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEZpcnN0UGlubmVkRmlsdGVyYWJsZUNvbHVtbigpOiBJZ3hDb2x1bW5Db21wb25lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnBpbm5lZENvbHVtbnMuZmlsdGVyKGNvbCA9PiAhKGNvbC5jb2x1bW5Hcm91cCkgJiYgY29sLmZpbHRlcmFibGUpWzBdO1xuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtU2hpZnRUYWJLZXkoY3VycmVudFJvd0VsLCBzZWxlY3RlZE5vZGU6IElTZWxlY3Rpb25Ob2RlKSB7XG4gICAgICAgIGNvbnN0IHJvd0luZGV4ID0gc2VsZWN0ZWROb2RlLnJvdztcbiAgICAgICAgY29uc3QgdmlzaWJsZUNvbHVtbkluZGV4ID0gc2VsZWN0ZWROb2RlLmNvbHVtbjtcbiAgICAgICAgY29uc3QgaXNTdW1tYXJ5ID0gc2VsZWN0ZWROb2RlLmlzU3VtbWFyeVJvdztcbiAgICAgICAgaWYgKGlzU3VtbWFyeSAmJiByb3dJbmRleCA9PT0gMCAmJiB2aXNpYmxlQ29sdW1uSW5kZXggPT09IDAgJiYgdGhpcy5ncmlkLnJvd0xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmdvVG9MYXN0Qm9keUVsZW1lbnQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzUm93SW5FZGl0TW9kZShyb3dJbmRleCkpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVByZXZpb3VzRWRpdGFibGUocm93SW5kZXgsIHZpc2libGVDb2x1bW5JbmRleCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmlzaWJsZUNvbHVtbkluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBpZiAocm93SW5kZXggPT09IDAgJiYgdGhpcy5ncmlkLmFsbG93RmlsdGVyaW5nICYmIHRoaXMuZ3JpZC5maWx0ZXJNb2RlID09PSBGaWx0ZXJNb2RlLnF1aWNrRmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRm9jdXNUb0ZpbHRlckNlbGwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVVwKGN1cnJlbnRSb3dFbCxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93OiByb3dJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbjogdGhpcy5ncmlkLnVucGlubmVkQ29sdW1uc1t0aGlzLmdyaWQudW5waW5uZWRDb2x1bW5zLmxlbmd0aCAtIDFdLnZpc2libGVJbmRleFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldENlbGxFbGVtZW50QnlWaXNpYmxlSW5kZXgocm93SW5kZXgsIHZpc2libGVDb2x1bW5JbmRleCwgaXNTdW1tYXJ5KTtcbiAgICAgICAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbktleWRvd25BcnJvd0xlZnQoY2VsbCwgc2VsZWN0ZWROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzaG91bGRQZXJmb3JtVmVydGljYWxTY3JvbGwodGFyZ2V0Um93SW5kZXg6IG51bWJlciwgdmlzaWJsZUNvbHVtbkluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyVG9wT2Zmc2V0ID0gcGFyc2VJbnQodGhpcy52ZXJ0aWNhbERpc3BsYXlDb250YWluZXJFbGVtZW50LnN0eWxlLnRvcCwgMTApO1xuICAgICAgICBjb25zdCB0YXJnZXRSb3cgPSB0aGlzLmdyaWQuc3VtbWFyaWVzUm93TGlzdC5maWx0ZXIocyA9PiBzLmluZGV4ICE9PSAwKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmdyaWQucm93TGlzdC50b0FycmF5KCkpLmZpbmQociA9PiByLmluZGV4ID09PSB0YXJnZXRSb3dJbmRleCk7XG4gICAgICAgIGNvbnN0IHJvd0hlaWdodCA9IHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRTaXplQXQodGFyZ2V0Um93SW5kZXgpO1xuICAgICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSB0aGlzLmdyaWQuY2FsY0hlaWdodCA/IE1hdGguY2VpbCh0aGlzLmdyaWQuY2FsY0hlaWdodCkgOiAwO1xuICAgICAgICBjb25zdCB0YXJnZXRFbmRUb3BPZmZzZXQgPSB0YXJnZXRSb3cgPyB0YXJnZXRSb3cubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgKyByb3dIZWlnaHQgKyBjb250YWluZXJUb3BPZmZzZXQgOlxuICAgICAgICAgICAgY29udGFpbmVySGVpZ2h0ICsgcm93SGVpZ2h0O1xuICAgICAgICBpZiAoIXRhcmdldFJvdyB8fCB0YXJnZXRSb3cubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgPCBNYXRoLmFicyhjb250YWluZXJUb3BPZmZzZXQpXG4gICAgICAgICAgICB8fCBjb250YWluZXJIZWlnaHQgJiYgY29udGFpbmVySGVpZ2h0IDwgdGFyZ2V0RW5kVG9wT2Zmc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtVmVydGljYWxTY3JvbGxUb0NlbGwocm93SW5kZXg6IG51bWJlciwgdmlzaWJsZUNvbEluZGV4OiBudW1iZXIsIGNiPzogKCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuc2Nyb2xsVG8ocm93SW5kZXgpO1xuICAgICAgICB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIub25DaHVua0xvYWRcbiAgICAgICAgICAgIC5waXBlKGZpcnN0KCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtSG9yaXpvbnRhbFNjcm9sbFRvQ2VsbChcbiAgICAgICAgcm93SW5kZXg6IG51bWJlciwgdmlzaWJsZUNvbHVtbkluZGV4OiBudW1iZXIsIGlzU3VtbWFyeTogYm9vbGVhbiA9IGZhbHNlLCBjYj86ICgpID0+IHZvaWQpIHtcbiAgICAgICAgY29uc3QgdW5waW5uZWRJbmRleCA9IHRoaXMuZ2V0Q29sdW1uVW5waW5uZWRJbmRleCh2aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgIHRoaXMuZ2V0Rm9jdXNhYmxlR3JpZCgpLm5hdGl2ZUVsZW1lbnQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmdyaWQucGFyZW50VmlydERpci5vbkNodW5rTG9hZFxuICAgICAgICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGxFbGVtZW50ID0gdGhpcy5nZXRDZWxsRWxlbWVudEJ5VmlzaWJsZUluZGV4KHJvd0luZGV4LCB2aXNpYmxlQ29sdW1uSW5kZXgsIGlzU3VtbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZWxsRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbEVsZW1lbnQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbFNjcm9sbChyb3dJbmRleCkuc2Nyb2xsVG8odW5waW5uZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldEZvY3VzYWJsZUdyaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFJvd0J5SW5kZXgoaW5kZXgsIHNlbGVjdG9yID0gdGhpcy5nZXRSb3dTZWxlY3RvcigpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYCR7c2VsZWN0b3J9W2RhdGEtcm93aW5kZXg9XCIke2luZGV4fVwiXWApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXROZXh0Um93QnlJbmRleChuZXh0SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC50Ym9keS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgW2RhdGEtcm93aW5kZXg9XCIke25leHRJbmRleH1cIl1gKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEFsbFJvd3MoKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gdGhpcy5nZXRSb3dTZWxlY3RvcigpO1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldENlbGxTZWxlY3Rvcih2aXNpYmxlSW5kZXg/OiBudW1iZXIsIGlzU3VtbWFyeSA9IGZhbHNlKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGlzU3VtbWFyeSA/ICdpZ3gtZ3JpZC1zdW1tYXJ5LWNlbGwnIDogJ2lneC1ncmlkLWNlbGwnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRSb3dTZWxlY3RvcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ2lneC1ncmlkLXJvdyc7XG4gICAgfVxufVxuIl19