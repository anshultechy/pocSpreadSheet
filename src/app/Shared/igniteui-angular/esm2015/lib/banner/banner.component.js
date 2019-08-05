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
export class IgxBannerComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
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
    /**
     * @hidden
     * @return {?}
     */
    get useDefaultTemplate() {
        return !this._bannerActionTemplate;
    }
    /**
     * Get the animation settings used by the banner open/close methods
     * ```typescript
     * let currentAnimations: AnimationSettings = banner.animationSettings
     * ```
     * @return {?}
     */
    get animationSettings() {
        return this._animationSettings ? this._animationSettings : this._expansionPanel.animationSettings;
    }
    /**
     * Set the animation settings used by the banner open/close methods
     * ```typescript
     * import { slideInLeft, slideOutRight } from 'igniteui-angular';
     * ...
     * banner.animationSettings: AnimationSettings = { openAnimation: slideInLeft, closeAnimation: slideOutRight };
     * ```
     * @param {?} settings
     * @return {?}
     */
    set animationSettings(settings) {
        this._animationSettings = settings;
    }
    /**
     * Gets whether banner is collapsed
     *
     * ```typescript
     * const isCollapsed: boolean = banner.collapsed;
     * ```
     * @return {?}
     */
    get collapsed() {
        return this._expansionPanel.collapsed;
    }
    /**
     * Returns the native element of the banner component
     * ```typescript
     *  const myBannerElement: HTMLElement = banner.element;
     * ```
     * @return {?}
     */
    get element() {
        return this.elementRef.nativeElement;
    }
    /**
     * @hidden
     * @return {?}
     */
    get displayStyle() {
        return this.collapsed ? '' : 'block';
    }
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
    open(event) {
        this._bannerEvent = { banner: this, event };
        /** @type {?} */
        const openingArgs = {
            banner: this,
            event,
            cancel: false
        };
        this.onOpening.emit(openingArgs);
        if (openingArgs.cancel) {
            return;
        }
        this._expansionPanel.open(event);
    }
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
    close(event) {
        this._bannerEvent = { banner: this, event };
        /** @type {?} */
        const closingArgs = {
            banner: this,
            event,
            cancel: false
        };
        this.onClosing.emit(closingArgs);
        if (closingArgs.cancel) {
            return;
        }
        this._expansionPanel.close(event);
    }
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
    toggle(event) {
        if (this.collapsed) {
            this.open(event);
        }
        else {
            this.close(event);
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    onExpansionPanelOpen() {
        this.onOpened.emit(this._bannerEvent);
    }
    /**
     * @hidden
     * @return {?}
     */
    onExpansionPanelClose() {
        this.onClosed.emit(this._bannerEvent);
    }
}
IgxBannerComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-banner',
                template: "<igx-expansion-panel #expansionPanel [animationSettings]=\"animationSettings\" (onCollapsed)=\"onExpansionPanelClose()\" (onExpanded)=\"onExpansionPanelOpen()\"\n    [collapsed]=\"collapsed\" aria-live=\"polite\" [attr.aria-hidden]=\"collapsed\">\n    <igx-expansion-panel-body>\n        <div class=\"igx-banner\">\n            <div class=\"igx-banner__message\">\n                <div *ngIf=\"bannerIcon\" class=\"igx-banner__illustration\">\n                    <ng-content select=\"igx-icon\"></ng-content>\n                </div>\n                <span class=\"igx-banner__text\">\n                    <ng-content></ng-content>\n                </span>\n            </div>\n            <div class=\"igx-banner__actions\">\n                <div class=\"igx-banner__row\">\n                    <ng-container *ngIf=\"useDefaultTemplate\">\n                        <button igxButton=\"flat\" igxRipple (click)=\"close()\">\n                            Dismiss\n                        </button>\n                    </ng-container>\n                    <ng-container *ngIf=\"!useDefaultTemplate\">\n                        <ng-content select=\"igx-banner-actions\"></ng-content>\n                    </ng-container>\n                </div>\n            </div>\n        </div>\n    </igx-expansion-panel-body>\n</igx-expansion-panel>"
            }] }
];
/** @nocollapse */
IgxBannerComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
export class IgxBannerModule {
}
IgxBannerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxBannerComponent, IgxBannerActionsDirective],
                exports: [IgxBannerComponent, IgxBannerActionsDirective],
                imports: [CommonModule, IgxExpansionPanelModule, IgxIconModule, IgxButtonModule, IgxRippleModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvYmFubmVyL2Jhbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQzVFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUcvQyxxQ0FHQzs7O0lBRkcsaUNBQTJCOztJQUMzQixnQ0FBYzs7Ozs7QUFHbEIsMkNBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkQsTUFBTSxPQUFPLGtCQUFrQjs7OztJQWdJM0IsWUFBbUIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTs7Ozs7Ozs7Ozs7O1FBcEdsQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7Ozs7Ozs7Ozs7OztRQWMvQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUM7Ozs7Ozs7Ozs7OztRQWN0RCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7Ozs7Ozs7Ozs7OztRQWMvQyxj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eUJBTXhELFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7dUJBYy9DLE1BQU07d0JBY04sTUFBTTt1QkFjTixNQUFNO3dCQWNOLE1BQU07Z0NBY04sS0FBSzsyQkF3Q0wsV0FBVyxTQUFDLGVBQWU7Ozs7Ozs7SUExSDVCLDBDQUFzQzs7Ozs7SUFDdEMsZ0RBQThDOzs7OztJQUU5Qyw2Q0FDb0Q7Ozs7O0lBRXBELG1EQUN5RDs7Ozs7SUFLekQsd0NBQ29DOzs7Ozs7Ozs7Ozs7O0lBYXBDLHNDQUNzRDs7Ozs7Ozs7Ozs7OztJQWF0RCx1Q0FDNkQ7Ozs7Ozs7Ozs7Ozs7SUFhN0Qsc0NBQ3NEOzs7Ozs7Ozs7Ozs7O0lBYXRELHVDQUM2RDs7SUEwRGpELHdDQUE2Qjs7Ozs7QUFtRzdDLE1BQU0sT0FBTyxlQUFlOzs7WUFMM0IsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLHlCQUF5QixDQUFDO2dCQUM3RCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSx5QkFBeUIsQ0FBQztnQkFDeEQsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLHVCQUF1QixFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDO2FBQ3BHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ01vZHVsZSwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsXG4gICAgQ29udGVudENoaWxkLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4RXhwYW5zaW9uUGFuZWxNb2R1bGUgfSBmcm9tICcuLi9leHBhbnNpb24tcGFuZWwvZXhwYW5zaW9uLXBhbmVsLm1vZHVsZSc7XG5pbXBvcnQgeyBBbmltYXRpb25TZXR0aW5ncyB9IGZyb20gJy4uL2V4cGFuc2lvbi1wYW5lbC9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IElneEV4cGFuc2lvblBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi4vZXhwYW5zaW9uLXBhbmVsJztcbmltcG9ydCB7IElneEljb25Nb2R1bGUsIElneEljb25Db21wb25lbnQgfSBmcm9tICcuLi9pY29uL2luZGV4JztcbmltcG9ydCB7IElUb2dnbGVWaWV3IH0gZnJvbSAnLi4vY29yZS9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IElneEJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvYnV0dG9uL2J1dHRvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4UmlwcGxlTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9yaXBwbGUvcmlwcGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hCYW5uZXJBY3Rpb25zRGlyZWN0aXZlIH0gZnJvbSAnLi9iYW5uZXIuZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2FuY2VsYWJsZUV2ZW50QXJncyB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhbm5lckV2ZW50QXJncyB7XG4gICAgYmFubmVyOiBJZ3hCYW5uZXJDb21wb25lbnQ7XG4gICAgZXZlbnQ/OiBFdmVudDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYW5uZXJDYW5jZWxFdmVudEFyZ3MgZXh0ZW5kcyBCYW5uZXJFdmVudEFyZ3MsIENhbmNlbGFibGVFdmVudEFyZ3Mge1xufVxuLyoqXG4gKiAqKklnbml0ZSBVSSBmb3IgQW5ndWxhciBCYW5uZXIqKiAtXG4gKiBbRG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly93d3cuaW5mcmFnaXN0aWNzLmNvbS9wcm9kdWN0cy9pZ25pdGUtdWktYW5ndWxhci9hbmd1bGFyL2NvbXBvbmVudHMvYmFubmVyLmh0bWwpXG4gKlxuICogVGhlIElnbml0ZSBVSSBCYW5uZXIgcHJvdmlkZXMgYSBoaWdobHkgdGVtcGxhdGVhYmxlIGFuZCBlYXN5IHRvIHVzZSBiYW5uZXIgdGhhdCBjYW4gYmUgc2hvd24gaW4geW91ciBhcHBsaWNhdGlvbi5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiBgYGBodG1sXG4gKiA8aWd4LWJhbm5lciAjYmFubmVyPlxuICogICBPdXIgcHJpdmFjeSBzZXR0aW5ncyBoYXZlIGNoYW5nZWQuXG4gKiAgPGlneC1iYW5uZXItYWN0aW9ucz5cbiAqICAgICAgPGJ1dHRvbiBpZ3hCdXR0b249XCJyYWlzZWRcIj5SZWFkIE1vcmU8L2J1dHRvbj5cbiAqICAgICAgPGJ1dHRvbiBpZ3hCdXR0b249XCJyYWlzZWRcIj5BY2NlcHQgYW5kIENvbnRpbnVlPC9idXR0b24+XG4gKiAgPC9pZ3gtYmFubmVyLWFjdGlvbnM+XG4gKiA8L2lneC1iYW5uZXI+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtYmFubmVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2Jhbm5lci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4QmFubmVyQ29tcG9uZW50IGltcGxlbWVudHMgSVRvZ2dsZVZpZXcge1xuICAgIHByaXZhdGUgX2Jhbm5lckV2ZW50OiBCYW5uZXJFdmVudEFyZ3M7XG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uU2V0dGluZ3M6IEFuaW1hdGlvblNldHRpbmdzO1xuXG4gICAgQFZpZXdDaGlsZCgnZXhwYW5zaW9uUGFuZWwnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByaXZhdGUgX2V4cGFuc2lvblBhbmVsOiBJZ3hFeHBhbnNpb25QYW5lbENvbXBvbmVudDtcblxuICAgIEBDb250ZW50Q2hpbGQoSWd4QmFubmVyQWN0aW9uc0RpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBwcml2YXRlIF9iYW5uZXJBY3Rpb25UZW1wbGF0ZTogSWd4QmFubmVyQWN0aW9uc0RpcmVjdGl2ZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneEljb25Db21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGJhbm5lckljb246IElneEljb25Db21wb25lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyBhZnRlciB0aGUgYmFubmVyIHNob3dzIHVwXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHB1YmxpYyBoYW5kbGVPcGVuZWQoZXZlbnQpIHtcbiAgICAgKiAgLi4uXG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWJhbm5lciAob25PcGVuZWQpPVwiaGFuZGxlT3BlbmVkKCRldmVudClcIj48L2lneC1iYW5uZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uT3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxCYW5uZXJFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyBiZWZvcmUgdGhlIGJhbm5lciBzaG93cyB1cFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBwdWJsaWMgaGFuZGxlT3BlbmluZyhldmVudCkge1xuICAgICAqICAuLi5cbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtYmFubmVyIChvbk9wZW5pbmcpPVwiaGFuZGxlT3BlbmluZygkZXZlbnQpXCI+PC9pZ3gtYmFubmVyPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbk9wZW5pbmcgPSBuZXcgRXZlbnRFbWl0dGVyPEJhbm5lckNhbmNlbEV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEZpcmVzIGFmdGVyIHRoZSBiYW5uZXIgaGlkZXNcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogcHVibGljIGhhbmRsZUNsb3NlZChldmVudCkge1xuICAgICAqICAuLi5cbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtYmFubmVyIChvbkNsb3NlZCk9XCJoYW5kbGVDbG9zZWQoJGV2ZW50KVwiPjwvaWd4LWJhbm5lcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25DbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEJhbm5lckV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEZpcmVzIGJlZm9yZSB0aGUgYmFubmVyIGhpZGVzXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHB1YmxpYyBoYW5kbGVDbG9zaW5nKGV2ZW50KSB7XG4gICAgICogIC4uLlxuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1iYW5uZXIgKG9uQ2xvc2luZyk9XCJoYW5kbGVDbG9zaW5nKCRldmVudClcIj48L2lneC1iYW5uZXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uQ2xvc2luZyA9IG5ldyBFdmVudEVtaXR0ZXI8QmFubmVyQ2FuY2VsRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBwdWJsaWMgZ2V0IHVzZURlZmF1bHRUZW1wbGF0ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLl9iYW5uZXJBY3Rpb25UZW1wbGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGFuaW1hdGlvbiBzZXR0aW5ncyB1c2VkIGJ5IHRoZSBiYW5uZXIgb3Blbi9jbG9zZSBtZXRob2RzXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjdXJyZW50QW5pbWF0aW9uczogQW5pbWF0aW9uU2V0dGluZ3MgPSBiYW5uZXIuYW5pbWF0aW9uU2V0dGluZ3NcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgYW5pbWF0aW9uU2V0dGluZ3MoKTogQW5pbWF0aW9uU2V0dGluZ3Mge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWF0aW9uU2V0dGluZ3MgPyB0aGlzLl9hbmltYXRpb25TZXR0aW5ncyA6IHRoaXMuX2V4cGFuc2lvblBhbmVsLmFuaW1hdGlvblNldHRpbmdzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgYW5pbWF0aW9uIHNldHRpbmdzIHVzZWQgYnkgdGhlIGJhbm5lciBvcGVuL2Nsb3NlIG1ldGhvZHNcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogaW1wb3J0IHsgc2xpZGVJbkxlZnQsIHNsaWRlT3V0UmlnaHQgfSBmcm9tICdpZ25pdGV1aS1hbmd1bGFyJztcbiAgICAgKiAuLi5cbiAgICAgKiBiYW5uZXIuYW5pbWF0aW9uU2V0dGluZ3M6IEFuaW1hdGlvblNldHRpbmdzID0geyBvcGVuQW5pbWF0aW9uOiBzbGlkZUluTGVmdCwgY2xvc2VBbmltYXRpb246IHNsaWRlT3V0UmlnaHQgfTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGFuaW1hdGlvblNldHRpbmdzKHNldHRpbmdzOiBBbmltYXRpb25TZXR0aW5ncykge1xuICAgICAgICB0aGlzLl9hbmltYXRpb25TZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHdoZXRoZXIgYmFubmVyIGlzIGNvbGxhcHNlZFxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGlzQ29sbGFwc2VkOiBib29sZWFuID0gYmFubmVyLmNvbGxhcHNlZDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGNvbGxhcHNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4cGFuc2lvblBhbmVsLmNvbGxhcHNlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBuYXRpdmUgZWxlbWVudCBvZiB0aGUgYmFubmVyIGNvbXBvbmVudFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgY29uc3QgbXlCYW5uZXJFbGVtZW50OiBIVE1MRWxlbWVudCA9IGJhbm5lci5lbGVtZW50O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKVxuICAgIHB1YmxpYyBnZXQgZGlzcGxheVN0eWxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxhcHNlZCA/ICcnIDogJ2Jsb2NrJztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVucyB0aGUgYmFubmVyXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIG15QmFubmVyLm9wZW4oKTtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWJhbm5lciAjYmFubmVyPlxuICAgICAqIC4uLlxuICAgICAqIDwvaWd4LWJhbm5lcj5cbiAgICAgKiA8YnV0dG9uIChjbGljayk9XCJiYW5uZXIub3BlbigpXCI+T3BlbiBCYW5uZXI8L2J1dHRvbj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgb3BlbihldmVudD86IEV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2Jhbm5lckV2ZW50ID0geyBiYW5uZXI6IHRoaXMsIGV2ZW50fTtcbiAgICAgICAgY29uc3Qgb3BlbmluZ0FyZ3MgPSB7XG4gICAgICAgICAgICBiYW5uZXI6IHRoaXMsXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIGNhbmNlbDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbk9wZW5pbmcuZW1pdChvcGVuaW5nQXJncyk7XG4gICAgICAgIGlmIChvcGVuaW5nQXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9leHBhbnNpb25QYW5lbC5vcGVuKGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIGJhbm5lclxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICBteUJhbm5lci5jbG9zZSgpO1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtYmFubmVyICNiYW5uZXI+XG4gICAgICogLi4uXG4gICAgICogPC9pZ3gtYmFubmVyPlxuICAgICAqIDxidXR0b24gKGNsaWNrKT1cImJhbm5lci5jbG9zZSgpXCI+Q2xvc2UgQmFubmVyPC9idXR0b24+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGNsb3NlKGV2ZW50PzogRXZlbnQpIHtcbiAgICAgICAgdGhpcy5fYmFubmVyRXZlbnQgPSB7IGJhbm5lcjogdGhpcywgZXZlbnR9O1xuICAgICAgICBjb25zdCBjbG9zaW5nQXJncyA9IHtcbiAgICAgICAgICAgIGJhbm5lcjogdGhpcyxcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgY2FuY2VsOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uQ2xvc2luZy5lbWl0KGNsb3NpbmdBcmdzKTtcbiAgICAgICAgaWYgKGNsb3NpbmdBcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2V4cGFuc2lvblBhbmVsLmNsb3NlKGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIHRoZSBiYW5uZXJcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgbXlCYW5uZXIudG9nZ2xlKCk7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1iYW5uZXIgI2Jhbm5lcj5cbiAgICAgKiAuLi5cbiAgICAgKiA8L2lneC1iYW5uZXI+XG4gICAgICogPGJ1dHRvbiAoY2xpY2spPVwiYmFubmVyLnRvZ2dsZSgpXCI+VG9nZ2xlIEJhbm5lcjwvYnV0dG9uPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHRvZ2dsZShldmVudD86IEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgdGhpcy5vcGVuKGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBwdWJsaWMgb25FeHBhbnNpb25QYW5lbE9wZW4oKSB7XG4gICAgICAgIHRoaXMub25PcGVuZWQuZW1pdCh0aGlzLl9iYW5uZXJFdmVudCk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBwdWJsaWMgb25FeHBhbnNpb25QYW5lbENsb3NlKCkge1xuICAgICAgICB0aGlzLm9uQ2xvc2VkLmVtaXQodGhpcy5fYmFubmVyRXZlbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSWd4QmFubmVyQ29tcG9uZW50LCBJZ3hCYW5uZXJBY3Rpb25zRGlyZWN0aXZlXSxcbiAgICBleHBvcnRzOiBbSWd4QmFubmVyQ29tcG9uZW50LCBJZ3hCYW5uZXJBY3Rpb25zRGlyZWN0aXZlXSxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBJZ3hFeHBhbnNpb25QYW5lbE1vZHVsZSwgSWd4SWNvbk1vZHVsZSwgSWd4QnV0dG9uTW9kdWxlLCBJZ3hSaXBwbGVNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIElneEJhbm5lck1vZHVsZSB7IH1cbiJdfQ==