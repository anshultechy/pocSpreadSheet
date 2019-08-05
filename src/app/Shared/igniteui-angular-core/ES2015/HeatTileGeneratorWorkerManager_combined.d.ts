import { Base, Type } from "./type";
import { TileWorkSettings } from "./TileWorkSettings";
import { TileImageCreatedEventArgs } from "./TileImageCreatedEventArgs";
import { ITileWorkCompletedSink } from "./ITileWorkCompletedSink";
/**
 * @hidden
 */
export declare class HeatTileGeneratorWorkerManager extends Base {
    static $t: Type;
    constructor();
    private b;
    e: boolean;
    private o;
    p: string;
    private k;
    n: any;
    private _supportsTransferable;
    private d;
    private _worker;
    private a;
    private u;
    private v;
    private z;
    private x;
    private toDoubleArray;
    private j;
    private g;
    private h;
    private r;
    private t;
    y(a: TileWorkSettings, b: (sender: any, eventArgs: TileImageCreatedEventArgs) => void, c: (sender: any, eventArgs: TileImageCreatedEventArgs) => void): void;
    private i;
    private f;
    private aa;
    private q;
    w(): void;
    s(a: number, b: number, c: number): void;
}
/**
 * @hidden
 */
export declare class TileWorkCompletedSink extends Base implements ITileWorkCompletedSink {
    static $t: Type;
    private a;
    private b;
    constructor(a: HeatTileGeneratorWorkerManager, b: (sender: any, eventArgs: TileImageCreatedEventArgs) => void);
    onCompleted(a: TileImageCreatedEventArgs): void;
}