/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
 * \@publicApi
 * @template T
 */
IgxForOfContext = /** @class */ (function () {
    function IgxForOfContext($implicit, index, count) {
        this.$implicit = $implicit;
        this.index = index;
        this.count = count;
    }
    Object.defineProperty(IgxForOfContext.prototype, "first", {
        /**
         * A function that returns whether the element is the first or not
         */
        get: /**
         * A function that returns whether the element is the first or not
         * @return {?}
         */
        function () { return this.index === 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxForOfContext.prototype, "last", {
        /**
         * A function that returns whether the element is the last or not
         */
        get: /**
         * A function that returns whether the element is the last or not
         * @return {?}
         */
        function () { return this.index === this.count - 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxForOfContext.prototype, "even", {
        /**
         * A function that returns whether the element is even or not
         */
        get: /**
         * A function that returns whether the element is even or not
         * @return {?}
         */
        function () { return this.index % 2 === 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxForOfContext.prototype, "odd", {
        /**
         * A function that returns whether the element is odd or not
         */
        get: /**
         * A function that returns whether the element is odd or not
         * @return {?}
         */
        function () { return !this.even; },
        enumerable: true,
        configurable: true
    });
    return IgxForOfContext;
}());
/**
 * \@publicApi
 * @template T
 */
export { IgxForOfContext };
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
var IgxForOfDirective = /** @class */ (function () {
    function IgxForOfDirective(_viewContainer, _template, _differs, resolver, cdr, _zone) {
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
    Object.defineProperty(IgxForOfDirective.prototype, "sizesCache", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this._sizesCache;
        },
        set: /**
         * @protected
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._sizesCache = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxForOfDirective.prototype, "_isScrolledToBottom", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.getVerticalScroll()) {
                return true;
            }
            /** @type {?} */
            var scrollHeight = this.getVerticalScroll().scrollHeight;
            // Use === and not >= because `scrollTop + container size` can't be bigger than `scrollHeight`, unless something isn't updated.
            // Also use Math.round because Chrome has some inconsistencies and `scrollTop + container` can be float when zooming the page.
            return Math.round(this.scrollPosition + this.igxForContainerSize) === scrollHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxForOfDirective.prototype, "_isAtBottomIndex", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.igxForOf && this.state.startIndex + this.state.chunkSize > this.igxForOf.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxForOfDirective.prototype, "isRemote", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @protected
         * @return {?}
         */
        function () {
            return this.totalItemCount !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxForOfDirective.prototype, "scrollPosition", {
        /**
         * @hidden
         * @internal
         */
        get: /**
         * @hidden
         * \@internal
         * @return {?}
         */
        function () {
            return this._scrollPosition;
        },
        /**
         * @hidden
         * @internal
         */
        set: /**
         * @hidden
         * \@internal
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._scrollPosition = val;
            if (this.igxForScrollOrientation === 'horizontal' && this.hScroll) {
                this.hScroll.scrollLeft = val;
            }
            else if (this.vh) {
                this.vh.instance.elementRef.nativeElement.scrollTop = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    IgxForOfDirective.prototype.removeScrollEventListeners = /**
     * @hidden
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.igxForScrollOrientation === 'horizontal') {
            this._zone.runOutsideAngular(function () {
                return _this.getHorizontalScroll().removeEventListener('scroll', _this.func);
            });
        }
        else {
            /** @type {?} */
            var vertical_1 = this.getVerticalScroll();
            if (vertical_1) {
                this._zone.runOutsideAngular(function () {
                    return vertical_1.removeEventListener('scroll', _this.verticalScrollHandler);
                });
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IgxForOfDirective.prototype.verticalScrollHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onScroll(event);
    };
    /**
     * @return {?}
     */
    IgxForOfDirective.prototype.isScrollable = /**
     * @return {?}
     */
    function () {
        return this.vh.instance.height > parseInt(this.igxForContainerSize, 10);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxForOfDirective.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var totalSize = 0;
        /** @type {?} */
        var vc = this.igxForScrollContainer ? this.igxForScrollContainer._viewContainer : this._viewContainer;
        this.igxForSizePropName = this.igxForSizePropName || 'width';
        /** @type {?} */
        var dcFactory = this.resolver.resolveComponentFactory(DisplayContainerComponent);
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
            for (var i = this.state.startIndex; i < this.state.startIndex + this.state.chunkSize &&
                this.igxForOf[i] !== undefined; i++) {
                /** @type {?} */
                var input = this.igxForOf[i];
                /** @type {?} */
                var embeddedView = this.dc.instance._vcr.createEmbeddedView(this._template, new IgxForOfContext(input, this.getContextIndex(input), this.igxForOf.length));
                this._embeddedViews.push(embeddedView);
            }
        }
        if (this.igxForScrollOrientation === 'vertical') {
            this.dc.instance._viewContainer.element.nativeElement.style.top = '0px';
            /** @type {?} */
            var factory = this.resolver.resolveComponentFactory(VirtualHelperComponent);
            this.vh = vc.createComponent(factory);
            this._maxHeight = this._calcMaxBrowserHeight();
            this.vh.instance.height = this.igxForOf ? this._calcHeight() : 0;
            this._zone.runOutsideAngular(function () {
                _this.verticalScrollHandler = _this.verticalScrollHandler.bind(_this);
                _this.vh.instance.elementRef.nativeElement.addEventListener('scroll', _this.verticalScrollHandler);
                _this.dc.instance.scrollContainer = _this.vh.instance.elementRef.nativeElement;
            });
        }
        if (this.igxForScrollOrientation === 'horizontal') {
            this.func = function (evt) { _this.onHScroll(evt); };
            this.hScroll = this.getElement(vc, 'igx-horizontal-virtual-helper');
            if (!this.hScroll) {
                /** @type {?} */
                var hvFactory = this.resolver.resolveComponentFactory(HVirtualHelperComponent);
                this.hvh = vc.createComponent(hvFactory);
                this.hvh.instance.width = totalSize;
                this.hScroll = this.hvh.instance.elementRef.nativeElement;
                this._zone.runOutsideAngular(function () {
                    _this.hvh.instance.elementRef.nativeElement.addEventListener('scroll', _this.func);
                    _this.dc.instance.scrollContainer = _this.hScroll;
                });
            }
            else {
                this._zone.runOutsideAngular(function () {
                    _this.hScroll.addEventListener('scroll', _this.func);
                    _this.dc.instance.scrollContainer = _this.hScroll;
                });
            }
            this._updateHScrollOffset();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxForOfDirective.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.removeScrollEventListeners();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    IgxForOfDirective.prototype.ngOnChanges = /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var forOf = 'igxForOf';
        if (forOf in changes) {
            /** @type {?} */
            var value = changes[forOf].currentValue;
            if (!this._differ && value) {
                try {
                    this._differ = this._differs.find(value).create(this.igxForTrackBy);
                }
                catch (e) {
                    throw new Error("Cannot find a differ supporting object \"" + value + "\" of type \"" + getTypeNameForDebugging(value) + "\".\n                     NgFor only supports binding to Iterables such as Arrays.");
                }
            }
        }
        /** @type {?} */
        var defaultItemSize = 'igxForItemSize';
        if (defaultItemSize in changes && !changes[defaultItemSize].firstChange && this.igxForScrollOrientation === 'vertical') {
            // handle default item size changed.
            this.initSizesCache(this.igxForOf);
            this._applyChanges();
        }
        /** @type {?} */
        var containerSize = 'igxForContainerSize';
        if (containerSize in changes && !changes[containerSize].firstChange && this.igxForOf) {
            this._recalcOnContainerChange(changes);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxForOfDirective.prototype.ngDoCheck = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._differ) {
            /** @type {?} */
            var changes = this._differ.diff(this.igxForOf);
            if (changes) {
                //  re-init cache.
                if (!this.igxForOf) {
                    return;
                }
                this._updateSizeCache();
                this._zone.run(function () {
                    _this._applyChanges();
                    _this.cdr.markForCheck();
                    _this._updateScrollOffset();
                    _this.onDataChanged.emit();
                });
            }
        }
    };
    /**
     * Shifts the scroll thumb position.
     * ```typescript
     * this.parentVirtDir.addScrollTop(5);
     * ```
     * @param addTop negative value to scroll up and positive to scroll down;
     */
    /**
     * Shifts the scroll thumb position.
     * ```typescript
     * this.parentVirtDir.addScrollTop(5);
     * ```
     * @param {?} addTop negative value to scroll up and positive to scroll down;
     * @return {?}
     */
    IgxForOfDirective.prototype.addScrollTop = /**
     * Shifts the scroll thumb position.
     * ```typescript
     * this.parentVirtDir.addScrollTop(5);
     * ```
     * @param {?} addTop negative value to scroll up and positive to scroll down;
     * @return {?}
     */
    function (addTop) {
        if (addTop === 0 && this.igxForScrollOrientation === 'horizontal') {
            return false;
        }
        /** @type {?} */
        var originalVirtScrollTop = this._virtScrollTop;
        /** @type {?} */
        var containerSize = parseInt(this.igxForContainerSize, 10);
        /** @type {?} */
        var maxVirtScrollTop = this._virtHeight - containerSize;
        this._bScrollInternal = true;
        this._virtScrollTop += addTop;
        this._virtScrollTop = this._virtScrollTop > 0 ?
            (this._virtScrollTop < maxVirtScrollTop ? this._virtScrollTop : maxVirtScrollTop) :
            0;
        this.scrollPosition += addTop / this._virtHeightRatio;
        if (Math.abs(addTop / this._virtHeightRatio) < 1) {
            // Actual scroll delta that was added is smaller than 1 and onScroll handler doesn't trigger when scrolling < 1px
            /** @type {?} */
            var scrollOffset = this.fixedUpdateAllElements(this._virtScrollTop);
            // scrollOffset = scrollOffset !== parseInt(this.igxForItemSize, 10) ? scrollOffset : 0;
            this.dc.instance._viewContainer.element.nativeElement.style.top = -(scrollOffset) + 'px';
        }
        /** @type {?} */
        var maxRealScrollTop = this.vh.instance.elementRef.nativeElement.scrollHeight - containerSize;
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
    };
    /**
     * Scrolls to the specified index.
     * ```typescript
     * this.parentVirtDir.scrollTo(5);
     * ```
     * @param index
     */
    /**
     * Scrolls to the specified index.
     * ```typescript
     * this.parentVirtDir.scrollTo(5);
     * ```
     * @param {?} index
     * @return {?}
     */
    IgxForOfDirective.prototype.scrollTo = /**
     * Scrolls to the specified index.
     * ```typescript
     * this.parentVirtDir.scrollTo(5);
     * ```
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (index < 0 || index > (this.isRemote ? this.totalItemCount : this.igxForOf.length) - 1) {
            return;
        }
        /** @type {?} */
        var containerSize = parseInt(this.igxForContainerSize, 10);
        /** @type {?} */
        var isPrevItem = index < this.state.startIndex || this.scrollPosition > this.sizesCache[index];
        /** @type {?} */
        var nextScroll = isPrevItem ? this.sizesCache[index] : this.sizesCache[index + 1] - containerSize;
        if (nextScroll < 0) {
            return;
        }
        if (this.igxForScrollOrientation === 'horizontal') {
            this.scrollPosition = nextScroll;
        }
        else {
            /** @type {?} */
            var maxVirtScrollTop = this._virtHeight - containerSize;
            if (nextScroll > maxVirtScrollTop) {
                nextScroll = maxVirtScrollTop;
            }
            this._bScrollInternal = true;
            this._virtScrollTop = nextScroll;
            this.scrollPosition = this._virtScrollTop / this._virtHeightRatio;
            this._adjustToIndex = !isPrevItem ? index : null;
        }
    };
    /**
     * Scrolls by one item into the appropriate next direction.
     * For "horizontal" orientation that will be the right column and for "vertical" that is the lower row.
     * ```typescript
     * this.parentVirtDir.scrollNext();
     * ```
     */
    /**
     * Scrolls by one item into the appropriate next direction.
     * For "horizontal" orientation that will be the right column and for "vertical" that is the lower row.
     * ```typescript
     * this.parentVirtDir.scrollNext();
     * ```
     * @return {?}
     */
    IgxForOfDirective.prototype.scrollNext = /**
     * Scrolls by one item into the appropriate next direction.
     * For "horizontal" orientation that will be the right column and for "vertical" that is the lower row.
     * ```typescript
     * this.parentVirtDir.scrollNext();
     * ```
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scr = Math.ceil(this.scrollPosition);
        /** @type {?} */
        var endIndex = this.getIndexAt(scr + parseInt(this.igxForContainerSize, 10), this.sizesCache, 0);
        this.scrollTo(endIndex);
    };
    /**
     * Scrolls by one item into the appropriate previous direction.
     * For "horizontal" orientation that will be the left column and for "vertical" that is the upper row.
     * ```typescript
     * this.parentVirtDir.scrollPrev();
     * ```
     */
    /**
     * Scrolls by one item into the appropriate previous direction.
     * For "horizontal" orientation that will be the left column and for "vertical" that is the upper row.
     * ```typescript
     * this.parentVirtDir.scrollPrev();
     * ```
     * @return {?}
     */
    IgxForOfDirective.prototype.scrollPrev = /**
     * Scrolls by one item into the appropriate previous direction.
     * For "horizontal" orientation that will be the left column and for "vertical" that is the upper row.
     * ```typescript
     * this.parentVirtDir.scrollPrev();
     * ```
     * @return {?}
     */
    function () {
        this.scrollTo(this.state.startIndex - 1);
    };
    /**
     * Scrolls by one page into the appropriate next direction.
     * For "horizontal" orientation that will be one view to the right and for "vertical" that is one view to the bottom.
     * ```typescript
     * this.parentVirtDir.scrollNextPage();
     * ```
     */
    /**
     * Scrolls by one page into the appropriate next direction.
     * For "horizontal" orientation that will be one view to the right and for "vertical" that is one view to the bottom.
     * ```typescript
     * this.parentVirtDir.scrollNextPage();
     * ```
     * @return {?}
     */
    IgxForOfDirective.prototype.scrollNextPage = /**
     * Scrolls by one page into the appropriate next direction.
     * For "horizontal" orientation that will be one view to the right and for "vertical" that is one view to the bottom.
     * ```typescript
     * this.parentVirtDir.scrollNextPage();
     * ```
     * @return {?}
     */
    function () {
        if (this.igxForScrollOrientation === 'horizontal') {
            this.scrollPosition += parseInt(this.igxForContainerSize, 10);
        }
        else {
            this.addScrollTop(parseInt(this.igxForContainerSize, 10));
        }
    };
    /**
     * Scrolls by one page into the appropriate previous direction.
     * For "horizontal" orientation that will be one view to the left and for "vertical" that is one view to the top.
     * ```typescript
     * this.parentVirtDir.scrollPrevPage();
     * ```
     */
    /**
     * Scrolls by one page into the appropriate previous direction.
     * For "horizontal" orientation that will be one view to the left and for "vertical" that is one view to the top.
     * ```typescript
     * this.parentVirtDir.scrollPrevPage();
     * ```
     * @return {?}
     */
    IgxForOfDirective.prototype.scrollPrevPage = /**
     * Scrolls by one page into the appropriate previous direction.
     * For "horizontal" orientation that will be one view to the left and for "vertical" that is one view to the top.
     * ```typescript
     * this.parentVirtDir.scrollPrevPage();
     * ```
     * @return {?}
     */
    function () {
        if (this.igxForScrollOrientation === 'horizontal') {
            this.scrollPosition -= parseInt(this.igxForContainerSize, 10);
        }
        else {
            /** @type {?} */
            var containerSize = (parseInt(this.igxForContainerSize, 10));
            this.addScrollTop(-containerSize);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} colIndex
     * @return {?}
     */
    IgxForOfDirective.prototype.getColumnScrollLeft = /**
     * @hidden
     * @param {?} colIndex
     * @return {?}
     */
    function (colIndex) {
        return this.sizesCache[colIndex];
    };
    /**
     * Returns a reference to the vertical scrollbar DOM element.
     * ```typescript
     * this.parentVirtDir.getVerticalScroll();
     * ```
     */
    /**
     * Returns a reference to the vertical scrollbar DOM element.
     * ```typescript
     * this.parentVirtDir.getVerticalScroll();
     * ```
     * @return {?}
     */
    IgxForOfDirective.prototype.getVerticalScroll = /**
     * Returns a reference to the vertical scrollbar DOM element.
     * ```typescript
     * this.parentVirtDir.getVerticalScroll();
     * ```
     * @return {?}
     */
    function () {
        if (this.vh) {
            return this.vh.instance.elementRef.nativeElement;
        }
        return null;
    };
    /**
     * Returns the total number of items that are fully visible.
     * ```typescript
     * this.parentVirtDir.getItemCountInView();
     * ```
     */
    /**
     * Returns the total number of items that are fully visible.
     * ```typescript
     * this.parentVirtDir.getItemCountInView();
     * ```
     * @return {?}
     */
    IgxForOfDirective.prototype.getItemCountInView = /**
     * Returns the total number of items that are fully visible.
     * ```typescript
     * this.parentVirtDir.getItemCountInView();
     * ```
     * @return {?}
     */
    function () {
        /** @type {?} */
        var startIndex = this.getIndexAt(this.scrollPosition, this.sizesCache, 0);
        if (this.scrollPosition - this.sizesCache[startIndex] > 0) {
            // fisrt item is not fully in view
            startIndex++;
        }
        /** @type {?} */
        var endIndex = this.getIndexAt(this.scrollPosition + parseInt(this.igxForContainerSize, 10), this.sizesCache, 0);
        return endIndex - startIndex;
    };
    /**
     * Returns a reference to the horizontal scrollbar DOM element.
     * ```typescript
     * this.parentVirtDir.getHorizontalScroll();
     * ```
     */
    /**
     * Returns a reference to the horizontal scrollbar DOM element.
     * ```typescript
     * this.parentVirtDir.getHorizontalScroll();
     * ```
     * @return {?}
     */
    IgxForOfDirective.prototype.getHorizontalScroll = /**
     * Returns a reference to the horizontal scrollbar DOM element.
     * ```typescript
     * this.parentVirtDir.getHorizontalScroll();
     * ```
     * @return {?}
     */
    function () {
        return this.getElement(this._viewContainer, 'igx-horizontal-virtual-helper') || this.hScroll;
    };
    /**
     * Returns the size of the element at the specified index.
     * ```typescript
     * this.parentVirtDir.getSizeAt(1);
     * ```
     */
    /**
     * Returns the size of the element at the specified index.
     * ```typescript
     * this.parentVirtDir.getSizeAt(1);
     * ```
     * @param {?} index
     * @return {?}
     */
    IgxForOfDirective.prototype.getSizeAt = /**
     * Returns the size of the element at the specified index.
     * ```typescript
     * this.parentVirtDir.getSizeAt(1);
     * ```
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.sizesCache[index + 1] - this.sizesCache[index];
    };
    /**
     * Returns the scroll offset of the element at the specified index.
     * ```typescript
     * this.parentVirtDir.getScrollForIndex(1);
     * ```
     */
    /**
     * Returns the scroll offset of the element at the specified index.
     * ```typescript
     * this.parentVirtDir.getScrollForIndex(1);
     * ```
     * @param {?} index
     * @param {?=} bottom
     * @return {?}
     */
    IgxForOfDirective.prototype.getScrollForIndex = /**
     * Returns the scroll offset of the element at the specified index.
     * ```typescript
     * this.parentVirtDir.getScrollForIndex(1);
     * ```
     * @param {?} index
     * @param {?=} bottom
     * @return {?}
     */
    function (index, bottom) {
        /** @type {?} */
        var containerSize = parseInt(this.igxForContainerSize, 10);
        /** @type {?} */
        var scroll = bottom ? Math.max(0, this.sizesCache[index + 1] - containerSize) : this.sizesCache[index];
        return scroll;
    };
    /**
     * @hidden
     * Function that is called when scrolling vertically
     */
    /**
     * @hidden
     * Function that is called when scrolling vertically
     * @protected
     * @param {?} event
     * @return {?}
     */
    IgxForOfDirective.prototype.onScroll = /**
     * @hidden
     * Function that is called when scrolling vertically
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /* in certain situations this may be called when no scrollbar is visible */
        if (!parseInt(this.vh.instance.elementRef.nativeElement.style.height, 10)) {
            return;
        }
        /** @type {?} */
        var containerSize = parseInt(this.igxForContainerSize, 10);
        /** @type {?} */
        var maxRealScrollTop = event.target.children[0].scrollHeight - containerSize;
        /** @type {?} */
        var realPercentScrolled = event.target.scrollTop / maxRealScrollTop;
        if (!this._bScrollInternal) {
            /** @type {?} */
            var maxVirtScrollTop = this._virtHeight - containerSize;
            this._virtScrollTop = realPercentScrolled * maxVirtScrollTop;
        }
        else {
            this._bScrollInternal = false;
        }
        this._scrollPosition = this._virtScrollTop;
        /** @type {?} */
        var prevStartIndex = this.state.startIndex;
        /** @type {?} */
        var scrollOffset = this.fixedUpdateAllElements(this._virtScrollTop);
        this.dc.instance._viewContainer.element.nativeElement.style.top = -(scrollOffset) + 'px';
        requestAnimationFrame(function () {
            // check if height/width has changes in views.
            _this.recalcUpdateSizes();
        });
        this.dc.changeDetectorRef.detectChanges();
        if (prevStartIndex !== this.state.startIndex) {
            this.onChunkLoad.emit(this.state);
        }
    };
    /**
     * @hidden
     * Function that recaculates and updates cache sizes.
     */
    /**
     * @hidden
     * Function that recaculates and updates cache sizes.
     * @return {?}
     */
    IgxForOfDirective.prototype.recalcUpdateSizes = /**
     * @hidden
     * Function that recaculates and updates cache sizes.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var dimension = this.igxForScrollOrientation === 'horizontal' ?
            this.igxForSizePropName : 'height';
        /** @type {?} */
        var diffs = [];
        /** @type {?} */
        var totalDiff = 0;
        for (var i = 0; i < this._embeddedViews.length; i++) {
            /** @type {?} */
            var view = this._embeddedViews[i];
            /** @type {?} */
            var rNode = view.rootNodes.find(function (node) { return node.nodeType === Node.ELEMENT_NODE; });
            if (rNode) {
                /** @type {?} */
                var h = rNode.offsetHeight ? rNode.offsetHeight : parseInt(this.igxForItemSize, 10);
                /** @type {?} */
                var index = this.state.startIndex + i;
                if (!this.isRemote && !this.igxForOf[index]) {
                    continue;
                }
                /** @type {?} */
                var oldVal = dimension === 'height' ? this.heightCache[index] : this.igxForOf[index][dimension];
                /** @type {?} */
                var newVal = dimension === 'height' ? h : rNode.clientWidth;
                if (dimension === 'height') {
                    this.heightCache[index] = newVal;
                }
                else {
                    this.igxForOf[index][dimension] = newVal;
                }
                /** @type {?} */
                var currDiff = newVal - oldVal;
                diffs.push(currDiff);
                totalDiff += currDiff;
                this.sizesCache[index + 1] += totalDiff;
            }
        }
        // update cache
        if (Math.abs(totalDiff) > 0) {
            for (var j = this.state.startIndex + this.state.chunkSize + 1; j < this.sizesCache.length; j++) {
                this.sizesCache[j] += totalDiff;
            }
            // update scrBar heights/widths
            if (this.igxForScrollOrientation === 'horizontal') {
                /** @type {?} */
                var totalWidth = parseInt(this.hScroll.children[0].style.width, 10) + totalDiff;
                this.hScroll.children[0].style.width = totalWidth + 'px';
            }
            /** @type {?} */
            var reducer = function (acc, val) { return acc + val; };
            if (this.igxForScrollOrientation === 'vertical') {
                /** @type {?} */
                var scrToBottom = this._isScrolledToBottom && !this.dc.instance.notVirtual;
                /** @type {?} */
                var hSum = this.heightCache.reduce(reducer);
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
                    var containerSize = parseInt(this.igxForContainerSize, 10);
                    /** @type {?} */
                    var maxVirtScrollTop = this._virtHeight - containerSize;
                    this._bScrollInternal = true;
                    this._virtScrollTop = maxVirtScrollTop;
                    this.scrollPosition = maxVirtScrollTop;
                    return;
                }
                if (this._adjustToIndex) {
                    // in case scrolled to specific index where after scroll heights are changed
                    // need to adjust the offsets so that item is last in view.
                    /** @type {?} */
                    var updatesToIndex = this._adjustToIndex - this.state.startIndex + 1;
                    /** @type {?} */
                    var sumDiffs = diffs.slice(0, updatesToIndex).reduce(reducer);
                    /** @type {?} */
                    var currOffset = parseInt(this.dc.instance._viewContainer.element.nativeElement.style.top, 10);
                    this.dc.instance._viewContainer.element.nativeElement.style.top = (currOffset - sumDiffs) + 'px';
                    this._adjustToIndex = null;
                }
            }
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} inScrollTop
     * @return {?}
     */
    IgxForOfDirective.prototype.fixedUpdateAllElements = /**
     * @hidden
     * @protected
     * @param {?} inScrollTop
     * @return {?}
     */
    function (inScrollTop) {
        /** @type {?} */
        var count = this.isRemote ? this.totalItemCount : this.igxForOf.length;
        /** @type {?} */
        var newStart = this.getIndexAt(inScrollTop, this.sizesCache, 0);
        if (newStart + this.state.chunkSize > count) {
            newStart = count - this.state.chunkSize;
        }
        /** @type {?} */
        var prevStart = this.state.startIndex;
        /** @type {?} */
        var diff = newStart - this.state.startIndex;
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
    };
    /**
     * @hidden
     * The function applies an optimized state change for scrolling down/right employing context change with view rearrangement
     */
    /**
     * @hidden
     * The function applies an optimized state change for scrolling down/right employing context change with view rearrangement
     * @protected
     * @param {?} prevIndex
     * @return {?}
     */
    IgxForOfDirective.prototype.moveApplyScrollNext = /**
     * @hidden
     * The function applies an optimized state change for scrolling down/right employing context change with view rearrangement
     * @protected
     * @param {?} prevIndex
     * @return {?}
     */
    function (prevIndex) {
        /** @type {?} */
        var start = prevIndex + this.state.chunkSize;
        for (var i = start; i < start + this.state.startIndex - prevIndex && this.igxForOf[i] !== undefined; i++) {
            /** @type {?} */
            var input = this.igxForOf[i];
            /** @type {?} */
            var embView = this._embeddedViews.shift();
            /** @type {?} */
            var cntx = embView.context;
            cntx.$implicit = input;
            cntx.index = this.getContextIndex(input);
            cntx.count = this.igxForOf.length;
            /** @type {?} */
            var view = this.dc.instance._vcr.detach(0);
            this.dc.instance._vcr.insert(view);
            this._embeddedViews.push(embView);
        }
    };
    /**
     * @hidden
     * The function applies an optimized state change for scrolling up/left employing context change with view rearrangement
     */
    /**
     * @hidden
     * The function applies an optimized state change for scrolling up/left employing context change with view rearrangement
     * @protected
     * @param {?} prevIndex
     * @return {?}
     */
    IgxForOfDirective.prototype.moveApplyScrollPrev = /**
     * @hidden
     * The function applies an optimized state change for scrolling up/left employing context change with view rearrangement
     * @protected
     * @param {?} prevIndex
     * @return {?}
     */
    function (prevIndex) {
        for (var i = prevIndex - 1; i >= this.state.startIndex && this.igxForOf[i] !== undefined; i--) {
            /** @type {?} */
            var input = this.igxForOf[i];
            /** @type {?} */
            var embView = this._embeddedViews.pop();
            /** @type {?} */
            var cntx = embView.context;
            cntx.$implicit = input;
            cntx.index = this.getContextIndex(input);
            /** @type {?} */
            var view = this.dc.instance._vcr.detach(this.dc.instance._vcr.length - 1);
            this.dc.instance._vcr.insert(view, 0);
            this._embeddedViews.unshift(embView);
        }
    };
    /**
     * @hidden
    */
    /**
     * @hidden
     * @protected
     * @param {?} input
     * @return {?}
     */
    IgxForOfDirective.prototype.getContextIndex = /**
     * @hidden
     * @protected
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return this.isRemote ? this.state.startIndex + this.igxForOf.indexOf(input) : this.igxForOf.indexOf(input);
    };
    /**
     * @hidden
     * The function applies an optimized state change through context change for each view
     */
    /**
     * @hidden
     * The function applies an optimized state change through context change for each view
     * @protected
     * @return {?}
     */
    IgxForOfDirective.prototype.fixedApplyScroll = /**
     * @hidden
     * The function applies an optimized state change through context change for each view
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var j = 0;
        /** @type {?} */
        var endIndex = this.state.startIndex + this.state.chunkSize;
        for (var i = this.state.startIndex; i < endIndex && this.igxForOf[i] !== undefined; i++) {
            /** @type {?} */
            var input = this.igxForOf[i];
            /** @type {?} */
            var embView = this._embeddedViews[j++];
            /** @type {?} */
            var cntx = ((/** @type {?} */ (embView))).context;
            cntx.$implicit = input;
            cntx.index = this.getContextIndex(input);
            cntx.count = this.igxForOf.length;
        }
    };
    /**
     * @hidden
     * Function that is called when scrolling horizontally
     */
    /**
     * @hidden
     * Function that is called when scrolling horizontally
     * @protected
     * @param {?} event
     * @return {?}
     */
    IgxForOfDirective.prototype.onHScroll = /**
     * @hidden
     * Function that is called when scrolling horizontally
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /* in certain situations this may be called when no scrollbar is visible */
        if (!parseInt(this.hScroll.children[0].style.width, 10)) {
            return;
        }
        this._scrollPosition = event.target.scrollLeft;
        /** @type {?} */
        var prevStartIndex = this.state.startIndex;
        // Updating horizontal chunks
        /** @type {?} */
        var scrollOffset = this.fixedUpdateAllElements(this._scrollPosition);
        this.dc.instance._viewContainer.element.nativeElement.style.left = -scrollOffset + 'px';
        this.dc.changeDetectorRef.detectChanges();
        if (prevStartIndex !== this.state.startIndex) {
            this.onChunkLoad.emit(this.state);
        }
    };
    Object.defineProperty(IgxForOfDirective.prototype, "igxForTrackBy", {
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
        get: /**
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
        function () { return this._trackByFn; },
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
        set: /**
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
        function (fn) { this._trackByFn = fn; },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    IgxForOfDirective.prototype._applyChanges = /**
     * @hidden
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var prevChunkSize = this.state.chunkSize;
        this.applyChunkSizeChange();
        this._recalcScrollBarSize();
        if (this.igxForOf && this.igxForOf.length && this.dc) {
            /** @type {?} */
            var embeddedViewCopy = Object.assign([], this._embeddedViews);
            /** @type {?} */
            var startIndex = this.state.startIndex;
            /** @type {?} */
            var endIndex = this.state.chunkSize + this.state.startIndex;
            if (this.isRemote) {
                startIndex = 0;
                endIndex = this.igxForOf.length;
            }
            for (var i = startIndex; i < endIndex && this.igxForOf[i] !== undefined; i++) {
                /** @type {?} */
                var input = this.igxForOf[i];
                /** @type {?} */
                var embView = embeddedViewCopy.shift();
                /** @type {?} */
                var cntx = ((/** @type {?} */ (embView))).context;
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
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    IgxForOfDirective.prototype._calcMaxBrowserHeight = /**
     * @hidden
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var div = document.createElement('div');
        /** @type {?} */
        var style = div.style;
        style.position = 'absolute';
        style.top = '9999999999999999px';
        document.body.appendChild(div);
        /** @type {?} */
        var size = Math.abs(div.getBoundingClientRect()['top']);
        document.body.removeChild(div);
        return size;
    };
    /**
     * @hidden
     * Recalculates the chunkSize based on current startIndex and returns the new size.
     * This should be called after this.state.startIndex is updated, not before.
     */
    /**
     * @hidden
     * Recalculates the chunkSize based on current startIndex and returns the new size.
     * This should be called after this.state.startIndex is updated, not before.
     * @protected
     * @return {?}
     */
    IgxForOfDirective.prototype._calculateChunkSize = /**
     * @hidden
     * Recalculates the chunkSize based on current startIndex and returns the new size.
     * This should be called after this.state.startIndex is updated, not before.
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var chunkSize = 0;
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
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} viewref
     * @param {?} nodeName
     * @return {?}
     */
    IgxForOfDirective.prototype.getElement = /**
     * @hidden
     * @protected
     * @param {?} viewref
     * @param {?} nodeName
     * @return {?}
     */
    function (viewref, nodeName) {
        /** @type {?} */
        var elem = viewref.element.nativeElement.parentNode.getElementsByTagName(nodeName);
        return elem.length > 0 ? elem[0] : null;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} items
     * @return {?}
     */
    IgxForOfDirective.prototype.initSizesCache = /**
     * @hidden
     * @protected
     * @param {?} items
     * @return {?}
     */
    function (items) {
        /** @type {?} */
        var totalSize = 0;
        /** @type {?} */
        var size = 0;
        /** @type {?} */
        var dimension = this.igxForScrollOrientation === 'horizontal' ?
            this.igxForSizePropName : 'height';
        /** @type {?} */
        var i = 0;
        this.sizesCache = [];
        this.heightCache = [];
        this.sizesCache.push(0);
        /** @type {?} */
        var count = this.isRemote ? this.totalItemCount : items.length;
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
    };
    /**
     * @protected
     * @return {?}
     */
    IgxForOfDirective.prototype._updateSizeCache = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.igxForScrollOrientation === 'horizontal') {
            this.initSizesCache(this.igxForOf);
            return;
        }
        /** @type {?} */
        var oldHeight = this.heightCache.length > 0 ? this.heightCache.reduce(function (acc, val) { return acc + val; }) : 0;
        /** @type {?} */
        var newHeight = this.initSizesCache(this.igxForOf);
        /** @type {?} */
        var diff = oldHeight - newHeight;
        // if data has been changed while container is scrolled
        // should update scroll top/left according to change so that same startIndex is in view
        if (Math.abs(diff) > 0 && this.scrollPosition > 0) {
            this.recalcUpdateSizes();
            /** @type {?} */
            var offset = parseInt(this.dc.instance._viewContainer.element.nativeElement.style.top, 10);
            this.scrollPosition = this.sizesCache[this.state.startIndex] - offset;
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    IgxForOfDirective.prototype._calcMaxChunkSize = /**
     * @hidden
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var i = 0;
        /** @type {?} */
        var length = 0;
        /** @type {?} */
        var maxLength = 0;
        /** @type {?} */
        var arr = [];
        /** @type {?} */
        var sum = 0;
        /** @type {?} */
        var availableSize = parseInt(this.igxForContainerSize, 10);
        if (!availableSize) {
            return 0;
        }
        /** @type {?} */
        var dimension = this.igxForScrollOrientation === 'horizontal' ?
            this.igxForSizePropName : 'height';
        /** @type {?} */
        var reducer = function (accumulator, currentItem) { return accumulator + _this._getItemSize(currentItem, dimension); };
        for (i; i < this.igxForOf.length; i++) {
            /** @type {?} */
            var item = this.igxForOf[i];
            if (dimension === 'height') {
                item = { value: this.igxForOf[i], height: this.heightCache[i] };
            }
            /** @type {?} */
            var size = dimension === 'height' ?
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
                    var curItem = dimension === 'height' ? arr[0].value : arr[0];
                    /** @type {?} */
                    var prevIndex = this.igxForOf.indexOf(curItem) - 1;
                    while (prevIndex >= 0 && sum <= availableSize) {
                        curItem = dimension === 'height' ? arr[0].value : arr[0];
                        prevIndex = this.igxForOf.indexOf(curItem) - 1;
                        /** @type {?} */
                        var prevItem = this.igxForOf[prevIndex];
                        /** @type {?} */
                        var prevSize = dimension === 'height' ?
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
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} left
     * @param {?} set
     * @param {?} index
     * @return {?}
     */
    IgxForOfDirective.prototype.getIndexAt = /**
     * @hidden
     * @protected
     * @param {?} left
     * @param {?} set
     * @param {?} index
     * @return {?}
     */
    function (left, set, index) {
        /** @type {?} */
        var start = 0;
        /** @type {?} */
        var end = set.length - 1;
        if (left === 0) {
            return 0;
        }
        while (start <= end) {
            /** @type {?} */
            var midIdx = Math.floor((start + end) / 2);
            /** @type {?} */
            var midLeft = set[midIdx];
            /** @type {?} */
            var cmp = left - midLeft;
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
    };
    /**
     * @protected
     * @return {?}
     */
    IgxForOfDirective.prototype._recalcScrollBarSize = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var count = this.isRemote ? this.totalItemCount : (this.igxForOf ? this.igxForOf.length : 0);
        this.dc.instance.notVirtual = !(this.igxForContainerSize && this.dc && this.state.chunkSize < count);
        if (this.igxForScrollOrientation === 'horizontal') {
            /** @type {?} */
            var totalWidth = this.igxForContainerSize ? this.initSizesCache(this.igxForOf) : 0;
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
    };
    /**
     * @protected
     * @return {?}
     */
    IgxForOfDirective.prototype._calcHeight = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var height;
        if (this.heightCache) {
            height = this.heightCache.reduce(function (acc, val) { return acc + val; }, 0);
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
    };
    /**
     * @protected
     * @param {?} changes
     * @return {?}
     */
    IgxForOfDirective.prototype._recalcOnContainerChange = /**
     * @protected
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.dc.instance._viewContainer.element.nativeElement.style.top = '0px';
        this.dc.instance._viewContainer.element.nativeElement.style.left = '0px';
        /** @type {?} */
        var prevChunkSize = this.state.chunkSize;
        this.applyChunkSizeChange();
        this._recalcScrollBarSize();
        if (prevChunkSize !== this.state.chunkSize) {
            this.onChunkLoad.emit(this.state);
        }
        if (this.sizesCache && this.hScroll) {
            // Updating horizontal chunks and offsets based on the new scrollLeft
            /** @type {?} */
            var scrollOffset = this.fixedUpdateAllElements(this.scrollPosition);
            this.dc.instance._viewContainer.element.nativeElement.style.left = -scrollOffset + 'px';
        }
    };
    /**
     * @hidden
     * Removes an elemenet from the embedded views and updates chunkSize.
     */
    /**
     * @hidden
     * Removes an elemenet from the embedded views and updates chunkSize.
     * @protected
     * @return {?}
     */
    IgxForOfDirective.prototype.removeLastElem = /**
     * @hidden
     * Removes an elemenet from the embedded views and updates chunkSize.
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var oldElem = this._embeddedViews.pop();
        this.onBeforeViewDestroyed.emit(oldElem);
        oldElem.destroy();
        this.state.chunkSize--;
    };
    /**
     * @hidden
     * If there exists an element that we can create embedded view for creates it, appends it and updates chunkSize
     */
    /**
     * @hidden
     * If there exists an element that we can create embedded view for creates it, appends it and updates chunkSize
     * @protected
     * @return {?}
     */
    IgxForOfDirective.prototype.addLastElem = /**
     * @hidden
     * If there exists an element that we can create embedded view for creates it, appends it and updates chunkSize
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var elemIndex = this.state.startIndex + this.state.chunkSize;
        if (!this.isRemote && !this.igxForOf) {
            return;
        }
        if (elemIndex >= this.igxForOf.length) {
            elemIndex = this.igxForOf.length - this.state.chunkSize;
        }
        /** @type {?} */
        var input = this.igxForOf[elemIndex];
        /** @type {?} */
        var embeddedView = this.dc.instance._vcr.createEmbeddedView(this._template, new IgxForOfContext(input, this.getContextIndex(input), this.igxForOf.length));
        this._embeddedViews.push(embeddedView);
        this.state.chunkSize++;
        this._zone.run(function () {
            _this.cdr.markForCheck();
        });
    };
    /**
     * Recalculates chunkSize and adds/removes elements if need due to the change.
     * this.state.chunkSize is updated in @addLastElem() or @removeLastElem()
     */
    /**
     * Recalculates chunkSize and adds/removes elements if need due to the change.
     * this.state.chunkSize is updated in \@addLastElem() or \@removeLastElem()
     * @protected
     * @return {?}
     */
    IgxForOfDirective.prototype.applyChunkSizeChange = /**
     * Recalculates chunkSize and adds/removes elements if need due to the change.
     * this.state.chunkSize is updated in \@addLastElem() or \@removeLastElem()
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var chunkSize = this.isRemote ? (this.igxForOf ? this.igxForOf.length : 0) : this._calculateChunkSize();
        if (chunkSize > this.state.chunkSize) {
            /** @type {?} */
            var diff = chunkSize - this.state.chunkSize;
            for (var i = 0; i < diff; i++) {
                this.addLastElem();
            }
        }
        else if (chunkSize < this.state.chunkSize) {
            /** @type {?} */
            var diff = this.state.chunkSize - chunkSize;
            for (var i = 0; i < diff; i++) {
                this.removeLastElem();
            }
        }
    };
    /**
     * @protected
     * @return {?}
     */
    IgxForOfDirective.prototype._updateScrollOffset = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.igxForScrollOrientation === 'horizontal') {
            this._updateHScrollOffset();
        }
        else {
            this._updateVScrollOffset();
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxForOfDirective.prototype._updateVScrollOffset = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollOffset = 0;
        /** @type {?} */
        var vScroll = this.vh.instance.elementRef.nativeElement;
        scrollOffset = vScroll && parseInt(vScroll.style.height, 10) ?
            this.scrollPosition - this.sizesCache[this.state.startIndex] : 0;
        this.dc.instance._viewContainer.element.nativeElement.style.top = -(scrollOffset) + 'px';
    };
    /**
     * @private
     * @return {?}
     */
    IgxForOfDirective.prototype._updateHScrollOffset = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollOffset = 0;
        scrollOffset = this.hScroll && parseInt(this.hScroll.children[0].style.width, 10) ?
            this.scrollPosition - this.sizesCache[this.state.startIndex] : 0;
        this.dc.instance._viewContainer.element.nativeElement.style.left = -scrollOffset + 'px';
    };
    /**
     * @private
     * @param {?} item
     * @param {?} dimension
     * @return {?}
     */
    IgxForOfDirective.prototype._getItemSize = /**
     * @private
     * @param {?} item
     * @param {?} dimension
     * @return {?}
     */
    function (item, dimension) {
        /** @type {?} */
        var dim = item[dimension];
        return typeof dim === 'number' ? dim : parseInt(this.igxForItemSize, 10) || 0;
    };
    IgxForOfDirective.decorators = [
        { type: Directive, args: [{ selector: '[igxFor][igxForOf]' },] }
    ];
    /** @nocollapse */
    IgxForOfDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef },
        { type: IterableDiffers },
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
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
    return IgxForOfDirective;
}());
export { IgxForOfDirective };
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
    var name = 'name';
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
var IgxGridForOfDirective = /** @class */ (function (_super) {
    tslib_1.__extends(IgxGridForOfDirective, _super);
    function IgxGridForOfDirective(_viewContainer, _template, _differs, resolver, cdr, _zone, syncService) {
        var _this = _super.call(this, _viewContainer, _template, _differs, resolver, cdr, _zone) || this;
        _this.syncService = syncService;
        /**
         * @hidden \@internal
         * An event that is emitted after data has been changed but before the view is refreshed
         */
        _this.onDataChanging = new EventEmitter();
        return _this;
    }
    Object.defineProperty(IgxGridForOfDirective.prototype, "igxGridForOf", {
        get: /**
         * @return {?}
         */
        function () {
            return this.igxForOf;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.igxForOf = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IgxGridForOfDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.syncService.setMaster(this);
        _super.prototype.ngOnInit.call(this);
        this.removeScrollEventListeners();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    IgxGridForOfDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var forOf = 'igxGridForOf';
        this.syncService.setMaster(this);
        if (forOf in changes) {
            /** @type {?} */
            var value = changes[forOf].currentValue;
            if (!this._differ && value) {
                try {
                    this._differ = this._differs.find(value).create(this.igxForTrackBy);
                }
                catch (e) {
                    throw new Error("Cannot find a differ supporting object \"" + value + "\" of type \"" + getTypeNameForDebugging(value) + "\".\n                     NgFor only supports binding to Iterables such as Arrays.");
                }
            }
        }
        /** @type {?} */
        var defaultItemSize = 'igxForItemSize';
        if (defaultItemSize in changes && !changes[defaultItemSize].firstChange && this.igxForScrollOrientation === 'vertical') {
            // handle default item size changed.
            this.initSizesCache(this.igxForOf);
        }
        /** @type {?} */
        var containerSize = 'igxForContainerSize';
        if (containerSize in changes && !changes[containerSize].firstChange && this.igxForOf) {
            this._recalcOnContainerChange(changes);
        }
    };
    Object.defineProperty(IgxGridForOfDirective.prototype, "sizesCache", {
        /**
         * @hidden
         * @internal
         */
        get: /**
         * @hidden
         * \@internal
         * @return {?}
         */
        function () {
            if (this.syncService.isMaster(this)) {
                return this._sizesCache;
            }
            return this.syncService.sizesCache(this.igxForScrollOrientation);
        },
        /**
         * @hidden
         * @internal
         */
        set: /**
         * @hidden
         * \@internal
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._sizesCache = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridForOfDirective.prototype, "itemsDimension", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.igxForScrollOrientation === 'horizontal' ? this.igxForSizePropName : 'height';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    IgxGridForOfDirective.prototype.getItemSize = /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var size = 0;
        /** @type {?} */
        var dimension = this.igxForScrollOrientation === 'horizontal' ?
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
    };
    /**
     * @protected
     * @param {?} items
     * @return {?}
     */
    IgxGridForOfDirective.prototype.initSizesCache = /**
     * @protected
     * @param {?} items
     * @return {?}
     */
    function (items) {
        if (!this.syncService.isMaster(this)) {
            /** @type {?} */
            var masterSizesCache = this.syncService.sizesCache(this.igxForScrollOrientation);
            return masterSizesCache[masterSizesCache.length - 1];
        }
        /** @type {?} */
        var totalSize = 0;
        /** @type {?} */
        var size = 0;
        /** @type {?} */
        var i = 0;
        this.sizesCache = [];
        this.heightCache = [];
        this.sizesCache.push(0);
        /** @type {?} */
        var count = this.isRemote ? this.totalItemCount : items.length;
        for (i; i < count; i++) {
            size = this.getItemSize(items[i]);
            if (this.itemsDimension === 'height') {
                this.heightCache.push(size);
            }
            totalSize += size;
            this.sizesCache.push(totalSize);
        }
        return totalSize;
    };
    /**
     * @protected
     * @param {?=} changes
     * @return {?}
     */
    IgxGridForOfDirective.prototype._updateSizeCache = /**
     * @protected
     * @param {?=} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes === void 0) { changes = null; }
        if (this.igxForScrollOrientation === 'horizontal') {
            this.initSizesCache(this.igxForOf);
            return;
        }
        /** @type {?} */
        var oldHeight = this.heightCache.length > 0 ? this.heightCache.reduce(function (acc, val) { return acc + val; }) : 0;
        /** @type {?} */
        var newHeight = oldHeight;
        if (changes && !this.isRemote) {
            newHeight = this.handleCacheChanges(changes);
        }
        else {
            newHeight = this.initSizesCache(this.igxForOf);
        }
        /** @type {?} */
        var diff = oldHeight - newHeight;
        // if data has been changed while container is scrolled
        // should update scroll top/left according to change so that same startIndex is in view
        if (Math.abs(diff) > 0) {
            requestAnimationFrame(function () {
                _this.recalcUpdateSizes();
                /** @type {?} */
                var offset = parseInt(_this.dc.instance._viewContainer.element.nativeElement.style.top, 10);
                if (_this.scrollPosition !== 0) {
                    _this.scrollPosition = _this.sizesCache[_this.state.startIndex] - offset;
                }
                else {
                    _this._updateScrollOffset();
                }
            });
        }
    };
    /**
     * @protected
     * @param {?} changes
     * @return {?}
     */
    IgxGridForOfDirective.prototype.handleCacheChanges = /**
     * @protected
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        /** @type {?} */
        var identityChanges = [];
        /** @type {?} */
        var newHeightCache = [];
        /** @type {?} */
        var newSizesCache = [];
        newSizesCache.push(0);
        /** @type {?} */
        var newHeight = 0;
        // When there are more than one removed items the changes are not reliable so those with identity change should be default size.
        /** @type {?} */
        var numRemovedItems = 0;
        changes.forEachRemovedItem(function () { return numRemovedItems++; });
        // Get the identity changes to determine later if those that have changed their indexes should be assigned default item size.
        changes.forEachIdentityChange(function (item) {
            if (item.currentIndex !== item.previousIndex) {
                // Filter out ones that have not changed their index.
                identityChanges[item.currentIndex] = item;
            }
        });
        // Processing each item that is passed to the igxForOf so far seem to be most reliable. We parse the updated list of items.
        changes.forEachItem(function (item) {
            if (item.previousIndex !== null &&
                (numRemovedItems < 2 || !identityChanges.length || identityChanges[item.currentIndex])) {
                // Reuse cache on those who have previousIndex.
                // When there are more than one removed items currently the changes are not readable so ones with identity change
                // should be racalculated.
                newHeightCache[item.currentIndex] = _this.heightCache[item.previousIndex];
            }
            else {
                // Assign default item size.
                newHeightCache[item.currentIndex] = _this.getItemSize(item.item);
            }
            newSizesCache[item.currentIndex + 1] = newSizesCache[item.currentIndex] + newHeightCache[item.currentIndex];
            newHeight += newHeightCache[item.currentIndex];
        });
        this.heightCache = newHeightCache;
        this.sizesCache = newSizesCache;
        return newHeight;
    };
    /**
     * @hidden
     * @internal
     */
    /**
     * @hidden
     * \@internal
     * @return {?}
     */
    IgxGridForOfDirective.prototype.assumeMaster = /**
     * @hidden
     * \@internal
     * @return {?}
     */
    function () {
        this._sizesCache = this.syncService.sizesCache(this.igxForScrollOrientation);
        this.syncService.setMaster(this, true);
    };
    /**
     * @return {?}
     */
    IgxGridForOfDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._differ) {
            /** @type {?} */
            var changes = this._differ.diff(this.igxForOf);
            if (changes) {
                /** @type {?} */
                var args = {
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IgxGridForOfDirective.prototype.onScroll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (!parseInt(this.vh.instance.elementRef.nativeElement.style.height, 10)) {
            return;
        }
        /** @type {?} */
        var containerSize = parseInt(this.igxForContainerSize, 10);
        /** @type {?} */
        var maxRealScrollTop = event.target.children[0].scrollHeight - containerSize;
        /** @type {?} */
        var realPercentScrolled = event.target.scrollTop / maxRealScrollTop;
        if (!this._bScrollInternal) {
            /** @type {?} */
            var maxVirtScrollTop = this._virtHeight - containerSize;
            this._virtScrollTop = realPercentScrolled * maxVirtScrollTop;
        }
        else {
            this._bScrollInternal = false;
        }
        this._scrollPosition = this._virtScrollTop;
        /** @type {?} */
        var scrollOffset = this.fixedUpdateAllElements(this._virtScrollTop);
        this.dc.instance._viewContainer.element.nativeElement.style.top = -(scrollOffset) + 'px';
        requestAnimationFrame(function () {
            _this.recalcUpdateSizes();
        });
    };
    /**
     * @param {?} scrollAmount
     * @return {?}
     */
    IgxGridForOfDirective.prototype.onHScroll = /**
     * @param {?} scrollAmount
     * @return {?}
     */
    function (scrollAmount) {
        /* in certain situations this may be called when no scrollbar is visible */
        if (!this.hScroll || !parseInt(this.hScroll.children[0].style.width, 10)) {
            return;
        }
        this._scrollPosition = scrollAmount;
        // Updating horizontal chunks
        /** @type {?} */
        var scrollOffset = this.fixedUpdateAllElements(scrollAmount);
        this.dc.instance._viewContainer.element.nativeElement.style.left = -scrollOffset + 'px';
    };
    /**
     * @protected
     * @return {?}
     */
    IgxGridForOfDirective.prototype.addLastElem = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var elemIndex = this.state.startIndex + this.state.chunkSize;
        if (!this.isRemote && !this.igxForOf) {
            return;
        }
        if (elemIndex >= this.igxForOf.length) {
            elemIndex = this.igxForOf.length - this.state.chunkSize;
        }
        /** @type {?} */
        var input = this.igxForOf[elemIndex];
        /** @type {?} */
        var embeddedView = this.dc.instance._vcr.createEmbeddedView(this._template, new IgxForOfContext(input, this.getContextIndex(input), this.igxForOf.length));
        this._embeddedViews.push(embeddedView);
        this.state.chunkSize++;
    };
    /**
     * @protected
     * @param {?} prevChunkSize
     * @return {?}
     */
    IgxGridForOfDirective.prototype._updateViews = /**
     * @protected
     * @param {?} prevChunkSize
     * @return {?}
     */
    function (prevChunkSize) {
        var _this = this;
        if (this.igxForOf && this.igxForOf.length && this.dc) {
            /** @type {?} */
            var embeddedViewCopy = Object.assign([], this._embeddedViews);
            /** @type {?} */
            var startIndex = void 0;
            /** @type {?} */
            var endIndex = void 0;
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
            for (var i = startIndex; i < endIndex && this.igxForOf[i] !== undefined; i++) {
                /** @type {?} */
                var input = this.igxForOf[i];
                /** @type {?} */
                var embView = embeddedViewCopy.shift();
                /** @type {?} */
                var cntx = ((/** @type {?} */ (embView))).context;
                cntx.$implicit = input;
                cntx.index = this.getContextIndex(input);
                cntx.count = this.igxForOf.length;
            }
            if (prevChunkSize !== this.state.chunkSize) {
                this.onChunkLoad.emit(this.state);
            }
            if (this.igxForScrollOrientation === 'vertical') {
                requestAnimationFrame(function () {
                    _this.recalcUpdateSizes();
                });
            }
        }
    };
    /**
     * @protected
     * @return {?}
     */
    IgxGridForOfDirective.prototype._applyChanges = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var prevChunkSize = this.state.chunkSize;
        this.applyChunkSizeChange();
        this._recalcScrollBarSize();
        this._updateViews(prevChunkSize);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    IgxGridForOfDirective.prototype._calcMaxChunkSize = /**
     * @hidden
     * @protected
     * @return {?}
     */
    function () {
        if (this.syncService.isMaster(this)) {
            return _super.prototype._calcMaxChunkSize.call(this);
        }
        return this.syncService.chunkSize(this.igxForScrollOrientation);
    };
    IgxGridForOfDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxGridFor][igxGridForOf]'
                },] }
    ];
    /** @nocollapse */
    IgxGridForOfDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef },
        { type: IterableDiffers },
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: IgxForOfSyncService }
    ]; };
    IgxGridForOfDirective.propDecorators = {
        igxGridForOf: [{ type: Input }],
        onDataChanging: [{ type: Output }]
    };
    return IgxGridForOfDirective;
}(IgxForOfDirective));
export { IgxGridForOfDirective };
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
var IgxForOfModule = /** @class */ (function () {
    function IgxForOfModule() {
    }
    IgxForOfModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxForOfDirective, IgxGridForOfDirective, DisplayContainerComponent, VirtualHelperComponent, HVirtualHelperComponent],
                    entryComponents: [DisplayContainerComponent, VirtualHelperComponent, HVirtualHelperComponent],
                    exports: [IgxForOfDirective, IgxGridForOfDirective],
                    imports: [IgxScrollInertiaModule, CommonModule]
                },] }
    ];
    return IgxForOfModule;
}());
export { IgxForOfModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yX29mLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9mb3Itb2YvZm9yX29mLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQWtCLE1BQU0saUJBQWlCLENBQUM7QUFDL0QsT0FBTyxFQUNILGlCQUFpQixFQUVqQix3QkFBd0IsRUFFeEIsU0FBUyxFQUdULFlBQVksRUFDWixLQUFLLEVBR0wsZUFBZSxFQUNmLFFBQVEsRUFDUixNQUFNLEVBSU4sTUFBTSxFQUVOLFdBQVcsRUFFWCxnQkFBZ0IsRUFFbkIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBSzVEOzs7OztJQUNJLHlCQUNVLFNBQVksRUFDWixLQUFhLEVBQ2IsS0FBYTtRQUZiLGNBQVMsR0FBVCxTQUFTLENBQUc7UUFDWixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUNwQixDQUFDO0lBS0osc0JBQUksa0NBQUs7UUFIVDs7V0FFRzs7Ozs7UUFDSCxjQUF1QixPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFLakQsc0JBQUksaUNBQUk7UUFIUjs7V0FFRzs7Ozs7UUFDSCxjQUFzQixPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssR0FB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bEQ7O0lBR0QscUJBQUM7Q0FBQSxBQVJELElBUUM7U0FEWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBOZ0Zvck9mQ29udGV4dCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudEZhY3RvcnksXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIENvbXBvbmVudFJlZixcbiAgICBEaXJlY3RpdmUsXG4gICAgRG9DaGVjayxcbiAgICBFbWJlZGRlZFZpZXdSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIElucHV0LFxuICAgIEl0ZXJhYmxlQ2hhbmdlcyxcbiAgICBJdGVyYWJsZURpZmZlcixcbiAgICBJdGVyYWJsZURpZmZlcnMsXG4gICAgTmdNb2R1bGUsXG4gICAgTmdab25lLFxuICAgIE9uQ2hhbmdlcyxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25Jbml0LFxuICAgIE91dHB1dCxcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFRyYWNrQnlGdW5jdGlvbixcbiAgICBWaWV3Q29udGFpbmVyUmVmLFxuICAgIFZpZXdSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERpc3BsYXlDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2Rpc3BsYXkuY29udGFpbmVyJztcbmltcG9ydCB7IEhWaXJ0dWFsSGVscGVyQ29tcG9uZW50IH0gZnJvbSAnLi9ob3Jpem9udGFsLnZpcnR1YWwuaGVscGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWaXJ0dWFsSGVscGVyQ29tcG9uZW50IH0gZnJvbSAnLi92aXJ0dWFsLmhlbHBlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4U2Nyb2xsSW5lcnRpYU1vZHVsZSB9IGZyb20gJy4vLi4vc2Nyb2xsLWluZXJ0aWEvc2Nyb2xsX2luZXJ0aWEuZGlyZWN0aXZlJztcbmltcG9ydCB7IElneEZvck9mU3luY1NlcnZpY2UgfSBmcm9tICcuL2Zvcl9vZi5zeW5jLnNlcnZpY2UnO1xuXG4vKipcbiAqICBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjbGFzcyBJZ3hGb3JPZkNvbnRleHQ8VD4ge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgIHB1YmxpYyAkaW1wbGljaXQ6IFQsXG4gICAgICAgcHVibGljIGluZGV4OiBudW1iZXIsXG4gICAgICAgcHVibGljIGNvdW50OiBudW1iZXJcbiAgICApIHt9XG5cbiAgICAvKipcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIHRoZSBmaXJzdCBvciBub3RcbiAgICAgKi9cbiAgICBnZXQgZmlyc3QoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmluZGV4ID09PSAwOyB9XG5cbiAgICAvKipcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIHRoZSBsYXN0IG9yIG5vdFxuICAgICAqL1xuICAgIGdldCBsYXN0KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5pbmRleCA9PT0gdGhpcy5jb3VudCAtIDE7IH1cblxuICAgIC8qKlxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgZXZlbiBvciBub3RcbiAgICAgKi9cbiAgICBnZXQgZXZlbigpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuaW5kZXggJSAyID09PSAwOyB9XG5cbiAgICAvKipcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIG9kZCBvciBub3RcbiAgICAgKi9cbiAgICBnZXQgb2RkKCk6IGJvb2xlYW4geyByZXR1cm4gIXRoaXMuZXZlbjsgfVxuXG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tpZ3hGb3JdW2lneEZvck9mXScgfSlcbmV4cG9ydCBjbGFzcyBJZ3hGb3JPZkRpcmVjdGl2ZTxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBEb0NoZWNrLCBPbkRlc3Ryb3kge1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgZGF0YSB0byBiZSByZW5kZXJlZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPG5nLXRlbXBsYXRlIGlneEZvciBsZXQtaXRlbSBbaWd4Rm9yT2ZdPVwiZGF0YVwiIFtpZ3hGb3JTY3JvbGxPcmllbnRhdGlvbl09XCInaG9yaXpvbnRhbCdcIj48L25nLXRlbXBsYXRlPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlneEZvck9mOiBhbnlbXTtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHByb3BlcnR5IG5hbWUgZnJvbSB3aGljaCB0byByZWFkIHRoZSBzaXplIGluIHRoZSBkYXRhIG9iamVjdC5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZ3hGb3JTaXplUHJvcE5hbWU7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzcGVjaWZpZXMgdGhlIHNjcm9sbCBvcmllbnRhdGlvbi5cbiAgICAgKiBTY3JvbGwgb3JpZW50YXRpb24gY2FuIGJlIFwidmVydGljYWxcIiBvciBcImhvcml6b250YWxcIi5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPG5nLXRlbXBsYXRlIGlneEZvciBsZXQtaXRlbSBbaWd4Rm9yT2ZdPVwiZGF0YVwiIFtpZ3hGb3JTY3JvbGxPcmllbnRhdGlvbl09XCInaG9yaXpvbnRhbCdcIj48L25nLXRlbXBsYXRlPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlneEZvclNjcm9sbE9yaWVudGF0aW9uOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBPcHRpb25hbGx5IHBhc3MgdGhlIHBhcmVudCBgaWd4Rm9yYCBpbnN0YW5jZSB0byBjcmVhdGUgYSB2aXJ0dWFsIHRlbXBsYXRlIHNjcm9sbGluZyBib3RoIGhvcml6b250YWxseSBhbmQgdmVydGljYWxseS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPG5nLXRlbXBsYXRlICNzY3JvbGxDb250YWluZXIgaWd4Rm9yIGxldC1yb3dEYXRhIFtpZ3hGb3JPZl09XCJkYXRhXCJcbiAgICAgKiAgICAgICBbaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb25dPVwiJ3ZlcnRpY2FsJ1wiXG4gICAgICogICAgICAgW2lneEZvckNvbnRhaW5lclNpemVdPVwiJzUwMHB4J1wiXG4gICAgICogICAgICAgW2lneEZvckl0ZW1TaXplXT1cIic1MHB4J1wiXG4gICAgICogICAgICAgbGV0LXJvd0luZGV4PVwiaW5kZXhcIj5cbiAgICAgKiAgICAgICA8ZGl2IFtzdHlsZS5kaXNwbGF5XT1cIidmbGV4J1wiIFtzdHlsZS5oZWlnaHRdPVwiJzUwcHgnXCI+XG4gICAgICogICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjY2hpbGRDb250YWluZXIgaWd4Rm9yIGxldC1pdGVtIFtpZ3hGb3JPZl09XCJkYXRhXCJcbiAgICAgKiAgICAgICAgICAgICAgIFtpZ3hGb3JTY3JvbGxPcmllbnRhdGlvbl09XCInaG9yaXpvbnRhbCdcIlxuICAgICAqICAgICAgICAgICAgICAgW2lneEZvclNjcm9sbENvbnRhaW5lcl09XCJwYXJlbnRWaXJ0RGlyXCJcbiAgICAgKiAgICAgICAgICAgICAgIFtpZ3hGb3JDb250YWluZXJTaXplXT1cIic1MDBweCdcIj5cbiAgICAgKiAgICAgICAgICAgICAgICAgICA8ZGl2IFtzdHlsZS5taW4td2lkdGhdPVwiJzUwcHgnXCI+e3tyb3dJbmRleH19IDoge3tpdGVtLnRleHR9fTwvZGl2PlxuICAgICAqICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAqICAgICAgIDwvZGl2PlxuICAgICAqIDwvbmctdGVtcGxhdGU+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWd4Rm9yU2Nyb2xsQ29udGFpbmVyOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSBweC1hZmZpeGVkIHNpemUgb2YgdGhlIGNvbnRhaW5lciBhbG9uZyB0aGUgYXhpcyBvZiBzY3JvbGxpbmcuXG4gICAgICogRm9yIFwiaG9yaXpvbnRhbFwiIG9yaWVudGF0aW9uIHRoaXMgdmFsdWUgaXMgdGhlIHdpZHRoIG9mIHRoZSBjb250YWluZXIgYW5kIGZvciBcInZlcnRpY2FsXCIgaXMgdGhlIGhlaWdodC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPG5nLXRlbXBsYXRlIGlneEZvciBsZXQtaXRlbSBbaWd4Rm9yT2ZdPVwiZGF0YVwiIFtpZ3hGb3JDb250YWluZXJTaXplXT1cIic1MDBweCdcIlxuICAgICAqICAgICAgW2lneEZvclNjcm9sbE9yaWVudGF0aW9uXT1cIidob3Jpem9udGFsJ1wiPlxuICAgICAqIDwvbmctdGVtcGxhdGU+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWd4Rm9yQ29udGFpbmVyU2l6ZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgcHgtYWZmaXhlZCBzaXplIG9mIHRoZSBpdGVtIGFsb25nIHRoZSBheGlzIG9mIHNjcm9sbGluZy5cbiAgICAgKiBGb3IgXCJob3Jpem9udGFsXCIgb3JpZW50YXRpb24gdGhpcyB2YWx1ZSBpcyB0aGUgd2lkdGggb2YgdGhlIGNvbHVtbiBhbmQgZm9yIFwidmVydGljYWxcIiBpcyB0aGUgaGVpZ2h0IG9yIHRoZSByb3cuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxuZy10ZW1wbGF0ZSBpZ3hGb3IgbGV0LWl0ZW0gW2lneEZvck9mXT1cImRhdGFcIiBbaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb25dPVwiJ2hvcml6b250YWwnXCIgW2lneEZvckl0ZW1TaXplXT1cIic1MHB4J1wiPjwvbmctdGVtcGxhdGU+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWd4Rm9ySXRlbVNpemU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGM6IENvbXBvbmVudFJlZjxEaXNwbGF5Q29udGFpbmVyQ29tcG9uZW50PjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBkaXJlY3RpdmUuIEl0IGNvbnRhaW5zIGBzdGFydEluZGV4YCBhbmQgYGNodW5rU2l6ZWAuXG4gICAgICogc3RhdGUuc3RhcnRJbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgaXRlbSBhdCB3aGljaCB0aGUgY3VycmVudCB2aXNpYmxlIGNodW5rIGJlZ2lucy5cbiAgICAgKiBzdGF0ZS5jaHVua1NpemUgLSBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoZSBjdXJyZW50IHZpc2libGUgY2h1bmsgaG9sZHMuXG4gICAgICogVGhlc2Ugb3B0aW9ucyBjYW4gYmUgdXNlZCB3aGVuIGltcGxlbWVudGluZyByZW1vdGUgdmlydHVhbGl6YXRpb24gYXMgdGhleSBwcm92aWRlIHRoZSBuZWNlc3Nhcnkgc3RhdGUgaW5mb3JtYXRpb24uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGdyaWRTdGF0ZSA9IHRoaXMucGFyZW50VmlydERpci5zdGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGU6IElGb3JPZlN0YXRlID0ge1xuICAgICAgICBzdGFydEluZGV4OiAwLFxuICAgICAgICBjaHVua1NpemU6IDBcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSB0b3RhbCBjb3VudCBvZiB0aGUgdmlydHVhbCBkYXRhIGl0ZW1zLCB3aGVuIHVzaW5nIHJlbW90ZSBzZXJ2aWNlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnBhcmVudFZpcnREaXIudG90YWxJdGVtQ291bnQgPSBkYXRhLkNvdW50O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyB0b3RhbEl0ZW1Db3VudDogbnVtYmVyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFuIGV2ZW50IHRoYXQgaXMgZW1pdHRlZCBhZnRlciBhIG5ldyBjaHVuayBoYXMgYmVlbiBsb2FkZWQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxuZy10ZW1wbGF0ZSBpZ3hGb3IgW2lneEZvck9mXT1cImRhdGFcIiBbaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb25dPVwiJ2hvcml6b250YWwnXCIgKG9uQ2h1bmtMb2FkKT1cImNodW5rTG9hZCgkZXZlbnQpXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY2h1bmtMb2FkKGUpe1xuICAgICAqIGFsZXJ0KFwiY2h1bmsgbG9hZGVkIVwiKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uQ2h1bmtMb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxJRm9yT2ZTdGF0ZT4oKTtcblxuICAgIC8qKlxuICAgICAqIEFuIGV2ZW50IHRoYXQgaXMgZW1pdHRlZCBhZnRlciBkYXRhIGhhcyBiZWVuIGNoYW5nZWQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxuZy10ZW1wbGF0ZSBpZ3hGb3IgW2lneEZvck9mXT1cImRhdGFcIiBbaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb25dPVwiJ2hvcml6b250YWwnXCIgKG9uRGF0YUNoYW5nZWQpPVwiZGF0YUNoYW5nZWQoJGV2ZW50KVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGRhdGFDaGFuZ2VkKGUpe1xuICAgICAqIGFsZXJ0KFwiZGF0YSBjaGFuZ2VkIVwiKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uRGF0YUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkJlZm9yZVZpZXdEZXN0cm95ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEVtYmVkZGVkVmlld1JlZjxhbnk+PigpO1xuXG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgdGhhdCBpcyBlbWl0dGVkIG9uIGNodW5rIGxvYWRpbmcgdG8gZW1pdCB0aGUgY3VycmVudCBzdGF0ZSBpbmZvcm1hdGlvbiAtIHN0YXJ0SW5kZXgsIGVuZEluZGV4LCB0b3RhbENvdW50LlxuICAgICAqIENhbiBiZSB1c2VkIGZvciBpbXBsZW1lbnRpbmcgcmVtb3RlIGxvYWQgb24gZGVtYW5kIGZvciB0aGUgaWd4Rm9yIGRhdGEuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxuZy10ZW1wbGF0ZSBpZ3hGb3IgW2lneEZvck9mXT1cImRhdGFcIiBbaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb25dPVwiJ2hvcml6b250YWwnXCIgKG9uQ2h1bmtQcmVsb2FkKT1cImNodW5rUHJlbG9hZCgkZXZlbnQpXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY2h1bmtQcmVsb2FkKGUpe1xuICAgICAqIGFsZXJ0KFwiY2h1bmsgaXMgbG9hZGluZyFcIik7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkNodW5rUHJlbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8SUZvck9mU3RhdGU+KCk7XG5cbiAgICBwcm90ZWN0ZWQgaFNjcm9sbDtcbiAgICBwcm90ZWN0ZWQgZnVuYztcbiAgICBwcm90ZWN0ZWQgX3NpemVzQ2FjaGU6IG51bWJlcltdID0gW107XG4gICAgcHJvdGVjdGVkIHZoOiBDb21wb25lbnRSZWY8VmlydHVhbEhlbHBlckNvbXBvbmVudD47XG4gICAgcHJvdGVjdGVkIGh2aDogQ29tcG9uZW50UmVmPEhWaXJ0dWFsSGVscGVyQ29tcG9uZW50PjtcbiAgICBwcm90ZWN0ZWQgX2RpZmZlcjogSXRlcmFibGVEaWZmZXI8VD4gfCBudWxsID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgX3RyYWNrQnlGbjogVHJhY2tCeUZ1bmN0aW9uPFQ+O1xuICAgIHByb3RlY3RlZCBoZWlnaHRDYWNoZSA9IFtdO1xuICAgIHByaXZhdGUgX2FkanVzdFRvSW5kZXg7XG4gICAgcHJpdmF0ZSBNQVhfUEVSRl9TQ1JPTExfRElGRiA9IDQ7XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHNpemVzQ2FjaGUoKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZXNDYWNoZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHNldCBzaXplc0NhY2hlKHZhbHVlOiBudW1iZXJbXSkge1xuICAgICAgICB0aGlzLl9zaXplc0NhY2hlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgX2lzU2Nyb2xsZWRUb0JvdHRvbSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmdldFZlcnRpY2FsU2Nyb2xsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IHRoaXMuZ2V0VmVydGljYWxTY3JvbGwoKS5zY3JvbGxIZWlnaHQ7XG4gICAgICAgIC8vIFVzZSA9PT0gYW5kIG5vdCA+PSBiZWNhdXNlIGBzY3JvbGxUb3AgKyBjb250YWluZXIgc2l6ZWAgY2FuJ3QgYmUgYmlnZ2VyIHRoYW4gYHNjcm9sbEhlaWdodGAsIHVubGVzcyBzb21ldGhpbmcgaXNuJ3QgdXBkYXRlZC5cbiAgICAgICAgLy8gQWxzbyB1c2UgTWF0aC5yb3VuZCBiZWNhdXNlIENocm9tZSBoYXMgc29tZSBpbmNvbnNpc3RlbmNpZXMgYW5kIGBzY3JvbGxUb3AgKyBjb250YWluZXJgIGNhbiBiZSBmbG9hdCB3aGVuIHpvb21pbmcgdGhlIHBhZ2UuXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuc2Nyb2xsUG9zaXRpb24gKyB0aGlzLmlneEZvckNvbnRhaW5lclNpemUpID09PSBzY3JvbGxIZWlnaHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgX2lzQXRCb3R0b21JbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWd4Rm9yT2YgJiYgdGhpcy5zdGF0ZS5zdGFydEluZGV4ICsgdGhpcy5zdGF0ZS5jaHVua1NpemUgPiB0aGlzLmlneEZvck9mLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvLyBTdGFydCBwcm9wZXJ0aWVzIHJlbGF0ZWQgdG8gdmlydHVhbCBoZWlnaHQgaGFuZGxpbmcgZHVlIHRvIGJyb3dzZXIgbGltaXRhdGlvblxuICAgIC8qKiBNYXhpbXVtIGhlaWdodCBmb3IgYW4gZWxlbWVudCBvZiB0aGUgYnJvd3Nlci4gKi9cbiAgICBwcml2YXRlIF9tYXhIZWlnaHQ7XG5cbiAgICAvKiogSGVpZ2h0IHRoYXQgaXMgYmVpbmcgdmlydHVhbGl6ZWQuICovXG4gICAgcHJvdGVjdGVkIF92aXJ0SGVpZ2h0ID0gMDtcblxuICAgIC8qKlxuICAgICAqIFJhdGlvIGZvciBoZWlnaHQgdGhhdCdzIGJlaW5nIHZpcnR1YWxpemFlZCBhbmQgdGhlIG9uZSB2aXNpYmxlXG4gICAgICogSWYgX3ZpcnRIZWlnaHRSYXRpbyA9IDEsIHRoZSB2aXNpYmxlIGhlaWdodCBhbmQgdGhlIHZpcnR1YWxpemVkIGFyZSB0aGUgc2FtZSwgYWxzbyBfbWF4SGVpZ2h0ID4gX3ZpcnRIZWlnaHQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdmlydEhlaWdodFJhdGlvID0gMTtcblxuICAgIC8qKiBJbnRlcm5hbCB0cmFjayBmb3Igc2Nyb2xsIHRvcCB0aGF0IGlzIGJlaW5nIHZpcnR1YWxpemVkICovXG4gICAgcHJvdGVjdGVkIF92aXJ0U2Nyb2xsVG9wID0gMDtcblxuICAgIC8qKiBJZiB0aGUgbmV4dCBvblNjcm9sbCBldmVudCBpcyB0cmlnZ2VyZWQgZHVlIHRvIGludGVybmFsIHNldHRpbmcgb2Ygc2Nyb2xsVG9wICovXG4gICAgcHJvdGVjdGVkIF9iU2Nyb2xsSW50ZXJuYWwgPSBmYWxzZTtcbiAgICAvLyBFbmQgcHJvcGVydGllcyByZWxhdGVkIHRvIHZpcnR1YWwgaGVpZ2h0IGhhbmRsaW5nXG5cbiAgICAvKiogY2FjaGluZyBzY3JvbGwgcG9zaXRpb24gcmVkdWNlcyByZWZsb3dzICovXG4gICAgcHJvdGVjdGVkIF9zY3JvbGxQb3NpdGlvbiA9IDA7XG5cbiAgICBwcm90ZWN0ZWQgX2VtYmVkZGVkVmlld3M6IEFycmF5PEVtYmVkZGVkVmlld1JlZjxhbnk+PiA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHByb3RlY3RlZCBfdGVtcGxhdGU6IFRlbXBsYXRlUmVmPE5nRm9yT2ZDb250ZXh0PFQ+PixcbiAgICAgICAgcHJvdGVjdGVkIF9kaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsXG4gICAgICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHByb3RlY3RlZCBfem9uZTogTmdab25lKSB7IH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0IGlzUmVtb3RlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50b3RhbEl0ZW1Db3VudCAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGdldCBzY3JvbGxQb3NpdGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsUG9zaXRpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHNjcm9sbFBvc2l0aW9uKHZhbDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3Njcm9sbFBvc2l0aW9uID0gdmFsO1xuICAgICAgICBpZiAodGhpcy5pZ3hGb3JTY3JvbGxPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIHRoaXMuaFNjcm9sbCkge1xuICAgICAgICAgICAgdGhpcy5oU2Nyb2xsLnNjcm9sbExlZnQgPSB2YWw7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52aCkge1xuICAgICAgICAgICAgdGhpcy52aC5pbnN0YW5jZS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gdmFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCByZW1vdmVTY3JvbGxFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgaWYgKHRoaXMuaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PlxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SG9yaXpvbnRhbFNjcm9sbCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuZnVuYylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbCA9IHRoaXMuZ2V0VmVydGljYWxTY3JvbGwoKTtcbiAgICAgICAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy52ZXJ0aWNhbFNjcm9sbEhhbmRsZXIpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB2ZXJ0aWNhbFNjcm9sbEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5vblNjcm9sbChldmVudCk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzU2Nyb2xsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmguaW5zdGFuY2UuaGVpZ2h0ID4gcGFyc2VJbnQodGhpcy5pZ3hGb3JDb250YWluZXJTaXplLCAxMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IHRvdGFsU2l6ZSA9IDA7XG4gICAgICAgIGNvbnN0IHZjID0gdGhpcy5pZ3hGb3JTY3JvbGxDb250YWluZXIgPyB0aGlzLmlneEZvclNjcm9sbENvbnRhaW5lci5fdmlld0NvbnRhaW5lciA6IHRoaXMuX3ZpZXdDb250YWluZXI7XG4gICAgICAgIHRoaXMuaWd4Rm9yU2l6ZVByb3BOYW1lID0gdGhpcy5pZ3hGb3JTaXplUHJvcE5hbWUgfHwgJ3dpZHRoJztcblxuICAgICAgICBjb25zdCBkY0ZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8RGlzcGxheUNvbnRhaW5lckNvbXBvbmVudD4gPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KERpc3BsYXlDb250YWluZXJDb21wb25lbnQpO1xuICAgICAgICB0aGlzLmRjID0gdGhpcy5fdmlld0NvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZGNGYWN0b3J5LCAwKTtcbiAgICAgICAgdGhpcy5kYy5pbnN0YW5jZS5zY3JvbGxEaXJlY3Rpb24gPSB0aGlzLmlneEZvclNjcm9sbE9yaWVudGF0aW9uO1xuICAgICAgICBpZiAodHlwZW9mIE1TR2VzdHVyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gT24gRWRnZSBhbmQgSUUgd2hlbiBzY3JvbGxpbmcgb24gdG91Y2ggdGhlIHBhZ2Ugc2Nyb2xsIGluc3RlYWQgb2YgdGhlIGdyaWQuXG4gICAgICAgICAgICB0aGlzLmRjLmluc3RhbmNlLl92aWV3Q29udGFpbmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS50b3VjaEFjdGlvbiA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pZ3hGb3JPZiAmJiB0aGlzLmlneEZvck9mLmxlbmd0aCkge1xuICAgICAgICAgICAgdG90YWxTaXplID0gdGhpcy5pbml0U2l6ZXNDYWNoZSh0aGlzLmlneEZvck9mKTtcbiAgICAgICAgICAgIHRoaXMuaFNjcm9sbCA9IHRoaXMuZ2V0RWxlbWVudCh2YywgJ2lneC1ob3Jpem9udGFsLXZpcnR1YWwtaGVscGVyJyk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNodW5rU2l6ZSA9IHRoaXMuX2NhbGN1bGF0ZUNodW5rU2l6ZSgpO1xuICAgICAgICAgICAgdGhpcy5kYy5pbnN0YW5jZS5ub3RWaXJ0dWFsID0gISh0aGlzLmlneEZvckNvbnRhaW5lclNpemUgJiYgdGhpcy5zdGF0ZS5jaHVua1NpemUgPCB0aGlzLmlneEZvck9mLmxlbmd0aCk7XG4gICAgICAgICAgICBpZiAodGhpcy5oU2Nyb2xsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPSB0aGlzLmhTY3JvbGwuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0SW5kZXggPSBNYXRoLm1pbih0aGlzLmdldEluZGV4QXQodGhpcy5zY3JvbGxQb3NpdGlvbiwgdGhpcy5zaXplc0NhY2hlLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZ3hGb3JPZi5sZW5ndGggLSB0aGlzLnN0YXRlLmNodW5rU2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5zdGF0ZS5zdGFydEluZGV4OyBpIDwgdGhpcy5zdGF0ZS5zdGFydEluZGV4ICsgdGhpcy5zdGF0ZS5jaHVua1NpemUgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZ3hGb3JPZltpXSAhPT0gdW5kZWZpbmVkOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuaWd4Rm9yT2ZbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgZW1iZWRkZWRWaWV3ID0gdGhpcy5kYy5pbnN0YW5jZS5fdmNyLmNyZWF0ZUVtYmVkZGVkVmlldyhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgICAgIG5ldyBJZ3hGb3JPZkNvbnRleHQ8VD4oaW5wdXQsIHRoaXMuZ2V0Q29udGV4dEluZGV4KGlucHV0KSwgdGhpcy5pZ3hGb3JPZi5sZW5ndGgpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbWJlZGRlZFZpZXdzLnB1c2goZW1iZWRkZWRWaWV3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlneEZvclNjcm9sbE9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICB0aGlzLmRjLmluc3RhbmNlLl92aWV3Q29udGFpbmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgICAgIGNvbnN0IGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8VmlydHVhbEhlbHBlckNvbXBvbmVudD4gPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFZpcnR1YWxIZWxwZXJDb21wb25lbnQpO1xuICAgICAgICAgICAgdGhpcy52aCA9IHZjLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcblxuICAgICAgICAgICAgdGhpcy5fbWF4SGVpZ2h0ID0gdGhpcy5fY2FsY01heEJyb3dzZXJIZWlnaHQoKTtcbiAgICAgICAgICAgIHRoaXMudmguaW5zdGFuY2UuaGVpZ2h0ID0gdGhpcy5pZ3hGb3JPZiA/IHRoaXMuX2NhbGNIZWlnaHQoKSA6IDA7XG4gICAgICAgICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2FsU2Nyb2xsSGFuZGxlciA9IHRoaXMudmVydGljYWxTY3JvbGxIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy52aC5pbnN0YW5jZS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy52ZXJ0aWNhbFNjcm9sbEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGMuaW5zdGFuY2Uuc2Nyb2xsQ29udGFpbmVyID0gdGhpcy52aC5pbnN0YW5jZS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlneEZvclNjcm9sbE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIHRoaXMuZnVuYyA9IChldnQpID0+IHsgdGhpcy5vbkhTY3JvbGwoZXZ0KTsgfTtcbiAgICAgICAgICAgIHRoaXMuaFNjcm9sbCA9IHRoaXMuZ2V0RWxlbWVudCh2YywgJ2lneC1ob3Jpem9udGFsLXZpcnR1YWwtaGVscGVyJyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaFNjcm9sbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGh2RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxIVmlydHVhbEhlbHBlckNvbXBvbmVudD4gPVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEhWaXJ0dWFsSGVscGVyQ29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmh2aCA9IHZjLmNyZWF0ZUNvbXBvbmVudChodkZhY3RvcnkpO1xuICAgICAgICAgICAgICAgIHRoaXMuaHZoLmluc3RhbmNlLndpZHRoID0gdG90YWxTaXplO1xuICAgICAgICAgICAgICAgIHRoaXMuaFNjcm9sbCA9IHRoaXMuaHZoLmluc3RhbmNlLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5odmguaW5zdGFuY2UuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuZnVuYyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGMuaW5zdGFuY2Uuc2Nyb2xsQ29udGFpbmVyID0gdGhpcy5oU2Nyb2xsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oU2Nyb2xsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuZnVuYyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGMuaW5zdGFuY2Uuc2Nyb2xsQ29udGFpbmVyID0gdGhpcy5oU2Nyb2xsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlSFNjcm9sbE9mZnNldCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVTY3JvbGxFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBjb25zdCBmb3JPZiA9ICdpZ3hGb3JPZic7XG4gICAgICAgIGlmIChmb3JPZiBpbiBjaGFuZ2VzKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNoYW5nZXNbZm9yT2ZdLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fZGlmZmVyICYmIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGlmZmVyID0gdGhpcy5fZGlmZmVycy5maW5kKHZhbHVlKS5jcmVhdGUodGhpcy5pZ3hGb3JUcmFja0J5KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBDYW5ub3QgZmluZCBhIGRpZmZlciBzdXBwb3J0aW5nIG9iamVjdCBcIiR7dmFsdWV9XCIgb2YgdHlwZSBcIiR7Z2V0VHlwZU5hbWVGb3JEZWJ1Z2dpbmcodmFsdWUpfVwiLlxuICAgICAgICAgICAgICAgICAgICAgTmdGb3Igb25seSBzdXBwb3J0cyBiaW5kaW5nIHRvIEl0ZXJhYmxlcyBzdWNoIGFzIEFycmF5cy5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVmYXVsdEl0ZW1TaXplID0gJ2lneEZvckl0ZW1TaXplJztcbiAgICAgICAgaWYgKGRlZmF1bHRJdGVtU2l6ZSBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzW2RlZmF1bHRJdGVtU2l6ZV0uZmlyc3RDaGFuZ2UgJiYgdGhpcy5pZ3hGb3JTY3JvbGxPcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgLy8gaGFuZGxlIGRlZmF1bHQgaXRlbSBzaXplIGNoYW5nZWQuXG4gICAgICAgICAgICB0aGlzLmluaXRTaXplc0NhY2hlKHRoaXMuaWd4Rm9yT2YpO1xuICAgICAgICAgICAgdGhpcy5fYXBwbHlDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGFpbmVyU2l6ZSA9ICdpZ3hGb3JDb250YWluZXJTaXplJztcbiAgICAgICAgaWYgKGNvbnRhaW5lclNpemUgaW4gY2hhbmdlcyAmJiAhY2hhbmdlc1tjb250YWluZXJTaXplXS5maXJzdENoYW5nZSAmJiB0aGlzLmlneEZvck9mKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWNhbGNPbkNvbnRhaW5lckNoYW5nZShjaGFuZ2VzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fZGlmZmVyKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VzID0gdGhpcy5fZGlmZmVyLmRpZmYodGhpcy5pZ3hGb3JPZik7XG4gICAgICAgICAgICBpZiAoY2hhbmdlcykge1xuICAgICAgICAgICAgICAgIC8vICByZS1pbml0IGNhY2hlLlxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pZ3hGb3JPZikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVNpemVDYWNoZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXBwbHlDaGFuZ2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVTY3JvbGxPZmZzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRhdGFDaGFuZ2VkLmVtaXQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNoaWZ0cyB0aGUgc2Nyb2xsIHRodW1iIHBvc2l0aW9uLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnBhcmVudFZpcnREaXIuYWRkU2Nyb2xsVG9wKDUpO1xuICAgICAqIGBgYFxuICAgICAqIEBwYXJhbSBhZGRUb3AgbmVnYXRpdmUgdmFsdWUgdG8gc2Nyb2xsIHVwIGFuZCBwb3NpdGl2ZSB0byBzY3JvbGwgZG93bjtcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkU2Nyb2xsVG9wKGFkZFRvcDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChhZGRUb3AgPT09IDAgJiYgdGhpcy5pZ3hGb3JTY3JvbGxPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3JpZ2luYWxWaXJ0U2Nyb2xsVG9wID0gdGhpcy5fdmlydFNjcm9sbFRvcDtcbiAgICAgICAgY29uc3QgY29udGFpbmVyU2l6ZSA9IHBhcnNlSW50KHRoaXMuaWd4Rm9yQ29udGFpbmVyU2l6ZSwgMTApO1xuICAgICAgICBjb25zdCBtYXhWaXJ0U2Nyb2xsVG9wID0gdGhpcy5fdmlydEhlaWdodCAtIGNvbnRhaW5lclNpemU7XG5cbiAgICAgICAgdGhpcy5fYlNjcm9sbEludGVybmFsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fdmlydFNjcm9sbFRvcCArPSBhZGRUb3A7XG4gICAgICAgIHRoaXMuX3ZpcnRTY3JvbGxUb3AgPSB0aGlzLl92aXJ0U2Nyb2xsVG9wID4gMCA/XG4gICAgICAgICAgICAodGhpcy5fdmlydFNjcm9sbFRvcCA8IG1heFZpcnRTY3JvbGxUb3AgPyB0aGlzLl92aXJ0U2Nyb2xsVG9wIDogbWF4VmlydFNjcm9sbFRvcCkgOlxuICAgICAgICAgICAgMDtcblxuICAgICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uICs9IGFkZFRvcCAvIHRoaXMuX3ZpcnRIZWlnaHRSYXRpbztcbiAgICAgICAgaWYgKE1hdGguYWJzKGFkZFRvcCAvIHRoaXMuX3ZpcnRIZWlnaHRSYXRpbykgPCAxKSB7XG4gICAgICAgICAgICAvLyBBY3R1YWwgc2Nyb2xsIGRlbHRhIHRoYXQgd2FzIGFkZGVkIGlzIHNtYWxsZXIgdGhhbiAxIGFuZCBvblNjcm9sbCBoYW5kbGVyIGRvZXNuJ3QgdHJpZ2dlciB3aGVuIHNjcm9sbGluZyA8IDFweFxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsT2Zmc2V0ID0gdGhpcy5maXhlZFVwZGF0ZUFsbEVsZW1lbnRzKHRoaXMuX3ZpcnRTY3JvbGxUb3ApO1xuICAgICAgICAgICAgLy8gc2Nyb2xsT2Zmc2V0ID0gc2Nyb2xsT2Zmc2V0ICE9PSBwYXJzZUludCh0aGlzLmlneEZvckl0ZW1TaXplLCAxMCkgPyBzY3JvbGxPZmZzZXQgOiAwO1xuICAgICAgICAgICAgdGhpcy5kYy5pbnN0YW5jZS5fdmlld0NvbnRhaW5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gLShzY3JvbGxPZmZzZXQpICsgJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1heFJlYWxTY3JvbGxUb3AgPSB0aGlzLnZoLmluc3RhbmNlLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgLSBjb250YWluZXJTaXplO1xuICAgICAgICBpZiAoKHRoaXMuX3ZpcnRTY3JvbGxUb3AgPiAwICYmIHRoaXMuc2Nyb2xsUG9zaXRpb24gPT09IDApIHx8XG4gICAgICAgICAgICAodGhpcy5fdmlydFNjcm9sbFRvcCA8IG1heFZpcnRTY3JvbGxUb3AgJiYgdGhpcy5zY3JvbGxQb3NpdGlvbiA9PT0gbWF4UmVhbFNjcm9sbFRvcCkpIHtcbiAgICAgICAgICAgIC8vIEFjdHVhbCBzY3JvbGwgcG9zaXRpb24gaXMgYXQgdGhlIHRvcCBvciBib3R0b20sIGJ1dCB2aXJ0dWFsIG9uZSBpcyBub3QgYXQgdGhlIHRvcCBvciBib3R0b20gKHRoZXJlJ3MgbW9yZSB0byBzY3JvbGwpXG4gICAgICAgICAgICAvLyBSZWNhbGN1bGF0ZSBhY3R1YWwgc2Nyb2xsIHBvc2l0aW9uIGJhc2VkIG9uIHRoZSB2aXJ0dWFsIHNjcm9sbC5cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb24gPSB0aGlzLl92aXJ0U2Nyb2xsVG9wIC8gdGhpcy5fdmlydEhlaWdodFJhdGlvO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3ZpcnRTY3JvbGxUb3AgPT09IDAgJiYgdGhpcy5zY3JvbGxQb3NpdGlvbiA+IDApIHtcbiAgICAgICAgICAgIC8vIEFjdHVhbCBzY3JvbGwgcG9zaXRpb24gaXMgbm90IGF0IHRoZSB0b3AsIGJ1dCB2aXJ0dWFsIHNjcm9sbCBpcy4gSnVzdCB1cGRhdGUgdGhlIGFjdHVhbCBzY3JvbGxcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb24gPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3ZpcnRTY3JvbGxUb3AgPT09IG1heFZpcnRTY3JvbGxUb3AgJiYgdGhpcy5zY3JvbGxQb3NpdGlvbiA8IG1heFJlYWxTY3JvbGxUb3ApIHtcbiAgICAgICAgICAgIC8vIEFjdHVhbCBzY3JvbGwgcG9zaXRpb24gaXMgbm90IGF0IHRoZSBib3R0b20sIGJ1dCB2aXJ0dWFsIHNjcm9sbCBpcy4gSnVzdCB1cGRhdGUgdGhlIGFjdWFsIHNjcm9sbFxuICAgICAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvbiA9IG1heFJlYWxTY3JvbGxUb3A7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpcnRTY3JvbGxUb3AgIT09IG9yaWdpbmFsVmlydFNjcm9sbFRvcDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGxzIHRvIHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMucGFyZW50VmlydERpci5zY3JvbGxUbyg1KTtcbiAgICAgKiBgYGBcbiAgICAgKiBAcGFyYW0gaW5kZXhcbiAgICAgKi9cbiAgICBwdWJsaWMgc2Nyb2xsVG8oaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+ICh0aGlzLmlzUmVtb3RlID8gdGhpcy50b3RhbEl0ZW1Db3VudCA6IHRoaXMuaWd4Rm9yT2YubGVuZ3RoKSAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250YWluZXJTaXplID0gcGFyc2VJbnQodGhpcy5pZ3hGb3JDb250YWluZXJTaXplLCAxMCk7XG4gICAgICAgIGNvbnN0IGlzUHJldkl0ZW0gPSBpbmRleCA8IHRoaXMuc3RhdGUuc3RhcnRJbmRleCB8fCB0aGlzLnNjcm9sbFBvc2l0aW9uID4gdGhpcy5zaXplc0NhY2hlW2luZGV4XTtcbiAgICAgICAgbGV0IG5leHRTY3JvbGwgPSBpc1ByZXZJdGVtID8gdGhpcy5zaXplc0NhY2hlW2luZGV4XSA6IHRoaXMuc2l6ZXNDYWNoZVtpbmRleCArIDFdIC0gY29udGFpbmVyU2l6ZTtcbiAgICAgICAgaWYgKG5leHRTY3JvbGwgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvbiA9IG5leHRTY3JvbGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtYXhWaXJ0U2Nyb2xsVG9wID0gdGhpcy5fdmlydEhlaWdodCAtIGNvbnRhaW5lclNpemU7XG4gICAgICAgICAgICBpZiAobmV4dFNjcm9sbCA+IG1heFZpcnRTY3JvbGxUb3ApIHtcbiAgICAgICAgICAgICAgICBuZXh0U2Nyb2xsID0gbWF4VmlydFNjcm9sbFRvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2JTY3JvbGxJbnRlcm5hbCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl92aXJ0U2Nyb2xsVG9wID0gbmV4dFNjcm9sbDtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb24gPSB0aGlzLl92aXJ0U2Nyb2xsVG9wIC8gdGhpcy5fdmlydEhlaWdodFJhdGlvO1xuICAgICAgICAgICAgdGhpcy5fYWRqdXN0VG9JbmRleCA9ICFpc1ByZXZJdGVtID8gaW5kZXggOiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xscyBieSBvbmUgaXRlbSBpbnRvIHRoZSBhcHByb3ByaWF0ZSBuZXh0IGRpcmVjdGlvbi5cbiAgICAgKiBGb3IgXCJob3Jpem9udGFsXCIgb3JpZW50YXRpb24gdGhhdCB3aWxsIGJlIHRoZSByaWdodCBjb2x1bW4gYW5kIGZvciBcInZlcnRpY2FsXCIgdGhhdCBpcyB0aGUgbG93ZXIgcm93LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnBhcmVudFZpcnREaXIuc2Nyb2xsTmV4dCgpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBzY3JvbGxOZXh0KCkge1xuICAgICAgICBjb25zdCBzY3IgPSBNYXRoLmNlaWwodGhpcy5zY3JvbGxQb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IGVuZEluZGV4ID0gdGhpcy5nZXRJbmRleEF0KFxuICAgICAgICAgICAgc2NyICsgcGFyc2VJbnQodGhpcy5pZ3hGb3JDb250YWluZXJTaXplLCAxMCksXG4gICAgICAgICAgICB0aGlzLnNpemVzQ2FjaGUsXG4gICAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG8oZW5kSW5kZXgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbHMgYnkgb25lIGl0ZW0gaW50byB0aGUgYXBwcm9wcmlhdGUgcHJldmlvdXMgZGlyZWN0aW9uLlxuICAgICAqIEZvciBcImhvcml6b250YWxcIiBvcmllbnRhdGlvbiB0aGF0IHdpbGwgYmUgdGhlIGxlZnQgY29sdW1uIGFuZCBmb3IgXCJ2ZXJ0aWNhbFwiIHRoYXQgaXMgdGhlIHVwcGVyIHJvdy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5wYXJlbnRWaXJ0RGlyLnNjcm9sbFByZXYoKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2Nyb2xsUHJldigpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxUbyh0aGlzLnN0YXRlLnN0YXJ0SW5kZXggLSAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGxzIGJ5IG9uZSBwYWdlIGludG8gdGhlIGFwcHJvcHJpYXRlIG5leHQgZGlyZWN0aW9uLlxuICAgICAqIEZvciBcImhvcml6b250YWxcIiBvcmllbnRhdGlvbiB0aGF0IHdpbGwgYmUgb25lIHZpZXcgdG8gdGhlIHJpZ2h0IGFuZCBmb3IgXCJ2ZXJ0aWNhbFwiIHRoYXQgaXMgb25lIHZpZXcgdG8gdGhlIGJvdHRvbS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5wYXJlbnRWaXJ0RGlyLnNjcm9sbE5leHRQYWdlKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHNjcm9sbE5leHRQYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5pZ3hGb3JTY3JvbGxPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uICs9IHBhcnNlSW50KHRoaXMuaWd4Rm9yQ29udGFpbmVyU2l6ZSwgMTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRTY3JvbGxUb3AocGFyc2VJbnQodGhpcy5pZ3hGb3JDb250YWluZXJTaXplLCAxMCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xscyBieSBvbmUgcGFnZSBpbnRvIHRoZSBhcHByb3ByaWF0ZSBwcmV2aW91cyBkaXJlY3Rpb24uXG4gICAgICogRm9yIFwiaG9yaXpvbnRhbFwiIG9yaWVudGF0aW9uIHRoYXQgd2lsbCBiZSBvbmUgdmlldyB0byB0aGUgbGVmdCBhbmQgZm9yIFwidmVydGljYWxcIiB0aGF0IGlzIG9uZSB2aWV3IHRvIHRoZSB0b3AuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMucGFyZW50VmlydERpci5zY3JvbGxQcmV2UGFnZSgpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBzY3JvbGxQcmV2UGFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvbiAtPSBwYXJzZUludCh0aGlzLmlneEZvckNvbnRhaW5lclNpemUsIDEwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclNpemUgPSAocGFyc2VJbnQodGhpcy5pZ3hGb3JDb250YWluZXJTaXplLCAxMCkpO1xuICAgICAgICAgICAgdGhpcy5hZGRTY3JvbGxUb3AoLWNvbnRhaW5lclNpemUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDb2x1bW5TY3JvbGxMZWZ0KGNvbEluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNpemVzQ2FjaGVbY29sSW5kZXhdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIHZlcnRpY2FsIHNjcm9sbGJhciBET00gZWxlbWVudC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5wYXJlbnRWaXJ0RGlyLmdldFZlcnRpY2FsU2Nyb2xsKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldFZlcnRpY2FsU2Nyb2xsKCkge1xuICAgICAgICBpZiAodGhpcy52aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmguaW5zdGFuY2UuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiBpdGVtcyB0aGF0IGFyZSBmdWxseSB2aXNpYmxlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnBhcmVudFZpcnREaXIuZ2V0SXRlbUNvdW50SW5WaWV3KCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldEl0ZW1Db3VudEluVmlldygpIHtcbiAgICAgICAgbGV0IHN0YXJ0SW5kZXggPSB0aGlzLmdldEluZGV4QXQoXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uLFxuICAgICAgICAgICAgdGhpcy5zaXplc0NhY2hlLFxuICAgICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxQb3NpdGlvbiAtIHRoaXMuc2l6ZXNDYWNoZVtzdGFydEluZGV4XSA+IDApIHtcbiAgICAgICAgICAgIC8vIGZpc3J0IGl0ZW0gaXMgbm90IGZ1bGx5IGluIHZpZXdcbiAgICAgICAgICAgIHN0YXJ0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbmRJbmRleCA9IHRoaXMuZ2V0SW5kZXhBdChcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb24gKyBwYXJzZUludCh0aGlzLmlneEZvckNvbnRhaW5lclNpemUsIDEwKSxcbiAgICAgICAgICAgIHRoaXMuc2l6ZXNDYWNoZSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVuZEluZGV4IC0gc3RhcnRJbmRleDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBob3Jpem9udGFsIHNjcm9sbGJhciBET00gZWxlbWVudC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5wYXJlbnRWaXJ0RGlyLmdldEhvcml6b250YWxTY3JvbGwoKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0SG9yaXpvbnRhbFNjcm9sbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudCh0aGlzLl92aWV3Q29udGFpbmVyLCAnaWd4LWhvcml6b250YWwtdmlydHVhbC1oZWxwZXInKSB8fCB0aGlzLmhTY3JvbGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc2l6ZSBvZiB0aGUgZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnBhcmVudFZpcnREaXIuZ2V0U2l6ZUF0KDEpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRTaXplQXQoaW5kZXg6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5zaXplc0NhY2hlW2luZGV4ICsgMV0gLSB0aGlzLnNpemVzQ2FjaGVbaW5kZXhdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNjcm9sbCBvZmZzZXQgb2YgdGhlIGVsZW1lbnQgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5wYXJlbnRWaXJ0RGlyLmdldFNjcm9sbEZvckluZGV4KDEpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRTY3JvbGxGb3JJbmRleChpbmRleDogbnVtYmVyLCBib3R0b20/OiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclNpemUgPSBwYXJzZUludCh0aGlzLmlneEZvckNvbnRhaW5lclNpemUsIDEwKTtcbiAgICAgICAgY29uc3Qgc2Nyb2xsID0gYm90dG9tID8gTWF0aC5tYXgoMCwgdGhpcy5zaXplc0NhY2hlW2luZGV4ICsgMV0gLSBjb250YWluZXJTaXplKSA6IHRoaXMuc2l6ZXNDYWNoZVtpbmRleF07XG4gICAgICAgIHJldHVybiBzY3JvbGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gc2Nyb2xsaW5nIHZlcnRpY2FsbHlcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25TY3JvbGwoZXZlbnQpIHtcbiAgICAgICAgLyogaW4gY2VydGFpbiBzaXR1YXRpb25zIHRoaXMgbWF5IGJlIGNhbGxlZCB3aGVuIG5vIHNjcm9sbGJhciBpcyB2aXNpYmxlICovXG4gICAgICAgIGlmICghcGFyc2VJbnQodGhpcy52aC5pbnN0YW5jZS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0LCAxMCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclNpemUgPSBwYXJzZUludCh0aGlzLmlneEZvckNvbnRhaW5lclNpemUsIDEwKTtcbiAgICAgICAgY29uc3QgbWF4UmVhbFNjcm9sbFRvcCA9IGV2ZW50LnRhcmdldC5jaGlsZHJlblswXS5zY3JvbGxIZWlnaHQgLSBjb250YWluZXJTaXplO1xuICAgICAgICBjb25zdCByZWFsUGVyY2VudFNjcm9sbGVkID0gZXZlbnQudGFyZ2V0LnNjcm9sbFRvcCAvIG1heFJlYWxTY3JvbGxUb3A7XG4gICAgICAgIGlmICghdGhpcy5fYlNjcm9sbEludGVybmFsKSB7XG4gICAgICAgICAgICBjb25zdCBtYXhWaXJ0U2Nyb2xsVG9wID0gdGhpcy5fdmlydEhlaWdodCAtIGNvbnRhaW5lclNpemU7XG4gICAgICAgICAgICB0aGlzLl92aXJ0U2Nyb2xsVG9wID0gcmVhbFBlcmNlbnRTY3JvbGxlZCAqIG1heFZpcnRTY3JvbGxUb3A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9iU2Nyb2xsSW50ZXJuYWwgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zY3JvbGxQb3NpdGlvbiA9IHRoaXMuX3ZpcnRTY3JvbGxUb3A7XG4gICAgICAgIGNvbnN0IHByZXZTdGFydEluZGV4ID0gdGhpcy5zdGF0ZS5zdGFydEluZGV4O1xuICAgICAgICBjb25zdCBzY3JvbGxPZmZzZXQgPSB0aGlzLmZpeGVkVXBkYXRlQWxsRWxlbWVudHModGhpcy5fdmlydFNjcm9sbFRvcCk7XG5cbiAgICAgICAgdGhpcy5kYy5pbnN0YW5jZS5fdmlld0NvbnRhaW5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gLShzY3JvbGxPZmZzZXQpICsgJ3B4JztcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgaGVpZ2h0L3dpZHRoIGhhcyBjaGFuZ2VzIGluIHZpZXdzLlxuICAgICAgICAgICAgdGhpcy5yZWNhbGNVcGRhdGVTaXplcygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kYy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIGlmIChwcmV2U3RhcnRJbmRleCAhPT0gdGhpcy5zdGF0ZS5zdGFydEluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2h1bmtMb2FkLmVtaXQodGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogRnVuY3Rpb24gdGhhdCByZWNhY3VsYXRlcyBhbmQgdXBkYXRlcyBjYWNoZSBzaXplcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVjYWxjVXBkYXRlU2l6ZXMoKSB7XG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/XG4gICAgICAgICAgICB0aGlzLmlneEZvclNpemVQcm9wTmFtZSA6ICdoZWlnaHQnO1xuICAgICAgICBjb25zdCBkaWZmcyA9IFtdO1xuICAgICAgICBsZXQgdG90YWxEaWZmID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9lbWJlZGRlZFZpZXdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5fZW1iZWRkZWRWaWV3c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHJOb2RlID0gdmlldy5yb290Tm9kZXMuZmluZCgobm9kZSkgPT4gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpO1xuICAgICAgICAgICAgaWYgKHJOb2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaCA9IHJOb2RlLm9mZnNldEhlaWdodCA/IHJOb2RlLm9mZnNldEhlaWdodCA6IHBhcnNlSW50KHRoaXMuaWd4Rm9ySXRlbVNpemUsIDEwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RhdGUuc3RhcnRJbmRleCArIGk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzUmVtb3RlICYmICF0aGlzLmlneEZvck9mW2luZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkVmFsID0gZGltZW5zaW9uID09PSAnaGVpZ2h0JyA/IHRoaXMuaGVpZ2h0Q2FjaGVbaW5kZXhdIDogdGhpcy5pZ3hGb3JPZltpbmRleF1bZGltZW5zaW9uXTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdWYWwgPSBkaW1lbnNpb24gPT09ICdoZWlnaHQnID8gaCA6IHJOb2RlLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgICAgIGlmIChkaW1lbnNpb24gPT09ICdoZWlnaHQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0Q2FjaGVbaW5kZXhdID0gbmV3VmFsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWd4Rm9yT2ZbaW5kZXhdW2RpbWVuc2lvbl0gPSBuZXdWYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJEaWZmID0gbmV3VmFsIC0gb2xkVmFsO1xuICAgICAgICAgICAgICAgIGRpZmZzLnB1c2goY3VyckRpZmYpO1xuICAgICAgICAgICAgICAgIHRvdGFsRGlmZiArPSBjdXJyRGlmZjtcbiAgICAgICAgICAgICAgICB0aGlzLnNpemVzQ2FjaGVbaW5kZXggKyAxXSArPSB0b3RhbERpZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXBkYXRlIGNhY2hlXG4gICAgICAgIGlmIChNYXRoLmFicyh0b3RhbERpZmYpID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IHRoaXMuc3RhdGUuc3RhcnRJbmRleCArIHRoaXMuc3RhdGUuY2h1bmtTaXplICsgMTsgaiA8IHRoaXMuc2l6ZXNDYWNoZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZXNDYWNoZVtqXSArPSB0b3RhbERpZmY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBzY3JCYXIgaGVpZ2h0cy93aWR0aHNcbiAgICAgICAgICAgIGlmICh0aGlzLmlneEZvclNjcm9sbE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbFdpZHRoID0gcGFyc2VJbnQodGhpcy5oU2Nyb2xsLmNoaWxkcmVuWzBdLnN0eWxlLndpZHRoLCAxMCkgKyB0b3RhbERpZmY7XG4gICAgICAgICAgICAgICAgdGhpcy5oU2Nyb2xsLmNoaWxkcmVuWzBdLnN0eWxlLndpZHRoID0gdG90YWxXaWR0aCArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWR1Y2VyID0gKGFjYywgdmFsKSA9PiBhY2MgKyB2YWw7XG4gICAgICAgICAgICBpZiAodGhpcy5pZ3hGb3JTY3JvbGxPcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjclRvQm90dG9tID0gdGhpcy5faXNTY3JvbGxlZFRvQm90dG9tICYmICF0aGlzLmRjLmluc3RhbmNlLm5vdFZpcnR1YWw7XG4gICAgICAgICAgICAgICAgY29uc3QgaFN1bSA9IHRoaXMuaGVpZ2h0Q2FjaGUucmVkdWNlKHJlZHVjZXIpO1xuICAgICAgICAgICAgICAgIGlmIChoU3VtID4gdGhpcy5fbWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZpcnRIZWlnaHRSYXRpbyA9IGhTdW0gLyB0aGlzLl9tYXhIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudmguaW5zdGFuY2UuaGVpZ2h0ID0gTWF0aC5taW4odGhpcy52aC5pbnN0YW5jZS5oZWlnaHQgKyB0b3RhbERpZmYsIHRoaXMuX21heEhlaWdodCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdmlydEhlaWdodCA9IGhTdW07XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZoLmluc3RhbmNlLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZoLmluc3RhbmNlLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzY3JUb0JvdHRvbSAmJiAhdGhpcy5faXNBdEJvdHRvbUluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclNpemUgPSBwYXJzZUludCh0aGlzLmlneEZvckNvbnRhaW5lclNpemUsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4VmlydFNjcm9sbFRvcCA9IHRoaXMuX3ZpcnRIZWlnaHQgLSBjb250YWluZXJTaXplO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9iU2Nyb2xsSW50ZXJuYWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl92aXJ0U2Nyb2xsVG9wID0gbWF4VmlydFNjcm9sbFRvcDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvbiA9IG1heFZpcnRTY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FkanVzdFRvSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW4gY2FzZSBzY3JvbGxlZCB0byBzcGVjaWZpYyBpbmRleCB3aGVyZSBhZnRlciBzY3JvbGwgaGVpZ2h0cyBhcmUgY2hhbmdlZFxuICAgICAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIGFkanVzdCB0aGUgb2Zmc2V0cyBzbyB0aGF0IGl0ZW0gaXMgbGFzdCBpbiB2aWV3LlxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVzVG9JbmRleCA9IHRoaXMuX2FkanVzdFRvSW5kZXggLSB0aGlzLnN0YXRlLnN0YXJ0SW5kZXggKyAxO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdW1EaWZmcyA9IGRpZmZzLnNsaWNlKDAsIHVwZGF0ZXNUb0luZGV4KS5yZWR1Y2UocmVkdWNlcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJPZmZzZXQgPSBwYXJzZUludCh0aGlzLmRjLmluc3RhbmNlLl92aWV3Q29udGFpbmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS50b3AsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYy5pbnN0YW5jZS5fdmlld0NvbnRhaW5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gKGN1cnJPZmZzZXQgLSBzdW1EaWZmcykgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGp1c3RUb0luZGV4ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZpeGVkVXBkYXRlQWxsRWxlbWVudHMoaW5TY3JvbGxUb3A6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5pc1JlbW90ZSA/IHRoaXMudG90YWxJdGVtQ291bnQgOiB0aGlzLmlneEZvck9mLmxlbmd0aDtcbiAgICAgICAgbGV0IG5ld1N0YXJ0ID0gdGhpcy5nZXRJbmRleEF0KFxuICAgICAgICAgICAgaW5TY3JvbGxUb3AsXG4gICAgICAgICAgICB0aGlzLnNpemVzQ2FjaGUsXG4gICAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIGlmIChuZXdTdGFydCArIHRoaXMuc3RhdGUuY2h1bmtTaXplID4gY291bnQpIHtcbiAgICAgICAgICAgIG5ld1N0YXJ0ID0gY291bnQgLSB0aGlzLnN0YXRlLmNodW5rU2l6ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2U3RhcnQgPSB0aGlzLnN0YXRlLnN0YXJ0SW5kZXg7XG4gICAgICAgIGNvbnN0IGRpZmYgPSBuZXdTdGFydCAtIHRoaXMuc3RhdGUuc3RhcnRJbmRleDtcbiAgICAgICAgdGhpcy5zdGF0ZS5zdGFydEluZGV4ID0gbmV3U3RhcnQ7XG4gICAgICAgIGlmIChkaWZmKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2h1bmtQcmVsb2FkLmVtaXQodGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNSZW1vdGUpIHtcbiAgICAgICAgICAgICAgICAvKnJlY2FsY3VsYXRlIGFuZCBhcHBseSBwYWdlIHNpemUuKi9cbiAgICAgICAgICAgICAgICBpZiAoZGlmZiA+IDAgJiYgZGlmZiA8PSB0aGlzLk1BWF9QRVJGX1NDUk9MTF9ESUZGKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUFwcGx5U2Nyb2xsTmV4dChwcmV2U3RhcnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlmZiA8IDAgJiYgTWF0aC5hYnMoZGlmZikgPD0gdGhpcy5NQVhfUEVSRl9TQ1JPTExfRElGRikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVBcHBseVNjcm9sbFByZXYocHJldlN0YXJ0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpeGVkQXBwbHlTY3JvbGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluU2Nyb2xsVG9wIC0gdGhpcy5zaXplc0NhY2hlW3RoaXMuc3RhdGUuc3RhcnRJbmRleF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIFRoZSBmdW5jdGlvbiBhcHBsaWVzIGFuIG9wdGltaXplZCBzdGF0ZSBjaGFuZ2UgZm9yIHNjcm9sbGluZyBkb3duL3JpZ2h0IGVtcGxveWluZyBjb250ZXh0IGNoYW5nZSB3aXRoIHZpZXcgcmVhcnJhbmdlbWVudFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBtb3ZlQXBwbHlTY3JvbGxOZXh0KHByZXZJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gcHJldkluZGV4ICsgdGhpcy5zdGF0ZS5jaHVua1NpemU7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IHN0YXJ0ICsgdGhpcy5zdGF0ZS5zdGFydEluZGV4IC0gcHJldkluZGV4ICYmIHRoaXMuaWd4Rm9yT2ZbaV0gIT09IHVuZGVmaW5lZDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuaWd4Rm9yT2ZbaV07XG4gICAgICAgICAgICBjb25zdCBlbWJWaWV3ID0gdGhpcy5fZW1iZWRkZWRWaWV3cy5zaGlmdCgpO1xuICAgICAgICAgICAgY29uc3QgY250eCA9IGVtYlZpZXcuY29udGV4dDtcbiAgICAgICAgICAgIGNudHguJGltcGxpY2l0ID0gaW5wdXQ7XG4gICAgICAgICAgICBjbnR4LmluZGV4ID0gdGhpcy5nZXRDb250ZXh0SW5kZXgoaW5wdXQpO1xuICAgICAgICAgICAgY250eC5jb3VudCA9IHRoaXMuaWd4Rm9yT2YubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgdmlldzogVmlld1JlZiA9IHRoaXMuZGMuaW5zdGFuY2UuX3Zjci5kZXRhY2goMCk7XG4gICAgICAgICAgICB0aGlzLmRjLmluc3RhbmNlLl92Y3IuaW5zZXJ0KHZpZXcpO1xuICAgICAgICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3cy5wdXNoKGVtYlZpZXcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIFRoZSBmdW5jdGlvbiBhcHBsaWVzIGFuIG9wdGltaXplZCBzdGF0ZSBjaGFuZ2UgZm9yIHNjcm9sbGluZyB1cC9sZWZ0IGVtcGxveWluZyBjb250ZXh0IGNoYW5nZSB3aXRoIHZpZXcgcmVhcnJhbmdlbWVudFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBtb3ZlQXBwbHlTY3JvbGxQcmV2KHByZXZJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGkgPSBwcmV2SW5kZXggLSAxOyBpID49IHRoaXMuc3RhdGUuc3RhcnRJbmRleCAmJiB0aGlzLmlneEZvck9mW2ldICE9PSB1bmRlZmluZWQ7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmlneEZvck9mW2ldO1xuICAgICAgICAgICAgY29uc3QgZW1iVmlldyA9IHRoaXMuX2VtYmVkZGVkVmlld3MucG9wKCk7XG4gICAgICAgICAgICBjb25zdCBjbnR4ID0gZW1iVmlldy5jb250ZXh0O1xuICAgICAgICAgICAgY250eC4kaW1wbGljaXQgPSBpbnB1dDtcbiAgICAgICAgICAgIGNudHguaW5kZXggPSB0aGlzLmdldENvbnRleHRJbmRleChpbnB1dCk7XG4gICAgICAgICAgICBjb25zdCB2aWV3OiBWaWV3UmVmID0gdGhpcy5kYy5pbnN0YW5jZS5fdmNyLmRldGFjaCh0aGlzLmRjLmluc3RhbmNlLl92Y3IubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB0aGlzLmRjLmluc3RhbmNlLl92Y3IuaW5zZXJ0KHZpZXcsIDApO1xuICAgICAgICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3cy51bnNoaWZ0KGVtYlZpZXcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICovXG4gICAgcHJvdGVjdGVkIGdldENvbnRleHRJbmRleChpbnB1dCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1JlbW90ZSA/IHRoaXMuc3RhdGUuc3RhcnRJbmRleCArIHRoaXMuaWd4Rm9yT2YuaW5kZXhPZihpbnB1dCkgOiB0aGlzLmlneEZvck9mLmluZGV4T2YoaW5wdXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBUaGUgZnVuY3Rpb24gYXBwbGllcyBhbiBvcHRpbWl6ZWQgc3RhdGUgY2hhbmdlIHRocm91Z2ggY29udGV4dCBjaGFuZ2UgZm9yIGVhY2ggdmlld1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBmaXhlZEFwcGx5U2Nyb2xsKCk6IHZvaWQge1xuICAgICAgICBsZXQgaiA9IDA7XG4gICAgICAgIGNvbnN0IGVuZEluZGV4ID0gdGhpcy5zdGF0ZS5zdGFydEluZGV4ICsgdGhpcy5zdGF0ZS5jaHVua1NpemU7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnN0YXRlLnN0YXJ0SW5kZXg7IGkgPCBlbmRJbmRleCAmJiB0aGlzLmlneEZvck9mW2ldICE9PSB1bmRlZmluZWQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmlneEZvck9mW2ldO1xuICAgICAgICAgICAgY29uc3QgZW1iVmlldyA9IHRoaXMuX2VtYmVkZGVkVmlld3NbaisrXTtcbiAgICAgICAgICAgIGNvbnN0IGNudHggPSAoZW1iVmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55PikuY29udGV4dDtcbiAgICAgICAgICAgIGNudHguJGltcGxpY2l0ID0gaW5wdXQ7XG4gICAgICAgICAgICBjbnR4LmluZGV4ID0gdGhpcy5nZXRDb250ZXh0SW5kZXgoaW5wdXQpO1xuICAgICAgICAgICAgY250eC5jb3VudCA9IHRoaXMuaWd4Rm9yT2YubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gc2Nyb2xsaW5nIGhvcml6b250YWxseVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvbkhTY3JvbGwoZXZlbnQpIHtcbiAgICAgICAgLyogaW4gY2VydGFpbiBzaXR1YXRpb25zIHRoaXMgbWF5IGJlIGNhbGxlZCB3aGVuIG5vIHNjcm9sbGJhciBpcyB2aXNpYmxlICovXG4gICAgICAgIGlmICghcGFyc2VJbnQodGhpcy5oU2Nyb2xsLmNoaWxkcmVuWzBdLnN0eWxlLndpZHRoLCAxMCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zY3JvbGxQb3NpdGlvbiA9IGV2ZW50LnRhcmdldC5zY3JvbGxMZWZ0O1xuICAgICAgICBjb25zdCBwcmV2U3RhcnRJbmRleCA9IHRoaXMuc3RhdGUuc3RhcnRJbmRleDtcbiAgICAgICAgLy8gVXBkYXRpbmcgaG9yaXpvbnRhbCBjaHVua3NcbiAgICAgICAgY29uc3Qgc2Nyb2xsT2Zmc2V0ID0gdGhpcy5maXhlZFVwZGF0ZUFsbEVsZW1lbnRzKHRoaXMuX3Njcm9sbFBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5kYy5pbnN0YW5jZS5fdmlld0NvbnRhaW5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IC1zY3JvbGxPZmZzZXQgKyAncHgnO1xuXG4gICAgICAgIHRoaXMuZGMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICBpZiAocHJldlN0YXJ0SW5kZXggIT09IHRoaXMuc3RhdGUuc3RhcnRJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5vbkNodW5rTG9hZC5lbWl0KHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZnVuY3Rpb24gdXNlZCB0byB0cmFjayBjaGFuZ2VzIGluIHRoZSBpdGVtcyBjb2xsZWN0aW9uLlxuICAgICAqIEJ5IGRlZmF1bHQgdGhlIG9iamVjdCByZWZlcmVuY2VzIGFyZSBjb21wYXJlZC4gSG93ZXZlciB0aGlzIGNhbiBiZSBvcHRpbWl6ZWQgaWYgeW91IGhhdmUgdW5pcXVlIGlkZW50aWZpZXJcbiAgICAgKiB2YWx1ZSB0aGF0IGNhbiBiZSB1c2VkIGZvciB0aGUgY29tcGFyaXNvbiBpbnN0ZWFkIG9mIHRoZSBvYmplY3QgcmVmIG9yIGlmIHlvdSBoYXZlIHNvbWUgb3RoZXIgcHJvcGVydHkgdmFsdWVzXG4gICAgICogaW4gdGhlIGl0ZW0gb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHRyYWNrZWQgZm9yIGNoYW5nZXMuXG4gICAgICogVGhpcyBvcHRpb24gaXMgc2ltaWxhciB0byBuZ0ZvclRyYWNrQnkuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHRyYWNrRnVuYyA9IHRoaXMucGFyZW50VmlydERpci5pZ3hGb3JUcmFja0J5O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGlneEZvclRyYWNrQnkoKTogVHJhY2tCeUZ1bmN0aW9uPFQ+IHsgcmV0dXJuIHRoaXMuX3RyYWNrQnlGbjsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZnVuY3Rpb24gdXNlZCB0byB0cmFjayBjaGFuZ2VzIGluIHRoZSBpdGVtcyBjb2xsZWN0aW9uLlxuICAgICAqIFRoaXMgZnVuY3Rpb24gY2FuIGJlIHNldCBpbiBzY2VuYXJpb3Mgd2hlcmUgeW91IHdhbnQgdG8gb3B0aW1pemUgb3JcbiAgICAgKiBjdXN0b21pemUgdGhlIHRyYWNraW5nIG9mIGNoYW5nZXMgZm9yIHRoZSBpdGVtcyBpbiB0aGUgY29sbGVjdGlvbi5cbiAgICAgKiBUaGUgaWd4Rm9yVHJhY2tCeSBmdW5jdGlvbiB0YWtlcyB0aGUgaW5kZXggYW5kIHRoZSBjdXJyZW50IGl0ZW0gYXMgYXJndW1lbnRzIGFuZCBuZWVkcyB0byByZXR1cm4gdGhlIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGlzIGl0ZW0uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMucGFyZW50VmlydERpci5pZ3hGb3JUcmFja0J5ID0gKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICogICAgICByZXR1cm4gaXRlbS5pZCArIGl0ZW0ud2lkdGg7XG4gICAgICogfTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBzZXQgaWd4Rm9yVHJhY2tCeShmbjogVHJhY2tCeUZ1bmN0aW9uPFQ+KSB7IHRoaXMuX3RyYWNrQnlGbiA9IGZuOyB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9hcHBseUNoYW5nZXMoKSB7XG4gICAgICAgIGNvbnN0IHByZXZDaHVua1NpemUgPSB0aGlzLnN0YXRlLmNodW5rU2l6ZTtcbiAgICAgICAgdGhpcy5hcHBseUNodW5rU2l6ZUNoYW5nZSgpO1xuICAgICAgICB0aGlzLl9yZWNhbGNTY3JvbGxCYXJTaXplKCk7XG4gICAgICAgIGlmICh0aGlzLmlneEZvck9mICYmIHRoaXMuaWd4Rm9yT2YubGVuZ3RoICYmIHRoaXMuZGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVtYmVkZGVkVmlld0NvcHkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLl9lbWJlZGRlZFZpZXdzKTtcbiAgICAgICAgICAgIGxldCBzdGFydEluZGV4ID0gdGhpcy5zdGF0ZS5zdGFydEluZGV4O1xuICAgICAgICAgICAgbGV0IGVuZEluZGV4ID0gdGhpcy5zdGF0ZS5jaHVua1NpemUgKyB0aGlzLnN0YXRlLnN0YXJ0SW5kZXg7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1JlbW90ZSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGVuZEluZGV4ID0gdGhpcy5pZ3hGb3JPZi5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8IGVuZEluZGV4ICYmIHRoaXMuaWd4Rm9yT2ZbaV0gIT09IHVuZGVmaW5lZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmlneEZvck9mW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVtYlZpZXcgPSBlbWJlZGRlZFZpZXdDb3B5LnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY250eCA9IChlbWJWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5jb250ZXh0O1xuICAgICAgICAgICAgICAgIGNudHguJGltcGxpY2l0ID0gaW5wdXQ7XG4gICAgICAgICAgICAgICAgY250eC5pbmRleCA9IHRoaXMuZ2V0Q29udGV4dEluZGV4KGlucHV0KTtcbiAgICAgICAgICAgICAgICBjbnR4LmNvdW50ID0gdGhpcy5pZ3hGb3JPZi5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRjLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIGlmIChwcmV2Q2h1bmtTaXplICE9PSB0aGlzLnN0YXRlLmNodW5rU2l6ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25DaHVua0xvYWQuZW1pdCh0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlneEZvclNjcm9sbE9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNhbGNVcGRhdGVTaXplcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfY2FsY01heEJyb3dzZXJIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZGl2LnN0eWxlO1xuICAgICAgICBzdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHN0eWxlLnRvcCA9ICc5OTk5OTk5OTk5OTk5OTk5cHgnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIGNvbnN0IHNpemUgPSBNYXRoLmFicyhkaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbJ3RvcCddKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpO1xuICAgICAgICByZXR1cm4gc2l6ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogUmVjYWxjdWxhdGVzIHRoZSBjaHVua1NpemUgYmFzZWQgb24gY3VycmVudCBzdGFydEluZGV4IGFuZCByZXR1cm5zIHRoZSBuZXcgc2l6ZS5cbiAgICAgKiBUaGlzIHNob3VsZCBiZSBjYWxsZWQgYWZ0ZXIgdGhpcy5zdGF0ZS5zdGFydEluZGV4IGlzIHVwZGF0ZWQsIG5vdCBiZWZvcmUuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9jYWxjdWxhdGVDaHVua1NpemUoKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGNodW5rU2l6ZSA9IDA7XG4gICAgICAgIGlmICh0aGlzLmlneEZvckNvbnRhaW5lclNpemUgIT09IG51bGwgJiYgdGhpcy5pZ3hGb3JDb250YWluZXJTaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zaXplc0NhY2hlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0U2l6ZXNDYWNoZSh0aGlzLmlneEZvck9mKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNodW5rU2l6ZSA9IHRoaXMuX2NhbGNNYXhDaHVua1NpemUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlneEZvck9mICYmIGNodW5rU2l6ZSA+IHRoaXMuaWd4Rm9yT2YubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2h1bmtTaXplID0gdGhpcy5pZ3hGb3JPZi5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pZ3hGb3JPZikge1xuICAgICAgICAgICAgICAgIGNodW5rU2l6ZSA9IHRoaXMuaWd4Rm9yT2YubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaHVua1NpemU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRFbGVtZW50KHZpZXdyZWYsIG5vZGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSB2aWV3cmVmLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKG5vZGVOYW1lKTtcbiAgICAgICAgcmV0dXJuIGVsZW0ubGVuZ3RoID4gMCA/IGVsZW1bMF0gOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdFNpemVzQ2FjaGUoaXRlbXM6IGFueVtdKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHRvdGFsU2l6ZSA9IDA7XG4gICAgICAgIGxldCBzaXplID0gMDtcbiAgICAgICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5pZ3hGb3JTY3JvbGxPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID9cbiAgICAgICAgICAgIHRoaXMuaWd4Rm9yU2l6ZVByb3BOYW1lIDogJ2hlaWdodCc7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgdGhpcy5zaXplc0NhY2hlID0gW107XG4gICAgICAgIHRoaXMuaGVpZ2h0Q2FjaGUgPSBbXTtcbiAgICAgICAgdGhpcy5zaXplc0NhY2hlLnB1c2goMCk7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5pc1JlbW90ZSA/IHRoaXMudG90YWxJdGVtQ291bnQgOiBpdGVtcy5sZW5ndGg7XG4gICAgICAgIGZvciAoaTsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGlmIChkaW1lbnNpb24gPT09ICdoZWlnaHQnKSB7XG4gICAgICAgICAgICAgICAgLy8gY29sc1tpXVtkaW1lbnNpb25dID0gcGFyc2VJbnQodGhpcy5pZ3hGb3JJdGVtU2l6ZSwgMTApIHx8IDA7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IHBhcnNlSW50KHRoaXMuaWd4Rm9ySXRlbVNpemUsIDEwKSB8fCAwO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0Q2FjaGUucHVzaChzaXplKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IHRoaXMuX2dldEl0ZW1TaXplKGl0ZW1zW2ldLCBkaW1lbnNpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG90YWxTaXplICs9IHNpemU7XG4gICAgICAgICAgICB0aGlzLnNpemVzQ2FjaGUucHVzaCh0b3RhbFNpemUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3RhbFNpemU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF91cGRhdGVTaXplQ2FjaGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlneEZvclNjcm9sbE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFNpemVzQ2FjaGUodGhpcy5pZ3hGb3JPZik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2xkSGVpZ2h0ID0gdGhpcy5oZWlnaHRDYWNoZS5sZW5ndGggPiAwID8gdGhpcy5oZWlnaHRDYWNoZS5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MgKyB2YWwpIDogMDtcbiAgICAgICAgY29uc3QgbmV3SGVpZ2h0ID0gdGhpcy5pbml0U2l6ZXNDYWNoZSh0aGlzLmlneEZvck9mKTtcblxuICAgICAgICBjb25zdCBkaWZmID0gb2xkSGVpZ2h0IC0gbmV3SGVpZ2h0O1xuXG4gICAgICAgIC8vIGlmIGRhdGEgaGFzIGJlZW4gY2hhbmdlZCB3aGlsZSBjb250YWluZXIgaXMgc2Nyb2xsZWRcbiAgICAgICAgLy8gc2hvdWxkIHVwZGF0ZSBzY3JvbGwgdG9wL2xlZnQgYWNjb3JkaW5nIHRvIGNoYW5nZSBzbyB0aGF0IHNhbWUgc3RhcnRJbmRleCBpcyBpbiB2aWV3XG4gICAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IDAgJiYgdGhpcy5zY3JvbGxQb3NpdGlvbiA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVjYWxjVXBkYXRlU2l6ZXMoKTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHBhcnNlSW50KHRoaXMuZGMuaW5zdGFuY2UuX3ZpZXdDb250YWluZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCwgMTApO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvbiA9IHRoaXMuc2l6ZXNDYWNoZVt0aGlzLnN0YXRlLnN0YXJ0SW5kZXhdIC0gb2Zmc2V0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfY2FsY01heENodW5rU2l6ZSgpOiBudW1iZXIge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCBsZW5ndGggPSAwO1xuICAgICAgICBsZXQgbWF4TGVuZ3RoID0gMDtcbiAgICAgICAgY29uc3QgYXJyID0gW107XG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICBjb25zdCBhdmFpbGFibGVTaXplID0gcGFyc2VJbnQodGhpcy5pZ3hGb3JDb250YWluZXJTaXplLCAxMCk7XG4gICAgICAgIGlmICghYXZhaWxhYmxlU2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5pZ3hGb3JTY3JvbGxPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID9cbiAgICAgICAgICAgIHRoaXMuaWd4Rm9yU2l6ZVByb3BOYW1lIDogJ2hlaWdodCc7XG4gICAgICAgIGNvbnN0IHJlZHVjZXIgPSAoYWNjdW11bGF0b3IsIGN1cnJlbnRJdGVtKSA9PiBhY2N1bXVsYXRvciArIHRoaXMuX2dldEl0ZW1TaXplKGN1cnJlbnRJdGVtLCBkaW1lbnNpb24pO1xuICAgICAgICBmb3IgKGk7IGkgPCB0aGlzLmlneEZvck9mLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaWd4Rm9yT2ZbaV07XG4gICAgICAgICAgICBpZiAoZGltZW5zaW9uID09PSAnaGVpZ2h0Jykge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB7IHZhbHVlOiB0aGlzLmlneEZvck9mW2ldLCBoZWlnaHQ6IHRoaXMuaGVpZ2h0Q2FjaGVbaV0gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNpemUgPSBkaW1lbnNpb24gPT09ICdoZWlnaHQnID9cbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodENhY2hlW2ldIDpcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRJdGVtU2l6ZShpdGVtLCBkaW1lbnNpb24pO1xuICAgICAgICAgICAgc3VtID0gYXJyLnJlZHVjZShyZWR1Y2VyLCBzaXplKTtcbiAgICAgICAgICAgIGlmIChzdW0gPCBhdmFpbGFibGVTaXplKSB7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gYXJyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gdGhpcy5pZ3hGb3JPZi5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlYWNoZWQgZW5kIHdpdGhvdXQgZXhjZWVkaW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIGluY2x1ZGUgcHJldiBpdGVtcyB1bnRpbCBzaXplIGlzIGZpbGxlZCBvciBmaXJzdCBpdGVtIGlzIHJlYWNoZWQuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJJdGVtID0gZGltZW5zaW9uID09PSAnaGVpZ2h0JyA/IGFyclswXS52YWx1ZSA6IGFyclswXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZJbmRleCA9IHRoaXMuaWd4Rm9yT2YuaW5kZXhPZihjdXJJdGVtKSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChwcmV2SW5kZXggPj0gMCAmJiBzdW0gPD0gYXZhaWxhYmxlU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VySXRlbSA9IGRpbWVuc2lvbiA9PT0gJ2hlaWdodCcgPyBhcnJbMF0udmFsdWUgOiBhcnJbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2SW5kZXggPSB0aGlzLmlneEZvck9mLmluZGV4T2YoY3VySXRlbSkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldkl0ZW0gPSB0aGlzLmlneEZvck9mW3ByZXZJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2U2l6ZSA9IGRpbWVuc2lvbiA9PT0gJ2hlaWdodCcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0Q2FjaGVbcHJldkluZGV4XSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQocHJldkl0ZW1bZGltZW5zaW9uXSwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VtID0gYXJyLnJlZHVjZShyZWR1Y2VyLCBwcmV2U2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIudW5zaGlmdChwcmV2SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICBsZW5ndGggPSBhcnIubGVuZ3RoICsgMTtcbiAgICAgICAgICAgICAgICBhcnIuc2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGggPSBsZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heExlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldEluZGV4QXQobGVmdCwgc2V0LCBpbmRleCkge1xuICAgICAgICBsZXQgc3RhcnQgPSAwO1xuICAgICAgICBsZXQgZW5kID0gc2V0Lmxlbmd0aCAtIDE7XG4gICAgICAgIGlmIChsZWZ0ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoc3RhcnQgPD0gZW5kKSB7XG4gICAgICAgICAgICBjb25zdCBtaWRJZHggPSBNYXRoLmZsb29yKChzdGFydCArIGVuZCkgLyAyKTtcbiAgICAgICAgICAgIGNvbnN0IG1pZExlZnQgPSBzZXRbbWlkSWR4XTtcbiAgICAgICAgICAgIGNvbnN0IGNtcCA9IGxlZnQgLSBtaWRMZWZ0O1xuICAgICAgICAgICAgaWYgKGNtcCA+IDApIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IG1pZElkeCArIDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNtcCA8IDApIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBtaWRJZHggLSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWlkSWR4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbmQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9yZWNhbGNTY3JvbGxCYXJTaXplKCkge1xuICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMuaXNSZW1vdGUgPyB0aGlzLnRvdGFsSXRlbUNvdW50IDogKHRoaXMuaWd4Rm9yT2YgPyB0aGlzLmlneEZvck9mLmxlbmd0aCA6IDApO1xuICAgICAgICB0aGlzLmRjLmluc3RhbmNlLm5vdFZpcnR1YWwgPSAhKHRoaXMuaWd4Rm9yQ29udGFpbmVyU2l6ZSAmJiB0aGlzLmRjICYmIHRoaXMuc3RhdGUuY2h1bmtTaXplIDwgY291bnQpO1xuICAgICAgICBpZiAodGhpcy5pZ3hGb3JTY3JvbGxPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBjb25zdCB0b3RhbFdpZHRoID0gdGhpcy5pZ3hGb3JDb250YWluZXJTaXplID8gdGhpcy5pbml0U2l6ZXNDYWNoZSh0aGlzLmlneEZvck9mKSA6IDA7XG4gICAgICAgICAgICB0aGlzLmhTY3JvbGwuc3R5bGUud2lkdGggPSB0aGlzLmlneEZvckNvbnRhaW5lclNpemUgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5oU2Nyb2xsLmNoaWxkcmVuWzBdLnN0eWxlLndpZHRoID0gdG90YWxXaWR0aCArICdweCc7XG4gICAgICAgICAgICBpZiAodG90YWxXaWR0aCA8PSBwYXJzZUludCh0aGlzLmlneEZvckNvbnRhaW5lclNpemUsIDEwKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlneEZvclNjcm9sbE9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICB0aGlzLnZoLmluc3RhbmNlLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBwYXJzZUludCh0aGlzLmlneEZvckNvbnRhaW5lclNpemUsIDEwKSArICdweCc7XG4gICAgICAgICAgICB0aGlzLnZoLmluc3RhbmNlLmhlaWdodCA9IHRoaXMuX2NhbGNIZWlnaHQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnZoLmluc3RhbmNlLmhlaWdodCA8PSBwYXJzZUludCh0aGlzLmlneEZvckNvbnRhaW5lclNpemUsIDEwKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9jYWxjSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIGxldCBoZWlnaHQ7XG4gICAgICAgIGlmICh0aGlzLmhlaWdodENhY2hlKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSB0aGlzLmhlaWdodENhY2hlLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYyArIHZhbCwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoZWlnaHQgPSB0aGlzLmluaXRTaXplc0NhY2hlKHRoaXMuaWd4Rm9yT2YpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZpcnRIZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGlmIChoZWlnaHQgPiB0aGlzLl9tYXhIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZpcnRIZWlnaHRSYXRpbyA9IGhlaWdodCAvIHRoaXMuX21heEhlaWdodDtcbiAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuX21heEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfcmVjYWxjT25Db250YWluZXJDaGFuZ2UoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmRjLmluc3RhbmNlLl92aWV3Q29udGFpbmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgdGhpcy5kYy5pbnN0YW5jZS5fdmlld0NvbnRhaW5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICBjb25zdCBwcmV2Q2h1bmtTaXplID0gdGhpcy5zdGF0ZS5jaHVua1NpemU7XG4gICAgICAgIHRoaXMuYXBwbHlDaHVua1NpemVDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5fcmVjYWxjU2Nyb2xsQmFyU2l6ZSgpO1xuICAgICAgICBpZiAocHJldkNodW5rU2l6ZSAhPT0gdGhpcy5zdGF0ZS5jaHVua1NpemUpIHtcbiAgICAgICAgICAgIHRoaXMub25DaHVua0xvYWQuZW1pdCh0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zaXplc0NhY2hlICYmIHRoaXMuaFNjcm9sbCkge1xuICAgICAgICAgICAgLy8gVXBkYXRpbmcgaG9yaXpvbnRhbCBjaHVua3MgYW5kIG9mZnNldHMgYmFzZWQgb24gdGhlIG5ldyBzY3JvbGxMZWZ0XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxPZmZzZXQgPSB0aGlzLmZpeGVkVXBkYXRlQWxsRWxlbWVudHModGhpcy5zY3JvbGxQb3NpdGlvbik7XG4gICAgICAgICAgICB0aGlzLmRjLmluc3RhbmNlLl92aWV3Q29udGFpbmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gLXNjcm9sbE9mZnNldCArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogUmVtb3ZlcyBhbiBlbGVtZW5ldCBmcm9tIHRoZSBlbWJlZGRlZCB2aWV3cyBhbmQgdXBkYXRlcyBjaHVua1NpemUuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHJlbW92ZUxhc3RFbGVtKCkge1xuICAgICAgICBjb25zdCBvbGRFbGVtID0gdGhpcy5fZW1iZWRkZWRWaWV3cy5wb3AoKTtcbiAgICAgICAgdGhpcy5vbkJlZm9yZVZpZXdEZXN0cm95ZWQuZW1pdChvbGRFbGVtKTtcbiAgICAgICAgb2xkRWxlbS5kZXN0cm95KCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZS5jaHVua1NpemUtLTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogSWYgdGhlcmUgZXhpc3RzIGFuIGVsZW1lbnQgdGhhdCB3ZSBjYW4gY3JlYXRlIGVtYmVkZGVkIHZpZXcgZm9yIGNyZWF0ZXMgaXQsIGFwcGVuZHMgaXQgYW5kIHVwZGF0ZXMgY2h1bmtTaXplXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFkZExhc3RFbGVtKCkge1xuICAgICAgICBsZXQgZWxlbUluZGV4ID0gdGhpcy5zdGF0ZS5zdGFydEluZGV4ICsgdGhpcy5zdGF0ZS5jaHVua1NpemU7XG4gICAgICAgIGlmICghdGhpcy5pc1JlbW90ZSAmJiAhdGhpcy5pZ3hGb3JPZikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsZW1JbmRleCA+PSB0aGlzLmlneEZvck9mLmxlbmd0aCkge1xuICAgICAgICAgICAgZWxlbUluZGV4ID0gdGhpcy5pZ3hGb3JPZi5sZW5ndGggLSB0aGlzLnN0YXRlLmNodW5rU2l6ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuaWd4Rm9yT2ZbZWxlbUluZGV4XTtcbiAgICAgICAgY29uc3QgZW1iZWRkZWRWaWV3ID0gdGhpcy5kYy5pbnN0YW5jZS5fdmNyLmNyZWF0ZUVtYmVkZGVkVmlldyhcbiAgICAgICAgICAgIHRoaXMuX3RlbXBsYXRlLFxuICAgICAgICAgICAgbmV3IElneEZvck9mQ29udGV4dDxUPihpbnB1dCwgdGhpcy5nZXRDb250ZXh0SW5kZXgoaW5wdXQpLCB0aGlzLmlneEZvck9mLmxlbmd0aClcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLl9lbWJlZGRlZFZpZXdzLnB1c2goZW1iZWRkZWRWaWV3KTtcbiAgICAgICAgdGhpcy5zdGF0ZS5jaHVua1NpemUrKztcblxuICAgICAgICB0aGlzLl96b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVjYWxjdWxhdGVzIGNodW5rU2l6ZSBhbmQgYWRkcy9yZW1vdmVzIGVsZW1lbnRzIGlmIG5lZWQgZHVlIHRvIHRoZSBjaGFuZ2UuXG4gICAgICogdGhpcy5zdGF0ZS5jaHVua1NpemUgaXMgdXBkYXRlZCBpbiBAYWRkTGFzdEVsZW0oKSBvciBAcmVtb3ZlTGFzdEVsZW0oKVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhcHBseUNodW5rU2l6ZUNoYW5nZSgpIHtcbiAgICAgICAgY29uc3QgY2h1bmtTaXplID0gdGhpcy5pc1JlbW90ZSA/ICh0aGlzLmlneEZvck9mID8gdGhpcy5pZ3hGb3JPZi5sZW5ndGggOiAwKSA6IHRoaXMuX2NhbGN1bGF0ZUNodW5rU2l6ZSgpO1xuICAgICAgICBpZiAoY2h1bmtTaXplID4gdGhpcy5zdGF0ZS5jaHVua1NpemUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBjaHVua1NpemUgLSB0aGlzLnN0YXRlLmNodW5rU2l6ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRMYXN0RWxlbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNodW5rU2l6ZSA8IHRoaXMuc3RhdGUuY2h1bmtTaXplKSB7XG4gICAgICAgICAgICBjb25zdCBkaWZmID0gdGhpcy5zdGF0ZS5jaHVua1NpemUgLSBjaHVua1NpemU7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmY7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTGFzdEVsZW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBfdXBkYXRlU2Nyb2xsT2Zmc2V0KCkge1xuICAgICAgICBpZiAodGhpcy5pZ3hGb3JTY3JvbGxPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVIU2Nyb2xsT2Zmc2V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVWU2Nyb2xsT2Zmc2V0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBfdXBkYXRlVlNjcm9sbE9mZnNldCgpIHtcbiAgICAgICAgbGV0IHNjcm9sbE9mZnNldCA9IDA7XG4gICAgICAgIGNvbnN0IHZTY3JvbGwgPSB0aGlzLnZoLmluc3RhbmNlLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgc2Nyb2xsT2Zmc2V0ID0gdlNjcm9sbCAmJiBwYXJzZUludCh2U2Nyb2xsLnN0eWxlLmhlaWdodCwgMTApID9cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb24gLSB0aGlzLnNpemVzQ2FjaGVbdGhpcy5zdGF0ZS5zdGFydEluZGV4XSA6IDA7XG4gICAgICAgIHRoaXMuZGMuaW5zdGFuY2UuX3ZpZXdDb250YWluZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IC0oc2Nyb2xsT2Zmc2V0KSArICdweCc7XG4gICAgfVxuICAgIHByaXZhdGUgX3VwZGF0ZUhTY3JvbGxPZmZzZXQoKSB7XG4gICAgICAgIGxldCBzY3JvbGxPZmZzZXQgPSAwO1xuICAgICAgICBzY3JvbGxPZmZzZXQgPSB0aGlzLmhTY3JvbGwgJiYgcGFyc2VJbnQodGhpcy5oU2Nyb2xsLmNoaWxkcmVuWzBdLnN0eWxlLndpZHRoLCAxMCkgP1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvbiAtIHRoaXMuc2l6ZXNDYWNoZVt0aGlzLnN0YXRlLnN0YXJ0SW5kZXhdIDogMDtcbiAgICAgICAgdGhpcy5kYy5pbnN0YW5jZS5fdmlld0NvbnRhaW5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IC1zY3JvbGxPZmZzZXQgKyAncHgnO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldEl0ZW1TaXplKGl0ZW0sIGRpbWVuc2lvbjogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgZGltID0gaXRlbVtkaW1lbnNpb25dO1xuICAgICAgICByZXR1cm4gdHlwZW9mIGRpbSA9PT0gJ251bWJlcicgPyBkaW0gOiBwYXJzZUludCh0aGlzLmlneEZvckl0ZW1TaXplLCAxMCkgfHwgMDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlTmFtZUZvckRlYnVnZ2luZyh0eXBlOiBhbnkpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5hbWUgPSAnbmFtZSc7XG4gICAgcmV0dXJuIHR5cGVbbmFtZV0gfHwgdHlwZW9mIHR5cGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZvck9mU3RhdGUge1xuICAgIHN0YXJ0SW5kZXg/OiBudW1iZXI7XG4gICAgY2h1bmtTaXplPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElGb3JPZkRhdGFDaGFuZ2luZ0V2ZW50QXJncyB7XG4gICAgY29udGFpbmVyU2l6ZTogbnVtYmVyO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hHcmlkRm9yXVtpZ3hHcmlkRm9yT2ZdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hHcmlkRm9yT2ZEaXJlY3RpdmU8VD4gZXh0ZW5kcyBJZ3hGb3JPZkRpcmVjdGl2ZTxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBEb0NoZWNrIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgX3RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxOZ0Zvck9mQ29udGV4dDxUPj4sXG4gICAgICAgIF9kaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsXG4gICAgICAgIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIF96b25lOiBOZ1pvbmUsXG4gICAgICAgIHByb3RlY3RlZCBzeW5jU2VydmljZTogSWd4Rm9yT2ZTeW5jU2VydmljZSkge1xuICAgICAgICBzdXBlcihfdmlld0NvbnRhaW5lciwgX3RlbXBsYXRlLCBfZGlmZmVycywgcmVzb2x2ZXIsIGNkciwgX3pvbmUpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGlneEdyaWRGb3JPZih2YWx1ZSkge1xuICAgICAgICB0aGlzLmlneEZvck9mID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGlneEdyaWRGb3JPZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWd4Rm9yT2Y7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKiBBbiBldmVudCB0aGF0IGlzIGVtaXR0ZWQgYWZ0ZXIgZGF0YSBoYXMgYmVlbiBjaGFuZ2VkIGJ1dCBiZWZvcmUgdGhlIHZpZXcgaXMgcmVmcmVzaGVkXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uRGF0YUNoYW5naW5nID0gbmV3IEV2ZW50RW1pdHRlcjxJRm9yT2ZEYXRhQ2hhbmdpbmdFdmVudEFyZ3M+KCk7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zeW5jU2VydmljZS5zZXRNYXN0ZXIodGhpcyk7XG4gICAgICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IGZvck9mID0gJ2lneEdyaWRGb3JPZic7XG4gICAgICAgIHRoaXMuc3luY1NlcnZpY2Uuc2V0TWFzdGVyKHRoaXMpO1xuICAgICAgICBpZiAoZm9yT2YgaW4gY2hhbmdlcykge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjaGFuZ2VzW2Zvck9mXS5jdXJyZW50VmFsdWU7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2RpZmZlciAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RpZmZlciA9IHRoaXMuX2RpZmZlcnMuZmluZCh2YWx1ZSkuY3JlYXRlKHRoaXMuaWd4Rm9yVHJhY2tCeSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBgQ2Fubm90IGZpbmQgYSBkaWZmZXIgc3VwcG9ydGluZyBvYmplY3QgXCIke3ZhbHVlfVwiIG9mIHR5cGUgXCIke2dldFR5cGVOYW1lRm9yRGVidWdnaW5nKHZhbHVlKX1cIi5cbiAgICAgICAgICAgICAgICAgICAgIE5nRm9yIG9ubHkgc3VwcG9ydHMgYmluZGluZyB0byBJdGVyYWJsZXMgc3VjaCBhcyBBcnJheXMuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlZmF1bHRJdGVtU2l6ZSA9ICdpZ3hGb3JJdGVtU2l6ZSc7XG4gICAgICAgIGlmIChkZWZhdWx0SXRlbVNpemUgaW4gY2hhbmdlcyAmJiAhY2hhbmdlc1tkZWZhdWx0SXRlbVNpemVdLmZpcnN0Q2hhbmdlICYmIHRoaXMuaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIC8vIGhhbmRsZSBkZWZhdWx0IGl0ZW0gc2l6ZSBjaGFuZ2VkLlxuICAgICAgICAgICAgdGhpcy5pbml0U2l6ZXNDYWNoZSh0aGlzLmlneEZvck9mKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250YWluZXJTaXplID0gJ2lneEZvckNvbnRhaW5lclNpemUnO1xuICAgICAgICBpZiAoY29udGFpbmVyU2l6ZSBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzW2NvbnRhaW5lclNpemVdLmZpcnN0Q2hhbmdlICYmIHRoaXMuaWd4Rm9yT2YpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlY2FsY09uQ29udGFpbmVyQ2hhbmdlKGNoYW5nZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgc2l6ZXNDYWNoZSgpOiBudW1iZXJbXSB7XG4gICAgICAgIGlmICh0aGlzLnN5bmNTZXJ2aWNlLmlzTWFzdGVyKHRoaXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZXNDYWNoZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zeW5jU2VydmljZS5zaXplc0NhY2hlKHRoaXMuaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb24pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIHNldCBzaXplc0NhY2hlKHZhbHVlOiBudW1iZXJbXSkge1xuICAgICAgICB0aGlzLl9zaXplc0NhY2hlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBpdGVtc0RpbWVuc2lvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IHRoaXMuaWd4Rm9yU2l6ZVByb3BOYW1lIDogJ2hlaWdodCc7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldEl0ZW1TaXplKGl0ZW0pIHtcbiAgICAgICAgbGV0IHNpemUgPSAwO1xuICAgICAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLmlneEZvclNjcm9sbE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgP1xuICAgICAgICAgICAgdGhpcy5pZ3hGb3JTaXplUHJvcE5hbWUgOiAnaGVpZ2h0JztcbiAgICAgICAgaWYgKGRpbWVuc2lvbiA9PT0gJ2hlaWdodCcpIHtcbiAgICAgICAgICAgIHNpemUgPSBwYXJzZUludCh0aGlzLmlneEZvckl0ZW1TaXplLCAxMCkgfHwgMDtcbiAgICAgICAgICAgIGlmIChpdGVtICYmIGl0ZW0uc3VtbWFyaWVzKSB7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IGl0ZW0ubWF4O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtICYmIGl0ZW0uZ3JvdXBzICYmIGl0ZW0uaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IGl0ZW0uaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2l6ZSA9IHBhcnNlSW50KGl0ZW1bZGltZW5zaW9uXSwgMTApIHx8IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNpemU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRTaXplc0NhY2hlKGl0ZW1zOiBhbnlbXSk6IG51bWJlciB7XG4gICAgICAgIGlmICghdGhpcy5zeW5jU2VydmljZS5pc01hc3Rlcih0aGlzKSkge1xuICAgICAgICAgICAgY29uc3QgbWFzdGVyU2l6ZXNDYWNoZSA9IHRoaXMuc3luY1NlcnZpY2Uuc2l6ZXNDYWNoZSh0aGlzLmlneEZvclNjcm9sbE9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBtYXN0ZXJTaXplc0NhY2hlW21hc3RlclNpemVzQ2FjaGUubGVuZ3RoIC0gMV07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRvdGFsU2l6ZSA9IDA7XG4gICAgICAgIGxldCBzaXplID0gMDtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB0aGlzLnNpemVzQ2FjaGUgPSBbXTtcbiAgICAgICAgdGhpcy5oZWlnaHRDYWNoZSA9IFtdO1xuICAgICAgICB0aGlzLnNpemVzQ2FjaGUucHVzaCgwKTtcbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLmlzUmVtb3RlID8gdGhpcy50b3RhbEl0ZW1Db3VudCA6IGl0ZW1zLmxlbmd0aDtcbiAgICAgICAgZm9yIChpOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgc2l6ZSA9IHRoaXMuZ2V0SXRlbVNpemUoaXRlbXNbaV0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNEaW1lbnNpb24gPT09ICdoZWlnaHQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHRDYWNoZS5wdXNoKHNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG90YWxTaXplICs9IHNpemU7XG4gICAgICAgICAgICB0aGlzLnNpemVzQ2FjaGUucHVzaCh0b3RhbFNpemUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3RhbFNpemU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF91cGRhdGVTaXplQ2FjaGUoY2hhbmdlczogSXRlcmFibGVDaGFuZ2VzPFQ+ID0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5pZ3hGb3JTY3JvbGxPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRTaXplc0NhY2hlKHRoaXMuaWd4Rm9yT2YpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2xkSGVpZ2h0ID0gdGhpcy5oZWlnaHRDYWNoZS5sZW5ndGggPiAwID8gdGhpcy5oZWlnaHRDYWNoZS5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MgKyB2YWwpIDogMDtcbiAgICAgICAgbGV0IG5ld0hlaWdodCA9IG9sZEhlaWdodDtcbiAgICAgICAgaWYgKGNoYW5nZXMgJiYgIXRoaXMuaXNSZW1vdGUpIHtcbiAgICAgICAgICAgIG5ld0hlaWdodCA9IHRoaXMuaGFuZGxlQ2FjaGVDaGFuZ2VzKGNoYW5nZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3SGVpZ2h0ID0gdGhpcy5pbml0U2l6ZXNDYWNoZSh0aGlzLmlneEZvck9mKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRpZmYgPSBvbGRIZWlnaHQgLSBuZXdIZWlnaHQ7XG5cbiAgICAgICAgLy8gaWYgZGF0YSBoYXMgYmVlbiBjaGFuZ2VkIHdoaWxlIGNvbnRhaW5lciBpcyBzY3JvbGxlZFxuICAgICAgICAvLyBzaG91bGQgdXBkYXRlIHNjcm9sbCB0b3AvbGVmdCBhY2NvcmRpbmcgdG8gY2hhbmdlIHNvIHRoYXQgc2FtZSBzdGFydEluZGV4IGlzIGluIHZpZXdcbiAgICAgICAgaWYgKE1hdGguYWJzKGRpZmYpID4gMCkge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY2FsY1VwZGF0ZVNpemVzKCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gcGFyc2VJbnQodGhpcy5kYy5pbnN0YW5jZS5fdmlld0NvbnRhaW5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wLCAxMCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsUG9zaXRpb24gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvbiA9IHRoaXMuc2l6ZXNDYWNoZVt0aGlzLnN0YXRlLnN0YXJ0SW5kZXhdIC0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVNjcm9sbE9mZnNldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhhbmRsZUNhY2hlQ2hhbmdlcyhjaGFuZ2VzOiBJdGVyYWJsZUNoYW5nZXM8VD4pIHtcbiAgICAgICAgY29uc3QgaWRlbnRpdHlDaGFuZ2VzID0gW107XG4gICAgICAgIGNvbnN0IG5ld0hlaWdodENhY2hlID0gW107XG4gICAgICAgIGNvbnN0IG5ld1NpemVzQ2FjaGUgPSBbXTtcbiAgICAgICAgbmV3U2l6ZXNDYWNoZS5wdXNoKDApO1xuICAgICAgICBsZXQgbmV3SGVpZ2h0ID0gMDtcblxuICAgICAgICAvLyBXaGVuIHRoZXJlIGFyZSBtb3JlIHRoYW4gb25lIHJlbW92ZWQgaXRlbXMgdGhlIGNoYW5nZXMgYXJlIG5vdCByZWxpYWJsZSBzbyB0aG9zZSB3aXRoIGlkZW50aXR5IGNoYW5nZSBzaG91bGQgYmUgZGVmYXVsdCBzaXplLlxuICAgICAgICBsZXQgbnVtUmVtb3ZlZEl0ZW1zID0gMDtcbiAgICAgICAgY2hhbmdlcy5mb3JFYWNoUmVtb3ZlZEl0ZW0oKCkgPT4gbnVtUmVtb3ZlZEl0ZW1zKyspO1xuXG4gICAgICAgIC8vIEdldCB0aGUgaWRlbnRpdHkgY2hhbmdlcyB0byBkZXRlcm1pbmUgbGF0ZXIgaWYgdGhvc2UgdGhhdCBoYXZlIGNoYW5nZWQgdGhlaXIgaW5kZXhlcyBzaG91bGQgYmUgYXNzaWduZWQgZGVmYXVsdCBpdGVtIHNpemUuXG4gICAgICAgIGNoYW5nZXMuZm9yRWFjaElkZW50aXR5Q2hhbmdlKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jdXJyZW50SW5kZXggIT09IGl0ZW0ucHJldmlvdXNJbmRleCkge1xuICAgICAgICAgICAgICAgIC8vIEZpbHRlciBvdXQgb25lcyB0aGF0IGhhdmUgbm90IGNoYW5nZWQgdGhlaXIgaW5kZXguXG4gICAgICAgICAgICAgICAgaWRlbnRpdHlDaGFuZ2VzW2l0ZW0uY3VycmVudEluZGV4XSA9IGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFByb2Nlc3NpbmcgZWFjaCBpdGVtIHRoYXQgaXMgcGFzc2VkIHRvIHRoZSBpZ3hGb3JPZiBzbyBmYXIgc2VlbSB0byBiZSBtb3N0IHJlbGlhYmxlLiBXZSBwYXJzZSB0aGUgdXBkYXRlZCBsaXN0IG9mIGl0ZW1zLlxuICAgICAgICBjaGFuZ2VzLmZvckVhY2hJdGVtKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5wcmV2aW91c0luZGV4ICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgKG51bVJlbW92ZWRJdGVtcyA8IDIgfHwgIWlkZW50aXR5Q2hhbmdlcy5sZW5ndGggfHwgaWRlbnRpdHlDaGFuZ2VzW2l0ZW0uY3VycmVudEluZGV4XSkpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXVzZSBjYWNoZSBvbiB0aG9zZSB3aG8gaGF2ZSBwcmV2aW91c0luZGV4LlxuICAgICAgICAgICAgICAgIC8vIFdoZW4gdGhlcmUgYXJlIG1vcmUgdGhhbiBvbmUgcmVtb3ZlZCBpdGVtcyBjdXJyZW50bHkgdGhlIGNoYW5nZXMgYXJlIG5vdCByZWFkYWJsZSBzbyBvbmVzIHdpdGggaWRlbnRpdHkgY2hhbmdlXG4gICAgICAgICAgICAgICAgLy8gc2hvdWxkIGJlIHJhY2FsY3VsYXRlZC5cbiAgICAgICAgICAgICAgICBuZXdIZWlnaHRDYWNoZVtpdGVtLmN1cnJlbnRJbmRleF0gPSB0aGlzLmhlaWdodENhY2hlW2l0ZW0ucHJldmlvdXNJbmRleF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiBkZWZhdWx0IGl0ZW0gc2l6ZS5cbiAgICAgICAgICAgICAgICBuZXdIZWlnaHRDYWNoZVtpdGVtLmN1cnJlbnRJbmRleF0gPSB0aGlzLmdldEl0ZW1TaXplKGl0ZW0uaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdTaXplc0NhY2hlW2l0ZW0uY3VycmVudEluZGV4ICsgMV0gPSBuZXdTaXplc0NhY2hlW2l0ZW0uY3VycmVudEluZGV4XSArIG5ld0hlaWdodENhY2hlW2l0ZW0uY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIG5ld0hlaWdodCArPSBuZXdIZWlnaHRDYWNoZVtpdGVtLmN1cnJlbnRJbmRleF07XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhlaWdodENhY2hlID0gbmV3SGVpZ2h0Q2FjaGU7XG4gICAgICAgIHRoaXMuc2l6ZXNDYWNoZSA9IG5ld1NpemVzQ2FjaGU7XG4gICAgICAgIHJldHVybiBuZXdIZWlnaHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBhc3N1bWVNYXN0ZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3NpemVzQ2FjaGUgPSB0aGlzLnN5bmNTZXJ2aWNlLnNpemVzQ2FjaGUodGhpcy5pZ3hGb3JTY3JvbGxPcmllbnRhdGlvbik7XG4gICAgICAgIHRoaXMuc3luY1NlcnZpY2Uuc2V0TWFzdGVyKHRoaXMsIHRydWUpO1xuICAgIH1cblxuICAgIG5nRG9DaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RpZmZlcikge1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlcyA9IHRoaXMuX2RpZmZlci5kaWZmKHRoaXMuaWd4Rm9yT2YpO1xuICAgICAgICAgICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcmdzOiBJRm9yT2ZEYXRhQ2hhbmdpbmdFdmVudEFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclNpemU6IHRoaXMuaWd4Rm9yQ29udGFpbmVyU2l6ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRhdGFDaGFuZ2luZy5lbWl0KGFyZ3MpO1xuICAgICAgICAgICAgICAgIC8vICByZS1pbml0IGNhY2hlLlxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pZ3hGb3JPZikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qIHdlIG5lZWQgdG8gcmVzZXQgdGhlIG1hc3RlciBkaXIgaWYgYWxsIHJvd3MgYXJlIHJlbW92ZWRcbiAgICAgICAgICAgICAgICAoZS5nLiBiZWNhdXNlIG9mIGZpbHRlcmluZyk7IGlmIGFsbCBjb2x1bW5zIGFyZSBoaWRkZW4sIHJvd3MgYXJlXG4gICAgICAgICAgICAgICAgc3RpbGwgcmVuZGVyZWQgZW1wdHksIHNvIHdlIHNob3VsZCBub3QgcmVzZXQgbWFzdGVyICovXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlneEZvck9mLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlneEZvclNjcm9sbE9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3luY1NlcnZpY2UucmVzZXRNYXN0ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zeW5jU2VydmljZS5zZXRNYXN0ZXIodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5pZ3hGb3JDb250YWluZXJTaXplID0gYXJncy5jb250YWluZXJTaXplO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVNpemVDYWNoZShjaGFuZ2VzKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBseUNoYW5nZXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVTY3JvbGxPZmZzZXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRGF0YUNoYW5nZWQuZW1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TY3JvbGwoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFwYXJzZUludCh0aGlzLnZoLmluc3RhbmNlLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQsIDEwKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyU2l6ZSA9IHBhcnNlSW50KHRoaXMuaWd4Rm9yQ29udGFpbmVyU2l6ZSwgMTApO1xuICAgICAgICBjb25zdCBtYXhSZWFsU2Nyb2xsVG9wID0gZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLnNjcm9sbEhlaWdodCAtIGNvbnRhaW5lclNpemU7XG4gICAgICAgIGNvbnN0IHJlYWxQZXJjZW50U2Nyb2xsZWQgPSBldmVudC50YXJnZXQuc2Nyb2xsVG9wIC8gbWF4UmVhbFNjcm9sbFRvcDtcbiAgICAgICAgaWYgKCF0aGlzLl9iU2Nyb2xsSW50ZXJuYWwpIHtcbiAgICAgICAgICAgIGNvbnN0IG1heFZpcnRTY3JvbGxUb3AgPSB0aGlzLl92aXJ0SGVpZ2h0IC0gY29udGFpbmVyU2l6ZTtcbiAgICAgICAgICAgIHRoaXMuX3ZpcnRTY3JvbGxUb3AgPSByZWFsUGVyY2VudFNjcm9sbGVkICogbWF4VmlydFNjcm9sbFRvcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2JTY3JvbGxJbnRlcm5hbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Njcm9sbFBvc2l0aW9uID0gdGhpcy5fdmlydFNjcm9sbFRvcDtcbiAgICAgICAgY29uc3Qgc2Nyb2xsT2Zmc2V0ID0gdGhpcy5maXhlZFVwZGF0ZUFsbEVsZW1lbnRzKHRoaXMuX3ZpcnRTY3JvbGxUb3ApO1xuXG4gICAgICAgIHRoaXMuZGMuaW5zdGFuY2UuX3ZpZXdDb250YWluZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IC0oc2Nyb2xsT2Zmc2V0KSArICdweCc7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlY2FsY1VwZGF0ZVNpemVzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uSFNjcm9sbChzY3JvbGxBbW91bnQpIHtcbiAgICAgICAgLyogaW4gY2VydGFpbiBzaXR1YXRpb25zIHRoaXMgbWF5IGJlIGNhbGxlZCB3aGVuIG5vIHNjcm9sbGJhciBpcyB2aXNpYmxlICovXG4gICAgICAgIGlmICghdGhpcy5oU2Nyb2xsIHx8ICFwYXJzZUludCh0aGlzLmhTY3JvbGwuY2hpbGRyZW5bMF0uc3R5bGUud2lkdGgsIDEwKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Njcm9sbFBvc2l0aW9uID0gc2Nyb2xsQW1vdW50O1xuICAgICAgICAvLyBVcGRhdGluZyBob3Jpem9udGFsIGNodW5rc1xuICAgICAgICBjb25zdCBzY3JvbGxPZmZzZXQgPSB0aGlzLmZpeGVkVXBkYXRlQWxsRWxlbWVudHMoc2Nyb2xsQW1vdW50KTtcbiAgICAgICAgdGhpcy5kYy5pbnN0YW5jZS5fdmlld0NvbnRhaW5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IC1zY3JvbGxPZmZzZXQgKyAncHgnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRMYXN0RWxlbSgpIHtcbiAgICAgICAgbGV0IGVsZW1JbmRleCA9IHRoaXMuc3RhdGUuc3RhcnRJbmRleCArIHRoaXMuc3RhdGUuY2h1bmtTaXplO1xuICAgICAgICBpZiAoIXRoaXMuaXNSZW1vdGUgJiYgIXRoaXMuaWd4Rm9yT2YpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGVtSW5kZXggPj0gdGhpcy5pZ3hGb3JPZi5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVsZW1JbmRleCA9IHRoaXMuaWd4Rm9yT2YubGVuZ3RoIC0gdGhpcy5zdGF0ZS5jaHVua1NpemU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmlneEZvck9mW2VsZW1JbmRleF07XG4gICAgICAgIGNvbnN0IGVtYmVkZGVkVmlldyA9IHRoaXMuZGMuaW5zdGFuY2UuX3Zjci5jcmVhdGVFbWJlZGRlZFZpZXcoXG4gICAgICAgICAgICB0aGlzLl90ZW1wbGF0ZSxcbiAgICAgICAgICAgIG5ldyBJZ3hGb3JPZkNvbnRleHQ8VD4oaW5wdXQsIHRoaXMuZ2V0Q29udGV4dEluZGV4KGlucHV0KSwgdGhpcy5pZ3hGb3JPZi5sZW5ndGgpXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3cy5wdXNoKGVtYmVkZGVkVmlldyk7XG4gICAgICAgIHRoaXMuc3RhdGUuY2h1bmtTaXplKys7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF91cGRhdGVWaWV3cyhwcmV2Q2h1bmtTaXplKSB7XG4gICAgICAgIGlmICh0aGlzLmlneEZvck9mICYmIHRoaXMuaWd4Rm9yT2YubGVuZ3RoICYmIHRoaXMuZGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVtYmVkZGVkVmlld0NvcHkgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLl9lbWJlZGRlZFZpZXdzKTtcbiAgICAgICAgICAgIGxldCBzdGFydEluZGV4O1xuICAgICAgICAgICAgbGV0IGVuZEluZGV4O1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNSZW1vdGUpIHtcbiAgICAgICAgICAgICAgICBzdGFydEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBlbmRJbmRleCA9IHRoaXMuaWd4Rm9yT2YubGVuZ3RoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydEluZGV4ID0gdGhpcy5nZXRJbmRleEF0KFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemVzQ2FjaGUsXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChzdGFydEluZGV4ICsgdGhpcy5zdGF0ZS5jaHVua1NpemUgPiB0aGlzLmlneEZvck9mLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydEluZGV4ID0gdGhpcy5pZ3hGb3JPZi5sZW5ndGggLSB0aGlzLnN0YXRlLmNodW5rU2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdGFydEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICAgICAgICAgICAgICBlbmRJbmRleCA9IHRoaXMuc3RhdGUuY2h1bmtTaXplICsgdGhpcy5zdGF0ZS5zdGFydEluZGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8IGVuZEluZGV4ICYmIHRoaXMuaWd4Rm9yT2ZbaV0gIT09IHVuZGVmaW5lZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmlneEZvck9mW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVtYlZpZXcgPSBlbWJlZGRlZFZpZXdDb3B5LnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY250eCA9IChlbWJWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5jb250ZXh0O1xuICAgICAgICAgICAgICAgIGNudHguJGltcGxpY2l0ID0gaW5wdXQ7XG4gICAgICAgICAgICAgICAgY250eC5pbmRleCA9IHRoaXMuZ2V0Q29udGV4dEluZGV4KGlucHV0KTtcbiAgICAgICAgICAgICAgICBjbnR4LmNvdW50ID0gdGhpcy5pZ3hGb3JPZi5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJldkNodW5rU2l6ZSAhPT0gdGhpcy5zdGF0ZS5jaHVua1NpemUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2h1bmtMb2FkLmVtaXQodGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pZ3hGb3JTY3JvbGxPcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjYWxjVXBkYXRlU2l6ZXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgX2FwcGx5Q2hhbmdlcygpIHtcbiAgICAgICAgY29uc3QgcHJldkNodW5rU2l6ZSA9IHRoaXMuc3RhdGUuY2h1bmtTaXplO1xuICAgICAgICB0aGlzLmFwcGx5Q2h1bmtTaXplQ2hhbmdlKCk7XG4gICAgICAgIHRoaXMuX3JlY2FsY1Njcm9sbEJhclNpemUoKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlVmlld3MocHJldkNodW5rU2l6ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfY2FsY01heENodW5rU2l6ZSgpOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5zeW5jU2VydmljZS5pc01hc3Rlcih0aGlzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLl9jYWxjTWF4Q2h1bmtTaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc3luY1NlcnZpY2UuY2h1bmtTaXplKHRoaXMuaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb24pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSWd4Rm9yT2ZEaXJlY3RpdmUsIElneEdyaWRGb3JPZkRpcmVjdGl2ZSwgRGlzcGxheUNvbnRhaW5lckNvbXBvbmVudCwgVmlydHVhbEhlbHBlckNvbXBvbmVudCwgSFZpcnR1YWxIZWxwZXJDb21wb25lbnRdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW0Rpc3BsYXlDb250YWluZXJDb21wb25lbnQsIFZpcnR1YWxIZWxwZXJDb21wb25lbnQsIEhWaXJ0dWFsSGVscGVyQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbSWd4Rm9yT2ZEaXJlY3RpdmUsIElneEdyaWRGb3JPZkRpcmVjdGl2ZV0sXG4gICAgaW1wb3J0czogW0lneFNjcm9sbEluZXJ0aWFNb2R1bGUsIENvbW1vbk1vZHVsZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBJZ3hGb3JPZk1vZHVsZSB7XG59XG4iXX0=