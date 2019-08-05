import { Type } from "./type";
import { Brush } from "./Brush";
/**
 * @hidden
 */
export interface ILegendContext {
    readonly itemLabel: any;
    readonly legendLabel: any;
    readonly series: any;
    readonly itemBrush: Brush;
    readonly actualItemBrush: Brush;
    readonly item: any;
}
/**
 * @hidden
 */
export declare let ILegendContext_$type: Type;
