/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const TabsType = {
    FIXED: 'fixed',
    CONTENTFIT: 'contentfit',
};
export { TabsType };
export class IgxTabsComponent {
    /**
     * @param {?} _element
     */
    constructor(_element) {
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
    /**
     * An \@Input property that sets the value of the `selectedIndex`.
     * Default value is 0.
     * ```html
     * <igx-tabs selectedIndex="1">
     * ```
     * @return {?}
     */
    get selectedIndex() {
        return this._selectedIndex;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    set selectedIndex(index) {
        /** @type {?} */
        const newIndex = typeof index !== 'number' ? parseInt(index, 10) : index;
        if (this._selectedIndex !== newIndex) {
            this._selectedIndex = newIndex;
            this.setSelectedGroup();
        }
    }
    /**
     * Provides an observable collection of all `IgxTabItemComponent`s.
     * First try to get them as content children if not available get them as view children.
     * ```typescript
     * const tabItems = this.myTabComponent.tabs;
     * ```
     * @return {?}
     */
    get tabs() {
        if (this.hasContentTabs) {
            return this.contentTabs;
        }
        return this.viewTabs;
    }
    /**
     * @hidden
     * @return {?}
     */
    get hasContentTabs() {
        return (this.contentTabs && this.contentTabs.length > 0);
    }
    /**
     * @hidden
     * @return {?}
     */
    get cssClass() {
        /** @type {?} */
        const defaultStyle = `igx-tabs`;
        /** @type {?} */
        const fixedStyle = `igx-tabs--fixed`;
        /** @type {?} */
        const iconStyle = `igx-tabs--icons`;
        /** @type {?} */
        const iconLabelFoundInGroups = this.groups.find((group) => group.icon != null && group.label != null);
        /** @type {?} */
        const iconLabelFoundInTabs = this.contentTabs.find((tab) => tab.icon != null && tab.label != null);
        /** @type {?} */
        let css;
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
            css = `${css} ${iconStyle}`;
        }
        return `${css} ${this.class}`;
    }
    /**
     * @hidden
     * @param {?} args
     * @return {?}
     */
    selectedGroupHandler(args) {
        if (this.hasContentTabs) {
            /** @type {?} */
            const theTabsArray = this.tabs.toArray();
            if (this.selectedIndex !== -1 && this.selectedIndex !== args.tab.index && theTabsArray[this.selectedIndex] !== undefined) {
                theTabsArray[this.selectedIndex].isSelected = false;
                this.onTabItemDeselected.emit({ tab: theTabsArray[this.selectedIndex], groups: null });
            }
            this.selectedIndex = args.tab.index;
        }
        else {
            /** @type {?} */
            const prevSelectedIndex = this.selectedIndex;
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
                this.groups.forEach((p) => {
                    if (p.index !== this.selectedIndex) {
                        this.deselectGroup(p);
                    }
                });
            }
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    scrollLeft(event) {
        this.scroll(false);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    scrollRight(event) {
        this.scroll(true);
    }
    /**
     * @hidden
     * @param {?} element
     * @param {?} scrollRight
     * @return {?}
     */
    scrollElement(element, scrollRight) {
        /** @type {?} */
        const viewPortWidth = this.viewPort.nativeElement.offsetWidth;
        this.offset = (scrollRight) ? element.offsetWidth + element.offsetLeft - viewPortWidth : element.offsetLeft;
        this.itemsContainer.nativeElement.style.transform = `translate(${-this.offset}px)`;
    }
    /**
     * Gets the selected `IgxTabItemComponent`.
     * ```
     * const selectedItem = this.myTabComponent.selectedTabItem;
     * ```
     * @return {?}
     */
    get selectedTabItem() {
        if (this.tabs && this.selectedIndex !== undefined) {
            return this.tabs.toArray()[this.selectedIndex];
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterViewInit() {
        if (this._selectedIndex === -1) {
            this.tabs.forEach((t) => {
                if (t.isSelected) {
                    this._selectedIndex = t.index;
                }
            });
        }
        if (!this.hasContentTabs && (this.selectedIndex < 0 || this.selectedIndex >= this.groups.length)) {
            this._selectedIndex = 0;
        }
        requestAnimationFrame(() => {
            this.setSelectedGroup();
        });
        this._groupChanges$ = this.groups.changes.subscribe(() => {
            this.resetSelectionOnCollectionChanged();
        });
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        if (this._groupChanges$) {
            this._groupChanges$.unsubscribe();
        }
    }
    /**
     * @private
     * @return {?}
     */
    setSelectedGroup() {
        requestAnimationFrame(() => {
            if (this.hasContentTabs) {
                if (this.selectedIndex < 0 || this.selectedIndex >= this.contentTabs.length) {
                    this.selectedIndicator.nativeElement.style.visibility = 'hidden';
                }
                else {
                    this.selectGroupByIndex(this.selectedIndex);
                }
            }
            else {
                if (this.selectedIndex < 0 || this.selectedIndex >= this.groups.length) {
                    this._selectedIndex = 0;
                }
                this.selectGroupByIndex(this.selectedIndex);
            }
        });
    }
    /**
     * @private
     * @return {?}
     */
    resetSelectionOnCollectionChanged() {
        setTimeout(() => {
            if (this.groups.toArray()[this.selectedIndex] !== undefined) {
                // persist the selected index and applied it to the new collection
                this.selectGroupByIndex(this.selectedIndex);
            }
            else {
                if (this.selectedIndex >= this.groups.length) {
                    // in case the selected index is no longer valid, select the last group in the new collection
                    this.selectGroupByIndex(this.groups.length - 1);
                }
            }
        }, 0);
    }
    /**
     * @private
     * @param {?} selectedIndex
     * @return {?}
     */
    selectGroupByIndex(selectedIndex) {
        if (this.hasContentTabs) {
            /** @type {?} */
            const aTab = this.tabs.toArray()[selectedIndex];
            if (aTab) {
                aTab.select();
            }
        }
        else {
            /** @type {?} */
            const selectableGroups = this.groups.filter((selectableGroup) => !selectableGroup.disabled);
            /** @type {?} */
            const group = selectableGroups[selectedIndex];
            if (group) {
                group.select(0);
            }
        }
    }
    /**
     * @private
     * @param {?} group
     * @return {?}
     */
    deselectGroup(group) {
        // Cannot deselect the selected tab - this will mean that there will be not selected tab left
        if (group.disabled || this.selectedTabItem.index === group.index) {
            return;
        }
        group.isSelected = false;
        group.relatedTab.tabindex = -1;
    }
    /**
     * @private
     * @param {?} scrollRight
     * @return {?}
     */
    scroll(scrollRight) {
        /** @type {?} */
        const tabsArray = this.tabs.toArray();
        for (const tab of tabsArray) {
            /** @type {?} */
            const element = tab.nativeTabItem.nativeElement;
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
}
IgxTabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-tabs',
                template: "<!-- TODO Remove tab container from here -->\n<div #tabsContainer>\n    <div class=\"igx-tabs__header\" #headerContainer>\n        <button igxRipple class=\"igx-tabs__header-button\" igxButton=\"icon\" (click)=\"scrollLeft($event)\" igxLeftButtonStyle>\n            <igx-icon fontSet=\"material\">navigate_before</igx-icon>\n        </button>\n        <div class=\"igx-tabs__header-wrapper-fixed\" #viewPort>\n            <div #itemsContainer class=\"igx-tabs__header-wrapper-fluid\">\n                <ng-container *ngIf=\"!hasContentTabs\">\n                    <igx-tab-item igxRipple *ngFor=\"let group of groups\" [relatedGroup]=\"group\">\n                    </igx-tab-item>\n                </ng-container>\n                <ng-content select=\"igx-tab-item\"></ng-content>\n                <div #selectedIndicator *ngIf=\"groups.length > 0 || contentTabs.length > 0\" class=\"igx-tabs__header-menu-item-indicator\"></div>\n            </div>\n        </div>\n        <button igxRipple class=\"igx-tabs__header-button\" igxButton=\"icon\" (click)=\"scrollRight($event)\" igxRightButtonStyle>\n            <igx-icon fontSet=\"material\">navigate_next</igx-icon>\n        </button>\n    </div>\n    <div class=\"igx-tabs__content-fixed\">\n        <div #contentsContainer class=\"igx-tabs__content-fluid\">\n            <ng-content></ng-content>\n        </div>\n    </div>\n</div>",
                providers: [{ provide: IgxTabsBase, useExisting: IgxTabsComponent }]
            }] }
];
/** @nocollapse */
IgxTabsComponent.ctorParameters = () => [
    { type: ElementRef }
];
IgxTabsComponent.propDecorators = {
    groups: [{ type: ContentChildren, args: [forwardRef(() => IgxTabsGroupComponent),] }],
    contentTabs: [{ type: ContentChildren, args: [forwardRef(() => IgxTabItemComponent),] }],
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
    viewTabs: [{ type: ViewChildren, args: [forwardRef(() => IgxTabItemComponent),] }],
    cssClass: [{ type: HostBinding, args: ['attr.class',] }],
    selectedGroupHandler: [{ type: HostListener, args: ['onTabItemSelected', ['$event'],] }]
};
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
export class IgxTabsModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3RhYnMvdGFicy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUgsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxFQUVmLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsNEJBQTRCLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzSCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7SUFHeEMsT0FBUSxPQUFPO0lBQ2YsWUFBYSxZQUFZOzs7QUFTN0IsTUFBTSxPQUFPLGdCQUFnQjs7OztJQW9SekIsWUFBb0IsUUFBb0I7UUFBcEIsYUFBUSxHQUFSLFFBQVEsQ0FBWTs7Ozs7Ozs7OztRQWxPakMsYUFBUSxHQUFzQixZQUFZLENBQUM7Ozs7UUFNM0MsVUFBSyxHQUFHLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztRQWlCRCx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFD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LDBDQUFxQzs7Ozs7SUFDckMsMENBQTRCOzs7OztJQXNHaEIsb0NBQTRCOzs7OztBQW1JNUMsTUFBTSxPQUFPLGFBQWE7OztZQWhCekIsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLGdCQUFnQjtvQkFDM0IscUJBQXFCO29CQUNyQixtQkFBbUI7b0JBQ25CLDJCQUEyQjtvQkFDM0IsNEJBQTRCO29CQUM1QiwyQkFBMkIsQ0FBQztnQkFDaEMsT0FBTyxFQUFFLENBQUMsZ0JBQWdCO29CQUN0QixxQkFBcUI7b0JBQ3JCLG1CQUFtQjtvQkFDbkIsMkJBQTJCO29CQUMzQiw0QkFBNEI7b0JBQzVCLDJCQUEyQixDQUFDO2dCQUNoQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxlQUFlLENBQUM7YUFDMUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIENvbXBvbmVudCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgZm9yd2FyZFJlZixcbiAgICBIb3N0QmluZGluZyxcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgSW5wdXQsXG4gICAgTmdNb2R1bGUsXG4gICAgT3V0cHV0LFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBWaWV3Q2hpbGQsXG4gICAgVmlld0NoaWxkcmVuLFxuICAgIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSWd4QmFkZ2VNb2R1bGUgfSBmcm9tICcuLi9iYWRnZS9iYWRnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4UmlwcGxlTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9yaXBwbGUvcmlwcGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBJZ3hUYWJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi90YWItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4VGFic0dyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi90YWJzLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hMZWZ0QnV0dG9uU3R5bGVEaXJlY3RpdmUsIElneFJpZ2h0QnV0dG9uU3R5bGVEaXJlY3RpdmUsIElneFRhYkl0ZW1UZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vdGFicy5kaXJlY3RpdmVzJztcbmltcG9ydCB7IElneFRhYnNCYXNlIH0gZnJvbSAnLi90YWJzLmNvbW1vbic7XG5cbmV4cG9ydCBlbnVtIFRhYnNUeXBlIHtcbiAgICBGSVhFRCA9ICdmaXhlZCcsXG4gICAgQ09OVEVOVEZJVCA9ICdjb250ZW50Zml0J1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lneC10YWJzJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RhYnMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogSWd4VGFic0Jhc2UsIHVzZUV4aXN0aW5nOiBJZ3hUYWJzQ29tcG9uZW50IH1dXG59KVxuXG5leHBvcnQgY2xhc3MgSWd4VGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIElneFRhYnNCYXNlLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgLyoqXG4gICAgKiBQcm92aWRlcyBhbiBvYnNlcnZhYmxlIGNvbGxlY3Rpb24gb2YgYWxsIGBJZ3hUYWJzR3JvdXBDb21wb25lbnRgcy5cbiAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAqIGNvbnN0IGdyb3VwSXRlbXMgPSB0aGlzLm15VGFiQ29tcG9uZW50Lmdyb3VwcztcbiAgICAqIGBgYFxuICAgICovXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IElneFRhYnNHcm91cENvbXBvbmVudCkpXG4gICAgcHVibGljIGdyb3VwczogUXVlcnlMaXN0PElneFRhYnNHcm91cENvbXBvbmVudD47XG5cbiAgICAvKipcbiAgICAqIFByb3ZpZGVzIGFuIG9ic2VydmFibGUgY29sbGVjdGlvbiBvZiBhbGwgYElneFRhYkl0ZW1Db21wb25lbnRgcyBkZWZpbmVkIGluIHRoZSBwYWdlLlxuICAgICogYGBgdHlwZXNjcmlwdFxuICAgICogY29uc3QgdGFiSXRlbXMgPSB0aGlzLm15VGFiQ29tcG9uZW50LmNvbnRlbnRUYWJzO1xuICAgICogYGBgXG4gICAgKi9cbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gSWd4VGFiSXRlbUNvbXBvbmVudCkpXG4gICAgcHVibGljIGNvbnRlbnRUYWJzOiBRdWVyeUxpc3Q8SWd4VGFiSXRlbUNvbXBvbmVudD47XG5cbiAgICAvKipcbiAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBgc2VsZWN0ZWRJbmRleGAuXG4gICAgKiBEZWZhdWx0IHZhbHVlIGlzIDAuXG4gICAgKiBgYGBodG1sXG4gICAgKiA8aWd4LXRhYnMgc2VsZWN0ZWRJbmRleD1cIjFcIj5cbiAgICAqIGBgYFxuICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZWxlY3RlZEluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgbmV3SW5kZXggPSB0eXBlb2YgaW5kZXggIT09ICdudW1iZXInID8gcGFyc2VJbnQoaW5kZXgsIDEwKSA6IGluZGV4O1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gbmV3SW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSBuZXdJbmRleDtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRHcm91cCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgdGFiIGhlYWRlciBzaXppbmcgbW9kZS4gWW91IGNhbiBjaG9vc2UgYmV0d2VlbiBgY29udGVudGZpdGAgb3IgYGZpeGVkYC5cbiAgICAgKiBCeSBkZWZhdWx0IHRoZSBoZWFkZXIgc2l6aW5nIG1vZGUgaXMgYGNvbnRlbnRmaXRgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXRhYnMgdGFic1R5cGU9XCJmaXhlZFwiPlxuICAgICAqICAgICA8aWd4LXRhYnMtZ3JvdXAgbGFiZWw9XCJIT01FXCI+SG9tZTwvaWd4LXRhYnMtZ3JvdXA+XG4gICAgICogPC9pZ3gtdGFicz5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoJ3RhYnNUeXBlJylcbiAgICBwdWJsaWMgdGFic1R5cGU6IHN0cmluZyB8IFRhYnNUeXBlID0gJ2NvbnRlbnRmaXQnO1xuXG4gICAgLyoqXG4gICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjbGFzcyA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCB3aGVuIGEgdGFiIGl0ZW0gaXMgZGVzZWxlY3RlZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC10YWJzIChvblRhYkl0ZW1EZXNlbGVjdGVkKT1cIml0ZW1EZXNlbGVjdGVkKCRldmVudClcIj5cbiAgICAgKiAgICAgIDxpZ3gtdGFicy1ncm91cCBsYWJlbD1cIlRhYiAxXCI+VGhpcyBpcyBUYWIgMSBjb250ZW50LjwvaWd4LXRhYnMtZ3JvdXA+XG4gICAgICogICAgICA8aWd4LXRhYnMtZ3JvdXAgbGFiZWw9XCJUYWIgMlwiPlRoaXMgaXMgVGFiIDIgY29udGVudC48L2lneC10YWJzLWdyb3VwPlxuICAgICAqIDwvaWd4LXRhYnM+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGl0ZW1EZXNlbGVjdGVkKGUpe1xuICAgICAqICAgICAgY29uc3QgdGFiR3JvdXAgPSBlLmdyb3VwO1xuICAgICAqICAgICAgY29uc3QgdGFiSXRlbSA9IGUudGFiO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uVGFiSXRlbURlc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICAvKipcbiAgICAqIEVtaXR0ZWQgd2hlbiBhIHRhYiBpdGVtIGlzIHNlbGVjdGVkLlxuICAgICogYGBgaHRtbFxuICAgICogPGlneC10YWJzIChvblRhYkl0ZW1TZWxlY3RlZCk9XCJpdGVtU2VsZWN0ZWQoJGV2ZW50KVwiPlxuICAgICogICAgICA8aWd4LXRhYnMtZ3JvdXAgbGFiZWw9XCJUYWIgMVwiPlRoaXMgaXMgVGFiIDEgY29udGVudC48L2lneC10YWJzLWdyb3VwPlxuICAgICogICAgICA8aWd4LXRhYnMtZ3JvdXAgbGFiZWw9XCJUYWIgMlwiPlRoaXMgaXMgVGFiIDIgY29udGVudC48L2lneC10YWJzLWdyb3VwPlxuICAgICogPC9pZ3gtdGFicz5cbiAgICAqIGBgYFxuICAgICogYGBgdHlwZXNjcmlwdFxuICAgICogaXRlbVNlbGVjdGVkKGUpe1xuICAgICogICAgICBjb25zdCB0YWJHcm91cCA9IGUuZ3JvdXA7XG4gICAgKiAgICAgIGNvbnN0IHRhYkl0ZW0gPSBlLnRhYjtcbiAgICAqIH1cbiAgICAqIGBgYFxuICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblRhYkl0ZW1TZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdjb250ZW50c0NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGNvbnRlbnRzQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2hlYWRlckNvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGhlYWRlckNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdpdGVtc0NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGl0ZW1zQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ3NlbGVjdGVkSW5kaWNhdG9yJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIHNlbGVjdGVkSW5kaWNhdG9yOiBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBAVmlld0NoaWxkKCd0YWJzQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgdGFic0NvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCd2aWV3UG9ydCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIHZpZXdQb3J0OiBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogUHJvdmlkZXMgYW4gb2JzZXJ2YWJsZSBjb2xsZWN0aW9uIG9mIGFsbCBgSWd4VGFiSXRlbUNvbXBvbmVudGBzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCB0YWJJdGVtcyA9IHRoaXMubXlUYWJDb21wb25lbnQudmlld1RhYnM7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQFZpZXdDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IElneFRhYkl0ZW1Db21wb25lbnQpKVxuICAgIHB1YmxpYyB2aWV3VGFiczogUXVlcnlMaXN0PElneFRhYkl0ZW1Db21wb25lbnQ+O1xuXG4gICAgLyoqXG4gICAgICogUHJvdmlkZXMgYW4gb2JzZXJ2YWJsZSBjb2xsZWN0aW9uIG9mIGFsbCBgSWd4VGFiSXRlbUNvbXBvbmVudGBzLlxuICAgICAqIEZpcnN0IHRyeSB0byBnZXQgdGhlbSBhcyBjb250ZW50IGNoaWxkcmVuIGlmIG5vdCBhdmFpbGFibGUgZ2V0IHRoZW0gYXMgdmlldyBjaGlsZHJlbi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgdGFiSXRlbXMgPSB0aGlzLm15VGFiQ29tcG9uZW50LnRhYnM7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCB0YWJzKCk6IFF1ZXJ5TGlzdDxJZ3hUYWJJdGVtQ29tcG9uZW50PiB7XG4gICAgICAgIGlmICh0aGlzLmhhc0NvbnRlbnRUYWJzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZW50VGFicztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52aWV3VGFicztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGhhc0NvbnRlbnRUYWJzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKHRoaXMuY29udGVudFRhYnMgJiYgdGhpcy5jb250ZW50VGFicy5sZW5ndGggPiAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGNhbGN1bGF0ZWRXaWR0aDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyB2aXNpYmxlSXRlbXNXaWR0aDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBvZmZzZXQgPSAwO1xuXG4gICAgcHJpdmF0ZSBfZ3JvdXBDaGFuZ2VzJDogU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkSW5kZXggPSAtMTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuY2xhc3MnKVxuICAgIHB1YmxpYyBnZXQgY3NzQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRTdHlsZSA9IGBpZ3gtdGFic2A7XG4gICAgICAgIGNvbnN0IGZpeGVkU3R5bGUgPSBgaWd4LXRhYnMtLWZpeGVkYDtcbiAgICAgICAgY29uc3QgaWNvblN0eWxlID0gYGlneC10YWJzLS1pY29uc2A7XG4gICAgICAgIGNvbnN0IGljb25MYWJlbEZvdW5kSW5Hcm91cHMgPSB0aGlzLmdyb3Vwcy5maW5kKChncm91cCkgPT4gZ3JvdXAuaWNvbiAhPSBudWxsICYmIGdyb3VwLmxhYmVsICE9IG51bGwpO1xuICAgICAgICBjb25zdCBpY29uTGFiZWxGb3VuZEluVGFicyA9IHRoaXMuY29udGVudFRhYnMuZmluZCgodGFiKSA9PiB0YWIuaWNvbiAhPSBudWxsICYmIHRhYi5sYWJlbCAhPSBudWxsKTtcbiAgICAgICAgbGV0IGNzcztcbiAgICAgICAgc3dpdGNoIChUYWJzVHlwZVt0aGlzLnRhYnNUeXBlLnRvVXBwZXJDYXNlKCldKSB7XG4gICAgICAgICAgICBjYXNlIFRhYnNUeXBlLkZJWEVEOiB7XG4gICAgICAgICAgICAgICAgY3NzID0gZml4ZWRTdHlsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBjc3MgPSBkZWZhdWx0U3R5bGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMYXlvdXQgZml4IGZvciBpdGVtcyB3aXRoIGljb25zXG4gICAgICAgIGlmIChpY29uTGFiZWxGb3VuZEluR3JvdXBzICE9PSB1bmRlZmluZWQgfHwgaWNvbkxhYmVsRm91bmRJblRhYnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY3NzID0gYCR7Y3NzfSAke2ljb25TdHlsZX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke2Nzc30gJHt0aGlzLmNsYXNzfWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ29uVGFiSXRlbVNlbGVjdGVkJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgc2VsZWN0ZWRHcm91cEhhbmRsZXIoYXJncykge1xuICAgICAgICBpZiAodGhpcy5oYXNDb250ZW50VGFicykge1xuICAgICAgICAgICAgY29uc3QgdGhlVGFic0FycmF5ID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggIT09IC0xICYmIHRoaXMuc2VsZWN0ZWRJbmRleCAhPT0gYXJncy50YWIuaW5kZXggJiYgdGhlVGFic0FycmF5W3RoaXMuc2VsZWN0ZWRJbmRleF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoZVRhYnNBcnJheVt0aGlzLnNlbGVjdGVkSW5kZXhdLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGFiSXRlbURlc2VsZWN0ZWQuZW1pdCh7IHRhYjogdGhlVGFic0FycmF5W3RoaXMuc2VsZWN0ZWRJbmRleF0sIGdyb3VwczogbnVsbCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGFyZ3MudGFiLmluZGV4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcHJldlNlbGVjdGVkSW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgICAgICBpZiAocHJldlNlbGVjdGVkSW5kZXggIT09IC0xICYmIHRoaXMuZ3JvdXBzICYmIHRoaXMuZ3JvdXBzLnRvQXJyYXkoKVtwcmV2U2VsZWN0ZWRJbmRleF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25UYWJJdGVtRGVzZWxlY3RlZC5lbWl0KFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWI6IHRoaXMuZ3JvdXBzLnRvQXJyYXkoKVtwcmV2U2VsZWN0ZWRJbmRleF0ucmVsYXRlZFRhYixcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwOiB0aGlzLmdyb3Vwcy50b0FycmF5KClbcHJldlNlbGVjdGVkSW5kZXhdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFyZ3MuZ3JvdXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBhcmdzLmdyb3VwLmluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXBzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocC5pbmRleCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2VsZWN0R3JvdXAocCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2Nyb2xsTGVmdChldmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNjcm9sbChmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBzY3JvbGxSaWdodChldmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNjcm9sbCh0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHNjcm9sbEVsZW1lbnQoZWxlbWVudDogYW55LCBzY3JvbGxSaWdodDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBjb25zdCB2aWV3UG9ydFdpZHRoID0gdGhpcy52aWV3UG9ydC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gKHNjcm9sbFJpZ2h0KSA/IGVsZW1lbnQub2Zmc2V0V2lkdGggKyBlbGVtZW50Lm9mZnNldExlZnQgLSB2aWV3UG9ydFdpZHRoIDogZWxlbWVudC5vZmZzZXRMZWZ0O1xuICAgICAgICB0aGlzLml0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgkey10aGlzLm9mZnNldH1weClgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIGBJZ3hUYWJJdGVtQ29tcG9uZW50YC5cbiAgICAgKiBgYGBcbiAgICAgKiBjb25zdCBzZWxlY3RlZEl0ZW0gPSB0aGlzLm15VGFiQ29tcG9uZW50LnNlbGVjdGVkVGFiSXRlbTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRUYWJJdGVtKCk6IElneFRhYkl0ZW1Db21wb25lbnQge1xuICAgICAgICBpZiAodGhpcy50YWJzICYmIHRoaXMuc2VsZWN0ZWRJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YWJzLnRvQXJyYXkoKVt0aGlzLnNlbGVjdGVkSW5kZXhdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudGFicy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHQuaXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gdC5pbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5oYXNDb250ZW50VGFicyAmJiAodGhpcy5zZWxlY3RlZEluZGV4IDwgMCB8fCB0aGlzLnNlbGVjdGVkSW5kZXggPj0gdGhpcy5ncm91cHMubGVuZ3RoKSkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEdyb3VwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2dyb3VwQ2hhbmdlcyQgPSB0aGlzLmdyb3Vwcy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0U2VsZWN0aW9uT25Db2xsZWN0aW9uQ2hhbmdlZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fZ3JvdXBDaGFuZ2VzJCkge1xuICAgICAgICAgICAgdGhpcy5fZ3JvdXBDaGFuZ2VzJC51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRTZWxlY3RlZEdyb3VwKCk6IHZvaWQge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ29udGVudFRhYnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4IDwgMCB8fCB0aGlzLnNlbGVjdGVkSW5kZXggPj0gdGhpcy5jb250ZW50VGFicy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGljYXRvci5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEdyb3VwQnlJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA8IDAgfHwgdGhpcy5zZWxlY3RlZEluZGV4ID49IHRoaXMuZ3JvdXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RHcm91cEJ5SW5kZXgodGhpcy5zZWxlY3RlZEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldFNlbGVjdGlvbk9uQ29sbGVjdGlvbkNoYW5nZWQoKTogdm9pZCB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXBzLnRvQXJyYXkoKVt0aGlzLnNlbGVjdGVkSW5kZXhdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBwZXJzaXN0IHRoZSBzZWxlY3RlZCBpbmRleCBhbmQgYXBwbGllZCBpdCB0byB0aGUgbmV3IGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEdyb3VwQnlJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID49IHRoaXMuZ3JvdXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpbiBjYXNlIHRoZSBzZWxlY3RlZCBpbmRleCBpcyBubyBsb25nZXIgdmFsaWQsIHNlbGVjdCB0aGUgbGFzdCBncm91cCBpbiB0aGUgbmV3IGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RHcm91cEJ5SW5kZXgodGhpcy5ncm91cHMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNlbGVjdEdyb3VwQnlJbmRleChzZWxlY3RlZEluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzQ29udGVudFRhYnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGFUYWIgPSB0aGlzLnRhYnMudG9BcnJheSgpW3NlbGVjdGVkSW5kZXhdO1xuICAgICAgICAgICAgaWYgKGFUYWIpIHtcbiAgICAgICAgICAgICAgICBhVGFiLnNlbGVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0YWJsZUdyb3VwcyA9IHRoaXMuZ3JvdXBzLmZpbHRlcigoc2VsZWN0YWJsZUdyb3VwKSA9PiAhc2VsZWN0YWJsZUdyb3VwLmRpc2FibGVkKTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gc2VsZWN0YWJsZUdyb3Vwc1tzZWxlY3RlZEluZGV4XTtcbiAgICAgICAgICAgIGlmIChncm91cCkge1xuICAgICAgICAgICAgICAgIGdyb3VwLnNlbGVjdCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZGVzZWxlY3RHcm91cChncm91cDogSWd4VGFic0dyb3VwQ29tcG9uZW50KTogdm9pZCB7XG4gICAgICAgIC8vIENhbm5vdCBkZXNlbGVjdCB0aGUgc2VsZWN0ZWQgdGFiIC0gdGhpcyB3aWxsIG1lYW4gdGhhdCB0aGVyZSB3aWxsIGJlIG5vdCBzZWxlY3RlZCB0YWIgbGVmdFxuICAgICAgICBpZiAoZ3JvdXAuZGlzYWJsZWQgfHwgdGhpcy5zZWxlY3RlZFRhYkl0ZW0uaW5kZXggPT09IGdyb3VwLmluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBncm91cC5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGdyb3VwLnJlbGF0ZWRUYWIudGFiaW5kZXggPSAtMTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNjcm9sbChzY3JvbGxSaWdodDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBjb25zdCB0YWJzQXJyYXkgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xuICAgICAgICBmb3IgKGNvbnN0IHRhYiBvZiB0YWJzQXJyYXkpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0YWIubmF0aXZlVGFiSXRlbS5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgaWYgKHNjcm9sbFJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQub2Zmc2V0V2lkdGggKyBlbGVtZW50Lm9mZnNldExlZnQgPiB0aGlzLnZpZXdQb3J0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggKyB0aGlzLm9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEVsZW1lbnQoZWxlbWVudCwgc2Nyb2xsUmlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lm9mZnNldFdpZHRoICsgZWxlbWVudC5vZmZzZXRMZWZ0ID49IHRoaXMub2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsRWxlbWVudChlbGVtZW50LCBzY3JvbGxSaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSWd4VGFic0NvbXBvbmVudCxcbiAgICAgICAgSWd4VGFic0dyb3VwQ29tcG9uZW50LFxuICAgICAgICBJZ3hUYWJJdGVtQ29tcG9uZW50LFxuICAgICAgICBJZ3hUYWJJdGVtVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIElneFJpZ2h0QnV0dG9uU3R5bGVEaXJlY3RpdmUsXG4gICAgICAgIElneExlZnRCdXR0b25TdHlsZURpcmVjdGl2ZV0sXG4gICAgZXhwb3J0czogW0lneFRhYnNDb21wb25lbnQsXG4gICAgICAgIElneFRhYnNHcm91cENvbXBvbmVudCxcbiAgICAgICAgSWd4VGFiSXRlbUNvbXBvbmVudCxcbiAgICAgICAgSWd4VGFiSXRlbVRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBJZ3hSaWdodEJ1dHRvblN0eWxlRGlyZWN0aXZlLFxuICAgICAgICBJZ3hMZWZ0QnV0dG9uU3R5bGVEaXJlY3RpdmVdLFxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIElneEJhZGdlTW9kdWxlLCBJZ3hJY29uTW9kdWxlLCBJZ3hSaXBwbGVNb2R1bGVdXG59KVxuXG5leHBvcnQgY2xhc3MgSWd4VGFic01vZHVsZSB7XG59XG4iXX0=