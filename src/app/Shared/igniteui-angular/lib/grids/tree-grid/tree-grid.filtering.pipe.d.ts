import { PipeTransform } from '@angular/core';
import { GridBaseAPIService } from '../api.service';
import { IFilteringExpressionsTree } from '../../data-operations/filtering-expressions-tree';
import { BaseFilteringStrategy } from '../../data-operations/filtering-strategy';
import { ITreeGridRecord } from './tree-grid.interfaces';
import { IgxGridBaseComponent, IGridDataBindable } from '../grid';
/** @hidden */
export declare class TreeGridFilteringStrategy extends BaseFilteringStrategy {
    filter(data: ITreeGridRecord[], expressionsTree: IFilteringExpressionsTree): ITreeGridRecord[];
    private filterImpl;
    protected getFieldValue(rec: object, fieldName: string): any;
}
/** @hidden */
export declare class IgxTreeGridFilteringPipe implements PipeTransform {
    private gridAPI;
    constructor(gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>);
    transform(hierarchyData: ITreeGridRecord[], expressionsTree: IFilteringExpressionsTree, id: string, pipeTrigger: number): ITreeGridRecord[];
    private resetFilteredOutProperty;
    private expandAllRecursive;
    private updateNonProcessedRecord;
    private filter;
}