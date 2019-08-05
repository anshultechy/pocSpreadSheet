/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var IgxExcelExporterService = /** @class */ (function (_super) {
    tslib_1.__extends(IgxExcelExporterService, _super);
    function IgxExcelExporterService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * This event is emitted when the export process finishes.
         * ```typescript
         * this.exporterService.onExportEnded.subscribe((args: IExcelExportEndedEventArgs) => {
         * // put event handler code here
         * });
         * ```
         * \@memberof IgxExcelExporterService
         */
        _this.onExportEnded = new EventEmitter();
        return _this;
    }
    /**
     * @private
     * @param {?} folder
     * @param {?} zip
     * @param {?} worksheetData
     * @return {?}
     */
    IgxExcelExporterService.populateFolder = /**
     * @private
     * @param {?} folder
     * @param {?} zip
     * @param {?} worksheetData
     * @return {?}
     */
    function (folder, zip, worksheetData) {
        var e_1, _a, e_2, _b;
        try {
            for (var _c = tslib_1.__values(folder.childFolders(worksheetData)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var childFolder = _d.value;
                /** @type {?} */
                var folderIntance = ExcelElementsFactory.getExcelFolder(childFolder);
                /** @type {?} */
                var zipFolder = zip.folder(folderIntance.folderName);
                IgxExcelExporterService.populateFolder(folderIntance, zipFolder, worksheetData);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var _e = tslib_1.__values(folder.childFiles(worksheetData)), _f = _e.next(); !_f.done; _f = _e.next()) {
                var childFile = _f.value;
                /** @type {?} */
                var fileInstance = ExcelElementsFactory.getExcelFile(childFile);
                fileInstance.writeElement(zip, worksheetData);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @protected
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    IgxExcelExporterService.prototype.exportDataImplementation = /**
     * @protected
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (data, options) {
        var _this = this;
        if (this._isTreeGrid) {
            /** @type {?} */
            var maxLevel_1 = 0;
            data.forEach(function (r) {
                maxLevel_1 = Math.max(maxLevel_1, r.originalRowData.level);
            });
            if (maxLevel_1 > 7) {
                throw Error('Can create an outline of up to eight levels!');
            }
        }
        /** @type {?} */
        var worksheetData = new WorksheetData(data, options, this._indexOfLastPinnedColumn, this._sort, this._isTreeGrid);
        this._xlsx = new JSZip();
        /** @type {?} */
        var rootFolder = ExcelElementsFactory.getExcelFolder(ExcelFolderTypes.RootExcelFolder);
        IgxExcelExporterService.populateFolder(rootFolder, this._xlsx, worksheetData);
        this._xlsx.generateAsync(IgxExcelExporterService.ZIP_OPTIONS).then(function (result) {
            _this.saveFile(result, options.fileName);
            _this.onExportEnded.emit({ xlsx: _this._xlsx });
        });
    };
    /**
     * @private
     * @param {?} data
     * @param {?} fileName
     * @return {?}
     */
    IgxExcelExporterService.prototype.saveFile = /**
     * @private
     * @param {?} data
     * @param {?} fileName
     * @return {?}
     */
    function (data, fileName) {
        /** @type {?} */
        var blob = new Blob([ExportUtilities.stringToArrayBuffer(atob(data))], {
            type: ''
        });
        ExportUtilities.saveBlobToFile(blob, fileName);
    };
    IgxExcelExporterService.ZIP_OPTIONS = { compression: 'DEFLATE', type: 'base64' };
    IgxExcelExporterService.decorators = [
        { type: Injectable }
    ];
    IgxExcelExporterService.propDecorators = {
        onExportEnded: [{ type: Output }]
    };
    return IgxExcelExporterService;
}(IgxBaseExporter));
export { IgxExcelExporterService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtZXhwb3J0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4Y2VsL2V4Y2VsLWV4cG9ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxrQkFBa0IsQ0FBQztBQUUxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRWpELGdEQUVDOzs7SUFERywwQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QmhCO0lBQzZDLG1EQUFlO0lBRDVEO1FBQUEscUVBOERDOzs7Ozs7Ozs7O1FBOUNVLG1CQUFhLEdBQUcsSUFBSSxZQUFZLEVBQThCLENBQUM7O0lBOEMxRSxDQUFDOzs7Ozs7OztJQTVDa0Isc0NBQWM7Ozs7Ozs7SUFBN0IsVUFBOEIsTUFBb0IsRUFBRSxHQUFVLEVBQUUsYUFBNEI7OztZQUN4RixLQUEwQixJQUFBLEtBQUEsaUJBQUEsTUFBTSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBekQsSUFBTSxXQUFXLFdBQUE7O29CQUNaLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDOztvQkFDaEUsU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztnQkFDdEQsdUJBQXVCLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7YUFDbkY7Ozs7Ozs7Ozs7WUFFRCxLQUF3QixJQUFBLEtBQUEsaUJBQUEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBckQsSUFBTSxTQUFTLFdBQUE7O29CQUNWLFlBQVksR0FBRyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO2dCQUNqRSxZQUFZLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQzthQUNqRDs7Ozs7Ozs7O0lBQ0wsQ0FBQzs7Ozs7OztJQUVTLDBEQUF3Qjs7Ozs7O0lBQWxDLFVBQW1DLElBQVcsRUFBRSxPQUFnQztRQUFoRixpQkFzQkM7UUFyQkcsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFOztnQkFDZCxVQUFRLEdBQUcsQ0FBQztZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztnQkFDWCxVQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFRLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzRCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksVUFBUSxHQUFHLENBQUMsRUFBRTtnQkFDZCxNQUFNLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO2FBQy9EO1NBQ0o7O1lBRUssYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNuSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7O1lBRW5CLFVBQVUsR0FBRyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO1FBQ3hGLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztRQUU5RSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ3RFLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV4QyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7Ozs7SUFFTywwQ0FBUTs7Ozs7O0lBQWhCLFVBQWlCLElBQVksRUFBRSxRQUFnQjs7WUFDckMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDckUsSUFBSSxFQUFFLEVBQUU7U0FDWCxDQUFDO1FBRUYsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQTFEYyxtQ0FBVyxHQUFHLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7O2dCQUgzRSxVQUFVOzs7Z0NBZU4sTUFBTTs7SUErQ1gsOEJBQUM7Q0FBQSxBQTlERCxDQUM2QyxlQUFlLEdBNkQzRDtTQTdEWSx1QkFBdUI7Ozs7OztJQUVoQyxvQ0FBd0U7Ozs7O0lBQ3hFLHdDQUFxQjs7Ozs7Ozs7Ozs7SUFXckIsZ0RBQ3NFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgSlNaaXAgZnJvbSAnanN6aXAvZGlzdC9qc3ppcCc7XG5cbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFeGNlbEVsZW1lbnRzRmFjdG9yeSB9IGZyb20gJy4vZXhjZWwtZWxlbWVudHMtZmFjdG9yeSc7XG5pbXBvcnQgeyBFeGNlbEZvbGRlclR5cGVzIH0gZnJvbSAnLi9leGNlbC1lbnVtcyc7XG5pbXBvcnQgeyBJZ3hFeGNlbEV4cG9ydGVyT3B0aW9ucyB9IGZyb20gJy4vZXhjZWwtZXhwb3J0ZXItb3B0aW9ucyc7XG5pbXBvcnQgeyBJRXhjZWxGb2xkZXIgfSBmcm9tICcuL2V4Y2VsLWludGVyZmFjZXMnO1xuaW1wb3J0IHsgSWd4QmFzZUV4cG9ydGVyIH0gZnJvbSAnLi4vZXhwb3J0ZXItY29tbW9uL2Jhc2UtZXhwb3J0LXNlcnZpY2UnO1xuaW1wb3J0IHsgRXhwb3J0VXRpbGl0aWVzIH0gZnJvbSAnLi4vZXhwb3J0ZXItY29tbW9uL2V4cG9ydC11dGlsaXRpZXMnO1xuaW1wb3J0IHsgV29ya3NoZWV0RGF0YSB9IGZyb20gJy4vd29ya3NoZWV0LWRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElFeGNlbEV4cG9ydEVuZGVkRXZlbnRBcmdzIHtcbiAgICB4bHN4OiBKU1ppcDtcbn1cblxuLyoqXG4gKiAqKklnbml0ZSBVSSBmb3IgQW5ndWxhciBFeGNlbCBFeHBvcnRlciBTZXJ2aWNlKiogLVxuICogW0RvY3VtZW50YXRpb25dKGh0dHBzOi8vd3d3LmluZnJhZ2lzdGljcy5jb20vcHJvZHVjdHMvaWduaXRlLXVpLWFuZ3VsYXIvYW5ndWxhci9jb21wb25lbnRzL2V4cG9ydGVyX2V4Y2VsLmh0bWwpXG4gKlxuICogVGhlIElnbml0ZSBVSSBmb3IgQW5ndWxhciBFeGNlbCBFeHBvcnRlciBzZXJ2aWNlIGNhbiBleHBvcnQgZGF0YSBpbiBNaWNyb3NvZnTCriBFeGNlbMKuIGZvcm1hdCBmcm9tIGJvdGggcmF3IGRhdGFcbiAqIChhcnJheSkgb3IgZnJvbSBhbiBgSWd4R3JpZGAuXG4gKlxuICogRXhhbXBsZTpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIHB1YmxpYyBsb2NhbERhdGEgPSBbXG4gKiAgIHsgTmFtZTogXCJFcmljIFJpZGxleVwiLCBBZ2U6IFwiMjZcIiB9LFxuICogICB7IE5hbWU6IFwiQWxhbmlzIEJyb29rXCIsIEFnZTogXCIyMlwiIH0sXG4gKiAgIHsgTmFtZTogXCJKb25hdGhhbiBNb3JyaXNcIiwgQWdlOiBcIjIzXCIgfVxuICogXTtcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGV4Y2VsRXhwb3J0U2VydmljZTogSWd4RXhjZWxFeHBvcnRlclNlcnZpY2UpIHtcbiAqIH1cbiAqXG4gKiB0aGlzLmV4Y2VsRXhwb3J0U2VydmljZS5leHBvcnREYXRhKHRoaXMubG9jYWxEYXRhLCBuZXcgSWd4RXhjZWxFeHBvcnRlck9wdGlvbnMoXCJGaWxlTmFtZVwiKSk7XG4gKiBgYGBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIElneEV4Y2VsRXhwb3J0ZXJTZXJ2aWNlIGV4dGVuZHMgSWd4QmFzZUV4cG9ydGVyIHtcblxuICAgIHByaXZhdGUgc3RhdGljIFpJUF9PUFRJT05TID0geyBjb21wcmVzc2lvbjogJ0RFRkxBVEUnLCB0eXBlOiAnYmFzZTY0JyB9O1xuICAgIHByaXZhdGUgX3hsc3g6IEpTWmlwO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyBlbWl0dGVkIHdoZW4gdGhlIGV4cG9ydCBwcm9jZXNzIGZpbmlzaGVzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmV4cG9ydGVyU2VydmljZS5vbkV4cG9ydEVuZGVkLnN1YnNjcmliZSgoYXJnczogSUV4Y2VsRXhwb3J0RW5kZWRFdmVudEFyZ3MpID0+IHtcbiAgICAgKiAvLyBwdXQgZXZlbnQgaGFuZGxlciBjb2RlIGhlcmVcbiAgICAgKiB9KTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4RXhjZWxFeHBvcnRlclNlcnZpY2VcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25FeHBvcnRFbmRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SUV4Y2VsRXhwb3J0RW5kZWRFdmVudEFyZ3M+KCk7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBwb3B1bGF0ZUZvbGRlcihmb2xkZXI6IElFeGNlbEZvbGRlciwgemlwOiBKU1ppcCwgd29ya3NoZWV0RGF0YTogV29ya3NoZWV0RGF0YSk6IGFueSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGRGb2xkZXIgb2YgZm9sZGVyLmNoaWxkRm9sZGVycyh3b3Jrc2hlZXREYXRhKSkge1xuICAgICAgICAgICAgY29uc3QgZm9sZGVySW50YW5jZSA9IEV4Y2VsRWxlbWVudHNGYWN0b3J5LmdldEV4Y2VsRm9sZGVyKGNoaWxkRm9sZGVyKTtcbiAgICAgICAgICAgIGNvbnN0IHppcEZvbGRlciA9IHppcC5mb2xkZXIoZm9sZGVySW50YW5jZS5mb2xkZXJOYW1lKTtcbiAgICAgICAgICAgIElneEV4Y2VsRXhwb3J0ZXJTZXJ2aWNlLnBvcHVsYXRlRm9sZGVyKGZvbGRlckludGFuY2UsIHppcEZvbGRlciwgd29ya3NoZWV0RGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkRmlsZSBvZiBmb2xkZXIuY2hpbGRGaWxlcyh3b3Jrc2hlZXREYXRhKSkge1xuICAgICAgICAgICAgY29uc3QgZmlsZUluc3RhbmNlID0gRXhjZWxFbGVtZW50c0ZhY3RvcnkuZ2V0RXhjZWxGaWxlKGNoaWxkRmlsZSk7XG4gICAgICAgICAgICBmaWxlSW5zdGFuY2Uud3JpdGVFbGVtZW50KHppcCwgd29ya3NoZWV0RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZXhwb3J0RGF0YUltcGxlbWVudGF0aW9uKGRhdGE6IGFueVtdLCBvcHRpb25zOiBJZ3hFeGNlbEV4cG9ydGVyT3B0aW9ucyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5faXNUcmVlR3JpZCkge1xuICAgICAgICAgICAgbGV0IG1heExldmVsID0gMDtcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgocikgPT4ge1xuICAgICAgICAgICAgICAgIG1heExldmVsID0gTWF0aC5tYXgobWF4TGV2ZWwsIHIub3JpZ2luYWxSb3dEYXRhLmxldmVsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKG1heExldmVsID4gNykge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdDYW4gY3JlYXRlIGFuIG91dGxpbmUgb2YgdXAgdG8gZWlnaHQgbGV2ZWxzIScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd29ya3NoZWV0RGF0YSA9IG5ldyBXb3Jrc2hlZXREYXRhKGRhdGEsIG9wdGlvbnMsIHRoaXMuX2luZGV4T2ZMYXN0UGlubmVkQ29sdW1uLCB0aGlzLl9zb3J0LCB0aGlzLl9pc1RyZWVHcmlkKTtcbiAgICAgICAgdGhpcy5feGxzeCA9IG5ldyBKU1ppcCgpO1xuXG4gICAgICAgIGNvbnN0IHJvb3RGb2xkZXIgPSBFeGNlbEVsZW1lbnRzRmFjdG9yeS5nZXRFeGNlbEZvbGRlcihFeGNlbEZvbGRlclR5cGVzLlJvb3RFeGNlbEZvbGRlcik7XG4gICAgICAgIElneEV4Y2VsRXhwb3J0ZXJTZXJ2aWNlLnBvcHVsYXRlRm9sZGVyKHJvb3RGb2xkZXIsIHRoaXMuX3hsc3gsIHdvcmtzaGVldERhdGEpO1xuXG4gICAgICAgIHRoaXMuX3hsc3guZ2VuZXJhdGVBc3luYyhJZ3hFeGNlbEV4cG9ydGVyU2VydmljZS5aSVBfT1BUSU9OUykudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNhdmVGaWxlKHJlc3VsdCwgb3B0aW9ucy5maWxlTmFtZSk7XG5cbiAgICAgICAgICAgIHRoaXMub25FeHBvcnRFbmRlZC5lbWl0KHsgeGxzeDogdGhpcy5feGxzeCB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzYXZlRmlsZShkYXRhOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtFeHBvcnRVdGlsaXRpZXMuc3RyaW5nVG9BcnJheUJ1ZmZlcihhdG9iKGRhdGEpKV0sIHtcbiAgICAgICAgICAgIHR5cGU6ICcnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIEV4cG9ydFV0aWxpdGllcy5zYXZlQmxvYlRvRmlsZShibG9iLCBmaWxlTmFtZSk7XG4gICAgfVxufVxuIl19