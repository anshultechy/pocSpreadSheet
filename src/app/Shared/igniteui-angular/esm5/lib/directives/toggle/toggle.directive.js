/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, NgModule, Optional, Output, Inject } from '@angular/core';
import { IgxNavigationService } from '../../core/navigation';
import { IgxOverlayService } from '../../services/overlay/overlay';
import { ConnectedPositioningStrategy, AbsoluteScrollStrategy } from '../../services';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
var IgxToggleDirective = /** @class */ (function () {
    /**
     * @hidden
     */
    function IgxToggleDirective(elementRef, cdr, overlayService, navigationService) {
        var _this = this;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.overlayService = overlayService;
        this.navigationService = navigationService;
        this.destroy$ = new Subject();
        this._overlaySubFilter = [
            filter(function (x) { return x.id === _this._overlayId; }),
            takeUntil(this.destroy$)
        ];
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
        this.onOpened = new EventEmitter();
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
        this.onOpening = new EventEmitter();
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
        this.onClosed = new EventEmitter();
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
        this.onClosing = new EventEmitter();
        this._collapsed = true;
        this.overlayClosed = function () {
            _this._collapsed = true;
            _this.cdr.detectChanges();
            delete _this._overlayId;
            _this.unsubscribe();
            _this.onClosed.emit();
        };
    }
    Object.defineProperty(IgxToggleDirective.prototype, "collapsed", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._collapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxToggleDirective.prototype, "element", {
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
    Object.defineProperty(IgxToggleDirective.prototype, "hiddenClass", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxToggleDirective.prototype, "defaultClass", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return !this.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens the toggle.
     *
     * ```typescript
     * this.myToggle.open();
     * ```
     */
    /**
     * Opens the toggle.
     *
     * ```typescript
     * this.myToggle.open();
     * ```
     * @param {?=} overlaySettings
     * @return {?}
     */
    IgxToggleDirective.prototype.open = /**
     * Opens the toggle.
     *
     * ```typescript
     * this.myToggle.open();
     * ```
     * @param {?=} overlaySettings
     * @return {?}
     */
    function (overlaySettings) {
        var _this = this;
        var _a, _b, _c;
        //  if there is open animation do nothing
        //  if toggle is not collapsed and there is no close animation do nothing
        /** @type {?} */
        var info = this.overlayService.getOverlayById(this._overlayId);
        /** @type {?} */
        var hasOpenAnimation = info ? info.openAnimationPlayer : false;
        /** @type {?} */
        var hasCloseAnimation = info ? info.closeAnimationPlayer : false;
        if (hasOpenAnimation || !(this._collapsed || hasCloseAnimation)) {
            return;
        }
        if (!info) {
            this._overlayId = this.overlayService.attach(this.elementRef, overlaySettings);
        }
        this._collapsed = false;
        this.cdr.detectChanges();
        /** @type {?} */
        var openEventArgs = { cancel: false };
        this.onOpening.emit(openEventArgs);
        if (openEventArgs.cancel) {
            this._collapsed = true;
            this.cdr.detectChanges();
            return;
        }
        this.overlayService.show(this._overlayId, overlaySettings);
        this.unsubscribe();
        this._overlayOpenedSub = (_a = this.overlayService.onOpened).pipe.apply(_a, tslib_1.__spread(this._overlaySubFilter)).subscribe(function () {
            _this.onOpened.emit();
        });
        this._overlayClosingSub = (_b = this.overlayService
            .onClosing).pipe.apply(_b, tslib_1.__spread(this._overlaySubFilter)).subscribe(function (e) {
            /** @type {?} */
            var eventArgs = { cancel: false, event: e.event };
            _this.onClosing.emit(eventArgs);
            e.cancel = eventArgs.cancel;
            //  in case event is not canceled this will close the toggle and we need to unsubscribe.
            //  Otherwise if for some reason, e.g. close on outside click, close() gets called before
            //  onClosed was fired we will end with calling onClosing more than once
            if (!e.cancel) {
                _this.clearSubscription(_this._overlayClosingSub);
            }
        });
        this._overlayClosedSub = (_c = this.overlayService.onClosed).pipe.apply(_c, tslib_1.__spread(this._overlaySubFilter)).subscribe(this.overlayClosed);
    };
    /**
     * Closes the toggle.
     *
     * ```typescript
     * this.myToggle.close();
     * ```
     */
    /**
     * Closes the toggle.
     *
     * ```typescript
     * this.myToggle.close();
     * ```
     * @return {?}
     */
    IgxToggleDirective.prototype.close = /**
     * Closes the toggle.
     *
     * ```typescript
     * this.myToggle.close();
     * ```
     * @return {?}
     */
    function () {
        //  if toggle is collapsed do nothing
        //  if there is close animation do nothing, toggle will close anyway
        /** @type {?} */
        var info = this.overlayService.getOverlayById(this._overlayId);
        /** @type {?} */
        var hasCloseAnimation = info ? info.closeAnimationPlayer : false;
        if (this._collapsed || hasCloseAnimation) {
            return;
        }
        this.overlayService.hide(this._overlayId);
    };
    /**
     * Opens or closes the toggle, depending on its current state.
     *
     * ```typescript
     * this.myToggle.toggle();
     * ```
     */
    /**
     * Opens or closes the toggle, depending on its current state.
     *
     * ```typescript
     * this.myToggle.toggle();
     * ```
     * @param {?=} overlaySettings
     * @return {?}
     */
    IgxToggleDirective.prototype.toggle = /**
     * Opens or closes the toggle, depending on its current state.
     *
     * ```typescript
     * this.myToggle.toggle();
     * ```
     * @param {?=} overlaySettings
     * @return {?}
     */
    function (overlaySettings) {
        //  if toggle is collapsed call open
        //  if there is close animation call open
        if (this.collapsed || this.isClosing) {
            this.open(overlaySettings);
        }
        else {
            this.close();
        }
    };
    Object.defineProperty(IgxToggleDirective.prototype, "isClosing", {
        /** @hidden @internal */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            /** @type {?} */
            var info = this.overlayService.getOverlayById(this._overlayId);
            return info ? info.closeAnimationPlayer : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Repositions the toggle.
     * ```typescript
     * this.myToggle.reposition();
     * ```
     */
    /**
     * Repositions the toggle.
     * ```typescript
     * this.myToggle.reposition();
     * ```
     * @return {?}
     */
    IgxToggleDirective.prototype.reposition = /**
     * Repositions the toggle.
     * ```typescript
     * this.myToggle.reposition();
     * ```
     * @return {?}
     */
    function () {
        this.overlayService.reposition(this._overlayId);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxToggleDirective.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.navigationService && this.id) {
            this.navigationService.add(this.id, this);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxToggleDirective.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.navigationService && this.id) {
            this.navigationService.remove(this.id);
        }
        if (!this.collapsed && this._overlayId) {
            this.overlayService.hide(this._overlayId);
        }
        this.unsubscribe();
        this.destroy$.next(true);
        this.destroy$.complete();
    };
    /**
     * @private
     * @return {?}
     */
    IgxToggleDirective.prototype.unsubscribe = /**
     * @private
     * @return {?}
     */
    function () {
        this.clearSubscription(this._overlayOpenedSub);
        this.clearSubscription(this._overlayClosingSub);
        this.clearSubscription(this._overlayClosedSub);
    };
    /**
     * @private
     * @param {?} subscription
     * @return {?}
     */
    IgxToggleDirective.prototype.clearSubscription = /**
     * @private
     * @param {?} subscription
     * @return {?}
     */
    function (subscription) {
        if (subscription && !subscription.closed) {
            subscription.unsubscribe();
        }
    };
    IgxToggleDirective.decorators = [
        { type: Directive, args: [{
                    exportAs: 'toggle',
                    selector: '[igxToggle]'
                },] }
    ];
    /** @nocollapse */
    IgxToggleDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: IgxOverlayService, decorators: [{ type: Inject, args: [IgxOverlayService,] }] },
        { type: IgxNavigationService, decorators: [{ type: Optional }] }
    ]; };
    IgxToggleDirective.propDecorators = {
        onOpened: [{ type: Output }],
        onOpening: [{ type: Output }],
        onClosed: [{ type: Output }],
        onClosing: [{ type: Output }],
        id: [{ type: Input }],
        hiddenClass: [{ type: HostBinding, args: ['class.igx-toggle--hidden',] }, { type: HostBinding, args: ['attr.aria-hidden',] }],
        defaultClass: [{ type: HostBinding, args: ['class.igx-toggle',] }]
    };
    return IgxToggleDirective;
}());
export { IgxToggleDirective };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    IgxToggleDirective.prototype._overlayId;
    /**
     * @type {?}
     * @private
     */
    IgxToggleDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    IgxToggleDirective.prototype._overlaySubFilter;
    /**
     * @type {?}
     * @private
     */
    IgxToggleDirective.prototype._overlayOpenedSub;
    /**
     * @type {?}
     * @private
     */
    IgxToggleDirective.prototype._overlayClosingSub;
    /**
     * @type {?}
     * @private
     */
    IgxToggleDirective.prototype._overlayClosedSub;
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
     * @type {?}
     */
    IgxToggleDirective.prototype.onOpened;
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
     * @type {?}
     */
    IgxToggleDirective.prototype.onOpening;
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
     * @type {?}
     */
    IgxToggleDirective.prototype.onClosed;
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
     * @type {?}
     */
    IgxToggleDirective.prototype.onClosing;
    /**
     * @type {?}
     * @private
     */
    IgxToggleDirective.prototype._collapsed;
    /**
     * Identifier which is registered into `IgxNavigationService`
     *
     * ```typescript
     * let myToggleId = this.toggle.id;
     * ```
     * @type {?}
     */
    IgxToggleDirective.prototype.id;
    /**
     * @type {?}
     * @private
     */
    IgxToggleDirective.prototype.overlayClosed;
    /**
     * @type {?}
     * @private
     */
    IgxToggleDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    IgxToggleDirective.prototype.cdr;
    /**
     * @type {?}
     * @protected
     */
    IgxToggleDirective.prototype.overlayService;
    /**
     * @type {?}
     * @private
     */
    IgxToggleDirective.prototype.navigationService;
}
var IgxToggleActionDirective = /** @class */ (function () {
    function IgxToggleActionDirective(element, navigationService) {
        this.element = element;
        this.navigationService = navigationService;
    }
    Object.defineProperty(IgxToggleActionDirective.prototype, "target", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            if (typeof this._target === 'string') {
                return this.navigationService.get(this._target);
            }
            return this._target;
        },
        /**
         * @hidden
         */
        set: /**
         * @hidden
         * @param {?} target
         * @return {?}
         */
        function (target) {
            if (target !== null && target !== '') {
                this._target = target;
            }
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
    IgxToggleActionDirective.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        this._overlayDefaults = {
            positionStrategy: new ConnectedPositioningStrategy({ target: this.element.nativeElement }),
            scrollStrategy: new AbsoluteScrollStrategy(),
            closeOnOutsideClick: true,
            modal: false,
            excludePositionTarget: true
        };
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxToggleActionDirective.prototype.onClick = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.outlet) {
            this._overlayDefaults.outlet = this.outlet;
        }
        /** @type {?} */
        var clonedSettings = Object.assign({}, this._overlayDefaults, this.overlaySettings);
        this.updateOverlaySettings(clonedSettings);
        this.target.toggle(clonedSettings);
    };
    /**
     * Updates provided overlay settings
     * @param settings settings to update
     * @returns returns updated copy of provided overlay settings
     */
    /**
     * Updates provided overlay settings
     * @protected
     * @param {?} settings settings to update
     * @return {?} returns updated copy of provided overlay settings
     */
    IgxToggleActionDirective.prototype.updateOverlaySettings = /**
     * Updates provided overlay settings
     * @protected
     * @param {?} settings settings to update
     * @return {?} returns updated copy of provided overlay settings
     */
    function (settings) {
        if (settings && settings.positionStrategy) {
            /** @type {?} */
            var positionStrategyClone = settings.positionStrategy.clone();
            positionStrategyClone.settings.target = this.element.nativeElement;
            settings.positionStrategy = positionStrategyClone;
        }
        return settings;
    };
    IgxToggleActionDirective.decorators = [
        { type: Directive, args: [{
                    exportAs: 'toggle-action',
                    selector: '[igxToggleAction]'
                },] }
    ];
    /** @nocollapse */
    IgxToggleActionDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: IgxNavigationService, decorators: [{ type: Optional }] }
    ]; };
    IgxToggleActionDirective.propDecorators = {
        overlaySettings: [{ type: Input }],
        outlet: [{ type: Input, args: ['igxToggleOutlet',] }],
        target: [{ type: Input, args: ['igxToggleAction',] }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return IgxToggleActionDirective;
}());
export { IgxToggleActionDirective };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    IgxToggleActionDirective.prototype._overlayDefaults;
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
     * @type {?}
     */
    IgxToggleActionDirective.prototype.overlaySettings;
    /**
     * Determines where the toggle element overlay should be attached.
     *
     * ```html
     * <!--set-->
     * <div igxToggleAction [igxToggleOutlet]="outlet"></div>
     * ```
     * Where `outlet` in an instance of `IgxOverlayOutletDirective` or an `ElementRef`
     * @type {?}
     */
    IgxToggleActionDirective.prototype.outlet;
    /**
     * @type {?}
     * @protected
     */
    IgxToggleActionDirective.prototype._target;
    /**
     * @type {?}
     * @private
     */
    IgxToggleActionDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    IgxToggleActionDirective.prototype.navigationService;
}
/**
 * Mark an element as an igxOverlay outlet container.
 * Directive instance is exported as `overlay-outlet` to be assigned to templates variables:
 * ```html
 * <div igxOverlayOutlet #outlet="overlay-outlet"></div>
 * ```
 */
var IgxOverlayOutletDirective = /** @class */ (function () {
    function IgxOverlayOutletDirective(element) {
        this.element = element;
    }
    Object.defineProperty(IgxOverlayOutletDirective.prototype, "nativeElement", {
        /** @hidden */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.element.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    IgxOverlayOutletDirective.decorators = [
        { type: Directive, args: [{
                    exportAs: 'overlay-outlet',
                    selector: '[igxOverlayOutlet]'
                },] }
    ];
    /** @nocollapse */
    IgxOverlayOutletDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return IgxOverlayOutletDirective;
}());
export { IgxOverlayOutletDirective };
if (false) {
    /** @type {?} */
    IgxOverlayOutletDirective.prototype.element;
}
/**
 * @hidden
 */
var IgxToggleModule = /** @class */ (function () {
    function IgxToggleModule() {
    }
    IgxToggleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective],
                    exports: [IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective],
                    providers: [IgxNavigationService]
                },] }
    ];
    return IgxToggleModule;
}());
export { IgxToggleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy90b2dnbGUvdG9nZ2xlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUdSLFFBQVEsRUFDUixNQUFNLEVBQ04sTUFBTSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBcUMsNEJBQTRCLEVBQUUsc0JBQXNCLEVBQXFCLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUksT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQWdCLE9BQU8sRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFJdkU7SUFxSUk7O09BRUc7SUFDSCw0QkFDWSxVQUFzQixFQUN0QixHQUFzQixFQUNPLGNBQWlDLEVBQ2xELGlCQUF1QztRQUovRCxpQkFLQztRQUpXLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDTyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFDbEQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFzQjtRQXRJdkQsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDbEMsc0JBQWlCLEdBQTZGO1lBQ2xILE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssS0FBSSxDQUFDLFVBQVUsRUFBeEIsQ0FBd0IsQ0FBQztZQUNyQyxTQUFT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LENBQUM7aUJBQ3BDOztJQUM4QixzQkFBQztDQUFBLEFBTGhDLElBS2dDO1NBQW5CLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIERpcmVjdGl2ZSxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBIb3N0QmluZGluZyxcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgSW5wdXQsXG4gICAgTmdNb2R1bGUsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBPcHRpb25hbCxcbiAgICBPdXRwdXQsXG4gICAgSW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4TmF2aWdhdGlvblNlcnZpY2UsIElUb2dnbGVWaWV3IH0gZnJvbSAnLi4vLi4vY29yZS9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IElneE92ZXJsYXlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb3ZlcmxheS9vdmVybGF5JztcbmltcG9ydCB7IE92ZXJsYXlTZXR0aW5ncywgT3ZlcmxheUV2ZW50QXJncywgQ29ubmVjdGVkUG9zaXRpb25pbmdTdHJhdGVneSwgQWJzb2x1dGVTY3JvbGxTdHJhdGVneSwgSVBvc2l0aW9uU3RyYXRlZ3kgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3ViamVjdCwgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPdmVybGF5Q2xvc2luZ0V2ZW50QXJncyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL292ZXJsYXkvdXRpbGl0aWVzJztcbmltcG9ydCB7IENhbmNlbGFibGVFdmVudEFyZ3MsIENhbmNlbGFibGVCcm93c2VyRXZlbnRBcmdzIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIGV4cG9ydEFzOiAndG9nZ2xlJyxcbiAgICBzZWxlY3RvcjogJ1tpZ3hUb2dnbGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hUb2dnbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBJVG9nZ2xlVmlldywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCBfb3ZlcmxheUlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgcHJpdmF0ZSBfb3ZlcmxheVN1YkZpbHRlcjogW01vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxPdmVybGF5RXZlbnRBcmdzPiwgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPE92ZXJsYXlFdmVudEFyZ3M+XSA9IFtcbiAgICAgICAgZmlsdGVyKHggPT4geC5pZCA9PT0gdGhpcy5fb3ZlcmxheUlkKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgXTtcbiAgICBwcml2YXRlIF9vdmVybGF5T3BlbmVkU3ViOiBTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBfb3ZlcmxheUNsb3NpbmdTdWI6IFN1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIF9vdmVybGF5Q2xvc2VkU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhbiBldmVudCBhZnRlciB0aGUgdG9nZ2xlIGNvbnRhaW5lciBpcyBvcGVuZWQuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogb25Ub2dnbGVPcGVuZWQoZXZlbnQpIHtcbiAgICAgKiAgICBhbGVydChcIlRvZ2dsZSBvcGVuZWQhXCIpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2XG4gICAgICogICBpZ3hUb2dnbGVcbiAgICAgKiAgIChvbk9wZW5lZCk9J29uVG9nZ2xlT3BlbmVkKCRldmVudCknPlxuICAgICAqIDwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbk9wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IGJlZm9yZSB0aGUgdG9nZ2xlIGNvbnRhaW5lciBpcyBvcGVuZWQuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogb25Ub2dnbGVPcGVuaW5nKGV2ZW50KSB7XG4gICAgICogIGFsZXJ0KFwiVG9nZ2xlIG9wZW5pbmchXCIpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2XG4gICAgICogICBpZ3hUb2dnbGVcbiAgICAgKiAgIChvbk9wZW5pbmcpPSdvblRvZ2dsZU9wZW5pbmcoJGV2ZW50KSc+XG4gICAgICogPC9kaXY+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uT3BlbmluZyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuY2VsYWJsZUV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IGFmdGVyIHRoZSB0b2dnbGUgY29udGFpbmVyIGlzIGNsb3NlZC5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBvblRvZ2dsZUNsb3NlZChldmVudCkge1xuICAgICAqICBhbGVydChcIlRvZ2dsZSBjbG9zZWQhXCIpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2XG4gICAgICogICBpZ3hUb2dnbGVcbiAgICAgKiAgIChvbkNsb3NlZCk9J29uVG9nZ2xlQ2xvc2VkKCRldmVudCknPlxuICAgICAqIDwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IGJlZm9yZSB0aGUgdG9nZ2xlIGNvbnRhaW5lciBpcyBjbG9zZWQuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogb25Ub2dnbGVDbG9zaW5nKGV2ZW50KSB7XG4gICAgICogIGFsZXJ0KFwiVG9nZ2xlIGNsb3NpbmchXCIpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2XG4gICAgICogIGlneFRvZ2dsZVxuICAgICAqICAob25DbG9zaW5nKT0nb25Ub2dnbGVDbG9zaW5nKCRldmVudCknPlxuICAgICAqIDwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkNsb3NpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmNlbGFibGVCcm93c2VyRXZlbnRBcmdzPigpO1xuXG4gICAgcHJpdmF0ZSBfY29sbGFwc2VkID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBjb2xsYXBzZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xsYXBzZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWRlbnRpZmllciB3aGljaCBpcyByZWdpc3RlcmVkIGludG8gYElneE5hdmlnYXRpb25TZXJ2aWNlYFxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBteVRvZ2dsZUlkID0gdGhpcy50b2dnbGUuaWQ7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXRvZ2dsZS0taGlkZGVuJylcbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1oaWRkZW4nKVxuICAgIHB1YmxpYyBnZXQgaGlkZGVuQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxhcHNlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtdG9nZ2xlJylcbiAgICBwdWJsaWMgZ2V0IGRlZmF1bHRDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmNvbGxhcHNlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBASW5qZWN0KElneE92ZXJsYXlTZXJ2aWNlKSBwcm90ZWN0ZWQgb3ZlcmxheVNlcnZpY2U6IElneE92ZXJsYXlTZXJ2aWNlLFxuICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBJZ3hOYXZpZ2F0aW9uU2VydmljZSkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9wZW5zIHRoZSB0b2dnbGUuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5teVRvZ2dsZS5vcGVuKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIG9wZW4ob3ZlcmxheVNldHRpbmdzPzogT3ZlcmxheVNldHRpbmdzKSB7XG4gICAgICAgIC8vICBpZiB0aGVyZSBpcyBvcGVuIGFuaW1hdGlvbiBkbyBub3RoaW5nXG4gICAgICAgIC8vICBpZiB0b2dnbGUgaXMgbm90IGNvbGxhcHNlZCBhbmQgdGhlcmUgaXMgbm8gY2xvc2UgYW5pbWF0aW9uIGRvIG5vdGhpbmdcbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMub3ZlcmxheVNlcnZpY2UuZ2V0T3ZlcmxheUJ5SWQodGhpcy5fb3ZlcmxheUlkKTtcbiAgICAgICAgY29uc3QgaGFzT3BlbkFuaW1hdGlvbiA9IGluZm8gPyBpbmZvLm9wZW5BbmltYXRpb25QbGF5ZXIgOiBmYWxzZTtcbiAgICAgICAgY29uc3QgaGFzQ2xvc2VBbmltYXRpb24gPSBpbmZvID8gaW5mby5jbG9zZUFuaW1hdGlvblBsYXllciA6IGZhbHNlO1xuICAgICAgICBpZiAoaGFzT3BlbkFuaW1hdGlvbiB8fCAhKHRoaXMuX2NvbGxhcHNlZCB8fCBoYXNDbG9zZUFuaW1hdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaW5mbykge1xuICAgICAgICAgICAgdGhpcy5fb3ZlcmxheUlkID0gdGhpcy5vdmVybGF5U2VydmljZS5hdHRhY2godGhpcy5lbGVtZW50UmVmLCBvdmVybGF5U2V0dGluZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICBjb25zdCBvcGVuRXZlbnRBcmdzOiBDYW5jZWxhYmxlRXZlbnRBcmdzID0geyBjYW5jZWw6IGZhbHNlIH07XG4gICAgICAgIHRoaXMub25PcGVuaW5nLmVtaXQob3BlbkV2ZW50QXJncyk7XG4gICAgICAgIGlmIChvcGVuRXZlbnRBcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgdGhpcy5fY29sbGFwc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3ZlcmxheVNlcnZpY2Uuc2hvdyh0aGlzLl9vdmVybGF5SWQsIG92ZXJsYXlTZXR0aW5ncyk7XG5cbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLl9vdmVybGF5T3BlbmVkU3ViID0gdGhpcy5vdmVybGF5U2VydmljZS5vbk9wZW5lZC5waXBlKC4uLnRoaXMuX292ZXJsYXlTdWJGaWx0ZXIpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uT3BlbmVkLmVtaXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fb3ZlcmxheUNsb3NpbmdTdWIgPSB0aGlzLm92ZXJsYXlTZXJ2aWNlXG4gICAgICAgICAgICAub25DbG9zaW5nXG4gICAgICAgICAgICAucGlwZSguLi50aGlzLl9vdmVybGF5U3ViRmlsdGVyKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZTogT3ZlcmxheUNsb3NpbmdFdmVudEFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudEFyZ3M6IENhbmNlbGFibGVCcm93c2VyRXZlbnRBcmdzID0geyBjYW5jZWw6IGZhbHNlLCBldmVudDogZS5ldmVudCB9O1xuICAgICAgICAgICAgICAgIHRoaXMub25DbG9zaW5nLmVtaXQoZXZlbnRBcmdzKTtcbiAgICAgICAgICAgICAgICBlLmNhbmNlbCA9IGV2ZW50QXJncy5jYW5jZWw7XG5cbiAgICAgICAgICAgICAgICAvLyAgaW4gY2FzZSBldmVudCBpcyBub3QgY2FuY2VsZWQgdGhpcyB3aWxsIGNsb3NlIHRoZSB0b2dnbGUgYW5kIHdlIG5lZWQgdG8gdW5zdWJzY3JpYmUuXG4gICAgICAgICAgICAgICAgLy8gIE90aGVyd2lzZSBpZiBmb3Igc29tZSByZWFzb24sIGUuZy4gY2xvc2Ugb24gb3V0c2lkZSBjbGljaywgY2xvc2UoKSBnZXRzIGNhbGxlZCBiZWZvcmVcbiAgICAgICAgICAgICAgICAvLyAgb25DbG9zZWQgd2FzIGZpcmVkIHdlIHdpbGwgZW5kIHdpdGggY2FsbGluZyBvbkNsb3NpbmcgbW9yZSB0aGFuIG9uY2VcbiAgICAgICAgICAgICAgICBpZiAoIWUuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdWJzY3JpcHRpb24odGhpcy5fb3ZlcmxheUNsb3NpbmdTdWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX292ZXJsYXlDbG9zZWRTdWIgPSB0aGlzLm92ZXJsYXlTZXJ2aWNlLm9uQ2xvc2VkXG4gICAgICAgICAgICAucGlwZSguLi50aGlzLl9vdmVybGF5U3ViRmlsdGVyKVxuICAgICAgICAgICAgLnN1YnNjcmliZSh0aGlzLm92ZXJsYXlDbG9zZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgdG9nZ2xlLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMubXlUb2dnbGUuY2xvc2UoKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgICAgIC8vICBpZiB0b2dnbGUgaXMgY29sbGFwc2VkIGRvIG5vdGhpbmdcbiAgICAgICAgLy8gIGlmIHRoZXJlIGlzIGNsb3NlIGFuaW1hdGlvbiBkbyBub3RoaW5nLCB0b2dnbGUgd2lsbCBjbG9zZSBhbnl3YXlcbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMub3ZlcmxheVNlcnZpY2UuZ2V0T3ZlcmxheUJ5SWQodGhpcy5fb3ZlcmxheUlkKTtcbiAgICAgICAgY29uc3QgaGFzQ2xvc2VBbmltYXRpb24gPSBpbmZvID8gaW5mby5jbG9zZUFuaW1hdGlvblBsYXllciA6IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fY29sbGFwc2VkIHx8IGhhc0Nsb3NlQW5pbWF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm92ZXJsYXlTZXJ2aWNlLmhpZGUodGhpcy5fb3ZlcmxheUlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVucyBvciBjbG9zZXMgdGhlIHRvZ2dsZSwgZGVwZW5kaW5nIG9uIGl0cyBjdXJyZW50IHN0YXRlLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMubXlUb2dnbGUudG9nZ2xlKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHRvZ2dsZShvdmVybGF5U2V0dGluZ3M/OiBPdmVybGF5U2V0dGluZ3MpIHtcbiAgICAgICAgLy8gIGlmIHRvZ2dsZSBpcyBjb2xsYXBzZWQgY2FsbCBvcGVuXG4gICAgICAgIC8vICBpZiB0aGVyZSBpcyBjbG9zZSBhbmltYXRpb24gY2FsbCBvcGVuXG4gICAgICAgIGlmICh0aGlzLmNvbGxhcHNlZCB8fCB0aGlzLmlzQ2xvc2luZykge1xuICAgICAgICAgICAgdGhpcy5vcGVuKG92ZXJsYXlTZXR0aW5ncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IGlzQ2xvc2luZygpIHtcbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMub3ZlcmxheVNlcnZpY2UuZ2V0T3ZlcmxheUJ5SWQodGhpcy5fb3ZlcmxheUlkKTtcbiAgICAgICAgcmV0dXJuIGluZm8gPyBpbmZvLmNsb3NlQW5pbWF0aW9uUGxheWVyIDogZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwb3NpdGlvbnMgdGhlIHRvZ2dsZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5teVRvZ2dsZS5yZXBvc2l0aW9uKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHJlcG9zaXRpb24oKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheVNlcnZpY2UucmVwb3NpdGlvbih0aGlzLl9vdmVybGF5SWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLm5hdmlnYXRpb25TZXJ2aWNlICYmIHRoaXMuaWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UuYWRkKHRoaXMuaWQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMubmF2aWdhdGlvblNlcnZpY2UgJiYgdGhpcy5pZCkge1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5yZW1vdmUodGhpcy5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmNvbGxhcHNlZCAmJiB0aGlzLl9vdmVybGF5SWQpIHtcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheVNlcnZpY2UuaGlkZSh0aGlzLl9vdmVybGF5SWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvdmVybGF5Q2xvc2VkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9jb2xsYXBzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9vdmVybGF5SWQ7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5vbkNsb3NlZC5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgdGhpcy5jbGVhclN1YnNjcmlwdGlvbih0aGlzLl9vdmVybGF5T3BlbmVkU3ViKTtcbiAgICAgICAgdGhpcy5jbGVhclN1YnNjcmlwdGlvbih0aGlzLl9vdmVybGF5Q2xvc2luZ1N1Yik7XG4gICAgICAgIHRoaXMuY2xlYXJTdWJzY3JpcHRpb24odGhpcy5fb3ZlcmxheUNsb3NlZFN1Yik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbGVhclN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbikge1xuICAgICAgICBpZiAoc3Vic2NyaXB0aW9uICYmICFzdWJzY3JpcHRpb24uY2xvc2VkKSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgZXhwb3J0QXM6ICd0b2dnbGUtYWN0aW9uJyxcbiAgICBzZWxlY3RvcjogJ1tpZ3hUb2dnbGVBY3Rpb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hUb2dnbGVBY3Rpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb3RlY3RlZCBfb3ZlcmxheURlZmF1bHRzOiBPdmVybGF5U2V0dGluZ3M7XG5cbiAgICAvKipcbiAgICAgKiBQcm92aWRlIHNldHRpbmdzIHRoYXQgY29udHJvbCB0aGUgdG9nZ2xlIG92ZXJsYXkgcG9zaXRpb25pbmcsIGludGVyYWN0aW9uIGFuZCBzY3JvbGwgYmVoYXZpb3IuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHNldHRpbmdzOiBPdmVybGF5U2V0dGluZ3MgPSB7XG4gICAgICogICAgICBjbG9zZU9uT3V0c2lkZUNsaWNrOiBmYWxzZSxcbiAgICAgKiAgICAgIG1vZGFsOiBmYWxzZVxuICAgICAqICB9XG4gICAgICogYGBgXG4gICAgICogLS0tXG4gICAgICogYGBgaHRtbFxuICAgICAqIDwhLS1zZXQtLT5cbiAgICAgKiA8ZGl2IGlneFRvZ2dsZUFjdGlvbiBbb3ZlcmxheVNldHRpbmdzXT1cInNldHRpbmdzXCI+PC9kaXY+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgb3ZlcmxheVNldHRpbmdzOiBPdmVybGF5U2V0dGluZ3M7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXJlIHRoZSB0b2dnbGUgZWxlbWVudCBvdmVybGF5IHNob3VsZCBiZSBhdHRhY2hlZC5cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGRpdiBpZ3hUb2dnbGVBY3Rpb24gW2lneFRvZ2dsZU91dGxldF09XCJvdXRsZXRcIj48L2Rpdj5cbiAgICAgKiBgYGBcbiAgICAgKiBXaGVyZSBgb3V0bGV0YCBpbiBhbiBpbnN0YW5jZSBvZiBgSWd4T3ZlcmxheU91dGxldERpcmVjdGl2ZWAgb3IgYW4gYEVsZW1lbnRSZWZgXG4gICAgICovXG4gICAgQElucHV0KCdpZ3hUb2dnbGVPdXRsZXQnKVxuICAgIHB1YmxpYyBvdXRsZXQ6IElneE92ZXJsYXlPdXRsZXREaXJlY3RpdmUgfCBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBJbnB1dCgnaWd4VG9nZ2xlQWN0aW9uJylcbiAgICBzZXQgdGFyZ2V0KHRhcmdldDogYW55KSB7XG4gICAgICAgIGlmICh0YXJnZXQgIT09IG51bGwgJiYgdGFyZ2V0ICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5fdGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGdldCB0YXJnZXQoKTogYW55IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl90YXJnZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5nZXQodGhpcy5fdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfdGFyZ2V0OiBJVG9nZ2xlVmlldyB8IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogSWd4TmF2aWdhdGlvblNlcnZpY2UpIHsgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fb3ZlcmxheURlZmF1bHRzID0ge1xuICAgICAgICAgICAgcG9zaXRpb25TdHJhdGVneTogbmV3IENvbm5lY3RlZFBvc2l0aW9uaW5nU3RyYXRlZ3koeyB0YXJnZXQ6IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50IH0pLFxuICAgICAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IG5ldyBBYnNvbHV0ZVNjcm9sbFN0cmF0ZWd5KCksXG4gICAgICAgICAgICBjbG9zZU9uT3V0c2lkZUNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgbW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgZXhjbHVkZVBvc2l0aW9uVGFyZ2V0OiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgICBwdWJsaWMgb25DbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMub3V0bGV0KSB7XG4gICAgICAgICAgICB0aGlzLl9vdmVybGF5RGVmYXVsdHMub3V0bGV0ID0gdGhpcy5vdXRsZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjbG9uZWRTZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX292ZXJsYXlEZWZhdWx0cywgdGhpcy5vdmVybGF5U2V0dGluZ3MpO1xuICAgICAgICB0aGlzLnVwZGF0ZU92ZXJsYXlTZXR0aW5ncyhjbG9uZWRTZXR0aW5ncyk7XG4gICAgICAgIHRoaXMudGFyZ2V0LnRvZ2dsZShjbG9uZWRTZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBwcm92aWRlZCBvdmVybGF5IHNldHRpbmdzXG4gICAgICogQHBhcmFtIHNldHRpbmdzIHNldHRpbmdzIHRvIHVwZGF0ZVxuICAgICAqIEByZXR1cm5zIHJldHVybnMgdXBkYXRlZCBjb3B5IG9mIHByb3ZpZGVkIG92ZXJsYXkgc2V0dGluZ3NcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlT3ZlcmxheVNldHRpbmdzKHNldHRpbmdzOiBPdmVybGF5U2V0dGluZ3MpOiBPdmVybGF5U2V0dGluZ3Mge1xuICAgICAgICBpZiAoc2V0dGluZ3MgJiYgc2V0dGluZ3MucG9zaXRpb25TdHJhdGVneSkge1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25TdHJhdGVneUNsb25lOiBJUG9zaXRpb25TdHJhdGVneSA9IHNldHRpbmdzLnBvc2l0aW9uU3RyYXRlZ3kuY2xvbmUoKTtcbiAgICAgICAgICAgIHBvc2l0aW9uU3RyYXRlZ3lDbG9uZS5zZXR0aW5ncy50YXJnZXQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIHNldHRpbmdzLnBvc2l0aW9uU3RyYXRlZ3kgPSBwb3NpdGlvblN0cmF0ZWd5Q2xvbmU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2V0dGluZ3M7XG4gICAgfVxufVxuXG4vKipcbiAqIE1hcmsgYW4gZWxlbWVudCBhcyBhbiBpZ3hPdmVybGF5IG91dGxldCBjb250YWluZXIuXG4gKiBEaXJlY3RpdmUgaW5zdGFuY2UgaXMgZXhwb3J0ZWQgYXMgYG92ZXJsYXktb3V0bGV0YCB0byBiZSBhc3NpZ25lZCB0byB0ZW1wbGF0ZXMgdmFyaWFibGVzOlxuICogYGBgaHRtbFxuICogPGRpdiBpZ3hPdmVybGF5T3V0bGV0ICNvdXRsZXQ9XCJvdmVybGF5LW91dGxldFwiPjwvZGl2PlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIGV4cG9ydEFzOiAnb3ZlcmxheS1vdXRsZXQnLFxuICAgIHNlbGVjdG9yOiAnW2lneE92ZXJsYXlPdXRsZXRdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hPdmVybGF5T3V0bGV0RGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZikgeyB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIHB1YmxpYyBnZXQgbmF0aXZlRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSWd4VG9nZ2xlRGlyZWN0aXZlLCBJZ3hUb2dnbGVBY3Rpb25EaXJlY3RpdmUsIElneE92ZXJsYXlPdXRsZXREaXJlY3RpdmVdLFxuICAgIGV4cG9ydHM6IFtJZ3hUb2dnbGVEaXJlY3RpdmUsIElneFRvZ2dsZUFjdGlvbkRpcmVjdGl2ZSwgSWd4T3ZlcmxheU91dGxldERpcmVjdGl2ZV0sXG4gICAgcHJvdmlkZXJzOiBbSWd4TmF2aWdhdGlvblNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIElneFRvZ2dsZU1vZHVsZSB7IH1cbiJdfQ==