import { ChangeDetectorRef, TemplateRef, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import { IgxOverlayService } from '../../../services/index';
import { IgxFilteringService } from '../grid-filtering.service';
import { IFilteringOperation } from '../../../data-operations/filtering-condition';
import { IgxExcelStyleSearchComponent } from './excel-style-search.component';
import { IgxExcelStyleCustomDialogComponent } from './excel-style-custom-dialog.component';
import { Subscription } from 'rxjs';
import { IgxExcelStyleSortingComponent } from './excel-style-sorting.component';
import { ISelectionEventArgs, IgxDropDownComponent } from '../../../drop-down';
import { IgxColumnComponent } from '../../column.component';
/**
 *@hidden
 */
export declare class FilterListItem {
    value: any;
    label: any;
    isSelected: boolean;
    indeterminate: boolean;
    isSpecial: boolean;
}
export declare class IgxExcelStyleSortingTemplateDirective {
    template: TemplateRef<any>;
    constructor(template: TemplateRef<any>);
}
export declare class IgxExcelStyleMovingTemplateDirective {
    template: TemplateRef<any>;
    constructor(template: TemplateRef<any>);
}
export declare class IgxExcelStyleHidingTemplateDirective {
    template: TemplateRef<any>;
    constructor(template: TemplateRef<any>);
}
export declare class IgxExcelStylePinningTemplateDirective {
    template: TemplateRef<any>;
    constructor(template: TemplateRef<any>);
}
/**
 * @hidden
 */
export declare class IgxGridExcelStyleFilteringComponent implements OnDestroy, AfterViewInit {
    private cdr;
    private static readonly filterOptimizationThreshold;
    private shouldOpenSubMenu;
    private expressionsList;
    private destroy$;
    private containsNullOrEmpty;
    private selectAllSelected;
    private selectAllIndeterminate;
    private filterValues;
    protected columnMoving: Subscription;
    column: IgxColumnComponent;
    filteringService: IgxFilteringService;
    listData: FilterListItem[];
    uniqueValues: any[];
    overlayService: IgxOverlayService;
    overlayComponentId: string;
    private _subMenuPositionSettings;
    private _subMenuOverlaySettings;
    className: string;
    mainDropdown: ElementRef;
    subMenu: IgxDropDownComponent;
    customDialog: IgxExcelStyleCustomDialogComponent;
    protected excelStyleSearch: IgxExcelStyleSearchComponent;
    protected excelStyleSorting: IgxExcelStyleSortingComponent;
    protected defaultExcelStyleSortingTemplate: TemplateRef<any>;
    protected defaultExcelStyleHidingTemplate: TemplateRef<any>;
    protected defaultExcelStyleMovingTemplate: TemplateRef<any>;
    protected defaultExcelStylePinningTemplate: TemplateRef<any>;
    readonly grid: any;
    readonly conditions: string[];
    readonly subMenuText: any;
    constructor(cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    clearFilterClass(): "igx-excel-filter__actions-clear" | "igx-excel-filter__actions-clear--disabled";
    initialize(column: IgxColumnComponent, filteringService: IgxFilteringService, overlayService: IgxOverlayService, overlayComponentId: string): void;
    /**
     * Returns the filtering operation condition for a given value.
     */
    getCondition(value: string): IFilteringOperation;
    /**
     * Returns the translated condition name for a given value.
     */
    translateCondition(value: string): string;
    onPin(): void;
    onHide(): void;
    onTextFilterClick(eventArgs: any): void;
    onTextFilterKeyDown(eventArgs: any): void;
    onSubMenuClosed(): void;
    onSubMenuSelection(eventArgs: ISelectionEventArgs): void;
    private areExpressionsSelectable;
    private areExpressionsValuesInTheList;
    populateColumnData(): void;
    private addBooleanItems;
    private addItems;
    private addSelectAllItem;
    private addBlanksItem;
    private sortData;
    readonly sortingTemplate: any;
    readonly movingTemplate: any;
    readonly pinningTemplate: any;
    readonly hidingTemplate: any;
    readonly applyButtonDisabled: boolean;
    applyFilter(): void;
    closeDropdown(): void;
    onKeyDown(eventArgs: any): void;
    clearFilter(): void;
    onClearFilterKeyDown(eventArgs: any): void;
    showCustomFilterItem(): boolean;
    private createCondition;
}