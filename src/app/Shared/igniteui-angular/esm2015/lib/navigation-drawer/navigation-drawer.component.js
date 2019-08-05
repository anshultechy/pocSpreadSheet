/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, ElementRef, EventEmitter, HostBinding, Inject, Input, Optional, Output, Renderer, ViewChild } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { IgxNavigationService } from '../core/navigation';
import { HammerGesturesManager } from '../core/touch';
import { IgxNavDrawerMiniTemplateDirective, IgxNavDrawerTemplateDirective } from './navigation-drawer.directives';
/** @type {?} */
let NEXT_ID = 0;
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
export class IgxNavigationDrawerComponent {
    /**
     * @param {?} elementRef
     * @param {?} _state
     * @param {?} renderer
     * @param {?} _touchManager
     */
    constructor(elementRef, _state, renderer, _touchManager) {
        this.elementRef = elementRef;
        this._state = _state;
        this.renderer = renderer;
        this._touchManager = _touchManager;
        this.cssClass = 'igx-nav-drawer';
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
        this.id = `igx-nav-drawer-${NEXT_ID++}`;
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
        this.position = 'left';
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
        this.enableGestures = true;
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
        this.isOpen = false;
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
        this.pin = false;
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
        this.pinThreshold = 1024;
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
        this.width = '280px';
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
        this.miniWidth = '60px';
        /**
         * Pinned state change output for two-way binding.
         *
         * ```html
         * <igx-nav-drawer [(pin)]='isPinned'></igx-nav-drawer>
         * ```
         */
        this.pinChange = new EventEmitter(true);
        /**
         * Event fired as the Navigation Drawer is about to open.
         *
         * ```html
         *  <igx-nav-drawer (opening)='onOpening()'></igx-nav-drawer>
         * ```
         */
        this.opening = new EventEmitter();
        /**
         * Event fired when the Navigation Drawer has opened.
         *
         * ```html
         * <igx-nav-drawer (opened)='onOpened()'></igx-nav-drawer>
         * ```
         */
        this.opened = new EventEmitter();
        /**
         * Event fired as the Navigation Drawer is about to close.
         *
         * ```html
         * <igx-nav-drawer (closing)='onClosing()'></igx-nav-drawer>
         * ```
         */
        this.closing = new EventEmitter();
        /**
         * Event fired when the Navigation Drawer has closed.
         *
         * ```html
         * <igx-nav-drawer (closed)='onClosed()'></igx-nav-drawer>
         * ```
         */
        this.closed = new EventEmitter();
        this._gesturesAttached = false;
        this._widthCache = { width: null, miniWidth: null, windowWidth: null };
        this.css = {
            drawer: 'igx-nav-drawer__aside',
            mini: 'igx-nav-drawer__aside--mini',
            overlay: 'igx-nav-drawer__overlay',
            styleDummy: 'igx-nav-drawer__style-dummy'
        };
        /**
         * Pan animation properties
         */
        this._panning = false;
        this._maxEdgeZone = 50;
        this.checkPinThreshold = (evt) => {
            /** @type {?} */
            let windowWidth;
            if (this.pinThreshold) {
                windowWidth = this.getWindowWidth();
                if (evt && this._widthCache.windowWidth === windowWidth) {
                    return;
                }
                this._widthCache.windowWidth = windowWidth;
                if (!this.pin && windowWidth >= this.pinThreshold) {
                    this.pin = true;
                    this.pinChange.emit(true);
                }
                else if (this.pin && windowWidth < this.pinThreshold) {
                    this.pin = false;
                    this.pinChange.emit(false);
                }
            }
        };
        this.swipe = (evt) => {
            // TODO: Could also force input type: http://stackoverflow.com/a/27108052
            if (!this.enableGestures || evt.pointerType !== 'touch') {
                return;
            }
            // HammerJS swipe is horizontal-only by default, don't check deltaY
            /** @type {?} */
            let deltaX;
            /** @type {?} */
            let startPosition;
            if (this.position === 'right') {
                // when on the right use inverse of deltaX
                deltaX = -evt.deltaX;
                startPosition = this.getWindowWidth() - (evt.center.x + evt.distance);
            }
            else {
                deltaX = evt.deltaX;
                startPosition = evt.center.x - evt.distance;
            }
            // only accept closing swipe (ignoring minEdgeZone) when the drawer is expanded:
            if ((this.isOpen && deltaX < 0) ||
                // positive deltaX from the edge:
                (deltaX > 0 && startPosition < this.maxEdgeZone)) {
                this.toggle();
            }
        };
        this.panstart = (evt) => {
            if (!this.enableGestures || this.pin || evt.pointerType !== 'touch') {
                return;
            }
            /** @type {?} */
            const startPosition = this.position === 'right' ? this.getWindowWidth() - (evt.center.x + evt.distance)
                : evt.center.x - evt.distance;
            // cache width during animation, flag to allow further handling
            if (this.isOpen || (startPosition < this.maxEdgeZone)) {
                this._panning = true;
                this._panStartWidth = this.getExpectedWidth(!this.isOpen);
                this._panLimit = this.getExpectedWidth(this.isOpen);
                this.renderer.setElementClass(this.overlay, 'panning', true);
                this.renderer.setElementClass(this.drawer, 'panning', true);
            }
        };
        this.pan = (evt) => {
            // TODO: input.deltaX = prevDelta.x + (center.x - offset.x);
            // get actual delta (not total session one) from event?
            // pan WILL also fire after a full swipe, only resize on flag
            if (!this._panning) {
                return;
            }
            /** @type {?} */
            const right = this.position === 'right';
            // when on the right use inverse of deltaX
            /** @type {?} */
            const deltaX = right ? -evt.deltaX : evt.deltaX;
            /** @type {?} */
            let visibleWidth;
            /** @type {?} */
            let newX;
            /** @type {?} */
            let percent;
            visibleWidth = this._panStartWidth + deltaX;
            if (this.isOpen && deltaX < 0) {
                // when visibleWidth hits limit - stop animating
                if (visibleWidth <= this._panLimit) {
                    return;
                }
                if (this.hasAnimateWidth) {
                    percent = (visibleWidth - this._panLimit) / (this._panStartWidth - this._panLimit);
                    newX = visibleWidth;
                }
                else {
                    percent = visibleWidth / this._panStartWidth;
                    newX = evt.deltaX;
                }
                this.setXSize(newX, percent.toPrecision(2));
            }
            else if (!this.isOpen && deltaX > 0) {
                // when visibleWidth hits limit - stop animating
                if (visibleWidth >= this._panLimit) {
                    return;
                }
                if (this.hasAnimateWidth) {
                    percent = (visibleWidth - this._panStartWidth) / (this._panLimit - this._panStartWidth);
                    newX = visibleWidth;
                }
                else {
                    percent = visibleWidth / this._panLimit;
                    newX = (this._panLimit - visibleWidth) * (right ? 1 : -1);
                }
                this.setXSize(newX, percent.toPrecision(2));
            }
        };
        this.panEnd = (evt) => {
            if (this._panning) {
                /** @type {?} */
                const deltaX = this.position === 'right' ? -evt.deltaX : evt.deltaX;
                /** @type {?} */
                const visibleWidth = this._panStartWidth + deltaX;
                this.resetPan();
                // check if pan brought the drawer to 50%
                if (this.isOpen && visibleWidth <= this._panStartWidth / 2) {
                    this.close();
                }
                else if (!this.isOpen && visibleWidth >= this._panLimit / 2) {
                    this.open();
                }
                this._panStartWidth = null;
            }
        };
        this.toggleOpenedEvent = (evt) => {
            this.elementRef.nativeElement.removeEventListener('transitionend', this.toggleOpenedEvent, false);
            this.opened.emit();
        };
        this.toggleClosedEvent = (evt) => {
            this.elementRef.nativeElement.removeEventListener('transitionend', this.toggleClosedEvent, false);
            this.closed.emit();
        };
    }
    /**
     * Returns nativeElement of the component.
     *
     * @hidden
     * @return {?}
     */
    get element() {
        return this.elementRef.nativeElement;
    }
    /**
     * @hidden
     * @return {?}
     */
    get template() {
        if (this.miniTemplate && !this.isOpen) {
            return this.miniTemplate.template;
        }
        else if (this.contentTemplate) {
            return this.contentTemplate.template;
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    get miniTemplate() {
        return this._miniTemplate;
    }
    /**
     * @hidden
     * @param {?} v
     * @return {?}
     */
    set miniTemplate(v) {
        if (!this.isOpen) {
            this.setDrawerWidth(v ? this.miniWidth : '');
        }
        this._miniTemplate = v;
    }
    /**
     * @hidden
     * @return {?}
     */
    get flexWidth() {
        if (!this.pin) {
            return '0px';
        }
        if (this.isOpen) {
            return this.width;
        }
        if (this.miniTemplate && this.miniWidth) {
            return this.miniWidth;
        }
        return '0px';
    }
    /**
     * @hidden
     * @return {?}
     */
    get isPinnedRight() {
        return this.pin && this.position === 'right' ? '1' : '0';
    }
    /**
     * @hidden
     * @return {?}
     */
    get drawer() {
        return this._drawer.nativeElement;
    }
    /**
     * @hidden
     * @return {?}
     */
    get overlay() {
        return this._overlay.nativeElement;
    }
    /**
     * @hidden
     * @return {?}
     */
    get styleDummy() {
        return this._styleDummy.nativeElement;
    }
    /**
     * Property to decide whether to change width or translate the drawer from pan gesture.
     *
     * @hidden
     * @return {?}
     */
    get hasAnimateWidth() {
        return this.pin || !!this.miniTemplate;
    }
    /**
     * Used for touch gestures (swipe and pan).
     * Defaults to 50 (in px) and is extended to at least 110% of the mini template width if available.
     *
     * @hidden
     * @return {?}
     */
    get maxEdgeZone() {
        return this._maxEdgeZone;
    }
    /**
     * Gets the Drawer width for specific state.
     * Will attempt to evaluate requested state and cache.
     *
     *
     * @hidden
     * @return {?}
     */
    get expectedWidth() {
        return this.getExpectedWidth(false);
    }
    /**
     * Get the Drawer mini width for specific state.
     * Will attempt to evaluate requested state and cache.
     *
     * @hidden
     * @return {?}
     */
    get expectedMiniWidth() {
        return this.getExpectedWidth(true);
    }
    /**
     * @hidden
     * @return {?}
     */
    get touchManager() {
        return this._touchManager;
    }
    /**
     * Exposes optional navigation service
     *
     * @hidden
     * @return {?}
     */
    get state() {
        return this._state;
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        // DOM and @Input()-s initialized
        if (this._state) {
            this._state.add(this.id, this);
        }
        if (this.isOpen) {
            this.setDrawerWidth(this.width);
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterContentInit() {
        // wait for template and ng-content to be ready
        this.updateEdgeZone();
        this.checkPinThreshold();
        this.ensureEvents();
        // TODO: apply platform-safe Ruler from http://plnkr.co/edit/81nWDyreYMzkunihfRgX?p=preview
        // (https://github.com/angular/angular/issues/6515), blocked by https://github.com/angular/angular/issues/6904
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        this._touchManager.destroy();
        if (this._state) {
            this._state.remove(this.id);
        }
        if (this._resizeObserver) {
            this._resizeObserver.unsubscribe();
        }
    }
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // simple settings can come from attribute set (rather than binding), make sure boolean props are converted
        if (changes.enableGestures && changes.enableGestures.currentValue !== undefined) {
            this.enableGestures = !!(this.enableGestures && this.enableGestures.toString() === 'true');
            this.ensureEvents();
        }
        if (changes.pin && changes.pin.currentValue !== undefined) {
            this.pin = !!(this.pin && this.pin.toString() === 'true');
            if (this.pin) {
                this._touchManager.destroy();
                this._gesturesAttached = false;
            }
            else {
                this.ensureEvents();
            }
        }
        if (changes.pinThreshold) {
            if (this.pinThreshold) {
                this.ensureEvents();
                this.checkPinThreshold();
            }
        }
        if (changes.width && this.isOpen) {
            this.setDrawerWidth(changes.width.currentValue);
        }
        if (changes.miniWidth) {
            if (!this.isOpen) {
                this.setDrawerWidth(changes.miniWidth.currentValue);
            }
            this.updateEdgeZone();
        }
    }
    /**
     * Toggle the open state of the Navigation Drawer.
     *
     * ```typescript
     * this.navdrawer.toggle();
     * ```
     * @return {?}
     */
    toggle() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    /**
     * Open the Navigation Drawer. Has no effect if already opened.
     *
     * ```typescript
     * this.navdrawer.open();
     * ```
     * @return {?}
     */
    open() {
        if (this._panning) {
            this.resetPan();
        }
        if (this.isOpen) {
            return;
        }
        this.opening.emit();
        this.isOpen = true;
        // TODO: Switch to animate API when available
        // var animationCss = this.animate.css();
        //     animationCss
        //         .setStyles({'width':'50px'}, {'width':'400px'})
        //         .start(this.elementRef.nativeElement)
        //         .onComplete(() => animationCss.setToStyles({'width':'auto'}).start(this.elementRef.nativeElement));
        this.elementRef.nativeElement.addEventListener('transitionend', this.toggleOpenedEvent, false);
        this.setDrawerWidth(this.width);
    }
    /**
     * Close the Navigation Drawer. Has no effect if already closed.
     *
     * ```typescript
     * this.navdrawer.close();
     * ```
     * @return {?}
     */
    close() {
        if (this._panning) {
            this.resetPan();
        }
        if (!this.isOpen) {
            return;
        }
        this.closing.emit();
        this.isOpen = false;
        this.setDrawerWidth(this.miniTemplate ? this.miniWidth : '');
        this.elementRef.nativeElement.addEventListener('transitionend', this.toggleClosedEvent, false);
    }
    /**
     * @hidden
     * @protected
     * @param {?} value
     * @return {?}
     */
    set_maxEdgeZone(value) {
        this._maxEdgeZone = value;
    }
    /**
     * Get the Drawer width for specific state. Will attempt to evaluate requested state and cache.
     *
     * @hidden
     * @protected
     * @param {?=} mini
     * @return {?}
     */
    getExpectedWidth(mini) {
        if (mini) {
            if (!this.miniTemplate) {
                return 0;
            }
            if (this.miniWidth) {
                return parseFloat(this.miniWidth);
            }
            else {
                // if (!this.isOpen) { // This WON'T work due to transition timings...
                //     return this.elementRef.nativeElement.children[1].offsetWidth;
                // } else {
                if (this._widthCache.miniWidth === null) {
                    // force class for width calc. TODO?
                    this.renderer.setElementClass(this.styleDummy, this.css.drawer, true);
                    this.renderer.setElementClass(this.styleDummy, this.css.mini, true);
                    this._widthCache.miniWidth = this.styleDummy.offsetWidth;
                    this.renderer.setElementClass(this.styleDummy, this.css.drawer, false);
                    this.renderer.setElementClass(this.styleDummy, this.css.mini, false);
                }
                return this._widthCache.miniWidth;
            }
        }
        else {
            if (this.width) {
                return parseFloat(this.width);
            }
            else {
                if (this._widthCache.width === null) {
                    // force class for width calc. TODO?
                    this.renderer.setElementClass(this.styleDummy, this.css.drawer, true);
                    this._widthCache.width = this.styleDummy.offsetWidth;
                    this.renderer.setElementClass(this.styleDummy, this.css.drawer, false);
                }
                return this._widthCache.width;
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    getWindowWidth() {
        return (window.innerWidth > 0) ? window.innerWidth : screen.width;
    }
    /**
     * Sets the drawer width.
     * @private
     * @param {?} width
     * @return {?}
     */
    setDrawerWidth(width) {
        requestAnimationFrame(() => {
            if (this.drawer) {
                this.renderer.setElementStyle(this.drawer, 'width', width);
            }
        });
    }
    /**
     * Get current Drawer width.
     * @private
     * @return {?}
     */
    getDrawerWidth() {
        return this.drawer.offsetWidth;
    }
    /**
     * @private
     * @return {?}
     */
    ensureEvents() {
        // set listeners for swipe/pan only if needed, but just once
        if (this.enableGestures && !this.pin && !this._gesturesAttached) {
            // Built-in manager handler(L20887) causes endless loop and max stack exception.
            // https://github.com/angular/angular/issues/6993
            // Use ours for now (until beta.10):
            // this.renderer.listen(document, "swipe", this.swipe);
            this._touchManager.addGlobalEventListener('document', 'swipe', this.swipe);
            this._gesturesAttached = true;
            // this.renderer.listen(document, "panstart", this.panstart);
            // this.renderer.listen(document, "pan", this.pan);
            this._touchManager.addGlobalEventListener('document', 'panstart', this.panstart);
            this._touchManager.addGlobalEventListener('document', 'panmove', this.pan);
            this._touchManager.addGlobalEventListener('document', 'panend', this.panEnd);
        }
        if (!this._resizeObserver) {
            this._resizeObserver = fromEvent(window, 'resize').pipe(debounce(() => interval(150)))
                .subscribe((value) => {
                this.checkPinThreshold(value);
            });
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateEdgeZone() {
        /** @type {?} */
        let maxValue;
        if (this.miniTemplate) {
            maxValue = Math.max(this._maxEdgeZone, this.getExpectedWidth(true) * 1.1);
            this.set_maxEdgeZone(maxValue);
        }
    }
    /**
     * @private
     * @return {?}
     */
    resetPan() {
        this._panning = false;
        /* styles fail to apply when set on parent due to extra attributes, prob ng bug */
        this.renderer.setElementClass(this.overlay, 'panning', false);
        this.renderer.setElementClass(this.drawer, 'panning', false);
        this.setXSize(0, '');
    }
    /**
     * Sets the absolute position or width in case the drawer doesn't change position.
     * @private
     * @param {?} x the number pixels to translate on the X axis or the width to set. 0 width will clear the style instead.
     * @param {?=} opacity optional value to apply to the overlay
     * @return {?}
     */
    setXSize(x, opacity) {
        // Angular polyfills patches window.requestAnimationFrame, but switch to DomAdapter API (TODO)
        window.requestAnimationFrame(() => {
            if (this.hasAnimateWidth) {
                this.renderer.setElementStyle(this.drawer, 'width', x ? Math.abs(x) + 'px' : '');
            }
            else {
                this.renderer.setElementStyle(this.drawer, 'transform', x ? 'translate3d(' + x + 'px,0,0)' : '');
                this.renderer.setElementStyle(this.drawer, '-webkit-transform', x ? 'translate3d(' + x + 'px,0,0)' : '');
            }
            if (opacity !== undefined) {
                this.renderer.setElementStyle(this.overlay, 'opacity', opacity);
            }
        });
    }
}
IgxNavigationDrawerComponent.decorators = [
    { type: Component, args: [{
                providers: [HammerGesturesManager],
                selector: 'igx-nav-drawer',
                template: "<ng-template #defaultItemsTemplate>\n    <div igxDrawerItem [isHeader]=\"true\">Navigation Drawer</div>\n    <div igxDrawerItem> Start by adding</div>\n    <div igxDrawerItem> <code>&lt;ng-template igxDrawer&gt;</code> </div>\n    <div igxDrawerItem> And some items inside </div>\n    <div igxDrawerItem> Style with igxDrawerItem </div>\n    <div igxDrawerItem> and igxRipple directives</div>\n</ng-template>\n\n<div [hidden]=\"pin\"\n    class=\"igx-nav-drawer__overlay\"\n    [class.igx-nav-drawer__overlay--hidden]=\"!isOpen\"\n    (click)=\"close()\" #overlay>\n</div>\n<aside role=\"navigation\"\n    class=\"igx-nav-drawer__aside\"\n    [class.igx-nav-drawer__aside--collapsed]=\"!miniTemplate && !isOpen\"\n    [class.igx-nav-drawer__aside--mini]=\"miniTemplate && !isOpen\"\n    [class.igx-nav-drawer__aside--normal]=\"!miniTemplate || isOpen\"\n    [class.igx-nav-drawer__aside--pinned]=\"pin\"\n    [class.igx-nav-drawer__aside--right]=\"position == 'right'\" #aside>\n\n    <ng-container *ngTemplateOutlet=\"template || defaultItemsTemplate\"></ng-container>\n</aside>\n<div class=\"igx-nav-drawer__style-dummy\" #dummy></div>\n",
                styles: [`
        :host {
            display: block;
            height: 100%;
        }
    `]
            }] }
];
/** @nocollapse */
IgxNavigationDrawerComponent.ctorParameters = () => [
    { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] },
    { type: IgxNavigationService, decorators: [{ type: Optional }] },
    { type: Renderer },
    { type: HammerGesturesManager }
];
IgxNavigationDrawerComponent.propDecorators = {
    cssClass: [{ type: HostBinding, args: ['class',] }],
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    position: [{ type: Input }],
    enableGestures: [{ type: Input }],
    isOpen: [{ type: Input }],
    pin: [{ type: Input }],
    pinThreshold: [{ type: Input }],
    width: [{ type: Input }],
    miniWidth: [{ type: Input }],
    pinChange: [{ type: Output }],
    opening: [{ type: Output }],
    opened: [{ type: Output }],
    closing: [{ type: Output }],
    closed: [{ type: Output }],
    miniTemplate: [{ type: ContentChild, args: [IgxNavDrawerMiniTemplateDirective, { read: IgxNavDrawerMiniTemplateDirective, static: false },] }],
    contentTemplate: [{ type: ContentChild, args: [IgxNavDrawerTemplateDirective, { read: IgxNavDrawerTemplateDirective, static: false },] }],
    flexWidth: [{ type: HostBinding, args: ['style.flexBasis',] }],
    isPinnedRight: [{ type: HostBinding, args: ['style.order',] }],
    _drawer: [{ type: ViewChild, args: ['aside', { static: true },] }],
    _overlay: [{ type: ViewChild, args: ['overlay', { static: true },] }],
    _styleDummy: [{ type: ViewChild, args: ['dummy', { static: true },] }]
};
if (false) {
    /** @type {?} */
    IgxNavigationDrawerComponent.prototype.cssClass;
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
     * @type {?}
     */
    IgxNavigationDrawerComponent.prototype.id;
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
     * @type {?}
     */
    IgxNavigationDrawerComponent.prototype.position;
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
     * @type {?}
     */
    IgxNavigationDrawerComponent.prototype.enableGestures;
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
     * @type {?}
     */
    IgxNavigationDrawerComponent.prototype.isOpen;
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
     * @type {?}
     */
    IgxNavigationDrawerComponent.prototype.pin;
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
     * @type {?}
     */
    IgxNavigationDrawerComponent.prototype.pinThreshold;
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
     * @type {?}
     */
    IgxNavigationDrawerComponent.prototype.width;
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
     * @type {?}
     */
    IgxNavigationDrawerComponent.prototype.miniWidth;
    /**
     * Pinned state change output for two-way binding.
     *
     * ```html
     * <igx-nav-drawer [(pin)]='isPinned'></igx-nav-drawer>
     * ```
     * @type {?}
     */
    IgxNavigationDrawerComponent.prototype.pinChange;
    /**
     * Event fired as the Navigation Drawer is about to open.
     *
     * ```html
     *  <igx-nav-drawer (opening)='onOpening()'></igx-nav-drawer>
     * ```
     * @type {?}
     */
    IgxNavigationDrawerComponent.prototype.opening;
    /**
     * Event fired when the Navigation Drawer has opened.
     *
     * ```html
     * <igx-nav-drawer (opened)='onOpened()'></igx-nav-drawer>
     * ```
     * @type {?}
     */
    IgxNavigationDrawerComponent.prototype.opened;
    /**
     * Event fired as the Navigation Drawer is about to close.
     *
     * ```html
     * <igx-nav-drawer (closing)='onClosing()'></igx-nav-drawer>
     * ```
     * @type {?}
     */
    IgxNavigationDrawerComponent.prototype.closing;
    /**
     * Event fired when the Navigation Drawer has closed.
     *
     * ```html
     * <igx-nav-drawer (closed)='onClosed()'></igx-nav-drawer>
     * ```
     * @type {?}
     */
    IgxNavigationDrawerComponent.prototype.closed;
    /**
     * @type {?}
     * @private
     */
    IgxNavigationDrawerComponent.prototype._miniTemplate;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxNavigationDrawerComponent.prototype.contentTemplate;
    /**
     * @type {?}
     * @private
     */
    IgxNavigationDrawerComponent.prototype._gesturesAttached;
    /**
     * @type {?}
     * @private
     */
    IgxNavigationDrawerComponent.prototype._widthCache;
    /**
     * @type {?}
     * @private
     */
    IgxNavigationDrawerComponent.prototype._resizeObserver;
    /**
     * @type {?}
     * @private
     */
    IgxNavigationDrawerComponent.prototype.css;
    /**
     * @type {?}
     * @private
     */
    IgxNavigationDrawerComponent.prototype._drawer;
    /**
     * @type {?}
     * @private
     */
    IgxNavigationDrawerComponent.prototype._overlay;
    /**
     * @type {?}
     * @private
     */
    IgxNavigationDrawerComponent.prototype._styleDummy;
    /**
     * Pan animation properties
     * @type {?}
     * @private
     */
    IgxNavigationDrawerComponent.prototype._panning;
    /**
     * @type {?}
     * @private
     */
    IgxNavigationDrawerComponent.prototype._panStartWidth;
    /**
     * @type {?}
     * @private
     */
    IgxNavigationDrawerComponent.prototype._panLimit;
    /**
     * @type {?}
     * @private
     */
    IgxNavigationDrawerComponent.prototype._maxEdgeZone;
    /**
     * @type {?}
     * @private
     */
    IgxNavigationDrawerComponent.prototype.checkPinThreshold;
    /**
     * @type {?}
     * @private
     */
    IgxNavigationDrawerComponent.prototype.swipe;
    /**
     * @type {?}
     * @private
     */
    IgxNavigationDrawerComponent.prototype.panstart;
    /**
     * @type {?}
     * @private
     */
    IgxNavigationDrawerComponent.prototype.pan;
    /**
     * @type {?}
     * @private
     */
    IgxNavigationDrawerComponent.prototype.panEnd;
    /**
     * @type {?}
     * @private
     */
    IgxNavigationDrawerComponent.prototype.toggleOpenedEvent;
    /**
     * @type {?}
     * @private
     */
    IgxNavigationDrawerComponent.prototype.toggleClosedEvent;
    /**
     * @type {?}
     * @private
     */
    IgxNavigationDrawerComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    IgxNavigationDrawerComponent.prototype._state;
    /**
     * @type {?}
     * @protected
     */
    IgxNavigationDrawerComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    IgxNavigationDrawerComponent.prototype._touchManager;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9uYXZpZ2F0aW9uLWRyYXdlci9uYXZpZ2F0aW9uLWRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLE1BQU0sRUFDTixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixRQUFRLEVBR1IsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLG9CQUFvQixFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztJQUU5RyxPQUFPLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NmLE1BQU0sT0FBTyw0QkFBNEI7Ozs7Ozs7SUFvVnJDLFlBQ2dDLFVBQXNCLEVBQzlCLE1BQTRCLEVBRXRDLFFBQWtCLEVBQ3BCLGFBQW9DO1FBSmhCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFFdEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNwQixrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUFsVm5CLGFBQVEsR0FBRyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7UUFnQnpDLE9BQUUsR0FBRyxrQkFBa0IsT0FBTyxFQUFFLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7UUFl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OEM7Ozs7Ozs7OztJQVE5Qyw4Q0FBNkM7Ozs7O0lBYTdDLHFEQUF5RDs7Ozs7O0lBc0J6RCx1REFDeUQ7Ozs7O0lBMEJ6RCx5REFBa0M7Ozs7O0lBQ2xDLG1EQUFxSTs7Ozs7SUFDckksdURBQXNDOzs7OztJQUN0QywyQ0FLRTs7Ozs7SUFFRiwrQ0FBa0U7Ozs7O0lBQ2xFLGdEQUFxRTs7Ozs7SUFDckUsbURBQXNFOzs7Ozs7SUF3QnRFLGdEQUF5Qjs7Ozs7SUFDekIsc0RBQStCOzs7OztJQUMvQixpREFBMEI7Ozs7O0lBVzFCLG9EQUEwQjs7Ozs7SUE4UzFCLHlEQWdCQzs7Ozs7SUFFRCw2Q0F1QkM7Ozs7O0lBRUQsZ0RBZ0JDOzs7OztJQUVELDJDQThDQzs7Ozs7SUFFRCw4Q0FjQzs7Ozs7SUErQkQseURBR0M7Ozs7O0lBRUQseURBR0M7Ozs7O0lBL1pHLGtEQUFrRDs7Ozs7SUFDbEQsOENBQWdEOzs7OztJQUVoRCxnREFBNEI7Ozs7O0lBQzVCLHFEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBDb21wb25lbnQsXG4gICAgQ29udGVudENoaWxkLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIEluamVjdCxcbiAgICBJbnB1dCxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBPcHRpb25hbCxcbiAgICBPdXRwdXQsXG4gICAgUmVuZGVyZXIsXG4gICAgU2ltcGxlQ2hhbmdlLFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgaW50ZXJ2YWwsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJZ3hOYXZpZ2F0aW9uU2VydmljZSwgSVRvZ2dsZVZpZXcgfSBmcm9tICcuLi9jb3JlL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgSGFtbWVyR2VzdHVyZXNNYW5hZ2VyIH0gZnJvbSAnLi4vY29yZS90b3VjaCc7XG5pbXBvcnQgeyBJZ3hOYXZEcmF3ZXJNaW5pVGVtcGxhdGVEaXJlY3RpdmUsIElneE5hdkRyYXdlclRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLWRyYXdlci5kaXJlY3RpdmVzJztcblxubGV0IE5FWFRfSUQgPSAwO1xuLyoqXG4gKiAqKklnbml0ZSBVSSBmb3IgQW5ndWxhciBOYXZpZ2F0aW9uIERyYXdlcioqIC1cbiAqIFtEb2N1bWVudGF0aW9uXShodHRwczovL3d3dy5pbmZyYWdpc3RpY3MuY29tL3Byb2R1Y3RzL2lnbml0ZS11aS1hbmd1bGFyL2FuZ3VsYXIvY29tcG9uZW50cy9uYXZkcmF3ZXIuaHRtbClcbiAqXG4gKiBUaGUgSWduaXRlIFVJIE5hdmlnYXRpb24gRHJhd2VyIGlzIGEgY29sbGFwc2libGUgc2lkZSBuYXZpZ2F0aW9uIGNvbnRhaW5lciBjb21tb25seSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggdGhlIE5hdmJhci5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgaHRtbFxuICogPGlneC1uYXYtZHJhd2VyIGlkPVwibmF2aWdhdGlvblwiIFtpc09wZW5dPVwidHJ1ZVwiPlxuICogICA8bmctdGVtcGxhdGUgaWd4RHJhd2VyPlxuICogICAgIDxuYXY+XG4gKiAgICAgICA8c3BhbiBpZ3hEcmF3ZXJJdGVtIFtpc0hlYWRlcl09XCJ0cnVlXCI+RW1haWw8L3NwYW4+XG4gKiAgICAgICA8c3BhbiBpZ3hEcmF3ZXJJdGVtIGlneFJpcHBsZT5JbmJveDwvc3Bhbj5cbiAqICAgICAgIDxzcGFuIGlneERyYXdlckl0ZW0gaWd4UmlwcGxlPkRlbGV0ZWQ8L3NwYW4+XG4gKiAgICAgICA8c3BhbiBpZ3hEcmF3ZXJJdGVtIGlneFJpcHBsZT5TZW50PC9zcGFuPlxuICogICAgIDwvbmF2PlxuICogICA8L25nLXRlbXBsYXRlPlxuICogPC9pZ3gtbmF2LWRyYXdlcj5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBwcm92aWRlcnM6IFtIYW1tZXJHZXN0dXJlc01hbmFnZXJdLFxuICAgIHNlbGVjdG9yOiAnaWd4LW5hdi1kcmF3ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnbmF2aWdhdGlvbi1kcmF3ZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hOYXZpZ2F0aW9uRHJhd2VyQ29tcG9uZW50IGltcGxlbWVudHNcbiAgICBJVG9nZ2xlVmlldyxcbiAgICBPbkluaXQsXG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25DaGFuZ2VzIHtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKSBwdWJsaWMgY3NzQ2xhc3MgPSAnaWd4LW5hdi1kcmF3ZXInO1xuXG4gICAgLyoqXG4gICAgICogSUQgb2YgdGhlIGNvbXBvbmVudFxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldFxuICAgICAqIGxldCBteU5hdkRyYXdlcklkID0gdGhpcy5uYXZkcmF3ZXIuaWQ7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqICA8aWd4LW5hdi1kcmF3ZXIgaWQ9J25hdmRyYXdlcic+PC9pZ3gtbmF2LWRyYXdlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIEBJbnB1dCgpIHB1YmxpYyBpZCA9IGBpZ3gtbmF2LWRyYXdlci0ke05FWFRfSUQrK31gO1xuXG4gICAgLyoqXG4gICAgICogUG9zaXRpb24gb2YgdGhlIE5hdmlnYXRpb24gRHJhd2VyLiBDYW4gYmUgXCJsZWZ0XCIoZGVmYXVsdCkgb3IgXCJyaWdodFwiLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldFxuICAgICAqIGxldCBteU5hdkRyYXdlclBvc2l0aW9uID0gdGhpcy5uYXZkcmF3ZXIucG9zaXRpb247XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqIDxpZ3gtbmF2LWRyYXdlciBbcG9zaXRpb25dPVwiJ2xlZnQnXCI+PC9pZ3gtbmF2LWRyYXdlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcG9zaXRpb24gPSAnbGVmdCc7XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGVzIHRoZSB1c2Ugb2YgdG91Y2ggZ2VzdHVyZXMgdG8gbWFuaXB1bGF0ZSB0aGUgZHJhd2VyOlxuICAgICAqIC0gc3dpcGUvcGFuIGZyb20gZWRnZSB0byBvcGVuLCBzd2lwZS10b2dnbGUgYW5kIHBhbi1kcmFnLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldFxuICAgICAqIGxldCBnZXN0dXJlc0VuYWJsZWQgPSB0aGlzLm5hdmRyYXdlci5lbmFibGVHZXN0dXJlcztcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGlneC1uYXYtZHJhd2VyIFtlbmFibGVHZXN0dXJlc109J3RydWUnPjwvaWd4LW5hdi1kcmF3ZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZUdlc3R1cmVzID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIFN0YXRlIG9mIHRoZSBkcmF3ZXIuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IG5hdkRyYXdlcklzT3BlbiA9IHRoaXMubmF2ZHJhd2VyLmlzT3BlbjtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGlneC1uYXYtZHJhd2VyIFtpc09wZW5dPSdmYWxzZSc+PC9pZ3gtbmF2LWRyYXdlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaXNPcGVuID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHBpbm5lZCB0aGUgZHJhd2VyIGlzIHJlbGF0aXZlbHkgcG9zaXRpb25lZCBpbnN0ZWFkIG9mIHNpdHRpbmcgYWJvdmUgY29udGVudC5cbiAgICAgKiBNYXkgcmVxdWlyZSBhZGRpdGlvbmFsIGxheW91dCBzdHlsaW5nLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldFxuICAgICAqIGxldCBuYXZEcmF3ZXJJc1Bpbm5lZCA9IHRoaXMubmF2ZHJhd2VyLnBpbjtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGlneC1uYXYtZHJhd2VyIFtwaW5dPSdmYWxzZSc+PC9pZ3gtbmF2LWRyYXdlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcGluID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBNaW5pbXVtIGRldmljZSB3aWR0aCByZXF1aXJlZCBmb3IgYXV0b21hdGljIHBpbiB0byBiZSB0b2dnbGVkLlxuICAgICAqIERlZmF1bHQgaXMgMTAyNCwgY2FuIGJlIHNldCB0byBhIGZhbHN5IHZhbHVlIHRvIGRpc2FibGUgdGhpcyBiZWhhdmlvci5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRcbiAgICAgKiBsZXQgbmF2RHJhd2VyUGluVHJlc2hvbGQgPSB0aGlzLm5hdmRyYXdlci5waW5UaHJlc2hvbGQ7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqIDxpZ3gtbmF2LWRyYXdlciBbcGluVHJlc2hvbGRdPScxMDI0Jz48L2lneC1uYXYtZHJhd2VyPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwaW5UaHJlc2hvbGQgPSAxMDI0O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBuYXRpdmVFbGVtZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaWR0aCBvZiB0aGUgZHJhd2VyIGluIGl0cyBvcGVuIHN0YXRlLiBEZWZhdWx0cyB0byBcIjI4MHB4XCIuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IG5hdkRyYXdlcldpZHRoID0gdGhpcy5uYXZkcmF3ZXIud2lkdGg7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqIDxpZ3gtbmF2LWRyYXdlciBbd2lkdGhdPVwiJzIyOHB4J1wiPjwvaWd4LW5hdi1kcmF3ZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHdpZHRoID0gJzI4MHB4JztcblxuICAgIC8qKlxuICAgICAqIFdpZHRoIG9mIHRoZSBkcmF3ZXIgaW4gaXRzIG1pbmkgc3RhdGUuIERlZmF1bHRzIHRvIDYwcHguXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IG5hdkRyYXdlck1pbmlXaWR0aCA9IHRoaXMubmF2ZHJhd2VyLm1pbmlXaWR0aDtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGlneC1uYXYtZHJhd2VyIFttaW5pV2lkdGhdPVwiJzM0cHgnXCI+PC9pZ3gtbmF2LWRyYXdlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbWluaVdpZHRoID0gJzYwcHgnO1xuXG4gICAgLyoqXG4gICAgICogUGlubmVkIHN0YXRlIGNoYW5nZSBvdXRwdXQgZm9yIHR3by13YXkgYmluZGluZy5cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LW5hdi1kcmF3ZXIgWyhwaW4pXT0naXNQaW5uZWQnPjwvaWd4LW5hdi1kcmF3ZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBwaW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KHRydWUpO1xuICAgIC8qKlxuICAgICAqIEV2ZW50IGZpcmVkIGFzIHRoZSBOYXZpZ2F0aW9uIERyYXdlciBpcyBhYm91dCB0byBvcGVuLlxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LW5hdi1kcmF3ZXIgKG9wZW5pbmcpPSdvbk9wZW5pbmcoKSc+PC9pZ3gtbmF2LWRyYXdlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9wZW5pbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgLyoqXG4gICAgICogRXZlbnQgZmlyZWQgd2hlbiB0aGUgTmF2aWdhdGlvbiBEcmF3ZXIgaGFzIG9wZW5lZC5cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LW5hdi1kcmF3ZXIgKG9wZW5lZCk9J29uT3BlbmVkKCknPjwvaWd4LW5hdi1kcmF3ZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvcGVuZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgLyoqXG4gICAgICogRXZlbnQgZmlyZWQgYXMgdGhlIE5hdmlnYXRpb24gRHJhd2VyIGlzIGFib3V0IHRvIGNsb3NlLlxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtbmF2LWRyYXdlciAoY2xvc2luZyk9J29uQ2xvc2luZygpJz48L2lneC1uYXYtZHJhd2VyPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2xvc2luZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAvKipcbiAgICAgKiBFdmVudCBmaXJlZCB3aGVuIHRoZSBOYXZpZ2F0aW9uIERyYXdlciBoYXMgY2xvc2VkLlxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtbmF2LWRyYXdlciAoY2xvc2VkKT0nb25DbG9zZWQoKSc+PC9pZ3gtbmF2LWRyYXdlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIGNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLm1pbmlUZW1wbGF0ZSAmJiAhdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1pbmlUZW1wbGF0ZS50ZW1wbGF0ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbnRlbnRUZW1wbGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudFRlbXBsYXRlLnRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbWluaVRlbXBsYXRlOiBJZ3hOYXZEcmF3ZXJNaW5pVGVtcGxhdGVEaXJlY3RpdmU7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgbWluaVRlbXBsYXRlKCk6IElneE5hdkRyYXdlck1pbmlUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9taW5pVGVtcGxhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4TmF2RHJhd2VyTWluaVRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IElneE5hdkRyYXdlck1pbmlUZW1wbGF0ZURpcmVjdGl2ZSwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBzZXQgbWluaVRlbXBsYXRlKHY6IElneE5hdkRyYXdlck1pbmlUZW1wbGF0ZURpcmVjdGl2ZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLnNldERyYXdlcldpZHRoKHYgPyB0aGlzLm1pbmlXaWR0aCA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9taW5pVGVtcGxhdGUgPSB2O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneE5hdkRyYXdlclRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IElneE5hdkRyYXdlclRlbXBsYXRlRGlyZWN0aXZlLCBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHJvdGVjdGVkIGNvbnRlbnRUZW1wbGF0ZTogSWd4TmF2RHJhd2VyVGVtcGxhdGVEaXJlY3RpdmU7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5mbGV4QmFzaXMnKVxuICAgIGdldCBmbGV4V2lkdGgoKSB7XG4gICAgICAgIGlmICghdGhpcy5waW4pIHtcbiAgICAgICAgICAgIHJldHVybiAnMHB4JztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1pbmlUZW1wbGF0ZSAmJiB0aGlzLm1pbmlXaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWluaVdpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcwcHgnO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5vcmRlcicpXG4gICAgZ2V0IGlzUGlubmVkUmlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBpbiAmJiB0aGlzLnBvc2l0aW9uID09PSAncmlnaHQnID8gJzEnIDogJzAnO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dlc3R1cmVzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF93aWR0aENhY2hlOiB7IHdpZHRoOiBudW1iZXIsIG1pbmlXaWR0aDogbnVtYmVyLCB3aW5kb3dXaWR0aDogbnVtYmVyIH0gPSB7IHdpZHRoOiBudWxsLCBtaW5pV2lkdGg6IG51bGwsIHdpbmRvd1dpZHRoOiBudWxsIH07XG4gICAgcHJpdmF0ZSBfcmVzaXplT2JzZXJ2ZXI6IFN1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIGNzczogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nOyB9ID0ge1xuICAgICAgICBkcmF3ZXI6ICdpZ3gtbmF2LWRyYXdlcl9fYXNpZGUnLFxuICAgICAgICBtaW5pOiAnaWd4LW5hdi1kcmF3ZXJfX2FzaWRlLS1taW5pJyxcbiAgICAgICAgb3ZlcmxheTogJ2lneC1uYXYtZHJhd2VyX19vdmVybGF5JyxcbiAgICAgICAgc3R5bGVEdW1teTogJ2lneC1uYXYtZHJhd2VyX19zdHlsZS1kdW1teSdcbiAgICB9O1xuXG4gICAgQFZpZXdDaGlsZCgnYXNpZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIF9kcmF3ZXI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnb3ZlcmxheScsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgX292ZXJsYXk6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnZHVtbXknLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIF9zdHlsZUR1bW15OiBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICAqIEBoaWRkZW5cbiAgICAgICovXG4gICAgZ2V0IGRyYXdlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdlci5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgb3ZlcmxheSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX292ZXJsYXkubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IHN0eWxlRHVtbXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdHlsZUR1bW15Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqIFBhbiBhbmltYXRpb24gcHJvcGVydGllcyAqL1xuICAgIHByaXZhdGUgX3Bhbm5pbmcgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9wYW5TdGFydFdpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfcGFuTGltaXQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRvIGRlY2lkZSB3aGV0aGVyIHRvIGNoYW5nZSB3aWR0aCBvciB0cmFuc2xhdGUgdGhlIGRyYXdlciBmcm9tIHBhbiBnZXN0dXJlLlxuICAgICAqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaGFzQW5pbWF0ZVdpZHRoKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5waW4gfHwgISF0aGlzLm1pbmlUZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9tYXhFZGdlWm9uZSA9IDUwO1xuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIHRvdWNoIGdlc3R1cmVzIChzd2lwZSBhbmQgcGFuKS5cbiAgICAgKiBEZWZhdWx0cyB0byA1MCAoaW4gcHgpIGFuZCBpcyBleHRlbmRlZCB0byBhdCBsZWFzdCAxMTAlIG9mIHRoZSBtaW5pIHRlbXBsYXRlIHdpZHRoIGlmIGF2YWlsYWJsZS5cbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG1heEVkZ2Vab25lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4RWRnZVpvbmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgRHJhd2VyIHdpZHRoIGZvciBzcGVjaWZpYyBzdGF0ZS5cbiAgICAgKiBXaWxsIGF0dGVtcHQgdG8gZXZhbHVhdGUgcmVxdWVzdGVkIHN0YXRlIGFuZCBjYWNoZS5cbiAgICAgKlxuICAgICAqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZXhwZWN0ZWRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXhwZWN0ZWRXaWR0aChmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBEcmF3ZXIgbWluaSB3aWR0aCBmb3Igc3BlY2lmaWMgc3RhdGUuXG4gICAgICogV2lsbCBhdHRlbXB0IHRvIGV2YWx1YXRlIHJlcXVlc3RlZCBzdGF0ZSBhbmQgY2FjaGUuXG4gICAgICpcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBleHBlY3RlZE1pbmlXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXhwZWN0ZWRXaWR0aCh0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCB0b3VjaE1hbmFnZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b3VjaE1hbmFnZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhwb3NlcyBvcHRpb25hbCBuYXZpZ2F0aW9uIHNlcnZpY2VcbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoRWxlbWVudFJlZikgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9zdGF0ZTogSWd4TmF2aWdhdGlvblNlcnZpY2UsXG4gICAgICAgIC8vIHByaXZhdGUgYW5pbWF0ZTogQW5pbWF0aW9uQnVpbGRlciwgVE9ET1xuICAgICAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyLFxuICAgICAgICBwcml2YXRlIF90b3VjaE1hbmFnZXI6IEhhbW1lckdlc3R1cmVzTWFuYWdlcikge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vIERPTSBhbmQgQElucHV0KCktcyBpbml0aWFsaXplZFxuICAgICAgICBpZiAodGhpcy5fc3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlLmFkZCh0aGlzLmlkLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RHJhd2VyV2lkdGgodGhpcy53aWR0aCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgLy8gd2FpdCBmb3IgdGVtcGxhdGUgYW5kIG5nLWNvbnRlbnQgdG8gYmUgcmVhZHlcbiAgICAgICAgdGhpcy51cGRhdGVFZGdlWm9uZSgpO1xuICAgICAgICB0aGlzLmNoZWNrUGluVGhyZXNob2xkKCk7XG5cbiAgICAgICAgdGhpcy5lbnN1cmVFdmVudHMoKTtcblxuICAgICAgICAvLyBUT0RPOiBhcHBseSBwbGF0Zm9ybS1zYWZlIFJ1bGVyIGZyb20gaHR0cDovL3BsbmtyLmNvL2VkaXQvODFuV0R5cmVZTXprdW5paGZSZ1g/cD1wcmV2aWV3XG4gICAgICAgIC8vIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy82NTE1KSwgYmxvY2tlZCBieSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy82OTA0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fdG91Y2hNYW5hZ2VyLmRlc3Ryb3koKTtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZS5yZW1vdmUodGhpcy5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3Jlc2l6ZU9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXNpemVPYnNlcnZlci51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wTmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcbiAgICAgICAgLy8gc2ltcGxlIHNldHRpbmdzIGNhbiBjb21lIGZyb20gYXR0cmlidXRlIHNldCAocmF0aGVyIHRoYW4gYmluZGluZyksIG1ha2Ugc3VyZSBib29sZWFuIHByb3BzIGFyZSBjb252ZXJ0ZWRcbiAgICAgICAgaWYgKGNoYW5nZXMuZW5hYmxlR2VzdHVyZXMgJiYgY2hhbmdlcy5lbmFibGVHZXN0dXJlcy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVHZXN0dXJlcyA9ICEhKHRoaXMuZW5hYmxlR2VzdHVyZXMgJiYgdGhpcy5lbmFibGVHZXN0dXJlcy50b1N0cmluZygpID09PSAndHJ1ZScpO1xuICAgICAgICAgICAgdGhpcy5lbnN1cmVFdmVudHMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlcy5waW4gJiYgY2hhbmdlcy5waW4uY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGluID0gISEodGhpcy5waW4gJiYgdGhpcy5waW4udG9TdHJpbmcoKSA9PT0gJ3RydWUnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBpbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RvdWNoTWFuYWdlci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ2VzdHVyZXNBdHRhY2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuc3VyZUV2ZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZXMucGluVGhyZXNob2xkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5waW5UaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuc3VyZUV2ZW50cygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tQaW5UaHJlc2hvbGQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzLndpZHRoICYmIHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLnNldERyYXdlcldpZHRoKGNoYW5nZXMud2lkdGguY3VycmVudFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzLm1pbmlXaWR0aCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RHJhd2VyV2lkdGgoY2hhbmdlcy5taW5pV2lkdGguY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlRWRnZVpvbmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSB0aGUgb3BlbiBzdGF0ZSBvZiB0aGUgTmF2aWdhdGlvbiBEcmF3ZXIuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5uYXZkcmF3ZXIudG9nZ2xlKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9wZW4gdGhlIE5hdmlnYXRpb24gRHJhd2VyLiBIYXMgbm8gZWZmZWN0IGlmIGFscmVhZHkgb3BlbmVkLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMubmF2ZHJhd2VyLm9wZW4oKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgb3BlbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Bhbm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRQYW4oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW5pbmcuZW1pdCgpO1xuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG5cbiAgICAgICAgLy8gVE9ETzogU3dpdGNoIHRvIGFuaW1hdGUgQVBJIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgIC8vIHZhciBhbmltYXRpb25Dc3MgPSB0aGlzLmFuaW1hdGUuY3NzKCk7XG4gICAgICAgIC8vICAgICBhbmltYXRpb25Dc3NcbiAgICAgICAgLy8gICAgICAgICAuc2V0U3R5bGVzKHsnd2lkdGgnOic1MHB4J30sIHsnd2lkdGgnOic0MDBweCd9KVxuICAgICAgICAvLyAgICAgICAgIC5zdGFydCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudClcbiAgICAgICAgLy8gICAgICAgICAub25Db21wbGV0ZSgoKSA9PiBhbmltYXRpb25Dc3Muc2V0VG9TdHlsZXMoeyd3aWR0aCc6J2F1dG8nfSkuc3RhcnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy50b2dnbGVPcGVuZWRFdmVudCwgZmFsc2UpO1xuICAgICAgICB0aGlzLnNldERyYXdlcldpZHRoKHRoaXMud2lkdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlIHRoZSBOYXZpZ2F0aW9uIERyYXdlci4gSGFzIG5vIGVmZmVjdCBpZiBhbHJlYWR5IGNsb3NlZC5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLm5hdmRyYXdlci5jbG9zZSgpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBjbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Bhbm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRQYW4oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbG9zaW5nLmVtaXQoKTtcblxuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldERyYXdlcldpZHRoKHRoaXMubWluaVRlbXBsYXRlID8gdGhpcy5taW5pV2lkdGggOiAnJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnRvZ2dsZUNsb3NlZEV2ZW50LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzZXRfbWF4RWRnZVpvbmUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9tYXhFZGdlWm9uZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgRHJhd2VyIHdpZHRoIGZvciBzcGVjaWZpYyBzdGF0ZS4gV2lsbCBhdHRlbXB0IHRvIGV2YWx1YXRlIHJlcXVlc3RlZCBzdGF0ZSBhbmQgY2FjaGUuXG4gICAgICpcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQHBhcmFtIFttaW5pXSAtIFJlcXVlc3QgbWluaSB3aWR0aCBpbnN0ZWFkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldEV4cGVjdGVkV2lkdGgobWluaT86IGJvb2xlYW4pOiBudW1iZXIge1xuICAgICAgICBpZiAobWluaSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1pbmlUZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubWluaVdpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5taW5pV2lkdGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZiAoIXRoaXMuaXNPcGVuKSB7IC8vIFRoaXMgV09OJ1Qgd29yayBkdWUgdG8gdHJhbnNpdGlvbiB0aW1pbmdzLi4uXG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlblsxXS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl93aWR0aENhY2hlLm1pbmlXaWR0aCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmb3JjZSBjbGFzcyBmb3Igd2lkdGggY2FsYy4gVE9ETz9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5zdHlsZUR1bW15LCB0aGlzLmNzcy5kcmF3ZXIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLnN0eWxlRHVtbXksIHRoaXMuY3NzLm1pbmksIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl93aWR0aENhY2hlLm1pbmlXaWR0aCA9IHRoaXMuc3R5bGVEdW1teS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5zdHlsZUR1bW15LCB0aGlzLmNzcy5kcmF3ZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5zdHlsZUR1bW15LCB0aGlzLmNzcy5taW5pLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl93aWR0aENhY2hlLm1pbmlXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy53aWR0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl93aWR0aENhY2hlLndpZHRoID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvcmNlIGNsYXNzIGZvciB3aWR0aCBjYWxjLiBUT0RPP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLnN0eWxlRHVtbXksIHRoaXMuY3NzLmRyYXdlciwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dpZHRoQ2FjaGUud2lkdGggPSB0aGlzLnN0eWxlRHVtbXkub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuc3R5bGVEdW1teSwgdGhpcy5jc3MuZHJhd2VyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl93aWR0aENhY2hlLndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRXaW5kb3dXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuICh3aW5kb3cuaW5uZXJXaWR0aCA+IDApID8gd2luZG93LmlubmVyV2lkdGggOiBzY3JlZW4ud2lkdGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZHJhd2VyIHdpZHRoLlxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0RHJhd2VyV2lkdGgod2lkdGg6IHN0cmluZykge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHJhd2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5kcmF3ZXIsICd3aWR0aCcsIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGN1cnJlbnQgRHJhd2VyIHdpZHRoLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0RHJhd2VyV2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhd2VyLm9mZnNldFdpZHRoO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW5zdXJlRXZlbnRzKCkge1xuICAgICAgICAvLyBzZXQgbGlzdGVuZXJzIGZvciBzd2lwZS9wYW4gb25seSBpZiBuZWVkZWQsIGJ1dCBqdXN0IG9uY2VcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlR2VzdHVyZXMgJiYgIXRoaXMucGluICYmICF0aGlzLl9nZXN0dXJlc0F0dGFjaGVkKSB7XG4gICAgICAgICAgICAvLyBCdWlsdC1pbiBtYW5hZ2VyIGhhbmRsZXIoTDIwODg3KSBjYXVzZXMgZW5kbGVzcyBsb29wIGFuZCBtYXggc3RhY2sgZXhjZXB0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNjk5M1xuICAgICAgICAgICAgLy8gVXNlIG91cnMgZm9yIG5vdyAodW50aWwgYmV0YS4xMCk6XG4gICAgICAgICAgICAvLyB0aGlzLnJlbmRlcmVyLmxpc3Rlbihkb2N1bWVudCwgXCJzd2lwZVwiLCB0aGlzLnN3aXBlKTtcbiAgICAgICAgICAgIHRoaXMuX3RvdWNoTWFuYWdlci5hZGRHbG9iYWxFdmVudExpc3RlbmVyKCdkb2N1bWVudCcsICdzd2lwZScsIHRoaXMuc3dpcGUpO1xuICAgICAgICAgICAgdGhpcy5fZ2VzdHVyZXNBdHRhY2hlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIHRoaXMucmVuZGVyZXIubGlzdGVuKGRvY3VtZW50LCBcInBhbnN0YXJ0XCIsIHRoaXMucGFuc3RhcnQpO1xuICAgICAgICAgICAgLy8gdGhpcy5yZW5kZXJlci5saXN0ZW4oZG9jdW1lbnQsIFwicGFuXCIsIHRoaXMucGFuKTtcbiAgICAgICAgICAgIHRoaXMuX3RvdWNoTWFuYWdlci5hZGRHbG9iYWxFdmVudExpc3RlbmVyKCdkb2N1bWVudCcsICdwYW5zdGFydCcsIHRoaXMucGFuc3RhcnQpO1xuICAgICAgICAgICAgdGhpcy5fdG91Y2hNYW5hZ2VyLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoJ2RvY3VtZW50JywgJ3Bhbm1vdmUnLCB0aGlzLnBhbik7XG4gICAgICAgICAgICB0aGlzLl90b3VjaE1hbmFnZXIuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcignZG9jdW1lbnQnLCAncGFuZW5kJywgdGhpcy5wYW5FbmQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fcmVzaXplT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZU9ic2VydmVyID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoZGVib3VuY2UoKCkgPT4gaW50ZXJ2YWwoMTUwKSkpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1BpblRocmVzaG9sZCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUVkZ2Vab25lKCkge1xuICAgICAgICBsZXQgbWF4VmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMubWluaVRlbXBsYXRlKSB7XG4gICAgICAgICAgICBtYXhWYWx1ZSA9IE1hdGgubWF4KHRoaXMuX21heEVkZ2Vab25lLCB0aGlzLmdldEV4cGVjdGVkV2lkdGgodHJ1ZSkgKiAxLjEpO1xuICAgICAgICAgICAgdGhpcy5zZXRfbWF4RWRnZVpvbmUobWF4VmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja1BpblRocmVzaG9sZCA9IChldnQ/OiBFdmVudCkgPT4ge1xuICAgICAgICBsZXQgd2luZG93V2lkdGg7XG4gICAgICAgIGlmICh0aGlzLnBpblRocmVzaG9sZCkge1xuICAgICAgICAgICAgd2luZG93V2lkdGggPSB0aGlzLmdldFdpbmRvd1dpZHRoKCk7XG4gICAgICAgICAgICBpZiAoZXZ0ICYmIHRoaXMuX3dpZHRoQ2FjaGUud2luZG93V2lkdGggPT09IHdpbmRvd1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fd2lkdGhDYWNoZS53aW5kb3dXaWR0aCA9IHdpbmRvd1dpZHRoO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBpbiAmJiB3aW5kb3dXaWR0aCA+PSB0aGlzLnBpblRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGluID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBpbkNoYW5nZS5lbWl0KHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBpbiAmJiB3aW5kb3dXaWR0aCA8IHRoaXMucGluVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5waW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBpbkNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3dpcGUgPSAoZXZ0OiBIYW1tZXJJbnB1dCkgPT4ge1xuICAgICAgICAvLyBUT0RPOiBDb3VsZCBhbHNvIGZvcmNlIGlucHV0IHR5cGU6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI3MTA4MDUyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVHZXN0dXJlcyB8fCBldnQucG9pbnRlclR5cGUgIT09ICd0b3VjaCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhhbW1lckpTIHN3aXBlIGlzIGhvcml6b250YWwtb25seSBieSBkZWZhdWx0LCBkb24ndCBjaGVjayBkZWx0YVlcbiAgICAgICAgbGV0IGRlbHRhWDtcbiAgICAgICAgbGV0IHN0YXJ0UG9zaXRpb247XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAvLyB3aGVuIG9uIHRoZSByaWdodCB1c2UgaW52ZXJzZSBvZiBkZWx0YVhcbiAgICAgICAgICAgIGRlbHRhWCA9IC1ldnQuZGVsdGFYO1xuICAgICAgICAgICAgc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0V2luZG93V2lkdGgoKSAtIChldnQuY2VudGVyLnggKyBldnQuZGlzdGFuY2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsdGFYID0gZXZ0LmRlbHRhWDtcbiAgICAgICAgICAgIHN0YXJ0UG9zaXRpb24gPSBldnQuY2VudGVyLnggLSBldnQuZGlzdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gb25seSBhY2NlcHQgY2xvc2luZyBzd2lwZSAoaWdub3JpbmcgbWluRWRnZVpvbmUpIHdoZW4gdGhlIGRyYXdlciBpcyBleHBhbmRlZDpcbiAgICAgICAgaWYgKCh0aGlzLmlzT3BlbiAmJiBkZWx0YVggPCAwKSB8fFxuICAgICAgICAgICAgLy8gcG9zaXRpdmUgZGVsdGFYIGZyb20gdGhlIGVkZ2U6XG4gICAgICAgICAgICAoZGVsdGFYID4gMCAmJiBzdGFydFBvc2l0aW9uIDwgdGhpcy5tYXhFZGdlWm9uZSkpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHBhbnN0YXJ0ID0gKGV2dDogSGFtbWVySW5wdXQpID0+IHsgLy8gVE9ETzogdGVzdCBjb2RlXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVHZXN0dXJlcyB8fCB0aGlzLnBpbiB8fCBldnQucG9pbnRlclR5cGUgIT09ICd0b3VjaCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbiA9PT0gJ3JpZ2h0JyA/IHRoaXMuZ2V0V2luZG93V2lkdGgoKSAtIChldnQuY2VudGVyLnggKyBldnQuZGlzdGFuY2UpXG4gICAgICAgICAgICA6IGV2dC5jZW50ZXIueCAtIGV2dC5kaXN0YW5jZTtcblxuICAgICAgICAvLyBjYWNoZSB3aWR0aCBkdXJpbmcgYW5pbWF0aW9uLCBmbGFnIHRvIGFsbG93IGZ1cnRoZXIgaGFuZGxpbmdcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuIHx8IChzdGFydFBvc2l0aW9uIDwgdGhpcy5tYXhFZGdlWm9uZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3Bhbm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fcGFuU3RhcnRXaWR0aCA9IHRoaXMuZ2V0RXhwZWN0ZWRXaWR0aCghdGhpcy5pc09wZW4pO1xuICAgICAgICAgICAgdGhpcy5fcGFuTGltaXQgPSB0aGlzLmdldEV4cGVjdGVkV2lkdGgodGhpcy5pc09wZW4pO1xuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLm92ZXJsYXksICdwYW5uaW5nJywgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmRyYXdlciwgJ3Bhbm5pbmcnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcGFuID0gKGV2dDogSGFtbWVySW5wdXQpID0+IHtcbiAgICAgICAgLy8gVE9ETzogaW5wdXQuZGVsdGFYID0gcHJldkRlbHRhLnggKyAoY2VudGVyLnggLSBvZmZzZXQueCk7XG4gICAgICAgIC8vIGdldCBhY3R1YWwgZGVsdGEgKG5vdCB0b3RhbCBzZXNzaW9uIG9uZSkgZnJvbSBldmVudD9cbiAgICAgICAgLy8gcGFuIFdJTEwgYWxzbyBmaXJlIGFmdGVyIGEgZnVsbCBzd2lwZSwgb25seSByZXNpemUgb24gZmxhZ1xuICAgICAgICBpZiAoIXRoaXMuX3Bhbm5pbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByaWdodDogYm9vbGVhbiA9IHRoaXMucG9zaXRpb24gPT09ICdyaWdodCc7XG4gICAgICAgIC8vIHdoZW4gb24gdGhlIHJpZ2h0IHVzZSBpbnZlcnNlIG9mIGRlbHRhWFxuICAgICAgICBjb25zdCBkZWx0YVggPSByaWdodCA/IC1ldnQuZGVsdGFYIDogZXZ0LmRlbHRhWDtcbiAgICAgICAgbGV0IHZpc2libGVXaWR0aDtcbiAgICAgICAgbGV0IG5ld1g7XG4gICAgICAgIGxldCBwZXJjZW50O1xuXG4gICAgICAgIHZpc2libGVXaWR0aCA9IHRoaXMuX3BhblN0YXJ0V2lkdGggKyBkZWx0YVg7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuICYmIGRlbHRhWCA8IDApIHtcbiAgICAgICAgICAgIC8vIHdoZW4gdmlzaWJsZVdpZHRoIGhpdHMgbGltaXQgLSBzdG9wIGFuaW1hdGluZ1xuICAgICAgICAgICAgaWYgKHZpc2libGVXaWR0aCA8PSB0aGlzLl9wYW5MaW1pdCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzQW5pbWF0ZVdpZHRoKSB7XG4gICAgICAgICAgICAgICAgcGVyY2VudCA9ICh2aXNpYmxlV2lkdGggLSB0aGlzLl9wYW5MaW1pdCkgLyAodGhpcy5fcGFuU3RhcnRXaWR0aCAtIHRoaXMuX3BhbkxpbWl0KTtcbiAgICAgICAgICAgICAgICBuZXdYID0gdmlzaWJsZVdpZHRoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZXJjZW50ID0gdmlzaWJsZVdpZHRoIC8gdGhpcy5fcGFuU3RhcnRXaWR0aDtcbiAgICAgICAgICAgICAgICBuZXdYID0gZXZ0LmRlbHRhWDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0WFNpemUobmV3WCwgcGVyY2VudC50b1ByZWNpc2lvbigyKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5pc09wZW4gJiYgZGVsdGFYID4gMCkge1xuICAgICAgICAgICAgLy8gd2hlbiB2aXNpYmxlV2lkdGggaGl0cyBsaW1pdCAtIHN0b3AgYW5pbWF0aW5nXG4gICAgICAgICAgICBpZiAodmlzaWJsZVdpZHRoID49IHRoaXMuX3BhbkxpbWl0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNBbmltYXRlV2lkdGgpIHtcbiAgICAgICAgICAgICAgICBwZXJjZW50ID0gKHZpc2libGVXaWR0aCAtIHRoaXMuX3BhblN0YXJ0V2lkdGgpIC8gKHRoaXMuX3BhbkxpbWl0IC0gdGhpcy5fcGFuU3RhcnRXaWR0aCk7XG4gICAgICAgICAgICAgICAgbmV3WCA9IHZpc2libGVXaWR0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGVyY2VudCA9IHZpc2libGVXaWR0aCAvIHRoaXMuX3BhbkxpbWl0O1xuICAgICAgICAgICAgICAgIG5ld1ggPSAodGhpcy5fcGFuTGltaXQgLSB2aXNpYmxlV2lkdGgpICogKHJpZ2h0ID8gMSA6IC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0WFNpemUobmV3WCwgcGVyY2VudC50b1ByZWNpc2lvbigyKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHBhbkVuZCA9IChldnQ6IEhhbW1lcklucHV0KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9wYW5uaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVggPSB0aGlzLnBvc2l0aW9uID09PSAncmlnaHQnID8gLWV2dC5kZWx0YVggOiBldnQuZGVsdGFYO1xuICAgICAgICAgICAgY29uc3QgdmlzaWJsZVdpZHRoOiBudW1iZXIgPSB0aGlzLl9wYW5TdGFydFdpZHRoICsgZGVsdGFYO1xuICAgICAgICAgICAgdGhpcy5yZXNldFBhbigpO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBwYW4gYnJvdWdodCB0aGUgZHJhd2VyIHRvIDUwJVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPcGVuICYmIHZpc2libGVXaWR0aCA8PSB0aGlzLl9wYW5TdGFydFdpZHRoIC8gMikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNPcGVuICYmIHZpc2libGVXaWR0aCA+PSB0aGlzLl9wYW5MaW1pdCAvIDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3BhblN0YXJ0V2lkdGggPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldFBhbigpIHtcbiAgICAgICAgdGhpcy5fcGFubmluZyA9IGZhbHNlO1xuICAgICAgICAvKiBzdHlsZXMgZmFpbCB0byBhcHBseSB3aGVuIHNldCBvbiBwYXJlbnQgZHVlIHRvIGV4dHJhIGF0dHJpYnV0ZXMsIHByb2IgbmcgYnVnICovXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMub3ZlcmxheSwgJ3Bhbm5pbmcnLCBmYWxzZSk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZHJhd2VyLCAncGFubmluZycsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXRYU2l6ZSgwLCAnJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYWJzb2x1dGUgcG9zaXRpb24gb3Igd2lkdGggaW4gY2FzZSB0aGUgZHJhd2VyIGRvZXNuJ3QgY2hhbmdlIHBvc2l0aW9uLlxuICAgICAqIEBwYXJhbSB4IHRoZSBudW1iZXIgcGl4ZWxzIHRvIHRyYW5zbGF0ZSBvbiB0aGUgWCBheGlzIG9yIHRoZSB3aWR0aCB0byBzZXQuIDAgd2lkdGggd2lsbCBjbGVhciB0aGUgc3R5bGUgaW5zdGVhZC5cbiAgICAgKiBAcGFyYW0gb3BhY2l0eSBvcHRpb25hbCB2YWx1ZSB0byBhcHBseSB0byB0aGUgb3ZlcmxheVxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0WFNpemUoeDogbnVtYmVyLCBvcGFjaXR5Pzogc3RyaW5nKSB7XG4gICAgICAgIC8vIEFuZ3VsYXIgcG9seWZpbGxzIHBhdGNoZXMgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSwgYnV0IHN3aXRjaCB0byBEb21BZGFwdGVyIEFQSSAoVE9ETylcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNBbmltYXRlV2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLmRyYXdlciwgJ3dpZHRoJywgeCA/IE1hdGguYWJzKHgpICsgJ3B4JyA6ICcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5kcmF3ZXIsICd0cmFuc2Zvcm0nLCB4ID8gJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJ3B4LDAsMCknIDogJycpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZHJhd2VyLCAnLXdlYmtpdC10cmFuc2Zvcm0nLFxuICAgICAgICAgICAgICAgICAgICB4ID8gJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJ3B4LDAsMCknIDogJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wYWNpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMub3ZlcmxheSwgJ29wYWNpdHknLCBvcGFjaXR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2dnbGVPcGVuZWRFdmVudCA9IChldnQ/KSA9PiB7XG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnRvZ2dsZU9wZW5lZEV2ZW50LCBmYWxzZSk7XG4gICAgICAgIHRoaXMub3BlbmVkLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRvZ2dsZUNsb3NlZEV2ZW50ID0gKGV2dD8pID0+IHtcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMudG9nZ2xlQ2xvc2VkRXZlbnQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jbG9zZWQuZW1pdCgpO1xuICAgIH1cbn1cbiJdfQ==