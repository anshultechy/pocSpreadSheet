import { Base, Type } from "./type";
import { TileWorkSettings } from "./TileWorkSettings";
import { ITileWorkCompletedSink } from "./ITileWorkCompletedSink";
/**
 * @hidden
 */
export declare class HeatTileGeneratorWorker extends Base {
    static $t: Type;
    private f;
    private a;
    private n;
    private o;
    private p;
    private w;
    private static v;
    private static s;
    u: number;
    h: boolean;
    private r;
    readonly t: number;
    readonly g: TileWorkSettings;
    constructor(a: TileWorkSettings);
    doWork(): void;
    private x;
    private b;
    private d;
    private c;
    private q;
    private z;
    private static m;
    private i;
    private j;
    private k;
    private l;
    private _completedSink;
    completedSink: ITileWorkCompletedSink;
}