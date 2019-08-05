import { Description } from "./Description";
import { RectDescription } from "./RectDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class ZoomSliderDescription extends Description {
    static $t: Type;
    protected get_type(): string;
    readonly type: string;
    constructor();
    private a0;
    panTransitionDuration: number;
    private x;
    maxZoomWidth: number;
    private z;
    pixelScalingRatio: number;
    private j;
    actualPixelScalingRatio: number;
    private f;
    windowRect: RectDescription;
    private y;
    minZoomWidth: number;
    private ab;
    startInset: number;
    private m;
    endInset: number;
    private ad;
    trackStartInset: number;
    private ac;
    trackEndInset: number;
    private k;
    barExtent: number;
    private bk;
    orientation: string;
    private bh;
    lowerThumbBrush: string;
    private v;
    lowerThumbStrokeThickness: number;
    private q;
    higherThumbStrokeThickness: number;
    private a9;
    higherThumbBrush: string;
    private bi;
    lowerThumbOutline: string;
    private ba;
    higherThumbOutline: string;
    private bj;
    lowerThumbRidgesBrush: string;
    private bb;
    higherThumbRidgesBrush: string;
    private w;
    lowerThumbWidth: number;
    private r;
    higherThumbWidth: number;
    private u;
    lowerThumbHeight: number;
    private p;
    higherThumbHeight: number;
    private bf;
    lowerShadeBrush: string;
    private bg;
    lowerShadeOutline: string;
    private t;
    lowerShadeStrokeThickness: number;
    private a7;
    higherShadeBrush: string;
    private a8;
    higherShadeOutline: string;
    private o;
    higherShadeStrokeThickness: number;
    private a2;
    barBrush: string;
    private a3;
    barOutline: string;
    private l;
    barStrokeThickness: number;
    private bl;
    rangeThumbBrush: string;
    private bm;
    rangeThumbOutline: string;
    private aa;
    rangeThumbStrokeThickness: number;
    private bn;
    rangeThumbRidgesBrush: string;
    private bc;
    lowerCalloutBrush: string;
    private be;
    lowerCalloutTextColor: string;
    private bd;
    lowerCalloutOutline: string;
    private s;
    lowerCalloutStrokeThickness: number;
    private a4;
    higherCalloutBrush: string;
    private a6;
    higherCalloutTextColor: string;
    private a5;
    higherCalloutOutline: string;
    private n;
    higherCalloutStrokeThickness: number;
    private h;
    areThumbCalloutsEnabled: boolean;
    private _thumbCalloutFontFamily;
    thumbCalloutFontFamily: string;
    private _thumbCalloutFontSize;
    thumbCalloutFontSize: number;
    private _thumbCalloutFontStyle;
    thumbCalloutFontStyle: string;
    private _thumbCalloutFontWeight;
    thumbCalloutFontWeight: string;
    private bo;
    ResolvingAxisValueRef: string;
    private bp;
    WindowRectChangedRef: string;
}