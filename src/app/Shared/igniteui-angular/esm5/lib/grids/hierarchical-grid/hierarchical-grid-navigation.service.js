/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { IgxGridNavigationService } from '../grid-navigation.service';
import { first } from 'rxjs/operators';
import { FilterMode } from '../grid-base.component';
import { isIE } from '../../core/utils';
var IgxHierarchicalGridNavigationService = /** @class */ (function (_super) {
    tslib_1.__extends(IgxHierarchicalGridNavigationService, _super);
    function IgxHierarchicalGridNavigationService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?=} visibleIndex
     * @param {?=} isSummary
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.getCellSelector = /**
     * @protected
     * @param {?=} visibleIndex
     * @param {?=} isSummary
     * @return {?}
     */
    function (visibleIndex, isSummary) {
        if (isSummary === void 0) { isSummary = false; }
        return isSummary ? 'igx-grid-summary-cell' : 'igx-hierarchical-grid-cell';
    };
    /**
     * @protected
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.getRowSelector = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'igx-hierarchical-grid-row';
    };
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.getRowByIndex = /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        /** @type {?} */
        var selector = this.getRowSelector();
        /** @type {?} */
        var rows = Array.from(this.grid.nativeElement.querySelectorAll(selector + "[data-rowindex=\"" + index + "\"]"));
        /** @type {?} */
        var row;
        rows.forEach(function (r) {
            /** @type {?} */
            var parentGrid = _this.getClosestElemByTag(r, 'igx-hierarchical-grid');
            if (parentGrid && parentGrid.getAttribute('id') === _this.grid.id) {
                row = r;
            }
        });
        return row;
    };
    /**
     * @private
     * @param {?=} grid
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.getChildContainer = /**
     * @private
     * @param {?=} grid
     * @return {?}
     */
    function (grid) {
        /** @type {?} */
        var currGrid = grid || this.grid;
        return currGrid.nativeElement.parentNode.parentNode.parentNode;
    };
    /**
     * @private
     * @param {?=} grid
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.getChildGridRowContainer = /**
     * @private
     * @param {?=} grid
     * @return {?}
     */
    function (grid) {
        /** @type {?} */
        var currGrid = grid || this.grid;
        return currGrid.nativeElement.parentNode.parentNode;
    };
    /**
     * @private
     * @param {?} childGridID
     * @param {?} grid
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.getChildGrid = /**
     * @private
     * @param {?} childGridID
     * @param {?} grid
     * @return {?}
     */
    function (childGridID, grid) {
        /** @type {?} */
        var cgrid = grid.hgridAPI.getChildGrids(true).filter(function (g) { return g.id === childGridID; })[0];
        return cgrid;
    };
    /**
     * @private
     * @param {?} grid
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype._isScrolledToBottom = /**
     * @private
     * @param {?} grid
     * @return {?}
     */
    function (grid) {
        /** @type {?} */
        var scrollTop = grid.verticalScrollContainer.getVerticalScroll().scrollTop;
        /** @type {?} */
        var scrollHeight = grid.verticalScrollContainer.getVerticalScroll().scrollHeight;
        return scrollHeight === 0 || Math.round(scrollTop + grid.verticalScrollContainer.igxForContainerSize) === scrollHeight;
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.getIsChildAtIndex = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.grid.isChildGridRecord(this.grid.verticalScrollContainer.igxForOf[index]);
    };
    /**
     * @param {?} rowIndex
     * @param {?} visibleColumnIndex
     * @param {?=} isSummary
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.getCellElementByVisibleIndex = /**
     * @param {?} rowIndex
     * @param {?} visibleColumnIndex
     * @param {?=} isSummary
     * @return {?}
     */
    function (rowIndex, visibleColumnIndex, isSummary) {
        if (isSummary === void 0) { isSummary = false; }
        /** @type {?} */
        var cellSelector = this.getCellSelector(visibleColumnIndex, isSummary);
        if (isSummary) {
            /** @type {?} */
            var summaryRow = this.grid.summariesRowList.toArray()[0].nativeElement;
            return summaryRow.querySelector(cellSelector + "[data-visibleIndex=\"" + visibleColumnIndex + "\"]");
        }
        /** @type {?} */
        var row = this.getRowByIndex(rowIndex);
        return row.querySelector(cellSelector + "[data-rowindex=\"" + rowIndex + "\"][data-visibleIndex=\"" + visibleColumnIndex + "\"]");
    };
    /**
     * @param {?} rowElement
     * @param {?} selectedNode
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.navigateUp = /**
     * @param {?} rowElement
     * @param {?} selectedNode
     * @return {?}
     */
    function (rowElement, selectedNode) {
        var _this = this;
        /** @type {?} */
        var prevElem = rowElement.previousElementSibling;
        /** @type {?} */
        var visibleColumnIndex = selectedNode.column;
        /** @type {?} */
        var currentRowIndex = selectedNode.row;
        if (prevElem) {
            /** @type {?} */
            var nodeName = prevElem.children[0].nodeName.toLowerCase();
            /** @type {?} */
            var isElemChildGrid = nodeName.toLowerCase() === 'igx-child-grid-row';
            if (isElemChildGrid) {
                this.focusPrevChild(prevElem, visibleColumnIndex, this.grid);
            }
            else {
                if (this.grid.parent !== null) {
                    // currently navigating in child grid
                    this._navigateUpInChild(rowElement, currentRowIndex, visibleColumnIndex);
                }
                else {
                    _super.prototype.navigateUp.call(this, rowElement, selectedNode);
                }
            }
        }
        else if (currentRowIndex !== 0) {
            // handle scenario when prev item is child grid but is not yet in view
            /** @type {?} */
            var isPrevChildGrid = this.getIsChildAtIndex(currentRowIndex - 1);
            if (!isPrevChildGrid) {
                _super.prototype.navigateUp.call(this, rowElement, selectedNode);
            }
            else {
                this.scrollGrid(this.grid, -rowElement.offsetHeight, function () {
                    rowElement = _this.getRowByIndex(currentRowIndex);
                    _this.navigateUp(rowElement, selectedNode);
                });
            }
        }
        else if (this.grid.parent !== null &&
            currentRowIndex === 0) {
            // move to prev row in sibling layout or parent
            this.focusPrev(visibleColumnIndex);
        }
    };
    /**
     * @param {?} rowElement
     * @param {?} selectedNode
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.navigateDown = /**
     * @param {?} rowElement
     * @param {?} selectedNode
     * @return {?}
     */
    function (rowElement, selectedNode) {
        /** @type {?} */
        var nextElem = rowElement.nextElementSibling;
        /** @type {?} */
        var visibleColumnIndex = selectedNode.column;
        /** @type {?} */
        var currentRowIndex = selectedNode.row;
        if (nextElem) {
            // next elem is in DOM
            /** @type {?} */
            var nodeName = nextElem.children[0].nodeName.toLowerCase();
            /** @type {?} */
            var isNextElemChildGrid = nodeName.toLowerCase() === 'igx-child-grid-row';
            if (isNextElemChildGrid) {
                this.focusNextChild(nextElem, visibleColumnIndex, this.grid);
            }
            else {
                if (this.grid.parent !== null) {
                    // currently navigating in child grid
                    this._navigateDownInChild(rowElement, currentRowIndex, visibleColumnIndex);
                }
                else {
                    _super.prototype.navigateDown.call(this, rowElement, selectedNode);
                }
            }
        }
        else if (currentRowIndex !== this.grid.verticalScrollContainer.igxForOf.length - 1) {
            // scroll next in view
            _super.prototype.navigateDown.call(this, rowElement, selectedNode);
        }
        else if (this.grid.parent !== null &&
            currentRowIndex === this.grid.verticalScrollContainer.igxForOf.length - 1) {
            // move to next row in sibling layout or in parent
            this.focusNext(visibleColumnIndex);
        }
    };
    /**
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.navigateTop = /**
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    function (visibleColumnIndex) {
        var _this = this;
        if (this.grid.parent !== null) {
            // navigating in child
            /** @type {?} */
            var verticalScroll = this.grid.verticalScrollContainer.getVerticalScroll();
            /** @type {?} */
            var cellSelector_1 = this.getCellSelector(visibleColumnIndex);
            if (verticalScroll.scrollTop === 0) {
                this._focusScrollCellInView(visibleColumnIndex);
            }
            else {
                this.scrollGrid(this.grid, 'top', function () {
                    /** @type {?} */
                    var cells = _this.grid.nativeElement.querySelectorAll(cellSelector_1 + "[data-visibleIndex=\"" + visibleColumnIndex + "\"]");
                    if (cells.length > 0) {
                        _this._focusScrollCellInView(visibleColumnIndex);
                    }
                });
            }
        }
        else {
            _super.prototype.navigateTop.call(this, visibleColumnIndex);
        }
    };
    /**
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.navigateBottom = /**
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    function (visibleColumnIndex) {
        var _this = this;
        // handle scenario where last index is child grid
        // in that case focus cell in last data row
        /** @type {?} */
        var lastIndex = this.grid.verticalScrollContainer.igxForOf.length - 1;
        if (this.getIsChildAtIndex(lastIndex)) {
            /** @type {?} */
            var targetIndex_1 = lastIndex - 1;
            /** @type {?} */
            var scrTopPosition = this.grid.verticalScrollContainer.getScrollForIndex(targetIndex_1, true);
            /** @type {?} */
            var verticalScroll = this.grid.verticalScrollContainer.getVerticalScroll();
            /** @type {?} */
            var cellSelector_2 = this.getCellSelector(visibleColumnIndex);
            if (verticalScroll.scrollTop === scrTopPosition) {
                /** @type {?} */
                var cells = this.getRowByIndex(targetIndex_1).querySelectorAll(cellSelector_2 + "[data-visibleIndex=\"" + visibleColumnIndex + "\"]");
                cells[cells.length - 1].focus();
            }
            else {
                this.scrollGrid(this.grid, scrTopPosition - verticalScroll.scrollTop, function () {
                    /** @type {?} */
                    var cells = _this.getRowByIndex(targetIndex_1).querySelectorAll(cellSelector_2 + "[data-visibleIndex=\"" + visibleColumnIndex + "\"]");
                    if (cells.length > 0) {
                        cells[cells.length - 1].focus();
                    }
                });
            }
        }
        else if (this.grid.parent !== null) {
            /** @type {?} */
            var childContainer = this.grid.nativeElement.parentNode.parentNode;
            /** @type {?} */
            var diff = childContainer.getBoundingClientRect().bottom - this.grid.rootGrid.tbody.nativeElement.getBoundingClientRect().bottom;
            /** @type {?} */
            var endIsVisible = diff < 0;
            /** @type {?} */
            var scrollable = this.getNextScrollableDown(this.grid);
            if (!endIsVisible) {
                this.scrollGrid(scrollable.grid, diff, function () { return _super.prototype.navigateBottom.call(_this, visibleColumnIndex); });
            }
            else {
                _super.prototype.navigateBottom.call(this, visibleColumnIndex);
            }
        }
        else {
            _super.prototype.navigateBottom.call(this, visibleColumnIndex);
        }
    };
    /**
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.goToLastCell = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // handle scenario where last index is child grid
        // in that case focus last cell in last data row
        /** @type {?} */
        var lastIndex = this.grid.verticalScrollContainer.igxForOf.length - 1;
        if (this.getIsChildAtIndex(lastIndex)) {
            /** @type {?} */
            var targetIndex_2 = lastIndex - 1;
            /** @type {?} */
            var scrTopPosition = this.grid.verticalScrollContainer.getScrollForIndex(targetIndex_2, true);
            /** @type {?} */
            var verticalScroll = this.grid.verticalScrollContainer.getVerticalScroll();
            if (verticalScroll.scrollTop === scrTopPosition) {
                this.onKeydownEnd(targetIndex_2);
            }
            else {
                this.scrollGrid(this.grid, scrTopPosition - verticalScroll.scrollTop, function () {
                    _this.onKeydownEnd(targetIndex_2);
                });
            }
        }
        else {
            _super.prototype.goToLastCell.call(this);
        }
    };
    /**
     * @param {?} rowIndex
     * @param {?=} isSummary
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.onKeydownEnd = /**
     * @param {?} rowIndex
     * @param {?=} isSummary
     * @return {?}
     */
    function (rowIndex, isSummary) {
        var _this = this;
        if (isSummary === void 0) { isSummary = false; }
        if (this.grid.parent && !isSummary) {
            // handle scenario where last child row might not be in view
            // parent should scroll to child grid end
            /** @type {?} */
            var childContainer = this.grid.nativeElement.parentNode.parentNode;
            /** @type {?} */
            var diffBottom = childContainer.getBoundingClientRect().bottom - this.grid.rootGrid.nativeElement.getBoundingClientRect().bottom;
            /** @type {?} */
            var row = this.grid.getRowByIndex(rowIndex).element.nativeElement;
            /** @type {?} */
            var rowBottom = row.getBoundingClientRect().bottom;
            /** @type {?} */
            var rowIsVisible = rowBottom <= this.grid.rootGrid.tbody.nativeElement.getBoundingClientRect().bottom;
            /** @type {?} */
            var gridTop = this._getMaxTop(this.grid);
            /** @type {?} */
            var diffTop = row.getBoundingClientRect().bottom -
                row.offsetHeight - gridTop;
            /** @type {?} */
            var endIsVisible = diffBottom <= 0;
            /** @type {?} */
            var topVisible = diffTop >= 0;
            if (!endIsVisible && !rowIsVisible) {
                this.scrollGrid(this.grid.parent, diffBottom, function () { return _super.prototype.onKeydownEnd.call(_this, rowIndex); });
            }
            else if (!topVisible) {
                /** @type {?} */
                var scrGrid = this.grid.verticalScrollContainer.getVerticalScroll().scrollTop !== 0 ? this.grid :
                    this.getNextScrollable(this.grid).grid;
                /** @type {?} */
                var topGrid = scrGrid.tbody.nativeElement.getBoundingClientRect().top >
                    this.grid.rootGrid.tbody.nativeElement.getBoundingClientRect().top ? scrGrid : this.grid.rootGrid;
                this.scrollGrid(topGrid, diffTop, function () { return _super.prototype.onKeydownEnd.call(_this, rowIndex); });
            }
            else {
                _super.prototype.onKeydownEnd.call(this, rowIndex, isSummary);
            }
        }
        else {
            _super.prototype.onKeydownEnd.call(this, rowIndex, isSummary);
        }
    };
    /**
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.goToFirstCell = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var verticalScroll = this.grid.verticalScrollContainer.getVerticalScroll();
        /** @type {?} */
        var horizontalScroll = this.grid.dataRowList.first.virtDirRow.getHorizontalScroll();
        if (verticalScroll.scrollTop === 0 && this.grid.parent) {
            // scroll parent so that current child is in view
            if (!horizontalScroll.clientWidth || parseInt(horizontalScroll.scrollLeft, 10) <= 1 || this.grid.pinnedColumns.length) {
                this.navigateTop(0);
            }
            else {
                this.horizontalScroll(this.grid.dataRowList.first.index).scrollTo(0);
                this.grid.parentVirtDir.onChunkLoad
                    .pipe(first())
                    .subscribe(function () {
                    _this.navigateTop(0);
                });
            }
        }
        else {
            _super.prototype.goToFirstCell.call(this);
        }
    };
    /**
     * @param {?} currentRowEl
     * @param {?} selectedNode
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.performTab = /**
     * @param {?} currentRowEl
     * @param {?} selectedNode
     * @return {?}
     */
    function (currentRowEl, selectedNode) {
        var _this = this;
        if (this.grid.rowInEditMode) {
            _super.prototype.performTab.call(this, currentRowEl, selectedNode);
            return;
        }
        /** @type {?} */
        var rowIndex = selectedNode.row;
        /** @type {?} */
        var visibleColumnIndex = selectedNode.column;
        /** @type {?} */
        var isSummaryRow = selectedNode.isSummaryRow;
        /** @type {?} */
        var summaryRows = this.grid.summariesRowList.toArray();
        /** @type {?} */
        var hasSummaries = summaryRows.length > 0;
        /** @type {?} */
        var isLastDataRow = rowIndex === this.grid.verticalScrollContainer.igxForOf.length - 1;
        /** @type {?} */
        var nextIsDataRow = this.grid.dataRowList.find(function (row) { return row.index === rowIndex + 1; });
        /** @type {?} */
        var isLastColumn = this.grid.unpinnedColumns[this.grid.unpinnedColumns.length - 1].visibleIndex === visibleColumnIndex;
        /** @type {?} */
        var isLastSummaryRow = hasSummaries && isSummaryRow;
        /** @type {?} */
        var nextIndex = rowIndex + 1;
        /** @type {?} */
        var virt = this.grid.verticalScrollContainer;
        /** @type {?} */
        var isNextChild = nextIndex <= virt.igxForOf.length - 1 &&
            this.grid.isChildGridRecord(virt.igxForOf[nextIndex]);
        if (!nextIsDataRow && !(isLastDataRow && hasSummaries) && isLastColumn && !isSummaryRow) {
            // navigating in child, next is not summary
            /** @type {?} */
            var childContainer = this.getChildGridRowContainer();
            /** @type {?} */
            var nextIsSiblingChild = this.grid.parent ? !!childContainer.nextElementSibling : false;
            if (nextIsSiblingChild) {
                this.focusNextChildDOMElem(childContainer, this.grid.parent);
            }
            else if (isNextChild) {
                /** @type {?} */
                var isInView = virt.state.startIndex + virt.state.chunkSize > nextIndex;
                if (!isInView) {
                    this.scrollGrid(this.grid, 'next', function () {
                        _this.focusNextChildDOMElem(currentRowEl, _this.grid);
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
            var parent_1 = this.grid.parent;
            /** @type {?} */
            var parentHasSummary = parent_1.summariesRowList.toArray().length > 0;
            /** @type {?} */
            var parentRowIndex = parseInt(this.getClosestElemByTag(currentRowEl, 'igx-child-grid-row').parentNode.getAttribute('data-rowindex'), 10);
            /** @type {?} */
            var isLastRowInParent = parent_1.verticalScrollContainer.igxForOf.length - 1 === parentRowIndex;
            // check if next is sibling
            /** @type {?} */
            var childRowContainer = this.getChildGridRowContainer(this.grid);
            /** @type {?} */
            var nextIsSiblingChild = !!childRowContainer.nextElementSibling;
            if (isLastRowInParent && parentHasSummary && !nextIsSiblingChild) {
                // next is parent summary
                /** @type {?} */
                var parentSummary = parent_1.summariesRowList.toArray()[0].nativeElement;
                parent_1.navigation.focusNextRow(parentSummary, 0, this.grid.rootGrid, true);
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
            _super.prototype.performTab.call(this, currentRowEl, selectedNode);
        }
    };
    /**
     * @private
     * @param {?} currentRowEl
     * @param {?} grid
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.focusNextChildDOMElem = /**
     * @private
     * @param {?} currentRowEl
     * @param {?} grid
     * @return {?}
     */
    function (currentRowEl, grid) {
        /** @type {?} */
        var gridElem = currentRowEl.nextElementSibling.querySelector('igx-hierarchical-grid');
        /** @type {?} */
        var childGridID = gridElem.getAttribute('id');
        /** @type {?} */
        var childGrid = this.getChildGrid(childGridID, grid);
        if (childGrid.allowFiltering && childGrid.filterMode === FilterMode.quickFilter) {
            childGrid.navigation.moveFocusToFilterCell(true);
            return;
        }
        this.focusNextChild(currentRowEl.nextElementSibling, 0, grid);
    };
    /**
     * @param {?} column
     * @param {?} eventArgs
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.navigatePrevFilterCell = /**
     * @param {?} column
     * @param {?} eventArgs
     * @return {?}
     */
    function (column, eventArgs) {
        if (column.visibleIndex === 0 && this.grid.parent) {
            eventArgs.preventDefault();
            /** @type {?} */
            var targetGrid = this.grid.parent;
            /** @type {?} */
            var prevSiblingChild = this.getChildGridRowContainer().previousElementSibling;
            if (prevSiblingChild) {
                /** @type {?} */
                var gridElem = prevSiblingChild.querySelectorAll('igx-hierarchical-grid')[0];
                targetGrid = this.getChildGrid(gridElem.getAttribute('id'), this.grid.parent);
            }
            this.focusPrev(targetGrid.unpinnedColumns[targetGrid.unpinnedColumns.length - 1].visibleIndex);
        }
        else {
            _super.prototype.navigatePrevFilterCell.call(this, column, eventArgs);
        }
    };
    /**
     * @param {?} column
     * @param {?} eventArgs
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.navigateNextFilterCell = /**
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
            /** @type {?} */
            var dataRows = this.grid.rowList.toArray();
            /** @type {?} */
            var hasRows = dataRows.length !== 0;
            /** @type {?} */
            var summaryRows = this.grid.summariesRowList.toArray();
            /** @type {?} */
            var hasSummaries = summaryRows.length > 0 && summaryRows[0].summaryCells.length > 0;
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
            _super.prototype.navigateNextFilterCell.call(this, column, eventArgs);
        }
    };
    /**
     * @param {?} currentRowEl
     * @param {?} selectedNode
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.performShiftTabKey = /**
     * @param {?} currentRowEl
     * @param {?} selectedNode
     * @return {?}
     */
    function (currentRowEl, selectedNode) {
        var _this = this;
        if (this.grid.rowInEditMode) {
            _super.prototype.performShiftTabKey.call(this, currentRowEl, selectedNode);
            return;
        }
        /** @type {?} */
        var rowIndex = selectedNode.row;
        /** @type {?} */
        var visibleColumnIndex = selectedNode.column;
        /** @type {?} */
        var isSummary = selectedNode.isSummaryRow;
        if (visibleColumnIndex === 0 && rowIndex === 0 && this.grid.parent && !isSummary) {
            if (this.grid.allowFiltering && this.grid.filterMode === FilterMode.quickFilter) {
                this.moveFocusToFilterCell();
            }
            else {
                /** @type {?} */
                var prevSiblingChild = this.getChildGridRowContainer().previousElementSibling;
                if (prevSiblingChild) {
                    /** @type {?} */
                    var gridElem = prevSiblingChild.querySelectorAll('igx-hierarchical-grid')[0];
                    this.performShiftTabIntoChild(gridElem, currentRowEl, rowIndex);
                }
                else {
                    /** @type {?} */
                    var selNode = {
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
            var gridElem = this.getLastGridElem(currentRowEl.previousElementSibling);
            this.performShiftTabIntoChild(gridElem, currentRowEl, rowIndex);
        }
        else if (visibleColumnIndex === 0 && isSummary) {
            /** @type {?} */
            var lastRowIndex_1 = this.grid.verticalScrollContainer.igxForOf.length - 1;
            if (lastRowIndex_1 === -1) {
                // no child data
                if (this.grid.allowFiltering && this.grid.filterMode === FilterMode.quickFilter) {
                    this.moveFocusToFilterCell();
                }
                else {
                    /** @type {?} */
                    var selNode = {
                        row: rowIndex,
                        column: this.grid.parent.unpinnedColumns[this.grid.parent.unpinnedColumns.length - 1].visibleIndex
                    };
                    this.navigateUp(currentRowEl, selNode);
                }
            }
            else if (!this.getIsChildAtIndex(lastRowIndex_1)) {
                _super.prototype.goToLastCell.call(this);
            }
            else {
                /** @type {?} */
                var scrTopPosition = this.grid.verticalScrollContainer.getScrollForIndex(lastRowIndex_1, true);
                /** @type {?} */
                var verticalScroll = this.grid.verticalScrollContainer.getVerticalScroll();
                if (verticalScroll.scrollTop === scrTopPosition || isNaN(scrTopPosition)) {
                    /** @type {?} */
                    var closestChild = this.getLastGridElem(this.grid.getRowByIndex(lastRowIndex_1).nativeElement.parentElement);
                    this.performShiftTabIntoChild(closestChild, currentRowEl, rowIndex);
                }
                else {
                    this.scrollGrid(this.grid, scrTopPosition - verticalScroll.scrollTop, function () {
                        /** @type {?} */
                        var closestChild = _this.getLastGridElem(_this.grid.getRowByIndex(lastRowIndex_1).nativeElement.parentElement);
                        _this.performShiftTabIntoChild(closestChild, currentRowEl, rowIndex);
                    });
                }
            }
        }
        else {
            _super.prototype.performShiftTabKey.call(this, currentRowEl, selectedNode);
        }
    };
    /**
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.getFocusableGrid = /**
     * @return {?}
     */
    function () {
        return (isIE() && this.grid.rootGrid) ? this.grid.rootGrid : this.grid;
    };
    /**
     * @private
     * @param {?} trContainer
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.getLastGridElem = /**
     * @private
     * @param {?} trContainer
     * @return {?}
     */
    function (trContainer) {
        /** @type {?} */
        var children = trContainer.children;
        /** @type {?} */
        var closestChild = children[children.length - 1].children[0].children[0];
        return closestChild;
    };
    /**
     * @private
     * @param {?} gridElem
     * @param {?} currentRowEl
     * @param {?} rowIndex
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.performShiftTabIntoChild = /**
     * @private
     * @param {?} gridElem
     * @param {?} currentRowEl
     * @param {?} rowIndex
     * @return {?}
     */
    function (gridElem, currentRowEl, rowIndex) {
        /** @type {?} */
        var childGridID = gridElem.getAttribute('id');
        /** @type {?} */
        var childGrid = this.getChildGrid(childGridID, this.grid) || this.getChildGrid(childGridID, this.grid.parent);
        /** @type {?} */
        var lastIndex = childGrid.unpinnedColumns[childGrid.unpinnedColumns.length - 1].visibleIndex;
        /** @type {?} */
        var summaryRows = childGrid.summariesRowList.toArray();
        if (summaryRows.length > 0 && summaryRows[0].summaryCells.length > 0) {
            // move focus to last summary row cell
            /** @type {?} */
            var summaryRow = summaryRows[0].nativeElement;
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
    };
    /**
     * @private
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype._focusScrollCellInView = /**
     * @private
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    function (visibleColumnIndex) {
        /** @type {?} */
        var cellSelector = this.getCellSelector(visibleColumnIndex);
        /** @type {?} */
        var cells = this.grid.nativeElement.querySelectorAll(cellSelector + "[data-visibleIndex=\"" + visibleColumnIndex + "\"]");
        /** @type {?} */
        var cell = cells[0];
        /** @type {?} */
        var childContainer = this.grid.nativeElement.parentNode.parentNode;
        /** @type {?} */
        var scrTop = this.grid.parent.verticalScrollContainer.getVerticalScroll().scrollTop;
        /** @type {?} */
        var maxScroll = this.grid.parent.verticalScrollContainer.getVerticalScroll().scrollHeight - this.grid.parent.calcHeight;
        /** @type {?} */
        var dc = childContainer.parentNode.parentNode;
        /** @type {?} */
        var scrWith = parseInt(dc.style.top, 10);
        /** @type {?} */
        var parentRowOffset = childContainer.parentNode.offsetTop + this.grid.nativeElement.offsetTop +
            scrWith;
        if ((scrTop === 0 && parentRowOffset < 0) || parentRowOffset === 0 || (scrTop === maxScroll && parentRowOffset > 0)) {
            // cell is in view
            cell.focus({ preventScroll: true });
        }
        else {
            // scroll parent so that cell is in view
            this.scrollGrid(this.grid.parent, parentRowOffset, function () { return cell.focus({ preventScroll: true }); });
        }
    };
    /**
     * @private
     * @param {?} elem
     * @param {?} visibleColumnIndex
     * @param {?} grid
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.focusNextChild = /**
     * @private
     * @param {?} elem
     * @param {?} visibleColumnIndex
     * @param {?} grid
     * @return {?}
     */
    function (elem, visibleColumnIndex, grid) {
        var _this = this;
        /** @type {?} */
        var gridElem = elem.querySelector('igx-hierarchical-grid');
        /** @type {?} */
        var childGridID = gridElem.getAttribute('id');
        /** @type {?} */
        var childGrid = this.getChildGrid(childGridID, grid);
        if (childGrid.rowList.toArray().length === 0) {
            this.focusNext(visibleColumnIndex, childGrid);
            return;
        }
        // Update column index since the next child can have in general less columns than visibleColumnIndex value.
        /** @type {?} */
        var lastCellIndex = childGrid.unpinnedColumns[childGrid.unpinnedColumns.length - 1].visibleIndex;
        visibleColumnIndex = Math.min(lastCellIndex, visibleColumnIndex);
        if (childGrid.verticalScrollContainer.state.startIndex !== 0) {
            // scroll to top
            this.scrollGrid(childGrid, 'top', function () { return _this.focusNextRow(elem, visibleColumnIndex, childGrid); });
        }
        else {
            this.focusNextRow(elem, visibleColumnIndex, childGrid);
        }
    };
    /**
     * @private
     * @param {?} elem
     * @param {?} visibleColumnIndex
     * @param {?} grid
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.focusPrevChild = /**
     * @private
     * @param {?} elem
     * @param {?} visibleColumnIndex
     * @param {?} grid
     * @return {?}
     */
    function (elem, visibleColumnIndex, grid) {
        var _this = this;
        /** @type {?} */
        var grids = [];
        /** @type {?} */
        var gridElems = Array.from(elem.querySelectorAll('igx-hierarchical-grid'));
        /** @type {?} */
        var childLevel = grid.childLayoutList.first.level;
        gridElems.forEach(function (hg) {
            /** @type {?} */
            var parentRow = _this.getClosestElemByTag(hg, 'igx-child-grid-row');
            if (parentRow && parseInt(parentRow.getAttribute('data-level'), 10) === childLevel) {
                grids.push(hg);
            }
        });
        /** @type {?} */
        var gridElem = grids[grids.length - 1];
        /** @type {?} */
        var childGridID = gridElem.getAttribute('id');
        /** @type {?} */
        var childGrid = this.getChildGrid(childGridID, grid);
        if (childGrid.rowList.toArray().length === 0) {
            this.focusPrev(visibleColumnIndex, childGrid);
            return;
        }
        // Update column index since the previous child can have in general less columns than visibleColumnIndex value.
        /** @type {?} */
        var lastCellIndex = childGrid.unpinnedColumns[childGrid.unpinnedColumns.length - 1].visibleIndex;
        visibleColumnIndex = Math.min(lastCellIndex, visibleColumnIndex);
        /** @type {?} */
        var isScrolledToBottom = this._isScrolledToBottom(childGrid);
        /** @type {?} */
        var lastIndex = childGrid.verticalScrollContainer.igxForOf.length - 1;
        if (!isScrolledToBottom) {
            // scroll to end
            this.scrollGrid(childGrid, 'bottom', function () { return _this.focusPrevChild(elem, visibleColumnIndex, grid); });
        }
        else {
            /** @type {?} */
            var lastRowInChild = childGrid.getRowByIndex(lastIndex);
            /** @type {?} */
            var isChildGrid = lastRowInChild.nativeElement.nodeName.toLowerCase() === 'igx-child-grid-row';
            if (isChildGrid) {
                this.focusPrevChild(lastRowInChild.nativeElement.parentNode, visibleColumnIndex, childGrid);
            }
            else {
                this.focusPrevRow(lastRowInChild.nativeElement, visibleColumnIndex, childGrid, true);
            }
        }
    };
    /**
     * @private
     * @param {?} visibleColumnIndex
     * @param {?=} grid
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.focusPrev = /**
     * @private
     * @param {?} visibleColumnIndex
     * @param {?=} grid
     * @return {?}
     */
    function (visibleColumnIndex, grid) {
        var _this = this;
        /** @type {?} */
        var currGrid = grid || this.grid;
        /** @type {?} */
        var parentContainer = this.getChildContainer(currGrid);
        /** @type {?} */
        var childRowContainer = this.getChildGridRowContainer(currGrid);
        /** @type {?} */
        var prevIsSiblingChild = !!childRowContainer.previousElementSibling;
        /** @type {?} */
        var prev = childRowContainer.previousElementSibling || parentContainer.previousElementSibling;
        if (prev) {
            if (prevIsSiblingChild) {
                this.focusPrevChild(prev, visibleColumnIndex, currGrid.parent);
            }
            else {
                this.focusPrevRow(prev, visibleColumnIndex, currGrid.parent);
            }
        }
        else {
            this.scrollGrid(currGrid.parent, 'prev', function () {
                parentContainer = _this.getChildContainer(grid);
                childRowContainer = _this.getChildGridRowContainer(grid);
                prev = childRowContainer.previousElementSibling || parentContainer.previousElementSibling;
                if (prevIsSiblingChild) {
                    _this.focusPrevChild(prev, visibleColumnIndex, currGrid.parent);
                }
                else {
                    _this.focusPrevRow(prev, visibleColumnIndex, currGrid.parent);
                }
            });
        }
    };
    /**
     * @private
     * @param {?} grid
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.getNextParentInfo = /**
     * @private
     * @param {?} grid
     * @return {?}
     */
    function (grid) {
        // find next parent that is not at bottom
        /** @type {?} */
        var currGrid = grid.parent;
        /** @type {?} */
        var nextElem = this.getChildContainer(grid).nextElementSibling;
        while (!nextElem && currGrid.parent !== null) {
            nextElem = this.getChildContainer(currGrid).nextElementSibling;
            currGrid = currGrid.parent;
        }
        return { grid: currGrid, nextElement: nextElem };
    };
    /**
     * @private
     * @param {?} grid
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.getNextScrollable = /**
     * @private
     * @param {?} grid
     * @return {?}
     */
    function (grid) {
        /** @type {?} */
        var currGrid = grid.parent;
        if (!currGrid) {
            return { grid: grid, prev: null };
        }
        /** @type {?} */
        var nonScrollable = currGrid.verticalScrollContainer.getVerticalScroll().scrollTop === 0;
        /** @type {?} */
        var prev = grid;
        while (nonScrollable && currGrid.parent !== null) {
            prev = currGrid;
            currGrid = currGrid.parent;
            nonScrollable = currGrid.verticalScrollContainer.getVerticalScroll().scrollTop === 0;
        }
        return { grid: currGrid, prev: prev };
    };
    /**
     * @private
     * @param {?} visibleColumnIndex
     * @param {?=} grid
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.focusNext = /**
     * @private
     * @param {?} visibleColumnIndex
     * @param {?=} grid
     * @return {?}
     */
    function (visibleColumnIndex, grid) {
        var _this = this;
        /** @type {?} */
        var currGrid = grid || this.grid;
        /** @type {?} */
        var parentInfo = this.getNextParentInfo(currGrid);
        /** @type {?} */
        var nextParentGrid = parentInfo.grid;
        /** @type {?} */
        var nextParentElem = parentInfo.nextElement;
        /** @type {?} */
        var childRowContainer = this.getChildGridRowContainer(currGrid);
        /** @type {?} */
        var nextIsSiblingChild = !!childRowContainer.nextElementSibling;
        /** @type {?} */
        var next = childRowContainer.nextElementSibling || nextParentElem;
        /** @type {?} */
        var verticalScroll = nextParentGrid.verticalScrollContainer.getVerticalScroll();
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
            this.scrollGrid(nextParentGrid, 'next', function () {
                nextParentElem = parentInfo.nextElement;
                childRowContainer = _this.getChildGridRowContainer();
                next = childRowContainer.nextElementSibling || nextParentElem;
                if (next && nextIsSiblingChild) {
                    _this.focusNextChild(next, visibleColumnIndex, nextParentGrid);
                }
                else if (next) {
                    _this.focusNextRow(next, visibleColumnIndex, grid || nextParentGrid);
                }
            });
        }
    };
    /**
     * @private
     * @param {?} grid
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.getNextScrollableDown = /**
     * @private
     * @param {?} grid
     * @return {?}
     */
    function (grid) {
        /** @type {?} */
        var currGrid = grid.parent;
        if (!currGrid) {
            return { grid: grid, prev: null };
        }
        /** @type {?} */
        var scrollTop = currGrid.verticalScrollContainer.getVerticalScroll().scrollTop;
        /** @type {?} */
        var scrollHeight = currGrid.verticalScrollContainer.getVerticalScroll().scrollHeight;
        /** @type {?} */
        var nonScrollable = scrollHeight === 0 ||
            Math.round(scrollTop + currGrid.verticalScrollContainer.igxForContainerSize) === scrollHeight;
        /** @type {?} */
        var prev = grid;
        while (nonScrollable && currGrid.parent !== null) {
            prev = currGrid;
            currGrid = currGrid.parent;
            scrollTop = currGrid.verticalScrollContainer.getVerticalScroll().scrollTop;
            scrollHeight = currGrid.verticalScrollContainer.getVerticalScroll().scrollHeight;
            nonScrollable = scrollHeight === 0 ||
                Math.round(scrollTop + currGrid.verticalScrollContainer.igxForContainerSize) === scrollHeight;
        }
        return { grid: currGrid, prev: prev };
    };
    /**
     * @private
     * @param {?} grid
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype._getMinBottom = /**
     * @private
     * @param {?} grid
     * @return {?}
     */
    function (grid) {
        /** @type {?} */
        var currGrid = grid;
        /** @type {?} */
        var bottom = currGrid.tbody.nativeElement.getBoundingClientRect().bottom;
        while (currGrid.parent) {
            currGrid = currGrid.parent;
            bottom = Math.min(bottom, currGrid.tbody.nativeElement.getBoundingClientRect().bottom);
        }
        return bottom;
    };
    /**
     * @private
     * @param {?} grid
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype._getMaxTop = /**
     * @private
     * @param {?} grid
     * @return {?}
     */
    function (grid) {
        /** @type {?} */
        var currGrid = grid;
        /** @type {?} */
        var top = currGrid.tbody.nativeElement.getBoundingClientRect().top;
        while (currGrid.parent) {
            currGrid = currGrid.parent;
            top = Math.max(top, currGrid.tbody.nativeElement.getBoundingClientRect().top);
        }
        return top;
    };
    /**
     * @private
     * @param {?} elem
     * @param {?} visibleColumnIndex
     * @param {?} grid
     * @param {?=} isSummary
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.focusNextRow = /**
     * @private
     * @param {?} elem
     * @param {?} visibleColumnIndex
     * @param {?} grid
     * @param {?=} isSummary
     * @return {?}
     */
    function (elem, visibleColumnIndex, grid, isSummary) {
        /** @type {?} */
        var cellSelector = this.getCellSelector(visibleColumnIndex, isSummary);
        if (grid.navigation.isColumnFullyVisible(visibleColumnIndex)) {
            /** @type {?} */
            var cell_1 = elem.querySelector(cellSelector + "[data-visibleIndex=\"" + visibleColumnIndex + "\"]");
            /** @type {?} */
            var closestScrollableGrid = this.getNextScrollableDown(grid).grid;
            // const diff = cell.getBoundingClientRect().bottom - grid.rootGrid.tbody.nativeElement.getBoundingClientRect().bottom;
            /** @type {?} */
            var gridBottom = this._getMinBottom(grid);
            /** @type {?} */
            var diff = cell_1.getBoundingClientRect().bottom - gridBottom;
            /** @type {?} */
            var inView = diff <= 0;
            /** @type {?} */
            var scrollTop = closestScrollableGrid.verticalScrollContainer.getVerticalScroll().scrollTop;
            /** @type {?} */
            var scrollHeight = closestScrollableGrid.verticalScrollContainer.getVerticalScroll().scrollHeight;
            /** @type {?} */
            var canScroll = !(scrollHeight === 0 ||
                Math.round(scrollTop + closestScrollableGrid.verticalScrollContainer.igxForContainerSize) === scrollHeight);
            if (!inView && canScroll) {
                this.scrollGrid(closestScrollableGrid, diff, function () { return cell_1.focus({ preventScroll: true }); });
            }
            else {
                cell_1.focus({ preventScroll: true });
            }
        }
        else {
            /** @type {?} */
            var cellElem = elem.querySelector("" + cellSelector);
            /** @type {?} */
            var rowIndex = parseInt(cellElem.getAttribute('data-rowindex'), 10);
            grid.navigation.performHorizontalScrollToCell(rowIndex, visibleColumnIndex);
        }
    };
    /**
     * @private
     * @param {?} elem
     * @param {?} visibleColumnIndex
     * @param {?} grid
     * @param {?=} inChild
     * @param {?=} isSummary
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.focusPrevRow = /**
     * @private
     * @param {?} elem
     * @param {?} visibleColumnIndex
     * @param {?} grid
     * @param {?=} inChild
     * @param {?=} isSummary
     * @return {?}
     */
    function (elem, visibleColumnIndex, grid, inChild, isSummary) {
        var _this = this;
        if (grid.navigation.isColumnFullyVisible(visibleColumnIndex)) {
            /** @type {?} */
            var cellSelector_3 = this.getCellSelector(visibleColumnIndex, isSummary);
            /** @type {?} */
            var cells = elem.querySelectorAll(cellSelector_3 + "[data-visibleIndex=\"" + visibleColumnIndex + "\"]");
            /** @type {?} */
            var cell_2 = cells[cells.length - 1];
            /** @type {?} */
            var rIndex_1 = parseInt(elem.getAttribute('data-rowindex'), 10);
            /** @type {?} */
            var scrGrid = grid.verticalScrollContainer.getVerticalScroll().scrollTop !== 0 ? grid :
                this.getNextScrollable(grid).grid;
            /** @type {?} */
            var topGrid = scrGrid.tbody.nativeElement.getBoundingClientRect().top >
                grid.rootGrid.tbody.nativeElement.getBoundingClientRect().top ? scrGrid : grid.rootGrid;
            /** @type {?} */
            var gridTop = this._getMaxTop(grid);
            /** @type {?} */
            var scrTop = scrGrid.verticalScrollContainer.getVerticalScroll().scrollTop;
            /** @type {?} */
            var diff = cell_2.getBoundingClientRect().bottom -
                cell_2.offsetHeight - gridTop;
            if (scrTop !== 0 && diff < 0 && !inChild) {
                this.scrollGrid(scrGrid, diff, function () {
                    /** @type {?} */
                    var el = !isSummary ? grid.navigation.getRowByIndex(rIndex_1) : elem;
                    cell_2 = el.querySelectorAll(cellSelector_3 + "[data-visibleIndex=\"" + visibleColumnIndex + "\"]")[0];
                    cell_2.focus({ preventScroll: true });
                });
            }
            else if (diff < 0 && inChild) {
                this.scrollGrid(topGrid, diff, function () {
                    cell_2.focus({ preventScroll: true });
                });
            }
            else {
                cell_2.focus({ preventScroll: true });
            }
        }
        else {
            this.horizontalScrollGridToIndex(grid, visibleColumnIndex, function () {
                _this.focusPrevRow(elem, visibleColumnIndex, grid, inChild, isSummary);
            });
        }
    };
    /**
     * @private
     * @param {?} grid
     * @param {?} visibleColumnIndex
     * @param {?} callBackFunc
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.horizontalScrollGridToIndex = /**
     * @private
     * @param {?} grid
     * @param {?} visibleColumnIndex
     * @param {?} callBackFunc
     * @return {?}
     */
    function (grid, visibleColumnIndex, callBackFunc) {
        /** @type {?} */
        var unpinnedIndex = this.getColumnUnpinnedIndex(visibleColumnIndex);
        grid.parentVirtDir.onChunkLoad
            .pipe(first())
            .subscribe(callBackFunc);
        grid.dataRowList.toArray()[0].virtDirRow.scrollTo(unpinnedIndex);
    };
    /**
     * @private
     * @param {?} grid
     * @param {?} target
     * @param {?} callBackFunc
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.scrollGrid = /**
     * @private
     * @param {?} grid
     * @param {?} target
     * @param {?} callBackFunc
     * @return {?}
     */
    function (grid, target, callBackFunc) {
        this.getFocusableGrid().nativeElement.focus({ preventScroll: true });
        requestAnimationFrame(function () {
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
    };
    /**
     * @private
     * @param {?} rowElement
     * @param {?} currentRowIndex
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype._navigateUpInChild = /**
     * @private
     * @param {?} rowElement
     * @param {?} currentRowIndex
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    function (rowElement, currentRowIndex, visibleColumnIndex) {
        var _this = this;
        /** @type {?} */
        var prevElem = rowElement.previousElementSibling;
        /** @type {?} */
        var scrollable = this.getNextScrollable(this.grid);
        /** @type {?} */
        var grid = scrollable.grid;
        /** @type {?} */
        var scrTop = grid.verticalScrollContainer.getVerticalScroll().scrollTop;
        /** @type {?} */
        var containerTop = scrollable.prev.nativeElement.parentNode.parentNode.parentNode.parentNode;
        /** @type {?} */
        var top = parseInt(containerTop.style.top, 10);
        if (scrTop !== 0 && top < 0) {
            this.scrollGrid(grid, -prevElem.offsetHeight, function () { return _super.prototype.navigateUp.call(_this, rowElement, { row: currentRowIndex, column: visibleColumnIndex }); });
        }
        else {
            _super.prototype.navigateUp.call(this, rowElement, { row: currentRowIndex, column: visibleColumnIndex });
        }
    };
    /**
     * @private
     * @param {?} rowElement
     * @param {?} currentRowIndex
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype._navigateDownInChild = /**
     * @private
     * @param {?} rowElement
     * @param {?} currentRowIndex
     * @param {?} visibleColumnIndex
     * @return {?}
     */
    function (rowElement, currentRowIndex, visibleColumnIndex) {
        var _this = this;
        /** @type {?} */
        var nextElem = rowElement.nextElementSibling;
        /** @type {?} */
        var childContainer = this.grid.nativeElement.parentNode.parentNode;
        /** @type {?} */
        var diff = childContainer.getBoundingClientRect().bottom - this.grid.rootGrid.nativeElement.getBoundingClientRect().bottom;
        /** @type {?} */
        var endIsVisible = diff < 0;
        /** @type {?} */
        var scrollable = this.getNextScrollableDown(this.grid);
        /** @type {?} */
        var grid = scrollable.grid;
        if (!endIsVisible) {
            this.scrollGrid(grid, nextElem.offsetHeight, function () { return _super.prototype.navigateDown.call(_this, rowElement, { row: currentRowIndex, column: visibleColumnIndex }); });
        }
        else {
            _super.prototype.navigateDown.call(this, rowElement, { row: currentRowIndex, column: visibleColumnIndex });
        }
    };
    /**
     * @private
     * @param {?} sourceElem
     * @param {?} targetTag
     * @return {?}
     */
    IgxHierarchicalGridNavigationService.prototype.getClosestElemByTag = /**
     * @private
     * @param {?} sourceElem
     * @param {?} targetTag
     * @return {?}
     */
    function (sourceElem, targetTag) {
        /** @type {?} */
        var result = sourceElem;
        while (result !== null && result.nodeType === 1) {
            if (result.tagName.toLowerCase() === targetTag.toLowerCase()) {
                return result;
            }
            result = result.parentNode;
        }
        return null;
    };
    return IgxHierarchicalGridNavigationService;
}(IgxGridNavigationService));
export { IgxHierarchicalGridNavigationService };
if (false) {
    /** @type {?} */
    IgxHierarchicalGridNavigationService.prototype.grid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGllcmFyY2hpY2FsLWdyaWQtbmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9oaWVyYXJjaGljYWwtZ3JpZC9oaWVyYXJjaGljYWwtZ3JpZC1uYXZpZ2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBR3BELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUV4QztJQUEwRCxnRUFBd0I7SUFBbEY7O0lBc3hCQSxDQUFDOzs7Ozs7O0lBbnhCYSw4REFBZTs7Ozs7O0lBQXpCLFVBQTBCLFlBQXFCLEVBQUUsU0FBaUI7UUFBakIsMEJBQUEsRUFBQSxpQkFBaUI7UUFDOUQsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQztJQUM5RSxDQUFDOzs7OztJQUVTLDZEQUFjOzs7O0lBQXhCO1FBQ0ksT0FBTywyQkFBMkIsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7SUFFUyw0REFBYTs7Ozs7SUFBdkIsVUFBd0IsS0FBSztRQUE3QixpQkFZQzs7WUFYUyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTs7WUFDaEMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQ3pELFFBQVEseUJBQW1CLEtBQUssUUFBSSxDQUFDLENBQUM7O1lBQ3pDLEdBQUc7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQzs7Z0JBQ0wsVUFBVSxHQUFHLEtBQUksQ0FB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LENBQUMscUJBQXFCLEVBQUUsQ0FBQyxNQUFNOztZQUM3RyxZQUFZLEdBQUcsSUFBSSxHQUFHLENBQUM7O1lBQ3ZCLFVBQVUsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7WUFDbEQsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJO1FBQzVCLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDZixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsWUFBWSxFQUN2QyxjQUFNLE9BQUEsaUJBQU0sWUFBWSxhQUFDLFVBQVUsRUFBRSxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLENBQUMsRUFBcEYsQ0FBb0YsQ0FBQyxDQUFDO1NBQ25HO2FBQU07WUFDSCxpQkFBTSxZQUFZLFlBQUMsVUFBVSxFQUFFLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1NBQ3hGO0lBQ0wsQ0FBQzs7Ozs7OztJQUVPLGtFQUFtQjs7Ozs7O0lBQTNCLFVBQTRCLFVBQVUsRUFBRSxTQUFTOztZQUN6QyxNQUFNLEdBQUcsVUFBVTtRQUN2QixPQUFPLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxDQUFDLEVBQUU7WUFDN0MsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDMUQsT0FBTyxNQUFNLENBQUM7YUFDakI7WUFDRCxNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztTQUM5QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCwyQ0FBQztBQUFELENBQUMsQUF0eEJELENBQTBELHdCQUF3QixHQXN4QmpGOzs7O0lBcnhCRyxvREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJZ3hHcmlkTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9ncmlkLW5hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9oaWVyYXJjaGljYWwtZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBGaWx0ZXJNb2RlIH0gZnJvbSAnLi4vZ3JpZC1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi8uLi9ncmlkcy9jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IElTZWxlY3Rpb25Ob2RlIH0gZnJvbSAnLi4vLi4vY29yZS9ncmlkLXNlbGVjdGlvbic7XG5pbXBvcnQgeyBpc0lFIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBJZ3hIaWVyYXJjaGljYWxHcmlkTmF2aWdhdGlvblNlcnZpY2UgZXh0ZW5kcyBJZ3hHcmlkTmF2aWdhdGlvblNlcnZpY2Uge1xuICAgIHB1YmxpYyBncmlkOiBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50O1xuXG4gICAgcHJvdGVjdGVkIGdldENlbGxTZWxlY3Rvcih2aXNpYmxlSW5kZXg/OiBudW1iZXIsIGlzU3VtbWFyeSA9IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBpc1N1bW1hcnkgPyAnaWd4LWdyaWQtc3VtbWFyeS1jZWxsJyA6ICdpZ3gtaGllcmFyY2hpY2FsLWdyaWQtY2VsbCc7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFJvd1NlbGVjdG9yKCkge1xuICAgICAgICByZXR1cm4gJ2lneC1oaWVyYXJjaGljYWwtZ3JpZC1yb3cnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRSb3dCeUluZGV4KGluZGV4KSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gdGhpcy5nZXRSb3dTZWxlY3RvcigpO1xuICAgICAgICBjb25zdCByb3dzID0gQXJyYXkuZnJvbSh0aGlzLmdyaWQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgYCR7c2VsZWN0b3J9W2RhdGEtcm93aW5kZXg9XCIke2luZGV4fVwiXWApKTtcbiAgICAgICAgbGV0IHJvdztcbiAgICAgICAgcm93cy5mb3JFYWNoKChyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRHcmlkID0gdGhpcy5nZXRDbG9zZXN0RWxlbUJ5VGFnKHIsICdpZ3gtaGllcmFyY2hpY2FsLWdyaWQnKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRHcmlkICYmIHBhcmVudEdyaWQuZ2V0QXR0cmlidXRlKCdpZCcpID09PSB0aGlzLmdyaWQuaWQpIHtcbiAgICAgICAgICAgICAgICByb3cgPSByO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJvdztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENoaWxkQ29udGFpbmVyKGdyaWQ/KSB7XG4gICAgICAgIGNvbnN0IGN1cnJHcmlkID0gZ3JpZCB8fCB0aGlzLmdyaWQ7XG4gICAgICAgIHJldHVybiBjdXJyR3JpZC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q2hpbGRHcmlkUm93Q29udGFpbmVyKGdyaWQ/KSB7XG4gICAgICAgIGNvbnN0IGN1cnJHcmlkID0gZ3JpZCB8fCB0aGlzLmdyaWQ7XG4gICAgICAgIHJldHVybiBjdXJyR3JpZC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENoaWxkR3JpZChjaGlsZEdyaWRJRCwgZ3JpZCkge1xuICAgICAgICBjb25zdCBjZ3JpZCA9IGdyaWQuaGdyaWRBUEkuZ2V0Q2hpbGRHcmlkcyh0cnVlKS5maWx0ZXIoKGcpID0+IGcuaWQgPT09IGNoaWxkR3JpZElEKVswXTtcbiAgICAgICAgcmV0dXJuIGNncmlkO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzU2Nyb2xsZWRUb0JvdHRvbShncmlkKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKS5zY3JvbGxUb3A7XG4gICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKS5zY3JvbGxIZWlnaHQ7XG4gICAgICAgIHJldHVybiBzY3JvbGxIZWlnaHQgPT09IDAgfHwgTWF0aC5yb3VuZChzY3JvbGxUb3AgKyBncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvckNvbnRhaW5lclNpemUpID09PSBzY3JvbGxIZWlnaHQ7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0SXNDaGlsZEF0SW5kZXgoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5pc0NoaWxkR3JpZFJlY29yZCh0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2ZbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2VsbEVsZW1lbnRCeVZpc2libGVJbmRleChyb3dJbmRleCwgdmlzaWJsZUNvbHVtbkluZGV4LCBpc1N1bW1hcnkgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjZWxsU2VsZWN0b3IgPSB0aGlzLmdldENlbGxTZWxlY3Rvcih2aXNpYmxlQ29sdW1uSW5kZXgsIGlzU3VtbWFyeSk7XG4gICAgICAgIGlmIChpc1N1bW1hcnkpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1bW1hcnlSb3cgPSB0aGlzLmdyaWQuc3VtbWFyaWVzUm93TGlzdC50b0FycmF5KClbMF0ubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIHJldHVybiBzdW1tYXJ5Um93LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYCR7Y2VsbFNlbGVjdG9yfVtkYXRhLXZpc2libGVJbmRleD1cIiR7dmlzaWJsZUNvbHVtbkluZGV4fVwiXWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuZ2V0Um93QnlJbmRleChyb3dJbmRleCk7XG4gICAgICAgIHJldHVybiByb3cucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAke2NlbGxTZWxlY3Rvcn1bZGF0YS1yb3dpbmRleD1cIiR7cm93SW5kZXh9XCJdW2RhdGEtdmlzaWJsZUluZGV4PVwiJHt2aXNpYmxlQ29sdW1uSW5kZXh9XCJdYCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5hdmlnYXRlVXAocm93RWxlbWVudCwgc2VsZWN0ZWROb2RlOiBJU2VsZWN0aW9uTm9kZSkge1xuICAgICAgICBjb25zdCBwcmV2RWxlbSA9IHJvd0VsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgY29uc3QgdmlzaWJsZUNvbHVtbkluZGV4ID0gc2VsZWN0ZWROb2RlLmNvbHVtbjtcbiAgICAgICAgY29uc3QgY3VycmVudFJvd0luZGV4ID0gc2VsZWN0ZWROb2RlLnJvdztcbiAgICAgICAgaWYgKHByZXZFbGVtKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlTmFtZSA9IHByZXZFbGVtLmNoaWxkcmVuWzBdLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBjb25zdCBpc0VsZW1DaGlsZEdyaWQgPSBub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaWd4LWNoaWxkLWdyaWQtcm93JztcbiAgICAgICAgICAgIGlmIChpc0VsZW1DaGlsZEdyaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzUHJldkNoaWxkKHByZXZFbGVtLCB2aXNpYmxlQ29sdW1uSW5kZXgsIHRoaXMuZ3JpZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyaWQucGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGN1cnJlbnRseSBuYXZpZ2F0aW5nIGluIGNoaWxkIGdyaWRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmF2aWdhdGVVcEluQ2hpbGQocm93RWxlbWVudCwgY3VycmVudFJvd0luZGV4LCB2aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyLm5hdmlnYXRlVXAocm93RWxlbWVudCwgc2VsZWN0ZWROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJvd0luZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAvLyBoYW5kbGUgc2NlbmFyaW8gd2hlbiBwcmV2IGl0ZW0gaXMgY2hpbGQgZ3JpZCBidXQgaXMgbm90IHlldCBpbiB2aWV3XG4gICAgICAgICAgICBjb25zdCBpc1ByZXZDaGlsZEdyaWQgPSB0aGlzLmdldElzQ2hpbGRBdEluZGV4KGN1cnJlbnRSb3dJbmRleCAtIDEpO1xuICAgICAgICAgICAgaWYgKCFpc1ByZXZDaGlsZEdyaWQpIHtcbiAgICAgICAgICAgICAgICBzdXBlci5uYXZpZ2F0ZVVwKHJvd0VsZW1lbnQsIHNlbGVjdGVkTm9kZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsR3JpZCh0aGlzLmdyaWQsIC1yb3dFbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93RWxlbWVudCA9IHRoaXMuZ2V0Um93QnlJbmRleChjdXJyZW50Um93SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVVwKHJvd0VsZW1lbnQsIHNlbGVjdGVkTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ3JpZC5wYXJlbnQgIT09IG51bGwgJiZcbiAgICAgICAgICAgIGN1cnJlbnRSb3dJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gbW92ZSB0byBwcmV2IHJvdyBpbiBzaWJsaW5nIGxheW91dCBvciBwYXJlbnRcbiAgICAgICAgICAgIHRoaXMuZm9jdXNQcmV2KHZpc2libGVDb2x1bW5JbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIG5hdmlnYXRlRG93bihyb3dFbGVtZW50LCBzZWxlY3RlZE5vZGU6IElTZWxlY3Rpb25Ob2RlKSB7XG4gICAgICAgIGNvbnN0IG5leHRFbGVtID0gcm93RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGNvbnN0IHZpc2libGVDb2x1bW5JbmRleCA9IHNlbGVjdGVkTm9kZS5jb2x1bW47XG4gICAgICAgIGNvbnN0IGN1cnJlbnRSb3dJbmRleCA9IHNlbGVjdGVkTm9kZS5yb3c7XG4gICAgICAgIGlmIChuZXh0RWxlbSkge1xuICAgICAgICAgICAgLy8gbmV4dCBlbGVtIGlzIGluIERPTVxuICAgICAgICAgICAgY29uc3Qgbm9kZU5hbWUgPSBuZXh0RWxlbS5jaGlsZHJlblswXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgY29uc3QgaXNOZXh0RWxlbUNoaWxkR3JpZCA9IG5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpZ3gtY2hpbGQtZ3JpZC1yb3cnO1xuICAgICAgICAgICAgaWYgKGlzTmV4dEVsZW1DaGlsZEdyaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzTmV4dENoaWxkKG5leHRFbGVtLCB2aXNpYmxlQ29sdW1uSW5kZXgsIHRoaXMuZ3JpZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyaWQucGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGN1cnJlbnRseSBuYXZpZ2F0aW5nIGluIGNoaWxkIGdyaWRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmF2aWdhdGVEb3duSW5DaGlsZChyb3dFbGVtZW50LCBjdXJyZW50Um93SW5kZXgsIHZpc2libGVDb2x1bW5JbmRleCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIubmF2aWdhdGVEb3duKHJvd0VsZW1lbnQsIHNlbGVjdGVkTm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRSb3dJbmRleCAhPT0gdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIC8vIHNjcm9sbCBuZXh0IGluIHZpZXdcbiAgICAgICAgICAgIHN1cGVyLm5hdmlnYXRlRG93bihyb3dFbGVtZW50LCBzZWxlY3RlZE5vZGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ3JpZC5wYXJlbnQgIT09IG51bGwgJiZcbiAgICAgICAgICAgIGN1cnJlbnRSb3dJbmRleCA9PT0gdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIC8vIG1vdmUgdG8gbmV4dCByb3cgaW4gc2libGluZyBsYXlvdXQgb3IgaW4gcGFyZW50XG4gICAgICAgICAgICB0aGlzLmZvY3VzTmV4dCh2aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5hdmlnYXRlVG9wKHZpc2libGVDb2x1bW5JbmRleCkge1xuICAgICAgICBpZiAodGhpcy5ncmlkLnBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gbmF2aWdhdGluZyBpbiBjaGlsZFxuICAgICAgICAgICAgY29uc3QgdmVydGljYWxTY3JvbGwgPSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxTZWxlY3RvciA9IHRoaXMuZ2V0Q2VsbFNlbGVjdG9yKHZpc2libGVDb2x1bW5JbmRleCk7XG5cbiAgICAgICAgICAgIGlmICh2ZXJ0aWNhbFNjcm9sbC5zY3JvbGxUb3AgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mb2N1c1Njcm9sbENlbGxJblZpZXcodmlzaWJsZUNvbHVtbkluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxHcmlkKHRoaXMuZ3JpZCwgJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtjZWxsU2VsZWN0b3J9W2RhdGEtdmlzaWJsZUluZGV4PVwiJHt2aXNpYmxlQ29sdW1uSW5kZXh9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvY3VzU2Nyb2xsQ2VsbEluVmlldyh2aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIubmF2aWdhdGVUb3AodmlzaWJsZUNvbHVtbkluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBuYXZpZ2F0ZUJvdHRvbSh2aXNpYmxlQ29sdW1uSW5kZXgpIHtcbiAgICAgICAgLy8gaGFuZGxlIHNjZW5hcmlvIHdoZXJlIGxhc3QgaW5kZXggaXMgY2hpbGQgZ3JpZFxuICAgICAgICAvLyBpbiB0aGF0IGNhc2UgZm9jdXMgY2VsbCBpbiBsYXN0IGRhdGEgcm93XG4gICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5pZ3hGb3JPZi5sZW5ndGggLSAxO1xuICAgICAgICBpZiAodGhpcy5nZXRJc0NoaWxkQXRJbmRleChsYXN0SW5kZXgpKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IGxhc3RJbmRleCAtIDE7XG4gICAgICAgICAgICBjb25zdCBzY3JUb3BQb3NpdGlvbiA9IHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRTY3JvbGxGb3JJbmRleCh0YXJnZXRJbmRleCwgdHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbFNjcm9sbCA9IHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpO1xuICAgICAgICAgICAgY29uc3QgY2VsbFNlbGVjdG9yID0gdGhpcy5nZXRDZWxsU2VsZWN0b3IodmlzaWJsZUNvbHVtbkluZGV4KTtcbiAgICAgICAgICAgIGlmICh2ZXJ0aWNhbFNjcm9sbC5zY3JvbGxUb3AgPT09IHNjclRvcFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLmdldFJvd0J5SW5kZXgodGFyZ2V0SW5kZXgpLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgICAgIGAke2NlbGxTZWxlY3Rvcn1bZGF0YS12aXNpYmxlSW5kZXg9XCIke3Zpc2libGVDb2x1bW5JbmRleH1cIl1gKTtcbiAgICAgICAgICAgICAgICBjZWxsc1tjZWxscy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEdyaWQodGhpcy5ncmlkLCBzY3JUb3BQb3NpdGlvbiAtIHZlcnRpY2FsU2Nyb2xsLnNjcm9sbFRvcCxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLmdldFJvd0J5SW5kZXgodGFyZ2V0SW5kZXgpLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y2VsbFNlbGVjdG9yfVtkYXRhLXZpc2libGVJbmRleD1cIiR7dmlzaWJsZUNvbHVtbkluZGV4fVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGxzLmxlbmd0aCA+IDApIHsgY2VsbHNbY2VsbHMubGVuZ3RoIC0gMV0uZm9jdXMoKTsgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlICBpZiAodGhpcy5ncmlkLnBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRDb250YWluZXIgPSB0aGlzLmdyaWQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBjb25zdCBkaWZmID1cbiAgICAgICAgICAgIGNoaWxkQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtIHRoaXMuZ3JpZC5yb290R3JpZC50Ym9keS5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcbiAgICAgICAgICAgIGNvbnN0IGVuZElzVmlzaWJsZSA9IGRpZmYgPCAwO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYWJsZSA9IHRoaXMuZ2V0TmV4dFNjcm9sbGFibGVEb3duKHRoaXMuZ3JpZCk7XG4gICAgICAgICAgICBpZiAoIWVuZElzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsR3JpZChzY3JvbGxhYmxlLmdyaWQsIGRpZmYsXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHN1cGVyLm5hdmlnYXRlQm90dG9tKHZpc2libGVDb2x1bW5JbmRleCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdXBlci5uYXZpZ2F0ZUJvdHRvbSh2aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIubmF2aWdhdGVCb3R0b20odmlzaWJsZUNvbHVtbkluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ29Ub0xhc3RDZWxsKCkge1xuICAgICAgICAvLyBoYW5kbGUgc2NlbmFyaW8gd2hlcmUgbGFzdCBpbmRleCBpcyBjaGlsZCBncmlkXG4gICAgICAgIC8vIGluIHRoYXQgY2FzZSBmb2N1cyBsYXN0IGNlbGwgaW4gbGFzdCBkYXRhIHJvd1xuICAgICAgICBjb25zdCBsYXN0SW5kZXggPSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2YubGVuZ3RoIC0gMTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0SXNDaGlsZEF0SW5kZXgobGFzdEluZGV4KSkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBsYXN0SW5kZXggLSAxO1xuICAgICAgICAgICAgY29uc3Qgc2NyVG9wUG9zaXRpb24gPSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0U2Nyb2xsRm9ySW5kZXgodGFyZ2V0SW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgY29uc3QgdmVydGljYWxTY3JvbGwgPSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKTtcbiAgICAgICAgICAgIGlmICh2ZXJ0aWNhbFNjcm9sbC5zY3JvbGxUb3AgPT09IHNjclRvcFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbktleWRvd25FbmQodGFyZ2V0SW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEdyaWQodGhpcy5ncmlkLCBzY3JUb3BQb3NpdGlvbiAtIHZlcnRpY2FsU2Nyb2xsLnNjcm9sbFRvcCxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbktleWRvd25FbmQodGFyZ2V0SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLmdvVG9MYXN0Q2VsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uS2V5ZG93bkVuZChyb3dJbmRleCwgaXNTdW1tYXJ5ID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5wYXJlbnQgJiYgIWlzU3VtbWFyeSkge1xuICAgICAgICAgICAgLy8gaGFuZGxlIHNjZW5hcmlvIHdoZXJlIGxhc3QgY2hpbGQgcm93IG1pZ2h0IG5vdCBiZSBpbiB2aWV3XG4gICAgICAgICAgICAvLyBwYXJlbnQgc2hvdWxkIHNjcm9sbCB0byBjaGlsZCBncmlkIGVuZFxuICAgICAgICAgICAgY29uc3QgY2hpbGRDb250YWluZXIgPSB0aGlzLmdyaWQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBjb25zdCBkaWZmQm90dG9tID1cbiAgICAgICAgICAgICAgICBjaGlsZENvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gLSB0aGlzLmdyaWQucm9vdEdyaWQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XG4gICAgICAgICAgICBjb25zdCByb3cgPSB0aGlzLmdyaWQuZ2V0Um93QnlJbmRleChyb3dJbmRleCkuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgY29uc3Qgcm93Qm90dG9tID0gcm93LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcbiAgICAgICAgICAgIGNvbnN0IHJvd0lzVmlzaWJsZSA9IHJvd0JvdHRvbSA8PSB0aGlzLmdyaWQucm9vdEdyaWQudGJvZHkubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XG4gICAgICAgICAgICBjb25zdCBncmlkVG9wID0gdGhpcy5fZ2V0TWF4VG9wKHRoaXMuZ3JpZCk7XG4gICAgICAgICAgICBjb25zdCBkaWZmVG9wID0gcm93LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtXG4gICAgICAgICAgICAgICAgcm93Lm9mZnNldEhlaWdodCAtIGdyaWRUb3A7XG4gICAgICAgICAgICBjb25zdCBlbmRJc1Zpc2libGUgPSBkaWZmQm90dG9tIDw9IDA7XG4gICAgICAgICAgICBjb25zdCB0b3BWaXNpYmxlID0gZGlmZlRvcCA+PSAwO1xuICAgICAgICAgICAgaWYgKCFlbmRJc1Zpc2libGUgJiYgIXJvd0lzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsR3JpZCh0aGlzLmdyaWQucGFyZW50LCBkaWZmQm90dG9tLCAoKSA9PiBzdXBlci5vbktleWRvd25FbmQocm93SW5kZXgpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRvcFZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JHcmlkID0gdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmdldFZlcnRpY2FsU2Nyb2xsKCkuc2Nyb2xsVG9wICE9PSAwID8gdGhpcy5ncmlkIDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXROZXh0U2Nyb2xsYWJsZSh0aGlzLmdyaWQpLmdyaWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9wR3JpZCA9IHNjckdyaWQudGJvZHkubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWQucm9vdEdyaWQudGJvZHkubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPyBzY3JHcmlkIDogdGhpcy5ncmlkLnJvb3RHcmlkO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsR3JpZCh0b3BHcmlkLCBkaWZmVG9wLCAoKSA9PiBzdXBlci5vbktleWRvd25FbmQocm93SW5kZXgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3VwZXIub25LZXlkb3duRW5kKHJvd0luZGV4LCBpc1N1bW1hcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIub25LZXlkb3duRW5kKHJvd0luZGV4LCBpc1N1bW1hcnkpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ29Ub0ZpcnN0Q2VsbCgpIHtcbiAgICAgICAgY29uc3QgdmVydGljYWxTY3JvbGwgPSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKTtcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbFNjcm9sbCA9IHRoaXMuZ3JpZC5kYXRhUm93TGlzdC5maXJzdC52aXJ0RGlyUm93LmdldEhvcml6b250YWxTY3JvbGwoKTtcbiAgICAgICAgaWYgKHZlcnRpY2FsU2Nyb2xsLnNjcm9sbFRvcCA9PT0gMCAmJiB0aGlzLmdyaWQucGFyZW50KSB7XG4gICAgICAgICAgICAvLyBzY3JvbGwgcGFyZW50IHNvIHRoYXQgY3VycmVudCBjaGlsZCBpcyBpbiB2aWV3XG4gICAgICAgICAgICBpZiAoIWhvcml6b250YWxTY3JvbGwuY2xpZW50V2lkdGggfHwgcGFyc2VJbnQoaG9yaXpvbnRhbFNjcm9sbC5zY3JvbGxMZWZ0LCAxMCkgPD0gMSB8fCB0aGlzLmdyaWQucGlubmVkQ29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG9wKDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvcml6b250YWxTY3JvbGwodGhpcy5ncmlkLmRhdGFSb3dMaXN0LmZpcnN0LmluZGV4KS5zY3JvbGxUbygwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQucGFyZW50VmlydERpci5vbkNodW5rTG9hZFxuICAgICAgICAgICAgICAgICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUb3AoMCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIuZ29Ub0ZpcnN0Q2VsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHBlcmZvcm1UYWIoY3VycmVudFJvd0VsLCBzZWxlY3RlZE5vZGU6IElTZWxlY3Rpb25Ob2RlKSB7XG4gICAgICAgIGlmICh0aGlzLmdyaWQucm93SW5FZGl0TW9kZSkge1xuICAgICAgICAgICAgc3VwZXIucGVyZm9ybVRhYihjdXJyZW50Um93RWwsIHNlbGVjdGVkTm9kZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm93SW5kZXggPSBzZWxlY3RlZE5vZGUucm93O1xuICAgICAgICBjb25zdCB2aXNpYmxlQ29sdW1uSW5kZXggPSBzZWxlY3RlZE5vZGUuY29sdW1uO1xuICAgICAgICBjb25zdCBpc1N1bW1hcnlSb3cgPSBzZWxlY3RlZE5vZGUuaXNTdW1tYXJ5Um93O1xuICAgICAgICBjb25zdCBzdW1tYXJ5Um93cyA9IHRoaXMuZ3JpZC5zdW1tYXJpZXNSb3dMaXN0LnRvQXJyYXkoKTtcbiAgICAgICAgY29uc3QgaGFzU3VtbWFyaWVzID0gc3VtbWFyeVJvd3MubGVuZ3RoID4gMDtcbiAgICAgICAgY29uc3QgaXNMYXN0RGF0YVJvdyA9IHJvd0luZGV4ID09PSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2YubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3QgbmV4dElzRGF0YVJvdyA9IHRoaXMuZ3JpZC5kYXRhUm93TGlzdC5maW5kKHJvdyA9PiByb3cuaW5kZXggPT09IHJvd0luZGV4ICsgMSk7XG4gICAgICAgIGNvbnN0IGlzTGFzdENvbHVtbiA9IHRoaXMuZ3JpZC51bnBpbm5lZENvbHVtbnNbdGhpcy5ncmlkLnVucGlubmVkQ29sdW1ucy5sZW5ndGggLSAxXS52aXNpYmxlSW5kZXggPT09IHZpc2libGVDb2x1bW5JbmRleDtcbiAgICAgICAgY29uc3QgaXNMYXN0U3VtbWFyeVJvdyA9IGhhc1N1bW1hcmllcyAmJiBpc1N1bW1hcnlSb3c7XG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IHJvd0luZGV4ICsgMTtcbiAgICAgICAgY29uc3QgdmlydCA9IHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgaXNOZXh0Q2hpbGQgPSBuZXh0SW5kZXggPD0gdmlydC5pZ3hGb3JPZi5sZW5ndGggLSAxICYmXG4gICAgICAgICAgICB0aGlzLmdyaWQuaXNDaGlsZEdyaWRSZWNvcmQodmlydC5pZ3hGb3JPZltuZXh0SW5kZXhdKTtcbiAgICAgICAgaWYgKCFuZXh0SXNEYXRhUm93ICYmICEoaXNMYXN0RGF0YVJvdyAmJiBoYXNTdW1tYXJpZXMpICYmIGlzTGFzdENvbHVtbiAmJiAhaXNTdW1tYXJ5Um93KSB7XG4gICAgICAgICAgICAvLyBuYXZpZ2F0aW5nIGluIGNoaWxkLCBuZXh0IGlzIG5vdCBzdW1tYXJ5XG4gICAgICAgICAgICBjb25zdCBjaGlsZENvbnRhaW5lciA9IHRoaXMuZ2V0Q2hpbGRHcmlkUm93Q29udGFpbmVyKCk7XG4gICAgICAgICAgICBjb25zdCBuZXh0SXNTaWJsaW5nQ2hpbGQgPSB0aGlzLmdyaWQucGFyZW50ID8gISFjaGlsZENvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcgOiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChuZXh0SXNTaWJsaW5nQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzTmV4dENoaWxkRE9NRWxlbShjaGlsZENvbnRhaW5lciwgdGhpcy5ncmlkLnBhcmVudCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzTmV4dENoaWxkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNJblZpZXcgPSB2aXJ0LnN0YXRlLnN0YXJ0SW5kZXggKyB2aXJ0LnN0YXRlLmNodW5rU2l6ZSA+IG5leHRJbmRleDtcbiAgICAgICAgICAgICAgICBpZiAoIWlzSW5WaWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsR3JpZCh0aGlzLmdyaWQsICduZXh0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c05leHRDaGlsZERPTUVsZW0oY3VycmVudFJvd0VsLCB0aGlzLmdyaWQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzTmV4dENoaWxkRE9NRWxlbShjdXJyZW50Um93RWwsIHRoaXMuZ3JpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlRG93bihjdXJyZW50Um93RWwsIHsgcm93OiByb3dJbmRleCwgY29sdW1uOiAwIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGlzTGFzdFN1bW1hcnlSb3cgJiYgaXNMYXN0Q29sdW1uICYmIHRoaXMuZ3JpZC5wYXJlbnQpIHtcbiAgICAgICAgICAgIC8vIG5hdmlnYXRpbmcgaW4gY2hpbGQgc3VtbWFyeSwgbmV4dCBpcyBwYXJlbnQgc3VtbWFyeSBvciBuZXh0IHBhcmVudCByb3dcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ3JpZC5wYXJlbnQ7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRIYXNTdW1tYXJ5ID0gcGFyZW50LnN1bW1hcmllc1Jvd0xpc3QudG9BcnJheSgpLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRSb3dJbmRleCA9IHBhcnNlSW50KFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2xvc2VzdEVsZW1CeVRhZyhjdXJyZW50Um93RWwsICdpZ3gtY2hpbGQtZ3JpZC1yb3cnKS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1yb3dpbmRleCcpLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBpc0xhc3RSb3dJblBhcmVudCA9IHBhcmVudC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5pZ3hGb3JPZi5sZW5ndGggLSAxID09PSBwYXJlbnRSb3dJbmRleDtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIG5leHQgaXMgc2libGluZ1xuICAgICAgICAgICAgY29uc3QgY2hpbGRSb3dDb250YWluZXIgPSB0aGlzLmdldENoaWxkR3JpZFJvd0NvbnRhaW5lcih0aGlzLmdyaWQpO1xuICAgICAgICAgICAgY29uc3QgbmV4dElzU2libGluZ0NoaWxkID0gISFjaGlsZFJvd0NvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBpZiAoaXNMYXN0Um93SW5QYXJlbnQgJiYgcGFyZW50SGFzU3VtbWFyeSAmJiAhbmV4dElzU2libGluZ0NoaWxkKSB7XG4gICAgICAgICAgICAgICAgLy8gbmV4dCBpcyBwYXJlbnQgc3VtbWFyeVxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFN1bW1hcnkgPSBwYXJlbnQuc3VtbWFyaWVzUm93TGlzdC50b0FycmF5KClbMF0ubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgICAgICBwYXJlbnQubmF2aWdhdGlvbi5mb2N1c05leHRSb3cocGFyZW50U3VtbWFyeSwgMCwgdGhpcy5ncmlkLnJvb3RHcmlkLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbmV4dCBpcyBzaWJsaW5nIG9yIHBhcmVudFxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNOZXh0KDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGlzTGFzdERhdGFSb3cgJiYgaGFzU3VtbWFyaWVzICYmIGlzTGFzdENvbHVtbiAmJiB0aGlzLmdyaWQucGFyZW50KSB7XG4gICAgICAgICAgICAvLyBuYXZpZ2F0aW5nIGluIGNoaWxkIHJvd3MsIG5leHQgaXMgY2hpbGQgZ3JpZCdzIHN1bW1hcnkgcm93XG4gICAgICAgICAgICB0aGlzLmZvY3VzTmV4dFJvdyhzdW1tYXJ5Um93c1swXS5uYXRpdmVFbGVtZW50LCAwLCB0aGlzLmdyaWQucGFyZW50LCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLnBlcmZvcm1UYWIoY3VycmVudFJvd0VsLCBzZWxlY3RlZE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c05leHRDaGlsZERPTUVsZW0oY3VycmVudFJvd0VsLCBncmlkKSB7XG4gICAgICAgIGNvbnN0IGdyaWRFbGVtID0gY3VycmVudFJvd0VsLm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCdpZ3gtaGllcmFyY2hpY2FsLWdyaWQnKTtcbiAgICAgICAgY29uc3QgY2hpbGRHcmlkSUQgPSBncmlkRWxlbS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGNvbnN0IGNoaWxkR3JpZCA9IHRoaXMuZ2V0Q2hpbGRHcmlkKGNoaWxkR3JpZElELCBncmlkKTtcbiAgICAgICAgaWYgKGNoaWxkR3JpZC5hbGxvd0ZpbHRlcmluZyAmJiBjaGlsZEdyaWQuZmlsdGVyTW9kZSA9PT0gRmlsdGVyTW9kZS5xdWlja0ZpbHRlcikge1xuICAgICAgICAgICAgY2hpbGRHcmlkLm5hdmlnYXRpb24ubW92ZUZvY3VzVG9GaWx0ZXJDZWxsKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9jdXNOZXh0Q2hpbGQoY3VycmVudFJvd0VsLm5leHRFbGVtZW50U2libGluZywgMCwgZ3JpZCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5hdmlnYXRlUHJldkZpbHRlckNlbGwoY29sdW1uOiBJZ3hDb2x1bW5Db21wb25lbnQsIGV2ZW50QXJncykge1xuICAgICAgICBpZiAoY29sdW1uLnZpc2libGVJbmRleCA9PT0gMCAmJiB0aGlzLmdyaWQucGFyZW50KSB7XG4gICAgICAgICAgICBldmVudEFyZ3MucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCB0YXJnZXRHcmlkID0gdGhpcy5ncmlkLnBhcmVudDtcbiAgICAgICAgICAgIGNvbnN0IHByZXZTaWJsaW5nQ2hpbGQgPSB0aGlzLmdldENoaWxkR3JpZFJvd0NvbnRhaW5lcigpLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBpZiAocHJldlNpYmxpbmdDaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRFbGVtID0gcHJldlNpYmxpbmdDaGlsZC5xdWVyeVNlbGVjdG9yQWxsKCdpZ3gtaGllcmFyY2hpY2FsLWdyaWQnKVswXTtcbiAgICAgICAgICAgICAgICB0YXJnZXRHcmlkID0gdGhpcy5nZXRDaGlsZEdyaWQoZ3JpZEVsZW0uZ2V0QXR0cmlidXRlKCdpZCcpLCB0aGlzLmdyaWQucGFyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZm9jdXNQcmV2KHRhcmdldEdyaWQudW5waW5uZWRDb2x1bW5zW3RhcmdldEdyaWQudW5waW5uZWRDb2x1bW5zLmxlbmd0aCAtIDFdLnZpc2libGVJbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlci5uYXZpZ2F0ZVByZXZGaWx0ZXJDZWxsKGNvbHVtbiwgZXZlbnRBcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBuYXZpZ2F0ZU5leHRGaWx0ZXJDZWxsKGNvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50LCBldmVudEFyZ3MpIHtcbiAgICAgICAgY29uc3QgY29scyA9IHRoaXMuZ3JpZC5maWx0ZXJpbmdTZXJ2aWNlLnVucGlubmVkRmlsdGVyYWJsZUNvbHVtbnM7XG4gICAgICAgIGNvbnN0IG5leHRGaWx0ZXJhYmxlSW5kZXggPSBjb2xzLmluZGV4T2YoY29sdW1uKSArIDE7XG4gICAgICAgIGlmIChuZXh0RmlsdGVyYWJsZUluZGV4ID49IHRoaXMuZ3JpZC5maWx0ZXJpbmdTZXJ2aWNlLnVucGlubmVkRmlsdGVyYWJsZUNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBuZXh0IGlzIG5vdCBmaWx0ZXIgY2VsbFxuICAgICAgICAgICAgY29uc3QgZGF0YVJvd3MgPSB0aGlzLmdyaWQucm93TGlzdC50b0FycmF5KCk7XG4gICAgICAgICAgICBjb25zdCBoYXNSb3dzID0gZGF0YVJvd3MubGVuZ3RoICE9PSAwO1xuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeVJvd3MgPSB0aGlzLmdyaWQuc3VtbWFyaWVzUm93TGlzdC50b0FycmF5KCk7XG4gICAgICAgICAgICBjb25zdCBoYXNTdW1tYXJpZXMgPSBzdW1tYXJ5Um93cy5sZW5ndGggPiAwICYmIHN1bW1hcnlSb3dzWzBdLnN1bW1hcnlDZWxscy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgaWYgKGhhc1Jvd3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzTmV4dFJvdyhkYXRhUm93c1swXS5uYXRpdmVFbGVtZW50LCAwLCB0aGlzLmdyaWQsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzU3VtbWFyaWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c05leHRSb3coc3VtbWFyeVJvd3NbMF0ubmF0aXZlRWxlbWVudCwgMCwgdGhpcy5ncmlkLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c05leHQoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudEFyZ3MucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLm5hdmlnYXRlTmV4dEZpbHRlckNlbGwoY29sdW1uLCBldmVudEFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHBlcmZvcm1TaGlmdFRhYktleShjdXJyZW50Um93RWwsIHNlbGVjdGVkTm9kZTogSVNlbGVjdGlvbk5vZGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5yb3dJbkVkaXRNb2RlKSB7XG4gICAgICAgICAgICBzdXBlci5wZXJmb3JtU2hpZnRUYWJLZXkoY3VycmVudFJvd0VsLCBzZWxlY3RlZE5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvd0luZGV4ID0gc2VsZWN0ZWROb2RlLnJvdztcbiAgICAgICAgY29uc3QgdmlzaWJsZUNvbHVtbkluZGV4ID0gc2VsZWN0ZWROb2RlLmNvbHVtbjtcbiAgICAgICAgY29uc3QgaXNTdW1tYXJ5ID0gc2VsZWN0ZWROb2RlLmlzU3VtbWFyeVJvdztcbiAgICAgICAgaWYgKHZpc2libGVDb2x1bW5JbmRleCA9PT0gMCAmJiByb3dJbmRleCA9PT0gMCAmJiB0aGlzLmdyaWQucGFyZW50ICYmICFpc1N1bW1hcnkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyaWQuYWxsb3dGaWx0ZXJpbmcgJiYgdGhpcy5ncmlkLmZpbHRlck1vZGUgPT09IEZpbHRlck1vZGUucXVpY2tGaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVGb2N1c1RvRmlsdGVyQ2VsbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2U2libGluZ0NoaWxkID0gdGhpcy5nZXRDaGlsZEdyaWRSb3dDb250YWluZXIoKS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGlmIChwcmV2U2libGluZ0NoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRFbGVtID0gcHJldlNpYmxpbmdDaGlsZC5xdWVyeVNlbGVjdG9yQWxsKCdpZ3gtaGllcmFyY2hpY2FsLWdyaWQnKVswXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJmb3JtU2hpZnRUYWJJbnRvQ2hpbGQoZ3JpZEVsZW0sIGN1cnJlbnRSb3dFbCwgcm93SW5kZXgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbE5vZGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3c6IHJvd0luZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uOiB0aGlzLmdyaWQucGFyZW50LnVucGlubmVkQ29sdW1uc1t0aGlzLmdyaWQucGFyZW50LnVucGlubmVkQ29sdW1ucy5sZW5ndGggLSAxXS52aXNpYmxlSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVVwKGN1cnJlbnRSb3dFbCwgc2VsTm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHZpc2libGVDb2x1bW5JbmRleCA9PT0gMCAmJiBjdXJyZW50Um93RWwucHJldmlvdXNFbGVtZW50U2libGluZyAmJlxuICAgICAgICAgICAgY3VycmVudFJvd0VsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2hpbGRyZW5bMF0udGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaWd4LWNoaWxkLWdyaWQtcm93Jykge1xuICAgICAgICAgICAgY29uc3QgZ3JpZEVsZW0gPSB0aGlzLmdldExhc3RHcmlkRWxlbShjdXJyZW50Um93RWwucHJldmlvdXNFbGVtZW50U2libGluZyk7XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1TaGlmdFRhYkludG9DaGlsZChncmlkRWxlbSwgY3VycmVudFJvd0VsLCByb3dJbmRleCk7XG4gICAgICAgIH0gZWxzZSBpZiAodmlzaWJsZUNvbHVtbkluZGV4ID09PSAwICYmIGlzU3VtbWFyeSkge1xuICAgICAgICAgICAgY29uc3QgbGFzdFJvd0luZGV4ID0gdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBpZiAobGFzdFJvd0luZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIG5vIGNoaWxkIGRhdGFcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmlkLmFsbG93RmlsdGVyaW5nICYmIHRoaXMuZ3JpZC5maWx0ZXJNb2RlID09PSBGaWx0ZXJNb2RlLnF1aWNrRmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzVG9GaWx0ZXJDZWxsKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsTm9kZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogcm93SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW46IHRoaXMuZ3JpZC5wYXJlbnQudW5waW5uZWRDb2x1bW5zW3RoaXMuZ3JpZC5wYXJlbnQudW5waW5uZWRDb2x1bW5zLmxlbmd0aCAtIDFdLnZpc2libGVJbmRleFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVXAoY3VycmVudFJvd0VsLCBzZWxOb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmdldElzQ2hpbGRBdEluZGV4KGxhc3RSb3dJbmRleCkpIHtcbiAgICAgICAgICAgICAgICBzdXBlci5nb1RvTGFzdENlbGwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NyVG9wUG9zaXRpb24gPSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0U2Nyb2xsRm9ySW5kZXgobGFzdFJvd0luZGV4LCB0cnVlKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbFNjcm9sbCA9IHRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpO1xuICAgICAgICAgICAgICAgIGlmICh2ZXJ0aWNhbFNjcm9sbC5zY3JvbGxUb3AgPT09IHNjclRvcFBvc2l0aW9uIHx8IGlzTmFOKHNjclRvcFBvc2l0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0Q2hpbGQgPSB0aGlzLmdldExhc3RHcmlkRWxlbSh0aGlzLmdyaWQuZ2V0Um93QnlJbmRleChsYXN0Um93SW5kZXgpLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVyZm9ybVNoaWZ0VGFiSW50b0NoaWxkKGNsb3Nlc3RDaGlsZCwgY3VycmVudFJvd0VsLCByb3dJbmRleCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxHcmlkKHRoaXMuZ3JpZCwgc2NyVG9wUG9zaXRpb24gLSB2ZXJ0aWNhbFNjcm9sbC5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvc2VzdENoaWxkID0gdGhpcy5nZXRMYXN0R3JpZEVsZW0odGhpcy5ncmlkLmdldFJvd0J5SW5kZXgobGFzdFJvd0luZGV4KS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyZm9ybVNoaWZ0VGFiSW50b0NoaWxkKGNsb3Nlc3RDaGlsZCwgY3VycmVudFJvd0VsLCByb3dJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlci5wZXJmb3JtU2hpZnRUYWJLZXkoY3VycmVudFJvd0VsLCBzZWxlY3RlZE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldEZvY3VzYWJsZUdyaWQoKSB7XG4gICAgICAgIHJldHVybiAoaXNJRSgpICYmIHRoaXMuZ3JpZC5yb290R3JpZCkgPyB0aGlzLmdyaWQucm9vdEdyaWQgOiB0aGlzLmdyaWQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRMYXN0R3JpZEVsZW0odHJDb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0ckNvbnRhaW5lci5jaGlsZHJlbjtcbiAgICAgICAgY29uc3QgY2xvc2VzdENoaWxkID0gY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoIC0gMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF07XG4gICAgICAgIHJldHVybiBjbG9zZXN0Q2hpbGQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwZXJmb3JtU2hpZnRUYWJJbnRvQ2hpbGQoZ3JpZEVsZW0sIGN1cnJlbnRSb3dFbCwgcm93SW5kZXgpIHtcbiAgICAgICAgY29uc3QgY2hpbGRHcmlkSUQgPSBncmlkRWxlbS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGNvbnN0IGNoaWxkR3JpZCA9IHRoaXMuZ2V0Q2hpbGRHcmlkKGNoaWxkR3JpZElELCB0aGlzLmdyaWQpIHx8IHRoaXMuZ2V0Q2hpbGRHcmlkKGNoaWxkR3JpZElELCB0aGlzLmdyaWQucGFyZW50KTtcbiAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gY2hpbGRHcmlkLnVucGlubmVkQ29sdW1uc1tjaGlsZEdyaWQudW5waW5uZWRDb2x1bW5zLmxlbmd0aCAtIDFdLnZpc2libGVJbmRleDtcbiAgICAgICAgY29uc3Qgc3VtbWFyeVJvd3MgPSBjaGlsZEdyaWQuc3VtbWFyaWVzUm93TGlzdC50b0FycmF5KCk7XG4gICAgICAgIGlmIChzdW1tYXJ5Um93cy5sZW5ndGggPiAwICYmIHN1bW1hcnlSb3dzWzBdLnN1bW1hcnlDZWxscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBtb3ZlIGZvY3VzIHRvIGxhc3Qgc3VtbWFyeSByb3cgY2VsbFxuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeVJvdyA9IHN1bW1hcnlSb3dzWzBdLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLmZvY3VzUHJldlJvdyhzdW1tYXJ5Um93LCBsYXN0SW5kZXgsIGNoaWxkR3JpZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hpbGRHcmlkLnJvd0xpc3QudG9BcnJheSgpLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAgICAgY2hpbGRHcmlkLmFsbG93RmlsdGVyaW5nICYmIGNoaWxkR3JpZC5maWx0ZXJNb2RlID09PSBGaWx0ZXJNb2RlLnF1aWNrRmlsdGVyKSB7XG4gICAgICAgICAgICAvLyBtb3ZlIHRvIGZpbHRlciBjZWxsXG4gICAgICAgICAgICBjaGlsZEdyaWQubmF2aWdhdGlvbi5tb3ZlRm9jdXNUb0ZpbHRlckNlbGwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG1vdmUgdG8gbmV4dCBjZWxsXG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlVXAoY3VycmVudFJvd0VsLCB7IHJvdzogcm93SW5kZXgsIGNvbHVtbjogbGFzdEluZGV4IH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZm9jdXNTY3JvbGxDZWxsSW5WaWV3KHZpc2libGVDb2x1bW5JbmRleCkge1xuICAgICAgICBjb25zdCBjZWxsU2VsZWN0b3IgPSB0aGlzLmdldENlbGxTZWxlY3Rvcih2aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMuZ3JpZC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICBgJHtjZWxsU2VsZWN0b3J9W2RhdGEtdmlzaWJsZUluZGV4PVwiJHt2aXNpYmxlQ29sdW1uSW5kZXh9XCJdYCk7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBjZWxsc1swXTtcbiAgICAgICAgY29uc3QgY2hpbGRDb250YWluZXIgPSB0aGlzLmdyaWQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHNjclRvcCA9IHRoaXMuZ3JpZC5wYXJlbnQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKS5zY3JvbGxUb3A7XG4gICAgICAgIGNvbnN0IG1heFNjcm9sbCA9IHRoaXMuZ3JpZC5wYXJlbnQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKS5zY3JvbGxIZWlnaHQgLSB0aGlzLmdyaWQucGFyZW50LmNhbGNIZWlnaHQ7XG4gICAgICAgIGNvbnN0IGRjID0gY2hpbGRDb250YWluZXIucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBzY3JXaXRoID0gcGFyc2VJbnQoZGMuc3R5bGUudG9wLCAxMCk7XG4gICAgICAgIGNvbnN0IHBhcmVudFJvd09mZnNldCA9IGNoaWxkQ29udGFpbmVyLnBhcmVudE5vZGUub2Zmc2V0VG9wICsgdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wICtcbiAgICAgICAgICAgIHNjcldpdGg7XG4gICAgICAgIGlmICgoc2NyVG9wID09PSAwICYmIHBhcmVudFJvd09mZnNldCA8IDAgKSB8fCBwYXJlbnRSb3dPZmZzZXQgPT09IDAgfHwgKHNjclRvcCA9PT0gbWF4U2Nyb2xsICYmIHBhcmVudFJvd09mZnNldCA+IDApKSB7XG4gICAgICAgICAgICAvLyBjZWxsIGlzIGluIHZpZXdcbiAgICAgICAgICAgIGNlbGwuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc2Nyb2xsIHBhcmVudCBzbyB0aGF0IGNlbGwgaXMgaW4gdmlld1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxHcmlkKHRoaXMuZ3JpZC5wYXJlbnQsIHBhcmVudFJvd09mZnNldCwgKCkgPT4gY2VsbC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c05leHRDaGlsZChlbGVtLCB2aXNpYmxlQ29sdW1uSW5kZXgsIGdyaWQpIHtcbiAgICAgICAgY29uc3QgZ3JpZEVsZW0gPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoJ2lneC1oaWVyYXJjaGljYWwtZ3JpZCcpO1xuICAgICAgICBjb25zdCBjaGlsZEdyaWRJRCA9IGdyaWRFbGVtLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgY29uc3QgY2hpbGRHcmlkID0gdGhpcy5nZXRDaGlsZEdyaWQoY2hpbGRHcmlkSUQsIGdyaWQpO1xuXG4gICAgICAgIGlmIChjaGlsZEdyaWQucm93TGlzdC50b0FycmF5KCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzTmV4dCh2aXNpYmxlQ29sdW1uSW5kZXgsIGNoaWxkR3JpZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgY29sdW1uIGluZGV4IHNpbmNlIHRoZSBuZXh0IGNoaWxkIGNhbiBoYXZlIGluIGdlbmVyYWwgbGVzcyBjb2x1bW5zIHRoYW4gdmlzaWJsZUNvbHVtbkluZGV4IHZhbHVlLlxuICAgICAgICBjb25zdCBsYXN0Q2VsbEluZGV4ID0gY2hpbGRHcmlkLnVucGlubmVkQ29sdW1uc1tjaGlsZEdyaWQudW5waW5uZWRDb2x1bW5zLmxlbmd0aCAtIDFdLnZpc2libGVJbmRleDtcbiAgICAgICAgdmlzaWJsZUNvbHVtbkluZGV4ID0gTWF0aC5taW4obGFzdENlbGxJbmRleCwgdmlzaWJsZUNvbHVtbkluZGV4KTtcblxuICAgICAgICBpZiAoY2hpbGRHcmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLnN0YXRlLnN0YXJ0SW5kZXggIT09IDApIHtcbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0b3BcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsR3JpZChjaGlsZEdyaWQsICd0b3AnLCAoKSA9PiB0aGlzLmZvY3VzTmV4dFJvdyhlbGVtLCB2aXNpYmxlQ29sdW1uSW5kZXgsIGNoaWxkR3JpZCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb2N1c05leHRSb3coZWxlbSwgdmlzaWJsZUNvbHVtbkluZGV4LCBjaGlsZEdyaWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZm9jdXNQcmV2Q2hpbGQoZWxlbSwgdmlzaWJsZUNvbHVtbkluZGV4LCBncmlkKSB7XG4gICAgICAgIGNvbnN0IGdyaWRzID0gW107XG4gICAgICAgIGNvbnN0IGdyaWRFbGVtcyA9IEFycmF5LmZyb20oZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCdpZ3gtaGllcmFyY2hpY2FsLWdyaWQnKSk7XG4gICAgICAgIGNvbnN0IGNoaWxkTGV2ZWwgPSBncmlkLmNoaWxkTGF5b3V0TGlzdC5maXJzdC5sZXZlbDtcbiAgICAgICAgZ3JpZEVsZW1zLmZvckVhY2goKGhnKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRSb3cgPSB0aGlzLmdldENsb3Nlc3RFbGVtQnlUYWcoaGcsICdpZ3gtY2hpbGQtZ3JpZC1yb3cnKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRSb3cgJiYgcGFyc2VJbnQocGFyZW50Um93LmdldEF0dHJpYnV0ZSgnZGF0YS1sZXZlbCcpLCAxMCkgPT09IGNoaWxkTGV2ZWwpIHtcbiAgICAgICAgICAgICAgICBncmlkcy5wdXNoKGhnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGdyaWRFbGVtID0gZ3JpZHNbZ3JpZHMubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IGNoaWxkR3JpZElEID0gZ3JpZEVsZW0uZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBjb25zdCBjaGlsZEdyaWQgPSB0aGlzLmdldENoaWxkR3JpZChjaGlsZEdyaWRJRCwgZ3JpZCk7XG5cbiAgICAgICAgaWYgKGNoaWxkR3JpZC5yb3dMaXN0LnRvQXJyYXkoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNQcmV2KHZpc2libGVDb2x1bW5JbmRleCwgY2hpbGRHcmlkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBjb2x1bW4gaW5kZXggc2luY2UgdGhlIHByZXZpb3VzIGNoaWxkIGNhbiBoYXZlIGluIGdlbmVyYWwgbGVzcyBjb2x1bW5zIHRoYW4gdmlzaWJsZUNvbHVtbkluZGV4IHZhbHVlLlxuICAgICAgICBjb25zdCBsYXN0Q2VsbEluZGV4ID0gY2hpbGRHcmlkLnVucGlubmVkQ29sdW1uc1tjaGlsZEdyaWQudW5waW5uZWRDb2x1bW5zLmxlbmd0aCAtIDFdLnZpc2libGVJbmRleDtcbiAgICAgICAgdmlzaWJsZUNvbHVtbkluZGV4ID0gTWF0aC5taW4obGFzdENlbGxJbmRleCwgdmlzaWJsZUNvbHVtbkluZGV4KTtcblxuICAgICAgICBjb25zdCBpc1Njcm9sbGVkVG9Cb3R0b20gPSB0aGlzLl9pc1Njcm9sbGVkVG9Cb3R0b20oY2hpbGRHcmlkKTtcbiAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gY2hpbGRHcmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLmxlbmd0aCAtIDE7XG4gICAgICAgIGlmICghaXNTY3JvbGxlZFRvQm90dG9tKSB7XG4gICAgICAgICAgICAvLyBzY3JvbGwgdG8gZW5kXG4gICAgICAgICAgICB0aGlzLnNjcm9sbEdyaWQoY2hpbGRHcmlkLCAnYm90dG9tJywgKCkgPT4gdGhpcy5mb2N1c1ByZXZDaGlsZChlbGVtLCB2aXNpYmxlQ29sdW1uSW5kZXgsIGdyaWQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RSb3dJbkNoaWxkID0gY2hpbGRHcmlkLmdldFJvd0J5SW5kZXgobGFzdEluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2hpbGRHcmlkID0gbGFzdFJvd0luQ2hpbGQubmF0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaWd4LWNoaWxkLWdyaWQtcm93JztcbiAgICAgICAgICAgIGlmIChpc0NoaWxkR3JpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNQcmV2Q2hpbGQobGFzdFJvd0luQ2hpbGQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLCB2aXNpYmxlQ29sdW1uSW5kZXgsIGNoaWxkR3JpZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNQcmV2Um93KGxhc3RSb3dJbkNoaWxkLm5hdGl2ZUVsZW1lbnQsIHZpc2libGVDb2x1bW5JbmRleCwgY2hpbGRHcmlkLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGZvY3VzUHJldih2aXNpYmxlQ29sdW1uSW5kZXgsIGdyaWQ/KSB7XG4gICAgICAgIGNvbnN0IGN1cnJHcmlkID0gZ3JpZCB8fCB0aGlzLmdyaWQ7XG4gICAgICAgIGxldCBwYXJlbnRDb250YWluZXIgPSB0aGlzLmdldENoaWxkQ29udGFpbmVyKGN1cnJHcmlkKTtcbiAgICAgICAgbGV0IGNoaWxkUm93Q29udGFpbmVyID0gdGhpcy5nZXRDaGlsZEdyaWRSb3dDb250YWluZXIoY3VyckdyaWQpO1xuICAgICAgICBjb25zdCBwcmV2SXNTaWJsaW5nQ2hpbGQgPSAhIWNoaWxkUm93Q29udGFpbmVyLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGxldCBwcmV2ID0gY2hpbGRSb3dDb250YWluZXIucHJldmlvdXNFbGVtZW50U2libGluZyB8fCBwYXJlbnRDb250YWluZXIucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgICAgIGlmIChwcmV2SXNTaWJsaW5nQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzUHJldkNoaWxkKHByZXYsIHZpc2libGVDb2x1bW5JbmRleCwgY3VyckdyaWQucGFyZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c1ByZXZSb3cocHJldiwgdmlzaWJsZUNvbHVtbkluZGV4LCBjdXJyR3JpZC5wYXJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxHcmlkKGN1cnJHcmlkLnBhcmVudCwgJ3ByZXYnLFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29udGFpbmVyID0gdGhpcy5nZXRDaGlsZENvbnRhaW5lcihncmlkKTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRSb3dDb250YWluZXIgPSB0aGlzLmdldENoaWxkR3JpZFJvd0NvbnRhaW5lcihncmlkKTtcbiAgICAgICAgICAgICAgICAgICAgcHJldiA9IGNoaWxkUm93Q29udGFpbmVyLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgfHwgcGFyZW50Q29udGFpbmVyLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2SXNTaWJsaW5nQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNQcmV2Q2hpbGQocHJldiwgdmlzaWJsZUNvbHVtbkluZGV4LCBjdXJyR3JpZC5wYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c1ByZXZSb3cocHJldiwgdmlzaWJsZUNvbHVtbkluZGV4LCBjdXJyR3JpZC5wYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldE5leHRQYXJlbnRJbmZvKGdyaWQpIHtcbiAgICAgICAgLy8gZmluZCBuZXh0IHBhcmVudCB0aGF0IGlzIG5vdCBhdCBib3R0b21cbiAgICAgICAgbGV0IGN1cnJHcmlkID0gZ3JpZC5wYXJlbnQ7XG4gICAgICAgIGxldCBuZXh0RWxlbSA9IHRoaXMuZ2V0Q2hpbGRDb250YWluZXIoZ3JpZCkubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICB3aGlsZSAoIW5leHRFbGVtICYmIGN1cnJHcmlkLnBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbmV4dEVsZW0gPSB0aGlzLmdldENoaWxkQ29udGFpbmVyKGN1cnJHcmlkKS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBjdXJyR3JpZCA9IGN1cnJHcmlkLnBhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGdyaWQ6IGN1cnJHcmlkLCBuZXh0RWxlbWVudDogbmV4dEVsZW0gfTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXROZXh0U2Nyb2xsYWJsZShncmlkKSB7XG4gICAgICAgIGxldCBjdXJyR3JpZCA9IGdyaWQucGFyZW50O1xuICAgICAgICBpZiAoIWN1cnJHcmlkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBncmlkOiBncmlkLCBwcmV2OiBudWxsIH07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5vblNjcm9sbGFibGUgPSBjdXJyR3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpLnNjcm9sbFRvcCA9PT0gMDtcbiAgICAgICAgbGV0IHByZXYgPSBncmlkO1xuICAgICAgICB3aGlsZSAobm9uU2Nyb2xsYWJsZSAmJiBjdXJyR3JpZC5wYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHByZXYgPSBjdXJyR3JpZDtcbiAgICAgICAgICAgIGN1cnJHcmlkID0gY3VyckdyaWQucGFyZW50O1xuICAgICAgICAgICAgbm9uU2Nyb2xsYWJsZSA9IGN1cnJHcmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmdldFZlcnRpY2FsU2Nyb2xsKCkuc2Nyb2xsVG9wID09PSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGdyaWQ6IGN1cnJHcmlkLCBwcmV2OiBwcmV2IH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c05leHQodmlzaWJsZUNvbHVtbkluZGV4LCBncmlkPykge1xuICAgICAgICBjb25zdCBjdXJyR3JpZCA9IGdyaWQgfHwgdGhpcy5ncmlkO1xuICAgICAgICBjb25zdCBwYXJlbnRJbmZvID0gdGhpcy5nZXROZXh0UGFyZW50SW5mbyhjdXJyR3JpZCk7XG4gICAgICAgIGNvbnN0IG5leHRQYXJlbnRHcmlkID0gcGFyZW50SW5mby5ncmlkO1xuICAgICAgICBsZXQgbmV4dFBhcmVudEVsZW0gPSBwYXJlbnRJbmZvLm5leHRFbGVtZW50O1xuICAgICAgICBsZXQgY2hpbGRSb3dDb250YWluZXIgPSB0aGlzLmdldENoaWxkR3JpZFJvd0NvbnRhaW5lcihjdXJyR3JpZCk7XG4gICAgICAgIGNvbnN0IG5leHRJc1NpYmxpbmdDaGlsZCA9ICEhY2hpbGRSb3dDb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBsZXQgbmV4dCA9IGNoaWxkUm93Q29udGFpbmVyLm5leHRFbGVtZW50U2libGluZyB8fCBuZXh0UGFyZW50RWxlbTtcbiAgICAgICAgY29uc3QgdmVydGljYWxTY3JvbGwgPSBuZXh0UGFyZW50R3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpO1xuICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgICAgaWYgKG5leHRJc1NpYmxpbmdDaGlsZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNOZXh0Q2hpbGQobmV4dCwgdmlzaWJsZUNvbHVtbkluZGV4LCBuZXh0UGFyZW50R3JpZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNOZXh0Um93KG5leHQsIHZpc2libGVDb2x1bW5JbmRleCwgZ3JpZCB8fCBuZXh0UGFyZW50R3JpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodmVydGljYWxTY3JvbGwuc2Nyb2xsVG9wICE9PVxuICAgICAgICAgICAgdmVydGljYWxTY3JvbGwuc2Nyb2xsSGVpZ2h0IC0gbmV4dFBhcmVudEdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yQ29udGFpbmVyU2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxHcmlkKG5leHRQYXJlbnRHcmlkLCAnbmV4dCcsXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGFyZW50RWxlbSA9IHBhcmVudEluZm8ubmV4dEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkUm93Q29udGFpbmVyID0gdGhpcy5nZXRDaGlsZEdyaWRSb3dDb250YWluZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IGNoaWxkUm93Q29udGFpbmVyLm5leHRFbGVtZW50U2libGluZyB8fCBuZXh0UGFyZW50RWxlbTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQgJiYgbmV4dElzU2libGluZ0NoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzTmV4dENoaWxkKG5leHQsIHZpc2libGVDb2x1bW5JbmRleCwgbmV4dFBhcmVudEdyaWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNOZXh0Um93KG5leHQsIHZpc2libGVDb2x1bW5JbmRleCwgZ3JpZCB8fCBuZXh0UGFyZW50R3JpZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGdldE5leHRTY3JvbGxhYmxlRG93bihncmlkKSB7XG4gICAgICAgIGxldCBjdXJyR3JpZCA9IGdyaWQucGFyZW50O1xuICAgICAgICBpZiAoIWN1cnJHcmlkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBncmlkOiBncmlkLCBwcmV2OiBudWxsIH07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNjcm9sbFRvcCA9IGN1cnJHcmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmdldFZlcnRpY2FsU2Nyb2xsKCkuc2Nyb2xsVG9wO1xuICAgICAgICBsZXQgc2Nyb2xsSGVpZ2h0ID0gY3VyckdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKS5zY3JvbGxIZWlnaHQ7XG4gICAgICAgIGxldCBub25TY3JvbGxhYmxlID0gc2Nyb2xsSGVpZ2h0ID09PSAwIHx8XG4gICAgICAgICAgICBNYXRoLnJvdW5kKHNjcm9sbFRvcCArIGN1cnJHcmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvckNvbnRhaW5lclNpemUpID09PSBzY3JvbGxIZWlnaHQ7XG4gICAgICAgIGxldCBwcmV2ID0gZ3JpZDtcbiAgICAgICAgd2hpbGUgKG5vblNjcm9sbGFibGUgJiYgY3VyckdyaWQucGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBwcmV2ID0gY3VyckdyaWQ7XG4gICAgICAgICAgICBjdXJyR3JpZCA9IGN1cnJHcmlkLnBhcmVudDtcbiAgICAgICAgICAgIHNjcm9sbFRvcCA9IGN1cnJHcmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmdldFZlcnRpY2FsU2Nyb2xsKCkuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gY3VyckdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKS5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICBub25TY3JvbGxhYmxlID0gc2Nyb2xsSGVpZ2h0ID09PSAwIHx8XG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZChzY3JvbGxUb3AgKyBjdXJyR3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5pZ3hGb3JDb250YWluZXJTaXplKSA9PT0gc2Nyb2xsSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGdyaWQ6IGN1cnJHcmlkLCBwcmV2OiBwcmV2IH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0TWluQm90dG9tKGdyaWQpIHtcbiAgICAgICAgbGV0IGN1cnJHcmlkID0gZ3JpZDtcbiAgICAgICAgbGV0IGJvdHRvbSA9IGN1cnJHcmlkLnRib2R5Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuICAgICAgICB3aGlsZSAoY3VyckdyaWQucGFyZW50KSB7XG4gICAgICAgICAgICBjdXJyR3JpZCA9IGN1cnJHcmlkLnBhcmVudDtcbiAgICAgICAgICAgIGJvdHRvbSA9IE1hdGgubWluKGJvdHRvbSwgY3VyckdyaWQudGJvZHkubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3R0b207XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0TWF4VG9wKGdyaWQpIHtcbiAgICAgICAgbGV0IGN1cnJHcmlkID0gZ3JpZDtcbiAgICAgICAgbGV0IHRvcCA9IGN1cnJHcmlkLnRib2R5Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICB3aGlsZSAoY3VyckdyaWQucGFyZW50KSB7XG4gICAgICAgICAgICBjdXJyR3JpZCA9IGN1cnJHcmlkLnBhcmVudDtcbiAgICAgICAgICAgIHRvcCA9IE1hdGgubWF4KHRvcCwgY3VyckdyaWQudGJvZHkubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3A7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c05leHRSb3coZWxlbSwgdmlzaWJsZUNvbHVtbkluZGV4LCBncmlkLCBpc1N1bW1hcnk/KSB7XG4gICAgICAgIGNvbnN0IGNlbGxTZWxlY3RvciA9IHRoaXMuZ2V0Q2VsbFNlbGVjdG9yKHZpc2libGVDb2x1bW5JbmRleCwgaXNTdW1tYXJ5KTtcbiAgICAgICAgaWYgKGdyaWQubmF2aWdhdGlvbi5pc0NvbHVtbkZ1bGx5VmlzaWJsZSh2aXNpYmxlQ29sdW1uSW5kZXgpKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID1cbiAgICAgICAgICAgICAgICBlbGVtLnF1ZXJ5U2VsZWN0b3IoYCR7Y2VsbFNlbGVjdG9yfVtkYXRhLXZpc2libGVJbmRleD1cIiR7dmlzaWJsZUNvbHVtbkluZGV4fVwiXWApO1xuICAgICAgICAgICAgY29uc3QgY2xvc2VzdFNjcm9sbGFibGVHcmlkID0gdGhpcy5nZXROZXh0U2Nyb2xsYWJsZURvd24oZ3JpZCkuZ3JpZDtcbiAgICAgICAgICAgIC8vIGNvbnN0IGRpZmYgPSBjZWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtIGdyaWQucm9vdEdyaWQudGJvZHkubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XG4gICAgICAgICAgICBjb25zdCBncmlkQm90dG9tID0gdGhpcy5fZ2V0TWluQm90dG9tKGdyaWQpO1xuICAgICAgICAgICAgY29uc3QgZGlmZiA9IGNlbGwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIC0gZ3JpZEJvdHRvbTtcbiAgICAgICAgICAgIGNvbnN0IGluVmlldyA9IGRpZmYgPD0gMDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGNsb3Nlc3RTY3JvbGxhYmxlR3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpLnNjcm9sbFRvcDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGNsb3Nlc3RTY3JvbGxhYmxlR3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpLnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGNhblNjcm9sbCA9ICEoc2Nyb2xsSGVpZ2h0ID09PSAwIHx8XG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZChzY3JvbGxUb3AgKyBjbG9zZXN0U2Nyb2xsYWJsZUdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yQ29udGFpbmVyU2l6ZSkgPT09IHNjcm9sbEhlaWdodCk7XG4gICAgICAgICAgICBpZiAoIWluVmlldyAmJiBjYW5TY3JvbGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEdyaWQoY2xvc2VzdFNjcm9sbGFibGVHcmlkLCBkaWZmLCAoKSA9PiBjZWxsLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNlbGwuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2VsbEVsZW0gPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoYCR7Y2VsbFNlbGVjdG9yfWApO1xuICAgICAgICAgICAgY29uc3Qgcm93SW5kZXggPSBwYXJzZUludChjZWxsRWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93aW5kZXgnKSwgMTApO1xuICAgICAgICAgICAgZ3JpZC5uYXZpZ2F0aW9uLnBlcmZvcm1Ib3Jpem9udGFsU2Nyb2xsVG9DZWxsKHJvd0luZGV4LCB2aXNpYmxlQ29sdW1uSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c1ByZXZSb3coZWxlbSwgdmlzaWJsZUNvbHVtbkluZGV4LCBncmlkLCBpbkNoaWxkPywgaXNTdW1tYXJ5Pykge1xuICAgICAgICBpZiAoZ3JpZC5uYXZpZ2F0aW9uLmlzQ29sdW1uRnVsbHlWaXNpYmxlKHZpc2libGVDb2x1bW5JbmRleCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxTZWxlY3RvciA9IHRoaXMuZ2V0Q2VsbFNlbGVjdG9yKHZpc2libGVDb2x1bW5JbmRleCwgaXNTdW1tYXJ5KTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKGAke2NlbGxTZWxlY3Rvcn1bZGF0YS12aXNpYmxlSW5kZXg9XCIke3Zpc2libGVDb2x1bW5JbmRleH1cIl1gKTtcbiAgICAgICAgICAgIGxldCBjZWxsID0gY2VsbHNbY2VsbHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBjb25zdCBySW5kZXggPSBwYXJzZUludChlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1yb3dpbmRleCcpLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBzY3JHcmlkID0gZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpLnNjcm9sbFRvcCAhPT0gMCA/IGdyaWQgOlxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TmV4dFNjcm9sbGFibGUoZ3JpZCkuZ3JpZDtcbiAgICAgICAgICAgIGNvbnN0IHRvcEdyaWQgPSBzY3JHcmlkLnRib2R5Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID5cbiAgICAgICAgICAgICAgICBncmlkLnJvb3RHcmlkLnRib2R5Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID8gc2NyR3JpZCA6IGdyaWQucm9vdEdyaWQ7XG4gICAgICAgICAgICBjb25zdCBncmlkVG9wID0gdGhpcy5fZ2V0TWF4VG9wKGdyaWQpO1xuICAgICAgICAgICAgY29uc3Qgc2NyVG9wID0gc2NyR3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5nZXRWZXJ0aWNhbFNjcm9sbCgpLnNjcm9sbFRvcDtcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBjZWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtXG4gICAgICAgICAgICAgICAgY2VsbC5vZmZzZXRIZWlnaHQgLSBncmlkVG9wO1xuICAgICAgICAgICAgaWYgKHNjclRvcCAhPT0gMCAmJiBkaWZmIDwgMCAmJiAhaW5DaGlsZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsR3JpZChzY3JHcmlkLCBkaWZmLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gIWlzU3VtbWFyeSA/IGdyaWQubmF2aWdhdGlvbi5nZXRSb3dCeUluZGV4KHJJbmRleCkgOiBlbGVtO1xuICAgICAgICAgICAgICAgICAgICBjZWxsID0gZWwucXVlcnlTZWxlY3RvckFsbChgJHtjZWxsU2VsZWN0b3J9W2RhdGEtdmlzaWJsZUluZGV4PVwiJHt2aXNpYmxlQ29sdW1uSW5kZXh9XCJdYClbMF07XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaWZmIDwgMCAmJiBpbkNoaWxkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxHcmlkKHRvcEdyaWQsIGRpZmYsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNlbGwuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsU2Nyb2xsR3JpZFRvSW5kZXgoZ3JpZCwgdmlzaWJsZUNvbHVtbkluZGV4LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c1ByZXZSb3coZWxlbSwgdmlzaWJsZUNvbHVtbkluZGV4LCBncmlkLCBpbkNoaWxkLCBpc1N1bW1hcnkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGhvcml6b250YWxTY3JvbGxHcmlkVG9JbmRleChncmlkLCB2aXNpYmxlQ29sdW1uSW5kZXgsIGNhbGxCYWNrRnVuYykge1xuICAgICAgICBjb25zdCB1bnBpbm5lZEluZGV4ID0gdGhpcy5nZXRDb2x1bW5VbnBpbm5lZEluZGV4KHZpc2libGVDb2x1bW5JbmRleCk7XG4gICAgICAgIGdyaWQucGFyZW50VmlydERpci5vbkNodW5rTG9hZFxuICAgICAgICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoY2FsbEJhY2tGdW5jKTtcbiAgICAgICAgZ3JpZC5kYXRhUm93TGlzdC50b0FycmF5KClbMF0udmlydERpclJvdy5zY3JvbGxUbyh1bnBpbm5lZEluZGV4KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzY3JvbGxHcmlkKGdyaWQsIHRhcmdldCwgY2FsbEJhY2tGdW5jKSB7XG4gICAgICAgIHRoaXMuZ2V0Rm9jdXNhYmxlR3JpZCgpLm5hdGl2ZUVsZW1lbnQuZm9jdXMoe3ByZXZlbnRTY3JvbGw6IHRydWV9KTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuYWRkU2Nyb2xsVG9wKHRhcmdldCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RvcCc6IGdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuc2Nyb2xsVG8oMCk7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdib3R0b20nOiBncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvKGdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2YubGVuZ3RoIC0gMSk7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICduZXh0JzogZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5zY3JvbGxOZXh0KCk7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdwcmV2JzogZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5zY3JvbGxQcmV2KCk7IGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIub25DaHVua0xvYWRcbiAgICAgICAgICAgICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoY2FsbEJhY2tGdW5jKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbmF2aWdhdGVVcEluQ2hpbGQocm93RWxlbWVudCwgY3VycmVudFJvd0luZGV4LCB2aXNpYmxlQ29sdW1uSW5kZXgpIHtcbiAgICAgICAgY29uc3QgcHJldkVsZW0gPSByb3dFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGNvbnN0IHNjcm9sbGFibGUgPSB0aGlzLmdldE5leHRTY3JvbGxhYmxlKHRoaXMuZ3JpZCk7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBzY3JvbGxhYmxlLmdyaWQ7XG4gICAgICAgIGNvbnN0IHNjclRvcCA9IGdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuZ2V0VmVydGljYWxTY3JvbGwoKS5zY3JvbGxUb3A7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclRvcCA9IHNjcm9sbGFibGUucHJldi5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHRvcCA9IHBhcnNlSW50KGNvbnRhaW5lclRvcC5zdHlsZS50b3AsIDEwKTtcbiAgICAgICAgaWYgKHNjclRvcCAhPT0gMCAmJiB0b3AgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEdyaWQoZ3JpZCwgLXByZXZFbGVtLm9mZnNldEhlaWdodCxcbiAgICAgICAgICAgICAgICAoKSA9PiBzdXBlci5uYXZpZ2F0ZVVwKHJvd0VsZW1lbnQsIHsgcm93OiBjdXJyZW50Um93SW5kZXgsIGNvbHVtbjogdmlzaWJsZUNvbHVtbkluZGV4IH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLm5hdmlnYXRlVXAocm93RWxlbWVudCwgeyByb3c6IGN1cnJlbnRSb3dJbmRleCwgY29sdW1uOiB2aXNpYmxlQ29sdW1uSW5kZXggfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9uYXZpZ2F0ZURvd25JbkNoaWxkKHJvd0VsZW1lbnQsIGN1cnJlbnRSb3dJbmRleCwgdmlzaWJsZUNvbHVtbkluZGV4KSB7XG4gICAgICAgIGNvbnN0IG5leHRFbGVtID0gcm93RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGNvbnN0IGNoaWxkQ29udGFpbmVyID0gdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBkaWZmID1cbiAgICAgICAgICAgIGNoaWxkQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtIHRoaXMuZ3JpZC5yb290R3JpZC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcbiAgICAgICAgY29uc3QgZW5kSXNWaXNpYmxlID0gZGlmZiA8IDA7XG4gICAgICAgIGNvbnN0IHNjcm9sbGFibGUgPSB0aGlzLmdldE5leHRTY3JvbGxhYmxlRG93bih0aGlzLmdyaWQpO1xuICAgICAgICBjb25zdCBncmlkID0gc2Nyb2xsYWJsZS5ncmlkO1xuICAgICAgICBpZiAoIWVuZElzVmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxHcmlkKGdyaWQsIG5leHRFbGVtLm9mZnNldEhlaWdodCxcbiAgICAgICAgICAgICAgICAoKSA9PiBzdXBlci5uYXZpZ2F0ZURvd24ocm93RWxlbWVudCwgeyByb3c6IGN1cnJlbnRSb3dJbmRleCwgY29sdW1uOiB2aXNpYmxlQ29sdW1uSW5kZXggfSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIubmF2aWdhdGVEb3duKHJvd0VsZW1lbnQsIHsgcm93OiBjdXJyZW50Um93SW5kZXgsIGNvbHVtbjogdmlzaWJsZUNvbHVtbkluZGV4IH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDbG9zZXN0RWxlbUJ5VGFnKHNvdXJjZUVsZW0sIHRhcmdldFRhZykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gc291cmNlRWxlbTtcbiAgICAgICAgd2hpbGUgKHJlc3VsdCAhPT0gbnVsbCAmJiByZXN1bHQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSB0YXJnZXRUYWcudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iXX0=