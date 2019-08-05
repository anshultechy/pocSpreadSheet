import { MapTileSource } from "./MapTileSource";
import { IList$1, Type } from "./type";
/**
 * @hidden
 */
export declare class OpenStreetMapTileSource extends MapTileSource {
    static $t: Type;
    private u;
    constructor();
    protected s(a: number, b: number, c: number, d: IList$1<any>): void;
    setTilePathUrl(a: string): void;
}