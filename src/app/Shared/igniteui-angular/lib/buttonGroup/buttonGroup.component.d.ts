import { AfterContentInit, AfterViewInit, ChangeDetectorRef, EventEmitter, Renderer2, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { IgxButtonDirective } from '../directives/button/button.directive';
import { DisplayDensityBase, IDisplayDensityOptions } from '../core/density';
export declare enum ButtonGroupAlignment {
    horizontal = 0,
    vertical = 1
}
/**
 * **Ignite UI for Angular Button Group** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/buttongroup.html)
 *
 * The Ignite UI Button Group displays a group of buttons either vertically or horizontally.  The group supports
 * single, multiple and toggle selection.
 *
 * Example:
 * ```html
 * <igx-buttongroup multiSelection="true" [values]="fontOptions">
 * </igx-buttongroup>
 * ```
 * The `fontOptions` value shown above is defined as:
 * ```typescript
 * this.fontOptions = [
 *   { icon: 'format_bold', selected: false },
 *   { icon: 'format_italic', selected: false },
 *   { icon: 'format_underlined', selected: false }];
 * ```
 */
export declare class IgxButtonGroupComponent extends DisplayDensityBase implements AfterContentInit, AfterViewInit, OnDestroy {
    private _cdr;
    private _renderer;
    protected _displayDensityOptions: IDisplayDensityOptions;
    private _disabled;
    protected buttonClickNotifier$: Subject<boolean>;
    protected queryListNotifier$: Subject<boolean>;
    private viewButtons;
    private templateButtons;
    /**
     * A collection containing all buttons inside the button group.
     */
    readonly buttons: IgxButtonDirective[];
    /**
     * An @Input property that sets the value of the `id` attribute. If not set it will be automatically generated.
     * ```html
     *  <igx-buttongroup [id]="'igx-dialog-56'" [multiSelection]="!multi" [values]="alignOptions">
     * ```
     */
    id: string;
    /**
     * Allows you to set a style using the `itemContentCssClass` input.
     * The value should be the CSS class name that will be applied to the button group.
     *```typescript
     *public style1 = "styleClass";
     * //..
     *```
     * ```html
     *<igx-buttongroup [itemContentCssClass]="style1" [multiSelection]="!multi" [values]="alignOptions">
     *```
     */
    /**
    * Returns the CSS class of the item content of the `IgxButtonGroup`.
    *```typescript
    *@ViewChild("MyChild")
    *public buttonG: IgxButtonGroupComponent;
    *ngAfterViewInit(){
    *   let buttonSelect = this.buttonG.itemContentCssClass;
    *}
    *```
    */
    itemContentCssClass: string;
    /**
     * An @Input property that enables selecting multiple buttons. By default, multi-selection is false.
     * ```html
     * <igx-buttongroup [multiSelection]="false" [alignment]="alignment"></igx-buttongroup>
     * ```
     */
    multiSelection: boolean;
    /**
     * An @Input property that allows setting the buttons in the button group.
     * ```typescript
     *  public ngOnInit() {
     *      this.cities = [
     *        new Button({
     *          label: "Sofia"
     *      }),
     *        new Button({
     *          label: "London"
     *      }),
     *        new Button({
     *          label: "New York",
     *          selected: true
     *      }),
     *        new Button({
     *          label: "Tokyo"
     *      })
     *  ];
     *  }
     *  //..
     * ```
     * ```html
     *  <igx-buttongroup [multiSelection]="false" [values]="cities"></igx-buttongroup>
     * ```
     */
    values: any;
    /**
     * An @Input property that allows you to disable the `igx-buttongroup` component. By default it's false.
     * ```html
     * <igx-buttongroup [disabled]="true" [multiSelection]="multi" [values]="fontOptions"></igx-buttongroup>
     * ```
     */
    disabled: boolean;
    /**
     * @hidden
     */
    selectedIndexes: number[];
    /**
     * Allows you to set the button group alignment.
     * Available options are `ButtonGroupAlignment.horizontal` (default) and `ButtonGroupAlignment.vertical`.
     * ```typescript
     *public alignment = ButtonGroupAlignment.vertical;
     * //..
     * ```
     * ```html
     *<igx-buttongroup [multiSelection]="false" [values]="cities" [alignment]="alignment"></igx-buttongroup>
     * ```
     */
    /**
    * Returns the alignment of the `igx-buttongroup`.
    *```typescript
    *@ViewChild("MyChild")
    *public buttonG: IgxButtonGroupComponent;
    *ngAfterViewInit(){
    *    let buttonAlignment = this.buttonG.alignment;
    *}
    *```
    */
    alignment: ButtonGroupAlignment;
    /**
     * An @Ouput property that emits an event when a button is selected.
     *```typescript
     *@ViewChild("toast")
     *private toast: IgxToastComponent;
     *public onSelect(buttongroup){
     *    this.toast.show()
     *}
     * //...
     *```
     *```html
     * <igx-buttongroup #MyChild [multiSelection]="!multi" (onSelect)="onSelect($event)"></igx-buttongroup>
     *<igx-toast #toast message="You have made a selection!"></igx-toast>
     *```
     */
    onSelect: EventEmitter<IButtonGroupEventArgs>;
    /**
     * An @Ouput property that emits an event when a button is deselected.
     *```typescript
     *@ViewChild("toast")
     *private toast: IgxToastComponent;
     *public onUnselect(buttongroup){
     *    this.toast.show()
     *}
     * //...
     *```
     *```html
     * igx-buttongroup #MyChild [multiSelection]="multi" (onUnselect)="onUnselect($event)"></igx-buttongroup>
     *<igx-toast #toast message="You have deselected a button!"></igx-toast>
     *```
     */
    onUnselect: EventEmitter<IButtonGroupEventArgs>;
    /**
     * Returns true if the `igx-buttongroup` alignment is vertical.
     * Note that in order for the accessor to work correctly the property should be set explicitly.
     * ```html
     * <igx-buttongroup #MyChild [alignment]="alignment" [values]="alignOptions">
     * ```
     * ```typescript
     * //...
     *@ViewChild("MyChild")
     *private buttonG: IgxButtonGroupComponent;
     *ngAfterViewInit(){
     *    let orientation = this.buttonG.isVertical;
     *}
     *```
     */
    readonly isVertical: boolean;
    private _isVertical;
    private _itemContentCssClass;
    constructor(_cdr: ChangeDetectorRef, _renderer: Renderer2, _displayDensityOptions: IDisplayDensityOptions);
    /**
     * Gets the selected button/buttons.
     *```typescript
     *@ViewChild("MyChild")
     *private buttonG: IgxButtonGroupComponent;
     *ngAfterViewInit(){
     *    let selectedButton = this.buttonG.selectedButtons;
     *}
     *```
     */
    readonly selectedButtons: IgxButtonDirective[];
    /**
     * Selects a button by its index.
     * @memberOf {@link IgxButtonGroupComponent}
     *```typescript
     *@ViewChild("MyChild")
     *private buttonG: IgxButtonGroupComponent;
     *ngAfterViewInit(){
     *    this.buttonG.selectButton(2);
     *    this.cdr.detectChanges();
     *}
     *```
     */
    selectButton(index: number): void;
    /**
     * Deselects a button by its index.
     * @memberOf {@link IgxButtonGroupComponent}
     * ```typescript
     *@ViewChild("MyChild")
     *private buttonG: IgxButtonGroupComponent;
     *ngAfterViewInit(){
     *    this.buttonG.deselectButton(2);
     *    this.cdr.detectChanges();
     *}
     * ```
     */
    deselectButton(index: number): void;
    /**
     * @hidden
     */
    ngAfterContentInit(): void;
    /**
     * @hidden
     */
    ngAfterViewInit(): void;
    /**
     * @hidden
     */
    ngOnDestroy(): void;
    /**
     *@hidden
     */
    _clickHandler(event: any, i: any): void;
}
export interface IButtonGroupEventArgs {
    button: IgxButtonDirective;
    index: number;
}
/**
 * @hidden
 */
export declare class IgxButtonGroupModule {
}
