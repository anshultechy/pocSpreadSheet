import { IgRect } from './IgRect';
import { RectChangedEventArgs as RectChangedEventArgs_internal } from "./RectChangedEventArgs";
/**
 * Provides data for rectangle changed events.
*/
export declare class RectChangedEventArgs {
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: RectChangedEventArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    /**
     * Gets the rectangle before the change.
    */
    oldRect: IgRect;
    /**
     * Gets the new rectangle.
    */
    newRect: IgRect;
}
