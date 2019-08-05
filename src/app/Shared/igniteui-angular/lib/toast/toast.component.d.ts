import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { IgxNavigationService, IToggleView } from '../core/navigation';
/**
 * **Ignite UI for Angular Toast** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/toast.html)
 *
 * The Ignite UI Toast provides information and warning messages that are non-interactive and cannot
 * be dismissed by the user. Toasts can be displayed at the bottom, middle, or top of the page.
 *
 * Example:
 * ```html
 * <button (click)="toast.show()">Show notification</button>
 * <igx-toast #toast
 *           message="Notification displayed"
 *           displayTime="1000">
 * </igx-toast>
 * ```
 */
export declare class IgxToastComponent implements IToggleView, OnInit, OnDestroy {
    private elementRef;
    private navService;
    /**
     * Returns a list of available CSS classes.
     * ```typescript
     * let toastClasses =  this.toast.CSS_CLASSES;
     * ```
     * @memberof IgxToastComponent
     */
    readonly CSS_CLASSES: {
        IGX_TOAST_BOTTOM: string;
        IGX_TOAST_MIDDLE: string;
        IGX_TOAST_TOP: string;
    };
    /**
     * Sets/gets the `id` of the toast.
     * If not set, the `id` will have value `"igx-toast-0"`.
     * ```html
     * <igx-toast id = "my-first-toast"></igx-toast>
     * ```
     * ```typescript
     * let toastId = this.toast.id;
     * ```
     */
    id: string;
    /**
     * Emits an event prior the toast is shown.
     * Provides reference to the `IgxToastComponent` as event argument.
     * ```html
     * <igx-toast (onShowing) = "onShowing($event)"></igx-toast>
     * ```
     * @memberof IgxToastComponent
     */
    onShowing: EventEmitter<IgxToastComponent>;
    /**
     * Emits an event when the toast is shown.
     * Provides reference to the `IgxToastComponent` as event argument.
     * ```html
     * <igx-toast (onShown) = "onShown($event)"></igx-toast>
     * ```
     * @memberof IgxToastComponent
     */
    onShown: EventEmitter<IgxToastComponent>;
    /**
     * Emits an event prior the toast is hidden.
     * Provides reference to the `IgxToastComponent` as event argument.
     * ```html
     * <igx-toast (onHiding) = "onHiding($event)"></igx-toast>
     * ```
     * @memberof IgxToastComponent
     */
    onHiding: EventEmitter<IgxToastComponent>;
    /**
     *  Emits an event when the toast is hidden.
     *  Provides reference to the `IgxToastComponent` as event argument.
     * ```html
     * <igx-toast (onHidden) = "onHidden($event)"></igx-toast>
     * ```
     * @memberof IgxToastComponent
     */
    onHidden: EventEmitter<IgxToastComponent>;
    /**
     * Sets/gets the `role` attribute.
     * If not set, `role` will have value `"alert"`.
     * ```html
     * <igx-toast [role] = "'notify'"></igx-toast>
     * ```
     * ```typescript
     * let toastRole = this.toast.role;
     * ```
     * @memberof IgxToastComponent
     */
    role: string;
    /**
     * Sets/gets whether the toast will be hidden after the `displayTime` is over.
     * Default value is `true`.
     * ```html
     * <igx-toast [autoHide] = "false"></igx-toast>
     * ```
     * ```typescript
     * let autoHide = this.toast.autoHide;
     * ```
     * @memberof IgxToastComponent
     */
    autoHide: boolean;
    /**
     * Sets/gets the duration of time span(in milliseconds) which the toast will be visible
     * after it is being shown.
     * Default value is `4000`.
     * ```html
     * <igx-toast [displayTime] = "2500"></igx-toast>
     * ```
     * ```typescript
     * let displayTime = this.toast.displayTime;
     * ```
     * @memberof IgxToastComponent
     */
    displayTime: number;
    /**
     * Enables/Disables the visibility of the toast.
     * If not set, the `isVisible` attribute will have value `false`.
     * ```html
     * <igx-toast [isVisible] = "true"></igx-toast>
     * ```
     * ```typescript
     * let isVisible = this.toast.isVisible;
     * ```
     * @memberof IgxToastComponent
     */
    isVisible: boolean;
    /**
     * Sets/gets the message that will be shown by the toast.
     * ```html
     * <igx-toast [message] = "Notification"></igx-toast>
     * ```
     * ```typescript
     * let toastMessage = this.toast.message;
     * ```
     * @memberof IgxToastComponent
     */
    message: string;
    /**
     * Sets/gets the position of the toast.
     * If not set, the `position` attribute will have value `IgxToastPosition.Bottom`.
     * ```html
     * <igx-toast [position] = "top"></igx-toast>
     * ```
     * ```typescript
     * let toastPosition = this.toast.position;
     * ```
     * @memberof IgxToastComponent
     */
    position: IgxToastPosition;
    /**
     * Gets the nativeElement of the toast.
     * ```typescript
     * let nativeElement = this.toast.element;
     * ```
     * @memberof IgxToastComponent
     */
    readonly element: any;
    /**
     *@hidden
     */
    private timeoutId;
    constructor(elementRef: ElementRef, navService: IgxNavigationService);
    /**
     * Shows the toast.
     * If `autoHide` is enabled, the toast will hide after `displayTime` is over.
     * ```typescript
     * this.toast.show();
     * ```
     * @memberof IgxToastComponent
     */
    show(): void;
    /**
     * Hides the toast.
     * ```typescript
     * this.toast.hide();
     * ```
     * @memberof IgxToastComponent
     */
    hide(): void;
    /**
     * Wraps @show() method due @IToggleView interface implementation.
     * @hidden
     */
    open(): void;
    /**
     * Wraps @hide() method due @IToggleView interface implementation.
     * @hidden
     */
    close(): void;
    /**
     * Toggles the visible state of the toast.
     * ```typescript
     * this.toast.toggle();
     * ```
     * @memberof IgxToastComponent
     */
    toggle(): void;
    /**
     * Sets/gets the class name of the toast based on the `position` value.
     * ```typescript
     * let className =  this.toast.mapPositionToClassName();
     * ```
     * @memberof IgxToastComponent
     */
    mapPositionToClassName(): any;
    /**
     *@hidden
     */
    ngOnInit(): void;
    /**
     *@hidden
     */
    ngOnDestroy(): void;
}
/**
 * Enumeration for toast position
 * Can be:
 * Bottom
 * Middle
 * Top
 */
export declare enum IgxToastPosition {
    Bottom = 0,
    Middle = 1,
    Top = 2
}
/**
 * @hidden
 */
export declare class IgxToastModule {
}
