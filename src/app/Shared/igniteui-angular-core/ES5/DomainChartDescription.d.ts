import { Description } from "./Description";
import { RectDescription } from "./RectDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class DomainChartDescription extends Description {
    static $t: Type;
    protected get_type(): string;
    readonly type: string;
    constructor();
    private at;
    pixelScalingRatio: number;
    private a2;
    titleLeftMargin: number;
    private a3;
    titleRightMargin: number;
    private a4;
    titleTopMargin: number;
    private a1;
    titleBottomMargin: number;
    private ax;
    subtitleLeftMargin: number;
    private az;
    subtitleTopMargin: number;
    private ay;
    subtitleRightMargin: number;
    private aw;
    subtitleBottomMargin: number;
    private b9;
    subtitleTextColor: string;
    private cc;
    titleTextColor: string;
    private as;
    leftMargin: number;
    private a5;
    topMargin: number;
    private av;
    rightMargin: number;
    private ar;
    bottomMargin: number;
    private bo;
    transitionDuration: number;
    private cf;
    transitionEasingFunctionRef: string;
    private ca;
    subtitleTextStyle: string;
    private cd;
    titleTextStyle: string;
    private h;
    includedProperties: string[];
    private g;
    excludedProperties: string[];
    private f;
    brushes: string[];
    private l;
    outlines: string[];
    private ae;
    isHorizontalZoomEnabled: boolean;
    private ag;
    isVerticalZoomEnabled: boolean;
    private af;
    isSeriesHighlightingEnabled: boolean;
    private v;
    windowRect: RectDescription;
    private by;
    chartTitle: string;
    private b7;
    subtitle: string;
    private cb;
    titleAlignment: string;
    private b8;
    subtitleAlignment: string;
    private ch;
    unknownValuePlotting: string;
    private au;
    resolution: number;
    private a0;
    thickness: number;
    private k;
    markerTypes: string[];
    private i;
    markerBrushes: string[];
    private j;
    markerOutlines: string[];
    private bn;
    markerMaxCount: number;
    private y;
    animateSeriesWhenAxisRangeChanges: boolean;
    private m;
    trendLineBrushes: string[];
    private cg;
    trendLineType: string;
    private a6;
    trendLineThickness: number;
    private x;
    alignsGridLinesToPixels: boolean;
    private bp;
    trendLinePeriod: number;
    private ce;
    toolTipType: string;
    private bz;
    crosshairsDisplayMode: string;
    private ac;
    crosshairsSnapToData: boolean;
    private ab;
    crosshairsAnnotationEnabled: boolean;
    private ad;
    finalValueAnnotationsVisible: boolean;
    private aa;
    calloutsVisible: boolean;
    private z;
    calloutStyleUpdatingEventEnabled: boolean;
    private bw;
    calloutsXMemberPath: string;
    private bx;
    calloutsYMemberPath: string;
    private bu;
    calloutsLabelMemberPath: string;
    private bt;
    calloutsContentMemberPath: string;
    private b0;
    SeriesAddedRef: string;
    private b6;
    SeriesRemovedRef: string;
    private b2;
    SeriesPointerEnterRef: string;
    private b3;
    SeriesPointerLeaveRef: string;
    private b4;
    SeriesPointerMoveRef: string;
    private b1;
    SeriesPointerDownRef: string;
    private b5;
    SeriesPointerUpRef: string;
    private bv;
    CalloutStyleUpdatingRef: string;
}
