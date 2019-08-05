import { EventEmitter } from '@angular/core';
import { IgxBaseExporter } from '../exporter-common/base-export-service';
import { IgxCsvExporterOptions } from './csv-exporter-options';
export interface ICsvExportEndedEventArgs {
    csvData: string;
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
export declare class IgxCsvExporterService extends IgxBaseExporter {
    private _stringData;
    /**
     * This event is emitted when the export process finishes.
     * ```typescript
     * this.exporterService.onExportEnded.subscribe((args: ICsvExportEndedEventArgs) => {
     * // put event handler code here
     * });
     * ```
     * @memberof IgxCsvExporterService
     */
    onExportEnded: EventEmitter<ICsvExportEndedEventArgs>;
    protected exportDataImplementation(data: any[], options: IgxCsvExporterOptions): void;
    private saveFile;
    private exportFile;
}
