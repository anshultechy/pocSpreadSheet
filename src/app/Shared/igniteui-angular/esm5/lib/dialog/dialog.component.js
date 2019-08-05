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
var DIALOG_ID = 0;
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
var IgxDialogComponent = /** @class */ (function () {
    function IgxDialogComponent(elementRef, navService) {
        this.elementRef = elementRef;
        this.navService = navService;
        /**
         * An \@Input property that sets the value of the `id` attribute. If not provided it will be automatically generated.
         * ```html
         * <igx-dialog [id]="'igx-dialog-56'" #alert title="Notification" leftButtonLabel="OK" (onLeftButtonSelect)="alert.close()"></igx-dialog>
         * ```
         */
        this.id = "igx-dialog-" + DIALOG_ID++;
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
    Object.defineProperty(IgxDialogComponent.prototype, "isModal", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isModal;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._overlayDefaultSettings.modal = val;
            this._isModal = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDialogComponent.prototype, "closeOnOutsideSelect", {
        /**
         * An @Input property that allows you to enable the "close on click outside the dialog". By default it's disabled.
         *```html
         *<igx-dialog closeOnOutsideSelect="true" leftButtonLabel="Cancel" (onLeftButtonSelect)="dialog.close()"
         *rightButtonLabel="OK" rightButtonRipple="#4CAF50" (onRightButtonSelect)="onDialogOKSelected($event)">
         *</igx-dialog>
         *```
         */
        get: /**
         * An \@Input property that allows you to enable the "close on click outside the dialog". By default it's disabled.
         * ```html
         * <igx-dialog closeOnOutsideSelect="true" leftButtonLabel="Cancel" (onLeftButtonSelect)="dialog.close()"
         * rightButtonLabel="OK" rightButtonRipple="#4CAF50" (onRightButtonSelect)="onDialogOKSelected($event)">
         * </igx-dialog>
         * ```
         * @return {?}
         */
        function () {
            return this._closeOnOutsideSelect;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._overlayDefaultSettings.closeOnOutsideClick = val;
            this._closeOnOutsideSelect = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDialogComponent.prototype, "element", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDialogComponent.prototype, "state", {
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
        get: /**
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
        function () {
            return this.isOpen ? 'open' : 'close';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDialogComponent.prototype, "isOpen", {
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
        get: /**
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
        function () {
            return !this.toggleRef.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDialogComponent.prototype, "isCollapsed", {
        get: /**
         * @return {?}
         */
        function () {
            return this.toggleRef.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDialogComponent.prototype, "role", {
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
        get: /**
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
        function () {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDialogComponent.prototype, "titleId", {
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
        get: /**
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
        function () {
            return this._titleId;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IgxDialogComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.toggleRef.onClosing.pipe(takeUntil(this.destroy$)).subscribe(function () { return _this.emitCloseFromDialog(); });
    };
    /**
     * @private
     * @return {?}
     */
    IgxDialogComponent.prototype.emitCloseFromDialog = /**
     * @private
     * @return {?}
     */
    function () {
        this.onClose.emit({ dialog: this, event: null });
    };
    /**
     * A method that opens the dialog.
     * @memberOf {@link IgxDialogComponent}
     *```html
     *<button (click)="dialog.open() igxButton="raised" igxButtonColor="white" igxRipple="white">Trigger Dialog</button>
     *<igx-dialog #dialog></igx-dialog>
     *```
     */
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
    IgxDialogComponent.prototype.open = /**
     * A method that opens the dialog.
     * \@memberOf {\@link IgxDialogComponent}
     * ```html
     * <button (click)="dialog.open() igxButton="raised" igxButtonColor="white" igxRipple="white">Trigger Dialog</button>
     * <igx-dialog #dialog></igx-dialog>
     * ```
     * @param {?=} overlaySettings
     * @return {?}
     */
    function (overlaySettings) {
        if (overlaySettings === void 0) { overlaySettings = this._overlayDefaultSettings; }
        this.toggleRef.open(overlaySettings);
        this.onOpen.emit({ dialog: this, event: null });
        if (!this.leftButtonLabel && !this.rightButtonLabel) {
            this.toggleRef.element.focus();
        }
    };
    /**
     *A method that that closes the dialog.
     *@memberOf {@link IgxDialogComponent}
     *```html
     *<button (click)="dialog.close() igxButton="raised" igxButtonColor="white" igxRipple="white">Trigger Dialog</button>
     *<igx-dialog #dialog></igx-dialog>
     *```
     */
    /**
     * A method that that closes the dialog.
     * \@memberOf {\@link IgxDialogComponent}
     * ```html
     * <button (click)="dialog.close() igxButton="raised" igxButtonColor="white" igxRipple="white">Trigger Dialog</button>
     * <igx-dialog #dialog></igx-dialog>
     * ```
     * @return {?}
     */
    IgxDialogComponent.prototype.close = /**
     * A method that that closes the dialog.
     * \@memberOf {\@link IgxDialogComponent}
     * ```html
     * <button (click)="dialog.close() igxButton="raised" igxButtonColor="white" igxRipple="white">Trigger Dialog</button>
     * <igx-dialog #dialog></igx-dialog>
     * ```
     * @return {?}
     */
    function () {
        // `onClose` will emit from `toggleRef.onClosing` subscription
        this.toggleRef.close();
    };
    /**
     * A method that opens/closes the dialog.
     *@memberOf {@link IgxDialogComponent}
     *```html
     *<button (click)="dialog.toggle() igxButton="raised" igxButtonColor="white" igxRipple="white">Trigger Dialog</button>
     *<igx-dialog #dialog></igx-dialog>
     *```
     */
    /**
     * A method that opens/closes the dialog.
     * \@memberOf {\@link IgxDialogComponent}
     * ```html
     * <button (click)="dialog.toggle() igxButton="raised" igxButtonColor="white" igxRipple="white">Trigger Dialog</button>
     * <igx-dialog #dialog></igx-dialog>
     * ```
     * @return {?}
     */
    IgxDialogComponent.prototype.toggle = /**
     * A method that opens/closes the dialog.
     * \@memberOf {\@link IgxDialogComponent}
     * ```html
     * <button (click)="dialog.toggle() igxButton="raised" igxButtonColor="white" igxRipple="white">Trigger Dialog</button>
     * <igx-dialog #dialog></igx-dialog>
     * ```
     * @return {?}
     */
    function () {
        this.isOpen ? this.close() : this.open();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxDialogComponent.prototype.onDialogSelected = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        if (this.isOpen &&
            this.closeOnOutsideSelect &&
            event.target.classList.contains(IgxDialogComponent.DIALOG_CLASS)) {
            this.close();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxDialogComponent.prototype.onInternalLeftButtonSelect = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onLeftButtonSelect.emit({ dialog: this, event: event });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxDialogComponent.prototype.onInternalRightButtonSelect = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onRightButtonSelect.emit({ dialog: this, event: event });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxDialogComponent.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.navService && this.id) {
            this.navService.add(this.id, this);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxDialogComponent.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.navService && this.id) {
            this.navService.remove(this.id);
        }
    };
    IgxDialogComponent.NEXT_ID = 1;
    IgxDialogComponent.DIALOG_CLASS = 'igx-dialog';
    IgxDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-dialog',
                    template: "<div tabindex=\"0\" #dialog class=\"igx-dialog\" igxToggle (click)=\"onDialogSelected($event)\">\n    <div #dialogWindow class=\"igx-dialog__window\"  [attr.role]=\"role\" [attr.aria-labelledby]=\"titleId\">\n\n        <div *ngIf=\"title\" [attr.id]=\"titleId\" class=\"igx-dialog__window-title\">\n            {{ title }}\n        </div>\n        <ng-content *ngIf=\"!title\" select=\"igx-dialog-title,[igxDialogTitle]\"></ng-content>\n\n        <div class=\"igx-dialog__window-content\" *ngIf=\"message\">{{ message }}</div>\n        <ng-content *ngIf=\"!message\"></ng-content>\n\n        <div *ngIf=\"leftButtonLabel || rightButtonLabel\" class=\"igx-dialog__window-actions\">\n            <button *ngIf=\"leftButtonLabel\" type=\"button\" [igxFocus]=\"isOpen\" igxButton=\"{{ leftButtonType }}\" igxButtonColor=\"{{ leftButtonColor }}\" igxButtonBackground=\"{{ leftButtonBackgroundColor }}\"\n                igxRipple=\"{{ leftButtonRipple }}\" (click)=\"onInternalLeftButtonSelect($event)\">\n                {{ leftButtonLabel }}\n            </button>\n            <button *ngIf=\"rightButtonLabel\" type=\"button\" [igxFocus]=\"isOpen\" igxButton=\"{{ rightButtonType }}\" igxButtonColor=\"{{ rightButtonColor }}\" igxButtonBackground=\"{{ rightButtonBackgroundColor }}\"\n                igxRipple=\"{{ rightButtonRipple }}\" (click)=\"onInternalRightButtonSelect($event)\">\n                {{ rightButtonLabel }}\n            </button>\n        </div>\n        <ng-content *ngIf=\"!leftButtonLabel && !rightButtonLabel\" select=\"igx-dialog-actions,[igxDialogActions]\"></ng-content>\n\n    </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    IgxDialogComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: IgxNavigationService, decorators: [{ type: Optional }] }
    ]; };
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
    return IgxDialogComponent;
}());
export { IgxDialogComponent };
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
var IgxDialogModule = /** @class */ (function () {
    function IgxDialogModule() {
    }
    IgxDialogModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxDialogComponent, IgxDialogTitleDirective, IgxDialogActionsDirective],
                    exports: [IgxDialogComponent, IgxDialogTitleDirective, IgxDialogActionsDirective],
                    imports: [CommonModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxFocusModule]
                },] }
    ];
    return IgxDialogModule;
}());
export { IgxDialogModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNILFNBQVMsRUFFVCxVQUFVLEVBQ1YsWUFBWSxFQUVaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsUUFBUSxFQUdSLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLHVCQUF1QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekYsT0FBTyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzVGLE9BQU8sRUFBbUIsc0JBQXNCLEVBQUUsa0JBQWtCLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztJQUVqRSxTQUFTLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JqQjtJQW1USSw0QkFD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O0lBQ2pELG1EQUFzQzs7Ozs7SUFDdEMsc0NBQXdCOzs7OztJQUN4QixzQ0FBNEM7Ozs7Ozs7SUFjNUMsc0NBQ3FCOzs7OztJQUVyQixzQ0FBeUI7Ozs7O0lBNEVyQix3Q0FBOEI7Ozs7O0lBQzlCLHdDQUFvRDs7Ozs7QUE4RzVELHNDQUdDOzs7SUFGRyxrQ0FBMkI7O0lBQzNCLGlDQUFhOzs7OztBQU1qQjtJQUFBO0lBSytCLENBQUM7O2dCQUwvQixRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsdUJBQXVCLEVBQUUseUJBQXlCLENBQUM7b0JBQ3RGLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLHVCQUF1QixFQUFFLHlCQUF5QixDQUFDO29CQUNqRixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsY0FBYyxDQUFDO2lCQUM3Rjs7SUFDOEIsc0JBQUM7Q0FBQSxBQUxoQyxJQUtnQztTQUFuQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQW5pbWF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgQ29udGVudENoaWxkLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIGZvcndhcmRSZWYsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSW5wdXQsXG4gICAgTmdNb2R1bGUsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBPcHRpb25hbCxcbiAgICBPdXRwdXQsXG4gICAgVmlld0NoaWxkLFxuICAgIEFmdGVyQ29udGVudEluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJZ3hOYXZpZ2F0aW9uU2VydmljZSwgSVRvZ2dsZVZpZXcgfSBmcm9tICcuLi9jb3JlL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgSWd4QnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9idXR0b24vYnV0dG9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hSaXBwbGVNb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3JpcHBsZS9yaXBwbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElneERpYWxvZ0FjdGlvbnNEaXJlY3RpdmUsIElneERpYWxvZ1RpdGxlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaWFsb2cuZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBJZ3hUb2dnbGVNb2R1bGUsIElneFRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvdG9nZ2xlL3RvZ2dsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgT3ZlcmxheVNldHRpbmdzLCBHbG9iYWxQb3NpdGlvblN0cmF0ZWd5LCBOb09wU2Nyb2xsU3RyYXRlZ3ksIFBvc2l0aW9uU2V0dGluZ3MgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBzbGlkZUluQm90dG9tLCBzbGlkZU91dFRvcCB9IGZyb20gJy4uL2FuaW1hdGlvbnMvc2xpZGUvaW5kZXgnO1xuaW1wb3J0IHsgSWd4Rm9jdXNNb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2ZvY3VzL2ZvY3VzLmRpcmVjdGl2ZSc7XG5cbmxldCBESUFMT0dfSUQgPSAwO1xuLyoqXG4gKiAqKklnbml0ZSBVSSBmb3IgQW5ndWxhciBEaWFsb2cgV2luZG93KiogLVxuICogW0RvY3VtZW50YXRpb25dKGh0dHBzOi8vd3d3LmluZnJhZ2lzdGljcy5jb20vcHJvZHVjdHMvaWduaXRlLXVpLWFuZ3VsYXIvYW5ndWxhci9jb21wb25lbnRzL2RpYWxvZy5odG1sKVxuICpcbiAqIFRoZSBJZ25pdGUgVUkgRGlhbG9nIFdpbmRvdyBwcmVzZW50cyBhIGRpYWxvZyB3aW5kb3cgdG8gdGhlIHVzZXIgd2hpY2ggY2FuIHNpbXBseSBkaXNwbGF5IG1lc3NhZ2VzIG9yIGRpc3BsYXlcbiAqIG1vcmUgY29tcGxpY2F0ZWQgdmlzdWFscyBzdWNoIGFzIGEgdXNlciBzaWduLWluIGZvcm0uICBJdCBhbHNvIHByb3ZpZGVzIGEgcmlnaHQgYW5kIGxlZnQgYnV0dG9uXG4gKiB3aGljaCBjYW4gYmUgdXNlZCBmb3IgY3VzdG9tIGFjdGlvbnMuXG4gKlxuICogRXhhbXBsZTpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gKGNsaWNrKT1cImZvcm0ub3BlbigpXCI+U2hvdyBEaWFsb2c8L2J1dHRvbj5cbiAqIDxpZ3gtZGlhbG9nICNmb3JtIHRpdGxlPVwiU2lnbiBJblwiIHJpZ2h0QnV0dG9uTGFiZWw9XCJPS1wiPlxuICogICA8ZGl2PlxuICogICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlneElucHV0Lz5cbiAqICAgICA8bGFiZWwgaWd4TGFiZWw+VXNlcm5hbWU8L2xhYmVsPlxuICogICA8L2Rpdj5cbiAqICAgPGRpdj5cbiAqICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWd4SW5wdXQvPlxuICogICAgIDxsYWJlbCBpZ3hMYWJlbD5QYXNzd29yZDwvbGFiZWw+XG4gKiAgIDwvZGl2PlxuICogPC9pZ3gtZGlhbG9nPlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LWRpYWxvZycsXG4gICAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctY29udGVudC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4RGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgSVRvZ2dsZVZpZXcsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgICBwcml2YXRlIHN0YXRpYyBORVhUX0lEID0gMTtcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBESUFMT0dfQ0xBU1MgPSAnaWd4LWRpYWxvZyc7XG5cbiAgICBAVmlld0NoaWxkKElneFRvZ2dsZURpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgdG9nZ2xlUmVmOiBJZ3hUb2dnbGVEaXJlY3RpdmU7XG5cbiAgICAvKipcbiAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBgaWRgIGF0dHJpYnV0ZS4gSWYgbm90IHByb3ZpZGVkIGl0IHdpbGwgYmUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQuXG4gICAgKmBgYGh0bWxcbiAgICAqPGlneC1kaWFsb2cgW2lkXT1cIidpZ3gtZGlhbG9nLTU2J1wiICNhbGVydCB0aXRsZT1cIk5vdGlmaWNhdGlvblwiIGxlZnRCdXR0b25MYWJlbD1cIk9LXCIgKG9uTGVmdEJ1dHRvblNlbGVjdCk9XCJhbGVydC5jbG9zZSgpXCI+PC9pZ3gtZGlhbG9nPlxuICAgICpgYGBcbiAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWQgPSBgaWd4LWRpYWxvZy0ke0RJQUxPR19JRCsrfWA7XG5cbiAgICBASW5wdXQoKVxuICAgIGdldCBpc01vZGFsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNNb2RhbDtcbiAgICB9XG5cbiAgICBzZXQgaXNNb2RhbCh2YWw6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fb3ZlcmxheURlZmF1bHRTZXR0aW5ncy5tb2RhbCA9IHZhbDtcbiAgICAgICAgdGhpcy5faXNNb2RhbCA9IHZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSBjb250cm9sbGluZyB0aGUgYHRpdGxlYCBvZiB0aGUgZGlhbG9nLlxuICAgICpgYGBodG1sXG4gICAgKjxpZ3gtZGlhbG9nIHRpdGxlPVwiTm90aWZpY2F0aW9uXCIgI2FsZXJ0IGxlZnRCdXR0b25MYWJlbD1cIk9LXCIgKG9uTGVmdEJ1dHRvblNlbGVjdCk9XCJhbGVydC5jbG9zZSgpXCI+PC9pZ3gtZGlhbG9nPlxuICAgICpgYGBcbiAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRpdGxlID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiAgQW4gQElucHV0IHByb3BlcnR5IGNvbnRyb2xsaW5nIHRoZSBgbWVzc2FnZWAgb2YgdGhlIGRpYWxvZy5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtZGlhbG9nIG1lc3NhZ2U9XCJZb3VyIGVtYWlsIHdhcyBzZW50IVwiICNhbGVydCBsZWZ0QnV0dG9uTGFiZWw9XCJPS1wiIChvbkxlZnRCdXR0b25TZWxlY3QpPVwiYWxlcnQuY2xvc2UoKVwiPjwvaWd4LWRpYWxvZz5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1lc3NhZ2UgPSAnJztcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0byBzZXQgdGhlIGBsYWJlbGAgb2YgdGhlIGxlZnQgYnV0dG9uIG9mIHRoZSBkaWFsb2cuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWRpYWxvZyBsZWZ0QnV0dG9uTGFiZWw9XCJPS0FZXCIgI2FsZXJ0IHRpdGxlPVwiTm90aWZpY2F0aW9uXCIgIChvbkxlZnRCdXR0b25TZWxlY3QpPVwiYWxlcnQuY2xvc2UoKVwiPjwvaWd4LWRpYWxvZz5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGxlZnRCdXR0b25MYWJlbCA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRvIHNldCB0aGUgbGVmdCBidXR0b24gYHR5cGVgLiBUaGUgdHlwZXMgYXJlIGBmbGF0YCwgYHJhaXNlZGAgYW5kIGBmYWJgLlxuICAgICAqIFRoZSBgZmxhdGAgdHlwZSBidXR0b24gaXMgYSByZWN0YW5nbGUgYW5kIGRvZXNuJ3QgaGF2ZSBhIHNoYWRvdy4gPGJyPlxuICAgICAqIFRoZSBgcmFpc2VkYCB0eXBlIGJ1dHRvbiBpcyBhbHNvIGEgcmVjdGFuZ2xlIGJ1dCBoYXMgYSBzaGFkb3cuIDxicj5cbiAgICAgKiBUaGUgYGZhYmAgdHlwZSBidXR0b24gaXMgYSBjaXJjbGUgd2l0aCBhIHNoYWRvdy4gPGJyPlxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGBmbGF0YC5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtZGlhbG9nIGxlZnRCdXR0b25UeXBlPVwicmFpc2VkXCIgbGVmdEJ1dHRvbkxhYmVsPVwiT0tBWVwiICNhbGVydCAob25MZWZ0QnV0dG9uU2VsZWN0KT1cImFsZXJ0LmNsb3NlKClcIj48L2lneC1kaWFsb2c+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBsZWZ0QnV0dG9uVHlwZSA9ICdmbGF0JztcbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdG8gc2V0IHRoZSBsZWZ0IGJ1dHRvbiBjb2xvci4gVGhlIHByb3BlcnR5IGFjY2VwdHMgYWxsIHZhbGlkIENTUyBjb2xvciBwcm9wZXJ0eSB2YWx1ZXMuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWRpYWxvZyBsZWZ0QnV0dG9uQ29sb3I9XCJ5ZWxsb3dcIiBsZWZ0QnV0dG9uTGFiZWw9XCJPS0FZXCIgI2FsZXJ0IChvbkxlZnRCdXR0b25TZWxlY3QpPVwiYWxlcnQuY2xvc2UoKVwiPjwvaWd4LWRpYWxvZz5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGxlZnRCdXR0b25Db2xvciA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRvIHNldCB0aGUgbGVmdCBidXR0b24gYGJhY2tncm91bmQtY29sb3JgLiBUaGUgcHJvcGVydHkgYWNjZXB0cyBhbGwgdmFsaWQgQ1NTIGNvbG9yIHByb3BlcnR5IHZhbHVlcy5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtZGlhbG9nIGxlZnRCdXR0b25CYWNrZ3JvdW5kQ29sb3I9XCJibGFja1wiIGxlZnRCdXR0b25MYWJlbD1cIk9LQVlcIiAjYWxlcnQgKG9uTGVmdEJ1dHRvblNlbGVjdCk9XCJhbGVydC5jbG9zZSgpXCI+PC9pZ3gtZGlhbG9nPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbGVmdEJ1dHRvbkJhY2tncm91bmRDb2xvciA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRvIHNldCB0aGUgbGVmdCBidXR0b24gYHJpcHBsZWAuIFRoZSBgcmlwcGxlYCBhbmltYXRlcyBhIGNsaWNrL3RhcCB0byBhIGNvbXBvbmVudCBhcyBhIHNlcmllcyBvZiBmYWRpbmcgd2F2ZXMuXG4gICAgICogVGhlIHByb3BlcnR5IGFjY2VwdHMgYWxsIHZhbGlkIENTUyBjb2xvciBwcm9wZXJ0eSB2YWx1ZXMuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWRpYWxvZyBsZWZ0QnV0dG9uUmlwcGxlPVwiZ3JlZW5cIiBsZWZ0QnV0dG9uTGFiZWw9XCJPS0FZXCIgI2FsZXJ0IChvbkxlZnRCdXR0b25TZWxlY3QpPVwiYWxlcnQuY2xvc2UoKVwiPjwvaWd4LWRpYWxvZz5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGxlZnRCdXR0b25SaXBwbGUgPSAnJztcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0byBzZXQgdGhlIGBsYWJlbGAgb2YgdGhlIHJpZ2h0IGJ1dHRvbiBvZiB0aGUgZGlhbG9nLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1kaWFsb2cgcmlnaHRCdXR0b25MYWJlbD1cIk9LQVlcIiAjYWxlcnQgdGl0bGU9XCJOb3RpZmljYXRpb25cIiAgKG9uTGVmdEJ1dHRvblNlbGVjdCk9XCJhbGVydC5jbG9zZSgpXCI+PC9pZ3gtZGlhbG9nPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmlnaHRCdXR0b25MYWJlbCA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRvIHNldCB0aGUgcmlnaHQgYnV0dG9uIGB0eXBlYC4gVGhlIHR5cGVzIGFyZSBgZmxhdGAsIGByYWlzZWRgIGFuZCBgZmFiYC5cbiAgICAgKiBUaGUgYGZsYXRgIHR5cGUgYnV0dG9uIGlzIGEgcmVjdGFuZ2xlIGFuZCBkb2Vzbid0IGhhdmUgYSBzaGFkb3cuIDxicj5cbiAgICAgKiBUaGUgYHJhaXNlZGAgdHlwZSBidXR0b24gaXMgYWxzbyBhIHJlY3RhbmdsZSBidXQgaGFzIGEgc2hhZG93LiA8YnI+XG4gICAgICogVGhlIGBmYWJgIHR5cGUgYnV0dG9uIGlzIGEgY2lyY2xlIHdpdGggYSBzaGFkb3cuIDxicj5cbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBgZmxhdGAuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWRpYWxvZyByaWdodEJ1dHRvblR5cGU9XCJmYWJcIiByaWdodEJ1dHRvbkxhYmVsPVwiT0tBWVwiICNhbGVydCAob25MZWZ0QnV0dG9uU2VsZWN0KT1cImFsZXJ0LmNsb3NlKClcIj48L2lneC1kaWFsb2c+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyByaWdodEJ1dHRvblR5cGUgPSAnZmxhdCc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdG8gc2V0IHRoZSByaWdodCBidXR0b24gYGNvbG9yYC4gVGhlIHByb3BlcnR5IGFjY2VwdHMgYWxsIHZhbGlkIENTUyBjb2xvciBwcm9wZXJ0eSB2YWx1ZXMuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWRpYWxvZyByaWdodEJ1dHRvbkNvbG9yPVwieWVsbG93XCIgcmlnaHRCdXR0b25MYWJlbD1cIk9LQVlcIiAjYWxlcnQgKG9uTGVmdEJ1dHRvblNlbGVjdCk9XCJhbGVydC5jbG9zZSgpXCI+PC9pZ3gtZGlhbG9nPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmlnaHRCdXR0b25Db2xvciA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRvIHNldCB0aGUgcmlnaHQgYnV0dG9uIGBiYWNrZ3JvdW5kLWNvbG9yYC4gVGhlIHByb3BlcnR5IGFjY2VwdHMgYWxsIHZhbGlkIENTUyBjb2xvciBwcm9wZXJ0eSB2YWx1ZXMuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWRpYWxvZyByaWdodEJ1dHRvbkJhY2tncm91bmRDb2xvcj1cImJsYWNrXCIgcmlnaHRCdXR0b25MYWJlbD1cIk9LQVlcIiAjYWxlcnQgKG9uTGVmdEJ1dHRvblNlbGVjdCk9XCJhbGVydC5jbG9zZSgpXCI+PC9pZ3gtZGlhbG9nPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmlnaHRCdXR0b25CYWNrZ3JvdW5kQ29sb3IgPSAnJztcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0byBzZXQgdGhlIHJpZ2h0IGJ1dHRvbiBgcmlwcGxlYC5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtZGlhbG9nIHJpZ2h0QnV0dG9uUmlwcGxlPVwiZ3JlZW5cIiByaWdodEJ1dHRvbkxhYmVsPVwiT0tBWVwiICNhbGVydCAob25MZWZ0QnV0dG9uU2VsZWN0KT1cImFsZXJ0LmNsb3NlKClcIj48L2lneC1kaWFsb2c+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyByaWdodEJ1dHRvblJpcHBsZSA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgYWxsb3dzIHlvdSB0byBlbmFibGUgdGhlIFwiY2xvc2Ugb24gY2xpY2sgb3V0c2lkZSB0aGUgZGlhbG9nXCIuIEJ5IGRlZmF1bHQgaXQncyBkaXNhYmxlZC5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtZGlhbG9nIGNsb3NlT25PdXRzaWRlU2VsZWN0PVwidHJ1ZVwiIGxlZnRCdXR0b25MYWJlbD1cIkNhbmNlbFwiIChvbkxlZnRCdXR0b25TZWxlY3QpPVwiZGlhbG9nLmNsb3NlKClcIlxuICAgICAqcmlnaHRCdXR0b25MYWJlbD1cIk9LXCIgcmlnaHRCdXR0b25SaXBwbGU9XCIjNENBRjUwXCIgKG9uUmlnaHRCdXR0b25TZWxlY3QpPVwib25EaWFsb2dPS1NlbGVjdGVkKCRldmVudClcIj5cbiAgICAgKjwvaWd4LWRpYWxvZz5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGNsb3NlT25PdXRzaWRlU2VsZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xvc2VPbk91dHNpZGVTZWxlY3Q7XG4gICAgfVxuXG4gICAgc2V0IGNsb3NlT25PdXRzaWRlU2VsZWN0KHZhbDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9vdmVybGF5RGVmYXVsdFNldHRpbmdzLmNsb3NlT25PdXRzaWRlQ2xpY2sgPSB2YWw7XG4gICAgICAgIHRoaXMuX2Nsb3NlT25PdXRzaWRlU2VsZWN0ID0gdmFsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIGV2ZW50IHRoYXQgaXMgZW1pdHRlZCB3aGVuIHRoZSBkaWFsb2cgaXMgb3BlbmVkLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1kaWFsb2cgKG9uT3Blbik9XCJvbkRpYWxvZ09wZW5IYW5kbGVyKCRldmVudClcIiAob25MZWZ0QnV0dG9uU2VsZWN0KT1cImRpYWxvZy5jbG9zZSgpXCIgcmlnaHRCdXR0b25MYWJlbD1cIk9LXCI+XG4gICAgICo8L2lneC1kaWFsb2c+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25PcGVuID0gbmV3IEV2ZW50RW1pdHRlcjxJRGlhbG9nRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgdGhhdCBpcyBlbWl0dGVkIHdoZW4gdGhlIGRpYWxvZyBpcyBjbG9zZWQuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWRpYWxvZyAob25DbG9zZSk9XCJvbkRpYWxvZ0Nsb3NlSGFuZGxlcigkZXZlbnQpXCIgdGl0bGU9XCJDb25maXJtYXRpb25cIiBsZWZ0QnV0dG9uTGFiZWw9XCJDYW5jZWxcIiByaWdodEJ1dHRvbkxhYmVsPVwiT0tcIj5cbiAgICAgKjwvaWd4LWRpYWxvZz5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxJRGlhbG9nRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgdGhhdCBpcyBlbWl0dGVkIHdoZW4gdGhlIGxlZnQgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LWRpYWxvZyAob25MZWZ0QnV0dG9uU2VsZWN0KT1cIm9uRGlhbG9nT0tTZWxlY3RlZCgkZXZlbnQpXCIgI2RpYWxvZyBsZWZ0QnV0dG9uTGFiZWw9XCJPS1wiIHJpZ2h0QnV0dG9uTGFiZWw9XCJDYW5jZWxcIj5cbiAgICAgKjwvaWd4LWRpYWxvZz5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkxlZnRCdXR0b25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPElEaWFsb2dFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBldmVudCB0aGF0IGlzIGVtaXR0ZWQgd2hlbiB0aGUgcmlnaHQgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgICogYGBgaHRtbFxuICAgICAqPGlneC1kaWFsb2cgKG9uUmlnaHRCdXR0b25TZWxlY3QpPVwib25EaWFsb2dPS1NlbGVjdGVkKCRldmVudClcIlxuICAgICAqI2RpYWxvZyB0aXRsZT1cIkNvbmZpcm1hdGlvblwiIChvbkxlZnRCdXR0b25TZWxlY3QpPVwiZGlhbG9nLmNsb3NlKClcIiByaWdodEJ1dHRvbkxhYmVsPVwiT0tcIlxuICAgICAqcmlnaHRCdXR0b25SaXBwbGU9XCIjNENBRjUwXCIgY2xvc2VPbk91dHNpZGVTZWxlY3Q9XCJ0cnVlXCI+XG4gICAgICo8L2lneC1kaWFsb2c+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25SaWdodEJ1dHRvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8SURpYWxvZ0V2ZW50QXJncz4oKTtcblxuICAgIHByaXZhdGUgX2FuaW1haXRvblNldHRpbmdzOiBQb3NpdGlvblNldHRpbmdzID0ge1xuICAgICAgICBvcGVuQW5pbWF0aW9uOiB1c2VBbmltYXRpb24oc2xpZGVJbkJvdHRvbSwgeyBwYXJhbXM6IHsgZnJvbVBvc2l0aW9uOiAndHJhbnNsYXRlWSgxMDAlKScgfSB9KSxcbiAgICAgICAgY2xvc2VBbmltYXRpb246IHVzZUFuaW1hdGlvbihzbGlkZU91dFRvcCwgeyBwYXJhbXM6IHsgdG9Qb3NpdGlvbjogJ3RyYW5zbGF0ZVkoLTEwMCUpJyB9IH0pXG4gICAgfTtcblxuICAgIHByaXZhdGUgX292ZXJsYXlEZWZhdWx0U2V0dGluZ3M6IE92ZXJsYXlTZXR0aW5ncztcbiAgICBwcml2YXRlIF9jbG9zZU9uT3V0c2lkZVNlbGVjdCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2lzTW9kYWwgPSB0cnVlO1xuICAgIHByb3RlY3RlZCBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgYHRhYmluZGV4YCBhdHRyaWJ1dGUgZm9yIHRoZSBjb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICAgIHB1YmxpYyB0YWJpbmRleCA9IC0xO1xuXG4gICAgcHJpdmF0ZSBfdGl0bGVJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgb2Ygc3RhdGUuIFBvc3NpYmxlIHN0YXRlIHZhbHVlcyBhcmUgXCJvcGVuXCIgb3IgXCJjbG9zZVwiLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15RGlhbG9nXCIpXG4gICAgICpwdWJsaWMgZGlhbG9nOiBJZ3hEaWFsb2dDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICogICAgbGV0IGRpYWxvZ1N0YXRlID0gdGhpcy5kaWFsb2cuc3RhdGU7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBnZXQgc3RhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNPcGVuID8gJ29wZW4nIDogJ2Nsb3NlJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIGRpYWxvZyBpcyB2aXNpYmxlIHRvIHRoZSBlbmQgdXNlci5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeURpYWxvZ1wiKVxuICAgICAqcHVibGljIGRpYWxvZzogSWd4RGlhbG9nQ29tcG9uZW50O1xuICAgICAqbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAqICAgIGxldCBkaWFsb2dPcGVuID0gdGhpcy5kaWFsb2cuaXNPcGVuO1xuICAgICAqfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGlzT3BlbigpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLnRvZ2dsZVJlZi5jb2xsYXBzZWQ7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZGlhbG9nLS1oaWRkZW4nKVxuICAgIGdldCBpc0NvbGxhcHNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9nZ2xlUmVmLmNvbGxhcHNlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSByb2xlIG9mIHRoZSBkaWFsb2cuIFRoZSB2YWxpZCB2YWx1ZXMgYXJlIGBkaWFsb2dgLCBgYWxlcnRkaWFsb2dgLCBgYWxlcnRgLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15RGlhbG9nXCIpXG4gICAgICpwdWJsaWMgZGlhbG9nOiBJZ3hEaWFsb2dDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICogICAgbGV0IGRpYWxvZ1JvbGUgPSB0aGlzLmRpYWxvZy5yb2xlO1xuICAgICAqfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHJvbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmxlZnRCdXR0b25MYWJlbCAhPT0gJycgJiYgdGhpcy5yaWdodEJ1dHRvbkxhYmVsICE9PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuICdkaWFsb2cnO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgdGhpcy5sZWZ0QnV0dG9uTGFiZWwgIT09ICcnIHx8XG4gICAgICAgICAgICB0aGlzLnJpZ2h0QnV0dG9uTGFiZWwgIT09ICcnXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuICdhbGVydGRpYWxvZyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ2FsZXJ0JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHRpdGxlIGlkLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15RGlhbG9nXCIpXG4gICAgICpwdWJsaWMgZGlhbG9nOiBJZ3hEaWFsb2dDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICogICAgbGV0IGRpYWxvZ1RpdGxlID0gdGhpcy5kaWFsb2cudGl0bGVJZDtcbiAgICAgKn1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCB0aXRsZUlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGVJZDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG5hdlNlcnZpY2U6IElneE5hdmlnYXRpb25TZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX3RpdGxlSWQgPSBJZ3hEaWFsb2dDb21wb25lbnQuTkVYVF9JRCsrICsgJ190aXRsZSc7XG5cbiAgICAgICAgdGhpcy5fb3ZlcmxheURlZmF1bHRTZXR0aW5ncyA9IHtcbiAgICAgICAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IG5ldyBHbG9iYWxQb3NpdGlvblN0cmF0ZWd5KHRoaXMuX2FuaW1haXRvblNldHRpbmdzKSxcbiAgICAgICAgICAgIHNjcm9sbFN0cmF0ZWd5OiBuZXcgTm9PcFNjcm9sbFN0cmF0ZWd5KCksXG4gICAgICAgICAgICBtb2RhbDogdGhpcy5pc01vZGFsLFxuICAgICAgICAgICAgY2xvc2VPbk91dHNpZGVDbGljazogdGhpcy5jbG9zZU9uT3V0c2lkZVNlbGVjdFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50b2dnbGVSZWYub25DbG9zaW5nLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5lbWl0Q2xvc2VGcm9tRGlhbG9nKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW1pdENsb3NlRnJvbURpYWxvZygpIHtcbiAgICAgICAgdGhpcy5vbkNsb3NlLmVtaXQoeyBkaWFsb2c6IHRoaXMsIGV2ZW50OiBudWxsIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgbWV0aG9kIHRoYXQgb3BlbnMgdGhlIGRpYWxvZy5cbiAgICAgKiBAbWVtYmVyT2Yge0BsaW5rIElneERpYWxvZ0NvbXBvbmVudH1cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxidXR0b24gKGNsaWNrKT1cImRpYWxvZy5vcGVuKCkgaWd4QnV0dG9uPVwicmFpc2VkXCIgaWd4QnV0dG9uQ29sb3I9XCJ3aGl0ZVwiIGlneFJpcHBsZT1cIndoaXRlXCI+VHJpZ2dlciBEaWFsb2c8L2J1dHRvbj5cbiAgICAgKjxpZ3gtZGlhbG9nICNkaWFsb2c+PC9pZ3gtZGlhbG9nPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgcHVibGljIG9wZW4ob3ZlcmxheVNldHRpbmdzOiBPdmVybGF5U2V0dGluZ3MgPSB0aGlzLl9vdmVybGF5RGVmYXVsdFNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlUmVmLm9wZW4ob3ZlcmxheVNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5vbk9wZW4uZW1pdCh7IGRpYWxvZzogdGhpcywgZXZlbnQ6IG51bGwgfSk7XG4gICAgICAgIGlmICghdGhpcy5sZWZ0QnV0dG9uTGFiZWwgJiYgIXRoaXMucmlnaHRCdXR0b25MYWJlbCkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVSZWYuZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpBIG1ldGhvZCB0aGF0IHRoYXQgY2xvc2VzIHRoZSBkaWFsb2cuXG4gICAgICpAbWVtYmVyT2Yge0BsaW5rIElneERpYWxvZ0NvbXBvbmVudH1cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxidXR0b24gKGNsaWNrKT1cImRpYWxvZy5jbG9zZSgpIGlneEJ1dHRvbj1cInJhaXNlZFwiIGlneEJ1dHRvbkNvbG9yPVwid2hpdGVcIiBpZ3hSaXBwbGU9XCJ3aGl0ZVwiPlRyaWdnZXIgRGlhbG9nPC9idXR0b24+XG4gICAgICo8aWd4LWRpYWxvZyAjZGlhbG9nPjwvaWd4LWRpYWxvZz5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBjbG9zZSgpIHtcbiAgICAgICAgLy8gYG9uQ2xvc2VgIHdpbGwgZW1pdCBmcm9tIGB0b2dnbGVSZWYub25DbG9zaW5nYCBzdWJzY3JpcHRpb25cbiAgICAgICAgdGhpcy50b2dnbGVSZWYuY2xvc2UoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEEgbWV0aG9kIHRoYXQgb3BlbnMvY2xvc2VzIHRoZSBkaWFsb2cuXG4gICAgICpAbWVtYmVyT2Yge0BsaW5rIElneERpYWxvZ0NvbXBvbmVudH1cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxidXR0b24gKGNsaWNrKT1cImRpYWxvZy50b2dnbGUoKSBpZ3hCdXR0b249XCJyYWlzZWRcIiBpZ3hCdXR0b25Db2xvcj1cIndoaXRlXCIgaWd4UmlwcGxlPVwid2hpdGVcIj5UcmlnZ2VyIERpYWxvZzwvYnV0dG9uPlxuICAgICAqPGlneC1kaWFsb2cgI2RpYWxvZz48L2lneC1kaWFsb2c+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9nZ2xlKCkge1xuICAgICAgICB0aGlzLmlzT3BlbiA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25EaWFsb2dTZWxlY3RlZChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5pc09wZW4gJiZcbiAgICAgICAgICAgIHRoaXMuY2xvc2VPbk91dHNpZGVTZWxlY3QgJiZcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoSWd4RGlhbG9nQ29tcG9uZW50LkRJQUxPR19DTEFTUylcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uSW50ZXJuYWxMZWZ0QnV0dG9uU2VsZWN0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMub25MZWZ0QnV0dG9uU2VsZWN0LmVtaXQoeyBkaWFsb2c6IHRoaXMsIGV2ZW50IH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25JbnRlcm5hbFJpZ2h0QnV0dG9uU2VsZWN0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMub25SaWdodEJ1dHRvblNlbGVjdC5lbWl0KHsgZGlhbG9nOiB0aGlzLCBldmVudCB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5uYXZTZXJ2aWNlICYmIHRoaXMuaWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF2U2VydmljZS5hZGQodGhpcy5pZCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMubmF2U2VydmljZSAmJiB0aGlzLmlkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdlNlcnZpY2UucmVtb3ZlKHRoaXMuaWQpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGlhbG9nRXZlbnRBcmdzIHtcbiAgICBkaWFsb2c6IElneERpYWxvZ0NvbXBvbmVudDtcbiAgICBldmVudDogRXZlbnQ7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneERpYWxvZ0NvbXBvbmVudCwgSWd4RGlhbG9nVGl0bGVEaXJlY3RpdmUsIElneERpYWxvZ0FjdGlvbnNEaXJlY3RpdmVdLFxuICAgIGV4cG9ydHM6IFtJZ3hEaWFsb2dDb21wb25lbnQsIElneERpYWxvZ1RpdGxlRGlyZWN0aXZlLCBJZ3hEaWFsb2dBY3Rpb25zRGlyZWN0aXZlXSxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBJZ3hUb2dnbGVNb2R1bGUsIElneEJ1dHRvbk1vZHVsZSwgSWd4UmlwcGxlTW9kdWxlLCBJZ3hGb2N1c01vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgSWd4RGlhbG9nTW9kdWxlIHsgfVxuIl19