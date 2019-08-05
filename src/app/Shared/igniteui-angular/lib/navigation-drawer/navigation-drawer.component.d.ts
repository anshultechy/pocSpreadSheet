import { AfterContentInit, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer, SimpleChange, TemplateRef } from '@angular/core';
import { IgxNavigationService, IToggleView } from '../core/navigation';
import { HammerGesturesManager } from '../core/touch';
import { IgxNavDrawerMiniTemplateDirective, IgxNavDrawerTemplateDirective } from './navigation-drawer.directives';
/**
 * **Ignite UI for Angular Navigation Drawer** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/navdrawer.html)
 *
 * The Ignite UI Navigation Drawer is a collapsible side navigation container commonly used in combination with the Navbar.
 *
 * Example:
 * ```html
 * <igx-nav-drawer id="navigation" [isOpen]="true">
 *   <ng-template igxDrawer>
 *     <nav>
 *       <span igxDrawerItem [isHeader]="true">Email</span>
 *       <span igxDrawerItem igxRipple>Inbox</span>
 *       <span igxDrawerItem igxRipple>Deleted</span>
 *       <span igxDrawerItem igxRipple>Sent</span>
 *     </nav>
 *   </ng-template>
 * </igx-nav-drawer>
 * ```
 */
export declare class IgxNavigationDrawerComponent implements IToggleView, OnInit, AfterContentInit, OnDestroy, OnChanges {
    private elementRef;
    private _state;
    protected renderer: Renderer;
    private _touchManager;
    cssClass: string;
    /**
     * ID of the component
     *
     * ```typescript
     * // get
     * let myNavDrawerId = this.navdrawer.id;
     * ```
     *
     * ```html
     * <!--set-->
     *  <igx-nav-drawer id='navdrawer'></igx-nav-drawer>
     * ```
     */
    id: string;
    /**
     * Position of the Navigation Drawer. Can be "left"(default) or "right".
     *
     * ```typescript
     * // get
     * let myNavDrawerPosition = this.navdrawer.position;
     * ```
     *
     * ```html
     * <!--set-->
     * <igx-nav-drawer [position]="'left'"></igx-nav-drawer>
     * ```
     */
    position: string;
    /**
     * Enables the use of touch gestures to manipulate the drawer:
     * - swipe/pan from edge to open, swipe-toggle and pan-drag.
     *
     * ```typescript
     * // get
     * let gesturesEnabled = this.navdrawer.enableGestures;
     * ```
     *
     * ```html
     * <!--set-->
     * <igx-nav-drawer [enableGestures]='true'></igx-nav-drawer>
     * ```
     */
    enableGestures: boolean;
    /**
     * State of the drawer.
     *
     * ```typescript
     * // get
     * let navDrawerIsOpen = this.navdrawer.isOpen;
     * ```
     *
     * ```html
     * <!--set-->
     * <igx-nav-drawer [isOpen]='false'></igx-nav-drawer>
     * ```
     */
    isOpen: boolean;
    /**
     * When pinned the drawer is relatively positioned instead of sitting above content.
     * May require additional layout styling.
     *
     * ```typescript
     * // get
     * let navDrawerIsPinned = this.navdrawer.pin;
     * ```
     *
     * ```html
     * <!--set-->
     * <igx-nav-drawer [pin]='false'></igx-nav-drawer>
     * ```
     */
    pin: boolean;
    /**
     * Minimum device width required for automatic pin to be toggled.
     * Default is 1024, can be set to a falsy value to disable this behavior.
     *
     * ```typescript
     * // get
     * let navDrawerPinTreshold = this.navdrawer.pinThreshold;
     * ```
     *
     * ```html
     * <!--set-->
     * <igx-nav-drawer [pinTreshold]='1024'></igx-nav-drawer>
     * ```
     */
    pinThreshold: number;
    /**
     * Returns nativeElement of the component.
     *
     * @hidden
     */
    readonly element: any;
    /**
     * Width of the drawer in its open state. Defaults to "280px".
     *
     * ```typescript
     * // get
     * let navDrawerWidth = this.navdrawer.width;
     * ```
     *
     * ```html
     * <!--set-->
     * <igx-nav-drawer [width]="'228px'"></igx-nav-drawer>
     * ```
     */
    width: string;
    /**
     * Width of the drawer in its mini state. Defaults to 60px.
     *
     * ```typescript
     * // get
     * let navDrawerMiniWidth = this.navdrawer.miniWidth;
     * ```
     *
     * ```html
     * <!--set-->
     * <igx-nav-drawer [miniWidth]="'34px'"></igx-nav-drawer>
     * ```
     */
    miniWidth: string;
    /**
     * Pinned state change output for two-way binding.
     *
     * ```html
     * <igx-nav-drawer [(pin)]='isPinned'></igx-nav-drawer>
     * ```
     */
    pinChange: EventEmitter<boolean>;
    /**
     * Event fired as the Navigation Drawer is about to open.
     *
     * ```html
     *  <igx-nav-drawer (opening)='onOpening()'></igx-nav-drawer>
     * ```
     */
    opening: EventEmitter<{}>;
    /**
     * Event fired when the Navigation Drawer has opened.
     *
     * ```html
     * <igx-nav-drawer (opened)='onOpened()'></igx-nav-drawer>
     * ```
     */
    opened: EventEmitter<{}>;
    /**
     * Event fired as the Navigation Drawer is about to close.
     *
     * ```html
     * <igx-nav-drawer (closing)='onClosing()'></igx-nav-drawer>
     * ```
     */
    closing: EventEmitter<{}>;
    /**
     * Event fired when the Navigation Drawer has closed.
     *
     * ```html
     * <igx-nav-drawer (closed)='onClosed()'></igx-nav-drawer>
     * ```
     */
    closed: EventEmitter<{}>;
    /**
     * @hidden
     */
    readonly template: TemplateRef<any>;
    private _miniTemplate;
    /**
     * @hidden
     */
    /**
    * @hidden
    */
    miniTemplate: IgxNavDrawerMiniTemplateDirective;
    /**
     * @hidden
     */
    protected contentTemplate: IgxNavDrawerTemplateDirective;
    /**
     * @hidden
     */
    readonly flexWidth: string;
    /** @hidden */
    readonly isPinnedRight: "0" | "1";
    private _gesturesAttached;
    private _widthCache;
    private _resizeObserver;
    private css;
    private _drawer;
    private _overlay;
    private _styleDummy;
    /**
      * @hidden
      */
    readonly drawer: any;
    /**
     * @hidden
     */
    readonly overlay: any;
    /**
     * @hidden
     */
    readonly styleDummy: any;
    /** Pan animation properties */
    private _panning;
    private _panStartWidth;
    private _panLimit;
    /**
     * Property to decide whether to change width or translate the drawer from pan gesture.
     *
     * @hidden
     */
    readonly hasAnimateWidth: boolean;
    private _maxEdgeZone;
    /**
     * Used for touch gestures (swipe and pan).
     * Defaults to 50 (in px) and is extended to at least 110% of the mini template width if available.
     *
     * @hidden
     */
    readonly maxEdgeZone: number;
    /**
     * Gets the Drawer width for specific state.
     * Will attempt to evaluate requested state and cache.
     *
     *
     * @hidden
     */
    readonly expectedWidth: number;
    /**
     * Get the Drawer mini width for specific state.
     * Will attempt to evaluate requested state and cache.
     *
     * @hidden
     */
    readonly expectedMiniWidth: number;
    /**
     * @hidden
     */
    readonly touchManager: HammerGesturesManager;
    /**
     * Exposes optional navigation service
     *
     * @hidden
     */
    readonly state: IgxNavigationService;
    constructor(elementRef: ElementRef, _state: IgxNavigationService, renderer: Renderer, _touchManager: HammerGesturesManager);
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngAfterContentInit(): void;
    /**
     * @hidden
     */
    ngOnDestroy(): void;
    /**
     * @hidden
     */
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    /**
     * Toggle the open state of the Navigation Drawer.
     *
     * ```typescript
     * this.navdrawer.toggle();
     * ```
     */
    toggle(): void;
    /**
     * Open the Navigation Drawer. Has no effect if already opened.
     *
     * ```typescript
     * this.navdrawer.open();
     * ```
     */
    open(): void;
    /**
     * Close the Navigation Drawer. Has no effect if already closed.
     *
     * ```typescript
     * this.navdrawer.close();
     * ```
     */
    close(): void;
    /**
     * @hidden
     */
    protected set_maxEdgeZone(value: number): void;
    /**
     * Get the Drawer width for specific state. Will attempt to evaluate requested state and cache.
     *
     * @hidden
     * @param [mini] - Request mini width instead
     */
    protected getExpectedWidth(mini?: boolean): number;
    private getWindowWidth;
    /**
     * Sets the drawer width.
     */
    private setDrawerWidth;
    /**
     * Get current Drawer width.
     */
    private getDrawerWidth;
    private ensureEvents;
    private updateEdgeZone;
    private checkPinThreshold;
    private swipe;
    private panstart;
    private pan;
    private panEnd;
    private resetPan;
    /**
     * Sets the absolute position or width in case the drawer doesn't change position.
     * @param x the number pixels to translate on the X axis or the width to set. 0 width will clear the style instead.
     * @param opacity optional value to apply to the overlay
     */
    private setXSize;
    private toggleOpenedEvent;
    private toggleClosedEvent;
}