/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { Component, ContentChildren, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, NgModule, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IgxBadgeModule } from '../badge/badge.component';
import { IgxRippleModule } from '../directives/ripple/ripple.directive';
import { IgxIconModule } from '../icon/index';
import { IgxTabItemComponent } from './tab-item.component';
import { IgxTabsGroupComponent } from './tabs-group.component';
import { IgxLeftButtonStyleDirective, IgxRightButtonStyleDirective, IgxTabItemTemplateDirective } from './tabs.directives';
import { IgxTabsBase } from './tabs.common';
/** @enum {string} */
var TabsType = {
    FIXED: 'fixed',
    CONTENTFIT: 'contentfit',
};
export { TabsType };
var IgxTabsComponent = /** @class */ (function () {
    function IgxTabsComponent(_element) {
        this._element = _element;
        /**
         * Defines the tab header sizing mode. You can choose between `contentfit` or `fixed`.
         * By default the header sizing mode is `contentfit`.
         * ```html
         * <igx-tabs tabsType="fixed">
         *     <igx-tabs-group label="HOME">Home</igx-tabs-group>
         * </igx-tabs>
         * ```
         */
        this.tabsType = 'contentfit';
        /**
         * @hidden
         */
        this.class = '';
        /**
         * Emitted when a tab item is deselected.
         * ```html
         * <igx-tabs (onTabItemDeselected)="itemDeselected($event)">
         *      <igx-tabs-group label="Tab 1">This is Tab 1 content.</igx-tabs-group>
         *      <igx-tabs-group label="Tab 2">This is Tab 2 content.</igx-tabs-group>
         * </igx-tabs>
         * ```
         * ```typescript
         * itemDeselected(e){
         *      const tabGroup = e.group;
         *      const tabItem = e.tab;
         * }
         * ```
         */
        this.onTabItemDeselected = new EventEmitter();
        /**
         * Emitted when a tab item is selected.
         * ```html
         * <igx-tabs (onTabItemSelected)="itemSelected($event)">
         *      <igx-tabs-group label="Tab 1">This is Tab 1 content.</igx-tabs-group>
         *      <igx-tabs-group label="Tab 2">This is Tab 2 content.</igx-tabs-group>
         * </igx-tabs>
         * ```
         * ```typescript
         * itemSelected(e){
         *      const tabGroup = e.group;
         *      const tabItem = e.tab;
         * }
         * ```
         */
        this.onTabItemSelected = new EventEmitter();
        /**
         * @hidden
         */
        this.offset = 0;
        this._selectedIndex = -1;
    }
    Object.defineProperty(IgxTabsComponent.prototype, "selectedIndex", {
        /**
        * An @Input property that sets the value of the `selectedIndex`.
        * Default value is 0.
        * ```html
        * <igx-tabs selectedIndex="1">
        * ```
        */
        get: /**
         * An \@Input property that sets the value of the `selectedIndex`.
         * Default value is 0.
         * ```html
         * <igx-tabs selectedIndex="1">
         * ```
         * @return {?}
         */
        function () {
            return this._selectedIndex;
        },
        set: /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            /** @type {?} */
            var newIndex = typeof index !== 'number' ? parseInt(index, 10) : index;
            if (this._selectedIndex !== newIndex) {
                this._selectedIndex = newIndex;
                this.setSelectedGroup();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabsComponent.prototype, "tabs", {
        /**
         * Provides an observable collection of all `IgxTabItemComponent`s.
         * First try to get them as content children if not available get them as view children.
         * ```typescript
         * const tabItems = this.myTabComponent.tabs;
         * ```
         */
        get: /**
         * Provides an observable collection of all `IgxTabItemComponent`s.
         * First try to get them as content children if not available get them as view children.
         * ```typescript
         * const tabItems = this.myTabComponent.tabs;
         * ```
         * @return {?}
         */
        function () {
            if (this.hasContentTabs) {
                return this.contentTabs;
            }
            return this.viewTabs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabsComponent.prototype, "hasContentTabs", {
        /**
         *@hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return (this.contentTabs && this.contentTabs.length > 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabsComponent.prototype, "cssClass", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            /** @type {?} */
            var defaultStyle = "igx-tabs";
            /** @type {?} */
            var fixedStyle = "igx-tabs--fixed";
            /** @type {?} */
            var iconStyle = "igx-tabs--icons";
            /** @type {?} */
            var iconLabelFoundInGroups = this.groups.find(function (group) { return group.icon != null && group.label != null; });
            /** @type {?} */
            var iconLabelFoundInTabs = this.contentTabs.find(function (tab) { return tab.icon != null && tab.label != null; });
            /** @type {?} */
            var css;
            switch (TabsType[this.tabsType.toUpperCase()]) {
                case TabsType.FIXED: {
                    css = fixedStyle;
                    break;
                }
                default: {
                    css = defaultStyle;
                    break;
                }
            }
            // Layout fix for items with icons
            if (iconLabelFoundInGroups !== undefined || iconLabelFoundInTabs !== undefined) {
                css = css + " " + iconStyle;
            }
            return css + " " + this.class;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} args
     * @return {?}
     */
    IgxTabsComponent.prototype.selectedGroupHandler = /**
     * @hidden
     * @param {?} args
     * @return {?}
     */
    function (args) {
        var _this = this;
        if (this.hasContentTabs) {
            /** @type {?} */
            var theTabsArray = this.tabs.toArray();
            if (this.selectedIndex !== -1 && this.selectedIndex !== args.tab.index && theTabsArray[this.selectedIndex] !== undefined) {
                theTabsArray[this.selectedIndex].isSelected = false;
                this.onTabItemDeselected.emit({ tab: theTabsArray[this.selectedIndex], groups: null });
            }
            this.selectedIndex = args.tab.index;
        }
        else {
            /** @type {?} */
            var prevSelectedIndex = this.selectedIndex;
            if (prevSelectedIndex !== -1 && this.groups && this.groups.toArray()[prevSelectedIndex] !== undefined) {
                this.onTabItemDeselected.emit({
                    tab: this.groups.toArray()[prevSelectedIndex].relatedTab,
                    group: this.groups.toArray()[prevSelectedIndex]
                });
            }
            if (args.group) {
                this.selectedIndex = args.group.index;
            }
            if (this.groups) {
                this.groups.forEach(function (p) {
                    if (p.index !== _this.selectedIndex) {
                        _this.deselectGroup(p);
                    }
                });
            }
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
    IgxTabsComponent.prototype.scrollLeft = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.scroll(false);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxTabsComponent.prototype.scrollRight = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.scroll(true);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} element
     * @param {?} scrollRight
     * @return {?}
     */
    IgxTabsComponent.prototype.scrollElement = /**
     * @hidden
     * @param {?} element
     * @param {?} scrollRight
     * @return {?}
     */
    function (element, scrollRight) {
        /** @type {?} */
        var viewPortWidth = this.viewPort.nativeElement.offsetWidth;
        this.offset = (scrollRight) ? element.offsetWidth + element.offsetLeft - viewPortWidth : element.offsetLeft;
        this.itemsContainer.nativeElement.style.transform = "translate(" + -this.offset + "px)";
    };
    Object.defineProperty(IgxTabsComponent.prototype, "selectedTabItem", {
        /**
         * Gets the selected `IgxTabItemComponent`.
         * ```
         * const selectedItem = this.myTabComponent.selectedTabItem;
         * ```
         */
        get: /**
         * Gets the selected `IgxTabItemComponent`.
         * ```
         * const selectedItem = this.myTabComponent.selectedTabItem;
         * ```
         * @return {?}
         */
        function () {
            if (this.tabs && this.selectedIndex !== undefined) {
                return this.tabs.toArray()[this.selectedIndex];
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
     * @return {?}
     */
    IgxTabsComponent.prototype.ngAfterViewInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._selectedIndex === -1) {
            this.tabs.forEach(function (t) {
                if (t.isSelected) {
                    _this._selectedIndex = t.index;
                }
            });
        }
        if (!this.hasContentTabs && (this.selectedIndex < 0 || this.selectedIndex >= this.groups.length)) {
            this._selectedIndex = 0;
        }
        requestAnimationFrame(function () {
            _this.setSelectedGroup();
        });
        this._groupChanges$ = this.groups.changes.subscribe(function () {
            _this.resetSelectionOnCollectionChanged();
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTabsComponent.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this._groupChanges$) {
            this._groupChanges$.unsubscribe();
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxTabsComponent.prototype.setSelectedGroup = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        requestAnimationFrame(function () {
            if (_this.hasContentTabs) {
                if (_this.selectedIndex < 0 || _this.selectedIndex >= _this.contentTabs.length) {
                    _this.selectedIndicator.nativeElement.style.visibility = 'hidden';
                }
                else {
                    _this.selectGroupByIndex(_this.selectedIndex);
                }
            }
            else {
                if (_this.selectedIndex < 0 || _this.selectedIndex >= _this.groups.length) {
                    _this._selectedIndex = 0;
                }
                _this.selectGroupByIndex(_this.selectedIndex);
            }
        });
    };
    /**
     * @private
     * @return {?}
     */
    IgxTabsComponent.prototype.resetSelectionOnCollectionChanged = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            if (_this.groups.toArray()[_this.selectedIndex] !== undefined) {
                // persist the selected index and applied it to the new collection
                _this.selectGroupByIndex(_this.selectedIndex);
            }
            else {
                if (_this.selectedIndex >= _this.groups.length) {
                    // in case the selected index is no longer valid, select the last group in the new collection
                    _this.selectGroupByIndex(_this.groups.length - 1);
                }
            }
        }, 0);
    };
    /**
     * @private
     * @param {?} selectedIndex
     * @return {?}
     */
    IgxTabsComponent.prototype.selectGroupByIndex = /**
     * @private
     * @param {?} selectedIndex
     * @return {?}
     */
    function (selectedIndex) {
        if (this.hasContentTabs) {
            /** @type {?} */
            var aTab = this.tabs.toArray()[selectedIndex];
            if (aTab) {
                aTab.select();
            }
        }
        else {
            /** @type {?} */
            var selectableGroups = this.groups.filter(function (selectableGroup) { return !selectableGroup.disabled; });
            /** @type {?} */
            var group = selectableGroups[selectedIndex];
            if (group) {
                group.select(0);
            }
        }
    };
    /**
     * @private
     * @param {?} group
     * @return {?}
     */
    IgxTabsComponent.prototype.deselectGroup = /**
     * @private
     * @param {?} group
     * @return {?}
     */
    function (group) {
        // Cannot deselect the selected tab - this will mean that there will be not selected tab left
        if (group.disabled || this.selectedTabItem.index === group.index) {
            return;
        }
        group.isSelected = false;
        group.relatedTab.tabindex = -1;
    };
    /**
     * @private
     * @param {?} scrollRight
     * @return {?}
     */
    IgxTabsComponent.prototype.scroll = /**
     * @private
     * @param {?} scrollRight
     * @return {?}
     */
    function (scrollRight) {
        var e_1, _a;
        /** @type {?} */
        var tabsArray = this.tabs.toArray();
        try {
            for (var tabsArray_1 = tslib_1.__values(tabsArray), tabsArray_1_1 = tabsArray_1.next(); !tabsArray_1_1.done; tabsArray_1_1 = tabsArray_1.next()) {
                var tab = tabsArray_1_1.value;
                /** @type {?} */
                var element = tab.nativeTabItem.nativeElement;
                if (scrollRight) {
                    if (element.offsetWidth + element.offsetLeft > this.viewPort.nativeElement.offsetWidth + this.offset) {
                        this.scrollElement(element, scrollRight);
                        break;
                    }
                }
                else {
                    if (element.offsetWidth + element.offsetLeft >= this.offset) {
                        this.scrollElement(element, scrollRight);
                        break;
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (tabsArray_1_1 && !tabsArray_1_1.done && (_a = tabsArray_1.return)) _a.call(tabsArray_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    IgxTabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-tabs',
                    template: "<!-- TODO Remove tab container from here -->\n<div #tabsContainer>\n    <div class=\"igx-tabs__header\" #headerContainer>\n        <button igxRipple class=\"igx-tabs__header-button\" igxButton=\"icon\" (click)=\"scrollLeft($event)\" igxLeftButtonStyle>\n            <igx-icon fontSet=\"material\">navigate_before</igx-icon>\n        </button>\n        <div class=\"igx-tabs__header-wrapper-fixed\" #viewPort>\n            <div #itemsContainer class=\"igx-tabs__header-wrapper-fluid\">\n                <ng-container *ngIf=\"!hasContentTabs\">\n                    <igx-tab-item igxRipple *ngFor=\"let group of groups\" [relatedGroup]=\"group\">\n                    </igx-tab-item>\n                </ng-container>\n                <ng-content select=\"igx-tab-item\"></ng-content>\n                <div #selectedIndicator *ngIf=\"groups.length > 0 || contentTabs.length > 0\" class=\"igx-tabs__header-menu-item-indicator\"></div>\n            </div>\n        </div>\n        <button igxRipple class=\"igx-tabs__header-button\" igxButton=\"icon\" (click)=\"scrollRight($event)\" igxRightButtonStyle>\n            <igx-icon fontSet=\"material\">navigate_next</igx-icon>\n        </button>\n    </div>\n    <div class=\"igx-tabs__content-fixed\">\n        <div #contentsContainer class=\"igx-tabs__content-fluid\">\n            <ng-content></ng-content>\n        </div>\n    </div>\n</div>",
                    providers: [{ provide: IgxTabsBase, useExisting: IgxTabsComponent }]
                }] }
    ];
    /** @nocollapse */
    IgxTabsComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    IgxTabsComponent.propDecorators = {
        groups: [{ type: ContentChildren, args: [forwardRef(function () { return IgxTabsGroupComponent; }),] }],
        contentTabs: [{ type: ContentChildren, args: [forwardRef(function () { return IgxTabItemComponent; }),] }],
        selectedIndex: [{ type: Input }],
        tabsType: [{ type: Input, args: ['tabsType',] }],
        class: [{ type: Input }],
        onTabItemDeselected: [{ type: Output }],
        onTabItemSelected: [{ type: Output }],
        contentsContainer: [{ type: ViewChild, args: ['contentsContainer', { static: true },] }],
        headerContainer: [{ type: ViewChild, args: ['headerContainer', { static: true },] }],
        itemsContainer: [{ type: ViewChild, args: ['itemsContainer', { static: true },] }],
        selectedIndicator: [{ type: ViewChild, args: ['selectedIndicator', { static: false },] }],
        tabsContainer: [{ type: ViewChild, args: ['tabsContainer', { static: true },] }],
        viewPort: [{ type: ViewChild, args: ['viewPort', { static: true },] }],
        viewTabs: [{ type: ViewChildren, args: [forwardRef(function () { return IgxTabItemComponent; }),] }],
        cssClass: [{ type: HostBinding, args: ['attr.class',] }],
        selectedGroupHandler: [{ type: HostListener, args: ['onTabItemSelected', ['$event'],] }]
    };
    return IgxTabsComponent;
}());
export { IgxTabsComponent };
if (false) {
    /**
     * Provides an observable collection of all `IgxTabsGroupComponent`s.
     * ```typescript
     * const groupItems = this.myTabComponent.groups;
     * ```
     * @type {?}
     */
    IgxTabsComponent.prototype.groups;
    /**
     * Provides an observable collection of all `IgxTabItemComponent`s defined in the page.
     * ```typescript
     * const tabItems = this.myTabComponent.contentTabs;
     * ```
     * @type {?}
     */
    IgxTabsComponent.prototype.contentTabs;
    /**
     * Defines the tab header sizing mode. You can choose between `contentfit` or `fixed`.
     * By default the header sizing mode is `contentfit`.
     * ```html
     * <igx-tabs tabsType="fixed">
     *     <igx-tabs-group label="HOME">Home</igx-tabs-group>
     * </igx-tabs>
     * ```
     * @type {?}
     */
    IgxTabsComponent.prototype.tabsType;
    /**
     * @hidden
     * @type {?}
     */
    IgxTabsComponent.prototype.class;
    /**
     * Emitted when a tab item is deselected.
     * ```html
     * <igx-tabs (onTabItemDeselected)="itemDeselected($event)">
     *      <igx-tabs-group label="Tab 1">This is Tab 1 content.</igx-tabs-group>
     *      <igx-tabs-group label="Tab 2">This is Tab 2 content.</igx-tabs-group>
     * </igx-tabs>
     * ```
     * ```typescript
     * itemDeselected(e){
     *      const tabGroup = e.group;
     *      const tabItem = e.tab;
     * }
     * ```
     * @type {?}
     */
    IgxTabsComponent.prototype.onTabItemDeselected;
    /**
     * Emitted when a tab item is selected.
     * ```html
     * <igx-tabs (onTabItemSelected)="itemSelected($event)">
     *      <igx-tabs-group label="Tab 1">This is Tab 1 content.</igx-tabs-group>
     *      <igx-tabs-group label="Tab 2">This is Tab 2 content.</igx-tabs-group>
     * </igx-tabs>
     * ```
     * ```typescript
     * itemSelected(e){
     *      const tabGroup = e.group;
     *      const tabItem = e.tab;
     * }
     * ```
     * @type {?}
     */
    IgxTabsComponent.prototype.onTabItemSelected;
    /**
     * @hidden
     * @type {?}
     */
    IgxTabsComponent.prototype.contentsContainer;
    /**
     * @hidden
     * @type {?}
     */
    IgxTabsComponent.prototype.headerContainer;
    /**
     * @hidden
     * @type {?}
     */
    IgxTabsComponent.prototype.itemsContainer;
    /**
     * @hidden
     * @type {?}
     */
    IgxTabsComponent.prototype.selectedIndicator;
    /**
     * @hidden
     * @type {?}
     */
    IgxTabsComponent.prototype.tabsContainer;
    /**
     * @hidden
     * @type {?}
     */
    IgxTabsComponent.prototype.viewPort;
    /**
     * Provides an observable collection of all `IgxTabItemComponent`s.
     * ```typescript
     * const tabItems = this.myTabComponent.viewTabs;
     * ```
     * @type {?}
     */
    IgxTabsComponent.prototype.viewTabs;
    /**
     * @hidden
     * @type {?}
     */
    IgxTabsComponent.prototype.calculatedWidth;
    /**
     * @hidden
     * @type {?}
     */
    IgxTabsComponent.prototype.visibleItemsWidth;
    /**
     * @hidden
     * @type {?}
     */
    IgxTabsComponent.prototype.offset;
    /**
     * @type {?}
     * @private
     */
    IgxTabsComponent.prototype._groupChanges$;
    /**
     * @type {?}
     * @private
     */
    IgxTabsComponent.prototype._selectedIndex;
    /**
     * @type {?}
     * @private
     */
    IgxTabsComponent.prototype._element;
}
/**
 * @hidden
 */
var IgxTabsModule = /** @class */ (function () {
    function IgxTabsModule() {
    }
    IgxTabsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxTabsComponent,
                        IgxTabsGroupComponent,
                        IgxTabItemComponent,
                        IgxTabItemTemplateDirective,
                        IgxRightButtonStyleDirective,
                        IgxLeftButtonStyleDirective],
                    exports: [IgxTabsComponent,
                        IgxTabsGroupComponent,
                        IgxTabItemComponent,
                        IgxTabItemTemplateDirective,
                        IgxRightButtonStyleDirective,
                        IgxLeftButtonStyleDirective],
                    imports: [CommonModule, IgxBadgeModule, IgxIconModule, IgxRippleModule]
                },] }
    ];
    return IgxTabsModule;
}());
export { IgxTabsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3RhYnMvdGFicy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUVILFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFFZixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLDRCQUE0QixFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0gsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0lBR3hDLE9BQVEsT0FBTztJQUNmLFlBQWEsWUFBWTs7O0FBRzdCO0lBMFJJLDBCQUFvQixRQUFvQjtRQUFwQixhQUFRLEdBQVIsUUFBUSxDQUFZOzs7Ozs7Ozs7O1FBbE9qQyxhQUFRLEdBQXNCLFlBQVksQ0FBQzs7OztRQU0zQyxVQUFLLEdBQUcsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O1FBaUJELHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7UUFp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OEJ4QixZQUFZLFNBQUMsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBaUxqRCx1QkFBQztDQUFBLEFBeFlELElBd1lDO1NBbFlZLGdCQUFnQjs7Ozs7Ozs7O0lBUXpCLGtDQUNnRDs7Ozs7Ozs7SUFRaEQsdUNBQ21EOzs7Ozs7Ozs7OztJQStCbkQsb0NBQ2tEOzs7OztJQUtsRCxpQ0FDa0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJsQiwrQ0FBMEQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUIxRCw2Q0FBd0Q7Ozs7O0lBS3hELDZDQUNxQzs7Ozs7SUFLckMsMkNBQ21DOzs7OztJQUtuQywwQ0FDa0M7Ozs7O0lBS2xDLDZDQUNxQzs7Ozs7SUFLckMseUNBQ2lDOzs7OztJQUtqQyxvQ0FDNEI7Ozs7Ozs7O0lBUTVCLG9DQUNnRDs7Ozs7SUEwQmhELDJDQUErQjs7Ozs7SUFLL0IsNkNBQWlDOzs7OztJQUtqQyxrQ0FBa0I7Ozs7O0lBRWxCLDBDQUFxQzs7Ozs7SUFDckMsMENBQTRCOzs7OztJQXNHaEIsb0NBQTRCOzs7OztBQW1INUM7SUFBQTtJQWlCQSxDQUFDOztnQkFqQkEsUUFBUSxTQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLGdCQUFnQjt3QkFDM0IscUJBQXFCO3dCQUNyQixtQkFBbUI7d0JBQ25CLDJCQUEyQjt3QkFDM0IsNEJBQTRCO3dCQUM1QiwyQkFBMkIsQ0FBQztvQkFDaEMsT0FBTyxFQUFFLENBQUMsZ0JBQWdCO3dCQUN0QixxQkFBcUI7d0JBQ3JCLG1CQUFtQjt3QkFDbkIsMkJBQTJCO3dCQUMzQiw0QkFBNEI7d0JBQzVCLDJCQUEyQixDQUFDO29CQUNoQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxlQUFlLENBQUM7aUJBQzFFOztJQUdELG9CQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FEWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBDb21wb25lbnQsXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIGZvcndhcmRSZWYsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIElucHV0LFxuICAgIE5nTW9kdWxlLFxuICAgIE91dHB1dCxcbiAgICBRdWVyeUxpc3QsXG4gICAgVmlld0NoaWxkLFxuICAgIFZpZXdDaGlsZHJlbixcbiAgICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElneEJhZGdlTW9kdWxlIH0gZnJvbSAnLi4vYmFkZ2UvYmFkZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IElneFJpcHBsZU1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvcmlwcGxlL3JpcHBsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4SWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgSWd4VGFiSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vdGFiLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IElneFRhYnNHcm91cENvbXBvbmVudCB9IGZyb20gJy4vdGFicy1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4TGVmdEJ1dHRvblN0eWxlRGlyZWN0aXZlLCBJZ3hSaWdodEJ1dHRvblN0eWxlRGlyZWN0aXZlLCBJZ3hUYWJJdGVtVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3RhYnMuZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBJZ3hUYWJzQmFzZSB9IGZyb20gJy4vdGFicy5jb21tb24nO1xuXG5leHBvcnQgZW51bSBUYWJzVHlwZSB7XG4gICAgRklYRUQgPSAnZml4ZWQnLFxuICAgIENPTlRFTlRGSVQgPSAnY29udGVudGZpdCdcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtdGFicycsXG4gICAgdGVtcGxhdGVVcmw6ICd0YWJzLmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IElneFRhYnNCYXNlLCB1c2VFeGlzdGluZzogSWd4VGFic0NvbXBvbmVudCB9XVxufSlcblxuZXhwb3J0IGNsYXNzIElneFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBJZ3hUYWJzQmFzZSwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuICAgIC8qKlxuICAgICogUHJvdmlkZXMgYW4gb2JzZXJ2YWJsZSBjb2xsZWN0aW9uIG9mIGFsbCBgSWd4VGFic0dyb3VwQ29tcG9uZW50YHMuXG4gICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgKiBjb25zdCBncm91cEl0ZW1zID0gdGhpcy5teVRhYkNvbXBvbmVudC5ncm91cHM7XG4gICAgKiBgYGBcbiAgICAqL1xuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBJZ3hUYWJzR3JvdXBDb21wb25lbnQpKVxuICAgIHB1YmxpYyBncm91cHM6IFF1ZXJ5TGlzdDxJZ3hUYWJzR3JvdXBDb21wb25lbnQ+O1xuXG4gICAgLyoqXG4gICAgKiBQcm92aWRlcyBhbiBvYnNlcnZhYmxlIGNvbGxlY3Rpb24gb2YgYWxsIGBJZ3hUYWJJdGVtQ29tcG9uZW50YHMgZGVmaW5lZCBpbiB0aGUgcGFnZS5cbiAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAqIGNvbnN0IHRhYkl0ZW1zID0gdGhpcy5teVRhYkNvbXBvbmVudC5jb250ZW50VGFicztcbiAgICAqIGBgYFxuICAgICovXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IElneFRhYkl0ZW1Db21wb25lbnQpKVxuICAgIHB1YmxpYyBjb250ZW50VGFiczogUXVlcnlMaXN0PElneFRhYkl0ZW1Db21wb25lbnQ+O1xuXG4gICAgLyoqXG4gICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYHNlbGVjdGVkSW5kZXhgLlxuICAgICogRGVmYXVsdCB2YWx1ZSBpcyAwLlxuICAgICogYGBgaHRtbFxuICAgICogPGlneC10YWJzIHNlbGVjdGVkSW5kZXg9XCIxXCI+XG4gICAgKiBgYGBcbiAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBzZWxlY3RlZEluZGV4KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2VsZWN0ZWRJbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJyA/IHBhcnNlSW50KGluZGV4LCAxMCkgOiBpbmRleDtcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT09IG5ld0luZGV4KSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gbmV3SW5kZXg7XG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGVkR3JvdXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIHRhYiBoZWFkZXIgc2l6aW5nIG1vZGUuIFlvdSBjYW4gY2hvb3NlIGJldHdlZW4gYGNvbnRlbnRmaXRgIG9yIGBmaXhlZGAuXG4gICAgICogQnkgZGVmYXVsdCB0aGUgaGVhZGVyIHNpemluZyBtb2RlIGlzIGBjb250ZW50Zml0YC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC10YWJzIHRhYnNUeXBlPVwiZml4ZWRcIj5cbiAgICAgKiAgICAgPGlneC10YWJzLWdyb3VwIGxhYmVsPVwiSE9NRVwiPkhvbWU8L2lneC10YWJzLWdyb3VwPlxuICAgICAqIDwvaWd4LXRhYnM+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCd0YWJzVHlwZScpXG4gICAgcHVibGljIHRhYnNUeXBlOiBzdHJpbmcgfCBUYWJzVHlwZSA9ICdjb250ZW50Zml0JztcblxuICAgIC8qKlxuICAgICogQGhpZGRlblxuICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY2xhc3MgPSAnJztcblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgd2hlbiBhIHRhYiBpdGVtIGlzIGRlc2VsZWN0ZWQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtdGFicyAob25UYWJJdGVtRGVzZWxlY3RlZCk9XCJpdGVtRGVzZWxlY3RlZCgkZXZlbnQpXCI+XG4gICAgICogICAgICA8aWd4LXRhYnMtZ3JvdXAgbGFiZWw9XCJUYWIgMVwiPlRoaXMgaXMgVGFiIDEgY29udGVudC48L2lneC10YWJzLWdyb3VwPlxuICAgICAqICAgICAgPGlneC10YWJzLWdyb3VwIGxhYmVsPVwiVGFiIDJcIj5UaGlzIGlzIFRhYiAyIGNvbnRlbnQuPC9pZ3gtdGFicy1ncm91cD5cbiAgICAgKiA8L2lneC10YWJzPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBpdGVtRGVzZWxlY3RlZChlKXtcbiAgICAgKiAgICAgIGNvbnN0IHRhYkdyb3VwID0gZS5ncm91cDtcbiAgICAgKiAgICAgIGNvbnN0IHRhYkl0ZW0gPSBlLnRhYjtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblRhYkl0ZW1EZXNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLyoqXG4gICAgKiBFbWl0dGVkIHdoZW4gYSB0YWIgaXRlbSBpcyBzZWxlY3RlZC5cbiAgICAqIGBgYGh0bWxcbiAgICAqIDxpZ3gtdGFicyAob25UYWJJdGVtU2VsZWN0ZWQpPVwiaXRlbVNlbGVjdGVkKCRldmVudClcIj5cbiAgICAqICAgICAgPGlneC10YWJzLWdyb3VwIGxhYmVsPVwiVGFiIDFcIj5UaGlzIGlzIFRhYiAxIGNvbnRlbnQuPC9pZ3gtdGFicy1ncm91cD5cbiAgICAqICAgICAgPGlneC10YWJzLWdyb3VwIGxhYmVsPVwiVGFiIDJcIj5UaGlzIGlzIFRhYiAyIGNvbnRlbnQuPC9pZ3gtdGFicy1ncm91cD5cbiAgICAqIDwvaWd4LXRhYnM+XG4gICAgKiBgYGBcbiAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAqIGl0ZW1TZWxlY3RlZChlKXtcbiAgICAqICAgICAgY29uc3QgdGFiR3JvdXAgPSBlLmdyb3VwO1xuICAgICogICAgICBjb25zdCB0YWJJdGVtID0gZS50YWI7XG4gICAgKiB9XG4gICAgKiBgYGBcbiAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25UYWJJdGVtU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnY29udGVudHNDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBjb250ZW50c0NvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdoZWFkZXJDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBoZWFkZXJDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnaXRlbXNDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBpdGVtc0NvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdzZWxlY3RlZEluZGljYXRvcicsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBzZWxlY3RlZEluZGljYXRvcjogRWxlbWVudFJlZjtcblxuICAgIC8qKlxuICAgICogQGhpZGRlblxuICAgICovXG4gICAgQFZpZXdDaGlsZCgndGFic0NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIHRhYnNDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgndmlld1BvcnQnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyB2aWV3UG9ydDogRWxlbWVudFJlZjtcblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGVzIGFuIG9ic2VydmFibGUgY29sbGVjdGlvbiBvZiBhbGwgYElneFRhYkl0ZW1Db21wb25lbnRgcy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgdGFiSXRlbXMgPSB0aGlzLm15VGFiQ29tcG9uZW50LnZpZXdUYWJzO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBJZ3hUYWJJdGVtQ29tcG9uZW50KSlcbiAgICBwdWJsaWMgdmlld1RhYnM6IFF1ZXJ5TGlzdDxJZ3hUYWJJdGVtQ29tcG9uZW50PjtcblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGVzIGFuIG9ic2VydmFibGUgY29sbGVjdGlvbiBvZiBhbGwgYElneFRhYkl0ZW1Db21wb25lbnRgcy5cbiAgICAgKiBGaXJzdCB0cnkgdG8gZ2V0IHRoZW0gYXMgY29udGVudCBjaGlsZHJlbiBpZiBub3QgYXZhaWxhYmxlIGdldCB0aGVtIGFzIHZpZXcgY2hpbGRyZW4uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHRhYkl0ZW1zID0gdGhpcy5teVRhYkNvbXBvbmVudC50YWJzO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgdGFicygpOiBRdWVyeUxpc3Q8SWd4VGFiSXRlbUNvbXBvbmVudD4ge1xuICAgICAgICBpZiAodGhpcy5oYXNDb250ZW50VGFicykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudFRhYnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmlld1RhYnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBoYXNDb250ZW50VGFicygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvbnRlbnRUYWJzICYmIHRoaXMuY29udGVudFRhYnMubGVuZ3RoID4gMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBjYWxjdWxhdGVkV2lkdGg6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgdmlzaWJsZUl0ZW1zV2lkdGg6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgb2Zmc2V0ID0gMDtcblxuICAgIHByaXZhdGUgX2dyb3VwQ2hhbmdlcyQ6IFN1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIF9zZWxlY3RlZEluZGV4ID0gLTE7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmNsYXNzJylcbiAgICBwdWJsaWMgZ2V0IGNzc0NsYXNzKCkge1xuICAgICAgICBjb25zdCBkZWZhdWx0U3R5bGUgPSBgaWd4LXRhYnNgO1xuICAgICAgICBjb25zdCBmaXhlZFN0eWxlID0gYGlneC10YWJzLS1maXhlZGA7XG4gICAgICAgIGNvbnN0IGljb25TdHlsZSA9IGBpZ3gtdGFicy0taWNvbnNgO1xuICAgICAgICBjb25zdCBpY29uTGFiZWxGb3VuZEluR3JvdXBzID0gdGhpcy5ncm91cHMuZmluZCgoZ3JvdXApID0+IGdyb3VwLmljb24gIT0gbnVsbCAmJiBncm91cC5sYWJlbCAhPSBudWxsKTtcbiAgICAgICAgY29uc3QgaWNvbkxhYmVsRm91bmRJblRhYnMgPSB0aGlzLmNvbnRlbnRUYWJzLmZpbmQoKHRhYikgPT4gdGFiLmljb24gIT0gbnVsbCAmJiB0YWIubGFiZWwgIT0gbnVsbCk7XG4gICAgICAgIGxldCBjc3M7XG4gICAgICAgIHN3aXRjaCAoVGFic1R5cGVbdGhpcy50YWJzVHlwZS50b1VwcGVyQ2FzZSgpXSkge1xuICAgICAgICAgICAgY2FzZSBUYWJzVHlwZS5GSVhFRDoge1xuICAgICAgICAgICAgICAgIGNzcyA9IGZpeGVkU3R5bGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgY3NzID0gZGVmYXVsdFN0eWxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGF5b3V0IGZpeCBmb3IgaXRlbXMgd2l0aCBpY29uc1xuICAgICAgICBpZiAoaWNvbkxhYmVsRm91bmRJbkdyb3VwcyAhPT0gdW5kZWZpbmVkIHx8IGljb25MYWJlbEZvdW5kSW5UYWJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNzcyA9IGAke2Nzc30gJHtpY29uU3R5bGV9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBgJHtjc3N9ICR7dGhpcy5jbGFzc31gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdvblRhYkl0ZW1TZWxlY3RlZCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIHNlbGVjdGVkR3JvdXBIYW5kbGVyKGFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzQ29udGVudFRhYnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoZVRhYnNBcnJheSA9IHRoaXMudGFicy50b0FycmF5KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ICE9PSAtMSAmJiB0aGlzLnNlbGVjdGVkSW5kZXggIT09IGFyZ3MudGFiLmluZGV4ICYmIHRoZVRhYnNBcnJheVt0aGlzLnNlbGVjdGVkSW5kZXhdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGVUYWJzQXJyYXlbdGhpcy5zZWxlY3RlZEluZGV4XS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5vblRhYkl0ZW1EZXNlbGVjdGVkLmVtaXQoeyB0YWI6IHRoZVRhYnNBcnJheVt0aGlzLnNlbGVjdGVkSW5kZXhdLCBncm91cHM6IG51bGwgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBhcmdzLnRhYi5pbmRleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZTZWxlY3RlZEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgICAgICAgICAgaWYgKHByZXZTZWxlY3RlZEluZGV4ICE9PSAtMSAmJiB0aGlzLmdyb3VwcyAmJiB0aGlzLmdyb3Vwcy50b0FycmF5KClbcHJldlNlbGVjdGVkSW5kZXhdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGFiSXRlbURlc2VsZWN0ZWQuZW1pdChcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFiOiB0aGlzLmdyb3Vwcy50b0FycmF5KClbcHJldlNlbGVjdGVkSW5kZXhdLnJlbGF0ZWRUYWIsXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cDogdGhpcy5ncm91cHMudG9BcnJheSgpW3ByZXZTZWxlY3RlZEluZGV4XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcmdzLmdyb3VwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gYXJncy5ncm91cC5pbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmdyb3Vwcykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAuaW5kZXggIT09IHRoaXMuc2VsZWN0ZWRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNlbGVjdEdyb3VwKHApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHNjcm9sbExlZnQoZXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zY3JvbGwoZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2Nyb2xsUmlnaHQoZXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zY3JvbGwodHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBzY3JvbGxFbGVtZW50KGVsZW1lbnQ6IGFueSwgc2Nyb2xsUmlnaHQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgdmlld1BvcnRXaWR0aCA9IHRoaXMudmlld1BvcnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgICAgICB0aGlzLm9mZnNldCA9IChzY3JvbGxSaWdodCkgPyBlbGVtZW50Lm9mZnNldFdpZHRoICsgZWxlbWVudC5vZmZzZXRMZWZ0IC0gdmlld1BvcnRXaWR0aCA6IGVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgICAgICAgdGhpcy5pdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHstdGhpcy5vZmZzZXR9cHgpYDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzZWxlY3RlZCBgSWd4VGFiSXRlbUNvbXBvbmVudGAuXG4gICAgICogYGBgXG4gICAgICogY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5teVRhYkNvbXBvbmVudC5zZWxlY3RlZFRhYkl0ZW07XG4gICAgICogYGBgXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkVGFiSXRlbSgpOiBJZ3hUYWJJdGVtQ29tcG9uZW50IHtcbiAgICAgICAgaWYgKHRoaXMudGFicyAmJiB0aGlzLnNlbGVjdGVkSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFicy50b0FycmF5KClbdGhpcy5zZWxlY3RlZEluZGV4XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnRhYnMuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0LmlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHQuaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaGFzQ29udGVudFRhYnMgJiYgKHRoaXMuc2VsZWN0ZWRJbmRleCA8IDAgfHwgdGhpcy5zZWxlY3RlZEluZGV4ID49IHRoaXMuZ3JvdXBzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRHcm91cCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9ncm91cENoYW5nZXMkID0gdGhpcy5ncm91cHMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNldFNlbGVjdGlvbk9uQ29sbGVjdGlvbkNoYW5nZWQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2dyb3VwQ2hhbmdlcyQpIHtcbiAgICAgICAgICAgIHRoaXMuX2dyb3VwQ2hhbmdlcyQudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0U2VsZWN0ZWRHcm91cCgpOiB2b2lkIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0NvbnRlbnRUYWJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA8IDAgfHwgdGhpcy5zZWxlY3RlZEluZGV4ID49IHRoaXMuY29udGVudFRhYnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRpY2F0b3IubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RHcm91cEJ5SW5kZXgodGhpcy5zZWxlY3RlZEluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPCAwIHx8IHRoaXMuc2VsZWN0ZWRJbmRleCA+PSB0aGlzLmdyb3Vwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0R3JvdXBCeUluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXRTZWxlY3Rpb25PbkNvbGxlY3Rpb25DaGFuZ2VkKCk6IHZvaWQge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyb3Vwcy50b0FycmF5KClbdGhpcy5zZWxlY3RlZEluZGV4XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gcGVyc2lzdCB0aGUgc2VsZWN0ZWQgaW5kZXggYW5kIGFwcGxpZWQgaXQgdG8gdGhlIG5ldyBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RHcm91cEJ5SW5kZXgodGhpcy5zZWxlY3RlZEluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA+PSB0aGlzLmdyb3Vwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW4gY2FzZSB0aGUgc2VsZWN0ZWQgaW5kZXggaXMgbm8gbG9uZ2VyIHZhbGlkLCBzZWxlY3QgdGhlIGxhc3QgZ3JvdXAgaW4gdGhlIG5ldyBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0R3JvdXBCeUluZGV4KHRoaXMuZ3JvdXBzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZWxlY3RHcm91cEJ5SW5kZXgoc2VsZWN0ZWRJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmhhc0NvbnRlbnRUYWJzKSB7XG4gICAgICAgICAgICBjb25zdCBhVGFiID0gdGhpcy50YWJzLnRvQXJyYXkoKVtzZWxlY3RlZEluZGV4XTtcbiAgICAgICAgICAgIGlmIChhVGFiKSB7XG4gICAgICAgICAgICAgICAgYVRhYi5zZWxlY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGFibGVHcm91cHMgPSB0aGlzLmdyb3Vwcy5maWx0ZXIoKHNlbGVjdGFibGVHcm91cCkgPT4gIXNlbGVjdGFibGVHcm91cC5kaXNhYmxlZCk7XG4gICAgICAgICAgICBjb25zdCBncm91cCA9IHNlbGVjdGFibGVHcm91cHNbc2VsZWN0ZWRJbmRleF07XG4gICAgICAgICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgICAgICAgICBncm91cC5zZWxlY3QoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGRlc2VsZWN0R3JvdXAoZ3JvdXA6IElneFRhYnNHcm91cENvbXBvbmVudCk6IHZvaWQge1xuICAgICAgICAvLyBDYW5ub3QgZGVzZWxlY3QgdGhlIHNlbGVjdGVkIHRhYiAtIHRoaXMgd2lsbCBtZWFuIHRoYXQgdGhlcmUgd2lsbCBiZSBub3Qgc2VsZWN0ZWQgdGFiIGxlZnRcbiAgICAgICAgaWYgKGdyb3VwLmRpc2FibGVkIHx8IHRoaXMuc2VsZWN0ZWRUYWJJdGVtLmluZGV4ID09PSBncm91cC5pbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JvdXAuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBncm91cC5yZWxhdGVkVGFiLnRhYmluZGV4ID0gLTE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzY3JvbGwoc2Nyb2xsUmlnaHQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGFic0FycmF5ID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcbiAgICAgICAgZm9yIChjb25zdCB0YWIgb2YgdGFic0FycmF5KSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGFiLm5hdGl2ZVRhYkl0ZW0ubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIGlmIChzY3JvbGxSaWdodCkge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lm9mZnNldFdpZHRoICsgZWxlbWVudC5vZmZzZXRMZWZ0ID4gdGhpcy52aWV3UG9ydC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoICsgdGhpcy5vZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxFbGVtZW50KGVsZW1lbnQsIHNjcm9sbFJpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5vZmZzZXRXaWR0aCArIGVsZW1lbnQub2Zmc2V0TGVmdCA+PSB0aGlzLm9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEVsZW1lbnQoZWxlbWVudCwgc2Nyb2xsUmlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneFRhYnNDb21wb25lbnQsXG4gICAgICAgIElneFRhYnNHcm91cENvbXBvbmVudCxcbiAgICAgICAgSWd4VGFiSXRlbUNvbXBvbmVudCxcbiAgICAgICAgSWd4VGFiSXRlbVRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBJZ3hSaWdodEJ1dHRvblN0eWxlRGlyZWN0aXZlLFxuICAgICAgICBJZ3hMZWZ0QnV0dG9uU3R5bGVEaXJlY3RpdmVdLFxuICAgIGV4cG9ydHM6IFtJZ3hUYWJzQ29tcG9uZW50LFxuICAgICAgICBJZ3hUYWJzR3JvdXBDb21wb25lbnQsXG4gICAgICAgIElneFRhYkl0ZW1Db21wb25lbnQsXG4gICAgICAgIElneFRhYkl0ZW1UZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgSWd4UmlnaHRCdXR0b25TdHlsZURpcmVjdGl2ZSxcbiAgICAgICAgSWd4TGVmdEJ1dHRvblN0eWxlRGlyZWN0aXZlXSxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBJZ3hCYWRnZU1vZHVsZSwgSWd4SWNvbk1vZHVsZSwgSWd4UmlwcGxlTW9kdWxlXVxufSlcblxuZXhwb3J0IGNsYXNzIElneFRhYnNNb2R1bGUge1xufVxuIl19