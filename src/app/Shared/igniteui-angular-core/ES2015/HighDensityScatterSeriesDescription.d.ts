import { SeriesDescription } from "./SeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class HighDensityScatterSeriesDescription extends SeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private b6;
    xAxisRef: string;
    private b8;
    yAxisRef: string;
    private b7;
    xMemberPath: string;
    private b9;
    yMemberPath: string;
    private bt;
    useBruteForce: boolean;
    private bs;
    progressiveLoad: boolean;
    private bx;
    heatMinimum: number;
    private bw;
    heatMaximum: number;
    private b5;
    heatMinimumColor: string;
    private b4;
    heatMaximumColor: string;
    private b0;
    pointExtent: number;
    private b1;
    progressiveStatus: number;
}
