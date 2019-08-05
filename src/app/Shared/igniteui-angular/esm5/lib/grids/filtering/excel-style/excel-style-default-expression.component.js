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
var IgxExcelStyleDefaultExpressionComponent = /** @class */ (function () {
    function IgxExcelStyleDefaultExpressionComponent(cdr) {
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
    Object.defineProperty(IgxExcelStyleDefaultExpressionComponent.prototype, "inputValuesElement", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.inputValuesDirective;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxExcelStyleDefaultExpressionComponent.prototype, "isLast", {
        get: /**
         * @return {?}
         */
        function () {
            return this.expressionsList[this.expressionsList.length - 1] === this.expressionUI;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxExcelStyleDefaultExpressionComponent.prototype, "isSingle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.expressionsList.length === 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxExcelStyleDefaultExpressionComponent.prototype, "inputConditionsPlaceholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this.grid.resourceStrings['igx_grid_filter_condition_placeholder'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxExcelStyleDefaultExpressionComponent.prototype, "inputValuePlaceholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this.grid.resourceStrings['igx_grid_filter_row_placeholder'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxExcelStyleDefaultExpressionComponent.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            switch (this.column.dataType) {
                case DataType.Number:
                    return 'number';
                default:
                    return 'text';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IgxExcelStyleDefaultExpressionComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._dropDownOverlaySettings.outlet = this.column.grid.outletDirective;
        this._dropDownOverlaySettings.positionStrategy.settings.target = this.inputGroupConditions.element.nativeElement;
    };
    /**
     * @return {?}
     */
    IgxExcelStyleDefaultExpressionComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // use requestAnimationFrame to focus the values input because when initializing the component
        // datepicker's input group is not yet fully initialized
        requestAnimationFrame(function () { return _this.inputValuesElement.focus(); });
    };
    /**
     * @param {?} conditionName
     * @return {?}
     */
    IgxExcelStyleDefaultExpressionComponent.prototype.isConditionSelected = /**
     * @param {?} conditionName
     * @return {?}
     */
    function (conditionName) {
        return this.expressionUI.expression.condition && this.expressionUI.expression.condition.name === conditionName;
    };
    /**
     * @param {?} condition
     * @return {?}
     */
    IgxExcelStyleDefaultExpressionComponent.prototype.getConditionName = /**
     * @param {?} condition
     * @return {?}
     */
    function (condition) {
        return condition ? this.translateCondition(condition.name) : null;
    };
    /**
     * @return {?}
     */
    IgxExcelStyleDefaultExpressionComponent.prototype.getInputWidth = /**
     * @return {?}
     */
    function () {
        return this.inputGroupConditions.element.nativeElement.offsetWidth + 'px';
    };
    Object.defineProperty(IgxExcelStyleDefaultExpressionComponent.prototype, "conditions", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.filters.conditionList();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    IgxExcelStyleDefaultExpressionComponent.prototype.translateCondition = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.grid.resourceStrings["igx_grid_filter_" + this.getCondition(value).name] || value;
    };
    /**
     * @return {?}
     */
    IgxExcelStyleDefaultExpressionComponent.prototype.getIconName = /**
     * @return {?}
     */
    function () {
        if (this.column.dataType === DataType.Boolean && this.expressionUI.expression.condition === null) {
            return this.getCondition(this.conditions[0]).iconName;
        }
        else if (!this.expressionUI.expression.condition) {
            return 'filter_list';
        }
        else {
            return this.expressionUI.expression.condition.iconName;
        }
    };
    /**
     * @return {?}
     */
    IgxExcelStyleDefaultExpressionComponent.prototype.toggleCustomDialogDropDown = /**
     * @return {?}
     */
    function () {
        this.dropdownConditions.toggle(this._dropDownOverlaySettings);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    IgxExcelStyleDefaultExpressionComponent.prototype.getCondition = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.column.filters.condition(value);
    };
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    IgxExcelStyleDefaultExpressionComponent.prototype.onConditionsChanged = /**
     * @param {?} eventArgs
     * @return {?}
     */
    function (eventArgs) {
        /** @type {?} */
        var value = ((/** @type {?} */ (eventArgs.newSelection))).value;
        this.expressionUI.expression.condition = this.getCondition(value);
        this.focus();
    };
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    IgxExcelStyleDefaultExpressionComponent.prototype.onValuesInput = /**
     * @param {?} eventArgs
     * @return {?}
     */
    function (eventArgs) {
        this.expressionUI.expression.searchVal = this.transformValue(eventArgs.target.value);
    };
    /**
     * @param {?} eventArgs
     * @param {?} buttonIndex
     * @return {?}
     */
    IgxExcelStyleDefaultExpressionComponent.prototype.onLogicOperatorButtonClicked = /**
     * @param {?} eventArgs
     * @param {?} buttonIndex
     * @return {?}
     */
    function (eventArgs, buttonIndex) {
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
    };
    /**
     * @param {?} eventArgs
     * @param {?} buttonIndex
     * @return {?}
     */
    IgxExcelStyleDefaultExpressionComponent.prototype.onLogicOperatorKeyDown = /**
     * @param {?} eventArgs
     * @param {?} buttonIndex
     * @return {?}
     */
    function (eventArgs, buttonIndex) {
        if (eventArgs.key === "Enter" /* ENTER */) {
            this.logicOperatorButtonGroup.selectButton(buttonIndex);
            this.onLogicOperatorChanged.emit({
                target: this.expressionUI,
                newValue: (/** @type {?} */ (buttonIndex))
            });
        }
    };
    /**
     * @return {?}
     */
    IgxExcelStyleDefaultExpressionComponent.prototype.onRemoveButtonClick = /**
     * @return {?}
     */
    function () {
        this.onExpressionRemoved.emit(this.expressionUI);
    };
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    IgxExcelStyleDefaultExpressionComponent.prototype.onInputConditionsKeyDown = /**
     * @param {?} eventArgs
     * @return {?}
     */
    function (eventArgs) {
        if (eventArgs.altKey && (eventArgs.key === "ArrowDown" /* DOWN_ARROW */ || eventArgs.key === "Down" /* DOWN_ARROW_IE */)) {
            this.toggleCustomDialogDropDown();
        }
        if (eventArgs.key === "Tab" /* TAB */ && eventArgs.shiftKey && this.expressionsList[0] === this.expressionUI) {
            eventArgs.preventDefault();
        }
        event.stopPropagation();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    IgxExcelStyleDefaultExpressionComponent.prototype.transformValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.column.dataType === DataType.Number) {
            value = parseFloat(value);
        }
        else if (this.column.dataType === DataType.Boolean) {
            value = Boolean(value);
        }
        return value;
    };
    IgxExcelStyleDefaultExpressionComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    selector: 'igx-excel-style-default-expression',
                    template: "<igx-drop-down\n    #dropdownConditions\n    [maxHeight]=\"'200px'\"\n    [width]=\"getInputWidth()\"\n    (onSelection)=\"onConditionsChanged($event)\">\n    <igx-drop-down-item *ngFor=\"let condition of conditions\" [value]=\"condition\" [selected]=\"isConditionSelected(condition)\">\n        <igx-icon fontSet=\"filtering-icons\" [name]=\"getCondition(condition).iconName\"></igx-icon>\n        <span>{{ translateCondition(condition) }}</span>\n    </igx-drop-down-item>\n</igx-drop-down>\n\n<igx-input-group\n    #inputGroupConditions\n    (click)=\"toggleCustomDialogDropDown()\"\n    type=\"box\"\n    [displayDensity]=\"displayDensity\"\n    [supressInputAutofocus]=\"true\">\n\n    <igx-prefix>\n        <igx-icon *ngIf=\"expressionUI.expression.condition\" fontSet=\"filtering-icons\" [name]=\"getIconName()\"></igx-icon>\n        <igx-icon *ngIf=\"!expressionUI.expression.condition\">filter_list</igx-icon>\n    </igx-prefix>\n\n    <input\n        igxInput\n        (keydown)=\"onInputConditionsKeyDown($event)\"\n        [igxDropDownItemNavigation]=\"dropdownConditions\"\n        tabindex=\"0\"\n        [placeholder]=\"inputConditionsPlaceholder\"\n        autocomplete=\"off\"\n        [value]=\"getConditionName(expressionUI.expression.condition)\"\n        [readonly]=\"true\"\n    />\n</igx-input-group>\n\n<igx-input-group #inputGroupValues type=\"box\" [displayDensity]=\"displayDensity\" [supressInputAutofocus]=\"true\">\n    <input\n        #inputValues\n        igxInput\n        [type]=\"type\"\n        tabindex=\"0\"\n        [placeholder]=\"inputValuePlaceholder\"\n        [disabled]=\"expressionUI.expression.condition && expressionUI.expression.condition.isUnary\"\n        autocomplete=\"off\"\n        [value]=\"expressionUI.expression.searchVal\"\n        (input)=\"onValuesInput($event)\"\n    />\n</igx-input-group>\n\n<button (click)=\"onRemoveButtonClick()\" igxButton=\"icon\" [displayDensity]=\"displayDensity\" *ngIf=\"!isSingle\">\n    <igx-icon>cancel</igx-icon>\n</button>\n\n<igx-buttongroup #logicOperatorButtonGroup\n    *ngIf=\"!isLast\"\n    [multiSelection]=\"false\">\n    <span igxButton [displayDensity]=\"displayDensity\"\n        tabindex=\"0\"\n        #andButton\n        (keydown)=\"onLogicOperatorKeyDown($event, 0)\"\n        [selected]=\"expressionUI.afterOperator === 0\"\n        type=\"button\"\n        (click)=\"onLogicOperatorButtonClicked($event, 0)\">\n        {{ grid.resourceStrings.igx_grid_filter_operator_and }}\n    </span>\n\n    <span igxButton [displayDensity]=\"displayDensity\"\n        tabindex=\"0\"\n        #orButton\n        (keydown)=\"onLogicOperatorKeyDown($event, 1)\"\n        [selected]=\"expressionUI.afterOperator === 1\"\n        type=\"button\"\n        (click)=\"onLogicOperatorButtonClicked($event, 1)\">\n        {{ grid.resourceStrings.igx_grid_filter_operator_or }}\n    </span>\n</igx-buttongroup>\n"
                }] }
    ];
    /** @nocollapse */
    IgxExcelStyleDefaultExpressionComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
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
    return IgxExcelStyleDefaultExpressionComponent;
}());
export { IgxExcelStyleDefaultExpressionComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtc3R5bGUtZGVmYXVsdC1leHByZXNzaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvZmlsdGVyaW5nL2V4Y2VsLXN0eWxlL2V4Y2VsLXN0eWxlLWRlZmF1bHQtZXhwcmVzc2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsdUJBQXVCLEVBRXZCLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLGlCQUFpQixFQUNqQixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3JGLE9BQU8sRUFBNEIsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFOUQsT0FBTyxFQUFtQiw0QkFBNEIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRzdHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFLdkQsK0NBR0M7OztJQUZHLDJDQUFxQjs7SUFDckIsNkNBQXlCOzs7OztBQU03QjtJQTZFSSxpREFBbUIsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFyRWpDLDZCQUF3QixHQUFvQjtZQUNoRCxtQkFBbUIsRUFBRSxJQUFJO1lBQ3pCLEtBQUssRUFBRSxLQUFLO1lBQ1osZ0JBQWdCLEVBQUUsSUFBSSw0QkFBNEIs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LEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtxQ0FHbEUsU0FBUyxTQUFDLG9CQUFvQixFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkNBRzVFLFNBQVMsU0FBQywwQkFBMEIsRUFBRSxFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQTZJM0YsOENBQUM7Q0FBQSxBQTFMRCxJQTBMQztTQXBMWSx1Q0FBdUM7Ozs7OztJQUVoRCwyRUFLRTs7SUFFRix5REFDa0M7O0lBRWxDLCtEQUNrQzs7SUFFbEMsa0VBQzRDOztJQUU1Qyx1REFDaUI7O0lBRWpCLGlFQUNzQzs7SUFFdEMsc0VBQzhEOztJQUU5RCx5RUFDOEU7Ozs7O0lBRTlFLHVFQUN1RDs7Ozs7SUFFdkQsdUVBQ2tEOzs7OztJQUVsRCxxRUFDbUQ7Ozs7O0lBRW5ELDJFQUM0RDs7SUErQmhELHNEQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIEFmdGVyVmlld0luaXQsXG4gICAgSW5wdXQsXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi8uLi9jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IEV4cHJlc3Npb25VSSB9IGZyb20gJy4uL2dyaWQtZmlsdGVyaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4QnV0dG9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9idXR0b25Hcm91cC9idXR0b25Hcm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4RHJvcERvd25JdGVtQ29tcG9uZW50LCBJZ3hEcm9wRG93bkNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2Ryb3AtZG93bi9pbmRleCc7XG5pbXBvcnQgeyBJZ3hJbnB1dEdyb3VwQ29tcG9uZW50LCBJZ3hJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uLy4uL2lucHV0LWdyb3VwL2luZGV4JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1vcGVyYXRpb25zL2RhdGEtdXRpbCc7XG5pbXBvcnQgeyBJRmlsdGVyaW5nT3BlcmF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1jb25kaXRpb24nO1xuaW1wb3J0IHsgT3ZlcmxheVNldHRpbmdzLCBDb25uZWN0ZWRQb3NpdGlvbmluZ1N0cmF0ZWd5LCBDbG9zZVNjcm9sbFN0cmF0ZWd5IH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgRmlsdGVyaW5nTG9naWMgfSBmcm9tICcuLi8uLi8uLi9kYXRhLW9wZXJhdGlvbnMvZmlsdGVyaW5nLWV4cHJlc3Npb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IERpc3BsYXlEZW5zaXR5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kZW5zaXR5JztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUxvZ2ljT3BlcmF0b3JDaGFuZ2VkQXJncyB7XG4gICAgdGFyZ2V0OiBFeHByZXNzaW9uVUk7XG4gICAgbmV3VmFsdWU6IEZpbHRlcmluZ0xvZ2ljO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gICAgc2VsZWN0b3I6ICdpZ3gtZXhjZWwtc3R5bGUtZGVmYXVsdC1leHByZXNzaW9uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZXhjZWwtc3R5bGUtZGVmYXVsdC1leHByZXNzaW9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hFeGNlbFN0eWxlRGVmYXVsdEV4cHJlc3Npb25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICAgIHByaXZhdGUgX2Ryb3BEb3duT3ZlcmxheVNldHRpbmdzOiBPdmVybGF5U2V0dGluZ3MgPSB7XG4gICAgICAgIGNsb3NlT25PdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgICAgIG1vZGFsOiBmYWxzZSxcbiAgICAgICAgcG9zaXRpb25TdHJhdGVneTogbmV3IENvbm5lY3RlZFBvc2l0aW9uaW5nU3RyYXRlZ3koKSxcbiAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IG5ldyBDbG9zZVNjcm9sbFN0cmF0ZWd5KClcbiAgICB9O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29sdW1uOiBJZ3hDb2x1bW5Db21wb25lbnQ7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBleHByZXNzaW9uVUk6IEV4cHJlc3Npb25VSTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGV4cHJlc3Npb25zTGlzdDogQXJyYXk8RXhwcmVzc2lvblVJPjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdyaWQ6IGFueTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGRpc3BsYXlEZW5zaXR5OiBEaXNwbGF5RGVuc2l0eTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkV4cHJlc3Npb25SZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxFeHByZXNzaW9uVUk+KCk7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25Mb2dpY09wZXJhdG9yQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SUxvZ2ljT3BlcmF0b3JDaGFuZ2VkQXJncz4oKTtcblxuICAgIEBWaWV3Q2hpbGQoJ2lucHV0R3JvdXBDb25kaXRpb25zJywgeyByZWFkOiBJZ3hJbnB1dEdyb3VwQ29tcG9uZW50LCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgaW5wdXRHcm91cENvbmRpdGlvbnM6IElneElucHV0R3JvdXBDb21wb25lbnQ7XG5cbiAgICBAVmlld0NoaWxkKCdpbnB1dFZhbHVlcycsIHsgcmVhZDogSWd4SW5wdXREaXJlY3RpdmUsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCBpbnB1dFZhbHVlc0RpcmVjdGl2ZTogSWd4SW5wdXREaXJlY3RpdmU7XG5cbiAgICBAVmlld0NoaWxkKCdkcm9wZG93bkNvbmRpdGlvbnMnLCB7IHJlYWQ6IElneERyb3BEb3duQ29tcG9uZW50LCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgZHJvcGRvd25Db25kaXRpb25zOiBJZ3hEcm9wRG93bkNvbXBvbmVudDtcblxuICAgIEBWaWV3Q2hpbGQoJ2xvZ2ljT3BlcmF0b3JCdXR0b25Hcm91cCcsIHsgcmVhZDogSWd4QnV0dG9uR3JvdXBDb21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcm90ZWN0ZWQgbG9naWNPcGVyYXRvckJ1dHRvbkdyb3VwOiBJZ3hCdXR0b25Hcm91cENvbXBvbmVudDtcblxuICAgIHByb3RlY3RlZCBnZXQgaW5wdXRWYWx1ZXNFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dFZhbHVlc0RpcmVjdGl2ZTtcbiAgICB9XG5cbiAgICBnZXQgaXNMYXN0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uc0xpc3RbdGhpcy5leHByZXNzaW9uc0xpc3QubGVuZ3RoIC0gMV0gPT09IHRoaXMuZXhwcmVzc2lvblVJO1xuICAgIH1cblxuICAgIGdldCBpc1NpbmdsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbnNMaXN0Lmxlbmd0aCA9PT0gMTtcbiAgICB9XG5cbiAgICBnZXQgaW5wdXRDb25kaXRpb25zUGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5yZXNvdXJjZVN0cmluZ3NbJ2lneF9ncmlkX2ZpbHRlcl9jb25kaXRpb25fcGxhY2Vob2xkZXInXTtcbiAgICB9XG5cbiAgICBnZXQgaW5wdXRWYWx1ZVBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQucmVzb3VyY2VTdHJpbmdzWydpZ3hfZ3JpZF9maWx0ZXJfcm93X3BsYWNlaG9sZGVyJ107XG4gICAgfVxuXG4gICAgZ2V0IHR5cGUoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5jb2x1bW4uZGF0YVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuTnVtYmVyOlxuICAgICAgICAgICAgICAgIHJldHVybiAnbnVtYmVyJztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICd0ZXh0JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9kcm9wRG93bk92ZXJsYXlTZXR0aW5ncy5vdXRsZXQgPSB0aGlzLmNvbHVtbi5ncmlkLm91dGxldERpcmVjdGl2ZTtcbiAgICAgICAgdGhpcy5fZHJvcERvd25PdmVybGF5U2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5zZXR0aW5ncy50YXJnZXQgPSB0aGlzLmlucHV0R3JvdXBDb25kaXRpb25zLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZm9jdXMoKSB7XG4gICAgICAgIC8vIHVzZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgdG8gZm9jdXMgdGhlIHZhbHVlcyBpbnB1dCBiZWNhdXNlIHdoZW4gaW5pdGlhbGl6aW5nIHRoZSBjb21wb25lbnRcbiAgICAgICAgLy8gZGF0ZXBpY2tlcidzIGlucHV0IGdyb3VwIGlzIG5vdCB5ZXQgZnVsbHkgaW5pdGlhbGl6ZWRcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuaW5wdXRWYWx1ZXNFbGVtZW50LmZvY3VzKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0NvbmRpdGlvblNlbGVjdGVkKGNvbmRpdGlvbk5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uVUkuZXhwcmVzc2lvbi5jb25kaXRpb24gJiYgdGhpcy5leHByZXNzaW9uVUkuZXhwcmVzc2lvbi5jb25kaXRpb24ubmFtZSA9PT0gY29uZGl0aW9uTmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29uZGl0aW9uTmFtZShjb25kaXRpb246IElGaWx0ZXJpbmdPcGVyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGNvbmRpdGlvbiA/IHRoaXMudHJhbnNsYXRlQ29uZGl0aW9uKGNvbmRpdGlvbi5uYW1lKSA6IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldElucHV0V2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0R3JvdXBDb25kaXRpb25zLmVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCArICdweCc7XG4gICAgfVxuXG4gICAgZ2V0IGNvbmRpdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbi5maWx0ZXJzLmNvbmRpdGlvbkxpc3QoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdHJhbnNsYXRlQ29uZGl0aW9uKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnJlc291cmNlU3RyaW5nc1tgaWd4X2dyaWRfZmlsdGVyXyR7dGhpcy5nZXRDb25kaXRpb24odmFsdWUpLm5hbWV9YF0gfHwgdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEljb25OYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmNvbHVtbi5kYXRhVHlwZSA9PT0gRGF0YVR5cGUuQm9vbGVhbiAmJiB0aGlzLmV4cHJlc3Npb25VSS5leHByZXNzaW9uLmNvbmRpdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29uZGl0aW9uKHRoaXMuY29uZGl0aW9uc1swXSkuaWNvbk5hbWU7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZXhwcmVzc2lvblVJLmV4cHJlc3Npb24uY29uZGl0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2ZpbHRlcl9saXN0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb25VSS5leHByZXNzaW9uLmNvbmRpdGlvbi5pY29uTmFtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVDdXN0b21EaWFsb2dEcm9wRG93bigpIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bkNvbmRpdGlvbnMudG9nZ2xlKHRoaXMuX2Ryb3BEb3duT3ZlcmxheVNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29uZGl0aW9uKHZhbHVlOiBzdHJpbmcpOiBJRmlsdGVyaW5nT3BlcmF0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLmZpbHRlcnMuY29uZGl0aW9uKHZhbHVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Db25kaXRpb25zQ2hhbmdlZChldmVudEFyZ3M6IGFueSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IChldmVudEFyZ3MubmV3U2VsZWN0aW9uIGFzIElneERyb3BEb3duSXRlbUNvbXBvbmVudCkudmFsdWU7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvblVJLmV4cHJlc3Npb24uY29uZGl0aW9uID0gdGhpcy5nZXRDb25kaXRpb24odmFsdWUpO1xuXG4gICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25WYWx1ZXNJbnB1dChldmVudEFyZ3MpIHtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uVUkuZXhwcmVzc2lvbi5zZWFyY2hWYWwgPSB0aGlzLnRyYW5zZm9ybVZhbHVlKGV2ZW50QXJncy50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxvZ2ljT3BlcmF0b3JCdXR0b25DbGlja2VkKGV2ZW50QXJncywgYnV0dG9uSW5kZXg6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5sb2dpY09wZXJhdG9yQnV0dG9uR3JvdXAuc2VsZWN0ZWRCdXR0b25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZXZlbnRBcmdzLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5sb2dpY09wZXJhdG9yQnV0dG9uR3JvdXAuc2VsZWN0QnV0dG9uKGJ1dHRvbkluZGV4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Mb2dpY09wZXJhdG9yQ2hhbmdlZC5lbWl0KHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuZXhwcmVzc2lvblVJLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBidXR0b25JbmRleCBhcyBGaWx0ZXJpbmdMb2dpY1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25Mb2dpY09wZXJhdG9yS2V5RG93bihldmVudEFyZ3MsIGJ1dHRvbkluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGV2ZW50QXJncy5rZXkgPT09IEtFWVMuRU5URVIpIHtcbiAgICAgICAgICAgIHRoaXMubG9naWNPcGVyYXRvckJ1dHRvbkdyb3VwLnNlbGVjdEJ1dHRvbihidXR0b25JbmRleCk7XG4gICAgICAgICAgICB0aGlzLm9uTG9naWNPcGVyYXRvckNoYW5nZWQuZW1pdCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmV4cHJlc3Npb25VSSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogYnV0dG9uSW5kZXggYXMgRmlsdGVyaW5nTG9naWNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmVtb3ZlQnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMub25FeHByZXNzaW9uUmVtb3ZlZC5lbWl0KHRoaXMuZXhwcmVzc2lvblVJKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JbnB1dENvbmRpdGlvbnNLZXlEb3duKGV2ZW50QXJncykge1xuICAgICAgICBpZiAoZXZlbnRBcmdzLmFsdEtleSAmJiAoZXZlbnRBcmdzLmtleSA9PT0gS0VZUy5ET1dOX0FSUk9XIHx8IGV2ZW50QXJncy5rZXkgPT09IEtFWVMuRE9XTl9BUlJPV19JRSkpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQ3VzdG9tRGlhbG9nRHJvcERvd24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudEFyZ3Mua2V5ID09PSBLRVlTLlRBQiAmJiBldmVudEFyZ3Muc2hpZnRLZXkgJiYgdGhpcy5leHByZXNzaW9uc0xpc3RbMF0gPT09IHRoaXMuZXhwcmVzc2lvblVJKSB7XG4gICAgICAgICAgICBldmVudEFyZ3MucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdHJhbnNmb3JtVmFsdWUodmFsdWUpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy5jb2x1bW4uZGF0YVR5cGUgPT09IERhdGFUeXBlLk51bWJlcikge1xuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbHVtbi5kYXRhVHlwZSA9PT0gRGF0YVR5cGUuQm9vbGVhbikge1xuICAgICAgICAgICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG4iXX0=