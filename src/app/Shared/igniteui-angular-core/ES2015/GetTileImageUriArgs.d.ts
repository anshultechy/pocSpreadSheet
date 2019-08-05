import { EventArgs, Type } from "./type";
import { Uri } from "./Uri";
/**
 * @hidden
 */
export declare class GetTileImageUriArgs extends EventArgs {
    static $t: Type;
    constructor(a: number, b: number, c: number);
    private _tileLevel;
    tileLevel: number;
    private _tilePositionX;
    tilePositionX: number;
    private _tilePositionY;
    tilePositionY: number;
    private _tileImageUri;
    tileImageUri: Uri;
}