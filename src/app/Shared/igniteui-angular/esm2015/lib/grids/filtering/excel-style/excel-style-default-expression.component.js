/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ChangeDetectorRef, ViewChild } from '@angular/core';
import { IgxColumnComponent } from '../../column.component';
import { ExpressionUI } from '../grid-filtering.service';
import { IgxButtonGroupComponent } from '../../../buttonGroup/buttonGroup.component';
import { IgxDropDownComponent } from '../../../drop-down/index';
import { IgxInputGroupComponent, IgxInputDirective } from '../../../input-group/index';
import { DataType } from '../../../data-operations/data-util';
import { ConnectedPositioningStrategy, CloseScrollStrategy } from '../../../services/index';
import { DisplayDensity } from '../../../core/density';
/**
 * @hidden
 * @record
 */
export function ILogicOperatorChangedArgs() { }
if (false) {
    /** @type {?} */
    ILogicOperatorChangedArgs.prototype.target;
    /** @type {?} */
    ILogicOperatorChangedArgs.prototype.newValue;
}
/**
 * @hidden
 */
export class IgxExcelStyleDefaultExpressionComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this._dropDownOverlaySettings = {
            closeOnOutsideClick: true,
            modal: false,
            positionStrategy: new ConnectedPositioningStrategy(),
            scrollStrategy: new CloseScrollStrategy()
        };
        this.onExpressionRemoved = new EventEmitter();
        this.onLogicOperatorChanged = new EventEmitter();
    }
    /**
     * @protected
     * @return {?}
     */
    get inputValuesElement() {
        return this.inputValuesDirective;
    }
    /**
     * @return {?}
     */
    get isLast() {
        return this.expressionsList[this.expressionsList.length - 1] === this.expressionUI;
    }
    /**
     * @return {?}
     */
    get isSingle() {
        return this.expressionsList.length === 1;
    }
    /**
     * @return {?}
     */
    get inputConditionsPlaceholder() {
        return this.grid.resourceStrings['igx_grid_filter_condition_placeholder'];
    }
    /**
     * @return {?}
     */
    get inputValuePlaceholder() {
        return this.grid.resourceStrings['igx_grid_filter_row_placeholder'];
    }
    /**
     * @return {?}
     */
    get type() {
        switch (this.column.dataType) {
            case DataType.Number:
                return 'number';
            default:
                return 'text';
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._dropDownOverlaySettings.outlet = this.column.grid.outletDirective;
        this._dropDownOverlaySettings.positionStrategy.settings.target = this.inputGroupConditions.element.nativeElement;
    }
    /**
     * @return {?}
     */
    focus() {
        // use requestAnimationFrame to focus the values input because when initializing the component
        // datepicker's input group is not yet fully initialized
        requestAnimationFrame(() => this.inputValuesElement.focus());
    }
    /**
     * @param {?} conditionName
     * @return {?}
     */
    isConditionSelected(conditionName) {
        return this.expressionUI.expression.condition && this.expressionUI.expression.condition.name === conditionName;
    }
    /**
     * @param {?} condition
     * @return {?}
     */
    getConditionName(condition) {
        return condition ? this.translateCondition(condition.name) : null;
    }
    /**
     * @return {?}
     */
    getInputWidth() {
        return this.inputGroupConditions.element.nativeElement.offsetWidth + 'px';
    }
    /**
     * @return {?}
     */
    get conditions() {
        return this.column.filters.conditionList();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    translateCondition(value) {
        return this.grid.resourceStrings[`igx_grid_filter_${this.getCondition(value).name}`] || value;
    }
    /**
     * @return {?}
     */
    getIconName() {
        if (this.column.dataType === DataType.Boolean && this.expressionUI.expression.condition === null) {
            return this.getCondition(this.conditions[0]).iconName;
        }
        else if (!this.expressionUI.expression.condition) {
            return 'filter_list';
        }
        else {
            return this.expressionUI.expression.condition.iconName;
        }
    }
    /**
     * @return {?}
     */
    toggleCustomDialogDropDown() {
        this.dropdownConditions.toggle(this._dropDownOverlaySettings);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getCondition(value) {
        return this.column.filters.condition(value);
    }
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    onConditionsChanged(eventArgs) {
        /** @type {?} */
        const value = ((/** @type {?} */ (eventArgs.newSelection))).value;
        this.expressionUI.expression.condition = this.getCondition(value);
        this.focus();
    }
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    onValuesInput(eventArgs) {
        this.expressionUI.expression.searchVal = this.transformValue(eventArgs.target.value);
    }
    /**
     * @param {?} eventArgs
     * @param {?} buttonIndex
     * @return {?}
     */
    onLogicOperatorButtonClicked(eventArgs, buttonIndex) {
        if (this.logicOperatorButtonGroup.selectedButtons.length === 0) {
            eventArgs.stopPropagation();
            this.logicOperatorButtonGroup.selectButton(buttonIndex);
        }
        else {
            this.onLogicOperatorChanged.emit({
                target: this.expressionUI,
                newValue: (/** @type {?} */ (buttonIndex))
            });
        }
    }
    /**
     * @param {?} eventArgs
     * @param {?} buttonIndex
     * @return {?}
     */
    onLogicOperatorKeyDown(eventArgs, buttonIndex) {
        if (eventArgs.key === "Enter" /* ENTER */) {
            this.logicOperatorButtonGroup.selectButton(buttonIndex);
            this.onLogicOperatorChanged.emit({
                target: this.expressionUI,
                newValue: (/** @type {?} */ (buttonIndex))
            });
        }
    }
    /**
     * @return {?}
     */
    onRemoveButtonClick() {
        this.onExpressionRemoved.emit(this.expressionUI);
    }
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    onInputConditionsKeyDown(eventArgs) {
        if (eventArgs.altKey && (eventArgs.key === "ArrowDown" /* DOWN_ARROW */ || eventArgs.key === "Down" /* DOWN_ARROW_IE */)) {
            this.toggleCustomDialogDropDown();
        }
        if (eventArgs.key === "Tab" /* TAB */ && eventArgs.shiftKey && this.expressionsList[0] === this.expressionUI) {
            eventArgs.preventDefault();
        }
        event.stopPropagation();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    transformValue(value) {
        if (this.column.dataType === DataType.Number) {
            value = parseFloat(value);
        }
        else if (this.column.dataType === DataType.Boolean) {
            value = Boolean(value);
        }
        return value;
    }
}
IgxExcelStyleDefaultExpressionComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'igx-excel-style-default-expression',
                template: "<igx-drop-down\n    #dropdownConditions\n    [maxHeight]=\"'200px'\"\n    [width]=\"getInputWidth()\"\n    (onSelection)=\"onConditionsChanged($event)\">\n    <igx-drop-down-item *ngFor=\"let condition of conditions\" [value]=\"condition\" [selected]=\"isConditionSelected(condition)\">\n        <igx-icon fontSet=\"filtering-icons\" [name]=\"getCondition(condition).iconName\"></igx-icon>\n        <span>{{ translateCondition(condition) }}</span>\n    </igx-drop-down-item>\n</igx-drop-down>\n\n<igx-input-group\n    #inputGroupConditions\n    (click)=\"toggleCustomDialogDropDown()\"\n    type=\"box\"\n    [displayDensity]=\"displayDensity\"\n    [supressInputAutofocus]=\"true\">\n\n    <igx-prefix>\n        <igx-icon *ngIf=\"expressionUI.expression.condition\" fontSet=\"filtering-icons\" [name]=\"getIconName()\"></igx-icon>\n        <igx-icon *ngIf=\"!expressionUI.expression.condition\">filter_list</igx-icon>\n    </igx-prefix>\n\n    <input\n        igxInput\n        (keydown)=\"onInputConditionsKeyDown($event)\"\n        [igxDropDownItemNavigation]=\"dropdownConditions\"\n        tabindex=\"0\"\n        [placeholder]=\"inputConditionsPlaceholder\"\n        autocomplete=\"off\"\n        [value]=\"getConditionName(expressionUI.expression.condition)\"\n        [readonly]=\"true\"\n    />\n</igx-input-group>\n\n<igx-input-group #inputGroupValues type=\"box\" [displayDensity]=\"displayDensity\" [supressInputAutofocus]=\"true\">\n    <input\n        #inputValues\n        igxInput\n        [type]=\"type\"\n        tabindex=\"0\"\n        [placeholder]=\"inputValuePlaceholder\"\n        [disabled]=\"expressionUI.expression.condition && expressionUI.expression.condition.isUnary\"\n        autocomplete=\"off\"\n        [value]=\"expressionUI.expression.searchVal\"\n        (input)=\"onValuesInput($event)\"\n    />\n</igx-input-group>\n\n<button (click)=\"onRemoveButtonClick()\" igxButton=\"icon\" [displayDensity]=\"displayDensity\" *ngIf=\"!isSingle\">\n    <igx-icon>cancel</igx-icon>\n</button>\n\n<igx-buttongroup #logicOperatorButtonGroup\n    *ngIf=\"!isLast\"\n    [multiSelection]=\"false\">\n    <span igxButton [displayDensity]=\"displayDensity\"\n        tabindex=\"0\"\n        #andButton\n        (keydown)=\"onLogicOperatorKeyDown($event, 0)\"\n        [selected]=\"expressionUI.afterOperator === 0\"\n        type=\"button\"\n        (click)=\"onLogicOperatorButtonClicked($event, 0)\">\n        {{ grid.resourceStrings.igx_grid_filter_operator_and }}\n    </span>\n\n    <span igxButton [displayDensity]=\"displayDensity\"\n        tabindex=\"0\"\n        #orButton\n        (keydown)=\"onLogicOperatorKeyDown($event, 1)\"\n        [selected]=\"expressionUI.afterOperator === 1\"\n        type=\"button\"\n        (click)=\"onLogicOperatorButtonClicked($event, 1)\">\n        {{ grid.resourceStrings.igx_grid_filter_operator_or }}\n    </span>\n</igx-buttongroup>\n"
            }] }
];
/** @nocollapse */
IgxExcelStyleDefaultExpressionComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
IgxExcelStyleDefaultExpressionComponent.propDecorators = {
    column: [{ type: Input }],
    expressionUI: [{ type: Input }],
    expressionsList: [{ type: Input }],
    grid: [{ type: Input }],
    displayDensity: [{ type: Input }],
    onExpressionRemoved: [{ type: Output }],
    onLogicOperatorChanged: [{ type: Output }],
    inputGroupConditions: [{ type: ViewChild, args: ['inputGroupConditions', { read: IgxInputGroupComponent, static: true },] }],
    inputValuesDirective: [{ type: ViewChild, args: ['inputValues', { read: IgxInputDirective, static: true },] }],
    dropdownConditions: [{ type: ViewChild, args: ['dropdownConditions', { read: IgxDropDownComponent, static: true },] }],
    logicOperatorButtonGroup: [{ type: ViewChild, args: ['logicOperatorButtonGroup', { read: IgxButtonGroupComponent, static: false },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxExcelStyleDefaultExpressionComponent.prototype._dropDownOverlaySettings;
    /** @type {?} */
    IgxExcelStyleDefaultExpressionComponent.prototype.column;
    /** @type {?} */
    IgxExcelStyleDefaultExpressionComponent.prototype.expressionUI;
    /** @type {?} */
    IgxExcelStyleDefaultExpressionComponent.prototype.expressionsList;
    /** @type {?} */
    IgxExcelStyleDefaultExpressionComponent.prototype.grid;
    /** @type {?} */
    IgxExcelStyleDefaultExpressionComponent.prototype.displayDensity;
    /** @type {?} */
    IgxExcelStyleDefaultExpressionComponent.prototype.onExpressionRemoved;
    /** @type {?} */
    IgxExcelStyleDefaultExpressionComponent.prototype.onLogicOperatorChanged;
    /**
     * @type {?}
     * @protected
     */
    IgxExcelStyleDefaultExpressionComponent.prototype.inputGroupConditions;
    /**
     * @type {?}
     * @protected
     */
    IgxExcelStyleDefaultExpressionComponent.prototype.inputValuesDirective;
    /**
     * @type {?}
     * @protected
     */
    IgxExcelStyleDefaultExpressionComponent.prototype.dropdownConditions;
    /**
     * @type {?}
     * @protected
     */
    IgxExcelStyleDefaultExpressionComponent.prototype.logicOperatorButtonGroup;
    /** @type {?} */
    IgxExcelStyleDefaultExpressionComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtc3R5bGUtZGVmYXVsdC1leHByZXNzaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvZmlsdGVyaW5nL2V4Y2VsLXN0eWxlL2V4Y2VsLXN0eWxlLWRlZmF1bHQtZXhwcmVzc2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsdUJBQXVCLEVBRXZCLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLGlCQUFpQixFQUNqQixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3JGLE9BQU8sRUFBNEIsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFOUQsT0FBTyxFQUFtQiw0QkFBNEIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRzdHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFLdkQsK0NBR0M7OztJQUZHLDJDQUFxQjs7SUFDckIsNkNBQXlCOzs7OztBQVk3QixNQUFNLE9BQU8sdUNBQXVDOzs7O0lBdUVoRCxZQUFtQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXJFakMsNkJBQXdCLEdBQW9CO1lBQ2hELG1CQUFtQixFQUFFLElBQUk7WUFDekIsS0FBSyxFQUFFLEtBQUs7WUFDWixnQkFB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dURBQ2lCOztJQUVqQixpRUFDc0M7O0lBRXRDLHNFQUM4RDs7SUFFOUQseUVBQzhFOzs7OztJQUU5RSx1RUFDdUQ7Ozs7O0lBRXZELHVFQUNrRDs7Ozs7SUFFbEQscUVBQ21EOzs7OztJQUVuRCwyRUFDNEQ7O0lBK0JoRCxzREFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIElucHV0LFxuICAgIE91dHB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHByZXNzaW9uVUkgfSBmcm9tICcuLi9ncmlkLWZpbHRlcmluZy5zZXJ2aWNlJztcbmltcG9ydCB7IElneEJ1dHRvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vYnV0dG9uR3JvdXAvYnV0dG9uR3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IElneERyb3BEb3duSXRlbUNvbXBvbmVudCwgSWd4RHJvcERvd25Db21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9kcm9wLWRvd24vaW5kZXgnO1xuaW1wb3J0IHsgSWd4SW5wdXRHcm91cENvbXBvbmVudCwgSWd4SW5wdXREaXJlY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9pbnB1dC1ncm91cC9pbmRleCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9kYXRhLXV0aWwnO1xuaW1wb3J0IHsgSUZpbHRlcmluZ09wZXJhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9maWx0ZXJpbmctY29uZGl0aW9uJztcbmltcG9ydCB7IE92ZXJsYXlTZXR0aW5ncywgQ29ubmVjdGVkUG9zaXRpb25pbmdTdHJhdGVneSwgQ2xvc2VTY3JvbGxTdHJhdGVneSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IEtFWVMgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IEZpbHRlcmluZ0xvZ2ljIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1leHByZXNzaW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEaXNwbGF5RGVuc2l0eSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZGVuc2l0eSc7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgaW50ZXJmYWNlIElMb2dpY09wZXJhdG9yQ2hhbmdlZEFyZ3Mge1xuICAgIHRhcmdldDogRXhwcmVzc2lvblVJO1xuICAgIG5ld1ZhbHVlOiBGaWx0ZXJpbmdMb2dpYztcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICAgIHNlbGVjdG9yOiAnaWd4LWV4Y2VsLXN0eWxlLWRlZmF1bHQtZXhwcmVzc2lvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2V4Y2VsLXN0eWxlLWRlZmF1bHQtZXhwcmVzc2lvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4RXhjZWxTdHlsZURlZmF1bHRFeHByZXNzaW9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBwcml2YXRlIF9kcm9wRG93bk92ZXJsYXlTZXR0aW5nczogT3ZlcmxheVNldHRpbmdzID0ge1xuICAgICAgICBjbG9zZU9uT3V0c2lkZUNsaWNrOiB0cnVlLFxuICAgICAgICBtb2RhbDogZmFsc2UsXG4gICAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IG5ldyBDb25uZWN0ZWRQb3NpdGlvbmluZ1N0cmF0ZWd5KCksXG4gICAgICAgIHNjcm9sbFN0cmF0ZWd5OiBuZXcgQ2xvc2VTY3JvbGxTdHJhdGVneSgpXG4gICAgfTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZXhwcmVzc2lvblVJOiBFeHByZXNzaW9uVUk7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBleHByZXNzaW9uc0xpc3Q6IEFycmF5PEV4cHJlc3Npb25VST47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBncmlkOiBhbnk7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkaXNwbGF5RGVuc2l0eTogRGlzcGxheURlbnNpdHk7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25FeHByZXNzaW9uUmVtb3ZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RXhwcmVzc2lvblVJPigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uTG9naWNPcGVyYXRvckNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElMb2dpY09wZXJhdG9yQ2hhbmdlZEFyZ3M+KCk7XG5cbiAgICBAVmlld0NoaWxkKCdpbnB1dEdyb3VwQ29uZGl0aW9ucycsIHsgcmVhZDogSWd4SW5wdXRHcm91cENvbXBvbmVudCwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGlucHV0R3JvdXBDb25kaXRpb25zOiBJZ3hJbnB1dEdyb3VwQ29tcG9uZW50O1xuXG4gICAgQFZpZXdDaGlsZCgnaW5wdXRWYWx1ZXMnLCB7IHJlYWQ6IElneElucHV0RGlyZWN0aXZlLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgaW5wdXRWYWx1ZXNEaXJlY3RpdmU6IElneElucHV0RGlyZWN0aXZlO1xuXG4gICAgQFZpZXdDaGlsZCgnZHJvcGRvd25Db25kaXRpb25zJywgeyByZWFkOiBJZ3hEcm9wRG93bkNvbXBvbmVudCwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGRyb3Bkb3duQ29uZGl0aW9uczogSWd4RHJvcERvd25Db21wb25lbnQ7XG5cbiAgICBAVmlld0NoaWxkKCdsb2dpY09wZXJhdG9yQnV0dG9uR3JvdXAnLCB7IHJlYWQ6IElneEJ1dHRvbkdyb3VwQ29tcG9uZW50LCBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHJvdGVjdGVkIGxvZ2ljT3BlcmF0b3JCdXR0b25Hcm91cDogSWd4QnV0dG9uR3JvdXBDb21wb25lbnQ7XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGlucHV0VmFsdWVzRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRWYWx1ZXNEaXJlY3RpdmU7XG4gICAgfVxuXG4gICAgZ2V0IGlzTGFzdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbnNMaXN0W3RoaXMuZXhwcmVzc2lvbnNMaXN0Lmxlbmd0aCAtIDFdID09PSB0aGlzLmV4cHJlc3Npb25VSTtcbiAgICB9XG5cbiAgICBnZXQgaXNTaW5nbGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb25zTGlzdC5sZW5ndGggPT09IDE7XG4gICAgfVxuXG4gICAgZ2V0IGlucHV0Q29uZGl0aW9uc1BsYWNlaG9sZGVyKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQucmVzb3VyY2VTdHJpbmdzWydpZ3hfZ3JpZF9maWx0ZXJfY29uZGl0aW9uX3BsYWNlaG9sZGVyJ107XG4gICAgfVxuXG4gICAgZ2V0IGlucHV0VmFsdWVQbGFjZWhvbGRlcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnJlc291cmNlU3RyaW5nc1snaWd4X2dyaWRfZmlsdGVyX3Jvd19wbGFjZWhvbGRlciddO1xuICAgIH1cblxuICAgIGdldCB0eXBlKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuY29sdW1uLmRhdGFUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIERhdGFUeXBlLk51bWJlcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ251bWJlcic7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAndGV4dCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZHJvcERvd25PdmVybGF5U2V0dGluZ3Mub3V0bGV0ID0gdGhpcy5jb2x1bW4uZ3JpZC5vdXRsZXREaXJlY3RpdmU7XG4gICAgICAgIHRoaXMuX2Ryb3BEb3duT3ZlcmxheVNldHRpbmdzLnBvc2l0aW9uU3RyYXRlZ3kuc2V0dGluZ3MudGFyZ2V0ID0gdGhpcy5pbnB1dEdyb3VwQ29uZGl0aW9ucy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGZvY3VzKCkge1xuICAgICAgICAvLyB1c2UgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHRvIGZvY3VzIHRoZSB2YWx1ZXMgaW5wdXQgYmVjYXVzZSB3aGVuIGluaXRpYWxpemluZyB0aGUgY29tcG9uZW50XG4gICAgICAgIC8vIGRhdGVwaWNrZXIncyBpbnB1dCBncm91cCBpcyBub3QgeWV0IGZ1bGx5IGluaXRpYWxpemVkXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmlucHV0VmFsdWVzRWxlbWVudC5mb2N1cygpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNDb25kaXRpb25TZWxlY3RlZChjb25kaXRpb25OYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvblVJLmV4cHJlc3Npb24uY29uZGl0aW9uICYmIHRoaXMuZXhwcmVzc2lvblVJLmV4cHJlc3Npb24uY29uZGl0aW9uLm5hbWUgPT09IGNvbmRpdGlvbk5hbWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvbmRpdGlvbk5hbWUoY29uZGl0aW9uOiBJRmlsdGVyaW5nT3BlcmF0aW9uKSB7XG4gICAgICAgIHJldHVybiBjb25kaXRpb24gPyB0aGlzLnRyYW5zbGF0ZUNvbmRpdGlvbihjb25kaXRpb24ubmFtZSkgOiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJbnB1dFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dEdyb3VwQ29uZGl0aW9ucy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggKyAncHgnO1xuICAgIH1cblxuICAgIGdldCBjb25kaXRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4uZmlsdGVycy5jb25kaXRpb25MaXN0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRyYW5zbGF0ZUNvbmRpdGlvbih2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5yZXNvdXJjZVN0cmluZ3NbYGlneF9ncmlkX2ZpbHRlcl8ke3RoaXMuZ2V0Q29uZGl0aW9uKHZhbHVlKS5uYW1lfWBdIHx8IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJY29uTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5jb2x1bW4uZGF0YVR5cGUgPT09IERhdGFUeXBlLkJvb2xlYW4gJiYgdGhpcy5leHByZXNzaW9uVUkuZXhwcmVzc2lvbi5jb25kaXRpb24gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENvbmRpdGlvbih0aGlzLmNvbmRpdGlvbnNbMF0pLmljb25OYW1lO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmV4cHJlc3Npb25VSS5leHByZXNzaW9uLmNvbmRpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuICdmaWx0ZXJfbGlzdCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uVUkuZXhwcmVzc2lvbi5jb25kaXRpb24uaWNvbk5hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlQ3VzdG9tRGlhbG9nRHJvcERvd24oKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25Db25kaXRpb25zLnRvZ2dsZSh0aGlzLl9kcm9wRG93bk92ZXJsYXlTZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvbmRpdGlvbih2YWx1ZTogc3RyaW5nKTogSUZpbHRlcmluZ09wZXJhdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbi5maWx0ZXJzLmNvbmRpdGlvbih2YWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ29uZGl0aW9uc0NoYW5nZWQoZXZlbnRBcmdzOiBhbnkpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAoZXZlbnRBcmdzLm5ld1NlbGVjdGlvbiBhcyBJZ3hEcm9wRG93bkl0ZW1Db21wb25lbnQpLnZhbHVlO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25VSS5leHByZXNzaW9uLmNvbmRpdGlvbiA9IHRoaXMuZ2V0Q29uZGl0aW9uKHZhbHVlKTtcblxuICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uVmFsdWVzSW5wdXQoZXZlbnRBcmdzKSB7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvblVJLmV4cHJlc3Npb24uc2VhcmNoVmFsID0gdGhpcy50cmFuc2Zvcm1WYWx1ZShldmVudEFyZ3MudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Mb2dpY09wZXJhdG9yQnV0dG9uQ2xpY2tlZChldmVudEFyZ3MsIGJ1dHRvbkluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMubG9naWNPcGVyYXRvckJ1dHRvbkdyb3VwLnNlbGVjdGVkQnV0dG9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGV2ZW50QXJncy5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMubG9naWNPcGVyYXRvckJ1dHRvbkdyb3VwLnNlbGVjdEJ1dHRvbihidXR0b25JbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uTG9naWNPcGVyYXRvckNoYW5nZWQuZW1pdCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmV4cHJlc3Npb25VSSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogYnV0dG9uSW5kZXggYXMgRmlsdGVyaW5nTG9naWNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uTG9naWNPcGVyYXRvcktleURvd24oZXZlbnRBcmdzLCBidXR0b25JbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChldmVudEFyZ3Mua2V5ID09PSBLRVlTLkVOVEVSKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2ljT3BlcmF0b3JCdXR0b25Hcm91cC5zZWxlY3RCdXR0b24oYnV0dG9uSW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5vbkxvZ2ljT3BlcmF0b3JDaGFuZ2VkLmVtaXQoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy5leHByZXNzaW9uVUksXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IGJ1dHRvbkluZGV4IGFzIEZpbHRlcmluZ0xvZ2ljXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblJlbW92ZUJ1dHRvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLm9uRXhwcmVzc2lvblJlbW92ZWQuZW1pdCh0aGlzLmV4cHJlc3Npb25VSSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uSW5wdXRDb25kaXRpb25zS2V5RG93bihldmVudEFyZ3MpIHtcbiAgICAgICAgaWYgKGV2ZW50QXJncy5hbHRLZXkgJiYgKGV2ZW50QXJncy5rZXkgPT09IEtFWVMuRE9XTl9BUlJPVyB8fCBldmVudEFyZ3Mua2V5ID09PSBLRVlTLkRPV05fQVJST1dfSUUpKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUN1c3RvbURpYWxvZ0Ryb3BEb3duKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnRBcmdzLmtleSA9PT0gS0VZUy5UQUIgJiYgZXZlbnRBcmdzLnNoaWZ0S2V5ICYmIHRoaXMuZXhwcmVzc2lvbnNMaXN0WzBdID09PSB0aGlzLmV4cHJlc3Npb25VSSkge1xuICAgICAgICAgICAgZXZlbnRBcmdzLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRyYW5zZm9ybVZhbHVlKHZhbHVlKTogYW55IHtcbiAgICAgICAgaWYgKHRoaXMuY29sdW1uLmRhdGFUeXBlID09PSBEYXRhVHlwZS5OdW1iZXIpIHtcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb2x1bW4uZGF0YVR5cGUgPT09IERhdGFUeXBlLkJvb2xlYW4pIHtcbiAgICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufVxuIl19