import { XYChartDescription } from "./XYChartDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class CategoryChartDescription extends XYChartDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private hx;
    transitionInDuration: number;
    private h3;
    transitionInEasingFunctionRef: string;
    private h1;
    chartType: string;
    private h2;
    markerCollisionAvoidance: string;
    private g9;
    isTransitionInEnabled: boolean;
    private h4;
    transitionInMode: string;
    private h5;
    transitionInSpeedType: string;
    private hi;
    xAxisInterval: number;
    private hj;
    xAxisMinorInterval: number;
    private hh;
    xAxisGap: number;
    private hk;
    xAxisOverlap: number;
    private hl;
    yAxisInterval: number;
    private hb;
    yAxisIsLogarithmic: boolean;
    private hy;
    yAxisLogarithmBase: number;
    private hn;
    yAxisMinimumValue: number;
    private hm;
    yAxisMaximumValue: number;
    private ho;
    yAxisMinorInterval: number;
    private g3;
    negativeBrushes: string[];
    private g4;
    negativeOutlines: string[];
    private ha;
    yAxisAbbreviateLargeNumbers: boolean;
    private g7;
    isCategoryHighlightingEnabled: boolean;
    private g8;
    isItemHighlightingEnabled: boolean;
}
