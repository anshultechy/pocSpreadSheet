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
var NEXT_ID = 0;
var IgxTabTemplateDirective = /** @class */ (function () {
    function IgxTabTemplateDirective(template) {
        this.template = template;
    }
    IgxTabTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxTab]'
                },] }
    ];
    /** @nocollapse */
    IgxTabTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return IgxTabTemplateDirective;
}());
export { IgxTabTemplateDirective };
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
var IgxBottomNavComponent = /** @class */ (function () {
    function IgxBottomNavComponent(_element) {
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
        this.id = "igx-bottom-nav-" + NEXT_ID++;
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
    Object.defineProperty(IgxBottomNavComponent.prototype, "tabs", {
        /**
         * Gets the `IgxTabComponent` elements for this bottom navigation component.
         * First try to get them as content children if not available get them as view children.
         * ```typescript
         * let tabs: QueryList<IgxTabComponent> =  this.tabBar.tabs;
         * ```
         * @memberof IgxBottomNavComponent
         */
        get: /**
         * Gets the `IgxTabComponent` elements for this bottom navigation component.
         * First try to get them as content children if not available get them as view children.
         * ```typescript
         * let tabs: QueryList<IgxTabComponent> =  this.tabBar.tabs;
         * ```
         * \@memberof IgxBottomNavComponent
         * @return {?}
         */
        function () {
            return this.hasContentTabs ? this.contentTabs : this.viewTabs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxBottomNavComponent.prototype, "itemStyle", {
        /**
         * Gets the `itemStyle` of the tab bar.
         * ```typescript
         * let itemStyle =  this.tabBar.itemStyle;
         * ```
         * @memberof IgxBottomNavComponent
         */
        get: /**
         * Gets the `itemStyle` of the tab bar.
         * ```typescript
         * let itemStyle =  this.tabBar.itemStyle;
         * ```
         * \@memberof IgxBottomNavComponent
         * @return {?}
         */
        function () {
            return this._itemStyle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxBottomNavComponent.prototype, "hasContentTabs", {
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
    Object.defineProperty(IgxBottomNavComponent.prototype, "selectedTab", {
        /**
         * Gets the selected tab in the tab bar.
         * ```typescript
         * let tab =  this.tabBar.selectedTab;
         * ```
         * @memberof IgxBottomNavComponent
         */
        get: /**
         * Gets the selected tab in the tab bar.
         * ```typescript
         * let tab =  this.tabBar.selectedTab;
         * ```
         * \@memberof IgxBottomNavComponent
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
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxBottomNavComponent.prototype.ngAfterViewInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        // initial selection
        setTimeout(function () {
            if (_this.selectedIndex === -1) {
                /** @type {?} */
                var selectablePanels = _this.panels.filter(function (p) { return !p.disabled; });
                /** @type {?} */
                var panel = selectablePanels[0];
                if (panel) {
                    panel.select();
                }
            }
        }, 0);
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} args
     * @return {?}
     */
    IgxBottomNavComponent.prototype._selectedPanelHandler = /**
     * @hidden
     * @param {?} args
     * @return {?}
     */
    function (args) {
        var _this = this;
        if (this.hasContentTabs) {
            this.selectedIndex = args.tab.index;
            this.contentTabs.forEach(function (t) {
                if (t !== args.tab) {
                    _this._deselectTab(t);
                }
            });
        }
        else {
            if (args.panel) {
                this.selectedIndex = args.panel.index;
                this.panels.forEach(function (p) {
                    if (p.index !== _this.selectedIndex) {
                        _this._deselectPanel(p);
                    }
                });
            }
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @param {?} panel
     * @return {?}
     */
    IgxBottomNavComponent.prototype._deselectPanel = /**
     * @hidden
     * @private
     * @param {?} panel
     * @return {?}
     */
    function (panel) {
        // Cannot deselect the selected tab - this will mean that there will be not selected tab left
        if (panel.disabled || this.selectedTab.index === panel.index) {
            return;
        }
        panel.isSelected = false;
        this.onTabDeselected.emit({ tab: this.tabs[panel.index], panel: panel });
    };
    /**
     * @private
     * @param {?} aTab
     * @return {?}
     */
    IgxBottomNavComponent.prototype._deselectTab = /**
     * @private
     * @param {?} aTab
     * @return {?}
     */
    function (aTab) {
        aTab.isSelected = false;
        this.onTabDeselected.emit({ tab: aTab, panel: null });
    };
    IgxBottomNavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-bottom-nav',
                    template: "<div *ngIf=\"!hasContentTabs\">\n    <ng-content></ng-content>\n</div>\n<div #tablist class=\"{{itemStyle}}__menu {{itemStyle}}__menu--bottom\" role=\"tablist\" aria-orientation=\"horizontal\">\n    <ng-container *ngIf=\"!hasContentTabs\">    \n        <igx-tab *ngFor=\"let panel of panels\" [relatedPanel]=\"panel\">\n        </igx-tab>\n    </ng-container>\n    <ng-content select=\"igx-tab\"></ng-content>\n</div>",
                    styles: ["\n        :host {\n            display: block;\n        }\n    "]
                }] }
    ];
    /** @nocollapse */
    IgxBottomNavComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    IgxBottomNavComponent.propDecorators = {
        viewTabs: [{ type: ViewChildren, args: [forwardRef(function () { return IgxTabComponent; }),] }],
        contentTabs: [{ type: ContentChildren, args: [forwardRef(function () { return IgxTabComponent; }),] }],
        panels: [{ type: ContentChildren, args: [forwardRef(function () { return IgxTabPanelComponent; }),] }],
        id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
        onTabSelected: [{ type: Output }],
        onTabDeselected: [{ type: Output }],
        _selectedPanelHandler: [{ type: HostListener, args: ['onTabSelected', ['$event'],] }]
    };
    return IgxBottomNavComponent;
}());
export { IgxBottomNavComponent };
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
var IgxTabPanelComponent = /** @class */ (function () {
    function IgxTabPanelComponent(_tabBar, _element) {
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
    Object.defineProperty(IgxTabPanelComponent.prototype, "styleClass", {
        /**
         * Gets whether a tab panel will have `igx-bottom-nav__panel` class.
         * ```typescript
         * let styleClass = this.tabPanel.styleClass;
         * ```
         * @memberof IgxTabPanelComponent
         */
        get: /**
         * Gets whether a tab panel will have `igx-bottom-nav__panel` class.
         * ```typescript
         * let styleClass = this.tabPanel.styleClass;
         * ```
         * \@memberof IgxTabPanelComponent
         * @return {?}
         */
        function () {
            return (!this.isSelected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabPanelComponent.prototype, "isSelected", {
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
        get: /**
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
        function () {
            return this._isSelected;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this._isSelected !== newValue) {
                if (newValue) {
                    this.select();
                }
                else {
                    this._isSelected = newValue;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabPanelComponent.prototype, "itemStyle", {
        /**
         * Gets the `itemStyle` of the tab panel.
         * ```typescript
         * let itemStyle = this.tabPanel.itemStyle;
         * ```
         * @memberof IgxTabPanelComponent
         */
        get: /**
         * Gets the `itemStyle` of the tab panel.
         * ```typescript
         * let itemStyle = this.tabPanel.itemStyle;
         * ```
         * \@memberof IgxTabPanelComponent
         * @return {?}
         */
        function () {
            return this._itemStyle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabPanelComponent.prototype, "relatedTab", {
        /**
         * Gets the tab associated with the panel.
         * ```typescript
         * let tab = this.tabPanel.relatedTab;
         * ```
         * @memberof IgxTabPanelComponent
         */
        get: /**
         * Gets the tab associated with the panel.
         * ```typescript
         * let tab = this.tabPanel.relatedTab;
         * ```
         * \@memberof IgxTabPanelComponent
         * @return {?}
         */
        function () {
            if (this._tabBar.tabs) {
                return this._tabBar.tabs.toArray()[this.index];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabPanelComponent.prototype, "changesCount", {
        /**
         * Gets the changes and updates accordingly applied to the tab/panel.
         *
         * @memberof IgxTabComponent
         */
        get: /**
         * Gets the changes and updates accordingly applied to the tab/panel.
         *
         * \@memberof IgxTabComponent
         * @return {?}
         */
        function () {
            return this.relatedTab ? this.relatedTab.changesCount : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabPanelComponent.prototype, "index", {
        /**
         * Gets the index of a panel in the panels collection.
         * ```typescript
         * let panelIndex =  this.tabPanel.index
         * ```
         * @memberof IgxTabPanelComponent
         */
        get: /**
         * Gets the index of a panel in the panels collection.
         * ```typescript
         * let panelIndex =  this.tabPanel.index
         * ```
         * \@memberof IgxTabPanelComponent
         * @return {?}
         */
        function () {
            if (this._tabBar.panels) {
                return this._tabBar.panels.toArray().indexOf(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabPanelComponent.prototype, "customTabTemplate", {
        /**
         * Gets the tab template.
         * ```typescript
         * let tabTemplate = this.tabPanel.customTabTemplate
         * ```
         * @memberof IgxTabPanelComponent
         */
        get: /**
         * Gets the tab template.
         * ```typescript
         * let tabTemplate = this.tabPanel.customTabTemplate
         * ```
         * \@memberof IgxTabPanelComponent
         * @return {?}
         */
        function () {
            return this._tabTemplate;
        },
        /**
         * Sets the tab template.
         * ```typescript
         * this.tabPanel.customTabTemplate(tabTemplate);
         * ```
         * @memberof IgxTabPanelComponent
         */
        set: /**
         * Sets the tab template.
         * ```typescript
         * this.tabPanel.customTabTemplate(tabTemplate);
         * ```
         * \@memberof IgxTabPanelComponent
         * @param {?} template
         * @return {?}
         */
        function (template) {
            this._tabTemplate = template;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTabPanelComponent.prototype.ngAfterContentInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.tabTemplate) {
            this._tabTemplate = this.tabTemplate.template;
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTabPanelComponent.prototype.ngAfterViewChecked = /**
     * @hidden
     * @return {?}
     */
    function () {
        this._element.nativeElement.setAttribute('aria-labelledby', "igx-tab-" + this.index);
        this._element.nativeElement.setAttribute('id', "igx-bottom-nav__panel-" + this.index);
    };
    /**
     * Selects the current tab and the tab panel.
     * ```typescript
     * this.tabPanel.select();
     * ```
     * @memberof IgxTabPanelComponent
     */
    /**
     * Selects the current tab and the tab panel.
     * ```typescript
     * this.tabPanel.select();
     * ```
     * \@memberof IgxTabPanelComponent
     * @return {?}
     */
    IgxTabPanelComponent.prototype.select = /**
     * Selects the current tab and the tab panel.
     * ```typescript
     * this.tabPanel.select();
     * ```
     * \@memberof IgxTabPanelComponent
     * @return {?}
     */
    function () {
        if (this.disabled || this._tabBar.selectedIndex === this.index) {
            return;
        }
        this._isSelected = true;
        this._tabBar.onTabSelected.emit({ tab: this._tabBar.tabs.toArray()[this.index], panel: this });
    };
    IgxTabPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-tab-panel',
                    template: "<ng-content></ng-content>\n"
                }] }
    ];
    /** @nocollapse */
    IgxTabPanelComponent.ctorParameters = function () { return [
        { type: IgxBottomNavComponent },
        { type: ElementRef }
    ]; };
    IgxTabPanelComponent.propDecorators = {
        label: [{ type: Input }],
        icon: [{ type: Input }],
        disabled: [{ type: Input }],
        role: [{ type: HostBinding, args: ['attr.role',] }],
        styleClass: [{ type: HostBinding, args: ['class.igx-bottom-nav__panel',] }],
        isSelected: [{ type: HostBinding, args: ['class.igx-bottom-nav__panel--selected',] }],
        tabTemplate: [{ type: ContentChild, args: [IgxTabTemplateDirective, { read: IgxTabTemplateDirective, static: true },] }]
    };
    return IgxTabPanelComponent;
}());
export { IgxTabPanelComponent };
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
var IgxTabComponent = /** @class */ (function () {
    function IgxTabComponent(_tabBar, _element) {
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
    Object.defineProperty(IgxTabComponent.prototype, "label", {
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
        get: /**
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
        function () {
            return this.relatedPanel ? this.relatedPanel.label : this._label;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this.relatedPanel) {
                this.relatedPanel.label = newValue;
            }
            this._label = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabComponent.prototype, "icon", {
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
        get: /**
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
        function () {
            return this.relatedPanel ? this.relatedPanel.icon : this._icon;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this.relatedPanel) {
                this.relatedPanel.icon = newValue;
            }
            this._icon = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabComponent.prototype, "changesCount", {
        /**
         * Gets the changes and updates accordingly applied to the tab.
         *
         * @memberof IgxTabComponent
         */
        get: 
        // changes and updates accordingly applied to the tab.
        /**
         * Gets the changes and updates accordingly applied to the tab.
         *
         * \@memberof IgxTabComponent
         * @return {?}
         */
        function () {
            return this._changesCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabComponent.prototype, "disabled", {
        /**
         * Gets whether the tab is disabled.
         * ```typescript
         * let isDisabled = this.tab.disabled;
         * ```
         * @memberof IgxTabComponent
         */
        get: /**
         * Gets whether the tab is disabled.
         * ```typescript
         * let isDisabled = this.tab.disabled;
         * ```
         * \@memberof IgxTabComponent
         * @return {?}
         */
        function () {
            return this.relatedPanel ? this.relatedPanel.disabled : this._disabled;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this.relatedPanel) {
                this.relatedPanel.disabled = newValue;
            }
            else {
                this._disabled = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabComponent.prototype, "isSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this.relatedPanel ? this.relatedPanel.isSelected : this._selected;
        },
        /**
         * Gets whether the tab is selected.
         * ```typescript
         * let isSelected  = this.tab.isSelected;
         * ```
         * @memberof IgxTabComponent
         */
        set: /**
         * Gets whether the tab is selected.
         * ```typescript
         * let isSelected  = this.tab.isSelected;
         * ```
         * \@memberof IgxTabComponent
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this.relatedPanel) {
                this.relatedPanel.isSelected = newValue;
            }
            else if (this._selected !== newValue) {
                this._selected = newValue;
                if (this._selected) {
                    this._tabBar.onTabSelected.emit({ tab: this, panel: null });
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabComponent.prototype, "cssClassSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabComponent.prototype, "cssClassDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabComponent.prototype, "cssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.disabled && !this.isSelected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabComponent.prototype, "index", {
        /**
         * Gets the `index` of the tab.
         * ```typescript
         * let tabIndex = this.tab.index;
         * ```
         * @memberof IgxTabComponent
         */
        get: /**
         * Gets the `index` of the tab.
         * ```typescript
         * let tabIndex = this.tab.index;
         * ```
         * \@memberof IgxTabComponent
         * @return {?}
         */
        function () {
            if (this._tabBar.tabs) {
                return this._tabBar.tabs.toArray().indexOf(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabComponent.prototype, "template", {
        /**
         * Returns the `template` for this IgxTabComponent.
         * ```typescript
         * let tabItemTemplate = this.tabItem.template;
         * ```
         * @memberof IgxTabComponent
         */
        get: /**
         * Returns the `template` for this IgxTabComponent.
         * ```typescript
         * let tabItemTemplate = this.tabItem.template;
         * ```
         * \@memberof IgxTabComponent
         * @return {?}
         */
        function () {
            if (this.relatedPanel && this.relatedPanel.customTabTemplate) {
                return this.relatedPanel.customTabTemplate;
            }
            if (this.customTabTemplateDir) {
                return this.customTabTemplateDir.template;
            }
            return this.defaultTabTemplate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTabComponent.prototype, "context", {
        /**
         * Returns the `context` object for the template of this `IgxTabComponent`.
         * ```typescript
         * let tabItemContext = this.tabItem.context;
         * ```
         */
        get: /**
         * Returns the `context` object for the template of this `IgxTabComponent`.
         * ```typescript
         * let tabItemContext = this.tabItem.context;
         * ```
         * @return {?}
         */
        function () {
            return this.relatedPanel ? this.relatedPanel : this;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Selects the current tab and the associated panel.
     * ```typescript
     * this.tab.select();
     * ```
     * @memberof IgxTabComponent
     */
    /**
     * Selects the current tab and the associated panel.
     * ```typescript
     * this.tab.select();
     * ```
     * \@memberof IgxTabComponent
     * @return {?}
     */
    IgxTabComponent.prototype.select = /**
     * Selects the current tab and the associated panel.
     * ```typescript
     * this.tab.select();
     * ```
     * \@memberof IgxTabComponent
     * @return {?}
     */
    function () {
        if (this.relatedPanel) {
            this.relatedPanel.select();
        }
        else {
            this._selected = true;
            this._tabBar.onTabSelected.emit({ tab: this, panel: null });
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTabComponent.prototype.onClick = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.select();
    };
    /**
     * @return {?}
     */
    IgxTabComponent.prototype.elementRef = /**
     * @return {?}
     */
    function () {
        return this._element;
    };
    IgxTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-tab',
                    template: "<ng-template #defaultTabTemplate let-context>\n    <div *ngIf=\"context.icon\" class=\"tab-icon\">\n        <igx-icon fontSet=\"material\">{{context.icon}}</igx-icon>\n        <igx-badge [value]=\"context.changesCount\" [hidden]=\"context.changesCount === 0\"></igx-badge>\n    </div>\n    <div *ngIf=\"context.label\" ngClass=\"tab-label\">{{context.label}}</div>\n</ng-template>\n<ng-container *ngTemplateOutlet=\"template; context: { $implicit: this.context }\">\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    IgxTabComponent.ctorParameters = function () { return [
        { type: IgxBottomNavComponent },
        { type: ElementRef }
    ]; };
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
    return IgxTabComponent;
}());
export { IgxTabComponent };
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
var IgxBottomNavModule = /** @class */ (function () {
    function IgxBottomNavModule() {
    }
    IgxBottomNavModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxBottomNavComponent, IgxTabPanelComponent, IgxTabComponent, IgxTabTemplateDirective],
                    exports: [IgxBottomNavComponent, IgxTabPanelComponent, IgxTabComponent, IgxTabTemplateDirective],
                    imports: [CommonModule, IgxBadgeModule, IgxIconModule]
                },] }
    ];
    return IgxBottomNavModule;
}());
export { IgxBottomNavModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvdGFiYmFyL3RhYmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBSUgsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxFQUNmLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRTlDLHlDQUdDOzs7SUFGRyxrQ0FBcUI7O0lBQ3JCLG9DQUE0Qjs7O0lBRzVCLE9BQU8sR0FBRyxDQUFDO0FBRWY7SUFLSSxpQ0FBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7SUFDN0MsQ0FBQzs7Z0JBTkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxVQUFVO2lCQUN2Qjs7OztnQkFoQkcsV0FBVzs7SUFxQmYsOEJBQUM7Q0FBQSxBQVBELElBT0M7U0FKWSx1QkFBdUI7OztJQUVwQiwyQ0FBaUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JqRDtJQXFJSSwrQkFBb0IsUUFBb0I7UUFBcEIsYUFBUSxHQUFSLFFBQVEsQ0FBWTs7Ozs7Ozs7Ozs7O1FBbkVqQyxPQUFFLEdBQUcsb0JBQWtCLE9BQU8sRUFBSSxDQUFDOzs7Ozs7Ozs7UUFVekIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBdUIsQ0FBQzs7Ozs7Ozs7O1FBVXhELG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7Ozs7Ozs7O1FBU3BFLGtCQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7Ozs7UUF1QmxCLGVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztJQWdCdEMsQ0FBQztJQS9GRCxzQkFBVyx1Q0FBSTtRQVJmOzs7Ozs7O1dBT0c7Ozs7Ozs7Ozs7UUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsRSxDQUFDOzs7T0FBQTtJQStERCxzQkFBVyw0Q0FBUztRQVBwQjs7Ozs7O1dBTUc7Ozs7Ozs7OztRQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBS0Qsc0JBQVcsaURBQWM7UUFIekI7O1dBRUc7Ozs7O1FBQ0g7WUFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3RCxDQUFDOzs7T0FBQTtJQWNELHNCQUFJLDhDQUFXO1FBUGY7Ozs7OztXQU1HOzs7Ozs7Ozs7UUFDSDtZQUNJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFNBQVMsRUFBRTtnQkFDL0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNsRDtRQUNMLENBQUM7OztPQUFBO0lBS0Q7O09BRUc7Ozs7O0lBQ0ksK0NBQWU7Ozs7SUFBdEI7UUFBQSxpQkFXQztRQVZHLG9CQUFvQjtRQUNwQixVQUFVLENBQUM7WUFDUCxJQUFJLEtBQUksQ0FBQyxhQUFhLEtBQUssQ0FBQyxDQUFDLEVBQUU7O29CQUNyQixnQkFBZ0IsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBWCxDQUFXLENBQUM7O29CQUN6RCxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLEtBQUssRUFBRTtvQkFDUCxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQ2xCO2FBQ0o7UUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUVJLHFEQUFxQjs7Ozs7SUFENUIsVUFDNkIsSUFBSTtRQURqQyxpQkFtQkM7UUFqQkcsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUNoQixLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN4QjtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFBTTtZQUNILElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDWixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFJLENBQUMsYUFBYSxFQUFFO3dCQUNoQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUMxQjtnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNOO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7SUFDSyw4Q0FBYzs7Ozs7O0lBQXRCLFVBQXVCLEtBQTJCO1FBQzlDLDZGQUE2RjtRQUM3RixJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssRUFBRTtZQUMxRCxPQUFPO1NBQ1Y7UUFFRCxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7O0lBRU8sNENBQVk7Ozs7O0lBQXBCLFVBQXFCLElBQXFCO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDOztnQkFoTUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDZhQUE2Qzs2QkFDcEMsaUVBSVI7aUJBQ0o7Ozs7Z0JBdERHLFVBQVU7OzsyQkFnRVQsWUFBWSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZUFBZSxFQUFmLENBQWUsQ0FBQzs4QkFVOUMsZUFBZSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZUFBZSxFQUFmLENBQWUsQ0FBQzt5QkFzQmpELGVBQWUsU0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLG9CQUFvQixFQUFwQixDQUFvQixDQUFDO3FCQWN0RCxXQUFXLFNBQUMsU0FBUyxjQUNyQixLQUFLO2dDQVdMLE1BQU07a0NBVU4sTUFBTTt3Q0FxRU4sWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFzQzdDLDRCQUFDO0NBQUEsQUFqTUQsSUFpTUM7U0F4TFkscUJBQXFCOzs7Ozs7Ozs7O0lBUzlCLHlDQUM0Qzs7Ozs7Ozs7O0lBUzVDLDRDQUMrQzs7Ozs7Ozs7O0lBcUIvQyx1Q0FDK0M7Ozs7Ozs7Ozs7Ozs7SUFhL0MsbUNBRTBDOzs7Ozs7Ozs7O0lBVTFDLDhDQUF5RTs7Ozs7Ozs7OztJQVV6RSxnREFBMkU7Ozs7Ozs7OztJQVMzRSw4Q0FBMEI7Ozs7OztJQXVCMUIsMkNBQXNDOzs7OztJQWUxQix5Q0FBNEI7OztBQWdFNUM7SUFnTEksOEJBQW9CLE9BQThCLEVBQVUsUUFBb0I7UUFBNUQsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFZOzs7O1FBdkt4RSxlQUFVLEdBQUcsZUFBZSxDQUFDOzs7O1FBSzdCLGdCQUFXLEdBQUcsS0FBSyxDQUFDOzs7Ozs7OztRQTZDSyxTQUFJLEdBQUcsVUFBVSxDQUFDO0lBc0huRCxDQUFDO0lBN0dELHNCQUNJLDRDQUFVO1FBUmQ7Ozs7OztXQU1HOzs7Ozs7Ozs7UUFDSDtZQUVJLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQVlELHNCQUNXLDRDQUFVO1FBWHJCOzs7Ozs7Ozs7V0FTRzs7Ozs7Ozs7Ozs7O1FBQ0g7WUFFSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzs7Ozs7UUFDRCxVQUFzQixRQUFpQjtZQUNuQyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssUUFBUSxFQUFFO2dCQUMvQixJQUFJLFFBQVEsRUFBRTtvQkFDVixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQ2pCO3FCQUFNO29CQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO2lCQUMvQjthQUNKO1FBQ0wsQ0FBQzs7O09BVEE7SUFrQkQsc0JBQVcsMkNBQVM7UUFQcEI7Ozs7OztXQU1HOzs7Ozs7Ozs7UUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQVNELHNCQUFJLDRDQUFVO1FBUGQ7Ozs7OztXQU1HOzs7Ozs7Ozs7UUFDSDtZQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xEO1FBQ0wsQ0FBQzs7O09BQUE7SUFPRCxzQkFBSSw4Q0FBWTtRQUxoQjs7OztXQUlHOzs7Ozs7O1FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsQ0FBQzs7O09BQUE7SUFTRCxzQkFBSSx1Q0FBSztRQVBUOzs7Ozs7V0FNRzs7Ozs7Ozs7O1FBQ0g7WUFDSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO2dCQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0RDtRQUNMLENBQUM7OztPQUFBO0lBU0Qsc0JBQUksbURBQWlCO1FBUHJCOzs7Ozs7V0FNRzs7Ozs7Ozs7O1FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQztRQUVEOzs7Ozs7V0FNRzs7Ozs7Ozs7OztRQUNILFVBQXNCLFFBQTBCO1lBQzVDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLENBQUM7OztPQVhBO0lBMkJEOztPQUVHOzs7OztJQUNJLGlEQUFrQjs7OztJQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1NBQ2pEO0lBQ0wsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNJLGlEQUFrQjs7OztJQUF6QjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxhQUFXLElBQUksQ0FBQyxLQUFPLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLDJCQUF5QixJQUFJLENBQUMsS0FBTyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVEOzs7Ozs7T0FNRzs7Ozs7Ozs7O0lBQ0kscUNBQU07Ozs7Ozs7O0lBQWI7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtZQUM1RCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ25HLENBQUM7O2dCQWxOSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLHVDQUF1QztpQkFDMUM7Ozs7Z0JBNktnQyxxQkFBcUI7Z0JBbmFsRCxVQUFVOzs7d0JBNlFULEtBQUs7dUJBWUwsS0FBSzsyQkFZTCxLQUFLO3VCQVNMLFdBQVcsU0FBQyxXQUFXOzZCQVN2QixXQUFXLFNBQUMsNkJBQTZCOzZCQWV6QyxXQUFXLFNBQUMsdUNBQXVDOzhCQTBGbkQsWUFBWSxTQUFDLHVCQUF1QixFQUFFLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBc0MxRiwyQkFBQztDQUFBLEFBbk5ELElBbU5DO1NBL01ZLG9CQUFvQjs7Ozs7OztJQUs3QiwwQ0FBcUM7Ozs7OztJQUtyQywyQ0FBNEI7Ozs7Ozs7Ozs7OztJQVk1QixxQ0FBOEI7Ozs7Ozs7Ozs7OztJQVk5QixvQ0FBNkI7Ozs7Ozs7Ozs7OztJQVk3Qix3Q0FBa0M7Ozs7Ozs7OztJQVNsQyxvQ0FBbUQ7Ozs7OztJQTZHbkQsNENBQXVDOzs7Ozs7SUFLdkMsMkNBQytDOzs7OztJQUVuQyx1Q0FBc0M7Ozs7O0lBQUUsd0NBQTRCOzs7QUF1Q3BGO0lBcU9JLHlCQUFvQixPQUE4QixFQUFVLFFBQW9CO1FBQTVELFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBWTs7Ozs7Ozs7UUF4TnpFLFNBQUksR0FBRyxLQUFLLENBQUM7Ozs7UUFNYixPQUFFLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Ozs7UUFNN0IsY0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Ozs7UUFNdkIsaUJBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDOzs7O1FBTTdCLGlCQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7OztRQU0vQixpQkFBWSxHQUFHLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Ozs7UUFtRTVDLGtCQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsc0RBQXNEO1FBV3pFLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFxQm5CLGNBQVMsR0FBRyxLQUFLLENBQUM7SUF3RnpCLENBQUM7SUFoS0Qsc0JBQ1csa0NBQUs7UUFYaEI7Ozs7Ozs7OztXQVNHOzs7Ozs7Ozs7Ozs7UUFDSDtZQUVJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckUsQ0FBQzs7Ozs7UUFDRCxVQUFpQixRQUFnQjtZQUM3QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQzthQUN0QztZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1FBQzNCLENBQUM7OztPQU5BO0lBdUJELHNCQUNXLGlDQUFJO1FBWGY7Ozs7Ozs7OztXQVNHOzs7Ozs7Ozs7Ozs7UUFDSDtZQUVJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbkUsQ0FBQzs7Ozs7UUFDRCxVQUFnQixRQUFnQjtZQUM1QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQzthQUNyQztZQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQzFCLENBQUM7OztPQU5BO0lBa0JELHNCQUFJLHlDQUFZO1FBTGhCOzs7O1dBSUc7Ozs7Ozs7OztRQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBV0Qsc0JBQ0kscUNBQVE7UUFSWjs7Ozs7O1dBTUc7Ozs7Ozs7OztRQUNIO1lBRUksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMzRSxDQUFDOzs7OztRQUNELFVBQWEsUUFBaUI7WUFDMUIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7YUFDekM7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7YUFDN0I7UUFDTCxDQUFDOzs7T0FQQTtJQWtCRCxzQkFDSSx1Q0FBVTs7OztRQVVkO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUM3RSxDQUFDO1FBcEJEOzs7Ozs7V0FNRzs7Ozs7Ozs7OztRQUNILFVBQ2UsUUFBaUI7WUFDNUIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7YUFDM0M7aUJBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7Z0JBQzFCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztpQkFDL0Q7YUFDSjtRQUNMLENBQUM7OztPQUFBO0lBS0Qsc0JBQ1csNkNBQWdCOzs7O1FBRDNCO1lBRUksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQ1csNkNBQWdCOzs7O1FBRDNCO1lBRUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsc0JBQ1cscUNBQVE7Ozs7UUFEbkI7WUFFSSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELENBQUM7OztPQUFBO0lBU0Qsc0JBQVcsa0NBQUs7UUFQaEI7Ozs7OztXQU1HOzs7Ozs7Ozs7UUFDSDtZQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BEO1FBQ0wsQ0FBQzs7O09BQUE7SUFpQkQsc0JBQVcscUNBQVE7UUFQbkI7Ozs7OztXQU1HOzs7Ozs7Ozs7UUFDSDtZQUNJLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFO2dCQUMxRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUM7YUFDOUM7WUFDRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtnQkFDM0IsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDO2FBQzdDO1lBQ0QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFRRCxzQkFBVyxvQ0FBTztRQU5sQjs7Ozs7V0FLRzs7Ozs7Ozs7UUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3hELENBQUM7OztPQUFBO0lBS0Q7Ozs7OztPQU1HOzs7Ozs7Ozs7SUFDSSxnQ0FBTTs7Ozs7Ozs7SUFBYjtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzlCO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQy9EO0lBQ0wsQ0FBQztJQUVEOztPQUVHOzs7OztJQUVJLGlDQUFPOzs7O0lBRGQ7UUFFSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVNLG9DQUFVOzs7SUFBakI7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7Z0JBbFFKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsOGVBQWlDO2lCQUNwQzs7OztnQkFrT2dDLHFCQUFxQjtnQkEvcUJsRCxVQUFVOzs7dUJBc2RULFdBQVcsU0FBQyxXQUFXO3FCQU12QixXQUFXLFNBQUMsU0FBUzs0QkFNckIsV0FBVyxTQUFDLGlCQUFpQjsrQkFNN0IsV0FBVyxTQUFDLG9CQUFvQjsrQkFNaEMsV0FBVyxTQUFDLG9CQUFvQjsrQkFNaEMsV0FBVyxTQUFDLG9CQUFvQjsrQkFVaEMsS0FBSzt3QkFrQkwsS0FBSzt1QkEwQkwsS0FBSzsyQkFrQ0wsS0FBSzs2QkFxQkwsS0FBSzttQ0FlTCxXQUFXLFNBQUMsMkNBQTJDO21DQUt2RCxXQUFXLFNBQUMsMkNBQTJDOzJCQUt2RCxXQUFXLFNBQUMsaUNBQWlDO3FDQW1CN0MsU0FBUyxTQUFDLG9CQUFvQixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3VDQUluRSxZQUFZLFNBQUMsdUJBQXVCLEVBQUUsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTswQkFvRHJGLFlBQVksU0FBQyxPQUFPOztJQVF6QixzQkFBQztDQUFBLEFBblFELElBbVFDO1NBL1BZLGVBQWU7Ozs7Ozs7Ozs7SUFReEIsK0JBQ29COzs7OztJQUtwQiw2QkFDb0M7Ozs7O0lBS3BDLG9DQUM4Qjs7Ozs7SUFLOUIsdUNBQ29DOzs7OztJQUtwQyx1Q0FDc0M7Ozs7O0lBS3RDLHVDQUNvRDs7Ozs7Ozs7O0lBU3BELHVDQUMwQzs7Ozs7O0lBSzFDLGlDQUF1Qjs7Ozs7O0lBMEJ2QixnQ0FBc0I7Ozs7OztJQTBCdEIsd0NBQTBCOzs7OztJQVcxQixvQ0FBMEI7O0lBcUIxQixvQ0FBeUI7Ozs7OztJQXFEekIsNkNBQytDOzs7Ozs7SUFHL0MsK0NBQ3dEOzs7OztJQTZCNUMsa0NBQXNDOzs7OztJQUFFLG1DQUE0Qjs7Ozs7QUFtQ3BGO0lBQUE7SUFNQSxDQUFDOztnQkFOQSxRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLHVCQUF1QixDQUFDO29CQUNyRyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsdUJBQXVCLENBQUM7b0JBQ2hHLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsYUFBYSxDQUFDO2lCQUN6RDs7SUFFRCx5QkFBQztDQUFBLEFBTkQsSUFNQztTQURZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICAgIEFmdGVyQ29udGVudEluaXQsXG4gICAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIENvbXBvbmVudCxcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIERpcmVjdGl2ZSxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBmb3J3YXJkUmVmLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBJbnB1dCxcbiAgICBOZ01vZHVsZSxcbiAgICBPdXRwdXQsXG4gICAgUXVlcnlMaXN0LFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFZpZXdDaGlsZCxcbiAgICBWaWV3Q2hpbGRyZW5cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hCYWRnZU1vZHVsZSB9IGZyb20gJy4uL2JhZGdlL2JhZGdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pbmRleCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlbGVjdFRhYkV2ZW50QXJncyB7XG4gICAgdGFiOiBJZ3hUYWJDb21wb25lbnQ7XG4gICAgcGFuZWw6IElneFRhYlBhbmVsQ29tcG9uZW50O1xufVxuXG5sZXQgTkVYVF9JRCA9IDA7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneFRhYl0nXG59KVxuZXhwb3J0IGNsYXNzIElneFRhYlRlbXBsYXRlRGlyZWN0aXZlIHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIH1cbn1cbi8qKlxuICogKipJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgVGFiIEJhcioqIC1cbiAqIFtEb2N1bWVudGF0aW9uXShodHRwczovL3d3dy5pbmZyYWdpc3RpY3MuY29tL3Byb2R1Y3RzL2lnbml0ZS11aS1hbmd1bGFyL2FuZ3VsYXIvY29tcG9uZW50cy90YWJiYXIuaHRtbClcbiAqXG4gKiBUaGUgSWduaXRlIFVJIFRhYiBCYXIgZW5hYmxlcyB0aGUgdXNlciB0byBuYXZpZ2F0ZSBhbW9uZyBhIG51bWJlciBvZiBjb250ZW50IHBhbmVscyBkaXNwbGF5ZWQgaW4gYSBzaW5nbGUgdmlldy5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgaHRtbFxuICogPGlneC1ib3R0b20tbmF2PlxuICogICA8aWd4LXRhYi1wYW5lbCBsYWJlbD1cIlRhYiAxXCI+VGFiIDEgQ29udGVudDwvaWd4LXRhYi1wYW5lbD5cbiAqICAgPGlneC10YWItcGFuZWwgbGFiZWw9XCJUYWIgMlwiPlRhYiAyIENvbnRlbnQ8L2lneC10YWItcGFuZWw+XG4gKiAgIDxpZ3gtdGFiLXBhbmVsIGxhYmVsPVwiVGFiIDNcIj5UYWIgMyBDb250ZW50PC9pZ3gtdGFiLXBhbmVsPlxuICogPC9pZ3gtYm90dG9tLW5hdj5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lneC1ib3R0b20tbmF2JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RhYi1iYXItY29udGVudC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIElneEJvdHRvbU5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYElneFRhYkNvbXBvbmVudGAgZWxlbWVudHMgaW4gdGhlIHRhYiBiYXIgY29tcG9uZW50IGNyZWF0ZWQgYmFzZWQgb24gdGhlIHByb3ZpZGVkIHBhbmVscy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRhYnM6IFF1ZXJ5TGlzdDxJZ3hUYWJDb21wb25lbnQ+ID0gIHRoaXMudGFiQmFyLnZpZXdUYWJzO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hCb3R0b21OYXZDb21wb25lbnRcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gSWd4VGFiQ29tcG9uZW50KSlcbiAgICBwdWJsaWMgdmlld1RhYnM6IFF1ZXJ5TGlzdDxJZ3hUYWJDb21wb25lbnQ+O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYElneFRhYkNvbXBvbmVudGAgZWxlbWVudHMgaW4gdGhlIHRhYiBiYXIgY29tcG9uZW50IGRlZmluZWQgYXMgY29udGVudCBjaGlsZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRhYnM6IFF1ZXJ5TGlzdDxJZ3hUYWJDb21wb25lbnQ+ID0gIHRoaXMudGFiQmFyLmNvbnRlbnRUYWJzO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hCb3R0b21OYXZDb21wb25lbnRcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gSWd4VGFiQ29tcG9uZW50KSlcbiAgICBwdWJsaWMgY29udGVudFRhYnM6IFF1ZXJ5TGlzdDxJZ3hUYWJDb21wb25lbnQ+O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYElneFRhYkNvbXBvbmVudGAgZWxlbWVudHMgZm9yIHRoaXMgYm90dG9tIG5hdmlnYXRpb24gY29tcG9uZW50LlxuICAgICAqIEZpcnN0IHRyeSB0byBnZXQgdGhlbSBhcyBjb250ZW50IGNoaWxkcmVuIGlmIG5vdCBhdmFpbGFibGUgZ2V0IHRoZW0gYXMgdmlldyBjaGlsZHJlbi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRhYnM6IFF1ZXJ5TGlzdDxJZ3hUYWJDb21wb25lbnQ+ID0gIHRoaXMudGFiQmFyLnRhYnM7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEJvdHRvbU5hdkNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgdGFicygpOiBRdWVyeUxpc3Q8SWd4VGFiQ29tcG9uZW50PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0NvbnRlbnRUYWJzID8gdGhpcy5jb250ZW50VGFicyA6IHRoaXMudmlld1RhYnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYElneFRhYlBhbmVsQ29tcG9uZW50YCBlbGVtZW50cyBpbiB0aGUgdGFiIGJhciBjb21wb25lbnQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB0YWJQYW5lbHM6IFF1ZXJ5TGlzdDxJZ3hUYWJQYW5lbENvbXBvbmVudD4gPSB0aGlzLnRhYkJhci5wYW5lbHM7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEJvdHRvbU5hdkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBJZ3hUYWJQYW5lbENvbXBvbmVudCkpXG4gICAgcHVibGljIHBhbmVsczogUXVlcnlMaXN0PElneFRhYlBhbmVsQ29tcG9uZW50PjtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgYGlkYCBvZiB0aGUgdGFiIGJhci5cbiAgICAgKiBJZiBub3Qgc2V0LCB0aGUgYGlkYCBvZiB0aGUgZmlyc3QgdGFiIGJhciBjb21wb25lbnQgd2lsbCBiZSBgXCJpZ3gtYm90dG9tLW5hdi0wXCJgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWJvdHRvbS1uYXYgaWQgPSBcIm15LWZpcnN0LXRhYi1iYXJcIj48L2lneC1ib3R0b20tbmF2PlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdGFiQmFySWQgPSAgdGhpcy50YWJCYXIuaWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEJvdHRvbU5hdkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWQgPSBgaWd4LWJvdHRvbS1uYXYtJHtORVhUX0lEKyt9YDtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gYSBuZXcgdGFiIGlzIHNlbGVjdGVkLlxuICAgICAqIFByb3ZpZGVzIHJlZmVyZW5jZXMgdG8gdGhlIGBJZ3hUYWJDb21wb25lbnRgIGFuZCBgSWd4VGFiUGFuZWxDb21wb25lbnRgIGFzIGV2ZW50IGFyZ3VtZW50cy5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1ib3R0b20tbmF2IChvblRhYmxlU2VsZWN0ZWQpID0gXCJvblRhYlNlbGVjdGVkKCRldmVudClcIj48aWd4LWJvdHRvbS1uYXY+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEJvdHRvbU5hdkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25UYWJTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SVNlbGVjdFRhYkV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gYSB0YWIgaXMgZGVzZWxlY3RlZC5cbiAgICAgKiBQcm92aWRlcyByZWZlcmVuY2VzIHRvIHRoZSBgSWd4VGFiQ29tcG9uZW50YCBhbmQgYElneFRhYlBhbmVsQ29tcG9uZW50YCBhcyBldmVudCBhcmd1bWVudHMuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtYm90dG9tLW5hdiAob25UYWJEZXNlbGVjdGVkKSA9IFwib25UYWJEZXNlbGVjdGVkKCRldmVudClcIj48aWd4LWJvdHRvbS1uYXY+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEJvdHRvbU5hdkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25UYWJEZXNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJU2VsZWN0VGFiRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYGluZGV4YCBvZiBzZWxlY3RlZCB0YWIvcGFuZWwgaW4gdGhlIHJlc3BlY3RpdmUgY29sbGVjdGlvbi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGluZGV4ID0gIHRoaXMudGFiQmFyLnNlbGVjdGVkSW5kZXg7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEJvdHRvbU5hdkNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3RlZEluZGV4ID0gLTE7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgaXRlbVN0eWxlYCBvZiB0aGUgdGFiIGJhci5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGl0ZW1TdHlsZSA9ICB0aGlzLnRhYkJhci5pdGVtU3R5bGU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEJvdHRvbU5hdkNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaXRlbVN0eWxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtU3R5bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBoYXNDb250ZW50VGFicygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvbnRlbnRUYWJzICYmIHRoaXMuY29udGVudFRhYnMubGVuZ3RoID4gMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfaXRlbVN0eWxlID0gJ2lneC1ib3R0b20tbmF2JztcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIHRhYiBpbiB0aGUgdGFiIGJhci5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRhYiA9ICB0aGlzLnRhYkJhci5zZWxlY3RlZFRhYjtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Qm90dG9tTmF2Q29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkVGFiKCk6IElneFRhYkNvbXBvbmVudCB7XG4gICAgICAgIGlmICh0aGlzLnRhYnMgJiYgdGhpcy5zZWxlY3RlZEluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhYnMudG9BcnJheSgpW3RoaXMuc2VsZWN0ZWRJbmRleF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgLy8gaW5pdGlhbCBzZWxlY3Rpb25cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGFibGVQYW5lbHMgPSB0aGlzLnBhbmVscy5maWx0ZXIoKHApID0+ICFwLmRpc2FibGVkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYW5lbCA9IHNlbGVjdGFibGVQYW5lbHNbMF07XG4gICAgICAgICAgICAgICAgaWYgKHBhbmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhbmVsLnNlbGVjdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignb25UYWJTZWxlY3RlZCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIF9zZWxlY3RlZFBhbmVsSGFuZGxlcihhcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0NvbnRlbnRUYWJzKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBhcmdzLnRhYi5pbmRleDtcbiAgICAgICAgICAgIHRoaXMuY29udGVudFRhYnMuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0ICE9PSBhcmdzLnRhYikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZXNlbGVjdFRhYih0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhcmdzLnBhbmVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gYXJncy5wYW5lbC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLnBhbmVscy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwLmluZGV4ICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rlc2VsZWN0UGFuZWwocCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2Rlc2VsZWN0UGFuZWwocGFuZWw6IElneFRhYlBhbmVsQ29tcG9uZW50KSB7XG4gICAgICAgIC8vIENhbm5vdCBkZXNlbGVjdCB0aGUgc2VsZWN0ZWQgdGFiIC0gdGhpcyB3aWxsIG1lYW4gdGhhdCB0aGVyZSB3aWxsIGJlIG5vdCBzZWxlY3RlZCB0YWIgbGVmdFxuICAgICAgICBpZiAocGFuZWwuZGlzYWJsZWQgfHwgdGhpcy5zZWxlY3RlZFRhYi5pbmRleCA9PT0gcGFuZWwuaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhbmVsLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vblRhYkRlc2VsZWN0ZWQuZW1pdCh7IHRhYjogdGhpcy50YWJzW3BhbmVsLmluZGV4XSwgcGFuZWwgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGVzZWxlY3RUYWIoYVRhYjogSWd4VGFiQ29tcG9uZW50KSB7XG4gICAgICAgIGFUYWIuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uVGFiRGVzZWxlY3RlZC5lbWl0KHsgdGFiOiBhVGFiLCBwYW5lbDogbnVsbCB9KTtcbiAgICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBJZ3hUYWJQYW5lbENvbXBvbmVudCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lneC10YWItcGFuZWwnLFxuICAgIHRlbXBsYXRlVXJsOiAndGFiLXBhbmVsLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hUYWJQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0NoZWNrZWQge1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfaXRlbVN0eWxlID0gJ2lneC10YWItcGFuZWwnO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfaXNTZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgbGFiZWxgIG9mIHRoZSB0YWIgcGFuZWwuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtdGFiLXBhbmVsIFtsYWJlbF0gPSBcIidUYWIgcGFuZWwgbGFiZWwnXCI+PGlneC10YWItcGFuZWw+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB0YWJQYW5lbExhYmVsID0gdGhpcy50YWJQYW5lbC5sYWJlbDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VGFiUGFuZWxDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbGFiZWw6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyAgdGhlIGBpY29uYCBvZiB0aGUgdGFiIHBhbmVsLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXRhYi1wYW5lbCBbaWNvbl0gPSBcInBhbmVsX2ljb25cIj48aWd4LXRhYi1wYW5lbD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRhYlBhbmVsSWNvbiA9ICB0aGlzLnRhYlBhbmVsLmljb247XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFRhYlBhbmVsQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGljb246IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB3aGV0aGVyIHRoZSB0YWIgcGFuZWwgaXMgZGlzYWJsZWQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtdGFiLXBhbmVsIFtkaXNhYmxlZF0gPSBcInRydWVcIj48aWd4LXRhYi1wYW5lbD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzRGlzYWJsZWQgPSB0aGlzLnRhYlBhbmVsLmRpc2FibGVkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hUYWJQYW5lbENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHJvbGUgb2YgdGhlIHRhYiBwYW5lbC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRhYlBhbmVsUm9sZSA9IHRoaXMudGFiUGFuZWwucm9sZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VGFiUGFuZWxDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHB1YmxpYyByb2xlID0gJ3RhYnBhbmVsJztcblxuICAgIC8qKlxuICAgICAqIEdldHMgd2hldGhlciBhIHRhYiBwYW5lbCB3aWxsIGhhdmUgYGlneC1ib3R0b20tbmF2X19wYW5lbGAgY2xhc3MuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBzdHlsZUNsYXNzID0gdGhpcy50YWJQYW5lbC5zdHlsZUNsYXNzO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hUYWJQYW5lbENvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWJvdHRvbS1uYXZfX3BhbmVsJylcbiAgICBnZXQgc3R5bGVDbGFzcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICghdGhpcy5pc1NlbGVjdGVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgd2hldGhlciBhIHRhYiBwYW5lbCBpcyBzZWxlY3RlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy50YWJQYW5lbC5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzU2VsZWN0ZWQgPSAgdGhpcy50YWJQYW5lbC5pc1NlbGVjdGVkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hUYWJQYW5lbENvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWJvdHRvbS1uYXZfX3BhbmVsLS1zZWxlY3RlZCcpXG4gICAgcHVibGljIGdldCBpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNTZWxlY3RlZDtcbiAgICB9XG4gICAgcHVibGljIHNldCBpc1NlbGVjdGVkKG5ld1ZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1NlbGVjdGVkICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNTZWxlY3RlZCA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYGl0ZW1TdHlsZWAgb2YgdGhlIHRhYiBwYW5lbC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGl0ZW1TdHlsZSA9IHRoaXMudGFiUGFuZWwuaXRlbVN0eWxlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hUYWJQYW5lbENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaXRlbVN0eWxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtU3R5bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdGFiIGFzc29jaWF0ZWQgd2l0aCB0aGUgcGFuZWwuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB0YWIgPSB0aGlzLnRhYlBhbmVsLnJlbGF0ZWRUYWI7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFRhYlBhbmVsQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IHJlbGF0ZWRUYWIoKTogSWd4VGFiQ29tcG9uZW50IHtcbiAgICAgICAgaWYgKHRoaXMuX3RhYkJhci50YWJzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFiQmFyLnRhYnMudG9BcnJheSgpW3RoaXMuaW5kZXhdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY2hhbmdlcyBhbmQgdXBkYXRlcyBhY2NvcmRpbmdseSBhcHBsaWVkIHRvIHRoZSB0YWIvcGFuZWwuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgSWd4VGFiQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IGNoYW5nZXNDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWxhdGVkVGFiID8gdGhpcy5yZWxhdGVkVGFiLmNoYW5nZXNDb3VudCA6IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaW5kZXggb2YgYSBwYW5lbCBpbiB0aGUgcGFuZWxzIGNvbGxlY3Rpb24uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBwYW5lbEluZGV4ID0gIHRoaXMudGFiUGFuZWwuaW5kZXhcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VGFiUGFuZWxDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgaW5kZXgoKSB7XG4gICAgICAgIGlmICh0aGlzLl90YWJCYXIucGFuZWxzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFiQmFyLnBhbmVscy50b0FycmF5KCkuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHRhYiB0ZW1wbGF0ZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRhYlRlbXBsYXRlID0gdGhpcy50YWJQYW5lbC5jdXN0b21UYWJUZW1wbGF0ZVxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hUYWJQYW5lbENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldCBjdXN0b21UYWJUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhYlRlbXBsYXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHRhYiB0ZW1wbGF0ZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy50YWJQYW5lbC5jdXN0b21UYWJUZW1wbGF0ZSh0YWJUZW1wbGF0ZSk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFRhYlBhbmVsQ29tcG9uZW50XG4gICAgICovXG4gICAgc2V0IGN1c3RvbVRhYlRlbXBsYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgICAgIHRoaXMuX3RhYlRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdGFiVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneFRhYlRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IElneFRhYlRlbXBsYXRlRGlyZWN0aXZlLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgdGFiVGVtcGxhdGU6IElneFRhYlRlbXBsYXRlRGlyZWN0aXZlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGFiQmFyOiBJZ3hCb3R0b21OYXZDb21wb25lbnQsIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy50YWJUZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fdGFiVGVtcGxhdGUgPSB0aGlzLnRhYlRlbXBsYXRlLnRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgYGlneC10YWItJHt0aGlzLmluZGV4fWApO1xuICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGBpZ3gtYm90dG9tLW5hdl9fcGFuZWwtJHt0aGlzLmluZGV4fWApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdHMgdGhlIGN1cnJlbnQgdGFiIGFuZCB0aGUgdGFiIHBhbmVsLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnRhYlBhbmVsLnNlbGVjdCgpO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hUYWJQYW5lbENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuX3RhYkJhci5zZWxlY3RlZEluZGV4ID09PSB0aGlzLmluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fdGFiQmFyLm9uVGFiU2VsZWN0ZWQuZW1pdCh7IHRhYjogdGhpcy5fdGFiQmFyLnRhYnMudG9BcnJheSgpW3RoaXMuaW5kZXhdLCBwYW5lbDogdGhpcyB9KTtcbiAgICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBJZ3hUYWJDb21wb25lbnQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LXRhYicsXG4gICAgdGVtcGxhdGVVcmw6ICd0YWIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneFRhYkNvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYHJvbGVgIGF0dHJpYnV0ZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRhYlJvbGUgPSB0aGlzLnRhYi5yb2xlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hUYWJDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gICAgcHVibGljIHJvbGUgPSAndGFiJztcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBwdWJsaWMgaWQgPSAnaWd4LXRhYi0nICsgdGhpcy5pbmRleDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbGFiZWwnKVxuICAgIHB1YmxpYyBhcmlhTGFiZWwgPSB0aGlzLmxhYmVsO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kaXNhYmxlZCcpXG4gICAgcHVibGljIGFyaWFEaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXNlbGVjdGVkJylcbiAgICBwdWJsaWMgYXJpYVNlbGVjdGVkID0gdGhpcy5pc1NlbGVjdGVkO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1jb250cm9scycpXG4gICAgcHVibGljIGFyaWFDb250cm9scyA9ICdpZ3gtdGFiLXBhbmVsLScgKyB0aGlzLmluZGV4O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcGFuZWwgYXNzb2NpYXRlZCB3aXRoIHRoZSB0YWIuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB0YWJQYW5lbCA9ICB0aGlzLnRhYi5yZWxhdGVkUGFuZWw7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFRhYkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJlbGF0ZWRQYW5lbDogSWd4VGFiUGFuZWxDb21wb25lbnQ7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9sYWJlbDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgbGFiZWxgIG9mIHRoZSB0YWIgcGFuZWwuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtdGFiIFtsYWJlbF0gPSBcIidUYWIgbGFiZWwnXCI+PGlneC10YWI+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB0YWJMYWJlbCA9IHRoaXMudGFiLmxhYmVsO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hUYWJDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgbGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlZFBhbmVsID8gdGhpcy5yZWxhdGVkUGFuZWwubGFiZWwgOiB0aGlzLl9sYWJlbDtcbiAgICB9XG4gICAgcHVibGljIHNldCBsYWJlbChuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbGF0ZWRQYW5lbCkge1xuICAgICAgICAgICAgdGhpcy5yZWxhdGVkUGFuZWwubGFiZWwgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sYWJlbCA9IG5ld1ZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2ljb246IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyAgdGhlIGBpY29uYCBvZiB0aGUgdGFiIHBhbmVsLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXRhYiBbaWNvbl0gPSBcInRhYl9pY29uXCI+PGlneC10YWI+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB0YWJJY29uID0gIHRoaXMudGFiLmljb247XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFRhYkNvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpY29uKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbGF0ZWRQYW5lbCA/IHRoaXMucmVsYXRlZFBhbmVsLmljb24gOiB0aGlzLl9pY29uO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGljb24obmV3VmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5yZWxhdGVkUGFuZWwpIHtcbiAgICAgICAgICAgIHRoaXMucmVsYXRlZFBhbmVsLmljb24gPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pY29uID0gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfY2hhbmdlc0NvdW50ID0gMDsgLy8gY2hhbmdlcyBhbmQgdXBkYXRlcyBhY2NvcmRpbmdseSBhcHBsaWVkIHRvIHRoZSB0YWIuXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjaGFuZ2VzIGFuZCB1cGRhdGVzIGFjY29yZGluZ2x5IGFwcGxpZWQgdG8gdGhlIHRhYi5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBJZ3hUYWJDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXQgY2hhbmdlc0NvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGFuZ2VzQ291bnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgd2hldGhlciB0aGUgdGFiIGlzIGRpc2FibGVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNEaXNhYmxlZCA9IHRoaXMudGFiLmRpc2FibGVkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hUYWJDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlZFBhbmVsID8gdGhpcy5yZWxhdGVkUGFuZWwuZGlzYWJsZWQgOiB0aGlzLl9kaXNhYmxlZDtcbiAgICB9XG4gICAgc2V0IGRpc2FibGVkKG5ld1ZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbGF0ZWRQYW5lbCkge1xuICAgICAgICAgICAgdGhpcy5yZWxhdGVkUGFuZWwuZGlzYWJsZWQgPSBuZXdWYWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2Rpc2FibGVkID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgX3NlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHdoZXRoZXIgdGhlIHRhYiBpcyBzZWxlY3RlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzU2VsZWN0ZWQgID0gdGhpcy50YWIuaXNTZWxlY3RlZDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VGFiQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBzZXQgaXNTZWxlY3RlZChuZXdWYWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5yZWxhdGVkUGFuZWwpIHtcbiAgICAgICAgICAgIHRoaXMucmVsYXRlZFBhbmVsLmlzU2VsZWN0ZWQgPSBuZXdWYWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zZWxlY3RlZCAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkID0gbmV3VmFsdWU7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90YWJCYXIub25UYWJTZWxlY3RlZC5lbWl0KHsgdGFiOiB0aGlzLCBwYW5lbDogbnVsbCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgaXNTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlZFBhbmVsID8gdGhpcy5yZWxhdGVkUGFuZWwuaXNTZWxlY3RlZCA6IHRoaXMuX3NlbGVjdGVkO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWJvdHRvbS1uYXZfX21lbnUtaXRlbS0tc2VsZWN0ZWQnKVxuICAgIHB1YmxpYyBnZXQgY3NzQ2xhc3NTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZDtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1ib3R0b20tbmF2X19tZW51LWl0ZW0tLWRpc2FibGVkJylcbiAgICBwdWJsaWMgZ2V0IGNzc0NsYXNzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVkO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWJvdHRvbS1uYXZfX21lbnUtaXRlbScpXG4gICAgcHVibGljIGdldCBjc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5pc1NlbGVjdGVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgaW5kZXhgIG9mIHRoZSB0YWIuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB0YWJJbmRleCA9IHRoaXMudGFiLmluZGV4O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hUYWJDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGluZGV4KCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl90YWJCYXIudGFicykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhYkJhci50YWJzLnRvQXJyYXkoKS5pbmRleE9mKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqQGhpZGRlbiovXG4gICAgQFZpZXdDaGlsZCgnZGVmYXVsdFRhYlRlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGRlZmF1bHRUYWJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIC8qKkBoaWRkZW4qL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4VGFiVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogSWd4VGFiVGVtcGxhdGVEaXJlY3RpdmUsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCBjdXN0b21UYWJUZW1wbGF0ZURpcjogSWd4VGFiVGVtcGxhdGVEaXJlY3RpdmU7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBgdGVtcGxhdGVgIGZvciB0aGlzIElneFRhYkNvbXBvbmVudC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRhYkl0ZW1UZW1wbGF0ZSA9IHRoaXMudGFiSXRlbS50ZW1wbGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VGFiQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldCB0ZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICAgICAgaWYgKHRoaXMucmVsYXRlZFBhbmVsICYmIHRoaXMucmVsYXRlZFBhbmVsLmN1c3RvbVRhYlRlbXBsYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWxhdGVkUGFuZWwuY3VzdG9tVGFiVGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tVGFiVGVtcGxhdGVEaXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1c3RvbVRhYlRlbXBsYXRlRGlyLnRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRUYWJUZW1wbGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBgY29udGV4dGAgb2JqZWN0IGZvciB0aGUgdGVtcGxhdGUgb2YgdGhpcyBgSWd4VGFiQ29tcG9uZW50YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRhYkl0ZW1Db250ZXh0ID0gdGhpcy50YWJJdGVtLmNvbnRleHQ7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCBjb250ZXh0KCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbGF0ZWRQYW5lbCA/IHRoaXMucmVsYXRlZFBhbmVsIDogdGhpcztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90YWJCYXI6IElneEJvdHRvbU5hdkNvbXBvbmVudCwgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdHMgdGhlIGN1cnJlbnQgdGFiIGFuZCB0aGUgYXNzb2NpYXRlZCBwYW5lbC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy50YWIuc2VsZWN0KCk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFRhYkNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbGF0ZWRQYW5lbCkge1xuICAgICAgICAgICAgdGhpcy5yZWxhdGVkUGFuZWwuc2VsZWN0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl90YWJCYXIub25UYWJTZWxlY3RlZC5lbWl0KHsgdGFiOiB0aGlzLCBwYW5lbDogbnVsbCB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gICAgcHVibGljIG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGVsZW1lbnRSZWYoKTogRWxlbWVudFJlZiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSWd4Qm90dG9tTmF2Q29tcG9uZW50LCBJZ3hUYWJQYW5lbENvbXBvbmVudCwgSWd4VGFiQ29tcG9uZW50LCBJZ3hUYWJUZW1wbGF0ZURpcmVjdGl2ZV0sXG4gICAgZXhwb3J0czogW0lneEJvdHRvbU5hdkNvbXBvbmVudCwgSWd4VGFiUGFuZWxDb21wb25lbnQsIElneFRhYkNvbXBvbmVudCwgSWd4VGFiVGVtcGxhdGVEaXJlY3RpdmVdLFxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIElneEJhZGdlTW9kdWxlLCBJZ3hJY29uTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hCb3R0b21OYXZNb2R1bGUge1xufVxuIl19