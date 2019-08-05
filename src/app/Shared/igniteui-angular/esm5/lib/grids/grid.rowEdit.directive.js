/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, forwardRef, HostListener, Inject } from '@angular/core';
import { IgxGridBaseComponent } from './grid-base.component';
/**
 * @hidden
 */
var IgxRowEditTemplateDirective = /** @class */ (function () {
    function IgxRowEditTemplateDirective() {
    }
    IgxRowEditTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxRowEdit]'
                },] }
    ];
    return IgxRowEditTemplateDirective;
}());
export { IgxRowEditTemplateDirective };
/**
 * @hidden
 */
var IgxRowEditTextDirective = /** @class */ (function () {
    function IgxRowEditTextDirective() {
    }
    IgxRowEditTextDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxRowEditText]'
                },] }
    ];
    return IgxRowEditTextDirective;
}());
export { IgxRowEditTextDirective };
/**
 * @hidden
 */
var IgxRowEditActionsDirective = /** @class */ (function () {
    function IgxRowEditActionsDirective() {
    }
    IgxRowEditActionsDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxRowEditActions]'
                },] }
    ];
    return IgxRowEditActionsDirective;
}());
export { IgxRowEditActionsDirective };
// TODO: Refactor circular ref, deps and logic
/**
 * @hidden
 */
var IgxRowEditTabStopDirective = /** @class */ (function () {
    function IgxRowEditTabStopDirective(grid, element) {
        var _this = this;
        this.grid = grid;
        this.element = element;
        /**
         * Sets the cell in edit mode and focus its native element
         * @param cellIndex index of the cell to activate
         */
        this.activateCell = function () {
            /** @type {?} */
            var cell = _this.grid.rowInEditMode.cells.find(function (e) { return e.visibleColumnIndex === _this.currentCellIndex; });
            cell.nativeElement.focus();
            cell.setEditMode(true);
            _this.currentCellIndex = -1;
        };
    }
    Object.defineProperty(IgxRowEditTabStopDirective.prototype, "allTabs", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.grid.rowEditTabs;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    IgxRowEditTabStopDirective.prototype.handleTab = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        if ((this.allTabs.last === this && !event.shiftKey) ||
            (this.allTabs.first === this && event.shiftKey)) {
            this.move(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IgxRowEditTabStopDirective.prototype.handleEscape = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.grid.endEdit(false, event);
        /** @type {?} */
        var activeNode = this.grid.selectionService.activeElement;
        //  on right click activeNode is deleted, so we may have no one
        if (activeNode) {
            /** @type {?} */
            var cell = this.grid.navigation.getCellElementByVisibleIndex(activeNode.row, activeNode.layout ? activeNode.layout.columnVisibleIndex : activeNode.column);
            cell.focus();
        }
    };
    /**
     * Moves focus to first/last editable cell in the editable row and put the cell in edit mode.
     * If cell is out of view first scrolls to the cell
     * @param event keyboard event containing information about whether SHIFT key was pressed
     */
    /**
     * Moves focus to first/last editable cell in the editable row and put the cell in edit mode.
     * If cell is out of view first scrolls to the cell
     * @private
     * @param {?} event keyboard event containing information about whether SHIFT key was pressed
     * @return {?}
     */
    IgxRowEditTabStopDirective.prototype.move = /**
     * Moves focus to first/last editable cell in the editable row and put the cell in edit mode.
     * If cell is out of view first scrolls to the cell
     * @private
     * @param {?} event keyboard event containing information about whether SHIFT key was pressed
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.currentCellIndex = event.shiftKey ? this.grid.lastEditableColumnIndex : this.grid.firstEditableColumnIndex;
        if (!this.grid.navigation.isColumnFullyVisible(this.currentCellIndex)) {
            this.grid.navigation.performHorizontalScrollToCell(this.grid.rowInEditMode.index, this.currentCellIndex, false, this.activateCell);
        }
        else {
            this.activateCell();
        }
    };
    IgxRowEditTabStopDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[igxRowEditTabStop]"
                },] }
    ];
    /** @nocollapse */
    IgxRowEditTabStopDirective.ctorParameters = function () { return [
        { type: IgxGridBaseComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return IgxGridBaseComponent; }),] }] },
        { type: ElementRef }
    ]; };
    IgxRowEditTabStopDirective.propDecorators = {
        handleTab: [{ type: HostListener, args: ['keydown.Tab', ["$event"],] }, { type: HostListener, args: ['keydown.Shift.Tab', ["$event"],] }],
        handleEscape: [{ type: HostListener, args: ['keydown.Escape', ["$event"],] }]
    };
    return IgxRowEditTabStopDirective;
}());
export { IgxRowEditTabStopDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxRowEditTabStopDirective.prototype.currentCellIndex;
    /**
     * Sets the cell in edit mode and focus its native element
     * \@param cellIndex index of the cell to activate
     * @type {?}
     * @private
     */
    IgxRowEditTabStopDirective.prototype.activateCell;
    /**
     * @type {?}
     * @private
     */
    IgxRowEditTabStopDirective.prototype.grid;
    /** @type {?} */
    IgxRowEditTabStopDirective.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5yb3dFZGl0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvZ3JpZC5yb3dFZGl0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFHN0Q7SUFBQTtJQUcyQyxDQUFDOztnQkFIM0MsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxjQUFjO2lCQUMzQjs7SUFDMEMsa0NBQUM7Q0FBQSxBQUg1QyxJQUc0QztTQUEvQiwyQkFBMkI7Ozs7QUFHeEM7SUFBQTtJQUd1QyxDQUFDOztnQkFIdkMsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7aUJBQy9COztJQUNzQyw4QkFBQztDQUFBLEFBSHhDLElBR3dDO1NBQTNCLHVCQUF1Qjs7OztBQUdwQztJQUFBO0lBRzBDLENBQUM7O2dCQUgxQyxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtpQkFDbEM7O0lBQ3lDLGlDQUFDO0NBQUEsQUFIM0MsSUFHMkM7U0FBOUIsMEJBQTBCOzs7OztBQUt2QztJQVVJLG9DQUM0RCxJQUEwQixFQUMzRSxPQUFtQjtRQUY5QixpQkFHQztRQUYyRCxTQUFJLEdBQUosSUFBSSxDQUFzQjtRQUMzRSxZQUFPLEdBQVAsT0FBTyxDQUFZOzs7OztRQStDdEIsaUJBQVksR0FBRzs7Z0JBQ2IsSUFBSSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsa0JBQWtCLEtBQUssS0FBSSxDQUFDLGdCQUFnQixFQUE5QyxDQUE4QyxD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O0lBQ2xGLDZDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgSG9zdExpc3RlbmVyLCBJbmplY3QsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4R3JpZEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2dyaWQtYmFzZS5jb21wb25lbnQnO1xuXG4vKiogQGhpZGRlbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4Um93RWRpdF0nXG59KVxuZXhwb3J0IGNsYXNzIElneFJvd0VkaXRUZW1wbGF0ZURpcmVjdGl2ZSB7IH1cblxuLyoqIEBoaWRkZW4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneFJvd0VkaXRUZXh0XSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4Um93RWRpdFRleHREaXJlY3RpdmUgeyB9XG5cbi8qKiBAaGlkZGVuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hSb3dFZGl0QWN0aW9uc10nXG59KVxuZXhwb3J0IGNsYXNzIElneFJvd0VkaXRBY3Rpb25zRGlyZWN0aXZlIHsgfVxuXG5cbi8vIFRPRE86IFJlZmFjdG9yIGNpcmN1bGFyIHJlZiwgZGVwcyBhbmQgbG9naWNcbi8qKiBAaGlkZGVuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogYFtpZ3hSb3dFZGl0VGFiU3RvcF1gXG59KVxuZXhwb3J0IGNsYXNzIElneFJvd0VkaXRUYWJTdG9wRGlyZWN0aXZlIHtcbiAgICBwcml2YXRlIGN1cnJlbnRDZWxsSW5kZXg6IG51bWJlcjtcblxuICAgIHByaXZhdGUgZ2V0IGFsbFRhYnMoKTogUXVlcnlMaXN0PElneFJvd0VkaXRUYWJTdG9wRGlyZWN0aXZlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQucm93RWRpdFRhYnM7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBJZ3hHcmlkQmFzZUNvbXBvbmVudCkpIHByaXZhdGUgZ3JpZDogSWd4R3JpZEJhc2VDb21wb25lbnQsXG4gICAgICAgIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5UYWInLCBbYCRldmVudGBdKVxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uU2hpZnQuVGFiJywgW2AkZXZlbnRgXSlcbiAgICBwdWJsaWMgaGFuZGxlVGFiKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAoKHRoaXMuYWxsVGFicy5sYXN0ID09PSB0aGlzICYmICFldmVudC5zaGlmdEtleSkgfHxcbiAgICAgICAgICAgICh0aGlzLmFsbFRhYnMuZmlyc3QgPT09IHRoaXMgJiYgZXZlbnQuc2hpZnRLZXkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uRXNjYXBlJywgW2AkZXZlbnRgXSlcbiAgICBwdWJsaWMgaGFuZGxlRXNjYXBlKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ3JpZC5lbmRFZGl0KGZhbHNlLCBldmVudCk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZU5vZGUgPSB0aGlzLmdyaWQuc2VsZWN0aW9uU2VydmljZS5hY3RpdmVFbGVtZW50O1xuICAgICAgICAvLyAgb24gcmlnaHQgY2xpY2sgYWN0aXZlTm9kZSBpcyBkZWxldGVkLCBzbyB3ZSBtYXkgaGF2ZSBubyBvbmVcbiAgICAgICAgaWYgKGFjdGl2ZU5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdyaWQubmF2aWdhdGlvbi5nZXRDZWxsRWxlbWVudEJ5VmlzaWJsZUluZGV4KFxuICAgICAgICAgICAgICAgIGFjdGl2ZU5vZGUucm93LFxuICAgICAgICAgICAgICAgIGFjdGl2ZU5vZGUubGF5b3V0ID8gYWN0aXZlTm9kZS5sYXlvdXQuY29sdW1uVmlzaWJsZUluZGV4IDogYWN0aXZlTm9kZS5jb2x1bW4pO1xuICAgICAgICAgICAgY2VsbC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW92ZXMgZm9jdXMgdG8gZmlyc3QvbGFzdCBlZGl0YWJsZSBjZWxsIGluIHRoZSBlZGl0YWJsZSByb3cgYW5kIHB1dCB0aGUgY2VsbCBpbiBlZGl0IG1vZGUuXG4gICAgICogSWYgY2VsbCBpcyBvdXQgb2YgdmlldyBmaXJzdCBzY3JvbGxzIHRvIHRoZSBjZWxsXG4gICAgICogQHBhcmFtIGV2ZW50IGtleWJvYXJkIGV2ZW50IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgd2hldGhlciBTSElGVCBrZXkgd2FzIHByZXNzZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIG1vdmUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50Q2VsbEluZGV4ID0gZXZlbnQuc2hpZnRLZXkgPyB0aGlzLmdyaWQubGFzdEVkaXRhYmxlQ29sdW1uSW5kZXggOiB0aGlzLmdyaWQuZmlyc3RFZGl0YWJsZUNvbHVtbkluZGV4O1xuICAgICAgICBpZiAoIXRoaXMuZ3JpZC5uYXZpZ2F0aW9uLmlzQ29sdW1uRnVsbHlWaXNpYmxlKHRoaXMuY3VycmVudENlbGxJbmRleCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5uYXZpZ2F0aW9uLnBlcmZvcm1Ib3Jpem9udGFsU2Nyb2xsVG9DZWxsKFxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5yb3dJbkVkaXRNb2RlLmluZGV4LCB0aGlzLmN1cnJlbnRDZWxsSW5kZXgsIGZhbHNlLCB0aGlzLmFjdGl2YXRlQ2VsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlQ2VsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY2VsbCBpbiBlZGl0IG1vZGUgYW5kIGZvY3VzIGl0cyBuYXRpdmUgZWxlbWVudFxuICAgICAqIEBwYXJhbSBjZWxsSW5kZXggaW5kZXggb2YgdGhlIGNlbGwgdG8gYWN0aXZhdGVcbiAgICAgKi9cbiAgICBwcml2YXRlIGFjdGl2YXRlQ2VsbCA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ3JpZC5yb3dJbkVkaXRNb2RlLmNlbGxzLmZpbmQoZSA9PiBlLnZpc2libGVDb2x1bW5JbmRleCA9PT0gdGhpcy5jdXJyZW50Q2VsbEluZGV4KTtcbiAgICAgICAgY2VsbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIGNlbGwuc2V0RWRpdE1vZGUodHJ1ZSk7XG4gICAgICAgIHRoaXMuY3VycmVudENlbGxJbmRleCA9IC0xO1xuICAgIH1cbn1cbiJdfQ==