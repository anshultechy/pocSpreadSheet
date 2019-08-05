/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, forwardRef, HostListener, Inject } from '@angular/core';
import { IgxGridBaseComponent } from './grid-base.component';
/**
 * @hidden
 */
export class IgxRowEditTemplateDirective {
}
IgxRowEditTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxRowEdit]'
            },] }
];
/**
 * @hidden
 */
export class IgxRowEditTextDirective {
}
IgxRowEditTextDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxRowEditText]'
            },] }
];
/**
 * @hidden
 */
export class IgxRowEditActionsDirective {
}
IgxRowEditActionsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxRowEditActions]'
            },] }
];
// TODO: Refactor circular ref, deps and logic
/**
 * @hidden
 */
export class IgxRowEditTabStopDirective {
    /**
     * @param {?} grid
     * @param {?} element
     */
    constructor(grid, element) {
        this.grid = grid;
        this.element = element;
        /**
         * Sets the cell in edit mode and focus its native element
         * @param cellIndex index of the cell to activate
         */
        this.activateCell = () => {
            /** @type {?} */
            const cell = this.grid.rowInEditMode.cells.find(e => e.visibleColumnIndex === this.currentCellIndex);
            cell.nativeElement.focus();
            cell.setEditMode(true);
            this.currentCellIndex = -1;
        };
    }
    /**
     * @private
     * @return {?}
     */
    get allTabs() {
        return this.grid.rowEditTabs;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleTab(event) {
        event.stopPropagation();
        if ((this.allTabs.last === this && !event.shiftKey) ||
            (this.allTabs.first === this && event.shiftKey)) {
            this.move(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleEscape(event) {
        this.grid.endEdit(false, event);
        /** @type {?} */
        const activeNode = this.grid.selectionService.activeElement;
        //  on right click activeNode is deleted, so we may have no one
        if (activeNode) {
            /** @type {?} */
            const cell = this.grid.navigation.getCellElementByVisibleIndex(activeNode.row, activeNode.layout ? activeNode.layout.columnVisibleIndex : activeNode.column);
            cell.focus();
        }
    }
    /**
     * Moves focus to first/last editable cell in the editable row and put the cell in edit mode.
     * If cell is out of view first scrolls to the cell
     * @private
     * @param {?} event keyboard event containing information about whether SHIFT key was pressed
     * @return {?}
     */
    move(event) {
        event.preventDefault();
        this.currentCellIndex = event.shiftKey ? this.grid.lastEditableColumnIndex : this.grid.firstEditableColumnIndex;
        if (!this.grid.navigation.isColumnFullyVisible(this.currentCellIndex)) {
            this.grid.navigation.performHorizontalScrollToCell(this.grid.rowInEditMode.index, this.currentCellIndex, false, this.activateCell);
        }
        else {
            this.activateCell();
        }
    }
}
IgxRowEditTabStopDirective.decorators = [
    { type: Directive, args: [{
                selector: `[igxRowEditTabStop]`
            },] }
];
/** @nocollapse */
IgxRowEditTabStopDirective.ctorParameters = () => [
    { type: IgxGridBaseComponent, decorators: [{ type: Inject, args: [forwardRef(() => IgxGridBaseComponent),] }] },
    { type: ElementRef }
];
IgxRowEditTabStopDirective.propDecorators = {
    handleTab: [{ type: HostListener, args: ['keydown.Tab', [`$event`],] }, { type: HostListener, args: ['keydown.Shift.Tab', [`$event`],] }],
    handleEscape: [{ type: HostListener, args: ['keydown.Escape', [`$event`],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5yb3dFZGl0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvZ3JpZC5yb3dFZGl0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFNN0QsTUFBTSxPQUFPLDJCQUEyQjs7O1lBSHZDLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsY0FBYzthQUMzQjs7Ozs7QUFPRCxNQUFNLE9BQU8sdUJBQXVCOzs7WUFIbkMsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7YUFDL0I7Ozs7O0FBT0QsTUFBTSxPQUFPLDBCQUEwQjs7O1lBSHRDLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2FBQ2xDOzs7Ozs7QUFTRCxNQUFNLE9BQU8sMEJBQTBCOzs7OztJQU9uQyxZQUM0RCxJQUEwQixFQUMzRSxPQUFtQjtRQUQ4QixTQUFJLEdBQUosSUFBSSxDQUFzQjtRQUMzRSxZQUFPLEdBQVAsT0FBTyxDQUFZOzs7OztRQStDdEIsaUJBQVksR0FBRyxHQUFTLEVBQUU7O2tCQUN4QixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsS0FBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDcEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUE7SUFuREQsQ0FBQzs7Ozs7SUFQRCxJQUFZLE9BQU87UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBU00sU0FBUyxDQUFDLEtBQW9CO1FBQ2pDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUMvQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQ2pEO1lBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQjtJQUNMLENBQUM7Ozs7O0lBR00sWUFBWSxDQUFDLEtBQW9CO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzs7Y0FDMUIsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtRQUMzRCwrREFBK0Q7UUFDL0QsSUFBSSxVQUFVLEVBQUU7O2tCQUNOLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FDMUQsVUFBVSxDQUFDLEdBQUcsRUFDZCxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1lBQ2pGLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjtJQUNMLENBQUM7Ozs7Ozs7O0lBT08sSUFBSSxDQUFDLEtBQW9CO1FBQzdCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztRQUNoSCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsNkJBQTZCLENBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2RjthQUFNO1lBQ0gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQzs7O1lBckRKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2FBQ2xDOzs7O1lBekJRLG9CQUFvQix1QkFrQ3BCLE1BQU0sU0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUM7WUFuQ2xDLFVBQVU7Ozt3QkF1Q3pCLFlBQVksU0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDdEMsWUFBWSxTQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDOzJCQVU1QyxZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7SUF0QjFDLHNEQUFpQzs7Ozs7OztJQXVEakMsa0RBS0M7Ozs7O0lBckRHLDBDQUFrRjs7SUFDbEYsNkNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBIb3N0TGlzdGVuZXIsIEluamVjdCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hHcmlkQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC1iYXNlLmNvbXBvbmVudCc7XG5cbi8qKiBAaGlkZGVuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hSb3dFZGl0XSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4Um93RWRpdFRlbXBsYXRlRGlyZWN0aXZlIHsgfVxuXG4vKiogQGhpZGRlbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4Um93RWRpdFRleHRdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hSb3dFZGl0VGV4dERpcmVjdGl2ZSB7IH1cblxuLyoqIEBoaWRkZW4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneFJvd0VkaXRBY3Rpb25zXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4Um93RWRpdEFjdGlvbnNEaXJlY3RpdmUgeyB9XG5cblxuLy8gVE9ETzogUmVmYWN0b3IgY2lyY3VsYXIgcmVmLCBkZXBzIGFuZCBsb2dpY1xuLyoqIEBoaWRkZW4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBgW2lneFJvd0VkaXRUYWJTdG9wXWBcbn0pXG5leHBvcnQgY2xhc3MgSWd4Um93RWRpdFRhYlN0b3BEaXJlY3RpdmUge1xuICAgIHByaXZhdGUgY3VycmVudENlbGxJbmRleDogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBnZXQgYWxsVGFicygpOiBRdWVyeUxpc3Q8SWd4Um93RWRpdFRhYlN0b3BEaXJlY3RpdmU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5yb3dFZGl0VGFicztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IElneEdyaWRCYXNlQ29tcG9uZW50KSkgcHJpdmF0ZSBncmlkOiBJZ3hHcmlkQmFzZUNvbXBvbmVudCxcbiAgICAgICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLlRhYicsIFtgJGV2ZW50YF0pXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5TaGlmdC5UYWInLCBbYCRldmVudGBdKVxuICAgIHB1YmxpYyBoYW5kbGVUYWIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmICgodGhpcy5hbGxUYWJzLmxhc3QgPT09IHRoaXMgJiYgIWV2ZW50LnNoaWZ0S2V5KSB8fFxuICAgICAgICAgICAgKHRoaXMuYWxsVGFicy5maXJzdCA9PT0gdGhpcyAmJiBldmVudC5zaGlmdEtleSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmUoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5Fc2NhcGUnLCBbYCRldmVudGBdKVxuICAgIHB1YmxpYyBoYW5kbGVFc2NhcGUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ncmlkLmVuZEVkaXQoZmFsc2UsIGV2ZW50KTtcbiAgICAgICAgY29uc3QgYWN0aXZlTm9kZSA9IHRoaXMuZ3JpZC5zZWxlY3Rpb25TZXJ2aWNlLmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIC8vICBvbiByaWdodCBjbGljayBhY3RpdmVOb2RlIGlzIGRlbGV0ZWQsIHNvIHdlIG1heSBoYXZlIG5vIG9uZVxuICAgICAgICBpZiAoYWN0aXZlTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ3JpZC5uYXZpZ2F0aW9uLmdldENlbGxFbGVtZW50QnlWaXNpYmxlSW5kZXgoXG4gICAgICAgICAgICAgICAgYWN0aXZlTm9kZS5yb3csXG4gICAgICAgICAgICAgICAgYWN0aXZlTm9kZS5sYXlvdXQgPyBhY3RpdmVOb2RlLmxheW91dC5jb2x1bW5WaXNpYmxlSW5kZXggOiBhY3RpdmVOb2RlLmNvbHVtbik7XG4gICAgICAgICAgICBjZWxsLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyBmb2N1cyB0byBmaXJzdC9sYXN0IGVkaXRhYmxlIGNlbGwgaW4gdGhlIGVkaXRhYmxlIHJvdyBhbmQgcHV0IHRoZSBjZWxsIGluIGVkaXQgbW9kZS5cbiAgICAgKiBJZiBjZWxsIGlzIG91dCBvZiB2aWV3IGZpcnN0IHNjcm9sbHMgdG8gdGhlIGNlbGxcbiAgICAgKiBAcGFyYW0gZXZlbnQga2V5Ym9hcmQgZXZlbnQgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB3aGV0aGVyIFNISUZUIGtleSB3YXMgcHJlc3NlZFxuICAgICAqL1xuICAgIHByaXZhdGUgbW92ZShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRDZWxsSW5kZXggPSBldmVudC5zaGlmdEtleSA/IHRoaXMuZ3JpZC5sYXN0RWRpdGFibGVDb2x1bW5JbmRleCA6IHRoaXMuZ3JpZC5maXJzdEVkaXRhYmxlQ29sdW1uSW5kZXg7XG4gICAgICAgIGlmICghdGhpcy5ncmlkLm5hdmlnYXRpb24uaXNDb2x1bW5GdWxseVZpc2libGUodGhpcy5jdXJyZW50Q2VsbEluZGV4KSkge1xuICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24ucGVyZm9ybUhvcml6b250YWxTY3JvbGxUb0NlbGwoXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLnJvd0luRWRpdE1vZGUuaW5kZXgsIHRoaXMuY3VycmVudENlbGxJbmRleCwgZmFsc2UsIHRoaXMuYWN0aXZhdGVDZWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVDZWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjZWxsIGluIGVkaXQgbW9kZSBhbmQgZm9jdXMgaXRzIG5hdGl2ZSBlbGVtZW50XG4gICAgICogQHBhcmFtIGNlbGxJbmRleCBpbmRleCBvZiB0aGUgY2VsbCB0byBhY3RpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgYWN0aXZhdGVDZWxsID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5ncmlkLnJvd0luRWRpdE1vZGUuY2VsbHMuZmluZChlID0+IGUudmlzaWJsZUNvbHVtbkluZGV4ID09PSB0aGlzLmN1cnJlbnRDZWxsSW5kZXgpO1xuICAgICAgICBjZWxsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgY2VsbC5zZXRFZGl0TW9kZSh0cnVlKTtcbiAgICAgICAgdGhpcy5jdXJyZW50Q2VsbEluZGV4ID0gLTE7XG4gICAgfVxufVxuIl19