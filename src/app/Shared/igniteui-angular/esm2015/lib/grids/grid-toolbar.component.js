/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, Directive, HostBinding, Input, Optional, ViewChild, Inject, TemplateRef } from '@angular/core';
import { DisplayDensityToken, DisplayDensityBase } from '../core/displayDensity';
import { CsvFileTypes, IgxCsvExporterOptions, IgxCsvExporterService, IgxExcelExporterOptions, IgxExcelExporterService, AbsoluteScrollStrategy } from '../services/index';
import { GridBaseAPIService } from './api.service';
import { IgxDropDownComponent } from '../drop-down/drop-down.component';
import { IgxColumnHidingComponent } from './column-hiding.component';
import { IgxColumnPinningComponent } from './column-pinning.component';
import { HorizontalAlignment, VerticalAlignment } from '../services/overlay/utilities';
import { ConnectedPositioningStrategy } from '../services/overlay/position';
/**
 * This class encapsulates the Toolbar's logic and is internally used by
 * the `IgxGridComponent`, `IgxTreeGridComponent` and `IgxHierarchicalGridComponent`.
 */
export class IgxGridToolbarComponent extends DisplayDensityBase {
    /**
     * @param {?} gridAPI
     * @param {?} cdr
     * @param {?} excelExporter
     * @param {?} csvExporter
     * @param {?} _displayDensityOptions
     */
    constructor(gridAPI, cdr, excelExporter, csvExporter, _displayDensityOptions) {
        super(_displayDensityOptions);
        this.gridAPI = gridAPI;
        this.cdr = cdr;
        this.excelExporter = excelExporter;
        this.csvExporter = csvExporter;
        this._displayDensityOptions = _displayDensityOptions;
        this._filterColumnsPrompt = 'Filter columns list ...';
        this._positionSettings = {
            horizontalDirection: HorizontalAlignment.Left,
            horizontalStartPoint: HorizontalAlignment.Right,
            verticalDirection: VerticalAlignment.Bottom,
            verticalStartPoint: VerticalAlignment.Bottom
        };
        this._overlaySettings = {
            positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
            scrollStrategy: new AbsoluteScrollStrategy(),
            modal: false,
            closeOnOutsideClick: true,
            excludePositionTarget: true
        };
    }
    /**
     * Gets the default text shown in the filtering box.
     * ```typescript
     * const filterPrompt = this.grid.toolbar.filterColumnsPrompt;
     * ```
     * @return {?}
     */
    get filterColumnsPrompt() {
        return this._filterColumnsPrompt;
    }
    /**
     * Sets the default text shown in the filtering box.
     * ```typescript
     * this.grid.toolbar.filterColumnsPrompt('Filter columns ...');
     * ```
     * @param {?} value
     * @return {?}
     */
    set filterColumnsPrompt(value) {
        this._filterColumnsPrompt = value;
    }
    /**
     * Gets the height for the `IgxGridToolbarComponent`'s drop down panels.
     * ```typescript
     * const dropdownHeight = this.grid.toolbar.defaultDropDownsMaxHeight;
     * ```
     * @return {?}
     */
    get defaultDropDownsMaxHeight() {
        /** @type {?} */
        const gridHeight = this.grid.calcHeight;
        return (gridHeight) ? gridHeight * 0.7 + 'px' : '100%';
    }
    /**
     * Returns a reference to the `IgxGridComponent` component, hosting the `IgxGridToolbarComponent`.
     * ```typescript
     * const grid = this.igxGrid1.toolbar.grid;
     * ```
     * @return {?}
     */
    get grid() {
        return this.gridAPI.grid;
    }
    /**
     * Returns whether the `IgxGridComponent` renders an export button.
     * ```typescript
     * const exportButton = this.igxGrid1.toolbar.shouldShowExportButton;
     * ```
     * @return {?}
     */
    get shouldShowExportButton() {
        return (this.grid != null && (this.grid.exportExcel || this.grid.exportCsv));
    }
    /**
     * Returns whether the `IgxGridComponent` renders an Excel export button.
     * ```typescript
     * const exportExcelButton = this.igxGrid1.toolbar.shouldShowExportExcelButton;
     * ```
     * @return {?}
     */
    get shouldShowExportExcelButton() {
        return (this.grid != null && this.grid.exportExcel);
    }
    /**
     * Returns whether the `IgxGridComponent` renders an CSV export button.
     * ```typescript
     * const exportCSVButton = this.igxGrid1.toolbar.shouldShowExportCsvButton;
     * ```
     * @return {?}
     */
    get shouldShowExportCsvButton() {
        return (this.grid != null && this.grid.exportCsv);
    }
    /**
     * Returns how many columns are pinned.
     * ```typescript
     * const pinnedCount = this.igxGrid1.toolbar.pinnedColumnsCount;
     * ```
     * @return {?}
     */
    get pinnedColumnsCount() {
        return this.grid.pinnedColumns.filter(col => !col.columnLayout).length;
    }
    /**
     * Returns the theme of the `IgxGridToolbarComponent`.
     * ```typescript
     * const toolbarTheme = this.grid.toolbar.hostClass;
     * ```
     * @return {?}
     */
    get hostClass() {
        return this.getComponentDensityClass('igx-grid-toolbar');
    }
    /**
     * Returns the title of `IgxGridToolbarComponent`.
     * ```typescript
     * const toolbarTitle = this.igxGrid1.toolbar.getTitle();
     * ```
     * @return {?}
     */
    getTitle() {
        return this.grid != null ? this.grid.toolbarTitle : '';
    }
    /**
     * Returns the text of the export button of the `IgxGridToolbarComponent`.
     * ```typescript
     * const toolbarExportText = this.igxGrid1.toolbar.getTitle();
     * ```
     * @return {?}
     */
    getExportText() {
        return this.grid != null ? this.grid.exportText : '';
    }
    /**
     * Returns the text of the Excel export button of the `IgxGridToolbarComponent`.
     * ```typescript
     * const toolbarExcelText = this.igxGrid1.toolbar.getExportExcelText();
     * ```
     * @return {?}
     */
    getExportExcelText() {
        return this.grid != null ? this.grid.exportExcelText : '';
    }
    /**
     * Returns the text of the CSV export button of the `IgxGridToolbarComponent`.
     * ```typescript
     * const toolbarCSVText = this.igxGrid1.toolbar.getExportCsvText();
     * ```
     * @return {?}
     */
    getExportCsvText() {
        return this.grid != null ? this.grid.exportCsvText : '';
    }
    /**
     * Toggles the export button's dropdown menu.
     * ```typescript
     * this.igxGrid1.toolbar.exportClicked();
     * ```
     * @return {?}
     */
    exportClicked() {
        this._overlaySettings.positionStrategy.settings.target = this.exportButton.nativeElement;
        this._overlaySettings.outlet = this.grid.outletDirective;
        this.exportDropdown.toggle(this._overlaySettings);
    }
    /**
     * Exports the grid to excel.
     * ```typescript
     * this.igxGrid1.toolbar.exportToExcelClicked();
     * ```
     * @return {?}
     */
    exportToExcelClicked() {
        this.performExport(this.excelExporter, 'excel');
    }
    /**
     * Exports the grid to CSV.
     * ```typescript
     * this.igxGrid1.toolbar.exportToCsvClicked();
     * ```
     * @return {?}
     */
    exportToCsvClicked() {
        this.performExport(this.csvExporter, 'csv');
    }
    /**
     * @private
     * @param {?} exp
     * @param {?} exportType
     * @return {?}
     */
    performExport(exp, exportType) {
        this.exportClicked();
        /** @type {?} */
        const fileName = 'ExportedData';
        /** @type {?} */
        const options = exportType === 'excel' ?
            new IgxExcelExporterOptions(fileName) :
            new IgxCsvExporterOptions(fileName, CsvFileTypes.CSV);
        /** @type {?} */
        const args = { grid: this.grid, exporter: exp, options: options, cancel: false };
        this.grid.onToolbarExporting.emit(args);
        if (args.cancel) {
            return;
        }
        exp.export(this.grid, options);
    }
    /**
     * Toggles the Column Hiding UI.
     * ```typescript
     * this.grid1.toolbar.toggleColumnHidingUI();
     * ```
     * @return {?}
     */
    toggleColumnHidingUI() {
        this._overlaySettings.positionStrategy.settings.target = this.columnHidingButton.nativeElement;
        this._overlaySettings.outlet = this.grid.outletDirective;
        this.columnHidingDropdown.toggle(this._overlaySettings);
    }
    /**
     * Toggles the Column Pinning UI.
     * ```typescript
     * this.grid1.toolbar.toggleColumnPinningUI();
     * ```
     * @return {?}
     */
    toggleColumnPinningUI() {
        this._overlaySettings.positionStrategy.settings.target = this.columnPinningButton.nativeElement;
        this._overlaySettings.outlet = this.grid.outletDirective;
        this.columnPinningDropdown.toggle(this._overlaySettings);
    }
    /**
     * Returns the `context` object which represents the `template context` binding into the
     * `toolbar custom container` by providing references to the parent IgxGird and the toolbar itself.
     * ```typescript
     * const context =  this.igxGrid.toolbar.context;
     * ```
     * @return {?}
     */
    get context() {
        return {
            // $implicit: this
            grid: this.grid,
            toolbar: this
        };
    }
    /**
     * @hidden
     * @return {?}
     */
    get customContentTemplate() {
        if (this.grid != null && this.grid.toolbarCustomContentTemplate != null) {
            return this.grid.toolbarCustomContentTemplate.template;
        }
        else {
            return null;
        }
    }
}
IgxGridToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-grid-toolbar',
                template: "<span class=\"igx-grid-toolbar__title\" *ngIf=\"getTitle()\">\n    {{ getTitle() }}\n</span>\n\n<div class=\"igx-grid-toolbar__custom-content\" *ngIf=\"customContentTemplate != null\">\n    <ng-container *ngTemplateOutlet=\"customContentTemplate; context: context\">\n    </ng-container>\n</div>\n\n<div class=\"igx-grid-toolbar__actions\">\n    <div *ngIf=\"grid.columnHiding\">\n        <button igxButton=\"flat\" [displayDensity]=\"grid.displayDensity\" #columnHidingButton name=\"btnColumnHiding\" igxButton igxRipple\n            (click)=\"toggleColumnHidingUI()\">\n            <div  class=\"igx-grid-toolbar__button-space\">\n                <igx-icon *ngIf=\"grid.hiddenColumnsCount > 0\">visibility_off</igx-icon>\n                <igx-icon *ngIf=\"grid.hiddenColumnsCount === 0\">visibility</igx-icon>\n                <span>{{ grid.hiddenColumnsCount }}</span>\n                <span>{{ grid.hiddenColumnsText }}</span>\n            </div>\n        </button>\n        <igx-drop-down #columnHidingDropdown>\n            <igx-column-hiding\n                [columns]=\"grid.columns\"\n                [title]=\"grid.columnHidingTitle\"\n                [filterColumnsPrompt]=\"filterColumnsPrompt\"\n                [columnsAreaMaxHeight]=\"defaultDropDownsMaxHeight\"\n                (onColumnVisibilityChanged)=\"grid.toggleColumnVisibility($event)\">\n            </igx-column-hiding>\n        </igx-drop-down>\n    </div>\n    <div *ngIf=\"grid.columnPinning\">\n        <button igxButton=\"flat\" [displayDensity]=\"grid.displayDensity\" #columnPinningButton name=\"btnColumnPinning\" igxButton igxRipple\n            (click)=\"toggleColumnPinningUI()\">\n            <div  class=\"igx-grid-toolbar__button-space\">\n                <igx-icon *ngIf=\"pinnedColumnsCount > 0\">lock</igx-icon>\n                <igx-icon *ngIf=\"pinnedColumnsCount === 0\">lock_open</igx-icon>\n                <span>{{ pinnedColumnsCount }}</span>\n                <span>{{ grid.pinnedColumnsText }}</span>\n                <span></span>\n            </div>\n        </button>\n        <igx-drop-down #columnPinningDropdown>\n            <igx-column-pinning\n                [columns]=\"grid.columns\"\n                [title]=\"grid.columnPinningTitle\"\n                [filterColumnsPrompt]=\"filterColumnsPrompt\"\n                [columnsAreaMaxHeight]=\"defaultDropDownsMaxHeight\"></igx-column-pinning>\n        </igx-drop-down>\n    </div>\n\n\n    <div class=\"igx-grid-toolbar__dropdown\" *ngIf=\"shouldShowExportButton\" id=\"btnExport\">\n        <button igxButton=\"flat\" [displayDensity]=\"grid.displayDensity\" igxRipple #btnExport\n                (click)=\"exportClicked()\">\n            <span class=\"igx-grid-toolbar__button-space\">\n                <igx-icon fontSet=\"material\">import_export</igx-icon>\n                <span>{{ getExportText() }}</span>\n                <igx-icon fontSet=\"material\">arrow_drop_down</igx-icon>\n            </span>\n        </button>\n\n        <igx-drop-down #exportDropdown>\n            <ul class=\"igx-grid-toolbar__dd-list\">\n                <li class=\"igx-grid-toolbar__dd-list-items\" igxRipple *ngIf=\"shouldShowExportExcelButton\" id=\"btnExportExcel\"\n                (click)=\"exportToExcelClicked()\">{{ getExportExcelText() }}</li>\n                <li class=\"igx-grid-toolbar__dd-list-items\" igxRipple *ngIf=\"shouldShowExportCsvButton\" id=\"btnExportCsv\"\n                (click)=\"exportToCsvClicked()\">{{ getExportCsvText() }}</li>\n            </ul>\n        </igx-drop-down>\n    </div>\n</div>\n"
            }] }
];
/** @nocollapse */
IgxGridToolbarComponent.ctorParameters = () => [
    { type: GridBaseAPIService },
    { type: ChangeDetectorRef },
    { type: IgxExcelExporterService, decorators: [{ type: Optional }] },
    { type: IgxCsvExporterService, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
];
IgxGridToolbarComponent.propDecorators = {
    gridID: [{ type: HostBinding, args: ['class.igx-grid-toolbar',] }, { type: Input }],
    filterColumnsPrompt: [{ type: Input }],
    defaultDropDownsMaxHeight: [{ type: Input }],
    columnHidingDropdown: [{ type: ViewChild, args: ['columnHidingDropdown', { read: IgxDropDownComponent, static: false },] }],
    columnHidingUI: [{ type: ViewChild, args: [IgxColumnHidingComponent, { static: false },] }],
    columnHidingButton: [{ type: ViewChild, args: ['columnHidingButton', { static: false },] }],
    exportDropdown: [{ type: ViewChild, args: ['exportDropdown', { read: IgxDropDownComponent, static: false },] }],
    exportButton: [{ type: ViewChild, args: ['btnExport', { static: false },] }],
    columnPinningDropdown: [{ type: ViewChild, args: ['columnPinningDropdown', { read: IgxDropDownComponent, static: false },] }],
    columnPinningUI: [{ type: ViewChild, args: [IgxColumnPinningComponent, { static: false },] }],
    columnPinningButton: [{ type: ViewChild, args: ['columnPinningButton', { static: false },] }],
    hostClass: [{ type: HostBinding, args: ['attr.class',] }]
};
if (false) {
    /**
     * @hidden
     * @type {?}
     */
    IgxGridToolbarComponent.prototype.gridID;
    /**
     * @type {?}
     * @private
     */
    IgxGridToolbarComponent.prototype._filterColumnsPrompt;
    /**
     * Provides a reference to the `IgxDropDownComponent` of the Column Hiding UI.
     * ```typescript
     * const dropdownHiding = this.grid.toolbar.columnHidingDropdown;
     * ```
     * @type {?}
     */
    IgxGridToolbarComponent.prototype.columnHidingDropdown;
    /**
     * Provides a reference to the `IgxColumnHidingComponent`.
     * ```typescript
     * const hidingUI = this.grid.toolbar.columnHidingUI;
     * ```
     * @type {?}
     */
    IgxGridToolbarComponent.prototype.columnHidingUI;
    /**
     * Provides a reference to the Column Hiding button.
     * ```typescript
     * const hidingButton = this.grid.toolbar.columnHidingButton;
     * ```
     * @type {?}
     */
    IgxGridToolbarComponent.prototype.columnHidingButton;
    /**
     * Provides a reference to the `IgxDropDownComponent` of the Export button.
     * ```typescript
     * const exportDropdown = this.grid.toolbar.exportDropdown;
     * ```
     * @type {?}
     */
    IgxGridToolbarComponent.prototype.exportDropdown;
    /**
     * Provides a reference to the Export button.
     * ```typescript
     * const exportBtn = this.grid.toolbar.exportButton;
     * ```
     * @type {?}
     */
    IgxGridToolbarComponent.prototype.exportButton;
    /**
     * Provides a reference to the `IgxDropDownComponent` of the Column Pinning UI.
     * ```typescript
     * const dropdownPinning = this.grid.toolbar.columnPinningDropdown;
     * ```
     * @type {?}
     */
    IgxGridToolbarComponent.prototype.columnPinningDropdown;
    /**
     * Provides a reference to the `IgxColumnPinningComponent`.
     * ```typescript
     * const pinningUI = this.grid.toolbar.columnPinningDropdown;
     * ```
     * @type {?}
     */
    IgxGridToolbarComponent.prototype.columnPinningUI;
    /**
     * Provides a reference to the Column Pinning button.
     * ```typescript
     * const pinningButton = this.grid.toolbar.columnPinningButton;
     * ```
     * @type {?}
     */
    IgxGridToolbarComponent.prototype.columnPinningButton;
    /**
     * @type {?}
     * @private
     */
    IgxGridToolbarComponent.prototype._positionSettings;
    /**
     * @type {?}
     * @private
     */
    IgxGridToolbarComponent.prototype._overlaySettings;
    /** @type {?} */
    IgxGridToolbarComponent.prototype.gridAPI;
    /** @type {?} */
    IgxGridToolbarComponent.prototype.cdr;
    /** @type {?} */
    IgxGridToolbarComponent.prototype.excelExporter;
    /** @type {?} */
    IgxGridToolbarComponent.prototype.csvExporter;
    /**
     * @type {?}
     * @protected
     */
    IgxGridToolbarComponent.prototype._displayDensityOptions;
}
/**
 * The IgxGridToolbarCustomContentDirective directive is used to mark an 'ng-template' (with
 * the 'igxToolbarCustomContent' selector) defined in the IgxGrid which is used to provide
 * custom content for cener part of the IgxGridToolbar.
 */
export class IgxGridToolbarCustomContentDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
IgxGridToolbarCustomContentDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxToolbarCustomContent]'
            },] }
];
/** @nocollapse */
IgxGridToolbarCustomContentDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    IgxGridToolbarCustomContentDirective.prototype.template;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC10b29sYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvZ3JpZC10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBQ0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxNQUFNLEVBQ04sV0FBVyxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBMEIsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RyxPQUFPLEVBQ0gsWUFBWSxFQUVaLHFCQUFxQixFQUNyQixxQkFBcUIsRUFDckIsdUJBQXVCLEVBQ3ZCLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDekIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkUsT0FBTyxFQUFxQyxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7OztBQVU1RSxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsa0JBQWtCOzs7Ozs7OztJQWtMM0QsWUFBbUIsT0FBcUUsRUFDN0UsR0FBc0IsRUFDVixhQUFzQyxFQUN0QyxXQUFrQyxFQUNGLHNCQUE4QztRQUM3RixLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUxuQixZQUFPLEdBQVAsT0FBTyxD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LFNBQVMsU0FBQyxxQkFBcUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7d0JBNERsRCxXQUFXLFNBQUMsWUFBWTs7Ozs7OztJQXhLekIseUNBRXNCOzs7OztJQXVCdEIsdURBQXlEOzs7Ozs7OztJQW9CekQsdURBQ2tEOzs7Ozs7OztJQVFsRCxpREFDZ0Q7Ozs7Ozs7O0lBUWhELHFEQUMwQjs7Ozs7Ozs7SUFRMUIsaURBQzRDOzs7Ozs7OztJQVE1QywrQ0FDb0I7Ozs7Ozs7O0lBUXBCLHdEQUNtRDs7Ozs7Ozs7SUFRbkQsa0RBQ2tEOzs7Ozs7OztJQVFsRCxzREFDMkI7Ozs7O0lBd0UzQixvREFLRTs7Ozs7SUFFRixtREFNRTs7SUFyQlUsMENBQTRFOztJQUNwRixzQ0FBNkI7O0lBQzdCLGdEQUF5RDs7SUFDekQsOENBQXFEOzs7OztJQUNyRCx5REFBaUc7Ozs7Ozs7QUFzS3pHLE1BQU0sT0FBTyxvQ0FBb0M7Ozs7SUFDN0MsWUFBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7SUFBSSxDQUFDOzs7WUFKckQsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSwyQkFBMkI7YUFDeEM7Ozs7WUF4WEcsV0FBVzs7OztJQTBYQyx3REFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBEaXJlY3RpdmUsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSW5wdXQsXG4gICAgT3B0aW9uYWwsXG4gICAgVmlld0NoaWxkLFxuICAgIEluamVjdCxcbiAgICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSURpc3BsYXlEZW5zaXR5T3B0aW9ucywgRGlzcGxheURlbnNpdHlUb2tlbiwgRGlzcGxheURlbnNpdHlCYXNlIH0gZnJvbSAnLi4vY29yZS9kaXNwbGF5RGVuc2l0eSc7XG5pbXBvcnQge1xuICAgIENzdkZpbGVUeXBlcyxcbiAgICBJZ3hCYXNlRXhwb3J0ZXIsXG4gICAgSWd4Q3N2RXhwb3J0ZXJPcHRpb25zLFxuICAgIElneENzdkV4cG9ydGVyU2VydmljZSxcbiAgICBJZ3hFeGNlbEV4cG9ydGVyT3B0aW9ucyxcbiAgICBJZ3hFeGNlbEV4cG9ydGVyU2VydmljZSxcbiAgICBBYnNvbHV0ZVNjcm9sbFN0cmF0ZWd5XG59IGZyb20gJy4uL3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4R3JpZEJhc2VDb21wb25lbnQsIElHcmlkRGF0YUJpbmRhYmxlIH0gZnJvbSAnLi9ncmlkLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IElneERyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi4vZHJvcC1kb3duL2Ryb3AtZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4Q29sdW1uSGlkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4taGlkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hDb2x1bW5QaW5uaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb2x1bW4tcGlubmluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3ZlcmxheVNldHRpbmdzLCBQb3NpdGlvblNldHRpbmdzLCBIb3Jpem9udGFsQWxpZ25tZW50LCBWZXJ0aWNhbEFsaWdubWVudCB9IGZyb20gJy4uL3NlcnZpY2VzL292ZXJsYXkvdXRpbGl0aWVzJztcbmltcG9ydCB7IENvbm5lY3RlZFBvc2l0aW9uaW5nU3RyYXRlZ3kgfSBmcm9tICcuLi9zZXJ2aWNlcy9vdmVybGF5L3Bvc2l0aW9uJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyB0aGUgVG9vbGJhcidzIGxvZ2ljIGFuZCBpcyBpbnRlcm5hbGx5IHVzZWQgYnlcbiAqIHRoZSBgSWd4R3JpZENvbXBvbmVudGAsIGBJZ3hUcmVlR3JpZENvbXBvbmVudGAgYW5kIGBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50YC5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtZ3JpZC10b29sYmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZ3JpZC10b29sYmFyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hHcmlkVG9vbGJhckNvbXBvbmVudCBleHRlbmRzIERpc3BsYXlEZW5zaXR5QmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZ3JpZC10b29sYmFyJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBncmlkSUQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGRlZmF1bHQgdGV4dCBzaG93biBpbiB0aGUgZmlsdGVyaW5nIGJveC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgZmlsdGVyUHJvbXB0ID0gdGhpcy5ncmlkLnRvb2xiYXIuZmlsdGVyQ29sdW1uc1Byb21wdDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgZmlsdGVyQ29sdW1uc1Byb21wdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlckNvbHVtbnNQcm9tcHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZGVmYXVsdCB0ZXh0IHNob3duIGluIHRoZSBmaWx0ZXJpbmcgYm94LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmdyaWQudG9vbGJhci5maWx0ZXJDb2x1bW5zUHJvbXB0KCdGaWx0ZXIgY29sdW1ucyAuLi4nKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGZpbHRlckNvbHVtbnNQcm9tcHQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9maWx0ZXJDb2x1bW5zUHJvbXB0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZmlsdGVyQ29sdW1uc1Byb21wdCA9ICdGaWx0ZXIgY29sdW1ucyBsaXN0IC4uLic7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBoZWlnaHQgZm9yIHRoZSBgSWd4R3JpZFRvb2xiYXJDb21wb25lbnRgJ3MgZHJvcCBkb3duIHBhbmVscy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgZHJvcGRvd25IZWlnaHQgPSB0aGlzLmdyaWQudG9vbGJhci5kZWZhdWx0RHJvcERvd25zTWF4SGVpZ2h0O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGRlZmF1bHREcm9wRG93bnNNYXhIZWlnaHQoKSB7XG4gICAgICAgIGNvbnN0IGdyaWRIZWlnaHQgPSB0aGlzLmdyaWQuY2FsY0hlaWdodDtcbiAgICAgICAgcmV0dXJuIChncmlkSGVpZ2h0KSA/IGdyaWRIZWlnaHQgKiAwLjcgKyAncHgnIDogJzEwMCUnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGVzIGEgcmVmZXJlbmNlIHRvIHRoZSBgSWd4RHJvcERvd25Db21wb25lbnRgIG9mIHRoZSBDb2x1bW4gSGlkaW5nIFVJLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBkcm9wZG93bkhpZGluZyA9IHRoaXMuZ3JpZC50b29sYmFyLmNvbHVtbkhpZGluZ0Ryb3Bkb3duO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2NvbHVtbkhpZGluZ0Ryb3Bkb3duJywgeyByZWFkOiBJZ3hEcm9wRG93bkNvbXBvbmVudCwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBjb2x1bW5IaWRpbmdEcm9wZG93bjogSWd4RHJvcERvd25Db21wb25lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBQcm92aWRlcyBhIHJlZmVyZW5jZSB0byB0aGUgYElneENvbHVtbkhpZGluZ0NvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGhpZGluZ1VJID0gdGhpcy5ncmlkLnRvb2xiYXIuY29sdW1uSGlkaW5nVUk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQFZpZXdDaGlsZChJZ3hDb2x1bW5IaWRpbmdDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBjb2x1bW5IaWRpbmdVSTogSWd4Q29sdW1uSGlkaW5nQ29tcG9uZW50O1xuXG4gICAgLyoqXG4gICAgICogUHJvdmlkZXMgYSByZWZlcmVuY2UgdG8gdGhlIENvbHVtbiBIaWRpbmcgYnV0dG9uLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBoaWRpbmdCdXR0b24gPSB0aGlzLmdyaWQudG9vbGJhci5jb2x1bW5IaWRpbmdCdXR0b247XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnY29sdW1uSGlkaW5nQnV0dG9uJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIGNvbHVtbkhpZGluZ0J1dHRvbjtcblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGVzIGEgcmVmZXJlbmNlIHRvIHRoZSBgSWd4RHJvcERvd25Db21wb25lbnRgIG9mIHRoZSBFeHBvcnQgYnV0dG9uLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBleHBvcnREcm9wZG93biA9IHRoaXMuZ3JpZC50b29sYmFyLmV4cG9ydERyb3Bkb3duO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2V4cG9ydERyb3Bkb3duJywgeyByZWFkOiBJZ3hEcm9wRG93bkNvbXBvbmVudCwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBleHBvcnREcm9wZG93bjogSWd4RHJvcERvd25Db21wb25lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBQcm92aWRlcyBhIHJlZmVyZW5jZSB0byB0aGUgRXhwb3J0IGJ1dHRvbi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgZXhwb3J0QnRuID0gdGhpcy5ncmlkLnRvb2xiYXIuZXhwb3J0QnV0dG9uO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2J0bkV4cG9ydCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBleHBvcnRCdXR0b247XG5cbiAgICAvKipcbiAgICAgKiBQcm92aWRlcyBhIHJlZmVyZW5jZSB0byB0aGUgYElneERyb3BEb3duQ29tcG9uZW50YCBvZiB0aGUgQ29sdW1uIFBpbm5pbmcgVUkuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGRyb3Bkb3duUGlubmluZyA9IHRoaXMuZ3JpZC50b29sYmFyLmNvbHVtblBpbm5pbmdEcm9wZG93bjtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdjb2x1bW5QaW5uaW5nRHJvcGRvd24nLCB7IHJlYWQ6IElneERyb3BEb3duQ29tcG9uZW50LCBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIGNvbHVtblBpbm5pbmdEcm9wZG93bjogSWd4RHJvcERvd25Db21wb25lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBQcm92aWRlcyBhIHJlZmVyZW5jZSB0byB0aGUgYElneENvbHVtblBpbm5pbmdDb21wb25lbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBwaW5uaW5nVUkgPSB0aGlzLmdyaWQudG9vbGJhci5jb2x1bW5QaW5uaW5nRHJvcGRvd247XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQFZpZXdDaGlsZChJZ3hDb2x1bW5QaW5uaW5nQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgY29sdW1uUGlubmluZ1VJOiBJZ3hDb2x1bW5QaW5uaW5nQ29tcG9uZW50O1xuXG4gICAgLyoqXG4gICAgICogUHJvdmlkZXMgYSByZWZlcmVuY2UgdG8gdGhlIENvbHVtbiBQaW5uaW5nIGJ1dHRvbi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgcGlubmluZ0J1dHRvbiA9IHRoaXMuZ3JpZC50b29sYmFyLmNvbHVtblBpbm5pbmdCdXR0b247XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnY29sdW1uUGlubmluZ0J1dHRvbicsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBjb2x1bW5QaW5uaW5nQnV0dG9uO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgYElneEdyaWRDb21wb25lbnRgIGNvbXBvbmVudCwgaG9zdGluZyB0aGUgYElneEdyaWRUb29sYmFyQ29tcG9uZW50YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgZ3JpZCA9IHRoaXMuaWd4R3JpZDEudG9vbGJhci5ncmlkO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZ3JpZCgpOiBJZ3hHcmlkQmFzZUNvbXBvbmVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRBUEkuZ3JpZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIGBJZ3hHcmlkQ29tcG9uZW50YCByZW5kZXJzIGFuIGV4cG9ydCBidXR0b24uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGV4cG9ydEJ1dHRvbiA9IHRoaXMuaWd4R3JpZDEudG9vbGJhci5zaG91bGRTaG93RXhwb3J0QnV0dG9uO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgc2hvdWxkU2hvd0V4cG9ydEJ1dHRvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmdyaWQgIT0gbnVsbCAmJiAodGhpcy5ncmlkLmV4cG9ydEV4Y2VsIHx8IHRoaXMuZ3JpZC5leHBvcnRDc3YpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIGBJZ3hHcmlkQ29tcG9uZW50YCByZW5kZXJzIGFuIEV4Y2VsIGV4cG9ydCBidXR0b24uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGV4cG9ydEV4Y2VsQnV0dG9uID0gdGhpcy5pZ3hHcmlkMS50b29sYmFyLnNob3VsZFNob3dFeHBvcnRFeGNlbEJ1dHRvbjtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHNob3VsZFNob3dFeHBvcnRFeGNlbEJ1dHRvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmdyaWQgIT0gbnVsbCAmJiB0aGlzLmdyaWQuZXhwb3J0RXhjZWwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgYElneEdyaWRDb21wb25lbnRgIHJlbmRlcnMgYW4gQ1NWIGV4cG9ydCBidXR0b24uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGV4cG9ydENTVkJ1dHRvbiA9IHRoaXMuaWd4R3JpZDEudG9vbGJhci5zaG91bGRTaG93RXhwb3J0Q3N2QnV0dG9uO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgc2hvdWxkU2hvd0V4cG9ydENzdkJ1dHRvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmdyaWQgIT0gbnVsbCAmJiB0aGlzLmdyaWQuZXhwb3J0Q3N2KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGhvdyBtYW55IGNvbHVtbnMgYXJlIHBpbm5lZC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgcGlubmVkQ291bnQgPSB0aGlzLmlneEdyaWQxLnRvb2xiYXIucGlubmVkQ29sdW1uc0NvdW50O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgcGlubmVkQ29sdW1uc0NvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnBpbm5lZENvbHVtbnMuZmlsdGVyKGNvbCA9PiAhY29sLmNvbHVtbkxheW91dCkubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRoZW1lIG9mIHRoZSBgSWd4R3JpZFRvb2xiYXJDb21wb25lbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCB0b29sYmFyVGhlbWUgPSB0aGlzLmdyaWQudG9vbGJhci5ob3N0Q2xhc3M7XG4gICAgICogYGBgXG4gICAgICovXG5cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuY2xhc3MnKVxuICAgIGdldCBob3N0Q2xhc3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50RGVuc2l0eUNsYXNzKCdpZ3gtZ3JpZC10b29sYmFyJyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHVibGljIGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPixcbiAgICAgICAgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIEBPcHRpb25hbCgpIHB1YmxpYyBleGNlbEV4cG9ydGVyOiBJZ3hFeGNlbEV4cG9ydGVyU2VydmljZSxcbiAgICAgICAgQE9wdGlvbmFsKCkgcHVibGljIGNzdkV4cG9ydGVyOiBJZ3hDc3ZFeHBvcnRlclNlcnZpY2UsXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRGlzcGxheURlbnNpdHlUb2tlbikgcHJvdGVjdGVkIF9kaXNwbGF5RGVuc2l0eU9wdGlvbnM6IElEaXNwbGF5RGVuc2l0eU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHN1cGVyKF9kaXNwbGF5RGVuc2l0eU9wdGlvbnMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3Bvc2l0aW9uU2V0dGluZ3M6IFBvc2l0aW9uU2V0dGluZ3MgPSB7XG4gICAgICAgIGhvcml6b250YWxEaXJlY3Rpb246IEhvcml6b250YWxBbGlnbm1lbnQuTGVmdCxcbiAgICAgICAgaG9yaXpvbnRhbFN0YXJ0UG9pbnQ6IEhvcml6b250YWxBbGlnbm1lbnQuUmlnaHQsXG4gICAgICAgIHZlcnRpY2FsRGlyZWN0aW9uOiBWZXJ0aWNhbEFsaWdubWVudC5Cb3R0b20sXG4gICAgICAgIHZlcnRpY2FsU3RhcnRQb2ludDogVmVydGljYWxBbGlnbm1lbnQuQm90dG9tXG4gICAgfTtcblxuICAgIHByaXZhdGUgX292ZXJsYXlTZXR0aW5nczogT3ZlcmxheVNldHRpbmdzID0ge1xuICAgICAgICBwb3NpdGlvblN0cmF0ZWd5OiBuZXcgQ29ubmVjdGVkUG9zaXRpb25pbmdTdHJhdGVneSh0aGlzLl9wb3NpdGlvblNldHRpbmdzKSxcbiAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IG5ldyBBYnNvbHV0ZVNjcm9sbFN0cmF0ZWd5KCksXG4gICAgICAgIG1vZGFsOiBmYWxzZSxcbiAgICAgICAgY2xvc2VPbk91dHNpZGVDbGljazogdHJ1ZSxcbiAgICAgICAgZXhjbHVkZVBvc2l0aW9uVGFyZ2V0OiB0cnVlXG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGl0bGUgb2YgYElneEdyaWRUb29sYmFyQ29tcG9uZW50YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgdG9vbGJhclRpdGxlID0gdGhpcy5pZ3hHcmlkMS50b29sYmFyLmdldFRpdGxlKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldFRpdGxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQgIT0gbnVsbCA/IHRoaXMuZ3JpZC50b29sYmFyVGl0bGUgOiAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0ZXh0IG9mIHRoZSBleHBvcnQgYnV0dG9uIG9mIHRoZSBgSWd4R3JpZFRvb2xiYXJDb21wb25lbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCB0b29sYmFyRXhwb3J0VGV4dCA9IHRoaXMuaWd4R3JpZDEudG9vbGJhci5nZXRUaXRsZSgpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRFeHBvcnRUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQgIT0gbnVsbCA/IHRoaXMuZ3JpZC5leHBvcnRUZXh0IDogJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGV4dCBvZiB0aGUgRXhjZWwgZXhwb3J0IGJ1dHRvbiBvZiB0aGUgYElneEdyaWRUb29sYmFyQ29tcG9uZW50YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgdG9vbGJhckV4Y2VsVGV4dCA9IHRoaXMuaWd4R3JpZDEudG9vbGJhci5nZXRFeHBvcnRFeGNlbFRleHQoKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RXhwb3J0RXhjZWxUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQgIT0gbnVsbCA/IHRoaXMuZ3JpZC5leHBvcnRFeGNlbFRleHQgOiAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0ZXh0IG9mIHRoZSBDU1YgZXhwb3J0IGJ1dHRvbiBvZiB0aGUgYElneEdyaWRUb29sYmFyQ29tcG9uZW50YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgdG9vbGJhckNTVlRleHQgPSB0aGlzLmlneEdyaWQxLnRvb2xiYXIuZ2V0RXhwb3J0Q3N2VGV4dCgpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRFeHBvcnRDc3ZUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQgIT0gbnVsbCA/IHRoaXMuZ3JpZC5leHBvcnRDc3ZUZXh0IDogJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgZXhwb3J0IGJ1dHRvbidzIGRyb3Bkb3duIG1lbnUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuaWd4R3JpZDEudG9vbGJhci5leHBvcnRDbGlja2VkKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGV4cG9ydENsaWNrZWQoKSB7XG4gICAgICAgIHRoaXMuX292ZXJsYXlTZXR0aW5ncy5wb3NpdGlvblN0cmF0ZWd5LnNldHRpbmdzLnRhcmdldCA9IHRoaXMuZXhwb3J0QnV0dG9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuX292ZXJsYXlTZXR0aW5ncy5vdXRsZXQgPSB0aGlzLmdyaWQub3V0bGV0RGlyZWN0aXZlO1xuICAgICAgICB0aGlzLmV4cG9ydERyb3Bkb3duLnRvZ2dsZSh0aGlzLl9vdmVybGF5U2V0dGluZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4cG9ydHMgdGhlIGdyaWQgdG8gZXhjZWwuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuaWd4R3JpZDEudG9vbGJhci5leHBvcnRUb0V4Y2VsQ2xpY2tlZCgpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBleHBvcnRUb0V4Y2VsQ2xpY2tlZCgpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtRXhwb3J0KHRoaXMuZXhjZWxFeHBvcnRlciwgJ2V4Y2VsJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhwb3J0cyB0aGUgZ3JpZCB0byBDU1YuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuaWd4R3JpZDEudG9vbGJhci5leHBvcnRUb0NzdkNsaWNrZWQoKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZXhwb3J0VG9Dc3ZDbGlja2VkKCkge1xuICAgICAgICB0aGlzLnBlcmZvcm1FeHBvcnQodGhpcy5jc3ZFeHBvcnRlciwgJ2NzdicpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcGVyZm9ybUV4cG9ydChleHA6IElneEJhc2VFeHBvcnRlciwgZXhwb3J0VHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZXhwb3J0Q2xpY2tlZCgpO1xuXG4gICAgICAgIGNvbnN0IGZpbGVOYW1lID0gJ0V4cG9ydGVkRGF0YSc7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBleHBvcnRUeXBlID09PSAnZXhjZWwnID9cbiAgICAgICAgICAgIG5ldyBJZ3hFeGNlbEV4cG9ydGVyT3B0aW9ucyhmaWxlTmFtZSkgOlxuICAgICAgICAgICAgbmV3IElneENzdkV4cG9ydGVyT3B0aW9ucyhmaWxlTmFtZSwgQ3N2RmlsZVR5cGVzLkNTVik7XG5cbiAgICAgICAgY29uc3QgYXJncyA9IHsgZ3JpZDogdGhpcy5ncmlkLCBleHBvcnRlcjogZXhwLCBvcHRpb25zOiBvcHRpb25zLCBjYW5jZWw6IGZhbHNlIH07XG5cbiAgICAgICAgdGhpcy5ncmlkLm9uVG9vbGJhckV4cG9ydGluZy5lbWl0KGFyZ3MpO1xuICAgICAgICBpZiAoYXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBleHAuZXhwb3J0KHRoaXMuZ3JpZCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgQ29sdW1uIEhpZGluZyBVSS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5ncmlkMS50b29sYmFyLnRvZ2dsZUNvbHVtbkhpZGluZ1VJKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHRvZ2dsZUNvbHVtbkhpZGluZ1VJKCkge1xuICAgICAgICB0aGlzLl9vdmVybGF5U2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5zZXR0aW5ncy50YXJnZXQgPSB0aGlzLmNvbHVtbkhpZGluZ0J1dHRvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLl9vdmVybGF5U2V0dGluZ3Mub3V0bGV0ID0gdGhpcy5ncmlkLm91dGxldERpcmVjdGl2ZTtcbiAgICAgICAgdGhpcy5jb2x1bW5IaWRpbmdEcm9wZG93bi50b2dnbGUodGhpcy5fb3ZlcmxheVNldHRpbmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIHRoZSBDb2x1bW4gUGlubmluZyBVSS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5ncmlkMS50b29sYmFyLnRvZ2dsZUNvbHVtblBpbm5pbmdVSSgpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyB0b2dnbGVDb2x1bW5QaW5uaW5nVUkoKSB7XG4gICAgICAgIHRoaXMuX292ZXJsYXlTZXR0aW5ncy5wb3NpdGlvblN0cmF0ZWd5LnNldHRpbmdzLnRhcmdldCA9IHRoaXMuY29sdW1uUGlubmluZ0J1dHRvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLl9vdmVybGF5U2V0dGluZ3Mub3V0bGV0ID0gdGhpcy5ncmlkLm91dGxldERpcmVjdGl2ZTtcbiAgICAgICAgdGhpcy5jb2x1bW5QaW5uaW5nRHJvcGRvd24udG9nZ2xlKHRoaXMuX292ZXJsYXlTZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYGNvbnRleHRgIG9iamVjdCB3aGljaCByZXByZXNlbnRzIHRoZSBgdGVtcGxhdGUgY29udGV4dGAgYmluZGluZyBpbnRvIHRoZVxuICAgICAqIGB0b29sYmFyIGN1c3RvbSBjb250YWluZXJgIGJ5IHByb3ZpZGluZyByZWZlcmVuY2VzIHRvIHRoZSBwYXJlbnQgSWd4R2lyZCBhbmQgdGhlIHRvb2xiYXIgaXRzZWxmLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBjb250ZXh0ID0gIHRoaXMuaWd4R3JpZC50b29sYmFyLmNvbnRleHQ7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCBjb250ZXh0KCk6IGFueSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyAkaW1wbGljaXQ6IHRoaXNcbiAgICAgICAgICAgIGdyaWQ6IHRoaXMuZ3JpZCxcbiAgICAgICAgICAgIHRvb2xiYXI6IHRoaXNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIHB1YmxpYyBnZXQgY3VzdG9tQ29udGVudFRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgICAgICBpZiAodGhpcy5ncmlkICE9IG51bGwgJiYgdGhpcy5ncmlkLnRvb2xiYXJDdXN0b21Db250ZW50VGVtcGxhdGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC50b29sYmFyQ3VzdG9tQ29udGVudFRlbXBsYXRlLnRlbXBsYXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogVGhlIElneEdyaWRUb29sYmFyQ3VzdG9tQ29udGVudERpcmVjdGl2ZSBkaXJlY3RpdmUgaXMgdXNlZCB0byBtYXJrIGFuICduZy10ZW1wbGF0ZScgKHdpdGhcbiAqIHRoZSAnaWd4VG9vbGJhckN1c3RvbUNvbnRlbnQnIHNlbGVjdG9yKSBkZWZpbmVkIGluIHRoZSBJZ3hHcmlkIHdoaWNoIGlzIHVzZWQgdG8gcHJvdmlkZVxuICogY3VzdG9tIGNvbnRlbnQgZm9yIGNlbmVyIHBhcnQgb2YgdGhlIElneEdyaWRUb29sYmFyLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hUb29sYmFyQ3VzdG9tQ29udGVudF0nXG59KVxuZXhwb3J0IGNsYXNzIElneEdyaWRUb29sYmFyQ3VzdG9tQ29udGVudERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cbiJdfQ==