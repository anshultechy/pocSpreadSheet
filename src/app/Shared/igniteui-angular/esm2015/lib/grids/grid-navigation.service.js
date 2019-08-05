/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FilterMode } from './grid-base.component';
import { first } from 'rxjs/operators';
import { IgxGridGroupByRowComponent } from './grid/groupby-row.component';
/** @enum {string} */
const MoveDirection = {
    LEFT: 'left',
    RIGHT: 'right',
};
/**
 * @hidden
 */
export class IgxGridNavigationService {
    /**
     * @return {?}
     */
    get displayContainerWidth() {
        return Math.round(this.grid.parentVirtDir.dc.instance._viewContainer.element.nativeElement.offsetWidth);
    }
    /**
     * @return {?}
     */
    get displayContainerScrollLeft() {
        return Math.round(this.grid.parentVirtDir.getHorizontalScroll().scrollLeft);
    }
    /**
     * @return {?}
     */
    get verticalDisplayContainerElement() {
        return this.grid.verticalScrollContainer.dc.instance._viewContainer.element.nativeElement;
    }
    /**
     * @param {?} rowIndex
     * @return {?}
     */
    horizontalScroll(rowIndex) {
        /** @type {?} */
        let rowComp = this.grid.dataRowList.find((row) => row.index === rowIndex) || this.grid.dataRowList.first;
        if (!rowComp) {
            rowComp = this.grid.summariesRowList.find((row) => row.index === rowIndex);
        }
        return rowComp.virtDirRow;
    }
    /**
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    getColumnUnpinnedIndex(visibleColumnIndex) {
        /** @type {?} */
        const column = this.grid.unpinnedColumns.find((col) => !col.columnGroup && col.visibleIndex === visibleColumnIndex);
        return this.grid.pinnedColumns.length ? this.grid.unpinnedColumns.filter((c) => !c.columnGroup).indexOf(column) :
            visibleColumnIndex;
    }
    /**
     * @param {?} columnIndex
     * @return {?}
     */
    isColumnFullyVisible(columnIndex) {
        return this.isColumnRightEdgeVisible(columnIndex) && this.isColumnLeftEdgeVisible(columnIndex);
    }
    /**
     * @param {?} columnIndex
     * @return {?}
     */
    isColumnRightEdgeVisible(columnIndex) {
        /** @type {?} */
        const forOfDir = this.forOfDir();
        if (this.isColumnPinned(columnIndex, forOfDir)) {
            return true;
        }
        /** @type {?} */
        const index = this.getColumnUnpinnedIndex(columnIndex);
        return this.displayContainerWidth >= forOfDir.getColumnScrollLeft(index + 1) - this.displayContainerScrollLeft;
    }
    /**
     * @param {?} columnIndex
     * @return {?}
     */
    isColumnLeftEdgeVisible(columnIndex) {
        /** @type {?} */
        const forOfDir = this.forOfDir();
        if (this.isColumnPinned(columnIndex, forOfDir)) {
            return true;
        }
        /** @type {?} */
        const index = this.getColumnUnpinnedIndex(columnIndex);
        return this.displayContainerScrollLeft <= forOfDir.getColumnScrollLeft(index);
    }
    /**
     * @private
     * @return {?}
     */
    forOfDir() {
        /** @type {?} */
        let forOfDir;
        if (this.grid.dataRowList.length > 0) {
            forOfDir = this.grid.dataRowList.first.virtDirRow;
        }
        else {
            forOfDir = this.grid.headerContainer;
        }
        return forOfDir;
    }
    /**
     * @private
     * @param {?} columnIndex
     * @param {?} forOfDir
     * @return {?}
     */
    isColumnPinned(columnIndex, forOfDir) {
        /** @type {?} */
        const horizontalScroll = forOfDir.getHorizontalScroll();
        /** @type {?} */
        const column = this.grid.columnList.filter(c => !c.columnGroup).find((col) => col.visibleIndex === columnIndex);
        return (!horizontalScroll.clientWidth || column.pinned);
    }
    /**
     * @return {?}
     */
    get gridOrderedColumns() {
        return [...this.grid.pinnedColumns, ...this.grid.unpinnedColumns].filter(c => !c.columnGroup);
    }
    /**
     * @param {?} rowIndex
     * @return {?}
     */
    isRowInEditMode(rowIndex) {
        return this.grid.rowEditable && (this.grid.rowInEditMode && this.grid.rowInEditMode.index === rowIndex);
    }
    /**
     * @param {?} direction
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    findNextEditable(direction, visibleColumnIndex) {
        // go trough all columns in one cycle instead of
        // splice().reverse().find()
        /** @type {?} */
        const gridColumns = this.gridOrderedColumns;
        /** @type {?} */
        const start = visibleColumnIndex;
        /** @type {?} */
        let end = 0;
        /** @type {?} */
        let step = 0;
        /** @type {?} */
        let result = -1;
        if (direction === MoveDirection.LEFT) {
            end = 0;
            step = -1;
        }
        else if (direction === MoveDirection.RIGHT) {
            end = gridColumns.length - 1;
            step = 1;
        }
        for (let c = start; (c * step) <= end; c += step) {
            /** @type {?} */
            const column = gridColumns[c];
            if (column.editable) {
                result = c;
                break;
            }
        }
        return result;
    }
    /**
     * @param {?} rowIndex
     * @param {?} visibleColumnIndex
     * @param {?=} isSummary
     * @return {?}
     */
    getCellElementByVisibleIndex(rowIndex, visibleColumnIndex, isSummary = false) {
        /** @type {?} */
        const cellSelector = this.getCellSelector(visibleColumnIndex, isSummary);
        return this.grid.nativeElement.querySelector(`${cellSelector}[data-rowindex="${rowIndex}"][data-visibleIndex="${visibleColumnIndex}"]`);
    }
    /**
     * @param {?} element
     * @param {?} selectedNode
     * @return {?}
     */
    onKeydownArrowRight(element, selectedNode) {
        /** @type {?} */
        const rowIndex = selectedNode.row;
        /** @type {?} */
        const visibleColumnIndex = selectedNode.column;
        /** @type {?} */
        const isSummary = selectedNode.isSummaryRow;
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
                        .subscribe(() => {
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
    }
    /**
     * @param {?} element
     * @param {?} selectedNode
     * @return {?}
     */
    onKeydownArrowLeft(element, selectedNode) {
        /** @type {?} */
        const rowIndex = selectedNode.row;
        /** @type {?} */
        const visibleColumnIndex = selectedNode.column;
        /** @type {?} */
        const isSummary = selectedNode.isSummaryRow;
        if (visibleColumnIndex === 0) {
            return;
        }
        /** @type {?} */
        const index = this.getColumnUnpinnedIndex(visibleColumnIndex - 1);
        if (!element.previousElementSibling && this.grid.pinnedColumns.length && index === -1) {
            element.parentNode.previousElementSibling.focus({ preventScroll: true });
        }
        else if (!this.isColumnLeftEdgeVisible(visibleColumnIndex - 1)) {
            this.performHorizontalScrollToCell(rowIndex, visibleColumnIndex - 1, isSummary);
        }
        else {
            element.previousElementSibling.focus({ preventScroll: true });
        }
    }
    /**
     * @param {?} rowIndex
     * @param {?} currentColumnVisibleIndex
     * @return {?}
     */
    movePreviousEditable(rowIndex, currentColumnVisibleIndex) {
        /** @type {?} */
        const prevEditableColumnIndex = this.findNextEditable(MoveDirection.LEFT, currentColumnVisibleIndex - 1);
        if (prevEditableColumnIndex === -1 && this.grid.rowEditTabs.length) {
            //  TODO: make gridAPI visible for internal use and remove cast to any
            ((/** @type {?} */ (this.grid))).gridAPI.submit_value();
            this.grid.rowEditTabs.last.element.nativeElement.focus();
            return;
        }
        this.focusEditableTarget(rowIndex, prevEditableColumnIndex);
    }
    /**
     * @param {?} rowIndex
     * @param {?} currentColumnVisibleIndex
     * @return {?}
     */
    moveNextEditable(rowIndex, currentColumnVisibleIndex) {
        /** @type {?} */
        const nextEditableColumnIndex = this.findNextEditable(MoveDirection.RIGHT, currentColumnVisibleIndex + 1);
        if (nextEditableColumnIndex === -1 && this.grid.rowEditTabs.length) {
            //  TODO: make gridAPI visible for internal use and remove cast to any
            ((/** @type {?} */ (this.grid))).gridAPI.submit_value();
            this.grid.rowEditTabs.first.element.nativeElement.focus();
            return;
        }
        this.focusEditableTarget(rowIndex, nextEditableColumnIndex);
    }
    /**
     * @param {?} rowIndex
     * @param {?} columnIndex
     * @return {?}
     */
    focusEditableTarget(rowIndex, columnIndex) {
        if (this.isColumnFullyVisible(columnIndex)) {
            this.getCellElementByVisibleIndex(rowIndex, columnIndex).focus();
        }
        else {
            this.performHorizontalScrollToCell(rowIndex, columnIndex);
        }
    }
    /**
     * @param {?} rowIndex
     * @param {?=} isSummary
     * @return {?}
     */
    onKeydownHome(rowIndex, isSummary = false) {
        /** @type {?} */
        const rowList = isSummary ? this.grid.summariesRowList : this.grid.dataRowList;
        /** @type {?} */
        let rowElement = rowList.find((row) => row.index === rowIndex);
        /** @type {?} */
        const cellSelector = this.getCellSelector(0, isSummary);
        if (!rowElement) {
            return;
        }
        rowElement = rowElement.nativeElement;
        /** @type {?} */
        let firstCell = rowElement.querySelector(cellSelector);
        if (this.grid.pinnedColumns.length || this.displayContainerScrollLeft === 0) {
            firstCell.focus({ preventScroll: true });
        }
        else {
            this.getFocusableGrid().nativeElement.focus({ preventScroll: true });
            this.grid.parentVirtDir.onChunkLoad
                .pipe(first())
                .subscribe(() => {
                firstCell = rowElement.querySelector(cellSelector);
                firstCell.focus({ preventScroll: true });
            });
            this.horizontalScroll(rowIndex).scrollTo(0);
        }
    }
    /**
     * @param {?} rowIndex
     * @param {?=} isSummary
     * @return {?}
     */
    onKeydownEnd(rowIndex, isSummary = false) {
        /** @type {?} */
        const index = this.grid.unpinnedColumns[this.grid.unpinnedColumns.length - 1].visibleIndex;
        /** @type {?} */
        const rowList = isSummary ? this.grid.summariesRowList : this.grid.dataRowList;
        /** @type {?} */
        let rowElement = rowList.find((row) => row.index === rowIndex);
        if (!rowElement) {
            return;
        }
        rowElement = rowElement.nativeElement;
        if (this.isColumnRightEdgeVisible(index)) {
            /** @type {?} */
            const allCells = rowElement.querySelectorAll(this.getCellSelector(-1, isSummary));
            allCells[allCells.length - 1].focus({ preventScroll: true });
        }
        else {
            this.getFocusableGrid().nativeElement.focus({ preventScroll: true });
            this.grid.parentVirtDir.onChunkLoad
                .pipe(first())
                .subscribe(() => {
                /** @type {?} */
                const allCells = rowElement.querySelectorAll(this.getCellSelector(-1, isSummary));
                allCells[allCells.length - 1].focus({ preventScroll: true });
            });
            this.horizontalScroll(rowIndex).scrollTo(this.getColumnUnpinnedIndex(index));
        }
    }
    /**
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    navigateTop(visibleColumnIndex) {
        /** @type {?} */
        const verticalScroll = this.grid.verticalScrollContainer.getVerticalScroll();
        /** @type {?} */
        const cellSelector = this.getCellSelector(visibleColumnIndex);
        if (verticalScroll.scrollTop === 0) {
            /** @type {?} */
            const cells = this.grid.nativeElement.querySelectorAll(`${cellSelector}[data-visibleIndex="${visibleColumnIndex}"]`);
            cells[0].focus();
        }
        else {
            this.getFocusableGrid().nativeElement.focus({ preventScroll: true });
            this.grid.verticalScrollContainer.scrollTo(0);
            this.grid.verticalScrollContainer.onChunkLoad
                .pipe(first()).subscribe(() => {
                /** @type {?} */
                const cells = this.grid.nativeElement.querySelectorAll(`${cellSelector}[data-visibleIndex="${visibleColumnIndex}"]`);
                if (cells.length > 0) {
                    cells[0].focus();
                }
            });
        }
    }
    /**
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    navigateBottom(visibleColumnIndex) {
        /** @type {?} */
        const verticalScroll = this.grid.verticalScrollContainer.getVerticalScroll();
        /** @type {?} */
        const cellSelector = this.getCellSelector(visibleColumnIndex);
        if (verticalScroll.scrollHeight === 0 ||
            verticalScroll.scrollTop === verticalScroll.scrollHeight - this.grid.verticalScrollContainer.igxForContainerSize) {
            /** @type {?} */
            const cells = this.grid.nativeElement.querySelectorAll(`${cellSelector}[data-visibleIndex="${visibleColumnIndex}"]`);
            cells[cells.length - 1].focus();
        }
        else {
            this.getFocusableGrid().nativeElement.focus({ preventScroll: true });
            this.grid.verticalScrollContainer.scrollTo(this.grid.verticalScrollContainer.igxForOf.length - 1);
            this.grid.verticalScrollContainer.onChunkLoad
                .pipe(first()).subscribe(() => {
                /** @type {?} */
                const cells = this.grid.nativeElement.querySelectorAll(`${cellSelector}[data-visibleIndex="${visibleColumnIndex}"]`);
                if (cells.length > 0) {
                    cells[cells.length - 1].focus();
                }
            });
        }
    }
    /**
     * @param {?} rowElement
     * @param {?} selectedNode
     * @return {?}
     */
    navigateUp(rowElement, selectedNode) {
        /** @type {?} */
        const currentRowIndex = selectedNode.row;
        /** @type {?} */
        const visibleColumnIndex = selectedNode.column;
        if (currentRowIndex === 0) {
            return;
        }
        /** @type {?} */
        const containerTopOffset = parseInt(this.verticalDisplayContainerElement.style.top, 10);
        if (!rowElement.previousElementSibling ||
            rowElement.previousElementSibling.offsetTop < Math.abs(containerTopOffset)) {
            this.getFocusableGrid().nativeElement.focus({ preventScroll: true });
            this.grid.verticalScrollContainer.scrollTo(currentRowIndex - 1);
            this.grid.verticalScrollContainer.onChunkLoad
                .pipe(first())
                .subscribe(() => {
                /** @type {?} */
                const tag = rowElement.tagName.toLowerCase();
                /** @type {?} */
                const rowSelector = this.getRowSelector();
                if (tag === rowSelector || tag === 'igx-grid-summary-row') {
                    rowElement = this.getRowByIndex(currentRowIndex, tag);
                }
                else {
                    rowElement = this.grid.nativeElement.querySelector(`igx-grid-groupby-row[data-rowindex="${currentRowIndex}"]`);
                }
                this.focusPreviousElement(rowElement, visibleColumnIndex);
            });
        }
        else {
            this.focusPreviousElement(rowElement, visibleColumnIndex);
        }
    }
    /**
     * @protected
     * @param {?} currentRowEl
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    focusPreviousElement(currentRowEl, visibleColumnIndex) {
        this.focusElem(currentRowEl.previousElementSibling, visibleColumnIndex);
    }
    /**
     * @param {?} rowElement
     * @param {?} selectedNode
     * @return {?}
     */
    navigateDown(rowElement, selectedNode) {
        /** @type {?} */
        const currentRowIndex = selectedNode.row;
        /** @type {?} */
        const visibleColumnIndex = selectedNode.column;
        if (currentRowIndex === this.grid.verticalScrollContainer.igxForOf.length - 1 ||
            (currentRowIndex === 0 && rowElement.tagName.toLowerCase() === 'igx-grid-summary-row')) {
            // check if this is rootSummary row
            return;
        }
        /** @type {?} */
        const rowHeight = this.grid.verticalScrollContainer.getSizeAt(currentRowIndex + 1);
        /** @type {?} */
        const containerHeight = this.grid.calcHeight ? Math.ceil(this.grid.calcHeight) : 0;
        /** @type {?} */
        const targetEndTopOffset = rowElement.nextElementSibling ?
            rowElement.nextElementSibling.offsetTop + rowHeight + parseInt(this.verticalDisplayContainerElement.style.top, 10) :
            containerHeight + rowHeight;
        this.getFocusableGrid().nativeElement.focus({ preventScroll: true });
        if (containerHeight && containerHeight < targetEndTopOffset) {
            /** @type {?} */
            const nextIndex = currentRowIndex + 1;
            this.grid.verticalScrollContainer.scrollTo(nextIndex);
            this.grid.verticalScrollContainer.onChunkLoad
                .pipe(first())
                .subscribe(() => {
                rowElement = this.getNextRowByIndex(nextIndex);
                this.focusElem(rowElement, visibleColumnIndex);
            });
        }
        else {
            this.focusNextElement(rowElement, visibleColumnIndex);
        }
    }
    /**
     * @protected
     * @param {?} rowElement
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    focusElem(rowElement, visibleColumnIndex) {
        if (rowElement.tagName.toLowerCase() === 'igx-grid-groupby-row') {
            rowElement.focus();
        }
        else {
            /** @type {?} */
            const isSummaryRow = rowElement.tagName.toLowerCase() === 'igx-grid-summary-row';
            if (this.isColumnFullyVisible(visibleColumnIndex)) {
                /** @type {?} */
                const cellSelector = this.getCellSelector(visibleColumnIndex, isSummaryRow);
                /** @type {?} */
                const cell = rowElement.querySelector(`${cellSelector}[data-visibleIndex="${visibleColumnIndex}"]`);
                cell.focus();
                return cell;
            }
            this.performHorizontalScrollToCell(parseInt(rowElement.getAttribute('data-rowindex'), 10), visibleColumnIndex, isSummaryRow);
        }
    }
    /**
     * @protected
     * @param {?} rowElement
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    focusNextElement(rowElement, visibleColumnIndex) {
        return this.focusElem(rowElement.nextElementSibling, visibleColumnIndex);
    }
    /**
     * @return {?}
     */
    goToFirstCell() {
        /** @type {?} */
        const verticalScroll = this.grid.verticalScrollContainer.getVerticalScroll();
        /** @type {?} */
        const horizontalScroll = this.grid.dataRowList.first.virtDirRow.getHorizontalScroll();
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
                    .subscribe(() => {
                    this.navigateTop(0);
                });
            }
        }
    }
    /**
     * @return {?}
     */
    goToLastCell() {
        /** @type {?} */
        const verticalScroll = this.grid.verticalScrollContainer.getVerticalScroll();
        if (verticalScroll.scrollHeight === 0 ||
            verticalScroll.scrollTop === verticalScroll.scrollHeight - this.grid.verticalScrollContainer.igxForContainerSize) {
            /** @type {?} */
            const rows = this.getAllRows();
            /** @type {?} */
            const rowIndex = parseInt(rows[rows.length - 1].getAttribute('data-rowIndex'), 10);
            this.onKeydownEnd(rowIndex);
        }
        else {
            this.getFocusableGrid().nativeElement.focus({ preventScroll: true });
            this.grid.verticalScrollContainer.scrollTo(this.grid.verticalScrollContainer.igxForOf.length - 1);
            this.grid.verticalScrollContainer.onChunkLoad
                .pipe(first()).subscribe(() => {
                /** @type {?} */
                const rows = this.getAllRows();
                if (rows.length > 0) {
                    /** @type {?} */
                    const rowIndex = parseInt(rows[rows.length - 1].getAttribute('data-rowIndex'), 10);
                    this.onKeydownEnd(rowIndex);
                }
            });
        }
    }
    /**
     * @return {?}
     */
    goToLastBodyElement() {
        /** @type {?} */
        const verticalScroll = this.grid.verticalScrollContainer.getVerticalScroll();
        if (verticalScroll.scrollHeight === 0 ||
            verticalScroll.scrollTop === verticalScroll.scrollHeight - this.grid.verticalScrollContainer.igxForContainerSize) {
            /** @type {?} */
            const rowIndex = this.grid.verticalScrollContainer.igxForOf.length - 1;
            /** @type {?} */
            const row = this.grid.nativeElement.querySelector(`[data-rowindex="${rowIndex}"]`);
            if (row && row.tagName.toLowerCase() === 'igx-grid-groupby-row') {
                row.focus();
                return;
            }
            /** @type {?} */
            const isSummary = (row && row.tagName.toLowerCase() === 'igx-grid-summary-row') ? true : false;
            this.onKeydownEnd(rowIndex, isSummary);
        }
        else {
            this.grid.verticalScrollContainer.scrollTo(this.grid.verticalScrollContainer.igxForOf.length - 1);
            this.grid.verticalScrollContainer.onChunkLoad
                .pipe(first()).subscribe(() => {
                /** @type {?} */
                const rowIndex = this.grid.verticalScrollContainer.igxForOf.length - 1;
                /** @type {?} */
                const row = this.grid.nativeElement.querySelector(`[data-rowindex="${rowIndex}"]`);
                if (row && row.tagName.toLowerCase() === 'igx-grid-groupby-row') {
                    row.focus();
                    return;
                }
                /** @type {?} */
                const isSummary = (row && row.tagName.toLowerCase() === 'igx-grid-summary-row') ? true : false;
                this.onKeydownEnd(rowIndex, isSummary);
            });
        }
    }
    /**
     * @param {?} currentRowEl
     * @param {?} selectedNode
     * @return {?}
     */
    performTab(currentRowEl, selectedNode) {
        /** @type {?} */
        const rowIndex = selectedNode.row;
        /** @type {?} */
        const visibleColumnIndex = selectedNode.column;
        /** @type {?} */
        const isSummaryRow = selectedNode.isSummaryRow;
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
            const rowEl = this.grid.rowList.find(row => row.index === rowIndex + 1) ?
                this.grid.rowList.find(row => row.index === rowIndex + 1) :
                this.grid.summariesRowList.find(row => row.index === rowIndex + 1);
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
            const cell = this.getCellElementByVisibleIndex(rowIndex, visibleColumnIndex, isSummaryRow);
            if (cell) {
                this.onKeydownArrowRight(cell, selectedNode);
            }
        }
    }
    /**
     * @param {?=} toStart
     * @return {?}
     */
    moveFocusToFilterCell(toStart) {
        if (this.grid.filteringService.isFilterRowVisible) {
            this.grid.filteringService.focusFilterRowCloseButton();
            return;
        }
        /** @type {?} */
        const columns = this.grid.filteringService.unpinnedFilterableColumns;
        /** @type {?} */
        const targetIndex = toStart ? 0 : columns.length - 1;
        /** @type {?} */
        const visibleIndex = columns[targetIndex].visibleIndex;
        /** @type {?} */
        const isVisible = toStart ? this.isColumnLeftEdgeVisible(visibleIndex) : this.isColumnRightEdgeVisible(visibleIndex);
        if (isVisible) {
            this.grid.filteringService.focusFilterCellChip(columns[targetIndex], false);
        }
        else {
            this.grid.filteringService.scrollToFilterCell(columns[targetIndex], false);
        }
    }
    /**
     * @param {?} column
     * @param {?} eventArgs
     * @return {?}
     */
    navigatePrevFilterCell(column, eventArgs) {
        /** @type {?} */
        const cols = this.grid.filteringService.unpinnedFilterableColumns;
        /** @type {?} */
        const prevFilterableIndex = cols.indexOf(column) - 1;
        /** @type {?} */
        const visibleIndex = column.visibleIndex;
        if (visibleIndex === 0 || prevFilterableIndex < 0) {
            // prev is not filter cell
            /** @type {?} */
            const firstFiltarableCol = this.getFirstPinnedFilterableColumn();
            if (!firstFiltarableCol || column === firstFiltarableCol) {
                eventArgs.preventDefault();
            }
            return;
        }
        /** @type {?} */
        const prevColumn = cols[prevFilterableIndex];
        /** @type {?} */
        const prevVisibleIndex = prevColumn.visibleIndex;
        if (prevFilterableIndex >= 0 && visibleIndex > 0 && !this.isColumnLeftEdgeVisible(prevVisibleIndex) && !column.pinned) {
            eventArgs.preventDefault();
            this.grid.filteringService.scrollToFilterCell(prevColumn, false);
        }
    }
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    navigateFirstCellIfPossible(eventArgs) {
        if (this.grid.rowList.length > 0) {
            if (this.grid.rowList.filter(row => row instanceof IgxGridGroupByRowComponent).length > 0) {
                eventArgs.stopPropagation();
                return;
            }
            this.goToFirstCell();
        }
        else if (this.grid.rootSummariesEnabled) {
            this.onKeydownHome(0, true);
        }
        eventArgs.preventDefault();
    }
    /**
     * @param {?} column
     * @param {?} eventArgs
     * @return {?}
     */
    navigateNextFilterCell(column, eventArgs) {
        /** @type {?} */
        const cols = this.grid.filteringService.unpinnedFilterableColumns;
        /** @type {?} */
        const nextFilterableIndex = cols.indexOf(column) + 1;
        if (nextFilterableIndex >= this.grid.filteringService.unpinnedFilterableColumns.length) {
            // next is not filter cell
            this.navigateFirstCellIfPossible(eventArgs);
            return;
        }
        /** @type {?} */
        const nextColumn = cols[nextFilterableIndex];
        /** @type {?} */
        const nextVisibleIndex = nextColumn.visibleIndex;
        if (!column.pinned && !this.isColumnRightEdgeVisible(nextVisibleIndex)) {
            eventArgs.preventDefault();
            this.grid.filteringService.scrollToFilterCell(nextColumn, true);
        }
        else if (column === this.getLastPinnedFilterableColumn() && !this.isColumnRightEdgeVisible(nextVisibleIndex)) {
            this.grid.filteringService.scrollToFilterCell(nextColumn, false);
            eventArgs.stopPropagation();
        }
    }
    /**
     * @private
     * @return {?}
     */
    getLastPinnedFilterableColumn() {
        /** @type {?} */
        const pinnedFilterableColums = this.grid.pinnedColumns.filter(col => !(col.columnGroup) && col.filterable);
        return pinnedFilterableColums[pinnedFilterableColums.length - 1];
    }
    /**
     * @private
     * @return {?}
     */
    getFirstPinnedFilterableColumn() {
        return this.grid.pinnedColumns.filter(col => !(col.columnGroup) && col.filterable)[0];
    }
    /**
     * @param {?} currentRowEl
     * @param {?} selectedNode
     * @return {?}
     */
    performShiftTabKey(currentRowEl, selectedNode) {
        /** @type {?} */
        const rowIndex = selectedNode.row;
        /** @type {?} */
        const visibleColumnIndex = selectedNode.column;
        /** @type {?} */
        const isSummary = selectedNode.isSummaryRow;
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
            const cell = this.getCellElementByVisibleIndex(rowIndex, visibleColumnIndex, isSummary);
            if (cell) {
                this.onKeydownArrowLeft(cell, selectedNode);
            }
        }
    }
    /**
     * @param {?} targetRowIndex
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    shouldPerformVerticalScroll(targetRowIndex, visibleColumnIndex) {
        /** @type {?} */
        const containerTopOffset = parseInt(this.verticalDisplayContainerElement.style.top, 10);
        /** @type {?} */
        const targetRow = this.grid.summariesRowList.filter(s => s.index !== 0)
            .concat(this.grid.rowList.toArray()).find(r => r.index === targetRowIndex);
        /** @type {?} */
        const rowHeight = this.grid.verticalScrollContainer.getSizeAt(targetRowIndex);
        /** @type {?} */
        const containerHeight = this.grid.calcHeight ? Math.ceil(this.grid.calcHeight) : 0;
        /** @type {?} */
        const targetEndTopOffset = targetRow ? targetRow.nativeElement.offsetTop + rowHeight + containerTopOffset :
            containerHeight + rowHeight;
        if (!targetRow || targetRow.nativeElement.offsetTop < Math.abs(containerTopOffset)
            || containerHeight && containerHeight < targetEndTopOffset) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} rowIndex
     * @param {?} visibleColIndex
     * @param {?=} cb
     * @return {?}
     */
    performVerticalScrollToCell(rowIndex, visibleColIndex, cb) {
        this.grid.verticalScrollContainer.scrollTo(rowIndex);
        this.grid.verticalScrollContainer.onChunkLoad
            .pipe(first()).subscribe(() => {
            cb();
        });
    }
    /**
     * @param {?} rowIndex
     * @param {?} visibleColumnIndex
     * @param {?=} isSummary
     * @param {?=} cb
     * @return {?}
     */
    performHorizontalScrollToCell(rowIndex, visibleColumnIndex, isSummary = false, cb) {
        /** @type {?} */
        const unpinnedIndex = this.getColumnUnpinnedIndex(visibleColumnIndex);
        this.getFocusableGrid().nativeElement.focus({ preventScroll: true });
        this.grid.parentVirtDir.onChunkLoad
            .pipe(first())
            .subscribe(() => {
            if (cb) {
                cb();
            }
            else {
                /** @type {?} */
                const cellElement = this.getCellElementByVisibleIndex(rowIndex, visibleColumnIndex, isSummary);
                if (cellElement) {
                    cellElement.focus({ preventScroll: true });
                }
            }
        });
        this.horizontalScroll(rowIndex).scrollTo(unpinnedIndex);
    }
    /**
     * @protected
     * @return {?}
     */
    getFocusableGrid() {
        return this.grid;
    }
    /**
     * @protected
     * @param {?} index
     * @param {?=} selector
     * @return {?}
     */
    getRowByIndex(index, selector = this.getRowSelector()) {
        return this.grid.nativeElement.querySelector(`${selector}[data-rowindex="${index}"]`);
    }
    /**
     * @protected
     * @param {?} nextIndex
     * @return {?}
     */
    getNextRowByIndex(nextIndex) {
        return this.grid.tbody.nativeElement.querySelector(`[data-rowindex="${nextIndex}"]`);
    }
    /**
     * @private
     * @return {?}
     */
    getAllRows() {
        /** @type {?} */
        const selector = this.getRowSelector();
        return this.grid.nativeElement.querySelectorAll(selector);
    }
    /**
     * @protected
     * @param {?=} visibleIndex
     * @param {?=} isSummary
     * @return {?}
     */
    getCellSelector(visibleIndex, isSummary = false) {
        return isSummary ? 'igx-grid-summary-cell' : 'igx-grid-cell';
    }
    /**
     * @protected
     * @return {?}
     */
    getRowSelector() {
        return 'igx-grid-row';
    }
}
IgxGridNavigationService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    IgxGridNavigationService.prototype.grid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1uYXZpZ2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2dyaWQtbmF2aWdhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBd0IsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7SUFLdEUsTUFBTyxNQUFNO0lBQ2IsT0FBUSxPQUFPOzs7OztBQUtuQixNQUFNLE9BQU8sd0JBQXdCOzs7O0lBR2pDLElBQUkscUJBQXFCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVHLENBQUM7Ozs7SUFFRCxJQUFJLDBCQUEwQjtRQUMxQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoRixDQUFDOzs7O0lBRUQsSUFBSSwrQkFBK0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDOUYsQ0FBQzs7Ozs7SUFFTSxnQkFBZ0IsQ0FBQyxRQUFROztZQUN4QixPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFF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SSxDQUFDO0lBQ3JCLENBQUM7Ozs7Ozs7SUFFUyxhQUFhLENBQUMsS0FBSyxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFO1FBQzNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUN4QyxHQUFHLFFBQVEsbUJBQW1CLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7O0lBRVMsaUJBQWlCLENBQUMsU0FBUztRQUNqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQzlDLG1CQUFtQixTQUFTLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRU8sVUFBVTs7Y0FDUixRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTtRQUN0QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7Ozs7SUFFUyxlQUFlLENBQUMsWUFBcUIsRUFBRSxTQUFTLEdBQUcsS0FBSztRQUM5RCxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUVTLGNBQWM7UUFDcEIsT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQzs7O1lBbm5CSixVQUFVOzs7O0lBRVAsd0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4R3JpZEJhc2VDb21wb25lbnQsIEZpbHRlck1vZGUgfSBmcm9tICcuL2dyaWQtYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJZ3hDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuL2NvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4R3JpZEdyb3VwQnlSb3dDb21wb25lbnQgfSBmcm9tICcuL2dyaWQvZ3JvdXBieS1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IElTZWxlY3Rpb25Ob2RlIH0gZnJvbSAnLi4vY29yZS9ncmlkLXNlbGVjdGlvbic7XG5pbXBvcnQgeyBJZ3hGb3JPZkRpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvZm9yLW9mL2Zvcl9vZi5kaXJlY3RpdmUnO1xuXG5lbnVtIE1vdmVEaXJlY3Rpb24ge1xuICAgIExFRlQgPSAnbGVmdCcsXG4gICAgUklHSFQgPSAncmlnaHQnXG59XG5cbi8qKiBAaGlkZGVuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSWd4R3JpZE5hdmlnYXRpb25TZXJ2aWNlIHtcbiAgICBwdWJsaWMgZ3JpZDogSWd4R3JpZEJhc2VDb21wb25lbnQ7XG5cbiAgICBnZXQgZGlzcGxheUNvbnRhaW5lcldpZHRoKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmdyaWQucGFyZW50VmlydERpci5kYy5pbnN0YW5jZS5fdmlld0NvbnRhaW5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgpO1xuICAgIH1cblxuICAgIGdldCBkaXNwbGF5Q29udGFpbmVyU2Nyb2xsTGVmdCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5ncmlkLnBhcmVudFZpcnREaXIuZ2V0SG9yaXpvbnRhbFNjcm9sbCgpLnNjcm9sbExlZnQpO1xuICAgIH1cblxuICAgIGdldCB2ZXJ0aWNhbERpc3BsYXlDb250YWluZXJFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmRjLmluc3RhbmNlLl92aWV3Q29udGFpbmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaG9yaXpvbnRhbFNjcm9sbChyb3dJbmRleCkge1xuICAgICAgICBsZXQgcm93Q29tcCA9IHRoaXMuZ3JpZC5kYXRhUm93TGlzdC5maW5kKChyb3cpID0+IHJvdy5pbmRleCA9PT0gcm93SW5kZXgpIHx8IHRoaXMuZ3JpZC5kYXRhUm93TGlzdC5maXJzdDtcbiAgICAgICAgaWYgKCFyb3dDb21wKSB7XG4gICAgICAgICAgICByb3dDb21wID0gdGhpcy5ncmlkLnN1bW1hcmllc1Jvd0xpc3QuZmluZCgocm93KSA9PiByb3cuaW5kZXggPT09IHJvd0luZGV4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm93Q29tcC52aXJ0RGlyUm93O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb2x1bW5VbnBpbm5lZEluZGV4KHZpc2libGVDb2x1bW5JbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuZ3JpZC51bnBpbm5lZENvbHVtbnMuZmluZCgoY29sKSA9PiAhY29sLmNvbHVtbkdyb3VwICYmIGNvbC52aXNpYmxlSW5kZXggPT09IHZpc2libGVDb2x1bW5JbmRleCk7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQucGlubmVkQ29sdW1ucy5sZW5ndGggPyB0aGlzLmdyaWQudW5waW5uZWRDb2x1bW5zLmZpbHRlcigoYykgPT4gIWMuY29sdW1uR3JvdXApLmluZGV4T2YoY29sdW1uKSA6XG4gICAgICAgICAgICB2aXNpYmxlQ29sdW1uSW5kZXg7XG4gICAgfVxuXG4gICAgcHVibGljIGlzQ29sdW1uRnVsbHlWaXNpYmxlKGNvbHVtbkluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDb2x1bW5SaWdodEVkZ2VWaXNpYmxlKGNvbHVtbkluZGV4KSAmJiB0aGlzLmlzQ29sdW1uTGVmdEVkZ2VWaXNpYmxlKGNvbHVtbkluZGV4KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNDb2x1bW5SaWdodEVkZ2VWaXNpYmxlKGNvbHVtbkluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZm9yT2ZEaXI6IElneEZvck9mRGlyZWN0aXZlPGFueT4gPSB0aGlzLmZvck9mRGlyKCk7XG4gICAgICAgIGlmICh0aGlzLmlzQ29sdW1uUGlubmVkKGNvbHVtbkluZGV4LCBmb3JPZkRpcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRDb2x1bW5VbnBpbm5lZEluZGV4KGNvbHVtbkluZGV4KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheUNvbnRhaW5lcldpZHRoID49IGZvck9mRGlyLmdldENvbHVtblNjcm9sbExlZnQoaW5kZXggKyAxKSAtIHRoaXMuZGlzcGxheUNvbnRhaW5lclNjcm9sbExlZnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGlzQ29sdW1uTGVmdEVkZ2VWaXNpYmxlKGNvbHVtbkluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZm9yT2ZEaXIgPSB0aGlzLmZvck9mRGlyKCk7XG4gICAgICAgIGlmICh0aGlzLmlzQ29sdW1uUGlubmVkKGNvbHVtbkluZGV4LCBmb3JPZkRpcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRDb2x1bW5VbnBpbm5lZEluZGV4KGNvbHVtbkluZGV4KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheUNvbnRhaW5lclNjcm9sbExlZnQgPD0gZm9yT2ZEaXIuZ2V0Q29sdW1uU2Nyb2xsTGVmdChpbmRleCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb3JPZkRpcigpOiBJZ3hGb3JPZkRpcmVjdGl2ZTxhbnk+IHtcbiAgICAgICAgbGV0IGZvck9mRGlyOiBJZ3hGb3JPZkRpcmVjdGl2ZTxhbnk+O1xuICAgICAgICBpZiAodGhpcy5ncmlkLmRhdGFSb3dMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvck9mRGlyID0gdGhpcy5ncmlkLmRhdGFSb3dMaXN0LmZpcnN0LnZpcnREaXJSb3c7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3JPZkRpciA9IHRoaXMuZ3JpZC5oZWFkZXJDb250YWluZXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvck9mRGlyO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNDb2x1bW5QaW5uZWQoY29sdW1uSW5kZXg6IG51bWJlciwgZm9yT2ZEaXI6IElneEZvck9mRGlyZWN0aXZlPGFueT4pOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbFNjcm9sbCA9IGZvck9mRGlyLmdldEhvcml6b250YWxTY3JvbGwoKTtcbiAgICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5ncmlkLmNvbHVtbkxpc3QuZmlsdGVyKGMgPT4gIWMuY29sdW1uR3JvdXApLmZpbmQoKGNvbCkgPT4gY29sLnZpc2libGVJbmRleCA9PT0gY29sdW1uSW5kZXgpO1xuICAgICAgICByZXR1cm4gKCFob3Jpem9udGFsU2Nyb2xsLmNsaWVudFdpZHRoIHx8IGNvbHVtbi5waW5uZWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZ3JpZE9yZGVyZWRDb2x1bW5zKCk6IElneENvbHVtbkNvbXBvbmVudFtdIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLmdyaWQucGlubmVkQ29sdW1ucywgLi4udGhpcy5ncmlkLnVucGlubmVkQ29sdW1uc10uZmlsdGVyKGMgPT4gIWMuY29sdW1uR3JvdXApO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1Jvd0luRWRpdE1vZGUocm93SW5kZXgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5yb3dFZGl0YWJsZSAmJiAodGhpcy5ncmlkLnJvd0luRWRpdE1vZGUgJiYgdGhpcy5ncmlkLnJvd0luRWRpdE1vZGUuaW5kZXggPT09IHJvd0luZGV4KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmluZE5leHRFZGl0YWJsZShkaXJlY3Rpb246IHN0cmluZywgdmlzaWJsZUNvbHVtbkluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgLy8gZ28gdHJvdWdoIGFsbCBjb2x1bW5zIGluIG9uZSBjeWNsZSBpbnN0ZWFkIG9mXG4gICAgICAgIC8vIHNwbGljZSgpLnJldmVyc2UoKS5maW5kKClcbiAgICAgICAgY29uc3QgZ3JpZENvbHVtbnMgPSB0aGlzLmdyaWRPcmRlcmVkQ29sdW1ucztcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB2aXNpYmxlQ29sdW1uSW5kZXg7XG4gICAgICAgIGxldCBlbmQgPSAwO1xuICAgICAgICBsZXQgc3RlcCA9IDA7XG4gICAgICAgIGxldCByZXN1bHQgPSAtMTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gTW92ZURpcmVjdGlvbi5MRUZUKSB7XG4gICAgICAgICAgICBlbmQgPSAwO1xuICAgICAgICAgICAgc3RlcCA9IC0xO1xuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gTW92ZURpcmVjdGlvbi5SSUdIVCkge1xuICAgICAgICAgICAgZW5kID0gZ3JpZENvbHVtbnMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHN0ZXAgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGMgPSBzdGFydDsgKGMgKiBzdGVwKSA8PSBlbmQ7IGMgKz0gc3RlcCkge1xuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gZ3JpZENvbHVtbnNbY107XG4gICAgICAgICAgICBpZiAoY29sdW1uLmVkaXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDZWxsRWxlbWVudEJ5VmlzaWJsZUluZGV4KHJvd0luZGV4LCB2aXNpYmxlQ29sdW1uSW5kZXgsIGlzU3VtbWFyeSA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNlbGxTZWxlY3RvciA9IHRoaXMuZ2V0Q2VsbFNlbGVjdG9yKHZpc2libGVDb2x1bW5JbmRleCwgaXNTdW1tYXJ5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgJHtjZWxsU2VsZWN0b3J9W2RhdGEtcm93aW5kZXg9XCIke3Jvd0luZGV4fVwiXVtkYXRhLXZpc2libGVJbmRleD1cIiR7dmlzaWJsZUNvbHVtbkluZGV4fVwiXWApO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbktleWRvd25BcnJvd1JpZ2h0KGVsZW1lbnQsIHNlbGVjdGVkTm9kZTogSVNlbGVjdGlvbk5vZGUpIHtcbiAgICAgICAgY29uc3Qgcm93SW5kZXggPSBzZWxlY3RlZE5vZGUucm93O1xuICAgICAgICBjb25zdCB2aXNpYmxlQ29sdW1uSW5kZXggPSBzZWxlY3RlZE5vZGUuY29sdW1uO1xuICAgICAgICBjb25zdCBpc1N1bW1hcnkgPSBzZWxlY3RlZE5vZGUuaXNTdW1tYXJ5Um93O1xuICAgICAgICBpZiAodGhpcy5ncmlkLnVucGlubmVkQ29sdW1uc1t0aGlzLmdyaWQudW5waW5uZWRDb2x1bW5zLmxlbmd0aCAtIDFdLnZpc2libGVJbmRleCA9PT0gdmlzaWJsZUNvbHVtbkluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNDb2x1bW5SaWdodEVkZ2VWaXNpYmxlKHZpc2libGVDb2x1bW5JbmRleCArIDEpKSB7IC8vIGlmIG5leHQgY29sdW1uIGlzIGZ1bGx5IHZpc2libGUgb3IgaXMgcGlubmVkXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2lneC1ncmlkX190ZC0tcGlubmVkLWxhc3QnKSB8fCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaWd4LWdyaWQtc3VtbWFyeS0tcGlubmVkLWxhc3QnKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ29sdW1uTGVmdEVkZ2VWaXNpYmxlKHZpc2libGVDb2x1bW5JbmRleCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEZvY3VzYWJsZUdyaWQoKS5uYXRpdmVFbGVtZW50LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkLnBhcmVudFZpcnREaXIub25DaHVua0xvYWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsU2Nyb2xsKHJvd0luZGV4KS5zY3JvbGxUbygwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybUhvcml6b250YWxTY3JvbGxUb0NlbGwocm93SW5kZXgsIHZpc2libGVDb2x1bW5JbmRleCArIDEsIGlzU3VtbWFyeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25LZXlkb3duQXJyb3dMZWZ0KGVsZW1lbnQsIHNlbGVjdGVkTm9kZTogSVNlbGVjdGlvbk5vZGUpIHtcbiAgICAgICAgY29uc3Qgcm93SW5kZXggPSBzZWxlY3RlZE5vZGUucm93O1xuICAgICAgICBjb25zdCB2aXNpYmxlQ29sdW1uSW5kZXggPSBzZWxlY3RlZE5vZGUuY29sdW1uO1xuICAgICAgICBjb25zdCBpc1N1bW1hcnkgPSBzZWxlY3RlZE5vZGUuaXNTdW1tYXJ5Um93O1xuICAgICAgICBpZiAodmlzaWJsZUNvbHVtbkluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldENvbHVtblVucGlubmVkSW5kZXgodmlzaWJsZUNvbHVtbkluZGV4IC0gMSk7XG4gICAgICAgIGlmICghZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICYmIHRoaXMuZ3JpZC5waW5uZWRDb2x1bW5zLmxlbmd0aCAmJiBpbmRleCA9PT0gLSAxKSB7XG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucHJldmlvdXNFbGVtZW50U2libGluZy5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNDb2x1bW5MZWZ0RWRnZVZpc2libGUodmlzaWJsZUNvbHVtbkluZGV4IC0gMSkpIHtcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybUhvcml6b250YWxTY3JvbGxUb0NlbGwocm93SW5kZXgsIHZpc2libGVDb2x1bW5JbmRleCAtIDEsIGlzU3VtbWFyeSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZVByZXZpb3VzRWRpdGFibGUocm93SW5kZXg6IG51bWJlciwgY3VycmVudENvbHVtblZpc2libGVJbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHByZXZFZGl0YWJsZUNvbHVtbkluZGV4ID0gdGhpcy5maW5kTmV4dEVkaXRhYmxlKE1vdmVEaXJlY3Rpb24uTEVGVCwgY3VycmVudENvbHVtblZpc2libGVJbmRleCAtIDEpO1xuICAgICAgICBpZiAocHJldkVkaXRhYmxlQ29sdW1uSW5kZXggPT09IC0xICYmIHRoaXMuZ3JpZC5yb3dFZGl0VGFicy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vICBUT0RPOiBtYWtlIGdyaWRBUEkgdmlzaWJsZSBmb3IgaW50ZXJuYWwgdXNlIGFuZCByZW1vdmUgY2FzdCB0byBhbnlcbiAgICAgICAgICAgICh0aGlzLmdyaWQgYXMgYW55KS5ncmlkQVBJLnN1Ym1pdF92YWx1ZSgpO1xuICAgICAgICAgICAgdGhpcy5ncmlkLnJvd0VkaXRUYWJzLmxhc3QuZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb2N1c0VkaXRhYmxlVGFyZ2V0KHJvd0luZGV4LCBwcmV2RWRpdGFibGVDb2x1bW5JbmRleCk7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmVOZXh0RWRpdGFibGUocm93SW5kZXg6IG51bWJlciwgY3VycmVudENvbHVtblZpc2libGVJbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG5leHRFZGl0YWJsZUNvbHVtbkluZGV4ID0gdGhpcy5maW5kTmV4dEVkaXRhYmxlKE1vdmVEaXJlY3Rpb24uUklHSFQsIGN1cnJlbnRDb2x1bW5WaXNpYmxlSW5kZXggKyAxKTtcbiAgICAgICAgaWYgKG5leHRFZGl0YWJsZUNvbHVtbkluZGV4ID09PSAtMSAmJiB0aGlzLmdyaWQucm93RWRpdFRhYnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyAgVE9ETzogbWFrZSBncmlkQVBJIHZpc2libGUgZm9yIGludGVybmFsIHVzZSBhbmQgcmVtb3ZlIGNhc3QgdG8gYW55XG4gICAgICAgICAgICAodGhpcy5ncmlkIGFzIGFueSkuZ3JpZEFQSS5zdWJtaXRfdmFsdWUoKTtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5yb3dFZGl0VGFicy5maXJzdC5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvY3VzRWRpdGFibGVUYXJnZXQocm93SW5kZXgsIG5leHRFZGl0YWJsZUNvbHVtbkluZGV4KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZm9jdXNFZGl0YWJsZVRhcmdldChyb3dJbmRleDogbnVtYmVyLCBjb2x1bW5JbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ29sdW1uRnVsbHlWaXNpYmxlKGNvbHVtbkluZGV4KSkge1xuICAgICAgICAgICAgdGhpcy5nZXRDZWxsRWxlbWVudEJ5VmlzaWJsZUluZGV4KHJvd0luZGV4LCBjb2x1bW5JbmRleCkuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybUhvcml6b250YWxTY3JvbGxUb0NlbGwocm93SW5kZXgsIGNvbHVtbkluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbktleWRvd25Ib21lKHJvd0luZGV4LCBpc1N1bW1hcnkgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCByb3dMaXN0ID0gaXNTdW1tYXJ5ID8gdGhpcy5ncmlkLnN1bW1hcmllc1Jvd0xpc3QgOiB0aGlzLmdyaWQuZGF0YVJvd0xpc3Q7XG4gICAgICAgIGxldCByb3dFbGVtZW50ID0gcm93TGlzdC5maW5kKChyb3cpID0+IHJvdy5pbmRleCA9PT0gcm93SW5kZXgpO1xuICAgICAgICBjb25zdCBjZWxsU2VsZWN0b3IgPSB0aGlzLmdldENlbGxTZWxlY3RvcigwLCBpc1N1bW1hcnkpO1xuICAgICAgICBpZiAoIXJvd0VsZW1lbnQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHJvd0VsZW1lbnQgPSByb3dFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGxldCBmaXJzdENlbGwgPSByb3dFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoY2VsbFNlbGVjdG9yKTtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5waW5uZWRDb2x1bW5zLmxlbmd0aCB8fCB0aGlzLmRpc3BsYXlDb250YWluZXJTY3JvbGxMZWZ0ID09PSAwKSB7XG4gICAgICAgICAgICBmaXJzdENlbGwuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXRGb2N1c2FibGVHcmlkKCkubmF0aXZlRWxlbWVudC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgICAgICB0aGlzLmdyaWQucGFyZW50VmlydERpci5vbkNodW5rTG9hZFxuICAgICAgICAgICAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0Q2VsbCA9IHJvd0VsZW1lbnQucXVlcnlTZWxlY3RvcihjZWxsU2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICBmaXJzdENlbGwuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsU2Nyb2xsKHJvd0luZGV4KS5zY3JvbGxUbygwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbktleWRvd25FbmQocm93SW5kZXgsIGlzU3VtbWFyeSA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ncmlkLnVucGlubmVkQ29sdW1uc1t0aGlzLmdyaWQudW5waW5uZWRDb2x1bW5zLmxlbmd0aCAtIDFdLnZpc2libGVJbmRleDtcbiAgICAgICAgY29uc3Qgcm93TGlzdCA9IGlzU3VtbWFyeSA/IHRoaXMuZ3JpZC5zdW1tYXJpZXNSb3dMaXN0IDogdGhpcy5ncmlkLmRhdGFSb3dMaXN0O1xuICAgICAgICBsZXQgcm93RWxlbWVudCA9IHJvd0xpc3QuZmluZCgocm93KSA9PiByb3cuaW5kZXggPT09IHJvd0luZGV4KTtcbiAgICAgICAgaWYgKCFyb3dFbGVtZW50KSB7IHJldHVybjsgfVxuICAgICAgICByb3dFbGVtZW50ID0gcm93RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBpZiAodGhpcy5pc0NvbHVtblJpZ2h0RWRnZVZpc2libGUoaW5kZXgpKSB7XG4gICAgICAgICAgICBjb25zdCBhbGxDZWxscyA9IHJvd0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmdldENlbGxTZWxlY3RvcigtMSwgaXNTdW1tYXJ5KSk7XG4gICAgICAgICAgICBhbGxDZWxsc1thbGxDZWxscy5sZW5ndGggLSAxXS5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldEZvY3VzYWJsZUdyaWQoKS5uYXRpdmVFbGVtZW50LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5wYXJlbnRWaXJ0RGlyLm9uQ2h1bmtMb2FkXG4gICAgICAgICAgICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxsQ2VsbHMgPSByb3dFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5nZXRDZWxsU2VsZWN0b3IoLTEsIGlzU3VtbWFyeSkpO1xuICAgICAgICAgICAgICAgICAgICBhbGxDZWxsc1thbGxDZWxscy5sZW5ndGggLSAxXS5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmhvcml6b250YWxTY3JvbGwocm93SW5kZXgpLnNjcm9sbFRvKHRoaXMuZ2V0Q29sdW1uVW5waW5uZWRJbmRleChpbmRleCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5hdmlnYXRlVG9wKHZpc2libGVDb2x1bW5JbmRleCkge1xuICAgICAgICBjb25zdCB2ZXJ0aWNhbFNjcm9sbCA9IHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpO1xuICAgICAgICBjb25zdCBjZWxsU2VsZWN0b3IgPSB0aGlzLmdldENlbGxTZWxlY3Rvcih2aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgICBpZiAodmVydGljYWxTY3JvbGwuc2Nyb2xsVG9wID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuZ3JpZC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgYCR7Y2VsbFNlbGVjdG9yfVtkYXRhLXZpc2libGVJbmRleD1cIiR7dmlzaWJsZUNvbHVtbkluZGV4fVwiXWApO1xuICAgICAgICAgICAgY2VsbHNbMF0uZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgdGhpcy5nZXRGb2N1c2FibGVHcmlkKCkubmF0aXZlRWxlbWVudC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgICAgICB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuc2Nyb2xsVG8oMCk7XG4gICAgICAgICAgICB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIub25DaHVua0xvYWRcbiAgICAgICAgICAgICAgICAucGlwZShmaXJzdCgpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuZ3JpZC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtjZWxsU2VsZWN0b3J9W2RhdGEtdmlzaWJsZUluZGV4PVwiJHt2aXNpYmxlQ29sdW1uSW5kZXh9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZWxscy5sZW5ndGggPiAwKSB7IGNlbGxzWzBdLmZvY3VzKCk7IH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBuYXZpZ2F0ZUJvdHRvbSh2aXNpYmxlQ29sdW1uSW5kZXgpIHtcbiAgICAgICAgY29uc3QgdmVydGljYWxTY3JvbGwgPSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKTtcbiAgICAgICAgY29uc3QgY2VsbFNlbGVjdG9yID0gdGhpcy5nZXRDZWxsU2VsZWN0b3IodmlzaWJsZUNvbHVtbkluZGV4KTtcbiAgICAgICAgaWYgKHZlcnRpY2FsU2Nyb2xsLnNjcm9sbEhlaWdodCA9PT0gMCB8fFxuICAgICAgICAgICAgdmVydGljYWxTY3JvbGwuc2Nyb2xsVG9wID09PSB2ZXJ0aWNhbFNjcm9sbC5zY3JvbGxIZWlnaHQgLSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yQ29udGFpbmVyU2l6ZSkge1xuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLmdyaWQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgIGAke2NlbGxTZWxlY3Rvcn1bZGF0YS12aXNpYmxlSW5kZXg9XCIke3Zpc2libGVDb2x1bW5JbmRleH1cIl1gKTtcbiAgICAgICAgICAgIGNlbGxzW2NlbGxzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIHRoaXMuZ2V0Rm9jdXNhYmxlR3JpZCgpLm5hdGl2ZUVsZW1lbnQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvKHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5pZ3hGb3JPZi5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5vbkNodW5rTG9hZFxuICAgICAgICAgICAgICAgIC5waXBlKGZpcnN0KCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke2NlbGxTZWxlY3Rvcn1bZGF0YS12aXNpYmxlSW5kZXg9XCIke3Zpc2libGVDb2x1bW5JbmRleH1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGxzLmxlbmd0aCA+IDApIHsgY2VsbHNbY2VsbHMubGVuZ3RoIC0gMV0uZm9jdXMoKTsgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5hdmlnYXRlVXAocm93RWxlbWVudCwgc2VsZWN0ZWROb2RlOiBJU2VsZWN0aW9uTm9kZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50Um93SW5kZXggPSBzZWxlY3RlZE5vZGUucm93O1xuICAgICAgICBjb25zdCB2aXNpYmxlQ29sdW1uSW5kZXggPSBzZWxlY3RlZE5vZGUuY29sdW1uO1xuICAgICAgICBpZiAoY3VycmVudFJvd0luZGV4ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGFpbmVyVG9wT2Zmc2V0ID0gcGFyc2VJbnQodGhpcy52ZXJ0aWNhbERpc3BsYXlDb250YWluZXJFbGVtZW50LnN0eWxlLnRvcCwgMTApO1xuICAgICAgICBpZiAoIXJvd0VsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZyB8fFxuICAgICAgICAgICAgcm93RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLm9mZnNldFRvcCA8IE1hdGguYWJzKGNvbnRhaW5lclRvcE9mZnNldCkpIHtcbiAgICAgICAgICAgdGhpcy5nZXRGb2N1c2FibGVHcmlkKCkubmF0aXZlRWxlbWVudC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgICAgICB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuc2Nyb2xsVG8oY3VycmVudFJvd0luZGV4IC0gMSk7XG4gICAgICAgICAgICB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIub25DaHVua0xvYWRcbiAgICAgICAgICAgICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWcgPSByb3dFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93U2VsZWN0b3IgPSB0aGlzLmdldFJvd1NlbGVjdG9yKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWcgPT09IHJvd1NlbGVjdG9yIHx8IHRhZyA9PT0gJ2lneC1ncmlkLXN1bW1hcnktcm93Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93RWxlbWVudCA9IHRoaXMuZ2V0Um93QnlJbmRleChjdXJyZW50Um93SW5kZXgsIHRhZyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dFbGVtZW50ID0gdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaWd4LWdyaWQtZ3JvdXBieS1yb3dbZGF0YS1yb3dpbmRleD1cIiR7Y3VycmVudFJvd0luZGV4fVwiXWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNQcmV2aW91c0VsZW1lbnQocm93RWxlbWVudCwgdmlzaWJsZUNvbHVtbkluZGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNQcmV2aW91c0VsZW1lbnQocm93RWxlbWVudCwgdmlzaWJsZUNvbHVtbkluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBmb2N1c1ByZXZpb3VzRWxlbWVudChjdXJyZW50Um93RWwsIHZpc2libGVDb2x1bW5JbmRleCkge1xuICAgICAgICB0aGlzLmZvY3VzRWxlbShjdXJyZW50Um93RWwucHJldmlvdXNFbGVtZW50U2libGluZywgdmlzaWJsZUNvbHVtbkluZGV4KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmF2aWdhdGVEb3duKHJvd0VsZW1lbnQsIHNlbGVjdGVkTm9kZTogSVNlbGVjdGlvbk5vZGUpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFJvd0luZGV4ID0gc2VsZWN0ZWROb2RlLnJvdztcbiAgICAgICAgY29uc3QgdmlzaWJsZUNvbHVtbkluZGV4ID0gc2VsZWN0ZWROb2RlLmNvbHVtbjtcbiAgICAgICAgaWYgKGN1cnJlbnRSb3dJbmRleCA9PT0gdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLmxlbmd0aCAtIDEgfHxcbiAgICAgICAgICAgIChjdXJyZW50Um93SW5kZXggPT09IDAgJiYgcm93RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpZ3gtZ3JpZC1zdW1tYXJ5LXJvdycpKSB7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGlzIGlzIHJvb3RTdW1tYXJ5IHJvd1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvd0hlaWdodCA9IHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRTaXplQXQoY3VycmVudFJvd0luZGV4ICsgMSk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IHRoaXMuZ3JpZC5jYWxjSGVpZ2h0ID8gTWF0aC5jZWlsKHRoaXMuZ3JpZC5jYWxjSGVpZ2h0KSA6IDA7XG4gICAgICAgIGNvbnN0IHRhcmdldEVuZFRvcE9mZnNldCA9IHJvd0VsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nID9cbiAgICAgICAgICAgIHJvd0VsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLm9mZnNldFRvcCArIHJvd0hlaWdodCArIHBhcnNlSW50KHRoaXMudmVydGljYWxEaXNwbGF5Q29udGFpbmVyRWxlbWVudC5zdHlsZS50b3AsIDEwKSA6XG4gICAgICAgICAgICBjb250YWluZXJIZWlnaHQgKyByb3dIZWlnaHQ7XG4gICAgICAgdGhpcy5nZXRGb2N1c2FibGVHcmlkKCkubmF0aXZlRWxlbWVudC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgIGlmIChjb250YWluZXJIZWlnaHQgJiYgY29udGFpbmVySGVpZ2h0IDwgdGFyZ2V0RW5kVG9wT2Zmc2V0KSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBjdXJyZW50Um93SW5kZXggKyAxO1xuICAgICAgICAgICAgdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvKG5leHRJbmRleCk7XG4gICAgICAgICAgICB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIub25DaHVua0xvYWRcbiAgICAgICAgICAgICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3dFbGVtZW50ID0gdGhpcy5nZXROZXh0Um93QnlJbmRleChuZXh0SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRWxlbShyb3dFbGVtZW50LCB2aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb2N1c05leHRFbGVtZW50KHJvd0VsZW1lbnQsIHZpc2libGVDb2x1bW5JbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZm9jdXNFbGVtKHJvd0VsZW1lbnQsIHZpc2libGVDb2x1bW5JbmRleCkge1xuICAgICAgICBpZiAocm93RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpZ3gtZ3JpZC1ncm91cGJ5LXJvdycpIHtcbiAgICAgICAgICAgIHJvd0VsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGlzU3VtbWFyeVJvdyA9IHJvd0VsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaWd4LWdyaWQtc3VtbWFyeS1yb3cnO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb2x1bW5GdWxseVZpc2libGUodmlzaWJsZUNvbHVtbkluZGV4KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGxTZWxlY3RvciA9IHRoaXMuZ2V0Q2VsbFNlbGVjdG9yKHZpc2libGVDb2x1bW5JbmRleCwgaXNTdW1tYXJ5Um93KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gcm93RWxlbWVudC5xdWVyeVNlbGVjdG9yKGAke2NlbGxTZWxlY3Rvcn1bZGF0YS12aXNpYmxlSW5kZXg9XCIke3Zpc2libGVDb2x1bW5JbmRleH1cIl1gKTtcbiAgICAgICAgICAgICAgICBjZWxsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNlbGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1Ib3Jpem9udGFsU2Nyb2xsVG9DZWxsKHBhcnNlSW50KFxuICAgICAgICAgICAgICAgIHJvd0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXJvd2luZGV4JyksIDEwKSwgdmlzaWJsZUNvbHVtbkluZGV4LCBpc1N1bW1hcnlSb3cpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGZvY3VzTmV4dEVsZW1lbnQocm93RWxlbWVudCwgdmlzaWJsZUNvbHVtbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvY3VzRWxlbShyb3dFbGVtZW50Lm5leHRFbGVtZW50U2libGluZywgdmlzaWJsZUNvbHVtbkluZGV4KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ29Ub0ZpcnN0Q2VsbCgpIHtcbiAgICAgICAgY29uc3QgdmVydGljYWxTY3JvbGwgPSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKTtcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbFNjcm9sbCA9IHRoaXMuZ3JpZC5kYXRhUm93TGlzdC5maXJzdC52aXJ0RGlyUm93LmdldEhvcml6b250YWxTY3JvbGwoKTtcbiAgICAgICAgaWYgKHZlcnRpY2FsU2Nyb2xsLnNjcm9sbFRvcCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5vbktleWRvd25Ib21lKHRoaXMuZ3JpZC5kYXRhUm93TGlzdC5maXJzdC5pbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWhvcml6b250YWxTY3JvbGwuY2xpZW50V2lkdGggfHwgcGFyc2VJbnQoaG9yaXpvbnRhbFNjcm9sbC5zY3JvbGxMZWZ0LCAxMCkgPD0gMSB8fCB0aGlzLmdyaWQucGlubmVkQ29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG9wKDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIHRoaXMuZ2V0Rm9jdXNhYmxlR3JpZCgpLm5hdGl2ZUVsZW1lbnQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbFNjcm9sbCh0aGlzLmdyaWQuZGF0YVJvd0xpc3QuZmlyc3QuaW5kZXgpLnNjcm9sbFRvKDApO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5wYXJlbnRWaXJ0RGlyLm9uQ2h1bmtMb2FkXG4gICAgICAgICAgICAgICAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvcCgwKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ29Ub0xhc3RDZWxsKCkge1xuICAgICAgICBjb25zdCB2ZXJ0aWNhbFNjcm9sbCA9IHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpO1xuICAgICAgICBpZiAodmVydGljYWxTY3JvbGwuc2Nyb2xsSGVpZ2h0ID09PSAwIHx8XG4gICAgICAgICAgICB2ZXJ0aWNhbFNjcm9sbC5zY3JvbGxUb3AgPT09IHZlcnRpY2FsU2Nyb2xsLnNjcm9sbEhlaWdodCAtIHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5pZ3hGb3JDb250YWluZXJTaXplKSB7XG4gICAgICAgICAgICBjb25zdCByb3dzID0gdGhpcy5nZXRBbGxSb3dzKCk7XG4gICAgICAgICAgICBjb25zdCByb3dJbmRleCA9IHBhcnNlSW50KHJvd3Nbcm93cy5sZW5ndGggLSAxXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93SW5kZXgnKSwgMTApO1xuICAgICAgICAgICAgdGhpcy5vbktleWRvd25FbmQocm93SW5kZXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICB0aGlzLmdldEZvY3VzYWJsZUdyaWQoKS5uYXRpdmVFbGVtZW50LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5zY3JvbGxUbyh0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2YubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIub25DaHVua0xvYWRcbiAgICAgICAgICAgICAgICAucGlwZShmaXJzdCgpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzID0gdGhpcy5nZXRBbGxSb3dzKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3dzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd0luZGV4ID0gcGFyc2VJbnQocm93c1tyb3dzLmxlbmd0aCAtIDFdLmdldEF0dHJpYnV0ZSgnZGF0YS1yb3dJbmRleCcpLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uS2V5ZG93bkVuZChyb3dJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnb1RvTGFzdEJvZHlFbGVtZW50KCkge1xuICAgICAgICBjb25zdCB2ZXJ0aWNhbFNjcm9sbCA9IHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpO1xuICAgICAgICBpZiAodmVydGljYWxTY3JvbGwuc2Nyb2xsSGVpZ2h0ID09PSAwIHx8XG4gICAgICAgICAgICB2ZXJ0aWNhbFNjcm9sbC5zY3JvbGxUb3AgPT09IHZlcnRpY2FsU2Nyb2xsLnNjcm9sbEhlaWdodCAtIHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5pZ3hGb3JDb250YWluZXJTaXplKSB7XG4gICAgICAgICAgICBjb25zdCByb3dJbmRleCA9IHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5pZ3hGb3JPZi5sZW5ndGggLSAxO1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93aW5kZXg9XCIke3Jvd0luZGV4fVwiXWApO1xuICAgICAgICAgICAgaWYgKHJvdyAmJiByb3cudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaWd4LWdyaWQtZ3JvdXBieS1yb3cnKSB7XG4gICAgICAgICAgICAgICAgcm93LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaXNTdW1tYXJ5ID0gKHJvdyAmJiByb3cudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaWd4LWdyaWQtc3VtbWFyeS1yb3cnKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMub25LZXlkb3duRW5kKHJvd0luZGV4LCBpc1N1bW1hcnkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvKHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5pZ3hGb3JPZi5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5vbkNodW5rTG9hZFxuICAgICAgICAgICAgICAgIC5waXBlKGZpcnN0KCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd0luZGV4ID0gdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuZ3JpZC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvd2luZGV4PVwiJHtyb3dJbmRleH1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvdyAmJiByb3cudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaWd4LWdyaWQtZ3JvdXBieS1yb3cnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3cuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1N1bW1hcnkgPSAocm93ICYmIHJvdy50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpZ3gtZ3JpZC1zdW1tYXJ5LXJvdycpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uS2V5ZG93bkVuZChyb3dJbmRleCwgaXNTdW1tYXJ5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtVGFiKGN1cnJlbnRSb3dFbCwgc2VsZWN0ZWROb2RlOiBJU2VsZWN0aW9uTm9kZSkge1xuICAgICAgICBjb25zdCByb3dJbmRleCA9IHNlbGVjdGVkTm9kZS5yb3c7XG4gICAgICAgIGNvbnN0IHZpc2libGVDb2x1bW5JbmRleCA9IHNlbGVjdGVkTm9kZS5jb2x1bW47XG4gICAgICAgIGNvbnN0IGlzU3VtbWFyeVJvdyA9IHNlbGVjdGVkTm9kZS5pc1N1bW1hcnlSb3c7XG4gICAgICAgIGlmIChpc1N1bW1hcnlSb3cgJiYgcm93SW5kZXggPT09IDAgJiZcbiAgICAgICAgICAgIHRoaXMuZ3JpZC51bnBpbm5lZENvbHVtbnNbdGhpcy5ncmlkLnVucGlubmVkQ29sdW1ucy5sZW5ndGggLSAxXS52aXNpYmxlSW5kZXggPT09IHZpc2libGVDb2x1bW5JbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNSb3dJbkVkaXRNb2RlKHJvd0luZGV4KSkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlTmV4dEVkaXRhYmxlKHJvd0luZGV4LCB2aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ3JpZC51bnBpbm5lZENvbHVtbnNbdGhpcy5ncmlkLnVucGlubmVkQ29sdW1ucy5sZW5ndGggLSAxXS52aXNpYmxlSW5kZXggPT09IHZpc2libGVDb2x1bW5JbmRleCkge1xuICAgICAgICAgICAgY29uc3Qgcm93RWwgPSB0aGlzLmdyaWQucm93TGlzdC5maW5kKHJvdyA9PiByb3cuaW5kZXggPT09IHJvd0luZGV4ICsgMSkgP1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5yb3dMaXN0LmZpbmQocm93ID0+IHJvdy5pbmRleCA9PT0gcm93SW5kZXggKyAxKSA6XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnN1bW1hcmllc1Jvd0xpc3QuZmluZChyb3cgPT4gcm93LmluZGV4ID09PSByb3dJbmRleCArIDEpO1xuICAgICAgICAgICAgaWYgKHJvd0luZGV4ID09PSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2YubGVuZ3RoIC0gMSAmJiB0aGlzLmdyaWQucm9vdFN1bW1hcmllc0VuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uS2V5ZG93bkhvbWUoMCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJvd0VsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZURvd24oY3VycmVudFJvd0VsLCB7IHJvdzogcm93SW5kZXgsIGNvbHVtbjogMCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldENlbGxFbGVtZW50QnlWaXNpYmxlSW5kZXgocm93SW5kZXgsIHZpc2libGVDb2x1bW5JbmRleCwgaXNTdW1tYXJ5Um93KTtcbiAgICAgICAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbktleWRvd25BcnJvd1JpZ2h0KGNlbGwsIHNlbGVjdGVkTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZUZvY3VzVG9GaWx0ZXJDZWxsKHRvU3RhcnQ/OiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLmdyaWQuZmlsdGVyaW5nU2VydmljZS5pc0ZpbHRlclJvd1Zpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5maWx0ZXJpbmdTZXJ2aWNlLmZvY3VzRmlsdGVyUm93Q2xvc2VCdXR0b24oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSB0aGlzLmdyaWQuZmlsdGVyaW5nU2VydmljZS51bnBpbm5lZEZpbHRlcmFibGVDb2x1bW5zO1xuICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IHRvU3RhcnQgPyAwIDogY29sdW1ucy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCB2aXNpYmxlSW5kZXggPSBjb2x1bW5zW3RhcmdldEluZGV4XS52aXNpYmxlSW5kZXg7XG4gICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IHRvU3RhcnQgPyB0aGlzLmlzQ29sdW1uTGVmdEVkZ2VWaXNpYmxlKHZpc2libGVJbmRleCkgOiB0aGlzLmlzQ29sdW1uUmlnaHRFZGdlVmlzaWJsZSh2aXNpYmxlSW5kZXgpO1xuICAgICAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQuZmlsdGVyaW5nU2VydmljZS5mb2N1c0ZpbHRlckNlbGxDaGlwKGNvbHVtbnNbdGFyZ2V0SW5kZXhdLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQuZmlsdGVyaW5nU2VydmljZS5zY3JvbGxUb0ZpbHRlckNlbGwoY29sdW1uc1t0YXJnZXRJbmRleF0sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBuYXZpZ2F0ZVByZXZGaWx0ZXJDZWxsKGNvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50LCBldmVudEFyZ3MpIHtcbiAgICAgICAgY29uc3QgY29scyA9IHRoaXMuZ3JpZC5maWx0ZXJpbmdTZXJ2aWNlLnVucGlubmVkRmlsdGVyYWJsZUNvbHVtbnM7XG4gICAgICAgIGNvbnN0IHByZXZGaWx0ZXJhYmxlSW5kZXggPSBjb2xzLmluZGV4T2YoY29sdW1uKSAtIDE7XG4gICAgICAgIGNvbnN0IHZpc2libGVJbmRleCA9IGNvbHVtbi52aXNpYmxlSW5kZXg7XG4gICAgICAgIGlmICh2aXNpYmxlSW5kZXggPT09IDAgfHwgcHJldkZpbHRlcmFibGVJbmRleCA8IDApIHtcbiAgICAgICAgICAgIC8vIHByZXYgaXMgbm90IGZpbHRlciBjZWxsXG4gICAgICAgICAgICBjb25zdCBmaXJzdEZpbHRhcmFibGVDb2wgPSB0aGlzLmdldEZpcnN0UGlubmVkRmlsdGVyYWJsZUNvbHVtbigpO1xuICAgICAgICAgICAgaWYgKCFmaXJzdEZpbHRhcmFibGVDb2wgfHwgY29sdW1uID09PSBmaXJzdEZpbHRhcmFibGVDb2wpIHtcbiAgICAgICAgICAgICAgICBldmVudEFyZ3MucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2Q29sdW1uID0gY29sc1twcmV2RmlsdGVyYWJsZUluZGV4XTtcbiAgICAgICAgY29uc3QgcHJldlZpc2libGVJbmRleCA9IHByZXZDb2x1bW4udmlzaWJsZUluZGV4O1xuXG4gICAgICAgIGlmIChwcmV2RmlsdGVyYWJsZUluZGV4ID49IDAgJiYgdmlzaWJsZUluZGV4ID4gMCAmJiAhdGhpcy5pc0NvbHVtbkxlZnRFZGdlVmlzaWJsZShwcmV2VmlzaWJsZUluZGV4KSAmJiAhY29sdW1uLnBpbm5lZCkge1xuICAgICAgICAgICAgZXZlbnRBcmdzLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmdyaWQuZmlsdGVyaW5nU2VydmljZS5zY3JvbGxUb0ZpbHRlckNlbGwocHJldkNvbHVtbiwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5hdmlnYXRlRmlyc3RDZWxsSWZQb3NzaWJsZShldmVudEFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5yb3dMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyaWQucm93TGlzdC5maWx0ZXIocm93ID0+IHJvdyBpbnN0YW5jZW9mIElneEdyaWRHcm91cEJ5Um93Q29tcG9uZW50KS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRBcmdzLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ29Ub0ZpcnN0Q2VsbCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ3JpZC5yb290U3VtbWFyaWVzRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5vbktleWRvd25Ib21lKDAsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50QXJncy5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuYXZpZ2F0ZU5leHRGaWx0ZXJDZWxsKGNvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50LCBldmVudEFyZ3MpIHtcbiAgICAgICAgY29uc3QgY29scyA9IHRoaXMuZ3JpZC5maWx0ZXJpbmdTZXJ2aWNlLnVucGlubmVkRmlsdGVyYWJsZUNvbHVtbnM7XG4gICAgICAgIGNvbnN0IG5leHRGaWx0ZXJhYmxlSW5kZXggPSBjb2xzLmluZGV4T2YoY29sdW1uKSArIDE7XG4gICAgICAgIGlmIChuZXh0RmlsdGVyYWJsZUluZGV4ID49IHRoaXMuZ3JpZC5maWx0ZXJpbmdTZXJ2aWNlLnVucGlubmVkRmlsdGVyYWJsZUNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBuZXh0IGlzIG5vdCBmaWx0ZXIgY2VsbFxuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZUZpcnN0Q2VsbElmUG9zc2libGUoZXZlbnRBcmdzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXh0Q29sdW1uID0gY29sc1tuZXh0RmlsdGVyYWJsZUluZGV4XTtcbiAgICAgICAgY29uc3QgbmV4dFZpc2libGVJbmRleCA9IG5leHRDb2x1bW4udmlzaWJsZUluZGV4O1xuICAgICAgICBpZiAoIWNvbHVtbi5waW5uZWQgJiYgIXRoaXMuaXNDb2x1bW5SaWdodEVkZ2VWaXNpYmxlKG5leHRWaXNpYmxlSW5kZXgpKSB7XG4gICAgICAgICAgICBldmVudEFyZ3MucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5maWx0ZXJpbmdTZXJ2aWNlLnNjcm9sbFRvRmlsdGVyQ2VsbChuZXh0Q29sdW1uLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT09IHRoaXMuZ2V0TGFzdFBpbm5lZEZpbHRlcmFibGVDb2x1bW4oKSAmJiAhdGhpcy5pc0NvbHVtblJpZ2h0RWRnZVZpc2libGUobmV4dFZpc2libGVJbmRleCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5maWx0ZXJpbmdTZXJ2aWNlLnNjcm9sbFRvRmlsdGVyQ2VsbChuZXh0Q29sdW1uLCBmYWxzZSk7XG4gICAgICAgICAgICBldmVudEFyZ3Muc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldExhc3RQaW5uZWRGaWx0ZXJhYmxlQ29sdW1uKCk6IElneENvbHVtbkNvbXBvbmVudCB7XG4gICAgICAgIGNvbnN0IHBpbm5lZEZpbHRlcmFibGVDb2x1bXMgPVxuICAgICAgICAgICAgdGhpcy5ncmlkLnBpbm5lZENvbHVtbnMuZmlsdGVyKGNvbCA9PiAhKGNvbC5jb2x1bW5Hcm91cCkgJiYgY29sLmZpbHRlcmFibGUpO1xuICAgICAgICByZXR1cm4gcGlubmVkRmlsdGVyYWJsZUNvbHVtc1twaW5uZWRGaWx0ZXJhYmxlQ29sdW1zLmxlbmd0aCAtIDFdO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Rmlyc3RQaW5uZWRGaWx0ZXJhYmxlQ29sdW1uKCk6IElneENvbHVtbkNvbXBvbmVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQucGlubmVkQ29sdW1ucy5maWx0ZXIoY29sID0+ICEoY29sLmNvbHVtbkdyb3VwKSAmJiBjb2wuZmlsdGVyYWJsZSlbMF07XG4gICAgfVxuXG4gICAgcHVibGljIHBlcmZvcm1TaGlmdFRhYktleShjdXJyZW50Um93RWwsIHNlbGVjdGVkTm9kZTogSVNlbGVjdGlvbk5vZGUpIHtcbiAgICAgICAgY29uc3Qgcm93SW5kZXggPSBzZWxlY3RlZE5vZGUucm93O1xuICAgICAgICBjb25zdCB2aXNpYmxlQ29sdW1uSW5kZXggPSBzZWxlY3RlZE5vZGUuY29sdW1uO1xuICAgICAgICBjb25zdCBpc1N1bW1hcnkgPSBzZWxlY3RlZE5vZGUuaXNTdW1tYXJ5Um93O1xuICAgICAgICBpZiAoaXNTdW1tYXJ5ICYmIHJvd0luZGV4ID09PSAwICYmIHZpc2libGVDb2x1bW5JbmRleCA9PT0gMCAmJiB0aGlzLmdyaWQucm93TGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZ29Ub0xhc3RCb2R5RWxlbWVudCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNSb3dJbkVkaXRNb2RlKHJvd0luZGV4KSkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlUHJldmlvdXNFZGl0YWJsZShyb3dJbmRleCwgdmlzaWJsZUNvbHVtbkluZGV4KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2aXNpYmxlQ29sdW1uSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGlmIChyb3dJbmRleCA9PT0gMCAmJiB0aGlzLmdyaWQuYWxsb3dGaWx0ZXJpbmcgJiYgdGhpcy5ncmlkLmZpbHRlck1vZGUgPT09IEZpbHRlck1vZGUucXVpY2tGaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVGb2N1c1RvRmlsdGVyQ2VsbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVXAoY3VycmVudFJvd0VsLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3c6IHJvd0luZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uOiB0aGlzLmdyaWQudW5waW5uZWRDb2x1bW5zW3RoaXMuZ3JpZC51bnBpbm5lZENvbHVtbnMubGVuZ3RoIC0gMV0udmlzaWJsZUluZGV4XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0Q2VsbEVsZW1lbnRCeVZpc2libGVJbmRleChyb3dJbmRleCwgdmlzaWJsZUNvbHVtbkluZGV4LCBpc1N1bW1hcnkpO1xuICAgICAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uS2V5ZG93bkFycm93TGVmdChjZWxsLCBzZWxlY3RlZE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNob3VsZFBlcmZvcm1WZXJ0aWNhbFNjcm9sbCh0YXJnZXRSb3dJbmRleDogbnVtYmVyLCB2aXNpYmxlQ29sdW1uSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBjb250YWluZXJUb3BPZmZzZXQgPSBwYXJzZUludCh0aGlzLnZlcnRpY2FsRGlzcGxheUNvbnRhaW5lckVsZW1lbnQuc3R5bGUudG9wLCAxMCk7XG4gICAgICAgIGNvbnN0IHRhcmdldFJvdyA9IHRoaXMuZ3JpZC5zdW1tYXJpZXNSb3dMaXN0LmZpbHRlcihzID0+IHMuaW5kZXggIT09IDApXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuZ3JpZC5yb3dMaXN0LnRvQXJyYXkoKSkuZmluZChyID0+IHIuaW5kZXggPT09IHRhcmdldFJvd0luZGV4KTtcbiAgICAgICAgY29uc3Qgcm93SGVpZ2h0ID0gdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmdldFNpemVBdCh0YXJnZXRSb3dJbmRleCk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IHRoaXMuZ3JpZC5jYWxjSGVpZ2h0ID8gTWF0aC5jZWlsKHRoaXMuZ3JpZC5jYWxjSGVpZ2h0KSA6IDA7XG4gICAgICAgIGNvbnN0IHRhcmdldEVuZFRvcE9mZnNldCA9IHRhcmdldFJvdyA/IHRhcmdldFJvdy5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCArIHJvd0hlaWdodCArIGNvbnRhaW5lclRvcE9mZnNldCA6XG4gICAgICAgICAgICBjb250YWluZXJIZWlnaHQgKyByb3dIZWlnaHQ7XG4gICAgICAgIGlmICghdGFyZ2V0Um93IHx8IHRhcmdldFJvdy5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCA8IE1hdGguYWJzKGNvbnRhaW5lclRvcE9mZnNldClcbiAgICAgICAgICAgIHx8IGNvbnRhaW5lckhlaWdodCAmJiBjb250YWluZXJIZWlnaHQgPCB0YXJnZXRFbmRUb3BPZmZzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHBlcmZvcm1WZXJ0aWNhbFNjcm9sbFRvQ2VsbChyb3dJbmRleDogbnVtYmVyLCB2aXNpYmxlQ29sSW5kZXg6IG51bWJlciwgY2I/OiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5zY3JvbGxUbyhyb3dJbmRleCk7XG4gICAgICAgIHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5vbkNodW5rTG9hZFxuICAgICAgICAgICAgLnBpcGUoZmlyc3QoKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHBlcmZvcm1Ib3Jpem9udGFsU2Nyb2xsVG9DZWxsKFxuICAgICAgICByb3dJbmRleDogbnVtYmVyLCB2aXNpYmxlQ29sdW1uSW5kZXg6IG51bWJlciwgaXNTdW1tYXJ5OiBib29sZWFuID0gZmFsc2UsIGNiPzogKCkgPT4gdm9pZCkge1xuICAgICAgICBjb25zdCB1bnBpbm5lZEluZGV4ID0gdGhpcy5nZXRDb2x1bW5VbnBpbm5lZEluZGV4KHZpc2libGVDb2x1bW5JbmRleCk7XG4gICAgICAgdGhpcy5nZXRGb2N1c2FibGVHcmlkKCkubmF0aXZlRWxlbWVudC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgIHRoaXMuZ3JpZC5wYXJlbnRWaXJ0RGlyLm9uQ2h1bmtMb2FkXG4gICAgICAgICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbEVsZW1lbnQgPSB0aGlzLmdldENlbGxFbGVtZW50QnlWaXNpYmxlSW5kZXgocm93SW5kZXgsIHZpc2libGVDb2x1bW5JbmRleCwgaXNTdW1tYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsRWxlbWVudC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsU2Nyb2xsKHJvd0luZGV4KS5zY3JvbGxUbyh1bnBpbm5lZEluZGV4KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0Rm9jdXNhYmxlR3JpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0Um93QnlJbmRleChpbmRleCwgc2VsZWN0b3IgPSB0aGlzLmdldFJvd1NlbGVjdG9yKCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgJHtzZWxlY3Rvcn1bZGF0YS1yb3dpbmRleD1cIiR7aW5kZXh9XCJdYCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldE5leHRSb3dCeUluZGV4KG5leHRJbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnRib2R5Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGBbZGF0YS1yb3dpbmRleD1cIiR7bmV4dEluZGV4fVwiXWApO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0QWxsUm93cygpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLmdldFJvd1NlbGVjdG9yKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0Q2VsbFNlbGVjdG9yKHZpc2libGVJbmRleD86IG51bWJlciwgaXNTdW1tYXJ5ID0gZmFsc2UpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gaXNTdW1tYXJ5ID8gJ2lneC1ncmlkLXN1bW1hcnktY2VsbCcgOiAnaWd4LWdyaWQtY2VsbCc7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFJvd1NlbGVjdG9yKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnaWd4LWdyaWQtcm93JztcbiAgICB9XG59XG4iXX0=