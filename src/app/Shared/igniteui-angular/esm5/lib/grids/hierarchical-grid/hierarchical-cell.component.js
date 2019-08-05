/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { IgxGridCellComponent } from '../cell.component';
import { GridBaseAPIService } from '../api.service';
import { ChangeDetectorRef, ElementRef, ChangeDetectionStrategy, Component, HostListener, NgZone } from '@angular/core';
import { IgxHierarchicalSelectionAPIService } from './selection';
import { IgxGridSelectionService, IgxGridCRUDService } from '../../core/grid-selection';
var IgxHierarchicalGridCellComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxHierarchicalGridCellComponent, _super);
    function IgxHierarchicalGridCellComponent(selectionService, crudService, gridAPI, selection, cdr, helement, zone) {
        var _this = _super.call(this, selectionService, crudService, gridAPI, selection, cdr, helement, zone) || this;
        _this.selectionService = selectionService;
        _this.crudService = crudService;
        _this.gridAPI = gridAPI;
        _this.selection = selection;
        _this.cdr = cdr;
        _this.helement = helement;
        _this.zone = zone;
        _this.hSelection = (/** @type {?} */ (selection));
        return _this;
    }
    /**
     * @return {?}
     */
    IgxHierarchicalGridCellComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this._rootGrid = this._getRootGrid();
    };
    /**
     * @private
     * @return {?}
     */
    IgxHierarchicalGridCellComponent.prototype._getRootGrid = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currGrid = this.grid;
        while (currGrid.parent) {
            currGrid = currGrid.parent;
        }
        return currGrid;
    };
    // TODO: Extend the new selection service to avoid complete traversal
    // TODO: Extend the new selection service to avoid complete traversal
    /**
     * @return {?}
     */
    IgxHierarchicalGridCellComponent.prototype._clearAllHighlights = 
    // TODO: Extend the new selection service to avoid complete traversal
    /**
     * @return {?}
     */
    function () {
        tslib_1.__spread([this._rootGrid], this._rootGrid.getChildGrids(true)).forEach(function (grid) {
            grid.selectionService.clear();
            grid.selectionService.activeElement = null;
            grid.nativeElement.classList.remove('igx-grid__tr--highlighted');
            grid.highlightedRowID = null;
            grid.cdr.markForCheck();
        });
    };
    /**
     * @hidden
     * @internal
     */
    /**
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    IgxHierarchicalGridCellComponent.prototype.onFocus = /**
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._clearAllHighlights();
        /** @type {?} */
        var currentElement = this.grid.nativeElement;
        /** @type {?} */
        var parentGrid = this.grid;
        /** @type {?} */
        var childGrid;
        // add highligh to the current grid
        if (this._rootGrid.id !== currentElement.id) {
            currentElement.classList.add('igx-grid__tr--highlighted');
        }
        // add highligh to the current grid
        while (this._rootGrid.id !== parentGrid.id) {
            childGrid = parentGrid;
            parentGrid = parentGrid.parent;
            /** @type {?} */
            var parentRowID = parentGrid.hgridAPI.getParentRowId(childGrid);
            parentGrid.highlightedRowID = parentRowID;
        }
        _super.prototype.onFocus.call(this, event);
    };
    // TODO: Refactor
    /**
     * @hidden
     * @internal
     */
    // TODO: Refactor
    /**
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    IgxHierarchicalGridCellComponent.prototype.dispatchEvent = 
    // TODO: Refactor
    /**
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var key = event.key.toLowerCase();
        if (event.altKey && !this.row.added) {
            /** @type {?} */
            var grid = this.gridAPI.grid;
            /** @type {?} */
            var state = this.gridAPI.grid.hierarchicalState;
            /** @type {?} */
            var collapse = this.row.expanded && (key === 'left' || key === 'arrowleft' || key === 'up' || key === 'arrowup');
            /** @type {?} */
            var expand = !this.row.expanded && (key === 'right' || key === 'arrowright' || key === 'down' || key === 'arrowdown');
            if (collapse) {
                grid.hierarchicalState = state.filter(function (v) {
                    return v.rowID !== _this.row.rowID;
                });
            }
            else if (expand) {
                state.push({ rowID: this.row.rowID });
                grid.hierarchicalState = tslib_1.__spread(state);
            }
            if (expand || collapse) {
                /** @type {?} */
                var rowID = this.cellID.rowID;
                grid.cdr.detectChanges();
                this.persistFocusedCell(rowID);
            }
            return;
        }
        _super.prototype.dispatchEvent.call(this, event);
    };
    /**
     * @protected
     * @param {?} rowID
     * @return {?}
     */
    IgxHierarchicalGridCellComponent.prototype.persistFocusedCell = /**
     * @protected
     * @param {?} rowID
     * @return {?}
     */
    function (rowID) {
        var _this = this;
        requestAnimationFrame(function () {
            // TODO: Test it out
            /** @type {?} */
            var cell = _this.gridAPI.get_cell_by_key(rowID, _this.column.field);
            if (cell) {
                cell.nativeElement.focus();
            }
        });
    };
    IgxHierarchicalGridCellComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    selector: 'igx-hierarchical-grid-cell',
                    template: "<ng-template #defaultCell>\n    <div igxTextHighlight style=\"pointer-events: none\" [cssClass]=\"highlightClass\" [activeCssClass]=\"activeHighlightClass\" [groupName]=\"gridID\"\n        [value]=\"formatter ? formatter(value) : column.dataType === 'number' ? (value | igxdecimal: grid.locale) : column.dataType === 'date' ? (value | igxdate: grid.locale) : value\"\n        [row]=\"rowData\" [column]=\"this.column.field\" [containerClass]=\"'igx-grid__td-text'\"\n        class=\"igx-grid__td-text\">{{ formatter ? formatter(value) : column.dataType === 'number' ? (value | igxdecimal:\n        grid.locale) : column.dataType === 'date' ? (value | igxdate: grid.locale) : value }}</div>\n</ng-template>\n<ng-template #inlineEditor let-cell=\"cell\">\n    <ng-container *ngIf=\"column.dataType === 'string'\">\n        <igx-input-group displayDensity=\"compact\">\n            <input igxInput [value]=\"editValue\" (input)=\"editValue = $event.target.value\" [igxFocus]=\"focused\" />\n        </igx-input-group>\n    </ng-container>\n    <ng-container *ngIf=\"column.dataType === 'number'\">\n        <igx-input-group displayDensity=\"compact\">\n            <input igxInput [value]=\"editValue\" (input)=\"editValue = $event.target.value\" [igxFocus]=\"focused\" type=\"number\">\n        </igx-input-group>\n    </ng-container>\n    <ng-container *ngIf=\"column.dataType === 'boolean'\">\n        <igx-checkbox (change)=\"editValue = $event.checked\" [value]=\"editValue\" [checked]=\"editValue\"\n            [igxFocus]=\"focused\" [disableRipple]=\"true\"></igx-checkbox>\n    </ng-container>\n    <ng-container *ngIf=\"column.dataType === 'date'\">\n        <igx-date-picker [style.width.%]=\"100\" [outlet]=\"grid.outletDirective\" mode=\"dropdown\" (onSelection)=\"editValue = $event\"\n            [locale]=\"grid.locale\" [value]=\"editValue\" [igxFocus]=\"focused\" [labelVisibility]=\"false\">\n        </igx-date-picker>\n    </ng-container>\n</ng-template>\n<ng-container *ngTemplateOutlet=\"template; context: context\">\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    IgxHierarchicalGridCellComponent.ctorParameters = function () { return [
        { type: IgxGridSelectionService },
        { type: IgxGridCRUDService },
        { type: GridBaseAPIService },
        { type: IgxHierarchicalSelectionAPIService },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IgxHierarchicalGridCellComponent.propDecorators = {
        onFocus: [{ type: HostListener, args: ['focus', ['$event'],] }],
        dispatchEvent: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
    return IgxHierarchicalGridCellComponent;
}(IgxGridCellComponent));
export { IgxHierarchicalGridCellComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGllcmFyY2hpY2FsLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9oaWVyYXJjaGljYWwtZ3JpZC9oaWVyYXJjaGljYWwtY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFDN0QsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEY7SUFNc0QsNERBQW9CO0lBS3RFLDBDQUNjLGdCQUF5QyxFQUN6QyxXQUErQixFQUNsQyxPQUF5RCxFQUN6RCxTQUE2QyxFQUM3QyxHQUFzQixFQUNyQixRQUFvQixFQUNsQixJQUFZO1FBUDFCLFlBU1Esa0JBQU0sZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FFL0U7UUFWUSxzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBQ3pDLGlCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUNsQyxhQUFPLEdBQVAsT0FBTyxDQUFrRDtRQUN6RCxlQUFTLEdBQVQsU0FBUyxDQUFvQztRQUM3QyxTQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNyQixjQUFRLEdBQVIsUUFBUSxDQUFZO1FBQ2xCLFVBQUksR0FBSixJQUFJLENBQVE7UUFHbEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxt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QyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxvaEVBQXVDO2lCQUMxQzs7OztnQkFQUSx1QkFBdUI7Z0JBQUUsa0JBQWtCO2dCQUwzQyxrQkFBa0I7Z0JBSWxCLGtDQUFrQztnQkFIbEMsaUJBQWlCO2dCQUFFLFVBQVU7Z0JBQ1gsTUFBTTs7OzBCQXlENUIsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztnQ0EyQmhDLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBbUN2Qyx1Q0FBQztDQUFBLEFBbEhELENBTXNELG9CQUFvQixHQTRHekU7U0E1R1ksZ0NBQWdDOzs7Ozs7SUFFekMsc0RBQXFCOzs7OztJQUNyQixxREFBb0I7Ozs7O0lBR2hCLDREQUFtRDs7Ozs7SUFDbkQsdURBQXlDOztJQUN6QyxtREFBZ0U7O0lBQ2hFLHFEQUFvRDs7SUFDcEQsK0NBQTZCOzs7OztJQUM3QixvREFBNEI7Ozs7O0lBQzVCLGdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElneEdyaWRDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi4vY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JpZEJhc2VBUElTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsXG4gICAgIE9uSW5pdCwgSG9zdExpc3RlbmVyLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnQgfSBmcm9tICcuL2hpZXJhcmNoaWNhbC1ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hIaWVyYXJjaGljYWxTZWxlY3Rpb25BUElTZXJ2aWNlIH0gZnJvbSAnLi9zZWxlY3Rpb24nO1xuaW1wb3J0IHsgSWd4R3JpZFNlbGVjdGlvblNlcnZpY2UsIElneEdyaWRDUlVEU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvZ3JpZC1zZWxlY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgICBzZWxlY3RvcjogJ2lneC1oaWVyYXJjaGljYWwtZ3JpZC1jZWxsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vLi4vY2VsbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4SGllcmFyY2hpY2FsR3JpZENlbGxDb21wb25lbnQgZXh0ZW5kcyBJZ3hHcmlkQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcm90ZWN0ZWQgaFNlbGVjdGlvbjtcbiAgICBwcm90ZWN0ZWQgX3Jvb3RHcmlkO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBzZWxlY3Rpb25TZXJ2aWNlOiBJZ3hHcmlkU2VsZWN0aW9uU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGNydWRTZXJ2aWNlOiBJZ3hHcmlkQ1JVRFNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudD4sXG4gICAgICAgIHB1YmxpYyBzZWxlY3Rpb246IElneEhpZXJhcmNoaWNhbFNlbGVjdGlvbkFQSVNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwcml2YXRlIGhlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHN1cGVyKHNlbGVjdGlvblNlcnZpY2UsIGNydWRTZXJ2aWNlLCBncmlkQVBJLCBzZWxlY3Rpb24sIGNkciwgaGVsZW1lbnQsIHpvbmUpO1xuICAgICAgICAgICAgdGhpcy5oU2VsZWN0aW9uID0gPElneEhpZXJhcmNoaWNhbFNlbGVjdGlvbkFQSVNlcnZpY2U+c2VsZWN0aW9uO1xuICAgICAgICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgICAgIHRoaXMuX3Jvb3RHcmlkID0gdGhpcy5fZ2V0Um9vdEdyaWQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRSb290R3JpZCgpIHtcbiAgICAgICAgbGV0IGN1cnJHcmlkID0gdGhpcy5ncmlkO1xuICAgICAgICB3aGlsZSAoY3VyckdyaWQucGFyZW50KSB7XG4gICAgICAgICAgICBjdXJyR3JpZCA9IGN1cnJHcmlkLnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VyckdyaWQ7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogRXh0ZW5kIHRoZSBuZXcgc2VsZWN0aW9uIHNlcnZpY2UgdG8gYXZvaWQgY29tcGxldGUgdHJhdmVyc2FsXG4gICAgX2NsZWFyQWxsSGlnaGxpZ2h0cygpIHtcbiAgICAgICAgW3RoaXMuX3Jvb3RHcmlkLCAuLi50aGlzLl9yb290R3JpZC5nZXRDaGlsZEdyaWRzKHRydWUpXS5mb3JFYWNoKGdyaWQgPT4ge1xuICAgICAgICAgICAgZ3JpZC5zZWxlY3Rpb25TZXJ2aWNlLmNsZWFyKCk7XG4gICAgICAgICAgICBncmlkLnNlbGVjdGlvblNlcnZpY2UuYWN0aXZlRWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICBncmlkLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaWd4LWdyaWRfX3RyLS1oaWdobGlnaHRlZCcpO1xuICAgICAgICAgICAgZ3JpZC5oaWdobGlnaHRlZFJvd0lEID0gbnVsbDtcbiAgICAgICAgICAgIGdyaWQuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignZm9jdXMnLCBbJyRldmVudCddKVxuICAgIG9uRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5fY2xlYXJBbGxIaWdobGlnaHRzKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGxldCBwYXJlbnRHcmlkID0gdGhpcy5ncmlkO1xuICAgICAgICBsZXQgY2hpbGRHcmlkO1xuICAgICAgICAvLyBhZGQgaGlnaGxpZ2ggdG8gdGhlIGN1cnJlbnQgZ3JpZFxuICAgICAgICBpZiAodGhpcy5fcm9vdEdyaWQuaWQgIT09IGN1cnJlbnRFbGVtZW50LmlkKSB7XG4gICAgICAgICAgICBjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpZ3gtZ3JpZF9fdHItLWhpZ2hsaWdodGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgaGlnaGxpZ2ggdG8gdGhlIGN1cnJlbnQgZ3JpZFxuICAgICAgICB3aGlsZSAodGhpcy5fcm9vdEdyaWQuaWQgIT09IHBhcmVudEdyaWQuaWQpIHtcbiAgICAgICAgICAgIGNoaWxkR3JpZCA9IHBhcmVudEdyaWQ7XG4gICAgICAgICAgICBwYXJlbnRHcmlkID0gcGFyZW50R3JpZC5wYXJlbnQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhcmVudFJvd0lEID0gcGFyZW50R3JpZC5oZ3JpZEFQSS5nZXRQYXJlbnRSb3dJZChjaGlsZEdyaWQpO1xuICAgICAgICAgICAgcGFyZW50R3JpZC5oaWdobGlnaHRlZFJvd0lEID0gcGFyZW50Um93SUQ7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIub25Gb2N1cyhldmVudCk7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogUmVmYWN0b3JcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gICAgZGlzcGF0Y2hFdmVudChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBjb25zdCBrZXkgPSBldmVudC5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGV2ZW50LmFsdEtleSAmJiAhdGhpcy5yb3cuYWRkZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWRBUEkuZ3JpZDtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5ncmlkQVBJLmdyaWQuaGllcmFyY2hpY2FsU3RhdGU7XG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzZSA9IHRoaXMucm93LmV4cGFuZGVkICYmIChrZXkgPT09ICdsZWZ0JyB8fCBrZXkgPT09ICdhcnJvd2xlZnQnIHx8IGtleSA9PT0gJ3VwJyB8fCBrZXkgPT09ICdhcnJvd3VwJyk7XG4gICAgICAgICAgICBjb25zdCBleHBhbmQgPSAhdGhpcy5yb3cuZXhwYW5kZWQgJiYgKGtleSA9PT0gJ3JpZ2h0JyB8fCBrZXkgPT09ICdhcnJvd3JpZ2h0JyB8fCBrZXkgPT09ICdkb3duJyB8fCBrZXkgPT09ICdhcnJvd2Rvd24nKTtcbiAgICAgICAgICAgIGlmIChjb2xsYXBzZSkge1xuICAgICAgICAgICAgICAgIGdyaWQuaGllcmFyY2hpY2FsU3RhdGUgPSBzdGF0ZS5maWx0ZXIodiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2LnJvd0lEICE9PSB0aGlzLnJvdy5yb3dJRDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhwYW5kKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUucHVzaCh7IHJvd0lEOiB0aGlzLnJvdy5yb3dJRCB9KTtcbiAgICAgICAgICAgICAgICBncmlkLmhpZXJhcmNoaWNhbFN0YXRlID0gWy4uLnN0YXRlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChleHBhbmQgfHwgY29sbGFwc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dJRCA9IHRoaXMuY2VsbElELnJvd0lEO1xuICAgICAgICAgICAgICAgIGdyaWQuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBlcnNpc3RGb2N1c2VkQ2VsbChyb3dJRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHBlcnNpc3RGb2N1c2VkQ2VsbChyb3dJRCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgLy8gVE9ETzogVGVzdCBpdCBvdXRcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdyaWRBUEkuZ2V0X2NlbGxfYnlfa2V5KHJvd0lELCB0aGlzLmNvbHVtbi5maWVsZCk7XG4gICAgICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgICAgICAgIGNlbGwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=