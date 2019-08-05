/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as JSZip from 'jszip/dist/jszip';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { ExcelElementsFactory } from './excel-elements-factory';
import { ExcelFolderTypes } from './excel-enums';
import { IgxBaseExporter } from '../exporter-common/base-export-service';
import { ExportUtilities } from '../exporter-common/export-utilities';
import { WorksheetData } from './worksheet-data';
/**
 * @record
 */
export function IExcelExportEndedEventArgs() { }
if (false) {
    /** @type {?} */
    IExcelExportEndedEventArgs.prototype.xlsx;
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
export class IgxExcelExporterService extends IgxBaseExporter {
    constructor() {
        super(...arguments);
        /**
         * This event is emitted when the export process finishes.
         * ```typescript
         * this.exporterService.onExportEnded.subscribe((args: IExcelExportEndedEventArgs) => {
         * // put event handler code here
         * });
         * ```
         * \@memberof IgxExcelExporterService
         */
        this.onExportEnded = new EventEmitter();
    }
    /**
     * @private
     * @param {?} folder
     * @param {?} zip
     * @param {?} worksheetData
     * @return {?}
     */
    static populateFolder(folder, zip, worksheetData) {
        for (const childFolder of folder.childFolders(worksheetData)) {
            /** @type {?} */
            const folderIntance = ExcelElementsFactory.getExcelFolder(childFolder);
            /** @type {?} */
            const zipFolder = zip.folder(folderIntance.folderName);
            IgxExcelExporterService.populateFolder(folderIntance, zipFolder, worksheetData);
        }
        for (const childFile of folder.childFiles(worksheetData)) {
            /** @type {?} */
            const fileInstance = ExcelElementsFactory.getExcelFile(childFile);
            fileInstance.writeElement(zip, worksheetData);
        }
    }
    /**
     * @protected
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    exportDataImplementation(data, options) {
        if (this._isTreeGrid) {
            /** @type {?} */
            let maxLevel = 0;
            data.forEach((r) => {
                maxLevel = Math.max(maxLevel, r.originalRowData.level);
            });
            if (maxLevel > 7) {
                throw Error('Can create an outline of up to eight levels!');
            }
        }
        /** @type {?} */
        const worksheetData = new WorksheetData(data, options, this._indexOfLastPinnedColumn, this._sort, this._isTreeGrid);
        this._xlsx = new JSZip();
        /** @type {?} */
        const rootFolder = ExcelElementsFactory.getExcelFolder(ExcelFolderTypes.RootExcelFolder);
        IgxExcelExporterService.populateFolder(rootFolder, this._xlsx, worksheetData);
        this._xlsx.generateAsync(IgxExcelExporterService.ZIP_OPTIONS).then((result) => {
            this.saveFile(result, options.fileName);
            this.onExportEnded.emit({ xlsx: this._xlsx });
        });
    }
    /**
     * @private
     * @param {?} data
     * @param {?} fileName
     * @return {?}
     */
    saveFile(data, fileName) {
        /** @type {?} */
        const blob = new Blob([ExportUtilities.stringToArrayBuffer(atob(data))], {
            type: ''
        });
        ExportUtilities.saveBlobToFile(blob, fileName);
    }
}
IgxExcelExporterService.ZIP_OPTIONS = { compression: 'DEFLATE', type: 'base64' };
IgxExcelExporterService.decorators = [
    { type: Injectable }
];
IgxExcelExporterService.propDecorators = {
    onExportEnded: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxExcelExporterService.ZIP_OPTIONS;
    /**
     * @type {?}
     * @private
     */
    IgxExcelExporterService.prototype._xlsx;
    /**
     * This event is emitted when the export process finishes.
     * ```typescript
     * this.exporterService.onExportEnded.subscribe((args: IExcelExportEndedEventArgs) => {
     * // put event handler code here
     * });
     * ```
     * \@memberof IgxExcelExporterService
     * @type {?}
     */
    IgxExcelExporterService.prototype.onExportEnded;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtZXhwb3J0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4Y2VsL2V4Y2VsLWV4cG9ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssS0FBSyxNQUFNLGtCQUFrQixDQUFDO0FBRTFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFFakQsZ0RBRUM7OztJQURHLDBDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCaEIsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGVBQWU7SUFENUQ7Ozs7Ozs7Ozs7O1FBZ0JXLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQThCLENBQUM7SUE4QzFFLENBQUM7Ozs7Ozs7O0lBNUNXLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBb0IsRUFBRSxHQUFVLEVBQUUsYUFBNEI7UUFDeEYsS0FBSyxNQUFNLFdBQVcsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFOztrQkFDcEQsYUFBYSxHQUFHLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7O2tCQUNoRSxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO1lBQ3RELHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ25GO1FBRUQsS0FBSyxNQUFNLFNBQVMsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFOztrQkFDaEQsWUFBWSxHQUFHLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7WUFDakUsWUFBWSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDakQ7SUFDTCxDQUFDOzs7Ozs7O0lBRVMsd0JBQXdCLENBQUMsSUFBVyxFQUFFLE9BQWdDO1FBQzVFLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTs7Z0JBQ2QsUUFBUSxHQUFHLENBQUM7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNmLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNELENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFO2dCQUNkLE1BQU0sS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7YUFDL0Q7U0FDSjs7Y0FFSyxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ25ILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQzs7Y0FFbkIsVUFBVSxHQUFHLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7UUFDeEYsdUJBQXVCLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRTlFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV4QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7Ozs7SUFFTyxRQUFRLENBQUMsSUFBWSxFQUFFLFFBQWdCOztjQUNyQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyRSxJQUFJLEVBQUUsRUFBRTtTQUNYLENBQUM7UUFFRixlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNuRCxDQUFDOztBQTFEYyxtQ0FBVyxHQUFHLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7O1lBSDNFLFVBQVU7Ozs0QkFlTixNQUFNOzs7Ozs7O0lBWlAsb0NBQXdFOzs7OztJQUN4RSx3Q0FBcUI7Ozs7Ozs7Ozs7O0lBV3JCLGdEQUNzRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEpTWmlwIGZyb20gJ2pzemlwL2Rpc3QvanN6aXAnO1xuXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXhjZWxFbGVtZW50c0ZhY3RvcnkgfSBmcm9tICcuL2V4Y2VsLWVsZW1lbnRzLWZhY3RvcnknO1xuaW1wb3J0IHsgRXhjZWxGb2xkZXJUeXBlcyB9IGZyb20gJy4vZXhjZWwtZW51bXMnO1xuaW1wb3J0IHsgSWd4RXhjZWxFeHBvcnRlck9wdGlvbnMgfSBmcm9tICcuL2V4Y2VsLWV4cG9ydGVyLW9wdGlvbnMnO1xuaW1wb3J0IHsgSUV4Y2VsRm9sZGVyIH0gZnJvbSAnLi9leGNlbC1pbnRlcmZhY2VzJztcbmltcG9ydCB7IElneEJhc2VFeHBvcnRlciB9IGZyb20gJy4uL2V4cG9ydGVyLWNvbW1vbi9iYXNlLWV4cG9ydC1zZXJ2aWNlJztcbmltcG9ydCB7IEV4cG9ydFV0aWxpdGllcyB9IGZyb20gJy4uL2V4cG9ydGVyLWNvbW1vbi9leHBvcnQtdXRpbGl0aWVzJztcbmltcG9ydCB7IFdvcmtzaGVldERhdGEgfSBmcm9tICcuL3dvcmtzaGVldC1kYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBJRXhjZWxFeHBvcnRFbmRlZEV2ZW50QXJncyB7XG4gICAgeGxzeDogSlNaaXA7XG59XG5cbi8qKlxuICogKipJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgRXhjZWwgRXhwb3J0ZXIgU2VydmljZSoqIC1cbiAqIFtEb2N1bWVudGF0aW9uXShodHRwczovL3d3dy5pbmZyYWdpc3RpY3MuY29tL3Byb2R1Y3RzL2lnbml0ZS11aS1hbmd1bGFyL2FuZ3VsYXIvY29tcG9uZW50cy9leHBvcnRlcl9leGNlbC5odG1sKVxuICpcbiAqIFRoZSBJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgRXhjZWwgRXhwb3J0ZXIgc2VydmljZSBjYW4gZXhwb3J0IGRhdGEgaW4gTWljcm9zb2Z0wq4gRXhjZWzCriBmb3JtYXQgZnJvbSBib3RoIHJhdyBkYXRhXG4gKiAoYXJyYXkpIG9yIGZyb20gYW4gYElneEdyaWRgLlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBwdWJsaWMgbG9jYWxEYXRhID0gW1xuICogICB7IE5hbWU6IFwiRXJpYyBSaWRsZXlcIiwgQWdlOiBcIjI2XCIgfSxcbiAqICAgeyBOYW1lOiBcIkFsYW5pcyBCcm9va1wiLCBBZ2U6IFwiMjJcIiB9LFxuICogICB7IE5hbWU6IFwiSm9uYXRoYW4gTW9ycmlzXCIsIEFnZTogXCIyM1wiIH1cbiAqIF07XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBleGNlbEV4cG9ydFNlcnZpY2U6IElneEV4Y2VsRXhwb3J0ZXJTZXJ2aWNlKSB7XG4gKiB9XG4gKlxuICogdGhpcy5leGNlbEV4cG9ydFNlcnZpY2UuZXhwb3J0RGF0YSh0aGlzLmxvY2FsRGF0YSwgbmV3IElneEV4Y2VsRXhwb3J0ZXJPcHRpb25zKFwiRmlsZU5hbWVcIikpO1xuICogYGBgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJZ3hFeGNlbEV4cG9ydGVyU2VydmljZSBleHRlbmRzIElneEJhc2VFeHBvcnRlciB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBaSVBfT1BUSU9OUyA9IHsgY29tcHJlc3Npb246ICdERUZMQVRFJywgdHlwZTogJ2Jhc2U2NCcgfTtcbiAgICBwcml2YXRlIF94bHN4OiBKU1ppcDtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZW1pdHRlZCB3aGVuIHRoZSBleHBvcnQgcHJvY2VzcyBmaW5pc2hlcy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5leHBvcnRlclNlcnZpY2Uub25FeHBvcnRFbmRlZC5zdWJzY3JpYmUoKGFyZ3M6IElFeGNlbEV4cG9ydEVuZGVkRXZlbnRBcmdzKSA9PiB7XG4gICAgICogLy8gcHV0IGV2ZW50IGhhbmRsZXIgY29kZSBoZXJlXG4gICAgICogfSk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEV4Y2VsRXhwb3J0ZXJTZXJ2aWNlXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uRXhwb3J0RW5kZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElFeGNlbEV4cG9ydEVuZGVkRXZlbnRBcmdzPigpO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcG9wdWxhdGVGb2xkZXIoZm9sZGVyOiBJRXhjZWxGb2xkZXIsIHppcDogSlNaaXAsIHdvcmtzaGVldERhdGE6IFdvcmtzaGVldERhdGEpOiBhbnkge1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkRm9sZGVyIG9mIGZvbGRlci5jaGlsZEZvbGRlcnMod29ya3NoZWV0RGF0YSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvbGRlckludGFuY2UgPSBFeGNlbEVsZW1lbnRzRmFjdG9yeS5nZXRFeGNlbEZvbGRlcihjaGlsZEZvbGRlcik7XG4gICAgICAgICAgICBjb25zdCB6aXBGb2xkZXIgPSB6aXAuZm9sZGVyKGZvbGRlckludGFuY2UuZm9sZGVyTmFtZSk7XG4gICAgICAgICAgICBJZ3hFeGNlbEV4cG9ydGVyU2VydmljZS5wb3B1bGF0ZUZvbGRlcihmb2xkZXJJbnRhbmNlLCB6aXBGb2xkZXIsIHdvcmtzaGVldERhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBjaGlsZEZpbGUgb2YgZm9sZGVyLmNoaWxkRmlsZXMod29ya3NoZWV0RGF0YSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVJbnN0YW5jZSA9IEV4Y2VsRWxlbWVudHNGYWN0b3J5LmdldEV4Y2VsRmlsZShjaGlsZEZpbGUpO1xuICAgICAgICAgICAgZmlsZUluc3RhbmNlLndyaXRlRWxlbWVudCh6aXAsIHdvcmtzaGVldERhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGV4cG9ydERhdGFJbXBsZW1lbnRhdGlvbihkYXRhOiBhbnlbXSwgb3B0aW9uczogSWd4RXhjZWxFeHBvcnRlck9wdGlvbnMpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzVHJlZUdyaWQpIHtcbiAgICAgICAgICAgIGxldCBtYXhMZXZlbCA9IDA7XG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKHIpID0+IHtcbiAgICAgICAgICAgICAgICBtYXhMZXZlbCA9IE1hdGgubWF4KG1heExldmVsLCByLm9yaWdpbmFsUm93RGF0YS5sZXZlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChtYXhMZXZlbCA+IDcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignQ2FuIGNyZWF0ZSBhbiBvdXRsaW5lIG9mIHVwIHRvIGVpZ2h0IGxldmVscyEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdvcmtzaGVldERhdGEgPSBuZXcgV29ya3NoZWV0RGF0YShkYXRhLCBvcHRpb25zLCB0aGlzLl9pbmRleE9mTGFzdFBpbm5lZENvbHVtbiwgdGhpcy5fc29ydCwgdGhpcy5faXNUcmVlR3JpZCk7XG4gICAgICAgIHRoaXMuX3hsc3ggPSBuZXcgSlNaaXAoKTtcblxuICAgICAgICBjb25zdCByb290Rm9sZGVyID0gRXhjZWxFbGVtZW50c0ZhY3RvcnkuZ2V0RXhjZWxGb2xkZXIoRXhjZWxGb2xkZXJUeXBlcy5Sb290RXhjZWxGb2xkZXIpO1xuICAgICAgICBJZ3hFeGNlbEV4cG9ydGVyU2VydmljZS5wb3B1bGF0ZUZvbGRlcihyb290Rm9sZGVyLCB0aGlzLl94bHN4LCB3b3Jrc2hlZXREYXRhKTtcblxuICAgICAgICB0aGlzLl94bHN4LmdlbmVyYXRlQXN5bmMoSWd4RXhjZWxFeHBvcnRlclNlcnZpY2UuWklQX09QVElPTlMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zYXZlRmlsZShyZXN1bHQsIG9wdGlvbnMuZmlsZU5hbWUpO1xuXG4gICAgICAgICAgICB0aGlzLm9uRXhwb3J0RW5kZWQuZW1pdCh7IHhsc3g6IHRoaXMuX3hsc3ggfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2F2ZUZpbGUoZGF0YTogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbRXhwb3J0VXRpbGl0aWVzLnN0cmluZ1RvQXJyYXlCdWZmZXIoYXRvYihkYXRhKSldLCB7XG4gICAgICAgICAgICB0eXBlOiAnJ1xuICAgICAgICB9KTtcblxuICAgICAgICBFeHBvcnRVdGlsaXRpZXMuc2F2ZUJsb2JUb0ZpbGUoYmxvYiwgZmlsZU5hbWUpO1xuICAgIH1cbn1cbiJdfQ==