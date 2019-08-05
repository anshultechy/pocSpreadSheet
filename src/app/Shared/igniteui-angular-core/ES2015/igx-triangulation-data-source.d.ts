import { ItfConverter as ItfConverter_internal } from "./ItfConverter";
import { AsyncCompletedEventArgs } from './AsyncCompletedEventArgs';
import { TriangulationSourcePointRecord } from './TriangulationSourcePointRecord';
import { List$1 } from './List$1';
import { Triangle } from './Triangle';
/**
 * Class for converting Itf files into enumerable triangulations.
*/
export declare class TriangulationDataSource {
    protected createImplementation(): ItfConverter_internal;
    protected _implementation: any;
    readonly i: ItfConverter_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    protected _zoneRunner: (act: () => void) => void;
    protected _runInZone(act: () => void): void;
    /**
     * Gets the string path specifying the location of the Itf file.
    */
    /**
     * Sets the string path specifying the location of the Itf file.
    */
    source: string;
    private _importCompleted;
    private _importCompleted_wrapped;
    /**
     * Event raised when the import operation has completed
    */
    importCompleted: (s: any, e: AsyncCompletedEventArgs) => void;
    /**
    * Gets the point data.
    */
    getPointData(): List$1<TriangulationSourcePointRecord>;
    /**
    * Gets the triangle data.
    */
    getTriangleData(): List$1<Triangle>;
}
