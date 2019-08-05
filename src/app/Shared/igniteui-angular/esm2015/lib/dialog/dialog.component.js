/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { useAnimation } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostBinding, Input, NgModule, Optional, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IgxNavigationService } from '../core/navigation';
import { IgxButtonModule } from '../directives/button/button.directive';
import { IgxRippleModule } from '../directives/ripple/ripple.directive';
import { IgxDialogActionsDirective, IgxDialogTitleDirective } from './dialog.directives';
import { IgxToggleModule, IgxToggleDirective } from '../directives/toggle/toggle.directive';
import { GlobalPositionStrategy, NoOpScrollStrategy } from '../services';
import { slideInBottom, slideOutTop } from '../animations/slide/index';
import { IgxFocusModule } from '../directives/focus/focus.directive';
/** @type {?} */
let DIALOG_ID = 0;
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
export class IgxDialogComponent {
    /**
     * @param {?} elementRef
     * @param {?} navService
     */
    constructor(elementRef, navService) {
        this.elementRef = elementRef;
        this.navService = navService;
        /**
         * An \@Input property that sets the value of the `id` attribute. If not provided it will be automatically generated.
         * ```html
         * <igx-dialog [id]="'igx-dialog-56'" #alert title="Notification" leftButtonLabel="OK" (onLeftButtonSelect)="alert.close()"></igx-dialog>
         * ```
         */
        this.id = `igx-dialog-${DIALOG_ID++}`;
        /**
         * An \@Input property controlling the `title` of the dialog.
         * ```html
         * <igx-dialog title="Notification" #alert leftButtonLabel="OK" (onLeftButtonSelect)="alert.close()"></igx-dialog>
         * ```
         */
        this.title = '';
        /**
         *  An \@Input property controlling the `message` of the dialog.
         * ```html
         * <igx-dialog message="Your email was sent!" #alert leftButtonLabel="OK" (onLeftButtonSelect)="alert.close()"></igx-dialog>
         * ```
         */
        this.message = '';
        /**
         * An \@Input property to set the `label` of the left button of the dialog.
         * ```html
         * <igx-dialog leftButtonLabel="OKAY" #alert title="Notification"  (onLeftButtonSelect)="alert.close()"></igx-dialog>
         * ```
         */
        this.leftButtonLabel = '';
        /**
         * An \@Input property to set the left button `type`. The types are `flat`, `raised` and `fab`.
         * The `flat` type button is a rectangle and doesn't have a shadow. <br>
         * The `raised` type button is also a rectangle but has a shadow. <br>
         * The `fab` type button is a circle with a shadow. <br>
         * The default value is `flat`.
         * ```html
         * <igx-dialog leftButtonType="raised" leftButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
         * ```
         */
        this.leftButtonType = 'flat';
        /**
         * An \@Input property to set the left button color. The property accepts all valid CSS color property values.
         * ```html
         * <igx-dialog leftButtonColor="yellow" leftButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
         * ```
         */
        this.leftButtonColor = '';
        /**
         * An \@Input property to set the left button `background-color`. The property accepts all valid CSS color property values.
         * ```html
         * <igx-dialog leftButtonBackgroundColor="black" leftButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
         * ```
         */
        this.leftButtonBackgroundColor = '';
        /**
         * An \@Input property to set the left button `ripple`. The `ripple` animates a click/tap to a component as a series of fading waves.
         * The property accepts all valid CSS color property values.
         * ```html
         * <igx-dialog leftButtonRipple="green" leftButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
         * ```
         */
        this.leftButtonRipple = '';
        /**
         * An \@Input property to set the `label` of the right button of the dialog.
         * ```html
         * <igx-dialog rightButtonLabel="OKAY" #alert title="Notification"  (onLeftButtonSelect)="alert.close()"></igx-dialog>
         * ```
         */
        this.rightButtonLabel = '';
        /**
         * An \@Input property to set the right button `type`. The types are `flat`, `raised` and `fab`.
         * The `flat` type button is a rectangle and doesn't have a shadow. <br>
         * The `raised` type button is also a rectangle but has a shadow. <br>
         * The `fab` type button is a circle with a shadow. <br>
         * The default value is `flat`.
         * ```html
         * <igx-dialog rightButtonType="fab" rightButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
         * ```
         */
        this.rightButtonType = 'flat';
        /**
         * An \@Input property to set the right button `color`. The property accepts all valid CSS color property values.
         * ```html
         * <igx-dialog rightButtonColor="yellow" rightButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
         * ```
         */
        this.rightButtonColor = '';
        /**
         * An \@Input property to set the right button `background-color`. The property accepts all valid CSS color property values.
         * ```html
         * <igx-dialog rightButtonBackgroundColor="black" rightButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
         * ```
         */
        this.rightButtonBackgroundColor = '';
        /**
         * An \@Input property to set the right button `ripple`.
         * ```html
         * <igx-dialog rightButtonRipple="green" rightButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
         * ```
         */
        this.rightButtonRipple = '';
        /**
         * An event that is emitted when the dialog is opened.
         * ```html
         * <igx-dialog (onOpen)="onDialogOpenHandler($event)" (onLeftButtonSelect)="dialog.close()" rightButtonLabel="OK">
         * </igx-dialog>
         * ```
         */
        this.onOpen = new EventEmitter();
        /**
         * An event that is emitted when the dialog is closed.
         * ```html
         * <igx-dialog (onClose)="onDialogCloseHandler($event)" title="Confirmation" leftButtonLabel="Cancel" rightButtonLabel="OK">
         * </igx-dialog>
         * ```
         */
        this.onClose = new EventEmitter();
        /**
         * An event that is emitted when the left button is clicked.
         * ```html
         * <igx-dialog (onLeftButtonSelect)="onDialogOKSelected($event)" #dialog leftButtonLabel="OK" rightButtonLabel="Cancel">
         * </igx-dialog>
         * ```
         */
        this.onLeftButtonSelect = new EventEmitter();
        /**
         * An event that is emitted when the right button is clicked.
         * ```html
         * <igx-dialog (onRightButtonSelect)="onDialogOKSelected($event)"
         * #dialog title="Confirmation" (onLeftButtonSelect)="dialog.close()" rightButtonLabel="OK"
         * rightButtonRipple="#4CAF50" closeOnOutsideSelect="true">
         * </igx-dialog>
         * ```
         */
        this.onRightButtonSelect = new EventEmitter();
        this._animaitonSettings = {
            openAnimation: useAnimation(slideInBottom, { params: { fromPosition: 'translateY(100%)' } }),
            closeAnimation: useAnimation(slideOutTop, { params: { toPosition: 'translateY(-100%)' } })
        };
        this._closeOnOutsideSelect = false;
        this._isModal = true;
        this.destroy$ = new Subject();
        /**
         * The default `tabindex` attribute for the component
         *
         * @hidden
         */
        this.tabindex = -1;
        this._titleId = IgxDialogComponent.NEXT_ID++ + '_title';
        this._overlayDefaultSettings = {
            positionStrategy: new GlobalPositionStrategy(this._animaitonSettings),
            scrollStrategy: new NoOpScrollStrategy(),
            modal: this.isModal,
            closeOnOutsideClick: this.closeOnOutsideSelect
        };
    }
    /**
     * @return {?}
     */
    get isModal() {
        return this._isModal;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set isModal(val) {
        this._overlayDefaultSettings.modal = val;
        this._isModal = val;
    }
    /**
     * An \@Input property that allows you to enable the "close on click outside the dialog". By default it's disabled.
     * ```html
     * <igx-dialog closeOnOutsideSelect="true" leftButtonLabel="Cancel" (onLeftButtonSelect)="dialog.close()"
     * rightButtonLabel="OK" rightButtonRipple="#4CAF50" (onRightButtonSelect)="onDialogOKSelected($event)">
     * </igx-dialog>
     * ```
     * @return {?}
     */
    get closeOnOutsideSelect() {
        return this._closeOnOutsideSelect;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set closeOnOutsideSelect(val) {
        this._overlayDefaultSettings.closeOnOutsideClick = val;
        this._closeOnOutsideSelect = val;
    }
    /**
     * @hidden
     * @return {?}
     */
    get element() {
        return this.elementRef.nativeElement;
    }
    /**
     * Returns the value of state. Possible state values are "open" or "close".
     * ```typescript
     * \@ViewChild("MyDialog")
     * public dialog: IgxDialogComponent;
     * ngAfterViewInit() {
     *    let dialogState = this.dialog.state;
     * }
     * ```
     * @return {?}
     */
    get state() {
        return this.isOpen ? 'open' : 'close';
    }
    /**
     * Returns whether the dialog is visible to the end user.
     * ```typescript
     * \@ViewChild("MyDialog")
     * public dialog: IgxDialogComponent;
     * ngAfterViewInit() {
     *    let dialogOpen = this.dialog.isOpen;
     * }
     * ```
     * @return {?}
     */
    get isOpen() {
        return !this.toggleRef.collapsed;
    }
    /**
     * @return {?}
     */
    get isCollapsed() {
        return this.toggleRef.collapsed;
    }
    /**
     * Returns the value of the role of the dialog. The valid values are `dialog`, `alertdialog`, `alert`.
     * ```typescript
     * \@ViewChild("MyDialog")
     * public dialog: IgxDialogComponent;
     * ngAfterViewInit() {
     *    let dialogRole = this.dialog.role;
     * }
     * ```
     * @return {?}
     */
    get role() {
        if (this.leftButtonLabel !== '' && this.rightButtonLabel !== '') {
            return 'dialog';
        }
        else if (this.leftButtonLabel !== '' ||
            this.rightButtonLabel !== '') {
            return 'alertdialog';
        }
        else {
            return 'alert';
        }
    }
    /**
     * Returns the value of the title id.
     * ```typescript
     * \@ViewChild("MyDialog")
     * public dialog: IgxDialogComponent;
     * ngAfterViewInit() {
     *    let dialogTitle = this.dialog.titleId;
     * }
     * ```
     * @return {?}
     */
    get titleId() {
        return this._titleId;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.toggleRef.onClosing.pipe(takeUntil(this.destroy$)).subscribe(() => this.emitCloseFromDialog());
    }
    /**
     * @private
     * @return {?}
     */
    emitCloseFromDialog() {
        this.onClose.emit({ dialog: this, event: null });
    }
    /**
     * A method that opens the dialog.
     * \@memberOf {\@link IgxDialogComponent}
     * ```html
     * <button (click)="dialog.open() igxButton="raised" igxButtonColor="white" igxRipple="white">Trigger Dialog</button>
     * <igx-dialog #dialog></igx-dialog>
     * ```
     * @param {?=} overlaySettings
     * @return {?}
     */
    open(overlaySettings = this._overlayDefaultSettings) {
        this.toggleRef.open(overlaySettings);
        this.onOpen.emit({ dialog: this, event: null });
        if (!this.leftButtonLabel && !this.rightButtonLabel) {
            this.toggleRef.element.focus();
        }
    }
    /**
     * A method that that closes the dialog.
     * \@memberOf {\@link IgxDialogComponent}
     * ```html
     * <button (click)="dialog.close() igxButton="raised" igxButtonColor="white" igxRipple="white">Trigger Dialog</button>
     * <igx-dialog #dialog></igx-dialog>
     * ```
     * @return {?}
     */
    close() {
        // `onClose` will emit from `toggleRef.onClosing` subscription
        this.toggleRef.close();
    }
    /**
     * A method that opens/closes the dialog.
     * \@memberOf {\@link IgxDialogComponent}
     * ```html
     * <button (click)="dialog.toggle() igxButton="raised" igxButtonColor="white" igxRipple="white">Trigger Dialog</button>
     * <igx-dialog #dialog></igx-dialog>
     * ```
     * @return {?}
     */
    toggle() {
        this.isOpen ? this.close() : this.open();
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onDialogSelected(event) {
        event.stopPropagation();
        if (this.isOpen &&
            this.closeOnOutsideSelect &&
            event.target.classList.contains(IgxDialogComponent.DIALOG_CLASS)) {
            this.close();
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onInternalLeftButtonSelect(event) {
        this.onLeftButtonSelect.emit({ dialog: this, event });
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onInternalRightButtonSelect(event) {
        this.onRightButtonSelect.emit({ dialog: this, event });
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        if (this.navService && this.id) {
            this.navService.add(this.id, this);
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        if (this.navService && this.id) {
            this.navService.remove(this.id);
        }
    }
}
IgxDialogComponent.NEXT_ID = 1;
IgxDialogComponent.DIALOG_CLASS = 'igx-dialog';
IgxDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-dialog',
                template: "<div tabindex=\"0\" #dialog class=\"igx-dialog\" igxToggle (click)=\"onDialogSelected($event)\">\n    <div #dialogWindow class=\"igx-dialog__window\"  [attr.role]=\"role\" [attr.aria-labelledby]=\"titleId\">\n\n        <div *ngIf=\"title\" [attr.id]=\"titleId\" class=\"igx-dialog__window-title\">\n            {{ title }}\n        </div>\n        <ng-content *ngIf=\"!title\" select=\"igx-dialog-title,[igxDialogTitle]\"></ng-content>\n\n        <div class=\"igx-dialog__window-content\" *ngIf=\"message\">{{ message }}</div>\n        <ng-content *ngIf=\"!message\"></ng-content>\n\n        <div *ngIf=\"leftButtonLabel || rightButtonLabel\" class=\"igx-dialog__window-actions\">\n            <button *ngIf=\"leftButtonLabel\" type=\"button\" [igxFocus]=\"isOpen\" igxButton=\"{{ leftButtonType }}\" igxButtonColor=\"{{ leftButtonColor }}\" igxButtonBackground=\"{{ leftButtonBackgroundColor }}\"\n                igxRipple=\"{{ leftButtonRipple }}\" (click)=\"onInternalLeftButtonSelect($event)\">\n                {{ leftButtonLabel }}\n            </button>\n            <button *ngIf=\"rightButtonLabel\" type=\"button\" [igxFocus]=\"isOpen\" igxButton=\"{{ rightButtonType }}\" igxButtonColor=\"{{ rightButtonColor }}\" igxButtonBackground=\"{{ rightButtonBackgroundColor }}\"\n                igxRipple=\"{{ rightButtonRipple }}\" (click)=\"onInternalRightButtonSelect($event)\">\n                {{ rightButtonLabel }}\n            </button>\n        </div>\n        <ng-content *ngIf=\"!leftButtonLabel && !rightButtonLabel\" select=\"igx-dialog-actions,[igxDialogActions]\"></ng-content>\n\n    </div>\n</div>\n"
            }] }
];
/** @nocollapse */
IgxDialogComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: IgxNavigationService, decorators: [{ type: Optional }] }
];
IgxDialogComponent.propDecorators = {
    toggleRef: [{ type: ViewChild, args: [IgxToggleDirective, { static: true },] }],
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    isModal: [{ type: Input }],
    title: [{ type: Input }],
    message: [{ type: Input }],
    leftButtonLabel: [{ type: Input }],
    leftButtonType: [{ type: Input }],
    leftButtonColor: [{ type: Input }],
    leftButtonBackgroundColor: [{ type: Input }],
    leftButtonRipple: [{ type: Input }],
    rightButtonLabel: [{ type: Input }],
    rightButtonType: [{ type: Input }],
    rightButtonColor: [{ type: Input }],
    rightButtonBackgroundColor: [{ type: Input }],
    rightButtonRipple: [{ type: Input }],
    closeOnOutsideSelect: [{ type: Input }],
    onOpen: [{ type: Output }],
    onClose: [{ type: Output }],
    onLeftButtonSelect: [{ type: Output }],
    onRightButtonSelect: [{ type: Output }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    isOpen: [{ type: Input }],
    isCollapsed: [{ type: HostBinding, args: ['class.igx-dialog--hidden',] }],
    role: [{ type: Input }],
    titleId: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxDialogComponent.NEXT_ID;
    /**
     * @type {?}
     * @private
     */
    IgxDialogComponent.DIALOG_CLASS;
    /** @type {?} */
    IgxDialogComponent.prototype.toggleRef;
    /**
     * An \@Input property that sets the value of the `id` attribute. If not provided it will be automatically generated.
     * ```html
     * <igx-dialog [id]="'igx-dialog-56'" #alert title="Notification" leftButtonLabel="OK" (onLeftButtonSelect)="alert.close()"></igx-dialog>
     * ```
     * @type {?}
     */
    IgxDialogComponent.prototype.id;
    /**
     * An \@Input property controlling the `title` of the dialog.
     * ```html
     * <igx-dialog title="Notification" #alert leftButtonLabel="OK" (onLeftButtonSelect)="alert.close()"></igx-dialog>
     * ```
     * @type {?}
     */
    IgxDialogComponent.prototype.title;
    /**
     *  An \@Input property controlling the `message` of the dialog.
     * ```html
     * <igx-dialog message="Your email was sent!" #alert leftButtonLabel="OK" (onLeftButtonSelect)="alert.close()"></igx-dialog>
     * ```
     * @type {?}
     */
    IgxDialogComponent.prototype.message;
    /**
     * An \@Input property to set the `label` of the left button of the dialog.
     * ```html
     * <igx-dialog leftButtonLabel="OKAY" #alert title="Notification"  (onLeftButtonSelect)="alert.close()"></igx-dialog>
     * ```
     * @type {?}
     */
    IgxDialogComponent.prototype.leftButtonLabel;
    /**
     * An \@Input property to set the left button `type`. The types are `flat`, `raised` and `fab`.
     * The `flat` type button is a rectangle and doesn't have a shadow. <br>
     * The `raised` type button is also a rectangle but has a shadow. <br>
     * The `fab` type button is a circle with a shadow. <br>
     * The default value is `flat`.
     * ```html
     * <igx-dialog leftButtonType="raised" leftButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
     * ```
     * @type {?}
     */
    IgxDialogComponent.prototype.leftButtonType;
    /**
     * An \@Input property to set the left button color. The property accepts all valid CSS color property values.
     * ```html
     * <igx-dialog leftButtonColor="yellow" leftButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
     * ```
     * @type {?}
     */
    IgxDialogComponent.prototype.leftButtonColor;
    /**
     * An \@Input property to set the left button `background-color`. The property accepts all valid CSS color property values.
     * ```html
     * <igx-dialog leftButtonBackgroundColor="black" leftButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
     * ```
     * @type {?}
     */
    IgxDialogComponent.prototype.leftButtonBackgroundColor;
    /**
     * An \@Input property to set the left button `ripple`. The `ripple` animates a click/tap to a component as a series of fading waves.
     * The property accepts all valid CSS color property values.
     * ```html
     * <igx-dialog leftButtonRipple="green" leftButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
     * ```
     * @type {?}
     */
    IgxDialogComponent.prototype.leftButtonRipple;
    /**
     * An \@Input property to set the `label` of the right button of the dialog.
     * ```html
     * <igx-dialog rightButtonLabel="OKAY" #alert title="Notification"  (onLeftButtonSelect)="alert.close()"></igx-dialog>
     * ```
     * @type {?}
     */
    IgxDialogComponent.prototype.rightButtonLabel;
    /**
     * An \@Input property to set the right button `type`. The types are `flat`, `raised` and `fab`.
     * The `flat` type button is a rectangle and doesn't have a shadow. <br>
     * The `raised` type button is also a rectangle but has a shadow. <br>
     * The `fab` type button is a circle with a shadow. <br>
     * The default value is `flat`.
     * ```html
     * <igx-dialog rightButtonType="fab" rightButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
     * ```
     * @type {?}
     */
    IgxDialogComponent.prototype.rightButtonType;
    /**
     * An \@Input property to set the right button `color`. The property accepts all valid CSS color property values.
     * ```html
     * <igx-dialog rightButtonColor="yellow" rightButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
     * ```
     * @type {?}
     */
    IgxDialogComponent.prototype.rightButtonColor;
    /**
     * An \@Input property to set the right button `background-color`. The property accepts all valid CSS color property values.
     * ```html
     * <igx-dialog rightButtonBackgroundColor="black" rightButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
     * ```
     * @type {?}
     */
    IgxDialogComponent.prototype.rightButtonBackgroundColor;
    /**
     * An \@Input property to set the right button `ripple`.
     * ```html
     * <igx-dialog rightButtonRipple="green" rightButtonLabel="OKAY" #alert (onLeftButtonSelect)="alert.close()"></igx-dialog>
     * ```
     * @type {?}
     */
    IgxDialogComponent.prototype.rightButtonRipple;
    /**
     * An event that is emitted when the dialog is opened.
     * ```html
     * <igx-dialog (onOpen)="onDialogOpenHandler($event)" (onLeftButtonSelect)="dialog.close()" rightButtonLabel="OK">
     * </igx-dialog>
     * ```
     * @type {?}
     */
    IgxDialogComponent.prototype.onOpen;
    /**
     * An event that is emitted when the dialog is closed.
     * ```html
     * <igx-dialog (onClose)="onDialogCloseHandler($event)" title="Confirmation" leftButtonLabel="Cancel" rightButtonLabel="OK">
     * </igx-dialog>
     * ```
     * @type {?}
     */
    IgxDialogComponent.prototype.onClose;
    /**
     * An event that is emitted when the left button is clicked.
     * ```html
     * <igx-dialog (onLeftButtonSelect)="onDialogOKSelected($event)" #dialog leftButtonLabel="OK" rightButtonLabel="Cancel">
     * </igx-dialog>
     * ```
     * @type {?}
     */
    IgxDialogComponent.prototype.onLeftButtonSelect;
    /**
     * An event that is emitted when the right button is clicked.
     * ```html
     * <igx-dialog (onRightButtonSelect)="onDialogOKSelected($event)"
     * #dialog title="Confirmation" (onLeftButtonSelect)="dialog.close()" rightButtonLabel="OK"
     * rightButtonRipple="#4CAF50" closeOnOutsideSelect="true">
     * </igx-dialog>
     * ```
     * @type {?}
     */
    IgxDialogComponent.prototype.onRightButtonSelect;
    /**
     * @type {?}
     * @private
     */
    IgxDialogComponent.prototype._animaitonSettings;
    /**
     * @type {?}
     * @private
     */
    IgxDialogComponent.prototype._overlayDefaultSettings;
    /**
     * @type {?}
     * @private
     */
    IgxDialogComponent.prototype._closeOnOutsideSelect;
    /**
     * @type {?}
     * @private
     */
    IgxDialogComponent.prototype._isModal;
    /**
     * @type {?}
     * @protected
     */
    IgxDialogComponent.prototype.destroy$;
    /**
     * The default `tabindex` attribute for the component
     *
     * @hidden
     * @type {?}
     */
    IgxDialogComponent.prototype.tabindex;
    /**
     * @type {?}
     * @private
     */
    IgxDialogComponent.prototype._titleId;
    /**
     * @type {?}
     * @private
     */
    IgxDialogComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    IgxDialogComponent.prototype.navService;
}
/**
 * @record
 */
export function IDialogEventArgs() { }
if (false) {
    /** @type {?} */
    IDialogEventArgs.prototype.dialog;
    /** @type {?} */
    IDialogEventArgs.prototype.event;
}
/**
 * @hidden
 */
export class IgxDialogModule {
}
IgxDialogModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxDialogComponent, IgxDialogTitleDirective, IgxDialogActionsDirective],
                exports: [IgxDialogComponent, IgxDialogTitleDirective, IgxDialogActionsDirective],
                imports: [CommonModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxFocusModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNILFNBQVMsRUFFVCxVQUFVLEVBQ1YsWUFBWSxFQUVaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsUUFBUSxFQUdSLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLHVCQUF1QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekYsT0FBTyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzVGLE9BQU8sRUFBbUIsc0JBQXNCLEVBQUUsa0JBQWtCLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztJQUVqRSxTQUFTLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJqQixNQUFNLE9BQU8s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SUFDM0IsZ0NBQW9EOztJQUVwRCx1Q0FDcUM7Ozs7Ozs7O0lBUXJDLGdDQUV3Qzs7Ozs7Ozs7SUFrQnhDLG1DQUNrQjs7Ozs7Ozs7SUFRbEIscUNBQ29COzs7Ozs7OztJQVFwQiw2Q0FDNEI7Ozs7Ozs7Ozs7OztJQVk1Qiw0Q0FDK0I7Ozs7Ozs7O0lBTy9CLDZDQUM0Qjs7Ozs7Ozs7SUFRNUIsdURBQ3NDOzs7Ozs7Ozs7SUFTdEMsOENBQzZCOzs7Ozs7OztJQVE3Qiw4Q0FDNkI7Ozs7Ozs7Ozs7OztJQVk3Qiw2Q0FDZ0M7Ozs7Ozs7O0lBUWhDLDhDQUM2Qjs7Ozs7Ozs7SUFRN0Isd0RBQ3VDOzs7Ozs7OztJQVF2QywrQ0FDOEI7Ozs7Ozs7OztJQTJCOUIsb0NBQ3FEOzs7Ozs7Ozs7SUFTckQscUNBQ3NEOzs7Ozs7Ozs7SUFTdEQsZ0RBQ2lFOzs7Ozs7Ozs7OztJQVdqRSxpREFDa0U7Ozs7O0lBRWxFLGdEQUdFOzs7OztJQUVGLHFEQUFpRDs7Ozs7SUFDakQsbURBQXNDOzs7OztJQUN0QyxzQ0FBd0I7Ozs7O0lBQ3hCLHNDQUE0Qzs7Ozs7OztJQWM1QyxzQ0FDcUI7Ozs7O0lBRXJCLHNDQUF5Qjs7Ozs7SUE0RXJCLHdDQUE4Qjs7Ozs7SUFDOUIsd0NBQW9EOzs7OztBQThHNUQsc0NBR0M7OztJQUZHLGtDQUEyQjs7SUFDM0IsaUNBQWE7Ozs7O0FBV2pCLE1BQU0sT0FBTyxlQUFlOzs7WUFMM0IsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLHVCQUF1QixFQUFFLHlCQUF5QixDQUFDO2dCQUN0RixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSx1QkFBdUIsRUFBRSx5QkFBeUIsQ0FBQztnQkFDakYsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGNBQWMsQ0FBQzthQUM3RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUFuaW1hdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBmb3J3YXJkUmVmLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LFxuICAgIE5nTW9kdWxlLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3B0aW9uYWwsXG4gICAgT3V0cHV0LFxuICAgIFZpZXdDaGlsZCxcbiAgICBBZnRlckNvbnRlbnRJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSWd4TmF2aWdhdGlvblNlcnZpY2UsIElUb2dnbGVWaWV3IH0gZnJvbSAnLi4vY29yZS9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IElneEJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvYnV0dG9uL2J1dHRvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4UmlwcGxlTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9yaXBwbGUvcmlwcGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hEaWFsb2dBY3Rpb25zRGlyZWN0aXZlLCBJZ3hEaWFsb2dUaXRsZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlhbG9nLmRpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgSWd4VG9nZ2xlTW9kdWxlLCBJZ3hUb2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE92ZXJsYXlTZXR0aW5ncywgR2xvYmFsUG9zaXRpb25TdHJhdGVneSwgTm9PcFNjcm9sbFN0cmF0ZWd5LCBQb3NpdGlvblNldHRpbmdzIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgc2xpZGVJbkJvdHRvbSwgc2xpZGVPdXRUb3AgfSBmcm9tICcuLi9hbmltYXRpb25zL3NsaWRlL2luZGV4JztcbmltcG9ydCB7IElneEZvY3VzTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9mb2N1cy9mb2N1cy5kaXJlY3RpdmUnO1xuXG5sZXQgRElBTE9HX0lEID0gMDtcbi8qKlxuICogKipJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgRGlhbG9nIFdpbmRvdyoqIC1cbiAqIFtEb2N1bWVudGF0aW9uXShodHRwczovL3d3dy5pbmZyYWdpc3RpY3MuY29tL3Byb2R1Y3RzL2lnbml0ZS11aS1hbmd1bGFyL2FuZ3VsYXIvY29tcG9uZW50cy9kaWFsb2cuaHRtbClcbiAqXG4gKiBUaGUgSWduaXRlIFVJIERpYWxvZyBXaW5kb3cgcHJlc2VudHMgYSBkaWFsb2cgd2luZG93IHRvIHRoZSB1c2VyIHdoaWNoIGNhbiBzaW1wbHkgZGlzcGxheSBtZXNzYWdlcyBvciBkaXNwbGF5XG4gKiBtb3JlIGNvbXBsaWNhdGVkIHZpc3VhbHMgc3VjaCBhcyBhIHVzZXIgc2lnbi1pbiBmb3JtLiAgSXQgYWxzbyBwcm92aWRlcyBhIHJpZ2h0IGFuZCBsZWZ0IGJ1dHRvblxuICogd2hpY2ggY2FuIGJlIHVzZWQgZm9yIGN1c3RvbSBhY3Rpb25zLlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIChjbGljayk9XCJmb3JtLm9wZW4oKVwiPlNob3cgRGlhbG9nPC9idXR0b24+XG4gKiA8aWd4LWRpYWxvZyAjZm9ybSB0aXRsZT1cIlNpZ24gSW5cIiByaWdodEJ1dHRvbkxhYmVsPVwiT0tcIj5cbiAqICAgPGRpdj5cbiAqICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZ3hJbnB1dC8+XG4gKiAgICAgPGxhYmVsIGlneExhYmVsPlVzZXJuYW1lPC9sYWJlbD5cbiAqICAgPC9kaXY+XG4gKiAgIDxkaXY+XG4gKiAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlneElucHV0Lz5cbiAqICAgICA8bGFiZWwgaWd4TGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxuICogICA8L2Rpdj5cbiAqIDwvaWd4LWRpYWxvZz5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lneC1kaWFsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIElUb2dnbGVWaWV3LCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgTkVYVF9JRCA9IDE7XG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRElBTE9HX0NMQVNTID0gJ2lneC1kaWFsb2cnO1xuXG4gICAgQFZpZXdDaGlsZChJZ3hUb2dnbGVEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIHRvZ2dsZVJlZjogSWd4VG9nZ2xlRGlyZWN0aXZlO1xuXG4gICAgLyoqXG4gICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYGlkYCBhdHRyaWJ1dGUuIElmIG5vdCBwcm92aWRlZCBpdCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkLlxuICAgICpgYGBodG1sXG4gICAgKjxpZ3gtZGlhbG9nIFtpZF09XCInaWd4LWRpYWxvZy01NidcIiAjYWxlcnQgdGl0bGU9XCJOb3RpZmljYXRpb25cIiBsZWZ0QnV0dG9uTGFiZWw9XCJPS1wiIChvbkxlZnRCdXR0b25TZWxlY3QpPVwiYWxlcnQuY2xvc2UoKVwiPjwvaWd4LWRpYWxvZz5cbiAgICAqYGBgXG4gICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlkID0gYGlneC1kaWFsb2ctJHtESUFMT0dfSUQrK31gO1xuXG4gICAgQElucHV0KClcbiAgICBnZXQgaXNNb2RhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzTW9kYWw7XG4gICAgfVxuXG4gICAgc2V0IGlzTW9kYWwodmFsOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX292ZXJsYXlEZWZhdWx0U2V0dGluZ3MubW9kYWwgPSB2YWw7XG4gICAgICAgIHRoaXMuX2lzTW9kYWwgPSB2YWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBBbiBASW5wdXQgcHJvcGVydHkgY29udHJvbGxpbmcgdGhlIGB0aXRsZWAgb2YgdGhlIGRpYWxvZy5cbiAgICAqYGBgaHRtbFxuICAgICo8aWd4LWRpYWxvZyB0aXRsZT1cIk5vdGlmaWNhdGlvblwiICNhbGVydCBsZWZ0QnV0dG9uTGFiZWw9XCJPS1wiIChvbkxlZnRCdXR0b25TZWxlY3QpPVwiYWxlcnQuY2xvc2UoKVwiPjwvaWd4LWRpYWxvZz5cbiAgICAqYGBgXG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0aXRsZSA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogIEFuIEBJbnB1dCBwcm9wZXJ0eSBjb250cm9sbGluZyB0aGUgYG1lc3NhZ2VgIG9mIHRoZSBkaWFsb2cuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWRpYWxvZyBtZXNzYWdlPVwiWW91ciBlbWFpbCB3YXMgc2VudCFcIiAjYWxlcnQgbGVmdEJ1dHRvbkxhYmVsPVwiT0tcIiAob25MZWZ0QnV0dG9uU2VsZWN0KT1cImFsZXJ0LmNsb3NlKClcIj48L2lneC1kaWFsb2c+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtZXNzYWdlID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdG8gc2V0IHRoZSBgbGFiZWxgIG9mIHRoZSBsZWZ0IGJ1dHRvbiBvZiB0aGUgZGlhbG9nLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1kaWFsb2cgbGVmdEJ1dHRvbkxhYmVsPVwiT0tBWVwiICNhbGVydCB0aXRsZT1cIk5vdGlmaWNhdGlvblwiICAob25MZWZ0QnV0dG9uU2VsZWN0KT1cImFsZXJ0LmNsb3NlKClcIj48L2lneC1kaWFsb2c+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBsZWZ0QnV0dG9uTGFiZWwgPSAnJztcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0byBzZXQgdGhlIGxlZnQgYnV0dG9uIGB0eXBlYC4gVGhlIHR5cGVzIGFyZSBgZmxhdGAsIGByYWlzZWRgIGFuZCBgZmFiYC5cbiAgICAgKiBUaGUgYGZsYXRgIHR5cGUgYnV0dG9uIGlzIGEgcmVjdGFuZ2xlIGFuZCBkb2Vzbid0IGhhdmUgYSBzaGFkb3cuIDxicj5cbiAgICAgKiBUaGUgYHJhaXNlZGAgdHlwZSBidXR0b24gaXMgYWxzbyBhIHJlY3RhbmdsZSBidXQgaGFzIGEgc2hhZG93LiA8YnI+XG4gICAgICogVGhlIGBmYWJgIHR5cGUgYnV0dG9uIGlzIGEgY2lyY2xlIHdpdGggYSBzaGFkb3cuIDxicj5cbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBgZmxhdGAuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWRpYWxvZyBsZWZ0QnV0dG9uVHlwZT1cInJhaXNlZFwiIGxlZnRCdXR0b25MYWJlbD1cIk9LQVlcIiAjYWxlcnQgKG9uTGVmdEJ1dHRvblNlbGVjdCk9XCJhbGVydC5jbG9zZSgpXCI+PC9pZ3gtZGlhbG9nPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbGVmdEJ1dHRvblR5cGUgPSAnZmxhdCc7XG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRvIHNldCB0aGUgbGVmdCBidXR0b24gY29sb3IuIFRoZSBwcm9wZXJ0eSBhY2NlcHRzIGFsbCB2YWxpZCBDU1MgY29sb3IgcHJvcGVydHkgdmFsdWVzLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1kaWFsb2cgbGVmdEJ1dHRvbkNvbG9yPVwieWVsbG93XCIgbGVmdEJ1dHRvbkxhYmVsPVwiT0tBWVwiICNhbGVydCAob25MZWZ0QnV0dG9uU2VsZWN0KT1cImFsZXJ0LmNsb3NlKClcIj48L2lneC1kaWFsb2c+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBsZWZ0QnV0dG9uQ29sb3IgPSAnJztcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0byBzZXQgdGhlIGxlZnQgYnV0dG9uIGBiYWNrZ3JvdW5kLWNvbG9yYC4gVGhlIHByb3BlcnR5IGFjY2VwdHMgYWxsIHZhbGlkIENTUyBjb2xvciBwcm9wZXJ0eSB2YWx1ZXMuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWRpYWxvZyBsZWZ0QnV0dG9uQmFja2dyb3VuZENvbG9yPVwiYmxhY2tcIiBsZWZ0QnV0dG9uTGFiZWw9XCJPS0FZXCIgI2FsZXJ0IChvbkxlZnRCdXR0b25TZWxlY3QpPVwiYWxlcnQuY2xvc2UoKVwiPjwvaWd4LWRpYWxvZz5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGxlZnRCdXR0b25CYWNrZ3JvdW5kQ29sb3IgPSAnJztcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0byBzZXQgdGhlIGxlZnQgYnV0dG9uIGByaXBwbGVgLiBUaGUgYHJpcHBsZWAgYW5pbWF0ZXMgYSBjbGljay90YXAgdG8gYSBjb21wb25lbnQgYXMgYSBzZXJpZXMgb2YgZmFkaW5nIHdhdmVzLlxuICAgICAqIFRoZSBwcm9wZXJ0eSBhY2NlcHRzIGFsbCB2YWxpZCBDU1MgY29sb3IgcHJvcGVydHkgdmFsdWVzLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1kaWFsb2cgbGVmdEJ1dHRvblJpcHBsZT1cImdyZWVuXCIgbGVmdEJ1dHRvbkxhYmVsPVwiT0tBWVwiICNhbGVydCAob25MZWZ0QnV0dG9uU2VsZWN0KT1cImFsZXJ0LmNsb3NlKClcIj48L2lneC1kaWFsb2c+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBsZWZ0QnV0dG9uUmlwcGxlID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdG8gc2V0IHRoZSBgbGFiZWxgIG9mIHRoZSByaWdodCBidXR0b24gb2YgdGhlIGRpYWxvZy5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtZGlhbG9nIHJpZ2h0QnV0dG9uTGFiZWw9XCJPS0FZXCIgI2FsZXJ0IHRpdGxlPVwiTm90aWZpY2F0aW9uXCIgIChvbkxlZnRCdXR0b25TZWxlY3QpPVwiYWxlcnQuY2xvc2UoKVwiPjwvaWd4LWRpYWxvZz5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJpZ2h0QnV0dG9uTGFiZWwgPSAnJztcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0byBzZXQgdGhlIHJpZ2h0IGJ1dHRvbiBgdHlwZWAuIFRoZSB0eXBlcyBhcmUgYGZsYXRgLCBgcmFpc2VkYCBhbmQgYGZhYmAuXG4gICAgICogVGhlIGBmbGF0YCB0eXBlIGJ1dHRvbiBpcyBhIHJlY3RhbmdsZSBhbmQgZG9lc24ndCBoYXZlIGEgc2hhZG93LiA8YnI+XG4gICAgICogVGhlIGByYWlzZWRgIHR5cGUgYnV0dG9uIGlzIGFsc28gYSByZWN0YW5nbGUgYnV0IGhhcyBhIHNoYWRvdy4gPGJyPlxuICAgICAqIFRoZSBgZmFiYCB0eXBlIGJ1dHRvbiBpcyBhIGNpcmNsZSB3aXRoIGEgc2hhZG93LiA8YnI+XG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgYGZsYXRgLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1kaWFsb2cgcmlnaHRCdXR0b25UeXBlPVwiZmFiXCIgcmlnaHRCdXR0b25MYWJlbD1cIk9LQVlcIiAjYWxlcnQgKG9uTGVmdEJ1dHRvblNlbGVjdCk9XCJhbGVydC5jbG9zZSgpXCI+PC9pZ3gtZGlhbG9nPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmlnaHRCdXR0b25UeXBlID0gJ2ZsYXQnO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRvIHNldCB0aGUgcmlnaHQgYnV0dG9uIGBjb2xvcmAuIFRoZSBwcm9wZXJ0eSBhY2NlcHRzIGFsbCB2YWxpZCBDU1MgY29sb3IgcHJvcGVydHkgdmFsdWVzLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1kaWFsb2cgcmlnaHRCdXR0b25Db2xvcj1cInllbGxvd1wiIHJpZ2h0QnV0dG9uTGFiZWw9XCJPS0FZXCIgI2FsZXJ0IChvbkxlZnRCdXR0b25TZWxlY3QpPVwiYWxlcnQuY2xvc2UoKVwiPjwvaWd4LWRpYWxvZz5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJpZ2h0QnV0dG9uQ29sb3IgPSAnJztcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0byBzZXQgdGhlIHJpZ2h0IGJ1dHRvbiBgYmFja2dyb3VuZC1jb2xvcmAuIFRoZSBwcm9wZXJ0eSBhY2NlcHRzIGFsbCB2YWxpZCBDU1MgY29sb3IgcHJvcGVydHkgdmFsdWVzLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1kaWFsb2cgcmlnaHRCdXR0b25CYWNrZ3JvdW5kQ29sb3I9XCJibGFja1wiIHJpZ2h0QnV0dG9uTGFiZWw9XCJPS0FZXCIgI2FsZXJ0IChvbkxlZnRCdXR0b25TZWxlY3QpPVwiYWxlcnQuY2xvc2UoKVwiPjwvaWd4LWRpYWxvZz5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJpZ2h0QnV0dG9uQmFja2dyb3VuZENvbG9yID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdG8gc2V0IHRoZSByaWdodCBidXR0b24gYHJpcHBsZWAuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWRpYWxvZyByaWdodEJ1dHRvblJpcHBsZT1cImdyZWVuXCIgcmlnaHRCdXR0b25MYWJlbD1cIk9LQVlcIiAjYWxlcnQgKG9uTGVmdEJ1dHRvblNlbGVjdCk9XCJhbGVydC5jbG9zZSgpXCI+PC9pZ3gtZGlhbG9nPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmlnaHRCdXR0b25SaXBwbGUgPSAnJztcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGFsbG93cyB5b3UgdG8gZW5hYmxlIHRoZSBcImNsb3NlIG9uIGNsaWNrIG91dHNpZGUgdGhlIGRpYWxvZ1wiLiBCeSBkZWZhdWx0IGl0J3MgZGlzYWJsZWQuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWRpYWxvZyBjbG9zZU9uT3V0c2lkZVNlbGVjdD1cInRydWVcIiBsZWZ0QnV0dG9uTGFiZWw9XCJDYW5jZWxcIiAob25MZWZ0QnV0dG9uU2VsZWN0KT1cImRpYWxvZy5jbG9zZSgpXCJcbiAgICAgKnJpZ2h0QnV0dG9uTGFiZWw9XCJPS1wiIHJpZ2h0QnV0dG9uUmlwcGxlPVwiIzRDQUY1MFwiIChvblJpZ2h0QnV0dG9uU2VsZWN0KT1cIm9uRGlhbG9nT0tTZWxlY3RlZCgkZXZlbnQpXCI+XG4gICAgICo8L2lneC1kaWFsb2c+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBjbG9zZU9uT3V0c2lkZVNlbGVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nsb3NlT25PdXRzaWRlU2VsZWN0O1xuICAgIH1cblxuICAgIHNldCBjbG9zZU9uT3V0c2lkZVNlbGVjdCh2YWw6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fb3ZlcmxheURlZmF1bHRTZXR0aW5ncy5jbG9zZU9uT3V0c2lkZUNsaWNrID0gdmFsO1xuICAgICAgICB0aGlzLl9jbG9zZU9uT3V0c2lkZVNlbGVjdCA9IHZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBldmVudCB0aGF0IGlzIGVtaXR0ZWQgd2hlbiB0aGUgZGlhbG9nIGlzIG9wZW5lZC5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtZGlhbG9nIChvbk9wZW4pPVwib25EaWFsb2dPcGVuSGFuZGxlcigkZXZlbnQpXCIgKG9uTGVmdEJ1dHRvblNlbGVjdCk9XCJkaWFsb2cuY2xvc2UoKVwiIHJpZ2h0QnV0dG9uTGFiZWw9XCJPS1wiPlxuICAgICAqPC9pZ3gtZGlhbG9nPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8SURpYWxvZ0V2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEFuIGV2ZW50IHRoYXQgaXMgZW1pdHRlZCB3aGVuIHRoZSBkaWFsb2cgaXMgY2xvc2VkLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1kaWFsb2cgKG9uQ2xvc2UpPVwib25EaWFsb2dDbG9zZUhhbmRsZXIoJGV2ZW50KVwiIHRpdGxlPVwiQ29uZmlybWF0aW9uXCIgbGVmdEJ1dHRvbkxhYmVsPVwiQ2FuY2VsXCIgcmlnaHRCdXR0b25MYWJlbD1cIk9LXCI+XG4gICAgICo8L2lneC1kaWFsb2c+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8SURpYWxvZ0V2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEFuIGV2ZW50IHRoYXQgaXMgZW1pdHRlZCB3aGVuIHRoZSBsZWZ0IGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1kaWFsb2cgKG9uTGVmdEJ1dHRvblNlbGVjdCk9XCJvbkRpYWxvZ09LU2VsZWN0ZWQoJGV2ZW50KVwiICNkaWFsb2cgbGVmdEJ1dHRvbkxhYmVsPVwiT0tcIiByaWdodEJ1dHRvbkxhYmVsPVwiQ2FuY2VsXCI+XG4gICAgICo8L2lneC1kaWFsb2c+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25MZWZ0QnV0dG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxJRGlhbG9nRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgdGhhdCBpcyBlbWl0dGVkIHdoZW4gdGhlIHJpZ2h0IGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKjxpZ3gtZGlhbG9nIChvblJpZ2h0QnV0dG9uU2VsZWN0KT1cIm9uRGlhbG9nT0tTZWxlY3RlZCgkZXZlbnQpXCJcbiAgICAgKiNkaWFsb2cgdGl0bGU9XCJDb25maXJtYXRpb25cIiAob25MZWZ0QnV0dG9uU2VsZWN0KT1cImRpYWxvZy5jbG9zZSgpXCIgcmlnaHRCdXR0b25MYWJlbD1cIk9LXCJcbiAgICAgKnJpZ2h0QnV0dG9uUmlwcGxlPVwiIzRDQUY1MFwiIGNsb3NlT25PdXRzaWRlU2VsZWN0PVwidHJ1ZVwiPlxuICAgICAqPC9pZ3gtZGlhbG9nPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uUmlnaHRCdXR0b25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPElEaWFsb2dFdmVudEFyZ3M+KCk7XG5cbiAgICBwcml2YXRlIF9hbmltYWl0b25TZXR0aW5nczogUG9zaXRpb25TZXR0aW5ncyA9IHtcbiAgICAgICAgb3BlbkFuaW1hdGlvbjogdXNlQW5pbWF0aW9uKHNsaWRlSW5Cb3R0b20sIHsgcGFyYW1zOiB7IGZyb21Qb3NpdGlvbjogJ3RyYW5zbGF0ZVkoMTAwJSknIH0gfSksXG4gICAgICAgIGNsb3NlQW5pbWF0aW9uOiB1c2VBbmltYXRpb24oc2xpZGVPdXRUb3AsIHsgcGFyYW1zOiB7IHRvUG9zaXRpb246ICd0cmFuc2xhdGVZKC0xMDAlKScgfSB9KVxuICAgIH07XG5cbiAgICBwcml2YXRlIF9vdmVybGF5RGVmYXVsdFNldHRpbmdzOiBPdmVybGF5U2V0dGluZ3M7XG4gICAgcHJpdmF0ZSBfY2xvc2VPbk91dHNpZGVTZWxlY3QgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9pc01vZGFsID0gdHJ1ZTtcbiAgICBwcm90ZWN0ZWQgZGVzdHJveSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGB0YWJpbmRleGAgYXR0cmlidXRlIGZvciB0aGUgY29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgICBwdWJsaWMgdGFiaW5kZXggPSAtMTtcblxuICAgIHByaXZhdGUgX3RpdGxlSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHN0YXRlLiBQb3NzaWJsZSBzdGF0ZSB2YWx1ZXMgYXJlIFwib3BlblwiIG9yIFwiY2xvc2VcIi5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeURpYWxvZ1wiKVxuICAgICAqcHVibGljIGRpYWxvZzogSWd4RGlhbG9nQ29tcG9uZW50O1xuICAgICAqbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAqICAgIGxldCBkaWFsb2dTdGF0ZSA9IHRoaXMuZGlhbG9nLnN0YXRlO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgZ2V0IHN0YXRlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzT3BlbiA/ICdvcGVuJyA6ICdjbG9zZSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgdmlzaWJsZSB0byB0aGUgZW5kIHVzZXIuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwiTXlEaWFsb2dcIilcbiAgICAgKnB1YmxpYyBkaWFsb2c6IElneERpYWxvZ0NvbXBvbmVudDtcbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgKiAgICBsZXQgZGlhbG9nT3BlbiA9IHRoaXMuZGlhbG9nLmlzT3BlbjtcbiAgICAgKn1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBpc09wZW4oKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy50b2dnbGVSZWYuY29sbGFwc2VkO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWRpYWxvZy0taGlkZGVuJylcbiAgICBnZXQgaXNDb2xsYXBzZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvZ2dsZVJlZi5jb2xsYXBzZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgcm9sZSBvZiB0aGUgZGlhbG9nLiBUaGUgdmFsaWQgdmFsdWVzIGFyZSBgZGlhbG9nYCwgYGFsZXJ0ZGlhbG9nYCwgYGFsZXJ0YC5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeURpYWxvZ1wiKVxuICAgICAqcHVibGljIGRpYWxvZzogSWd4RGlhbG9nQ29tcG9uZW50O1xuICAgICAqbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAqICAgIGxldCBkaWFsb2dSb2xlID0gdGhpcy5kaWFsb2cucm9sZTtcbiAgICAgKn1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCByb2xlKCkge1xuICAgICAgICBpZiAodGhpcy5sZWZ0QnV0dG9uTGFiZWwgIT09ICcnICYmIHRoaXMucmlnaHRCdXR0b25MYWJlbCAhPT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiAnZGlhbG9nJztcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIHRoaXMubGVmdEJ1dHRvbkxhYmVsICE9PSAnJyB8fFxuICAgICAgICAgICAgdGhpcy5yaWdodEJ1dHRvbkxhYmVsICE9PSAnJ1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiAnYWxlcnRkaWFsb2cnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdhbGVydCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSB0aXRsZSBpZC5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeURpYWxvZ1wiKVxuICAgICAqcHVibGljIGRpYWxvZzogSWd4RGlhbG9nQ29tcG9uZW50O1xuICAgICAqbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAqICAgIGxldCBkaWFsb2dUaXRsZSA9IHRoaXMuZGlhbG9nLnRpdGxlSWQ7XG4gICAgICp9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgdGl0bGVJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlSWQ7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuYXZTZXJ2aWNlOiBJZ3hOYXZpZ2F0aW9uU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLl90aXRsZUlkID0gSWd4RGlhbG9nQ29tcG9uZW50Lk5FWFRfSUQrKyArICdfdGl0bGUnO1xuXG4gICAgICAgIHRoaXMuX292ZXJsYXlEZWZhdWx0U2V0dGluZ3MgPSB7XG4gICAgICAgICAgICBwb3NpdGlvblN0cmF0ZWd5OiBuZXcgR2xvYmFsUG9zaXRpb25TdHJhdGVneSh0aGlzLl9hbmltYWl0b25TZXR0aW5ncyksXG4gICAgICAgICAgICBzY3JvbGxTdHJhdGVneTogbmV3IE5vT3BTY3JvbGxTdHJhdGVneSgpLFxuICAgICAgICAgICAgbW9kYWw6IHRoaXMuaXNNb2RhbCxcbiAgICAgICAgICAgIGNsb3NlT25PdXRzaWRlQ2xpY2s6IHRoaXMuY2xvc2VPbk91dHNpZGVTZWxlY3RcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlUmVmLm9uQ2xvc2luZy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuZW1pdENsb3NlRnJvbURpYWxvZygpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVtaXRDbG9zZUZyb21EaWFsb2coKSB7XG4gICAgICAgIHRoaXMub25DbG9zZS5lbWl0KHsgZGlhbG9nOiB0aGlzLCBldmVudDogbnVsbCB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIG1ldGhvZCB0aGF0IG9wZW5zIHRoZSBkaWFsb2cuXG4gICAgICogQG1lbWJlck9mIHtAbGluayBJZ3hEaWFsb2dDb21wb25lbnR9XG4gICAgICpgYGBodG1sXG4gICAgICo8YnV0dG9uIChjbGljayk9XCJkaWFsb2cub3BlbigpIGlneEJ1dHRvbj1cInJhaXNlZFwiIGlneEJ1dHRvbkNvbG9yPVwid2hpdGVcIiBpZ3hSaXBwbGU9XCJ3aGl0ZVwiPlRyaWdnZXIgRGlhbG9nPC9idXR0b24+XG4gICAgICo8aWd4LWRpYWxvZyAjZGlhbG9nPjwvaWd4LWRpYWxvZz5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBvcGVuKG92ZXJsYXlTZXR0aW5nczogT3ZlcmxheVNldHRpbmdzID0gdGhpcy5fb3ZlcmxheURlZmF1bHRTZXR0aW5ncykge1xuICAgICAgICB0aGlzLnRvZ2dsZVJlZi5vcGVuKG92ZXJsYXlTZXR0aW5ncyk7XG4gICAgICAgIHRoaXMub25PcGVuLmVtaXQoeyBkaWFsb2c6IHRoaXMsIGV2ZW50OiBudWxsIH0pO1xuICAgICAgICBpZiAoIXRoaXMubGVmdEJ1dHRvbkxhYmVsICYmICF0aGlzLnJpZ2h0QnV0dG9uTGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlUmVmLmVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqQSBtZXRob2QgdGhhdCB0aGF0IGNsb3NlcyB0aGUgZGlhbG9nLlxuICAgICAqQG1lbWJlck9mIHtAbGluayBJZ3hEaWFsb2dDb21wb25lbnR9XG4gICAgICpgYGBodG1sXG4gICAgICo8YnV0dG9uIChjbGljayk9XCJkaWFsb2cuY2xvc2UoKSBpZ3hCdXR0b249XCJyYWlzZWRcIiBpZ3hCdXR0b25Db2xvcj1cIndoaXRlXCIgaWd4UmlwcGxlPVwid2hpdGVcIj5UcmlnZ2VyIERpYWxvZzwvYnV0dG9uPlxuICAgICAqPGlneC1kaWFsb2cgI2RpYWxvZz48L2lneC1kaWFsb2c+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgICAgIC8vIGBvbkNsb3NlYCB3aWxsIGVtaXQgZnJvbSBgdG9nZ2xlUmVmLm9uQ2xvc2luZ2Agc3Vic2NyaXB0aW9uXG4gICAgICAgIHRoaXMudG9nZ2xlUmVmLmNsb3NlKCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBIG1ldGhvZCB0aGF0IG9wZW5zL2Nsb3NlcyB0aGUgZGlhbG9nLlxuICAgICAqQG1lbWJlck9mIHtAbGluayBJZ3hEaWFsb2dDb21wb25lbnR9XG4gICAgICpgYGBodG1sXG4gICAgICo8YnV0dG9uIChjbGljayk9XCJkaWFsb2cudG9nZ2xlKCkgaWd4QnV0dG9uPVwicmFpc2VkXCIgaWd4QnV0dG9uQ29sb3I9XCJ3aGl0ZVwiIGlneFJpcHBsZT1cIndoaXRlXCI+VHJpZ2dlciBEaWFsb2c8L2J1dHRvbj5cbiAgICAgKjxpZ3gtZGlhbG9nICNkaWFsb2c+PC9pZ3gtZGlhbG9nPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgcHVibGljIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPyB0aGlzLmNsb3NlKCkgOiB0aGlzLm9wZW4oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uRGlhbG9nU2VsZWN0ZWQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuICYmXG4gICAgICAgICAgICB0aGlzLmNsb3NlT25PdXRzaWRlU2VsZWN0ICYmXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKElneERpYWxvZ0NvbXBvbmVudC5ESUFMT0dfQ0xBU1MpXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBvbkludGVybmFsTGVmdEJ1dHRvblNlbGVjdChldmVudCkge1xuICAgICAgICB0aGlzLm9uTGVmdEJ1dHRvblNlbGVjdC5lbWl0KHsgZGlhbG9nOiB0aGlzLCBldmVudCB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uSW50ZXJuYWxSaWdodEJ1dHRvblNlbGVjdChldmVudCkge1xuICAgICAgICB0aGlzLm9uUmlnaHRCdXR0b25TZWxlY3QuZW1pdCh7IGRpYWxvZzogdGhpcywgZXZlbnQgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMubmF2U2VydmljZSAmJiB0aGlzLmlkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdlNlcnZpY2UuYWRkKHRoaXMuaWQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLm5hdlNlcnZpY2UgJiYgdGhpcy5pZCkge1xuICAgICAgICAgICAgdGhpcy5uYXZTZXJ2aWNlLnJlbW92ZSh0aGlzLmlkKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURpYWxvZ0V2ZW50QXJncyB7XG4gICAgZGlhbG9nOiBJZ3hEaWFsb2dDb21wb25lbnQ7XG4gICAgZXZlbnQ6IEV2ZW50O1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtJZ3hEaWFsb2dDb21wb25lbnQsIElneERpYWxvZ1RpdGxlRGlyZWN0aXZlLCBJZ3hEaWFsb2dBY3Rpb25zRGlyZWN0aXZlXSxcbiAgICBleHBvcnRzOiBbSWd4RGlhbG9nQ29tcG9uZW50LCBJZ3hEaWFsb2dUaXRsZURpcmVjdGl2ZSwgSWd4RGlhbG9nQWN0aW9uc0RpcmVjdGl2ZV0sXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSWd4VG9nZ2xlTW9kdWxlLCBJZ3hCdXR0b25Nb2R1bGUsIElneFJpcHBsZU1vZHVsZSwgSWd4Rm9jdXNNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIElneERpYWxvZ01vZHVsZSB7IH1cbiJdfQ==