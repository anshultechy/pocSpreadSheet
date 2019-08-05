/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { IgxGridNavigationService } from '../grid-navigation.service';
import { first } from 'rxjs/operators';
import { FilterMode } from '../grid-base.component';
import { isIE } from '../../core/utils';
export class IgxHierarchicalGridNavigationService extends IgxGridNavigationService {
    /**
     * @protected
     * @param {?=} visibleIndex
     * @param {?=} isSummary
     * @return {?}
     */
    getCellSelector(visibleIndex, isSummary = false) {
        return isSummary ? 'igx-grid-summary-cell' : 'igx-hierarchical-grid-cell';
    }
    /**
     * @protected
     * @return {?}
     */
    getRowSelector() {
        return 'igx-hierarchical-grid-row';
    }
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    getRowByIndex(index) {
        /** @type {?} */
        const selector = this.getRowSelector();
        /** @type {?} */
        const rows = Array.from(this.grid.nativeElement.querySelectorAll(`${selector}[data-rowindex="${index}"]`));
        /** @type {?} */
        let row;
        rows.forEach((r) => {
            /** @type {?} */
            const parentGrid = this.getClosestElemByTag(r, 'igx-hierarchical-grid');
            if (parentGrid && parentGrid.getAttribute('id') === this.grid.id) {
                row = r;
            }
        });
        return row;
    }
    /**
     * @private
     * @param {?=} grid
     * @return {?}
     */
    getChildContainer(grid) {
        /** @type {?} */
        const currGrid = grid || this.grid;
        return currGrid.nativeElement.parentNode.parentNode.parentNode;
    }
    /**
     * @private
     * @param {?=} grid
     * @return {?}
     */
    getChildGridRowContainer(grid) {
        /** @type {?} */
        const currGrid = grid || this.grid;
        return currGrid.nativeElement.parentNode.parentNode;
    }
    /**
     * @private
     * @param {?} childGridID
     * @param {?} grid
     * @return {?}
     */
    getChildGrid(childGridID, grid) {
        /** @type {?} */
        const cgrid = grid.hgridAPI.getChildGrids(true).filter((g) => g.id === childGridID)[0];
        return cgrid;
    }
    /**
     * @private
     * @param {?} grid
     * @return {?}
     */
    _isScrolledToBottom(grid) {
        /** @type {?} */
        const scrollTop = grid.verticalScrollContainer.getVerticalScroll().scrollTop;
        /** @type {?} */
        const scrollHeight = grid.verticalScrollContainer.getVerticalScroll().scrollHeight;
        return scrollHeight === 0 || Math.round(scrollTop + grid.verticalScrollContainer.igxForContainerSize) === scrollHeight;
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    getIsChildAtIndex(index) {
        return this.grid.isChildGridRecord(this.grid.verticalScrollContainer.igxForOf[index]);
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
        if (isSummary) {
            /** @type {?} */
            const summaryRow = this.grid.summariesRowList.toArray()[0].nativeElement;
            return summaryRow.querySelector(`${cellSelector}[data-visibleIndex="${visibleColumnIndex}"]`);
        }
        /** @type {?} */
        const row = this.getRowByIndex(rowIndex);
        return row.querySelector(`${cellSelector}[data-rowindex="${rowIndex}"][data-visibleIndex="${visibleColumnIndex}"]`);
    }
    /**
     * @param {?} rowElement
     * @param {?} selectedNode
     * @return {?}
     */
    navigateUp(rowElement, selectedNode) {
        /** @type {?} */
        const prevElem = rowElement.previousElementSibling;
        /** @type {?} */
        const visibleColumnIndex = selectedNode.column;
        /** @type {?} */
        const currentRowIndex = selectedNode.row;
        if (prevElem) {
            /** @type {?} */
            const nodeName = prevElem.children[0].nodeName.toLowerCase();
            /** @type {?} */
            const isElemChildGrid = nodeName.toLowerCase() === 'igx-child-grid-row';
            if (isElemChildGrid) {
                this.focusPrevChild(prevElem, visibleColumnIndex, this.grid);
            }
            else {
                if (this.grid.parent !== null) {
                    // currently navigating in child grid
                    this._navigateUpInChild(rowElement, currentRowIndex, visibleColumnIndex);
                }
                else {
                    super.navigateUp(rowElement, selectedNode);
                }
            }
        }
        else if (currentRowIndex !== 0) {
            // handle scenario when prev item is child grid but is not yet in view
            /** @type {?} */
            const isPrevChildGrid = this.getIsChildAtIndex(currentRowIndex - 1);
            if (!isPrevChildGrid) {
                super.navigateUp(rowElement, selectedNode);
            }
            else {
                this.scrollGrid(this.grid, -rowElement.offsetHeight, () => {
                    rowElement = this.getRowByIndex(currentRowIndex);
                    this.navigateUp(rowElement, selectedNode);
                });
            }
        }
        else if (this.grid.parent !== null &&
            currentRowIndex === 0) {
            // move to prev row in sibling layout or parent
            this.focusPrev(visibleColumnIndex);
        }
    }
    /**
     * @param {?} rowElement
     * @param {?} selectedNode
     * @return {?}
     */
    navigateDown(rowElement, selectedNode) {
        /** @type {?} */
        const nextElem = rowElement.nextElementSibling;
        /** @type {?} */
        const visibleColumnIndex = selectedNode.column;
        /** @type {?} */
        const currentRowIndex = selectedNode.row;
        if (nextElem) {
            // next elem is in DOM
            /** @type {?} */
            const nodeName = nextElem.children[0].nodeName.toLowerCase();
            /** @type {?} */
            const isNextElemChildGrid = nodeName.toLowerCase() === 'igx-child-grid-row';
            if (isNextElemChildGrid) {
                this.focusNextChild(nextElem, visibleColumnIndex, this.grid);
            }
            else {
                if (this.grid.parent !== null) {
                    // currently navigating in child grid
                    this._navigateDownInChild(rowElement, currentRowIndex, visibleColumnIndex);
                }
                else {
                    super.navigateDown(rowElement, selectedNode);
                }
            }
        }
        else if (currentRowIndex !== this.grid.verticalScrollContainer.igxForOf.length - 1) {
            // scroll next in view
            super.navigateDown(rowElement, selectedNode);
        }
        else if (this.grid.parent !== null &&
            currentRowIndex === this.grid.verticalScrollContainer.igxForOf.length - 1) {
            // move to next row in sibling layout or in parent
            this.focusNext(visibleColumnIndex);
        }
    }
    /**
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    navigateTop(visibleColumnIndex) {
        if (this.grid.parent !== null) {
            // navigating in child
            /** @type {?} */
            const verticalScroll = this.grid.verticalScrollContainer.getVerticalScroll();
            /** @type {?} */
            const cellSelector = this.getCellSelector(visibleColumnIndex);
            if (verticalScroll.scrollTop === 0) {
                this._focusScrollCellInView(visibleColumnIndex);
            }
            else {
                this.scrollGrid(this.grid, 'top', () => {
                    /** @type {?} */
                    const cells = this.grid.nativeElement.querySelectorAll(`${cellSelector}[data-visibleIndex="${visibleColumnIndex}"]`);
                    if (cells.length > 0) {
                        this._focusScrollCellInView(visibleColumnIndex);
                    }
                });
            }
        }
        else {
            super.navigateTop(visibleColumnIndex);
        }
    }
    /**
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    navigateBottom(visibleColumnIndex) {
        // handle scenario where last index is child grid
        // in that case focus cell in last data row
        /** @type {?} */
        const lastIndex = this.grid.verticalScrollContainer.igxForOf.length - 1;
        if (this.getIsChildAtIndex(lastIndex)) {
            /** @type {?} */
            const targetIndex = lastIndex - 1;
            /** @type {?} */
            const scrTopPosition = this.grid.verticalScrollContainer.getScrollForIndex(targetIndex, true);
            /** @type {?} */
            const verticalScroll = this.grid.verticalScrollContainer.getVerticalScroll();
            /** @type {?} */
            const cellSelector = this.getCellSelector(visibleColumnIndex);
            if (verticalScroll.scrollTop === scrTopPosition) {
                /** @type {?} */
                const cells = this.getRowByIndex(targetIndex).querySelectorAll(`${cellSelector}[data-visibleIndex="${visibleColumnIndex}"]`);
                cells[cells.length - 1].focus();
            }
            else {
                this.scrollGrid(this.grid, scrTopPosition - verticalScroll.scrollTop, () => {
                    /** @type {?} */
                    const cells = this.getRowByIndex(targetIndex).querySelectorAll(`${cellSelector}[data-visibleIndex="${visibleColumnIndex}"]`);
                    if (cells.length > 0) {
                        cells[cells.length - 1].focus();
                    }
                });
            }
        }
        else if (this.grid.parent !== null) {
            /** @type {?} */
            const childContainer = this.grid.nativeElement.parentNode.parentNode;
            /** @type {?} */
            const diff = childContainer.getBoundingClientRect().bottom - this.grid.rootGrid.tbody.nativeElement.getBoundingClientRect().bottom;
            /** @type {?} */
            const endIsVisible = diff < 0;
            /** @type {?} */
            const scrollable = this.getNextScrollableDown(this.grid);
            if (!endIsVisible) {
                this.scrollGrid(scrollable.grid, diff, () => super.navigateBottom(visibleColumnIndex));
            }
            else {
                super.navigateBottom(visibleColumnIndex);
            }
        }
        else {
            super.navigateBottom(visibleColumnIndex);
        }
    }
    /**
     * @return {?}
     */
    goToLastCell() {
        // handle scenario where last index is child grid
        // in that case focus last cell in last data row
        /** @type {?} */
        const lastIndex = this.grid.verticalScrollContainer.igxForOf.length - 1;
        if (this.getIsChildAtIndex(lastIndex)) {
            /** @type {?} */
            const targetIndex = lastIndex - 1;
            /** @type {?} */
            const scrTopPosition = this.grid.verticalScrollContainer.getScrollForIndex(targetIndex, true);
            /** @type {?} */
            const verticalScroll = this.grid.verticalScrollContainer.getVerticalScroll();
            if (verticalScroll.scrollTop === scrTopPosition) {
                this.onKeydownEnd(targetIndex);
            }
            else {
                this.scrollGrid(this.grid, scrTopPosition - verticalScroll.scrollTop, () => {
                    this.onKeydownEnd(targetIndex);
                });
            }
        }
        else {
            super.goToLastCell();
        }
    }
    /**
     * @param {?} rowIndex
     * @param {?=} isSummary
     * @return {?}
     */
    onKeydownEnd(rowIndex, isSummary = false) {
        if (this.grid.parent && !isSummary) {
            // handle scenario where last child row might not be in view
            // parent should scroll to child grid end
            /** @type {?} */
            const childContainer = this.grid.nativeElement.parentNode.parentNode;
            /** @type {?} */
            const diffBottom = childContainer.getBoundingClientRect().bottom - this.grid.rootGrid.nativeElement.getBoundingClientRect().bottom;
            /** @type {?} */
            const row = this.grid.getRowByIndex(rowIndex).element.nativeElement;
            /** @type {?} */
            const rowBottom = row.getBoundingClientRect().bottom;
            /** @type {?} */
            const rowIsVisible = rowBottom <= this.grid.rootGrid.tbody.nativeElement.getBoundingClientRect().bottom;
            /** @type {?} */
            const gridTop = this._getMaxTop(this.grid);
            /** @type {?} */
            const diffTop = row.getBoundingClientRect().bottom -
                row.offsetHeight - gridTop;
            /** @type {?} */
            const endIsVisible = diffBottom <= 0;
            /** @type {?} */
            const topVisible = diffTop >= 0;
            if (!endIsVisible && !rowIsVisible) {
                this.scrollGrid(this.grid.parent, diffBottom, () => super.onKeydownEnd(rowIndex));
            }
            else if (!topVisible) {
                /** @type {?} */
                const scrGrid = this.grid.verticalScrollContainer.getVerticalScroll().scrollTop !== 0 ? this.grid :
                    this.getNextScrollable(this.grid).grid;
                /** @type {?} */
                const topGrid = scrGrid.tbody.nativeElement.getBoundingClientRect().top >
                    this.grid.rootGrid.tbody.nativeElement.getBoundingClientRect().top ? scrGrid : this.grid.rootGrid;
                this.scrollGrid(topGrid, diffTop, () => super.onKeydownEnd(rowIndex));
            }
            else {
                super.onKeydownEnd(rowIndex, isSummary);
            }
        }
        else {
            super.onKeydownEnd(rowIndex, isSummary);
        }
    }
    /**
     * @return {?}
     */
    goToFirstCell() {
        /** @type {?} */
        const verticalScroll = this.grid.verticalScrollContainer.getVerticalScroll();
        /** @type {?} */
        const horizontalScroll = this.grid.dataRowList.first.virtDirRow.getHorizontalScroll();
        if (verticalScroll.scrollTop === 0 && this.grid.parent) {
            // scroll parent so that current child is in view
            if (!horizontalScroll.clientWidth || parseInt(horizontalScroll.scrollLeft, 10) <= 1 || this.grid.pinnedColumns.length) {
                this.navigateTop(0);
            }
            else {
                this.horizontalScroll(this.grid.dataRowList.first.index).scrollTo(0);
                this.grid.parentVirtDir.onChunkLoad
                    .pipe(first())
                    .subscribe(() => {
                    this.navigateTop(0);
                });
            }
        }
        else {
            super.goToFirstCell();
        }
    }
    /**
     * @param {?} currentRowEl
     * @param {?} selectedNode
     * @return {?}
     */
    performTab(currentRowEl, selectedNode) {
        if (this.grid.rowInEditMode) {
            super.performTab(currentRowEl, selectedNode);
            return;
        }
        /** @type {?} */
        const rowIndex = selectedNode.row;
        /** @type {?} */
        const visibleColumnIndex = selectedNode.column;
        /** @type {?} */
        const isSummaryRow = selectedNode.isSummaryRow;
        /** @type {?} */
        const summaryRows = this.grid.summariesRowList.toArray();
        /** @type {?} */
        const hasSummaries = summaryRows.length > 0;
        /** @type {?} */
        const isLastDataRow = rowIndex === this.grid.verticalScrollContainer.igxForOf.length - 1;
        /** @type {?} */
        const nextIsDataRow = this.grid.dataRowList.find(row => row.index === rowIndex + 1);
        /** @type {?} */
        const isLastColumn = this.grid.unpinnedColumns[this.grid.unpinnedColumns.length - 1].visibleIndex === visibleColumnIndex;
        /** @type {?} */
        const isLastSummaryRow = hasSummaries && isSummaryRow;
        /** @type {?} */
        const nextIndex = rowIndex + 1;
        /** @type {?} */
        const virt = this.grid.verticalScrollContainer;
        /** @type {?} */
        const isNextChild = nextIndex <= virt.igxForOf.length - 1 &&
            this.grid.isChildGridRecord(virt.igxForOf[nextIndex]);
        if (!nextIsDataRow && !(isLastDataRow && hasSummaries) && isLastColumn && !isSummaryRow) {
            // navigating in child, next is not summary
            /** @type {?} */
            const childContainer = this.getChildGridRowContainer();
            /** @type {?} */
            const nextIsSiblingChild = this.grid.parent ? !!childContainer.nextElementSibling : false;
            if (nextIsSiblingChild) {
                this.focusNextChildDOMElem(childContainer, this.grid.parent);
            }
            else if (isNextChild) {
                /** @type {?} */
                const isInView = virt.state.startIndex + virt.state.chunkSize > nextIndex;
                if (!isInView) {
                    this.scrollGrid(this.grid, 'next', () => {
                        this.focusNextChildDOMElem(currentRowEl, this.grid);
                    });
                }
                else {
                    this.focusNextChildDOMElem(currentRowEl, this.grid);
                }
            }
            else {
                this.navigateDown(currentRowEl, { row: rowIndex, column: 0 });
            }
        }
        else if (isLastSummaryRow && isLastColumn && this.grid.parent) {
            // navigating in child summary, next is parent summary or next parent row
            /** @type {?} */
            const parent = this.grid.parent;
            /** @type {?} */
            const parentHasSummary = parent.summariesRowList.toArray().length > 0;
            /** @type {?} */
            const parentRowIndex = parseInt(this.getClosestElemByTag(currentRowEl, 'igx-child-grid-row').parentNode.getAttribute('data-rowindex'), 10);
            /** @type {?} */
            const isLastRowInParent = parent.verticalScrollContainer.igxForOf.length - 1 === parentRowIndex;
            // check if next is sibling
            /** @type {?} */
            const childRowContainer = this.getChildGridRowContainer(this.grid);
            /** @type {?} */
            const nextIsSiblingChild = !!childRowContainer.nextElementSibling;
            if (isLastRowInParent && parentHasSummary && !nextIsSiblingChild) {
                // next is parent summary
                /** @type {?} */
                const parentSummary = parent.summariesRowList.toArray()[0].nativeElement;
                parent.navigation.focusNextRow(parentSummary, 0, this.grid.rootGrid, true);
            }
            else {
                // next is sibling or parent
                this.focusNext(0);
            }
        }
        else if (isLastDataRow && hasSummaries && isLastColumn && this.grid.parent) {
            // navigating in child rows, next is child grid's summary row
            this.focusNextRow(summaryRows[0].nativeElement, 0, this.grid.parent, true);
        }
        else {
            super.performTab(currentRowEl, selectedNode);
        }
    }
    /**
     * @private
     * @param {?} currentRowEl
     * @param {?} grid
     * @return {?}
     */
    focusNextChildDOMElem(currentRowEl, grid) {
        /** @type {?} */
        const gridElem = currentRowEl.nextElementSibling.querySelector('igx-hierarchical-grid');
        /** @type {?} */
        const childGridID = gridElem.getAttribute('id');
        /** @type {?} */
        const childGrid = this.getChildGrid(childGridID, grid);
        if (childGrid.allowFiltering && childGrid.filterMode === FilterMode.quickFilter) {
            childGrid.navigation.moveFocusToFilterCell(true);
            return;
        }
        this.focusNextChild(currentRowEl.nextElementSibling, 0, grid);
    }
    /**
     * @param {?} column
     * @param {?} eventArgs
     * @return {?}
     */
    navigatePrevFilterCell(column, eventArgs) {
        if (column.visibleIndex === 0 && this.grid.parent) {
            eventArgs.preventDefault();
            /** @type {?} */
            let targetGrid = this.grid.parent;
            /** @type {?} */
            const prevSiblingChild = this.getChildGridRowContainer().previousElementSibling;
            if (prevSiblingChild) {
                /** @type {?} */
                const gridElem = prevSiblingChild.querySelectorAll('igx-hierarchical-grid')[0];
                targetGrid = this.getChildGrid(gridElem.getAttribute('id'), this.grid.parent);
            }
            this.focusPrev(targetGrid.unpinnedColumns[targetGrid.unpinnedColumns.length - 1].visibleIndex);
        }
        else {
            super.navigatePrevFilterCell(column, eventArgs);
        }
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
            /** @type {?} */
            const dataRows = this.grid.rowList.toArray();
            /** @type {?} */
            const hasRows = dataRows.length !== 0;
            /** @type {?} */
            const summaryRows = this.grid.summariesRowList.toArray();
            /** @type {?} */
            const hasSummaries = summaryRows.length > 0 && summaryRows[0].summaryCells.length > 0;
            if (hasRows) {
                this.focusNextRow(dataRows[0].nativeElement, 0, this.grid, false);
            }
            else if (hasSummaries) {
                this.focusNextRow(summaryRows[0].nativeElement, 0, this.grid, true);
            }
            else {
                this.focusNext(0);
            }
            eventArgs.preventDefault();
        }
        else {
            super.navigateNextFilterCell(column, eventArgs);
        }
    }
    /**
     * @param {?} currentRowEl
     * @param {?} selectedNode
     * @return {?}
     */
    performShiftTabKey(currentRowEl, selectedNode) {
        if (this.grid.rowInEditMode) {
            super.performShiftTabKey(currentRowEl, selectedNode);
            return;
        }
        /** @type {?} */
        const rowIndex = selectedNode.row;
        /** @type {?} */
        const visibleColumnIndex = selectedNode.column;
        /** @type {?} */
        const isSummary = selectedNode.isSummaryRow;
        if (visibleColumnIndex === 0 && rowIndex === 0 && this.grid.parent && !isSummary) {
            if (this.grid.allowFiltering && this.grid.filterMode === FilterMode.quickFilter) {
                this.moveFocusToFilterCell();
            }
            else {
                /** @type {?} */
                const prevSiblingChild = this.getChildGridRowContainer().previousElementSibling;
                if (prevSiblingChild) {
                    /** @type {?} */
                    const gridElem = prevSiblingChild.querySelectorAll('igx-hierarchical-grid')[0];
                    this.performShiftTabIntoChild(gridElem, currentRowEl, rowIndex);
                }
                else {
                    /** @type {?} */
                    const selNode = {
                        row: rowIndex,
                        column: this.grid.parent.unpinnedColumns[this.grid.parent.unpinnedColumns.length - 1].visibleIndex
                    };
                    this.navigateUp(currentRowEl, selNode);
                }
            }
        }
        else if (visibleColumnIndex === 0 && currentRowEl.previousElementSibling &&
            currentRowEl.previousElementSibling.children[0].tagName.toLowerCase() === 'igx-child-grid-row') {
            /** @type {?} */
            const gridElem = this.getLastGridElem(currentRowEl.previousElementSibling);
            this.performShiftTabIntoChild(gridElem, currentRowEl, rowIndex);
        }
        else if (visibleColumnIndex === 0 && isSummary) {
            /** @type {?} */
            const lastRowIndex = this.grid.verticalScrollContainer.igxForOf.length - 1;
            if (lastRowIndex === -1) {
                // no child data
                if (this.grid.allowFiltering && this.grid.filterMode === FilterMode.quickFilter) {
                    this.moveFocusToFilterCell();
                }
                else {
                    /** @type {?} */
                    const selNode = {
                        row: rowIndex,
                        column: this.grid.parent.unpinnedColumns[this.grid.parent.unpinnedColumns.length - 1].visibleIndex
                    };
                    this.navigateUp(currentRowEl, selNode);
                }
            }
            else if (!this.getIsChildAtIndex(lastRowIndex)) {
                super.goToLastCell();
            }
            else {
                /** @type {?} */
                const scrTopPosition = this.grid.verticalScrollContainer.getScrollForIndex(lastRowIndex, true);
                /** @type {?} */
                const verticalScroll = this.grid.verticalScrollContainer.getVerticalScroll();
                if (verticalScroll.scrollTop === scrTopPosition || isNaN(scrTopPosition)) {
                    /** @type {?} */
                    const closestChild = this.getLastGridElem(this.grid.getRowByIndex(lastRowIndex).nativeElement.parentElement);
                    this.performShiftTabIntoChild(closestChild, currentRowEl, rowIndex);
                }
                else {
                    this.scrollGrid(this.grid, scrTopPosition - verticalScroll.scrollTop, () => {
                        /** @type {?} */
                        const closestChild = this.getLastGridElem(this.grid.getRowByIndex(lastRowIndex).nativeElement.parentElement);
                        this.performShiftTabIntoChild(closestChild, currentRowEl, rowIndex);
                    });
                }
            }
        }
        else {
            super.performShiftTabKey(currentRowEl, selectedNode);
        }
    }
    /**
     * @return {?}
     */
    getFocusableGrid() {
        return (isIE() && this.grid.rootGrid) ? this.grid.rootGrid : this.grid;
    }
    /**
     * @private
     * @param {?} trContainer
     * @return {?}
     */
    getLastGridElem(trContainer) {
        /** @type {?} */
        const children = trContainer.children;
        /** @type {?} */
        const closestChild = children[children.length - 1].children[0].children[0];
        return closestChild;
    }
    /**
     * @private
     * @param {?} gridElem
     * @param {?} currentRowEl
     * @param {?} rowIndex
     * @return {?}
     */
    performShiftTabIntoChild(gridElem, currentRowEl, rowIndex) {
        /** @type {?} */
        const childGridID = gridElem.getAttribute('id');
        /** @type {?} */
        const childGrid = this.getChildGrid(childGridID, this.grid) || this.getChildGrid(childGridID, this.grid.parent);
        /** @type {?} */
        const lastIndex = childGrid.unpinnedColumns[childGrid.unpinnedColumns.length - 1].visibleIndex;
        /** @type {?} */
        const summaryRows = childGrid.summariesRowList.toArray();
        if (summaryRows.length > 0 && summaryRows[0].summaryCells.length > 0) {
            // move focus to last summary row cell
            /** @type {?} */
            const summaryRow = summaryRows[0].nativeElement;
            this.focusPrevRow(summaryRow, lastIndex, childGrid, true, true);
        }
        else if (childGrid.rowList.toArray().length === 0 &&
            childGrid.allowFiltering && childGrid.filterMode === FilterMode.quickFilter) {
            // move to filter cell
            childGrid.navigation.moveFocusToFilterCell();
        }
        else {
            // move to next cell
            this.navigateUp(currentRowEl, { row: rowIndex, column: lastIndex });
        }
    }
    /**
     * @private
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    _focusScrollCellInView(visibleColumnIndex) {
        /** @type {?} */
        const cellSelector = this.getCellSelector(visibleColumnIndex);
        /** @type {?} */
        const cells = this.grid.nativeElement.querySelectorAll(`${cellSelector}[data-visibleIndex="${visibleColumnIndex}"]`);
        /** @type {?} */
        const cell = cells[0];
        /** @type {?} */
        const childContainer = this.grid.nativeElement.parentNode.parentNode;
        /** @type {?} */
        const scrTop = this.grid.parent.verticalScrollContainer.getVerticalScroll().scrollTop;
        /** @type {?} */
        const maxScroll = this.grid.parent.verticalScrollContainer.getVerticalScroll().scrollHeight - this.grid.parent.calcHeight;
        /** @type {?} */
        const dc = childContainer.parentNode.parentNode;
        /** @type {?} */
        const scrWith = parseInt(dc.style.top, 10);
        /** @type {?} */
        const parentRowOffset = childContainer.parentNode.offsetTop + this.grid.nativeElement.offsetTop +
            scrWith;
        if ((scrTop === 0 && parentRowOffset < 0) || parentRowOffset === 0 || (scrTop === maxScroll && parentRowOffset > 0)) {
            // cell is in view
            cell.focus({ preventScroll: true });
        }
        else {
            // scroll parent so that cell is in view
            this.scrollGrid(this.grid.parent, parentRowOffset, () => cell.focus({ preventScroll: true }));
        }
    }
    /**
     * @private
     * @param {?} elem
     * @param {?} visibleColumnIndex
     * @param {?} grid
     * @return {?}
     */
    focusNextChild(elem, visibleColumnIndex, grid) {
        /** @type {?} */
        const gridElem = elem.querySelector('igx-hierarchical-grid');
        /** @type {?} */
        const childGridID = gridElem.getAttribute('id');
        /** @type {?} */
        const childGrid = this.getChildGrid(childGridID, grid);
        if (childGrid.rowList.toArray().length === 0) {
            this.focusNext(visibleColumnIndex, childGrid);
            return;
        }
        // Update column index since the next child can have in general less columns than visibleColumnIndex value.
        /** @type {?} */
        const lastCellIndex = childGrid.unpinnedColumns[childGrid.unpinnedColumns.length - 1].visibleIndex;
        visibleColumnIndex = Math.min(lastCellIndex, visibleColumnIndex);
        if (childGrid.verticalScrollContainer.state.startIndex !== 0) {
            // scroll to top
            this.scrollGrid(childGrid, 'top', () => this.focusNextRow(elem, visibleColumnIndex, childGrid));
        }
        else {
            this.focusNextRow(elem, visibleColumnIndex, childGrid);
        }
    }
    /**
     * @private
     * @param {?} elem
     * @param {?} visibleColumnIndex
     * @param {?} grid
     * @return {?}
     */
    focusPrevChild(elem, visibleColumnIndex, grid) {
        /** @type {?} */
        const grids = [];
        /** @type {?} */
        const gridElems = Array.from(elem.querySelectorAll('igx-hierarchical-grid'));
        /** @type {?} */
        const childLevel = grid.childLayoutList.first.level;
        gridElems.forEach((hg) => {
            /** @type {?} */
            const parentRow = this.getClosestElemByTag(hg, 'igx-child-grid-row');
            if (parentRow && parseInt(parentRow.getAttribute('data-level'), 10) === childLevel) {
                grids.push(hg);
            }
        });
        /** @type {?} */
        const gridElem = grids[grids.length - 1];
        /** @type {?} */
        const childGridID = gridElem.getAttribute('id');
        /** @type {?} */
        const childGrid = this.getChildGrid(childGridID, grid);
        if (childGrid.rowList.toArray().length === 0) {
            this.focusPrev(visibleColumnIndex, childGrid);
            return;
        }
        // Update column index since the previous child can have in general less columns than visibleColumnIndex value.
        /** @type {?} */
        const lastCellIndex = childGrid.unpinnedColumns[childGrid.unpinnedColumns.length - 1].visibleIndex;
        visibleColumnIndex = Math.min(lastCellIndex, visibleColumnIndex);
        /** @type {?} */
        const isScrolledToBottom = this._isScrolledToBottom(childGrid);
        /** @type {?} */
        const lastIndex = childGrid.verticalScrollContainer.igxForOf.length - 1;
        if (!isScrolledToBottom) {
            // scroll to end
            this.scrollGrid(childGrid, 'bottom', () => this.focusPrevChild(elem, visibleColumnIndex, grid));
        }
        else {
            /** @type {?} */
            const lastRowInChild = childGrid.getRowByIndex(lastIndex);
            /** @type {?} */
            const isChildGrid = lastRowInChild.nativeElement.nodeName.toLowerCase() === 'igx-child-grid-row';
            if (isChildGrid) {
                this.focusPrevChild(lastRowInChild.nativeElement.parentNode, visibleColumnIndex, childGrid);
            }
            else {
                this.focusPrevRow(lastRowInChild.nativeElement, visibleColumnIndex, childGrid, true);
            }
        }
    }
    /**
     * @private
     * @param {?} visibleColumnIndex
     * @param {?=} grid
     * @return {?}
     */
    focusPrev(visibleColumnIndex, grid) {
        /** @type {?} */
        const currGrid = grid || this.grid;
        /** @type {?} */
        let parentContainer = this.getChildContainer(currGrid);
        /** @type {?} */
        let childRowContainer = this.getChildGridRowContainer(currGrid);
        /** @type {?} */
        const prevIsSiblingChild = !!childRowContainer.previousElementSibling;
        /** @type {?} */
        let prev = childRowContainer.previousElementSibling || parentContainer.previousElementSibling;
        if (prev) {
            if (prevIsSiblingChild) {
                this.focusPrevChild(prev, visibleColumnIndex, currGrid.parent);
            }
            else {
                this.focusPrevRow(prev, visibleColumnIndex, currGrid.parent);
            }
        }
        else {
            this.scrollGrid(currGrid.parent, 'prev', () => {
                parentContainer = this.getChildContainer(grid);
                childRowContainer = this.getChildGridRowContainer(grid);
                prev = childRowContainer.previousElementSibling || parentContainer.previousElementSibling;
                if (prevIsSiblingChild) {
                    this.focusPrevChild(prev, visibleColumnIndex, currGrid.parent);
                }
                else {
                    this.focusPrevRow(prev, visibleColumnIndex, currGrid.parent);
                }
            });
        }
    }
    /**
     * @private
     * @param {?} grid
     * @return {?}
     */
    getNextParentInfo(grid) {
        // find next parent that is not at bottom
        /** @type {?} */
        let currGrid = grid.parent;
        /** @type {?} */
        let nextElem = this.getChildContainer(grid).nextElementSibling;
        while (!nextElem && currGrid.parent !== null) {
            nextElem = this.getChildContainer(currGrid).nextElementSibling;
            currGrid = currGrid.parent;
        }
        return { grid: currGrid, nextElement: nextElem };
    }
    /**
     * @private
     * @param {?} grid
     * @return {?}
     */
    getNextScrollable(grid) {
        /** @type {?} */
        let currGrid = grid.parent;
        if (!currGrid) {
            return { grid: grid, prev: null };
        }
        /** @type {?} */
        let nonScrollable = currGrid.verticalScrollContainer.getVerticalScroll().scrollTop === 0;
        /** @type {?} */
        let prev = grid;
        while (nonScrollable && currGrid.parent !== null) {
            prev = currGrid;
            currGrid = currGrid.parent;
            nonScrollable = currGrid.verticalScrollContainer.getVerticalScroll().scrollTop === 0;
        }
        return { grid: currGrid, prev: prev };
    }
    /**
     * @private
     * @param {?} visibleColumnIndex
     * @param {?=} grid
     * @return {?}
     */
    focusNext(visibleColumnIndex, grid) {
        /** @type {?} */
        const currGrid = grid || this.grid;
        /** @type {?} */
        const parentInfo = this.getNextParentInfo(currGrid);
        /** @type {?} */
        const nextParentGrid = parentInfo.grid;
        /** @type {?} */
        let nextParentElem = parentInfo.nextElement;
        /** @type {?} */
        let childRowContainer = this.getChildGridRowContainer(currGrid);
        /** @type {?} */
        const nextIsSiblingChild = !!childRowContainer.nextElementSibling;
        /** @type {?} */
        let next = childRowContainer.nextElementSibling || nextParentElem;
        /** @type {?} */
        const verticalScroll = nextParentGrid.verticalScrollContainer.getVerticalScroll();
        if (next) {
            if (nextIsSiblingChild) {
                this.focusNextChild(next, visibleColumnIndex, nextParentGrid);
            }
            else {
                this.focusNextRow(next, visibleColumnIndex, grid || nextParentGrid);
            }
        }
        else if (verticalScroll.scrollTop !==
            verticalScroll.scrollHeight - nextParentGrid.verticalScrollContainer.igxForContainerSize) {
            this.scrollGrid(nextParentGrid, 'next', () => {
                nextParentElem = parentInfo.nextElement;
                childRowContainer = this.getChildGridRowContainer();
                next = childRowContainer.nextElementSibling || nextParentElem;
                if (next && nextIsSiblingChild) {
                    this.focusNextChild(next, visibleColumnIndex, nextParentGrid);
                }
                else if (next) {
                    this.focusNextRow(next, visibleColumnIndex, grid || nextParentGrid);
                }
            });
        }
    }
    /**
     * @private
     * @param {?} grid
     * @return {?}
     */
    getNextScrollableDown(grid) {
        /** @type {?} */
        let currGrid = grid.parent;
        if (!currGrid) {
            return { grid: grid, prev: null };
        }
        /** @type {?} */
        let scrollTop = currGrid.verticalScrollContainer.getVerticalScroll().scrollTop;
        /** @type {?} */
        let scrollHeight = currGrid.verticalScrollContainer.getVerticalScroll().scrollHeight;
        /** @type {?} */
        let nonScrollable = scrollHeight === 0 ||
            Math.round(scrollTop + currGrid.verticalScrollContainer.igxForContainerSize) === scrollHeight;
        /** @type {?} */
        let prev = grid;
        while (nonScrollable && currGrid.parent !== null) {
            prev = currGrid;
            currGrid = currGrid.parent;
            scrollTop = currGrid.verticalScrollContainer.getVerticalScroll().scrollTop;
            scrollHeight = currGrid.verticalScrollContainer.getVerticalScroll().scrollHeight;
            nonScrollable = scrollHeight === 0 ||
                Math.round(scrollTop + currGrid.verticalScrollContainer.igxForContainerSize) === scrollHeight;
        }
        return { grid: currGrid, prev: prev };
    }
    /**
     * @private
     * @param {?} grid
     * @return {?}
     */
    _getMinBottom(grid) {
        /** @type {?} */
        let currGrid = grid;
        /** @type {?} */
        let bottom = currGrid.tbody.nativeElement.getBoundingClientRect().bottom;
        while (currGrid.parent) {
            currGrid = currGrid.parent;
            bottom = Math.min(bottom, currGrid.tbody.nativeElement.getBoundingClientRect().bottom);
        }
        return bottom;
    }
    /**
     * @private
     * @param {?} grid
     * @return {?}
     */
    _getMaxTop(grid) {
        /** @type {?} */
        let currGrid = grid;
        /** @type {?} */
        let top = currGrid.tbody.nativeElement.getBoundingClientRect().top;
        while (currGrid.parent) {
            currGrid = currGrid.parent;
            top = Math.max(top, currGrid.tbody.nativeElement.getBoundingClientRect().top);
        }
        return top;
    }
    /**
     * @private
     * @param {?} elem
     * @param {?} visibleColumnIndex
     * @param {?} grid
     * @param {?=} isSummary
     * @return {?}
     */
    focusNextRow(elem, visibleColumnIndex, grid, isSummary) {
        /** @type {?} */
        const cellSelector = this.getCellSelector(visibleColumnIndex, isSummary);
        if (grid.navigation.isColumnFullyVisible(visibleColumnIndex)) {
            /** @type {?} */
            const cell = elem.querySelector(`${cellSelector}[data-visibleIndex="${visibleColumnIndex}"]`);
            /** @type {?} */
            const closestScrollableGrid = this.getNextScrollableDown(grid).grid;
            // const diff = cell.getBoundingClientRect().bottom - grid.rootGrid.tbody.nativeElement.getBoundingClientRect().bottom;
            /** @type {?} */
            const gridBottom = this._getMinBottom(grid);
            /** @type {?} */
            const diff = cell.getBoundingClientRect().bottom - gridBottom;
            /** @type {?} */
            const inView = diff <= 0;
            /** @type {?} */
            const scrollTop = closestScrollableGrid.verticalScrollContainer.getVerticalScroll().scrollTop;
            /** @type {?} */
            const scrollHeight = closestScrollableGrid.verticalScrollContainer.getVerticalScroll().scrollHeight;
            /** @type {?} */
            const canScroll = !(scrollHeight === 0 ||
                Math.round(scrollTop + closestScrollableGrid.verticalScrollContainer.igxForContainerSize) === scrollHeight);
            if (!inView && canScroll) {
                this.scrollGrid(closestScrollableGrid, diff, () => cell.focus({ preventScroll: true }));
            }
            else {
                cell.focus({ preventScroll: true });
            }
        }
        else {
            /** @type {?} */
            const cellElem = elem.querySelector(`${cellSelector}`);
            /** @type {?} */
            const rowIndex = parseInt(cellElem.getAttribute('data-rowindex'), 10);
            grid.navigation.performHorizontalScrollToCell(rowIndex, visibleColumnIndex);
        }
    }
    /**
     * @private
     * @param {?} elem
     * @param {?} visibleColumnIndex
     * @param {?} grid
     * @param {?=} inChild
     * @param {?=} isSummary
     * @return {?}
     */
    focusPrevRow(elem, visibleColumnIndex, grid, inChild, isSummary) {
        if (grid.navigation.isColumnFullyVisible(visibleColumnIndex)) {
            /** @type {?} */
            const cellSelector = this.getCellSelector(visibleColumnIndex, isSummary);
            /** @type {?} */
            const cells = elem.querySelectorAll(`${cellSelector}[data-visibleIndex="${visibleColumnIndex}"]`);
            /** @type {?} */
            let cell = cells[cells.length - 1];
            /** @type {?} */
            const rIndex = parseInt(elem.getAttribute('data-rowindex'), 10);
            /** @type {?} */
            const scrGrid = grid.verticalScrollContainer.getVerticalScroll().scrollTop !== 0 ? grid :
                this.getNextScrollable(grid).grid;
            /** @type {?} */
            const topGrid = scrGrid.tbody.nativeElement.getBoundingClientRect().top >
                grid.rootGrid.tbody.nativeElement.getBoundingClientRect().top ? scrGrid : grid.rootGrid;
            /** @type {?} */
            const gridTop = this._getMaxTop(grid);
            /** @type {?} */
            const scrTop = scrGrid.verticalScrollContainer.getVerticalScroll().scrollTop;
            /** @type {?} */
            const diff = cell.getBoundingClientRect().bottom -
                cell.offsetHeight - gridTop;
            if (scrTop !== 0 && diff < 0 && !inChild) {
                this.scrollGrid(scrGrid, diff, () => {
                    /** @type {?} */
                    const el = !isSummary ? grid.navigation.getRowByIndex(rIndex) : elem;
                    cell = el.querySelectorAll(`${cellSelector}[data-visibleIndex="${visibleColumnIndex}"]`)[0];
                    cell.focus({ preventScroll: true });
                });
            }
            else if (diff < 0 && inChild) {
                this.scrollGrid(topGrid, diff, () => {
                    cell.focus({ preventScroll: true });
                });
            }
            else {
                cell.focus({ preventScroll: true });
            }
        }
        else {
            this.horizontalScrollGridToIndex(grid, visibleColumnIndex, () => {
                this.focusPrevRow(elem, visibleColumnIndex, grid, inChild, isSummary);
            });
        }
    }
    /**
     * @private
     * @param {?} grid
     * @param {?} visibleColumnIndex
     * @param {?} callBackFunc
     * @return {?}
     */
    horizontalScrollGridToIndex(grid, visibleColumnIndex, callBackFunc) {
        /** @type {?} */
        const unpinnedIndex = this.getColumnUnpinnedIndex(visibleColumnIndex);
        grid.parentVirtDir.onChunkLoad
            .pipe(first())
            .subscribe(callBackFunc);
        grid.dataRowList.toArray()[0].virtDirRow.scrollTo(unpinnedIndex);
    }
    /**
     * @private
     * @param {?} grid
     * @param {?} target
     * @param {?} callBackFunc
     * @return {?}
     */
    scrollGrid(grid, target, callBackFunc) {
        this.getFocusableGrid().nativeElement.focus({ preventScroll: true });
        requestAnimationFrame(() => {
            if (typeof target === 'number') {
                grid.verticalScrollContainer.addScrollTop(target);
            }
            else {
                switch (target) {
                    case 'top':
                        grid.verticalScrollContainer.scrollTo(0);
                        break;
                    case 'bottom':
                        grid.verticalScrollContainer.scrollTo(grid.verticalScrollContainer.igxForOf.length - 1);
                        break;
                    case 'next':
                        grid.verticalScrollContainer.scrollNext();
                        break;
                    case 'prev':
                        grid.verticalScrollContainer.scrollPrev();
                        break;
                }
            }
            grid.verticalScrollContainer.onChunkLoad
                .pipe(first())
                .subscribe(callBackFunc);
        });
    }
    /**
     * @private
     * @param {?} rowElement
     * @param {?} currentRowIndex
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    _navigateUpInChild(rowElement, currentRowIndex, visibleColumnIndex) {
        /** @type {?} */
        const prevElem = rowElement.previousElementSibling;
        /** @type {?} */
        const scrollable = this.getNextScrollable(this.grid);
        /** @type {?} */
        const grid = scrollable.grid;
        /** @type {?} */
        const scrTop = grid.verticalScrollContainer.getVerticalScroll().scrollTop;
        /** @type {?} */
        const containerTop = scrollable.prev.nativeElement.parentNode.parentNode.parentNode.parentNode;
        /** @type {?} */
        const top = parseInt(containerTop.style.top, 10);
        if (scrTop !== 0 && top < 0) {
            this.scrollGrid(grid, -prevElem.offsetHeight, () => super.navigateUp(rowElement, { row: currentRowIndex, column: visibleColumnIndex }));
        }
        else {
            super.navigateUp(rowElement, { row: currentRowIndex, column: visibleColumnIndex });
        }
    }
    /**
     * @private
     * @param {?} rowElement
     * @param {?} currentRowIndex
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    _navigateDownInChild(rowElement, currentRowIndex, visibleColumnIndex) {
        /** @type {?} */
        const nextElem = rowElement.nextElementSibling;
        /** @type {?} */
        const childContainer = this.grid.nativeElement.parentNode.parentNode;
        /** @type {?} */
        const diff = childContainer.getBoundingClientRect().bottom - this.grid.rootGrid.nativeElement.getBoundingClientRect().bottom;
        /** @type {?} */
        const endIsVisible = diff < 0;
        /** @type {?} */
        const scrollable = this.getNextScrollableDown(this.grid);
        /** @type {?} */
        const grid = scrollable.grid;
        if (!endIsVisible) {
            this.scrollGrid(grid, nextElem.offsetHeight, () => super.navigateDown(rowElement, { row: currentRowIndex, column: visibleColumnIndex }));
        }
        else {
            super.navigateDown(rowElement, { row: currentRowIndex, column: visibleColumnIndex });
        }
    }
    /**
     * @private
     * @param {?} sourceElem
     * @param {?} targetTag
     * @return {?}
     */
    getClosestElemByTag(sourceElem, targetTag) {
        /** @type {?} */
        let result = sourceElem;
        while (result !== null && result.nodeType === 1) {
            if (result.tagName.toLowerCase() === targetTag.toLowerCase()) {
                return result;
            }
            result = result.parentNode;
        }
        return null;
    }
}
if (false) {
    /** @type {?} */
    IgxHierarchicalGridNavigationService.prototype.grid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGllcmFyY2hpY2FsLWdyaWQtbmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9oaWVyYXJjaGljYWwtZ3JpZC9oaWVyYXJjaGljYWwtZ3JpZC1uYXZpZ2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXRFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHcEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXhDLE1BQU0sT0FBTyxvQ0FBcUMsU0FBUSx3QkFBd0I7Ozs7Ozs7SUFHcEUsZUFBZSxDQUFDLFlBQXFCLEVBQUUsU0FBUyxHQUFHLEtBQUs7UUFDOUQsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQztJQUM5RSxDQUFDOzs7OztJQUVTLGNBQWM7UUFDcEIsT0FBTywyQkFBMkIsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7SUFFUyxhQUFhLENBQUMsS0FBSzs7Y0FDbkIsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7O2NBQ2hDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUM1RCxHQUFHLFFBQVEsbUJBQW1CLEtBQUssSUFBSSxDQUFDLENBQUM7O1lBQ3pDLEdBQUc7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7O2tCQUNULFVBQVUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixDQUFDO1lBQ3ZFLElBQUksVUFB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QUFNLEdBQUcsVUFBVTtRQUN2QixPQUFPLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxDQUFDLEVBQUU7WUFDN0MsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDMUQsT0FBTyxNQUFNLENBQUM7YUFDakI7WUFDRCxNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztTQUM5QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FDSjs7O0lBcnhCRyxvREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJZ3hHcmlkTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9ncmlkLW5hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9oaWVyYXJjaGljYWwtZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBGaWx0ZXJNb2RlIH0gZnJvbSAnLi4vZ3JpZC1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi8uLi9ncmlkcy9jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IElTZWxlY3Rpb25Ob2RlIH0gZnJvbSAnLi4vLi4vY29yZS9ncmlkLXNlbGVjdGlvbic7XG5pbXBvcnQgeyBpc0lFIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBJZ3hIaWVyYXJjaGljYWxHcmlkTmF2aWdhdGlvblNlcnZpY2UgZXh0ZW5kcyBJZ3hHcmlkTmF2aWdhdGlvblNlcnZpY2Uge1xuICAgIHB1YmxpYyBncmlkOiBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50O1xuXG4gICAgcHJvdGVjdGVkIGdldENlbGxTZWxlY3Rvcih2aXNpYmxlSW5kZXg/OiBudW1iZXIsIGlzU3VtbWFyeSA9IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBpc1N1bW1hcnkgPyAnaWd4LWdyaWQtc3VtbWFyeS1jZWxsJyA6ICdpZ3gtaGllcmFyY2hpY2FsLWdyaWQtY2VsbCc7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFJvd1NlbGVjdG9yKCkge1xuICAgICAgICByZXR1cm4gJ2lneC1oaWVyYXJjaGljYWwtZ3JpZC1yb3cnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRSb3dCeUluZGV4KGluZGV4KSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gdGhpcy5nZXRSb3dTZWxlY3RvcigpO1xuICAgICAgICBjb25zdCByb3dzID0gQXJyYXkuZnJvbSh0aGlzLmdyaWQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgYCR7c2VsZWN0b3J9W2RhdGEtcm93aW5kZXg9XCIke2luZGV4fVwiXWApKTtcbiAgICAgICAgbGV0IHJvdztcbiAgICAgICAgcm93cy5mb3JFYWNoKChyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRHcmlkID0gdGhpcy5nZXRDbG9zZXN0RWxlbUJ5VGFnKHIsICdpZ3gtaGllcmFyY2hpY2FsLWdyaWQnKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRHcmlkICYmIHBhcmVudEdyaWQuZ2V0QXR0cmlidXRlKCdpZCcpID09PSB0aGlzLmdyaWQuaWQpIHtcbiAgICAgICAgICAgICAgICByb3cgPSByO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJvdztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENoaWxkQ29udGFpbmVyKGdyaWQ/KSB7XG4gICAgICAgIGNvbnN0IGN1cnJHcmlkID0gZ3JpZCB8fCB0aGlzLmdyaWQ7XG4gICAgICAgIHJldHVybiBjdXJyR3JpZC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q2hpbGRHcmlkUm93Q29udGFpbmVyKGdyaWQ/KSB7XG4gICAgICAgIGNvbnN0IGN1cnJHcmlkID0gZ3JpZCB8fCB0aGlzLmdyaWQ7XG4gICAgICAgIHJldHVybiBjdXJyR3JpZC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENoaWxkR3JpZChjaGlsZEdyaWRJRCwgZ3JpZCkge1xuICAgICAgICBjb25zdCBjZ3JpZCA9IGdyaWQuaGdyaWRBUEkuZ2V0Q2hpbGRHcmlkcyh0cnVlKS5maWx0ZXIoKGcpID0+IGcuaWQgPT09IGNoaWxkR3JpZElEKVswXTtcbiAgICAgICAgcmV0dXJuIGNncmlkO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzU2Nyb2xsZWRUb0JvdHRvbShncmlkKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKS5zY3JvbGxUb3A7XG4gICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKS5zY3JvbGxIZWlnaHQ7XG4gICAgICAgIHJldHVybiBzY3JvbGxIZWlnaHQgPT09IDAgfHwgTWF0aC5yb3VuZChzY3JvbGxUb3AgKyBncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvckNvbnRhaW5lclNpemUpID09PSBzY3JvbGxIZWlnaHQ7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0SXNDaGlsZEF0SW5kZXgoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5pc0NoaWxkR3JpZFJlY29yZCh0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2ZbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2VsbEVsZW1lbnRCeVZpc2libGVJbmRleChyb3dJbmRleCwgdmlzaWJsZUNvbHVtbkluZGV4LCBpc1N1bW1hcnkgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjZWxsU2VsZWN0b3IgPSB0aGlzLmdldENlbGxTZWxlY3Rvcih2aXNpYmxlQ29sdW1uSW5kZXgsIGlzU3VtbWFyeSk7XG4gICAgICAgIGlmIChpc1N1bW1hcnkpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1bW1hcnlSb3cgPSB0aGlzLmdyaWQuc3VtbWFyaWVzUm93TGlzdC50b0FycmF5KClbMF0ubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIHJldHVybiBzdW1tYXJ5Um93LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYCR7Y2VsbFNlbGVjdG9yfVtkYXRhLXZpc2libGVJbmRleD1cIiR7dmlzaWJsZUNvbHVtbkluZGV4fVwiXWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuZ2V0Um93QnlJbmRleChyb3dJbmRleCk7XG4gICAgICAgIHJldHVybiByb3cucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAke2NlbGxTZWxlY3Rvcn1bZGF0YS1yb3dpbmRleD1cIiR7cm93SW5kZXh9XCJdW2RhdGEtdmlzaWJsZUluZGV4PVwiJHt2aXNpYmxlQ29sdW1uSW5kZXh9XCJdYCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5hdmlnYXRlVXAocm93RWxlbWVudCwgc2VsZWN0ZWROb2RlOiBJU2VsZWN0aW9uTm9kZSkge1xuICAgICAgICBjb25zdCBwcmV2RWxlbSA9IHJvd0VsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgY29uc3QgdmlzaWJsZUNvbHVtbkluZGV4ID0gc2VsZWN0ZWROb2RlLmNvbHVtbjtcbiAgICAgICAgY29uc3QgY3VycmVudFJvd0luZGV4ID0gc2VsZWN0ZWROb2RlLnJvdztcbiAgICAgICAgaWYgKHByZXZFbGVtKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlTmFtZSA9IHByZXZFbGVtLmNoaWxkcmVuWzBdLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBjb25zdCBpc0VsZW1DaGlsZEdyaWQgPSBub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaWd4LWNoaWxkLWdyaWQtcm93JztcbiAgICAgICAgICAgIGlmIChpc0VsZW1DaGlsZEdyaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzUHJldkNoaWxkKHByZXZFbGVtLCB2aXNpYmxlQ29sdW1uSW5kZXgsIHRoaXMuZ3JpZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyaWQucGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGN1cnJlbnRseSBuYXZpZ2F0aW5nIGluIGNoaWxkIGdyaWRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmF2aWdhdGVVcEluQ2hpbGQocm93RWxlbWVudCwgY3VycmVudFJvd0luZGV4LCB2aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyLm5hdmlnYXRlVXAocm93RWxlbWVudCwgc2VsZWN0ZWROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJvd0luZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAvLyBoYW5kbGUgc2NlbmFyaW8gd2hlbiBwcmV2IGl0ZW0gaXMgY2hpbGQgZ3JpZCBidXQgaXMgbm90IHlldCBpbiB2aWV3XG4gICAgICAgICAgICBjb25zdCBpc1ByZXZDaGlsZEdyaWQgPSB0aGlzLmdldElzQ2hpbGRBdEluZGV4KGN1cnJlbnRSb3dJbmRleCAtIDEpO1xuICAgICAgICAgICAgaWYgKCFpc1ByZXZDaGlsZEdyaWQpIHtcbiAgICAgICAgICAgICAgICBzdXBlci5uYXZpZ2F0ZVVwKHJvd0VsZW1lbnQsIHNlbGVjdGVkTm9kZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsR3JpZCh0aGlzLmdyaWQsIC1yb3dFbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93RWxlbWVudCA9IHRoaXMuZ2V0Um93QnlJbmRleChjdXJyZW50Um93SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVVwKHJvd0VsZW1lbnQsIHNlbGVjdGVkTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ3JpZC5wYXJlbnQgIT09IG51bGwgJiZcbiAgICAgICAgICAgIGN1cnJlbnRSb3dJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gbW92ZSB0byBwcmV2IHJvdyBpbiBzaWJsaW5nIGxheW91dCBvciBwYXJlbnRcbiAgICAgICAgICAgIHRoaXMuZm9jdXNQcmV2KHZpc2libGVDb2x1bW5JbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIG5hdmlnYXRlRG93bihyb3dFbGVtZW50LCBzZWxlY3RlZE5vZGU6IElTZWxlY3Rpb25Ob2RlKSB7XG4gICAgICAgIGNvbnN0IG5leHRFbGVtID0gcm93RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGNvbnN0IHZpc2libGVDb2x1bW5JbmRleCA9IHNlbGVjdGVkTm9kZS5jb2x1bW47XG4gICAgICAgIGNvbnN0IGN1cnJlbnRSb3dJbmRleCA9IHNlbGVjdGVkTm9kZS5yb3c7XG4gICAgICAgIGlmIChuZXh0RWxlbSkge1xuICAgICAgICAgICAgLy8gbmV4dCBlbGVtIGlzIGluIERPTVxuICAgICAgICAgICAgY29uc3Qgbm9kZU5hbWUgPSBuZXh0RWxlbS5jaGlsZHJlblswXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgY29uc3QgaXNOZXh0RWxlbUNoaWxkR3JpZCA9IG5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpZ3gtY2hpbGQtZ3JpZC1yb3cnO1xuICAgICAgICAgICAgaWYgKGlzTmV4dEVsZW1DaGlsZEdyaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzTmV4dENoaWxkKG5leHRFbGVtLCB2aXNpYmxlQ29sdW1uSW5kZXgsIHRoaXMuZ3JpZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyaWQucGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGN1cnJlbnRseSBuYXZpZ2F0aW5nIGluIGNoaWxkIGdyaWRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmF2aWdhdGVEb3duSW5DaGlsZChyb3dFbGVtZW50LCBjdXJyZW50Um93SW5kZXgsIHZpc2libGVDb2x1bW5JbmRleCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIubmF2aWdhdGVEb3duKHJvd0VsZW1lbnQsIHNlbGVjdGVkTm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRSb3dJbmRleCAhPT0gdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIC8vIHNjcm9sbCBuZXh0IGluIHZpZXdcbiAgICAgICAgICAgIHN1cGVyLm5hdmlnYXRlRG93bihyb3dFbGVtZW50LCBzZWxlY3RlZE5vZGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ3JpZC5wYXJlbnQgIT09IG51bGwgJiZcbiAgICAgICAgICAgIGN1cnJlbnRSb3dJbmRleCA9PT0gdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIC8vIG1vdmUgdG8gbmV4dCByb3cgaW4gc2libGluZyBsYXlvdXQgb3IgaW4gcGFyZW50XG4gICAgICAgICAgICB0aGlzLmZvY3VzTmV4dCh2aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5hdmlnYXRlVG9wKHZpc2libGVDb2x1bW5JbmRleCkge1xuICAgICAgICBpZiAodGhpcy5ncmlkLnBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gbmF2aWdhdGluZyBpbiBjaGlsZFxuICAgICAgICAgICAgY29uc3QgdmVydGljYWxTY3JvbGwgPSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxTZWxlY3RvciA9IHRoaXMuZ2V0Q2VsbFNlbGVjdG9yKHZpc2libGVDb2x1bW5JbmRleCk7XG5cbiAgICAgICAgICAgIGlmICh2ZXJ0aWNhbFNjcm9sbC5zY3JvbGxUb3AgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mb2N1c1Njcm9sbENlbGxJblZpZXcodmlzaWJsZUNvbHVtbkluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxHcmlkKHRoaXMuZ3JpZCwgJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtjZWxsU2VsZWN0b3J9W2RhdGEtdmlzaWJsZUluZGV4PVwiJHt2aXNpYmxlQ29sdW1uSW5kZXh9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvY3VzU2Nyb2xsQ2VsbEluVmlldyh2aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIubmF2aWdhdGVUb3AodmlzaWJsZUNvbHVtbkluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBuYXZpZ2F0ZUJvdHRvbSh2aXNpYmxlQ29sdW1uSW5kZXgpIHtcbiAgICAgICAgLy8gaGFuZGxlIHNjZW5hcmlvIHdoZXJlIGxhc3QgaW5kZXggaXMgY2hpbGQgZ3JpZFxuICAgICAgICAvLyBpbiB0aGF0IGNhc2UgZm9jdXMgY2VsbCBpbiBsYXN0IGRhdGEgcm93XG4gICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5pZ3hGb3JPZi5sZW5ndGggLSAxO1xuICAgICAgICBpZiAodGhpcy5nZXRJc0NoaWxkQXRJbmRleChsYXN0SW5kZXgpKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IGxhc3RJbmRleCAtIDE7XG4gICAgICAgICAgICBjb25zdCBzY3JUb3BQb3NpdGlvbiA9IHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRTY3JvbGxGb3JJbmRleCh0YXJnZXRJbmRleCwgdHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbFNjcm9sbCA9IHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpO1xuICAgICAgICAgICAgY29uc3QgY2VsbFNlbGVjdG9yID0gdGhpcy5nZXRDZWxsU2VsZWN0b3IodmlzaWJsZUNvbHVtbkluZGV4KTtcbiAgICAgICAgICAgIGlmICh2ZXJ0aWNhbFNjcm9sbC5zY3JvbGxUb3AgPT09IHNjclRvcFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLmdldFJvd0J5SW5kZXgodGFyZ2V0SW5kZXgpLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgICAgIGAke2NlbGxTZWxlY3Rvcn1bZGF0YS12aXNpYmxlSW5kZXg9XCIke3Zpc2libGVDb2x1bW5JbmRleH1cIl1gKTtcbiAgICAgICAgICAgICAgICBjZWxsc1tjZWxscy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEdyaWQodGhpcy5ncmlkLCBzY3JUb3BQb3NpdGlvbiAtIHZlcnRpY2FsU2Nyb2xsLnNjcm9sbFRvcCxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLmdldFJvd0J5SW5kZXgodGFyZ2V0SW5kZXgpLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y2VsbFNlbGVjdG9yfVtkYXRhLXZpc2libGVJbmRleD1cIiR7dmlzaWJsZUNvbHVtbkluZGV4fVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGxzLmxlbmd0aCA+IDApIHsgY2VsbHNbY2VsbHMubGVuZ3RoIC0gMV0uZm9jdXMoKTsgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlICBpZiAodGhpcy5ncmlkLnBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRDb250YWluZXIgPSB0aGlzLmdyaWQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBjb25zdCBkaWZmID1cbiAgICAgICAgICAgIGNoaWxkQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtIHRoaXMuZ3JpZC5yb290R3JpZC50Ym9keS5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcbiAgICAgICAgICAgIGNvbnN0IGVuZElzVmlzaWJsZSA9IGRpZmYgPCAwO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYWJsZSA9IHRoaXMuZ2V0TmV4dFNjcm9sbGFibGVEb3duKHRoaXMuZ3JpZCk7XG4gICAgICAgICAgICBpZiAoIWVuZElzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsR3JpZChzY3JvbGxhYmxlLmdyaWQsIGRpZmYsXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHN1cGVyLm5hdmlnYXRlQm90dG9tKHZpc2libGVDb2x1bW5JbmRleCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdXBlci5uYXZpZ2F0ZUJvdHRvbSh2aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIubmF2aWdhdGVCb3R0b20odmlzaWJsZUNvbHVtbkluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ29Ub0xhc3RDZWxsKCkge1xuICAgICAgICAvLyBoYW5kbGUgc2NlbmFyaW8gd2hlcmUgbGFzdCBpbmRleCBpcyBjaGlsZCBncmlkXG4gICAgICAgIC8vIGluIHRoYXQgY2FzZSBmb2N1cyBsYXN0IGNlbGwgaW4gbGFzdCBkYXRhIHJvd1xuICAgICAgICBjb25zdCBsYXN0SW5kZXggPSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2YubGVuZ3RoIC0gMTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0SXNDaGlsZEF0SW5kZXgobGFzdEluZGV4KSkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBsYXN0SW5kZXggLSAxO1xuICAgICAgICAgICAgY29uc3Qgc2NyVG9wUG9zaXRpb24gPSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0U2Nyb2xsRm9ySW5kZXgodGFyZ2V0SW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgY29uc3QgdmVydGljYWxTY3JvbGwgPSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKTtcbiAgICAgICAgICAgIGlmICh2ZXJ0aWNhbFNjcm9sbC5zY3JvbGxUb3AgPT09IHNjclRvcFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbktleWRvd25FbmQodGFyZ2V0SW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEdyaWQodGhpcy5ncmlkLCBzY3JUb3BQb3NpdGlvbiAtIHZlcnRpY2FsU2Nyb2xsLnNjcm9sbFRvcCxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbktleWRvd25FbmQodGFyZ2V0SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLmdvVG9MYXN0Q2VsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uS2V5ZG93bkVuZChyb3dJbmRleCwgaXNTdW1tYXJ5ID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5wYXJlbnQgJiYgIWlzU3VtbWFyeSkge1xuICAgICAgICAgICAgLy8gaGFuZGxlIHNjZW5hcmlvIHdoZXJlIGxhc3QgY2hpbGQgcm93IG1pZ2h0IG5vdCBiZSBpbiB2aWV3XG4gICAgICAgICAgICAvLyBwYXJlbnQgc2hvdWxkIHNjcm9sbCB0byBjaGlsZCBncmlkIGVuZFxuICAgICAgICAgICAgY29uc3QgY2hpbGRDb250YWluZXIgPSB0aGlzLmdyaWQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBjb25zdCBkaWZmQm90dG9tID1cbiAgICAgICAgICAgICAgICBjaGlsZENvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gLSB0aGlzLmdyaWQucm9vdEdyaWQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XG4gICAgICAgICAgICBjb25zdCByb3cgPSB0aGlzLmdyaWQuZ2V0Um93QnlJbmRleChyb3dJbmRleCkuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgY29uc3Qgcm93Qm90dG9tID0gcm93LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcbiAgICAgICAgICAgIGNvbnN0IHJvd0lzVmlzaWJsZSA9IHJvd0JvdHRvbSA8PSB0aGlzLmdyaWQucm9vdEdyaWQudGJvZHkubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XG4gICAgICAgICAgICBjb25zdCBncmlkVG9wID0gdGhpcy5fZ2V0TWF4VG9wKHRoaXMuZ3JpZCk7XG4gICAgICAgICAgICBjb25zdCBkaWZmVG9wID0gcm93LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtXG4gICAgICAgICAgICAgICAgcm93Lm9mZnNldEhlaWdodCAtIGdyaWRUb3A7XG4gICAgICAgICAgICBjb25zdCBlbmRJc1Zpc2libGUgPSBkaWZmQm90dG9tIDw9IDA7XG4gICAgICAgICAgICBjb25zdCB0b3BWaXNpYmxlID0gZGlmZlRvcCA+PSAwO1xuICAgICAgICAgICAgaWYgKCFlbmRJc1Zpc2libGUgJiYgIXJvd0lzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsR3JpZCh0aGlzLmdyaWQucGFyZW50LCBkaWZmQm90dG9tLCAoKSA9PiBzdXBlci5vbktleWRvd25FbmQocm93SW5kZXgpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRvcFZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JHcmlkID0gdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmdldFZlcnRpY2FsU2Nyb2xsKCkuc2Nyb2xsVG9wICE9PSAwID8gdGhpcy5ncmlkIDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXROZXh0U2Nyb2xsYWJsZSh0aGlzLmdyaWQpLmdyaWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9wR3JpZCA9IHNjckdyaWQudGJvZHkubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWQucm9vdEdyaWQudGJvZHkubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPyBzY3JHcmlkIDogdGhpcy5ncmlkLnJvb3RHcmlkO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsR3JpZCh0b3BHcmlkLCBkaWZmVG9wLCAoKSA9PiBzdXBlci5vbktleWRvd25FbmQocm93SW5kZXgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3VwZXIub25LZXlkb3duRW5kKHJvd0luZGV4LCBpc1N1bW1hcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIub25LZXlkb3duRW5kKHJvd0luZGV4LCBpc1N1bW1hcnkpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ29Ub0ZpcnN0Q2VsbCgpIHtcbiAgICAgICAgY29uc3QgdmVydGljYWxTY3JvbGwgPSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKTtcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbFNjcm9sbCA9IHRoaXMuZ3JpZC5kYXRhUm93TGlzdC5maXJzdC52aXJ0RGlyUm93LmdldEhvcml6b250YWxTY3JvbGwoKTtcbiAgICAgICAgaWYgKHZlcnRpY2FsU2Nyb2xsLnNjcm9sbFRvcCA9PT0gMCAmJiB0aGlzLmdyaWQucGFyZW50KSB7XG4gICAgICAgICAgICAvLyBzY3JvbGwgcGFyZW50IHNvIHRoYXQgY3VycmVudCBjaGlsZCBpcyBpbiB2aWV3XG4gICAgICAgICAgICBpZiAoIWhvcml6b250YWxTY3JvbGwuY2xpZW50V2lkdGggfHwgcGFyc2VJbnQoaG9yaXpvbnRhbFNjcm9sbC5zY3JvbGxMZWZ0LCAxMCkgPD0gMSB8fCB0aGlzLmdyaWQucGlubmVkQ29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG9wKDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvcml6b250YWxTY3JvbGwodGhpcy5ncmlkLmRhdGFSb3dMaXN0LmZpcnN0LmluZGV4KS5zY3JvbGxUbygwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQucGFyZW50VmlydERpci5vbkNodW5rTG9hZFxuICAgICAgICAgICAgICAgICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUb3AoMCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIuZ29Ub0ZpcnN0Q2VsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHBlcmZvcm1UYWIoY3VycmVudFJvd0VsLCBzZWxlY3RlZE5vZGU6IElTZWxlY3Rpb25Ob2RlKSB7XG4gICAgICAgIGlmICh0aGlzLmdyaWQucm93SW5FZGl0TW9kZSkge1xuICAgICAgICAgICAgc3VwZXIucGVyZm9ybVRhYihjdXJyZW50Um93RWwsIHNlbGVjdGVkTm9kZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm93SW5kZXggPSBzZWxlY3RlZE5vZGUucm93O1xuICAgICAgICBjb25zdCB2aXNpYmxlQ29sdW1uSW5kZXggPSBzZWxlY3RlZE5vZGUuY29sdW1uO1xuICAgICAgICBjb25zdCBpc1N1bW1hcnlSb3cgPSBzZWxlY3RlZE5vZGUuaXNTdW1tYXJ5Um93O1xuICAgICAgICBjb25zdCBzdW1tYXJ5Um93cyA9IHRoaXMuZ3JpZC5zdW1tYXJpZXNSb3dMaXN0LnRvQXJyYXkoKTtcbiAgICAgICAgY29uc3QgaGFzU3VtbWFyaWVzID0gc3VtbWFyeVJvd3MubGVuZ3RoID4gMDtcbiAgICAgICAgY29uc3QgaXNMYXN0RGF0YVJvdyA9IHJvd0luZGV4ID09PSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2YubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3QgbmV4dElzRGF0YVJvdyA9IHRoaXMuZ3JpZC5kYXRhUm93TGlzdC5maW5kKHJvdyA9PiByb3cuaW5kZXggPT09IHJvd0luZGV4ICsgMSk7XG4gICAgICAgIGNvbnN0IGlzTGFzdENvbHVtbiA9IHRoaXMuZ3JpZC51bnBpbm5lZENvbHVtbnNbdGhpcy5ncmlkLnVucGlubmVkQ29sdW1ucy5sZW5ndGggLSAxXS52aXNpYmxlSW5kZXggPT09IHZpc2libGVDb2x1bW5JbmRleDtcbiAgICAgICAgY29uc3QgaXNMYXN0U3VtbWFyeVJvdyA9IGhhc1N1bW1hcmllcyAmJiBpc1N1bW1hcnlSb3c7XG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IHJvd0luZGV4ICsgMTtcbiAgICAgICAgY29uc3QgdmlydCA9IHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgaXNOZXh0Q2hpbGQgPSBuZXh0SW5kZXggPD0gdmlydC5pZ3hGb3JPZi5sZW5ndGggLSAxICYmXG4gICAgICAgICAgICB0aGlzLmdyaWQuaXNDaGlsZEdyaWRSZWNvcmQodmlydC5pZ3hGb3JPZltuZXh0SW5kZXhdKTtcbiAgICAgICAgaWYgKCFuZXh0SXNEYXRhUm93ICYmICEoaXNMYXN0RGF0YVJvdyAmJiBoYXNTdW1tYXJpZXMpICYmIGlzTGFzdENvbHVtbiAmJiAhaXNTdW1tYXJ5Um93KSB7XG4gICAgICAgICAgICAvLyBuYXZpZ2F0aW5nIGluIGNoaWxkLCBuZXh0IGlzIG5vdCBzdW1tYXJ5XG4gICAgICAgICAgICBjb25zdCBjaGlsZENvbnRhaW5lciA9IHRoaXMuZ2V0Q2hpbGRHcmlkUm93Q29udGFpbmVyKCk7XG4gICAgICAgICAgICBjb25zdCBuZXh0SXNTaWJsaW5nQ2hpbGQgPSB0aGlzLmdyaWQucGFyZW50ID8gISFjaGlsZENvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcgOiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChuZXh0SXNTaWJsaW5nQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzTmV4dENoaWxkRE9NRWxlbShjaGlsZENvbnRhaW5lciwgdGhpcy5ncmlkLnBhcmVudCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzTmV4dENoaWxkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNJblZpZXcgPSB2aXJ0LnN0YXRlLnN0YXJ0SW5kZXggKyB2aXJ0LnN0YXRlLmNodW5rU2l6ZSA+IG5leHRJbmRleDtcbiAgICAgICAgICAgICAgICBpZiAoIWlzSW5WaWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsR3JpZCh0aGlzLmdyaWQsICduZXh0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c05leHRDaGlsZERPTUVsZW0oY3VycmVudFJvd0VsLCB0aGlzLmdyaWQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzTmV4dENoaWxkRE9NRWxlbShjdXJyZW50Um93RWwsIHRoaXMuZ3JpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlRG93bihjdXJyZW50Um93RWwsIHsgcm93OiByb3dJbmRleCwgY29sdW1uOiAwIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGlzTGFzdFN1bW1hcnlSb3cgJiYgaXNMYXN0Q29sdW1uICYmIHRoaXMuZ3JpZC5wYXJlbnQpIHtcbiAgICAgICAgICAgIC8vIG5hdmlnYXRpbmcgaW4gY2hpbGQgc3VtbWFyeSwgbmV4dCBpcyBwYXJlbnQgc3VtbWFyeSBvciBuZXh0IHBhcmVudCByb3dcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ3JpZC5wYXJlbnQ7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRIYXNTdW1tYXJ5ID0gcGFyZW50LnN1bW1hcmllc1Jvd0xpc3QudG9BcnJheSgpLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRSb3dJbmRleCA9IHBhcnNlSW50KFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2xvc2VzdEVsZW1CeVRhZyhjdXJyZW50Um93RWwsICdpZ3gtY2hpbGQtZ3JpZC1yb3cnKS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1yb3dpbmRleCcpLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBpc0xhc3RSb3dJblBhcmVudCA9IHBhcmVudC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5pZ3hGb3JPZi5sZW5ndGggLSAxID09PSBwYXJlbnRSb3dJbmRleDtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIG5leHQgaXMgc2libGluZ1xuICAgICAgICAgICAgY29uc3QgY2hpbGRSb3dDb250YWluZXIgPSB0aGlzLmdldENoaWxkR3JpZFJvd0NvbnRhaW5lcih0aGlzLmdyaWQpO1xuICAgICAgICAgICAgY29uc3QgbmV4dElzU2libGluZ0NoaWxkID0gISFjaGlsZFJvd0NvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBpZiAoaXNMYXN0Um93SW5QYXJlbnQgJiYgcGFyZW50SGFzU3VtbWFyeSAmJiAhbmV4dElzU2libGluZ0NoaWxkKSB7XG4gICAgICAgICAgICAgICAgLy8gbmV4dCBpcyBwYXJlbnQgc3VtbWFyeVxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFN1bW1hcnkgPSBwYXJlbnQuc3VtbWFyaWVzUm93TGlzdC50b0FycmF5KClbMF0ubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgICAgICBwYXJlbnQubmF2aWdhdGlvbi5mb2N1c05leHRSb3cocGFyZW50U3VtbWFyeSwgMCwgdGhpcy5ncmlkLnJvb3RHcmlkLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbmV4dCBpcyBzaWJsaW5nIG9yIHBhcmVudFxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNOZXh0KDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGlzTGFzdERhdGFSb3cgJiYgaGFzU3VtbWFyaWVzICYmIGlzTGFzdENvbHVtbiAmJiB0aGlzLmdyaWQucGFyZW50KSB7XG4gICAgICAgICAgICAvLyBuYXZpZ2F0aW5nIGluIGNoaWxkIHJvd3MsIG5leHQgaXMgY2hpbGQgZ3JpZCdzIHN1bW1hcnkgcm93XG4gICAgICAgICAgICB0aGlzLmZvY3VzTmV4dFJvdyhzdW1tYXJ5Um93c1swXS5uYXRpdmVFbGVtZW50LCAwLCB0aGlzLmdyaWQucGFyZW50LCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLnBlcmZvcm1UYWIoY3VycmVudFJvd0VsLCBzZWxlY3RlZE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c05leHRDaGlsZERPTUVsZW0oY3VycmVudFJvd0VsLCBncmlkKSB7XG4gICAgICAgIGNvbnN0IGdyaWRFbGVtID0gY3VycmVudFJvd0VsLm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCdpZ3gtaGllcmFyY2hpY2FsLWdyaWQnKTtcbiAgICAgICAgY29uc3QgY2hpbGRHcmlkSUQgPSBncmlkRWxlbS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGNvbnN0IGNoaWxkR3JpZCA9IHRoaXMuZ2V0Q2hpbGRHcmlkKGNoaWxkR3JpZElELCBncmlkKTtcbiAgICAgICAgaWYgKGNoaWxkR3JpZC5hbGxvd0ZpbHRlcmluZyAmJiBjaGlsZEdyaWQuZmlsdGVyTW9kZSA9PT0gRmlsdGVyTW9kZS5xdWlja0ZpbHRlcikge1xuICAgICAgICAgICAgY2hpbGRHcmlkLm5hdmlnYXRpb24ubW92ZUZvY3VzVG9GaWx0ZXJDZWxsKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9jdXNOZXh0Q2hpbGQoY3VycmVudFJvd0VsLm5leHRFbGVtZW50U2libGluZywgMCwgZ3JpZCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5hdmlnYXRlUHJldkZpbHRlckNlbGwoY29sdW1uOiBJZ3hDb2x1bW5Db21wb25lbnQsIGV2ZW50QXJncykge1xuICAgICAgICBpZiAoY29sdW1uLnZpc2libGVJbmRleCA9PT0gMCAmJiB0aGlzLmdyaWQucGFyZW50KSB7XG4gICAgICAgICAgICBldmVudEFyZ3MucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCB0YXJnZXRHcmlkID0gdGhpcy5ncmlkLnBhcmVudDtcbiAgICAgICAgICAgIGNvbnN0IHByZXZTaWJsaW5nQ2hpbGQgPSB0aGlzLmdldENoaWxkR3JpZFJvd0NvbnRhaW5lcigpLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBpZiAocHJldlNpYmxpbmdDaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRFbGVtID0gcHJldlNpYmxpbmdDaGlsZC5xdWVyeVNlbGVjdG9yQWxsKCdpZ3gtaGllcmFyY2hpY2FsLWdyaWQnKVswXTtcbiAgICAgICAgICAgICAgICB0YXJnZXRHcmlkID0gdGhpcy5nZXRDaGlsZEdyaWQoZ3JpZEVsZW0uZ2V0QXR0cmlidXRlKCdpZCcpLCB0aGlzLmdyaWQucGFyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZm9jdXNQcmV2KHRhcmdldEdyaWQudW5waW5uZWRDb2x1bW5zW3RhcmdldEdyaWQudW5waW5uZWRDb2x1bW5zLmxlbmd0aCAtIDFdLnZpc2libGVJbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlci5uYXZpZ2F0ZVByZXZGaWx0ZXJDZWxsKGNvbHVtbiwgZXZlbnRBcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBuYXZpZ2F0ZU5leHRGaWx0ZXJDZWxsKGNvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50LCBldmVudEFyZ3MpIHtcbiAgICAgICAgY29uc3QgY29scyA9IHRoaXMuZ3JpZC5maWx0ZXJpbmdTZXJ2aWNlLnVucGlubmVkRmlsdGVyYWJsZUNvbHVtbnM7XG4gICAgICAgIGNvbnN0IG5leHRGaWx0ZXJhYmxlSW5kZXggPSBjb2xzLmluZGV4T2YoY29sdW1uKSArIDE7XG4gICAgICAgIGlmIChuZXh0RmlsdGVyYWJsZUluZGV4ID49IHRoaXMuZ3JpZC5maWx0ZXJpbmdTZXJ2aWNlLnVucGlubmVkRmlsdGVyYWJsZUNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBuZXh0IGlzIG5vdCBmaWx0ZXIgY2VsbFxuICAgICAgICAgICAgY29uc3QgZGF0YVJvd3MgPSB0aGlzLmdyaWQucm93TGlzdC50b0FycmF5KCk7XG4gICAgICAgICAgICBjb25zdCBoYXNSb3dzID0gZGF0YVJvd3MubGVuZ3RoICE9PSAwO1xuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeVJvd3MgPSB0aGlzLmdyaWQuc3VtbWFyaWVzUm93TGlzdC50b0FycmF5KCk7XG4gICAgICAgICAgICBjb25zdCBoYXNTdW1tYXJpZXMgPSBzdW1tYXJ5Um93cy5sZW5ndGggPiAwICYmIHN1bW1hcnlSb3dzWzBdLnN1bW1hcnlDZWxscy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgaWYgKGhhc1Jvd3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzTmV4dFJvdyhkYXRhUm93c1swXS5uYXRpdmVFbGVtZW50LCAwLCB0aGlzLmdyaWQsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzU3VtbWFyaWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c05leHRSb3coc3VtbWFyeVJvd3NbMF0ubmF0aXZlRWxlbWVudCwgMCwgdGhpcy5ncmlkLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c05leHQoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudEFyZ3MucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLm5hdmlnYXRlTmV4dEZpbHRlckNlbGwoY29sdW1uLCBldmVudEFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHBlcmZvcm1TaGlmdFRhYktleShjdXJyZW50Um93RWwsIHNlbGVjdGVkTm9kZTogSVNlbGVjdGlvbk5vZGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5yb3dJbkVkaXRNb2RlKSB7XG4gICAgICAgICAgICBzdXBlci5wZXJmb3JtU2hpZnRUYWJLZXkoY3VycmVudFJvd0VsLCBzZWxlY3RlZE5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvd0luZGV4ID0gc2VsZWN0ZWROb2RlLnJvdztcbiAgICAgICAgY29uc3QgdmlzaWJsZUNvbHVtbkluZGV4ID0gc2VsZWN0ZWROb2RlLmNvbHVtbjtcbiAgICAgICAgY29uc3QgaXNTdW1tYXJ5ID0gc2VsZWN0ZWROb2RlLmlzU3VtbWFyeVJvdztcbiAgICAgICAgaWYgKHZpc2libGVDb2x1bW5JbmRleCA9PT0gMCAmJiByb3dJbmRleCA9PT0gMCAmJiB0aGlzLmdyaWQucGFyZW50ICYmICFpc1N1bW1hcnkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyaWQuYWxsb3dGaWx0ZXJpbmcgJiYgdGhpcy5ncmlkLmZpbHRlck1vZGUgPT09IEZpbHRlck1vZGUucXVpY2tGaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVGb2N1c1RvRmlsdGVyQ2VsbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2U2libGluZ0NoaWxkID0gdGhpcy5nZXRDaGlsZEdyaWRSb3dDb250YWluZXIoKS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGlmIChwcmV2U2libGluZ0NoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRFbGVtID0gcHJldlNpYmxpbmdDaGlsZC5xdWVyeVNlbGVjdG9yQWxsKCdpZ3gtaGllcmFyY2hpY2FsLWdyaWQnKVswXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJmb3JtU2hpZnRUYWJJbnRvQ2hpbGQoZ3JpZEVsZW0sIGN1cnJlbnRSb3dFbCwgcm93SW5kZXgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbE5vZGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3c6IHJvd0luZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uOiB0aGlzLmdyaWQucGFyZW50LnVucGlubmVkQ29sdW1uc1t0aGlzLmdyaWQucGFyZW50LnVucGlubmVkQ29sdW1ucy5sZW5ndGggLSAxXS52aXNpYmxlSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVVwKGN1cnJlbnRSb3dFbCwgc2VsTm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHZpc2libGVDb2x1bW5JbmRleCA9PT0gMCAmJiBjdXJyZW50Um93RWwucHJldmlvdXNFbGVtZW50U2libGluZyAmJlxuICAgICAgICAgICAgY3VycmVudFJvd0VsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2hpbGRyZW5bMF0udGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaWd4LWNoaWxkLWdyaWQtcm93Jykge1xuICAgICAgICAgICAgY29uc3QgZ3JpZEVsZW0gPSB0aGlzLmdldExhc3RHcmlkRWxlbShjdXJyZW50Um93RWwucHJldmlvdXNFbGVtZW50U2libGluZyk7XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1TaGlmdFRhYkludG9DaGlsZChncmlkRWxlbSwgY3VycmVudFJvd0VsLCByb3dJbmRleCk7XG4gICAgICAgIH0gZWxzZSBpZiAodmlzaWJsZUNvbHVtbkluZGV4ID09PSAwICYmIGlzU3VtbWFyeSkge1xuICAgICAgICAgICAgY29uc3QgbGFzdFJvd0luZGV4ID0gdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBpZiAobGFzdFJvd0luZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIG5vIGNoaWxkIGRhdGFcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmlkLmFsbG93RmlsdGVyaW5nICYmIHRoaXMuZ3JpZC5maWx0ZXJNb2RlID09PSBGaWx0ZXJNb2RlLnF1aWNrRmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzVG9GaWx0ZXJDZWxsKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsTm9kZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogcm93SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW46IHRoaXMuZ3JpZC5wYXJlbnQudW5waW5uZWRDb2x1bW5zW3RoaXMuZ3JpZC5wYXJlbnQudW5waW5uZWRDb2x1bW5zLmxlbmd0aCAtIDFdLnZpc2libGVJbmRleFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVXAoY3VycmVudFJvd0VsLCBzZWxOb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmdldElzQ2hpbGRBdEluZGV4KGxhc3RSb3dJbmRleCkpIHtcbiAgICAgICAgICAgICAgICBzdXBlci5nb1RvTGFzdENlbGwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NyVG9wUG9zaXRpb24gPSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0U2Nyb2xsRm9ySW5kZXgobGFzdFJvd0luZGV4LCB0cnVlKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbFNjcm9sbCA9IHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpO1xuICAgICAgICAgICAgICAgIGlmICh2ZXJ0aWNhbFNjcm9sbC5zY3JvbGxUb3AgPT09IHNjclRvcFBvc2l0aW9uIHx8IGlzTmFOKHNjclRvcFBvc2l0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0Q2hpbGQgPSB0aGlzLmdldExhc3RHcmlkRWxlbSh0aGlzLmdyaWQuZ2V0Um93QnlJbmRleChsYXN0Um93SW5kZXgpLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVyZm9ybVNoaWZ0VGFiSW50b0NoaWxkKGNsb3Nlc3RDaGlsZCwgY3VycmVudFJvd0VsLCByb3dJbmRleCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxHcmlkKHRoaXMuZ3JpZCwgc2NyVG9wUG9zaXRpb24gLSB2ZXJ0aWNhbFNjcm9sbC5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvc2VzdENoaWxkID0gdGhpcy5nZXRMYXN0R3JpZEVsZW0odGhpcy5ncmlkLmdldFJvd0J5SW5kZXgobGFzdFJvd0luZGV4KS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyZm9ybVNoaWZ0VGFiSW50b0NoaWxkKGNsb3Nlc3RDaGlsZCwgY3VycmVudFJvd0VsLCByb3dJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlci5wZXJmb3JtU2hpZnRUYWJLZXkoY3VycmVudFJvd0VsLCBzZWxlY3RlZE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldEZvY3VzYWJsZUdyaWQoKSB7XG4gICAgICAgIHJldHVybiAoaXNJRSgpICYmIHRoaXMuZ3JpZC5yb290R3JpZCkgPyB0aGlzLmdyaWQucm9vdEdyaWQgOiB0aGlzLmdyaWQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRMYXN0R3JpZEVsZW0odHJDb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0ckNvbnRhaW5lci5jaGlsZHJlbjtcbiAgICAgICAgY29uc3QgY2xvc2VzdENoaWxkID0gY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoIC0gMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF07XG4gICAgICAgIHJldHVybiBjbG9zZXN0Q2hpbGQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwZXJmb3JtU2hpZnRUYWJJbnRvQ2hpbGQoZ3JpZEVsZW0sIGN1cnJlbnRSb3dFbCwgcm93SW5kZXgpIHtcbiAgICAgICAgY29uc3QgY2hpbGRHcmlkSUQgPSBncmlkRWxlbS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGNvbnN0IGNoaWxkR3JpZCA9IHRoaXMuZ2V0Q2hpbGRHcmlkKGNoaWxkR3JpZElELCB0aGlzLmdyaWQpIHx8IHRoaXMuZ2V0Q2hpbGRHcmlkKGNoaWxkR3JpZElELCB0aGlzLmdyaWQucGFyZW50KTtcbiAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gY2hpbGRHcmlkLnVucGlubmVkQ29sdW1uc1tjaGlsZEdyaWQudW5waW5uZWRDb2x1bW5zLmxlbmd0aCAtIDFdLnZpc2libGVJbmRleDtcbiAgICAgICAgY29uc3Qgc3VtbWFyeVJvd3MgPSBjaGlsZEdyaWQuc3VtbWFyaWVzUm93TGlzdC50b0FycmF5KCk7XG4gICAgICAgIGlmIChzdW1tYXJ5Um93cy5sZW5ndGggPiAwICYmIHN1bW1hcnlSb3dzWzBdLnN1bW1hcnlDZWxscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBtb3ZlIGZvY3VzIHRvIGxhc3Qgc3VtbWFyeSByb3cgY2VsbFxuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeVJvdyA9IHN1bW1hcnlSb3dzWzBdLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLmZvY3VzUHJldlJvdyhzdW1tYXJ5Um93LCBsYXN0SW5kZXgsIGNoaWxkR3JpZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hpbGRHcmlkLnJvd0xpc3QudG9BcnJheSgpLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAgICAgY2hpbGRHcmlkLmFsbG93RmlsdGVyaW5nICYmIGNoaWxkR3JpZC5maWx0ZXJNb2RlID09PSBGaWx0ZXJNb2RlLnF1aWNrRmlsdGVyKSB7XG4gICAgICAgICAgICAvLyBtb3ZlIHRvIGZpbHRlciBjZWxsXG4gICAgICAgICAgICBjaGlsZEdyaWQubmF2aWdhdGlvbi5tb3ZlRm9jdXNUb0ZpbHRlckNlbGwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG1vdmUgdG8gbmV4dCBjZWxsXG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlVXAoY3VycmVudFJvd0VsLCB7IHJvdzogcm93SW5kZXgsIGNvbHVtbjogbGFzdEluZGV4IH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZm9jdXNTY3JvbGxDZWxsSW5WaWV3KHZpc2libGVDb2x1bW5JbmRleCkge1xuICAgICAgICBjb25zdCBjZWxsU2VsZWN0b3IgPSB0aGlzLmdldENlbGxTZWxlY3Rvcih2aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuZ3JpZC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICBgJHtjZWxsU2VsZWN0b3J9W2RhdGEtdmlzaWJsZUluZGV4PVwiJHt2aXNpYmxlQ29sdW1uSW5kZXh9XCJdYCk7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBjZWxsc1swXTtcbiAgICAgICAgY29uc3QgY2hpbGRDb250YWluZXIgPSB0aGlzLmdyaWQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHNjclRvcCA9IHRoaXMuZ3JpZC5wYXJlbnQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKS5zY3JvbGxUb3A7XG4gICAgICAgIGNvbnN0IG1heFNjcm9sbCA9IHRoaXMuZ3JpZC5wYXJlbnQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKS5zY3JvbGxIZWlnaHQgLSB0aGlzLmdyaWQucGFyZW50LmNhbGNIZWlnaHQ7XG4gICAgICAgIGNvbnN0IGRjID0gY2hpbGRDb250YWluZXIucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBzY3JXaXRoID0gcGFyc2VJbnQoZGMuc3R5bGUudG9wLCAxMCk7XG4gICAgICAgIGNvbnN0IHBhcmVudFJvd09mZnNldCA9IGNoaWxkQ29udGFpbmVyLnBhcmVudE5vZGUub2Zmc2V0VG9wICsgdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wICtcbiAgICAgICAgICAgIHNjcldpdGg7XG4gICAgICAgIGlmICgoc2NyVG9wID09PSAwICYmIHBhcmVudFJvd09mZnNldCA8IDAgKSB8fCBwYXJlbnRSb3dPZmZzZXQgPT09IDAgfHwgKHNjclRvcCA9PT0gbWF4U2Nyb2xsICYmIHBhcmVudFJvd09mZnNldCA+IDApKSB7XG4gICAgICAgICAgICAvLyBjZWxsIGlzIGluIHZpZXdcbiAgICAgICAgICAgIGNlbGwuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc2Nyb2xsIHBhcmVudCBzbyB0aGF0IGNlbGwgaXMgaW4gdmlld1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxHcmlkKHRoaXMuZ3JpZC5wYXJlbnQsIHBhcmVudFJvd09mZnNldCwgKCkgPT4gY2VsbC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c05leHRDaGlsZChlbGVtLCB2aXNpYmxlQ29sdW1uSW5kZXgsIGdyaWQpIHtcbiAgICAgICAgY29uc3QgZ3JpZEVsZW0gPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoJ2lneC1oaWVyYXJjaGljYWwtZ3JpZCcpO1xuICAgICAgICBjb25zdCBjaGlsZEdyaWRJRCA9IGdyaWRFbGVtLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgY29uc3QgY2hpbGRHcmlkID0gdGhpcy5nZXRDaGlsZEdyaWQoY2hpbGRHcmlkSUQsIGdyaWQpO1xuXG4gICAgICAgIGlmIChjaGlsZEdyaWQucm93TGlzdC50b0FycmF5KCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzTmV4dCh2aXNpYmxlQ29sdW1uSW5kZXgsIGNoaWxkR3JpZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgY29sdW1uIGluZGV4IHNpbmNlIHRoZSBuZXh0IGNoaWxkIGNhbiBoYXZlIGluIGdlbmVyYWwgbGVzcyBjb2x1bW5zIHRoYW4gdmlzaWJsZUNvbHVtbkluZGV4IHZhbHVlLlxuICAgICAgICBjb25zdCBsYXN0Q2VsbEluZGV4ID0gY2hpbGRHcmlkLnVucGlubmVkQ29sdW1uc1tjaGlsZEdyaWQudW5waW5uZWRDb2x1bW5zLmxlbmd0aCAtIDFdLnZpc2libGVJbmRleDtcbiAgICAgICAgdmlzaWJsZUNvbHVtbkluZGV4ID0gTWF0aC5taW4obGFzdENlbGxJbmRleCwgdmlzaWJsZUNvbHVtbkluZGV4KTtcblxuICAgICAgICBpZiAoY2hpbGRHcmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLnN0YXRlLnN0YXJ0SW5kZXggIT09IDApIHtcbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0b3BcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsR3JpZChjaGlsZEdyaWQsICd0b3AnLCAoKSA9PiB0aGlzLmZvY3VzTmV4dFJvdyhlbGVtLCB2aXNpYmxlQ29sdW1uSW5kZXgsIGNoaWxkR3JpZCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb2N1c05leHRSb3coZWxlbSwgdmlzaWJsZUNvbHVtbkluZGV4LCBjaGlsZEdyaWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZm9jdXNQcmV2Q2hpbGQoZWxlbSwgdmlzaWJsZUNvbHVtbkluZGV4LCBncmlkKSB7XG4gICAgICAgIGNvbnN0IGdyaWRzID0gW107XG4gICAgICAgIGNvbnN0IGdyaWRFbGVtcyA9IEFycmF5LmZyb20oZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCdpZ3gtaGllcmFyY2hpY2FsLWdyaWQnKSk7XG4gICAgICAgIGNvbnN0IGNoaWxkTGV2ZWwgPSBncmlkLmNoaWxkTGF5b3V0TGlzdC5maXJzdC5sZXZlbDtcbiAgICAgICAgZ3JpZEVsZW1zLmZvckVhY2goKGhnKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRSb3cgPSB0aGlzLmdldENsb3Nlc3RFbGVtQnlUYWcoaGcsICdpZ3gtY2hpbGQtZ3JpZC1yb3cnKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRSb3cgJiYgcGFyc2VJbnQocGFyZW50Um93LmdldEF0dHJpYnV0ZSgnZGF0YS1sZXZlbCcpLCAxMCkgPT09IGNoaWxkTGV2ZWwpIHtcbiAgICAgICAgICAgICAgICBncmlkcy5wdXNoKGhnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGdyaWRFbGVtID0gZ3JpZHNbZ3JpZHMubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IGNoaWxkR3JpZElEID0gZ3JpZEVsZW0uZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBjb25zdCBjaGlsZEdyaWQgPSB0aGlzLmdldENoaWxkR3JpZChjaGlsZEdyaWRJRCwgZ3JpZCk7XG5cbiAgICAgICAgaWYgKGNoaWxkR3JpZC5yb3dMaXN0LnRvQXJyYXkoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNQcmV2KHZpc2libGVDb2x1bW5JbmRleCwgY2hpbGRHcmlkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBjb2x1bW4gaW5kZXggc2luY2UgdGhlIHByZXZpb3VzIGNoaWxkIGNhbiBoYXZlIGluIGdlbmVyYWwgbGVzcyBjb2x1bW5zIHRoYW4gdmlzaWJsZUNvbHVtbkluZGV4IHZhbHVlLlxuICAgICAgICBjb25zdCBsYXN0Q2VsbEluZGV4ID0gY2hpbGRHcmlkLnVucGlubmVkQ29sdW1uc1tjaGlsZEdyaWQudW5waW5uZWRDb2x1bW5zLmxlbmd0aCAtIDFdLnZpc2libGVJbmRleDtcbiAgICAgICAgdmlzaWJsZUNvbHVtbkluZGV4ID0gTWF0aC5taW4obGFzdENlbGxJbmRleCwgdmlzaWJsZUNvbHVtbkluZGV4KTtcblxuICAgICAgICBjb25zdCBpc1Njcm9sbGVkVG9Cb3R0b20gPSB0aGlzLl9pc1Njcm9sbGVkVG9Cb3R0b20oY2hpbGRHcmlkKTtcbiAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gY2hpbGRHcmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLmxlbmd0aCAtIDE7XG4gICAgICAgIGlmICghaXNTY3JvbGxlZFRvQm90dG9tKSB7XG4gICAgICAgICAgICAvLyBzY3JvbGwgdG8gZW5kXG4gICAgICAgICAgICB0aGlzLnNjcm9sbEdyaWQoY2hpbGRHcmlkLCAnYm90dG9tJywgKCkgPT4gdGhpcy5mb2N1c1ByZXZDaGlsZChlbGVtLCB2aXNpYmxlQ29sdW1uSW5kZXgsIGdyaWQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RSb3dJbkNoaWxkID0gY2hpbGRHcmlkLmdldFJvd0J5SW5kZXgobGFzdEluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2hpbGRHcmlkID0gbGFzdFJvd0luQ2hpbGQubmF0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaWd4LWNoaWxkLWdyaWQtcm93JztcbiAgICAgICAgICAgIGlmIChpc0NoaWxkR3JpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNQcmV2Q2hpbGQobGFzdFJvd0luQ2hpbGQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLCB2aXNpYmxlQ29sdW1uSW5kZXgsIGNoaWxkR3JpZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNQcmV2Um93KGxhc3RSb3dJbkNoaWxkLm5hdGl2ZUVsZW1lbnQsIHZpc2libGVDb2x1bW5JbmRleCwgY2hpbGRHcmlkLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGZvY3VzUHJldih2aXNpYmxlQ29sdW1uSW5kZXgsIGdyaWQ/KSB7XG4gICAgICAgIGNvbnN0IGN1cnJHcmlkID0gZ3JpZCB8fCB0aGlzLmdyaWQ7XG4gICAgICAgIGxldCBwYXJlbnRDb250YWluZXIgPSB0aGlzLmdldENoaWxkQ29udGFpbmVyKGN1cnJHcmlkKTtcbiAgICAgICAgbGV0IGNoaWxkUm93Q29udGFpbmVyID0gdGhpcy5nZXRDaGlsZEdyaWRSb3dDb250YWluZXIoY3VyckdyaWQpO1xuICAgICAgICBjb25zdCBwcmV2SXNTaWJsaW5nQ2hpbGQgPSAhIWNoaWxkUm93Q29udGFpbmVyLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGxldCBwcmV2ID0gY2hpbGRSb3dDb250YWluZXIucHJldmlvdXNFbGVtZW50U2libGluZyB8fCBwYXJlbnRDb250YWluZXIucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgICAgIGlmIChwcmV2SXNTaWJsaW5nQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzUHJldkNoaWxkKHByZXYsIHZpc2libGVDb2x1bW5JbmRleCwgY3VyckdyaWQucGFyZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c1ByZXZSb3cocHJldiwgdmlzaWJsZUNvbHVtbkluZGV4LCBjdXJyR3JpZC5wYXJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxHcmlkKGN1cnJHcmlkLnBhcmVudCwgJ3ByZXYnLFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29udGFpbmVyID0gdGhpcy5nZXRDaGlsZENvbnRhaW5lcihncmlkKTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRSb3dDb250YWluZXIgPSB0aGlzLmdldENoaWxkR3JpZFJvd0NvbnRhaW5lcihncmlkKTtcbiAgICAgICAgICAgICAgICAgICAgcHJldiA9IGNoaWxkUm93Q29udGFpbmVyLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgfHwgcGFyZW50Q29udGFpbmVyLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2SXNTaWJsaW5nQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNQcmV2Q2hpbGQocHJldiwgdmlzaWJsZUNvbHVtbkluZGV4LCBjdXJyR3JpZC5wYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c1ByZXZSb3cocHJldiwgdmlzaWJsZUNvbHVtbkluZGV4LCBjdXJyR3JpZC5wYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldE5leHRQYXJlbnRJbmZvKGdyaWQpIHtcbiAgICAgICAgLy8gZmluZCBuZXh0IHBhcmVudCB0aGF0IGlzIG5vdCBhdCBib3R0b21cbiAgICAgICAgbGV0IGN1cnJHcmlkID0gZ3JpZC5wYXJlbnQ7XG4gICAgICAgIGxldCBuZXh0RWxlbSA9IHRoaXMuZ2V0Q2hpbGRDb250YWluZXIoZ3JpZCkubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICB3aGlsZSAoIW5leHRFbGVtICYmIGN1cnJHcmlkLnBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbmV4dEVsZW0gPSB0aGlzLmdldENoaWxkQ29udGFpbmVyKGN1cnJHcmlkKS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBjdXJyR3JpZCA9IGN1cnJHcmlkLnBhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGdyaWQ6IGN1cnJHcmlkLCBuZXh0RWxlbWVudDogbmV4dEVsZW0gfTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXROZXh0U2Nyb2xsYWJsZShncmlkKSB7XG4gICAgICAgIGxldCBjdXJyR3JpZCA9IGdyaWQucGFyZW50O1xuICAgICAgICBpZiAoIWN1cnJHcmlkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBncmlkOiBncmlkLCBwcmV2OiBudWxsIH07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5vblNjcm9sbGFibGUgPSBjdXJyR3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpLnNjcm9sbFRvcCA9PT0gMDtcbiAgICAgICAgbGV0IHByZXYgPSBncmlkO1xuICAgICAgICB3aGlsZSAobm9uU2Nyb2xsYWJsZSAmJiBjdXJyR3JpZC5wYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHByZXYgPSBjdXJyR3JpZDtcbiAgICAgICAgICAgIGN1cnJHcmlkID0gY3VyckdyaWQucGFyZW50O1xuICAgICAgICAgICAgbm9uU2Nyb2xsYWJsZSA9IGN1cnJHcmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmdldFZlcnRpY2FsU2Nyb2xsKCkuc2Nyb2xsVG9wID09PSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGdyaWQ6IGN1cnJHcmlkLCBwcmV2OiBwcmV2IH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c05leHQodmlzaWJsZUNvbHVtbkluZGV4LCBncmlkPykge1xuICAgICAgICBjb25zdCBjdXJyR3JpZCA9IGdyaWQgfHwgdGhpcy5ncmlkO1xuICAgICAgICBjb25zdCBwYXJlbnRJbmZvID0gdGhpcy5nZXROZXh0UGFyZW50SW5mbyhjdXJyR3JpZCk7XG4gICAgICAgIGNvbnN0IG5leHRQYXJlbnRHcmlkID0gcGFyZW50SW5mby5ncmlkO1xuICAgICAgICBsZXQgbmV4dFBhcmVudEVsZW0gPSBwYXJlbnRJbmZvLm5leHRFbGVtZW50O1xuICAgICAgICBsZXQgY2hpbGRSb3dDb250YWluZXIgPSB0aGlzLmdldENoaWxkR3JpZFJvd0NvbnRhaW5lcihjdXJyR3JpZCk7XG4gICAgICAgIGNvbnN0IG5leHRJc1NpYmxpbmdDaGlsZCA9ICEhY2hpbGRSb3dDb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBsZXQgbmV4dCA9IGNoaWxkUm93Q29udGFpbmVyLm5leHRFbGVtZW50U2libGluZyB8fCBuZXh0UGFyZW50RWxlbTtcbiAgICAgICAgY29uc3QgdmVydGljYWxTY3JvbGwgPSBuZXh0UGFyZW50R3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpO1xuICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgICAgaWYgKG5leHRJc1NpYmxpbmdDaGlsZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNOZXh0Q2hpbGQobmV4dCwgdmlzaWJsZUNvbHVtbkluZGV4LCBuZXh0UGFyZW50R3JpZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNOZXh0Um93KG5leHQsIHZpc2libGVDb2x1bW5JbmRleCwgZ3JpZCB8fCBuZXh0UGFyZW50R3JpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodmVydGljYWxTY3JvbGwuc2Nyb2xsVG9wICE9PVxuICAgICAgICAgICAgdmVydGljYWxTY3JvbGwuc2Nyb2xsSGVpZ2h0IC0gbmV4dFBhcmVudEdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yQ29udGFpbmVyU2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxHcmlkKG5leHRQYXJlbnRHcmlkLCAnbmV4dCcsXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGFyZW50RWxlbSA9IHBhcmVudEluZm8ubmV4dEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkUm93Q29udGFpbmVyID0gdGhpcy5nZXRDaGlsZEdyaWRSb3dDb250YWluZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IGNoaWxkUm93Q29udGFpbmVyLm5leHRFbGVtZW50U2libGluZyB8fCBuZXh0UGFyZW50RWxlbTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQgJiYgbmV4dElzU2libGluZ0NoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzTmV4dENoaWxkKG5leHQsIHZpc2libGVDb2x1bW5JbmRleCwgbmV4dFBhcmVudEdyaWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNOZXh0Um93KG5leHQsIHZpc2libGVDb2x1bW5JbmRleCwgZ3JpZCB8fCBuZXh0UGFyZW50R3JpZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGdldE5leHRTY3JvbGxhYmxlRG93bihncmlkKSB7XG4gICAgICAgIGxldCBjdXJyR3JpZCA9IGdyaWQucGFyZW50O1xuICAgICAgICBpZiAoIWN1cnJHcmlkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBncmlkOiBncmlkLCBwcmV2OiBudWxsIH07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNjcm9sbFRvcCA9IGN1cnJHcmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmdldFZlcnRpY2FsU2Nyb2xsKCkuc2Nyb2xsVG9wO1xuICAgICAgICBsZXQgc2Nyb2xsSGVpZ2h0ID0gY3VyckdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKS5zY3JvbGxIZWlnaHQ7XG4gICAgICAgIGxldCBub25TY3JvbGxhYmxlID0gc2Nyb2xsSGVpZ2h0ID09PSAwIHx8XG4gICAgICAgICAgICBNYXRoLnJvdW5kKHNjcm9sbFRvcCArIGN1cnJHcmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvckNvbnRhaW5lclNpemUpID09PSBzY3JvbGxIZWlnaHQ7XG4gICAgICAgIGxldCBwcmV2ID0gZ3JpZDtcbiAgICAgICAgd2hpbGUgKG5vblNjcm9sbGFibGUgJiYgY3VyckdyaWQucGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBwcmV2ID0gY3VyckdyaWQ7XG4gICAgICAgICAgICBjdXJyR3JpZCA9IGN1cnJHcmlkLnBhcmVudDtcbiAgICAgICAgICAgIHNjcm9sbFRvcCA9IGN1cnJHcmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmdldFZlcnRpY2FsU2Nyb2xsKCkuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gY3VyckdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKS5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICBub25TY3JvbGxhYmxlID0gc2Nyb2xsSGVpZ2h0ID09PSAwIHx8XG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZChzY3JvbGxUb3AgKyBjdXJyR3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5pZ3hGb3JDb250YWluZXJTaXplKSA9PT0gc2Nyb2xsSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGdyaWQ6IGN1cnJHcmlkLCBwcmV2OiBwcmV2IH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0TWluQm90dG9tKGdyaWQpIHtcbiAgICAgICAgbGV0IGN1cnJHcmlkID0gZ3JpZDtcbiAgICAgICAgbGV0IGJvdHRvbSA9IGN1cnJHcmlkLnRib2R5Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuICAgICAgICB3aGlsZSAoY3VyckdyaWQucGFyZW50KSB7XG4gICAgICAgICAgICBjdXJyR3JpZCA9IGN1cnJHcmlkLnBhcmVudDtcbiAgICAgICAgICAgIGJvdHRvbSA9IE1hdGgubWluKGJvdHRvbSwgY3VyckdyaWQudGJvZHkubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3R0b207XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0TWF4VG9wKGdyaWQpIHtcbiAgICAgICAgbGV0IGN1cnJHcmlkID0gZ3JpZDtcbiAgICAgICAgbGV0IHRvcCA9IGN1cnJHcmlkLnRib2R5Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICB3aGlsZSAoY3VyckdyaWQucGFyZW50KSB7XG4gICAgICAgICAgICBjdXJyR3JpZCA9IGN1cnJHcmlkLnBhcmVudDtcbiAgICAgICAgICAgIHRvcCA9IE1hdGgubWF4KHRvcCwgY3VyckdyaWQudGJvZHkubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3A7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c05leHRSb3coZWxlbSwgdmlzaWJsZUNvbHVtbkluZGV4LCBncmlkLCBpc1N1bW1hcnk/KSB7XG4gICAgICAgIGNvbnN0IGNlbGxTZWxlY3RvciA9IHRoaXMuZ2V0Q2VsbFNlbGVjdG9yKHZpc2libGVDb2x1bW5JbmRleCwgaXNTdW1tYXJ5KTtcbiAgICAgICAgaWYgKGdyaWQubmF2aWdhdGlvbi5pc0NvbHVtbkZ1bGx5VmlzaWJsZSh2aXNpYmxlQ29sdW1uSW5kZXgpKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID1cbiAgICAgICAgICAgICAgICBlbGVtLnF1ZXJ5U2VsZWN0b3IoYCR7Y2VsbFNlbGVjdG9yfVtkYXRhLXZpc2libGVJbmRleD1cIiR7dmlzaWJsZUNvbHVtbkluZGV4fVwiXWApO1xuICAgICAgICAgICAgY29uc3QgY2xvc2VzdFNjcm9sbGFibGVHcmlkID0gdGhpcy5nZXROZXh0U2Nyb2xsYWJsZURvd24oZ3JpZCkuZ3JpZDtcbiAgICAgICAgICAgIC8vIGNvbnN0IGRpZmYgPSBjZWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtIGdyaWQucm9vdEdyaWQudGJvZHkubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XG4gICAgICAgICAgICBjb25zdCBncmlkQm90dG9tID0gdGhpcy5fZ2V0TWluQm90dG9tKGdyaWQpO1xuICAgICAgICAgICAgY29uc3QgZGlmZiA9IGNlbGwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIC0gZ3JpZEJvdHRvbTtcbiAgICAgICAgICAgIGNvbnN0IGluVmlldyA9IGRpZmYgPD0gMDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGNsb3Nlc3RTY3JvbGxhYmxlR3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpLnNjcm9sbFRvcDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGNsb3Nlc3RTY3JvbGxhYmxlR3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpLnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGNhblNjcm9sbCA9ICEoc2Nyb2xsSGVpZ2h0ID09PSAwIHx8XG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZChzY3JvbGxUb3AgKyBjbG9zZXN0U2Nyb2xsYWJsZUdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yQ29udGFpbmVyU2l6ZSkgPT09IHNjcm9sbEhlaWdodCk7XG4gICAgICAgICAgICBpZiAoIWluVmlldyAmJiBjYW5TY3JvbGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEdyaWQoY2xvc2VzdFNjcm9sbGFibGVHcmlkLCBkaWZmLCAoKSA9PiBjZWxsLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNlbGwuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2VsbEVsZW0gPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoYCR7Y2VsbFNlbGVjdG9yfWApO1xuICAgICAgICAgICAgY29uc3Qgcm93SW5kZXggPSBwYXJzZUludChjZWxsRWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93aW5kZXgnKSwgMTApO1xuICAgICAgICAgICAgZ3JpZC5uYXZpZ2F0aW9uLnBlcmZvcm1Ib3Jpem9udGFsU2Nyb2xsVG9DZWxsKHJvd0luZGV4LCB2aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c1ByZXZSb3coZWxlbSwgdmlzaWJsZUNvbHVtbkluZGV4LCBncmlkLCBpbkNoaWxkPywgaXNTdW1tYXJ5Pykge1xuICAgICAgICBpZiAoZ3JpZC5uYXZpZ2F0aW9uLmlzQ29sdW1uRnVsbHlWaXNpYmxlKHZpc2libGVDb2x1bW5JbmRleCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxTZWxlY3RvciA9IHRoaXMuZ2V0Q2VsbFNlbGVjdG9yKHZpc2libGVDb2x1bW5JbmRleCwgaXNTdW1tYXJ5KTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKGAke2NlbGxTZWxlY3Rvcn1bZGF0YS12aXNpYmxlSW5kZXg9XCIke3Zpc2libGVDb2x1bW5JbmRleH1cIl1gKTtcbiAgICAgICAgICAgIGxldCBjZWxsID0gY2VsbHNbY2VsbHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBjb25zdCBySW5kZXggPSBwYXJzZUludChlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1yb3dpbmRleCcpLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBzY3JHcmlkID0gZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpLnNjcm9sbFRvcCAhPT0gMCA/IGdyaWQgOlxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TmV4dFNjcm9sbGFibGUoZ3JpZCkuZ3JpZDtcbiAgICAgICAgICAgIGNvbnN0IHRvcEdyaWQgPSBzY3JHcmlkLnRib2R5Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID5cbiAgICAgICAgICAgICAgICBncmlkLnJvb3RHcmlkLnRib2R5Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID8gc2NyR3JpZCA6IGdyaWQucm9vdEdyaWQ7XG4gICAgICAgICAgICBjb25zdCBncmlkVG9wID0gdGhpcy5fZ2V0TWF4VG9wKGdyaWQpO1xuICAgICAgICAgICAgY29uc3Qgc2NyVG9wID0gc2NyR3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpLnNjcm9sbFRvcDtcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBjZWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtXG4gICAgICAgICAgICAgICAgY2VsbC5vZmZzZXRIZWlnaHQgLSBncmlkVG9wO1xuICAgICAgICAgICAgaWYgKHNjclRvcCAhPT0gMCAmJiBkaWZmIDwgMCAmJiAhaW5DaGlsZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsR3JpZChzY3JHcmlkLCBkaWZmLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gIWlzU3VtbWFyeSA/IGdyaWQubmF2aWdhdGlvbi5nZXRSb3dCeUluZGV4KHJJbmRleCkgOiBlbGVtO1xuICAgICAgICAgICAgICAgICAgICBjZWxsID0gZWwucXVlcnlTZWxlY3RvckFsbChgJHtjZWxsU2VsZWN0b3J9W2RhdGEtdmlzaWJsZUluZGV4PVwiJHt2aXNpYmxlQ29sdW1uSW5kZXh9XCJdYClbMF07XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaWZmIDwgMCAmJiBpbkNoaWxkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxHcmlkKHRvcEdyaWQsIGRpZmYsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNlbGwuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsU2Nyb2xsR3JpZFRvSW5kZXgoZ3JpZCwgdmlzaWJsZUNvbHVtbkluZGV4LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c1ByZXZSb3coZWxlbSwgdmlzaWJsZUNvbHVtbkluZGV4LCBncmlkLCBpbkNoaWxkLCBpc1N1bW1hcnkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGhvcml6b250YWxTY3JvbGxHcmlkVG9JbmRleChncmlkLCB2aXNpYmxlQ29sdW1uSW5kZXgsIGNhbGxCYWNrRnVuYykge1xuICAgICAgICBjb25zdCB1bnBpbm5lZEluZGV4ID0gdGhpcy5nZXRDb2x1bW5VbnBpbm5lZEluZGV4KHZpc2libGVDb2x1bW5JbmRleCk7XG4gICAgICAgIGdyaWQucGFyZW50VmlydERpci5vbkNodW5rTG9hZFxuICAgICAgICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoY2FsbEJhY2tGdW5jKTtcbiAgICAgICAgZ3JpZC5kYXRhUm93TGlzdC50b0FycmF5KClbMF0udmlydERpclJvdy5zY3JvbGxUbyh1bnBpbm5lZEluZGV4KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzY3JvbGxHcmlkKGdyaWQsIHRhcmdldCwgY2FsbEJhY2tGdW5jKSB7XG4gICAgICAgIHRoaXMuZ2V0Rm9jdXNhYmxlR3JpZCgpLm5hdGl2ZUVsZW1lbnQuZm9jdXMoe3ByZXZlbnRTY3JvbGw6IHRydWV9KTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuYWRkU2Nyb2xsVG9wKHRhcmdldCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RvcCc6IGdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuc2Nyb2xsVG8oMCk7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdib3R0b20nOiBncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvKGdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2YubGVuZ3RoIC0gMSk7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICduZXh0JzogZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5zY3JvbGxOZXh0KCk7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdwcmV2JzogZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5zY3JvbGxQcmV2KCk7IGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIub25DaHVua0xvYWRcbiAgICAgICAgICAgICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoY2FsbEJhY2tGdW5jKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbmF2aWdhdGVVcEluQ2hpbGQocm93RWxlbWVudCwgY3VycmVudFJvd0luZGV4LCB2aXNpYmxlQ29sdW1uSW5kZXgpIHtcbiAgICAgICAgY29uc3QgcHJldkVsZW0gPSByb3dFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGNvbnN0IHNjcm9sbGFibGUgPSB0aGlzLmdldE5leHRTY3JvbGxhYmxlKHRoaXMuZ3JpZCk7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBzY3JvbGxhYmxlLmdyaWQ7XG4gICAgICAgIGNvbnN0IHNjclRvcCA9IGdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKS5zY3JvbGxUb3A7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclRvcCA9IHNjcm9sbGFibGUucHJldi5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHRvcCA9IHBhcnNlSW50KGNvbnRhaW5lclRvcC5zdHlsZS50b3AsIDEwKTtcbiAgICAgICAgaWYgKHNjclRvcCAhPT0gMCAmJiB0b3AgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEdyaWQoZ3JpZCwgLXByZXZFbGVtLm9mZnNldEhlaWdodCxcbiAgICAgICAgICAgICAgICAoKSA9PiBzdXBlci5uYXZpZ2F0ZVVwKHJvd0VsZW1lbnQsIHsgcm93OiBjdXJyZW50Um93SW5kZXgsIGNvbHVtbjogdmlzaWJsZUNvbHVtbkluZGV4IH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLm5hdmlnYXRlVXAocm93RWxlbWVudCwgeyByb3c6IGN1cnJlbnRSb3dJbmRleCwgY29sdW1uOiB2aXNpYmxlQ29sdW1uSW5kZXggfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9uYXZpZ2F0ZURvd25JbkNoaWxkKHJvd0VsZW1lbnQsIGN1cnJlbnRSb3dJbmRleCwgdmlzaWJsZUNvbHVtbkluZGV4KSB7XG4gICAgICAgIGNvbnN0IG5leHRFbGVtID0gcm93RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGNvbnN0IGNoaWxkQ29udGFpbmVyID0gdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBkaWZmID1cbiAgICAgICAgICAgIGNoaWxkQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtIHRoaXMuZ3JpZC5yb290R3JpZC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcbiAgICAgICAgY29uc3QgZW5kSXNWaXNpYmxlID0gZGlmZiA8IDA7XG4gICAgICAgIGNvbnN0IHNjcm9sbGFibGUgPSB0aGlzLmdldE5leHRTY3JvbGxhYmxlRG93bih0aGlzLmdyaWQpO1xuICAgICAgICBjb25zdCBncmlkID0gc2Nyb2xsYWJsZS5ncmlkO1xuICAgICAgICBpZiAoIWVuZElzVmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxHcmlkKGdyaWQsIG5leHRFbGVtLm9mZnNldEhlaWdodCxcbiAgICAgICAgICAgICAgICAoKSA9PiBzdXBlci5uYXZpZ2F0ZURvd24ocm93RWxlbWVudCwgeyByb3c6IGN1cnJlbnRSb3dJbmRleCwgY29sdW1uOiB2aXNpYmxlQ29sdW1uSW5kZXggfSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIubmF2aWdhdGVEb3duKHJvd0VsZW1lbnQsIHsgcm93OiBjdXJyZW50Um93SW5kZXgsIGNvbHVtbjogdmlzaWJsZUNvbHVtbkluZGV4IH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDbG9zZXN0RWxlbUJ5VGFnKHNvdXJjZUVsZW0sIHRhcmdldFRhZykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gc291cmNlRWxlbTtcbiAgICAgICAgd2hpbGUgKHJlc3VsdCAhPT0gbnVsbCAmJiByZXN1bHQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSB0YXJnZXRUYWcudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iXX0=