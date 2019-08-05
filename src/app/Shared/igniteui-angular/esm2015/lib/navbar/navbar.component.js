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
export class IgxActionIconDirective {
}
IgxActionIconDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'igx-action-icon'
            },] }
];
/** @type {?} */
let NEXT_ID = 0;
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
export class IgxNavbarComponent {
    constructor() {
        this.isVisible = true;
        /**
         * An \@Input property that sets the value of the `id` attribute. If not provided it will be automatically generated.
         * ```html
         * <igx-navbar [id]="'igx-navbar-12'" title="Sample App" actionButtonIcon="menu">
         * ```
         */
        this.id = `igx-navbar-${NEXT_ID++}`;
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
        this.titleId = `igx-navbar-${IgxNavbarComponent.NEXT_ID++}`;
    }
    /**
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
    get isActionButtonVisible() {
        if (this.actionIconTemplate || !this.actionButtonIcon) {
            return false;
        }
        return this.isVisible;
    }
    /**
     * Sets whether the action button of the `IgxNavbarComponent` is visible.
     * ```html
     * <igx-navbar [title]="currentView" [isActionButtonVisible]="'false'"></igx-navbar>
     * ```
     * @param {?} value
     * @return {?}
     */
    set isActionButtonVisible(value) {
        this.isVisible = value;
    }
    /**
     * @hidden
     * @return {?}
     */
    _triggerAction() {
        this.onAction.emit(this);
    }
}
IgxNavbarComponent.NEXT_ID = 1;
IgxNavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-navbar',
                template: "<nav class=\"igx-navbar\" role=\"navigation\" [attr.aria-labelledby]=\"titleId\">\n    <div class=\"igx-navbar__left\">\n        <igx-icon (click)=\"_triggerAction()\" fontSet=\"material\" *ngIf=\"isActionButtonVisible\">{{actionButtonIcon}}</igx-icon>\n        <ng-content select=\"igx-action-icon\"></ng-content>\n        <h1 class=\"igx-navbar__title\" [attr.id]=\"titleId\">{{ title }}</h1>\n    </div>\n    <div class=\"igx-navbar__right\">\n        <ng-content></ng-content>\n    </div>\n</nav>\n",
                styles: [`
        :host {
            display: block;
        }
    `]
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
export class IgxNavbarModule {
}
IgxNavbarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxNavbarComponent, IgxActionIconDirective],
                exports: [IgxNavbarComponent, IgxActionIconDirective],
                imports: [IgxButtonModule, IgxIconModule, CommonModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0gsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFlBQVksRUFDZixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVM5QyxNQUFNLE9BQU8sc0JBQXNCOzs7WUFKbEMsU0FBUyxTQUFDOztnQkFFUCxRQUFRLEVBQUUsaUJBQWlCO2FBQzlCOzs7SUFHRyxPQUFPLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QmYsTUFBTSxPQUFPLGtCQUFrQjtJQVgvQjtRQWFZLGNBQVMsR0FBRyxJQUFJLENBQUM7Ozs7Ozs7UUFVbEIsT0FBRSxHQUFHLGNBQWMsT0FBTyxFQUFFLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7UUF5RHJCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBc0IsQ0FBQzs7Ozs7OztRQVM1RCxZQUFPLEdBQUcsY0FBYyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO0lBY2xFLENBQUM7Ozs7Ozs7Ozs7OztJQXJFRyxJQUNXLHFCQUFxQjtRQUM1QixJQUFJLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNuRCxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDOzs7Ozs7Ozs7SUFRRCxJQUFXLHFCQUFxQixDQUFDLEtBQWM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFrRE0sY0FBYztRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOztBQTFGYywwQkFBTyxHQUFHLENBQUMsQ0FBQzs7WUFaOUIsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixrZ0JBQW9DO3lCQUMzQjs7OztLQUlSO2FBRUo7OztpQkFZSSxXQUFXLFNBQUMsU0FBUyxjQUNyQixLQUFLO29DQVlMLEtBQUs7K0JBdUJMLEtBQUs7b0JBUUwsS0FBSzt1QkFlTCxNQUFNO3NCQVFOLEtBQUs7aUNBTUwsWUFBWSxTQUFDLHNCQUFzQixFQUFFLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7Ozs7SUFsRnBGLDJCQUEyQjs7Ozs7SUFDM0IsdUNBQXlCOzs7Ozs7OztJQVF6QixnQ0FFc0M7Ozs7Ozs7O0lBa0N0Qyw4Q0FBeUM7Ozs7Ozs7O0lBUXpDLG1DQUE4Qjs7Ozs7Ozs7Ozs7Ozs7O0lBZTlCLHNDQUFtRTs7Ozs7Ozs7SUFRbkUscUNBQzhEOzs7Ozs7SUFLOUQsZ0RBQ3FEOzs7OztBQWtCekQsTUFBTSxPQUFPLGVBQWU7OztZQUwzQixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsc0JBQXNCLENBQUM7Z0JBQzFELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLHNCQUFzQixDQUFDO2dCQUNyRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQzthQUMxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSW5wdXQsXG4gICAgTmdNb2R1bGUsXG4gICAgT3V0cHV0LFxuICAgIERpcmVjdGl2ZSxcbiAgICBDb250ZW50Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2J1dHRvbi9idXR0b24uZGlyZWN0aXZlJztcbmltcG9ydCB7IElneEljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2luZGV4JztcblxuLyoqXG4gKiBJZ3hBY3Rpb25JY29uIGlzIGEgY29udGFpbmVyIGZvciB0aGUgYWN0aW9uIG5hdiBpY29uIG9mIHRoZSBJZ3hOYXZiYXIuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgICBzZWxlY3RvcjogJ2lneC1hY3Rpb24taWNvbidcbn0pXG5leHBvcnQgY2xhc3MgSWd4QWN0aW9uSWNvbkRpcmVjdGl2ZSB7IH1cblxubGV0IE5FWFRfSUQgPSAwO1xuLyoqXG4gKiAqKklnbml0ZSBVSSBmb3IgQW5ndWxhciBOYXZiYXIqKiAtXG4gKiBbRG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly93d3cuaW5mcmFnaXN0aWNzLmNvbS9wcm9kdWN0cy9pZ25pdGUtdWktYW5ndWxhci9hbmd1bGFyL2NvbXBvbmVudHMvbmF2YmFyLmh0bWwpXG4gKlxuICogVGhlIElnbml0ZSBVSSBOYXZiYXIgaXMgbW9zdCBjb21tb25seSB1c2VkIHRvIHByb3ZpZGUgYW4gYXBwIGhlYWRlciB3aXRoIGEgaGFtYnVyZ2VyIG1lbnUgYW5kIG5hdmlnYXRpb25cbiAqIHN0YXRlIHN1Y2ggYXMgYSBcIkdvIEJhY2tcIiBidXR0b24uIEl0IGFsc28gc3VwcG9ydHMgb3RoZXIgYWN0aW9ucyByZXByZXNlbnRlZCBieSBpY29ucy5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgaHRtbFxuICogPGlneC1uYXZiYXIgdGl0bGU9XCJTYW1wbGUgQXBwXCIgYWN0aW9uQnV0dG9uSWNvbj1cIm1lbnVcIj5cbiAqICAgPGlneC1pY29uPnNlYXJjaDwvaWd4LWljb24+XG4gKiAgIDxpZ3gtaWNvbj5mYXZvcml0ZTwvaWd4LWljb24+XG4gKiAgIDxpZ3gtaWNvbj5tb3JlX3ZlcnQ8L2lneC1pY29uPlxuICogPC9pZ3gtbmF2YmFyPlxuICogYGBgXG4gKi9cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtbmF2YmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ25hdmJhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIGBcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgSWd4TmF2YmFyQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHN0YXRpYyBORVhUX0lEID0gMTtcbiAgICBwcml2YXRlIGlzVmlzaWJsZSA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKkFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBgaWRgIGF0dHJpYnV0ZS4gSWYgbm90IHByb3ZpZGVkIGl0IHdpbGwgYmUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LW5hdmJhciBbaWRdPVwiJ2lneC1uYXZiYXItMTInXCIgdGl0bGU9XCJTYW1wbGUgQXBwXCIgYWN0aW9uQnV0dG9uSWNvbj1cIm1lbnVcIj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWQgPSBgaWd4LW5hdmJhci0ke05FWFRfSUQrK31gO1xuICAgIC8qKlxuICAgICAqUmV0dXJucyB3aGV0aGVyIHRoZSBgSWd4TmF2YmFyQ29tcG9uZW50YCBhY3Rpb24gYnV0dG9uIGlzIHZpc2libGUsIHRydWUvZmFsc2UuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwiTXlDaGlsZFwiKVxuICAgICAqcHVibGljIG5hdkJhcjogSWd4TmF2YmFyQ29tcG9uZW50O1xuICAgICAqbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgbGV0IGFjdGlvbkJ1dHRvblZpc2liaWxlID0gdGhpcy5uYXZCYXIuaXNBY3Rpb25CdXR0b25WaXNpYmxlO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzQWN0aW9uQnV0dG9uVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uSWNvblRlbXBsYXRlIHx8ICF0aGlzLmFjdGlvbkJ1dHRvbkljb24pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pc1Zpc2libGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpTZXRzIHdoZXRoZXIgdGhlIGFjdGlvbiBidXR0b24gb2YgdGhlIGBJZ3hOYXZiYXJDb21wb25lbnRgIGlzIHZpc2libGUuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LW5hdmJhciBbdGl0bGVdPVwiY3VycmVudFZpZXdcIiBbaXNBY3Rpb25CdXR0b25WaXNpYmxlXT1cIidmYWxzZSdcIj48L2lneC1uYXZiYXI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGlzQWN0aW9uQnV0dG9uVmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKkFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIGljb24gb2YgdGhlIGBJZ3hOYXZiYXJDb21wb25lbnRgLlxuICAgICAqYGBgaHRtbFxuICAgICAqPGlneC1uYXZiYXIgW3RpdGxlXT1cImN1cnJlbnRWaWV3XCIgYWN0aW9uQnV0dG9uSWNvbj1cImFycm93X2JhY2tcIj48L2lneC1uYXZiYXI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYWN0aW9uQnV0dG9uSWNvbjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICpBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSB0aXRsZSBvZiB0aGUgYElneE5hdmJhckNvbXBvbmVudGAuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LW5hdmJhciB0aXRsZT1cIlNhbXBsZSBBcHBcIiBhY3Rpb25CdXR0b25JY29uPVwibWVudVwiPlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKlRoZSBldmVudCB0aGF0IHdpbGwgYmUgdGhyb3duIHdoZW4gdGhlIGFjdGlvbiBpcyBleGVjdXRlZCxcbiAgICAgKnByb3ZpZGVzIHJlZmVyZW5jZSB0byB0aGUgYElneE5hdmJhcmAgY29tcG9uZW50IGFzIGFyZ3VtZW50XG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpwdWJsaWMgYWN0aW9uRXhjKGV2ZW50KXtcbiAgICAgKiAgICBhbGVydChcIkFjdGlvbiBFeGVjdXRlIVwiKTtcbiAgICAgKn1cbiAgICAgKiAvLy4uXG4gICAgICpgYGBcbiAgICAgKmBgYGh0bWxcbiAgICAgKjxpZ3gtbmF2YmFyIChvbkFjdGlvbik9XCJhY3Rpb25FeGMoJGV2ZW50KVwiIHRpdGxlPVwiU2FtcGxlIEFwcFwiIGFjdGlvbkJ1dHRvbkljb249XCJtZW51XCI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxJZ3hOYXZiYXJDb21wb25lbnQ+KCk7XG5cbiAgICAvKipcbiAgICAgKkFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHRpdGxlSWQgb2YgdGhlIGBJZ3hOYXZiYXJDb21wb25lbnRgLiBJZiBub3Qgc2V0IGl0IHdpbGwgYmUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQuXG4gICAgICpgYGBodG1sXG4gICAgICo8aWd4LW5hdmJhciBbdGl0bGVJZF09XCInaWd4LW5hdmJhci03J1wiIHRpdGxlPVwiU2FtcGxlIEFwcFwiIGFjdGlvbkJ1dHRvbkljb249XCJtZW51XCI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0aXRsZUlkID0gYGlneC1uYXZiYXItJHtJZ3hOYXZiYXJDb21wb25lbnQuTkVYVF9JRCsrfWA7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChJZ3hBY3Rpb25JY29uRGlyZWN0aXZlLCB7IHJlYWQ6IElneEFjdGlvbkljb25EaXJlY3RpdmUsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCBhY3Rpb25JY29uVGVtcGxhdGU6IElneEFjdGlvbkljb25EaXJlY3RpdmU7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgX3RyaWdnZXJBY3Rpb24oKSB7XG4gICAgICAgIHRoaXMub25BY3Rpb24uZW1pdCh0aGlzKTtcbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneE5hdmJhckNvbXBvbmVudCwgSWd4QWN0aW9uSWNvbkRpcmVjdGl2ZV0sXG4gICAgZXhwb3J0czogW0lneE5hdmJhckNvbXBvbmVudCwgSWd4QWN0aW9uSWNvbkRpcmVjdGl2ZV0sXG4gICAgaW1wb3J0czogW0lneEJ1dHRvbk1vZHVsZSwgSWd4SWNvbk1vZHVsZSwgQ29tbW9uTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hOYXZiYXJNb2R1bGUge1xufVxuIl19