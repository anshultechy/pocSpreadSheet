import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { IgxNavigationService, IToggleView } from '../../core/navigation';
import { IgxOverlayService } from '../../services/overlay/overlay';
import { OverlaySettings } from '../../services';
import { CancelableEventArgs, CancelableBrowserEventArgs } from '../../core/utils';
export declare class IgxToggleDirective implements IToggleView, OnInit, OnDestroy {
    private elementRef;
    private cdr;
    protected overlayService: IgxOverlayService;
    private navigationService;
    protected _overlayId: string;
    private destroy$;
    private _overlaySubFilter;
    private _overlayOpenedSub;
    private _overlayClosingSub;
    private _overlayClosedSub;
    /**
     * Emits an event after the toggle container is opened.
     *
     * ```typescript
     * onToggleOpened(event) {
     *    alert("Toggle opened!");
     * }
     * ```
     *
     * ```html
     * <div
     *   igxToggle
     *   (onOpened)='onToggleOpened($event)'>
     * </div>
     * ```
     */
    onOpened: EventEmitter<{}>;
    /**
     * Emits an event before the toggle container is opened.
     *
     * ```typescript
     * onToggleOpening(event) {
     *  alert("Toggle opening!");
     * }
     * ```
     *
     * ```html
     * <div
     *   igxToggle
     *   (onOpening)='onToggleOpening($event)'>
     * </div>
     * ```
     */
    onOpening: EventEmitter<CancelableEventArgs>;
    /**
     * Emits an event after the toggle container is closed.
     *
     * ```typescript
     * onToggleClosed(event) {
     *  alert("Toggle closed!");
     * }
     * ```
     *
     * ```html
     * <div
     *   igxToggle
     *   (onClosed)='onToggleClosed($event)'>
     * </div>
     * ```
     */
    onClosed: EventEmitter<{}>;
    /**
     * Emits an event before the toggle container is closed.
     *
     * ```typescript
     * onToggleClosing(event) {
     *  alert("Toggle closing!");
     * }
     * ```
     *
     * ```html
     * <div
     *  igxToggle
     *  (onClosing)='onToggleClosing($event)'>
     * </div>
     * ```
     */
    onClosing: EventEmitter<CancelableBrowserEventArgs>;
    private _collapsed;
    /**
     * @hidden
     */
    readonly collapsed: boolean;
    /**
     * Identifier which is registered into `IgxNavigationService`
     *
     * ```typescript
     * let myToggleId = this.toggle.id;
     * ```
     */
    id: string;
    /**
     * @hidden
     */
    readonly element: HTMLElement;
    /**
     * @hidden
     */
    readonly hiddenClass: boolean;
    /**
     * @hidden
     */
    readonly defaultClass: boolean;
    /**
     * @hidden
     */
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef, overlayService: IgxOverlayService, navigationService: IgxNavigationService);
    /**
     * Opens the toggle.
     *
     * ```typescript
     * this.myToggle.open();
     * ```
     */
    open(overlaySettings?: OverlaySettings): void;
    /**
     * Closes the toggle.
     *
     * ```typescript
     * this.myToggle.close();
     * ```
     */
    close(): void;
    /**
     * Opens or closes the toggle, depending on its current state.
     *
     * ```typescript
     * this.myToggle.toggle();
     * ```
     */
    toggle(overlaySettings?: OverlaySettings): void;
    /** @hidden @internal */
    readonly isClosing: false | import("@angular/animations").AnimationPlayer;
    /**
     * Repositions the toggle.
     * ```typescript
     * this.myToggle.reposition();
     * ```
     */
    reposition(): void;
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngOnDestroy(): void;
    private overlayClosed;
    private unsubscribe;
    private clearSubscription;
}
export declare class IgxToggleActionDirective implements OnInit {
    private element;
    private navigationService;
    protected _overlayDefaults: OverlaySettings;
    /**
     * Provide settings that control the toggle overlay positioning, interaction and scroll behavior.
     * ```typescript
     * const settings: OverlaySettings = {
     *      closeOnOutsideClick: false,
     *      modal: false
     *  }
     * ```
     * ---
     * ```html
     * <!--set-->
     * <div igxToggleAction [overlaySettings]="settings"></div>
     * ```
     */
    overlaySettings: OverlaySettings;
    /**
     * Determines where the toggle element overlay should be attached.
     *
     * ```html
     * <!--set-->
     * <div igxToggleAction [igxToggleOutlet]="outlet"></div>
     * ```
     * Where `outlet` in an instance of `IgxOverlayOutletDirective` or an `ElementRef`
     */
    outlet: IgxOverlayOutletDirective | ElementRef;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    target: any;
    protected _target: IToggleView | string;
    constructor(element: ElementRef, navigationService: IgxNavigationService);
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    onClick(): void;
    /**
     * Updates provided overlay settings
     * @param settings settings to update
     * @returns returns updated copy of provided overlay settings
     */
    protected updateOverlaySettings(settings: OverlaySettings): OverlaySettings;
}
/**
 * Mark an element as an igxOverlay outlet container.
 * Directive instance is exported as `overlay-outlet` to be assigned to templates variables:
 * ```html
 * <div igxOverlayOutlet #outlet="overlay-outlet"></div>
 * ```
 */
export declare class IgxOverlayOutletDirective {
    element: ElementRef;
    constructor(element: ElementRef);
    /** @hidden */
    readonly nativeElement: any;
}
/**
 * @hidden
 */
export declare class IgxToggleModule {
}