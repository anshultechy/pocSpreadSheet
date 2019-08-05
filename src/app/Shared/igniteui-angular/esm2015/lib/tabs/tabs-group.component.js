/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, ElementRef, HostBinding, Input, HostListener } from '@angular/core';
import { IgxTabItemTemplateDirective } from './tabs.directives';
import { IgxTabsBase } from './tabs.common';
export class IgxTabsGroupComponent {
    /**
     * @param {?} _tabs
     * @param {?} _element
     */
    constructor(_tabs, _element) {
        this._tabs = _tabs;
        this._element = _element;
        /**
         * @hidden
         */
        this._isSelected = false;
        /**
         * An \@Input property that allows you to enable/disable the `IgxTabGroupComponent`.
         * ```html
         * <igx-tabs-group label="Tab 2  Lorem ipsum dolor sit" icon="home" [disabled]="true">
         * ```
         */
        this.disabled = false;
        /**
         * @hidden
         */
        this.role = 'tabpanel';
        /**
         * @hidden
         */
        this.styleClass = true;
    }
    /**
     * Sets/gets whether a tab group is selected.
     * ```typescript
     * this.tabGroup.isSelected = true;
     * ```
     * ```typescript
     * let isSelected = this.tabGroup.isSelected;
     * ```
     * \@memberof IgxTabsGroupComponent
     * @return {?}
     */
    get isSelected() {
        return this._isSelected;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set isSelected(newValue) {
        if (this._isSelected !== newValue) {
            if (newValue) {
                this.select();
            }
            else {
                this._isSelected = newValue;
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        if (this.isSelected) {
            this.transformContentAnimation(0);
        }
    }
    /**
     * An accessor that returns the `IgxTabItemComponent` component.
     * ```typescript
     * \@ViewChild("MyTabsGroup")
     * public tab: IgxTabsGroupComponent;
     * ngAfterViewInIt(){
     *    let tabComponent = this.tab.relatedTab;
     * }
     * ```
     * @return {?}
     */
    get relatedTab() {
        if (this._tabs.tabs) {
            return (/** @type {?} */ (this._tabs.tabs.toArray()[this.index]));
        }
    }
    /**
     * An accessor that returns the value of the index of the `IgxTabsGroupComponent`.
     * ```typescript
     * \@ViewChild("MyTabsGroup")
     * public tab: IgxTabsGroupComponent;
     * ngAfterViewInIt(){
     *    let tabIndex = this.tab.index;
     * }
     * ```
     * @return {?}
     */
    get index() {
        if (this._tabs.groups) {
            return this._tabs.groups.toArray().indexOf(this);
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    get customTabTemplate() {
        return this._tabTemplate;
    }
    /**
     * @hidden
     * @param {?} template
     * @return {?}
     */
    set customTabTemplate(template) {
        this._tabTemplate = template;
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.tabTemplate) {
            this._tabTemplate = this.tabTemplate.template;
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterViewChecked() {
        this._element.nativeElement.setAttribute('aria-labelledby', `igx-tab-item-${this.index}`);
        this._element.nativeElement.setAttribute('id', `igx-tabs__group-${this.index}`);
        if (this.isSelected) {
            /** @type {?} */
            const tabItem = this.relatedTab.nativeTabItem.nativeElement;
            this.transformContentAnimation(0);
            this.transformIndicatorAnimation(tabItem);
        }
    }
    /**
     * A method that sets the focus on a tab.
     * \@memberof {\@link IgxTabsGroupComponent}
     * ```typescript
     * \@ViewChild("MyChild")
     * public tab : IgxTabsGroupComponent;
     * ngAfterViewInit(){
     *    this.tab.select();
     * }
     * ```
     * @param {?=} focusDelay A number representing the expected delay.
     * @return {?}
     */
    select(focusDelay = 200) {
        if (this.disabled || this.isSelected) {
            return;
        }
        this._isSelected = true;
        this.relatedTab.tabindex = 0;
        if (focusDelay !== 0) {
            setTimeout(() => {
                this.relatedTab.nativeTabItem.nativeElement.focus();
            }, focusDelay);
        }
        this.handleSelection();
        this._tabs.onTabItemSelected.emit({ tab: this._tabs.tabs.toArray()[this.index], group: this });
    }
    /**
     * @private
     * @return {?}
     */
    handleSelection() {
        /** @type {?} */
        const tabElement = this.relatedTab.nativeTabItem.nativeElement;
        // Scroll to the left
        if (tabElement.offsetLeft < this._tabs.offset) {
            this._tabs.scrollElement(tabElement, false);
        }
        // Scroll to the right
        /** @type {?} */
        const viewPortOffsetWidth = this._tabs.viewPort.nativeElement.offsetWidth;
        /** @type {?} */
        const delta = (tabElement.offsetLeft + tabElement.offsetWidth) - (viewPortOffsetWidth + this._tabs.offset);
        // Fix for IE 11, a difference is accumulated from the widths calculations
        if (delta > 1) {
            this._tabs.scrollElement(tabElement, true);
        }
        this.transformContentAnimation(0.2);
        this.transformIndicatorAnimation(tabElement);
    }
    /**
     * @private
     * @param {?} duration
     * @return {?}
     */
    transformContentAnimation(duration) {
        /** @type {?} */
        const contentOffset = this._tabs.tabsContainer.nativeElement.offsetWidth * this.index;
        this._tabs.contentsContainer.nativeElement.style.transitionDuration = `${duration}s`;
        this._tabs.contentsContainer.nativeElement.style.transform = `translate(${-contentOffset}px)`;
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    transformIndicatorAnimation(element) {
        this._tabs.selectedIndicator.nativeElement.style.width = `${element.offsetWidth}px`;
        this._tabs.selectedIndicator.nativeElement.style.transform = `translate(${element.offsetLeft}px)`;
    }
}
IgxTabsGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-tabs-group',
                template: "<ng-content *ngIf=\"isSelected\"></ng-content>\n"
            }] }
];
/** @nocollapse */
IgxTabsGroupComponent.ctorParameters = () => [
    { type: IgxTabsBase },
    { type: ElementRef }
];
IgxTabsGroupComponent.propDecorators = {
    disabled: [{ type: Input }],
    icon: [{ type: Input }],
    label: [{ type: Input }],
    tabTemplate: [{ type: ContentChild, args: [IgxTabItemTemplateDirective, { read: IgxTabItemTemplateDirective, static: true },] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    styleClass: [{ type: HostBinding, args: ['class.igx-tabs__group',] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
if (false) {
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxTabsGroupComponent.prototype._isSelected;
    /**
     * An \@Input property that allows you to enable/disable the `IgxTabGroupComponent`.
     * ```html
     * <igx-tabs-group label="Tab 2  Lorem ipsum dolor sit" icon="home" [disabled]="true">
     * ```
     * @type {?}
     */
    IgxTabsGroupComponent.prototype.disabled;
    /**
     * An \@Input property that sets the value of the `icon`.
     * The value should be valid icon name from {\@link https://material.io/tools/icons/?style=baseline}.
     * ```html
     * <igx-tabs-group label="Tab 1" icon="home">
     * ```
     * @type {?}
     */
    IgxTabsGroupComponent.prototype.icon;
    /**
     * An \@Input property that sets the value of the `label`.
     * ```html
     * <igx-tabs-group label="Tab 1" icon="folder">
     * ```
     * @type {?}
     */
    IgxTabsGroupComponent.prototype.label;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxTabsGroupComponent.prototype.tabTemplate;
    /**
     * @type {?}
     * @private
     */
    IgxTabsGroupComponent.prototype._tabTemplate;
    /**
     * @hidden
     * @type {?}
     */
    IgxTabsGroupComponent.prototype.role;
    /**
     * @hidden
     * @type {?}
     */
    IgxTabsGroupComponent.prototype.styleClass;
    /**
     * @type {?}
     * @private
     */
    IgxTabsGroupComponent.prototype._tabs;
    /**
     * @type {?}
     * @private
     */
    IgxTabsGroupComponent.prototype._element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3RhYnMvdGFicy1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFHSCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUVMLFlBQVksRUFDZixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQU85RCxNQUFNLE9BQU8scUJBQXFCOzs7OztJQWtFOUIsWUFBb0IsS0FBa0IsRUFBVSxRQUFvQjtRQUFoRCxVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBWTs7OztRQTdENUQsZ0JBQVcsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7UUFTckIsYUFBUSxHQUFHLEtBQUssQ0FBQzs7OztRQTJEakIsU0FBSSxHQUFHLFVBQVUsQ0FBQzs7OztRQU1sQixlQUFVLEdBQUcsSUFBSSxDQUFDO0lBWnpCLENBQUM7Ozs7Ozs7Ozs7OztJQXRCRCxJQUFXLFVBQVU7UUFDakIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBQ0QsSUFBVyxVQUFVLENBQUMsUUFBaUI7UUFDbkMsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFFBQVEsRUFBRTtZQUMvQixJQUFJLFFBQVEsRUFBRTtnQkFDVixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDakI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7YUFDL0I7U0FDSjtJQUNMLENBQUM7Ozs7O0lBMEJNLFFBQVEsQ0FBQyxLQUFLO1FBQ2pCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJ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QUFLLENBQUM7SUFDdEcsQ0FBQzs7O1lBNU5KLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQiw0REFBd0M7YUFDM0M7Ozs7WUFMUSxXQUFXO1lBVGhCLFVBQVU7Ozt1QkE2QlQsS0FBSzttQkFVTCxLQUFLO29CQVNMLEtBQUs7MEJBNkJMLFlBQVksU0FBQywyQkFBMkIsRUFBRSxFQUFFLElBQUksRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO21CQVc3RixXQUFXLFNBQUMsV0FBVzt5QkFNdkIsV0FBVyxTQUFDLHVCQUF1Qjt1QkFHbkMsWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7Ozs7SUE1RXpDLDRDQUE0Qjs7Ozs7Ozs7SUFRNUIseUNBQ3dCOzs7Ozs7Ozs7SUFTeEIscUNBQ29COzs7Ozs7OztJQVFwQixzQ0FDcUI7Ozs7OztJQTRCckIsNENBQ21EOzs7OztJQUVuRCw2Q0FBdUM7Ozs7O0lBUXZDLHFDQUN5Qjs7Ozs7SUFLekIsMkNBQ3lCOzs7OztJQWJiLHNDQUEwQjs7Ozs7SUFBRSx5Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFmdGVyQ29udGVudEluaXQsXG4gICAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgICBDb21wb25lbnQsXG4gICAgQ29udGVudENoaWxkLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSW5wdXQsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgSG9zdExpc3RlbmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJZ3hUYWJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi90YWItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4VGFiSXRlbVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi90YWJzLmRpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgSWd4VGFic0Jhc2UsIElneFRhYnNHcm91cEJhc2UgfSBmcm9tICcuL3RhYnMuY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtdGFicy1ncm91cCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0YWJzLWdyb3VwLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIElneFRhYnNHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIElneFRhYnNHcm91cEJhc2UsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0NoZWNrZWQge1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2lzU2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgYWxsb3dzIHlvdSB0byBlbmFibGUvZGlzYWJsZSB0aGUgYElneFRhYkdyb3VwQ29tcG9uZW50YC5cbiAgICAqYGBgaHRtbFxuICAgICo8aWd4LXRhYnMtZ3JvdXAgbGFiZWw9XCJUYWIgMiAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0XCIgaWNvbj1cImhvbWVcIiBbZGlzYWJsZWRdPVwidHJ1ZVwiPlxuICAgICpgYGBcbiAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBgaWNvbmAuXG4gICAgKiBUaGUgdmFsdWUgc2hvdWxkIGJlIHZhbGlkIGljb24gbmFtZSBmcm9tIHtAbGluayBodHRwczovL21hdGVyaWFsLmlvL3Rvb2xzL2ljb25zLz9zdHlsZT1iYXNlbGluZX0uXG4gICAgKmBgYGh0bWxcbiAgICAqPGlneC10YWJzLWdyb3VwIGxhYmVsPVwiVGFiIDFcIiBpY29uPVwiaG9tZVwiPlxuICAgICpgYGBcbiAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGljb246IHN0cmluZztcblxuICAgIC8qKlxuICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGBsYWJlbGAuXG4gICAgKmBgYGh0bWxcbiAgICAqPGlneC10YWJzLWdyb3VwIGxhYmVsPVwiVGFiIDFcIiBpY29uPVwiZm9sZGVyXCI+XG4gICAgKmBgYFxuICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbGFiZWw6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB3aGV0aGVyIGEgdGFiIGdyb3VwIGlzIHNlbGVjdGVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnRhYkdyb3VwLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNTZWxlY3RlZCA9IHRoaXMudGFiR3JvdXAuaXNTZWxlY3RlZDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VGFic0dyb3VwQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldCBpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNTZWxlY3RlZDtcbiAgICB9XG4gICAgcHVibGljIHNldCBpc1NlbGVjdGVkKG5ld1ZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1NlbGVjdGVkICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNTZWxlY3RlZCA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4VGFiSXRlbVRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IElneFRhYkl0ZW1UZW1wbGF0ZURpcmVjdGl2ZSwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIHRhYlRlbXBsYXRlOiBJZ3hUYWJJdGVtVGVtcGxhdGVEaXJlY3RpdmU7XG5cbiAgICBwcml2YXRlIF90YWJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RhYnM6IElneFRhYnNCYXNlLCBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgICBwdWJsaWMgcm9sZSA9ICd0YWJwYW5lbCc7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtdGFic19fZ3JvdXAnKVxuICAgIHB1YmxpYyBzdHlsZUNsYXNzID0gdHJ1ZTtcblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvblJlc2l6ZShldmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybUNvbnRlbnRBbmltYXRpb24oMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBhY2Nlc3NvciB0aGF0IHJldHVybnMgdGhlIGBJZ3hUYWJJdGVtQ29tcG9uZW50YCBjb21wb25lbnQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIEBWaWV3Q2hpbGQoXCJNeVRhYnNHcm91cFwiKVxuICAgICAqIHB1YmxpYyB0YWI6IElneFRhYnNHcm91cENvbXBvbmVudDtcbiAgICAgKiBuZ0FmdGVyVmlld0luSXQoKXtcbiAgICAgKiAgICBsZXQgdGFiQ29tcG9uZW50ID0gdGhpcy50YWIucmVsYXRlZFRhYjtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgZ2V0IHJlbGF0ZWRUYWIoKTogSWd4VGFiSXRlbUNvbXBvbmVudCB7XG4gICAgICAgIGlmICh0aGlzLl90YWJzLnRhYnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90YWJzLnRhYnMudG9BcnJheSgpW3RoaXMuaW5kZXhdIGFzIElneFRhYkl0ZW1Db21wb25lbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBhY2Nlc3NvciB0aGF0IHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBpbmRleCBvZiB0aGUgYElneFRhYnNHcm91cENvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIEBWaWV3Q2hpbGQoXCJNeVRhYnNHcm91cFwiKVxuICAgICAqIHB1YmxpYyB0YWI6IElneFRhYnNHcm91cENvbXBvbmVudDtcbiAgICAgKiBuZ0FmdGVyVmlld0luSXQoKXtcbiAgICAgKiAgICBsZXQgdGFiSW5kZXggPSB0aGlzLnRhYi5pbmRleDtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgZ2V0IGluZGV4KCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl90YWJzLmdyb3Vwcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhYnMuZ3JvdXBzLnRvQXJyYXkoKS5pbmRleE9mKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGdldCBjdXN0b21UYWJUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhYlRlbXBsYXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHNldCBjdXN0b21UYWJUZW1wbGF0ZSh0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgICAgICB0aGlzLl90YWJUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy50YWJUZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fdGFiVGVtcGxhdGUgPSB0aGlzLnRhYlRlbXBsYXRlLnRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIGBpZ3gtdGFiLWl0ZW0tJHt0aGlzLmluZGV4fWApO1xuICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGBpZ3gtdGFic19fZ3JvdXAtJHt0aGlzLmluZGV4fWApO1xuXG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhYkl0ZW0gPSB0aGlzLnJlbGF0ZWRUYWIubmF0aXZlVGFiSXRlbS5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1Db250ZW50QW5pbWF0aW9uKDApO1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1JbmRpY2F0b3JBbmltYXRpb24odGFiSXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIG1ldGhvZCB0aGF0IHNldHMgdGhlIGZvY3VzIG9uIGEgdGFiLlxuICAgICAqIEBtZW1iZXJvZiB7QGxpbmsgSWd4VGFic0dyb3VwQ29tcG9uZW50fVxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15Q2hpbGRcIilcbiAgICAgKnB1YmxpYyB0YWIgOiBJZ3hUYWJzR3JvdXBDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICB0aGlzLnRhYi5zZWxlY3QoKTtcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqIEBwYXJhbSBmb2N1c0RlbGF5IEEgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgZXhwZWN0ZWQgZGVsYXkuXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdChmb2N1c0RlbGF5ID0gMjAwKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucmVsYXRlZFRhYi50YWJpbmRleCA9IDA7XG5cbiAgICAgICAgaWYgKGZvY3VzRGVsYXkgIT09IDApIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVsYXRlZFRhYi5uYXRpdmVUYWJJdGVtLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH0sIGZvY3VzRGVsYXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuX3RhYnMub25UYWJJdGVtU2VsZWN0ZWQuZW1pdCh7IHRhYjogdGhpcy5fdGFicy50YWJzLnRvQXJyYXkoKVt0aGlzLmluZGV4XSwgZ3JvdXA6IHRoaXMgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRhYkVsZW1lbnQgPSB0aGlzLnJlbGF0ZWRUYWIubmF0aXZlVGFiSXRlbS5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgIC8vIFNjcm9sbCB0byB0aGUgbGVmdFxuICAgICAgICBpZiAodGFiRWxlbWVudC5vZmZzZXRMZWZ0IDwgdGhpcy5fdGFicy5vZmZzZXQpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhYnMuc2Nyb2xsRWxlbWVudCh0YWJFbGVtZW50LCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTY3JvbGwgdG8gdGhlIHJpZ2h0XG4gICAgICAgIGNvbnN0IHZpZXdQb3J0T2Zmc2V0V2lkdGggPSB0aGlzLl90YWJzLnZpZXdQb3J0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gKHRhYkVsZW1lbnQub2Zmc2V0TGVmdCArIHRhYkVsZW1lbnQub2Zmc2V0V2lkdGgpIC0gKHZpZXdQb3J0T2Zmc2V0V2lkdGggKyB0aGlzLl90YWJzLm9mZnNldCk7XG4gICAgICAgIC8vIEZpeCBmb3IgSUUgMTEsIGEgZGlmZmVyZW5jZSBpcyBhY2N1bXVsYXRlZCBmcm9tIHRoZSB3aWR0aHMgY2FsY3VsYXRpb25zXG4gICAgICAgIGlmIChkZWx0YSA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhYnMuc2Nyb2xsRWxlbWVudCh0YWJFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJhbnNmb3JtQ29udGVudEFuaW1hdGlvbigwLjIpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUluZGljYXRvckFuaW1hdGlvbih0YWJFbGVtZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRyYW5zZm9ybUNvbnRlbnRBbmltYXRpb24oZHVyYXRpb246IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250ZW50T2Zmc2V0ID0gdGhpcy5fdGFicy50YWJzQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggKiB0aGlzLmluZGV4O1xuICAgICAgICB0aGlzLl90YWJzLmNvbnRlbnRzQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7ZHVyYXRpb259c2A7XG4gICAgICAgIHRoaXMuX3RhYnMuY29udGVudHNDb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7LWNvbnRlbnRPZmZzZXR9cHgpYDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRyYW5zZm9ybUluZGljYXRvckFuaW1hdGlvbihlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLl90YWJzLnNlbGVjdGVkSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHtlbGVtZW50Lm9mZnNldFdpZHRofXB4YDtcbiAgICAgICAgdGhpcy5fdGFicy5zZWxlY3RlZEluZGljYXRvci5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtlbGVtZW50Lm9mZnNldExlZnR9cHgpYDtcbiAgICB9XG59XG4iXX0=