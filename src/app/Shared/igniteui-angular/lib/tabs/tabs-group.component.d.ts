import { AfterContentInit, AfterViewChecked, ElementRef, TemplateRef } from '@angular/core';
import { IgxTabItemComponent } from './tab-item.component';
import { IgxTabItemTemplateDirective } from './tabs.directives';
import { IgxTabsBase, IgxTabsGroupBase } from './tabs.common';
export declare class IgxTabsGroupComponent implements IgxTabsGroupBase, AfterContentInit, AfterViewChecked {
    private _tabs;
    private _element;
    /**
     * @hidden
     */
    private _isSelected;
    /**
    * An @Input property that allows you to enable/disable the `IgxTabGroupComponent`.
    *```html
    *<igx-tabs-group label="Tab 2  Lorem ipsum dolor sit" icon="home" [disabled]="true">
    *```
    */
    disabled: boolean;
    /**
    * An @Input property that sets the value of the `icon`.
    * The value should be valid icon name from {@link https://material.io/tools/icons/?style=baseline}.
    *```html
    *<igx-tabs-group label="Tab 1" icon="home">
    *```
    */
    icon: string;
    /**
    * An @Input property that sets the value of the `label`.
    *```html
    *<igx-tabs-group label="Tab 1" icon="folder">
    *```
    */
    label: string;
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
    isSelected: boolean;
    /**
     * @hidden
     */
    protected tabTemplate: IgxTabItemTemplateDirective;
    private _tabTemplate;
    constructor(_tabs: IgxTabsBase, _element: ElementRef);
    /**
     * @hidden
     */
    role: string;
    /**
     * @hidden
     */
    styleClass: boolean;
    onResize(event: any): void;
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
    readonly relatedTab: IgxTabItemComponent;
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
    readonly index: number;
    /**
     * @hidden
     */
    /**
    *@hidden
    */
    customTabTemplate: TemplateRef<any>;
    /**
     * @hidden
     */
    ngAfterContentInit(): void;
    /**
     * @hidden
     */
    ngAfterViewChecked(): void;
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
    select(focusDelay?: number): void;
    private handleSelection;
    private transformContentAnimation;
    private transformIndicatorAnimation;
}
