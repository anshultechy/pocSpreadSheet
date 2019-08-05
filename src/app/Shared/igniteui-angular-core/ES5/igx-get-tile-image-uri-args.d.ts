import { GetTileImageUriArgs as GetTileImageUriArgs_internal } from "./GetTileImageUriArgs";
import { Uri } from "./Uri";
/**
 * Event arguments for GetTileImageUri event
*/
export declare class GetTileImageUriArgs {
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: GetTileImageUriArgs_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    /**
     * Gets or sets the tile level.
    */
    tileLevel: number;
    /**
     * Gets or sets the tile's X position
    */
    tilePositionX: number;
    /**
     * Gets or sets the tile's Y position
    */
    tilePositionY: number;
    /**
     * Gets or sets the tile's image URI
    */
    tileImageUri: Uri;
}