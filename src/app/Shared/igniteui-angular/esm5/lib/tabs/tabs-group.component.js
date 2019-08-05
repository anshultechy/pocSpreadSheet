/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, ElementRef, HostBinding, Input, HostListener } from '@angular/core';
import { IgxTabItemTemplateDirective } from './tabs.directives';
import { IgxTabsBase } from './tabs.common';
var IgxTabsGroupComponent = /** @class */ (function () {
    function IgxTabsGroupComponent(_tabs, _element) {
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
    Object.defineProperty(IgxTabsGroupComponent.prototype, "isSelected", {
        /**
         * Sets/gets whether a tab group is selected.
         * ```typescript
         * this.tabGroup.isSelected = true;
         * ```
         * ```typescript
         * let isSelected = this.tabGroup.isSelected;
         * ```
         * @memberof IgxTabsGroupComponent
         */
        get: /**
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
        function () {
            return this._isSelected;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this._isSelected !== newValue) {
                if (newValue) {
                    this.select();
                }
                else {
                    this._isSelected = newValue;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    IgxTabsGroupComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isSelected) {
            this.transformContentAnimation(0);
        }
    };
    Object.defineProperty(IgxTabsGroupComponent.prototype, "relatedTab", {
        /**
         * An accessor that returns the `IgxTabItemComponent` component.
         * ```typescript
         * @ViewChild("MyTabsGroup")
         * public tab: IgxTabsGroupComponent;
         * ngAfterViewInIt(){
         *    let tabComponent = this.tab.relatedTab;
         * }
         * ```
         */
        get: /**
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
        function () {
            if (this._tabs.tabs) {
                return (/** @type {?} */ (this._tabs.tabs.toArray()[this.index]));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabsGroupComponent.prototype, "index", {
        /**
         * An accessor that returns the value of the index of the `IgxTabsGroupComponent`.
         * ```typescript
         * @ViewChild("MyTabsGroup")
         * public tab: IgxTabsGroupComponent;
         * ngAfterViewInIt(){
         *    let tabIndex = this.tab.index;
         * }
         * ```
         */
        get: /**
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
        function () {
            if (this._tabs.groups) {
                return this._tabs.groups.toArray().indexOf(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabsGroupComponent.prototype, "customTabTemplate", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._tabTemplate;
        },
        /**
         *@hidden
         */
        set: /**
         * @hidden
         * @param {?} template
         * @return {?}
         */
        function (template) {
            this._tabTemplate = template;
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
    IgxTabsGroupComponent.prototype.ngAfterContentInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.tabTemplate) {
            this._tabTemplate = this.tabTemplate.template;
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTabsGroupComponent.prototype.ngAfterViewChecked = /**
     * @hidden
     * @return {?}
     */
    function () {
        this._element.nativeElement.setAttribute('aria-labelledby', "igx-tab-item-" + this.index);
        this._element.nativeElement.setAttribute('id', "igx-tabs__group-" + this.index);
        if (this.isSelected) {
            /** @type {?} */
            var tabItem = this.relatedTab.nativeTabItem.nativeElement;
            this.transformContentAnimation(0);
            this.transformIndicatorAnimation(tabItem);
        }
    };
    /**
     * A method that sets the focus on a tab.
     * @memberof {@link IgxTabsGroupComponent}
     *```typescript
     *@ViewChild("MyChild")
     *public tab : IgxTabsGroupComponent;
     *ngAfterViewInit(){
     *    this.tab.select();
     *}
     *```
     * @param focusDelay A number representing the expected delay.
     */
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
    IgxTabsGroupComponent.prototype.select = /**
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
    function (focusDelay) {
        var _this = this;
        if (focusDelay === void 0) { focusDelay = 200; }
        if (this.disabled || this.isSelected) {
            return;
        }
        this._isSelected = true;
        this.relatedTab.tabindex = 0;
        if (focusDelay !== 0) {
            setTimeout(function () {
                _this.relatedTab.nativeTabItem.nativeElement.focus();
            }, focusDelay);
        }
        this.handleSelection();
        this._tabs.onTabItemSelected.emit({ tab: this._tabs.tabs.toArray()[this.index], group: this });
    };
    /**
     * @private
     * @return {?}
     */
    IgxTabsGroupComponent.prototype.handleSelection = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tabElement = this.relatedTab.nativeTabItem.nativeElement;
        // Scroll to the left
        if (tabElement.offsetLeft < this._tabs.offset) {
            this._tabs.scrollElement(tabElement, false);
        }
        // Scroll to the right
        /** @type {?} */
        var viewPortOffsetWidth = this._tabs.viewPort.nativeElement.offsetWidth;
        /** @type {?} */
        var delta = (tabElement.offsetLeft + tabElement.offsetWidth) - (viewPortOffsetWidth + this._tabs.offset);
        // Fix for IE 11, a difference is accumulated from the widths calculations
        if (delta > 1) {
            this._tabs.scrollElement(tabElement, true);
        }
        this.transformContentAnimation(0.2);
        this.transformIndicatorAnimation(tabElement);
    };
    /**
     * @private
     * @param {?} duration
     * @return {?}
     */
    IgxTabsGroupComponent.prototype.transformContentAnimation = /**
     * @private
     * @param {?} duration
     * @return {?}
     */
    function (duration) {
        /** @type {?} */
        var contentOffset = this._tabs.tabsContainer.nativeElement.offsetWidth * this.index;
        this._tabs.contentsContainer.nativeElement.style.transitionDuration = duration + "s";
        this._tabs.contentsContainer.nativeElement.style.transform = "translate(" + -contentOffset + "px)";
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    IgxTabsGroupComponent.prototype.transformIndicatorAnimation = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        this._tabs.selectedIndicator.nativeElement.style.width = element.offsetWidth + "px";
        this._tabs.selectedIndicator.nativeElement.style.transform = "translate(" + element.offsetLeft + "px)";
    };
    IgxTabsGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-tabs-group',
                    template: "<ng-content *ngIf=\"isSelected\"></ng-content>\n"
                }] }
    ];
    /** @nocollapse */
    IgxTabsGroupComponent.ctorParameters = function () { return [
        { type: IgxTabsBase },
        { type: ElementRef }
    ]; };
    IgxTabsGroupComponent.propDecorators = {
        disabled: [{ type: Input }],
        icon: [{ type: Input }],
        label: [{ type: Input }],
        tabTemplate: [{ type: ContentChild, args: [IgxTabItemTemplateDirective, { read: IgxTabItemTemplateDirective, static: true },] }],
        role: [{ type: HostBinding, args: ['attr.role',] }],
        styleClass: [{ type: HostBinding, args: ['class.igx-tabs__group',] }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return IgxTabsGroupComponent;
}());
export { IgxTabsGroupComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3RhYnMvdGFicy1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFHSCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUVMLFlBQVksRUFDZixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUU5RDtJQXVFSSwrQkFBb0IsS0FBa0IsRUFBVSxRQUFvQjtRQUFoRCxVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBWTs7OztRQTdENUQsZ0JBQVcsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7UUFTckIsYUFBUSxHQUFHLEtBQUssQ0FBQzs7OztRQTJEakIsU0FBSSxHQUFHLFVBQVUsQ0FBQzs7OztRQU1sQixlQUFVLEdBQUcsSUFBSSxDQUFDO0lBWnpCLENBQUM7SUF0QkQsc0JBQVcsNkNBQVU7UUFWckI7Ozs7Ozs7OztXQVNHOzs7Ozs7Ozs7Ozs7UUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDOzs7OztRQUNELFVBQXNCLFFBQWlCO1lBQ25DLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxRQUFRLEVBQUU7Z0JBQy9CLElBQUksUUFBUSxFQUFFO29CQUNWLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDakI7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7aUJBQy9CO2FBQ0o7UUFDTCxDQUFDOzs7T0FUQTs7Ozs7SUFtQ00sd0NBQVE7Ozs7SUFEZixVQUNnQixLQUFLO1FBQ2pCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckM7SUFDTCxDQUFDO0lBWUQsc0JBQUksNkNBQVU7UUFWZDs7Ozs7Ozs7O1dBU0c7Ozs7Ozs7Ozs7OztRQUNIO1lBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtnQkFDakIsT0FBTyxtQkFBQSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQXVCLENBQUM7YUFDdkU7UUFDTCxDQUFDOzs7T0FBQTtJQVlELHNCQUFJLHdDQUFLO1FBVlQ7Ozs7Ozs7OztXQVNHOzs7Ozs7Ozs7Ozs7UUFDSDtZQUNJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BEO1FBQ0wsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSxvREFBaUI7UUFIckI7O1dBRUc7Ozs7O1FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQztRQUVEOztXQUVHOzs7Ozs7UUFDSCxVQUFzQixRQUEwQjtZQUM1QyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztRQUNqQyxDQUFDOzs7T0FQQTtJQVNEOztPQUVHOzs7OztJQUNJLGtEQUFrQjs7OztJQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1NBQ2pEO0lBQ0wsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNJLGtEQUFrQjs7OztJQUF6QjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxrQkFBZ0IsSUFBSSxDQUFDLEtBQU8sQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUscUJBQW1CLElBQUksQ0FBQyxLQUFPLENBQUMsQ0FBQztRQUVoRixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7O2dCQUNYLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhO1lBQzNELElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0M7SUFDTCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7Ozs7Ozs7Ozs7Ozs7O0lBQ0ksc0NBQU07Ozs7Ozs7Ozs7Ozs7SUFBYixVQUFjLFVBQWdCO1FBQTlCLGlCQWVDO1FBZmEsMkJBQUEsRUFBQSxnQkFBZ0I7UUFDMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEMsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRTdCLElBQUksVUFBVSxLQUFLLENBQUMsRUFBRTtZQUNsQixVQUFVLENBQUM7Z0JBQ1AsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3hELENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDbkcsQ0FBQzs7Ozs7SUFFTywrQ0FBZTs7OztJQUF2Qjs7WUFDVSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYTtRQUU5RCxxQkFBcUI7UUFDckIsSUFBSSxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMvQzs7O1lBR0ssbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVc7O1lBQ25FLEtBQUssR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDMUcsMEVBQTBFO1FBQzFFLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM5QztRQUVELElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7O0lBRU8seURBQXlCOzs7OztJQUFqQyxVQUFrQyxRQUFnQjs7WUFDeEMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFDckYsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFNLFFBQVEsTUFBRyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsZUFBYSxDQUFDLGFBQWEsUUFBSyxDQUFDO0lBQ2xHLENBQUM7Ozs7OztJQUVPLDJEQUEyQjs7Ozs7SUFBbkMsVUFBb0MsT0FBb0I7UUFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBTSxPQUFPLENBQUMsV0FBVyxPQUFJLENBQUM7UUFDcEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxlQUFhLE9BQU8sQ0FBQyxVQUFVLFFBQUssQ0FBQztJQUN0RyxDQUFDOztnQkE1TkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDREQUF3QztpQkFDM0M7Ozs7Z0JBTFEsV0FBVztnQkFUaEIsVUFBVTs7OzJCQTZCVCxLQUFLO3VCQVVMLEtBQUs7d0JBU0wsS0FBSzs4QkE2QkwsWUFBWSxTQUFDLDJCQUEyQixFQUFFLEVBQUUsSUFBSSxFQUFFLDJCQUEyQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7dUJBVzdGLFdBQVcsU0FBQyxXQUFXOzZCQU12QixXQUFXLFNBQUMsdUJBQXVCOzJCQUduQyxZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOztJQXVJN0MsNEJBQUM7Q0FBQSxBQTdORCxJQTZOQztTQXhOWSxxQkFBcUI7Ozs7Ozs7SUFLOUIsNENBQTRCOzs7Ozs7OztJQVE1Qix5Q0FDd0I7Ozs7Ozs7OztJQVN4QixxQ0FDb0I7Ozs7Ozs7O0lBUXBCLHNDQUNxQjs7Ozs7O0lBNEJyQiw0Q0FDbUQ7Ozs7O0lBRW5ELDZDQUF1Qzs7Ozs7SUFRdkMscUNBQ3lCOzs7OztJQUt6QiwyQ0FDeUI7Ozs7O0lBYmIsc0NBQTBCOzs7OztJQUFFLHlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBBZnRlclZpZXdDaGVja2VkLFxuICAgIENvbXBvbmVudCxcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgRWxlbWVudFJlZixcbiAgICBIb3N0QmluZGluZyxcbiAgICBJbnB1dCxcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBIb3N0TGlzdGVuZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElneFRhYkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3RhYi1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hUYWJJdGVtVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3RhYnMuZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBJZ3hUYWJzQmFzZSwgSWd4VGFic0dyb3VwQmFzZSB9IGZyb20gJy4vdGFicy5jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lneC10YWJzLWdyb3VwJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RhYnMtZ3JvdXAuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgSWd4VGFic0dyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgSWd4VGFic0dyb3VwQmFzZSwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfaXNTZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBhbGxvd3MgeW91IHRvIGVuYWJsZS9kaXNhYmxlIHRoZSBgSWd4VGFiR3JvdXBDb21wb25lbnRgLlxuICAgICpgYGBodG1sXG4gICAgKjxpZ3gtdGFicy1ncm91cCBsYWJlbD1cIlRhYiAyICBMb3JlbSBpcHN1bSBkb2xvciBzaXRcIiBpY29uPVwiaG9tZVwiIFtkaXNhYmxlZF09XCJ0cnVlXCI+XG4gICAgKmBgYFxuICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGBpY29uYC5cbiAgICAqIFRoZSB2YWx1ZSBzaG91bGQgYmUgdmFsaWQgaWNvbiBuYW1lIGZyb20ge0BsaW5rIGh0dHBzOi8vbWF0ZXJpYWwuaW8vdG9vbHMvaWNvbnMvP3N0eWxlPWJhc2VsaW5lfS5cbiAgICAqYGBgaHRtbFxuICAgICo8aWd4LXRhYnMtZ3JvdXAgbGFiZWw9XCJUYWIgMVwiIGljb249XCJob21lXCI+XG4gICAgKmBgYFxuICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWNvbjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYGxhYmVsYC5cbiAgICAqYGBgaHRtbFxuICAgICo8aWd4LXRhYnMtZ3JvdXAgbGFiZWw9XCJUYWIgMVwiIGljb249XCJmb2xkZXJcIj5cbiAgICAqYGBgXG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHdoZXRoZXIgYSB0YWIgZ3JvdXAgaXMgc2VsZWN0ZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMudGFiR3JvdXAuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc1NlbGVjdGVkID0gdGhpcy50YWJHcm91cC5pc1NlbGVjdGVkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hUYWJzR3JvdXBDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGlzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1NlbGVjdGVkO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGlzU2VsZWN0ZWQobmV3VmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU2VsZWN0ZWQgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1NlbGVjdGVkID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChJZ3hUYWJJdGVtVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogSWd4VGFiSXRlbVRlbXBsYXRlRGlyZWN0aXZlLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgdGFiVGVtcGxhdGU6IElneFRhYkl0ZW1UZW1wbGF0ZURpcmVjdGl2ZTtcblxuICAgIHByaXZhdGUgX3RhYlRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGFiczogSWd4VGFic0Jhc2UsIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICAgIHB1YmxpYyByb2xlID0gJ3RhYnBhbmVsJztcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC10YWJzX19ncm91cCcpXG4gICAgcHVibGljIHN0eWxlQ2xhc3MgPSB0cnVlO1xuXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtQ29udGVudEFuaW1hdGlvbigwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIGFjY2Vzc29yIHRoYXQgcmV0dXJucyB0aGUgYElneFRhYkl0ZW1Db21wb25lbnRgIGNvbXBvbmVudC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogQFZpZXdDaGlsZChcIk15VGFic0dyb3VwXCIpXG4gICAgICogcHVibGljIHRhYjogSWd4VGFic0dyb3VwQ29tcG9uZW50O1xuICAgICAqIG5nQWZ0ZXJWaWV3SW5JdCgpe1xuICAgICAqICAgIGxldCB0YWJDb21wb25lbnQgPSB0aGlzLnRhYi5yZWxhdGVkVGFiO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBnZXQgcmVsYXRlZFRhYigpOiBJZ3hUYWJJdGVtQ29tcG9uZW50IHtcbiAgICAgICAgaWYgKHRoaXMuX3RhYnMudGFicykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhYnMudGFicy50b0FycmF5KClbdGhpcy5pbmRleF0gYXMgSWd4VGFiSXRlbUNvbXBvbmVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIGFjY2Vzc29yIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGluZGV4IG9mIHRoZSBgSWd4VGFic0dyb3VwQ29tcG9uZW50YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogQFZpZXdDaGlsZChcIk15VGFic0dyb3VwXCIpXG4gICAgICogcHVibGljIHRhYjogSWd4VGFic0dyb3VwQ29tcG9uZW50O1xuICAgICAqIG5nQWZ0ZXJWaWV3SW5JdCgpe1xuICAgICAqICAgIGxldCB0YWJJbmRleCA9IHRoaXMudGFiLmluZGV4O1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBnZXQgaW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuX3RhYnMuZ3JvdXBzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFicy5ncm91cHMudG9BcnJheSgpLmluZGV4T2YodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IGN1c3RvbVRhYlRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFiVGVtcGxhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgc2V0IGN1c3RvbVRhYlRlbXBsYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgICAgIHRoaXMuX3RhYlRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnRhYlRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl90YWJUZW1wbGF0ZSA9IHRoaXMudGFiVGVtcGxhdGUudGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgYGlneC10YWItaXRlbS0ke3RoaXMuaW5kZXh9YCk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYGlneC10YWJzX19ncm91cC0ke3RoaXMuaW5kZXh9YCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgY29uc3QgdGFiSXRlbSA9IHRoaXMucmVsYXRlZFRhYi5uYXRpdmVUYWJJdGVtLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybUNvbnRlbnRBbmltYXRpb24oMCk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybUluZGljYXRvckFuaW1hdGlvbih0YWJJdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgbWV0aG9kIHRoYXQgc2V0cyB0aGUgZm9jdXMgb24gYSB0YWIuXG4gICAgICogQG1lbWJlcm9mIHtAbGluayBJZ3hUYWJzR3JvdXBDb21wb25lbnR9XG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwiTXlDaGlsZFwiKVxuICAgICAqcHVibGljIHRhYiA6IElneFRhYnNHcm91cENvbXBvbmVudDtcbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqICAgIHRoaXMudGFiLnNlbGVjdCgpO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICogQHBhcmFtIGZvY3VzRGVsYXkgQSBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBleHBlY3RlZCBkZWxheS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0KGZvY3VzRGVsYXkgPSAyMDApOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZWxhdGVkVGFiLnRhYmluZGV4ID0gMDtcblxuICAgICAgICBpZiAoZm9jdXNEZWxheSAhPT0gMCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWxhdGVkVGFiLm5hdGl2ZVRhYkl0ZW0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfSwgZm9jdXNEZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3Rpb24oKTtcbiAgICAgICAgdGhpcy5fdGFicy5vblRhYkl0ZW1TZWxlY3RlZC5lbWl0KHsgdGFiOiB0aGlzLl90YWJzLnRhYnMudG9BcnJheSgpW3RoaXMuaW5kZXhdLCBncm91cDogdGhpcyB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZVNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGFiRWxlbWVudCA9IHRoaXMucmVsYXRlZFRhYi5uYXRpdmVUYWJJdGVtLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRoZSBsZWZ0XG4gICAgICAgIGlmICh0YWJFbGVtZW50Lm9mZnNldExlZnQgPCB0aGlzLl90YWJzLm9mZnNldCkge1xuICAgICAgICAgICAgdGhpcy5fdGFicy5zY3JvbGxFbGVtZW50KHRhYkVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNjcm9sbCB0byB0aGUgcmlnaHRcbiAgICAgICAgY29uc3Qgdmlld1BvcnRPZmZzZXRXaWR0aCA9IHRoaXMuX3RhYnMudmlld1BvcnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgY29uc3QgZGVsdGEgPSAodGFiRWxlbWVudC5vZmZzZXRMZWZ0ICsgdGFiRWxlbWVudC5vZmZzZXRXaWR0aCkgLSAodmlld1BvcnRPZmZzZXRXaWR0aCArIHRoaXMuX3RhYnMub2Zmc2V0KTtcbiAgICAgICAgLy8gRml4IGZvciBJRSAxMSwgYSBkaWZmZXJlbmNlIGlzIGFjY3VtdWxhdGVkIGZyb20gdGhlIHdpZHRocyBjYWxjdWxhdGlvbnNcbiAgICAgICAgaWYgKGRlbHRhID4gMSkge1xuICAgICAgICAgICAgdGhpcy5fdGFicy5zY3JvbGxFbGVtZW50KHRhYkVsZW1lbnQsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmFuc2Zvcm1Db250ZW50QW5pbWF0aW9uKDAuMik7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtSW5kaWNhdG9yQW5pbWF0aW9uKHRhYkVsZW1lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdHJhbnNmb3JtQ29udGVudEFuaW1hdGlvbihkdXJhdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRPZmZzZXQgPSB0aGlzLl90YWJzLnRhYnNDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAqIHRoaXMuaW5kZXg7XG4gICAgICAgIHRoaXMuX3RhYnMuY29udGVudHNDb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1zYDtcbiAgICAgICAgdGhpcy5fdGFicy5jb250ZW50c0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHstY29udGVudE9mZnNldH1weClgO1xuICAgIH1cblxuICAgIHByaXZhdGUgdHJhbnNmb3JtSW5kaWNhdG9yQW5pbWF0aW9uKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3RhYnMuc2VsZWN0ZWRJbmRpY2F0b3IubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IGAke2VsZW1lbnQub2Zmc2V0V2lkdGh9cHhgO1xuICAgICAgICB0aGlzLl90YWJzLnNlbGVjdGVkSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke2VsZW1lbnQub2Zmc2V0TGVmdH1weClgO1xuICAgIH1cbn1cbiJdfQ==