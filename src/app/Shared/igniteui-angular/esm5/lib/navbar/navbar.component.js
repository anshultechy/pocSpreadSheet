/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostBinding, Input, NgModule, Output, Directive, ContentChild } from '@angular/core';
import { IgxButtonModule } from '../directives/button/button.directive';
import { IgxIconModule } from '../icon/index';
/**
 * IgxActionIcon is a container for the action nav icon of the IgxNavbar.
 */
var IgxActionIconDirective = /** @class */ (function () {
    function IgxActionIconDirective() {
    }
    IgxActionIconDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: 'igx-action-icon'
                },] }
    ];
    return IgxActionIconDirective;
}());
export { IgxActionIconDirective };
/** @type {?} */
var NEXT_ID = 0;
/**
 * **Ignite UI for Angular Navbar** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/navbar.html)
 *
 * The Ignite UI Navbar is most commonly used to provide an app header with a hamburger menu and navigation
 * state such as a "Go Back" button. It also supports other actions represented by icons.
 *
 * Example:
 * ```html
 * <igx-navbar title="Sample App" actionButtonIcon="menu">
 *   <igx-icon>search</igx-icon>
 *   <igx-icon>favorite</igx-icon>
 *   <igx-icon>more_vert</igx-icon>
 * </igx-navbar>
 * ```
 */
var IgxNavbarComponent = /** @class */ (function () {
    function IgxNavbarComponent() {
        this.isVisible = true;
        /**
         * An \@Input property that sets the value of the `id` attribute. If not provided it will be automatically generated.
         * ```html
         * <igx-navbar [id]="'igx-navbar-12'" title="Sample App" actionButtonIcon="menu">
         * ```
         */
        this.id = "igx-navbar-" + NEXT_ID++;
        /**
         * The event that will be thrown when the action is executed,
         * provides reference to the `IgxNavbar` component as argument
         * ```typescript
         * public actionExc(event){
         *    alert("Action Execute!");
         * }
         * //..
         * ```
         * ```html
         * <igx-navbar (onAction)="actionExc($event)" title="Sample App" actionButtonIcon="menu">
         * ```
         */
        this.onAction = new EventEmitter();
        /**
         * An \@Input property that sets the titleId of the `IgxNavbarComponent`. If not set it will be automatically generated.
         * ```html
         * <igx-navbar [titleId]="'igx-navbar-7'" title="Sample App" actionButtonIcon="menu">
         * ```
         */
        this.titleId = "igx-navbar-" + IgxNavbarComponent.NEXT_ID++;
    }
    Object.defineProperty(IgxNavbarComponent.prototype, "isActionButtonVisible", {
        /**
         *Returns whether the `IgxNavbarComponent` action button is visible, true/false.
         *```typescript
         *@ViewChild("MyChild")
         *public navBar: IgxNavbarComponent;
         *ngAfterViewInit(){
         *    let actionButtonVisibile = this.navBar.isActionButtonVisible;
         *}
         *```
         */
        get: /**
         * Returns whether the `IgxNavbarComponent` action button is visible, true/false.
         * ```typescript
         * \@ViewChild("MyChild")
         * public navBar: IgxNavbarComponent;
         * ngAfterViewInit(){
         *    let actionButtonVisibile = this.navBar.isActionButtonVisible;
         * }
         * ```
         * @return {?}
         */
        function () {
            if (this.actionIconTemplate || !this.actionButtonIcon) {
                return false;
            }
            return this.isVisible;
        },
        /**
         *Sets whether the action button of the `IgxNavbarComponent` is visible.
         *```html
         *<igx-navbar [title]="currentView" [isActionButtonVisible]="'false'"></igx-navbar>
         *```
         */
        set: /**
         * Sets whether the action button of the `IgxNavbarComponent` is visible.
         * ```html
         * <igx-navbar [title]="currentView" [isActionButtonVisible]="'false'"></igx-navbar>
         * ```
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isVisible = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxNavbarComponent.prototype._triggerAction = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.onAction.emit(this);
    };
    IgxNavbarComponent.NEXT_ID = 1;
    IgxNavbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-navbar',
                    template: "<nav class=\"igx-navbar\" role=\"navigation\" [attr.aria-labelledby]=\"titleId\">\n    <div class=\"igx-navbar__left\">\n        <igx-icon (click)=\"_triggerAction()\" fontSet=\"material\" *ngIf=\"isActionButtonVisible\">{{actionButtonIcon}}</igx-icon>\n        <ng-content select=\"igx-action-icon\"></ng-content>\n        <h1 class=\"igx-navbar__title\" [attr.id]=\"titleId\">{{ title }}</h1>\n    </div>\n    <div class=\"igx-navbar__right\">\n        <ng-content></ng-content>\n    </div>\n</nav>\n",
                    styles: ["\n        :host {\n            display: block;\n        }\n    "]
                }] }
    ];
    IgxNavbarComponent.propDecorators = {
        id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
        isActionButtonVisible: [{ type: Input }],
        actionButtonIcon: [{ type: Input }],
        title: [{ type: Input }],
        onAction: [{ type: Output }],
        titleId: [{ type: Input }],
        actionIconTemplate: [{ type: ContentChild, args: [IgxActionIconDirective, { read: IgxActionIconDirective, static: true },] }]
    };
    return IgxNavbarComponent;
}());
export { IgxNavbarComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxNavbarComponent.NEXT_ID;
    /**
     * @type {?}
     * @private
     */
    IgxNavbarComponent.prototype.isVisible;
    /**
     * An \@Input property that sets the value of the `id` attribute. If not provided it will be automatically generated.
     * ```html
     * <igx-navbar [id]="'igx-navbar-12'" title="Sample App" actionButtonIcon="menu">
     * ```
     * @type {?}
     */
    IgxNavbarComponent.prototype.id;
    /**
     * An \@Input property that sets the icon of the `IgxNavbarComponent`.
     * ```html
     * <igx-navbar [title]="currentView" actionButtonIcon="arrow_back"></igx-navbar>
     * ```
     * @type {?}
     */
    IgxNavbarComponent.prototype.actionButtonIcon;
    /**
     * An \@Input property that sets the title of the `IgxNavbarComponent`.
     * ```html
     * <igx-navbar title="Sample App" actionButtonIcon="menu">
     * ```
     * @type {?}
     */
    IgxNavbarComponent.prototype.title;
    /**
     * The event that will be thrown when the action is executed,
     * provides reference to the `IgxNavbar` component as argument
     * ```typescript
     * public actionExc(event){
     *    alert("Action Execute!");
     * }
     * //..
     * ```
     * ```html
     * <igx-navbar (onAction)="actionExc($event)" title="Sample App" actionButtonIcon="menu">
     * ```
     * @type {?}
     */
    IgxNavbarComponent.prototype.onAction;
    /**
     * An \@Input property that sets the titleId of the `IgxNavbarComponent`. If not set it will be automatically generated.
     * ```html
     * <igx-navbar [titleId]="'igx-navbar-7'" title="Sample App" actionButtonIcon="menu">
     * ```
     * @type {?}
     */
    IgxNavbarComponent.prototype.titleId;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxNavbarComponent.prototype.actionIconTemplate;
}
/**
 * @hidden
 */
var IgxNavbarModule = /** @class */ (function () {
    function IgxNavbarModule() {
    }
    IgxNavbarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxNavbarComponent, IgxActionIconDirective],
                    exports: [IgxNavbarComponent, IgxActionIconDirective],
                    imports: [IgxButtonModule, IgxIconModule, CommonModule]
                },] }
    ];
    return IgxNavbarModule;
}());
export { IgxNavbarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0gsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFlBQVksRUFDZixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUs5QztJQUFBO0lBSXNDLENBQUM7O2dCQUp0QyxTQUFTLFNBQUM7O29CQUVQLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzlCOztJQUNxQyw2QkFBQztDQUFBLEFBSnZDLElBSXVDO1NBQTFCLHNCQUFzQjs7SUFFL0IsT0FBTyxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JmO0lBQUE7UUFhWSxjQUFTLEdBQUcsSUFBSSxDQUFDOzs7Ozs7O1FBVWxCLE9BQUUsR0FBRyxnQkFBYyxPQUFPLEVBQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7UUF5RHJCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBc0IsQ0FBQzs7Ozs7OztRQVM1RCxZQUFPLEdBQUcsZ0JBQWMsa0JBQWtCLENBQUMsT0FBTyxFQUFJLENBQUM7SUFjbEUsQ0FBQztJQXJFRyxzQkFDVyxxREFBcUI7UUFYaEM7Ozs7Ozs7OztXQVNHOzs7Ozs7Ozs7Ozs7UUFDSDtZQUVJLElBQUksSUFBSSxDQUFDLGtCQUFrQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUNuRCxPQUFPLEtBQUssQ0FBQzthQUNoQjtZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO1FBRUQ7Ozs7O1dBS0c7Ozs7Ozs7OztRQUNILFVBQWlDLEtBQWM7WUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BVkE7SUF5REQ7O09BRUc7Ozs7O0lBQ0ksMkNBQWM7Ozs7SUFBckI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBMUZjLDBCQUFPLEdBQUcsQ0FBQyxDQUFDOztnQkFaOUIsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxZQUFZO29CQUN0QixrZ0JBQW9DOzZCQUMzQixpRUFJUjtpQkFFSjs7O3FCQVlJLFdBQVcsU0FBQyxTQUFTLGNBQ3JCLEtBQUs7d0NBWUwsS0FBSzttQ0F1QkwsS0FBSzt3QkFRTCxLQUFLOzJCQWVMLE1BQU07MEJBUU4sS0FBSztxQ0FNTCxZQUFZLFNBQUMsc0JBQXNCLEVBQUUsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFTeEYseUJBQUM7Q0FBQSxBQXZHRCxJQXVHQztTQTVGWSxrQkFBa0I7Ozs7OztJQUMzQiwyQkFBMkI7Ozs7O0lBQzNCLHVDQUF5Qjs7Ozs7Ozs7SUFRekIsZ0NBRXNDOzs7Ozs7OztJQWtDdEMsOENBQXlDOzs7Ozs7OztJQVF6QyxtQ0FBOEI7Ozs7Ozs7Ozs7Ozs7OztJQWU5QixzQ0FBbUU7Ozs7Ozs7O0lBUW5FLHFDQUM4RDs7Ozs7O0lBSzlELGdEQUNxRDs7Ozs7QUFhekQ7SUFBQTtJQU1BLENBQUM7O2dCQU5BLFFBQVEsU0FBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxzQkFBc0IsQ0FBQztvQkFDMUQsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsc0JBQXNCLENBQUM7b0JBQ3JELE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDO2lCQUMxRDs7SUFFRCxzQkFBQztDQUFBLEFBTkQsSUFNQztTQURZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LFxuICAgIE5nTW9kdWxlLFxuICAgIE91dHB1dCxcbiAgICBEaXJlY3RpdmUsXG4gICAgQ29udGVudENoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4QnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9idXR0b24vYnV0dG9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pbmRleCc7XG5cbi8qKlxuICogSWd4QWN0aW9uSWNvbiBpcyBhIGNvbnRhaW5lciBmb3IgdGhlIGFjdGlvbiBuYXYgaWNvbiBvZiB0aGUgSWd4TmF2YmFyLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gICAgc2VsZWN0b3I6ICdpZ3gtYWN0aW9uLWljb24nXG59KVxuZXhwb3J0IGNsYXNzIElneEFjdGlvbkljb25EaXJlY3RpdmUgeyB9XG5cbmxldCBORVhUX0lEID0gMDtcbi8qKlxuICogKipJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgTmF2YmFyKiogLVxuICogW0RvY3VtZW50YXRpb25dKGh0dHBzOi8vd3d3LmluZnJhZ2lzdGljcy5jb20vcHJvZHVjdHMvaWduaXRlLXVpLWFuZ3VsYXIvYW5ndWxhci9jb21wb25lbnRzL25hdmJhci5odG1sKVxuICpcbiAqIFRoZSBJZ25pdGUgVUkgTmF2YmFyIGlzIG1vc3QgY29tbW9ubHkgdXNlZCB0byBwcm92aWRlIGFuIGFwcCBoZWFkZXIgd2l0aCBhIGhhbWJ1cmdlciBtZW51IGFuZCBuYXZpZ2F0aW9uXG4gKiBzdGF0ZSBzdWNoIGFzIGEgXCJHbyBCYWNrXCIgYnV0dG9uLiBJdCBhbHNvIHN1cHBvcnRzIG90aGVyIGFjdGlvbnMgcmVwcmVzZW50ZWQgYnkgaWNvbnMuXG4gKlxuICogRXhhbXBsZTpcbiAqIGBgYGh0bWxcbiAqIDxpZ3gtbmF2YmFyIHRpdGxlPVwiU2FtcGxlIEFwcFwiIGFjdGlvbkJ1dHRvbkljb249XCJtZW51XCI+XG4gKiAgIDxpZ3gtaWNvbj5zZWFyY2g8L2lneC1pY29uPlxuICogICA8aWd4LWljb24+ZmF2b3JpdGU8L2lneC1pY29uPlxuICogICA8aWd4LWljb24+bW9yZV92ZXJ0PC9pZ3gtaWNvbj5cbiAqIDwvaWd4LW5hdmJhcj5cbiAqIGBgYFxuICovXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LW5hdmJhcicsXG4gICAgdGVtcGxhdGVVcmw6ICduYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICBgXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIElneE5hdmJhckNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgTkVYVF9JRCA9IDE7XG4gICAgcHJpdmF0ZSBpc1Zpc2libGUgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICpBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYGlkYCBhdHRyaWJ1dGUuIElmIG5vdCBwcm92aWRlZCBpdCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1uYXZiYXIgW2lkXT1cIidpZ3gtbmF2YmFyLTEyJ1wiIHRpdGxlPVwiU2FtcGxlIEFwcFwiIGFjdGlvbkJ1dHRvbkljb249XCJtZW51XCI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlkID0gYGlneC1uYXZiYXItJHtORVhUX0lEKyt9YDtcbiAgICAvKipcbiAgICAgKlJldHVybnMgd2hldGhlciB0aGUgYElneE5hdmJhckNvbXBvbmVudGAgYWN0aW9uIGJ1dHRvbiBpcyB2aXNpYmxlLCB0cnVlL2ZhbHNlLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15Q2hpbGRcIilcbiAgICAgKnB1YmxpYyBuYXZCYXI6IElneE5hdmJhckNvbXBvbmVudDtcbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqICAgIGxldCBhY3Rpb25CdXR0b25WaXNpYmlsZSA9IHRoaXMubmF2QmFyLmlzQWN0aW9uQnV0dG9uVmlzaWJsZTtcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0FjdGlvbkJ1dHRvblZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmFjdGlvbkljb25UZW1wbGF0ZSB8fCAhdGhpcy5hY3Rpb25CdXR0b25JY29uKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWaXNpYmxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqU2V0cyB3aGV0aGVyIHRoZSBhY3Rpb24gYnV0dG9uIG9mIHRoZSBgSWd4TmF2YmFyQ29tcG9uZW50YCBpcyB2aXNpYmxlLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1uYXZiYXIgW3RpdGxlXT1cImN1cnJlbnRWaWV3XCIgW2lzQWN0aW9uQnV0dG9uVmlzaWJsZV09XCInZmFsc2UnXCI+PC9pZ3gtbmF2YmFyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgcHVibGljIHNldCBpc0FjdGlvbkJ1dHRvblZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSBpY29uIG9mIHRoZSBgSWd4TmF2YmFyQ29tcG9uZW50YC5cbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtbmF2YmFyIFt0aXRsZV09XCJjdXJyZW50Vmlld1wiIGFjdGlvbkJ1dHRvbkljb249XCJhcnJvd19iYWNrXCI+PC9pZ3gtbmF2YmFyPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGFjdGlvbkJ1dHRvbkljb246IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgdGl0bGUgb2YgdGhlIGBJZ3hOYXZiYXJDb21wb25lbnRgLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1uYXZiYXIgdGl0bGU9XCJTYW1wbGUgQXBwXCIgYWN0aW9uQnV0dG9uSWNvbj1cIm1lbnVcIj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICpUaGUgZXZlbnQgdGhhdCB3aWxsIGJlIHRocm93biB3aGVuIHRoZSBhY3Rpb24gaXMgZXhlY3V0ZWQsXG4gICAgICpwcm92aWRlcyByZWZlcmVuY2UgdG8gdGhlIGBJZ3hOYXZiYXJgIGNvbXBvbmVudCBhcyBhcmd1bWVudFxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqcHVibGljIGFjdGlvbkV4YyhldmVudCl7XG4gICAgICogICAgYWxlcnQoXCJBY3Rpb24gRXhlY3V0ZSFcIik7XG4gICAgICp9XG4gICAgICogLy8uLlxuICAgICAqYGBgXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LW5hdmJhciAob25BY3Rpb24pPVwiYWN0aW9uRXhjKCRldmVudClcIiB0aXRsZT1cIlNhbXBsZSBBcHBcIiBhY3Rpb25CdXR0b25JY29uPVwibWVudVwiPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8SWd4TmF2YmFyQ29tcG9uZW50PigpO1xuXG4gICAgLyoqXG4gICAgICpBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSB0aXRsZUlkIG9mIHRoZSBgSWd4TmF2YmFyQ29tcG9uZW50YC4gSWYgbm90IHNldCBpdCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1uYXZiYXIgW3RpdGxlSWRdPVwiJ2lneC1uYXZiYXItNydcIiB0aXRsZT1cIlNhbXBsZSBBcHBcIiBhY3Rpb25CdXR0b25JY29uPVwibWVudVwiPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdGl0bGVJZCA9IGBpZ3gtbmF2YmFyLSR7SWd4TmF2YmFyQ29tcG9uZW50Lk5FWFRfSUQrK31gO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4QWN0aW9uSWNvbkRpcmVjdGl2ZSwgeyByZWFkOiBJZ3hBY3Rpb25JY29uRGlyZWN0aXZlLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgYWN0aW9uSWNvblRlbXBsYXRlOiBJZ3hBY3Rpb25JY29uRGlyZWN0aXZlO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIF90cmlnZ2VyQWN0aW9uKCkge1xuICAgICAgICB0aGlzLm9uQWN0aW9uLmVtaXQodGhpcyk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtJZ3hOYXZiYXJDb21wb25lbnQsIElneEFjdGlvbkljb25EaXJlY3RpdmVdLFxuICAgIGV4cG9ydHM6IFtJZ3hOYXZiYXJDb21wb25lbnQsIElneEFjdGlvbkljb25EaXJlY3RpdmVdLFxuICAgIGltcG9ydHM6IFtJZ3hCdXR0b25Nb2R1bGUsIElneEljb25Nb2R1bGUsIENvbW1vbk1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgSWd4TmF2YmFyTW9kdWxlIHtcbn1cbiJdfQ==