import { ChangeDetectorRef, EventEmitter, ElementRef, Renderer2, TemplateRef } from '@angular/core';
import { IDisplayDensityOptions, DisplayDensityBase } from '../core/displayDensity';
import { IgxDragDirective, IDragBaseEventArgs, IDragStartEventArgs, IgxDropEnterEventArgs, IgxDropEventArgs } from '../directives/dragdrop/dragdrop.directive';
export interface IBaseChipEventArgs {
    originalEvent: PointerEvent | MouseEvent | TouchEvent | KeyboardEvent | IgxDropEnterEventArgs;
    owner: IgxChipComponent;
}
export interface IChipClickEventArgs extends IBaseChipEventArgs {
    cancel: boolean;
}
export interface IChipKeyDownEventArgs extends IBaseChipEventArgs {
    originalEvent: KeyboardEvent;
    cancel: boolean;
}
export interface IChipEnterDragAreaEventArgs extends IBaseChipEventArgs {
    dragChip: IgxChipComponent;
}
export interface IChipSelectEventArgs extends IBaseChipEventArgs {
    cancel: boolean;
    selected: boolean;
}
export declare class IgxChipComponent extends DisplayDensityBase {
    cdr: ChangeDetectorRef;
    elementRef: ElementRef;
    private renderer;
    protected _displayDensityOptions: IDisplayDensityOptions;
    /**
     * An @Input property that sets the value of `id` attribute. If not provided it will be automatically generated.
     * ```html
     * <igx-chip [id]="'igx-chip-1'"></igx-chip>
     * ```
     */
    id: string;
    /**
     * An @Input property that stores data related to the chip.
     * ```html
     * <igx-chip [data]="{ value: 'Country' }"></igx-chip>
     * ```
     */
    data: any;
    /**
     * An @Input property that defines if the `IgxChipComponent` can be dragged in order to change it's position.
     * By default it is set to false.
     * ```html
     * <igx-chip [id]="'igx-chip-1'" [draggable]="true"></igx-chip>
     * ```
     */
    draggable: boolean;
    /**
     * An @Input property that enables/disables the draggable element animation when the element is released.
     * By default it's set to true.
     * ```html
     * <igx-chip [id]="'igx-chip-1'" [draggable]="true" [animateOnRelease]="false"></igx-chip>
     * ```
     */
    animateOnRelease: boolean;
    /**
     * An @Input property that enables/disables the hiding of the base element that has been dragged.
     * By default it's set to true.
     * ```html
     * <igx-chip [id]="'igx-chip-1'" [draggable]="true" [hideBaseOnDrag]="false"></igx-chip>
     * ```
     */
    hideBaseOnDrag: boolean;
    /**
     * An @Input property that defines if the `IgxChipComponent` should render remove button and throw remove events.
     * By default it is set to false.
     * ```html
     * <igx-chip [id]="'igx-chip-1'" [draggable]="true" [removable]="true"></igx-chip>
     * ```
     */
    removable: boolean;
    /**
     * An @Input property that overrides the default icon that the chip applies to the remove button.
     * ```html
     * <igx-chip [id]="chip.id" [removable]="true" [removeIcon]="iconTemplate"></igx-chip>
     * <ng-template #iconTemplate><igx-icon>delete</igx-icon></ng-template>
     * ```
     */
    removeIcon: TemplateRef<any>;
    /**
     * An @Input property that defines if the `IgxChipComponent` can be selected on click or through navigation,
     * By default it is set to false.
     * ```html
     * <igx-chip [id]="chip.id" [draggable]="true" [removable]="true" [selectable]="true"></igx-chip>
     * ```
     */
    selectable: boolean;
    /**
     * An @Input property that overrides the default icon that the chip applies when it is selected.
     * ```html
     * <igx-chip [id]="chip.id" [selectable]="true" [selectIcon]="iconTemplate"></igx-chip>
     * <ng-template #iconTemplate><igx-icon>done_outline</igx-icon></ng-template>
     * ```
     */
    selectIcon: TemplateRef<any>;
    /**
     * @hidden
     */
    class: string;
    /**
     * An @Input property that defines if the `IgxChipComponent` is disabled. When disabled it restricts user interactions
     * like focusing on click or tab, selection on click or Space, dragging.
     * By default it is set to false.
     * ```html
     * <igx-chip [id]="chip.id" [disabled]="true"></igx-chip>
     * ```
     */
    disabled: boolean;
    /**
     * Sets the `IgxChipComponent` selected state.
     * ```html
     * <igx-chip #myChip [id]="'igx-chip-1'" [selectable]="true" [selected]="true">
     * ```
     */
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
    selected: boolean;
    /**
     * An @Input property that sets the `IgxChipComponent` background color.
     * The `color` property supports string, rgb, hex.
     * ```html
     * <igx-chip #myChip [id]="'igx-chip-1'" [color]="'#ff0000'"></igx-chip>
     * ```
     */
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
    color: any;
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
    onMoveStart: EventEmitter<IBaseChipEventArgs>;
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
    onMoveEnd: EventEmitter<IBaseChipEventArgs>;
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
    onRemove: EventEmitter<IBaseChipEventArgs>;
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
    onClick: EventEmitter<IChipClickEventArgs>;
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
    onSelection: EventEmitter<IChipSelectEventArgs>;
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
    onKeyDown: EventEmitter<IChipKeyDownEventArgs>;
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
    onDragEnter: EventEmitter<IChipEnterDragAreaEventArgs>;
    /**
     * @hidden
     */
    readonly hostClass: string;
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
     */
    dragDirective: IgxDragDirective;
    /**
     * @hidden
     */
    chipArea: ElementRef;
    /**
     * @hidden
     */
    defaultRemoveIcon: TemplateRef<any>;
    /**
     * @hidden
     */
    defaultSelectIcon: TemplateRef<any>;
    /**
     * @hidden
     */
    readonly removeButtonTemplate: TemplateRef<any>;
    /**
     * @hidden
     */
    readonly selectIconTemplate: TemplateRef<any>;
    /**
     * @hidden
     */
    readonly ghostClass: string;
    readonly chipTabindex: "" | 0;
    protected _selected: boolean;
    protected _selectedItemClass: string;
    protected _movedWhileRemoving: boolean;
    constructor(cdr: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2, _displayDensityOptions: IDisplayDensityOptions);
    /**
     * @hidden
     */
    selectClass(condition: boolean): object;
    protected changeSelection(newValue: boolean, srcEvent?: any): void;
    /**
     * @hidden
     */
    onChipKeyDown(event: KeyboardEvent): void;
    /**
     * @hidden
     */
    onRemoveBtnKeyDown(event: KeyboardEvent): void;
    onRemoveMouseDown(event: PointerEvent | MouseEvent): void;
    /**
     * @hidden
     */
    onRemoveClick(event: MouseEvent | TouchEvent): void;
    /**
     * @hidden
     */
    onRemoveTouchMove(): void;
    /**
     * @hidden
     */
    onRemoveTouchEnd(event: TouchEvent): void;
    /**
     * @hidden
     */
    onChipDragStart(event: IDragStartEventArgs): void;
    /**
     * @hidden
     */
    onChipDragEnd(): void;
    /**
     * @hidden
     */
    onChipMoveEnd(event: IDragBaseEventArgs): void;
    /**
     * @hidden
     */
    onChipDragClicked(event: IDragBaseEventArgs): void;
    /**
     * @hidden
     */
    onChipDragEnterHandler(event: IgxDropEnterEventArgs): void;
    /**
     * @hidden
     */
    onChipDrop(event: IgxDropEventArgs): void;
}
