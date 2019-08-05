import * as JSZip from 'jszip/dist/jszip';
import { EventEmitter } from '@angular/core';
import { IgxExcelExporterOptions } from './excel-exporter-options';
import { IgxBaseExporter } from '../exporter-common/base-export-service';
export interface IExcelExportEndedEventArgs {
    xlsx: JSZip;
}
/**
 * **Ignite UI for Angular Excel Exporter Service** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/exporter_excel.html)
 *
 * The Ignite UI for Angular Excel Exporter service can export data in Microsoft® Excel® format from both raw data
 * (array) or from an `IgxGrid`.
 *
 * Example:
 * ```typescript
 * public localData = [
 *   { Name: "Eric Ridley", Age: "26" },
 *   { Name: "Alanis Brook", Age: "22" },
 *   { Name: "Jonathan Morris", Age: "23" }
 * ];
 *
 * constructor(private excelExportService: IgxExcelExporterService) {
 * }
 *
 * this.excelExportService.exportData(this.localData, new IgxExcelExporterOptions("FileName"));
 * ```
 */
export declare class IgxExcelExporterService extends IgxBaseExporter {
    private static ZIP_OPTIONS;
    private _xlsx;
    /**
     * This event is emitted when the export process finishes.
     * ```typescript
     * this.exporterService.onExportEnded.subscribe((args: IExcelExportEndedEventArgs) => {
     * // put event handler code here
     * });
     * ```
     * @memberof IgxExcelExporterService
     */
    onExportEnded: EventEmitter<IExcelExportEndedEventArgs>;
    private static populateFolder;
    protected exportDataImplementation(data: any[], options: IgxExcelExporterOptions): void;
    private saveFile;
}