import { Description } from "./Description";
import { PointDescription } from "./PointDescription";
import { RectDescription } from "./RectDescription";
import { SeriesDescription } from "./SeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class SeriesViewerDescription extends Description {
    static $t: Type;
    protected get_type(): string;
    readonly type: string;
    constructor();
    private h;
    crosshairPoint: PointDescription;
    private r;
    animateSeriesWhenAxisRangeChanges: boolean;
    private k;
    effectiveViewport: RectDescription;
    private m;
    windowRect: RectDescription;
    private w;
    useTiledZooming: boolean;
    private v;
    preferHigherResolutionTiles: boolean;
    private bs;
    zoomTileCacheSize: number;
    private br;
    highlightingTransitionDuration: number;
    private t;
    isPagePanningAllowed: boolean;
    private bz;
    contentHitTestMode: string;
    private bv;
    actualContentHitTestMode: string;
    private u;
    isSurfaceInteractionDisabled: boolean;
    private cv;
    windowResponse: string;
    private a1;
    windowRectMinWidth: number;
    private b6;
    overviewPlusDetailPaneVisibility: string;
    private b0;
    crosshairVisibility: string;
    private b8;
    plotAreaBackground: string;
    private b1;
    defaultInteraction: string;
    private b9;
    rightButtonDefaultInteraction: string;
    private b2;
    dragModifier: string;
    private b7;
    panModifier: string;
    private l;
    previewRect: RectDescription;
    private az;
    windowPositionHorizontal: number;
    private a0;
    windowPositionVertical: number;
    private by;
    chartTitle: string;
    private cr;
    titleHorizontalAlignment: string;
    private cl;
    subtitleHorizontalAlignment: string;
    private ct;
    titleTextStyle: string;
    private cn;
    subtitleTextStyle: string;
    private cs;
    titleTextColor: string;
    private cm;
    subtitleTextColor: string;
    private ax;
    titleTopMargin: number;
    private av;
    titleLeftMargin: number;
    private aw;
    titleRightMargin: number;
    private at;
    titleBottomMargin: number;
    private as;
    subtitleTopMargin: number;
    private aq;
    subtitleLeftMargin: number;
    private ar;
    subtitleRightMargin: number;
    private ao;
    subtitleBottomMargin: number;
    private ch;
    subtitle: string;
    private ay;
    topMargin: number;
    private al;
    leftMargin: number;
    private an;
    rightMargin: number;
    private aj;
    bottomMargin: number;
    private ai;
    autoMarginWidth: number;
    private ah;
    autoMarginHeight: number;
    private s;
    isAntiAliasingEnabledDuringInteraction: boolean;
    private am;
    pixelScalingRatio: number;
    private ak;
    interactionPixelScalingRatio: number;
    private b5;
    overviewPlusDetailPaneBackgroundImageUri: string;
    private ae;
    actualPixelScalingRatio: number;
    private ad;
    actualInteractionPixelScalingRatio: number;
    private j;
    actualWindowRect: RectDescription;
    private af;
    actualWindowPositionHorizontal: number;
    private ag;
    actualWindowPositionVertical: number;
    private ca;
    SeriesCursorMouseMoveRef: string;
    private cd;
    SeriesMouseLeftButtonDownRef: string;
    private ce;
    SeriesMouseLeftButtonUpRef: string;
    private cf;
    SeriesMouseMoveRef: string;
    private cb;
    SeriesMouseEnterRef: string;
    private cc;
    SeriesMouseLeaveRef: string;
    private cu;
    WindowRectChangedRef: string;
    private cg;
    SizeChangedRef: string;
    private bw;
    ActualWindowRectChangedRef: string;
    private b3;
    GridAreaRectChangedRef: string;
    private f;
    series: SeriesDescription[];
    private b4;
    legendRef: string;
    private bx;
    background: string;
    private co;
    titleFontFamily: string;
    private au;
    titleFontSize: number;
    private cq;
    titleFontWeight: string;
    private cp;
    titleFontStyle: string;
    private ci;
    subtitleFontFamily: string;
    private ap;
    subtitleFontSize: number;
    private ck;
    subtitleFontWeight: string;
    private cj;
    subtitleFontStyle: string;
}
