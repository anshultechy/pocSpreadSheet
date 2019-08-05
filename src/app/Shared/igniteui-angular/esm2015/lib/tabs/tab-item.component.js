/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, ElementRef, HostBinding, HostListener, Input, TemplateRef, ViewChild } from '@angular/core';
import { IgxTabsGroupComponent } from './tabs-group.component';
import { IgxTabsBase } from './tabs.common';
import { IgxTabItemTemplateDirective } from './tabs.directives';
export class IgxTabItemComponent {
    /**
     * @param {?} _tabs
     * @param {?} _element
     */
    constructor(_tabs, _element) {
        this._tabs = _tabs;
        this._element = _element;
        this._changesCount = 0; // changes and updates accordingly applied to the tab.
        // changes and updates accordingly applied to the tab.
        this._isSelected = false;
        this._disabled = false;
        /**
         * @hidden \@internal
         */
        this.role = 'tab';
        /**
         * @hidden \@internal
         */
        this.id = 'igx-tab-item-' + this.index;
        /**
         * @hidden \@internal
         */
        this.ariaLabel = this.label;
        /**
         * @hidden \@internal
         */
        this.ariaDisabled = this.disabled;
        /**
         * @hidden \@internal
         */
        this.ariaSelected = this.isSelected;
        /**
         * @hidden \@internal
         */
        this.ariaControls = 'igx-tab-item-group-' + this.index;
        this._nativeTabItem = _element;
    }
    /**
     * An \@Input property that sets the value of the `icon`.
     * The value should be valid icon name from {\@link https://material.io/tools/icons/?style=baseline}.
     * ```html
     * <igx-tab-item label="Tab 1" icon="home">
     * ```
     * @return {?}
     */
    get icon() {
        return this.relatedGroup ? this.relatedGroup.icon : this._icon;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set icon(newValue) {
        if (this.relatedGroup) {
            this.relatedGroup.icon = newValue;
        }
        this._icon = newValue;
    }
    /**
     * An \@Input property that sets the value of the `label`.
     * ```html
     * <igx-tabs-item label="Tab 2" icon="folder">
     * ```
     * @return {?}
     */
    get label() {
        return this.relatedGroup ? this.relatedGroup.label : this._label;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set label(newValue) {
        if (this.relatedGroup) {
            this.relatedGroup.label = newValue;
        }
        this._label = newValue;
    }
    /**
     * @return {?}
     */
    get provideCssClassSelected() {
        return this.isSelected;
    }
    /**
     * @return {?}
     */
    get provideCssClassDisabled() {
        return this.disabled;
    }
    /**
     * @return {?}
     */
    get provideCssClass() {
        return (!this.disabled && !this.isSelected);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.select();
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        if (this.isSelected) {
            this._tabs.selectedIndicator.nativeElement.style.visibility = 'visible';
            this._tabs.selectedIndicator.nativeElement.style.width = `${this.nativeTabItem.nativeElement.offsetWidth}px`;
            this._tabs.selectedIndicator.nativeElement.style.transform = `translate(${this.nativeTabItem.nativeElement.offsetLeft}px)`;
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownArrowRight(event) {
        this.onKeyDown(false);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownArrowLeft(event) {
        this.onKeyDown(true);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownHome(event) {
        event.preventDefault();
        this.onKeyDown(false, 0);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownEnd(event) {
        event.preventDefault();
        this.onKeyDown(false, this._tabs.tabs.toArray().length - 1);
    }
    /**
     * @hidden
     * @return {?}
     */
    get changesCount() {
        return this._changesCount;
    }
    /**
     * @hidden
     * @return {?}
     */
    get nativeTabItem() {
        return this._nativeTabItem;
    }
    /**
     * 	Gets whether the tab is disabled.
     * ```
     * const disabledItem = this.myTabComponent.tabs.first.disabled;
     * ```
     * @return {?}
     */
    get disabled() {
        return this.relatedGroup ? this.relatedGroup.disabled : this._disabled;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set disabled(newValue) {
        if (this.relatedGroup) {
            this.relatedGroup.disabled = newValue;
        }
        else {
            this._disabled = newValue;
        }
    }
    /**
     * Gets whether the tab is selected.
     * ```typescript
     * const selectedItem = this.myTabComponent.tabs.first.isSelected;
     * ```
     * @return {?}
     */
    get isSelected() {
        return this.relatedGroup ? this.relatedGroup.isSelected : this._isSelected;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set isSelected(newValue) {
        if (this.relatedGroup) {
            this.relatedGroup.isSelected = newValue;
        }
        else if (this._isSelected !== newValue) {
            this._isSelected = newValue;
            if (this._isSelected) {
                this.select();
            }
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    get index() {
        if (this._tabs.tabs) {
            return this._tabs.tabs.toArray().indexOf(this);
        }
    }
    /**
     * @hidden
     * @param {?=} focusDelay
     * @return {?}
     */
    select(focusDelay = 200) {
        if (this.relatedGroup) {
            this.relatedGroup.select(focusDelay);
        }
        else {
            this._isSelected = true;
            this._tabs.onTabItemSelected.emit({ tab: this, group: null });
            this.handleTabSelectionAnimation();
        }
    }
    /**
     * @private
     * @return {?}
     */
    handleTabSelectionAnimation() {
        /** @type {?} */
        const tabElement = this.nativeTabItem.nativeElement;
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
        this.transformIndicatorAnimation(tabElement);
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    transformIndicatorAnimation(element) {
        if (this._tabs && this._tabs.selectedIndicator) {
            this._tabs.selectedIndicator.nativeElement.style.visibility = `visible`;
            this._tabs.selectedIndicator.nativeElement.style.width = `${element.offsetWidth}px`;
            this._tabs.selectedIndicator.nativeElement.style.transform = `translate(${element.offsetLeft}px)`;
        }
    }
    /**
     * @private
     * @param {?} isLeftArrow
     * @param {?=} index
     * @return {?}
     */
    onKeyDown(isLeftArrow, index = null) {
        /** @type {?} */
        const tabsArray = this._tabs.tabs.toArray();
        if (index === null) {
            index = (isLeftArrow)
                ? (this._tabs.selectedIndex === 0) ? tabsArray.length - 1 : this._tabs.selectedIndex - 1
                : (this._tabs.selectedIndex === tabsArray.length - 1) ? 0 : this._tabs.selectedIndex + 1;
        }
        /** @type {?} */
        const tab = tabsArray[index];
        tab.select(200);
    }
    /**
     * @hidden
     * @return {?}
     */
    get template() {
        if (this.relatedGroup && this.relatedGroup.customTabTemplate) {
            return this.relatedGroup.customTabTemplate;
        }
        if (this.customTabTemplateDir) {
            return this.customTabTemplateDir.template;
        }
        return this.defaultTabTemplate;
    }
    /**
     * @hidden
     * @return {?}
     */
    get context() {
        return this.relatedGroup ? this.relatedGroup : this;
    }
}
IgxTabItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-tab-item',
                template: "<ng-template #defaultTabTemplate let-context>\n    <div *ngIf=\"context.icon\" class=\"igx-tabs__header-menu-item-icon\">\n        <igx-icon fontSet=\"material\">{{context.icon}}</igx-icon>\n        <igx-badge [value]=\"changesCount\" [hidden]=\"changesCount === 0\"></igx-badge>\n    </div>\n    <div *ngIf=\"context.label\" ngClass=\"igx-tabs__item-label\">{{context.label}}</div>\n</ng-template>\n<ng-container *ngTemplateOutlet=\"template; context: { $implicit: this.context }\">\n</ng-container>"
            }] }
];
/** @nocollapse */
IgxTabItemComponent.ctorParameters = () => [
    { type: IgxTabsBase },
    { type: ElementRef }
];
IgxTabItemComponent.propDecorators = {
    relatedGroup: [{ type: Input }],
    icon: [{ type: Input }],
    label: [{ type: Input }],
    defaultTabTemplate: [{ type: ViewChild, args: ['defaultTabTemplate', { read: TemplateRef, static: true },] }],
    customTabTemplateDir: [{ type: ContentChild, args: [IgxTabItemTemplateDirective, { read: IgxTabItemTemplateDirective, static: true },] }],
    provideCssClassSelected: [{ type: HostBinding, args: ['class.igx-tabs__header-menu-item--selected',] }],
    provideCssClassDisabled: [{ type: HostBinding, args: ['class.igx-tabs__header-menu-item--disabled',] }],
    provideCssClass: [{ type: HostBinding, args: ['class.igx-tabs__header-menu-item',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    id: [{ type: HostBinding, args: ['attr.id',] }],
    ariaLabel: [{ type: HostBinding, args: ['attr.aria-label',] }],
    ariaDisabled: [{ type: HostBinding, args: ['attr.aria-disabled',] }],
    ariaSelected: [{ type: HostBinding, args: ['attr.aria-selected',] }],
    ariaControls: [{ type: HostBinding, args: ['attr.aria-controls',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }],
    onKeydownArrowRight: [{ type: HostListener, args: ['keydown.arrowright', ['$event'],] }],
    onKeydownArrowLeft: [{ type: HostListener, args: ['keydown.arrowleft', ['$event'],] }],
    onKeydownHome: [{ type: HostListener, args: ['keydown.home', ['$event'],] }],
    onKeydownEnd: [{ type: HostListener, args: ['keydown.end', ['$event'],] }],
    disabled: [{ type: Input }],
    isSelected: [{ type: Input }]
};
if (false) {
    /**
     * Gets the group associated with the tab.
     * ```html
     * const relatedGroup = this.tabbar.tabs.toArray()[1].relatedGroup;
     * ```
     * @type {?}
     */
    IgxTabItemComponent.prototype.relatedGroup;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxTabItemComponent.prototype._icon;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxTabItemComponent.prototype._label;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxTabItemComponent.prototype.defaultTabTemplate;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxTabItemComponent.prototype.customTabTemplateDir;
    /**
     * @type {?}
     * @private
     */
    IgxTabItemComponent.prototype._nativeTabItem;
    /**
     * @type {?}
     * @private
     */
    IgxTabItemComponent.prototype._changesCount;
    /**
     * @type {?}
     * @private
     */
    IgxTabItemComponent.prototype._isSelected;
    /**
     * @type {?}
     * @private
     */
    IgxTabItemComponent.prototype._disabled;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxTabItemComponent.prototype.role;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxTabItemComponent.prototype.tabindex;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxTabItemComponent.prototype.id;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxTabItemComponent.prototype.ariaLabel;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxTabItemComponent.prototype.ariaDisabled;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxTabItemComponent.prototype.ariaSelected;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxTabItemComponent.prototype.ariaControls;
    /**
     * @type {?}
     * @private
     */
    IgxTabItemComponent.prototype._tabs;
    /**
     * @type {?}
     * @private
     */
    IgxTabItemComponent.prototype._element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi90YWJzL3RhYi1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsT0FBTyxFQUFrQixXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPaEUsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFpRTVCLFlBQW9CLEtBQWtCLEVBQVUsUUFBb0I7UUFBaEQsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVk7UUFKNUQsa0JBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxzREFBc0Q7O1FBQ3pFLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxLQUFLLENBQUM7Ozs7UUF5Qm5CLFNBQUksR0FBRyxLQUFLLENBQUM7Ozs7UUFZYixPQUFFLEdBQUcsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Ozs7UUFNbEMsY0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Ozs7UUFNdkIsaUJBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDOzs7O1FBTTdCLGlCQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7OztRQU0vQixpQkFBWSxHQUFHLHFCQUFxQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUExRHJELElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO0lBQ25DLENBQUM7Ozs7Ozs7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QyxRQUFRLENBQUM7dUJBUWhDLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7a0NBWXhDLFlBQVksU0FBQyxvQkFBb0IsRUFBRSxDQUFDLFFBQVEsQ0FBQztpQ0FRN0MsWUFBWSxTQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDOzRCQVE1QyxZQUFZLFNBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDOzJCQVN2QyxZQUFZLFNBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDO3VCQTBCdEMsS0FBSzt5QkFrQkwsS0FBSzs7Ozs7Ozs7OztJQWxOTiwyQ0FDMkM7Ozs7OztJQUczQyxvQ0FBc0I7Ozs7OztJQXFCdEIscUNBQXVCOzs7Ozs7SUFvQnZCLGlEQUMrQzs7Ozs7O0lBRy9DLG1EQUM0RDs7Ozs7SUFFNUQsNkNBQW1DOzs7OztJQUNuQyw0Q0FBMEI7Ozs7O0lBQzFCLDBDQUE0Qjs7Ozs7SUFDNUIsd0NBQTBCOzs7OztJQXdCMUIsbUNBQ29COzs7OztJQUtwQix1Q0FDZ0I7Ozs7O0lBS2hCLGlDQUN5Qzs7Ozs7SUFLekMsd0NBQzhCOzs7OztJQUs5QiwyQ0FDb0M7Ozs7O0lBS3BDLDJDQUNzQzs7Ozs7SUFLdEMsMkNBQ3lEOzs7OztJQTNEN0Msb0NBQTBCOzs7OztJQUFFLHVDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBJbnB1dCxcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElneFRhYnNHcm91cENvbXBvbmVudCB9IGZyb20gJy4vdGFicy1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4VGFiSXRlbUJhc2UsIElneFRhYnNCYXNlIH0gZnJvbSAnLi90YWJzLmNvbW1vbic7XG5pbXBvcnQgeyBJZ3hUYWJJdGVtVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3RhYnMuZGlyZWN0aXZlcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LXRhYi1pdGVtJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RhYi1pdGVtLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIElneFRhYkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBJZ3hUYWJJdGVtQmFzZSB7XG5cbiAgICAvKipcbiAgICAqIEdldHMgdGhlIGdyb3VwIGFzc29jaWF0ZWQgd2l0aCB0aGUgdGFiLlxuICAgICogYGBgaHRtbFxuICAgICogY29uc3QgcmVsYXRlZEdyb3VwID0gdGhpcy50YWJiYXIudGFicy50b0FycmF5KClbMV0ucmVsYXRlZEdyb3VwO1xuICAgICogYGBgXG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyByZWxhdGVkR3JvdXA6IElneFRhYnNHcm91cENvbXBvbmVudDtcblxuICAgIC8qKkBoaWRkZW4qL1xuICAgIHByaXZhdGUgX2ljb246IHN0cmluZztcblxuICAgIC8qKlxuICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGBpY29uYC5cbiAgICAqIFRoZSB2YWx1ZSBzaG91bGQgYmUgdmFsaWQgaWNvbiBuYW1lIGZyb20ge0BsaW5rIGh0dHBzOi8vbWF0ZXJpYWwuaW8vdG9vbHMvaWNvbnMvP3N0eWxlPWJhc2VsaW5lfS5cbiAgICAqYGBgaHRtbFxuICAgICo8aWd4LXRhYi1pdGVtIGxhYmVsPVwiVGFiIDFcIiBpY29uPVwiaG9tZVwiPlxuICAgICpgYGBcbiAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpY29uKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbGF0ZWRHcm91cCA/IHRoaXMucmVsYXRlZEdyb3VwLmljb24gOiB0aGlzLl9pY29uO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGljb24obmV3VmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5yZWxhdGVkR3JvdXApIHtcbiAgICAgICAgICAgIHRoaXMucmVsYXRlZEdyb3VwLmljb24gPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pY29uID0gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgLyoqQGhpZGRlbiovXG4gICAgcHJpdmF0ZSBfbGFiZWw6IHN0cmluZztcblxuICAgIC8qKlxuICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGBsYWJlbGAuXG4gICAgKmBgYGh0bWxcbiAgICAqPGlneC10YWJzLWl0ZW0gbGFiZWw9XCJUYWIgMlwiIGljb249XCJmb2xkZXJcIj5cbiAgICAqYGBgXG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgbGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlZEdyb3VwID8gdGhpcy5yZWxhdGVkR3JvdXAubGFiZWwgOiB0aGlzLl9sYWJlbDtcbiAgICB9XG4gICAgcHVibGljIHNldCBsYWJlbChuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbGF0ZWRHcm91cCkge1xuICAgICAgICAgICAgdGhpcy5yZWxhdGVkR3JvdXAubGFiZWwgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sYWJlbCA9IG5ld1ZhbHVlO1xuICAgIH1cblxuICAgIC8qKkBoaWRkZW4qL1xuICAgIEBWaWV3Q2hpbGQoJ2RlZmF1bHRUYWJUZW1wbGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCBkZWZhdWx0VGFiVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICAvKipAaGlkZGVuKi9cbiAgICBAQ29udGVudENoaWxkKElneFRhYkl0ZW1UZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBJZ3hUYWJJdGVtVGVtcGxhdGVEaXJlY3RpdmUsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCBjdXN0b21UYWJUZW1wbGF0ZURpcjogSWd4VGFiSXRlbVRlbXBsYXRlRGlyZWN0aXZlO1xuXG4gICAgcHJpdmF0ZSBfbmF0aXZlVGFiSXRlbTogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIF9jaGFuZ2VzQ291bnQgPSAwOyAvLyBjaGFuZ2VzIGFuZCB1cGRhdGVzIGFjY29yZGluZ2x5IGFwcGxpZWQgdG8gdGhlIHRhYi5cbiAgICBwcml2YXRlIF9pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RhYnM6IElneFRhYnNCYXNlLCBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuX25hdGl2ZVRhYkl0ZW0gPSBfZWxlbWVudDtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC10YWJzX19oZWFkZXItbWVudS1pdGVtLS1zZWxlY3RlZCcpXG4gICAgcHVibGljIGdldCBwcm92aWRlQ3NzQ2xhc3NTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZDtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC10YWJzX19oZWFkZXItbWVudS1pdGVtLS1kaXNhYmxlZCcpXG4gICAgcHVibGljIGdldCBwcm92aWRlQ3NzQ2xhc3NEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtdGFic19faGVhZGVyLW1lbnUtaXRlbScpXG4gICAgcHVibGljIGdldCBwcm92aWRlQ3NzQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMuaXNTZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gICAgcHVibGljIHJvbGUgPSAndGFiJztcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgICBwdWJsaWMgdGFiaW5kZXg7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gICAgcHVibGljIGlkID0gJ2lneC10YWItaXRlbS0nICsgdGhpcy5pbmRleDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbGFiZWwnKVxuICAgIHB1YmxpYyBhcmlhTGFiZWwgPSB0aGlzLmxhYmVsO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kaXNhYmxlZCcpXG4gICAgcHVibGljIGFyaWFEaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXNlbGVjdGVkJylcbiAgICBwdWJsaWMgYXJpYVNlbGVjdGVkID0gdGhpcy5pc1NlbGVjdGVkO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1jb250cm9scycpXG4gICAgcHVibGljIGFyaWFDb250cm9scyA9ICdpZ3gtdGFiLWl0ZW0tZ3JvdXAtJyArIHRoaXMuaW5kZXg7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvblJlc2l6ZShldmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLl90YWJzLnNlbGVjdGVkSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIHRoaXMuX3RhYnMuc2VsZWN0ZWRJbmRpY2F0b3IubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3RoaXMubmF0aXZlVGFiSXRlbS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRofXB4YDtcbiAgICAgICAgICAgIHRoaXMuX3RhYnMuc2VsZWN0ZWRJbmRpY2F0b3IubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7dGhpcy5uYXRpdmVUYWJJdGVtLm5hdGl2ZUVsZW1lbnQub2Zmc2V0TGVmdH1weClgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3dyaWdodCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93bkFycm93UmlnaHQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgdGhpcy5vbktleURvd24oZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmFycm93bGVmdCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93bkFycm93TGVmdChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICB0aGlzLm9uS2V5RG93bih0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5ob21lJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duSG9tZShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm9uS2V5RG93bihmYWxzZSwgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZW5kJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duRW5kKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMub25LZXlEb3duKGZhbHNlLCB0aGlzLl90YWJzLnRhYnMudG9BcnJheSgpLmxlbmd0aCAtIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgY2hhbmdlc0NvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGFuZ2VzQ291bnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGdldCBuYXRpdmVUYWJJdGVtKCk6IEVsZW1lbnRSZWYge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmF0aXZlVGFiSXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFx0R2V0cyB3aGV0aGVyIHRoZSB0YWIgaXMgZGlzYWJsZWQuXG4gICAgKiBgYGBcbiAgICAqIGNvbnN0IGRpc2FibGVkSXRlbSA9IHRoaXMubXlUYWJDb21wb25lbnQudGFicy5maXJzdC5kaXNhYmxlZDtcbiAgICAqIGBgYFxuICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbGF0ZWRHcm91cCA/IHRoaXMucmVsYXRlZEdyb3VwLmRpc2FibGVkIDogdGhpcy5fZGlzYWJsZWQ7XG4gICAgfVxuICAgIHNldCBkaXNhYmxlZChuZXdWYWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5yZWxhdGVkR3JvdXApIHtcbiAgICAgICAgICAgIHRoaXMucmVsYXRlZEdyb3VwLmRpc2FibGVkID0gbmV3VmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIHRoZSB0YWIgaXMgc2VsZWN0ZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHRoaXMubXlUYWJDb21wb25lbnQudGFicy5maXJzdC5pc1NlbGVjdGVkO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGlzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbGF0ZWRHcm91cCA/IHRoaXMucmVsYXRlZEdyb3VwLmlzU2VsZWN0ZWQgOiB0aGlzLl9pc1NlbGVjdGVkO1xuICAgIH1cbiAgICBzZXQgaXNTZWxlY3RlZChuZXdWYWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5yZWxhdGVkR3JvdXApIHtcbiAgICAgICAgICAgIHRoaXMucmVsYXRlZEdyb3VwLmlzU2VsZWN0ZWQgPSBuZXdWYWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9pc1NlbGVjdGVkICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faXNTZWxlY3RlZCA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGdldCBpbmRleCgpOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5fdGFicy50YWJzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFicy50YWJzLnRvQXJyYXkoKS5pbmRleE9mKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3QoZm9jdXNEZWxheSA9IDIwMCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5yZWxhdGVkR3JvdXApIHtcbiAgICAgICAgICAgIHRoaXMucmVsYXRlZEdyb3VwLnNlbGVjdChmb2N1c0RlbGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2lzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fdGFicy5vblRhYkl0ZW1TZWxlY3RlZC5lbWl0KHsgdGFiOiB0aGlzLCBncm91cDogbnVsbCB9KTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVGFiU2VsZWN0aW9uQW5pbWF0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZVRhYlNlbGVjdGlvbkFuaW1hdGlvbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGFiRWxlbWVudCA9IHRoaXMubmF0aXZlVGFiSXRlbS5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgIC8vIFNjcm9sbCB0byB0aGUgbGVmdFxuICAgICAgICBpZiAodGFiRWxlbWVudC5vZmZzZXRMZWZ0IDwgdGhpcy5fdGFicy5vZmZzZXQpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhYnMuc2Nyb2xsRWxlbWVudCh0YWJFbGVtZW50LCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTY3JvbGwgdG8gdGhlIHJpZ2h0XG4gICAgICAgIGNvbnN0IHZpZXdQb3J0T2Zmc2V0V2lkdGggPSB0aGlzLl90YWJzLnZpZXdQb3J0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gKHRhYkVsZW1lbnQub2Zmc2V0TGVmdCArIHRhYkVsZW1lbnQub2Zmc2V0V2lkdGgpIC0gKHZpZXdQb3J0T2Zmc2V0V2lkdGggKyB0aGlzLl90YWJzLm9mZnNldCk7XG4gICAgICAgIC8vIEZpeCBmb3IgSUUgMTEsIGEgZGlmZmVyZW5jZSBpcyBhY2N1bXVsYXRlZCBmcm9tIHRoZSB3aWR0aHMgY2FsY3VsYXRpb25zXG4gICAgICAgIGlmIChkZWx0YSA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhYnMuc2Nyb2xsRWxlbWVudCh0YWJFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJhbnNmb3JtSW5kaWNhdG9yQW5pbWF0aW9uKHRhYkVsZW1lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdHJhbnNmb3JtSW5kaWNhdG9yQW5pbWF0aW9uKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl90YWJzICYmIHRoaXMuX3RhYnMuc2VsZWN0ZWRJbmRpY2F0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhYnMuc2VsZWN0ZWRJbmRpY2F0b3IubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gYHZpc2libGVgO1xuICAgICAgICAgICAgdGhpcy5fdGFicy5zZWxlY3RlZEluZGljYXRvci5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gYCR7ZWxlbWVudC5vZmZzZXRXaWR0aH1weGA7XG4gICAgICAgICAgICB0aGlzLl90YWJzLnNlbGVjdGVkSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke2VsZW1lbnQub2Zmc2V0TGVmdH1weClgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbktleURvd24oaXNMZWZ0QXJyb3c6IGJvb2xlYW4sIGluZGV4ID0gbnVsbCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0YWJzQXJyYXkgPSB0aGlzLl90YWJzLnRhYnMudG9BcnJheSgpO1xuICAgICAgICBpZiAoaW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgICAgIGluZGV4ID0gKGlzTGVmdEFycm93KVxuICAgICAgICAgICAgICAgID8gKHRoaXMuX3RhYnMuc2VsZWN0ZWRJbmRleCA9PT0gMCkgPyB0YWJzQXJyYXkubGVuZ3RoIC0gMSA6IHRoaXMuX3RhYnMuc2VsZWN0ZWRJbmRleCAtIDFcbiAgICAgICAgICAgICAgICA6ICh0aGlzLl90YWJzLnNlbGVjdGVkSW5kZXggPT09IHRhYnNBcnJheS5sZW5ndGggLSAxKSA/IDAgOiB0aGlzLl90YWJzLnNlbGVjdGVkSW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhYiA9IHRhYnNBcnJheVtpbmRleF07XG4gICAgICAgIHRhYi5zZWxlY3QoMjAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCB0ZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICAgICAgaWYgKHRoaXMucmVsYXRlZEdyb3VwICYmIHRoaXMucmVsYXRlZEdyb3VwLmN1c3RvbVRhYlRlbXBsYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWxhdGVkR3JvdXAuY3VzdG9tVGFiVGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tVGFiVGVtcGxhdGVEaXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1c3RvbVRhYlRlbXBsYXRlRGlyLnRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRUYWJUZW1wbGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBjb250ZXh0KCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbGF0ZWRHcm91cCA/IHRoaXMucmVsYXRlZEdyb3VwIDogdGhpcztcbiAgICB9XG59XG4iXX0=