import { Point } from './type';
import { ShapefileRecord as ShapefileRecord_internal } from "./ShapefileRecord";
import { ShapeType } from "./ShapeType";
/**
 * Represents a record of data from a Shapefile (.shp and .dbf).
*/
export declare class ShapefileRecord {
    protected createImplementation(): ShapefileRecord_internal;
    protected _implementation: any;
    readonly i: ShapefileRecord_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    /**
     * Gets the shape type, as read from the header of the Shapefile.
    */
    readonly shapeType: ShapeType;
    /**
     * Gets an array of field names and values for this record
    */
    readonly fieldsNames: string[];
    /**
     * Gets an arry of field types and values for this record
    */
    readonly fieldsTypes: string[];
    /**
     * Gets an array of arrays of points for this record
    */
    readonly points: Point[][];
    fieldValues: any;
}
