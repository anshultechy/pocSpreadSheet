import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnInit, OnDestroy, TemplateRef, Injector } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { IgxSelectionAPIService } from '../core/selection';
import { CancelableEventArgs, CancelableBrowserEventArgs } from '../core/utils';
import { IgxStringFilteringOperand, IgxBooleanFilteringOperand } from '../data-operations/filtering-condition';
import { FilteringLogic, IFilteringExpression } from '../data-operations/filtering-expression.interface';
import { SortingDirection, ISortingExpression } from '../data-operations/sorting-expression.interface';
import { IForOfState, IgxForOfDirective } from '../directives/for-of/for_of.directive';
import { IgxComboDropDownComponent } from './combo-dropdown.component';
import { OverlaySettings } from '../services';
import { ISortingStrategy } from '../data-operations/sorting-strategy';
import { DisplayDensityBase, IDisplayDensityOptions } from '../core/density';
import { IgxComboBase } from './combo.common';
import { IgxComboAPIService } from './combo.api';
import { EditorProvider } from '../core/edit-provider';
export declare enum IgxComboState {
    /**
     * Combo with initial state.
     */
    INITIAL = 0,
    /**
     * Combo with valid state.
     */
    VALID = 1,
    /**
     * Combo with invalid state.
     */
    INVALID = 2
}
export interface IComboSelectionChangeEventArgs extends CancelableEventArgs {
    oldSelection: any[];
    newSelection: any[];
    event?: Event;
}
export interface IComboItemAdditionEvent {
    oldCollection: any[];
    addedItem: any;
    newCollection: any[];
}
export declare class IgxComboComponent extends DisplayDensityBase implements IgxComboBase, AfterViewInit, ControlValueAccessor, OnInit, OnDestroy, EditorProvider {
    protected elementRef: ElementRef;
    protected cdr: ChangeDetectorRef;
    protected selection: IgxSelectionAPIService;
    protected comboAPI: IgxComboAPIService;
    protected _displayDensityOptions: IDisplayDensityOptions;
    private injector;
    /**
     * @hidden @internal
     */
    customValueFlag: boolean;
    /**
     * @hidden @internal
     */
    defaultFallbackGroup: string;
    protected stringFilters: typeof IgxStringFilteringOperand;
    protected booleanFilters: typeof IgxBooleanFilteringOperand;
    protected _filteringLogic: FilteringLogic;
    protected _filteringExpressions: IFilteringExpression[];
    protected _sortingExpressions: ISortingExpression[];
    protected _groupKey: string;
    protected _displayKey: string;
    protected _prevInputValue: string;
    private _dataType;
    private ngControl;
    private destroy$;
    private _data;
    private _filteredData;
    private _itemHeight;
    private _itemsMaxHeight;
    private _onChangeCallback;
    private _overlaySettings;
    private _value;
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef, selection: IgxSelectionAPIService, comboAPI: IgxComboAPIService, _displayDensityOptions: IDisplayDensityOptions, injector: Injector);
    protected virtDir: IgxForOfDirective<any>;
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
    overlaySettings: OverlaySettings;
    /**
     * @hidden @internal
     */
    dropdown: IgxComboDropDownComponent;
    /**
     * @hidden @internal
     */
    searchInput: ElementRef<HTMLInputElement>;
    /**
     * @hidden @internal
     */
    comboInput: ElementRef<HTMLInputElement>;
    /**
     * @hidden @internal
     */
    readonly displaySearchInput: boolean;
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
    itemTemplate: TemplateRef<any>;
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
    headerTemplate: TemplateRef<any>;
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
    footerTemplate: TemplateRef<any>;
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
    headerItemTemplate: TemplateRef<any>;
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
    addItemTemplate: TemplateRef<any>;
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
    emptyTemplate: TemplateRef<any>;
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
    toggleIconTemplate: TemplateRef<any>;
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
    clearIconTemplate: TemplateRef<any>;
    protected primitiveTemplate: TemplateRef<any>;
    protected complexTemplate: TemplateRef<any>;
    /**
     * @hidden @internal
     */
    virtualScrollContainer: IgxForOfDirective<any>;
    protected dropdownContainer: ElementRef;
    /**
     * Emitted when item selection is changing, before the selection completes
     *
     * ```html
     * <igx-combo (onSelectionChange)='handleSelection()'></igx-combo>
     * ```
     */
    onSelectionChange: EventEmitter<IComboSelectionChangeEventArgs>;
    /**
     * Emitted before the dropdown is opened
     *
     * ```html
     * <igx-combo onOpening='handleOpening($event)'></igx-combo>
     * ```
     */
    onOpening: EventEmitter<CancelableEventArgs>;
    /**
     * Emitted after the dropdown is opened
     *
     * ```html
     * <igx-combo (onOpened)='handleOpened()'></igx-combo>
     * ```
     */
    onOpened: EventEmitter<void>;
    /**
     * Emitted before the dropdown is closed
     *
     * ```html
     * <igx-combo (onClosing)='handleClosing($event)'></igx-combo>
     * ```
     */
    onClosing: EventEmitter<CancelableBrowserEventArgs>;
    /**
     * Emitted after the dropdown is closed
     *
     * ```html
     * <igx-combo (onClosed)='handleClosed()'></igx-combo>
     * ```
     */
    onClosed: EventEmitter<void>;
    /**
     * Emitted when an item is being added to the data collection
     *
     * ```html
     * <igx-combo (onAddition)='handleAdditionEvent()'></igx-combo>
     * ```
     */
    onAddition: EventEmitter<IComboItemAdditionEvent>;
    /**
     * Emitted when the value of the search input changes (e.g. typing, pasting, clear, etc.)
     *
     * ```html
     * <igx-combo (onSearchInput)='handleSearchInputEvent()'></igx-combo>
     * ```
     */
    onSearchInput: EventEmitter<{}>;
    /**
     * Emitted when new chunk of data is loaded from the virtualization
     *
     * ```html
     * <igx-combo (onDataPreLoad)='handleDataPreloadEvent()'></igx-combo>
     * ```
     */
    onDataPreLoad: EventEmitter<any>;
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
    id: string;
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
     */
    width: string;
    /**
     * @hidden @internal
     */
    readonly validClass: boolean;
    /**
     * @hidden @internal
     */
    readonly invalidClass: boolean;
    /**
     * @hidden @internal
     */
    cssClass: string;
    /**
     * @hidden @internal
     */
    role: string;
    /**
     * @hidden @internal
     */
    readonly ariaExpanded: boolean;
    /**
     * @hidden @internal
     */
    readonly hasPopUp: string;
    /**
     * @hidden @internal
     */
    readonly ariaOwns: string;
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
    allowCustomValues: boolean;
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
    itemsMaxHeight: number;
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
     */
    itemsWidth: string;
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
    itemHeight: number;
    /**
     * @hidden @internal
     */
    filteringLogic: FilteringLogic;
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
    placeholder: string;
    /**
     * @hidden @internal
     */
    readonly inputEmpty: boolean;
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
    searchPlaceholder: string;
    /**
     * Combo data source.
     *
     * ```html
     * <!--set-->
     * <igx-combo [data]='items'></igx-combo>
     * ```
     */
    data: any[];
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
     */
    valueKey: string;
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
    displayKey: string;
    /**
     * The item property by which items should be grouped inside the items list. Not usable if data is not of type Object[].
     *
     * ```html
     * <!--set-->
     * <igx-combo [groupKey]='newGroupKey'></igx-combo>
     * ```
     */
    /**
    * The item property by which items should be grouped inside the items list. Not usable if data is not of type Object[].
    *
    * ```typescript
    * // get
    * let currentGroupKey = this.combo.groupKey;
    * ```
    */
    groupKey: string;
    /**
     * An @Input property that enabled/disables filtering in the list. The default is `true`.
     * ```html
     *<igx-combo [filterable]="'false'">
     * ```
     */
    filterable: boolean;
    /**
     * An @Input property that set aria-labelledby attribute
     * ```html
     *<igx-combo [ariaLabelledBy]="'label1'">
     * ```
     */
    ariaLabelledBy: string;
    /**
     * An @Input property that enabled/disables combo. The default is `false`.
     * ```html
     *<igx-combo [disabled]="'true'">
     * ```
     */
    disabled: boolean;
    /**
     * An @Input property that sets how the combo will be styled.
     * The allowed values are `line`, `box`, `border` and `search`. The default is `box`.
     * ```html
     *<igx-combo [type]="'line'">
     * ```
     */
    type: string;
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
    valid: IgxComboState;
    /**
     * @hidden @internal
     */
    searchValue: string;
    /**
     * @hidden @internal
     */
    onArrowDown(event: Event): void;
    /**
     * @hidden @internal
     */
    onInputClick(event: Event): void;
    /**
     * Defines the current state of the virtualized data. It contains `startIndex` and `chunkSize`
     *
     * ```typescript
     * // get
     * let state = this.combo.virtualizationState;
     * ```
    */
    /**
    * Sets the current state of the virtualized data.
    *
    * ```typescript
    * // set
    * this.combo.virtualizationState(state);
    * ```
    */
    virtualizationState: IForOfState;
    /**
     * Gets total count of the virtual data items, when using remote service.
     *
     * ```typescript
     * // get
     * let count = this.combo.totalItemCount;
     * ```
    */
    /**
    * Sets total count of the virtual data items, when using remote service.
    *
    * ```typescript
    * // set
    * this.combo.totalItemCount(remoteService.count);
    * ```
    */
    totalItemCount: number;
    /**
     * @hidden @internal
     */
    /**
    * @hidden @internal
    */
    filteringExpressions: IFilteringExpression[];
    /**
     * @hidden @internal
     */
    /**
    * @hidden @internal
    */
    sortingExpressions: ISortingExpression[];
    protected clearSorting(field?: string | number): void;
    /**
     * The text displayed in the combo input
     *
     * ```typescript
     * // get
     * let comboValue = this.combo.value;
     * ```
     */
    readonly value: string;
    /**
     * @hidden @internal
     */
    /**
    * @hidden @internal
    */
    filteredData: any[];
    /**
     * @hidden @internal
     */
    handleKeyUp(event: KeyboardEvent): void;
    /**
     * @hidden @internal
     */
    handleKeyDown(event: KeyboardEvent): void;
    private checkMatch;
    /**
     * @hidden @internal
     */
    handleInputChange(event?: string): void;
    /**
     * @hidden @internal
     */
    sort(fieldName: string, dir?: SortingDirection, ignoreCase?: boolean, strategy?: ISortingStrategy): void;
    /**
     * @hidden @internal
     */
    getValueByValueKey(val: any): any;
    protected prepare_sorting_expression(state: ISortingExpression[], fieldName: string, dir: SortingDirection, ignoreCase: boolean, strategy: ISortingStrategy): void;
    /**
     * @hidden @internal
     */
    readonly dataType: string;
    /**
     * @hidden @internal
     */
    readonly isRemote: boolean;
    /**
     * If the data source is remote, returns JSON.stringify(itemID)
     * @hidden
     * @internal
     */
    private _stringifyItemID;
    private _parseItemID;
    /**
     * Returns if the specified itemID is selected
     * @hidden
     * @internal
     */
    isItemSelected(item: any): boolean;
    /**
     * Triggers change detection on the combo view
     */
    triggerCheck(): void;
    /**
     * @hidden @internal
     */
    isAddButtonVisible(): boolean;
    /**
     * @hidden @internal
     */
    handleSelectAll(evt: any): void;
    /**
     * @hidden @internal
     */
    addItemToCollection(): void;
    /**
     * @hidden @internal
     */
    focusSearchInput(opening?: boolean): void;
    protected prepare_filtering_expression(searchVal: any, condition: any, ignoreCase: any, fieldName?: any): void;
    protected onStatusChanged: () => void;
    /**
     * @hidden @internal
     */
    onBlur(): void;
    /**
     * @hidden @internal
     */
    filter(): void;
    /**
     * @hidden @internal
     */
    ngOnInit(): void;
    /**
     * @hidden @internal
     */
    ngAfterViewInit(): void;
    /**
     * @hidden @internal
     */
    ngOnDestroy(): void;
    /**
     * @hidden @internal
     */
    dataLoading(event: any): void;
    /**
     * @hidden @internal
     */
    writeValue(value: any): void;
    /**
     * @hidden @internal
     */
    registerOnChange(fn: any): void;
    /**
     * @hidden @internal
     */
    registerOnTouched(fn: any): void;
    /**
     * @hidden @internal
     */
    setDisabledState(isDisabled: boolean): void;
    /**
     * @hidden
     */
    getEditElement(): HTMLElement;
    /**
     * @hidden @internal
     */
    readonly template: TemplateRef<any>;
    /**
     * @hidden @internal
     */
    readonly context: any;
    /**
     * @hidden @internal
     */
    handleClearItems(event: Event): void;
    /**
     * A method that opens/closes the combo.
     *
     *```html
     *<button (click)="combo.toggle()">Toggle Combo</button>
     *<igx-combo #combo></igx-combo>
     *```
     */
    toggle(): void;
    /**
     * A method that opens the combo.
     *
     *```html
     *<button (click)="combo.open()">Open Combo</button>
     *<igx-combo #combo></igx-combo>
     *```
     */
    open(): void;
    /**
     * A method that closes the combo.
     *
     *```html
     *<button (click)="combo.close()">Close Combo</button>
     *<igx-combo #combo></igx-combo>
     *```
     */
    close(): void;
    /**
     * Gets drop down state.
     *
     * ```typescript
     * let state = this.combo.collapsed;
     * ```
    */
    readonly collapsed: boolean;
    /**
     * Get current selection state
     * @returns Array of selected items
     * ```typescript
     * let selectedItems = this.combo.selectedItems();
     * ```
     */
    selectedItems(): any[];
    /**
     * Select defined items
     * @param newItems new items to be selected
     * @param clearCurrentSelection if true clear previous selected items
     * ```typescript
     * this.combo.selectItems(["New York", "New Jersey"]);
     * ```
     */
    selectItems(newItems: Array<any>, clearCurrentSelection?: boolean, event?: Event): void;
    /**
     * Deselect defined items
     * @param items items to deselected
     * ```typescript
     * this.combo.deselectItems(["New York", "New Jersey"]);
     * ```
     */
    deselectItems(items: Array<any>, event?: Event): void;
    /**
     * Select all (filtered) items
     * @param ignoreFilter if set to true, selects all items, otherwise selects only the filtered ones.
     * ```typescript
     * this.combo.selectAllItems();
     * ```
     */
    selectAllItems(ignoreFilter?: boolean, event?: Event): void;
    /**
     * Deselect all (filtered) items
     * @param ignoreFilter if set to true, deselects all items, otherwise deselects only the filtered ones.
     * ```typescript
     * this.combo.deselectAllItems();
     * ```
     */
    deselectAllItems(ignoreFilter?: boolean, event?: Event): void;
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
    setSelectedItem(itemID: any, select?: boolean, event?: Event): void;
    protected setSelection(newSelection: Set<any>, event?: Event): void;
    /**
     * Event handlers
     * @hidden
     * @internal
     */
    handleOpening(event: CancelableEventArgs): void;
    /**
     * @hidden @internal
     */
    handleOpened(): void;
    /**
     * @hidden @internal
     */
    handleClosing(event: any): void;
    /**
     * @hidden @internal
     */
    handleClosed(): void;
}
/**
 * @hidden
 */
export declare class IgxComboModule {
}
