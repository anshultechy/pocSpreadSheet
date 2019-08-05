/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, ViewChild, Input } from '@angular/core';
import { IgxExcelStyleDefaultExpressionComponent } from './excel-style-default-expression.component';
import { IgxDatePickerComponent } from '../../../date-picker/date-picker.component';
import { DisplayDensity } from '../../../core/density';
/**
 * @hidden
 */
var IgxExcelStyleDateExpressionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxExcelStyleDateExpressionComponent, _super);
    function IgxExcelStyleDateExpressionComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(IgxExcelStyleDateExpressionComponent.prototype, "inputValuesElement", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.datePicker.getEditElement();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxExcelStyleDateExpressionComponent.prototype, "inputDatePlaceholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this.grid.resourceStrings['igx_grid_filter_row_date_placeholder'];
        },
        enumerable: true,
        configurable: true
    });
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
    return IgxExcelStyleDateExpressionComponent;
}(IgxExcelStyleDefaultExpressionComponent));
export { IgxExcelStyleDateExpressionComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxExcelStyleDateExpressionComponent.prototype.datePicker;
    /** @type {?} */
    IgxExcelStyleDateExpressionComponent.prototype.displayDensity;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtc3R5bGUtZGF0ZS1leHByZXNzaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvZmlsdGVyaW5nL2V4Y2VsLXN0eWxlL2V4Y2VsLXN0eWxlLWRhdGUtZXhwcmVzc2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUNSLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUt2RDtJQU0wRCxnRUFBdUM7SUFOakc7O0lBcUJBLENBQUM7SUFWRyxzQkFBYyxvRUFBa0I7Ozs7O1FBQWhDO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzVDLENBQUM7OztPQUFBO0lBS0Qsc0JBQUksc0VBQW9COzs7O1FBQXhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQzdFLENBQUM7OztPQUFBOztnQkFwQkosU0FBUyxTQUFDO29CQUNQLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixRQUFRLEVBQUUsaUNBQWlDO29CQUMzQyw4dkdBQTJEO2lCQUM5RDs7OzZCQUdJLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtpQ0FPdEUsS0FBSzs7SUFNViwyQ0FBQztDQUFBLEFBckJELENBTTBELHVDQUF1QyxHQWVoRztTQWZZLG9DQUFvQzs7Ozs7O0lBRTdDLDBEQUMyQzs7SUFNM0MsOERBQ3NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgVmlld0NoaWxkLFxuICAgIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4RXhjZWxTdHlsZURlZmF1bHRFeHByZXNzaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9leGNlbC1zdHlsZS1kZWZhdWx0LWV4cHJlc3Npb24uY29tcG9uZW50JztcbmltcG9ydCB7IElneERhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlzcGxheURlbnNpdHkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RlbnNpdHknO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gICAgc2VsZWN0b3I6ICdpZ3gtZXhjZWwtc3R5bGUtZGF0ZS1leHByZXNzaW9uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZXhjZWwtc3R5bGUtZGF0ZS1leHByZXNzaW9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hFeGNlbFN0eWxlRGF0ZUV4cHJlc3Npb25Db21wb25lbnQgZXh0ZW5kcyBJZ3hFeGNlbFN0eWxlRGVmYXVsdEV4cHJlc3Npb25Db21wb25lbnQge1xuXG4gICAgQFZpZXdDaGlsZCgnZGF0ZVBpY2tlcicsIHsgcmVhZDogSWd4RGF0ZVBpY2tlckNvbXBvbmVudCwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBkYXRlUGlja2VyOiBJZ3hEYXRlUGlja2VyQ29tcG9uZW50O1xuXG4gICAgcHJvdGVjdGVkIGdldCBpbnB1dFZhbHVlc0VsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVQaWNrZXIuZ2V0RWRpdEVsZW1lbnQoKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkaXNwbGF5RGVuc2l0eTogRGlzcGxheURlbnNpdHk7XG5cbiAgICBnZXQgaW5wdXREYXRlUGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5yZXNvdXJjZVN0cmluZ3NbJ2lneF9ncmlkX2ZpbHRlcl9yb3dfZGF0ZV9wbGFjZWhvbGRlciddO1xuICAgIH1cbn1cbiJdfQ==