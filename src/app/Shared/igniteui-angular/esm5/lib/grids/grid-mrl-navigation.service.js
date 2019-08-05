/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { IgxGridNavigationService } from './grid-navigation.service';
/**
 * @record
 */
export function IStartNavigationCell() { }
if (false) {
    /** @type {?} */
    IStartNavigationCell.prototype.rowStart;
    /** @type {?} */
    IStartNavigationCell.prototype.colStart;
    /** @type {?} */
    IStartNavigationCell.prototype.direction;
}
/** @enum {string} */
var NavigationDirection = {
    horizontal: 'horizontal',
    vertical: 'vertical',
};
export { NavigationDirection };
/**
 * @hidden
 */
var IgxGridMRLNavigationService = /** @class */ (function (_super) {
    tslib_1.__extends(IgxGridMRLNavigationService, _super);
    function IgxGridMRLNavigationService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @hidden
     * @internal
     */
    /**
     * @hidden
     * \@internal
     * @param {?} colStart
     * @param {?} rowStart
     * @param {?} dir
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.setStartNavigationCell = /**
     * @hidden
     * \@internal
     * @param {?} colStart
     * @param {?} rowStart
     * @param {?} dir
     * @return {?}
     */
    function (colStart, rowStart, dir) {
        this.startNavigationCell = {
            colStart: colStart,
            rowStart: rowStart,
            direction: dir
        };
    };
    /**
     * @private
     * @param {?} colStart
     * @param {?} rowStart
     * @param {?} navDirection
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.applyNavigationCell = /**
     * @private
     * @param {?} colStart
     * @param {?} rowStart
     * @param {?} navDirection
     * @return {?}
     */
    function (colStart, rowStart, navDirection) {
        /** @type {?} */
        var oppositeDir = navDirection === NavigationDirection.vertical ?
            NavigationDirection.horizontal : NavigationDirection.vertical;
        if (this.startNavigationCell && this.startNavigationCell.direction !== navDirection) {
            this.startNavigationCell.direction = oppositeDir;
        }
        else {
            this.setStartNavigationCell(colStart, rowStart, oppositeDir);
        }
        return navDirection === NavigationDirection.vertical ?
            this.startNavigationCell.colStart : this.startNavigationCell.rowStart;
    };
    /**
     * @param {?} rowElement
     * @param {?} selectedNode
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.navigateUp = /**
     * @param {?} rowElement
     * @param {?} selectedNode
     * @return {?}
     */
    function (rowElement, selectedNode) {
        this.focusCellUpFromLayout(rowElement, selectedNode);
    };
    /**
     * @param {?} rowElement
     * @param {?} selectedNode
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.navigateDown = /**
     * @param {?} rowElement
     * @param {?} selectedNode
     * @return {?}
     */
    function (rowElement, selectedNode) {
        this.focusCellDownFromLayout(rowElement, selectedNode);
    };
    /**
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.isColumnRightEdgeVisible = /**
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    function (visibleColumnIndex) {
        /** @type {?} */
        var column = this.grid.columnList.filter(function (c) { return !c.columnGroup; }).find(function (col) { return col.visibleIndex === visibleColumnIndex; });
        /** @type {?} */
        var forOfDir = this.grid.headerContainer;
        /** @type {?} */
        var horizontalScroll = forOfDir.getHorizontalScroll();
        if (!horizontalScroll.clientWidth || (column && column.pinned)) {
            return true;
        }
        else if (column) {
            if (this.isParentColumnFullyVisible(column)) {
                return true;
            }
            /** @type {?} */
            var scrollPos = this.getChildColumnScrollPositions(visibleColumnIndex);
            return this.displayContainerWidth >= scrollPos.rightScroll - this.displayContainerScrollLeft &&
                this.displayContainerScrollLeft <= scrollPos.leftScroll;
        }
        return false;
    };
    /**
     * @private
     * @param {?} parent
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.isParentColumnFullyVisible = /**
     * @private
     * @param {?} parent
     * @return {?}
     */
    function (parent) {
        /** @type {?} */
        var forOfDir = this.grid.dataRowList.length > 0 ? this.grid.dataRowList.first.virtDirRow : this.grid.headerContainer;
        /** @type {?} */
        var horizontalScroll = forOfDir.getHorizontalScroll();
        if (!horizontalScroll.clientWidth || parent.pinned) {
            return true;
        }
        /** @type {?} */
        var index = forOfDir.igxForOf.indexOf(parent);
        return this.displayContainerWidth >= forOfDir.getColumnScrollLeft(index + 1) - this.displayContainerScrollLeft &&
            this.displayContainerScrollLeft <= forOfDir.getColumnScrollLeft(index);
    };
    /**
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.isColumnLeftEdgeVisible = /**
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    function (visibleColumnIndex) {
        /** @type {?} */
        var forOfDir = this.grid.headerContainer;
        /** @type {?} */
        var horizontalScroll = forOfDir.getHorizontalScroll();
        /** @type {?} */
        var column = this.grid.columnList.filter(function (c) { return !c.columnGroup; }).find(function (col) { return col.visibleIndex === visibleColumnIndex; });
        if (!horizontalScroll.clientWidth || column.pinned) {
            return true;
        }
        if (this.isParentColumnFullyVisible(column)) {
            return true;
        }
        /** @type {?} */
        var scrollPos = this.getChildColumnScrollPositions(visibleColumnIndex);
        return this.displayContainerScrollLeft <= scrollPos.leftScroll;
    };
    /**
     * @param {?} element
     * @param {?} selectedNode
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.onKeydownArrowRight = /**
     * @param {?} element
     * @param {?} selectedNode
     * @return {?}
     */
    function (element, selectedNode) {
        this.focusNextCellFromLayout(element, selectedNode);
    };
    /**
     * @param {?} element
     * @param {?} selectedNode
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.onKeydownArrowLeft = /**
     * @param {?} element
     * @param {?} selectedNode
     * @return {?}
     */
    function (element, selectedNode) {
        this.focusPrevCellFromLayout(element, selectedNode);
    };
    Object.defineProperty(IgxGridMRLNavigationService.prototype, "gridOrderedColumns", {
        get: /**
         * @return {?}
         */
        function () {
            return tslib_1.__spread(this.grid.pinnedColumns, this.grid.unpinnedColumns).filter(function (c) { return !c.columnGroup; })
                .sort(function (a, b) { return a.visibleIndex - b.visibleIndex; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} currentRowEl
     * @param {?} selectedNode
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.performTab = /**
     * @param {?} currentRowEl
     * @param {?} selectedNode
     * @return {?}
     */
    function (currentRowEl, selectedNode) {
        /** @type {?} */
        var visibleColumnIndex = selectedNode.layout ? selectedNode.layout.columnVisibleIndex : 0;
        /** @type {?} */
        var nextElementColumn = this.grid.columns.find(function (x) { return !x.columnGroup && x.visibleIndex === visibleColumnIndex + 1; });
        /** @type {?} */
        var rowIndex = selectedNode.row;
        /** @type {?} */
        var row = this.grid.getRowByIndex(rowIndex);
        this._moveFocusToCell(currentRowEl, nextElementColumn, row, selectedNode, 'next');
        if (nextElementColumn) {
            this.setStartNavigationCell(nextElementColumn.colStart, nextElementColumn.rowStart, null);
        }
    };
    /**
     * @protected
     * @param {?} currentRowEl
     * @param {?} nextElementColumn
     * @param {?} row
     * @param {?} selectedNode
     * @param {?} dir
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype._moveFocusToCell = /**
     * @protected
     * @param {?} currentRowEl
     * @param {?} nextElementColumn
     * @param {?} row
     * @param {?} selectedNode
     * @param {?} dir
     * @return {?}
     */
    function (currentRowEl, nextElementColumn, row, selectedNode, dir) {
        var _this = this;
        if (nextElementColumn && row.cells) {
            /** @type {?} */
            var nextCell_1 = row.cells.find(function (currCell) { return currCell.column === nextElementColumn; });
            /** @type {?} */
            var isVisible = this.isColumnRightEdgeVisible(nextElementColumn.visibleIndex);
            if (!nextCell_1 || !isVisible) {
                this.grid.nativeElement.focus({ preventScroll: true });
                /** @type {?} */
                var cb = function () {
                    nextCell_1 = row.cells.find(function (currCell) { return currCell.column === nextElementColumn; });
                    if (_this.grid.rowEditable && _this.isRowInEditMode(row.index)) {
                        if (dir === 'next') {
                            _this.moveNextEditable(row.index, selectedNode.layout.columnVisibleIndex);
                        }
                        else {
                            _this.movePreviousEditable(row.index, selectedNode.layout.columnVisibleIndex);
                        }
                        return;
                    }
                    _this._focusCell(nextCell_1.nativeElement);
                };
                this.performHorizontalScrollToCell(row.index, nextElementColumn.visibleIndex, false, cb);
            }
            else {
                if (this.grid.rowEditable && this.isRowInEditMode(row.index)) {
                    if (dir === 'next') {
                        this.moveNextEditable(row.index, selectedNode.layout.columnVisibleIndex);
                    }
                    else {
                        this.movePreviousEditable(row.index, selectedNode.layout.columnVisibleIndex);
                    }
                    return;
                }
                this._focusCell(nextCell_1.nativeElement);
            }
        }
        else {
            // end of layout reached
            if (this.isRowInEditMode(row.index)) {
                //  TODO: make gridAPI visible for internal use and remove cast to any
                ((/** @type {?} */ (this.grid))).gridAPI.submit_value();
                if (dir === 'next') {
                    this.grid.rowEditTabs.first.element.nativeElement.focus();
                }
                else {
                    this.grid.rowEditTabs.last.element.nativeElement.focus();
                }
                return;
            }
            if (dir === 'next') {
                _super.prototype.navigateDown.call(this, currentRowEl, { row: row.index, column: 0 });
            }
            else {
                /** @type {?} */
                var lastVisibleIndex_1 = 0;
                this.grid.unpinnedColumns.forEach(function (col) {
                    lastVisibleIndex_1 = Math.max(lastVisibleIndex_1, col.visibleIndex);
                });
                _super.prototype.navigateUp.call(this, currentRowEl, { row: row.index, column: lastVisibleIndex_1 });
            }
        }
    };
    /**
     * @param {?} currentRowEl
     * @param {?} selectedNode
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.performShiftTabKey = /**
     * @param {?} currentRowEl
     * @param {?} selectedNode
     * @return {?}
     */
    function (currentRowEl, selectedNode) {
        /** @type {?} */
        var visibleColumnIndex = selectedNode.layout ? selectedNode.layout.columnVisibleIndex : 0;
        /** @type {?} */
        var rowIndex = selectedNode.row;
        /** @type {?} */
        var row = this.grid.getRowByIndex(rowIndex);
        /** @type {?} */
        var prevElementColumn = this.grid.columns.find(function (x) { return !x.columnGroup && x.visibleIndex === visibleColumnIndex - 1 && !x.hidden; });
        this._moveFocusToCell(currentRowEl, prevElementColumn, row, selectedNode, 'prev');
        if (prevElementColumn) {
            this.setStartNavigationCell(prevElementColumn.colStart, prevElementColumn.rowStart, null);
        }
    };
    /**
     * @private
     * @param {?} rowElement
     * @param {?} selectedNode
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.focusCellUpFromLayout = /**
     * @private
     * @param {?} rowElement
     * @param {?} selectedNode
     * @return {?}
     */
    function (rowElement, selectedNode) {
        var _this = this;
        /** @type {?} */
        var isGroupRow = rowElement.tagName.toLowerCase() === 'igx-grid-groupby-row';
        /** @type {?} */
        var currentRowStart = selectedNode.layout ? selectedNode.layout.rowStart : 1;
        /** @type {?} */
        var currentColStart = this.applyNavigationCell(selectedNode.layout ? selectedNode.layout.colStart : 1, currentRowStart, NavigationDirection.vertical);
        /** @type {?} */
        var parentIndex = selectedNode.column;
        /** @type {?} */
        var columnLayout = this.grid.columns.find(function (x) { return x.columnLayout && x.visibleIndex === parentIndex; });
        /** @type {?} */
        var movePrev;
        // check if element up is from the same layout
        /** @type {?} */
        var upperElementColumn = columnLayout.children.find(function (c) {
            return (c.rowEnd === currentRowStart || c.rowStart + c.gridRowSpan === currentRowStart) &&
                c.colStart <= currentColStart &&
                (currentColStart < c.colEnd || currentColStart < c.colStart + c.gridColumnSpan);
        });
        if (isGroupRow || !upperElementColumn) {
            // no prev row in current row layout, go to next row last rowstart
            /** @type {?} */
            var layoutRowEnd_1 = this.grid.multiRowLayoutRowSize + 1;
            upperElementColumn = columnLayout.children.find(function (c) {
                return (c.rowEnd === layoutRowEnd_1 || c.rowStart + c.gridRowSpan === layoutRowEnd_1) &&
                    c.colStart <= currentColStart &&
                    (currentColStart < c.colEnd || currentColStart < c.colStart + c.gridColumnSpan);
            });
            movePrev = true;
        }
        /** @type {?} */
        var rowIndex = movePrev ? selectedNode.row - 1 : selectedNode.row;
        if (rowIndex < 0) {
            // end of rows reached.
            return;
        }
        /** @type {?} */
        var prevRow;
        /** @type {?} */
        var cb = function () {
            prevRow = _this.grid.getRowByIndex(rowIndex);
            if (prevRow && prevRow.cells) {
                _this._focusCell(upperElementColumn.cells.find(function (c) { return c.rowIndex === prevRow.index; }).nativeElement);
            }
            else if (prevRow) {
                prevRow.nativeElement.focus({ preventScroll: true });
            }
        };
        if (this.shouldPerformVerticalScroll(rowIndex, upperElementColumn.visibleIndex)) {
            this.grid.nativeElement.focus({ preventScroll: true });
            this.performVerticalScrollToCell(rowIndex, upperElementColumn.visibleIndex, cb);
        }
        else {
            cb();
        }
    };
    /**
     * @private
     * @param {?} rowElement
     * @param {?} selectedNode
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.focusCellDownFromLayout = /**
     * @private
     * @param {?} rowElement
     * @param {?} selectedNode
     * @return {?}
     */
    function (rowElement, selectedNode) {
        var _this = this;
        /** @type {?} */
        var isGroupRow = rowElement.tagName.toLowerCase() === 'igx-grid-groupby-row';
        /** @type {?} */
        var parentIndex = selectedNode.column;
        /** @type {?} */
        var columnLayout = this.grid.columns.find(function (x) { return x.columnLayout && x.visibleIndex === parentIndex; });
        /** @type {?} */
        var currentRowEnd = selectedNode.layout ? selectedNode.layout.rowEnd || selectedNode.layout.rowStart + 1 : 2;
        /** @type {?} */
        var currentColStart = this.applyNavigationCell(selectedNode.layout ? selectedNode.layout.colStart : 1, selectedNode.layout ? selectedNode.layout.rowStart : 1, NavigationDirection.vertical);
        /** @type {?} */
        var moveNext;
        // check if element down is from the same layout
        /** @type {?} */
        var nextElementColumn = columnLayout.children.find(function (c) { return c.rowStart === currentRowEnd &&
            c.colStart <= currentColStart &&
            (currentColStart < c.colEnd || currentColStart < c.colStart + c.gridColumnSpan); });
        if (isGroupRow || !nextElementColumn) {
            // no next row in current row layout, go to next row first rowstart
            nextElementColumn = columnLayout.children.find(function (c) { return c.rowStart === 1 &&
                c.colStart <= currentColStart &&
                (currentColStart < c.colEnd || currentColStart < c.colStart + c.gridColumnSpan); });
            moveNext = true;
        }
        /** @type {?} */
        var rowIndex = moveNext ? selectedNode.row + 1 : selectedNode.row;
        if (rowIndex > this.grid.verticalScrollContainer.igxForOf.length - 1) {
            // end of rows reached.
            return;
        }
        /** @type {?} */
        var nextRow;
        /** @type {?} */
        var cb = function () {
            nextRow = _this.grid.getRowByIndex(rowIndex);
            if (nextRow && nextRow.cells) {
                _this._focusCell(nextElementColumn.cells.find(function (c) { return c.rowIndex === nextRow.index; }).nativeElement);
            }
            else if (nextRow) {
                nextRow.nativeElement.focus({ preventScroll: true });
            }
        };
        if (this.shouldPerformVerticalScroll(rowIndex, nextElementColumn.visibleIndex)) {
            this.grid.nativeElement.focus({ preventScroll: true });
            this.performVerticalScrollToCell(rowIndex, nextElementColumn.visibleIndex, cb);
        }
        else {
            cb();
        }
    };
    /**
     * @private
     * @param {?} cellElement
     * @param {?} selectedNode
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.focusNextCellFromLayout = /**
     * @private
     * @param {?} cellElement
     * @param {?} selectedNode
     * @return {?}
     */
    function (cellElement, selectedNode) {
        var _this = this;
        /** @type {?} */
        var parentIndex = selectedNode.column;
        /** @type {?} */
        var columnLayout = this.grid.columns.find(function (x) { return x.columnLayout && x.visibleIndex === parentIndex; });
        /** @type {?} */
        var currentColEnd = selectedNode.layout.colEnd || selectedNode.layout.colStart + 1;
        /** @type {?} */
        var currentRowStart = this.applyNavigationCell(selectedNode.layout.colStart, selectedNode.layout.rowStart, NavigationDirection.horizontal);
        /** @type {?} */
        var rowIndex = selectedNode.row;
        // check if next element is from the same layout
        /** @type {?} */
        var nextElementColumn = columnLayout.children.find(function (c) { return c.colStart === currentColEnd &&
            c.rowStart <= currentRowStart &&
            (currentRowStart < c.rowEnd || currentRowStart < c.rowStart + c.gridRowSpan); });
        if (!nextElementColumn) {
            // no next column in current layout, search for next layout
            columnLayout = this.grid.columns.find(function (c) { return c.columnLayout && !c.hidden && c.visibleIndex === columnLayout.visibleIndex + 1; });
            if (!columnLayout) {
                // reached the end
                return null;
            }
            // next element is from the next layout
            nextElementColumn = columnLayout.children.find(function (c) { return c.colStart === 1 &&
                c.rowStart <= currentRowStart &&
                (currentRowStart < c.rowEnd || currentRowStart < c.rowStart + c.gridRowSpan); });
        }
        /** @type {?} */
        var cb = function () {
            /** @type {?} */
            var nextElement = nextElementColumn.cells.find(function (c) { return c.rowIndex === rowIndex; }).nativeElement;
            _this._focusCell(nextElement);
        };
        if (!this.isColumnRightEdgeVisible(nextElementColumn.visibleIndex)) {
            this.grid.nativeElement.focus({ preventScroll: true });
            this.performHorizontalScrollToCell(rowIndex, nextElementColumn.visibleIndex, false, cb);
        }
        else {
            cb();
        }
    };
    /**
     * @private
     * @param {?} cellElement
     * @param {?} selectedNode
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.focusPrevCellFromLayout = /**
     * @private
     * @param {?} cellElement
     * @param {?} selectedNode
     * @return {?}
     */
    function (cellElement, selectedNode) {
        var _this = this;
        /** @type {?} */
        var parentIndex = selectedNode.column;
        /** @type {?} */
        var columnLayout = this.grid.columns.find(function (x) { return x.columnLayout && x.visibleIndex === parentIndex; });
        /** @type {?} */
        var currentColStart = selectedNode.layout.colStart;
        /** @type {?} */
        var currentRowStart = this.applyNavigationCell(currentColStart, selectedNode.layout.rowStart, NavigationDirection.horizontal);
        /** @type {?} */
        var rowIndex = selectedNode.row;
        // check previous element is from the same layout
        /** @type {?} */
        var prevElementColumn = columnLayout.children
            .find(function (c) { return (c.colEnd === currentColStart || c.colStart + c.gridColumnSpan === currentColStart) &&
            c.rowStart <= currentRowStart &&
            (currentRowStart < c.rowEnd || currentRowStart < c.rowStart + c.gridRowSpan); });
        if (!prevElementColumn) {
            // no prev column in current layout, seacrh for prev layout
            columnLayout = this.grid.columns.find(function (c) { return c.columnLayout && !c.hidden && c.visibleIndex === columnLayout.visibleIndex - 1; });
            if (!columnLayout) {
                // reached the end
                return null;
            }
            /** @type {?} */
            var layoutSize_1 = columnLayout.getInitialChildColumnSizes(columnLayout.children).length;
            // first element is from the next layout
            prevElementColumn = columnLayout.children
                .find(function (c) { return (c.colEnd === layoutSize_1 + 1 || c.colStart + c.gridColumnSpan === layoutSize_1 + 1) &&
                c.rowStart <= currentRowStart &&
                (currentRowStart < c.rowEnd || currentRowStart < c.rowStart + c.gridRowSpan); });
        }
        /** @type {?} */
        var cb = function () {
            /** @type {?} */
            var prevElement = prevElementColumn.cells.find(function (c) { return c.rowIndex === rowIndex; }).nativeElement;
            _this._focusCell(prevElement);
        };
        if (!this.isColumnLeftEdgeVisible(prevElementColumn.visibleIndex)) {
            this.grid.nativeElement.focus({ preventScroll: true });
            this.performHorizontalScrollToCell(rowIndex, prevElementColumn.visibleIndex, false, cb);
        }
        else {
            cb();
        }
    };
    /**
     * @param {?} rowIndex
     * @param {?=} isSummary
     * @param {?=} cellRowStart
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.onKeydownEnd = /**
     * @param {?} rowIndex
     * @param {?=} isSummary
     * @param {?=} cellRowStart
     * @return {?}
     */
    function (rowIndex, isSummary, cellRowStart) {
        var _this = this;
        if (isSummary === void 0) { isSummary = false; }
        /** @type {?} */
        var layouts = this.grid.columns.filter(function (c) { return c.columnLayout && !c.hidden; }).sort(function (a, b) { return a.visibleIndex - b.visibleIndex; });
        /** @type {?} */
        var lastLayout = layouts[layouts.length - 1];
        /** @type {?} */
        var lastLayoutChildren = lastLayout.children;
        /** @type {?} */
        var layoutSize = lastLayout.getInitialChildColumnSizes(lastLayoutChildren).length;
        /** @type {?} */
        var currentRowStart = this.applyNavigationCell(this.startNavigationCell ? this.startNavigationCell.colStart : 1, cellRowStart || this.grid.multiRowLayoutRowSize, NavigationDirection.horizontal);
        /** @type {?} */
        var nextElementColumn = lastLayout.children.find(function (c) {
            return (c.colEnd === layoutSize + 1 || c.colStart + c.gridColumnSpan === layoutSize + 1) &&
                c.rowStart <= currentRowStart &&
                (currentRowStart < c.rowEnd || currentRowStart < c.rowStart + c.gridRowSpan);
        });
        /** @type {?} */
        var indexInLayout = lastLayoutChildren.toArray().indexOf(nextElementColumn);
        /** @type {?} */
        var rowList = isSummary ? this.grid.summariesRowList : this.grid.dataRowList;
        /** @type {?} */
        var rowElement = rowList.find(function (row) { return row.index === rowIndex; });
        if (!rowElement) {
            return;
        }
        rowElement = rowElement.nativeElement;
        if (!this.isColumnRightEdgeVisible(nextElementColumn.visibleIndex)) {
            this.grid.nativeElement.focus({ preventScroll: true });
            /** @type {?} */
            var cb = function () {
                /** @type {?} */
                var allBlocks = rowElement.querySelectorAll(_this.getColumnLayoutSelector());
                /** @type {?} */
                var cell = allBlocks[allBlocks.length - 1].children[indexInLayout];
                _this._focusCell(cell);
            };
            this.performHorizontalScrollToCell(rowIndex, nextElementColumn.visibleIndex, false, cb);
            return;
        }
        else {
            /** @type {?} */
            var allBlocks = rowElement.querySelectorAll(this.getColumnLayoutSelector());
            /** @type {?} */
            var cell = allBlocks[allBlocks.length - 1].children[indexInLayout];
            this._focusCell(cell);
        }
    };
    /**
     * @param {?} rowIndex
     * @param {?=} isSummary
     * @param {?=} cellRowStart
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.onKeydownHome = /**
     * @param {?} rowIndex
     * @param {?=} isSummary
     * @param {?=} cellRowStart
     * @return {?}
     */
    function (rowIndex, isSummary, cellRowStart) {
        var _this = this;
        if (isSummary === void 0) { isSummary = false; }
        if (cellRowStart === void 0) { cellRowStart = 1; }
        /** @type {?} */
        var firstLayout = this.grid.columns.filter(function (c) { return c.columnLayout && !c.hidden; })[0];
        /** @type {?} */
        var lastLayoutChildren = firstLayout.children.toArray();
        /** @type {?} */
        var currentRowStart = this.applyNavigationCell(this.startNavigationCell ? this.startNavigationCell.colStart : 1, cellRowStart, NavigationDirection.horizontal);
        /** @type {?} */
        var nextElementColumn = firstLayout.children.find(function (c) {
            return c.colStart === 1 &&
                c.rowStart <= currentRowStart &&
                (currentRowStart < c.rowEnd || currentRowStart < c.rowStart + c.gridRowSpan);
        });
        /** @type {?} */
        var indexInLayout = lastLayoutChildren.indexOf(nextElementColumn);
        /** @type {?} */
        var rowList = isSummary ? this.grid.summariesRowList : this.grid.dataRowList;
        /** @type {?} */
        var rowElement = rowList.find(function (row) { return row.index === rowIndex; });
        if (!rowElement) {
            return;
        }
        rowElement = rowElement.nativeElement;
        if (!this.isColumnLeftEdgeVisible(nextElementColumn.visibleIndex)) {
            this.grid.nativeElement.focus({ preventScroll: true });
            /** @type {?} */
            var cb = function () {
                /** @type {?} */
                var allBlocks = rowElement.querySelectorAll(_this.getColumnLayoutSelector());
                /** @type {?} */
                var cell = allBlocks[0].children[indexInLayout];
                _this._focusCell(cell);
            };
            this.performHorizontalScrollToCell(rowIndex, nextElementColumn.visibleIndex, false, cb);
            return;
        }
        else {
            /** @type {?} */
            var allBlocks = rowElement.querySelectorAll(this.getColumnLayoutSelector());
            /** @type {?} */
            var cell = allBlocks[0].children[indexInLayout];
            this._focusCell(cell);
        }
    };
    /**
     * @protected
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.getColumnLayoutSelector = /**
     * @protected
     * @return {?}
     */
    function () {
        return '.igx-grid__mrl-block';
    };
    /**
     * @protected
     * @param {?} visibleColIndex
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.getChildColumnScrollPositions = /**
     * @protected
     * @param {?} visibleColIndex
     * @return {?}
     */
    function (visibleColIndex) {
        /** @type {?} */
        var forOfDir = this.grid.dataRowList.length > 0 ? this.grid.dataRowList.first.virtDirRow : this.grid.headerContainer;
        /** @type {?} */
        var targetCol = this.getColunmByVisibleIndex(visibleColIndex);
        /** @type {?} */
        var parent = targetCol.parent;
        /** @type {?} */
        var parentVIndex = forOfDir.igxForOf.indexOf(parent);
        /** @type {?} */
        var leftScroll = forOfDir.getColumnScrollLeft(parentVIndex);
        /** @type {?} */
        var rightScroll = 0;
        // caculate offset from parent based on target column colStart and colEnd and the resolved child column sizes.
        /** @type {?} */
        var childSizes = parent.getFilledChildColumnSizes(parent.children);
        /** @type {?} */
        var colStart = targetCol.colStart || 1;
        /** @type {?} */
        var colEnd = targetCol.colEnd || colStart + 1;
        for (var i = 1; i < colStart; i++) {
            leftScroll += parseInt(childSizes[i - 1], 10);
        }
        rightScroll += leftScroll;
        for (var j = colStart; j < colEnd; j++) {
            rightScroll += parseInt(childSizes[j - 1], 10);
        }
        return { leftScroll: leftScroll, rightScroll: rightScroll };
    };
    /**
     * @protected
     * @param {?} visibleColIndex
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.getColunmByVisibleIndex = /**
     * @protected
     * @param {?} visibleColIndex
     * @return {?}
     */
    function (visibleColIndex) {
        visibleColIndex = visibleColIndex < 0 ? 0 : visibleColIndex;
        return this.grid.columnList.find(function (col) { return !col.columnLayout && col.visibleIndex === visibleColIndex; });
    };
    /**
     * @param {?} rowIndex
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.shouldPerformVerticalScroll = /**
     * @param {?} rowIndex
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    function (rowIndex, visibleColumnIndex) {
        if (this._isGroupRecordAt(rowIndex)) {
            return _super.prototype.shouldPerformVerticalScroll.call(this, rowIndex, visibleColumnIndex);
        }
        if (!_super.prototype.shouldPerformVerticalScroll.call(this, rowIndex, visibleColumnIndex)) {
            return false;
        }
        /** @type {?} */
        var targetRow = this.grid.summariesRowList.filter(function (s) { return s.index !== 0; })
            .concat(this.grid.rowList.toArray()).find(function (r) { return r.index === rowIndex; });
        /** @type {?} */
        var scrollTop = Math.abs(this.grid.verticalScrollContainer.getVerticalScroll().scrollTop);
        /** @type {?} */
        var containerHeight = this.grid.calcHeight ? Math.ceil(this.grid.calcHeight) : 0;
        /** @type {?} */
        var scrollPos = this.getVerticalScrollPositions(rowIndex, visibleColumnIndex);
        if (!targetRow || targetRow.nativeElement.offsetTop + scrollPos.topOffset < Math.abs(this.verticalDCTopOffset)
            || containerHeight && containerHeight < scrollPos.rowBottom - scrollTop) {
            return true;
        }
        else {
            return false;
        }
    };
    Object.defineProperty(IgxGridMRLNavigationService.prototype, "verticalDCTopOffset", {
        get: /**
         * @return {?}
         */
        function () {
            return parseInt(this.grid.verticalScrollContainer.dc.instance._viewContainer.element.nativeElement.style.top, 10);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} rowIndex
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype._isGroupRecordAt = /**
     * @private
     * @param {?} rowIndex
     * @return {?}
     */
    function (rowIndex) {
        /** @type {?} */
        var record = this.grid.verticalScrollContainer.igxForOf[rowIndex];
        return record.records && record.records.length;
    };
    /**
     * @param {?} rowIndex
     * @param {?} visibleColumnIndex
     * @param {?=} cb
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.performVerticalScrollToCell = /**
     * @param {?} rowIndex
     * @param {?} visibleColumnIndex
     * @param {?=} cb
     * @return {?}
     */
    function (rowIndex, visibleColumnIndex, cb) {
        if (this._isGroupRecordAt(rowIndex)) {
            return _super.prototype.performVerticalScrollToCell.call(this, rowIndex, visibleColumnIndex, cb);
        }
        /** @type {?} */
        var containerHeight = this.grid.calcHeight ? Math.ceil(this.grid.calcHeight) : 0;
        /** @type {?} */
        var scrollTop = Math.abs(this.grid.verticalScrollContainer.getVerticalScroll().scrollTop);
        /** @type {?} */
        var scrollPos = this.getVerticalScrollPositions(rowIndex, visibleColumnIndex);
        /** @type {?} */
        var targetRow = this.grid.summariesRowList.filter(function (s) { return s.index !== 0; })
            .concat(this.grid.rowList.toArray()).find(function (r) { return r.index === rowIndex; });
        /** @type {?} */
        var isPrevious = (scrollTop > scrollPos.rowTop) && (!targetRow ||
            targetRow.nativeElement.offsetTop + scrollPos.topOffset < Math.abs(this.verticalDCTopOffset));
        /** @type {?} */
        var scrollAmount = isPrevious ? scrollPos.rowTop : Math.abs(scrollTop + containerHeight - scrollPos.rowBottom);
        this.grid.verticalScrollContainer.onChunkLoad
            .pipe(first()).subscribe(function () {
            cb();
        });
        if (isPrevious) {
            this.grid.verticalScrollContainer.getVerticalScroll().scrollTop = scrollAmount;
        }
        else {
            this.grid.verticalScrollContainer.addScrollTop(scrollAmount);
        }
    };
    /**
     * @param {?} rowIndex
     * @param {?} visibleColIndex
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.getVerticalScrollPositions = /**
     * @param {?} rowIndex
     * @param {?} visibleColIndex
     * @return {?}
     */
    function (rowIndex, visibleColIndex) {
        /** @type {?} */
        var targetCol = this.getColunmByVisibleIndex(visibleColIndex);
        /** @type {?} */
        var topOffset = (targetCol.rowStart - 1) * this.grid.defaultRowHeight;
        /** @type {?} */
        var rowTop = this.grid.verticalScrollContainer.sizesCache[rowIndex] + topOffset;
        /** @type {?} */
        var rowBottom = rowTop + (this.grid.defaultRowHeight * targetCol.gridRowSpan);
        return { rowTop: rowTop, rowBottom: rowBottom, topOffset: topOffset };
    };
    /**
     * @param {?} rowIndex
     * @param {?} visibleColumnIndex
     * @param {?=} isSummary
     * @param {?=} cb
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.performHorizontalScrollToCell = /**
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
        var scrollPos = this.getChildColumnScrollPositions(visibleColumnIndex);
        /** @type {?} */
        var hScroll = this.horizontalScroll(rowIndex);
        this.grid.parentVirtDir.onChunkLoad
            .pipe(first())
            .subscribe(function () {
            if (cb) {
                cb();
            }
            else {
                _this._focusCell(_this.getCellElementByVisibleIndex(rowIndex, visibleColumnIndex, isSummary));
            }
        });
        /** @type {?} */
        var isPrevItem = hScroll.getHorizontalScroll().scrollLeft > scrollPos.leftScroll;
        /** @type {?} */
        var containerSize = parseInt(hScroll.igxForContainerSize, 10);
        /** @type {?} */
        var nextScroll = isPrevItem ? scrollPos.leftScroll : scrollPos.rightScroll - containerSize;
        hScroll.getHorizontalScroll().scrollLeft = nextScroll;
    };
    /**
     * @protected
     * @param {?} cellElem
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype._focusCell = /**
     * @protected
     * @param {?} cellElem
     * @return {?}
     */
    function (cellElem) {
        // in case of variable row heights in mrl grid make sure cell is really in view after it has been rendered.
        /** @type {?} */
        var gridBoundingClientRect = this.grid.tbody.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var diffTop = cellElem.getBoundingClientRect().top - gridBoundingClientRect.top;
        /** @type {?} */
        var diffBottom = cellElem.getBoundingClientRect().bottom - gridBoundingClientRect.bottom;
        if (diffTop < 0) {
            // cell is above grid top - not visible
            this.grid.nativeElement.focus({ preventScroll: true });
            this.grid.verticalScrollContainer.onChunkLoad
                .pipe(first())
                .subscribe(function () {
                cellElem.focus({ preventScroll: true });
            });
            this.grid.verticalScrollContainer.addScrollTop(diffTop);
        }
        else if (diffBottom > 0) {
            // cell is below grid bottom - not visible
            this.grid.nativeElement.focus({ preventScroll: true });
            this.grid.verticalScrollContainer.onChunkLoad
                .pipe(first())
                .subscribe(function () {
                cellElem.focus({ preventScroll: true });
            });
            this.grid.verticalScrollContainer.addScrollTop(diffBottom);
        }
        else {
            // cell is visible
            cellElem.focus({ preventScroll: true });
        }
    };
    /**
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.goToFirstCell = /**
     * @return {?}
     */
    function () {
        this.startNavigationCell = null;
        _super.prototype.goToFirstCell.call(this);
    };
    /**
     * @return {?}
     */
    IgxGridMRLNavigationService.prototype.goToLastCell = /**
     * @return {?}
     */
    function () {
        this.startNavigationCell = null;
        _super.prototype.goToLastCell.call(this);
    };
    IgxGridMRLNavigationService.decorators = [
        { type: Injectable }
    ];
    return IgxGridMRLNavigationService;
}(IgxGridNavigationService));
export { IgxGridMRLNavigationService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxGridMRLNavigationService.prototype.startNavigationCell;
    /** @type {?} */
    IgxGridMRLNavigationService.prototype.grid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1tcmwtbmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9ncmlkLW1ybC1uYXZpZ2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQUlyRSwwQ0FJQzs7O0lBSEcsd0NBQWlCOztJQUNqQix3Q0FBaUI7O0lBQ2pCLHlDQUErQjs7OztJQUkvQixZQUFhLFlBQVk7SUFDekIsVUFBVyxVQUFVOzs7Ozs7QUFLekI7SUFDaUQsdURBQXdCO0lBRHpFOztJQWlpQkEsQ0FBQztJQTFoQkc7OztPQUdHOzs7Ozs7Ozs7SUFDSSw0REFBc0I7Ozs7Ozs7O0lBQTdCLFVBQThCLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxHQUF3QjtRQUN0RixJQUFJLENBQUMsbUJBQW1CLEdBQUc7WUFDdkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFLEdBQUc7U0FDakIsQ0FBQztJQUNOLENBQUM7Ozs7Ozs7O0lBRU8seURBQW1COzs7Ozs7O0lBQTNCLFVBQTRCLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxZQUFpQzs7WUFDdkYsV0FBVyxHQUFHLFlBQVksS0FBSyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvRCxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLFFBQVE7UUFDakUsSUFBSSxJQUFJLENBQUMsbUJBQW1CLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsS0FBSyxZQUFZLEVBQUU7WUFDakYsSUFBSSxDQUFDLG1CQUFt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VUFBVTs7SUFpaUJYLGtDQUFDO0NBQUEsQUFqaUJELENBQ2lELHdCQUF3QixHQWdpQnhFO1NBaGlCWSwyQkFBMkI7Ozs7OztJQUVwQywwREFBa0Q7O0lBRWxELDJDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneEdyaWRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9ncmlkLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSWd4Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IElneEdyaWROYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4vZ3JpZC1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgSVNlbGVjdGlvbk5vZGUgfSBmcm9tICcuLi9jb3JlL2dyaWQtc2VsZWN0aW9uJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGFydE5hdmlnYXRpb25DZWxsIHtcbiAgICByb3dTdGFydDogbnVtYmVyO1xuICAgIGNvbFN0YXJ0OiBudW1iZXI7XG4gICAgZGlyZWN0aW9uOiBOYXZpZ2F0aW9uRGlyZWN0aW9uO1xufVxuXG5leHBvcnQgZW51bSBOYXZpZ2F0aW9uRGlyZWN0aW9uIHtcbiAgICBob3Jpem9udGFsID0gJ2hvcml6b250YWwnLFxuICAgIHZlcnRpY2FsID0gJ3ZlcnRpY2FsJ1xufVxuXG5cbi8qKiBAaGlkZGVuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSWd4R3JpZE1STE5hdmlnYXRpb25TZXJ2aWNlIGV4dGVuZHMgSWd4R3JpZE5hdmlnYXRpb25TZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgc3RhcnROYXZpZ2F0aW9uQ2VsbDogSVN0YXJ0TmF2aWdhdGlvbkNlbGw7XG5cbiAgICBwdWJsaWMgZ3JpZDogSWd4R3JpZEJhc2VDb21wb25lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIHNldFN0YXJ0TmF2aWdhdGlvbkNlbGwoY29sU3RhcnQ6IG51bWJlciwgcm93U3RhcnQ6IG51bWJlciwgZGlyOiBOYXZpZ2F0aW9uRGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuc3RhcnROYXZpZ2F0aW9uQ2VsbCA9IHtcbiAgICAgICAgICAgIGNvbFN0YXJ0OiBjb2xTdGFydCxcbiAgICAgICAgICAgIHJvd1N0YXJ0OiByb3dTdGFydCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogZGlyXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBseU5hdmlnYXRpb25DZWxsKGNvbFN0YXJ0OiBudW1iZXIsIHJvd1N0YXJ0OiBudW1iZXIsIG5hdkRpcmVjdGlvbjogTmF2aWdhdGlvbkRpcmVjdGlvbik6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IG9wcG9zaXRlRGlyID0gbmF2RGlyZWN0aW9uID09PSBOYXZpZ2F0aW9uRGlyZWN0aW9uLnZlcnRpY2FsID9cbiAgICAgICAgICAgIE5hdmlnYXRpb25EaXJlY3Rpb24uaG9yaXpvbnRhbCA6IE5hdmlnYXRpb25EaXJlY3Rpb24udmVydGljYWw7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0TmF2aWdhdGlvbkNlbGwgJiYgdGhpcy5zdGFydE5hdmlnYXRpb25DZWxsLmRpcmVjdGlvbiAhPT0gbmF2RGlyZWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0TmF2aWdhdGlvbkNlbGwuZGlyZWN0aW9uID0gb3Bwb3NpdGVEaXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXJ0TmF2aWdhdGlvbkNlbGwoY29sU3RhcnQsIHJvd1N0YXJ0LCBvcHBvc2l0ZURpcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmF2RGlyZWN0aW9uID09PSBOYXZpZ2F0aW9uRGlyZWN0aW9uLnZlcnRpY2FsID9cbiAgICAgICAgICAgIHRoaXMuc3RhcnROYXZpZ2F0aW9uQ2VsbC5jb2xTdGFydCA6IHRoaXMuc3RhcnROYXZpZ2F0aW9uQ2VsbC5yb3dTdGFydDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmF2aWdhdGVVcChyb3dFbGVtZW50OiBIVE1MRWxlbWVudCwgc2VsZWN0ZWROb2RlOiBJU2VsZWN0aW9uTm9kZSkge1xuICAgICAgICB0aGlzLmZvY3VzQ2VsbFVwRnJvbUxheW91dChyb3dFbGVtZW50LCBzZWxlY3RlZE5vZGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuYXZpZ2F0ZURvd24ocm93RWxlbWVudDogSFRNTEVsZW1lbnQsIHNlbGVjdGVkTm9kZTogSVNlbGVjdGlvbk5vZGUpIHtcbiAgICAgICAgdGhpcy5mb2N1c0NlbGxEb3duRnJvbUxheW91dChyb3dFbGVtZW50LCBzZWxlY3RlZE5vZGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0NvbHVtblJpZ2h0RWRnZVZpc2libGUodmlzaWJsZUNvbHVtbkluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5ncmlkLmNvbHVtbkxpc3QuZmlsdGVyKGMgPT4gIWMuY29sdW1uR3JvdXApLmZpbmQoKGNvbCkgPT4gY29sLnZpc2libGVJbmRleCA9PT0gdmlzaWJsZUNvbHVtbkluZGV4KTtcbiAgICAgICAgY29uc3QgZm9yT2ZEaXIgPSAgdGhpcy5ncmlkLmhlYWRlckNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbFNjcm9sbCA9IGZvck9mRGlyLmdldEhvcml6b250YWxTY3JvbGwoKTtcbiAgICAgICAgaWYgKCFob3Jpem9udGFsU2Nyb2xsLmNsaWVudFdpZHRoIHx8IChjb2x1bW4gJiYgY29sdW1uLnBpbm5lZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbikge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNQYXJlbnRDb2x1bW5GdWxseVZpc2libGUoY29sdW1uKSkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsUG9zID0gdGhpcy5nZXRDaGlsZENvbHVtblNjcm9sbFBvc2l0aW9ucyh2aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheUNvbnRhaW5lcldpZHRoID49IHNjcm9sbFBvcy5yaWdodFNjcm9sbCAtIHRoaXMuZGlzcGxheUNvbnRhaW5lclNjcm9sbExlZnQgJiZcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUNvbnRhaW5lclNjcm9sbExlZnQgPD0gc2Nyb2xsUG9zLmxlZnRTY3JvbGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBwcml2YXRlIGlzUGFyZW50Q29sdW1uRnVsbHlWaXNpYmxlKHBhcmVudDogSWd4Q29sdW1uQ29tcG9uZW50KTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGZvck9mRGlyID0gdGhpcy5ncmlkLmRhdGFSb3dMaXN0Lmxlbmd0aCA+IDAgPyB0aGlzLmdyaWQuZGF0YVJvd0xpc3QuZmlyc3QudmlydERpclJvdyA6IHRoaXMuZ3JpZC5oZWFkZXJDb250YWluZXI7XG4gICAgICAgIGNvbnN0IGhvcml6b250YWxTY3JvbGwgPSBmb3JPZkRpci5nZXRIb3Jpem9udGFsU2Nyb2xsKCk7XG4gICAgICAgIGlmICghaG9yaXpvbnRhbFNjcm9sbC5jbGllbnRXaWR0aCB8fCBwYXJlbnQucGlubmVkKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZm9yT2ZEaXIuaWd4Rm9yT2YuaW5kZXhPZihwYXJlbnQpO1xuICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5Q29udGFpbmVyV2lkdGggPj0gZm9yT2ZEaXIuZ2V0Q29sdW1uU2Nyb2xsTGVmdChpbmRleCArIDEpIC0gdGhpcy5kaXNwbGF5Q29udGFpbmVyU2Nyb2xsTGVmdCAmJlxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5Q29udGFpbmVyU2Nyb2xsTGVmdCA8PSBmb3JPZkRpci5nZXRDb2x1bW5TY3JvbGxMZWZ0KGluZGV4KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNDb2x1bW5MZWZ0RWRnZVZpc2libGUodmlzaWJsZUNvbHVtbkluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZm9yT2ZEaXIgPSB0aGlzLmdyaWQuaGVhZGVyQ29udGFpbmVyO1xuICAgICAgICBjb25zdCBob3Jpem9udGFsU2Nyb2xsID0gZm9yT2ZEaXIuZ2V0SG9yaXpvbnRhbFNjcm9sbCgpO1xuICAgICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmdyaWQuY29sdW1uTGlzdC5maWx0ZXIoYyA9PiAhYy5jb2x1bW5Hcm91cCkuZmluZCgoY29sKSA9PiBjb2wudmlzaWJsZUluZGV4ID09PSB2aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgICBpZiAoIWhvcml6b250YWxTY3JvbGwuY2xpZW50V2lkdGggfHwgY29sdW1uLnBpbm5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNQYXJlbnRDb2x1bW5GdWxseVZpc2libGUoY29sdW1uKSkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICBjb25zdCBzY3JvbGxQb3MgPSB0aGlzLmdldENoaWxkQ29sdW1uU2Nyb2xsUG9zaXRpb25zKHZpc2libGVDb2x1bW5JbmRleCk7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlDb250YWluZXJTY3JvbGxMZWZ0IDw9IHNjcm9sbFBvcy5sZWZ0U2Nyb2xsO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbktleWRvd25BcnJvd1JpZ2h0KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzZWxlY3RlZE5vZGU6IElTZWxlY3Rpb25Ob2RlKSB7XG4gICAgICAgIHRoaXMuZm9jdXNOZXh0Q2VsbEZyb21MYXlvdXQoZWxlbWVudCwgc2VsZWN0ZWROb2RlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25LZXlkb3duQXJyb3dMZWZ0KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzZWxlY3RlZE5vZGU6IElTZWxlY3Rpb25Ob2RlKSB7XG4gICAgICAgIHRoaXMuZm9jdXNQcmV2Q2VsbEZyb21MYXlvdXQoZWxlbWVudCwgc2VsZWN0ZWROb2RlKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBncmlkT3JkZXJlZENvbHVtbnMoKTogSWd4Q29sdW1uQ29tcG9uZW50W10ge1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMuZ3JpZC5waW5uZWRDb2x1bW5zLCAuLi50aGlzLmdyaWQudW5waW5uZWRDb2x1bW5zXS5maWx0ZXIoYyA9PiAhYy5jb2x1bW5Hcm91cClcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEudmlzaWJsZUluZGV4IC0gYi52aXNpYmxlSW5kZXgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtVGFiKGN1cnJlbnRSb3dFbDogSFRNTEVsZW1lbnQsIHNlbGVjdGVkTm9kZTogSVNlbGVjdGlvbk5vZGUpIHtcbiAgICAgICAgY29uc3QgdmlzaWJsZUNvbHVtbkluZGV4ID0gc2VsZWN0ZWROb2RlLmxheW91dCA/IHNlbGVjdGVkTm9kZS5sYXlvdXQuY29sdW1uVmlzaWJsZUluZGV4IDogMDtcbiAgICAgICAgY29uc3QgbmV4dEVsZW1lbnRDb2x1bW4gPSB0aGlzLmdyaWQuY29sdW1ucy5maW5kKHggPT4gIXguY29sdW1uR3JvdXAgJiYgeC52aXNpYmxlSW5kZXggPT09IHZpc2libGVDb2x1bW5JbmRleCArIDEpO1xuICAgICAgICBjb25zdCByb3dJbmRleCA9IHNlbGVjdGVkTm9kZS5yb3c7XG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuZ3JpZC5nZXRSb3dCeUluZGV4KHJvd0luZGV4KTtcbiAgICAgICAgdGhpcy5fbW92ZUZvY3VzVG9DZWxsKGN1cnJlbnRSb3dFbCwgbmV4dEVsZW1lbnRDb2x1bW4sIHJvdywgc2VsZWN0ZWROb2RlLCAnbmV4dCcpO1xuICAgICAgICBpZiAobmV4dEVsZW1lbnRDb2x1bW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhcnROYXZpZ2F0aW9uQ2VsbChuZXh0RWxlbWVudENvbHVtbi5jb2xTdGFydCwgbmV4dEVsZW1lbnRDb2x1bW4ucm93U3RhcnQsIG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9tb3ZlRm9jdXNUb0NlbGwoY3VycmVudFJvd0VsOiBIVE1MRWxlbWVudCwgbmV4dEVsZW1lbnRDb2x1bW4sIHJvdywgc2VsZWN0ZWROb2RlLCBkaXIpIHtcbiAgICAgICAgaWYgKG5leHRFbGVtZW50Q29sdW1uICYmIHJvdy5jZWxscykge1xuICAgICAgICAgICAgbGV0IG5leHRDZWxsID0gcm93LmNlbGxzLmZpbmQoY3VyckNlbGwgPT4gY3VyckNlbGwuY29sdW1uID09PSBuZXh0RWxlbWVudENvbHVtbik7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSB0aGlzLmlzQ29sdW1uUmlnaHRFZGdlVmlzaWJsZShuZXh0RWxlbWVudENvbHVtbi52aXNpYmxlSW5kZXgpO1xuICAgICAgICAgICAgaWYgKCFuZXh0Q2VsbCB8fCAhaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNiID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBuZXh0Q2VsbCA9IHJvdy5jZWxscy5maW5kKGN1cnJDZWxsID0+IGN1cnJDZWxsLmNvbHVtbiA9PT0gbmV4dEVsZW1lbnRDb2x1bW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmlkLnJvd0VkaXRhYmxlICYmIHRoaXMuaXNSb3dJbkVkaXRNb2RlKHJvdy5pbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXIgPT09ICduZXh0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZU5leHRFZGl0YWJsZShyb3cuaW5kZXgsIHNlbGVjdGVkTm9kZS5sYXlvdXQuY29sdW1uVmlzaWJsZUluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUHJldmlvdXNFZGl0YWJsZShyb3cuaW5kZXgsIHNlbGVjdGVkTm9kZS5sYXlvdXQuY29sdW1uVmlzaWJsZUluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb2N1c0NlbGwobmV4dENlbGwubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmZvcm1Ib3Jpem9udGFsU2Nyb2xsVG9DZWxsKHJvdy5pbmRleCwgbmV4dEVsZW1lbnRDb2x1bW4udmlzaWJsZUluZGV4LCBmYWxzZSwgY2IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmlkLnJvd0VkaXRhYmxlICYmIHRoaXMuaXNSb3dJbkVkaXRNb2RlKHJvdy5pbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpciA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVOZXh0RWRpdGFibGUocm93LmluZGV4LCBzZWxlY3RlZE5vZGUubGF5b3V0LmNvbHVtblZpc2libGVJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVQcmV2aW91c0VkaXRhYmxlKHJvdy5pbmRleCwgc2VsZWN0ZWROb2RlLmxheW91dC5jb2x1bW5WaXNpYmxlSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fZm9jdXNDZWxsKG5leHRDZWxsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZW5kIG9mIGxheW91dCByZWFjaGVkXG4gICAgICAgICAgICBpZiAodGhpcy5pc1Jvd0luRWRpdE1vZGUocm93LmluZGV4KSkge1xuICAgICAgICAgICAgICAgIC8vICBUT0RPOiBtYWtlIGdyaWRBUEkgdmlzaWJsZSBmb3IgaW50ZXJuYWwgdXNlIGFuZCByZW1vdmUgY2FzdCB0byBhbnlcbiAgICAgICAgICAgICAgICAodGhpcy5ncmlkIGFzIGFueSkuZ3JpZEFQSS5zdWJtaXRfdmFsdWUoKTtcbiAgICAgICAgICAgICAgICBpZiAoZGlyID09PSAnbmV4dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkLnJvd0VkaXRUYWJzLmZpcnN0LmVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5yb3dFZGl0VGFicy5sYXN0LmVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlyID09PSAnbmV4dCcpIHtcbiAgICAgICAgICAgICAgICBzdXBlci5uYXZpZ2F0ZURvd24oY3VycmVudFJvd0VsLCB7cm93OiByb3cuaW5kZXgsIGNvbHVtbjogMH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgbGV0IGxhc3RWaXNpYmxlSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC51bnBpbm5lZENvbHVtbnMuZm9yRWFjaCgoY29sKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RWaXNpYmxlSW5kZXggPSBNYXRoLm1heChsYXN0VmlzaWJsZUluZGV4LCBjb2wudmlzaWJsZUluZGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdXBlci5uYXZpZ2F0ZVVwKGN1cnJlbnRSb3dFbCwge3Jvdzogcm93LmluZGV4LCBjb2x1bW46IGxhc3RWaXNpYmxlSW5kZXh9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtU2hpZnRUYWJLZXkoY3VycmVudFJvd0VsOiBIVE1MRWxlbWVudCwgc2VsZWN0ZWROb2RlOiBJU2VsZWN0aW9uTm9kZSkge1xuICAgICAgICBjb25zdCB2aXNpYmxlQ29sdW1uSW5kZXggPSBzZWxlY3RlZE5vZGUubGF5b3V0ID8gc2VsZWN0ZWROb2RlLmxheW91dC5jb2x1bW5WaXNpYmxlSW5kZXggOiAwO1xuICAgICAgICBjb25zdCByb3dJbmRleCA9IHNlbGVjdGVkTm9kZS5yb3c7XG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuZ3JpZC5nZXRSb3dCeUluZGV4KHJvd0luZGV4KTtcbiAgICAgICAgY29uc3QgcHJldkVsZW1lbnRDb2x1bW4gPVxuICAgICAgICAgdGhpcy5ncmlkLmNvbHVtbnMuZmluZCh4ID0+ICF4LmNvbHVtbkdyb3VwICYmIHgudmlzaWJsZUluZGV4ID09PSB2aXNpYmxlQ29sdW1uSW5kZXggLSAxICYmICF4LmhpZGRlbik7XG4gICAgICAgICB0aGlzLl9tb3ZlRm9jdXNUb0NlbGwoY3VycmVudFJvd0VsLCBwcmV2RWxlbWVudENvbHVtbiwgcm93LCBzZWxlY3RlZE5vZGUsICdwcmV2Jyk7XG4gICAgICAgIGlmIChwcmV2RWxlbWVudENvbHVtbikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGFydE5hdmlnYXRpb25DZWxsKHByZXZFbGVtZW50Q29sdW1uLmNvbFN0YXJ0LCBwcmV2RWxlbWVudENvbHVtbi5yb3dTdGFydCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGZvY3VzQ2VsbFVwRnJvbUxheW91dChyb3dFbGVtZW50OiBIVE1MRWxlbWVudCwgc2VsZWN0ZWROb2RlOiBJU2VsZWN0aW9uTm9kZSkge1xuICAgICAgICBjb25zdCBpc0dyb3VwUm93ID0gcm93RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpZ3gtZ3JpZC1ncm91cGJ5LXJvdyc7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRSb3dTdGFydCA9IHNlbGVjdGVkTm9kZS5sYXlvdXQgPyAgc2VsZWN0ZWROb2RlLmxheW91dC5yb3dTdGFydCA6IDE7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2xTdGFydCA9IHRoaXMuYXBwbHlOYXZpZ2F0aW9uQ2VsbChzZWxlY3RlZE5vZGUubGF5b3V0ID8gc2VsZWN0ZWROb2RlLmxheW91dC5jb2xTdGFydCA6IDEsXG4gICAgICAgICAgICBjdXJyZW50Um93U3RhcnQsXG4gICAgICAgICAgICBOYXZpZ2F0aW9uRGlyZWN0aW9uLnZlcnRpY2FsKTtcbiAgICAgICAgY29uc3QgcGFyZW50SW5kZXggPSBzZWxlY3RlZE5vZGUuY29sdW1uO1xuICAgICAgICBjb25zdCBjb2x1bW5MYXlvdXQgPSB0aGlzLmdyaWQuY29sdW1ucy5maW5kKCB4ID0+IHguY29sdW1uTGF5b3V0ICYmIHgudmlzaWJsZUluZGV4ID09PSBwYXJlbnRJbmRleCk7XG4gICAgICAgIGxldCBtb3ZlUHJldjtcbiAgICAgICAgLy8gY2hlY2sgaWYgZWxlbWVudCB1cCBpcyBmcm9tIHRoZSBzYW1lIGxheW91dFxuICAgICAgICBsZXQgdXBwZXJFbGVtZW50Q29sdW1uID0gY29sdW1uTGF5b3V0LmNoaWxkcmVuLmZpbmQoYyA9PlxuICAgICAgICAgICAgKGMucm93RW5kID09PSBjdXJyZW50Um93U3RhcnQgfHwgYy5yb3dTdGFydCArIGMuZ3JpZFJvd1NwYW4gPT09IGN1cnJlbnRSb3dTdGFydCkgICYmXG4gICAgICAgICAgICBjLmNvbFN0YXJ0IDw9IGN1cnJlbnRDb2xTdGFydCAmJlxuICAgICAgICAgICAgKGN1cnJlbnRDb2xTdGFydCA8IGMuY29sRW5kIHx8IGN1cnJlbnRDb2xTdGFydCA8IGMuY29sU3RhcnQgKyBjLmdyaWRDb2x1bW5TcGFuKSk7XG4gICAgICAgIGlmIChpc0dyb3VwUm93IHx8ICF1cHBlckVsZW1lbnRDb2x1bW4pIHtcbiAgICAgICAgICAgIC8vIG5vIHByZXYgcm93IGluIGN1cnJlbnQgcm93IGxheW91dCwgZ28gdG8gbmV4dCByb3cgbGFzdCByb3dzdGFydFxuICAgICAgICAgICAgY29uc3QgbGF5b3V0Um93RW5kID0gdGhpcy5ncmlkLm11bHRpUm93TGF5b3V0Um93U2l6ZSArIDE7XG4gICAgICAgICAgICB1cHBlckVsZW1lbnRDb2x1bW4gPSBjb2x1bW5MYXlvdXQuY2hpbGRyZW4uZmluZChjID0+XG4gICAgICAgICAgICAgICAgKGMucm93RW5kID09PSBsYXlvdXRSb3dFbmQgfHwgYy5yb3dTdGFydCArIGMuZ3JpZFJvd1NwYW4gPT09IGxheW91dFJvd0VuZCkgJiZcbiAgICAgICAgICAgICAgICBjLmNvbFN0YXJ0IDw9IGN1cnJlbnRDb2xTdGFydCAmJlxuICAgICAgICAgICAgICAgIChjdXJyZW50Q29sU3RhcnQgPCBjLmNvbEVuZCB8fCBjdXJyZW50Q29sU3RhcnQgPCBjLmNvbFN0YXJ0ICsgYy5ncmlkQ29sdW1uU3BhbikpO1xuICAgICAgICAgICAgbW92ZVByZXYgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvd0luZGV4ID0gbW92ZVByZXYgPyBzZWxlY3RlZE5vZGUucm93IC0gMSA6IHNlbGVjdGVkTm9kZS5yb3c7XG4gICAgICAgIGlmIChyb3dJbmRleCA8IDApIHtcbiAgICAgICAgICAgIC8vIGVuZCBvZiByb3dzIHJlYWNoZWQuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByZXZSb3c7XG4gICAgICAgIGNvbnN0IGNiID0gKCkgPT4ge1xuICAgICAgICAgICAgcHJldlJvdyA9IHRoaXMuZ3JpZC5nZXRSb3dCeUluZGV4KHJvd0luZGV4KTtcbiAgICAgICAgICAgIGlmIChwcmV2Um93ICYmIHByZXZSb3cuY2VsbHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mb2N1c0NlbGwodXBwZXJFbGVtZW50Q29sdW1uLmNlbGxzLmZpbmQoKGMpID0+IGMucm93SW5kZXggPT09IHByZXZSb3cuaW5kZXgpLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcmV2Um93KSB7XG4gICAgICAgICAgICAgICAgcHJldlJvdy5uYXRpdmVFbGVtZW50LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkUGVyZm9ybVZlcnRpY2FsU2Nyb2xsKHJvd0luZGV4LCB1cHBlckVsZW1lbnRDb2x1bW4udmlzaWJsZUluZGV4KSkge1xuICAgICAgICAgICAgdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucGVyZm9ybVZlcnRpY2FsU2Nyb2xsVG9DZWxsKHJvd0luZGV4LCB1cHBlckVsZW1lbnRDb2x1bW4udmlzaWJsZUluZGV4LCBjYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c0NlbGxEb3duRnJvbUxheW91dChyb3dFbGVtZW50OiBIVE1MRWxlbWVudCwgc2VsZWN0ZWROb2RlOiBJU2VsZWN0aW9uTm9kZSkge1xuICAgICAgICBjb25zdCBpc0dyb3VwUm93ID0gcm93RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpZ3gtZ3JpZC1ncm91cGJ5LXJvdyc7XG4gICAgICAgIGNvbnN0IHBhcmVudEluZGV4ID0gc2VsZWN0ZWROb2RlLmNvbHVtbjtcbiAgICAgICAgY29uc3QgY29sdW1uTGF5b3V0ID0gdGhpcy5ncmlkLmNvbHVtbnMuZmluZCggeCA9PiB4LmNvbHVtbkxheW91dCAmJiB4LnZpc2libGVJbmRleCA9PT0gcGFyZW50SW5kZXgpO1xuICAgICAgICBjb25zdCBjdXJyZW50Um93RW5kID0gc2VsZWN0ZWROb2RlLmxheW91dCA/IHNlbGVjdGVkTm9kZS5sYXlvdXQucm93RW5kIHx8IHNlbGVjdGVkTm9kZS5sYXlvdXQucm93U3RhcnQgKyAxIDogMjtcbiAgICAgICAgY29uc3QgY3VycmVudENvbFN0YXJ0ID0gdGhpcy5hcHBseU5hdmlnYXRpb25DZWxsKHNlbGVjdGVkTm9kZS5sYXlvdXQgPyBzZWxlY3RlZE5vZGUubGF5b3V0LmNvbFN0YXJ0IDogMSxcbiAgICAgICAgICAgIHNlbGVjdGVkTm9kZS5sYXlvdXQgPyBzZWxlY3RlZE5vZGUubGF5b3V0LnJvd1N0YXJ0IDogMSxcbiAgICAgICAgICAgIE5hdmlnYXRpb25EaXJlY3Rpb24udmVydGljYWwpO1xuICAgICAgICBsZXQgbW92ZU5leHQ7XG4gICAgICAgIC8vIGNoZWNrIGlmIGVsZW1lbnQgZG93biBpcyBmcm9tIHRoZSBzYW1lIGxheW91dFxuICAgICAgICBsZXQgbmV4dEVsZW1lbnRDb2x1bW4gPSBjb2x1bW5MYXlvdXQuY2hpbGRyZW4uZmluZChjID0+IGMucm93U3RhcnQgPT09IGN1cnJlbnRSb3dFbmQgJiZcbiAgICAgICAgICAgIGMuY29sU3RhcnQgPD0gY3VycmVudENvbFN0YXJ0ICYmXG4gICAgICAgICAgICAoY3VycmVudENvbFN0YXJ0IDwgYy5jb2xFbmQgfHwgY3VycmVudENvbFN0YXJ0IDwgYy5jb2xTdGFydCArIGMuZ3JpZENvbHVtblNwYW4pKTtcbiAgICAgICAgaWYgKGlzR3JvdXBSb3cgfHwgIW5leHRFbGVtZW50Q29sdW1uKSB7XG4gICAgICAgICAgICAvLyBubyBuZXh0IHJvdyBpbiBjdXJyZW50IHJvdyBsYXlvdXQsIGdvIHRvIG5leHQgcm93IGZpcnN0IHJvd3N0YXJ0XG4gICAgICAgICAgICBuZXh0RWxlbWVudENvbHVtbiA9IGNvbHVtbkxheW91dC5jaGlsZHJlbi5maW5kKGMgPT4gYy5yb3dTdGFydCA9PT0gMSAmJlxuICAgICAgICAgICAgICAgIGMuY29sU3RhcnQgPD0gY3VycmVudENvbFN0YXJ0ICYmXG4gICAgICAgICAgICAgICAgKGN1cnJlbnRDb2xTdGFydCA8IGMuY29sRW5kIHx8IGN1cnJlbnRDb2xTdGFydCA8IGMuY29sU3RhcnQgKyBjLmdyaWRDb2x1bW5TcGFuKSk7XG4gICAgICAgICAgICBtb3ZlTmV4dCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm93SW5kZXggPSBtb3ZlTmV4dCA/IHNlbGVjdGVkTm9kZS5yb3cgKyAxIDogc2VsZWN0ZWROb2RlLnJvdztcbiAgICAgICAgaWYgKHJvd0luZGV4ID4gdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIC8vIGVuZCBvZiByb3dzIHJlYWNoZWQuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5leHRSb3c7XG4gICAgICAgIGNvbnN0IGNiID0gKCkgPT4ge1xuICAgICAgICAgICAgbmV4dFJvdyA9IHRoaXMuZ3JpZC5nZXRSb3dCeUluZGV4KHJvd0luZGV4KTtcbiAgICAgICAgICAgIGlmIChuZXh0Um93ICYmIG5leHRSb3cuY2VsbHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mb2N1c0NlbGwobmV4dEVsZW1lbnRDb2x1bW4uY2VsbHMuZmluZCgoYykgPT4gYy5yb3dJbmRleCA9PT0gbmV4dFJvdy5pbmRleCkubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5leHRSb3cpIHtcbiAgICAgICAgICAgICAgICBuZXh0Um93Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5zaG91bGRQZXJmb3JtVmVydGljYWxTY3JvbGwocm93SW5kZXgsIG5leHRFbGVtZW50Q29sdW1uLnZpc2libGVJbmRleCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5uYXRpdmVFbGVtZW50LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmZvcm1WZXJ0aWNhbFNjcm9sbFRvQ2VsbChyb3dJbmRleCwgbmV4dEVsZW1lbnRDb2x1bW4udmlzaWJsZUluZGV4LCBjYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c05leHRDZWxsRnJvbUxheW91dChjZWxsRWxlbWVudDogSFRNTEVsZW1lbnQsIHNlbGVjdGVkTm9kZTogSVNlbGVjdGlvbk5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFyZW50SW5kZXggPSBzZWxlY3RlZE5vZGUuY29sdW1uO1xuICAgICAgICBsZXQgY29sdW1uTGF5b3V0ID0gdGhpcy5ncmlkLmNvbHVtbnMuZmluZCggeCA9PiB4LmNvbHVtbkxheW91dCAmJiB4LnZpc2libGVJbmRleCA9PT0gcGFyZW50SW5kZXgpO1xuICAgICAgICBjb25zdCBjdXJyZW50Q29sRW5kID0gc2VsZWN0ZWROb2RlLmxheW91dC5jb2xFbmQgfHwgc2VsZWN0ZWROb2RlLmxheW91dC5jb2xTdGFydCArIDE7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRSb3dTdGFydCA9IHRoaXMuYXBwbHlOYXZpZ2F0aW9uQ2VsbChzZWxlY3RlZE5vZGUubGF5b3V0LmNvbFN0YXJ0LFxuICAgICAgICAgICAgc2VsZWN0ZWROb2RlLmxheW91dC5yb3dTdGFydCxcbiAgICAgICAgICAgIE5hdmlnYXRpb25EaXJlY3Rpb24uaG9yaXpvbnRhbCk7XG4gICAgICAgIGNvbnN0IHJvd0luZGV4ID0gc2VsZWN0ZWROb2RlLnJvdztcbiAgICAgICAgLy8gY2hlY2sgaWYgbmV4dCBlbGVtZW50IGlzIGZyb20gdGhlIHNhbWUgbGF5b3V0XG4gICAgICAgIGxldCBuZXh0RWxlbWVudENvbHVtbiA9IGNvbHVtbkxheW91dC5jaGlsZHJlbi5maW5kKGMgPT4gYy5jb2xTdGFydCA9PT0gY3VycmVudENvbEVuZCAmJlxuICAgICAgICAgICAgYy5yb3dTdGFydCA8PSBjdXJyZW50Um93U3RhcnQgJiZcbiAgICAgICAgICAgIChjdXJyZW50Um93U3RhcnQgPCBjLnJvd0VuZCB8fCBjdXJyZW50Um93U3RhcnQgPCBjLnJvd1N0YXJ0ICsgYy5ncmlkUm93U3BhbikpO1xuICAgICAgICBpZiAoIW5leHRFbGVtZW50Q29sdW1uKSB7XG4gICAgICAgICAgICAvLyBubyBuZXh0IGNvbHVtbiBpbiBjdXJyZW50IGxheW91dCwgc2VhcmNoIGZvciBuZXh0IGxheW91dFxuICAgICAgICAgICAgY29sdW1uTGF5b3V0ID0gdGhpcy5ncmlkLmNvbHVtbnMuZmluZChjID0+IGMuY29sdW1uTGF5b3V0ICYmICFjLmhpZGRlbiAmJiBjLnZpc2libGVJbmRleCA9PT0gY29sdW1uTGF5b3V0LnZpc2libGVJbmRleCArIDEpO1xuICAgICAgICAgICAgaWYgKCFjb2x1bW5MYXlvdXQpIHtcbiAgICAgICAgICAgICAgICAvLyByZWFjaGVkIHRoZSBlbmRcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG5leHQgZWxlbWVudCBpcyBmcm9tIHRoZSBuZXh0IGxheW91dFxuICAgICAgICAgICAgbmV4dEVsZW1lbnRDb2x1bW4gPSBjb2x1bW5MYXlvdXQuY2hpbGRyZW4uZmluZChjID0+IGMuY29sU3RhcnQgPT09IDEgJiZcbiAgICAgICAgICAgICAgICBjLnJvd1N0YXJ0IDw9IGN1cnJlbnRSb3dTdGFydCAmJlxuICAgICAgICAgICAgICAgIChjdXJyZW50Um93U3RhcnQgPCBjLnJvd0VuZCB8fCBjdXJyZW50Um93U3RhcnQgPCBjLnJvd1N0YXJ0ICsgYy5ncmlkUm93U3BhbikpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNiID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dEVsZW1lbnQgPSBuZXh0RWxlbWVudENvbHVtbi5jZWxscy5maW5kKChjKSA9PiBjLnJvd0luZGV4ID09PSByb3dJbmRleCkubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgdGhpcy5fZm9jdXNDZWxsKG5leHRFbGVtZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29sdW1uUmlnaHRFZGdlVmlzaWJsZShuZXh0RWxlbWVudENvbHVtbi52aXNpYmxlSW5kZXgpKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQubmF0aXZlRWxlbWVudC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1Ib3Jpem9udGFsU2Nyb2xsVG9DZWxsKHJvd0luZGV4LCBuZXh0RWxlbWVudENvbHVtbi52aXNpYmxlSW5kZXgsIGZhbHNlLCBjYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c1ByZXZDZWxsRnJvbUxheW91dChjZWxsRWxlbWVudDogSFRNTEVsZW1lbnQsIHNlbGVjdGVkTm9kZTogSVNlbGVjdGlvbk5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFyZW50SW5kZXggPSBzZWxlY3RlZE5vZGUuY29sdW1uO1xuICAgICAgICBsZXQgY29sdW1uTGF5b3V0ID0gdGhpcy5ncmlkLmNvbHVtbnMuZmluZCggeCA9PiB4LmNvbHVtbkxheW91dCAmJiB4LnZpc2libGVJbmRleCA9PT0gcGFyZW50SW5kZXgpO1xuICAgICAgICBjb25zdCBjdXJyZW50Q29sU3RhcnQgPSBzZWxlY3RlZE5vZGUubGF5b3V0LmNvbFN0YXJ0O1xuICAgICAgICBjb25zdCBjdXJyZW50Um93U3RhcnQgPSB0aGlzLmFwcGx5TmF2aWdhdGlvbkNlbGwoY3VycmVudENvbFN0YXJ0LFxuICAgICAgICAgICAgc2VsZWN0ZWROb2RlLmxheW91dC5yb3dTdGFydCxcbiAgICAgICAgICAgIE5hdmlnYXRpb25EaXJlY3Rpb24uaG9yaXpvbnRhbCk7XG4gICAgICAgIGNvbnN0IHJvd0luZGV4ID0gc2VsZWN0ZWROb2RlLnJvdztcblxuICAgICAgICAvLyBjaGVjayBwcmV2aW91cyBlbGVtZW50IGlzIGZyb20gdGhlIHNhbWUgbGF5b3V0XG4gICAgICAgIGxldCBwcmV2RWxlbWVudENvbHVtbiA9IGNvbHVtbkxheW91dC5jaGlsZHJlblxuICAgICAgICAuZmluZChjID0+IChjLmNvbEVuZCA9PT0gY3VycmVudENvbFN0YXJ0IHx8IGMuY29sU3RhcnQgKyBjLmdyaWRDb2x1bW5TcGFuID09PSBjdXJyZW50Q29sU3RhcnQgKSAmJlxuICAgICAgICAgICAgYy5yb3dTdGFydCA8PSBjdXJyZW50Um93U3RhcnQgJiZcbiAgICAgICAgICAgIChjdXJyZW50Um93U3RhcnQgPCBjLnJvd0VuZCB8fCBjdXJyZW50Um93U3RhcnQgPCBjLnJvd1N0YXJ0ICsgYy5ncmlkUm93U3BhbikpO1xuICAgICAgICBpZiAoIXByZXZFbGVtZW50Q29sdW1uKSB7XG4gICAgICAgICAgICAvLyBubyBwcmV2IGNvbHVtbiBpbiBjdXJyZW50IGxheW91dCwgc2VhY3JoIGZvciBwcmV2IGxheW91dFxuICAgICAgICAgICAgY29sdW1uTGF5b3V0ID0gdGhpcy5ncmlkLmNvbHVtbnMuZmluZChjID0+IGMuY29sdW1uTGF5b3V0ICYmICFjLmhpZGRlbiAmJiBjLnZpc2libGVJbmRleCA9PT0gY29sdW1uTGF5b3V0LnZpc2libGVJbmRleCAtIDEpO1xuICAgICAgICAgICAgaWYgKCFjb2x1bW5MYXlvdXQpIHtcbiAgICAgICAgICAgICAgICAvLyByZWFjaGVkIHRoZSBlbmRcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxheW91dFNpemUgPSBjb2x1bW5MYXlvdXQuZ2V0SW5pdGlhbENoaWxkQ29sdW1uU2l6ZXMoY29sdW1uTGF5b3V0LmNoaWxkcmVuKS5sZW5ndGg7XG4gICAgICAgICAgICAvLyBmaXJzdCBlbGVtZW50IGlzIGZyb20gdGhlIG5leHQgbGF5b3V0XG4gICAgICAgICAgICBwcmV2RWxlbWVudENvbHVtbiA9IGNvbHVtbkxheW91dC5jaGlsZHJlblxuICAgICAgICAgICAgLmZpbmQoYyA9PiAoYy5jb2xFbmQgPT09IGxheW91dFNpemUgKyAxIHx8IGMuY29sU3RhcnQgKyBjLmdyaWRDb2x1bW5TcGFuID09PSBsYXlvdXRTaXplICsgMSkgJiZcbiAgICAgICAgICAgICAgICBjLnJvd1N0YXJ0IDw9IGN1cnJlbnRSb3dTdGFydCAmJlxuICAgICAgICAgICAgICAgIChjdXJyZW50Um93U3RhcnQgPCBjLnJvd0VuZCB8fCBjdXJyZW50Um93U3RhcnQgPCBjLnJvd1N0YXJ0ICsgYy5ncmlkUm93U3BhbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmV2RWxlbWVudCA9IHByZXZFbGVtZW50Q29sdW1uLmNlbGxzLmZpbmQoKGMpID0+IGMucm93SW5kZXggPT09IHJvd0luZGV4KS5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5fZm9jdXNDZWxsKHByZXZFbGVtZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29sdW1uTGVmdEVkZ2VWaXNpYmxlKHByZXZFbGVtZW50Q29sdW1uLnZpc2libGVJbmRleCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5uYXRpdmVFbGVtZW50LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybUhvcml6b250YWxTY3JvbGxUb0NlbGwocm93SW5kZXgsIHByZXZFbGVtZW50Q29sdW1uLnZpc2libGVJbmRleCwgZmFsc2UsIGNiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25LZXlkb3duRW5kKHJvd0luZGV4OiBudW1iZXIsIGlzU3VtbWFyeTogYm9vbGVhbiA9IGZhbHNlLCBjZWxsUm93U3RhcnQ/OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgbGF5b3V0cyA9IHRoaXMuZ3JpZC5jb2x1bW5zLmZpbHRlcihjID0+IGMuY29sdW1uTGF5b3V0ICYmICFjLmhpZGRlbikuc29ydCgoYSwgYikgPT4gYS52aXNpYmxlSW5kZXggLSBiLnZpc2libGVJbmRleCk7XG4gICAgICAgIGNvbnN0IGxhc3RMYXlvdXQgPSBsYXlvdXRzW2xheW91dHMubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IGxhc3RMYXlvdXRDaGlsZHJlbiA9IGxhc3RMYXlvdXQuY2hpbGRyZW47XG4gICAgICAgIGNvbnN0IGxheW91dFNpemUgPSAgbGFzdExheW91dC5nZXRJbml0aWFsQ2hpbGRDb2x1bW5TaXplcyhsYXN0TGF5b3V0Q2hpbGRyZW4pLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY3VycmVudFJvd1N0YXJ0ID0gdGhpcy5hcHBseU5hdmlnYXRpb25DZWxsKFxuICAgICAgICAgICAgdGhpcy5zdGFydE5hdmlnYXRpb25DZWxsID8gdGhpcy5zdGFydE5hdmlnYXRpb25DZWxsLmNvbFN0YXJ0IDogMSxcbiAgICAgICAgICAgIGNlbGxSb3dTdGFydCB8fCB0aGlzLmdyaWQubXVsdGlSb3dMYXlvdXRSb3dTaXplLFxuICAgICAgICAgICAgTmF2aWdhdGlvbkRpcmVjdGlvbi5ob3Jpem9udGFsKTtcbiAgICAgICAgY29uc3QgbmV4dEVsZW1lbnRDb2x1bW4gPSBsYXN0TGF5b3V0LmNoaWxkcmVuLmZpbmQoYyA9PlxuICAgICAgICAgICAgKGMuY29sRW5kID09PSBsYXlvdXRTaXplICsgMSB8fCBjLmNvbFN0YXJ0ICsgYy5ncmlkQ29sdW1uU3BhbiA9PT0gbGF5b3V0U2l6ZSArIDEpICYmXG4gICAgICAgICAgICBjLnJvd1N0YXJ0IDw9IGN1cnJlbnRSb3dTdGFydCAmJlxuICAgICAgICAgICAgKGN1cnJlbnRSb3dTdGFydCA8IGMucm93RW5kIHx8IGN1cnJlbnRSb3dTdGFydCA8IGMucm93U3RhcnQgKyBjLmdyaWRSb3dTcGFuKSk7XG4gICAgICAgIGNvbnN0IGluZGV4SW5MYXlvdXQgPSBsYXN0TGF5b3V0Q2hpbGRyZW4udG9BcnJheSgpLmluZGV4T2YobmV4dEVsZW1lbnRDb2x1bW4pO1xuXG4gICAgICAgIGNvbnN0IHJvd0xpc3QgPSBpc1N1bW1hcnkgPyB0aGlzLmdyaWQuc3VtbWFyaWVzUm93TGlzdCA6IHRoaXMuZ3JpZC5kYXRhUm93TGlzdDtcbiAgICAgICAgbGV0IHJvd0VsZW1lbnQgPSByb3dMaXN0LmZpbmQoKHJvdykgPT4gcm93LmluZGV4ID09PSByb3dJbmRleCk7XG4gICAgICAgIGlmICghcm93RWxlbWVudCkgeyByZXR1cm47IH1cbiAgICAgICAgcm93RWxlbWVudCA9IHJvd0VsZW1lbnQubmF0aXZlRWxlbWVudDtcblxuICAgICAgICBpZiAoIXRoaXMuaXNDb2x1bW5SaWdodEVkZ2VWaXNpYmxlKG5leHRFbGVtZW50Q29sdW1uLnZpc2libGVJbmRleCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5uYXRpdmVFbGVtZW50LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGNvbnN0IGNiID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbEJsb2NrcyA9IHJvd0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmdldENvbHVtbkxheW91dFNlbGVjdG9yKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBhbGxCbG9ja3NbYWxsQmxvY2tzLmxlbmd0aCAtIDFdLmNoaWxkcmVuW2luZGV4SW5MYXlvdXRdO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZvY3VzQ2VsbChjZWxsKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1Ib3Jpem9udGFsU2Nyb2xsVG9DZWxsKHJvd0luZGV4LCBuZXh0RWxlbWVudENvbHVtbi52aXNpYmxlSW5kZXgsIGZhbHNlLCBjYik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhbGxCbG9ja3MgPSByb3dFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5nZXRDb2x1bW5MYXlvdXRTZWxlY3RvcigpKTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSAgYWxsQmxvY2tzW2FsbEJsb2Nrcy5sZW5ndGggLSAxXS5jaGlsZHJlbltpbmRleEluTGF5b3V0XTtcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzQ2VsbChjZWxsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbktleWRvd25Ib21lKHJvd0luZGV4OiBudW1iZXIsIGlzU3VtbWFyeTogYm9vbGVhbiA9IGZhbHNlLCBjZWxsUm93U3RhcnQ6IG51bWJlciA9IDEpIHtcbiAgICAgICAgY29uc3QgZmlyc3RMYXlvdXQgPSB0aGlzLmdyaWQuY29sdW1ucy5maWx0ZXIoYyA9PiBjLmNvbHVtbkxheW91dCAmJiAhYy5oaWRkZW4pWzBdO1xuICAgICAgICBjb25zdCBsYXN0TGF5b3V0Q2hpbGRyZW4gPSBmaXJzdExheW91dC5jaGlsZHJlbi50b0FycmF5KCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRSb3dTdGFydCA9IHRoaXMuYXBwbHlOYXZpZ2F0aW9uQ2VsbChcbiAgICAgICAgICAgIHRoaXMuc3RhcnROYXZpZ2F0aW9uQ2VsbCA/IHRoaXMuc3RhcnROYXZpZ2F0aW9uQ2VsbC5jb2xTdGFydCA6IDEsXG4gICAgICAgICAgICBjZWxsUm93U3RhcnQsXG4gICAgICAgICAgICBOYXZpZ2F0aW9uRGlyZWN0aW9uLmhvcml6b250YWwpO1xuICAgICAgICBjb25zdCBuZXh0RWxlbWVudENvbHVtbiA9IGZpcnN0TGF5b3V0LmNoaWxkcmVuLmZpbmQoYyA9PlxuICAgICAgICAgICAgYy5jb2xTdGFydCA9PT0gMSAmJlxuICAgICAgICAgICAgYy5yb3dTdGFydCA8PSBjdXJyZW50Um93U3RhcnQgJiZcbiAgICAgICAgICAgIChjdXJyZW50Um93U3RhcnQgPCBjLnJvd0VuZCB8fCBjdXJyZW50Um93U3RhcnQgPCBjLnJvd1N0YXJ0ICsgYy5ncmlkUm93U3BhbikpO1xuICAgICAgICBjb25zdCBpbmRleEluTGF5b3V0ID0gbGFzdExheW91dENoaWxkcmVuLmluZGV4T2YobmV4dEVsZW1lbnRDb2x1bW4pO1xuXG4gICAgICAgIGNvbnN0IHJvd0xpc3QgPSBpc1N1bW1hcnkgPyB0aGlzLmdyaWQuc3VtbWFyaWVzUm93TGlzdCA6IHRoaXMuZ3JpZC5kYXRhUm93TGlzdDtcbiAgICAgICAgbGV0IHJvd0VsZW1lbnQgPSByb3dMaXN0LmZpbmQoKHJvdykgPT4gcm93LmluZGV4ID09PSByb3dJbmRleCk7XG4gICAgICAgIGlmICghcm93RWxlbWVudCkgeyByZXR1cm47IH1cbiAgICAgICAgcm93RWxlbWVudCA9IHJvd0VsZW1lbnQubmF0aXZlRWxlbWVudDtcblxuICAgICAgICBpZiAoIXRoaXMuaXNDb2x1bW5MZWZ0RWRnZVZpc2libGUobmV4dEVsZW1lbnRDb2x1bW4udmlzaWJsZUluZGV4KSkge1xuICAgICAgICAgICAgdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICBjb25zdCBjYiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxCbG9ja3MgPSByb3dFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5nZXRDb2x1bW5MYXlvdXRTZWxlY3RvcigpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gYWxsQmxvY2tzWzBdLmNoaWxkcmVuW2luZGV4SW5MYXlvdXRdO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZvY3VzQ2VsbChjZWxsKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1Ib3Jpem9udGFsU2Nyb2xsVG9DZWxsKHJvd0luZGV4LCBuZXh0RWxlbWVudENvbHVtbi52aXNpYmxlSW5kZXgsIGZhbHNlLCBjYik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhbGxCbG9ja3MgPSByb3dFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5nZXRDb2x1bW5MYXlvdXRTZWxlY3RvcigpKTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSAgYWxsQmxvY2tzWzBdLmNoaWxkcmVuW2luZGV4SW5MYXlvdXRdO1xuICAgICAgICAgICAgdGhpcy5fZm9jdXNDZWxsKGNlbGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldENvbHVtbkxheW91dFNlbGVjdG9yKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnLmlneC1ncmlkX19tcmwtYmxvY2snO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRDaGlsZENvbHVtblNjcm9sbFBvc2l0aW9ucyh2aXNpYmxlQ29sSW5kZXg6IG51bWJlcik6IHsgbGVmdFNjcm9sbDogbnVtYmVyLCByaWdodFNjcm9sbDogbnVtYmVyIH0ge1xuICAgICAgICBjb25zdCBmb3JPZkRpciA9IHRoaXMuZ3JpZC5kYXRhUm93TGlzdC5sZW5ndGggPiAwID8gdGhpcy5ncmlkLmRhdGFSb3dMaXN0LmZpcnN0LnZpcnREaXJSb3cgOiB0aGlzLmdyaWQuaGVhZGVyQ29udGFpbmVyO1xuICAgICAgICBjb25zdCB0YXJnZXRDb2w6IElneENvbHVtbkNvbXBvbmVudCA9IHRoaXMuZ2V0Q29sdW5tQnlWaXNpYmxlSW5kZXgodmlzaWJsZUNvbEluZGV4KTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0Q29sLnBhcmVudDtcbiAgICAgICAgY29uc3QgcGFyZW50VkluZGV4ID0gZm9yT2ZEaXIuaWd4Rm9yT2YuaW5kZXhPZihwYXJlbnQpO1xuICAgICAgICBsZXQgbGVmdFNjcm9sbCA9IGZvck9mRGlyLmdldENvbHVtblNjcm9sbExlZnQocGFyZW50VkluZGV4KSwgcmlnaHRTY3JvbGwgPSAwO1xuICAgICAgICAvLyBjYWN1bGF0ZSBvZmZzZXQgZnJvbSBwYXJlbnQgYmFzZWQgb24gdGFyZ2V0IGNvbHVtbiBjb2xTdGFydCBhbmQgY29sRW5kIGFuZCB0aGUgcmVzb2x2ZWQgY2hpbGQgY29sdW1uIHNpemVzLlxuICAgICAgICBjb25zdCBjaGlsZFNpemVzID0gcGFyZW50LmdldEZpbGxlZENoaWxkQ29sdW1uU2l6ZXMocGFyZW50LmNoaWxkcmVuKTtcbiAgICAgICAgY29uc3QgY29sU3RhcnQgPSB0YXJnZXRDb2wuY29sU3RhcnQgfHwgMTtcbiAgICAgICAgY29uc3QgY29sRW5kID0gdGFyZ2V0Q29sLmNvbEVuZCB8fCBjb2xTdGFydCArIDE7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgY29sU3RhcnQ7IGkrKykge1xuICAgICAgICAgICAgbGVmdFNjcm9sbCArPSBwYXJzZUludChjaGlsZFNpemVzW2kgLSAxXSwgMTApO1xuICAgICAgICB9XG4gICAgICAgIHJpZ2h0U2Nyb2xsICs9IGxlZnRTY3JvbGw7XG4gICAgICAgIGZvciAobGV0IGogPSBjb2xTdGFydDsgaiA8IGNvbEVuZDsgaisrKSB7XG4gICAgICAgICAgICByaWdodFNjcm9sbCArPSAgcGFyc2VJbnQoY2hpbGRTaXplc1tqIC0gMV0sIDEwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge2xlZnRTY3JvbGwsIHJpZ2h0U2Nyb2xsfTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0Q29sdW5tQnlWaXNpYmxlSW5kZXgodmlzaWJsZUNvbEluZGV4OiBudW1iZXIpOiBJZ3hDb2x1bW5Db21wb25lbnQge1xuICAgICAgICB2aXNpYmxlQ29sSW5kZXggPSB2aXNpYmxlQ29sSW5kZXggPCAwID8gMCA6IHZpc2libGVDb2xJbmRleDtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5jb2x1bW5MaXN0LmZpbmQoKGNvbCkgPT4gIWNvbC5jb2x1bW5MYXlvdXQgJiYgY29sLnZpc2libGVJbmRleCA9PT0gdmlzaWJsZUNvbEluZGV4KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvdWxkUGVyZm9ybVZlcnRpY2FsU2Nyb2xsKHJvd0luZGV4OiBudW1iZXIsIHZpc2libGVDb2x1bW5JbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLl9pc0dyb3VwUmVjb3JkQXQocm93SW5kZXgpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VwZXIuc2hvdWxkUGVyZm9ybVZlcnRpY2FsU2Nyb2xsKHJvd0luZGV4LCB2aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgIH1cbiAgICAgICAgaWYgKCFzdXBlci5zaG91bGRQZXJmb3JtVmVydGljYWxTY3JvbGwocm93SW5kZXgsIHZpc2libGVDb2x1bW5JbmRleCkpIHtyZXR1cm4gZmFsc2U7IH1cbiAgICAgICBjb25zdCB0YXJnZXRSb3cgPSB0aGlzLmdyaWQuc3VtbWFyaWVzUm93TGlzdC5maWx0ZXIocyA9PiBzLmluZGV4ICE9PSAwKVxuICAgICAgICAgICAuY29uY2F0KHRoaXMuZ3JpZC5yb3dMaXN0LnRvQXJyYXkoKSkuZmluZChyID0+IHIuaW5kZXggPT09IHJvd0luZGV4KTtcbiAgICAgICBjb25zdCBzY3JvbGxUb3AgPSAgTWF0aC5hYnModGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmdldFZlcnRpY2FsU2Nyb2xsKCkuc2Nyb2xsVG9wKTtcbiAgICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSB0aGlzLmdyaWQuY2FsY0hlaWdodCA/IE1hdGguY2VpbCh0aGlzLmdyaWQuY2FsY0hlaWdodCkgOiAwO1xuICAgICAgIGNvbnN0IHNjcm9sbFBvcyA9IHRoaXMuZ2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbnMocm93SW5kZXgsIHZpc2libGVDb2x1bW5JbmRleCk7XG4gICAgICAgaWYgKCF0YXJnZXRSb3cgfHwgdGFyZ2V0Um93Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wICsgc2Nyb2xsUG9zLnRvcE9mZnNldCA8IE1hdGguYWJzKHRoaXMudmVydGljYWxEQ1RvcE9mZnNldClcbiAgICAgICAgICAgfHwgY29udGFpbmVySGVpZ2h0ICYmIGNvbnRhaW5lckhlaWdodCA8IHNjcm9sbFBvcy5yb3dCb3R0b20gLSBzY3JvbGxUb3ApIHtcbiAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgIH1cbiAgIH1cblxuICAgZ2V0IHZlcnRpY2FsRENUb3BPZmZzZXQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5kYy5pbnN0YW5jZS5fdmlld0NvbnRhaW5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wLCAxMCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaXNHcm91cFJlY29yZEF0KHJvd0luZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgcmVjb3JkID0gdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mW3Jvd0luZGV4XTtcbiAgICAgICAgcmV0dXJuIHJlY29yZC5yZWNvcmRzICYmIHJlY29yZC5yZWNvcmRzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGVyZm9ybVZlcnRpY2FsU2Nyb2xsVG9DZWxsKHJvd0luZGV4OiBudW1iZXIsIHZpc2libGVDb2x1bW5JbmRleDogbnVtYmVyLCBjYj86ICgpID0+IHZvaWQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzR3JvdXBSZWNvcmRBdChyb3dJbmRleCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5wZXJmb3JtVmVydGljYWxTY3JvbGxUb0NlbGwocm93SW5kZXgsIHZpc2libGVDb2x1bW5JbmRleCwgY2IpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IHRoaXMuZ3JpZC5jYWxjSGVpZ2h0ID8gTWF0aC5jZWlsKHRoaXMuZ3JpZC5jYWxjSGVpZ2h0KSA6IDA7XG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IE1hdGguYWJzKHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpLnNjcm9sbFRvcCk7XG4gICAgICAgIGNvbnN0IHNjcm9sbFBvcyA9IHRoaXMuZ2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbnMocm93SW5kZXgsIHZpc2libGVDb2x1bW5JbmRleCk7XG4gICAgICAgIGNvbnN0IHRhcmdldFJvdyA9IHRoaXMuZ3JpZC5zdW1tYXJpZXNSb3dMaXN0LmZpbHRlcihzID0+IHMuaW5kZXggIT09IDApXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuZ3JpZC5yb3dMaXN0LnRvQXJyYXkoKSkuZmluZChyID0+IHIuaW5kZXggPT09IHJvd0luZGV4KTtcbiAgICAgICAgY29uc3QgaXNQcmV2aW91cyA9ICAoc2Nyb2xsVG9wID4gc2Nyb2xsUG9zLnJvd1RvcCkgJiYgKCF0YXJnZXRSb3cgfHxcbiAgICAgICAgICAgICAgICB0YXJnZXRSb3cubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgKyBzY3JvbGxQb3MudG9wT2Zmc2V0IDwgTWF0aC5hYnModGhpcy52ZXJ0aWNhbERDVG9wT2Zmc2V0KSk7XG4gICAgICAgIGNvbnN0IHNjcm9sbEFtb3VudCA9IGlzUHJldmlvdXMgPyBzY3JvbGxQb3Mucm93VG9wIDogTWF0aC5hYnMoc2Nyb2xsVG9wICsgY29udGFpbmVySGVpZ2h0IC0gc2Nyb2xsUG9zLnJvd0JvdHRvbSk7XG5cbiAgICAgICAgdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLm9uQ2h1bmtMb2FkXG4gICAgICAgIC5waXBlKGZpcnN0KCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXNQcmV2aW91cykge1xuICAgICAgICAgICAgdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmdldFZlcnRpY2FsU2Nyb2xsKCkuc2Nyb2xsVG9wID0gc2Nyb2xsQW1vdW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmFkZFNjcm9sbFRvcChzY3JvbGxBbW91bnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb25zKHJvd0luZGV4OiBudW1iZXIsIHZpc2libGVDb2xJbmRleDogbnVtYmVyKTogeyByb3dUb3A6IG51bWJlciwgcm93Qm90dG9tOiBudW1iZXIsIHRvcE9mZnNldDogbnVtYmVyIH0ge1xuICAgICAgICBjb25zdCB0YXJnZXRDb2w6IElneENvbHVtbkNvbXBvbmVudCA9IHRoaXMuZ2V0Q29sdW5tQnlWaXNpYmxlSW5kZXgodmlzaWJsZUNvbEluZGV4KTtcbiAgICAgICAgY29uc3QgdG9wT2Zmc2V0ID0gKHRhcmdldENvbC5yb3dTdGFydCAtIDEpICAqIHRoaXMuZ3JpZC5kZWZhdWx0Um93SGVpZ2h0O1xuICAgICAgICBjb25zdCByb3dUb3AgPSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuc2l6ZXNDYWNoZVtyb3dJbmRleF0gKyB0b3BPZmZzZXQ7XG4gICAgICAgIGNvbnN0IHJvd0JvdHRvbSA9IHJvd1RvcCArICh0aGlzLmdyaWQuZGVmYXVsdFJvd0hlaWdodCAqIHRhcmdldENvbC5ncmlkUm93U3Bhbik7XG4gICAgICAgIHJldHVybiB7IHJvd1RvcCwgcm93Qm90dG9tLCB0b3BPZmZzZXQgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGVyZm9ybUhvcml6b250YWxTY3JvbGxUb0NlbGwoXG4gICAgICAgIHJvd0luZGV4OiBudW1iZXIsIHZpc2libGVDb2x1bW5JbmRleDogbnVtYmVyLCBpc1N1bW1hcnk6IGJvb2xlYW4gPSBmYWxzZSwgY2I/OiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbFBvcyA9IHRoaXMuZ2V0Q2hpbGRDb2x1bW5TY3JvbGxQb3NpdGlvbnModmlzaWJsZUNvbHVtbkluZGV4KTtcbiAgICAgICAgY29uc3QgaFNjcm9sbCA9IHRoaXMuaG9yaXpvbnRhbFNjcm9sbChyb3dJbmRleCk7XG4gICAgICAgIHRoaXMuZ3JpZC5wYXJlbnRWaXJ0RGlyLm9uQ2h1bmtMb2FkXG4gICAgICAgICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9jdXNDZWxsKHRoaXMuZ2V0Q2VsbEVsZW1lbnRCeVZpc2libGVJbmRleChyb3dJbmRleCwgdmlzaWJsZUNvbHVtbkluZGV4LCBpc1N1bW1hcnkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBpc1ByZXZJdGVtID0gIGhTY3JvbGwuZ2V0SG9yaXpvbnRhbFNjcm9sbCgpLnNjcm9sbExlZnQgPiBzY3JvbGxQb3MubGVmdFNjcm9sbDtcbiAgICAgICAgY29uc3QgY29udGFpbmVyU2l6ZSA9IHBhcnNlSW50KGhTY3JvbGwuaWd4Rm9yQ29udGFpbmVyU2l6ZSwgMTApO1xuICAgICAgICBjb25zdCBuZXh0U2Nyb2xsID0gaXNQcmV2SXRlbSA/IHNjcm9sbFBvcy5sZWZ0U2Nyb2xsIDogc2Nyb2xsUG9zLnJpZ2h0U2Nyb2xsIC0gY29udGFpbmVyU2l6ZTtcbiAgICAgICAgaFNjcm9sbC5nZXRIb3Jpem9udGFsU2Nyb2xsKCkuc2Nyb2xsTGVmdCA9IG5leHRTY3JvbGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9mb2N1c0NlbGwoY2VsbEVsZW06IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIC8vIGluIGNhc2Ugb2YgdmFyaWFibGUgcm93IGhlaWdodHMgaW4gbXJsIGdyaWQgbWFrZSBzdXJlIGNlbGwgaXMgcmVhbGx5IGluIHZpZXcgYWZ0ZXIgaXQgaGFzIGJlZW4gcmVuZGVyZWQuXG4gICAgICAgIGNvbnN0IGdyaWRCb3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmdyaWQudGJvZHkubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgZGlmZlRvcCA9IGNlbGxFbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGdyaWRCb3VuZGluZ0NsaWVudFJlY3QudG9wO1xuICAgICAgICBjb25zdCBkaWZmQm90dG9tID0gY2VsbEVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIC0gZ3JpZEJvdW5kaW5nQ2xpZW50UmVjdC5ib3R0b207XG5cbiAgICAgICAgaWYgKGRpZmZUb3AgPCAwKSB7XG4gICAgICAgICAgICAvLyBjZWxsIGlzIGFib3ZlIGdyaWQgdG9wIC0gbm90IHZpc2libGVcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5uYXRpdmVFbGVtZW50LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5vbkNodW5rTG9hZFxuICAgICAgICAgICAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxFbGVtLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmFkZFNjcm9sbFRvcChkaWZmVG9wKTtcbiAgICAgICAgfSBlbHNlIGlmIChkaWZmQm90dG9tID4gMCkge1xuICAgICAgICAgICAgLy8gY2VsbCBpcyBiZWxvdyBncmlkIGJvdHRvbSAtIG5vdCB2aXNpYmxlXG4gICAgICAgICAgICB0aGlzLmdyaWQubmF0aXZlRWxlbWVudC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgICAgICB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIub25DaHVua0xvYWRcbiAgICAgICAgICAgICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjZWxsRWxlbS5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5hZGRTY3JvbGxUb3AoZGlmZkJvdHRvbSk7XG4gICAgICAgIH0gIGVsc2Uge1xuICAgICAgICAgICAgLy8gY2VsbCBpcyB2aXNpYmxlXG4gICAgICAgICAgICBjZWxsRWxlbS5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ29Ub0ZpcnN0Q2VsbCgpIHtcbiAgICAgICAgdGhpcy5zdGFydE5hdmlnYXRpb25DZWxsID0gbnVsbDtcbiAgICAgICAgc3VwZXIuZ29Ub0ZpcnN0Q2VsbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnb1RvTGFzdENlbGwoKSB7XG4gICAgICAgIHRoaXMuc3RhcnROYXZpZ2F0aW9uQ2VsbCA9IG51bGw7XG4gICAgICAgIHN1cGVyLmdvVG9MYXN0Q2VsbCgpO1xuICAgIH1cbn1cbiJdfQ==