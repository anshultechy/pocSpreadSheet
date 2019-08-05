/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { Component, ContentChild, ContentChildren, ElementRef, EventEmitter, forwardRef, HostBinding, Input, NgModule, Output, QueryList, TemplateRef, ViewChild, Optional, Inject, Directive } from '@angular/core';
import { IgxRippleModule } from '../directives/ripple/ripple.directive';
import { IgxListItemComponent } from './list-item.component';
import { IgxListBase, IgxDataLoadingTemplateDirective, IgxEmptyListTemplateDirective, IgxListItemLeftPanningTemplateDirective, IgxListItemRightPanningTemplateDirective } from './list.common';
import { DisplayDensityToken, DisplayDensity } from '../core/density';
/** @type {?} */
var NEXT_ID = 0;
/**
 * @record
 */
export function IPanStateChangeEventArgs() { }
if (false) {
    /** @type {?} */
    IPanStateChangeEventArgs.prototype.oldState;
    /** @type {?} */
    IPanStateChangeEventArgs.prototype.newState;
    /** @type {?} */
    IPanStateChangeEventArgs.prototype.item;
}
/**
 * @record
 */
export function IListItemClickEventArgs() { }
if (false) {
    /** @type {?} */
    IListItemClickEventArgs.prototype.item;
    /** @type {?} */
    IListItemClickEventArgs.prototype.event;
    /** @type {?} */
    IListItemClickEventArgs.prototype.direction;
}
/**
 * @record
 */
export function IListItemPanningEventArgs() { }
if (false) {
    /** @type {?} */
    IListItemPanningEventArgs.prototype.item;
    /** @type {?} */
    IListItemPanningEventArgs.prototype.direction;
    /** @type {?} */
    IListItemPanningEventArgs.prototype.keepItem;
}
/**
 * **Ignite UI for Angular List** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/list.html)
 *
 * The Ignite UI List displays rows of items and supports one or more header items as well as search and filtering
 * of list items. Each list item is completely templateable and will support any valid HTML or Angular component.
 *
 * Example:
 * ```html
 * <igx-list>
 *   <igx-list-item isHeader="true">Contacts</igx-list-item>
 *   <igx-list-item *ngFor="let contact of contacts">
 *     <span class="name">{{ contact.name }}</span>
 *     <span class="phone">{{ contact.phone }}</span>
 *   </igx-list-item>
 * </igx-list>
 * ```
 */
/**
 * igxListThumbnail is container for the List media
 * Use it to wrap anything you want to be used as a thumbnail.
 */
var IgxListThumbnailDirective = /** @class */ (function () {
    function IgxListThumbnailDirective() {
    }
    IgxListThumbnailDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[igxListThumbnail]'
                },] }
    ];
    return IgxListThumbnailDirective;
}());
export { IgxListThumbnailDirective };
/**
 * igxListAction is container for the List action
 * Use it to wrap anything you want to be used as a list action: icon, checkbox...
 */
var IgxListActionDirective = /** @class */ (function () {
    function IgxListActionDirective() {
    }
    IgxListActionDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[igxListAction]'
                },] }
    ];
    return IgxListActionDirective;
}());
export { IgxListActionDirective };
/**
 * igxListLine is container for the List text content
 * Use it to wrap anything you want to be used as a plane text.
 */
var IgxListLineDirective = /** @class */ (function () {
    function IgxListLineDirective() {
    }
    IgxListLineDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[igxListLine]'
                },] }
    ];
    return IgxListLineDirective;
}());
export { IgxListLineDirective };
/**
 * igxListLineTitle is a directive that add class to the target element
 * Use it to make anything to look like list Title.
 */
var IgxListLineTitleDirective = /** @class */ (function () {
    function IgxListLineTitleDirective() {
        this.cssClass = 'igx-list__item-line-title';
    }
    IgxListLineTitleDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[igxListLineTitle]'
                },] }
    ];
    IgxListLineTitleDirective.propDecorators = {
        cssClass: [{ type: HostBinding, args: ['class.igx-list__item-line-title',] }]
    };
    return IgxListLineTitleDirective;
}());
export { IgxListLineTitleDirective };
if (false) {
    /** @type {?} */
    IgxListLineTitleDirective.prototype.cssClass;
}
/**
 * igxListLineSubTitle is a directive that add class to the target element
 * Use it to make anything to look like list Subtitle.
 */
var IgxListLineSubTitleDirective = /** @class */ (function () {
    function IgxListLineSubTitleDirective() {
        this.cssClass = 'igx-list__item-line-subtitle';
    }
    IgxListLineSubTitleDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[igxListLineSubTitle]'
                },] }
    ];
    IgxListLineSubTitleDirective.propDecorators = {
        cssClass: [{ type: HostBinding, args: ['class.igx-list__item-line-subtitle',] }]
    };
    return IgxListLineSubTitleDirective;
}());
export { IgxListLineSubTitleDirective };
if (false) {
    /** @type {?} */
    IgxListLineSubTitleDirective.prototype.cssClass;
}
var IgxListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxListComponent, _super);
    function IgxListComponent(element, _displayDensityOptions) {
        var _this = _super.call(this, _displayDensityOptions) || this;
        _this.element = element;
        _this._displayDensityOptions = _displayDensityOptions;
        /**
         * Provides a threshold after which the item's panning will be completed automatically.
         * By default this property is set to 0.5 which is 50% of the list item's width.
         * ```typescript
         * this.list.panEndTriggeringThreshold = 0.8;
         * ```
         */
        _this.panEndTriggeringThreshold = 0.5;
        /**
         * Sets/gets the `id` of the list.
         * If not set, the `id` of the first list component will be `"igx-list-0"`.
         * ```html
         * <igx-list id = "my-first-list"></igx-list>
         * ```
         * ```typescript
         * let listId =  this.list.id;
         * ```
         * \@memberof IgxListComponent
         */
        _this.id = "igx-list-" + NEXT_ID++;
        /**
         * Sets/gets whether the left panning of an item is allowed.
         * Default value is `false`.
         * ```html
         *  <igx-list [allowLeftPanning] = "true"></igx-list>
         * ```
         * ```typescript
         * let isLeftPanningAllowed = this.list.allowLeftPanning;
         * ```
         * \@memberof IgxListComponent
         */
        _this.allowLeftPanning = false;
        /**
         * Sets/gets whether the right panning of an item is allowed.
         * Default value is `false`.
         * ```html
         *  <igx-list [allowRightPanning] = "true"></igx-list>
         * ```
         * ```typescript
         * let isRightPanningAllowed = this.list.allowRightPanning;
         * ```
         * \@memberof IgxListComponent
         */
        _this.allowRightPanning = false;
        /**
         * Sets/gets whether the list is currently loading data.
         * Set it to display the dataLoadingTemplate while data is being retrieved.
         * Default value is `false`.
         * ```html
         *  <igx-list [isLoading]="true"></igx-list>
         * ```
         * ```typescript
         * let isLoading = this.list.isLoading;
         * ```
         * \@memberof IgxListComponent
         */
        _this.isLoading = false;
        /**
         * Emits an event within the current list when left pan gesture is executed on a list item.
         * Provides a reference to an object of type `IListItemPanningEventArgs` as an event argument.
         * ```html
         * <igx-list [allowLeftPanning]="true" (onLeftPan)="onLeftPan($event)"></igx-list>
         * ```
         * \@memberof IgxListComponent
         */
        _this.onLeftPan = new EventEmitter();
        /**
         * Emits an event within the current list when right pan gesture is executed on a list item.
         * Provides a reference to an object of type `IListItemPanningEventArgs` as an event argument.
         * ```html
         * <igx-list [allowRightPanning]="true" (onRightPan)="onRightPan($event)"></igx-list>
         * ```
         * \@memberof IgxListComponent
         */
        _this.onRightPan = new EventEmitter();
        /**
         * Emits an event within the current list when pan gesture is executed on list item.
         * Provides references to the `IgxListItemComponent` and `IgxListPanState` as event arguments.
         * ```html
         * <igx-list (onPanStateChange) = "onPanStateChange($event)"></igx-list>
         * ```
         * \@memberof IgxListComponent
         */
        _this.onPanStateChange = new EventEmitter();
        /**
         * Emits an event within the current list when a list item has been clicked.
         * Provides references to the `IgxListItemComponent` and `Event` as event arguments.
         *  ```html
         * <igx-list (onItemClicked) = "onItemClicked($event)"></igx-list>
         * ```
         * \@memberof IgxListComponent
         */
        _this.onItemClicked = new EventEmitter();
        return _this;
    }
    Object.defineProperty(IgxListComponent.prototype, "sortedChildren", {
        /**
         * @hidden
         * @internal
         */
        get: /**
         * @hidden
         * \@internal
         * @protected
         * @return {?}
         */
        function () {
            if (this.children !== undefined) {
                return this.children.toArray()
                    .sort(function (a, b) {
                    return a.index - b.index;
                });
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxListComponent.prototype, "role", {
        /**
         * Gets the `role` attribute.
         * ```typescript
         * let listRole =  this.list.role;
         * ```
         * @memberof IgxListComponent
         */
        get: /**
         * Gets the `role` attribute.
         * ```typescript
         * let listRole =  this.list.role;
         * ```
         * \@memberof IgxListComponent
         * @return {?}
         */
        function () {
            return 'list';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxListComponent.prototype, "isListEmpty", {
        /**
         * Returns boolean indicating if the list is empty.
         * ```typescript
         * let isEmpty =  this.list.isListEmpty;
         * ```
         * @memberof IgxListComponent
         */
        get: /**
         * Returns boolean indicating if the list is empty.
         * ```typescript
         * let isEmpty =  this.list.isListEmpty;
         * ```
         * \@memberof IgxListComponent
         * @return {?}
         */
        function () {
            return !this.children || this.children.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxListComponent.prototype, "cssClass", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return !this.isListEmpty && this.displayDensity === DisplayDensity.comfortable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxListComponent.prototype, "cssClassCompact", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return !this.isListEmpty && this.displayDensity === DisplayDensity.compact;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxListComponent.prototype, "cssClassCosy", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return !this.isListEmpty && this.displayDensity === DisplayDensity.cosy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxListComponent.prototype, "items", {
        /**
         * Returns the `items` in the list excluding the headers.
         * ```typescript
         * let listItems: IgxListItemComponent[] = this.list.items;
         * ```
         * @memberof IgxListComponent
         */
        get: /**
         * Returns the `items` in the list excluding the headers.
         * ```typescript
         * let listItems: IgxListItemComponent[] = this.list.items;
         * ```
         * \@memberof IgxListComponent
         * @return {?}
         */
        function () {
            var e_1, _a;
            /** @type {?} */
            var items = [];
            if (this.children !== undefined) {
                try {
                    for (var _b = tslib_1.__values(this.sortedChildren), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var child = _c.value;
                        if (!child.isHeader) {
                            items.push(child);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            return items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxListComponent.prototype, "headers", {
        /**
         * Returns the headers in the list.
         * ```typescript
         * let listHeaders: IgxListItemComponent[] =  this.list.headers;
         * ```
         * @memberof IgxListComponent
         */
        get: /**
         * Returns the headers in the list.
         * ```typescript
         * let listHeaders: IgxListItemComponent[] =  this.list.headers;
         * ```
         * \@memberof IgxListComponent
         * @return {?}
         */
        function () {
            var e_2, _a;
            /** @type {?} */
            var headers = [];
            if (this.children !== undefined) {
                try {
                    for (var _b = tslib_1.__values(this.children.toArray()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var child = _c.value;
                        if (child.isHeader) {
                            headers.push(child);
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            return headers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxListComponent.prototype, "context", {
        /**
         * Returns the `context` object which represents the `template context` binding into the `list container`
         * by providing the `$implicit` declaration which is the `IgxListComponent` itself.
         * ```typescript
         * let listComponent =  this.list.context;
         * ```
         */
        get: /**
         * Returns the `context` object which represents the `template context` binding into the `list container`
         * by providing the `$implicit` declaration which is the `IgxListComponent` itself.
         * ```typescript
         * let listComponent =  this.list.context;
         * ```
         * @return {?}
         */
        function () {
            return {
                $implicit: this
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxListComponent.prototype, "template", {
        /**
         * Returns the `template` of an empty list.
         * ```typescript
         * let listTemplate = this.list.template;
         * ```
         * @memberof IgxListComponent
         */
        get: /**
         * Returns the `template` of an empty list.
         * ```typescript
         * let listTemplate = this.list.template;
         * ```
         * \@memberof IgxListComponent
         * @return {?}
         */
        function () {
            if (this.isLoading) {
                return this.dataLoadingTemplate ? this.dataLoadingTemplate.template : this.defaultDataLoadingTemplate;
            }
            else {
                return this.emptyListTemplate ? this.emptyListTemplate.template : this.defaultEmptyListTemplate;
            }
        },
        enumerable: true,
        configurable: true
    });
    IgxListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-list',
                    template: "<ng-content></ng-content>\n\n<ng-template #defaultEmptyList>\n    <article class=\"message\">\n        There are no items in the list.\n    </article>\n</ng-template>\n\n<ng-template #defaultDataLoading>\n    <article class=\"message\">\n        Loading data from the server...\n    </article>\n</ng-template>\n\n<ng-container *ngIf=\"!children || children.length === 0 || isLoading\">\n    <ng-container *ngTemplateOutlet=\"template; context: context\">\n    </ng-container>\n</ng-container>\n",
                    providers: [{ provide: IgxListBase, useExisting: IgxListComponent }]
                }] }
    ];
    /** @nocollapse */
    IgxListComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
    ]; };
    IgxListComponent.propDecorators = {
        children: [{ type: ContentChildren, args: [forwardRef(function () { return IgxListItemComponent; }),] }],
        emptyListTemplate: [{ type: ContentChild, args: [IgxEmptyListTemplateDirective, { read: IgxEmptyListTemplateDirective, static: true },] }],
        dataLoadingTemplate: [{ type: ContentChild, args: [IgxDataLoadingTemplateDirective, { read: IgxDataLoadingTemplateDirective, static: true },] }],
        listItemLeftPanningTemplate: [{ type: ContentChild, args: [IgxListItemLeftPanningTemplateDirective, { read: IgxListItemLeftPanningTemplateDirective, static: true },] }],
        listItemRightPanningTemplate: [{ type: ContentChild, args: [IgxListItemRightPanningTemplateDirective, { read: IgxListItemRightPanningTemplateDirective, static: true },] }],
        panEndTriggeringThreshold: [{ type: Input }],
        defaultEmptyListTemplate: [{ type: ViewChild, args: ['defaultEmptyList', { read: TemplateRef, static: true },] }],
        defaultDataLoadingTemplate: [{ type: ViewChild, args: ['defaultDataLoading', { read: TemplateRef, static: true },] }],
        id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
        allowLeftPanning: [{ type: Input }],
        allowRightPanning: [{ type: Input }],
        isLoading: [{ type: Input }],
        onLeftPan: [{ type: Output }],
        onRightPan: [{ type: Output }],
        onPanStateChange: [{ type: Output }],
        onItemClicked: [{ type: Output }],
        role: [{ type: HostBinding, args: ['attr.role',] }],
        isListEmpty: [{ type: HostBinding, args: ['class.igx-list-empty',] }],
        cssClass: [{ type: HostBinding, args: ['class.igx-list',] }],
        cssClassCompact: [{ type: HostBinding, args: ['class.igx-list--compact',] }],
        cssClassCosy: [{ type: HostBinding, args: ['class.igx-list--cosy',] }]
    };
    return IgxListComponent;
}(IgxListBase));
export { IgxListComponent };
if (false) {
    /**
     * Returns a collection of all items and headers in the list.
     * ```typescript
     * let listChildren: QueryList = this.list.children;
     * ```
     * \@memberof IgxListComponent
     * @type {?}
     */
    IgxListComponent.prototype.children;
    /**
     * Returns the template which will be used by the IgxList in case there are no list items defined and `isLoading` is set to `false`.
     * ```typescript
     * let emptyTemplate = this.list.emptyListTemplate;
     * ```
     * \@memberof IgxListComponent
     * @type {?}
     */
    IgxListComponent.prototype.emptyListTemplate;
    /**
     * Returns the template which will be used by the IgxList in case there are no list items defined and `isLoading` is set to `true`.
     * ```typescript
     * let loadingTemplate = this.list.dataLoadingTemplate;
     * ```
     * \@memberof IgxListComponent
     * @type {?}
     */
    IgxListComponent.prototype.dataLoadingTemplate;
    /**
     * Sets/gets the template shown when left panning a list item.
     * Default value is `null`.
     * ```html
     *  <igx-list [allowLeftPanning] = "true"></igx-list>
     * ```
     * ```typescript
     * let itemLeftPanTmpl = this.list.listItemLeftPanningTemplate;
     * ```
     * \@memberof IgxListComponent
     * @type {?}
     */
    IgxListComponent.prototype.listItemLeftPanningTemplate;
    /**
     * Sets/gets the template shown when right panning a list item.
     * Default value is `null`.
     * ```html
     *  <igx-list [allowLeftPanning] = "true"></igx-list>
     * ```
     * ```typescript
     * let itemRightPanTmpl = this.list.listItemRightPanningTemplate;
     * ```
     * \@memberof IgxListComponent
     * @type {?}
     */
    IgxListComponent.prototype.listItemRightPanningTemplate;
    /**
     * Provides a threshold after which the item's panning will be completed automatically.
     * By default this property is set to 0.5 which is 50% of the list item's width.
     * ```typescript
     * this.list.panEndTriggeringThreshold = 0.8;
     * ```
     * @type {?}
     */
    IgxListComponent.prototype.panEndTriggeringThreshold;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxListComponent.prototype.defaultEmptyListTemplate;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxListComponent.prototype.defaultDataLoadingTemplate;
    /**
     * Sets/gets the `id` of the list.
     * If not set, the `id` of the first list component will be `"igx-list-0"`.
     * ```html
     * <igx-list id = "my-first-list"></igx-list>
     * ```
     * ```typescript
     * let listId =  this.list.id;
     * ```
     * \@memberof IgxListComponent
     * @type {?}
     */
    IgxListComponent.prototype.id;
    /**
     * Sets/gets whether the left panning of an item is allowed.
     * Default value is `false`.
     * ```html
     *  <igx-list [allowLeftPanning] = "true"></igx-list>
     * ```
     * ```typescript
     * let isLeftPanningAllowed = this.list.allowLeftPanning;
     * ```
     * \@memberof IgxListComponent
     * @type {?}
     */
    IgxListComponent.prototype.allowLeftPanning;
    /**
     * Sets/gets whether the right panning of an item is allowed.
     * Default value is `false`.
     * ```html
     *  <igx-list [allowRightPanning] = "true"></igx-list>
     * ```
     * ```typescript
     * let isRightPanningAllowed = this.list.allowRightPanning;
     * ```
     * \@memberof IgxListComponent
     * @type {?}
     */
    IgxListComponent.prototype.allowRightPanning;
    /**
     * Sets/gets whether the list is currently loading data.
     * Set it to display the dataLoadingTemplate while data is being retrieved.
     * Default value is `false`.
     * ```html
     *  <igx-list [isLoading]="true"></igx-list>
     * ```
     * ```typescript
     * let isLoading = this.list.isLoading;
     * ```
     * \@memberof IgxListComponent
     * @type {?}
     */
    IgxListComponent.prototype.isLoading;
    /**
     * Emits an event within the current list when left pan gesture is executed on a list item.
     * Provides a reference to an object of type `IListItemPanningEventArgs` as an event argument.
     * ```html
     * <igx-list [allowLeftPanning]="true" (onLeftPan)="onLeftPan($event)"></igx-list>
     * ```
     * \@memberof IgxListComponent
     * @type {?}
     */
    IgxListComponent.prototype.onLeftPan;
    /**
     * Emits an event within the current list when right pan gesture is executed on a list item.
     * Provides a reference to an object of type `IListItemPanningEventArgs` as an event argument.
     * ```html
     * <igx-list [allowRightPanning]="true" (onRightPan)="onRightPan($event)"></igx-list>
     * ```
     * \@memberof IgxListComponent
     * @type {?}
     */
    IgxListComponent.prototype.onRightPan;
    /**
     * Emits an event within the current list when pan gesture is executed on list item.
     * Provides references to the `IgxListItemComponent` and `IgxListPanState` as event arguments.
     * ```html
     * <igx-list (onPanStateChange) = "onPanStateChange($event)"></igx-list>
     * ```
     * \@memberof IgxListComponent
     * @type {?}
     */
    IgxListComponent.prototype.onPanStateChange;
    /**
     * Emits an event within the current list when a list item has been clicked.
     * Provides references to the `IgxListItemComponent` and `Event` as event arguments.
     *  ```html
     * <igx-list (onItemClicked) = "onItemClicked($event)"></igx-list>
     * ```
     * \@memberof IgxListComponent
     * @type {?}
     */
    IgxListComponent.prototype.onItemClicked;
    /** @type {?} */
    IgxListComponent.prototype.element;
    /**
     * @type {?}
     * @protected
     */
    IgxListComponent.prototype._displayDensityOptions;
}
/**
 * @hidden
 */
var IgxListModule = /** @class */ (function () {
    function IgxListModule() {
    }
    IgxListModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        IgxListComponent,
                        IgxListItemComponent,
                        IgxListThumbnailDirective,
                        IgxListActionDirective,
                        IgxListLineDirective,
                        IgxListLineTitleDirective,
                        IgxListLineSubTitleDirective,
                        IgxDataLoadingTemplateDirective,
                        IgxEmptyListTemplateDirective,
                        IgxListItemLeftPanningTemplateDirective,
                        IgxListItemRightPanningTemplateDirective
                    ],
                    exports: [
                        IgxListComponent,
                        IgxListItemComponent,
                        IgxListThumbnailDirective,
                        IgxListActionDirective,
                        IgxListLineDirective,
                        IgxListLineTitleDirective,
                        IgxListLineSubTitleDirective,
                        IgxDataLoadingTemplateDirective,
                        IgxEmptyListTemplateDirective,
                        IgxListItemLeftPanningTemplateDirective,
                        IgxListItemRightPanningTemplateDirective
                    ],
                    imports: [
                        CommonModule,
                        IgxRippleModule
                    ]
                },] }
    ];
    return IgxListModule;
}());
export { IgxListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2xpc3QvbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNILFNBQVMsRUFDVCxZQUFZLEVBQ1osZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxRQUFRLEVBQ1IsTUFBTSxFQUFFLFNBQVMsRUFDcEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXhFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFDSCxXQUFXLEVBQ1gsK0JBQStCLEVBQy9CLDZCQUE2QixFQUU3Qix1Q0FBdUMsRUFDdkMsd0NBQXdDLEVBQzNDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBMEIsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBRTFGLE9BQU8sR0FBRyxDQUFDOzs7O0FBQ2YsOENBSUM7OztJQUhHLDRDQUEwQjs7SUFDMUIsNENBQTBCOztJQUMxQix3Q0FBMkI7Ozs7O0FBRy9CLDZDQUlDOzs7SUFIRyx1Q0FBMkI7O0lBQzNCLHdDQUFhOztJQUNiLDRDQUEyQjs7Ozs7QUFHL0IsK0NBSUM7OztJQUhHLHlDQUEyQjs7SUFDM0IsOENBQTJCOztJQUMzQiw2Q0FBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCdEI7SUFBQTtJQUt3QyxDQUFDOztnQkFMeEMsU0FBUyxTQUFDOztvQkFFUCxRQUFRLEVBQUUsb0JBQW9CO2lC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c0NBQ2tFOzs7Ozs7Ozs7O0lBVWxFLDRDQUN1RTs7Ozs7Ozs7OztJQVV2RSx5Q0FDbUU7O0lBbk12RCxtQ0FBMEI7Ozs7O0lBQ2xDLGtEQUFpRzs7Ozs7QUEwVHpHO0lBQUE7SUFpQ0EsQ0FBQzs7Z0JBakNBLFFBQVEsU0FBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YsZ0JBQWdCO3dCQUNoQixvQkFBb0I7d0JBQ3BCLHlCQUF5Qjt3QkFDekIsc0JBQXNCO3dCQUN0QixvQkFBb0I7d0JBQ3BCLHlCQUF5Qjt3QkFDekIsNEJBQTRCO3dCQUM1QiwrQkFBK0I7d0JBQy9CLDZCQUE2Qjt3QkFDN0IsdUNBQXVDO3dCQUN2Qyx3Q0FBd0M7cUJBQzNDO29CQUNELE9BQU8sRUFBRTt3QkFDTCxnQkFBZ0I7d0JBQ2hCLG9CQUFvQjt3QkFDcEIseUJBQXlCO3dCQUN6QixzQkFBc0I7d0JBQ3RCLG9CQUFvQjt3QkFDcEIseUJBQXlCO3dCQUN6Qiw0QkFBNEI7d0JBQzVCLCtCQUErQjt3QkFDL0IsNkJBQTZCO3dCQUM3Qix1Q0FBdUM7d0JBQ3ZDLHdDQUF3QztxQkFDM0M7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osZUFBZTtxQkFDbEI7aUJBQ0o7O0lBRUQsb0JBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQURZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgQ29udGVudENoaWxkLFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBmb3J3YXJkUmVmLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LFxuICAgIE5nTW9kdWxlLFxuICAgIE91dHB1dCxcbiAgICBRdWVyeUxpc3QsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgVmlld0NoaWxkLFxuICAgIE9wdGlvbmFsLFxuICAgIEluamVjdCwgRGlyZWN0aXZlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJZ3hSaXBwbGVNb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3JpcHBsZS9yaXBwbGUuZGlyZWN0aXZlJztcblxuaW1wb3J0IHsgSWd4TGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2xpc3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgICBJZ3hMaXN0QmFzZSxcbiAgICBJZ3hEYXRhTG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlLFxuICAgIElneEVtcHR5TGlzdFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIElneExpc3RQYW5TdGF0ZSxcbiAgICBJZ3hMaXN0SXRlbUxlZnRQYW5uaW5nVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgSWd4TGlzdEl0ZW1SaWdodFBhbm5pbmdUZW1wbGF0ZURpcmVjdGl2ZVxufSBmcm9tICcuL2xpc3QuY29tbW9uJztcbmltcG9ydCB7IElEaXNwbGF5RGVuc2l0eU9wdGlvbnMsIERpc3BsYXlEZW5zaXR5VG9rZW4sIERpc3BsYXlEZW5zaXR5IH0gZnJvbSAnLi4vY29yZS9kZW5zaXR5JztcblxubGV0IE5FWFRfSUQgPSAwO1xuZXhwb3J0IGludGVyZmFjZSBJUGFuU3RhdGVDaGFuZ2VFdmVudEFyZ3Mge1xuICAgIG9sZFN0YXRlOiBJZ3hMaXN0UGFuU3RhdGU7XG4gICAgbmV3U3RhdGU6IElneExpc3RQYW5TdGF0ZTtcbiAgICBpdGVtOiBJZ3hMaXN0SXRlbUNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTGlzdEl0ZW1DbGlja0V2ZW50QXJncyB7XG4gICAgaXRlbTogSWd4TGlzdEl0ZW1Db21wb25lbnQ7XG4gICAgZXZlbnQ6IEV2ZW50O1xuICAgIGRpcmVjdGlvbjogSWd4TGlzdFBhblN0YXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElMaXN0SXRlbVBhbm5pbmdFdmVudEFyZ3Mge1xuICAgIGl0ZW06IElneExpc3RJdGVtQ29tcG9uZW50O1xuICAgIGRpcmVjdGlvbjogSWd4TGlzdFBhblN0YXRlO1xuICAgIGtlZXBJdGVtOiBib29sZWFuO1xufVxuXG4vKipcbiAqICoqSWduaXRlIFVJIGZvciBBbmd1bGFyIExpc3QqKiAtXG4gKiBbRG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly93d3cuaW5mcmFnaXN0aWNzLmNvbS9wcm9kdWN0cy9pZ25pdGUtdWktYW5ndWxhci9hbmd1bGFyL2NvbXBvbmVudHMvbGlzdC5odG1sKVxuICpcbiAqIFRoZSBJZ25pdGUgVUkgTGlzdCBkaXNwbGF5cyByb3dzIG9mIGl0ZW1zIGFuZCBzdXBwb3J0cyBvbmUgb3IgbW9yZSBoZWFkZXIgaXRlbXMgYXMgd2VsbCBhcyBzZWFyY2ggYW5kIGZpbHRlcmluZ1xuICogb2YgbGlzdCBpdGVtcy4gRWFjaCBsaXN0IGl0ZW0gaXMgY29tcGxldGVseSB0ZW1wbGF0ZWFibGUgYW5kIHdpbGwgc3VwcG9ydCBhbnkgdmFsaWQgSFRNTCBvciBBbmd1bGFyIGNvbXBvbmVudC5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgaHRtbFxuICogPGlneC1saXN0PlxuICogICA8aWd4LWxpc3QtaXRlbSBpc0hlYWRlcj1cInRydWVcIj5Db250YWN0czwvaWd4LWxpc3QtaXRlbT5cbiAqICAgPGlneC1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IGNvbnRhY3Qgb2YgY29udGFjdHNcIj5cbiAqICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj57eyBjb250YWN0Lm5hbWUgfX08L3NwYW4+XG4gKiAgICAgPHNwYW4gY2xhc3M9XCJwaG9uZVwiPnt7IGNvbnRhY3QucGhvbmUgfX08L3NwYW4+XG4gKiAgIDwvaWd4LWxpc3QtaXRlbT5cbiAqIDwvaWd4LWxpc3Q+XG4gKiBgYGBcbiAqL1xuXG4vKipcbiAqIGlneExpc3RUaHVtYm5haWwgaXMgY29udGFpbmVyIGZvciB0aGUgTGlzdCBtZWRpYVxuICogVXNlIGl0IHRvIHdyYXAgYW55dGhpbmcgeW91IHdhbnQgdG8gYmUgdXNlZCBhcyBhIHRodW1ibmFpbC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICAgIHNlbGVjdG9yOiAnW2lneExpc3RUaHVtYm5haWxdJ1xufSlcblxuZXhwb3J0IGNsYXNzIElneExpc3RUaHVtYm5haWxEaXJlY3RpdmUge31cblxuLyoqXG4gKiBpZ3hMaXN0QWN0aW9uIGlzIGNvbnRhaW5lciBmb3IgdGhlIExpc3QgYWN0aW9uXG4gKiBVc2UgaXQgdG8gd3JhcCBhbnl0aGluZyB5b3Ugd2FudCB0byBiZSB1c2VkIGFzIGEgbGlzdCBhY3Rpb246IGljb24sIGNoZWNrYm94Li4uXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgICBzZWxlY3RvcjogJ1tpZ3hMaXN0QWN0aW9uXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBJZ3hMaXN0QWN0aW9uRGlyZWN0aXZlIHt9XG5cbi8qKlxuICogaWd4TGlzdExpbmUgaXMgY29udGFpbmVyIGZvciB0aGUgTGlzdCB0ZXh0IGNvbnRlbnRcbiAqIFVzZSBpdCB0byB3cmFwIGFueXRoaW5nIHlvdSB3YW50IHRvIGJlIHVzZWQgYXMgYSBwbGFuZSB0ZXh0LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gICAgc2VsZWN0b3I6ICdbaWd4TGlzdExpbmVdJ1xufSlcblxuZXhwb3J0IGNsYXNzIElneExpc3RMaW5lRGlyZWN0aXZlIHt9XG5cbi8qKlxuICogaWd4TGlzdExpbmVUaXRsZSBpcyBhIGRpcmVjdGl2ZSB0aGF0IGFkZCBjbGFzcyB0byB0aGUgdGFyZ2V0IGVsZW1lbnRcbiAqIFVzZSBpdCB0byBtYWtlIGFueXRoaW5nIHRvIGxvb2sgbGlrZSBsaXN0IFRpdGxlLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gICAgc2VsZWN0b3I6ICdbaWd4TGlzdExpbmVUaXRsZV0nXG59KVxuXG5leHBvcnQgY2xhc3MgSWd4TGlzdExpbmVUaXRsZURpcmVjdGl2ZSB7XG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtbGlzdF9faXRlbS1saW5lLXRpdGxlJylcbiAgICBwdWJsaWMgY3NzQ2xhc3MgPSAnaWd4LWxpc3RfX2l0ZW0tbGluZS10aXRsZSc7XG59XG5cbi8qKlxuICogaWd4TGlzdExpbmVTdWJUaXRsZSBpcyBhIGRpcmVjdGl2ZSB0aGF0IGFkZCBjbGFzcyB0byB0aGUgdGFyZ2V0IGVsZW1lbnRcbiAqIFVzZSBpdCB0byBtYWtlIGFueXRoaW5nIHRvIGxvb2sgbGlrZSBsaXN0IFN1YnRpdGxlLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gICAgc2VsZWN0b3I6ICdbaWd4TGlzdExpbmVTdWJUaXRsZV0nXG59KVxuXG5leHBvcnQgY2xhc3MgSWd4TGlzdExpbmVTdWJUaXRsZURpcmVjdGl2ZSB7XG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtbGlzdF9faXRlbS1saW5lLXN1YnRpdGxlJylcbiAgICBwdWJsaWMgY3NzQ2xhc3MgPSAnaWd4LWxpc3RfX2l0ZW0tbGluZS1zdWJ0aXRsZSc7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBJZ3hMaXN0QmFzZSwgdXNlRXhpc3Rpbmc6IElneExpc3RDb21wb25lbnQgfV1cbn0pXG5leHBvcnQgY2xhc3MgSWd4TGlzdENvbXBvbmVudCBleHRlbmRzIElneExpc3RCYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERpc3BsYXlEZW5zaXR5VG9rZW4pIHByb3RlY3RlZCBfZGlzcGxheURlbnNpdHlPcHRpb25zOiBJRGlzcGxheURlbnNpdHlPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKF9kaXNwbGF5RGVuc2l0eU9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBjb2xsZWN0aW9uIG9mIGFsbCBpdGVtcyBhbmQgaGVhZGVycyBpbiB0aGUgbGlzdC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGxpc3RDaGlsZHJlbjogUXVlcnlMaXN0ID0gdGhpcy5saXN0LmNoaWxkcmVuO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0Q29tcG9uZW50XG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IElneExpc3RJdGVtQ29tcG9uZW50KSlcbiAgICBwdWJsaWMgY2hpbGRyZW46IFF1ZXJ5TGlzdDxJZ3hMaXN0SXRlbUNvbXBvbmVudD47XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldCBzb3J0ZWRDaGlsZHJlbigpOiBJZ3hMaXN0SXRlbUNvbXBvbmVudFtdIHtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4udG9BcnJheSgpXG4gICAgICAgICAgICAgICAgLnNvcnQoKGE6IElneExpc3RJdGVtQ29tcG9uZW50LCBiOiBJZ3hMaXN0SXRlbUNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGVtcGxhdGUgd2hpY2ggd2lsbCBiZSB1c2VkIGJ5IHRoZSBJZ3hMaXN0IGluIGNhc2UgdGhlcmUgYXJlIG5vIGxpc3QgaXRlbXMgZGVmaW5lZCBhbmQgYGlzTG9hZGluZ2AgaXMgc2V0IHRvIGBmYWxzZWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBlbXB0eVRlbXBsYXRlID0gdGhpcy5saXN0LmVtcHR5TGlzdFRlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0Q29tcG9uZW50XG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChJZ3hFbXB0eUxpc3RUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBJZ3hFbXB0eUxpc3RUZW1wbGF0ZURpcmVjdGl2ZSwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGVtcHR5TGlzdFRlbXBsYXRlOiBJZ3hFbXB0eUxpc3RUZW1wbGF0ZURpcmVjdGl2ZTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRlbXBsYXRlIHdoaWNoIHdpbGwgYmUgdXNlZCBieSB0aGUgSWd4TGlzdCBpbiBjYXNlIHRoZXJlIGFyZSBubyBsaXN0IGl0ZW1zIGRlZmluZWQgYW5kIGBpc0xvYWRpbmdgIGlzIHNldCB0byBgdHJ1ZWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBsb2FkaW5nVGVtcGxhdGUgPSB0aGlzLmxpc3QuZGF0YUxvYWRpbmdUZW1wbGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TGlzdENvbXBvbmVudFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4RGF0YUxvYWRpbmdUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBJZ3hEYXRhTG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgZGF0YUxvYWRpbmdUZW1wbGF0ZTogSWd4RGF0YUxvYWRpbmdUZW1wbGF0ZURpcmVjdGl2ZTtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgdGVtcGxhdGUgc2hvd24gd2hlbiBsZWZ0IHBhbm5pbmcgYSBsaXN0IGl0ZW0uXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgbnVsbGAuXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWxpc3QgW2FsbG93TGVmdFBhbm5pbmddID0gXCJ0cnVlXCI+PC9pZ3gtbGlzdD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGl0ZW1MZWZ0UGFuVG1wbCA9IHRoaXMubGlzdC5saXN0SXRlbUxlZnRQYW5uaW5nVGVtcGxhdGU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneExpc3RJdGVtTGVmdFBhbm5pbmdUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBJZ3hMaXN0SXRlbUxlZnRQYW5uaW5nVGVtcGxhdGVEaXJlY3RpdmUsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBsaXN0SXRlbUxlZnRQYW5uaW5nVGVtcGxhdGU6IElneExpc3RJdGVtTGVmdFBhbm5pbmdUZW1wbGF0ZURpcmVjdGl2ZTtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgdGVtcGxhdGUgc2hvd24gd2hlbiByaWdodCBwYW5uaW5nIGEgbGlzdCBpdGVtLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYG51bGxgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiAgPGlneC1saXN0IFthbGxvd0xlZnRQYW5uaW5nXSA9IFwidHJ1ZVwiPjwvaWd4LWxpc3Q+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpdGVtUmlnaHRQYW5UbXBsID0gdGhpcy5saXN0Lmxpc3RJdGVtUmlnaHRQYW5uaW5nVGVtcGxhdGU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneExpc3RJdGVtUmlnaHRQYW5uaW5nVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogSWd4TGlzdEl0ZW1SaWdodFBhbm5pbmdUZW1wbGF0ZURpcmVjdGl2ZSwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGxpc3RJdGVtUmlnaHRQYW5uaW5nVGVtcGxhdGU6IElneExpc3RJdGVtUmlnaHRQYW5uaW5nVGVtcGxhdGVEaXJlY3RpdmU7XG5cbiAgICAvKipcbiAgICAgKiBQcm92aWRlcyBhIHRocmVzaG9sZCBhZnRlciB3aGljaCB0aGUgaXRlbSdzIHBhbm5pbmcgd2lsbCBiZSBjb21wbGV0ZWQgYXV0b21hdGljYWxseS5cbiAgICAgKiBCeSBkZWZhdWx0IHRoaXMgcHJvcGVydHkgaXMgc2V0IHRvIDAuNSB3aGljaCBpcyA1MCUgb2YgdGhlIGxpc3QgaXRlbSdzIHdpZHRoLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmxpc3QucGFuRW5kVHJpZ2dlcmluZ1RocmVzaG9sZCA9IDAuODtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBwYW5FbmRUcmlnZ2VyaW5nVGhyZXNob2xkID0gMC41O1xuXG4gICAgLyoqQGhpZGRlbiovXG4gICAgQFZpZXdDaGlsZCgnZGVmYXVsdEVtcHR5TGlzdCcsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCBkZWZhdWx0RW1wdHlMaXN0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICAvKipAaGlkZGVuKi9cbiAgICBAVmlld0NoaWxkKCdkZWZhdWx0RGF0YUxvYWRpbmcnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdERhdGFMb2FkaW5nVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGBpZGAgb2YgdGhlIGxpc3QuXG4gICAgICogSWYgbm90IHNldCwgdGhlIGBpZGAgb2YgdGhlIGZpcnN0IGxpc3QgY29tcG9uZW50IHdpbGwgYmUgYFwiaWd4LWxpc3QtMFwiYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1saXN0IGlkID0gXCJteS1maXJzdC1saXN0XCI+PC9pZ3gtbGlzdD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGxpc3RJZCA9ICB0aGlzLmxpc3QuaWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlkID0gYGlneC1saXN0LSR7TkVYVF9JRCsrfWA7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgd2hldGhlciB0aGUgbGVmdCBwYW5uaW5nIG9mIGFuIGl0ZW0gaXMgYWxsb3dlZC5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWxpc3QgW2FsbG93TGVmdFBhbm5pbmddID0gXCJ0cnVlXCI+PC9pZ3gtbGlzdD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzTGVmdFBhbm5pbmdBbGxvd2VkID0gdGhpcy5saXN0LmFsbG93TGVmdFBhbm5pbmc7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBhbGxvd0xlZnRQYW5uaW5nID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgd2hldGhlciB0aGUgcmlnaHQgcGFubmluZyBvZiBhbiBpdGVtIGlzIGFsbG93ZWQuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiAgPGlneC1saXN0IFthbGxvd1JpZ2h0UGFubmluZ10gPSBcInRydWVcIj48L2lneC1saXN0PlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNSaWdodFBhbm5pbmdBbGxvd2VkID0gdGhpcy5saXN0LmFsbG93UmlnaHRQYW5uaW5nO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0Q29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgYWxsb3dSaWdodFBhbm5pbmcgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB3aGV0aGVyIHRoZSBsaXN0IGlzIGN1cnJlbnRseSBsb2FkaW5nIGRhdGEuXG4gICAgICogU2V0IGl0IHRvIGRpc3BsYXkgdGhlIGRhdGFMb2FkaW5nVGVtcGxhdGUgd2hpbGUgZGF0YSBpcyBiZWluZyByZXRyaWV2ZWQuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiAgPGlneC1saXN0IFtpc0xvYWRpbmddPVwidHJ1ZVwiPjwvaWd4LWxpc3Q+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc0xvYWRpbmcgPSB0aGlzLmxpc3QuaXNMb2FkaW5nO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0Q29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhbiBldmVudCB3aXRoaW4gdGhlIGN1cnJlbnQgbGlzdCB3aGVuIGxlZnQgcGFuIGdlc3R1cmUgaXMgZXhlY3V0ZWQgb24gYSBsaXN0IGl0ZW0uXG4gICAgICogUHJvdmlkZXMgYSByZWZlcmVuY2UgdG8gYW4gb2JqZWN0IG9mIHR5cGUgYElMaXN0SXRlbVBhbm5pbmdFdmVudEFyZ3NgIGFzIGFuIGV2ZW50IGFyZ3VtZW50LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWxpc3QgW2FsbG93TGVmdFBhbm5pbmddPVwidHJ1ZVwiIChvbkxlZnRQYW4pPVwib25MZWZ0UGFuKCRldmVudClcIj48L2lneC1saXN0PlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0Q29tcG9uZW50XG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uTGVmdFBhbiA9IG5ldyBFdmVudEVtaXR0ZXI8SUxpc3RJdGVtUGFubmluZ0V2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IHdpdGhpbiB0aGUgY3VycmVudCBsaXN0IHdoZW4gcmlnaHQgcGFuIGdlc3R1cmUgaXMgZXhlY3V0ZWQgb24gYSBsaXN0IGl0ZW0uXG4gICAgICogUHJvdmlkZXMgYSByZWZlcmVuY2UgdG8gYW4gb2JqZWN0IG9mIHR5cGUgYElMaXN0SXRlbVBhbm5pbmdFdmVudEFyZ3NgIGFzIGFuIGV2ZW50IGFyZ3VtZW50LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWxpc3QgW2FsbG93UmlnaHRQYW5uaW5nXT1cInRydWVcIiAob25SaWdodFBhbik9XCJvblJpZ2h0UGFuKCRldmVudClcIj48L2lneC1saXN0PlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0Q29tcG9uZW50XG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uUmlnaHRQYW4gPSBuZXcgRXZlbnRFbWl0dGVyPElMaXN0SXRlbVBhbm5pbmdFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAqIEVtaXRzIGFuIGV2ZW50IHdpdGhpbiB0aGUgY3VycmVudCBsaXN0IHdoZW4gcGFuIGdlc3R1cmUgaXMgZXhlY3V0ZWQgb24gbGlzdCBpdGVtLlxuICAgICogUHJvdmlkZXMgcmVmZXJlbmNlcyB0byB0aGUgYElneExpc3RJdGVtQ29tcG9uZW50YCBhbmQgYElneExpc3RQYW5TdGF0ZWAgYXMgZXZlbnQgYXJndW1lbnRzLlxuICAgICogYGBgaHRtbFxuICAgICogPGlneC1saXN0IChvblBhblN0YXRlQ2hhbmdlKSA9IFwib25QYW5TdGF0ZUNoYW5nZSgkZXZlbnQpXCI+PC9pZ3gtbGlzdD5cbiAgICAqIGBgYFxuICAgICogQG1lbWJlcm9mIElneExpc3RDb21wb25lbnRcbiAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblBhblN0YXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxJUGFuU3RhdGVDaGFuZ2VFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhbiBldmVudCB3aXRoaW4gdGhlIGN1cnJlbnQgbGlzdCB3aGVuIGEgbGlzdCBpdGVtIGhhcyBiZWVuIGNsaWNrZWQuXG4gICAgICogUHJvdmlkZXMgcmVmZXJlbmNlcyB0byB0aGUgYElneExpc3RJdGVtQ29tcG9uZW50YCBhbmQgYEV2ZW50YCBhcyBldmVudCBhcmd1bWVudHMuXG4gICAgICogIGBgYGh0bWxcbiAgICAgKiA8aWd4LWxpc3QgKG9uSXRlbUNsaWNrZWQpID0gXCJvbkl0ZW1DbGlja2VkKCRldmVudClcIj48L2lneC1saXN0PlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0Q29tcG9uZW50XG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uSXRlbUNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElMaXN0SXRlbUNsaWNrRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYHJvbGVgIGF0dHJpYnV0ZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGxpc3RSb2xlID0gIHRoaXMubGlzdC5yb2xlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0Q29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICAgIHB1YmxpYyBnZXQgcm9sZSgpIHtcbiAgICAgICAgcmV0dXJuICdsaXN0JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGUgbGlzdCBpcyBlbXB0eS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzRW1wdHkgPSAgdGhpcy5saXN0LmlzTGlzdEVtcHR5O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0Q29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtbGlzdC1lbXB0eScpXG4gICAgcHVibGljIGdldCBpc0xpc3RFbXB0eSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmNoaWxkcmVuIHx8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoID09PSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1saXN0JylcbiAgICBwdWJsaWMgZ2V0IGNzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNMaXN0RW1wdHkgJiYgdGhpcy5kaXNwbGF5RGVuc2l0eSA9PT0gRGlzcGxheURlbnNpdHkuY29tZm9ydGFibGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWxpc3QtLWNvbXBhY3QnKVxuICAgIHB1YmxpYyBnZXQgY3NzQ2xhc3NDb21wYWN0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNMaXN0RW1wdHkgJiYgdGhpcy5kaXNwbGF5RGVuc2l0eSA9PT0gRGlzcGxheURlbnNpdHkuY29tcGFjdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtbGlzdC0tY29zeScpXG4gICAgcHVibGljIGdldCBjc3NDbGFzc0Nvc3koKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc0xpc3RFbXB0eSAmJiB0aGlzLmRpc3BsYXlEZW5zaXR5ID09PSBEaXNwbGF5RGVuc2l0eS5jb3N5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGBpdGVtc2AgaW4gdGhlIGxpc3QgZXhjbHVkaW5nIHRoZSBoZWFkZXJzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgbGlzdEl0ZW1zOiBJZ3hMaXN0SXRlbUNvbXBvbmVudFtdID0gdGhpcy5saXN0Lml0ZW1zO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0Q29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldCBpdGVtcygpOiBJZ3hMaXN0SXRlbUNvbXBvbmVudFtdIHtcbiAgICAgICAgY29uc3QgaXRlbXM6IElneExpc3RJdGVtQ29tcG9uZW50W10gPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLnNvcnRlZENoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZC5pc0hlYWRlcikge1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGhlYWRlcnMgaW4gdGhlIGxpc3QuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBsaXN0SGVhZGVyczogSWd4TGlzdEl0ZW1Db21wb25lbnRbXSA9ICB0aGlzLmxpc3QuaGVhZGVycztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TGlzdENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaGVhZGVycygpOiBJZ3hMaXN0SXRlbUNvbXBvbmVudFtdIHtcbiAgICAgICAgY29uc3QgaGVhZGVyczogSWd4TGlzdEl0ZW1Db21wb25lbnRbXSA9IFtdO1xuICAgICAgICBpZiAodGhpcy5jaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4udG9BcnJheSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmlzSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnMucHVzaChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGBjb250ZXh0YCBvYmplY3Qgd2hpY2ggcmVwcmVzZW50cyB0aGUgYHRlbXBsYXRlIGNvbnRleHRgIGJpbmRpbmcgaW50byB0aGUgYGxpc3QgY29udGFpbmVyYFxuICAgICAqIGJ5IHByb3ZpZGluZyB0aGUgYCRpbXBsaWNpdGAgZGVjbGFyYXRpb24gd2hpY2ggaXMgdGhlIGBJZ3hMaXN0Q29tcG9uZW50YCBpdHNlbGYuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBsaXN0Q29tcG9uZW50ID0gIHRoaXMubGlzdC5jb250ZXh0O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgY29udGV4dCgpOiBhbnkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJGltcGxpY2l0OiB0aGlzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYHRlbXBsYXRlYCBvZiBhbiBlbXB0eSBsaXN0LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgbGlzdFRlbXBsYXRlID0gdGhpcy5saXN0LnRlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0Q29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldCB0ZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhTG9hZGluZ1RlbXBsYXRlID8gdGhpcy5kYXRhTG9hZGluZ1RlbXBsYXRlLnRlbXBsYXRlIDogdGhpcy5kZWZhdWx0RGF0YUxvYWRpbmdUZW1wbGF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVtcHR5TGlzdFRlbXBsYXRlID8gdGhpcy5lbXB0eUxpc3RUZW1wbGF0ZS50ZW1wbGF0ZSA6IHRoaXMuZGVmYXVsdEVtcHR5TGlzdFRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSWd4TGlzdENvbXBvbmVudCxcbiAgICAgICAgSWd4TGlzdEl0ZW1Db21wb25lbnQsXG4gICAgICAgIElneExpc3RUaHVtYm5haWxEaXJlY3RpdmUsXG4gICAgICAgIElneExpc3RBY3Rpb25EaXJlY3RpdmUsXG4gICAgICAgIElneExpc3RMaW5lRGlyZWN0aXZlLFxuICAgICAgICBJZ3hMaXN0TGluZVRpdGxlRGlyZWN0aXZlLFxuICAgICAgICBJZ3hMaXN0TGluZVN1YlRpdGxlRGlyZWN0aXZlLFxuICAgICAgICBJZ3hEYXRhTG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBJZ3hFbXB0eUxpc3RUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgSWd4TGlzdEl0ZW1MZWZ0UGFubmluZ1RlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBJZ3hMaXN0SXRlbVJpZ2h0UGFubmluZ1RlbXBsYXRlRGlyZWN0aXZlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIElneExpc3RDb21wb25lbnQsXG4gICAgICAgIElneExpc3RJdGVtQ29tcG9uZW50LFxuICAgICAgICBJZ3hMaXN0VGh1bWJuYWlsRGlyZWN0aXZlLFxuICAgICAgICBJZ3hMaXN0QWN0aW9uRGlyZWN0aXZlLFxuICAgICAgICBJZ3hMaXN0TGluZURpcmVjdGl2ZSxcbiAgICAgICAgSWd4TGlzdExpbmVUaXRsZURpcmVjdGl2ZSxcbiAgICAgICAgSWd4TGlzdExpbmVTdWJUaXRsZURpcmVjdGl2ZSxcbiAgICAgICAgSWd4RGF0YUxvYWRpbmdUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgSWd4RW1wdHlMaXN0VGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIElneExpc3RJdGVtTGVmdFBhbm5pbmdUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgSWd4TGlzdEl0ZW1SaWdodFBhbm5pbmdUZW1wbGF0ZURpcmVjdGl2ZVxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIElneFJpcHBsZU1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSWd4TGlzdE1vZHVsZSB7XG59XG4iXX0=