import { DataContext as DataContext_internal } from "./DataContext";
export declare class DataContext {
    protected createImplementation(): DataContext_internal;
    protected _implementation: any;
    readonly i: DataContext_internal;
    private onImplementationCreated;
    constructor();
    series: any;
    /**
 * Gets the item that is in context.
*/
    item: any;
    /**
     * Gets the actual resolved brush in use for the item that is in context.
    */
    actualItemBrush: string;
    /**
     * Gets the outline in use for the item in context.
    */
    outline: string;
    /**
     * Gets the label in use for the item in context, if available.
    */
    itemLabel: any;
    /**
     * Gets the potential brush in usage for the item in context.
    */
    itemBrush: string;
    /**
     * Gets the thickness of the item in context.
    */
    thickness: number;
    /**
     * Gets the legend label to use for the item in context, if available.
    */
    legendLabel: any;
}
