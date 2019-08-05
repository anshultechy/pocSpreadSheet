import { Base, Type } from "./type";
import { HeatTileGeneratorWorker } from "./HeatTileGeneratorWorker";
import { ITileWorkCompletedSink } from "./ITileWorkCompletedSink";
import { TileImageCreatedEventArgs } from "./TileImageCreatedEventArgs";
/**
 * @hidden
 */
export declare class HeatTileGeneratorWebWorker extends Base {
    static $t: Type;
    private static e;
    private static b;
    private static _postmessage;
    static postmessage: any;
    private static _yValues;
    private static _xValues;
    private static _values;
    static onmessage(args_: any): void;
    static start(): void;
}
/**
 * @hidden
 */
export declare class CompletedSinkImpl extends Base implements ITileWorkCompletedSink {
    static $t: Type;
    private a;
    constructor(a: HeatTileGeneratorWorker);
    onCompleted(a: TileImageCreatedEventArgs): void;
}