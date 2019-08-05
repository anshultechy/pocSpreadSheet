import { AfterContentInit, AfterViewChecked, AfterViewInit, ElementRef, EventEmitter, QueryList, TemplateRef } from '@angular/core';
export interface ISelectTabEventArgs {
    tab: IgxTabComponent;
    panel: IgxTabPanelComponent;
}
export declare class IgxTabTemplateDirective {
    template: TemplateRef<any>;
    constructor(template: TemplateRef<any>);
}
/**
 * **Ignite UI for Angular Tab Bar** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/tabbar.html)
 *
 * The Ignite UI Tab Bar enables the user to navigate among a number of content panels displayed in a single view.
 *
 * Example:
 * ```html
 * <igx-bottom-nav>
 *   <igx-tab-panel label="Tab 1">Tab 1 Content</igx-tab-panel>
 *   <igx-tab-panel label="Tab 2">Tab 2 Content</igx-tab-panel>
 *   <igx-tab-panel label="Tab 3">Tab 3 Content</igx-tab-panel>
 * </igx-bottom-nav>
 * ```
 */
export declare class IgxBottomNavComponent implements AfterViewInit {
    private _element;
    /**
     * Gets the `IgxTabComponent` elements in the tab bar component created based on the provided panels.
     * ```typescript
     * let tabs: QueryList<IgxTabComponent> =  this.tabBar.viewTabs;
     * ```
     * @memberof IgxBottomNavComponent
     */
    viewTabs: QueryList<IgxTabComponent>;
    /**
     * Gets the `IgxTabComponent` elements in the tab bar component defined as content child.
     * ```typescript
     * let tabs: QueryList<IgxTabComponent> =  this.tabBar.contentTabs;
     * ```
     * @memberof IgxBottomNavComponent
     */
    contentTabs: QueryList<IgxTabComponent>;
    /**
     * Gets the `IgxTabComponent` elements for this bottom navigation component.
     * First try to get them as content children if not available get them as view children.
     * ```typescript
     * let tabs: QueryList<IgxTabComponent> =  this.tabBar.tabs;
     * ```
     * @memberof IgxBottomNavComponent
     */
    readonly tabs: QueryList<IgxTabComponent>;
    /**
     * Gets the `IgxTabPanelComponent` elements in the tab bar component.
     * ```typescript
     * let tabPanels: QueryList<IgxTabPanelComponent> = this.tabBar.panels;
     * ```
     * @memberof IgxBottomNavComponent
     */
    panels: QueryList<IgxTabPanelComponent>;
    /**
     * Sets/gets the `id` of the tab bar.
     * If not set, the `id` of the first tab bar component will be `"igx-bottom-nav-0"`.
     * ```html
     * <igx-bottom-nav id = "my-first-tab-bar"></igx-bottom-nav>
     * ```
     * ```typescript
     * let tabBarId =  this.tabBar.id;
     * ```
     * @memberof IgxBottomNavComponent
     */
    id: string;
    /**
     * Emits an event when a new tab is selected.
     * Provides references to the `IgxTabComponent` and `IgxTabPanelComponent` as event arguments.
     * ```html
     * <igx-bottom-nav (onTableSelected) = "onTabSelected($event)"><igx-bottom-nav>
     * ```
     * @memberof IgxBottomNavComponent
     */
    onTabSelected: EventEmitter<ISelectTabEventArgs>;
    /**
     * Emits an event when a tab is deselected.
     * Provides references to the `IgxTabComponent` and `IgxTabPanelComponent` as event arguments.
     * ```html
     * <igx-bottom-nav (onTabDeselected) = "onTabDeselected($event)"><igx-bottom-nav>
     * ```
     * @memberof IgxBottomNavComponent
     */
    onTabDeselected: EventEmitter<ISelectTabEventArgs>;
    /**
     * Gets the `index` of selected tab/panel in the respective collection.
     * ```typescript
     * let index =  this.tabBar.selectedIndex;
     * ```
     * @memberof IgxBottomNavComponent
     */
    selectedIndex: number;
    /**
     * Gets the `itemStyle` of the tab bar.
     * ```typescript
     * let itemStyle =  this.tabBar.itemStyle;
     * ```
     * @memberof IgxBottomNavComponent
     */
    readonly itemStyle: string;
    /**
     *@hidden
     */
    readonly hasContentTabs: boolean;
    /**
     *@hidden
     */
    private _itemStyle;
    /**
     * Gets the selected tab in the tab bar.
     * ```typescript
     * let tab =  this.tabBar.selectedTab;
     * ```
     * @memberof IgxBottomNavComponent
     */
    readonly selectedTab: IgxTabComponent;
    constructor(_element: ElementRef);
    /**
     *@hidden
     */
    ngAfterViewInit(): void;
    /**
     *@hidden
     */
    _selectedPanelHandler(args: any): void;
    /**
     *@hidden
     */
    private _deselectPanel;
    private _deselectTab;
}
export declare class IgxTabPanelComponent implements AfterContentInit, AfterViewChecked {
    private _tabBar;
    private _element;
    /**
     *@hidden
     */
    private _itemStyle;
    /**
     *@hidden
     */
    private _isSelected;
    /**
     * Sets/gets the `label` of the tab panel.
     * ```html
     * <igx-tab-panel [label] = "'Tab panel label'"><igx-tab-panel>
     * ```
     * ```typescript
     * let tabPanelLabel = this.tabPanel.label;
     * ```
     * @memberof IgxTabPanelComponent
     */
    label: string;
    /**
     * Sets/gets  the `icon` of the tab panel.
     * ```html
     * <igx-tab-panel [icon] = "panel_icon"><igx-tab-panel>
     * ```
     * ```typescript
     * let tabPanelIcon =  this.tabPanel.icon;
     * ```
     * @memberof IgxTabPanelComponent
     */
    icon: string;
    /**
     * Sets/gets whether the tab panel is disabled.
     * ```html
     * <igx-tab-panel [disabled] = "true"><igx-tab-panel>
     * ```
     * ```typescript
     * let isDisabled = this.tabPanel.disabled;
     * ```
     * @memberof IgxTabPanelComponent
     */
    disabled: boolean;
    /**
     * Gets the role of the tab panel.
     * ```typescript
     * let tabPanelRole = this.tabPanel.role;
     * ```
     * @memberof IgxTabPanelComponent
     */
    role: string;
    /**
     * Gets whether a tab panel will have `igx-bottom-nav__panel` class.
     * ```typescript
     * let styleClass = this.tabPanel.styleClass;
     * ```
     * @memberof IgxTabPanelComponent
     */
    readonly styleClass: boolean;
    /**
     * Sets/gets whether a tab panel is selected.
     * ```typescript
     * this.tabPanel.isSelected = true;
     * ```
     * ```typescript
     * let isSelected =  this.tabPanel.isSelected;
     * ```
     * @memberof IgxTabPanelComponent
     */
    isSelected: boolean;
    /**
     * Gets the `itemStyle` of the tab panel.
     * ```typescript
     * let itemStyle = this.tabPanel.itemStyle;
     * ```
     * @memberof IgxTabPanelComponent
     */
    readonly itemStyle: string;
    /**
     * Gets the tab associated with the panel.
     * ```typescript
     * let tab = this.tabPanel.relatedTab;
     * ```
     * @memberof IgxTabPanelComponent
     */
    readonly relatedTab: IgxTabComponent;
    /**
     * Gets the changes and updates accordingly applied to the tab/panel.
     *
     * @memberof IgxTabComponent
     */
    readonly changesCount: number;
    /**
     * Gets the index of a panel in the panels collection.
     * ```typescript
     * let panelIndex =  this.tabPanel.index
     * ```
     * @memberof IgxTabPanelComponent
     */
    readonly index: number;
    /**
     * Gets the tab template.
     * ```typescript
     * let tabTemplate = this.tabPanel.customTabTemplate
     * ```
     * @memberof IgxTabPanelComponent
     */
    /**
    * Sets the tab template.
    * ```typescript
    * this.tabPanel.customTabTemplate(tabTemplate);
    * ```
    * @memberof IgxTabPanelComponent
    */
    customTabTemplate: TemplateRef<any>;
    /**
     *@hidden
     */
    private _tabTemplate;
    /**
     *@hidden
     */
    protected tabTemplate: IgxTabTemplateDirective;
    constructor(_tabBar: IgxBottomNavComponent, _element: ElementRef);
    /**
     *@hidden
     */
    ngAfterContentInit(): void;
    /**
     *@hidden
     */
    ngAfterViewChecked(): void;
    /**
     * Selects the current tab and the tab panel.
     * ```typescript
     * this.tabPanel.select();
     * ```
     * @memberof IgxTabPanelComponent
     */
    select(): void;
}
export declare class IgxTabComponent {
    private _tabBar;
    private _element;
    /**
     * Gets the `role` attribute.
     * ```typescript
     * let tabRole = this.tab.role;
     * ```
     * @memberof IgxTabComponent
     */
    role: string;
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
     * Gets the panel associated with the tab.
     * ```typescript
     * let tabPanel =  this.tab.relatedPanel;
     * ```
     * @memberof IgxTabComponent
     */
    relatedPanel: IgxTabPanelComponent;
    /**
     *@hidden
     */
    private _label;
    /**
     * Sets/gets the `label` of the tab panel.
     * ```html
     * <igx-tab [label] = "'Tab label'"><igx-tab>
     * ```
     * ```typescript
     * let tabLabel = this.tab.label;
     * ```
     * @memberof IgxTabComponent
     */
    label: string;
    /**
     *@hidden
     */
    private _icon;
    /**
     * Sets/gets  the `icon` of the tab panel.
     * ```html
     * <igx-tab [icon] = "tab_icon"><igx-tab>
     * ```
     * ```typescript
     * let tabIcon =  this.tab.icon;
     * ```
     * @memberof IgxTabComponent
     */
    icon: string;
    /**
     *@hidden
     */
    private _changesCount;
    /**
     * Gets the changes and updates accordingly applied to the tab.
     *
     * @memberof IgxTabComponent
     */
    readonly changesCount: number;
    private _disabled;
    /**
     * Gets whether the tab is disabled.
     * ```typescript
     * let isDisabled = this.tab.disabled;
     * ```
     * @memberof IgxTabComponent
     */
    disabled: boolean;
    _selected: boolean;
    /**
     * Gets whether the tab is selected.
     * ```typescript
     * let isSelected  = this.tab.isSelected;
     * ```
     * @memberof IgxTabComponent
     */
    isSelected: boolean;
    readonly cssClassSelected: boolean;
    readonly cssClassDisabled: boolean;
    readonly cssClass: boolean;
    /**
     * Gets the `index` of the tab.
     * ```typescript
     * let tabIndex = this.tab.index;
     * ```
     * @memberof IgxTabComponent
     */
    readonly index: number;
    /**@hidden*/
    protected defaultTabTemplate: TemplateRef<any>;
    /**@hidden*/
    protected customTabTemplateDir: IgxTabTemplateDirective;
    /**
     * Returns the `template` for this IgxTabComponent.
     * ```typescript
     * let tabItemTemplate = this.tabItem.template;
     * ```
     * @memberof IgxTabComponent
     */
    readonly template: TemplateRef<any>;
    /**
     * Returns the `context` object for the template of this `IgxTabComponent`.
     * ```typescript
     * let tabItemContext = this.tabItem.context;
     * ```
     */
    readonly context: any;
    constructor(_tabBar: IgxBottomNavComponent, _element: ElementRef);
    /**
     * Selects the current tab and the associated panel.
     * ```typescript
     * this.tab.select();
     * ```
     * @memberof IgxTabComponent
     */
    select(): void;
    /**
     * @hidden
     */
    onClick(): void;
    elementRef(): ElementRef;
}
/**
 * @hidden
 */
export declare class IgxBottomNavModule {
}