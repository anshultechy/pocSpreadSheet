import { ScatterTriangulationSeriesDescription } from "./ScatterTriangulationSeriesDescription";
import { ColorScaleDescription } from "./ColorScaleDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class ScatterAreaSeriesDescription extends ScatterTriangulationSeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private b6;
    colorScale: ColorScaleDescription;
    private b8;
    colorMemberPath: string;
}
