/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, HostListener, Input, ViewChild, } from '@angular/core';
import { GridBaseAPIService } from '../api.service';
import { IgxGridSelectionService } from '../../core/grid-selection';
import { ROW_COLLAPSE_KEYS, ROW_EXPAND_KEYS, SUPPORTED_KEYS } from '../../core/utils';
var IgxGridGroupByRowComponent = /** @class */ (function () {
    function IgxGridGroupByRowComponent(gridAPI, gridSelection, element, cdr) {
        this.gridAPI = gridAPI;
        this.gridSelection = gridSelection;
        this.element = element;
        this.cdr = cdr;
        /**
         * @hidden
         */
        this.defaultCssClass = 'igx-grid__group-row';
        /**
         * @hidden
         */
        this.paddingIndentationCssClass = 'igx-grid__group-row--padding-level';
        /**
         * @hidden
         */
        this.isFocused = false;
        /**
         * @hidden
         */
        this.tabindex = 0;
    }
    Object.defineProperty(IgxGridGroupByRowComponent.prototype, "focused", {
        /**
         * Returns whether the row is focused.
         * ```
         * let gridRowFocused = this.grid1.rowList.first.focused;
         * ```
         */
        get: /**
         * Returns whether the row is focused.
         * ```
         * let gridRowFocused = this.grid1.rowList.first.focused;
         * ```
         * @return {?}
         */
        function () {
            return this.isFocused;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridGroupByRowComponent.prototype, "expanded", {
        /**
         * Returns whether the group row is expanded.
         * ```typescript
         * const groupRowExpanded = this.grid1.rowList.first.expanded;
         * ```
         */
        get: /**
         * Returns whether the group row is expanded.
         * ```typescript
         * const groupRowExpanded = this.grid1.rowList.first.expanded;
         * ```
         * @return {?}
         */
        function () {
            return this.grid.isExpandedGroup(this.groupRow);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridGroupByRowComponent.prototype, "describedBy", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            /** @type {?} */
            var grRowExpr = this.groupRow.expression !== undefined ? this.groupRow.expression.fieldName : '';
            return this.gridID + '_' + grRowExpr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridGroupByRowComponent.prototype, "dataRowIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridGroupByRowComponent.prototype, "nativeElement", {
        /**
         * Returns a reference to the underlying HTML element.
         * ```typescript
         * const groupRowElement = this.nativeElement;
         * ```
         */
        get: /**
         * Returns a reference to the underlying HTML element.
         * ```typescript
         * const groupRowElement = this.nativeElement;
         * ```
         * @return {?}
         */
        function () {
            return this.element.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridGroupByRowComponent.prototype, "styleClasses", {
        /**
         * Returns the style classes applied to the group rows.
         * ```typescript
         * const groupCssStyles = this.grid1.rowList.first.styleClasses;
         * ```
         */
        get: /**
         * Returns the style classes applied to the group rows.
         * ```typescript
         * const groupCssStyles = this.grid1.rowList.first.styleClasses;
         * ```
         * @return {?}
         */
        function () {
            return this.defaultCssClass + " " + (this.paddingIndentationCssClass + "-") + this.groupRow.level +
                (this.focused ? " " + this.defaultCssClass + "--active" : '');
        },
        enumerable: true,
        configurable: true
    });
    /**
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxGridGroupByRowComponent.prototype.onFocus = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.isFocused = true;
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxGridGroupByRowComponent.prototype.onBlur = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.isFocused = false;
    };
    /**
     * Toggles the group row.
     * ```typescript
     * this.grid1.rowList.first.toggle()
     * ```
     */
    /**
     * Toggles the group row.
     * ```typescript
     * this.grid1.rowList.first.toggle()
     * ```
     * @return {?}
     */
    IgxGridGroupByRowComponent.prototype.toggle = /**
     * Toggles the group row.
     * ```typescript
     * this.grid1.rowList.first.toggle()
     * ```
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isVirtualized = !this.grid.verticalScrollContainer.dc.instance.notVirtual;
        /** @type {?} */
        var groupRowIndex = this.index;
        this.grid.toggleGroup(this.groupRow);
        if (isVirtualized) {
            /** @type {?} */
            var groupRow = this.grid.nativeElement.querySelector("[data-rowIndex=\"" + groupRowIndex + "\"]");
            if (groupRow) {
                groupRow.focus();
            }
        }
    };
    Object.defineProperty(IgxGridGroupByRowComponent.prototype, "selectionNode", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return {
                row: this.index,
                column: this.gridSelection.activeElement ? this.gridSelection.activeElement.column : 0
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxGridGroupByRowComponent.prototype.onKeydown = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // TODO: Refactor
        /** @type {?} */
        var key = event.key.toLowerCase();
        if (!SUPPORTED_KEYS.has(key)) {
            return;
        }
        event.stopPropagation();
        /** @type {?} */
        var keydownArgs = { targetType: 'groupRow', target: this, event: event, cancel: false };
        this.grid.onGridKeydown.emit(keydownArgs);
        if (keydownArgs.cancel) {
            return;
        }
        event.preventDefault();
        if (!this.isKeySupportedInGroupRow(key, event.shiftKey, event.altKey) || event.ctrlKey) {
            return;
        }
        if (this.isToggleKey(key, event.altKey)) {
            if ((this.expanded && ROW_COLLAPSE_KEYS.has(key)) || (!this.expanded && ROW_EXPAND_KEYS.has(key))) {
                this.toggle();
            }
            return;
        }
        // TODO: to be deleted when onFocusChange event is removed #4054
        /** @type {?} */
        var args = { cell: this, groupRow: null, event: event, cancel: false };
        this.grid._onFocusChange.emit(args);
        if (args.cancel) {
            return;
        }
        /** @type {?} */
        var selection = this.gridSelection;
        selection.keyboardState.shift = event.shiftKey && !(key === 'tab');
        /** @type {?} */
        var visibleColumnIndex = selection.activeElement && this.grid.columnList.filter(function (col) { return !col.hidden; }).map(function (c) { return c.visibleIndex; })
            .indexOf(selection.activeElement.column) !== -1 ? selection.activeElement.column : 0;
        /** @type {?} */
        var activeNode = selection.activeElement ? Object.assign({}, selection.activeElement) : this.selectionNode;
        activeNode.row = this.index;
        switch (key) {
            case 'arrowdown':
            case 'down':
                this.grid.navigation.navigateDown(this.nativeElement, activeNode);
                break;
            case 'arrowup':
            case 'up':
                this.grid.navigation.navigateUp(this.nativeElement, activeNode);
                break;
            case 'tab':
                this.handleTabKey(event.shiftKey, activeNode);
                break;
        }
    };
    Object.defineProperty(IgxGridGroupByRowComponent.prototype, "grid", {
        /**
         * Returns a reference to the `IgxGridComponent` the `IgxGridGroupByRowComponent` belongs to.
         * ```typescript
         * this.grid1.rowList.first.grid;
         * ```
         */
        get: /**
         * Returns a reference to the `IgxGridComponent` the `IgxGridGroupByRowComponent` belongs to.
         * ```typescript
         * this.grid1.rowList.first.grid;
         * ```
         * @return {?}
         */
        function () {
            return this.gridAPI.grid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridGroupByRowComponent.prototype, "dataType", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.grid.getColumnByName(this.groupRow.expression.fieldName).dataType;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} shift
     * @param {?} activeNode
     * @return {?}
     */
    IgxGridGroupByRowComponent.prototype.handleTabKey = /**
     * @private
     * @param {?} shift
     * @param {?} activeNode
     * @return {?}
     */
    function (shift, activeNode) {
        if (shift) {
            this.grid.navigation.performShiftTabKey(this.nativeElement, activeNode);
        }
        else {
            if (this.index === this.grid.verticalScrollContainer.igxForOf.length - 1 && this.grid.rootSummariesEnabled) {
                this.grid.navigation.onKeydownHome(0, true);
            }
            else {
                /** @type {?} */
                var orderedColumns = this.grid.navigation.gridOrderedColumns;
                /** @type {?} */
                var lastCol = orderedColumns[orderedColumns.length - 1];
                activeNode.column = lastCol.columnLayoutChild ? lastCol.parent.visibleIndex : lastCol.visibleIndex;
                this.grid.navigation.performTab(this.nativeElement, activeNode);
            }
        }
    };
    /**
     * @private
     * @param {?} key
     * @param {?=} shift
     * @param {?=} alt
     * @return {?}
     */
    IgxGridGroupByRowComponent.prototype.isKeySupportedInGroupRow = /**
     * @private
     * @param {?} key
     * @param {?=} shift
     * @param {?=} alt
     * @return {?}
     */
    function (key, shift, alt) {
        if (shift === void 0) { shift = false; }
        if (alt === void 0) { alt = false; }
        if (shift) {
            return ['down', 'up', 'arrowdown', 'arrowup', 'tab'].indexOf(key) !== -1;
        }
        return this.isToggleKey(key, alt) ? true : ['down', 'up', 'arrowdown', 'arrowup', 'tab'].indexOf(key) !== -1;
    };
    /**
     * @private
     * @param {?} key
     * @param {?} altKey
     * @return {?}
     */
    IgxGridGroupByRowComponent.prototype.isToggleKey = /**
     * @private
     * @param {?} key
     * @param {?} altKey
     * @return {?}
     */
    function (key, altKey) {
        return altKey && ['left', 'right', 'up', 'down', 'arrowleft', 'arrowright', 'arrowup', 'arrowdown'].indexOf(key) !== -1;
    };
    IgxGridGroupByRowComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    selector: 'igx-grid-groupby-row',
                    template: "<ng-container #defaultGroupRow>\n    <div (click)=\"toggle()\" class=\"igx-grid__grouping-indicator\">\n        <igx-icon *ngIf=\"!expanded\" fontSet=\"material\">expand_more</igx-icon>\n        <igx-icon *ngIf=\"expanded\" fontSet=\"material\">expand_less</igx-icon>\n    </div>\n\n    <div class=\"igx-grid__group-content\" #groupContent>\n        <ng-container *ngTemplateOutlet=\"grid.groupRowTemplate ? grid.groupRowTemplate : defaultGroupByTemplate; context: { $implicit: groupRow }\">\n        </ng-container>\n    </div>\n\n    <ng-template #defaultGroupByTemplate>\n        <div class=\"igx-group-label\">\n            <igx-icon fontSet=\"material\" class=\"igx-group-label__icon\">group_work</igx-icon>\n            <span class=\"igx-group-label__column-name\">\n            {{ groupRow.expression ? groupRow.expression.fieldName : '' }}:\n            </span>\n\n            <ng-container *ngIf=\"dataType === 'boolean' || dataType === 'string'; else default\" >\n                <span class=\"igx-group-label__text\">{{ groupRow.value }}</span>\n            </ng-container>\n            <ng-template #default>\n                <ng-container *ngIf=\"dataType === 'number'\">\n                    <span class=\"igx-group-label__text\">{{ groupRow.value | number }}</span>\n                </ng-container>\n                <ng-container *ngIf=\"dataType === 'date'\">\n                    <span class=\"igx-group-label__text\">{{ groupRow.value | date }}</span>\n                </ng-container>\n            </ng-template>\n\n            <igx-badge [value]=\"groupRow.records ? groupRow.records.length : 0\" class='igx-group-label__count-badge'></igx-badge>\n        </div>\n    </ng-template>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    IgxGridGroupByRowComponent.ctorParameters = function () { return [
        { type: GridBaseAPIService },
        { type: IgxGridSelectionService },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    IgxGridGroupByRowComponent.propDecorators = {
        isFocused: [{ type: Input }],
        index: [{ type: Input }],
        gridID: [{ type: Input }],
        groupRow: [{ type: Input }],
        groupContent: [{ type: ViewChild, args: ['groupContent', { static: true },] }],
        expanded: [{ type: HostBinding, args: ['attr.aria-expanded',] }],
        tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
        describedBy: [{ type: HostBinding, args: ['attr.aria-describedby',] }],
        dataRowIndex: [{ type: HostBinding, args: ['attr.data-rowIndex',] }],
        styleClasses: [{ type: HostBinding, args: ['class',] }],
        onFocus: [{ type: HostListener, args: ['focus',] }],
        onBlur: [{ type: HostListener, args: ['blur',] }],
        onKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
    return IgxGridGroupByRowComponent;
}());
export { IgxGridGroupByRowComponent };
if (false) {
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridGroupByRowComponent.prototype.defaultCssClass;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridGroupByRowComponent.prototype.paddingIndentationCssClass;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxGridGroupByRowComponent.prototype.isFocused;
    /**
     * An \@Input property that sets the index of the row.
     * ```html
     * <igx-grid-groupby-row [gridID]="id" [index]="rowIndex" [groupRow]="rowData" #row></igx-grid-groupby-row>
     * ```
     * @type {?}
     */
    IgxGridGroupByRowComponent.prototype.index;
    /**
     * An \@Input property that sets the id of the grid the row belongs to.
     * ```html
     * <igx-grid-groupby-row [gridID]="id" [index]="rowIndex" [groupRow]="rowData" #row></igx-grid-groupby-row>
     * ```
     * @type {?}
     */
    IgxGridGroupByRowComponent.prototype.gridID;
    /**
     * An \@Input property that specifies the group record the component renders for.
     * ```typescript
     * <igx-grid-groupby-row [gridID]="id" [index]="rowIndex" [groupRow]="rowData" #row></igx-grid-groupby-row>
     * ```
     * @type {?}
     */
    IgxGridGroupByRowComponent.prototype.groupRow;
    /**
     * Returns a reference of the content of the group.
     * ```typescript
     * const groupRowContent = this.grid1.rowList.first.groupContent;
     * ```
     * @type {?}
     */
    IgxGridGroupByRowComponent.prototype.groupContent;
    /**
     * @hidden
     * @type {?}
     */
    IgxGridGroupByRowComponent.prototype.tabindex;
    /** @type {?} */
    IgxGridGroupByRowComponent.prototype.gridAPI;
    /**
     * @type {?}
     * @private
     */
    IgxGridGroupByRowComponent.prototype.gridSelection;
    /** @type {?} */
    IgxGridGroupByRowComponent.prototype.element;
    /** @type {?} */
    IgxGridGroupByRowComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBieS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9ncmlkL2dyb3VwYnktcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxTQUFTLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEQsT0FBTyxFQUFFLHVCQUF1QixFQUFrQixNQUFNLDJCQUEyQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFdEY7SUFRSSxvQ0FBbUIsT0FBcUUsRUFDNUUsYUFBc0MsRUFDdkMsT0FBbUIsRUFDbkIsR0FBc0I7UUFIZCxZQUFPLEdBQVAsT0FBTyxDQUE4RDtRQUM1RSxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFDdkMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixRQUFHLEdBQUgsR0FBRyxDQUFtQjs7OztRQUt2QixvQkFBZSxHQUFHLHFCQUFxQixDQUFDOzs7O1FBS3hDLCtCQUEwQixHQUFHLG9DQUFvQyxDQUFDOzs7O1FBTWxFLGNBQVMsR0FBRyxLQUFLLENBQUM7Ozs7UUErRHJCLGFBQVEsR0FBRyxDQUFDLENBQUM7SUEvRWlCLENBQUM7SUF3QnRDLHNCQUFJLCtDQUFPO1FBTlg7Ozs7O1dBS0c7Ozs7Ozs7O1FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUE0Q0Qsc0JBQ0ksZ0RBQVE7UUFQWjs7Ozs7V0FLRzs7Ozs7Ozs7UUFDSDtZQUVJLE9BQU8sSUFBSSxDQUFDLElB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QyxvQkFBb0I7MkJBUWhDLFdBQVcsU0FBQyxlQUFlOzhCQU0zQixXQUFXLFNBQUMsdUJBQXVCOytCQU1uQyxXQUFXLFNBQUMsb0JBQW9COytCQXFCaEMsV0FBVyxTQUFDLE9BQU87MEJBU25CLFlBQVksU0FBQyxPQUFPO3lCQVFwQixZQUFZLFNBQUMsTUFBTTs0QkFpQ25CLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBNkZ2QyxpQ0FBQztDQUFBLEFBelFELElBeVFDO1NBblFZLDBCQUEwQjs7Ozs7OztJQVVuQyxxREFBa0Q7Ozs7OztJQUtsRCxnRUFBNEU7Ozs7OztJQUs1RSwrQ0FDNEI7Ozs7Ozs7O0lBa0I1QiwyQ0FDcUI7Ozs7Ozs7O0lBUXJCLDRDQUNzQjs7Ozs7Ozs7SUFRdEIsOENBQ2dDOzs7Ozs7OztJQVFoQyxrREFDZ0M7Ozs7O0lBZ0JoQyw4Q0FDb0I7O0lBbEZSLDZDQUE0RTs7Ozs7SUFDcEYsbURBQThDOztJQUM5Qyw2Q0FBMEI7O0lBQzFCLHlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIElucHV0LFxuICAgIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJR3JvdXBCeVJlY29yZCB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9ncm91cGJ5LXJlY29yZC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgR3JpZEJhc2VBUElTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4R3JpZEJhc2VDb21wb25lbnQsIElHcmlkRGF0YUJpbmRhYmxlIH0gZnJvbSAnLi4vZ3JpZC1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hHcmlkU2VsZWN0aW9uU2VydmljZSwgSVNlbGVjdGlvbk5vZGUgfSBmcm9tICcuLi8uLi9jb3JlL2dyaWQtc2VsZWN0aW9uJztcbmltcG9ydCB7IFJPV19DT0xMQVBTRV9LRVlTLCBST1dfRVhQQU5EX0tFWVMsIFNVUFBPUlRFRF9LRVlTIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICAgIHNlbGVjdG9yOiAnaWd4LWdyaWQtZ3JvdXBieS1yb3cnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ncm91cGJ5LXJvdy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZEdyb3VwQnlSb3dDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPixcbiAgICAgICAgcHJpdmF0ZSBncmlkU2VsZWN0aW9uOiBJZ3hHcmlkU2VsZWN0aW9uU2VydmljZSxcbiAgICAgICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZGVmYXVsdENzc0NsYXNzID0gJ2lneC1ncmlkX19ncm91cC1yb3cnO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBwYWRkaW5nSW5kZW50YXRpb25Dc3NDbGFzcyA9ICdpZ3gtZ3JpZF9fZ3JvdXAtcm93LS1wYWRkaW5nLWxldmVsJztcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHByb3RlY3RlZCBpc0ZvY3VzZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgcm93IGlzIGZvY3VzZWQuXG4gICAgICogYGBgXG4gICAgICogbGV0IGdyaWRSb3dGb2N1c2VkID0gdGhpcy5ncmlkMS5yb3dMaXN0LmZpcnN0LmZvY3VzZWQ7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgZ2V0IGZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRm9jdXNlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSBpbmRleCBvZiB0aGUgcm93LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWdyaWQtZ3JvdXBieS1yb3cgW2dyaWRJRF09XCJpZFwiIFtpbmRleF09XCJyb3dJbmRleFwiIFtncm91cFJvd109XCJyb3dEYXRhXCIgI3Jvdz48L2lneC1ncmlkLWdyb3VwYnktcm93PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGluZGV4OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSBpZCBvZiB0aGUgZ3JpZCB0aGUgcm93IGJlbG9uZ3MgdG8uXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtZ3JpZC1ncm91cGJ5LXJvdyBbZ3JpZElEXT1cImlkXCIgW2luZGV4XT1cInJvd0luZGV4XCIgW2dyb3VwUm93XT1cInJvd0RhdGFcIiAjcm93PjwvaWd4LWdyaWQtZ3JvdXBieS1yb3c+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ3JpZElEOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzcGVjaWZpZXMgdGhlIGdyb3VwIHJlY29yZCB0aGUgY29tcG9uZW50IHJlbmRlcnMgZm9yLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiA8aWd4LWdyaWQtZ3JvdXBieS1yb3cgW2dyaWRJRF09XCJpZFwiIFtpbmRleF09XCJyb3dJbmRleFwiIFtncm91cFJvd109XCJyb3dEYXRhXCIgI3Jvdz48L2lneC1ncmlkLWdyb3VwYnktcm93PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdyb3VwUm93OiBJR3JvdXBCeVJlY29yZDtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByZWZlcmVuY2Ugb2YgdGhlIGNvbnRlbnQgb2YgdGhlIGdyb3VwLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBncm91cFJvd0NvbnRlbnQgPSB0aGlzLmdyaWQxLnJvd0xpc3QuZmlyc3QuZ3JvdXBDb250ZW50O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2dyb3VwQ29udGVudCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGdyb3VwQ29udGVudDogRWxlbWVudFJlZjtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgZ3JvdXAgcm93IGlzIGV4cGFuZGVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBncm91cFJvd0V4cGFuZGVkID0gdGhpcy5ncmlkMS5yb3dMaXN0LmZpcnN0LmV4cGFuZGVkO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWV4cGFuZGVkJylcbiAgICBnZXQgZXhwYW5kZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuaXNFeHBhbmRlZEdyb3VwKHRoaXMuZ3JvdXBSb3cpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICAgIHB1YmxpYyB0YWJpbmRleCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGVzY3JpYmVkYnknKVxuICAgIGdldCBkZXNjcmliZWRCeSgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBnclJvd0V4cHIgPSB0aGlzLmdyb3VwUm93LmV4cHJlc3Npb24gIT09IHVuZGVmaW5lZCA/IHRoaXMuZ3JvdXBSb3cuZXhwcmVzc2lvbi5maWVsZE5hbWUgOiAnJztcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZElEICsgJ18nICsgZ3JSb3dFeHByO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnYXR0ci5kYXRhLXJvd0luZGV4JylcbiAgICBnZXQgZGF0YVJvd0luZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSB1bmRlcmx5aW5nIEhUTUwgZWxlbWVudC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgZ3JvdXBSb3dFbGVtZW50ID0gdGhpcy5uYXRpdmVFbGVtZW50O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGdldCBuYXRpdmVFbGVtZW50KCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzdHlsZSBjbGFzc2VzIGFwcGxpZWQgdG8gdGhlIGdyb3VwIHJvd3MuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGdyb3VwQ3NzU3R5bGVzID0gdGhpcy5ncmlkMS5yb3dMaXN0LmZpcnN0LnN0eWxlQ2xhc3NlcztcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgICBnZXQgc3R5bGVDbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmRlZmF1bHRDc3NDbGFzc30gYCArIGAke3RoaXMucGFkZGluZ0luZGVudGF0aW9uQ3NzQ2xhc3N9LWAgKyB0aGlzLmdyb3VwUm93LmxldmVsICtcbiAgICAgICAgICAgICh0aGlzLmZvY3VzZWQgPyBgICR7dGhpcy5kZWZhdWx0Q3NzQ2xhc3N9LS1hY3RpdmVgIDogJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJylcbiAgICBwdWJsaWMgb25Gb2N1cygpIHtcbiAgICAgICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICAgIHB1YmxpYyBvbkJsdXIoKSB7XG4gICAgICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgZ3JvdXAgcm93LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmdyaWQxLnJvd0xpc3QuZmlyc3QudG9nZ2xlKClcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9nZ2xlKCkge1xuICAgICAgICBjb25zdCBpc1ZpcnR1YWxpemVkID0gIXRoaXMuZ3JpZC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lci5kYy5pbnN0YW5jZS5ub3RWaXJ0dWFsO1xuICAgICAgICBjb25zdCBncm91cFJvd0luZGV4ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdGhpcy5ncmlkLnRvZ2dsZUdyb3VwKHRoaXMuZ3JvdXBSb3cpO1xuICAgICAgICBpZiAoaXNWaXJ0dWFsaXplZCkge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXBSb3cgPSB0aGlzLmdyaWQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3dJbmRleD1cIiR7Z3JvdXBSb3dJbmRleH1cIl1gKTtcbiAgICAgICAgICAgIGlmIChncm91cFJvdykge1xuICAgICAgICAgICAgICAgIGdyb3VwUm93LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHNlbGVjdGlvbk5vZGUoKTogSVNlbGVjdGlvbk5vZGUge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm93OiB0aGlzLmluZGV4LFxuICAgICAgICAgICAgY29sdW1uOiB0aGlzLmdyaWRTZWxlY3Rpb24uYWN0aXZlRWxlbWVudCA/IHRoaXMuZ3JpZFNlbGVjdGlvbi5hY3RpdmVFbGVtZW50LmNvbHVtbiA6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93bihldmVudCkge1xuICAgICAgICAvLyBUT0RPOiBSZWZhY3RvclxuICAgICAgICBjb25zdCBrZXkgPSBldmVudC5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKCFTVVBQT1JURURfS0VZUy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCBrZXlkb3duQXJncyA9IHsgdGFyZ2V0VHlwZTogJ2dyb3VwUm93JywgdGFyZ2V0OiB0aGlzLCBldmVudDogZXZlbnQsIGNhbmNlbDogZmFsc2UgfTtcbiAgICAgICAgdGhpcy5ncmlkLm9uR3JpZEtleWRvd24uZW1pdChrZXlkb3duQXJncyk7XG4gICAgICAgIGlmIChrZXlkb3duQXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghdGhpcy5pc0tleVN1cHBvcnRlZEluR3JvdXBSb3coa2V5LCBldmVudC5zaGlmdEtleSwgZXZlbnQuYWx0S2V5KSB8fCBldmVudC5jdHJsS2V5KSB7IHJldHVybjsgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzVG9nZ2xlS2V5KGtleSwgZXZlbnQuYWx0S2V5KSkge1xuICAgICAgICAgICAgaWYgKCh0aGlzLmV4cGFuZGVkICYmIFJPV19DT0xMQVBTRV9LRVlTLmhhcyhrZXkpKSB8fCAoIXRoaXMuZXhwYW5kZWQgJiYgUk9XX0VYUEFORF9LRVlTLmhhcyhrZXkpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gVE9ETzogdG8gYmUgZGVsZXRlZCB3aGVuIG9uRm9jdXNDaGFuZ2UgZXZlbnQgaXMgcmVtb3ZlZCAjNDA1NFxuICAgICAgICBjb25zdCBhcmdzID0geyBjZWxsOiB0aGlzLCBncm91cFJvdzogbnVsbCwgZXZlbnQ6IGV2ZW50LCBjYW5jZWw6IGZhbHNlIH07XG4gICAgICAgIHRoaXMuZ3JpZC5fb25Gb2N1c0NoYW5nZS5lbWl0KGFyZ3MpO1xuICAgICAgICBpZiAoYXJncy5jYW5jZWwpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5ncmlkU2VsZWN0aW9uO1xuICAgICAgICBzZWxlY3Rpb24ua2V5Ym9hcmRTdGF0ZS5zaGlmdCA9IGV2ZW50LnNoaWZ0S2V5ICYmICEoa2V5ID09PSAndGFiJyk7XG5cbiAgICAgICAgY29uc3QgdmlzaWJsZUNvbHVtbkluZGV4ID0gc2VsZWN0aW9uLmFjdGl2ZUVsZW1lbnQgJiYgdGhpcy5ncmlkLmNvbHVtbkxpc3QuZmlsdGVyKGNvbCA9PiAhY29sLmhpZGRlbikubWFwKGMgPT4gYy52aXNpYmxlSW5kZXgpXG4gICAgICAgICAgICAuaW5kZXhPZihzZWxlY3Rpb24uYWN0aXZlRWxlbWVudC5jb2x1bW4pICE9PSAtMSA/IHNlbGVjdGlvbi5hY3RpdmVFbGVtZW50LmNvbHVtbiA6IDA7XG4gICAgICAgIGNvbnN0IGFjdGl2ZU5vZGUgPSBzZWxlY3Rpb24uYWN0aXZlRWxlbWVudCA/IE9iamVjdC5hc3NpZ24oe30sIHNlbGVjdGlvbi5hY3RpdmVFbGVtZW50KSA6IHRoaXMuc2VsZWN0aW9uTm9kZTtcbiAgICAgICAgYWN0aXZlTm9kZS5yb3cgPSB0aGlzLmluZGV4O1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnYXJyb3dkb3duJzpcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5uYXZpZ2F0aW9uLm5hdmlnYXRlRG93bih0aGlzLm5hdGl2ZUVsZW1lbnQsIGFjdGl2ZU5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXJyb3d1cCc6XG4gICAgICAgICAgICBjYXNlICd1cCc6XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24ubmF2aWdhdGVVcCh0aGlzLm5hdGl2ZUVsZW1lbnQsIGFjdGl2ZU5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGFiJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVRhYktleShldmVudC5zaGlmdEtleSwgYWN0aXZlTm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBgSWd4R3JpZENvbXBvbmVudGAgdGhlIGBJZ3hHcmlkR3JvdXBCeVJvd0NvbXBvbmVudGAgYmVsb25ncyB0by5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5ncmlkMS5yb3dMaXN0LmZpcnN0LmdyaWQ7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgZ2V0IGdyaWQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZEFQSS5ncmlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgZGF0YVR5cGUoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRDb2x1bW5CeU5hbWUodGhpcy5ncm91cFJvdy5leHByZXNzaW9uLmZpZWxkTmFtZSkuZGF0YVR5cGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVUYWJLZXkoc2hpZnQ6IGJvb2xlYW4sIGFjdGl2ZU5vZGU6IElTZWxlY3Rpb25Ob2RlKSB7XG4gICAgICAgIGlmIChzaGlmdCkge1xuICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24ucGVyZm9ybVNoaWZ0VGFiS2V5KHRoaXMubmF0aXZlRWxlbWVudCwgYWN0aXZlTm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbmRleCA9PT0gdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmlneEZvck9mLmxlbmd0aCAtIDEgJiYgdGhpcy5ncmlkLnJvb3RTdW1tYXJpZXNFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24ub25LZXlkb3duSG9tZSgwLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJlZENvbHVtbnMgPSB0aGlzLmdyaWQubmF2aWdhdGlvbi5ncmlkT3JkZXJlZENvbHVtbnM7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdENvbCA9IG9yZGVyZWRDb2x1bW5zW29yZGVyZWRDb2x1bW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIGFjdGl2ZU5vZGUuY29sdW1uID0gbGFzdENvbC5jb2x1bW5MYXlvdXRDaGlsZCA/IGxhc3RDb2wucGFyZW50LnZpc2libGVJbmRleCA6IGxhc3RDb2wudmlzaWJsZUluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5uYXZpZ2F0aW9uLnBlcmZvcm1UYWIodGhpcy5uYXRpdmVFbGVtZW50LCBhY3RpdmVOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaXNLZXlTdXBwb3J0ZWRJbkdyb3VwUm93KGtleSwgc2hpZnQgPSBmYWxzZSwgYWx0ID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHNoaWZ0KSB7XG4gICAgICAgICAgICByZXR1cm4gWydkb3duJywgJ3VwJywgJ2Fycm93ZG93bicsICdhcnJvd3VwJywgJ3RhYiddLmluZGV4T2Yoa2V5KSAhPT0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaXNUb2dnbGVLZXkoa2V5LCBhbHQpID8gdHJ1ZSA6IFsnZG93bicsICd1cCcsICdhcnJvd2Rvd24nLCAnYXJyb3d1cCcsICd0YWInXS5pbmRleE9mKGtleSkgIT09IC0xO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNUb2dnbGVLZXkoa2V5LCBhbHRLZXkpIHtcbiAgICAgICAgcmV0dXJuIGFsdEtleSAmJiBbJ2xlZnQnLCAncmlnaHQnLCAndXAnLCAnZG93bicsICdhcnJvd2xlZnQnLCAnYXJyb3dyaWdodCcsICdhcnJvd3VwJywgJ2Fycm93ZG93biddLmluZGV4T2Yoa2V5KSAhPT0gLTE7XG4gICAgfVxuXG59XG4iXX0=