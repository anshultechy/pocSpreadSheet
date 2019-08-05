/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var DataTypes = {
    EMPTY: 'empty',
    PRIMITIVE: 'primitive',
    COMPLEX: 'complex',
    PRIMARYKEY: 'valueKey',
};
/**
 * @hidden
 * @type {?}
 */
var ItemHeights = {
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
var itemsInContainer = 10;
/** @enum {number} */
var IgxComboState = {
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
var NEXT_ID = 0;
/** @type {?} */
var noop = function () { };
var ɵ0 = noop;
var IgxComboComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxComboComponent, _super);
    function IgxComboComponent(elementRef, cdr, selection, comboAPI, _displayDensityOptions, injector) {
        var _this = _super.call(this, _displayDensityOptions) || this;
        _this.elementRef = elementRef;
        _this.cdr = cdr;
        _this.selection = selection;
        _this.comboAPI = comboAPI;
        _this._displayDensityOptions = _displayDensityOptions;
        _this.injector = injector;
        /**
         * @hidden \@internal
         */
        _this.customValueFlag = true;
        /**
         * @hidden \@internal
         */
        _this.defaultFallbackGroup = 'Other';
        _this.stringFilters = IgxStringFilteringOperand;
        _this.booleanFilters = IgxBooleanFilteringOperand;
        _this._filteringLogic = FilteringLogic.Or;
        _this._filteringExpressions = [];
        _this._sortingExpressions = [];
        _this._groupKey = '';
        _this._prevInputValue = '';
        _this._dataType = '';
        _this.ngControl = null;
        _this.destroy$ = new Subject();
        _this._data = [];
        _this._filteredData = [];
        _this._itemHeight = null;
        _this._itemsMaxHeight = null;
        _this._onChangeCallback = noop;
        _this._overlaySettings = {
            scrollStrategy: new AbsoluteScrollStrategy(),
            positionStrategy: new ConnectedPositioningStrategy(),
            modal: false,
            closeOnOutsideClick: true,
            excludePositionTarget: true
        };
        _this._value = '';
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
        _this.overlaySettings = null;
        /**
         * @hidden \@internal
         */
        _this.searchInput = null;
        /**
         * @hidden \@internal
         */
        _this.comboInput = null;
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
        _this.itemTemplate = null;
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
        _this.headerTemplate = null;
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
        _this.footerTemplate = null;
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
        _this.headerItemTemplate = null;
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
        _this.addItemTemplate = null;
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
        _this.emptyTemplate = null;
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
        _this.toggleIconTemplate = null;
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
        _this.clearIconTemplate = null;
        _this.dropdownContainer = null;
        /**
         * Emitted when item selection is changing, before the selection completes
         *
         * ```html
         * <igx-combo (onSelectionChange)='handleSelection()'></igx-combo>
         * ```
         */
        _this.onSelectionChange = new EventEmitter();
        /**
         * Emitted before the dropdown is opened
         *
         * ```html
         * <igx-combo onOpening='handleOpening($event)'></igx-combo>
         * ```
         */
        _this.onOpening = new EventEmitter();
        /**
         * Emitted after the dropdown is opened
         *
         * ```html
         * <igx-combo (onOpened)='handleOpened()'></igx-combo>
         * ```
         */
        _this.onOpened = new EventEmitter();
        /**
         * Emitted before the dropdown is closed
         *
         * ```html
         * <igx-combo (onClosing)='handleClosing($event)'></igx-combo>
         * ```
         */
        _this.onClosing = new EventEmitter();
        /**
         * Emitted after the dropdown is closed
         *
         * ```html
         * <igx-combo (onClosed)='handleClosed()'></igx-combo>
         * ```
         */
        _this.onClosed = new EventEmitter();
        /**
         * Emitted when an item is being added to the data collection
         *
         * ```html
         * <igx-combo (onAddition)='handleAdditionEvent()'></igx-combo>
         * ```
         */
        _this.onAddition = new EventEmitter();
        /**
         * Emitted when the value of the search input changes (e.g. typing, pasting, clear, etc.)
         *
         * ```html
         * <igx-combo (onSearchInput)='handleSearchInputEvent()'></igx-combo>
         * ```
         */
        _this.onSearchInput = new EventEmitter();
        /**
         * Emitted when new chunk of data is loaded from the virtualization
         *
         * ```html
         * <igx-combo (onDataPreLoad)='handleDataPreloadEvent()'></igx-combo>
         * ```
         */
        _this.onDataPreLoad = new EventEmitter();
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
        _this.id = "igx-combo-" + NEXT_ID++;
        /**
         * @hidden \@internal
         */
        _this.cssClass = 'igx-combo'; // Independent of display density, at the time being
        // Independent of display density, at the time being
        /**
         * @hidden \@internal
         */
        _this.role = 'combobox';
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
        _this.allowCustomValues = false;
        /**
         * @hidden \@internal
         */
        _this.filteringLogic = FilteringLogic.Or;
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
        _this.placeholder = '';
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
        _this.searchPlaceholder = 'Enter a Search Term';
        /**
         * An \@Input property that enabled/disables filtering in the list. The default is `true`.
         * ```html
         * <igx-combo [filterable]="'false'">
         * ```
         */
        _this.filterable = true;
        /**
         * An \@Input property that enabled/disables combo. The default is `false`.
         * ```html
         * <igx-combo [disabled]="'true'">
         * ```
         */
        _this.disabled = false;
        /**
         * An \@Input property that sets how the combo will be styled.
         * The allowed values are `line`, `box`, `border` and `search`. The default is `box`.
         * ```html
         * <igx-combo [type]="'line'">
         * ```
         */
        _this.type = 'box';
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
        _this.valid = IgxComboState.INITIAL;
        /**
         * @hidden \@internal
         */
        _this.searchValue = '';
        _this.onStatusChanged = function () {
            if ((_this.ngControl.control.touched || _this.ngControl.control.dirty) &&
                (_this.ngControl.control.validator || _this.ngControl.control.asyncValidator)) {
                _this.valid = _this.ngControl.valid ? IgxComboState.VALID : IgxComboState.INVALID;
            }
        };
        _this.comboAPI.register(_this);
        return _this;
    }
    Object.defineProperty(IgxComboComponent.prototype, "displaySearchInput", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this.filterable || this.allowCustomValues;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboComponent.prototype, "validClass", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this.valid === IgxComboState.VALID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboComponent.prototype, "invalidClass", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this.valid === IgxComboState.INVALID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboComponent.prototype, "ariaExpanded", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return !this.dropdown.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboComponent.prototype, "hasPopUp", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return 'listbox';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboComponent.prototype, "ariaOwns", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this.dropdown.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboComponent.prototype, "itemsMaxHeight", {
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
        */
        get: /**
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
        function () {
            if (this._itemsMaxHeight === null || this._itemsMaxHeight === undefined) {
                return this.itemHeight * itemsInContainer;
            }
            return this._itemsMaxHeight;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._itemsMaxHeight = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboComponent.prototype, "itemHeight", {
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
         */
        get: /**
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
        function () {
            if (this._itemHeight === null || this._itemHeight === undefined) {
                return ItemHeights[this.displayDensity];
            }
            return this._itemHeight;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._itemHeight = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboComponent.prototype, "inputEmpty", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return !this.value && !this.placeholder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboComponent.prototype, "data", {
        /**
         * Combo data source.
         *
         * ```html
         * <!--set-->
         * <igx-combo [data]='items'></igx-combo>
         * ```
         */
        get: /**
         * Combo data source.
         *
         * ```html
         * <!--set-->
         * <igx-combo [data]='items'></igx-combo>
         * ```
         * @return {?}
         */
        function () {
            return this._data;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._data = (val) ? val : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboComponent.prototype, "displayKey", {
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
         */
        get: /**
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
        function () {
            return this._displayKey ? this._displayKey : this.valueKey;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._displayKey = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboComponent.prototype, "groupKey", {
        /**
         * The item property by which items should be grouped inside the items list. Not usable if data is not of type Object[].
         *
         * ```typescript
         * // get
         * let currentGroupKey = this.combo.groupKey;
         * ```
         */
        get: /**
         * The item property by which items should be grouped inside the items list. Not usable if data is not of type Object[].
         *
         * ```typescript
         * // get
         * let currentGroupKey = this.combo.groupKey;
         * ```
         * @return {?}
         */
        function () {
            return this._groupKey;
        },
        /**
         * The item property by which items should be grouped inside the items list. Not usable if data is not of type Object[].
         *
         * ```html
         * <!--set-->
         * <igx-combo [groupKey]='newGroupKey'></igx-combo>
         * ```
         */
        set: /**
         * The item property by which items should be grouped inside the items list. Not usable if data is not of type Object[].
         *
         * ```html
         * <!--set-->
         * <igx-combo [groupKey]='newGroupKey'></igx-combo>
         * ```
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.clearSorting(this._groupKey);
            this._groupKey = val;
            this.sort(this._groupKey);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    IgxComboComponent.prototype.onArrowDown = /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.open();
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    IgxComboComponent.prototype.onInputClick = /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.toggle();
    };
    Object.defineProperty(IgxComboComponent.prototype, "virtualizationState", {
        /**
         * Defines the current state of the virtualized data. It contains `startIndex` and `chunkSize`
         *
         * ```typescript
         * // get
         * let state = this.combo.virtualizationState;
         * ```
        */
        get: /**
         * Defines the current state of the virtualized data. It contains `startIndex` and `chunkSize`
         *
         * ```typescript
         * // get
         * let state = this.combo.virtualizationState;
         * ```
         * @return {?}
         */
        function () {
            return this.virtDir.state;
        },
        /**
         * Sets the current state of the virtualized data.
         *
         * ```typescript
         * // set
         * this.combo.virtualizationState(state);
         * ```
         */
        set: /**
         * Sets the current state of the virtualized data.
         *
         * ```typescript
         * // set
         * this.combo.virtualizationState(state);
         * ```
         * @param {?} state
         * @return {?}
         */
        function (state) {
            this.virtDir.state = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboComponent.prototype, "totalItemCount", {
        /**
         * Gets total count of the virtual data items, when using remote service.
         *
         * ```typescript
         * // get
         * let count = this.combo.totalItemCount;
         * ```
        */
        get: /**
         * Gets total count of the virtual data items, when using remote service.
         *
         * ```typescript
         * // get
         * let count = this.combo.totalItemCount;
         * ```
         * @return {?}
         */
        function () {
            return this.virtDir.totalItemCount;
        },
        /**
         * Sets total count of the virtual data items, when using remote service.
         *
         * ```typescript
         * // set
         * this.combo.totalItemCount(remoteService.count);
         * ```
         */
        set: /**
         * Sets total count of the virtual data items, when using remote service.
         *
         * ```typescript
         * // set
         * this.combo.totalItemCount(remoteService.count);
         * ```
         * @param {?} count
         * @return {?}
         */
        function (count) {
            this.virtDir.totalItemCount = count;
            this.cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboComponent.prototype, "filteringExpressions", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this.filterable ? this._filteringExpressions : [];
        },
        /**
         * @hidden @internal
         */
        set: /**
         * @hidden \@internal
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._filteringExpressions = value;
            this.cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboComponent.prototype, "sortingExpressions", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this._sortingExpressions;
        },
        /**
         * @hidden @internal
         */
        set: /**
         * @hidden \@internal
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._sortingExpressions = value;
            this.cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @protected
     * @param {?=} field
     * @return {?}
     */
    IgxComboComponent.prototype.clearSorting = /**
     * @protected
     * @param {?=} field
     * @return {?}
     */
    function (field) {
        if (field === undefined || field === null) {
            this.sortingExpressions = [];
            return;
        }
        /** @type {?} */
        var currentState = cloneArray(this.sortingExpressions);
        /** @type {?} */
        var index = currentState.findIndex(function (expr) { return expr.fieldName === field; });
        if (index > -1) {
            currentState.splice(index, 1);
            this.sortingExpressions = currentState;
        }
    };
    Object.defineProperty(IgxComboComponent.prototype, "value", {
        /**
         * The text displayed in the combo input
         *
         * ```typescript
         * // get
         * let comboValue = this.combo.value;
         * ```
         */
        get: /**
         * The text displayed in the combo input
         *
         * ```typescript
         * // get
         * let comboValue = this.combo.value;
         * ```
         * @return {?}
         */
        function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboComponent.prototype, "filteredData", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this.filterable ? this._filteredData : this.data;
        },
        /**
         * @hidden @internal
         */
        set: /**
         * @hidden \@internal
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._filteredData = this.groupKey ? (val || []).filter(function (e) { return e.isHeader !== true; }) : val;
            this.checkMatch();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    IgxComboComponent.prototype.handleKeyUp = /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.key === 'ArrowDown' || event.key === 'Down') {
            this.dropdown.focusedItem = this.dropdown.items[0];
            this.dropdownContainer.nativeElement.focus();
        }
        else if (event.key === 'Escape' || event.key === 'Esc') {
            this.toggle();
        }
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    IgxComboComponent.prototype.handleKeyDown = /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.key === 'ArrowUp' || event.key === 'Up') {
            event.preventDefault();
            event.stopPropagation();
            this.close();
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxComboComponent.prototype.checkMatch = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var displayKey = this.displayKey;
        /** @type {?} */
        var matchFn = function (e) {
            /** @type {?} */
            var value = displayKey ? e[displayKey] : e;
            return value.toString().toLowerCase() === _this.searchValue.trim().toLowerCase();
        };
        /** @type {?} */
        var itemMatch = this.filteredData.some(matchFn);
        this.customValueFlag = this.allowCustomValues && !itemMatch;
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @param {?=} event
     * @return {?}
     */
    IgxComboComponent.prototype.handleInputChange = /**
     * @hidden \@internal
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var cdrFlag = false;
        /** @type {?} */
        var vContainer = this.virtDir;
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
                vContainer.onChunkLoad.pipe(take(1)).subscribe(function () {
                    if (vContainer.isScrollable()) {
                        _this.cdr.detectChanges();
                    }
                });
            }
        }
        else {
            this.checkMatch();
        }
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @param {?} fieldName
     * @param {?=} dir
     * @param {?=} ignoreCase
     * @param {?=} strategy
     * @return {?}
     */
    IgxComboComponent.prototype.sort = /**
     * @hidden \@internal
     * @param {?} fieldName
     * @param {?=} dir
     * @param {?=} ignoreCase
     * @param {?=} strategy
     * @return {?}
     */
    function (fieldName, dir, ignoreCase, strategy) {
        if (dir === void 0) { dir = SortingDirection.Asc; }
        if (ignoreCase === void 0) { ignoreCase = true; }
        if (strategy === void 0) { strategy = DefaultSortingStrategy.instance(); }
        if (!fieldName) {
            return;
        }
        /** @type {?} */
        var sortingState = cloneArray(this.sortingExpressions, true);
        this.prepare_sorting_expression(sortingState, fieldName, dir, ignoreCase, strategy);
        this.sortingExpressions = sortingState;
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @param {?} val
     * @return {?}
     */
    IgxComboComponent.prototype.getValueByValueKey = /**
     * @hidden \@internal
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this = this;
        if (!val && val !== 0) {
            return undefined;
        }
        return this.valueKey ?
            this.data.filter(function (e) { return e[_this.valueKey] === val; })[0] :
            this.data.filter(function (e) { return e === val; });
    };
    /**
     * @protected
     * @param {?} state
     * @param {?} fieldName
     * @param {?} dir
     * @param {?} ignoreCase
     * @param {?} strategy
     * @return {?}
     */
    IgxComboComponent.prototype.prepare_sorting_expression = /**
     * @protected
     * @param {?} state
     * @param {?} fieldName
     * @param {?} dir
     * @param {?} ignoreCase
     * @param {?} strategy
     * @return {?}
     */
    function (state, fieldName, dir, ignoreCase, strategy) {
        if (dir === SortingDirection.None) {
            state.splice(state.findIndex(function (expr) { return expr.fieldName === fieldName; }), 1);
            return;
        }
        /** @type {?} */
        var expression = state.find(function (expr) { return expr.fieldName === fieldName; });
        if (!expression) {
            state.push({ fieldName: fieldName, dir: dir, ignoreCase: ignoreCase, strategy: strategy });
        }
        else {
            Object.assign(expression, { fieldName: fieldName, dir: dir, ignoreCase: ignoreCase });
        }
    };
    Object.defineProperty(IgxComboComponent.prototype, "dataType", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            if (this.valueKey) {
                return DataTypes.COMPLEX;
            }
            return DataTypes.PRIMITIVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboComponent.prototype, "isRemote", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this.totalItemCount > 0 &&
                this.valueKey &&
                this.dataType === DataTypes.COMPLEX;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * If the data source is remote, returns JSON.stringify(itemID)
     * @hidden
     * @internal
     */
    /**
     * If the data source is remote, returns JSON.stringify(itemID)
     * @hidden
     * \@internal
     * @private
     * @param {?} itemID
     * @return {?}
     */
    IgxComboComponent.prototype._stringifyItemID = /**
     * If the data source is remote, returns JSON.stringify(itemID)
     * @hidden
     * \@internal
     * @private
     * @param {?} itemID
     * @return {?}
     */
    function (itemID) {
        return this.isRemote && typeof itemID === 'object' ? JSON.stringify(itemID) : itemID;
    };
    /**
     * @private
     * @param {?} itemID
     * @return {?}
     */
    IgxComboComponent.prototype._parseItemID = /**
     * @private
     * @param {?} itemID
     * @return {?}
     */
    function (itemID) {
        return this.isRemote && typeof itemID === 'string' ? JSON.parse(itemID) : itemID;
    };
    /**
     * Returns if the specified itemID is selected
     * @hidden
     * @internal
     */
    /**
     * Returns if the specified itemID is selected
     * @hidden
     * \@internal
     * @param {?} item
     * @return {?}
     */
    IgxComboComponent.prototype.isItemSelected = /**
     * Returns if the specified itemID is selected
     * @hidden
     * \@internal
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return this.selection.is_item_selected(this.id, this._stringifyItemID(item));
    };
    /**
     * Triggers change detection on the combo view
     */
    /**
     * Triggers change detection on the combo view
     * @return {?}
     */
    IgxComboComponent.prototype.triggerCheck = /**
     * Triggers change detection on the combo view
     * @return {?}
     */
    function () {
        this.cdr.detectChanges();
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxComboComponent.prototype.isAddButtonVisible = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        // This should always return a boolean value. If this.searchValue was '', it returns '' instead of false;
        return this.searchValue !== '' && this.customValueFlag;
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @param {?} evt
     * @return {?}
     */
    IgxComboComponent.prototype.handleSelectAll = /**
     * @hidden \@internal
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        if (evt.checked) {
            this.selectAllItems();
        }
        else {
            this.deselectAllItems();
        }
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxComboComponent.prototype.addItemToCollection = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        var _a, _b;
        if (!this.searchValue) {
            return;
        }
        /** @type {?} */
        var newValue = this.searchValue.trim();
        /** @type {?} */
        var addedItem = this.displayKey ? (_a = {},
            _a[this.valueKey] = newValue,
            _a[this.displayKey] = newValue,
            _a) : newValue;
        if (this.groupKey) {
            Object.assign(addedItem, (_b = {}, _b[this.groupKey] = this.defaultFallbackGroup, _b));
        }
        /** @type {?} */
        var oldCollection = this.data;
        /** @type {?} */
        var newCollection = tslib_1.__spread(this.data);
        newCollection.push(addedItem);
        /** @type {?} */
        var args = {
            oldCollection: oldCollection, addedItem: addedItem, newCollection: newCollection
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
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @param {?=} opening
     * @return {?}
     */
    IgxComboComponent.prototype.focusSearchInput = /**
     * @hidden \@internal
     * @param {?=} opening
     * @return {?}
     */
    function (opening) {
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
    };
    /**
     * @protected
     * @param {?} searchVal
     * @param {?} condition
     * @param {?} ignoreCase
     * @param {?=} fieldName
     * @return {?}
     */
    IgxComboComponent.prototype.prepare_filtering_expression = /**
     * @protected
     * @param {?} searchVal
     * @param {?} condition
     * @param {?} ignoreCase
     * @param {?=} fieldName
     * @return {?}
     */
    function (searchVal, condition, ignoreCase, fieldName) {
        /** @type {?} */
        var newArray = tslib_1.__spread(this.filteringExpressions);
        /** @type {?} */
        var expression = newArray.find(function (expr) { return expr.fieldName === fieldName; });
        /** @type {?} */
        var newExpression = { fieldName: fieldName, searchVal: searchVal, condition: condition, ignoreCase: ignoreCase };
        if (!expression) {
            newArray.push(newExpression);
        }
        else {
            Object.assign(expression, newExpression);
        }
        if (this.groupKey) {
            /** @type {?} */
            var expression2 = newArray.find(function (expr) { return expr.fieldName === 'isHeader'; });
            /** @type {?} */
            var headerExpression = {
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
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxComboComponent.prototype.onBlur = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        if (this.collapsed) {
            if (this.ngControl && !this.ngControl.valid) {
                this.valid = IgxComboState.INVALID;
            }
            else {
                this.valid = IgxComboState.INITIAL;
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
    IgxComboComponent.prototype.filter = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        this.prepare_filtering_expression(this.searchValue.trim(), IgxStringFilteringOperand.instance().condition('contains'), true, this.dataType === DataTypes.PRIMITIVE ? undefined : this.displayKey);
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxComboComponent.prototype.ngOnInit = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        this.ngControl = this.injector.get(NgControl, null);
        this._overlaySettings.positionStrategy.settings.target = this.elementRef.nativeElement;
        this.selection.set(this.id, new Set());
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxComboComponent.prototype.ngAfterViewInit = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        this.filteredData = tslib_1.__spread(this.data);
        if (this.ngControl) {
            this.ngControl.statusChanges.pipe(takeUntil(this.destroy$)).subscribe(this.onStatusChanged);
        }
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxComboComponent.prototype.ngOnDestroy = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.comboAPI.clear();
        this.selection.clear(this.id);
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    IgxComboComponent.prototype.dataLoading = /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onDataPreLoad.emit(event);
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @param {?} value
     * @return {?}
     */
    IgxComboComponent.prototype.writeValue = /**
     * @hidden \@internal
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // selectItems can handle Array<any>, no valueKey is needed;
        this.selectItems(value, true);
        this.cdr.markForCheck();
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @param {?} fn
     * @return {?}
     */
    IgxComboComponent.prototype.registerOnChange = /**
     * @hidden \@internal
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChangeCallback = fn;
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @param {?} fn
     * @return {?}
     */
    IgxComboComponent.prototype.registerOnTouched = /**
     * @hidden \@internal
     * @param {?} fn
     * @return {?}
     */
    function (fn) { };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @param {?} isDisabled
     * @return {?}
     */
    IgxComboComponent.prototype.setDisabledState = /**
     * @hidden \@internal
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxComboComponent.prototype.getEditElement = /**
     * @hidden
     * @return {?}
     */
    function () {
        return this.comboInput.nativeElement;
    };
    Object.defineProperty(IgxComboComponent.prototype, "template", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            this._dataType = this.dataType;
            if (this.itemTemplate) {
                return this.itemTemplate;
            }
            if (this._dataType === DataTypes.COMPLEX) {
                return this.complexTemplate;
            }
            return this.primitiveTemplate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboComponent.prototype, "context", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return {
                $implicit: this
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    IgxComboComponent.prototype.handleClearItems = /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.deselectAllItems(true, event);
        event.stopPropagation();
    };
    /**
     * A method that opens/closes the combo.
     *
     *```html
     *<button (click)="combo.toggle()">Toggle Combo</button>
     *<igx-combo #combo></igx-combo>
     *```
     */
    /**
     * A method that opens/closes the combo.
     *
     * ```html
     * <button (click)="combo.toggle()">Toggle Combo</button>
     * <igx-combo #combo></igx-combo>
     * ```
     * @return {?}
     */
    IgxComboComponent.prototype.toggle = /**
     * A method that opens/closes the combo.
     *
     * ```html
     * <button (click)="combo.toggle()">Toggle Combo</button>
     * <igx-combo #combo></igx-combo>
     * ```
     * @return {?}
     */
    function () {
        /** @type {?} */
        var overlaySettings = Object.assign({}, this._overlaySettings, this.overlaySettings);
        this.dropdown.toggle(overlaySettings);
    };
    /**
     * A method that opens the combo.
     *
     *```html
     *<button (click)="combo.open()">Open Combo</button>
     *<igx-combo #combo></igx-combo>
     *```
     */
    /**
     * A method that opens the combo.
     *
     * ```html
     * <button (click)="combo.open()">Open Combo</button>
     * <igx-combo #combo></igx-combo>
     * ```
     * @return {?}
     */
    IgxComboComponent.prototype.open = /**
     * A method that opens the combo.
     *
     * ```html
     * <button (click)="combo.open()">Open Combo</button>
     * <igx-combo #combo></igx-combo>
     * ```
     * @return {?}
     */
    function () {
        /** @type {?} */
        var overlaySettings = Object.assign({}, this._overlaySettings, this.overlaySettings);
        this.dropdown.open(overlaySettings);
    };
    /**
     * A method that closes the combo.
     *
     *```html
     *<button (click)="combo.close()">Close Combo</button>
     *<igx-combo #combo></igx-combo>
     *```
     */
    /**
     * A method that closes the combo.
     *
     * ```html
     * <button (click)="combo.close()">Close Combo</button>
     * <igx-combo #combo></igx-combo>
     * ```
     * @return {?}
     */
    IgxComboComponent.prototype.close = /**
     * A method that closes the combo.
     *
     * ```html
     * <button (click)="combo.close()">Close Combo</button>
     * <igx-combo #combo></igx-combo>
     * ```
     * @return {?}
     */
    function () {
        this.dropdown.close();
    };
    Object.defineProperty(IgxComboComponent.prototype, "collapsed", {
        /**
         * Gets drop down state.
         *
         * ```typescript
         * let state = this.combo.collapsed;
         * ```
        */
        get: /**
         * Gets drop down state.
         *
         * ```typescript
         * let state = this.combo.collapsed;
         * ```
         * @return {?}
         */
        function () {
            return this.dropdown.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get current selection state
     * @returns Array of selected items
     * ```typescript
     * let selectedItems = this.combo.selectedItems();
     * ```
     */
    /**
     * Get current selection state
     * @return {?} Array of selected items
     * ```typescript
     * let selectedItems = this.combo.selectedItems();
     * ```
     */
    IgxComboComponent.prototype.selectedItems = /**
     * Get current selection state
     * @return {?} Array of selected items
     * ```typescript
     * let selectedItems = this.combo.selectedItems();
     * ```
     */
    function () {
        var _this = this;
        /** @type {?} */
        var items = Array.from(this.selection.get(this.id));
        return this.isRemote ? items.map(function (item) { return _this._parseItemID(item); }) : items;
    };
    /**
     * Select defined items
     * @param newItems new items to be selected
     * @param clearCurrentSelection if true clear previous selected items
     * ```typescript
     * this.combo.selectItems(["New York", "New Jersey"]);
     * ```
     */
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
    IgxComboComponent.prototype.selectItems = /**
     * Select defined items
     * @param {?} newItems new items to be selected
     * @param {?=} clearCurrentSelection if true clear previous selected items
     * ```typescript
     * this.combo.selectItems(["New York", "New Jersey"]);
     * ```
     * @param {?=} event
     * @return {?}
     */
    function (newItems, clearCurrentSelection, event) {
        if (newItems) {
            /** @type {?} */
            var newSelection = this.selection.add_items(this.id, newItems, clearCurrentSelection);
            this.setSelection(newSelection, event);
        }
    };
    /**
     * Deselect defined items
     * @param items items to deselected
     * ```typescript
     * this.combo.deselectItems(["New York", "New Jersey"]);
     * ```
     */
    /**
     * Deselect defined items
     * @param {?} items items to deselected
     * ```typescript
     * this.combo.deselectItems(["New York", "New Jersey"]);
     * ```
     * @param {?=} event
     * @return {?}
     */
    IgxComboComponent.prototype.deselectItems = /**
     * Deselect defined items
     * @param {?} items items to deselected
     * ```typescript
     * this.combo.deselectItems(["New York", "New Jersey"]);
     * ```
     * @param {?=} event
     * @return {?}
     */
    function (items, event) {
        if (items) {
            /** @type {?} */
            var newSelection = this.selection.delete_items(this.id, items);
            this.setSelection(newSelection, event);
        }
    };
    /**
     * Select all (filtered) items
     * @param ignoreFilter if set to true, selects all items, otherwise selects only the filtered ones.
     * ```typescript
     * this.combo.selectAllItems();
     * ```
     */
    /**
     * Select all (filtered) items
     * @param {?=} ignoreFilter if set to true, selects all items, otherwise selects only the filtered ones.
     * ```typescript
     * this.combo.selectAllItems();
     * ```
     * @param {?=} event
     * @return {?}
     */
    IgxComboComponent.prototype.selectAllItems = /**
     * Select all (filtered) items
     * @param {?=} ignoreFilter if set to true, selects all items, otherwise selects only the filtered ones.
     * ```typescript
     * this.combo.selectAllItems();
     * ```
     * @param {?=} event
     * @return {?}
     */
    function (ignoreFilter, event) {
        /** @type {?} */
        var allVisible = this.selection.get_all_ids(ignoreFilter ? this.data : this.filteredData);
        /** @type {?} */
        var newSelection = this.selection.add_items(this.id, allVisible);
        this.setSelection(newSelection, event);
    };
    /**
     * Deselect all (filtered) items
     * @param ignoreFilter if set to true, deselects all items, otherwise deselects only the filtered ones.
     * ```typescript
     * this.combo.deselectAllItems();
     * ```
     */
    /**
     * Deselect all (filtered) items
     * @param {?=} ignoreFilter if set to true, deselects all items, otherwise deselects only the filtered ones.
     * ```typescript
     * this.combo.deselectAllItems();
     * ```
     * @param {?=} event
     * @return {?}
     */
    IgxComboComponent.prototype.deselectAllItems = /**
     * Deselect all (filtered) items
     * @param {?=} ignoreFilter if set to true, deselects all items, otherwise deselects only the filtered ones.
     * ```typescript
     * this.combo.deselectAllItems();
     * ```
     * @param {?=} event
     * @return {?}
     */
    function (ignoreFilter, event) {
        /** @type {?} */
        var newSelection = this.selection.get_empty();
        if (this.filteredData.length !== this.data.length && !ignoreFilter) {
            newSelection = this.selection.delete_items(this.id, this.selection.get_all_ids(this.filteredData));
        }
        this.setSelection(newSelection, event);
    };
    /**
     * Selects/Deselects an item using it's valueKey value
     * @param itemID the valueKey of the specified item
     * @param select If the item should be selected (true) or deselcted (false)
     *
     * ```typescript
     * items: { field: string, region: string}[] = data;
     * this.combo.setSelectedItem('Connecticut', true);
     * // combo.valueKey === 'field'
     * // items[n] === { field: 'Connecticut', state: 'New England'}
     * ```
     */
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
    IgxComboComponent.prototype.setSelectedItem = /**
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
    function (itemID, select, event) {
        if (select === void 0) { select = true; }
        if (itemID === null || itemID === undefined) {
            return;
        }
        /** @type {?} */
        var itemValue = this.getValueByValueKey(itemID);
        if (itemValue !== null && itemValue !== undefined) {
            if (select) {
                this.selectItems([itemValue], false, event);
            }
            else {
                this.deselectItems([itemValue], event);
            }
        }
    };
    /**
     * @protected
     * @param {?} newSelection
     * @param {?=} event
     * @return {?}
     */
    IgxComboComponent.prototype.setSelection = /**
     * @protected
     * @param {?} newSelection
     * @param {?=} event
     * @return {?}
     */
    function (newSelection, event) {
        var _this = this;
        /** @type {?} */
        var oldSelectionEmit = Array.from(this.selection.get(this.id) || []);
        /** @type {?} */
        var newSelectionEmit = Array.from(newSelection || []);
        /** @type {?} */
        var args = {
            newSelection: newSelectionEmit,
            oldSelection: oldSelectionEmit,
            event: event,
            cancel: false
        };
        this.onSelectionChange.emit(args);
        if (!args.cancel) {
            this.selection.select_items(this.id, args.newSelection, true);
            this._value = this.dataType !== DataTypes.PRIMITIVE ?
                args.newSelection.map(function (id) { return _this._parseItemID(id)[_this.displayKey]; }).join(', ') :
                args.newSelection.join(', ');
            this._onChangeCallback(args.newSelection);
        }
    };
    /**
     * Event handlers
     * @hidden
     * @internal
     */
    /**
     * Event handlers
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    IgxComboComponent.prototype.handleOpening = /**
     * Event handlers
     * @hidden
     * \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onOpening.emit(event);
        if (event.cancel) {
            return;
        }
        this.handleInputChange();
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxComboComponent.prototype.handleOpened = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        this.triggerCheck();
        this.focusSearchInput(true);
        this.onOpened.emit();
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    IgxComboComponent.prototype.handleClosing = /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onClosing.emit(event);
        if (event.cancel) {
            return;
        }
        this.searchValue = '';
        this.comboInput.nativeElement.focus();
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxComboComponent.prototype.handleClosed = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        this.onClosed.emit();
    };
    IgxComboComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-combo',
                    template: "<ng-template #complex let-display let-data=\"data\" let-key=\"displayKey\">\n    {{display[key]}}\n</ng-template>\n<ng-template #primitive let-display>\n    {{display}}\n</ng-template>\n<ng-template #empty>\n    <span>The list is empty</span>\n</ng-template>\n<ng-template #addItemDefault let-control>\n    <button igxButton=\"flat\" igxRipple>Add item</button>\n</ng-template>\n<ng-template #headerItemBase let-item let-key=\"valueKey\" let-groupKey=\"groupKey\">\n    {{ item[key] }}\n</ng-template>\n\n<igx-input-group [displayDensity]=\"displayDensity\" [type]=\"type\" (click)=\"onInputClick($event)\">\n    <ng-container ngProjectAs=\"[igxLabel]\">\n        <ng-content select=\"[igxLabel]\"></ng-content>\n    </ng-container>\n    <ng-container ngProjectAs=\"igx-prefix\">\n        <ng-content select=\"igx-prefix\"></ng-content>\n    </ng-container>\n    <ng-container ngProjectAs=\"igx-hint, [igxHint]\">\n            <ng-content select=\"igx-hint, [igxHint]\"></ng-content>\n        </ng-container>\n    <input igxInput #comboInput name=\"comboInput\" type=\"text\" [value]=\"value\" readonly [placeholder]=\"placeholder\"\n        [disabled]=\"disabled\" (blur)=\"onBlur()\" />\n    <ng-container ngProjectAs=\"igx-suffix\">\n        <ng-content select=\"igx-suffix\"></ng-content>\n    </ng-container>\n    <igx-suffix *ngIf=\"value.length\" aria-label=\"Clear Selection\" class=\"igx-combo__clear-button\" igxRipple (click)=\"handleClearItems($event)\">\n        <ng-container *ngIf=\"clearIconTemplate\">\n            <ng-container *ngTemplateOutlet=\"clearIconTemplate\"></ng-container>\n        </ng-container>\n        <igx-icon *ngIf=\"!clearIconTemplate\" fontSet=\"material\">clear</igx-icon>\n    </igx-suffix>\n    <igx-suffix igxButton=\"icon\" class=\"igx-combo__toggle-button\" igxRipple>\n        <ng-container *ngIf=\"toggleIconTemplate\">\n            <ng-container *ngTemplateOutlet=\"toggleIconTemplate; context: {$implicit: this.collapsed}\"></ng-container>\n        </ng-container>\n        <igx-icon *ngIf=\"!toggleIconTemplate\" fontSet=\"material\">{{ dropdown.collapsed ? 'arrow_drop_down' : 'arrow_drop_up'}}</igx-icon>\n    </igx-suffix>\n</igx-input-group>\n<igx-combo-drop-down #igxComboDropDown class=\"igx-combo__drop-down\" [displayDensity]=\"displayDensity\" [width]=\"itemsWidth || '100%'\" (onOpening)=\"handleOpening($event)\"\n    (onClosing)=\"handleClosing($event)\" (onOpened)=\"handleOpened()\" (onClosed)=\"handleClosed()\">\n    <igx-input-group *ngIf=\"displaySearchInput\" [displayDensity]=\"displayDensity\" class=\"igx-combo__search\">\n        <input class=\"igx-combo-input\" igxInput #searchInput name=\"searchInput\" autocomplete=\"off\" type=\"text\"\n            [(ngModel)]=\"searchValue\" (ngModelChange)=\"handleInputChange($event)\" (keyup)=\"handleKeyUp($event)\"\n            (keydown)=\"handleKeyDown($event)\" (focus)=\"dropdown.onBlur($event)\" [placeholder]=\"searchPlaceholder\"\n            aria-autocomplete=\"both\" [attr.aria-owns]=\"dropdown.id\" [attr.aria-labelledby]=\"ariaLabelledBy\" />\n    </igx-input-group>\n    <ng-container *ngTemplateOutlet=\"headerTemplate\">\n    </ng-container>\n    <div #dropdownItemContainer class=\"igx-combo__content\" [style.overflow]=\"'hidden'\" [style.maxHeight.px]=\"itemsMaxHeight\"\n        [igxDropDownItemNavigation]=\"dropdown\" (focus)=\"dropdown.onFocus()\" [tabindex]=\"dropdown.collapsed ? -1 : 0\"\n        role=\"listbox\" [attr.id]=\"dropdown.id\">\n        <ng-template igxFor let-item let-index=\"index\" [igxForOf]=\"data | comboFiltering:filteringExpressions:filteringLogic | comboSorting:sortingExpressions | comboGrouping:groupKey\"\n            [igxForScrollOrientation]=\"'vertical'\" [igxForContainerSize]=\"itemsMaxHeight\" [igxForItemSize]=\"itemHeight\"\n            (onChunkPreload)=\"dataLoading($event)\">\n            <igx-combo-item  [itemHeight]='itemHeight' [value]=\"item\" [isHeader]=\"item.isHeader\" role=\"option\" [index]=\"index\">\n                <ng-container *ngIf=\"item.isHeader\">\n                    <ng-container *ngTemplateOutlet=\"headerItemTemplate ? headerItemTemplate : headerItemBase; context: {$implicit: item, data: data, valueKey: valueKey, groupKey: groupKey, displayKey: displayKey}\"></ng-container>\n                </ng-container>\n                <ng-container *ngIf=\"!item.isHeader\">\n                    <ng-container #listItem *ngTemplateOutlet=\"template; context: {$implicit: item, data: data, valueKey: valueKey, displayKey: displayKey};\"></ng-container>\n                </ng-container>\n            </igx-combo-item>\n        </ng-template>\n    </div>\n    <div class=\"igx-combo__add\" *ngIf=\"filteredData.length === 0 || isAddButtonVisible()\">\n        <div class=\"igx-combo__empty\" *ngIf=\"filteredData.length === 0\">\n            <ng-container *ngTemplateOutlet=\"emptyTemplate ? emptyTemplate : empty\">\n            </ng-container>\n        </div>\n        <igx-combo-add-item [itemHeight]='itemHeight' *ngIf=\"isAddButtonVisible()\" [tabindex]=\"dropdown.collapsed ? -1 : customValueFlag ? 1 : -1\"\n            class=\"igx-combo__add-item\" role=\"button\" aria-label=\"Add Item\" [index]=\"virtualScrollContainer.igxForOf.length\">\n            <ng-container *ngTemplateOutlet=\"addItemTemplate ? addItemTemplate : addItemDefault\">\n            </ng-container>\n        </igx-combo-add-item>\n    </div>\n    <ng-container *ngTemplateOutlet=\"footerTemplate\">\n    </ng-container>\n</igx-combo-drop-down>",
                    providers: [
                        IgxComboAPIService,
                        { provide: IGX_COMBO_COMPONENT, useExisting: IgxComboComponent },
                        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(function () { return IgxComboComponent; }), multi: true }
                    ]
                }] }
    ];
    /** @nocollapse */
    IgxComboComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: IgxSelectionAPIService },
        { type: IgxComboAPIService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] },
        { type: Injector, decorators: [{ type: Optional }] }
    ]; };
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
        role: [{ type: HostBinding, args: ["attr.role",] }],
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
    return IgxComboComponent;
}(DisplayDensityBase));
export { IgxComboComponent };
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
var IgxComboModule = /** @class */ (function () {
    function IgxComboModule() {
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
    return IgxComboModule;
}());
export { IgxComboModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21iby9jb21iby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUM3RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNZLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUM5RyxLQUFLLEVBQUUsUUFBUSxFQUFxQixNQUFNLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQzdHLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDSCxxQkFBcUIsRUFDckIsc0JBQXNCLEVBQ3RCLDJCQUEyQixFQUMzQix1QkFBdUIsRUFDdkIsdUJBQXVCLEVBQ3ZCLHdCQUF3QixFQUN4QiwyQkFBMkIsRUFDM0IsMEJBQTBCLEVBQzdCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBd0IsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBbUQsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0csT0FBTyxFQUFFLGNBQWMsRUFBd0IsTUFBTSxtREFBbUQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsZ0JB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O0lBMFl4Qiw0Q0FLQzs7Ozs7SUEzakNHLHVDQUFnQzs7Ozs7SUFDaEMsZ0NBQWdDOzs7OztJQUNoQyxzQ0FBMkM7Ozs7O0lBQzNDLHFDQUFzQzs7Ozs7SUFDdEMsbURBQWlHOzs7OztJQUNqRyxxQ0FBc0M7Ozs7O0FBbTRDOUM7SUFBQTtJQXdCOEIsQ0FBQzs7Z0JBeEI5QixRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUUsMkJBQTJCLEVBQUUsb0JBQW9CO3dCQUN0RyxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0I7d0JBQy9GLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0QiwyQkFBMkI7d0JBQzNCLHVCQUF1Qjt3QkFDdkIsdUJBQXVCO3dCQUN2Qix3QkFBd0I7d0JBQ3hCLDJCQUEyQjt3QkFDM0IsMEJBQTBCLENBQUM7b0JBQy9CLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLHlCQUF5QixFQUFFLHdCQUF3Qjt3QkFDbkcscUJBQXFCO3dCQUNyQixzQkFBc0I7d0JBQ3RCLDJCQUEyQjt3QkFDM0IsdUJBQXVCO3dCQUN2Qix1QkFBdUI7d0JBQ3ZCLHdCQUF3Qjt3QkFDeEIsMkJBQTJCO3dCQUMzQiwwQkFBMEIsQ0FBQztvQkFDL0IsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsbUJBQW1CO3dCQUMxRixjQUFjLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxhQUFhLENBQUM7b0JBQzFHLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUN0Qzs7SUFDNkIscUJBQUM7Q0FBQSxBQXhCL0IsSUF3QitCO1NBQWxCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0ZWRQb3NpdGlvbmluZ1N0cmF0ZWd5IH0gZnJvbSAnLi8uLi9zZXJ2aWNlcy9vdmVybGF5L3Bvc2l0aW9uL2Nvbm5lY3RlZC1wb3NpdGlvbmluZy1zdHJhdGVneSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lcixcbiAgICBJbnB1dCwgTmdNb2R1bGUsIE9uSW5pdCwgT25EZXN0cm95LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIE9wdGlvbmFsLCBJbmplY3QsIEluamVjdG9yLCBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBJZ3hDb21ib0l0ZW1EaXJlY3RpdmUsXG4gICAgSWd4Q29tYm9FbXB0eURpcmVjdGl2ZSxcbiAgICBJZ3hDb21ib0hlYWRlckl0ZW1EaXJlY3RpdmUsXG4gICAgSWd4Q29tYm9IZWFkZXJEaXJlY3RpdmUsXG4gICAgSWd4Q29tYm9Gb290ZXJEaXJlY3RpdmUsXG4gICAgSWd4Q29tYm9BZGRJdGVtRGlyZWN0aXZlLFxuICAgIElneENvbWJvVG9nZ2xlSWNvbkRpcmVjdGl2ZSxcbiAgICBJZ3hDb21ib0NsZWFySWNvbkRpcmVjdGl2ZVxufSBmcm9tICcuL2NvbWJvLmRpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSWd4Q2hlY2tib3hNb2R1bGUgfSBmcm9tICcuLi9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4U2VsZWN0aW9uQVBJU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VsZWN0aW9uJztcbmltcG9ydCB7IGNsb25lQXJyYXksIENhbmNlbGFibGVFdmVudEFyZ3MsIENhbmNlbGFibGVCcm93c2VyRXZlbnRBcmdzIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBJZ3hTdHJpbmdGaWx0ZXJpbmdPcGVyYW5kLCBJZ3hCb29sZWFuRmlsdGVyaW5nT3BlcmFuZCB9IGZyb20gJy4uL2RhdGEtb3BlcmF0aW9ucy9maWx0ZXJpbmctY29uZGl0aW9uJztcbmltcG9ydCB7IEZpbHRlcmluZ0xvZ2ljLCBJRmlsdGVyaW5nRXhwcmVzc2lvbiB9IGZyb20gJy4uL2RhdGEtb3BlcmF0aW9ucy9maWx0ZXJpbmctZXhwcmVzc2lvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU29ydGluZ0RpcmVjdGlvbiwgSVNvcnRpbmdFeHByZXNzaW9uIH0gZnJvbSAnLi4vZGF0YS1vcGVyYXRpb25zL3NvcnRpbmctZXhwcmVzc2lvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSWd4Rm9yT2ZNb2R1bGUsIElGb3JPZlN0YXRlLCBJZ3hGb3JPZkRpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvZm9yLW9mL2Zvcl9vZi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4SWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgSWd4UmlwcGxlTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9yaXBwbGUvcmlwcGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hUb2dnbGVNb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElneEJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvYnV0dG9uL2J1dHRvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4RHJvcERvd25Nb2R1bGUgfSBmcm9tICcuLi9kcm9wLWRvd24vaW5kZXgnO1xuaW1wb3J0IHsgSWd4SW5wdXRHcm91cE1vZHVsZSB9IGZyb20gJy4uL2lucHV0LWdyb3VwL2lucHV0LWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hDb21ib0l0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbWJvLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IElneENvbWJvRHJvcERvd25Db21wb25lbnQgfSBmcm9tICcuL2NvbWJvLWRyb3Bkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hDb21ib0ZpbHRlckNvbmRpdGlvblBpcGUsIElneENvbWJvRmlsdGVyaW5nUGlwZSwgSWd4Q29tYm9Hcm91cGluZ1BpcGUsIElneENvbWJvU29ydGluZ1BpcGUgfSBmcm9tICcuL2NvbWJvLnBpcGVzJztcbmltcG9ydCB7IE92ZXJsYXlTZXR0aW5ncywgQWJzb2x1dGVTY3JvbGxTdHJhdGVneSB9IGZyb20gJy4uL3NlcnZpY2VzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERlZmF1bHRTb3J0aW5nU3RyYXRlZ3ksIElTb3J0aW5nU3RyYXRlZ3kgfSBmcm9tICcuLi9kYXRhLW9wZXJhdGlvbnMvc29ydGluZy1zdHJhdGVneSc7XG5pbXBvcnQgeyBEaXNwbGF5RGVuc2l0eUJhc2UsIERpc3BsYXlEZW5zaXR5VG9rZW4sIElEaXNwbGF5RGVuc2l0eU9wdGlvbnMgfSBmcm9tICcuLi9jb3JlL2RlbnNpdHknO1xuaW1wb3J0IHsgSUdYX0NPTUJPX0NPTVBPTkVOVCwgSWd4Q29tYm9CYXNlIH0gZnJvbSAnLi9jb21iby5jb21tb24nO1xuaW1wb3J0IHsgSWd4Q29tYm9BZGRJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21iby1hZGQtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4Q29tYm9BUElTZXJ2aWNlIH0gZnJvbSAnLi9jb21iby5hcGknO1xuaW1wb3J0IHsgRWRpdG9yUHJvdmlkZXIgfSBmcm9tICcuLi9jb3JlL2VkaXQtcHJvdmlkZXInO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmVudW0gRGF0YVR5cGVzIHtcbiAgICBFTVBUWSA9ICdlbXB0eScsXG4gICAgUFJJTUlUSVZFID0gJ3ByaW1pdGl2ZScsXG4gICAgQ09NUExFWCA9ICdjb21wbGV4JyxcbiAgICBQUklNQVJZS0VZID0gJ3ZhbHVlS2V5J1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuY29uc3QgSXRlbUhlaWdodHMgPSB7XG4gICAgJ2NvbWZvcnRhYmxlJzogNDAsXG4gICAgJ2Nvc3knOiAzMixcbiAgICAnY29tcGFjdCc6IDI4LFxufTtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKiBUaGUgZGVmYXVsdCBudW1iZXIgb2YgaXRlbXMgdGhhdCBzaG91bGQgYmUgaW4gdGhlIGNvbWJvJ3NcbiAqIGRyb3AtZG93biBsaXN0IGlmIG5vIGBbaXRlbXNNYXhIZWlnaHRdYCBpcyBzcGVjaWZpZWRcbiAqL1xuY29uc3QgaXRlbXNJbkNvbnRhaW5lciA9IDEwO1xuXG5leHBvcnQgZW51bSBJZ3hDb21ib1N0YXRlIHtcbiAgICAvKipcbiAgICAgKiBDb21ibyB3aXRoIGluaXRpYWwgc3RhdGUuXG4gICAgICovXG4gICAgSU5JVElBTCxcbiAgICAvKipcbiAgICAgKiBDb21ibyB3aXRoIHZhbGlkIHN0YXRlLlxuICAgICAqL1xuICAgIFZBTElELFxuICAgIC8qKlxuICAgICAqIENvbWJvIHdpdGggaW52YWxpZCBzdGF0ZS5cbiAgICAgKi9cbiAgICBJTlZBTElEXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbWJvU2VsZWN0aW9uQ2hhbmdlRXZlbnRBcmdzIGV4dGVuZHMgQ2FuY2VsYWJsZUV2ZW50QXJncyB7XG4gICAgb2xkU2VsZWN0aW9uOiBhbnlbXTtcbiAgICBuZXdTZWxlY3Rpb246IGFueVtdO1xuICAgIGV2ZW50PzogRXZlbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbWJvSXRlbUFkZGl0aW9uRXZlbnQge1xuICAgIG9sZENvbGxlY3Rpb246IGFueVtdO1xuICAgIGFkZGVkSXRlbTogYW55O1xuICAgIG5ld0NvbGxlY3Rpb246IGFueVtdO1xufVxuXG5sZXQgTkVYVF9JRCA9IDA7XG5jb25zdCBub29wID0gKCkgPT4geyB9O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lneC1jb21ibycsXG4gICAgdGVtcGxhdGVVcmw6ICdjb21iby5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIElneENvbWJvQVBJU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiBJR1hfQ09NQk9fQ09NUE9ORU5ULCB1c2VFeGlzdGluZzogSWd4Q29tYm9Db21wb25lbnQgfSxcbiAgICAgICAgeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSWd4Q29tYm9Db21wb25lbnQpLCBtdWx0aTogdHJ1ZSB9XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hDb21ib0NvbXBvbmVudCBleHRlbmRzIERpc3BsYXlEZW5zaXR5QmFzZSBpbXBsZW1lbnRzIElneENvbWJvQmFzZSwgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCxcbiAgICBPbkRlc3Ryb3ksIEVkaXRvclByb3ZpZGVyIHtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBjdXN0b21WYWx1ZUZsYWcgPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGRlZmF1bHRGYWxsYmFja0dyb3VwID0gJ090aGVyJztcbiAgICBwcm90ZWN0ZWQgc3RyaW5nRmlsdGVycyA9IElneFN0cmluZ0ZpbHRlcmluZ09wZXJhbmQ7XG4gICAgcHJvdGVjdGVkIGJvb2xlYW5GaWx0ZXJzID0gSWd4Qm9vbGVhbkZpbHRlcmluZ09wZXJhbmQ7XG4gICAgcHJvdGVjdGVkIF9maWx0ZXJpbmdMb2dpYyA9IEZpbHRlcmluZ0xvZ2ljLk9yO1xuICAgIHByb3RlY3RlZCBfZmlsdGVyaW5nRXhwcmVzc2lvbnM6IElGaWx0ZXJpbmdFeHByZXNzaW9uW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgX3NvcnRpbmdFeHByZXNzaW9uczogSVNvcnRpbmdFeHByZXNzaW9uW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgX2dyb3VwS2V5ID0gJyc7XG4gICAgcHJvdGVjdGVkIF9kaXNwbGF5S2V5OiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIF9wcmV2SW5wdXRWYWx1ZSA9ICcnO1xuICAgIHByaXZhdGUgX2RhdGFUeXBlID0gJyc7XG4gICAgcHJpdmF0ZSBuZ0NvbnRyb2w6IE5nQ29udHJvbCA9IG51bGw7XG4gICAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICBwcml2YXRlIF9kYXRhID0gW107XG4gICAgcHJpdmF0ZSBfZmlsdGVyZWREYXRhID0gW107XG4gICAgcHJpdmF0ZSBfaXRlbUhlaWdodCA9IG51bGw7XG4gICAgcHJpdmF0ZSBfaXRlbXNNYXhIZWlnaHQgPSBudWxsO1xuICAgIHByaXZhdGUgX29uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSBub29wO1xuICAgIHByaXZhdGUgX292ZXJsYXlTZXR0aW5nczogT3ZlcmxheVNldHRpbmdzID0ge1xuICAgICAgICBzY3JvbGxTdHJhdGVneTogbmV3IEFic29sdXRlU2Nyb2xsU3RyYXRlZ3koKSxcbiAgICAgICAgcG9zaXRpb25TdHJhdGVneTogbmV3IENvbm5lY3RlZFBvc2l0aW9uaW5nU3RyYXRlZ3koKSxcbiAgICAgICAgbW9kYWw6IGZhbHNlLFxuICAgICAgICBjbG9zZU9uT3V0c2lkZUNsaWNrOiB0cnVlLFxuICAgICAgICBleGNsdWRlUG9zaXRpb25UYXJnZXQ6IHRydWVcbiAgICB9O1xuICAgIHByaXZhdGUgX3ZhbHVlID0gJyc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgcHJvdGVjdGVkIHNlbGVjdGlvbjogSWd4U2VsZWN0aW9uQVBJU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGNvbWJvQVBJOiBJZ3hDb21ib0FQSVNlcnZpY2UsXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRGlzcGxheURlbnNpdHlUb2tlbikgcHJvdGVjdGVkIF9kaXNwbGF5RGVuc2l0eU9wdGlvbnM6IElEaXNwbGF5RGVuc2l0eU9wdGlvbnMsXG4gICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICAgIHN1cGVyKF9kaXNwbGF5RGVuc2l0eU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNvbWJvQVBJLnJlZ2lzdGVyKHRoaXMpO1xuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoSWd4Rm9yT2ZEaXJlY3RpdmUsIHsgcmVhZDogSWd4Rm9yT2ZEaXJlY3RpdmUsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCB2aXJ0RGlyOiBJZ3hGb3JPZkRpcmVjdGl2ZTxhbnk+O1xuXG4gICAgLyoqXG4gICAgICogU2V0IGN1c3RvbSBvdmVybGF5IHNldHRpbmdzIHRoYXQgY29udHJvbCBob3cgdGhlIGNvbWJvJ3MgbGlzdCBvZiBpdGVtcyBpcyBkaXNwbGF5ZWQuXG4gICAgICogU2V0OlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbWJvIFtvdmVybGF5U2V0dGluZ3NdID0gXCJjdXN0b21PdmVybGF5U2V0dGluZ3NcIj48L2lneC1jb21ibz5cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgY29uc3QgY3VzdG9tU2V0dGluZ3MgPSB7IHBvc2l0aW9uU3RyYXRlZ3k6IHsgc2V0dGluZ3M6IHsgdGFyZ2V0OiBteVRhcmdldCB9IH0gfTtcbiAgICAgKiAgY29tYm8ub3ZlcmxheVNldHRpbmdzID0gY3VzdG9tU2V0dGluZ3M7XG4gICAgICogYGBgXG4gICAgICogR2V0IGFueSBjdXN0b20gb3ZlcmxheSBzZXR0aW5ncyB1c2VkIGJ5IHRoZSBjb21ibzpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIGNvbnN0IGNvbWJvT3ZlcmxheVNldHRpbmdzOiBPdmVybGF5U2V0dGluZ3MgPSBteUNvbWJvLm92ZXJsYXlTZXR0aW5ncztcbiAgICAgKiBgYGBcbiAgICAgKi9cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG92ZXJsYXlTZXR0aW5nczogT3ZlcmxheVNldHRpbmdzID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQFZpZXdDaGlsZChJZ3hDb21ib0Ryb3BEb3duQ29tcG9uZW50LCB7IHJlYWQ6IElneENvbWJvRHJvcERvd25Db21wb25lbnQsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBkcm9wZG93bjogSWd4Q29tYm9Ecm9wRG93bkNvbXBvbmVudDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnc2VhcmNoSW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgc2VhcmNoSW5wdXQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD4gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdjb21ib0lucHV0JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgY29tYm9JbnB1dDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PiA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIGdldCBkaXNwbGF5U2VhcmNoSW5wdXQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcmFibGUgfHwgdGhpcy5hbGxvd0N1c3RvbVZhbHVlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VzdG9tIHRlbXBsYXRlLCBpZiBhbnksIHRoYXQgc2hvdWxkIGJlIHVzZWQgd2hlbiByZW5kZXJpbmcgSVRFTVMgaW4gdGhlIGNvbWJvIGxpc3RcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBTZXQgaW4gdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IG15Q3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBteUNvbXBvbmVudC5jdXN0b21UZW1wbGF0ZTtcbiAgICAgKiBteUNvbXBvbmVudC5jb21iby5pdGVtVGVtcGxhdGUgPSBteUN1c3RvbVRlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tIFNldCBpbiBtYXJrdXAgLS0+XG4gICAgICogIDxpZ3gtY29tYm8gI2NvbWJvPlxuICAgICAqICAgICAgLi4uXG4gICAgICogICAgICA8bmctdGVtcGxhdGUgaWd4Q29tYm9JdGVtPlxuICAgICAqICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20taXRlbVwiIGxldC1pdGVtIGxldC1rZXk9XCJ2YWx1ZUtleVwiPlxuICAgICAqICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWl0ZW1fX25hbWVcIj57eyBpdGVtW2tleV0gfX08L2Rpdj5cbiAgICAgKiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1pdGVtX19jb3N0XCI+e3sgaXRlbS5jb3N0IH19PC9kaXY+XG4gICAgICogICAgICAgICAgPC9kaXY+XG4gICAgICogICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAqICA8L2lneC1jb21ibz5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneENvbWJvSXRlbURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VzdG9tIHRlbXBsYXRlLCBpZiBhbnksIHRoYXQgc2hvdWxkIGJlIHVzZWQgd2hlbiByZW5kZXJpbmcgdGhlIEhFQURFUiBmb3IgdGhlIGNvbWJvIGl0ZW1zIGxpc3RcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBTZXQgaW4gdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IG15Q3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBteUNvbXBvbmVudC5jdXN0b21UZW1wbGF0ZTtcbiAgICAgKiBteUNvbXBvbmVudC5jb21iby5oZWFkZXJUZW1wbGF0ZSA9IG15Q3VzdG9tVGVtcGxhdGU7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDwhLS0gU2V0IGluIG1hcmt1cCAtLT5cbiAgICAgKiAgPGlneC1jb21ibyAjY29tYm8+XG4gICAgICogICAgICAuLi5cbiAgICAgKiAgICAgIDxuZy10ZW1wbGF0ZSBpZ3hDb21ib0hlYWRlcj5cbiAgICAgKiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tYm9fX2hlYWRlclwiPlxuICAgICAqICAgICAgICAgICAgICBUaGlzIGlzIGEgY3VzdG9tIGhlYWRlclxuICAgICAqICAgICAgICAgIDwvZGl2PlxuICAgICAqICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgKiAgPC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChJZ3hDb21ib0hlYWRlckRpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXN0b20gdGVtcGxhdGUsIGlmIGFueSwgdGhhdCBzaG91bGQgYmUgdXNlZCB3aGVuIHJlbmRlcmluZyB0aGUgRk9PVEVSIGZvciB0aGUgY29tYm8gaXRlbXMgbGlzdFxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIFNldCBpbiB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgbXlDdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IG15Q29tcG9uZW50LmN1c3RvbVRlbXBsYXRlO1xuICAgICAqIG15Q29tcG9uZW50LmNvbWJvLmZvb3RlclRlbXBsYXRlID0gbXlDdXN0b21UZW1wbGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLSBTZXQgaW4gbWFya3VwIC0tPlxuICAgICAqICA8aWd4LWNvbWJvICNjb21ibz5cbiAgICAgKiAgICAgIC4uLlxuICAgICAqICAgICAgPG5nLXRlbXBsYXRlIGlneENvbWJvRm9vdGVyPlxuICAgICAqICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21ib19fZm9vdGVyXCI+XG4gICAgICogICAgICAgICAgICAgIFRoaXMgaXMgYSBjdXN0b20gZm9vdGVyXG4gICAgICogICAgICAgICAgPC9kaXY+XG4gICAgICogICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAqICA8L2lneC1jb21ibz5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneENvbWJvRm9vdGVyRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1c3RvbSB0ZW1wbGF0ZSwgaWYgYW55LCB0aGF0IHNob3VsZCBiZSB1c2VkIHdoZW4gcmVuZGVyaW5nIEhFQURFUiBJVEVNUyBmb3IgZ3JvdXBzIGluIHRoZSBjb21ibyBsaXN0XG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gU2V0IGluIHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBteUN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbXlDb21wb25lbnQuY3VzdG9tVGVtcGxhdGU7XG4gICAgICogbXlDb21wb25lbnQuY29tYm8uaGVhZGVySXRlbVRlbXBsYXRlID0gbXlDdXN0b21UZW1wbGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLSBTZXQgaW4gbWFya3VwIC0tPlxuICAgICAqICA8aWd4LWNvbWJvICNjb21ibz5cbiAgICAgKiAgICAgIC4uLlxuICAgICAqICAgICAgPG5nLXRlbXBsYXRlIGlneENvbWJvSGVhZGVySXRlbSBsZXQtaXRlbSBsZXQta2V5PVwiZ3JvdXBLZXlcIj5cbiAgICAgKiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWl0ZW0tLWdyb3VwXCI+R3JvdXAgaGVhZGVyIGZvciB7eyBpdGVtW2tleV0gfX08L2Rpdj5cbiAgICAgKiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICogIDwvaWd4LWNvbWJvPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4Q29tYm9IZWFkZXJJdGVtRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgaGVhZGVySXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXN0b20gdGVtcGxhdGUsIGlmIGFueSwgdGhhdCBzaG91bGQgYmUgdXNlZCB3aGVuIHJlbmRlcmluZyB0aGUgQUREIEJVVFRPTiBpbiB0aGUgY29tYm8gZHJvcCBkb3duXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gU2V0IGluIHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBteUN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbXlDb21wb25lbnQuY3VzdG9tVGVtcGxhdGU7XG4gICAgICogbXlDb21wb25lbnQuY29tYm8uYWRkSXRlbVRlbXBsYXRlID0gbXlDdXN0b21UZW1wbGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLSBTZXQgaW4gbWFya3VwIC0tPlxuICAgICAqICA8aWd4LWNvbWJvICNjb21ibz5cbiAgICAgKiAgICAgIC4uLlxuICAgICAqICAgICAgPG5nLXRlbXBsYXRlIGlneENvbWJvQWRkSXRlbT5cbiAgICAgKiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29tYm9fX2FkZC1idXR0b25cIj5cbiAgICAgKiAgICAgICAgICAgICAgQ2xpY2sgdG8gYWRkIGl0ZW1cbiAgICAgKiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgKiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICogIDwvaWd4LWNvbWJvPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4Q29tYm9BZGRJdGVtRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgYWRkSXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXN0b20gdGVtcGxhdGUsIGlmIGFueSwgdGhhdCBzaG91bGQgYmUgdXNlZCB3aGVuIHJlbmRlcmluZyB0aGUgQUREIEJVVFRPTiBpbiB0aGUgY29tYm8gZHJvcCBkb3duXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gU2V0IGluIHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBteUN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbXlDb21wb25lbnQuY3VzdG9tVGVtcGxhdGU7XG4gICAgICogbXlDb21wb25lbnQuY29tYm8uZW1wdHlUZW1wbGF0ZSA9IG15Q3VzdG9tVGVtcGxhdGU7XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDwhLS0gU2V0IGluIG1hcmt1cCAtLT5cbiAgICAgKiAgPGlneC1jb21ibyAjY29tYm8+XG4gICAgICogICAgICAuLi5cbiAgICAgKiAgICAgIDxuZy10ZW1wbGF0ZSBpZ3hDb21ib0VtcHR5PlxuICAgICAqICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21iby0tZW10cHlcIj5cbiAgICAgKiAgICAgICAgICAgICAgVGhlcmUgYXJlIG5vIGl0ZW1zIHRvIGRpc3BsYXlcbiAgICAgKiAgICAgICAgICA8L2Rpdj5cbiAgICAgKiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICogIDwvaWd4LWNvbWJvPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4Q29tYm9FbXB0eURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGVtcHR5VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1c3RvbSB0ZW1wbGF0ZSwgaWYgYW55LCB0aGF0IHNob3VsZCBiZSB1c2VkIHdoZW4gcmVuZGVyaW5nIHRoZSBjb21ibyBUT0dHTEUob3Blbi9jbG9zZSkgYnV0dG9uXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gU2V0IGluIHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBteUN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbXlDb21wb25lbnQuY3VzdG9tVGVtcGxhdGU7XG4gICAgICogbXlDb21wb25lbnQuY29tYm8udG9nZ2xlSWNvblRlbXBsYXRlID0gbXlDdXN0b21UZW1wbGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLSBTZXQgaW4gbWFya3VwIC0tPlxuICAgICAqICA8aWd4LWNvbWJvICNjb21ibz5cbiAgICAgKiAgICAgIC4uLlxuICAgICAqICAgICAgPG5nLXRlbXBsYXRlIGlneENvbWJvVG9nZ2xlSWNvbiBsZXQtY29sbGFwc2VkPlxuICAgICAqICAgICAgICAgIDxpZ3gtaWNvbj57eyBjb2xsYXBzZWQgPyAncmVtb3ZlX2NpcmNsZScgOiAncmVtb3ZlX2NpcmNsZV9vdXRsaW5lJ319PC9pZ3gtaWNvbj5cbiAgICAgKiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICogIDwvaWd4LWNvbWJvPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4Q29tYm9Ub2dnbGVJY29uRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgdG9nZ2xlSWNvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXN0b20gdGVtcGxhdGUsIGlmIGFueSwgdGhhdCBzaG91bGQgYmUgdXNlZCB3aGVuIHJlbmRlcmluZyB0aGUgY29tYm8gQ0xFQVIgYnV0dG9uXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gU2V0IGluIHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBteUN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbXlDb21wb25lbnQuY3VzdG9tVGVtcGxhdGU7XG4gICAgICogbXlDb21wb25lbnQuY29tYm8uY2xlYXJJY29uVGVtcGxhdGUgPSBteUN1c3RvbVRlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tIFNldCBpbiBtYXJrdXAgLS0+XG4gICAgICogIDxpZ3gtY29tYm8gI2NvbWJvPlxuICAgICAqICAgICAgLi4uXG4gICAgICogICAgICA8bmctdGVtcGxhdGUgaWd4Q29tYm9DbGVhckljb24+XG4gICAgICogICAgICAgICAgPGlneC1pY29uPmNsZWFyPC9pZ3gtaWNvbj5cbiAgICAgKiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICogIDwvaWd4LWNvbWJvPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4Q29tYm9DbGVhckljb25EaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBjbGVhckljb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IG51bGw7XG5cbiAgICBAVmlld0NoaWxkKCdwcmltaXRpdmUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgcHJpbWl0aXZlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdjb21wbGV4JywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGNvbXBsZXhUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQFZpZXdDaGlsZChJZ3hGb3JPZkRpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgdmlydHVhbFNjcm9sbENvbnRhaW5lcjogSWd4Rm9yT2ZEaXJlY3RpdmU8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duSXRlbUNvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGRyb3Bkb3duQ29udGFpbmVyOiBFbGVtZW50UmVmID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgd2hlbiBpdGVtIHNlbGVjdGlvbiBpcyBjaGFuZ2luZywgYmVmb3JlIHRoZSBzZWxlY3Rpb24gY29tcGxldGVzXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb21ibyAob25TZWxlY3Rpb25DaGFuZ2UpPSdoYW5kbGVTZWxlY3Rpb24oKSc+PC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uU2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxJQ29tYm9TZWxlY3Rpb25DaGFuZ2VFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIGJlZm9yZSB0aGUgZHJvcGRvd24gaXMgb3BlbmVkXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb21ibyBvbk9wZW5pbmc9J2hhbmRsZU9wZW5pbmcoJGV2ZW50KSc+PC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uT3BlbmluZyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuY2VsYWJsZUV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgYWZ0ZXIgdGhlIGRyb3Bkb3duIGlzIG9wZW5lZFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY29tYm8gKG9uT3BlbmVkKT0naGFuZGxlT3BlbmVkKCknPjwvaWd4LWNvbWJvPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbk9wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgYmVmb3JlIHRoZSBkcm9wZG93biBpcyBjbG9zZWRcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbWJvIChvbkNsb3NpbmcpPSdoYW5kbGVDbG9zaW5nKCRldmVudCknPjwvaWd4LWNvbWJvPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkNsb3NpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmNlbGFibGVCcm93c2VyRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCBhZnRlciB0aGUgZHJvcGRvd24gaXMgY2xvc2VkXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb21ibyAob25DbG9zZWQpPSdoYW5kbGVDbG9zZWQoKSc+PC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uQ2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCB3aGVuIGFuIGl0ZW0gaXMgYmVpbmcgYWRkZWQgdG8gdGhlIGRhdGEgY29sbGVjdGlvblxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY29tYm8gKG9uQWRkaXRpb24pPSdoYW5kbGVBZGRpdGlvbkV2ZW50KCknPjwvaWd4LWNvbWJvPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkFkZGl0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxJQ29tYm9JdGVtQWRkaXRpb25FdmVudD4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIHNlYXJjaCBpbnB1dCBjaGFuZ2VzIChlLmcuIHR5cGluZywgcGFzdGluZywgY2xlYXIsIGV0Yy4pXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb21ibyAob25TZWFyY2hJbnB1dCk9J2hhbmRsZVNlYXJjaElucHV0RXZlbnQoKSc+PC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uU2VhcmNoSW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIHdoZW4gbmV3IGNodW5rIG9mIGRhdGEgaXMgbG9hZGVkIGZyb20gdGhlIHZpcnR1YWxpemF0aW9uXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb21ibyAob25EYXRhUHJlTG9hZCk9J2hhbmRsZURhdGFQcmVsb2FkRXZlbnQoKSc+PC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uRGF0YVByZUxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIC8qKlxuICAgICAqIEdldHMvZ2V0cyBjb21ibyBpZC5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRcbiAgICAgKiBsZXQgaWQgPSB0aGlzLmNvbWJvLmlkO1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDwhLS1zZXQtLT5cbiAgICAgKiA8aWd4LWNvbWJvIFtpZF09J2NvbWJvMSc+PC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlkID0gYGlneC1jb21iby0ke05FWFRfSUQrK31gO1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgc3R5bGUgd2lkdGggb2YgdGhlIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRcbiAgICAgKiBsZXQgbXlDb21ib1dpZHRoID0gdGhpcy5jb21iby53aWR0aDtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGlneC1jb21ibyBbd2lkdGhdPScyNTBweCc+PC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgd2lkdGg6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtaW5wdXQtZ3JvdXAtLXZhbGlkJylcbiAgICBwdWJsaWMgZ2V0IHZhbGlkQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkID09PSBJZ3hDb21ib1N0YXRlLlZBTElEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtaW5wdXQtZ3JvdXAtLWludmFsaWQnKVxuICAgIHB1YmxpYyBnZXQgaW52YWxpZENsYXNzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZCA9PT0gSWd4Q29tYm9TdGF0ZS5JTlZBTElEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtY29tYm8nKVxuICAgIHB1YmxpYyBjc3NDbGFzcyA9ICdpZ3gtY29tYm8nOyAvLyBJbmRlcGVuZGVudCBvZiBkaXNwbGF5IGRlbnNpdHksIGF0IHRoZSB0aW1lIGJlaW5nXG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZyhgYXR0ci5yb2xlYClcbiAgICBwdWJsaWMgcm9sZSA9ICdjb21ib2JveCc7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWV4cGFuZGVkJylcbiAgICBwdWJsaWMgZ2V0IGFyaWFFeHBhbmRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmRyb3Bkb3duLmNvbGxhcHNlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWhhc3BvcHVwJylcbiAgICBwdWJsaWMgZ2V0IGhhc1BvcFVwKCkge1xuICAgICAgICByZXR1cm4gJ2xpc3Rib3gnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtb3ducycpXG4gICAgcHVibGljIGdldCBhcmlhT3ducygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcGRvd24uaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udHJvbHMgd2hldGhlciBjdXN0b20gdmFsdWVzIGNhbiBiZSBhZGRlZCB0byB0aGUgY29sbGVjdGlvblxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldFxuICAgICAqIGxldCBjb21ib0FsbG93c0N1c3RvbVZhbHVlcyA9IHRoaXMuY29tYm8uYWxsb3dDdXN0b21WYWx1ZXM7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqIDxpZ3gtY29tYm8gW2FsbG93Q3VzdG9tVmFsdWVzXT0ndHJ1ZSc+PC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgYWxsb3dDdXN0b21WYWx1ZXMgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGRyb3AgZG93biBsaXN0IGhlaWdodFxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldFxuICAgICAqIGxldCBteUNvbWJvSXRlbXNNYXhIZWlnaHQgPSB0aGlzLmNvbWJvLml0ZW1zTWF4SGVpZ2h0O1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDwhLS1zZXQtLT5cbiAgICAgKiA8aWd4LWNvbWJvIFtpdGVtc01heEhlaWdodF09JzMyMCc+PC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXRlbXNNYXhIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuX2l0ZW1zTWF4SGVpZ2h0ID09PSBudWxsIHx8IHRoaXMuX2l0ZW1zTWF4SGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1IZWlnaHQgKiBpdGVtc0luQ29udGFpbmVyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc01heEhlaWdodDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGl0ZW1zTWF4SGVpZ2h0KHZhbDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zTWF4SGVpZ2h0ID0gdmFsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGRyb3AgZG93biBsaXN0IHdpZHRoXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IG15Q29tYm9JdGVtc1dpZHRoID0gdGhpcy5jb21iby5pdGVtc1dpZHRoO1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDwhLS1zZXQtLT5cbiAgICAgKiA8aWd4LWNvbWJvIFtpdGVtc1dpZHRoXSA9ICdcIjE4MHB4XCInPjwvaWd4LWNvbWJvPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGl0ZW1zV2lkdGg6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGRyb3AgZG93biBsaXN0IGl0ZW0gaGVpZ2h0XG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IG15Q29tYm9JdGVtSGVpZ2h0ID0gdGhpcy5jb21iby5pdGVtSGVpZ2h0O1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDwhLS1zZXQtLT5cbiAgICAgKiA8aWd4LWNvbWJvIFtpdGVtSGVpZ2h0XT0nMzInPjwvaWd4LWNvbWJvPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpdGVtSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl9pdGVtSGVpZ2h0ID09PSBudWxsIHx8IHRoaXMuX2l0ZW1IZWlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIEl0ZW1IZWlnaHRzW3RoaXMuZGlzcGxheURlbnNpdHldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtSGVpZ2h0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXRlbUhlaWdodCh2YWw6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9pdGVtSGVpZ2h0ID0gdmFsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGZpbHRlcmluZ0xvZ2ljID0gRmlsdGVyaW5nTG9naWMuT3I7XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBwbGFjZWhvbGRlciB2YWx1ZSBmb3IgdGhlIGNvbWJvIHZhbHVlIGZpZWxkXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IG15Q29tYm9QbGFjZWhvbGRlciA9IHRoaXMuY29tYm8ucGxhY2Vob2xkZXI7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqIDxpZ3gtY29tYm8gW3BsYWNlaG9sZGVyXT0nbmV3UGxhY2VIb2xkZXInPjwvaWd4LWNvbWJvPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHBsYWNlaG9sZGVyID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaW5wdXRFbXB0eSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLnZhbHVlICYmICF0aGlzLnBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIHBsYWNlaG9sZGVyIHZhbHVlIGZvciB0aGUgY29tYm8gZHJvcGRvd24gc2VhcmNoIGZpZWxkXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IG15Q29tYm9TZWFyY2hQbGFjZWhvbGRlciA9IHRoaXMuY29tYm8uc2VhcmNoUGxhY2Vob2xkZXI7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqIDxpZ3gtY29tYm8gW3NlYXJjaFBsYWNlaG9sZGVyXT0nbmV3UGxhY2VIb2xkZXInPjwvaWd4LWNvbWJvPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNlYXJjaFBsYWNlaG9sZGVyID0gJ0VudGVyIGEgU2VhcmNoIFRlcm0nO1xuXG4gICAgLyoqXG4gICAgICogQ29tYm8gZGF0YSBzb3VyY2UuXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqIDxpZ3gtY29tYm8gW2RhdGFdPSdpdGVtcyc+PC9pZ3gtY29tYm8+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgZGF0YSgpOiBhbnlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cbiAgICBzZXQgZGF0YSh2YWw6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSAodmFsKSA/IHZhbCA6IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbWJvIHZhbHVlIGRhdGEgc291cmNlIHByb3BlcnkuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IG15Q29tYm9WYWx1ZUtleSA9IHRoaXMuY29tYm8udmFsdWVLZXk7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqIDxpZ3gtY29tYm8gW3ZhbHVlS2V5XT0nbXlLZXknPjwvaWd4LWNvbWJvPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZhbHVlS2V5OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBkaXNwbGF5S2V5KHZhbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXlLZXkgPSB2YWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tYm8gdGV4dCBkYXRhIHNvdXJjZSBwcm9wZXJ5LlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldFxuICAgICAqIGxldCBteUNvbWJvRGlzcGxheUtleSA9IHRoaXMuY29tYm8uZGlzcGxheUtleTtcbiAgICAgKlxuICAgICAqIC8vIHNldFxuICAgICAqIHRoaXMuY29tYm8uZGlzcGxheUtleSA9ICd2YWwnO1xuICAgICAqXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqIDxpZ3gtY29tYm8gW2Rpc3BsYXlLZXldPSdteWRpc3BsYXlLZXknPjwvaWd4LWNvbWJvPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGdldCBkaXNwbGF5S2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzcGxheUtleSA/IHRoaXMuX2Rpc3BsYXlLZXkgOiB0aGlzLnZhbHVlS2V5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBpdGVtIHByb3BlcnR5IGJ5IHdoaWNoIGl0ZW1zIHNob3VsZCBiZSBncm91cGVkIGluc2lkZSB0aGUgaXRlbXMgbGlzdC4gTm90IHVzYWJsZSBpZiBkYXRhIGlzIG5vdCBvZiB0eXBlIE9iamVjdFtdLlxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDwhLS1zZXQtLT5cbiAgICAgKiA8aWd4LWNvbWJvIFtncm91cEtleV09J25ld0dyb3VwS2V5Jz48L2lneC1jb21ibz5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgZ3JvdXBLZXkodmFsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jbGVhclNvcnRpbmcodGhpcy5fZ3JvdXBLZXkpO1xuICAgICAgICB0aGlzLl9ncm91cEtleSA9IHZhbDtcbiAgICAgICAgdGhpcy5zb3J0KHRoaXMuX2dyb3VwS2V5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaXRlbSBwcm9wZXJ0eSBieSB3aGljaCBpdGVtcyBzaG91bGQgYmUgZ3JvdXBlZCBpbnNpZGUgdGhlIGl0ZW1zIGxpc3QuIE5vdCB1c2FibGUgaWYgZGF0YSBpcyBub3Qgb2YgdHlwZSBPYmplY3RbXS5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRcbiAgICAgKiBsZXQgY3VycmVudEdyb3VwS2V5ID0gdGhpcy5jb21iby5ncm91cEtleTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGdyb3VwS2V5KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ncm91cEtleTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBlbmFibGVkL2Rpc2FibGVzIGZpbHRlcmluZyBpbiB0aGUgbGlzdC4gVGhlIGRlZmF1bHQgaXMgYHRydWVgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKjxpZ3gtY29tYm8gW2ZpbHRlcmFibGVdPVwiJ2ZhbHNlJ1wiPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGZpbHRlcmFibGUgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0IGFyaWEtbGFiZWxsZWRieSBhdHRyaWJ1dGVcbiAgICAgKiBgYGBodG1sXG4gICAgICo8aWd4LWNvbWJvIFthcmlhTGFiZWxsZWRCeV09XCInbGFiZWwxJ1wiPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbGFiZWxsZWRieScpXG4gICAgcHVibGljIGFyaWFMYWJlbGxlZEJ5OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBlbmFibGVkL2Rpc2FibGVzIGNvbWJvLiBUaGUgZGVmYXVsdCBpcyBgZmFsc2VgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKjxpZ3gtY29tYm8gW2Rpc2FibGVkXT1cIid0cnVlJ1wiPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIGhvdyB0aGUgY29tYm8gd2lsbCBiZSBzdHlsZWQuXG4gICAgICogVGhlIGFsbG93ZWQgdmFsdWVzIGFyZSBgbGluZWAsIGBib3hgLCBgYm9yZGVyYCBhbmQgYHNlYXJjaGAuIFRoZSBkZWZhdWx0IGlzIGBib3hgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKjxpZ3gtY29tYm8gW3R5cGVdPVwiJ2xpbmUnXCI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHlwZSA9ICdib3gnO1xuXG4gICAgLyoqXG4gICAgICogR2V0cy9TZXRzIGlmIGNvbnRyb2wgaXMgdmFsaWQsIHdoZW4gdXNlZCBpbiBhIGZvcm1cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRcbiAgICAgKiBsZXQgdmFsaWQgPSB0aGlzLmNvbWJvLnZhbGlkO1xuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBzZXRcbiAgICAgKiB0aGlzLmNvbWJvLnZhbGlkID0gSWd4Q29tYm9TdGF0ZS5JTlZBTElEO1xuICAgICAqIGBgYFxuICAgICovXG4gICAgcHVibGljIHZhbGlkOiBJZ3hDb21ib1N0YXRlID0gSWd4Q29tYm9TdGF0ZS5JTklUSUFMO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VhcmNoVmFsdWUgPSAnJztcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5BcnJvd0Rvd24nLCBbJyRldmVudCddKVxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uQWx0LkFycm93RG93bicsIFsnJGV2ZW50J10pXG4gICAgb25BcnJvd0Rvd24oZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIG9uSW5wdXRDbGljayhldmVudDogRXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgdmlydHVhbGl6ZWQgZGF0YS4gSXQgY29udGFpbnMgYHN0YXJ0SW5kZXhgIGFuZCBgY2h1bmtTaXplYFxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldFxuICAgICAqIGxldCBzdGF0ZSA9IHRoaXMuY29tYm8udmlydHVhbGl6YXRpb25TdGF0ZTtcbiAgICAgKiBgYGBcbiAgICAqL1xuICAgIGdldCB2aXJ0dWFsaXphdGlvblN0YXRlKCk6IElGb3JPZlN0YXRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlydERpci5zdGF0ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgdmlydHVhbGl6ZWQgZGF0YS5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBzZXRcbiAgICAgKiB0aGlzLmNvbWJvLnZpcnR1YWxpemF0aW9uU3RhdGUoc3RhdGUpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHNldCB2aXJ0dWFsaXphdGlvblN0YXRlKHN0YXRlOiBJRm9yT2ZTdGF0ZSkge1xuICAgICAgICB0aGlzLnZpcnREaXIuc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRvdGFsIGNvdW50IG9mIHRoZSB2aXJ0dWFsIGRhdGEgaXRlbXMsIHdoZW4gdXNpbmcgcmVtb3RlIHNlcnZpY2UuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IGNvdW50ID0gdGhpcy5jb21iby50b3RhbEl0ZW1Db3VudDtcbiAgICAgKiBgYGBcbiAgICAqL1xuICAgIGdldCB0b3RhbEl0ZW1Db3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy52aXJ0RGlyLnRvdGFsSXRlbUNvdW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRvdGFsIGNvdW50IG9mIHRoZSB2aXJ0dWFsIGRhdGEgaXRlbXMsIHdoZW4gdXNpbmcgcmVtb3RlIHNlcnZpY2UuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gc2V0XG4gICAgICogdGhpcy5jb21iby50b3RhbEl0ZW1Db3VudChyZW1vdGVTZXJ2aWNlLmNvdW50KTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBzZXQgdG90YWxJdGVtQ291bnQoY291bnQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLnZpcnREaXIudG90YWxJdGVtQ291bnQgPSBjb3VudDtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGdldCBmaWx0ZXJpbmdFeHByZXNzaW9ucygpOiBJRmlsdGVyaW5nRXhwcmVzc2lvbltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyYWJsZSA/IHRoaXMuX2ZpbHRlcmluZ0V4cHJlc3Npb25zIDogW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGZpbHRlcmluZ0V4cHJlc3Npb25zKHZhbHVlOiBJRmlsdGVyaW5nRXhwcmVzc2lvbltdKSB7XG4gICAgICAgIHRoaXMuX2ZpbHRlcmluZ0V4cHJlc3Npb25zID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGdldCBzb3J0aW5nRXhwcmVzc2lvbnMoKTogSVNvcnRpbmdFeHByZXNzaW9uW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc29ydGluZ0V4cHJlc3Npb25zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIHNldCBzb3J0aW5nRXhwcmVzc2lvbnModmFsdWU6IElTb3J0aW5nRXhwcmVzc2lvbltdKSB7XG4gICAgICAgIHRoaXMuX3NvcnRpbmdFeHByZXNzaW9ucyA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2xlYXJTb3J0aW5nKGZpZWxkPzogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgICAgIGlmIChmaWVsZCA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNvcnRpbmdFeHByZXNzaW9ucyA9IFtdO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGNsb25lQXJyYXkodGhpcy5zb3J0aW5nRXhwcmVzc2lvbnMpO1xuICAgICAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRTdGF0ZS5maW5kSW5kZXgoKGV4cHIpID0+IGV4cHIuZmllbGROYW1lID09PSBmaWVsZCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBjdXJyZW50U3RhdGUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMuc29ydGluZ0V4cHJlc3Npb25zID0gY3VycmVudFN0YXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHRleHQgZGlzcGxheWVkIGluIHRoZSBjb21ibyBpbnB1dFxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldFxuICAgICAqIGxldCBjb21ib1ZhbHVlID0gdGhpcy5jb21iby52YWx1ZTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGdldCBmaWx0ZXJlZERhdGEoKTogYW55W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJhYmxlID8gdGhpcy5fZmlsdGVyZWREYXRhIDogdGhpcy5kYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIHNldCBmaWx0ZXJlZERhdGEodmFsOiBhbnlbXSkge1xuICAgICAgICB0aGlzLl9maWx0ZXJlZERhdGEgPSB0aGlzLmdyb3VwS2V5ID8gKHZhbCB8fCBbXSkuZmlsdGVyKChlKSA9PiBlLmlzSGVhZGVyICE9PSB0cnVlKSA6IHZhbDtcbiAgICAgICAgdGhpcy5jaGVja01hdGNoKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgaGFuZGxlS2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicgfHwgZXZlbnQua2V5ID09PSAnRG93bicpIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd24uZm9jdXNlZEl0ZW0gPSB0aGlzLmRyb3Bkb3duLml0ZW1zWzBdO1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93bkNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyB8fCBldmVudC5rZXkgPT09ICdFc2MnKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgaGFuZGxlS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dVcCcgfHwgZXZlbnQua2V5ID09PSAnVXAnKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrTWF0Y2goKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlLZXkgPSB0aGlzLmRpc3BsYXlLZXk7XG4gICAgICAgIGNvbnN0IG1hdGNoRm4gPSAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBkaXNwbGF5S2V5ID8gZVtkaXNwbGF5S2V5XSA6IGU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpID09PSB0aGlzLnNlYXJjaFZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBpdGVtTWF0Y2ggPSB0aGlzLmZpbHRlcmVkRGF0YS5zb21lKG1hdGNoRm4pO1xuICAgICAgICB0aGlzLmN1c3RvbVZhbHVlRmxhZyA9IHRoaXMuYWxsb3dDdXN0b21WYWx1ZXMgJiYgIWl0ZW1NYXRjaDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBoYW5kbGVJbnB1dENoYW5nZShldmVudD86IHN0cmluZykge1xuICAgICAgICBsZXQgY2RyRmxhZyA9IGZhbHNlO1xuICAgICAgICBjb25zdCB2Q29udGFpbmVyID0gdGhpcy52aXJ0RGlyO1xuICAgICAgICBpZiAoZXZlbnQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLl9wcmV2SW5wdXRWYWx1ZSA9PT0gZXZlbnQpIHtcbiAgICAgICAgICAgIC8vIE5vdGhpbmcgaGFzIGNoYW5nZWRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZJbnB1dFZhbHVlID0gZXZlbnQgIT09IHVuZGVmaW5lZCA/IGV2ZW50IDogJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIERvIG5vdCBzY3JvbGwgaWYgbm90IHNjcm9sbGFibGVcbiAgICAgICAgICAgIGlmICh2Q29udGFpbmVyLmlzU2Nyb2xsYWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgdkNvbnRhaW5lci5zY3JvbGxUbygwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2RyRmxhZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9uU2VhcmNoSW5wdXQuZW1pdChldmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjZHJGbGFnID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5maWx0ZXJhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcigpO1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUgd2FzIG5vIHNjcm9sbCBiZWZvcmUgZmlsdGVyaW5nLCBjaGVjayBpZiB0aGVyZSBpcyBhZnRlciBhbmQgZGV0ZWN0IGNoYW5nZXNcbiAgICAgICAgICAgIGlmIChjZHJGbGFnKSB7XG4gICAgICAgICAgICAgICAgdkNvbnRhaW5lci5vbkNodW5rTG9hZC5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2Q29udGFpbmVyLmlzU2Nyb2xsYWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tNYXRjaCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgc29ydChmaWVsZE5hbWU6IHN0cmluZywgZGlyOiBTb3J0aW5nRGlyZWN0aW9uID0gU29ydGluZ0RpcmVjdGlvbi5Bc2MsIGlnbm9yZUNhc2U6IGJvb2xlYW4gPSB0cnVlLFxuICAgICAgICBzdHJhdGVneTogSVNvcnRpbmdTdHJhdGVneSA9IERlZmF1bHRTb3J0aW5nU3RyYXRlZ3kuaW5zdGFuY2UoKSk6IHZvaWQge1xuICAgICAgICBpZiAoIWZpZWxkTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNvcnRpbmdTdGF0ZSA9IGNsb25lQXJyYXkodGhpcy5zb3J0aW5nRXhwcmVzc2lvbnMsIHRydWUpO1xuXG4gICAgICAgIHRoaXMucHJlcGFyZV9zb3J0aW5nX2V4cHJlc3Npb24oc29ydGluZ1N0YXRlLCBmaWVsZE5hbWUsIGRpciwgaWdub3JlQ2FzZSwgc3RyYXRlZ3kpO1xuICAgICAgICB0aGlzLnNvcnRpbmdFeHByZXNzaW9ucyA9IHNvcnRpbmdTdGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRWYWx1ZUJ5VmFsdWVLZXkodmFsOiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAoIXZhbCAmJiB2YWwgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVLZXkgP1xuICAgICAgICAgICAgdGhpcy5kYXRhLmZpbHRlcigoZSkgPT4gZVt0aGlzLnZhbHVlS2V5XSA9PT0gdmFsKVswXSA6XG4gICAgICAgICAgICB0aGlzLmRhdGEuZmlsdGVyKChlKSA9PiBlID09PSB2YWwpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBwcmVwYXJlX3NvcnRpbmdfZXhwcmVzc2lvbihzdGF0ZTogSVNvcnRpbmdFeHByZXNzaW9uW10sIGZpZWxkTmFtZTogc3RyaW5nLCBkaXI6IFNvcnRpbmdEaXJlY3Rpb24sIGlnbm9yZUNhc2U6IGJvb2xlYW4sXG4gICAgICAgIHN0cmF0ZWd5OiBJU29ydGluZ1N0cmF0ZWd5KSB7XG5cbiAgICAgICAgaWYgKGRpciA9PT0gU29ydGluZ0RpcmVjdGlvbi5Ob25lKSB7XG4gICAgICAgICAgICBzdGF0ZS5zcGxpY2Uoc3RhdGUuZmluZEluZGV4KChleHByKSA9PiBleHByLmZpZWxkTmFtZSA9PT0gZmllbGROYW1lKSwgMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleHByZXNzaW9uID0gc3RhdGUuZmluZCgoZXhwcikgPT4gZXhwci5maWVsZE5hbWUgPT09IGZpZWxkTmFtZSk7XG5cbiAgICAgICAgaWYgKCFleHByZXNzaW9uKSB7XG4gICAgICAgICAgICBzdGF0ZS5wdXNoKHsgZmllbGROYW1lLCBkaXIsIGlnbm9yZUNhc2UsIHN0cmF0ZWd5IH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihleHByZXNzaW9uLCB7IGZpZWxkTmFtZSwgZGlyLCBpZ25vcmVDYXNlIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGRhdGFUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gRGF0YVR5cGVzLkNPTVBMRVg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIERhdGFUeXBlcy5QUklNSVRJVkU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGlzUmVtb3RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b3RhbEl0ZW1Db3VudCA+IDAgJiZcbiAgICAgICAgICAgIHRoaXMudmFsdWVLZXkgJiZcbiAgICAgICAgICAgIHRoaXMuZGF0YVR5cGUgPT09IERhdGFUeXBlcy5DT01QTEVYO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBkYXRhIHNvdXJjZSBpcyByZW1vdGUsIHJldHVybnMgSlNPTi5zdHJpbmdpZnkoaXRlbUlEKVxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwcml2YXRlIF9zdHJpbmdpZnlJdGVtSUQoaXRlbUlEOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNSZW1vdGUgJiYgdHlwZW9mIGl0ZW1JRCA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShpdGVtSUQpIDogaXRlbUlEO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3BhcnNlSXRlbUlEKGl0ZW1JRCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1JlbW90ZSAmJiB0eXBlb2YgaXRlbUlEID09PSAnc3RyaW5nJyA/IEpTT04ucGFyc2UoaXRlbUlEKSA6IGl0ZW1JRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGlmIHRoZSBzcGVjaWZpZWQgaXRlbUlEIGlzIHNlbGVjdGVkXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBpc0l0ZW1TZWxlY3RlZChpdGVtOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uLmlzX2l0ZW1fc2VsZWN0ZWQodGhpcy5pZCwgdGhpcy5fc3RyaW5naWZ5SXRlbUlEKGl0ZW0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyBjaGFuZ2UgZGV0ZWN0aW9uIG9uIHRoZSBjb21ibyB2aWV3XG4gICAgICovXG4gICAgcHVibGljIHRyaWdnZXJDaGVjaygpIHtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGlzQWRkQnV0dG9uVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICAgICAgLy8gVGhpcyBzaG91bGQgYWx3YXlzIHJldHVybiBhIGJvb2xlYW4gdmFsdWUuIElmIHRoaXMuc2VhcmNoVmFsdWUgd2FzICcnLCBpdCByZXR1cm5zICcnIGluc3RlYWQgb2YgZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFZhbHVlICE9PSAnJyAmJiB0aGlzLmN1c3RvbVZhbHVlRmxhZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBoYW5kbGVTZWxlY3RBbGwoZXZ0KSB7XG4gICAgICAgIGlmIChldnQuY2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGxJdGVtcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXNlbGVjdEFsbEl0ZW1zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRJdGVtVG9Db2xsZWN0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2VhcmNoVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuc2VhcmNoVmFsdWUudHJpbSgpO1xuICAgICAgICBjb25zdCBhZGRlZEl0ZW0gPSB0aGlzLmRpc3BsYXlLZXkgPyB7XG4gICAgICAgICAgICBbdGhpcy52YWx1ZUtleV06IG5ld1ZhbHVlLFxuICAgICAgICAgICAgW3RoaXMuZGlzcGxheUtleV06IG5ld1ZhbHVlXG4gICAgICAgIH0gOiBuZXdWYWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuZ3JvdXBLZXkpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oYWRkZWRJdGVtLCB7IFt0aGlzLmdyb3VwS2V5XTogdGhpcy5kZWZhdWx0RmFsbGJhY2tHcm91cCB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvbGRDb2xsZWN0aW9uID0gdGhpcy5kYXRhO1xuICAgICAgICBjb25zdCBuZXdDb2xsZWN0aW9uID0gWy4uLnRoaXMuZGF0YV07XG4gICAgICAgIG5ld0NvbGxlY3Rpb24ucHVzaChhZGRlZEl0ZW0pO1xuICAgICAgICBjb25zdCBhcmdzOiBJQ29tYm9JdGVtQWRkaXRpb25FdmVudCA9IHtcbiAgICAgICAgICAgIG9sZENvbGxlY3Rpb24sIGFkZGVkSXRlbSwgbmV3Q29sbGVjdGlvblxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uQWRkaXRpb24uZW1pdChhcmdzKTtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goYWRkZWRJdGVtKTtcbiAgICAgICAgLy8gSWYgeW91IG11dGF0ZSB0aGUgYXJyYXksIG5vIHBpcGUgaXMgaW52b2tlZCBhbmQgdGhlIGRpc3BsYXkgaXNuJ3QgdXBkYXRlZDtcbiAgICAgICAgLy8gaWYgeW91IHJlcGxhY2UgdGhlIGFycmF5LCB0aGUgcGlwZSBleGVjdXRlcyBhbmQgdGhlIGRpc3BsYXkgaXMgdXBkYXRlZC5cbiAgICAgICAgdGhpcy5kYXRhID0gY2xvbmVBcnJheSh0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLnNlbGVjdEl0ZW1zKFthZGRlZEl0ZW1dLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3VzdG9tVmFsdWVGbGFnID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VhcmNoSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duLmZvY3VzZWRJdGVtID0gbnVsbDtcbiAgICAgICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGZvY3VzU2VhcmNoSW5wdXQob3BlbmluZz86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzcGxheVNlYXJjaElucHV0ICYmIHRoaXMuc2VhcmNoSW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG9wZW5pbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21ib0lucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgcHJlcGFyZV9maWx0ZXJpbmdfZXhwcmVzc2lvbihzZWFyY2hWYWwsIGNvbmRpdGlvbiwgaWdub3JlQ2FzZSwgZmllbGROYW1lPykge1xuICAgICAgICBjb25zdCBuZXdBcnJheSA9IFsuLi50aGlzLmZpbHRlcmluZ0V4cHJlc3Npb25zXTtcbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IG5ld0FycmF5LmZpbmQoKGV4cHIpID0+IGV4cHIuZmllbGROYW1lID09PSBmaWVsZE5hbWUpO1xuICAgICAgICBjb25zdCBuZXdFeHByZXNzaW9uID0geyBmaWVsZE5hbWUsIHNlYXJjaFZhbCwgY29uZGl0aW9uLCBpZ25vcmVDYXNlIH07XG4gICAgICAgIGlmICghZXhwcmVzc2lvbikge1xuICAgICAgICAgICAgbmV3QXJyYXkucHVzaChuZXdFeHByZXNzaW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZXhwcmVzc2lvbiwgbmV3RXhwcmVzc2lvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ3JvdXBLZXkpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb24yID0gbmV3QXJyYXkuZmluZCgoZXhwcikgPT4gZXhwci5maWVsZE5hbWUgPT09ICdpc0hlYWRlcicpO1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyRXhwcmVzc2lvbiA9IHtcbiAgICAgICAgICAgICAgICBmaWVsZE5hbWU6ICdpc0hlYWRlcicsIHNlYXJjaFZhbGU6ICcnLFxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogSWd4Qm9vbGVhbkZpbHRlcmluZ09wZXJhbmQuaW5zdGFuY2UoKS5jb25kaXRpb24oJ3RydWUnKSwgaWdub3JlQ2FzZTogdHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghZXhwcmVzc2lvbjIpIHtcbiAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKGhlYWRlckV4cHJlc3Npb24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGV4cHJlc3Npb24yLCBoZWFkZXJFeHByZXNzaW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbHRlcmluZ0V4cHJlc3Npb25zID0gbmV3QXJyYXk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uU3RhdHVzQ2hhbmdlZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCh0aGlzLm5nQ29udHJvbC5jb250cm9sLnRvdWNoZWQgfHwgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5kaXJ0eSkgJiZcbiAgICAgICAgICAgICh0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbGlkYXRvciB8fCB0aGlzLm5nQ29udHJvbC5jb250cm9sLmFzeW5jVmFsaWRhdG9yKSkge1xuICAgICAgICAgICAgdGhpcy52YWxpZCA9IHRoaXMubmdDb250cm9sLnZhbGlkID8gSWd4Q29tYm9TdGF0ZS5WQUxJRCA6IElneENvbWJvU3RhdGUuSU5WQUxJRDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIG9uQmx1cigpIHtcbiAgICAgICAgaWYgKHRoaXMuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5uZ0NvbnRyb2wgJiYgIXRoaXMubmdDb250cm9sLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZCA9IElneENvbWJvU3RhdGUuSU5WQUxJRDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZCA9IElneENvbWJvU3RhdGUuSU5JVElBTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGZpbHRlcigpIHtcbiAgICAgICAgdGhpcy5wcmVwYXJlX2ZpbHRlcmluZ19leHByZXNzaW9uKHRoaXMuc2VhcmNoVmFsdWUudHJpbSgpLCBJZ3hTdHJpbmdGaWx0ZXJpbmdPcGVyYW5kLmluc3RhbmNlKCkuY29uZGl0aW9uKCdjb250YWlucycpLFxuICAgICAgICAgICAgdHJ1ZSwgdGhpcy5kYXRhVHlwZSA9PT0gRGF0YVR5cGVzLlBSSU1JVElWRSA/IHVuZGVmaW5lZCA6IHRoaXMuZGlzcGxheUtleSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubmdDb250cm9sID0gdGhpcy5pbmplY3Rvci5nZXQoTmdDb250cm9sLCBudWxsKTtcbiAgICAgICAgdGhpcy5fb3ZlcmxheVNldHRpbmdzLnBvc2l0aW9uU3RyYXRlZ3kuc2V0dGluZ3MudGFyZ2V0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLnNldCh0aGlzLmlkLCBuZXcgU2V0KCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJlZERhdGEgPSBbLi4udGhpcy5kYXRhXTtcblxuICAgICAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcbiAgICAgICAgICAgIHRoaXMubmdDb250cm9sLnN0YXR1c0NoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSh0aGlzLm9uU3RhdHVzQ2hhbmdlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICAgICAgdGhpcy5jb21ib0FQSS5jbGVhcigpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcih0aGlzLmlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBkYXRhTG9hZGluZyhldmVudCkge1xuICAgICAgICB0aGlzLm9uRGF0YVByZUxvYWQuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIC8vIHNlbGVjdEl0ZW1zIGNhbiBoYW5kbGUgQXJyYXk8YW55Piwgbm8gdmFsdWVLZXkgaXMgbmVlZGVkO1xuICAgICAgICB0aGlzLnNlbGVjdEl0ZW1zKHZhbHVlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7IH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldEVkaXRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tYm9JbnB1dC5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGdldCB0ZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICAgICAgdGhpcy5fZGF0YVR5cGUgPSB0aGlzLmRhdGFUeXBlO1xuICAgICAgICBpZiAodGhpcy5pdGVtVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1UZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZGF0YVR5cGUgPT09IERhdGFUeXBlcy5DT01QTEVYKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wbGV4VGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJpbWl0aXZlVGVtcGxhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGNvbnRleHQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICRpbXBsaWNpdDogdGhpc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGhhbmRsZUNsZWFySXRlbXMoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVzZWxlY3RBbGxJdGVtcyh0cnVlLCBldmVudCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgbWV0aG9kIHRoYXQgb3BlbnMvY2xvc2VzIHRoZSBjb21iby5cbiAgICAgKlxuICAgICAqYGBgaHRtbFxuICAgICAqPGJ1dHRvbiAoY2xpY2spPVwiY29tYm8udG9nZ2xlKClcIj5Ub2dnbGUgQ29tYm88L2J1dHRvbj5cbiAgICAgKjxpZ3gtY29tYm8gI2NvbWJvPjwvaWd4LWNvbWJvPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgcHVibGljIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgb3ZlcmxheVNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fb3ZlcmxheVNldHRpbmdzLCB0aGlzLm92ZXJsYXlTZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuZHJvcGRvd24udG9nZ2xlKG92ZXJsYXlTZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBtZXRob2QgdGhhdCBvcGVucyB0aGUgY29tYm8uXG4gICAgICpcbiAgICAgKmBgYGh0bWxcbiAgICAgKjxidXR0b24gKGNsaWNrKT1cImNvbWJvLm9wZW4oKVwiPk9wZW4gQ29tYm88L2J1dHRvbj5cbiAgICAgKjxpZ3gtY29tYm8gI2NvbWJvPjwvaWd4LWNvbWJvPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgcHVibGljIG9wZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG92ZXJsYXlTZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX292ZXJsYXlTZXR0aW5ncywgdGhpcy5vdmVybGF5U2V0dGluZ3MpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duLm9wZW4ob3ZlcmxheVNldHRpbmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIG1ldGhvZCB0aGF0IGNsb3NlcyB0aGUgY29tYm8uXG4gICAgICpcbiAgICAgKmBgYGh0bWxcbiAgICAgKjxidXR0b24gKGNsaWNrKT1cImNvbWJvLmNsb3NlKClcIj5DbG9zZSBDb21ibzwvYnV0dG9uPlxuICAgICAqPGlneC1jb21ibyAjY29tYm8+PC9pZ3gtY29tYm8+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJvcGRvd24uY2xvc2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGRyb3AgZG93biBzdGF0ZS5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgc3RhdGUgPSB0aGlzLmNvbWJvLmNvbGxhcHNlZDtcbiAgICAgKiBgYGBcbiAgICAqL1xuICAgIHB1YmxpYyBnZXQgY29sbGFwc2VkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5jb2xsYXBzZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGN1cnJlbnQgc2VsZWN0aW9uIHN0YXRlXG4gICAgICogQHJldHVybnMgQXJyYXkgb2Ygc2VsZWN0ZWQgaXRlbXNcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHNlbGVjdGVkSXRlbXMgPSB0aGlzLmNvbWJvLnNlbGVjdGVkSXRlbXMoKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0ZWRJdGVtcygpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKHRoaXMuc2VsZWN0aW9uLmdldCh0aGlzLmlkKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmlzUmVtb3RlID8gaXRlbXMubWFwKGl0ZW0gPT4gdGhpcy5fcGFyc2VJdGVtSUQoaXRlbSkpIDogaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGRlZmluZWQgaXRlbXNcbiAgICAgKiBAcGFyYW0gbmV3SXRlbXMgbmV3IGl0ZW1zIHRvIGJlIHNlbGVjdGVkXG4gICAgICogQHBhcmFtIGNsZWFyQ3VycmVudFNlbGVjdGlvbiBpZiB0cnVlIGNsZWFyIHByZXZpb3VzIHNlbGVjdGVkIGl0ZW1zXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuY29tYm8uc2VsZWN0SXRlbXMoW1wiTmV3IFlvcmtcIiwgXCJOZXcgSmVyc2V5XCJdKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0SXRlbXMobmV3SXRlbXM6IEFycmF5PGFueT4sIGNsZWFyQ3VycmVudFNlbGVjdGlvbj86IGJvb2xlYW4sIGV2ZW50PzogRXZlbnQpIHtcbiAgICAgICAgaWYgKG5ld0l0ZW1zKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5hZGRfaXRlbXModGhpcy5pZCwgbmV3SXRlbXMsIGNsZWFyQ3VycmVudFNlbGVjdGlvbik7XG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24sIGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2VsZWN0IGRlZmluZWQgaXRlbXNcbiAgICAgKiBAcGFyYW0gaXRlbXMgaXRlbXMgdG8gZGVzZWxlY3RlZFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmNvbWJvLmRlc2VsZWN0SXRlbXMoW1wiTmV3IFlvcmtcIiwgXCJOZXcgSmVyc2V5XCJdKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzZWxlY3RJdGVtcyhpdGVtczogQXJyYXk8YW55PiwgZXZlbnQ/OiBFdmVudCkge1xuICAgICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLmRlbGV0ZV9pdGVtcyh0aGlzLmlkLCBpdGVtcyk7XG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24sIGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBhbGwgKGZpbHRlcmVkKSBpdGVtc1xuICAgICAqIEBwYXJhbSBpZ25vcmVGaWx0ZXIgaWYgc2V0IHRvIHRydWUsIHNlbGVjdHMgYWxsIGl0ZW1zLCBvdGhlcndpc2Ugc2VsZWN0cyBvbmx5IHRoZSBmaWx0ZXJlZCBvbmVzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmNvbWJvLnNlbGVjdEFsbEl0ZW1zKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdEFsbEl0ZW1zKGlnbm9yZUZpbHRlcj86IGJvb2xlYW4sIGV2ZW50PzogRXZlbnQpIHtcbiAgICAgICAgY29uc3QgYWxsVmlzaWJsZSA9IHRoaXMuc2VsZWN0aW9uLmdldF9hbGxfaWRzKGlnbm9yZUZpbHRlciA/IHRoaXMuZGF0YSA6IHRoaXMuZmlsdGVyZWREYXRhKTtcbiAgICAgICAgY29uc3QgbmV3U2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24uYWRkX2l0ZW1zKHRoaXMuaWQsIGFsbFZpc2libGUpO1xuICAgICAgICB0aGlzLnNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24sIGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXNlbGVjdCBhbGwgKGZpbHRlcmVkKSBpdGVtc1xuICAgICAqIEBwYXJhbSBpZ25vcmVGaWx0ZXIgaWYgc2V0IHRvIHRydWUsIGRlc2VsZWN0cyBhbGwgaXRlbXMsIG90aGVyd2lzZSBkZXNlbGVjdHMgb25seSB0aGUgZmlsdGVyZWQgb25lcy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jb21iby5kZXNlbGVjdEFsbEl0ZW1zKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGRlc2VsZWN0QWxsSXRlbXMoaWdub3JlRmlsdGVyPzogYm9vbGVhbiwgZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBsZXQgbmV3U2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24uZ2V0X2VtcHR5KCk7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlcmVkRGF0YS5sZW5ndGggIT09IHRoaXMuZGF0YS5sZW5ndGggJiYgIWlnbm9yZUZpbHRlcikge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24uZGVsZXRlX2l0ZW1zKHRoaXMuaWQsIHRoaXMuc2VsZWN0aW9uLmdldF9hbGxfaWRzKHRoaXMuZmlsdGVyZWREYXRhKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb24obmV3U2VsZWN0aW9uLCBldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0cy9EZXNlbGVjdHMgYW4gaXRlbSB1c2luZyBpdCdzIHZhbHVlS2V5IHZhbHVlXG4gICAgICogQHBhcmFtIGl0ZW1JRCB0aGUgdmFsdWVLZXkgb2YgdGhlIHNwZWNpZmllZCBpdGVtXG4gICAgICogQHBhcmFtIHNlbGVjdCBJZiB0aGUgaXRlbSBzaG91bGQgYmUgc2VsZWN0ZWQgKHRydWUpIG9yIGRlc2VsY3RlZCAoZmFsc2UpXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogaXRlbXM6IHsgZmllbGQ6IHN0cmluZywgcmVnaW9uOiBzdHJpbmd9W10gPSBkYXRhO1xuICAgICAqIHRoaXMuY29tYm8uc2V0U2VsZWN0ZWRJdGVtKCdDb25uZWN0aWN1dCcsIHRydWUpO1xuICAgICAqIC8vIGNvbWJvLnZhbHVlS2V5ID09PSAnZmllbGQnXG4gICAgICogLy8gaXRlbXNbbl0gPT09IHsgZmllbGQ6ICdDb25uZWN0aWN1dCcsIHN0YXRlOiAnTmV3IEVuZ2xhbmQnfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRTZWxlY3RlZEl0ZW0oaXRlbUlEOiBhbnksIHNlbGVjdCA9IHRydWUsIGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGl0ZW1JRCA9PT0gbnVsbCB8fCBpdGVtSUQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IHRoaXMuZ2V0VmFsdWVCeVZhbHVlS2V5KGl0ZW1JRCk7XG4gICAgICAgIGlmIChpdGVtVmFsdWUgIT09IG51bGwgJiYgaXRlbVZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1zKFtpdGVtVmFsdWVdLCBmYWxzZSwgZXZlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2VsZWN0SXRlbXMoW2l0ZW1WYWx1ZV0sIGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRTZWxlY3Rpb24obmV3U2VsZWN0aW9uOiBTZXQ8YW55PiwgZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBvbGRTZWxlY3Rpb25FbWl0ID0gQXJyYXkuZnJvbSh0aGlzLnNlbGVjdGlvbi5nZXQodGhpcy5pZCkgfHwgW10pO1xuICAgICAgICBjb25zdCBuZXdTZWxlY3Rpb25FbWl0ID0gQXJyYXkuZnJvbShuZXdTZWxlY3Rpb24gfHwgW10pO1xuICAgICAgICBjb25zdCBhcmdzOiBJQ29tYm9TZWxlY3Rpb25DaGFuZ2VFdmVudEFyZ3MgPSB7XG4gICAgICAgICAgICBuZXdTZWxlY3Rpb246IG5ld1NlbGVjdGlvbkVtaXQsXG4gICAgICAgICAgICBvbGRTZWxlY3Rpb246IG9sZFNlbGVjdGlvbkVtaXQsXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIGNhbmNlbDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vblNlbGVjdGlvbkNoYW5nZS5lbWl0KGFyZ3MpO1xuICAgICAgICBpZiAoIWFyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5zZWxlY3RfaXRlbXModGhpcy5pZCwgYXJncy5uZXdTZWxlY3Rpb24sIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLmRhdGFUeXBlICE9PSBEYXRhVHlwZXMuUFJJTUlUSVZFID9cbiAgICAgICAgICAgICAgICBhcmdzLm5ld1NlbGVjdGlvbi5tYXAoKGlkKSA9PiB0aGlzLl9wYXJzZUl0ZW1JRChpZClbdGhpcy5kaXNwbGF5S2V5XSkuam9pbignLCAnKSA6XG4gICAgICAgICAgICAgICAgYXJncy5uZXdTZWxlY3Rpb24uam9pbignLCAnKTtcbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soYXJncy5uZXdTZWxlY3Rpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXJzXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBoYW5kbGVPcGVuaW5nKGV2ZW50OiBDYW5jZWxhYmxlRXZlbnRBcmdzKSB7XG4gICAgICAgIHRoaXMub25PcGVuaW5nLmVtaXQoZXZlbnQpO1xuICAgICAgICBpZiAoZXZlbnQuY2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGhhbmRsZU9wZW5lZCgpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyQ2hlY2soKTtcbiAgICAgICAgdGhpcy5mb2N1c1NlYXJjaElucHV0KHRydWUpO1xuICAgICAgICB0aGlzLm9uT3BlbmVkLmVtaXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBoYW5kbGVDbG9zaW5nKGV2ZW50KSB7XG4gICAgICAgIHRoaXMub25DbG9zaW5nLmVtaXQoZXZlbnQpO1xuICAgICAgICBpZiAoZXZlbnQuY2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLmNvbWJvSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGhhbmRsZUNsb3NlZCgpIHtcbiAgICAgICAgdGhpcy5vbkNsb3NlZC5lbWl0KCk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtJZ3hDb21ib0NvbXBvbmVudCwgSWd4Q29tYm9JdGVtQ29tcG9uZW50LCBJZ3hDb21ib0ZpbHRlckNvbmRpdGlvblBpcGUsIElneENvbWJvR3JvdXBpbmdQaXBlLFxuICAgICAgICBJZ3hDb21ib0ZpbHRlcmluZ1BpcGUsIElneENvbWJvU29ydGluZ1BpcGUsIElneENvbWJvRHJvcERvd25Db21wb25lbnQsIElneENvbWJvQWRkSXRlbUNvbXBvbmVudCxcbiAgICAgICAgSWd4Q29tYm9JdGVtRGlyZWN0aXZlLFxuICAgICAgICBJZ3hDb21ib0VtcHR5RGlyZWN0aXZlLFxuICAgICAgICBJZ3hDb21ib0hlYWRlckl0ZW1EaXJlY3RpdmUsXG4gICAgICAgIElneENvbWJvSGVhZGVyRGlyZWN0aXZlLFxuICAgICAgICBJZ3hDb21ib0Zvb3RlckRpcmVjdGl2ZSxcbiAgICAgICAgSWd4Q29tYm9BZGRJdGVtRGlyZWN0aXZlLFxuICAgICAgICBJZ3hDb21ib1RvZ2dsZUljb25EaXJlY3RpdmUsXG4gICAgICAgIElneENvbWJvQ2xlYXJJY29uRGlyZWN0aXZlXSxcbiAgICBleHBvcnRzOiBbSWd4Q29tYm9Db21wb25lbnQsIElneENvbWJvSXRlbUNvbXBvbmVudCwgSWd4Q29tYm9Ecm9wRG93bkNvbXBvbmVudCwgSWd4Q29tYm9BZGRJdGVtQ29tcG9uZW50LFxuICAgICAgICBJZ3hDb21ib0l0ZW1EaXJlY3RpdmUsXG4gICAgICAgIElneENvbWJvRW1wdHlEaXJlY3RpdmUsXG4gICAgICAgIElneENvbWJvSGVhZGVySXRlbURpcmVjdGl2ZSxcbiAgICAgICAgSWd4Q29tYm9IZWFkZXJEaXJlY3RpdmUsXG4gICAgICAgIElneENvbWJvRm9vdGVyRGlyZWN0aXZlLFxuICAgICAgICBJZ3hDb21ib0FkZEl0ZW1EaXJlY3RpdmUsXG4gICAgICAgIElneENvbWJvVG9nZ2xlSWNvbkRpcmVjdGl2ZSxcbiAgICAgICAgSWd4Q29tYm9DbGVhckljb25EaXJlY3RpdmVdLFxuICAgIGltcG9ydHM6IFtJZ3hSaXBwbGVNb2R1bGUsIENvbW1vbk1vZHVsZSwgSWd4SW5wdXRHcm91cE1vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIElneEZvck9mTW9kdWxlLCBJZ3hUb2dnbGVNb2R1bGUsIElneENoZWNrYm94TW9kdWxlLCBJZ3hEcm9wRG93bk1vZHVsZSwgSWd4QnV0dG9uTW9kdWxlLCBJZ3hJY29uTW9kdWxlXSxcbiAgICBwcm92aWRlcnM6IFtJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hDb21ib01vZHVsZSB7IH1cbiJdfQ==