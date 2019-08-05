import { IDropDownBase } from './drop-down.common';
import { ElementRef, DoCheck } from '@angular/core';
import { IgxSelectionAPIService } from '../core/selection';
import { IgxDropDownGroupComponent } from './drop-down-group.component';
/**
 * An abstract class defining a drop-down item:
 * With properties / styles for selection, highlight, height
 * Bindable property for passing data (`value: any`)
 * Parent component (has to be used under a parent with type `IDropDownBase`)
 * Method for handling click on Host()
 */
export declare abstract class IgxDropDownItemBase implements DoCheck {
    protected dropDown: IDropDownBase;
    protected elementRef: ElementRef;
    protected group: IgxDropDownGroupComponent;
    protected selection?: IgxSelectionAPIService;
    /**
     * @hidden
     */
    protected _focused: boolean;
    protected _selected: boolean;
    protected _index: any;
    protected _disabled: boolean;
    protected readonly hasIndex: boolean;
    /**
     * Sets/gets the `id` of the item.
     * ```html
     * <igx-drop-down-item [id] = 'igx-drop-down-item-0'></igx-drop-down-item>
     * ```
     * ```typescript
     * let itemId =  this.item.id;
     * ```
     * @memberof IgxSelectItemComponent
     */
    id: string;
    /**
     * @hidden @internal
     */
    readonly itemID: this;
    /**
     * The data index of the dropdown item.
     *
     * ```typescript
     * // get the data index of the selected dropdown item
     * let selectedItemIndex = this.dropdown.selectedItem.index
     * ```
     */
    index: number;
    /**
     * Gets/sets the value of the item if the item is databound
     *
     * ```typescript
     * // usage in IgxDropDownItemComponent
     * // get
     * let mySelectedItemValue = this.dropdown.selectedItem.value;
     *
     * // set
     * let mySelectedItem = this.dropdown.selectedItem;
     * mySelectedItem.value = { id: 123, name: 'Example Name' }
     *
     * // usage in IgxComboItemComponent
     * // get
     * let myComboItemValue = this.combo.items[0].value;
     * ```
     */
    value: any;
    /**
     * @hidden @internal
     */
    readonly itemStyle: boolean;
    /**
     * @hidden @internal
     */
    readonly itemStyleCosy: boolean;
    /**
     * @hidden @internal
     */
    readonly itemStyleCompact: boolean;
    /**
     * Sets/Gets if the item is the currently selected one in the dropdown
     *
     * ```typescript
     *  let mySelectedItem = this.dropdown.selectedItem;
     *  let isMyItemSelected = mySelectedItem.selected; // true
     * ```
     */
    selected: boolean;
    /**
     * @hidden @internal
     */
    /**
    * @hidden @internal
    */
    isSelected: boolean;
    /**
     * Sets/gets if the given item is focused
     * ```typescript
     *  let mySelectedItem = this.dropdown.selectedItem;
     *  let isMyItemFocused = mySelectedItem.focused;
     * ```
     */
    /**
    * ```html
    *  <igx-drop-down-item *ngFor="let item of items" focused={{!item.focused}}>
    *      <div>
    *          {{item.field}}
    *      </div>
    *  </igx-drop-down-item>
    * ```
    */
    focused: boolean;
    /**
     * @hidden @internal
     */
    /**
    * @hidden @internal
    */
    isFocused: boolean;
    /**
     * Sets/gets if the given item is header
     * ```typescript
     *  // get
     *  let mySelectedItem = this.dropdown.selectedItem;
     *  let isMyItemHeader = mySelectedItem.isHeader;
     * ```
     *
     * ```html
     *  <!--set-->
     *  <igx-dropdown-item *ngFor="let item of items">
     *      <div *ngIf="items.indexOf(item) === 5; then item.isHeader = true">
     *          {{item.field}}
*           </div>
     *  </igx-drop-down-item>
     * ```
     */
    isHeader: boolean;
    /**
     * @hidden @internal
     */
    readonly headerClassCosy: boolean;
    /**
     * @hidden @internal
     */
    readonly headerClassCompact: boolean;
    /**
     * Sets/gets if the given item is disabled
     *
     * ```typescript
     *  // get
     *  let mySelectedItem = this.dropdown.selectedItem;
     *  let myItemIsDisabled = mySelectedItem.disabled;
     * ```
     *
     * ```html
     *  <igx-drop-down-item *ngFor="let item of items" disabled={{!item.disabled}}>
     *      <div>
     *          {{item.field}}
     *      </div>
     *  </igx-drop-down-item>
     * ```
     * **NOTE:** Drop-down items inside of a disabled `IgxDropDownGroup` will always count as disabled
     */
    disabled: boolean;
    /**
     * Gets/sets the `role` attribute of the item. Default is 'option'.
     *
     * ```html
     *  <igx-drop-down-item [role]="customRole"></igx-drop-down-item>
     * ```
     */
    role: string;
    /**
     * Gets item index
     * @hidden @internal
     */
    readonly itemIndex: number;
    /**
     * Gets item element height
     * @hidden @internal
     */
    readonly elementHeight: number;
    /**
     * Get item html element
     * @hidden @internal
     */
    readonly element: ElementRef;
    constructor(dropDown: IDropDownBase, elementRef: ElementRef, group: IgxDropDownGroupComponent, selection?: IgxSelectionAPIService);
    /**
     * @hidden @internal
     */
    clicked(event: any): void;
    ngDoCheck(): void;
}