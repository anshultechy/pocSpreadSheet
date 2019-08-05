import { AfterViewInit, ChangeDetectorRef, TemplateRef, QueryList, ElementRef } from '@angular/core';
import { IgxColumnComponent } from '../column.component';
import { IgxDropDownComponent, ISelectionEventArgs } from '../../drop-down/index';
import { IFilteringOperation } from '../../data-operations/filtering-condition';
import { IFilteringExpression } from '../../data-operations/filtering-expression.interface';
import { IChipSelectEventArgs, IBaseChipEventArgs, IgxChipsAreaComponent, IgxChipComponent } from '../../chips';
import { ExpressionUI } from './grid-filtering.service';
import { IgxFilteringService } from './grid-filtering.service';
/**
 * @hidden
 */
export declare class IgxGridFilteringRowComponent implements AfterViewInit {
    filteringService: IgxFilteringService;
    element: ElementRef;
    cdr: ChangeDetectorRef;
    private _positionSettings;
    private _conditionsOverlaySettings;
    private _operatorsOverlaySettings;
    private chipsAreaWidth;
    private chipAreaScrollOffset;
    private _column;
    private isKeyPressed;
    private isComposing;
    private _cancelChipClick;
    showArrows: boolean;
    expression: IFilteringExpression;
    expressionsList: Array<ExpressionUI>;
    column: IgxColumnComponent;
    value: any;
    protected defaultFilterUI: TemplateRef<any>;
    protected defaultDateUI: TemplateRef<any>;
    protected input: ElementRef;
    protected dropDownConditions: IgxDropDownComponent;
    protected chipsArea: IgxChipsAreaComponent;
    protected dropDownOperators: QueryList<IgxDropDownComponent>;
    protected inputGroup: ElementRef;
    protected inputGroupPrefix: ElementRef;
    protected container: ElementRef;
    protected operand: ElementRef;
    closeButton: ElementRef;
    cssClass: string;
    constructor(filteringService: IgxFilteringService, element: ElementRef, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    onTabKeydown(event: any): void;
    onEscKeydown(event: any): void;
    readonly disabled: boolean;
    readonly template: TemplateRef<any>;
    readonly type: "text" | "number";
    readonly conditions: any;
    readonly isUnaryCondition: boolean;
    readonly placeholder: string;
    /**
     * Event handler for keydown on the input group's prefix.
     */
    onPrefixKeyDown(event: KeyboardEvent): void;
    /**
     * Event handler for keydown on the input.
     */
    onInputKeyDown(event: KeyboardEvent): void;
    /**
     * Event handler for keyup on the input.
     */
    onInputKeyUp(eventArgs: any): void;
    /**
     * Event handler for input on the input.
     */
    onInput(eventArgs: any): void;
    /**
     * Event handler for compositionstart on the input.
     */
    onCompositionStart(): void;
    /**
     * Event handler for compositionend on the input.
     */
    onCompositionEnd(): void;
    /**
     * Event handler for input click event.
     */
    onInputClick(): void;
    /**
     * Event handler for datepicker's close.
     */
    datePickerClose(): void;
    /**
     * Returns the filtering operation condition for a given value.
     */
    getCondition(value: string): IFilteringOperation;
    /**
     * Returns the translated condition name for a given value.
     */
    translateCondition(value: string): string;
    /**
     * Returns the icon name of the current condition.
     */
    getIconName(): string;
    /**
     * Returns whether a given condition is selected in dropdown.
     */
    isConditionSelected(conditionName: string): boolean;
    /**
     * Clears the current filtering.
     */
    clearFiltering(): void;
    /**
     * Commits the value of the input.
     */
    commitInput(): void;
    /**
     * Clears the value of the input.
     */
    clearInput(): void;
    /**
     * Event handler for keydown on clear button.
     */
    onClearKeyDown(eventArgs: KeyboardEvent): void;
    /**
     * Event handler for click on clear button.
     */
    onClearClick(): void;
    /**
     * Event handler for keydown on commit button.
     */
    onCommitKeyDown(eventArgs: KeyboardEvent): void;
    /**
     * Event handler for click on commit button.
     */
    onCommitClick(): void;
    /**
     * Event handler for focusout on the input group.
     */
    onInputGroupFocusout(): void;
    /**
     * Closes the filtering edit row.
     */
    close(): void;
    noop(): void;
    /**
     *  Event handler for date picker's selection.
     */
    onDateSelected(value: Date): void;
    /**
     * Opens the conditions dropdown.
     */
    toggleConditionsDropDown(target: any): void;
    /**
     * Opens the logic operators dropdown.
     */
    toggleOperatorsDropDown(eventArgs: any, index: any): void;
    /**
     * Event handler for change event in conditions dropdown.
     */
    onConditionsChanged(eventArgs: any): void;
    onChipPointerdown(args: any, chip: IgxChipComponent): void;
    onChipClick(args: any, chip: IgxChipComponent): void;
    /**
     *  Event handler for chip selected event.
     */
    onChipSelected(eventArgs: IChipSelectEventArgs, expression: IFilteringExpression): void;
    /**
     * Event handler for chip keydown event.
     */
    onChipKeyDown(eventArgs: KeyboardEvent, chip: IgxChipComponent): void;
    /**
     * Scrolls the first chip into view if the tab key is pressed on the left arrow.
     */
    onLeftArrowKeyDown(event: any): void;
    /**
     * Event handler for chip removed event.
     */
    onChipRemoved(eventArgs: IBaseChipEventArgs, item: ExpressionUI): void;
    /**
     * Event handler for logic operator changed event.
     */
    onLogicOperatorChanged(eventArgs: ISelectionEventArgs, expression: ExpressionUI): void;
    /**
     * Scrolls the chips into the chip area when left or right arrows are pressed.
     */
    scrollChipsOnArrowPress(arrowPosition: string): void;
    private showHideArrowButtons;
    private transformValue;
    private addExpression;
    private removeExpression;
    private resetExpression;
    private scrollChipsWhenAddingExpression;
    /**
     * @hidden
     * Resets the chips area
     * @memberof IgxGridFilteringRowComponent
     */
    resetChipsArea(): void;
    private transform;
    private scrollChipsOnRemove;
    private conditionChangedCallback;
    private unaryConditionChangedCallback;
    private filter;
    private readonly isColumnFiltered;
}