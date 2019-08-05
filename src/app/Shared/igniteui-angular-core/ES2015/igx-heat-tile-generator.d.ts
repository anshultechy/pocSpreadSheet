import { HeatTileGenerator as HeatTileGenerator_internal } from "./HeatTileGenerator";
import { TileImageCreatedEventArgs } from './TileImageCreatedEventArgs';
import { TileImageZoomChangingEventArgs } from './TileImageZoomChangingEventArgs';
import { ITileGenerator } from './ITileGenerator';
export declare class HeatTileGenerator implements ITileGenerator {
    protected createImplementation(): HeatTileGenerator_internal;
    protected _implementation: any;
    /**
     * @hidden
     */
    readonly i: HeatTileGenerator_internal;
    private onImplementationCreated;
    constructor();
    protected _provideImplementation(i: any): void;
    scaleColors: string[];
    yValues: number[];
    xValues: number[];
    values: number[];
    minimumColor: string;
    maximumColor: string;
    scaleColorOffsets: number[];
    blurRadius: number;
    maxBlurRadius: number;
    useBlurRadiusAdjustedForZoom: boolean;
    useGlobalMinMax: boolean;
    useGlobalMinMaxAdjustedForZoom: boolean;
    minimumValue: number;
    maximumValue: number;
    logarithmBase: number;
    useLogarithmicScale: boolean;
    useWebWorkers: boolean;
    webWorkerScriptPath: string;
    webWorkerInstance: any;
    destroy(): void;
    getTile(z: number, x: number, y: number, onCreated: (sender: any, eventArgs: TileImageCreatedEventArgs) => void, onCreating: (sender: any, eventArgs: TileImageCreatedEventArgs) => void, zoomChanging: (sender: any, eventArgs: TileImageZoomChangingEventArgs) => void, existingImage: HTMLImageElement): void;
    cancelTile(z: number, x: number, y: number): void;
}
