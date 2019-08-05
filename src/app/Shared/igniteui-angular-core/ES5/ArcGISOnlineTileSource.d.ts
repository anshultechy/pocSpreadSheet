import { MapTileSource } from "./MapTileSource";
import { DependencyProperty } from "./DependencyProperty";
import { IList$1, Type } from "./type";
/**
 * @hidden
 */
export declare class ArcGISOnlineTileSource extends MapTileSource {
    static $t: Type;
    constructor();
    static readonly mapServerUriProperty: DependencyProperty;
    mapServerUri: string;
    static readonly isMapPublicProperty: DependencyProperty;
    isMapPublic: boolean;
    static readonly levelOfDetailProperty: DependencyProperty;
    levelOfDetail: number;
    static readonly userTokenProperty: DependencyProperty;
    userToken: string;
    protected s(a: number, b: number, c: number, d: IList$1<any>): void;
    private static y;
}