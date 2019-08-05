import { TriangulationStatusEventArgs as TriangulationStatusEventArgs_internal } from "./TriangulationStatusEventArgs";
export declare class TriangulationStatusEventArgs {
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: TriangulationStatusEventArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    /**
     * The current status from 0 to 100 of the progressive triangulation.
    */
    currentStatus: number;
}