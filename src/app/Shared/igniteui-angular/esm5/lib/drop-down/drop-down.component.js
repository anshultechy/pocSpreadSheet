/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var IgxDropDownComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxDropDownComponent, _super);
    function IgxDropDownComponent(elementRef, cdr, selection, _displayDensityOptions) {
        var _this = _super.call(this, elementRef, cdr, _displayDensityOptions) || this;
        _this.elementRef = elementRef;
        _this.cdr = cdr;
        _this.selection = selection;
        _this._displayDensityOptions = _displayDensityOptions;
        _this.destroy$ = new Subject();
        /**
         * Emitted before the dropdown is opened
         *
         * ```html
         * <igx-drop-down (onOpening)='handleOpening()'></igx-drop-down>
         * ```
         */
        _this.onOpening = new EventEmitter();
        /**
         * Emitted after the dropdown is opened
         *
         * ```html
         * <igx-drop-down (onOpened)='handleOpened()'></igx-drop-down>
         * ```
         */
        _this.onOpened = new EventEmitter();
        /**
         * Emitted before the dropdown is closed
         *
         * ```html
         * <igx-drop-down (onClosing)='handleClosing()'></igx-drop-down>
         * ```
         */
        _this.onClosing = new EventEmitter();
        /**
         * Emitted after the dropdown is closed
         *
         * ```html
         * <igx-drop-down (onClosed)='handleClosed()'></igx-drop-down>
         * ```
         */
        _this.onClosed = new EventEmitter();
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
        _this.allowItemsFocus = false;
        return _this;
    }
    Object.defineProperty(IgxDropDownComponent.prototype, "focusedItem", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.virtDir) {
                return this._focusedItem && this._focusedItem.index !== -1 ?
                    (this.children.find(function (e) { return e.index === _this._focusedItem.index; }) || null) :
                    null;
            }
            return this._focusedItem;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                this.selection.clear(this.id + "-active");
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
            this.selection.set(this.id + "-active", new Set([this._focusedItem]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownComponent.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return this._id;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.toggleDirective.id = value;
            this.selection.set(value, this.selection.get(this.id));
            this.selection.clear(this.id);
            this.selection.set(value, this.selection.get(this.id + "-active"));
            this.selection.clear(this.id + "-active");
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownComponent.prototype, "listId", {
        /** Id of the internal listbox of the drop down */
        get: /**
         * Id of the internal listbox of the drop down
         * @return {?}
         */
        function () {
            return this.id + '-list';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownComponent.prototype, "selectedItem", {
        /**
         * Get currently selected item
         *
         * ```typescript
         * let currentItem = this.dropdown.selectedItem;
         * ```
         */
        get: /**
         * Get currently selected item
         *
         * ```typescript
         * let currentItem = this.dropdown.selectedItem;
         * ```
         * @return {?}
         */
        function () {
            /** @type {?} */
            var selectedItem = this.selection.first_item(this.id);
            if (selectedItem) {
                return selectedItem;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownComponent.prototype, "collapsed", {
        /**
         * Gets if the dropdown is collapsed
         *
         * ```typescript
         * let isCollapsed = this.dropdown.collapsed;
         * ```
         */
        get: /**
         * Gets if the dropdown is collapsed
         *
         * ```typescript
         * let isCollapsed = this.dropdown.collapsed;
         * ```
         * @return {?}
         */
        function () {
            return this.toggleDirective.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownComponent.prototype, "scrollContainer", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.toggleDirective.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownComponent.prototype, "collectionLength", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            if (this.virtDir) {
                return this.virtDir.totalItemCount || this.virtDir.igxForOf.length;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens the dropdown
     *
     * ```typescript
     * this.dropdown.open();
     * ```
     */
    /**
     * Opens the dropdown
     *
     * ```typescript
     * this.dropdown.open();
     * ```
     * @param {?=} overlaySettings
     * @return {?}
     */
    IgxDropDownComponent.prototype.open = /**
     * Opens the dropdown
     *
     * ```typescript
     * this.dropdown.open();
     * ```
     * @param {?=} overlaySettings
     * @return {?}
     */
    function (overlaySettings) {
        this.toggleDirective.open(overlaySettings);
        this.updateScrollPosition();
    };
    /**
     * Closes the dropdown
     *
     * ```typescript
     * this.dropdown.close();
     * ```
     */
    /**
     * Closes the dropdown
     *
     * ```typescript
     * this.dropdown.close();
     * ```
     * @return {?}
     */
    IgxDropDownComponent.prototype.close = /**
     * Closes the dropdown
     *
     * ```typescript
     * this.dropdown.close();
     * ```
     * @return {?}
     */
    function () {
        this.toggleDirective.close();
    };
    /**
     * Toggles the dropdown
     *
     * ```typescript
     * this.dropdown.toggle();
     * ```
     */
    /**
     * Toggles the dropdown
     *
     * ```typescript
     * this.dropdown.toggle();
     * ```
     * @param {?=} overlaySettings
     * @return {?}
     */
    IgxDropDownComponent.prototype.toggle = /**
     * Toggles the dropdown
     *
     * ```typescript
     * this.dropdown.toggle();
     * ```
     * @param {?=} overlaySettings
     * @return {?}
     */
    function (overlaySettings) {
        if (this.collapsed || this.toggleDirective.isClosing) {
            this.open(overlaySettings);
        }
        else {
            this.close();
        }
    };
    /**
     * Select an item by index
     * @param index of the item to select; If the drop down uses *igxFor, pass the index in data
     */
    /**
     * Select an item by index
     * @param {?} index of the item to select; If the drop down uses *igxFor, pass the index in data
     * @return {?}
     */
    IgxDropDownComponent.prototype.setSelectedItem = /**
     * Select an item by index
     * @param {?} index of the item to select; If the drop down uses *igxFor, pass the index in data
     * @return {?}
     */
    function (index) {
        if (index < 0 || index >= this.items.length) {
            return;
        }
        /** @type {?} */
        var newSelection;
        if (this.virtDir) {
            newSelection = (/** @type {?} */ ({
                value: this.virtDir.igxForOf[index],
                index: index
            }));
        }
        else {
            newSelection = this.items[index];
        }
        this.selectItem(newSelection);
    };
    /**
     * Navigates to the item on the specified index
     * If the data in the drop-down is virtualized, pass the index of the item in the virtualized data.
     * @param newIndex number
     */
    /**
     * Navigates to the item on the specified index
     * If the data in the drop-down is virtualized, pass the index of the item in the virtualized data.
     * @param {?} index
     * @return {?}
     */
    IgxDropDownComponent.prototype.navigateItem = /**
     * Navigates to the item on the specified index
     * If the data in the drop-down is virtualized, pass the index of the item in the virtualized data.
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        if (this.virtDir) {
            if (index === -1 || index >= this.collectionLength) {
                return;
            }
            /** @type {?} */
            var direction_1 = index > (this.focusedItem ? this.focusedItem.index : -1) ? Navigate.Down : Navigate.Up;
            /** @type {?} */
            var subRequired = this.isIndexOutOfBounds(index, direction_1);
            this.focusedItem = (/** @type {?} */ ({
                value: this.virtDir.igxForOf[index],
                index: index
            }));
            if (subRequired) {
                this.virtDir.scrollTo(index);
            }
            if (subRequired) {
                this.virtDir.onChunkLoad.pipe(take(1)).subscribe(function () {
                    _this.skipHeader(direction_1);
                });
            }
            else {
                this.skipHeader(direction_1);
            }
        }
        else {
            _super.prototype.navigateItem.call(this, index);
        }
        if (this.allowItemsFocus && this.focusedItem) {
            this.focusedItem.element.nativeElement.focus();
            this.cdr.markForCheck();
        }
    };
    /**
     * @private
     * @param {?} index
     * @param {?} direction
     * @return {?}
     */
    IgxDropDownComponent.prototype.isIndexOutOfBounds = /**
     * @private
     * @param {?} index
     * @param {?} direction
     * @return {?}
     */
    function (index, direction) {
        /** @type {?} */
        var virtState = this.virtDir.state;
        /** @type {?} */
        var currentPosition = this.virtDir.getVerticalScroll().scrollTop;
        /** @type {?} */
        var itemPosition = this.virtDir.getScrollForIndex(index, direction === Navigate.Down);
        /** @type {?} */
        var indexOutOfChunk = index < virtState.startIndex || index > virtState.chunkSize + virtState.startIndex;
        /** @type {?} */
        var scrollNeeded = direction === Navigate.Down ? currentPosition < itemPosition : currentPosition > itemPosition;
        /** @type {?} */
        var subRequired = indexOutOfChunk || scrollNeeded;
        return subRequired;
    };
    /**
     * @protected
     * @param {?} direction
     * @return {?}
     */
    IgxDropDownComponent.prototype.skipHeader = /**
     * @protected
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
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
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxDropDownComponent.prototype.updateScrollPosition = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        if (!this.virtDir) {
            return;
        }
        if (!this.selectedItem) {
            this.virtDir.scrollTo(0);
            return;
        }
        /** @type {?} */
        var targetScroll = this.virtDir.getScrollForIndex(this.selectedItem.index);
        /** @type {?} */
        var itemsInView = this.virtDir.igxForContainerSize / this.virtDir.igxForItemSize;
        targetScroll -= (itemsInView / 2 - 1) * this.virtDir.igxForItemSize;
        this.virtDir.getVerticalScroll().scrollTop = targetScroll;
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @param {?} e
     * @return {?}
     */
    IgxDropDownComponent.prototype.onToggleOpening = /**
     * @hidden \@internal
     * @param {?} e
     * @return {?}
     */
    function (e) {
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
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxDropDownComponent.prototype.onToggleOpened = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        if (this.selectedItem) {
            this.focusedItem = this.selectedItem;
            this._focusedItem.focused = true;
        }
        else if (this.allowItemsFocus) {
            this.navigateFirst();
        }
        this.onOpened.emit();
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @param {?} e
     * @return {?}
     */
    IgxDropDownComponent.prototype.onToggleClosing = /**
     * @hidden \@internal
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.onClosing.emit(e);
        if (this.virtDir) {
            this._scrollPosition = this.virtDir.getVerticalScroll().scrollTop;
        }
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxDropDownComponent.prototype.onToggleClosed = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        if (this._focusedItem) {
            this._focusedItem.focused = false;
        }
        this.onClosed.emit();
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxDropDownComponent.prototype.ngOnDestroy = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.selection.clear(this.id);
        this.selection.clear(this.id + "-active");
    };
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    IgxDropDownComponent.prototype.scrollToItem = /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        /** @type {?} */
        var itemPosition = this.calculateScrollPosition(item);
        //  in IE11 setting sctrollTop is somehow slow and forces dropdown
        //  to appear on screen before animation start. As a result dropdown
        //  flickers badly. This is why we set scrollTop just a little later
        //  allowing animation to start and prevent dropdown flickering
        if (isIE()) {
            setTimeout(function () {
                _this.scrollContainer.scrollTop = (itemPosition);
            }, 1);
        }
        else {
            this.scrollContainer.scrollTop = (itemPosition);
        }
    };
    /** @hidden @internal */
    /**
     * @hidden \@internal
     * @param {?} item
     * @return {?}
     */
    IgxDropDownComponent.prototype.calculateScrollPosition = /**
     * @hidden \@internal
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item) {
            return 0;
        }
        /** @type {?} */
        var elementRect = item.element.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var parentRect = this.scrollContainer.getBoundingClientRect();
        /** @type {?} */
        var scrollDelta = parentRect.top - elementRect.top;
        /** @type {?} */
        var scrollPosition = this.scrollContainer.scrollTop - scrollDelta;
        /** @type {?} */
        var dropDownHeight = this.scrollContainer.clientHeight;
        scrollPosition -= dropDownHeight / 2;
        scrollPosition += item.elementHeight / 2;
        return Math.floor(scrollPosition);
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxDropDownComponent.prototype.ngOnInit = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        this.toggleDirective.id = this.id;
    };
    /**
     * @return {?}
     */
    IgxDropDownComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.virtDir) {
            this.virtDir.igxForItemSize = 28;
        }
    };
    /** Keydown Handler */
    /**
     * Keydown Handler
     * @param {?} key
     * @param {?=} event
     * @return {?}
     */
    IgxDropDownComponent.prototype.onItemActionKey = /**
     * Keydown Handler
     * @param {?} key
     * @param {?=} event
     * @return {?}
     */
    function (key, event) {
        _super.prototype.onItemActionKey.call(this, key, event);
        this.close();
    };
    /**
     * Virtual scroll implementation
     * @hidden @internal
     */
    /**
     * Virtual scroll implementation
     * @hidden \@internal
     * @return {?}
     */
    IgxDropDownComponent.prototype.navigateFirst = /**
     * Virtual scroll implementation
     * @hidden \@internal
     * @return {?}
     */
    function () {
        if (this.virtDir) {
            this.navigateItem(0);
        }
        else {
            _super.prototype.navigateFirst.call(this);
        }
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxDropDownComponent.prototype.navigateLast = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        if (this.virtDir) {
            this.navigateItem(this.virtDir.totalItemCount ? this.virtDir.totalItemCount - 1 : this.virtDir.igxForOf.length - 1);
        }
        else {
            _super.prototype.navigateLast.call(this);
        }
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxDropDownComponent.prototype.navigateNext = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        if (this.virtDir) {
            this.navigateItem(this._focusedItem ? this._focusedItem.index + 1 : 0);
        }
        else {
            _super.prototype.navigateNext.call(this);
        }
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxDropDownComponent.prototype.navigatePrev = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        if (this.virtDir) {
            this.navigateItem(this._focusedItem ? this._focusedItem.index - 1 : 0);
        }
        else {
            _super.prototype.navigatePrev.call(this);
        }
    };
    /**
     * Handles the `onSelection` emit and the drop down toggle when selection changes
     * @hidden
     * @internal
     * @param newSelection
     * @param event
     */
    /**
     * Handles the `onSelection` emit and the drop down toggle when selection changes
     * @hidden
     * \@internal
     * @param {?=} newSelection
     * @param {?=} event
     * @return {?}
     */
    IgxDropDownComponent.prototype.selectItem = /**
     * Handles the `onSelection` emit and the drop down toggle when selection changes
     * @hidden
     * \@internal
     * @param {?=} newSelection
     * @param {?=} event
     * @return {?}
     */
    function (newSelection, event) {
        /** @type {?} */
        var oldSelection = this.selectedItem;
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
        var args = { oldSelection: oldSelection, newSelection: newSelection, cancel: false };
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
    };
    IgxDropDownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-drop-down',
                    template: "<div class=\"igx-drop-down__list\" igxToggle [style.width]=\"width\" [style.height]=\"height\"\n[style.maxHeight]=\"maxHeight\" [attr.id]=\"this.listId\" role=\"listbox\"\n    (onOpening)=\"onToggleOpening($event)\" (onOpened)=\"onToggleOpened()\"\n    (onClosing)=\"onToggleClosing($event)\" (onClosed)=\"onToggleClosed()\">\n    <ng-container *ngIf=\"!collapsed\">\n        <ng-content></ng-content>\n    </ng-container>\n</div>\n",
                    providers: [{ provide: IGX_DROPDOWN_BASE, useExisting: IgxDropDownComponent }]
                }] }
    ];
    /** @nocollapse */
    IgxDropDownComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: IgxSelectionAPIService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
    ]; };
    IgxDropDownComponent.propDecorators = {
        virtDir: [{ type: ContentChild, args: [IgxForOfDirective, { read: IgxForOfDirective, static: false },] }],
        toggleDirective: [{ type: ViewChild, args: [IgxToggleDirective, { static: true },] }],
        children: [{ type: ContentChildren, args: [forwardRef(function () { return IgxDropDownItemComponent; }), { descendants: true },] }],
        onOpening: [{ type: Output }],
        onOpened: [{ type: Output }],
        onClosing: [{ type: Output }],
        onClosed: [{ type: Output }],
        allowItemsFocus: [{ type: Input }],
        id: [{ type: Input }]
    };
    return IgxDropDownComponent;
}(IgxDropDownBase));
export { IgxDropDownComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZHJvcC1kb3duL2Ryb3AtZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFVBQVUsRUFDVixTQUFTLEVBRVQsS0FBSyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBRVosTUFBTSxFQUNOLFlBQVksRUFDWixRQUFRLEVBQ1IsTUFBTSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNuRCxPQUFPLEVBQXFCLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBaUIsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RSxPQUFPLEVBQW1ELElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsbUJBQW1CLEVBQTBCLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0I5RTtJQUswQyxnREFBZTtJQWdLckQsOEJB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RCx5Q0FDMkQ7Ozs7Ozs7OztJQVMzRCx3Q0FDMkM7Ozs7Ozs7OztJQVMzQyx5Q0FDa0U7Ozs7Ozs7OztJQVNsRSx3Q0FDMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0IzQywrQ0FDK0I7Ozs7O0lBcUYzQiwwQ0FBZ0M7Ozs7O0lBQ2hDLG1DQUFnQzs7Ozs7SUFDaEMseUNBQTJDOzs7OztJQUMzQyxzREFBaUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgRWxlbWVudFJlZixcbiAgICBmb3J3YXJkUmVmLFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBPbkluaXQsXG4gICAgSW5wdXQsXG4gICAgT25EZXN0cm95LFxuICAgIFZpZXdDaGlsZCxcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIE9wdGlvbmFsLFxuICAgIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneFRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvdG9nZ2xlL3RvZ2dsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4RHJvcERvd25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9kcm9wLWRvd24taXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4RHJvcERvd25CYXNlIH0gZnJvbSAnLi9kcm9wLWRvd24uYmFzZSc7XG5pbXBvcnQgeyBEcm9wRG93bkFjdGlvbktleSwgTmF2aWdhdGUgfSBmcm9tICcuL2Ryb3AtZG93bi5jb21tb24nO1xuaW1wb3J0IHsgSUdYX0RST1BET1dOX0JBU0UsIElEcm9wRG93bkJhc2UgfSBmcm9tICcuL2Ryb3AtZG93bi5jb21tb24nO1xuaW1wb3J0IHsgSVNlbGVjdGlvbkV2ZW50QXJncyB9IGZyb20gJy4vZHJvcC1kb3duLmNvbW1vbic7XG5pbXBvcnQgeyBDYW5jZWxhYmxlRXZlbnRBcmdzLCBDYW5jZWxhYmxlQnJvd3NlckV2ZW50QXJncywgaXNJRSB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgSWd4U2VsZWN0aW9uQVBJU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VsZWN0aW9uJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElneERyb3BEb3duSXRlbUJhc2UgfSBmcm9tICcuL2Ryb3AtZG93bi1pdGVtLmJhc2UnO1xuaW1wb3J0IHsgT3ZlcmxheVNldHRpbmdzIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgSWd4Rm9yT2ZEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2Zvci1vZi9mb3Jfb2YuZGlyZWN0aXZlJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEaXNwbGF5RGVuc2l0eVRva2VuLCBJRGlzcGxheURlbnNpdHlPcHRpb25zIH0gZnJvbSAnLi4vY29yZS9kZW5zaXR5JztcblxuLyoqXG4gKiAqKklnbml0ZSBVSSBmb3IgQW5ndWxhciBEcm9wRG93bioqIC1cbiAqIFtEb2N1bWVudGF0aW9uXShodHRwczovL3d3dy5pbmZyYWdpc3RpY3MuY29tL3Byb2R1Y3RzL2lnbml0ZS11aS1hbmd1bGFyL2FuZ3VsYXIvY29tcG9uZW50cy9kcm9wX2Rvd24uaHRtbClcbiAqXG4gKiBUaGUgSWduaXRlIFVJIGZvciBBbmd1bGFyIERyb3AgRG93biBkaXNwbGF5cyBhIHNjcm9sbGFibGUgbGlzdCBvZiBpdGVtcyB3aGljaCBtYXkgYmUgdmlzdWFsbHkgZ3JvdXBlZCBhbmRcbiAqIHN1cHBvcnRzIHNlbGVjdGlvbiBvZiBhIHNpbmdsZSBpdGVtLiBDbGlja2luZyBvciB0YXBwaW5nIGFuIGl0ZW0gc2VsZWN0cyBpdCBhbmQgY2xvc2VzIHRoZSBEcm9wIERvd25cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgaHRtbFxuICogPGlneC1kcm9wLWRvd24+XG4gKiAgIDxpZ3gtZHJvcC1kb3duLWl0ZW0gKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIiBkaXNhYmxlZD17e2l0ZW0uZGlzYWJsZWR9fSBpc0hlYWRlcj17e2l0ZW0uaGVhZGVyfX0+XG4gKiAgICAge3sgaXRlbS52YWx1ZSB9fVxuICogICA8L2lneC1kcm9wLWRvd24taXRlbT5cbiAqIDwvaWd4LWRyb3AtZG93bj5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lneC1kcm9wLWRvd24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kcm9wLWRvd24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogSUdYX0RST1BET1dOX0JBU0UsIHVzZUV4aXN0aW5nOiBJZ3hEcm9wRG93bkNvbXBvbmVudCB9XVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hEcm9wRG93bkNvbXBvbmVudCBleHRlbmRzIElneERyb3BEb3duQmFzZSBpbXBsZW1lbnRzIElEcm9wRG93bkJhc2UsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgICBwcm90ZWN0ZWQgZGVzdHJveSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgIHByb3RlY3RlZCBfc2Nyb2xsUG9zaXRpb246IG51bWJlcjtcblxuICAgIEBDb250ZW50Q2hpbGQoSWd4Rm9yT2ZEaXJlY3RpdmUsIHsgcmVhZDogSWd4Rm9yT2ZEaXJlY3RpdmUsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcm90ZWN0ZWQgdmlydERpcjogSWd4Rm9yT2ZEaXJlY3RpdmU8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoSWd4VG9nZ2xlRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCB0b2dnbGVEaXJlY3RpdmU6IElneFRvZ2dsZURpcmVjdGl2ZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gSWd4RHJvcERvd25JdGVtQ29tcG9uZW50KSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHB1YmxpYyBjaGlsZHJlbjogUXVlcnlMaXN0PElneERyb3BEb3duSXRlbUJhc2U+O1xuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCBiZWZvcmUgdGhlIGRyb3Bkb3duIGlzIG9wZW5lZFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtZHJvcC1kb3duIChvbk9wZW5pbmcpPSdoYW5kbGVPcGVuaW5nKCknPjwvaWd4LWRyb3AtZG93bj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25PcGVuaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5jZWxhYmxlRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCBhZnRlciB0aGUgZHJvcGRvd24gaXMgb3BlbmVkXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1kcm9wLWRvd24gKG9uT3BlbmVkKT0naGFuZGxlT3BlbmVkKCknPjwvaWd4LWRyb3AtZG93bj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25PcGVuZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIGJlZm9yZSB0aGUgZHJvcGRvd24gaXMgY2xvc2VkXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1kcm9wLWRvd24gKG9uQ2xvc2luZyk9J2hhbmRsZUNsb3NpbmcoKSc+PC9pZ3gtZHJvcC1kb3duPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkNsb3NpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmNlbGFibGVCcm93c2VyRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCBhZnRlciB0aGUgZHJvcGRvd24gaXMgY2xvc2VkXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1kcm9wLWRvd24gKG9uQ2xvc2VkKT0naGFuZGxlQ2xvc2VkKCknPjwvaWd4LWRyb3AtZG93bj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25DbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzL3NldHMgd2hldGhlciBpdGVtcyB0YWtlIGZvY3VzLiBEaXNhYmxlZCBieSBkZWZhdWx0LlxuICAgICAqIFdoZW4gZW5hYmxlZCwgZHJvcCBkb3duIGl0ZW1zIGdhaW4gdGFiIGluZGV4IGFuZCBhcmUgZm9jdXNlZCB3aGVuIGFjdGl2ZSAtXG4gICAgICogdGhpcyBpbmNsdWRlcyBhY3RpdmF0aW5nIHRoZSBzZWxlY3RlZCBpdGVtIHdoZW4gb3BlbmluZyB0aGUgZHJvcCBkb3duIGFuZCBtb3Zpbmcgd2l0aCBrZXlib2FyZCBuYXZpZ2F0aW9uLlxuICAgICAqXG4gICAgICogTm90ZTogS2VlcCB0aGF0IGZvY3VzIHNoaWZ0IGluIG1pbmQgd2hlbiB1c2luZyB0aGUgaWd4RHJvcERvd25JdGVtTmF2aWdhdGlvbiBkaXJlY3RpdmVcbiAgICAgKiBhbmQgZW5zdXJlIGl0J3MgcGxhY2VkIGVpdGhlciBvbiBlYWNoIGZvY3VzYWJsZSBpdGVtIG9yIGEgY29tbW9uIGFuY2VzdG9yIHRvIGFsbG93IGl0IHRvIGhhbmRsZSBrZXlib2FyZCBldmVudHMuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IGRyb3BEb3duQWxsb3dzSXRlbUZvY3VzID0gdGhpcy5kcm9wZG93bi5hbGxvd0l0ZW1zRm9jdXM7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqIDxpZ3gtZHJvcC1kb3duIFthbGxvd0l0ZW1zRm9jdXNdPSd0cnVlJz48L2lneC1kcm9wLWRvd24+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgYWxsb3dJdGVtc0ZvY3VzID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZm9jdXNlZEl0ZW0oKTogSWd4RHJvcERvd25JdGVtQmFzZSB7XG4gICAgICAgIGlmICh0aGlzLnZpcnREaXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb2N1c2VkSXRlbSAmJiB0aGlzLl9mb2N1c2VkSXRlbS5pbmRleCAhPT0gLTEgP1xuICAgICAgICAgICAgKHRoaXMuY2hpbGRyZW4uZmluZChlID0+IGUuaW5kZXggPT09IHRoaXMuX2ZvY3VzZWRJdGVtLmluZGV4KSB8fCBudWxsKSA6XG4gICAgICAgICAgICBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9mb2N1c2VkSXRlbTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGZvY3VzZWRJdGVtKHZhbHVlOiBJZ3hEcm9wRG93bkl0ZW1CYXNlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKGAke3RoaXMuaWR9LWFjdGl2ZWApO1xuICAgICAgICAgICAgdGhpcy5fZm9jdXNlZEl0ZW0gPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2ZvY3VzZWRJdGVtID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLnZpcnREaXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzZWRJdGVtID0ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICBpbmRleDogdmFsdWUuaW5kZXhcbiAgICAgICAgICAgIH0gYXMgSWd4RHJvcERvd25JdGVtQmFzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGlvbi5zZXQoYCR7dGhpcy5pZH0tYWN0aXZlYCwgbmV3IFNldChbdGhpcy5fZm9jdXNlZEl0ZW1dKSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cbiAgICBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnRvZ2dsZURpcmVjdGl2ZS5pZCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5zZXQodmFsdWUsIHRoaXMuc2VsZWN0aW9uLmdldCh0aGlzLmlkKSk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKHRoaXMuaWQpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5zZXQodmFsdWUsIHRoaXMuc2VsZWN0aW9uLmdldChgJHt0aGlzLmlkfS1hY3RpdmVgKSk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKGAke3RoaXMuaWR9LWFjdGl2ZWApO1xuICAgICAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKiBJZCBvZiB0aGUgaW50ZXJuYWwgbGlzdGJveCBvZiB0aGUgZHJvcCBkb3duICovXG4gICAgcHVibGljIGdldCBsaXN0SWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkICsgJy1saXN0JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW1cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY3VycmVudEl0ZW0gPSB0aGlzLmRyb3Bkb3duLnNlbGVjdGVkSXRlbTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkSXRlbSgpOiBJZ3hEcm9wRG93bkl0ZW1CYXNlIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5zZWxlY3Rpb24uZmlyc3RfaXRlbSh0aGlzLmlkKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkSXRlbTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGlmIHRoZSBkcm9wZG93biBpcyBjb2xsYXBzZWRcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNDb2xsYXBzZWQgPSB0aGlzLmRyb3Bkb3duLmNvbGxhcHNlZDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGNvbGxhcHNlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9nZ2xlRGlyZWN0aXZlLmNvbGxhcHNlZDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHNjcm9sbENvbnRhaW5lcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9nZ2xlRGlyZWN0aXZlLmVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBjb2xsZWN0aW9uTGVuZ3RoKCkge1xuICAgICAgICBpZiAodGhpcy52aXJ0RGlyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52aXJ0RGlyLnRvdGFsSXRlbUNvdW50IHx8IHRoaXMudmlydERpci5pZ3hGb3JPZi5sZW5ndGg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwcm90ZWN0ZWQgc2VsZWN0aW9uOiBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlLFxuICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERpc3BsYXlEZW5zaXR5VG9rZW4pIHByb3RlY3RlZCBfZGlzcGxheURlbnNpdHlPcHRpb25zOiBJRGlzcGxheURlbnNpdHlPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNkciwgX2Rpc3BsYXlEZW5zaXR5T3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgdGhlIGRyb3Bkb3duXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5kcm9wZG93bi5vcGVuKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIG9wZW4ob3ZlcmxheVNldHRpbmdzPzogT3ZlcmxheVNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlRGlyZWN0aXZlLm9wZW4ob3ZlcmxheVNldHRpbmdzKTtcbiAgICAgICAgdGhpcy51cGRhdGVTY3JvbGxQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgZHJvcGRvd25cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmRyb3Bkb3duLmNsb3NlKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGNsb3NlKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZURpcmVjdGl2ZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIGRyb3Bkb3duXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5kcm9wZG93bi50b2dnbGUoKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9nZ2xlKG92ZXJsYXlTZXR0aW5ncz86IE92ZXJsYXlTZXR0aW5ncykge1xuICAgICAgICBpZiAodGhpcy5jb2xsYXBzZWQgfHwgdGhpcy50b2dnbGVEaXJlY3RpdmUuaXNDbG9zaW5nKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4ob3ZlcmxheVNldHRpbmdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBhbiBpdGVtIGJ5IGluZGV4XG4gICAgICogQHBhcmFtIGluZGV4IG9mIHRoZSBpdGVtIHRvIHNlbGVjdDsgSWYgdGhlIGRyb3AgZG93biB1c2VzICppZ3hGb3IsIHBhc3MgdGhlIGluZGV4IGluIGRhdGFcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0U2VsZWN0ZWRJdGVtKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZXdTZWxlY3Rpb246IElneERyb3BEb3duSXRlbUJhc2U7XG4gICAgICAgIGlmICh0aGlzLnZpcnREaXIpIHtcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy52aXJ0RGlyLmlneEZvck9mW2luZGV4XSxcbiAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgfSBhcyBJZ3hEcm9wRG93bkl0ZW1CYXNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uID0gdGhpcy5pdGVtc1tpbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RJdGVtKG5ld1NlbGVjdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTmF2aWdhdGVzIHRvIHRoZSBpdGVtIG9uIHRoZSBzcGVjaWZpZWQgaW5kZXhcbiAgICAgKiBJZiB0aGUgZGF0YSBpbiB0aGUgZHJvcC1kb3duIGlzIHZpcnR1YWxpemVkLCBwYXNzIHRoZSBpbmRleCBvZiB0aGUgaXRlbSBpbiB0aGUgdmlydHVhbGl6ZWQgZGF0YS5cbiAgICAgKiBAcGFyYW0gbmV3SW5kZXggbnVtYmVyXG4gICAgICovXG4gICAgcHVibGljIG5hdmlnYXRlSXRlbShpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnZpcnREaXIpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEgfHwgaW5kZXggPj0gdGhpcy5jb2xsZWN0aW9uTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gaW5kZXggPiAodGhpcy5mb2N1c2VkSXRlbSA/IHRoaXMuZm9jdXNlZEl0ZW0uaW5kZXggOiAtMSkgPyBOYXZpZ2F0ZS5Eb3duIDogTmF2aWdhdGUuVXA7XG4gICAgICAgICAgICBjb25zdCBzdWJSZXF1aXJlZCA9IHRoaXMuaXNJbmRleE91dE9mQm91bmRzKGluZGV4LCBkaXJlY3Rpb24pO1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkSXRlbSA9IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy52aXJ0RGlyLmlneEZvck9mW2luZGV4XSxcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgICAgIH0gYXMgSWd4RHJvcERvd25JdGVtQmFzZTtcbiAgICAgICAgICAgIGlmIChzdWJSZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlydERpci5zY3JvbGxUbyhpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3ViUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpcnREaXIub25DaHVua0xvYWQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNraXBIZWFkZXIoZGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5za2lwSGVhZGVyKGRpcmVjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlci5uYXZpZ2F0ZUl0ZW0oaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFsbG93SXRlbXNGb2N1cyAmJiB0aGlzLmZvY3VzZWRJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWRJdGVtLmVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGlzSW5kZXhPdXRPZkJvdW5kcyhpbmRleDogbnVtYmVyLCBkaXJlY3Rpb246IE5hdmlnYXRlKSB7XG4gICAgICAgIGNvbnN0IHZpcnRTdGF0ZSA9IHRoaXMudmlydERpci5zdGF0ZTtcbiAgICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gdGhpcy52aXJ0RGlyLmdldFZlcnRpY2FsU2Nyb2xsKCkuc2Nyb2xsVG9wO1xuICAgICAgICBjb25zdCBpdGVtUG9zaXRpb24gPSB0aGlzLnZpcnREaXIuZ2V0U2Nyb2xsRm9ySW5kZXgoaW5kZXgsIGRpcmVjdGlvbiA9PT0gTmF2aWdhdGUuRG93bik7XG4gICAgICAgIGNvbnN0IGluZGV4T3V0T2ZDaHVuayA9IGluZGV4IDwgdmlydFN0YXRlLnN0YXJ0SW5kZXggfHwgaW5kZXggPiB2aXJ0U3RhdGUuY2h1bmtTaXplICsgdmlydFN0YXRlLnN0YXJ0SW5kZXg7XG4gICAgICAgIGNvbnN0IHNjcm9sbE5lZWRlZCA9IGRpcmVjdGlvbiA9PT0gTmF2aWdhdGUuRG93biA/IGN1cnJlbnRQb3NpdGlvbiA8IGl0ZW1Qb3NpdGlvbiA6IGN1cnJlbnRQb3NpdGlvbiA+IGl0ZW1Qb3NpdGlvbjtcbiAgICAgICAgY29uc3Qgc3ViUmVxdWlyZWQgPSBpbmRleE91dE9mQ2h1bmsgfHwgc2Nyb2xsTmVlZGVkO1xuICAgICAgICByZXR1cm4gc3ViUmVxdWlyZWQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNraXBIZWFkZXIoZGlyZWN0aW9uOiBOYXZpZ2F0ZSkge1xuICAgICAgICBpZiAoIXRoaXMuZm9jdXNlZEl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mb2N1c2VkSXRlbS5pc0hlYWRlciB8fCB0aGlzLmZvY3VzZWRJdGVtLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBOYXZpZ2F0ZS5VcCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVQcmV2KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVOZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHVwZGF0ZVNjcm9sbFBvc2l0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMudmlydERpcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMudmlydERpci5zY3JvbGxUbygwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGFyZ2V0U2Nyb2xsID0gdGhpcy52aXJ0RGlyLmdldFNjcm9sbEZvckluZGV4KHRoaXMuc2VsZWN0ZWRJdGVtLmluZGV4KTtcbiAgICAgICAgY29uc3QgaXRlbXNJblZpZXcgPSB0aGlzLnZpcnREaXIuaWd4Rm9yQ29udGFpbmVyU2l6ZSAvIHRoaXMudmlydERpci5pZ3hGb3JJdGVtU2l6ZTtcbiAgICAgICAgdGFyZ2V0U2Nyb2xsIC09IChpdGVtc0luVmlldyAvIDIgLSAxKSAqIHRoaXMudmlydERpci5pZ3hGb3JJdGVtU2l6ZTtcbiAgICAgICAgdGhpcy52aXJ0RGlyLmdldFZlcnRpY2FsU2Nyb2xsKCkuc2Nyb2xsVG9wID0gdGFyZ2V0U2Nyb2xsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIG9uVG9nZ2xlT3BlbmluZyhlOiBDYW5jZWxhYmxlRXZlbnRBcmdzKSB7XG4gICAgICAgIHRoaXMub25PcGVuaW5nLmVtaXQoZSk7XG4gICAgICAgIGlmIChlLmNhbmNlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy52aXJ0RGlyICYmIHRoaXMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSXRlbSh0aGlzLnNlbGVjdGVkSXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmlydERpcikge1xuICAgICAgICAgICAgdGhpcy52aXJ0RGlyLmdldFZlcnRpY2FsU2Nyb2xsKCkuc2Nyb2xsVG9wID0gdGhpcy5fc2Nyb2xsUG9zaXRpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBvblRvZ2dsZU9wZW5lZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWRJdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW07XG4gICAgICAgICAgICB0aGlzLl9mb2N1c2VkSXRlbS5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFsbG93SXRlbXNGb2N1cykge1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZUZpcnN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbk9wZW5lZC5lbWl0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgb25Ub2dnbGVDbG9zaW5nKGU6IENhbmNlbGFibGVCcm93c2VyRXZlbnRBcmdzKSB7XG4gICAgICAgIHRoaXMub25DbG9zaW5nLmVtaXQoZSk7XG4gICAgICAgIGlmICh0aGlzLnZpcnREaXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFBvc2l0aW9uID0gdGhpcy52aXJ0RGlyLmdldFZlcnRpY2FsU2Nyb2xsKCkuc2Nyb2xsVG9wO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgb25Ub2dnbGVDbG9zZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9mb2N1c2VkSXRlbSkge1xuICAgICAgICAgICAgdGhpcy5fZm9jdXNlZEl0ZW0uZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25DbG9zZWQuZW1pdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uY2xlYXIodGhpcy5pZCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKGAke3RoaXMuaWR9LWFjdGl2ZWApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzY3JvbGxUb0l0ZW0oaXRlbTogSWd4RHJvcERvd25JdGVtQmFzZSkge1xuICAgICAgICBjb25zdCBpdGVtUG9zaXRpb24gPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbFBvc2l0aW9uKGl0ZW0pO1xuXG4gICAgICAgIC8vICBpbiBJRTExIHNldHRpbmcgc2N0cm9sbFRvcCBpcyBzb21laG93IHNsb3cgYW5kIGZvcmNlcyBkcm9wZG93blxuICAgICAgICAvLyAgdG8gYXBwZWFyIG9uIHNjcmVlbiBiZWZvcmUgYW5pbWF0aW9uIHN0YXJ0LiBBcyBhIHJlc3VsdCBkcm9wZG93blxuICAgICAgICAvLyAgZmxpY2tlcnMgYmFkbHkuIFRoaXMgaXMgd2h5IHdlIHNldCBzY3JvbGxUb3AganVzdCBhIGxpdHRsZSBsYXRlclxuICAgICAgICAvLyAgYWxsb3dpbmcgYW5pbWF0aW9uIHRvIHN0YXJ0IGFuZCBwcmV2ZW50IGRyb3Bkb3duIGZsaWNrZXJpbmdcbiAgICAgICAgaWYgKGlzSUUoKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wID0gKGl0ZW1Qb3NpdGlvbik7XG4gICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCA9IChpdGVtUG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgcHVibGljIGNhbGN1bGF0ZVNjcm9sbFBvc2l0aW9uKGl0ZW06IElneERyb3BEb3duSXRlbUJhc2UpOiBudW1iZXIge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWxlbWVudFJlY3QgPSBpdGVtLmVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgcGFyZW50UmVjdCA9IHRoaXMuc2Nyb2xsQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBzY3JvbGxEZWx0YSA9IHBhcmVudFJlY3QudG9wIC0gZWxlbWVudFJlY3QudG9wO1xuICAgICAgICBsZXQgc2Nyb2xsUG9zaXRpb24gPSB0aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgLSBzY3JvbGxEZWx0YTtcblxuICAgICAgICBjb25zdCBkcm9wRG93bkhlaWdodCA9IHRoaXMuc2Nyb2xsQ29udGFpbmVyLmNsaWVudEhlaWdodDtcbiAgICAgICAgc2Nyb2xsUG9zaXRpb24gLT0gZHJvcERvd25IZWlnaHQgLyAyO1xuICAgICAgICBzY3JvbGxQb3NpdGlvbiArPSBpdGVtLmVsZW1lbnRIZWlnaHQgLyAyO1xuXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHNjcm9sbFBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnRvZ2dsZURpcmVjdGl2ZS5pZCA9IHRoaXMuaWQ7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAodGhpcy52aXJ0RGlyKSB7XG4gICAgICAgICAgICB0aGlzLnZpcnREaXIuaWd4Rm9ySXRlbVNpemUgPSAyODtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBLZXlkb3duIEhhbmRsZXIgKi9cbiAgICBwdWJsaWMgb25JdGVtQWN0aW9uS2V5KGtleTogRHJvcERvd25BY3Rpb25LZXksIGV2ZW50PzogRXZlbnQpIHtcbiAgICAgICAgc3VwZXIub25JdGVtQWN0aW9uS2V5KGtleSwgZXZlbnQpO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmlydHVhbCBzY3JvbGwgaW1wbGVtZW50YXRpb25cbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBuYXZpZ2F0ZUZpcnN0KCkge1xuICAgICAgICBpZiAodGhpcy52aXJ0RGlyKSB7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlSXRlbSgwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLm5hdmlnYXRlRmlyc3QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIG5hdmlnYXRlTGFzdCgpIHtcbiAgICAgICAgaWYgKHRoaXMudmlydERpcikge1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZUl0ZW0odGhpcy52aXJ0RGlyLnRvdGFsSXRlbUNvdW50ID8gdGhpcy52aXJ0RGlyLnRvdGFsSXRlbUNvdW50IC0gMSA6IHRoaXMudmlydERpci5pZ3hGb3JPZi5sZW5ndGggLSAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLm5hdmlnYXRlTGFzdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgbmF2aWdhdGVOZXh0KCkge1xuICAgICAgICBpZiAodGhpcy52aXJ0RGlyKSB7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlSXRlbSh0aGlzLl9mb2N1c2VkSXRlbSA/IHRoaXMuX2ZvY3VzZWRJdGVtLmluZGV4ICsgMSA6IDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIubmF2aWdhdGVOZXh0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBuYXZpZ2F0ZVByZXYoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpcnREaXIpIHtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGVJdGVtKHRoaXMuX2ZvY3VzZWRJdGVtID8gdGhpcy5fZm9jdXNlZEl0ZW0uaW5kZXggLSAxIDogMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlci5uYXZpZ2F0ZVByZXYoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIGBvblNlbGVjdGlvbmAgZW1pdCBhbmQgdGhlIGRyb3AgZG93biB0b2dnbGUgd2hlbiBzZWxlY3Rpb24gY2hhbmdlc1xuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKiBAcGFyYW0gbmV3U2VsZWN0aW9uXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdEl0ZW0obmV3U2VsZWN0aW9uPzogSWd4RHJvcERvd25JdGVtQmFzZSwgZXZlbnQ/OiBFdmVudCkge1xuICAgICAgICBjb25zdCBvbGRTZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGVkSXRlbTtcbiAgICAgICAgaWYgKCFuZXdTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IHRoaXMuZm9jdXNlZEl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24gaW5zdGFuY2VvZiBJZ3hEcm9wRG93bkl0ZW1CYXNlICYmIG5ld1NlbGVjdGlvbi5pc0hlYWRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnZpcnREaXIpIHtcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3U2VsZWN0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgIGluZGV4OiBuZXdTZWxlY3Rpb24uaW5kZXhcbiAgICAgICAgICAgIH0gYXMgSWd4RHJvcERvd25JdGVtQmFzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhcmdzOiBJU2VsZWN0aW9uRXZlbnRBcmdzID0geyBvbGRTZWxlY3Rpb24sIG5ld1NlbGVjdGlvbiwgY2FuY2VsOiBmYWxzZSB9O1xuICAgICAgICB0aGlzLm9uU2VsZWN0aW9uLmVtaXQoYXJncyk7XG5cbiAgICAgICAgaWYgKCFhcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uc2V0KHRoaXMuaWQsIG5ldyBTZXQoW25ld1NlbGVjdGlvbl0pKTtcbiAgICAgICAgICAgIGlmICghdGhpcy52aXJ0RGlyKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9sZFNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBvbGRTZWxlY3Rpb24uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5ld1NlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBuZXdTZWxlY3Rpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlRGlyZWN0aXZlLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdfQ==