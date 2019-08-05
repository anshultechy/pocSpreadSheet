/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { Component, ContentChild, ContentChildren, ElementRef, EventEmitter, forwardRef, HostBinding, Input, NgModule, Output, QueryList, TemplateRef, ViewChild, Optional, Inject, Directive } from '@angular/core';
import { IgxRippleModule } from '../directives/ripple/ripple.directive';
import { IgxListItemComponent } from './list-item.component';
import { IgxListBase, IgxDataLoadingTemplateDirective, IgxEmptyListTemplateDirective, IgxListItemLeftPanningTemplateDirective, IgxListItemRightPanningTemplateDirective } from './list.common';
import { DisplayDensityToken, DisplayDensity } from '../core/density';
/** @type {?} */
let NEXT_ID = 0;
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
export class IgxListThumbnailDirective {
}
IgxListThumbnailDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[igxListThumbnail]'
            },] }
];
/**
 * igxListAction is container for the List action
 * Use it to wrap anything you want to be used as a list action: icon, checkbox...
 */
export class IgxListActionDirective {
}
IgxListActionDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[igxListAction]'
            },] }
];
/**
 * igxListLine is container for the List text content
 * Use it to wrap anything you want to be used as a plane text.
 */
export class IgxListLineDirective {
}
IgxListLineDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[igxListLine]'
            },] }
];
/**
 * igxListLineTitle is a directive that add class to the target element
 * Use it to make anything to look like list Title.
 */
export class IgxListLineTitleDirective {
    constructor() {
        this.cssClass = 'igx-list__item-line-title';
    }
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
if (false) {
    /** @type {?} */
    IgxListLineTitleDirective.prototype.cssClass;
}
/**
 * igxListLineSubTitle is a directive that add class to the target element
 * Use it to make anything to look like list Subtitle.
 */
export class IgxListLineSubTitleDirective {
    constructor() {
        this.cssClass = 'igx-list__item-line-subtitle';
    }
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
if (false) {
    /** @type {?} */
    IgxListLineSubTitleDirective.prototype.cssClass;
}
export class IgxListComponent extends IgxListBase {
    /**
     * @param {?} element
     * @param {?} _displayDensityOptions
     */
    constructor(element, _displayDensityOptions) {
        super(_displayDensityOptions);
        this.element = element;
        this._displayDensityOptions = _displayDensityOptions;
        /**
         * Provides a threshold after which the item's panning will be completed automatically.
         * By default this property is set to 0.5 which is 50% of the list item's width.
         * ```typescript
         * this.list.panEndTriggeringThreshold = 0.8;
         * ```
         */
        this.panEndTriggeringThreshold = 0.5;
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
        this.id = `igx-list-${NEXT_ID++}`;
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
        this.allowLeftPanning = false;
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
        this.allowRightPanning = false;
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
        this.isLoading = false;
        /**
         * Emits an event within the current list when left pan gesture is executed on a list item.
         * Provides a reference to an object of type `IListItemPanningEventArgs` as an event argument.
         * ```html
         * <igx-list [allowLeftPanning]="true" (onLeftPan)="onLeftPan($event)"></igx-list>
         * ```
         * \@memberof IgxListComponent
         */
        this.onLeftPan = new EventEmitter();
        /**
         * Emits an event within the current list when right pan gesture is executed on a list item.
         * Provides a reference to an object of type `IListItemPanningEventArgs` as an event argument.
         * ```html
         * <igx-list [allowRightPanning]="true" (onRightPan)="onRightPan($event)"></igx-list>
         * ```
         * \@memberof IgxListComponent
         */
        this.onRightPan = new EventEmitter();
        /**
         * Emits an event within the current list when pan gesture is executed on list item.
         * Provides references to the `IgxListItemComponent` and `IgxListPanState` as event arguments.
         * ```html
         * <igx-list (onPanStateChange) = "onPanStateChange($event)"></igx-list>
         * ```
         * \@memberof IgxListComponent
         */
        this.onPanStateChange = new EventEmitter();
        /**
         * Emits an event within the current list when a list item has been clicked.
         * Provides references to the `IgxListItemComponent` and `Event` as event arguments.
         *  ```html
         * <igx-list (onItemClicked) = "onItemClicked($event)"></igx-list>
         * ```
         * \@memberof IgxListComponent
         */
        this.onItemClicked = new EventEmitter();
    }
    /**
     * @hidden
     * \@internal
     * @protected
     * @return {?}
     */
    get sortedChildren() {
        if (this.children !== undefined) {
            return this.children.toArray()
                .sort((a, b) => {
                return a.index - b.index;
            });
        }
        return null;
    }
    /**
     * Gets the `role` attribute.
     * ```typescript
     * let listRole =  this.list.role;
     * ```
     * \@memberof IgxListComponent
     * @return {?}
     */
    get role() {
        return 'list';
    }
    /**
     * Returns boolean indicating if the list is empty.
     * ```typescript
     * let isEmpty =  this.list.isListEmpty;
     * ```
     * \@memberof IgxListComponent
     * @return {?}
     */
    get isListEmpty() {
        return !this.children || this.children.length === 0;
    }
    /**
     * @hidden
     * @return {?}
     */
    get cssClass() {
        return !this.isListEmpty && this.displayDensity === DisplayDensity.comfortable;
    }
    /**
     * @hidden
     * @return {?}
     */
    get cssClassCompact() {
        return !this.isListEmpty && this.displayDensity === DisplayDensity.compact;
    }
    /**
     * @hidden
     * @return {?}
     */
    get cssClassCosy() {
        return !this.isListEmpty && this.displayDensity === DisplayDensity.cosy;
    }
    /**
     * Returns the `items` in the list excluding the headers.
     * ```typescript
     * let listItems: IgxListItemComponent[] = this.list.items;
     * ```
     * \@memberof IgxListComponent
     * @return {?}
     */
    get items() {
        /** @type {?} */
        const items = [];
        if (this.children !== undefined) {
            for (const child of this.sortedChildren) {
                if (!child.isHeader) {
                    items.push(child);
                }
            }
        }
        return items;
    }
    /**
     * Returns the headers in the list.
     * ```typescript
     * let listHeaders: IgxListItemComponent[] =  this.list.headers;
     * ```
     * \@memberof IgxListComponent
     * @return {?}
     */
    get headers() {
        /** @type {?} */
        const headers = [];
        if (this.children !== undefined) {
            for (const child of this.children.toArray()) {
                if (child.isHeader) {
                    headers.push(child);
                }
            }
        }
        return headers;
    }
    /**
     * Returns the `context` object which represents the `template context` binding into the `list container`
     * by providing the `$implicit` declaration which is the `IgxListComponent` itself.
     * ```typescript
     * let listComponent =  this.list.context;
     * ```
     * @return {?}
     */
    get context() {
        return {
            $implicit: this
        };
    }
    /**
     * Returns the `template` of an empty list.
     * ```typescript
     * let listTemplate = this.list.template;
     * ```
     * \@memberof IgxListComponent
     * @return {?}
     */
    get template() {
        if (this.isLoading) {
            return this.dataLoadingTemplate ? this.dataLoadingTemplate.template : this.defaultDataLoadingTemplate;
        }
        else {
            return this.emptyListTemplate ? this.emptyListTemplate.template : this.defaultEmptyListTemplate;
        }
    }
}
IgxListComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-list',
                template: "<ng-content></ng-content>\n\n<ng-template #defaultEmptyList>\n    <article class=\"message\">\n        There are no items in the list.\n    </article>\n</ng-template>\n\n<ng-template #defaultDataLoading>\n    <article class=\"message\">\n        Loading data from the server...\n    </article>\n</ng-template>\n\n<ng-container *ngIf=\"!children || children.length === 0 || isLoading\">\n    <ng-container *ngTemplateOutlet=\"template; context: context\">\n    </ng-container>\n</ng-container>\n",
                providers: [{ provide: IgxListBase, useExisting: IgxListComponent }]
            }] }
];
/** @nocollapse */
IgxListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
];
IgxListComponent.propDecorators = {
    children: [{ type: ContentChildren, args: [forwardRef(() => IgxListItemComponent),] }],
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
export class IgxListModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2xpc3QvbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0gsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULFFBQVEsRUFDUixNQUFNLEVBQUUsU0FBUyxFQUNwQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUNILFdBQVcsRUFDWCwrQkFBK0IsRUFDL0IsNkJBQTZCLEVBRTdCLHVDQUF1QyxFQUN2Qyx3Q0FBd0MsRUFDM0MsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUEwQixtQkFBbUIsRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7SUFFMUYsT0FBTyxHQUFHLENBQUM7Ozs7QUFDZiw4Q0FJQzs7O0lBSEcsNENBQTBCOztJQUMxQiw0Q0FBMEI7O0lBQzFCLHdDQUEyQjs7Ozs7QUFHL0IsNkNBSUM7OztJQUhHLHVDQUEyQjs7SUFDM0Isd0NBQWE7O0lBQ2IsNENBQTJCOzs7OztBQUcvQiwrQ0FJQzs7O0lBSEcseUNBQTJCOztJQUMzQiw4Q0FBMkI7O0lBQzNCLDZDQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0J0QixNQUFNLE9BQU8seUJBQXlCOzs7WUFMckMsU0FBUyxTQUFDOztnQkFFUCxRQUFRLEVBQUUsb0JBQW9CO2FB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Ozs7Ozs7O0lBcE9uQyxvQ0FDaUQ7Ozs7Ozs7OztJQXVCakQsNkNBQ3dEOzs7Ozs7Ozs7SUFTeEQsK0NBQzREOzs7Ozs7Ozs7Ozs7O0lBYTVELHVEQUM0RTs7Ozs7Ozs7Ozs7OztJQWE1RSx3REFDOEU7Ozs7Ozs7OztJQVM5RSxxREFDdUM7Ozs7OztJQUd2QyxvREFDcUQ7Ozs7OztJQUdyRCxzREFDdUQ7Ozs7Ozs7Ozs7Ozs7SUFhdkQsOEJBRW9DOzs7Ozs7Ozs7Ozs7O0lBYXBDLDRDQUNnQzs7Ozs7Ozs7Ozs7OztJQWFoQyw2Q0FDaUM7Ozs7Ozs7Ozs7Ozs7O0lBY2pDLHFDQUN5Qjs7Ozs7Ozs7OztJQVV6QixxQ0FDaUU7Ozs7Ozs7Ozs7SUFVakUsc0NBQ2tFOzs7Ozs7Ozs7O0lBVWxFLDRDQUN1RTs7Ozs7Ozs7OztJQVV2RSx5Q0FDbUU7O0lBbk12RCxtQ0FBMEI7Ozs7O0lBQ2xDLGtEQUFpRzs7Ozs7QUEwVnpHLE1BQU0sT0FBTyxhQUFhOzs7WUFoQ3pCLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUU7b0JBQ1YsZ0JBQWdCO29CQUNoQixvQkFBb0I7b0JBQ3BCLHlCQUF5QjtvQkFDekIsc0JBQXNCO29CQUN0QixvQkFBb0I7b0JBQ3BCLHlCQUF5QjtvQkFDekIsNEJBQTRCO29CQUM1QiwrQkFBK0I7b0JBQy9CLDZCQUE2QjtvQkFDN0IsdUNBQXVDO29CQUN2Qyx3Q0FBd0M7aUJBQzNDO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtvQkFDcEIseUJBQXlCO29CQUN6QixzQkFBc0I7b0JBQ3RCLG9CQUFvQjtvQkFDcEIseUJBQXlCO29CQUN6Qiw0QkFBNEI7b0JBQzVCLCtCQUErQjtvQkFDL0IsNkJBQTZCO29CQUM3Qix1Q0FBdUM7b0JBQ3ZDLHdDQUF3QztpQkFDM0M7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osZUFBZTtpQkFDbEI7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIGZvcndhcmRSZWYsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSW5wdXQsXG4gICAgTmdNb2R1bGUsXG4gICAgT3V0cHV0LFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBWaWV3Q2hpbGQsXG4gICAgT3B0aW9uYWwsXG4gICAgSW5qZWN0LCBEaXJlY3RpdmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElneFJpcHBsZU1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvcmlwcGxlL3JpcHBsZS5kaXJlY3RpdmUnO1xuXG5pbXBvcnQgeyBJZ3hMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICAgIElneExpc3RCYXNlLFxuICAgIElneERhdGFMb2FkaW5nVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgSWd4RW1wdHlMaXN0VGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgSWd4TGlzdFBhblN0YXRlLFxuICAgIElneExpc3RJdGVtTGVmdFBhbm5pbmdUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJZ3hMaXN0SXRlbVJpZ2h0UGFubmluZ1RlbXBsYXRlRGlyZWN0aXZlXG59IGZyb20gJy4vbGlzdC5jb21tb24nO1xuaW1wb3J0IHsgSURpc3BsYXlEZW5zaXR5T3B0aW9ucywgRGlzcGxheURlbnNpdHlUb2tlbiwgRGlzcGxheURlbnNpdHkgfSBmcm9tICcuLi9jb3JlL2RlbnNpdHknO1xuXG5sZXQgTkVYVF9JRCA9IDA7XG5leHBvcnQgaW50ZXJmYWNlIElQYW5TdGF0ZUNoYW5nZUV2ZW50QXJncyB7XG4gICAgb2xkU3RhdGU6IElneExpc3RQYW5TdGF0ZTtcbiAgICBuZXdTdGF0ZTogSWd4TGlzdFBhblN0YXRlO1xuICAgIGl0ZW06IElneExpc3RJdGVtQ29tcG9uZW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElMaXN0SXRlbUNsaWNrRXZlbnRBcmdzIHtcbiAgICBpdGVtOiBJZ3hMaXN0SXRlbUNvbXBvbmVudDtcbiAgICBldmVudDogRXZlbnQ7XG4gICAgZGlyZWN0aW9uOiBJZ3hMaXN0UGFuU3RhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxpc3RJdGVtUGFubmluZ0V2ZW50QXJncyB7XG4gICAgaXRlbTogSWd4TGlzdEl0ZW1Db21wb25lbnQ7XG4gICAgZGlyZWN0aW9uOiBJZ3hMaXN0UGFuU3RhdGU7XG4gICAga2VlcEl0ZW06IGJvb2xlYW47XG59XG5cbi8qKlxuICogKipJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgTGlzdCoqIC1cbiAqIFtEb2N1bWVudGF0aW9uXShodHRwczovL3d3dy5pbmZyYWdpc3RpY3MuY29tL3Byb2R1Y3RzL2lnbml0ZS11aS1hbmd1bGFyL2FuZ3VsYXIvY29tcG9uZW50cy9saXN0Lmh0bWwpXG4gKlxuICogVGhlIElnbml0ZSBVSSBMaXN0IGRpc3BsYXlzIHJvd3Mgb2YgaXRlbXMgYW5kIHN1cHBvcnRzIG9uZSBvciBtb3JlIGhlYWRlciBpdGVtcyBhcyB3ZWxsIGFzIHNlYXJjaCBhbmQgZmlsdGVyaW5nXG4gKiBvZiBsaXN0IGl0ZW1zLiBFYWNoIGxpc3QgaXRlbSBpcyBjb21wbGV0ZWx5IHRlbXBsYXRlYWJsZSBhbmQgd2lsbCBzdXBwb3J0IGFueSB2YWxpZCBIVE1MIG9yIEFuZ3VsYXIgY29tcG9uZW50LlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8aWd4LWxpc3Q+XG4gKiAgIDxpZ3gtbGlzdC1pdGVtIGlzSGVhZGVyPVwidHJ1ZVwiPkNvbnRhY3RzPC9pZ3gtbGlzdC1pdGVtPlxuICogICA8aWd4LWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgY29udGFjdCBvZiBjb250YWN0c1wiPlxuICogICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPnt7IGNvbnRhY3QubmFtZSB9fTwvc3Bhbj5cbiAqICAgICA8c3BhbiBjbGFzcz1cInBob25lXCI+e3sgY29udGFjdC5waG9uZSB9fTwvc3Bhbj5cbiAqICAgPC9pZ3gtbGlzdC1pdGVtPlxuICogPC9pZ3gtbGlzdD5cbiAqIGBgYFxuICovXG5cbi8qKlxuICogaWd4TGlzdFRodW1ibmFpbCBpcyBjb250YWluZXIgZm9yIHRoZSBMaXN0IG1lZGlhXG4gKiBVc2UgaXQgdG8gd3JhcCBhbnl0aGluZyB5b3Ugd2FudCB0byBiZSB1c2VkIGFzIGEgdGh1bWJuYWlsLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gICAgc2VsZWN0b3I6ICdbaWd4TGlzdFRodW1ibmFpbF0nXG59KVxuXG5leHBvcnQgY2xhc3MgSWd4TGlzdFRodW1ibmFpbERpcmVjdGl2ZSB7fVxuXG4vKipcbiAqIGlneExpc3RBY3Rpb24gaXMgY29udGFpbmVyIGZvciB0aGUgTGlzdCBhY3Rpb25cbiAqIFVzZSBpdCB0byB3cmFwIGFueXRoaW5nIHlvdSB3YW50IHRvIGJlIHVzZWQgYXMgYSBsaXN0IGFjdGlvbjogaWNvbiwgY2hlY2tib3guLi5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICAgIHNlbGVjdG9yOiAnW2lneExpc3RBY3Rpb25dJ1xufSlcblxuZXhwb3J0IGNsYXNzIElneExpc3RBY3Rpb25EaXJlY3RpdmUge31cblxuLyoqXG4gKiBpZ3hMaXN0TGluZSBpcyBjb250YWluZXIgZm9yIHRoZSBMaXN0IHRleHQgY29udGVudFxuICogVXNlIGl0IHRvIHdyYXAgYW55dGhpbmcgeW91IHdhbnQgdG8gYmUgdXNlZCBhcyBhIHBsYW5lIHRleHQuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgICBzZWxlY3RvcjogJ1tpZ3hMaXN0TGluZV0nXG59KVxuXG5leHBvcnQgY2xhc3MgSWd4TGlzdExpbmVEaXJlY3RpdmUge31cblxuLyoqXG4gKiBpZ3hMaXN0TGluZVRpdGxlIGlzIGEgZGlyZWN0aXZlIHRoYXQgYWRkIGNsYXNzIHRvIHRoZSB0YXJnZXQgZWxlbWVudFxuICogVXNlIGl0IHRvIG1ha2UgYW55dGhpbmcgdG8gbG9vayBsaWtlIGxpc3QgVGl0bGUuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgICBzZWxlY3RvcjogJ1tpZ3hMaXN0TGluZVRpdGxlXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBJZ3hMaXN0TGluZVRpdGxlRGlyZWN0aXZlIHtcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1saXN0X19pdGVtLWxpbmUtdGl0bGUnKVxuICAgIHB1YmxpYyBjc3NDbGFzcyA9ICdpZ3gtbGlzdF9faXRlbS1saW5lLXRpdGxlJztcbn1cblxuLyoqXG4gKiBpZ3hMaXN0TGluZVN1YlRpdGxlIGlzIGEgZGlyZWN0aXZlIHRoYXQgYWRkIGNsYXNzIHRvIHRoZSB0YXJnZXQgZWxlbWVudFxuICogVXNlIGl0IHRvIG1ha2UgYW55dGhpbmcgdG8gbG9vayBsaWtlIGxpc3QgU3VidGl0bGUuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgICBzZWxlY3RvcjogJ1tpZ3hMaXN0TGluZVN1YlRpdGxlXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBJZ3hMaXN0TGluZVN1YlRpdGxlRGlyZWN0aXZlIHtcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1saXN0X19pdGVtLWxpbmUtc3VidGl0bGUnKVxuICAgIHB1YmxpYyBjc3NDbGFzcyA9ICdpZ3gtbGlzdF9faXRlbS1saW5lLXN1YnRpdGxlJztcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICdsaXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IElneExpc3RCYXNlLCB1c2VFeGlzdGluZzogSWd4TGlzdENvbXBvbmVudCB9XVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hMaXN0Q29tcG9uZW50IGV4dGVuZHMgSWd4TGlzdEJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRGlzcGxheURlbnNpdHlUb2tlbikgcHJvdGVjdGVkIF9kaXNwbGF5RGVuc2l0eU9wdGlvbnM6IElEaXNwbGF5RGVuc2l0eU9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoX2Rpc3BsYXlEZW5zaXR5T3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGNvbGxlY3Rpb24gb2YgYWxsIGl0ZW1zIGFuZCBoZWFkZXJzIGluIHRoZSBsaXN0LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgbGlzdENoaWxkcmVuOiBRdWVyeUxpc3QgPSB0aGlzLmxpc3QuY2hpbGRyZW47XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gSWd4TGlzdEl0ZW1Db21wb25lbnQpKVxuICAgIHB1YmxpYyBjaGlsZHJlbjogUXVlcnlMaXN0PElneExpc3RJdGVtQ29tcG9uZW50PjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0IHNvcnRlZENoaWxkcmVuKCk6IElneExpc3RJdGVtQ29tcG9uZW50W10ge1xuICAgICAgICBpZiAodGhpcy5jaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi50b0FycmF5KClcbiAgICAgICAgICAgICAgICAuc29ydCgoYTogSWd4TGlzdEl0ZW1Db21wb25lbnQsIGI6IElneExpc3RJdGVtQ29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0ZW1wbGF0ZSB3aGljaCB3aWxsIGJlIHVzZWQgYnkgdGhlIElneExpc3QgaW4gY2FzZSB0aGVyZSBhcmUgbm8gbGlzdCBpdGVtcyBkZWZpbmVkIGFuZCBgaXNMb2FkaW5nYCBpcyBzZXQgdG8gYGZhbHNlYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGVtcHR5VGVtcGxhdGUgPSB0aGlzLmxpc3QuZW1wdHlMaXN0VGVtcGxhdGU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneEVtcHR5TGlzdFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IElneEVtcHR5TGlzdFRlbXBsYXRlRGlyZWN0aXZlLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgZW1wdHlMaXN0VGVtcGxhdGU6IElneEVtcHR5TGlzdFRlbXBsYXRlRGlyZWN0aXZlO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGVtcGxhdGUgd2hpY2ggd2lsbCBiZSB1c2VkIGJ5IHRoZSBJZ3hMaXN0IGluIGNhc2UgdGhlcmUgYXJlIG5vIGxpc3QgaXRlbXMgZGVmaW5lZCBhbmQgYGlzTG9hZGluZ2AgaXMgc2V0IHRvIGB0cnVlYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGxvYWRpbmdUZW1wbGF0ZSA9IHRoaXMubGlzdC5kYXRhTG9hZGluZ1RlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0Q29tcG9uZW50XG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChJZ3hEYXRhTG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IElneERhdGFMb2FkaW5nVGVtcGxhdGVEaXJlY3RpdmUsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBkYXRhTG9hZGluZ1RlbXBsYXRlOiBJZ3hEYXRhTG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlO1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSB0ZW1wbGF0ZSBzaG93biB3aGVuIGxlZnQgcGFubmluZyBhIGxpc3QgaXRlbS5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBudWxsYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogIDxpZ3gtbGlzdCBbYWxsb3dMZWZ0UGFubmluZ10gPSBcInRydWVcIj48L2lneC1saXN0PlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXRlbUxlZnRQYW5UbXBsID0gdGhpcy5saXN0Lmxpc3RJdGVtTGVmdFBhbm5pbmdUZW1wbGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TGlzdENvbXBvbmVudFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4TGlzdEl0ZW1MZWZ0UGFubmluZ1RlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IElneExpc3RJdGVtTGVmdFBhbm5pbmdUZW1wbGF0ZURpcmVjdGl2ZSwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGxpc3RJdGVtTGVmdFBhbm5pbmdUZW1wbGF0ZTogSWd4TGlzdEl0ZW1MZWZ0UGFubmluZ1RlbXBsYXRlRGlyZWN0aXZlO1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSB0ZW1wbGF0ZSBzaG93biB3aGVuIHJpZ2h0IHBhbm5pbmcgYSBsaXN0IGl0ZW0uXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgbnVsbGAuXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWxpc3QgW2FsbG93TGVmdFBhbm5pbmddID0gXCJ0cnVlXCI+PC9pZ3gtbGlzdD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGl0ZW1SaWdodFBhblRtcGwgPSB0aGlzLmxpc3QubGlzdEl0ZW1SaWdodFBhbm5pbmdUZW1wbGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TGlzdENvbXBvbmVudFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4TGlzdEl0ZW1SaWdodFBhbm5pbmdUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBJZ3hMaXN0SXRlbVJpZ2h0UGFubmluZ1RlbXBsYXRlRGlyZWN0aXZlLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgbGlzdEl0ZW1SaWdodFBhbm5pbmdUZW1wbGF0ZTogSWd4TGlzdEl0ZW1SaWdodFBhbm5pbmdUZW1wbGF0ZURpcmVjdGl2ZTtcblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGVzIGEgdGhyZXNob2xkIGFmdGVyIHdoaWNoIHRoZSBpdGVtJ3MgcGFubmluZyB3aWxsIGJlIGNvbXBsZXRlZCBhdXRvbWF0aWNhbGx5LlxuICAgICAqIEJ5IGRlZmF1bHQgdGhpcyBwcm9wZXJ0eSBpcyBzZXQgdG8gMC41IHdoaWNoIGlzIDUwJSBvZiB0aGUgbGlzdCBpdGVtJ3Mgd2lkdGguXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMubGlzdC5wYW5FbmRUcmlnZ2VyaW5nVGhyZXNob2xkID0gMC44O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHBhbkVuZFRyaWdnZXJpbmdUaHJlc2hvbGQgPSAwLjU7XG5cbiAgICAvKipAaGlkZGVuKi9cbiAgICBAVmlld0NoaWxkKCdkZWZhdWx0RW1wdHlMaXN0JywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGRlZmF1bHRFbXB0eUxpc3RUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIC8qKkBoaWRkZW4qL1xuICAgIEBWaWV3Q2hpbGQoJ2RlZmF1bHREYXRhTG9hZGluZycsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCBkZWZhdWx0RGF0YUxvYWRpbmdUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgYGlkYCBvZiB0aGUgbGlzdC5cbiAgICAgKiBJZiBub3Qgc2V0LCB0aGUgYGlkYCBvZiB0aGUgZmlyc3QgbGlzdCBjb21wb25lbnQgd2lsbCBiZSBgXCJpZ3gtbGlzdC0wXCJgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWxpc3QgaWQgPSBcIm15LWZpcnN0LWxpc3RcIj48L2lneC1saXN0PlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgbGlzdElkID0gIHRoaXMubGlzdC5pZDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TGlzdENvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWQgPSBgaWd4LWxpc3QtJHtORVhUX0lEKyt9YDtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB3aGV0aGVyIHRoZSBsZWZ0IHBhbm5pbmcgb2YgYW4gaXRlbSBpcyBhbGxvd2VkLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYGZhbHNlYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogIDxpZ3gtbGlzdCBbYWxsb3dMZWZ0UGFubmluZ10gPSBcInRydWVcIj48L2lneC1saXN0PlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNMZWZ0UGFubmluZ0FsbG93ZWQgPSB0aGlzLmxpc3QuYWxsb3dMZWZ0UGFubmluZztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TGlzdENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGFsbG93TGVmdFBhbm5pbmcgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB3aGV0aGVyIHRoZSByaWdodCBwYW5uaW5nIG9mIGFuIGl0ZW0gaXMgYWxsb3dlZC5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWxpc3QgW2FsbG93UmlnaHRQYW5uaW5nXSA9IFwidHJ1ZVwiPjwvaWd4LWxpc3Q+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc1JpZ2h0UGFubmluZ0FsbG93ZWQgPSB0aGlzLmxpc3QuYWxsb3dSaWdodFBhbm5pbmc7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBhbGxvd1JpZ2h0UGFubmluZyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHdoZXRoZXIgdGhlIGxpc3QgaXMgY3VycmVudGx5IGxvYWRpbmcgZGF0YS5cbiAgICAgKiBTZXQgaXQgdG8gZGlzcGxheSB0aGUgZGF0YUxvYWRpbmdUZW1wbGF0ZSB3aGlsZSBkYXRhIGlzIGJlaW5nIHJldHJpZXZlZC5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWxpc3QgW2lzTG9hZGluZ109XCJ0cnVlXCI+PC9pZ3gtbGlzdD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzTG9hZGluZyA9IHRoaXMubGlzdC5pc0xvYWRpbmc7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0xvYWRpbmcgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IHdpdGhpbiB0aGUgY3VycmVudCBsaXN0IHdoZW4gbGVmdCBwYW4gZ2VzdHVyZSBpcyBleGVjdXRlZCBvbiBhIGxpc3QgaXRlbS5cbiAgICAgKiBQcm92aWRlcyBhIHJlZmVyZW5jZSB0byBhbiBvYmplY3Qgb2YgdHlwZSBgSUxpc3RJdGVtUGFubmluZ0V2ZW50QXJnc2AgYXMgYW4gZXZlbnQgYXJndW1lbnQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtbGlzdCBbYWxsb3dMZWZ0UGFubmluZ109XCJ0cnVlXCIgKG9uTGVmdFBhbik9XCJvbkxlZnRQYW4oJGV2ZW50KVwiPjwvaWd4LWxpc3Q+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25MZWZ0UGFuID0gbmV3IEV2ZW50RW1pdHRlcjxJTGlzdEl0ZW1QYW5uaW5nRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQgd2l0aGluIHRoZSBjdXJyZW50IGxpc3Qgd2hlbiByaWdodCBwYW4gZ2VzdHVyZSBpcyBleGVjdXRlZCBvbiBhIGxpc3QgaXRlbS5cbiAgICAgKiBQcm92aWRlcyBhIHJlZmVyZW5jZSB0byBhbiBvYmplY3Qgb2YgdHlwZSBgSUxpc3RJdGVtUGFubmluZ0V2ZW50QXJnc2AgYXMgYW4gZXZlbnQgYXJndW1lbnQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtbGlzdCBbYWxsb3dSaWdodFBhbm5pbmddPVwidHJ1ZVwiIChvblJpZ2h0UGFuKT1cIm9uUmlnaHRQYW4oJGV2ZW50KVwiPjwvaWd4LWxpc3Q+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25SaWdodFBhbiA9IG5ldyBFdmVudEVtaXR0ZXI8SUxpc3RJdGVtUGFubmluZ0V2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICogRW1pdHMgYW4gZXZlbnQgd2l0aGluIHRoZSBjdXJyZW50IGxpc3Qgd2hlbiBwYW4gZ2VzdHVyZSBpcyBleGVjdXRlZCBvbiBsaXN0IGl0ZW0uXG4gICAgKiBQcm92aWRlcyByZWZlcmVuY2VzIHRvIHRoZSBgSWd4TGlzdEl0ZW1Db21wb25lbnRgIGFuZCBgSWd4TGlzdFBhblN0YXRlYCBhcyBldmVudCBhcmd1bWVudHMuXG4gICAgKiBgYGBodG1sXG4gICAgKiA8aWd4LWxpc3QgKG9uUGFuU3RhdGVDaGFuZ2UpID0gXCJvblBhblN0YXRlQ2hhbmdlKCRldmVudClcIj48L2lneC1saXN0PlxuICAgICogYGBgXG4gICAgKiBAbWVtYmVyb2YgSWd4TGlzdENvbXBvbmVudFxuICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uUGFuU3RhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPElQYW5TdGF0ZUNoYW5nZUV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IHdpdGhpbiB0aGUgY3VycmVudCBsaXN0IHdoZW4gYSBsaXN0IGl0ZW0gaGFzIGJlZW4gY2xpY2tlZC5cbiAgICAgKiBQcm92aWRlcyByZWZlcmVuY2VzIHRvIHRoZSBgSWd4TGlzdEl0ZW1Db21wb25lbnRgIGFuZCBgRXZlbnRgIGFzIGV2ZW50IGFyZ3VtZW50cy5cbiAgICAgKiAgYGBgaHRtbFxuICAgICAqIDxpZ3gtbGlzdCAob25JdGVtQ2xpY2tlZCkgPSBcIm9uSXRlbUNsaWNrZWQoJGV2ZW50KVwiPjwvaWd4LWxpc3Q+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25JdGVtQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SUxpc3RJdGVtQ2xpY2tFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgcm9sZWAgYXR0cmlidXRlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgbGlzdFJvbGUgPSAgdGhpcy5saXN0LnJvbGU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gICAgcHVibGljIGdldCByb2xlKCkge1xuICAgICAgICByZXR1cm4gJ2xpc3QnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoZSBsaXN0IGlzIGVtcHR5LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNFbXB0eSA9ICB0aGlzLmxpc3QuaXNMaXN0RW1wdHk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1saXN0LWVtcHR5JylcbiAgICBwdWJsaWMgZ2V0IGlzTGlzdEVtcHR5KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMuY2hpbGRyZW4gfHwgdGhpcy5jaGlsZHJlbi5sZW5ndGggPT09IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWxpc3QnKVxuICAgIHB1YmxpYyBnZXQgY3NzQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc0xpc3RFbXB0eSAmJiB0aGlzLmRpc3BsYXlEZW5zaXR5ID09PSBEaXNwbGF5RGVuc2l0eS5jb21mb3J0YWJsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtbGlzdC0tY29tcGFjdCcpXG4gICAgcHVibGljIGdldCBjc3NDbGFzc0NvbXBhY3QoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc0xpc3RFbXB0eSAmJiB0aGlzLmRpc3BsYXlEZW5zaXR5ID09PSBEaXNwbGF5RGVuc2l0eS5jb21wYWN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1saXN0LS1jb3N5JylcbiAgICBwdWJsaWMgZ2V0IGNzc0NsYXNzQ29zeSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzTGlzdEVtcHR5ICYmIHRoaXMuZGlzcGxheURlbnNpdHkgPT09IERpc3BsYXlEZW5zaXR5LmNvc3k7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYGl0ZW1zYCBpbiB0aGUgbGlzdCBleGNsdWRpbmcgdGhlIGhlYWRlcnMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBsaXN0SXRlbXM6IElneExpc3RJdGVtQ29tcG9uZW50W10gPSB0aGlzLmxpc3QuaXRlbXM7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGl0ZW1zKCk6IElneExpc3RJdGVtQ29tcG9uZW50W10ge1xuICAgICAgICBjb25zdCBpdGVtczogSWd4TGlzdEl0ZW1Db21wb25lbnRbXSA9IFtdO1xuICAgICAgICBpZiAodGhpcy5jaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuc29ydGVkQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkLmlzSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaGVhZGVycyBpbiB0aGUgbGlzdC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGxpc3RIZWFkZXJzOiBJZ3hMaXN0SXRlbUNvbXBvbmVudFtdID0gIHRoaXMubGlzdC5oZWFkZXJzO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hMaXN0Q29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldCBoZWFkZXJzKCk6IElneExpc3RJdGVtQ29tcG9uZW50W10ge1xuICAgICAgICBjb25zdCBoZWFkZXJzOiBJZ3hMaXN0SXRlbUNvbXBvbmVudFtdID0gW107XG4gICAgICAgIGlmICh0aGlzLmNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbi50b0FycmF5KCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuaXNIZWFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVycy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYGNvbnRleHRgIG9iamVjdCB3aGljaCByZXByZXNlbnRzIHRoZSBgdGVtcGxhdGUgY29udGV4dGAgYmluZGluZyBpbnRvIHRoZSBgbGlzdCBjb250YWluZXJgXG4gICAgICogYnkgcHJvdmlkaW5nIHRoZSBgJGltcGxpY2l0YCBkZWNsYXJhdGlvbiB3aGljaCBpcyB0aGUgYElneExpc3RDb21wb25lbnRgIGl0c2VsZi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGxpc3RDb21wb25lbnQgPSAgdGhpcy5saXN0LmNvbnRleHQ7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCBjb250ZXh0KCk6IGFueSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAkaW1wbGljaXQ6IHRoaXNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBgdGVtcGxhdGVgIG9mIGFuIGVtcHR5IGxpc3QuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBsaXN0VGVtcGxhdGUgPSB0aGlzLmxpc3QudGVtcGxhdGU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneExpc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgICAgICBpZiAodGhpcy5pc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFMb2FkaW5nVGVtcGxhdGUgPyB0aGlzLmRhdGFMb2FkaW5nVGVtcGxhdGUudGVtcGxhdGUgOiB0aGlzLmRlZmF1bHREYXRhTG9hZGluZ1RlbXBsYXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1wdHlMaXN0VGVtcGxhdGUgPyB0aGlzLmVtcHR5TGlzdFRlbXBsYXRlLnRlbXBsYXRlIDogdGhpcy5kZWZhdWx0RW1wdHlMaXN0VGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBJZ3hMaXN0Q29tcG9uZW50LFxuICAgICAgICBJZ3hMaXN0SXRlbUNvbXBvbmVudCxcbiAgICAgICAgSWd4TGlzdFRodW1ibmFpbERpcmVjdGl2ZSxcbiAgICAgICAgSWd4TGlzdEFjdGlvbkRpcmVjdGl2ZSxcbiAgICAgICAgSWd4TGlzdExpbmVEaXJlY3RpdmUsXG4gICAgICAgIElneExpc3RMaW5lVGl0bGVEaXJlY3RpdmUsXG4gICAgICAgIElneExpc3RMaW5lU3ViVGl0bGVEaXJlY3RpdmUsXG4gICAgICAgIElneERhdGFMb2FkaW5nVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIElneEVtcHR5TGlzdFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBJZ3hMaXN0SXRlbUxlZnRQYW5uaW5nVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIElneExpc3RJdGVtUmlnaHRQYW5uaW5nVGVtcGxhdGVEaXJlY3RpdmVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgSWd4TGlzdENvbXBvbmVudCxcbiAgICAgICAgSWd4TGlzdEl0ZW1Db21wb25lbnQsXG4gICAgICAgIElneExpc3RUaHVtYm5haWxEaXJlY3RpdmUsXG4gICAgICAgIElneExpc3RBY3Rpb25EaXJlY3RpdmUsXG4gICAgICAgIElneExpc3RMaW5lRGlyZWN0aXZlLFxuICAgICAgICBJZ3hMaXN0TGluZVRpdGxlRGlyZWN0aXZlLFxuICAgICAgICBJZ3hMaXN0TGluZVN1YlRpdGxlRGlyZWN0aXZlLFxuICAgICAgICBJZ3hEYXRhTG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBJZ3hFbXB0eUxpc3RUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgSWd4TGlzdEl0ZW1MZWZ0UGFubmluZ1RlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBJZ3hMaXN0SXRlbVJpZ2h0UGFubmluZ1RlbXBsYXRlRGlyZWN0aXZlXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgSWd4UmlwcGxlTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hMaXN0TW9kdWxlIHtcbn1cbiJdfQ==