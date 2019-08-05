import { PipeTransform } from '@angular/core';
import { GridBaseAPIService } from './api.service';
import { IgxGridBaseComponent, IGridDataBindable } from './grid-base.component';
export declare class IgxGridCellStylesPipe implements PipeTransform {
    transform(cssClasses: any, _value: any, data: any, field: string): string;
}
/**
 * @hidden
 * @internal
 */
export declare class IgxGridNotGroupedPipe implements PipeTransform {
    transform(value: any[]): any[];
}
export declare class IgxGridTopLevelColumns implements PipeTransform {
    transform(value: any[]): any[];
}
/**
 *@hidden
 */
export declare class IgxGridFilterConditionPipe implements PipeTransform {
    transform(value: string): string;
}
/** @hidden */
export declare class IgxGridTransactionPipe implements PipeTransform {
    private gridAPI;
    constructor(gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>);
    transform(collection: any[], id: string, pipeTrigger: number): any[];
}
/** @hidden */
export declare class IgxGridPaginatorOptionsPipe implements PipeTransform {
    transform(values: Array<number>): number[];
}