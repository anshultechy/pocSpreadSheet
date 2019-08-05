/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Injectable, Output } from '@angular/core';
import { IgxBaseExporter } from '../exporter-common/base-export-service';
import { ExportUtilities } from '../exporter-common/export-utilities';
import { CharSeparatedValueData } from './char-separated-value-data';
import { CsvFileTypes } from './csv-exporter-options';
/**
 * @record
 */
export function ICsvExportEndedEventArgs() { }
if (false) {
    /** @type {?} */
    ICsvExportEndedEventArgs.prototype.csvData;
}
/**
 * **Ignite UI for Angular CSV Exporter Service** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/exporter_csv.html)
 *
 * The Ignite UI for Angular CSV Exporter service can export data in a Character Separated Values format from
 * both raw data (array) or from an `IgxGrid`.
 *
 * Example:
 * ```typescript
 * public localData = [
 *   { Name: "Eric Ridley", Age: "26" },
 *   { Name: "Alanis Brook", Age: "22" },
 *   { Name: "Jonathan Morris", Age: "23" }
 * ];
 *
 * constructor(private csvExportService: IgxCsvExporterService) {
 * }
 *
 * const opt: IgxCsvExporterOptions = new IgxCsvExporterOptions("FileName", CsvFileTypes.CSV);
 * this.csvExportService.exportData(this.localData, opt);
 * ```
 */
var IgxCsvExporterService = /** @class */ (function (_super) {
    tslib_1.__extends(IgxCsvExporterService, _super);
    function IgxCsvExporterService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * This event is emitted when the export process finishes.
         * ```typescript
         * this.exporterService.onExportEnded.subscribe((args: ICsvExportEndedEventArgs) => {
         * // put event handler code here
         * });
         * ```
         * \@memberof IgxCsvExporterService
         */
        _this.onExportEnded = new EventEmitter();
        return _this;
    }
    /**
     * @protected
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    IgxCsvExporterService.prototype.exportDataImplementation = /**
     * @protected
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (data, options) {
        data = data.map(function (item) { return item.rowData; });
        /** @type {?} */
        var csvData = new CharSeparatedValueData(data, options.valueDelimiter);
        this._stringData = csvData.prepareData();
        this.saveFile(options);
        this.onExportEnded.emit({ csvData: this._stringData });
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    IgxCsvExporterService.prototype.saveFile = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        switch (options.fileType) {
            case CsvFileTypes.CSV:
                this.exportFile(this._stringData, options.fileName, 'text/csv;charset=utf-8;');
                break;
            case CsvFileTypes.TSV:
            case CsvFileTypes.TAB:
                this.exportFile(this._stringData, options.fileName, 'text/tab-separated-values;charset=utf-8;');
                break;
        }
    };
    /**
     * @private
     * @param {?} data
     * @param {?} fileName
     * @param {?} fileType
     * @return {?}
     */
    IgxCsvExporterService.prototype.exportFile = /**
     * @private
     * @param {?} data
     * @param {?} fileName
     * @param {?} fileType
     * @return {?}
     */
    function (data, fileName, fileType) {
        /** @type {?} */
        var blob = new Blob(['\ufeff', data], { type: fileType });
        ExportUtilities.saveBlobToFile(blob, fileName);
    };
    IgxCsvExporterService.decorators = [
        { type: Injectable }
    ];
    IgxCsvExporterService.propDecorators = {
        onExportEnded: [{ type: Output }]
    };
    return IgxCsvExporterService;
}(IgxBaseExporter));
export { IgxCsvExporterService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxCsvExporterService.prototype._stringData;
    /**
     * This event is emitted when the export process finishes.
     * ```typescript
     * this.exporterService.onExportEnded.subscribe((args: ICsvExportEndedEventArgs) => {
     * // put event handler code here
     * });
     * ```
     * \@memberof IgxCsvExporterService
     * @type {?}
     */
    IgxCsvExporterService.prototype.onExportEnded;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3N2LWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jc3YvY3N2LWV4cG9ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUU3RSw4Q0FFQzs7O0lBREcsMkNBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QnBCO0lBQzJDLGlEQUFlO0lBRDFEO1FBQUEscUVBeUNDOzs7Ozs7Ozs7O1FBM0JVLG1CQUFhLEdBQUcsSUFBSSxZQUFZLEVBQTRCLENBQUM7O0lBMkJ4RSxDQUFDOzs7Ozs7O0lBekJhLHdEQUF3Qjs7Ozs7O0lBQWxDLFVBQW1DLElBQVcsRUFBRSxPQUE4QjtRQUMxRSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosQ0FBWSxDQUFDLENBQUM7O1lBQ2xDLE9BQU8sR0FBRyxJQUFJLHNCQUFzQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXpDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBRU8sd0NBQVE7Ozs7O0lBQWhCLFVBQWlCLE9BQThCO1FBQzNDLFFBQVEsT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUN0QixLQUFLLFlBQVksQ0FBQyxHQUFHO2dCQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO2dCQUMvRSxNQUFNO1lBQ1YsS0FBSyxZQUFZLENBQUMsR0FBRyxDQUFDO1lBQ3RCLEtBQUssWUFBWSxDQUFDLEdBQUc7Z0JBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLDBDQUEwQyxDQUFDLENBQUM7Z0JBQ2hHLE1BQU07U0FDYjtJQUNMLENBQUM7Ozs7Ozs7O0lBRU8sMENBQVU7Ozs7Ozs7SUFBbEIsVUFBbUIsSUFBWSxFQUFFLFFBQWdCLEVBQUUsUUFBZ0I7O1lBQ3pELElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQztRQUMzRCxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNuRCxDQUFDOztnQkF4Q0osVUFBVTs7O2dDQWFOLE1BQU07O0lBNEJYLDRCQUFDO0NBQUEsQUF6Q0QsQ0FDMkMsZUFBZSxHQXdDekQ7U0F4Q1kscUJBQXFCOzs7Ozs7SUFDOUIsNENBQTRCOzs7Ozs7Ozs7OztJQVc1Qiw4Q0FDb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4QmFzZUV4cG9ydGVyIH0gZnJvbSAnLi4vZXhwb3J0ZXItY29tbW9uL2Jhc2UtZXhwb3J0LXNlcnZpY2UnO1xuaW1wb3J0IHsgRXhwb3J0VXRpbGl0aWVzIH0gZnJvbSAnLi4vZXhwb3J0ZXItY29tbW9uL2V4cG9ydC11dGlsaXRpZXMnO1xuaW1wb3J0IHsgQ2hhclNlcGFyYXRlZFZhbHVlRGF0YSB9IGZyb20gJy4vY2hhci1zZXBhcmF0ZWQtdmFsdWUtZGF0YSc7XG5pbXBvcnQgeyBDc3ZGaWxlVHlwZXMsIElneENzdkV4cG9ydGVyT3B0aW9ucyB9IGZyb20gJy4vY3N2LWV4cG9ydGVyLW9wdGlvbnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDc3ZFeHBvcnRFbmRlZEV2ZW50QXJncyB7XG4gICAgY3N2RGF0YTogc3RyaW5nO1xufVxuXG4vKipcbiAqICoqSWduaXRlIFVJIGZvciBBbmd1bGFyIENTViBFeHBvcnRlciBTZXJ2aWNlKiogLVxuICogW0RvY3VtZW50YXRpb25dKGh0dHBzOi8vd3d3LmluZnJhZ2lzdGljcy5jb20vcHJvZHVjdHMvaWduaXRlLXVpLWFuZ3VsYXIvYW5ndWxhci9jb21wb25lbnRzL2V4cG9ydGVyX2Nzdi5odG1sKVxuICpcbiAqIFRoZSBJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgQ1NWIEV4cG9ydGVyIHNlcnZpY2UgY2FuIGV4cG9ydCBkYXRhIGluIGEgQ2hhcmFjdGVyIFNlcGFyYXRlZCBWYWx1ZXMgZm9ybWF0IGZyb21cbiAqIGJvdGggcmF3IGRhdGEgKGFycmF5KSBvciBmcm9tIGFuIGBJZ3hHcmlkYC5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgdHlwZXNjcmlwdFxuICogcHVibGljIGxvY2FsRGF0YSA9IFtcbiAqICAgeyBOYW1lOiBcIkVyaWMgUmlkbGV5XCIsIEFnZTogXCIyNlwiIH0sXG4gKiAgIHsgTmFtZTogXCJBbGFuaXMgQnJvb2tcIiwgQWdlOiBcIjIyXCIgfSxcbiAqICAgeyBOYW1lOiBcIkpvbmF0aGFuIE1vcnJpc1wiLCBBZ2U6IFwiMjNcIiB9XG4gKiBdO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY3N2RXhwb3J0U2VydmljZTogSWd4Q3N2RXhwb3J0ZXJTZXJ2aWNlKSB7XG4gKiB9XG4gKlxuICogY29uc3Qgb3B0OiBJZ3hDc3ZFeHBvcnRlck9wdGlvbnMgPSBuZXcgSWd4Q3N2RXhwb3J0ZXJPcHRpb25zKFwiRmlsZU5hbWVcIiwgQ3N2RmlsZVR5cGVzLkNTVik7XG4gKiB0aGlzLmNzdkV4cG9ydFNlcnZpY2UuZXhwb3J0RGF0YSh0aGlzLmxvY2FsRGF0YSwgb3B0KTtcbiAqIGBgYFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSWd4Q3N2RXhwb3J0ZXJTZXJ2aWNlIGV4dGVuZHMgSWd4QmFzZUV4cG9ydGVyIHtcbiAgICBwcml2YXRlIF9zdHJpbmdEYXRhOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGVtaXR0ZWQgd2hlbiB0aGUgZXhwb3J0IHByb2Nlc3MgZmluaXNoZXMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZXhwb3J0ZXJTZXJ2aWNlLm9uRXhwb3J0RW5kZWQuc3Vic2NyaWJlKChhcmdzOiBJQ3N2RXhwb3J0RW5kZWRFdmVudEFyZ3MpID0+IHtcbiAgICAgKiAvLyBwdXQgZXZlbnQgaGFuZGxlciBjb2RlIGhlcmVcbiAgICAgKiB9KTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q3N2RXhwb3J0ZXJTZXJ2aWNlXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uRXhwb3J0RW5kZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElDc3ZFeHBvcnRFbmRlZEV2ZW50QXJncz4oKTtcblxuICAgIHByb3RlY3RlZCBleHBvcnREYXRhSW1wbGVtZW50YXRpb24oZGF0YTogYW55W10sIG9wdGlvbnM6IElneENzdkV4cG9ydGVyT3B0aW9ucykge1xuICAgICAgICBkYXRhID0gZGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0ucm93RGF0YSk7XG4gICAgICAgIGNvbnN0IGNzdkRhdGEgPSBuZXcgQ2hhclNlcGFyYXRlZFZhbHVlRGF0YShkYXRhLCBvcHRpb25zLnZhbHVlRGVsaW1pdGVyKTtcbiAgICAgICAgdGhpcy5fc3RyaW5nRGF0YSA9IGNzdkRhdGEucHJlcGFyZURhdGEoKTtcblxuICAgICAgICB0aGlzLnNhdmVGaWxlKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLm9uRXhwb3J0RW5kZWQuZW1pdCh7IGNzdkRhdGE6IHRoaXMuX3N0cmluZ0RhdGEgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzYXZlRmlsZShvcHRpb25zOiBJZ3hDc3ZFeHBvcnRlck9wdGlvbnMpIHtcbiAgICAgICAgc3dpdGNoIChvcHRpb25zLmZpbGVUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIENzdkZpbGVUeXBlcy5DU1Y6XG4gICAgICAgICAgICAgICAgdGhpcy5leHBvcnRGaWxlKHRoaXMuX3N0cmluZ0RhdGEsIG9wdGlvbnMuZmlsZU5hbWUsICd0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04OycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDc3ZGaWxlVHlwZXMuVFNWOlxuICAgICAgICAgICAgY2FzZSBDc3ZGaWxlVHlwZXMuVEFCOlxuICAgICAgICAgICAgICAgIHRoaXMuZXhwb3J0RmlsZSh0aGlzLl9zdHJpbmdEYXRhLCBvcHRpb25zLmZpbGVOYW1lLCAndGV4dC90YWItc2VwYXJhdGVkLXZhbHVlcztjaGFyc2V0PXV0Zi04OycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBleHBvcnRGaWxlKGRhdGE6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZywgZmlsZVR5cGU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoWydcXHVmZWZmJywgZGF0YV0sIHsgdHlwZTogZmlsZVR5cGUgfSk7XG4gICAgICAgIEV4cG9ydFV0aWxpdGllcy5zYXZlQmxvYlRvRmlsZShibG9iLCBmaWxlTmFtZSk7XG4gICAgfVxufVxuIl19