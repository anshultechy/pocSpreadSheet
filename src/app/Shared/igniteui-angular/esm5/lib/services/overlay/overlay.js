/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { GlobalPositionStrategy } from './position/global-position-strategy';
import { NoOpScrollStrategy } from './scroll/NoOpScrollStrategy';
import { ApplicationRef, ComponentFactoryResolver, ElementRef, EventEmitter, Inject, Injectable, Injector, NgZone } from '@angular/core';
import { AnimationBuilder } from '@angular/animations';
import { fromEvent, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { showMessage } from '../../core/deprecateDecorators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/animations";
import * as i2 from "@angular/common";
/** @type {?} */
var warningShown = false;
/**
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/overlay_main.html)
 * The overlay service allows users to show components on overlay div above all other elements in the page.
 */
var IgxOverlayService = /** @class */ (function () {
    function IgxOverlayService(_factoryResolver, _appRef, _injector, builder, document, _zone) {
        var _this = this;
        this._factoryResolver = _factoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this.builder = builder;
        this.document = document;
        this._zone = _zone;
        this._componentId = 0;
        this._overlayInfos = [];
        this.destroy$ = new Subject();
        this._defaultSettings = {
            positionStrategy: new GlobalPositionStrategy(),
            scrollStrategy: new NoOpScrollStrategy(),
            modal: true,
            closeOnOutsideClick: true
        };
        /**
         * Emitted before the component is opened.
         * ```typescript
         * onOpening(event: OverlayCancelableEventArgs){
         *     const onOpening = event;
         * }
         * ```
         */
        this.onOpening = new EventEmitter();
        /**
         * Emitted after the component is opened and all animations are finished.
         * ```typescript
         * onOpened(event: OverlayEventArgs){
         *     const onOpened = event;
         * }
         * ```
         */
        this.onOpened = new EventEmitter();
        /**
         * Emitted before the component is closed.
         * ```typescript
         * onClosing(event: OverlayCancelableEventArgs){
         *     const onClosing = event;
         * }
         * ```
         */
        this.onClosing = new EventEmitter();
        /**
         * Emitted after the component is closed and all animations are finished.
         * ```typescript
         * onClosed(event: OverlayEventArgs){
         *     const onClosed = event;
         * }
         * ```
         */
        this.onClosed = new EventEmitter();
        /**
         * Emitted before animation is started
         * ```typescript
         * onAnimation(event: OverlayAnimationEventArgs){
         *     const onAnimation = event;
         * }
         * ```
         */
        this.onAnimation = new EventEmitter();
        this.documentClicked = function (ev) {
            //  if we get to modal overlay just return - we should not close anything under it
            //  if we get to non-modal overlay do the next:
            //   1. Check it has close on outside click. If not go on to next overlay;
            //   2. If true check if click is on the element. If it is on the element we have closed
            //  already all previous non-modal with close on outside click elements, so we return. If
            //  not close the overlay and check next
            for (var i = _this._overlayInfos.length; i--;) {
                /** @type {?} */
                var info = _this._overlayInfos[i];
                if (info.settings.modal) {
                    return;
                }
                if (info.settings.closeOnOutsideClick) {
                    //  if the click is on the element do not close this overlay
                    if (!info.elementRef.nativeElement.contains(ev.target)) {
                        // if we should exclude position target check if the click is over it. If so do not close overlay
                        /** @type {?} */
                        var positionTarget = (/** @type {?} */ (info.settings.positionStrategy.settings.target));
                        /** @type {?} */
                        var clickOnPositionTarget = false;
                        if (positionTarget) {
                            /** @type {?} */
                            var positionTargetRect = positionTarget.getBoundingClientRect();
                            clickOnPositionTarget = ev.clientX >= positionTargetRect.left && ev.clientX <= positionTargetRect.right &&
                                ev.clientY >= positionTargetRect.top && ev.clientY <= positionTargetRect.bottom;
                        }
                        if (!(info.settings.excludePositionTarget && clickOnPositionTarget)) {
                            //  if the click is outside click, but close animation has started do nothing
                            if (!(info.closeAnimationPlayer && info.closeAnimationPlayer.hasStarted())) {
                                _this._hide(info.id, ev);
                            }
                        }
                    }
                    else {
                        //  TODO: should we return here, or continue with next overlays
                        return;
                    }
                }
            }
        };
        /**
         * @hidden
         */
        this.repositionAll = function () {
            for (var i = _this._overlayInfos.length; i--;) {
                _this.reposition(_this._overlayInfos[i].id);
            }
        };
        this._document = (/** @type {?} */ (this.document));
    }
    /**
     * @param {?} component
     * @param {?=} settings
     * @param {?=} moduleRef
     * @return {?}
     */
    IgxOverlayService.prototype.attach = /**
     * @param {?} component
     * @param {?=} settings
     * @param {?=} moduleRef
     * @return {?}
     */
    function (component, settings, moduleRef) {
        /** @type {?} */
        var info;
        info = this.getOverlayInfo(component, moduleRef);
        //  if there is no info most probably wrong type component was provided and we just go out
        if (!info) {
            return null;
        }
        info.id = (this._componentId++).toString();
        settings = Object.assign({}, this._defaultSettings, settings);
        info.settings = settings;
        this._overlayInfos.push(info);
        return info.id;
    };
    /**
     * @param {?} compOrId
     * @param {?=} settings
     * @return {?}
     */
    IgxOverlayService.prototype.show = /**
     * @param {?} compOrId
     * @param {?=} settings
     * @return {?}
     */
    function (compOrId, settings) {
        /** @type {?} */
        var info;
        /** @type {?} */
        var id;
        if (typeof compOrId === 'string') {
            id = compOrId;
            info = this.getOverlayById(compOrId);
            if (!info) {
                console.warn('igxOverlay.show was called with wrong id: ' + compOrId);
                return null;
            }
        }
        else {
            warningShown = showMessage('`show(component, settings?)` overload is deprecated. Use `attach(component)` to obtain an Id.' +
                'Then `show(id, settings?)` with provided Id.', warningShown);
            id = (this._componentId++).toString();
            info = this.getOverlayInfo(compOrId);
            //  if there is no info most probably wrong type component was provided and we just go out
            if (!info) {
                return;
            }
            info.id = id;
        }
        settings = Object.assign({}, this._defaultSettings, info.settings, settings);
        info.settings = settings;
        this._show(info);
        return id;
    };
    /**
     * Hides the component with the ID provided as a parameter.
     * ```typescript
     * this.overlay.hide(id);
     * ```
     */
    /**
     * Hides the component with the ID provided as a parameter.
     * ```typescript
     * this.overlay.hide(id);
     * ```
     * @param {?} id
     * @return {?}
     */
    IgxOverlayService.prototype.hide = /**
     * Hides the component with the ID provided as a parameter.
     * ```typescript
     * this.overlay.hide(id);
     * ```
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this._hide(id);
    };
    /**
     * Hides all the components and the overlay.
     * ```typescript
     * this.overlay.hideAll();
     * ```
     */
    /**
     * Hides all the components and the overlay.
     * ```typescript
     * this.overlay.hideAll();
     * ```
     * @return {?}
     */
    IgxOverlayService.prototype.hideAll = /**
     * Hides all the components and the overlay.
     * ```typescript
     * this.overlay.hideAll();
     * ```
     * @return {?}
     */
    function () {
        // since overlays are removed on animation done, que all hides
        for (var i = this._overlayInfos.length; i--;) {
            this.hide(this._overlayInfos[i].id);
        }
    };
    /**
     * Repositions the component with ID provided as a parameter.
     * ```typescript
     * this.overlay.reposition(id);
     * ```
     */
    /**
     * Repositions the component with ID provided as a parameter.
     * ```typescript
     * this.overlay.reposition(id);
     * ```
     * @param {?} id
     * @return {?}
     */
    IgxOverlayService.prototype.reposition = /**
     * Repositions the component with ID provided as a parameter.
     * ```typescript
     * this.overlay.reposition(id);
     * ```
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var overlayInfo = this.getOverlayById(id);
        if (!overlayInfo || !overlayInfo.settings) {
            console.error('Wrong id provided in overlay.reposition method. Id: ' + id);
            return;
        }
        /** @type {?} */
        var contentElement = overlayInfo.elementRef.nativeElement.parentElement;
        /** @type {?} */
        var contentElementRect = contentElement.getBoundingClientRect();
        overlayInfo.settings.positionStrategy.position(contentElement, {
            width: contentElementRect.width,
            height: contentElementRect.height
        }, this._document, false);
    };
    /**
     * @private
     * @param {?} info
     * @return {?}
     */
    IgxOverlayService.prototype._show = /**
     * @private
     * @param {?} info
     * @return {?}
     */
    function (info) {
        /** @type {?} */
        var eventArgs = { id: info.id, componentRef: info.componentRef, cancel: false };
        this.onOpening.emit(eventArgs);
        if (eventArgs.cancel) {
            if (info.componentRef) {
                this._appRef.detachView(info.componentRef.hostView);
                info.componentRef.destroy();
            }
            return;
        }
        //  if there is no close animation player, or there is one but it is not started yet we are in clear
        //  opening. Otherwise, if there is close animation player playing animation now we should not setup
        //  overlay this is already done
        if (!info.closeAnimationPlayer || (info.closeAnimationPlayer && !info.closeAnimationPlayer.hasStarted())) {
            /** @type {?} */
            var elementRect = info.elementRef.nativeElement.getBoundingClientRect();
            info.initialSize = { width: elementRect.width, height: elementRect.height };
            info.hook = this.placeElementHook(info.elementRef.nativeElement);
            this.moveElementToOverlay(info);
            if (info.componentRef) {
                info.componentRef.changeDetectorRef.detectChanges();
            }
            this.updateSize(info);
            if (this._overlayInfos.indexOf(info) === -1) {
                this._overlayInfos.push(info);
            }
            info.settings.positionStrategy.position(info.elementRef.nativeElement.parentElement, { width: info.initialSize.width, height: info.initialSize.height }, document, true);
            info.settings.scrollStrategy.initialize(this._document, this, info.id);
            info.settings.scrollStrategy.attach();
        }
        this.addOutsideClickListener(info);
        this.addResizeHandler(info.id);
        if (info.settings.modal) {
            this.setupModalWrapper(info);
        }
        if (info.settings.positionStrategy.settings.openAnimation) {
            this.playOpenAnimation(info);
        }
        else {
            //  to eliminate flickering show the element just before onOpened fire
            info.elementRef.nativeElement.parentElement.style.visibility = '';
            this.onOpened.emit({ id: info.id, componentRef: info.componentRef });
        }
    };
    /**
     * @private
     * @param {?} id
     * @param {?=} event
     * @return {?}
     */
    IgxOverlayService.prototype._hide = /**
     * @private
     * @param {?} id
     * @param {?=} event
     * @return {?}
     */
    function (id, event) {
        /** @type {?} */
        var info = this.getOverlayById(id);
        if (!info) {
            console.warn('igxOverlay.hide was called with wrong id: ' + id);
            return;
        }
        /** @type {?} */
        var eventArgs = { id: id, componentRef: info.componentRef, cancel: false, event: event };
        this.onClosing.emit(eventArgs);
        if (eventArgs.cancel) {
            return;
        }
        //  TODO: synchronize where these are added/attached and where removed/detached
        info.settings.scrollStrategy.detach();
        this.removeOutsideClickListener(info);
        this.removeResizeHandler(info.id);
        /** @type {?} */
        var child = info.elementRef.nativeElement;
        if (info.settings.modal) {
            /** @type {?} */
            var parent_1 = (/** @type {?} */ (child.parentNode.parentNode));
            this.applyAnimationParams(parent_1, info.settings.positionStrategy.settings.closeAnimation);
            parent_1.classList.remove('igx-overlay__wrapper--modal');
            parent_1.classList.add('igx-overlay__wrapper');
        }
        if (info.settings.positionStrategy.settings.closeAnimation) {
            this.playCloseAnimation(info);
        }
        else {
            this.onCloseDone(info);
        }
    };
    /**
     * @private
     * @param {?} component
     * @param {?=} moduleRef
     * @return {?}
     */
    IgxOverlayService.prototype.getOverlayInfo = /**
     * @private
     * @param {?} component
     * @param {?=} moduleRef
     * @return {?}
     */
    function (component, moduleRef) {
        /** @type {?} */
        var info = { ngZone: this._zone };
        if (component instanceof ElementRef) {
            info.elementRef = (/** @type {?} */ (component));
        }
        else {
            /** @type {?} */
            var dynamicFactory = void 0;
            /** @type {?} */
            var factoryResolver = moduleRef ? moduleRef.componentFactoryResolver : this._factoryResolver;
            try {
                dynamicFactory = factoryResolver.resolveComponentFactory(component);
            }
            catch (error) {
                console.error(error);
                return null;
            }
            /** @type {?} */
            var injector = moduleRef ? moduleRef.injector : this._injector;
            /** @type {?} */
            var dynamicComponent = dynamicFactory.create(injector);
            this._appRef.attachView(dynamicComponent.hostView);
            // If the element is newly created from a Component, it is wrapped in 'ng-component' tag - we do not want that.
            /** @type {?} */
            var element = dynamicComponent.location.nativeElement;
            info.elementRef = (/** @type {?} */ ({ nativeElement: element }));
            info.componentRef = dynamicComponent;
        }
        return info;
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    IgxOverlayService.prototype.placeElementHook = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (!element.parentElement) {
            return null;
        }
        /** @type {?} */
        var hook = this._document.createElement('div');
        element.parentElement.insertBefore(hook, element);
        return hook;
    };
    /**
     * @private
     * @param {?} info
     * @return {?}
     */
    IgxOverlayService.prototype.moveElementToOverlay = /**
     * @private
     * @param {?} info
     * @return {?}
     */
    function (info) {
        /** @type {?} */
        var wrapperElement = this.getWrapperElement();
        /** @type {?} */
        var contentElement = this.getContentElement(wrapperElement, info.settings.modal);
        this.getOverlayElement(info).appendChild(wrapperElement);
        /** @type {?} */
        var elementScrollTop = info.elementRef.nativeElement.scrollTop;
        contentElement.appendChild(info.elementRef.nativeElement);
        if (elementScrollTop) {
            info.elementRef.nativeElement.scrollTop = elementScrollTop;
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxOverlayService.prototype.getWrapperElement = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var wrapper = this._document.createElement('div');
        wrapper.classList.add('igx-overlay__wrapper');
        return wrapper;
    };
    /**
     * @private
     * @param {?} wrapperElement
     * @param {?} modal
     * @return {?}
     */
    IgxOverlayService.prototype.getContentElement = /**
     * @private
     * @param {?} wrapperElement
     * @param {?} modal
     * @return {?}
     */
    function (wrapperElement, modal) {
        /** @type {?} */
        var content = this._document.createElement('div');
        if (modal) {
            content.classList.add('igx-overlay__content--modal');
            content.addEventListener('click', function (ev) {
                ev.stopPropagation();
            });
        }
        else {
            content.classList.add('igx-overlay__content');
        }
        content.addEventListener('scroll', function (ev) {
            ev.stopPropagation();
        });
        //  hide element to eliminate flickering. Show the element exactly before animation starts
        content.style.visibility = 'hidden';
        wrapperElement.appendChild(content);
        return content;
    };
    /**
     * @private
     * @param {?} info
     * @return {?}
     */
    IgxOverlayService.prototype.getOverlayElement = /**
     * @private
     * @param {?} info
     * @return {?}
     */
    function (info) {
        if (info.settings.outlet) {
            return info.settings.outlet.nativeElement;
        }
        if (!this._overlayElement) {
            this._overlayElement = this._document.createElement('div');
            this._overlayElement.classList.add('igx-overlay');
            this._document.body.appendChild(this._overlayElement);
        }
        return this._overlayElement;
    };
    /**
     * @private
     * @param {?} info
     * @return {?}
     */
    IgxOverlayService.prototype.updateSize = /**
     * @private
     * @param {?} info
     * @return {?}
     */
    function (info) {
        if (info.componentRef) {
            //  if we are positioning component this is first time it gets visible
            //  and we can finally get its size
            info.initialSize = info.elementRef.nativeElement.getBoundingClientRect();
        }
        // set content div width only if element to show has width
        if (info.initialSize.width !== 0) {
            info.elementRef.nativeElement.parentElement.style.width = info.initialSize.width + 'px';
        }
    };
    /**
     * @private
     * @param {?} info
     * @return {?}
     */
    IgxOverlayService.prototype.setupModalWrapper = /**
     * @private
     * @param {?} info
     * @return {?}
     */
    function (info) {
        var _this = this;
        /** @type {?} */
        var wrapperElement = info.elementRef.nativeElement.parentElement.parentElement;
        fromEvent(wrapperElement, 'keydown').pipe(filter(function (ev) { return ev.key === 'Escape' || ev.key === 'Esc'; }), takeUntil(this.destroy$)).subscribe(function () { return _this.hide(info.id); });
        wrapperElement.classList.remove('igx-overlay__wrapper');
        this.applyAnimationParams(wrapperElement, info.settings.positionStrategy.settings.openAnimation);
        wrapperElement.classList.add('igx-overlay__wrapper--modal');
    };
    /**
     * @private
     * @param {?} info
     * @return {?}
     */
    IgxOverlayService.prototype.onCloseDone = /**
     * @private
     * @param {?} info
     * @return {?}
     */
    function (info) {
        this.cleanUp(info);
        this.onClosed.emit({ id: info.id, componentRef: info.componentRef });
    };
    /**
     * @private
     * @param {?} info
     * @return {?}
     */
    IgxOverlayService.prototype.cleanUp = /**
     * @private
     * @param {?} info
     * @return {?}
     */
    function (info) {
        /** @type {?} */
        var child = info.elementRef.nativeElement;
        /** @type {?} */
        var outlet = this.getOverlayElement(info);
        if (!outlet.contains(child)) {
            console.warn('Component with id:' + info.id + ' is already removed!');
            return;
        }
        outlet.removeChild(child.parentNode.parentNode);
        if (info.componentRef) {
            this._appRef.detachView(info.componentRef.hostView);
            info.componentRef.destroy();
        }
        if (info.hook) {
            info.hook.parentElement.insertBefore(info.elementRef.nativeElement, info.hook);
            info.hook.parentElement.removeChild(info.hook);
        }
        /** @type {?} */
        var index = this._overlayInfos.indexOf(info);
        this._overlayInfos.splice(index, 1);
        // this._overlayElement.parentElement check just for tests that manually delete the element
        if (this._overlayInfos.length === 0 && this._overlayElement && this._overlayElement.parentElement) {
            this._overlayElement.parentElement.removeChild(this._overlayElement);
            this._overlayElement = null;
        }
    };
    /**
     * @private
     * @param {?} info
     * @return {?}
     */
    IgxOverlayService.prototype.playOpenAnimation = /**
     * @private
     * @param {?} info
     * @return {?}
     */
    function (info) {
        var _this = this;
        if (!info.openAnimationPlayer) {
            /** @type {?} */
            var animationBuilder = this.builder.build(info.settings.positionStrategy.settings.openAnimation);
            info.openAnimationPlayer = animationBuilder.create(info.elementRef.nativeElement);
            //  AnimationPlayer.getPosition returns always 0. To workaround this we are getting inner WebAnimationPlayer
            //  and then getting the positions from it.
            //  This is logged in Angular here - https://github.com/angular/angular/issues/18891
            //  As soon as this is resolved we can remove this hack
            /** @type {?} */
            var innerRenderer = ((/** @type {?} */ (info.openAnimationPlayer)))._renderer;
            info.openAnimationInnerPlayer = innerRenderer.engine.players[innerRenderer.engine.players.length - 1];
            info.openAnimationPlayer.onDone(function () {
                _this.onOpened.emit({ id: info.id, componentRef: info.componentRef });
                if (info.openAnimationPlayer) {
                    info.openAnimationPlayer.reset();
                    info.openAnimationPlayer = null;
                }
                if (info.closeAnimationPlayer && info.closeAnimationPlayer.hasStarted()) {
                    info.closeAnimationPlayer.reset();
                }
            });
        }
        //  if there is opening animation already started do nothing
        if (info.openAnimationPlayer.hasStarted()) {
            return;
        }
        //  if there is closing animation already started start open animation from where close one has reached
        //  and remove close animation
        if (info.closeAnimationPlayer && info.closeAnimationPlayer.hasStarted()) {
            //  getPosition() returns what part of the animation is passed, e.g. 0.5 if half the animation
            //  is done, 0.75 if 3/4 of the animation is done. As we need to start next animation from where
            //  the previous has finished we need the amount up to 1, therefore we are subtracting what
            //  getPosition() returns from one
            /** @type {?} */
            var position = 1 - info.closeAnimationInnerPlayer.getPosition();
            info.closeAnimationPlayer.reset();
            info.closeAnimationPlayer = null;
            info.openAnimationPlayer.init();
            info.openAnimationPlayer.setPosition(position);
        }
        this.onAnimation.emit({ id: info.id, animationPlayer: info.openAnimationPlayer, animationType: 'open' });
        //  to eliminate flickering show the element just before animation start
        info.elementRef.nativeElement.parentElement.style.visibility = '';
        info.openAnimationPlayer.play();
    };
    /**
     * @private
     * @param {?} info
     * @return {?}
     */
    IgxOverlayService.prototype.playCloseAnimation = /**
     * @private
     * @param {?} info
     * @return {?}
     */
    function (info) {
        var _this = this;
        if (!info.closeAnimationPlayer) {
            /** @type {?} */
            var animationBuilder = this.builder.build(info.settings.positionStrategy.settings.closeAnimation);
            info.closeAnimationPlayer = animationBuilder.create(info.elementRef.nativeElement);
            //  AnimationPlayer.getPosition returns always 0. To workaround this we are getting inner WebAnimationPlayer
            //  and then getting the positions from it.
            //  This is logged in Angular here - https://github.com/angular/angular/issues/18891
            //  As soon as this is resolved we can remove this hack
            /** @type {?} */
            var innerRenderer = ((/** @type {?} */ (info.closeAnimationPlayer)))._renderer;
            info.closeAnimationInnerPlayer = innerRenderer.engine.players[innerRenderer.engine.players.length - 1];
            info.closeAnimationPlayer.onDone(function () {
                if (info.closeAnimationPlayer) {
                    info.closeAnimationPlayer.reset();
                    info.closeAnimationPlayer = null;
                }
                if (info.openAnimationPlayer && info.openAnimationPlayer.hasStarted()) {
                    info.openAnimationPlayer.reset();
                }
                _this.onCloseDone(info);
            });
        }
        //  if there is closing animation already started do nothing
        if (info.closeAnimationPlayer.hasStarted()) {
            return;
        }
        //  if there is opening animation already started start close animation from where open one has reached
        //  and remove open animation
        if (info.openAnimationPlayer && info.openAnimationPlayer.hasStarted()) {
            //  getPosition() returns what part of the animation is passed, e.g. 0.5 if half the animation
            //  is done, 0.75 if 3/4 of the animation is done. As we need to start next animation from where
            //  the previous has finished we need the amount up to 1, therefore we are subtracting what
            //  getPosition() returns from one
            /** @type {?} */
            var position = 1 - info.openAnimationInnerPlayer.getPosition();
            info.openAnimationPlayer.reset();
            info.openAnimationPlayer = null;
            info.closeAnimationPlayer.init();
            info.closeAnimationPlayer.setPosition(position);
        }
        this.onAnimation.emit({ id: info.id, animationPlayer: info.closeAnimationPlayer, animationType: 'close' });
        info.closeAnimationPlayer.play();
    };
    //  TODO: check if applyAnimationParams will work with complex animations
    //  TODO: check if applyAnimationParams will work with complex animations
    /**
     * @private
     * @param {?} wrapperElement
     * @param {?} animationOptions
     * @return {?}
     */
    IgxOverlayService.prototype.applyAnimationParams = 
    //  TODO: check if applyAnimationParams will work with complex animations
    /**
     * @private
     * @param {?} wrapperElement
     * @param {?} animationOptions
     * @return {?}
     */
    function (wrapperElement, animationOptions) {
        if (!animationOptions) {
            wrapperElement.style.transitionDuration = '0ms';
            return;
        }
        if (animationOptions.type === 10 /* AnimateRef */) {
            animationOptions = ((/** @type {?} */ (animationOptions))).animation;
        }
        if (!animationOptions.options || !animationOptions.options.params) {
            return;
        }
        /** @type {?} */
        var params = (/** @type {?} */ (animationOptions.options.params));
        if (params.duration) {
            wrapperElement.style.transitionDuration = params.duration;
        }
        if (params.easing) {
            wrapperElement.style.transitionTimingFunction = params.easing;
        }
    };
    /** @hidden @internal */
    /**
     * @hidden \@internal
     * @param {?} id
     * @return {?}
     */
    IgxOverlayService.prototype.getOverlayById = /**
     * @hidden \@internal
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (!id) {
            return null;
        }
        /** @type {?} */
        var info = this._overlayInfos.find(function (e) { return e.id === id; });
        return info;
    };
    /**
     * @private
     * @param {?} info
     * @return {?}
     */
    IgxOverlayService.prototype.addOutsideClickListener = /**
     * @private
     * @param {?} info
     * @return {?}
     */
    function (info) {
        var _this = this;
        if (info.settings.closeOnOutsideClick) {
            if (info.settings.modal) {
                fromEvent(info.elementRef.nativeElement.parentElement.parentElement, 'click')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe(function () { return _this.hide(info.id); });
            }
            else if (
            //  if all overlays minus closing overlays equals one add the handler
            this._overlayInfos.filter(function (x) { return x.settings.closeOnOutsideClick && !x.settings.modal; }).length -
                this._overlayInfos.filter(function (x) { return x.settings.closeOnOutsideClick && !x.settings.modal &&
                    x.closeAnimationPlayer &&
                    x.closeAnimationPlayer.hasStarted(); }).length === 1) {
                this._document.addEventListener('click', this.documentClicked, true);
            }
        }
    };
    /**
     * @private
     * @param {?} info
     * @return {?}
     */
    IgxOverlayService.prototype.removeOutsideClickListener = /**
     * @private
     * @param {?} info
     * @return {?}
     */
    function (info) {
        if (info.settings.modal === false) {
            /** @type {?} */
            var shouldRemoveClickEventListener_1 = true;
            this._overlayInfos.forEach(function (o) {
                if (o.settings.modal === false && o.id !== info.id) {
                    shouldRemoveClickEventListener_1 = false;
                }
            });
            if (shouldRemoveClickEventListener_1) {
                this._document.removeEventListener('click', this.documentClicked, true);
            }
        }
    };
    /**
     * @private
     * @param {?} id
     * @return {?}
     */
    IgxOverlayService.prototype.addResizeHandler = /**
     * @private
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var closingOverlaysCount = this._overlayInfos
            .filter(function (o) { return o.closeAnimationPlayer && o.closeAnimationPlayer.hasStarted(); })
            .length;
        if (this._overlayInfos.length - closingOverlaysCount === 1) {
            this._document.defaultView.addEventListener('resize', this.repositionAll);
        }
    };
    /**
     * @private
     * @param {?} id
     * @return {?}
     */
    IgxOverlayService.prototype.removeResizeHandler = /**
     * @private
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var closingOverlaysCount = this._overlayInfos
            .filter(function (o) { return o.closeAnimationPlayer && o.closeAnimationPlayer.hasStarted(); })
            .length;
        if (this._overlayInfos.length - closingOverlaysCount === 1) {
            this._document.defaultView.removeEventListener('resize', this.repositionAll);
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxOverlayService.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.destroy$.next(true);
        this.destroy$.complete();
    };
    IgxOverlayService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    IgxOverlayService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: AnimationBuilder },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NgZone }
    ]; };
    /** @nocollapse */ IgxOverlayService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function IgxOverlayService_Factory() { return new IgxOverlayService(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.AnimationBuilder), i0.ɵɵinject(i2.DOCUMENT), i0.ɵɵinject(i0.NgZone)); }, token: IgxOverlayService, providedIn: "root" });
    return IgxOverlayService;
}());
export { IgxOverlayService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxOverlayService.prototype._componentId;
    /**
     * @type {?}
     * @private
     */
    IgxOverlayService.prototype._overlayInfos;
    /**
     * @type {?}
     * @private
     */
    IgxOverlayService.prototype._overlayElement;
    /**
     * @type {?}
     * @private
     */
    IgxOverlayService.prototype._document;
    /**
     * @type {?}
     * @private
     */
    IgxOverlayService.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    IgxOverlayService.prototype._defaultSettings;
    /**
     * Emitted before the component is opened.
     * ```typescript
     * onOpening(event: OverlayCancelableEventArgs){
     *     const onOpening = event;
     * }
     * ```
     * @type {?}
     */
    IgxOverlayService.prototype.onOpening;
    /**
     * Emitted after the component is opened and all animations are finished.
     * ```typescript
     * onOpened(event: OverlayEventArgs){
     *     const onOpened = event;
     * }
     * ```
     * @type {?}
     */
    IgxOverlayService.prototype.onOpened;
    /**
     * Emitted before the component is closed.
     * ```typescript
     * onClosing(event: OverlayCancelableEventArgs){
     *     const onClosing = event;
     * }
     * ```
     * @type {?}
     */
    IgxOverlayService.prototype.onClosing;
    /**
     * Emitted after the component is closed and all animations are finished.
     * ```typescript
     * onClosed(event: OverlayEventArgs){
     *     const onClosed = event;
     * }
     * ```
     * @type {?}
     */
    IgxOverlayService.prototype.onClosed;
    /**
     * Emitted before animation is started
     * ```typescript
     * onAnimation(event: OverlayAnimationEventArgs){
     *     const onAnimation = event;
     * }
     * ```
     * @type {?}
     */
    IgxOverlayService.prototype.onAnimation;
    /**
     * @type {?}
     * @private
     */
    IgxOverlayService.prototype.documentClicked;
    /**
     * @hidden
     * @type {?}
     */
    IgxOverlayService.prototype.repositionAll;
    /**
     * @type {?}
     * @private
     */
    IgxOverlayService.prototype._factoryResolver;
    /**
     * @type {?}
     * @private
     */
    IgxOverlayService.prototype._appRef;
    /**
     * @type {?}
     * @private
     */
    IgxOverlayService.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    IgxOverlayService.prototype.builder;
    /**
     * @type {?}
     * @private
     */
    IgxOverlayService.prototype.document;
    /**
     * @type {?}
     * @private
     */
    IgxOverlayService.prototype._zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvb3ZlcmxheS9vdmVybGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFVakUsT0FBTyxFQUNILGNBQWMsRUFFZCx3QkFBd0IsRUFFeEIsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sVUFBVSxFQUNWLFFBQVEsRUFJUixNQUFNLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFrRixNQUFNLHFCQUFxQixDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7OztJQUV6RCxZQUFZLEdBQUcsS0FBSzs7Ozs7QUFNeEI7SUFpRUksMkJBQ1ksZ0JBQTBDLEVBQzFDLE9BQXVCLEVBQ3ZCLFNBQW1CLEVBQ25CLE9BQXlCLEVBQ1AsUUFBYSxFQUMvQixLQUFhO1FBTnpCLGlCQVFDO1FBUFcscUJBQWdCLEdBQWhCLGdCQUFnQixDQUEwQjtRQUMxQyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ1AsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBckVqQixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNq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ckMsc0NBQTRCOzs7OztJQUM1QixxQ0FBMEM7Ozs7O0lBRTFDLDZDQUtFOzs7Ozs7Ozs7O0lBVUYsc0NBQWtFOzs7Ozs7Ozs7O0lBVWxFLHFDQUF1RDs7Ozs7Ozs7OztJQVV2RCxzQ0FBK0Q7Ozs7Ozs7Ozs7SUFVL0QscUNBQXVEOzs7Ozs7Ozs7O0lBVXZELHdDQUFtRTs7Ozs7SUEyZm5FLDRDQW9DQzs7Ozs7SUF1REQsMENBSUM7Ozs7O0lBdmxCRyw2Q0FBa0Q7Ozs7O0lBQ2xELG9DQUErQjs7Ozs7SUFDL0Isc0NBQTJCOzs7OztJQUMzQixvQ0FBaUM7Ozs7O0lBQ2pDLHFDQUF1Qzs7Ozs7SUFDdkMsa0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgR2xvYmFsUG9zaXRpb25TdHJhdGVneSB9IGZyb20gJy4vcG9zaXRpb24vZ2xvYmFsLXBvc2l0aW9uLXN0cmF0ZWd5JztcbmltcG9ydCB7IE5vT3BTY3JvbGxTdHJhdGVneSB9IGZyb20gJy4vc2Nyb2xsL05vT3BTY3JvbGxTdHJhdGVneSc7XG5pbXBvcnQge1xuICAgIE92ZXJsYXlTZXR0aW5ncyxcbiAgICBPdmVybGF5RXZlbnRBcmdzLFxuICAgIE92ZXJsYXlJbmZvLFxuICAgIE92ZXJsYXlBbmltYXRpb25FdmVudEFyZ3MsXG4gICAgT3ZlcmxheUNhbmNlbGFibGVFdmVudEFyZ3MsXG4gICAgT3ZlcmxheUNsb3NpbmdFdmVudEFyZ3Ncbn0gZnJvbSAnLi91dGlsaXRpZXMnO1xuXG5pbXBvcnQge1xuICAgIEFwcGxpY2F0aW9uUmVmLFxuICAgIENvbXBvbmVudEZhY3RvcnksXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIENvbXBvbmVudFJlZixcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbmplY3QsXG4gICAgSW5qZWN0YWJsZSxcbiAgICBJbmplY3RvcixcbiAgICBUeXBlLFxuICAgIE9uRGVzdHJveSxcbiAgICBOZ01vZHVsZVJlZixcbiAgICBOZ1pvbmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmltYXRpb25CdWlsZGVyLCBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSwgQW5pbWF0aW9uTWV0YWRhdGFUeXBlLCBBbmltYXRpb25BbmltYXRlUmVmTWV0YWRhdGEgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uUGFyYW1zIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucy9tYWluJztcbmltcG9ydCB7IHNob3dNZXNzYWdlIH0gZnJvbSAnLi4vLi4vY29yZS9kZXByZWNhdGVEZWNvcmF0b3JzJztcblxubGV0IHdhcm5pbmdTaG93biA9IGZhbHNlO1xuXG4vKipcbiAqIFtEb2N1bWVudGF0aW9uXShodHRwczovL3d3dy5pbmZyYWdpc3RpY3MuY29tL3Byb2R1Y3RzL2lnbml0ZS11aS1hbmd1bGFyL2FuZ3VsYXIvY29tcG9uZW50cy9vdmVybGF5X21haW4uaHRtbClcbiAqIFRoZSBvdmVybGF5IHNlcnZpY2UgYWxsb3dzIHVzZXJzIHRvIHNob3cgY29tcG9uZW50cyBvbiBvdmVybGF5IGRpdiBhYm92ZSBhbGwgb3RoZXIgZWxlbWVudHMgaW4gdGhlIHBhZ2UuXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgSWd4T3ZlcmxheVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX2NvbXBvbmVudElkID0gMDtcbiAgICBwcml2YXRlIF9vdmVybGF5SW5mb3M6IE92ZXJsYXlJbmZvW10gPSBbXTtcbiAgICBwcml2YXRlIF9vdmVybGF5RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfZG9jdW1lbnQ6IERvY3VtZW50O1xuICAgIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gICAgcHJpdmF0ZSBfZGVmYXVsdFNldHRpbmdzOiBPdmVybGF5U2V0dGluZ3MgPSB7XG4gICAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IG5ldyBHbG9iYWxQb3NpdGlvblN0cmF0ZWd5KCksXG4gICAgICAgIHNjcm9sbFN0cmF0ZWd5OiBuZXcgTm9PcFNjcm9sbFN0cmF0ZWd5KCksXG4gICAgICAgIG1vZGFsOiB0cnVlLFxuICAgICAgICBjbG9zZU9uT3V0c2lkZUNsaWNrOiB0cnVlXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgb3BlbmVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBvbk9wZW5pbmcoZXZlbnQ6IE92ZXJsYXlDYW5jZWxhYmxlRXZlbnRBcmdzKXtcbiAgICAgKiAgICAgY29uc3Qgb25PcGVuaW5nID0gZXZlbnQ7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBvbk9wZW5pbmcgPSBuZXcgRXZlbnRFbWl0dGVyPE92ZXJsYXlDYW5jZWxhYmxlRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCBhZnRlciB0aGUgY29tcG9uZW50IGlzIG9wZW5lZCBhbmQgYWxsIGFuaW1hdGlvbnMgYXJlIGZpbmlzaGVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBvbk9wZW5lZChldmVudDogT3ZlcmxheUV2ZW50QXJncyl7XG4gICAgICogICAgIGNvbnN0IG9uT3BlbmVkID0gZXZlbnQ7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBvbk9wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXI8T3ZlcmxheUV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgY2xvc2VkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBvbkNsb3NpbmcoZXZlbnQ6IE92ZXJsYXlDYW5jZWxhYmxlRXZlbnRBcmdzKXtcbiAgICAgKiAgICAgY29uc3Qgb25DbG9zaW5nID0gZXZlbnQ7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBvbkNsb3NpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPE92ZXJsYXlDbG9zaW5nRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCBhZnRlciB0aGUgY29tcG9uZW50IGlzIGNsb3NlZCBhbmQgYWxsIGFuaW1hdGlvbnMgYXJlIGZpbmlzaGVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBvbkNsb3NlZChldmVudDogT3ZlcmxheUV2ZW50QXJncyl7XG4gICAgICogICAgIGNvbnN0IG9uQ2xvc2VkID0gZXZlbnQ7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBvbkNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8T3ZlcmxheUV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgYmVmb3JlIGFuaW1hdGlvbiBpcyBzdGFydGVkXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIG9uQW5pbWF0aW9uKGV2ZW50OiBPdmVybGF5QW5pbWF0aW9uRXZlbnRBcmdzKXtcbiAgICAgKiAgICAgY29uc3Qgb25BbmltYXRpb24gPSBldmVudDtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIG9uQW5pbWF0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxPdmVybGF5QW5pbWF0aW9uRXZlbnRBcmdzPigpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2ZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgICAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgICAgIHByaXZhdGUgYnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlcixcbiAgICAgICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgICAgICBwcml2YXRlIF96b25lOiBOZ1pvbmUpIHtcbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSA8RG9jdW1lbnQ+dGhpcy5kb2N1bWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgSWQuIFByb3ZpZGUgdGhpcyBJZCB3aGVuIGNhbGwgYHNob3coaWQsIHNldHRpbmdzPylgIG1ldGhvZFxuICAgICAqIEBwYXJhbSBjb21wb25lbnQgRWxlbWVudFJlZiB0byBzaG93IGluIG92ZXJsYXlcbiAgICAgKiBAcGFyYW0gc2V0dGluZ3MgRGlzcGxheSBzZXR0aW5ncyBmb3IgdGhlIG92ZXJsYXksIHN1Y2ggYXMgcG9zaXRpb25pbmcgYW5kIHNjcm9sbC9jbG9zZSBiZWhhdmlvci5cbiAgICAgKiBAcmV0dXJucyBJZCBvZiB0aGUgY3JlYXRlZCBvdmVybGF5LiBWYWxpZCB1bnRpbCBgb25DbG9zZWRgIGlzIGVtaXR0ZWQuXG4gICAgICovXG4gICAgYXR0YWNoKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHNldHRpbmdzPzogT3ZlcmxheVNldHRpbmdzKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBJZC4gUHJvdmlkZSB0aGlzIElkIHdoZW4gY2FsbCBgc2hvdyhpZCwgc2V0dGluZ3M/KWAgbWV0aG9kXG4gICAgICogQHBhcmFtIGNvbXBvbmVudCBDb21wb25lbnQgVHlwZSB0byBzaG93IGluIG92ZXJsYXlcbiAgICAgKiBAcGFyYW0gc2V0dGluZ3MgRGlzcGxheSBzZXR0aW5ncyBmb3IgdGhlIG92ZXJsYXksIHN1Y2ggYXMgcG9zaXRpb25pbmcgYW5kIHNjcm9sbC9jbG9zZSBiZWhhdmlvci5cbiAgICAgKiBAcGFyYW0gbW9kdWxlUmVmIE9wdGlvbmFsIHJlZmVyZW5jZSB0byB0aGUgTmdNb2R1bGUgdGhhdCBjYW4gcmVzb2x2ZSB0aGUgY29tcG9uZW50J3MgZmFjdG9yeVxuICAgICAqIEByZXR1cm5zIElkIG9mIHRoZSBjcmVhdGVkIG92ZXJsYXkuIFZhbGlkIHVudGlsIGBvbkNsb3NlZGAgaXMgZW1pdHRlZC5cbiAgICAgKi9cbiAgICBhdHRhY2goY29tcG9uZW50OiBUeXBlPGFueT4sIHNldHRpbmdzPzogT3ZlcmxheVNldHRpbmdzLCBtb2R1bGVSZWY/OiBOZ01vZHVsZVJlZjxhbnk+KTogc3RyaW5nO1xuICAgIGF0dGFjaChjb21wb25lbnQ6IEVsZW1lbnRSZWYgfCBUeXBlPGFueT4sIHNldHRpbmdzPzogT3ZlcmxheVNldHRpbmdzLCBtb2R1bGVSZWY/OiBOZ01vZHVsZVJlZjxhbnk+KTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGluZm86IE92ZXJsYXlJbmZvO1xuICAgICAgICBpbmZvID0gdGhpcy5nZXRPdmVybGF5SW5mbyhjb21wb25lbnQsIG1vZHVsZVJlZik7XG5cbiAgICAgICAgLy8gIGlmIHRoZXJlIGlzIG5vIGluZm8gbW9zdCBwcm9iYWJseSB3cm9uZyB0eXBlIGNvbXBvbmVudCB3YXMgcHJvdmlkZWQgYW5kIHdlIGp1c3QgZ28gb3V0XG4gICAgICAgIGlmICghaW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpbmZvLmlkID0gKHRoaXMuX2NvbXBvbmVudElkKyspLnRvU3RyaW5nKCk7XG4gICAgICAgIHNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZGVmYXVsdFNldHRpbmdzLCBzZXR0aW5ncyk7XG4gICAgICAgIGluZm8uc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgdGhpcy5fb3ZlcmxheUluZm9zLnB1c2goaW5mbyk7XG4gICAgICAgIHJldHVybiBpbmZvLmlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIHRoZSBvdmVybGF5IGZvciBwcm92aWRlZCBpZC5cbiAgICAgKiBAcGFyYW0gaWQgSWQgdG8gc2hvdyBvdmVybGF5IGZvclxuICAgICAqIEBwYXJhbSBzZXR0aW5ncyBEaXNwbGF5IHNldHRpbmdzIGZvciB0aGUgb3ZlcmxheSwgc3VjaCBhcyBwb3NpdGlvbmluZyBhbmQgc2Nyb2xsL2Nsb3NlIGJlaGF2aW9yLlxuICAgICAqL1xuICAgIHNob3coaWQ6IHN0cmluZywgc2V0dGluZ3M/OiBPdmVybGF5U2V0dGluZ3MpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogU2hvd3MgdGhlIHByb3ZpZGVkIGNvbXBvbmVudC5cbiAgICAgKiBAcGFyYW0gY29tcG9uZW50IEVsZW1lbnRSZWYgb3IgQ29tcG9uZW50IFR5cGUgdG8gc2hvdyBpbiBvdmVybGF5XG4gICAgICogQHBhcmFtIHNldHRpbmdzIERpc3BsYXkgc2V0dGluZ3MgZm9yIHRoZSBvdmVybGF5LCBzdWNoIGFzIHBvc2l0aW9uaW5nIGFuZCBzY3JvbGwvY2xvc2UgYmVoYXZpb3IuXG4gICAgICogQHJldHVybnMgSWQgb2YgdGhlIGNyZWF0ZWQgb3ZlcmxheS4gVmFsaWQgdW50aWwgYG9uQ2xvc2VkYCBpcyBlbWl0dGVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLm92ZXJsYXkuc2hvdyhlbGVtZW50LCBzZXR0aW5ncyk7XG4gICAgICogYGBgXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlIGBhdHRhY2goY29tcG9uZW50KWAgdG8gb2J0YWluIGFuIElkLiBUaGVuIGBzaG93KGlkLCBzZXR0aW5ncz8pYCB3aXRoIHByb3ZpZGVkIElkLlxuICAgICAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBzaG93KGNvbXBvbmVudDogRWxlbWVudFJlZiB8IFR5cGU8YW55Piwgc2V0dGluZ3M/OiBPdmVybGF5U2V0dGluZ3MpOiBzdHJpbmc7XG4gICAgc2hvdyhjb21wT3JJZDogc3RyaW5nIHwgRWxlbWVudFJlZiB8IFR5cGU8YW55Piwgc2V0dGluZ3M/OiBPdmVybGF5U2V0dGluZ3MpOiBzdHJpbmcge1xuICAgICAgICBsZXQgaW5mbzogT3ZlcmxheUluZm87XG4gICAgICAgIGxldCBpZDogc3RyaW5nO1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBPcklkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWQgPSBjb21wT3JJZDtcbiAgICAgICAgICAgIGluZm8gPSB0aGlzLmdldE92ZXJsYXlCeUlkKGNvbXBPcklkKTtcbiAgICAgICAgICAgIGlmICghaW5mbykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignaWd4T3ZlcmxheS5zaG93IHdhcyBjYWxsZWQgd2l0aCB3cm9uZyBpZDogJyArIGNvbXBPcklkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdhcm5pbmdTaG93biA9IHNob3dNZXNzYWdlKFxuICAgICAgICAgICAgICAgICdgc2hvdyhjb21wb25lbnQsIHNldHRpbmdzPylgIG92ZXJsb2FkIGlzIGRlcHJlY2F0ZWQuIFVzZSBgYXR0YWNoKGNvbXBvbmVudClgIHRvIG9idGFpbiBhbiBJZC4nICtcbiAgICAgICAgICAgICAgICAnVGhlbiBgc2hvdyhpZCwgc2V0dGluZ3M/KWAgd2l0aCBwcm92aWRlZCBJZC4nLFxuICAgICAgICAgICAgICAgIHdhcm5pbmdTaG93bik7XG4gICAgICAgICAgICBpZCA9ICh0aGlzLl9jb21wb25lbnRJZCsrKS50b1N0cmluZygpO1xuICAgICAgICAgICAgaW5mbyA9IHRoaXMuZ2V0T3ZlcmxheUluZm8oY29tcE9ySWQpO1xuXG4gICAgICAgICAgICAvLyAgaWYgdGhlcmUgaXMgbm8gaW5mbyBtb3N0IHByb2JhYmx5IHdyb25nIHR5cGUgY29tcG9uZW50IHdhcyBwcm92aWRlZCBhbmQgd2UganVzdCBnbyBvdXRcbiAgICAgICAgICAgIGlmICghaW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5mby5pZCA9IGlkO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9kZWZhdWx0U2V0dGluZ3MsIGluZm8uc2V0dGluZ3MsIHNldHRpbmdzKTtcbiAgICAgICAgaW5mby5zZXR0aW5ncyA9IHNldHRpbmdzO1xuXG4gICAgICAgIHRoaXMuX3Nob3coaW5mbyk7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlcyB0aGUgY29tcG9uZW50IHdpdGggdGhlIElEIHByb3ZpZGVkIGFzIGEgcGFyYW1ldGVyLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLm92ZXJsYXkuaGlkZShpZCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgaGlkZShpZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2hpZGUoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGVzIGFsbCB0aGUgY29tcG9uZW50cyBhbmQgdGhlIG92ZXJsYXkuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMub3ZlcmxheS5oaWRlQWxsKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgaGlkZUFsbCgpIHtcbiAgICAgICAgLy8gc2luY2Ugb3ZlcmxheXMgYXJlIHJlbW92ZWQgb24gYW5pbWF0aW9uIGRvbmUsIHF1ZSBhbGwgaGlkZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX292ZXJsYXlJbmZvcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSh0aGlzLl9vdmVybGF5SW5mb3NbaV0uaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwb3NpdGlvbnMgdGhlIGNvbXBvbmVudCB3aXRoIElEIHByb3ZpZGVkIGFzIGEgcGFyYW1ldGVyLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLm92ZXJsYXkucmVwb3NpdGlvbihpZCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcmVwb3NpdGlvbihpZDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG92ZXJsYXlJbmZvID0gdGhpcy5nZXRPdmVybGF5QnlJZChpZCk7XG4gICAgICAgIGlmICghb3ZlcmxheUluZm8gfHwgIW92ZXJsYXlJbmZvLnNldHRpbmdzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdXcm9uZyBpZCBwcm92aWRlZCBpbiBvdmVybGF5LnJlcG9zaXRpb24gbWV0aG9kLiBJZDogJyArIGlkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gb3ZlcmxheUluZm8uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50UmVjdCA9IGNvbnRlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBvdmVybGF5SW5mby5zZXR0aW5ncy5wb3NpdGlvblN0cmF0ZWd5LnBvc2l0aW9uKFxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNvbnRlbnRFbGVtZW50UmVjdC53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNvbnRlbnRFbGVtZW50UmVjdC5oZWlnaHRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLl9kb2N1bWVudCxcbiAgICAgICAgICAgIGZhbHNlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zaG93KGluZm86IE92ZXJsYXlJbmZvKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50QXJnczogT3ZlcmxheUNhbmNlbGFibGVFdmVudEFyZ3MgPSB7IGlkOiBpbmZvLmlkLCBjb21wb25lbnRSZWY6IGluZm8uY29tcG9uZW50UmVmLCBjYW5jZWw6IGZhbHNlIH07XG4gICAgICAgIHRoaXMub25PcGVuaW5nLmVtaXQoZXZlbnRBcmdzKTtcbiAgICAgICAgaWYgKGV2ZW50QXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgIGlmIChpbmZvLmNvbXBvbmVudFJlZikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KGluZm8uY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICAgICAgICAgICAgICBpbmZvLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBpZiB0aGVyZSBpcyBubyBjbG9zZSBhbmltYXRpb24gcGxheWVyLCBvciB0aGVyZSBpcyBvbmUgYnV0IGl0IGlzIG5vdCBzdGFydGVkIHlldCB3ZSBhcmUgaW4gY2xlYXJcbiAgICAgICAgLy8gIG9wZW5pbmcuIE90aGVyd2lzZSwgaWYgdGhlcmUgaXMgY2xvc2UgYW5pbWF0aW9uIHBsYXllciBwbGF5aW5nIGFuaW1hdGlvbiBub3cgd2Ugc2hvdWxkIG5vdCBzZXR1cFxuICAgICAgICAvLyAgb3ZlcmxheSB0aGlzIGlzIGFscmVhZHkgZG9uZVxuICAgICAgICBpZiAoIWluZm8uY2xvc2VBbmltYXRpb25QbGF5ZXIgfHwgKGluZm8uY2xvc2VBbmltYXRpb25QbGF5ZXIgJiYgIWluZm8uY2xvc2VBbmltYXRpb25QbGF5ZXIuaGFzU3RhcnRlZCgpKSkge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudFJlY3QgPSBpbmZvLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGluZm8uaW5pdGlhbFNpemUgPSB7IHdpZHRoOiBlbGVtZW50UmVjdC53aWR0aCwgaGVpZ2h0OiBlbGVtZW50UmVjdC5oZWlnaHQgfTtcbiAgICAgICAgICAgIGluZm8uaG9vayA9IHRoaXMucGxhY2VFbGVtZW50SG9vayhpbmZvLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgICAgIHRoaXMubW92ZUVsZW1lbnRUb092ZXJsYXkoaW5mbyk7XG4gICAgICAgICAgICBpZiAoaW5mby5jb21wb25lbnRSZWYpIHtcbiAgICAgICAgICAgICAgICBpbmZvLmNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoaW5mbyk7XG4gICAgICAgICAgICBpZiAodGhpcy5fb3ZlcmxheUluZm9zLmluZGV4T2YoaW5mbykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb3ZlcmxheUluZm9zLnB1c2goaW5mbyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluZm8uc2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5wb3NpdGlvbihcbiAgICAgICAgICAgICAgICBpbmZvLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LFxuICAgICAgICAgICAgICAgIHsgd2lkdGg6IGluZm8uaW5pdGlhbFNpemUud2lkdGgsIGhlaWdodDogaW5mby5pbml0aWFsU2l6ZS5oZWlnaHQgfSxcbiAgICAgICAgICAgICAgICBkb2N1bWVudCxcbiAgICAgICAgICAgICAgICB0cnVlKTtcbiAgICAgICAgICAgIGluZm8uc2V0dGluZ3Muc2Nyb2xsU3RyYXRlZ3kuaW5pdGlhbGl6ZSh0aGlzLl9kb2N1bWVudCwgdGhpcywgaW5mby5pZCk7XG4gICAgICAgICAgICBpbmZvLnNldHRpbmdzLnNjcm9sbFN0cmF0ZWd5LmF0dGFjaCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRPdXRzaWRlQ2xpY2tMaXN0ZW5lcihpbmZvKTtcbiAgICAgICAgdGhpcy5hZGRSZXNpemVIYW5kbGVyKGluZm8uaWQpO1xuXG4gICAgICAgIGlmIChpbmZvLnNldHRpbmdzLm1vZGFsKSB7XG4gICAgICAgICAgICB0aGlzLnNldHVwTW9kYWxXcmFwcGVyKGluZm8pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZm8uc2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5zZXR0aW5ncy5vcGVuQW5pbWF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlPcGVuQW5pbWF0aW9uKGluZm8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gIHRvIGVsaW1pbmF0ZSBmbGlja2VyaW5nIHNob3cgdGhlIGVsZW1lbnQganVzdCBiZWZvcmUgb25PcGVuZWQgZmlyZVxuICAgICAgICAgICAgaW5mby5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJyc7XG4gICAgICAgICAgICB0aGlzLm9uT3BlbmVkLmVtaXQoeyBpZDogaW5mby5pZCwgY29tcG9uZW50UmVmOiBpbmZvLmNvbXBvbmVudFJlZiB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2hpZGUoaWQ6IHN0cmluZywgZXZlbnQ/OiBFdmVudCkge1xuICAgICAgICBjb25zdCBpbmZvOiBPdmVybGF5SW5mbyA9IHRoaXMuZ2V0T3ZlcmxheUJ5SWQoaWQpO1xuXG4gICAgICAgIGlmICghaW5mbykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdpZ3hPdmVybGF5LmhpZGUgd2FzIGNhbGxlZCB3aXRoIHdyb25nIGlkOiAnICsgaWQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXZlbnRBcmdzID0geyBpZCwgY29tcG9uZW50UmVmOiBpbmZvLmNvbXBvbmVudFJlZiwgY2FuY2VsOiBmYWxzZSwgZXZlbnQgfTtcbiAgICAgICAgdGhpcy5vbkNsb3NpbmcuZW1pdChldmVudEFyZ3MpO1xuICAgICAgICBpZiAoZXZlbnRBcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gIFRPRE86IHN5bmNocm9uaXplIHdoZXJlIHRoZXNlIGFyZSBhZGRlZC9hdHRhY2hlZCBhbmQgd2hlcmUgcmVtb3ZlZC9kZXRhY2hlZFxuICAgICAgICBpbmZvLnNldHRpbmdzLnNjcm9sbFN0cmF0ZWd5LmRldGFjaCgpO1xuICAgICAgICB0aGlzLnJlbW92ZU91dHNpZGVDbGlja0xpc3RlbmVyKGluZm8pO1xuICAgICAgICB0aGlzLnJlbW92ZVJlc2l6ZUhhbmRsZXIoaW5mby5pZCk7XG5cbiAgICAgICAgY29uc3QgY2hpbGQ6IEhUTUxFbGVtZW50ID0gaW5mby5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGlmIChpbmZvLnNldHRpbmdzLm1vZGFsKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBjaGlsZC5wYXJlbnROb2RlLnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLmFwcGx5QW5pbWF0aW9uUGFyYW1zKHBhcmVudCwgaW5mby5zZXR0aW5ncy5wb3NpdGlvblN0cmF0ZWd5LnNldHRpbmdzLmNsb3NlQW5pbWF0aW9uKTtcbiAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdpZ3gtb3ZlcmxheV9fd3JhcHBlci0tbW9kYWwnKTtcbiAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdpZ3gtb3ZlcmxheV9fd3JhcHBlcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZm8uc2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5zZXR0aW5ncy5jbG9zZUFuaW1hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5wbGF5Q2xvc2VBbmltYXRpb24oaW5mbyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2xvc2VEb25lKGluZm8pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRPdmVybGF5SW5mbyhjb21wb25lbnQ6IGFueSwgbW9kdWxlUmVmPzogTmdNb2R1bGVSZWY8YW55Pik6IE92ZXJsYXlJbmZvIHtcbiAgICAgICAgY29uc3QgaW5mbzogT3ZlcmxheUluZm8gPSB7IG5nWm9uZTogdGhpcy5fem9uZSB9O1xuICAgICAgICBpZiAoY29tcG9uZW50IGluc3RhbmNlb2YgRWxlbWVudFJlZikge1xuICAgICAgICAgICAgaW5mby5lbGVtZW50UmVmID0gPEVsZW1lbnRSZWY+Y29tcG9uZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGR5bmFtaWNGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PHt9PjtcbiAgICAgICAgICAgIGNvbnN0IGZhY3RvcnlSZXNvbHZlciA9IG1vZHVsZVJlZiA/IG1vZHVsZVJlZi5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgOiB0aGlzLl9mYWN0b3J5UmVzb2x2ZXI7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGR5bmFtaWNGYWN0b3J5ID0gZmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpbmplY3RvciA9IG1vZHVsZVJlZiA/IG1vZHVsZVJlZi5pbmplY3RvciA6IHRoaXMuX2luamVjdG9yO1xuICAgICAgICAgICAgY29uc3QgZHluYW1pY0NvbXBvbmVudDogQ29tcG9uZW50UmVmPHt9PiA9IGR5bmFtaWNGYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XG4gICAgICAgICAgICB0aGlzLl9hcHBSZWYuYXR0YWNoVmlldyhkeW5hbWljQ29tcG9uZW50Lmhvc3RWaWV3KTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgaXMgbmV3bHkgY3JlYXRlZCBmcm9tIGEgQ29tcG9uZW50LCBpdCBpcyB3cmFwcGVkIGluICduZy1jb21wb25lbnQnIHRhZyAtIHdlIGRvIG5vdCB3YW50IHRoYXQuXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZHluYW1pY0NvbXBvbmVudC5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgaW5mby5lbGVtZW50UmVmID0gPEVsZW1lbnRSZWY+eyBuYXRpdmVFbGVtZW50OiBlbGVtZW50IH07XG4gICAgICAgICAgICBpbmZvLmNvbXBvbmVudFJlZiA9IGR5bmFtaWNDb21wb25lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYWNlRWxlbWVudEhvb2soZWxlbWVudDogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGlmICghZWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhvb2sgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShob29rLCBlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGhvb2s7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtb3ZlRWxlbWVudFRvT3ZlcmxheShpbmZvOiBPdmVybGF5SW5mbykge1xuICAgICAgICBjb25zdCB3cmFwcGVyRWxlbWVudCA9IHRoaXMuZ2V0V3JhcHBlckVsZW1lbnQoKTtcbiAgICAgICAgY29uc3QgY29udGVudEVsZW1lbnQgPSB0aGlzLmdldENvbnRlbnRFbGVtZW50KHdyYXBwZXJFbGVtZW50LCBpbmZvLnNldHRpbmdzLm1vZGFsKTtcbiAgICAgICAgdGhpcy5nZXRPdmVybGF5RWxlbWVudChpbmZvKS5hcHBlbmRDaGlsZCh3cmFwcGVyRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRTY3JvbGxUb3AgPSBpbmZvLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGluZm8uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblxuICAgICAgICBpZiAoZWxlbWVudFNjcm9sbFRvcCkge1xuICAgICAgICAgICAgaW5mby5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gZWxlbWVudFNjcm9sbFRvcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0V3JhcHBlckVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCB3cmFwcGVyOiBIVE1MRWxlbWVudCA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2lneC1vdmVybGF5X193cmFwcGVyJyk7XG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q29udGVudEVsZW1lbnQod3JhcHBlckVsZW1lbnQ6IEhUTUxFbGVtZW50LCBtb2RhbDogYm9vbGVhbik6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgY29udGVudDogSFRNTEVsZW1lbnQgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWYgKG1vZGFsKSB7XG4gICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2lneC1vdmVybGF5X19jb250ZW50LS1tb2RhbCcpO1xuICAgICAgICAgICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldjogRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdpZ3gtb3ZlcmxheV9fY29udGVudCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gIGhpZGUgZWxlbWVudCB0byBlbGltaW5hdGUgZmxpY2tlcmluZy4gU2hvdyB0aGUgZWxlbWVudCBleGFjdGx5IGJlZm9yZSBhbmltYXRpb24gc3RhcnRzXG4gICAgICAgIGNvbnRlbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gICAgICAgIHdyYXBwZXJFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldE92ZXJsYXlFbGVtZW50KGluZm86IE92ZXJsYXlJbmZvKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBpZiAoaW5mby5zZXR0aW5ncy5vdXRsZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBpbmZvLnNldHRpbmdzLm91dGxldC5uYXRpdmVFbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fb3ZlcmxheUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX292ZXJsYXlFbGVtZW50ID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0aGlzLl9vdmVybGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpZ3gtb3ZlcmxheScpO1xuICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9vdmVybGF5RWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fb3ZlcmxheUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVTaXplKGluZm86IE92ZXJsYXlJbmZvKSB7XG4gICAgICAgIGlmIChpbmZvLmNvbXBvbmVudFJlZikge1xuICAgICAgICAgICAgLy8gIGlmIHdlIGFyZSBwb3NpdGlvbmluZyBjb21wb25lbnQgdGhpcyBpcyBmaXJzdCB0aW1lIGl0IGdldHMgdmlzaWJsZVxuICAgICAgICAgICAgLy8gIGFuZCB3ZSBjYW4gZmluYWxseSBnZXQgaXRzIHNpemVcbiAgICAgICAgICAgIGluZm8uaW5pdGlhbFNpemUgPSBpbmZvLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCBjb250ZW50IGRpdiB3aWR0aCBvbmx5IGlmIGVsZW1lbnQgdG8gc2hvdyBoYXMgd2lkdGhcbiAgICAgICAgaWYgKGluZm8uaW5pdGlhbFNpemUud2lkdGggIT09IDApIHtcbiAgICAgICAgICAgIGluZm8uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUud2lkdGggPSBpbmZvLmluaXRpYWxTaXplLndpZHRoICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0dXBNb2RhbFdyYXBwZXIoaW5mbzogT3ZlcmxheUluZm8pIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlckVsZW1lbnQgPSBpbmZvLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGZyb21FdmVudCh3cmFwcGVyRWxlbWVudCwgJ2tleWRvd24nKS5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKChldjogS2V5Ym9hcmRFdmVudCkgPT4gZXYua2V5ID09PSAnRXNjYXBlJyB8fCBldi5rZXkgPT09ICdFc2MnKSxcbiAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgICApLnN1YnNjcmliZSgoKSA9PiB0aGlzLmhpZGUoaW5mby5pZCkpO1xuICAgICAgICB3cmFwcGVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpZ3gtb3ZlcmxheV9fd3JhcHBlcicpO1xuICAgICAgICB0aGlzLmFwcGx5QW5pbWF0aW9uUGFyYW1zKHdyYXBwZXJFbGVtZW50LCBpbmZvLnNldHRpbmdzLnBvc2l0aW9uU3RyYXRlZ3kuc2V0dGluZ3Mub3BlbkFuaW1hdGlvbik7XG4gICAgICAgIHdyYXBwZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lneC1vdmVybGF5X193cmFwcGVyLS1tb2RhbCcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25DbG9zZURvbmUoaW5mbzogT3ZlcmxheUluZm8pIHtcbiAgICAgICAgdGhpcy5jbGVhblVwKGluZm8pO1xuICAgICAgICB0aGlzLm9uQ2xvc2VkLmVtaXQoeyBpZDogaW5mby5pZCwgY29tcG9uZW50UmVmOiBpbmZvLmNvbXBvbmVudFJlZiB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsZWFuVXAoaW5mbzogT3ZlcmxheUluZm8pIHtcbiAgICAgICAgY29uc3QgY2hpbGQ6IEhUTUxFbGVtZW50ID0gaW5mby5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IG91dGxldCA9IHRoaXMuZ2V0T3ZlcmxheUVsZW1lbnQoaW5mbyk7XG4gICAgICAgIGlmICghb3V0bGV0LmNvbnRhaW5zKGNoaWxkKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdDb21wb25lbnQgd2l0aCBpZDonICsgaW5mby5pZCArICcgaXMgYWxyZWFkeSByZW1vdmVkIScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgb3V0bGV0LnJlbW92ZUNoaWxkKGNoaWxkLnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG4gICAgICAgIGlmIChpbmZvLmNvbXBvbmVudFJlZikge1xuICAgICAgICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcoaW5mby5jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgICAgICAgICAgaW5mby5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZm8uaG9vaykge1xuICAgICAgICAgICAgaW5mby5ob29rLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGluZm8uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBpbmZvLmhvb2spO1xuICAgICAgICAgICAgaW5mby5ob29rLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoaW5mby5ob29rKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fb3ZlcmxheUluZm9zLmluZGV4T2YoaW5mbyk7XG4gICAgICAgIHRoaXMuX292ZXJsYXlJbmZvcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIC8vIHRoaXMuX292ZXJsYXlFbGVtZW50LnBhcmVudEVsZW1lbnQgY2hlY2sganVzdCBmb3IgdGVzdHMgdGhhdCBtYW51YWxseSBkZWxldGUgdGhlIGVsZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX292ZXJsYXlJbmZvcy5sZW5ndGggPT09IDAgJiYgdGhpcy5fb3ZlcmxheUVsZW1lbnQgJiYgdGhpcy5fb3ZlcmxheUVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5fb3ZlcmxheUVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLl9vdmVybGF5RWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLl9vdmVybGF5RWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYXlPcGVuQW5pbWF0aW9uKGluZm86IE92ZXJsYXlJbmZvKSB7XG4gICAgICAgIGlmICghaW5mby5vcGVuQW5pbWF0aW9uUGxheWVyKSB7XG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb25CdWlsZGVyID0gdGhpcy5idWlsZGVyLmJ1aWxkKGluZm8uc2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5zZXR0aW5ncy5vcGVuQW5pbWF0aW9uKTtcbiAgICAgICAgICAgIGluZm8ub3BlbkFuaW1hdGlvblBsYXllciA9IGFuaW1hdGlvbkJ1aWxkZXIuY3JlYXRlKGluZm8uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblxuICAgICAgICAgICAgLy8gIEFuaW1hdGlvblBsYXllci5nZXRQb3NpdGlvbiByZXR1cm5zIGFsd2F5cyAwLiBUbyB3b3JrYXJvdW5kIHRoaXMgd2UgYXJlIGdldHRpbmcgaW5uZXIgV2ViQW5pbWF0aW9uUGxheWVyXG4gICAgICAgICAgICAvLyAgYW5kIHRoZW4gZ2V0dGluZyB0aGUgcG9zaXRpb25zIGZyb20gaXQuXG4gICAgICAgICAgICAvLyAgVGhpcyBpcyBsb2dnZWQgaW4gQW5ndWxhciBoZXJlIC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTg4OTFcbiAgICAgICAgICAgIC8vICBBcyBzb29uIGFzIHRoaXMgaXMgcmVzb2x2ZWQgd2UgY2FuIHJlbW92ZSB0aGlzIGhhY2tcbiAgICAgICAgICAgIGNvbnN0IGlubmVyUmVuZGVyZXIgPSAoPGFueT5pbmZvLm9wZW5BbmltYXRpb25QbGF5ZXIpLl9yZW5kZXJlcjtcbiAgICAgICAgICAgIGluZm8ub3BlbkFuaW1hdGlvbklubmVyUGxheWVyID0gaW5uZXJSZW5kZXJlci5lbmdpbmUucGxheWVyc1tpbm5lclJlbmRlcmVyLmVuZ2luZS5wbGF5ZXJzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgaW5mby5vcGVuQW5pbWF0aW9uUGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk9wZW5lZC5lbWl0KHsgaWQ6IGluZm8uaWQsIGNvbXBvbmVudFJlZjogaW5mby5jb21wb25lbnRSZWYgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGluZm8ub3BlbkFuaW1hdGlvblBsYXllcikge1xuICAgICAgICAgICAgICAgICAgICBpbmZvLm9wZW5BbmltYXRpb25QbGF5ZXIucmVzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgaW5mby5vcGVuQW5pbWF0aW9uUGxheWVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5mby5jbG9zZUFuaW1hdGlvblBsYXllciAmJiBpbmZvLmNsb3NlQW5pbWF0aW9uUGxheWVyLmhhc1N0YXJ0ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmZvLmNsb3NlQW5pbWF0aW9uUGxheWVyLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAgaWYgdGhlcmUgaXMgb3BlbmluZyBhbmltYXRpb24gYWxyZWFkeSBzdGFydGVkIGRvIG5vdGhpbmdcbiAgICAgICAgaWYgKGluZm8ub3BlbkFuaW1hdGlvblBsYXllci5oYXNTdGFydGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBpZiB0aGVyZSBpcyBjbG9zaW5nIGFuaW1hdGlvbiBhbHJlYWR5IHN0YXJ0ZWQgc3RhcnQgb3BlbiBhbmltYXRpb24gZnJvbSB3aGVyZSBjbG9zZSBvbmUgaGFzIHJlYWNoZWRcbiAgICAgICAgLy8gIGFuZCByZW1vdmUgY2xvc2UgYW5pbWF0aW9uXG4gICAgICAgIGlmIChpbmZvLmNsb3NlQW5pbWF0aW9uUGxheWVyICYmIGluZm8uY2xvc2VBbmltYXRpb25QbGF5ZXIuaGFzU3RhcnRlZCgpKSB7XG4gICAgICAgICAgICAvLyAgZ2V0UG9zaXRpb24oKSByZXR1cm5zIHdoYXQgcGFydCBvZiB0aGUgYW5pbWF0aW9uIGlzIHBhc3NlZCwgZS5nLiAwLjUgaWYgaGFsZiB0aGUgYW5pbWF0aW9uXG4gICAgICAgICAgICAvLyAgaXMgZG9uZSwgMC43NSBpZiAzLzQgb2YgdGhlIGFuaW1hdGlvbiBpcyBkb25lLiBBcyB3ZSBuZWVkIHRvIHN0YXJ0IG5leHQgYW5pbWF0aW9uIGZyb20gd2hlcmVcbiAgICAgICAgICAgIC8vICB0aGUgcHJldmlvdXMgaGFzIGZpbmlzaGVkIHdlIG5lZWQgdGhlIGFtb3VudCB1cCB0byAxLCB0aGVyZWZvcmUgd2UgYXJlIHN1YnRyYWN0aW5nIHdoYXRcbiAgICAgICAgICAgIC8vICBnZXRQb3NpdGlvbigpIHJldHVybnMgZnJvbSBvbmVcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gMSAtIGluZm8uY2xvc2VBbmltYXRpb25Jbm5lclBsYXllci5nZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgaW5mby5jbG9zZUFuaW1hdGlvblBsYXllci5yZXNldCgpO1xuICAgICAgICAgICAgaW5mby5jbG9zZUFuaW1hdGlvblBsYXllciA9IG51bGw7XG4gICAgICAgICAgICBpbmZvLm9wZW5BbmltYXRpb25QbGF5ZXIuaW5pdCgpO1xuICAgICAgICAgICAgaW5mby5vcGVuQW5pbWF0aW9uUGxheWVyLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25BbmltYXRpb24uZW1pdCh7IGlkOiBpbmZvLmlkLCBhbmltYXRpb25QbGF5ZXI6IGluZm8ub3BlbkFuaW1hdGlvblBsYXllciwgYW5pbWF0aW9uVHlwZTogJ29wZW4nIH0pO1xuXG4gICAgICAgIC8vICB0byBlbGltaW5hdGUgZmxpY2tlcmluZyBzaG93IHRoZSBlbGVtZW50IGp1c3QgYmVmb3JlIGFuaW1hdGlvbiBzdGFydFxuICAgICAgICBpbmZvLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnJztcbiAgICAgICAgaW5mby5vcGVuQW5pbWF0aW9uUGxheWVyLnBsYXkoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYXlDbG9zZUFuaW1hdGlvbihpbmZvOiBPdmVybGF5SW5mbykge1xuICAgICAgICBpZiAoIWluZm8uY2xvc2VBbmltYXRpb25QbGF5ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkJ1aWxkZXIgPSB0aGlzLmJ1aWxkZXIuYnVpbGQoaW5mby5zZXR0aW5ncy5wb3NpdGlvblN0cmF0ZWd5LnNldHRpbmdzLmNsb3NlQW5pbWF0aW9uKTtcbiAgICAgICAgICAgIGluZm8uY2xvc2VBbmltYXRpb25QbGF5ZXIgPSBhbmltYXRpb25CdWlsZGVyLmNyZWF0ZShpbmZvLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgICAgIC8vICBBbmltYXRpb25QbGF5ZXIuZ2V0UG9zaXRpb24gcmV0dXJucyBhbHdheXMgMC4gVG8gd29ya2Fyb3VuZCB0aGlzIHdlIGFyZSBnZXR0aW5nIGlubmVyIFdlYkFuaW1hdGlvblBsYXllclxuICAgICAgICAgICAgLy8gIGFuZCB0aGVuIGdldHRpbmcgdGhlIHBvc2l0aW9ucyBmcm9tIGl0LlxuICAgICAgICAgICAgLy8gIFRoaXMgaXMgbG9nZ2VkIGluIEFuZ3VsYXIgaGVyZSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE4ODkxXG4gICAgICAgICAgICAvLyAgQXMgc29vbiBhcyB0aGlzIGlzIHJlc29sdmVkIHdlIGNhbiByZW1vdmUgdGhpcyBoYWNrXG4gICAgICAgICAgICBjb25zdCBpbm5lclJlbmRlcmVyID0gKDxhbnk+aW5mby5jbG9zZUFuaW1hdGlvblBsYXllcikuX3JlbmRlcmVyO1xuICAgICAgICAgICAgaW5mby5jbG9zZUFuaW1hdGlvbklubmVyUGxheWVyID0gaW5uZXJSZW5kZXJlci5lbmdpbmUucGxheWVyc1tpbm5lclJlbmRlcmVyLmVuZ2luZS5wbGF5ZXJzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICBpbmZvLmNsb3NlQW5pbWF0aW9uUGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluZm8uY2xvc2VBbmltYXRpb25QbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5mby5jbG9zZUFuaW1hdGlvblBsYXllci5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICBpbmZvLmNsb3NlQW5pbWF0aW9uUGxheWVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5mby5vcGVuQW5pbWF0aW9uUGxheWVyICYmIGluZm8ub3BlbkFuaW1hdGlvblBsYXllci5oYXNTdGFydGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5mby5vcGVuQW5pbWF0aW9uUGxheWVyLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMub25DbG9zZURvbmUoaW5mbyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBpZiB0aGVyZSBpcyBjbG9zaW5nIGFuaW1hdGlvbiBhbHJlYWR5IHN0YXJ0ZWQgZG8gbm90aGluZ1xuICAgICAgICBpZiAoaW5mby5jbG9zZUFuaW1hdGlvblBsYXllci5oYXNTdGFydGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBpZiB0aGVyZSBpcyBvcGVuaW5nIGFuaW1hdGlvbiBhbHJlYWR5IHN0YXJ0ZWQgc3RhcnQgY2xvc2UgYW5pbWF0aW9uIGZyb20gd2hlcmUgb3BlbiBvbmUgaGFzIHJlYWNoZWRcbiAgICAgICAgLy8gIGFuZCByZW1vdmUgb3BlbiBhbmltYXRpb25cbiAgICAgICAgaWYgKGluZm8ub3BlbkFuaW1hdGlvblBsYXllciAmJiBpbmZvLm9wZW5BbmltYXRpb25QbGF5ZXIuaGFzU3RhcnRlZCgpKSB7XG4gICAgICAgICAgICAvLyAgZ2V0UG9zaXRpb24oKSByZXR1cm5zIHdoYXQgcGFydCBvZiB0aGUgYW5pbWF0aW9uIGlzIHBhc3NlZCwgZS5nLiAwLjUgaWYgaGFsZiB0aGUgYW5pbWF0aW9uXG4gICAgICAgICAgICAvLyAgaXMgZG9uZSwgMC43NSBpZiAzLzQgb2YgdGhlIGFuaW1hdGlvbiBpcyBkb25lLiBBcyB3ZSBuZWVkIHRvIHN0YXJ0IG5leHQgYW5pbWF0aW9uIGZyb20gd2hlcmVcbiAgICAgICAgICAgIC8vICB0aGUgcHJldmlvdXMgaGFzIGZpbmlzaGVkIHdlIG5lZWQgdGhlIGFtb3VudCB1cCB0byAxLCB0aGVyZWZvcmUgd2UgYXJlIHN1YnRyYWN0aW5nIHdoYXRcbiAgICAgICAgICAgIC8vICBnZXRQb3NpdGlvbigpIHJldHVybnMgZnJvbSBvbmVcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gMSAtIGluZm8ub3BlbkFuaW1hdGlvbklubmVyUGxheWVyLmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICBpbmZvLm9wZW5BbmltYXRpb25QbGF5ZXIucmVzZXQoKTtcbiAgICAgICAgICAgIGluZm8ub3BlbkFuaW1hdGlvblBsYXllciA9IG51bGw7XG4gICAgICAgICAgICBpbmZvLmNsb3NlQW5pbWF0aW9uUGxheWVyLmluaXQoKTtcbiAgICAgICAgICAgIGluZm8uY2xvc2VBbmltYXRpb25QbGF5ZXIuc2V0UG9zaXRpb24ocG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbkFuaW1hdGlvbi5lbWl0KHsgaWQ6IGluZm8uaWQsIGFuaW1hdGlvblBsYXllcjogaW5mby5jbG9zZUFuaW1hdGlvblBsYXllciwgYW5pbWF0aW9uVHlwZTogJ2Nsb3NlJyB9KTtcbiAgICAgICAgaW5mby5jbG9zZUFuaW1hdGlvblBsYXllci5wbGF5KCk7XG4gICAgfVxuXG4gICAgLy8gIFRPRE86IGNoZWNrIGlmIGFwcGx5QW5pbWF0aW9uUGFyYW1zIHdpbGwgd29yayB3aXRoIGNvbXBsZXggYW5pbWF0aW9uc1xuICAgIHByaXZhdGUgYXBwbHlBbmltYXRpb25QYXJhbXMod3JhcHBlckVsZW1lbnQ6IEhUTUxFbGVtZW50LCBhbmltYXRpb25PcHRpb25zOiBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSkge1xuICAgICAgICBpZiAoIWFuaW1hdGlvbk9wdGlvbnMpIHtcbiAgICAgICAgICAgIHdyYXBwZXJFbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwbXMnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhbmltYXRpb25PcHRpb25zLnR5cGUgPT09IEFuaW1hdGlvbk1ldGFkYXRhVHlwZS5BbmltYXRlUmVmKSB7XG4gICAgICAgICAgICBhbmltYXRpb25PcHRpb25zID0gKGFuaW1hdGlvbk9wdGlvbnMgYXMgQW5pbWF0aW9uQW5pbWF0ZVJlZk1ldGFkYXRhKS5hbmltYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhbmltYXRpb25PcHRpb25zLm9wdGlvbnMgfHwgIWFuaW1hdGlvbk9wdGlvbnMub3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSBhbmltYXRpb25PcHRpb25zLm9wdGlvbnMucGFyYW1zIGFzIElBbmltYXRpb25QYXJhbXM7XG4gICAgICAgIGlmIChwYXJhbXMuZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHdyYXBwZXJFbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IHBhcmFtcy5kdXJhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLmVhc2luZykge1xuICAgICAgICAgICAgd3JhcHBlckVsZW1lbnQuc3R5bGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gcGFyYW1zLmVhc2luZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXRPdmVybGF5QnlJZChpZDogc3RyaW5nKTogT3ZlcmxheUluZm8ge1xuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluZm8gPSB0aGlzLl9vdmVybGF5SW5mb3MuZmluZChlID0+IGUuaWQgPT09IGlkKTtcbiAgICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb2N1bWVudENsaWNrZWQgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgLy8gIGlmIHdlIGdldCB0byBtb2RhbCBvdmVybGF5IGp1c3QgcmV0dXJuIC0gd2Ugc2hvdWxkIG5vdCBjbG9zZSBhbnl0aGluZyB1bmRlciBpdFxuICAgICAgICAvLyAgaWYgd2UgZ2V0IHRvIG5vbi1tb2RhbCBvdmVybGF5IGRvIHRoZSBuZXh0OlxuICAgICAgICAvLyAgIDEuIENoZWNrIGl0IGhhcyBjbG9zZSBvbiBvdXRzaWRlIGNsaWNrLiBJZiBub3QgZ28gb24gdG8gbmV4dCBvdmVybGF5O1xuICAgICAgICAvLyAgIDIuIElmIHRydWUgY2hlY2sgaWYgY2xpY2sgaXMgb24gdGhlIGVsZW1lbnQuIElmIGl0IGlzIG9uIHRoZSBlbGVtZW50IHdlIGhhdmUgY2xvc2VkXG4gICAgICAgIC8vICBhbHJlYWR5IGFsbCBwcmV2aW91cyBub24tbW9kYWwgd2l0aCBjbG9zZSBvbiBvdXRzaWRlIGNsaWNrIGVsZW1lbnRzLCBzbyB3ZSByZXR1cm4uIElmXG4gICAgICAgIC8vICBub3QgY2xvc2UgdGhlIG92ZXJsYXkgYW5kIGNoZWNrIG5leHRcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX292ZXJsYXlJbmZvcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgIGNvbnN0IGluZm8gPSB0aGlzLl9vdmVybGF5SW5mb3NbaV07XG4gICAgICAgICAgICBpZiAoaW5mby5zZXR0aW5ncy5tb2RhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbmZvLnNldHRpbmdzLmNsb3NlT25PdXRzaWRlQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAvLyAgaWYgdGhlIGNsaWNrIGlzIG9uIHRoZSBlbGVtZW50IGRvIG5vdCBjbG9zZSB0aGlzIG92ZXJsYXlcbiAgICAgICAgICAgICAgICBpZiAoIWluZm8uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgd2Ugc2hvdWxkIGV4Y2x1ZGUgcG9zaXRpb24gdGFyZ2V0IGNoZWNrIGlmIHRoZSBjbGljayBpcyBvdmVyIGl0LiBJZiBzbyBkbyBub3QgY2xvc2Ugb3ZlcmxheVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvblRhcmdldCA9IGluZm8uc2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5zZXR0aW5ncy50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjbGlja09uUG9zaXRpb25UYXJnZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvblRhcmdldFJlY3QgPSBwb3NpdGlvblRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrT25Qb3NpdGlvblRhcmdldCA9IGV2LmNsaWVudFggPj0gcG9zaXRpb25UYXJnZXRSZWN0LmxlZnQgJiYgZXYuY2xpZW50WCA8PSBwb3NpdGlvblRhcmdldFJlY3QucmlnaHQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2LmNsaWVudFkgPj0gcG9zaXRpb25UYXJnZXRSZWN0LnRvcCAmJiBldi5jbGllbnRZIDw9IHBvc2l0aW9uVGFyZ2V0UmVjdC5ib3R0b207XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIShpbmZvLnNldHRpbmdzLmV4Y2x1ZGVQb3NpdGlvblRhcmdldCAmJiBjbGlja09uUG9zaXRpb25UYXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgaWYgdGhlIGNsaWNrIGlzIG91dHNpZGUgY2xpY2ssIGJ1dCBjbG9zZSBhbmltYXRpb24gaGFzIHN0YXJ0ZWQgZG8gbm90aGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoaW5mby5jbG9zZUFuaW1hdGlvblBsYXllciAmJiBpbmZvLmNsb3NlQW5pbWF0aW9uUGxheWVyLmhhc1N0YXJ0ZWQoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oaWRlKGluZm8uaWQsIGV2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICBUT0RPOiBzaG91bGQgd2UgcmV0dXJuIGhlcmUsIG9yIGNvbnRpbnVlIHdpdGggbmV4dCBvdmVybGF5c1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRPdXRzaWRlQ2xpY2tMaXN0ZW5lcihpbmZvOiBPdmVybGF5SW5mbykge1xuICAgICAgICBpZiAoaW5mby5zZXR0aW5ncy5jbG9zZU9uT3V0c2lkZUNsaWNrKSB7XG4gICAgICAgICAgICBpZiAoaW5mby5zZXR0aW5ncy5tb2RhbCkge1xuICAgICAgICAgICAgICAgIGZyb21FdmVudChpbmZvLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsICdjbGljaycpXG4gICAgICAgICAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmhpZGUoaW5mby5pZCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAvLyAgaWYgYWxsIG92ZXJsYXlzIG1pbnVzIGNsb3Npbmcgb3ZlcmxheXMgZXF1YWxzIG9uZSBhZGQgdGhlIGhhbmRsZXJcbiAgICAgICAgICAgICAgICB0aGlzLl9vdmVybGF5SW5mb3MuZmlsdGVyKHggPT4geC5zZXR0aW5ncy5jbG9zZU9uT3V0c2lkZUNsaWNrICYmICF4LnNldHRpbmdzLm1vZGFsKS5sZW5ndGggLVxuICAgICAgICAgICAgICAgIHRoaXMuX292ZXJsYXlJbmZvcy5maWx0ZXIoeCA9PiB4LnNldHRpbmdzLmNsb3NlT25PdXRzaWRlQ2xpY2sgJiYgIXguc2V0dGluZ3MubW9kYWwgJiZcbiAgICAgICAgICAgICAgICAgICAgeC5jbG9zZUFuaW1hdGlvblBsYXllciAmJlxuICAgICAgICAgICAgICAgICAgICB4LmNsb3NlQW5pbWF0aW9uUGxheWVyLmhhc1N0YXJ0ZWQoKSkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRvY3VtZW50Q2xpY2tlZCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZU91dHNpZGVDbGlja0xpc3RlbmVyKGluZm86IE92ZXJsYXlJbmZvKSB7XG4gICAgICAgIGlmIChpbmZvLnNldHRpbmdzLm1vZGFsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IHNob3VsZFJlbW92ZUNsaWNrRXZlbnRMaXN0ZW5lciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9vdmVybGF5SW5mb3MuZm9yRWFjaChvID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoby5zZXR0aW5ncy5tb2RhbCA9PT0gZmFsc2UgJiYgby5pZCAhPT0gaW5mby5pZCkge1xuICAgICAgICAgICAgICAgICAgICBzaG91bGRSZW1vdmVDbGlja0V2ZW50TGlzdGVuZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZFJlbW92ZUNsaWNrRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kb2N1bWVudENsaWNrZWQsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRSZXNpemVIYW5kbGVyKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgY2xvc2luZ092ZXJsYXlzQ291bnQgPVxuICAgICAgICAgICAgdGhpcy5fb3ZlcmxheUluZm9zXG4gICAgICAgICAgICAgICAgLmZpbHRlcihvID0+IG8uY2xvc2VBbmltYXRpb25QbGF5ZXIgJiYgby5jbG9zZUFuaW1hdGlvblBsYXllci5oYXNTdGFydGVkKCkpXG4gICAgICAgICAgICAgICAgLmxlbmd0aDtcbiAgICAgICAgaWYgKHRoaXMuX292ZXJsYXlJbmZvcy5sZW5ndGggLSBjbG9zaW5nT3ZlcmxheXNDb3VudCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXcuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXBvc2l0aW9uQWxsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlUmVzaXplSGFuZGxlcihpZDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGNsb3NpbmdPdmVybGF5c0NvdW50ID1cbiAgICAgICAgICAgIHRoaXMuX292ZXJsYXlJbmZvc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIobyA9PiBvLmNsb3NlQW5pbWF0aW9uUGxheWVyICYmIG8uY2xvc2VBbmltYXRpb25QbGF5ZXIuaGFzU3RhcnRlZCgpKVxuICAgICAgICAgICAgICAgIC5sZW5ndGg7XG4gICAgICAgIGlmICh0aGlzLl9vdmVybGF5SW5mb3MubGVuZ3RoIC0gY2xvc2luZ092ZXJsYXlzQ291bnQgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvY3VtZW50LmRlZmF1bHRWaWV3LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVwb3NpdGlvbkFsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIHB1YmxpYyByZXBvc2l0aW9uQWxsID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5fb3ZlcmxheUluZm9zLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgdGhpcy5yZXBvc2l0aW9uKHRoaXMuX292ZXJsYXlJbmZvc1tpXS5pZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIH1cbn1cbiJdfQ==