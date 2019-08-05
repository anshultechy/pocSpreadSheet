import { NgForOfContext } from '@angular/common';
import { ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, DoCheck, EmbeddedViewRef, EventEmitter, IterableChanges, IterableDiffer, IterableDiffers, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, TrackByFunction, ViewContainerRef } from '@angular/core';
import { DisplayContainerComponent } from './display.container';
import { HVirtualHelperComponent } from './horizontal.virtual.helper.component';
import { VirtualHelperComponent } from './virtual.helper.component';
import { IgxForOfSyncService } from './for_of.sync.service';
/**
 *  @publicApi
 */
export declare class IgxForOfContext<T> {
    $implicit: T;
    index: number;
    count: number;
    constructor($implicit: T, index: number, count: number);
    /**
     * A function that returns whether the element is the first or not
     */
    readonly first: boolean;
    /**
     * A function that returns whether the element is the last or not
     */
    readonly last: boolean;
    /**
     * A function that returns whether the element is even or not
     */
    readonly even: boolean;
    /**
     * A function that returns whether the element is odd or not
     */
    readonly odd: boolean;
}
export declare class IgxForOfDirective<T> implements OnInit, OnChanges, DoCheck, OnDestroy {
    private _viewContainer;
    protected _template: TemplateRef<NgForOfContext<T>>;
    protected _differs: IterableDiffers;
    private resolver;
    cdr: ChangeDetectorRef;
    protected _zone: NgZone;
    /**
     * An @Input property that sets the data to be rendered.
     * ```html
     * <ng-template igxFor let-item [igxForOf]="data" [igxForScrollOrientation]="'horizontal'"></ng-template>
     * ```
     */
    igxForOf: any[];
    /**
     * An @Input property that sets the property name from which to read the size in the data object.
     */
    igxForSizePropName: any;
    /**
     * An @Input property that specifies the scroll orientation.
     * Scroll orientation can be "vertical" or "horizontal".
     * ```html
     * <ng-template igxFor let-item [igxForOf]="data" [igxForScrollOrientation]="'horizontal'"></ng-template>
     * ```
     */
    igxForScrollOrientation: string;
    /**
     * Optionally pass the parent `igxFor` instance to create a virtual template scrolling both horizontally and vertically.
     * ```html
     * <ng-template #scrollContainer igxFor let-rowData [igxForOf]="data"
     *       [igxForScrollOrientation]="'vertical'"
     *       [igxForContainerSize]="'500px'"
     *       [igxForItemSize]="'50px'"
     *       let-rowIndex="index">
     *       <div [style.display]="'flex'" [style.height]="'50px'">
     *           <ng-template #childContainer igxFor let-item [igxForOf]="data"
     *               [igxForScrollOrientation]="'horizontal'"
     *               [igxForScrollContainer]="parentVirtDir"
     *               [igxForContainerSize]="'500px'">
     *                   <div [style.min-width]="'50px'">{{rowIndex}} : {{item.text}}</div>
     *           </ng-template>
     *       </div>
     * </ng-template>
     * ```
     */
    igxForScrollContainer: any;
    /**
     * An @Input property that sets the px-affixed size of the container along the axis of scrolling.
     * For "horizontal" orientation this value is the width of the container and for "vertical" is the height.
     * ```html
     * <ng-template igxFor let-item [igxForOf]="data" [igxForContainerSize]="'500px'"
     *      [igxForScrollOrientation]="'horizontal'">
     * </ng-template>
     * ```
     */
    igxForContainerSize: any;
    /**
     * An @Input property that sets the px-affixed size of the item along the axis of scrolling.
     * For "horizontal" orientation this value is the width of the column and for "vertical" is the height or the row.
     * ```html
     * <ng-template igxFor let-item [igxForOf]="data" [igxForScrollOrientation]="'horizontal'" [igxForItemSize]="'50px'"></ng-template>
     * ```
     */
    igxForItemSize: any;
    /**
     * @hidden
     */
    dc: ComponentRef<DisplayContainerComponent>;
    /**
     * The current state of the directive. It contains `startIndex` and `chunkSize`.
     * state.startIndex - The index of the item at which the current visible chunk begins.
     * state.chunkSize - The number of items the current visible chunk holds.
     * These options can be used when implementing remote virtualization as they provide the necessary state information.
     * ```typescript
     * const gridState = this.parentVirtDir.state;
     * ```
     */
    state: IForOfState;
    /**
     * The total count of the virtual data items, when using remote service.
     * ```typescript
     * this.parentVirtDir.totalItemCount = data.Count;
     * ```
     */
    totalItemCount: number;
    /**
     * An event that is emitted after a new chunk has been loaded.
     * ```html
     * <ng-template igxFor [igxForOf]="data" [igxForScrollOrientation]="'horizontal'" (onChunkLoad)="chunkLoad($event)"></ng-template>
     * ```
     * ```typescript
     * chunkLoad(e){
     * alert("chunk loaded!");
     * }
     * ```
     */
    onChunkLoad: EventEmitter<IForOfState>;
    /**
     * An event that is emitted after data has been changed.
     * ```html
     * <ng-template igxFor [igxForOf]="data" [igxForScrollOrientation]="'horizontal'" (onDataChanged)="dataChanged($event)"></ng-template>
     * ```
     * ```typescript
     * dataChanged(e){
     * alert("data changed!");
     * }
     * ```
     */
    onDataChanged: EventEmitter<any>;
    onBeforeViewDestroyed: EventEmitter<EmbeddedViewRef<any>>;
    /**
     * An event that is emitted on chunk loading to emit the current state information - startIndex, endIndex, totalCount.
     * Can be used for implementing remote load on demand for the igxFor data.
     * ```html
     * <ng-template igxFor [igxForOf]="data" [igxForScrollOrientation]="'horizontal'" (onChunkPreload)="chunkPreload($event)"></ng-template>
     * ```
     * ```typescript
     * chunkPreload(e){
     * alert("chunk is loading!");
     * }
     * ```
     */
    onChunkPreload: EventEmitter<IForOfState>;
    protected hScroll: any;
    protected func: any;
    protected _sizesCache: number[];
    protected vh: ComponentRef<VirtualHelperComponent>;
    protected hvh: ComponentRef<HVirtualHelperComponent>;
    protected _differ: IterableDiffer<T> | null;
    protected _trackByFn: TrackByFunction<T>;
    protected heightCache: any[];
    private _adjustToIndex;
    private MAX_PERF_SCROLL_DIFF;
    protected sizesCache: number[];
    private readonly _isScrolledToBottom;
    private readonly _isAtBottomIndex;
    /** Maximum height for an element of the browser. */
    private _maxHeight;
    /** Height that is being virtualized. */
    protected _virtHeight: number;
    /**
     * Ratio for height that's being virtualizaed and the one visible
     * If _virtHeightRatio = 1, the visible height and the virtualized are the same, also _maxHeight > _virtHeight.
     */
    private _virtHeightRatio;
    /** Internal track for scroll top that is being virtualized */
    protected _virtScrollTop: number;
    /** If the next onScroll event is triggered due to internal setting of scrollTop */
    protected _bScrollInternal: boolean;
    /** caching scroll position reduces reflows */
    protected _scrollPosition: number;
    protected _embeddedViews: Array<EmbeddedViewRef<any>>;
    constructor(_viewContainer: ViewContainerRef, _template: TemplateRef<NgForOfContext<T>>, _differs: IterableDiffers, resolver: ComponentFactoryResolver, cdr: ChangeDetectorRef, _zone: NgZone);
    /**
     * @hidden
     */
    protected readonly isRemote: boolean;
    /**
     * @hidden
     * @internal
     */
    /**
    * @hidden
    * @internal
    */
    scrollPosition: number;
    /**
     * @hidden
     */
    protected removeScrollEventListeners(): void;
    verticalScrollHandler(event: any): void;
    isScrollable(): boolean;
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngOnDestroy(): void;
    /**
     * @hidden
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @hidden
     */
    ngDoCheck(): void;
    /**
     * Shifts the scroll thumb position.
     * ```typescript
     * this.parentVirtDir.addScrollTop(5);
     * ```
     * @param addTop negative value to scroll up and positive to scroll down;
     */
    addScrollTop(addTop: number): boolean;
    /**
     * Scrolls to the specified index.
     * ```typescript
     * this.parentVirtDir.scrollTo(5);
     * ```
     * @param index
     */
    scrollTo(index: any): void;
    /**
     * Scrolls by one item into the appropriate next direction.
     * For "horizontal" orientation that will be the right column and for "vertical" that is the lower row.
     * ```typescript
     * this.parentVirtDir.scrollNext();
     * ```
     */
    scrollNext(): void;
    /**
     * Scrolls by one item into the appropriate previous direction.
     * For "horizontal" orientation that will be the left column and for "vertical" that is the upper row.
     * ```typescript
     * this.parentVirtDir.scrollPrev();
     * ```
     */
    scrollPrev(): void;
    /**
     * Scrolls by one page into the appropriate next direction.
     * For "horizontal" orientation that will be one view to the right and for "vertical" that is one view to the bottom.
     * ```typescript
     * this.parentVirtDir.scrollNextPage();
     * ```
     */
    scrollNextPage(): void;
    /**
     * Scrolls by one page into the appropriate previous direction.
     * For "horizontal" orientation that will be one view to the left and for "vertical" that is one view to the top.
     * ```typescript
     * this.parentVirtDir.scrollPrevPage();
     * ```
     */
    scrollPrevPage(): void;
    /**
     * @hidden
     */
    getColumnScrollLeft(colIndex: any): number;
    /**
     * Returns a reference to the vertical scrollbar DOM element.
     * ```typescript
     * this.parentVirtDir.getVerticalScroll();
     * ```
     */
    getVerticalScroll(): any;
    /**
     * Returns the total number of items that are fully visible.
     * ```typescript
     * this.parentVirtDir.getItemCountInView();
     * ```
     */
    getItemCountInView(): number;
    /**
     * Returns a reference to the horizontal scrollbar DOM element.
     * ```typescript
     * this.parentVirtDir.getHorizontalScroll();
     * ```
     */
    getHorizontalScroll(): any;
    /**
     * Returns the size of the element at the specified index.
     * ```typescript
     * this.parentVirtDir.getSizeAt(1);
     * ```
     */
    getSizeAt(index: number): number;
    /**
     * Returns the scroll offset of the element at the specified index.
     * ```typescript
     * this.parentVirtDir.getScrollForIndex(1);
     * ```
     */
    getScrollForIndex(index: number, bottom?: boolean): number;
    /**
     * @hidden
     * Function that is called when scrolling vertically
     */
    protected onScroll(event: any): void;
    /**
     * @hidden
     * Function that recaculates and updates cache sizes.
     */
    recalcUpdateSizes(): void;
    /**
     * @hidden
     */
    protected fixedUpdateAllElements(inScrollTop: number): number;
    /**
     * @hidden
     * The function applies an optimized state change for scrolling down/right employing context change with view rearrangement
     */
    protected moveApplyScrollNext(prevIndex: number): void;
    /**
     * @hidden
     * The function applies an optimized state change for scrolling up/left employing context change with view rearrangement
     */
    protected moveApplyScrollPrev(prevIndex: number): void;
    /**
     * @hidden
    */
    protected getContextIndex(input: any): number;
    /**
     * @hidden
     * The function applies an optimized state change through context change for each view
     */
    protected fixedApplyScroll(): void;
    /**
     * @hidden
     * Function that is called when scrolling horizontally
     */
    protected onHScroll(event: any): void;
    /**
     * Gets the function used to track changes in the items collection.
     * By default the object references are compared. However this can be optimized if you have unique identifier
     * value that can be used for the comparison instead of the object ref or if you have some other property values
     * in the item object that should be tracked for changes.
     * This option is similar to ngForTrackBy.
     * ```typescript
     * const trackFunc = this.parentVirtDir.igxForTrackBy;
     * ```
     */
    /**
    * Sets the function used to track changes in the items collection.
    * This function can be set in scenarios where you want to optimize or
    * customize the tracking of changes for the items in the collection.
    * The igxForTrackBy function takes the index and the current item as arguments and needs to return the unique identifier for this item.
    * ```typescript
    * this.parentVirtDir.igxForTrackBy = (index, item) => {
    *      return item.id + item.width;
    * };
    * ```
    */
    igxForTrackBy: TrackByFunction<T>;
    /**
     * @hidden
     */
    protected _applyChanges(): void;
    /**
     * @hidden
     */
    protected _calcMaxBrowserHeight(): number;
    /**
     * @hidden
     * Recalculates the chunkSize based on current startIndex and returns the new size.
     * This should be called after this.state.startIndex is updated, not before.
     */
    protected _calculateChunkSize(): number;
    /**
     * @hidden
     */
    protected getElement(viewref: any, nodeName: any): any;
    /**
     * @hidden
     */
    protected initSizesCache(items: any[]): number;
    protected _updateSizeCache(): void;
    /**
     * @hidden
     */
    protected _calcMaxChunkSize(): number;
    /**
     * @hidden
     */
    protected getIndexAt(left: any, set: any, index: any): number;
    protected _recalcScrollBarSize(): void;
    protected _calcHeight(): number;
    protected _recalcOnContainerChange(changes: SimpleChanges): void;
    /**
     * @hidden
     * Removes an elemenet from the embedded views and updates chunkSize.
     */
    protected removeLastElem(): void;
    /**
     * @hidden
     * If there exists an element that we can create embedded view for creates it, appends it and updates chunkSize
     */
    protected addLastElem(): void;
    /**
     * Recalculates chunkSize and adds/removes elements if need due to the change.
     * this.state.chunkSize is updated in @addLastElem() or @removeLastElem()
     */
    protected applyChunkSizeChange(): void;
    protected _updateScrollOffset(): void;
    private _updateVScrollOffset;
    private _updateHScrollOffset;
    private _getItemSize;
}
export declare function getTypeNameForDebugging(type: any): string;
export interface IForOfState {
    startIndex?: number;
    chunkSize?: number;
}
export interface IForOfDataChangingEventArgs {
    containerSize: number;
}
export declare class IgxGridForOfDirective<T> extends IgxForOfDirective<T> implements OnInit, OnChanges, DoCheck {
    protected syncService: IgxForOfSyncService;
    constructor(_viewContainer: ViewContainerRef, _template: TemplateRef<NgForOfContext<T>>, _differs: IterableDiffers, resolver: ComponentFactoryResolver, cdr: ChangeDetectorRef, _zone: NgZone, syncService: IgxForOfSyncService);
    igxGridForOf: any;
    /**
     * @hidden @internal
     * An event that is emitted after data has been changed but before the view is refreshed
     */
    onDataChanging: EventEmitter<IForOfDataChangingEventArgs>;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @hidden
     * @internal
     */
    /**
    * @hidden
    * @internal
    */
    sizesCache: number[];
    protected readonly itemsDimension: any;
    protected getItemSize(item: any): number;
    protected initSizesCache(items: any[]): number;
    protected _updateSizeCache(changes?: IterableChanges<T>): void;
    protected handleCacheChanges(changes: IterableChanges<T>): number;
    /**
     * @hidden
     * @internal
     */
    assumeMaster(): void;
    ngDoCheck(): void;
    onScroll(event: any): void;
    onHScroll(scrollAmount: any): void;
    protected addLastElem(): void;
    protected _updateViews(prevChunkSize: any): void;
    protected _applyChanges(): void;
    /**
     * @hidden
     */
    protected _calcMaxChunkSize(): number;
}
/**
 * @hidden
 */
export declare class IgxForOfModule {
}
