/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, Input, TemplateRef, ViewChild, ViewChildren, QueryList, ElementRef, HostBinding, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { DataType } from '../../data-operations/data-util';
import { IgxColumnComponent } from '../column.component';
import { IgxDropDownComponent } from '../../drop-down/index';
import { FilteringLogic } from '../../data-operations/filtering-expression.interface';
import { HorizontalAlignment, VerticalAlignment } from '../../services/overlay/utilities';
import { ConnectedPositioningStrategy } from '../../services/overlay/position/connected-positioning-strategy';
import { IgxChipsAreaComponent } from '../../chips';
import { ExpressionUI } from './grid-filtering.service';
import { IgxFilteringService } from './grid-filtering.service';
import { isEdge } from '../../core/utils';
import { AbsoluteScrollStrategy } from '../../services/overlay/scroll';
/**
 * @hidden
 */
export class IgxGridFilteringRowComponent {
    /**
     * @param {?} filteringService
     * @param {?} element
     * @param {?} cdr
     */
    constructor(filteringService, element, cdr) {
        this.filteringService = filteringService;
        this.element = element;
        this.cdr = cdr;
        this._positionSettings = {
            horizontalStartPoint: HorizontalAlignment.Left,
            verticalStartPoint: VerticalAlignment.Bottom
        };
        this._conditionsOverlaySettings = {
            excludePositionTarget: true,
            closeOnOutsideClick: true,
            modal: false,
            scrollStrategy: new AbsoluteScrollStrategy(),
            positionStrategy: new ConnectedPositioningStrategy(this._positionSettings)
        };
        this._operatorsOverlaySettings = {
            excludePositionTarget: true,
            closeOnOutsideClick: true,
            modal: false,
            scrollStrategy: new AbsoluteScrollStrategy(),
            positionStrategy: new ConnectedPositioningStrategy(this._positionSettings)
        };
        this.chipAreaScrollOffset = 0;
        this._column = null;
        this.isKeyPressed = false;
        this.isComposing = false;
        this._cancelChipClick = false;
        this.cssClass = 'igx-grid__filtering-row';
    }
    /**
     * @return {?}
     */
    get column() {
        return this._column;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set column(val) {
        if (val) {
            this._column = val;
            this.expressionsList = this.filteringService.getExpressions(this._column.field);
            this.resetExpression();
            this.chipAreaScrollOffset = 0;
            this.transform(this.chipAreaScrollOffset);
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this.expression ? this.expression.searchVal : null;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set value(val) {
        if (!val && val !== 0) {
            this.expression.searchVal = null;
            this.showHideArrowButtons();
        }
        else {
            this.expression.searchVal = this.transformValue(val);
            if (this.expressionsList.find(item => item.expression === this.expression) === undefined) {
                this.addExpression(true);
            }
        }
        this.filter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._conditionsOverlaySettings.outlet = this.column.grid.outletDirective;
        this._operatorsOverlaySettings.outlet = this.column.grid.outletDirective;
        this.input.nativeElement.focus();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onTabKeydown(event) {
        event.stopPropagation();
        if (document.activeElement === this.closeButton.nativeElement && !event.shiftKey) {
            this.filteringService.grid.navigation.navigateFirstCellIfPossible(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onEscKeydown(event) {
        event.preventDefault();
        event.stopPropagation();
        this.close();
    }
    /**
     * @return {?}
     */
    get disabled() {
        return !(this.column.filteringExpressionsTree && this.column.filteringExpressionsTree.filteringOperands.length > 0);
    }
    /**
     * @return {?}
     */
    get template() {
        if (this.column.dataType === DataType.Date) {
            return this.defaultDateUI;
        }
        return this.defaultFilterUI;
    }
    /**
     * @return {?}
     */
    get type() {
        switch (this.column.dataType) {
            case DataType.String:
            case DataType.Boolean:
                return 'text';
            case DataType.Number:
                return 'number';
        }
    }
    /**
     * @return {?}
     */
    get conditions() {
        return this.column.filters.conditionList();
    }
    /**
     * @return {?}
     */
    get isUnaryCondition() {
        if (this.expression.condition) {
            return this.expression.condition.isUnary;
        }
        else {
            return true;
        }
    }
    /**
     * @return {?}
     */
    get placeholder() {
        if (this.expression.condition && this.expression.condition.isUnary) {
            return this.filteringService.getChipLabel(this.expression);
        }
        else if (this.column.dataType === DataType.Date) {
            return this.filteringService.grid.resourceStrings.igx_grid_filter_row_date_placeholder;
        }
        else if (this.column.dataType === DataType.Boolean) {
            return this.filteringService.grid.resourceStrings.igx_grid_filter_row_boolean_placeholder;
        }
        else {
            return this.filteringService.grid.resourceStrings.igx_grid_filter_row_placeholder;
        }
    }
    /**
     * Event handler for keydown on the input group's prefix.
     * @param {?} event
     * @return {?}
     */
    onPrefixKeyDown(event) {
        if ((event.key === "Enter" /* ENTER */ || event.key === " " /* SPACE */ || event.key === "Spacebar" /* SPACE_IE */) && this.dropDownConditions.collapsed) {
            this.toggleConditionsDropDown(this.inputGroupPrefix.nativeElement);
            event.stopImmediatePropagation();
        }
        else if (event.key === "Tab" /* TAB */) {
            if (event.shiftKey) {
                event.preventDefault();
                event.stopPropagation();
            }
            else if (!this.dropDownConditions.collapsed) {
                this.toggleConditionsDropDown(this.inputGroupPrefix.nativeElement);
            }
        }
    }
    /**
     * Event handler for keydown on the input.
     * @param {?} event
     * @return {?}
     */
    onInputKeyDown(event) {
        this.isKeyPressed = true;
        if (this.column.dataType === DataType.Boolean) {
            if (event.key === "Enter" /* ENTER */ || event.key === " " /* SPACE */ || event.key === "Spacebar" /* SPACE_IE */) {
                this.inputGroupPrefix.nativeElement.focus();
                this.toggleConditionsDropDown(this.inputGroupPrefix.nativeElement);
                event.stopPropagation();
                return;
            }
        }
        if (event.key === "Enter" /* ENTER */) {
            if (this.isComposing) {
                return;
            }
            this.commitInput();
        }
        else if (event.altKey && (event.key === "ArrowDown" /* DOWN_ARROW */ || event.key === "Down" /* DOWN_ARROW_IE */)) {
            this.inputGroupPrefix.nativeElement.focus();
            this.toggleConditionsDropDown(this.inputGroupPrefix.nativeElement);
        }
        else if (event.key === "Escape" /* ESCAPE */ || event.key === "Esc" /* ESCAPE_IE */) {
            event.preventDefault();
            this.close();
        }
        event.stopPropagation();
    }
    /**
     * Event handler for keyup on the input.
     * @param {?} eventArgs
     * @return {?}
     */
    onInputKeyUp(eventArgs) {
        this.isKeyPressed = false;
    }
    /**
     * Event handler for input on the input.
     * @param {?} eventArgs
     * @return {?}
     */
    onInput(eventArgs) {
        // The 'iskeyPressed' flag is needed for a case in IE, because the input event is fired on focus and for some reason,
        // when you have a japanese character as a placeholder, on init the value here is empty string .
        if (isEdge() || this.isKeyPressed || eventArgs.target.value) {
            this.value = eventArgs.target.value;
        }
    }
    /**
     * Event handler for compositionstart on the input.
     * @return {?}
     */
    onCompositionStart() {
        this.isComposing = true;
    }
    /**
     * Event handler for compositionend on the input.
     * @return {?}
     */
    onCompositionEnd() {
        this.isComposing = false;
    }
    /**
     * Event handler for input click event.
     * @return {?}
     */
    onInputClick() {
        if (this.column.dataType === DataType.Boolean && this.dropDownConditions.collapsed) {
            this.inputGroupPrefix.nativeElement.focus();
            this.toggleConditionsDropDown(this.inputGroupPrefix.nativeElement);
        }
    }
    /**
     * Event handler for datepicker's close.
     * @return {?}
     */
    datePickerClose() {
        this.input.nativeElement.focus();
    }
    /**
     * Returns the filtering operation condition for a given value.
     * @param {?} value
     * @return {?}
     */
    getCondition(value) {
        return this.column.filters.condition(value);
    }
    /**
     * Returns the translated condition name for a given value.
     * @param {?} value
     * @return {?}
     */
    translateCondition(value) {
        return this.filteringService.grid.resourceStrings[`igx_grid_filter_${this.getCondition(value).name}`] || value;
    }
    /**
     * Returns the icon name of the current condition.
     * @return {?}
     */
    getIconName() {
        if (this.column.dataType === DataType.Boolean && this.expression.condition === null) {
            return this.getCondition(this.conditions[0]).iconName;
        }
        else {
            return this.expression.condition.iconName;
        }
    }
    /**
     * Returns whether a given condition is selected in dropdown.
     * @param {?} conditionName
     * @return {?}
     */
    isConditionSelected(conditionName) {
        if (this.expression.condition) {
            return this.expression.condition.name === conditionName;
        }
        else {
            return false;
        }
    }
    /**
     * Clears the current filtering.
     * @return {?}
     */
    clearFiltering() {
        this.filteringService.clearFilter(this.column.field);
        this.resetExpression();
        if (this.input) {
            this.input.nativeElement.focus();
        }
        this.cdr.detectChanges();
        this.chipAreaScrollOffset = 0;
        this.transform(this.chipAreaScrollOffset);
    }
    /**
     * Commits the value of the input.
     * @return {?}
     */
    commitInput() {
        this.expressionsList.forEach(ex => ex.isSelected = false);
        this.chipsArea.chipsList.forEach(chip => chip.selected = false);
        /** @type {?} */
        let indexToDeselect = -1;
        for (let index = 0; index < this.expressionsList.length; index++) {
            /** @type {?} */
            const expression = this.expressionsList[index].expression;
            if (expression.searchVal === null && !expression.condition.isUnary) {
                indexToDeselect = index;
            }
        }
        if (indexToDeselect !== -1) {
            this.removeExpression(indexToDeselect, this.expression);
        }
        this.resetExpression();
        this.scrollChipsWhenAddingExpression();
    }
    /**
     * Clears the value of the input.
     * @return {?}
     */
    clearInput() {
        this.value = null;
    }
    /**
     * Event handler for keydown on clear button.
     * @param {?} eventArgs
     * @return {?}
     */
    onClearKeyDown(eventArgs) {
        if (eventArgs.key === "Enter" /* ENTER */ || eventArgs.key === " " /* SPACE */ || eventArgs.key === "Spacebar" /* SPACE_IE */) {
            eventArgs.preventDefault();
            this.clearInput();
            this.input.nativeElement.focus();
        }
    }
    /**
     * Event handler for click on clear button.
     * @return {?}
     */
    onClearClick() {
        this.clearInput();
        this.input.nativeElement.focus();
    }
    /**
     * Event handler for keydown on commit button.
     * @param {?} eventArgs
     * @return {?}
     */
    onCommitKeyDown(eventArgs) {
        if (eventArgs.key === "Enter" /* ENTER */ || eventArgs.key === " " /* SPACE */ || eventArgs.key === "Spacebar" /* SPACE_IE */) {
            eventArgs.preventDefault();
            this.commitInput();
            this.input.nativeElement.focus();
        }
    }
    /**
     * Event handler for click on commit button.
     * @return {?}
     */
    onCommitClick() {
        this.commitInput();
        this.input.nativeElement.focus();
    }
    /**
     * Event handler for focusout on the input group.
     * @return {?}
     */
    onInputGroupFocusout() {
        if (!this.value && this.value !== 0) {
            return;
        }
        requestAnimationFrame(() => {
            /** @type {?} */
            const focusedElement = document.activeElement;
            if (!(focusedElement && this.inputGroup.nativeElement.contains(focusedElement)) &&
                this.dropDownConditions.collapsed) {
                this.commitInput();
            }
        });
    }
    /**
     * Closes the filtering edit row.
     * @return {?}
     */
    close() {
        if (this.expressionsList.length === 1 &&
            this.expressionsList[0].expression.searchVal === null &&
            this.expressionsList[0].expression.condition.isUnary === false) {
            this.filteringService.getExpressions(this.column.field).pop();
        }
        else {
            this.expressionsList.forEach((item) => {
                if (item.expression.searchVal === null && !item.expression.condition.isUnary) {
                    this.filteringService.removeExpression(this.column.field, this.expressionsList.indexOf(item));
                }
            });
        }
        this.filteringService.isFilterRowVisible = false;
        this.filteringService.updateFilteringCell(this.column);
        this.filteringService.focusFilterCellChip(this.column, true);
        this.filteringService.filteredColumn = null;
        this.filteringService.selectedExpression = null;
        this.cdr.detectChanges();
        this.chipAreaScrollOffset = 0;
        this.transform(this.chipAreaScrollOffset);
    }
    /*
        * noop
        */
    /**
     * @return {?}
     */
    noop() { }
    /**
     *  Event handler for date picker's selection.
     * @param {?} value
     * @return {?}
     */
    onDateSelected(value) {
        this.value = value;
        this.commitInput();
    }
    /**
     * Opens the conditions dropdown.
     * @param {?} target
     * @return {?}
     */
    toggleConditionsDropDown(target) {
        this._conditionsOverlaySettings.positionStrategy.settings.target = target;
        this.dropDownConditions.toggle(this._conditionsOverlaySettings);
    }
    /**
     * Opens the logic operators dropdown.
     * @param {?} eventArgs
     * @param {?} index
     * @return {?}
     */
    toggleOperatorsDropDown(eventArgs, index) {
        this._operatorsOverlaySettings.positionStrategy.settings.target = eventArgs.target.parentElement;
        this.dropDownOperators.toArray()[index].toggle(this._operatorsOverlaySettings);
    }
    /**
     * Event handler for change event in conditions dropdown.
     * @param {?} eventArgs
     * @return {?}
     */
    onConditionsChanged(eventArgs) {
        /** @type {?} */
        const value = ((/** @type {?} */ (eventArgs.newSelection))).value;
        this.expression.condition = this.getCondition(value);
        if (this.expression.condition.isUnary) {
            // update grid's filtering on the next cycle to ensure the drop-down is closed
            // if the drop-down is not closed this event handler will be invoked multiple times
            requestAnimationFrame(() => this.unaryConditionChangedCallback());
        }
        else {
            requestAnimationFrame(() => this.conditionChangedCallback());
        }
        if (this.input) {
            // Add requestAnimationFrame becasue of an issue in IE, where you are still able to write in the input,
            // if it has been focused and then set to readonly.
            requestAnimationFrame(() => this.input.nativeElement.focus());
        }
    }
    /**
     * @param {?} args
     * @param {?} chip
     * @return {?}
     */
    onChipPointerdown(args, chip) {
        /** @type {?} */
        const activeElement = document.activeElement;
        this._cancelChipClick = chip.selected && activeElement && this.inputGroup.nativeElement.contains(activeElement);
    }
    /**
     * @param {?} args
     * @param {?} chip
     * @return {?}
     */
    onChipClick(args, chip) {
        if (this._cancelChipClick) {
            return;
        }
        this._cancelChipClick = false;
        chip.selected = !chip.selected;
    }
    /**
     *  Event handler for chip selected event.
     * @param {?} eventArgs
     * @param {?} expression
     * @return {?}
     */
    onChipSelected(eventArgs, expression) {
        if (eventArgs.selected) {
            if (this.chipsArea.chipsList) {
                this.chipsArea.chipsList.forEach((chip) => {
                    if (chip !== eventArgs.owner) {
                        chip.selected = false;
                    }
                });
            }
            this.expression = expression;
            if (this.input) {
                this.input.nativeElement.focus();
            }
        }
        else if (this.expression === expression) {
            this.resetExpression();
        }
    }
    /**
     * Event handler for chip keydown event.
     * @param {?} eventArgs
     * @param {?} chip
     * @return {?}
     */
    onChipKeyDown(eventArgs, chip) {
        if (eventArgs.key === "Enter" /* ENTER */) {
            eventArgs.preventDefault();
            chip.selected = !chip.selected;
        }
    }
    /**
     * Scrolls the first chip into view if the tab key is pressed on the left arrow.
     * @param {?} event
     * @return {?}
     */
    onLeftArrowKeyDown(event) {
        if (event.key === "Tab" /* TAB */) {
            this.chipAreaScrollOffset = 0;
            this.transform(this.chipAreaScrollOffset);
        }
    }
    /**
     * Event handler for chip removed event.
     * @param {?} eventArgs
     * @param {?} item
     * @return {?}
     */
    onChipRemoved(eventArgs, item) {
        /** @type {?} */
        const indexToRemove = this.expressionsList.indexOf(item);
        this.removeExpression(indexToRemove, item.expression);
        this.scrollChipsOnRemove();
    }
    /**
     * Event handler for logic operator changed event.
     * @param {?} eventArgs
     * @param {?} expression
     * @return {?}
     */
    onLogicOperatorChanged(eventArgs, expression) {
        if (eventArgs.oldSelection) {
            expression.afterOperator = ((/** @type {?} */ (eventArgs.newSelection))).value;
            this.expressionsList[this.expressionsList.indexOf(expression) + 1].beforeOperator = expression.afterOperator;
            // update grid's filtering on the next cycle to ensure the drop-down is closed
            // if the drop-down is not closed this event handler will be invoked multiple times
            requestAnimationFrame(() => this.filter());
        }
    }
    /**
     * Scrolls the chips into the chip area when left or right arrows are pressed.
     * @param {?} arrowPosition
     * @return {?}
     */
    scrollChipsOnArrowPress(arrowPosition) {
        /** @type {?} */
        let count = 0;
        /** @type {?} */
        const chipAraeChildren = this.chipsArea.element.nativeElement.children;
        /** @type {?} */
        const containerRect = this.container.nativeElement.getBoundingClientRect();
        if (arrowPosition === 'right') {
            for (let index = 0; index < chipAraeChildren.length; index++) {
                if (Math.ceil(chipAraeChildren[index].getBoundingClientRect().right) < Math.ceil(containerRect.right)) {
                    count++;
                }
            }
            if (count < chipAraeChildren.length) {
                this.chipAreaScrollOffset -= Math.ceil(chipAraeChildren[count].getBoundingClientRect().right) -
                    Math.ceil(containerRect.right) + 1;
                this.transform(this.chipAreaScrollOffset);
            }
        }
        if (arrowPosition === 'left') {
            for (let index = 0; index < chipAraeChildren.length; index++) {
                if (Math.ceil(chipAraeChildren[index].getBoundingClientRect().left) < Math.ceil(containerRect.left)) {
                    count++;
                }
            }
            if (count > 0) {
                this.chipAreaScrollOffset += Math.ceil(containerRect.left) -
                    Math.ceil(chipAraeChildren[count - 1].getBoundingClientRect().left) + 1;
                this.transform(this.chipAreaScrollOffset);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    showHideArrowButtons() {
        requestAnimationFrame(() => {
            if (this.filteringService.isFilterRowVisible) {
                /** @type {?} */
                const containerWidth = this.container.nativeElement.getBoundingClientRect().width;
                this.chipsAreaWidth = this.chipsArea.element.nativeElement.getBoundingClientRect().width;
                this.showArrows = this.chipsAreaWidth >= containerWidth && this.isColumnFiltered;
                // TODO: revise the cdr.detectChanges() usage here
                this.cdr.detectChanges();
            }
        });
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
    /**
     * @private
     * @param {?} isSelected
     * @return {?}
     */
    addExpression(isSelected) {
        /** @type {?} */
        const exprUI = new ExpressionUI();
        exprUI.expression = this.expression;
        exprUI.beforeOperator = this.expressionsList.length > 0 ? FilteringLogic.And : null;
        exprUI.isSelected = isSelected;
        this.expressionsList.push(exprUI);
        /** @type {?} */
        const length = this.expressionsList.length;
        if (this.expressionsList[length - 2]) {
            this.expressionsList[length - 2].afterOperator = this.expressionsList[length - 1].beforeOperator;
        }
        this.showHideArrowButtons();
    }
    /**
     * @private
     * @param {?} indexToRemove
     * @param {?} expression
     * @return {?}
     */
    removeExpression(indexToRemove, expression) {
        if (indexToRemove === 0 && this.expressionsList.length === 1) {
            this.clearFiltering();
            return;
        }
        this.filteringService.removeExpression(this.column.field, indexToRemove);
        this.filter();
        if (this.expression === expression) {
            this.resetExpression();
        }
        this.showHideArrowButtons();
    }
    /**
     * @private
     * @return {?}
     */
    resetExpression() {
        this.expression = {
            fieldName: this.column.field,
            condition: null,
            searchVal: null,
            ignoreCase: this.column.filteringIgnoreCase
        };
        if (this.column.dataType !== DataType.Boolean) {
            this.expression.condition = this.getCondition(this.conditions[0]);
        }
        if (this.column.dataType === DataType.Date && this.input) {
            this.input.nativeElement.value = null;
        }
        this.showHideArrowButtons();
    }
    /**
     * @private
     * @return {?}
     */
    scrollChipsWhenAddingExpression() {
        /** @type {?} */
        const chipAraeChildren = this.chipsArea.element.nativeElement.children;
        if (!chipAraeChildren || chipAraeChildren.length === 0) {
            return;
        }
        /** @type {?} */
        const containerRectRight = Math.ceil(this.container.nativeElement.getBoundingClientRect().right);
        /** @type {?} */
        const lastChipRectRight = Math.ceil(chipAraeChildren[chipAraeChildren.length - 1].getBoundingClientRect().right);
        if (lastChipRectRight >= containerRectRight) {
            this.chipAreaScrollOffset -= lastChipRectRight - containerRectRight;
            this.transform(this.chipAreaScrollOffset);
        }
    }
    /**
     * @hidden
     * Resets the chips area
     * \@memberof IgxGridFilteringRowComponent
     * @return {?}
     */
    resetChipsArea() {
        this.chipAreaScrollOffset = 0;
        this.transform(this.chipAreaScrollOffset);
        this.showHideArrowButtons();
    }
    /**
     * @private
     * @param {?} offset
     * @return {?}
     */
    transform(offset) {
        requestAnimationFrame(() => {
            this.chipsArea.element.nativeElement.style.transform = `translate(${offset}px)`;
        });
    }
    /**
     * @private
     * @return {?}
     */
    scrollChipsOnRemove() {
        /** @type {?} */
        let count = 0;
        /** @type {?} */
        const chipAraeChildren = this.chipsArea.element.nativeElement.children;
        /** @type {?} */
        const containerRect = this.container.nativeElement.getBoundingClientRect();
        for (let index = 0; index < chipAraeChildren.length; index++) {
            if (Math.ceil(chipAraeChildren[index].getBoundingClientRect().left) < Math.ceil(containerRect.left)) {
                count++;
            }
        }
        if (count <= 2) {
            this.chipAreaScrollOffset = 0;
        }
        else {
            /** @type {?} */
            const dif = chipAraeChildren[count].id === 'chip' ? count - 2 : count - 1;
            this.chipAreaScrollOffset += Math.ceil(containerRect.left) - Math.ceil(chipAraeChildren[dif].getBoundingClientRect().left) + 1;
        }
        this.transform(this.chipAreaScrollOffset);
    }
    /**
     * @private
     * @return {?}
     */
    conditionChangedCallback() {
        if (!!this.expression.searchVal || this.expression.searchVal === 0) {
            this.filter();
        }
        else if (this.value) {
            this.value = null;
        }
    }
    /**
     * @private
     * @return {?}
     */
    unaryConditionChangedCallback() {
        if (this.value) {
            this.value = null;
        }
        if (this.expressionsList.find(item => item.expression === this.expression) === undefined) {
            this.addExpression(true);
        }
        this.filter();
    }
    /**
     * @private
     * @return {?}
     */
    filter() {
        this.filteringService.filterInternal(this.column.field);
    }
    /**
     * @private
     * @return {?}
     */
    get isColumnFiltered() {
        return this.column.filteringExpressionsTree && this.column.filteringExpressionsTree.filteringOperands.length > 0;
    }
}
IgxGridFilteringRowComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'igx-grid-filtering-row',
                template: "<!-- Have to apply styles inline because of the overlay outlet ... -->\n<igx-drop-down #inputGroupConditions [height]=\"'200px'\" (onSelection)=\"onConditionsChanged($event)\">\n    <igx-drop-down-item\n        *ngFor=\"let condition of conditions\"\n        [value]=\"condition\"\n        [selected]=\"isConditionSelected(condition)\">\n        <igx-icon fontSet=\"filtering-icons\" [name]=\"getCondition(condition).iconName\"></igx-icon>\n        <span style=\"margin-left: 16px\">{{ translateCondition(condition) }}</span>\n    </igx-drop-down-item>\n</igx-drop-down>\n\n<ng-template #defaultFilterUI>\n    <igx-input-group #inputGroup type=\"box\" [displayDensity]=\"'compact'\" [supressInputAutofocus]=\"true\" (focusout)=\"onInputGroupFocusout()\">\n        <igx-prefix #inputGroupPrefix\n                    (click)=\"toggleConditionsDropDown(inputGroupPrefix)\"\n                    (keydown)=\"onPrefixKeyDown($event)\"\n                    tabindex=\"0\"\n                    [igxDropDownItemNavigation]=\"inputGroupConditions\">\n            <igx-icon fontSet=\"filtering-icons\" [name]=\"getIconName()\"></igx-icon>\n        </igx-prefix>\n        <input\n            #input\n            igxInput\n            tabindex=\"0\"\n            [placeholder]=\"placeholder\"\n            autocomplete=\"off\"\n            [value]=\"value\"\n            (input)=\"onInput($event)\"\n            [type]=\"type\"\n            [readonly]=\"isUnaryCondition\"\n            (click)=\"onInputClick()\"\n            (compositionstart)=\"onCompositionStart()\"\n            (compositionend)=\"onCompositionEnd()\"\n            (keydown)=\"onInputKeyDown($event)\"\n            (keyup)=\"onInputKeyUp($event)\"/>\n            <igx-suffix *ngIf=\"value || value === 0\" >\n                <igx-icon (keydown)=\"onCommitKeyDown($event)\" (click)=\"onCommitClick()\" tabindex=\"0\">done</igx-icon>\n                <igx-icon (keydown)=\"onClearKeyDown($event)\" (click)=\"onClearClick()\" tabindex=\"0\">clear</igx-icon>\n            </igx-suffix>\n    </igx-input-group>\n</ng-template>\n\n<ng-template #defaultDateUI>\n    <igx-date-picker\n        tabindex=\"0\"\n        mode=\"dropdown\"\n        [value]=\"value\"\n        [outlet]=\"filteringService.grid.outletDirective\"\n        [locale]=\"filteringService.grid.locale\"\n        (onSelection)=\"onDateSelected($event)\"\n        (onClose)=\"datePickerClose()\">\n        <ng-template igxDatePickerTemplate let-openDialog=\"openDialog\">\n            <igx-input-group #dropDownTarget type=\"box\" [displayDensity]=\"'compact'\" [supressInputAutofocus]=\"true\">\n                <igx-prefix #inputGroupPrefix\n                            tabindex=\"0\"\n                            (click)=\"toggleConditionsDropDown(inputGroupPrefix)\"\n                            (keydown)=\"onPrefixKeyDown($event)\"\n                            [igxDropDownItemNavigation]=\"inputGroupConditions\">\n                    <igx-icon fontSet=\"filtering-icons\" [name]=\"expression.condition.iconName\"></igx-icon>\n                </igx-prefix>\n                <input #input\n                       igxInput\n                       tabindex=\"0\"\n                       (click)=\"expression.condition.isUnary ? noop() : openDialog(dropDownTarget.element.nativeElement)\"\n                       [placeholder]=\"placeholder\"\n                       autocomplete=\"off\"\n                       [value]=\"value | igxdate: filteringService.grid.locale\"\n                       [readonly]=\"true\"\n                       (keydown)=\"onInputKeyDown($event)\"/>\n                <igx-suffix *ngIf=\"value\" (keydown)=\"onClearKeyDown($event)\" (click)=\"clearInput()\" tabindex=\"0\">\n                    <igx-icon>clear</igx-icon>\n                </igx-suffix>\n            </igx-input-group>\n            </ng-template>\n    </igx-date-picker>\n</ng-template>\n\n<ng-container *ngTemplateOutlet=\"template; context: { $implicit: this }\"></ng-container>\n\n<button igxButton=\"icon\" class=\"igx-grid__filtering-row-scroll-start\" *ngIf=\"showArrows\" (keydown)=\"onLeftArrowKeyDown($event)\" (click)=\"scrollChipsOnArrowPress('left')\">\n    <igx-icon>navigate_before</igx-icon>\n</button>\n\n<div #container class=\"igx-grid__filtering-row-main\">\n    <div>\n         <igx-chips-area #chipsArea>\n            <ng-container *ngFor=\"let item of expressionsList; index as i; let last = last;\" tabindex=\"0\">\n                <igx-chip #chip id='chip'\n                    (pointerdown)=\"onChipPointerdown($event, chip)\"\n                    (click)=\"onChipClick($event, chip)\"\n                    (onSelection)=\"onChipSelected($event, item.expression)\"\n                    (keydown)=\"onChipKeyDown($event, chip)\"\n                    (onRemove)=\"onChipRemoved($event, item)\"\n                    [selectable]=\"false\"\n                    [selected]=\"item.isSelected\"\n                    [displayDensity]=\"'cosy'\"\n                    [removable]=\"true\">\n                    <igx-icon\n                        igxPrefix\n                        fontSet=\"filtering-icons\"\n                        [name]=\"item.expression.condition.iconName\">\n                    </igx-icon>\n                    <span>{{filteringService.getChipLabel(item.expression)}}</span>\n                </igx-chip>\n\n                <span id='operand' *ngIf=\"!last\">\n                    <button igxButton (click)=\"toggleOperatorsDropDown($event, i)\" [igxDropDownItemNavigation]=\"operators\">\n                        <igx-icon>expand_more</igx-icon>\n                        <span>{{filteringService.getOperatorAsString(item.afterOperator)}}</span>\n                    </button>\n                    <igx-drop-down #operators (onSelection)=\"onLogicOperatorChanged($event, item)\">\n                            <igx-drop-down-item [value]=\"0\" [selected]=\"item.afterOperator === 0\">{{filteringService.grid.resourceStrings.igx_grid_filter_operator_and}}</igx-drop-down-item>\n                            <igx-drop-down-item [value]=\"1\" [selected]=\"item.afterOperator === 1\">{{filteringService.grid.resourceStrings.igx_grid_filter_operator_or}}</igx-drop-down-item>\n                    </igx-drop-down>\n                </span>\n            </ng-container>\n        </igx-chips-area>\n    </div>\n</div>\n\n<button igxButton=\"icon\" class=\"igx-grid__filtering-row-scroll-end\" *ngIf=\"showArrows\" (click)=\"scrollChipsOnArrowPress('right')\">\n    <igx-icon>navigate_next</igx-icon>\n</button>\n\n<div #buttonsContainer class=\"igx-grid__filtering-row-editing-buttons\">\n    <button igxButton igxRipple (click)=\"clearFiltering()\" [disabled]=\"disabled\" [tabindex]=\"disabled\">{{filteringService.grid.resourceStrings.igx_grid_filter_row_reset}}</button>\n    <button #closeButton igxButton igxRipple (click)=\"close()\">{{filteringService.grid.resourceStrings.igx_grid_filter_row_close}}</button>\n</div>\n"
            }] }
];
/** @nocollapse */
IgxGridFilteringRowComponent.ctorParameters = () => [
    { type: IgxFilteringService },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
IgxGridFilteringRowComponent.propDecorators = {
    column: [{ type: Input }],
    value: [{ type: Input }],
    defaultFilterUI: [{ type: ViewChild, args: ['defaultFilterUI', { read: TemplateRef, static: true },] }],
    defaultDateUI: [{ type: ViewChild, args: ['defaultDateUI', { read: TemplateRef, static: true },] }],
    input: [{ type: ViewChild, args: ['input', { read: ElementRef, static: false },] }],
    dropDownConditions: [{ type: ViewChild, args: ['inputGroupConditions', { read: IgxDropDownComponent, static: true },] }],
    chipsArea: [{ type: ViewChild, args: ['chipsArea', { read: IgxChipsAreaComponent, static: true },] }],
    dropDownOperators: [{ type: ViewChildren, args: ['operators', { read: IgxDropDownComponent },] }],
    inputGroup: [{ type: ViewChild, args: ['inputGroup', { read: ElementRef, static: false },] }],
    inputGroupPrefix: [{ type: ViewChild, args: ['inputGroupPrefix', { read: ElementRef, static: false },] }],
    container: [{ type: ViewChild, args: ['container', { static: true },] }],
    operand: [{ type: ViewChild, args: ['operand', { static: false },] }],
    closeButton: [{ type: ViewChild, args: ['closeButton', { static: true },] }],
    cssClass: [{ type: HostBinding, args: ['class.igx-grid__filtering-row',] }],
    onTabKeydown: [{ type: HostListener, args: ['keydown.shift.tab', ['$event'],] }, { type: HostListener, args: ['keydown.tab', ['$event'],] }],
    onEscKeydown: [{ type: HostListener, args: ['keydown.esc', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxGridFilteringRowComponent.prototype._positionSettings;
    /**
     * @type {?}
     * @private
     */
    IgxGridFilteringRowComponent.prototype._conditionsOverlaySettings;
    /**
     * @type {?}
     * @private
     */
    IgxGridFilteringRowComponent.prototype._operatorsOverlaySettings;
    /**
     * @type {?}
     * @private
     */
    IgxGridFilteringRowComponent.prototype.chipsAreaWidth;
    /**
     * @type {?}
     * @private
     */
    IgxGridFilteringRowComponent.prototype.chipAreaScrollOffset;
    /**
     * @type {?}
     * @private
     */
    IgxGridFilteringRowComponent.prototype._column;
    /**
     * @type {?}
     * @private
     */
    IgxGridFilteringRowComponent.prototype.isKeyPressed;
    /**
     * @type {?}
     * @private
     */
    IgxGridFilteringRowComponent.prototype.isComposing;
    /**
     * @type {?}
     * @private
     */
    IgxGridFilteringRowComponent.prototype._cancelChipClick;
    /** @type {?} */
    IgxGridFilteringRowComponent.prototype.showArrows;
    /** @type {?} */
    IgxGridFilteringRowComponent.prototype.expression;
    /** @type {?} */
    IgxGridFilteringRowComponent.prototype.expressionsList;
    /**
     * @type {?}
     * @protected
     */
    IgxGridFilteringRowComponent.prototype.defaultFilterUI;
    /**
     * @type {?}
     * @protected
     */
    IgxGridFilteringRowComponent.prototype.defaultDateUI;
    /**
     * @type {?}
     * @protected
     */
    IgxGridFilteringRowComponent.prototype.input;
    /**
     * @type {?}
     * @protected
     */
    IgxGridFilteringRowComponent.prototype.dropDownConditions;
    /**
     * @type {?}
     * @protected
     */
    IgxGridFilteringRowComponent.prototype.chipsArea;
    /**
     * @type {?}
     * @protected
     */
    IgxGridFilteringRowComponent.prototype.dropDownOperators;
    /**
     * @type {?}
     * @protected
     */
    IgxGridFilteringRowComponent.prototype.inputGroup;
    /**
     * @type {?}
     * @protected
     */
    IgxGridFilteringRowComponent.prototype.inputGroupPrefix;
    /**
     * @type {?}
     * @protected
     */
    IgxGridFilteringRowComponent.prototype.container;
    /**
     * @type {?}
     * @protected
     */
    IgxGridFilteringRowComponent.prototype.operand;
    /** @type {?} */
    IgxGridFilteringRowComponent.prototype.closeButton;
    /** @type {?} */
    IgxGridFilteringRowComponent.prototype.cssClass;
    /** @type {?} */
    IgxGridFilteringRowComponent.prototype.filteringService;
    /** @type {?} */
    IgxGridFilteringRowComponent.prototype.element;
    /** @type {?} */
    IgxGridFilteringRowComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1maWx0ZXJpbmctcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvZmlsdGVyaW5nL2dyaWQtZmlsdGVyaW5nLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFSCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osdUJBQXVCLEVBQzFCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQXVCLE1BQU0sdUJBQXVCLENBQUM7QUFFbEYsT0FBTyxFQUFFLGNBQWMsRUFBd0IsTUFBTSxzREFBc0QsQ0FBQztBQUM1RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQW1CLE1BQU0sa0NBQWtDLENBQUM7QUFDM0csT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDOUcsT0FBTyxFQUE0QyxxQkFBcUIsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFDaEgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXhELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBUSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7OztBQVd2RSxNQUFNLE9BQU8sNEJBQTRCOzs7Ozs7SUEyR3JDLFlBQW1CLGdCQUFxQyxFQUFTLE9BQW1CLEVBQVMs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QTRDOztJQUFFLCtDQUEwQjs7SUFBRSwyQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFmdGVyVmlld0luaXQsXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQ29tcG9uZW50LFxuICAgIElucHV0LFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFZpZXdDaGlsZCxcbiAgICBWaWV3Q2hpbGRyZW4sXG4gICAgUXVlcnlMaXN0LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi9kYXRhLW9wZXJhdGlvbnMvZGF0YS11dGlsJztcbmltcG9ydCB7IElneENvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4RHJvcERvd25Db21wb25lbnQsIElTZWxlY3Rpb25FdmVudEFyZ3MgfSBmcm9tICcuLi8uLi9kcm9wLWRvd24vaW5kZXgnO1xuaW1wb3J0IHsgSUZpbHRlcmluZ09wZXJhdGlvbiB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9maWx0ZXJpbmctY29uZGl0aW9uJztcbmltcG9ydCB7IEZpbHRlcmluZ0xvZ2ljLCBJRmlsdGVyaW5nRXhwcmVzc2lvbiB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9maWx0ZXJpbmctZXhwcmVzc2lvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSG9yaXpvbnRhbEFsaWdubWVudCwgVmVydGljYWxBbGlnbm1lbnQsIE92ZXJsYXlTZXR0aW5ncyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL292ZXJsYXkvdXRpbGl0aWVzJztcbmltcG9ydCB7IENvbm5lY3RlZFBvc2l0aW9uaW5nU3RyYXRlZ3kgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vdmVybGF5L3Bvc2l0aW9uL2Nvbm5lY3RlZC1wb3NpdGlvbmluZy1zdHJhdGVneSc7XG5pbXBvcnQgeyBJQ2hpcFNlbGVjdEV2ZW50QXJncywgSUJhc2VDaGlwRXZlbnRBcmdzLCBJZ3hDaGlwc0FyZWFDb21wb25lbnQsIElneENoaXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jaGlwcyc7XG5pbXBvcnQgeyBFeHByZXNzaW9uVUkgfSBmcm9tICcuL2dyaWQtZmlsdGVyaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4RHJvcERvd25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZHJvcC1kb3duL2Ryb3AtZG93bi1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hGaWx0ZXJpbmdTZXJ2aWNlIH0gZnJvbSAnLi9ncmlkLWZpbHRlcmluZy5zZXJ2aWNlJztcbmltcG9ydCB7IEtFWVMsIGlzRWRnZSB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgQWJzb2x1dGVTY3JvbGxTdHJhdGVneSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL292ZXJsYXkvc2Nyb2xsJztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICAgIHNlbGVjdG9yOiAnaWd4LWdyaWQtZmlsdGVyaW5nLXJvdycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2dyaWQtZmlsdGVyaW5nLXJvdy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZEZpbHRlcmluZ1Jvd0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgcHJpdmF0ZSBfcG9zaXRpb25TZXR0aW5ncyA9IHtcbiAgICAgICAgaG9yaXpvbnRhbFN0YXJ0UG9pbnQ6IEhvcml6b250YWxBbGlnbm1lbnQuTGVmdCxcbiAgICAgICAgdmVydGljYWxTdGFydFBvaW50OiBWZXJ0aWNhbEFsaWdubWVudC5Cb3R0b21cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBfY29uZGl0aW9uc092ZXJsYXlTZXR0aW5nczogT3ZlcmxheVNldHRpbmdzID0ge1xuICAgICAgICBleGNsdWRlUG9zaXRpb25UYXJnZXQ6IHRydWUsXG4gICAgICAgIGNsb3NlT25PdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgICAgIG1vZGFsOiBmYWxzZSxcbiAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IG5ldyBBYnNvbHV0ZVNjcm9sbFN0cmF0ZWd5KCksXG4gICAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IG5ldyBDb25uZWN0ZWRQb3NpdGlvbmluZ1N0cmF0ZWd5KHRoaXMuX3Bvc2l0aW9uU2V0dGluZ3MpXG4gICAgfTtcblxuICAgIHByaXZhdGUgX29wZXJhdG9yc092ZXJsYXlTZXR0aW5nczogT3ZlcmxheVNldHRpbmdzID0ge1xuICAgICAgICBleGNsdWRlUG9zaXRpb25UYXJnZXQ6IHRydWUsXG4gICAgICAgIGNsb3NlT25PdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgICAgIG1vZGFsOiBmYWxzZSxcbiAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IG5ldyBBYnNvbHV0ZVNjcm9sbFN0cmF0ZWd5KCksXG4gICAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IG5ldyBDb25uZWN0ZWRQb3NpdGlvbmluZ1N0cmF0ZWd5KHRoaXMuX3Bvc2l0aW9uU2V0dGluZ3MpXG4gICAgfTtcblxuICAgIHByaXZhdGUgY2hpcHNBcmVhV2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIGNoaXBBcmVhU2Nyb2xsT2Zmc2V0ID0gMDtcbiAgICBwcml2YXRlIF9jb2x1bW4gPSBudWxsO1xuICAgIHByaXZhdGUgaXNLZXlQcmVzc2VkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc0NvbXBvc2luZyA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2NhbmNlbENoaXBDbGljayA9IGZhbHNlO1xuXG4gICAgcHVibGljIHNob3dBcnJvd3M6IGJvb2xlYW47XG4gICAgcHVibGljIGV4cHJlc3Npb246IElGaWx0ZXJpbmdFeHByZXNzaW9uO1xuICAgIHB1YmxpYyBleHByZXNzaW9uc0xpc3Q6IEFycmF5PEV4cHJlc3Npb25VST47XG5cbiAgICBASW5wdXQoKVxuICAgIGdldCBjb2x1bW4oKTogSWd4Q29sdW1uQ29tcG9uZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbjtcbiAgICB9XG5cbiAgICBzZXQgY29sdW1uKHZhbCkge1xuICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICB0aGlzLl9jb2x1bW4gPSB2YWw7XG5cbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbnNMaXN0ID0gdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLmdldEV4cHJlc3Npb25zKHRoaXMuX2NvbHVtbi5maWVsZCk7XG5cbiAgICAgICAgICAgIHRoaXMucmVzZXRFeHByZXNzaW9uKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY2hpcEFyZWFTY3JvbGxPZmZzZXQgPSAwO1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0odGhpcy5jaGlwQXJlYVNjcm9sbE9mZnNldCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uID8gdGhpcy5leHByZXNzaW9uLnNlYXJjaFZhbCA6IG51bGw7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbCkge1xuICAgICAgICBpZiAoIXZhbCAmJiB2YWwgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbi5zZWFyY2hWYWwgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zaG93SGlkZUFycm93QnV0dG9ucygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uLnNlYXJjaFZhbCA9IHRoaXMudHJhbnNmb3JtVmFsdWUodmFsKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cHJlc3Npb25zTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5leHByZXNzaW9uID09PSB0aGlzLmV4cHJlc3Npb24pID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV4cHJlc3Npb24odHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpbHRlcigpO1xuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoJ2RlZmF1bHRGaWx0ZXJVSScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCBkZWZhdWx0RmlsdGVyVUk6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdkZWZhdWx0RGF0ZVVJJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGRlZmF1bHREYXRlVUk6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHByb3RlY3RlZCBpbnB1dDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ2lucHV0R3JvdXBDb25kaXRpb25zJywgeyByZWFkOiBJZ3hEcm9wRG93bkNvbXBvbmVudCwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGRyb3BEb3duQ29uZGl0aW9uczogSWd4RHJvcERvd25Db21wb25lbnQ7XG5cbiAgICBAVmlld0NoaWxkKCdjaGlwc0FyZWEnLCB7IHJlYWQ6IElneENoaXBzQXJlYUNvbXBvbmVudCwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGNoaXBzQXJlYTogSWd4Q2hpcHNBcmVhQ29tcG9uZW50O1xuXG4gICAgQFZpZXdDaGlsZHJlbignb3BlcmF0b3JzJywgeyByZWFkOiBJZ3hEcm9wRG93bkNvbXBvbmVudCB9KVxuICAgIHByb3RlY3RlZCBkcm9wRG93bk9wZXJhdG9yczogUXVlcnlMaXN0PElneERyb3BEb3duQ29tcG9uZW50PjtcblxuICAgIEBWaWV3Q2hpbGQoJ2lucHV0R3JvdXAnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcm90ZWN0ZWQgaW5wdXRHcm91cDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ2lucHV0R3JvdXBQcmVmaXgnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcm90ZWN0ZWQgaW5wdXRHcm91cFByZWZpeDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ29wZXJhbmQnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcm90ZWN0ZWQgb3BlcmFuZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ2Nsb3NlQnV0dG9uJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgY2xvc2VCdXR0b246IEVsZW1lbnRSZWY7XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1ncmlkX19maWx0ZXJpbmctcm93JylcbiAgICBwdWJsaWMgY3NzQ2xhc3MgPSAnaWd4LWdyaWRfX2ZpbHRlcmluZy1yb3cnO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGZpbHRlcmluZ1NlcnZpY2U6IElneEZpbHRlcmluZ1NlcnZpY2UsIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuX2NvbmRpdGlvbnNPdmVybGF5U2V0dGluZ3Mub3V0bGV0ID0gdGhpcy5jb2x1bW4uZ3JpZC5vdXRsZXREaXJlY3RpdmU7XG4gICAgICAgIHRoaXMuX29wZXJhdG9yc092ZXJsYXlTZXR0aW5ncy5vdXRsZXQgPSB0aGlzLmNvbHVtbi5ncmlkLm91dGxldERpcmVjdGl2ZTtcblxuICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnNoaWZ0LnRhYicsIFsnJGV2ZW50J10pXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi50YWInLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvblRhYktleWRvd24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmNsb3NlQnV0dG9uLm5hdGl2ZUVsZW1lbnQgJiYgIWV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuZ3JpZC5uYXZpZ2F0aW9uLm5hdmlnYXRlRmlyc3RDZWxsSWZQb3NzaWJsZShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmVzYycsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uRXNjS2V5ZG93bihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEodGhpcy5jb2x1bW4uZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlICYmIHRoaXMuY29sdW1uLmZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5sZW5ndGggPiAwKTtcbiAgICB9XG5cbiAgICBnZXQgdGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgICAgIGlmICh0aGlzLmNvbHVtbi5kYXRhVHlwZSA9PT0gRGF0YVR5cGUuRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdERhdGVVSTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRGaWx0ZXJVSTtcbiAgICB9XG5cbiAgICBnZXQgdHlwZSgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmNvbHVtbi5kYXRhVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBEYXRhVHlwZS5TdHJpbmc6XG4gICAgICAgICAgICBjYXNlIERhdGFUeXBlLkJvb2xlYW46XG4gICAgICAgICAgICAgICAgcmV0dXJuICd0ZXh0JztcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuTnVtYmVyOlxuICAgICAgICAgICAgICAgIHJldHVybiAnbnVtYmVyJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBjb25kaXRpb25zKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbi5maWx0ZXJzLmNvbmRpdGlvbkxpc3QoKTtcbiAgICB9XG5cbiAgICBnZXQgaXNVbmFyeUNvbmRpdGlvbigpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuZXhwcmVzc2lvbi5jb25kaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb24uY29uZGl0aW9uLmlzVW5hcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5leHByZXNzaW9uLmNvbmRpdGlvbiAmJiB0aGlzLmV4cHJlc3Npb24uY29uZGl0aW9uLmlzVW5hcnkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuZ2V0Q2hpcExhYmVsKHRoaXMuZXhwcmVzc2lvbik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb2x1bW4uZGF0YVR5cGUgPT09IERhdGFUeXBlLkRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuZ3JpZC5yZXNvdXJjZVN0cmluZ3MuaWd4X2dyaWRfZmlsdGVyX3Jvd19kYXRlX3BsYWNlaG9sZGVyO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29sdW1uLmRhdGFUeXBlID09PSBEYXRhVHlwZS5Cb29sZWFuKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLmdyaWQucmVzb3VyY2VTdHJpbmdzLmlneF9ncmlkX2ZpbHRlcl9yb3dfYm9vbGVhbl9wbGFjZWhvbGRlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuZ3JpZC5yZXNvdXJjZVN0cmluZ3MuaWd4X2dyaWRfZmlsdGVyX3Jvd19wbGFjZWhvbGRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIGtleWRvd24gb24gdGhlIGlucHV0IGdyb3VwJ3MgcHJlZml4LlxuICAgICAqL1xuICAgIHB1YmxpYyBvblByZWZpeEtleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKChldmVudC5rZXkgPT09IEtFWVMuRU5URVIgfHwgZXZlbnQua2V5ID09PSBLRVlTLlNQQUNFIHx8IGV2ZW50LmtleSA9PT0gS0VZUy5TUEFDRV9JRSkgJiYgdGhpcy5kcm9wRG93bkNvbmRpdGlvbnMuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbmRpdGlvbnNEcm9wRG93bih0aGlzLmlucHV0R3JvdXBQcmVmaXgubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09IEtFWVMuVEFCKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5kcm9wRG93bkNvbmRpdGlvbnMuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb25kaXRpb25zRHJvcERvd24odGhpcy5pbnB1dEdyb3VwUHJlZml4Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3Iga2V5ZG93biBvbiB0aGUgaW5wdXQuXG4gICAgICovXG4gICAgcHVibGljIG9uSW5wdXRLZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIHRoaXMuaXNLZXlQcmVzc2VkID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5jb2x1bW4uZGF0YVR5cGUgPT09IERhdGFUeXBlLkJvb2xlYW4pIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IEtFWVMuRU5URVIgfHwgZXZlbnQua2V5ID09PSBLRVlTLlNQQUNFIHx8IGV2ZW50LmtleSA9PT0gS0VZUy5TUEFDRV9JRSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRHcm91cFByZWZpeC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb25kaXRpb25zRHJvcERvd24odGhpcy5pbnB1dEdyb3VwUHJlZml4Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IEtFWVMuRU5URVIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb21taXRJbnB1dCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmFsdEtleSAmJiAoZXZlbnQua2V5ID09PSBLRVlTLkRPV05fQVJST1cgfHwgZXZlbnQua2V5ID09PSBLRVlTLkRPV05fQVJST1dfSUUpKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0R3JvdXBQcmVmaXgubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgdGhpcy50b2dnbGVDb25kaXRpb25zRHJvcERvd24odGhpcy5pbnB1dEdyb3VwUHJlZml4Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gS0VZUy5FU0NBUEUgfHwgZXZlbnQua2V5ID09PSBLRVlTLkVTQ0FQRV9JRSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBrZXl1cCBvbiB0aGUgaW5wdXQuXG4gICAgICovXG4gICAgcHVibGljIG9uSW5wdXRLZXlVcChldmVudEFyZ3MpIHtcbiAgICAgICAgdGhpcy5pc0tleVByZXNzZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBpbnB1dCBvbiB0aGUgaW5wdXQuXG4gICAgICovXG4gICAgcHVibGljIG9uSW5wdXQoZXZlbnRBcmdzKSB7XG4gICAgICAgIC8vIFRoZSAnaXNrZXlQcmVzc2VkJyBmbGFnIGlzIG5lZWRlZCBmb3IgYSBjYXNlIGluIElFLCBiZWNhdXNlIHRoZSBpbnB1dCBldmVudCBpcyBmaXJlZCBvbiBmb2N1cyBhbmQgZm9yIHNvbWUgcmVhc29uLFxuICAgICAgICAvLyB3aGVuIHlvdSBoYXZlIGEgamFwYW5lc2UgY2hhcmFjdGVyIGFzIGEgcGxhY2Vob2xkZXIsIG9uIGluaXQgdGhlIHZhbHVlIGhlcmUgaXMgZW1wdHkgc3RyaW5nIC5cbiAgICAgICAgaWYgKGlzRWRnZSgpIHx8IHRoaXMuaXNLZXlQcmVzc2VkIHx8IGV2ZW50QXJncy50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBldmVudEFyZ3MudGFyZ2V0LnZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgY29tcG9zaXRpb25zdGFydCBvbiB0aGUgaW5wdXQuXG4gICAgICovXG4gICAgcHVibGljIG9uQ29tcG9zaXRpb25TdGFydCgpIHtcbiAgICAgICAgdGhpcy5pc0NvbXBvc2luZyA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgY29tcG9zaXRpb25lbmQgb24gdGhlIGlucHV0LlxuICAgICAqL1xuICAgIHB1YmxpYyBvbkNvbXBvc2l0aW9uRW5kKCkge1xuICAgICAgICB0aGlzLmlzQ29tcG9zaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgaW5wdXQgY2xpY2sgZXZlbnQuXG4gICAgICovXG4gICAgcHVibGljIG9uSW5wdXRDbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29sdW1uLmRhdGFUeXBlID09PSBEYXRhVHlwZS5Cb29sZWFuICYmIHRoaXMuZHJvcERvd25Db25kaXRpb25zLmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dEdyb3VwUHJlZml4Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29uZGl0aW9uc0Ryb3BEb3duKHRoaXMuaW5wdXRHcm91cFByZWZpeC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIGRhdGVwaWNrZXIncyBjbG9zZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGF0ZVBpY2tlckNsb3NlKCkge1xuICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaWx0ZXJpbmcgb3BlcmF0aW9uIGNvbmRpdGlvbiBmb3IgYSBnaXZlbiB2YWx1ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Q29uZGl0aW9uKHZhbHVlOiBzdHJpbmcpOiBJRmlsdGVyaW5nT3BlcmF0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLmZpbHRlcnMuY29uZGl0aW9uKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0cmFuc2xhdGVkIGNvbmRpdGlvbiBuYW1lIGZvciBhIGdpdmVuIHZhbHVlLlxuICAgICAqL1xuICAgIHB1YmxpYyB0cmFuc2xhdGVDb25kaXRpb24odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuZ3JpZC5yZXNvdXJjZVN0cmluZ3NbYGlneF9ncmlkX2ZpbHRlcl8ke3RoaXMuZ2V0Q29uZGl0aW9uKHZhbHVlKS5uYW1lfWBdIHx8IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGljb24gbmFtZSBvZiB0aGUgY3VycmVudCBjb25kaXRpb24uXG4gICAgICovXG4gICAgcHVibGljIGdldEljb25OYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmNvbHVtbi5kYXRhVHlwZSA9PT0gRGF0YVR5cGUuQm9vbGVhbiAmJiB0aGlzLmV4cHJlc3Npb24uY29uZGl0aW9uID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDb25kaXRpb24odGhpcy5jb25kaXRpb25zWzBdKS5pY29uTmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb24uY29uZGl0aW9uLmljb25OYW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIGEgZ2l2ZW4gY29uZGl0aW9uIGlzIHNlbGVjdGVkIGluIGRyb3Bkb3duLlxuICAgICAqL1xuICAgIHB1YmxpYyBpc0NvbmRpdGlvblNlbGVjdGVkKGNvbmRpdGlvbk5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5leHByZXNzaW9uLmNvbmRpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbi5jb25kaXRpb24ubmFtZSA9PT0gY29uZGl0aW9uTmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgY3VycmVudCBmaWx0ZXJpbmcuXG4gICAgICovXG4gICAgcHVibGljIGNsZWFyRmlsdGVyaW5nKCkge1xuICAgICAgICB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuY2xlYXJGaWx0ZXIodGhpcy5jb2x1bW4uZmllbGQpO1xuICAgICAgICB0aGlzLnJlc2V0RXhwcmVzc2lvbigpO1xuICAgICAgICBpZiAodGhpcy5pbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgIHRoaXMuY2hpcEFyZWFTY3JvbGxPZmZzZXQgPSAwO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSh0aGlzLmNoaXBBcmVhU2Nyb2xsT2Zmc2V0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21taXRzIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQuXG4gICAgICovXG4gICAgcHVibGljIGNvbW1pdElucHV0KCkge1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdC5mb3JFYWNoKGV4ID0+IGV4LmlzU2VsZWN0ZWQgPSBmYWxzZSk7XG4gICAgICAgIHRoaXMuY2hpcHNBcmVhLmNoaXBzTGlzdC5mb3JFYWNoKGNoaXAgPT4gY2hpcC5zZWxlY3RlZCA9IGZhbHNlKTtcblxuICAgICAgICBsZXQgaW5kZXhUb0Rlc2VsZWN0ID0gLTE7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmV4cHJlc3Npb25zTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0aGlzLmV4cHJlc3Npb25zTGlzdFtpbmRleF0uZXhwcmVzc2lvbjtcbiAgICAgICAgICAgIGlmIChleHByZXNzaW9uLnNlYXJjaFZhbCA9PT0gbnVsbCAmJiAhZXhwcmVzc2lvbi5jb25kaXRpb24uaXNVbmFyeSkge1xuICAgICAgICAgICAgICAgIGluZGV4VG9EZXNlbGVjdCA9IGluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleFRvRGVzZWxlY3QgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV4cHJlc3Npb24oaW5kZXhUb0Rlc2VsZWN0LCB0aGlzLmV4cHJlc3Npb24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzZXRFeHByZXNzaW9uKCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQ2hpcHNXaGVuQWRkaW5nRXhwcmVzc2lvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgdmFsdWUgb2YgdGhlIGlucHV0LlxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhcklucHV0KCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBrZXlkb3duIG9uIGNsZWFyIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25DbGVhcktleURvd24oZXZlbnRBcmdzOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudEFyZ3Mua2V5ID09PSBLRVlTLkVOVEVSIHx8IGV2ZW50QXJncy5rZXkgPT09IEtFWVMuU1BBQ0UgfHwgZXZlbnRBcmdzLmtleSA9PT0gS0VZUy5TUEFDRV9JRSkge1xuICAgICAgICAgICAgZXZlbnRBcmdzLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgY2xpY2sgb24gY2xlYXIgYnV0dG9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBvbkNsZWFyQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBrZXlkb3duIG9uIGNvbW1pdCBidXR0b24uXG4gICAgICovXG4gICAgcHVibGljIG9uQ29tbWl0S2V5RG93bihldmVudEFyZ3M6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50QXJncy5rZXkgPT09IEtFWVMuRU5URVIgfHwgZXZlbnRBcmdzLmtleSA9PT0gS0VZUy5TUEFDRSB8fCBldmVudEFyZ3Mua2V5ID09PSBLRVlTLlNQQUNFX0lFKSB7XG4gICAgICAgICAgICBldmVudEFyZ3MucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuY29tbWl0SW5wdXQoKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgY2xpY2sgb24gY29tbWl0IGJ1dHRvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25Db21taXRDbGljaygpIHtcbiAgICAgICAgdGhpcy5jb21taXRJbnB1dCgpO1xuICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBmb2N1c291dCBvbiB0aGUgaW5wdXQgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIG9uSW5wdXRHcm91cEZvY3Vzb3V0KCkge1xuICAgICAgICBpZiAoIXRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZSAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb2N1c2VkRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoIShmb2N1c2VkRWxlbWVudCAmJiB0aGlzLmlucHV0R3JvdXAubmF0aXZlRWxlbWVudC5jb250YWlucyhmb2N1c2VkRWxlbWVudCkpICYmXG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wRG93bkNvbmRpdGlvbnMuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21taXRJbnB1dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIGZpbHRlcmluZyBlZGl0IHJvdy5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmV4cHJlc3Npb25zTGlzdC5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbnNMaXN0WzBdLmV4cHJlc3Npb24uc2VhcmNoVmFsID09PSBudWxsICYmXG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdFswXS5leHByZXNzaW9uLmNvbmRpdGlvbi5pc1VuYXJ5ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLmdldEV4cHJlc3Npb25zKHRoaXMuY29sdW1uLmZpZWxkKS5wb3AoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbnNMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5leHByZXNzaW9uLnNlYXJjaFZhbCA9PT0gbnVsbCAmJiAhaXRlbS5leHByZXNzaW9uLmNvbmRpdGlvbi5pc1VuYXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZS5yZW1vdmVFeHByZXNzaW9uKHRoaXMuY29sdW1uLmZpZWxkLCB0aGlzLmV4cHJlc3Npb25zTGlzdC5pbmRleE9mKGl0ZW0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZS5pc0ZpbHRlclJvd1Zpc2libGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmZpbHRlcmluZ1NlcnZpY2UudXBkYXRlRmlsdGVyaW5nQ2VsbCh0aGlzLmNvbHVtbik7XG4gICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZS5mb2N1c0ZpbHRlckNlbGxDaGlwKHRoaXMuY29sdW1uLCB0cnVlKTtcblxuICAgICAgICB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuZmlsdGVyZWRDb2x1bW4gPSBudWxsO1xuICAgICAgICB0aGlzLmZpbHRlcmluZ1NlcnZpY2Uuc2VsZWN0ZWRFeHByZXNzaW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgIHRoaXMuY2hpcEFyZWFTY3JvbGxPZmZzZXQgPSAwO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSh0aGlzLmNoaXBBcmVhU2Nyb2xsT2Zmc2V0KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICogbm9vcFxuICAgICovXG4gICAgcHVibGljIG5vb3AoKSB7fVxuXG4gICAgLyoqXG4gICAgICogIEV2ZW50IGhhbmRsZXIgZm9yIGRhdGUgcGlja2VyJ3Mgc2VsZWN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBvbkRhdGVTZWxlY3RlZCh2YWx1ZTogRGF0ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY29tbWl0SW5wdXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVucyB0aGUgY29uZGl0aW9ucyBkcm9wZG93bi5cbiAgICAgKi9cbiAgICBwdWJsaWMgdG9nZ2xlQ29uZGl0aW9uc0Ryb3BEb3duKHRhcmdldDogYW55KSB7XG4gICAgICAgIHRoaXMuX2NvbmRpdGlvbnNPdmVybGF5U2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5zZXR0aW5ncy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuZHJvcERvd25Db25kaXRpb25zLnRvZ2dsZSh0aGlzLl9jb25kaXRpb25zT3ZlcmxheVNldHRpbmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVucyB0aGUgbG9naWMgb3BlcmF0b3JzIGRyb3Bkb3duLlxuICAgICAqL1xuICAgIHB1YmxpYyB0b2dnbGVPcGVyYXRvcnNEcm9wRG93bihldmVudEFyZ3MsIGluZGV4KSB7XG4gICAgICAgIHRoaXMuX29wZXJhdG9yc092ZXJsYXlTZXR0aW5ncy5wb3NpdGlvblN0cmF0ZWd5LnNldHRpbmdzLnRhcmdldCA9IGV2ZW50QXJncy50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgdGhpcy5kcm9wRG93bk9wZXJhdG9ycy50b0FycmF5KClbaW5kZXhdLnRvZ2dsZSh0aGlzLl9vcGVyYXRvcnNPdmVybGF5U2V0dGluZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIGNoYW5nZSBldmVudCBpbiBjb25kaXRpb25zIGRyb3Bkb3duLlxuICAgICAqL1xuICAgIHB1YmxpYyBvbkNvbmRpdGlvbnNDaGFuZ2VkKGV2ZW50QXJncykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IChldmVudEFyZ3MubmV3U2VsZWN0aW9uIGFzIElneERyb3BEb3duSXRlbUNvbXBvbmVudCkudmFsdWU7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbi5jb25kaXRpb24gPSB0aGlzLmdldENvbmRpdGlvbih2YWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLmV4cHJlc3Npb24uY29uZGl0aW9uLmlzVW5hcnkpIHtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBncmlkJ3MgZmlsdGVyaW5nIG9uIHRoZSBuZXh0IGN5Y2xlIHRvIGVuc3VyZSB0aGUgZHJvcC1kb3duIGlzIGNsb3NlZFxuICAgICAgICAgICAgLy8gaWYgdGhlIGRyb3AtZG93biBpcyBub3QgY2xvc2VkIHRoaXMgZXZlbnQgaGFuZGxlciB3aWxsIGJlIGludm9rZWQgbXVsdGlwbGUgdGltZXNcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnVuYXJ5Q29uZGl0aW9uQ2hhbmdlZENhbGxiYWNrKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuY29uZGl0aW9uQ2hhbmdlZENhbGxiYWNrKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW5wdXQpIHtcbiAgICAgICAgICAgIC8vIEFkZCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgYmVjYXN1ZSBvZiBhbiBpc3N1ZSBpbiBJRSwgd2hlcmUgeW91IGFyZSBzdGlsbCBhYmxlIHRvIHdyaXRlIGluIHRoZSBpbnB1dCxcbiAgICAgICAgICAgIC8vIGlmIGl0IGhhcyBiZWVuIGZvY3VzZWQgYW5kIHRoZW4gc2V0IHRvIHJlYWRvbmx5LlxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcHVibGljIG9uQ2hpcFBvaW50ZXJkb3duKGFyZ3MsIGNoaXA6IElneENoaXBDb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuX2NhbmNlbENoaXBDbGljayA9IGNoaXAuc2VsZWN0ZWQgJiYgYWN0aXZlRWxlbWVudCAmJiB0aGlzLmlucHV0R3JvdXAubmF0aXZlRWxlbWVudC5jb250YWlucyhhY3RpdmVFbGVtZW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25DaGlwQ2xpY2soYXJncywgY2hpcDogSWd4Q2hpcENvbXBvbmVudCkge1xuICAgICAgICBpZiAodGhpcy5fY2FuY2VsQ2hpcENsaWNrKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jYW5jZWxDaGlwQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgY2hpcC5zZWxlY3RlZCA9ICFjaGlwLnNlbGVjdGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBFdmVudCBoYW5kbGVyIGZvciBjaGlwIHNlbGVjdGVkIGV2ZW50LlxuICAgICAqL1xuICAgIHB1YmxpYyBvbkNoaXBTZWxlY3RlZChldmVudEFyZ3M6IElDaGlwU2VsZWN0RXZlbnRBcmdzLCBleHByZXNzaW9uOiBJRmlsdGVyaW5nRXhwcmVzc2lvbikge1xuICAgICAgICBpZiAoZXZlbnRBcmdzLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGlwc0FyZWEuY2hpcHNMaXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlwc0FyZWEuY2hpcHNMaXN0LmZvckVhY2goKGNoaXApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaXAgIT09IGV2ZW50QXJncy5vd25lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpcC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZXhwcmVzc2lvbiA9PT0gZXhwcmVzc2lvbikge1xuICAgICAgICAgICAgdGhpcy5yZXNldEV4cHJlc3Npb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIGNoaXAga2V5ZG93biBldmVudC5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25DaGlwS2V5RG93bihldmVudEFyZ3M6IEtleWJvYXJkRXZlbnQsIGNoaXA6IElneENoaXBDb21wb25lbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50QXJncy5rZXkgPT09IEtFWVMuRU5URVIpIHtcbiAgICAgICAgICAgIGV2ZW50QXJncy5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2hpcC5zZWxlY3RlZCA9ICFjaGlwLnNlbGVjdGVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xscyB0aGUgZmlyc3QgY2hpcCBpbnRvIHZpZXcgaWYgdGhlIHRhYiBrZXkgaXMgcHJlc3NlZCBvbiB0aGUgbGVmdCBhcnJvdy5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25MZWZ0QXJyb3dLZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IEtFWVMuVEFCKSB7XG4gICAgICAgICAgICB0aGlzLmNoaXBBcmVhU2Nyb2xsT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKHRoaXMuY2hpcEFyZWFTY3JvbGxPZmZzZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgY2hpcCByZW1vdmVkIGV2ZW50LlxuICAgICAqL1xuICAgIHB1YmxpYyBvbkNoaXBSZW1vdmVkKGV2ZW50QXJnczogSUJhc2VDaGlwRXZlbnRBcmdzLCBpdGVtOiBFeHByZXNzaW9uVUkpIHtcbiAgICAgICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IHRoaXMuZXhwcmVzc2lvbnNMaXN0LmluZGV4T2YoaXRlbSk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXhwcmVzc2lvbihpbmRleFRvUmVtb3ZlLCBpdGVtLmV4cHJlc3Npb24pO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsQ2hpcHNPblJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIGxvZ2ljIG9wZXJhdG9yIGNoYW5nZWQgZXZlbnQuXG4gICAgICovXG4gICAgcHVibGljIG9uTG9naWNPcGVyYXRvckNoYW5nZWQoZXZlbnRBcmdzOiBJU2VsZWN0aW9uRXZlbnRBcmdzLCBleHByZXNzaW9uOiBFeHByZXNzaW9uVUkpIHtcbiAgICAgICAgaWYgKGV2ZW50QXJncy5vbGRTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGV4cHJlc3Npb24uYWZ0ZXJPcGVyYXRvciA9IChldmVudEFyZ3MubmV3U2VsZWN0aW9uIGFzIElneERyb3BEb3duSXRlbUNvbXBvbmVudCkudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdFt0aGlzLmV4cHJlc3Npb25zTGlzdC5pbmRleE9mKGV4cHJlc3Npb24pICsgMV0uYmVmb3JlT3BlcmF0b3IgPSBleHByZXNzaW9uLmFmdGVyT3BlcmF0b3I7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBncmlkJ3MgZmlsdGVyaW5nIG9uIHRoZSBuZXh0IGN5Y2xlIHRvIGVuc3VyZSB0aGUgZHJvcC1kb3duIGlzIGNsb3NlZFxuICAgICAgICAgICAgLy8gaWYgdGhlIGRyb3AtZG93biBpcyBub3QgY2xvc2VkIHRoaXMgZXZlbnQgaGFuZGxlciB3aWxsIGJlIGludm9rZWQgbXVsdGlwbGUgdGltZXNcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmZpbHRlcigpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbHMgdGhlIGNoaXBzIGludG8gdGhlIGNoaXAgYXJlYSB3aGVuIGxlZnQgb3IgcmlnaHQgYXJyb3dzIGFyZSBwcmVzc2VkLlxuICAgICAqL1xuICAgIHB1YmxpYyBzY3JvbGxDaGlwc09uQXJyb3dQcmVzcyhhcnJvd1Bvc2l0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgY29uc3QgY2hpcEFyYWVDaGlsZHJlbiA9IHRoaXMuY2hpcHNBcmVhLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlbjtcbiAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgaWYgKGFycm93UG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaGlwQXJhZUNoaWxkcmVuLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmNlaWwoY2hpcEFyYWVDaGlsZHJlbltpbmRleF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQpIDwgTWF0aC5jZWlsKGNvbnRhaW5lclJlY3QucmlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY291bnQgPCBjaGlwQXJhZUNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpcEFyZWFTY3JvbGxPZmZzZXQgLT0gTWF0aC5jZWlsKGNoaXBBcmFlQ2hpbGRyZW5bY291bnRdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnJpZ2h0KSAtXG4gICAgICAgICAgICAgICAgICAgIE1hdGguY2VpbChjb250YWluZXJSZWN0LnJpZ2h0KSArIDE7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0odGhpcy5jaGlwQXJlYVNjcm9sbE9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXJyb3dQb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2hpcEFyYWVDaGlsZHJlbi5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5jZWlsKGNoaXBBcmFlQ2hpbGRyZW5baW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpIDwgTWF0aC5jZWlsKGNvbnRhaW5lclJlY3QubGVmdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaXBBcmVhU2Nyb2xsT2Zmc2V0ICs9IE1hdGguY2VpbChjb250YWluZXJSZWN0LmxlZnQpIC1cbiAgICAgICAgICAgICAgICAgICAgTWF0aC5jZWlsKGNoaXBBcmFlQ2hpbGRyZW5bY291bnQgLSAxXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSArIDE7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0odGhpcy5jaGlwQXJlYVNjcm9sbE9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dIaWRlQXJyb3dCdXR0b25zKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyaW5nU2VydmljZS5pc0ZpbHRlclJvd1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlwc0FyZWFXaWR0aCA9IHRoaXMuY2hpcHNBcmVhLmVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Fycm93cyA9IHRoaXMuY2hpcHNBcmVhV2lkdGggPj0gY29udGFpbmVyV2lkdGggJiYgdGhpcy5pc0NvbHVtbkZpbHRlcmVkO1xuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogcmV2aXNlIHRoZSBjZHIuZGV0ZWN0Q2hhbmdlcygpIHVzYWdlIGhlcmVcbiAgICAgICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgdHJhbnNmb3JtVmFsdWUodmFsdWUpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy5jb2x1bW4uZGF0YVR5cGUgPT09IERhdGFUeXBlLk51bWJlcikge1xuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbHVtbi5kYXRhVHlwZSA9PT0gRGF0YVR5cGUuQm9vbGVhbikge1xuICAgICAgICAgICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEV4cHJlc3Npb24oaXNTZWxlY3RlZDogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBleHByVUkgPSBuZXcgRXhwcmVzc2lvblVJKCk7XG4gICAgICAgIGV4cHJVSS5leHByZXNzaW9uID0gdGhpcy5leHByZXNzaW9uO1xuICAgICAgICBleHByVUkuYmVmb3JlT3BlcmF0b3IgPSB0aGlzLmV4cHJlc3Npb25zTGlzdC5sZW5ndGggPiAwID8gRmlsdGVyaW5nTG9naWMuQW5kIDogbnVsbDtcbiAgICAgICAgZXhwclVJLmlzU2VsZWN0ZWQgPSBpc1NlbGVjdGVkO1xuXG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnNMaXN0LnB1c2goZXhwclVJKTtcblxuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmV4cHJlc3Npb25zTGlzdC5sZW5ndGg7XG4gICAgICAgIGlmICh0aGlzLmV4cHJlc3Npb25zTGlzdFtsZW5ndGggLSAyXSkge1xuICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uc0xpc3RbbGVuZ3RoIC0gMl0uYWZ0ZXJPcGVyYXRvciA9IHRoaXMuZXhwcmVzc2lvbnNMaXN0W2xlbmd0aCAtIDFdLmJlZm9yZU9wZXJhdG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaG93SGlkZUFycm93QnV0dG9ucygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlRXhwcmVzc2lvbihpbmRleFRvUmVtb3ZlOiBudW1iZXIsIGV4cHJlc3Npb246IElGaWx0ZXJpbmdFeHByZXNzaW9uKSB7XG4gICAgICAgIGlmIChpbmRleFRvUmVtb3ZlID09PSAwICYmIHRoaXMuZXhwcmVzc2lvbnNMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5jbGVhckZpbHRlcmluZygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLnJlbW92ZUV4cHJlc3Npb24odGhpcy5jb2x1bW4uZmllbGQsIGluZGV4VG9SZW1vdmUpO1xuXG4gICAgICAgIHRoaXMuZmlsdGVyKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZXhwcmVzc2lvbiA9PT0gZXhwcmVzc2lvbikge1xuICAgICAgICAgICAgdGhpcy5yZXNldEV4cHJlc3Npb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hvd0hpZGVBcnJvd0J1dHRvbnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0RXhwcmVzc2lvbigpIHtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0ge1xuICAgICAgICAgICAgZmllbGROYW1lOiB0aGlzLmNvbHVtbi5maWVsZCxcbiAgICAgICAgICAgIGNvbmRpdGlvbjogbnVsbCxcbiAgICAgICAgICAgIHNlYXJjaFZhbDogbnVsbCxcbiAgICAgICAgICAgIGlnbm9yZUNhc2U6IHRoaXMuY29sdW1uLmZpbHRlcmluZ0lnbm9yZUNhc2VcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5jb2x1bW4uZGF0YVR5cGUgIT09IERhdGFUeXBlLkJvb2xlYW4pIHtcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbi5jb25kaXRpb24gPSB0aGlzLmdldENvbmRpdGlvbih0aGlzLmNvbmRpdGlvbnNbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29sdW1uLmRhdGFUeXBlID09PSBEYXRhVHlwZS5EYXRlICYmIHRoaXMuaW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3dIaWRlQXJyb3dCdXR0b25zKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzY3JvbGxDaGlwc1doZW5BZGRpbmdFeHByZXNzaW9uKCkge1xuICAgICAgICBjb25zdCBjaGlwQXJhZUNoaWxkcmVuID0gdGhpcy5jaGlwc0FyZWEuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuO1xuICAgICAgICBpZiAoIWNoaXBBcmFlQ2hpbGRyZW4gfHwgY2hpcEFyYWVDaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3RSaWdodCA9IE1hdGguY2VpbCh0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnJpZ2h0KTtcblxuICAgICAgICBjb25zdCBsYXN0Q2hpcFJlY3RSaWdodCA9IE1hdGguY2VpbChjaGlwQXJhZUNoaWxkcmVuW2NoaXBBcmFlQ2hpbGRyZW4ubGVuZ3RoIC0gMV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQpO1xuICAgICAgICBpZiAobGFzdENoaXBSZWN0UmlnaHQgPj0gY29udGFpbmVyUmVjdFJpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmNoaXBBcmVhU2Nyb2xsT2Zmc2V0IC09IGxhc3RDaGlwUmVjdFJpZ2h0IC0gY29udGFpbmVyUmVjdFJpZ2h0O1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0odGhpcy5jaGlwQXJlYVNjcm9sbE9mZnNldCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogUmVzZXRzIHRoZSBjaGlwcyBhcmVhXG4gICAgICogQG1lbWJlcm9mIElneEdyaWRGaWx0ZXJpbmdSb3dDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzZXRDaGlwc0FyZWEoKSB7XG4gICAgICAgIHRoaXMuY2hpcEFyZWFTY3JvbGxPZmZzZXQgPSAwO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSh0aGlzLmNoaXBBcmVhU2Nyb2xsT2Zmc2V0KTtcbiAgICAgICAgdGhpcy5zaG93SGlkZUFycm93QnV0dG9ucygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdHJhbnNmb3JtKG9mZnNldDogbnVtYmVyKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoaXBzQXJlYS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke29mZnNldH1weClgO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNjcm9sbENoaXBzT25SZW1vdmUoKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGNvbnN0IGNoaXBBcmFlQ2hpbGRyZW4gPSB0aGlzLmNoaXBzQXJlYS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW47XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaGlwQXJhZUNoaWxkcmVuLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKE1hdGguY2VpbChjaGlwQXJhZUNoaWxkcmVuW2luZGV4XS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSA8IE1hdGguY2VpbChjb250YWluZXJSZWN0LmxlZnQpKSB7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb3VudCA8PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmNoaXBBcmVhU2Nyb2xsT2Zmc2V0ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRpZiA9IGNoaXBBcmFlQ2hpbGRyZW5bY291bnRdLmlkID09PSAnY2hpcCcgPyBjb3VudCAtIDIgOiBjb3VudCAtIDE7XG4gICAgICAgICAgICB0aGlzLmNoaXBBcmVhU2Nyb2xsT2Zmc2V0ICs9IE1hdGguY2VpbChjb250YWluZXJSZWN0LmxlZnQpIC0gTWF0aC5jZWlsKGNoaXBBcmFlQ2hpbGRyZW5bZGlmXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSArIDE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyYW5zZm9ybSh0aGlzLmNoaXBBcmVhU2Nyb2xsT2Zmc2V0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbmRpdGlvbkNoYW5nZWRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKCEhdGhpcy5leHByZXNzaW9uLnNlYXJjaFZhbCB8fCB0aGlzLmV4cHJlc3Npb24uc2VhcmNoVmFsID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1bmFyeUNvbmRpdGlvbkNoYW5nZWRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmV4cHJlc3Npb25zTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5leHByZXNzaW9uID09PSB0aGlzLmV4cHJlc3Npb24pID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXhwcmVzc2lvbih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbHRlcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmlsdGVyKCkge1xuICAgICAgICB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuZmlsdGVySW50ZXJuYWwodGhpcy5jb2x1bW4uZmllbGQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IGlzQ29sdW1uRmlsdGVyZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbi5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUgJiYgdGhpcy5jb2x1bW4uZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlLmZpbHRlcmluZ09wZXJhbmRzLmxlbmd0aCA+IDA7XG4gICAgfVxufVxuIl19