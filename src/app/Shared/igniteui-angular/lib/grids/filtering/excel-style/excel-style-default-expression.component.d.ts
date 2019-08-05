import { AfterViewInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { IgxColumnComponent } from '../../column.component';
import { ExpressionUI } from '../grid-filtering.service';
import { IgxButtonGroupComponent } from '../../../buttonGroup/buttonGroup.component';
import { IgxDropDownComponent } from '../../../drop-down/index';
import { IgxInputGroupComponent, IgxInputDirective } from '../../../input-group/index';
import { IFilteringOperation } from '../../../data-operations/filtering-condition';
import { FilteringLogic } from '../../../data-operations/filtering-expression.interface';
import { DisplayDensity } from '../../../core/density';
/**
 * @hidden
 */
export interface ILogicOperatorChangedArgs {
    target: ExpressionUI;
    newValue: FilteringLogic;
}
/**
 * @hidden
 */
export declare class IgxExcelStyleDefaultExpressionComponent implements AfterViewInit {
    cdr: ChangeDetectorRef;
    private _dropDownOverlaySettings;
    column: IgxColumnComponent;
    expressionUI: ExpressionUI;
    expressionsList: Array<ExpressionUI>;
    grid: any;
    displayDensity: DisplayDensity;
    onExpressionRemoved: EventEmitter<ExpressionUI>;
    onLogicOperatorChanged: EventEmitter<ILogicOperatorChangedArgs>;
    protected inputGroupConditions: IgxInputGroupComponent;
    protected inputValuesDirective: IgxInputDirective;
    protected dropdownConditions: IgxDropDownComponent;
    protected logicOperatorButtonGroup: IgxButtonGroupComponent;
    protected readonly inputValuesElement: IgxInputDirective;
    readonly isLast: boolean;
    readonly isSingle: boolean;
    readonly inputConditionsPlaceholder: string;
    readonly inputValuePlaceholder: string;
    readonly type: "text" | "number";
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    focus(): void;
    isConditionSelected(conditionName: string): boolean;
    getConditionName(condition: IFilteringOperation): string;
    getInputWidth(): string;
    readonly conditions: string[];
    translateCondition(value: string): string;
    getIconName(): string;
    toggleCustomDialogDropDown(): void;
    getCondition(value: string): IFilteringOperation;
    onConditionsChanged(eventArgs: any): void;
    onValuesInput(eventArgs: any): void;
    onLogicOperatorButtonClicked(eventArgs: any, buttonIndex: number): void;
    onLogicOperatorKeyDown(eventArgs: any, buttonIndex: number): void;
    onRemoveButtonClick(): void;
    onInputConditionsKeyDown(eventArgs: any): void;
    private transformValue;
}
