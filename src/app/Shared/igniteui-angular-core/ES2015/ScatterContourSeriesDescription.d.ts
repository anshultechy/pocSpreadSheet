import { ScatterTriangulationSeriesDescription } from "./ScatterTriangulationSeriesDescription";
import { ValueBrushScaleDescription } from "./ValueBrushScaleDescription";
import { ContourValueResolverDescription } from "./ContourValueResolverDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class ScatterContourSeriesDescription extends ScatterTriangulationSeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private ca;
    valueMemberPath: string;
    private b8;
    fillScale: ValueBrushScaleDescription;
    private b6;
    valueResolver: ContourValueResolverDescription;
}
