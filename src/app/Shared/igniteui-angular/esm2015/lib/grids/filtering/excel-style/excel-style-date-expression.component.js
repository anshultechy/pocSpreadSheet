/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ViewChild, Input } from '@angular/core';
import { IgxExcelStyleDefaultExpressionComponent } from './excel-style-default-expression.component';
import { IgxDatePickerComponent } from '../../../date-picker/date-picker.component';
import { DisplayDensity } from '../../../core/density';
/**
 * @hidden
 */
export class IgxExcelStyleDateExpressionComponent extends IgxExcelStyleDefaultExpressionComponent {
    /**
     * @protected
     * @return {?}
     */
    get inputValuesElement() {
        return this.datePicker.getEditElement();
    }
    /**
     * @return {?}
     */
    get inputDatePlaceholder() {
        return this.grid.resourceStrings['igx_grid_filter_row_date_placeholder'];
    }
}
IgxExcelStyleDateExpressionComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'igx-excel-style-date-expression',
                template: "<igx-drop-down\n    #dropdownConditions\n    [maxHeight]=\"'200px'\"\n    [width]=\"getInputWidth()\"\n    (onSelection)=\"onConditionsChanged($event)\">\n    <igx-drop-down-item *ngFor=\"let condition of conditions\" [value]=\"condition\" [selected]=\"isConditionSelected(condition)\">\n        <igx-icon fontSet=\"filtering-icons\" [name]=\"getCondition(condition).iconName\"></igx-icon>\n        <span>{{ translateCondition(condition) }}</span>\n    </igx-drop-down-item>\n</igx-drop-down>\n\n<igx-input-group\n    #inputGroupConditions\n    (click)=\"toggleCustomDialogDropDown()\"\n    type=\"box\"\n    [displayDensity]=\"displayDensity\"\n    [supressInputAutofocus]=\"true\">\n\n    <igx-prefix>\n        <igx-icon *ngIf=\"expressionUI.expression.condition\" fontSet=\"filtering-icons\" [name]=\"getIconName()\"></igx-icon>\n        <igx-icon *ngIf=\"!expressionUI.expression.condition\">filter_list</igx-icon>\n    </igx-prefix>\n\n    <input\n        igxInput\n        (keydown)=\"onInputConditionsKeyDown($event)\"\n        tabindex=\"0\"\n        [igxDropDownItemNavigation]=\"dropdownConditions\"\n        [placeholder]=\"inputConditionsPlaceholder\"\n        autocomplete=\"off\"\n        [value]=\"getConditionName(expressionUI.expression.condition)\"\n        [readonly]=\"true\"\n    />\n</igx-input-group>\n\n<igx-date-picker #datePicker mode=\"dropdown\" [(ngModel)]=\"expressionUI.expression.searchVal\" [locale]=\"grid.locale\" [outlet]=\"grid.outletDirective\">\n    <ng-template igxDatePickerTemplate let-openDialog=\"openDialog\" let-value=\"value\">\n        <igx-input-group #dropDownTarget type=\"box\" [displayDensity]=\"displayDensity\" [supressInputAutofocus]=\"true\">\n            <input #input\n                    igxInput\n                    tabindex=\"0\"\n                    (click)=\"openDialog(dropDownTarget.element.nativeElement)\"\n                    [placeholder]=\"inputDatePlaceholder\"\n                    autocomplete=\"off\"\n                    [value]=\"value | igxdate: grid.locale\"\n                    [readonly]=\"true\"\n                    [disabled]=\"expressionUI.expression.condition && expressionUI.expression.condition.isUnary\"/>\n        </igx-input-group>\n    </ng-template>\n</igx-date-picker>\n\n<button (click)=\"onRemoveButtonClick()\" igxButton=\"icon\" [displayDensity]=\"displayDensity\" *ngIf=\"!isSingle\" >\n    <igx-icon>cancel</igx-icon>\n</button>\n\n<igx-buttongroup #logicOperatorButtonGroup\n    *ngIf=\"!isLast\"\n    [multiSelection]=\"false\">\n    <span igxButton [displayDensity]=\"displayDensity\"\n        #andButton\n        (keydown)=\"onLogicOperatorKeyDown($event, 0)\"\n        tabindex=\"0\"\n        [selected]=\"expressionUI.afterOperator === 0\"\n        type=\"button\"\n        (click)=\"onLogicOperatorButtonClicked($event, 0)\">\n        {{ grid.resourceStrings.igx_grid_filter_operator_and }}\n    </span>\n\n    <span igxButton [displayDensity]=\"displayDensity\"\n        #orButton\n        tabindex=\"0\"\n        (keydown)=\"onLogicOperatorKeyDown($event, 1)\"\n        [selected]=\"expressionUI.afterOperator === 1\"\n        type=\"button\"\n        (click)=\"onLogicOperatorButtonClicked($event, 1)\">\n        {{ grid.resourceStrings.igx_grid_filter_operator_or }}\n    </span>\n</igx-buttongroup>\n"
            }] }
];
IgxExcelStyleDateExpressionComponent.propDecorators = {
    datePicker: [{ type: ViewChild, args: ['datePicker', { read: IgxDatePickerComponent, static: true },] }],
    displayDensity: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxExcelStyleDateExpressionComponent.prototype.datePicker;
    /** @type {?} */
    IgxExcelStyleDateExpressionComponent.prototype.displayDensity;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtc3R5bGUtZGF0ZS1leHByZXNzaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvZmlsdGVyaW5nL2V4Y2VsLXN0eWxlL2V4Y2VsLXN0eWxlLWRhdGUtZXhwcmVzc2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDckcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDcEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBV3ZELE1BQU0sT0FBTyxvQ0FBcUMsU0FBUSx1Q0FBdUM7Ozs7O0lBSzdGLElBQWMsa0JBQWtCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUM1QyxDQUFDOzs7O0lBS0QsSUFBSSxvQkFBb0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBQzdFLENBQUM7OztZQXBCSixTQUFTLFNBQUM7Z0JBQ1AsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFFBQVEsRUFBRSxpQ0FBaUM7Z0JBQzNDLDh2R0FBMkQ7YUFDOUQ7Ozt5QkFHSSxTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NkJBT3RFLEtBQUs7Ozs7Ozs7SUFQTiwwREFDMkM7O0lBTTNDLDhEQUNzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIFZpZXdDaGlsZCxcbiAgICBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneEV4Y2VsU3R5bGVEZWZhdWx0RXhwcmVzc2lvbkNvbXBvbmVudCB9IGZyb20gJy4vZXhjZWwtc3R5bGUtZGVmYXVsdC1leHByZXNzaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERpc3BsYXlEZW5zaXR5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kZW5zaXR5JztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICAgIHNlbGVjdG9yOiAnaWd4LWV4Y2VsLXN0eWxlLWRhdGUtZXhwcmVzc2lvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2V4Y2VsLXN0eWxlLWRhdGUtZXhwcmVzc2lvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4RXhjZWxTdHlsZURhdGVFeHByZXNzaW9uQ29tcG9uZW50IGV4dGVuZHMgSWd4RXhjZWxTdHlsZURlZmF1bHRFeHByZXNzaW9uQ29tcG9uZW50IHtcblxuICAgIEBWaWV3Q2hpbGQoJ2RhdGVQaWNrZXInLCB7IHJlYWQ6IElneERhdGVQaWNrZXJDb21wb25lbnQsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByaXZhdGUgZGF0ZVBpY2tlcjogSWd4RGF0ZVBpY2tlckNvbXBvbmVudDtcblxuICAgIHByb3RlY3RlZCBnZXQgaW5wdXRWYWx1ZXNFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlUGlja2VyLmdldEVkaXRFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGlzcGxheURlbnNpdHk6IERpc3BsYXlEZW5zaXR5O1xuXG4gICAgZ2V0IGlucHV0RGF0ZVBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQucmVzb3VyY2VTdHJpbmdzWydpZ3hfZ3JpZF9maWx0ZXJfcm93X2RhdGVfcGxhY2Vob2xkZXInXTtcbiAgICB9XG59XG4iXX0=