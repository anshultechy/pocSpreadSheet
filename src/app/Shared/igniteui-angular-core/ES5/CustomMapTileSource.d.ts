import { MapTileSource } from "./MapTileSource";
import { IList$1, Type } from "./type";
import { GetTileImageUriArgs } from "./GetTileImageUriArgs";
/**
 * @hidden
 */
export declare class CustomMapTileSource extends MapTileSource {
    static $t: Type;
    constructor(a: number, b: number, c: number, d: number, e: number);
    protected s(a: number, b: number, c: number, d: IList$1<any>): void;
    protected v(a: GetTileImageUriArgs): void;
    getTileImageUri: (sender: any, e: GetTileImageUriArgs) => void;
}
