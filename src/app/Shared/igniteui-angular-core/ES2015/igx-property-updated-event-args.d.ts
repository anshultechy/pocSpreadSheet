import { PropertyUpdatedEventArgs as PropertyUpdatedEventArgs_internal } from "./PropertyUpdatedEventArgs";
/**
 * EventArgs class for property updated events.
*/
export declare class PropertyUpdatedEventArgs {
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: PropertyUpdatedEventArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    /**
     * Name of the property being updated.
    */
    propertyName: string;
    /**
     * Old or previous value of the property being updated.
    */
    oldValue: any;
    /**
     * New or current value of the property being updated.
    */
    newValue: any;
}