import { ElementRef, QueryList, EventEmitter } from '@angular/core';
/** @hidden */
export declare abstract class IgxTabsBase {
    selectedIndicator: ElementRef<any>;
    tabs: QueryList<IgxTabItemBase>;
    groups: QueryList<IgxTabsGroupBase>;
    offset: number;
    selectedIndex: number;
    viewPort: ElementRef;
    contentsContainer: ElementRef;
    tabsContainer: ElementRef;
    itemsContainer: ElementRef;
    headerContainer: ElementRef;
    onTabItemSelected: EventEmitter<{}>;
    hasContentTabs: boolean;
    scrollElement(element: any, scrollRight: boolean): void;
}
/** @hidden */
export interface IgxTabItemBase {
    nativeTabItem: ElementRef;
    select(focusDelay?: number): any;
}
/** @hidden */
export interface IgxTabsGroupBase {
    select(focusDelay?: number): any;
}