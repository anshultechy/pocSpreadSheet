import { SpreadsheetChartAdapterBase } from "./SpreadsheetChartAdapterBase";
import { Spreadsheet } from "./Spreadsheet";
import { ChartType, WorksheetChart } from "../../igniteui-angular-excel/ES5/excel.core";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { SpreadsheetChartElementInfo } from "./SpreadsheetChartElementInfo";
import { Type } from "../../igniteui-angular-core/ES5/type";
import { SpreadsheetChartAdapter_ScatterSeriesDataItem } from "./SpreadsheetChartAdapter_ScatterSeriesDataItem";
import { SpreadsheetChartAdapter_SeriesDataItem } from "./SpreadsheetChartAdapter_SeriesDataItem";
/**
 * Creates and initializes chart elements for the spreadsheet based on a [[WorksheetChart]] instance.
 */
export declare class SpreadsheetChartAdapter extends SpreadsheetChartAdapterBase {
    static $t: Type;
    private _d;
    /**
     * @hidden
     */
    _e: List$1<ChartType>;
    /**
     * @hidden
     */
    static readonly _x: string;
    /**
     * @hidden
     */
    static readonly _z: string;
    /**
     * @hidden
     */
    static readonly _y: string;
    /**
     * @hidden
     */
    static readonly _u: string;
    /**
     * @hidden
     */
    static readonly _t: string;
    /**
     * @hidden
     */
    static readonly _ab: string;
    /**
     * @hidden
     */
    static readonly _w: string;
    /**
     * @hidden
     */
    static readonly _ac: string;
    /**
     * @hidden
     */
    static readonly _v: string;
    /**
     * @hidden
     */
    static readonly _q: string;
    /**
     * @hidden
     */
    static readonly _g: string;
    /**
     * @hidden
     */
    static readonly _aa: string;
    /**
     * @hidden
     */
    static readonly _r: string;
    /**
     * @hidden
     */
    static readonly _f: string;
    /**
     * @hidden
     */
    static readonly _ak: string;
    /**
     * @hidden
     */
    static readonly _ai: string;
    /**
     * @hidden
     */
    static readonly _aj: string;
    /**
     * @hidden
     */
    static readonly _ae: string;
    /**
     * @hidden
     */
    static readonly _af: string;
    /**
     * @hidden
     */
    static readonly _ad: string;
    /**
     * @hidden
     */
    static readonly _ag: string;
    /**
     * @hidden
     */
    static readonly _ah: string;
    /**
     * @hidden
     */
    static readonly _m: string;
    /**
     * @hidden
     */
    static readonly _n: string;
    /**
     * @hidden
     */
    static readonly _o: string;
    /**
     * @hidden
     */
    static readonly _p: string;
    /**
     * @hidden
     */
    static readonly _j: string;
    /**
     * @hidden
     */
    static readonly _l: string;
    /**
     * @hidden
     */
    static readonly _k: string;
    /**
     * @hidden
     */
    static readonly _h: string;
    /**
     * @hidden
     */
    static readonly _i: string;
    constructor();
    /**
     * @hidden
     */
    _a(a: WorksheetChart, b: Spreadsheet): SpreadsheetChartElementInfo;
    /**
     * @hidden
     */
    _b(a: WorksheetChart): boolean;
    /**
     * @hidden
     */
    _c: Spreadsheet;
    /**
     * @hidden
     */
    _s(a: string, ...b: any[]): string;
}
/**
 * @hidden
 */
export declare class SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate extends SpreadsheetChartElementInfo {
    static $t: Type;
    private ae;
    private a7;
    private ai;
    private ba;
    private am;
    private k;
    private l;
    private m;
    private aj;
    private ak;
    private a0;
    private ax;
    private az;
    private aw;
    private a1;
    private ay;
    private a2;
    private bc;
    private bb;
    private af;
    private al;
    private av;
    private a6;
    private ad;
    private a8;
    private a9;
    constructor(a: SpreadsheetChartAdapter, b: WorksheetChart, c: (chart: WorksheetChart, oldUI: any) => any);
    h(): void;
    i(): void;
    e(a: WorksheetChart, b: boolean, c: boolean): boolean;
    private readonly ag;
    private ac;
    private readonly a3;
    private readonly ap;
    private readonly aq;
    private readonly as;
    private readonly ar;
    private ah;
    private bd;
    private bf;
    private be;
    private bg;
    private an;
    private bi;
    private bj;
    private bh;
    private bl;
    private bk;
    private bm;
    private bn;
    private n;
    private o;
    private bo;
    private p;
    private q;
    private r;
    private j;
    private s;
    private t;
    private v;
    private y;
    private x;
    private w;
    private ao;
    a4(): List$1<SpreadsheetChartAdapter_ScatterSeriesDataItem>;
    a5(): List$1<SpreadsheetChartAdapter_SeriesDataItem>;
    private bp;
    private bq;
    br(): void;
    private bs;
    private bt;
    private bu;
    private bv;
    private bw;
    private bx;
    private by;
    private bz;
    private b0;
    private z;
    private b1;
    private u;
    private aa;
    private ab;
    private b2;
    private at;
    private b3;
    private b4;
    private b5;
    private au;
    private b6;
    private b7;
}
