/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, NgModule, Optional, Output, Inject } from '@angular/core';
import { IgxNavigationService } from '../../core/navigation';
import { IgxOverlayService } from '../../services/overlay/overlay';
import { ConnectedPositioningStrategy, AbsoluteScrollStrategy } from '../../services';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
export class IgxToggleDirective {
    /**
     * @hidden
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} overlayService
     * @param {?} navigationService
     */
    constructor(elementRef, cdr, overlayService, navigationService) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.overlayService = overlayService;
        this.navigationService = navigationService;
        this.destroy$ = new Subject();
        this._overlaySubFilter = [
            filter(x => x.id === this._overlayId),
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
        this.overlayClosed = () => {
            this._collapsed = true;
            this.cdr.detectChanges();
            delete this._overlayId;
            this.unsubscribe();
            this.onClosed.emit();
        };
    }
    /**
     * @hidden
     * @return {?}
     */
    get collapsed() {
        return this._collapsed;
    }
    /**
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
    get hiddenClass() {
        return this.collapsed;
    }
    /**
     * @hidden
     * @return {?}
     */
    get defaultClass() {
        return !this.collapsed;
    }
    /**
     * Opens the toggle.
     *
     * ```typescript
     * this.myToggle.open();
     * ```
     * @param {?=} overlaySettings
     * @return {?}
     */
    open(overlaySettings) {
        //  if there is open animation do nothing
        //  if toggle is not collapsed and there is no close animation do nothing
        /** @type {?} */
        const info = this.overlayService.getOverlayById(this._overlayId);
        /** @type {?} */
        const hasOpenAnimation = info ? info.openAnimationPlayer : false;
        /** @type {?} */
        const hasCloseAnimation = info ? info.closeAnimationPlayer : false;
        if (hasOpenAnimation || !(this._collapsed || hasCloseAnimation)) {
            return;
        }
        if (!info) {
            this._overlayId = this.overlayService.attach(this.elementRef, overlaySettings);
        }
        this._collapsed = false;
        this.cdr.detectChanges();
        /** @type {?} */
        const openEventArgs = { cancel: false };
        this.onOpening.emit(openEventArgs);
        if (openEventArgs.cancel) {
            this._collapsed = true;
            this.cdr.detectChanges();
            return;
        }
        this.overlayService.show(this._overlayId, overlaySettings);
        this.unsubscribe();
        this._overlayOpenedSub = this.overlayService.onOpened.pipe(...this._overlaySubFilter).subscribe(() => {
            this.onOpened.emit();
        });
        this._overlayClosingSub = this.overlayService
            .onClosing
            .pipe(...this._overlaySubFilter)
            .subscribe((e) => {
            /** @type {?} */
            const eventArgs = { cancel: false, event: e.event };
            this.onClosing.emit(eventArgs);
            e.cancel = eventArgs.cancel;
            //  in case event is not canceled this will close the toggle and we need to unsubscribe.
            //  Otherwise if for some reason, e.g. close on outside click, close() gets called before
            //  onClosed was fired we will end with calling onClosing more than once
            if (!e.cancel) {
                this.clearSubscription(this._overlayClosingSub);
            }
        });
        this._overlayClosedSub = this.overlayService.onClosed
            .pipe(...this._overlaySubFilter)
            .subscribe(this.overlayClosed);
    }
    /**
     * Closes the toggle.
     *
     * ```typescript
     * this.myToggle.close();
     * ```
     * @return {?}
     */
    close() {
        //  if toggle is collapsed do nothing
        //  if there is close animation do nothing, toggle will close anyway
        /** @type {?} */
        const info = this.overlayService.getOverlayById(this._overlayId);
        /** @type {?} */
        const hasCloseAnimation = info ? info.closeAnimationPlayer : false;
        if (this._collapsed || hasCloseAnimation) {
            return;
        }
        this.overlayService.hide(this._overlayId);
    }
    /**
     * Opens or closes the toggle, depending on its current state.
     *
     * ```typescript
     * this.myToggle.toggle();
     * ```
     * @param {?=} overlaySettings
     * @return {?}
     */
    toggle(overlaySettings) {
        //  if toggle is collapsed call open
        //  if there is close animation call open
        if (this.collapsed || this.isClosing) {
            this.open(overlaySettings);
        }
        else {
            this.close();
        }
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get isClosing() {
        /** @type {?} */
        const info = this.overlayService.getOverlayById(this._overlayId);
        return info ? info.closeAnimationPlayer : false;
    }
    /**
     * Repositions the toggle.
     * ```typescript
     * this.myToggle.reposition();
     * ```
     * @return {?}
     */
    reposition() {
        this.overlayService.reposition(this._overlayId);
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        if (this.navigationService && this.id) {
            this.navigationService.add(this.id, this);
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        if (this.navigationService && this.id) {
            this.navigationService.remove(this.id);
        }
        if (!this.collapsed && this._overlayId) {
            this.overlayService.hide(this._overlayId);
        }
        this.unsubscribe();
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    /**
     * @private
     * @return {?}
     */
    unsubscribe() {
        this.clearSubscription(this._overlayOpenedSub);
        this.clearSubscription(this._overlayClosingSub);
        this.clearSubscription(this._overlayClosedSub);
    }
    /**
     * @private
     * @param {?} subscription
     * @return {?}
     */
    clearSubscription(subscription) {
        if (subscription && !subscription.closed) {
            subscription.unsubscribe();
        }
    }
}
IgxToggleDirective.decorators = [
    { type: Directive, args: [{
                exportAs: 'toggle',
                selector: '[igxToggle]'
            },] }
];
/** @nocollapse */
IgxToggleDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: IgxOverlayService, decorators: [{ type: Inject, args: [IgxOverlayService,] }] },
    { type: IgxNavigationService, decorators: [{ type: Optional }] }
];
IgxToggleDirective.propDecorators = {
    onOpened: [{ type: Output }],
    onOpening: [{ type: Output }],
    onClosed: [{ type: Output }],
    onClosing: [{ type: Output }],
    id: [{ type: Input }],
    hiddenClass: [{ type: HostBinding, args: ['class.igx-toggle--hidden',] }, { type: HostBinding, args: ['attr.aria-hidden',] }],
    defaultClass: [{ type: HostBinding, args: ['class.igx-toggle',] }]
};
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
export class IgxToggleActionDirective {
    /**
     * @param {?} element
     * @param {?} navigationService
     */
    constructor(element, navigationService) {
        this.element = element;
        this.navigationService = navigationService;
    }
    /**
     * @hidden
     * @param {?} target
     * @return {?}
     */
    set target(target) {
        if (target !== null && target !== '') {
            this._target = target;
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    get target() {
        if (typeof this._target === 'string') {
            return this.navigationService.get(this._target);
        }
        return this._target;
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        this._overlayDefaults = {
            positionStrategy: new ConnectedPositioningStrategy({ target: this.element.nativeElement }),
            scrollStrategy: new AbsoluteScrollStrategy(),
            closeOnOutsideClick: true,
            modal: false,
            excludePositionTarget: true
        };
    }
    /**
     * @hidden
     * @return {?}
     */
    onClick() {
        if (this.outlet) {
            this._overlayDefaults.outlet = this.outlet;
        }
        /** @type {?} */
        const clonedSettings = Object.assign({}, this._overlayDefaults, this.overlaySettings);
        this.updateOverlaySettings(clonedSettings);
        this.target.toggle(clonedSettings);
    }
    /**
     * Updates provided overlay settings
     * @protected
     * @param {?} settings settings to update
     * @return {?} returns updated copy of provided overlay settings
     */
    updateOverlaySettings(settings) {
        if (settings && settings.positionStrategy) {
            /** @type {?} */
            const positionStrategyClone = settings.positionStrategy.clone();
            positionStrategyClone.settings.target = this.element.nativeElement;
            settings.positionStrategy = positionStrategyClone;
        }
        return settings;
    }
}
IgxToggleActionDirective.decorators = [
    { type: Directive, args: [{
                exportAs: 'toggle-action',
                selector: '[igxToggleAction]'
            },] }
];
/** @nocollapse */
IgxToggleActionDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: IgxNavigationService, decorators: [{ type: Optional }] }
];
IgxToggleActionDirective.propDecorators = {
    overlaySettings: [{ type: Input }],
    outlet: [{ type: Input, args: ['igxToggleOutlet',] }],
    target: [{ type: Input, args: ['igxToggleAction',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
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
export class IgxOverlayOutletDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
    }
    /**
     * @hidden
     * @return {?}
     */
    get nativeElement() {
        return this.element.nativeElement;
    }
}
IgxOverlayOutletDirective.decorators = [
    { type: Directive, args: [{
                exportAs: 'overlay-outlet',
                selector: '[igxOverlayOutlet]'
            },] }
];
/** @nocollapse */
IgxOverlayOutletDirective.ctorParameters = () => [
    { type: ElementRef }
];
if (false) {
    /** @type {?} */
    IgxOverlayOutletDirective.prototype.element;
}
/**
 * @hidden
 */
export class IgxToggleModule {
}
IgxToggleModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective],
                exports: [IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective],
                providers: [IgxNavigationService]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy90b2dnbGUvdG9nZ2xlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxRQUFRLEVBR1IsUUFBUSxFQUNSLE1BQU0sRUFDTixNQUFNLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFxQyw0QkFBNEIsRUFBRSxzQkFBc0IsRUFBcUIsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1SSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBZ0IsT0FBTyxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQVF2RSxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7OztJQW9JM0IsWUFDWSxVQUFzQixFQUN0QixHQUFzQixFQUNPLGNBQWlDLEVBQ2xELGlCQUF1QztRQUhuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ08sbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ2xELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBc0I7UUF0SXZELGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQ2xDLHNCQUFpQixHQUE2RjtZQUNsSCxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDckMsU0FBUyxDQUFDLElBQUks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QVk7SUFBSSxDQUFDOzs7OztJQUczQyxJQUFXLGFBQWE7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUN0QyxDQUFDOzs7WUFWSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLG9CQUFvQjthQUNqQzs7OztZQWpiRyxVQUFVOzs7O0lBbWJFLDRDQUEwQjs7Ozs7QUFnQjFDLE1BQU0sT0FBTyxlQUFlOzs7WUFMM0IsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLHdCQUF3QixFQUFFLHlCQUF5QixDQUFDO2dCQUN2RixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSx3QkFBd0IsRUFBRSx5QkFBeUIsQ0FBQztnQkFDbEYsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIERpcmVjdGl2ZSxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBIb3N0QmluZGluZyxcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgSW5wdXQsXG4gICAgTmdNb2R1bGUsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBPcHRpb25hbCxcbiAgICBPdXRwdXQsXG4gICAgSW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4TmF2aWdhdGlvblNlcnZpY2UsIElUb2dnbGVWaWV3IH0gZnJvbSAnLi4vLi4vY29yZS9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IElneE92ZXJsYXlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb3ZlcmxheS9vdmVybGF5JztcbmltcG9ydCB7IE92ZXJsYXlTZXR0aW5ncywgT3ZlcmxheUV2ZW50QXJncywgQ29ubmVjdGVkUG9zaXRpb25pbmdTdHJhdGVneSwgQWJzb2x1dGVTY3JvbGxTdHJhdGVneSwgSVBvc2l0aW9uU3RyYXRlZ3kgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3ViamVjdCwgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPdmVybGF5Q2xvc2luZ0V2ZW50QXJncyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL292ZXJsYXkvdXRpbGl0aWVzJztcbmltcG9ydCB7IENhbmNlbGFibGVFdmVudEFyZ3MsIENhbmNlbGFibGVCcm93c2VyRXZlbnRBcmdzIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIGV4cG9ydEFzOiAndG9nZ2xlJyxcbiAgICBzZWxlY3RvcjogJ1tpZ3hUb2dnbGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hUb2dnbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBJVG9nZ2xlVmlldywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCBfb3ZlcmxheUlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgcHJpdmF0ZSBfb3ZlcmxheVN1YkZpbHRlcjogW01vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxPdmVybGF5RXZlbnRBcmdzPiwgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPE92ZXJsYXlFdmVudEFyZ3M+XSA9IFtcbiAgICAgICAgZmlsdGVyKHggPT4geC5pZCA9PT0gdGhpcy5fb3ZlcmxheUlkKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgXTtcbiAgICBwcml2YXRlIF9vdmVybGF5T3BlbmVkU3ViOiBTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBfb3ZlcmxheUNsb3NpbmdTdWI6IFN1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIF9vdmVybGF5Q2xvc2VkU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhbiBldmVudCBhZnRlciB0aGUgdG9nZ2xlIGNvbnRhaW5lciBpcyBvcGVuZWQuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogb25Ub2dnbGVPcGVuZWQoZXZlbnQpIHtcbiAgICAgKiAgICBhbGVydChcIlRvZ2dsZSBvcGVuZWQhXCIpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2XG4gICAgICogICBpZ3hUb2dnbGVcbiAgICAgKiAgIChvbk9wZW5lZCk9J29uVG9nZ2xlT3BlbmVkKCRldmVudCknPlxuICAgICAqIDwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbk9wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IGJlZm9yZSB0aGUgdG9nZ2xlIGNvbnRhaW5lciBpcyBvcGVuZWQuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogb25Ub2dnbGVPcGVuaW5nKGV2ZW50KSB7XG4gICAgICogIGFsZXJ0KFwiVG9nZ2xlIG9wZW5pbmchXCIpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2XG4gICAgICogICBpZ3hUb2dnbGVcbiAgICAgKiAgIChvbk9wZW5pbmcpPSdvblRvZ2dsZU9wZW5pbmcoJGV2ZW50KSc+XG4gICAgICogPC9kaXY+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uT3BlbmluZyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuY2VsYWJsZUV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IGFmdGVyIHRoZSB0b2dnbGUgY29udGFpbmVyIGlzIGNsb3NlZC5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBvblRvZ2dsZUNsb3NlZChldmVudCkge1xuICAgICAqICBhbGVydChcIlRvZ2dsZSBjbG9zZWQhXCIpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2XG4gICAgICogICBpZ3hUb2dnbGVcbiAgICAgKiAgIChvbkNsb3NlZCk9J29uVG9nZ2xlQ2xvc2VkKCRldmVudCknPlxuICAgICAqIDwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IGJlZm9yZSB0aGUgdG9nZ2xlIGNvbnRhaW5lciBpcyBjbG9zZWQuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogb25Ub2dnbGVDbG9zaW5nKGV2ZW50KSB7XG4gICAgICogIGFsZXJ0KFwiVG9nZ2xlIGNsb3NpbmchXCIpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2XG4gICAgICogIGlneFRvZ2dsZVxuICAgICAqICAob25DbG9zaW5nKT0nb25Ub2dnbGVDbG9zaW5nKCRldmVudCknPlxuICAgICAqIDwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkNsb3NpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmNlbGFibGVCcm93c2VyRXZlbnRBcmdzPigpO1xuXG4gICAgcHJpdmF0ZSBfY29sbGFwc2VkID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBjb2xsYXBzZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xsYXBzZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWRlbnRpZmllciB3aGljaCBpcyByZWdpc3RlcmVkIGludG8gYElneE5hdmlnYXRpb25TZXJ2aWNlYFxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBteVRvZ2dsZUlkID0gdGhpcy50b2dnbGUuaWQ7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXRvZ2dsZS0taGlkZGVuJylcbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1oaWRkZW4nKVxuICAgIHB1YmxpYyBnZXQgaGlkZGVuQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxhcHNlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtdG9nZ2xlJylcbiAgICBwdWJsaWMgZ2V0IGRlZmF1bHRDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmNvbGxhcHNlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBASW5qZWN0KElneE92ZXJsYXlTZXJ2aWNlKSBwcm90ZWN0ZWQgb3ZlcmxheVNlcnZpY2U6IElneE92ZXJsYXlTZXJ2aWNlLFxuICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBJZ3hOYXZpZ2F0aW9uU2VydmljZSkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9wZW5zIHRoZSB0b2dnbGUuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5teVRvZ2dsZS5vcGVuKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIG9wZW4ob3ZlcmxheVNldHRpbmdzPzogT3ZlcmxheVNldHRpbmdzKSB7XG4gICAgICAgIC8vICBpZiB0aGVyZSBpcyBvcGVuIGFuaW1hdGlvbiBkbyBub3RoaW5nXG4gICAgICAgIC8vICBpZiB0b2dnbGUgaXMgbm90IGNvbGxhcHNlZCBhbmQgdGhlcmUgaXMgbm8gY2xvc2UgYW5pbWF0aW9uIGRvIG5vdGhpbmdcbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMub3ZlcmxheVNlcnZpY2UuZ2V0T3ZlcmxheUJ5SWQodGhpcy5fb3ZlcmxheUlkKTtcbiAgICAgICAgY29uc3QgaGFzT3BlbkFuaW1hdGlvbiA9IGluZm8gPyBpbmZvLm9wZW5BbmltYXRpb25QbGF5ZXIgOiBmYWxzZTtcbiAgICAgICAgY29uc3QgaGFzQ2xvc2VBbmltYXRpb24gPSBpbmZvID8gaW5mby5jbG9zZUFuaW1hdGlvblBsYXllciA6IGZhbHNlO1xuICAgICAgICBpZiAoaGFzT3BlbkFuaW1hdGlvbiB8fCAhKHRoaXMuX2NvbGxhcHNlZCB8fCBoYXNDbG9zZUFuaW1hdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaW5mbykge1xuICAgICAgICAgICAgdGhpcy5fb3ZlcmxheUlkID0gdGhpcy5vdmVybGF5U2VydmljZS5hdHRhY2godGhpcy5lbGVtZW50UmVmLCBvdmVybGF5U2V0dGluZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICBjb25zdCBvcGVuRXZlbnRBcmdzOiBDYW5jZWxhYmxlRXZlbnRBcmdzID0geyBjYW5jZWw6IGZhbHNlIH07XG4gICAgICAgIHRoaXMub25PcGVuaW5nLmVtaXQob3BlbkV2ZW50QXJncyk7XG4gICAgICAgIGlmIChvcGVuRXZlbnRBcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgdGhpcy5fY29sbGFwc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3ZlcmxheVNlcnZpY2Uuc2hvdyh0aGlzLl9vdmVybGF5SWQsIG92ZXJsYXlTZXR0aW5ncyk7XG5cbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLl9vdmVybGF5T3BlbmVkU3ViID0gdGhpcy5vdmVybGF5U2VydmljZS5vbk9wZW5lZC5waXBlKC4uLnRoaXMuX292ZXJsYXlTdWJGaWx0ZXIpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uT3BlbmVkLmVtaXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fb3ZlcmxheUNsb3NpbmdTdWIgPSB0aGlzLm92ZXJsYXlTZXJ2aWNlXG4gICAgICAgICAgICAub25DbG9zaW5nXG4gICAgICAgICAgICAucGlwZSguLi50aGlzLl9vdmVybGF5U3ViRmlsdGVyKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZTogT3ZlcmxheUNsb3NpbmdFdmVudEFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudEFyZ3M6IENhbmNlbGFibGVCcm93c2VyRXZlbnRBcmdzID0geyBjYW5jZWw6IGZhbHNlLCBldmVudDogZS5ldmVudCB9O1xuICAgICAgICAgICAgICAgIHRoaXMub25DbG9zaW5nLmVtaXQoZXZlbnRBcmdzKTtcbiAgICAgICAgICAgICAgICBlLmNhbmNlbCA9IGV2ZW50QXJncy5jYW5jZWw7XG5cbiAgICAgICAgICAgICAgICAvLyAgaW4gY2FzZSBldmVudCBpcyBub3QgY2FuY2VsZWQgdGhpcyB3aWxsIGNsb3NlIHRoZSB0b2dnbGUgYW5kIHdlIG5lZWQgdG8gdW5zdWJzY3JpYmUuXG4gICAgICAgICAgICAgICAgLy8gIE90aGVyd2lzZSBpZiBmb3Igc29tZSByZWFzb24sIGUuZy4gY2xvc2Ugb24gb3V0c2lkZSBjbGljaywgY2xvc2UoKSBnZXRzIGNhbGxlZCBiZWZvcmVcbiAgICAgICAgICAgICAgICAvLyAgb25DbG9zZWQgd2FzIGZpcmVkIHdlIHdpbGwgZW5kIHdpdGggY2FsbGluZyBvbkNsb3NpbmcgbW9yZSB0aGFuIG9uY2VcbiAgICAgICAgICAgICAgICBpZiAoIWUuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdWJzY3JpcHRpb24odGhpcy5fb3ZlcmxheUNsb3NpbmdTdWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX292ZXJsYXlDbG9zZWRTdWIgPSB0aGlzLm92ZXJsYXlTZXJ2aWNlLm9uQ2xvc2VkXG4gICAgICAgICAgICAucGlwZSguLi50aGlzLl9vdmVybGF5U3ViRmlsdGVyKVxuICAgICAgICAgICAgLnN1YnNjcmliZSh0aGlzLm92ZXJsYXlDbG9zZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgdG9nZ2xlLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMubXlUb2dnbGUuY2xvc2UoKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgICAgIC8vICBpZiB0b2dnbGUgaXMgY29sbGFwc2VkIGRvIG5vdGhpbmdcbiAgICAgICAgLy8gIGlmIHRoZXJlIGlzIGNsb3NlIGFuaW1hdGlvbiBkbyBub3RoaW5nLCB0b2dnbGUgd2lsbCBjbG9zZSBhbnl3YXlcbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMub3ZlcmxheVNlcnZpY2UuZ2V0T3ZlcmxheUJ5SWQodGhpcy5fb3ZlcmxheUlkKTtcbiAgICAgICAgY29uc3QgaGFzQ2xvc2VBbmltYXRpb24gPSBpbmZvID8gaW5mby5jbG9zZUFuaW1hdGlvblBsYXllciA6IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fY29sbGFwc2VkIHx8IGhhc0Nsb3NlQW5pbWF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm92ZXJsYXlTZXJ2aWNlLmhpZGUodGhpcy5fb3ZlcmxheUlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVucyBvciBjbG9zZXMgdGhlIHRvZ2dsZSwgZGVwZW5kaW5nIG9uIGl0cyBjdXJyZW50IHN0YXRlLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMubXlUb2dnbGUudG9nZ2xlKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHRvZ2dsZShvdmVybGF5U2V0dGluZ3M/OiBPdmVybGF5U2V0dGluZ3MpIHtcbiAgICAgICAgLy8gIGlmIHRvZ2dsZSBpcyBjb2xsYXBzZWQgY2FsbCBvcGVuXG4gICAgICAgIC8vICBpZiB0aGVyZSBpcyBjbG9zZSBhbmltYXRpb24gY2FsbCBvcGVuXG4gICAgICAgIGlmICh0aGlzLmNvbGxhcHNlZCB8fCB0aGlzLmlzQ2xvc2luZykge1xuICAgICAgICAgICAgdGhpcy5vcGVuKG92ZXJsYXlTZXR0aW5ncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IGlzQ2xvc2luZygpIHtcbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMub3ZlcmxheVNlcnZpY2UuZ2V0T3ZlcmxheUJ5SWQodGhpcy5fb3ZlcmxheUlkKTtcbiAgICAgICAgcmV0dXJuIGluZm8gPyBpbmZvLmNsb3NlQW5pbWF0aW9uUGxheWVyIDogZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwb3NpdGlvbnMgdGhlIHRvZ2dsZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5teVRvZ2dsZS5yZXBvc2l0aW9uKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHJlcG9zaXRpb24oKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheVNlcnZpY2UucmVwb3NpdGlvbih0aGlzLl9vdmVybGF5SWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLm5hdmlnYXRpb25TZXJ2aWNlICYmIHRoaXMuaWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UuYWRkKHRoaXMuaWQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMubmF2aWdhdGlvblNlcnZpY2UgJiYgdGhpcy5pZCkge1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5yZW1vdmUodGhpcy5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmNvbGxhcHNlZCAmJiB0aGlzLl9vdmVybGF5SWQpIHtcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheVNlcnZpY2UuaGlkZSh0aGlzLl9vdmVybGF5SWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvdmVybGF5Q2xvc2VkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9jb2xsYXBzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9vdmVybGF5SWQ7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5vbkNsb3NlZC5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgdGhpcy5jbGVhclN1YnNjcmlwdGlvbih0aGlzLl9vdmVybGF5T3BlbmVkU3ViKTtcbiAgICAgICAgdGhpcy5jbGVhclN1YnNjcmlwdGlvbih0aGlzLl9vdmVybGF5Q2xvc2luZ1N1Yik7XG4gICAgICAgIHRoaXMuY2xlYXJTdWJzY3JpcHRpb24odGhpcy5fb3ZlcmxheUNsb3NlZFN1Yik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbGVhclN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbikge1xuICAgICAgICBpZiAoc3Vic2NyaXB0aW9uICYmICFzdWJzY3JpcHRpb24uY2xvc2VkKSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgZXhwb3J0QXM6ICd0b2dnbGUtYWN0aW9uJyxcbiAgICBzZWxlY3RvcjogJ1tpZ3hUb2dnbGVBY3Rpb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hUb2dnbGVBY3Rpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb3RlY3RlZCBfb3ZlcmxheURlZmF1bHRzOiBPdmVybGF5U2V0dGluZ3M7XG5cbiAgICAvKipcbiAgICAgKiBQcm92aWRlIHNldHRpbmdzIHRoYXQgY29udHJvbCB0aGUgdG9nZ2xlIG92ZXJsYXkgcG9zaXRpb25pbmcsIGludGVyYWN0aW9uIGFuZCBzY3JvbGwgYmVoYXZpb3IuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHNldHRpbmdzOiBPdmVybGF5U2V0dGluZ3MgPSB7XG4gICAgICogICAgICBjbG9zZU9uT3V0c2lkZUNsaWNrOiBmYWxzZSxcbiAgICAgKiAgICAgIG1vZGFsOiBmYWxzZVxuICAgICAqICB9XG4gICAgICogYGBgXG4gICAgICogLS0tXG4gICAgICogYGBgaHRtbFxuICAgICAqIDwhLS1zZXQtLT5cbiAgICAgKiA8ZGl2IGlneFRvZ2dsZUFjdGlvbiBbb3ZlcmxheVNldHRpbmdzXT1cInNldHRpbmdzXCI+PC9kaXY+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgb3ZlcmxheVNldHRpbmdzOiBPdmVybGF5U2V0dGluZ3M7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXJlIHRoZSB0b2dnbGUgZWxlbWVudCBvdmVybGF5IHNob3VsZCBiZSBhdHRhY2hlZC5cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGRpdiBpZ3hUb2dnbGVBY3Rpb24gW2lneFRvZ2dsZU91dGxldF09XCJvdXRsZXRcIj48L2Rpdj5cbiAgICAgKiBgYGBcbiAgICAgKiBXaGVyZSBgb3V0bGV0YCBpbiBhbiBpbnN0YW5jZSBvZiBgSWd4T3ZlcmxheU91dGxldERpcmVjdGl2ZWAgb3IgYW4gYEVsZW1lbnRSZWZgXG4gICAgICovXG4gICAgQElucHV0KCdpZ3hUb2dnbGVPdXRsZXQnKVxuICAgIHB1YmxpYyBvdXRsZXQ6IElneE92ZXJsYXlPdXRsZXREaXJlY3RpdmUgfCBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBJbnB1dCgnaWd4VG9nZ2xlQWN0aW9uJylcbiAgICBzZXQgdGFyZ2V0KHRhcmdldDogYW55KSB7XG4gICAgICAgIGlmICh0YXJnZXQgIT09IG51bGwgJiYgdGFyZ2V0ICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5fdGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGdldCB0YXJnZXQoKTogYW55IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl90YXJnZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5nZXQodGhpcy5fdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfdGFyZ2V0OiBJVG9nZ2xlVmlldyB8IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogSWd4TmF2aWdhdGlvblNlcnZpY2UpIHsgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fb3ZlcmxheURlZmF1bHRzID0ge1xuICAgICAgICAgICAgcG9zaXRpb25TdHJhdGVneTogbmV3IENvbm5lY3RlZFBvc2l0aW9uaW5nU3RyYXRlZ3koeyB0YXJnZXQ6IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50IH0pLFxuICAgICAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IG5ldyBBYnNvbHV0ZVNjcm9sbFN0cmF0ZWd5KCksXG4gICAgICAgICAgICBjbG9zZU9uT3V0c2lkZUNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgbW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgZXhjbHVkZVBvc2l0aW9uVGFyZ2V0OiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgICBwdWJsaWMgb25DbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMub3V0bGV0KSB7XG4gICAgICAgICAgICB0aGlzLl9vdmVybGF5RGVmYXVsdHMub3V0bGV0ID0gdGhpcy5vdXRsZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjbG9uZWRTZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX292ZXJsYXlEZWZhdWx0cywgdGhpcy5vdmVybGF5U2V0dGluZ3MpO1xuICAgICAgICB0aGlzLnVwZGF0ZU92ZXJsYXlTZXR0aW5ncyhjbG9uZWRTZXR0aW5ncyk7XG4gICAgICAgIHRoaXMudGFyZ2V0LnRvZ2dsZShjbG9uZWRTZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBwcm92aWRlZCBvdmVybGF5IHNldHRpbmdzXG4gICAgICogQHBhcmFtIHNldHRpbmdzIHNldHRpbmdzIHRvIHVwZGF0ZVxuICAgICAqIEByZXR1cm5zIHJldHVybnMgdXBkYXRlZCBjb3B5IG9mIHByb3ZpZGVkIG92ZXJsYXkgc2V0dGluZ3NcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlT3ZlcmxheVNldHRpbmdzKHNldHRpbmdzOiBPdmVybGF5U2V0dGluZ3MpOiBPdmVybGF5U2V0dGluZ3Mge1xuICAgICAgICBpZiAoc2V0dGluZ3MgJiYgc2V0dGluZ3MucG9zaXRpb25TdHJhdGVneSkge1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25TdHJhdGVneUNsb25lOiBJUG9zaXRpb25TdHJhdGVneSA9IHNldHRpbmdzLnBvc2l0aW9uU3RyYXRlZ3kuY2xvbmUoKTtcbiAgICAgICAgICAgIHBvc2l0aW9uU3RyYXRlZ3lDbG9uZS5zZXR0aW5ncy50YXJnZXQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIHNldHRpbmdzLnBvc2l0aW9uU3RyYXRlZ3kgPSBwb3NpdGlvblN0cmF0ZWd5Q2xvbmU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2V0dGluZ3M7XG4gICAgfVxufVxuXG4vKipcbiAqIE1hcmsgYW4gZWxlbWVudCBhcyBhbiBpZ3hPdmVybGF5IG91dGxldCBjb250YWluZXIuXG4gKiBEaXJlY3RpdmUgaW5zdGFuY2UgaXMgZXhwb3J0ZWQgYXMgYG92ZXJsYXktb3V0bGV0YCB0byBiZSBhc3NpZ25lZCB0byB0ZW1wbGF0ZXMgdmFyaWFibGVzOlxuICogYGBgaHRtbFxuICogPGRpdiBpZ3hPdmVybGF5T3V0bGV0ICNvdXRsZXQ9XCJvdmVybGF5LW91dGxldFwiPjwvZGl2PlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIGV4cG9ydEFzOiAnb3ZlcmxheS1vdXRsZXQnLFxuICAgIHNlbGVjdG9yOiAnW2lneE92ZXJsYXlPdXRsZXRdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hPdmVybGF5T3V0bGV0RGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZikgeyB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIHB1YmxpYyBnZXQgbmF0aXZlRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSWd4VG9nZ2xlRGlyZWN0aXZlLCBJZ3hUb2dnbGVBY3Rpb25EaXJlY3RpdmUsIElneE92ZXJsYXlPdXRsZXREaXJlY3RpdmVdLFxuICAgIGV4cG9ydHM6IFtJZ3hUb2dnbGVEaXJlY3RpdmUsIElneFRvZ2dsZUFjdGlvbkRpcmVjdGl2ZSwgSWd4T3ZlcmxheU91dGxldERpcmVjdGl2ZV0sXG4gICAgcHJvdmlkZXJzOiBbSWd4TmF2aWdhdGlvblNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIElneFRvZ2dsZU1vZHVsZSB7IH1cbiJdfQ==