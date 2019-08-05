/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
let CHIP_ID = 0;
export class IgxChipComponent extends DisplayDensityBase {
    /**
     * @param {?} cdr
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} _displayDensityOptions
     */
    constructor(cdr, elementRef, renderer, _displayDensityOptions) {
        super(_displayDensityOptions);
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._displayDensityOptions = _displayDensityOptions;
        /**
         * An \@Input property that sets the value of `id` attribute. If not provided it will be automatically generated.
         * ```html
         * <igx-chip [id]="'igx-chip-1'"></igx-chip>
         * ```
         */
        this.id = `igx-chip-${CHIP_ID++}`;
        /**
         * An \@Input property that defines if the `IgxChipComponent` can be dragged in order to change it's position.
         * By default it is set to false.
         * ```html
         * <igx-chip [id]="'igx-chip-1'" [draggable]="true"></igx-chip>
         * ```
         */
        this.draggable = false;
        /**
         * An \@Input property that enables/disables the draggable element animation when the element is released.
         * By default it's set to true.
         * ```html
         * <igx-chip [id]="'igx-chip-1'" [draggable]="true" [animateOnRelease]="false"></igx-chip>
         * ```
         */
        this.animateOnRelease = true;
        /**
         * An \@Input property that enables/disables the hiding of the base element that has been dragged.
         * By default it's set to true.
         * ```html
         * <igx-chip [id]="'igx-chip-1'" [draggable]="true" [hideBaseOnDrag]="false"></igx-chip>
         * ```
         */
        this.hideBaseOnDrag = true;
        /**
         * An \@Input property that defines if the `IgxChipComponent` should render remove button and throw remove events.
         * By default it is set to false.
         * ```html
         * <igx-chip [id]="'igx-chip-1'" [draggable]="true" [removable]="true"></igx-chip>
         * ```
         */
        this.removable = false;
        /**
         * An \@Input property that defines if the `IgxChipComponent` can be selected on click or through navigation,
         * By default it is set to false.
         * ```html
         * <igx-chip [id]="chip.id" [draggable]="true" [removable]="true" [selectable]="true"></igx-chip>
         * ```
         */
        this.selectable = false;
        /**
         * @hidden
         */
        this.class = '';
        /**
         * An \@Input property that defines if the `IgxChipComponent` is disabled. When disabled it restricts user interactions
         * like focusing on click or tab, selection on click or Space, dragging.
         * By default it is set to false.
         * ```html
         * <igx-chip [id]="chip.id" [disabled]="true"></igx-chip>
         * ```
         */
        this.disabled = false;
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
        this.onMoveStart = new EventEmitter();
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
        this.onMoveEnd = new EventEmitter();
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
        this.onRemove = new EventEmitter();
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
        this.onClick = new EventEmitter();
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
        this.onSelection = new EventEmitter();
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
        this.onKeyDown = new EventEmitter();
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
        this.onDragEnter = new EventEmitter();
        this._selected = false;
        this._selectedItemClass = 'igx-chip__item--selected';
        this._movedWhileRemoving = false;
    }
    /**
     * Sets the `IgxChipComponent` selected state.
     * ```html
     * <igx-chip #myChip [id]="'igx-chip-1'" [selectable]="true" [selected]="true">
     * ```
     * @param {?} newValue
     * @return {?}
     */
    set selected(newValue) {
        this.changeSelection(newValue);
    }
    /**
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
    get selected() {
        return this._selected;
    }
    /**
     * An \@Input property that sets the `IgxChipComponent` background color.
     * The `color` property supports string, rgb, hex.
     * ```html
     * <igx-chip #myChip [id]="'igx-chip-1'" [color]="'#ff0000'"></igx-chip>
     * ```
     * @param {?} newColor
     * @return {?}
     */
    set color(newColor) {
        this.chipArea.nativeElement.style.backgroundColor = newColor;
    }
    /**
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
    get color() {
        return this.chipArea.nativeElement.style.backgroundColor;
    }
    /**
     * @hidden
     * @return {?}
     */
    get hostClass() {
        /** @type {?} */
        const classes = [this.getComponentDensityClass('igx-chip')];
        classes.push(this.disabled ? 'igx-chip--disabled' : '');
        // The custom classes should be at the end.
        classes.push(this.class);
        return classes.join(' ');
    }
    /**
     * @hidden
     * @return {?}
     */
    get removeButtonTemplate() {
        return this.removeIcon || this.defaultRemoveIcon;
    }
    /**
     * @hidden
     * @return {?}
     */
    get selectIconTemplate() {
        return this.selectIcon || this.defaultSelectIcon;
    }
    /**
     * @hidden
     * @return {?}
     */
    get ghostClass() {
        return this.getComponentDensityClass('igx-chip__ghost');
    }
    /**
     * @return {?}
     */
    get chipTabindex() {
        return !this.disabled ? 0 : '';
    }
    /**
     * @hidden
     * @param {?} condition
     * @return {?}
     */
    selectClass(condition) {
        /** @type {?} */
        const SELECT_CLASS = 'igx-chip__select';
        return {
            [SELECT_CLASS]: condition,
            [`${SELECT_CLASS}--hidden`]: !condition
        };
    }
    /**
     * @protected
     * @param {?} newValue
     * @param {?=} srcEvent
     * @return {?}
     */
    changeSelection(newValue, srcEvent = null) {
        /** @type {?} */
        const onSelectArgs = {
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
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onChipKeyDown(event) {
        /** @type {?} */
        const keyDownArgs = {
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
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onRemoveBtnKeyDown(event) {
        if (event.key === ' ' || event.key === 'Spacebar' || event.key === 'Enter') {
            this.onRemove.emit({
                originalEvent: event,
                owner: this
            });
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onRemoveMouseDown(event) {
        event.stopPropagation();
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onRemoveClick(event) {
        this.onRemove.emit({
            originalEvent: event,
            owner: this
        });
    }
    /**
     * @hidden
     * @return {?}
     */
    onRemoveTouchMove() {
        // We don't remove chip if user starting touch interacting on the remove button moves the chip
        this._movedWhileRemoving = true;
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onRemoveTouchEnd(event) {
        if (!this._movedWhileRemoving) {
            this.onRemoveClick(event);
        }
        this._movedWhileRemoving = false;
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    // -----------------------------
    // Start chip igxDrag behaviour
    onChipDragStart(event) {
        this.onMoveStart.emit({
            originalEvent: event.originalEvent,
            owner: this
        });
        event.cancel = !this.draggable || this.disabled;
    }
    /**
     * @hidden
     * @return {?}
     */
    onChipDragEnd() {
        this.dragDirective.dropFinished();
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onChipMoveEnd(event) {
        // moveEnd is triggered after return animation has finished. This happen when we drag and release the chip.
        this.onMoveEnd.emit({
            originalEvent: event.originalEvent,
            owner: this
        });
        if (this.selected) {
            this.chipArea.nativeElement.focus();
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onChipDragClicked(event) {
        /** @type {?} */
        const clickEventArgs = {
            originalEvent: event.originalEvent,
            owner: this,
            cancel: false
        };
        this.onClick.emit(clickEventArgs);
        if (!clickEventArgs.cancel && this.selectable && !this.disabled) {
            this.changeSelection(!this.selected, event.originalEvent);
        }
    }
    // End chip igxDrag behaviour
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    // -----------------------------
    // Start chip igxDrop behaviour
    onChipDragEnterHandler(event) {
        if (this.dragDirective === event.drag || !event.dragData || !event.dragData.chip) {
            return;
        }
        /** @type {?} */
        const eventArgs = {
            owner: this,
            dragChip: event.dragData.chip,
            originalEvent: event
        };
        this.onDragEnter.emit(eventArgs);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onChipDrop(event) {
        // Cancel the default drop logic
        event.cancel = true;
    }
}
IgxChipComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-chip',
                template: "<div #chipArea class=\"igx-chip__item\"\n    [attr.tabindex]=\"chipTabindex\"\n    (keydown)=\"onChipKeyDown($event)\"\n    [igxDrag]=\"{chip: this}\"\n    [hideBaseOnDrag]=\"hideBaseOnDrag\"\n    [animateOnRelease]=\"animateOnRelease\"\n    [ghostImageClass]=\"ghostClass\"\n    (dragStart)=\"onChipDragStart($event)\"\n    (dragEnd)=\"onChipDragEnd()\"\n    (returnMoveEnd)=\"onChipMoveEnd($event)\"\n    (dragClicked)=\"onChipDragClicked($event)\"\n    igxDrop\n    (onEnter)=\"onChipDragEnterHandler($event)\"\n    (onDrop)=\"onChipDrop($event)\">\n\n    <div [ngClass]=\"selectClass(selected)\">\n        <ng-container *ngTemplateOutlet=\"selectIconTemplate\"></ng-container>\n    </div>\n\n    <ng-content select=\"igx-prefix,[igxPrefix]\"></ng-content>\n\n    <div class=\"igx-chip__content\">\n        <ng-content></ng-content>\n    </div>\n\n    <ng-content select=\"igx-suffix,[igxSuffix]\"></ng-content>\n\n    <div class=\"igx-chip__remove\" *ngIf=\"removable\"\n        tabindex=\"0\"\n        (keydown)=\"onRemoveBtnKeyDown($event)\"\n        (pointerdown)=\"onRemoveMouseDown($event)\"\n        (mousedown)=\"onRemoveMouseDown($event)\"\n        (click)=\"onRemoveClick($event)\"\n        (touchmove)=\"onRemoveTouchMove()\"\n        (touchend)=\"onRemoveTouchEnd($event)\">\n        <ng-container *ngTemplateOutlet=\"removeButtonTemplate\"></ng-container>\n    </div>\n</div>\n\n<ng-template #defaultSelectIcon>\n    <igx-icon>done</igx-icon>\n</ng-template>\n\n<ng-template #defaultRemoveIcon>\n    <igx-icon>cancel</igx-icon>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
IgxChipComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NoaXBzL2NoaXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULGlCQUFpQixFQUNqQixZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLE1BQU0sRUFDTixRQUFRLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUEwQyxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pILE9BQU8sRUFDSCxnQkFBZ0IsRUFLbkIsTUFBTSwyQ0FBMkMsQ0FBQzs7OztBQUduRCx3Q0FHQzs7O0lBRkcsMkNBQThGOztJQUM5RixtQ0FBd0I7Ozs7O0FBRzVCLHlDQUVDOzs7SUFERyxxQ0FBZ0I7Ozs7O0FBR3BCLDJDQUdDOzs7SUFGRyw4Q0FBNkI7O0lBQzdCLHVDQUFnQjs7Ozs7QUFHcEIsaURBRUM7OztJQURHLCtDQUEyQjs7Ozs7QUFHL0IsMENBR0M7OztJQUZHLHNDQUFnQjs7SUFDaEIsd0NBQWtCOzs7SUFHbEIsT0FBTyxHQUFHLENBQUM7QUFNZixNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsa0JBQWtCOzs7Ozs7O0lBb1ZwRCxZQUFtQixHQUFzQixFQUFTLFVBQXNCLEVBQVUsUUFBbUIsRUFDOUMsc0JBQThDO1FBQzdGLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRm5CLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDOUMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3Qjs7Ozs7OztRQTNVOUYsT0FBRSxHQUFHLFlBQVksT0FBTyxFQUFFLEVBQUUsQ0FB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Q0FDeUQ7Ozs7Ozs7Ozs7Ozs7O0lBY3pELG1DQUN5RDs7Ozs7Ozs7Ozs7Ozs7O0lBZXpELHVDQUM4RDs7Ozs7Ozs7Ozs7Ozs7O0lBZTlELHFDQUM2RDs7Ozs7Ozs7Ozs7Ozs7O0lBZTdELHVDQUNxRTs7Ozs7Ozs7Ozs7OztJQXlCckUseUNBQ3VDOzs7OztJQUt2QyxvQ0FDNEI7Ozs7O0lBSzVCLDZDQUMyQzs7Ozs7SUFLM0MsNkNBQzJDOzs7OztJQTJCM0MscUNBQTRCOzs7OztJQUM1Qiw4Q0FBMEQ7Ozs7O0lBQzFELCtDQUFzQzs7SUFFMUIsK0JBQTZCOztJQUFFLHNDQUE2Qjs7Ozs7SUFBRSxvQ0FBMkI7Ozs7O0lBQ2pHLGtEQUFpRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBFbGVtZW50UmVmLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LFxuICAgIE91dHB1dCxcbiAgICBWaWV3Q2hpbGQsXG4gICAgUmVuZGVyZXIyLFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIEluamVjdCxcbiAgICBPcHRpb25hbFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc3BsYXlEZW5zaXR5LCBJRGlzcGxheURlbnNpdHlPcHRpb25zLCBEaXNwbGF5RGVuc2l0eVRva2VuLCBEaXNwbGF5RGVuc2l0eUJhc2UgfSBmcm9tICcuLi9jb3JlL2Rpc3BsYXlEZW5zaXR5JztcbmltcG9ydCB7XG4gICAgSWd4RHJhZ0RpcmVjdGl2ZSxcbiAgICBJRHJhZ0Jhc2VFdmVudEFyZ3MsXG4gICAgSURyYWdTdGFydEV2ZW50QXJncyxcbiAgICBJZ3hEcm9wRW50ZXJFdmVudEFyZ3MsXG4gICAgSWd4RHJvcEV2ZW50QXJnc1xufSBmcm9tICcuLi9kaXJlY3RpdmVzL2RyYWdkcm9wL2RyYWdkcm9wLmRpcmVjdGl2ZSc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBJQmFzZUNoaXBFdmVudEFyZ3Mge1xuICAgIG9yaWdpbmFsRXZlbnQ6IFBvaW50ZXJFdmVudCB8IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50IHwgS2V5Ym9hcmRFdmVudCB8IElneERyb3BFbnRlckV2ZW50QXJncztcbiAgICBvd25lcjogSWd4Q2hpcENvbXBvbmVudDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ2hpcENsaWNrRXZlbnRBcmdzIGV4dGVuZHMgSUJhc2VDaGlwRXZlbnRBcmdzIHtcbiAgICBjYW5jZWw6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNoaXBLZXlEb3duRXZlbnRBcmdzIGV4dGVuZHMgSUJhc2VDaGlwRXZlbnRBcmdzIHtcbiAgICBvcmlnaW5hbEV2ZW50OiBLZXlib2FyZEV2ZW50O1xuICAgIGNhbmNlbDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ2hpcEVudGVyRHJhZ0FyZWFFdmVudEFyZ3MgZXh0ZW5kcyBJQmFzZUNoaXBFdmVudEFyZ3Mge1xuICAgIGRyYWdDaGlwOiBJZ3hDaGlwQ29tcG9uZW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDaGlwU2VsZWN0RXZlbnRBcmdzIGV4dGVuZHMgSUJhc2VDaGlwRXZlbnRBcmdzIHtcbiAgICBjYW5jZWw6IGJvb2xlYW47XG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW47XG59XG5cbmxldCBDSElQX0lEID0gMDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtY2hpcCcsXG4gICAgdGVtcGxhdGVVcmw6ICdjaGlwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDaGlwQ29tcG9uZW50IGV4dGVuZHMgRGlzcGxheURlbnNpdHlCYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIGBpZGAgYXR0cmlidXRlLiBJZiBub3QgcHJvdmlkZWQgaXQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jaGlwIFtpZF09XCInaWd4LWNoaXAtMSdcIj48L2lneC1jaGlwPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWQgPSBgaWd4LWNoaXAtJHtDSElQX0lEKyt9YDtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHN0b3JlcyBkYXRhIHJlbGF0ZWQgdG8gdGhlIGNoaXAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2hpcCBbZGF0YV09XCJ7IHZhbHVlOiAnQ291bnRyeScgfVwiPjwvaWd4LWNoaXA+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGF0YTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgZGVmaW5lcyBpZiB0aGUgYElneENoaXBDb21wb25lbnRgIGNhbiBiZSBkcmFnZ2VkIGluIG9yZGVyIHRvIGNoYW5nZSBpdCdzIHBvc2l0aW9uLlxuICAgICAqIEJ5IGRlZmF1bHQgaXQgaXMgc2V0IHRvIGZhbHNlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNoaXAgW2lkXT1cIidpZ3gtY2hpcC0xJ1wiIFtkcmFnZ2FibGVdPVwidHJ1ZVwiPjwvaWd4LWNoaXA+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZHJhZ2dhYmxlID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBlbmFibGVzL2Rpc2FibGVzIHRoZSBkcmFnZ2FibGUgZWxlbWVudCBhbmltYXRpb24gd2hlbiB0aGUgZWxlbWVudCBpcyByZWxlYXNlZC5cbiAgICAgKiBCeSBkZWZhdWx0IGl0J3Mgc2V0IHRvIHRydWUuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2hpcCBbaWRdPVwiJ2lneC1jaGlwLTEnXCIgW2RyYWdnYWJsZV09XCJ0cnVlXCIgW2FuaW1hdGVPblJlbGVhc2VdPVwiZmFsc2VcIj48L2lneC1jaGlwPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGFuaW1hdGVPblJlbGVhc2UgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgZW5hYmxlcy9kaXNhYmxlcyB0aGUgaGlkaW5nIG9mIHRoZSBiYXNlIGVsZW1lbnQgdGhhdCBoYXMgYmVlbiBkcmFnZ2VkLlxuICAgICAqIEJ5IGRlZmF1bHQgaXQncyBzZXQgdG8gdHJ1ZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jaGlwIFtpZF09XCInaWd4LWNoaXAtMSdcIiBbZHJhZ2dhYmxlXT1cInRydWVcIiBbaGlkZUJhc2VPbkRyYWddPVwiZmFsc2VcIj48L2lneC1jaGlwPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGhpZGVCYXNlT25EcmFnID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGRlZmluZXMgaWYgdGhlIGBJZ3hDaGlwQ29tcG9uZW50YCBzaG91bGQgcmVuZGVyIHJlbW92ZSBidXR0b24gYW5kIHRocm93IHJlbW92ZSBldmVudHMuXG4gICAgICogQnkgZGVmYXVsdCBpdCBpcyBzZXQgdG8gZmFsc2UuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2hpcCBbaWRdPVwiJ2lneC1jaGlwLTEnXCIgW2RyYWdnYWJsZV09XCJ0cnVlXCIgW3JlbW92YWJsZV09XCJ0cnVlXCI+PC9pZ3gtY2hpcD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyByZW1vdmFibGUgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IG92ZXJyaWRlcyB0aGUgZGVmYXVsdCBpY29uIHRoYXQgdGhlIGNoaXAgYXBwbGllcyB0byB0aGUgcmVtb3ZlIGJ1dHRvbi5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jaGlwIFtpZF09XCJjaGlwLmlkXCIgW3JlbW92YWJsZV09XCJ0cnVlXCIgW3JlbW92ZUljb25dPVwiaWNvblRlbXBsYXRlXCI+PC9pZ3gtY2hpcD5cbiAgICAgKiA8bmctdGVtcGxhdGUgI2ljb25UZW1wbGF0ZT48aWd4LWljb24+ZGVsZXRlPC9pZ3gtaWNvbj48L25nLXRlbXBsYXRlPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJlbW92ZUljb246IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBkZWZpbmVzIGlmIHRoZSBgSWd4Q2hpcENvbXBvbmVudGAgY2FuIGJlIHNlbGVjdGVkIG9uIGNsaWNrIG9yIHRocm91Z2ggbmF2aWdhdGlvbixcbiAgICAgKiBCeSBkZWZhdWx0IGl0IGlzIHNldCB0byBmYWxzZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jaGlwIFtpZF09XCJjaGlwLmlkXCIgW2RyYWdnYWJsZV09XCJ0cnVlXCIgW3JlbW92YWJsZV09XCJ0cnVlXCIgW3NlbGVjdGFibGVdPVwidHJ1ZVwiPjwvaWd4LWNoaXA+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgb3ZlcnJpZGVzIHRoZSBkZWZhdWx0IGljb24gdGhhdCB0aGUgY2hpcCBhcHBsaWVzIHdoZW4gaXQgaXMgc2VsZWN0ZWQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2hpcCBbaWRdPVwiY2hpcC5pZFwiIFtzZWxlY3RhYmxlXT1cInRydWVcIiBbc2VsZWN0SWNvbl09XCJpY29uVGVtcGxhdGVcIj48L2lneC1jaGlwPlxuICAgICAqIDxuZy10ZW1wbGF0ZSAjaWNvblRlbXBsYXRlPjxpZ3gtaWNvbj5kb25lX291dGxpbmU8L2lneC1pY29uPjwvbmctdGVtcGxhdGU+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2VsZWN0SWNvbjogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjbGFzcyA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgZGVmaW5lcyBpZiB0aGUgYElneENoaXBDb21wb25lbnRgIGlzIGRpc2FibGVkLiBXaGVuIGRpc2FibGVkIGl0IHJlc3RyaWN0cyB1c2VyIGludGVyYWN0aW9uc1xuICAgICAqIGxpa2UgZm9jdXNpbmcgb24gY2xpY2sgb3IgdGFiLCBzZWxlY3Rpb24gb24gY2xpY2sgb3IgU3BhY2UsIGRyYWdnaW5nLlxuICAgICAqIEJ5IGRlZmF1bHQgaXQgaXMgc2V0IHRvIGZhbHNlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNoaXAgW2lkXT1cImNoaXAuaWRcIiBbZGlzYWJsZWRdPVwidHJ1ZVwiPjwvaWd4LWNoaXA+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGBJZ3hDaGlwQ29tcG9uZW50YCBzZWxlY3RlZCBzdGF0ZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jaGlwICNteUNoaXAgW2lkXT1cIidpZ3gtY2hpcC0xJ1wiIFtzZWxlY3RhYmxlXT1cInRydWVcIiBbc2VsZWN0ZWRdPVwidHJ1ZVwiPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBzZWxlY3RlZChuZXdWYWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmNoYW5nZVNlbGVjdGlvbihuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBpZiB0aGUgYElneENoaXBDb21wb25lbnRgIGlzIHNlbGVjdGVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKCdteUNoaXAnKVxuICAgICAqIHB1YmxpYyBjaGlwOiBJZ3hDaGlwQ29tcG9uZW50O1xuICAgICAqIHNlbGVjdGVkQ2hpcCgpe1xuICAgICAqICAgICBsZXQgc2VsZWN0ZWRDaGlwID0gdGhpcy5jaGlwLnNlbGVjdGVkO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgYElneENoaXBDb21wb25lbnRgIGJhY2tncm91bmQgY29sb3IuXG4gICAgICogVGhlIGBjb2xvcmAgcHJvcGVydHkgc3VwcG9ydHMgc3RyaW5nLCByZ2IsIGhleC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jaGlwICNteUNoaXAgW2lkXT1cIidpZ3gtY2hpcC0xJ1wiIFtjb2xvcl09XCInI2ZmMDAwMCdcIj48L2lneC1jaGlwPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBjb2xvcihuZXdDb2xvcikge1xuICAgICAgICB0aGlzLmNoaXBBcmVhLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbmV3Q29sb3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgYElneENoaXBDb21wb25lbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKCdteUNoaXAnKVxuICAgICAqIHB1YmxpYyBjaGlwOiBJZ3hDaGlwQ29tcG9uZW50O1xuICAgICAqIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqICAgICBsZXQgY2hpcENvbG9yID0gdGhpcy5jaGlwLmNvbG9yO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGNvbG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlwQXJlYS5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBgSWd4Q2hpcENvbXBvbmVudGAgbW92aW5nIHN0YXJ0cy5cbiAgICAgKiBSZXR1cm5zIHRoZSBtb3ZpbmcgYElneENoaXBDb21wb25lbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBtb3ZlU3RhcnRlZChldmVudDogSUJhc2VDaGlwRXZlbnRBcmdzKXtcbiAgICAgKiAgICAgbGV0IG1vdmluZ0NoaXAgPSBldmVudC5vd25lcjtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2hpcCAjbXlDaGlwIFtpZF09XCInaWd4LWNoaXAtMSdcIiBbZHJhZ2dhYmxlXT1cInRydWVcIiAob25Nb3ZlU3RhcnQpPVwibW92ZVN0YXJ0ZWQoJGV2ZW50KVwiPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbk1vdmVTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8SUJhc2VDaGlwRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgYElneENoaXBDb21wb25lbnRgIG1vdmluZyBlbmRzLlxuICAgICAqIFJldHVybnMgdGhlIG1vdmVkIGBJZ3hDaGlwQ29tcG9uZW50YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbW92ZUVuZGVkKGV2ZW50OiBJQmFzZUNoaXBFdmVudEFyZ3Mpe1xuICAgICAqICAgICBsZXQgbW92ZWRDaGlwID0gZXZlbnQub3duZXI7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNoaXAgI215Q2hpcCBbaWRdPVwiJ2lneC1jaGlwLTEnXCIgW2RyYWdnYWJsZV09XCJ0cnVlXCIgKG9uTW92ZUVuZCk9XCJtb3ZlRW5kZWQoJGV2ZW50KVwiPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbk1vdmVFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPElCYXNlQ2hpcEV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGBJZ3hDaGlwQ29tcG9uZW50YCBpcyByZW1vdmVkLlxuICAgICAqIFJldHVybnMgdGhlIHJlbW92ZWQgYElneENoaXBDb21wb25lbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiByZW1vdmUoZXZlbnQ6IElCYXNlQ2hpcEV2ZW50QXJncyl7XG4gICAgICogICAgIGxldCByZW1vdmVkQ2hpcCA9IGV2ZW50Lm93bmVyO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jaGlwICNteUNoaXAgW2lkXT1cIidpZ3gtY2hpcC0xJ1wiIFtkcmFnZ2FibGVdPVwidHJ1ZVwiIChvblJlbW92ZSk9XCJyZW1vdmUoJGV2ZW50KVwiPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8SUJhc2VDaGlwRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgYElneENoaXBDb21wb25lbnRgIGlzIGNsaWNrZWQuXG4gICAgICogUmV0dXJucyB0aGUgY2xpY2tlZCBgSWd4Q2hpcENvbXBvbmVudGAsIHdoZXRoZXIgdGhlIGV2ZW50IHNob3VsZCBiZSBjYW5jZWxlZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY2hpcENsaWNrKGV2ZW50OiBJQ2hpcENsaWNrRXZlbnRBcmdzKXtcbiAgICAgKiAgICAgbGV0IGNsaWNrZWRDaGlwID0gZXZlbnQub3duZXI7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNoaXAgI215Q2hpcCBbaWRdPVwiJ2lneC1jaGlwLTEnXCIgW2RyYWdnYWJsZV09XCJ0cnVlXCIgKG9uQ2xpY2spPVwiY2hpcENsaWNrKCRldmVudClcIj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8SUNoaXBDbGlja0V2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGV2ZW50IHdoZW4gdGhlIGBJZ3hDaGlwQ29tcG9uZW50YCBpcyBzZWxlY3RlZC9kZXNlbGVjdGVkLlxuICAgICAqIFJldHVybnMgdGhlIHNlbGVjdGVkIGNoaXAgcmVmZXJlbmNlLCB3aGV0aGVyIHRoZSBldmVudCBzaG91bGQgYmUgY2FuY2VsZWQsIHdoYXQgaXMgdGhlIG5leHQgc2VsZWN0aW9uIHN0YXRlIGFuZFxuICAgICAqIHdoZW4gdGhlIGV2ZW50IGlzIHRyaWdnZXJlZCBieSBpbnRlcmFjdGlvbiBgb3JpZ2luYWxFdmVudGAgaXMgcHJvdmlkZWQsIG90aGVyd2lzZSBgb3JpZ2luYWxFdmVudGAgaXMgYG51bGxgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjaGlwU2VsZWN0KGV2ZW50OiBJQ2hpcFNlbGVjdEV2ZW50QXJncyl7XG4gICAgICogICAgIGxldCBzZWxlY3RlZENoaXAgPSBldmVudC5vd25lcjtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2hpcCAjbXlDaGlwIFtpZF09XCInaWd4LWNoaXAtMSdcIiBbZHJhZ2dhYmxlXT1cInRydWVcIiAob25TZWxlY3Rpb24pPVwiY2hpcFNlbGVjdCgkZXZlbnQpXCI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uU2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxJQ2hpcFNlbGVjdEV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGBJZ3hDaGlwQ29tcG9uZW50YCBrZXlib2FyZCBuYXZpZ2F0aW9uIGlzIGJlaW5nIHVzZWQuXG4gICAgICogUmV0dXJucyB0aGUgZm9jdXNlZC9zZWxlY3RlZCBgSWd4Q2hpcENvbXBvbmVudGAsIHdoZXRoZXIgdGhlIGV2ZW50IHNob3VsZCBiZSBjYW5jZWxlZCxcbiAgICAgKiBpZiB0aGUgYGFsdGAsIGBzaGlmdGAgb3IgYGNvbnRyb2xgIGtleSBpcyBwcmVzc2VkIGFuZCB0aGUgcHJlc3NlZCBrZXkgbmFtZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY2hpcEtleURvd24oZXZlbnQ6IElDaGlwS2V5RG93bkV2ZW50QXJncyl7XG4gICAgICogICAgIGxldCBrZXlEb3duID0gZXZlbnQua2V5O1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jaGlwICNteUNoaXAgW2lkXT1cIidpZ3gtY2hpcC0xJ1wiIFtkcmFnZ2FibGVdPVwidHJ1ZVwiIChvbktleURvd24pPVwiY2hpcEtleURvd24oJGV2ZW50KVwiPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbktleURvd24gPSBuZXcgRXZlbnRFbWl0dGVyPElDaGlwS2V5RG93bkV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGBJZ3hDaGlwQ29tcG9uZW50YCBoYXMgZW50ZXJlZCB0aGUgYElneENoaXBzQXJlYUNvbXBvbmVudGAuXG4gICAgICogUmV0dXJucyB0aGUgdGFyZ2V0IGBJZ3hDaGlwQ29tcG9uZW50YCwgdGhlIGRyYWcgYElneENoaXBDb21wb25lbnRgLCBhcyAgd2VsbCBhc1xuICAgICAqIHRoZSBvcmlnaW5hbCBkcm9wIGV2ZW50IGFyZ3VtZW50cy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY2hpcEVudGVyKGV2ZW50OiBJQ2hpcEVudGVyRHJhZ0FyZWFFdmVudEFyZ3Mpe1xuICAgICAqICAgICBsZXQgdGFyZ2V0Q2hpcCA9IGV2ZW50LnRhcmdldENoaXA7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNoaXAgI215Q2hpcCBbaWRdPVwiJ2lneC1jaGlwLTEnXCIgW2RyYWdnYWJsZV09XCJ0cnVlXCIgKG9uRHJhZ0VudGVyKT1cImNoaXBFbnRlcigkZXZlbnQpXCI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uRHJhZ0VudGVyID0gbmV3IEV2ZW50RW1pdHRlcjxJQ2hpcEVudGVyRHJhZ0FyZWFFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmNsYXNzJylcbiAgICBnZXQgaG9zdENsYXNzKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbdGhpcy5nZXRDb21wb25lbnREZW5zaXR5Q2xhc3MoJ2lneC1jaGlwJyldO1xuICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5kaXNhYmxlZCA/ICdpZ3gtY2hpcC0tZGlzYWJsZWQnIDogJycpO1xuICAgICAgICAvLyBUaGUgY3VzdG9tIGNsYXNzZXMgc2hvdWxkIGJlIGF0IHRoZSBlbmQuXG4gICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLmNsYXNzKTtcbiAgICAgICAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRoYXQgY29udGFpbnMgYSByZWZlcmVuY2UgdG8gdGhlIGBJZ3hEcmFnRGlyZWN0aXZlYCB0aGUgYElneENoaXBDb21wb25lbnRgIHVzZXMgZm9yIGRyYWdnaW5nIGJlaGF2aW9yLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNoaXAgW2lkXT1cImNoaXAuaWRcIiBbZHJhZ2dhYmxlXT1cInRydWVcIj48L2lneC1jaGlwPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBvbk1vdmVTdGFydChldmVudDogSUJhc2VDaGlwRXZlbnRBcmdzKXtcbiAgICAgKiAgICAgbGV0IGRyYWdEaXJlY3RpdmUgPSBldmVudC5vd25lci5kcmFnRGlyZWN0aXZlO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdjaGlwQXJlYScsIHsgcmVhZDogSWd4RHJhZ0RpcmVjdGl2ZSwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIGRyYWdEaXJlY3RpdmU6IElneERyYWdEaXJlY3RpdmU7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnY2hpcEFyZWEnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBjaGlwQXJlYTogRWxlbWVudFJlZjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdkZWZhdWx0UmVtb3ZlSWNvbicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBkZWZhdWx0UmVtb3ZlSWNvbjogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdkZWZhdWx0U2VsZWN0SWNvbicsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBkZWZhdWx0U2VsZWN0SWNvbjogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHJlbW92ZUJ1dHRvblRlbXBsYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmVJY29uIHx8IHRoaXMuZGVmYXVsdFJlbW92ZUljb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgc2VsZWN0SWNvblRlbXBsYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RJY29uIHx8IHRoaXMuZGVmYXVsdFNlbGVjdEljb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZ2hvc3RDbGFzcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnREZW5zaXR5Q2xhc3MoJ2lneC1jaGlwX19naG9zdCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY2hpcFRhYmluZGV4KCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuZGlzYWJsZWQgPyAwIDogJyc7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBfc2VsZWN0ZWRJdGVtQ2xhc3MgPSAnaWd4LWNoaXBfX2l0ZW0tLXNlbGVjdGVkJztcbiAgICBwcm90ZWN0ZWQgX21vdmVkV2hpbGVSZW1vdmluZyA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRGlzcGxheURlbnNpdHlUb2tlbikgcHJvdGVjdGVkIF9kaXNwbGF5RGVuc2l0eU9wdGlvbnM6IElEaXNwbGF5RGVuc2l0eU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHN1cGVyKF9kaXNwbGF5RGVuc2l0eU9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdENsYXNzKGNvbmRpdGlvbjogYm9vbGVhbik6IG9iamVjdCB7XG4gICAgICAgIGNvbnN0IFNFTEVDVF9DTEFTUyA9ICdpZ3gtY2hpcF9fc2VsZWN0JztcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgW1NFTEVDVF9DTEFTU106IGNvbmRpdGlvbixcbiAgICAgICAgICAgIFtgJHtTRUxFQ1RfQ0xBU1N9LS1oaWRkZW5gXTogIWNvbmRpdGlvblxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjaGFuZ2VTZWxlY3Rpb24obmV3VmFsdWU6IGJvb2xlYW4sIHNyY0V2ZW50ID0gbnVsbCkge1xuICAgICAgICBjb25zdCBvblNlbGVjdEFyZ3M6IElDaGlwU2VsZWN0RXZlbnRBcmdzID0ge1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogc3JjRXZlbnQsXG4gICAgICAgICAgICBvd25lcjogdGhpcyxcbiAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbmNlbDogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobmV3VmFsdWUgJiYgIXRoaXMuX3NlbGVjdGVkKSB7XG4gICAgICAgICAgICBvblNlbGVjdEFyZ3Muc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vblNlbGVjdGlvbi5lbWl0KG9uU2VsZWN0QXJncyk7XG5cbiAgICAgICAgICAgIGlmICghb25TZWxlY3RBcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5jaGlwQXJlYS5uYXRpdmVFbGVtZW50LCB0aGlzLl9zZWxlY3RlZEl0ZW1DbGFzcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghbmV3VmFsdWUgJiYgdGhpcy5fc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25TZWxlY3Rpb24uZW1pdChvblNlbGVjdEFyZ3MpO1xuXG4gICAgICAgICAgICBpZiAoIW9uU2VsZWN0QXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuY2hpcEFyZWEubmF0aXZlRWxlbWVudCwgdGhpcy5fc2VsZWN0ZWRJdGVtQ2xhc3MpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uQ2hpcEtleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgY29uc3Qga2V5RG93bkFyZ3M6IElDaGlwS2V5RG93bkV2ZW50QXJncyA9IHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgb3duZXI6IHRoaXMsXG4gICAgICAgICAgICBjYW5jZWw6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5vbktleURvd24uZW1pdChrZXlEb3duQXJncyk7XG4gICAgICAgIGlmIChrZXlEb3duQXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoZXZlbnQua2V5ID09PSAnRGVsZXRlJyB8fCBldmVudC5rZXkgPT09ICdEZWwnKSAmJiB0aGlzLnJlbW92YWJsZSkge1xuICAgICAgICAgICAgdGhpcy5vblJlbW92ZS5lbWl0KHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICBvd25lcjogdGhpc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKGV2ZW50LmtleSA9PT0gJyAnIHx8IGV2ZW50LmtleSA9PT0gJ1NwYWNlYmFyJykgJiYgdGhpcy5zZWxlY3RhYmxlICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNlbGVjdGlvbighdGhpcy5zZWxlY3RlZCwgZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LmtleSAhPT0gJ1RhYicpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uUmVtb3ZlQnRuS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnICcgfHwgZXZlbnQua2V5ID09PSAnU3BhY2ViYXInIHx8IGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgdGhpcy5vblJlbW92ZS5lbWl0KHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICBvd25lcjogdGhpc1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblJlbW92ZU1vdXNlRG93bihldmVudDogUG9pbnRlckV2ZW50IHwgTW91c2VFdmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uUmVtb3ZlQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSB7XG4gICAgICAgIHRoaXMub25SZW1vdmUuZW1pdCh7XG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgIG93bmVyOiB0aGlzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25SZW1vdmVUb3VjaE1vdmUoKSB7XG4gICAgICAgIC8vIFdlIGRvbid0IHJlbW92ZSBjaGlwIGlmIHVzZXIgc3RhcnRpbmcgdG91Y2ggaW50ZXJhY3Rpbmcgb24gdGhlIHJlbW92ZSBidXR0b24gbW92ZXMgdGhlIGNoaXBcbiAgICAgICAgdGhpcy5fbW92ZWRXaGlsZVJlbW92aW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uUmVtb3ZlVG91Y2hFbmQoZXZlbnQ6IFRvdWNoRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tb3ZlZFdoaWxlUmVtb3ZpbmcpIHtcbiAgICAgICAgICAgIHRoaXMub25SZW1vdmVDbGljayhldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW92ZWRXaGlsZVJlbW92aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU3RhcnQgY2hpcCBpZ3hEcmFnIGJlaGF2aW91clxuICAgIHB1YmxpYyBvbkNoaXBEcmFnU3RhcnQoZXZlbnQ6IElEcmFnU3RhcnRFdmVudEFyZ3MpIHtcbiAgICAgICAgdGhpcy5vbk1vdmVTdGFydC5lbWl0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50Lm9yaWdpbmFsRXZlbnQsXG4gICAgICAgICAgICBvd25lcjogdGhpc1xuICAgICAgICB9KTtcbiAgICAgICAgZXZlbnQuY2FuY2VsID0gIXRoaXMuZHJhZ2dhYmxlIHx8IHRoaXMuZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBvbkNoaXBEcmFnRW5kKCkge1xuICAgICAgICB0aGlzLmRyYWdEaXJlY3RpdmUuZHJvcEZpbmlzaGVkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBvbkNoaXBNb3ZlRW5kKGV2ZW50OiBJRHJhZ0Jhc2VFdmVudEFyZ3MpIHtcbiAgICAgICAgLy8gbW92ZUVuZCBpcyB0cmlnZ2VyZWQgYWZ0ZXIgcmV0dXJuIGFuaW1hdGlvbiBoYXMgZmluaXNoZWQuIFRoaXMgaGFwcGVuIHdoZW4gd2UgZHJhZyBhbmQgcmVsZWFzZSB0aGUgY2hpcC5cbiAgICAgICAgdGhpcy5vbk1vdmVFbmQuZW1pdCh7XG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudC5vcmlnaW5hbEV2ZW50LFxuICAgICAgICAgICAgb3duZXI6IHRoaXNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpcEFyZWEubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBvbkNoaXBEcmFnQ2xpY2tlZChldmVudDogSURyYWdCYXNlRXZlbnRBcmdzKSB7XG4gICAgICAgIGNvbnN0IGNsaWNrRXZlbnRBcmdzOiBJQ2hpcENsaWNrRXZlbnRBcmdzID0ge1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQub3JpZ2luYWxFdmVudCxcbiAgICAgICAgICAgIG93bmVyOiB0aGlzLFxuICAgICAgICAgICAgY2FuY2VsOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uQ2xpY2suZW1pdChjbGlja0V2ZW50QXJncyk7XG5cbiAgICAgICAgaWYgKCFjbGlja0V2ZW50QXJncy5jYW5jZWwgJiYgdGhpcy5zZWxlY3RhYmxlICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNlbGVjdGlvbighdGhpcy5zZWxlY3RlZCwgZXZlbnQub3JpZ2luYWxFdmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRW5kIGNoaXAgaWd4RHJhZyBiZWhhdmlvdXJcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFN0YXJ0IGNoaXAgaWd4RHJvcCBiZWhhdmlvdXJcbiAgICBwdWJsaWMgb25DaGlwRHJhZ0VudGVySGFuZGxlcihldmVudDogSWd4RHJvcEVudGVyRXZlbnRBcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLmRyYWdEaXJlY3RpdmUgPT09IGV2ZW50LmRyYWcgfHwgIWV2ZW50LmRyYWdEYXRhIHx8ICFldmVudC5kcmFnRGF0YS5jaGlwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBldmVudEFyZ3M6IElDaGlwRW50ZXJEcmFnQXJlYUV2ZW50QXJncyA9IHtcbiAgICAgICAgICAgIG93bmVyOiB0aGlzLFxuICAgICAgICAgICAgZHJhZ0NoaXA6IGV2ZW50LmRyYWdEYXRhLmNoaXAsXG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uRHJhZ0VudGVyLmVtaXQoZXZlbnRBcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uQ2hpcERyb3AoZXZlbnQ6IElneERyb3BFdmVudEFyZ3MpIHtcbiAgICAgICAgLy8gQ2FuY2VsIHRoZSBkZWZhdWx0IGRyb3AgbG9naWNcbiAgICAgICAgZXZlbnQuY2FuY2VsID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gRW5kIGNoaXAgaWd4RHJvcCBiZWhhdmlvdXJcbn1cbiJdfQ==