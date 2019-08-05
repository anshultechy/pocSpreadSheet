import { FilterExpressionCollection as FilterExpressionCollection_internal } from "./FilterExpressionCollection";
import { IFilterExpression } from "./IFilterExpression";
/**
 * Represents a colleciton of filter expressions.
*/
export declare class FilterExpressionCollection {
    protected createImplementation(): FilterExpressionCollection_internal;
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: FilterExpressionCollection_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    syncTarget: FilterExpressionCollection;
    onChanged: () => void;
    add(item: IFilterExpression): boolean;
    insert(index: number, item: IFilterExpression): void;
    clear(): void;
    get(index: number): IFilterExpression;
    indexOf(item: IFilterExpression): number;
    remove(item: IFilterExpression): boolean;
    removeAt(index: number): IFilterExpression;
    set(index: number, value: IFilterExpression): IFilterExpression;
    size(): number;
}
