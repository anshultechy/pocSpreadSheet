/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var IgxGridToolbarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxGridToolbarComponent, _super);
    function IgxGridToolbarComponent(gridAPI, cdr, excelExporter, csvExporter, _displayDensityOptions) {
        var _this = _super.call(this, _displayDensityOptions) || this;
        _this.gridAPI = gridAPI;
        _this.cdr = cdr;
        _this.excelExporter = excelExporter;
        _this.csvExporter = csvExporter;
        _this._displayDensityOptions = _displayDensityOptions;
        _this._filterColumnsPrompt = 'Filter columns list ...';
        _this._positionSettings = {
            horizontalDirection: HorizontalAlignment.Left,
            horizontalStartPoint: HorizontalAlignment.Right,
            verticalDirection: VerticalAlignment.Bottom,
            verticalStartPoint: VerticalAlignment.Bottom
        };
        _this._overlaySettings = {
            positionStrategy: new ConnectedPositioningStrategy(_this._positionSettings),
            scrollStrategy: new AbsoluteScrollStrategy(),
            modal: false,
            closeOnOutsideClick: true,
            excludePositionTarget: true
        };
        return _this;
    }
    Object.defineProperty(IgxGridToolbarComponent.prototype, "filterColumnsPrompt", {
        /**
         * Gets the default text shown in the filtering box.
         * ```typescript
         * const filterPrompt = this.grid.toolbar.filterColumnsPrompt;
         * ```
         */
        get: /**
         * Gets the default text shown in the filtering box.
         * ```typescript
         * const filterPrompt = this.grid.toolbar.filterColumnsPrompt;
         * ```
         * @return {?}
         */
        function () {
            return this._filterColumnsPrompt;
        },
        /**
         * Sets the default text shown in the filtering box.
         * ```typescript
         * this.grid.toolbar.filterColumnsPrompt('Filter columns ...');
         * ```
         */
        set: /**
         * Sets the default text shown in the filtering box.
         * ```typescript
         * this.grid.toolbar.filterColumnsPrompt('Filter columns ...');
         * ```
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._filterColumnsPrompt = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridToolbarComponent.prototype, "defaultDropDownsMaxHeight", {
        /**
         * Gets the height for the `IgxGridToolbarComponent`'s drop down panels.
         * ```typescript
         * const dropdownHeight = this.grid.toolbar.defaultDropDownsMaxHeight;
         * ```
         */
        get: /**
         * Gets the height for the `IgxGridToolbarComponent`'s drop down panels.
         * ```typescript
         * const dropdownHeight = this.grid.toolbar.defaultDropDownsMaxHeight;
         * ```
         * @return {?}
         */
        function () {
            /** @type {?} */
            var gridHeight = this.grid.calcHeight;
            return (gridHeight) ? gridHeight * 0.7 + 'px' : '100%';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridToolbarComponent.prototype, "grid", {
        /**
         * Returns a reference to the `IgxGridComponent` component, hosting the `IgxGridToolbarComponent`.
         * ```typescript
         * const grid = this.igxGrid1.toolbar.grid;
         * ```
         */
        get: /**
         * Returns a reference to the `IgxGridComponent` component, hosting the `IgxGridToolbarComponent`.
         * ```typescript
         * const grid = this.igxGrid1.toolbar.grid;
         * ```
         * @return {?}
         */
        function () {
            return this.gridAPI.grid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridToolbarComponent.prototype, "shouldShowExportButton", {
        /**
         * Returns whether the `IgxGridComponent` renders an export button.
         * ```typescript
         * const exportButton = this.igxGrid1.toolbar.shouldShowExportButton;
         * ```
         */
        get: /**
         * Returns whether the `IgxGridComponent` renders an export button.
         * ```typescript
         * const exportButton = this.igxGrid1.toolbar.shouldShowExportButton;
         * ```
         * @return {?}
         */
        function () {
            return (this.grid != null && (this.grid.exportExcel || this.grid.exportCsv));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridToolbarComponent.prototype, "shouldShowExportExcelButton", {
        /**
         * Returns whether the `IgxGridComponent` renders an Excel export button.
         * ```typescript
         * const exportExcelButton = this.igxGrid1.toolbar.shouldShowExportExcelButton;
         * ```
         */
        get: /**
         * Returns whether the `IgxGridComponent` renders an Excel export button.
         * ```typescript
         * const exportExcelButton = this.igxGrid1.toolbar.shouldShowExportExcelButton;
         * ```
         * @return {?}
         */
        function () {
            return (this.grid != null && this.grid.exportExcel);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridToolbarComponent.prototype, "shouldShowExportCsvButton", {
        /**
         * Returns whether the `IgxGridComponent` renders an CSV export button.
         * ```typescript
         * const exportCSVButton = this.igxGrid1.toolbar.shouldShowExportCsvButton;
         * ```
         */
        get: /**
         * Returns whether the `IgxGridComponent` renders an CSV export button.
         * ```typescript
         * const exportCSVButton = this.igxGrid1.toolbar.shouldShowExportCsvButton;
         * ```
         * @return {?}
         */
        function () {
            return (this.grid != null && this.grid.exportCsv);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridToolbarComponent.prototype, "pinnedColumnsCount", {
        /**
         * Returns how many columns are pinned.
         * ```typescript
         * const pinnedCount = this.igxGrid1.toolbar.pinnedColumnsCount;
         * ```
         */
        get: /**
         * Returns how many columns are pinned.
         * ```typescript
         * const pinnedCount = this.igxGrid1.toolbar.pinnedColumnsCount;
         * ```
         * @return {?}
         */
        function () {
            return this.grid.pinnedColumns.filter(function (col) { return !col.columnLayout; }).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridToolbarComponent.prototype, "hostClass", {
        /**
         * Returns the theme of the `IgxGridToolbarComponent`.
         * ```typescript
         * const toolbarTheme = this.grid.toolbar.hostClass;
         * ```
         */
        get: /**
         * Returns the theme of the `IgxGridToolbarComponent`.
         * ```typescript
         * const toolbarTheme = this.grid.toolbar.hostClass;
         * ```
         * @return {?}
         */
        function () {
            return this.getComponentDensityClass('igx-grid-toolbar');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the title of `IgxGridToolbarComponent`.
     * ```typescript
     * const toolbarTitle = this.igxGrid1.toolbar.getTitle();
     * ```
     */
    /**
     * Returns the title of `IgxGridToolbarComponent`.
     * ```typescript
     * const toolbarTitle = this.igxGrid1.toolbar.getTitle();
     * ```
     * @return {?}
     */
    IgxGridToolbarComponent.prototype.getTitle = /**
     * Returns the title of `IgxGridToolbarComponent`.
     * ```typescript
     * const toolbarTitle = this.igxGrid1.toolbar.getTitle();
     * ```
     * @return {?}
     */
    function () {
        return this.grid != null ? this.grid.toolbarTitle : '';
    };
    /**
     * Returns the text of the export button of the `IgxGridToolbarComponent`.
     * ```typescript
     * const toolbarExportText = this.igxGrid1.toolbar.getTitle();
     * ```
     */
    /**
     * Returns the text of the export button of the `IgxGridToolbarComponent`.
     * ```typescript
     * const toolbarExportText = this.igxGrid1.toolbar.getTitle();
     * ```
     * @return {?}
     */
    IgxGridToolbarComponent.prototype.getExportText = /**
     * Returns the text of the export button of the `IgxGridToolbarComponent`.
     * ```typescript
     * const toolbarExportText = this.igxGrid1.toolbar.getTitle();
     * ```
     * @return {?}
     */
    function () {
        return this.grid != null ? this.grid.exportText : '';
    };
    /**
     * Returns the text of the Excel export button of the `IgxGridToolbarComponent`.
     * ```typescript
     * const toolbarExcelText = this.igxGrid1.toolbar.getExportExcelText();
     * ```
     */
    /**
     * Returns the text of the Excel export button of the `IgxGridToolbarComponent`.
     * ```typescript
     * const toolbarExcelText = this.igxGrid1.toolbar.getExportExcelText();
     * ```
     * @return {?}
     */
    IgxGridToolbarComponent.prototype.getExportExcelText = /**
     * Returns the text of the Excel export button of the `IgxGridToolbarComponent`.
     * ```typescript
     * const toolbarExcelText = this.igxGrid1.toolbar.getExportExcelText();
     * ```
     * @return {?}
     */
    function () {
        return this.grid != null ? this.grid.exportExcelText : '';
    };
    /**
     * Returns the text of the CSV export button of the `IgxGridToolbarComponent`.
     * ```typescript
     * const toolbarCSVText = this.igxGrid1.toolbar.getExportCsvText();
     * ```
     */
    /**
     * Returns the text of the CSV export button of the `IgxGridToolbarComponent`.
     * ```typescript
     * const toolbarCSVText = this.igxGrid1.toolbar.getExportCsvText();
     * ```
     * @return {?}
     */
    IgxGridToolbarComponent.prototype.getExportCsvText = /**
     * Returns the text of the CSV export button of the `IgxGridToolbarComponent`.
     * ```typescript
     * const toolbarCSVText = this.igxGrid1.toolbar.getExportCsvText();
     * ```
     * @return {?}
     */
    function () {
        return this.grid != null ? this.grid.exportCsvText : '';
    };
    /**
     * Toggles the export button's dropdown menu.
     * ```typescript
     * this.igxGrid1.toolbar.exportClicked();
     * ```
     */
    /**
     * Toggles the export button's dropdown menu.
     * ```typescript
     * this.igxGrid1.toolbar.exportClicked();
     * ```
     * @return {?}
     */
    IgxGridToolbarComponent.prototype.exportClicked = /**
     * Toggles the export button's dropdown menu.
     * ```typescript
     * this.igxGrid1.toolbar.exportClicked();
     * ```
     * @return {?}
     */
    function () {
        this._overlaySettings.positionStrategy.settings.target = this.exportButton.nativeElement;
        this._overlaySettings.outlet = this.grid.outletDirective;
        this.exportDropdown.toggle(this._overlaySettings);
    };
    /**
     * Exports the grid to excel.
     * ```typescript
     * this.igxGrid1.toolbar.exportToExcelClicked();
     * ```
     */
    /**
     * Exports the grid to excel.
     * ```typescript
     * this.igxGrid1.toolbar.exportToExcelClicked();
     * ```
     * @return {?}
     */
    IgxGridToolbarComponent.prototype.exportToExcelClicked = /**
     * Exports the grid to excel.
     * ```typescript
     * this.igxGrid1.toolbar.exportToExcelClicked();
     * ```
     * @return {?}
     */
    function () {
        this.performExport(this.excelExporter, 'excel');
    };
    /**
     * Exports the grid to CSV.
     * ```typescript
     * this.igxGrid1.toolbar.exportToCsvClicked();
     * ```
     */
    /**
     * Exports the grid to CSV.
     * ```typescript
     * this.igxGrid1.toolbar.exportToCsvClicked();
     * ```
     * @return {?}
     */
    IgxGridToolbarComponent.prototype.exportToCsvClicked = /**
     * Exports the grid to CSV.
     * ```typescript
     * this.igxGrid1.toolbar.exportToCsvClicked();
     * ```
     * @return {?}
     */
    function () {
        this.performExport(this.csvExporter, 'csv');
    };
    /**
     * @private
     * @param {?} exp
     * @param {?} exportType
     * @return {?}
     */
    IgxGridToolbarComponent.prototype.performExport = /**
     * @private
     * @param {?} exp
     * @param {?} exportType
     * @return {?}
     */
    function (exp, exportType) {
        this.exportClicked();
        /** @type {?} */
        var fileName = 'ExportedData';
        /** @type {?} */
        var options = exportType === 'excel' ?
            new IgxExcelExporterOptions(fileName) :
            new IgxCsvExporterOptions(fileName, CsvFileTypes.CSV);
        /** @type {?} */
        var args = { grid: this.grid, exporter: exp, options: options, cancel: false };
        this.grid.onToolbarExporting.emit(args);
        if (args.cancel) {
            return;
        }
        exp.export(this.grid, options);
    };
    /**
     * Toggles the Column Hiding UI.
     * ```typescript
     * this.grid1.toolbar.toggleColumnHidingUI();
     * ```
     */
    /**
     * Toggles the Column Hiding UI.
     * ```typescript
     * this.grid1.toolbar.toggleColumnHidingUI();
     * ```
     * @return {?}
     */
    IgxGridToolbarComponent.prototype.toggleColumnHidingUI = /**
     * Toggles the Column Hiding UI.
     * ```typescript
     * this.grid1.toolbar.toggleColumnHidingUI();
     * ```
     * @return {?}
     */
    function () {
        this._overlaySettings.positionStrategy.settings.target = this.columnHidingButton.nativeElement;
        this._overlaySettings.outlet = this.grid.outletDirective;
        this.columnHidingDropdown.toggle(this._overlaySettings);
    };
    /**
     * Toggles the Column Pinning UI.
     * ```typescript
     * this.grid1.toolbar.toggleColumnPinningUI();
     * ```
     */
    /**
     * Toggles the Column Pinning UI.
     * ```typescript
     * this.grid1.toolbar.toggleColumnPinningUI();
     * ```
     * @return {?}
     */
    IgxGridToolbarComponent.prototype.toggleColumnPinningUI = /**
     * Toggles the Column Pinning UI.
     * ```typescript
     * this.grid1.toolbar.toggleColumnPinningUI();
     * ```
     * @return {?}
     */
    function () {
        this._overlaySettings.positionStrategy.settings.target = this.columnPinningButton.nativeElement;
        this._overlaySettings.outlet = this.grid.outletDirective;
        this.columnPinningDropdown.toggle(this._overlaySettings);
    };
    Object.defineProperty(IgxGridToolbarComponent.prototype, "context", {
        /**
         * Returns the `context` object which represents the `template context` binding into the
         * `toolbar custom container` by providing references to the parent IgxGird and the toolbar itself.
         * ```typescript
         * const context =  this.igxGrid.toolbar.context;
         * ```
         */
        get: /**
         * Returns the `context` object which represents the `template context` binding into the
         * `toolbar custom container` by providing references to the parent IgxGird and the toolbar itself.
         * ```typescript
         * const context =  this.igxGrid.toolbar.context;
         * ```
         * @return {?}
         */
        function () {
            return {
                // $implicit: this
                grid: this.grid,
                toolbar: this
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxGridToolbarComponent.prototype, "customContentTemplate", {
        /** @hidden */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            if (this.grid != null && this.grid.toolbarCustomContentTemplate != null) {
                return this.grid.toolbarCustomContentTemplate.template;
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    IgxGridToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-grid-toolbar',
                    template: "<span class=\"igx-grid-toolbar__title\" *ngIf=\"getTitle()\">\n    {{ getTitle() }}\n</span>\n\n<div class=\"igx-grid-toolbar__custom-content\" *ngIf=\"customContentTemplate != null\">\n    <ng-container *ngTemplateOutlet=\"customContentTemplate; context: context\">\n    </ng-container>\n</div>\n\n<div class=\"igx-grid-toolbar__actions\">\n    <div *ngIf=\"grid.columnHiding\">\n        <button igxButton=\"flat\" [displayDensity]=\"grid.displayDensity\" #columnHidingButton name=\"btnColumnHiding\" igxButton igxRipple\n            (click)=\"toggleColumnHidingUI()\">\n            <div  class=\"igx-grid-toolbar__button-space\">\n                <igx-icon *ngIf=\"grid.hiddenColumnsCount > 0\">visibility_off</igx-icon>\n                <igx-icon *ngIf=\"grid.hiddenColumnsCount === 0\">visibility</igx-icon>\n                <span>{{ grid.hiddenColumnsCount }}</span>\n                <span>{{ grid.hiddenColumnsText }}</span>\n            </div>\n        </button>\n        <igx-drop-down #columnHidingDropdown>\n            <igx-column-hiding\n                [columns]=\"grid.columns\"\n                [title]=\"grid.columnHidingTitle\"\n                [filterColumnsPrompt]=\"filterColumnsPrompt\"\n                [columnsAreaMaxHeight]=\"defaultDropDownsMaxHeight\"\n                (onColumnVisibilityChanged)=\"grid.toggleColumnVisibility($event)\">\n            </igx-column-hiding>\n        </igx-drop-down>\n    </div>\n    <div *ngIf=\"grid.columnPinning\">\n        <button igxButton=\"flat\" [displayDensity]=\"grid.displayDensity\" #columnPinningButton name=\"btnColumnPinning\" igxButton igxRipple\n            (click)=\"toggleColumnPinningUI()\">\n            <div  class=\"igx-grid-toolbar__button-space\">\n                <igx-icon *ngIf=\"pinnedColumnsCount > 0\">lock</igx-icon>\n                <igx-icon *ngIf=\"pinnedColumnsCount === 0\">lock_open</igx-icon>\n                <span>{{ pinnedColumnsCount }}</span>\n                <span>{{ grid.pinnedColumnsText }}</span>\n                <span></span>\n            </div>\n        </button>\n        <igx-drop-down #columnPinningDropdown>\n            <igx-column-pinning\n                [columns]=\"grid.columns\"\n                [title]=\"grid.columnPinningTitle\"\n                [filterColumnsPrompt]=\"filterColumnsPrompt\"\n                [columnsAreaMaxHeight]=\"defaultDropDownsMaxHeight\"></igx-column-pinning>\n        </igx-drop-down>\n    </div>\n\n\n    <div class=\"igx-grid-toolbar__dropdown\" *ngIf=\"shouldShowExportButton\" id=\"btnExport\">\n        <button igxButton=\"flat\" [displayDensity]=\"grid.displayDensity\" igxRipple #btnExport\n                (click)=\"exportClicked()\">\n            <span class=\"igx-grid-toolbar__button-space\">\n                <igx-icon fontSet=\"material\">import_export</igx-icon>\n                <span>{{ getExportText() }}</span>\n                <igx-icon fontSet=\"material\">arrow_drop_down</igx-icon>\n            </span>\n        </button>\n\n        <igx-drop-down #exportDropdown>\n            <ul class=\"igx-grid-toolbar__dd-list\">\n                <li class=\"igx-grid-toolbar__dd-list-items\" igxRipple *ngIf=\"shouldShowExportExcelButton\" id=\"btnExportExcel\"\n                (click)=\"exportToExcelClicked()\">{{ getExportExcelText() }}</li>\n                <li class=\"igx-grid-toolbar__dd-list-items\" igxRipple *ngIf=\"shouldShowExportCsvButton\" id=\"btnExportCsv\"\n                (click)=\"exportToCsvClicked()\">{{ getExportCsvText() }}</li>\n            </ul>\n        </igx-drop-down>\n    </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    IgxGridToolbarComponent.ctorParameters = function () { return [
        { type: GridBaseAPIService },
        { type: ChangeDetectorRef },
        { type: IgxExcelExporterService, decorators: [{ type: Optional }] },
        { type: IgxCsvExporterService, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
    ]; };
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
    return IgxGridToolbarComponent;
}(DisplayDensityBase));
export { IgxGridToolbarComponent };
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
var IgxGridToolbarCustomContentDirective = /** @class */ (function () {
    function IgxGridToolbarCustomContentDirective(template) {
        this.template = template;
    }
    IgxGridToolbarCustomContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxToolbarCustomContent]'
                },] }
    ];
    /** @nocollapse */
    IgxGridToolbarCustomContentDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return IgxGridToolbarCustomContentDirective;
}());
export { IgxGridToolbarCustomContentDirective };
if (false) {
    /** @type {?} */
    IgxGridToolbarCustomContentDirective.prototype.template;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC10b29sYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvZ3JpZC10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsTUFBTSxFQUNOLFdBQVcsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQTBCLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekcsT0FBTyxFQUNILFlBQVksRUFFWixxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLHVCQUF1QixFQUN2Qix1QkFBdUIsRUFDdkIsc0JBQXNCLEVBQ3pCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZFLE9BQU8sRUFBcUMsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxSCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7QUFNNUU7SUFJNkMsbURBQWtCO0lBa0wzRCxpQ0FBbUIsT0FBcUUsRUFDN0UsR0FBc0IsRUFDVixhQUFzQyxFQUN0QyxXQUFrQyxFQUNGLHNCQUE4QztRQUpyRyxZQUtRLGtCQUFNLHNCQUFzQixDQUFDLFNBQ3BDO1FBTmtCLGFBQU8sR0FBUCxPQUFPLENBQThEO1FBQzdFLFNBQUcsR0FB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c0NBQTZCOztJQUM3QixnREFBeUQ7O0lBQ3pELDhDQUFxRDs7Ozs7SUFDckQseURBQWlHOzs7Ozs7O0FBbUt6RztJQUlJLDhDQUFtQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtJQUFJLENBQUM7O2dCQUpyRCxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDJCQUEyQjtpQkFDeEM7Ozs7Z0JBeFhHLFdBQVc7O0lBMlhmLDJDQUFDO0NBQUEsQUFMRCxJQUtDO1NBRlksb0NBQW9DOzs7SUFDakMsd0RBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnQsXG4gICAgRGlyZWN0aXZlLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LFxuICAgIE9wdGlvbmFsLFxuICAgIFZpZXdDaGlsZCxcbiAgICBJbmplY3QsXG4gICAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElEaXNwbGF5RGVuc2l0eU9wdGlvbnMsIERpc3BsYXlEZW5zaXR5VG9rZW4sIERpc3BsYXlEZW5zaXR5QmFzZSB9IGZyb20gJy4uL2NvcmUvZGlzcGxheURlbnNpdHknO1xuaW1wb3J0IHtcbiAgICBDc3ZGaWxlVHlwZXMsXG4gICAgSWd4QmFzZUV4cG9ydGVyLFxuICAgIElneENzdkV4cG9ydGVyT3B0aW9ucyxcbiAgICBJZ3hDc3ZFeHBvcnRlclNlcnZpY2UsXG4gICAgSWd4RXhjZWxFeHBvcnRlck9wdGlvbnMsXG4gICAgSWd4RXhjZWxFeHBvcnRlclNlcnZpY2UsXG4gICAgQWJzb2x1dGVTY3JvbGxTdHJhdGVneVxufSBmcm9tICcuLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBHcmlkQmFzZUFQSVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneEdyaWRCYXNlQ29tcG9uZW50LCBJR3JpZERhdGFCaW5kYWJsZSB9IGZyb20gJy4vZ3JpZC1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hEcm9wRG93bkNvbXBvbmVudCB9IGZyb20gJy4uL2Ryb3AtZG93bi9kcm9wLWRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IElneENvbHVtbkhpZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uLWhpZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4Q29sdW1uUGlubmluZ0NvbXBvbmVudCB9IGZyb20gJy4vY29sdW1uLXBpbm5pbmcuY29tcG9uZW50JztcbmltcG9ydCB7IE92ZXJsYXlTZXR0aW5ncywgUG9zaXRpb25TZXR0aW5ncywgSG9yaXpvbnRhbEFsaWdubWVudCwgVmVydGljYWxBbGlnbm1lbnQgfSBmcm9tICcuLi9zZXJ2aWNlcy9vdmVybGF5L3V0aWxpdGllcyc7XG5pbXBvcnQgeyBDb25uZWN0ZWRQb3NpdGlvbmluZ1N0cmF0ZWd5IH0gZnJvbSAnLi4vc2VydmljZXMvb3ZlcmxheS9wb3NpdGlvbic7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgdGhlIFRvb2xiYXIncyBsb2dpYyBhbmQgaXMgaW50ZXJuYWxseSB1c2VkIGJ5XG4gKiB0aGUgYElneEdyaWRDb21wb25lbnRgLCBgSWd4VHJlZUdyaWRDb21wb25lbnRgIGFuZCBgSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudGAuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LWdyaWQtdG9vbGJhcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2dyaWQtdG9vbGJhci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZFRvb2xiYXJDb21wb25lbnQgZXh0ZW5kcyBEaXNwbGF5RGVuc2l0eUJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWdyaWQtdG9vbGJhcicpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ3JpZElEOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBkZWZhdWx0IHRleHQgc2hvd24gaW4gdGhlIGZpbHRlcmluZyBib3guXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGZpbHRlclByb21wdCA9IHRoaXMuZ3JpZC50b29sYmFyLmZpbHRlckNvbHVtbnNQcm9tcHQ7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGZpbHRlckNvbHVtbnNQcm9tcHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJDb2x1bW5zUHJvbXB0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGRlZmF1bHQgdGV4dCBzaG93biBpbiB0aGUgZmlsdGVyaW5nIGJveC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5ncmlkLnRvb2xiYXIuZmlsdGVyQ29sdW1uc1Byb21wdCgnRmlsdGVyIGNvbHVtbnMgLi4uJyk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHNldCBmaWx0ZXJDb2x1bW5zUHJvbXB0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZmlsdGVyQ29sdW1uc1Byb21wdCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ZpbHRlckNvbHVtbnNQcm9tcHQgPSAnRmlsdGVyIGNvbHVtbnMgbGlzdCAuLi4nO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaGVpZ2h0IGZvciB0aGUgYElneEdyaWRUb29sYmFyQ29tcG9uZW50YCdzIGRyb3AgZG93biBwYW5lbHMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGRyb3Bkb3duSGVpZ2h0ID0gdGhpcy5ncmlkLnRvb2xiYXIuZGVmYXVsdERyb3BEb3duc01heEhlaWdodDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBkZWZhdWx0RHJvcERvd25zTWF4SGVpZ2h0KCkge1xuICAgICAgICBjb25zdCBncmlkSGVpZ2h0ID0gdGhpcy5ncmlkLmNhbGNIZWlnaHQ7XG4gICAgICAgIHJldHVybiAoZ3JpZEhlaWdodCkgPyBncmlkSGVpZ2h0ICogMC43ICsgJ3B4JyA6ICcxMDAlJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm92aWRlcyBhIHJlZmVyZW5jZSB0byB0aGUgYElneERyb3BEb3duQ29tcG9uZW50YCBvZiB0aGUgQ29sdW1uIEhpZGluZyBVSS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgZHJvcGRvd25IaWRpbmcgPSB0aGlzLmdyaWQudG9vbGJhci5jb2x1bW5IaWRpbmdEcm9wZG93bjtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdjb2x1bW5IaWRpbmdEcm9wZG93bicsIHsgcmVhZDogSWd4RHJvcERvd25Db21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgY29sdW1uSGlkaW5nRHJvcGRvd246IElneERyb3BEb3duQ29tcG9uZW50O1xuXG4gICAgLyoqXG4gICAgICogUHJvdmlkZXMgYSByZWZlcmVuY2UgdG8gdGhlIGBJZ3hDb2x1bW5IaWRpbmdDb21wb25lbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBoaWRpbmdVSSA9IHRoaXMuZ3JpZC50b29sYmFyLmNvbHVtbkhpZGluZ1VJO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoSWd4Q29sdW1uSGlkaW5nQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgY29sdW1uSGlkaW5nVUk6IElneENvbHVtbkhpZGluZ0NvbXBvbmVudDtcblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGVzIGEgcmVmZXJlbmNlIHRvIHRoZSBDb2x1bW4gSGlkaW5nIGJ1dHRvbi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgaGlkaW5nQnV0dG9uID0gdGhpcy5ncmlkLnRvb2xiYXIuY29sdW1uSGlkaW5nQnV0dG9uO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2NvbHVtbkhpZGluZ0J1dHRvbicsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBjb2x1bW5IaWRpbmdCdXR0b247XG5cbiAgICAvKipcbiAgICAgKiBQcm92aWRlcyBhIHJlZmVyZW5jZSB0byB0aGUgYElneERyb3BEb3duQ29tcG9uZW50YCBvZiB0aGUgRXhwb3J0IGJ1dHRvbi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgZXhwb3J0RHJvcGRvd24gPSB0aGlzLmdyaWQudG9vbGJhci5leHBvcnREcm9wZG93bjtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdleHBvcnREcm9wZG93bicsIHsgcmVhZDogSWd4RHJvcERvd25Db21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgZXhwb3J0RHJvcGRvd246IElneERyb3BEb3duQ29tcG9uZW50O1xuXG4gICAgLyoqXG4gICAgICogUHJvdmlkZXMgYSByZWZlcmVuY2UgdG8gdGhlIEV4cG9ydCBidXR0b24uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGV4cG9ydEJ0biA9IHRoaXMuZ3JpZC50b29sYmFyLmV4cG9ydEJ1dHRvbjtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdidG5FeHBvcnQnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgZXhwb3J0QnV0dG9uO1xuXG4gICAgLyoqXG4gICAgICogUHJvdmlkZXMgYSByZWZlcmVuY2UgdG8gdGhlIGBJZ3hEcm9wRG93bkNvbXBvbmVudGAgb2YgdGhlIENvbHVtbiBQaW5uaW5nIFVJLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBkcm9wZG93blBpbm5pbmcgPSB0aGlzLmdyaWQudG9vbGJhci5jb2x1bW5QaW5uaW5nRHJvcGRvd247XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnY29sdW1uUGlubmluZ0Ryb3Bkb3duJywgeyByZWFkOiBJZ3hEcm9wRG93bkNvbXBvbmVudCwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBjb2x1bW5QaW5uaW5nRHJvcGRvd246IElneERyb3BEb3duQ29tcG9uZW50O1xuXG4gICAgLyoqXG4gICAgICogUHJvdmlkZXMgYSByZWZlcmVuY2UgdG8gdGhlIGBJZ3hDb2x1bW5QaW5uaW5nQ29tcG9uZW50YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgcGlubmluZ1VJID0gdGhpcy5ncmlkLnRvb2xiYXIuY29sdW1uUGlubmluZ0Ryb3Bkb3duO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoSWd4Q29sdW1uUGlubmluZ0NvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIGNvbHVtblBpbm5pbmdVSTogSWd4Q29sdW1uUGlubmluZ0NvbXBvbmVudDtcblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGVzIGEgcmVmZXJlbmNlIHRvIHRoZSBDb2x1bW4gUGlubmluZyBidXR0b24uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHBpbm5pbmdCdXR0b24gPSB0aGlzLmdyaWQudG9vbGJhci5jb2x1bW5QaW5uaW5nQnV0dG9uO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2NvbHVtblBpbm5pbmdCdXR0b24nLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgY29sdW1uUGlubmluZ0J1dHRvbjtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGBJZ3hHcmlkQ29tcG9uZW50YCBjb21wb25lbnQsIGhvc3RpbmcgdGhlIGBJZ3hHcmlkVG9vbGJhckNvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGdyaWQgPSB0aGlzLmlneEdyaWQxLnRvb2xiYXIuZ3JpZDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGdyaWQoKTogSWd4R3JpZEJhc2VDb21wb25lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkQVBJLmdyaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBgSWd4R3JpZENvbXBvbmVudGAgcmVuZGVycyBhbiBleHBvcnQgYnV0dG9uLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBleHBvcnRCdXR0b24gPSB0aGlzLmlneEdyaWQxLnRvb2xiYXIuc2hvdWxkU2hvd0V4cG9ydEJ1dHRvbjtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHNob3VsZFNob3dFeHBvcnRCdXR0b24oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAodGhpcy5ncmlkICE9IG51bGwgJiYgKHRoaXMuZ3JpZC5leHBvcnRFeGNlbCB8fCB0aGlzLmdyaWQuZXhwb3J0Q3N2KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBgSWd4R3JpZENvbXBvbmVudGAgcmVuZGVycyBhbiBFeGNlbCBleHBvcnQgYnV0dG9uLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBleHBvcnRFeGNlbEJ1dHRvbiA9IHRoaXMuaWd4R3JpZDEudG9vbGJhci5zaG91bGRTaG93RXhwb3J0RXhjZWxCdXR0b247XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCBzaG91bGRTaG93RXhwb3J0RXhjZWxCdXR0b24oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAodGhpcy5ncmlkICE9IG51bGwgJiYgdGhpcy5ncmlkLmV4cG9ydEV4Y2VsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIGBJZ3hHcmlkQ29tcG9uZW50YCByZW5kZXJzIGFuIENTViBleHBvcnQgYnV0dG9uLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBleHBvcnRDU1ZCdXR0b24gPSB0aGlzLmlneEdyaWQxLnRvb2xiYXIuc2hvdWxkU2hvd0V4cG9ydENzdkJ1dHRvbjtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHNob3VsZFNob3dFeHBvcnRDc3ZCdXR0b24oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAodGhpcy5ncmlkICE9IG51bGwgJiYgdGhpcy5ncmlkLmV4cG9ydENzdik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBob3cgbWFueSBjb2x1bW5zIGFyZSBwaW5uZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHBpbm5lZENvdW50ID0gdGhpcy5pZ3hHcmlkMS50b29sYmFyLnBpbm5lZENvbHVtbnNDb3VudDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHBpbm5lZENvbHVtbnNDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5waW5uZWRDb2x1bW5zLmZpbHRlcihjb2wgPT4gIWNvbC5jb2x1bW5MYXlvdXQpLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0aGVtZSBvZiB0aGUgYElneEdyaWRUb29sYmFyQ29tcG9uZW50YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgdG9vbGJhclRoZW1lID0gdGhpcy5ncmlkLnRvb2xiYXIuaG9zdENsYXNzO1xuICAgICAqIGBgYFxuICAgICAqL1xuXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmNsYXNzJylcbiAgICBnZXQgaG9zdENsYXNzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbXBvbmVudERlbnNpdHlDbGFzcygnaWd4LWdyaWQtdG9vbGJhcicpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZEJhc2VDb21wb25lbnQgJiBJR3JpZERhdGFCaW5kYWJsZT4sXG4gICAgICAgIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBAT3B0aW9uYWwoKSBwdWJsaWMgZXhjZWxFeHBvcnRlcjogSWd4RXhjZWxFeHBvcnRlclNlcnZpY2UsXG4gICAgICAgIEBPcHRpb25hbCgpIHB1YmxpYyBjc3ZFeHBvcnRlcjogSWd4Q3N2RXhwb3J0ZXJTZXJ2aWNlLFxuICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERpc3BsYXlEZW5zaXR5VG9rZW4pIHByb3RlY3RlZCBfZGlzcGxheURlbnNpdHlPcHRpb25zOiBJRGlzcGxheURlbnNpdHlPcHRpb25zKSB7XG4gICAgICAgICAgICBzdXBlcihfZGlzcGxheURlbnNpdHlPcHRpb25zKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9wb3NpdGlvblNldHRpbmdzOiBQb3NpdGlvblNldHRpbmdzID0ge1xuICAgICAgICBob3Jpem9udGFsRGlyZWN0aW9uOiBIb3Jpem9udGFsQWxpZ25tZW50LkxlZnQsXG4gICAgICAgIGhvcml6b250YWxTdGFydFBvaW50OiBIb3Jpem9udGFsQWxpZ25tZW50LlJpZ2h0LFxuICAgICAgICB2ZXJ0aWNhbERpcmVjdGlvbjogVmVydGljYWxBbGlnbm1lbnQuQm90dG9tLFxuICAgICAgICB2ZXJ0aWNhbFN0YXJ0UG9pbnQ6IFZlcnRpY2FsQWxpZ25tZW50LkJvdHRvbVxuICAgIH07XG5cbiAgICBwcml2YXRlIF9vdmVybGF5U2V0dGluZ3M6IE92ZXJsYXlTZXR0aW5ncyA9IHtcbiAgICAgICAgcG9zaXRpb25TdHJhdGVneTogbmV3IENvbm5lY3RlZFBvc2l0aW9uaW5nU3RyYXRlZ3kodGhpcy5fcG9zaXRpb25TZXR0aW5ncyksXG4gICAgICAgIHNjcm9sbFN0cmF0ZWd5OiBuZXcgQWJzb2x1dGVTY3JvbGxTdHJhdGVneSgpLFxuICAgICAgICBtb2RhbDogZmFsc2UsXG4gICAgICAgIGNsb3NlT25PdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgICAgIGV4Y2x1ZGVQb3NpdGlvblRhcmdldDogdHJ1ZVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRpdGxlIG9mIGBJZ3hHcmlkVG9vbGJhckNvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHRvb2xiYXJUaXRsZSA9IHRoaXMuaWd4R3JpZDEudG9vbGJhci5nZXRUaXRsZSgpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRUaXRsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkICE9IG51bGwgPyB0aGlzLmdyaWQudG9vbGJhclRpdGxlIDogJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGV4dCBvZiB0aGUgZXhwb3J0IGJ1dHRvbiBvZiB0aGUgYElneEdyaWRUb29sYmFyQ29tcG9uZW50YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgdG9vbGJhckV4cG9ydFRleHQgPSB0aGlzLmlneEdyaWQxLnRvb2xiYXIuZ2V0VGl0bGUoKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RXhwb3J0VGV4dCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkICE9IG51bGwgPyB0aGlzLmdyaWQuZXhwb3J0VGV4dCA6ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRleHQgb2YgdGhlIEV4Y2VsIGV4cG9ydCBidXR0b24gb2YgdGhlIGBJZ3hHcmlkVG9vbGJhckNvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHRvb2xiYXJFeGNlbFRleHQgPSB0aGlzLmlneEdyaWQxLnRvb2xiYXIuZ2V0RXhwb3J0RXhjZWxUZXh0KCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldEV4cG9ydEV4Y2VsVGV4dCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkICE9IG51bGwgPyB0aGlzLmdyaWQuZXhwb3J0RXhjZWxUZXh0IDogJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGV4dCBvZiB0aGUgQ1NWIGV4cG9ydCBidXR0b24gb2YgdGhlIGBJZ3hHcmlkVG9vbGJhckNvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHRvb2xiYXJDU1ZUZXh0ID0gdGhpcy5pZ3hHcmlkMS50b29sYmFyLmdldEV4cG9ydENzdlRleHQoKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RXhwb3J0Q3N2VGV4dCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkICE9IG51bGwgPyB0aGlzLmdyaWQuZXhwb3J0Q3N2VGV4dCA6ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIGV4cG9ydCBidXR0b24ncyBkcm9wZG93biBtZW51LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmlneEdyaWQxLnRvb2xiYXIuZXhwb3J0Q2xpY2tlZCgpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBleHBvcnRDbGlja2VkKCkge1xuICAgICAgICB0aGlzLl9vdmVybGF5U2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5zZXR0aW5ncy50YXJnZXQgPSB0aGlzLmV4cG9ydEJ1dHRvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLl9vdmVybGF5U2V0dGluZ3Mub3V0bGV0ID0gdGhpcy5ncmlkLm91dGxldERpcmVjdGl2ZTtcbiAgICAgICAgdGhpcy5leHBvcnREcm9wZG93bi50b2dnbGUodGhpcy5fb3ZlcmxheVNldHRpbmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHBvcnRzIHRoZSBncmlkIHRvIGV4Y2VsLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmlneEdyaWQxLnRvb2xiYXIuZXhwb3J0VG9FeGNlbENsaWNrZWQoKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZXhwb3J0VG9FeGNlbENsaWNrZWQoKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUV4cG9ydCh0aGlzLmV4Y2VsRXhwb3J0ZXIsICdleGNlbCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4cG9ydHMgdGhlIGdyaWQgdG8gQ1NWLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmlneEdyaWQxLnRvb2xiYXIuZXhwb3J0VG9Dc3ZDbGlja2VkKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGV4cG9ydFRvQ3N2Q2xpY2tlZCgpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtRXhwb3J0KHRoaXMuY3N2RXhwb3J0ZXIsICdjc3YnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBlcmZvcm1FeHBvcnQoZXhwOiBJZ3hCYXNlRXhwb3J0ZXIsIGV4cG9ydFR5cGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmV4cG9ydENsaWNrZWQoKTtcblxuICAgICAgICBjb25zdCBmaWxlTmFtZSA9ICdFeHBvcnRlZERhdGEnO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gZXhwb3J0VHlwZSA9PT0gJ2V4Y2VsJyA/XG4gICAgICAgICAgICBuZXcgSWd4RXhjZWxFeHBvcnRlck9wdGlvbnMoZmlsZU5hbWUpIDpcbiAgICAgICAgICAgIG5ldyBJZ3hDc3ZFeHBvcnRlck9wdGlvbnMoZmlsZU5hbWUsIENzdkZpbGVUeXBlcy5DU1YpO1xuXG4gICAgICAgIGNvbnN0IGFyZ3MgPSB7IGdyaWQ6IHRoaXMuZ3JpZCwgZXhwb3J0ZXI6IGV4cCwgb3B0aW9uczogb3B0aW9ucywgY2FuY2VsOiBmYWxzZSB9O1xuXG4gICAgICAgIHRoaXMuZ3JpZC5vblRvb2xiYXJFeHBvcnRpbmcuZW1pdChhcmdzKTtcbiAgICAgICAgaWYgKGFyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZXhwLmV4cG9ydCh0aGlzLmdyaWQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIENvbHVtbiBIaWRpbmcgVUkuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZ3JpZDEudG9vbGJhci50b2dnbGVDb2x1bW5IaWRpbmdVSSgpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyB0b2dnbGVDb2x1bW5IaWRpbmdVSSgpIHtcbiAgICAgICAgdGhpcy5fb3ZlcmxheVNldHRpbmdzLnBvc2l0aW9uU3RyYXRlZ3kuc2V0dGluZ3MudGFyZ2V0ID0gdGhpcy5jb2x1bW5IaWRpbmdCdXR0b24ubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5fb3ZlcmxheVNldHRpbmdzLm91dGxldCA9IHRoaXMuZ3JpZC5vdXRsZXREaXJlY3RpdmU7XG4gICAgICAgIHRoaXMuY29sdW1uSGlkaW5nRHJvcGRvd24udG9nZ2xlKHRoaXMuX292ZXJsYXlTZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgQ29sdW1uIFBpbm5pbmcgVUkuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZ3JpZDEudG9vbGJhci50b2dnbGVDb2x1bW5QaW5uaW5nVUkoKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9nZ2xlQ29sdW1uUGlubmluZ1VJKCkge1xuICAgICAgICB0aGlzLl9vdmVybGF5U2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5zZXR0aW5ncy50YXJnZXQgPSB0aGlzLmNvbHVtblBpbm5pbmdCdXR0b24ubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5fb3ZlcmxheVNldHRpbmdzLm91dGxldCA9IHRoaXMuZ3JpZC5vdXRsZXREaXJlY3RpdmU7XG4gICAgICAgIHRoaXMuY29sdW1uUGlubmluZ0Ryb3Bkb3duLnRvZ2dsZSh0aGlzLl9vdmVybGF5U2V0dGluZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGBjb250ZXh0YCBvYmplY3Qgd2hpY2ggcmVwcmVzZW50cyB0aGUgYHRlbXBsYXRlIGNvbnRleHRgIGJpbmRpbmcgaW50byB0aGVcbiAgICAgKiBgdG9vbGJhciBjdXN0b20gY29udGFpbmVyYCBieSBwcm92aWRpbmcgcmVmZXJlbmNlcyB0byB0aGUgcGFyZW50IElneEdpcmQgYW5kIHRoZSB0b29sYmFyIGl0c2VsZi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgY29udGV4dCA9ICB0aGlzLmlneEdyaWQudG9vbGJhci5jb250ZXh0O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgY29udGV4dCgpOiBhbnkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gJGltcGxpY2l0OiB0aGlzXG4gICAgICAgICAgICBncmlkOiB0aGlzLmdyaWQsXG4gICAgICAgICAgICB0b29sYmFyOiB0aGlzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBwdWJsaWMgZ2V0IGN1c3RvbUNvbnRlbnRUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZCAhPSBudWxsICYmIHRoaXMuZ3JpZC50b29sYmFyQ3VzdG9tQ29udGVudFRlbXBsYXRlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyaWQudG9vbGJhckN1c3RvbUNvbnRlbnRUZW1wbGF0ZS50ZW1wbGF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIFRoZSBJZ3hHcmlkVG9vbGJhckN1c3RvbUNvbnRlbnREaXJlY3RpdmUgZGlyZWN0aXZlIGlzIHVzZWQgdG8gbWFyayBhbiAnbmctdGVtcGxhdGUnICh3aXRoXG4gKiB0aGUgJ2lneFRvb2xiYXJDdXN0b21Db250ZW50JyBzZWxlY3RvcikgZGVmaW5lZCBpbiB0aGUgSWd4R3JpZCB3aGljaCBpcyB1c2VkIHRvIHByb3ZpZGVcbiAqIGN1c3RvbSBjb250ZW50IGZvciBjZW5lciBwYXJ0IG9mIHRoZSBJZ3hHcmlkVG9vbGJhci5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4VG9vbGJhckN1c3RvbUNvbnRlbnRdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hHcmlkVG9vbGJhckN1c3RvbUNvbnRlbnREaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG4iXX0=