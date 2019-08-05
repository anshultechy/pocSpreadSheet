import { AfterViewInit, ElementRef, EventEmitter, QueryList, OnDestroy } from '@angular/core';
import { IgxTabItemComponent } from './tab-item.component';
import { IgxTabsGroupComponent } from './tabs-group.component';
import { IgxTabsBase } from './tabs.common';
export declare enum TabsType {
    FIXED = "fixed",
    CONTENTFIT = "contentfit"
}
export declare class IgxTabsComponent implements IgxTabsBase, AfterViewInit, OnDestroy {
    private _element;
    /**
    * Provides an observable collection of all `IgxTabsGroupComponent`s.
    * ```typescript
    * const groupItems = this.myTabComponent.groups;
    * ```
    */
    groups: QueryList<IgxTabsGroupComponent>;
    /**
    * Provides an observable collection of all `IgxTabItemComponent`s defined in the page.
    * ```typescript
    * const tabItems = this.myTabComponent.contentTabs;
    * ```
    */
    contentTabs: QueryList<IgxTabItemComponent>;
    /**
    * An @Input property that sets the value of the `selectedIndex`.
    * Default value is 0.
    * ```html
    * <igx-tabs selectedIndex="1">
    * ```
    */
    selectedIndex: number;
    /**
     * Defines the tab header sizing mode. You can choose between `contentfit` or `fixed`.
     * By default the header sizing mode is `contentfit`.
     * ```html
     * <igx-tabs tabsType="fixed">
     *     <igx-tabs-group label="HOME">Home</igx-tabs-group>
     * </igx-tabs>
     * ```
     */
    tabsType: string | TabsType;
    /**
    * @hidden
    */
    class: string;
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
    onTabItemDeselected: EventEmitter<{}>;
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
    onTabItemSelected: EventEmitter<{}>;
    /**
     * @hidden
     */
    contentsContainer: ElementRef;
    /**
     * @hidden
     */
    headerContainer: ElementRef;
    /**
     * @hidden
     */
    itemsContainer: ElementRef;
    /**
     * @hidden
     */
    selectedIndicator: ElementRef;
    /**
    * @hidden
    */
    tabsContainer: ElementRef;
    /**
     * @hidden
     */
    viewPort: ElementRef;
    /**
     * Provides an observable collection of all `IgxTabItemComponent`s.
     * ```typescript
     * const tabItems = this.myTabComponent.viewTabs;
     * ```
     */
    viewTabs: QueryList<IgxTabItemComponent>;
    /**
     * Provides an observable collection of all `IgxTabItemComponent`s.
     * First try to get them as content children if not available get them as view children.
     * ```typescript
     * const tabItems = this.myTabComponent.tabs;
     * ```
     */
    readonly tabs: QueryList<IgxTabItemComponent>;
    /**
     *@hidden
     */
    readonly hasContentTabs: boolean;
    /**
     * @hidden
     */
    calculatedWidth: number;
    /**
     * @hidden
     */
    visibleItemsWidth: number;
    /**
     * @hidden
     */
    offset: number;
    private _groupChanges$;
    private _selectedIndex;
    /**
     * @hidden
     */
    readonly cssClass: string;
    /**
     * @hidden
     */
    selectedGroupHandler(args: any): void;
    /**
     * @hidden
     */
    scrollLeft(event: any): void;
    /**
     * @hidden
     */
    scrollRight(event: any): void;
    /**
     * @hidden
     */
    scrollElement(element: any, scrollRight: boolean): void;
    /**
     * Gets the selected `IgxTabItemComponent`.
     * ```
     * const selectedItem = this.myTabComponent.selectedTabItem;
     * ```
     */
    readonly selectedTabItem: IgxTabItemComponent;
    constructor(_element: ElementRef);
    /**
     * @hidden
     */
    ngAfterViewInit(): void;
    /**
     * @hidden
     */
    ngOnDestroy(): void;
    private setSelectedGroup;
    private resetSelectionOnCollectionChanged;
    private selectGroupByIndex;
    private deselectGroup;
    private scroll;
}
/**
 * @hidden
 */
export declare class IgxTabsModule {
}
