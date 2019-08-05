/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ViewChild, HostBinding, ChangeDetectionStrategy, TemplateRef, Directive, ElementRef } from '@angular/core';
import { HorizontalAlignment, VerticalAlignment, ConnectedPositioningStrategy, AbsoluteScrollStrategy } from '../../../services/index';
import { IgxStringFilteringOperand, IgxNumberFilteringOperand, IgxBooleanFilteringOperand, IgxDateFilteringOperand } from '../../../data-operations/filtering-condition';
import { FilteringExpressionsTree } from '../../../data-operations/filtering-expressions-tree';
import { FilteringLogic } from '../../../data-operations/filtering-expression.interface';
import { cloneArray } from '../../../core/utils';
import { DataType, DataUtil } from '../../../data-operations/data-util';
import { IgxExcelStyleSearchComponent } from './excel-style-search.component';
import { IgxExcelStyleCustomDialogComponent } from './excel-style-custom-dialog.component';
import { Subscription, Subject } from 'rxjs';
import { IgxExcelStyleSortingComponent } from './excel-style-sorting.component';
import { takeUntil } from 'rxjs/operators';
import { IgxDropDownComponent } from '../../../drop-down';
/**
 * @hidden
 */
export class FilterListItem {
    constructor() {
        this.isSpecial = false;
    }
}
if (false) {
    /** @type {?} */
    FilterListItem.prototype.value;
    /** @type {?} */
    FilterListItem.prototype.label;
    /** @type {?} */
    FilterListItem.prototype.isSelected;
    /** @type {?} */
    FilterListItem.prototype.indeterminate;
    /** @type {?} */
    FilterListItem.prototype.isSpecial;
}
export class IgxExcelStyleSortingTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
IgxExcelStyleSortingTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxExcelStyleSortingTemplate]'
            },] }
];
/** @nocollapse */
IgxExcelStyleSortingTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    IgxExcelStyleSortingTemplateDirective.prototype.template;
}
export class IgxExcelStyleMovingTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
IgxExcelStyleMovingTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxExcelStyleMovingTemplate]'
            },] }
];
/** @nocollapse */
IgxExcelStyleMovingTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    IgxExcelStyleMovingTemplateDirective.prototype.template;
}
export class IgxExcelStyleHidingTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
IgxExcelStyleHidingTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxExcelStyleHidingTemplate]'
            },] }
];
/** @nocollapse */
IgxExcelStyleHidingTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    IgxExcelStyleHidingTemplateDirective.prototype.template;
}
export class IgxExcelStylePinningTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
IgxExcelStylePinningTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxExcelStylePinningTemplate]'
            },] }
];
/** @nocollapse */
IgxExcelStylePinningTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    IgxExcelStylePinningTemplateDirective.prototype.template;
}
/**
 * @hidden
 */
export class IgxGridExcelStyleFilteringComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.shouldOpenSubMenu = true;
        this.expressionsList = new Array();
        this.destroy$ = new Subject();
        this.containsNullOrEmpty = false;
        this.selectAllSelected = true;
        this.selectAllIndeterminate = false;
        this.filterValues = new Set();
        this.columnMoving = new Subscription();
        this.listData = new Array();
        this.uniqueValues = [];
        this._subMenuPositionSettings = {
            verticalStartPoint: VerticalAlignment.Top
        };
        this._subMenuOverlaySettings = {
            closeOnOutsideClick: true,
            modal: false,
            positionStrategy: new ConnectedPositioningStrategy(this._subMenuPositionSettings),
            scrollStrategy: new AbsoluteScrollStrategy()
        };
        this.className = 'igx-excel-filter';
    }
    /**
     * @return {?}
     */
    get grid() {
        return this.filteringService.grid;
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
    get subMenuText() {
        switch (this.column.dataType) {
            case DataType.Boolean:
                return this.grid.resourceStrings.igx_grid_excel_boolean_filter;
            case DataType.Number:
                return this.grid.resourceStrings.igx_grid_excel_number_filter;
            case DataType.Date:
                return this.grid.resourceStrings.igx_grid_excel_date_filter;
            default:
                return this.grid.resourceStrings.igx_grid_excel_text_filter;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.expressionsList = new Array();
        this.filteringService.generateExpressionsList(this.column.filteringExpressionsTree, this.grid.filteringLogic, this.expressionsList);
        if (this.expressionsList && this.expressionsList.length &&
            this.expressionsList[0].expression.condition.name !== 'in') {
            this.customDialog.expressionsList = this.expressionsList;
        }
        this.populateColumnData();
        if (this.excelStyleSorting) {
            /** @type {?} */
            const se = this.grid.sortingExpressions.find(expr => expr.fieldName === this.column.field);
            if (se) {
                this.excelStyleSorting.selectButton(se.dir);
            }
        }
        requestAnimationFrame(() => {
            this.excelStyleSearch.searchInput.nativeElement.focus();
        });
    }
    /**
     * @return {?}
     */
    clearFilterClass() {
        if (this.column.filteringExpressionsTree) {
            return 'igx-excel-filter__actions-clear';
        }
        return 'igx-excel-filter__actions-clear--disabled';
    }
    /**
     * @param {?} column
     * @param {?} filteringService
     * @param {?} overlayService
     * @param {?} overlayComponentId
     * @return {?}
     */
    initialize(column, filteringService, overlayService, overlayComponentId) {
        this.column = column;
        this.filteringService = filteringService;
        this.overlayService = overlayService;
        this.overlayComponentId = overlayComponentId;
        this._subMenuOverlaySettings.outlet = this.grid.outlet;
        this.columnMoving = this.grid.onColumnMoving.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.closeDropdown();
        });
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
        return this.grid.resourceStrings[`igx_grid_filter_${this.getCondition(value).name}`] || value;
    }
    /**
     * @return {?}
     */
    onPin() {
        this.column.pinned = !this.column.pinned;
        this.closeDropdown();
    }
    /**
     * @return {?}
     */
    onHide() {
        this.column.hidden = true;
        this.grid.onColumnVisibilityChanged.emit({ column: this.column, newValue: true });
        this.closeDropdown();
    }
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    onTextFilterClick(eventArgs) {
        if (this.shouldOpenSubMenu) {
            this._subMenuOverlaySettings.positionStrategy.settings.target = eventArgs.currentTarget;
            /** @type {?} */
            const gridRect = this.grid.nativeElement.getBoundingClientRect();
            /** @type {?} */
            const dropdownRect = this.mainDropdown.nativeElement.getBoundingClientRect();
            /** @type {?} */
            let x = dropdownRect.left + dropdownRect.width;
            /** @type {?} */
            let x1 = gridRect.left + gridRect.width;
            x += window.pageXOffset;
            x1 += window.pageXOffset;
            if (Math.abs(x - x1) < 200) {
                this._subMenuOverlaySettings.positionStrategy.settings.horizontalDirection = HorizontalAlignment.Left;
                this._subMenuOverlaySettings.positionStrategy.settings.horizontalStartPoint = HorizontalAlignment.Left;
            }
            else {
                this._subMenuOverlaySettings.positionStrategy.settings.horizontalDirection = HorizontalAlignment.Right;
                this._subMenuOverlaySettings.positionStrategy.settings.horizontalStartPoint = HorizontalAlignment.Right;
            }
            this.subMenu.open(this._subMenuOverlaySettings);
            this.shouldOpenSubMenu = false;
        }
    }
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    onTextFilterKeyDown(eventArgs) {
        if (eventArgs.key === "Enter" /* ENTER */) {
            this.onTextFilterClick(eventArgs);
        }
    }
    /**
     * @return {?}
     */
    onSubMenuClosed() {
        requestAnimationFrame(() => {
            this.shouldOpenSubMenu = true;
        });
    }
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    onSubMenuSelection(eventArgs) {
        this.customDialog.selectedOperator = eventArgs.newSelection.value;
        eventArgs.cancel = true;
        this.mainDropdown.nativeElement.style.display = 'none';
        this.subMenu.close();
        this.customDialog.open();
    }
    /**
     * @private
     * @return {?}
     */
    areExpressionsSelectable() {
        if (this.expressionsList.length === 1 &&
            (this.expressionsList[0].expression.condition.name === 'equals' ||
                this.expressionsList[0].expression.condition.name === 'true' ||
                this.expressionsList[0].expression.condition.name === 'false' ||
                this.expressionsList[0].expression.condition.name === 'empty' ||
                this.expressionsList[0].expression.condition.name === 'in')) {
            return true;
        }
        /** @type {?} */
        const selectableExpressionsCount = this.expressionsList.filter(exp => (exp.beforeOperator === 1 || exp.afterOperator === 1) &&
            (exp.expression.condition.name === 'equals' ||
                exp.expression.condition.name === 'true' ||
                exp.expression.condition.name === 'false' ||
                exp.expression.condition.name === 'empty' ||
                exp.expression.condition.name === 'in')).length;
        return selectableExpressionsCount === this.expressionsList.length;
    }
    /**
     * @private
     * @return {?}
     */
    areExpressionsValuesInTheList() {
        if (this.column.dataType === DataType.Boolean) {
            return true;
        }
        if (this.filterValues.size === 1) {
            /** @type {?} */
            const firstValue = this.filterValues.values().next().value;
            if (!firstValue && firstValue !== 0) {
                return true;
            }
        }
        for (let index = 0; index < this.uniqueValues.length; index++) {
            if (this.filterValues.has(this.uniqueValues[index])) {
                return true;
            }
        }
        return false;
    }
    /**
     * @return {?}
     */
    populateColumnData() {
        /** @type {?} */
        let data = this.column.gridAPI.get_all_data(this.grid.id);
        /** @type {?} */
        const gridExpressionsTree = this.grid.filteringExpressionsTree;
        /** @type {?} */
        const expressionsTree = new FilteringExpressionsTree(gridExpressionsTree.operator, gridExpressionsTree.fieldName);
        for (const operand of gridExpressionsTree.filteringOperands) {
            if (operand instanceof FilteringExpressionsTree) {
                /** @type {?} */
                const columnExprTree = (/** @type {?} */ (operand));
                if (columnExprTree.fieldName === this.column.field) {
                    break;
                }
            }
            expressionsTree.filteringOperands.push(operand);
        }
        if (expressionsTree.filteringOperands.length) {
            /** @type {?} */
            const state = { expressionsTree: expressionsTree };
            data = DataUtil.filter(cloneArray(data), state);
        }
        if (this.column.dataType === DataType.Date) {
            this.uniqueValues = Array.from(new Set(data.map(record => record[this.column.field] ? record[this.column.field].toDateString() : record[this.column.field])));
            this.filterValues = new Set(this.expressionsList.reduce((arr, e) => {
                if (e.expression.condition.name === 'in') {
                    return [...arr, ...Array.from(((/** @type {?} */ (e.expression.searchVal))).values()).map(v => new Date(v).toDateString())];
                }
                return [...arr, ...[e.expression.searchVal ? e.expression.searchVal.toDateString() : e.expression.searchVal]];
            }, []));
        }
        else {
            this.uniqueValues = Array.from(new Set(data.map(record => record[this.column.field])));
            this.filterValues = new Set(this.expressionsList.reduce((arr, e) => {
                if (e.expression.condition.name === 'in') {
                    return [...arr, ...Array.from(((/** @type {?} */ (e.expression.searchVal))).values())];
                }
                return [...arr, ...[e.expression.searchVal]];
            }, []));
        }
        this.listData = new Array();
        /** @type {?} */
        const shouldUpdateSelection = this.areExpressionsSelectable() && this.areExpressionsValuesInTheList();
        if (this.column.dataType === DataType.Boolean) {
            this.addBooleanItems();
        }
        else {
            this.addItems(shouldUpdateSelection);
        }
        this.listData.sort((a, b) => this.sortData(a, b));
        if (this.column.dataType === DataType.Date) {
            this.uniqueValues = this.uniqueValues.map(value => new Date(value));
        }
        if (this.containsNullOrEmpty) {
            this.addBlanksItem(shouldUpdateSelection);
        }
        this.addSelectAllItem();
        this.cdr.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    addBooleanItems() {
        this.selectAllSelected = true;
        this.selectAllIndeterminate = false;
        this.uniqueValues.forEach(element => {
            /** @type {?} */
            const filterListItem = new FilterListItem();
            if (element !== undefined && element !== null && element !== '') {
                if (this.column.filteringExpressionsTree) {
                    if (element === true && this.expressionsList.find(exp => exp.expression.condition.name === 'true')) {
                        filterListItem.isSelected = true;
                        this.selectAllIndeterminate = true;
                    }
                    else if (element === false && this.expressionsList.find(exp => exp.expression.condition.name === 'false')) {
                        filterListItem.isSelected = true;
                        this.selectAllIndeterminate = true;
                    }
                    else {
                        filterListItem.isSelected = false;
                    }
                }
                else {
                    filterListItem.isSelected = true;
                }
                filterListItem.value = element;
                filterListItem.label = element;
                filterListItem.indeterminate = false;
                this.listData.push(filterListItem);
            }
            else {
                this.containsNullOrEmpty = true;
            }
        });
    }
    /**
     * @private
     * @param {?} shouldUpdateSelection
     * @return {?}
     */
    addItems(shouldUpdateSelection) {
        this.selectAllSelected = true;
        this.selectAllIndeterminate = false;
        this.uniqueValues.forEach(element => {
            if (element !== undefined && element !== null && element !== '') {
                /** @type {?} */
                const filterListItem = new FilterListItem();
                if (this.column.filteringExpressionsTree) {
                    if (shouldUpdateSelection) {
                        if (this.filterValues.has(element)) {
                            filterListItem.isSelected = true;
                        }
                        else {
                            filterListItem.isSelected = false;
                        }
                        this.selectAllIndeterminate = true;
                    }
                    else {
                        filterListItem.isSelected = false;
                        this.selectAllSelected = false;
                    }
                }
                else {
                    filterListItem.isSelected = true;
                }
                if (this.column.dataType === DataType.Date) {
                    filterListItem.value = new Date(element);
                    filterListItem.label = new Date(element);
                }
                else {
                    filterListItem.value = element;
                    filterListItem.label = element;
                }
                filterListItem.indeterminate = false;
                this.listData.push(filterListItem);
            }
            else {
                this.containsNullOrEmpty = true;
            }
        });
    }
    /**
     * @private
     * @return {?}
     */
    addSelectAllItem() {
        /** @type {?} */
        const selectAll = new FilterListItem();
        selectAll.isSelected = this.selectAllSelected;
        selectAll.value = this.grid.resourceStrings.igx_grid_excel_select_all;
        selectAll.label = this.grid.resourceStrings.igx_grid_excel_select_all;
        selectAll.indeterminate = this.selectAllIndeterminate;
        selectAll.isSpecial = true;
        this.listData.unshift(selectAll);
    }
    /**
     * @private
     * @param {?} shouldUpdateSelection
     * @return {?}
     */
    addBlanksItem(shouldUpdateSelection) {
        /** @type {?} */
        const blanks = new FilterListItem();
        if (this.column.filteringExpressionsTree) {
            if (shouldUpdateSelection) {
                if (this.filterValues.has(null)) {
                    blanks.isSelected = true;
                }
                else {
                    blanks.isSelected = false;
                }
            }
        }
        else {
            blanks.isSelected = true;
        }
        blanks.value = null;
        blanks.label = this.grid.resourceStrings.igx_grid_excel_blanks;
        blanks.indeterminate = false;
        blanks.isSpecial = true;
        this.listData.unshift(blanks);
    }
    /**
     * @private
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    sortData(a, b) {
        /** @type {?} */
        let valueA = a.value;
        /** @type {?} */
        let valueB = b.value;
        if (typeof (a) === DataType.String) {
            valueA = a.value.toUpperCase();
            valueB = b.value.toUpperCase();
        }
        if (valueA < valueB) {
            return -1;
        }
        else if (valueA > valueB) {
            return 1;
        }
        else {
            return 0;
        }
    }
    // TODO: sort members by access modifier
    /**
     * @return {?}
     */
    get sortingTemplate() {
        if (this.grid.excelStyleSortingTemplateDirective) {
            return this.grid.excelStyleSortingTemplateDirective.template;
        }
        else {
            return this.defaultExcelStyleSortingTemplate;
        }
    }
    /**
     * @return {?}
     */
    get movingTemplate() {
        if (this.grid.excelStyleMovingTemplateDirective) {
            return this.grid.excelStyleMovingTemplateDirective.template;
        }
        else {
            return this.defaultExcelStyleMovingTemplate;
        }
    }
    /**
     * @return {?}
     */
    get pinningTemplate() {
        if (this.grid.excelStylePinningTemplateDirective) {
            return this.grid.excelStylePinningTemplateDirective.template;
        }
        else {
            return this.defaultExcelStylePinningTemplate;
        }
    }
    /**
     * @return {?}
     */
    get hidingTemplate() {
        if (this.grid.excelStyleHidingTemplateDirective) {
            return this.grid.excelStyleHidingTemplateDirective.template;
        }
        else {
            return this.defaultExcelStyleHidingTemplate;
        }
    }
    /**
     * @return {?}
     */
    get applyButtonDisabled() {
        return this.listData[0] && !this.listData[0].isSelected && !this.listData[0].indeterminate;
    }
    /**
     * @return {?}
     */
    applyFilter() {
        /** @type {?} */
        const filterTree = new FilteringExpressionsTree(FilteringLogic.Or, this.column.field);
        /** @type {?} */
        const selectedItems = this.listData.slice(1, this.listData.length).filter(el => el.isSelected === true);
        /** @type {?} */
        const unselectedItem = this.listData.slice(1, this.listData.length).find(el => el.isSelected === false);
        if (unselectedItem) {
            if (selectedItems.length <= IgxGridExcelStyleFilteringComponent.filterOptimizationThreshold) {
                selectedItems.forEach(element => {
                    /** @type {?} */
                    let condition = null;
                    if (element.value !== null && element.value !== undefined) {
                        if (this.column.dataType === DataType.Boolean) {
                            condition = this.createCondition(element.value.toString());
                        }
                        else {
                            condition = this.createCondition('equals');
                        }
                    }
                    else {
                        condition = this.createCondition('empty');
                    }
                    filterTree.filteringOperands.push({
                        condition: condition,
                        fieldName: this.column.field,
                        ignoreCase: this.column.filteringIgnoreCase,
                        searchVal: element.value
                    });
                });
            }
            else {
                /** @type {?} */
                const blanksItemIndex = selectedItems.findIndex(e => e.value === null || e.value === undefined);
                /** @type {?} */
                let blanksItem;
                if (blanksItemIndex >= 0) {
                    blanksItem = selectedItems[blanksItemIndex];
                    selectedItems.splice(blanksItemIndex, 1);
                }
                filterTree.filteringOperands.push({
                    condition: this.createCondition('in'),
                    fieldName: this.column.field,
                    ignoreCase: this.column.filteringIgnoreCase,
                    searchVal: new Set(this.column.dataType === DataType.Date ?
                        selectedItems.map(d => new Date(d.value.getFullYear(), d.value.getMonth(), d.value.getDate()).toISOString()) :
                        selectedItems.map(e => e.value))
                });
                if (blanksItem) {
                    filterTree.filteringOperands.push({
                        condition: this.createCondition('empty'),
                        fieldName: this.column.field,
                        ignoreCase: this.column.filteringIgnoreCase,
                        searchVal: blanksItem.value
                    });
                }
            }
            this.expressionsList = new Array();
            this.filteringService.filterInternal(this.column.field, filterTree);
        }
        else {
            this.filteringService.clearFilter(this.column.field);
        }
        this.closeDropdown();
    }
    /**
     * @return {?}
     */
    closeDropdown() {
        if (this.overlayComponentId) {
            this.overlayService.hide(this.overlayComponentId);
            this.overlayComponentId = null;
        }
    }
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    onKeyDown(eventArgs) {
        if (eventArgs.key === "Escape" /* ESCAPE */ || eventArgs.key === "Esc" /* ESCAPE_IE */) {
            this.closeDropdown();
        }
        eventArgs.stopPropagation();
    }
    /**
     * @return {?}
     */
    clearFilter() {
        this.filteringService.clearFilter(this.column.field);
        this.populateColumnData();
    }
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    onClearFilterKeyDown(eventArgs) {
        if (eventArgs.key === "Enter" /* ENTER */) {
            this.clearFilter();
        }
    }
    /**
     * @return {?}
     */
    showCustomFilterItem() {
        /** @type {?} */
        const exprTree = this.column.filteringExpressionsTree;
        return exprTree && exprTree.filteringOperands && exprTree.filteringOperands.length &&
            !(((/** @type {?} */ (exprTree.filteringOperands[0]))).condition &&
                ((/** @type {?} */ (exprTree.filteringOperands[0]))).condition.name === 'in');
    }
    /**
     * @private
     * @param {?} conditionName
     * @return {?}
     */
    createCondition(conditionName) {
        switch (this.column.dataType) {
            case DataType.Boolean:
                return IgxBooleanFilteringOperand.instance().condition(conditionName);
            case DataType.Number:
                return IgxNumberFilteringOperand.instance().condition(conditionName);
            case DataType.Date:
                return IgxDateFilteringOperand.instance().condition(conditionName);
            default:
                return IgxStringFilteringOperand.instance().condition(conditionName);
        }
    }
}
IgxGridExcelStyleFilteringComponent.filterOptimizationThreshold = 2;
IgxGridExcelStyleFilteringComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'igx-grid-excel-style-filtering',
                template: "<article #dropdown\n    class=\"igx-excel-filter__menu\"\n    [ngClass]=\"{\n        'igx-excel-filter__menu--cosy': grid.displayDensity === 'cosy',\n        'igx-excel-filter__menu--compact': grid.displayDensity === 'compact'\n    }\"\n    [id]=\"overlayComponentId\"\n    (keydown)=\"onKeyDown($event)\">\n\n    <header class=\"igx-excel-filter__menu-header\">\n        <h4>{{ column.header || column.field }}</h4>\n        <div *ngIf=\"grid.displayDensity!=='comfortable'\" class=\"igx-excel-filter__menu-header-actions\">\n            <button *ngIf=\"!column.disablePinning && !column.pinned\"\n                igxButton=\"icon\"\n                [displayDensity]=\"grid.displayDensity\"\n                (click)=\"onPin()\"\n                tabindex=\"0\">\n                <igx-icon fontSet=\"filtering-icons\" name=\"pin\"></igx-icon>\n            </button>\n            <button *ngIf=\"!column.disablePinning && column.pinned\"\n                igxButton=\"icon\"\n                [displayDensity]=\"grid.displayDensity\"\n                (click)=\"onPin()\"\n                tabindex=\"0\">\n                <igx-icon fontSet=\"filtering-icons\" name=\"unpin\"></igx-icon>\n            </button>\n            <button *ngIf=\"!column.disableHiding\"\n                igxButton=\"icon\"\n                [displayDensity]=\"grid.displayDensity\"\n                tabindex=\"0\"\n                (click)=\"onHide()\">\n                <igx-icon>visibility_off</igx-icon>\n            </button>\n        </div>\n    </header>\n\n    <ng-template #defaultExcelStyleSortingTemplate>\n        <igx-excel-style-sorting #excelStyleSorting\n            class=\"igx-excel-filter__sort\"\n            [column]=\"column\"\n            [grid]=\"grid\"\n            [displayDensity]=\"grid.displayDensity\">\n        </igx-excel-style-sorting>\n    </ng-template>\n\n    <div *ngIf=\"column.sortable\">\n        <ng-container *ngTemplateOutlet=\"sortingTemplate\"></ng-container>\n    </div>\n\n    <section class=\"igx-excel-filter__actions\">\n\n        <ng-template #defaultExcelStyleMovingTemplate>\n            <igx-excel-style-column-moving\n                class=\"igx-excel-filter__move\"\n                [column]=\"column\"\n                [grid]=\"grid\"\n                [displayDensity]=\"grid.displayDensity\">\n            </igx-excel-style-column-moving>\n        </ng-template>\n\n        <div *ngIf=\"column.movable\">\n            <ng-container *ngTemplateOutlet=\"movingTemplate\"></ng-container>\n        </div>\n\n        <ng-template #defaultExcelStylePinningTemplate>\n            <div class=\"igx-excel-filter__actions-pin\"\n                (click)=\"onPin()\"\n                tabindex=\"0\"\n                *ngIf=\"!column.pinned\">\n                <span>{{ grid.resourceStrings.igx_grid_excel_pin }}</span>\n                <igx-icon fontSet=\"filtering-icons\" name=\"pin\"></igx-icon>\n            </div>\n\n            <div class=\"igx-excel-filter__actions-unpin\"\n                (click)=\"onPin()\"\n                tabindex=\"0\"\n                *ngIf=\"column.pinned\">\n                <span>{{ grid.resourceStrings.igx_grid_excel_unpin }}</span>\n                <igx-icon fontSet=\"filtering-icons\" name=\"unpin\"></igx-icon>\n            </div>\n        </ng-template>\n\n        <div *ngIf=\"!column.disablePinning && grid.displayDensity==='comfortable'\">\n            <ng-container *ngTemplateOutlet=\"pinningTemplate\"></ng-container>\n        </div>\n\n        <ng-template #defaultExcelStyleHidingTemplate>\n            <div class=\"igx-excel-filter__actions-hide\"\n                tabindex=\"0\"\n                (click)=\"onHide()\">\n                <span>{{ grid.resourceStrings.igx_grid_excel_hide }}</span>\n                <igx-icon>visibility_off</igx-icon>\n            </div>\n        </ng-template>\n\n        <div *ngIf=\"!column.disableHiding && grid.displayDensity==='comfortable'\">\n            <ng-container *ngTemplateOutlet=\"hidingTemplate\"></ng-container>\n        </div>\n\n        <div\n            tabindex=\"0\"\n            [ngClass]=\"clearFilterClass()\"\n            (keydown)=\"onClearFilterKeyDown($event)\"\n            (click)=\"clearFilter()\">\n            <span>{{ grid.resourceStrings.igx_grid_excel_filter_clear }}</span>\n            <igx-icon>clear</igx-icon>\n        </div>\n\n        <div\n            tabindex=\"0\"\n            class=\"igx-excel-filter__actions-filter\"\n            (keydown)=\"onTextFilterKeyDown($event)\"\n            (click)=\"onTextFilterClick($event)\"\n            [igxDropDownItemNavigation]=\"subMenu\" >\n            <span>{{ subMenuText }}</span>\n            <igx-icon>keyboard_arrow_right</igx-icon>\n        </div>\n    </section>\n\n    <igx-excel-style-search\n        class=\"igx-excel-filter__menu-main\"\n        #excelStyleSearch\n        [column]=\"column\"\n        [data]=\"listData\"\n        [displayDensity]=\"grid.displayDensity\">\n    </igx-excel-style-search>\n\n    <footer class=\"igx-excel-filter__menu-footer\">\n        <button igxButton [displayDensity]=\"grid.displayDensity\" (click)=\"closeDropdown()\">{{ grid.resourceStrings.igx_grid_excel_cancel }}</button>\n        <button igxButton=\"raised\" [displayDensity]=\"grid.displayDensity\" [disabled]=\"applyButtonDisabled\" (click)=\"applyFilter()\">{{ grid.resourceStrings.igx_grid_excel_apply }}</button>\n    </footer>\n</article>\n\n<igx-drop-down [maxHeight]=\"'397px'\" #subMenu (onSelection)=\"onSubMenuSelection($event)\" (onClosed)=\"onSubMenuClosed()\">\n    <div>\n        <igx-drop-down-item\n            *ngFor=\"let condition of conditions\"\n            [value]=\"condition\">\n            <igx-icon fontSet=\"filtering-icons\" [name]=\"getCondition(condition).iconName\"></igx-icon>\n            <span style=\"margin-left: 16px\">{{ translateCondition(condition) }}</span>\n        </igx-drop-down-item>\n        <igx-drop-down-item *ngIf=\"showCustomFilterItem()\">\n            <igx-icon>filter_list</igx-icon>\n            <span style=\"margin-left: 16px\">{{ grid.resourceStrings.igx_grid_excel_custom_filter }}</span>\n        </igx-drop-down-item>\n    </div>\n</igx-drop-down>\n\n<igx-excel-style-custom-dialog\n    #customDialog\n    [column]=\"column\"\n    [filteringService]=\"filteringService\"\n    [overlayComponentId]=\"overlayComponentId\"\n    [overlayService]=\"overlayService\"\n    [displayDensity]=\"grid.displayDensity\">\n</igx-excel-style-custom-dialog>\n"
            }] }
];
/** @nocollapse */
IgxGridExcelStyleFilteringComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
IgxGridExcelStyleFilteringComponent.propDecorators = {
    className: [{ type: HostBinding, args: ['class.igx-excel-filter',] }],
    mainDropdown: [{ type: ViewChild, args: ['dropdown', { read: ElementRef, static: true },] }],
    subMenu: [{ type: ViewChild, args: ['subMenu', { read: IgxDropDownComponent, static: true },] }],
    customDialog: [{ type: ViewChild, args: ['customDialog', { read: IgxExcelStyleCustomDialogComponent, static: true },] }],
    excelStyleSearch: [{ type: ViewChild, args: ['excelStyleSearch', { read: IgxExcelStyleSearchComponent, static: true },] }],
    excelStyleSorting: [{ type: ViewChild, args: ['excelStyleSorting', { read: IgxExcelStyleSortingComponent, static: false },] }],
    defaultExcelStyleSortingTemplate: [{ type: ViewChild, args: ['defaultExcelStyleSortingTemplate', { read: TemplateRef, static: true },] }],
    defaultExcelStyleHidingTemplate: [{ type: ViewChild, args: ['defaultExcelStyleHidingTemplate', { read: TemplateRef, static: true },] }],
    defaultExcelStyleMovingTemplate: [{ type: ViewChild, args: ['defaultExcelStyleMovingTemplate', { read: TemplateRef, static: true },] }],
    defaultExcelStylePinningTemplate: [{ type: ViewChild, args: ['defaultExcelStylePinningTemplate', { read: TemplateRef, static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxGridExcelStyleFilteringComponent.filterOptimizationThreshold;
    /**
     * @type {?}
     * @private
     */
    IgxGridExcelStyleFilteringComponent.prototype.shouldOpenSubMenu;
    /**
     * @type {?}
     * @private
     */
    IgxGridExcelStyleFilteringComponent.prototype.expressionsList;
    /**
     * @type {?}
     * @private
     */
    IgxGridExcelStyleFilteringComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    IgxGridExcelStyleFilteringComponent.prototype.containsNullOrEmpty;
    /**
     * @type {?}
     * @private
     */
    IgxGridExcelStyleFilteringComponent.prototype.selectAllSelected;
    /**
     * @type {?}
     * @private
     */
    IgxGridExcelStyleFilteringComponent.prototype.selectAllIndeterminate;
    /**
     * @type {?}
     * @private
     */
    IgxGridExcelStyleFilteringComponent.prototype.filterValues;
    /**
     * @type {?}
     * @protected
     */
    IgxGridExcelStyleFilteringComponent.prototype.columnMoving;
    /** @type {?} */
    IgxGridExcelStyleFilteringComponent.prototype.column;
    /** @type {?} */
    IgxGridExcelStyleFilteringComponent.prototype.filteringService;
    /** @type {?} */
    IgxGridExcelStyleFilteringComponent.prototype.listData;
    /** @type {?} */
    IgxGridExcelStyleFilteringComponent.prototype.uniqueValues;
    /** @type {?} */
    IgxGridExcelStyleFilteringComponent.prototype.overlayService;
    /** @type {?} */
    IgxGridExcelStyleFilteringComponent.prototype.overlayComponentId;
    /**
     * @type {?}
     * @private
     */
    IgxGridExcelStyleFilteringComponent.prototype._subMenuPositionSettings;
    /**
     * @type {?}
     * @private
     */
    IgxGridExcelStyleFilteringComponent.prototype._subMenuOverlaySettings;
    /** @type {?} */
    IgxGridExcelStyleFilteringComponent.prototype.className;
    /** @type {?} */
    IgxGridExcelStyleFilteringComponent.prototype.mainDropdown;
    /** @type {?} */
    IgxGridExcelStyleFilteringComponent.prototype.subMenu;
    /** @type {?} */
    IgxGridExcelStyleFilteringComponent.prototype.customDialog;
    /**
     * @type {?}
     * @protected
     */
    IgxGridExcelStyleFilteringComponent.prototype.excelStyleSearch;
    /**
     * @type {?}
     * @protected
     */
    IgxGridExcelStyleFilteringComponent.prototype.excelStyleSorting;
    /**
     * @type {?}
     * @protected
     */
    IgxGridExcelStyleFilteringComponent.prototype.defaultExcelStyleSortingTemplate;
    /**
     * @type {?}
     * @protected
     */
    IgxGridExcelStyleFilteringComponent.prototype.defaultExcelStyleHidingTemplate;
    /**
     * @type {?}
     * @protected
     */
    IgxGridExcelStyleFilteringComponent.prototype.defaultExcelStyleMovingTemplate;
    /**
     * @type {?}
     * @protected
     */
    IgxGridExcelStyleFilteringComponent.prototype.defaultExcelStylePinningTemplate;
    /**
     * @type {?}
     * @private
     */
    IgxGridExcelStyleFilteringComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5leGNlbC1zdHlsZS1maWx0ZXJpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9maWx0ZXJpbmcvZXhjZWwtc3R5bGUvZ3JpZC5leGNlbC1zdHlsZS1maWx0ZXJpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLHVCQUF1QixFQUN2QixXQUFXLEVBQ1gsU0FBUyxFQUdULFVBQVUsRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0gsbUJBQW1CLEVBQ25CLGlCQUFpQixFQUNqQiw0QkFBNEIsRUFHNUIsc0JBQXNCLEVBQ3pCLE1BQU0seUJBQXlCLENBQUM7QUFHakMsT0FBTyxFQUVILHlCQUF5QixFQUN6Qix5QkFBeUIsRUFDekIsMEJBQTBCLEVBQzFCLHVCQUF1QixFQUMxQixNQUFNLDhDQUE4QyxDQUFDO0FBQ3RELE9BQU8sRUFBRSx3QkFBd0IsRUFBNkIsTUFBTSxxREFBcUQsQ0FBQztBQUMxSCxPQUFPLEVBQUUsY0FBYyxFQUF3QixNQUFNLHlEQUF5RCxDQUFDO0FBQy9HLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFB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QUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7OENBR2hGLFNBQVMsU0FBQyxpQ0FBaUMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQ0FHaEYsU0FBUyxTQUFDLGtDQUFrQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7Ozs7O0lBekRsRixnRUFBd0Q7Ozs7O0lBRXhELGdFQUFpQzs7Ozs7SUFDakMsOERBQW9EOzs7OztJQUNwRCx1REFBMEM7Ozs7O0lBQzFDLGtFQUFvQzs7Ozs7SUFDcEMsZ0VBQWlDOzs7OztJQUNqQyxxRUFBdUM7Ozs7O0lBQ3ZDLDJEQUFzQzs7Ozs7SUFFdEMsMkRBQTRDOztJQUU1QyxxREFBa0M7O0lBQ2xDLCtEQUE2Qzs7SUFDN0MsdURBQThDOztJQUM5QywyREFBeUI7O0lBQ3pCLDZEQUF5Qzs7SUFDekMsaUVBQWtDOzs7OztJQUVsQyx1RUFFRTs7Ozs7SUFFRixzRUFLRTs7SUFFRix3REFDK0I7O0lBRS9CLDJEQUNnQzs7SUFFaEMsc0RBQ3FDOztJQUVyQywyREFDd0Q7Ozs7O0lBRXhELCtEQUN5RDs7Ozs7SUFFekQsZ0VBQzJEOzs7OztJQUUzRCwrRUFDNkQ7Ozs7O0lBRTdELDhFQUM0RDs7Ozs7SUFFNUQsOEVBQzREOzs7OztJQUU1RCwrRUFDNkQ7Ozs7O0lBdUJqRCxrREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBWaWV3Q2hpbGQsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgRGlyZWN0aXZlLFxuICAgIE9uRGVzdHJveSxcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIEhvcml6b250YWxBbGlnbm1lbnQsXG4gICAgVmVydGljYWxBbGlnbm1lbnQsXG4gICAgQ29ubmVjdGVkUG9zaXRpb25pbmdTdHJhdGVneSxcbiAgICBPdmVybGF5U2V0dGluZ3MsXG4gICAgSWd4T3ZlcmxheVNlcnZpY2UsXG4gICAgQWJzb2x1dGVTY3JvbGxTdHJhdGVneVxufSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBJZ3hGaWx0ZXJpbmdTZXJ2aWNlLCBFeHByZXNzaW9uVUkgfSBmcm9tICcuLi9ncmlkLWZpbHRlcmluZy5zZXJ2aWNlJztcbmltcG9ydCB7IElneFRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvdG9nZ2xlL3RvZ2dsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtcbiAgICBJRmlsdGVyaW5nT3BlcmF0aW9uLFxuICAgIElneFN0cmluZ0ZpbHRlcmluZ09wZXJhbmQsXG4gICAgSWd4TnVtYmVyRmlsdGVyaW5nT3BlcmFuZCxcbiAgICBJZ3hCb29sZWFuRmlsdGVyaW5nT3BlcmFuZCxcbiAgICBJZ3hEYXRlRmlsdGVyaW5nT3BlcmFuZFxufSBmcm9tICcuLi8uLi8uLi9kYXRhLW9wZXJhdGlvbnMvZmlsdGVyaW5nLWNvbmRpdGlvbic7XG5pbXBvcnQgeyBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUsIElGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUgfSBmcm9tICcuLi8uLi8uLi9kYXRhLW9wZXJhdGlvbnMvZmlsdGVyaW5nLWV4cHJlc3Npb25zLXRyZWUnO1xuaW1wb3J0IHsgRmlsdGVyaW5nTG9naWMsIElGaWx0ZXJpbmdFeHByZXNzaW9uIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1leHByZXNzaW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBjbG9uZUFycmF5LCBLRVlTIH0gZnJvbSAnLi4vLi4vLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBEYXRhVHlwZSwgRGF0YVV0aWwgfSBmcm9tICcuLi8uLi8uLi9kYXRhLW9wZXJhdGlvbnMvZGF0YS11dGlsJztcbmltcG9ydCB7IElneEV4Y2VsU3R5bGVTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL2V4Y2VsLXN0eWxlLXNlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4RXhjZWxTdHlsZUN1c3RvbURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZXhjZWwtc3R5bGUtY3VzdG9tLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJZ3hFeGNlbFN0eWxlU29ydGluZ0NvbXBvbmVudCB9IGZyb20gJy4vZXhjZWwtc3R5bGUtc29ydGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSVNlbGVjdGlvbkV2ZW50QXJncywgSWd4RHJvcERvd25Db21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9kcm9wLWRvd24nO1xuaW1wb3J0IHsgSWd4Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29sdW1uLmNvbXBvbmVudCc7XG5cbi8qKlxuICpAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBGaWx0ZXJMaXN0SXRlbSB7XG4gICAgcHVibGljIHZhbHVlOiBhbnk7XG4gICAgcHVibGljIGxhYmVsOiBhbnk7XG4gICAgcHVibGljIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XG4gICAgcHVibGljIGluZGV0ZXJtaW5hdGU6IGJvb2xlYW47XG4gICAgcHVibGljIGlzU3BlY2lhbCA9IGZhbHNlO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hFeGNlbFN0eWxlU29ydGluZ1RlbXBsYXRlXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4RXhjZWxTdHlsZVNvcnRpbmdUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hFeGNlbFN0eWxlTW92aW5nVGVtcGxhdGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hFeGNlbFN0eWxlTW92aW5nVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge31cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4RXhjZWxTdHlsZUhpZGluZ1RlbXBsYXRlXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4RXhjZWxTdHlsZUhpZGluZ1RlbXBsYXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneEV4Y2VsU3R5bGVQaW5uaW5nVGVtcGxhdGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hFeGNlbFN0eWxlUGlubmluZ1RlbXBsYXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgICBzZWxlY3RvcjogJ2lneC1ncmlkLWV4Y2VsLXN0eWxlLWZpbHRlcmluZycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2dyaWQuZXhjZWwtc3R5bGUtZmlsdGVyaW5nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hHcmlkRXhjZWxTdHlsZUZpbHRlcmluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgZmlsdGVyT3B0aW1pemF0aW9uVGhyZXNob2xkID0gMjtcblxuICAgIHByaXZhdGUgc2hvdWxkT3BlblN1Yk1lbnUgPSB0cnVlO1xuICAgIHByaXZhdGUgZXhwcmVzc2lvbnNMaXN0ID0gbmV3IEFycmF5PEV4cHJlc3Npb25VST4oKTtcbiAgICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICBwcml2YXRlIGNvbnRhaW5zTnVsbE9yRW1wdHkgPSBmYWxzZTtcbiAgICBwcml2YXRlIHNlbGVjdEFsbFNlbGVjdGVkID0gdHJ1ZTtcbiAgICBwcml2YXRlIHNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICBwcml2YXRlIGZpbHRlclZhbHVlcyA9IG5ldyBTZXQ8YW55PigpO1xuXG4gICAgcHJvdGVjdGVkIGNvbHVtbk1vdmluZyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICAgIHB1YmxpYyBjb2x1bW46IElneENvbHVtbkNvbXBvbmVudDtcbiAgICBwdWJsaWMgZmlsdGVyaW5nU2VydmljZTogSWd4RmlsdGVyaW5nU2VydmljZTtcbiAgICBwdWJsaWMgbGlzdERhdGEgPSBuZXcgQXJyYXk8RmlsdGVyTGlzdEl0ZW0+KCk7XG4gICAgcHVibGljIHVuaXF1ZVZhbHVlcyA9IFtdO1xuICAgIHB1YmxpYyBvdmVybGF5U2VydmljZTogSWd4T3ZlcmxheVNlcnZpY2U7XG4gICAgcHVibGljIG92ZXJsYXlDb21wb25lbnRJZDogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfc3ViTWVudVBvc2l0aW9uU2V0dGluZ3MgPSB7XG4gICAgICAgIHZlcnRpY2FsU3RhcnRQb2ludDogVmVydGljYWxBbGlnbm1lbnQuVG9wXG4gICAgfTtcblxuICAgIHByaXZhdGUgX3N1Yk1lbnVPdmVybGF5U2V0dGluZ3M6IE92ZXJsYXlTZXR0aW5ncyA9IHtcbiAgICAgICAgY2xvc2VPbk91dHNpZGVDbGljazogdHJ1ZSxcbiAgICAgICAgbW9kYWw6IGZhbHNlLFxuICAgICAgICBwb3NpdGlvblN0cmF0ZWd5OiBuZXcgQ29ubmVjdGVkUG9zaXRpb25pbmdTdHJhdGVneSh0aGlzLl9zdWJNZW51UG9zaXRpb25TZXR0aW5ncyksXG4gICAgICAgIHNjcm9sbFN0cmF0ZWd5OiBuZXcgQWJzb2x1dGVTY3JvbGxTdHJhdGVneSgpXG4gICAgfTtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWV4Y2VsLWZpbHRlcicpXG4gICAgY2xhc3NOYW1lID0gJ2lneC1leGNlbC1maWx0ZXInO1xuXG4gICAgQFZpZXdDaGlsZCgnZHJvcGRvd24nLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBtYWluRHJvcGRvd246IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkKCdzdWJNZW51JywgeyByZWFkOiBJZ3hEcm9wRG93bkNvbXBvbmVudCwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIHN1Yk1lbnU6IElneERyb3BEb3duQ29tcG9uZW50O1xuXG4gICAgQFZpZXdDaGlsZCgnY3VzdG9tRGlhbG9nJywgeyByZWFkOiBJZ3hFeGNlbFN0eWxlQ3VzdG9tRGlhbG9nQ29tcG9uZW50LCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgY3VzdG9tRGlhbG9nOiBJZ3hFeGNlbFN0eWxlQ3VzdG9tRGlhbG9nQ29tcG9uZW50O1xuXG4gICAgQFZpZXdDaGlsZCgnZXhjZWxTdHlsZVNlYXJjaCcsIHsgcmVhZDogSWd4RXhjZWxTdHlsZVNlYXJjaENvbXBvbmVudCwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGV4Y2VsU3R5bGVTZWFyY2g6IElneEV4Y2VsU3R5bGVTZWFyY2hDb21wb25lbnQ7XG5cbiAgICBAVmlld0NoaWxkKCdleGNlbFN0eWxlU29ydGluZycsIHsgcmVhZDogSWd4RXhjZWxTdHlsZVNvcnRpbmdDb21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcm90ZWN0ZWQgZXhjZWxTdHlsZVNvcnRpbmc6IElneEV4Y2VsU3R5bGVTb3J0aW5nQ29tcG9uZW50O1xuXG4gICAgQFZpZXdDaGlsZCgnZGVmYXVsdEV4Y2VsU3R5bGVTb3J0aW5nVGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdEV4Y2VsU3R5bGVTb3J0aW5nVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdkZWZhdWx0RXhjZWxTdHlsZUhpZGluZ1RlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGRlZmF1bHRFeGNlbFN0eWxlSGlkaW5nVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdkZWZhdWx0RXhjZWxTdHlsZU1vdmluZ1RlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGRlZmF1bHRFeGNlbFN0eWxlTW92aW5nVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdkZWZhdWx0RXhjZWxTdHlsZVBpbm5pbmdUZW1wbGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCBkZWZhdWx0RXhjZWxTdHlsZVBpbm5pbmdUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGdldCBncmlkKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuZ3JpZDtcbiAgICB9XG5cbiAgICBnZXQgY29uZGl0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLmZpbHRlcnMuY29uZGl0aW9uTGlzdCgpO1xuICAgIH1cblxuICAgIGdldCBzdWJNZW51VGV4dCgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmNvbHVtbi5kYXRhVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBEYXRhVHlwZS5Cb29sZWFuOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdyaWQucmVzb3VyY2VTdHJpbmdzLmlneF9ncmlkX2V4Y2VsX2Jvb2xlYW5fZmlsdGVyO1xuICAgICAgICAgICAgY2FzZSBEYXRhVHlwZS5OdW1iZXI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5yZXNvdXJjZVN0cmluZ3MuaWd4X2dyaWRfZXhjZWxfbnVtYmVyX2ZpbHRlcjtcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuRGF0ZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnJlc291cmNlU3RyaW5ncy5pZ3hfZ3JpZF9leGNlbF9kYXRlX2ZpbHRlcjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5yZXNvdXJjZVN0cmluZ3MuaWd4X2dyaWRfZXhjZWxfdGV4dF9maWx0ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdCA9IG5ldyBBcnJheTxFeHByZXNzaW9uVUk+KCk7XG4gICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZS5nZW5lcmF0ZUV4cHJlc3Npb25zTGlzdCh0aGlzLmNvbHVtbi5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUsIHRoaXMuZ3JpZC5maWx0ZXJpbmdMb2dpYywgdGhpcy5leHByZXNzaW9uc0xpc3QpO1xuICAgICAgICBpZiAodGhpcy5leHByZXNzaW9uc0xpc3QgJiYgdGhpcy5leHByZXNzaW9uc0xpc3QubGVuZ3RoICYmXG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdFswXS5leHByZXNzaW9uLmNvbmRpdGlvbi5uYW1lICE9PSAnaW4nKSB7XG4gICAgICAgICAgICB0aGlzLmN1c3RvbURpYWxvZy5leHByZXNzaW9uc0xpc3QgPSB0aGlzLmV4cHJlc3Npb25zTGlzdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvcHVsYXRlQ29sdW1uRGF0YSgpO1xuXG4gICAgICAgIGlmICh0aGlzLmV4Y2VsU3R5bGVTb3J0aW5nKSB7XG4gICAgICAgICAgICBjb25zdCBzZSA9IHRoaXMuZ3JpZC5zb3J0aW5nRXhwcmVzc2lvbnMuZmluZChleHByID0+IGV4cHIuZmllbGROYW1lID09PSB0aGlzLmNvbHVtbi5maWVsZCk7XG4gICAgICAgICAgICBpZiAoc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4Y2VsU3R5bGVTb3J0aW5nLnNlbGVjdEJ1dHRvbihzZS5kaXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXhjZWxTdHlsZVNlYXJjaC5zZWFyY2hJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckZpbHRlckNsYXNzKCkge1xuICAgICAgICBpZiAodGhpcy5jb2x1bW4uZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2lneC1leGNlbC1maWx0ZXJfX2FjdGlvbnMtY2xlYXInO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICdpZ3gtZXhjZWwtZmlsdGVyX19hY3Rpb25zLWNsZWFyLS1kaXNhYmxlZCc7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXRpYWxpemUoY29sdW1uOiBJZ3hDb2x1bW5Db21wb25lbnQsIGZpbHRlcmluZ1NlcnZpY2U6IElneEZpbHRlcmluZ1NlcnZpY2UsIG92ZXJsYXlTZXJ2aWNlOiBJZ3hPdmVybGF5U2VydmljZSxcbiAgICAgICAgb3ZlcmxheUNvbXBvbmVudElkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG4gICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZSA9IGZpbHRlcmluZ1NlcnZpY2U7XG4gICAgICAgIHRoaXMub3ZlcmxheVNlcnZpY2UgPSBvdmVybGF5U2VydmljZTtcbiAgICAgICAgdGhpcy5vdmVybGF5Q29tcG9uZW50SWQgPSBvdmVybGF5Q29tcG9uZW50SWQ7XG5cbiAgICAgICAgdGhpcy5fc3ViTWVudU92ZXJsYXlTZXR0aW5ncy5vdXRsZXQgPSB0aGlzLmdyaWQub3V0bGV0O1xuXG4gICAgICAgIHRoaXMuY29sdW1uTW92aW5nID0gdGhpcy5ncmlkLm9uQ29sdW1uTW92aW5nLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpbHRlcmluZyBvcGVyYXRpb24gY29uZGl0aW9uIGZvciBhIGdpdmVuIHZhbHVlLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDb25kaXRpb24odmFsdWU6IHN0cmluZyk6IElGaWx0ZXJpbmdPcGVyYXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4uZmlsdGVycy5jb25kaXRpb24odmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRyYW5zbGF0ZWQgY29uZGl0aW9uIG5hbWUgZm9yIGEgZ2l2ZW4gdmFsdWUuXG4gICAgICovXG4gICAgcHVibGljIHRyYW5zbGF0ZUNvbmRpdGlvbih2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5yZXNvdXJjZVN0cmluZ3NbYGlneF9ncmlkX2ZpbHRlcl8ke3RoaXMuZ2V0Q29uZGl0aW9uKHZhbHVlKS5uYW1lfWBdIHx8IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblBpbigpIHtcbiAgICAgICAgdGhpcy5jb2x1bW4ucGlubmVkID0gIXRoaXMuY29sdW1uLnBpbm5lZDtcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uSGlkZSgpIHtcbiAgICAgICAgdGhpcy5jb2x1bW4uaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ncmlkLm9uQ29sdW1uVmlzaWJpbGl0eUNoYW5nZWQuZW1pdCh7IGNvbHVtbjogdGhpcy5jb2x1bW4sIG5ld1ZhbHVlOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25UZXh0RmlsdGVyQ2xpY2soZXZlbnRBcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZE9wZW5TdWJNZW51KSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJNZW51T3ZlcmxheVNldHRpbmdzLnBvc2l0aW9uU3RyYXRlZ3kuc2V0dGluZ3MudGFyZ2V0ID0gZXZlbnRBcmdzLmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgICAgICAgIGNvbnN0IGdyaWRSZWN0ID0gdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBkcm9wZG93blJlY3QgPSB0aGlzLm1haW5Ecm9wZG93bi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICBsZXQgeCA9IGRyb3Bkb3duUmVjdC5sZWZ0ICsgZHJvcGRvd25SZWN0LndpZHRoO1xuICAgICAgICAgICAgbGV0IHgxID0gZ3JpZFJlY3QubGVmdCArIGdyaWRSZWN0LndpZHRoO1xuICAgICAgICAgICAgeCArPSB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICB4MSArPSB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoeCAtIHgxKSA8IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N1Yk1lbnVPdmVybGF5U2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5zZXR0aW5ncy5ob3Jpem9udGFsRGlyZWN0aW9uID0gSG9yaXpvbnRhbEFsaWdubWVudC5MZWZ0O1xuICAgICAgICAgICAgICAgIHRoaXMuX3N1Yk1lbnVPdmVybGF5U2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5zZXR0aW5ncy5ob3Jpem9udGFsU3RhcnRQb2ludCA9IEhvcml6b250YWxBbGlnbm1lbnQuTGVmdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3ViTWVudU92ZXJsYXlTZXR0aW5ncy5wb3NpdGlvblN0cmF0ZWd5LnNldHRpbmdzLmhvcml6b250YWxEaXJlY3Rpb24gPSBIb3Jpem9udGFsQWxpZ25tZW50LlJpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMuX3N1Yk1lbnVPdmVybGF5U2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5zZXR0aW5ncy5ob3Jpem9udGFsU3RhcnRQb2ludCA9IEhvcml6b250YWxBbGlnbm1lbnQuUmlnaHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3ViTWVudS5vcGVuKHRoaXMuX3N1Yk1lbnVPdmVybGF5U2V0dGluZ3MpO1xuICAgICAgICAgICAgdGhpcy5zaG91bGRPcGVuU3ViTWVudSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uVGV4dEZpbHRlcktleURvd24oZXZlbnRBcmdzKSB7XG4gICAgICAgIGlmIChldmVudEFyZ3Mua2V5ID09PSBLRVlTLkVOVEVSKSB7XG4gICAgICAgICAgICB0aGlzLm9uVGV4dEZpbHRlckNsaWNrKGV2ZW50QXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25TdWJNZW51Q2xvc2VkKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG91bGRPcGVuU3ViTWVudSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblN1Yk1lbnVTZWxlY3Rpb24oZXZlbnRBcmdzOiBJU2VsZWN0aW9uRXZlbnRBcmdzKSB7XG4gICAgICAgIHRoaXMuY3VzdG9tRGlhbG9nLnNlbGVjdGVkT3BlcmF0b3IgPSBldmVudEFyZ3MubmV3U2VsZWN0aW9uLnZhbHVlO1xuICAgICAgICBldmVudEFyZ3MuY2FuY2VsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tYWluRHJvcGRvd24ubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnN1Yk1lbnUuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5jdXN0b21EaWFsb2cub3BlbigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXJlRXhwcmVzc2lvbnNTZWxlY3RhYmxlICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZXhwcmVzc2lvbnNMaXN0Lmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICAgICAgKHRoaXMuZXhwcmVzc2lvbnNMaXN0WzBdLmV4cHJlc3Npb24uY29uZGl0aW9uLm5hbWUgPT09ICdlcXVhbHMnIHx8XG4gICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uc0xpc3RbMF0uZXhwcmVzc2lvbi5jb25kaXRpb24ubmFtZSA9PT0gJ3RydWUnIHx8XG4gICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uc0xpc3RbMF0uZXhwcmVzc2lvbi5jb25kaXRpb24ubmFtZSA9PT0gJ2ZhbHNlJyB8fFxuICAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbnNMaXN0WzBdLmV4cHJlc3Npb24uY29uZGl0aW9uLm5hbWUgPT09ICdlbXB0eScgfHxcbiAgICAgICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdFswXS5leHByZXNzaW9uLmNvbmRpdGlvbi5uYW1lID09PSAnaW4nKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWxlY3RhYmxlRXhwcmVzc2lvbnNDb3VudCA9IHRoaXMuZXhwcmVzc2lvbnNMaXN0LmZpbHRlcihleHAgPT5cbiAgICAgICAgICAgIChleHAuYmVmb3JlT3BlcmF0b3IgPT09IDEgfHwgZXhwLmFmdGVyT3BlcmF0b3IgPT09IDEpICYmXG4gICAgICAgICAgICAoZXhwLmV4cHJlc3Npb24uY29uZGl0aW9uLm5hbWUgPT09ICdlcXVhbHMnIHx8XG4gICAgICAgICAgICAgZXhwLmV4cHJlc3Npb24uY29uZGl0aW9uLm5hbWUgPT09ICd0cnVlJyB8fFxuICAgICAgICAgICAgIGV4cC5leHByZXNzaW9uLmNvbmRpdGlvbi5uYW1lID09PSAnZmFsc2UnIHx8XG4gICAgICAgICAgICAgZXhwLmV4cHJlc3Npb24uY29uZGl0aW9uLm5hbWUgPT09ICdlbXB0eScgfHxcbiAgICAgICAgICAgICBleHAuZXhwcmVzc2lvbi5jb25kaXRpb24ubmFtZSA9PT0gJ2luJykpLmxlbmd0aDtcblxuICAgICAgICByZXR1cm4gc2VsZWN0YWJsZUV4cHJlc3Npb25zQ291bnQgPT09IHRoaXMuZXhwcmVzc2lvbnNMaXN0Lmxlbmd0aDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFyZUV4cHJlc3Npb25zVmFsdWVzSW5UaGVMaXN0KCkge1xuICAgICAgICBpZiAodGhpcy5jb2x1bW4uZGF0YVR5cGUgPT09IERhdGFUeXBlLkJvb2xlYW4pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyVmFsdWVzLnNpemUgPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VmFsdWUgPSB0aGlzLmZpbHRlclZhbHVlcy52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XG5cbiAgICAgICAgICAgIGlmICghZmlyc3RWYWx1ZSAmJiBmaXJzdFZhbHVlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy51bmlxdWVWYWx1ZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJWYWx1ZXMuaGFzKHRoaXMudW5pcXVlVmFsdWVzW2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9wdWxhdGVDb2x1bW5EYXRhKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY29sdW1uLmdyaWRBUEkuZ2V0X2FsbF9kYXRhKHRoaXMuZ3JpZC5pZCk7XG4gICAgICAgIGNvbnN0IGdyaWRFeHByZXNzaW9uc1RyZWU6IElGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUgPSB0aGlzLmdyaWQuZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlO1xuICAgICAgICBjb25zdCBleHByZXNzaW9uc1RyZWUgPSBuZXcgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKGdyaWRFeHByZXNzaW9uc1RyZWUub3BlcmF0b3IsIGdyaWRFeHByZXNzaW9uc1RyZWUuZmllbGROYW1lKTtcblxuICAgICAgICBmb3IgKGNvbnN0IG9wZXJhbmQgb2YgZ3JpZEV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcykge1xuICAgICAgICAgICAgaWYgKG9wZXJhbmQgaW5zdGFuY2VvZiBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5FeHByVHJlZSA9IG9wZXJhbmQgYXMgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlO1xuICAgICAgICAgICAgICAgIGlmIChjb2x1bW5FeHByVHJlZS5maWVsZE5hbWUgPT09IHRoaXMuY29sdW1uLmZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5wdXNoKG9wZXJhbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0geyBleHByZXNzaW9uc1RyZWU6IGV4cHJlc3Npb25zVHJlZSB9O1xuICAgICAgICAgICAgZGF0YSA9IERhdGFVdGlsLmZpbHRlcihjbG9uZUFycmF5KGRhdGEpLCBzdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2x1bW4uZGF0YVR5cGUgPT09IERhdGFUeXBlLkRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudW5pcXVlVmFsdWVzID0gQXJyYXkuZnJvbShuZXcgU2V0KGRhdGEubWFwKHJlY29yZCA9PlxuICAgICAgICAgICAgICAgIHJlY29yZFt0aGlzLmNvbHVtbi5maWVsZF0gPyByZWNvcmRbdGhpcy5jb2x1bW4uZmllbGRdLnRvRGF0ZVN0cmluZygpIDogcmVjb3JkW3RoaXMuY29sdW1uLmZpZWxkXSkpKTtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyVmFsdWVzID0gbmV3IFNldDxhbnk+KHRoaXMuZXhwcmVzc2lvbnNMaXN0LnJlZHVjZSgoYXJyLCBlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUuZXhwcmVzc2lvbi5jb25kaXRpb24ubmFtZSA9PT0gJ2luJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWyAuLi5hcnIsIC4uLkFycmF5LmZyb20oKGUuZXhwcmVzc2lvbi5zZWFyY2hWYWwgYXMgU2V0PGFueT4pLnZhbHVlcygpKS5tYXAodiA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUodikudG9EYXRlU3RyaW5nKCkpIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbIC4uLmFyciwgLi4uW2UuZXhwcmVzc2lvbi5zZWFyY2hWYWwgPyBlLmV4cHJlc3Npb24uc2VhcmNoVmFsLnRvRGF0ZVN0cmluZygpIDogZS5leHByZXNzaW9uLnNlYXJjaFZhbF0gXTtcbiAgICAgICAgICAgIH0sIFtdKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVuaXF1ZVZhbHVlcyA9IEFycmF5LmZyb20obmV3IFNldChkYXRhLm1hcChyZWNvcmQgPT4gcmVjb3JkW3RoaXMuY29sdW1uLmZpZWxkXSkpKTtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyVmFsdWVzID0gbmV3IFNldDxhbnk+KHRoaXMuZXhwcmVzc2lvbnNMaXN0LnJlZHVjZSgoYXJyLCBlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUuZXhwcmVzc2lvbi5jb25kaXRpb24ubmFtZSA9PT0gJ2luJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWyAuLi5hcnIsIC4uLkFycmF5LmZyb20oKGUuZXhwcmVzc2lvbi5zZWFyY2hWYWwgYXMgU2V0PGFueT4pLnZhbHVlcygpKSBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWyAuLi5hcnIsIC4uLltlLmV4cHJlc3Npb24uc2VhcmNoVmFsXSBdO1xuICAgICAgICAgICAgfSwgW10pKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpc3REYXRhID0gbmV3IEFycmF5PEZpbHRlckxpc3RJdGVtPigpO1xuXG4gICAgICAgIGNvbnN0IHNob3VsZFVwZGF0ZVNlbGVjdGlvbiA9IHRoaXMuYXJlRXhwcmVzc2lvbnNTZWxlY3RhYmxlKCkgJiYgdGhpcy5hcmVFeHByZXNzaW9uc1ZhbHVlc0luVGhlTGlzdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbHVtbi5kYXRhVHlwZSA9PT0gRGF0YVR5cGUuQm9vbGVhbikge1xuICAgICAgICAgICAgdGhpcy5hZGRCb29sZWFuSXRlbXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkSXRlbXMoc2hvdWxkVXBkYXRlU2VsZWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGlzdERhdGEuc29ydCgoYSwgYikgPT4gdGhpcy5zb3J0RGF0YShhLCBiKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29sdW1uLmRhdGFUeXBlID09PSBEYXRhVHlwZS5EYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnVuaXF1ZVZhbHVlcyA9IHRoaXMudW5pcXVlVmFsdWVzLm1hcCh2YWx1ZSA9PiBuZXcgRGF0ZSh2YWx1ZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnNOdWxsT3JFbXB0eSkge1xuICAgICAgICAgICAgdGhpcy5hZGRCbGFua3NJdGVtKHNob3VsZFVwZGF0ZVNlbGVjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZFNlbGVjdEFsbEl0ZW0oKTtcblxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRCb29sZWFuSXRlbXMoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0QWxsU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51bmlxdWVWYWx1ZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlckxpc3RJdGVtID0gbmV3IEZpbHRlckxpc3RJdGVtKCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gdW5kZWZpbmVkICYmIGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2x1bW4uZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSB0cnVlICYmIHRoaXMuZXhwcmVzc2lvbnNMaXN0LmZpbmQoZXhwID0+IGV4cC5leHByZXNzaW9uLmNvbmRpdGlvbi5uYW1lID09PSAndHJ1ZScgKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTGlzdEl0ZW0uaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgPT09IGZhbHNlICYmIHRoaXMuZXhwcmVzc2lvbnNMaXN0LmZpbmQoZXhwID0+IGV4cC5leHByZXNzaW9uLmNvbmRpdGlvbi5uYW1lID09PSAnZmFsc2UnICkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJMaXN0SXRlbS5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTGlzdEl0ZW0uaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyTGlzdEl0ZW0uaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbHRlckxpc3RJdGVtLnZhbHVlID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICBmaWx0ZXJMaXN0SXRlbS5sYWJlbCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgZmlsdGVyTGlzdEl0ZW0uaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGEucHVzaChmaWx0ZXJMaXN0SXRlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbnNOdWxsT3JFbXB0eSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkSXRlbXMoc2hvdWxkVXBkYXRlU2VsZWN0aW9uOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0QWxsU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51bmlxdWVWYWx1ZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICE9PSB1bmRlZmluZWQgJiYgZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50ICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlckxpc3RJdGVtID0gbmV3IEZpbHRlckxpc3RJdGVtKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sdW1uLmZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkVXBkYXRlU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJWYWx1ZXMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTGlzdEl0ZW0uaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckxpc3RJdGVtLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJMaXN0SXRlbS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEFsbFNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJMaXN0SXRlbS5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sdW1uLmRhdGFUeXBlID09PSBEYXRhVHlwZS5EYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlckxpc3RJdGVtLnZhbHVlID0gbmV3IERhdGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlckxpc3RJdGVtLmxhYmVsID0gbmV3IERhdGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyTGlzdEl0ZW0udmFsdWUgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJMaXN0SXRlbS5sYWJlbCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbHRlckxpc3RJdGVtLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhLnB1c2goZmlsdGVyTGlzdEl0ZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5zTnVsbE9yRW1wdHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFNlbGVjdEFsbEl0ZW0oKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdEFsbCA9ICBuZXcgRmlsdGVyTGlzdEl0ZW0oKTtcbiAgICAgICAgc2VsZWN0QWxsLmlzU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdEFsbFNlbGVjdGVkO1xuICAgICAgICBzZWxlY3RBbGwudmFsdWUgPSB0aGlzLmdyaWQucmVzb3VyY2VTdHJpbmdzLmlneF9ncmlkX2V4Y2VsX3NlbGVjdF9hbGw7XG4gICAgICAgIHNlbGVjdEFsbC5sYWJlbCA9IHRoaXMuZ3JpZC5yZXNvdXJjZVN0cmluZ3MuaWd4X2dyaWRfZXhjZWxfc2VsZWN0X2FsbDtcbiAgICAgICAgc2VsZWN0QWxsLmluZGV0ZXJtaW5hdGUgPSB0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGU7XG4gICAgICAgIHNlbGVjdEFsbC5pc1NwZWNpYWwgPSB0cnVlO1xuICAgICAgICB0aGlzLmxpc3REYXRhLnVuc2hpZnQoc2VsZWN0QWxsKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEJsYW5rc0l0ZW0oc2hvdWxkVXBkYXRlU2VsZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGJsYW5rcyA9ICBuZXcgRmlsdGVyTGlzdEl0ZW0oKTtcbiAgICAgICAgaWYgKHRoaXMuY29sdW1uLmZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSkge1xuICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZVNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlclZhbHVlcy5oYXMobnVsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYmxhbmtzLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJsYW5rcy5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmxhbmtzLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGJsYW5rcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIGJsYW5rcy5sYWJlbCA9IHRoaXMuZ3JpZC5yZXNvdXJjZVN0cmluZ3MuaWd4X2dyaWRfZXhjZWxfYmxhbmtzO1xuICAgICAgICBibGFua3MuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgICBibGFua3MuaXNTcGVjaWFsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5saXN0RGF0YS51bnNoaWZ0KGJsYW5rcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzb3J0RGF0YShhOiBGaWx0ZXJMaXN0SXRlbSwgYjogRmlsdGVyTGlzdEl0ZW0pIHtcbiAgICAgICAgbGV0IHZhbHVlQSA9IGEudmFsdWU7XG4gICAgICAgIGxldCB2YWx1ZUIgPSBiLnZhbHVlO1xuICAgICAgICBpZiAodHlwZW9mKGEpID09PSBEYXRhVHlwZS5TdHJpbmcpIHtcbiAgICAgICAgICAgIHZhbHVlQSA9IGEudmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIHZhbHVlQiA9IGIudmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWVBIDwgdmFsdWVCKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWVBID4gdmFsdWVCKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVE9ETzogc29ydCBtZW1iZXJzIGJ5IGFjY2VzcyBtb2RpZmllclxuXG4gICAgZ2V0IHNvcnRpbmdUZW1wbGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5leGNlbFN0eWxlU29ydGluZ1RlbXBsYXRlRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmV4Y2VsU3R5bGVTb3J0aW5nVGVtcGxhdGVEaXJlY3RpdmUudGVtcGxhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0RXhjZWxTdHlsZVNvcnRpbmdUZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBtb3ZpbmdUZW1wbGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5leGNlbFN0eWxlTW92aW5nVGVtcGxhdGVEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyaWQuZXhjZWxTdHlsZU1vdmluZ1RlbXBsYXRlRGlyZWN0aXZlLnRlbXBsYXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEV4Y2VsU3R5bGVNb3ZpbmdUZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBwaW5uaW5nVGVtcGxhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmdyaWQuZXhjZWxTdHlsZVBpbm5pbmdUZW1wbGF0ZURpcmVjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5leGNlbFN0eWxlUGlubmluZ1RlbXBsYXRlRGlyZWN0aXZlLnRlbXBsYXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEV4Y2VsU3R5bGVQaW5uaW5nVGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaGlkaW5nVGVtcGxhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmdyaWQuZXhjZWxTdHlsZUhpZGluZ1RlbXBsYXRlRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmV4Y2VsU3R5bGVIaWRpbmdUZW1wbGF0ZURpcmVjdGl2ZS50ZW1wbGF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRFeGNlbFN0eWxlSGlkaW5nVGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgYXBwbHlCdXR0b25EaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdERhdGFbMF0gJiYgIXRoaXMubGlzdERhdGFbMF0uaXNTZWxlY3RlZCAmJiAhdGhpcy5saXN0RGF0YVswXS5pbmRldGVybWluYXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhcHBseUZpbHRlcigpIHtcbiAgICAgICAgY29uc3QgZmlsdGVyVHJlZSA9IG5ldyBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUoRmlsdGVyaW5nTG9naWMuT3IsIHRoaXMuY29sdW1uLmZpZWxkKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IHRoaXMubGlzdERhdGEuc2xpY2UoMSwgdGhpcy5saXN0RGF0YS5sZW5ndGgpLmZpbHRlcihlbCA9PiBlbC5pc1NlbGVjdGVkID09PSB0cnVlKTtcbiAgICAgICAgY29uc3QgdW5zZWxlY3RlZEl0ZW0gPSB0aGlzLmxpc3REYXRhLnNsaWNlKDEsIHRoaXMubGlzdERhdGEubGVuZ3RoKS5maW5kKGVsID0+IGVsLmlzU2VsZWN0ZWQgPT09IGZhbHNlKTtcblxuICAgICAgICBpZiAodW5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW1zLmxlbmd0aCA8PSBJZ3hHcmlkRXhjZWxTdHlsZUZpbHRlcmluZ0NvbXBvbmVudC5maWx0ZXJPcHRpbWl6YXRpb25UaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb25kaXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC52YWx1ZSAhPT0gbnVsbCAmJiBlbGVtZW50LnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbHVtbi5kYXRhVHlwZSA9PT0gRGF0YVR5cGUuQm9vbGVhbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbiA9IHRoaXMuY3JlYXRlQ29uZGl0aW9uKGVsZW1lbnQudmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbiA9IHRoaXMuY3JlYXRlQ29uZGl0aW9uKCdlcXVhbHMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbiA9IHRoaXMuY3JlYXRlQ29uZGl0aW9uKCdlbXB0eScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlclRyZWUuZmlsdGVyaW5nT3BlcmFuZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogdGhpcy5jb2x1bW4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVDYXNlOiB0aGlzLmNvbHVtbi5maWx0ZXJpbmdJZ25vcmVDYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoVmFsOiBlbGVtZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBibGFua3NJdGVtSW5kZXggPSBzZWxlY3RlZEl0ZW1zLmZpbmRJbmRleChlID0+IGUudmFsdWUgPT09IG51bGwgfHwgZS52YWx1ZSA9PT0gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICBsZXQgYmxhbmtzSXRlbTogYW55O1xuICAgICAgICAgICAgICAgIGlmIChibGFua3NJdGVtSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBibGFua3NJdGVtID0gc2VsZWN0ZWRJdGVtc1tibGFua3NJdGVtSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zLnNwbGljZShibGFua3NJdGVtSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZpbHRlclRyZWUuZmlsdGVyaW5nT3BlcmFuZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogdGhpcy5jcmVhdGVDb25kaXRpb24oJ2luJyksXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogdGhpcy5jb2x1bW4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZUNhc2U6IHRoaXMuY29sdW1uLmZpbHRlcmluZ0lnbm9yZUNhc2UsXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFZhbDogbmV3IFNldCh0aGlzLmNvbHVtbi5kYXRhVHlwZSA9PT0gRGF0YVR5cGUuRGF0ZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zLm1hcChkID0+IG5ldyBEYXRlKGQudmFsdWUuZ2V0RnVsbFllYXIoKSwgZC52YWx1ZS5nZXRNb250aCgpLCBkLnZhbHVlLmdldERhdGUoKSkudG9JU09TdHJpbmcoKSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcy5tYXAoZSA9PiBlLnZhbHVlKSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChibGFua3NJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlclRyZWUuZmlsdGVyaW5nT3BlcmFuZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IHRoaXMuY3JlYXRlQ29uZGl0aW9uKCdlbXB0eScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lOiB0aGlzLmNvbHVtbi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZUNhc2U6IHRoaXMuY29sdW1uLmZpbHRlcmluZ0lnbm9yZUNhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hWYWw6IGJsYW5rc0l0ZW0udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdCA9IG5ldyBBcnJheTxFeHByZXNzaW9uVUk+KCk7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuZmlsdGVySW50ZXJuYWwodGhpcy5jb2x1bW4uZmllbGQsIGZpbHRlclRyZWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLmNsZWFyRmlsdGVyKHRoaXMuY29sdW1uLmZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZURyb3Bkb3duKCkge1xuICAgICAgICBpZiAodGhpcy5vdmVybGF5Q29tcG9uZW50SWQpIHtcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheVNlcnZpY2UuaGlkZSh0aGlzLm92ZXJsYXlDb21wb25lbnRJZCk7XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXlDb21wb25lbnRJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25LZXlEb3duKGV2ZW50QXJncykge1xuICAgICAgICBpZiAoZXZlbnRBcmdzLmtleSA9PT0gS0VZUy5FU0NBUEUgfHwgZXZlbnRBcmdzLmtleSA9PT0gS0VZUy5FU0NBUEVfSUUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50QXJncy5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJGaWx0ZXIoKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZS5jbGVhckZpbHRlcih0aGlzLmNvbHVtbi5maWVsZCk7XG4gICAgICAgIHRoaXMucG9wdWxhdGVDb2x1bW5EYXRhKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2xlYXJGaWx0ZXJLZXlEb3duKGV2ZW50QXJncykge1xuICAgICAgICBpZiAoZXZlbnRBcmdzLmtleSA9PT0gS0VZUy5FTlRFUikge1xuICAgICAgICAgICAgdGhpcy5jbGVhckZpbHRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dDdXN0b21GaWx0ZXJJdGVtKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBleHByVHJlZSA9IHRoaXMuY29sdW1uLmZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZTtcbiAgICAgICAgcmV0dXJuIGV4cHJUcmVlICYmIGV4cHJUcmVlLmZpbHRlcmluZ09wZXJhbmRzICYmIGV4cHJUcmVlLmZpbHRlcmluZ09wZXJhbmRzLmxlbmd0aCAmJlxuICAgICAgICAgICAgISgoZXhwclRyZWUuZmlsdGVyaW5nT3BlcmFuZHNbMF0gYXMgSUZpbHRlcmluZ0V4cHJlc3Npb24pLmNvbmRpdGlvbiAmJlxuICAgICAgICAgICAgKGV4cHJUcmVlLmZpbHRlcmluZ09wZXJhbmRzWzBdIGFzIElGaWx0ZXJpbmdFeHByZXNzaW9uKS5jb25kaXRpb24ubmFtZSA9PT0gJ2luJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVDb25kaXRpb24oY29uZGl0aW9uTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5jb2x1bW4uZGF0YVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuQm9vbGVhbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gSWd4Qm9vbGVhbkZpbHRlcmluZ09wZXJhbmQuaW5zdGFuY2UoKS5jb25kaXRpb24oY29uZGl0aW9uTmFtZSk7XG4gICAgICAgICAgICBjYXNlIERhdGFUeXBlLk51bWJlcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gSWd4TnVtYmVyRmlsdGVyaW5nT3BlcmFuZC5pbnN0YW5jZSgpLmNvbmRpdGlvbihjb25kaXRpb25OYW1lKTtcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuRGF0ZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gSWd4RGF0ZUZpbHRlcmluZ09wZXJhbmQuaW5zdGFuY2UoKS5jb25kaXRpb24oY29uZGl0aW9uTmFtZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBJZ3hTdHJpbmdGaWx0ZXJpbmdPcGVyYW5kLmluc3RhbmNlKCkuY29uZGl0aW9uKGNvbmRpdGlvbk5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19