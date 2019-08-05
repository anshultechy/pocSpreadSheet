import { IgRect } from './IgRect';
import { ShapefileConverter as ShapefileConverter_internal } from "./ShapefileConverter";
import { ShapeType } from "./ShapeType";
import { Header } from "./Header";
import { AsyncCompletedEventArgs } from './AsyncCompletedEventArgs';
import { EventEmitter } from '@angular/core';
import { ShapefileRecord } from './igx-shapefile-record';
/**
 * Class used to convert Shapefiles into CLR objects.
*/
export declare class ShapeDataSource {
    protected createImplementation(): ShapefileConverter_internal;
    protected _implementation: any;
    readonly i: ShapefileConverter_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    private _databaseSource;
    /**
     * Gets the string Uri path of the .dbf portion of the Shapefile
    */
    /**
     * Sets the string Uri path of the .dbf portion of the Shapefile
    */
    databaseSource: string;
    private _shapefileSource;
    /**
     * Gets the string Uri path of the .shp portion of the Shapefile
    */
    /**
     * Sets the string Uri path of the .shp portion of the Shapefile
    */
    shapefileSource: string;
    dataBind(): void;
    private _importCompleted;
    /**
     * Occurs when the Shapefile has been imported from both the ShapefileSource and DatabaseSource Uris.
    */
    readonly importCompleted: EventEmitter<{
        sender: any;
        args: AsyncCompletedEventArgs;
    }>;
    /**
    * Gets the point data.
    */
    getPointData(): ShapefileRecord[];
    /**
 * Gets the world bounding rectangle, as read from the header of the Shapefile.
*/
    worldRect: IgRect;
    /**
     * Gets the shape type, as read from the header of the Shapefile.
    */
    readonly shapeType: ShapeType;
    /**
     * Gets the header of the Shapefile.
    */
    shapeHeader: Header;
}
