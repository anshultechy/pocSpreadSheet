/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ContentChildren, ElementRef, forwardRef, QueryList, Input, ViewChild, ContentChild, Output, EventEmitter, Optional, Inject } from '@angular/core';
import { IgxToggleDirective } from '../directives/toggle/toggle.directive';
import { IgxDropDownItemComponent } from './drop-down-item.component';
import { IgxDropDownBase } from './drop-down.base';
import { Navigate } from './drop-down.common';
import { IGX_DROPDOWN_BASE } from './drop-down.common';
import { isIE } from '../core/utils';
import { IgxSelectionAPIService } from '../core/selection';
import { Subject } from 'rxjs';
import { IgxDropDownItemBase } from './drop-down-item.base';
import { IgxForOfDirective } from '../directives/for-of/for_of.directive';
import { take } from 'rxjs/operators';
import { DisplayDensityToken } from '../core/density';
/**
 * **Ignite UI for Angular DropDown** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/drop_down.html)
 *
 * The Ignite UI for Angular Drop Down displays a scrollable list of items which may be visually grouped and
 * supports selection of a single item. Clicking or tapping an item selects it and closes the Drop Down
 *
 * Example:
 * ```html
 * <igx-drop-down>
 *   <igx-drop-down-item *ngFor="let item of items" disabled={{item.disabled}} isHeader={{item.header}}>
 *     {{ item.value }}
 *   </igx-drop-down-item>
 * </igx-drop-down>
 * ```
 */
export class IgxDropDownComponent extends IgxDropDownBase {
    /**
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} selection
     * @param {?} _displayDensityOptions
     */
    constructor(elementRef, cdr, selection, _displayDensityOptions) {
        super(elementRef, cdr, _displayDensityOptions);
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.selection = selection;
        this._displayDensityOptions = _displayDensityOptions;
        this.destroy$ = new Subject();
        /**
         * Emitted before the dropdown is opened
         *
         * ```html
         * <igx-drop-down (onOpening)='handleOpening()'></igx-drop-down>
         * ```
         */
        this.onOpening = new EventEmitter();
        /**
         * Emitted after the dropdown is opened
         *
         * ```html
         * <igx-drop-down (onOpened)='handleOpened()'></igx-drop-down>
         * ```
         */
        this.onOpened = new EventEmitter();
        /**
         * Emitted before the dropdown is closed
         *
         * ```html
         * <igx-drop-down (onClosing)='handleClosing()'></igx-drop-down>
         * ```
         */
        this.onClosing = new EventEmitter();
        /**
         * Emitted after the dropdown is closed
         *
         * ```html
         * <igx-drop-down (onClosed)='handleClosed()'></igx-drop-down>
         * ```
         */
        this.onClosed = new EventEmitter();
        /**
         * Gets/sets whether items take focus. Disabled by default.
         * When enabled, drop down items gain tab index and are focused when active -
         * this includes activating the selected item when opening the drop down and moving with keyboard navigation.
         *
         * Note: Keep that focus shift in mind when using the igxDropDownItemNavigation directive
         * and ensure it's placed either on each focusable item or a common ancestor to allow it to handle keyboard events.
         *
         * ```typescript
         * // get
         * let dropDownAllowsItemFocus = this.dropdown.allowItemsFocus;
         * ```
         *
         * ```html
         * <!--set-->
         * <igx-drop-down [allowItemsFocus]='true'></igx-drop-down>
         * ```
         */
        this.allowItemsFocus = false;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get focusedItem() {
        if (this.virtDir) {
            return this._focusedItem && this._focusedItem.index !== -1 ?
                (this.children.find(e => e.index === this._focusedItem.index) || null) :
                null;
        }
        return this._focusedItem;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set focusedItem(value) {
        if (!value) {
            this.selection.clear(`${this.id}-active`);
            this._focusedItem = null;
            return;
        }
        this._focusedItem = value;
        if (this.virtDir) {
            this._focusedItem = (/** @type {?} */ ({
                value: value.value,
                index: value.index
            }));
        }
        this.selection.set(`${this.id}-active`, new Set([this._focusedItem]));
    }
    /**
     * @return {?}
     */
    get id() {
        return this._id;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set id(value) {
        this.toggleDirective.id = value;
        this.selection.set(value, this.selection.get(this.id));
        this.selection.clear(this.id);
        this.selection.set(value, this.selection.get(`${this.id}-active`));
        this.selection.clear(`${this.id}-active`);
        this._id = value;
    }
    /**
     * Id of the internal listbox of the drop down
     * @return {?}
     */
    get listId() {
        return this.id + '-list';
    }
    /**
     * Get currently selected item
     *
     * ```typescript
     * let currentItem = this.dropdown.selectedItem;
     * ```
     * @return {?}
     */
    get selectedItem() {
        /** @type {?} */
        const selectedItem = this.selection.first_item(this.id);
        if (selectedItem) {
            return selectedItem;
        }
        return null;
    }
    /**
     * Gets if the dropdown is collapsed
     *
     * ```typescript
     * let isCollapsed = this.dropdown.collapsed;
     * ```
     * @return {?}
     */
    get collapsed() {
        return this.toggleDirective.collapsed;
    }
    /**
     * @protected
     * @return {?}
     */
    get scrollContainer() {
        return this.toggleDirective.element;
    }
    /**
     * @protected
     * @return {?}
     */
    get collectionLength() {
        if (this.virtDir) {
            return this.virtDir.totalItemCount || this.virtDir.igxForOf.length;
        }
    }
    /**
     * Opens the dropdown
     *
     * ```typescript
     * this.dropdown.open();
     * ```
     * @param {?=} overlaySettings
     * @return {?}
     */
    open(overlaySettings) {
        this.toggleDirective.open(overlaySettings);
        this.updateScrollPosition();
    }
    /**
     * Closes the dropdown
     *
     * ```typescript
     * this.dropdown.close();
     * ```
     * @return {?}
     */
    close() {
        this.toggleDirective.close();
    }
    /**
     * Toggles the dropdown
     *
     * ```typescript
     * this.dropdown.toggle();
     * ```
     * @param {?=} overlaySettings
     * @return {?}
     */
    toggle(overlaySettings) {
        if (this.collapsed || this.toggleDirective.isClosing) {
            this.open(overlaySettings);
        }
        else {
            this.close();
        }
    }
    /**
     * Select an item by index
     * @param {?} index of the item to select; If the drop down uses *igxFor, pass the index in data
     * @return {?}
     */
    setSelectedItem(index) {
        if (index < 0 || index >= this.items.length) {
            return;
        }
        /** @type {?} */
        let newSelection;
        if (this.virtDir) {
            newSelection = (/** @type {?} */ ({
                value: this.virtDir.igxForOf[index],
                index
            }));
        }
        else {
            newSelection = this.items[index];
        }
        this.selectItem(newSelection);
    }
    /**
     * Navigates to the item on the specified index
     * If the data in the drop-down is virtualized, pass the index of the item in the virtualized data.
     * @param {?} index
     * @return {?}
     */
    navigateItem(index) {
        if (this.virtDir) {
            if (index === -1 || index >= this.collectionLength) {
                return;
            }
            /** @type {?} */
            const direction = index > (this.focusedItem ? this.focusedItem.index : -1) ? Navigate.Down : Navigate.Up;
            /** @type {?} */
            const subRequired = this.isIndexOutOfBounds(index, direction);
            this.focusedItem = (/** @type {?} */ ({
                value: this.virtDir.igxForOf[index],
                index: index
            }));
            if (subRequired) {
                this.virtDir.scrollTo(index);
            }
            if (subRequired) {
                this.virtDir.onChunkLoad.pipe(take(1)).subscribe(() => {
                    this.skipHeader(direction);
                });
            }
            else {
                this.skipHeader(direction);
            }
        }
        else {
            super.navigateItem(index);
        }
        if (this.allowItemsFocus && this.focusedItem) {
            this.focusedItem.element.nativeElement.focus();
            this.cdr.markForCheck();
        }
    }
    /**
     * @private
     * @param {?} index
     * @param {?} direction
     * @return {?}
     */
    isIndexOutOfBounds(index, direction) {
        /** @type {?} */
        const virtState = this.virtDir.state;
        /** @type {?} */
        const currentPosition = this.virtDir.getVerticalScroll().scrollTop;
        /** @type {?} */
        const itemPosition = this.virtDir.getScrollForIndex(index, direction === Navigate.Down);
        /** @type {?} */
        const indexOutOfChunk = index < virtState.startIndex || index > virtState.chunkSize + virtState.startIndex;
        /** @type {?} */
        const scrollNeeded = direction === Navigate.Down ? currentPosition < itemPosition : currentPosition > itemPosition;
        /** @type {?} */
        const subRequired = indexOutOfChunk || scrollNeeded;
        return subRequired;
    }
    /**
     * @protected
     * @param {?} direction
     * @return {?}
     */
    skipHeader(direction) {
        if (!this.focusedItem) {
            return;
        }
        if (this.focusedItem.isHeader || this.focusedItem.disabled) {
            if (direction === Navigate.Up) {
                this.navigatePrev();
            }
            else {
                this.navigateNext();
            }
        }
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    updateScrollPosition() {
        if (!this.virtDir) {
            return;
        }
        if (!this.selectedItem) {
            this.virtDir.scrollTo(0);
            return;
        }
        /** @type {?} */
        let targetScroll = this.virtDir.getScrollForIndex(this.selectedItem.index);
        /** @type {?} */
        const itemsInView = this.virtDir.igxForContainerSize / this.virtDir.igxForItemSize;
        targetScroll -= (itemsInView / 2 - 1) * this.virtDir.igxForItemSize;
        this.virtDir.getVerticalScroll().scrollTop = targetScroll;
    }
    /**
     * @hidden \@internal
     * @param {?} e
     * @return {?}
     */
    onToggleOpening(e) {
        this.onOpening.emit(e);
        if (e.cancel) {
            return;
        }
        if (!this.virtDir && this.selectedItem) {
            this.scrollToItem(this.selectedItem);
        }
        if (this.virtDir) {
            this.virtDir.getVerticalScroll().scrollTop = this._scrollPosition;
        }
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    onToggleOpened() {
        if (this.selectedItem) {
            this.focusedItem = this.selectedItem;
            this._focusedItem.focused = true;
        }
        else if (this.allowItemsFocus) {
            this.navigateFirst();
        }
        this.onOpened.emit();
    }
    /**
     * @hidden \@internal
     * @param {?} e
     * @return {?}
     */
    onToggleClosing(e) {
        this.onClosing.emit(e);
        if (this.virtDir) {
            this._scrollPosition = this.virtDir.getVerticalScroll().scrollTop;
        }
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    onToggleClosed() {
        if (this._focusedItem) {
            this._focusedItem.focused = false;
        }
        this.onClosed.emit();
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.selection.clear(this.id);
        this.selection.clear(`${this.id}-active`);
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    scrollToItem(item) {
        /** @type {?} */
        const itemPosition = this.calculateScrollPosition(item);
        //  in IE11 setting sctrollTop is somehow slow and forces dropdown
        //  to appear on screen before animation start. As a result dropdown
        //  flickers badly. This is why we set scrollTop just a little later
        //  allowing animation to start and prevent dropdown flickering
        if (isIE()) {
            setTimeout(() => {
                this.scrollContainer.scrollTop = (itemPosition);
            }, 1);
        }
        else {
            this.scrollContainer.scrollTop = (itemPosition);
        }
    }
    /**
     * @hidden \@internal
     * @param {?} item
     * @return {?}
     */
    calculateScrollPosition(item) {
        if (!item) {
            return 0;
        }
        /** @type {?} */
        const elementRect = item.element.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const parentRect = this.scrollContainer.getBoundingClientRect();
        /** @type {?} */
        const scrollDelta = parentRect.top - elementRect.top;
        /** @type {?} */
        let scrollPosition = this.scrollContainer.scrollTop - scrollDelta;
        /** @type {?} */
        const dropDownHeight = this.scrollContainer.clientHeight;
        scrollPosition -= dropDownHeight / 2;
        scrollPosition += item.elementHeight / 2;
        return Math.floor(scrollPosition);
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    ngOnInit() {
        this.toggleDirective.id = this.id;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.virtDir) {
            this.virtDir.igxForItemSize = 28;
        }
    }
    /**
     * Keydown Handler
     * @param {?} key
     * @param {?=} event
     * @return {?}
     */
    onItemActionKey(key, event) {
        super.onItemActionKey(key, event);
        this.close();
    }
    /**
     * Virtual scroll implementation
     * @hidden \@internal
     * @return {?}
     */
    navigateFirst() {
        if (this.virtDir) {
            this.navigateItem(0);
        }
        else {
            super.navigateFirst();
        }
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    navigateLast() {
        if (this.virtDir) {
            this.navigateItem(this.virtDir.totalItemCount ? this.virtDir.totalItemCount - 1 : this.virtDir.igxForOf.length - 1);
        }
        else {
            super.navigateLast();
        }
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    navigateNext() {
        if (this.virtDir) {
            this.navigateItem(this._focusedItem ? this._focusedItem.index + 1 : 0);
        }
        else {
            super.navigateNext();
        }
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    navigatePrev() {
        if (this.virtDir) {
            this.navigateItem(this._focusedItem ? this._focusedItem.index - 1 : 0);
        }
        else {
            super.navigatePrev();
        }
    }
    /**
     * Handles the `onSelection` emit and the drop down toggle when selection changes
     * @hidden
     * \@internal
     * @param {?=} newSelection
     * @param {?=} event
     * @return {?}
     */
    selectItem(newSelection, event) {
        /** @type {?} */
        const oldSelection = this.selectedItem;
        if (!newSelection) {
            newSelection = this.focusedItem;
        }
        if (newSelection === null) {
            return;
        }
        if (newSelection instanceof IgxDropDownItemBase && newSelection.isHeader) {
            return;
        }
        if (this.virtDir) {
            newSelection = (/** @type {?} */ ({
                value: newSelection.value,
                index: newSelection.index
            }));
        }
        /** @type {?} */
        const args = { oldSelection, newSelection, cancel: false };
        this.onSelection.emit(args);
        if (!args.cancel) {
            this.selection.set(this.id, new Set([newSelection]));
            if (!this.virtDir) {
                if (oldSelection) {
                    oldSelection.selected = false;
                }
                if (newSelection) {
                    newSelection.selected = true;
                }
            }
            if (event) {
                this.toggleDirective.close();
            }
        }
    }
}
IgxDropDownComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-drop-down',
                template: "<div class=\"igx-drop-down__list\" igxToggle [style.width]=\"width\" [style.height]=\"height\"\n[style.maxHeight]=\"maxHeight\" [attr.id]=\"this.listId\" role=\"listbox\"\n    (onOpening)=\"onToggleOpening($event)\" (onOpened)=\"onToggleOpened()\"\n    (onClosing)=\"onToggleClosing($event)\" (onClosed)=\"onToggleClosed()\">\n    <ng-container *ngIf=\"!collapsed\">\n        <ng-content></ng-content>\n    </ng-container>\n</div>\n",
                providers: [{ provide: IGX_DROPDOWN_BASE, useExisting: IgxDropDownComponent }]
            }] }
];
/** @nocollapse */
IgxDropDownComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: IgxSelectionAPIService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
];
IgxDropDownComponent.propDecorators = {
    virtDir: [{ type: ContentChild, args: [IgxForOfDirective, { read: IgxForOfDirective, static: false },] }],
    toggleDirective: [{ type: ViewChild, args: [IgxToggleDirective, { static: true },] }],
    children: [{ type: ContentChildren, args: [forwardRef(() => IgxDropDownItemComponent), { descendants: true },] }],
    onOpening: [{ type: Output }],
    onOpened: [{ type: Output }],
    onClosing: [{ type: Output }],
    onClosed: [{ type: Output }],
    allowItemsFocus: [{ type: Input }],
    id: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    IgxDropDownComponent.prototype.destroy$;
    /**
     * @type {?}
     * @protected
     */
    IgxDropDownComponent.prototype._scrollPosition;
    /**
     * @type {?}
     * @protected
     */
    IgxDropDownComponent.prototype.virtDir;
    /**
     * @type {?}
     * @protected
     */
    IgxDropDownComponent.prototype.toggleDirective;
    /**
     * @hidden
     * \@internal
     * @type {?}
     */
    IgxDropDownComponent.prototype.children;
    /**
     * Emitted before the dropdown is opened
     *
     * ```html
     * <igx-drop-down (onOpening)='handleOpening()'></igx-drop-down>
     * ```
     * @type {?}
     */
    IgxDropDownComponent.prototype.onOpening;
    /**
     * Emitted after the dropdown is opened
     *
     * ```html
     * <igx-drop-down (onOpened)='handleOpened()'></igx-drop-down>
     * ```
     * @type {?}
     */
    IgxDropDownComponent.prototype.onOpened;
    /**
     * Emitted before the dropdown is closed
     *
     * ```html
     * <igx-drop-down (onClosing)='handleClosing()'></igx-drop-down>
     * ```
     * @type {?}
     */
    IgxDropDownComponent.prototype.onClosing;
    /**
     * Emitted after the dropdown is closed
     *
     * ```html
     * <igx-drop-down (onClosed)='handleClosed()'></igx-drop-down>
     * ```
     * @type {?}
     */
    IgxDropDownComponent.prototype.onClosed;
    /**
     * Gets/sets whether items take focus. Disabled by default.
     * When enabled, drop down items gain tab index and are focused when active -
     * this includes activating the selected item when opening the drop down and moving with keyboard navigation.
     *
     * Note: Keep that focus shift in mind when using the igxDropDownItemNavigation directive
     * and ensure it's placed either on each focusable item or a common ancestor to allow it to handle keyboard events.
     *
     * ```typescript
     * // get
     * let dropDownAllowsItemFocus = this.dropdown.allowItemsFocus;
     * ```
     *
     * ```html
     * <!--set-->
     * <igx-drop-down [allowItemsFocus]='true'></igx-drop-down>
     * ```
     * @type {?}
     */
    IgxDropDownComponent.prototype.allowItemsFocus;
    /**
     * @type {?}
     * @protected
     */
    IgxDropDownComponent.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    IgxDropDownComponent.prototype.cdr;
    /**
     * @type {?}
     * @protected
     */
    IgxDropDownComponent.prototype.selection;
    /**
     * @type {?}
     * @protected
     */
    IgxDropDownComponent.prototype._displayDensityOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZHJvcC1kb3duL2Ryb3AtZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsVUFBVSxFQUNWLFNBQVMsRUFFVCxLQUFLLEVBRUwsU0FBUyxFQUNULFlBQVksRUFFWixNQUFNLEVBQ04sWUFBWSxFQUNaLFFBQVEsRUFDUixNQUFNLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBcUIsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFpQixNQUFNLG9CQUFvQixDQUFDO0FBRXRFLE9BQU8sRUFBbUQsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxtQkFBbUIsRUFBMEIsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QjlFLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxl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QUcsRUFBRSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO3dCQVVqRixNQUFNO3VCQVVOLE1BQU07d0JBVU4sTUFBTTt1QkFVTixNQUFNOzhCQXFCTixLQUFLO2lCQStCTCxLQUFLOzs7Ozs7O0lBekdOLHdDQUE0Qzs7Ozs7SUFDNUMsK0NBQWtDOzs7OztJQUVsQyx1Q0FDMEM7Ozs7O0lBRTFDLCtDQUM4Qzs7Ozs7O0lBTTlDLHdDQUNnRDs7Ozs7Ozs7O0lBU2hELHlDQUMyRDs7Ozs7Ozs7O0lBUzNELHdDQUMyQzs7Ozs7Ozs7O0lBUzNDLHlDQUNrRTs7Ozs7Ozs7O0lBU2xFLHdDQUMyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvQjNDLCtDQUMrQjs7Ozs7SUFxRjNCLDBDQUFnQzs7Ozs7SUFDaEMsbUNBQWdDOzs7OztJQUNoQyx5Q0FBMkM7Ozs7O0lBQzNDLHNEQUFpRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQ29tcG9uZW50LFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBFbGVtZW50UmVmLFxuICAgIGZvcndhcmRSZWYsXG4gICAgUXVlcnlMaXN0LFxuICAgIE9uSW5pdCxcbiAgICBJbnB1dCxcbiAgICBPbkRlc3Ryb3ksXG4gICAgVmlld0NoaWxkLFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIE91dHB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgT3B0aW9uYWwsXG4gICAgSW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4VG9nZ2xlRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy90b2dnbGUvdG9nZ2xlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hEcm9wRG93bkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2Ryb3AtZG93bi1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hEcm9wRG93bkJhc2UgfSBmcm9tICcuL2Ryb3AtZG93bi5iYXNlJztcbmltcG9ydCB7IERyb3BEb3duQWN0aW9uS2V5LCBOYXZpZ2F0ZSB9IGZyb20gJy4vZHJvcC1kb3duLmNvbW1vbic7XG5pbXBvcnQgeyBJR1hfRFJPUERPV05fQkFTRSwgSURyb3BEb3duQmFzZSB9IGZyb20gJy4vZHJvcC1kb3duLmNvbW1vbic7XG5pbXBvcnQgeyBJU2VsZWN0aW9uRXZlbnRBcmdzIH0gZnJvbSAnLi9kcm9wLWRvd24uY29tbW9uJztcbmltcG9ydCB7IENhbmNlbGFibGVFdmVudEFyZ3MsIENhbmNlbGFibGVCcm93c2VyRXZlbnRBcmdzLCBpc0lFIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZWxlY3Rpb24nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSWd4RHJvcERvd25JdGVtQmFzZSB9IGZyb20gJy4vZHJvcC1kb3duLWl0ZW0uYmFzZSc7XG5pbXBvcnQgeyBPdmVybGF5U2V0dGluZ3MgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBJZ3hGb3JPZkRpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvZm9yLW9mL2Zvcl9vZi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERpc3BsYXlEZW5zaXR5VG9rZW4sIElEaXNwbGF5RGVuc2l0eU9wdGlvbnMgfSBmcm9tICcuLi9jb3JlL2RlbnNpdHknO1xuXG4vKipcbiAqICoqSWduaXRlIFVJIGZvciBBbmd1bGFyIERyb3BEb3duKiogLVxuICogW0RvY3VtZW50YXRpb25dKGh0dHBzOi8vd3d3LmluZnJhZ2lzdGljcy5jb20vcHJvZHVjdHMvaWduaXRlLXVpLWFuZ3VsYXIvYW5ndWxhci9jb21wb25lbnRzL2Ryb3BfZG93bi5odG1sKVxuICpcbiAqIFRoZSBJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgRHJvcCBEb3duIGRpc3BsYXlzIGEgc2Nyb2xsYWJsZSBsaXN0IG9mIGl0ZW1zIHdoaWNoIG1heSBiZSB2aXN1YWxseSBncm91cGVkIGFuZFxuICogc3VwcG9ydHMgc2VsZWN0aW9uIG9mIGEgc2luZ2xlIGl0ZW0uIENsaWNraW5nIG9yIHRhcHBpbmcgYW4gaXRlbSBzZWxlY3RzIGl0IGFuZCBjbG9zZXMgdGhlIERyb3AgRG93blxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8aWd4LWRyb3AtZG93bj5cbiAqICAgPGlneC1kcm9wLWRvd24taXRlbSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiIGRpc2FibGVkPXt7aXRlbS5kaXNhYmxlZH19IGlzSGVhZGVyPXt7aXRlbS5oZWFkZXJ9fT5cbiAqICAgICB7eyBpdGVtLnZhbHVlIH19XG4gKiAgIDwvaWd4LWRyb3AtZG93bi1pdGVtPlxuICogPC9pZ3gtZHJvcC1kb3duPlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LWRyb3AtZG93bicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Ryb3AtZG93bi5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBJR1hfRFJPUERPV05fQkFTRSwgdXNlRXhpc3Rpbmc6IElneERyb3BEb3duQ29tcG9uZW50IH1dXG59KVxuZXhwb3J0IGNsYXNzIElneERyb3BEb3duQ29tcG9uZW50IGV4dGVuZHMgSWd4RHJvcERvd25CYXNlIGltcGxlbWVudHMgSURyb3BEb3duQmFzZSwgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICAgIHByb3RlY3RlZCBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgcHJvdGVjdGVkIF9zY3JvbGxQb3NpdGlvbjogbnVtYmVyO1xuXG4gICAgQENvbnRlbnRDaGlsZChJZ3hGb3JPZkRpcmVjdGl2ZSwgeyByZWFkOiBJZ3hGb3JPZkRpcmVjdGl2ZSwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHByb3RlY3RlZCB2aXJ0RGlyOiBJZ3hGb3JPZkRpcmVjdGl2ZTxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZChJZ3hUb2dnbGVEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIHRvZ2dsZURpcmVjdGl2ZTogSWd4VG9nZ2xlRGlyZWN0aXZlO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBJZ3hEcm9wRG93bkl0ZW1Db21wb25lbnQpLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gICAgcHVibGljIGNoaWxkcmVuOiBRdWVyeUxpc3Q8SWd4RHJvcERvd25JdGVtQmFzZT47XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIGJlZm9yZSB0aGUgZHJvcGRvd24gaXMgb3BlbmVkXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1kcm9wLWRvd24gKG9uT3BlbmluZyk9J2hhbmRsZU9wZW5pbmcoKSc+PC9pZ3gtZHJvcC1kb3duPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbk9wZW5pbmcgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmNlbGFibGVFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIGFmdGVyIHRoZSBkcm9wZG93biBpcyBvcGVuZWRcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWRyb3AtZG93biAob25PcGVuZWQpPSdoYW5kbGVPcGVuZWQoKSc+PC9pZ3gtZHJvcC1kb3duPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbk9wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgYmVmb3JlIHRoZSBkcm9wZG93biBpcyBjbG9zZWRcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWRyb3AtZG93biAob25DbG9zaW5nKT0naGFuZGxlQ2xvc2luZygpJz48L2lneC1kcm9wLWRvd24+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uQ2xvc2luZyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuY2VsYWJsZUJyb3dzZXJFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIGFmdGVyIHRoZSBkcm9wZG93biBpcyBjbG9zZWRcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWRyb3AtZG93biAob25DbG9zZWQpPSdoYW5kbGVDbG9zZWQoKSc+PC9pZ3gtZHJvcC1kb3duPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB3aGV0aGVyIGl0ZW1zIHRha2UgZm9jdXMuIERpc2FibGVkIGJ5IGRlZmF1bHQuXG4gICAgICogV2hlbiBlbmFibGVkLCBkcm9wIGRvd24gaXRlbXMgZ2FpbiB0YWIgaW5kZXggYW5kIGFyZSBmb2N1c2VkIHdoZW4gYWN0aXZlIC1cbiAgICAgKiB0aGlzIGluY2x1ZGVzIGFjdGl2YXRpbmcgdGhlIHNlbGVjdGVkIGl0ZW0gd2hlbiBvcGVuaW5nIHRoZSBkcm9wIGRvd24gYW5kIG1vdmluZyB3aXRoIGtleWJvYXJkIG5hdmlnYXRpb24uXG4gICAgICpcbiAgICAgKiBOb3RlOiBLZWVwIHRoYXQgZm9jdXMgc2hpZnQgaW4gbWluZCB3aGVuIHVzaW5nIHRoZSBpZ3hEcm9wRG93bkl0ZW1OYXZpZ2F0aW9uIGRpcmVjdGl2ZVxuICAgICAqIGFuZCBlbnN1cmUgaXQncyBwbGFjZWQgZWl0aGVyIG9uIGVhY2ggZm9jdXNhYmxlIGl0ZW0gb3IgYSBjb21tb24gYW5jZXN0b3IgdG8gYWxsb3cgaXQgdG8gaGFuZGxlIGtleWJvYXJkIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRcbiAgICAgKiBsZXQgZHJvcERvd25BbGxvd3NJdGVtRm9jdXMgPSB0aGlzLmRyb3Bkb3duLmFsbG93SXRlbXNGb2N1cztcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGlneC1kcm9wLWRvd24gW2FsbG93SXRlbXNGb2N1c109J3RydWUnPjwvaWd4LWRyb3AtZG93bj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBhbGxvd0l0ZW1zRm9jdXMgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGdldCBmb2N1c2VkSXRlbSgpOiBJZ3hEcm9wRG93bkl0ZW1CYXNlIHtcbiAgICAgICAgaWYgKHRoaXMudmlydERpcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWRJdGVtICYmIHRoaXMuX2ZvY3VzZWRJdGVtLmluZGV4ICE9PSAtMSA/XG4gICAgICAgICAgICAodGhpcy5jaGlsZHJlbi5maW5kKGUgPT4gZS5pbmRleCA9PT0gdGhpcy5fZm9jdXNlZEl0ZW0uaW5kZXgpIHx8IG51bGwpIDpcbiAgICAgICAgICAgIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWRJdGVtO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZm9jdXNlZEl0ZW0odmFsdWU6IElneERyb3BEb3duSXRlbUJhc2UpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uY2xlYXIoYCR7dGhpcy5pZH0tYWN0aXZlYCk7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c2VkSXRlbSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZm9jdXNlZEl0ZW0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMudmlydERpcikge1xuICAgICAgICAgICAgdGhpcy5fZm9jdXNlZEl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLnZhbHVlLFxuICAgICAgICAgICAgICAgIGluZGV4OiB2YWx1ZS5pbmRleFxuICAgICAgICAgICAgfSBhcyBJZ3hEcm9wRG93bkl0ZW1CYXNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLnNldChgJHt0aGlzLmlkfS1hY3RpdmVgLCBuZXcgU2V0KFt0aGlzLl9mb2N1c2VkSXRlbV0pKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIGdldCBpZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuICAgIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlRGlyZWN0aXZlLmlkID0gdmFsdWU7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLnNldCh2YWx1ZSwgdGhpcy5zZWxlY3Rpb24uZ2V0KHRoaXMuaWQpKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uY2xlYXIodGhpcy5pZCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLnNldCh2YWx1ZSwgdGhpcy5zZWxlY3Rpb24uZ2V0KGAke3RoaXMuaWR9LWFjdGl2ZWApKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uY2xlYXIoYCR7dGhpcy5pZH0tYWN0aXZlYCk7XG4gICAgICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqIElkIG9mIHRoZSBpbnRlcm5hbCBsaXN0Ym94IG9mIHRoZSBkcm9wIGRvd24gKi9cbiAgICBwdWJsaWMgZ2V0IGxpc3RJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgKyAnLWxpc3QnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbVxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjdXJyZW50SXRlbSA9IHRoaXMuZHJvcGRvd24uc2VsZWN0ZWRJdGVtO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWRJdGVtKCk6IElneERyb3BEb3duSXRlbUJhc2Uge1xuICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGlvbi5maXJzdF9pdGVtKHRoaXMuaWQpO1xuICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRJdGVtO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgaWYgdGhlIGRyb3Bkb3duIGlzIGNvbGxhcHNlZFxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc0NvbGxhcHNlZCA9IHRoaXMuZHJvcGRvd24uY29sbGFwc2VkO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgY29sbGFwc2VkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50b2dnbGVEaXJlY3RpdmUuY29sbGFwc2VkO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgc2Nyb2xsQ29udGFpbmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2dnbGVEaXJlY3RpdmUuZWxlbWVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGNvbGxlY3Rpb25MZW5ndGgoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpcnREaXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZpcnREaXIudG90YWxJdGVtQ291bnQgfHwgdGhpcy52aXJ0RGlyLmlneEZvck9mLmxlbmd0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHByb3RlY3RlZCBzZWxlY3Rpb246IElneFNlbGVjdGlvbkFQSVNlcnZpY2UsXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRGlzcGxheURlbnNpdHlUb2tlbikgcHJvdGVjdGVkIF9kaXNwbGF5RGVuc2l0eU9wdGlvbnM6IElEaXNwbGF5RGVuc2l0eU9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgY2RyLCBfZGlzcGxheURlbnNpdHlPcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVucyB0aGUgZHJvcGRvd25cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmRyb3Bkb3duLm9wZW4oKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgb3BlbihvdmVybGF5U2V0dGluZ3M/OiBPdmVybGF5U2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy50b2dnbGVEaXJlY3RpdmUub3BlbihvdmVybGF5U2V0dGluZ3MpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbFBvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSBkcm9wZG93blxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZHJvcGRvd24uY2xvc2UoKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlRGlyZWN0aXZlLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgZHJvcGRvd25cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmRyb3Bkb3duLnRvZ2dsZSgpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyB0b2dnbGUob3ZlcmxheVNldHRpbmdzPzogT3ZlcmxheVNldHRpbmdzKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbGxhcHNlZCB8fCB0aGlzLnRvZ2dsZURpcmVjdGl2ZS5pc0Nsb3NpbmcpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbihvdmVybGF5U2V0dGluZ3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGFuIGl0ZW0gYnkgaW5kZXhcbiAgICAgKiBAcGFyYW0gaW5kZXggb2YgdGhlIGl0ZW0gdG8gc2VsZWN0OyBJZiB0aGUgZHJvcCBkb3duIHVzZXMgKmlneEZvciwgcGFzcyB0aGUgaW5kZXggaW4gZGF0YVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRTZWxlY3RlZEl0ZW0oaW5kZXg6IG51bWJlcikge1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5ld1NlbGVjdGlvbjogSWd4RHJvcERvd25JdGVtQmFzZTtcbiAgICAgICAgaWYgKHRoaXMudmlydERpcikge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZpcnREaXIuaWd4Rm9yT2ZbaW5kZXhdLFxuICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICB9IGFzIElneERyb3BEb3duSXRlbUJhc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdTZWxlY3Rpb24gPSB0aGlzLml0ZW1zW2luZGV4XTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdEl0ZW0obmV3U2VsZWN0aW9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIGl0ZW0gb24gdGhlIHNwZWNpZmllZCBpbmRleFxuICAgICAqIElmIHRoZSBkYXRhIGluIHRoZSBkcm9wLWRvd24gaXMgdmlydHVhbGl6ZWQsIHBhc3MgdGhlIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSB2aXJ0dWFsaXplZCBkYXRhLlxuICAgICAqIEBwYXJhbSBuZXdJbmRleCBudW1iZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgbmF2aWdhdGVJdGVtKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudmlydERpcikge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSB8fCBpbmRleCA+PSB0aGlzLmNvbGxlY3Rpb25MZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBpbmRleCA+ICh0aGlzLmZvY3VzZWRJdGVtID8gdGhpcy5mb2N1c2VkSXRlbS5pbmRleCA6IC0xKSA/IE5hdmlnYXRlLkRvd24gOiBOYXZpZ2F0ZS5VcDtcbiAgICAgICAgICAgIGNvbnN0IHN1YlJlcXVpcmVkID0gdGhpcy5pc0luZGV4T3V0T2ZCb3VuZHMoaW5kZXgsIGRpcmVjdGlvbik7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWRJdGVtID0ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZpcnREaXIuaWd4Rm9yT2ZbaW5kZXhdLFxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICAgICAgfSBhcyBJZ3hEcm9wRG93bkl0ZW1CYXNlO1xuICAgICAgICAgICAgaWYgKHN1YlJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXJ0RGlyLnNjcm9sbFRvKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdWJSZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlydERpci5vbkNodW5rTG9hZC5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2tpcEhlYWRlcihkaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNraXBIZWFkZXIoZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLm5hdmlnYXRlSXRlbShpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYWxsb3dJdGVtc0ZvY3VzICYmIHRoaXMuZm9jdXNlZEl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZEl0ZW0uZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaXNJbmRleE91dE9mQm91bmRzKGluZGV4OiBudW1iZXIsIGRpcmVjdGlvbjogTmF2aWdhdGUpIHtcbiAgICAgICAgY29uc3QgdmlydFN0YXRlID0gdGhpcy52aXJ0RGlyLnN0YXRlO1xuICAgICAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnZpcnREaXIuZ2V0VmVydGljYWxTY3JvbGwoKS5zY3JvbGxUb3A7XG4gICAgICAgIGNvbnN0IGl0ZW1Qb3NpdGlvbiA9IHRoaXMudmlydERpci5nZXRTY3JvbGxGb3JJbmRleChpbmRleCwgZGlyZWN0aW9uID09PSBOYXZpZ2F0ZS5Eb3duKTtcbiAgICAgICAgY29uc3QgaW5kZXhPdXRPZkNodW5rID0gaW5kZXggPCB2aXJ0U3RhdGUuc3RhcnRJbmRleCB8fCBpbmRleCA+IHZpcnRTdGF0ZS5jaHVua1NpemUgKyB2aXJ0U3RhdGUuc3RhcnRJbmRleDtcbiAgICAgICAgY29uc3Qgc2Nyb2xsTmVlZGVkID0gZGlyZWN0aW9uID09PSBOYXZpZ2F0ZS5Eb3duID8gY3VycmVudFBvc2l0aW9uIDwgaXRlbVBvc2l0aW9uIDogY3VycmVudFBvc2l0aW9uID4gaXRlbVBvc2l0aW9uO1xuICAgICAgICBjb25zdCBzdWJSZXF1aXJlZCA9IGluZGV4T3V0T2ZDaHVuayB8fCBzY3JvbGxOZWVkZWQ7XG4gICAgICAgIHJldHVybiBzdWJSZXF1aXJlZDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2tpcEhlYWRlcihkaXJlY3Rpb246IE5hdmlnYXRlKSB7XG4gICAgICAgIGlmICghdGhpcy5mb2N1c2VkSXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWRJdGVtLmlzSGVhZGVyIHx8IHRoaXMuZm9jdXNlZEl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IE5hdmlnYXRlLlVwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVByZXYoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZU5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgdXBkYXRlU2Nyb2xsUG9zaXRpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy52aXJ0RGlyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgdGhpcy52aXJ0RGlyLnNjcm9sbFRvKDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0YXJnZXRTY3JvbGwgPSB0aGlzLnZpcnREaXIuZ2V0U2Nyb2xsRm9ySW5kZXgodGhpcy5zZWxlY3RlZEl0ZW0uaW5kZXgpO1xuICAgICAgICBjb25zdCBpdGVtc0luVmlldyA9IHRoaXMudmlydERpci5pZ3hGb3JDb250YWluZXJTaXplIC8gdGhpcy52aXJ0RGlyLmlneEZvckl0ZW1TaXplO1xuICAgICAgICB0YXJnZXRTY3JvbGwgLT0gKGl0ZW1zSW5WaWV3IC8gMiAtIDEpICogdGhpcy52aXJ0RGlyLmlneEZvckl0ZW1TaXplO1xuICAgICAgICB0aGlzLnZpcnREaXIuZ2V0VmVydGljYWxTY3JvbGwoKS5zY3JvbGxUb3AgPSB0YXJnZXRTY3JvbGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgb25Ub2dnbGVPcGVuaW5nKGU6IENhbmNlbGFibGVFdmVudEFyZ3MpIHtcbiAgICAgICAgdGhpcy5vbk9wZW5pbmcuZW1pdChlKTtcbiAgICAgICAgaWYgKGUuY2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnZpcnREaXIgJiYgdGhpcy5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9JdGVtKHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy52aXJ0RGlyKSB7XG4gICAgICAgICAgICB0aGlzLnZpcnREaXIuZ2V0VmVydGljYWxTY3JvbGwoKS5zY3JvbGxUb3AgPSB0aGlzLl9zY3JvbGxQb3NpdGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIG9uVG9nZ2xlT3BlbmVkKCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbTtcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzZWRJdGVtLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWxsb3dJdGVtc0ZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlRmlyc3QoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uT3BlbmVkLmVtaXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBvblRvZ2dsZUNsb3NpbmcoZTogQ2FuY2VsYWJsZUJyb3dzZXJFdmVudEFyZ3MpIHtcbiAgICAgICAgdGhpcy5vbkNsb3NpbmcuZW1pdChlKTtcbiAgICAgICAgaWYgKHRoaXMudmlydERpcikge1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPSB0aGlzLnZpcnREaXIuZ2V0VmVydGljYWxTY3JvbGwoKS5zY3JvbGxUb3A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBvblRvZ2dsZUNsb3NlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2ZvY3VzZWRJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c2VkSXRlbS5mb2N1c2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbkNsb3NlZC5lbWl0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcih0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uY2xlYXIoYCR7dGhpcy5pZH0tYWN0aXZlYCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNjcm9sbFRvSXRlbShpdGVtOiBJZ3hEcm9wRG93bkl0ZW1CYXNlKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1Qb3NpdGlvbiA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsUG9zaXRpb24oaXRlbSk7XG5cbiAgICAgICAgLy8gIGluIElFMTEgc2V0dGluZyBzY3Ryb2xsVG9wIGlzIHNvbWVob3cgc2xvdyBhbmQgZm9yY2VzIGRyb3Bkb3duXG4gICAgICAgIC8vICB0byBhcHBlYXIgb24gc2NyZWVuIGJlZm9yZSBhbmltYXRpb24gc3RhcnQuIEFzIGEgcmVzdWx0IGRyb3Bkb3duXG4gICAgICAgIC8vICBmbGlja2VycyBiYWRseS4gVGhpcyBpcyB3aHkgd2Ugc2V0IHNjcm9sbFRvcCBqdXN0IGEgbGl0dGxlIGxhdGVyXG4gICAgICAgIC8vICBhbGxvd2luZyBhbmltYXRpb24gdG8gc3RhcnQgYW5kIHByZXZlbnQgZHJvcGRvd24gZmxpY2tlcmluZ1xuICAgICAgICBpZiAoaXNJRSgpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgPSAoaXRlbVBvc2l0aW9uKTtcbiAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wID0gKGl0ZW1Qb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgY2FsY3VsYXRlU2Nyb2xsUG9zaXRpb24oaXRlbTogSWd4RHJvcERvd25JdGVtQmFzZSk6IG51bWJlciB7XG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbGVtZW50UmVjdCA9IGl0ZW0uZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBwYXJlbnRSZWN0ID0gdGhpcy5zY3JvbGxDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHNjcm9sbERlbHRhID0gcGFyZW50UmVjdC50b3AgLSBlbGVtZW50UmVjdC50b3A7XG4gICAgICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9IHRoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCAtIHNjcm9sbERlbHRhO1xuXG4gICAgICAgIGNvbnN0IGRyb3BEb3duSGVpZ2h0ID0gdGhpcy5zY3JvbGxDb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICAgICAgICBzY3JvbGxQb3NpdGlvbiAtPSBkcm9wRG93bkhlaWdodCAvIDI7XG4gICAgICAgIHNjcm9sbFBvc2l0aW9uICs9IGl0ZW0uZWxlbWVudEhlaWdodCAvIDI7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3Ioc2Nyb2xsUG9zaXRpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlRGlyZWN0aXZlLmlkID0gdGhpcy5pZDtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpcnREaXIpIHtcbiAgICAgICAgICAgIHRoaXMudmlydERpci5pZ3hGb3JJdGVtU2l6ZSA9IDI4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEtleWRvd24gSGFuZGxlciAqL1xuICAgIHB1YmxpYyBvbkl0ZW1BY3Rpb25LZXkoa2V5OiBEcm9wRG93bkFjdGlvbktleSwgZXZlbnQ/OiBFdmVudCkge1xuICAgICAgICBzdXBlci5vbkl0ZW1BY3Rpb25LZXkoa2V5LCBldmVudCk7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWaXJ0dWFsIHNjcm9sbCBpbXBsZW1lbnRhdGlvblxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIG5hdmlnYXRlRmlyc3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpcnREaXIpIHtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGVJdGVtKDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIubmF2aWdhdGVGaXJzdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgbmF2aWdhdGVMYXN0KCkge1xuICAgICAgICBpZiAodGhpcy52aXJ0RGlyKSB7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlSXRlbSh0aGlzLnZpcnREaXIudG90YWxJdGVtQ291bnQgPyB0aGlzLnZpcnREaXIudG90YWxJdGVtQ291bnQgLSAxIDogdGhpcy52aXJ0RGlyLmlneEZvck9mLmxlbmd0aCAtIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIubmF2aWdhdGVMYXN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBuYXZpZ2F0ZU5leHQoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpcnREaXIpIHtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGVJdGVtKHRoaXMuX2ZvY3VzZWRJdGVtID8gdGhpcy5fZm9jdXNlZEl0ZW0uaW5kZXggKyAxIDogMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlci5uYXZpZ2F0ZU5leHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIG5hdmlnYXRlUHJldigpIHtcbiAgICAgICAgaWYgKHRoaXMudmlydERpcikge1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZUl0ZW0odGhpcy5fZm9jdXNlZEl0ZW0gPyB0aGlzLl9mb2N1c2VkSXRlbS5pbmRleCAtIDEgOiAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLm5hdmlnYXRlUHJldigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgYG9uU2VsZWN0aW9uYCBlbWl0IGFuZCB0aGUgZHJvcCBkb3duIHRvZ2dsZSB3aGVuIHNlbGVjdGlvbiBjaGFuZ2VzXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqIEBwYXJhbSBuZXdTZWxlY3Rpb25cbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0SXRlbShuZXdTZWxlY3Rpb24/OiBJZ3hEcm9wRG93bkl0ZW1CYXNlLCBldmVudD86IEV2ZW50KSB7XG4gICAgICAgIGNvbnN0IG9sZFNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xuICAgICAgICBpZiAoIW5ld1NlbGVjdGlvbikge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uID0gdGhpcy5mb2N1c2VkSXRlbTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3U2VsZWN0aW9uID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiBpbnN0YW5jZW9mIElneERyb3BEb3duSXRlbUJhc2UgJiYgbmV3U2VsZWN0aW9uLmlzSGVhZGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmlydERpcikge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXdTZWxlY3Rpb24udmFsdWUsXG4gICAgICAgICAgICAgICAgaW5kZXg6IG5ld1NlbGVjdGlvbi5pbmRleFxuICAgICAgICAgICAgfSBhcyBJZ3hEcm9wRG93bkl0ZW1CYXNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFyZ3M6IElTZWxlY3Rpb25FdmVudEFyZ3MgPSB7IG9sZFNlbGVjdGlvbiwgbmV3U2VsZWN0aW9uLCBjYW5jZWw6IGZhbHNlIH07XG4gICAgICAgIHRoaXMub25TZWxlY3Rpb24uZW1pdChhcmdzKTtcblxuICAgICAgICBpZiAoIWFyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5zZXQodGhpcy5pZCwgbmV3IFNldChbbmV3U2VsZWN0aW9uXSkpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnZpcnREaXIpIHtcbiAgICAgICAgICAgICAgICBpZiAob2xkU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG9sZFNlbGVjdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmV3U2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1NlbGVjdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVEaXJlY3RpdmUuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19