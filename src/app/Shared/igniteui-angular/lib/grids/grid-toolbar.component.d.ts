import { ChangeDetectorRef, TemplateRef } from '@angular/core';
import { IDisplayDensityOptions, DisplayDensityBase } from '../core/displayDensity';
import { IgxCsvExporterService, IgxExcelExporterService } from '../services/index';
import { GridBaseAPIService } from './api.service';
import { IgxGridBaseComponent, IGridDataBindable } from './grid-base.component';
import { IgxDropDownComponent } from '../drop-down/drop-down.component';
import { IgxColumnHidingComponent } from './column-hiding.component';
import { IgxColumnPinningComponent } from './column-pinning.component';
/**
 * This class encapsulates the Toolbar's logic and is internally used by
 * the `IgxGridComponent`, `IgxTreeGridComponent` and `IgxHierarchicalGridComponent`.
 */
export declare class IgxGridToolbarComponent extends DisplayDensityBase {
    gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>;
    cdr: ChangeDetectorRef;
    excelExporter: IgxExcelExporterService;
    csvExporter: IgxCsvExporterService;
    protected _displayDensityOptions: IDisplayDensityOptions;
    /**
     * @hidden
     */
    gridID: string;
    /**
     * Gets the default text shown in the filtering box.
     * ```typescript
     * const filterPrompt = this.grid.toolbar.filterColumnsPrompt;
     * ```
     */
    /**
    * Sets the default text shown in the filtering box.
    * ```typescript
    * this.grid.toolbar.filterColumnsPrompt('Filter columns ...');
    * ```
    */
    filterColumnsPrompt: string;
    private _filterColumnsPrompt;
    /**
     * Gets the height for the `IgxGridToolbarComponent`'s drop down panels.
     * ```typescript
     * const dropdownHeight = this.grid.toolbar.defaultDropDownsMaxHeight;
     * ```
     */
    readonly defaultDropDownsMaxHeight: string;
    /**
     * Provides a reference to the `IgxDropDownComponent` of the Column Hiding UI.
     * ```typescript
     * const dropdownHiding = this.grid.toolbar.columnHidingDropdown;
     * ```
     */
    columnHidingDropdown: IgxDropDownComponent;
    /**
     * Provides a reference to the `IgxColumnHidingComponent`.
     * ```typescript
     * const hidingUI = this.grid.toolbar.columnHidingUI;
     * ```
     */
    columnHidingUI: IgxColumnHidingComponent;
    /**
     * Provides a reference to the Column Hiding button.
     * ```typescript
     * const hidingButton = this.grid.toolbar.columnHidingButton;
     * ```
     */
    columnHidingButton: any;
    /**
     * Provides a reference to the `IgxDropDownComponent` of the Export button.
     * ```typescript
     * const exportDropdown = this.grid.toolbar.exportDropdown;
     * ```
     */
    exportDropdown: IgxDropDownComponent;
    /**
     * Provides a reference to the Export button.
     * ```typescript
     * const exportBtn = this.grid.toolbar.exportButton;
     * ```
     */
    exportButton: any;
    /**
     * Provides a reference to the `IgxDropDownComponent` of the Column Pinning UI.
     * ```typescript
     * const dropdownPinning = this.grid.toolbar.columnPinningDropdown;
     * ```
     */
    columnPinningDropdown: IgxDropDownComponent;
    /**
     * Provides a reference to the `IgxColumnPinningComponent`.
     * ```typescript
     * const pinningUI = this.grid.toolbar.columnPinningDropdown;
     * ```
     */
    columnPinningUI: IgxColumnPinningComponent;
    /**
     * Provides a reference to the Column Pinning button.
     * ```typescript
     * const pinningButton = this.grid.toolbar.columnPinningButton;
     * ```
     */
    columnPinningButton: any;
    /**
     * Returns a reference to the `IgxGridComponent` component, hosting the `IgxGridToolbarComponent`.
     * ```typescript
     * const grid = this.igxGrid1.toolbar.grid;
     * ```
     */
    readonly grid: IgxGridBaseComponent;
    /**
     * Returns whether the `IgxGridComponent` renders an export button.
     * ```typescript
     * const exportButton = this.igxGrid1.toolbar.shouldShowExportButton;
     * ```
     */
    readonly shouldShowExportButton: boolean;
    /**
     * Returns whether the `IgxGridComponent` renders an Excel export button.
     * ```typescript
     * const exportExcelButton = this.igxGrid1.toolbar.shouldShowExportExcelButton;
     * ```
     */
    readonly shouldShowExportExcelButton: boolean;
    /**
     * Returns whether the `IgxGridComponent` renders an CSV export button.
     * ```typescript
     * const exportCSVButton = this.igxGrid1.toolbar.shouldShowExportCsvButton;
     * ```
     */
    readonly shouldShowExportCsvButton: boolean;
    /**
     * Returns how many columns are pinned.
     * ```typescript
     * const pinnedCount = this.igxGrid1.toolbar.pinnedColumnsCount;
     * ```
     */
    readonly pinnedColumnsCount: number;
    /**
     * Returns the theme of the `IgxGridToolbarComponent`.
     * ```typescript
     * const toolbarTheme = this.grid.toolbar.hostClass;
     * ```
     */
    readonly hostClass: string;
    constructor(gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>, cdr: ChangeDetectorRef, excelExporter: IgxExcelExporterService, csvExporter: IgxCsvExporterService, _displayDensityOptions: IDisplayDensityOptions);
    private _positionSettings;
    private _overlaySettings;
    /**
     * Returns the title of `IgxGridToolbarComponent`.
     * ```typescript
     * const toolbarTitle = this.igxGrid1.toolbar.getTitle();
     * ```
     */
    getTitle(): string;
    /**
     * Returns the text of the export button of the `IgxGridToolbarComponent`.
     * ```typescript
     * const toolbarExportText = this.igxGrid1.toolbar.getTitle();
     * ```
     */
    getExportText(): string;
    /**
     * Returns the text of the Excel export button of the `IgxGridToolbarComponent`.
     * ```typescript
     * const toolbarExcelText = this.igxGrid1.toolbar.getExportExcelText();
     * ```
     */
    getExportExcelText(): string;
    /**
     * Returns the text of the CSV export button of the `IgxGridToolbarComponent`.
     * ```typescript
     * const toolbarCSVText = this.igxGrid1.toolbar.getExportCsvText();
     * ```
     */
    getExportCsvText(): string;
    /**
     * Toggles the export button's dropdown menu.
     * ```typescript
     * this.igxGrid1.toolbar.exportClicked();
     * ```
     */
    exportClicked(): void;
    /**
     * Exports the grid to excel.
     * ```typescript
     * this.igxGrid1.toolbar.exportToExcelClicked();
     * ```
     */
    exportToExcelClicked(): void;
    /**
     * Exports the grid to CSV.
     * ```typescript
     * this.igxGrid1.toolbar.exportToCsvClicked();
     * ```
     */
    exportToCsvClicked(): void;
    private performExport;
    /**
     * Toggles the Column Hiding UI.
     * ```typescript
     * this.grid1.toolbar.toggleColumnHidingUI();
     * ```
     */
    toggleColumnHidingUI(): void;
    /**
     * Toggles the Column Pinning UI.
     * ```typescript
     * this.grid1.toolbar.toggleColumnPinningUI();
     * ```
     */
    toggleColumnPinningUI(): void;
    /**
     * Returns the `context` object which represents the `template context` binding into the
     * `toolbar custom container` by providing references to the parent IgxGird and the toolbar itself.
     * ```typescript
     * const context =  this.igxGrid.toolbar.context;
     * ```
     */
    readonly context: any;
    /** @hidden */
    readonly customContentTemplate: TemplateRef<any>;
}
/**
 * The IgxGridToolbarCustomContentDirective directive is used to mark an 'ng-template' (with
 * the 'igxToolbarCustomContent' selector) defined in the IgxGrid which is used to provide
 * custom content for cener part of the IgxGridToolbar.
 */
export declare class IgxGridToolbarCustomContentDirective {
    template: TemplateRef<any>;
    constructor(template: TemplateRef<any>);
}