import { SeriesDescription } from "./SeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class ShapeSeriesBaseDescription extends SeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private bu;
    shapeMemberPath: string;
    private bv;
    xAxisRef: string;
    private bw;
    yAxisRef: string;
    private bs;
    shapeFilterResolution: number;
}
