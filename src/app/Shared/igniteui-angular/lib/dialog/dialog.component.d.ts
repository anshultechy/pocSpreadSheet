import { ElementRef, EventEmitter, OnDestroy, OnInit, AfterContentInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IgxNavigationService, IToggleView } from '../core/navigation';
import { IgxToggleDirective } from '../directives/toggle/toggle.directive';
import { OverlaySettings } from '../services';
/**
 * **Ignite UI for Angular Dialog Window** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/dialog.html)
 *
 * The Ignite UI Dialog Window presents a dialog window to the user which can simply display messages or display
 * more complicated visuals such as a user sign-in form.  It also provides a right and left button
 * which can be used for custom actions.
 *
 * Example:
 * ```html
 * <button (click)="form.open()">Show Dialog</button>
 * <igx-dialog #form title="Sign In" rightButtonLabel="OK">
 *   <div>
 *     <input type="text" igxInput/>
 *     <label igxLabel>Username</label>
 *   </div>
 *   <div>
 *     <input type="password" igxInput/>
 *     <label igxLabel>Password</label>
 *   </div>
 * </igx-dialog>
 * ```
 */
export declare class IgxDialogComponent implements IToggleView, OnInit, OnDestroy, AfterContentInit {
    private elementRef;
    private navService;
    private static NEXT_ID;
    private static readonly DIALOG_CLASS;
    toggleRef: IgxToggleDirective;
    /**
    * An @Input property that sets the value of the `id` attribute. If not provided it will be automatically generated.
    *```html
    *<igx-dialog [id]="'igx-dialog-56'" #alert title="Notification" leftButtonLabel="OK" (onLeftButtonSelect)="alert.close()"></igx-dialog>
    *```
    */
    id: string;
    isModal: boolean;
    /**
    * An @Input property controlling the `title` of the dialog.
    *```html
    *<igx-dialog title="Notification" #alert leftButtonLabel="OK" (onLeftButtonSelect)="alert.close()"></igx-dialog>
    *```
    */
    title: string;
    /**
     *  An @Input property controlling the `message` of the dialog.
     *```html
     *<igx-dialog message="Your email was sent!" #alert leftButtonLabel="OK" (onLeftButtonSelect)="alert.close()"></igx-dialog>
     *```
     */
    message: string;
    /**
     * An @Input property to set the `label` of the left button of the dialog.
     *```html
     *<igx-dialog leftButtonLabel="OKAY" #alert title="Notification"  (onLeftButtonSelect)="alert.close()"></igx-dialog>
     *```
     */
    leftButtonLabel: string;
    /**
     * An @Input property to set the left button `type`. The types are `flat`, `raised` and `fab`.
     * The `flat` type button is a rectangle and doesn't have a shadow. <br>
     * The `raised` type button is also a rectangle but has a shadow. <br>
     * The `fab` type button is a circle with a shadow. <br>
     * The default value is `flat`.
     *```html
     *<igx-dialog leftButtonType="raised" leftButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
     *```
     */
    leftButtonType: string;
    /**
     * An @Input property to set the left button color. The property accepts all valid CSS color property values.
     *```html
     *<igx-dialog leftButtonColor="yellow" leftButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
     *```
     */
    leftButtonColor: string;
    /**
     * An @Input property to set the left button `background-color`. The property accepts all valid CSS color property values.
     *```html
     *<igx-dialog leftButtonBackgroundColor="black" leftButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
     *```
     */
    leftButtonBackgroundColor: string;
    /**
     * An @Input property to set the left button `ripple`. The `ripple` animates a click/tap to a component as a series of fading waves.
     * The property accepts all valid CSS color property values.
     *```html
     *<igx-dialog leftButtonRipple="green" leftButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
     *```
     */
    leftButtonRipple: string;
    /**
     * An @Input property to set the `label` of the right button of the dialog.
     *```html
     *<igx-dialog rightButtonLabel="OKAY" #alert title="Notification"  (onLeftButtonSelect)="alert.close()"></igx-dialog>
     *```
     */
    rightButtonLabel: string;
    /**
     * An @Input property to set the right button `type`. The types are `flat`, `raised` and `fab`.
     * The `flat` type button is a rectangle and doesn't have a shadow. <br>
     * The `raised` type button is also a rectangle but has a shadow. <br>
     * The `fab` type button is a circle with a shadow. <br>
     * The default value is `flat`.
     *```html
     *<igx-dialog rightButtonType="fab" rightButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
     *```
     */
    rightButtonType: string;
    /**
     * An @Input property to set the right button `color`. The property accepts all valid CSS color property values.
     *```html
     *<igx-dialog rightButtonColor="yellow" rightButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
     *```
     */
    rightButtonColor: string;
    /**
     * An @Input property to set the right button `background-color`. The property accepts all valid CSS color property values.
     *```html
     *<igx-dialog rightButtonBackgroundColor="black" rightButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
     *```
     */
    rightButtonBackgroundColor: string;
    /**
     * An @Input property to set the right button `ripple`.
     *```html
     *<igx-dialog rightButtonRipple="green" rightButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
     *```
     */
    rightButtonRipple: string;
    /**
     * An @Input property that allows you to enable the "close on click outside the dialog". By default it's disabled.
     *```html
     *<igx-dialog closeOnOutsideSelect="true" leftButtonLabel="Cancel" (onLeftButtonSelect)="dialog.close()"
     *rightButtonLabel="OK" rightButtonRipple="#4CAF50" (onRightButtonSelect)="onDialogOKSelected($event)">
     *</igx-dialog>
     *```
     */
    closeOnOutsideSelect: boolean;
    /**
     * An event that is emitted when the dialog is opened.
     *```html
     *<igx-dialog (onOpen)="onDialogOpenHandler($event)" (onLeftButtonSelect)="dialog.close()" rightButtonLabel="OK">
     *</igx-dialog>
     *```
     */
    onOpen: EventEmitter<IDialogEventArgs>;
    /**
     * An event that is emitted when the dialog is closed.
     *```html
     *<igx-dialog (onClose)="onDialogCloseHandler($event)" title="Confirmation" leftButtonLabel="Cancel" rightButtonLabel="OK">
     *</igx-dialog>
     *```
     */
    onClose: EventEmitter<IDialogEventArgs>;
    /**
     * An event that is emitted when the left button is clicked.
     *```html
     *<igx-dialog (onLeftButtonSelect)="onDialogOKSelected($event)" #dialog leftButtonLabel="OK" rightButtonLabel="Cancel">
     *</igx-dialog>
     *```
     */
    onLeftButtonSelect: EventEmitter<IDialogEventArgs>;
    /**
     * An event that is emitted when the right button is clicked.
     * ```html
     *<igx-dialog (onRightButtonSelect)="onDialogOKSelected($event)"
     *#dialog title="Confirmation" (onLeftButtonSelect)="dialog.close()" rightButtonLabel="OK"
     *rightButtonRipple="#4CAF50" closeOnOutsideSelect="true">
     *</igx-dialog>
     *```
     */
    onRightButtonSelect: EventEmitter<IDialogEventArgs>;
    private _animaitonSettings;
    private _overlayDefaultSettings;
    private _closeOnOutsideSelect;
    private _isModal;
    protected destroy$: Subject<boolean>;
    /**
     * @hidden
     */
    readonly element: any;
    /**
     * The default `tabindex` attribute for the component
     *
     * @hidden
     */
    tabindex: number;
    private _titleId;
    /**
     * Returns the value of state. Possible state values are "open" or "close".
     *```typescript
     *@ViewChild("MyDialog")
     *public dialog: IgxDialogComponent;
     *ngAfterViewInit() {
     *    let dialogState = this.dialog.state;
     *}
     *```
     */
    readonly state: string;
    /**
     * Returns whether the dialog is visible to the end user.
     *```typescript
     *@ViewChild("MyDialog")
     *public dialog: IgxDialogComponent;
     *ngAfterViewInit() {
     *    let dialogOpen = this.dialog.isOpen;
     *}
     * ```
     */
    readonly isOpen: boolean;
    readonly isCollapsed: boolean;
    /**
     *Returns the value of the role of the dialog. The valid values are `dialog`, `alertdialog`, `alert`.
     *```typescript
     *@ViewChild("MyDialog")
     *public dialog: IgxDialogComponent;
     *ngAfterViewInit() {
     *    let dialogRole = this.dialog.role;
     *}
     * ```
     */
    readonly role: "dialog" | "alertdialog" | "alert";
    /**
     *Returns the value of the title id.
     *```typescript
     *@ViewChild("MyDialog")
     *public dialog: IgxDialogComponent;
     *ngAfterViewInit() {
     *    let dialogTitle = this.dialog.titleId;
     *}
     * ```
     */
    readonly titleId: string;
    constructor(elementRef: ElementRef, navService: IgxNavigationService);
    ngAfterContentInit(): void;
    private emitCloseFromDialog;
    /**
     * A method that opens the dialog.
     * @memberOf {@link IgxDialogComponent}
     *```html
     *<button (click)="dialog.open() igxButton="raised" igxButtonColor="white" igxRipple="white">Trigger Dialog</button>
     *<igx-dialog #dialog></igx-dialog>
     *```
     */
    open(overlaySettings?: OverlaySettings): void;
    /**
     *A method that that closes the dialog.
     *@memberOf {@link IgxDialogComponent}
     *```html
     *<button (click)="dialog.close() igxButton="raised" igxButtonColor="white" igxRipple="white">Trigger Dialog</button>
     *<igx-dialog #dialog></igx-dialog>
     *```
     */
    close(): void;
    /**
     * A method that opens/closes the dialog.
     *@memberOf {@link IgxDialogComponent}
     *```html
     *<button (click)="dialog.toggle() igxButton="raised" igxButtonColor="white" igxRipple="white">Trigger Dialog</button>
     *<igx-dialog #dialog></igx-dialog>
     *```
     */
    toggle(): void;
    /**
     * @hidden
     */
    onDialogSelected(event: any): void;
    /**
     * @hidden
     */
    onInternalLeftButtonSelect(event: any): void;
    /**
     * @hidden
     */
    onInternalRightButtonSelect(event: any): void;
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngOnDestroy(): void;
}
export interface IDialogEventArgs {
    dialog: IgxDialogComponent;
    event: Event;
}
/**
 * @hidden
 */
export declare class IgxDialogModule {
}
