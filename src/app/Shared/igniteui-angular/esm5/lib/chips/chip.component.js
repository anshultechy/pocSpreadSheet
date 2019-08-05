/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef, EventEmitter, ElementRef, HostBinding, Input, Output, ViewChild, Renderer2, TemplateRef, Inject, Optional } from '@angular/core';
import { DisplayDensityToken, DisplayDensityBase } from '../core/displayDensity';
import { IgxDragDirective } from '../directives/dragdrop/dragdrop.directive';
/**
 * @record
 */
export function IBaseChipEventArgs() { }
if (false) {
    /** @type {?} */
    IBaseChipEventArgs.prototype.originalEvent;
    /** @type {?} */
    IBaseChipEventArgs.prototype.owner;
}
/**
 * @record
 */
export function IChipClickEventArgs() { }
if (false) {
    /** @type {?} */
    IChipClickEventArgs.prototype.cancel;
}
/**
 * @record
 */
export function IChipKeyDownEventArgs() { }
if (false) {
    /** @type {?} */
    IChipKeyDownEventArgs.prototype.originalEvent;
    /** @type {?} */
    IChipKeyDownEventArgs.prototype.cancel;
}
/**
 * @record
 */
export function IChipEnterDragAreaEventArgs() { }
if (false) {
    /** @type {?} */
    IChipEnterDragAreaEventArgs.prototype.dragChip;
}
/**
 * @record
 */
export function IChipSelectEventArgs() { }
if (false) {
    /** @type {?} */
    IChipSelectEventArgs.prototype.cancel;
    /** @type {?} */
    IChipSelectEventArgs.prototype.selected;
}
/** @type {?} */
var CHIP_ID = 0;
var IgxChipComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxChipComponent, _super);
    function IgxChipComponent(cdr, elementRef, renderer, _displayDensityOptions) {
        var _this = _super.call(this, _displayDensityOptions) || this;
        _this.cdr = cdr;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this._displayDensityOptions = _displayDensityOptions;
        /**
         * An \@Input property that sets the value of `id` attribute. If not provided it will be automatically generated.
         * ```html
         * <igx-chip [id]="'igx-chip-1'"></igx-chip>
         * ```
         */
        _this.id = "igx-chip-" + CHIP_ID++;
        /**
         * An \@Input property that defines if the `IgxChipComponent` can be dragged in order to change it's position.
         * By default it is set to false.
         * ```html
         * <igx-chip [id]="'igx-chip-1'" [draggable]="true"></igx-chip>
         * ```
         */
        _this.draggable = false;
        /**
         * An \@Input property that enables/disables the draggable element animation when the element is released.
         * By default it's set to true.
         * ```html
         * <igx-chip [id]="'igx-chip-1'" [draggable]="true" [animateOnRelease]="false"></igx-chip>
         * ```
         */
        _this.animateOnRelease = true;
        /**
         * An \@Input property that enables/disables the hiding of the base element that has been dragged.
         * By default it's set to true.
         * ```html
         * <igx-chip [id]="'igx-chip-1'" [draggable]="true" [hideBaseOnDrag]="false"></igx-chip>
         * ```
         */
        _this.hideBaseOnDrag = true;
        /**
         * An \@Input property that defines if the `IgxChipComponent` should render remove button and throw remove events.
         * By default it is set to false.
         * ```html
         * <igx-chip [id]="'igx-chip-1'" [draggable]="true" [removable]="true"></igx-chip>
         * ```
         */
        _this.removable = false;
        /**
         * An \@Input property that defines if the `IgxChipComponent` can be selected on click or through navigation,
         * By default it is set to false.
         * ```html
         * <igx-chip [id]="chip.id" [draggable]="true" [removable]="true" [selectable]="true"></igx-chip>
         * ```
         */
        _this.selectable = false;
        /**
         * @hidden
         */
        _this.class = '';
        /**
         * An \@Input property that defines if the `IgxChipComponent` is disabled. When disabled it restricts user interactions
         * like focusing on click or tab, selection on click or Space, dragging.
         * By default it is set to false.
         * ```html
         * <igx-chip [id]="chip.id" [disabled]="true"></igx-chip>
         * ```
         */
        _this.disabled = false;
        /**
         * Emits an event when the `IgxChipComponent` moving starts.
         * Returns the moving `IgxChipComponent`.
         * ```typescript
         * moveStarted(event: IBaseChipEventArgs){
         *     let movingChip = event.owner;
         * }
         * ```
         * ```html
         * <igx-chip #myChip [id]="'igx-chip-1'" [draggable]="true" (onMoveStart)="moveStarted($event)">
         * ```
         */
        _this.onMoveStart = new EventEmitter();
        /**
         * Emits an event when the `IgxChipComponent` moving ends.
         * Returns the moved `IgxChipComponent`.
         * ```typescript
         * moveEnded(event: IBaseChipEventArgs){
         *     let movedChip = event.owner;
         * }
         * ```
         * ```html
         * <igx-chip #myChip [id]="'igx-chip-1'" [draggable]="true" (onMoveEnd)="moveEnded($event)">
         * ```
         */
        _this.onMoveEnd = new EventEmitter();
        /**
         * Emits an event when the `IgxChipComponent` is removed.
         * Returns the removed `IgxChipComponent`.
         * ```typescript
         * remove(event: IBaseChipEventArgs){
         *     let removedChip = event.owner;
         * }
         * ```
         * ```html
         * <igx-chip #myChip [id]="'igx-chip-1'" [draggable]="true" (onRemove)="remove($event)">
         * ```
         */
        _this.onRemove = new EventEmitter();
        /**
         * Emits an event when the `IgxChipComponent` is clicked.
         * Returns the clicked `IgxChipComponent`, whether the event should be canceled.
         * ```typescript
         * chipClick(event: IChipClickEventArgs){
         *     let clickedChip = event.owner;
         * }
         * ```
         * ```html
         * <igx-chip #myChip [id]="'igx-chip-1'" [draggable]="true" (onClick)="chipClick($event)">
         * ```
         */
        _this.onClick = new EventEmitter();
        /**
         * Emits event when the `IgxChipComponent` is selected/deselected.
         * Returns the selected chip reference, whether the event should be canceled, what is the next selection state and
         * when the event is triggered by interaction `originalEvent` is provided, otherwise `originalEvent` is `null`.
         * ```typescript
         * chipSelect(event: IChipSelectEventArgs){
         *     let selectedChip = event.owner;
         * }
         * ```
         * ```html
         * <igx-chip #myChip [id]="'igx-chip-1'" [draggable]="true" (onSelection)="chipSelect($event)">
         * ```
         */
        _this.onSelection = new EventEmitter();
        /**
         * Emits an event when the `IgxChipComponent` keyboard navigation is being used.
         * Returns the focused/selected `IgxChipComponent`, whether the event should be canceled,
         * if the `alt`, `shift` or `control` key is pressed and the pressed key name.
         * ```typescript
         * chipKeyDown(event: IChipKeyDownEventArgs){
         *     let keyDown = event.key;
         * }
         * ```
         * ```html
         * <igx-chip #myChip [id]="'igx-chip-1'" [draggable]="true" (onKeyDown)="chipKeyDown($event)">
         * ```
         */
        _this.onKeyDown = new EventEmitter();
        /**
         * Emits an event when the `IgxChipComponent` has entered the `IgxChipsAreaComponent`.
         * Returns the target `IgxChipComponent`, the drag `IgxChipComponent`, as  well as
         * the original drop event arguments.
         * ```typescript
         * chipEnter(event: IChipEnterDragAreaEventArgs){
         *     let targetChip = event.targetChip;
         * }
         * ```
         * ```html
         * <igx-chip #myChip [id]="'igx-chip-1'" [draggable]="true" (onDragEnter)="chipEnter($event)">
         * ```
         */
        _this.onDragEnter = new EventEmitter();
        _this._selected = false;
        _this._selectedItemClass = 'igx-chip__item--selected';
        _this._movedWhileRemoving = false;
        return _this;
    }
    Object.defineProperty(IgxChipComponent.prototype, "selected", {
        /**
         * Returns if the `IgxChipComponent` is selected.
         * ```typescript
         * @ViewChild('myChip')
         * public chip: IgxChipComponent;
         * selectedChip(){
         *     let selectedChip = this.chip.selected;
         * }
         * ```
         */
        get: /**
         * Returns if the `IgxChipComponent` is selected.
         * ```typescript
         * \@ViewChild('myChip')
         * public chip: IgxChipComponent;
         * selectedChip(){
         *     let selectedChip = this.chip.selected;
         * }
         * ```
         * @return {?}
         */
        function () {
            return this._selected;
        },
        /**
         * Sets the `IgxChipComponent` selected state.
         * ```html
         * <igx-chip #myChip [id]="'igx-chip-1'" [selectable]="true" [selected]="true">
         * ```
         */
        set: /**
         * Sets the `IgxChipComponent` selected state.
         * ```html
         * <igx-chip #myChip [id]="'igx-chip-1'" [selectable]="true" [selected]="true">
         * ```
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this.changeSelection(newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxChipComponent.prototype, "color", {
        /**
         * Returns the background color of the `IgxChipComponent`.
         * ```typescript
         * @ViewChild('myChip')
         * public chip: IgxChipComponent;
         * ngAfterViewInit(){
         *     let chipColor = this.chip.color;
         * }
         * ```
         */
        get: /**
         * Returns the background color of the `IgxChipComponent`.
         * ```typescript
         * \@ViewChild('myChip')
         * public chip: IgxChipComponent;
         * ngAfterViewInit(){
         *     let chipColor = this.chip.color;
         * }
         * ```
         * @return {?}
         */
        function () {
            return this.chipArea.nativeElement.style.backgroundColor;
        },
        /**
         * An @Input property that sets the `IgxChipComponent` background color.
         * The `color` property supports string, rgb, hex.
         * ```html
         * <igx-chip #myChip [id]="'igx-chip-1'" [color]="'#ff0000'"></igx-chip>
         * ```
         */
        set: /**
         * An \@Input property that sets the `IgxChipComponent` background color.
         * The `color` property supports string, rgb, hex.
         * ```html
         * <igx-chip #myChip [id]="'igx-chip-1'" [color]="'#ff0000'"></igx-chip>
         * ```
         * @param {?} newColor
         * @return {?}
         */
        function (newColor) {
            this.chipArea.nativeElement.style.backgroundColor = newColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxChipComponent.prototype, "hostClass", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            /** @type {?} */
            var classes = [this.getComponentDensityClass('igx-chip')];
            classes.push(this.disabled ? 'igx-chip--disabled' : '');
            // The custom classes should be at the end.
            classes.push(this.class);
            return classes.join(' ');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxChipComponent.prototype, "removeButtonTemplate", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.removeIcon || this.defaultRemoveIcon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxChipComponent.prototype, "selectIconTemplate", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.selectIcon || this.defaultSelectIcon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxChipComponent.prototype, "ghostClass", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.getComponentDensityClass('igx-chip__ghost');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxChipComponent.prototype, "chipTabindex", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.disabled ? 0 : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} condition
     * @return {?}
     */
    IgxChipComponent.prototype.selectClass = /**
     * @hidden
     * @param {?} condition
     * @return {?}
     */
    function (condition) {
        var _a;
        /** @type {?} */
        var SELECT_CLASS = 'igx-chip__select';
        return _a = {},
            _a[SELECT_CLASS] = condition,
            _a[SELECT_CLASS + "--hidden"] = !condition,
            _a;
    };
    /**
     * @protected
     * @param {?} newValue
     * @param {?=} srcEvent
     * @return {?}
     */
    IgxChipComponent.prototype.changeSelection = /**
     * @protected
     * @param {?} newValue
     * @param {?=} srcEvent
     * @return {?}
     */
    function (newValue, srcEvent) {
        if (srcEvent === void 0) { srcEvent = null; }
        /** @type {?} */
        var onSelectArgs = {
            originalEvent: srcEvent,
            owner: this,
            selected: false,
            cancel: false
        };
        if (newValue && !this._selected) {
            onSelectArgs.selected = true;
            this.onSelection.emit(onSelectArgs);
            if (!onSelectArgs.cancel) {
                this.renderer.addClass(this.chipArea.nativeElement, this._selectedItemClass);
                this._selected = newValue;
            }
        }
        else if (!newValue && this._selected) {
            this.onSelection.emit(onSelectArgs);
            if (!onSelectArgs.cancel) {
                this.renderer.removeClass(this.chipArea.nativeElement, this._selectedItemClass);
                this._selected = newValue;
            }
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxChipComponent.prototype.onChipKeyDown = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyDownArgs = {
            originalEvent: event,
            owner: this,
            cancel: false
        };
        this.onKeyDown.emit(keyDownArgs);
        if (keyDownArgs.cancel) {
            return;
        }
        if ((event.key === 'Delete' || event.key === 'Del') && this.removable) {
            this.onRemove.emit({
                originalEvent: event,
                owner: this
            });
        }
        if ((event.key === ' ' || event.key === 'Spacebar') && this.selectable && !this.disabled) {
            this.changeSelection(!this.selected, event);
        }
        if (event.key !== 'Tab') {
            event.preventDefault();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxChipComponent.prototype.onRemoveBtnKeyDown = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.key === ' ' || event.key === 'Spacebar' || event.key === 'Enter') {
            this.onRemove.emit({
                originalEvent: event,
                owner: this
            });
            event.preventDefault();
            event.stopPropagation();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IgxChipComponent.prototype.onRemoveMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxChipComponent.prototype.onRemoveClick = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onRemove.emit({
            originalEvent: event,
            owner: this
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxChipComponent.prototype.onRemoveTouchMove = /**
     * @hidden
     * @return {?}
     */
    function () {
        // We don't remove chip if user starting touch interacting on the remove button moves the chip
        this._movedWhileRemoving = true;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxChipComponent.prototype.onRemoveTouchEnd = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this._movedWhileRemoving) {
            this.onRemoveClick(event);
        }
        this._movedWhileRemoving = false;
    };
    /**
     * @hidden
     */
    // -----------------------------
    // Start chip igxDrag behaviour
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    // -----------------------------
    // Start chip igxDrag behaviour
    IgxChipComponent.prototype.onChipDragStart = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    // -----------------------------
    // Start chip igxDrag behaviour
    function (event) {
        this.onMoveStart.emit({
            originalEvent: event.originalEvent,
            owner: this
        });
        event.cancel = !this.draggable || this.disabled;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxChipComponent.prototype.onChipDragEnd = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.dragDirective.dropFinished();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxChipComponent.prototype.onChipMoveEnd = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // moveEnd is triggered after return animation has finished. This happen when we drag and release the chip.
        this.onMoveEnd.emit({
            originalEvent: event.originalEvent,
            owner: this
        });
        if (this.selected) {
            this.chipArea.nativeElement.focus();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxChipComponent.prototype.onChipDragClicked = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var clickEventArgs = {
            originalEvent: event.originalEvent,
            owner: this,
            cancel: false
        };
        this.onClick.emit(clickEventArgs);
        if (!clickEventArgs.cancel && this.selectable && !this.disabled) {
            this.changeSelection(!this.selected, event.originalEvent);
        }
    };
    // End chip igxDrag behaviour
    /**
     * @hidden
     */
    // -----------------------------
    // Start chip igxDrop behaviour
    // End chip igxDrag behaviour
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    // -----------------------------
    // Start chip igxDrop behaviour
    IgxChipComponent.prototype.onChipDragEnterHandler = 
    // End chip igxDrag behaviour
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    // -----------------------------
    // Start chip igxDrop behaviour
    function (event) {
        if (this.dragDirective === event.drag || !event.dragData || !event.dragData.chip) {
            return;
        }
        /** @type {?} */
        var eventArgs = {
            owner: this,
            dragChip: event.dragData.chip,
            originalEvent: event
        };
        this.onDragEnter.emit(eventArgs);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxChipComponent.prototype.onChipDrop = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Cancel the default drop logic
        event.cancel = true;
    };
    IgxChipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-chip',
                    template: "<div #chipArea class=\"igx-chip__item\"\n    [attr.tabindex]=\"chipTabindex\"\n    (keydown)=\"onChipKeyDown($event)\"\n    [igxDrag]=\"{chip: this}\"\n    [hideBaseOnDrag]=\"hideBaseOnDrag\"\n    [animateOnRelease]=\"animateOnRelease\"\n    [ghostImageClass]=\"ghostClass\"\n    (dragStart)=\"onChipDragStart($event)\"\n    (dragEnd)=\"onChipDragEnd()\"\n    (returnMoveEnd)=\"onChipMoveEnd($event)\"\n    (dragClicked)=\"onChipDragClicked($event)\"\n    igxDrop\n    (onEnter)=\"onChipDragEnterHandler($event)\"\n    (onDrop)=\"onChipDrop($event)\">\n\n    <div [ngClass]=\"selectClass(selected)\">\n        <ng-container *ngTemplateOutlet=\"selectIconTemplate\"></ng-container>\n    </div>\n\n    <ng-content select=\"igx-prefix,[igxPrefix]\"></ng-content>\n\n    <div class=\"igx-chip__content\">\n        <ng-content></ng-content>\n    </div>\n\n    <ng-content select=\"igx-suffix,[igxSuffix]\"></ng-content>\n\n    <div class=\"igx-chip__remove\" *ngIf=\"removable\"\n        tabindex=\"0\"\n        (keydown)=\"onRemoveBtnKeyDown($event)\"\n        (pointerdown)=\"onRemoveMouseDown($event)\"\n        (mousedown)=\"onRemoveMouseDown($event)\"\n        (click)=\"onRemoveClick($event)\"\n        (touchmove)=\"onRemoveTouchMove()\"\n        (touchend)=\"onRemoveTouchEnd($event)\">\n        <ng-container *ngTemplateOutlet=\"removeButtonTemplate\"></ng-container>\n    </div>\n</div>\n\n<ng-template #defaultSelectIcon>\n    <igx-icon>done</igx-icon>\n</ng-template>\n\n<ng-template #defaultRemoveIcon>\n    <igx-icon>cancel</igx-icon>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    IgxChipComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
    ]; };
    IgxChipComponent.propDecorators = {
        id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
        data: [{ type: Input }],
        draggable: [{ type: Input }],
        animateOnRelease: [{ type: Input }],
        hideBaseOnDrag: [{ type: Input }],
        removable: [{ type: Input }],
        removeIcon: [{ type: Input }],
        selectable: [{ type: Input }],
        selectIcon: [{ type: Input }],
        class: [{ type: Input }],
        disabled: [{ type: Input }],
        selected: [{ type: Input }],
        color: [{ type: Input }],
        onMoveStart: [{ type: Output }],
        onMoveEnd: [{ type: Output }],
        onRemove: [{ type: Output }],
        onClick: [{ type: Output }],
        onSelection: [{ type: Output }],
        onKeyDown: [{ type: Output }],
        onDragEnter: [{ type: Output }],
        hostClass: [{ type: HostBinding, args: ['attr.class',] }],
        dragDirective: [{ type: ViewChild, args: ['chipArea', { read: IgxDragDirective, static: true },] }],
        chipArea: [{ type: ViewChild, args: ['chipArea', { read: ElementRef, static: true },] }],
        defaultRemoveIcon: [{ type: ViewChild, args: ['defaultRemoveIcon', { read: TemplateRef, static: true },] }],
        defaultSelectIcon: [{ type: ViewChild, args: ['defaultSelectIcon', { read: TemplateRef, static: true },] }]
    };
    return IgxChipComponent;
}(DisplayDensityBase));
export { IgxChipComponent };
if (false) {
    /**
     * An \@Input property that sets the value of `id` attribute. If not provided it will be automatically generated.
     * ```html
     * <igx-chip [id]="'igx-chip-1'"></igx-chip>
     * ```
     * @type {?}
     */
    IgxChipComponent.prototype.id;
    /**
     * An \@Input property that stores data related to the chip.
     * ```html
     * <igx-chip [data]="{ value: 'Country' }"></igx-chip>
     * ```
     * @type {?}
     */
    IgxChipComponent.prototype.data;
    /**
     * An \@Input property that defines if the `IgxChipComponent` can be dragged in order to change it's position.
     * By default it is set to false.
     * ```html
     * <igx-chip [id]="'igx-chip-1'" [draggable]="true"></igx-chip>
     * ```
     * @type {?}
     */
    IgxChipComponent.prototype.draggable;
    /**
     * An \@Input property that enables/disables the draggable element animation when the element is released.
     * By default it's set to true.
     * ```html
     * <igx-chip [id]="'igx-chip-1'" [draggable]="true" [animateOnRelease]="false"></igx-chip>
     * ```
     * @type {?}
     */
    IgxChipComponent.prototype.animateOnRelease;
    /**
     * An \@Input property that enables/disables the hiding of the base element that has been dragged.
     * By default it's set to true.
     * ```html
     * <igx-chip [id]="'igx-chip-1'" [draggable]="true" [hideBaseOnDrag]="false"></igx-chip>
     * ```
     * @type {?}
     */
    IgxChipComponent.prototype.hideBaseOnDrag;
    /**
     * An \@Input property that defines if the `IgxChipComponent` should render remove button and throw remove events.
     * By default it is set to false.
     * ```html
     * <igx-chip [id]="'igx-chip-1'" [draggable]="true" [removable]="true"></igx-chip>
     * ```
     * @type {?}
     */
    IgxChipComponent.prototype.removable;
    /**
     * An \@Input property that overrides the default icon that the chip applies to the remove button.
     * ```html
     * <igx-chip [id]="chip.id" [removable]="true" [removeIcon]="iconTemplate"></igx-chip>
     * <ng-template #iconTemplate><igx-icon>delete</igx-icon></ng-template>
     * ```
     * @type {?}
     */
    IgxChipComponent.prototype.removeIcon;
    /**
     * An \@Input property that defines if the `IgxChipComponent` can be selected on click or through navigation,
     * By default it is set to false.
     * ```html
     * <igx-chip [id]="chip.id" [draggable]="true" [removable]="true" [selectable]="true"></igx-chip>
     * ```
     * @type {?}
     */
    IgxChipComponent.prototype.selectable;
    /**
     * An \@Input property that overrides the default icon that the chip applies when it is selected.
     * ```html
     * <igx-chip [id]="chip.id" [selectable]="true" [selectIcon]="iconTemplate"></igx-chip>
     * <ng-template #iconTemplate><igx-icon>done_outline</igx-icon></ng-template>
     * ```
     * @type {?}
     */
    IgxChipComponent.prototype.selectIcon;
    /**
     * @hidden
     * @type {?}
     */
    IgxChipComponent.prototype.class;
    /**
     * An \@Input property that defines if the `IgxChipComponent` is disabled. When disabled it restricts user interactions
     * like focusing on click or tab, selection on click or Space, dragging.
     * By default it is set to false.
     * ```html
     * <igx-chip [id]="chip.id" [disabled]="true"></igx-chip>
     * ```
     * @type {?}
     */
    IgxChipComponent.prototype.disabled;
    /**
     * Emits an event when the `IgxChipComponent` moving starts.
     * Returns the moving `IgxChipComponent`.
     * ```typescript
     * moveStarted(event: IBaseChipEventArgs){
     *     let movingChip = event.owner;
     * }
     * ```
     * ```html
     * <igx-chip #myChip [id]="'igx-chip-1'" [draggable]="true" (onMoveStart)="moveStarted($event)">
     * ```
     * @type {?}
     */
    IgxChipComponent.prototype.onMoveStart;
    /**
     * Emits an event when the `IgxChipComponent` moving ends.
     * Returns the moved `IgxChipComponent`.
     * ```typescript
     * moveEnded(event: IBaseChipEventArgs){
     *     let movedChip = event.owner;
     * }
     * ```
     * ```html
     * <igx-chip #myChip [id]="'igx-chip-1'" [draggable]="true" (onMoveEnd)="moveEnded($event)">
     * ```
     * @type {?}
     */
    IgxChipComponent.prototype.onMoveEnd;
    /**
     * Emits an event when the `IgxChipComponent` is removed.
     * Returns the removed `IgxChipComponent`.
     * ```typescript
     * remove(event: IBaseChipEventArgs){
     *     let removedChip = event.owner;
     * }
     * ```
     * ```html
     * <igx-chip #myChip [id]="'igx-chip-1'" [draggable]="true" (onRemove)="remove($event)">
     * ```
     * @type {?}
     */
    IgxChipComponent.prototype.onRemove;
    /**
     * Emits an event when the `IgxChipComponent` is clicked.
     * Returns the clicked `IgxChipComponent`, whether the event should be canceled.
     * ```typescript
     * chipClick(event: IChipClickEventArgs){
     *     let clickedChip = event.owner;
     * }
     * ```
     * ```html
     * <igx-chip #myChip [id]="'igx-chip-1'" [draggable]="true" (onClick)="chipClick($event)">
     * ```
     * @type {?}
     */
    IgxChipComponent.prototype.onClick;
    /**
     * Emits event when the `IgxChipComponent` is selected/deselected.
     * Returns the selected chip reference, whether the event should be canceled, what is the next selection state and
     * when the event is triggered by interaction `originalEvent` is provided, otherwise `originalEvent` is `null`.
     * ```typescript
     * chipSelect(event: IChipSelectEventArgs){
     *     let selectedChip = event.owner;
     * }
     * ```
     * ```html
     * <igx-chip #myChip [id]="'igx-chip-1'" [draggable]="true" (onSelection)="chipSelect($event)">
     * ```
     * @type {?}
     */
    IgxChipComponent.prototype.onSelection;
    /**
     * Emits an event when the `IgxChipComponent` keyboard navigation is being used.
     * Returns the focused/selected `IgxChipComponent`, whether the event should be canceled,
     * if the `alt`, `shift` or `control` key is pressed and the pressed key name.
     * ```typescript
     * chipKeyDown(event: IChipKeyDownEventArgs){
     *     let keyDown = event.key;
     * }
     * ```
     * ```html
     * <igx-chip #myChip [id]="'igx-chip-1'" [draggable]="true" (onKeyDown)="chipKeyDown($event)">
     * ```
     * @type {?}
     */
    IgxChipComponent.prototype.onKeyDown;
    /**
     * Emits an event when the `IgxChipComponent` has entered the `IgxChipsAreaComponent`.
     * Returns the target `IgxChipComponent`, the drag `IgxChipComponent`, as  well as
     * the original drop event arguments.
     * ```typescript
     * chipEnter(event: IChipEnterDragAreaEventArgs){
     *     let targetChip = event.targetChip;
     * }
     * ```
     * ```html
     * <igx-chip #myChip [id]="'igx-chip-1'" [draggable]="true" (onDragEnter)="chipEnter($event)">
     * ```
     * @type {?}
     */
    IgxChipComponent.prototype.onDragEnter;
    /**
     * Property that contains a reference to the `IgxDragDirective` the `IgxChipComponent` uses for dragging behavior.
     * ```html
     * <igx-chip [id]="chip.id" [draggable]="true"></igx-chip>
     * ```
     * ```typescript
     * onMoveStart(event: IBaseChipEventArgs){
     *     let dragDirective = event.owner.dragDirective;
     * }
     * ```
     * @type {?}
     */
    IgxChipComponent.prototype.dragDirective;
    /**
     * @hidden
     * @type {?}
     */
    IgxChipComponent.prototype.chipArea;
    /**
     * @hidden
     * @type {?}
     */
    IgxChipComponent.prototype.defaultRemoveIcon;
    /**
     * @hidden
     * @type {?}
     */
    IgxChipComponent.prototype.defaultSelectIcon;
    /**
     * @type {?}
     * @protected
     */
    IgxChipComponent.prototype._selected;
    /**
     * @type {?}
     * @protected
     */
    IgxChipComponent.prototype._selectedItemClass;
    /**
     * @type {?}
     * @protected
     */
    IgxChipComponent.prototype._movedWhileRemoving;
    /** @type {?} */
    IgxChipComponent.prototype.cdr;
    /** @type {?} */
    IgxChipComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    IgxChipComponent.prototype.renderer;
    /**
     * @type {?}
     * @protected
     */
    IgxChipComponent.prototype._displayDensityOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NoaXBzL2NoaXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxNQUFNLEVBQ04sUUFBUSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBMEMsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6SCxPQUFPLEVBQ0gsZ0JBQWdCLEVBS25CLE1BQU0sMkNBQTJDLENBQUM7Ozs7QUFHbkQsd0NBR0M7OztJQUZHLDJDQUE4Rjs7SUFDOUYsbUNBQXdCOzs7OztBQUc1Qix5Q0FFQzs7O0lBREcscUNBQWdCOzs7OztBQUdwQiwyQ0FHQzs7O0lBRkcsOENBQTZCOztJQUM3Qix1Q0FBZ0I7Ozs7O0FBR3BCLGlEQUVDOzs7SUFERywrQ0FBMkI7Ozs7O0FBRy9CLDBDQUdDOzs7SUFGRyxzQ0FBZ0I7O0lBQ2hCLHdDQUFrQjs7O0lBR2xCLE9BQU8sR0FBRyxDQUFDO0FBRWY7SUFJc0MsNENBQWtCO0lBb1ZwRCwwQkFBbUIsR0FBc0IsRUFBUyxVQUFzQixFQUFVLFFBQW1CLEVBQzlDLHNCQUE4QztRQURyRyxZQUVRLGtCQUFNLHNCQUFzQixDQUFDLFNBQ2hDO1FBSGMsU0FBRyxHQUFILEdBQUcsQ0FBbUI7UUFBUyxnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGNBQVEsR0FBUixRQUFRLENBQVc7UUFDOUMsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUF3Qjs7Ozs7OztRQTNVOUYsUUFBRSxHQUFHLGNBQVksT0FBTyxFQUFJLENBQUM7Ozs7Ozs7O1FBbUI3QixlQUFTLEdBQUcsS0FBSyxDQUFDOzs7Ozs7OztRQVVsQixzQkFBZ0IsR0FBRyxJQUFJLENBQUM7Ozs7Ozs7O1FBVXhCLG9CQUFjLEdBQUcsSUFBSSxDQUFDOzs7Ozs7OztRQVV0QixlQUFTLEdBQUcsS0FBSyxDQUFDOzs7Ozs7OztRQW9CbEIsZ0JBQVUsR0FBRyxLQUFLLENBQUM7Ozs7UUFnQm5CLFdBQUssR0FBRyxFQUFFLENBQUM7Ozs7Ozs7OztRQVdYLGNBQVEsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7UUFrRWpCLGlCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7Ozs7Ozs7Ozs7Ozs7UUFlckQsZUFBUyxHQUFHLElBQUksWUFBWSxFQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7O1FBZW5ELGNBQVEsR0FBRyxJQUFJLFlBQVksRUFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7OztRQWVsRCxhQUFPLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7Ozs7Ozs7Ozs7Ozs7O1FBZ0JsRCxpQkFBVyxHQUFHLElBQUksWUFBWSxFQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7OztRQWdCdkQsZUFBUyxHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7OztRQWdCdEQsaUJBQVcsR0FBRyxJQUFJLFlBQVksRUFBK0IsQ0FBQztRQXVFM0QsZUFBUyxHQUFHLEtBQUssQ0FBQztRQUNsQix3QkFBa0IsR0FBRywwQkFBMEIsQ0FBQztRQUNoRCx5QkFBbUIsR0FBRyxLQUFLLENBQUM7O0lBS2xDLENBQUM7SUFyT0wsc0JBQ1csc0NBQVE7UUFJbkI7Ozs7Ozs7OztXQVNHOzs7Ozs7Ozs7Ozs7UUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO1FBdkJEOzs7OztXQUtHOzs7Ozs7Ozs7UUFDSCxVQUNvQixRQUFpQjtZQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBdUJELHNCQUNXLG1DQUFLO1FBSWhCOzs7Ozs7Ozs7V0FTRzs7Ozs7Ozs7Ozs7O1FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7UUFDN0QsQ0FBQztRQXhCRDs7Ozs7O1dBTUc7Ozs7Ozs7Ozs7UUFDSCxVQUNpQixRQUFRO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO1FBQ2pFLENBQUM7OztPQUFBO0lBK0hELHNCQUNJLHVDQUFTO1FBSmI7O1dBRUc7Ozs7O1FBQ0g7O2dCQUVVLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzRCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4RCwyQ0FBMkM7WUFDM0MsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBcUNELHNCQUFXLGtEQUFvQjtRQUgvQjs7V0FFRzs7Ozs7UUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDckQsQ0FBQzs7O09BQUE7SUFLRCxzQkFBVyxnREFBa0I7UUFIN0I7O1dBRUc7Ozs7O1FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ3JELENBQUM7OztPQUFBO0lBS0Qsc0JBQVcsd0NBQVU7UUFIckI7O1dBRUc7Ozs7O1FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzVELENBQUM7OztPQUFBO0lBRUQsc0JBQVcsMENBQVk7Ozs7UUFBdkI7WUFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFXRDs7T0FFRzs7Ozs7O0lBQ0ksc0NBQVc7Ozs7O0lBQWxCLFVBQW1CLFNBQWtCOzs7WUFDM0IsWUFBWSxHQUFHLGtCQUFrQjtRQUV2QztZQUNJLEdBQUMsWUFBWSxJQUFHLFNBQVM7WUFDekIsR0FBSSxZQUFZLGFBQVUsSUFBRyxDQUFDLFNBQVM7ZUFDekM7SUFDTixDQUFDOzs7Ozs7O0lBRVMsMENBQWU7Ozs7OztJQUF6QixVQUEwQixRQUFpQixFQUFFLFFBQWU7UUFBZix5QkFBQSxFQUFBLGVBQWU7O1lBQ2xELFlBQVksR0FBeUI7WUFDdkMsYUFBYSxFQUFFLFFBQVE7WUFDdkIsS0FBSyxFQUFFLElBQUk7WUFDWCxRQUFRLEVBQUUsS0FBSztZQUNmLE1BQU0sRUFBRSxLQUFLO1NBQ2hCO1FBRUQsSUFBSSxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzdCLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRXBDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO2dCQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDN0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7YUFDN0I7U0FDSjthQUFNLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUVwQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQ2hGLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2FBQzdCO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNJLHdDQUFhOzs7OztJQUFwQixVQUFxQixLQUFvQjs7WUFDL0IsV0FBVyxHQUEwQjtZQUN2QyxhQUFhLEVBQUUsS0FBSztZQUNwQixLQUFLLEVBQUUsSUFBSTtZQUNYLE1BQU0sRUFBRSxLQUFLO1NBQ2hCO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakMsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3BCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ2YsYUFBYSxFQUFFLEtBQUs7Z0JBQ3BCLEtBQUssRUFBRSxJQUFJO2FBQ2QsQ0FBQyxDQUFDO1NBQ047UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN0RixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMvQztRQUVELElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxLQUFLLEVBQUU7WUFDckIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSSw2Q0FBa0I7Ozs7O0lBQXpCLFVBQTBCLEtBQW9CO1FBQzFDLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxVQUFVLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7WUFDeEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ2YsYUFBYSxFQUFFLEtBQUs7Z0JBQ3BCLEtBQUssRUFBRSxJQUFJO2FBQ2QsQ0FBQyxDQUFDO1lBRUgsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMzQjtJQUNMLENBQUM7Ozs7O0lBRU0sNENBQWlCOzs7O0lBQXhCLFVBQXlCLEtBQWdDO1FBQ3JELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNJLHdDQUFhOzs7OztJQUFwQixVQUFxQixLQUE4QjtRQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNmLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLEtBQUssRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNJLDRDQUFpQjs7OztJQUF4QjtRQUNJLDhGQUE4RjtRQUM5RixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0ksMkNBQWdCOzs7OztJQUF2QixVQUF3QixLQUFpQjtRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7T0FFRztJQUNILGdDQUFnQztJQUNoQywrQkFBK0I7Ozs7Ozs7O0lBQ3hCLDBDQUFlOzs7Ozs7O0lBQXRCLFVBQXVCLEtBQTBCO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ2xCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxLQUFLLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDcEQsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNJLHdDQUFhOzs7O0lBQXBCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNJLHdDQUFhOzs7OztJQUFwQixVQUFxQixLQUF5QjtRQUMxQywyR0FBMkc7UUFDM0csSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDaEIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLEtBQUssRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdkM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNJLDRDQUFpQjs7Ozs7SUFBeEIsVUFBeUIsS0FBeUI7O1lBQ3hDLGNBQWMsR0FBd0I7WUFDeEMsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLEtBQUssRUFBRSxJQUFJO1lBQ1gsTUFBTSxFQUFFLEtBQUs7U0FDaEI7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUM3RCxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDN0Q7SUFDTCxDQUFDO0lBQ0QsNkJBQTZCO0lBRTdCOztPQUVHO0lBQ0gsZ0NBQWdDO0lBQ2hDLCtCQUErQjs7Ozs7Ozs7O0lBQ3hCLGlEQUFzQjs7Ozs7Ozs7O0lBQTdCLFVBQThCLEtBQTRCO1FBQ3RELElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQzlFLE9BQU87U0FDVjs7WUFFSyxTQUFTLEdBQWdDO1lBQzNDLEtBQUssRUFBRSxJQUFJO1lBQ1gsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSTtZQUM3QixhQUFhLEVBQUUsS0FBSztTQUN2QjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0kscUNBQVU7Ozs7O0lBQWpCLFVBQWtCLEtBQXVCO1FBQ3JDLGdDQUFnQztRQUNoQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDOztnQkE3aEJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIscWlEQUFrQztpQkFDckM7Ozs7Z0JBbERHLGlCQUFpQjtnQkFFakIsVUFBVTtnQkFLVixTQUFTO2dEQWlZSixRQUFRLFlBQUksTUFBTSxTQUFDLG1CQUFtQjs7O3FCQTdVMUMsV0FBVyxTQUFDLFNBQVMsY0FDckIsS0FBSzt1QkFTTCxLQUFLOzRCQVVMLEtBQUs7bUNBVUwsS0FBSztpQ0FVTCxLQUFLOzRCQVVMLEtBQUs7NkJBVUwsS0FBSzs2QkFVTCxLQUFLOzZCQVVMLEtBQUs7d0JBTUwsS0FBSzsyQkFXTCxLQUFLOzJCQVNMLEtBQUs7d0JBMEJMLEtBQUs7OEJBK0JMLE1BQU07NEJBZU4sTUFBTTsyQkFlTixNQUFNOzBCQWVOLE1BQU07OEJBZ0JOLE1BQU07NEJBZ0JOLE1BQU07OEJBZ0JOLE1BQU07NEJBTU4sV0FBVyxTQUFDLFlBQVk7Z0NBb0J4QixTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBTTlELFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7b0NBTXhELFNBQVMsU0FBQyxtQkFBbUIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtvQ0FNbEUsU0FBUyxTQUFDLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQXVPdkUsdUJBQUM7Q0FBQSxBQS9oQkQsQ0FJc0Msa0JBQWtCLEdBMmhCdkQ7U0EzaEJZLGdCQUFnQjs7Ozs7Ozs7O0lBUXpCLDhCQUVvQzs7Ozs7Ozs7SUFRcEMsZ0NBQ2lCOzs7Ozs7Ozs7SUFTakIscUNBQ3lCOzs7Ozs7Ozs7SUFTekIsNENBQytCOzs7Ozs7Ozs7SUFTL0IsMENBQzZCOzs7Ozs7Ozs7SUFTN0IscUNBQ3lCOzs7Ozs7Ozs7SUFTekIsc0NBQ29DOzs7Ozs7Ozs7SUFTcEMsc0NBQzBCOzs7Ozs7Ozs7SUFTMUIsc0NBQ29DOzs7OztJQUtwQyxpQ0FDa0I7Ozs7Ozs7Ozs7SUFVbEIsb0NBQ3dCOzs7Ozs7Ozs7Ozs7OztJQWlFeEIsdUNBQzREOzs7Ozs7Ozs7Ozs7OztJQWM1RCxxQ0FDMEQ7Ozs7Ozs7Ozs7Ozs7O0lBYzFELG9DQUN5RDs7Ozs7Ozs7Ozs7Ozs7SUFjekQsbUNBQ3lEOzs7Ozs7Ozs7Ozs7Ozs7SUFlekQsdUNBQzhEOzs7Ozs7Ozs7Ozs7Ozs7SUFlOUQscUNBQzZEOzs7Ozs7Ozs7Ozs7Ozs7SUFlN0QsdUNBQ3FFOzs7Ozs7Ozs7Ozs7O0lBeUJyRSx5Q0FDdUM7Ozs7O0lBS3ZDLG9DQUM0Qjs7Ozs7SUFLNUIsNkNBQzJDOzs7OztJQUszQyw2Q0FDMkM7Ozs7O0lBMkIzQyxxQ0FBNEI7Ozs7O0lBQzVCLDhDQUEwRDs7Ozs7SUFDMUQsK0NBQXNDOztJQUUxQiwrQkFBNkI7O0lBQUUsc0NBQTZCOzs7OztJQUFFLG9DQUEyQjs7Ozs7SUFDakcsa0RBQWlHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSW5wdXQsXG4gICAgT3V0cHV0LFxuICAgIFZpZXdDaGlsZCxcbiAgICBSZW5kZXJlcjIsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgSW5qZWN0LFxuICAgIE9wdGlvbmFsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzcGxheURlbnNpdHksIElEaXNwbGF5RGVuc2l0eU9wdGlvbnMsIERpc3BsYXlEZW5zaXR5VG9rZW4sIERpc3BsYXlEZW5zaXR5QmFzZSB9IGZyb20gJy4uL2NvcmUvZGlzcGxheURlbnNpdHknO1xuaW1wb3J0IHtcbiAgICBJZ3hEcmFnRGlyZWN0aXZlLFxuICAgIElEcmFnQmFzZUV2ZW50QXJncyxcbiAgICBJRHJhZ1N0YXJ0RXZlbnRBcmdzLFxuICAgIElneERyb3BFbnRlckV2ZW50QXJncyxcbiAgICBJZ3hEcm9wRXZlbnRBcmdzXG59IGZyb20gJy4uL2RpcmVjdGl2ZXMvZHJhZ2Ryb3AvZHJhZ2Ryb3AuZGlyZWN0aXZlJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIElCYXNlQ2hpcEV2ZW50QXJncyB7XG4gICAgb3JpZ2luYWxFdmVudDogUG9pbnRlckV2ZW50IHwgTW91c2VFdmVudCB8IFRvdWNoRXZlbnQgfCBLZXlib2FyZEV2ZW50IHwgSWd4RHJvcEVudGVyRXZlbnRBcmdzO1xuICAgIG93bmVyOiBJZ3hDaGlwQ29tcG9uZW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDaGlwQ2xpY2tFdmVudEFyZ3MgZXh0ZW5kcyBJQmFzZUNoaXBFdmVudEFyZ3Mge1xuICAgIGNhbmNlbDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ2hpcEtleURvd25FdmVudEFyZ3MgZXh0ZW5kcyBJQmFzZUNoaXBFdmVudEFyZ3Mge1xuICAgIG9yaWdpbmFsRXZlbnQ6IEtleWJvYXJkRXZlbnQ7XG4gICAgY2FuY2VsOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDaGlwRW50ZXJEcmFnQXJlYUV2ZW50QXJncyBleHRlbmRzIElCYXNlQ2hpcEV2ZW50QXJncyB7XG4gICAgZHJhZ0NoaXA6IElneENoaXBDb21wb25lbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNoaXBTZWxlY3RFdmVudEFyZ3MgZXh0ZW5kcyBJQmFzZUNoaXBFdmVudEFyZ3Mge1xuICAgIGNhbmNlbDogYm9vbGVhbjtcbiAgICBzZWxlY3RlZDogYm9vbGVhbjtcbn1cblxubGV0IENISVBfSUQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lneC1jaGlwJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2NoaXAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneENoaXBDb21wb25lbnQgZXh0ZW5kcyBEaXNwbGF5RGVuc2l0eUJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgdmFsdWUgb2YgYGlkYCBhdHRyaWJ1dGUuIElmIG5vdCBwcm92aWRlZCBpdCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNoaXAgW2lkXT1cIidpZ3gtY2hpcC0xJ1wiPjwvaWd4LWNoaXA+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZCA9IGBpZ3gtY2hpcC0ke0NISVBfSUQrK31gO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc3RvcmVzIGRhdGEgcmVsYXRlZCB0byB0aGUgY2hpcC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jaGlwIFtkYXRhXT1cInsgdmFsdWU6ICdDb3VudHJ5JyB9XCI+PC9pZ3gtY2hpcD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkYXRhOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBkZWZpbmVzIGlmIHRoZSBgSWd4Q2hpcENvbXBvbmVudGAgY2FuIGJlIGRyYWdnZWQgaW4gb3JkZXIgdG8gY2hhbmdlIGl0J3MgcG9zaXRpb24uXG4gICAgICogQnkgZGVmYXVsdCBpdCBpcyBzZXQgdG8gZmFsc2UuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2hpcCBbaWRdPVwiJ2lneC1jaGlwLTEnXCIgW2RyYWdnYWJsZV09XCJ0cnVlXCI+PC9pZ3gtY2hpcD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkcmFnZ2FibGUgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGVuYWJsZXMvZGlzYWJsZXMgdGhlIGRyYWdnYWJsZSBlbGVtZW50IGFuaW1hdGlvbiB3aGVuIHRoZSBlbGVtZW50IGlzIHJlbGVhc2VkLlxuICAgICAqIEJ5IGRlZmF1bHQgaXQncyBzZXQgdG8gdHJ1ZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jaGlwIFtpZF09XCInaWd4LWNoaXAtMSdcIiBbZHJhZ2dhYmxlXT1cInRydWVcIiBbYW5pbWF0ZU9uUmVsZWFzZV09XCJmYWxzZVwiPjwvaWd4LWNoaXA+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgYW5pbWF0ZU9uUmVsZWFzZSA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBlbmFibGVzL2Rpc2FibGVzIHRoZSBoaWRpbmcgb2YgdGhlIGJhc2UgZWxlbWVudCB0aGF0IGhhcyBiZWVuIGRyYWdnZWQuXG4gICAgICogQnkgZGVmYXVsdCBpdCdzIHNldCB0byB0cnVlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNoaXAgW2lkXT1cIidpZ3gtY2hpcC0xJ1wiIFtkcmFnZ2FibGVdPVwidHJ1ZVwiIFtoaWRlQmFzZU9uRHJhZ109XCJmYWxzZVwiPjwvaWd4LWNoaXA+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaGlkZUJhc2VPbkRyYWcgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgZGVmaW5lcyBpZiB0aGUgYElneENoaXBDb21wb25lbnRgIHNob3VsZCByZW5kZXIgcmVtb3ZlIGJ1dHRvbiBhbmQgdGhyb3cgcmVtb3ZlIGV2ZW50cy5cbiAgICAgKiBCeSBkZWZhdWx0IGl0IGlzIHNldCB0byBmYWxzZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jaGlwIFtpZF09XCInaWd4LWNoaXAtMSdcIiBbZHJhZ2dhYmxlXT1cInRydWVcIiBbcmVtb3ZhYmxlXT1cInRydWVcIj48L2lneC1jaGlwPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJlbW92YWJsZSA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgb3ZlcnJpZGVzIHRoZSBkZWZhdWx0IGljb24gdGhhdCB0aGUgY2hpcCBhcHBsaWVzIHRvIHRoZSByZW1vdmUgYnV0dG9uLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNoaXAgW2lkXT1cImNoaXAuaWRcIiBbcmVtb3ZhYmxlXT1cInRydWVcIiBbcmVtb3ZlSWNvbl09XCJpY29uVGVtcGxhdGVcIj48L2lneC1jaGlwPlxuICAgICAqIDxuZy10ZW1wbGF0ZSAjaWNvblRlbXBsYXRlPjxpZ3gtaWNvbj5kZWxldGU8L2lneC1pY29uPjwvbmctdGVtcGxhdGU+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmVtb3ZlSWNvbjogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGRlZmluZXMgaWYgdGhlIGBJZ3hDaGlwQ29tcG9uZW50YCBjYW4gYmUgc2VsZWN0ZWQgb24gY2xpY2sgb3IgdGhyb3VnaCBuYXZpZ2F0aW9uLFxuICAgICAqIEJ5IGRlZmF1bHQgaXQgaXMgc2V0IHRvIGZhbHNlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNoaXAgW2lkXT1cImNoaXAuaWRcIiBbZHJhZ2dhYmxlXT1cInRydWVcIiBbcmVtb3ZhYmxlXT1cInRydWVcIiBbc2VsZWN0YWJsZV09XCJ0cnVlXCI+PC9pZ3gtY2hpcD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBvdmVycmlkZXMgdGhlIGRlZmF1bHQgaWNvbiB0aGF0IHRoZSBjaGlwIGFwcGxpZXMgd2hlbiBpdCBpcyBzZWxlY3RlZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jaGlwIFtpZF09XCJjaGlwLmlkXCIgW3NlbGVjdGFibGVdPVwidHJ1ZVwiIFtzZWxlY3RJY29uXT1cImljb25UZW1wbGF0ZVwiPjwvaWd4LWNoaXA+XG4gICAgICogPG5nLXRlbXBsYXRlICNpY29uVGVtcGxhdGU+PGlneC1pY29uPmRvbmVfb3V0bGluZTwvaWd4LWljb24+PC9uZy10ZW1wbGF0ZT5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZWxlY3RJY29uOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNsYXNzID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBkZWZpbmVzIGlmIHRoZSBgSWd4Q2hpcENvbXBvbmVudGAgaXMgZGlzYWJsZWQuIFdoZW4gZGlzYWJsZWQgaXQgcmVzdHJpY3RzIHVzZXIgaW50ZXJhY3Rpb25zXG4gICAgICogbGlrZSBmb2N1c2luZyBvbiBjbGljayBvciB0YWIsIHNlbGVjdGlvbiBvbiBjbGljayBvciBTcGFjZSwgZHJhZ2dpbmcuXG4gICAgICogQnkgZGVmYXVsdCBpdCBpcyBzZXQgdG8gZmFsc2UuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2hpcCBbaWRdPVwiY2hpcC5pZFwiIFtkaXNhYmxlZF09XCJ0cnVlXCI+PC9pZ3gtY2hpcD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYElneENoaXBDb21wb25lbnRgIHNlbGVjdGVkIHN0YXRlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNoaXAgI215Q2hpcCBbaWRdPVwiJ2lneC1jaGlwLTEnXCIgW3NlbGVjdGFibGVdPVwidHJ1ZVwiIFtzZWxlY3RlZF09XCJ0cnVlXCI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHNlbGVjdGVkKG5ld1ZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlU2VsZWN0aW9uKG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGlmIHRoZSBgSWd4Q2hpcENvbXBvbmVudGAgaXMgc2VsZWN0ZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIEBWaWV3Q2hpbGQoJ215Q2hpcCcpXG4gICAgICogcHVibGljIGNoaXA6IElneENoaXBDb21wb25lbnQ7XG4gICAgICogc2VsZWN0ZWRDaGlwKCl7XG4gICAgICogICAgIGxldCBzZWxlY3RlZENoaXAgPSB0aGlzLmNoaXAuc2VsZWN0ZWQ7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSBgSWd4Q2hpcENvbXBvbmVudGAgYmFja2dyb3VuZCBjb2xvci5cbiAgICAgKiBUaGUgYGNvbG9yYCBwcm9wZXJ0eSBzdXBwb3J0cyBzdHJpbmcsIHJnYiwgaGV4LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNoaXAgI215Q2hpcCBbaWRdPVwiJ2lneC1jaGlwLTEnXCIgW2NvbG9yXT1cIicjZmYwMDAwJ1wiPjwvaWd4LWNoaXA+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IGNvbG9yKG5ld0NvbG9yKSB7XG4gICAgICAgIHRoaXMuY2hpcEFyZWEubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBuZXdDb2xvcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBgSWd4Q2hpcENvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIEBWaWV3Q2hpbGQoJ215Q2hpcCcpXG4gICAgICogcHVibGljIGNoaXA6IElneENoaXBDb21wb25lbnQ7XG4gICAgICogbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgIGxldCBjaGlwQ29sb3IgPSB0aGlzLmNoaXAuY29sb3I7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgY29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaXBBcmVhLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGBJZ3hDaGlwQ29tcG9uZW50YCBtb3Zpbmcgc3RhcnRzLlxuICAgICAqIFJldHVybnMgdGhlIG1vdmluZyBgSWd4Q2hpcENvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIG1vdmVTdGFydGVkKGV2ZW50OiBJQmFzZUNoaXBFdmVudEFyZ3Mpe1xuICAgICAqICAgICBsZXQgbW92aW5nQ2hpcCA9IGV2ZW50Lm93bmVyO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jaGlwICNteUNoaXAgW2lkXT1cIidpZ3gtY2hpcC0xJ1wiIFtkcmFnZ2FibGVdPVwidHJ1ZVwiIChvbk1vdmVTdGFydCk9XCJtb3ZlU3RhcnRlZCgkZXZlbnQpXCI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uTW92ZVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxJQmFzZUNoaXBFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBgSWd4Q2hpcENvbXBvbmVudGAgbW92aW5nIGVuZHMuXG4gICAgICogUmV0dXJucyB0aGUgbW92ZWQgYElneENoaXBDb21wb25lbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBtb3ZlRW5kZWQoZXZlbnQ6IElCYXNlQ2hpcEV2ZW50QXJncyl7XG4gICAgICogICAgIGxldCBtb3ZlZENoaXAgPSBldmVudC5vd25lcjtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2hpcCAjbXlDaGlwIFtpZF09XCInaWd4LWNoaXAtMSdcIiBbZHJhZ2dhYmxlXT1cInRydWVcIiAob25Nb3ZlRW5kKT1cIm1vdmVFbmRlZCgkZXZlbnQpXCI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uTW92ZUVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8SUJhc2VDaGlwRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgYElneENoaXBDb21wb25lbnRgIGlzIHJlbW92ZWQuXG4gICAgICogUmV0dXJucyB0aGUgcmVtb3ZlZCBgSWd4Q2hpcENvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHJlbW92ZShldmVudDogSUJhc2VDaGlwRXZlbnRBcmdzKXtcbiAgICAgKiAgICAgbGV0IHJlbW92ZWRDaGlwID0gZXZlbnQub3duZXI7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNoaXAgI215Q2hpcCBbaWRdPVwiJ2lneC1jaGlwLTEnXCIgW2RyYWdnYWJsZV09XCJ0cnVlXCIgKG9uUmVtb3ZlKT1cInJlbW92ZSgkZXZlbnQpXCI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uUmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxJQmFzZUNoaXBFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBgSWd4Q2hpcENvbXBvbmVudGAgaXMgY2xpY2tlZC5cbiAgICAgKiBSZXR1cm5zIHRoZSBjbGlja2VkIGBJZ3hDaGlwQ29tcG9uZW50YCwgd2hldGhlciB0aGUgZXZlbnQgc2hvdWxkIGJlIGNhbmNlbGVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjaGlwQ2xpY2soZXZlbnQ6IElDaGlwQ2xpY2tFdmVudEFyZ3Mpe1xuICAgICAqICAgICBsZXQgY2xpY2tlZENoaXAgPSBldmVudC5vd25lcjtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2hpcCAjbXlDaGlwIFtpZF09XCInaWd4LWNoaXAtMSdcIiBbZHJhZ2dhYmxlXT1cInRydWVcIiAob25DbGljayk9XCJjaGlwQ2xpY2soJGV2ZW50KVwiPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxJQ2hpcENsaWNrRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHMgZXZlbnQgd2hlbiB0aGUgYElneENoaXBDb21wb25lbnRgIGlzIHNlbGVjdGVkL2Rlc2VsZWN0ZWQuXG4gICAgICogUmV0dXJucyB0aGUgc2VsZWN0ZWQgY2hpcCByZWZlcmVuY2UsIHdoZXRoZXIgdGhlIGV2ZW50IHNob3VsZCBiZSBjYW5jZWxlZCwgd2hhdCBpcyB0aGUgbmV4dCBzZWxlY3Rpb24gc3RhdGUgYW5kXG4gICAgICogd2hlbiB0aGUgZXZlbnQgaXMgdHJpZ2dlcmVkIGJ5IGludGVyYWN0aW9uIGBvcmlnaW5hbEV2ZW50YCBpcyBwcm92aWRlZCwgb3RoZXJ3aXNlIGBvcmlnaW5hbEV2ZW50YCBpcyBgbnVsbGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNoaXBTZWxlY3QoZXZlbnQ6IElDaGlwU2VsZWN0RXZlbnRBcmdzKXtcbiAgICAgKiAgICAgbGV0IHNlbGVjdGVkQ2hpcCA9IGV2ZW50Lm93bmVyO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jaGlwICNteUNoaXAgW2lkXT1cIidpZ3gtY2hpcC0xJ1wiIFtkcmFnZ2FibGVdPVwidHJ1ZVwiIChvblNlbGVjdGlvbik9XCJjaGlwU2VsZWN0KCRldmVudClcIj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25TZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPElDaGlwU2VsZWN0RXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgYElneENoaXBDb21wb25lbnRgIGtleWJvYXJkIG5hdmlnYXRpb24gaXMgYmVpbmcgdXNlZC5cbiAgICAgKiBSZXR1cm5zIHRoZSBmb2N1c2VkL3NlbGVjdGVkIGBJZ3hDaGlwQ29tcG9uZW50YCwgd2hldGhlciB0aGUgZXZlbnQgc2hvdWxkIGJlIGNhbmNlbGVkLFxuICAgICAqIGlmIHRoZSBgYWx0YCwgYHNoaWZ0YCBvciBgY29udHJvbGAga2V5IGlzIHByZXNzZWQgYW5kIHRoZSBwcmVzc2VkIGtleSBuYW1lLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjaGlwS2V5RG93bihldmVudDogSUNoaXBLZXlEb3duRXZlbnRBcmdzKXtcbiAgICAgKiAgICAgbGV0IGtleURvd24gPSBldmVudC5rZXk7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNoaXAgI215Q2hpcCBbaWRdPVwiJ2lneC1jaGlwLTEnXCIgW2RyYWdnYWJsZV09XCJ0cnVlXCIgKG9uS2V5RG93bik9XCJjaGlwS2V5RG93bigkZXZlbnQpXCI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uS2V5RG93biA9IG5ldyBFdmVudEVtaXR0ZXI8SUNoaXBLZXlEb3duRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgYElneENoaXBDb21wb25lbnRgIGhhcyBlbnRlcmVkIHRoZSBgSWd4Q2hpcHNBcmVhQ29tcG9uZW50YC5cbiAgICAgKiBSZXR1cm5zIHRoZSB0YXJnZXQgYElneENoaXBDb21wb25lbnRgLCB0aGUgZHJhZyBgSWd4Q2hpcENvbXBvbmVudGAsIGFzICB3ZWxsIGFzXG4gICAgICogdGhlIG9yaWdpbmFsIGRyb3AgZXZlbnQgYXJndW1lbnRzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjaGlwRW50ZXIoZXZlbnQ6IElDaGlwRW50ZXJEcmFnQXJlYUV2ZW50QXJncyl7XG4gICAgICogICAgIGxldCB0YXJnZXRDaGlwID0gZXZlbnQudGFyZ2V0Q2hpcDtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2hpcCAjbXlDaGlwIFtpZF09XCInaWd4LWNoaXAtMSdcIiBbZHJhZ2dhYmxlXT1cInRydWVcIiAob25EcmFnRW50ZXIpPVwiY2hpcEVudGVyKCRldmVudClcIj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25EcmFnRW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPElDaGlwRW50ZXJEcmFnQXJlYUV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuY2xhc3MnKVxuICAgIGdldCBob3N0Q2xhc3MoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IFt0aGlzLmdldENvbXBvbmVudERlbnNpdHlDbGFzcygnaWd4LWNoaXAnKV07XG4gICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLmRpc2FibGVkID8gJ2lneC1jaGlwLS1kaXNhYmxlZCcgOiAnJyk7XG4gICAgICAgIC8vIFRoZSBjdXN0b20gY2xhc3NlcyBzaG91bGQgYmUgYXQgdGhlIGVuZC5cbiAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY2xhc3MpO1xuICAgICAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGhhdCBjb250YWlucyBhIHJlZmVyZW5jZSB0byB0aGUgYElneERyYWdEaXJlY3RpdmVgIHRoZSBgSWd4Q2hpcENvbXBvbmVudGAgdXNlcyBmb3IgZHJhZ2dpbmcgYmVoYXZpb3IuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2hpcCBbaWRdPVwiY2hpcC5pZFwiIFtkcmFnZ2FibGVdPVwidHJ1ZVwiPjwvaWd4LWNoaXA+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIG9uTW92ZVN0YXJ0KGV2ZW50OiBJQmFzZUNoaXBFdmVudEFyZ3Mpe1xuICAgICAqICAgICBsZXQgZHJhZ0RpcmVjdGl2ZSA9IGV2ZW50Lm93bmVyLmRyYWdEaXJlY3RpdmU7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2NoaXBBcmVhJywgeyByZWFkOiBJZ3hEcmFnRGlyZWN0aXZlLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgZHJhZ0RpcmVjdGl2ZTogSWd4RHJhZ0RpcmVjdGl2ZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdjaGlwQXJlYScsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGNoaXBBcmVhOiBFbGVtZW50UmVmO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2RlZmF1bHRSZW1vdmVJY29uJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGRlZmF1bHRSZW1vdmVJY29uOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2RlZmF1bHRTZWxlY3RJY29uJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGRlZmF1bHRTZWxlY3RJY29uOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgcmVtb3ZlQnV0dG9uVGVtcGxhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZUljb24gfHwgdGhpcy5kZWZhdWx0UmVtb3ZlSWNvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBzZWxlY3RJY29uVGVtcGxhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdEljb24gfHwgdGhpcy5kZWZhdWx0U2VsZWN0SWNvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBnaG9zdENsYXNzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbXBvbmVudERlbnNpdHlDbGFzcygnaWd4LWNoaXBfX2dob3N0Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjaGlwVGFiaW5kZXgoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5kaXNhYmxlZCA/IDAgOiAnJztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3NlbGVjdGVkID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIF9zZWxlY3RlZEl0ZW1DbGFzcyA9ICdpZ3gtY2hpcF9faXRlbS0tc2VsZWN0ZWQnO1xuICAgIHByb3RlY3RlZCBfbW92ZWRXaGlsZVJlbW92aW5nID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChEaXNwbGF5RGVuc2l0eVRva2VuKSBwcm90ZWN0ZWQgX2Rpc3BsYXlEZW5zaXR5T3B0aW9uczogSURpc3BsYXlEZW5zaXR5T3B0aW9ucykge1xuICAgICAgICAgICAgc3VwZXIoX2Rpc3BsYXlEZW5zaXR5T3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0Q2xhc3MoY29uZGl0aW9uOiBib29sZWFuKTogb2JqZWN0IHtcbiAgICAgICAgY29uc3QgU0VMRUNUX0NMQVNTID0gJ2lneC1jaGlwX19zZWxlY3QnO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBbU0VMRUNUX0NMQVNTXTogY29uZGl0aW9uLFxuICAgICAgICAgICAgW2Ake1NFTEVDVF9DTEFTU30tLWhpZGRlbmBdOiAhY29uZGl0aW9uXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNoYW5nZVNlbGVjdGlvbihuZXdWYWx1ZTogYm9vbGVhbiwgc3JjRXZlbnQgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG9uU2VsZWN0QXJnczogSUNoaXBTZWxlY3RFdmVudEFyZ3MgPSB7XG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBzcmNFdmVudCxcbiAgICAgICAgICAgIG93bmVyOiB0aGlzLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY2FuY2VsOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChuZXdWYWx1ZSAmJiAhdGhpcy5fc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIG9uU2VsZWN0QXJncy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uU2VsZWN0aW9uLmVtaXQob25TZWxlY3RBcmdzKTtcblxuICAgICAgICAgICAgaWYgKCFvblNlbGVjdEFyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmNoaXBBcmVhLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3NlbGVjdGVkSXRlbUNsYXNzKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFuZXdWYWx1ZSAmJiB0aGlzLl9zZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5vblNlbGVjdGlvbi5lbWl0KG9uU2VsZWN0QXJncyk7XG5cbiAgICAgICAgICAgIGlmICghb25TZWxlY3RBcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5jaGlwQXJlYS5uYXRpdmVFbGVtZW50LCB0aGlzLl9zZWxlY3RlZEl0ZW1DbGFzcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25DaGlwS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBjb25zdCBrZXlEb3duQXJnczogSUNoaXBLZXlEb3duRXZlbnRBcmdzID0ge1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICBvd25lcjogdGhpcyxcbiAgICAgICAgICAgIGNhbmNlbDogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm9uS2V5RG93bi5lbWl0KGtleURvd25BcmdzKTtcbiAgICAgICAgaWYgKGtleURvd25BcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChldmVudC5rZXkgPT09ICdEZWxldGUnIHx8IGV2ZW50LmtleSA9PT0gJ0RlbCcpICYmIHRoaXMucmVtb3ZhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLm9uUmVtb3ZlLmVtaXQoe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIG93bmVyOiB0aGlzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoZXZlbnQua2V5ID09PSAnICcgfHwgZXZlbnQua2V5ID09PSAnU3BhY2ViYXInKSAmJiB0aGlzLnNlbGVjdGFibGUgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU2VsZWN0aW9uKCF0aGlzLnNlbGVjdGVkLCBldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQua2V5ICE9PSAnVGFiJykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25SZW1vdmVCdG5LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICcgJyB8fCBldmVudC5rZXkgPT09ICdTcGFjZWJhcicgfHwgZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICB0aGlzLm9uUmVtb3ZlLmVtaXQoe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIG93bmVyOiB0aGlzXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmVtb3ZlTW91c2VEb3duKGV2ZW50OiBQb2ludGVyRXZlbnQgfCBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25SZW1vdmVDbGljayhldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpIHtcbiAgICAgICAgdGhpcy5vblJlbW92ZS5lbWl0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgb3duZXI6IHRoaXNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBvblJlbW92ZVRvdWNoTW92ZSgpIHtcbiAgICAgICAgLy8gV2UgZG9uJ3QgcmVtb3ZlIGNoaXAgaWYgdXNlciBzdGFydGluZyB0b3VjaCBpbnRlcmFjdGluZyBvbiB0aGUgcmVtb3ZlIGJ1dHRvbiBtb3ZlcyB0aGUgY2hpcFxuICAgICAgICB0aGlzLl9tb3ZlZFdoaWxlUmVtb3ZpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25SZW1vdmVUb3VjaEVuZChldmVudDogVG91Y2hFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuX21vdmVkV2hpbGVSZW1vdmluZykge1xuICAgICAgICAgICAgdGhpcy5vblJlbW92ZUNsaWNrKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tb3ZlZFdoaWxlUmVtb3ZpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBTdGFydCBjaGlwIGlneERyYWcgYmVoYXZpb3VyXG4gICAgcHVibGljIG9uQ2hpcERyYWdTdGFydChldmVudDogSURyYWdTdGFydEV2ZW50QXJncykge1xuICAgICAgICB0aGlzLm9uTW92ZVN0YXJ0LmVtaXQoe1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQub3JpZ2luYWxFdmVudCxcbiAgICAgICAgICAgIG93bmVyOiB0aGlzXG4gICAgICAgIH0pO1xuICAgICAgICBldmVudC5jYW5jZWwgPSAhdGhpcy5kcmFnZ2FibGUgfHwgdGhpcy5kaXNhYmxlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uQ2hpcERyYWdFbmQoKSB7XG4gICAgICAgIHRoaXMuZHJhZ0RpcmVjdGl2ZS5kcm9wRmluaXNoZWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uQ2hpcE1vdmVFbmQoZXZlbnQ6IElEcmFnQmFzZUV2ZW50QXJncykge1xuICAgICAgICAvLyBtb3ZlRW5kIGlzIHRyaWdnZXJlZCBhZnRlciByZXR1cm4gYW5pbWF0aW9uIGhhcyBmaW5pc2hlZC4gVGhpcyBoYXBwZW4gd2hlbiB3ZSBkcmFnIGFuZCByZWxlYXNlIHRoZSBjaGlwLlxuICAgICAgICB0aGlzLm9uTW92ZUVuZC5lbWl0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50Lm9yaWdpbmFsRXZlbnQsXG4gICAgICAgICAgICBvd25lcjogdGhpc1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5jaGlwQXJlYS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uQ2hpcERyYWdDbGlja2VkKGV2ZW50OiBJRHJhZ0Jhc2VFdmVudEFyZ3MpIHtcbiAgICAgICAgY29uc3QgY2xpY2tFdmVudEFyZ3M6IElDaGlwQ2xpY2tFdmVudEFyZ3MgPSB7XG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudC5vcmlnaW5hbEV2ZW50LFxuICAgICAgICAgICAgb3duZXI6IHRoaXMsXG4gICAgICAgICAgICBjYW5jZWw6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25DbGljay5lbWl0KGNsaWNrRXZlbnRBcmdzKTtcblxuICAgICAgICBpZiAoIWNsaWNrRXZlbnRBcmdzLmNhbmNlbCAmJiB0aGlzLnNlbGVjdGFibGUgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU2VsZWN0aW9uKCF0aGlzLnNlbGVjdGVkLCBldmVudC5vcmlnaW5hbEV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBFbmQgY2hpcCBpZ3hEcmFnIGJlaGF2aW91clxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU3RhcnQgY2hpcCBpZ3hEcm9wIGJlaGF2aW91clxuICAgIHB1YmxpYyBvbkNoaXBEcmFnRW50ZXJIYW5kbGVyKGV2ZW50OiBJZ3hEcm9wRW50ZXJFdmVudEFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0RpcmVjdGl2ZSA9PT0gZXZlbnQuZHJhZyB8fCAhZXZlbnQuZHJhZ0RhdGEgfHwgIWV2ZW50LmRyYWdEYXRhLmNoaXApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV2ZW50QXJnczogSUNoaXBFbnRlckRyYWdBcmVhRXZlbnRBcmdzID0ge1xuICAgICAgICAgICAgb3duZXI6IHRoaXMsXG4gICAgICAgICAgICBkcmFnQ2hpcDogZXZlbnQuZHJhZ0RhdGEuY2hpcCxcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25EcmFnRW50ZXIuZW1pdChldmVudEFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25DaGlwRHJvcChldmVudDogSWd4RHJvcEV2ZW50QXJncykge1xuICAgICAgICAvLyBDYW5jZWwgdGhlIGRlZmF1bHQgZHJvcCBsb2dpY1xuICAgICAgICBldmVudC5jYW5jZWwgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBFbmQgY2hpcCBpZ3hEcm9wIGJlaGF2aW91clxufVxuIl19