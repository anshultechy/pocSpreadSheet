import { SeriesViewerDescription } from "./SeriesViewerDescription";
import { AxisDescription } from "./AxisDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class DataChartDescription extends SeriesViewerDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private eb;
    isSquare: boolean;
    private en;
    windowScaleHorizontal: number;
    private eo;
    windowScaleVertical: number;
    private eh;
    actualWindowScaleHorizontal: number;
    private ei;
    actualWindowScaleVertical: number;
    private ea;
    isHorizontalZoomEnabled: boolean;
    private ec;
    isVerticalZoomEnabled: boolean;
    private e0;
    gridMode: string;
    private d9;
    alignsGridLinesToPixels: boolean;
    private d0;
    brushes: string[];
    private d1;
    markerBrushes: string[];
    private d3;
    outlines: string[];
    private d2;
    markerOutlines: string[];
    private ez;
    defaultAxisStroke: string;
    private ex;
    defaultAxisMajorStroke: string;
    private ey;
    defaultAxisMinorStroke: string;
    private ek;
    plotAreaMarginLeft: number;
    private em;
    plotAreaMarginTop: number;
    private el;
    plotAreaMarginRight: number;
    private ej;
    plotAreaMarginBottom: number;
    private dz;
    axes: AxisDescription[];
    private e2;
    width: string;
    private e1;
    height: string;
}
