/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, NgModule, Output } from '@angular/core';
import { IgxIconModule } from '../icon/index';
/** @type {?} */
let NEXT_ID = 0;
/** @enum {number} */
const Direction = {
    NONE: 0, NEXT: 1, PREV: 2,
};
export { Direction };
Direction[Direction.NONE] = 'NONE';
Direction[Direction.NEXT] = 'NEXT';
Direction[Direction.PREV] = 'PREV';
/**
 * **Ignite UI for Angular Carousel** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/carousel.html)
 *
 * The Ignite UI Carousel is used to browse or navigate through a collection of slides. Slides can contain custom
 * content such as images or cards and be used for things such as on-boarding tutorials or page-based interfaces.
 * It can be used as a separate fullscreen element or inside another component.
 *
 * Example:
 * ```html
 * <igx-carousel>
 *   <igx-slide>
 *     <h3>First Slide Header</h3>
 *     <p>First slide Content</p>
 *   <igx-slide>
 *   <igx-slide>
 *     <h3>Second Slide Header</h3>
 *     <p>Second Slide Content</p>
 * </igx-carousel>
 * ```
 */
export class IgxCarouselComponent {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
        /**
         * Returns the `role` attribute of the carousel.
         * ```typescript
         * let carouselRole =  this.carousel.role;
         * ```
         * \@memberof IgxCarouselComponent
         */
        this.role = 'region';
        /**
         * Sets the `id` of the carousel.
         * If not set, the `id` of the first carousel component will be `"igx-carousel-0"`.
         * ```html
         * <igx-carousel id="my-first-carousel"></igx-carousel>
         * ```
         * \@memberof IgxCarouselComponent
         */
        this.id = `igx-carousel-${NEXT_ID++}`;
        /**
         * Sets whether the carousel should `loop` back to the first slide after reaching the last slide.
         * Default value is `true`.
         * ```html
         * <igx-carousel [loop]="false"></igx-carousel>
         * ```
         * \@memberOf IgxCarouselComponent
         */
        this.loop = true;
        /**
         * Sets whether the carousel will `pause` the slide transitions on user interactions.
         * Default value is `true`.
         * ```html
         *  <igx-carousel [pause]="false"></igx-carousel>
         * ```
         * \@memberOf IgxCarouselComponent
         */
        this.pause = true;
        /**
         * Controls whether the carousel should render the left/right `navigation` buttons.
         * Default value is `true`.
         * ```html
         * <igx-carousel [navigation] = "false"></igx-carousel>
         * ```
         * \@memberOf IgxCarouselComponent
         */
        this.navigation = true;
        /**
         * An event that is emitted after a slide transition has happened.
         * Provides references to the `IgxCarouselComponent` and `IgxSlideComponent` as event arguments.
         * ```html
         * <igx-carousel (onSlideChanged)="onSlideChanged($event)"></igx-carousel>
         * ```
         * \@memberOf IgxCarouselComponent
         */
        this.onSlideChanged = new EventEmitter();
        /**
         * An event that is emitted after a slide has been added to the carousel.
         * Provides references to the `IgxCarouselComponent` and `IgxSlideComponent` as event arguments.
         * ```html
         * <igx-carousel (onSlideAdded)="onSlideAdded($event)"></igx-carousel>
         * ```
         * \@memberOf IgxCarouselComponent
         */
        this.onSlideAdded = new EventEmitter();
        /**
         * An event that is emitted after a slide has been removed from the carousel.
         * Provides references to the `IgxCarouselComponent` and `IgxSlideComponent` as event arguments.
         * ```html
         * <igx-carousel (onSlideRemoved)="onSlideRemoved($event)"></igx-carousel>
         * ```
         * \@memberOf IgxCarouselComponent
         */
        this.onSlideRemoved = new EventEmitter();
        /**
         * An event that is emitted after the carousel has been paused.
         * Provides a reference to the `IgxCarouselComponent` as an event argument.
         * ```html
         * <igx-carousel (onCarouselPaused)="onCarouselPaused($event)"></igx-carousel>
         * ```
         * \@memberOf IgxCarouselComponent
         */
        this.onCarouselPaused = new EventEmitter();
        /**
         * An event that is emitted after the carousel has resumed transitioning between `slides`.
         * Provides a reference to the `IgxCarouselComponent` as an event argument.
         * ```html
         * <igx-carousel (onCarouselPlaying)="onCarouselPlaying($event)"></igx-carousel>
         * ```
         * \@memberOf IgxCarouselComponent
         */
        this.onCarouselPlaying = new EventEmitter();
        /**
         * The collection of `slides` currently in the carousel.
         * ```typescript
         * let slides: IgxSlideComponent[] = this.carousel.slides;
         * ```
         * \@memberOf IgxCarouselComponent
         */
        this.slides = [];
        this._total = 0;
    }
    /**
     * Returns the time `interval` in milliseconds before the slide changes.
     * ```typescript
     * let timeInterval = this.carousel.interval;
     * ```
     * \@memberof IgxCarouselComponent
     * @return {?}
     */
    get interval() {
        return this._interval;
    }
    /**
     * Sets the time `interval` in milliseconds before the slide changes.
     * If not set, the carousel will not change `slides` automatically.
     * ```html
     * <igx-carousel [interval] = "1000"></carousel>
     * ```
     * \@memberof IgxCarouselComponent
     * @param {?} value
     * @return {?}
     */
    set interval(value) {
        this._interval = +value;
        this._restartInterval();
    }
    /**
     * Returns the `tabIndex` of the carousel component.
     * ```typescript
     * let tabIndex =  this.carousel.tabIndex;
     * ```
     * \@memberof IgxCarouselComponent
     * @return {?}
     */
    get tabIndex() {
        return 0;
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed = true;
        if (this._lastInterval) {
            clearInterval(this._lastInterval);
        }
    }
    /**
     * @hidden
     * \@memberof IgxCarouselComponent
     * @param {?} slide
     * @return {?}
     */
    setAriaLabel(slide) {
        return `Item ${slide.index + 1} of ${this.total}`;
    }
    /**
     * Returns the total number of `slides` in the carousel.
     * ```typescript
     * let slideCount =  this.carousel.total;
     * ```
     * \@memberOf IgxCarouselComponent
     * @return {?}
     */
    get total() {
        return this._total;
    }
    /**
     * The index of the slide being currently shown.
     * ```typescript
     * let currentSlideNumber =  this.carousel.current;
     * ```
     * \@memberOf IgxCarouselComponent
     * @return {?}
     */
    get current() {
        return !this._currentSlide ? 0 : this._currentSlide.index;
    }
    /**
     * Returns a boolean indicating if the carousel is playing.
     * ```typescript
     * let isPlaying =  this.carousel.isPlaying;
     * ```
     * \@memberOf IgxCarouselComponent
     * @return {?}
     */
    get isPlaying() {
        return this._playing;
    }
    /**
     * Returns а boolean indicating if the carousel is destroyed.
     * ```typescript
     * let isDestroyed =  this.carousel.isDestroyed;
     * ```
     * \@memberOf IgxCarouselComponent
     * @return {?}
     */
    get isDestroyed() {
        return this._destroyed;
    }
    /**
     * Returns a reference to the carousel element in the DOM.
     * ```typescript
     * let nativeElement =  this.carousel.nativeElement;
     * ```
     * \@memberof IgxCarouselComponent
     * @return {?}
     */
    get nativeElement() {
        return this.element.nativeElement;
    }
    /**
     * Returns the slide corresponding to the provided `index` or null.
     * ```typescript
     * let slide1 =  this.carousel.get(1);
     * ```
     * \@memberOf IgxCarouselComponent
     * @param {?} index
     * @return {?}
     */
    get(index) {
        for (const each of this.slides) {
            if (each.index === index) {
                return each;
            }
        }
    }
    /**
     * Adds a new slide to the carousel.
     * ```typescript
     * this.carousel.add(newSlide);
     * ```
     * \@memberOf IgxCarouselComponent
     * @param {?} slide
     * @return {?}
     */
    add(slide) {
        slide.index = this.total;
        this.slides.push(slide);
        this._total += 1;
        if (this.total === 1 || slide.active) {
            this.select(slide);
            if (this.total === 1) {
                this.play();
            }
        }
        else {
            slide.active = false;
        }
        this.onSlideAdded.emit({ carousel: this, slide });
    }
    /**
     * Removes a slide from the carousel.
     * ```typescript
     * this.carousel.remove(slide);
     * ```
     * \@memberOf IgxCarouselComponent
     * @param {?} slide
     * @return {?}
     */
    remove(slide) {
        if (slide && slide === this.get(slide.index)) { // check if the requested slide for delete is present in the carousel
            if (slide.index === this.current) {
                slide.active = false;
                this.next();
            }
            this.slides.splice(slide.index, 1);
            this._total -= 1;
            if (!this.total) {
                this._currentSlide = null;
                return;
            }
            for (let i = 0; i < this.total; i++) {
                this.slides[i].index = i;
            }
            this.onSlideRemoved.emit({ carousel: this, slide });
        }
    }
    /**
     * Kicks in a transition for a given slide with a given `direction`.
     * ```typescript
     * this.carousel.select(this.carousel.get(2), Direction.NEXT);
     * ```
     * \@memberOf IgxCarouselComponent
     * @param {?} slide
     * @param {?=} direction
     * @return {?}
     */
    select(slide, direction = Direction.NONE) {
        /** @type {?} */
        const newIndex = slide.index;
        if (direction === Direction.NONE) {
            direction = newIndex > this.current ? Direction.NEXT : Direction.PREV;
        }
        if (slide && slide !== this._currentSlide) {
            this._moveTo(slide, direction);
        }
    }
    /**
     * Transitions to the next slide in the carousel.
     * ```typescript
     * this.carousel.next();
     * ```
     * \@memberOf IgxCarouselComponent
     * @return {?}
     */
    next() {
        /** @type {?} */
        const index = (this.current + 1) % this.total;
        if (index === 0 && !this.loop) {
            this.stop();
            return;
        }
        return this.select(this.get(index), Direction.NEXT);
    }
    /**
     * Transitions to the previous slide in the carousel.
     * ```typescript
     * this.carousel.prev();
     * ```
     * \@memberOf IgxCarouselComponent
     * @return {?}
     */
    prev() {
        /** @type {?} */
        const index = this.current - 1 < 0 ?
            this.total - 1 : this.current - 1;
        if (!this.loop && index === this.total - 1) {
            this.stop();
            return;
        }
        return this.select(this.get(index), Direction.PREV);
    }
    /**
     * Resumes playing of the carousel if in paused state.
     * No operation otherwise.
     * ```typescript
     * this.carousel.play();
     * }
     * ```
     * \@memberOf IgxCarouselComponent
     * @return {?}
     */
    play() {
        if (!this._playing) {
            this._playing = true;
            this.onCarouselPlaying.emit(this);
            this._restartInterval();
        }
    }
    /**
     * Stops slide transitions if the `pause` option is set to `true`.
     * No operation otherwise.
     * ```typescript
     *  this.carousel.stop();
     * }
     * ```
     * \@memberOf IgxCarouselComponent
     * @return {?}
     */
    stop() {
        if (this.pause) {
            this._playing = false;
            this.onCarouselPaused.emit(this);
            this._resetInterval();
        }
    }
    /**
     * @hidden
     * @private
     * @param {?} slide
     * @param {?} direction
     * @return {?}
     */
    _moveTo(slide, direction) {
        if (this._destroyed) {
            return;
        }
        slide.direction = direction;
        slide.active = true;
        if (this._currentSlide) {
            this._currentSlide.direction = direction;
            this._currentSlide.active = false;
        }
        this._currentSlide = slide;
        this.onSlideChanged.emit({ carousel: this, slide });
        this._restartInterval();
    }
    /**
     * @hidden
     * @private
     * @return {?}
     */
    _resetInterval() {
        if (this._lastInterval) {
            clearInterval(this._lastInterval);
            this._lastInterval = null;
        }
    }
    /**
     * @hidden
     * @private
     * @return {?}
     */
    _restartInterval() {
        this._resetInterval();
        if (!isNaN(this.interval) && this.interval > 0) {
            this._lastInterval = setInterval(() => {
                /** @type {?} */
                const tick = +this.interval;
                if (this._playing && this.total && !isNaN(tick) && tick > 0) {
                    this.next();
                }
                else {
                    this.stop();
                }
            }, this.interval);
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    onKeydownArrowRight() {
        this.next();
        requestAnimationFrame(() => this.nativeElement.focus());
    }
    /**
     * @hidden
     * @return {?}
     */
    onKeydownArrowLeft() {
        this.prev();
        requestAnimationFrame(() => this.nativeElement.focus());
    }
}
IgxCarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-carousel',
                template: "<div tabindex=\"0\" aria-label=\"carousel\" class=\"igx-carousel\"\n        (mouseenter)=\"stop()\"\n        (mouseleave)=\"play()\"\n        (swipeleft)=\"next()\"\n        (swiperight)=\"prev()\"\n        (tap)=\"isPlaying ? stop() : play()\">\n    <ul class=\"igx-carousel__indicators\" [hidden]=\"slides.length <= 1\">\n        <li *ngFor=\"let slide of slides\" [attr.aria-label]=\"setAriaLabel(slide)\" [attr.aria-selected]=\"slide.active\" [class.active]=\"slide.active === true\"\n            (click)=\"select(slide)\"></li>\n    </ul>\n    <div class=\"igx-carousel__inner\" role=\"list\">\n        <ng-content></ng-content>\n    </div>\n    <div *ngIf=\"navigation\">\n        <a role=\"button\" tabindex=\"0\" class=\"igx-carousel__arrow--prev\" (click)=\"prev()\" [hidden]=\"!slides.length\">\n            <igx-icon fontSet=\"material\">arrow_back</igx-icon>\n        </a>\n        <a role=\"button\" tabindex=\"0\" class=\"igx-carousel__arrow--next\" (click)=\"next()\" [hidden]=\"!slides.length\">\n            <igx-icon fontSet=\"material\">arrow_forward</igx-icon>\n        </a>\n    </div>\n</div>\n",
                styles: [`
    :host {
        display: block;
        outline-style: none;
    }`]
            }] }
];
/** @nocollapse */
IgxCarouselComponent.ctorParameters = () => [
    { type: ElementRef }
];
IgxCarouselComponent.propDecorators = {
    role: [{ type: HostBinding, args: ['attr.role',] }],
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    loop: [{ type: Input }],
    pause: [{ type: Input }],
    interval: [{ type: Input }],
    tabIndex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    navigation: [{ type: Input }],
    onSlideChanged: [{ type: Output }],
    onSlideAdded: [{ type: Output }],
    onSlideRemoved: [{ type: Output }],
    onCarouselPaused: [{ type: Output }],
    onCarouselPlaying: [{ type: Output }],
    onKeydownArrowRight: [{ type: HostListener, args: ['keydown.arrowright',] }],
    onKeydownArrowLeft: [{ type: HostListener, args: ['keydown.arrowleft',] }]
};
if (false) {
    /**
     * Returns the `role` attribute of the carousel.
     * ```typescript
     * let carouselRole =  this.carousel.role;
     * ```
     * \@memberof IgxCarouselComponent
     * @type {?}
     */
    IgxCarouselComponent.prototype.role;
    /**
     * Sets the `id` of the carousel.
     * If not set, the `id` of the first carousel component will be `"igx-carousel-0"`.
     * ```html
     * <igx-carousel id="my-first-carousel"></igx-carousel>
     * ```
     * \@memberof IgxCarouselComponent
     * @type {?}
     */
    IgxCarouselComponent.prototype.id;
    /**
     * Sets whether the carousel should `loop` back to the first slide after reaching the last slide.
     * Default value is `true`.
     * ```html
     * <igx-carousel [loop]="false"></igx-carousel>
     * ```
     * \@memberOf IgxCarouselComponent
     * @type {?}
     */
    IgxCarouselComponent.prototype.loop;
    /**
     * Sets whether the carousel will `pause` the slide transitions on user interactions.
     * Default value is `true`.
     * ```html
     *  <igx-carousel [pause]="false"></igx-carousel>
     * ```
     * \@memberOf IgxCarouselComponent
     * @type {?}
     */
    IgxCarouselComponent.prototype.pause;
    /**
     * Controls whether the carousel should render the left/right `navigation` buttons.
     * Default value is `true`.
     * ```html
     * <igx-carousel [navigation] = "false"></igx-carousel>
     * ```
     * \@memberOf IgxCarouselComponent
     * @type {?}
     */
    IgxCarouselComponent.prototype.navigation;
    /**
     * An event that is emitted after a slide transition has happened.
     * Provides references to the `IgxCarouselComponent` and `IgxSlideComponent` as event arguments.
     * ```html
     * <igx-carousel (onSlideChanged)="onSlideChanged($event)"></igx-carousel>
     * ```
     * \@memberOf IgxCarouselComponent
     * @type {?}
     */
    IgxCarouselComponent.prototype.onSlideChanged;
    /**
     * An event that is emitted after a slide has been added to the carousel.
     * Provides references to the `IgxCarouselComponent` and `IgxSlideComponent` as event arguments.
     * ```html
     * <igx-carousel (onSlideAdded)="onSlideAdded($event)"></igx-carousel>
     * ```
     * \@memberOf IgxCarouselComponent
     * @type {?}
     */
    IgxCarouselComponent.prototype.onSlideAdded;
    /**
     * An event that is emitted after a slide has been removed from the carousel.
     * Provides references to the `IgxCarouselComponent` and `IgxSlideComponent` as event arguments.
     * ```html
     * <igx-carousel (onSlideRemoved)="onSlideRemoved($event)"></igx-carousel>
     * ```
     * \@memberOf IgxCarouselComponent
     * @type {?}
     */
    IgxCarouselComponent.prototype.onSlideRemoved;
    /**
     * An event that is emitted after the carousel has been paused.
     * Provides a reference to the `IgxCarouselComponent` as an event argument.
     * ```html
     * <igx-carousel (onCarouselPaused)="onCarouselPaused($event)"></igx-carousel>
     * ```
     * \@memberOf IgxCarouselComponent
     * @type {?}
     */
    IgxCarouselComponent.prototype.onCarouselPaused;
    /**
     * An event that is emitted after the carousel has resumed transitioning between `slides`.
     * Provides a reference to the `IgxCarouselComponent` as an event argument.
     * ```html
     * <igx-carousel (onCarouselPlaying)="onCarouselPlaying($event)"></igx-carousel>
     * ```
     * \@memberOf IgxCarouselComponent
     * @type {?}
     */
    IgxCarouselComponent.prototype.onCarouselPlaying;
    /**
     * The collection of `slides` currently in the carousel.
     * ```typescript
     * let slides: IgxSlideComponent[] = this.carousel.slides;
     * ```
     * \@memberOf IgxCarouselComponent
     * @type {?}
     */
    IgxCarouselComponent.prototype.slides;
    /**
     * @type {?}
     * @private
     */
    IgxCarouselComponent.prototype._interval;
    /**
     * @type {?}
     * @private
     */
    IgxCarouselComponent.prototype._lastInterval;
    /**
     * @type {?}
     * @private
     */
    IgxCarouselComponent.prototype._playing;
    /**
     * @type {?}
     * @private
     */
    IgxCarouselComponent.prototype._currentSlide;
    /**
     * @type {?}
     * @private
     */
    IgxCarouselComponent.prototype._destroyed;
    /**
     * @type {?}
     * @private
     */
    IgxCarouselComponent.prototype._total;
    /**
     * @type {?}
     * @private
     */
    IgxCarouselComponent.prototype.element;
}
/**
 * A slide component that usually holds an image and/or a caption text.
 * IgxSlideComponent is usually a child component of an IgxCarouselComponent.
 *
 * ```
 * <igx-slide [input bindings] >
 *    <ng-content></ng-content>
 * </igx-slide>
 * ```
 *
 * @export
 */
export class IgxSlideComponent {
    /**
     * @param {?} carousel
     */
    constructor(carousel) {
        this.carousel = carousel;
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        this.carousel.add(this);
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        this.carousel.remove(this);
    }
}
IgxSlideComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-slide',
                template: "<div\n    role=\"listitem\"\n    [class.active]=\"active\"\n    class=\"igx-slide\"\n    [attr.aria-selected]=\"active\"\n    [attr.aria-live]=\"active ? 'polite' : null\"\n    [attr.tabIndex]=\"active ? 0 : null\"\n>\n    <ng-content></ng-content>\n</div>\n"
            }] }
];
/** @nocollapse */
IgxSlideComponent.ctorParameters = () => [
    { type: IgxCarouselComponent }
];
IgxSlideComponent.propDecorators = {
    index: [{ type: Input }],
    direction: [{ type: Input }],
    active: [{ type: HostBinding, args: ['class.active',] }, { type: Input }]
};
if (false) {
    /**
     * Gets/sets the `index` of the slide inside the carousel.
     * ```html
     * <igx-carousel>
     *  <igx-slide index = "1"</igx-slide>
     * <igx-carousel>
     * ```
     * \@memberOf IgxSlideComponent
     * @type {?}
     */
    IgxSlideComponent.prototype.index;
    /**
     * Gets/sets the target `direction` for the slide.
     * ```html
     * <igx-carousel>
     *  <igx-slide direction="NEXT"</igx-slide>
     * <igx-carousel>
     * ```
     * \@memberOf IgxSlideComponent
     * @type {?}
     */
    IgxSlideComponent.prototype.direction;
    /**
     * Gets/sets the `active` state of the slide.
     * ```html
     * <igx-carousel>
     *  <igx-slide [active] ="false"</igx-slide>
     * <igx-carousel>
     * ```
     * \@memberof IgxSlideComponent
     * @type {?}
     */
    IgxSlideComponent.prototype.active;
    /**
     * @type {?}
     * @private
     */
    IgxSlideComponent.prototype.carousel;
}
/**
 * @record
 */
export function ISlideEventArgs() { }
if (false) {
    /** @type {?} */
    ISlideEventArgs.prototype.carousel;
    /** @type {?} */
    ISlideEventArgs.prototype.slide;
}
/**
 * @hidden
 */
export class IgxCarouselModule {
}
IgxCarouselModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxCarouselComponent, IgxSlideComponent],
                exports: [IgxCarouselComponent, IgxSlideComponent],
                imports: [CommonModule, IgxIconModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0gsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUdSLE1BQU0sRUFDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQUUxQyxPQUFPLEdBQUcsQ0FBQzs7O0lBRVMsT0FBSSxFQUFFLE9BQUksRUFBRSxPQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ3hDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUF5SjdCLFlBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7Ozs7Ozs7O1FBakpOLFNBQUksR0FBRyxRQUFRLENBQUM7Ozs7Ozs7OztRQVkxQyxPQUFFLEdBQUcsZ0JBQWdCLE9BQU8sRUFBRSxFQUFFLENBQUM7Ozs7Ozs7OztRQVV4QixTQUFJLEdBQUcsSUFBSSxDQUFDOzs7Ozs7Ozs7UUFVWixVQUFLLEdBQUcsSUFBSSxDQUFDOzs7Ozs7Ozs7UUE4Q2IsZUFBVSxHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7O1FBVWpCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7Ozs7Ozs7OztRQVVyRCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDOzs7Ozs7Ozs7UUFVbkQsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQzs7Ozs7Ozs7O1FBVXJELHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUF3QixDQUFDOzs7Ozs7Ozs7UUFVNUQsc0JBQWlCLEdBQUcs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b0JBQW9CLEVBQUUsaUJBQWlCLENBQUM7Z0JBQ2xELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7YUFDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIElucHV0LFxuICAgIE5nTW9kdWxlLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4SWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vaW5kZXgnO1xuXG5sZXQgTkVYVF9JRCA9IDA7XG5cbmV4cG9ydCBlbnVtIERpcmVjdGlvbiB7IE5PTkUsIE5FWFQsIFBSRVYgfVxuXG4vKipcbiAqICoqSWduaXRlIFVJIGZvciBBbmd1bGFyIENhcm91c2VsKiogLVxuICogW0RvY3VtZW50YXRpb25dKGh0dHBzOi8vd3d3LmluZnJhZ2lzdGljcy5jb20vcHJvZHVjdHMvaWduaXRlLXVpLWFuZ3VsYXIvYW5ndWxhci9jb21wb25lbnRzL2Nhcm91c2VsLmh0bWwpXG4gKlxuICogVGhlIElnbml0ZSBVSSBDYXJvdXNlbCBpcyB1c2VkIHRvIGJyb3dzZSBvciBuYXZpZ2F0ZSB0aHJvdWdoIGEgY29sbGVjdGlvbiBvZiBzbGlkZXMuIFNsaWRlcyBjYW4gY29udGFpbiBjdXN0b21cbiAqIGNvbnRlbnQgc3VjaCBhcyBpbWFnZXMgb3IgY2FyZHMgYW5kIGJlIHVzZWQgZm9yIHRoaW5ncyBzdWNoIGFzIG9uLWJvYXJkaW5nIHR1dG9yaWFscyBvciBwYWdlLWJhc2VkIGludGVyZmFjZXMuXG4gKiBJdCBjYW4gYmUgdXNlZCBhcyBhIHNlcGFyYXRlIGZ1bGxzY3JlZW4gZWxlbWVudCBvciBpbnNpZGUgYW5vdGhlciBjb21wb25lbnQuXG4gKlxuICogRXhhbXBsZTpcbiAqIGBgYGh0bWxcbiAqIDxpZ3gtY2Fyb3VzZWw+XG4gKiAgIDxpZ3gtc2xpZGU+XG4gKiAgICAgPGgzPkZpcnN0IFNsaWRlIEhlYWRlcjwvaDM+XG4gKiAgICAgPHA+Rmlyc3Qgc2xpZGUgQ29udGVudDwvcD5cbiAqICAgPGlneC1zbGlkZT5cbiAqICAgPGlneC1zbGlkZT5cbiAqICAgICA8aDM+U2Vjb25kIFNsaWRlIEhlYWRlcjwvaDM+XG4gKiAgICAgPHA+U2Vjb25kIFNsaWRlIENvbnRlbnQ8L3A+XG4gKiA8L2lneC1jYXJvdXNlbD5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lneC1jYXJvdXNlbCcsXG4gICAgdGVtcGxhdGVVcmw6ICdjYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbYFxuICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XG4gICAgfWBdXG59KVxuXG5leHBvcnQgY2xhc3MgSWd4Q2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGByb2xlYCBhdHRyaWJ1dGUgb2YgdGhlIGNhcm91c2VsLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY2Fyb3VzZWxSb2xlID0gIHRoaXMuY2Fyb3VzZWwucm9sZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q2Fyb3VzZWxDb21wb25lbnRcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHB1YmxpYyByb2xlID0gJ3JlZ2lvbic7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBgaWRgIG9mIHRoZSBjYXJvdXNlbC5cbiAgICAgKiBJZiBub3Qgc2V0LCB0aGUgYGlkYCBvZiB0aGUgZmlyc3QgY2Fyb3VzZWwgY29tcG9uZW50IHdpbGwgYmUgYFwiaWd4LWNhcm91c2VsLTBcImAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2Fyb3VzZWwgaWQ9XCJteS1maXJzdC1jYXJvdXNlbFwiPjwvaWd4LWNhcm91c2VsPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDYXJvdXNlbENvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWQgPSBgaWd4LWNhcm91c2VsLSR7TkVYVF9JRCsrfWA7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHdoZXRoZXIgdGhlIGNhcm91c2VsIHNob3VsZCBgbG9vcGAgYmFjayB0byB0aGUgZmlyc3Qgc2xpZGUgYWZ0ZXIgcmVhY2hpbmcgdGhlIGxhc3Qgc2xpZGUuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgdHJ1ZWAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2Fyb3VzZWwgW2xvb3BdPVwiZmFsc2VcIj48L2lneC1jYXJvdXNlbD5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyT2YgSWd4Q2Fyb3VzZWxDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbG9vcCA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHdoZXRoZXIgdGhlIGNhcm91c2VsIHdpbGwgYHBhdXNlYCB0aGUgc2xpZGUgdHJhbnNpdGlvbnMgb24gdXNlciBpbnRlcmFjdGlvbnMuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgdHJ1ZWAuXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWNhcm91c2VsIFtwYXVzZV09XCJmYWxzZVwiPjwvaWd4LWNhcm91c2VsPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJPZiBJZ3hDYXJvdXNlbENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwYXVzZSA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0aW1lIGBpbnRlcnZhbGAgaW4gbWlsbGlzZWNvbmRzIGJlZm9yZSB0aGUgc2xpZGUgY2hhbmdlcy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRpbWVJbnRlcnZhbCA9IHRoaXMuY2Fyb3VzZWwuaW50ZXJ2YWw7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENhcm91c2VsQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgaW50ZXJ2YWwoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVydmFsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHRpbWUgYGludGVydmFsYCBpbiBtaWxsaXNlY29uZHMgYmVmb3JlIHRoZSBzbGlkZSBjaGFuZ2VzLlxuICAgICAqIElmIG5vdCBzZXQsIHRoZSBjYXJvdXNlbCB3aWxsIG5vdCBjaGFuZ2UgYHNsaWRlc2AgYXV0b21hdGljYWxseS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jYXJvdXNlbCBbaW50ZXJ2YWxdID0gXCIxMDAwXCI+PC9jYXJvdXNlbD5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q2Fyb3VzZWxDb21wb25lbnRcbiAgICAgKi9cbiAgICBzZXQgaW50ZXJ2YWwodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9pbnRlcnZhbCA9ICt2YWx1ZTtcbiAgICAgICAgdGhpcy5fcmVzdGFydEludGVydmFsKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGB0YWJJbmRleGAgb2YgdGhlIGNhcm91c2VsIGNvbXBvbmVudC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRhYkluZGV4ID0gIHRoaXMuY2Fyb3VzZWwudGFiSW5kZXg7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENhcm91c2VsQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgICBnZXQgdGFiSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnRyb2xzIHdoZXRoZXIgdGhlIGNhcm91c2VsIHNob3VsZCByZW5kZXIgdGhlIGxlZnQvcmlnaHQgYG5hdmlnYXRpb25gIGJ1dHRvbnMuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgdHJ1ZWAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2Fyb3VzZWwgW25hdmlnYXRpb25dID0gXCJmYWxzZVwiPjwvaWd4LWNhcm91c2VsPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJPZiBJZ3hDYXJvdXNlbENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBuYXZpZ2F0aW9uID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEFuIGV2ZW50IHRoYXQgaXMgZW1pdHRlZCBhZnRlciBhIHNsaWRlIHRyYW5zaXRpb24gaGFzIGhhcHBlbmVkLlxuICAgICAqIFByb3ZpZGVzIHJlZmVyZW5jZXMgdG8gdGhlIGBJZ3hDYXJvdXNlbENvbXBvbmVudGAgYW5kIGBJZ3hTbGlkZUNvbXBvbmVudGAgYXMgZXZlbnQgYXJndW1lbnRzLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNhcm91c2VsIChvblNsaWRlQ2hhbmdlZCk9XCJvblNsaWRlQ2hhbmdlZCgkZXZlbnQpXCI+PC9pZ3gtY2Fyb3VzZWw+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlck9mIElneENhcm91c2VsQ29tcG9uZW50XG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblNsaWRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SVNsaWRlRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgdGhhdCBpcyBlbWl0dGVkIGFmdGVyIGEgc2xpZGUgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIGNhcm91c2VsLlxuICAgICAqIFByb3ZpZGVzIHJlZmVyZW5jZXMgdG8gdGhlIGBJZ3hDYXJvdXNlbENvbXBvbmVudGAgYW5kIGBJZ3hTbGlkZUNvbXBvbmVudGAgYXMgZXZlbnQgYXJndW1lbnRzLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNhcm91c2VsIChvblNsaWRlQWRkZWQpPVwib25TbGlkZUFkZGVkKCRldmVudClcIj48L2lneC1jYXJvdXNlbD5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyT2YgSWd4Q2Fyb3VzZWxDb21wb25lbnRcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uU2xpZGVBZGRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SVNsaWRlRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgdGhhdCBpcyBlbWl0dGVkIGFmdGVyIGEgc2xpZGUgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBjYXJvdXNlbC5cbiAgICAgKiBQcm92aWRlcyByZWZlcmVuY2VzIHRvIHRoZSBgSWd4Q2Fyb3VzZWxDb21wb25lbnRgIGFuZCBgSWd4U2xpZGVDb21wb25lbnRgIGFzIGV2ZW50IGFyZ3VtZW50cy5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jYXJvdXNlbCAob25TbGlkZVJlbW92ZWQpPVwib25TbGlkZVJlbW92ZWQoJGV2ZW50KVwiPjwvaWd4LWNhcm91c2VsPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJPZiBJZ3hDYXJvdXNlbENvbXBvbmVudFxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25TbGlkZVJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElTbGlkZUV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEFuIGV2ZW50IHRoYXQgaXMgZW1pdHRlZCBhZnRlciB0aGUgY2Fyb3VzZWwgaGFzIGJlZW4gcGF1c2VkLlxuICAgICAqIFByb3ZpZGVzIGEgcmVmZXJlbmNlIHRvIHRoZSBgSWd4Q2Fyb3VzZWxDb21wb25lbnRgIGFzIGFuIGV2ZW50IGFyZ3VtZW50LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNhcm91c2VsIChvbkNhcm91c2VsUGF1c2VkKT1cIm9uQ2Fyb3VzZWxQYXVzZWQoJGV2ZW50KVwiPjwvaWd4LWNhcm91c2VsPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJPZiBJZ3hDYXJvdXNlbENvbXBvbmVudFxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25DYXJvdXNlbFBhdXNlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SWd4Q2Fyb3VzZWxDb21wb25lbnQ+KCk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBldmVudCB0aGF0IGlzIGVtaXR0ZWQgYWZ0ZXIgdGhlIGNhcm91c2VsIGhhcyByZXN1bWVkIHRyYW5zaXRpb25pbmcgYmV0d2VlbiBgc2xpZGVzYC5cbiAgICAgKiBQcm92aWRlcyBhIHJlZmVyZW5jZSB0byB0aGUgYElneENhcm91c2VsQ29tcG9uZW50YCBhcyBhbiBldmVudCBhcmd1bWVudC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jYXJvdXNlbCAob25DYXJvdXNlbFBsYXlpbmcpPVwib25DYXJvdXNlbFBsYXlpbmcoJGV2ZW50KVwiPjwvaWd4LWNhcm91c2VsPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJPZiBJZ3hDYXJvdXNlbENvbXBvbmVudFxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25DYXJvdXNlbFBsYXlpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPElneENhcm91c2VsQ29tcG9uZW50PigpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbGxlY3Rpb24gb2YgYHNsaWRlc2AgY3VycmVudGx5IGluIHRoZSBjYXJvdXNlbC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHNsaWRlczogSWd4U2xpZGVDb21wb25lbnRbXSA9IHRoaXMuY2Fyb3VzZWwuc2xpZGVzO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJPZiBJZ3hDYXJvdXNlbENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzbGlkZXM6IElneFNsaWRlQ29tcG9uZW50W10gPSBbXTtcbiAgICBwcml2YXRlIF9pbnRlcnZhbDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2xhc3RJbnRlcnZhbDogYW55O1xuICAgIHByaXZhdGUgX3BsYXlpbmc6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfY3VycmVudFNsaWRlOiBJZ3hTbGlkZUNvbXBvbmVudDtcbiAgICBwcml2YXRlIF9kZXN0cm95ZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfdG90YWwgPSAwO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7IH1cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLl9sYXN0SW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fbGFzdEludGVydmFsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQG1lbWJlcm9mIElneENhcm91c2VsQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHNldEFyaWFMYWJlbChzbGlkZSkge1xuICAgICAgICByZXR1cm4gYEl0ZW0gJHtzbGlkZS5pbmRleCArIDF9IG9mICR7dGhpcy50b3RhbH1gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiBgc2xpZGVzYCBpbiB0aGUgY2Fyb3VzZWwuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBzbGlkZUNvdW50ID0gIHRoaXMuY2Fyb3VzZWwudG90YWw7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlck9mIElneENhcm91c2VsQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldCB0b3RhbCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG90YWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGluZGV4IG9mIHRoZSBzbGlkZSBiZWluZyBjdXJyZW50bHkgc2hvd24uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBjdXJyZW50U2xpZGVOdW1iZXIgPSAgdGhpcy5jYXJvdXNlbC5jdXJyZW50O1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJPZiBJZ3hDYXJvdXNlbENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgY3VycmVudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gIXRoaXMuX2N1cnJlbnRTbGlkZSA/IDAgOiB0aGlzLl9jdXJyZW50U2xpZGUuaW5kZXg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGUgY2Fyb3VzZWwgaXMgcGxheWluZy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzUGxheWluZyA9ICB0aGlzLmNhcm91c2VsLmlzUGxheWluZztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyT2YgSWd4Q2Fyb3VzZWxDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGlzUGxheWluZygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXlpbmc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyDQsCBib29sZWFuIGluZGljYXRpbmcgaWYgdGhlIGNhcm91c2VsIGlzIGRlc3Ryb3llZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzRGVzdHJveWVkID0gIHRoaXMuY2Fyb3VzZWwuaXNEZXN0cm95ZWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlck9mIElneENhcm91c2VsQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldCBpc0Rlc3Ryb3llZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc3Ryb3llZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgY2Fyb3VzZWwgZWxlbWVudCBpbiB0aGUgRE9NLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgbmF0aXZlRWxlbWVudCA9ICB0aGlzLmNhcm91c2VsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENhcm91c2VsQ29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0IG5hdGl2ZUVsZW1lbnQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNsaWRlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHByb3ZpZGVkIGBpbmRleGAgb3IgbnVsbC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHNsaWRlMSA9ICB0aGlzLmNhcm91c2VsLmdldCgxKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyT2YgSWd4Q2Fyb3VzZWxDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBJZ3hTbGlkZUNvbXBvbmVudCB7XG4gICAgICAgIGZvciAoY29uc3QgZWFjaCBvZiB0aGlzLnNsaWRlcykge1xuICAgICAgICAgICAgaWYgKGVhY2guaW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVhY2g7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgbmV3IHNsaWRlIHRvIHRoZSBjYXJvdXNlbC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jYXJvdXNlbC5hZGQobmV3U2xpZGUpO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJPZiBJZ3hDYXJvdXNlbENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBhZGQoc2xpZGU6IElneFNsaWRlQ29tcG9uZW50KSB7XG4gICAgICAgIHNsaWRlLmluZGV4ID0gdGhpcy50b3RhbDtcbiAgICAgICAgdGhpcy5zbGlkZXMucHVzaChzbGlkZSk7XG4gICAgICAgIHRoaXMuX3RvdGFsICs9IDE7XG5cbiAgICAgICAgaWYgKHRoaXMudG90YWwgPT09IDEgfHwgc2xpZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdChzbGlkZSk7XG4gICAgICAgICAgICBpZiAodGhpcy50b3RhbCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2xpZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uU2xpZGVBZGRlZC5lbWl0KHsgY2Fyb3VzZWw6IHRoaXMsIHNsaWRlIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBzbGlkZSBmcm9tIHRoZSBjYXJvdXNlbC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jYXJvdXNlbC5yZW1vdmUoc2xpZGUpO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJPZiBJZ3hDYXJvdXNlbENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyByZW1vdmUoc2xpZGU6IElneFNsaWRlQ29tcG9uZW50KSB7XG4gICAgICAgIGlmIChzbGlkZSAmJiBzbGlkZSA9PT0gdGhpcy5nZXQoc2xpZGUuaW5kZXgpKSB7IC8vIGNoZWNrIGlmIHRoZSByZXF1ZXN0ZWQgc2xpZGUgZm9yIGRlbGV0ZSBpcyBwcmVzZW50IGluIHRoZSBjYXJvdXNlbFxuICAgICAgICAgICAgaWYgKHNsaWRlLmluZGV4ID09PSB0aGlzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBzbGlkZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zbGlkZXMuc3BsaWNlKHNsaWRlLmluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMuX3RvdGFsIC09IDE7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy50b3RhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRTbGlkZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG90YWw7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVzW2ldLmluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5vblNsaWRlUmVtb3ZlZC5lbWl0KHsgY2Fyb3VzZWw6IHRoaXMsIHNsaWRlIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogS2lja3MgaW4gYSB0cmFuc2l0aW9uIGZvciBhIGdpdmVuIHNsaWRlIHdpdGggYSBnaXZlbiBgZGlyZWN0aW9uYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jYXJvdXNlbC5zZWxlY3QodGhpcy5jYXJvdXNlbC5nZXQoMiksIERpcmVjdGlvbi5ORVhUKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyT2YgSWd4Q2Fyb3VzZWxDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0KHNsaWRlOiBJZ3hTbGlkZUNvbXBvbmVudCwgZGlyZWN0aW9uOiBEaXJlY3Rpb24gPSBEaXJlY3Rpb24uTk9ORSkge1xuICAgICAgICBjb25zdCBuZXdJbmRleCA9IHNsaWRlLmluZGV4O1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTk9ORSkge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gbmV3SW5kZXggPiB0aGlzLmN1cnJlbnQgPyBEaXJlY3Rpb24uTkVYVCA6IERpcmVjdGlvbi5QUkVWO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNsaWRlICYmIHNsaWRlICE9PSB0aGlzLl9jdXJyZW50U2xpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX21vdmVUbyhzbGlkZSwgZGlyZWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zaXRpb25zIHRvIHRoZSBuZXh0IHNsaWRlIGluIHRoZSBjYXJvdXNlbC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5jYXJvdXNlbC5uZXh0KCk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlck9mIElneENhcm91c2VsQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIG5leHQoKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKHRoaXMuY3VycmVudCArIDEpICUgdGhpcy50b3RhbDtcblxuICAgICAgICBpZiAoaW5kZXggPT09IDAgJiYgIXRoaXMubG9vcCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0KHRoaXMuZ2V0KGluZGV4KSwgRGlyZWN0aW9uLk5FWFQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zaXRpb25zIHRvIHRoZSBwcmV2aW91cyBzbGlkZSBpbiB0aGUgY2Fyb3VzZWwuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuY2Fyb3VzZWwucHJldigpO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJPZiBJZ3hDYXJvdXNlbENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBwcmV2KCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY3VycmVudCAtIDEgPCAwID9cbiAgICAgICAgICAgIHRoaXMudG90YWwgLSAxIDogdGhpcy5jdXJyZW50IC0gMTtcblxuICAgICAgICBpZiAoIXRoaXMubG9vcCAmJiBpbmRleCA9PT0gdGhpcy50b3RhbCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdCh0aGlzLmdldChpbmRleCksIERpcmVjdGlvbi5QUkVWKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXN1bWVzIHBsYXlpbmcgb2YgdGhlIGNhcm91c2VsIGlmIGluIHBhdXNlZCBzdGF0ZS5cbiAgICAgKiBObyBvcGVyYXRpb24gb3RoZXJ3aXNlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmNhcm91c2VsLnBsYXkoKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlck9mIElneENhcm91c2VsQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHBsYXkoKSB7XG4gICAgICAgIGlmICghdGhpcy5fcGxheWluZykge1xuICAgICAgICAgICAgdGhpcy5fcGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uQ2Fyb3VzZWxQbGF5aW5nLmVtaXQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9yZXN0YXJ0SW50ZXJ2YWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3BzIHNsaWRlIHRyYW5zaXRpb25zIGlmIHRoZSBgcGF1c2VgIG9wdGlvbiBpcyBzZXQgdG8gYHRydWVgLlxuICAgICAqIE5vIG9wZXJhdGlvbiBvdGhlcndpc2UuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICB0aGlzLmNhcm91c2VsLnN0b3AoKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlck9mIElneENhcm91c2VsQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHN0b3AoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm9uQ2Fyb3VzZWxQYXVzZWQuZW1pdCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9tb3ZlVG8oc2xpZGU6IElneFNsaWRlQ29tcG9uZW50LCBkaXJlY3Rpb246IERpcmVjdGlvbikge1xuICAgICAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzbGlkZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIHNsaWRlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRTbGlkZSkge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFNsaWRlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRTbGlkZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTbGlkZSA9IHNsaWRlO1xuXG4gICAgICAgIHRoaXMub25TbGlkZUNoYW5nZWQuZW1pdCh7IGNhcm91c2VsOiB0aGlzLCBzbGlkZSB9KTtcbiAgICAgICAgdGhpcy5fcmVzdGFydEludGVydmFsKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX3Jlc2V0SW50ZXJ2YWwoKSB7XG4gICAgICAgIGlmICh0aGlzLl9sYXN0SW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fbGFzdEludGVydmFsKTtcbiAgICAgICAgICAgIHRoaXMuX2xhc3RJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfcmVzdGFydEludGVydmFsKCkge1xuICAgICAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG5cbiAgICAgICAgaWYgKCFpc05hTih0aGlzLmludGVydmFsKSAmJiB0aGlzLmludGVydmFsID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fbGFzdEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpY2sgPSArdGhpcy5pbnRlcnZhbDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGxheWluZyAmJiB0aGlzLnRvdGFsICYmICFpc05hTih0aWNrKSAmJiB0aWNrID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aGlzLmludGVydmFsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmFycm93cmlnaHQnKVxuICAgIHB1YmxpYyBvbktleWRvd25BcnJvd1JpZ2h0KCkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMubmF0aXZlRWxlbWVudC5mb2N1cygpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd2xlZnQnKVxuICAgIHB1YmxpYyBvbktleWRvd25BcnJvd0xlZnQoKSB7XG4gICAgICAgIHRoaXMucHJldigpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5uYXRpdmVFbGVtZW50LmZvY3VzKCkpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBIHNsaWRlIGNvbXBvbmVudCB0aGF0IHVzdWFsbHkgaG9sZHMgYW4gaW1hZ2UgYW5kL29yIGEgY2FwdGlvbiB0ZXh0LlxuICogSWd4U2xpZGVDb21wb25lbnQgaXMgdXN1YWxseSBhIGNoaWxkIGNvbXBvbmVudCBvZiBhbiBJZ3hDYXJvdXNlbENvbXBvbmVudC5cbiAqXG4gKiBgYGBcbiAqIDxpZ3gtc2xpZGUgW2lucHV0IGJpbmRpbmdzXSA+XG4gKiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gKiA8L2lneC1zbGlkZT5cbiAqIGBgYFxuICpcbiAqIEBleHBvcnRcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtc2xpZGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnc2xpZGUuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgSWd4U2xpZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzL3NldHMgdGhlIGBpbmRleGAgb2YgdGhlIHNsaWRlIGluc2lkZSB0aGUgY2Fyb3VzZWwuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2Fyb3VzZWw+XG4gICAgICogIDxpZ3gtc2xpZGUgaW5kZXggPSBcIjFcIjwvaWd4LXNsaWRlPlxuICAgICAqIDxpZ3gtY2Fyb3VzZWw+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlck9mIElneFNsaWRlQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGluZGV4OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzL3NldHMgdGhlIHRhcmdldCBgZGlyZWN0aW9uYCBmb3IgdGhlIHNsaWRlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNhcm91c2VsPlxuICAgICAqICA8aWd4LXNsaWRlIGRpcmVjdGlvbj1cIk5FWFRcIjwvaWd4LXNsaWRlPlxuICAgICAqIDxpZ3gtY2Fyb3VzZWw+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlck9mIElneFNsaWRlQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGRpcmVjdGlvbjogRGlyZWN0aW9uO1xuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgYGFjdGl2ZWAgc3RhdGUgb2YgdGhlIHNsaWRlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNhcm91c2VsPlxuICAgICAqICA8aWd4LXNsaWRlIFthY3RpdmVdID1cImZhbHNlXCI8L2lneC1zbGlkZT5cbiAgICAgKiA8aWd4LWNhcm91c2VsPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hTbGlkZUNvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgICBASW5wdXQoKSBwdWJsaWMgYWN0aXZlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXJvdXNlbDogSWd4Q2Fyb3VzZWxDb21wb25lbnQpIHsgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jYXJvdXNlbC5hZGQodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5jYXJvdXNlbC5yZW1vdmUodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTbGlkZUV2ZW50QXJncyB7XG4gICAgY2Fyb3VzZWw6IElneENhcm91c2VsQ29tcG9uZW50O1xuICAgIHNsaWRlOiBJZ3hTbGlkZUNvbXBvbmVudDtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSWd4Q2Fyb3VzZWxDb21wb25lbnQsIElneFNsaWRlQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbSWd4Q2Fyb3VzZWxDb21wb25lbnQsIElneFNsaWRlQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBJZ3hJY29uTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hDYXJvdXNlbE1vZHVsZSB7XG59XG4iXX0=