/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ConnectedPositioningStrategy } from './../services/overlay/position/connected-positioning-strategy';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, HostBinding, HostListener, Input, NgModule, Output, TemplateRef, ViewChild, Optional, Inject, Injector, forwardRef } from '@angular/core';
import { IgxComboItemDirective, IgxComboEmptyDirective, IgxComboHeaderItemDirective, IgxComboHeaderDirective, IgxComboFooterDirective, IgxComboAddItemDirective, IgxComboToggleIconDirective, IgxComboClearIconDirective } from './combo.directives';
import { FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { IgxCheckboxModule } from '../checkbox/checkbox.component';
import { IgxSelectionAPIService } from '../core/selection';
import { cloneArray } from '../core/utils';
import { IgxStringFilteringOperand, IgxBooleanFilteringOperand } from '../data-operations/filtering-condition';
import { FilteringLogic } from '../data-operations/filtering-expression.interface';
import { SortingDirection } from '../data-operations/sorting-expression.interface';
import { IgxForOfModule, IgxForOfDirective } from '../directives/for-of/for_of.directive';
import { IgxIconModule } from '../icon/index';
import { IgxRippleModule } from '../directives/ripple/ripple.directive';
import { IgxToggleModule } from '../directives/toggle/toggle.directive';
import { IgxButtonModule } from '../directives/button/button.directive';
import { IgxDropDownModule } from '../drop-down/index';
import { IgxInputGroupModule } from '../input-group/input-group.component';
import { IgxComboItemComponent } from './combo-item.component';
import { IgxComboDropDownComponent } from './combo-dropdown.component';
import { IgxComboFilterConditionPipe, IgxComboFilteringPipe, IgxComboGroupingPipe, IgxComboSortingPipe } from './combo.pipes';
import { AbsoluteScrollStrategy } from '../services';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DefaultSortingStrategy } from '../data-operations/sorting-strategy';
import { DisplayDensityBase, DisplayDensityToken } from '../core/density';
import { IGX_COMBO_COMPONENT } from './combo.common';
import { IgxComboAddItemComponent } from './combo-add-item.component';
import { IgxComboAPIService } from './combo.api';
import { take } from 'rxjs/operators';
/** @enum {string} */
const DataTypes = {
    EMPTY: 'empty',
    PRIMITIVE: 'primitive',
    COMPLEX: 'complex',
    PRIMARYKEY: 'valueKey',
};
/**
 * @hidden
 * @type {?}
 */
const ItemHeights = {
    'comfortable': 40,
    'cosy': 32,
    'compact': 28,
};
/**
 * @hidden
 * The default number of items that should be in the combo's
 * drop-down list if no `[itemsMaxHeight]` is specified
 * @type {?}
 */
const itemsInContainer = 10;
/** @enum {number} */
const IgxComboState = {
    /**
     * Combo with initial state.
     */
    INITIAL: 0,
    /**
     * Combo with valid state.
     */
    VALID: 1,
    /**
     * Combo with invalid state.
     */
    INVALID: 2,
};
export { IgxComboState };
IgxComboState[IgxComboState.INITIAL] = 'INITIAL';
IgxComboState[IgxComboState.VALID] = 'VALID';
IgxComboState[IgxComboState.INVALID] = 'INVALID';
/**
 * @record
 */
export function IComboSelectionChangeEventArgs() { }
if (false) {
    /** @type {?} */
    IComboSelectionChangeEventArgs.prototype.oldSelection;
    /** @type {?} */
    IComboSelectionChangeEventArgs.prototype.newSelection;
    /** @type {?|undefined} */
    IComboSelectionChangeEventArgs.prototype.event;
}
/**
 * @record
 */
export function IComboItemAdditionEvent() { }
if (false) {
    /** @type {?} */
    IComboItemAdditionEvent.prototype.oldCollection;
    /** @type {?} */
    IComboItemAdditionEvent.prototype.addedItem;
    /** @type {?} */
    IComboItemAdditionEvent.prototype.newCollection;
}
/** @type {?} */
let NEXT_ID = 0;
/** @type {?} */
const noop = () => { };
const ɵ0 = noop;
export class IgxComboComponent extends DisplayDensityBase {
    /**
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} selection
     * @param {?} comboAPI
     * @param {?} _displayDensityOptions
     * @param {?} injector
     */
    constructor(elementRef, cdr, selection, comboAPI, _displayDensityOptions, injector) {
        super(_displayDensityOptions);
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.selection = selection;
        this.comboAPI = comboAPI;
        this._displayDensityOptions = _displayDensityOptions;
        this.injector = injector;
        /**
         * @hidden \@internal
         */
        this.customValueFlag = true;
        /**
         * @hidden \@internal
         */
        this.defaultFallbackGroup = 'Other';
        this.stringFilters = IgxStringFilteringOperand;
        this.booleanFilters = IgxBooleanFilteringOperand;
        this._filteringLogic = FilteringLogic.Or;
        this._filteringExpressions = [];
        this._sortingExpressions = [];
        this._groupKey = '';
        this._prevInputValue = '';
        this._dataType = '';
        this.ngControl = null;
        this.destroy$ = new Subject();
        this._data = [];
        this._filteredData = [];
        this._itemHeight = null;
        this._itemsMaxHeight = null;
        this._onChangeCallback = noop;
        this._overlaySettings = {
            scrollStrategy: new AbsoluteScrollStrategy(),
            positionStrategy: new ConnectedPositioningStrategy(),
            modal: false,
            closeOnOutsideClick: true,
            excludePositionTarget: true
        };
        this._value = '';
        /**
         * Set custom overlay settings that control how the combo's list of items is displayed.
         * Set:
         * ```html
         * <igx-combo [overlaySettings] = "customOverlaySettings"></igx-combo>
         * ```
         *
         * ```typescript
         *  const customSettings = { positionStrategy: { settings: { target: myTarget } } };
         *  combo.overlaySettings = customSettings;
         * ```
         * Get any custom overlay settings used by the combo:
         * ```typescript
         *  const comboOverlaySettings: OverlaySettings = myCombo.overlaySettings;
         * ```
         */
        this.overlaySettings = null;
        /**
         * @hidden \@internal
         */
        this.searchInput = null;
        /**
         * @hidden \@internal
         */
        this.comboInput = null;
        /**
         * The custom template, if any, that should be used when rendering ITEMS in the combo list
         *
         * ```typescript
         * // Set in typescript
         * const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
         * myComponent.combo.itemTemplate = myCustomTemplate;
         * ```
         * ```html
         * <!-- Set in markup -->
         *  <igx-combo #combo>
         *      ...
         *      <ng-template igxComboItem>
         *          <div class="custom-item" let-item let-key="valueKey">
         *              <div class="custom-item__name">{{ item[key] }}</div>
         *              <div class="custom-item__cost">{{ item.cost }}</div>
         *          </div>
         *      </ng-template>
         *  </igx-combo>
         * ```
         */
        this.itemTemplate = null;
        /**
         * The custom template, if any, that should be used when rendering the HEADER for the combo items list
         *
         * ```typescript
         * // Set in typescript
         * const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
         * myComponent.combo.headerTemplate = myCustomTemplate;
         * ```
         * ```html
         * <!-- Set in markup -->
         *  <igx-combo #combo>
         *      ...
         *      <ng-template igxComboHeader>
         *          <div class="combo__header">
         *              This is a custom header
         *          </div>
         *      </ng-template>
         *  </igx-combo>
         * ```
         */
        this.headerTemplate = null;
        /**
         * The custom template, if any, that should be used when rendering the FOOTER for the combo items list
         *
         * ```typescript
         * // Set in typescript
         * const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
         * myComponent.combo.footerTemplate = myCustomTemplate;
         * ```
         * ```html
         * <!-- Set in markup -->
         *  <igx-combo #combo>
         *      ...
         *      <ng-template igxComboFooter>
         *          <div class="combo__footer">
         *              This is a custom footer
         *          </div>
         *      </ng-template>
         *  </igx-combo>
         * ```
         */
        this.footerTemplate = null;
        /**
         * The custom template, if any, that should be used when rendering HEADER ITEMS for groups in the combo list
         *
         * ```typescript
         * // Set in typescript
         * const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
         * myComponent.combo.headerItemTemplate = myCustomTemplate;
         * ```
         * ```html
         * <!-- Set in markup -->
         *  <igx-combo #combo>
         *      ...
         *      <ng-template igxComboHeaderItem let-item let-key="groupKey">
         *          <div class="custom-item--group">Group header for {{ item[key] }}</div>
         *      </ng-template>
         *  </igx-combo>
         * ```
         */
        this.headerItemTemplate = null;
        /**
         * The custom template, if any, that should be used when rendering the ADD BUTTON in the combo drop down
         *
         * ```typescript
         * // Set in typescript
         * const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
         * myComponent.combo.addItemTemplate = myCustomTemplate;
         * ```
         * ```html
         * <!-- Set in markup -->
         *  <igx-combo #combo>
         *      ...
         *      <ng-template igxComboAddItem>
         *          <button class="combo__add-button">
         *              Click to add item
         *          </button>
         *      </ng-template>
         *  </igx-combo>
         * ```
         */
        this.addItemTemplate = null;
        /**
         * The custom template, if any, that should be used when rendering the ADD BUTTON in the combo drop down
         *
         * ```typescript
         * // Set in typescript
         * const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
         * myComponent.combo.emptyTemplate = myCustomTemplate;
         * ```
         * ```html
         * <!-- Set in markup -->
         *  <igx-combo #combo>
         *      ...
         *      <ng-template igxComboEmpty>
         *          <div class="combo--emtpy">
         *              There are no items to display
         *          </div>
         *      </ng-template>
         *  </igx-combo>
         * ```
         */
        this.emptyTemplate = null;
        /**
         * The custom template, if any, that should be used when rendering the combo TOGGLE(open/close) button
         *
         * ```typescript
         * // Set in typescript
         * const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
         * myComponent.combo.toggleIconTemplate = myCustomTemplate;
         * ```
         * ```html
         * <!-- Set in markup -->
         *  <igx-combo #combo>
         *      ...
         *      <ng-template igxComboToggleIcon let-collapsed>
         *          <igx-icon>{{ collapsed ? 'remove_circle' : 'remove_circle_outline'}}</igx-icon>
         *      </ng-template>
         *  </igx-combo>
         * ```
         */
        this.toggleIconTemplate = null;
        /**
         * The custom template, if any, that should be used when rendering the combo CLEAR button
         *
         * ```typescript
         * // Set in typescript
         * const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
         * myComponent.combo.clearIconTemplate = myCustomTemplate;
         * ```
         * ```html
         * <!-- Set in markup -->
         *  <igx-combo #combo>
         *      ...
         *      <ng-template igxComboClearIcon>
         *          <igx-icon>clear</igx-icon>
         *      </ng-template>
         *  </igx-combo>
         * ```
         */
        this.clearIconTemplate = null;
        this.dropdownContainer = null;
        /**
         * Emitted when item selection is changing, before the selection completes
         *
         * ```html
         * <igx-combo (onSelectionChange)='handleSelection()'></igx-combo>
         * ```
         */
        this.onSelectionChange = new EventEmitter();
        /**
         * Emitted before the dropdown is opened
         *
         * ```html
         * <igx-combo onOpening='handleOpening($event)'></igx-combo>
         * ```
         */
        this.onOpening = new EventEmitter();
        /**
         * Emitted after the dropdown is opened
         *
         * ```html
         * <igx-combo (onOpened)='handleOpened()'></igx-combo>
         * ```
         */
        this.onOpened = new EventEmitter();
        /**
         * Emitted before the dropdown is closed
         *
         * ```html
         * <igx-combo (onClosing)='handleClosing($event)'></igx-combo>
         * ```
         */
        this.onClosing = new EventEmitter();
        /**
         * Emitted after the dropdown is closed
         *
         * ```html
         * <igx-combo (onClosed)='handleClosed()'></igx-combo>
         * ```
         */
        this.onClosed = new EventEmitter();
        /**
         * Emitted when an item is being added to the data collection
         *
         * ```html
         * <igx-combo (onAddition)='handleAdditionEvent()'></igx-combo>
         * ```
         */
        this.onAddition = new EventEmitter();
        /**
         * Emitted when the value of the search input changes (e.g. typing, pasting, clear, etc.)
         *
         * ```html
         * <igx-combo (onSearchInput)='handleSearchInputEvent()'></igx-combo>
         * ```
         */
        this.onSearchInput = new EventEmitter();
        /**
         * Emitted when new chunk of data is loaded from the virtualization
         *
         * ```html
         * <igx-combo (onDataPreLoad)='handleDataPreloadEvent()'></igx-combo>
         * ```
         */
        this.onDataPreLoad = new EventEmitter();
        /**
         * Gets/gets combo id.
         *
         * ```typescript
         * // get
         * let id = this.combo.id;
         * ```
         *
         * ```html
         * <!--set-->
         * <igx-combo [id]='combo1'></igx-combo>
         * ```
         */
        this.id = `igx-combo-${NEXT_ID++}`;
        /**
         * @hidden \@internal
         */
        this.cssClass = 'igx-combo'; // Independent of display density, at the time being
        // Independent of display density, at the time being
        /**
         * @hidden \@internal
         */
        this.role = 'combobox';
        /**
         * Controls whether custom values can be added to the collection
         *
         * ```typescript
         * // get
         * let comboAllowsCustomValues = this.combo.allowCustomValues;
         * ```
         *
         * ```html
         * <!--set-->
         * <igx-combo [allowCustomValues]='true'></igx-combo>
         * ```
         */
        this.allowCustomValues = false;
        /**
         * @hidden \@internal
         */
        this.filteringLogic = FilteringLogic.Or;
        /**
         * Defines the placeholder value for the combo value field
         *
         * ```typescript
         * // get
         * let myComboPlaceholder = this.combo.placeholder;
         * ```
         *
         * ```html
         * <!--set-->
         * <igx-combo [placeholder]='newPlaceHolder'></igx-combo>
         * ```
         */
        this.placeholder = '';
        /**
         * Defines the placeholder value for the combo dropdown search field
         *
         * ```typescript
         * // get
         * let myComboSearchPlaceholder = this.combo.searchPlaceholder;
         * ```
         *
         * ```html
         * <!--set-->
         * <igx-combo [searchPlaceholder]='newPlaceHolder'></igx-combo>
         * ```
         */
        this.searchPlaceholder = 'Enter a Search Term';
        /**
         * An \@Input property that enabled/disables filtering in the list. The default is `true`.
         * ```html
         * <igx-combo [filterable]="'false'">
         * ```
         */
        this.filterable = true;
        /**
         * An \@Input property that enabled/disables combo. The default is `false`.
         * ```html
         * <igx-combo [disabled]="'true'">
         * ```
         */
        this.disabled = false;
        /**
         * An \@Input property that sets how the combo will be styled.
         * The allowed values are `line`, `box`, `border` and `search`. The default is `box`.
         * ```html
         * <igx-combo [type]="'line'">
         * ```
         */
        this.type = 'box';
        /**
         * Gets/Sets if control is valid, when used in a form
         *
         * ```typescript
         * // get
         * let valid = this.combo.valid;
         * ```
         * ```typescript
         * // set
         * this.combo.valid = IgxComboState.INVALID;
         * ```
         */
        this.valid = IgxComboState.INITIAL;
        /**
         * @hidden \@internal
         */
        this.searchValue = '';
        this.onStatusChanged = () => {
            if ((this.ngControl.control.touched || this.ngControl.control.dirty) &&
                (this.ngControl.control.validator || this.ngControl.control.asyncValidator)) {
                this.valid = this.ngControl.valid ? IgxComboState.VALID : IgxComboState.INVALID;
            }
        };
        this.comboAPI.register(this);
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get displaySearchInput() {
        return this.filterable || this.allowCustomValues;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get validClass() {
        return this.valid === IgxComboState.VALID;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get invalidClass() {
        return this.valid === IgxComboState.INVALID;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get ariaExpanded() {
        return !this.dropdown.collapsed;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get hasPopUp() {
        return 'listbox';
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get ariaOwns() {
        return this.dropdown.id;
    }
    /**
     * Configures the drop down list height
     *
     * ```typescript
     * // get
     * let myComboItemsMaxHeight = this.combo.itemsMaxHeight;
     * ```
     *
     * ```html
     * <!--set-->
     * <igx-combo [itemsMaxHeight]='320'></igx-combo>
     * ```
     * @return {?}
     */
    get itemsMaxHeight() {
        if (this._itemsMaxHeight === null || this._itemsMaxHeight === undefined) {
            return this.itemHeight * itemsInContainer;
        }
        return this._itemsMaxHeight;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set itemsMaxHeight(val) {
        this._itemsMaxHeight = val;
    }
    /**
     * Configures the drop down list item height
     *
     * ```typescript
     * // get
     * let myComboItemHeight = this.combo.itemHeight;
     * ```
     *
     * ```html
     * <!--set-->
     * <igx-combo [itemHeight]='32'></igx-combo>
     * ```
     * @return {?}
     */
    get itemHeight() {
        if (this._itemHeight === null || this._itemHeight === undefined) {
            return ItemHeights[this.displayDensity];
        }
        return this._itemHeight;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set itemHeight(val) {
        this._itemHeight = val;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get inputEmpty() {
        return !this.value && !this.placeholder;
    }
    /**
     * Combo data source.
     *
     * ```html
     * <!--set-->
     * <igx-combo [data]='items'></igx-combo>
     * ```
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set data(val) {
        this._data = (val) ? val : [];
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set displayKey(val) {
        this._displayKey = val;
    }
    /**
     * Combo text data source propery.
     *
     * ```typescript
     * // get
     * let myComboDisplayKey = this.combo.displayKey;
     *
     * // set
     * this.combo.displayKey = 'val';
     *
     * ```
     *
     * ```html
     * <!--set-->
     * <igx-combo [displayKey]='mydisplayKey'></igx-combo>
     * ```
     * @return {?}
     */
    get displayKey() {
        return this._displayKey ? this._displayKey : this.valueKey;
    }
    /**
     * The item property by which items should be grouped inside the items list. Not usable if data is not of type Object[].
     *
     * ```html
     * <!--set-->
     * <igx-combo [groupKey]='newGroupKey'></igx-combo>
     * ```
     * @param {?} val
     * @return {?}
     */
    set groupKey(val) {
        this.clearSorting(this._groupKey);
        this._groupKey = val;
        this.sort(this._groupKey);
    }
    /**
     * The item property by which items should be grouped inside the items list. Not usable if data is not of type Object[].
     *
     * ```typescript
     * // get
     * let currentGroupKey = this.combo.groupKey;
     * ```
     * @return {?}
     */
    get groupKey() {
        return this._groupKey;
    }
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    onArrowDown(event) {
        event.preventDefault();
        event.stopPropagation();
        this.open();
    }
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    onInputClick(event) {
        event.stopPropagation();
        event.preventDefault();
        this.toggle();
    }
    /**
     * Defines the current state of the virtualized data. It contains `startIndex` and `chunkSize`
     *
     * ```typescript
     * // get
     * let state = this.combo.virtualizationState;
     * ```
     * @return {?}
     */
    get virtualizationState() {
        return this.virtDir.state;
    }
    /**
     * Sets the current state of the virtualized data.
     *
     * ```typescript
     * // set
     * this.combo.virtualizationState(state);
     * ```
     * @param {?} state
     * @return {?}
     */
    set virtualizationState(state) {
        this.virtDir.state = state;
    }
    /**
     * Gets total count of the virtual data items, when using remote service.
     *
     * ```typescript
     * // get
     * let count = this.combo.totalItemCount;
     * ```
     * @return {?}
     */
    get totalItemCount() {
        return this.virtDir.totalItemCount;
    }
    /**
     * Sets total count of the virtual data items, when using remote service.
     *
     * ```typescript
     * // set
     * this.combo.totalItemCount(remoteService.count);
     * ```
     * @param {?} count
     * @return {?}
     */
    set totalItemCount(count) {
        this.virtDir.totalItemCount = count;
        this.cdr.detectChanges();
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get filteringExpressions() {
        return this.filterable ? this._filteringExpressions : [];
    }
    /**
     * @hidden \@internal
     * @param {?} value
     * @return {?}
     */
    set filteringExpressions(value) {
        this._filteringExpressions = value;
        this.cdr.markForCheck();
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get sortingExpressions() {
        return this._sortingExpressions;
    }
    /**
     * @hidden \@internal
     * @param {?} value
     * @return {?}
     */
    set sortingExpressions(value) {
        this._sortingExpressions = value;
        this.cdr.markForCheck();
    }
    /**
     * @protected
     * @param {?=} field
     * @return {?}
     */
    clearSorting(field) {
        if (field === undefined || field === null) {
            this.sortingExpressions = [];
            return;
        }
        /** @type {?} */
        const currentState = cloneArray(this.sortingExpressions);
        /** @type {?} */
        const index = currentState.findIndex((expr) => expr.fieldName === field);
        if (index > -1) {
            currentState.splice(index, 1);
            this.sortingExpressions = currentState;
        }
    }
    /**
     * The text displayed in the combo input
     *
     * ```typescript
     * // get
     * let comboValue = this.combo.value;
     * ```
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get filteredData() {
        return this.filterable ? this._filteredData : this.data;
    }
    /**
     * @hidden \@internal
     * @param {?} val
     * @return {?}
     */
    set filteredData(val) {
        this._filteredData = this.groupKey ? (val || []).filter((e) => e.isHeader !== true) : val;
        this.checkMatch();
    }
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    handleKeyUp(event) {
        if (event.key === 'ArrowDown' || event.key === 'Down') {
            this.dropdown.focusedItem = this.dropdown.items[0];
            this.dropdownContainer.nativeElement.focus();
        }
        else if (event.key === 'Escape' || event.key === 'Esc') {
            this.toggle();
        }
    }
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    handleKeyDown(event) {
        if (event.key === 'ArrowUp' || event.key === 'Up') {
            event.preventDefault();
            event.stopPropagation();
            this.close();
        }
    }
    /**
     * @private
     * @return {?}
     */
    checkMatch() {
        /** @type {?} */
        const displayKey = this.displayKey;
        /** @type {?} */
        const matchFn = (e) => {
            /** @type {?} */
            const value = displayKey ? e[displayKey] : e;
            return value.toString().toLowerCase() === this.searchValue.trim().toLowerCase();
        };
        /** @type {?} */
        const itemMatch = this.filteredData.some(matchFn);
        this.customValueFlag = this.allowCustomValues && !itemMatch;
    }
    /**
     * @hidden \@internal
     * @param {?=} event
     * @return {?}
     */
    handleInputChange(event) {
        /** @type {?} */
        let cdrFlag = false;
        /** @type {?} */
        const vContainer = this.virtDir;
        if (event !== undefined && this._prevInputValue === event) {
            // Nothing has changed
            return;
        }
        else {
            this._prevInputValue = event !== undefined ? event : '';
        }
        if (event !== undefined) {
            // Do not scroll if not scrollable
            if (vContainer.isScrollable()) {
                vContainer.scrollTo(0);
            }
            else {
                cdrFlag = true;
            }
            this.onSearchInput.emit(event);
        }
        else {
            cdrFlag = true;
        }
        if (this.filterable) {
            this.filter();
            // If there was no scroll before filtering, check if there is after and detect changes
            if (cdrFlag) {
                vContainer.onChunkLoad.pipe(take(1)).subscribe(() => {
                    if (vContainer.isScrollable()) {
                        this.cdr.detectChanges();
                    }
                });
            }
        }
        else {
            this.checkMatch();
        }
    }
    /**
     * @hidden \@internal
     * @param {?} fieldName
     * @param {?=} dir
     * @param {?=} ignoreCase
     * @param {?=} strategy
     * @return {?}
     */
    sort(fieldName, dir = SortingDirection.Asc, ignoreCase = true, strategy = DefaultSortingStrategy.instance()) {
        if (!fieldName) {
            return;
        }
        /** @type {?} */
        const sortingState = cloneArray(this.sortingExpressions, true);
        this.prepare_sorting_expression(sortingState, fieldName, dir, ignoreCase, strategy);
        this.sortingExpressions = sortingState;
    }
    /**
     * @hidden \@internal
     * @param {?} val
     * @return {?}
     */
    getValueByValueKey(val) {
        if (!val && val !== 0) {
            return undefined;
        }
        return this.valueKey ?
            this.data.filter((e) => e[this.valueKey] === val)[0] :
            this.data.filter((e) => e === val);
    }
    /**
     * @protected
     * @param {?} state
     * @param {?} fieldName
     * @param {?} dir
     * @param {?} ignoreCase
     * @param {?} strategy
     * @return {?}
     */
    prepare_sorting_expression(state, fieldName, dir, ignoreCase, strategy) {
        if (dir === SortingDirection.None) {
            state.splice(state.findIndex((expr) => expr.fieldName === fieldName), 1);
            return;
        }
        /** @type {?} */
        const expression = state.find((expr) => expr.fieldName === fieldName);
        if (!expression) {
            state.push({ fieldName, dir, ignoreCase, strategy });
        }
        else {
            Object.assign(expression, { fieldName, dir, ignoreCase });
        }
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get dataType() {
        if (this.valueKey) {
            return DataTypes.COMPLEX;
        }
        return DataTypes.PRIMITIVE;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get isRemote() {
        return this.totalItemCount > 0 &&
            this.valueKey &&
            this.dataType === DataTypes.COMPLEX;
    }
    /**
     * If the data source is remote, returns JSON.stringify(itemID)
     * @hidden
     * \@internal
     * @private
     * @param {?} itemID
     * @return {?}
     */
    _stringifyItemID(itemID) {
        return this.isRemote && typeof itemID === 'object' ? JSON.stringify(itemID) : itemID;
    }
    /**
     * @private
     * @param {?} itemID
     * @return {?}
     */
    _parseItemID(itemID) {
        return this.isRemote && typeof itemID === 'string' ? JSON.parse(itemID) : itemID;
    }
    /**
     * Returns if the specified itemID is selected
     * @hidden
     * \@internal
     * @param {?} item
     * @return {?}
     */
    isItemSelected(item) {
        return this.selection.is_item_selected(this.id, this._stringifyItemID(item));
    }
    /**
     * Triggers change detection on the combo view
     * @return {?}
     */
    triggerCheck() {
        this.cdr.detectChanges();
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    isAddButtonVisible() {
        // This should always return a boolean value. If this.searchValue was '', it returns '' instead of false;
        return this.searchValue !== '' && this.customValueFlag;
    }
    /**
     * @hidden \@internal
     * @param {?} evt
     * @return {?}
     */
    handleSelectAll(evt) {
        if (evt.checked) {
            this.selectAllItems();
        }
        else {
            this.deselectAllItems();
        }
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    addItemToCollection() {
        if (!this.searchValue) {
            return;
        }
        /** @type {?} */
        const newValue = this.searchValue.trim();
        /** @type {?} */
        const addedItem = this.displayKey ? {
            [this.valueKey]: newValue,
            [this.displayKey]: newValue
        } : newValue;
        if (this.groupKey) {
            Object.assign(addedItem, { [this.groupKey]: this.defaultFallbackGroup });
        }
        /** @type {?} */
        const oldCollection = this.data;
        /** @type {?} */
        const newCollection = [...this.data];
        newCollection.push(addedItem);
        /** @type {?} */
        const args = {
            oldCollection, addedItem, newCollection
        };
        this.onAddition.emit(args);
        this.data.push(addedItem);
        // If you mutate the array, no pipe is invoked and the display isn't updated;
        // if you replace the array, the pipe executes and the display is updated.
        this.data = cloneArray(this.data);
        this.selectItems([addedItem], false);
        this.customValueFlag = false;
        this.searchInput.nativeElement.focus();
        this.dropdown.focusedItem = null;
        this.handleInputChange();
    }
    /**
     * @hidden \@internal
     * @param {?=} opening
     * @return {?}
     */
    focusSearchInput(opening) {
        if (this.displaySearchInput && this.searchInput) {
            this.searchInput.nativeElement.focus();
        }
        else {
            if (opening) {
                this.dropdownContainer.nativeElement.focus();
            }
            else {
                this.comboInput.nativeElement.focus();
                this.toggle();
            }
        }
    }
    /**
     * @protected
     * @param {?} searchVal
     * @param {?} condition
     * @param {?} ignoreCase
     * @param {?=} fieldName
     * @return {?}
     */
    prepare_filtering_expression(searchVal, condition, ignoreCase, fieldName) {
        /** @type {?} */
        const newArray = [...this.filteringExpressions];
        /** @type {?} */
        const expression = newArray.find((expr) => expr.fieldName === fieldName);
        /** @type {?} */
        const newExpression = { fieldName, searchVal, condition, ignoreCase };
        if (!expression) {
            newArray.push(newExpression);
        }
        else {
            Object.assign(expression, newExpression);
        }
        if (this.groupKey) {
            /** @type {?} */
            const expression2 = newArray.find((expr) => expr.fieldName === 'isHeader');
            /** @type {?} */
            const headerExpression = {
                fieldName: 'isHeader', searchVale: '',
                condition: IgxBooleanFilteringOperand.instance().condition('true'), ignoreCase: true
            };
            if (!expression2) {
                newArray.push(headerExpression);
            }
            else {
                Object.assign(expression2, headerExpression);
            }
        }
        this.filteringExpressions = newArray;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    onBlur() {
        if (this.collapsed) {
            if (this.ngControl && !this.ngControl.valid) {
                this.valid = IgxComboState.INVALID;
            }
            else {
                this.valid = IgxComboState.INITIAL;
            }
        }
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    filter() {
        this.prepare_filtering_expression(this.searchValue.trim(), IgxStringFilteringOperand.instance().condition('contains'), true, this.dataType === DataTypes.PRIMITIVE ? undefined : this.displayKey);
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    ngOnInit() {
        this.ngControl = this.injector.get(NgControl, null);
        this._overlaySettings.positionStrategy.settings.target = this.elementRef.nativeElement;
        this.selection.set(this.id, new Set());
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    ngAfterViewInit() {
        this.filteredData = [...this.data];
        if (this.ngControl) {
            this.ngControl.statusChanges.pipe(takeUntil(this.destroy$)).subscribe(this.onStatusChanged);
        }
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.comboAPI.clear();
        this.selection.clear(this.id);
    }
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    dataLoading(event) {
        this.onDataPreLoad.emit(event);
    }
    /**
     * @hidden \@internal
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        // selectItems can handle Array<any>, no valueKey is needed;
        this.selectItems(value, true);
        this.cdr.markForCheck();
    }
    /**
     * @hidden \@internal
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChangeCallback = fn;
    }
    /**
     * @hidden \@internal
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { }
    /**
     * @hidden \@internal
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * @hidden
     * @return {?}
     */
    getEditElement() {
        return this.comboInput.nativeElement;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get template() {
        this._dataType = this.dataType;
        if (this.itemTemplate) {
            return this.itemTemplate;
        }
        if (this._dataType === DataTypes.COMPLEX) {
            return this.complexTemplate;
        }
        return this.primitiveTemplate;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get context() {
        return {
            $implicit: this
        };
    }
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    handleClearItems(event) {
        this.deselectAllItems(true, event);
        event.stopPropagation();
    }
    /**
     * A method that opens/closes the combo.
     *
     * ```html
     * <button (click)="combo.toggle()">Toggle Combo</button>
     * <igx-combo #combo></igx-combo>
     * ```
     * @return {?}
     */
    toggle() {
        /** @type {?} */
        const overlaySettings = Object.assign({}, this._overlaySettings, this.overlaySettings);
        this.dropdown.toggle(overlaySettings);
    }
    /**
     * A method that opens the combo.
     *
     * ```html
     * <button (click)="combo.open()">Open Combo</button>
     * <igx-combo #combo></igx-combo>
     * ```
     * @return {?}
     */
    open() {
        /** @type {?} */
        const overlaySettings = Object.assign({}, this._overlaySettings, this.overlaySettings);
        this.dropdown.open(overlaySettings);
    }
    /**
     * A method that closes the combo.
     *
     * ```html
     * <button (click)="combo.close()">Close Combo</button>
     * <igx-combo #combo></igx-combo>
     * ```
     * @return {?}
     */
    close() {
        this.dropdown.close();
    }
    /**
     * Gets drop down state.
     *
     * ```typescript
     * let state = this.combo.collapsed;
     * ```
     * @return {?}
     */
    get collapsed() {
        return this.dropdown.collapsed;
    }
    /**
     * Get current selection state
     * @return {?} Array of selected items
     * ```typescript
     * let selectedItems = this.combo.selectedItems();
     * ```
     */
    selectedItems() {
        /** @type {?} */
        const items = Array.from(this.selection.get(this.id));
        return this.isRemote ? items.map(item => this._parseItemID(item)) : items;
    }
    /**
     * Select defined items
     * @param {?} newItems new items to be selected
     * @param {?=} clearCurrentSelection if true clear previous selected items
     * ```typescript
     * this.combo.selectItems(["New York", "New Jersey"]);
     * ```
     * @param {?=} event
     * @return {?}
     */
    selectItems(newItems, clearCurrentSelection, event) {
        if (newItems) {
            /** @type {?} */
            const newSelection = this.selection.add_items(this.id, newItems, clearCurrentSelection);
            this.setSelection(newSelection, event);
        }
    }
    /**
     * Deselect defined items
     * @param {?} items items to deselected
     * ```typescript
     * this.combo.deselectItems(["New York", "New Jersey"]);
     * ```
     * @param {?=} event
     * @return {?}
     */
    deselectItems(items, event) {
        if (items) {
            /** @type {?} */
            const newSelection = this.selection.delete_items(this.id, items);
            this.setSelection(newSelection, event);
        }
    }
    /**
     * Select all (filtered) items
     * @param {?=} ignoreFilter if set to true, selects all items, otherwise selects only the filtered ones.
     * ```typescript
     * this.combo.selectAllItems();
     * ```
     * @param {?=} event
     * @return {?}
     */
    selectAllItems(ignoreFilter, event) {
        /** @type {?} */
        const allVisible = this.selection.get_all_ids(ignoreFilter ? this.data : this.filteredData);
        /** @type {?} */
        const newSelection = this.selection.add_items(this.id, allVisible);
        this.setSelection(newSelection, event);
    }
    /**
     * Deselect all (filtered) items
     * @param {?=} ignoreFilter if set to true, deselects all items, otherwise deselects only the filtered ones.
     * ```typescript
     * this.combo.deselectAllItems();
     * ```
     * @param {?=} event
     * @return {?}
     */
    deselectAllItems(ignoreFilter, event) {
        /** @type {?} */
        let newSelection = this.selection.get_empty();
        if (this.filteredData.length !== this.data.length && !ignoreFilter) {
            newSelection = this.selection.delete_items(this.id, this.selection.get_all_ids(this.filteredData));
        }
        this.setSelection(newSelection, event);
    }
    /**
     * Selects/Deselects an item using it's valueKey value
     * @param {?} itemID the valueKey of the specified item
     * @param {?=} select If the item should be selected (true) or deselcted (false)
     *
     * ```typescript
     * items: { field: string, region: string}[] = data;
     * this.combo.setSelectedItem('Connecticut', true);
     * // combo.valueKey === 'field'
     * // items[n] === { field: 'Connecticut', state: 'New England'}
     * ```
     * @param {?=} event
     * @return {?}
     */
    setSelectedItem(itemID, select = true, event) {
        if (itemID === null || itemID === undefined) {
            return;
        }
        /** @type {?} */
        const itemValue = this.getValueByValueKey(itemID);
        if (itemValue !== null && itemValue !== undefined) {
            if (select) {
                this.selectItems([itemValue], false, event);
            }
            else {
                this.deselectItems([itemValue], event);
            }
        }
    }
    /**
     * @protected
     * @param {?} newSelection
     * @param {?=} event
     * @return {?}
     */
    setSelection(newSelection, event) {
        /** @type {?} */
        const oldSelectionEmit = Array.from(this.selection.get(this.id) || []);
        /** @type {?} */
        const newSelectionEmit = Array.from(newSelection || []);
        /** @type {?} */
        const args = {
            newSelection: newSelectionEmit,
            oldSelection: oldSelectionEmit,
            event,
            cancel: false
        };
        this.onSelectionChange.emit(args);
        if (!args.cancel) {
            this.selection.select_items(this.id, args.newSelection, true);
            this._value = this.dataType !== DataTypes.PRIMITIVE ?
                args.newSelection.map((id) => this._parseItemID(id)[this.displayKey]).join(', ') :
                args.newSelection.join(', ');
            this._onChangeCallback(args.newSelection);
        }
    }
    /**
     * Event handlers
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    handleOpening(event) {
        this.onOpening.emit(event);
        if (event.cancel) {
            return;
        }
        this.handleInputChange();
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    handleOpened() {
        this.triggerCheck();
        this.focusSearchInput(true);
        this.onOpened.emit();
    }
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    handleClosing(event) {
        this.onClosing.emit(event);
        if (event.cancel) {
            return;
        }
        this.searchValue = '';
        this.comboInput.nativeElement.focus();
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    handleClosed() {
        this.onClosed.emit();
    }
}
IgxComboComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-combo',
                template: "<ng-template #complex let-display let-data=\"data\" let-key=\"displayKey\">\n    {{display[key]}}\n</ng-template>\n<ng-template #primitive let-display>\n    {{display}}\n</ng-template>\n<ng-template #empty>\n    <span>The list is empty</span>\n</ng-template>\n<ng-template #addItemDefault let-control>\n    <button igxButton=\"flat\" igxRipple>Add item</button>\n</ng-template>\n<ng-template #headerItemBase let-item let-key=\"valueKey\" let-groupKey=\"groupKey\">\n    {{ item[key] }}\n</ng-template>\n\n<igx-input-group [displayDensity]=\"displayDensity\" [type]=\"type\" (click)=\"onInputClick($event)\">\n    <ng-container ngProjectAs=\"[igxLabel]\">\n        <ng-content select=\"[igxLabel]\"></ng-content>\n    </ng-container>\n    <ng-container ngProjectAs=\"igx-prefix\">\n        <ng-content select=\"igx-prefix\"></ng-content>\n    </ng-container>\n    <ng-container ngProjectAs=\"igx-hint, [igxHint]\">\n            <ng-content select=\"igx-hint, [igxHint]\"></ng-content>\n        </ng-container>\n    <input igxInput #comboInput name=\"comboInput\" type=\"text\" [value]=\"value\" readonly [placeholder]=\"placeholder\"\n        [disabled]=\"disabled\" (blur)=\"onBlur()\" />\n    <ng-container ngProjectAs=\"igx-suffix\">\n        <ng-content select=\"igx-suffix\"></ng-content>\n    </ng-container>\n    <igx-suffix *ngIf=\"value.length\" aria-label=\"Clear Selection\" class=\"igx-combo__clear-button\" igxRipple (click)=\"handleClearItems($event)\">\n        <ng-container *ngIf=\"clearIconTemplate\">\n            <ng-container *ngTemplateOutlet=\"clearIconTemplate\"></ng-container>\n        </ng-container>\n        <igx-icon *ngIf=\"!clearIconTemplate\" fontSet=\"material\">clear</igx-icon>\n    </igx-suffix>\n    <igx-suffix igxButton=\"icon\" class=\"igx-combo__toggle-button\" igxRipple>\n        <ng-container *ngIf=\"toggleIconTemplate\">\n            <ng-container *ngTemplateOutlet=\"toggleIconTemplate; context: {$implicit: this.collapsed}\"></ng-container>\n        </ng-container>\n        <igx-icon *ngIf=\"!toggleIconTemplate\" fontSet=\"material\">{{ dropdown.collapsed ? 'arrow_drop_down' : 'arrow_drop_up'}}</igx-icon>\n    </igx-suffix>\n</igx-input-group>\n<igx-combo-drop-down #igxComboDropDown class=\"igx-combo__drop-down\" [displayDensity]=\"displayDensity\" [width]=\"itemsWidth || '100%'\" (onOpening)=\"handleOpening($event)\"\n    (onClosing)=\"handleClosing($event)\" (onOpened)=\"handleOpened()\" (onClosed)=\"handleClosed()\">\n    <igx-input-group *ngIf=\"displaySearchInput\" [displayDensity]=\"displayDensity\" class=\"igx-combo__search\">\n        <input class=\"igx-combo-input\" igxInput #searchInput name=\"searchInput\" autocomplete=\"off\" type=\"text\"\n            [(ngModel)]=\"searchValue\" (ngModelChange)=\"handleInputChange($event)\" (keyup)=\"handleKeyUp($event)\"\n            (keydown)=\"handleKeyDown($event)\" (focus)=\"dropdown.onBlur($event)\" [placeholder]=\"searchPlaceholder\"\n            aria-autocomplete=\"both\" [attr.aria-owns]=\"dropdown.id\" [attr.aria-labelledby]=\"ariaLabelledBy\" />\n    </igx-input-group>\n    <ng-container *ngTemplateOutlet=\"headerTemplate\">\n    </ng-container>\n    <div #dropdownItemContainer class=\"igx-combo__content\" [style.overflow]=\"'hidden'\" [style.maxHeight.px]=\"itemsMaxHeight\"\n        [igxDropDownItemNavigation]=\"dropdown\" (focus)=\"dropdown.onFocus()\" [tabindex]=\"dropdown.collapsed ? -1 : 0\"\n        role=\"listbox\" [attr.id]=\"dropdown.id\">\n        <ng-template igxFor let-item let-index=\"index\" [igxForOf]=\"data | comboFiltering:filteringExpressions:filteringLogic | comboSorting:sortingExpressions | comboGrouping:groupKey\"\n            [igxForScrollOrientation]=\"'vertical'\" [igxForContainerSize]=\"itemsMaxHeight\" [igxForItemSize]=\"itemHeight\"\n            (onChunkPreload)=\"dataLoading($event)\">\n            <igx-combo-item  [itemHeight]='itemHeight' [value]=\"item\" [isHeader]=\"item.isHeader\" role=\"option\" [index]=\"index\">\n                <ng-container *ngIf=\"item.isHeader\">\n                    <ng-container *ngTemplateOutlet=\"headerItemTemplate ? headerItemTemplate : headerItemBase; context: {$implicit: item, data: data, valueKey: valueKey, groupKey: groupKey, displayKey: displayKey}\"></ng-container>\n                </ng-container>\n                <ng-container *ngIf=\"!item.isHeader\">\n                    <ng-container #listItem *ngTemplateOutlet=\"template; context: {$implicit: item, data: data, valueKey: valueKey, displayKey: displayKey};\"></ng-container>\n                </ng-container>\n            </igx-combo-item>\n        </ng-template>\n    </div>\n    <div class=\"igx-combo__add\" *ngIf=\"filteredData.length === 0 || isAddButtonVisible()\">\n        <div class=\"igx-combo__empty\" *ngIf=\"filteredData.length === 0\">\n            <ng-container *ngTemplateOutlet=\"emptyTemplate ? emptyTemplate : empty\">\n            </ng-container>\n        </div>\n        <igx-combo-add-item [itemHeight]='itemHeight' *ngIf=\"isAddButtonVisible()\" [tabindex]=\"dropdown.collapsed ? -1 : customValueFlag ? 1 : -1\"\n            class=\"igx-combo__add-item\" role=\"button\" aria-label=\"Add Item\" [index]=\"virtualScrollContainer.igxForOf.length\">\n            <ng-container *ngTemplateOutlet=\"addItemTemplate ? addItemTemplate : addItemDefault\">\n            </ng-container>\n        </igx-combo-add-item>\n    </div>\n    <ng-container *ngTemplateOutlet=\"footerTemplate\">\n    </ng-container>\n</igx-combo-drop-down>",
                providers: [
                    IgxComboAPIService,
                    { provide: IGX_COMBO_COMPONENT, useExisting: IgxComboComponent },
                    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => IgxComboComponent), multi: true }
                ]
            }] }
];
/** @nocollapse */
IgxComboComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: IgxSelectionAPIService },
    { type: IgxComboAPIService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] },
    { type: Injector, decorators: [{ type: Optional }] }
];
IgxComboComponent.propDecorators = {
    virtDir: [{ type: ViewChild, args: [IgxForOfDirective, { read: IgxForOfDirective, static: true },] }],
    overlaySettings: [{ type: Input }],
    dropdown: [{ type: ViewChild, args: [IgxComboDropDownComponent, { read: IgxComboDropDownComponent, static: true },] }],
    searchInput: [{ type: ViewChild, args: ['searchInput', { static: false },] }],
    comboInput: [{ type: ViewChild, args: ['comboInput', { static: true },] }],
    itemTemplate: [{ type: ContentChild, args: [IgxComboItemDirective, { read: TemplateRef, static: true },] }],
    headerTemplate: [{ type: ContentChild, args: [IgxComboHeaderDirective, { read: TemplateRef, static: true },] }],
    footerTemplate: [{ type: ContentChild, args: [IgxComboFooterDirective, { read: TemplateRef, static: true },] }],
    headerItemTemplate: [{ type: ContentChild, args: [IgxComboHeaderItemDirective, { read: TemplateRef, static: true },] }],
    addItemTemplate: [{ type: ContentChild, args: [IgxComboAddItemDirective, { read: TemplateRef, static: true },] }],
    emptyTemplate: [{ type: ContentChild, args: [IgxComboEmptyDirective, { read: TemplateRef, static: true },] }],
    toggleIconTemplate: [{ type: ContentChild, args: [IgxComboToggleIconDirective, { read: TemplateRef, static: true },] }],
    clearIconTemplate: [{ type: ContentChild, args: [IgxComboClearIconDirective, { read: TemplateRef, static: true },] }],
    primitiveTemplate: [{ type: ViewChild, args: ['primitive', { read: TemplateRef, static: true },] }],
    complexTemplate: [{ type: ViewChild, args: ['complex', { read: TemplateRef, static: true },] }],
    virtualScrollContainer: [{ type: ViewChild, args: [IgxForOfDirective, { static: true },] }],
    dropdownContainer: [{ type: ViewChild, args: ['dropdownItemContainer', { static: true },] }],
    onSelectionChange: [{ type: Output }],
    onOpening: [{ type: Output }],
    onOpened: [{ type: Output }],
    onClosing: [{ type: Output }],
    onClosed: [{ type: Output }],
    onAddition: [{ type: Output }],
    onSearchInput: [{ type: Output }],
    onDataPreLoad: [{ type: Output }],
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    width: [{ type: HostBinding, args: ['style.width',] }, { type: Input }],
    validClass: [{ type: HostBinding, args: ['class.igx-input-group--valid',] }],
    invalidClass: [{ type: HostBinding, args: ['class.igx-input-group--invalid',] }],
    cssClass: [{ type: HostBinding, args: ['class.igx-combo',] }],
    role: [{ type: HostBinding, args: [`attr.role`,] }],
    ariaExpanded: [{ type: HostBinding, args: ['attr.aria-expanded',] }],
    hasPopUp: [{ type: HostBinding, args: ['attr.aria-haspopup',] }],
    ariaOwns: [{ type: HostBinding, args: ['attr.aria-owns',] }],
    allowCustomValues: [{ type: Input }],
    itemsMaxHeight: [{ type: Input }],
    itemsWidth: [{ type: Input }],
    itemHeight: [{ type: Input }],
    placeholder: [{ type: Input }],
    searchPlaceholder: [{ type: Input }],
    data: [{ type: Input }],
    valueKey: [{ type: Input }],
    displayKey: [{ type: Input }],
    groupKey: [{ type: Input }],
    filterable: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }, { type: HostBinding, args: ['attr.aria-labelledby',] }],
    disabled: [{ type: Input }],
    type: [{ type: Input }],
    onArrowDown: [{ type: HostListener, args: ['keydown.ArrowDown', ['$event'],] }, { type: HostListener, args: ['keydown.Alt.ArrowDown', ['$event'],] }]
};
if (false) {
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxComboComponent.prototype.customValueFlag;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxComboComponent.prototype.defaultFallbackGroup;
    /**
     * @type {?}
     * @protected
     */
    IgxComboComponent.prototype.stringFilters;
    /**
     * @type {?}
     * @protected
     */
    IgxComboComponent.prototype.booleanFilters;
    /**
     * @type {?}
     * @protected
     */
    IgxComboComponent.prototype._filteringLogic;
    /**
     * @type {?}
     * @protected
     */
    IgxComboComponent.prototype._filteringExpressions;
    /**
     * @type {?}
     * @protected
     */
    IgxComboComponent.prototype._sortingExpressions;
    /**
     * @type {?}
     * @protected
     */
    IgxComboComponent.prototype._groupKey;
    /**
     * @type {?}
     * @protected
     */
    IgxComboComponent.prototype._displayKey;
    /**
     * @type {?}
     * @protected
     */
    IgxComboComponent.prototype._prevInputValue;
    /**
     * @type {?}
     * @private
     */
    IgxComboComponent.prototype._dataType;
    /**
     * @type {?}
     * @private
     */
    IgxComboComponent.prototype.ngControl;
    /**
     * @type {?}
     * @private
     */
    IgxComboComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    IgxComboComponent.prototype._data;
    /**
     * @type {?}
     * @private
     */
    IgxComboComponent.prototype._filteredData;
    /**
     * @type {?}
     * @private
     */
    IgxComboComponent.prototype._itemHeight;
    /**
     * @type {?}
     * @private
     */
    IgxComboComponent.prototype._itemsMaxHeight;
    /**
     * @type {?}
     * @private
     */
    IgxComboComponent.prototype._onChangeCallback;
    /**
     * @type {?}
     * @private
     */
    IgxComboComponent.prototype._overlaySettings;
    /**
     * @type {?}
     * @private
     */
    IgxComboComponent.prototype._value;
    /**
     * @type {?}
     * @protected
     */
    IgxComboComponent.prototype.virtDir;
    /**
     * Set custom overlay settings that control how the combo's list of items is displayed.
     * Set:
     * ```html
     * <igx-combo [overlaySettings] = "customOverlaySettings"></igx-combo>
     * ```
     *
     * ```typescript
     *  const customSettings = { positionStrategy: { settings: { target: myTarget } } };
     *  combo.overlaySettings = customSettings;
     * ```
     * Get any custom overlay settings used by the combo:
     * ```typescript
     *  const comboOverlaySettings: OverlaySettings = myCombo.overlaySettings;
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.overlaySettings;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxComboComponent.prototype.dropdown;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxComboComponent.prototype.searchInput;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxComboComponent.prototype.comboInput;
    /**
     * The custom template, if any, that should be used when rendering ITEMS in the combo list
     *
     * ```typescript
     * // Set in typescript
     * const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
     * myComponent.combo.itemTemplate = myCustomTemplate;
     * ```
     * ```html
     * <!-- Set in markup -->
     *  <igx-combo #combo>
     *      ...
     *      <ng-template igxComboItem>
     *          <div class="custom-item" let-item let-key="valueKey">
     *              <div class="custom-item__name">{{ item[key] }}</div>
     *              <div class="custom-item__cost">{{ item.cost }}</div>
     *          </div>
     *      </ng-template>
     *  </igx-combo>
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.itemTemplate;
    /**
     * The custom template, if any, that should be used when rendering the HEADER for the combo items list
     *
     * ```typescript
     * // Set in typescript
     * const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
     * myComponent.combo.headerTemplate = myCustomTemplate;
     * ```
     * ```html
     * <!-- Set in markup -->
     *  <igx-combo #combo>
     *      ...
     *      <ng-template igxComboHeader>
     *          <div class="combo__header">
     *              This is a custom header
     *          </div>
     *      </ng-template>
     *  </igx-combo>
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.headerTemplate;
    /**
     * The custom template, if any, that should be used when rendering the FOOTER for the combo items list
     *
     * ```typescript
     * // Set in typescript
     * const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
     * myComponent.combo.footerTemplate = myCustomTemplate;
     * ```
     * ```html
     * <!-- Set in markup -->
     *  <igx-combo #combo>
     *      ...
     *      <ng-template igxComboFooter>
     *          <div class="combo__footer">
     *              This is a custom footer
     *          </div>
     *      </ng-template>
     *  </igx-combo>
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.footerTemplate;
    /**
     * The custom template, if any, that should be used when rendering HEADER ITEMS for groups in the combo list
     *
     * ```typescript
     * // Set in typescript
     * const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
     * myComponent.combo.headerItemTemplate = myCustomTemplate;
     * ```
     * ```html
     * <!-- Set in markup -->
     *  <igx-combo #combo>
     *      ...
     *      <ng-template igxComboHeaderItem let-item let-key="groupKey">
     *          <div class="custom-item--group">Group header for {{ item[key] }}</div>
     *      </ng-template>
     *  </igx-combo>
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.headerItemTemplate;
    /**
     * The custom template, if any, that should be used when rendering the ADD BUTTON in the combo drop down
     *
     * ```typescript
     * // Set in typescript
     * const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
     * myComponent.combo.addItemTemplate = myCustomTemplate;
     * ```
     * ```html
     * <!-- Set in markup -->
     *  <igx-combo #combo>
     *      ...
     *      <ng-template igxComboAddItem>
     *          <button class="combo__add-button">
     *              Click to add item
     *          </button>
     *      </ng-template>
     *  </igx-combo>
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.addItemTemplate;
    /**
     * The custom template, if any, that should be used when rendering the ADD BUTTON in the combo drop down
     *
     * ```typescript
     * // Set in typescript
     * const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
     * myComponent.combo.emptyTemplate = myCustomTemplate;
     * ```
     * ```html
     * <!-- Set in markup -->
     *  <igx-combo #combo>
     *      ...
     *      <ng-template igxComboEmpty>
     *          <div class="combo--emtpy">
     *              There are no items to display
     *          </div>
     *      </ng-template>
     *  </igx-combo>
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.emptyTemplate;
    /**
     * The custom template, if any, that should be used when rendering the combo TOGGLE(open/close) button
     *
     * ```typescript
     * // Set in typescript
     * const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
     * myComponent.combo.toggleIconTemplate = myCustomTemplate;
     * ```
     * ```html
     * <!-- Set in markup -->
     *  <igx-combo #combo>
     *      ...
     *      <ng-template igxComboToggleIcon let-collapsed>
     *          <igx-icon>{{ collapsed ? 'remove_circle' : 'remove_circle_outline'}}</igx-icon>
     *      </ng-template>
     *  </igx-combo>
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.toggleIconTemplate;
    /**
     * The custom template, if any, that should be used when rendering the combo CLEAR button
     *
     * ```typescript
     * // Set in typescript
     * const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
     * myComponent.combo.clearIconTemplate = myCustomTemplate;
     * ```
     * ```html
     * <!-- Set in markup -->
     *  <igx-combo #combo>
     *      ...
     *      <ng-template igxComboClearIcon>
     *          <igx-icon>clear</igx-icon>
     *      </ng-template>
     *  </igx-combo>
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.clearIconTemplate;
    /**
     * @type {?}
     * @protected
     */
    IgxComboComponent.prototype.primitiveTemplate;
    /**
     * @type {?}
     * @protected
     */
    IgxComboComponent.prototype.complexTemplate;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxComboComponent.prototype.virtualScrollContainer;
    /**
     * @type {?}
     * @protected
     */
    IgxComboComponent.prototype.dropdownContainer;
    /**
     * Emitted when item selection is changing, before the selection completes
     *
     * ```html
     * <igx-combo (onSelectionChange)='handleSelection()'></igx-combo>
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.onSelectionChange;
    /**
     * Emitted before the dropdown is opened
     *
     * ```html
     * <igx-combo onOpening='handleOpening($event)'></igx-combo>
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.onOpening;
    /**
     * Emitted after the dropdown is opened
     *
     * ```html
     * <igx-combo (onOpened)='handleOpened()'></igx-combo>
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.onOpened;
    /**
     * Emitted before the dropdown is closed
     *
     * ```html
     * <igx-combo (onClosing)='handleClosing($event)'></igx-combo>
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.onClosing;
    /**
     * Emitted after the dropdown is closed
     *
     * ```html
     * <igx-combo (onClosed)='handleClosed()'></igx-combo>
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.onClosed;
    /**
     * Emitted when an item is being added to the data collection
     *
     * ```html
     * <igx-combo (onAddition)='handleAdditionEvent()'></igx-combo>
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.onAddition;
    /**
     * Emitted when the value of the search input changes (e.g. typing, pasting, clear, etc.)
     *
     * ```html
     * <igx-combo (onSearchInput)='handleSearchInputEvent()'></igx-combo>
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.onSearchInput;
    /**
     * Emitted when new chunk of data is loaded from the virtualization
     *
     * ```html
     * <igx-combo (onDataPreLoad)='handleDataPreloadEvent()'></igx-combo>
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.onDataPreLoad;
    /**
     * Gets/gets combo id.
     *
     * ```typescript
     * // get
     * let id = this.combo.id;
     * ```
     *
     * ```html
     * <!--set-->
     * <igx-combo [id]='combo1'></igx-combo>
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.id;
    /**
     * Sets the style width of the element
     *
     * ```typescript
     * // get
     * let myComboWidth = this.combo.width;
     * ```
     *
     * ```html
     * <!--set-->
     * <igx-combo [width]='250px'></igx-combo>
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.width;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxComboComponent.prototype.cssClass;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxComboComponent.prototype.role;
    /**
     * Controls whether custom values can be added to the collection
     *
     * ```typescript
     * // get
     * let comboAllowsCustomValues = this.combo.allowCustomValues;
     * ```
     *
     * ```html
     * <!--set-->
     * <igx-combo [allowCustomValues]='true'></igx-combo>
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.allowCustomValues;
    /**
     * Configures the drop down list width
     *
     * ```typescript
     * // get
     * let myComboItemsWidth = this.combo.itemsWidth;
     * ```
     *
     * ```html
     * <!--set-->
     * <igx-combo [itemsWidth] = '"180px"'></igx-combo>
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.itemsWidth;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxComboComponent.prototype.filteringLogic;
    /**
     * Defines the placeholder value for the combo value field
     *
     * ```typescript
     * // get
     * let myComboPlaceholder = this.combo.placeholder;
     * ```
     *
     * ```html
     * <!--set-->
     * <igx-combo [placeholder]='newPlaceHolder'></igx-combo>
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.placeholder;
    /**
     * Defines the placeholder value for the combo dropdown search field
     *
     * ```typescript
     * // get
     * let myComboSearchPlaceholder = this.combo.searchPlaceholder;
     * ```
     *
     * ```html
     * <!--set-->
     * <igx-combo [searchPlaceholder]='newPlaceHolder'></igx-combo>
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.searchPlaceholder;
    /**
     * Combo value data source propery.
     *
     * ```typescript
     * // get
     * let myComboValueKey = this.combo.valueKey;
     * ```
     *
     * ```html
     * <!--set-->
     * <igx-combo [valueKey]='myKey'></igx-combo>
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.valueKey;
    /**
     * An \@Input property that enabled/disables filtering in the list. The default is `true`.
     * ```html
     * <igx-combo [filterable]="'false'">
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.filterable;
    /**
     * An \@Input property that set aria-labelledby attribute
     * ```html
     * <igx-combo [ariaLabelledBy]="'label1'">
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.ariaLabelledBy;
    /**
     * An \@Input property that enabled/disables combo. The default is `false`.
     * ```html
     * <igx-combo [disabled]="'true'">
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.disabled;
    /**
     * An \@Input property that sets how the combo will be styled.
     * The allowed values are `line`, `box`, `border` and `search`. The default is `box`.
     * ```html
     * <igx-combo [type]="'line'">
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.type;
    /**
     * Gets/Sets if control is valid, when used in a form
     *
     * ```typescript
     * // get
     * let valid = this.combo.valid;
     * ```
     * ```typescript
     * // set
     * this.combo.valid = IgxComboState.INVALID;
     * ```
     * @type {?}
     */
    IgxComboComponent.prototype.valid;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxComboComponent.prototype.searchValue;
    /**
     * @type {?}
     * @protected
     */
    IgxComboComponent.prototype.onStatusChanged;
    /**
     * @type {?}
     * @protected
     */
    IgxComboComponent.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    IgxComboComponent.prototype.cdr;
    /**
     * @type {?}
     * @protected
     */
    IgxComboComponent.prototype.selection;
    /**
     * @type {?}
     * @protected
     */
    IgxComboComponent.prototype.comboAPI;
    /**
     * @type {?}
     * @protected
     */
    IgxComboComponent.prototype._displayDensityOptions;
    /**
     * @type {?}
     * @private
     */
    IgxComboComponent.prototype.injector;
}
/**
 * @hidden
 */
export class IgxComboModule {
}
IgxComboModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxComboComponent, IgxComboItemComponent, IgxComboFilterConditionPipe, IgxComboGroupingPipe,
                    IgxComboFilteringPipe, IgxComboSortingPipe, IgxComboDropDownComponent, IgxComboAddItemComponent,
                    IgxComboItemDirective,
                    IgxComboEmptyDirective,
                    IgxComboHeaderItemDirective,
                    IgxComboHeaderDirective,
                    IgxComboFooterDirective,
                    IgxComboAddItemDirective,
                    IgxComboToggleIconDirective,
                    IgxComboClearIconDirective],
                exports: [IgxComboComponent, IgxComboItemComponent, IgxComboDropDownComponent, IgxComboAddItemComponent,
                    IgxComboItemDirective,
                    IgxComboEmptyDirective,
                    IgxComboHeaderItemDirective,
                    IgxComboHeaderDirective,
                    IgxComboFooterDirective,
                    IgxComboAddItemDirective,
                    IgxComboToggleIconDirective,
                    IgxComboClearIconDirective],
                imports: [IgxRippleModule, CommonModule, IgxInputGroupModule, FormsModule, ReactiveFormsModule,
                    IgxForOfModule, IgxToggleModule, IgxCheckboxModule, IgxDropDownModule, IgxButtonModule, IgxIconModule],
                providers: [IgxSelectionAPIService]
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21iby9jb21iby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQzdHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ1ksaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQzlHLEtBQUssRUFBRSxRQUFRLEVBQXFCLE1BQU0sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFDN0csTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNILHFCQUFxQixFQUNyQixzQkFBc0IsRUFDdEIsMkJBQTJCLEVBQzNCLHVCQUF1QixFQUN2Qix1QkFBdUIsRUFDdkIsd0JBQXdCLEVBQ3hCLDJCQUEyQixFQUMzQiwwQkFBMEIsRUFDN0IsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUF3QixpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0SCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsVUFBVSxFQUFtRCxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRyxPQUFPLEVBQUUsY0FBYyxFQUF3QixNQUFNLG1EQUFtRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxnQkFB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bURBQWlHOzs7OztJQUNqRyxxQ0FBc0M7Ozs7O0FBMjVDOUMsTUFBTSxPQUFPLGNBQWM7OztZQXhCMUIsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLDJCQUEyQixFQUFFLG9CQUFvQjtvQkFDdEcscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUseUJBQXlCLEVBQUUsd0JBQXdCO29CQUMvRixxQkFBcUI7b0JBQ3JCLHNCQUFzQjtvQkFDdEIsMkJBQTJCO29CQUMzQix1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtvQkFDdkIsd0JBQXdCO29CQUN4QiwyQkFBMkI7b0JBQzNCLDBCQUEwQixDQUFDO2dCQUMvQixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0I7b0JBQ25HLHFCQUFxQjtvQkFDckIsc0JBQXNCO29CQUN0QiwyQkFBMkI7b0JBQzNCLHVCQUF1QjtvQkFDdkIsdUJBQXVCO29CQUN2Qix3QkFBd0I7b0JBQ3hCLDJCQUEyQjtvQkFDM0IsMEJBQTBCLENBQUM7Z0JBQy9CLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLG1CQUFtQjtvQkFDMUYsY0FBYyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsYUFBYSxDQUFDO2dCQUMxRyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbm5lY3RlZFBvc2l0aW9uaW5nU3RyYXRlZ3kgfSBmcm9tICcuLy4uL3NlcnZpY2VzL292ZXJsYXkvcG9zaXRpb24vY29ubmVjdGVkLXBvc2l0aW9uaW5nLXN0cmF0ZWd5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICAgIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLFxuICAgIElucHV0LCBOZ01vZHVsZSwgT25Jbml0LCBPbkRlc3Ryb3ksIE91dHB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgT3B0aW9uYWwsIEluamVjdCwgSW5qZWN0b3IsIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIElneENvbWJvSXRlbURpcmVjdGl2ZSxcbiAgICBJZ3hDb21ib0VtcHR5RGlyZWN0aXZlLFxuICAgIElneENvbWJvSGVhZGVySXRlbURpcmVjdGl2ZSxcbiAgICBJZ3hDb21ib0hlYWRlckRpcmVjdGl2ZSxcbiAgICBJZ3hDb21ib0Zvb3RlckRpcmVjdGl2ZSxcbiAgICBJZ3hDb21ib0FkZEl0ZW1EaXJlY3RpdmUsXG4gICAgSWd4Q29tYm9Ub2dnbGVJY29uRGlyZWN0aXZlLFxuICAgIElneENvbWJvQ2xlYXJJY29uRGlyZWN0aXZlXG59IGZyb20gJy4vY29tYm8uZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SLCBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJZ3hDaGVja2JveE1vZHVsZSB9IGZyb20gJy4uL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZWxlY3Rpb24nO1xuaW1wb3J0IHsgY2xvbmVBcnJheSwgQ2FuY2VsYWJsZUV2ZW50QXJncywgQ2FuY2VsYWJsZUJyb3dzZXJFdmVudEFyZ3MgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IElneFN0cmluZ0ZpbHRlcmluZ09wZXJhbmQsIElneEJvb2xlYW5GaWx0ZXJpbmdPcGVyYW5kIH0gZnJvbSAnLi4vZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1jb25kaXRpb24nO1xuaW1wb3J0IHsgRmlsdGVyaW5nTG9naWMsIElGaWx0ZXJpbmdFeHByZXNzaW9uIH0gZnJvbSAnLi4vZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1leHByZXNzaW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTb3J0aW5nRGlyZWN0aW9uLCBJU29ydGluZ0V4cHJlc3Npb24gfSBmcm9tICcuLi9kYXRhLW9wZXJhdGlvbnMvc29ydGluZy1leHByZXNzaW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJZ3hGb3JPZk1vZHVsZSwgSUZvck9mU3RhdGUsIElneEZvck9mRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9mb3Itb2YvZm9yX29mLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBJZ3hSaXBwbGVNb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3JpcHBsZS9yaXBwbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElneFRvZ2dsZU1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvdG9nZ2xlL3RvZ2dsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4QnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9idXR0b24vYnV0dG9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hEcm9wRG93bk1vZHVsZSB9IGZyb20gJy4uL2Ryb3AtZG93bi9pbmRleCc7XG5pbXBvcnQgeyBJZ3hJbnB1dEdyb3VwTW9kdWxlIH0gZnJvbSAnLi4vaW5wdXQtZ3JvdXAvaW5wdXQtZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IElneENvbWJvSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tYm8taXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4Q29tYm9Ecm9wRG93bkNvbXBvbmVudCB9IGZyb20gJy4vY29tYm8tZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IElneENvbWJvRmlsdGVyQ29uZGl0aW9uUGlwZSwgSWd4Q29tYm9GaWx0ZXJpbmdQaXBlLCBJZ3hDb21ib0dyb3VwaW5nUGlwZSwgSWd4Q29tYm9Tb3J0aW5nUGlwZSB9IGZyb20gJy4vY29tYm8ucGlwZXMnO1xuaW1wb3J0IHsgT3ZlcmxheVNldHRpbmdzLCBBYnNvbHV0ZVNjcm9sbFN0cmF0ZWd5IH0gZnJvbSAnLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRGVmYXVsdFNvcnRpbmdTdHJhdGVneSwgSVNvcnRpbmdTdHJhdGVneSB9IGZyb20gJy4uL2RhdGEtb3BlcmF0aW9ucy9zb3J0aW5nLXN0cmF0ZWd5JztcbmltcG9ydCB7IERpc3BsYXlEZW5zaXR5QmFzZSwgRGlzcGxheURlbnNpdHlUb2tlbiwgSURpc3BsYXlEZW5zaXR5T3B0aW9ucyB9IGZyb20gJy4uL2NvcmUvZGVuc2l0eSc7XG5pbXBvcnQgeyBJR1hfQ09NQk9fQ09NUE9ORU5ULCBJZ3hDb21ib0Jhc2UgfSBmcm9tICcuL2NvbWJvLmNvbW1vbic7XG5pbXBvcnQgeyBJZ3hDb21ib0FkZEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbWJvLWFkZC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hDb21ib0FQSVNlcnZpY2UgfSBmcm9tICcuL2NvbWJvLmFwaSc7XG5pbXBvcnQgeyBFZGl0b3JQcm92aWRlciB9IGZyb20gJy4uL2NvcmUvZWRpdC1wcm92aWRlcic7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZW51bSBEYXRhVHlwZXMge1xuICAgIEVNUFRZID0gJ2VtcHR5JyxcbiAgICBQUklNSVRJVkUgPSAncHJpbWl0aXZlJyxcbiAgICBDT01QTEVYID0gJ2NvbXBsZXgnLFxuICAgIFBSSU1BUllLRVkgPSAndmFsdWVLZXknXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5jb25zdCBJdGVtSGVpZ2h0cyA9IHtcbiAgICAnY29tZm9ydGFibGUnOiA0MCxcbiAgICAnY29zeSc6IDMyLFxuICAgICdjb21wYWN0JzogMjgsXG59O1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqIFRoZSBkZWZhdWx0IG51bWJlciBvZiBpdGVtcyB0aGF0IHNob3VsZCBiZSBpbiB0aGUgY29tYm8nc1xuICogZHJvcC1kb3duIGxpc3QgaWYgbm8gYFtpdGVtc01heEhlaWdodF1gIGlzIHNwZWNpZmllZFxuICovXG5jb25zdCBpdGVtc0luQ29udGFpbmVyID0gMTA7XG5cbmV4cG9ydCBlbnVtIElneENvbWJvU3RhdGUge1xuICAgIC8qKlxuICAgICAqIENvbWJvIHdpdGggaW5pdGlhbCBzdGF0ZS5cbiAgICAgKi9cbiAgICBJTklUSUFMLFxuICAgIC8qKlxuICAgICAqIENvbWJvIHdpdGggdmFsaWQgc3RhdGUuXG4gICAgICovXG4gICAgVkFMSUQsXG4gICAgLyoqXG4gICAgICogQ29tYm8gd2l0aCBpbnZhbGlkIHN0YXRlLlxuICAgICAqL1xuICAgIElOVkFMSURcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ29tYm9TZWxlY3Rpb25DaGFuZ2VFdmVudEFyZ3MgZXh0ZW5kcyBDYW5jZWxhYmxlRXZlbnRBcmdzIHtcbiAgICBvbGRTZWxlY3Rpb246IGFueVtdO1xuICAgIG5ld1NlbGVjdGlvbjogYW55W107XG4gICAgZXZlbnQ/OiBFdmVudDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ29tYm9JdGVtQWRkaXRpb25FdmVudCB7XG4gICAgb2xkQ29sbGVjdGlvbjogYW55W107XG4gICAgYWRkZWRJdGVtOiBhbnk7XG4gICAgbmV3Q29sbGVjdGlvbjogYW55W107XG59XG5cbmxldCBORVhUX0lEID0gMDtcbmNvbnN0IG5vb3AgPSAoKSA9PiB7IH07XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LWNvbWJvJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2NvbWJvLmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSWd4Q29tYm9BUElTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6IElHWF9DT01CT19DT01QT05FTlQsIHVzZUV4aXN0aW5nOiBJZ3hDb21ib0NvbXBvbmVudCB9LFxuICAgICAgICB7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJZ3hDb21ib0NvbXBvbmVudCksIG11bHRpOiB0cnVlIH1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIElneENvbWJvQ29tcG9uZW50IGV4dGVuZHMgRGlzcGxheURlbnNpdHlCYXNlIGltcGxlbWVudHMgSWd4Q29tYm9CYXNlLCBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LFxuICAgIE9uRGVzdHJveSwgRWRpdG9yUHJvdmlkZXIge1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGN1c3RvbVZhbHVlRmxhZyA9IHRydWU7XG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZGVmYXVsdEZhbGxiYWNrR3JvdXAgPSAnT3RoZXInO1xuICAgIHByb3RlY3RlZCBzdHJpbmdGaWx0ZXJzID0gSWd4U3RyaW5nRmlsdGVyaW5nT3BlcmFuZDtcbiAgICBwcm90ZWN0ZWQgYm9vbGVhbkZpbHRlcnMgPSBJZ3hCb29sZWFuRmlsdGVyaW5nT3BlcmFuZDtcbiAgICBwcm90ZWN0ZWQgX2ZpbHRlcmluZ0xvZ2ljID0gRmlsdGVyaW5nTG9naWMuT3I7XG4gICAgcHJvdGVjdGVkIF9maWx0ZXJpbmdFeHByZXNzaW9uczogSUZpbHRlcmluZ0V4cHJlc3Npb25bXSA9IFtdO1xuICAgIHByb3RlY3RlZCBfc29ydGluZ0V4cHJlc3Npb25zOiBJU29ydGluZ0V4cHJlc3Npb25bXSA9IFtdO1xuICAgIHByb3RlY3RlZCBfZ3JvdXBLZXkgPSAnJztcbiAgICBwcm90ZWN0ZWQgX2Rpc3BsYXlLZXk6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgX3ByZXZJbnB1dFZhbHVlID0gJyc7XG4gICAgcHJpdmF0ZSBfZGF0YVR5cGUgPSAnJztcbiAgICBwcml2YXRlIG5nQ29udHJvbDogTmdDb250cm9sID0gbnVsbDtcbiAgICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIHByaXZhdGUgX2RhdGEgPSBbXTtcbiAgICBwcml2YXRlIF9maWx0ZXJlZERhdGEgPSBbXTtcbiAgICBwcml2YXRlIF9pdGVtSGVpZ2h0ID0gbnVsbDtcbiAgICBwcml2YXRlIF9pdGVtc01heEhlaWdodCA9IG51bGw7XG4gICAgcHJpdmF0ZSBfb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XG4gICAgcHJpdmF0ZSBfb3ZlcmxheVNldHRpbmdzOiBPdmVybGF5U2V0dGluZ3MgPSB7XG4gICAgICAgIHNjcm9sbFN0cmF0ZWd5OiBuZXcgQWJzb2x1dGVTY3JvbGxTdHJhdGVneSgpLFxuICAgICAgICBwb3NpdGlvblN0cmF0ZWd5OiBuZXcgQ29ubmVjdGVkUG9zaXRpb25pbmdTdHJhdGVneSgpLFxuICAgICAgICBtb2RhbDogZmFsc2UsXG4gICAgICAgIGNsb3NlT25PdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgICAgIGV4Y2x1ZGVQb3NpdGlvblRhcmdldDogdHJ1ZVxuICAgIH07XG4gICAgcHJpdmF0ZSBfdmFsdWUgPSAnJztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwcm90ZWN0ZWQgc2VsZWN0aW9uOiBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgY29tYm9BUEk6IElneENvbWJvQVBJU2VydmljZSxcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChEaXNwbGF5RGVuc2l0eVRva2VuKSBwcm90ZWN0ZWQgX2Rpc3BsYXlEZW5zaXR5T3B0aW9uczogSURpc3BsYXlEZW5zaXR5T3B0aW9ucyxcbiAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAgICAgc3VwZXIoX2Rpc3BsYXlEZW5zaXR5T3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY29tYm9BUEkucmVnaXN0ZXIodGhpcyk7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChJZ3hGb3JPZkRpcmVjdGl2ZSwgeyByZWFkOiBJZ3hGb3JPZkRpcmVjdGl2ZSwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIHZpcnREaXI6IElneEZvck9mRGlyZWN0aXZlPGFueT47XG5cbiAgICAvKipcbiAgICAgKiBTZXQgY3VzdG9tIG92ZXJsYXkgc2V0dGluZ3MgdGhhdCBjb250cm9sIGhvdyB0aGUgY29tYm8ncyBsaXN0IG9mIGl0ZW1zIGlzIGRpc3BsYXllZC5cbiAgICAgKiBTZXQ6XG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY29tYm8gW292ZXJsYXlTZXR0aW5nc10gPSBcImN1c3RvbU92ZXJsYXlTZXR0aW5nc1wiPjwvaWd4LWNvbWJvPlxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICBjb25zdCBjdXN0b21TZXR0aW5ncyA9IHsgcG9zaXRpb25TdHJhdGVneTogeyBzZXR0aW5nczogeyB0YXJnZXQ6IG15VGFyZ2V0IH0gfSB9O1xuICAgICAqICBjb21iby5vdmVybGF5U2V0dGluZ3MgPSBjdXN0b21TZXR0aW5ncztcbiAgICAgKiBgYGBcbiAgICAgKiBHZXQgYW55IGN1c3RvbSBvdmVybGF5IHNldHRpbmdzIHVzZWQgYnkgdGhlIGNvbWJvOlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgY29uc3QgY29tYm9PdmVybGF5U2V0dGluZ3M6IE92ZXJsYXlTZXR0aW5ncyA9IG15Q29tYm8ub3ZlcmxheVNldHRpbmdzO1xuICAgICAqIGBgYFxuICAgICAqL1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgb3ZlcmxheVNldHRpbmdzOiBPdmVybGF5U2V0dGluZ3MgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKElneENvbWJvRHJvcERvd25Db21wb25lbnQsIHsgcmVhZDogSWd4Q29tYm9Ecm9wRG93bkNvbXBvbmVudCwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGRyb3Bkb3duOiBJZ3hDb21ib0Ryb3BEb3duQ29tcG9uZW50O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdzZWFyY2hJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBzZWFyY2hJbnB1dDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PiA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2NvbWJvSW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBjb21ib0lucHV0OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgZ2V0IGRpc3BsYXlTZWFyY2hJbnB1dCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyYWJsZSB8fCB0aGlzLmFsbG93Q3VzdG9tVmFsdWVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXN0b20gdGVtcGxhdGUsIGlmIGFueSwgdGhhdCBzaG91bGQgYmUgdXNlZCB3aGVuIHJlbmRlcmluZyBJVEVNUyBpbiB0aGUgY29tYm8gbGlzdFxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIFNldCBpbiB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgbXlDdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IG15Q29tcG9uZW50LmN1c3RvbVRlbXBsYXRlO1xuICAgICAqIG15Q29tcG9uZW50LmNvbWJvLml0ZW1UZW1wbGF0ZSA9IG15Q3VzdG9tVGVtcGxhdGU7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDwhLS0gU2V0IGluIG1hcmt1cCAtLT5cbiAgICAgKiAgPGlneC1jb21ibyAjY29tYm8+XG4gICAgICogICAgICAuLi5cbiAgICAgKiAgICAgIDxuZy10ZW1wbGF0ZSBpZ3hDb21ib0l0ZW0+XG4gICAgICogICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1pdGVtXCIgbGV0LWl0ZW0gbGV0LWtleT1cInZhbHVlS2V5XCI+XG4gICAgICogICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20taXRlbV9fbmFtZVwiPnt7IGl0ZW1ba2V5XSB9fTwvZGl2PlxuICAgICAqICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWl0ZW1fX2Nvc3RcIj57eyBpdGVtLmNvc3QgfX08L2Rpdj5cbiAgICAgKiAgICAgICAgICA8L2Rpdj5cbiAgICAgKiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICogIDwvaWd4LWNvbWJvPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4Q29tYm9JdGVtRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXN0b20gdGVtcGxhdGUsIGlmIGFueSwgdGhhdCBzaG91bGQgYmUgdXNlZCB3aGVuIHJlbmRlcmluZyB0aGUgSEVBREVSIGZvciB0aGUgY29tYm8gaXRlbXMgbGlzdFxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIFNldCBpbiB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgbXlDdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IG15Q29tcG9uZW50LmN1c3RvbVRlbXBsYXRlO1xuICAgICAqIG15Q29tcG9uZW50LmNvbWJvLmhlYWRlclRlbXBsYXRlID0gbXlDdXN0b21UZW1wbGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLSBTZXQgaW4gbWFya3VwIC0tPlxuICAgICAqICA8aWd4LWNvbWJvICNjb21ibz5cbiAgICAgKiAgICAgIC4uLlxuICAgICAqICAgICAgPG5nLXRlbXBsYXRlIGlneENvbWJvSGVhZGVyPlxuICAgICAqICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21ib19faGVhZGVyXCI+XG4gICAgICogICAgICAgICAgICAgIFRoaXMgaXMgYSBjdXN0b20gaGVhZGVyXG4gICAgICogICAgICAgICAgPC9kaXY+XG4gICAgICogICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAqICA8L2lneC1jb21ibz5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneENvbWJvSGVhZGVyRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1c3RvbSB0ZW1wbGF0ZSwgaWYgYW55LCB0aGF0IHNob3VsZCBiZSB1c2VkIHdoZW4gcmVuZGVyaW5nIHRoZSBGT09URVIgZm9yIHRoZSBjb21ibyBpdGVtcyBsaXN0XG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gU2V0IGluIHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBteUN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbXlDb21wb25lbnQuY3VzdG9tVGVtcGxhdGU7XG4gICAgICogbXlDb21wb25lbnQuY29tYm8uZm9vdGVyVGVtcGxhdGUgPSBteUN1c3RvbVRlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tIFNldCBpbiBtYXJrdXAgLS0+XG4gICAgICogIDxpZ3gtY29tYm8gI2NvbWJvPlxuICAgICAqICAgICAgLi4uXG4gICAgICogICAgICA8bmctdGVtcGxhdGUgaWd4Q29tYm9Gb290ZXI+XG4gICAgICogICAgICAgICAgPGRpdiBjbGFzcz1cImNvbWJvX19mb290ZXJcIj5cbiAgICAgKiAgICAgICAgICAgICAgVGhpcyBpcyBhIGN1c3RvbSBmb290ZXJcbiAgICAgKiAgICAgICAgICA8L2Rpdj5cbiAgICAgKiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICogIDwvaWd4LWNvbWJvPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4Q29tYm9Gb290ZXJEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBmb290ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VzdG9tIHRlbXBsYXRlLCBpZiBhbnksIHRoYXQgc2hvdWxkIGJlIHVzZWQgd2hlbiByZW5kZXJpbmcgSEVBREVSIElURU1TIGZvciBncm91cHMgaW4gdGhlIGNvbWJvIGxpc3RcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBTZXQgaW4gdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IG15Q3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBteUNvbXBvbmVudC5jdXN0b21UZW1wbGF0ZTtcbiAgICAgKiBteUNvbXBvbmVudC5jb21iby5oZWFkZXJJdGVtVGVtcGxhdGUgPSBteUN1c3RvbVRlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tIFNldCBpbiBtYXJrdXAgLS0+XG4gICAgICogIDxpZ3gtY29tYm8gI2NvbWJvPlxuICAgICAqICAgICAgLi4uXG4gICAgICogICAgICA8bmctdGVtcGxhdGUgaWd4Q29tYm9IZWFkZXJJdGVtIGxldC1pdGVtIGxldC1rZXk9XCJncm91cEtleVwiPlxuICAgICAqICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20taXRlbS0tZ3JvdXBcIj5Hcm91cCBoZWFkZXIgZm9yIHt7IGl0ZW1ba2V5XSB9fTwvZGl2PlxuICAgICAqICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgKiAgPC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChJZ3hDb21ib0hlYWRlckl0ZW1EaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBoZWFkZXJJdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1c3RvbSB0ZW1wbGF0ZSwgaWYgYW55LCB0aGF0IHNob3VsZCBiZSB1c2VkIHdoZW4gcmVuZGVyaW5nIHRoZSBBREQgQlVUVE9OIGluIHRoZSBjb21ibyBkcm9wIGRvd25cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBTZXQgaW4gdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IG15Q3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBteUNvbXBvbmVudC5jdXN0b21UZW1wbGF0ZTtcbiAgICAgKiBteUNvbXBvbmVudC5jb21iby5hZGRJdGVtVGVtcGxhdGUgPSBteUN1c3RvbVRlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tIFNldCBpbiBtYXJrdXAgLS0+XG4gICAgICogIDxpZ3gtY29tYm8gI2NvbWJvPlxuICAgICAqICAgICAgLi4uXG4gICAgICogICAgICA8bmctdGVtcGxhdGUgaWd4Q29tYm9BZGRJdGVtPlxuICAgICAqICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjb21ib19fYWRkLWJ1dHRvblwiPlxuICAgICAqICAgICAgICAgICAgICBDbGljayB0byBhZGQgaXRlbVxuICAgICAqICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAqICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgKiAgPC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChJZ3hDb21ib0FkZEl0ZW1EaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBhZGRJdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1c3RvbSB0ZW1wbGF0ZSwgaWYgYW55LCB0aGF0IHNob3VsZCBiZSB1c2VkIHdoZW4gcmVuZGVyaW5nIHRoZSBBREQgQlVUVE9OIGluIHRoZSBjb21ibyBkcm9wIGRvd25cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBTZXQgaW4gdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IG15Q3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBteUNvbXBvbmVudC5jdXN0b21UZW1wbGF0ZTtcbiAgICAgKiBteUNvbXBvbmVudC5jb21iby5lbXB0eVRlbXBsYXRlID0gbXlDdXN0b21UZW1wbGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLSBTZXQgaW4gbWFya3VwIC0tPlxuICAgICAqICA8aWd4LWNvbWJvICNjb21ibz5cbiAgICAgKiAgICAgIC4uLlxuICAgICAqICAgICAgPG5nLXRlbXBsYXRlIGlneENvbWJvRW1wdHk+XG4gICAgICogICAgICAgICAgPGRpdiBjbGFzcz1cImNvbWJvLS1lbXRweVwiPlxuICAgICAqICAgICAgICAgICAgICBUaGVyZSBhcmUgbm8gaXRlbXMgdG8gZGlzcGxheVxuICAgICAqICAgICAgICAgIDwvZGl2PlxuICAgICAqICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgKiAgPC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChJZ3hDb21ib0VtcHR5RGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgZW1wdHlUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VzdG9tIHRlbXBsYXRlLCBpZiBhbnksIHRoYXQgc2hvdWxkIGJlIHVzZWQgd2hlbiByZW5kZXJpbmcgdGhlIGNvbWJvIFRPR0dMRShvcGVuL2Nsb3NlKSBidXR0b25cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBTZXQgaW4gdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IG15Q3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBteUNvbXBvbmVudC5jdXN0b21UZW1wbGF0ZTtcbiAgICAgKiBteUNvbXBvbmVudC5jb21iby50b2dnbGVJY29uVGVtcGxhdGUgPSBteUN1c3RvbVRlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tIFNldCBpbiBtYXJrdXAgLS0+XG4gICAgICogIDxpZ3gtY29tYm8gI2NvbWJvPlxuICAgICAqICAgICAgLi4uXG4gICAgICogICAgICA8bmctdGVtcGxhdGUgaWd4Q29tYm9Ub2dnbGVJY29uIGxldC1jb2xsYXBzZWQ+XG4gICAgICogICAgICAgICAgPGlneC1pY29uPnt7IGNvbGxhcHNlZCA/ICdyZW1vdmVfY2lyY2xlJyA6ICdyZW1vdmVfY2lyY2xlX291dGxpbmUnfX08L2lneC1pY29uPlxuICAgICAqICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgKiAgPC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChJZ3hDb21ib1RvZ2dsZUljb25EaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyB0b2dnbGVJY29uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1c3RvbSB0ZW1wbGF0ZSwgaWYgYW55LCB0aGF0IHNob3VsZCBiZSB1c2VkIHdoZW4gcmVuZGVyaW5nIHRoZSBjb21ibyBDTEVBUiBidXR0b25cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBTZXQgaW4gdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IG15Q3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBteUNvbXBvbmVudC5jdXN0b21UZW1wbGF0ZTtcbiAgICAgKiBteUNvbXBvbmVudC5jb21iby5jbGVhckljb25UZW1wbGF0ZSA9IG15Q3VzdG9tVGVtcGxhdGU7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDwhLS0gU2V0IGluIG1hcmt1cCAtLT5cbiAgICAgKiAgPGlneC1jb21ibyAjY29tYm8+XG4gICAgICogICAgICAuLi5cbiAgICAgKiAgICAgIDxuZy10ZW1wbGF0ZSBpZ3hDb21ib0NsZWFySWNvbj5cbiAgICAgKiAgICAgICAgICA8aWd4LWljb24+Y2xlYXI8L2lneC1pY29uPlxuICAgICAqICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgKiAgPC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChJZ3hDb21ib0NsZWFySWNvbkRpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGNsZWFySWNvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcblxuICAgIEBWaWV3Q2hpbGQoJ3ByaW1pdGl2ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCBwcmltaXRpdmVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbXBsZXgnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgY29tcGxleFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKElneEZvck9mRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyB2aXJ0dWFsU2Nyb2xsQ29udGFpbmVyOiBJZ3hGb3JPZkRpcmVjdGl2ZTxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnZHJvcGRvd25JdGVtQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgZHJvcGRvd25Db250YWluZXI6IEVsZW1lbnRSZWYgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCB3aGVuIGl0ZW0gc2VsZWN0aW9uIGlzIGNoYW5naW5nLCBiZWZvcmUgdGhlIHNlbGVjdGlvbiBjb21wbGV0ZXNcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbWJvIChvblNlbGVjdGlvbkNoYW5nZSk9J2hhbmRsZVNlbGVjdGlvbigpJz48L2lneC1jb21ibz5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25TZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPElDb21ib1NlbGVjdGlvbkNoYW5nZUV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgYmVmb3JlIHRoZSBkcm9wZG93biBpcyBvcGVuZWRcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbWJvIG9uT3BlbmluZz0naGFuZGxlT3BlbmluZygkZXZlbnQpJz48L2lneC1jb21ibz5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25PcGVuaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5jZWxhYmxlRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCBhZnRlciB0aGUgZHJvcGRvd24gaXMgb3BlbmVkXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb21ibyAob25PcGVuZWQpPSdoYW5kbGVPcGVuZWQoKSc+PC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uT3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCBiZWZvcmUgdGhlIGRyb3Bkb3duIGlzIGNsb3NlZFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY29tYm8gKG9uQ2xvc2luZyk9J2hhbmRsZUNsb3NpbmcoJGV2ZW50KSc+PC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uQ2xvc2luZyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuY2VsYWJsZUJyb3dzZXJFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIGFmdGVyIHRoZSBkcm9wZG93biBpcyBjbG9zZWRcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbWJvIChvbkNsb3NlZCk9J2hhbmRsZUNsb3NlZCgpJz48L2lneC1jb21ibz5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25DbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIHdoZW4gYW4gaXRlbSBpcyBiZWluZyBhZGRlZCB0byB0aGUgZGF0YSBjb2xsZWN0aW9uXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb21ibyAob25BZGRpdGlvbik9J2hhbmRsZUFkZGl0aW9uRXZlbnQoKSc+PC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uQWRkaXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPElDb21ib0l0ZW1BZGRpdGlvbkV2ZW50PigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgc2VhcmNoIGlucHV0IGNoYW5nZXMgKGUuZy4gdHlwaW5nLCBwYXN0aW5nLCBjbGVhciwgZXRjLilcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbWJvIChvblNlYXJjaElucHV0KT0naGFuZGxlU2VhcmNoSW5wdXRFdmVudCgpJz48L2lneC1jb21ibz5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25TZWFyY2hJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgd2hlbiBuZXcgY2h1bmsgb2YgZGF0YSBpcyBsb2FkZWQgZnJvbSB0aGUgdmlydHVhbGl6YXRpb25cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbWJvIChvbkRhdGFQcmVMb2FkKT0naGFuZGxlRGF0YVByZWxvYWRFdmVudCgpJz48L2lneC1jb21ibz5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25EYXRhUHJlTG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgLyoqXG4gICAgICogR2V0cy9nZXRzIGNvbWJvIGlkLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldFxuICAgICAqIGxldCBpZCA9IHRoaXMuY29tYm8uaWQ7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqIDxpZ3gtY29tYm8gW2lkXT0nY29tYm8xJz48L2lneC1jb21ibz5cbiAgICAgKiBgYGBcbiAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWQgPSBgaWd4LWNvbWJvLSR7TkVYVF9JRCsrfWA7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzdHlsZSB3aWR0aCBvZiB0aGUgZWxlbWVudFxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldFxuICAgICAqIGxldCBteUNvbWJvV2lkdGggPSB0aGlzLmNvbWJvLndpZHRoO1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDwhLS1zZXQtLT5cbiAgICAgKiA8aWd4LWNvbWJvIFt3aWR0aF09JzI1MHB4Jz48L2lneC1jb21ibz5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB3aWR0aDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1pbnB1dC1ncm91cC0tdmFsaWQnKVxuICAgIHB1YmxpYyBnZXQgdmFsaWRDbGFzcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWQgPT09IElneENvbWJvU3RhdGUuVkFMSUQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1pbnB1dC1ncm91cC0taW52YWxpZCcpXG4gICAgcHVibGljIGdldCBpbnZhbGlkQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkID09PSBJZ3hDb21ib1N0YXRlLklOVkFMSUQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jb21ibycpXG4gICAgcHVibGljIGNzc0NsYXNzID0gJ2lneC1jb21ibyc7IC8vIEluZGVwZW5kZW50IG9mIGRpc3BsYXkgZGVuc2l0eSwgYXQgdGhlIHRpbWUgYmVpbmdcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKGBhdHRyLnJvbGVgKVxuICAgIHB1YmxpYyByb2xlID0gJ2NvbWJvYm94JztcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZXhwYW5kZWQnKVxuICAgIHB1YmxpYyBnZXQgYXJpYUV4cGFuZGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMuZHJvcGRvd24uY29sbGFwc2VkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtaGFzcG9wdXAnKVxuICAgIHB1YmxpYyBnZXQgaGFzUG9wVXAoKSB7XG4gICAgICAgIHJldHVybiAnbGlzdGJveCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1vd25zJylcbiAgICBwdWJsaWMgZ2V0IGFyaWFPd25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5pZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb250cm9scyB3aGV0aGVyIGN1c3RvbSB2YWx1ZXMgY2FuIGJlIGFkZGVkIHRvIHRoZSBjb2xsZWN0aW9uXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IGNvbWJvQWxsb3dzQ3VzdG9tVmFsdWVzID0gdGhpcy5jb21iby5hbGxvd0N1c3RvbVZhbHVlcztcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGlneC1jb21ibyBbYWxsb3dDdXN0b21WYWx1ZXNdPSd0cnVlJz48L2lneC1jb21ibz5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBhbGxvd0N1c3RvbVZhbHVlcyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQ29uZmlndXJlcyB0aGUgZHJvcCBkb3duIGxpc3QgaGVpZ2h0XG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IG15Q29tYm9JdGVtc01heEhlaWdodCA9IHRoaXMuY29tYm8uaXRlbXNNYXhIZWlnaHQ7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqIDxpZ3gtY29tYm8gW2l0ZW1zTWF4SGVpZ2h0XT0nMzIwJz48L2lneC1jb21ibz5cbiAgICAgKiBgYGBcbiAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpdGVtc01heEhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5faXRlbXNNYXhIZWlnaHQgPT09IG51bGwgfHwgdGhpcy5faXRlbXNNYXhIZWlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbUhlaWdodCAqIGl0ZW1zSW5Db250YWluZXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zTWF4SGVpZ2h0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXRlbXNNYXhIZWlnaHQodmFsOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5faXRlbXNNYXhIZWlnaHQgPSB2YWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uZmlndXJlcyB0aGUgZHJvcCBkb3duIGxpc3Qgd2lkdGhcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRcbiAgICAgKiBsZXQgbXlDb21ib0l0ZW1zV2lkdGggPSB0aGlzLmNvbWJvLml0ZW1zV2lkdGg7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqIDxpZ3gtY29tYm8gW2l0ZW1zV2lkdGhdID0gJ1wiMTgwcHhcIic+PC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXRlbXNXaWR0aDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQ29uZmlndXJlcyB0aGUgZHJvcCBkb3duIGxpc3QgaXRlbSBoZWlnaHRcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRcbiAgICAgKiBsZXQgbXlDb21ib0l0ZW1IZWlnaHQgPSB0aGlzLmNvbWJvLml0ZW1IZWlnaHQ7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqIDxpZ3gtY29tYm8gW2l0ZW1IZWlnaHRdPSczMic+PC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGl0ZW1IZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuX2l0ZW1IZWlnaHQgPT09IG51bGwgfHwgdGhpcy5faXRlbUhlaWdodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gSXRlbUhlaWdodHNbdGhpcy5kaXNwbGF5RGVuc2l0eV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1IZWlnaHQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpdGVtSGVpZ2h0KHZhbDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1IZWlnaHQgPSB2YWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZmlsdGVyaW5nTG9naWMgPSBGaWx0ZXJpbmdMb2dpYy5PcjtcblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIHBsYWNlaG9sZGVyIHZhbHVlIGZvciB0aGUgY29tYm8gdmFsdWUgZmllbGRcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRcbiAgICAgKiBsZXQgbXlDb21ib1BsYWNlaG9sZGVyID0gdGhpcy5jb21iby5wbGFjZWhvbGRlcjtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGlneC1jb21ibyBbcGxhY2Vob2xkZXJdPSduZXdQbGFjZUhvbGRlcic+PC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcGxhY2Vob2xkZXIgPSAnJztcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGdldCBpbnB1dEVtcHR5KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMudmFsdWUgJiYgIXRoaXMucGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgcGxhY2Vob2xkZXIgdmFsdWUgZm9yIHRoZSBjb21ibyBkcm9wZG93biBzZWFyY2ggZmllbGRcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRcbiAgICAgKiBsZXQgbXlDb21ib1NlYXJjaFBsYWNlaG9sZGVyID0gdGhpcy5jb21iby5zZWFyY2hQbGFjZWhvbGRlcjtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGlneC1jb21ibyBbc2VhcmNoUGxhY2Vob2xkZXJdPSduZXdQbGFjZUhvbGRlcic+PC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2VhcmNoUGxhY2Vob2xkZXIgPSAnRW50ZXIgYSBTZWFyY2ggVGVybSc7XG5cbiAgICAvKipcbiAgICAgKiBDb21ibyBkYXRhIHNvdXJjZS5cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGlneC1jb21ibyBbZGF0YV09J2l0ZW1zJz48L2lneC1jb21ibz5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBkYXRhKCk6IGFueVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuICAgIHNldCBkYXRhKHZhbDogYW55W10pIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9ICh2YWwpID8gdmFsIDogW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tYm8gdmFsdWUgZGF0YSBzb3VyY2UgcHJvcGVyeS5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRcbiAgICAgKiBsZXQgbXlDb21ib1ZhbHVlS2V5ID0gdGhpcy5jb21iby52YWx1ZUtleTtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGlneC1jb21ibyBbdmFsdWVLZXldPSdteUtleSc+PC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmFsdWVLZXk6IHN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGRpc3BsYXlLZXkodmFsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheUtleSA9IHZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21ibyB0ZXh0IGRhdGEgc291cmNlIHByb3BlcnkuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IG15Q29tYm9EaXNwbGF5S2V5ID0gdGhpcy5jb21iby5kaXNwbGF5S2V5O1xuICAgICAqXG4gICAgICogLy8gc2V0XG4gICAgICogdGhpcy5jb21iby5kaXNwbGF5S2V5ID0gJ3ZhbCc7XG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGlneC1jb21ibyBbZGlzcGxheUtleV09J215ZGlzcGxheUtleSc+PC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgZ2V0IGRpc3BsYXlLZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNwbGF5S2V5ID8gdGhpcy5fZGlzcGxheUtleSA6IHRoaXMudmFsdWVLZXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGl0ZW0gcHJvcGVydHkgYnkgd2hpY2ggaXRlbXMgc2hvdWxkIGJlIGdyb3VwZWQgaW5zaWRlIHRoZSBpdGVtcyBsaXN0LiBOb3QgdXNhYmxlIGlmIGRhdGEgaXMgbm90IG9mIHR5cGUgT2JqZWN0W10uXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqIDxpZ3gtY29tYm8gW2dyb3VwS2V5XT0nbmV3R3JvdXBLZXknPjwvaWd4LWNvbWJvPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBncm91cEtleSh2YWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNsZWFyU29ydGluZyh0aGlzLl9ncm91cEtleSk7XG4gICAgICAgIHRoaXMuX2dyb3VwS2V5ID0gdmFsO1xuICAgICAgICB0aGlzLnNvcnQodGhpcy5fZ3JvdXBLZXkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBpdGVtIHByb3BlcnR5IGJ5IHdoaWNoIGl0ZW1zIHNob3VsZCBiZSBncm91cGVkIGluc2lkZSB0aGUgaXRlbXMgbGlzdC4gTm90IHVzYWJsZSBpZiBkYXRhIGlzIG5vdCBvZiB0eXBlIE9iamVjdFtdLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldFxuICAgICAqIGxldCBjdXJyZW50R3JvdXBLZXkgPSB0aGlzLmNvbWJvLmdyb3VwS2V5O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZ3JvdXBLZXkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyb3VwS2V5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGVuYWJsZWQvZGlzYWJsZXMgZmlsdGVyaW5nIGluIHRoZSBsaXN0LiBUaGUgZGVmYXVsdCBpcyBgdHJ1ZWAuXG4gICAgICogYGBgaHRtbFxuICAgICAqPGlneC1jb21ibyBbZmlsdGVyYWJsZV09XCInZmFsc2UnXCI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZmlsdGVyYWJsZSA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXQgYXJpYS1sYWJlbGxlZGJ5IGF0dHJpYnV0ZVxuICAgICAqIGBgYGh0bWxcbiAgICAgKjxpZ3gtY29tYm8gW2FyaWFMYWJlbGxlZEJ5XT1cIidsYWJlbDEnXCI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1sYWJlbGxlZGJ5JylcbiAgICBwdWJsaWMgYXJpYUxhYmVsbGVkQnk6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGVuYWJsZWQvZGlzYWJsZXMgY29tYm8uIFRoZSBkZWZhdWx0IGlzIGBmYWxzZWAuXG4gICAgICogYGBgaHRtbFxuICAgICAqPGlneC1jb21ibyBbZGlzYWJsZWRdPVwiJ3RydWUnXCI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgaG93IHRoZSBjb21ibyB3aWxsIGJlIHN0eWxlZC5cbiAgICAgKiBUaGUgYWxsb3dlZCB2YWx1ZXMgYXJlIGBsaW5lYCwgYGJveGAsIGBib3JkZXJgIGFuZCBgc2VhcmNoYC4gVGhlIGRlZmF1bHQgaXMgYGJveGAuXG4gICAgICogYGBgaHRtbFxuICAgICAqPGlneC1jb21ibyBbdHlwZV09XCInbGluZSdcIj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0eXBlID0gJ2JveCc7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzL1NldHMgaWYgY29udHJvbCBpcyB2YWxpZCwgd2hlbiB1c2VkIGluIGEgZm9ybVxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldFxuICAgICAqIGxldCB2YWxpZCA9IHRoaXMuY29tYm8udmFsaWQ7XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIHNldFxuICAgICAqIHRoaXMuY29tYm8udmFsaWQgPSBJZ3hDb21ib1N0YXRlLklOVkFMSUQ7XG4gICAgICogYGBgXG4gICAgKi9cbiAgICBwdWJsaWMgdmFsaWQ6IElneENvbWJvU3RhdGUgPSBJZ3hDb21ib1N0YXRlLklOSVRJQUw7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBzZWFyY2hWYWx1ZSA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLkFycm93RG93bicsIFsnJGV2ZW50J10pXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5BbHQuQXJyb3dEb3duJywgWyckZXZlbnQnXSlcbiAgICBvbkFycm93RG93bihldmVudDogRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgb25JbnB1dENsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSB2aXJ0dWFsaXplZCBkYXRhLiBJdCBjb250YWlucyBgc3RhcnRJbmRleGAgYW5kIGBjaHVua1NpemVgXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IHN0YXRlID0gdGhpcy5jb21iby52aXJ0dWFsaXphdGlvblN0YXRlO1xuICAgICAqIGBgYFxuICAgICovXG4gICAgZ2V0IHZpcnR1YWxpemF0aW9uU3RhdGUoKTogSUZvck9mU3RhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy52aXJ0RGlyLnN0YXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSB2aXJ0dWFsaXplZCBkYXRhLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIHNldFxuICAgICAqIHRoaXMuY29tYm8udmlydHVhbGl6YXRpb25TdGF0ZShzdGF0ZSk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgc2V0IHZpcnR1YWxpemF0aW9uU3RhdGUoc3RhdGU6IElGb3JPZlN0YXRlKSB7XG4gICAgICAgIHRoaXMudmlydERpci5zdGF0ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdG90YWwgY291bnQgb2YgdGhlIHZpcnR1YWwgZGF0YSBpdGVtcywgd2hlbiB1c2luZyByZW1vdGUgc2VydmljZS5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRcbiAgICAgKiBsZXQgY291bnQgPSB0aGlzLmNvbWJvLnRvdGFsSXRlbUNvdW50O1xuICAgICAqIGBgYFxuICAgICovXG4gICAgZ2V0IHRvdGFsSXRlbUNvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpcnREaXIudG90YWxJdGVtQ291bnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdG90YWwgY291bnQgb2YgdGhlIHZpcnR1YWwgZGF0YSBpdGVtcywgd2hlbiB1c2luZyByZW1vdGUgc2VydmljZS5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBzZXRcbiAgICAgKiB0aGlzLmNvbWJvLnRvdGFsSXRlbUNvdW50KHJlbW90ZVNlcnZpY2UuY291bnQpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHNldCB0b3RhbEl0ZW1Db3VudChjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudmlydERpci50b3RhbEl0ZW1Db3VudCA9IGNvdW50O1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGZpbHRlcmluZ0V4cHJlc3Npb25zKCk6IElGaWx0ZXJpbmdFeHByZXNzaW9uW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJhYmxlID8gdGhpcy5fZmlsdGVyaW5nRXhwcmVzc2lvbnMgOiBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgZmlsdGVyaW5nRXhwcmVzc2lvbnModmFsdWU6IElGaWx0ZXJpbmdFeHByZXNzaW9uW10pIHtcbiAgICAgICAgdGhpcy5fZmlsdGVyaW5nRXhwcmVzc2lvbnMgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHNvcnRpbmdFeHByZXNzaW9ucygpOiBJU29ydGluZ0V4cHJlc3Npb25bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3J0aW5nRXhwcmVzc2lvbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHNvcnRpbmdFeHByZXNzaW9ucyh2YWx1ZTogSVNvcnRpbmdFeHByZXNzaW9uW10pIHtcbiAgICAgICAgdGhpcy5fc29ydGluZ0V4cHJlc3Npb25zID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjbGVhclNvcnRpbmcoZmllbGQ/OiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICAgICAgaWYgKGZpZWxkID09PSB1bmRlZmluZWQgfHwgZmllbGQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydGluZ0V4cHJlc3Npb25zID0gW107XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gY2xvbmVBcnJheSh0aGlzLnNvcnRpbmdFeHByZXNzaW9ucyk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gY3VycmVudFN0YXRlLmZpbmRJbmRleCgoZXhwcikgPT4gZXhwci5maWVsZE5hbWUgPT09IGZpZWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy5zb3J0aW5nRXhwcmVzc2lvbnMgPSBjdXJyZW50U3RhdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGV4dCBkaXNwbGF5ZWQgaW4gdGhlIGNvbWJvIGlucHV0XG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IGNvbWJvVmFsdWUgPSB0aGlzLmNvbWJvLnZhbHVlO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGZpbHRlcmVkRGF0YSgpOiBhbnlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcmFibGUgPyB0aGlzLl9maWx0ZXJlZERhdGEgOiB0aGlzLmRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGZpbHRlcmVkRGF0YSh2YWw6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuX2ZpbHRlcmVkRGF0YSA9IHRoaXMuZ3JvdXBLZXkgPyAodmFsIHx8IFtdKS5maWx0ZXIoKGUpID0+IGUuaXNIZWFkZXIgIT09IHRydWUpIDogdmFsO1xuICAgICAgICB0aGlzLmNoZWNrTWF0Y2goKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBoYW5kbGVLZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJyB8fCBldmVudC5rZXkgPT09ICdEb3duJykge1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5mb2N1c2VkSXRlbSA9IHRoaXMuZHJvcGRvd24uaXRlbXNbMF07XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnIHx8IGV2ZW50LmtleSA9PT0gJ0VzYycpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBoYW5kbGVLZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1VwJyB8fCBldmVudC5rZXkgPT09ICdVcCcpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tNYXRjaCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGlzcGxheUtleSA9IHRoaXMuZGlzcGxheUtleTtcbiAgICAgICAgY29uc3QgbWF0Y2hGbiA9IChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRpc3BsYXlLZXkgPyBlW2Rpc3BsYXlLZXldIDogZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgPT09IHRoaXMuc2VhcmNoVmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGl0ZW1NYXRjaCA9IHRoaXMuZmlsdGVyZWREYXRhLnNvbWUobWF0Y2hGbik7XG4gICAgICAgIHRoaXMuY3VzdG9tVmFsdWVGbGFnID0gdGhpcy5hbGxvd0N1c3RvbVZhbHVlcyAmJiAhaXRlbU1hdGNoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50Pzogc3RyaW5nKSB7XG4gICAgICAgIGxldCBjZHJGbGFnID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHZDb250YWluZXIgPSB0aGlzLnZpcnREaXI7XG4gICAgICAgIGlmIChldmVudCAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX3ByZXZJbnB1dFZhbHVlID09PSBldmVudCkge1xuICAgICAgICAgICAgLy8gTm90aGluZyBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcHJldklucHV0VmFsdWUgPSBldmVudCAhPT0gdW5kZWZpbmVkID8gZXZlbnQgOiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gRG8gbm90IHNjcm9sbCBpZiBub3Qgc2Nyb2xsYWJsZVxuICAgICAgICAgICAgaWYgKHZDb250YWluZXIuaXNTY3JvbGxhYmxlKCkpIHtcbiAgICAgICAgICAgICAgICB2Q29udGFpbmVyLnNjcm9sbFRvKDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZHJGbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub25TZWFyY2hJbnB1dC5lbWl0KGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNkckZsYWcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZpbHRlcmFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyKCk7XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSB3YXMgbm8gc2Nyb2xsIGJlZm9yZSBmaWx0ZXJpbmcsIGNoZWNrIGlmIHRoZXJlIGlzIGFmdGVyIGFuZCBkZXRlY3QgY2hhbmdlc1xuICAgICAgICAgICAgaWYgKGNkckZsYWcpIHtcbiAgICAgICAgICAgICAgICB2Q29udGFpbmVyLm9uQ2h1bmtMb2FkLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZDb250YWluZXIuaXNTY3JvbGxhYmxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGVja01hdGNoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBzb3J0KGZpZWxkTmFtZTogc3RyaW5nLCBkaXI6IFNvcnRpbmdEaXJlY3Rpb24gPSBTb3J0aW5nRGlyZWN0aW9uLkFzYywgaWdub3JlQ2FzZTogYm9vbGVhbiA9IHRydWUsXG4gICAgICAgIHN0cmF0ZWd5OiBJU29ydGluZ1N0cmF0ZWd5ID0gRGVmYXVsdFNvcnRpbmdTdHJhdGVneS5pbnN0YW5jZSgpKTogdm9pZCB7XG4gICAgICAgIGlmICghZmllbGROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc29ydGluZ1N0YXRlID0gY2xvbmVBcnJheSh0aGlzLnNvcnRpbmdFeHByZXNzaW9ucywgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5wcmVwYXJlX3NvcnRpbmdfZXhwcmVzc2lvbihzb3J0aW5nU3RhdGUsIGZpZWxkTmFtZSwgZGlyLCBpZ25vcmVDYXNlLCBzdHJhdGVneSk7XG4gICAgICAgIHRoaXMuc29ydGluZ0V4cHJlc3Npb25zID0gc29ydGluZ1N0YXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGdldFZhbHVlQnlWYWx1ZUtleSh2YWw6IGFueSk6IGFueSB7XG4gICAgICAgIGlmICghdmFsICYmIHZhbCAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZUtleSA/XG4gICAgICAgICAgICB0aGlzLmRhdGEuZmlsdGVyKChlKSA9PiBlW3RoaXMudmFsdWVLZXldID09PSB2YWwpWzBdIDpcbiAgICAgICAgICAgIHRoaXMuZGF0YS5maWx0ZXIoKGUpID0+IGUgPT09IHZhbCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHByZXBhcmVfc29ydGluZ19leHByZXNzaW9uKHN0YXRlOiBJU29ydGluZ0V4cHJlc3Npb25bXSwgZmllbGROYW1lOiBzdHJpbmcsIGRpcjogU29ydGluZ0RpcmVjdGlvbiwgaWdub3JlQ2FzZTogYm9vbGVhbixcbiAgICAgICAgc3RyYXRlZ3k6IElTb3J0aW5nU3RyYXRlZ3kpIHtcblxuICAgICAgICBpZiAoZGlyID09PSBTb3J0aW5nRGlyZWN0aW9uLk5vbmUpIHtcbiAgICAgICAgICAgIHN0YXRlLnNwbGljZShzdGF0ZS5maW5kSW5kZXgoKGV4cHIpID0+IGV4cHIuZmllbGROYW1lID09PSBmaWVsZE5hbWUpLCAxKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSBzdGF0ZS5maW5kKChleHByKSA9PiBleHByLmZpZWxkTmFtZSA9PT0gZmllbGROYW1lKTtcblxuICAgICAgICBpZiAoIWV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgIHN0YXRlLnB1c2goeyBmaWVsZE5hbWUsIGRpciwgaWdub3JlQ2FzZSwgc3RyYXRlZ3kgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGV4cHJlc3Npb24sIHsgZmllbGROYW1lLCBkaXIsIGlnbm9yZUNhc2UgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZGF0YVR5cGUoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWVLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBEYXRhVHlwZXMuQ09NUExFWDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRGF0YVR5cGVzLlBSSU1JVElWRTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaXNSZW1vdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvdGFsSXRlbUNvdW50ID4gMCAmJlxuICAgICAgICAgICAgdGhpcy52YWx1ZUtleSAmJlxuICAgICAgICAgICAgdGhpcy5kYXRhVHlwZSA9PT0gRGF0YVR5cGVzLkNPTVBMRVg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIGRhdGEgc291cmNlIGlzIHJlbW90ZSwgcmV0dXJucyBKU09OLnN0cmluZ2lmeShpdGVtSUQpXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHByaXZhdGUgX3N0cmluZ2lmeUl0ZW1JRChpdGVtSUQ6IGFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1JlbW90ZSAmJiB0eXBlb2YgaXRlbUlEID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGl0ZW1JRCkgOiBpdGVtSUQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGFyc2VJdGVtSUQoaXRlbUlEKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzUmVtb3RlICYmIHR5cGVvZiBpdGVtSUQgPT09ICdzdHJpbmcnID8gSlNPTi5wYXJzZShpdGVtSUQpIDogaXRlbUlEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgaWYgdGhlIHNwZWNpZmllZCBpdGVtSUQgaXMgc2VsZWN0ZWRcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGlzSXRlbVNlbGVjdGVkKGl0ZW06IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb24uaXNfaXRlbV9zZWxlY3RlZCh0aGlzLmlkLCB0aGlzLl9zdHJpbmdpZnlJdGVtSUQoaXRlbSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIGNoYW5nZSBkZXRlY3Rpb24gb24gdGhlIGNvbWJvIHZpZXdcbiAgICAgKi9cbiAgICBwdWJsaWMgdHJpZ2dlckNoZWNrKCkge1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNBZGRCdXR0b25WaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBUaGlzIHNob3VsZCBhbHdheXMgcmV0dXJuIGEgYm9vbGVhbiB2YWx1ZS4gSWYgdGhpcy5zZWFyY2hWYWx1ZSB3YXMgJycsIGl0IHJldHVybnMgJycgaW5zdGVhZCBvZiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoVmFsdWUgIT09ICcnICYmIHRoaXMuY3VzdG9tVmFsdWVGbGFnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGhhbmRsZVNlbGVjdEFsbChldnQpIHtcbiAgICAgICAgaWYgKGV2dC5jaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEFsbEl0ZW1zKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlc2VsZWN0QWxsSXRlbXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGFkZEl0ZW1Ub0NvbGxlY3Rpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWFyY2hWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5zZWFyY2hWYWx1ZS50cmltKCk7XG4gICAgICAgIGNvbnN0IGFkZGVkSXRlbSA9IHRoaXMuZGlzcGxheUtleSA/IHtcbiAgICAgICAgICAgIFt0aGlzLnZhbHVlS2V5XTogbmV3VmFsdWUsXG4gICAgICAgICAgICBbdGhpcy5kaXNwbGF5S2V5XTogbmV3VmFsdWVcbiAgICAgICAgfSA6IG5ld1ZhbHVlO1xuICAgICAgICBpZiAodGhpcy5ncm91cEtleSkge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihhZGRlZEl0ZW0sIHsgW3RoaXMuZ3JvdXBLZXldOiB0aGlzLmRlZmF1bHRGYWxsYmFja0dyb3VwIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9sZENvbGxlY3Rpb24gPSB0aGlzLmRhdGE7XG4gICAgICAgIGNvbnN0IG5ld0NvbGxlY3Rpb24gPSBbLi4udGhpcy5kYXRhXTtcbiAgICAgICAgbmV3Q29sbGVjdGlvbi5wdXNoKGFkZGVkSXRlbSk7XG4gICAgICAgIGNvbnN0IGFyZ3M6IElDb21ib0l0ZW1BZGRpdGlvbkV2ZW50ID0ge1xuICAgICAgICAgICAgb2xkQ29sbGVjdGlvbiwgYWRkZWRJdGVtLCBuZXdDb2xsZWN0aW9uXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25BZGRpdGlvbi5lbWl0KGFyZ3MpO1xuICAgICAgICB0aGlzLmRhdGEucHVzaChhZGRlZEl0ZW0pO1xuICAgICAgICAvLyBJZiB5b3UgbXV0YXRlIHRoZSBhcnJheSwgbm8gcGlwZSBpcyBpbnZva2VkIGFuZCB0aGUgZGlzcGxheSBpc24ndCB1cGRhdGVkO1xuICAgICAgICAvLyBpZiB5b3UgcmVwbGFjZSB0aGUgYXJyYXksIHRoZSBwaXBlIGV4ZWN1dGVzIGFuZCB0aGUgZGlzcGxheSBpcyB1cGRhdGVkLlxuICAgICAgICB0aGlzLmRhdGEgPSBjbG9uZUFycmF5KHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMuc2VsZWN0SXRlbXMoW2FkZGVkSXRlbV0sIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jdXN0b21WYWx1ZUZsYWcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIHRoaXMuZHJvcGRvd24uZm9jdXNlZEl0ZW0gPSBudWxsO1xuICAgICAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZm9jdXNTZWFyY2hJbnB1dChvcGVuaW5nPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5kaXNwbGF5U2VhcmNoSW5wdXQgJiYgdGhpcy5zZWFyY2hJbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAob3BlbmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd25Db250YWluZXIubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJvSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBwcmVwYXJlX2ZpbHRlcmluZ19leHByZXNzaW9uKHNlYXJjaFZhbCwgY29uZGl0aW9uLCBpZ25vcmVDYXNlLCBmaWVsZE5hbWU/KSB7XG4gICAgICAgIGNvbnN0IG5ld0FycmF5ID0gWy4uLnRoaXMuZmlsdGVyaW5nRXhwcmVzc2lvbnNdO1xuICAgICAgICBjb25zdCBleHByZXNzaW9uID0gbmV3QXJyYXkuZmluZCgoZXhwcikgPT4gZXhwci5maWVsZE5hbWUgPT09IGZpZWxkTmFtZSk7XG4gICAgICAgIGNvbnN0IG5ld0V4cHJlc3Npb24gPSB7IGZpZWxkTmFtZSwgc2VhcmNoVmFsLCBjb25kaXRpb24sIGlnbm9yZUNhc2UgfTtcbiAgICAgICAgaWYgKCFleHByZXNzaW9uKSB7XG4gICAgICAgICAgICBuZXdBcnJheS5wdXNoKG5ld0V4cHJlc3Npb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihleHByZXNzaW9uLCBuZXdFeHByZXNzaW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ncm91cEtleSkge1xuICAgICAgICAgICAgY29uc3QgZXhwcmVzc2lvbjIgPSBuZXdBcnJheS5maW5kKChleHByKSA9PiBleHByLmZpZWxkTmFtZSA9PT0gJ2lzSGVhZGVyJyk7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJFeHByZXNzaW9uID0ge1xuICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogJ2lzSGVhZGVyJywgc2VhcmNoVmFsZTogJycsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiBJZ3hCb29sZWFuRmlsdGVyaW5nT3BlcmFuZC5pbnN0YW5jZSgpLmNvbmRpdGlvbigndHJ1ZScpLCBpZ25vcmVDYXNlOiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFleHByZXNzaW9uMikge1xuICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goaGVhZGVyRXhwcmVzc2lvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZXhwcmVzc2lvbjIsIGhlYWRlckV4cHJlc3Npb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlsdGVyaW5nRXhwcmVzc2lvbnMgPSBuZXdBcnJheTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25TdGF0dXNDaGFuZ2VkID0gKCkgPT4ge1xuICAgICAgICBpZiAoKHRoaXMubmdDb250cm9sLmNvbnRyb2wudG91Y2hlZCB8fCB0aGlzLm5nQ29udHJvbC5jb250cm9sLmRpcnR5KSAmJlxuICAgICAgICAgICAgKHRoaXMubmdDb250cm9sLmNvbnRyb2wudmFsaWRhdG9yIHx8IHRoaXMubmdDb250cm9sLmNvbnRyb2wuYXN5bmNWYWxpZGF0b3IpKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkID0gdGhpcy5uZ0NvbnRyb2wudmFsaWQgPyBJZ3hDb21ib1N0YXRlLlZBTElEIDogSWd4Q29tYm9TdGF0ZS5JTlZBTElEO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgb25CbHVyKCkge1xuICAgICAgICBpZiAodGhpcy5jb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5nQ29udHJvbCAmJiAhdGhpcy5uZ0NvbnRyb2wudmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkID0gSWd4Q29tYm9TdGF0ZS5JTlZBTElEO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkID0gSWd4Q29tYm9TdGF0ZS5JTklUSUFMO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZmlsdGVyKCkge1xuICAgICAgICB0aGlzLnByZXBhcmVfZmlsdGVyaW5nX2V4cHJlc3Npb24odGhpcy5zZWFyY2hWYWx1ZS50cmltKCksIElneFN0cmluZ0ZpbHRlcmluZ09wZXJhbmQuaW5zdGFuY2UoKS5jb25kaXRpb24oJ2NvbnRhaW5zJyksXG4gICAgICAgICAgICB0cnVlLCB0aGlzLmRhdGFUeXBlID09PSBEYXRhVHlwZXMuUFJJTUlUSVZFID8gdW5kZWZpbmVkIDogdGhpcy5kaXNwbGF5S2V5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wgPSB0aGlzLmluamVjdG9yLmdldChOZ0NvbnRyb2wsIG51bGwpO1xuICAgICAgICB0aGlzLl9vdmVybGF5U2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5zZXR0aW5ncy50YXJnZXQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uc2V0KHRoaXMuaWQsIG5ldyBTZXQoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IFsuLi50aGlzLmRhdGFdO1xuXG4gICAgICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xuICAgICAgICAgICAgdGhpcy5uZ0NvbnRyb2wuc3RhdHVzQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHRoaXMub25TdGF0dXNDaGFuZ2VkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICAgICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLmNvbWJvQVBJLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKHRoaXMuaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGRhdGFMb2FkaW5nKGV2ZW50KSB7XG4gICAgICAgIHRoaXMub25EYXRhUHJlTG9hZC5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgLy8gc2VsZWN0SXRlbXMgY2FuIGhhbmRsZSBBcnJheTxhbnk+LCBubyB2YWx1ZUtleSBpcyBuZWVkZWQ7XG4gICAgICAgIHRoaXMuc2VsZWN0SXRlbXModmFsdWUsIHRydWUpO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHsgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RWRpdEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21ib0lucHV0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgICAgICB0aGlzLl9kYXRhVHlwZSA9IHRoaXMuZGF0YVR5cGU7XG4gICAgICAgIGlmICh0aGlzLml0ZW1UZW1wbGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbVRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9kYXRhVHlwZSA9PT0gRGF0YVR5cGVzLkNPTVBMRVgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXhUZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcmltaXRpdmVUZW1wbGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgY29udGV4dCgpOiBhbnkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJGltcGxpY2l0OiB0aGlzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgaGFuZGxlQ2xlYXJJdGVtcyhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZXNlbGVjdEFsbEl0ZW1zKHRydWUsIGV2ZW50KTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBtZXRob2QgdGhhdCBvcGVucy9jbG9zZXMgdGhlIGNvbWJvLlxuICAgICAqXG4gICAgICpgYGBodG1sXG4gICAgICo8YnV0dG9uIChjbGljayk9XCJjb21iby50b2dnbGUoKVwiPlRvZ2dsZSBDb21ibzwvYnV0dG9uPlxuICAgICAqPGlneC1jb21ibyAjY29tYm8+PC9pZ3gtY29tYm8+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9nZ2xlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBvdmVybGF5U2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9vdmVybGF5U2V0dGluZ3MsIHRoaXMub3ZlcmxheVNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bi50b2dnbGUob3ZlcmxheVNldHRpbmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIG1ldGhvZCB0aGF0IG9wZW5zIHRoZSBjb21iby5cbiAgICAgKlxuICAgICAqYGBgaHRtbFxuICAgICAqPGJ1dHRvbiAoY2xpY2spPVwiY29tYm8ub3BlbigpXCI+T3BlbiBDb21ibzwvYnV0dG9uPlxuICAgICAqPGlneC1jb21ibyAjY29tYm8+PC9pZ3gtY29tYm8+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgb3BlbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgb3ZlcmxheVNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fb3ZlcmxheVNldHRpbmdzLCB0aGlzLm92ZXJsYXlTZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuZHJvcGRvd24ub3BlbihvdmVybGF5U2V0dGluZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgbWV0aG9kIHRoYXQgY2xvc2VzIHRoZSBjb21iby5cbiAgICAgKlxuICAgICAqYGBgaHRtbFxuICAgICAqPGJ1dHRvbiAoY2xpY2spPVwiY29tYm8uY2xvc2UoKVwiPkNsb3NlIENvbWJvPC9idXR0b24+XG4gICAgICo8aWd4LWNvbWJvICNjb21ibz48L2lneC1jb21ibz5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5jbG9zZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgZHJvcCBkb3duIHN0YXRlLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBzdGF0ZSA9IHRoaXMuY29tYm8uY29sbGFwc2VkO1xuICAgICAqIGBgYFxuICAgICovXG4gICAgcHVibGljIGdldCBjb2xsYXBzZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duLmNvbGxhcHNlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY3VycmVudCBzZWxlY3Rpb24gc3RhdGVcbiAgICAgKiBAcmV0dXJucyBBcnJheSBvZiBzZWxlY3RlZCBpdGVtc1xuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgc2VsZWN0ZWRJdGVtcyA9IHRoaXMuY29tYm8uc2VsZWN0ZWRJdGVtcygpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3RlZEl0ZW1zKCkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20odGhpcy5zZWxlY3Rpb24uZ2V0KHRoaXMuaWQpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNSZW1vdGUgPyBpdGVtcy5tYXAoaXRlbSA9PiB0aGlzLl9wYXJzZUl0ZW1JRChpdGVtKSkgOiBpdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgZGVmaW5lZCBpdGVtc1xuICAgICAqIEBwYXJhbSBuZXdJdGVtcyBuZXcgaXRlbXMgdG8gYmUgc2VsZWN0ZWRcbiAgICAgKiBAcGFyYW0gY2xlYXJDdXJyZW50U2VsZWN0aW9uIGlmIHRydWUgY2xlYXIgcHJldmlvdXMgc2VsZWN0ZWQgaXRlbXNcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jb21iby5zZWxlY3RJdGVtcyhbXCJOZXcgWW9ya1wiLCBcIk5ldyBKZXJzZXlcIl0pO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3RJdGVtcyhuZXdJdGVtczogQXJyYXk8YW55PiwgY2xlYXJDdXJyZW50U2VsZWN0aW9uPzogYm9vbGVhbiwgZXZlbnQ/OiBFdmVudCkge1xuICAgICAgICBpZiAobmV3SXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLmFkZF9pdGVtcyh0aGlzLmlkLCBuZXdJdGVtcywgY2xlYXJDdXJyZW50U2VsZWN0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbiwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzZWxlY3QgZGVmaW5lZCBpdGVtc1xuICAgICAqIEBwYXJhbSBpdGVtcyBpdGVtcyB0byBkZXNlbGVjdGVkXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuY29tYm8uZGVzZWxlY3RJdGVtcyhbXCJOZXcgWW9ya1wiLCBcIk5ldyBKZXJzZXlcIl0pO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNlbGVjdEl0ZW1zKGl0ZW1zOiBBcnJheTxhbnk+LCBldmVudD86IEV2ZW50KSB7XG4gICAgICAgIGlmIChpdGVtcykge1xuICAgICAgICAgICAgY29uc3QgbmV3U2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24uZGVsZXRlX2l0ZW1zKHRoaXMuaWQsIGl0ZW1zKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbiwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGFsbCAoZmlsdGVyZWQpIGl0ZW1zXG4gICAgICogQHBhcmFtIGlnbm9yZUZpbHRlciBpZiBzZXQgdG8gdHJ1ZSwgc2VsZWN0cyBhbGwgaXRlbXMsIG90aGVyd2lzZSBzZWxlY3RzIG9ubHkgdGhlIGZpbHRlcmVkIG9uZXMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuY29tYm8uc2VsZWN0QWxsSXRlbXMoKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0QWxsSXRlbXMoaWdub3JlRmlsdGVyPzogYm9vbGVhbiwgZXZlbnQ/OiBFdmVudCkge1xuICAgICAgICBjb25zdCBhbGxWaXNpYmxlID0gdGhpcy5zZWxlY3Rpb24uZ2V0X2FsbF9pZHMoaWdub3JlRmlsdGVyID8gdGhpcy5kYXRhIDogdGhpcy5maWx0ZXJlZERhdGEpO1xuICAgICAgICBjb25zdCBuZXdTZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5hZGRfaXRlbXModGhpcy5pZCwgYWxsVmlzaWJsZSk7XG4gICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbiwgZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2VsZWN0IGFsbCAoZmlsdGVyZWQpIGl0ZW1zXG4gICAgICogQHBhcmFtIGlnbm9yZUZpbHRlciBpZiBzZXQgdG8gdHJ1ZSwgZGVzZWxlY3RzIGFsbCBpdGVtcywgb3RoZXJ3aXNlIGRlc2VsZWN0cyBvbmx5IHRoZSBmaWx0ZXJlZCBvbmVzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmNvbWJvLmRlc2VsZWN0QWxsSXRlbXMoKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzZWxlY3RBbGxJdGVtcyhpZ25vcmVGaWx0ZXI/OiBib29sZWFuLCBldmVudD86IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGxldCBuZXdTZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5nZXRfZW1wdHkoKTtcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyZWREYXRhLmxlbmd0aCAhPT0gdGhpcy5kYXRhLmxlbmd0aCAmJiAhaWdub3JlRmlsdGVyKSB7XG4gICAgICAgICAgICBuZXdTZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5kZWxldGVfaXRlbXModGhpcy5pZCwgdGhpcy5zZWxlY3Rpb24uZ2V0X2FsbF9pZHModGhpcy5maWx0ZXJlZERhdGEpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24sIGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3RzL0Rlc2VsZWN0cyBhbiBpdGVtIHVzaW5nIGl0J3MgdmFsdWVLZXkgdmFsdWVcbiAgICAgKiBAcGFyYW0gaXRlbUlEIHRoZSB2YWx1ZUtleSBvZiB0aGUgc3BlY2lmaWVkIGl0ZW1cbiAgICAgKiBAcGFyYW0gc2VsZWN0IElmIHRoZSBpdGVtIHNob3VsZCBiZSBzZWxlY3RlZCAodHJ1ZSkgb3IgZGVzZWxjdGVkIChmYWxzZSlcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBpdGVtczogeyBmaWVsZDogc3RyaW5nLCByZWdpb246IHN0cmluZ31bXSA9IGRhdGE7XG4gICAgICogdGhpcy5jb21iby5zZXRTZWxlY3RlZEl0ZW0oJ0Nvbm5lY3RpY3V0JywgdHJ1ZSk7XG4gICAgICogLy8gY29tYm8udmFsdWVLZXkgPT09ICdmaWVsZCdcbiAgICAgKiAvLyBpdGVtc1tuXSA9PT0geyBmaWVsZDogJ0Nvbm5lY3RpY3V0Jywgc3RhdGU6ICdOZXcgRW5nbGFuZCd9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHNldFNlbGVjdGVkSXRlbShpdGVtSUQ6IGFueSwgc2VsZWN0ID0gdHJ1ZSwgZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoaXRlbUlEID09PSBudWxsIHx8IGl0ZW1JRCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbVZhbHVlID0gdGhpcy5nZXRWYWx1ZUJ5VmFsdWVLZXkoaXRlbUlEKTtcbiAgICAgICAgaWYgKGl0ZW1WYWx1ZSAhPT0gbnVsbCAmJiBpdGVtVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHNlbGVjdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbXMoW2l0ZW1WYWx1ZV0sIGZhbHNlLCBldmVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzZWxlY3RJdGVtcyhbaXRlbVZhbHVlXSwgZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb246IFNldDxhbnk+LCBldmVudD86IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG9sZFNlbGVjdGlvbkVtaXQgPSBBcnJheS5mcm9tKHRoaXMuc2VsZWN0aW9uLmdldCh0aGlzLmlkKSB8fCBbXSk7XG4gICAgICAgIGNvbnN0IG5ld1NlbGVjdGlvbkVtaXQgPSBBcnJheS5mcm9tKG5ld1NlbGVjdGlvbiB8fCBbXSk7XG4gICAgICAgIGNvbnN0IGFyZ3M6IElDb21ib1NlbGVjdGlvbkNoYW5nZUV2ZW50QXJncyA9IHtcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbjogbmV3U2VsZWN0aW9uRW1pdCxcbiAgICAgICAgICAgIG9sZFNlbGVjdGlvbjogb2xkU2VsZWN0aW9uRW1pdCxcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgY2FuY2VsOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uU2VsZWN0aW9uQ2hhbmdlLmVtaXQoYXJncyk7XG4gICAgICAgIGlmICghYXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnNlbGVjdF9pdGVtcyh0aGlzLmlkLCBhcmdzLm5ld1NlbGVjdGlvbiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuZGF0YVR5cGUgIT09IERhdGFUeXBlcy5QUklNSVRJVkUgP1xuICAgICAgICAgICAgICAgIGFyZ3MubmV3U2VsZWN0aW9uLm1hcCgoaWQpID0+IHRoaXMuX3BhcnNlSXRlbUlEKGlkKVt0aGlzLmRpc3BsYXlLZXldKS5qb2luKCcsICcpIDpcbiAgICAgICAgICAgICAgICBhcmdzLm5ld1NlbGVjdGlvbi5qb2luKCcsICcpO1xuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayhhcmdzLm5ld1NlbGVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlcnNcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGhhbmRsZU9wZW5pbmcoZXZlbnQ6IENhbmNlbGFibGVFdmVudEFyZ3MpIHtcbiAgICAgICAgdGhpcy5vbk9wZW5pbmcuZW1pdChldmVudCk7XG4gICAgICAgIGlmIChldmVudC5jYW5jZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgaGFuZGxlT3BlbmVkKCkge1xuICAgICAgICB0aGlzLnRyaWdnZXJDaGVjaygpO1xuICAgICAgICB0aGlzLmZvY3VzU2VhcmNoSW5wdXQodHJ1ZSk7XG4gICAgICAgIHRoaXMub25PcGVuZWQuZW1pdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGhhbmRsZUNsb3NpbmcoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5vbkNsb3NpbmcuZW1pdChldmVudCk7XG4gICAgICAgIGlmIChldmVudC5jYW5jZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlYXJjaFZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMuY29tYm9JbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgaGFuZGxlQ2xvc2VkKCkge1xuICAgICAgICB0aGlzLm9uQ2xvc2VkLmVtaXQoKTtcbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneENvbWJvQ29tcG9uZW50LCBJZ3hDb21ib0l0ZW1Db21wb25lbnQsIElneENvbWJvRmlsdGVyQ29uZGl0aW9uUGlwZSwgSWd4Q29tYm9Hcm91cGluZ1BpcGUsXG4gICAgICAgIElneENvbWJvRmlsdGVyaW5nUGlwZSwgSWd4Q29tYm9Tb3J0aW5nUGlwZSwgSWd4Q29tYm9Ecm9wRG93bkNvbXBvbmVudCwgSWd4Q29tYm9BZGRJdGVtQ29tcG9uZW50LFxuICAgICAgICBJZ3hDb21ib0l0ZW1EaXJlY3RpdmUsXG4gICAgICAgIElneENvbWJvRW1wdHlEaXJlY3RpdmUsXG4gICAgICAgIElneENvbWJvSGVhZGVySXRlbURpcmVjdGl2ZSxcbiAgICAgICAgSWd4Q29tYm9IZWFkZXJEaXJlY3RpdmUsXG4gICAgICAgIElneENvbWJvRm9vdGVyRGlyZWN0aXZlLFxuICAgICAgICBJZ3hDb21ib0FkZEl0ZW1EaXJlY3RpdmUsXG4gICAgICAgIElneENvbWJvVG9nZ2xlSWNvbkRpcmVjdGl2ZSxcbiAgICAgICAgSWd4Q29tYm9DbGVhckljb25EaXJlY3RpdmVdLFxuICAgIGV4cG9ydHM6IFtJZ3hDb21ib0NvbXBvbmVudCwgSWd4Q29tYm9JdGVtQ29tcG9uZW50LCBJZ3hDb21ib0Ryb3BEb3duQ29tcG9uZW50LCBJZ3hDb21ib0FkZEl0ZW1Db21wb25lbnQsXG4gICAgICAgIElneENvbWJvSXRlbURpcmVjdGl2ZSxcbiAgICAgICAgSWd4Q29tYm9FbXB0eURpcmVjdGl2ZSxcbiAgICAgICAgSWd4Q29tYm9IZWFkZXJJdGVtRGlyZWN0aXZlLFxuICAgICAgICBJZ3hDb21ib0hlYWRlckRpcmVjdGl2ZSxcbiAgICAgICAgSWd4Q29tYm9Gb290ZXJEaXJlY3RpdmUsXG4gICAgICAgIElneENvbWJvQWRkSXRlbURpcmVjdGl2ZSxcbiAgICAgICAgSWd4Q29tYm9Ub2dnbGVJY29uRGlyZWN0aXZlLFxuICAgICAgICBJZ3hDb21ib0NsZWFySWNvbkRpcmVjdGl2ZV0sXG4gICAgaW1wb3J0czogW0lneFJpcHBsZU1vZHVsZSwgQ29tbW9uTW9kdWxlLCBJZ3hJbnB1dEdyb3VwTW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgSWd4Rm9yT2ZNb2R1bGUsIElneFRvZ2dsZU1vZHVsZSwgSWd4Q2hlY2tib3hNb2R1bGUsIElneERyb3BEb3duTW9kdWxlLCBJZ3hCdXR0b25Nb2R1bGUsIElneEljb25Nb2R1bGVdLFxuICAgIHByb3ZpZGVyczogW0lneFNlbGVjdGlvbkFQSVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIElneENvbWJvTW9kdWxlIHsgfVxuIl19