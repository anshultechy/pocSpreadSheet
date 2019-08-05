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
var NEXT_ID = 0;
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
var IgxNavigationDrawerComponent = /** @class */ (function () {
    function IgxNavigationDrawerComponent(elementRef, _state, renderer, _touchManager) {
        var _this = this;
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
        this.id = "igx-nav-drawer-" + NEXT_ID++;
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
        this.checkPinThreshold = function (evt) {
            /** @type {?} */
            var windowWidth;
            if (_this.pinThreshold) {
                windowWidth = _this.getWindowWidth();
                if (evt && _this._widthCache.windowWidth === windowWidth) {
                    return;
                }
                _this._widthCache.windowWidth = windowWidth;
                if (!_this.pin && windowWidth >= _this.pinThreshold) {
                    _this.pin = true;
                    _this.pinChange.emit(true);
                }
                else if (_this.pin && windowWidth < _this.pinThreshold) {
                    _this.pin = false;
                    _this.pinChange.emit(false);
                }
            }
        };
        this.swipe = function (evt) {
            // TODO: Could also force input type: http://stackoverflow.com/a/27108052
            if (!_this.enableGestures || evt.pointerType !== 'touch') {
                return;
            }
            // HammerJS swipe is horizontal-only by default, don't check deltaY
            /** @type {?} */
            var deltaX;
            /** @type {?} */
            var startPosition;
            if (_this.position === 'right') {
                // when on the right use inverse of deltaX
                deltaX = -evt.deltaX;
                startPosition = _this.getWindowWidth() - (evt.center.x + evt.distance);
            }
            else {
                deltaX = evt.deltaX;
                startPosition = evt.center.x - evt.distance;
            }
            // only accept closing swipe (ignoring minEdgeZone) when the drawer is expanded:
            if ((_this.isOpen && deltaX < 0) ||
                // positive deltaX from the edge:
                (deltaX > 0 && startPosition < _this.maxEdgeZone)) {
                _this.toggle();
            }
        };
        this.panstart = function (evt) {
            if (!_this.enableGestures || _this.pin || evt.pointerType !== 'touch') {
                return;
            }
            /** @type {?} */
            var startPosition = _this.position === 'right' ? _this.getWindowWidth() - (evt.center.x + evt.distance)
                : evt.center.x - evt.distance;
            // cache width during animation, flag to allow further handling
            if (_this.isOpen || (startPosition < _this.maxEdgeZone)) {
                _this._panning = true;
                _this._panStartWidth = _this.getExpectedWidth(!_this.isOpen);
                _this._panLimit = _this.getExpectedWidth(_this.isOpen);
                _this.renderer.setElementClass(_this.overlay, 'panning', true);
                _this.renderer.setElementClass(_this.drawer, 'panning', true);
            }
        };
        this.pan = function (evt) {
            // TODO: input.deltaX = prevDelta.x + (center.x - offset.x);
            // get actual delta (not total session one) from event?
            // pan WILL also fire after a full swipe, only resize on flag
            if (!_this._panning) {
                return;
            }
            /** @type {?} */
            var right = _this.position === 'right';
            // when on the right use inverse of deltaX
            /** @type {?} */
            var deltaX = right ? -evt.deltaX : evt.deltaX;
            /** @type {?} */
            var visibleWidth;
            /** @type {?} */
            var newX;
            /** @type {?} */
            var percent;
            visibleWidth = _this._panStartWidth + deltaX;
            if (_this.isOpen && deltaX < 0) {
                // when visibleWidth hits limit - stop animating
                if (visibleWidth <= _this._panLimit) {
                    return;
                }
                if (_this.hasAnimateWidth) {
                    percent = (visibleWidth - _this._panLimit) / (_this._panStartWidth - _this._panLimit);
                    newX = visibleWidth;
                }
                else {
                    percent = visibleWidth / _this._panStartWidth;
                    newX = evt.deltaX;
                }
                _this.setXSize(newX, percent.toPrecision(2));
            }
            else if (!_this.isOpen && deltaX > 0) {
                // when visibleWidth hits limit - stop animating
                if (visibleWidth >= _this._panLimit) {
                    return;
                }
                if (_this.hasAnimateWidth) {
                    percent = (visibleWidth - _this._panStartWidth) / (_this._panLimit - _this._panStartWidth);
                    newX = visibleWidth;
                }
                else {
                    percent = visibleWidth / _this._panLimit;
                    newX = (_this._panLimit - visibleWidth) * (right ? 1 : -1);
                }
                _this.setXSize(newX, percent.toPrecision(2));
            }
        };
        this.panEnd = function (evt) {
            if (_this._panning) {
                /** @type {?} */
                var deltaX = _this.position === 'right' ? -evt.deltaX : evt.deltaX;
                /** @type {?} */
                var visibleWidth = _this._panStartWidth + deltaX;
                _this.resetPan();
                // check if pan brought the drawer to 50%
                if (_this.isOpen && visibleWidth <= _this._panStartWidth / 2) {
                    _this.close();
                }
                else if (!_this.isOpen && visibleWidth >= _this._panLimit / 2) {
                    _this.open();
                }
                _this._panStartWidth = null;
            }
        };
        this.toggleOpenedEvent = function (evt) {
            _this.elementRef.nativeElement.removeEventListener('transitionend', _this.toggleOpenedEvent, false);
            _this.opened.emit();
        };
        this.toggleClosedEvent = function (evt) {
            _this.elementRef.nativeElement.removeEventListener('transitionend', _this.toggleClosedEvent, false);
            _this.closed.emit();
        };
    }
    Object.defineProperty(IgxNavigationDrawerComponent.prototype, "element", {
        /**
         * Returns nativeElement of the component.
         *
         * @hidden
         */
        get: /**
         * Returns nativeElement of the component.
         *
         * @hidden
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxNavigationDrawerComponent.prototype, "template", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            if (this.miniTemplate && !this.isOpen) {
                return this.miniTemplate.template;
            }
            else if (this.contentTemplate) {
                return this.contentTemplate.template;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxNavigationDrawerComponent.prototype, "miniTemplate", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._miniTemplate;
        },
        /**
         * @hidden
         */
        set: /**
         * @hidden
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (!this.isOpen) {
                this.setDrawerWidth(v ? this.miniWidth : '');
            }
            this._miniTemplate = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxNavigationDrawerComponent.prototype, "flexWidth", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxNavigationDrawerComponent.prototype, "isPinnedRight", {
        /** @hidden */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.pin && this.position === 'right' ? '1' : '0';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxNavigationDrawerComponent.prototype, "drawer", {
        /**
          * @hidden
          */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._drawer.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxNavigationDrawerComponent.prototype, "overlay", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._overlay.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxNavigationDrawerComponent.prototype, "styleDummy", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._styleDummy.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxNavigationDrawerComponent.prototype, "hasAnimateWidth", {
        /**
         * Property to decide whether to change width or translate the drawer from pan gesture.
         *
         * @hidden
         */
        get: /**
         * Property to decide whether to change width or translate the drawer from pan gesture.
         *
         * @hidden
         * @return {?}
         */
        function () {
            return this.pin || !!this.miniTemplate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxNavigationDrawerComponent.prototype, "maxEdgeZone", {
        /**
         * Used for touch gestures (swipe and pan).
         * Defaults to 50 (in px) and is extended to at least 110% of the mini template width if available.
         *
         * @hidden
         */
        get: /**
         * Used for touch gestures (swipe and pan).
         * Defaults to 50 (in px) and is extended to at least 110% of the mini template width if available.
         *
         * @hidden
         * @return {?}
         */
        function () {
            return this._maxEdgeZone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxNavigationDrawerComponent.prototype, "expectedWidth", {
        /**
         * Gets the Drawer width for specific state.
         * Will attempt to evaluate requested state and cache.
         *
         *
         * @hidden
         */
        get: /**
         * Gets the Drawer width for specific state.
         * Will attempt to evaluate requested state and cache.
         *
         *
         * @hidden
         * @return {?}
         */
        function () {
            return this.getExpectedWidth(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxNavigationDrawerComponent.prototype, "expectedMiniWidth", {
        /**
         * Get the Drawer mini width for specific state.
         * Will attempt to evaluate requested state and cache.
         *
         * @hidden
         */
        get: /**
         * Get the Drawer mini width for specific state.
         * Will attempt to evaluate requested state and cache.
         *
         * @hidden
         * @return {?}
         */
        function () {
            return this.getExpectedWidth(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxNavigationDrawerComponent.prototype, "touchManager", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._touchManager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxNavigationDrawerComponent.prototype, "state", {
        /**
         * Exposes optional navigation service
         *
         * @hidden
         */
        get: /**
         * Exposes optional navigation service
         *
         * @hidden
         * @return {?}
         */
        function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxNavigationDrawerComponent.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        // DOM and @Input()-s initialized
        if (this._state) {
            this._state.add(this.id, this);
        }
        if (this.isOpen) {
            this.setDrawerWidth(this.width);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxNavigationDrawerComponent.prototype.ngAfterContentInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        // wait for template and ng-content to be ready
        this.updateEdgeZone();
        this.checkPinThreshold();
        this.ensureEvents();
        // TODO: apply platform-safe Ruler from http://plnkr.co/edit/81nWDyreYMzkunihfRgX?p=preview
        // (https://github.com/angular/angular/issues/6515), blocked by https://github.com/angular/angular/issues/6904
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxNavigationDrawerComponent.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        this._touchManager.destroy();
        if (this._state) {
            this._state.remove(this.id);
        }
        if (this._resizeObserver) {
            this._resizeObserver.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    IgxNavigationDrawerComponent.prototype.ngOnChanges = /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
    };
    /**
     * Toggle the open state of the Navigation Drawer.
     *
     * ```typescript
     * this.navdrawer.toggle();
     * ```
     */
    /**
     * Toggle the open state of the Navigation Drawer.
     *
     * ```typescript
     * this.navdrawer.toggle();
     * ```
     * @return {?}
     */
    IgxNavigationDrawerComponent.prototype.toggle = /**
     * Toggle the open state of the Navigation Drawer.
     *
     * ```typescript
     * this.navdrawer.toggle();
     * ```
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Open the Navigation Drawer. Has no effect if already opened.
     *
     * ```typescript
     * this.navdrawer.open();
     * ```
     */
    /**
     * Open the Navigation Drawer. Has no effect if already opened.
     *
     * ```typescript
     * this.navdrawer.open();
     * ```
     * @return {?}
     */
    IgxNavigationDrawerComponent.prototype.open = /**
     * Open the Navigation Drawer. Has no effect if already opened.
     *
     * ```typescript
     * this.navdrawer.open();
     * ```
     * @return {?}
     */
    function () {
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
    };
    /**
     * Close the Navigation Drawer. Has no effect if already closed.
     *
     * ```typescript
     * this.navdrawer.close();
     * ```
     */
    /**
     * Close the Navigation Drawer. Has no effect if already closed.
     *
     * ```typescript
     * this.navdrawer.close();
     * ```
     * @return {?}
     */
    IgxNavigationDrawerComponent.prototype.close = /**
     * Close the Navigation Drawer. Has no effect if already closed.
     *
     * ```typescript
     * this.navdrawer.close();
     * ```
     * @return {?}
     */
    function () {
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
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} value
     * @return {?}
     */
    IgxNavigationDrawerComponent.prototype.set_maxEdgeZone = /**
     * @hidden
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._maxEdgeZone = value;
    };
    /**
     * Get the Drawer width for specific state. Will attempt to evaluate requested state and cache.
     *
     * @hidden
     * @param [mini] - Request mini width instead
     */
    /**
     * Get the Drawer width for specific state. Will attempt to evaluate requested state and cache.
     *
     * @hidden
     * @protected
     * @param {?=} mini
     * @return {?}
     */
    IgxNavigationDrawerComponent.prototype.getExpectedWidth = /**
     * Get the Drawer width for specific state. Will attempt to evaluate requested state and cache.
     *
     * @hidden
     * @protected
     * @param {?=} mini
     * @return {?}
     */
    function (mini) {
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
    };
    /**
     * @private
     * @return {?}
     */
    IgxNavigationDrawerComponent.prototype.getWindowWidth = /**
     * @private
     * @return {?}
     */
    function () {
        return (window.innerWidth > 0) ? window.innerWidth : screen.width;
    };
    /**
     * Sets the drawer width.
     */
    /**
     * Sets the drawer width.
     * @private
     * @param {?} width
     * @return {?}
     */
    IgxNavigationDrawerComponent.prototype.setDrawerWidth = /**
     * Sets the drawer width.
     * @private
     * @param {?} width
     * @return {?}
     */
    function (width) {
        var _this = this;
        requestAnimationFrame(function () {
            if (_this.drawer) {
                _this.renderer.setElementStyle(_this.drawer, 'width', width);
            }
        });
    };
    /**
     * Get current Drawer width.
     */
    /**
     * Get current Drawer width.
     * @private
     * @return {?}
     */
    IgxNavigationDrawerComponent.prototype.getDrawerWidth = /**
     * Get current Drawer width.
     * @private
     * @return {?}
     */
    function () {
        return this.drawer.offsetWidth;
    };
    /**
     * @private
     * @return {?}
     */
    IgxNavigationDrawerComponent.prototype.ensureEvents = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
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
            this._resizeObserver = fromEvent(window, 'resize').pipe(debounce(function () { return interval(150); }))
                .subscribe(function (value) {
                _this.checkPinThreshold(value);
            });
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxNavigationDrawerComponent.prototype.updateEdgeZone = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var maxValue;
        if (this.miniTemplate) {
            maxValue = Math.max(this._maxEdgeZone, this.getExpectedWidth(true) * 1.1);
            this.set_maxEdgeZone(maxValue);
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxNavigationDrawerComponent.prototype.resetPan = /**
     * @private
     * @return {?}
     */
    function () {
        this._panning = false;
        /* styles fail to apply when set on parent due to extra attributes, prob ng bug */
        this.renderer.setElementClass(this.overlay, 'panning', false);
        this.renderer.setElementClass(this.drawer, 'panning', false);
        this.setXSize(0, '');
    };
    /**
     * Sets the absolute position or width in case the drawer doesn't change position.
     * @param x the number pixels to translate on the X axis or the width to set. 0 width will clear the style instead.
     * @param opacity optional value to apply to the overlay
     */
    /**
     * Sets the absolute position or width in case the drawer doesn't change position.
     * @private
     * @param {?} x the number pixels to translate on the X axis or the width to set. 0 width will clear the style instead.
     * @param {?=} opacity optional value to apply to the overlay
     * @return {?}
     */
    IgxNavigationDrawerComponent.prototype.setXSize = /**
     * Sets the absolute position or width in case the drawer doesn't change position.
     * @private
     * @param {?} x the number pixels to translate on the X axis or the width to set. 0 width will clear the style instead.
     * @param {?=} opacity optional value to apply to the overlay
     * @return {?}
     */
    function (x, opacity) {
        var _this = this;
        // Angular polyfills patches window.requestAnimationFrame, but switch to DomAdapter API (TODO)
        window.requestAnimationFrame(function () {
            if (_this.hasAnimateWidth) {
                _this.renderer.setElementStyle(_this.drawer, 'width', x ? Math.abs(x) + 'px' : '');
            }
            else {
                _this.renderer.setElementStyle(_this.drawer, 'transform', x ? 'translate3d(' + x + 'px,0,0)' : '');
                _this.renderer.setElementStyle(_this.drawer, '-webkit-transform', x ? 'translate3d(' + x + 'px,0,0)' : '');
            }
            if (opacity !== undefined) {
                _this.renderer.setElementStyle(_this.overlay, 'opacity', opacity);
            }
        });
    };
    IgxNavigationDrawerComponent.decorators = [
        { type: Component, args: [{
                    providers: [HammerGesturesManager],
                    selector: 'igx-nav-drawer',
                    template: "<ng-template #defaultItemsTemplate>\n    <div igxDrawerItem [isHeader]=\"true\">Navigation Drawer</div>\n    <div igxDrawerItem> Start by adding</div>\n    <div igxDrawerItem> <code>&lt;ng-template igxDrawer&gt;</code> </div>\n    <div igxDrawerItem> And some items inside </div>\n    <div igxDrawerItem> Style with igxDrawerItem </div>\n    <div igxDrawerItem> and igxRipple directives</div>\n</ng-template>\n\n<div [hidden]=\"pin\"\n    class=\"igx-nav-drawer__overlay\"\n    [class.igx-nav-drawer__overlay--hidden]=\"!isOpen\"\n    (click)=\"close()\" #overlay>\n</div>\n<aside role=\"navigation\"\n    class=\"igx-nav-drawer__aside\"\n    [class.igx-nav-drawer__aside--collapsed]=\"!miniTemplate && !isOpen\"\n    [class.igx-nav-drawer__aside--mini]=\"miniTemplate && !isOpen\"\n    [class.igx-nav-drawer__aside--normal]=\"!miniTemplate || isOpen\"\n    [class.igx-nav-drawer__aside--pinned]=\"pin\"\n    [class.igx-nav-drawer__aside--right]=\"position == 'right'\" #aside>\n\n    <ng-container *ngTemplateOutlet=\"template || defaultItemsTemplate\"></ng-container>\n</aside>\n<div class=\"igx-nav-drawer__style-dummy\" #dummy></div>\n",
                    styles: ["\n        :host {\n            display: block;\n            height: 100%;\n        }\n    "]
                }] }
    ];
    /** @nocollapse */
    IgxNavigationDrawerComponent.ctorParameters = function () { return [
        { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] },
        { type: IgxNavigationService, decorators: [{ type: Optional }] },
        { type: Renderer },
        { type: HammerGesturesManager }
    ]; };
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
    return IgxNavigationDrawerComponent;
}());
export { IgxNavigationDrawerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9uYXZpZ2F0aW9uLWRyYXdlci9uYXZpZ2F0aW9uLWRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLE1BQU0sRUFDTixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixRQUFRLEVBR1IsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLG9CQUFvQixFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztJQUU5RyxPQUFPLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJmO0lBK1ZJLHNDQUNnQyxVQUFzQixFQUM5QixNQUE0QixFQUV0QyxRQUFrQixFQUNwQixhQUFvQztRQUxoRCxpQkFNQztRQUwrQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBRXRDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDcEIsa0JBQWEsR0FBYixhQUFhLENBQXVCO1FBbFZuQixhQUFRLEdBQUcsZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7O1FBZ0J6QyxPQUFFLEdBQUcsb0JBQWtCLE9BQU8sRUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7OztRQWVuQyxhQUFRLEdBQUcsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7UUFnQmxCLG1CQUFjLEdBQUcsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7OztRQWV0QixXQUFNLEdBQUcsS0FBSyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7UUFnQmYsUUFBRyxHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O1FBZ0JaLGlCQUFZLEdBQUcsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7OztRQXdCcEIsVUFBSyxHQUFHLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7UUFlaEIsY0FBUyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Ozs7UUFTbEIsY0FBUyxHQUFHLElBQUksWUFBWSxDQUFVLElBQUksQ0FBQyxDQUFDOzs7Ozs7OztRQVE1QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7Ozs7Ozs7UUFRN0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7Ozs7Ozs7O1FBUTVCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOzs7Ozs7OztRQVE3QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQThEckMsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGdCQUFXLEdBQThELEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUU3SCxRQUFHLEdBQWdDO1lBQ3ZDLE1BQU0sRUFBRSx1QkFBdUI7WUFDL0IsSUFBSSxFQUFFLDZCQUE2QjtZQUNuQyxPQUFPLEVBQUUseUJBQXlCO1lBQ2xDLFVBQVUsRUFBRSw2QkFBNkI7U0FDNUMsQ0FBQzs7OztRQTRCTSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBYWpCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBOFNsQixzQkFBaUIsR0FBRyxVQUFDLEdBQVc7O2dCQUNoQyxXQUFXO1lBQ2YsSUFBSSxLQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNuQixXQUFXLEdBQUcsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNwQyxJQUFJLEdBQUcsSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsS0FBSyxXQUFXLEVBQUU7b0JBQ3JELE9BQU87aUJBQ1Y7Z0JBQ0QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsS0FBSSxDQUFDLEdBQUcsSUFBSSxXQUFXLElBQUksS0FBSSxDQUFDLFlBQVksRUFBRTtvQkFDL0MsS0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7b0JBQ2hCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM3QjtxQkFBTSxJQUFJLEtBQUksQ0FBQyxHQUFHLElBQUksV0FBVyxHQUFHLEtBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQ3BELEtBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO29CQUNqQixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDOUI7YUFDSjtRQUNMLENBQUMsQ0FBQTtRQUVPLFVBQUssR0FBRyxVQUFDLEdBQWdCO1lBQzdCLHlFQUF5RTtZQUN6RSxJQUFJLENBQUMsS0FBSSxDQUFDLGNBQWMsSUFBSSxHQUFHLENBQUMsV0FBVyxLQUFLLE9BQU8sRUFBRTtnQkFDckQsT0FBTzthQUNWOzs7Z0JBR0csTUFBTTs7Z0JBQ04sYUFBYTtZQUNqQixJQUFJLEtBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUFFO2dCQUMzQiwwQ0FBMEM7Z0JBQzFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQ3JCLGFBQWEsR0FBRyxLQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDekU7aUJBQU07Z0JBQ0gsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQ3BCLGFBQWEsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO2FBQy9DO1lBQ0QsZ0ZBQWdGO1lBQ2hGLElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQzNCLGlDQUFpQztnQkFDakMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLGFBQWEsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ2xELEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNqQjtRQUNMLENBQUMsQ0FBQTtRQUVPLGFBQVEsR0FBRyxVQUFDLEdBQWdCO1lBQ2hDLElBQUksQ0FBQyxLQUFJLENBQUMsY0FBYyxJQUFJLEtBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLFdBQVcsS0FBSyxPQUFPLEVBQUU7Z0JBQ2pFLE9BQU87YUFDVjs7Z0JBQ0ssYUFBYSxHQUFHLEtBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO2dCQUNuRyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVE7WUFFakMsK0RBQStEO1lBQy9ELElBQUksS0FBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ25ELEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDMUQsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUVwRCxLQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDN0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDL0Q7UUFDTCxDQUFDLENBQUE7UUFFTyxRQUFHLEdBQUcsVUFBQyxHQUFnQjtZQUMzQiw0REFBNEQ7WUFDNUQsdURBQXVEO1lBQ3ZELDZEQUE2RDtZQUM3RCxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRTtnQkFDaEIsT0FBTzthQUNWOztnQkFDSyxLQUFLLEdBQVksS0FBSSxDQUFDLFFBQVEsS0FBSyxPQUFPOzs7Z0JBRTFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU07O2dCQUMzQyxZQUFZOztnQkFDWixJQUFJOztnQkFDSixPQUFPO1lBRVgsWUFBWSxHQUFHLEtBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1lBRTVDLElBQUksS0FBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMzQixnREFBZ0Q7Z0JBQ2hELElBQUksWUFBWSxJQUFJLEtBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2hDLE9BQU87aUJBQ1Y7Z0JBRUQsSUFBSSxLQUFJLENBQUMsZUFBZSxFQUFFO29CQUN0QixPQUFPLEdBQUcsQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ25GLElBQUksR0FBRyxZQUFZLENBQUM7aUJBQ3ZCO3FCQUFNO29CQUNILE9BQU8sR0FBRyxZQUFZLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQztvQkFDN0MsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7aUJBQ3JCO2dCQUNELEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUUvQztpQkFBTSxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNuQyxnREFBZ0Q7Z0JBQ2hELElBQUksWUFBWSxJQUFJLEtBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2hDLE9BQU87aUJBQ1Y7Z0JBRUQsSUFBSSxLQUFJLENBQUMsZUFBZSxFQUFFO29CQUN0QixPQUFPLEdBQUcsQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ3hGLElBQUksR0FBRyxZQUFZLENBQUM7aUJBQ3ZCO3FCQUFNO29CQUNILE9BQU8sR0FBRyxZQUFZLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQztvQkFDeEMsSUFBSSxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM3RDtnQkFDRCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0M7UUFDTCxDQUFDLENBQUE7UUFFTyxXQUFNLEdBQUcsVUFBQyxHQUFnQjtZQUM5QixJQUFJLEtBQUksQ0FBQyxRQUFRLEVBQUU7O29CQUNULE1BQU0sR0FBRyxLQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTTs7b0JBQzdELFlBQVksR0FBVyxLQUFJLENBQUMsY0FBYyxHQUFHLE1BQU07Z0JBQ3pELEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFFaEIseUNBQXlDO2dCQUN6QyxJQUFJLEtBQUksQ0FBQyxNQUFNLElBQUksWUFBWSxJQUFJLEtBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxFQUFFO29CQUN4RCxLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2hCO3FCQUFNLElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTSxJQUFJLFlBQVksSUFBSSxLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTtvQkFDM0QsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNmO2dCQUNELEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2FBQzlCO1FBQ0wsQ0FBQyxDQUFBO1FBK0JPLHNCQUFpQixHQUFHLFVBQUMsR0FBSTtZQUM3QixLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsS0FBSSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2xHLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFBO1FBRU8sc0JBQWlCLEdBQUcsVUFBQyxHQUFJO1lBQzdCLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxLQUFJLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbEcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUE7SUExWkQsQ0FBQztJQTlPRCxzQkFBSSxpREFBTztRQUxYOzs7O1dBSUc7Ozs7Ozs7UUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUE0RUQsc0JBQUksa0RBQVE7UUFIWjs7V0FFRzs7Ozs7UUFDSDtZQUNJLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ25DLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7YUFDckM7aUJBQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUM3QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO2FBQ3hDO1FBQ0wsQ0FBQzs7O09BQUE7SUFNRCxzQkFBVyxzREFBWTtRQUh2Qjs7V0FFRzs7Ozs7UUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDO1FBRUQ7O1dBRUc7Ozs7OztRQUNILFVBQ3dCLENBQW9DO1lBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNoRDtZQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLENBQUM7OztPQVhBO0lBc0JELHNCQUNJLG1EQUFTO1FBSmI7O1dBRUc7Ozs7O1FBQ0g7WUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDWCxPQUFPLEtBQUssQ0FBQzthQUNoQjtZQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDckI7WUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDckMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ3pCO1lBRUQsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQzs7O09BQUE7SUFHRCxzQkFDSSx1REFBYTtRQUZqQixjQUFjOzs7OztRQUNkO1lBRUksT0FBTyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUM3RCxDQUFDOzs7T0FBQTtJQW1CRCxzQkFBSSxnREFBTTtRQUhWOztZQUVJOzs7OztRQUNKO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUtELHNCQUFJLGlEQUFPO1FBSFg7O1dBRUc7Ozs7O1FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBS0Qsc0JBQUksb0RBQVU7UUFIZDs7V0FFRzs7Ozs7UUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7SUFZRCxzQkFBVyx5REFBZTtRQUwxQjs7OztXQUlHOzs7Ozs7O1FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7SUFTRCxzQkFBVyxxREFBVztRQU50Qjs7Ozs7V0FLRzs7Ozs7Ozs7UUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQVNELHNCQUFXLHVEQUFhO1FBUHhCOzs7Ozs7V0FNRzs7Ozs7Ozs7O1FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQVFELHNCQUFXLDJEQUFpQjtRQU41Qjs7Ozs7V0FLRzs7Ozs7Ozs7UUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBS0Qsc0JBQVcsc0RBQVk7UUFIdkI7O1dBRUc7Ozs7O1FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFPRCxzQkFBVywrQ0FBSztRQUxoQjs7OztXQUlHOzs7Ozs7O1FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFVRDs7T0FFRzs7Ozs7SUFDSSwrQ0FBUTs7OztJQUFmO1FBQ0ksaUNBQWlDO1FBQ2pDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDbEM7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQztJQUNMLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSSx5REFBa0I7Ozs7SUFBekI7UUFDSSwrQ0FBK0M7UUFDL0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXpCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQiwyRkFBMkY7UUFDM0YsOEdBQThHO0lBQ2xILENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSSxrREFBVzs7OztJQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNJLGtEQUFXOzs7OztJQUFsQixVQUFtQixPQUE2QztRQUM1RCwyR0FBMkc7UUFDM0csSUFBSSxPQUFPLENBQUMsY0FBYyxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUM3RSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxNQUFNLENBQUMsQ0FBQztZQUMzRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkI7UUFDRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFDO1lBQzFELElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDVixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN2QjtTQUNKO1FBRUQsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUM1QjtTQUNKO1FBRUQsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ25EO1FBRUQsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN2RDtZQUNELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7OztJQUNJLDZDQUFNOzs7Ozs7OztJQUFiO1FBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjtJQUNMLENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7OztJQUNJLDJDQUFJOzs7Ozs7OztJQUFYO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVuQiw2Q0FBNkM7UUFDN0MseUNBQXlDO1FBQ3pDLG1CQUFtQjtRQUNuQiwwREFBMEQ7UUFDMUQsZ0RBQWdEO1FBQ2hELDhHQUE4RztRQUU5RyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7OztJQUNJLDRDQUFLOzs7Ozs7OztJQUFaO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7SUFDTyxzREFBZTs7Ozs7O0lBQXpCLFVBQTBCLEtBQWE7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7Ozs7SUFDTyx1REFBZ0I7Ozs7Ozs7O0lBQTFCLFVBQTJCLElBQWM7UUFDckMsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDcEIsT0FBTyxDQUFDLENBQUM7YUFDWjtZQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDaEIsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNILHNFQUFzRTtnQkFDdEUsb0VBQW9FO2dCQUNwRSxXQUFXO2dCQUNYLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO29CQUNyQyxvQ0FBb0M7b0JBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3RFLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3BFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO29CQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUN2RSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUN4RTtnQkFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO2FBQ3JDO1NBQ0o7YUFBTTtZQUNILElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDWixPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDakM7aUJBQU07Z0JBQ0gsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7b0JBQ2pDLG9DQUFvQztvQkFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDdEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7b0JBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQzFFO2dCQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7YUFDakM7U0FDSjtJQUNMLENBQUM7Ozs7O0lBRU8scURBQWM7Ozs7SUFBdEI7UUFDSSxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN0RSxDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7SUFDSyxxREFBYzs7Ozs7O0lBQXRCLFVBQXVCLEtBQWE7UUFBcEMsaUJBTUM7UUFMRyxxQkFBcUIsQ0FBQztZQUNsQixJQUFJLEtBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDOUQ7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0sscURBQWM7Ozs7O0lBQXRCO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVPLG1EQUFZOzs7O0lBQXBCO1FBQUEsaUJBc0JDO1FBckJHLDREQUE0RDtRQUM1RCxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzdELGdGQUFnRjtZQUNoRixpREFBaUQ7WUFDakQsb0NBQW9DO1lBQ3BDLHVEQUF1RDtZQUN2RCxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7WUFFOUIsNkRBQTZEO1lBQzdELG1EQUFtRDtZQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pGLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoRjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQU0sT0FBQSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQWIsQ0FBYSxDQUFDLENBQUM7aUJBQ2pGLFNBQVMsQ0FBQyxVQUFDLEtBQUs7Z0JBQ2IsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1NBQ1Y7SUFDTCxDQUFDOzs7OztJQUVPLHFEQUFjOzs7O0lBQXRCOztZQUNRLFFBQVE7UUFFWixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7Ozs7O0lBK0hPLCtDQUFROzs7O0lBQWhCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsa0ZBQWtGO1FBQ2xGLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7OztJQUNLLCtDQUFROzs7Ozs7O0lBQWhCLFVBQWlCLENBQVMsRUFBRSxPQUFnQjtRQUE1QyxpQkFjQztRQWJHLDhGQUE4RjtRQUM5RixNQUFNLENBQUMscUJBQXFCLENBQUM7WUFDekIsSUFBSSxLQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN0QixLQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNwRjtpQkFBTTtnQkFDSCxLQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDakcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsRUFDMUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDaEQ7WUFDRCxJQUFJLE9BQU8sS0FBSyxTQUFTLEVBQUU7Z0JBQ3ZCLEtBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ25FO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztnQkFydkJKLFNBQVMsU0FBQztvQkFDUCxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDbEMsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsK25DQUErQzs2QkFDdEMsNEZBS1I7aUJBQ0o7Ozs7Z0JBcERHLFVBQVUsdUJBMFlMLE1BQU0sU0FBQyxVQUFVO2dCQXpYakIsb0JBQW9CLHVCQTBYcEIsUUFBUTtnQkFqWWIsUUFBUTtnQkFRSCxxQkFBcUI7OzsyQkEwQ3pCLFdBQVcsU0FBQyxPQUFPO3FCQWVuQixXQUFXLFNBQUMsU0FBUyxjQUNyQixLQUFLOzJCQWVMLEtBQUs7aUNBZ0JMLEtBQUs7eUJBZUwsS0FBSztzQkFnQkwsS0FBSzsrQkFnQkwsS0FBSzt3QkF3QkwsS0FBSzs0QkFlTCxLQUFLOzRCQVNMLE1BQU07MEJBUU4sTUFBTTt5QkFRTixNQUFNOzBCQVFOLE1BQU07eUJBUU4sTUFBTTsrQkF3Qk4sWUFBWSxTQUFDLGlDQUFpQyxFQUFFLEVBQUUsSUFBSSxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7a0NBVzFHLFlBQVksU0FBQyw2QkFBNkIsRUFBRSxFQUFFLElBQUksRUFBRSw2QkFBNkIsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzRCQU1sRyxXQUFXLFNBQUMsaUJBQWlCO2dDQWdCN0IsV0FBVyxTQUFDLGFBQWE7MEJBZXpCLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJCQUNuQyxTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs4QkFDckMsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBc2Z4QyxtQ0FBQztDQUFBLEFBaHdCRCxJQWd3QkM7U0FydkJZLDRCQUE0Qjs7O0lBT3JDLGdEQUF5RDs7Ozs7Ozs7Ozs7Ozs7O0lBZXpELDBDQUNtRDs7Ozs7Ozs7Ozs7Ozs7O0lBZW5ELGdEQUFrQzs7Ozs7Ozs7Ozs7Ozs7OztJQWdCbEMsc0RBQXNDOzs7Ozs7Ozs7Ozs7Ozs7SUFldEMsOENBQStCOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0IvQiwyQ0FBNEI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQjVCLG9EQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0lBd0JwQyw2Q0FBZ0M7Ozs7Ozs7Ozs7Ozs7OztJQWVoQyxpREFBbUM7Ozs7Ozs7OztJQVNuQyxpREFBNkQ7Ozs7Ozs7OztJQVE3RCwrQ0FBOEM7Ozs7Ozs7OztJQVE5Qyw4Q0FBNkM7Ozs7Ozs7OztJQVE3QywrQ0FBOEM7Ozs7Ozs7OztJQVE5Qyw4Q0FBNkM7Ozs7O0lBYTdDLHFEQUF5RDs7Ozs7O0lBc0J6RCx1REFDeUQ7Ozs7O0lBMEJ6RCx5REFBa0M7Ozs7O0lBQ2xDLG1EQUFxSTs7Ozs7SUFDckksdURBQXNDOzs7OztJQUN0QywyQ0FLRTs7Ozs7SUFFRiwrQ0FBa0U7Ozs7O0lBQ2xFLGdEQUFxRTs7Ozs7SUFDckUsbURBQXNFOzs7Ozs7SUF3QnRFLGdEQUF5Qjs7Ozs7SUFDekIsc0RBQStCOzs7OztJQUMvQixpREFBMEI7Ozs7O0lBVzFCLG9EQUEwQjs7Ozs7SUE4UzFCLHlEQWdCQzs7Ozs7SUFFRCw2Q0F1QkM7Ozs7O0lBRUQsZ0RBZ0JDOzs7OztJQUVELDJDQThDQzs7Ozs7SUFFRCw4Q0FjQzs7Ozs7SUErQkQseURBR0M7Ozs7O0lBRUQseURBR0M7Ozs7O0lBL1pHLGtEQUFrRDs7Ozs7SUFDbEQsOENBQWdEOzs7OztJQUVoRCxnREFBNEI7Ozs7O0lBQzVCLHFEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBDb21wb25lbnQsXG4gICAgQ29udGVudENoaWxkLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIEluamVjdCxcbiAgICBJbnB1dCxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBPcHRpb25hbCxcbiAgICBPdXRwdXQsXG4gICAgUmVuZGVyZXIsXG4gICAgU2ltcGxlQ2hhbmdlLFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgaW50ZXJ2YWwsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJZ3hOYXZpZ2F0aW9uU2VydmljZSwgSVRvZ2dsZVZpZXcgfSBmcm9tICcuLi9jb3JlL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgSGFtbWVyR2VzdHVyZXNNYW5hZ2VyIH0gZnJvbSAnLi4vY29yZS90b3VjaCc7XG5pbXBvcnQgeyBJZ3hOYXZEcmF3ZXJNaW5pVGVtcGxhdGVEaXJlY3RpdmUsIElneE5hdkRyYXdlclRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLWRyYXdlci5kaXJlY3RpdmVzJztcblxubGV0IE5FWFRfSUQgPSAwO1xuLyoqXG4gKiAqKklnbml0ZSBVSSBmb3IgQW5ndWxhciBOYXZpZ2F0aW9uIERyYXdlcioqIC1cbiAqIFtEb2N1bWVudGF0aW9uXShodHRwczovL3d3dy5pbmZyYWdpc3RpY3MuY29tL3Byb2R1Y3RzL2lnbml0ZS11aS1hbmd1bGFyL2FuZ3VsYXIvY29tcG9uZW50cy9uYXZkcmF3ZXIuaHRtbClcbiAqXG4gKiBUaGUgSWduaXRlIFVJIE5hdmlnYXRpb24gRHJhd2VyIGlzIGEgY29sbGFwc2libGUgc2lkZSBuYXZpZ2F0aW9uIGNvbnRhaW5lciBjb21tb25seSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggdGhlIE5hdmJhci5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgaHRtbFxuICogPGlneC1uYXYtZHJhd2VyIGlkPVwibmF2aWdhdGlvblwiIFtpc09wZW5dPVwidHJ1ZVwiPlxuICogICA8bmctdGVtcGxhdGUgaWd4RHJhd2VyPlxuICogICAgIDxuYXY+XG4gKiAgICAgICA8c3BhbiBpZ3hEcmF3ZXJJdGVtIFtpc0hlYWRlcl09XCJ0cnVlXCI+RW1haWw8L3NwYW4+XG4gKiAgICAgICA8c3BhbiBpZ3hEcmF3ZXJJdGVtIGlneFJpcHBsZT5JbmJveDwvc3Bhbj5cbiAqICAgICAgIDxzcGFuIGlneERyYXdlckl0ZW0gaWd4UmlwcGxlPkRlbGV0ZWQ8L3NwYW4+XG4gKiAgICAgICA8c3BhbiBpZ3hEcmF3ZXJJdGVtIGlneFJpcHBsZT5TZW50PC9zcGFuPlxuICogICAgIDwvbmF2PlxuICogICA8L25nLXRlbXBsYXRlPlxuICogPC9pZ3gtbmF2LWRyYXdlcj5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBwcm92aWRlcnM6IFtIYW1tZXJHZXN0dXJlc01hbmFnZXJdLFxuICAgIHNlbGVjdG9yOiAnaWd4LW5hdi1kcmF3ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnbmF2aWdhdGlvbi1kcmF3ZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hOYXZpZ2F0aW9uRHJhd2VyQ29tcG9uZW50IGltcGxlbWVudHNcbiAgICBJVG9nZ2xlVmlldyxcbiAgICBPbkluaXQsXG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25DaGFuZ2VzIHtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKSBwdWJsaWMgY3NzQ2xhc3MgPSAnaWd4LW5hdi1kcmF3ZXInO1xuXG4gICAgLyoqXG4gICAgICogSUQgb2YgdGhlIGNvbXBvbmVudFxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldFxuICAgICAqIGxldCBteU5hdkRyYXdlcklkID0gdGhpcy5uYXZkcmF3ZXIuaWQ7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqICA8aWd4LW5hdi1kcmF3ZXIgaWQ9J25hdmRyYXdlcic+PC9pZ3gtbmF2LWRyYXdlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIEBJbnB1dCgpIHB1YmxpYyBpZCA9IGBpZ3gtbmF2LWRyYXdlci0ke05FWFRfSUQrK31gO1xuXG4gICAgLyoqXG4gICAgICogUG9zaXRpb24gb2YgdGhlIE5hdmlnYXRpb24gRHJhd2VyLiBDYW4gYmUgXCJsZWZ0XCIoZGVmYXVsdCkgb3IgXCJyaWdodFwiLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldFxuICAgICAqIGxldCBteU5hdkRyYXdlclBvc2l0aW9uID0gdGhpcy5uYXZkcmF3ZXIucG9zaXRpb247XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqIDxpZ3gtbmF2LWRyYXdlciBbcG9zaXRpb25dPVwiJ2xlZnQnXCI+PC9pZ3gtbmF2LWRyYXdlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcG9zaXRpb24gPSAnbGVmdCc7XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGVzIHRoZSB1c2Ugb2YgdG91Y2ggZ2VzdHVyZXMgdG8gbWFuaXB1bGF0ZSB0aGUgZHJhd2VyOlxuICAgICAqIC0gc3dpcGUvcGFuIGZyb20gZWRnZSB0byBvcGVuLCBzd2lwZS10b2dnbGUgYW5kIHBhbi1kcmFnLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldFxuICAgICAqIGxldCBnZXN0dXJlc0VuYWJsZWQgPSB0aGlzLm5hdmRyYXdlci5lbmFibGVHZXN0dXJlcztcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGlneC1uYXYtZHJhd2VyIFtlbmFibGVHZXN0dXJlc109J3RydWUnPjwvaWd4LW5hdi1kcmF3ZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZUdlc3R1cmVzID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIFN0YXRlIG9mIHRoZSBkcmF3ZXIuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IG5hdkRyYXdlcklzT3BlbiA9IHRoaXMubmF2ZHJhd2VyLmlzT3BlbjtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGlneC1uYXYtZHJhd2VyIFtpc09wZW5dPSdmYWxzZSc+PC9pZ3gtbmF2LWRyYXdlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaXNPcGVuID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHBpbm5lZCB0aGUgZHJhd2VyIGlzIHJlbGF0aXZlbHkgcG9zaXRpb25lZCBpbnN0ZWFkIG9mIHNpdHRpbmcgYWJvdmUgY29udGVudC5cbiAgICAgKiBNYXkgcmVxdWlyZSBhZGRpdGlvbmFsIGxheW91dCBzdHlsaW5nLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldFxuICAgICAqIGxldCBuYXZEcmF3ZXJJc1Bpbm5lZCA9IHRoaXMubmF2ZHJhd2VyLnBpbjtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGlneC1uYXYtZHJhd2VyIFtwaW5dPSdmYWxzZSc+PC9pZ3gtbmF2LWRyYXdlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcGluID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBNaW5pbXVtIGRldmljZSB3aWR0aCByZXF1aXJlZCBmb3IgYXV0b21hdGljIHBpbiB0byBiZSB0b2dnbGVkLlxuICAgICAqIERlZmF1bHQgaXMgMTAyNCwgY2FuIGJlIHNldCB0byBhIGZhbHN5IHZhbHVlIHRvIGRpc2FibGUgdGhpcyBiZWhhdmlvci5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRcbiAgICAgKiBsZXQgbmF2RHJhd2VyUGluVHJlc2hvbGQgPSB0aGlzLm5hdmRyYXdlci5waW5UaHJlc2hvbGQ7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqIDxpZ3gtbmF2LWRyYXdlciBbcGluVHJlc2hvbGRdPScxMDI0Jz48L2lneC1uYXYtZHJhd2VyPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwaW5UaHJlc2hvbGQgPSAxMDI0O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBuYXRpdmVFbGVtZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaWR0aCBvZiB0aGUgZHJhd2VyIGluIGl0cyBvcGVuIHN0YXRlLiBEZWZhdWx0cyB0byBcIjI4MHB4XCIuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IG5hdkRyYXdlcldpZHRoID0gdGhpcy5uYXZkcmF3ZXIud2lkdGg7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqIDxpZ3gtbmF2LWRyYXdlciBbd2lkdGhdPVwiJzIyOHB4J1wiPjwvaWd4LW5hdi1kcmF3ZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHdpZHRoID0gJzI4MHB4JztcblxuICAgIC8qKlxuICAgICAqIFdpZHRoIG9mIHRoZSBkcmF3ZXIgaW4gaXRzIG1pbmkgc3RhdGUuIERlZmF1bHRzIHRvIDYwcHguXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IG5hdkRyYXdlck1pbmlXaWR0aCA9IHRoaXMubmF2ZHJhd2VyLm1pbmlXaWR0aDtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGlneC1uYXYtZHJhd2VyIFttaW5pV2lkdGhdPVwiJzM0cHgnXCI+PC9pZ3gtbmF2LWRyYXdlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbWluaVdpZHRoID0gJzYwcHgnO1xuXG4gICAgLyoqXG4gICAgICogUGlubmVkIHN0YXRlIGNoYW5nZSBvdXRwdXQgZm9yIHR3by13YXkgYmluZGluZy5cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LW5hdi1kcmF3ZXIgWyhwaW4pXT0naXNQaW5uZWQnPjwvaWd4LW5hdi1kcmF3ZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBwaW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KHRydWUpO1xuICAgIC8qKlxuICAgICAqIEV2ZW50IGZpcmVkIGFzIHRoZSBOYXZpZ2F0aW9uIERyYXdlciBpcyBhYm91dCB0byBvcGVuLlxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LW5hdi1kcmF3ZXIgKG9wZW5pbmcpPSdvbk9wZW5pbmcoKSc+PC9pZ3gtbmF2LWRyYXdlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9wZW5pbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgLyoqXG4gICAgICogRXZlbnQgZmlyZWQgd2hlbiB0aGUgTmF2aWdhdGlvbiBEcmF3ZXIgaGFzIG9wZW5lZC5cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LW5hdi1kcmF3ZXIgKG9wZW5lZCk9J29uT3BlbmVkKCknPjwvaWd4LW5hdi1kcmF3ZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvcGVuZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgLyoqXG4gICAgICogRXZlbnQgZmlyZWQgYXMgdGhlIE5hdmlnYXRpb24gRHJhd2VyIGlzIGFib3V0IHRvIGNsb3NlLlxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtbmF2LWRyYXdlciAoY2xvc2luZyk9J29uQ2xvc2luZygpJz48L2lneC1uYXYtZHJhd2VyPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgY2xvc2luZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAvKipcbiAgICAgKiBFdmVudCBmaXJlZCB3aGVuIHRoZSBOYXZpZ2F0aW9uIERyYXdlciBoYXMgY2xvc2VkLlxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtbmF2LWRyYXdlciAoY2xvc2VkKT0nb25DbG9zZWQoKSc+PC9pZ3gtbmF2LWRyYXdlcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIGNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLm1pbmlUZW1wbGF0ZSAmJiAhdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1pbmlUZW1wbGF0ZS50ZW1wbGF0ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbnRlbnRUZW1wbGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudFRlbXBsYXRlLnRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbWluaVRlbXBsYXRlOiBJZ3hOYXZEcmF3ZXJNaW5pVGVtcGxhdGVEaXJlY3RpdmU7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgbWluaVRlbXBsYXRlKCk6IElneE5hdkRyYXdlck1pbmlUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9taW5pVGVtcGxhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4TmF2RHJhd2VyTWluaVRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IElneE5hdkRyYXdlck1pbmlUZW1wbGF0ZURpcmVjdGl2ZSwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBzZXQgbWluaVRlbXBsYXRlKHY6IElneE5hdkRyYXdlck1pbmlUZW1wbGF0ZURpcmVjdGl2ZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLnNldERyYXdlcldpZHRoKHYgPyB0aGlzLm1pbmlXaWR0aCA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9taW5pVGVtcGxhdGUgPSB2O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneE5hdkRyYXdlclRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IElneE5hdkRyYXdlclRlbXBsYXRlRGlyZWN0aXZlLCBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHJvdGVjdGVkIGNvbnRlbnRUZW1wbGF0ZTogSWd4TmF2RHJhd2VyVGVtcGxhdGVEaXJlY3RpdmU7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5mbGV4QmFzaXMnKVxuICAgIGdldCBmbGV4V2lkdGgoKSB7XG4gICAgICAgIGlmICghdGhpcy5waW4pIHtcbiAgICAgICAgICAgIHJldHVybiAnMHB4JztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1pbmlUZW1wbGF0ZSAmJiB0aGlzLm1pbmlXaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWluaVdpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcwcHgnO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5vcmRlcicpXG4gICAgZ2V0IGlzUGlubmVkUmlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBpbiAmJiB0aGlzLnBvc2l0aW9uID09PSAncmlnaHQnID8gJzEnIDogJzAnO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dlc3R1cmVzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF93aWR0aENhY2hlOiB7IHdpZHRoOiBudW1iZXIsIG1pbmlXaWR0aDogbnVtYmVyLCB3aW5kb3dXaWR0aDogbnVtYmVyIH0gPSB7IHdpZHRoOiBudWxsLCBtaW5pV2lkdGg6IG51bGwsIHdpbmRvd1dpZHRoOiBudWxsIH07XG4gICAgcHJpdmF0ZSBfcmVzaXplT2JzZXJ2ZXI6IFN1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIGNzczogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nOyB9ID0ge1xuICAgICAgICBkcmF3ZXI6ICdpZ3gtbmF2LWRyYXdlcl9fYXNpZGUnLFxuICAgICAgICBtaW5pOiAnaWd4LW5hdi1kcmF3ZXJfX2FzaWRlLS1taW5pJyxcbiAgICAgICAgb3ZlcmxheTogJ2lneC1uYXYtZHJhd2VyX19vdmVybGF5JyxcbiAgICAgICAgc3R5bGVEdW1teTogJ2lneC1uYXYtZHJhd2VyX19zdHlsZS1kdW1teSdcbiAgICB9O1xuXG4gICAgQFZpZXdDaGlsZCgnYXNpZGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIF9kcmF3ZXI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnb3ZlcmxheScsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgX292ZXJsYXk6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnZHVtbXknLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIF9zdHlsZUR1bW15OiBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICAqIEBoaWRkZW5cbiAgICAgICovXG4gICAgZ2V0IGRyYXdlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdlci5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgb3ZlcmxheSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX292ZXJsYXkubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IHN0eWxlRHVtbXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdHlsZUR1bW15Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqIFBhbiBhbmltYXRpb24gcHJvcGVydGllcyAqL1xuICAgIHByaXZhdGUgX3Bhbm5pbmcgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9wYW5TdGFydFdpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfcGFuTGltaXQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRvIGRlY2lkZSB3aGV0aGVyIHRvIGNoYW5nZSB3aWR0aCBvciB0cmFuc2xhdGUgdGhlIGRyYXdlciBmcm9tIHBhbiBnZXN0dXJlLlxuICAgICAqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaGFzQW5pbWF0ZVdpZHRoKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5waW4gfHwgISF0aGlzLm1pbmlUZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9tYXhFZGdlWm9uZSA9IDUwO1xuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIHRvdWNoIGdlc3R1cmVzIChzd2lwZSBhbmQgcGFuKS5cbiAgICAgKiBEZWZhdWx0cyB0byA1MCAoaW4gcHgpIGFuZCBpcyBleHRlbmRlZCB0byBhdCBsZWFzdCAxMTAlIG9mIHRoZSBtaW5pIHRlbXBsYXRlIHdpZHRoIGlmIGF2YWlsYWJsZS5cbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG1heEVkZ2Vab25lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4RWRnZVpvbmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgRHJhd2VyIHdpZHRoIGZvciBzcGVjaWZpYyBzdGF0ZS5cbiAgICAgKiBXaWxsIGF0dGVtcHQgdG8gZXZhbHVhdGUgcmVxdWVzdGVkIHN0YXRlIGFuZCBjYWNoZS5cbiAgICAgKlxuICAgICAqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZXhwZWN0ZWRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXhwZWN0ZWRXaWR0aChmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBEcmF3ZXIgbWluaSB3aWR0aCBmb3Igc3BlY2lmaWMgc3RhdGUuXG4gICAgICogV2lsbCBhdHRlbXB0IHRvIGV2YWx1YXRlIHJlcXVlc3RlZCBzdGF0ZSBhbmQgY2FjaGUuXG4gICAgICpcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBleHBlY3RlZE1pbmlXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXhwZWN0ZWRXaWR0aCh0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCB0b3VjaE1hbmFnZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b3VjaE1hbmFnZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhwb3NlcyBvcHRpb25hbCBuYXZpZ2F0aW9uIHNlcnZpY2VcbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoRWxlbWVudFJlZikgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9zdGF0ZTogSWd4TmF2aWdhdGlvblNlcnZpY2UsXG4gICAgICAgIC8vIHByaXZhdGUgYW5pbWF0ZTogQW5pbWF0aW9uQnVpbGRlciwgVE9ET1xuICAgICAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyLFxuICAgICAgICBwcml2YXRlIF90b3VjaE1hbmFnZXI6IEhhbW1lckdlc3R1cmVzTWFuYWdlcikge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vIERPTSBhbmQgQElucHV0KCktcyBpbml0aWFsaXplZFxuICAgICAgICBpZiAodGhpcy5fc3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlLmFkZCh0aGlzLmlkLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RHJhd2VyV2lkdGgodGhpcy53aWR0aCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgLy8gd2FpdCBmb3IgdGVtcGxhdGUgYW5kIG5nLWNvbnRlbnQgdG8gYmUgcmVhZHlcbiAgICAgICAgdGhpcy51cGRhdGVFZGdlWm9uZSgpO1xuICAgICAgICB0aGlzLmNoZWNrUGluVGhyZXNob2xkKCk7XG5cbiAgICAgICAgdGhpcy5lbnN1cmVFdmVudHMoKTtcblxuICAgICAgICAvLyBUT0RPOiBhcHBseSBwbGF0Zm9ybS1zYWZlIFJ1bGVyIGZyb20gaHR0cDovL3BsbmtyLmNvL2VkaXQvODFuV0R5cmVZTXprdW5paGZSZ1g/cD1wcmV2aWV3XG4gICAgICAgIC8vIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy82NTE1KSwgYmxvY2tlZCBieSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy82OTA0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fdG91Y2hNYW5hZ2VyLmRlc3Ryb3koKTtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZS5yZW1vdmUodGhpcy5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3Jlc2l6ZU9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXNpemVPYnNlcnZlci51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wTmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcbiAgICAgICAgLy8gc2ltcGxlIHNldHRpbmdzIGNhbiBjb21lIGZyb20gYXR0cmlidXRlIHNldCAocmF0aGVyIHRoYW4gYmluZGluZyksIG1ha2Ugc3VyZSBib29sZWFuIHByb3BzIGFyZSBjb252ZXJ0ZWRcbiAgICAgICAgaWYgKGNoYW5nZXMuZW5hYmxlR2VzdHVyZXMgJiYgY2hhbmdlcy5lbmFibGVHZXN0dXJlcy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVHZXN0dXJlcyA9ICEhKHRoaXMuZW5hYmxlR2VzdHVyZXMgJiYgdGhpcy5lbmFibGVHZXN0dXJlcy50b1N0cmluZygpID09PSAndHJ1ZScpO1xuICAgICAgICAgICAgdGhpcy5lbnN1cmVFdmVudHMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlcy5waW4gJiYgY2hhbmdlcy5waW4uY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGluID0gISEodGhpcy5waW4gJiYgdGhpcy5waW4udG9TdHJpbmcoKSA9PT0gJ3RydWUnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBpbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RvdWNoTWFuYWdlci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ2VzdHVyZXNBdHRhY2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuc3VyZUV2ZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZXMucGluVGhyZXNob2xkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5waW5UaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuc3VyZUV2ZW50cygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tQaW5UaHJlc2hvbGQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzLndpZHRoICYmIHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLnNldERyYXdlcldpZHRoKGNoYW5nZXMud2lkdGguY3VycmVudFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzLm1pbmlXaWR0aCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RHJhd2VyV2lkdGgoY2hhbmdlcy5taW5pV2lkdGguY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlRWRnZVpvbmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSB0aGUgb3BlbiBzdGF0ZSBvZiB0aGUgTmF2aWdhdGlvbiBEcmF3ZXIuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5uYXZkcmF3ZXIudG9nZ2xlKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9wZW4gdGhlIE5hdmlnYXRpb24gRHJhd2VyLiBIYXMgbm8gZWZmZWN0IGlmIGFscmVhZHkgb3BlbmVkLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMubmF2ZHJhd2VyLm9wZW4oKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgb3BlbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Bhbm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRQYW4oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW5pbmcuZW1pdCgpO1xuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG5cbiAgICAgICAgLy8gVE9ETzogU3dpdGNoIHRvIGFuaW1hdGUgQVBJIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgIC8vIHZhciBhbmltYXRpb25Dc3MgPSB0aGlzLmFuaW1hdGUuY3NzKCk7XG4gICAgICAgIC8vICAgICBhbmltYXRpb25Dc3NcbiAgICAgICAgLy8gICAgICAgICAuc2V0U3R5bGVzKHsnd2lkdGgnOic1MHB4J30sIHsnd2lkdGgnOic0MDBweCd9KVxuICAgICAgICAvLyAgICAgICAgIC5zdGFydCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudClcbiAgICAgICAgLy8gICAgICAgICAub25Db21wbGV0ZSgoKSA9PiBhbmltYXRpb25Dc3Muc2V0VG9TdHlsZXMoeyd3aWR0aCc6J2F1dG8nfSkuc3RhcnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy50b2dnbGVPcGVuZWRFdmVudCwgZmFsc2UpO1xuICAgICAgICB0aGlzLnNldERyYXdlcldpZHRoKHRoaXMud2lkdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlIHRoZSBOYXZpZ2F0aW9uIERyYXdlci4gSGFzIG5vIGVmZmVjdCBpZiBhbHJlYWR5IGNsb3NlZC5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLm5hdmRyYXdlci5jbG9zZSgpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBjbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Bhbm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRQYW4oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbG9zaW5nLmVtaXQoKTtcblxuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldERyYXdlcldpZHRoKHRoaXMubWluaVRlbXBsYXRlID8gdGhpcy5taW5pV2lkdGggOiAnJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnRvZ2dsZUNsb3NlZEV2ZW50LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzZXRfbWF4RWRnZVpvbmUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9tYXhFZGdlWm9uZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgRHJhd2VyIHdpZHRoIGZvciBzcGVjaWZpYyBzdGF0ZS4gV2lsbCBhdHRlbXB0IHRvIGV2YWx1YXRlIHJlcXVlc3RlZCBzdGF0ZSBhbmQgY2FjaGUuXG4gICAgICpcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQHBhcmFtIFttaW5pXSAtIFJlcXVlc3QgbWluaSB3aWR0aCBpbnN0ZWFkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldEV4cGVjdGVkV2lkdGgobWluaT86IGJvb2xlYW4pOiBudW1iZXIge1xuICAgICAgICBpZiAobWluaSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1pbmlUZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubWluaVdpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5taW5pV2lkdGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZiAoIXRoaXMuaXNPcGVuKSB7IC8vIFRoaXMgV09OJ1Qgd29yayBkdWUgdG8gdHJhbnNpdGlvbiB0aW1pbmdzLi4uXG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlblsxXS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl93aWR0aENhY2hlLm1pbmlXaWR0aCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmb3JjZSBjbGFzcyBmb3Igd2lkdGggY2FsYy4gVE9ETz9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5zdHlsZUR1bW15LCB0aGlzLmNzcy5kcmF3ZXIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLnN0eWxlRHVtbXksIHRoaXMuY3NzLm1pbmksIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl93aWR0aENhY2hlLm1pbmlXaWR0aCA9IHRoaXMuc3R5bGVEdW1teS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5zdHlsZUR1bW15LCB0aGlzLmNzcy5kcmF3ZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5zdHlsZUR1bW15LCB0aGlzLmNzcy5taW5pLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl93aWR0aENhY2hlLm1pbmlXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy53aWR0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl93aWR0aENhY2hlLndpZHRoID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvcmNlIGNsYXNzIGZvciB3aWR0aCBjYWxjLiBUT0RPP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLnN0eWxlRHVtbXksIHRoaXMuY3NzLmRyYXdlciwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dpZHRoQ2FjaGUud2lkdGggPSB0aGlzLnN0eWxlRHVtbXkub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuc3R5bGVEdW1teSwgdGhpcy5jc3MuZHJhd2VyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl93aWR0aENhY2hlLndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRXaW5kb3dXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuICh3aW5kb3cuaW5uZXJXaWR0aCA+IDApID8gd2luZG93LmlubmVyV2lkdGggOiBzY3JlZW4ud2lkdGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZHJhd2VyIHdpZHRoLlxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0RHJhd2VyV2lkdGgod2lkdGg6IHN0cmluZykge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHJhd2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5kcmF3ZXIsICd3aWR0aCcsIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGN1cnJlbnQgRHJhd2VyIHdpZHRoLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0RHJhd2VyV2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhd2VyLm9mZnNldFdpZHRoO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW5zdXJlRXZlbnRzKCkge1xuICAgICAgICAvLyBzZXQgbGlzdGVuZXJzIGZvciBzd2lwZS9wYW4gb25seSBpZiBuZWVkZWQsIGJ1dCBqdXN0IG9uY2VcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlR2VzdHVyZXMgJiYgIXRoaXMucGluICYmICF0aGlzLl9nZXN0dXJlc0F0dGFjaGVkKSB7XG4gICAgICAgICAgICAvLyBCdWlsdC1pbiBtYW5hZ2VyIGhhbmRsZXIoTDIwODg3KSBjYXVzZXMgZW5kbGVzcyBsb29wIGFuZCBtYXggc3RhY2sgZXhjZXB0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNjk5M1xuICAgICAgICAgICAgLy8gVXNlIG91cnMgZm9yIG5vdyAodW50aWwgYmV0YS4xMCk6XG4gICAgICAgICAgICAvLyB0aGlzLnJlbmRlcmVyLmxpc3Rlbihkb2N1bWVudCwgXCJzd2lwZVwiLCB0aGlzLnN3aXBlKTtcbiAgICAgICAgICAgIHRoaXMuX3RvdWNoTWFuYWdlci5hZGRHbG9iYWxFdmVudExpc3RlbmVyKCdkb2N1bWVudCcsICdzd2lwZScsIHRoaXMuc3dpcGUpO1xuICAgICAgICAgICAgdGhpcy5fZ2VzdHVyZXNBdHRhY2hlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIHRoaXMucmVuZGVyZXIubGlzdGVuKGRvY3VtZW50LCBcInBhbnN0YXJ0XCIsIHRoaXMucGFuc3RhcnQpO1xuICAgICAgICAgICAgLy8gdGhpcy5yZW5kZXJlci5saXN0ZW4oZG9jdW1lbnQsIFwicGFuXCIsIHRoaXMucGFuKTtcbiAgICAgICAgICAgIHRoaXMuX3RvdWNoTWFuYWdlci5hZGRHbG9iYWxFdmVudExpc3RlbmVyKCdkb2N1bWVudCcsICdwYW5zdGFydCcsIHRoaXMucGFuc3RhcnQpO1xuICAgICAgICAgICAgdGhpcy5fdG91Y2hNYW5hZ2VyLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoJ2RvY3VtZW50JywgJ3Bhbm1vdmUnLCB0aGlzLnBhbik7XG4gICAgICAgICAgICB0aGlzLl90b3VjaE1hbmFnZXIuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcignZG9jdW1lbnQnLCAncGFuZW5kJywgdGhpcy5wYW5FbmQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fcmVzaXplT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZU9ic2VydmVyID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoZGVib3VuY2UoKCkgPT4gaW50ZXJ2YWwoMTUwKSkpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1BpblRocmVzaG9sZCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUVkZ2Vab25lKCkge1xuICAgICAgICBsZXQgbWF4VmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMubWluaVRlbXBsYXRlKSB7XG4gICAgICAgICAgICBtYXhWYWx1ZSA9IE1hdGgubWF4KHRoaXMuX21heEVkZ2Vab25lLCB0aGlzLmdldEV4cGVjdGVkV2lkdGgodHJ1ZSkgKiAxLjEpO1xuICAgICAgICAgICAgdGhpcy5zZXRfbWF4RWRnZVpvbmUobWF4VmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja1BpblRocmVzaG9sZCA9IChldnQ/OiBFdmVudCkgPT4ge1xuICAgICAgICBsZXQgd2luZG93V2lkdGg7XG4gICAgICAgIGlmICh0aGlzLnBpblRocmVzaG9sZCkge1xuICAgICAgICAgICAgd2luZG93V2lkdGggPSB0aGlzLmdldFdpbmRvd1dpZHRoKCk7XG4gICAgICAgICAgICBpZiAoZXZ0ICYmIHRoaXMuX3dpZHRoQ2FjaGUud2luZG93V2lkdGggPT09IHdpbmRvd1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fd2lkdGhDYWNoZS53aW5kb3dXaWR0aCA9IHdpbmRvd1dpZHRoO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBpbiAmJiB3aW5kb3dXaWR0aCA+PSB0aGlzLnBpblRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGluID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBpbkNoYW5nZS5lbWl0KHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBpbiAmJiB3aW5kb3dXaWR0aCA8IHRoaXMucGluVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5waW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBpbkNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3dpcGUgPSAoZXZ0OiBIYW1tZXJJbnB1dCkgPT4ge1xuICAgICAgICAvLyBUT0RPOiBDb3VsZCBhbHNvIGZvcmNlIGlucHV0IHR5cGU6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI3MTA4MDUyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVHZXN0dXJlcyB8fCBldnQucG9pbnRlclR5cGUgIT09ICd0b3VjaCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhhbW1lckpTIHN3aXBlIGlzIGhvcml6b250YWwtb25seSBieSBkZWZhdWx0LCBkb24ndCBjaGVjayBkZWx0YVlcbiAgICAgICAgbGV0IGRlbHRhWDtcbiAgICAgICAgbGV0IHN0YXJ0UG9zaXRpb247XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAvLyB3aGVuIG9uIHRoZSByaWdodCB1c2UgaW52ZXJzZSBvZiBkZWx0YVhcbiAgICAgICAgICAgIGRlbHRhWCA9IC1ldnQuZGVsdGFYO1xuICAgICAgICAgICAgc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0V2luZG93V2lkdGgoKSAtIChldnQuY2VudGVyLnggKyBldnQuZGlzdGFuY2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsdGFYID0gZXZ0LmRlbHRhWDtcbiAgICAgICAgICAgIHN0YXJ0UG9zaXRpb24gPSBldnQuY2VudGVyLnggLSBldnQuZGlzdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gb25seSBhY2NlcHQgY2xvc2luZyBzd2lwZSAoaWdub3JpbmcgbWluRWRnZVpvbmUpIHdoZW4gdGhlIGRyYXdlciBpcyBleHBhbmRlZDpcbiAgICAgICAgaWYgKCh0aGlzLmlzT3BlbiAmJiBkZWx0YVggPCAwKSB8fFxuICAgICAgICAgICAgLy8gcG9zaXRpdmUgZGVsdGFYIGZyb20gdGhlIGVkZ2U6XG4gICAgICAgICAgICAoZGVsdGFYID4gMCAmJiBzdGFydFBvc2l0aW9uIDwgdGhpcy5tYXhFZGdlWm9uZSkpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHBhbnN0YXJ0ID0gKGV2dDogSGFtbWVySW5wdXQpID0+IHsgLy8gVE9ETzogdGVzdCBjb2RlXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVHZXN0dXJlcyB8fCB0aGlzLnBpbiB8fCBldnQucG9pbnRlclR5cGUgIT09ICd0b3VjaCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbiA9PT0gJ3JpZ2h0JyA/IHRoaXMuZ2V0V2luZG93V2lkdGgoKSAtIChldnQuY2VudGVyLnggKyBldnQuZGlzdGFuY2UpXG4gICAgICAgICAgICA6IGV2dC5jZW50ZXIueCAtIGV2dC5kaXN0YW5jZTtcblxuICAgICAgICAvLyBjYWNoZSB3aWR0aCBkdXJpbmcgYW5pbWF0aW9uLCBmbGFnIHRvIGFsbG93IGZ1cnRoZXIgaGFuZGxpbmdcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuIHx8IChzdGFydFBvc2l0aW9uIDwgdGhpcy5tYXhFZGdlWm9uZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3Bhbm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fcGFuU3RhcnRXaWR0aCA9IHRoaXMuZ2V0RXhwZWN0ZWRXaWR0aCghdGhpcy5pc09wZW4pO1xuICAgICAgICAgICAgdGhpcy5fcGFuTGltaXQgPSB0aGlzLmdldEV4cGVjdGVkV2lkdGgodGhpcy5pc09wZW4pO1xuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLm92ZXJsYXksICdwYW5uaW5nJywgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmRyYXdlciwgJ3Bhbm5pbmcnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcGFuID0gKGV2dDogSGFtbWVySW5wdXQpID0+IHtcbiAgICAgICAgLy8gVE9ETzogaW5wdXQuZGVsdGFYID0gcHJldkRlbHRhLnggKyAoY2VudGVyLnggLSBvZmZzZXQueCk7XG4gICAgICAgIC8vIGdldCBhY3R1YWwgZGVsdGEgKG5vdCB0b3RhbCBzZXNzaW9uIG9uZSkgZnJvbSBldmVudD9cbiAgICAgICAgLy8gcGFuIFdJTEwgYWxzbyBmaXJlIGFmdGVyIGEgZnVsbCBzd2lwZSwgb25seSByZXNpemUgb24gZmxhZ1xuICAgICAgICBpZiAoIXRoaXMuX3Bhbm5pbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByaWdodDogYm9vbGVhbiA9IHRoaXMucG9zaXRpb24gPT09ICdyaWdodCc7XG4gICAgICAgIC8vIHdoZW4gb24gdGhlIHJpZ2h0IHVzZSBpbnZlcnNlIG9mIGRlbHRhWFxuICAgICAgICBjb25zdCBkZWx0YVggPSByaWdodCA/IC1ldnQuZGVsdGFYIDogZXZ0LmRlbHRhWDtcbiAgICAgICAgbGV0IHZpc2libGVXaWR0aDtcbiAgICAgICAgbGV0IG5ld1g7XG4gICAgICAgIGxldCBwZXJjZW50O1xuXG4gICAgICAgIHZpc2libGVXaWR0aCA9IHRoaXMuX3BhblN0YXJ0V2lkdGggKyBkZWx0YVg7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuICYmIGRlbHRhWCA8IDApIHtcbiAgICAgICAgICAgIC8vIHdoZW4gdmlzaWJsZVdpZHRoIGhpdHMgbGltaXQgLSBzdG9wIGFuaW1hdGluZ1xuICAgICAgICAgICAgaWYgKHZpc2libGVXaWR0aCA8PSB0aGlzLl9wYW5MaW1pdCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzQW5pbWF0ZVdpZHRoKSB7XG4gICAgICAgICAgICAgICAgcGVyY2VudCA9ICh2aXNpYmxlV2lkdGggLSB0aGlzLl9wYW5MaW1pdCkgLyAodGhpcy5fcGFuU3RhcnRXaWR0aCAtIHRoaXMuX3BhbkxpbWl0KTtcbiAgICAgICAgICAgICAgICBuZXdYID0gdmlzaWJsZVdpZHRoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZXJjZW50ID0gdmlzaWJsZVdpZHRoIC8gdGhpcy5fcGFuU3RhcnRXaWR0aDtcbiAgICAgICAgICAgICAgICBuZXdYID0gZXZ0LmRlbHRhWDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0WFNpemUobmV3WCwgcGVyY2VudC50b1ByZWNpc2lvbigyKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5pc09wZW4gJiYgZGVsdGFYID4gMCkge1xuICAgICAgICAgICAgLy8gd2hlbiB2aXNpYmxlV2lkdGggaGl0cyBsaW1pdCAtIHN0b3AgYW5pbWF0aW5nXG4gICAgICAgICAgICBpZiAodmlzaWJsZVdpZHRoID49IHRoaXMuX3BhbkxpbWl0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNBbmltYXRlV2lkdGgpIHtcbiAgICAgICAgICAgICAgICBwZXJjZW50ID0gKHZpc2libGVXaWR0aCAtIHRoaXMuX3BhblN0YXJ0V2lkdGgpIC8gKHRoaXMuX3BhbkxpbWl0IC0gdGhpcy5fcGFuU3RhcnRXaWR0aCk7XG4gICAgICAgICAgICAgICAgbmV3WCA9IHZpc2libGVXaWR0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGVyY2VudCA9IHZpc2libGVXaWR0aCAvIHRoaXMuX3BhbkxpbWl0O1xuICAgICAgICAgICAgICAgIG5ld1ggPSAodGhpcy5fcGFuTGltaXQgLSB2aXNpYmxlV2lkdGgpICogKHJpZ2h0ID8gMSA6IC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0WFNpemUobmV3WCwgcGVyY2VudC50b1ByZWNpc2lvbigyKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHBhbkVuZCA9IChldnQ6IEhhbW1lcklucHV0KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9wYW5uaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVggPSB0aGlzLnBvc2l0aW9uID09PSAncmlnaHQnID8gLWV2dC5kZWx0YVggOiBldnQuZGVsdGFYO1xuICAgICAgICAgICAgY29uc3QgdmlzaWJsZVdpZHRoOiBudW1iZXIgPSB0aGlzLl9wYW5TdGFydFdpZHRoICsgZGVsdGFYO1xuICAgICAgICAgICAgdGhpcy5yZXNldFBhbigpO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBwYW4gYnJvdWdodCB0aGUgZHJhd2VyIHRvIDUwJVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPcGVuICYmIHZpc2libGVXaWR0aCA8PSB0aGlzLl9wYW5TdGFydFdpZHRoIC8gMikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNPcGVuICYmIHZpc2libGVXaWR0aCA+PSB0aGlzLl9wYW5MaW1pdCAvIDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3BhblN0YXJ0V2lkdGggPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldFBhbigpIHtcbiAgICAgICAgdGhpcy5fcGFubmluZyA9IGZhbHNlO1xuICAgICAgICAvKiBzdHlsZXMgZmFpbCB0byBhcHBseSB3aGVuIHNldCBvbiBwYXJlbnQgZHVlIHRvIGV4dHJhIGF0dHJpYnV0ZXMsIHByb2IgbmcgYnVnICovXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMub3ZlcmxheSwgJ3Bhbm5pbmcnLCBmYWxzZSk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZHJhd2VyLCAncGFubmluZycsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXRYU2l6ZSgwLCAnJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYWJzb2x1dGUgcG9zaXRpb24gb3Igd2lkdGggaW4gY2FzZSB0aGUgZHJhd2VyIGRvZXNuJ3QgY2hhbmdlIHBvc2l0aW9uLlxuICAgICAqIEBwYXJhbSB4IHRoZSBudW1iZXIgcGl4ZWxzIHRvIHRyYW5zbGF0ZSBvbiB0aGUgWCBheGlzIG9yIHRoZSB3aWR0aCB0byBzZXQuIDAgd2lkdGggd2lsbCBjbGVhciB0aGUgc3R5bGUgaW5zdGVhZC5cbiAgICAgKiBAcGFyYW0gb3BhY2l0eSBvcHRpb25hbCB2YWx1ZSB0byBhcHBseSB0byB0aGUgb3ZlcmxheVxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0WFNpemUoeDogbnVtYmVyLCBvcGFjaXR5Pzogc3RyaW5nKSB7XG4gICAgICAgIC8vIEFuZ3VsYXIgcG9seWZpbGxzIHBhdGNoZXMgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSwgYnV0IHN3aXRjaCB0byBEb21BZGFwdGVyIEFQSSAoVE9ETylcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNBbmltYXRlV2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLmRyYXdlciwgJ3dpZHRoJywgeCA/IE1hdGguYWJzKHgpICsgJ3B4JyA6ICcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5kcmF3ZXIsICd0cmFuc2Zvcm0nLCB4ID8gJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJ3B4LDAsMCknIDogJycpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZHJhd2VyLCAnLXdlYmtpdC10cmFuc2Zvcm0nLFxuICAgICAgICAgICAgICAgICAgICB4ID8gJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJ3B4LDAsMCknIDogJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wYWNpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMub3ZlcmxheSwgJ29wYWNpdHknLCBvcGFjaXR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2dnbGVPcGVuZWRFdmVudCA9IChldnQ/KSA9PiB7XG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnRvZ2dsZU9wZW5lZEV2ZW50LCBmYWxzZSk7XG4gICAgICAgIHRoaXMub3BlbmVkLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRvZ2dsZUNsb3NlZEV2ZW50ID0gKGV2dD8pID0+IHtcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMudG9nZ2xlQ2xvc2VkRXZlbnQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jbG9zZWQuZW1pdCgpO1xuICAgIH1cbn1cbiJdfQ==