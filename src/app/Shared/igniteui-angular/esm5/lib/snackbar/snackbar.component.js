/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { transition, trigger, useAnimation } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostBinding, Input, NgModule, NgZone, Output } from '@angular/core';
import { fadeIn, fadeOut, slideInBottom, slideOutBottom } from '../animations/main';
/** @type {?} */
var NEXT_ID = 0;
/**
 * **Ignite UI for Angular Snackbar** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/snackbar.html)
 *
 * The Ignite UI Snack Bar provides feedback about an operation with a single-line message, which can
 * include a link to an action such as Undo.
 *
 * Example:
 * ```html
 * <button (click)="snackbar.show()">Send message</button>
 * <div>
 *   <igx-snackbar #snackbar message="Message sent">
 *   </igx-snackbar>
 * </div>
 * ```
 */
var IgxSnackbarComponent = /** @class */ (function () {
    function IgxSnackbarComponent(zone) {
        this.zone = zone;
        /**
         * Sets/gets the `id` of the snackbar.
         * If not set, the `id` of the first snackbar component  will be `"igx-snackbar-0"`;
         * ```html
         * <igx-snackbar id = "Snackbar1"></igx-snackbar>
         * ```
         * ```typescript
         * let snackbarId = this.snackbar.id;
         * ```
         * \@memberof IgxSnackbarComponent
         */
        this.id = "igx-snackbar-" + NEXT_ID++;
        /**
         * Enables/Disables the visibility of the snackbar.
         * If not set, the `isVisible` attribute will have value `false`.
         * ```html
         * <igx-snackbar [isVisible] = "true"></igx-snackbar>
         * ```
         * ```typescript
         * let isVisible =  this.snackbar.isVisible;
         * ```
         */
        this.isVisible = false;
        /**
         * Sets/gets if the snackbar will be automatically hidden after the `displayTime` is over.
         * Default value is `true`.
         * ```html
         * <igx-snackbar [autoHide] = "false"></igx-snackbar>
         * ```
         * ```typescript
         * let autoHide =  this.snackbar.autoHide;
         * ```
         */
        this.autoHide = true;
        /**
         * Sets/gets the duration of time(in milliseconds) in which the snackbar will be visible after it is being shown.
         * Default value is 4000.
         * ```html
         * <igx-snackbar [displayTime] = "2000"></igx-snackbar>
         * ```
         * ```typescript
         * let displayTime = this.snackbar.displayTime;
         * ```
         */
        this.displayTime = 4000;
        /**
         * An event that will be emitted when the action is executed.
         * Provides reference to the `IgxSnackbarComponent` as an argument.
         * ```html
         * <igx-snackbar (onAction) = "onAction($event)"></igx-snackbar>
         * ```
         */
        this.onAction = new EventEmitter();
        /**
         * An event that will be emitted when the snackbar animation starts.
         * Provides reference to the `AnimationEvent` interface as an argument.
         * ```html
         * <igx-snackbar (animationStarted) = "animationStarted($event)"></igx-snackbar>
         * ```
         */
        this.animationStarted = new EventEmitter();
        /**
         * An event that will be emitted when the snackbar animation ends.
         * Provides reference to the `AnimationEvent` interface as an argument.
         * ```html
         * <igx-snackbar (animationDone) = "animationDone($event)"></igx-snackbar>
         * ```
         */
        this.animationDone = new EventEmitter();
    }
    /**
     * Shows the snackbar and hides it after the `displayTime` is over if `autoHide` is set to `true`.
     * ```typescript
     * this.snackbar.show();
     * ```
     */
    /**
     * Shows the snackbar and hides it after the `displayTime` is over if `autoHide` is set to `true`.
     * ```typescript
     * this.snackbar.show();
     * ```
     * @return {?}
     */
    IgxSnackbarComponent.prototype.show = /**
     * Shows the snackbar and hides it after the `displayTime` is over if `autoHide` is set to `true`.
     * ```typescript
     * this.snackbar.show();
     * ```
     * @return {?}
     */
    function () {
        var _this = this;
        clearTimeout(this.timeoutId);
        setTimeout(this.timeoutId);
        this.isVisible = true;
        if (this.autoHide) {
            this.timeoutId = setTimeout(function () {
                _this.hide();
            }, this.displayTime);
        }
    };
    /**
     * Hides the snackbar.
     * ```typescript
     * this.snackbar.hide();
     * ```
     */
    /**
     * Hides the snackbar.
     * ```typescript
     * this.snackbar.hide();
     * ```
     * @return {?}
     */
    IgxSnackbarComponent.prototype.hide = /**
     * Hides the snackbar.
     * ```typescript
     * this.snackbar.hide();
     * ```
     * @return {?}
     */
    function () {
        this.isVisible = false;
        clearTimeout(this.timeoutId);
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxSnackbarComponent.prototype.triggerAction = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.onAction.emit(this);
    };
    /**
     *@hidden
     * @memberof IgxSnackbarComponent
     */
    /**
     * @hidden
     * \@memberof IgxSnackbarComponent
     * @param {?} evt
     * @return {?}
     */
    IgxSnackbarComponent.prototype.snackbarAnimationStarted = /**
     * @hidden
     * \@memberof IgxSnackbarComponent
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        if (evt.fromState === 'void') {
            this.animationStarted.emit(evt);
        }
    };
    /**
     *@hidden
     * @memberof IgxSnackbarComponent
     */
    /**
     * @hidden
     * \@memberof IgxSnackbarComponent
     * @param {?} evt
     * @return {?}
     */
    IgxSnackbarComponent.prototype.snackbarAnimationDone = /**
     * @hidden
     * \@memberof IgxSnackbarComponent
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        if (evt.fromState === 'show') {
            this.animationDone.emit(evt);
        }
    };
    IgxSnackbarComponent.decorators = [
        { type: Component, args: [{
                    animations: [
                        trigger('slideInOut', [
                            transition('void => *', [
                                useAnimation(slideInBottom, {
                                    params: {
                                        duration: '.35s',
                                        easing: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
                                        fromPosition: 'translateY(100%)',
                                        toPosition: 'translateY(0)'
                                    }
                                })
                            ]),
                            transition('* => void', [
                                useAnimation(slideOutBottom, {
                                    params: {
                                        duration: '.2s',
                                        easing: 'cubic-bezier(0.4, 0.0, 1, 1)',
                                        fromPosition: 'translateY(0)',
                                        toOpacity: 1,
                                        toPosition: 'translateY(100%)'
                                    }
                                })
                            ])
                        ]),
                        trigger('fadeInOut', [
                            transition('void => *', [
                                useAnimation(fadeIn, {
                                    params: {
                                        duration: '.35s',
                                        easing: 'ease-out'
                                    }
                                })
                            ]),
                            transition('* => void', [
                                useAnimation(fadeOut, {
                                    params: {
                                        duration: '.2s',
                                        easing: 'ease-out'
                                    }
                                })
                            ])
                        ])
                    ],
                    selector: 'igx-snackbar',
                    template: "<div class=\"igx-snackbar\" *ngIf=\"isVisible\" (@slideInOut.start)=\"snackbarAnimationStarted($event)\" (@slideInOut.done)=\"snackbarAnimationDone($event)\"\n    [@slideInOut]=\"isVisible\">\n    <div class=\"igx-snackbar__message\" [@fadeInOut]=\"isVisible\">\n        {{ message }}\n        <ng-content></ng-content>\n    </div>\n    <button class=\"igx-snackbar__button\" igxRipple=\"white\" *ngIf=\"actionText\" [@fadeInOut] (click)=\"triggerAction()\">\n        {{ actionText }}\n    </button>\n</div>\n",
                    styles: ["\n        :host {\n            display: block;\n        }\n    "]
                }] }
    ];
    /** @nocollapse */
    IgxSnackbarComponent.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
    IgxSnackbarComponent.propDecorators = {
        id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
        message: [{ type: Input }],
        isVisible: [{ type: Input }],
        autoHide: [{ type: Input }],
        displayTime: [{ type: Input }],
        actionText: [{ type: Input }],
        onAction: [{ type: Output }],
        animationStarted: [{ type: Output }],
        animationDone: [{ type: Output }]
    };
    return IgxSnackbarComponent;
}());
export { IgxSnackbarComponent };
if (false) {
    /**
     * Sets/gets the `id` of the snackbar.
     * If not set, the `id` of the first snackbar component  will be `"igx-snackbar-0"`;
     * ```html
     * <igx-snackbar id = "Snackbar1"></igx-snackbar>
     * ```
     * ```typescript
     * let snackbarId = this.snackbar.id;
     * ```
     * \@memberof IgxSnackbarComponent
     * @type {?}
     */
    IgxSnackbarComponent.prototype.id;
    /**
     * Sets/gets the `message` attribute.
     * ```html
     * <igx-snackbar [message] = "'Snackbar Component'"></igx-snackbar>
     * ```
     * ```typescript
     * let message =  this.snackbar.message;
     * ```
     * @type {?}
     */
    IgxSnackbarComponent.prototype.message;
    /**
     * Enables/Disables the visibility of the snackbar.
     * If not set, the `isVisible` attribute will have value `false`.
     * ```html
     * <igx-snackbar [isVisible] = "true"></igx-snackbar>
     * ```
     * ```typescript
     * let isVisible =  this.snackbar.isVisible;
     * ```
     * @type {?}
     */
    IgxSnackbarComponent.prototype.isVisible;
    /**
     * Sets/gets if the snackbar will be automatically hidden after the `displayTime` is over.
     * Default value is `true`.
     * ```html
     * <igx-snackbar [autoHide] = "false"></igx-snackbar>
     * ```
     * ```typescript
     * let autoHide =  this.snackbar.autoHide;
     * ```
     * @type {?}
     */
    IgxSnackbarComponent.prototype.autoHide;
    /**
     * Sets/gets the duration of time(in milliseconds) in which the snackbar will be visible after it is being shown.
     * Default value is 4000.
     * ```html
     * <igx-snackbar [displayTime] = "2000"></igx-snackbar>
     * ```
     * ```typescript
     * let displayTime = this.snackbar.displayTime;
     * ```
     * @type {?}
     */
    IgxSnackbarComponent.prototype.displayTime;
    /**
     * Sets/gets the `actionText` attribute.
     * ```html
     * <igx-snackbar [actionText] = "'Action Text'"></igx-snackbar>
     * ```
     * @type {?}
     */
    IgxSnackbarComponent.prototype.actionText;
    /**
     * An event that will be emitted when the action is executed.
     * Provides reference to the `IgxSnackbarComponent` as an argument.
     * ```html
     * <igx-snackbar (onAction) = "onAction($event)"></igx-snackbar>
     * ```
     * @type {?}
     */
    IgxSnackbarComponent.prototype.onAction;
    /**
     * An event that will be emitted when the snackbar animation starts.
     * Provides reference to the `AnimationEvent` interface as an argument.
     * ```html
     * <igx-snackbar (animationStarted) = "animationStarted($event)"></igx-snackbar>
     * ```
     * @type {?}
     */
    IgxSnackbarComponent.prototype.animationStarted;
    /**
     * An event that will be emitted when the snackbar animation ends.
     * Provides reference to the `AnimationEvent` interface as an argument.
     * ```html
     * <igx-snackbar (animationDone) = "animationDone($event)"></igx-snackbar>
     * ```
     * @type {?}
     */
    IgxSnackbarComponent.prototype.animationDone;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxSnackbarComponent.prototype.timeoutId;
    /**
     * @type {?}
     * @private
     */
    IgxSnackbarComponent.prototype.zone;
}
/**
 * @hidden
 */
var IgxSnackbarModule = /** @class */ (function () {
    function IgxSnackbarModule() {
    }
    IgxSnackbarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxSnackbarComponent],
                    exports: [IgxSnackbarComponent],
                    imports: [CommonModule]
                },] }
    ];
    return IgxSnackbarModule;
}());
export { IgxSnackbarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2tiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zbmFja2Jhci9zbmFja2Jhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFLSCxVQUFVLEVBQ1YsT0FBTyxFQUNQLFlBQVksRUFDZixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0gsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBQ04sTUFBTSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7SUFFaEYsT0FBTyxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJmO0lBMEpJLDhCQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTs7Ozs7Ozs7Ozs7O1FBdkZ6QixPQUFFLEdBQUcsa0JBQWdCLE9BQU8sRUFBSSxDQUFDOzs7Ozs7Ozs7OztRQXNCeEIsY0FBUyxHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7UUFZbEIsYUFBUSxHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7UUFZaEIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7Ozs7Ozs7O1FBaUJsQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQXdCLENBQUM7Ozs7Ozs7O1FBU3BELHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDOzs7Ozs7OztRQVN0RCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO0lBTWhDLENBQUM7SUFFckM7Ozs7O09BS0c7Ozs7Ozs7O0lBQ0ksbUNBQUk7Ozs7Ozs7SUFBWDtRQUFBLGlCQVVDO1FBVEcsWUFBWSxDQUFD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O0lBNERYLDJCQUFDO0NBQUEsQUFoTkQsSUFnTkM7U0E1Slksb0JBQW9COzs7Ozs7Ozs7Ozs7OztJQWE3QixrQ0FFd0M7Ozs7Ozs7Ozs7O0lBVXhDLHVDQUFnQzs7Ozs7Ozs7Ozs7O0lBWWhDLHlDQUFrQzs7Ozs7Ozs7Ozs7O0lBWWxDLHdDQUFnQzs7Ozs7Ozs7Ozs7O0lBWWhDLDJDQUFtQzs7Ozs7Ozs7SUFRbkMsMENBQW9DOzs7Ozs7Ozs7SUFTcEMsd0NBQXFFOzs7Ozs7Ozs7SUFTckUsZ0RBQXVFOzs7Ozs7Ozs7SUFTdkUsNkNBQW9FOzs7Ozs7SUFJcEUseUNBQWtCOzs7OztJQUVOLG9DQUFvQjs7Ozs7QUEyRHBDO0lBQUE7SUFLaUMsQ0FBQzs7Z0JBTGpDLFFBQVEsU0FBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQy9CLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDMUI7O0lBQ2dDLHdCQUFDO0NBQUEsQUFMbEMsSUFLa0M7U0FBckIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBhbmltYXRlLFxuICAgIEFuaW1hdGlvbkV2ZW50LFxuICAgIHN0YXRlLFxuICAgIHN0eWxlLFxuICAgIHRyYW5zaXRpb24sXG4gICAgdHJpZ2dlcixcbiAgICB1c2VBbmltYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LFxuICAgIE5nTW9kdWxlLFxuICAgIE5nWm9uZSxcbiAgICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmYWRlSW4sIGZhZGVPdXQsIHNsaWRlSW5Cb3R0b20sIHNsaWRlT3V0Qm90dG9tIH0gZnJvbSAnLi4vYW5pbWF0aW9ucy9tYWluJztcblxubGV0IE5FWFRfSUQgPSAwO1xuLyoqXG4gKiAqKklnbml0ZSBVSSBmb3IgQW5ndWxhciBTbmFja2JhcioqIC1cbiAqIFtEb2N1bWVudGF0aW9uXShodHRwczovL3d3dy5pbmZyYWdpc3RpY3MuY29tL3Byb2R1Y3RzL2lnbml0ZS11aS1hbmd1bGFyL2FuZ3VsYXIvY29tcG9uZW50cy9zbmFja2Jhci5odG1sKVxuICpcbiAqIFRoZSBJZ25pdGUgVUkgU25hY2sgQmFyIHByb3ZpZGVzIGZlZWRiYWNrIGFib3V0IGFuIG9wZXJhdGlvbiB3aXRoIGEgc2luZ2xlLWxpbmUgbWVzc2FnZSwgd2hpY2ggY2FuXG4gKiBpbmNsdWRlIGEgbGluayB0byBhbiBhY3Rpb24gc3VjaCBhcyBVbmRvLlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIChjbGljayk9XCJzbmFja2Jhci5zaG93KClcIj5TZW5kIG1lc3NhZ2U8L2J1dHRvbj5cbiAqIDxkaXY+XG4gKiAgIDxpZ3gtc25hY2tiYXIgI3NuYWNrYmFyIG1lc3NhZ2U9XCJNZXNzYWdlIHNlbnRcIj5cbiAqICAgPC9pZ3gtc25hY2tiYXI+XG4gKiA8L2Rpdj5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ3NsaWRlSW5PdXQnLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICAgICAgdXNlQW5pbWF0aW9uKHNsaWRlSW5Cb3R0b20sIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogJy4zNXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnY3ViaWMtYmV6aWVyKDAuMCwgMC4wLCAwLjIsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21Qb3NpdGlvbjogJ3RyYW5zbGF0ZVkoMTAwJSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Qb3NpdGlvbjogJ3RyYW5zbGF0ZVkoMCknXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICAgICAgdXNlQW5pbWF0aW9uKHNsaWRlT3V0Qm90dG9tLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246ICcuMnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAxLCAxKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tUG9zaXRpb246ICd0cmFuc2xhdGVZKDApJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvT3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvUG9zaXRpb246ICd0cmFuc2xhdGVZKDEwMCUpJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICB0cmlnZ2VyKCdmYWRlSW5PdXQnLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICAgICAgdXNlQW5pbWF0aW9uKGZhZGVJbiwge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAnLjM1cycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlLW91dCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgICAgICB1c2VBbmltYXRpb24oZmFkZU91dCwge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAnLjJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2Utb3V0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgXSxcbiAgICBzZWxlY3RvcjogJ2lneC1zbmFja2JhcicsXG4gICAgdGVtcGxhdGVVcmw6ICdzbmFja2Jhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIElneFNuYWNrYmFyQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgYGlkYCBvZiB0aGUgc25hY2tiYXIuXG4gICAgICogSWYgbm90IHNldCwgdGhlIGBpZGAgb2YgdGhlIGZpcnN0IHNuYWNrYmFyIGNvbXBvbmVudCAgd2lsbCBiZSBgXCJpZ3gtc25hY2tiYXItMFwiYDtcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1zbmFja2JhciBpZCA9IFwiU25hY2tiYXIxXCI+PC9pZ3gtc25hY2tiYXI+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBzbmFja2JhcklkID0gdGhpcy5zbmFja2Jhci5pZDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4U25hY2tiYXJDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlkID0gYGlneC1zbmFja2Jhci0ke05FWFRfSUQrK31gO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgYG1lc3NhZ2VgIGF0dHJpYnV0ZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1zbmFja2JhciBbbWVzc2FnZV0gPSBcIidTbmFja2JhciBDb21wb25lbnQnXCI+PC9pZ3gtc25hY2tiYXI+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBtZXNzYWdlID0gIHRoaXMuc25hY2tiYXIubWVzc2FnZTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogRW5hYmxlcy9EaXNhYmxlcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgc25hY2tiYXIuXG4gICAgICogSWYgbm90IHNldCwgdGhlIGBpc1Zpc2libGVgIGF0dHJpYnV0ZSB3aWxsIGhhdmUgdmFsdWUgYGZhbHNlYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1zbmFja2JhciBbaXNWaXNpYmxlXSA9IFwidHJ1ZVwiPjwvaWd4LXNuYWNrYmFyPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNWaXNpYmxlID0gIHRoaXMuc25hY2tiYXIuaXNWaXNpYmxlO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpc1Zpc2libGUgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyBpZiB0aGUgc25hY2tiYXIgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGhpZGRlbiBhZnRlciB0aGUgYGRpc3BsYXlUaW1lYCBpcyBvdmVyLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYHRydWVgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXNuYWNrYmFyIFthdXRvSGlkZV0gPSBcImZhbHNlXCI+PC9pZ3gtc25hY2tiYXI+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBhdXRvSGlkZSA9ICB0aGlzLnNuYWNrYmFyLmF1dG9IaWRlO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBhdXRvSGlkZSA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGR1cmF0aW9uIG9mIHRpbWUoaW4gbWlsbGlzZWNvbmRzKSBpbiB3aGljaCB0aGUgc25hY2tiYXIgd2lsbCBiZSB2aXNpYmxlIGFmdGVyIGl0IGlzIGJlaW5nIHNob3duLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgNDAwMC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1zbmFja2JhciBbZGlzcGxheVRpbWVdID0gXCIyMDAwXCI+PC9pZ3gtc25hY2tiYXI+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBkaXNwbGF5VGltZSA9IHRoaXMuc25hY2tiYXIuZGlzcGxheVRpbWU7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGRpc3BsYXlUaW1lID0gNDAwMDtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgYGFjdGlvblRleHRgIGF0dHJpYnV0ZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1zbmFja2JhciBbYWN0aW9uVGV4dF0gPSBcIidBY3Rpb24gVGV4dCdcIj48L2lneC1zbmFja2Jhcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYWN0aW9uVGV4dD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEFuIGV2ZW50IHRoYXQgd2lsbCBiZSBlbWl0dGVkIHdoZW4gdGhlIGFjdGlvbiBpcyBleGVjdXRlZC5cbiAgICAgKiBQcm92aWRlcyByZWZlcmVuY2UgdG8gdGhlIGBJZ3hTbmFja2JhckNvbXBvbmVudGAgYXMgYW4gYXJndW1lbnQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtc25hY2tiYXIgKG9uQWN0aW9uKSA9IFwib25BY3Rpb24oJGV2ZW50KVwiPjwvaWd4LXNuYWNrYmFyPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25BY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPElneFNuYWNrYmFyQ29tcG9uZW50PigpO1xuXG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgdGhhdCB3aWxsIGJlIGVtaXR0ZWQgd2hlbiB0aGUgc25hY2tiYXIgYW5pbWF0aW9uIHN0YXJ0cy5cbiAgICAgKiBQcm92aWRlcyByZWZlcmVuY2UgdG8gdGhlIGBBbmltYXRpb25FdmVudGAgaW50ZXJmYWNlIGFzIGFuIGFyZ3VtZW50LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXNuYWNrYmFyIChhbmltYXRpb25TdGFydGVkKSA9IFwiYW5pbWF0aW9uU3RhcnRlZCgkZXZlbnQpXCI+PC9pZ3gtc25hY2tiYXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBhbmltYXRpb25TdGFydGVkID0gbmV3IEV2ZW50RW1pdHRlcjxBbmltYXRpb25FdmVudD4oKTtcblxuICAgIC8qKlxuICAgICAqIEFuIGV2ZW50IHRoYXQgd2lsbCBiZSBlbWl0dGVkIHdoZW4gdGhlIHNuYWNrYmFyIGFuaW1hdGlvbiBlbmRzLlxuICAgICAqIFByb3ZpZGVzIHJlZmVyZW5jZSB0byB0aGUgYEFuaW1hdGlvbkV2ZW50YCBpbnRlcmZhY2UgYXMgYW4gYXJndW1lbnQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtc25hY2tiYXIgKGFuaW1hdGlvbkRvbmUpID0gXCJhbmltYXRpb25Eb25lKCRldmVudClcIj48L2lneC1zbmFja2Jhcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIGFuaW1hdGlvbkRvbmUgPSBuZXcgRXZlbnRFbWl0dGVyPEFuaW1hdGlvbkV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgdGltZW91dElkO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHsgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgdGhlIHNuYWNrYmFyIGFuZCBoaWRlcyBpdCBhZnRlciB0aGUgYGRpc3BsYXlUaW1lYCBpcyBvdmVyIGlmIGBhdXRvSGlkZWAgaXMgc2V0IHRvIGB0cnVlYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5zbmFja2Jhci5zaG93KCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHNob3coKTogdm9pZCB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy50aW1lb3V0SWQpO1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0b0hpZGUpIHtcbiAgICAgICAgICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB9LCB0aGlzLmRpc3BsYXlUaW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGVzIHRoZSBzbmFja2Jhci5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5zbmFja2Jhci5oaWRlKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyB0cmlnZ2VyQWN0aW9uKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uQWN0aW9uLmVtaXQodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqIEBtZW1iZXJvZiBJZ3hTbmFja2JhckNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzbmFja2JhckFuaW1hdGlvblN0YXJ0ZWQoZXZ0OiBBbmltYXRpb25FdmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoZXZ0LmZyb21TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXJ0ZWQuZW1pdChldnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqIEBtZW1iZXJvZiBJZ3hTbmFja2JhckNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzbmFja2JhckFuaW1hdGlvbkRvbmUoZXZ0OiBBbmltYXRpb25FdmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoZXZ0LmZyb21TdGF0ZSA9PT0gJ3Nob3cnKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRvbmUuZW1pdChldnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtJZ3hTbmFja2JhckNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW0lneFNuYWNrYmFyQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hTbmFja2Jhck1vZHVsZSB7IH1cbiJdfQ==