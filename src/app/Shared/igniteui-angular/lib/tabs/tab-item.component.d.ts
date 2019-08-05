import { ElementRef, TemplateRef } from '@angular/core';
import { IgxTabsGroupComponent } from './tabs-group.component';
import { IgxTabItemBase, IgxTabsBase } from './tabs.common';
import { IgxTabItemTemplateDirective } from './tabs.directives';
export declare class IgxTabItemComponent implements IgxTabItemBase {
    private _tabs;
    private _element;
    /**
    * Gets the group associated with the tab.
    * ```html
    * const relatedGroup = this.tabbar.tabs.toArray()[1].relatedGroup;
    * ```
    */
    relatedGroup: IgxTabsGroupComponent;
    /**@hidden*/
    private _icon;
    /**
    * An @Input property that sets the value of the `icon`.
    * The value should be valid icon name from {@link https://material.io/tools/icons/?style=baseline}.
    *```html
    *<igx-tab-item label="Tab 1" icon="home">
    *```
    */
    icon: string;
    /**@hidden*/
    private _label;
    /**
    * An @Input property that sets the value of the `label`.
    *```html
    *<igx-tabs-item label="Tab 2" icon="folder">
    *```
    */
    label: string;
    /**@hidden*/
    protected defaultTabTemplate: TemplateRef<any>;
    /**@hidden*/
    protected customTabTemplateDir: IgxTabItemTemplateDirective;
    private _nativeTabItem;
    private _changesCount;
    private _isSelected;
    private _disabled;
    constructor(_tabs: IgxTabsBase, _element: ElementRef);
    readonly provideCssClassSelected: boolean;
    readonly provideCssClassDisabled: boolean;
    readonly provideCssClass: boolean;
    /**
     * @hidden @internal
     */
    role: string;
    /**
     * @hidden @internal
     */
    tabindex: any;
    /**
     * @hidden @internal
     */
    id: string;
    /**
     * @hidden @internal
     */
    ariaLabel: string;
    /**
     * @hidden @internal
     */
    ariaDisabled: boolean;
    /**
     * @hidden @internal
     */
    ariaSelected: boolean;
    /**
     * @hidden @internal
     */
    ariaControls: string;
    /**
     * @hidden
     */
    onClick(event: any): void;
    /**
     * @hidden
     */
    onResize(event: any): void;
    /**
     * @hidden
     */
    onKeydownArrowRight(event: KeyboardEvent): void;
    /**
     * @hidden
     */
    onKeydownArrowLeft(event: KeyboardEvent): void;
    /**
     * @hidden
     */
    onKeydownHome(event: KeyboardEvent): void;
    /**
     * @hidden
     */
    onKeydownEnd(event: KeyboardEvent): void;
    /**
     * @hidden
     */
    readonly changesCount: number;
    /**
     * @hidden
     */
    readonly nativeTabItem: ElementRef;
    /**
    * 	Gets whether the tab is disabled.
    * ```
    * const disabledItem = this.myTabComponent.tabs.first.disabled;
    * ```
    */
    disabled: boolean;
    /**
     * Gets whether the tab is selected.
     * ```typescript
     * const selectedItem = this.myTabComponent.tabs.first.isSelected;
     * ```
     */
    isSelected: boolean;
    /**
     * @hidden
     */
    readonly index: number;
    /**
     * @hidden
     */
    select(focusDelay?: number): void;
    private handleTabSelectionAnimation;
    private transformIndicatorAnimation;
    private onKeyDown;
    /**
     * @hidden
     */
    readonly template: TemplateRef<any>;
    /**
     * @hidden
     */
    readonly context: any;
}
