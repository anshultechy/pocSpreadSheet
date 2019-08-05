/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, ComponentFactoryResolver, Directive, EventEmitter, Input, IterableDiffers, NgModule, NgZone, Output, TemplateRef, ViewContainerRef } from '@angular/core';
import { DisplayContainerComponent } from './display.container';
import { HVirtualHelperComponent } from './horizontal.virtual.helper.component';
import { VirtualHelperComponent } from './virtual.helper.component';
import { IgxScrollInertiaModule } from './../scroll-inertia/scroll_inertia.directive';
import { IgxForOfSyncService } from './for_of.sync.service';
/**
 * \@publicApi
 * @template T
 */
export class IgxForOfContext {
    /**
     * @param {?} $implicit
     * @param {?} index
     * @param {?} count
     */
    constructor($implicit, index, count) {
        this.$implicit = $implicit;
        this.index = index;
        this.count = count;
    }
    /**
     * A function that returns whether the element is the first or not
     * @return {?}
     */
    get first() { return this.index === 0; }
    /**
     * A function that returns whether the element is the last or not
     * @return {?}
     */
    get last() { return this.index === this.count - 1; }
    /**
     * A function that returns whether the element is even or not
     * @return {?}
     */
    get even() { return this.index % 2 === 0; }
    /**
     * A function that returns whether the element is odd or not
     * @return {?}
     */
    get odd() { return !this.even; }
}
if (false) {
    /** @type {?} */
    IgxForOfContext.prototype.$implicit;
    /** @type {?} */
    IgxForOfContext.prototype.index;
    /** @type {?} */
    IgxForOfContext.prototype.count;
}
/**
 * @template T
 */
export class IgxForOfDirective {
    /**
     * @param {?} _viewContainer
     * @param {?} _template
     * @param {?} _differs
     * @param {?} resolver
     * @param {?} cdr
     * @param {?} _zone
     */
    constructor(_viewContainer, _template, _differs, resolver, cdr, _zone) {
        this._viewContainer = _viewContainer;
        this._template = _template;
        this._differs = _differs;
        this.resolver = resolver;
        this.cdr = cdr;
        this._zone = _zone;
        /**
         * The current state of the directive. It contains `startIndex` and `chunkSize`.
         * state.startIndex - The index of the item at which the current visible chunk begins.
         * state.chunkSize - The number of items the current visible chunk holds.
         * These options can be used when implementing remote virtualization as they provide the necessary state information.
         * ```typescript
         * const gridState = this.parentVirtDir.state;
         * ```
         */
        this.state = {
            startIndex: 0,
            chunkSize: 0
        };
        /**
         * The total count of the virtual data items, when using remote service.
         * ```typescript
         * this.parentVirtDir.totalItemCount = data.Count;
         * ```
         */
        this.totalItemCount = null;
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
        this.onChunkLoad = new EventEmitter();
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
        this.onDataChanged = new EventEmitter();
        this.onBeforeViewDestroyed = new EventEmitter();
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
        this.onChunkPreload = new EventEmitter();
        this._sizesCache = [];
        this._differ = null;
        this.heightCache = [];
        this.MAX_PERF_SCROLL_DIFF = 4;
        /**
         * Height that is being virtualized.
         */
        this._virtHeight = 0;
        /**
         * Ratio for height that's being virtualizaed and the one visible
         * If _virtHeightRatio = 1, the visible height and the virtualized are the same, also _maxHeight > _virtHeight.
         */
        this._virtHeightRatio = 1;
        /**
         * Internal track for scroll top that is being virtualized
         */
        this._virtScrollTop = 0;
        /**
         * If the next onScroll event is triggered due to internal setting of scrollTop
         */
        this._bScrollInternal = false;
        // End properties related to virtual height handling
        /**
         * caching scroll position reduces reflows
         */
        this._scrollPosition = 0;
        this._embeddedViews = [];
    }
    /**
     * @protected
     * @return {?}
     */
    get sizesCache() {
        return this._sizesCache;
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    set sizesCache(value) {
        this._sizesCache = value;
    }
    /**
     * @private
     * @return {?}
     */
    get _isScrolledToBottom() {
        if (!this.getVerticalScroll()) {
            return true;
        }
        /** @type {?} */
        const scrollHeight = this.getVerticalScroll().scrollHeight;
        // Use === and not >= because `scrollTop + container size` can't be bigger than `scrollHeight`, unless something isn't updated.
        // Also use Math.round because Chrome has some inconsistencies and `scrollTop + container` can be float when zooming the page.
        return Math.round(this.scrollPosition + this.igxForContainerSize) === scrollHeight;
    }
    /**
     * @private
     * @return {?}
     */
    get _isAtBottomIndex() {
        return this.igxForOf && this.state.startIndex + this.state.chunkSize > this.igxForOf.length;
    }
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    get isRemote() {
        return this.totalItemCount !== null;
    }
    /**
     * @hidden
     * \@internal
     * @return {?}
     */
    get scrollPosition() {
        return this._scrollPosition;
    }
    /**
     * @hidden
     * \@internal
     * @param {?} val
     * @return {?}
     */
    set scrollPosition(val) {
        this._scrollPosition = val;
        if (this.igxForScrollOrientation === 'horizontal' && this.hScroll) {
            this.hScroll.scrollLeft = val;
        }
        else if (this.vh) {
            this.vh.instance.elementRef.nativeElement.scrollTop = val;
        }
    }
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    removeScrollEventListeners() {
        if (this.igxForScrollOrientation === 'horizontal') {
            this._zone.runOutsideAngular(() => this.getHorizontalScroll().removeEventListener('scroll', this.func));
        }
        else {
            /** @type {?} */
            const vertical = this.getVerticalScroll();
            if (vertical) {
                this._zone.runOutsideAngular(() => vertical.removeEventListener('scroll', this.verticalScrollHandler));
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    verticalScrollHandler(event) {
        this.onScroll(event);
    }
    /**
     * @return {?}
     */
    isScrollable() {
        return this.vh.instance.height > parseInt(this.igxForContainerSize, 10);
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let totalSize = 0;
        /** @type {?} */
        const vc = this.igxForScrollContainer ? this.igxForScrollContainer._viewContainer : this._viewContainer;
        this.igxForSizePropName = this.igxForSizePropName || 'width';
        /** @type {?} */
        const dcFactory = this.resolver.resolveComponentFactory(DisplayContainerComponent);
        this.dc = this._viewContainer.createComponent(dcFactory, 0);
        this.dc.instance.scrollDirection = this.igxForScrollOrientation;
        if (typeof MSGesture === 'function') {
            // On Edge and IE when scrolling on touch the page scroll instead of the grid.
            this.dc.instance._viewContainer.element.nativeElement.style.touchAction = 'none';
        }
        if (this.igxForOf && this.igxForOf.length) {
            totalSize = this.initSizesCache(this.igxForOf);
            this.hScroll = this.getElement(vc, 'igx-horizontal-virtual-helper');
            this.state.chunkSize = this._calculateChunkSize();
            this.dc.instance.notVirtual = !(this.igxForContainerSize && this.state.chunkSize < this.igxForOf.length);
            if (this.hScroll) {
                this._scrollPosition = this.hScroll.scrollLeft;
                this.state.startIndex = Math.min(this.getIndexAt(this.scrollPosition, this.sizesCache, 0), this.igxForOf.length - this.state.chunkSize);
            }
            for (let i = this.state.startIndex; i < this.state.startIndex + this.state.chunkSize &&
                this.igxForOf[i] !== undefined; i++) {
                /** @type {?} */
                const input = this.igxForOf[i];
                /** @type {?} */
                const embeddedView = this.dc.instance._vcr.createEmbeddedView(this._template, new IgxForOfContext(input, this.getContextIndex(input), this.igxForOf.length));
                this._embeddedViews.push(embeddedView);
            }
        }
        if (this.igxForScrollOrientation === 'vertical') {
            this.dc.instance._viewContainer.element.nativeElement.style.top = '0px';
            /** @type {?} */
            const factory = this.resolver.resolveComponentFactory(VirtualHelperComponent);
            this.vh = vc.createComponent(factory);
            this._maxHeight = this._calcMaxBrowserHeight();
            this.vh.instance.height = this.igxForOf ? this._calcHeight() : 0;
            this._zone.runOutsideAngular(() => {
                this.verticalScrollHandler = this.verticalScrollHandler.bind(this);
                this.vh.instance.elementRef.nativeElement.addEventListener('scroll', this.verticalScrollHandler);
                this.dc.instance.scrollContainer = this.vh.instance.elementRef.nativeElement;
            });
        }
        if (this.igxForScrollOrientation === 'horizontal') {
            this.func = (evt) => { this.onHScroll(evt); };
            this.hScroll = this.getElement(vc, 'igx-horizontal-virtual-helper');
            if (!this.hScroll) {
                /** @type {?} */
                const hvFactory = this.resolver.resolveComponentFactory(HVirtualHelperComponent);
                this.hvh = vc.createComponent(hvFactory);
                this.hvh.instance.width = totalSize;
                this.hScroll = this.hvh.instance.elementRef.nativeElement;
                this._zone.runOutsideAngular(() => {
                    this.hvh.instance.elementRef.nativeElement.addEventListener('scroll', this.func);
                    this.dc.instance.scrollContainer = this.hScroll;
                });
            }
            else {
                this._zone.runOutsideAngular(() => {
                    this.hScroll.addEventListener('scroll', this.func);
                    this.dc.instance.scrollContainer = this.hScroll;
                });
            }
            this._updateHScrollOffset();
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        this.removeScrollEventListeners();
    }
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const forOf = 'igxForOf';
        if (forOf in changes) {
            /** @type {?} */
            const value = changes[forOf].currentValue;
            if (!this._differ && value) {
                try {
                    this._differ = this._differs.find(value).create(this.igxForTrackBy);
                }
                catch (e) {
                    throw new Error(`Cannot find a differ supporting object "${value}" of type "${getTypeNameForDebugging(value)}".
                     NgFor only supports binding to Iterables such as Arrays.`);
                }
            }
        }
        /** @type {?} */
        const defaultItemSize = 'igxForItemSize';
        if (defaultItemSize in changes && !changes[defaultItemSize].firstChange && this.igxForScrollOrientation === 'vertical') {
            // handle default item size changed.
            this.initSizesCache(this.igxForOf);
            this._applyChanges();
        }
        /** @type {?} */
        const containerSize = 'igxForContainerSize';
        if (containerSize in changes && !changes[containerSize].firstChange && this.igxForOf) {
            this._recalcOnContainerChange(changes);
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngDoCheck() {
        if (this._differ) {
            /** @type {?} */
            const changes = this._differ.diff(this.igxForOf);
            if (changes) {
                //  re-init cache.
                if (!this.igxForOf) {
                    return;
                }
                this._updateSizeCache();
                this._zone.run(() => {
                    this._applyChanges();
                    this.cdr.markForCheck();
                    this._updateScrollOffset();
                    this.onDataChanged.emit();
                });
            }
        }
    }
    /**
     * Shifts the scroll thumb position.
     * ```typescript
     * this.parentVirtDir.addScrollTop(5);
     * ```
     * @param {?} addTop negative value to scroll up and positive to scroll down;
     * @return {?}
     */
    addScrollTop(addTop) {
        if (addTop === 0 && this.igxForScrollOrientation === 'horizontal') {
            return false;
        }
        /** @type {?} */
        const originalVirtScrollTop = this._virtScrollTop;
        /** @type {?} */
        const containerSize = parseInt(this.igxForContainerSize, 10);
        /** @type {?} */
        const maxVirtScrollTop = this._virtHeight - containerSize;
        this._bScrollInternal = true;
        this._virtScrollTop += addTop;
        this._virtScrollTop = this._virtScrollTop > 0 ?
            (this._virtScrollTop < maxVirtScrollTop ? this._virtScrollTop : maxVirtScrollTop) :
            0;
        this.scrollPosition += addTop / this._virtHeightRatio;
        if (Math.abs(addTop / this._virtHeightRatio) < 1) {
            // Actual scroll delta that was added is smaller than 1 and onScroll handler doesn't trigger when scrolling < 1px
            /** @type {?} */
            const scrollOffset = this.fixedUpdateAllElements(this._virtScrollTop);
            // scrollOffset = scrollOffset !== parseInt(this.igxForItemSize, 10) ? scrollOffset : 0;
            this.dc.instance._viewContainer.element.nativeElement.style.top = -(scrollOffset) + 'px';
        }
        /** @type {?} */
        const maxRealScrollTop = this.vh.instance.elementRef.nativeElement.scrollHeight - containerSize;
        if ((this._virtScrollTop > 0 && this.scrollPosition === 0) ||
            (this._virtScrollTop < maxVirtScrollTop && this.scrollPosition === maxRealScrollTop)) {
            // Actual scroll position is at the top or bottom, but virtual one is not at the top or bottom (there's more to scroll)
            // Recalculate actual scroll position based on the virtual scroll.
            this.scrollPosition = this._virtScrollTop / this._virtHeightRatio;
        }
        else if (this._virtScrollTop === 0 && this.scrollPosition > 0) {
            // Actual scroll position is not at the top, but virtual scroll is. Just update the actual scroll
            this.scrollPosition = 0;
        }
        else if (this._virtScrollTop === maxVirtScrollTop && this.scrollPosition < maxRealScrollTop) {
            // Actual scroll position is not at the bottom, but virtual scroll is. Just update the acual scroll
            this.scrollPosition = maxRealScrollTop;
        }
        return this._virtScrollTop !== originalVirtScrollTop;
    }
    /**
     * Scrolls to the specified index.
     * ```typescript
     * this.parentVirtDir.scrollTo(5);
     * ```
     * @param {?} index
     * @return {?}
     */
    scrollTo(index) {
        if (index < 0 || index > (this.isRemote ? this.totalItemCount : this.igxForOf.length) - 1) {
            return;
        }
        /** @type {?} */
        const containerSize = parseInt(this.igxForContainerSize, 10);
        /** @type {?} */
        const isPrevItem = index < this.state.startIndex || this.scrollPosition > this.sizesCache[index];
        /** @type {?} */
        let nextScroll = isPrevItem ? this.sizesCache[index] : this.sizesCache[index + 1] - containerSize;
        if (nextScroll < 0) {
            return;
        }
        if (this.igxForScrollOrientation === 'horizontal') {
            this.scrollPosition = nextScroll;
        }
        else {
            /** @type {?} */
            const maxVirtScrollTop = this._virtHeight - containerSize;
            if (nextScroll > maxVirtScrollTop) {
                nextScroll = maxVirtScrollTop;
            }
            this._bScrollInternal = true;
            this._virtScrollTop = nextScroll;
            this.scrollPosition = this._virtScrollTop / this._virtHeightRatio;
            this._adjustToIndex = !isPrevItem ? index : null;
        }
    }
    /**
     * Scrolls by one item into the appropriate next direction.
     * For "horizontal" orientation that will be the right column and for "vertical" that is the lower row.
     * ```typescript
     * this.parentVirtDir.scrollNext();
     * ```
     * @return {?}
     */
    scrollNext() {
        /** @type {?} */
        const scr = Math.ceil(this.scrollPosition);
        /** @type {?} */
        const endIndex = this.getIndexAt(scr + parseInt(this.igxForContainerSize, 10), this.sizesCache, 0);
        this.scrollTo(endIndex);
    }
    /**
     * Scrolls by one item into the appropriate previous direction.
     * For "horizontal" orientation that will be the left column and for "vertical" that is the upper row.
     * ```typescript
     * this.parentVirtDir.scrollPrev();
     * ```
     * @return {?}
     */
    scrollPrev() {
        this.scrollTo(this.state.startIndex - 1);
    }
    /**
     * Scrolls by one page into the appropriate next direction.
     * For "horizontal" orientation that will be one view to the right and for "vertical" that is one view to the bottom.
     * ```typescript
     * this.parentVirtDir.scrollNextPage();
     * ```
     * @return {?}
     */
    scrollNextPage() {
        if (this.igxForScrollOrientation === 'horizontal') {
            this.scrollPosition += parseInt(this.igxForContainerSize, 10);
        }
        else {
            this.addScrollTop(parseInt(this.igxForContainerSize, 10));
        }
    }
    /**
     * Scrolls by one page into the appropriate previous direction.
     * For "horizontal" orientation that will be one view to the left and for "vertical" that is one view to the top.
     * ```typescript
     * this.parentVirtDir.scrollPrevPage();
     * ```
     * @return {?}
     */
    scrollPrevPage() {
        if (this.igxForScrollOrientation === 'horizontal') {
            this.scrollPosition -= parseInt(this.igxForContainerSize, 10);
        }
        else {
            /** @type {?} */
            const containerSize = (parseInt(this.igxForContainerSize, 10));
            this.addScrollTop(-containerSize);
        }
    }
    /**
     * @hidden
     * @param {?} colIndex
     * @return {?}
     */
    getColumnScrollLeft(colIndex) {
        return this.sizesCache[colIndex];
    }
    /**
     * Returns a reference to the vertical scrollbar DOM element.
     * ```typescript
     * this.parentVirtDir.getVerticalScroll();
     * ```
     * @return {?}
     */
    getVerticalScroll() {
        if (this.vh) {
            return this.vh.instance.elementRef.nativeElement;
        }
        return null;
    }
    /**
     * Returns the total number of items that are fully visible.
     * ```typescript
     * this.parentVirtDir.getItemCountInView();
     * ```
     * @return {?}
     */
    getItemCountInView() {
        /** @type {?} */
        let startIndex = this.getIndexAt(this.scrollPosition, this.sizesCache, 0);
        if (this.scrollPosition - this.sizesCache[startIndex] > 0) {
            // fisrt item is not fully in view
            startIndex++;
        }
        /** @type {?} */
        const endIndex = this.getIndexAt(this.scrollPosition + parseInt(this.igxForContainerSize, 10), this.sizesCache, 0);
        return endIndex - startIndex;
    }
    /**
     * Returns a reference to the horizontal scrollbar DOM element.
     * ```typescript
     * this.parentVirtDir.getHorizontalScroll();
     * ```
     * @return {?}
     */
    getHorizontalScroll() {
        return this.getElement(this._viewContainer, 'igx-horizontal-virtual-helper') || this.hScroll;
    }
    /**
     * Returns the size of the element at the specified index.
     * ```typescript
     * this.parentVirtDir.getSizeAt(1);
     * ```
     * @param {?} index
     * @return {?}
     */
    getSizeAt(index) {
        return this.sizesCache[index + 1] - this.sizesCache[index];
    }
    /**
     * Returns the scroll offset of the element at the specified index.
     * ```typescript
     * this.parentVirtDir.getScrollForIndex(1);
     * ```
     * @param {?} index
     * @param {?=} bottom
     * @return {?}
     */
    getScrollForIndex(index, bottom) {
        /** @type {?} */
        const containerSize = parseInt(this.igxForContainerSize, 10);
        /** @type {?} */
        const scroll = bottom ? Math.max(0, this.sizesCache[index + 1] - containerSize) : this.sizesCache[index];
        return scroll;
    }
    /**
     * @hidden
     * Function that is called when scrolling vertically
     * @protected
     * @param {?} event
     * @return {?}
     */
    onScroll(event) {
        /* in certain situations this may be called when no scrollbar is visible */
        if (!parseInt(this.vh.instance.elementRef.nativeElement.style.height, 10)) {
            return;
        }
        /** @type {?} */
        const containerSize = parseInt(this.igxForContainerSize, 10);
        /** @type {?} */
        const maxRealScrollTop = event.target.children[0].scrollHeight - containerSize;
        /** @type {?} */
        const realPercentScrolled = event.target.scrollTop / maxRealScrollTop;
        if (!this._bScrollInternal) {
            /** @type {?} */
            const maxVirtScrollTop = this._virtHeight - containerSize;
            this._virtScrollTop = realPercentScrolled * maxVirtScrollTop;
        }
        else {
            this._bScrollInternal = false;
        }
        this._scrollPosition = this._virtScrollTop;
        /** @type {?} */
        const prevStartIndex = this.state.startIndex;
        /** @type {?} */
        const scrollOffset = this.fixedUpdateAllElements(this._virtScrollTop);
        this.dc.instance._viewContainer.element.nativeElement.style.top = -(scrollOffset) + 'px';
        requestAnimationFrame(() => {
            // check if height/width has changes in views.
            this.recalcUpdateSizes();
        });
        this.dc.changeDetectorRef.detectChanges();
        if (prevStartIndex !== this.state.startIndex) {
            this.onChunkLoad.emit(this.state);
        }
    }
    /**
     * @hidden
     * Function that recaculates and updates cache sizes.
     * @return {?}
     */
    recalcUpdateSizes() {
        /** @type {?} */
        const dimension = this.igxForScrollOrientation === 'horizontal' ?
            this.igxForSizePropName : 'height';
        /** @type {?} */
        const diffs = [];
        /** @type {?} */
        let totalDiff = 0;
        for (let i = 0; i < this._embeddedViews.length; i++) {
            /** @type {?} */
            const view = this._embeddedViews[i];
            /** @type {?} */
            const rNode = view.rootNodes.find((node) => node.nodeType === Node.ELEMENT_NODE);
            if (rNode) {
                /** @type {?} */
                const h = rNode.offsetHeight ? rNode.offsetHeight : parseInt(this.igxForItemSize, 10);
                /** @type {?} */
                const index = this.state.startIndex + i;
                if (!this.isRemote && !this.igxForOf[index]) {
                    continue;
                }
                /** @type {?} */
                const oldVal = dimension === 'height' ? this.heightCache[index] : this.igxForOf[index][dimension];
                /** @type {?} */
                const newVal = dimension === 'height' ? h : rNode.clientWidth;
                if (dimension === 'height') {
                    this.heightCache[index] = newVal;
                }
                else {
                    this.igxForOf[index][dimension] = newVal;
                }
                /** @type {?} */
                const currDiff = newVal - oldVal;
                diffs.push(currDiff);
                totalDiff += currDiff;
                this.sizesCache[index + 1] += totalDiff;
            }
        }
        // update cache
        if (Math.abs(totalDiff) > 0) {
            for (let j = this.state.startIndex + this.state.chunkSize + 1; j < this.sizesCache.length; j++) {
                this.sizesCache[j] += totalDiff;
            }
            // update scrBar heights/widths
            if (this.igxForScrollOrientation === 'horizontal') {
                /** @type {?} */
                const totalWidth = parseInt(this.hScroll.children[0].style.width, 10) + totalDiff;
                this.hScroll.children[0].style.width = totalWidth + 'px';
            }
            /** @type {?} */
            const reducer = (acc, val) => acc + val;
            if (this.igxForScrollOrientation === 'vertical') {
                /** @type {?} */
                const scrToBottom = this._isScrolledToBottom && !this.dc.instance.notVirtual;
                /** @type {?} */
                const hSum = this.heightCache.reduce(reducer);
                if (hSum > this._maxHeight) {
                    this._virtHeightRatio = hSum / this._maxHeight;
                }
                this.vh.instance.height = Math.min(this.vh.instance.height + totalDiff, this._maxHeight);
                this._virtHeight = hSum;
                if (!this.vh.instance.destroyed) {
                    this.vh.instance.cdr.detectChanges();
                }
                if (scrToBottom && !this._isAtBottomIndex) {
                    /** @type {?} */
                    const containerSize = parseInt(this.igxForContainerSize, 10);
                    /** @type {?} */
                    const maxVirtScrollTop = this._virtHeight - containerSize;
                    this._bScrollInternal = true;
                    this._virtScrollTop = maxVirtScrollTop;
                    this.scrollPosition = maxVirtScrollTop;
                    return;
                }
                if (this._adjustToIndex) {
                    // in case scrolled to specific index where after scroll heights are changed
                    // need to adjust the offsets so that item is last in view.
                    /** @type {?} */
                    const updatesToIndex = this._adjustToIndex - this.state.startIndex + 1;
                    /** @type {?} */
                    const sumDiffs = diffs.slice(0, updatesToIndex).reduce(reducer);
                    /** @type {?} */
                    const currOffset = parseInt(this.dc.instance._viewContainer.element.nativeElement.style.top, 10);
                    this.dc.instance._viewContainer.element.nativeElement.style.top = (currOffset - sumDiffs) + 'px';
                    this._adjustToIndex = null;
                }
            }
        }
    }
    /**
     * @hidden
     * @protected
     * @param {?} inScrollTop
     * @return {?}
     */
    fixedUpdateAllElements(inScrollTop) {
        /** @type {?} */
        const count = this.isRemote ? this.totalItemCount : this.igxForOf.length;
        /** @type {?} */
        let newStart = this.getIndexAt(inScrollTop, this.sizesCache, 0);
        if (newStart + this.state.chunkSize > count) {
            newStart = count - this.state.chunkSize;
        }
        /** @type {?} */
        const prevStart = this.state.startIndex;
        /** @type {?} */
        const diff = newStart - this.state.startIndex;
        this.state.startIndex = newStart;
        if (diff) {
            this.onChunkPreload.emit(this.state);
            if (!this.isRemote) {
                /*recalculate and apply page size.*/
                if (diff > 0 && diff <= this.MAX_PERF_SCROLL_DIFF) {
                    this.moveApplyScrollNext(prevStart);
                }
                else if (diff < 0 && Math.abs(diff) <= this.MAX_PERF_SCROLL_DIFF) {
                    this.moveApplyScrollPrev(prevStart);
                }
                else {
                    this.fixedApplyScroll();
                }
            }
        }
        return inScrollTop - this.sizesCache[this.state.startIndex];
    }
    /**
     * @hidden
     * The function applies an optimized state change for scrolling down/right employing context change with view rearrangement
     * @protected
     * @param {?} prevIndex
     * @return {?}
     */
    moveApplyScrollNext(prevIndex) {
        /** @type {?} */
        const start = prevIndex + this.state.chunkSize;
        for (let i = start; i < start + this.state.startIndex - prevIndex && this.igxForOf[i] !== undefined; i++) {
            /** @type {?} */
            const input = this.igxForOf[i];
            /** @type {?} */
            const embView = this._embeddedViews.shift();
            /** @type {?} */
            const cntx = embView.context;
            cntx.$implicit = input;
            cntx.index = this.getContextIndex(input);
            cntx.count = this.igxForOf.length;
            /** @type {?} */
            const view = this.dc.instance._vcr.detach(0);
            this.dc.instance._vcr.insert(view);
            this._embeddedViews.push(embView);
        }
    }
    /**
     * @hidden
     * The function applies an optimized state change for scrolling up/left employing context change with view rearrangement
     * @protected
     * @param {?} prevIndex
     * @return {?}
     */
    moveApplyScrollPrev(prevIndex) {
        for (let i = prevIndex - 1; i >= this.state.startIndex && this.igxForOf[i] !== undefined; i--) {
            /** @type {?} */
            const input = this.igxForOf[i];
            /** @type {?} */
            const embView = this._embeddedViews.pop();
            /** @type {?} */
            const cntx = embView.context;
            cntx.$implicit = input;
            cntx.index = this.getContextIndex(input);
            /** @type {?} */
            const view = this.dc.instance._vcr.detach(this.dc.instance._vcr.length - 1);
            this.dc.instance._vcr.insert(view, 0);
            this._embeddedViews.unshift(embView);
        }
    }
    /**
     * @hidden
     * @protected
     * @param {?} input
     * @return {?}
     */
    getContextIndex(input) {
        return this.isRemote ? this.state.startIndex + this.igxForOf.indexOf(input) : this.igxForOf.indexOf(input);
    }
    /**
     * @hidden
     * The function applies an optimized state change through context change for each view
     * @protected
     * @return {?}
     */
    fixedApplyScroll() {
        /** @type {?} */
        let j = 0;
        /** @type {?} */
        const endIndex = this.state.startIndex + this.state.chunkSize;
        for (let i = this.state.startIndex; i < endIndex && this.igxForOf[i] !== undefined; i++) {
            /** @type {?} */
            const input = this.igxForOf[i];
            /** @type {?} */
            const embView = this._embeddedViews[j++];
            /** @type {?} */
            const cntx = ((/** @type {?} */ (embView))).context;
            cntx.$implicit = input;
            cntx.index = this.getContextIndex(input);
            cntx.count = this.igxForOf.length;
        }
    }
    /**
     * @hidden
     * Function that is called when scrolling horizontally
     * @protected
     * @param {?} event
     * @return {?}
     */
    onHScroll(event) {
        /* in certain situations this may be called when no scrollbar is visible */
        if (!parseInt(this.hScroll.children[0].style.width, 10)) {
            return;
        }
        this._scrollPosition = event.target.scrollLeft;
        /** @type {?} */
        const prevStartIndex = this.state.startIndex;
        // Updating horizontal chunks
        /** @type {?} */
        const scrollOffset = this.fixedUpdateAllElements(this._scrollPosition);
        this.dc.instance._viewContainer.element.nativeElement.style.left = -scrollOffset + 'px';
        this.dc.changeDetectorRef.detectChanges();
        if (prevStartIndex !== this.state.startIndex) {
            this.onChunkLoad.emit(this.state);
        }
    }
    /**
     * Gets the function used to track changes in the items collection.
     * By default the object references are compared. However this can be optimized if you have unique identifier
     * value that can be used for the comparison instead of the object ref or if you have some other property values
     * in the item object that should be tracked for changes.
     * This option is similar to ngForTrackBy.
     * ```typescript
     * const trackFunc = this.parentVirtDir.igxForTrackBy;
     * ```
     * @return {?}
     */
    get igxForTrackBy() { return this._trackByFn; }
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
     * @param {?} fn
     * @return {?}
     */
    set igxForTrackBy(fn) { this._trackByFn = fn; }
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    _applyChanges() {
        /** @type {?} */
        const prevChunkSize = this.state.chunkSize;
        this.applyChunkSizeChange();
        this._recalcScrollBarSize();
        if (this.igxForOf && this.igxForOf.length && this.dc) {
            /** @type {?} */
            const embeddedViewCopy = Object.assign([], this._embeddedViews);
            /** @type {?} */
            let startIndex = this.state.startIndex;
            /** @type {?} */
            let endIndex = this.state.chunkSize + this.state.startIndex;
            if (this.isRemote) {
                startIndex = 0;
                endIndex = this.igxForOf.length;
            }
            for (let i = startIndex; i < endIndex && this.igxForOf[i] !== undefined; i++) {
                /** @type {?} */
                const input = this.igxForOf[i];
                /** @type {?} */
                const embView = embeddedViewCopy.shift();
                /** @type {?} */
                const cntx = ((/** @type {?} */ (embView))).context;
                cntx.$implicit = input;
                cntx.index = this.getContextIndex(input);
                cntx.count = this.igxForOf.length;
            }
            this.dc.changeDetectorRef.detectChanges();
            if (prevChunkSize !== this.state.chunkSize) {
                this.onChunkLoad.emit(this.state);
            }
            if (this.igxForScrollOrientation === 'vertical') {
                this.recalcUpdateSizes();
            }
        }
    }
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    _calcMaxBrowserHeight() {
        /** @type {?} */
        const div = document.createElement('div');
        /** @type {?} */
        const style = div.style;
        style.position = 'absolute';
        style.top = '9999999999999999px';
        document.body.appendChild(div);
        /** @type {?} */
        const size = Math.abs(div.getBoundingClientRect()['top']);
        document.body.removeChild(div);
        return size;
    }
    /**
     * @hidden
     * Recalculates the chunkSize based on current startIndex and returns the new size.
     * This should be called after this.state.startIndex is updated, not before.
     * @protected
     * @return {?}
     */
    _calculateChunkSize() {
        /** @type {?} */
        let chunkSize = 0;
        if (this.igxForContainerSize !== null && this.igxForContainerSize !== undefined) {
            if (!this.sizesCache) {
                this.initSizesCache(this.igxForOf);
            }
            chunkSize = this._calcMaxChunkSize();
            if (this.igxForOf && chunkSize > this.igxForOf.length) {
                chunkSize = this.igxForOf.length;
            }
        }
        else {
            if (this.igxForOf) {
                chunkSize = this.igxForOf.length;
            }
        }
        return chunkSize;
    }
    /**
     * @hidden
     * @protected
     * @param {?} viewref
     * @param {?} nodeName
     * @return {?}
     */
    getElement(viewref, nodeName) {
        /** @type {?} */
        const elem = viewref.element.nativeElement.parentNode.getElementsByTagName(nodeName);
        return elem.length > 0 ? elem[0] : null;
    }
    /**
     * @hidden
     * @protected
     * @param {?} items
     * @return {?}
     */
    initSizesCache(items) {
        /** @type {?} */
        let totalSize = 0;
        /** @type {?} */
        let size = 0;
        /** @type {?} */
        const dimension = this.igxForScrollOrientation === 'horizontal' ?
            this.igxForSizePropName : 'height';
        /** @type {?} */
        let i = 0;
        this.sizesCache = [];
        this.heightCache = [];
        this.sizesCache.push(0);
        /** @type {?} */
        const count = this.isRemote ? this.totalItemCount : items.length;
        for (i; i < count; i++) {
            if (dimension === 'height') {
                // cols[i][dimension] = parseInt(this.igxForItemSize, 10) || 0;
                size = parseInt(this.igxForItemSize, 10) || 0;
                this.heightCache.push(size);
            }
            else {
                size = this._getItemSize(items[i], dimension);
            }
            totalSize += size;
            this.sizesCache.push(totalSize);
        }
        return totalSize;
    }
    /**
     * @protected
     * @return {?}
     */
    _updateSizeCache() {
        if (this.igxForScrollOrientation === 'horizontal') {
            this.initSizesCache(this.igxForOf);
            return;
        }
        /** @type {?} */
        const oldHeight = this.heightCache.length > 0 ? this.heightCache.reduce((acc, val) => acc + val) : 0;
        /** @type {?} */
        const newHeight = this.initSizesCache(this.igxForOf);
        /** @type {?} */
        const diff = oldHeight - newHeight;
        // if data has been changed while container is scrolled
        // should update scroll top/left according to change so that same startIndex is in view
        if (Math.abs(diff) > 0 && this.scrollPosition > 0) {
            this.recalcUpdateSizes();
            /** @type {?} */
            const offset = parseInt(this.dc.instance._viewContainer.element.nativeElement.style.top, 10);
            this.scrollPosition = this.sizesCache[this.state.startIndex] - offset;
        }
    }
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    _calcMaxChunkSize() {
        /** @type {?} */
        let i = 0;
        /** @type {?} */
        let length = 0;
        /** @type {?} */
        let maxLength = 0;
        /** @type {?} */
        const arr = [];
        /** @type {?} */
        let sum = 0;
        /** @type {?} */
        const availableSize = parseInt(this.igxForContainerSize, 10);
        if (!availableSize) {
            return 0;
        }
        /** @type {?} */
        const dimension = this.igxForScrollOrientation === 'horizontal' ?
            this.igxForSizePropName : 'height';
        /** @type {?} */
        const reducer = (accumulator, currentItem) => accumulator + this._getItemSize(currentItem, dimension);
        for (i; i < this.igxForOf.length; i++) {
            /** @type {?} */
            let item = this.igxForOf[i];
            if (dimension === 'height') {
                item = { value: this.igxForOf[i], height: this.heightCache[i] };
            }
            /** @type {?} */
            const size = dimension === 'height' ?
                this.heightCache[i] :
                this._getItemSize(item, dimension);
            sum = arr.reduce(reducer, size);
            if (sum < availableSize) {
                arr.push(item);
                length = arr.length;
                if (i === this.igxForOf.length - 1) {
                    // reached end without exceeding
                    // include prev items until size is filled or first item is reached.
                    /** @type {?} */
                    let curItem = dimension === 'height' ? arr[0].value : arr[0];
                    /** @type {?} */
                    let prevIndex = this.igxForOf.indexOf(curItem) - 1;
                    while (prevIndex >= 0 && sum <= availableSize) {
                        curItem = dimension === 'height' ? arr[0].value : arr[0];
                        prevIndex = this.igxForOf.indexOf(curItem) - 1;
                        /** @type {?} */
                        const prevItem = this.igxForOf[prevIndex];
                        /** @type {?} */
                        const prevSize = dimension === 'height' ?
                            this.heightCache[prevIndex] :
                            parseInt(prevItem[dimension], 10);
                        sum = arr.reduce(reducer, prevSize);
                        arr.unshift(prevItem);
                        length = arr.length;
                    }
                }
            }
            else {
                arr.push(item);
                length = arr.length + 1;
                arr.shift();
            }
            if (length > maxLength) {
                maxLength = length;
            }
        }
        return maxLength;
    }
    /**
     * @hidden
     * @protected
     * @param {?} left
     * @param {?} set
     * @param {?} index
     * @return {?}
     */
    getIndexAt(left, set, index) {
        /** @type {?} */
        let start = 0;
        /** @type {?} */
        let end = set.length - 1;
        if (left === 0) {
            return 0;
        }
        while (start <= end) {
            /** @type {?} */
            const midIdx = Math.floor((start + end) / 2);
            /** @type {?} */
            const midLeft = set[midIdx];
            /** @type {?} */
            const cmp = left - midLeft;
            if (cmp > 0) {
                start = midIdx + 1;
            }
            else if (cmp < 0) {
                end = midIdx - 1;
            }
            else {
                return midIdx;
            }
        }
        return end;
    }
    /**
     * @protected
     * @return {?}
     */
    _recalcScrollBarSize() {
        /** @type {?} */
        const count = this.isRemote ? this.totalItemCount : (this.igxForOf ? this.igxForOf.length : 0);
        this.dc.instance.notVirtual = !(this.igxForContainerSize && this.dc && this.state.chunkSize < count);
        if (this.igxForScrollOrientation === 'horizontal') {
            /** @type {?} */
            const totalWidth = this.igxForContainerSize ? this.initSizesCache(this.igxForOf) : 0;
            this.hScroll.style.width = this.igxForContainerSize + 'px';
            this.hScroll.children[0].style.width = totalWidth + 'px';
            if (totalWidth <= parseInt(this.igxForContainerSize, 10)) {
                this.scrollPosition = 0;
            }
        }
        if (this.igxForScrollOrientation === 'vertical') {
            this.vh.instance.elementRef.nativeElement.style.height = parseInt(this.igxForContainerSize, 10) + 'px';
            this.vh.instance.height = this._calcHeight();
            if (this.vh.instance.height <= parseInt(this.igxForContainerSize, 10)) {
                this.scrollPosition = 0;
            }
        }
    }
    /**
     * @protected
     * @return {?}
     */
    _calcHeight() {
        /** @type {?} */
        let height;
        if (this.heightCache) {
            height = this.heightCache.reduce((acc, val) => acc + val, 0);
        }
        else {
            height = this.initSizesCache(this.igxForOf);
        }
        this._virtHeight = height;
        if (height > this._maxHeight) {
            this._virtHeightRatio = height / this._maxHeight;
            height = this._maxHeight;
        }
        return height;
    }
    /**
     * @protected
     * @param {?} changes
     * @return {?}
     */
    _recalcOnContainerChange(changes) {
        this.dc.instance._viewContainer.element.nativeElement.style.top = '0px';
        this.dc.instance._viewContainer.element.nativeElement.style.left = '0px';
        /** @type {?} */
        const prevChunkSize = this.state.chunkSize;
        this.applyChunkSizeChange();
        this._recalcScrollBarSize();
        if (prevChunkSize !== this.state.chunkSize) {
            this.onChunkLoad.emit(this.state);
        }
        if (this.sizesCache && this.hScroll) {
            // Updating horizontal chunks and offsets based on the new scrollLeft
            /** @type {?} */
            const scrollOffset = this.fixedUpdateAllElements(this.scrollPosition);
            this.dc.instance._viewContainer.element.nativeElement.style.left = -scrollOffset + 'px';
        }
    }
    /**
     * @hidden
     * Removes an elemenet from the embedded views and updates chunkSize.
     * @protected
     * @return {?}
     */
    removeLastElem() {
        /** @type {?} */
        const oldElem = this._embeddedViews.pop();
        this.onBeforeViewDestroyed.emit(oldElem);
        oldElem.destroy();
        this.state.chunkSize--;
    }
    /**
     * @hidden
     * If there exists an element that we can create embedded view for creates it, appends it and updates chunkSize
     * @protected
     * @return {?}
     */
    addLastElem() {
        /** @type {?} */
        let elemIndex = this.state.startIndex + this.state.chunkSize;
        if (!this.isRemote && !this.igxForOf) {
            return;
        }
        if (elemIndex >= this.igxForOf.length) {
            elemIndex = this.igxForOf.length - this.state.chunkSize;
        }
        /** @type {?} */
        const input = this.igxForOf[elemIndex];
        /** @type {?} */
        const embeddedView = this.dc.instance._vcr.createEmbeddedView(this._template, new IgxForOfContext(input, this.getContextIndex(input), this.igxForOf.length));
        this._embeddedViews.push(embeddedView);
        this.state.chunkSize++;
        this._zone.run(() => {
            this.cdr.markForCheck();
        });
    }
    /**
     * Recalculates chunkSize and adds/removes elements if need due to the change.
     * this.state.chunkSize is updated in \@addLastElem() or \@removeLastElem()
     * @protected
     * @return {?}
     */
    applyChunkSizeChange() {
        /** @type {?} */
        const chunkSize = this.isRemote ? (this.igxForOf ? this.igxForOf.length : 0) : this._calculateChunkSize();
        if (chunkSize > this.state.chunkSize) {
            /** @type {?} */
            const diff = chunkSize - this.state.chunkSize;
            for (let i = 0; i < diff; i++) {
                this.addLastElem();
            }
        }
        else if (chunkSize < this.state.chunkSize) {
            /** @type {?} */
            const diff = this.state.chunkSize - chunkSize;
            for (let i = 0; i < diff; i++) {
                this.removeLastElem();
            }
        }
    }
    /**
     * @protected
     * @return {?}
     */
    _updateScrollOffset() {
        if (this.igxForScrollOrientation === 'horizontal') {
            this._updateHScrollOffset();
        }
        else {
            this._updateVScrollOffset();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _updateVScrollOffset() {
        /** @type {?} */
        let scrollOffset = 0;
        /** @type {?} */
        const vScroll = this.vh.instance.elementRef.nativeElement;
        scrollOffset = vScroll && parseInt(vScroll.style.height, 10) ?
            this.scrollPosition - this.sizesCache[this.state.startIndex] : 0;
        this.dc.instance._viewContainer.element.nativeElement.style.top = -(scrollOffset) + 'px';
    }
    /**
     * @private
     * @return {?}
     */
    _updateHScrollOffset() {
        /** @type {?} */
        let scrollOffset = 0;
        scrollOffset = this.hScroll && parseInt(this.hScroll.children[0].style.width, 10) ?
            this.scrollPosition - this.sizesCache[this.state.startIndex] : 0;
        this.dc.instance._viewContainer.element.nativeElement.style.left = -scrollOffset + 'px';
    }
    /**
     * @private
     * @param {?} item
     * @param {?} dimension
     * @return {?}
     */
    _getItemSize(item, dimension) {
        /** @type {?} */
        const dim = item[dimension];
        return typeof dim === 'number' ? dim : parseInt(this.igxForItemSize, 10) || 0;
    }
}
IgxForOfDirective.decorators = [
    { type: Directive, args: [{ selector: '[igxFor][igxForOf]' },] }
];
/** @nocollapse */
IgxForOfDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef },
    { type: IterableDiffers },
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
IgxForOfDirective.propDecorators = {
    igxForOf: [{ type: Input }],
    igxForSizePropName: [{ type: Input }],
    igxForScrollOrientation: [{ type: Input }],
    igxForScrollContainer: [{ type: Input }],
    igxForContainerSize: [{ type: Input }],
    igxForItemSize: [{ type: Input }],
    onChunkLoad: [{ type: Output }],
    onDataChanged: [{ type: Output }],
    onBeforeViewDestroyed: [{ type: Output }],
    onChunkPreload: [{ type: Output }],
    igxForTrackBy: [{ type: Input }]
};
if (false) {
    /**
     * An \@Input property that sets the data to be rendered.
     * ```html
     * <ng-template igxFor let-item [igxForOf]="data" [igxForScrollOrientation]="'horizontal'"></ng-template>
     * ```
     * @type {?}
     */
    IgxForOfDirective.prototype.igxForOf;
    /**
     * An \@Input property that sets the property name from which to read the size in the data object.
     * @type {?}
     */
    IgxForOfDirective.prototype.igxForSizePropName;
    /**
     * An \@Input property that specifies the scroll orientation.
     * Scroll orientation can be "vertical" or "horizontal".
     * ```html
     * <ng-template igxFor let-item [igxForOf]="data" [igxForScrollOrientation]="'horizontal'"></ng-template>
     * ```
     * @type {?}
     */
    IgxForOfDirective.prototype.igxForScrollOrientation;
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
     * @type {?}
     */
    IgxForOfDirective.prototype.igxForScrollContainer;
    /**
     * An \@Input property that sets the px-affixed size of the container along the axis of scrolling.
     * For "horizontal" orientation this value is the width of the container and for "vertical" is the height.
     * ```html
     * <ng-template igxFor let-item [igxForOf]="data" [igxForContainerSize]="'500px'"
     *      [igxForScrollOrientation]="'horizontal'">
     * </ng-template>
     * ```
     * @type {?}
     */
    IgxForOfDirective.prototype.igxForContainerSize;
    /**
     * An \@Input property that sets the px-affixed size of the item along the axis of scrolling.
     * For "horizontal" orientation this value is the width of the column and for "vertical" is the height or the row.
     * ```html
     * <ng-template igxFor let-item [igxForOf]="data" [igxForScrollOrientation]="'horizontal'" [igxForItemSize]="'50px'"></ng-template>
     * ```
     * @type {?}
     */
    IgxForOfDirective.prototype.igxForItemSize;
    /**
     * @hidden
     * @type {?}
     */
    IgxForOfDirective.prototype.dc;
    /**
     * The current state of the directive. It contains `startIndex` and `chunkSize`.
     * state.startIndex - The index of the item at which the current visible chunk begins.
     * state.chunkSize - The number of items the current visible chunk holds.
     * These options can be used when implementing remote virtualization as they provide the necessary state information.
     * ```typescript
     * const gridState = this.parentVirtDir.state;
     * ```
     * @type {?}
     */
    IgxForOfDirective.prototype.state;
    /**
     * The total count of the virtual data items, when using remote service.
     * ```typescript
     * this.parentVirtDir.totalItemCount = data.Count;
     * ```
     * @type {?}
     */
    IgxForOfDirective.prototype.totalItemCount;
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
     * @type {?}
     */
    IgxForOfDirective.prototype.onChunkLoad;
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
     * @type {?}
     */
    IgxForOfDirective.prototype.onDataChanged;
    /** @type {?} */
    IgxForOfDirective.prototype.onBeforeViewDestroyed;
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
     * @type {?}
     */
    IgxForOfDirective.prototype.onChunkPreload;
    /**
     * @type {?}
     * @protected
     */
    IgxForOfDirective.prototype.hScroll;
    /**
     * @type {?}
     * @protected
     */
    IgxForOfDirective.prototype.func;
    /**
     * @type {?}
     * @protected
     */
    IgxForOfDirective.prototype._sizesCache;
    /**
     * @type {?}
     * @protected
     */
    IgxForOfDirective.prototype.vh;
    /**
     * @type {?}
     * @protected
     */
    IgxForOfDirective.prototype.hvh;
    /**
     * @type {?}
     * @protected
     */
    IgxForOfDirective.prototype._differ;
    /**
     * @type {?}
     * @protected
     */
    IgxForOfDirective.prototype._trackByFn;
    /**
     * @type {?}
     * @protected
     */
    IgxForOfDirective.prototype.heightCache;
    /**
     * @type {?}
     * @private
     */
    IgxForOfDirective.prototype._adjustToIndex;
    /**
     * @type {?}
     * @private
     */
    IgxForOfDirective.prototype.MAX_PERF_SCROLL_DIFF;
    /**
     * Maximum height for an element of the browser.
     * @type {?}
     * @private
     */
    IgxForOfDirective.prototype._maxHeight;
    /**
     * Height that is being virtualized.
     * @type {?}
     * @protected
     */
    IgxForOfDirective.prototype._virtHeight;
    /**
     * Ratio for height that's being virtualizaed and the one visible
     * If _virtHeightRatio = 1, the visible height and the virtualized are the same, also _maxHeight > _virtHeight.
     * @type {?}
     * @private
     */
    IgxForOfDirective.prototype._virtHeightRatio;
    /**
     * Internal track for scroll top that is being virtualized
     * @type {?}
     * @protected
     */
    IgxForOfDirective.prototype._virtScrollTop;
    /**
     * If the next onScroll event is triggered due to internal setting of scrollTop
     * @type {?}
     * @protected
     */
    IgxForOfDirective.prototype._bScrollInternal;
    /**
     * caching scroll position reduces reflows
     * @type {?}
     * @protected
     */
    IgxForOfDirective.prototype._scrollPosition;
    /**
     * @type {?}
     * @protected
     */
    IgxForOfDirective.prototype._embeddedViews;
    /**
     * @type {?}
     * @private
     */
    IgxForOfDirective.prototype._viewContainer;
    /**
     * @type {?}
     * @protected
     */
    IgxForOfDirective.prototype._template;
    /**
     * @type {?}
     * @protected
     */
    IgxForOfDirective.prototype._differs;
    /**
     * @type {?}
     * @private
     */
    IgxForOfDirective.prototype.resolver;
    /** @type {?} */
    IgxForOfDirective.prototype.cdr;
    /**
     * @type {?}
     * @protected
     */
    IgxForOfDirective.prototype._zone;
}
/**
 * @param {?} type
 * @return {?}
 */
export function getTypeNameForDebugging(type) {
    /** @type {?} */
    const name = 'name';
    return type[name] || typeof type;
}
/**
 * @record
 */
export function IForOfState() { }
if (false) {
    /** @type {?|undefined} */
    IForOfState.prototype.startIndex;
    /** @type {?|undefined} */
    IForOfState.prototype.chunkSize;
}
/**
 * @record
 */
export function IForOfDataChangingEventArgs() { }
if (false) {
    /** @type {?} */
    IForOfDataChangingEventArgs.prototype.containerSize;
}
/**
 * @template T
 */
export class IgxGridForOfDirective extends IgxForOfDirective {
    /**
     * @param {?} _viewContainer
     * @param {?} _template
     * @param {?} _differs
     * @param {?} resolver
     * @param {?} cdr
     * @param {?} _zone
     * @param {?} syncService
     */
    constructor(_viewContainer, _template, _differs, resolver, cdr, _zone, syncService) {
        super(_viewContainer, _template, _differs, resolver, cdr, _zone);
        this.syncService = syncService;
        /**
         * @hidden \@internal
         * An event that is emitted after data has been changed but before the view is refreshed
         */
        this.onDataChanging = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set igxGridForOf(value) {
        this.igxForOf = value;
    }
    /**
     * @return {?}
     */
    get igxGridForOf() {
        return this.igxForOf;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.syncService.setMaster(this);
        super.ngOnInit();
        this.removeScrollEventListeners();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const forOf = 'igxGridForOf';
        this.syncService.setMaster(this);
        if (forOf in changes) {
            /** @type {?} */
            const value = changes[forOf].currentValue;
            if (!this._differ && value) {
                try {
                    this._differ = this._differs.find(value).create(this.igxForTrackBy);
                }
                catch (e) {
                    throw new Error(`Cannot find a differ supporting object "${value}" of type "${getTypeNameForDebugging(value)}".
                     NgFor only supports binding to Iterables such as Arrays.`);
                }
            }
        }
        /** @type {?} */
        const defaultItemSize = 'igxForItemSize';
        if (defaultItemSize in changes && !changes[defaultItemSize].firstChange && this.igxForScrollOrientation === 'vertical') {
            // handle default item size changed.
            this.initSizesCache(this.igxForOf);
        }
        /** @type {?} */
        const containerSize = 'igxForContainerSize';
        if (containerSize in changes && !changes[containerSize].firstChange && this.igxForOf) {
            this._recalcOnContainerChange(changes);
        }
    }
    /**
     * @hidden
     * \@internal
     * @return {?}
     */
    get sizesCache() {
        if (this.syncService.isMaster(this)) {
            return this._sizesCache;
        }
        return this.syncService.sizesCache(this.igxForScrollOrientation);
    }
    /**
     * @hidden
     * \@internal
     * @param {?} value
     * @return {?}
     */
    set sizesCache(value) {
        this._sizesCache = value;
    }
    /**
     * @protected
     * @return {?}
     */
    get itemsDimension() {
        return this.igxForScrollOrientation === 'horizontal' ? this.igxForSizePropName : 'height';
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    getItemSize(item) {
        /** @type {?} */
        let size = 0;
        /** @type {?} */
        const dimension = this.igxForScrollOrientation === 'horizontal' ?
            this.igxForSizePropName : 'height';
        if (dimension === 'height') {
            size = parseInt(this.igxForItemSize, 10) || 0;
            if (item && item.summaries) {
                size = item.max;
            }
            else if (item && item.groups && item.height) {
                size = item.height;
            }
        }
        else {
            size = parseInt(item[dimension], 10) || 0;
        }
        return size;
    }
    /**
     * @protected
     * @param {?} items
     * @return {?}
     */
    initSizesCache(items) {
        if (!this.syncService.isMaster(this)) {
            /** @type {?} */
            const masterSizesCache = this.syncService.sizesCache(this.igxForScrollOrientation);
            return masterSizesCache[masterSizesCache.length - 1];
        }
        /** @type {?} */
        let totalSize = 0;
        /** @type {?} */
        let size = 0;
        /** @type {?} */
        let i = 0;
        this.sizesCache = [];
        this.heightCache = [];
        this.sizesCache.push(0);
        /** @type {?} */
        const count = this.isRemote ? this.totalItemCount : items.length;
        for (i; i < count; i++) {
            size = this.getItemSize(items[i]);
            if (this.itemsDimension === 'height') {
                this.heightCache.push(size);
            }
            totalSize += size;
            this.sizesCache.push(totalSize);
        }
        return totalSize;
    }
    /**
     * @protected
     * @param {?=} changes
     * @return {?}
     */
    _updateSizeCache(changes = null) {
        if (this.igxForScrollOrientation === 'horizontal') {
            this.initSizesCache(this.igxForOf);
            return;
        }
        /** @type {?} */
        const oldHeight = this.heightCache.length > 0 ? this.heightCache.reduce((acc, val) => acc + val) : 0;
        /** @type {?} */
        let newHeight = oldHeight;
        if (changes && !this.isRemote) {
            newHeight = this.handleCacheChanges(changes);
        }
        else {
            newHeight = this.initSizesCache(this.igxForOf);
        }
        /** @type {?} */
        const diff = oldHeight - newHeight;
        // if data has been changed while container is scrolled
        // should update scroll top/left according to change so that same startIndex is in view
        if (Math.abs(diff) > 0) {
            requestAnimationFrame(() => {
                this.recalcUpdateSizes();
                /** @type {?} */
                const offset = parseInt(this.dc.instance._viewContainer.element.nativeElement.style.top, 10);
                if (this.scrollPosition !== 0) {
                    this.scrollPosition = this.sizesCache[this.state.startIndex] - offset;
                }
                else {
                    this._updateScrollOffset();
                }
            });
        }
    }
    /**
     * @protected
     * @param {?} changes
     * @return {?}
     */
    handleCacheChanges(changes) {
        /** @type {?} */
        const identityChanges = [];
        /** @type {?} */
        const newHeightCache = [];
        /** @type {?} */
        const newSizesCache = [];
        newSizesCache.push(0);
        /** @type {?} */
        let newHeight = 0;
        // When there are more than one removed items the changes are not reliable so those with identity change should be default size.
        /** @type {?} */
        let numRemovedItems = 0;
        changes.forEachRemovedItem(() => numRemovedItems++);
        // Get the identity changes to determine later if those that have changed their indexes should be assigned default item size.
        changes.forEachIdentityChange((item) => {
            if (item.currentIndex !== item.previousIndex) {
                // Filter out ones that have not changed their index.
                identityChanges[item.currentIndex] = item;
            }
        });
        // Processing each item that is passed to the igxForOf so far seem to be most reliable. We parse the updated list of items.
        changes.forEachItem((item) => {
            if (item.previousIndex !== null &&
                (numRemovedItems < 2 || !identityChanges.length || identityChanges[item.currentIndex])) {
                // Reuse cache on those who have previousIndex.
                // When there are more than one removed items currently the changes are not readable so ones with identity change
                // should be racalculated.
                newHeightCache[item.currentIndex] = this.heightCache[item.previousIndex];
            }
            else {
                // Assign default item size.
                newHeightCache[item.currentIndex] = this.getItemSize(item.item);
            }
            newSizesCache[item.currentIndex + 1] = newSizesCache[item.currentIndex] + newHeightCache[item.currentIndex];
            newHeight += newHeightCache[item.currentIndex];
        });
        this.heightCache = newHeightCache;
        this.sizesCache = newSizesCache;
        return newHeight;
    }
    /**
     * @hidden
     * \@internal
     * @return {?}
     */
    assumeMaster() {
        this._sizesCache = this.syncService.sizesCache(this.igxForScrollOrientation);
        this.syncService.setMaster(this, true);
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this._differ) {
            /** @type {?} */
            const changes = this._differ.diff(this.igxForOf);
            if (changes) {
                /** @type {?} */
                const args = {
                    containerSize: this.igxForContainerSize
                };
                this.onDataChanging.emit(args);
                //  re-init cache.
                if (!this.igxForOf) {
                    return;
                }
                /* we need to reset the master dir if all rows are removed
                (e.g. because of filtering); if all columns are hidden, rows are
                still rendered empty, so we should not reset master */
                if (!this.igxForOf.length &&
                    this.igxForScrollOrientation === 'vertical') {
                    this.syncService.resetMaster();
                }
                this.syncService.setMaster(this);
                this.igxForContainerSize = args.containerSize;
                this._updateSizeCache(changes);
                this._applyChanges();
                this._updateScrollOffset();
                this.onDataChanged.emit();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onScroll(event) {
        if (!parseInt(this.vh.instance.elementRef.nativeElement.style.height, 10)) {
            return;
        }
        /** @type {?} */
        const containerSize = parseInt(this.igxForContainerSize, 10);
        /** @type {?} */
        const maxRealScrollTop = event.target.children[0].scrollHeight - containerSize;
        /** @type {?} */
        const realPercentScrolled = event.target.scrollTop / maxRealScrollTop;
        if (!this._bScrollInternal) {
            /** @type {?} */
            const maxVirtScrollTop = this._virtHeight - containerSize;
            this._virtScrollTop = realPercentScrolled * maxVirtScrollTop;
        }
        else {
            this._bScrollInternal = false;
        }
        this._scrollPosition = this._virtScrollTop;
        /** @type {?} */
        const scrollOffset = this.fixedUpdateAllElements(this._virtScrollTop);
        this.dc.instance._viewContainer.element.nativeElement.style.top = -(scrollOffset) + 'px';
        requestAnimationFrame(() => {
            this.recalcUpdateSizes();
        });
    }
    /**
     * @param {?} scrollAmount
     * @return {?}
     */
    onHScroll(scrollAmount) {
        /* in certain situations this may be called when no scrollbar is visible */
        if (!this.hScroll || !parseInt(this.hScroll.children[0].style.width, 10)) {
            return;
        }
        this._scrollPosition = scrollAmount;
        // Updating horizontal chunks
        /** @type {?} */
        const scrollOffset = this.fixedUpdateAllElements(scrollAmount);
        this.dc.instance._viewContainer.element.nativeElement.style.left = -scrollOffset + 'px';
    }
    /**
     * @protected
     * @return {?}
     */
    addLastElem() {
        /** @type {?} */
        let elemIndex = this.state.startIndex + this.state.chunkSize;
        if (!this.isRemote && !this.igxForOf) {
            return;
        }
        if (elemIndex >= this.igxForOf.length) {
            elemIndex = this.igxForOf.length - this.state.chunkSize;
        }
        /** @type {?} */
        const input = this.igxForOf[elemIndex];
        /** @type {?} */
        const embeddedView = this.dc.instance._vcr.createEmbeddedView(this._template, new IgxForOfContext(input, this.getContextIndex(input), this.igxForOf.length));
        this._embeddedViews.push(embeddedView);
        this.state.chunkSize++;
    }
    /**
     * @protected
     * @param {?} prevChunkSize
     * @return {?}
     */
    _updateViews(prevChunkSize) {
        if (this.igxForOf && this.igxForOf.length && this.dc) {
            /** @type {?} */
            const embeddedViewCopy = Object.assign([], this._embeddedViews);
            /** @type {?} */
            let startIndex;
            /** @type {?} */
            let endIndex;
            if (this.isRemote) {
                startIndex = 0;
                endIndex = this.igxForOf.length;
            }
            else {
                startIndex = this.getIndexAt(this.scrollPosition, this.sizesCache, 0);
                if (startIndex + this.state.chunkSize > this.igxForOf.length) {
                    startIndex = this.igxForOf.length - this.state.chunkSize;
                }
                this.state.startIndex = startIndex;
                endIndex = this.state.chunkSize + this.state.startIndex;
            }
            for (let i = startIndex; i < endIndex && this.igxForOf[i] !== undefined; i++) {
                /** @type {?} */
                const input = this.igxForOf[i];
                /** @type {?} */
                const embView = embeddedViewCopy.shift();
                /** @type {?} */
                const cntx = ((/** @type {?} */ (embView))).context;
                cntx.$implicit = input;
                cntx.index = this.getContextIndex(input);
                cntx.count = this.igxForOf.length;
            }
            if (prevChunkSize !== this.state.chunkSize) {
                this.onChunkLoad.emit(this.state);
            }
            if (this.igxForScrollOrientation === 'vertical') {
                requestAnimationFrame(() => {
                    this.recalcUpdateSizes();
                });
            }
        }
    }
    /**
     * @protected
     * @return {?}
     */
    _applyChanges() {
        /** @type {?} */
        const prevChunkSize = this.state.chunkSize;
        this.applyChunkSizeChange();
        this._recalcScrollBarSize();
        this._updateViews(prevChunkSize);
    }
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    _calcMaxChunkSize() {
        if (this.syncService.isMaster(this)) {
            return super._calcMaxChunkSize();
        }
        return this.syncService.chunkSize(this.igxForScrollOrientation);
    }
}
IgxGridForOfDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxGridFor][igxGridForOf]'
            },] }
];
/** @nocollapse */
IgxGridForOfDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef },
    { type: IterableDiffers },
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: IgxForOfSyncService }
];
IgxGridForOfDirective.propDecorators = {
    igxGridForOf: [{ type: Input }],
    onDataChanging: [{ type: Output }]
};
if (false) {
    /**
     * @hidden \@internal
     * An event that is emitted after data has been changed but before the view is refreshed
     * @type {?}
     */
    IgxGridForOfDirective.prototype.onDataChanging;
    /**
     * @type {?}
     * @protected
     */
    IgxGridForOfDirective.prototype.syncService;
}
/**
 * @hidden
 */
export class IgxForOfModule {
}
IgxForOfModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxForOfDirective, IgxGridForOfDirective, DisplayContainerComponent, VirtualHelperComponent, HVirtualHelperComponent],
                entryComponents: [DisplayContainerComponent, VirtualHelperComponent, HVirtualHelperComponent],
                exports: [IgxForOfDirective, IgxGridForOfDirective],
                imports: [IgxScrollInertiaModule, CommonModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yX29mLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9mb3Itb2YvZm9yX29mLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBa0IsTUFBTSxpQkFBaUIsQ0FBQztBQUMvRCxPQUFPLEVBQ0gsaUJBQWlCLEVBRWpCLHdCQUF3QixFQUV4QixTQUFTLEVBR1QsWUFBWSxFQUNaLEtBQUssRUFHTCxlQUFlLEVBQ2YsUUFBUSxFQUNSLE1BQU0sRUFJTixNQUFNLEVBRU4sV0FBVyxFQUVYLGdCQUFnQixFQUVuQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFLNUQsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQUN4QixZQUNVLFNBQVksRUFDWixLQUFhLEVBQ2IsS0FBYTtRQUZiLGNBQVMsR0FBVCxTQUFTLENBQUc7UUFDWixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUNwQixDQUFDOzs7OztJQUtKLElBQUksS0FBSyxLQUFjLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztJQUtqRCxJQUFJLElBQUksS0FBYyxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztJQUs3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QUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBRSx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRSx1QkFBdUIsQ0FBQztnQkFDcEksZUFBZSxFQUFFLENBQUMseUJBQXlCLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCLENBQUM7Z0JBQzdGLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixDQUFDO2dCQUNuRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxZQUFZLENBQUM7YUFDbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUsIE5nRm9yT2ZDb250ZXh0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQ29tcG9uZW50RmFjdG9yeSxcbiAgICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgQ29tcG9uZW50UmVmLFxuICAgIERpcmVjdGl2ZSxcbiAgICBEb0NoZWNrLFxuICAgIEVtYmVkZGVkVmlld1JlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgSXRlcmFibGVDaGFuZ2VzLFxuICAgIEl0ZXJhYmxlRGlmZmVyLFxuICAgIEl0ZXJhYmxlRGlmZmVycyxcbiAgICBOZ01vZHVsZSxcbiAgICBOZ1pvbmUsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFNpbXBsZUNoYW5nZXMsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgVHJhY2tCeUZ1bmN0aW9uLFxuICAgIFZpZXdDb250YWluZXJSZWYsXG4gICAgVmlld1JlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGlzcGxheUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZGlzcGxheS5jb250YWluZXInO1xuaW1wb3J0IHsgSFZpcnR1YWxIZWxwZXJDb21wb25lbnQgfSBmcm9tICcuL2hvcml6b250YWwudmlydHVhbC5oZWxwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFZpcnR1YWxIZWxwZXJDb21wb25lbnQgfSBmcm9tICcuL3ZpcnR1YWwuaGVscGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hTY3JvbGxJbmVydGlhTW9kdWxlIH0gZnJvbSAnLi8uLi9zY3JvbGwtaW5lcnRpYS9zY3JvbGxfaW5lcnRpYS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4Rm9yT2ZTeW5jU2VydmljZSB9IGZyb20gJy4vZm9yX29mLnN5bmMuc2VydmljZSc7XG5cbi8qKlxuICogIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIElneEZvck9mQ29udGV4dDxUPiB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgcHVibGljICRpbXBsaWNpdDogVCxcbiAgICAgICBwdWJsaWMgaW5kZXg6IG51bWJlcixcbiAgICAgICBwdWJsaWMgY291bnQ6IG51bWJlclxuICAgICkge31cblxuICAgIC8qKlxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgdGhlIGZpcnN0IG9yIG5vdFxuICAgICAqL1xuICAgIGdldCBmaXJzdCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuaW5kZXggPT09IDA7IH1cblxuICAgIC8qKlxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgdGhlIGxhc3Qgb3Igbm90XG4gICAgICovXG4gICAgZ2V0IGxhc3QoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmluZGV4ID09PSB0aGlzLmNvdW50IC0gMTsgfVxuXG4gICAgLyoqXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgd2hldGhlciB0aGUgZWxlbWVudCBpcyBldmVuIG9yIG5vdFxuICAgICAqL1xuICAgIGdldCBldmVuKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5pbmRleCAlIDIgPT09IDA7IH1cblxuICAgIC8qKlxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgb2RkIG9yIG5vdFxuICAgICAqL1xuICAgIGdldCBvZGQoKTogYm9vbGVhbiB7IHJldHVybiAhdGhpcy5ldmVuOyB9XG5cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2lneEZvcl1baWd4Rm9yT2ZdJyB9KVxuZXhwb3J0IGNsYXNzIElneEZvck9mRGlyZWN0aXZlPFQ+IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIERvQ2hlY2ssIE9uRGVzdHJveSB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSBkYXRhIHRvIGJlIHJlbmRlcmVkLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8bmctdGVtcGxhdGUgaWd4Rm9yIGxldC1pdGVtIFtpZ3hGb3JPZl09XCJkYXRhXCIgW2lneEZvclNjcm9sbE9yaWVudGF0aW9uXT1cIidob3Jpem9udGFsJ1wiPjwvbmctdGVtcGxhdGU+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWd4Rm9yT2Y6IGFueVtdO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgcHJvcGVydHkgbmFtZSBmcm9tIHdoaWNoIHRvIHJlYWQgdGhlIHNpemUgaW4gdGhlIGRhdGEgb2JqZWN0LlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlneEZvclNpemVQcm9wTmFtZTtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNwZWNpZmllcyB0aGUgc2Nyb2xsIG9yaWVudGF0aW9uLlxuICAgICAqIFNjcm9sbCBvcmllbnRhdGlvbiBjYW4gYmUgXCJ2ZXJ0aWNhbFwiIG9yIFwiaG9yaXpvbnRhbFwiLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8bmctdGVtcGxhdGUgaWd4Rm9yIGxldC1pdGVtIFtpZ3hGb3JPZl09XCJkYXRhXCIgW2lneEZvclNjcm9sbE9yaWVudGF0aW9uXT1cIidob3Jpem9udGFsJ1wiPjwvbmctdGVtcGxhdGU+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb246IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIE9wdGlvbmFsbHkgcGFzcyB0aGUgcGFyZW50IGBpZ3hGb3JgIGluc3RhbmNlIHRvIGNyZWF0ZSBhIHZpcnR1YWwgdGVtcGxhdGUgc2Nyb2xsaW5nIGJvdGggaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8bmctdGVtcGxhdGUgI3Njcm9sbENvbnRhaW5lciBpZ3hGb3IgbGV0LXJvd0RhdGEgW2lneEZvck9mXT1cImRhdGFcIlxuICAgICAqICAgICAgIFtpZ3hGb3JTY3JvbGxPcmllbnRhdGlvbl09XCIndmVydGljYWwnXCJcbiAgICAgKiAgICAgICBbaWd4Rm9yQ29udGFpbmVyU2l6ZV09XCInNTAwcHgnXCJcbiAgICAgKiAgICAgICBbaWd4Rm9ySXRlbVNpemVdPVwiJzUwcHgnXCJcbiAgICAgKiAgICAgICBsZXQtcm93SW5kZXg9XCJpbmRleFwiPlxuICAgICAqICAgICAgIDxkaXYgW3N0eWxlLmRpc3BsYXldPVwiJ2ZsZXgnXCIgW3N0eWxlLmhlaWdodF09XCInNTBweCdcIj5cbiAgICAgKiAgICAgICAgICAgPG5nLXRlbXBsYXRlICNjaGlsZENvbnRhaW5lciBpZ3hGb3IgbGV0LWl0ZW0gW2lneEZvck9mXT1cImRhdGFcIlxuICAgICAqICAgICAgICAgICAgICAgW2lneEZvclNjcm9sbE9yaWVudGF0aW9uXT1cIidob3Jpem9udGFsJ1wiXG4gICAgICogICAgICAgICAgICAgICBbaWd4Rm9yU2Nyb2xsQ29udGFpbmVyXT1cInBhcmVudFZpcnREaXJcIlxuICAgICAqICAgICAgICAgICAgICAgW2lneEZvckNvbnRhaW5lclNpemVdPVwiJzUwMHB4J1wiPlxuICAgICAqICAgICAgICAgICAgICAgICAgIDxkaXYgW3N0eWxlLm1pbi13aWR0aF09XCInNTBweCdcIj57e3Jvd0luZGV4fX0gOiB7e2l0ZW0udGV4dH19PC9kaXY+XG4gICAgICogICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICogICAgICAgPC9kaXY+XG4gICAgICogPC9uZy10ZW1wbGF0ZT5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZ3hGb3JTY3JvbGxDb250YWluZXI6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHB4LWFmZml4ZWQgc2l6ZSBvZiB0aGUgY29udGFpbmVyIGFsb25nIHRoZSBheGlzIG9mIHNjcm9sbGluZy5cbiAgICAgKiBGb3IgXCJob3Jpem9udGFsXCIgb3JpZW50YXRpb24gdGhpcyB2YWx1ZSBpcyB0aGUgd2lkdGggb2YgdGhlIGNvbnRhaW5lciBhbmQgZm9yIFwidmVydGljYWxcIiBpcyB0aGUgaGVpZ2h0LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8bmctdGVtcGxhdGUgaWd4Rm9yIGxldC1pdGVtIFtpZ3hGb3JPZl09XCJkYXRhXCIgW2lneEZvckNvbnRhaW5lclNpemVdPVwiJzUwMHB4J1wiXG4gICAgICogICAgICBbaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb25dPVwiJ2hvcml6b250YWwnXCI+XG4gICAgICogPC9uZy10ZW1wbGF0ZT5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZ3hGb3JDb250YWluZXJTaXplOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSBweC1hZmZpeGVkIHNpemUgb2YgdGhlIGl0ZW0gYWxvbmcgdGhlIGF4aXMgb2Ygc2Nyb2xsaW5nLlxuICAgICAqIEZvciBcImhvcml6b250YWxcIiBvcmllbnRhdGlvbiB0aGlzIHZhbHVlIGlzIHRoZSB3aWR0aCBvZiB0aGUgY29sdW1uIGFuZCBmb3IgXCJ2ZXJ0aWNhbFwiIGlzIHRoZSBoZWlnaHQgb3IgdGhlIHJvdy5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPG5nLXRlbXBsYXRlIGlneEZvciBsZXQtaXRlbSBbaWd4Rm9yT2ZdPVwiZGF0YVwiIFtpZ3hGb3JTY3JvbGxPcmllbnRhdGlvbl09XCInaG9yaXpvbnRhbCdcIiBbaWd4Rm9ySXRlbVNpemVdPVwiJzUwcHgnXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZ3hGb3JJdGVtU2l6ZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBkYzogQ29tcG9uZW50UmVmPERpc3BsYXlDb250YWluZXJDb21wb25lbnQ+O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGRpcmVjdGl2ZS4gSXQgY29udGFpbnMgYHN0YXJ0SW5kZXhgIGFuZCBgY2h1bmtTaXplYC5cbiAgICAgKiBzdGF0ZS5zdGFydEluZGV4IC0gVGhlIGluZGV4IG9mIHRoZSBpdGVtIGF0IHdoaWNoIHRoZSBjdXJyZW50IHZpc2libGUgY2h1bmsgYmVnaW5zLlxuICAgICAqIHN0YXRlLmNodW5rU2l6ZSAtIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhlIGN1cnJlbnQgdmlzaWJsZSBjaHVuayBob2xkcy5cbiAgICAgKiBUaGVzZSBvcHRpb25zIGNhbiBiZSB1c2VkIHdoZW4gaW1wbGVtZW50aW5nIHJlbW90ZSB2aXJ0dWFsaXphdGlvbiBhcyB0aGV5IHByb3ZpZGUgdGhlIG5lY2Vzc2FyeSBzdGF0ZSBpbmZvcm1hdGlvbi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgZ3JpZFN0YXRlID0gdGhpcy5wYXJlbnRWaXJ0RGlyLnN0YXRlO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0ZTogSUZvck9mU3RhdGUgPSB7XG4gICAgICAgIHN0YXJ0SW5kZXg6IDAsXG4gICAgICAgIGNodW5rU2l6ZTogMFxuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIHRvdGFsIGNvdW50IG9mIHRoZSB2aXJ0dWFsIGRhdGEgaXRlbXMsIHdoZW4gdXNpbmcgcmVtb3RlIHNlcnZpY2UuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMucGFyZW50VmlydERpci50b3RhbEl0ZW1Db3VudCA9IGRhdGEuQ291bnQ7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHRvdGFsSXRlbUNvdW50OiBudW1iZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgdGhhdCBpcyBlbWl0dGVkIGFmdGVyIGEgbmV3IGNodW5rIGhhcyBiZWVuIGxvYWRlZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPG5nLXRlbXBsYXRlIGlneEZvciBbaWd4Rm9yT2ZdPVwiZGF0YVwiIFtpZ3hGb3JTY3JvbGxPcmllbnRhdGlvbl09XCInaG9yaXpvbnRhbCdcIiAob25DaHVua0xvYWQpPVwiY2h1bmtMb2FkKCRldmVudClcIj48L25nLXRlbXBsYXRlPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjaHVua0xvYWQoZSl7XG4gICAgICogYWxlcnQoXCJjaHVuayBsb2FkZWQhXCIpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25DaHVua0xvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPElGb3JPZlN0YXRlPigpO1xuXG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgdGhhdCBpcyBlbWl0dGVkIGFmdGVyIGRhdGEgaGFzIGJlZW4gY2hhbmdlZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPG5nLXRlbXBsYXRlIGlneEZvciBbaWd4Rm9yT2ZdPVwiZGF0YVwiIFtpZ3hGb3JTY3JvbGxPcmllbnRhdGlvbl09XCInaG9yaXpvbnRhbCdcIiAob25EYXRhQ2hhbmdlZCk9XCJkYXRhQ2hhbmdlZCgkZXZlbnQpXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogZGF0YUNoYW5nZWQoZSl7XG4gICAgICogYWxlcnQoXCJkYXRhIGNoYW5nZWQhXCIpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25EYXRhQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uQmVmb3JlVmlld0Rlc3Ryb3llZCA9IG5ldyBFdmVudEVtaXR0ZXI8RW1iZWRkZWRWaWV3UmVmPGFueT4+KCk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBldmVudCB0aGF0IGlzIGVtaXR0ZWQgb24gY2h1bmsgbG9hZGluZyB0byBlbWl0IHRoZSBjdXJyZW50IHN0YXRlIGluZm9ybWF0aW9uIC0gc3RhcnRJbmRleCwgZW5kSW5kZXgsIHRvdGFsQ291bnQuXG4gICAgICogQ2FuIGJlIHVzZWQgZm9yIGltcGxlbWVudGluZyByZW1vdGUgbG9hZCBvbiBkZW1hbmQgZm9yIHRoZSBpZ3hGb3IgZGF0YS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPG5nLXRlbXBsYXRlIGlneEZvciBbaWd4Rm9yT2ZdPVwiZGF0YVwiIFtpZ3hGb3JTY3JvbGxPcmllbnRhdGlvbl09XCInaG9yaXpvbnRhbCdcIiAob25DaHVua1ByZWxvYWQpPVwiY2h1bmtQcmVsb2FkKCRldmVudClcIj48L25nLXRlbXBsYXRlPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjaHVua1ByZWxvYWQoZSl7XG4gICAgICogYWxlcnQoXCJjaHVuayBpcyBsb2FkaW5nIVwiKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uQ2h1bmtQcmVsb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxJRm9yT2ZTdGF0ZT4oKTtcblxuICAgIHByb3RlY3RlZCBoU2Nyb2xsO1xuICAgIHByb3RlY3RlZCBmdW5jO1xuICAgIHByb3RlY3RlZCBfc2l6ZXNDYWNoZTogbnVtYmVyW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgdmg6IENvbXBvbmVudFJlZjxWaXJ0dWFsSGVscGVyQ29tcG9uZW50PjtcbiAgICBwcm90ZWN0ZWQgaHZoOiBDb21wb25lbnRSZWY8SFZpcnR1YWxIZWxwZXJDb21wb25lbnQ+O1xuICAgIHByb3RlY3RlZCBfZGlmZmVyOiBJdGVyYWJsZURpZmZlcjxUPiB8IG51bGwgPSBudWxsO1xuICAgIHByb3RlY3RlZCBfdHJhY2tCeUZuOiBUcmFja0J5RnVuY3Rpb248VD47XG4gICAgcHJvdGVjdGVkIGhlaWdodENhY2hlID0gW107XG4gICAgcHJpdmF0ZSBfYWRqdXN0VG9JbmRleDtcbiAgICBwcml2YXRlIE1BWF9QRVJGX1NDUk9MTF9ESUZGID0gNDtcblxuICAgIHByb3RlY3RlZCBnZXQgc2l6ZXNDYWNoZSgpOiBudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaXplc0NhY2hlO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgc2V0IHNpemVzQ2FjaGUodmFsdWU6IG51bWJlcltdKSB7XG4gICAgICAgIHRoaXMuX3NpemVzQ2FjaGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfaXNTY3JvbGxlZFRvQm90dG9tKCkge1xuICAgICAgICBpZiAoIXRoaXMuZ2V0VmVydGljYWxTY3JvbGwoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5nZXRWZXJ0aWNhbFNjcm9sbCgpLnNjcm9sbEhlaWdodDtcbiAgICAgICAgLy8gVXNlID09PSBhbmQgbm90ID49IGJlY2F1c2UgYHNjcm9sbFRvcCArIGNvbnRhaW5lciBzaXplYCBjYW4ndCBiZSBiaWdnZXIgdGhhbiBgc2Nyb2xsSGVpZ2h0YCwgdW5sZXNzIHNvbWV0aGluZyBpc24ndCB1cGRhdGVkLlxuICAgICAgICAvLyBBbHNvIHVzZSBNYXRoLnJvdW5kIGJlY2F1c2UgQ2hyb21lIGhhcyBzb21lIGluY29uc2lzdGVuY2llcyBhbmQgYHNjcm9sbFRvcCArIGNvbnRhaW5lcmAgY2FuIGJlIGZsb2F0IHdoZW4gem9vbWluZyB0aGUgcGFnZS5cbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5zY3JvbGxQb3NpdGlvbiArIHRoaXMuaWd4Rm9yQ29udGFpbmVyU2l6ZSkgPT09IHNjcm9sbEhlaWdodDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfaXNBdEJvdHRvbUluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZ3hGb3JPZiAmJiB0aGlzLnN0YXRlLnN0YXJ0SW5kZXggKyB0aGlzLnN0YXRlLmNodW5rU2l6ZSA+IHRoaXMuaWd4Rm9yT2YubGVuZ3RoO1xuICAgIH1cblxuICAgIC8vIFN0YXJ0IHByb3BlcnRpZXMgcmVsYXRlZCB0byB2aXJ0dWFsIGhlaWdodCBoYW5kbGluZyBkdWUgdG8gYnJvd3NlciBsaW1pdGF0aW9uXG4gICAgLyoqIE1heGltdW0gaGVpZ2h0IGZvciBhbiBlbGVtZW50IG9mIHRoZSBicm93c2VyLiAqL1xuICAgIHByaXZhdGUgX21heEhlaWdodDtcblxuICAgIC8qKiBIZWlnaHQgdGhhdCBpcyBiZWluZyB2aXJ0dWFsaXplZC4gKi9cbiAgICBwcm90ZWN0ZWQgX3ZpcnRIZWlnaHQgPSAwO1xuXG4gICAgLyoqXG4gICAgICogUmF0aW8gZm9yIGhlaWdodCB0aGF0J3MgYmVpbmcgdmlydHVhbGl6YWVkIGFuZCB0aGUgb25lIHZpc2libGVcbiAgICAgKiBJZiBfdmlydEhlaWdodFJhdGlvID0gMSwgdGhlIHZpc2libGUgaGVpZ2h0IGFuZCB0aGUgdmlydHVhbGl6ZWQgYXJlIHRoZSBzYW1lLCBhbHNvIF9tYXhIZWlnaHQgPiBfdmlydEhlaWdodC5cbiAgICAgKi9cbiAgICBwcml2YXRlIF92aXJ0SGVpZ2h0UmF0aW8gPSAxO1xuXG4gICAgLyoqIEludGVybmFsIHRyYWNrIGZvciBzY3JvbGwgdG9wIHRoYXQgaXMgYmVpbmcgdmlydHVhbGl6ZWQgKi9cbiAgICBwcm90ZWN0ZWQgX3ZpcnRTY3JvbGxUb3AgPSAwO1xuXG4gICAgLyoqIElmIHRoZSBuZXh0IG9uU2Nyb2xsIGV2ZW50IGlzIHRyaWdnZXJlZCBkdWUgdG8gaW50ZXJuYWwgc2V0dGluZyBvZiBzY3JvbGxUb3AgKi9cbiAgICBwcm90ZWN0ZWQgX2JTY3JvbGxJbnRlcm5hbCA9IGZhbHNlO1xuICAgIC8vIEVuZCBwcm9wZXJ0aWVzIHJlbGF0ZWQgdG8gdmlydHVhbCBoZWlnaHQgaGFuZGxpbmdcblxuICAgIC8qKiBjYWNoaW5nIHNjcm9sbCBwb3NpdGlvbiByZWR1Y2VzIHJlZmxvd3MgKi9cbiAgICBwcm90ZWN0ZWQgX3Njcm9sbFBvc2l0aW9uID0gMDtcblxuICAgIHByb3RlY3RlZCBfZW1iZWRkZWRWaWV3czogQXJyYXk8RW1iZWRkZWRWaWV3UmVmPGFueT4+ID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHJvdGVjdGVkIF90ZW1wbGF0ZTogVGVtcGxhdGVSZWY8TmdGb3JPZkNvbnRleHQ8VD4+LFxuICAgICAgICBwcm90ZWN0ZWQgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcbiAgICAgICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICBwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgcHJvdGVjdGVkIF96b25lOiBOZ1pvbmUpIHsgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXQgaXNSZW1vdGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvdGFsSXRlbUNvdW50ICE9PSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHNjcm9sbFBvc2l0aW9uKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxQb3NpdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgc2Nyb2xsUG9zaXRpb24odmFsOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPSB2YWw7XG4gICAgICAgIGlmICh0aGlzLmlneEZvclNjcm9sbE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgdGhpcy5oU2Nyb2xsKSB7XG4gICAgICAgICAgICB0aGlzLmhTY3JvbGwuc2Nyb2xsTGVmdCA9IHZhbDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZoKSB7XG4gICAgICAgICAgICB0aGlzLnZoLmluc3RhbmNlLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHJlbW92ZVNjcm9sbEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBpZiAodGhpcy5pZ3hGb3JTY3JvbGxPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRIb3Jpem9udGFsU2Nyb2xsKCkucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5mdW5jKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2FsID0gdGhpcy5nZXRWZXJ0aWNhbFNjcm9sbCgpO1xuICAgICAgICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PlxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnZlcnRpY2FsU2Nyb2xsSGFuZGxlcilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHZlcnRpY2FsU2Nyb2xsSGFuZGxlcihldmVudCkge1xuICAgICAgICB0aGlzLm9uU2Nyb2xsKGV2ZW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNTY3JvbGxhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52aC5pbnN0YW5jZS5oZWlnaHQgPiBwYXJzZUludCh0aGlzLmlneEZvckNvbnRhaW5lclNpemUsIDEwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBsZXQgdG90YWxTaXplID0gMDtcbiAgICAgICAgY29uc3QgdmMgPSB0aGlzLmlneEZvclNjcm9sbENvbnRhaW5lciA/IHRoaXMuaWd4Rm9yU2Nyb2xsQ29udGFpbmVyLl92aWV3Q29udGFpbmVyIDogdGhpcy5fdmlld0NvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5pZ3hGb3JTaXplUHJvcE5hbWUgPSB0aGlzLmlneEZvclNpemVQcm9wTmFtZSB8fCAnd2lkdGgnO1xuXG4gICAgICAgIGNvbnN0IGRjRmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxEaXNwbGF5Q29udGFpbmVyQ29tcG9uZW50PiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoRGlzcGxheUNvbnRhaW5lckNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuZGMgPSB0aGlzLl92aWV3Q29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChkY0ZhY3RvcnksIDApO1xuICAgICAgICB0aGlzLmRjLmluc3RhbmNlLnNjcm9sbERpcmVjdGlvbiA9IHRoaXMuaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb247XG4gICAgICAgIGlmICh0eXBlb2YgTVNHZXN0dXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBPbiBFZGdlIGFuZCBJRSB3aGVuIHNjcm9sbGluZyBvbiB0b3VjaCB0aGUgcGFnZSBzY3JvbGwgaW5zdGVhZCBvZiB0aGUgZ3JpZC5cbiAgICAgICAgICAgIHRoaXMuZGMuaW5zdGFuY2UuX3ZpZXdDb250YWluZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvdWNoQWN0aW9uID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlneEZvck9mICYmIHRoaXMuaWd4Rm9yT2YubGVuZ3RoKSB7XG4gICAgICAgICAgICB0b3RhbFNpemUgPSB0aGlzLmluaXRTaXplc0NhY2hlKHRoaXMuaWd4Rm9yT2YpO1xuICAgICAgICAgICAgdGhpcy5oU2Nyb2xsID0gdGhpcy5nZXRFbGVtZW50KHZjLCAnaWd4LWhvcml6b250YWwtdmlydHVhbC1oZWxwZXInKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2h1bmtTaXplID0gdGhpcy5fY2FsY3VsYXRlQ2h1bmtTaXplKCk7XG4gICAgICAgICAgICB0aGlzLmRjLmluc3RhbmNlLm5vdFZpcnR1YWwgPSAhKHRoaXMuaWd4Rm9yQ29udGFpbmVyU2l6ZSAmJiB0aGlzLnN0YXRlLmNodW5rU2l6ZSA8IHRoaXMuaWd4Rm9yT2YubGVuZ3RoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhTY3JvbGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxQb3NpdGlvbiA9IHRoaXMuaFNjcm9sbC5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhcnRJbmRleCA9IE1hdGgubWluKHRoaXMuZ2V0SW5kZXhBdCh0aGlzLnNjcm9sbFBvc2l0aW9uLCB0aGlzLnNpemVzQ2FjaGUsIDApLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlneEZvck9mLmxlbmd0aCAtIHRoaXMuc3RhdGUuY2h1bmtTaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnN0YXRlLnN0YXJ0SW5kZXg7IGkgPCB0aGlzLnN0YXRlLnN0YXJ0SW5kZXggKyB0aGlzLnN0YXRlLmNodW5rU2l6ZSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlneEZvck9mW2ldICE9PSB1bmRlZmluZWQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pZ3hGb3JPZltpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbWJlZGRlZFZpZXcgPSB0aGlzLmRjLmluc3RhbmNlLl92Y3IuY3JlYXRlRW1iZWRkZWRWaWV3KFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IElneEZvck9mQ29udGV4dDxUPihpbnB1dCwgdGhpcy5nZXRDb250ZXh0SW5kZXgoaW5wdXQpLCB0aGlzLmlneEZvck9mLmxlbmd0aClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuX2VtYmVkZGVkVmlld3MucHVzaChlbWJlZGRlZFZpZXcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIHRoaXMuZGMuaW5zdGFuY2UuX3ZpZXdDb250YWluZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICAgICAgY29uc3QgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxWaXJ0dWFsSGVscGVyQ29tcG9uZW50PiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoVmlydHVhbEhlbHBlckNvbXBvbmVudCk7XG4gICAgICAgICAgICB0aGlzLnZoID0gdmMuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuXG4gICAgICAgICAgICB0aGlzLl9tYXhIZWlnaHQgPSB0aGlzLl9jYWxjTWF4QnJvd3NlckhlaWdodCgpO1xuICAgICAgICAgICAgdGhpcy52aC5pbnN0YW5jZS5oZWlnaHQgPSB0aGlzLmlneEZvck9mID8gdGhpcy5fY2FsY0hlaWdodCgpIDogMDtcbiAgICAgICAgICAgIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudmVydGljYWxTY3JvbGxIYW5kbGVyID0gdGhpcy52ZXJ0aWNhbFNjcm9sbEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZoLmluc3RhbmNlLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnZlcnRpY2FsU2Nyb2xsSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5kYy5pbnN0YW5jZS5zY3JvbGxDb250YWluZXIgPSB0aGlzLnZoLmluc3RhbmNlLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgdGhpcy5mdW5jID0gKGV2dCkgPT4geyB0aGlzLm9uSFNjcm9sbChldnQpOyB9O1xuICAgICAgICAgICAgdGhpcy5oU2Nyb2xsID0gdGhpcy5nZXRFbGVtZW50KHZjLCAnaWd4LWhvcml6b250YWwtdmlydHVhbC1oZWxwZXInKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5oU2Nyb2xsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaHZGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PEhWaXJ0dWFsSGVscGVyQ29tcG9uZW50PiA9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoSFZpcnR1YWxIZWxwZXJDb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuaHZoID0gdmMuY3JlYXRlQ29tcG9uZW50KGh2RmFjdG9yeSk7XG4gICAgICAgICAgICAgICAgdGhpcy5odmguaW5zdGFuY2Uud2lkdGggPSB0b3RhbFNpemU7XG4gICAgICAgICAgICAgICAgdGhpcy5oU2Nyb2xsID0gdGhpcy5odmguaW5zdGFuY2UuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmh2aC5pbnN0YW5jZS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5mdW5jKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYy5pbnN0YW5jZS5zY3JvbGxDb250YWluZXIgPSB0aGlzLmhTY3JvbGw7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhTY3JvbGwuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5mdW5jKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYy5pbnN0YW5jZS5zY3JvbGxDb250YWluZXIgPSB0aGlzLmhTY3JvbGw7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVIU2Nyb2xsT2Zmc2V0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnJlbW92ZVNjcm9sbEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGZvck9mID0gJ2lneEZvck9mJztcbiAgICAgICAgaWYgKGZvck9mIGluIGNoYW5nZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY2hhbmdlc1tmb3JPZl0uY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9kaWZmZXIgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaWZmZXIgPSB0aGlzLl9kaWZmZXJzLmZpbmQodmFsdWUpLmNyZWF0ZSh0aGlzLmlneEZvclRyYWNrQnkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYENhbm5vdCBmaW5kIGEgZGlmZmVyIHN1cHBvcnRpbmcgb2JqZWN0IFwiJHt2YWx1ZX1cIiBvZiB0eXBlIFwiJHtnZXRUeXBlTmFtZUZvckRlYnVnZ2luZyh2YWx1ZSl9XCIuXG4gICAgICAgICAgICAgICAgICAgICBOZ0ZvciBvbmx5IHN1cHBvcnRzIGJpbmRpbmcgdG8gSXRlcmFibGVzIHN1Y2ggYXMgQXJyYXlzLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWZhdWx0SXRlbVNpemUgPSAnaWd4Rm9ySXRlbVNpemUnO1xuICAgICAgICBpZiAoZGVmYXVsdEl0ZW1TaXplIGluIGNoYW5nZXMgJiYgIWNoYW5nZXNbZGVmYXVsdEl0ZW1TaXplXS5maXJzdENoYW5nZSAmJiB0aGlzLmlneEZvclNjcm9sbE9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAvLyBoYW5kbGUgZGVmYXVsdCBpdGVtIHNpemUgY2hhbmdlZC5cbiAgICAgICAgICAgIHRoaXMuaW5pdFNpemVzQ2FjaGUodGhpcy5pZ3hGb3JPZik7XG4gICAgICAgICAgICB0aGlzLl9hcHBseUNoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250YWluZXJTaXplID0gJ2lneEZvckNvbnRhaW5lclNpemUnO1xuICAgICAgICBpZiAoY29udGFpbmVyU2l6ZSBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzW2NvbnRhaW5lclNpemVdLmZpcnN0Q2hhbmdlICYmIHRoaXMuaWd4Rm9yT2YpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlY2FsY09uQ29udGFpbmVyQ2hhbmdlKGNoYW5nZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9kaWZmZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLl9kaWZmZXIuZGlmZih0aGlzLmlneEZvck9mKTtcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgLy8gIHJlLWluaXQgY2FjaGUuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlneEZvck9mKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlU2l6ZUNhY2hlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hcHBseUNoYW5nZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVNjcm9sbE9mZnNldCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRGF0YUNoYW5nZWQuZW1pdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hpZnRzIHRoZSBzY3JvbGwgdGh1bWIgcG9zaXRpb24uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMucGFyZW50VmlydERpci5hZGRTY3JvbGxUb3AoNSk7XG4gICAgICogYGBgXG4gICAgICogQHBhcmFtIGFkZFRvcCBuZWdhdGl2ZSB2YWx1ZSB0byBzY3JvbGwgdXAgYW5kIHBvc2l0aXZlIHRvIHNjcm9sbCBkb3duO1xuICAgICAqL1xuICAgIHB1YmxpYyBhZGRTY3JvbGxUb3AoYWRkVG9wOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGFkZFRvcCA9PT0gMCAmJiB0aGlzLmlneEZvclNjcm9sbE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvcmlnaW5hbFZpcnRTY3JvbGxUb3AgPSB0aGlzLl92aXJ0U2Nyb2xsVG9wO1xuICAgICAgICBjb25zdCBjb250YWluZXJTaXplID0gcGFyc2VJbnQodGhpcy5pZ3hGb3JDb250YWluZXJTaXplLCAxMCk7XG4gICAgICAgIGNvbnN0IG1heFZpcnRTY3JvbGxUb3AgPSB0aGlzLl92aXJ0SGVpZ2h0IC0gY29udGFpbmVyU2l6ZTtcblxuICAgICAgICB0aGlzLl9iU2Nyb2xsSW50ZXJuYWwgPSB0cnVlO1xuICAgICAgICB0aGlzLl92aXJ0U2Nyb2xsVG9wICs9IGFkZFRvcDtcbiAgICAgICAgdGhpcy5fdmlydFNjcm9sbFRvcCA9IHRoaXMuX3ZpcnRTY3JvbGxUb3AgPiAwID9cbiAgICAgICAgICAgICh0aGlzLl92aXJ0U2Nyb2xsVG9wIDwgbWF4VmlydFNjcm9sbFRvcCA/IHRoaXMuX3ZpcnRTY3JvbGxUb3AgOiBtYXhWaXJ0U2Nyb2xsVG9wKSA6XG4gICAgICAgICAgICAwO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb24gKz0gYWRkVG9wIC8gdGhpcy5fdmlydEhlaWdodFJhdGlvO1xuICAgICAgICBpZiAoTWF0aC5hYnMoYWRkVG9wIC8gdGhpcy5fdmlydEhlaWdodFJhdGlvKSA8IDEpIHtcbiAgICAgICAgICAgIC8vIEFjdHVhbCBzY3JvbGwgZGVsdGEgdGhhdCB3YXMgYWRkZWQgaXMgc21hbGxlciB0aGFuIDEgYW5kIG9uU2Nyb2xsIGhhbmRsZXIgZG9lc24ndCB0cmlnZ2VyIHdoZW4gc2Nyb2xsaW5nIDwgMXB4XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxPZmZzZXQgPSB0aGlzLmZpeGVkVXBkYXRlQWxsRWxlbWVudHModGhpcy5fdmlydFNjcm9sbFRvcCk7XG4gICAgICAgICAgICAvLyBzY3JvbGxPZmZzZXQgPSBzY3JvbGxPZmZzZXQgIT09IHBhcnNlSW50KHRoaXMuaWd4Rm9ySXRlbVNpemUsIDEwKSA/IHNjcm9sbE9mZnNldCA6IDA7XG4gICAgICAgICAgICB0aGlzLmRjLmluc3RhbmNlLl92aWV3Q29udGFpbmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSAtKHNjcm9sbE9mZnNldCkgKyAncHgnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWF4UmVhbFNjcm9sbFRvcCA9IHRoaXMudmguaW5zdGFuY2UuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCAtIGNvbnRhaW5lclNpemU7XG4gICAgICAgIGlmICgodGhpcy5fdmlydFNjcm9sbFRvcCA+IDAgJiYgdGhpcy5zY3JvbGxQb3NpdGlvbiA9PT0gMCkgfHxcbiAgICAgICAgICAgICh0aGlzLl92aXJ0U2Nyb2xsVG9wIDwgbWF4VmlydFNjcm9sbFRvcCAmJiB0aGlzLnNjcm9sbFBvc2l0aW9uID09PSBtYXhSZWFsU2Nyb2xsVG9wKSkge1xuICAgICAgICAgICAgLy8gQWN0dWFsIHNjcm9sbCBwb3NpdGlvbiBpcyBhdCB0aGUgdG9wIG9yIGJvdHRvbSwgYnV0IHZpcnR1YWwgb25lIGlzIG5vdCBhdCB0aGUgdG9wIG9yIGJvdHRvbSAodGhlcmUncyBtb3JlIHRvIHNjcm9sbClcbiAgICAgICAgICAgIC8vIFJlY2FsY3VsYXRlIGFjdHVhbCBzY3JvbGwgcG9zaXRpb24gYmFzZWQgb24gdGhlIHZpcnR1YWwgc2Nyb2xsLlxuICAgICAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvbiA9IHRoaXMuX3ZpcnRTY3JvbGxUb3AgLyB0aGlzLl92aXJ0SGVpZ2h0UmF0aW87XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fdmlydFNjcm9sbFRvcCA9PT0gMCAmJiB0aGlzLnNjcm9sbFBvc2l0aW9uID4gMCkge1xuICAgICAgICAgICAgLy8gQWN0dWFsIHNjcm9sbCBwb3NpdGlvbiBpcyBub3QgYXQgdGhlIHRvcCwgYnV0IHZpcnR1YWwgc2Nyb2xsIGlzLiBKdXN0IHVwZGF0ZSB0aGUgYWN0dWFsIHNjcm9sbFxuICAgICAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvbiA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fdmlydFNjcm9sbFRvcCA9PT0gbWF4VmlydFNjcm9sbFRvcCAmJiB0aGlzLnNjcm9sbFBvc2l0aW9uIDwgbWF4UmVhbFNjcm9sbFRvcCkge1xuICAgICAgICAgICAgLy8gQWN0dWFsIHNjcm9sbCBwb3NpdGlvbiBpcyBub3QgYXQgdGhlIGJvdHRvbSwgYnV0IHZpcnR1YWwgc2Nyb2xsIGlzLiBKdXN0IHVwZGF0ZSB0aGUgYWN1YWwgc2Nyb2xsXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uID0gbWF4UmVhbFNjcm9sbFRvcDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fdmlydFNjcm9sbFRvcCAhPT0gb3JpZ2luYWxWaXJ0U2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbHMgdG8gdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5wYXJlbnRWaXJ0RGlyLnNjcm9sbFRvKDUpO1xuICAgICAqIGBgYFxuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqL1xuICAgIHB1YmxpYyBzY3JvbGxUbyhpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gKHRoaXMuaXNSZW1vdGUgPyB0aGlzLnRvdGFsSXRlbUNvdW50IDogdGhpcy5pZ3hGb3JPZi5sZW5ndGgpIC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclNpemUgPSBwYXJzZUludCh0aGlzLmlneEZvckNvbnRhaW5lclNpemUsIDEwKTtcbiAgICAgICAgY29uc3QgaXNQcmV2SXRlbSA9IGluZGV4IDwgdGhpcy5zdGF0ZS5zdGFydEluZGV4IHx8IHRoaXMuc2Nyb2xsUG9zaXRpb24gPiB0aGlzLnNpemVzQ2FjaGVbaW5kZXhdO1xuICAgICAgICBsZXQgbmV4dFNjcm9sbCA9IGlzUHJldkl0ZW0gPyB0aGlzLnNpemVzQ2FjaGVbaW5kZXhdIDogdGhpcy5zaXplc0NhY2hlW2luZGV4ICsgMV0gLSBjb250YWluZXJTaXplO1xuICAgICAgICBpZiAobmV4dFNjcm9sbCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pZ3hGb3JTY3JvbGxPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uID0gbmV4dFNjcm9sbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1heFZpcnRTY3JvbGxUb3AgPSB0aGlzLl92aXJ0SGVpZ2h0IC0gY29udGFpbmVyU2l6ZTtcbiAgICAgICAgICAgIGlmIChuZXh0U2Nyb2xsID4gbWF4VmlydFNjcm9sbFRvcCkge1xuICAgICAgICAgICAgICAgIG5leHRTY3JvbGwgPSBtYXhWaXJ0U2Nyb2xsVG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fYlNjcm9sbEludGVybmFsID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3ZpcnRTY3JvbGxUb3AgPSBuZXh0U2Nyb2xsO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvbiA9IHRoaXMuX3ZpcnRTY3JvbGxUb3AgLyB0aGlzLl92aXJ0SGVpZ2h0UmF0aW87XG4gICAgICAgICAgICB0aGlzLl9hZGp1c3RUb0luZGV4ID0gIWlzUHJldkl0ZW0gPyBpbmRleCA6IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGxzIGJ5IG9uZSBpdGVtIGludG8gdGhlIGFwcHJvcHJpYXRlIG5leHQgZGlyZWN0aW9uLlxuICAgICAqIEZvciBcImhvcml6b250YWxcIiBvcmllbnRhdGlvbiB0aGF0IHdpbGwgYmUgdGhlIHJpZ2h0IGNvbHVtbiBhbmQgZm9yIFwidmVydGljYWxcIiB0aGF0IGlzIHRoZSBsb3dlciByb3cuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMucGFyZW50VmlydERpci5zY3JvbGxOZXh0KCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHNjcm9sbE5leHQoKSB7XG4gICAgICAgIGNvbnN0IHNjciA9IE1hdGguY2VpbCh0aGlzLnNjcm9sbFBvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgZW5kSW5kZXggPSB0aGlzLmdldEluZGV4QXQoXG4gICAgICAgICAgICBzY3IgKyBwYXJzZUludCh0aGlzLmlneEZvckNvbnRhaW5lclNpemUsIDEwKSxcbiAgICAgICAgICAgIHRoaXMuc2l6ZXNDYWNoZSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zY3JvbGxUbyhlbmRJbmRleCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xscyBieSBvbmUgaXRlbSBpbnRvIHRoZSBhcHByb3ByaWF0ZSBwcmV2aW91cyBkaXJlY3Rpb24uXG4gICAgICogRm9yIFwiaG9yaXpvbnRhbFwiIG9yaWVudGF0aW9uIHRoYXQgd2lsbCBiZSB0aGUgbGVmdCBjb2x1bW4gYW5kIGZvciBcInZlcnRpY2FsXCIgdGhhdCBpcyB0aGUgdXBwZXIgcm93LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnBhcmVudFZpcnREaXIuc2Nyb2xsUHJldigpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBzY3JvbGxQcmV2KCkge1xuICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMuc3RhdGUuc3RhcnRJbmRleCAtIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbHMgYnkgb25lIHBhZ2UgaW50byB0aGUgYXBwcm9wcmlhdGUgbmV4dCBkaXJlY3Rpb24uXG4gICAgICogRm9yIFwiaG9yaXpvbnRhbFwiIG9yaWVudGF0aW9uIHRoYXQgd2lsbCBiZSBvbmUgdmlldyB0byB0aGUgcmlnaHQgYW5kIGZvciBcInZlcnRpY2FsXCIgdGhhdCBpcyBvbmUgdmlldyB0byB0aGUgYm90dG9tLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnBhcmVudFZpcnREaXIuc2Nyb2xsTmV4dFBhZ2UoKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2Nyb2xsTmV4dFBhZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmlneEZvclNjcm9sbE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb24gKz0gcGFyc2VJbnQodGhpcy5pZ3hGb3JDb250YWluZXJTaXplLCAxMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkZFNjcm9sbFRvcChwYXJzZUludCh0aGlzLmlneEZvckNvbnRhaW5lclNpemUsIDEwKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGxzIGJ5IG9uZSBwYWdlIGludG8gdGhlIGFwcHJvcHJpYXRlIHByZXZpb3VzIGRpcmVjdGlvbi5cbiAgICAgKiBGb3IgXCJob3Jpem9udGFsXCIgb3JpZW50YXRpb24gdGhhdCB3aWxsIGJlIG9uZSB2aWV3IHRvIHRoZSBsZWZ0IGFuZCBmb3IgXCJ2ZXJ0aWNhbFwiIHRoYXQgaXMgb25lIHZpZXcgdG8gdGhlIHRvcC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5wYXJlbnRWaXJ0RGlyLnNjcm9sbFByZXZQYWdlKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHNjcm9sbFByZXZQYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5pZ3hGb3JTY3JvbGxPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uIC09IHBhcnNlSW50KHRoaXMuaWd4Rm9yQ29udGFpbmVyU2l6ZSwgMTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyU2l6ZSA9IChwYXJzZUludCh0aGlzLmlneEZvckNvbnRhaW5lclNpemUsIDEwKSk7XG4gICAgICAgICAgICB0aGlzLmFkZFNjcm9sbFRvcCgtY29udGFpbmVyU2l6ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldENvbHVtblNjcm9sbExlZnQoY29sSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZXNDYWNoZVtjb2xJbmRleF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgdmVydGljYWwgc2Nyb2xsYmFyIERPTSBlbGVtZW50LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnBhcmVudFZpcnREaXIuZ2V0VmVydGljYWxTY3JvbGwoKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0VmVydGljYWxTY3JvbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLnZoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52aC5pbnN0YW5jZS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdG90YWwgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgYXJlIGZ1bGx5IHZpc2libGUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMucGFyZW50VmlydERpci5nZXRJdGVtQ291bnRJblZpZXcoKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0SXRlbUNvdW50SW5WaWV3KCkge1xuICAgICAgICBsZXQgc3RhcnRJbmRleCA9IHRoaXMuZ2V0SW5kZXhBdChcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb24sXG4gICAgICAgICAgICB0aGlzLnNpemVzQ2FjaGUsXG4gICAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbFBvc2l0aW9uIC0gdGhpcy5zaXplc0NhY2hlW3N0YXJ0SW5kZXhdID4gMCkge1xuICAgICAgICAgICAgLy8gZmlzcnQgaXRlbSBpcyBub3QgZnVsbHkgaW4gdmlld1xuICAgICAgICAgICAgc3RhcnRJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVuZEluZGV4ID0gdGhpcy5nZXRJbmRleEF0KFxuICAgICAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvbiArIHBhcnNlSW50KHRoaXMuaWd4Rm9yQ29udGFpbmVyU2l6ZSwgMTApLFxuICAgICAgICAgICAgdGhpcy5zaXplc0NhY2hlLFxuICAgICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW5kSW5kZXggLSBzdGFydEluZGV4O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGhvcml6b250YWwgc2Nyb2xsYmFyIERPTSBlbGVtZW50LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnBhcmVudFZpcnREaXIuZ2V0SG9yaXpvbnRhbFNjcm9sbCgpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRIb3Jpem9udGFsU2Nyb2xsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50KHRoaXMuX3ZpZXdDb250YWluZXIsICdpZ3gtaG9yaXpvbnRhbC12aXJ0dWFsLWhlbHBlcicpIHx8IHRoaXMuaFNjcm9sbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzaXplIG9mIHRoZSBlbGVtZW50IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMucGFyZW50VmlydERpci5nZXRTaXplQXQoMSk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldFNpemVBdChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNpemVzQ2FjaGVbaW5kZXggKyAxXSAtIHRoaXMuc2l6ZXNDYWNoZVtpbmRleF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc2Nyb2xsIG9mZnNldCBvZiB0aGUgZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnBhcmVudFZpcnREaXIuZ2V0U2Nyb2xsRm9ySW5kZXgoMSk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldFNjcm9sbEZvckluZGV4KGluZGV4OiBudW1iZXIsIGJvdHRvbT86IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyU2l6ZSA9IHBhcnNlSW50KHRoaXMuaWd4Rm9yQ29udGFpbmVyU2l6ZSwgMTApO1xuICAgICAgICBjb25zdCBzY3JvbGwgPSBib3R0b20gPyBNYXRoLm1heCgwLCB0aGlzLnNpemVzQ2FjaGVbaW5kZXggKyAxXSAtIGNvbnRhaW5lclNpemUpIDogdGhpcy5zaXplc0NhY2hlW2luZGV4XTtcbiAgICAgICAgcmV0dXJuIHNjcm9sbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiBzY3JvbGxpbmcgdmVydGljYWxseVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvblNjcm9sbChldmVudCkge1xuICAgICAgICAvKiBpbiBjZXJ0YWluIHNpdHVhdGlvbnMgdGhpcyBtYXkgYmUgY2FsbGVkIHdoZW4gbm8gc2Nyb2xsYmFyIGlzIHZpc2libGUgKi9cbiAgICAgICAgaWYgKCFwYXJzZUludCh0aGlzLnZoLmluc3RhbmNlLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQsIDEwKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyU2l6ZSA9IHBhcnNlSW50KHRoaXMuaWd4Rm9yQ29udGFpbmVyU2l6ZSwgMTApO1xuICAgICAgICBjb25zdCBtYXhSZWFsU2Nyb2xsVG9wID0gZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLnNjcm9sbEhlaWdodCAtIGNvbnRhaW5lclNpemU7XG4gICAgICAgIGNvbnN0IHJlYWxQZXJjZW50U2Nyb2xsZWQgPSBldmVudC50YXJnZXQuc2Nyb2xsVG9wIC8gbWF4UmVhbFNjcm9sbFRvcDtcbiAgICAgICAgaWYgKCF0aGlzLl9iU2Nyb2xsSW50ZXJuYWwpIHtcbiAgICAgICAgICAgIGNvbnN0IG1heFZpcnRTY3JvbGxUb3AgPSB0aGlzLl92aXJ0SGVpZ2h0IC0gY29udGFpbmVyU2l6ZTtcbiAgICAgICAgICAgIHRoaXMuX3ZpcnRTY3JvbGxUb3AgPSByZWFsUGVyY2VudFNjcm9sbGVkICogbWF4VmlydFNjcm9sbFRvcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2JTY3JvbGxJbnRlcm5hbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Njcm9sbFBvc2l0aW9uID0gdGhpcy5fdmlydFNjcm9sbFRvcDtcbiAgICAgICAgY29uc3QgcHJldlN0YXJ0SW5kZXggPSB0aGlzLnN0YXRlLnN0YXJ0SW5kZXg7XG4gICAgICAgIGNvbnN0IHNjcm9sbE9mZnNldCA9IHRoaXMuZml4ZWRVcGRhdGVBbGxFbGVtZW50cyh0aGlzLl92aXJ0U2Nyb2xsVG9wKTtcblxuICAgICAgICB0aGlzLmRjLmluc3RhbmNlLl92aWV3Q29udGFpbmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSAtKHNjcm9sbE9mZnNldCkgKyAncHgnO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiBoZWlnaHQvd2lkdGggaGFzIGNoYW5nZXMgaW4gdmlld3MuXG4gICAgICAgICAgICB0aGlzLnJlY2FsY1VwZGF0ZVNpemVzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRjLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgaWYgKHByZXZTdGFydEluZGV4ICE9PSB0aGlzLnN0YXRlLnN0YXJ0SW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMub25DaHVua0xvYWQuZW1pdCh0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBGdW5jdGlvbiB0aGF0IHJlY2FjdWxhdGVzIGFuZCB1cGRhdGVzIGNhY2hlIHNpemVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWNhbGNVcGRhdGVTaXplcygpIHtcbiAgICAgICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5pZ3hGb3JTY3JvbGxPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID9cbiAgICAgICAgICAgIHRoaXMuaWd4Rm9yU2l6ZVByb3BOYW1lIDogJ2hlaWdodCc7XG4gICAgICAgIGNvbnN0IGRpZmZzID0gW107XG4gICAgICAgIGxldCB0b3RhbERpZmYgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2VtYmVkZGVkVmlld3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLl9lbWJlZGRlZFZpZXdzW2ldO1xuICAgICAgICAgICAgY29uc3Qgck5vZGUgPSB2aWV3LnJvb3ROb2Rlcy5maW5kKChub2RlKSA9PiBub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSk7XG4gICAgICAgICAgICBpZiAock5vZGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBoID0gck5vZGUub2Zmc2V0SGVpZ2h0ID8gck5vZGUub2Zmc2V0SGVpZ2h0IDogcGFyc2VJbnQodGhpcy5pZ3hGb3JJdGVtU2l6ZSwgMTApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGF0ZS5zdGFydEluZGV4ICsgaTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNSZW1vdGUgJiYgIXRoaXMuaWd4Rm9yT2ZbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBvbGRWYWwgPSBkaW1lbnNpb24gPT09ICdoZWlnaHQnID8gdGhpcy5oZWlnaHRDYWNoZVtpbmRleF0gOiB0aGlzLmlneEZvck9mW2luZGV4XVtkaW1lbnNpb25dO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1ZhbCA9IGRpbWVuc2lvbiA9PT0gJ2hlaWdodCcgPyBoIDogck5vZGUuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICAgICAgaWYgKGRpbWVuc2lvbiA9PT0gJ2hlaWdodCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWlnaHRDYWNoZVtpbmRleF0gPSBuZXdWYWw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZ3hGb3JPZltpbmRleF1bZGltZW5zaW9uXSA9IG5ld1ZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgY3VyckRpZmYgPSBuZXdWYWwgLSBvbGRWYWw7XG4gICAgICAgICAgICAgICAgZGlmZnMucHVzaChjdXJyRGlmZik7XG4gICAgICAgICAgICAgICAgdG90YWxEaWZmICs9IGN1cnJEaWZmO1xuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZXNDYWNoZVtpbmRleCArIDFdICs9IHRvdGFsRGlmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB1cGRhdGUgY2FjaGVcbiAgICAgICAgaWYgKE1hdGguYWJzKHRvdGFsRGlmZikgPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gdGhpcy5zdGF0ZS5zdGFydEluZGV4ICsgdGhpcy5zdGF0ZS5jaHVua1NpemUgKyAxOyBqIDwgdGhpcy5zaXplc0NhY2hlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaXplc0NhY2hlW2pdICs9IHRvdGFsRGlmZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdXBkYXRlIHNjckJhciBoZWlnaHRzL3dpZHRoc1xuICAgICAgICAgICAgaWYgKHRoaXMuaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsV2lkdGggPSBwYXJzZUludCh0aGlzLmhTY3JvbGwuY2hpbGRyZW5bMF0uc3R5bGUud2lkdGgsIDEwKSArIHRvdGFsRGlmZjtcbiAgICAgICAgICAgICAgICB0aGlzLmhTY3JvbGwuY2hpbGRyZW5bMF0uc3R5bGUud2lkdGggPSB0b3RhbFdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlZHVjZXIgPSAoYWNjLCB2YWwpID0+IGFjYyArIHZhbDtcbiAgICAgICAgICAgIGlmICh0aGlzLmlneEZvclNjcm9sbE9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NyVG9Cb3R0b20gPSB0aGlzLl9pc1Njcm9sbGVkVG9Cb3R0b20gJiYgIXRoaXMuZGMuaW5zdGFuY2Uubm90VmlydHVhbDtcbiAgICAgICAgICAgICAgICBjb25zdCBoU3VtID0gdGhpcy5oZWlnaHRDYWNoZS5yZWR1Y2UocmVkdWNlcik7XG4gICAgICAgICAgICAgICAgaWYgKGhTdW0gPiB0aGlzLl9tYXhIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmlydEhlaWdodFJhdGlvID0gaFN1bSAvIHRoaXMuX21heEhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy52aC5pbnN0YW5jZS5oZWlnaHQgPSBNYXRoLm1pbih0aGlzLnZoLmluc3RhbmNlLmhlaWdodCArIHRvdGFsRGlmZiwgdGhpcy5fbWF4SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl92aXJ0SGVpZ2h0ID0gaFN1bTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmguaW5zdGFuY2UuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmguaW5zdGFuY2UuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNjclRvQm90dG9tICYmICF0aGlzLl9pc0F0Qm90dG9tSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyU2l6ZSA9IHBhcnNlSW50KHRoaXMuaWd4Rm9yQ29udGFpbmVyU2l6ZSwgMTApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXhWaXJ0U2Nyb2xsVG9wID0gdGhpcy5fdmlydEhlaWdodCAtIGNvbnRhaW5lclNpemU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2JTY3JvbGxJbnRlcm5hbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZpcnRTY3JvbGxUb3AgPSBtYXhWaXJ0U2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uID0gbWF4VmlydFNjcm9sbFRvcDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYWRqdXN0VG9JbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpbiBjYXNlIHNjcm9sbGVkIHRvIHNwZWNpZmljIGluZGV4IHdoZXJlIGFmdGVyIHNjcm9sbCBoZWlnaHRzIGFyZSBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gYWRqdXN0IHRoZSBvZmZzZXRzIHNvIHRoYXQgaXRlbSBpcyBsYXN0IGluIHZpZXcuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZXNUb0luZGV4ID0gdGhpcy5fYWRqdXN0VG9JbmRleCAtIHRoaXMuc3RhdGUuc3RhcnRJbmRleCArIDE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1bURpZmZzID0gZGlmZnMuc2xpY2UoMCwgdXBkYXRlc1RvSW5kZXgpLnJlZHVjZShyZWR1Y2VyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3Vyck9mZnNldCA9IHBhcnNlSW50KHRoaXMuZGMuaW5zdGFuY2UuX3ZpZXdDb250YWluZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCwgMTApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRjLmluc3RhbmNlLl92aWV3Q29udGFpbmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSAoY3Vyck9mZnNldCAtIHN1bURpZmZzKSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkanVzdFRvSW5kZXggPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZml4ZWRVcGRhdGVBbGxFbGVtZW50cyhpblNjcm9sbFRvcDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLmlzUmVtb3RlID8gdGhpcy50b3RhbEl0ZW1Db3VudCA6IHRoaXMuaWd4Rm9yT2YubGVuZ3RoO1xuICAgICAgICBsZXQgbmV3U3RhcnQgPSB0aGlzLmdldEluZGV4QXQoXG4gICAgICAgICAgICBpblNjcm9sbFRvcCxcbiAgICAgICAgICAgIHRoaXMuc2l6ZXNDYWNoZSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKG5ld1N0YXJ0ICsgdGhpcy5zdGF0ZS5jaHVua1NpemUgPiBjb3VudCkge1xuICAgICAgICAgICAgbmV3U3RhcnQgPSBjb3VudCAtIHRoaXMuc3RhdGUuY2h1bmtTaXplO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZTdGFydCA9IHRoaXMuc3RhdGUuc3RhcnRJbmRleDtcbiAgICAgICAgY29uc3QgZGlmZiA9IG5ld1N0YXJ0IC0gdGhpcy5zdGF0ZS5zdGFydEluZGV4O1xuICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0SW5kZXggPSBuZXdTdGFydDtcbiAgICAgICAgaWYgKGRpZmYpIHtcbiAgICAgICAgICAgIHRoaXMub25DaHVua1ByZWxvYWQuZW1pdCh0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1JlbW90ZSkge1xuICAgICAgICAgICAgICAgIC8qcmVjYWxjdWxhdGUgYW5kIGFwcGx5IHBhZ2Ugc2l6ZS4qL1xuICAgICAgICAgICAgICAgIGlmIChkaWZmID4gMCAmJiBkaWZmIDw9IHRoaXMuTUFYX1BFUkZfU0NST0xMX0RJRkYpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQXBwbHlTY3JvbGxOZXh0KHByZXZTdGFydCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkaWZmIDwgMCAmJiBNYXRoLmFicyhkaWZmKSA8PSB0aGlzLk1BWF9QRVJGX1NDUk9MTF9ESUZGKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUFwcGx5U2Nyb2xsUHJldihwcmV2U3RhcnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZml4ZWRBcHBseVNjcm9sbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5TY3JvbGxUb3AgLSB0aGlzLnNpemVzQ2FjaGVbdGhpcy5zdGF0ZS5zdGFydEluZGV4XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogVGhlIGZ1bmN0aW9uIGFwcGxpZXMgYW4gb3B0aW1pemVkIHN0YXRlIGNoYW5nZSBmb3Igc2Nyb2xsaW5nIGRvd24vcmlnaHQgZW1wbG95aW5nIGNvbnRleHQgY2hhbmdlIHdpdGggdmlldyByZWFycmFuZ2VtZW50XG4gICAgICovXG4gICAgcHJvdGVjdGVkIG1vdmVBcHBseVNjcm9sbE5leHQocHJldkluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBwcmV2SW5kZXggKyB0aGlzLnN0YXRlLmNodW5rU2l6ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgc3RhcnQgKyB0aGlzLnN0YXRlLnN0YXJ0SW5kZXggLSBwcmV2SW5kZXggJiYgdGhpcy5pZ3hGb3JPZltpXSAhPT0gdW5kZWZpbmVkOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pZ3hGb3JPZltpXTtcbiAgICAgICAgICAgIGNvbnN0IGVtYlZpZXcgPSB0aGlzLl9lbWJlZGRlZFZpZXdzLnNoaWZ0KCk7XG4gICAgICAgICAgICBjb25zdCBjbnR4ID0gZW1iVmlldy5jb250ZXh0O1xuICAgICAgICAgICAgY250eC4kaW1wbGljaXQgPSBpbnB1dDtcbiAgICAgICAgICAgIGNudHguaW5kZXggPSB0aGlzLmdldENvbnRleHRJbmRleChpbnB1dCk7XG4gICAgICAgICAgICBjbnR4LmNvdW50ID0gdGhpcy5pZ3hGb3JPZi5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCB2aWV3OiBWaWV3UmVmID0gdGhpcy5kYy5pbnN0YW5jZS5fdmNyLmRldGFjaCgwKTtcbiAgICAgICAgICAgIHRoaXMuZGMuaW5zdGFuY2UuX3Zjci5pbnNlcnQodmlldyk7XG4gICAgICAgICAgICB0aGlzLl9lbWJlZGRlZFZpZXdzLnB1c2goZW1iVmlldyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogVGhlIGZ1bmN0aW9uIGFwcGxpZXMgYW4gb3B0aW1pemVkIHN0YXRlIGNoYW5nZSBmb3Igc2Nyb2xsaW5nIHVwL2xlZnQgZW1wbG95aW5nIGNvbnRleHQgY2hhbmdlIHdpdGggdmlldyByZWFycmFuZ2VtZW50XG4gICAgICovXG4gICAgcHJvdGVjdGVkIG1vdmVBcHBseVNjcm9sbFByZXYocHJldkluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHByZXZJbmRleCAtIDE7IGkgPj0gdGhpcy5zdGF0ZS5zdGFydEluZGV4ICYmIHRoaXMuaWd4Rm9yT2ZbaV0gIT09IHVuZGVmaW5lZDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuaWd4Rm9yT2ZbaV07XG4gICAgICAgICAgICBjb25zdCBlbWJWaWV3ID0gdGhpcy5fZW1iZWRkZWRWaWV3cy5wb3AoKTtcbiAgICAgICAgICAgIGNvbnN0IGNudHggPSBlbWJWaWV3LmNvbnRleHQ7XG4gICAgICAgICAgICBjbnR4LiRpbXBsaWNpdCA9IGlucHV0O1xuICAgICAgICAgICAgY250eC5pbmRleCA9IHRoaXMuZ2V0Q29udGV4dEluZGV4KGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IHZpZXc6IFZpZXdSZWYgPSB0aGlzLmRjLmluc3RhbmNlLl92Y3IuZGV0YWNoKHRoaXMuZGMuaW5zdGFuY2UuX3Zjci5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIHRoaXMuZGMuaW5zdGFuY2UuX3Zjci5pbnNlcnQodmlldywgMCk7XG4gICAgICAgICAgICB0aGlzLl9lbWJlZGRlZFZpZXdzLnVuc2hpZnQoZW1iVmlldyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0Q29udGV4dEluZGV4KGlucHV0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzUmVtb3RlID8gdGhpcy5zdGF0ZS5zdGFydEluZGV4ICsgdGhpcy5pZ3hGb3JPZi5pbmRleE9mKGlucHV0KSA6IHRoaXMuaWd4Rm9yT2YuaW5kZXhPZihpbnB1dCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIFRoZSBmdW5jdGlvbiBhcHBsaWVzIGFuIG9wdGltaXplZCBzdGF0ZSBjaGFuZ2UgdGhyb3VnaCBjb250ZXh0IGNoYW5nZSBmb3IgZWFjaCB2aWV3XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZpeGVkQXBwbHlTY3JvbGwoKTogdm9pZCB7XG4gICAgICAgIGxldCBqID0gMDtcbiAgICAgICAgY29uc3QgZW5kSW5kZXggPSB0aGlzLnN0YXRlLnN0YXJ0SW5kZXggKyB0aGlzLnN0YXRlLmNodW5rU2l6ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuc3RhdGUuc3RhcnRJbmRleDsgaSA8IGVuZEluZGV4ICYmIHRoaXMuaWd4Rm9yT2ZbaV0gIT09IHVuZGVmaW5lZDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuaWd4Rm9yT2ZbaV07XG4gICAgICAgICAgICBjb25zdCBlbWJWaWV3ID0gdGhpcy5fZW1iZWRkZWRWaWV3c1tqKytdO1xuICAgICAgICAgICAgY29uc3QgY250eCA9IChlbWJWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5jb250ZXh0O1xuICAgICAgICAgICAgY250eC4kaW1wbGljaXQgPSBpbnB1dDtcbiAgICAgICAgICAgIGNudHguaW5kZXggPSB0aGlzLmdldENvbnRleHRJbmRleChpbnB1dCk7XG4gICAgICAgICAgICBjbnR4LmNvdW50ID0gdGhpcy5pZ3hGb3JPZi5sZW5ndGg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiBzY3JvbGxpbmcgaG9yaXpvbnRhbGx5XG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uSFNjcm9sbChldmVudCkge1xuICAgICAgICAvKiBpbiBjZXJ0YWluIHNpdHVhdGlvbnMgdGhpcyBtYXkgYmUgY2FsbGVkIHdoZW4gbm8gc2Nyb2xsYmFyIGlzIHZpc2libGUgKi9cbiAgICAgICAgaWYgKCFwYXJzZUludCh0aGlzLmhTY3JvbGwuY2hpbGRyZW5bMF0uc3R5bGUud2lkdGgsIDEwKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Njcm9sbFBvc2l0aW9uID0gZXZlbnQudGFyZ2V0LnNjcm9sbExlZnQ7XG4gICAgICAgIGNvbnN0IHByZXZTdGFydEluZGV4ID0gdGhpcy5zdGF0ZS5zdGFydEluZGV4O1xuICAgICAgICAvLyBVcGRhdGluZyBob3Jpem9udGFsIGNodW5rc1xuICAgICAgICBjb25zdCBzY3JvbGxPZmZzZXQgPSB0aGlzLmZpeGVkVXBkYXRlQWxsRWxlbWVudHModGhpcy5fc2Nyb2xsUG9zaXRpb24pO1xuICAgICAgICB0aGlzLmRjLmluc3RhbmNlLl92aWV3Q29udGFpbmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gLXNjcm9sbE9mZnNldCArICdweCc7XG5cbiAgICAgICAgdGhpcy5kYy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIGlmIChwcmV2U3RhcnRJbmRleCAhPT0gdGhpcy5zdGF0ZS5zdGFydEluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2h1bmtMb2FkLmVtaXQodGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBmdW5jdGlvbiB1c2VkIHRvIHRyYWNrIGNoYW5nZXMgaW4gdGhlIGl0ZW1zIGNvbGxlY3Rpb24uXG4gICAgICogQnkgZGVmYXVsdCB0aGUgb2JqZWN0IHJlZmVyZW5jZXMgYXJlIGNvbXBhcmVkLiBIb3dldmVyIHRoaXMgY2FuIGJlIG9wdGltaXplZCBpZiB5b3UgaGF2ZSB1bmlxdWUgaWRlbnRpZmllclxuICAgICAqIHZhbHVlIHRoYXQgY2FuIGJlIHVzZWQgZm9yIHRoZSBjb21wYXJpc29uIGluc3RlYWQgb2YgdGhlIG9iamVjdCByZWYgb3IgaWYgeW91IGhhdmUgc29tZSBvdGhlciBwcm9wZXJ0eSB2YWx1ZXNcbiAgICAgKiBpbiB0aGUgaXRlbSBvYmplY3QgdGhhdCBzaG91bGQgYmUgdHJhY2tlZCBmb3IgY2hhbmdlcy5cbiAgICAgKiBUaGlzIG9wdGlvbiBpcyBzaW1pbGFyIHRvIG5nRm9yVHJhY2tCeS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgdHJhY2tGdW5jID0gdGhpcy5wYXJlbnRWaXJ0RGlyLmlneEZvclRyYWNrQnk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgaWd4Rm9yVHJhY2tCeSgpOiBUcmFja0J5RnVuY3Rpb248VD4geyByZXR1cm4gdGhpcy5fdHJhY2tCeUZuOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBmdW5jdGlvbiB1c2VkIHRvIHRyYWNrIGNoYW5nZXMgaW4gdGhlIGl0ZW1zIGNvbGxlY3Rpb24uXG4gICAgICogVGhpcyBmdW5jdGlvbiBjYW4gYmUgc2V0IGluIHNjZW5hcmlvcyB3aGVyZSB5b3Ugd2FudCB0byBvcHRpbWl6ZSBvclxuICAgICAqIGN1c3RvbWl6ZSB0aGUgdHJhY2tpbmcgb2YgY2hhbmdlcyBmb3IgdGhlIGl0ZW1zIGluIHRoZSBjb2xsZWN0aW9uLlxuICAgICAqIFRoZSBpZ3hGb3JUcmFja0J5IGZ1bmN0aW9uIHRha2VzIHRoZSBpbmRleCBhbmQgdGhlIGN1cnJlbnQgaXRlbSBhcyBhcmd1bWVudHMgYW5kIG5lZWRzIHRvIHJldHVybiB0aGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoaXMgaXRlbS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5wYXJlbnRWaXJ0RGlyLmlneEZvclRyYWNrQnkgPSAoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgKiAgICAgIHJldHVybiBpdGVtLmlkICsgaXRlbS53aWR0aDtcbiAgICAgKiB9O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHNldCBpZ3hGb3JUcmFja0J5KGZuOiBUcmFja0J5RnVuY3Rpb248VD4pIHsgdGhpcy5fdHJhY2tCeUZuID0gZm47IH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2FwcGx5Q2hhbmdlcygpIHtcbiAgICAgICAgY29uc3QgcHJldkNodW5rU2l6ZSA9IHRoaXMuc3RhdGUuY2h1bmtTaXplO1xuICAgICAgICB0aGlzLmFwcGx5Q2h1bmtTaXplQ2hhbmdlKCk7XG4gICAgICAgIHRoaXMuX3JlY2FsY1Njcm9sbEJhclNpemUoKTtcbiAgICAgICAgaWYgKHRoaXMuaWd4Rm9yT2YgJiYgdGhpcy5pZ3hGb3JPZi5sZW5ndGggJiYgdGhpcy5kYykge1xuICAgICAgICAgICAgY29uc3QgZW1iZWRkZWRWaWV3Q29weSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuX2VtYmVkZGVkVmlld3MpO1xuICAgICAgICAgICAgbGV0IHN0YXJ0SW5kZXggPSB0aGlzLnN0YXRlLnN0YXJ0SW5kZXg7XG4gICAgICAgICAgICBsZXQgZW5kSW5kZXggPSB0aGlzLnN0YXRlLmNodW5rU2l6ZSArIHRoaXMuc3RhdGUuc3RhcnRJbmRleDtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUmVtb3RlKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgZW5kSW5kZXggPSB0aGlzLmlneEZvck9mLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpIDwgZW5kSW5kZXggJiYgdGhpcy5pZ3hGb3JPZltpXSAhPT0gdW5kZWZpbmVkOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuaWd4Rm9yT2ZbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgZW1iVmlldyA9IGVtYmVkZGVkVmlld0NvcHkuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbnR4ID0gKGVtYlZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLmNvbnRleHQ7XG4gICAgICAgICAgICAgICAgY250eC4kaW1wbGljaXQgPSBpbnB1dDtcbiAgICAgICAgICAgICAgICBjbnR4LmluZGV4ID0gdGhpcy5nZXRDb250ZXh0SW5kZXgoaW5wdXQpO1xuICAgICAgICAgICAgICAgIGNudHguY291bnQgPSB0aGlzLmlneEZvck9mLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgaWYgKHByZXZDaHVua1NpemUgIT09IHRoaXMuc3RhdGUuY2h1bmtTaXplKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNodW5rTG9hZC5lbWl0KHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY2FsY1VwZGF0ZVNpemVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9jYWxjTWF4QnJvd3NlckhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkaXYuc3R5bGU7XG4gICAgICAgIHN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgc3R5bGUudG9wID0gJzk5OTk5OTk5OTk5OTk5OTlweCc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IE1hdGguYWJzKGRpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVsndG9wJ10pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7XG4gICAgICAgIHJldHVybiBzaXplO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBSZWNhbGN1bGF0ZXMgdGhlIGNodW5rU2l6ZSBiYXNlZCBvbiBjdXJyZW50IHN0YXJ0SW5kZXggYW5kIHJldHVybnMgdGhlIG5ldyBzaXplLlxuICAgICAqIFRoaXMgc2hvdWxkIGJlIGNhbGxlZCBhZnRlciB0aGlzLnN0YXRlLnN0YXJ0SW5kZXggaXMgdXBkYXRlZCwgbm90IGJlZm9yZS5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2NhbGN1bGF0ZUNodW5rU2l6ZSgpOiBudW1iZXIge1xuICAgICAgICBsZXQgY2h1bmtTaXplID0gMDtcbiAgICAgICAgaWYgKHRoaXMuaWd4Rm9yQ29udGFpbmVyU2l6ZSAhPT0gbnVsbCAmJiB0aGlzLmlneEZvckNvbnRhaW5lclNpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNpemVzQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRTaXplc0NhY2hlKHRoaXMuaWd4Rm9yT2YpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2h1bmtTaXplID0gdGhpcy5fY2FsY01heENodW5rU2l6ZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaWd4Rm9yT2YgJiYgY2h1bmtTaXplID4gdGhpcy5pZ3hGb3JPZi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjaHVua1NpemUgPSB0aGlzLmlneEZvck9mLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlneEZvck9mKSB7XG4gICAgICAgICAgICAgICAgY2h1bmtTaXplID0gdGhpcy5pZ3hGb3JPZi5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNodW5rU2l6ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldEVsZW1lbnQodmlld3JlZiwgbm9kZU5hbWUpIHtcbiAgICAgICAgY29uc3QgZWxlbSA9IHZpZXdyZWYuZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUobm9kZU5hbWUpO1xuICAgICAgICByZXR1cm4gZWxlbS5sZW5ndGggPiAwID8gZWxlbVswXSA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBpbml0U2l6ZXNDYWNoZShpdGVtczogYW55W10pOiBudW1iZXIge1xuICAgICAgICBsZXQgdG90YWxTaXplID0gMDtcbiAgICAgICAgbGV0IHNpemUgPSAwO1xuICAgICAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLmlneEZvclNjcm9sbE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgP1xuICAgICAgICAgICAgdGhpcy5pZ3hGb3JTaXplUHJvcE5hbWUgOiAnaGVpZ2h0JztcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB0aGlzLnNpemVzQ2FjaGUgPSBbXTtcbiAgICAgICAgdGhpcy5oZWlnaHRDYWNoZSA9IFtdO1xuICAgICAgICB0aGlzLnNpemVzQ2FjaGUucHVzaCgwKTtcbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLmlzUmVtb3RlID8gdGhpcy50b3RhbEl0ZW1Db3VudCA6IGl0ZW1zLmxlbmd0aDtcbiAgICAgICAgZm9yIChpOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKGRpbWVuc2lvbiA9PT0gJ2hlaWdodCcpIHtcbiAgICAgICAgICAgICAgICAvLyBjb2xzW2ldW2RpbWVuc2lvbl0gPSBwYXJzZUludCh0aGlzLmlneEZvckl0ZW1TaXplLCAxMCkgfHwgMDtcbiAgICAgICAgICAgICAgICBzaXplID0gcGFyc2VJbnQodGhpcy5pZ3hGb3JJdGVtU2l6ZSwgMTApIHx8IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHRDYWNoZS5wdXNoKHNpemUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaXplID0gdGhpcy5fZ2V0SXRlbVNpemUoaXRlbXNbaV0sIGRpbWVuc2lvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b3RhbFNpemUgKz0gc2l6ZTtcbiAgICAgICAgICAgIHRoaXMuc2l6ZXNDYWNoZS5wdXNoKHRvdGFsU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvdGFsU2l6ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3VwZGF0ZVNpemVDYWNoZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgdGhpcy5pbml0U2l6ZXNDYWNoZSh0aGlzLmlneEZvck9mKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvbGRIZWlnaHQgPSB0aGlzLmhlaWdodENhY2hlLmxlbmd0aCA+IDAgPyB0aGlzLmhlaWdodENhY2hlLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYyArIHZhbCkgOiAwO1xuICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSB0aGlzLmluaXRTaXplc0NhY2hlKHRoaXMuaWd4Rm9yT2YpO1xuXG4gICAgICAgIGNvbnN0IGRpZmYgPSBvbGRIZWlnaHQgLSBuZXdIZWlnaHQ7XG5cbiAgICAgICAgLy8gaWYgZGF0YSBoYXMgYmVlbiBjaGFuZ2VkIHdoaWxlIGNvbnRhaW5lciBpcyBzY3JvbGxlZFxuICAgICAgICAvLyBzaG91bGQgdXBkYXRlIHNjcm9sbCB0b3AvbGVmdCBhY2NvcmRpbmcgdG8gY2hhbmdlIHNvIHRoYXQgc2FtZSBzdGFydEluZGV4IGlzIGluIHZpZXdcbiAgICAgICAgaWYgKE1hdGguYWJzKGRpZmYpID4gMCAmJiB0aGlzLnNjcm9sbFBvc2l0aW9uID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZWNhbGNVcGRhdGVTaXplcygpO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gcGFyc2VJbnQodGhpcy5kYy5pbnN0YW5jZS5fdmlld0NvbnRhaW5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wLCAxMCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uID0gdGhpcy5zaXplc0NhY2hlW3RoaXMuc3RhdGUuc3RhcnRJbmRleF0gLSBvZmZzZXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9jYWxjTWF4Q2h1bmtTaXplKCk6IG51bWJlciB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IGxlbmd0aCA9IDA7XG4gICAgICAgIGxldCBtYXhMZW5ndGggPSAwO1xuICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZVNpemUgPSBwYXJzZUludCh0aGlzLmlneEZvckNvbnRhaW5lclNpemUsIDEwKTtcbiAgICAgICAgaWYgKCFhdmFpbGFibGVTaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLmlneEZvclNjcm9sbE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgP1xuICAgICAgICAgICAgdGhpcy5pZ3hGb3JTaXplUHJvcE5hbWUgOiAnaGVpZ2h0JztcbiAgICAgICAgY29uc3QgcmVkdWNlciA9IChhY2N1bXVsYXRvciwgY3VycmVudEl0ZW0pID0+IGFjY3VtdWxhdG9yICsgdGhpcy5fZ2V0SXRlbVNpemUoY3VycmVudEl0ZW0sIGRpbWVuc2lvbik7XG4gICAgICAgIGZvciAoaTsgaSA8IHRoaXMuaWd4Rm9yT2YubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pZ3hGb3JPZltpXTtcbiAgICAgICAgICAgIGlmIChkaW1lbnNpb24gPT09ICdoZWlnaHQnKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHsgdmFsdWU6IHRoaXMuaWd4Rm9yT2ZbaV0sIGhlaWdodDogdGhpcy5oZWlnaHRDYWNoZVtpXSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IGRpbWVuc2lvbiA9PT0gJ2hlaWdodCcgP1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0Q2FjaGVbaV0gOlxuICAgICAgICAgICAgICAgIHRoaXMuX2dldEl0ZW1TaXplKGl0ZW0sIGRpbWVuc2lvbik7XG4gICAgICAgICAgICBzdW0gPSBhcnIucmVkdWNlKHJlZHVjZXIsIHNpemUpO1xuICAgICAgICAgICAgaWYgKHN1bSA8IGF2YWlsYWJsZVNpemUpIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICBsZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmIChpID09PSB0aGlzLmlneEZvck9mLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVhY2hlZCBlbmQgd2l0aG91dCBleGNlZWRpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5jbHVkZSBwcmV2IGl0ZW1zIHVudGlsIHNpemUgaXMgZmlsbGVkIG9yIGZpcnN0IGl0ZW0gaXMgcmVhY2hlZC5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1ckl0ZW0gPSBkaW1lbnNpb24gPT09ICdoZWlnaHQnID8gYXJyWzBdLnZhbHVlIDogYXJyWzBdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldkluZGV4ID0gdGhpcy5pZ3hGb3JPZi5pbmRleE9mKGN1ckl0ZW0pIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHByZXZJbmRleCA+PSAwICYmIHN1bSA8PSBhdmFpbGFibGVTaXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJJdGVtID0gZGltZW5zaW9uID09PSAnaGVpZ2h0JyA/IGFyclswXS52YWx1ZSA6IGFyclswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZJbmRleCA9IHRoaXMuaWd4Rm9yT2YuaW5kZXhPZihjdXJJdGVtKSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2SXRlbSA9IHRoaXMuaWd4Rm9yT2ZbcHJldkluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZTaXplID0gZGltZW5zaW9uID09PSAnaGVpZ2h0JyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWlnaHRDYWNoZVtwcmV2SW5kZXhdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChwcmV2SXRlbVtkaW1lbnNpb25dLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdW0gPSBhcnIucmVkdWNlKHJlZHVjZXIsIHByZXZTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci51bnNoaWZ0KHByZXZJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aCA9IGFyci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IGFyci5sZW5ndGggKyAxO1xuICAgICAgICAgICAgICAgIGFyci5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgICAgICAgICAgIG1heExlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4TGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0SW5kZXhBdChsZWZ0LCBzZXQsIGluZGV4KSB7XG4gICAgICAgIGxldCBzdGFydCA9IDA7XG4gICAgICAgIGxldCBlbmQgPSBzZXQubGVuZ3RoIC0gMTtcbiAgICAgICAgaWYgKGxlZnQgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChzdGFydCA8PSBlbmQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pZElkeCA9IE1hdGguZmxvb3IoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuICAgICAgICAgICAgY29uc3QgbWlkTGVmdCA9IHNldFttaWRJZHhdO1xuICAgICAgICAgICAgY29uc3QgY21wID0gbGVmdCAtIG1pZExlZnQ7XG4gICAgICAgICAgICBpZiAoY21wID4gMCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0ID0gbWlkSWR4ICsgMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY21wIDwgMCkge1xuICAgICAgICAgICAgICAgIGVuZCA9IG1pZElkeCAtIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBtaWRJZHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVuZDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3JlY2FsY1Njcm9sbEJhclNpemUoKSB7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5pc1JlbW90ZSA/IHRoaXMudG90YWxJdGVtQ291bnQgOiAodGhpcy5pZ3hGb3JPZiA/IHRoaXMuaWd4Rm9yT2YubGVuZ3RoIDogMCk7XG4gICAgICAgIHRoaXMuZGMuaW5zdGFuY2Uubm90VmlydHVhbCA9ICEodGhpcy5pZ3hGb3JDb250YWluZXJTaXplICYmIHRoaXMuZGMgJiYgdGhpcy5zdGF0ZS5jaHVua1NpemUgPCBjb3VudCk7XG4gICAgICAgIGlmICh0aGlzLmlneEZvclNjcm9sbE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsV2lkdGggPSB0aGlzLmlneEZvckNvbnRhaW5lclNpemUgPyB0aGlzLmluaXRTaXplc0NhY2hlKHRoaXMuaWd4Rm9yT2YpIDogMDtcbiAgICAgICAgICAgIHRoaXMuaFNjcm9sbC5zdHlsZS53aWR0aCA9IHRoaXMuaWd4Rm9yQ29udGFpbmVyU2l6ZSArICdweCc7XG4gICAgICAgICAgICB0aGlzLmhTY3JvbGwuY2hpbGRyZW5bMF0uc3R5bGUud2lkdGggPSB0b3RhbFdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIGlmICh0b3RhbFdpZHRoIDw9IHBhcnNlSW50KHRoaXMuaWd4Rm9yQ29udGFpbmVyU2l6ZSwgMTApKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIHRoaXMudmguaW5zdGFuY2UuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHBhcnNlSW50KHRoaXMuaWd4Rm9yQ29udGFpbmVyU2l6ZSwgMTApICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMudmguaW5zdGFuY2UuaGVpZ2h0ID0gdGhpcy5fY2FsY0hlaWdodCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMudmguaW5zdGFuY2UuaGVpZ2h0IDw9IHBhcnNlSW50KHRoaXMuaWd4Rm9yQ29udGFpbmVyU2l6ZSwgMTApKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2NhbGNIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGhlaWdodDtcbiAgICAgICAgaWYgKHRoaXMuaGVpZ2h0Q2FjaGUpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuaGVpZ2h0Q2FjaGUucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjICsgdmFsLCAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuaW5pdFNpemVzQ2FjaGUodGhpcy5pZ3hGb3JPZik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdmlydEhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgaWYgKGhlaWdodCA+IHRoaXMuX21heEhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5fdmlydEhlaWdodFJhdGlvID0gaGVpZ2h0IC8gdGhpcy5fbWF4SGVpZ2h0O1xuICAgICAgICAgICAgaGVpZ2h0ID0gdGhpcy5fbWF4SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9yZWNhbGNPbkNvbnRhaW5lckNoYW5nZShjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuZGMuaW5zdGFuY2UuX3ZpZXdDb250YWluZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICB0aGlzLmRjLmluc3RhbmNlLl92aWV3Q29udGFpbmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICAgIGNvbnN0IHByZXZDaHVua1NpemUgPSB0aGlzLnN0YXRlLmNodW5rU2l6ZTtcbiAgICAgICAgdGhpcy5hcHBseUNodW5rU2l6ZUNoYW5nZSgpO1xuICAgICAgICB0aGlzLl9yZWNhbGNTY3JvbGxCYXJTaXplKCk7XG4gICAgICAgIGlmIChwcmV2Q2h1bmtTaXplICE9PSB0aGlzLnN0YXRlLmNodW5rU2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5vbkNodW5rTG9hZC5lbWl0KHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNpemVzQ2FjaGUgJiYgdGhpcy5oU2Nyb2xsKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGluZyBob3Jpem9udGFsIGNodW5rcyBhbmQgb2Zmc2V0cyBiYXNlZCBvbiB0aGUgbmV3IHNjcm9sbExlZnRcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbE9mZnNldCA9IHRoaXMuZml4ZWRVcGRhdGVBbGxFbGVtZW50cyh0aGlzLnNjcm9sbFBvc2l0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuZGMuaW5zdGFuY2UuX3ZpZXdDb250YWluZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSAtc2Nyb2xsT2Zmc2V0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBSZW1vdmVzIGFuIGVsZW1lbmV0IGZyb20gdGhlIGVtYmVkZGVkIHZpZXdzIGFuZCB1cGRhdGVzIGNodW5rU2l6ZS5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcmVtb3ZlTGFzdEVsZW0oKSB7XG4gICAgICAgIGNvbnN0IG9sZEVsZW0gPSB0aGlzLl9lbWJlZGRlZFZpZXdzLnBvcCgpO1xuICAgICAgICB0aGlzLm9uQmVmb3JlVmlld0Rlc3Ryb3llZC5lbWl0KG9sZEVsZW0pO1xuICAgICAgICBvbGRFbGVtLmRlc3Ryb3koKTtcblxuICAgICAgICB0aGlzLnN0YXRlLmNodW5rU2l6ZS0tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBJZiB0aGVyZSBleGlzdHMgYW4gZWxlbWVudCB0aGF0IHdlIGNhbiBjcmVhdGUgZW1iZWRkZWQgdmlldyBmb3IgY3JlYXRlcyBpdCwgYXBwZW5kcyBpdCBhbmQgdXBkYXRlcyBjaHVua1NpemVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWRkTGFzdEVsZW0oKSB7XG4gICAgICAgIGxldCBlbGVtSW5kZXggPSB0aGlzLnN0YXRlLnN0YXJ0SW5kZXggKyB0aGlzLnN0YXRlLmNodW5rU2l6ZTtcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVtb3RlICYmICF0aGlzLmlneEZvck9mKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbUluZGV4ID49IHRoaXMuaWd4Rm9yT2YubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbGVtSW5kZXggPSB0aGlzLmlneEZvck9mLmxlbmd0aCAtIHRoaXMuc3RhdGUuY2h1bmtTaXplO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pZ3hGb3JPZltlbGVtSW5kZXhdO1xuICAgICAgICBjb25zdCBlbWJlZGRlZFZpZXcgPSB0aGlzLmRjLmluc3RhbmNlLl92Y3IuY3JlYXRlRW1iZWRkZWRWaWV3KFxuICAgICAgICAgICAgdGhpcy5fdGVtcGxhdGUsXG4gICAgICAgICAgICBuZXcgSWd4Rm9yT2ZDb250ZXh0PFQ+KGlucHV0LCB0aGlzLmdldENvbnRleHRJbmRleChpbnB1dCksIHRoaXMuaWd4Rm9yT2YubGVuZ3RoKVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuX2VtYmVkZGVkVmlld3MucHVzaChlbWJlZGRlZFZpZXcpO1xuICAgICAgICB0aGlzLnN0YXRlLmNodW5rU2l6ZSsrO1xuXG4gICAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWNhbGN1bGF0ZXMgY2h1bmtTaXplIGFuZCBhZGRzL3JlbW92ZXMgZWxlbWVudHMgaWYgbmVlZCBkdWUgdG8gdGhlIGNoYW5nZS5cbiAgICAgKiB0aGlzLnN0YXRlLmNodW5rU2l6ZSBpcyB1cGRhdGVkIGluIEBhZGRMYXN0RWxlbSgpIG9yIEByZW1vdmVMYXN0RWxlbSgpXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFwcGx5Q2h1bmtTaXplQ2hhbmdlKCkge1xuICAgICAgICBjb25zdCBjaHVua1NpemUgPSB0aGlzLmlzUmVtb3RlID8gKHRoaXMuaWd4Rm9yT2YgPyB0aGlzLmlneEZvck9mLmxlbmd0aCA6IDApIDogdGhpcy5fY2FsY3VsYXRlQ2h1bmtTaXplKCk7XG4gICAgICAgIGlmIChjaHVua1NpemUgPiB0aGlzLnN0YXRlLmNodW5rU2l6ZSkge1xuICAgICAgICAgICAgY29uc3QgZGlmZiA9IGNodW5rU2l6ZSAtIHRoaXMuc3RhdGUuY2h1bmtTaXplO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZExhc3RFbGVtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY2h1bmtTaXplIDwgdGhpcy5zdGF0ZS5jaHVua1NpemUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0aGlzLnN0YXRlLmNodW5rU2l6ZSAtIGNodW5rU2l6ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVMYXN0RWxlbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF91cGRhdGVTY3JvbGxPZmZzZXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlneEZvclNjcm9sbE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUhTY3JvbGxPZmZzZXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVZTY3JvbGxPZmZzZXQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIF91cGRhdGVWU2Nyb2xsT2Zmc2V0KCkge1xuICAgICAgICBsZXQgc2Nyb2xsT2Zmc2V0ID0gMDtcbiAgICAgICAgY29uc3QgdlNjcm9sbCA9IHRoaXMudmguaW5zdGFuY2UuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICBzY3JvbGxPZmZzZXQgPSB2U2Nyb2xsICYmIHBhcnNlSW50KHZTY3JvbGwuc3R5bGUuaGVpZ2h0LCAxMCkgP1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvbiAtIHRoaXMuc2l6ZXNDYWNoZVt0aGlzLnN0YXRlLnN0YXJ0SW5kZXhdIDogMDtcbiAgICAgICAgdGhpcy5kYy5pbnN0YW5jZS5fdmlld0NvbnRhaW5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gLShzY3JvbGxPZmZzZXQpICsgJ3B4JztcbiAgICB9XG4gICAgcHJpdmF0ZSBfdXBkYXRlSFNjcm9sbE9mZnNldCgpIHtcbiAgICAgICAgbGV0IHNjcm9sbE9mZnNldCA9IDA7XG4gICAgICAgIHNjcm9sbE9mZnNldCA9IHRoaXMuaFNjcm9sbCAmJiBwYXJzZUludCh0aGlzLmhTY3JvbGwuY2hpbGRyZW5bMF0uc3R5bGUud2lkdGgsIDEwKSA/XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uIC0gdGhpcy5zaXplc0NhY2hlW3RoaXMuc3RhdGUuc3RhcnRJbmRleF0gOiAwO1xuICAgICAgICB0aGlzLmRjLmluc3RhbmNlLl92aWV3Q29udGFpbmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gLXNjcm9sbE9mZnNldCArICdweCc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0SXRlbVNpemUoaXRlbSwgZGltZW5zaW9uOiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBkaW0gPSBpdGVtW2RpbWVuc2lvbl07XG4gICAgICAgIHJldHVybiB0eXBlb2YgZGltID09PSAnbnVtYmVyJyA/IGRpbSA6IHBhcnNlSW50KHRoaXMuaWd4Rm9ySXRlbVNpemUsIDEwKSB8fCAwO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGVOYW1lRm9yRGVidWdnaW5nKHR5cGU6IGFueSk6IHN0cmluZyB7XG4gICAgY29uc3QgbmFtZSA9ICduYW1lJztcbiAgICByZXR1cm4gdHlwZVtuYW1lXSB8fCB0eXBlb2YgdHlwZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRm9yT2ZTdGF0ZSB7XG4gICAgc3RhcnRJbmRleD86IG51bWJlcjtcbiAgICBjaHVua1NpemU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZvck9mRGF0YUNoYW5naW5nRXZlbnRBcmdzIHtcbiAgICBjb250YWluZXJTaXplOiBudW1iZXI7XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneEdyaWRGb3JdW2lneEdyaWRGb3JPZl0nXG59KVxuZXhwb3J0IGNsYXNzIElneEdyaWRGb3JPZkRpcmVjdGl2ZTxUPiBleHRlbmRzIElneEZvck9mRGlyZWN0aXZlPFQ+IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIERvQ2hlY2sge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBfdGVtcGxhdGU6IFRlbXBsYXRlUmVmPE5nRm9yT2ZDb250ZXh0PFQ+PixcbiAgICAgICAgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcbiAgICAgICAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgX3pvbmU6IE5nWm9uZSxcbiAgICAgICAgcHJvdGVjdGVkIHN5bmNTZXJ2aWNlOiBJZ3hGb3JPZlN5bmNTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKF92aWV3Q29udGFpbmVyLCBfdGVtcGxhdGUsIF9kaWZmZXJzLCByZXNvbHZlciwgY2RyLCBfem9uZSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgaWd4R3JpZEZvck9mKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaWd4Rm9yT2YgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgaWd4R3JpZEZvck9mKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZ3hGb3JPZjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqIEFuIGV2ZW50IHRoYXQgaXMgZW1pdHRlZCBhZnRlciBkYXRhIGhhcyBiZWVuIGNoYW5nZWQgYnV0IGJlZm9yZSB0aGUgdmlldyBpcyByZWZyZXNoZWRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25EYXRhQ2hhbmdpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPElGb3JPZkRhdGFDaGFuZ2luZ0V2ZW50QXJncz4oKTtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnN5bmNTZXJ2aWNlLnNldE1hc3Rlcih0aGlzKTtcbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVTY3JvbGxFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgZm9yT2YgPSAnaWd4R3JpZEZvck9mJztcbiAgICAgICAgdGhpcy5zeW5jU2VydmljZS5zZXRNYXN0ZXIodGhpcyk7XG4gICAgICAgIGlmIChmb3JPZiBpbiBjaGFuZ2VzKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNoYW5nZXNbZm9yT2ZdLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fZGlmZmVyICYmIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGlmZmVyID0gdGhpcy5fZGlmZmVycy5maW5kKHZhbHVlKS5jcmVhdGUodGhpcy5pZ3hGb3JUcmFja0J5KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBDYW5ub3QgZmluZCBhIGRpZmZlciBzdXBwb3J0aW5nIG9iamVjdCBcIiR7dmFsdWV9XCIgb2YgdHlwZSBcIiR7Z2V0VHlwZU5hbWVGb3JEZWJ1Z2dpbmcodmFsdWUpfVwiLlxuICAgICAgICAgICAgICAgICAgICAgTmdGb3Igb25seSBzdXBwb3J0cyBiaW5kaW5nIHRvIEl0ZXJhYmxlcyBzdWNoIGFzIEFycmF5cy5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVmYXVsdEl0ZW1TaXplID0gJ2lneEZvckl0ZW1TaXplJztcbiAgICAgICAgaWYgKGRlZmF1bHRJdGVtU2l6ZSBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzW2RlZmF1bHRJdGVtU2l6ZV0uZmlyc3RDaGFuZ2UgJiYgdGhpcy5pZ3hGb3JTY3JvbGxPcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgLy8gaGFuZGxlIGRlZmF1bHQgaXRlbSBzaXplIGNoYW5nZWQuXG4gICAgICAgICAgICB0aGlzLmluaXRTaXplc0NhY2hlKHRoaXMuaWd4Rm9yT2YpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclNpemUgPSAnaWd4Rm9yQ29udGFpbmVyU2l6ZSc7XG4gICAgICAgIGlmIChjb250YWluZXJTaXplIGluIGNoYW5nZXMgJiYgIWNoYW5nZXNbY29udGFpbmVyU2l6ZV0uZmlyc3RDaGFuZ2UgJiYgdGhpcy5pZ3hGb3JPZikge1xuICAgICAgICAgICAgdGhpcy5fcmVjYWxjT25Db250YWluZXJDaGFuZ2UoY2hhbmdlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGdldCBzaXplc0NhY2hlKCk6IG51bWJlcltdIHtcbiAgICAgICAgaWYgKHRoaXMuc3luY1NlcnZpY2UuaXNNYXN0ZXIodGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplc0NhY2hlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN5bmNTZXJ2aWNlLnNpemVzQ2FjaGUodGhpcy5pZ3hGb3JTY3JvbGxPcmllbnRhdGlvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHNpemVzQ2FjaGUodmFsdWU6IG51bWJlcltdKSB7XG4gICAgICAgIHRoaXMuX3NpemVzQ2FjaGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGl0ZW1zRGltZW5zaW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZ3hGb3JTY3JvbGxPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gdGhpcy5pZ3hGb3JTaXplUHJvcE5hbWUgOiAnaGVpZ2h0JztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0SXRlbVNpemUoaXRlbSkge1xuICAgICAgICBsZXQgc2l6ZSA9IDA7XG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/XG4gICAgICAgICAgICB0aGlzLmlneEZvclNpemVQcm9wTmFtZSA6ICdoZWlnaHQnO1xuICAgICAgICBpZiAoZGltZW5zaW9uID09PSAnaGVpZ2h0Jykge1xuICAgICAgICAgICAgc2l6ZSA9IHBhcnNlSW50KHRoaXMuaWd4Rm9ySXRlbVNpemUsIDEwKSB8fCAwO1xuICAgICAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS5zdW1tYXJpZXMpIHtcbiAgICAgICAgICAgICAgICBzaXplID0gaXRlbS5tYXg7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0gJiYgaXRlbS5ncm91cHMgJiYgaXRlbS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBzaXplID0gaXRlbS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaXplID0gcGFyc2VJbnQoaXRlbVtkaW1lbnNpb25dLCAxMCkgfHwgMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2l6ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdFNpemVzQ2FjaGUoaXRlbXM6IGFueVtdKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKCF0aGlzLnN5bmNTZXJ2aWNlLmlzTWFzdGVyKHRoaXMpKSB7XG4gICAgICAgICAgICBjb25zdCBtYXN0ZXJTaXplc0NhY2hlID0gdGhpcy5zeW5jU2VydmljZS5zaXplc0NhY2hlKHRoaXMuaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIG1hc3RlclNpemVzQ2FjaGVbbWFzdGVyU2l6ZXNDYWNoZS5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG90YWxTaXplID0gMDtcbiAgICAgICAgbGV0IHNpemUgPSAwO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHRoaXMuc2l6ZXNDYWNoZSA9IFtdO1xuICAgICAgICB0aGlzLmhlaWdodENhY2hlID0gW107XG4gICAgICAgIHRoaXMuc2l6ZXNDYWNoZS5wdXNoKDApO1xuICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMuaXNSZW1vdGUgPyB0aGlzLnRvdGFsSXRlbUNvdW50IDogaXRlbXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGk7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBzaXplID0gdGhpcy5nZXRJdGVtU2l6ZShpdGVtc1tpXSk7XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc0RpbWVuc2lvbiA9PT0gJ2hlaWdodCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodENhY2hlLnB1c2goc2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b3RhbFNpemUgKz0gc2l6ZTtcbiAgICAgICAgICAgIHRoaXMuc2l6ZXNDYWNoZS5wdXNoKHRvdGFsU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvdGFsU2l6ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3VwZGF0ZVNpemVDYWNoZShjaGFuZ2VzOiBJdGVyYWJsZUNoYW5nZXM8VD4gPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLmlneEZvclNjcm9sbE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFNpemVzQ2FjaGUodGhpcy5pZ3hGb3JPZik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvbGRIZWlnaHQgPSB0aGlzLmhlaWdodENhY2hlLmxlbmd0aCA+IDAgPyB0aGlzLmhlaWdodENhY2hlLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYyArIHZhbCkgOiAwO1xuICAgICAgICBsZXQgbmV3SGVpZ2h0ID0gb2xkSGVpZ2h0O1xuICAgICAgICBpZiAoY2hhbmdlcyAmJiAhdGhpcy5pc1JlbW90ZSkge1xuICAgICAgICAgICAgbmV3SGVpZ2h0ID0gdGhpcy5oYW5kbGVDYWNoZUNoYW5nZXMoY2hhbmdlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdIZWlnaHQgPSB0aGlzLmluaXRTaXplc0NhY2hlKHRoaXMuaWd4Rm9yT2YpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGlmZiA9IG9sZEhlaWdodCAtIG5ld0hlaWdodDtcblxuICAgICAgICAvLyBpZiBkYXRhIGhhcyBiZWVuIGNoYW5nZWQgd2hpbGUgY29udGFpbmVyIGlzIHNjcm9sbGVkXG4gICAgICAgIC8vIHNob3VsZCB1cGRhdGUgc2Nyb2xsIHRvcC9sZWZ0IGFjY29yZGluZyB0byBjaGFuZ2Ugc28gdGhhdCBzYW1lIHN0YXJ0SW5kZXggaXMgaW4gdmlld1xuICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZikgPiAwKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVjYWxjVXBkYXRlU2l6ZXMoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBwYXJzZUludCh0aGlzLmRjLmluc3RhbmNlLl92aWV3Q29udGFpbmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS50b3AsIDEwKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxQb3NpdGlvbiAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uID0gdGhpcy5zaXplc0NhY2hlW3RoaXMuc3RhdGUuc3RhcnRJbmRleF0gLSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlU2Nyb2xsT2Zmc2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaGFuZGxlQ2FjaGVDaGFuZ2VzKGNoYW5nZXM6IEl0ZXJhYmxlQ2hhbmdlczxUPikge1xuICAgICAgICBjb25zdCBpZGVudGl0eUNoYW5nZXMgPSBbXTtcbiAgICAgICAgY29uc3QgbmV3SGVpZ2h0Q2FjaGUgPSBbXTtcbiAgICAgICAgY29uc3QgbmV3U2l6ZXNDYWNoZSA9IFtdO1xuICAgICAgICBuZXdTaXplc0NhY2hlLnB1c2goMCk7XG4gICAgICAgIGxldCBuZXdIZWlnaHQgPSAwO1xuXG4gICAgICAgIC8vIFdoZW4gdGhlcmUgYXJlIG1vcmUgdGhhbiBvbmUgcmVtb3ZlZCBpdGVtcyB0aGUgY2hhbmdlcyBhcmUgbm90IHJlbGlhYmxlIHNvIHRob3NlIHdpdGggaWRlbnRpdHkgY2hhbmdlIHNob3VsZCBiZSBkZWZhdWx0IHNpemUuXG4gICAgICAgIGxldCBudW1SZW1vdmVkSXRlbXMgPSAwO1xuICAgICAgICBjaGFuZ2VzLmZvckVhY2hSZW1vdmVkSXRlbSgoKSA9PiBudW1SZW1vdmVkSXRlbXMrKyk7XG5cbiAgICAgICAgLy8gR2V0IHRoZSBpZGVudGl0eSBjaGFuZ2VzIHRvIGRldGVybWluZSBsYXRlciBpZiB0aG9zZSB0aGF0IGhhdmUgY2hhbmdlZCB0aGVpciBpbmRleGVzIHNob3VsZCBiZSBhc3NpZ25lZCBkZWZhdWx0IGl0ZW0gc2l6ZS5cbiAgICAgICAgY2hhbmdlcy5mb3JFYWNoSWRlbnRpdHlDaGFuZ2UoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmN1cnJlbnRJbmRleCAhPT0gaXRlbS5wcmV2aW91c0luZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gRmlsdGVyIG91dCBvbmVzIHRoYXQgaGF2ZSBub3QgY2hhbmdlZCB0aGVpciBpbmRleC5cbiAgICAgICAgICAgICAgICBpZGVudGl0eUNoYW5nZXNbaXRlbS5jdXJyZW50SW5kZXhdID0gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUHJvY2Vzc2luZyBlYWNoIGl0ZW0gdGhhdCBpcyBwYXNzZWQgdG8gdGhlIGlneEZvck9mIHNvIGZhciBzZWVtIHRvIGJlIG1vc3QgcmVsaWFibGUuIFdlIHBhcnNlIHRoZSB1cGRhdGVkIGxpc3Qgb2YgaXRlbXMuXG4gICAgICAgIGNoYW5nZXMuZm9yRWFjaEl0ZW0oKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnByZXZpb3VzSW5kZXggIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAobnVtUmVtb3ZlZEl0ZW1zIDwgMiB8fCAhaWRlbnRpdHlDaGFuZ2VzLmxlbmd0aCB8fCBpZGVudGl0eUNoYW5nZXNbaXRlbS5jdXJyZW50SW5kZXhdKSkge1xuICAgICAgICAgICAgICAgIC8vIFJldXNlIGNhY2hlIG9uIHRob3NlIHdobyBoYXZlIHByZXZpb3VzSW5kZXguXG4gICAgICAgICAgICAgICAgLy8gV2hlbiB0aGVyZSBhcmUgbW9yZSB0aGFuIG9uZSByZW1vdmVkIGl0ZW1zIGN1cnJlbnRseSB0aGUgY2hhbmdlcyBhcmUgbm90IHJlYWRhYmxlIHNvIG9uZXMgd2l0aCBpZGVudGl0eSBjaGFuZ2VcbiAgICAgICAgICAgICAgICAvLyBzaG91bGQgYmUgcmFjYWxjdWxhdGVkLlxuICAgICAgICAgICAgICAgIG5ld0hlaWdodENhY2hlW2l0ZW0uY3VycmVudEluZGV4XSA9IHRoaXMuaGVpZ2h0Q2FjaGVbaXRlbS5wcmV2aW91c0luZGV4XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIGRlZmF1bHQgaXRlbSBzaXplLlxuICAgICAgICAgICAgICAgIG5ld0hlaWdodENhY2hlW2l0ZW0uY3VycmVudEluZGV4XSA9IHRoaXMuZ2V0SXRlbVNpemUoaXRlbS5pdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1NpemVzQ2FjaGVbaXRlbS5jdXJyZW50SW5kZXggKyAxXSA9IG5ld1NpemVzQ2FjaGVbaXRlbS5jdXJyZW50SW5kZXhdICsgbmV3SGVpZ2h0Q2FjaGVbaXRlbS5jdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgbmV3SGVpZ2h0ICs9IG5ld0hlaWdodENhY2hlW2l0ZW0uY3VycmVudEluZGV4XTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaGVpZ2h0Q2FjaGUgPSBuZXdIZWlnaHRDYWNoZTtcbiAgICAgICAgdGhpcy5zaXplc0NhY2hlID0gbmV3U2l6ZXNDYWNoZTtcbiAgICAgICAgcmV0dXJuIG5ld0hlaWdodDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGFzc3VtZU1hc3RlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2l6ZXNDYWNoZSA9IHRoaXMuc3luY1NlcnZpY2Uuc2l6ZXNDYWNoZSh0aGlzLmlneEZvclNjcm9sbE9yaWVudGF0aW9uKTtcbiAgICAgICAgdGhpcy5zeW5jU2VydmljZS5zZXRNYXN0ZXIodGhpcywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgbmdEb0NoZWNrKCkge1xuICAgICAgICBpZiAodGhpcy5fZGlmZmVyKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VzID0gdGhpcy5fZGlmZmVyLmRpZmYodGhpcy5pZ3hGb3JPZik7XG4gICAgICAgICAgICBpZiAoY2hhbmdlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3M6IElGb3JPZkRhdGFDaGFuZ2luZ0V2ZW50QXJncyA9IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyU2l6ZTogdGhpcy5pZ3hGb3JDb250YWluZXJTaXplXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRGF0YUNoYW5naW5nLmVtaXQoYXJncyk7XG4gICAgICAgICAgICAgICAgLy8gIHJlLWluaXQgY2FjaGUuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlneEZvck9mKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyogd2UgbmVlZCB0byByZXNldCB0aGUgbWFzdGVyIGRpciBpZiBhbGwgcm93cyBhcmUgcmVtb3ZlZFxuICAgICAgICAgICAgICAgIChlLmcuIGJlY2F1c2Ugb2YgZmlsdGVyaW5nKTsgaWYgYWxsIGNvbHVtbnMgYXJlIGhpZGRlbiwgcm93cyBhcmVcbiAgICAgICAgICAgICAgICBzdGlsbCByZW5kZXJlZCBlbXB0eSwgc28gd2Ugc2hvdWxkIG5vdCByZXNldCBtYXN0ZXIgKi9cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaWd4Rm9yT2YubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zeW5jU2VydmljZS5yZXNldE1hc3RlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnN5bmNTZXJ2aWNlLnNldE1hc3Rlcih0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlneEZvckNvbnRhaW5lclNpemUgPSBhcmdzLmNvbnRhaW5lclNpemU7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlU2l6ZUNhY2hlKGNoYW5nZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FwcGx5Q2hhbmdlcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVNjcm9sbE9mZnNldCgpO1xuICAgICAgICAgICAgICAgIHRoaXMub25EYXRhQ2hhbmdlZC5lbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNjcm9sbChldmVudCkge1xuICAgICAgICBpZiAoIXBhcnNlSW50KHRoaXMudmguaW5zdGFuY2UuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCwgMTApKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb250YWluZXJTaXplID0gcGFyc2VJbnQodGhpcy5pZ3hGb3JDb250YWluZXJTaXplLCAxMCk7XG4gICAgICAgIGNvbnN0IG1heFJlYWxTY3JvbGxUb3AgPSBldmVudC50YXJnZXQuY2hpbGRyZW5bMF0uc2Nyb2xsSGVpZ2h0IC0gY29udGFpbmVyU2l6ZTtcbiAgICAgICAgY29uc3QgcmVhbFBlcmNlbnRTY3JvbGxlZCA9IGV2ZW50LnRhcmdldC5zY3JvbGxUb3AgLyBtYXhSZWFsU2Nyb2xsVG9wO1xuICAgICAgICBpZiAoIXRoaXMuX2JTY3JvbGxJbnRlcm5hbCkge1xuICAgICAgICAgICAgY29uc3QgbWF4VmlydFNjcm9sbFRvcCA9IHRoaXMuX3ZpcnRIZWlnaHQgLSBjb250YWluZXJTaXplO1xuICAgICAgICAgICAgdGhpcy5fdmlydFNjcm9sbFRvcCA9IHJlYWxQZXJjZW50U2Nyb2xsZWQgKiBtYXhWaXJ0U2Nyb2xsVG9wO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYlNjcm9sbEludGVybmFsID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPSB0aGlzLl92aXJ0U2Nyb2xsVG9wO1xuICAgICAgICBjb25zdCBzY3JvbGxPZmZzZXQgPSB0aGlzLmZpeGVkVXBkYXRlQWxsRWxlbWVudHModGhpcy5fdmlydFNjcm9sbFRvcCk7XG5cbiAgICAgICAgdGhpcy5kYy5pbnN0YW5jZS5fdmlld0NvbnRhaW5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gLShzY3JvbGxPZmZzZXQpICsgJ3B4JztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVjYWxjVXBkYXRlU2l6ZXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25IU2Nyb2xsKHNjcm9sbEFtb3VudCkge1xuICAgICAgICAvKiBpbiBjZXJ0YWluIHNpdHVhdGlvbnMgdGhpcyBtYXkgYmUgY2FsbGVkIHdoZW4gbm8gc2Nyb2xsYmFyIGlzIHZpc2libGUgKi9cbiAgICAgICAgaWYgKCF0aGlzLmhTY3JvbGwgfHwgIXBhcnNlSW50KHRoaXMuaFNjcm9sbC5jaGlsZHJlblswXS5zdHlsZS53aWR0aCwgMTApKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxBbW91bnQ7XG4gICAgICAgIC8vIFVwZGF0aW5nIGhvcml6b250YWwgY2h1bmtzXG4gICAgICAgIGNvbnN0IHNjcm9sbE9mZnNldCA9IHRoaXMuZml4ZWRVcGRhdGVBbGxFbGVtZW50cyhzY3JvbGxBbW91bnQpO1xuICAgICAgICB0aGlzLmRjLmluc3RhbmNlLl92aWV3Q29udGFpbmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gLXNjcm9sbE9mZnNldCArICdweCc7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZExhc3RFbGVtKCkge1xuICAgICAgICBsZXQgZWxlbUluZGV4ID0gdGhpcy5zdGF0ZS5zdGFydEluZGV4ICsgdGhpcy5zdGF0ZS5jaHVua1NpemU7XG4gICAgICAgIGlmICghdGhpcy5pc1JlbW90ZSAmJiAhdGhpcy5pZ3hGb3JPZikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsZW1JbmRleCA+PSB0aGlzLmlneEZvck9mLmxlbmd0aCkge1xuICAgICAgICAgICAgZWxlbUluZGV4ID0gdGhpcy5pZ3hGb3JPZi5sZW5ndGggLSB0aGlzLnN0YXRlLmNodW5rU2l6ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuaWd4Rm9yT2ZbZWxlbUluZGV4XTtcbiAgICAgICAgY29uc3QgZW1iZWRkZWRWaWV3ID0gdGhpcy5kYy5pbnN0YW5jZS5fdmNyLmNyZWF0ZUVtYmVkZGVkVmlldyhcbiAgICAgICAgICAgIHRoaXMuX3RlbXBsYXRlLFxuICAgICAgICAgICAgbmV3IElneEZvck9mQ29udGV4dDxUPihpbnB1dCwgdGhpcy5nZXRDb250ZXh0SW5kZXgoaW5wdXQpLCB0aGlzLmlneEZvck9mLmxlbmd0aClcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLl9lbWJlZGRlZFZpZXdzLnB1c2goZW1iZWRkZWRWaWV3KTtcbiAgICAgICAgdGhpcy5zdGF0ZS5jaHVua1NpemUrKztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3VwZGF0ZVZpZXdzKHByZXZDaHVua1NpemUpIHtcbiAgICAgICAgaWYgKHRoaXMuaWd4Rm9yT2YgJiYgdGhpcy5pZ3hGb3JPZi5sZW5ndGggJiYgdGhpcy5kYykge1xuICAgICAgICAgICAgY29uc3QgZW1iZWRkZWRWaWV3Q29weSA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMuX2VtYmVkZGVkVmlld3MpO1xuICAgICAgICAgICAgbGV0IHN0YXJ0SW5kZXg7XG4gICAgICAgICAgICBsZXQgZW5kSW5kZXg7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1JlbW90ZSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGVuZEluZGV4ID0gdGhpcy5pZ3hGb3JPZi5sZW5ndGg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXggPSB0aGlzLmdldEluZGV4QXQoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZXNDYWNoZSxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0SW5kZXggKyB0aGlzLnN0YXRlLmNodW5rU2l6ZSA+IHRoaXMuaWd4Rm9yT2YubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXggPSB0aGlzLmlneEZvck9mLmxlbmd0aCAtIHRoaXMuc3RhdGUuY2h1bmtTaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0SW5kZXggPSBzdGFydEluZGV4O1xuICAgICAgICAgICAgICAgIGVuZEluZGV4ID0gdGhpcy5zdGF0ZS5jaHVua1NpemUgKyB0aGlzLnN0YXRlLnN0YXJ0SW5kZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpIDwgZW5kSW5kZXggJiYgdGhpcy5pZ3hGb3JPZltpXSAhPT0gdW5kZWZpbmVkOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuaWd4Rm9yT2ZbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgZW1iVmlldyA9IGVtYmVkZGVkVmlld0NvcHkuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbnR4ID0gKGVtYlZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLmNvbnRleHQ7XG4gICAgICAgICAgICAgICAgY250eC4kaW1wbGljaXQgPSBpbnB1dDtcbiAgICAgICAgICAgICAgICBjbnR4LmluZGV4ID0gdGhpcy5nZXRDb250ZXh0SW5kZXgoaW5wdXQpO1xuICAgICAgICAgICAgICAgIGNudHguY291bnQgPSB0aGlzLmlneEZvck9mLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcmV2Q2h1bmtTaXplICE9PSB0aGlzLnN0YXRlLmNodW5rU2l6ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25DaHVua0xvYWQuZW1pdCh0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlneEZvclNjcm9sbE9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNhbGNVcGRhdGVTaXplcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBfYXBwbHlDaGFuZ2VzKCkge1xuICAgICAgICBjb25zdCBwcmV2Q2h1bmtTaXplID0gdGhpcy5zdGF0ZS5jaHVua1NpemU7XG4gICAgICAgIHRoaXMuYXBwbHlDaHVua1NpemVDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5fcmVjYWxjU2Nyb2xsQmFyU2l6ZSgpO1xuICAgICAgICB0aGlzLl91cGRhdGVWaWV3cyhwcmV2Q2h1bmtTaXplKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9jYWxjTWF4Q2h1bmtTaXplKCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLnN5bmNTZXJ2aWNlLmlzTWFzdGVyKHRoaXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VwZXIuX2NhbGNNYXhDaHVua1NpemUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zeW5jU2VydmljZS5jaHVua1NpemUodGhpcy5pZ3hGb3JTY3JvbGxPcmllbnRhdGlvbik7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtJZ3hGb3JPZkRpcmVjdGl2ZSwgSWd4R3JpZEZvck9mRGlyZWN0aXZlLCBEaXNwbGF5Q29udGFpbmVyQ29tcG9uZW50LCBWaXJ0dWFsSGVscGVyQ29tcG9uZW50LCBIVmlydHVhbEhlbHBlckNvbXBvbmVudF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbRGlzcGxheUNvbnRhaW5lckNvbXBvbmVudCwgVmlydHVhbEhlbHBlckNvbXBvbmVudCwgSFZpcnR1YWxIZWxwZXJDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtJZ3hGb3JPZkRpcmVjdGl2ZSwgSWd4R3JpZEZvck9mRGlyZWN0aXZlXSxcbiAgICBpbXBvcnRzOiBbSWd4U2Nyb2xsSW5lcnRpYU1vZHVsZSwgQ29tbW9uTW9kdWxlXVxufSlcblxuZXhwb3J0IGNsYXNzIElneEZvck9mTW9kdWxlIHtcbn1cbiJdfQ==