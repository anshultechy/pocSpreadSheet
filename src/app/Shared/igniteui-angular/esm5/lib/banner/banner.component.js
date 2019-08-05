/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, NgModule, EventEmitter, Output, Input, ViewChild, ElementRef, ContentChild, HostBinding } from '@angular/core';
import { IgxExpansionPanelModule } from '../expansion-panel/expansion-panel.module';
import { IgxExpansionPanelComponent } from '../expansion-panel';
import { IgxIconModule, IgxIconComponent } from '../icon/index';
import { IgxButtonModule } from '../directives/button/button.directive';
import { IgxRippleModule } from '../directives/ripple/ripple.directive';
import { IgxBannerActionsDirective } from './banner.directives';
import { CommonModule } from '@angular/common';
/**
 * @record
 */
export function BannerEventArgs() { }
if (false) {
    /** @type {?} */
    BannerEventArgs.prototype.banner;
    /** @type {?|undefined} */
    BannerEventArgs.prototype.event;
}
/**
 * @record
 */
export function BannerCancelEventArgs() { }
/**
 * **Ignite UI for Angular Banner** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/banner.html)
 *
 * The Ignite UI Banner provides a highly templateable and easy to use banner that can be shown in your application.
 *
 * Usage:
 *
 * ```html
 * <igx-banner #banner>
 *   Our privacy settings have changed.
 *  <igx-banner-actions>
 *      <button igxButton="raised">Read More</button>
 *      <button igxButton="raised">Accept and Continue</button>
 *  </igx-banner-actions>
 * </igx-banner>
 * ```
 */
var IgxBannerComponent = /** @class */ (function () {
    function IgxBannerComponent(elementRef) {
        this.elementRef = elementRef;
        /**
         * Fires after the banner shows up
         * ```typescript
         * public handleOpened(event) {
         *  ...
         * }
         * ```
         * ```html
         * <igx-banner (onOpened)="handleOpened($event)"></igx-banner>
         * ```
         */
        this.onOpened = new EventEmitter();
        /**
         * Fires before the banner shows up
         * ```typescript
         * public handleOpening(event) {
         *  ...
         * }
         * ```
         * ```html
         * <igx-banner (onOpening)="handleOpening($event)"></igx-banner>
         * ```
         */
        this.onOpening = new EventEmitter();
        /**
         * Fires after the banner hides
         * ```typescript
         * public handleClosed(event) {
         *  ...
         * }
         * ```
         * ```html
         * <igx-banner (onClosed)="handleClosed($event)"></igx-banner>
         * ```
         */
        this.onClosed = new EventEmitter();
        /**
         * Fires before the banner hides
         * ```typescript
         * public handleClosing(event) {
         *  ...
         * }
         * ```
         * ```html
         * <igx-banner (onClosing)="handleClosing($event)"></igx-banner>
         * ```
         */
        this.onClosing = new EventEmitter();
    }
    Object.defineProperty(IgxBannerComponent.prototype, "useDefaultTemplate", {
        /** @hidden */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return !this._bannerActionTemplate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxBannerComponent.prototype, "animationSettings", {
        /**
         * Get the animation settings used by the banner open/close methods
         * ```typescript
         * let currentAnimations: AnimationSettings = banner.animationSettings
         * ```
         */
        get: /**
         * Get the animation settings used by the banner open/close methods
         * ```typescript
         * let currentAnimations: AnimationSettings = banner.animationSettings
         * ```
         * @return {?}
         */
        function () {
            return this._animationSettings ? this._animationSettings : this._expansionPanel.animationSettings;
        },
        /**
         * Set the animation settings used by the banner open/close methods
         * ```typescript
         * import { slideInLeft, slideOutRight } from 'igniteui-angular';
         * ...
         * banner.animationSettings: AnimationSettings = { openAnimation: slideInLeft, closeAnimation: slideOutRight };
         * ```
         */
        set: /**
         * Set the animation settings used by the banner open/close methods
         * ```typescript
         * import { slideInLeft, slideOutRight } from 'igniteui-angular';
         * ...
         * banner.animationSettings: AnimationSettings = { openAnimation: slideInLeft, closeAnimation: slideOutRight };
         * ```
         * @param {?} settings
         * @return {?}
         */
        function (settings) {
            this._animationSettings = settings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxBannerComponent.prototype, "collapsed", {
        /**
         * Gets whether banner is collapsed
         *
         * ```typescript
         * const isCollapsed: boolean = banner.collapsed;
         * ```
         */
        get: /**
         * Gets whether banner is collapsed
         *
         * ```typescript
         * const isCollapsed: boolean = banner.collapsed;
         * ```
         * @return {?}
         */
        function () {
            return this._expansionPanel.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxBannerComponent.prototype, "element", {
        /**
         * Returns the native element of the banner component
         * ```typescript
         *  const myBannerElement: HTMLElement = banner.element;
         * ```
         */
        get: /**
         * Returns the native element of the banner component
         * ```typescript
         *  const myBannerElement: HTMLElement = banner.element;
         * ```
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxBannerComponent.prototype, "displayStyle", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.collapsed ? '' : 'block';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens the banner
     *
     * ```typescript
     *  myBanner.open();
     * ```
     *
     * ```html
     * <igx-banner #banner>
     * ...
     * </igx-banner>
     * <button (click)="banner.open()">Open Banner</button>
     * ```
     */
    /**
     * Opens the banner
     *
     * ```typescript
     *  myBanner.open();
     * ```
     *
     * ```html
     * <igx-banner #banner>
     * ...
     * </igx-banner>
     * <button (click)="banner.open()">Open Banner</button>
     * ```
     * @param {?=} event
     * @return {?}
     */
    IgxBannerComponent.prototype.open = /**
     * Opens the banner
     *
     * ```typescript
     *  myBanner.open();
     * ```
     *
     * ```html
     * <igx-banner #banner>
     * ...
     * </igx-banner>
     * <button (click)="banner.open()">Open Banner</button>
     * ```
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        this._bannerEvent = { banner: this, event: event };
        /** @type {?} */
        var openingArgs = {
            banner: this,
            event: event,
            cancel: false
        };
        this.onOpening.emit(openingArgs);
        if (openingArgs.cancel) {
            return;
        }
        this._expansionPanel.open(event);
    };
    /**
     * Closes the banner
     *
     * ```typescript
     *  myBanner.close();
     * ```
     *
     * ```html
     * <igx-banner #banner>
     * ...
     * </igx-banner>
     * <button (click)="banner.close()">Close Banner</button>
     * ```
     */
    /**
     * Closes the banner
     *
     * ```typescript
     *  myBanner.close();
     * ```
     *
     * ```html
     * <igx-banner #banner>
     * ...
     * </igx-banner>
     * <button (click)="banner.close()">Close Banner</button>
     * ```
     * @param {?=} event
     * @return {?}
     */
    IgxBannerComponent.prototype.close = /**
     * Closes the banner
     *
     * ```typescript
     *  myBanner.close();
     * ```
     *
     * ```html
     * <igx-banner #banner>
     * ...
     * </igx-banner>
     * <button (click)="banner.close()">Close Banner</button>
     * ```
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        this._bannerEvent = { banner: this, event: event };
        /** @type {?} */
        var closingArgs = {
            banner: this,
            event: event,
            cancel: false
        };
        this.onClosing.emit(closingArgs);
        if (closingArgs.cancel) {
            return;
        }
        this._expansionPanel.close(event);
    };
    /**
     * Toggles the banner
     *
     * ```typescript
     *  myBanner.toggle();
     * ```
     *
     * ```html
     * <igx-banner #banner>
     * ...
     * </igx-banner>
     * <button (click)="banner.toggle()">Toggle Banner</button>
     * ```
     */
    /**
     * Toggles the banner
     *
     * ```typescript
     *  myBanner.toggle();
     * ```
     *
     * ```html
     * <igx-banner #banner>
     * ...
     * </igx-banner>
     * <button (click)="banner.toggle()">Toggle Banner</button>
     * ```
     * @param {?=} event
     * @return {?}
     */
    IgxBannerComponent.prototype.toggle = /**
     * Toggles the banner
     *
     * ```typescript
     *  myBanner.toggle();
     * ```
     *
     * ```html
     * <igx-banner #banner>
     * ...
     * </igx-banner>
     * <button (click)="banner.toggle()">Toggle Banner</button>
     * ```
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        if (this.collapsed) {
            this.open(event);
        }
        else {
            this.close(event);
        }
    };
    /** @hidden */
    /**
     * @hidden
     * @return {?}
     */
    IgxBannerComponent.prototype.onExpansionPanelOpen = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.onOpened.emit(this._bannerEvent);
    };
    /** @hidden */
    /**
     * @hidden
     * @return {?}
     */
    IgxBannerComponent.prototype.onExpansionPanelClose = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.onClosed.emit(this._bannerEvent);
    };
    IgxBannerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-banner',
                    template: "<igx-expansion-panel #expansionPanel [animationSettings]=\"animationSettings\" (onCollapsed)=\"onExpansionPanelClose()\" (onExpanded)=\"onExpansionPanelOpen()\"\n    [collapsed]=\"collapsed\" aria-live=\"polite\" [attr.aria-hidden]=\"collapsed\">\n    <igx-expansion-panel-body>\n        <div class=\"igx-banner\">\n            <div class=\"igx-banner__message\">\n                <div *ngIf=\"bannerIcon\" class=\"igx-banner__illustration\">\n                    <ng-content select=\"igx-icon\"></ng-content>\n                </div>\n                <span class=\"igx-banner__text\">\n                    <ng-content></ng-content>\n                </span>\n            </div>\n            <div class=\"igx-banner__actions\">\n                <div class=\"igx-banner__row\">\n                    <ng-container *ngIf=\"useDefaultTemplate\">\n                        <button igxButton=\"flat\" igxRipple (click)=\"close()\">\n                            Dismiss\n                        </button>\n                    </ng-container>\n                    <ng-container *ngIf=\"!useDefaultTemplate\">\n                        <ng-content select=\"igx-banner-actions\"></ng-content>\n                    </ng-container>\n                </div>\n            </div>\n        </div>\n    </igx-expansion-panel-body>\n</igx-expansion-panel>"
                }] }
    ];
    /** @nocollapse */
    IgxBannerComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    IgxBannerComponent.propDecorators = {
        _expansionPanel: [{ type: ViewChild, args: ['expansionPanel', { static: true },] }],
        _bannerActionTemplate: [{ type: ContentChild, args: [IgxBannerActionsDirective, { static: true },] }],
        bannerIcon: [{ type: ContentChild, args: [IgxIconComponent, { static: true },] }],
        onOpened: [{ type: Output }],
        onOpening: [{ type: Output }],
        onClosed: [{ type: Output }],
        onClosing: [{ type: Output }],
        animationSettings: [{ type: Input }],
        displayStyle: [{ type: HostBinding, args: ['style.display',] }]
    };
    return IgxBannerComponent;
}());
export { IgxBannerComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxBannerComponent.prototype._bannerEvent;
    /**
     * @type {?}
     * @private
     */
    IgxBannerComponent.prototype._animationSettings;
    /**
     * @type {?}
     * @private
     */
    IgxBannerComponent.prototype._expansionPanel;
    /**
     * @type {?}
     * @private
     */
    IgxBannerComponent.prototype._bannerActionTemplate;
    /**
     * @hidden
     * @type {?}
     */
    IgxBannerComponent.prototype.bannerIcon;
    /**
     * Fires after the banner shows up
     * ```typescript
     * public handleOpened(event) {
     *  ...
     * }
     * ```
     * ```html
     * <igx-banner (onOpened)="handleOpened($event)"></igx-banner>
     * ```
     * @type {?}
     */
    IgxBannerComponent.prototype.onOpened;
    /**
     * Fires before the banner shows up
     * ```typescript
     * public handleOpening(event) {
     *  ...
     * }
     * ```
     * ```html
     * <igx-banner (onOpening)="handleOpening($event)"></igx-banner>
     * ```
     * @type {?}
     */
    IgxBannerComponent.prototype.onOpening;
    /**
     * Fires after the banner hides
     * ```typescript
     * public handleClosed(event) {
     *  ...
     * }
     * ```
     * ```html
     * <igx-banner (onClosed)="handleClosed($event)"></igx-banner>
     * ```
     * @type {?}
     */
    IgxBannerComponent.prototype.onClosed;
    /**
     * Fires before the banner hides
     * ```typescript
     * public handleClosing(event) {
     *  ...
     * }
     * ```
     * ```html
     * <igx-banner (onClosing)="handleClosing($event)"></igx-banner>
     * ```
     * @type {?}
     */
    IgxBannerComponent.prototype.onClosing;
    /** @type {?} */
    IgxBannerComponent.prototype.elementRef;
}
/**
 * @hidden
 */
var IgxBannerModule = /** @class */ (function () {
    function IgxBannerModule() {
    }
    IgxBannerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxBannerComponent, IgxBannerActionsDirective],
                    exports: [IgxBannerComponent, IgxBannerActionsDirective],
                    imports: [CommonModule, IgxExpansionPanelModule, IgxIconModule, IgxButtonModule, IgxRippleModule]
                },] }
    ];
    return IgxBannerModule;
}());
export { IgxBannerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvYmFubmVyL2Jhbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQzVFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUcvQyxxQ0FHQzs7O0lBRkcsaUNBQTJCOztJQUMzQixnQ0FBYzs7Ozs7QUFHbEIsMkNBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkQ7SUFvSUksNEJBQW1CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7Ozs7Ozs7Ozs7OztRQXBHbEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7UUFjL0MsY0FBUyxHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7UUFjdEQsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7UUFjL0MsY0FBUyxHQUFHLElBQUksWUFBWSxF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QzhCLHNCQUFDO0NBQUEsQUFMaEMsSUFLZ0M7U0FBbkIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgTmdNb2R1bGUsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLFxuICAgIENvbnRlbnRDaGlsZCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneEV4cGFuc2lvblBhbmVsTW9kdWxlIH0gZnJvbSAnLi4vZXhwYW5zaW9uLXBhbmVsL2V4cGFuc2lvbi1wYW5lbC5tb2R1bGUnO1xuaW1wb3J0IHsgQW5pbWF0aW9uU2V0dGluZ3MgfSBmcm9tICcuLi9leHBhbnNpb24tcGFuZWwvZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hFeHBhbnNpb25QYW5lbENvbXBvbmVudCB9IGZyb20gJy4uL2V4cGFuc2lvbi1wYW5lbCc7XG5pbXBvcnQgeyBJZ3hJY29uTW9kdWxlLCBJZ3hJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBJVG9nZ2xlVmlldyB9IGZyb20gJy4uL2NvcmUvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBJZ3hCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2J1dHRvbi9idXR0b24uZGlyZWN0aXZlJztcbmltcG9ydCB7IElneFJpcHBsZU1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvcmlwcGxlL3JpcHBsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4QmFubmVyQWN0aW9uc0RpcmVjdGl2ZSB9IGZyb20gJy4vYmFubmVyLmRpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENhbmNlbGFibGVFdmVudEFyZ3MgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBCYW5uZXJFdmVudEFyZ3Mge1xuICAgIGJhbm5lcjogSWd4QmFubmVyQ29tcG9uZW50O1xuICAgIGV2ZW50PzogRXZlbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFubmVyQ2FuY2VsRXZlbnRBcmdzIGV4dGVuZHMgQmFubmVyRXZlbnRBcmdzLCBDYW5jZWxhYmxlRXZlbnRBcmdzIHtcbn1cbi8qKlxuICogKipJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgQmFubmVyKiogLVxuICogW0RvY3VtZW50YXRpb25dKGh0dHBzOi8vd3d3LmluZnJhZ2lzdGljcy5jb20vcHJvZHVjdHMvaWduaXRlLXVpLWFuZ3VsYXIvYW5ndWxhci9jb21wb25lbnRzL2Jhbm5lci5odG1sKVxuICpcbiAqIFRoZSBJZ25pdGUgVUkgQmFubmVyIHByb3ZpZGVzIGEgaGlnaGx5IHRlbXBsYXRlYWJsZSBhbmQgZWFzeSB0byB1c2UgYmFubmVyIHRoYXQgY2FuIGJlIHNob3duIGluIHlvdXIgYXBwbGljYXRpb24uXG4gKlxuICogVXNhZ2U6XG4gKlxuICogYGBgaHRtbFxuICogPGlneC1iYW5uZXIgI2Jhbm5lcj5cbiAqICAgT3VyIHByaXZhY3kgc2V0dGluZ3MgaGF2ZSBjaGFuZ2VkLlxuICogIDxpZ3gtYmFubmVyLWFjdGlvbnM+XG4gKiAgICAgIDxidXR0b24gaWd4QnV0dG9uPVwicmFpc2VkXCI+UmVhZCBNb3JlPC9idXR0b24+XG4gKiAgICAgIDxidXR0b24gaWd4QnV0dG9uPVwicmFpc2VkXCI+QWNjZXB0IGFuZCBDb250aW51ZTwvYnV0dG9uPlxuICogIDwvaWd4LWJhbm5lci1hY3Rpb25zPlxuICogPC9pZ3gtYmFubmVyPlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LWJhbm5lcicsXG4gICAgdGVtcGxhdGVVcmw6ICdiYW5uZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneEJhbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIElUb2dnbGVWaWV3IHtcbiAgICBwcml2YXRlIF9iYW5uZXJFdmVudDogQmFubmVyRXZlbnRBcmdzO1xuICAgIHByaXZhdGUgX2FuaW1hdGlvblNldHRpbmdzOiBBbmltYXRpb25TZXR0aW5ncztcblxuICAgIEBWaWV3Q2hpbGQoJ2V4cGFuc2lvblBhbmVsJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBwcml2YXRlIF9leHBhbnNpb25QYW5lbDogSWd4RXhwYW5zaW9uUGFuZWxDb21wb25lbnQ7XG5cbiAgICBAQ29udGVudENoaWxkKElneEJhbm5lckFjdGlvbnNEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBfYmFubmVyQWN0aW9uVGVtcGxhdGU6IElneEJhbm5lckFjdGlvbnNEaXJlY3RpdmU7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChJZ3hJY29uQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBiYW5uZXJJY29uOiBJZ3hJY29uQ29tcG9uZW50O1xuXG4gICAgLyoqXG4gICAgICogRmlyZXMgYWZ0ZXIgdGhlIGJhbm5lciBzaG93cyB1cFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBwdWJsaWMgaGFuZGxlT3BlbmVkKGV2ZW50KSB7XG4gICAgICogIC4uLlxuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1iYW5uZXIgKG9uT3BlbmVkKT1cImhhbmRsZU9wZW5lZCgkZXZlbnQpXCI+PC9pZ3gtYmFubmVyPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbk9wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXI8QmFubmVyRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRmlyZXMgYmVmb3JlIHRoZSBiYW5uZXIgc2hvd3MgdXBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogcHVibGljIGhhbmRsZU9wZW5pbmcoZXZlbnQpIHtcbiAgICAgKiAgLi4uXG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWJhbm5lciAob25PcGVuaW5nKT1cImhhbmRsZU9wZW5pbmcoJGV2ZW50KVwiPjwvaWd4LWJhbm5lcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25PcGVuaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxCYW5uZXJDYW5jZWxFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyBhZnRlciB0aGUgYmFubmVyIGhpZGVzXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHB1YmxpYyBoYW5kbGVDbG9zZWQoZXZlbnQpIHtcbiAgICAgKiAgLi4uXG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWJhbm5lciAob25DbG9zZWQpPVwiaGFuZGxlQ2xvc2VkKCRldmVudClcIj48L2lneC1iYW5uZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uQ2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxCYW5uZXJFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyBiZWZvcmUgdGhlIGJhbm5lciBoaWRlc1xuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBwdWJsaWMgaGFuZGxlQ2xvc2luZyhldmVudCkge1xuICAgICAqICAuLi5cbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtYmFubmVyIChvbkNsb3NpbmcpPVwiaGFuZGxlQ2xvc2luZygkZXZlbnQpXCI+PC9pZ3gtYmFubmVyPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkNsb3NpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPEJhbm5lckNhbmNlbEV2ZW50QXJncz4oKTtcblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHVibGljIGdldCB1c2VEZWZhdWx0VGVtcGxhdGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5fYmFubmVyQWN0aW9uVGVtcGxhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBhbmltYXRpb24gc2V0dGluZ3MgdXNlZCBieSB0aGUgYmFubmVyIG9wZW4vY2xvc2UgbWV0aG9kc1xuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY3VycmVudEFuaW1hdGlvbnM6IEFuaW1hdGlvblNldHRpbmdzID0gYmFubmVyLmFuaW1hdGlvblNldHRpbmdzXG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGFuaW1hdGlvblNldHRpbmdzKCk6IEFuaW1hdGlvblNldHRpbmdzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuaW1hdGlvblNldHRpbmdzID8gdGhpcy5fYW5pbWF0aW9uU2V0dGluZ3MgOiB0aGlzLl9leHBhbnNpb25QYW5lbC5hbmltYXRpb25TZXR0aW5ncztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGFuaW1hdGlvbiBzZXR0aW5ncyB1c2VkIGJ5IHRoZSBiYW5uZXIgb3Blbi9jbG9zZSBtZXRob2RzXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGltcG9ydCB7IHNsaWRlSW5MZWZ0LCBzbGlkZU91dFJpZ2h0IH0gZnJvbSAnaWduaXRldWktYW5ndWxhcic7XG4gICAgICogLi4uXG4gICAgICogYmFubmVyLmFuaW1hdGlvblNldHRpbmdzOiBBbmltYXRpb25TZXR0aW5ncyA9IHsgb3BlbkFuaW1hdGlvbjogc2xpZGVJbkxlZnQsIGNsb3NlQW5pbWF0aW9uOiBzbGlkZU91dFJpZ2h0IH07XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHNldCBhbmltYXRpb25TZXR0aW5ncyhzZXR0aW5nczogQW5pbWF0aW9uU2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uU2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIGJhbm5lciBpcyBjb2xsYXBzZWRcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBpc0NvbGxhcHNlZDogYm9vbGVhbiA9IGJhbm5lci5jb2xsYXBzZWQ7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCBjb2xsYXBzZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9leHBhbnNpb25QYW5lbC5jb2xsYXBzZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmF0aXZlIGVsZW1lbnQgb2YgdGhlIGJhbm5lciBjb21wb25lbnRcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIGNvbnN0IG15QmFubmVyRWxlbWVudDogSFRNTEVsZW1lbnQgPSBiYW5uZXIuZWxlbWVudDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JylcbiAgICBwdWJsaWMgZ2V0IGRpc3BsYXlTdHlsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsYXBzZWQgPyAnJyA6ICdibG9jayc7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgdGhlIGJhbm5lclxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICBteUJhbm5lci5vcGVuKCk7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1iYW5uZXIgI2Jhbm5lcj5cbiAgICAgKiAuLi5cbiAgICAgKiA8L2lneC1iYW5uZXI+XG4gICAgICogPGJ1dHRvbiAoY2xpY2spPVwiYmFubmVyLm9wZW4oKVwiPk9wZW4gQmFubmVyPC9idXR0b24+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIG9wZW4oZXZlbnQ/OiBFdmVudCkge1xuICAgICAgICB0aGlzLl9iYW5uZXJFdmVudCA9IHsgYmFubmVyOiB0aGlzLCBldmVudH07XG4gICAgICAgIGNvbnN0IG9wZW5pbmdBcmdzID0ge1xuICAgICAgICAgICAgYmFubmVyOiB0aGlzLFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBjYW5jZWw6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25PcGVuaW5nLmVtaXQob3BlbmluZ0FyZ3MpO1xuICAgICAgICBpZiAob3BlbmluZ0FyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZXhwYW5zaW9uUGFuZWwub3BlbihldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSBiYW5uZXJcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgbXlCYW5uZXIuY2xvc2UoKTtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWJhbm5lciAjYmFubmVyPlxuICAgICAqIC4uLlxuICAgICAqIDwvaWd4LWJhbm5lcj5cbiAgICAgKiA8YnV0dG9uIChjbGljayk9XCJiYW5uZXIuY2xvc2UoKVwiPkNsb3NlIEJhbm5lcjwvYnV0dG9uPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBjbG9zZShldmVudD86IEV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2Jhbm5lckV2ZW50ID0geyBiYW5uZXI6IHRoaXMsIGV2ZW50fTtcbiAgICAgICAgY29uc3QgY2xvc2luZ0FyZ3MgPSB7XG4gICAgICAgICAgICBiYW5uZXI6IHRoaXMsXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIGNhbmNlbDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkNsb3NpbmcuZW1pdChjbG9zaW5nQXJncyk7XG4gICAgICAgIGlmIChjbG9zaW5nQXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9leHBhbnNpb25QYW5lbC5jbG9zZShldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgYmFubmVyXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIG15QmFubmVyLnRvZ2dsZSgpO1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtYmFubmVyICNiYW5uZXI+XG4gICAgICogLi4uXG4gICAgICogPC9pZ3gtYmFubmVyPlxuICAgICAqIDxidXR0b24gKGNsaWNrKT1cImJhbm5lci50b2dnbGUoKVwiPlRvZ2dsZSBCYW5uZXI8L2J1dHRvbj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICB0b2dnbGUoZXZlbnQ/OiBFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5jb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbihldmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHVibGljIG9uRXhwYW5zaW9uUGFuZWxPcGVuKCkge1xuICAgICAgICB0aGlzLm9uT3BlbmVkLmVtaXQodGhpcy5fYmFubmVyRXZlbnQpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHVibGljIG9uRXhwYW5zaW9uUGFuZWxDbG9zZSgpIHtcbiAgICAgICAgdGhpcy5vbkNsb3NlZC5lbWl0KHRoaXMuX2Jhbm5lckV2ZW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneEJhbm5lckNvbXBvbmVudCwgSWd4QmFubmVyQWN0aW9uc0RpcmVjdGl2ZV0sXG4gICAgZXhwb3J0czogW0lneEJhbm5lckNvbXBvbmVudCwgSWd4QmFubmVyQWN0aW9uc0RpcmVjdGl2ZV0sXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSWd4RXhwYW5zaW9uUGFuZWxNb2R1bGUsIElneEljb25Nb2R1bGUsIElneEJ1dHRvbk1vZHVsZSwgSWd4UmlwcGxlTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hCYW5uZXJNb2R1bGUgeyB9XG4iXX0=