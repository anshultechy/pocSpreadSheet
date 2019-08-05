/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
 * @hidden
 */
FilterListItem = /** @class */ (function () {
    function FilterListItem() {
        this.isSpecial = false;
    }
    return FilterListItem;
}());
/**
 * @hidden
 */
export { FilterListItem };
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
var IgxExcelStyleSortingTemplateDirective = /** @class */ (function () {
    function IgxExcelStyleSortingTemplateDirective(template) {
        this.template = template;
    }
    IgxExcelStyleSortingTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxExcelStyleSortingTemplate]'
                },] }
    ];
    /** @nocollapse */
    IgxExcelStyleSortingTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return IgxExcelStyleSortingTemplateDirective;
}());
export { IgxExcelStyleSortingTemplateDirective };
if (false) {
    /** @type {?} */
    IgxExcelStyleSortingTemplateDirective.prototype.template;
}
var IgxExcelStyleMovingTemplateDirective = /** @class */ (function () {
    function IgxExcelStyleMovingTemplateDirective(template) {
        this.template = template;
    }
    IgxExcelStyleMovingTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxExcelStyleMovingTemplate]'
                },] }
    ];
    /** @nocollapse */
    IgxExcelStyleMovingTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return IgxExcelStyleMovingTemplateDirective;
}());
export { IgxExcelStyleMovingTemplateDirective };
if (false) {
    /** @type {?} */
    IgxExcelStyleMovingTemplateDirective.prototype.template;
}
var IgxExcelStyleHidingTemplateDirective = /** @class */ (function () {
    function IgxExcelStyleHidingTemplateDirective(template) {
        this.template = template;
    }
    IgxExcelStyleHidingTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxExcelStyleHidingTemplate]'
                },] }
    ];
    /** @nocollapse */
    IgxExcelStyleHidingTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return IgxExcelStyleHidingTemplateDirective;
}());
export { IgxExcelStyleHidingTemplateDirective };
if (false) {
    /** @type {?} */
    IgxExcelStyleHidingTemplateDirective.prototype.template;
}
var IgxExcelStylePinningTemplateDirective = /** @class */ (function () {
    function IgxExcelStylePinningTemplateDirective(template) {
        this.template = template;
    }
    IgxExcelStylePinningTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxExcelStylePinningTemplate]'
                },] }
    ];
    /** @nocollapse */
    IgxExcelStylePinningTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return IgxExcelStylePinningTemplateDirective;
}());
export { IgxExcelStylePinningTemplateDirective };
if (false) {
    /** @type {?} */
    IgxExcelStylePinningTemplateDirective.prototype.template;
}
/**
 * @hidden
 */
var IgxGridExcelStyleFilteringComponent = /** @class */ (function () {
    function IgxGridExcelStyleFilteringComponent(cdr) {
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
    Object.defineProperty(IgxGridExcelStyleFilteringComponent.prototype, "grid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.filteringService.grid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridExcelStyleFilteringComponent.prototype, "conditions", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.filters.conditionList();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridExcelStyleFilteringComponent.prototype, "subMenuText", {
        get: /**
         * @return {?}
         */
        function () {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next(true);
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.expressionsList = new Array();
        this.filteringService.generateExpressionsList(this.column.filteringExpressionsTree, this.grid.filteringLogic, this.expressionsList);
        if (this.expressionsList && this.expressionsList.length &&
            this.expressionsList[0].expression.condition.name !== 'in') {
            this.customDialog.expressionsList = this.expressionsList;
        }
        this.populateColumnData();
        if (this.excelStyleSorting) {
            /** @type {?} */
            var se = this.grid.sortingExpressions.find(function (expr) { return expr.fieldName === _this.column.field; });
            if (se) {
                this.excelStyleSorting.selectButton(se.dir);
            }
        }
        requestAnimationFrame(function () {
            _this.excelStyleSearch.searchInput.nativeElement.focus();
        });
    };
    /**
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.clearFilterClass = /**
     * @return {?}
     */
    function () {
        if (this.column.filteringExpressionsTree) {
            return 'igx-excel-filter__actions-clear';
        }
        return 'igx-excel-filter__actions-clear--disabled';
    };
    /**
     * @param {?} column
     * @param {?} filteringService
     * @param {?} overlayService
     * @param {?} overlayComponentId
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.initialize = /**
     * @param {?} column
     * @param {?} filteringService
     * @param {?} overlayService
     * @param {?} overlayComponentId
     * @return {?}
     */
    function (column, filteringService, overlayService, overlayComponentId) {
        var _this = this;
        this.column = column;
        this.filteringService = filteringService;
        this.overlayService = overlayService;
        this.overlayComponentId = overlayComponentId;
        this._subMenuOverlaySettings.outlet = this.grid.outlet;
        this.columnMoving = this.grid.onColumnMoving.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.closeDropdown();
        });
    };
    /**
     * Returns the filtering operation condition for a given value.
     */
    /**
     * Returns the filtering operation condition for a given value.
     * @param {?} value
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.getCondition = /**
     * Returns the filtering operation condition for a given value.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.column.filters.condition(value);
    };
    /**
     * Returns the translated condition name for a given value.
     */
    /**
     * Returns the translated condition name for a given value.
     * @param {?} value
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.translateCondition = /**
     * Returns the translated condition name for a given value.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.grid.resourceStrings["igx_grid_filter_" + this.getCondition(value).name] || value;
    };
    /**
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.onPin = /**
     * @return {?}
     */
    function () {
        this.column.pinned = !this.column.pinned;
        this.closeDropdown();
    };
    /**
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.onHide = /**
     * @return {?}
     */
    function () {
        this.column.hidden = true;
        this.grid.onColumnVisibilityChanged.emit({ column: this.column, newValue: true });
        this.closeDropdown();
    };
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.onTextFilterClick = /**
     * @param {?} eventArgs
     * @return {?}
     */
    function (eventArgs) {
        if (this.shouldOpenSubMenu) {
            this._subMenuOverlaySettings.positionStrategy.settings.target = eventArgs.currentTarget;
            /** @type {?} */
            var gridRect = this.grid.nativeElement.getBoundingClientRect();
            /** @type {?} */
            var dropdownRect = this.mainDropdown.nativeElement.getBoundingClientRect();
            /** @type {?} */
            var x = dropdownRect.left + dropdownRect.width;
            /** @type {?} */
            var x1 = gridRect.left + gridRect.width;
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
    };
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.onTextFilterKeyDown = /**
     * @param {?} eventArgs
     * @return {?}
     */
    function (eventArgs) {
        if (eventArgs.key === "Enter" /* ENTER */) {
            this.onTextFilterClick(eventArgs);
        }
    };
    /**
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.onSubMenuClosed = /**
     * @return {?}
     */
    function () {
        var _this = this;
        requestAnimationFrame(function () {
            _this.shouldOpenSubMenu = true;
        });
    };
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.onSubMenuSelection = /**
     * @param {?} eventArgs
     * @return {?}
     */
    function (eventArgs) {
        this.customDialog.selectedOperator = eventArgs.newSelection.value;
        eventArgs.cancel = true;
        this.mainDropdown.nativeElement.style.display = 'none';
        this.subMenu.close();
        this.customDialog.open();
    };
    /**
     * @private
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.areExpressionsSelectable = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.expressionsList.length === 1 &&
            (this.expressionsList[0].expression.condition.name === 'equals' ||
                this.expressionsList[0].expression.condition.name === 'true' ||
                this.expressionsList[0].expression.condition.name === 'false' ||
                this.expressionsList[0].expression.condition.name === 'empty' ||
                this.expressionsList[0].expression.condition.name === 'in')) {
            return true;
        }
        /** @type {?} */
        var selectableExpressionsCount = this.expressionsList.filter(function (exp) {
            return (exp.beforeOperator === 1 || exp.afterOperator === 1) &&
                (exp.expression.condition.name === 'equals' ||
                    exp.expression.condition.name === 'true' ||
                    exp.expression.condition.name === 'false' ||
                    exp.expression.condition.name === 'empty' ||
                    exp.expression.condition.name === 'in');
        }).length;
        return selectableExpressionsCount === this.expressionsList.length;
    };
    /**
     * @private
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.areExpressionsValuesInTheList = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.column.dataType === DataType.Boolean) {
            return true;
        }
        if (this.filterValues.size === 1) {
            /** @type {?} */
            var firstValue = this.filterValues.values().next().value;
            if (!firstValue && firstValue !== 0) {
                return true;
            }
        }
        for (var index = 0; index < this.uniqueValues.length; index++) {
            if (this.filterValues.has(this.uniqueValues[index])) {
                return true;
            }
        }
        return false;
    };
    /**
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.populateColumnData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var e_1, _a;
        /** @type {?} */
        var data = this.column.gridAPI.get_all_data(this.grid.id);
        /** @type {?} */
        var gridExpressionsTree = this.grid.filteringExpressionsTree;
        /** @type {?} */
        var expressionsTree = new FilteringExpressionsTree(gridExpressionsTree.operator, gridExpressionsTree.fieldName);
        try {
            for (var _b = tslib_1.__values(gridExpressionsTree.filteringOperands), _c = _b.next(); !_c.done; _c = _b.next()) {
                var operand = _c.value;
                if (operand instanceof FilteringExpressionsTree) {
                    /** @type {?} */
                    var columnExprTree = (/** @type {?} */ (operand));
                    if (columnExprTree.fieldName === this.column.field) {
                        break;
                    }
                }
                expressionsTree.filteringOperands.push(operand);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (expressionsTree.filteringOperands.length) {
            /** @type {?} */
            var state = { expressionsTree: expressionsTree };
            data = DataUtil.filter(cloneArray(data), state);
        }
        if (this.column.dataType === DataType.Date) {
            this.uniqueValues = Array.from(new Set(data.map(function (record) {
                return record[_this.column.field] ? record[_this.column.field].toDateString() : record[_this.column.field];
            })));
            this.filterValues = new Set(this.expressionsList.reduce(function (arr, e) {
                if (e.expression.condition.name === 'in') {
                    return tslib_1.__spread(arr, Array.from(((/** @type {?} */ (e.expression.searchVal))).values()).map(function (v) {
                        return new Date(v).toDateString();
                    }));
                }
                return tslib_1.__spread(arr, [e.expression.searchVal ? e.expression.searchVal.toDateString() : e.expression.searchVal]);
            }, []));
        }
        else {
            this.uniqueValues = Array.from(new Set(data.map(function (record) { return record[_this.column.field]; })));
            this.filterValues = new Set(this.expressionsList.reduce(function (arr, e) {
                if (e.expression.condition.name === 'in') {
                    return tslib_1.__spread(arr, Array.from(((/** @type {?} */ (e.expression.searchVal))).values()));
                }
                return tslib_1.__spread(arr, [e.expression.searchVal]);
            }, []));
        }
        this.listData = new Array();
        /** @type {?} */
        var shouldUpdateSelection = this.areExpressionsSelectable() && this.areExpressionsValuesInTheList();
        if (this.column.dataType === DataType.Boolean) {
            this.addBooleanItems();
        }
        else {
            this.addItems(shouldUpdateSelection);
        }
        this.listData.sort(function (a, b) { return _this.sortData(a, b); });
        if (this.column.dataType === DataType.Date) {
            this.uniqueValues = this.uniqueValues.map(function (value) { return new Date(value); });
        }
        if (this.containsNullOrEmpty) {
            this.addBlanksItem(shouldUpdateSelection);
        }
        this.addSelectAllItem();
        this.cdr.detectChanges();
    };
    /**
     * @private
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.addBooleanItems = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.selectAllSelected = true;
        this.selectAllIndeterminate = false;
        this.uniqueValues.forEach(function (element) {
            /** @type {?} */
            var filterListItem = new FilterListItem();
            if (element !== undefined && element !== null && element !== '') {
                if (_this.column.filteringExpressionsTree) {
                    if (element === true && _this.expressionsList.find(function (exp) { return exp.expression.condition.name === 'true'; })) {
                        filterListItem.isSelected = true;
                        _this.selectAllIndeterminate = true;
                    }
                    else if (element === false && _this.expressionsList.find(function (exp) { return exp.expression.condition.name === 'false'; })) {
                        filterListItem.isSelected = true;
                        _this.selectAllIndeterminate = true;
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
                _this.listData.push(filterListItem);
            }
            else {
                _this.containsNullOrEmpty = true;
            }
        });
    };
    /**
     * @private
     * @param {?} shouldUpdateSelection
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.addItems = /**
     * @private
     * @param {?} shouldUpdateSelection
     * @return {?}
     */
    function (shouldUpdateSelection) {
        var _this = this;
        this.selectAllSelected = true;
        this.selectAllIndeterminate = false;
        this.uniqueValues.forEach(function (element) {
            if (element !== undefined && element !== null && element !== '') {
                /** @type {?} */
                var filterListItem = new FilterListItem();
                if (_this.column.filteringExpressionsTree) {
                    if (shouldUpdateSelection) {
                        if (_this.filterValues.has(element)) {
                            filterListItem.isSelected = true;
                        }
                        else {
                            filterListItem.isSelected = false;
                        }
                        _this.selectAllIndeterminate = true;
                    }
                    else {
                        filterListItem.isSelected = false;
                        _this.selectAllSelected = false;
                    }
                }
                else {
                    filterListItem.isSelected = true;
                }
                if (_this.column.dataType === DataType.Date) {
                    filterListItem.value = new Date(element);
                    filterListItem.label = new Date(element);
                }
                else {
                    filterListItem.value = element;
                    filterListItem.label = element;
                }
                filterListItem.indeterminate = false;
                _this.listData.push(filterListItem);
            }
            else {
                _this.containsNullOrEmpty = true;
            }
        });
    };
    /**
     * @private
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.addSelectAllItem = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectAll = new FilterListItem();
        selectAll.isSelected = this.selectAllSelected;
        selectAll.value = this.grid.resourceStrings.igx_grid_excel_select_all;
        selectAll.label = this.grid.resourceStrings.igx_grid_excel_select_all;
        selectAll.indeterminate = this.selectAllIndeterminate;
        selectAll.isSpecial = true;
        this.listData.unshift(selectAll);
    };
    /**
     * @private
     * @param {?} shouldUpdateSelection
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.addBlanksItem = /**
     * @private
     * @param {?} shouldUpdateSelection
     * @return {?}
     */
    function (shouldUpdateSelection) {
        /** @type {?} */
        var blanks = new FilterListItem();
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
    };
    /**
     * @private
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.sortData = /**
     * @private
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        /** @type {?} */
        var valueA = a.value;
        /** @type {?} */
        var valueB = b.value;
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
    };
    Object.defineProperty(IgxGridExcelStyleFilteringComponent.prototype, "sortingTemplate", {
        // TODO: sort members by access modifier
        get: 
        // TODO: sort members by access modifier
        /**
         * @return {?}
         */
        function () {
            if (this.grid.excelStyleSortingTemplateDirective) {
                return this.grid.excelStyleSortingTemplateDirective.template;
            }
            else {
                return this.defaultExcelStyleSortingTemplate;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridExcelStyleFilteringComponent.prototype, "movingTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.grid.excelStyleMovingTemplateDirective) {
                return this.grid.excelStyleMovingTemplateDirective.template;
            }
            else {
                return this.defaultExcelStyleMovingTemplate;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridExcelStyleFilteringComponent.prototype, "pinningTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.grid.excelStylePinningTemplateDirective) {
                return this.grid.excelStylePinningTemplateDirective.template;
            }
            else {
                return this.defaultExcelStylePinningTemplate;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridExcelStyleFilteringComponent.prototype, "hidingTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.grid.excelStyleHidingTemplateDirective) {
                return this.grid.excelStyleHidingTemplateDirective.template;
            }
            else {
                return this.defaultExcelStyleHidingTemplate;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridExcelStyleFilteringComponent.prototype, "applyButtonDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.listData[0] && !this.listData[0].isSelected && !this.listData[0].indeterminate;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.applyFilter = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var filterTree = new FilteringExpressionsTree(FilteringLogic.Or, this.column.field);
        /** @type {?} */
        var selectedItems = this.listData.slice(1, this.listData.length).filter(function (el) { return el.isSelected === true; });
        /** @type {?} */
        var unselectedItem = this.listData.slice(1, this.listData.length).find(function (el) { return el.isSelected === false; });
        if (unselectedItem) {
            if (selectedItems.length <= IgxGridExcelStyleFilteringComponent.filterOptimizationThreshold) {
                selectedItems.forEach(function (element) {
                    /** @type {?} */
                    var condition = null;
                    if (element.value !== null && element.value !== undefined) {
                        if (_this.column.dataType === DataType.Boolean) {
                            condition = _this.createCondition(element.value.toString());
                        }
                        else {
                            condition = _this.createCondition('equals');
                        }
                    }
                    else {
                        condition = _this.createCondition('empty');
                    }
                    filterTree.filteringOperands.push({
                        condition: condition,
                        fieldName: _this.column.field,
                        ignoreCase: _this.column.filteringIgnoreCase,
                        searchVal: element.value
                    });
                });
            }
            else {
                /** @type {?} */
                var blanksItemIndex = selectedItems.findIndex(function (e) { return e.value === null || e.value === undefined; });
                /** @type {?} */
                var blanksItem = void 0;
                if (blanksItemIndex >= 0) {
                    blanksItem = selectedItems[blanksItemIndex];
                    selectedItems.splice(blanksItemIndex, 1);
                }
                filterTree.filteringOperands.push({
                    condition: this.createCondition('in'),
                    fieldName: this.column.field,
                    ignoreCase: this.column.filteringIgnoreCase,
                    searchVal: new Set(this.column.dataType === DataType.Date ?
                        selectedItems.map(function (d) { return new Date(d.value.getFullYear(), d.value.getMonth(), d.value.getDate()).toISOString(); }) :
                        selectedItems.map(function (e) { return e.value; }))
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
    };
    /**
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.closeDropdown = /**
     * @return {?}
     */
    function () {
        if (this.overlayComponentId) {
            this.overlayService.hide(this.overlayComponentId);
            this.overlayComponentId = null;
        }
    };
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.onKeyDown = /**
     * @param {?} eventArgs
     * @return {?}
     */
    function (eventArgs) {
        if (eventArgs.key === "Escape" /* ESCAPE */ || eventArgs.key === "Esc" /* ESCAPE_IE */) {
            this.closeDropdown();
        }
        eventArgs.stopPropagation();
    };
    /**
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.clearFilter = /**
     * @return {?}
     */
    function () {
        this.filteringService.clearFilter(this.column.field);
        this.populateColumnData();
    };
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.onClearFilterKeyDown = /**
     * @param {?} eventArgs
     * @return {?}
     */
    function (eventArgs) {
        if (eventArgs.key === "Enter" /* ENTER */) {
            this.clearFilter();
        }
    };
    /**
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.showCustomFilterItem = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var exprTree = this.column.filteringExpressionsTree;
        return exprTree && exprTree.filteringOperands && exprTree.filteringOperands.length &&
            !(((/** @type {?} */ (exprTree.filteringOperands[0]))).condition &&
                ((/** @type {?} */ (exprTree.filteringOperands[0]))).condition.name === 'in');
    };
    /**
     * @private
     * @param {?} conditionName
     * @return {?}
     */
    IgxGridExcelStyleFilteringComponent.prototype.createCondition = /**
     * @private
     * @param {?} conditionName
     * @return {?}
     */
    function (conditionName) {
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
    };
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
    IgxGridExcelStyleFilteringComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
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
    return IgxGridExcelStyleFilteringComponent;
}());
export { IgxGridExcelStyleFilteringComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5leGNlbC1zdHlsZS1maWx0ZXJpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9maWx0ZXJpbmcvZXhjZWwtc3R5bGUvZ3JpZC5leGNlbC1zdHlsZS1maWx0ZXJpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNILGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCx1QkFBdUIsRUFDdkIsV0FBVyxFQUNYLFNBQVMsRUFHVCxVQUFVLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNILG1CQUFtQixFQUNuQixpQkFBaUIsRUFDakIsNEJBQTRCLEVBRzVCLHNCQUFzQixFQUN6QixNQUFNLHlCQUF5QixDQUFDO0FBR2pDLE9BQU8sRUFFSCx5QkFBeUIsRUFDekIseUJBQXlCLEVBQ3pCLDBCQUEwQixFQUMxQix1QkFBdUIsRUFDMUIsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RCxPQUFPLEVBQUUsd0JBQXdCLEVBQTZCLE1BQU0scURBQXFELENBQUM7QUFDMUgsT0FBTyxFQUFFLGNBQWMsRUFBd0IsTUFBTSx5REFBeUQsQ0FBQztBQUMvRyxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRixPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1B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QUM1QyxnRUFBd0Q7Ozs7O0lBRXhELGdFQUFpQzs7Ozs7SUFDakMsOERBQW9EOzs7OztJQUNwRCx1REFBMEM7Ozs7O0lBQzFDLGtFQUFvQzs7Ozs7SUFDcEMsZ0VBQWlDOzs7OztJQUNqQyxxRUFBdUM7Ozs7O0lBQ3ZDLDJEQUFzQzs7Ozs7SUFFdEMsMkRBQTRDOztJQUU1QyxxREFBa0M7O0lBQ2xDLCtEQUE2Qzs7SUFDN0MsdURBQThDOztJQUM5QywyREFBeUI7O0lBQ3pCLDZEQUF5Qzs7SUFDekMsaUVBQWtDOzs7OztJQUVsQyx1RUFFRTs7Ozs7SUFFRixzRUFLRTs7SUFFRix3REFDK0I7O0lBRS9CLDJEQUNnQzs7SUFFaEMsc0RBQ3FDOztJQUVyQywyREFDd0Q7Ozs7O0lBRXhELCtEQUN5RDs7Ozs7SUFFekQsZ0VBQzJEOzs7OztJQUUzRCwrRUFDNkQ7Ozs7O0lBRTdELDhFQUM0RDs7Ozs7SUFFNUQsOEVBQzREOzs7OztJQUU1RCwrRUFDNkQ7Ozs7O0lBdUJqRCxrREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBWaWV3Q2hpbGQsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgRGlyZWN0aXZlLFxuICAgIE9uRGVzdHJveSxcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIEhvcml6b250YWxBbGlnbm1lbnQsXG4gICAgVmVydGljYWxBbGlnbm1lbnQsXG4gICAgQ29ubmVjdGVkUG9zaXRpb25pbmdTdHJhdGVneSxcbiAgICBPdmVybGF5U2V0dGluZ3MsXG4gICAgSWd4T3ZlcmxheVNlcnZpY2UsXG4gICAgQWJzb2x1dGVTY3JvbGxTdHJhdGVneVxufSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBJZ3hGaWx0ZXJpbmdTZXJ2aWNlLCBFeHByZXNzaW9uVUkgfSBmcm9tICcuLi9ncmlkLWZpbHRlcmluZy5zZXJ2aWNlJztcbmltcG9ydCB7IElneFRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvdG9nZ2xlL3RvZ2dsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtcbiAgICBJRmlsdGVyaW5nT3BlcmF0aW9uLFxuICAgIElneFN0cmluZ0ZpbHRlcmluZ09wZXJhbmQsXG4gICAgSWd4TnVtYmVyRmlsdGVyaW5nT3BlcmFuZCxcbiAgICBJZ3hCb29sZWFuRmlsdGVyaW5nT3BlcmFuZCxcbiAgICBJZ3hEYXRlRmlsdGVyaW5nT3BlcmFuZFxufSBmcm9tICcuLi8uLi8uLi9kYXRhLW9wZXJhdGlvbnMvZmlsdGVyaW5nLWNvbmRpdGlvbic7XG5pbXBvcnQgeyBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUsIElGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUgfSBmcm9tICcuLi8uLi8uLi9kYXRhLW9wZXJhdGlvbnMvZmlsdGVyaW5nLWV4cHJlc3Npb25zLXRyZWUnO1xuaW1wb3J0IHsgRmlsdGVyaW5nTG9naWMsIElGaWx0ZXJpbmdFeHByZXNzaW9uIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1vcGVyYXRpb25zL2ZpbHRlcmluZy1leHByZXNzaW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBjbG9uZUFycmF5LCBLRVlTIH0gZnJvbSAnLi4vLi4vLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBEYXRhVHlwZSwgRGF0YVV0aWwgfSBmcm9tICcuLi8uLi8uLi9kYXRhLW9wZXJhdGlvbnMvZGF0YS11dGlsJztcbmltcG9ydCB7IElneEV4Y2VsU3R5bGVTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL2V4Y2VsLXN0eWxlLXNlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4RXhjZWxTdHlsZUN1c3RvbURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZXhjZWwtc3R5bGUtY3VzdG9tLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJZ3hFeGNlbFN0eWxlU29ydGluZ0NvbXBvbmVudCB9IGZyb20gJy4vZXhjZWwtc3R5bGUtc29ydGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSVNlbGVjdGlvbkV2ZW50QXJncywgSWd4RHJvcERvd25Db21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9kcm9wLWRvd24nO1xuaW1wb3J0IHsgSWd4Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29sdW1uLmNvbXBvbmVudCc7XG5cbi8qKlxuICpAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBGaWx0ZXJMaXN0SXRlbSB7XG4gICAgcHVibGljIHZhbHVlOiBhbnk7XG4gICAgcHVibGljIGxhYmVsOiBhbnk7XG4gICAgcHVibGljIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XG4gICAgcHVibGljIGluZGV0ZXJtaW5hdGU6IGJvb2xlYW47XG4gICAgcHVibGljIGlzU3BlY2lhbCA9IGZhbHNlO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hFeGNlbFN0eWxlU29ydGluZ1RlbXBsYXRlXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4RXhjZWxTdHlsZVNvcnRpbmdUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hFeGNlbFN0eWxlTW92aW5nVGVtcGxhdGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hFeGNlbFN0eWxlTW92aW5nVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge31cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4RXhjZWxTdHlsZUhpZGluZ1RlbXBsYXRlXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4RXhjZWxTdHlsZUhpZGluZ1RlbXBsYXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneEV4Y2VsU3R5bGVQaW5uaW5nVGVtcGxhdGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hFeGNlbFN0eWxlUGlubmluZ1RlbXBsYXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgICBzZWxlY3RvcjogJ2lneC1ncmlkLWV4Y2VsLXN0eWxlLWZpbHRlcmluZycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2dyaWQuZXhjZWwtc3R5bGUtZmlsdGVyaW5nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hHcmlkRXhjZWxTdHlsZUZpbHRlcmluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgZmlsdGVyT3B0aW1pemF0aW9uVGhyZXNob2xkID0gMjtcblxuICAgIHByaXZhdGUgc2hvdWxkT3BlblN1Yk1lbnUgPSB0cnVlO1xuICAgIHByaXZhdGUgZXhwcmVzc2lvbnNMaXN0ID0gbmV3IEFycmF5PEV4cHJlc3Npb25VST4oKTtcbiAgICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICBwcml2YXRlIGNvbnRhaW5zTnVsbE9yRW1wdHkgPSBmYWxzZTtcbiAgICBwcml2YXRlIHNlbGVjdEFsbFNlbGVjdGVkID0gdHJ1ZTtcbiAgICBwcml2YXRlIHNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICBwcml2YXRlIGZpbHRlclZhbHVlcyA9IG5ldyBTZXQ8YW55PigpO1xuXG4gICAgcHJvdGVjdGVkIGNvbHVtbk1vdmluZyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICAgIHB1YmxpYyBjb2x1bW46IElneENvbHVtbkNvbXBvbmVudDtcbiAgICBwdWJsaWMgZmlsdGVyaW5nU2VydmljZTogSWd4RmlsdGVyaW5nU2VydmljZTtcbiAgICBwdWJsaWMgbGlzdERhdGEgPSBuZXcgQXJyYXk8RmlsdGVyTGlzdEl0ZW0+KCk7XG4gICAgcHVibGljIHVuaXF1ZVZhbHVlcyA9IFtdO1xuICAgIHB1YmxpYyBvdmVybGF5U2VydmljZTogSWd4T3ZlcmxheVNlcnZpY2U7XG4gICAgcHVibGljIG92ZXJsYXlDb21wb25lbnRJZDogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfc3ViTWVudVBvc2l0aW9uU2V0dGluZ3MgPSB7XG4gICAgICAgIHZlcnRpY2FsU3RhcnRQb2ludDogVmVydGljYWxBbGlnbm1lbnQuVG9wXG4gICAgfTtcblxuICAgIHByaXZhdGUgX3N1Yk1lbnVPdmVybGF5U2V0dGluZ3M6IE92ZXJsYXlTZXR0aW5ncyA9IHtcbiAgICAgICAgY2xvc2VPbk91dHNpZGVDbGljazogdHJ1ZSxcbiAgICAgICAgbW9kYWw6IGZhbHNlLFxuICAgICAgICBwb3NpdGlvblN0cmF0ZWd5OiBuZXcgQ29ubmVjdGVkUG9zaXRpb25pbmdTdHJhdGVneSh0aGlzLl9zdWJNZW51UG9zaXRpb25TZXR0aW5ncyksXG4gICAgICAgIHNjcm9sbFN0cmF0ZWd5OiBuZXcgQWJzb2x1dGVTY3JvbGxTdHJhdGVneSgpXG4gICAgfTtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWV4Y2VsLWZpbHRlcicpXG4gICAgY2xhc3NOYW1lID0gJ2lneC1leGNlbC1maWx0ZXInO1xuXG4gICAgQFZpZXdDaGlsZCgnZHJvcGRvd24nLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBtYWluRHJvcGRvd246IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkKCdzdWJNZW51JywgeyByZWFkOiBJZ3hEcm9wRG93bkNvbXBvbmVudCwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIHN1Yk1lbnU6IElneERyb3BEb3duQ29tcG9uZW50O1xuXG4gICAgQFZpZXdDaGlsZCgnY3VzdG9tRGlhbG9nJywgeyByZWFkOiBJZ3hFeGNlbFN0eWxlQ3VzdG9tRGlhbG9nQ29tcG9uZW50LCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgY3VzdG9tRGlhbG9nOiBJZ3hFeGNlbFN0eWxlQ3VzdG9tRGlhbG9nQ29tcG9uZW50O1xuXG4gICAgQFZpZXdDaGlsZCgnZXhjZWxTdHlsZVNlYXJjaCcsIHsgcmVhZDogSWd4RXhjZWxTdHlsZVNlYXJjaENvbXBvbmVudCwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGV4Y2VsU3R5bGVTZWFyY2g6IElneEV4Y2VsU3R5bGVTZWFyY2hDb21wb25lbnQ7XG5cbiAgICBAVmlld0NoaWxkKCdleGNlbFN0eWxlU29ydGluZycsIHsgcmVhZDogSWd4RXhjZWxTdHlsZVNvcnRpbmdDb21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcm90ZWN0ZWQgZXhjZWxTdHlsZVNvcnRpbmc6IElneEV4Y2VsU3R5bGVTb3J0aW5nQ29tcG9uZW50O1xuXG4gICAgQFZpZXdDaGlsZCgnZGVmYXVsdEV4Y2VsU3R5bGVTb3J0aW5nVGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdEV4Y2VsU3R5bGVTb3J0aW5nVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdkZWZhdWx0RXhjZWxTdHlsZUhpZGluZ1RlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGRlZmF1bHRFeGNlbFN0eWxlSGlkaW5nVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdkZWZhdWx0RXhjZWxTdHlsZU1vdmluZ1RlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJvdGVjdGVkIGRlZmF1bHRFeGNlbFN0eWxlTW92aW5nVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdkZWZhdWx0RXhjZWxTdHlsZVBpbm5pbmdUZW1wbGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCBkZWZhdWx0RXhjZWxTdHlsZVBpbm5pbmdUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGdldCBncmlkKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuZ3JpZDtcbiAgICB9XG5cbiAgICBnZXQgY29uZGl0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLmZpbHRlcnMuY29uZGl0aW9uTGlzdCgpO1xuICAgIH1cblxuICAgIGdldCBzdWJNZW51VGV4dCgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmNvbHVtbi5kYXRhVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBEYXRhVHlwZS5Cb29sZWFuOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdyaWQucmVzb3VyY2VTdHJpbmdzLmlneF9ncmlkX2V4Y2VsX2Jvb2xlYW5fZmlsdGVyO1xuICAgICAgICAgICAgY2FzZSBEYXRhVHlwZS5OdW1iZXI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5yZXNvdXJjZVN0cmluZ3MuaWd4X2dyaWRfZXhjZWxfbnVtYmVyX2ZpbHRlcjtcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuRGF0ZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnJlc291cmNlU3RyaW5ncy5pZ3hfZ3JpZF9leGNlbF9kYXRlX2ZpbHRlcjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5yZXNvdXJjZVN0cmluZ3MuaWd4X2dyaWRfZXhjZWxfdGV4dF9maWx0ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdCA9IG5ldyBBcnJheTxFeHByZXNzaW9uVUk+KCk7XG4gICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZS5nZW5lcmF0ZUV4cHJlc3Npb25zTGlzdCh0aGlzLmNvbHVtbi5maWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUsIHRoaXMuZ3JpZC5maWx0ZXJpbmdMb2dpYywgdGhpcy5leHByZXNzaW9uc0xpc3QpO1xuICAgICAgICBpZiAodGhpcy5leHByZXNzaW9uc0xpc3QgJiYgdGhpcy5leHByZXNzaW9uc0xpc3QubGVuZ3RoICYmXG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdFswXS5leHByZXNzaW9uLmNvbmRpdGlvbi5uYW1lICE9PSAnaW4nKSB7XG4gICAgICAgICAgICB0aGlzLmN1c3RvbURpYWxvZy5leHByZXNzaW9uc0xpc3QgPSB0aGlzLmV4cHJlc3Npb25zTGlzdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvcHVsYXRlQ29sdW1uRGF0YSgpO1xuXG4gICAgICAgIGlmICh0aGlzLmV4Y2VsU3R5bGVTb3J0aW5nKSB7XG4gICAgICAgICAgICBjb25zdCBzZSA9IHRoaXMuZ3JpZC5zb3J0aW5nRXhwcmVzc2lvbnMuZmluZChleHByID0+IGV4cHIuZmllbGROYW1lID09PSB0aGlzLmNvbHVtbi5maWVsZCk7XG4gICAgICAgICAgICBpZiAoc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4Y2VsU3R5bGVTb3J0aW5nLnNlbGVjdEJ1dHRvbihzZS5kaXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXhjZWxTdHlsZVNlYXJjaC5zZWFyY2hJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckZpbHRlckNsYXNzKCkge1xuICAgICAgICBpZiAodGhpcy5jb2x1bW4uZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2lneC1leGNlbC1maWx0ZXJfX2FjdGlvbnMtY2xlYXInO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICdpZ3gtZXhjZWwtZmlsdGVyX19hY3Rpb25zLWNsZWFyLS1kaXNhYmxlZCc7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXRpYWxpemUoY29sdW1uOiBJZ3hDb2x1bW5Db21wb25lbnQsIGZpbHRlcmluZ1NlcnZpY2U6IElneEZpbHRlcmluZ1NlcnZpY2UsIG92ZXJsYXlTZXJ2aWNlOiBJZ3hPdmVybGF5U2VydmljZSxcbiAgICAgICAgb3ZlcmxheUNvbXBvbmVudElkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG4gICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZSA9IGZpbHRlcmluZ1NlcnZpY2U7XG4gICAgICAgIHRoaXMub3ZlcmxheVNlcnZpY2UgPSBvdmVybGF5U2VydmljZTtcbiAgICAgICAgdGhpcy5vdmVybGF5Q29tcG9uZW50SWQgPSBvdmVybGF5Q29tcG9uZW50SWQ7XG5cbiAgICAgICAgdGhpcy5fc3ViTWVudU92ZXJsYXlTZXR0aW5ncy5vdXRsZXQgPSB0aGlzLmdyaWQub3V0bGV0O1xuXG4gICAgICAgIHRoaXMuY29sdW1uTW92aW5nID0gdGhpcy5ncmlkLm9uQ29sdW1uTW92aW5nLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpbHRlcmluZyBvcGVyYXRpb24gY29uZGl0aW9uIGZvciBhIGdpdmVuIHZhbHVlLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDb25kaXRpb24odmFsdWU6IHN0cmluZyk6IElGaWx0ZXJpbmdPcGVyYXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4uZmlsdGVycy5jb25kaXRpb24odmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRyYW5zbGF0ZWQgY29uZGl0aW9uIG5hbWUgZm9yIGEgZ2l2ZW4gdmFsdWUuXG4gICAgICovXG4gICAgcHVibGljIHRyYW5zbGF0ZUNvbmRpdGlvbih2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5yZXNvdXJjZVN0cmluZ3NbYGlneF9ncmlkX2ZpbHRlcl8ke3RoaXMuZ2V0Q29uZGl0aW9uKHZhbHVlKS5uYW1lfWBdIHx8IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblBpbigpIHtcbiAgICAgICAgdGhpcy5jb2x1bW4ucGlubmVkID0gIXRoaXMuY29sdW1uLnBpbm5lZDtcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uSGlkZSgpIHtcbiAgICAgICAgdGhpcy5jb2x1bW4uaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ncmlkLm9uQ29sdW1uVmlzaWJpbGl0eUNoYW5nZWQuZW1pdCh7IGNvbHVtbjogdGhpcy5jb2x1bW4sIG5ld1ZhbHVlOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25UZXh0RmlsdGVyQ2xpY2soZXZlbnRBcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZE9wZW5TdWJNZW51KSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJNZW51T3ZlcmxheVNldHRpbmdzLnBvc2l0aW9uU3RyYXRlZ3kuc2V0dGluZ3MudGFyZ2V0ID0gZXZlbnRBcmdzLmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgICAgICAgIGNvbnN0IGdyaWRSZWN0ID0gdGhpcy5ncmlkLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBkcm9wZG93blJlY3QgPSB0aGlzLm1haW5Ecm9wZG93bi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICBsZXQgeCA9IGRyb3Bkb3duUmVjdC5sZWZ0ICsgZHJvcGRvd25SZWN0LndpZHRoO1xuICAgICAgICAgICAgbGV0IHgxID0gZ3JpZFJlY3QubGVmdCArIGdyaWRSZWN0LndpZHRoO1xuICAgICAgICAgICAgeCArPSB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICB4MSArPSB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoeCAtIHgxKSA8IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N1Yk1lbnVPdmVybGF5U2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5zZXR0aW5ncy5ob3Jpem9udGFsRGlyZWN0aW9uID0gSG9yaXpvbnRhbEFsaWdubWVudC5MZWZ0O1xuICAgICAgICAgICAgICAgIHRoaXMuX3N1Yk1lbnVPdmVybGF5U2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5zZXR0aW5ncy5ob3Jpem9udGFsU3RhcnRQb2ludCA9IEhvcml6b250YWxBbGlnbm1lbnQuTGVmdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3ViTWVudU92ZXJsYXlTZXR0aW5ncy5wb3NpdGlvblN0cmF0ZWd5LnNldHRpbmdzLmhvcml6b250YWxEaXJlY3Rpb24gPSBIb3Jpem9udGFsQWxpZ25tZW50LlJpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMuX3N1Yk1lbnVPdmVybGF5U2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5zZXR0aW5ncy5ob3Jpem9udGFsU3RhcnRQb2ludCA9IEhvcml6b250YWxBbGlnbm1lbnQuUmlnaHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3ViTWVudS5vcGVuKHRoaXMuX3N1Yk1lbnVPdmVybGF5U2V0dGluZ3MpO1xuICAgICAgICAgICAgdGhpcy5zaG91bGRPcGVuU3ViTWVudSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uVGV4dEZpbHRlcktleURvd24oZXZlbnRBcmdzKSB7XG4gICAgICAgIGlmIChldmVudEFyZ3Mua2V5ID09PSBLRVlTLkVOVEVSKSB7XG4gICAgICAgICAgICB0aGlzLm9uVGV4dEZpbHRlckNsaWNrKGV2ZW50QXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25TdWJNZW51Q2xvc2VkKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG91bGRPcGVuU3ViTWVudSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblN1Yk1lbnVTZWxlY3Rpb24oZXZlbnRBcmdzOiBJU2VsZWN0aW9uRXZlbnRBcmdzKSB7XG4gICAgICAgIHRoaXMuY3VzdG9tRGlhbG9nLnNlbGVjdGVkT3BlcmF0b3IgPSBldmVudEFyZ3MubmV3U2VsZWN0aW9uLnZhbHVlO1xuICAgICAgICBldmVudEFyZ3MuY2FuY2VsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tYWluRHJvcGRvd24ubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnN1Yk1lbnUuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5jdXN0b21EaWFsb2cub3BlbigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXJlRXhwcmVzc2lvbnNTZWxlY3RhYmxlICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZXhwcmVzc2lvbnNMaXN0Lmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICAgICAgKHRoaXMuZXhwcmVzc2lvbnNMaXN0WzBdLmV4cHJlc3Npb24uY29uZGl0aW9uLm5hbWUgPT09ICdlcXVhbHMnIHx8XG4gICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uc0xpc3RbMF0uZXhwcmVzc2lvbi5jb25kaXRpb24ubmFtZSA9PT0gJ3RydWUnIHx8XG4gICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uc0xpc3RbMF0uZXhwcmVzc2lvbi5jb25kaXRpb24ubmFtZSA9PT0gJ2ZhbHNlJyB8fFxuICAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbnNMaXN0WzBdLmV4cHJlc3Npb24uY29uZGl0aW9uLm5hbWUgPT09ICdlbXB0eScgfHxcbiAgICAgICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdFswXS5leHByZXNzaW9uLmNvbmRpdGlvbi5uYW1lID09PSAnaW4nKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWxlY3RhYmxlRXhwcmVzc2lvbnNDb3VudCA9IHRoaXMuZXhwcmVzc2lvbnNMaXN0LmZpbHRlcihleHAgPT5cbiAgICAgICAgICAgIChleHAuYmVmb3JlT3BlcmF0b3IgPT09IDEgfHwgZXhwLmFmdGVyT3BlcmF0b3IgPT09IDEpICYmXG4gICAgICAgICAgICAoZXhwLmV4cHJlc3Npb24uY29uZGl0aW9uLm5hbWUgPT09ICdlcXVhbHMnIHx8XG4gICAgICAgICAgICAgZXhwLmV4cHJlc3Npb24uY29uZGl0aW9uLm5hbWUgPT09ICd0cnVlJyB8fFxuICAgICAgICAgICAgIGV4cC5leHByZXNzaW9uLmNvbmRpdGlvbi5uYW1lID09PSAnZmFsc2UnIHx8XG4gICAgICAgICAgICAgZXhwLmV4cHJlc3Npb24uY29uZGl0aW9uLm5hbWUgPT09ICdlbXB0eScgfHxcbiAgICAgICAgICAgICBleHAuZXhwcmVzc2lvbi5jb25kaXRpb24ubmFtZSA9PT0gJ2luJykpLmxlbmd0aDtcblxuICAgICAgICByZXR1cm4gc2VsZWN0YWJsZUV4cHJlc3Npb25zQ291bnQgPT09IHRoaXMuZXhwcmVzc2lvbnNMaXN0Lmxlbmd0aDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFyZUV4cHJlc3Npb25zVmFsdWVzSW5UaGVMaXN0KCkge1xuICAgICAgICBpZiAodGhpcy5jb2x1bW4uZGF0YVR5cGUgPT09IERhdGFUeXBlLkJvb2xlYW4pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyVmFsdWVzLnNpemUgPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VmFsdWUgPSB0aGlzLmZpbHRlclZhbHVlcy52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XG5cbiAgICAgICAgICAgIGlmICghZmlyc3RWYWx1ZSAmJiBmaXJzdFZhbHVlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy51bmlxdWVWYWx1ZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJWYWx1ZXMuaGFzKHRoaXMudW5pcXVlVmFsdWVzW2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9wdWxhdGVDb2x1bW5EYXRhKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY29sdW1uLmdyaWRBUEkuZ2V0X2FsbF9kYXRhKHRoaXMuZ3JpZC5pZCk7XG4gICAgICAgIGNvbnN0IGdyaWRFeHByZXNzaW9uc1RyZWU6IElGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUgPSB0aGlzLmdyaWQuZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlO1xuICAgICAgICBjb25zdCBleHByZXNzaW9uc1RyZWUgPSBuZXcgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKGdyaWRFeHByZXNzaW9uc1RyZWUub3BlcmF0b3IsIGdyaWRFeHByZXNzaW9uc1RyZWUuZmllbGROYW1lKTtcblxuICAgICAgICBmb3IgKGNvbnN0IG9wZXJhbmQgb2YgZ3JpZEV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcykge1xuICAgICAgICAgICAgaWYgKG9wZXJhbmQgaW5zdGFuY2VvZiBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5FeHByVHJlZSA9IG9wZXJhbmQgYXMgRmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlO1xuICAgICAgICAgICAgICAgIGlmIChjb2x1bW5FeHByVHJlZS5maWVsZE5hbWUgPT09IHRoaXMuY29sdW1uLmZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5wdXNoKG9wZXJhbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4cHJlc3Npb25zVHJlZS5maWx0ZXJpbmdPcGVyYW5kcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0geyBleHByZXNzaW9uc1RyZWU6IGV4cHJlc3Npb25zVHJlZSB9O1xuICAgICAgICAgICAgZGF0YSA9IERhdGFVdGlsLmZpbHRlcihjbG9uZUFycmF5KGRhdGEpLCBzdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2x1bW4uZGF0YVR5cGUgPT09IERhdGFUeXBlLkRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudW5pcXVlVmFsdWVzID0gQXJyYXkuZnJvbShuZXcgU2V0KGRhdGEubWFwKHJlY29yZCA9PlxuICAgICAgICAgICAgICAgIHJlY29yZFt0aGlzLmNvbHVtbi5maWVsZF0gPyByZWNvcmRbdGhpcy5jb2x1bW4uZmllbGRdLnRvRGF0ZVN0cmluZygpIDogcmVjb3JkW3RoaXMuY29sdW1uLmZpZWxkXSkpKTtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyVmFsdWVzID0gbmV3IFNldDxhbnk+KHRoaXMuZXhwcmVzc2lvbnNMaXN0LnJlZHVjZSgoYXJyLCBlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUuZXhwcmVzc2lvbi5jb25kaXRpb24ubmFtZSA9PT0gJ2luJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWyAuLi5hcnIsIC4uLkFycmF5LmZyb20oKGUuZXhwcmVzc2lvbi5zZWFyY2hWYWwgYXMgU2V0PGFueT4pLnZhbHVlcygpKS5tYXAodiA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUodikudG9EYXRlU3RyaW5nKCkpIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbIC4uLmFyciwgLi4uW2UuZXhwcmVzc2lvbi5zZWFyY2hWYWwgPyBlLmV4cHJlc3Npb24uc2VhcmNoVmFsLnRvRGF0ZVN0cmluZygpIDogZS5leHByZXNzaW9uLnNlYXJjaFZhbF0gXTtcbiAgICAgICAgICAgIH0sIFtdKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVuaXF1ZVZhbHVlcyA9IEFycmF5LmZyb20obmV3IFNldChkYXRhLm1hcChyZWNvcmQgPT4gcmVjb3JkW3RoaXMuY29sdW1uLmZpZWxkXSkpKTtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyVmFsdWVzID0gbmV3IFNldDxhbnk+KHRoaXMuZXhwcmVzc2lvbnNMaXN0LnJlZHVjZSgoYXJyLCBlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUuZXhwcmVzc2lvbi5jb25kaXRpb24ubmFtZSA9PT0gJ2luJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWyAuLi5hcnIsIC4uLkFycmF5LmZyb20oKGUuZXhwcmVzc2lvbi5zZWFyY2hWYWwgYXMgU2V0PGFueT4pLnZhbHVlcygpKSBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWyAuLi5hcnIsIC4uLltlLmV4cHJlc3Npb24uc2VhcmNoVmFsXSBdO1xuICAgICAgICAgICAgfSwgW10pKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpc3REYXRhID0gbmV3IEFycmF5PEZpbHRlckxpc3RJdGVtPigpO1xuXG4gICAgICAgIGNvbnN0IHNob3VsZFVwZGF0ZVNlbGVjdGlvbiA9IHRoaXMuYXJlRXhwcmVzc2lvbnNTZWxlY3RhYmxlKCkgJiYgdGhpcy5hcmVFeHByZXNzaW9uc1ZhbHVlc0luVGhlTGlzdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbHVtbi5kYXRhVHlwZSA9PT0gRGF0YVR5cGUuQm9vbGVhbikge1xuICAgICAgICAgICAgdGhpcy5hZGRCb29sZWFuSXRlbXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkSXRlbXMoc2hvdWxkVXBkYXRlU2VsZWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGlzdERhdGEuc29ydCgoYSwgYikgPT4gdGhpcy5zb3J0RGF0YShhLCBiKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29sdW1uLmRhdGFUeXBlID09PSBEYXRhVHlwZS5EYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnVuaXF1ZVZhbHVlcyA9IHRoaXMudW5pcXVlVmFsdWVzLm1hcCh2YWx1ZSA9PiBuZXcgRGF0ZSh2YWx1ZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnNOdWxsT3JFbXB0eSkge1xuICAgICAgICAgICAgdGhpcy5hZGRCbGFua3NJdGVtKHNob3VsZFVwZGF0ZVNlbGVjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZFNlbGVjdEFsbEl0ZW0oKTtcblxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRCb29sZWFuSXRlbXMoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0QWxsU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51bmlxdWVWYWx1ZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlckxpc3RJdGVtID0gbmV3IEZpbHRlckxpc3RJdGVtKCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gdW5kZWZpbmVkICYmIGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2x1bW4uZmlsdGVyaW5nRXhwcmVzc2lvbnNUcmVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSB0cnVlICYmIHRoaXMuZXhwcmVzc2lvbnNMaXN0LmZpbmQoZXhwID0+IGV4cC5leHByZXNzaW9uLmNvbmRpdGlvbi5uYW1lID09PSAndHJ1ZScgKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTGlzdEl0ZW0uaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgPT09IGZhbHNlICYmIHRoaXMuZXhwcmVzc2lvbnNMaXN0LmZpbmQoZXhwID0+IGV4cC5leHByZXNzaW9uLmNvbmRpdGlvbi5uYW1lID09PSAnZmFsc2UnICkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJMaXN0SXRlbS5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTGlzdEl0ZW0uaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyTGlzdEl0ZW0uaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbHRlckxpc3RJdGVtLnZhbHVlID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICBmaWx0ZXJMaXN0SXRlbS5sYWJlbCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgZmlsdGVyTGlzdEl0ZW0uaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGEucHVzaChmaWx0ZXJMaXN0SXRlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbnNOdWxsT3JFbXB0eSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkSXRlbXMoc2hvdWxkVXBkYXRlU2VsZWN0aW9uOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0QWxsU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51bmlxdWVWYWx1ZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICE9PSB1bmRlZmluZWQgJiYgZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50ICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlckxpc3RJdGVtID0gbmV3IEZpbHRlckxpc3RJdGVtKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sdW1uLmZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkVXBkYXRlU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJWYWx1ZXMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTGlzdEl0ZW0uaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckxpc3RJdGVtLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJMaXN0SXRlbS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEFsbFNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJMaXN0SXRlbS5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sdW1uLmRhdGFUeXBlID09PSBEYXRhVHlwZS5EYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlckxpc3RJdGVtLnZhbHVlID0gbmV3IERhdGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlckxpc3RJdGVtLmxhYmVsID0gbmV3IERhdGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyTGlzdEl0ZW0udmFsdWUgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJMaXN0SXRlbS5sYWJlbCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbHRlckxpc3RJdGVtLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhLnB1c2goZmlsdGVyTGlzdEl0ZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5zTnVsbE9yRW1wdHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFNlbGVjdEFsbEl0ZW0oKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdEFsbCA9ICBuZXcgRmlsdGVyTGlzdEl0ZW0oKTtcbiAgICAgICAgc2VsZWN0QWxsLmlzU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdEFsbFNlbGVjdGVkO1xuICAgICAgICBzZWxlY3RBbGwudmFsdWUgPSB0aGlzLmdyaWQucmVzb3VyY2VTdHJpbmdzLmlneF9ncmlkX2V4Y2VsX3NlbGVjdF9hbGw7XG4gICAgICAgIHNlbGVjdEFsbC5sYWJlbCA9IHRoaXMuZ3JpZC5yZXNvdXJjZVN0cmluZ3MuaWd4X2dyaWRfZXhjZWxfc2VsZWN0X2FsbDtcbiAgICAgICAgc2VsZWN0QWxsLmluZGV0ZXJtaW5hdGUgPSB0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGU7XG4gICAgICAgIHNlbGVjdEFsbC5pc1NwZWNpYWwgPSB0cnVlO1xuICAgICAgICB0aGlzLmxpc3REYXRhLnVuc2hpZnQoc2VsZWN0QWxsKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEJsYW5rc0l0ZW0oc2hvdWxkVXBkYXRlU2VsZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGJsYW5rcyA9ICBuZXcgRmlsdGVyTGlzdEl0ZW0oKTtcbiAgICAgICAgaWYgKHRoaXMuY29sdW1uLmZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZSkge1xuICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZVNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlclZhbHVlcy5oYXMobnVsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYmxhbmtzLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJsYW5rcy5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmxhbmtzLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGJsYW5rcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIGJsYW5rcy5sYWJlbCA9IHRoaXMuZ3JpZC5yZXNvdXJjZVN0cmluZ3MuaWd4X2dyaWRfZXhjZWxfYmxhbmtzO1xuICAgICAgICBibGFua3MuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgICBibGFua3MuaXNTcGVjaWFsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5saXN0RGF0YS51bnNoaWZ0KGJsYW5rcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzb3J0RGF0YShhOiBGaWx0ZXJMaXN0SXRlbSwgYjogRmlsdGVyTGlzdEl0ZW0pIHtcbiAgICAgICAgbGV0IHZhbHVlQSA9IGEudmFsdWU7XG4gICAgICAgIGxldCB2YWx1ZUIgPSBiLnZhbHVlO1xuICAgICAgICBpZiAodHlwZW9mKGEpID09PSBEYXRhVHlwZS5TdHJpbmcpIHtcbiAgICAgICAgICAgIHZhbHVlQSA9IGEudmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIHZhbHVlQiA9IGIudmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWVBIDwgdmFsdWVCKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWVBID4gdmFsdWVCKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVE9ETzogc29ydCBtZW1iZXJzIGJ5IGFjY2VzcyBtb2RpZmllclxuXG4gICAgZ2V0IHNvcnRpbmdUZW1wbGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5leGNlbFN0eWxlU29ydGluZ1RlbXBsYXRlRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmV4Y2VsU3R5bGVTb3J0aW5nVGVtcGxhdGVEaXJlY3RpdmUudGVtcGxhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0RXhjZWxTdHlsZVNvcnRpbmdUZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBtb3ZpbmdUZW1wbGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5leGNlbFN0eWxlTW92aW5nVGVtcGxhdGVEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyaWQuZXhjZWxTdHlsZU1vdmluZ1RlbXBsYXRlRGlyZWN0aXZlLnRlbXBsYXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEV4Y2VsU3R5bGVNb3ZpbmdUZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBwaW5uaW5nVGVtcGxhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmdyaWQuZXhjZWxTdHlsZVBpbm5pbmdUZW1wbGF0ZURpcmVjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5leGNlbFN0eWxlUGlubmluZ1RlbXBsYXRlRGlyZWN0aXZlLnRlbXBsYXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEV4Y2VsU3R5bGVQaW5uaW5nVGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaGlkaW5nVGVtcGxhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmdyaWQuZXhjZWxTdHlsZUhpZGluZ1RlbXBsYXRlRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmV4Y2VsU3R5bGVIaWRpbmdUZW1wbGF0ZURpcmVjdGl2ZS50ZW1wbGF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRFeGNlbFN0eWxlSGlkaW5nVGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgYXBwbHlCdXR0b25EaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdERhdGFbMF0gJiYgIXRoaXMubGlzdERhdGFbMF0uaXNTZWxlY3RlZCAmJiAhdGhpcy5saXN0RGF0YVswXS5pbmRldGVybWluYXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhcHBseUZpbHRlcigpIHtcbiAgICAgICAgY29uc3QgZmlsdGVyVHJlZSA9IG5ldyBGaWx0ZXJpbmdFeHByZXNzaW9uc1RyZWUoRmlsdGVyaW5nTG9naWMuT3IsIHRoaXMuY29sdW1uLmZpZWxkKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IHRoaXMubGlzdERhdGEuc2xpY2UoMSwgdGhpcy5saXN0RGF0YS5sZW5ndGgpLmZpbHRlcihlbCA9PiBlbC5pc1NlbGVjdGVkID09PSB0cnVlKTtcbiAgICAgICAgY29uc3QgdW5zZWxlY3RlZEl0ZW0gPSB0aGlzLmxpc3REYXRhLnNsaWNlKDEsIHRoaXMubGlzdERhdGEubGVuZ3RoKS5maW5kKGVsID0+IGVsLmlzU2VsZWN0ZWQgPT09IGZhbHNlKTtcblxuICAgICAgICBpZiAodW5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW1zLmxlbmd0aCA8PSBJZ3hHcmlkRXhjZWxTdHlsZUZpbHRlcmluZ0NvbXBvbmVudC5maWx0ZXJPcHRpbWl6YXRpb25UaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb25kaXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC52YWx1ZSAhPT0gbnVsbCAmJiBlbGVtZW50LnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbHVtbi5kYXRhVHlwZSA9PT0gRGF0YVR5cGUuQm9vbGVhbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbiA9IHRoaXMuY3JlYXRlQ29uZGl0aW9uKGVsZW1lbnQudmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbiA9IHRoaXMuY3JlYXRlQ29uZGl0aW9uKCdlcXVhbHMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbiA9IHRoaXMuY3JlYXRlQ29uZGl0aW9uKCdlbXB0eScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlclRyZWUuZmlsdGVyaW5nT3BlcmFuZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogdGhpcy5jb2x1bW4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVDYXNlOiB0aGlzLmNvbHVtbi5maWx0ZXJpbmdJZ25vcmVDYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoVmFsOiBlbGVtZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBibGFua3NJdGVtSW5kZXggPSBzZWxlY3RlZEl0ZW1zLmZpbmRJbmRleChlID0+IGUudmFsdWUgPT09IG51bGwgfHwgZS52YWx1ZSA9PT0gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICBsZXQgYmxhbmtzSXRlbTogYW55O1xuICAgICAgICAgICAgICAgIGlmIChibGFua3NJdGVtSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBibGFua3NJdGVtID0gc2VsZWN0ZWRJdGVtc1tibGFua3NJdGVtSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zLnNwbGljZShibGFua3NJdGVtSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZpbHRlclRyZWUuZmlsdGVyaW5nT3BlcmFuZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogdGhpcy5jcmVhdGVDb25kaXRpb24oJ2luJyksXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogdGhpcy5jb2x1bW4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZUNhc2U6IHRoaXMuY29sdW1uLmZpbHRlcmluZ0lnbm9yZUNhc2UsXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFZhbDogbmV3IFNldCh0aGlzLmNvbHVtbi5kYXRhVHlwZSA9PT0gRGF0YVR5cGUuRGF0ZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zLm1hcChkID0+IG5ldyBEYXRlKGQudmFsdWUuZ2V0RnVsbFllYXIoKSwgZC52YWx1ZS5nZXRNb250aCgpLCBkLnZhbHVlLmdldERhdGUoKSkudG9JU09TdHJpbmcoKSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcy5tYXAoZSA9PiBlLnZhbHVlKSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChibGFua3NJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlclRyZWUuZmlsdGVyaW5nT3BlcmFuZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IHRoaXMuY3JlYXRlQ29uZGl0aW9uKCdlbXB0eScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lOiB0aGlzLmNvbHVtbi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZUNhc2U6IHRoaXMuY29sdW1uLmZpbHRlcmluZ0lnbm9yZUNhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hWYWw6IGJsYW5rc0l0ZW0udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb25zTGlzdCA9IG5ldyBBcnJheTxFeHByZXNzaW9uVUk+KCk7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcmluZ1NlcnZpY2UuZmlsdGVySW50ZXJuYWwodGhpcy5jb2x1bW4uZmllbGQsIGZpbHRlclRyZWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJpbmdTZXJ2aWNlLmNsZWFyRmlsdGVyKHRoaXMuY29sdW1uLmZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZURyb3Bkb3duKCkge1xuICAgICAgICBpZiAodGhpcy5vdmVybGF5Q29tcG9uZW50SWQpIHtcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheVNlcnZpY2UuaGlkZSh0aGlzLm92ZXJsYXlDb21wb25lbnRJZCk7XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXlDb21wb25lbnRJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25LZXlEb3duKGV2ZW50QXJncykge1xuICAgICAgICBpZiAoZXZlbnRBcmdzLmtleSA9PT0gS0VZUy5FU0NBUEUgfHwgZXZlbnRBcmdzLmtleSA9PT0gS0VZUy5FU0NBUEVfSUUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50QXJncy5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJGaWx0ZXIoKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyaW5nU2VydmljZS5jbGVhckZpbHRlcih0aGlzLmNvbHVtbi5maWVsZCk7XG4gICAgICAgIHRoaXMucG9wdWxhdGVDb2x1bW5EYXRhKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2xlYXJGaWx0ZXJLZXlEb3duKGV2ZW50QXJncykge1xuICAgICAgICBpZiAoZXZlbnRBcmdzLmtleSA9PT0gS0VZUy5FTlRFUikge1xuICAgICAgICAgICAgdGhpcy5jbGVhckZpbHRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dDdXN0b21GaWx0ZXJJdGVtKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBleHByVHJlZSA9IHRoaXMuY29sdW1uLmZpbHRlcmluZ0V4cHJlc3Npb25zVHJlZTtcbiAgICAgICAgcmV0dXJuIGV4cHJUcmVlICYmIGV4cHJUcmVlLmZpbHRlcmluZ09wZXJhbmRzICYmIGV4cHJUcmVlLmZpbHRlcmluZ09wZXJhbmRzLmxlbmd0aCAmJlxuICAgICAgICAgICAgISgoZXhwclRyZWUuZmlsdGVyaW5nT3BlcmFuZHNbMF0gYXMgSUZpbHRlcmluZ0V4cHJlc3Npb24pLmNvbmRpdGlvbiAmJlxuICAgICAgICAgICAgKGV4cHJUcmVlLmZpbHRlcmluZ09wZXJhbmRzWzBdIGFzIElGaWx0ZXJpbmdFeHByZXNzaW9uKS5jb25kaXRpb24ubmFtZSA9PT0gJ2luJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVDb25kaXRpb24oY29uZGl0aW9uTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5jb2x1bW4uZGF0YVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuQm9vbGVhbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gSWd4Qm9vbGVhbkZpbHRlcmluZ09wZXJhbmQuaW5zdGFuY2UoKS5jb25kaXRpb24oY29uZGl0aW9uTmFtZSk7XG4gICAgICAgICAgICBjYXNlIERhdGFUeXBlLk51bWJlcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gSWd4TnVtYmVyRmlsdGVyaW5nT3BlcmFuZC5pbnN0YW5jZSgpLmNvbmRpdGlvbihjb25kaXRpb25OYW1lKTtcbiAgICAgICAgICAgIGNhc2UgRGF0YVR5cGUuRGF0ZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gSWd4RGF0ZUZpbHRlcmluZ09wZXJhbmQuaW5zdGFuY2UoKS5jb25kaXRpb24oY29uZGl0aW9uTmFtZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBJZ3hTdHJpbmdGaWx0ZXJpbmdPcGVyYW5kLmluc3RhbmNlKCkuY29uZGl0aW9uKGNvbmRpdGlvbk5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19