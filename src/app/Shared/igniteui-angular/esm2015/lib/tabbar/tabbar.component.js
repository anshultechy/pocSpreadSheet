/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { Component, ContentChild, ContentChildren, Directive, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, NgModule, Output, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { IgxBadgeModule } from '../badge/badge.component';
import { IgxIconModule } from '../icon/index';
/**
 * @record
 */
export function ISelectTabEventArgs() { }
if (false) {
    /** @type {?} */
    ISelectTabEventArgs.prototype.tab;
    /** @type {?} */
    ISelectTabEventArgs.prototype.panel;
}
/** @type {?} */
let NEXT_ID = 0;
export class IgxTabTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
IgxTabTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxTab]'
            },] }
];
/** @nocollapse */
IgxTabTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    IgxTabTemplateDirective.prototype.template;
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
export class IgxBottomNavComponent {
    /**
     * @param {?} _element
     */
    constructor(_element) {
        this._element = _element;
        /**
         * Sets/gets the `id` of the tab bar.
         * If not set, the `id` of the first tab bar component will be `"igx-bottom-nav-0"`.
         * ```html
         * <igx-bottom-nav id = "my-first-tab-bar"></igx-bottom-nav>
         * ```
         * ```typescript
         * let tabBarId =  this.tabBar.id;
         * ```
         * \@memberof IgxBottomNavComponent
         */
        this.id = `igx-bottom-nav-${NEXT_ID++}`;
        /**
         * Emits an event when a new tab is selected.
         * Provides references to the `IgxTabComponent` and `IgxTabPanelComponent` as event arguments.
         * ```html
         * <igx-bottom-nav (onTableSelected) = "onTabSelected($event)"><igx-bottom-nav>
         * ```
         * \@memberof IgxBottomNavComponent
         */
        this.onTabSelected = new EventEmitter();
        /**
         * Emits an event when a tab is deselected.
         * Provides references to the `IgxTabComponent` and `IgxTabPanelComponent` as event arguments.
         * ```html
         * <igx-bottom-nav (onTabDeselected) = "onTabDeselected($event)"><igx-bottom-nav>
         * ```
         * \@memberof IgxBottomNavComponent
         */
        this.onTabDeselected = new EventEmitter();
        /**
         * Gets the `index` of selected tab/panel in the respective collection.
         * ```typescript
         * let index =  this.tabBar.selectedIndex;
         * ```
         * \@memberof IgxBottomNavComponent
         */
        this.selectedIndex = -1;
        /**
         * @hidden
         */
        this._itemStyle = 'igx-bottom-nav';
    }
    /**
     * Gets the `IgxTabComponent` elements for this bottom navigation component.
     * First try to get them as content children if not available get them as view children.
     * ```typescript
     * let tabs: QueryList<IgxTabComponent> =  this.tabBar.tabs;
     * ```
     * \@memberof IgxBottomNavComponent
     * @return {?}
     */
    get tabs() {
        return this.hasContentTabs ? this.contentTabs : this.viewTabs;
    }
    /**
     * Gets the `itemStyle` of the tab bar.
     * ```typescript
     * let itemStyle =  this.tabBar.itemStyle;
     * ```
     * \@memberof IgxBottomNavComponent
     * @return {?}
     */
    get itemStyle() {
        return this._itemStyle;
    }
    /**
     * @hidden
     * @return {?}
     */
    get hasContentTabs() {
        return (this.contentTabs && this.contentTabs.length > 0);
    }
    /**
     * Gets the selected tab in the tab bar.
     * ```typescript
     * let tab =  this.tabBar.selectedTab;
     * ```
     * \@memberof IgxBottomNavComponent
     * @return {?}
     */
    get selectedTab() {
        if (this.tabs && this.selectedIndex !== undefined) {
            return this.tabs.toArray()[this.selectedIndex];
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterViewInit() {
        // initial selection
        setTimeout(() => {
            if (this.selectedIndex === -1) {
                /** @type {?} */
                const selectablePanels = this.panels.filter((p) => !p.disabled);
                /** @type {?} */
                const panel = selectablePanels[0];
                if (panel) {
                    panel.select();
                }
            }
        }, 0);
    }
    /**
     * @hidden
     * @param {?} args
     * @return {?}
     */
    _selectedPanelHandler(args) {
        if (this.hasContentTabs) {
            this.selectedIndex = args.tab.index;
            this.contentTabs.forEach((t) => {
                if (t !== args.tab) {
                    this._deselectTab(t);
                }
            });
        }
        else {
            if (args.panel) {
                this.selectedIndex = args.panel.index;
                this.panels.forEach((p) => {
                    if (p.index !== this.selectedIndex) {
                        this._deselectPanel(p);
                    }
                });
            }
        }
    }
    /**
     * @hidden
     * @private
     * @param {?} panel
     * @return {?}
     */
    _deselectPanel(panel) {
        // Cannot deselect the selected tab - this will mean that there will be not selected tab left
        if (panel.disabled || this.selectedTab.index === panel.index) {
            return;
        }
        panel.isSelected = false;
        this.onTabDeselected.emit({ tab: this.tabs[panel.index], panel });
    }
    /**
     * @private
     * @param {?} aTab
     * @return {?}
     */
    _deselectTab(aTab) {
        aTab.isSelected = false;
        this.onTabDeselected.emit({ tab: aTab, panel: null });
    }
}
IgxBottomNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-bottom-nav',
                template: "<div *ngIf=\"!hasContentTabs\">\n    <ng-content></ng-content>\n</div>\n<div #tablist class=\"{{itemStyle}}__menu {{itemStyle}}__menu--bottom\" role=\"tablist\" aria-orientation=\"horizontal\">\n    <ng-container *ngIf=\"!hasContentTabs\">    \n        <igx-tab *ngFor=\"let panel of panels\" [relatedPanel]=\"panel\">\n        </igx-tab>\n    </ng-container>\n    <ng-content select=\"igx-tab\"></ng-content>\n</div>",
                styles: [`
        :host {
            display: block;
        }
    `]
            }] }
];
/** @nocollapse */
IgxBottomNavComponent.ctorParameters = () => [
    { type: ElementRef }
];
IgxBottomNavComponent.propDecorators = {
    viewTabs: [{ type: ViewChildren, args: [forwardRef(() => IgxTabComponent),] }],
    contentTabs: [{ type: ContentChildren, args: [forwardRef(() => IgxTabComponent),] }],
    panels: [{ type: ContentChildren, args: [forwardRef(() => IgxTabPanelComponent),] }],
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    onTabSelected: [{ type: Output }],
    onTabDeselected: [{ type: Output }],
    _selectedPanelHandler: [{ type: HostListener, args: ['onTabSelected', ['$event'],] }]
};
if (false) {
    /**
     * Gets the `IgxTabComponent` elements in the tab bar component created based on the provided panels.
     * ```typescript
     * let tabs: QueryList<IgxTabComponent> =  this.tabBar.viewTabs;
     * ```
     * \@memberof IgxBottomNavComponent
     * @type {?}
     */
    IgxBottomNavComponent.prototype.viewTabs;
    /**
     * Gets the `IgxTabComponent` elements in the tab bar component defined as content child.
     * ```typescript
     * let tabs: QueryList<IgxTabComponent> =  this.tabBar.contentTabs;
     * ```
     * \@memberof IgxBottomNavComponent
     * @type {?}
     */
    IgxBottomNavComponent.prototype.contentTabs;
    /**
     * Gets the `IgxTabPanelComponent` elements in the tab bar component.
     * ```typescript
     * let tabPanels: QueryList<IgxTabPanelComponent> = this.tabBar.panels;
     * ```
     * \@memberof IgxBottomNavComponent
     * @type {?}
     */
    IgxBottomNavComponent.prototype.panels;
    /**
     * Sets/gets the `id` of the tab bar.
     * If not set, the `id` of the first tab bar component will be `"igx-bottom-nav-0"`.
     * ```html
     * <igx-bottom-nav id = "my-first-tab-bar"></igx-bottom-nav>
     * ```
     * ```typescript
     * let tabBarId =  this.tabBar.id;
     * ```
     * \@memberof IgxBottomNavComponent
     * @type {?}
     */
    IgxBottomNavComponent.prototype.id;
    /**
     * Emits an event when a new tab is selected.
     * Provides references to the `IgxTabComponent` and `IgxTabPanelComponent` as event arguments.
     * ```html
     * <igx-bottom-nav (onTableSelected) = "onTabSelected($event)"><igx-bottom-nav>
     * ```
     * \@memberof IgxBottomNavComponent
     * @type {?}
     */
    IgxBottomNavComponent.prototype.onTabSelected;
    /**
     * Emits an event when a tab is deselected.
     * Provides references to the `IgxTabComponent` and `IgxTabPanelComponent` as event arguments.
     * ```html
     * <igx-bottom-nav (onTabDeselected) = "onTabDeselected($event)"><igx-bottom-nav>
     * ```
     * \@memberof IgxBottomNavComponent
     * @type {?}
     */
    IgxBottomNavComponent.prototype.onTabDeselected;
    /**
     * Gets the `index` of selected tab/panel in the respective collection.
     * ```typescript
     * let index =  this.tabBar.selectedIndex;
     * ```
     * \@memberof IgxBottomNavComponent
     * @type {?}
     */
    IgxBottomNavComponent.prototype.selectedIndex;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxBottomNavComponent.prototype._itemStyle;
    /**
     * @type {?}
     * @private
     */
    IgxBottomNavComponent.prototype._element;
}
// ================================= IgxTabPanelComponent ======================================
export class IgxTabPanelComponent {
    /**
     * @param {?} _tabBar
     * @param {?} _element
     */
    constructor(_tabBar, _element) {
        this._tabBar = _tabBar;
        this._element = _element;
        /**
         * @hidden
         */
        this._itemStyle = 'igx-tab-panel';
        /**
         * @hidden
         */
        this._isSelected = false;
        /**
         * Gets the role of the tab panel.
         * ```typescript
         * let tabPanelRole = this.tabPanel.role;
         * ```
         * \@memberof IgxTabPanelComponent
         */
        this.role = 'tabpanel';
    }
    /**
     * Gets whether a tab panel will have `igx-bottom-nav__panel` class.
     * ```typescript
     * let styleClass = this.tabPanel.styleClass;
     * ```
     * \@memberof IgxTabPanelComponent
     * @return {?}
     */
    get styleClass() {
        return (!this.isSelected);
    }
    /**
     * Sets/gets whether a tab panel is selected.
     * ```typescript
     * this.tabPanel.isSelected = true;
     * ```
     * ```typescript
     * let isSelected =  this.tabPanel.isSelected;
     * ```
     * \@memberof IgxTabPanelComponent
     * @return {?}
     */
    get isSelected() {
        return this._isSelected;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set isSelected(newValue) {
        if (this._isSelected !== newValue) {
            if (newValue) {
                this.select();
            }
            else {
                this._isSelected = newValue;
            }
        }
    }
    /**
     * Gets the `itemStyle` of the tab panel.
     * ```typescript
     * let itemStyle = this.tabPanel.itemStyle;
     * ```
     * \@memberof IgxTabPanelComponent
     * @return {?}
     */
    get itemStyle() {
        return this._itemStyle;
    }
    /**
     * Gets the tab associated with the panel.
     * ```typescript
     * let tab = this.tabPanel.relatedTab;
     * ```
     * \@memberof IgxTabPanelComponent
     * @return {?}
     */
    get relatedTab() {
        if (this._tabBar.tabs) {
            return this._tabBar.tabs.toArray()[this.index];
        }
    }
    /**
     * Gets the changes and updates accordingly applied to the tab/panel.
     *
     * \@memberof IgxTabComponent
     * @return {?}
     */
    get changesCount() {
        return this.relatedTab ? this.relatedTab.changesCount : 0;
    }
    /**
     * Gets the index of a panel in the panels collection.
     * ```typescript
     * let panelIndex =  this.tabPanel.index
     * ```
     * \@memberof IgxTabPanelComponent
     * @return {?}
     */
    get index() {
        if (this._tabBar.panels) {
            return this._tabBar.panels.toArray().indexOf(this);
        }
    }
    /**
     * Gets the tab template.
     * ```typescript
     * let tabTemplate = this.tabPanel.customTabTemplate
     * ```
     * \@memberof IgxTabPanelComponent
     * @return {?}
     */
    get customTabTemplate() {
        return this._tabTemplate;
    }
    /**
     * Sets the tab template.
     * ```typescript
     * this.tabPanel.customTabTemplate(tabTemplate);
     * ```
     * \@memberof IgxTabPanelComponent
     * @param {?} template
     * @return {?}
     */
    set customTabTemplate(template) {
        this._tabTemplate = template;
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.tabTemplate) {
            this._tabTemplate = this.tabTemplate.template;
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterViewChecked() {
        this._element.nativeElement.setAttribute('aria-labelledby', `igx-tab-${this.index}`);
        this._element.nativeElement.setAttribute('id', `igx-bottom-nav__panel-${this.index}`);
    }
    /**
     * Selects the current tab and the tab panel.
     * ```typescript
     * this.tabPanel.select();
     * ```
     * \@memberof IgxTabPanelComponent
     * @return {?}
     */
    select() {
        if (this.disabled || this._tabBar.selectedIndex === this.index) {
            return;
        }
        this._isSelected = true;
        this._tabBar.onTabSelected.emit({ tab: this._tabBar.tabs.toArray()[this.index], panel: this });
    }
}
IgxTabPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-tab-panel',
                template: "<ng-content></ng-content>\n"
            }] }
];
/** @nocollapse */
IgxTabPanelComponent.ctorParameters = () => [
    { type: IgxBottomNavComponent },
    { type: ElementRef }
];
IgxTabPanelComponent.propDecorators = {
    label: [{ type: Input }],
    icon: [{ type: Input }],
    disabled: [{ type: Input }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    styleClass: [{ type: HostBinding, args: ['class.igx-bottom-nav__panel',] }],
    isSelected: [{ type: HostBinding, args: ['class.igx-bottom-nav__panel--selected',] }],
    tabTemplate: [{ type: ContentChild, args: [IgxTabTemplateDirective, { read: IgxTabTemplateDirective, static: true },] }]
};
if (false) {
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxTabPanelComponent.prototype._itemStyle;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxTabPanelComponent.prototype._isSelected;
    /**
     * Sets/gets the `label` of the tab panel.
     * ```html
     * <igx-tab-panel [label] = "'Tab panel label'"><igx-tab-panel>
     * ```
     * ```typescript
     * let tabPanelLabel = this.tabPanel.label;
     * ```
     * \@memberof IgxTabPanelComponent
     * @type {?}
     */
    IgxTabPanelComponent.prototype.label;
    /**
     * Sets/gets  the `icon` of the tab panel.
     * ```html
     * <igx-tab-panel [icon] = "panel_icon"><igx-tab-panel>
     * ```
     * ```typescript
     * let tabPanelIcon =  this.tabPanel.icon;
     * ```
     * \@memberof IgxTabPanelComponent
     * @type {?}
     */
    IgxTabPanelComponent.prototype.icon;
    /**
     * Sets/gets whether the tab panel is disabled.
     * ```html
     * <igx-tab-panel [disabled] = "true"><igx-tab-panel>
     * ```
     * ```typescript
     * let isDisabled = this.tabPanel.disabled;
     * ```
     * \@memberof IgxTabPanelComponent
     * @type {?}
     */
    IgxTabPanelComponent.prototype.disabled;
    /**
     * Gets the role of the tab panel.
     * ```typescript
     * let tabPanelRole = this.tabPanel.role;
     * ```
     * \@memberof IgxTabPanelComponent
     * @type {?}
     */
    IgxTabPanelComponent.prototype.role;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxTabPanelComponent.prototype._tabTemplate;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxTabPanelComponent.prototype.tabTemplate;
    /**
     * @type {?}
     * @private
     */
    IgxTabPanelComponent.prototype._tabBar;
    /**
     * @type {?}
     * @private
     */
    IgxTabPanelComponent.prototype._element;
}
// ======================================= IgxTabComponent ==========================================
export class IgxTabComponent {
    /**
     * @param {?} _tabBar
     * @param {?} _element
     */
    constructor(_tabBar, _element) {
        this._tabBar = _tabBar;
        this._element = _element;
        /**
         * Gets the `role` attribute.
         * ```typescript
         * let tabRole = this.tab.role;
         * ```
         * \@memberof IgxTabComponent
         */
        this.role = 'tab';
        /**
         * @hidden \@internal
         */
        this.id = 'igx-tab-' + this.index;
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
        this.ariaControls = 'igx-tab-panel-' + this.index;
        /**
         * @hidden
         */
        this._changesCount = 0; // changes and updates accordingly applied to the tab.
        this._disabled = false;
        this._selected = false;
    }
    /**
     * Sets/gets the `label` of the tab panel.
     * ```html
     * <igx-tab [label] = "'Tab label'"><igx-tab>
     * ```
     * ```typescript
     * let tabLabel = this.tab.label;
     * ```
     * \@memberof IgxTabComponent
     * @return {?}
     */
    get label() {
        return this.relatedPanel ? this.relatedPanel.label : this._label;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set label(newValue) {
        if (this.relatedPanel) {
            this.relatedPanel.label = newValue;
        }
        this._label = newValue;
    }
    /**
     * Sets/gets  the `icon` of the tab panel.
     * ```html
     * <igx-tab [icon] = "tab_icon"><igx-tab>
     * ```
     * ```typescript
     * let tabIcon =  this.tab.icon;
     * ```
     * \@memberof IgxTabComponent
     * @return {?}
     */
    get icon() {
        return this.relatedPanel ? this.relatedPanel.icon : this._icon;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set icon(newValue) {
        if (this.relatedPanel) {
            this.relatedPanel.icon = newValue;
        }
        this._icon = newValue;
    }
    // changes and updates accordingly applied to the tab.
    /**
     * Gets the changes and updates accordingly applied to the tab.
     *
     * \@memberof IgxTabComponent
     * @return {?}
     */
    get changesCount() {
        return this._changesCount;
    }
    /**
     * Gets whether the tab is disabled.
     * ```typescript
     * let isDisabled = this.tab.disabled;
     * ```
     * \@memberof IgxTabComponent
     * @return {?}
     */
    get disabled() {
        return this.relatedPanel ? this.relatedPanel.disabled : this._disabled;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set disabled(newValue) {
        if (this.relatedPanel) {
            this.relatedPanel.disabled = newValue;
        }
        else {
            this._disabled = newValue;
        }
    }
    /**
     * Gets whether the tab is selected.
     * ```typescript
     * let isSelected  = this.tab.isSelected;
     * ```
     * \@memberof IgxTabComponent
     * @param {?} newValue
     * @return {?}
     */
    set isSelected(newValue) {
        if (this.relatedPanel) {
            this.relatedPanel.isSelected = newValue;
        }
        else if (this._selected !== newValue) {
            this._selected = newValue;
            if (this._selected) {
                this._tabBar.onTabSelected.emit({ tab: this, panel: null });
            }
        }
    }
    /**
     * @return {?}
     */
    get isSelected() {
        return this.relatedPanel ? this.relatedPanel.isSelected : this._selected;
    }
    /**
     * @return {?}
     */
    get cssClassSelected() {
        return this.isSelected;
    }
    /**
     * @return {?}
     */
    get cssClassDisabled() {
        return this.disabled;
    }
    /**
     * @return {?}
     */
    get cssClass() {
        return (!this.disabled && !this.isSelected);
    }
    /**
     * Gets the `index` of the tab.
     * ```typescript
     * let tabIndex = this.tab.index;
     * ```
     * \@memberof IgxTabComponent
     * @return {?}
     */
    get index() {
        if (this._tabBar.tabs) {
            return this._tabBar.tabs.toArray().indexOf(this);
        }
    }
    /**
     * Returns the `template` for this IgxTabComponent.
     * ```typescript
     * let tabItemTemplate = this.tabItem.template;
     * ```
     * \@memberof IgxTabComponent
     * @return {?}
     */
    get template() {
        if (this.relatedPanel && this.relatedPanel.customTabTemplate) {
            return this.relatedPanel.customTabTemplate;
        }
        if (this.customTabTemplateDir) {
            return this.customTabTemplateDir.template;
        }
        return this.defaultTabTemplate;
    }
    /**
     * Returns the `context` object for the template of this `IgxTabComponent`.
     * ```typescript
     * let tabItemContext = this.tabItem.context;
     * ```
     * @return {?}
     */
    get context() {
        return this.relatedPanel ? this.relatedPanel : this;
    }
    /**
     * Selects the current tab and the associated panel.
     * ```typescript
     * this.tab.select();
     * ```
     * \@memberof IgxTabComponent
     * @return {?}
     */
    select() {
        if (this.relatedPanel) {
            this.relatedPanel.select();
        }
        else {
            this._selected = true;
            this._tabBar.onTabSelected.emit({ tab: this, panel: null });
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    onClick() {
        this.select();
    }
    /**
     * @return {?}
     */
    elementRef() {
        return this._element;
    }
}
IgxTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-tab',
                template: "<ng-template #defaultTabTemplate let-context>\n    <div *ngIf=\"context.icon\" class=\"tab-icon\">\n        <igx-icon fontSet=\"material\">{{context.icon}}</igx-icon>\n        <igx-badge [value]=\"context.changesCount\" [hidden]=\"context.changesCount === 0\"></igx-badge>\n    </div>\n    <div *ngIf=\"context.label\" ngClass=\"tab-label\">{{context.label}}</div>\n</ng-template>\n<ng-container *ngTemplateOutlet=\"template; context: { $implicit: this.context }\">\n</ng-container>"
            }] }
];
/** @nocollapse */
IgxTabComponent.ctorParameters = () => [
    { type: IgxBottomNavComponent },
    { type: ElementRef }
];
IgxTabComponent.propDecorators = {
    role: [{ type: HostBinding, args: ['attr.role',] }],
    id: [{ type: HostBinding, args: ['attr.id',] }],
    ariaLabel: [{ type: HostBinding, args: ['attr.aria-label',] }],
    ariaDisabled: [{ type: HostBinding, args: ['attr.aria-disabled',] }],
    ariaSelected: [{ type: HostBinding, args: ['attr.aria-selected',] }],
    ariaControls: [{ type: HostBinding, args: ['attr.aria-controls',] }],
    relatedPanel: [{ type: Input }],
    label: [{ type: Input }],
    icon: [{ type: Input }],
    disabled: [{ type: Input }],
    isSelected: [{ type: Input }],
    cssClassSelected: [{ type: HostBinding, args: ['class.igx-bottom-nav__menu-item--selected',] }],
    cssClassDisabled: [{ type: HostBinding, args: ['class.igx-bottom-nav__menu-item--disabled',] }],
    cssClass: [{ type: HostBinding, args: ['class.igx-bottom-nav__menu-item',] }],
    defaultTabTemplate: [{ type: ViewChild, args: ['defaultTabTemplate', { read: TemplateRef, static: true },] }],
    customTabTemplateDir: [{ type: ContentChild, args: [IgxTabTemplateDirective, { read: IgxTabTemplateDirective, static: true },] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /**
     * Gets the `role` attribute.
     * ```typescript
     * let tabRole = this.tab.role;
     * ```
     * \@memberof IgxTabComponent
     * @type {?}
     */
    IgxTabComponent.prototype.role;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxTabComponent.prototype.id;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxTabComponent.prototype.ariaLabel;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxTabComponent.prototype.ariaDisabled;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxTabComponent.prototype.ariaSelected;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxTabComponent.prototype.ariaControls;
    /**
     * Gets the panel associated with the tab.
     * ```typescript
     * let tabPanel =  this.tab.relatedPanel;
     * ```
     * \@memberof IgxTabComponent
     * @type {?}
     */
    IgxTabComponent.prototype.relatedPanel;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxTabComponent.prototype._label;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxTabComponent.prototype._icon;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxTabComponent.prototype._changesCount;
    /**
     * @type {?}
     * @private
     */
    IgxTabComponent.prototype._disabled;
    /** @type {?} */
    IgxTabComponent.prototype._selected;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxTabComponent.prototype.defaultTabTemplate;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxTabComponent.prototype.customTabTemplateDir;
    /**
     * @type {?}
     * @private
     */
    IgxTabComponent.prototype._tabBar;
    /**
     * @type {?}
     * @private
     */
    IgxTabComponent.prototype._element;
}
/**
 * @hidden
 */
export class IgxBottomNavModule {
}
IgxBottomNavModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxBottomNavComponent, IgxTabPanelComponent, IgxTabComponent, IgxTabTemplateDirective],
                exports: [IgxBottomNavComponent, IgxTabPanelComponent, IgxTabComponent, IgxTabTemplateDirective],
                imports: [CommonModule, IgxBadgeModule, IgxIconModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvdGFiYmFyL3RhYmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBSUgsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxFQUNmLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRTlDLHlDQUdDOzs7SUFGRyxrQ0FBcUI7O0lBQ3JCLG9DQUE0Qjs7O0lBRzVCLE9BQU8sR0FBRyxDQUFDO0FBS2YsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUVoQyxZQUFtQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtJQUM3QyxDQUFDOzs7WUFOSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLFVBQVU7YUFDdkI7Ozs7WUFoQkcsV0FBVzs7OztJQW1CQywyQ0FBaUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJqRCxNQUFNLE9BQU8scUJBQXFCOzs7O0lBNEg5QixZQUFvQixRQUFvQjtRQUFwQixhQUFRLEdBQVIsUUFBUSxDQUFZOzs7Ozs7Ozs7Ozs7UUFuRWpDLE9BQUUsR0FBRyxrQkFBa0IsT0FBTyxFQUFFLEVBQUUsQ0FBQzs7Ozs7Ozs7O1FBVXpCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7Ozs7Ozs7OztRQVV4RCxvQkFBZSxH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QkFVaEMsS0FBSztvQkFrQkwsS0FBSzttQkEwQkwsS0FBSzt1QkFrQ0wsS0FBSzt5QkFxQkwsS0FBSzsrQkFlTCxXQUFXLFNBQUMsMkNBQTJDOytCQUt2RCxXQUFXLFNBQUMsMkNBQTJDO3VCQUt2RCxXQUFXLFNBQUMsaUNBQWlDO2lDQW1CN0MsU0FBUyxTQUFDLG9CQUFvQixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO21DQUluRSxZQUFZLFNBQUMsdUJBQXVCLEVBQUUsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtzQkFvRHJGLFlBQVksU0FBQyxPQUFPOzs7Ozs7Ozs7OztJQS9PckIsK0JBQ29COzs7OztJQUtwQiw2QkFDb0M7Ozs7O0lBS3BDLG9DQUM4Qjs7Ozs7SUFLOUIsdUNBQ29DOzs7OztJQUtwQyx1Q0FDc0M7Ozs7O0lBS3RDLHVDQUNvRDs7Ozs7Ozs7O0lBU3BELHVDQUMwQzs7Ozs7O0lBSzFDLGlDQUF1Qjs7Ozs7O0lBMEJ2QixnQ0FBc0I7Ozs7OztJQTBCdEIsd0NBQTBCOzs7OztJQVcxQixvQ0FBMEI7O0lBcUIxQixvQ0FBeUI7Ozs7OztJQXFEekIsNkNBQytDOzs7Ozs7SUFHL0MsK0NBQ3dEOzs7OztJQTZCNUMsa0NBQXNDOzs7OztJQUFFLG1DQUE0Qjs7Ozs7QUF3Q3BGLE1BQU0sT0FBTyxrQkFBa0I7OztZQUw5QixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLHVCQUF1QixDQUFDO2dCQUNyRyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsdUJBQXVCLENBQUM7Z0JBQ2hHLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsYUFBYSxDQUFDO2FBQ3pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBBZnRlclZpZXdDaGVja2VkLFxuICAgIEFmdGVyVmlld0luaXQsXG4gICAgQ29tcG9uZW50LFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgRGlyZWN0aXZlLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIGZvcndhcmRSZWYsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIElucHV0LFxuICAgIE5nTW9kdWxlLFxuICAgIE91dHB1dCxcbiAgICBRdWVyeUxpc3QsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgVmlld0NoaWxkLFxuICAgIFZpZXdDaGlsZHJlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneEJhZGdlTW9kdWxlIH0gZnJvbSAnLi4vYmFkZ2UvYmFkZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IElneEljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2luZGV4JztcblxuZXhwb3J0IGludGVyZmFjZSBJU2VsZWN0VGFiRXZlbnRBcmdzIHtcbiAgICB0YWI6IElneFRhYkNvbXBvbmVudDtcbiAgICBwYW5lbDogSWd4VGFiUGFuZWxDb21wb25lbnQ7XG59XG5cbmxldCBORVhUX0lEID0gMDtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4VGFiXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4VGFiVGVtcGxhdGVEaXJlY3RpdmUge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgfVxufVxuLyoqXG4gKiAqKklnbml0ZSBVSSBmb3IgQW5ndWxhciBUYWIgQmFyKiogLVxuICogW0RvY3VtZW50YXRpb25dKGh0dHBzOi8vd3d3LmluZnJhZ2lzdGljcy5jb20vcHJvZHVjdHMvaWduaXRlLXVpLWFuZ3VsYXIvYW5ndWxhci9jb21wb25lbnRzL3RhYmJhci5odG1sKVxuICpcbiAqIFRoZSBJZ25pdGUgVUkgVGFiIEJhciBlbmFibGVzIHRoZSB1c2VyIHRvIG5hdmlnYXRlIGFtb25nIGEgbnVtYmVyIG9mIGNvbnRlbnQgcGFuZWxzIGRpc3BsYXllZCBpbiBhIHNpbmdsZSB2aWV3LlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8aWd4LWJvdHRvbS1uYXY+XG4gKiAgIDxpZ3gtdGFiLXBhbmVsIGxhYmVsPVwiVGFiIDFcIj5UYWIgMSBDb250ZW50PC9pZ3gtdGFiLXBhbmVsPlxuICogICA8aWd4LXRhYi1wYW5lbCBsYWJlbD1cIlRhYiAyXCI+VGFiIDIgQ29udGVudDwvaWd4LXRhYi1wYW5lbD5cbiAqICAgPGlneC10YWItcGFuZWwgbGFiZWw9XCJUYWIgM1wiPlRhYiAzIENvbnRlbnQ8L2lneC10YWItcGFuZWw+XG4gKiA8L2lneC1ib3R0b20tbmF2PlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LWJvdHRvbS1uYXYnLFxuICAgIHRlbXBsYXRlVXJsOiAndGFiLWJhci1jb250ZW50LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgSWd4Qm90dG9tTmF2Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgSWd4VGFiQ29tcG9uZW50YCBlbGVtZW50cyBpbiB0aGUgdGFiIGJhciBjb21wb25lbnQgY3JlYXRlZCBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgcGFuZWxzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdGFiczogUXVlcnlMaXN0PElneFRhYkNvbXBvbmVudD4gPSAgdGhpcy50YWJCYXIudmlld1RhYnM7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEJvdHRvbU5hdkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBJZ3hUYWJDb21wb25lbnQpKVxuICAgIHB1YmxpYyB2aWV3VGFiczogUXVlcnlMaXN0PElneFRhYkNvbXBvbmVudD47XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgSWd4VGFiQ29tcG9uZW50YCBlbGVtZW50cyBpbiB0aGUgdGFiIGJhciBjb21wb25lbnQgZGVmaW5lZCBhcyBjb250ZW50IGNoaWxkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdGFiczogUXVlcnlMaXN0PElneFRhYkNvbXBvbmVudD4gPSAgdGhpcy50YWJCYXIuY29udGVudFRhYnM7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEJvdHRvbU5hdkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBJZ3hUYWJDb21wb25lbnQpKVxuICAgIHB1YmxpYyBjb250ZW50VGFiczogUXVlcnlMaXN0PElneFRhYkNvbXBvbmVudD47XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgSWd4VGFiQ29tcG9uZW50YCBlbGVtZW50cyBmb3IgdGhpcyBib3R0b20gbmF2aWdhdGlvbiBjb21wb25lbnQuXG4gICAgICogRmlyc3QgdHJ5IHRvIGdldCB0aGVtIGFzIGNvbnRlbnQgY2hpbGRyZW4gaWYgbm90IGF2YWlsYWJsZSBnZXQgdGhlbSBhcyB2aWV3IGNoaWxkcmVuLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdGFiczogUXVlcnlMaXN0PElneFRhYkNvbXBvbmVudD4gPSAgdGhpcy50YWJCYXIudGFicztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Qm90dG9tTmF2Q29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldCB0YWJzKCk6IFF1ZXJ5TGlzdDxJZ3hUYWJDb21wb25lbnQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQ29udGVudFRhYnMgPyB0aGlzLmNvbnRlbnRUYWJzIDogdGhpcy52aWV3VGFicztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgSWd4VGFiUGFuZWxDb21wb25lbnRgIGVsZW1lbnRzIGluIHRoZSB0YWIgYmFyIGNvbXBvbmVudC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRhYlBhbmVsczogUXVlcnlMaXN0PElneFRhYlBhbmVsQ29tcG9uZW50PiA9IHRoaXMudGFiQmFyLnBhbmVscztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Qm90dG9tTmF2Q29tcG9uZW50XG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IElneFRhYlBhbmVsQ29tcG9uZW50KSlcbiAgICBwdWJsaWMgcGFuZWxzOiBRdWVyeUxpc3Q8SWd4VGFiUGFuZWxDb21wb25lbnQ+O1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgaWRgIG9mIHRoZSB0YWIgYmFyLlxuICAgICAqIElmIG5vdCBzZXQsIHRoZSBgaWRgIG9mIHRoZSBmaXJzdCB0YWIgYmFyIGNvbXBvbmVudCB3aWxsIGJlIGBcImlneC1ib3R0b20tbmF2LTBcImAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtYm90dG9tLW5hdiBpZCA9IFwibXktZmlyc3QtdGFiLWJhclwiPjwvaWd4LWJvdHRvbS1uYXY+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB0YWJCYXJJZCA9ICB0aGlzLnRhYkJhci5pZDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Qm90dG9tTmF2Q29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZCA9IGBpZ3gtYm90dG9tLW5hdi0ke05FWFRfSUQrK31gO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiBhIG5ldyB0YWIgaXMgc2VsZWN0ZWQuXG4gICAgICogUHJvdmlkZXMgcmVmZXJlbmNlcyB0byB0aGUgYElneFRhYkNvbXBvbmVudGAgYW5kIGBJZ3hUYWJQYW5lbENvbXBvbmVudGAgYXMgZXZlbnQgYXJndW1lbnRzLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWJvdHRvbS1uYXYgKG9uVGFibGVTZWxlY3RlZCkgPSBcIm9uVGFiU2VsZWN0ZWQoJGV2ZW50KVwiPjxpZ3gtYm90dG9tLW5hdj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Qm90dG9tTmF2Q29tcG9uZW50XG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblRhYlNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJU2VsZWN0VGFiRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiBhIHRhYiBpcyBkZXNlbGVjdGVkLlxuICAgICAqIFByb3ZpZGVzIHJlZmVyZW5jZXMgdG8gdGhlIGBJZ3hUYWJDb21wb25lbnRgIGFuZCBgSWd4VGFiUGFuZWxDb21wb25lbnRgIGFzIGV2ZW50IGFyZ3VtZW50cy5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ib3R0b20tbmF2IChvblRhYkRlc2VsZWN0ZWQpID0gXCJvblRhYkRlc2VsZWN0ZWQoJGV2ZW50KVwiPjxpZ3gtYm90dG9tLW5hdj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Qm90dG9tTmF2Q29tcG9uZW50XG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblRhYkRlc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElTZWxlY3RUYWJFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgaW5kZXhgIG9mIHNlbGVjdGVkIHRhYi9wYW5lbCBpbiB0aGUgcmVzcGVjdGl2ZSBjb2xsZWN0aW9uLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaW5kZXggPSAgdGhpcy50YWJCYXIuc2VsZWN0ZWRJbmRleDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Qm90dG9tTmF2Q29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdGVkSW5kZXggPSAtMTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGBpdGVtU3R5bGVgIG9mIHRoZSB0YWIgYmFyLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXRlbVN0eWxlID0gIHRoaXMudGFiQmFyLml0ZW1TdHlsZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Qm90dG9tTmF2Q29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldCBpdGVtU3R5bGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1TdHlsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGhhc0NvbnRlbnRUYWJzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKHRoaXMuY29udGVudFRhYnMgJiYgdGhpcy5jb250ZW50VGFicy5sZW5ndGggPiAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9pdGVtU3R5bGUgPSAnaWd4LWJvdHRvbS1uYXYnO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgdGFiIGluIHRoZSB0YWIgYmFyLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdGFiID0gIHRoaXMudGFiQmFyLnNlbGVjdGVkVGFiO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hCb3R0b21OYXZDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRUYWIoKTogSWd4VGFiQ29tcG9uZW50IHtcbiAgICAgICAgaWYgKHRoaXMudGFicyAmJiB0aGlzLnNlbGVjdGVkSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFicy50b0FycmF5KClbdGhpcy5zZWxlY3RlZEluZGV4XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICAvLyBpbml0aWFsIHNlbGVjdGlvblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0YWJsZVBhbmVscyA9IHRoaXMucGFuZWxzLmZpbHRlcigocCkgPT4gIXAuZGlzYWJsZWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhbmVsID0gc2VsZWN0YWJsZVBhbmVsc1swXTtcbiAgICAgICAgICAgICAgICBpZiAocGFuZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFuZWwuc2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdvblRhYlNlbGVjdGVkJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgX3NlbGVjdGVkUGFuZWxIYW5kbGVyKGFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzQ29udGVudFRhYnMpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGFyZ3MudGFiLmluZGV4O1xuICAgICAgICAgICAgdGhpcy5jb250ZW50VGFicy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHQgIT09IGFyZ3MudGFiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rlc2VsZWN0VGFiKHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFyZ3MucGFuZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBhcmdzLnBhbmVsLmluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxzLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAuaW5kZXggIT09IHRoaXMuc2VsZWN0ZWRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVzZWxlY3RQYW5lbChwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZGVzZWxlY3RQYW5lbChwYW5lbDogSWd4VGFiUGFuZWxDb21wb25lbnQpIHtcbiAgICAgICAgLy8gQ2Fubm90IGRlc2VsZWN0IHRoZSBzZWxlY3RlZCB0YWIgLSB0aGlzIHdpbGwgbWVhbiB0aGF0IHRoZXJlIHdpbGwgYmUgbm90IHNlbGVjdGVkIHRhYiBsZWZ0XG4gICAgICAgIGlmIChwYW5lbC5kaXNhYmxlZCB8fCB0aGlzLnNlbGVjdGVkVGFiLmluZGV4ID09PSBwYW5lbC5pbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFuZWwuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uVGFiRGVzZWxlY3RlZC5lbWl0KHsgdGFiOiB0aGlzLnRhYnNbcGFuZWwuaW5kZXhdLCBwYW5lbCB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kZXNlbGVjdFRhYihhVGFiOiBJZ3hUYWJDb21wb25lbnQpIHtcbiAgICAgICAgYVRhYi5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25UYWJEZXNlbGVjdGVkLmVtaXQoeyB0YWI6IGFUYWIsIHBhbmVsOiBudWxsIH0pO1xuICAgIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IElneFRhYlBhbmVsQ29tcG9uZW50ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LXRhYi1wYW5lbCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0YWItcGFuZWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneFRhYlBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9pdGVtU3R5bGUgPSAnaWd4LXRhYi1wYW5lbCc7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9pc1NlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGBsYWJlbGAgb2YgdGhlIHRhYiBwYW5lbC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC10YWItcGFuZWwgW2xhYmVsXSA9IFwiJ1RhYiBwYW5lbCBsYWJlbCdcIj48aWd4LXRhYi1wYW5lbD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRhYlBhbmVsTGFiZWwgPSB0aGlzLnRhYlBhbmVsLmxhYmVsO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hUYWJQYW5lbENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzICB0aGUgYGljb25gIG9mIHRoZSB0YWIgcGFuZWwuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtdGFiLXBhbmVsIFtpY29uXSA9IFwicGFuZWxfaWNvblwiPjxpZ3gtdGFiLXBhbmVsPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdGFiUGFuZWxJY29uID0gIHRoaXMudGFiUGFuZWwuaWNvbjtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VGFiUGFuZWxDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaWNvbjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHdoZXRoZXIgdGhlIHRhYiBwYW5lbCBpcyBkaXNhYmxlZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC10YWItcGFuZWwgW2Rpc2FibGVkXSA9IFwidHJ1ZVwiPjxpZ3gtdGFiLXBhbmVsPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNEaXNhYmxlZCA9IHRoaXMudGFiUGFuZWwuZGlzYWJsZWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFRhYlBhbmVsQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcm9sZSBvZiB0aGUgdGFiIHBhbmVsLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdGFiUGFuZWxSb2xlID0gdGhpcy50YWJQYW5lbC5yb2xlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hUYWJQYW5lbENvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcHVibGljIHJvbGUgPSAndGFicGFuZWwnO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIGEgdGFiIHBhbmVsIHdpbGwgaGF2ZSBgaWd4LWJvdHRvbS1uYXZfX3BhbmVsYCBjbGFzcy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHN0eWxlQ2xhc3MgPSB0aGlzLnRhYlBhbmVsLnN0eWxlQ2xhc3M7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFRhYlBhbmVsQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtYm90dG9tLW5hdl9fcGFuZWwnKVxuICAgIGdldCBzdHlsZUNsYXNzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKCF0aGlzLmlzU2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB3aGV0aGVyIGEgdGFiIHBhbmVsIGlzIHNlbGVjdGVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnRhYlBhbmVsLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNTZWxlY3RlZCA9ICB0aGlzLnRhYlBhbmVsLmlzU2VsZWN0ZWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFRhYlBhbmVsQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtYm90dG9tLW5hdl9fcGFuZWwtLXNlbGVjdGVkJylcbiAgICBwdWJsaWMgZ2V0IGlzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1NlbGVjdGVkO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGlzU2VsZWN0ZWQobmV3VmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU2VsZWN0ZWQgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1NlbGVjdGVkID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgaXRlbVN0eWxlYCBvZiB0aGUgdGFiIHBhbmVsLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXRlbVN0eWxlID0gdGhpcy50YWJQYW5lbC5pdGVtU3R5bGU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFRhYlBhbmVsQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldCBpdGVtU3R5bGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1TdHlsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB0YWIgYXNzb2NpYXRlZCB3aXRoIHRoZSBwYW5lbC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRhYiA9IHRoaXMudGFiUGFuZWwucmVsYXRlZFRhYjtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VGFiUGFuZWxDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgcmVsYXRlZFRhYigpOiBJZ3hUYWJDb21wb25lbnQge1xuICAgICAgICBpZiAodGhpcy5fdGFiQmFyLnRhYnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90YWJCYXIudGFicy50b0FycmF5KClbdGhpcy5pbmRleF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjaGFuZ2VzIGFuZCB1cGRhdGVzIGFjY29yZGluZ2x5IGFwcGxpZWQgdG8gdGhlIHRhYi9wYW5lbC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBJZ3hUYWJDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgY2hhbmdlc0NvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbGF0ZWRUYWIgPyB0aGlzLnJlbGF0ZWRUYWIuY2hhbmdlc0NvdW50IDogMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBpbmRleCBvZiBhIHBhbmVsIGluIHRoZSBwYW5lbHMgY29sbGVjdGlvbi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHBhbmVsSW5kZXggPSAgdGhpcy50YWJQYW5lbC5pbmRleFxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hUYWJQYW5lbENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBpbmRleCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RhYkJhci5wYW5lbHMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90YWJCYXIucGFuZWxzLnRvQXJyYXkoKS5pbmRleE9mKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdGFiIHRlbXBsYXRlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdGFiVGVtcGxhdGUgPSB0aGlzLnRhYlBhbmVsLmN1c3RvbVRhYlRlbXBsYXRlXG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFRhYlBhbmVsQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGN1c3RvbVRhYlRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFiVGVtcGxhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdGFiIHRlbXBsYXRlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnRhYlBhbmVsLmN1c3RvbVRhYlRlbXBsYXRlKHRhYlRlbXBsYXRlKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VGFiUGFuZWxDb21wb25lbnRcbiAgICAgKi9cbiAgICBzZXQgY3VzdG9tVGFiVGVtcGxhdGUodGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICAgICAgdGhpcy5fdGFiVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF90YWJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4VGFiVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogSWd4VGFiVGVtcGxhdGVEaXJlY3RpdmUsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCB0YWJUZW1wbGF0ZTogSWd4VGFiVGVtcGxhdGVEaXJlY3RpdmU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90YWJCYXI6IElneEJvdHRvbU5hdkNvbXBvbmVudCwgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnRhYlRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl90YWJUZW1wbGF0ZSA9IHRoaXMudGFiVGVtcGxhdGUudGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCBgaWd4LXRhYi0ke3RoaXMuaW5kZXh9YCk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYGlneC1ib3R0b20tbmF2X19wYW5lbC0ke3RoaXMuaW5kZXh9YCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0cyB0aGUgY3VycmVudCB0YWIgYW5kIHRoZSB0YWIgcGFuZWwuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMudGFiUGFuZWwuc2VsZWN0KCk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFRhYlBhbmVsQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5fdGFiQmFyLnNlbGVjdGVkSW5kZXggPT09IHRoaXMuaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl90YWJCYXIub25UYWJTZWxlY3RlZC5lbWl0KHsgdGFiOiB0aGlzLl90YWJCYXIudGFicy50b0FycmF5KClbdGhpcy5pbmRleF0sIHBhbmVsOiB0aGlzIH0pO1xuICAgIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IElneFRhYkNvbXBvbmVudCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtdGFiJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RhYi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4VGFiQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgcm9sZWAgYXR0cmlidXRlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdGFiUm9sZSA9IHRoaXMudGFiLnJvbGU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFRhYkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgICBwdWJsaWMgcm9sZSA9ICd0YWInO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIHB1YmxpYyBpZCA9ICdpZ3gtdGFiLScgKyB0aGlzLmluZGV4O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1sYWJlbCcpXG4gICAgcHVibGljIGFyaWFMYWJlbCA9IHRoaXMubGFiZWw7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRpc2FibGVkJylcbiAgICBwdWJsaWMgYXJpYURpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtc2VsZWN0ZWQnKVxuICAgIHB1YmxpYyBhcmlhU2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWNvbnRyb2xzJylcbiAgICBwdWJsaWMgYXJpYUNvbnRyb2xzID0gJ2lneC10YWItcGFuZWwtJyArIHRoaXMuaW5kZXg7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwYW5lbCBhc3NvY2lhdGVkIHdpdGggdGhlIHRhYi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRhYlBhbmVsID0gIHRoaXMudGFiLnJlbGF0ZWRQYW5lbDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VGFiQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmVsYXRlZFBhbmVsOiBJZ3hUYWJQYW5lbENvbXBvbmVudDtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2xhYmVsOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGBsYWJlbGAgb2YgdGhlIHRhYiBwYW5lbC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC10YWIgW2xhYmVsXSA9IFwiJ1RhYiBsYWJlbCdcIj48aWd4LXRhYj5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRhYkxhYmVsID0gdGhpcy50YWIubGFiZWw7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFRhYkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBsYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWxhdGVkUGFuZWwgPyB0aGlzLnJlbGF0ZWRQYW5lbC5sYWJlbCA6IHRoaXMuX2xhYmVsO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGxhYmVsKG5ld1ZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucmVsYXRlZFBhbmVsKSB7XG4gICAgICAgICAgICB0aGlzLnJlbGF0ZWRQYW5lbC5sYWJlbCA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xhYmVsID0gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzICB0aGUgYGljb25gIG9mIHRoZSB0YWIgcGFuZWwuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtdGFiIFtpY29uXSA9IFwidGFiX2ljb25cIj48aWd4LXRhYj5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRhYkljb24gPSAgdGhpcy50YWIuaWNvbjtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VGFiQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGljb24oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlZFBhbmVsID8gdGhpcy5yZWxhdGVkUGFuZWwuaWNvbiA6IHRoaXMuX2ljb247XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgaWNvbihuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbGF0ZWRQYW5lbCkge1xuICAgICAgICAgICAgdGhpcy5yZWxhdGVkUGFuZWwuaWNvbiA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2ljb24gPSBuZXdWYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9jaGFuZ2VzQ291bnQgPSAwOyAvLyBjaGFuZ2VzIGFuZCB1cGRhdGVzIGFjY29yZGluZ2x5IGFwcGxpZWQgdG8gdGhlIHRhYi5cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNoYW5nZXMgYW5kIHVwZGF0ZXMgYWNjb3JkaW5nbHkgYXBwbGllZCB0byB0aGUgdGFiLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIElneFRhYkNvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBjaGFuZ2VzQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYW5nZXNDb3VudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIHRoZSB0YWIgaXMgZGlzYWJsZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc0Rpc2FibGVkID0gdGhpcy50YWIuZGlzYWJsZWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFRhYkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWxhdGVkUGFuZWwgPyB0aGlzLnJlbGF0ZWRQYW5lbC5kaXNhYmxlZCA6IHRoaXMuX2Rpc2FibGVkO1xuICAgIH1cbiAgICBzZXQgZGlzYWJsZWQobmV3VmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMucmVsYXRlZFBhbmVsKSB7XG4gICAgICAgICAgICB0aGlzLnJlbGF0ZWRQYW5lbC5kaXNhYmxlZCA9IG5ld1ZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBfc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgd2hldGhlciB0aGUgdGFiIGlzIHNlbGVjdGVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNTZWxlY3RlZCAgPSB0aGlzLnRhYi5pc1NlbGVjdGVkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hUYWJDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHNldCBpc1NlbGVjdGVkKG5ld1ZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbGF0ZWRQYW5lbCkge1xuICAgICAgICAgICAgdGhpcy5yZWxhdGVkUGFuZWwuaXNTZWxlY3RlZCA9IG5ld1ZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3NlbGVjdGVkICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RhYkJhci5vblRhYlNlbGVjdGVkLmVtaXQoeyB0YWI6IHRoaXMsIHBhbmVsOiBudWxsIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWxhdGVkUGFuZWwgPyB0aGlzLnJlbGF0ZWRQYW5lbC5pc1NlbGVjdGVkIDogdGhpcy5fc2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtYm90dG9tLW5hdl9fbWVudS1pdGVtLS1zZWxlY3RlZCcpXG4gICAgcHVibGljIGdldCBjc3NDbGFzc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1NlbGVjdGVkO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWJvdHRvbS1uYXZfX21lbnUtaXRlbS0tZGlzYWJsZWQnKVxuICAgIHB1YmxpYyBnZXQgY3NzQ2xhc3NEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtYm90dG9tLW5hdl9fbWVudS1pdGVtJylcbiAgICBwdWJsaWMgZ2V0IGNzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLmlzU2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGBpbmRleGAgb2YgdGhlIHRhYi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRhYkluZGV4ID0gdGhpcy50YWIuaW5kZXg7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFRhYkNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuX3RhYkJhci50YWJzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFiQmFyLnRhYnMudG9BcnJheSgpLmluZGV4T2YodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipAaGlkZGVuKi9cbiAgICBAVmlld0NoaWxkKCdkZWZhdWx0VGFiVGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdFRhYlRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgLyoqQGhpZGRlbiovXG4gICAgQENvbnRlbnRDaGlsZChJZ3hUYWJUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBJZ3hUYWJUZW1wbGF0ZURpcmVjdGl2ZSwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGN1c3RvbVRhYlRlbXBsYXRlRGlyOiBJZ3hUYWJUZW1wbGF0ZURpcmVjdGl2ZTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGB0ZW1wbGF0ZWAgZm9yIHRoaXMgSWd4VGFiQ29tcG9uZW50LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdGFiSXRlbVRlbXBsYXRlID0gdGhpcy50YWJJdGVtLnRlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hUYWJDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgICAgICBpZiAodGhpcy5yZWxhdGVkUGFuZWwgJiYgdGhpcy5yZWxhdGVkUGFuZWwuY3VzdG9tVGFiVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbGF0ZWRQYW5lbC5jdXN0b21UYWJUZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXN0b21UYWJUZW1wbGF0ZURpcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tVGFiVGVtcGxhdGVEaXIudGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdFRhYlRlbXBsYXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGBjb250ZXh0YCBvYmplY3QgZm9yIHRoZSB0ZW1wbGF0ZSBvZiB0aGlzIGBJZ3hUYWJDb21wb25lbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdGFiSXRlbUNvbnRleHQgPSB0aGlzLnRhYkl0ZW0uY29udGV4dDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGNvbnRleHQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlZFBhbmVsID8gdGhpcy5yZWxhdGVkUGFuZWwgOiB0aGlzO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RhYkJhcjogSWd4Qm90dG9tTmF2Q29tcG9uZW50LCBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0cyB0aGUgY3VycmVudCB0YWIgYW5kIHRoZSBhc3NvY2lhdGVkIHBhbmVsLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnRhYi5zZWxlY3QoKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VGFiQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVsYXRlZFBhbmVsKSB7XG4gICAgICAgICAgICB0aGlzLnJlbGF0ZWRQYW5lbC5zZWxlY3QoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3RhYkJhci5vblRhYlNlbGVjdGVkLmVtaXQoeyB0YWI6IHRoaXMsIHBhbmVsOiBudWxsIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgICBwdWJsaWMgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZWxlbWVudFJlZigpOiBFbGVtZW50UmVmIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtJZ3hCb3R0b21OYXZDb21wb25lbnQsIElneFRhYlBhbmVsQ29tcG9uZW50LCBJZ3hUYWJDb21wb25lbnQsIElneFRhYlRlbXBsYXRlRGlyZWN0aXZlXSxcbiAgICBleHBvcnRzOiBbSWd4Qm90dG9tTmF2Q29tcG9uZW50LCBJZ3hUYWJQYW5lbENvbXBvbmVudCwgSWd4VGFiQ29tcG9uZW50LCBJZ3hUYWJUZW1wbGF0ZURpcmVjdGl2ZV0sXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSWd4QmFkZ2VNb2R1bGUsIElneEljb25Nb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIElneEJvdHRvbU5hdk1vZHVsZSB7XG59XG4iXX0=