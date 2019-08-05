/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, HostListener, Input, ViewChild, } from '@angular/core';
import { GridBaseAPIService } from '../api.service';
import { IgxGridSelectionService } from '../../core/grid-selection';
import { ROW_COLLAPSE_KEYS, ROW_EXPAND_KEYS, SUPPORTED_KEYS } from '../../core/utils';
export class IgxGridGroupByRowComponent {
    /**
     * @param {?} gridAPI
     * @param {?} gridSelection
     * @param {?} element
     * @param {?} cdr
     */
    constructor(gridAPI, gridSelection, element, cdr) {
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
    /**
     * Returns whether the row is focused.
     * ```
     * let gridRowFocused = this.grid1.rowList.first.focused;
     * ```
     * @return {?}
     */
    get focused() {
        return this.isFocused;
    }
    /**
     * Returns whether the group row is expanded.
     * ```typescript
     * const groupRowExpanded = this.grid1.rowList.first.expanded;
     * ```
     * @return {?}
     */
    get expanded() {
        return this.grid.isExpandedGroup(this.groupRow);
    }
    /**
     * @hidden
     * @return {?}
     */
    get describedBy() {
        /** @type {?} */
        const grRowExpr = this.groupRow.expression !== undefined ? this.groupRow.expression.fieldName : '';
        return this.gridID + '_' + grRowExpr;
    }
    /**
     * @return {?}
     */
    get dataRowIndex() {
        return this.index;
    }
    /**
     * Returns a reference to the underlying HTML element.
     * ```typescript
     * const groupRowElement = this.nativeElement;
     * ```
     * @return {?}
     */
    get nativeElement() {
        return this.element.nativeElement;
    }
    /**
     * Returns the style classes applied to the group rows.
     * ```typescript
     * const groupCssStyles = this.grid1.rowList.first.styleClasses;
     * ```
     * @return {?}
     */
    get styleClasses() {
        return `${this.defaultCssClass} ` + `${this.paddingIndentationCssClass}-` + this.groupRow.level +
            (this.focused ? ` ${this.defaultCssClass}--active` : '');
    }
    /**
     * @hidden
     * @return {?}
     */
    onFocus() {
        this.isFocused = true;
    }
    /**
     * @hidden
     * @return {?}
     */
    onBlur() {
        this.isFocused = false;
    }
    /**
     * Toggles the group row.
     * ```typescript
     * this.grid1.rowList.first.toggle()
     * ```
     * @return {?}
     */
    toggle() {
        /** @type {?} */
        const isVirtualized = !this.grid.verticalScrollContainer.dc.instance.notVirtual;
        /** @type {?} */
        const groupRowIndex = this.index;
        this.grid.toggleGroup(this.groupRow);
        if (isVirtualized) {
            /** @type {?} */
            const groupRow = this.grid.nativeElement.querySelector(`[data-rowIndex="${groupRowIndex}"]`);
            if (groupRow) {
                groupRow.focus();
            }
        }
    }
    /**
     * @protected
     * @return {?}
     */
    get selectionNode() {
        return {
            row: this.index,
            column: this.gridSelection.activeElement ? this.gridSelection.activeElement.column : 0
        };
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydown(event) {
        // TODO: Refactor
        /** @type {?} */
        const key = event.key.toLowerCase();
        if (!SUPPORTED_KEYS.has(key)) {
            return;
        }
        event.stopPropagation();
        /** @type {?} */
        const keydownArgs = { targetType: 'groupRow', target: this, event: event, cancel: false };
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
        const args = { cell: this, groupRow: null, event: event, cancel: false };
        this.grid._onFocusChange.emit(args);
        if (args.cancel) {
            return;
        }
        /** @type {?} */
        const selection = this.gridSelection;
        selection.keyboardState.shift = event.shiftKey && !(key === 'tab');
        /** @type {?} */
        const visibleColumnIndex = selection.activeElement && this.grid.columnList.filter(col => !col.hidden).map(c => c.visibleIndex)
            .indexOf(selection.activeElement.column) !== -1 ? selection.activeElement.column : 0;
        /** @type {?} */
        const activeNode = selection.activeElement ? Object.assign({}, selection.activeElement) : this.selectionNode;
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
    }
    /**
     * Returns a reference to the `IgxGridComponent` the `IgxGridGroupByRowComponent` belongs to.
     * ```typescript
     * this.grid1.rowList.first.grid;
     * ```
     * @return {?}
     */
    get grid() {
        return this.gridAPI.grid;
    }
    /**
     * @hidden
     * @return {?}
     */
    get dataType() {
        return this.grid.getColumnByName(this.groupRow.expression.fieldName).dataType;
    }
    /**
     * @private
     * @param {?} shift
     * @param {?} activeNode
     * @return {?}
     */
    handleTabKey(shift, activeNode) {
        if (shift) {
            this.grid.navigation.performShiftTabKey(this.nativeElement, activeNode);
        }
        else {
            if (this.index === this.grid.verticalScrollContainer.igxForOf.length - 1 && this.grid.rootSummariesEnabled) {
                this.grid.navigation.onKeydownHome(0, true);
            }
            else {
                /** @type {?} */
                const orderedColumns = this.grid.navigation.gridOrderedColumns;
                /** @type {?} */
                const lastCol = orderedColumns[orderedColumns.length - 1];
                activeNode.column = lastCol.columnLayoutChild ? lastCol.parent.visibleIndex : lastCol.visibleIndex;
                this.grid.navigation.performTab(this.nativeElement, activeNode);
            }
        }
    }
    /**
     * @private
     * @param {?} key
     * @param {?=} shift
     * @param {?=} alt
     * @return {?}
     */
    isKeySupportedInGroupRow(key, shift = false, alt = false) {
        if (shift) {
            return ['down', 'up', 'arrowdown', 'arrowup', 'tab'].indexOf(key) !== -1;
        }
        return this.isToggleKey(key, alt) ? true : ['down', 'up', 'arrowdown', 'arrowup', 'tab'].indexOf(key) !== -1;
    }
    /**
     * @private
     * @param {?} key
     * @param {?} altKey
     * @return {?}
     */
    isToggleKey(key, altKey) {
        return altKey && ['left', 'right', 'up', 'down', 'arrowleft', 'arrowright', 'arrowup', 'arrowdown'].indexOf(key) !== -1;
    }
}
IgxGridGroupByRowComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'igx-grid-groupby-row',
                template: "<ng-container #defaultGroupRow>\n    <div (click)=\"toggle()\" class=\"igx-grid__grouping-indicator\">\n        <igx-icon *ngIf=\"!expanded\" fontSet=\"material\">expand_more</igx-icon>\n        <igx-icon *ngIf=\"expanded\" fontSet=\"material\">expand_less</igx-icon>\n    </div>\n\n    <div class=\"igx-grid__group-content\" #groupContent>\n        <ng-container *ngTemplateOutlet=\"grid.groupRowTemplate ? grid.groupRowTemplate : defaultGroupByTemplate; context: { $implicit: groupRow }\">\n        </ng-container>\n    </div>\n\n    <ng-template #defaultGroupByTemplate>\n        <div class=\"igx-group-label\">\n            <igx-icon fontSet=\"material\" class=\"igx-group-label__icon\">group_work</igx-icon>\n            <span class=\"igx-group-label__column-name\">\n            {{ groupRow.expression ? groupRow.expression.fieldName : '' }}:\n            </span>\n\n            <ng-container *ngIf=\"dataType === 'boolean' || dataType === 'string'; else default\" >\n                <span class=\"igx-group-label__text\">{{ groupRow.value }}</span>\n            </ng-container>\n            <ng-template #default>\n                <ng-container *ngIf=\"dataType === 'number'\">\n                    <span class=\"igx-group-label__text\">{{ groupRow.value | number }}</span>\n                </ng-container>\n                <ng-container *ngIf=\"dataType === 'date'\">\n                    <span class=\"igx-group-label__text\">{{ groupRow.value | date }}</span>\n                </ng-container>\n            </ng-template>\n\n            <igx-badge [value]=\"groupRow.records ? groupRow.records.length : 0\" class='igx-group-label__count-badge'></igx-badge>\n        </div>\n    </ng-template>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
IgxGridGroupByRowComponent.ctorParameters = () => [
    { type: GridBaseAPIService },
    { type: IgxGridSelectionService },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBieS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9ncmlkL2dyb3VwYnktcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxTQUFTLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEQsT0FBTyxFQUFFLHVCQUF1QixFQUFrQixNQUFNLDJCQUEyQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFRdEYsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7OztJQUVuQyxZQUFtQixPQUFxRSxFQUM1RSxhQUFzQyxFQUN2QyxPQUFtQixFQUNuQixHQUFzQjtRQUhkLFlBQU8sR0FBUCxPQUFPLENBQThEO1FBQzVFLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUN2QyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLFFBQUcsR0FBSCxHQUFHLENBQW1COzs7O1FBS3ZCLG9CQUFlLEdBQUcscUJBQXFCLENBQUM7Ozs7UUFLeEMsK0JBQTBCLEdBQUcsb0NBQW9DLENBQUM7Ozs7UUFNbEUsY0FBUyxHQUFHLEtBQUssQ0FBQzs7OztRQStEckIsYUFBUSxHQUFHLENBQUMsQ0FBQztJQS9FaUIsQ0FBQzs7Ozs7Ozs7SUF3QnRDLElBQUksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDOzs7Ozs7OztJQTRDRCxJQUNJLFFBQVE7UUFDUixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FB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OEM7O0lBQzlDLDZDQUEwQjs7SUFDMUIseUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBIb3N0QmluZGluZyxcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgSW5wdXQsXG4gICAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElHcm91cEJ5UmVjb3JkIH0gZnJvbSAnLi4vLi4vZGF0YS1vcGVyYXRpb25zL2dyb3VwYnktcmVjb3JkLmludGVyZmFjZSc7XG5pbXBvcnQgeyBHcmlkQmFzZUFQSVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hHcmlkQmFzZUNvbXBvbmVudCwgSUdyaWREYXRhQmluZGFibGUgfSBmcm9tICcuLi9ncmlkLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IElneEdyaWRTZWxlY3Rpb25TZXJ2aWNlLCBJU2VsZWN0aW9uTm9kZSB9IGZyb20gJy4uLy4uL2NvcmUvZ3JpZC1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgUk9XX0NPTExBUFNFX0tFWVMsIFJPV19FWFBBTkRfS0VZUywgU1VQUE9SVEVEX0tFWVMgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gICAgc2VsZWN0b3I6ICdpZ3gtZ3JpZC1ncm91cGJ5LXJvdycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2dyb3VwYnktcm93LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hHcmlkR3JvdXBCeVJvd0NvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZ3JpZEFQSTogR3JpZEJhc2VBUElTZXJ2aWNlPElneEdyaWRCYXNlQ29tcG9uZW50ICYgSUdyaWREYXRhQmluZGFibGU+LFxuICAgICAgICBwcml2YXRlIGdyaWRTZWxlY3Rpb246IElneEdyaWRTZWxlY3Rpb25TZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBkZWZhdWx0Q3NzQ2xhc3MgPSAnaWd4LWdyaWRfX2dyb3VwLXJvdyc7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHBhZGRpbmdJbmRlbnRhdGlvbkNzc0NsYXNzID0gJ2lneC1ncmlkX19ncm91cC1yb3ctLXBhZGRpbmctbGV2ZWwnO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHJvdGVjdGVkIGlzRm9jdXNlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSByb3cgaXMgZm9jdXNlZC5cbiAgICAgKiBgYGBcbiAgICAgKiBsZXQgZ3JpZFJvd0ZvY3VzZWQgPSB0aGlzLmdyaWQxLnJvd0xpc3QuZmlyc3QuZm9jdXNlZDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBnZXQgZm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNGb2N1c2VkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIGluZGV4IG9mIHRoZSByb3cuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtZ3JpZC1ncm91cGJ5LXJvdyBbZ3JpZElEXT1cImlkXCIgW2luZGV4XT1cInJvd0luZGV4XCIgW2dyb3VwUm93XT1cInJvd0RhdGFcIiAjcm93PjwvaWd4LWdyaWQtZ3JvdXBieS1yb3c+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaW5kZXg6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIGlkIG9mIHRoZSBncmlkIHRoZSByb3cgYmVsb25ncyB0by5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ncmlkLWdyb3VwYnktcm93IFtncmlkSURdPVwiaWRcIiBbaW5kZXhdPVwicm93SW5kZXhcIiBbZ3JvdXBSb3ddPVwicm93RGF0YVwiICNyb3c+PC9pZ3gtZ3JpZC1ncm91cGJ5LXJvdz5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBncmlkSUQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNwZWNpZmllcyB0aGUgZ3JvdXAgcmVjb3JkIHRoZSBjb21wb25lbnQgcmVuZGVycyBmb3IuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIDxpZ3gtZ3JpZC1ncm91cGJ5LXJvdyBbZ3JpZElEXT1cImlkXCIgW2luZGV4XT1cInJvd0luZGV4XCIgW2dyb3VwUm93XT1cInJvd0RhdGFcIiAjcm93PjwvaWd4LWdyaWQtZ3JvdXBieS1yb3c+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ3JvdXBSb3c6IElHcm91cEJ5UmVjb3JkO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJlZmVyZW5jZSBvZiB0aGUgY29udGVudCBvZiB0aGUgZ3JvdXAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGdyb3VwUm93Q29udGVudCA9IHRoaXMuZ3JpZDEucm93TGlzdC5maXJzdC5ncm91cENvbnRlbnQ7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnZ3JvdXBDb250ZW50JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgZ3JvdXBDb250ZW50OiBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBncm91cCByb3cgaXMgZXhwYW5kZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGdyb3VwUm93RXhwYW5kZWQgPSB0aGlzLmdyaWQxLnJvd0xpc3QuZmlyc3QuZXhwYW5kZWQ7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZXhwYW5kZWQnKVxuICAgIGdldCBleHBhbmRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5pc0V4cGFuZGVkR3JvdXAodGhpcy5ncm91cFJvdyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpXG4gICAgcHVibGljIHRhYmluZGV4ID0gMDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kZXNjcmliZWRieScpXG4gICAgZ2V0IGRlc2NyaWJlZEJ5KCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGdyUm93RXhwciA9IHRoaXMuZ3JvdXBSb3cuZXhwcmVzc2lvbiAhPT0gdW5kZWZpbmVkID8gdGhpcy5ncm91cFJvdy5leHByZXNzaW9uLmZpZWxkTmFtZSA6ICcnO1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkSUQgKyAnXycgKyBnclJvd0V4cHI7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmRhdGEtcm93SW5kZXgnKVxuICAgIGdldCBkYXRhUm93SW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIHVuZGVybHlpbmcgSFRNTCBlbGVtZW50LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBncm91cFJvd0VsZW1lbnQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgZ2V0IG5hdGl2ZUVsZW1lbnQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHN0eWxlIGNsYXNzZXMgYXBwbGllZCB0byB0aGUgZ3JvdXAgcm93cy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgZ3JvdXBDc3NTdHlsZXMgPSB0aGlzLmdyaWQxLnJvd0xpc3QuZmlyc3Quc3R5bGVDbGFzc2VzO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICAgIGdldCBzdHlsZUNsYXNzZXMoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZGVmYXVsdENzc0NsYXNzfSBgICsgYCR7dGhpcy5wYWRkaW5nSW5kZW50YXRpb25Dc3NDbGFzc30tYCArIHRoaXMuZ3JvdXBSb3cubGV2ZWwgK1xuICAgICAgICAgICAgKHRoaXMuZm9jdXNlZCA/IGAgJHt0aGlzLmRlZmF1bHRDc3NDbGFzc30tLWFjdGl2ZWAgOiAnJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxuICAgIHB1YmxpYyBvbkZvY3VzKCkge1xuICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gICAgcHVibGljIG9uQmx1cigpIHtcbiAgICAgICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIHRoZSBncm91cCByb3cuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZ3JpZDEucm93TGlzdC5maXJzdC50b2dnbGUoKVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyB0b2dnbGUoKSB7XG4gICAgICAgIGNvbnN0IGlzVmlydHVhbGl6ZWQgPSAhdGhpcy5ncmlkLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyLmRjLmluc3RhbmNlLm5vdFZpcnR1YWw7XG4gICAgICAgIGNvbnN0IGdyb3VwUm93SW5kZXggPSB0aGlzLmluZGV4O1xuICAgICAgICB0aGlzLmdyaWQudG9nZ2xlR3JvdXAodGhpcy5ncm91cFJvdyk7XG4gICAgICAgIGlmIChpc1ZpcnR1YWxpemVkKSB7XG4gICAgICAgICAgICBjb25zdCBncm91cFJvdyA9IHRoaXMuZ3JpZC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvd0luZGV4PVwiJHtncm91cFJvd0luZGV4fVwiXWApO1xuICAgICAgICAgICAgaWYgKGdyb3VwUm93KSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBSb3cuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgc2VsZWN0aW9uTm9kZSgpOiBJU2VsZWN0aW9uTm9kZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByb3c6IHRoaXMuaW5kZXgsXG4gICAgICAgICAgICBjb2x1bW46IHRoaXMuZ3JpZFNlbGVjdGlvbi5hY3RpdmVFbGVtZW50ID8gdGhpcy5ncmlkU2VsZWN0aW9uLmFjdGl2ZUVsZW1lbnQuY29sdW1uIDogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duKGV2ZW50KSB7XG4gICAgICAgIC8vIFRPRE86IFJlZmFjdG9yXG4gICAgICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoIVNVUFBPUlRFRF9LRVlTLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IGtleWRvd25BcmdzID0geyB0YXJnZXRUeXBlOiAnZ3JvdXBSb3cnLCB0YXJnZXQ6IHRoaXMsIGV2ZW50OiBldmVudCwgY2FuY2VsOiBmYWxzZSB9O1xuICAgICAgICB0aGlzLmdyaWQub25HcmlkS2V5ZG93bi5lbWl0KGtleWRvd25BcmdzKTtcbiAgICAgICAgaWYgKGtleWRvd25BcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzS2V5U3VwcG9ydGVkSW5Hcm91cFJvdyhrZXksIGV2ZW50LnNoaWZ0S2V5LCBldmVudC5hbHRLZXkpIHx8IGV2ZW50LmN0cmxLZXkpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNUb2dnbGVLZXkoa2V5LCBldmVudC5hbHRLZXkpKSB7XG4gICAgICAgICAgICBpZiAoKHRoaXMuZXhwYW5kZWQgJiYgUk9XX0NPTExBUFNFX0tFWVMuaGFzKGtleSkpIHx8ICghdGhpcy5leHBhbmRlZCAmJiBST1dfRVhQQU5EX0tFWVMuaGFzKGtleSkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBUT0RPOiB0byBiZSBkZWxldGVkIHdoZW4gb25Gb2N1c0NoYW5nZSBldmVudCBpcyByZW1vdmVkICM0MDU0XG4gICAgICAgIGNvbnN0IGFyZ3MgPSB7IGNlbGw6IHRoaXMsIGdyb3VwUm93OiBudWxsLCBldmVudDogZXZlbnQsIGNhbmNlbDogZmFsc2UgfTtcbiAgICAgICAgdGhpcy5ncmlkLl9vbkZvY3VzQ2hhbmdlLmVtaXQoYXJncyk7XG4gICAgICAgIGlmIChhcmdzLmNhbmNlbCkgeyByZXR1cm47IH1cblxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLmdyaWRTZWxlY3Rpb247XG4gICAgICAgIHNlbGVjdGlvbi5rZXlib2FyZFN0YXRlLnNoaWZ0ID0gZXZlbnQuc2hpZnRLZXkgJiYgIShrZXkgPT09ICd0YWInKTtcblxuICAgICAgICBjb25zdCB2aXNpYmxlQ29sdW1uSW5kZXggPSBzZWxlY3Rpb24uYWN0aXZlRWxlbWVudCAmJiB0aGlzLmdyaWQuY29sdW1uTGlzdC5maWx0ZXIoY29sID0+ICFjb2wuaGlkZGVuKS5tYXAoYyA9PiBjLnZpc2libGVJbmRleClcbiAgICAgICAgICAgIC5pbmRleE9mKHNlbGVjdGlvbi5hY3RpdmVFbGVtZW50LmNvbHVtbikgIT09IC0xID8gc2VsZWN0aW9uLmFjdGl2ZUVsZW1lbnQuY29sdW1uIDogMDtcbiAgICAgICAgY29uc3QgYWN0aXZlTm9kZSA9IHNlbGVjdGlvbi5hY3RpdmVFbGVtZW50ID8gT2JqZWN0LmFzc2lnbih7fSwgc2VsZWN0aW9uLmFjdGl2ZUVsZW1lbnQpIDogdGhpcy5zZWxlY3Rpb25Ob2RlO1xuICAgICAgICBhY3RpdmVOb2RlLnJvdyA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdhcnJvd2Rvd24nOlxuICAgICAgICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24ubmF2aWdhdGVEb3duKHRoaXMubmF0aXZlRWxlbWVudCwgYWN0aXZlTm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhcnJvd3VwJzpcbiAgICAgICAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQubmF2aWdhdGlvbi5uYXZpZ2F0ZVVwKHRoaXMubmF0aXZlRWxlbWVudCwgYWN0aXZlTm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0YWInOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVGFiS2V5KGV2ZW50LnNoaWZ0S2V5LCBhY3RpdmVOb2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGBJZ3hHcmlkQ29tcG9uZW50YCB0aGUgYElneEdyaWRHcm91cEJ5Um93Q29tcG9uZW50YCBiZWxvbmdzIHRvLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmdyaWQxLnJvd0xpc3QuZmlyc3QuZ3JpZDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBnZXQgZ3JpZCgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkQVBJLmdyaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGdldCBkYXRhVHlwZSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmdldENvbHVtbkJ5TmFtZSh0aGlzLmdyb3VwUm93LmV4cHJlc3Npb24uZmllbGROYW1lKS5kYXRhVHlwZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZVRhYktleShzaGlmdDogYm9vbGVhbiwgYWN0aXZlTm9kZTogSVNlbGVjdGlvbk5vZGUpIHtcbiAgICAgICAgaWYgKHNoaWZ0KSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQubmF2aWdhdGlvbi5wZXJmb3JtU2hpZnRUYWJLZXkodGhpcy5uYXRpdmVFbGVtZW50LCBhY3RpdmVOb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4ID09PSB0aGlzLmdyaWQudmVydGljYWxTY3JvbGxDb250YWluZXIuaWd4Rm9yT2YubGVuZ3RoIC0gMSAmJiB0aGlzLmdyaWQucm9vdFN1bW1hcmllc0VuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQubmF2aWdhdGlvbi5vbktleWRvd25Ib21lKDAsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcmRlcmVkQ29sdW1ucyA9IHRoaXMuZ3JpZC5uYXZpZ2F0aW9uLmdyaWRPcmRlcmVkQ29sdW1ucztcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0Q29sID0gb3JkZXJlZENvbHVtbnNbb3JkZXJlZENvbHVtbnMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgYWN0aXZlTm9kZS5jb2x1bW4gPSBsYXN0Q29sLmNvbHVtbkxheW91dENoaWxkID8gbGFzdENvbC5wYXJlbnQudmlzaWJsZUluZGV4IDogbGFzdENvbC52aXNpYmxlSW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24ucGVyZm9ybVRhYih0aGlzLm5hdGl2ZUVsZW1lbnQsIGFjdGl2ZU5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0tleVN1cHBvcnRlZEluR3JvdXBSb3coa2V5LCBzaGlmdCA9IGZhbHNlLCBhbHQgPSBmYWxzZSkge1xuICAgICAgICBpZiAoc2hpZnQpIHtcbiAgICAgICAgICAgIHJldHVybiBbJ2Rvd24nLCAndXAnLCAnYXJyb3dkb3duJywgJ2Fycm93dXAnLCAndGFiJ10uaW5kZXhPZihrZXkpICE9PSAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pc1RvZ2dsZUtleShrZXksIGFsdCkgPyB0cnVlIDogWydkb3duJywgJ3VwJywgJ2Fycm93ZG93bicsICdhcnJvd3VwJywgJ3RhYiddLmluZGV4T2Yoa2V5KSAhPT0gLTE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1RvZ2dsZUtleShrZXksIGFsdEtleSkge1xuICAgICAgICByZXR1cm4gYWx0S2V5ICYmIFsnbGVmdCcsICdyaWdodCcsICd1cCcsICdkb3duJywgJ2Fycm93bGVmdCcsICdhcnJvd3JpZ2h0JywgJ2Fycm93dXAnLCAnYXJyb3dkb3duJ10uaW5kZXhPZihrZXkpICE9PSAtMTtcbiAgICB9XG5cbn1cbiJdfQ==