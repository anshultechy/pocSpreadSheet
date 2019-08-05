/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { IgxGridCellComponent } from '../cell.component';
import { GridBaseAPIService } from '../api.service';
import { ChangeDetectorRef, ElementRef, ChangeDetectionStrategy, Component, HostListener, NgZone } from '@angular/core';
import { IgxHierarchicalSelectionAPIService } from './selection';
import { IgxGridSelectionService, IgxGridCRUDService } from '../../core/grid-selection';
export class IgxHierarchicalGridCellComponent extends IgxGridCellComponent {
    /**
     * @param {?} selectionService
     * @param {?} crudService
     * @param {?} gridAPI
     * @param {?} selection
     * @param {?} cdr
     * @param {?} helement
     * @param {?} zone
     */
    constructor(selectionService, crudService, gridAPI, selection, cdr, helement, zone) {
        super(selectionService, crudService, gridAPI, selection, cdr, helement, zone);
        this.selectionService = selectionService;
        this.crudService = crudService;
        this.gridAPI = gridAPI;
        this.selection = selection;
        this.cdr = cdr;
        this.helement = helement;
        this.zone = zone;
        this.hSelection = (/** @type {?} */ (selection));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this._rootGrid = this._getRootGrid();
    }
    /**
     * @private
     * @return {?}
     */
    _getRootGrid() {
        /** @type {?} */
        let currGrid = this.grid;
        while (currGrid.parent) {
            currGrid = currGrid.parent;
        }
        return currGrid;
    }
    // TODO: Extend the new selection service to avoid complete traversal
    /**
     * @return {?}
     */
    _clearAllHighlights() {
        [this._rootGrid, ...this._rootGrid.getChildGrids(true)].forEach(grid => {
            grid.selectionService.clear();
            grid.selectionService.activeElement = null;
            grid.nativeElement.classList.remove('igx-grid__tr--highlighted');
            grid.highlightedRowID = null;
            grid.cdr.markForCheck();
        });
    }
    /**
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    onFocus(event) {
        this._clearAllHighlights();
        /** @type {?} */
        const currentElement = this.grid.nativeElement;
        /** @type {?} */
        let parentGrid = this.grid;
        /** @type {?} */
        let childGrid;
        // add highligh to the current grid
        if (this._rootGrid.id !== currentElement.id) {
            currentElement.classList.add('igx-grid__tr--highlighted');
        }
        // add highligh to the current grid
        while (this._rootGrid.id !== parentGrid.id) {
            childGrid = parentGrid;
            parentGrid = parentGrid.parent;
            /** @type {?} */
            const parentRowID = parentGrid.hgridAPI.getParentRowId(childGrid);
            parentGrid.highlightedRowID = parentRowID;
        }
        super.onFocus(event);
    }
    // TODO: Refactor
    /**
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    dispatchEvent(event) {
        /** @type {?} */
        const key = event.key.toLowerCase();
        if (event.altKey && !this.row.added) {
            /** @type {?} */
            const grid = this.gridAPI.grid;
            /** @type {?} */
            const state = this.gridAPI.grid.hierarchicalState;
            /** @type {?} */
            const collapse = this.row.expanded && (key === 'left' || key === 'arrowleft' || key === 'up' || key === 'arrowup');
            /** @type {?} */
            const expand = !this.row.expanded && (key === 'right' || key === 'arrowright' || key === 'down' || key === 'arrowdown');
            if (collapse) {
                grid.hierarchicalState = state.filter(v => {
                    return v.rowID !== this.row.rowID;
                });
            }
            else if (expand) {
                state.push({ rowID: this.row.rowID });
                grid.hierarchicalState = [...state];
            }
            if (expand || collapse) {
                /** @type {?} */
                const rowID = this.cellID.rowID;
                grid.cdr.detectChanges();
                this.persistFocusedCell(rowID);
            }
            return;
        }
        super.dispatchEvent(event);
    }
    /**
     * @protected
     * @param {?} rowID
     * @return {?}
     */
    persistFocusedCell(rowID) {
        requestAnimationFrame(() => {
            // TODO: Test it out
            /** @type {?} */
            const cell = this.gridAPI.get_cell_by_key(rowID, this.column.field);
            if (cell) {
                cell.nativeElement.focus();
            }
        });
    }
}
IgxHierarchicalGridCellComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'igx-hierarchical-grid-cell',
                template: "<ng-template #defaultCell>\n    <div igxTextHighlight style=\"pointer-events: none\" [cssClass]=\"highlightClass\" [activeCssClass]=\"activeHighlightClass\" [groupName]=\"gridID\"\n        [value]=\"formatter ? formatter(value) : column.dataType === 'number' ? (value | igxdecimal: grid.locale) : column.dataType === 'date' ? (value | igxdate: grid.locale) : value\"\n        [row]=\"rowData\" [column]=\"this.column.field\" [containerClass]=\"'igx-grid__td-text'\"\n        class=\"igx-grid__td-text\">{{ formatter ? formatter(value) : column.dataType === 'number' ? (value | igxdecimal:\n        grid.locale) : column.dataType === 'date' ? (value | igxdate: grid.locale) : value }}</div>\n</ng-template>\n<ng-template #inlineEditor let-cell=\"cell\">\n    <ng-container *ngIf=\"column.dataType === 'string'\">\n        <igx-input-group displayDensity=\"compact\">\n            <input igxInput [value]=\"editValue\" (input)=\"editValue = $event.target.value\" [igxFocus]=\"focused\" />\n        </igx-input-group>\n    </ng-container>\n    <ng-container *ngIf=\"column.dataType === 'number'\">\n        <igx-input-group displayDensity=\"compact\">\n            <input igxInput [value]=\"editValue\" (input)=\"editValue = $event.target.value\" [igxFocus]=\"focused\" type=\"number\">\n        </igx-input-group>\n    </ng-container>\n    <ng-container *ngIf=\"column.dataType === 'boolean'\">\n        <igx-checkbox (change)=\"editValue = $event.checked\" [value]=\"editValue\" [checked]=\"editValue\"\n            [igxFocus]=\"focused\" [disableRipple]=\"true\"></igx-checkbox>\n    </ng-container>\n    <ng-container *ngIf=\"column.dataType === 'date'\">\n        <igx-date-picker [style.width.%]=\"100\" [outlet]=\"grid.outletDirective\" mode=\"dropdown\" (onSelection)=\"editValue = $event\"\n            [locale]=\"grid.locale\" [value]=\"editValue\" [igxFocus]=\"focused\" [labelVisibility]=\"false\">\n        </igx-date-picker>\n    </ng-container>\n</ng-template>\n<ng-container *ngTemplateOutlet=\"template; context: context\">\n</ng-container>\n"
            }] }
];
/** @nocollapse */
IgxHierarchicalGridCellComponent.ctorParameters = () => [
    { type: IgxGridSelectionService },
    { type: IgxGridCRUDService },
    { type: GridBaseAPIService },
    { type: IgxHierarchicalSelectionAPIService },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IgxHierarchicalGridCellComponent.propDecorators = {
    onFocus: [{ type: HostListener, args: ['focus', ['$event'],] }],
    dispatchEvent: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    IgxHierarchicalGridCellComponent.prototype.hSelection;
    /**
     * @type {?}
     * @protected
     */
    IgxHierarchicalGridCellComponent.prototype._rootGrid;
    /**
     * @type {?}
     * @protected
     */
    IgxHierarchicalGridCellComponent.prototype.selectionService;
    /**
     * @type {?}
     * @protected
     */
    IgxHierarchicalGridCellComponent.prototype.crudService;
    /** @type {?} */
    IgxHierarchicalGridCellComponent.prototype.gridAPI;
    /** @type {?} */
    IgxHierarchicalGridCellComponent.prototype.selection;
    /** @type {?} */
    IgxHierarchicalGridCellComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    IgxHierarchicalGridCellComponent.prototype.helement;
    /**
     * @type {?}
     * @protected
     */
    IgxHierarchicalGridCellComponent.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGllcmFyY2hpY2FsLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9oaWVyYXJjaGljYWwtZ3JpZC9oaWVyYXJjaGljYWwtY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUM3RCxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNqRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQVF4RixNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsb0JBQW9COzs7Ozs7Ozs7O0lBS3RFLFlBQ2MsZ0JBQXlDLEVBQ3pDLFdBQStCLEVBQ2xDLE9BQXlELEVBQ3pELFNBQTZDLEVBQzdDLEdBQXNCLEVBQ3JCLFFBQW9CLEVBQ2xCLElBQVk7UUFFbEIsS0FBSyxDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFSeEUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtRQUN6QyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFDbEMsWUFBTyxHQUFQLE9BQU8sQ0FBa0Q7UUFDekQsY0FBUyxHQUFULFNBQVMsQ0FBb0M7UUFDN0MsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUNsQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBR2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsbUJBQW9DLFNBQVMsRUFBQSxDQUFDO0lBQ25FLENBQUM7Ozs7SUFFTixRQUFRO1FBQ0osS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRU8sWUFBWTs7WUFDWixRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDeEIsT0FBTyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ3BCLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFHRCxtQkFBbUI7UUFDZixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7OztJQU9ELE9BQU8sQ0FBQyxLQUFLO1FBQ1QsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7O2NBQ3JCLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWE7O1lBQzFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSTs7WUFDdEIsU0FBUztRQUNiLG1DQUFtQztRQUNuQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLGNBQWMsQ0FBQyxFQUFFLEVBQUU7WUFDekMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztTQUM3RDtRQUVELG1DQUFtQztRQUNuQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLFVBQVUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsU0FBUyxHQUFHLFVBQVUsQ0FBQztZQUN2QixVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQzs7a0JBRXpCLFdBQVcsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7WUFDakUsVUFBVSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQztTQUM3QztRQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Ozs7Ozs7SUFRRCxhQUFhLENBQUMsS0FBb0I7O2NBQ3hCLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtRQUNuQyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTs7a0JBQzNCLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7O2tCQUN4QixLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCOztrQkFDM0MsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLENBQUMsR0FBRyxLQUFLLE1BQU0sSUFBSSxHQUFHLEtBQUssV0FBVyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLFNBQVMsQ0FBQzs7a0JBQzVHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLENBQUMsR0FBRyxLQUFLLE9BQU8sSUFBSSxHQUFHLEtBQUssWUFBWSxJQUFJLEdBQUcsS0FBSyxNQUFNLElBQUksR0FBRyxLQUFLLFdBQVcsQ0FBQztZQUN2SCxJQUFJLFFBQVEsRUFBRTtnQkFDVixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDdEMsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUN0QyxDQUFDLENBQUMsQ0FBQzthQUNOO2lCQUFNLElBQUksTUFBTSxFQUFFO2dCQUNmLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO2FBQ3ZDO1lBQ0QsSUFBSSxNQUFNLElBQUksUUFBUSxFQUFFOztzQkFDZCxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUN6QixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEM7WUFDRCxPQUFPO1NBQ1Y7UUFDRCxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7OztJQUVTLGtCQUFrQixDQUFDLEtBQUs7UUFDOUIscUJBQXFCLENBQUMsR0FBRyxFQUFFOzs7a0JBRWpCLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDbkUsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUM5QjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7O1lBakhKLFNBQVMsU0FBQztnQkFDUCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsb2hFQUF1QzthQUMxQzs7OztZQVBRLHVCQUF1QjtZQUFFLGtCQUFrQjtZQUwzQyxrQkFBa0I7WUFJbEIsa0NBQWtDO1lBSGxDLGlCQUFpQjtZQUFFLFVBQVU7WUFDWCxNQUFNOzs7c0JBeUQ1QixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzRCQTJCaEMsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztJQXZFbkMsc0RBQXFCOzs7OztJQUNyQixxREFBb0I7Ozs7O0lBR2hCLDREQUFtRDs7Ozs7SUFDbkQsdURBQXlDOztJQUN6QyxtREFBZ0U7O0lBQ2hFLHFEQUFvRDs7SUFDcEQsK0NBQTZCOzs7OztJQUM3QixvREFBNEI7Ozs7O0lBQzVCLGdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElneEdyaWRDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi4vY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JpZEJhc2VBUElTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsXG4gICAgIE9uSW5pdCwgSG9zdExpc3RlbmVyLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnQgfSBmcm9tICcuL2hpZXJhcmNoaWNhbC1ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hIaWVyYXJjaGljYWxTZWxlY3Rpb25BUElTZXJ2aWNlIH0gZnJvbSAnLi9zZWxlY3Rpb24nO1xuaW1wb3J0IHsgSWd4R3JpZFNlbGVjdGlvblNlcnZpY2UsIElneEdyaWRDUlVEU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvZ3JpZC1zZWxlY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgICBzZWxlY3RvcjogJ2lneC1oaWVyYXJjaGljYWwtZ3JpZC1jZWxsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vLi4vY2VsbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4SGllcmFyY2hpY2FsR3JpZENlbGxDb21wb25lbnQgZXh0ZW5kcyBJZ3hHcmlkQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcm90ZWN0ZWQgaFNlbGVjdGlvbjtcbiAgICBwcm90ZWN0ZWQgX3Jvb3RHcmlkO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBzZWxlY3Rpb25TZXJ2aWNlOiBJZ3hHcmlkU2VsZWN0aW9uU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGNydWRTZXJ2aWNlOiBJZ3hHcmlkQ1JVRFNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudD4sXG4gICAgICAgIHB1YmxpYyBzZWxlY3Rpb246IElneEhpZXJhcmNoaWNhbFNlbGVjdGlvbkFQSVNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwcml2YXRlIGhlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHN1cGVyKHNlbGVjdGlvblNlcnZpY2UsIGNydWRTZXJ2aWNlLCBncmlkQVBJLCBzZWxlY3Rpb24sIGNkciwgaGVsZW1lbnQsIHpvbmUpO1xuICAgICAgICAgICAgdGhpcy5oU2VsZWN0aW9uID0gPElneEhpZXJhcmNoaWNhbFNlbGVjdGlvbkFQSVNlcnZpY2U+c2VsZWN0aW9uO1xuICAgICAgICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgICAgIHRoaXMuX3Jvb3RHcmlkID0gdGhpcy5fZ2V0Um9vdEdyaWQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRSb290R3JpZCgpIHtcbiAgICAgICAgbGV0IGN1cnJHcmlkID0gdGhpcy5ncmlkO1xuICAgICAgICB3aGlsZSAoY3VyckdyaWQucGFyZW50KSB7XG4gICAgICAgICAgICBjdXJyR3JpZCA9IGN1cnJHcmlkLnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VyckdyaWQ7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogRXh0ZW5kIHRoZSBuZXcgc2VsZWN0aW9uIHNlcnZpY2UgdG8gYXZvaWQgY29tcGxldGUgdHJhdmVyc2FsXG4gICAgX2NsZWFyQWxsSGlnaGxpZ2h0cygpIHtcbiAgICAgICAgW3RoaXMuX3Jvb3RHcmlkLCAuLi50aGlzLl9yb290R3JpZC5nZXRDaGlsZEdyaWRzKHRydWUpXS5mb3JFYWNoKGdyaWQgPT4ge1xuICAgICAgICAgICAgZ3JpZC5zZWxlY3Rpb25TZXJ2aWNlLmNsZWFyKCk7XG4gICAgICAgICAgICBncmlkLnNlbGVjdGlvblNlcnZpY2UuYWN0aXZlRWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICBncmlkLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaWd4LWdyaWRfX3RyLS1oaWdobGlnaHRlZCcpO1xuICAgICAgICAgICAgZ3JpZC5oaWdobGlnaHRlZFJvd0lEID0gbnVsbDtcbiAgICAgICAgICAgIGdyaWQuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignZm9jdXMnLCBbJyRldmVudCddKVxuICAgIG9uRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5fY2xlYXJBbGxIaWdobGlnaHRzKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGxldCBwYXJlbnRHcmlkID0gdGhpcy5ncmlkO1xuICAgICAgICBsZXQgY2hpbGRHcmlkO1xuICAgICAgICAvLyBhZGQgaGlnaGxpZ2ggdG8gdGhlIGN1cnJlbnQgZ3JpZFxuICAgICAgICBpZiAodGhpcy5fcm9vdEdyaWQuaWQgIT09IGN1cnJlbnRFbGVtZW50LmlkKSB7XG4gICAgICAgICAgICBjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpZ3gtZ3JpZF9fdHItLWhpZ2hsaWdodGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgaGlnaGxpZ2ggdG8gdGhlIGN1cnJlbnQgZ3JpZFxuICAgICAgICB3aGlsZSAodGhpcy5fcm9vdEdyaWQuaWQgIT09IHBhcmVudEdyaWQuaWQpIHtcbiAgICAgICAgICAgIGNoaWxkR3JpZCA9IHBhcmVudEdyaWQ7XG4gICAgICAgICAgICBwYXJlbnRHcmlkID0gcGFyZW50R3JpZC5wYXJlbnQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhcmVudFJvd0lEID0gcGFyZW50R3JpZC5oZ3JpZEFQSS5nZXRQYXJlbnRSb3dJZChjaGlsZEdyaWQpO1xuICAgICAgICAgICAgcGFyZW50R3JpZC5oaWdobGlnaHRlZFJvd0lEID0gcGFyZW50Um93SUQ7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIub25Gb2N1cyhldmVudCk7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogUmVmYWN0b3JcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gICAgZGlzcGF0Y2hFdmVudChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBjb25zdCBrZXkgPSBldmVudC5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGV2ZW50LmFsdEtleSAmJiAhdGhpcy5yb3cuYWRkZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWRBUEkuZ3JpZDtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5ncmlkQVBJLmdyaWQuaGllcmFyY2hpY2FsU3RhdGU7XG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzZSA9IHRoaXMucm93LmV4cGFuZGVkICYmIChrZXkgPT09ICdsZWZ0JyB8fCBrZXkgPT09ICdhcnJvd2xlZnQnIHx8IGtleSA9PT0gJ3VwJyB8fCBrZXkgPT09ICdhcnJvd3VwJyk7XG4gICAgICAgICAgICBjb25zdCBleHBhbmQgPSAhdGhpcy5yb3cuZXhwYW5kZWQgJiYgKGtleSA9PT0gJ3JpZ2h0JyB8fCBrZXkgPT09ICdhcnJvd3JpZ2h0JyB8fCBrZXkgPT09ICdkb3duJyB8fCBrZXkgPT09ICdhcnJvd2Rvd24nKTtcbiAgICAgICAgICAgIGlmIChjb2xsYXBzZSkge1xuICAgICAgICAgICAgICAgIGdyaWQuaGllcmFyY2hpY2FsU3RhdGUgPSBzdGF0ZS5maWx0ZXIodiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2LnJvd0lEICE9PSB0aGlzLnJvdy5yb3dJRDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhwYW5kKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUucHVzaCh7IHJvd0lEOiB0aGlzLnJvdy5yb3dJRCB9KTtcbiAgICAgICAgICAgICAgICBncmlkLmhpZXJhcmNoaWNhbFN0YXRlID0gWy4uLnN0YXRlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChleHBhbmQgfHwgY29sbGFwc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dJRCA9IHRoaXMuY2VsbElELnJvd0lEO1xuICAgICAgICAgICAgICAgIGdyaWQuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBlcnNpc3RGb2N1c2VkQ2VsbChyb3dJRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHBlcnNpc3RGb2N1c2VkQ2VsbChyb3dJRCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgLy8gVE9ETzogVGVzdCBpdCBvdXRcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdyaWRBUEkuZ2V0X2NlbGxfYnlfa2V5KHJvd0lELCB0aGlzLmNvbHVtbi5maWVsZCk7XG4gICAgICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgICAgICAgIGNlbGwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=