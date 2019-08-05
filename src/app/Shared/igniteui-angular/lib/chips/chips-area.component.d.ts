import { ChangeDetectorRef, EventEmitter, IterableDiffers, QueryList, DoCheck, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { IgxChipComponent, IChipSelectEventArgs, IChipKeyDownEventArgs, IChipEnterDragAreaEventArgs, IBaseChipEventArgs } from './chip.component';
import { IgxDropEnterEventArgs } from '../directives/dragdrop/dragdrop.directive';
import { Subject } from 'rxjs/internal/Subject';
export interface IBaseChipsAreaEventArgs {
    originalEvent: PointerEvent | MouseEvent | TouchEvent | KeyboardEvent | IgxDropEnterEventArgs;
    owner: IgxChipsAreaComponent;
}
export interface IChipsAreaReorderEventArgs extends IBaseChipsAreaEventArgs {
    chipsArray: IgxChipComponent[];
}
export interface IChipsAreaSelectEventArgs extends IBaseChipsAreaEventArgs {
    newSelection: IgxChipComponent[];
}
export declare class IgxChipsAreaComponent implements DoCheck, AfterViewInit, OnDestroy {
    cdr: ChangeDetectorRef;
    element: ElementRef;
    private _iterableDiffers;
    /**
     * @hidden
     */
    class: string;
    /**
     * @hidden
     */
    readonly hostClass: string;
    /**
     * An @Input property that sets the width of the `IgxChipsAreaComponent`.
     * ```html
     * <igx-chips-area #chipsArea [width]="'300'" [height]="'10'" (onReorder)="chipsOrderChanged($event)"></igx-chips-area>
     * ```
     */
    width: number;
    /**
     * An @Input property that sets the height of the `IgxChipsAreaComponent`.
     * ```html
     * <igx-chips-area #chipsArea [width]="'300'" [height]="'10'" (onReorder)="chipsOrderChanged($event)"></igx-chips-area>
     * ```
     */
    height: number;
    /**
     * Emits an event when `IgxChipComponent`s in the `IgxChipsAreaComponent` should be reordered.
     * Returns an array of `IgxChipComponent`s.
     * ```html
     * <igx-chips-area #chipsArea [width]="'300'" [height]="'10'" (onReorder)="changedOrder($event)"></igx-chips-area>
     * ```
     * ```typescript
     * public changedOrder(event: IChipsAreaReorderEventArgs){
     *      let chips: IgxChipComponent[] = event.chipsArray;
     * }
     * ```
     */
    onReorder: EventEmitter<IChipsAreaReorderEventArgs>;
    /**
     * Emits an event when an `IgxChipComponent` in the `IgxChipsAreaComponent` is selected/deselected.
     * Fired after the chips area is initialized if there are initially selected chips as well.
     * Returns an array of selected `IgxChipComponent`s and the `IgxChipAreaComponent`.
     * ```html
     * <igx-chips-area #chipsArea [width]="'300'" [height]="'10'" (onSelection)="selection($event)"></igx-chips-area>
     * ```
     * ```typescript
     * public selection(event: IChipsAreaSelectEventArgs){
     *      let selectedChips: IgxChipComponent[] = event.newSelection;
     * }
     */
    onSelection: EventEmitter<IChipsAreaSelectEventArgs>;
    /**
     * Emits an event when an `IgxChipComponent` in the `IgxChipsAreaComponent` is moved.
     * ```html
     * <igx-chips-area #chipsArea [width]="'300'" [height]="'10'" (onMoveStart)="moveStart($event)"></igx-chips-area>
     * ```
     * ```typescript
     * moveStart(event: IBaseChipsAreaEventArgs){
     *      let chipArea = event.owner;
     * }
     * ```
     */
    onMoveStart: EventEmitter<IBaseChipsAreaEventArgs>;
    /**
     * Emits an event after an `IgxChipComponent` in the `IgxChipsAreaComponent` is moved.
     * ```html
     * <igx-chips-area #chipsArea [width]="'300'" [height]="'10'" (onMoveEnd)="moveEnd($event)"></igx-chips-area>
     * ```
     * ```typescript
     * moveEnd(event: IBaseChipsAreaEventArgs){
     *      let chipArea = event.owner;
     * }
     * ```
     */
    onMoveEnd: EventEmitter<IBaseChipsAreaEventArgs>;
    /**
     * Holds the `IgxChipComponent` in the `IgxChipsAreaComponent`.
     * ```typescript
     * ngAfterViewInit(){
     *    let chips = this.chipsArea.chipsList;
     * }
     * ```
     */
    chipsList: QueryList<IgxChipComponent>;
    private modifiedChipsArray;
    private _differ;
    private selectedChips;
    protected destroy$: Subject<boolean>;
    constructor(cdr: ChangeDetectorRef, element: ElementRef, _iterableDiffers: IterableDiffers);
    /**
     * @hidden
     */
    ngAfterViewInit(): void;
    /**
     * @hidden
     */
    ngDoCheck(): void;
    /**
     *@hidden
     */
    ngOnDestroy(): void;
    /**
     * @hidden
     */
    protected onChipKeyDown(event: IChipKeyDownEventArgs): void;
    /**
     * @hidden
     */
    protected onChipMoveStart(event: IBaseChipEventArgs): void;
    /**
     * @hidden
     */
    protected onChipMoveEnd(event: IBaseChipEventArgs): void;
    /**
     * @hidden
     */
    protected onChipDragEnter(event: IChipEnterDragAreaEventArgs): void;
    /**
     * @hidden
     */
    protected positionChipAtIndex(chipIndex: any, targetIndex: any, shiftRestLeft: any, originalEvent: any): boolean;
    /**
     * @hidden
     */
    protected onChipSelectionChange(event: IChipSelectEventArgs): void;
}