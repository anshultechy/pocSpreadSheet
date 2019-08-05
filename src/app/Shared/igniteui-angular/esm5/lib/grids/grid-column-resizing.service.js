/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, NgZone } from '@angular/core';
/**
 * @hidden
 */
var IgxColumnResizingService = /** @class */ (function () {
    function IgxColumnResizingService(zone) {
        this.zone = zone;
        /**
         * @hidden
         */
        this.resizeCursor = null;
        /**
         * @hidden
         */
        this.showResizer = false;
    }
    Object.defineProperty(IgxColumnResizingService.prototype, "resizerHeight", {
        /**
         *@hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            /** @type {?} */
            var height = this.column.grid.getVisibleContentHeight();
            // Column height multiplier in case there are Column Layouts. The resizer height need to take into account rowStart.
            /** @type {?} */
            var columnHeightMultiplier = 1;
            if (this.column.columnLayoutChild) {
                columnHeightMultiplier = this.column.grid.multiRowLayoutRowSize - this.column.rowStart + 1;
            }
            if (this.column.level !== 0) {
                height -= this.column.topLevelParent.headerGroup.height - this.column.headerGroup.height * columnHeightMultiplier;
            }
            return height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnResizingService.prototype, "restrictResizeMin", {
        /**
         * Returns the minimal possible width to which the column can be resized.
         */
        get: /**
         * Returns the minimal possible width to which the column can be resized.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var actualMinWidth = parseFloat(this.column.minWidth);
            /** @type {?} */
            var minWidth = actualMinWidth < parseFloat(this.column.width) ? actualMinWidth : parseFloat(this.column.width);
            return this.column.headerCell.elementRef.nativeElement.getBoundingClientRect().width - minWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxColumnResizingService.prototype, "restrictResizeMax", {
        /**
         * Returns the maximal possible width to which the column can be resized.
         */
        get: /**
         * Returns the maximal possible width to which the column can be resized.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var actualWidth = this.column.headerCell.elementRef.nativeElement.getBoundingClientRect().width;
            if (this.column.pinned) {
                /** @type {?} */
                var pinnedMaxWidth = this.pinnedMaxWidth =
                    this.column.grid.calcPinnedContainerMaxWidth - this.column.grid.getPinnedWidth(true) + actualWidth;
                if (this.column.maxWidth && parseFloat(this.column.maxWidth) < pinnedMaxWidth) {
                    this.pinnedMaxWidth = this.column.maxWidth;
                    return parseFloat(this.column.maxWidth) - actualWidth;
                }
                else {
                    return pinnedMaxWidth - actualWidth;
                }
            }
            else {
                if (this.column.maxWidth) {
                    return parseFloat(this.column.maxWidth) - actualWidth;
                }
                else {
                    return Number.MAX_SAFE_INTEGER;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Autosizes the column to the longest currently visible cell value, including the header cell.
     * If the column has a predifined maxWidth and the autosized column width will become bigger than it,
     * then the column is sized to its maxWidth.
     * If the column is pinned and the autosized column width will cause the pinned area to become bigger
     * than the maximum allowed pinned area width (80% of the total grid width), autosizing will be deismissed.
     */
    /**
     * Autosizes the column to the longest currently visible cell value, including the header cell.
     * If the column has a predifined maxWidth and the autosized column width will become bigger than it,
     * then the column is sized to its maxWidth.
     * If the column is pinned and the autosized column width will cause the pinned area to become bigger
     * than the maximum allowed pinned area width (80% of the total grid width), autosizing will be deismissed.
     * @return {?}
     */
    IgxColumnResizingService.prototype.autosizeColumnOnDblClick = /**
     * Autosizes the column to the longest currently visible cell value, including the header cell.
     * If the column has a predifined maxWidth and the autosized column width will become bigger than it,
     * then the column is sized to its maxWidth.
     * If the column is pinned and the autosized column width will cause the pinned area to become bigger
     * than the maximum allowed pinned area width (80% of the total grid width), autosizing will be deismissed.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentColWidth = this.column.headerCell.elementRef.nativeElement.getBoundingClientRect().width;
        /** @type {?} */
        var size = this.column.getLargestCellWidth();
        if (this.column.pinned) {
            /** @type {?} */
            var newPinnedWidth = this.column.grid.getPinnedWidth(true) - currentColWidth + parseFloat(size);
            if (newPinnedWidth <= this.column.grid.calcPinnedContainerMaxWidth) {
                this.column.width = size;
            }
        }
        else if (this.column.maxWidth && (parseFloat(size) > parseFloat(this.column.maxWidth))) {
            this.column.width = parseFloat(this.column.maxWidth) + 'px';
        }
        else if (parseFloat(size) < parseFloat(this.column.minWidth)) {
            this.column.width = this.column.minWidth + 'px';
        }
        else {
            this.column.width = size;
        }
        this.zone.run(function () { });
        this.column.grid.reflow();
        this.column.grid.onColumnResized.emit({
            column: this.column,
            prevWidth: currentColWidth.toString(),
            newWidth: this.column.width
        });
    };
    /**
     * Resizes the column regaridng to the column minWidth and maxWidth.
     */
    /**
     * Resizes the column regaridng to the column minWidth and maxWidth.
     * @param {?} event
     * @return {?}
     */
    IgxColumnResizingService.prototype.resizeColumn = /**
     * Resizes the column regaridng to the column minWidth and maxWidth.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.showResizer = false;
        /** @type {?} */
        var diff = event.clientX - this.startResizePos;
        /** @type {?} */
        var currentColWidth = parseFloat(this.column.width);
        /** @type {?} */
        var actualWidth = this.column.headerCell.elementRef.nativeElement.getBoundingClientRect().width;
        currentColWidth = Number.isNaN(currentColWidth) || (currentColWidth < actualWidth) ? actualWidth : currentColWidth;
        /** @type {?} */
        var colMinWidth = this.getColMinWidth(this.column);
        /** @type {?} */
        var colMaxWidth = this.getColMaxWidth(this.column);
        if (this.column.grid.hasColumnLayouts) {
            this.resizeColumnLayoutFor(this.column, diff);
        }
        else {
            if (currentColWidth + diff < colMinWidth) {
                this.column.width = colMinWidth + 'px';
            }
            else if (colMaxWidth && (currentColWidth + diff > colMaxWidth)) {
                this.column.width = colMaxWidth + 'px';
            }
            else {
                this.column.width = (currentColWidth + diff) + 'px';
            }
        }
        this.zone.run(function () { });
        this.column.grid.reflow();
        if (currentColWidth !== parseFloat(this.column.width)) {
            this.column.grid.onColumnResized.emit({
                column: this.column,
                prevWidth: currentColWidth.toString(),
                newWidth: this.column.width
            });
        }
        this.isColumnResizing = false;
    };
    /**
     * @protected
     * @param {?} column
     * @return {?}
     */
    IgxColumnResizingService.prototype.getColMinWidth = /**
     * @protected
     * @param {?} column
     * @return {?}
     */
    function (column) {
        /** @type {?} */
        var currentColWidth = parseFloat(column.width);
        /** @type {?} */
        var actualWidth = column.headerCell.elementRef.nativeElement.getBoundingClientRect().width;
        currentColWidth = Number.isNaN(currentColWidth) || (currentColWidth < actualWidth) ? actualWidth : currentColWidth;
        /** @type {?} */
        var actualMinWidth = parseFloat(column.minWidth);
        return actualMinWidth < currentColWidth ? actualMinWidth : currentColWidth;
    };
    /**
     * @protected
     * @param {?} column
     * @return {?}
     */
    IgxColumnResizingService.prototype.getColMaxWidth = /**
     * @protected
     * @param {?} column
     * @return {?}
     */
    function (column) {
        return column.pinned ? parseFloat(this.pinnedMaxWidth) : parseFloat(column.maxWidth);
    };
    /**
     * @protected
     * @param {?} column
     * @param {?} diff
     * @return {?}
     */
    IgxColumnResizingService.prototype.resizeColumnLayoutFor = /**
     * @protected
     * @param {?} column
     * @param {?} diff
     * @return {?}
     */
    function (column, diff) {
        var _this = this;
        /** @type {?} */
        var relativeColumns = column.getResizableColUnderEnd();
        /** @type {?} */
        var combinedSpan = relativeColumns.reduce(function (acc, col) { return acc + col.spanUsed; }, 0);
        if (column.pinned) {
            /** @type {?} */
            var pinnedWidth = this.column.grid.getPinnedWidth(true);
            /** @type {?} */
            var maxPinnedWidth = this.column.grid.calcPinnedContainerMaxWidth;
            if (pinnedWidth + diff > maxPinnedWidth) {
                diff = maxPinnedWidth - pinnedWidth;
            }
        }
        // Resize first those who might reach min/max width
        /** @type {?} */
        var columnsToResize = tslib_1.__spread(relativeColumns);
        /** @type {?} */
        var updatedDiff = diff;
        /** @type {?} */
        var updatedCombinedSpan = combinedSpan;
        /** @type {?} */
        var setMinMaxCols = false;
        var _loop_1 = function () {
            // Cycle them until there are not ones that reach min/max size, because the diff accumulates after each cycle.
            // This is because we can have at first 2 cols reaching min width and then after
            // recalculating the diff there might be 1 more that reaches min width.
            setMinMaxCols = false;
            /** @type {?} */
            var newCombinedSpan = updatedCombinedSpan;
            /** @type {?} */
            var newColsToResize = [];
            columnsToResize.forEach(function (col) {
                /** @type {?} */
                var currentResizeWidth = parseFloat(col.target.calcWidth);
                /** @type {?} */
                var resizeScaled = (diff / updatedCombinedSpan) * col.target.gridColumnSpan;
                /** @type {?} */
                var minWidth = _this.getColMinWidth(col.target);
                /** @type {?} */
                var maxWidth = _this.getColMaxWidth(col.target);
                if (currentResizeWidth + resizeScaled < minWidth) {
                    col.target.width = minWidth + 'px';
                    updatedDiff += (currentResizeWidth - minWidth);
                    newCombinedSpan -= col.spanUsed;
                    setMinMaxCols = true;
                }
                else if (maxWidth && (currentResizeWidth + resizeScaled > maxWidth)) {
                    col.target.width = maxWidth + 'px';
                    updatedDiff -= (maxWidth - currentResizeWidth);
                    newCombinedSpan -= col.spanUsed;
                    setMinMaxCols = true;
                }
                else {
                    // Save new ones that can be resized
                    newColsToResize.push(col);
                }
            });
            updatedCombinedSpan = newCombinedSpan;
            columnsToResize = newColsToResize;
        };
        do {
            _loop_1();
        } while (setMinMaxCols);
        // Those left that don't reach min/max size resize them normally.
        columnsToResize.forEach(function (col) {
            /** @type {?} */
            var currentResizeWidth = parseFloat(col.target.calcWidth);
            /** @type {?} */
            var resizeScaled = (updatedDiff / updatedCombinedSpan) * col.target.gridColumnSpan;
            col.target.width = (currentResizeWidth + resizeScaled) + 'px';
        });
    };
    IgxColumnResizingService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    IgxColumnResizingService.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
    return IgxColumnResizingService;
}());
export { IgxColumnResizingService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxColumnResizingService.prototype.pinnedMaxWidth;
    /**
     * @hidden
     * @type {?}
     */
    IgxColumnResizingService.prototype.startResizePos;
    /**
     * Indicates that a column is currently being resized.
     * @type {?}
     */
    IgxColumnResizingService.prototype.isColumnResizing;
    /**
     * @hidden
     * @type {?}
     */
    IgxColumnResizingService.prototype.resizeCursor;
    /**
     * @hidden
     * @type {?}
     */
    IgxColumnResizingService.prototype.showResizer;
    /**
     * The column being resized.
     * @type {?}
     */
    IgxColumnResizingService.prototype.column;
    /**
     * @type {?}
     * @private
     */
    IgxColumnResizingService.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb2x1bW4tcmVzaXppbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvZ3JpZC1jb2x1bW4tcmVzaXppbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBSW5EO0lBMEJJLGtDQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTs7OztRQVZ6QixpQkFBWSxHQUFXLElBQUksQ0FBQzs7OztRQUk1QixnQkFBVyxHQUFHLEtBQUssQ0FBQztJQU1TLENBQUM7SUFLckMsc0JBQUksbURBQWE7UUFIakI7O1dBRUc7Ozs7O1FBQ0g7O2dCQUNRLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTs7O2dCQUduRCxzQkFBc0IsR0FBRyxDQUFDO1lBQzlCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtnQkFDL0Isc0JBQXNCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2FBQzlGO1lBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7Z0JBQ3pCLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxzQkFBc0IsQ0FBQzthQUNySDtZQUVELE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBS0Qsc0JBQUksdURBQWlCO1FBSHJCOztXQUVHOzs7OztRQUNIOztnQkFDVSxjQUFjLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDOztnQkFDakQsUUFBUSxHQUFHLGNBQWMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFFaEgsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUNwRyxDQUFDOzs7T0FBQTtJQUtELHNCQUFJLHVEQUFpQjtRQUhyQjs7V0FFRzs7Ozs7UUFDSDs7Z0JBQ1UsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLO1lBRWpHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7O29CQUNkLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYztvQkFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLFdBQVc7Z0JBRXRHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsY0FBYyxFQUFFO29CQUMzRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO29CQUUzQyxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsQ0FBQztpQkFDekQ7cUJBQU07b0JBQ0gsT0FBTyxjQUFjLEdBQUcsV0FBVyxDQUFDO2lCQUN2QzthQUNKO2lCQUFNO2dCQUNILElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7b0JBQ3RCLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxDQUFDO2lCQUN6RDtxQkFBTTtvQkFDSCxPQUFPLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDbEM7YUFDSjtRQUNMLENBQUM7OztPQUFBO0lBRUQ7Ozs7OztPQU1HOzs7Ozs7Ozs7SUFDSSwyREFBd0I7Ozs7Ozs7O0lBQS9COztZQUNVLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSzs7WUFFL0YsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUU7UUFFOUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTs7Z0JBQ2QsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxlQUFlLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztZQUVqRyxJQUFJLGNBQWMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRTtnQkFDaEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQzVCO1NBQ0o7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUU7WUFDdEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQy9EO2FBQU0sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ25EO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDNUI7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFPLENBQUMsQ0FBQyxDQUFDO1FBRXhCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDbEMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFNBQVMsRUFBRSxlQUFlLENBQUMsUUFBUSxFQUFFO1lBQ3JDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDOUIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSSwrQ0FBWTs7Ozs7SUFBbkIsVUFBb0IsS0FBaUI7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7O1lBQ25CLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjOztZQUU1QyxlQUFlLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDOztZQUM3QyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUs7UUFDakcsZUFBZSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDOztZQUU3RyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOztZQUM5QyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3BELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDbkMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNILElBQUksZUFBZSxHQUFHLElBQUksR0FBRyxXQUFXLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDMUM7aUJBQU0sSUFBSSxXQUFXLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxHQUFHLFdBQVcsQ0FBQyxFQUFFO2dCQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQzFDO2lCQUFNO2dCQUNILElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQzthQUN2RDtTQUNKO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBTyxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUUxQixJQUFJLGVBQWUsS0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO2dCQUNsQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLFNBQVMsRUFBRSxlQUFlLENBQUMsUUFBUSxFQUFFO2dCQUNyQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO2FBQzlCLENBQUMsQ0FBQztTQUNOO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7Ozs7SUFFUyxpREFBYzs7Ozs7SUFBeEIsVUFBeUIsTUFBMEI7O1lBQzNDLGVBQWUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQzs7WUFDeEMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUs7UUFDNUYsZUFBZSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDOztZQUU3RyxjQUFjLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDbEQsT0FBTyxjQUFjLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQztJQUMvRSxDQUFDOzs7Ozs7SUFFUyxpREFBYzs7Ozs7SUFBeEIsVUFBeUIsTUFBMEI7UUFDL0MsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7Ozs7Ozs7SUFFUyx3REFBcUI7Ozs7OztJQUEvQixVQUFnQyxNQUEwQixFQUFFLElBQVk7UUFBeEUsaUJBeURDOztZQXhEUyxlQUFlLEdBQUcsTUFBTSxDQUFDLHVCQUF1QixFQUFFOztZQUNsRCxZQUFZLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHLElBQU0sT0FBQSxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBbEIsQ0FBa0IsRUFBRSxDQUFDLENBQUM7UUFFakYsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFOztnQkFDVCxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQzs7Z0JBQ25ELGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkI7WUFFbkUsSUFBSSxXQUFXLEdBQUcsSUFBSSxHQUFHLGNBQWMsRUFBRTtnQkFDckMsSUFBSSxHQUFHLGNBQWMsR0FBRyxXQUFXLENBQUM7YUFDdkM7U0FDSjs7O1lBR0csZUFBZSxvQkFBTyxlQUFlLENBQUM7O1lBQ3RDLFdBQVcsR0FBRyxJQUFJOztZQUNsQixtQkFBbUIsR0FBRyxZQUFZOztZQUNsQyxhQUFhLEdBQUcsS0FBSzs7WUFFckIsOEdBQThHO1lBQzlHLGdGQUFnRjtZQUNoRix1RUFBdUU7WUFDdkUsYUFBYSxHQUFHLEtBQUssQ0FBQzs7Z0JBQ2xCLGVBQWUsR0FBRyxtQkFBbUI7O2dCQUNuQyxlQUFlLEdBQUcsRUFBRTtZQUMxQixlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRzs7b0JBQ2xCLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzs7b0JBQ3JELFlBQVksR0FBRyxDQUFDLElBQUksR0FBRyxtQkFBbUIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYzs7b0JBRXZFLFFBQVEsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7O29CQUMxQyxRQUFRLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO2dCQUNoRCxJQUFJLGtCQUFrQixHQUFHLFlBQVksR0FBRyxRQUFRLEVBQUU7b0JBQzlDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ25DLFdBQVcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxDQUFDO29CQUMvQyxlQUFlLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQztvQkFDaEMsYUFBYSxHQUFHLElBQUksQ0FBQztpQkFDeEI7cUJBQU0sSUFBSSxRQUFRLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxZQUFZLEdBQUcsUUFBUSxDQUFDLEVBQUU7b0JBQ25FLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ25DLFdBQVcsSUFBSSxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDO29CQUMvQyxlQUFlLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQztvQkFDaEMsYUFBYSxHQUFHLElBQUksQ0FBQztpQkFDeEI7cUJBQU07b0JBQ0gsb0NBQW9DO29CQUNwQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUM3QjtZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsbUJBQW1CLEdBQUcsZUFBZSxDQUFDO1lBQ3RDLGVBQWUsR0FBRyxlQUFlLENBQUM7O1FBOUJ0Qzs7aUJBK0JTLGFBQWEsRUFBRTtRQUV4QixpRUFBaUU7UUFDakUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7O2dCQUNsQixrQkFBa0IsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7O2dCQUNyRCxZQUFZLEdBQUcsQ0FBQyxXQUFXLEdBQUcsbUJBQW1CLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLGNBQWM7WUFDcEYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztnQkFwT0osVUFBVTs7OztnQkFKVSxNQUFNOztJQXlPM0IsK0JBQUM7Q0FBQSxBQXJPRCxJQXFPQztTQXBPWSx3QkFBd0I7Ozs7OztJQUVqQyxrREFBK0I7Ozs7O0lBSy9CLGtEQUE4Qjs7Ozs7SUFJOUIsb0RBQWlDOzs7OztJQUlqQyxnREFBbUM7Ozs7O0lBSW5DLCtDQUEyQjs7Ozs7SUFJM0IsMENBQWtDOzs7OztJQUV0Qix3Q0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneENvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uLmNvbXBvbmVudCc7XG5cbi8qKiBAaGlkZGVuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSWd4Q29sdW1uUmVzaXppbmdTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgcGlubmVkTWF4V2lkdGg6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBzdGFydFJlc2l6ZVBvczogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGF0IGEgY29sdW1uIGlzIGN1cnJlbnRseSBiZWluZyByZXNpemVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBpc0NvbHVtblJlc2l6aW5nOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyByZXNpemVDdXJzb3I6IHN0cmluZyA9IG51bGw7XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHNob3dSZXNpemVyID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbHVtbiBiZWluZyByZXNpemVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBjb2x1bW46IElneENvbHVtbkNvbXBvbmVudDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lKSB7IH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIGdldCByZXNpemVySGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLmNvbHVtbi5ncmlkLmdldFZpc2libGVDb250ZW50SGVpZ2h0KCk7XG5cbiAgICAgICAgLy8gQ29sdW1uIGhlaWdodCBtdWx0aXBsaWVyIGluIGNhc2UgdGhlcmUgYXJlIENvbHVtbiBMYXlvdXRzLiBUaGUgcmVzaXplciBoZWlnaHQgbmVlZCB0byB0YWtlIGludG8gYWNjb3VudCByb3dTdGFydC5cbiAgICAgICAgbGV0IGNvbHVtbkhlaWdodE11bHRpcGxpZXIgPSAxO1xuICAgICAgICBpZiAodGhpcy5jb2x1bW4uY29sdW1uTGF5b3V0Q2hpbGQpIHtcbiAgICAgICAgICAgIGNvbHVtbkhlaWdodE11bHRpcGxpZXIgPSB0aGlzLmNvbHVtbi5ncmlkLm11bHRpUm93TGF5b3V0Um93U2l6ZSAtIHRoaXMuY29sdW1uLnJvd1N0YXJ0ICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbHVtbi5sZXZlbCAhPT0gMCkge1xuICAgICAgICAgICAgaGVpZ2h0IC09IHRoaXMuY29sdW1uLnRvcExldmVsUGFyZW50LmhlYWRlckdyb3VwLmhlaWdodCAtIHRoaXMuY29sdW1uLmhlYWRlckdyb3VwLmhlaWdodCAqIGNvbHVtbkhlaWdodE11bHRpcGxpZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1pbmltYWwgcG9zc2libGUgd2lkdGggdG8gd2hpY2ggdGhlIGNvbHVtbiBjYW4gYmUgcmVzaXplZC5cbiAgICAgKi9cbiAgICBnZXQgcmVzdHJpY3RSZXNpemVNaW4oKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgYWN0dWFsTWluV2lkdGggPSBwYXJzZUZsb2F0KHRoaXMuY29sdW1uLm1pbldpZHRoKTtcbiAgICAgICAgY29uc3QgbWluV2lkdGggPSBhY3R1YWxNaW5XaWR0aCA8IHBhcnNlRmxvYXQodGhpcy5jb2x1bW4ud2lkdGgpID8gYWN0dWFsTWluV2lkdGggOiBwYXJzZUZsb2F0KHRoaXMuY29sdW1uLndpZHRoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4uaGVhZGVyQ2VsbC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBtaW5XaWR0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtYXhpbWFsIHBvc3NpYmxlIHdpZHRoIHRvIHdoaWNoIHRoZSBjb2x1bW4gY2FuIGJlIHJlc2l6ZWQuXG4gICAgICovXG4gICAgZ2V0IHJlc3RyaWN0UmVzaXplTWF4KCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGFjdHVhbFdpZHRoID0gdGhpcy5jb2x1bW4uaGVhZGVyQ2VsbC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG5cbiAgICAgICAgaWYgKHRoaXMuY29sdW1uLnBpbm5lZCkge1xuICAgICAgICAgICAgY29uc3QgcGlubmVkTWF4V2lkdGggPSB0aGlzLnBpbm5lZE1heFdpZHRoID1cbiAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbi5ncmlkLmNhbGNQaW5uZWRDb250YWluZXJNYXhXaWR0aCAtIHRoaXMuY29sdW1uLmdyaWQuZ2V0UGlubmVkV2lkdGgodHJ1ZSkgKyBhY3R1YWxXaWR0aDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY29sdW1uLm1heFdpZHRoICYmIHBhcnNlRmxvYXQodGhpcy5jb2x1bW4ubWF4V2lkdGgpIDwgcGlubmVkTWF4V2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBpbm5lZE1heFdpZHRoID0gdGhpcy5jb2x1bW4ubWF4V2lkdGg7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLmNvbHVtbi5tYXhXaWR0aCkgLSBhY3R1YWxXaWR0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBpbm5lZE1heFdpZHRoIC0gYWN0dWFsV2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb2x1bW4ubWF4V2lkdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLmNvbHVtbi5tYXhXaWR0aCkgLSBhY3R1YWxXaWR0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXV0b3NpemVzIHRoZSBjb2x1bW4gdG8gdGhlIGxvbmdlc3QgY3VycmVudGx5IHZpc2libGUgY2VsbCB2YWx1ZSwgaW5jbHVkaW5nIHRoZSBoZWFkZXIgY2VsbC5cbiAgICAgKiBJZiB0aGUgY29sdW1uIGhhcyBhIHByZWRpZmluZWQgbWF4V2lkdGggYW5kIHRoZSBhdXRvc2l6ZWQgY29sdW1uIHdpZHRoIHdpbGwgYmVjb21lIGJpZ2dlciB0aGFuIGl0LFxuICAgICAqIHRoZW4gdGhlIGNvbHVtbiBpcyBzaXplZCB0byBpdHMgbWF4V2lkdGguXG4gICAgICogSWYgdGhlIGNvbHVtbiBpcyBwaW5uZWQgYW5kIHRoZSBhdXRvc2l6ZWQgY29sdW1uIHdpZHRoIHdpbGwgY2F1c2UgdGhlIHBpbm5lZCBhcmVhIHRvIGJlY29tZSBiaWdnZXJcbiAgICAgKiB0aGFuIHRoZSBtYXhpbXVtIGFsbG93ZWQgcGlubmVkIGFyZWEgd2lkdGggKDgwJSBvZiB0aGUgdG90YWwgZ3JpZCB3aWR0aCksIGF1dG9zaXppbmcgd2lsbCBiZSBkZWlzbWlzc2VkLlxuICAgICAqL1xuICAgIHB1YmxpYyBhdXRvc2l6ZUNvbHVtbk9uRGJsQ2xpY2soKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2xXaWR0aCA9IHRoaXMuY29sdW1uLmhlYWRlckNlbGwuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuXG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLmNvbHVtbi5nZXRMYXJnZXN0Q2VsbFdpZHRoKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29sdW1uLnBpbm5lZCkge1xuICAgICAgICAgICAgY29uc3QgbmV3UGlubmVkV2lkdGggPSB0aGlzLmNvbHVtbi5ncmlkLmdldFBpbm5lZFdpZHRoKHRydWUpIC0gY3VycmVudENvbFdpZHRoICsgcGFyc2VGbG9hdChzaXplKTtcblxuICAgICAgICAgICAgaWYgKG5ld1Bpbm5lZFdpZHRoIDw9IHRoaXMuY29sdW1uLmdyaWQuY2FsY1Bpbm5lZENvbnRhaW5lck1heFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2x1bW4ud2lkdGggPSBzaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29sdW1uLm1heFdpZHRoICYmIChwYXJzZUZsb2F0KHNpemUpID4gcGFyc2VGbG9hdCh0aGlzLmNvbHVtbi5tYXhXaWR0aCkpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbi53aWR0aCA9IHBhcnNlRmxvYXQodGhpcy5jb2x1bW4ubWF4V2lkdGgpICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmIChwYXJzZUZsb2F0KHNpemUpIDwgcGFyc2VGbG9hdCh0aGlzLmNvbHVtbi5taW5XaWR0aCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29sdW1uLndpZHRoID0gdGhpcy5jb2x1bW4ubWluV2lkdGggKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2x1bW4ud2lkdGggPSBzaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7fSk7XG5cbiAgICAgICAgdGhpcy5jb2x1bW4uZ3JpZC5yZWZsb3coKTtcbiAgICAgICAgdGhpcy5jb2x1bW4uZ3JpZC5vbkNvbHVtblJlc2l6ZWQuZW1pdCh7XG4gICAgICAgICAgICBjb2x1bW46IHRoaXMuY29sdW1uLFxuICAgICAgICAgICAgcHJldldpZHRoOiBjdXJyZW50Q29sV2lkdGgudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIG5ld1dpZHRoOiB0aGlzLmNvbHVtbi53aWR0aFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNpemVzIHRoZSBjb2x1bW4gcmVnYXJpZG5nIHRvIHRoZSBjb2x1bW4gbWluV2lkdGggYW5kIG1heFdpZHRoLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXNpemVDb2x1bW4oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgdGhpcy5zaG93UmVzaXplciA9IGZhbHNlO1xuICAgICAgICBjb25zdCBkaWZmID0gZXZlbnQuY2xpZW50WCAtIHRoaXMuc3RhcnRSZXNpemVQb3M7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRDb2xXaWR0aCA9IHBhcnNlRmxvYXQodGhpcy5jb2x1bW4ud2lkdGgpO1xuICAgICAgICBjb25zdCBhY3R1YWxXaWR0aCA9IHRoaXMuY29sdW1uLmhlYWRlckNlbGwuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICBjdXJyZW50Q29sV2lkdGggPSBOdW1iZXIuaXNOYU4oY3VycmVudENvbFdpZHRoKSB8fCAoY3VycmVudENvbFdpZHRoIDwgYWN0dWFsV2lkdGgpID8gYWN0dWFsV2lkdGggOiBjdXJyZW50Q29sV2lkdGg7XG5cbiAgICAgICAgY29uc3QgY29sTWluV2lkdGggPSB0aGlzLmdldENvbE1pbldpZHRoKHRoaXMuY29sdW1uKTtcbiAgICAgICAgY29uc3QgY29sTWF4V2lkdGggPSB0aGlzLmdldENvbE1heFdpZHRoKHRoaXMuY29sdW1uKTtcbiAgICAgICAgaWYgKHRoaXMuY29sdW1uLmdyaWQuaGFzQ29sdW1uTGF5b3V0cykge1xuICAgICAgICAgICAgdGhpcy5yZXNpemVDb2x1bW5MYXlvdXRGb3IodGhpcy5jb2x1bW4sIGRpZmYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRDb2xXaWR0aCArIGRpZmYgPCBjb2xNaW5XaWR0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uLndpZHRoID0gY29sTWluV2lkdGggKyAncHgnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2xNYXhXaWR0aCAmJiAoY3VycmVudENvbFdpZHRoICsgZGlmZiA+IGNvbE1heFdpZHRoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uLndpZHRoID0gY29sTWF4V2lkdGggKyAncHgnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbi53aWR0aCA9IChjdXJyZW50Q29sV2lkdGggKyBkaWZmKSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHt9KTtcbiAgICAgICAgdGhpcy5jb2x1bW4uZ3JpZC5yZWZsb3coKTtcblxuICAgICAgICBpZiAoY3VycmVudENvbFdpZHRoICE9PSBwYXJzZUZsb2F0KHRoaXMuY29sdW1uLndpZHRoKSkge1xuICAgICAgICAgICAgdGhpcy5jb2x1bW4uZ3JpZC5vbkNvbHVtblJlc2l6ZWQuZW1pdCh7XG4gICAgICAgICAgICAgICAgY29sdW1uOiB0aGlzLmNvbHVtbixcbiAgICAgICAgICAgICAgICBwcmV2V2lkdGg6IGN1cnJlbnRDb2xXaWR0aC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIG5ld1dpZHRoOiB0aGlzLmNvbHVtbi53aWR0aFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzQ29sdW1uUmVzaXppbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0Q29sTWluV2lkdGgoY29sdW1uOiBJZ3hDb2x1bW5Db21wb25lbnQpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRDb2xXaWR0aCA9IHBhcnNlRmxvYXQoY29sdW1uLndpZHRoKTtcbiAgICAgICAgY29uc3QgYWN0dWFsV2lkdGggPSBjb2x1bW4uaGVhZGVyQ2VsbC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIGN1cnJlbnRDb2xXaWR0aCA9IE51bWJlci5pc05hTihjdXJyZW50Q29sV2lkdGgpIHx8IChjdXJyZW50Q29sV2lkdGggPCBhY3R1YWxXaWR0aCkgPyBhY3R1YWxXaWR0aCA6IGN1cnJlbnRDb2xXaWR0aDtcblxuICAgICAgICBjb25zdCBhY3R1YWxNaW5XaWR0aCA9IHBhcnNlRmxvYXQoY29sdW1uLm1pbldpZHRoKTtcbiAgICAgICAgcmV0dXJuIGFjdHVhbE1pbldpZHRoIDwgY3VycmVudENvbFdpZHRoID8gYWN0dWFsTWluV2lkdGggOiBjdXJyZW50Q29sV2lkdGg7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldENvbE1heFdpZHRoKGNvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb2x1bW4ucGlubmVkID8gcGFyc2VGbG9hdCh0aGlzLnBpbm5lZE1heFdpZHRoKSA6IHBhcnNlRmxvYXQoY29sdW1uLm1heFdpZHRoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVzaXplQ29sdW1uTGF5b3V0Rm9yKGNvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50LCBkaWZmOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgcmVsYXRpdmVDb2x1bW5zID0gY29sdW1uLmdldFJlc2l6YWJsZUNvbFVuZGVyRW5kKCk7XG4gICAgICAgIGNvbnN0IGNvbWJpbmVkU3BhbiA9IHJlbGF0aXZlQ29sdW1ucy5yZWR1Y2UoKGFjYywgY29sKSA9PiAgYWNjICsgY29sLnNwYW5Vc2VkLCAwKTtcblxuICAgICAgICBpZiAoY29sdW1uLnBpbm5lZCkge1xuICAgICAgICAgICAgY29uc3QgcGlubmVkV2lkdGggPSB0aGlzLmNvbHVtbi5ncmlkLmdldFBpbm5lZFdpZHRoKHRydWUpO1xuICAgICAgICAgICAgY29uc3QgbWF4UGlubmVkV2lkdGggPSB0aGlzLmNvbHVtbi5ncmlkLmNhbGNQaW5uZWRDb250YWluZXJNYXhXaWR0aDtcblxuICAgICAgICAgICAgaWYgKHBpbm5lZFdpZHRoICsgZGlmZiA+IG1heFBpbm5lZFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgZGlmZiA9IG1heFBpbm5lZFdpZHRoIC0gcGlubmVkV2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNpemUgZmlyc3QgdGhvc2Ugd2hvIG1pZ2h0IHJlYWNoIG1pbi9tYXggd2lkdGhcbiAgICAgICAgbGV0IGNvbHVtbnNUb1Jlc2l6ZSA9IFsuLi5yZWxhdGl2ZUNvbHVtbnNdO1xuICAgICAgICBsZXQgdXBkYXRlZERpZmYgPSBkaWZmO1xuICAgICAgICBsZXQgdXBkYXRlZENvbWJpbmVkU3BhbiA9IGNvbWJpbmVkU3BhbjtcbiAgICAgICAgbGV0IHNldE1pbk1heENvbHMgPSBmYWxzZTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgLy8gQ3ljbGUgdGhlbSB1bnRpbCB0aGVyZSBhcmUgbm90IG9uZXMgdGhhdCByZWFjaCBtaW4vbWF4IHNpemUsIGJlY2F1c2UgdGhlIGRpZmYgYWNjdW11bGF0ZXMgYWZ0ZXIgZWFjaCBjeWNsZS5cbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYmVjYXVzZSB3ZSBjYW4gaGF2ZSBhdCBmaXJzdCAyIGNvbHMgcmVhY2hpbmcgbWluIHdpZHRoIGFuZCB0aGVuIGFmdGVyXG4gICAgICAgICAgICAvLyByZWNhbGN1bGF0aW5nIHRoZSBkaWZmIHRoZXJlIG1pZ2h0IGJlIDEgbW9yZSB0aGF0IHJlYWNoZXMgbWluIHdpZHRoLlxuICAgICAgICAgICAgc2V0TWluTWF4Q29scyA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IG5ld0NvbWJpbmVkU3BhbiA9IHVwZGF0ZWRDb21iaW5lZFNwYW47XG4gICAgICAgICAgICBjb25zdCBuZXdDb2xzVG9SZXNpemUgPSBbXTtcbiAgICAgICAgICAgIGNvbHVtbnNUb1Jlc2l6ZS5mb3JFYWNoKChjb2wpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UmVzaXplV2lkdGggPSBwYXJzZUZsb2F0KGNvbC50YXJnZXQuY2FsY1dpZHRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNpemVTY2FsZWQgPSAoZGlmZiAvIHVwZGF0ZWRDb21iaW5lZFNwYW4pICogY29sLnRhcmdldC5ncmlkQ29sdW1uU3BhbjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbldpZHRoID0gdGhpcy5nZXRDb2xNaW5XaWR0aChjb2wudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhXaWR0aCA9IHRoaXMuZ2V0Q29sTWF4V2lkdGgoY29sLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZXNpemVXaWR0aCArIHJlc2l6ZVNjYWxlZCA8IG1pbldpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbC50YXJnZXQud2lkdGggPSBtaW5XaWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWREaWZmICs9IChjdXJyZW50UmVzaXplV2lkdGggLSBtaW5XaWR0aCk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NvbWJpbmVkU3BhbiAtPSBjb2wuc3BhblVzZWQ7XG4gICAgICAgICAgICAgICAgICAgIHNldE1pbk1heENvbHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWF4V2lkdGggJiYgKGN1cnJlbnRSZXNpemVXaWR0aCArIHJlc2l6ZVNjYWxlZCA+IG1heFdpZHRoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb2wudGFyZ2V0LndpZHRoID0gbWF4V2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkRGlmZiAtPSAobWF4V2lkdGggLSBjdXJyZW50UmVzaXplV2lkdGgpO1xuICAgICAgICAgICAgICAgICAgICBuZXdDb21iaW5lZFNwYW4gLT0gY29sLnNwYW5Vc2VkO1xuICAgICAgICAgICAgICAgICAgICBzZXRNaW5NYXhDb2xzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIG5ldyBvbmVzIHRoYXQgY2FuIGJlIHJlc2l6ZWRcbiAgICAgICAgICAgICAgICAgICAgbmV3Q29sc1RvUmVzaXplLnB1c2goY29sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdXBkYXRlZENvbWJpbmVkU3BhbiA9IG5ld0NvbWJpbmVkU3BhbjtcbiAgICAgICAgICAgIGNvbHVtbnNUb1Jlc2l6ZSA9IG5ld0NvbHNUb1Jlc2l6ZTtcbiAgICAgICAgfSB3aGlsZSAoc2V0TWluTWF4Q29scyk7XG5cbiAgICAgICAgLy8gVGhvc2UgbGVmdCB0aGF0IGRvbid0IHJlYWNoIG1pbi9tYXggc2l6ZSByZXNpemUgdGhlbSBub3JtYWxseS5cbiAgICAgICAgY29sdW1uc1RvUmVzaXplLmZvckVhY2goKGNvbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFJlc2l6ZVdpZHRoID0gcGFyc2VGbG9hdChjb2wudGFyZ2V0LmNhbGNXaWR0aCk7XG4gICAgICAgICAgICBjb25zdCByZXNpemVTY2FsZWQgPSAodXBkYXRlZERpZmYgLyB1cGRhdGVkQ29tYmluZWRTcGFuKSAqIGNvbC50YXJnZXQuZ3JpZENvbHVtblNwYW47XG4gICAgICAgICAgICBjb2wudGFyZ2V0LndpZHRoID0gKGN1cnJlbnRSZXNpemVXaWR0aCArIHJlc2l6ZVNjYWxlZCkgKyAncHgnO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=