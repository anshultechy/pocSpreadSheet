import { PipeTransform } from '@angular/core';
import { GridBaseAPIService } from '../api.service';
import { IgxGridBaseComponent, GridSummaryPosition, GridSummaryCalculationMode, IGridDataBindable } from '../grid-base.component';
import { IGroupByResult } from '../../data-operations/grouping-result.interface';
/** @hidden */
export declare class IgxGridSummaryPipe implements PipeTransform {
    private gridAPI;
    constructor(gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>);
    transform(collection: IGroupByResult, hasSummary: boolean, summaryCalculationMode: GridSummaryCalculationMode, summaryPosition: GridSummaryPosition, id: string, pipeTrigger: number, summaryPipeTrigger: number): any[];
    private addSummaryRows;
    private removeDeletedRecord;
}