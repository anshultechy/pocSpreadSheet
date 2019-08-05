import { EventEmitter } from '@angular/core';
import { IgxExporterOptionsBase } from './exporter-options-base';
/**
 * onRowExport event arguments
 * this.exporterService.onRowExport.subscribe((args: IRowExportingEventArgs) => {
 * // set args properties here
 * })
 */
export interface IRowExportingEventArgs {
    /**
     * Contains the exporting row data
     */
    rowData: any;
    /**
     * Contains the exporting row index
     */
    rowIndex: number;
    /**
     * Skip the exporting row when set to true
     */
    cancel: boolean;
}
/**
    * onColumnExport event arguments
    * ```typescript
    * this.exporterService.onColumnExport.subscribe((args: IColumnExportingEventArgs) => {
    * // set args properties here
    * });
    * ```
    */
export interface IColumnExportingEventArgs {
    /**
     * Contains the exporting column header
     */
    header: string;
    /**
     * Contains the exporting column field name
     */
    field: string;
    /**
     * Contains the exporting column index
     */
    columnIndex: number;
    /**
     * Skip the exporting column when set to true
     */
    cancel: boolean;
    /**
     * Export the column's data without applying its formatter, when set to true
     */
    skipFormatter: boolean;
}
export declare abstract class IgxBaseExporter {
    private _columnList;
    private flatRecords;
    protected _isTreeGrid: boolean;
    protected _indexOfLastPinnedColumn: number;
    protected _sort: any;
    /**
     * This event is emitted when a row is exported.
     * ```typescript
     * this.exporterService.onRowExport.subscribe((args: IRowExportingEventArgs) => {
     * // put event handler code here
     * });
     * ```
     * @memberof IgxBaseExporter
     */
    onRowExport: EventEmitter<IRowExportingEventArgs>;
    /**
     * This event is emitted when a column is exported.
     * ```typescript
     * this.exporterService.onColumnExport.subscribe((args: IColumnExportingEventArgs) => {
     * // put event handler code here
     * });
     * ```
     * @memberof IgxBaseExporter
     */
    onColumnExport: EventEmitter<IColumnExportingEventArgs>;
    /**
     * Method for exporting IgxGrid component's data.
     * ```typescript
     * this.exporterService.export(this.igxGridForExport, this.exportOptions);
     * ```
     * @memberof IgxBaseExporter
     */
    export(grid: any, options: IgxExporterOptionsBase): void;
    /**
     * Method for exporting any kind of array data.
     * ```typescript
     * this.exporterService.exportData(this.arrayForExport, this.exportOptions);
     * ```
     * @memberof IgxBaseExporter
     */
    exportData(data: any[], options: IgxExporterOptionsBase): void;
    protected abstract exportDataImplementation(data: any[], options: IgxExporterOptionsBase): void;
    private exportRow;
    private prepareData;
    private prepareHierarchicalData;
    private resetDefaults;
}
