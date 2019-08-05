import { MapTileSource } from "./MapTileSource";
import { DependencyProperty } from "./DependencyProperty";
import { ObservableCollection$1 } from "./ObservableCollection$1";
import { IList$1, Type } from "./type";
/**
 * @hidden
 */
export declare class BingMapsTileSource extends MapTileSource {
    static $t: Type;
    constructor(a: number);
    constructor(a: number, b: string, c: ObservableCollection$1<string>);
    constructor(a: number, ..._rest: any[]);
    static readonly tilePathProperty: DependencyProperty;
    tilePath: string;
    static readonly subDomainsProperty: DependencyProperty;
    subDomains: ObservableCollection$1<string>;
    private ab;
    private w;
    static readonly cultureNameProperty: DependencyProperty;
    cultureName: string;
    protected s(a: number, b: number, c: number, d: IList$1<any>): void;
    private u;
    private y;
    private static aa;
}
