import { PipeTransform } from '@angular/core';
import { IGroupByExpandState } from '../../data-operations/groupby-expand-state.interface';
import { IGroupByResult } from '../../data-operations/grouping-result.interface';
import { IFilteringExpressionsTree } from '../../data-operations/filtering-expressions-tree';
import { ISortingExpression } from '../../data-operations/sorting-expression.interface';
import { IGroupingExpression } from '../../data-operations/grouping-expression.interface';
import { GridBaseAPIService } from '../api.service';
import { IgxGridBaseComponent, IGridDataBindable } from '../grid-base.component';
/**
 *@hidden
 */
export declare class IgxGridSortingPipe implements PipeTransform {
    private gridAPI;
    constructor(gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>);
    transform(collection: any[], expressions: ISortingExpression[], id: string, pipeTrigger: number): any[];
}
/**
 *@hidden
 */
export declare class IgxGridGroupingPipe implements PipeTransform {
    private gridAPI;
    constructor(gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>);
    transform(collection: any[], expression: IGroupingExpression | IGroupingExpression[], expansion: IGroupByExpandState | IGroupByExpandState[], defaultExpanded: boolean, id: string, groupsRecords: any[], pipeTrigger: number): IGroupByResult;
}
/**
 *@hidden
 */
export declare class IgxGridPagingPipe implements PipeTransform {
    private gridAPI;
    constructor(gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>);
    transform(collection: IGroupByResult, page: number, perPage: number, id: string, pipeTrigger: number): IGroupByResult;
}
/**
 *@hidden
 */
export declare class IgxGridFilteringPipe implements PipeTransform {
    private gridAPI;
    constructor(gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>);
    transform(collection: any[], expressionsTree: IFilteringExpressionsTree, id: string, pipeTrigger: number): any[];
}
