import { ElementRef, EventEmitter, QueryList, TemplateRef } from '@angular/core';
import { IgxListItemComponent } from './list-item.component';
import { IgxListBase, IgxDataLoadingTemplateDirective, IgxEmptyListTemplateDirective, IgxListPanState, IgxListItemLeftPanningTemplateDirective, IgxListItemRightPanningTemplateDirective } from './list.common';
import { IDisplayDensityOptions } from '../core/density';
export interface IPanStateChangeEventArgs {
    oldState: IgxListPanState;
    newState: IgxListPanState;
    item: IgxListItemComponent;
}
export interface IListItemClickEventArgs {
    item: IgxListItemComponent;
    event: Event;
    direction: IgxListPanState;
}
export interface IListItemPanningEventArgs {
    item: IgxListItemComponent;
    direction: IgxListPanState;
    keepItem: boolean;
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
export declare class IgxListThumbnailDirective {
}
/**
 * igxListAction is container for the List action
 * Use it to wrap anything you want to be used as a list action: icon, checkbox...
 */
export declare class IgxListActionDirective {
}
/**
 * igxListLine is container for the List text content
 * Use it to wrap anything you want to be used as a plane text.
 */
export declare class IgxListLineDirective {
}
/**
 * igxListLineTitle is a directive that add class to the target element
 * Use it to make anything to look like list Title.
 */
export declare class IgxListLineTitleDirective {
    cssClass: string;
}
/**
 * igxListLineSubTitle is a directive that add class to the target element
 * Use it to make anything to look like list Subtitle.
 */
export declare class IgxListLineSubTitleDirective {
    cssClass: string;
}
export declare class IgxListComponent extends IgxListBase {
    element: ElementRef;
    protected _displayDensityOptions: IDisplayDensityOptions;
    constructor(element: ElementRef, _displayDensityOptions: IDisplayDensityOptions);
    /**
     * Returns a collection of all items and headers in the list.
     * ```typescript
     * let listChildren: QueryList = this.list.children;
     * ```
     * @memberof IgxListComponent
     */
    children: QueryList<IgxListItemComponent>;
    /**
     * @hidden
     * @internal
     */
    protected readonly sortedChildren: IgxListItemComponent[];
    /**
     * Returns the template which will be used by the IgxList in case there are no list items defined and `isLoading` is set to `false`.
     * ```typescript
     * let emptyTemplate = this.list.emptyListTemplate;
     * ```
     * @memberof IgxListComponent
     */
    emptyListTemplate: IgxEmptyListTemplateDirective;
    /**
     * Returns the template which will be used by the IgxList in case there are no list items defined and `isLoading` is set to `true`.
     * ```typescript
     * let loadingTemplate = this.list.dataLoadingTemplate;
     * ```
     * @memberof IgxListComponent
     */
    dataLoadingTemplate: IgxDataLoadingTemplateDirective;
    /**
     * Sets/gets the template shown when left panning a list item.
     * Default value is `null`.
     * ```html
     *  <igx-list [allowLeftPanning] = "true"></igx-list>
     * ```
     * ```typescript
     * let itemLeftPanTmpl = this.list.listItemLeftPanningTemplate;
     * ```
     * @memberof IgxListComponent
     */
    listItemLeftPanningTemplate: IgxListItemLeftPanningTemplateDirective;
    /**
     * Sets/gets the template shown when right panning a list item.
     * Default value is `null`.
     * ```html
     *  <igx-list [allowLeftPanning] = "true"></igx-list>
     * ```
     * ```typescript
     * let itemRightPanTmpl = this.list.listItemRightPanningTemplate;
     * ```
     * @memberof IgxListComponent
     */
    listItemRightPanningTemplate: IgxListItemRightPanningTemplateDirective;
    /**
     * Provides a threshold after which the item's panning will be completed automatically.
     * By default this property is set to 0.5 which is 50% of the list item's width.
     * ```typescript
     * this.list.panEndTriggeringThreshold = 0.8;
     * ```
     */
    panEndTriggeringThreshold: number;
    /**@hidden*/
    protected defaultEmptyListTemplate: TemplateRef<any>;
    /**@hidden*/
    protected defaultDataLoadingTemplate: TemplateRef<any>;
    /**
     * Sets/gets the `id` of the list.
     * If not set, the `id` of the first list component will be `"igx-list-0"`.
     * ```html
     * <igx-list id = "my-first-list"></igx-list>
     * ```
     * ```typescript
     * let listId =  this.list.id;
     * ```
     * @memberof IgxListComponent
     */
    id: string;
    /**
     * Sets/gets whether the left panning of an item is allowed.
     * Default value is `false`.
     * ```html
     *  <igx-list [allowLeftPanning] = "true"></igx-list>
     * ```
     * ```typescript
     * let isLeftPanningAllowed = this.list.allowLeftPanning;
     * ```
     * @memberof IgxListComponent
     */
    allowLeftPanning: boolean;
    /**
     * Sets/gets whether the right panning of an item is allowed.
     * Default value is `false`.
     * ```html
     *  <igx-list [allowRightPanning] = "true"></igx-list>
     * ```
     * ```typescript
     * let isRightPanningAllowed = this.list.allowRightPanning;
     * ```
     * @memberof IgxListComponent
     */
    allowRightPanning: boolean;
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
     * @memberof IgxListComponent
     */
    isLoading: boolean;
    /**
     * Emits an event within the current list when left pan gesture is executed on a list item.
     * Provides a reference to an object of type `IListItemPanningEventArgs` as an event argument.
     * ```html
     * <igx-list [allowLeftPanning]="true" (onLeftPan)="onLeftPan($event)"></igx-list>
     * ```
     * @memberof IgxListComponent
     */
    onLeftPan: EventEmitter<IListItemPanningEventArgs>;
    /**
     * Emits an event within the current list when right pan gesture is executed on a list item.
     * Provides a reference to an object of type `IListItemPanningEventArgs` as an event argument.
     * ```html
     * <igx-list [allowRightPanning]="true" (onRightPan)="onRightPan($event)"></igx-list>
     * ```
     * @memberof IgxListComponent
     */
    onRightPan: EventEmitter<IListItemPanningEventArgs>;
    /**
    * Emits an event within the current list when pan gesture is executed on list item.
    * Provides references to the `IgxListItemComponent` and `IgxListPanState` as event arguments.
    * ```html
    * <igx-list (onPanStateChange) = "onPanStateChange($event)"></igx-list>
    * ```
    * @memberof IgxListComponent
    */
    onPanStateChange: EventEmitter<IPanStateChangeEventArgs>;
    /**
     * Emits an event within the current list when a list item has been clicked.
     * Provides references to the `IgxListItemComponent` and `Event` as event arguments.
     *  ```html
     * <igx-list (onItemClicked) = "onItemClicked($event)"></igx-list>
     * ```
     * @memberof IgxListComponent
     */
    onItemClicked: EventEmitter<IListItemClickEventArgs>;
    /**
     * Gets the `role` attribute.
     * ```typescript
     * let listRole =  this.list.role;
     * ```
     * @memberof IgxListComponent
     */
    readonly role: string;
    /**
     * Returns boolean indicating if the list is empty.
     * ```typescript
     * let isEmpty =  this.list.isListEmpty;
     * ```
     * @memberof IgxListComponent
     */
    readonly isListEmpty: boolean;
    /**
     * @hidden
     */
    readonly cssClass: boolean;
    /**
     * @hidden
     */
    readonly cssClassCompact: boolean;
    /**
     * @hidden
     */
    readonly cssClassCosy: boolean;
    /**
     * Returns the `items` in the list excluding the headers.
     * ```typescript
     * let listItems: IgxListItemComponent[] = this.list.items;
     * ```
     * @memberof IgxListComponent
     */
    readonly items: IgxListItemComponent[];
    /**
     * Returns the headers in the list.
     * ```typescript
     * let listHeaders: IgxListItemComponent[] =  this.list.headers;
     * ```
     * @memberof IgxListComponent
     */
    readonly headers: IgxListItemComponent[];
    /**
     * Returns the `context` object which represents the `template context` binding into the `list container`
     * by providing the `$implicit` declaration which is the `IgxListComponent` itself.
     * ```typescript
     * let listComponent =  this.list.context;
     * ```
     */
    readonly context: any;
    /**
     * Returns the `template` of an empty list.
     * ```typescript
     * let listTemplate = this.list.template;
     * ```
     * @memberof IgxListComponent
     */
    readonly template: TemplateRef<any>;
}
/**
 * @hidden
 */
export declare class IgxListModule {
}
