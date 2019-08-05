/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class IgxCsvExporterService extends IgxBaseExporter {
    constructor() {
        super(...arguments);
        /**
         * This event is emitted when the export process finishes.
         * ```typescript
         * this.exporterService.onExportEnded.subscribe((args: ICsvExportEndedEventArgs) => {
         * // put event handler code here
         * });
         * ```
         * \@memberof IgxCsvExporterService
         */
        this.onExportEnded = new EventEmitter();
    }
    /**
     * @protected
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    exportDataImplementation(data, options) {
        data = data.map((item) => item.rowData);
        /** @type {?} */
        const csvData = new CharSeparatedValueData(data, options.valueDelimiter);
        this._stringData = csvData.prepareData();
        this.saveFile(options);
        this.onExportEnded.emit({ csvData: this._stringData });
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    saveFile(options) {
        switch (options.fileType) {
            case CsvFileTypes.CSV:
                this.exportFile(this._stringData, options.fileName, 'text/csv;charset=utf-8;');
                break;
            case CsvFileTypes.TSV:
            case CsvFileTypes.TAB:
                this.exportFile(this._stringData, options.fileName, 'text/tab-separated-values;charset=utf-8;');
                break;
        }
    }
    /**
     * @private
     * @param {?} data
     * @param {?} fileName
     * @param {?} fileType
     * @return {?}
     */
    exportFile(data, fileName, fileType) {
        /** @type {?} */
        const blob = new Blob(['\ufeff', data], { type: fileType });
        ExportUtilities.saveBlobToFile(blob, fileName);
    }
}
IgxCsvExporterService.decorators = [
    { type: Injectable }
];
IgxCsvExporterService.propDecorators = {
    onExportEnded: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3N2LWV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jc3YvY3N2LWV4cG9ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7O0FBRTdFLDhDQUVDOzs7SUFERywyQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCcEIsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGVBQWU7SUFEMUQ7Ozs7Ozs7Ozs7O1FBY1csa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBNEIsQ0FBQztJQTJCeEUsQ0FBQzs7Ozs7OztJQXpCYSx3QkFBd0IsQ0FBQyxJQUFXLEVBQUUsT0FBOEI7UUFDMUUsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Y0FDbEMsT0FBTyxHQUFHLElBQUksc0JBQXNCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUM7UUFDeEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7SUFFTyxRQUFRLENBQUMsT0FBOEI7UUFDM0MsUUFBUSxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3RCLEtBQUssWUFBWSxDQUFDLEdBQUc7Z0JBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLHlCQUF5QixDQUFDLENBQUM7Z0JBQy9FLE1BQU07WUFDVixLQUFLLFlBQVksQ0FBQyxHQUFHLENBQUM7WUFDdEIsS0FBSyxZQUFZLENBQUMsR0FBRztnQkFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsMENBQTBDLENBQUMsQ0FBQztnQkFDaEcsTUFBTTtTQUNiO0lBQ0wsQ0FBQzs7Ozs7Ozs7SUFFTyxVQUFVLENBQUMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsUUFBZ0I7O2NBQ3pELElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQztRQUMzRCxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7WUF4Q0osVUFBVTs7OzRCQWFOLE1BQU07Ozs7Ozs7SUFYUCw0Q0FBNEI7Ozs7Ozs7Ozs7O0lBVzVCLDhDQUNvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hCYXNlRXhwb3J0ZXIgfSBmcm9tICcuLi9leHBvcnRlci1jb21tb24vYmFzZS1leHBvcnQtc2VydmljZSc7XG5pbXBvcnQgeyBFeHBvcnRVdGlsaXRpZXMgfSBmcm9tICcuLi9leHBvcnRlci1jb21tb24vZXhwb3J0LXV0aWxpdGllcyc7XG5pbXBvcnQgeyBDaGFyU2VwYXJhdGVkVmFsdWVEYXRhIH0gZnJvbSAnLi9jaGFyLXNlcGFyYXRlZC12YWx1ZS1kYXRhJztcbmltcG9ydCB7IENzdkZpbGVUeXBlcywgSWd4Q3N2RXhwb3J0ZXJPcHRpb25zIH0gZnJvbSAnLi9jc3YtZXhwb3J0ZXItb3B0aW9ucyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNzdkV4cG9ydEVuZGVkRXZlbnRBcmdzIHtcbiAgICBjc3ZEYXRhOiBzdHJpbmc7XG59XG5cbi8qKlxuICogKipJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgQ1NWIEV4cG9ydGVyIFNlcnZpY2UqKiAtXG4gKiBbRG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly93d3cuaW5mcmFnaXN0aWNzLmNvbS9wcm9kdWN0cy9pZ25pdGUtdWktYW5ndWxhci9hbmd1bGFyL2NvbXBvbmVudHMvZXhwb3J0ZXJfY3N2Lmh0bWwpXG4gKlxuICogVGhlIElnbml0ZSBVSSBmb3IgQW5ndWxhciBDU1YgRXhwb3J0ZXIgc2VydmljZSBjYW4gZXhwb3J0IGRhdGEgaW4gYSBDaGFyYWN0ZXIgU2VwYXJhdGVkIFZhbHVlcyBmb3JtYXQgZnJvbVxuICogYm90aCByYXcgZGF0YSAoYXJyYXkpIG9yIGZyb20gYW4gYElneEdyaWRgLlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBwdWJsaWMgbG9jYWxEYXRhID0gW1xuICogICB7IE5hbWU6IFwiRXJpYyBSaWRsZXlcIiwgQWdlOiBcIjI2XCIgfSxcbiAqICAgeyBOYW1lOiBcIkFsYW5pcyBCcm9va1wiLCBBZ2U6IFwiMjJcIiB9LFxuICogICB7IE5hbWU6IFwiSm9uYXRoYW4gTW9ycmlzXCIsIEFnZTogXCIyM1wiIH1cbiAqIF07XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjc3ZFeHBvcnRTZXJ2aWNlOiBJZ3hDc3ZFeHBvcnRlclNlcnZpY2UpIHtcbiAqIH1cbiAqXG4gKiBjb25zdCBvcHQ6IElneENzdkV4cG9ydGVyT3B0aW9ucyA9IG5ldyBJZ3hDc3ZFeHBvcnRlck9wdGlvbnMoXCJGaWxlTmFtZVwiLCBDc3ZGaWxlVHlwZXMuQ1NWKTtcbiAqIHRoaXMuY3N2RXhwb3J0U2VydmljZS5leHBvcnREYXRhKHRoaXMubG9jYWxEYXRhLCBvcHQpO1xuICogYGBgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJZ3hDc3ZFeHBvcnRlclNlcnZpY2UgZXh0ZW5kcyBJZ3hCYXNlRXhwb3J0ZXIge1xuICAgIHByaXZhdGUgX3N0cmluZ0RhdGE6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZW1pdHRlZCB3aGVuIHRoZSBleHBvcnQgcHJvY2VzcyBmaW5pc2hlcy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5leHBvcnRlclNlcnZpY2Uub25FeHBvcnRFbmRlZC5zdWJzY3JpYmUoKGFyZ3M6IElDc3ZFeHBvcnRFbmRlZEV2ZW50QXJncykgPT4ge1xuICAgICAqIC8vIHB1dCBldmVudCBoYW5kbGVyIGNvZGUgaGVyZVxuICAgICAqIH0pO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDc3ZFeHBvcnRlclNlcnZpY2VcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25FeHBvcnRFbmRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SUNzdkV4cG9ydEVuZGVkRXZlbnRBcmdzPigpO1xuXG4gICAgcHJvdGVjdGVkIGV4cG9ydERhdGFJbXBsZW1lbnRhdGlvbihkYXRhOiBhbnlbXSwgb3B0aW9uczogSWd4Q3N2RXhwb3J0ZXJPcHRpb25zKSB7XG4gICAgICAgIGRhdGEgPSBkYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5yb3dEYXRhKTtcbiAgICAgICAgY29uc3QgY3N2RGF0YSA9IG5ldyBDaGFyU2VwYXJhdGVkVmFsdWVEYXRhKGRhdGEsIG9wdGlvbnMudmFsdWVEZWxpbWl0ZXIpO1xuICAgICAgICB0aGlzLl9zdHJpbmdEYXRhID0gY3N2RGF0YS5wcmVwYXJlRGF0YSgpO1xuXG4gICAgICAgIHRoaXMuc2F2ZUZpbGUob3B0aW9ucyk7XG4gICAgICAgIHRoaXMub25FeHBvcnRFbmRlZC5lbWl0KHsgY3N2RGF0YTogdGhpcy5fc3RyaW5nRGF0YSB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNhdmVGaWxlKG9wdGlvbnM6IElneENzdkV4cG9ydGVyT3B0aW9ucykge1xuICAgICAgICBzd2l0Y2ggKG9wdGlvbnMuZmlsZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQ3N2RmlsZVR5cGVzLkNTVjpcbiAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydEZpbGUodGhpcy5fc3RyaW5nRGF0YSwgb3B0aW9ucy5maWxlTmFtZSwgJ3RleHQvY3N2O2NoYXJzZXQ9dXRmLTg7Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENzdkZpbGVUeXBlcy5UU1Y6XG4gICAgICAgICAgICBjYXNlIENzdkZpbGVUeXBlcy5UQUI6XG4gICAgICAgICAgICAgICAgdGhpcy5leHBvcnRGaWxlKHRoaXMuX3N0cmluZ0RhdGEsIG9wdGlvbnMuZmlsZU5hbWUsICd0ZXh0L3RhYi1zZXBhcmF0ZWQtdmFsdWVzO2NoYXJzZXQ9dXRmLTg7Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGV4cG9ydEZpbGUoZGF0YTogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCBmaWxlVHlwZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbJ1xcdWZlZmYnLCBkYXRhXSwgeyB0eXBlOiBmaWxlVHlwZSB9KTtcbiAgICAgICAgRXhwb3J0VXRpbGl0aWVzLnNhdmVCbG9iVG9GaWxlKGJsb2IsIGZpbGVOYW1lKTtcbiAgICB9XG59XG4iXX0=