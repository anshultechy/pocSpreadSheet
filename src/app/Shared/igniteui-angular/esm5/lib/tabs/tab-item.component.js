/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, ElementRef, HostBinding, HostListener, Input, TemplateRef, ViewChild } from '@angular/core';
import { IgxTabsGroupComponent } from './tabs-group.component';
import { IgxTabsBase } from './tabs.common';
import { IgxTabItemTemplateDirective } from './tabs.directives';
var IgxTabItemComponent = /** @class */ (function () {
    function IgxTabItemComponent(_tabs, _element) {
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
    Object.defineProperty(IgxTabItemComponent.prototype, "icon", {
        /**
        * An @Input property that sets the value of the `icon`.
        * The value should be valid icon name from {@link https://material.io/tools/icons/?style=baseline}.
        *```html
        *<igx-tab-item label="Tab 1" icon="home">
        *```
        */
        get: /**
         * An \@Input property that sets the value of the `icon`.
         * The value should be valid icon name from {\@link https://material.io/tools/icons/?style=baseline}.
         * ```html
         * <igx-tab-item label="Tab 1" icon="home">
         * ```
         * @return {?}
         */
        function () {
            return this.relatedGroup ? this.relatedGroup.icon : this._icon;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this.relatedGroup) {
                this.relatedGroup.icon = newValue;
            }
            this._icon = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabItemComponent.prototype, "label", {
        /**
        * An @Input property that sets the value of the `label`.
        *```html
        *<igx-tabs-item label="Tab 2" icon="folder">
        *```
        */
        get: /**
         * An \@Input property that sets the value of the `label`.
         * ```html
         * <igx-tabs-item label="Tab 2" icon="folder">
         * ```
         * @return {?}
         */
        function () {
            return this.relatedGroup ? this.relatedGroup.label : this._label;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this.relatedGroup) {
                this.relatedGroup.label = newValue;
            }
            this._label = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabItemComponent.prototype, "provideCssClassSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabItemComponent.prototype, "provideCssClassDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabItemComponent.prototype, "provideCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.disabled && !this.isSelected);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxTabItemComponent.prototype.onClick = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.select();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxTabItemComponent.prototype.onResize = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isSelected) {
            this._tabs.selectedIndicator.nativeElement.style.visibility = 'visible';
            this._tabs.selectedIndicator.nativeElement.style.width = this.nativeTabItem.nativeElement.offsetWidth + "px";
            this._tabs.selectedIndicator.nativeElement.style.transform = "translate(" + this.nativeTabItem.nativeElement.offsetLeft + "px)";
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxTabItemComponent.prototype.onKeydownArrowRight = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onKeyDown(false);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxTabItemComponent.prototype.onKeydownArrowLeft = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onKeyDown(true);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxTabItemComponent.prototype.onKeydownHome = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.onKeyDown(false, 0);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxTabItemComponent.prototype.onKeydownEnd = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.onKeyDown(false, this._tabs.tabs.toArray().length - 1);
    };
    Object.defineProperty(IgxTabItemComponent.prototype, "changesCount", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._changesCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabItemComponent.prototype, "nativeTabItem", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._nativeTabItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabItemComponent.prototype, "disabled", {
        /**
        * 	Gets whether the tab is disabled.
        * ```
        * const disabledItem = this.myTabComponent.tabs.first.disabled;
        * ```
        */
        get: /**
         * 	Gets whether the tab is disabled.
         * ```
         * const disabledItem = this.myTabComponent.tabs.first.disabled;
         * ```
         * @return {?}
         */
        function () {
            return this.relatedGroup ? this.relatedGroup.disabled : this._disabled;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this.relatedGroup) {
                this.relatedGroup.disabled = newValue;
            }
            else {
                this._disabled = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabItemComponent.prototype, "isSelected", {
        /**
         * Gets whether the tab is selected.
         * ```typescript
         * const selectedItem = this.myTabComponent.tabs.first.isSelected;
         * ```
         */
        get: /**
         * Gets whether the tab is selected.
         * ```typescript
         * const selectedItem = this.myTabComponent.tabs.first.isSelected;
         * ```
         * @return {?}
         */
        function () {
            return this.relatedGroup ? this.relatedGroup.isSelected : this._isSelected;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this.relatedGroup) {
                this.relatedGroup.isSelected = newValue;
            }
            else if (this._isSelected !== newValue) {
                this._isSelected = newValue;
                if (this._isSelected) {
                    this.select();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabItemComponent.prototype, "index", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            if (this._tabs.tabs) {
                return this._tabs.tabs.toArray().indexOf(this);
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
     * @param {?=} focusDelay
     * @return {?}
     */
    IgxTabItemComponent.prototype.select = /**
     * @hidden
     * @param {?=} focusDelay
     * @return {?}
     */
    function (focusDelay) {
        if (focusDelay === void 0) { focusDelay = 200; }
        if (this.relatedGroup) {
            this.relatedGroup.select(focusDelay);
        }
        else {
            this._isSelected = true;
            this._tabs.onTabItemSelected.emit({ tab: this, group: null });
            this.handleTabSelectionAnimation();
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxTabItemComponent.prototype.handleTabSelectionAnimation = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tabElement = this.nativeTabItem.nativeElement;
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
        this.transformIndicatorAnimation(tabElement);
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    IgxTabItemComponent.prototype.transformIndicatorAnimation = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (this._tabs && this._tabs.selectedIndicator) {
            this._tabs.selectedIndicator.nativeElement.style.visibility = "visible";
            this._tabs.selectedIndicator.nativeElement.style.width = element.offsetWidth + "px";
            this._tabs.selectedIndicator.nativeElement.style.transform = "translate(" + element.offsetLeft + "px)";
        }
    };
    /**
     * @private
     * @param {?} isLeftArrow
     * @param {?=} index
     * @return {?}
     */
    IgxTabItemComponent.prototype.onKeyDown = /**
     * @private
     * @param {?} isLeftArrow
     * @param {?=} index
     * @return {?}
     */
    function (isLeftArrow, index) {
        if (index === void 0) { index = null; }
        /** @type {?} */
        var tabsArray = this._tabs.tabs.toArray();
        if (index === null) {
            index = (isLeftArrow)
                ? (this._tabs.selectedIndex === 0) ? tabsArray.length - 1 : this._tabs.selectedIndex - 1
                : (this._tabs.selectedIndex === tabsArray.length - 1) ? 0 : this._tabs.selectedIndex + 1;
        }
        /** @type {?} */
        var tab = tabsArray[index];
        tab.select(200);
    };
    Object.defineProperty(IgxTabItemComponent.prototype, "template", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            if (this.relatedGroup && this.relatedGroup.customTabTemplate) {
                return this.relatedGroup.customTabTemplate;
            }
            if (this.customTabTemplateDir) {
                return this.customTabTemplateDir.template;
            }
            return this.defaultTabTemplate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabItemComponent.prototype, "context", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.relatedGroup ? this.relatedGroup : this;
        },
        enumerable: true,
        configurable: true
    });
    IgxTabItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-tab-item',
                    template: "<ng-template #defaultTabTemplate let-context>\n    <div *ngIf=\"context.icon\" class=\"igx-tabs__header-menu-item-icon\">\n        <igx-icon fontSet=\"material\">{{context.icon}}</igx-icon>\n        <igx-badge [value]=\"changesCount\" [hidden]=\"changesCount === 0\"></igx-badge>\n    </div>\n    <div *ngIf=\"context.label\" ngClass=\"igx-tabs__item-label\">{{context.label}}</div>\n</ng-template>\n<ng-container *ngTemplateOutlet=\"template; context: { $implicit: this.context }\">\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    IgxTabItemComponent.ctorParameters = function () { return [
        { type: IgxTabsBase },
        { type: ElementRef }
    ]; };
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
    return IgxTabItemComponent;
}());
export { IgxTabItemComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi90YWJzL3RhYi1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsT0FBTyxFQUFrQixXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFaEU7SUFzRUksNkJBQW9CLEtBQWtCLEVBQVUsUUFBb0I7UUFBaEQsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVk7UUFKNUQsa0JBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxzREFBc0Q7O1FBQ3pFLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxLQUFLLENBQUM7Ozs7UUF5Qm5CLFNBQUksR0FBRyxLQUFLLENBQUM7Ozs7UUFZYixPQUFFLEdBQUcsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Ozs7UUFNbEMsY0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Ozs7UUFNdkIsaUJBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDOzs7O1FBTTdCLGlCQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7OztRQU0vQixpQkFBWSxHQUFHLHFCQUFxQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUExRHJELElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO0lBQ25DLENBQUM7SUE5Q0Qsc0JBQ1cscUNBQUk7UUFSZjs7Ozs7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Ozs7O0lBd0IxQixtQ0FDb0I7Ozs7O0lBS3BCLHVDQUNnQjs7Ozs7SUFLaEIsaUNBQ3lDOzs7OztJQUt6Qyx3Q0FDOEI7Ozs7O0lBSzlCLDJDQUNvQzs7Ozs7SUFLcEMsMkNBQ3NDOzs7OztJQUt0QywyQ0FDeUQ7Ozs7O0lBM0Q3QyxvQ0FBMEI7Ozs7O0lBQUUsdUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgQ29udGVudENoaWxkLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIElucHV0LFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSWd4VGFic0dyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi90YWJzLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hUYWJJdGVtQmFzZSwgSWd4VGFic0Jhc2UgfSBmcm9tICcuL3RhYnMuY29tbW9uJztcbmltcG9ydCB7IElneFRhYkl0ZW1UZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vdGFicy5kaXJlY3RpdmVzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtdGFiLWl0ZW0nLFxuICAgIHRlbXBsYXRlVXJsOiAndGFiLWl0ZW0uY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgSWd4VGFiSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIElneFRhYkl0ZW1CYXNlIHtcblxuICAgIC8qKlxuICAgICogR2V0cyB0aGUgZ3JvdXAgYXNzb2NpYXRlZCB3aXRoIHRoZSB0YWIuXG4gICAgKiBgYGBodG1sXG4gICAgKiBjb25zdCByZWxhdGVkR3JvdXAgPSB0aGlzLnRhYmJhci50YWJzLnRvQXJyYXkoKVsxXS5yZWxhdGVkR3JvdXA7XG4gICAgKiBgYGBcbiAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJlbGF0ZWRHcm91cDogSWd4VGFic0dyb3VwQ29tcG9uZW50O1xuXG4gICAgLyoqQGhpZGRlbiovXG4gICAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYGljb25gLlxuICAgICogVGhlIHZhbHVlIHNob3VsZCBiZSB2YWxpZCBpY29uIG5hbWUgZnJvbSB7QGxpbmsgaHR0cHM6Ly9tYXRlcmlhbC5pby90b29scy9pY29ucy8/c3R5bGU9YmFzZWxpbmV9LlxuICAgICpgYGBodG1sXG4gICAgKjxpZ3gtdGFiLWl0ZW0gbGFiZWw9XCJUYWIgMVwiIGljb249XCJob21lXCI+XG4gICAgKmBgYFxuICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGljb24oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlZEdyb3VwID8gdGhpcy5yZWxhdGVkR3JvdXAuaWNvbiA6IHRoaXMuX2ljb247XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgaWNvbihuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbGF0ZWRHcm91cCkge1xuICAgICAgICAgICAgdGhpcy5yZWxhdGVkR3JvdXAuaWNvbiA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2ljb24gPSBuZXdWYWx1ZTtcbiAgICB9XG5cbiAgICAvKipAaGlkZGVuKi9cbiAgICBwcml2YXRlIF9sYWJlbDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYGxhYmVsYC5cbiAgICAqYGBgaHRtbFxuICAgICo8aWd4LXRhYnMtaXRlbSBsYWJlbD1cIlRhYiAyXCIgaWNvbj1cImZvbGRlclwiPlxuICAgICpgYGBcbiAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBsYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWxhdGVkR3JvdXAgPyB0aGlzLnJlbGF0ZWRHcm91cC5sYWJlbCA6IHRoaXMuX2xhYmVsO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGxhYmVsKG5ld1ZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucmVsYXRlZEdyb3VwKSB7XG4gICAgICAgICAgICB0aGlzLnJlbGF0ZWRHcm91cC5sYWJlbCA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xhYmVsID0gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgLyoqQGhpZGRlbiovXG4gICAgQFZpZXdDaGlsZCgnZGVmYXVsdFRhYlRlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGRlZmF1bHRUYWJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIC8qKkBoaWRkZW4qL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4VGFiSXRlbVRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IElneFRhYkl0ZW1UZW1wbGF0ZURpcmVjdGl2ZSwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGN1c3RvbVRhYlRlbXBsYXRlRGlyOiBJZ3hUYWJJdGVtVGVtcGxhdGVEaXJlY3RpdmU7XG5cbiAgICBwcml2YXRlIF9uYXRpdmVUYWJJdGVtOiBFbGVtZW50UmVmO1xuICAgIHByaXZhdGUgX2NoYW5nZXNDb3VudCA9IDA7IC8vIGNoYW5nZXMgYW5kIHVwZGF0ZXMgYWNjb3JkaW5nbHkgYXBwbGllZCB0byB0aGUgdGFiLlxuICAgIHByaXZhdGUgX2lzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGFiczogSWd4VGFic0Jhc2UsIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5fbmF0aXZlVGFiSXRlbSA9IF9lbGVtZW50O1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXRhYnNfX2hlYWRlci1tZW51LWl0ZW0tLXNlbGVjdGVkJylcbiAgICBwdWJsaWMgZ2V0IHByb3ZpZGVDc3NDbGFzc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1NlbGVjdGVkO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LXRhYnNfX2hlYWRlci1tZW51LWl0ZW0tLWRpc2FibGVkJylcbiAgICBwdWJsaWMgZ2V0IHByb3ZpZGVDc3NDbGFzc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXNhYmxlZDtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC10YWJzX19oZWFkZXItbWVudS1pdGVtJylcbiAgICBwdWJsaWMgZ2V0IHByb3ZpZGVDc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5pc1NlbGVjdGVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgICBwdWJsaWMgcm9sZSA9ICd0YWInO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICAgIHB1YmxpYyB0YWJpbmRleDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBwdWJsaWMgaWQgPSAnaWd4LXRhYi1pdGVtLScgKyB0aGlzLmluZGV4O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1sYWJlbCcpXG4gICAgcHVibGljIGFyaWFMYWJlbCA9IHRoaXMubGFiZWw7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRpc2FibGVkJylcbiAgICBwdWJsaWMgYXJpYURpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtc2VsZWN0ZWQnKVxuICAgIHB1YmxpYyBhcmlhU2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWNvbnRyb2xzJylcbiAgICBwdWJsaWMgYXJpYUNvbnRyb2xzID0gJ2lneC10YWItaXRlbS1ncm91cC0nICsgdGhpcy5pbmRleDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhYnMuc2VsZWN0ZWRJbmRpY2F0b3IubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgdGhpcy5fdGFicy5zZWxlY3RlZEluZGljYXRvci5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gYCR7dGhpcy5uYXRpdmVUYWJJdGVtLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGh9cHhgO1xuICAgICAgICAgICAgdGhpcy5fdGFicy5zZWxlY3RlZEluZGljYXRvci5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt0aGlzLm5hdGl2ZVRhYkl0ZW0ubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0fXB4KWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd3JpZ2h0JywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duQXJyb3dSaWdodChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICB0aGlzLm9uS2V5RG93bihmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3dsZWZ0JywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duQXJyb3dMZWZ0KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIHRoaXMub25LZXlEb3duKHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmhvbWUnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25Ib21lKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMub25LZXlEb3duKGZhbHNlLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5lbmQnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25FbmQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5vbktleURvd24oZmFsc2UsIHRoaXMuX3RhYnMudGFicy50b0FycmF5KCkubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGdldCBjaGFuZ2VzQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYW5nZXNDb3VudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IG5hdGl2ZVRhYkl0ZW0oKTogRWxlbWVudFJlZiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYXRpdmVUYWJJdGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogXHRHZXRzIHdoZXRoZXIgdGhlIHRhYiBpcyBkaXNhYmxlZC5cbiAgICAqIGBgYFxuICAgICogY29uc3QgZGlzYWJsZWRJdGVtID0gdGhpcy5teVRhYkNvbXBvbmVudC50YWJzLmZpcnN0LmRpc2FibGVkO1xuICAgICogYGBgXG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlZEdyb3VwID8gdGhpcy5yZWxhdGVkR3JvdXAuZGlzYWJsZWQgOiB0aGlzLl9kaXNhYmxlZDtcbiAgICB9XG4gICAgc2V0IGRpc2FibGVkKG5ld1ZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbGF0ZWRHcm91cCkge1xuICAgICAgICAgICAgdGhpcy5yZWxhdGVkR3JvdXAuZGlzYWJsZWQgPSBuZXdWYWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2Rpc2FibGVkID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHdoZXRoZXIgdGhlIHRhYiBpcyBzZWxlY3RlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5teVRhYkNvbXBvbmVudC50YWJzLmZpcnN0LmlzU2VsZWN0ZWQ7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgaXNTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlZEdyb3VwID8gdGhpcy5yZWxhdGVkR3JvdXAuaXNTZWxlY3RlZCA6IHRoaXMuX2lzU2VsZWN0ZWQ7XG4gICAgfVxuICAgIHNldCBpc1NlbGVjdGVkKG5ld1ZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbGF0ZWRHcm91cCkge1xuICAgICAgICAgICAgdGhpcy5yZWxhdGVkR3JvdXAuaXNTZWxlY3RlZCA9IG5ld1ZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2lzU2VsZWN0ZWQgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9pc1NlbGVjdGVkID0gbmV3VmFsdWU7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0IGluZGV4KCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl90YWJzLnRhYnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90YWJzLnRhYnMudG9BcnJheSgpLmluZGV4T2YodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdChmb2N1c0RlbGF5ID0gMjAwKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnJlbGF0ZWRHcm91cCkge1xuICAgICAgICAgICAgdGhpcy5yZWxhdGVkR3JvdXAuc2VsZWN0KGZvY3VzRGVsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl90YWJzLm9uVGFiSXRlbVNlbGVjdGVkLmVtaXQoeyB0YWI6IHRoaXMsIGdyb3VwOiBudWxsIH0pO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVUYWJTZWxlY3Rpb25BbmltYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlVGFiU2VsZWN0aW9uQW5pbWF0aW9uKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0YWJFbGVtZW50ID0gdGhpcy5uYXRpdmVUYWJJdGVtLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRoZSBsZWZ0XG4gICAgICAgIGlmICh0YWJFbGVtZW50Lm9mZnNldExlZnQgPCB0aGlzLl90YWJzLm9mZnNldCkge1xuICAgICAgICAgICAgdGhpcy5fdGFicy5zY3JvbGxFbGVtZW50KHRhYkVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNjcm9sbCB0byB0aGUgcmlnaHRcbiAgICAgICAgY29uc3Qgdmlld1BvcnRPZmZzZXRXaWR0aCA9IHRoaXMuX3RhYnMudmlld1BvcnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgY29uc3QgZGVsdGEgPSAodGFiRWxlbWVudC5vZmZzZXRMZWZ0ICsgdGFiRWxlbWVudC5vZmZzZXRXaWR0aCkgLSAodmlld1BvcnRPZmZzZXRXaWR0aCArIHRoaXMuX3RhYnMub2Zmc2V0KTtcbiAgICAgICAgLy8gRml4IGZvciBJRSAxMSwgYSBkaWZmZXJlbmNlIGlzIGFjY3VtdWxhdGVkIGZyb20gdGhlIHdpZHRocyBjYWxjdWxhdGlvbnNcbiAgICAgICAgaWYgKGRlbHRhID4gMSkge1xuICAgICAgICAgICAgdGhpcy5fdGFicy5zY3JvbGxFbGVtZW50KHRhYkVsZW1lbnQsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmFuc2Zvcm1JbmRpY2F0b3JBbmltYXRpb24odGFiRWxlbWVudCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0cmFuc2Zvcm1JbmRpY2F0b3JBbmltYXRpb24oZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3RhYnMgJiYgdGhpcy5fdGFicy5zZWxlY3RlZEluZGljYXRvcikge1xuICAgICAgICAgICAgdGhpcy5fdGFicy5zZWxlY3RlZEluZGljYXRvci5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBgdmlzaWJsZWA7XG4gICAgICAgICAgICB0aGlzLl90YWJzLnNlbGVjdGVkSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHtlbGVtZW50Lm9mZnNldFdpZHRofXB4YDtcbiAgICAgICAgICAgIHRoaXMuX3RhYnMuc2VsZWN0ZWRJbmRpY2F0b3IubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7ZWxlbWVudC5vZmZzZXRMZWZ0fXB4KWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uS2V5RG93bihpc0xlZnRBcnJvdzogYm9vbGVhbiwgaW5kZXggPSBudWxsKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRhYnNBcnJheSA9IHRoaXMuX3RhYnMudGFicy50b0FycmF5KCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaW5kZXggPSAoaXNMZWZ0QXJyb3cpXG4gICAgICAgICAgICAgICAgPyAodGhpcy5fdGFicy5zZWxlY3RlZEluZGV4ID09PSAwKSA/IHRhYnNBcnJheS5sZW5ndGggLSAxIDogdGhpcy5fdGFicy5zZWxlY3RlZEluZGV4IC0gMVxuICAgICAgICAgICAgICAgIDogKHRoaXMuX3RhYnMuc2VsZWN0ZWRJbmRleCA9PT0gdGFic0FycmF5Lmxlbmd0aCAtIDEpID8gMCA6IHRoaXMuX3RhYnMuc2VsZWN0ZWRJbmRleCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGFiID0gdGFic0FycmF5W2luZGV4XTtcbiAgICAgICAgdGFiLnNlbGVjdCgyMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgICAgICBpZiAodGhpcy5yZWxhdGVkR3JvdXAgJiYgdGhpcy5yZWxhdGVkR3JvdXAuY3VzdG9tVGFiVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbGF0ZWRHcm91cC5jdXN0b21UYWJUZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXN0b21UYWJUZW1wbGF0ZURpcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tVGFiVGVtcGxhdGVEaXIudGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdFRhYlRlbXBsYXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGNvbnRleHQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlZEdyb3VwID8gdGhpcy5yZWxhdGVkR3JvdXAgOiB0aGlzO1xuICAgIH1cbn1cbiJdfQ==