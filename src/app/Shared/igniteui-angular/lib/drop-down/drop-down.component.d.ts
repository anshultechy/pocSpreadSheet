import { ChangeDetectorRef, ElementRef, QueryList, OnInit, OnDestroy, AfterViewInit, EventEmitter } from '@angular/core';
import { IgxToggleDirective } from '../directives/toggle/toggle.directive';
import { IgxDropDownBase } from './drop-down.base';
import { DropDownActionKey, Navigate } from './drop-down.common';
import { IDropDownBase } from './drop-down.common';
import { CancelableEventArgs, CancelableBrowserEventArgs } from '../core/utils';
import { IgxSelectionAPIService } from '../core/selection';
import { Subject } from 'rxjs';
import { IgxDropDownItemBase } from './drop-down-item.base';
import { OverlaySettings } from '../services';
import { IgxForOfDirective } from '../directives/for-of/for_of.directive';
import { IDisplayDensityOptions } from '../core/density';
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
export declare class IgxDropDownComponent extends IgxDropDownBase implements IDropDownBase, OnInit, OnDestroy, AfterViewInit {
    protected elementRef: ElementRef;
    protected cdr: ChangeDetectorRef;
    protected selection: IgxSelectionAPIService;
    protected _displayDensityOptions: IDisplayDensityOptions;
    protected destroy$: Subject<boolean>;
    protected _scrollPosition: number;
    protected virtDir: IgxForOfDirective<any>;
    protected toggleDirective: IgxToggleDirective;
    /**
     * @hidden
     * @internal
     */
    children: QueryList<IgxDropDownItemBase>;
    /**
     * Emitted before the dropdown is opened
     *
     * ```html
     * <igx-drop-down (onOpening)='handleOpening()'></igx-drop-down>
     * ```
     */
    onOpening: EventEmitter<CancelableEventArgs>;
    /**
     * Emitted after the dropdown is opened
     *
     * ```html
     * <igx-drop-down (onOpened)='handleOpened()'></igx-drop-down>
     * ```
     */
    onOpened: EventEmitter<void>;
    /**
     * Emitted before the dropdown is closed
     *
     * ```html
     * <igx-drop-down (onClosing)='handleClosing()'></igx-drop-down>
     * ```
     */
    onClosing: EventEmitter<CancelableBrowserEventArgs>;
    /**
     * Emitted after the dropdown is closed
     *
     * ```html
     * <igx-drop-down (onClosed)='handleClosed()'></igx-drop-down>
     * ```
     */
    onClosed: EventEmitter<void>;
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
    allowItemsFocus: boolean;
    /**
     * @hidden @internal
     */
    focusedItem: IgxDropDownItemBase;
    id: string;
    /** Id of the internal listbox of the drop down */
    readonly listId: string;
    /**
     * Get currently selected item
     *
     * ```typescript
     * let currentItem = this.dropdown.selectedItem;
     * ```
     */
    readonly selectedItem: IgxDropDownItemBase;
    /**
     * Gets if the dropdown is collapsed
     *
     * ```typescript
     * let isCollapsed = this.dropdown.collapsed;
     * ```
     */
    readonly collapsed: boolean;
    protected readonly scrollContainer: HTMLElement;
    protected readonly collectionLength: number;
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef, selection: IgxSelectionAPIService, _displayDensityOptions: IDisplayDensityOptions);
    /**
     * Opens the dropdown
     *
     * ```typescript
     * this.dropdown.open();
     * ```
     */
    open(overlaySettings?: OverlaySettings): void;
    /**
     * Closes the dropdown
     *
     * ```typescript
     * this.dropdown.close();
     * ```
     */
    close(): void;
    /**
     * Toggles the dropdown
     *
     * ```typescript
     * this.dropdown.toggle();
     * ```
     */
    toggle(overlaySettings?: OverlaySettings): void;
    /**
     * Select an item by index
     * @param index of the item to select; If the drop down uses *igxFor, pass the index in data
     */
    setSelectedItem(index: number): void;
    /**
     * Navigates to the item on the specified index
     * If the data in the drop-down is virtualized, pass the index of the item in the virtualized data.
     * @param newIndex number
     */
    navigateItem(index: number): void;
    private isIndexOutOfBounds;
    protected skipHeader(direction: Navigate): void;
    /**
     * @hidden @internal
     */
    updateScrollPosition(): void;
    /**
     * @hidden @internal
     */
    onToggleOpening(e: CancelableEventArgs): void;
    /**
     * @hidden @internal
     */
    onToggleOpened(): void;
    /**
     * @hidden @internal
     */
    onToggleClosing(e: CancelableBrowserEventArgs): void;
    /**
     * @hidden @internal
     */
    onToggleClosed(): void;
    /**
     * @hidden @internal
     */
    ngOnDestroy(): void;
    protected scrollToItem(item: IgxDropDownItemBase): void;
    /** @hidden @internal */
    calculateScrollPosition(item: IgxDropDownItemBase): number;
    /**
     * @hidden @internal
     */
    ngOnInit(): void;
    ngAfterViewInit(): void;
    /** Keydown Handler */
    onItemActionKey(key: DropDownActionKey, event?: Event): void;
    /**
     * Virtual scroll implementation
     * @hidden @internal
     */
    navigateFirst(): void;
    /**
     * @hidden @internal
     */
    navigateLast(): void;
    /**
     * @hidden @internal
     */
    navigateNext(): void;
    /**
     * @hidden @internal
     */
    navigatePrev(): void;
    /**
     * Handles the `onSelection` emit and the drop down toggle when selection changes
     * @hidden
     * @internal
     * @param newSelection
     * @param event
     */
    selectItem(newSelection?: IgxDropDownItemBase, event?: Event): void;
}