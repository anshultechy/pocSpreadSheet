import { SeriesDescription } from "./SeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class ScatterTriangulationSeriesDescription extends SeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private bw;
    xMemberPath: string;
    private by;
    yMemberPath: string;
    private bv;
    xAxisRef: string;
    private bx;
    yAxisRef: string;
    private bs;
    triangleVertexMemberPath1: string;
    private bt;
    triangleVertexMemberPath2: string;
    private bu;
    triangleVertexMemberPath3: string;
}
