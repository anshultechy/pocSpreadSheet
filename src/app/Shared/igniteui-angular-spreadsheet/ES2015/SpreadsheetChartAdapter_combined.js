/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { SpreadsheetChartAdapterBase } from "./SpreadsheetChartAdapterBase";
import { ChartType_$type, Series, ChartEmptyFill, SeriesType_$type } from "../../igniteui-angular-excel/ES2015/excel.core";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { SpreadsheetChartElementInfo } from "./SpreadsheetChartElementInfo";
import { markType, IDisposable_$type, NotSupportedException, runOn, typeCast, EnumUtil, String_$type, fromEnum, typeGetValue, Number_$type } from "../../igniteui-angular-core/ES2015/type";
import { Localization } from "../../igniteui-angular-core/ES2015/Localization";
import { stringIsNullOrEmpty, stringContains, stringEmpty } from "../../igniteui-angular-core/ES2015/string";
import { stringFormat1, stringFormat } from "../../igniteui-angular-core/ES2015/stringExtended";
import { SpreadsheetChartAdapterState } from "./SpreadsheetChartAdapterState";
import { ComponentRenderer } from "../../igniteui-angular-core/ES2015/ComponentRenderer";
import { ChartElementPlatformHelper } from "./ChartElementPlatformHelper";
import { ChartSeriesInfo } from "./ChartSeriesInfo";
import { SeriesDescription } from "../../igniteui-angular-core/ES2015/SeriesDescription";
import { Dictionary$2 } from "../../igniteui-angular-core/ES2015/Dictionary$2";
import { SpreadsheetChartAdapter_ScatterSeriesDataItem } from "./SpreadsheetChartAdapter_ScatterSeriesDataItem";
import { Enumerable } from "../../igniteui-angular-core/ES2015/Enumerable";
import { SpreadsheetChartAdapter_SeriesDataItem } from "./SpreadsheetChartAdapter_SeriesDataItem";
import { HashSet$1 } from "../../igniteui-angular-core/ES2015/HashSet$1";
import { SpreadsheetChartAdapterHelpers } from "./SpreadsheetChartAdapterHelpers";
import { SpreadsheetChartAdapter_PieDataItem } from "./SpreadsheetChartAdapter_PieDataItem";
import { SpreadsheetChartAdapter_StackedSeriesDataItem } from "./SpreadsheetChartAdapter_StackedSeriesDataItem";
import { Convert } from "../../igniteui-angular-core/ES2015/Convert";
import { SpreadsheetChartAdapter_StockDataItem } from "./SpreadsheetChartAdapter_StockDataItem";
import { DataChartDescription } from "../../igniteui-angular-core/ES2015/DataChartDescription";
import { AxisInfos } from "./AxisInfos";
import { DataChartCategorySeriesDescriptionCoreModule } from "../../igniteui-angular-core/ES2015/DataChartCategorySeriesDescriptionCoreModule";
import { DataChartCategorySeriesDescriptionModule } from "../../igniteui-angular-core/ES2015/DataChartCategorySeriesDescriptionModule";
import { DataChartVerticalCategorySeriesDescriptionModule } from "../../igniteui-angular-core/ES2015/DataChartVerticalCategorySeriesDescriptionModule";
import { HorizontalAnchoredCategorySeriesDescription } from "../../igniteui-angular-core/ES2015/HorizontalAnchoredCategorySeriesDescription";
import { SeriesViewerDescription } from "../../igniteui-angular-core/ES2015/SeriesViewerDescription";
import { DoughnutChartDescription } from "../../igniteui-angular-core/ES2015/DoughnutChartDescription";
import { RingSeriesDescription } from "../../igniteui-angular-core/ES2015/RingSeriesDescription";
import { DoughnutChartDescriptionMetadata } from "../../igniteui-angular-core/ES2015/DoughnutChartDescriptionMetadata";
import { LegendDescriptionModule } from "../../igniteui-angular-core/ES2015/LegendDescriptionModule";
import { ItemLegendDescription } from "../../igniteui-angular-core/ES2015/ItemLegendDescription";
import { LegendDescription } from "../../igniteui-angular-core/ES2015/LegendDescription";
import { PieChartDescription } from "../../igniteui-angular-core/ES2015/PieChartDescription";
import { PieChartDescriptionModule } from "../../igniteui-angular-core/ES2015/PieChartDescriptionModule";
import { NumericYAxisDescription } from "../../igniteui-angular-core/ES2015/NumericYAxisDescription";
import { DataChartFinancialSeriesDescriptionModule } from "../../igniteui-angular-core/ES2015/DataChartFinancialSeriesDescriptionModule";
import { CategoryXAxisDescription } from "../../igniteui-angular-core/ES2015/CategoryXAxisDescription";
import { LineSeriesDescription } from "../../igniteui-angular-core/ES2015/LineSeriesDescription";
import { AnchoredCategorySeriesDescription } from "../../igniteui-angular-core/ES2015/AnchoredCategorySeriesDescription";
import { ColumnSeriesDescription } from "../../igniteui-angular-core/ES2015/ColumnSeriesDescription";
import { FinancialPriceSeriesDescription } from "../../igniteui-angular-core/ES2015/FinancialPriceSeriesDescription";
import { PriceDisplayType_$type } from "igniteui-angular-charts/ES2015/PriceDisplayType";
import { RowColLength } from "./RowColLength";
import { MarkerType_$type } from "igniteui-angular-charts/ES2015/MarkerType";
import { MarkerSeriesDescription } from "../../igniteui-angular-core/ES2015/MarkerSeriesDescription";
import { StackedFragmentSeriesDescription } from "../../igniteui-angular-core/ES2015/StackedFragmentSeriesDescription";
import { BubbleSeriesDescription } from "../../igniteui-angular-core/ES2015/BubbleSeriesDescription";
import { TrendLineType_$type } from "../../igniteui-angular-core/ES2015/TrendLineType";
import { StackedSeriesBaseDescription } from "../../igniteui-angular-core/ES2015/StackedSeriesBaseDescription";
import { ScatterBaseDescription } from "../../igniteui-angular-core/ES2015/ScatterBaseDescription";
import { PolarBaseDescription } from "../../igniteui-angular-core/ES2015/PolarBaseDescription";
import { StackedColumnSeriesDescription } from "../../igniteui-angular-core/ES2015/StackedColumnSeriesDescription";
import { Stacked100ColumnSeriesDescription } from "../../igniteui-angular-core/ES2015/Stacked100ColumnSeriesDescription";
import { StackedBarSeriesDescription } from "../../igniteui-angular-core/ES2015/StackedBarSeriesDescription";
import { Stacked100BarSeriesDescription } from "../../igniteui-angular-core/ES2015/Stacked100BarSeriesDescription";
import { BarSeriesDescription } from "../../igniteui-angular-core/ES2015/BarSeriesDescription";
import { StackedLineSeriesDescription } from "../../igniteui-angular-core/ES2015/StackedLineSeriesDescription";
import { Stacked100LineSeriesDescription } from "../../igniteui-angular-core/ES2015/Stacked100LineSeriesDescription";
import { AreaSeriesDescription } from "../../igniteui-angular-core/ES2015/AreaSeriesDescription";
import { StackedAreaSeriesDescription } from "../../igniteui-angular-core/ES2015/StackedAreaSeriesDescription";
import { Stacked100AreaSeriesDescription } from "../../igniteui-angular-core/ES2015/Stacked100AreaSeriesDescription";
import { HorizontalStackedSeriesBaseDescription } from "../../igniteui-angular-core/ES2015/HorizontalStackedSeriesBaseDescription";
import { VerticalStackedSeriesBaseDescription } from "../../igniteui-angular-core/ES2015/VerticalStackedSeriesBaseDescription";
import { VerticalAnchoredCategorySeriesDescription } from "../../igniteui-angular-core/ES2015/VerticalAnchoredCategorySeriesDescription";
import { RingSeriesBaseDescriptionMetadata } from "../../igniteui-angular-core/ES2015/RingSeriesBaseDescriptionMetadata";
import { RingSeriesDescriptionMetadata } from "../../igniteui-angular-core/ES2015/RingSeriesDescriptionMetadata";
import { HierarchicalRingSeriesDescriptionMetadata } from "../../igniteui-angular-core/ES2015/HierarchicalRingSeriesDescriptionMetadata";
import { DataChartRadialSeriesDescriptionCoreModule } from "../../igniteui-angular-core/ES2015/DataChartRadialSeriesDescriptionCoreModule";
import { DataChartRadialSeriesDescriptionModule } from "../../igniteui-angular-core/ES2015/DataChartRadialSeriesDescriptionModule";
import { RadialLineSeriesDescription } from "../../igniteui-angular-core/ES2015/RadialLineSeriesDescription";
import { RadialAreaSeriesDescription } from "../../igniteui-angular-core/ES2015/RadialAreaSeriesDescription";
import { DataChartScatterSeriesDescriptionModule } from "../../igniteui-angular-core/ES2015/DataChartScatterSeriesDescriptionModule";
import { ScatterSeriesDescription } from "../../igniteui-angular-core/ES2015/ScatterSeriesDescription";
import { ScatterLineSeriesDescription } from "../../igniteui-angular-core/ES2015/ScatterLineSeriesDescription";
import { ScatterSplineSeriesDescription } from "../../igniteui-angular-core/ES2015/ScatterSplineSeriesDescription";
import { DataChartStackedSeriesDescriptionModule } from "../../igniteui-angular-core/ES2015/DataChartStackedSeriesDescriptionModule";
import { StraightNumericAxisBaseDescription } from "../../igniteui-angular-core/ES2015/StraightNumericAxisBaseDescription";
import { truncate, log10 } from "../../igniteui-angular-core/ES2015/number";
/**
 * Creates and initializes chart elements for the spreadsheet based on a [[WorksheetChart]] instance.
 */
export class SpreadsheetChartAdapter extends SpreadsheetChartAdapterBase {
    constructor() {
        super();
        this._d = null;
        /**
         * @hidden
         */
        this._e = null;
        /**
         * @hidden
         */
        this._c = null;
        this._e = new List$1(ChartType_$type, 1, [1, 76, 77, 57, 58, 59, 15, 87, 51, 52, 53, 113, -4120, 80, 4, 63, 64, 65, 66, 67, 5, -4102, 70, 69, -4151, 82, 81, 88, 89, 90, 91, -4169, 74, 75, 72, 73]);
    }
    /**
     * @hidden
     */
    _a(a, b) {
        this._c = b;
        let c = (d, e) => b._v.createChartTitleElement(d.chartTitle, e);
        return this._d = new SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate(this, a, c);
    }
    /**
     * @hidden
     */
    _b(a) {
        return this._e.contains(a.chartType);
    }
    /**
     * @hidden
     */
    _s(a, ...b) {
        let c;
        c = Localization.c("spreadsheetchartadapter", a, ...b);
        if (!stringIsNullOrEmpty(c) && b != null && b.length > 0) {
            c = stringFormat1(c, ...b);
        }
        return c;
        return "GetResourceString not Implemented!!!!!!";
    }
}
SpreadsheetChartAdapter.$t = markType(SpreadsheetChartAdapter, 'SpreadsheetChartAdapter', SpreadsheetChartAdapterBase.$);
/**
 * @hidden
 */
SpreadsheetChartAdapter._x = "datachart";
/**
 * @hidden
 */
SpreadsheetChartAdapter._z = "piechart";
/**
 * @hidden
 */
SpreadsheetChartAdapter._y = "doughnutchart";
/**
 * @hidden
 */
SpreadsheetChartAdapter._u = "groupedseriesdata{0}";
/**
 * @hidden
 */
SpreadsheetChartAdapter._t = "groupedscatterseriesdata{0}";
/**
 * @hidden
 */
SpreadsheetChartAdapter._ab = "stackedseriesdata";
/**
 * @hidden
 */
SpreadsheetChartAdapter._w = "piedata";
/**
 * @hidden
 */
SpreadsheetChartAdapter._ac = "stockdata";
/**
 * @hidden
 */
SpreadsheetChartAdapter._v = "piecharttooltip";
/**
 * @hidden
 */
SpreadsheetChartAdapter._q = "doughnutcharttooltip";
/**
 * @hidden
 */
SpreadsheetChartAdapter._g = "legend";
/**
 * @hidden
 */
SpreadsheetChartAdapter._aa = "seriestooltip{0}";
/**
 * @hidden
 */
SpreadsheetChartAdapter._r = "fragmentseriestitle{0}";
/**
 * @hidden
 */
SpreadsheetChartAdapter._f = "axiscrossingvalue-{0}";
/**
 * @hidden
 */
SpreadsheetChartAdapter._ak = "XAxis";
/**
 * @hidden
 */
SpreadsheetChartAdapter._ai = "Prices";
/**
 * @hidden
 */
SpreadsheetChartAdapter._aj = "Volume";
/**
 * @hidden
 */
SpreadsheetChartAdapter._ae = "High";
/**
 * @hidden
 */
SpreadsheetChartAdapter._af = "Low";
/**
 * @hidden
 */
SpreadsheetChartAdapter._ad = "Close";
/**
 * @hidden
 */
SpreadsheetChartAdapter._ag = "Open";
/**
 * @hidden
 */
SpreadsheetChartAdapter._ah = "Volume";
/**
 * @hidden
 */
SpreadsheetChartAdapter._m = "XAxisPrimary";
/**
 * @hidden
 */
SpreadsheetChartAdapter._n = "XAxisSecondary";
/**
 * @hidden
 */
SpreadsheetChartAdapter._o = "YAxisPrimary";
/**
 * @hidden
 */
SpreadsheetChartAdapter._p = "YAxisSecondary";
/**
 * @hidden
 */
SpreadsheetChartAdapter._j = "CategoryAngleAxis";
/**
 * @hidden
 */
SpreadsheetChartAdapter._l = "NumericRadiusAxis";
/**
 * @hidden
 */
SpreadsheetChartAdapter._k = "NumericAngleAxis";
/**
 * @hidden
 */
SpreadsheetChartAdapter._h = "rgba(0, 0, 0, 0)";
/**
 * @hidden
 */
SpreadsheetChartAdapter._i = "rgba(255, 255, 255, 0)";
/**
 * @hidden
 */
export class SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate extends SpreadsheetChartElementInfo {
    constructor(a, b, c) {
        super();
        this.ae = null;
        this.a7 = null;
        this.ai = false;
        this.ba = null;
        this.am = false;
        this.k = null;
        this.l = null;
        this.m = null;
        this.aj = false;
        this.ak = false;
        this.a0 = null;
        this.ax = null;
        this.az = null;
        this.aw = null;
        this.a1 = null;
        this.ay = null;
        this.a2 = null;
        this.bc = null;
        this.bb = null;
        this.af = null;
        this.al = false;
        this.av = null;
        this.a6 = -1;
        this.ad = null;
        this.a8 = null;
        this.a9 = null;
        this.ac = null;
        this.ah = null;
        this.ac = new ChartElementPlatformHelper(a._c, runOn(this, this.br));
        this.ae = a;
        this.c = b;
        this.ad = c;
        this.f = this.ac.p();
        this.ad = c;
        this.k = new ComponentRenderer();
        this.aj = true;
        this.ak = true;
        this.ah = this.c.worksheet.workbook;
        this.bg();
    }
    h() {
        if (null != this.a7 && typeCast(IDisposable_$type, this.a7) !== null) {
            this.a7.dispose();
        }
        if (null != this.ba && typeCast(IDisposable_$type, this.ba) !== null) {
            this.ba.dispose();
        }
    }
    i() {
    }
    e(a, b, c) {
        if (a != this.c) {
            b = true;
            c = true;
            this.c = a;
        }
        else if (false == b && false == c) {
            return true;
        }
        this.al = true;
        if (b || c) {
            this.bu();
        }
        if (c) {
            this.bt();
        }
        this.bg();
        this.aj = false;
        this.ak = false;
        this.al = false;
        return true;
    }
    get ag() {
        if (null == this.af) {
            this.af = new SpreadsheetChartAdapterState(this.c, this.a7, this.ba, this.k, this.ac);
        }
        return this.af;
    }
    get a3() {
        return this.av;
    }
    get ap() {
        return (null != this.c.legend && null != this.m && null != this.ba);
    }
    get aq() {
        return 113 == this.c.chartType;
    }
    get as() {
        switch (this.c.chartType) {
            case 88:
            case 89:
            case 90:
            case 91: return true;
            default: return false;
        }
    }
    get ar() {
        return stringContains(EnumUtil.getName(ChartType_$type, this.c.chartType), "Stacked");
    }
    bd() {
        if (null == this.a7) {
            this.a7 = ((() => { let a = this.ac.o(this.ai); this.ai = a.p0; return a.ret; })());
        }
    }
    bf() {
        if (null != this.c.legend) {
            if (null == this.ba) {
                this.ba = ((() => { let a = this.ac.o(this.am); this.am = a.p0; return a.ret; })());
            }
        }
        else if (null != this.ba) {
            this.ac.h(this.ba, this.f);
            if (null != this.a7) {
                this.ac.h(this.ba, this.a7);
            }
            this.ba = null;
        }
    }
    be(a, b, c, d, e, f, g, h, i = null) {
        if (null != a && (false == (typeCast(ChartEmptyFill.$, a.line.fill) !== null))) {
            f.add(this.v(a, "High", g, h));
        }
        if (null != b && (false == (typeCast(ChartEmptyFill.$, b.line.fill) !== null))) {
            f.add(this.v(b, "Low", g, h));
        }
        if (null != c && (false == (typeCast(ChartEmptyFill.$, c.line.fill) !== null))) {
            f.add(this.v(c, "Close", g, h));
        }
        if (null != d && (false == (typeCast(ChartEmptyFill.$, d.line.fill) !== null))) {
            f.add(this.v(d, "Open", g, h));
        }
        if (null != e && null != e.line && (false == (typeCast(ChartEmptyFill.$, e.line.fill) !== null))) {
            f.add(this.v(e, "Volume", g, i));
        }
    }
    bg() {
        this.bd();
        this.bf();
        if (false == this.ai) {
            return;
        }
        if (this.ap && false == this.am) {
            return;
        }
        this.bh();
        this.an();
        if (null == this.l) {
            return;
        }
        this.bk();
        this.bx();
        this.bs();
        this.bv();
        this.bw();
        this.a6 = this.av.count;
    }
    an(a = true) {
        if (null == this.l || this.aj) {
        }
        else {
            return true;
        }
        if (a) {
            this.l = null;
        }
        switch (this.c.chartType) {
            case 1:
            case 76:
            case 77:
                if (a) {
                    this.b5();
                    this.l = this.n();
                }
                else {
                    return true;
                }
                break;
            case -4098: break;
            case 78: break;
            case 79: break;
            case 60: break;
            case 61: break;
            case 62: break;
            case 57:
            case 58:
            case 59:
                if (a) {
                    this.b5();
                    this.l = this.n();
                }
                else {
                    return true;
                }
                break;
            case 71: break;
            case 15:
            case 87:
                if (a) {
                    this.b5();
                    this.l = this.n();
                }
                else {
                    return true;
                }
                break;
            case -4100: break;
            case 54: break;
            case 55: break;
            case 56: break;
            case 51:
            case 52:
            case 53:
                if (a) {
                    this.b5();
                    this.l = this.n();
                }
                else {
                    return true;
                }
                break;
            case 113:
                if (a) {
                    this.b5();
                    this.l = this.n();
                }
                else {
                    return true;
                }
                break;
            case 102: break;
            case 103: break;
            case 104: break;
            case 105: break;
            case 99: break;
            case 100: break;
            case 101: break;
            case 95: break;
            case 96: break;
            case 97: break;
            case 98: break;
            case 92: break;
            case 93: break;
            case 94: break;
            case -4120:
            case 80:
                if (a) {
                    this.b5();
                    this.l = this.o();
                }
                else {
                    return true;
                }
                break;
            case 4:
            case 63:
            case 64:
            case 65:
            case 66:
            case 67:
                if (a) {
                    this.b5();
                    this.l = this.n();
                }
                else {
                    return true;
                }
                break;
            case -4101: break;
            case 5:
            case -4102:
            case 70:
            case 69:
                if (a) {
                    this.b5();
                    this.l = this.p();
                }
                else {
                    return true;
                }
                break;
            case 68: break;
            case 109: break;
            case 110: break;
            case 111: break;
            case 112: break;
            case 106: break;
            case 107: break;
            case 108: break;
            case -4151:
            case 82:
            case 81:
                if (a) {
                    this.b5();
                    this.l = this.n();
                }
                else {
                    return true;
                }
                break;
            case 88:
            case 89:
            case 90:
            case 91:
                if (a) {
                    this.b5();
                    this.l = this.r();
                }
                else {
                    return true;
                }
                break;
            case 83:
            case 84: break;
            case 85:
            case 86: break;
            case -4169:
            case 74:
            case 75:
            case 72:
            case 73:
                if (a) {
                    this.b5();
                    this.l = this.n();
                }
                else {
                    return true;
                }
                break;
        }
        if (null == this.l) {
            throw new NotSupportedException(1, this.ae._s("Error_ChartTypeNotSupportedForRendering", EnumUtil.getName(ChartType_$type, this.c.chartType)));
        }
        return true;
    }
    bi() {
        if (false == this.aj) {
            return;
        }
        this.az = this.a4();
        let a = new Dictionary$2(String_$type, List$1.$.specialize(SpreadsheetChartAdapter_ScatterSeriesDataItem.$), 0);
        for (let b of fromEnum(this.az)) {
            let c = b.SeriesName;
            if (a.containsKey(c)) {
                a.item(c).add(b);
            }
            else {
                a.item(c, new List$1(SpreadsheetChartAdapter_ScatterSeriesDataItem.$, 0));
                a.item(c).add(b);
            }
        }
        for (let d = 0; d < a.values.count; d++) {
            let e = stringFormat("groupedscatterseriesdata{0}", d.toString());
            this.ac.g(this.k, this.a7, e, Enumerable.z(List$1.$.specialize(SpreadsheetChartAdapter_ScatterSeriesDataItem.$), a.values)._inner[d].toArray());
        }
        this.aw = Enumerable.z(List$1.$.specialize(SpreadsheetChartAdapter_ScatterSeriesDataItem.$), a.values);
    }
    bj(a = 0) {
        if (false == this.aj) {
            return;
        }
        this.a0 = this.a5();
        let b = new Dictionary$2(String_$type, List$1.$.specialize(SpreadsheetChartAdapter_SeriesDataItem.$), 0);
        for (let c of fromEnum(this.a0)) {
            let d = (a == 0) ? c.Row : c.Col;
            if (b.containsKey(d)) {
                b.item(d).add(c);
            }
            else {
                b.item(d, new List$1(SpreadsheetChartAdapter_SeriesDataItem.$, 0));
                b.item(d).add(c);
            }
        }
        for (let e = 0; e < b.values.count; e++) {
            let f = stringFormat("groupedseriesdata{0}", e.toString());
            this.ac.g(this.k, this.a7, f, Enumerable.z(List$1.$.specialize(SpreadsheetChartAdapter_SeriesDataItem.$), b.values)._inner[e].toArray());
        }
        this.ax = Enumerable.z(List$1.$.specialize(SpreadsheetChartAdapter_SeriesDataItem.$), b.values);
    }
    bh() {
        this.av = new List$1(ChartSeriesInfo.$, 0);
        let a = new HashSet$1(String_$type, 0);
        let b = 0;
        for (let c of fromEnum(this.c._seriesCollection$i)) {
            if (false == this.at(c)) {
                let d = SpreadsheetChartAdapterHelpers.v(c, b + 1);
                let e = d;
                while (a.contains(e)) {
                    e = d + this.ag.e().toString();
                }
                a.add_1(e);
                let f = SpreadsheetChartAdapterHelpers.w(c, b + 1);
                this.av.add(((() => {
                    let $ret = new ChartSeriesInfo();
                    $ret.a = c;
                    $ret.c = e;
                    $ret.d = f;
                    $ret.b = b;
                    return $ret;
                })()));
                b++;
            }
        }
    }
    bl() {
        if (false == this.aj) {
            return;
        }
        this.a0 = this.a5();
        let a = new Dictionary$2(String_$type, List$1.$.specialize(SpreadsheetChartAdapter_SeriesDataItem.$), 0);
        for (let b of fromEnum(this.a0)) {
            let c = b.Row;
            if (a.containsKey(c)) {
                a.item(c).add(b);
            }
            else {
                a.item(c, new List$1(SpreadsheetChartAdapter_SeriesDataItem.$, 0));
                a.item(c).add(b);
            }
        }
        let d = Enumerable.z(List$1.$.specialize(SpreadsheetChartAdapter_SeriesDataItem.$), a.values);
        this.ay = new List$1(SpreadsheetChartAdapter_PieDataItem.$, 0);
        for (let e of fromEnum(d)) {
            let f = ((() => {
                let $ret = new SpreadsheetChartAdapter_PieDataItem();
                $ret.CategoryName = e._inner[0].Row;
                $ret.Value = e._inner[0].Value;
                $ret.SeriesName = e._inner[0].Col;
                return $ret;
            })());
            this.ay.add(f);
        }
        this.ac.g(this.k, this.a7, "piedata", this.ay.toArray());
    }
    bk() {
        if (null != this.c.legend) {
            if (null != this.m) {
                return;
            }
        }
        else if (null != this.m) {
            this.m = null;
            return;
        }
        this.bo();
    }
    bm() {
        if (false == this.aj) {
            return;
        }
        this.a1 = new List$1(SpreadsheetChartAdapter_StackedSeriesDataItem.$, 0);
        let a;
        let b;
        let c = this.bp(this.a3._inner[0].a, b, a);
        b = c.p1;
        a = c.p2;
        let d = a.length;
        let e = b.length;
        let f = 0;
        let g = this.a3.count;
        let h = ((() => {
            let $firstRank;
            let $ret = new Array($firstRank = d);
            let $currRet = $ret;
            for (let $rankInit = 0; $rankInit < $firstRank; $rankInit++) {
                $currRet[$rankInit] = new Array(g);
            }
            return $ret;
        })());
        for (let i = 0; i < d; i++) {
            let j = 0;
            for (let k of fromEnum(this.a3)) {
                let l;
                let m;
                let n = this.bp(k.a, m, l);
                m = n.p1;
                l = n.p2;
                h[f][j] = Convert.toDouble3(m[f]);
                j++;
            }
            f++;
        }
        f = 0;
        for (let o = 0; o < d; o++) {
            let p = new Array(g);
            let q = new Array(g);
            let r = 0;
            for (let s of fromEnum(this.a3)) {
                p[r] = Convert.toDouble3(h[f][r]);
                q[r] = s.c;
                r++;
            }
            let t = ((() => {
                let $ret = new SpreadsheetChartAdapter_StackedSeriesDataItem();
                $ret.CategoryName = a[o].toString();
                $ret.SeriesValues = p;
                $ret.SeriesNames = q;
                return $ret;
            })());
            this.a1.add(t);
            f++;
        }
        this.ac.g(this.k, this.a7, "stackedseriesdata", this.a1.toArray());
    }
    bn() {
        if (false == this.aj) {
            return;
        }
        this.a2 = new List$1(SpreadsheetChartAdapter_StockDataItem.$, 0);
        this.a0 = this.a5();
        let a = this.c.chartType;
        let b = stringEmpty();
        let c = null;
        let d = -1;
        let e = new Dictionary$2(String_$type, SpreadsheetChartAdapter_StockDataItem.$, 0);
        for (let f of fromEnum(this.a0)) {
            if (false == e.containsKey(f.Row)) {
                c = ((() => {
                    let $ret = new SpreadsheetChartAdapter_StockDataItem();
                    $ret.CategoryName = f.Row;
                    return $ret;
                })());
                e.addItem(f.Row, c);
            }
            else {
                c = e.item(f.Row);
            }
            if (f.Col != b) {
                d++;
                b = f.Col;
            }
            c.g(a, d, f.Value);
        }
        for (let g of fromEnum(e.values)) {
            this.a2.add(g);
        }
        this.ac.g(this.k, this.a7, "stockdata", this.a2.toArray());
    }
    n() {
        this.ac.u("datachart");
        DataChartCategorySeriesDescriptionCoreModule.register(this.k.context);
        DataChartCategorySeriesDescriptionModule.register(this.k.context);
        DataChartVerticalCategorySeriesDescriptionModule.register(this.k.context);
        let a = new DataChartDescription();
        let b = new AxisInfos();
        for (let c of fromEnum(this.c._axisCollection$i)) {
            switch (c.type) {
                case 1:
                    this.bj();
                    if (this.c.chartType == -4151 || this.c.chartType == 81 || this.c.chartType == 82) {
                        b.l(SpreadsheetChartAdapterHelpers.f(c, this.ag));
                    }
                    else {
                        b.l(SpreadsheetChartAdapterHelpers.g(c, this.ag));
                    }
                    break;
                case 2:
                    if (this.c.chartType == -4151 || this.c.chartType == 81 || this.c.chartType == 82) {
                        b.l(SpreadsheetChartAdapterHelpers.h(c, this.ag));
                    }
                    else {
                        b.l(SpreadsheetChartAdapterHelpers.i(c, this.ag));
                    }
                    break;
                case 3: break;
            }
        }
        let d = new List$1(SeriesDescription.$, 0);
        let e = 0;
        let f = false;
        let g = 0;
        let h = new Dictionary$2(Series.$, SeriesDescription.$, 0);
        let i = new Dictionary$2(SeriesDescription.$, Series.$, 0);
        for (let j of fromEnum(this.a3)) {
            let k = j.a;
            if (stringContains(EnumUtil.getName(ChartType_$type, k.chartType), "Stacked")) {
                g++;
                if (g > 1) {
                    e++;
                    continue;
                }
            }
            if (this.aq && SpreadsheetChartAdapterHelpers.k(k)) {
                f = true;
            }
            let l = typeCast(SeriesDescription.$, this.q(k, e, b));
            if (null != l) {
                d.add(l);
                h.addItem(k, l);
                i.addItem(l, k);
                if (stringContains(EnumUtil.getName(ChartType_$type, k.chartType), "Stacked")) {
                    for (let m of fromEnum(b.b)) {
                        if (m.d) {
                            m.a.label = "CategoryName";
                            m.a.dataSourceRef = "stackedseriesdata";
                        }
                    }
                }
            }
            else {
                throw new NotSupportedException(1, this.ae._s("Error_UnsupportedSeriesType", EnumUtil.getName(SeriesType_$type, k.type)));
            }
            e++;
        }
        if (this.aq && f) {
            for (let n of fromEnum(h.keys)) {
                if (false == SpreadsheetChartAdapterHelpers.k(n)) {
                    let o = h.item(n);
                    if (typeCast(HorizontalAnchoredCategorySeriesDescription.$, o) !== null && o.xAxisRef == "XAxisSecondary") {
                        o.xAxisRef = "XAxisPrimary";
                        o.yAxisRef = "YAxisPrimary";
                    }
                }
            }
        }
        if (this.al) {
            if (this.a6 != -1 && (this.a6 != this.a3.count)) {
                a.axes = new Array(0);
                a.series = new Array(0);
                this.bv(a);
            }
        }
        this.b3(b);
        this.b6(d);
        a.axes = b.a();
        a.series = Enumerable.a(SeriesDescription.$, d);
        this.by(a);
        let p = "GetDVDataChart1";
        return a;
    }
    o() {
        this.ac.u("doughnutchart");
        DoughnutChartDescriptionMetadata.d(this.k.context);
        let a = new DoughnutChartDescription();
        this.bb = "Series '{Col}' Point '{Row}' Value: {Value}";
        this.ac.g(this.k, this.a7, "doughnutcharttooltip", this.bb);
        let b = 0;
        let c = new List$1(RingSeriesDescription.$, 0);
        for (let d of fromEnum(this.a3)) {
            let e = d.a;
            if (null == e.values || e.values.getValues().length < 1) {
                b++;
                continue;
            }
            let f = typeCast(RingSeriesDescription.$, this.q(e, b, null));
            if (null != f) {
                f.startAngle = Math.max(-360, this.c.firstSliceAngle - 90);
                c.add(f);
                f.tooltipTemplateRef = "doughnutcharttooltip";
                f.brushes = SpreadsheetChartAdapterHelpers.b(e, b);
            }
            else {
                throw new NotSupportedException(1, this.ae._s("Error_UnsupportedSeriesType", EnumUtil.getName(SeriesType_$type, e.type)));
            }
            b++;
        }
        a.innerExtent = this.c.doughnutHoleSize;
        a.series = Enumerable.a(RingSeriesDescription.$, c);
        let g = SpreadsheetChartAdapterHelpers.r(this.c.plotArea._ap, this.ah);
        if (false == stringIsNullOrEmpty(g)) {
            a.background = g;
        }
        else {
            a.background = "rgba(0, 0, 0, 0)";
        }
        return a;
    }
    bo() {
        if (null == this.c.legend) {
            return;
        }
        LegendDescriptionModule.register(this.k.context);
        switch (this.c.chartType) {
            case 5:
            case 71:
            case -4102:
            case 70:
            case 69:
            case 68:
            case -4120:
            case 80:
                this.m = new ItemLegendDescription();
                break;
            default:
                this.m = new LegendDescription();
                break;
        }
        this.m.name = "legend";
        let a = SpreadsheetChartAdapterHelpers.r(this.c.legend._af, this.ah);
        if (false == stringIsNullOrEmpty(a)) {
            this.m.background = a;
        }
        else {
            this.m.background = "rgba(0, 0, 0, 0)";
        }
    }
    p() {
        this.ac.u("piechart");
        PieChartDescriptionModule.register(this.k.context);
        this.bl();
        let a = new PieChartDescription();
        a.dataSourceRef = "piedata";
        a.valueMemberPath = "Value";
        a.labelMemberPath = "CategoryName";
        a.legendRef = "legend";
        a.startAngle = Math.max(-360, this.c.firstSliceAngle - 90);
        this.bc = "Series '{SeriesName}' Point '{CategoryName}' Value: {Value}";
        this.ac.g(this.k, this.a7, "piecharttooltip", this.bc);
        a.tooltipTemplateRef = "piecharttooltip";
        if (this.a3.count > 0) {
            let b = 0;
            let c = this.a3._inner[b].a;
            a.brushes = SpreadsheetChartAdapterHelpers.b(c, b);
            let d = 0;
            a.explodedSlices = ((() => { let e = SpreadsheetChartAdapterHelpers.a(c, b, d); d = e.p2; return e.ret; })());
            a.explodedRadius = Math.max(d, c.explosion) / 100;
            a.othersCategoryThreshold = -1.7976931348623157E+308;
        }
        let e = SpreadsheetChartAdapterHelpers.r(this.c.plotArea._ap, this.ah);
        if (false == stringIsNullOrEmpty(e)) {
            a.background = e;
        }
        else {
            a.background = "rgba(0, 0, 0, 0)";
        }
        return a;
    }
    q(a, b, c) {
        switch (a.type) {
            case 0:
            case 2:
            case 1: return this.z(a, b);
            case 3: return this.u(a, b);
            case 4: return this.aa(a, b, c);
            case 6:
            case 7: return this.ab(a, b, c);
            case 5: break;
        }
        return null;
    }
    r() {
        if (!this.as) {
            return null;
        }
        this.ac.u("datachart");
        DataChartFinancialSeriesDescriptionModule.register(this.k.context);
        DataChartCategorySeriesDescriptionModule.register(this.k.context);
        let a = null;
        this.bn();
        switch (this.c.chartType) {
            case 88:
                {
                    if (false == this.au(1, 1, 0)) {
                        throw new NotSupportedException(1, this.ae._s("Error_InvalidAxesCountOrTypeForChartType", EnumUtil.getName(ChartType_$type, this.c.chartType)));
                    }
                    a = new DataChartDescription();
                    let b = this.j(SpreadsheetChartAdapterHelpers.j(0, this.c._axisCollection$i, this.ag));
                    let c = this.s(SpreadsheetChartAdapterHelpers.j(1, this.c._axisCollection$i, this.ag));
                    a.axes = [b, c];
                    let d = new List$1(SeriesDescription.$, 0);
                    d.add(this.w(b.name, c.name));
                    let e = this.a3.count > 0 ? this.a3._inner[0].a : null;
                    let f = this.a3.count > 1 ? this.a3._inner[1].a : null;
                    let g = this.a3.count > 2 ? this.a3._inner[2].a : null;
                    this.be(e, f, g, null, null, d, b.name, c.name);
                    a.series = Enumerable.a(SeriesDescription.$, d);
                    break;
                }
            case 89:
                {
                    if (false == this.au(1, 1, 0)) {
                        throw new NotSupportedException(1, this.ae._s("Error_InvalidAxesCountOrTypeForChartType", EnumUtil.getName(ChartType_$type, this.c.chartType)));
                    }
                    a = new DataChartDescription();
                    let h = this.j(SpreadsheetChartAdapterHelpers.j(0, this.c._axisCollection$i, this.ag));
                    let i = this.s(SpreadsheetChartAdapterHelpers.j(1, this.c._axisCollection$i, this.ag));
                    a.axes = [h, i];
                    let j = new List$1(SeriesDescription.$, 0);
                    j.add(this.x(h.name, i.name));
                    let k = this.a3.count > 0 ? this.a3._inner[0].a : null;
                    let l = this.a3.count > 1 ? this.a3._inner[1].a : null;
                    let m = this.a3.count > 2 ? this.a3._inner[2].a : null;
                    let n = this.a3.count > 3 ? this.a3._inner[3].a : null;
                    this.be(l, m, n, k, null, j, h.name, i.name);
                    a.series = Enumerable.a(SeriesDescription.$, j);
                    break;
                }
            case 90:
                {
                    if (false == this.au(1, 1, 1)) {
                        throw new NotSupportedException(1, this.ae._s("Error_InvalidAxesCountOrTypeForChartType", EnumUtil.getName(ChartType_$type, this.c.chartType)));
                    }
                    a = new DataChartDescription();
                    let o = this.j(SpreadsheetChartAdapterHelpers.j(0, this.c._axisCollection$i, this.ag));
                    let p = this.s(SpreadsheetChartAdapterHelpers.j(1, this.c._axisCollection$i, this.ag));
                    let q = this.t(SpreadsheetChartAdapterHelpers.j(3, this.c._axisCollection$i, this.ag));
                    a.axes = [o, p, q];
                    let r = this.a3.count > 0 ? this.a3._inner[0].a : null;
                    let s = this.a3.count > 1 ? this.a3._inner[1].a : null;
                    let t = this.a3.count > 2 ? this.a3._inner[2].a : null;
                    let u = this.a3.count > 3 ? this.a3._inner[3].a : null;
                    let v = new List$1(SeriesDescription.$, 0);
                    v.add(this.y(r, o.name, q.name));
                    v.add(this.w(o.name, p.name));
                    this.be(s, t, u, null, r, v, o.name, p.name, q.name);
                    a.series = Enumerable.a(SeriesDescription.$, v);
                    break;
                }
            case 91:
                {
                    if (false == this.au(1, 1, 1)) {
                        throw new NotSupportedException(1, this.ae._s("Error_InvalidAxesCountOrTypeForChartType", EnumUtil.getName(ChartType_$type, this.c.chartType)));
                    }
                    a = new DataChartDescription();
                    let w = this.j(SpreadsheetChartAdapterHelpers.j(0, this.c._axisCollection$i, this.ag));
                    let x = this.s(SpreadsheetChartAdapterHelpers.j(1, this.c._axisCollection$i, this.ag));
                    let y = this.t(SpreadsheetChartAdapterHelpers.j(3, this.c._axisCollection$i, this.ag));
                    a.axes = [w, x, y];
                    let z = this.a3.count > 0 ? this.a3._inner[0].a : null;
                    let aa = this.a3.count > 1 ? this.a3._inner[1].a : null;
                    let ab = this.a3.count > 2 ? this.a3._inner[2].a : null;
                    let ac = this.a3.count > 3 ? this.a3._inner[3].a : null;
                    let ad = this.a3.count > 4 ? this.a3._inner[4].a : null;
                    let ae = new List$1(SeriesDescription.$, 0);
                    ae.add(this.y(z, w.name, y.name));
                    ae.add(this.x(w.name, x.name));
                    this.be(ab, ac, ad, aa, z, ae, w.name, x.name, y.name);
                    a.series = Enumerable.a(SeriesDescription.$, ae);
                    break;
                }
            default: break;
        }
        if (null != a) {
            this.by(a);
        }
        return a;
    }
    j(a) {
        let b = new CategoryXAxisDescription();
        b.name = "XAxis";
        b.label = "CategoryName";
        b.dataSourceRef = "stockdata";
        b.tickLength = 10;
        b.gap = 0.35;
        SpreadsheetChartAdapterHelpers.x(b, a, this.ag);
        b.useClusteringMode = true;
        return b;
    }
    s(a) {
        let b = new NumericYAxisDescription();
        b.name = "Prices";
        b.minimumValue = 0;
        b.abbreviateLargeNumbers = true;
        SpreadsheetChartAdapterHelpers.x(b, a, this.ag);
        if (a.visible) {
            let c = "formatlabelstockchartaxis_" + b.name;
            this.ac.v(this.ag.a, this.ag.f, c, (d, e) => {
                if (typeof e === 'number') {
                    let f = e;
                    let g = a._y();
                    if (null != g) {
                        let h = stringEmpty();
                        if (((() => { let i = g.v(f, a.tickLabels.numberFormat, h); h = i.p2; return i.ret; })())) {
                            return h;
                        }
                    }
                }
                return e.toString();
            });
            b.formatLabelRef = c;
        }
        else {
            b.formatLabelRef = stringEmpty();
        }
        return b;
    }
    t(a) {
        let b = new NumericYAxisDescription();
        b.name = "Volume";
        b.minimumValue = 0;
        b.abbreviateLargeNumbers = true;
        SpreadsheetChartAdapterHelpers.x(b, a, this.ag);
        return b;
    }
    v(a, b, c, d) {
        let e = new LineSeriesDescription();
        e.showDefaultTooltip = true;
        this.b0(e, a);
        e.title = b;
        e.thickness = 1;
        e.xAxisRef = c;
        e.yAxisRef = d;
        e.dataSourceRef = "stockdata";
        e.valueMemberPath = b;
        return e;
    }
    y(a, b, c) {
        let d = new ColumnSeriesDescription();
        d.showDefaultTooltip = true;
        this.b0(d, a);
        d.title = "Volume";
        d.thickness = 1;
        d.xAxisRef = b;
        d.yAxisRef = c;
        d.dataSourceRef = "stockdata";
        d.valueMemberPath = "Volume";
        return d;
    }
    x(a, b) {
        let c = new FinancialPriceSeriesDescription();
        c.displayType = EnumUtil.getName(PriceDisplayType_$type, (0));
        c.showDefaultTooltip = true;
        this.b1(c);
        c.title = "Open High Low Close";
        c.thickness = 1;
        c.xAxisRef = a;
        c.yAxisRef = b;
        c.dataSourceRef = "stockdata";
        c.highMemberPath = "High";
        c.lowMemberPath = "Low";
        c.openMemberPath = "Open";
        c.closeMemberPath = "Close";
        return c;
    }
    w(a, b) {
        let c = new FinancialPriceSeriesDescription();
        c.displayType = EnumUtil.getName(PriceDisplayType_$type, (1));
        this.b1(c);
        c.title = "High Low Close";
        c.xAxisRef = a;
        c.yAxisRef = b;
        c.dataSourceRef = "stockdata";
        c.highMemberPath = "High";
        c.lowMemberPath = "Low";
        c.openMemberPath = "Open";
        c.closeMemberPath = "Close";
        c.showDefaultTooltip = true;
        return c;
    }
    ao(a) {
        if (null == a.bubbleSizes) {
            return false;
        }
        let b = a.bubbleSizes.getValues();
        for (let d = 0; d < b.length; d++) {
            let c = b[d];
            if (null == c || false == (typeof c === 'number' || typeof c === 'number')) {
                return false;
            }
        }
        return true;
    }
    a4() {
        if (null != this.az) {
            return this.az;
        }
        this.az = new List$1(SpreadsheetChartAdapter_ScatterSeriesDataItem.$, 0);
        let a = 0;
        for (let b of fromEnum(this.a3)) {
            let c = b.a;
            this.bq(c);
            let d;
            let e;
            let f = this.bp(c, e, d, true);
            e = f.p1;
            d = f.p2;
            let g = this.ao(c);
            let h = null;
            if (g) {
                h = c.bubbleSizes.getValues();
            }
            let i = b.c;
            for (let j = 0; j < e.length; j++) {
                let k = (typeof e[j] === 'number') ? e[j] : typeGetValue(e[j]);
                let l = (typeof d[j] === 'number') ? d[j] : typeGetValue(d[j]);
                let m = 0;
                if (g) {
                    m = (typeof h[j] === 'number') ? h[j] : typeGetValue(h[j]);
                }
                this.az.add(new SpreadsheetChartAdapter_ScatterSeriesDataItem(l, k, m, i));
            }
            a++;
        }
        return this.az;
    }
    a5() {
        if (null != this.a0) {
            return this.a0;
        }
        this.a0 = new List$1(SpreadsheetChartAdapter_SeriesDataItem.$, 0);
        let a = 0;
        for (let b of fromEnum(this.a3)) {
            let c = b.a;
            this.bq(c);
            let d;
            let e;
            let f = this.bp(c, e, d);
            e = f.p1;
            d = f.p2;
            for (let g = 0; g < e.length; g++) {
                let h = b.c;
                let i = (typeof e[g] === 'number') ? e[g] : typeGetValue(e[g]);
                let j = g < d.length ? d[g] : null;
                let k = (null == j) ? "" : j.toString();
                this.a0.add(((() => {
                    let $ret = new SpreadsheetChartAdapter_SeriesDataItem();
                    $ret.Row = k;
                    $ret.Col = h;
                    $ret.Value = i;
                    return $ret;
                })()));
            }
            a++;
        }
        return this.a0;
    }
    bp(a, b, c, d = false) {
        let e;
        let f;
        let g = a._dl(e, f);
        e = g.p0;
        f = g.p1;
        let h = e.length;
        for (let i = 0; i < h; i++) {
            let j = e[i];
            if (typeof j === 'number' || typeof j === 'number') {
                e[i] = j;
            }
            else {
                e[i] = 0;
            }
        }
        h = f.length;
        for (let k = 0; k < h; k++) {
            let l = f[k];
            if (d) {
                if (typeof l === 'number' || typeof l === 'number') {
                    f[k] = l;
                }
                else {
                    f[k] = k + 1;
                }
            }
            else {
                if (null == l || typeof l === 'string' && stringIsNullOrEmpty(l)) {
                    f[k] = k;
                }
                else {
                    f[k] = l;
                }
            }
        }
        b = e;
        c = f;
        return {
            p1: b,
            p2: c
        };
    }
    bq(a) {
    }
    br() {
        if (null != this.a7 && false == this.ai) {
            this.ai = this.ac.e(this.a7);
        }
        if (null != this.ba && false == this.am) {
            this.am = this.ac.e(this.ba);
        }
    }
    bs() {
        let a = 0;
        let b = 0;
        let c = 1;
        let d = 1;
        let e = 0;
        let f = 0;
        let g = 1;
        let h = 1;
        let i = 0;
        let j = false;
        let k = this.c.legend;
        let l = null != k ? k.position : 6;
        this.ac.t(this.f);
        if (null != this.ba) {
            this.ac.h(this.ba, this.a7);
        }
        let m = () => l == 1;
        let n = () => l == 2 || l == 4;
        let o = () => l == 3;
        let p = () => l == 0;
        if (o()) {
            l = 1;
        }
        else if (p()) {
            l = 2;
        }
        let q = new List$1(RowColLength.$, 0);
        let r = new List$1(RowColLength.$, 0);
        q.add(RowColLength.a);
        i++;
        if (o() && this.ap && false == j) {
            q.add(RowColLength.a);
            i++;
        }
        q.add(new RowColLength(2, 1, 2));
        if (p() && this.ap && false == j) {
            q.add(RowColLength.a);
        }
        if (m() && this.ap && false == j) {
            r.add(RowColLength.a);
        }
        r.add(new RowColLength(2, 1, 2));
        if (n() && this.ap && false == j) {
            r.add(RowColLength.a);
        }
        this.ac.k(this.f, Enumerable.a(RowColLength.$, q), Enumerable.a(RowColLength.$, r));
        if (this.ap) {
            switch (l) {
                case 3:
                    e = i - 1;
                    g = 1;
                    f = 0;
                    h = 1;
                    break;
                case 0:
                case 5:
                case 6:
                    e = false == j ? 2 : 1;
                    g = 1;
                    f = 0;
                    h = 1;
                    break;
                case 1:
                    e = i;
                    g = 1;
                    f = 0;
                    h = 1;
                    break;
                case 2:
                case 4:
                    e = i;
                    g = 1;
                    f = false == j ? 1 : 0;
                    h = 1;
                    break;
            }
        }
        a = 0;
        c = 1;
        b = 0;
        d = 2;
        this.ac.s(this.f, this.a7, 5, true, i, this.ap && m() && false == j ? 1 : 0);
        if (this.ap) {
            if (j) {
                let s = 0;
                switch (l) {
                    case 3:
                        s = 1;
                        break;
                    case 0:
                    case 5:
                    case 6:
                        s = 2;
                        break;
                    case 1:
                        s = 3;
                        break;
                    case 2:
                    case 4:
                        s = 4;
                        break;
                }
                this.ac.c(this.ba, this.a7, s, true);
            }
            else {
                let t = 1;
                let u = 0;
                let v = 1;
                switch (l) {
                    case 3:
                        t = 5;
                        break;
                    case 0:
                    case 5:
                        t = 5;
                        break;
                    case 1:
                        t = 0;
                        u = 4 | 8;
                        break;
                    case 2:
                        t = 0;
                        u = 4 | 8;
                        break;
                    case 4:
                        t = 0;
                        u = 4 | 8 | 1;
                        v = 0;
                        break;
                }
                this.ac.s(this.f, this.ba, t, true, e, f, g, h, 3, v, u);
            }
        }
        if (null != this.c.chartTitle) {
            if (null != this.ad) {
                if (null == this.a9) {
                    this.a9 = this.ac.n();
                }
                let w = (null != this.a9);
                if (null == this.a8) {
                    this.a8 = this.ad(this.c, null);
                    if (w) {
                        this.ac.c(this.a8, this.a9, 0);
                    }
                }
                else {
                    this.a8 = this.ad(this.c, this.a8);
                }
                if (w) {
                    this.ac.s(this.f, this.a9, 5, true, a, b, c, d);
                }
                else {
                    this.ac.s(this.f, this.a8, 5, true, a, b, c, d, 1, 3);
                }
            }
        }
    }
    bt() {
        if (null != this.ax) {
            this.ax.clear();
            this.ax = null;
        }
        if (null != this.aw) {
            this.aw.clear();
            this.aw = null;
        }
        if (null != this.a1) {
            this.a1.clear();
            this.a1 = null;
        }
        if (null != this.ay) {
            this.ay.clear();
            this.ay = null;
        }
        if (null != this.a0) {
            this.a0.clear();
            this.a0 = null;
        }
        if (null != this.az) {
            this.az.clear();
            this.az = null;
        }
        if (null != this.a2) {
            this.a2.clear();
            this.a2 = null;
        }
        if (null != this.a7) {
            this.ac.d(this.k, this.a7);
        }
        if (null != this.ba) {
            this.ac.d(this.k, this.ba);
        }
        this.aj = true;
    }
    bu() {
        this.l = null;
        this.m = null;
        this.ak = true;
    }
    bv(a = null) {
        let b = (null == a) ? this.l : a;
        if (null == b) {
            return;
        }
        if (null == this.a7) {
            return;
        }
        this.ac.x(this.k, b, this.a7);
    }
    bw() {
        if (null != this.m) {
            this.ac.x(this.k, this.m, this.ba);
        }
    }
    bx() {
        if (false == this.ap) {
            if (typeCast(SeriesViewerDescription.$, this.l) !== null) {
                this.l.legendRef = null;
            }
            return;
        }
        if (typeCast(SeriesViewerDescription.$, this.l) !== null) {
            this.l.legendRef = "legend";
        }
    }
    by(a) {
        a.background = "rgba(0, 0, 0, 0)";
        let b = SpreadsheetChartAdapterHelpers.r(this.c.plotArea._ap, this.ah);
        if (false == stringIsNullOrEmpty(b)) {
            a.plotAreaBackground = b;
        }
        else {
            b = SpreadsheetChartAdapterHelpers.r(this.c.chartArea._ap, this.ah);
            if (false == stringIsNullOrEmpty(b)) {
                a.plotAreaBackground = b;
            }
        }
    }
    bz(a, b) {
        if (!(typeCast(MarkerSeriesDescription.$, a) !== null || typeCast(StackedFragmentSeriesDescription.$, a) !== null)) {
            return;
        }
        let c = 1;
        if (typeCast(BubbleSeriesDescription.$, a) !== null) {
            c = 3;
        }
        else {
            switch (b.markerStyle) {
                case -4105:
                    c = 2;
                    break;
                case 8:
                    c = 3;
                    break;
                case -4115:
                    c = 6;
                    break;
                case 2:
                    c = 7;
                    break;
                case -4118:
                    c = 3;
                    break;
                case -4142:
                    c = 1;
                    break;
                case -4147:
                    c = 3;
                    break;
                case 9:
                    c = 10;
                    break;
                case 1:
                    c = 6;
                    break;
                case 5:
                    c = 11;
                    break;
                case 3:
                    c = 4;
                    break;
                case -4168:
                    c = 4;
                    break;
            }
        }
        if (c == 2) {
            if (typeCast(BubbleSeriesDescription.$, a) !== null && b.chartType == 87) {
                a.markerBrush = "rgba(0,162,232,1)";
                a.markerOutline = "rgba(0, 0, 0, 0)";
                return;
            }
        }
        let d = Enumerable.af(ChartSeriesInfo.$, Enumerable.u(ChartSeriesInfo.$, this.a3, (e) => e.a == b)).b;
        if (typeCast(MarkerSeriesDescription.$, a) !== null) {
            a.markerType = EnumUtil.getName(MarkerType_$type, c);
            let e = SpreadsheetChartAdapterHelpers.r(b._ar(d), this.ah);
            if (false == stringIsNullOrEmpty(e)) {
                a.markerBrush = e;
            }
            if (null != b.markerBorder) {
                e = SpreadsheetChartAdapterHelpers.r(b.markerBorder._ap, this.ah);
                if (false == stringIsNullOrEmpty(e)) {
                    a.markerOutline = e;
                }
            }
        }
        else if (typeCast(StackedFragmentSeriesDescription.$, a) !== null) {
            a.markerType = EnumUtil.getName(MarkerType_$type, c);
            let f = SpreadsheetChartAdapterHelpers.r(b._ar(d), this.ah);
            if (false == stringIsNullOrEmpty(f)) {
                a.markerBrush = f;
            }
            if (null != b.markerBorder) {
                f = SpreadsheetChartAdapterHelpers.r(b.markerBorder._ap, this.ah);
                if (false == stringIsNullOrEmpty(f)) {
                    a.markerOutline = f;
                }
            }
        }
    }
    b0(a, b) {
        let c = Enumerable.af(ChartSeriesInfo.$, Enumerable.u(ChartSeriesInfo.$, this.a3, (d) => d.a == b));
        if (null == c) {
            return;
        }
        let d = c.b;
        let e = typeCast(StackedSeriesBaseDescription.$, a) !== null;
        if (false == e) {
            if (2 == b.type) {
                if (null != b.line) {
                    let f = SpreadsheetChartAdapterHelpers.r(b._aq(d), this.ah);
                    if (false == stringIsNullOrEmpty(f)) {
                        a.brush = f;
                    }
                }
            }
            else {
                let g = SpreadsheetChartAdapterHelpers.r(b._ao(d), this.ah);
                if (false == stringIsNullOrEmpty(g)) {
                    a.brush = g;
                }
            }
        }
        if (null != b.border) {
            let h = SpreadsheetChartAdapterHelpers.r(b.border._ap, this.ah);
            if (false == stringIsNullOrEmpty(h)) {
                a.outline = h;
            }
            else {
                a.outline = "rgba(0, 0, 0, 0)";
            }
            a.thickness = SpreadsheetChartAdapterHelpers.n(b.border.widthInPoints, this.ah, false);
        }
        else {
            a.outline = "rgba(0, 0, 0, 0)";
        }
        if (null != b.line) {
            a.thickness = SpreadsheetChartAdapterHelpers.n(b.line.widthInPoints, this.c.worksheet.workbook, false);
        }
        if (false == e) {
            this.bz(a, b);
        }
        if (null != b._trendlineCollection$i && b._trendlineCollection$i.count > 0) {
            let i = b._trendlineCollection$i.item(0);
            let j = EnumUtil.getName(TrendLineType_$type, SpreadsheetChartAdapterHelpers.e(i.trendlineType, i.order));
            let k = i.period;
            let l = SpreadsheetChartAdapterHelpers.r(i.line._as(d), this.ah);
            let m = SpreadsheetChartAdapterHelpers.n(i.line.widthInPoints, this.ah, false);
            if (typeCast(AnchoredCategorySeriesDescription.$, a) !== null) {
                a.trendLineType = j;
                a.trendLinePeriod = k;
                a.trendLineBrush = l;
                a.trendLineThickness = m;
            }
            else if (typeCast(ScatterBaseDescription.$, a) !== null) {
                a.trendLineType = j;
                a.trendLinePeriod = k;
                a.trendLineBrush = l;
                a.trendLineThickness = m;
            }
            else if (typeCast(PolarBaseDescription.$, a) !== null) {
                a.trendLineType = j;
                a.trendLinePeriod = k;
                a.trendLineBrush = l;
                a.trendLineThickness = m;
            }
        }
    }
    z(a, b) {
        DataChartCategorySeriesDescriptionCoreModule.register(this.k.context);
        DataChartCategorySeriesDescriptionModule.register(this.k.context);
        DataChartVerticalCategorySeriesDescriptionModule.register(this.k.context);
        let c = null;
        switch (a.chartType) {
            case 52:
                c = new StackedColumnSeriesDescription();
                break;
            case 53:
                c = new Stacked100ColumnSeriesDescription();
                break;
            case 51:
                c = new ColumnSeriesDescription();
                break;
            case 58:
                c = new StackedBarSeriesDescription();
                break;
            case 59:
                c = new Stacked100BarSeriesDescription();
                break;
            case 57:
                c = new BarSeriesDescription();
                break;
            case 4:
            case 65:
                c = new LineSeriesDescription();
                break;
            case 63:
            case 66:
                c = new StackedLineSeriesDescription();
                break;
            case 64:
            case 67:
                c = new Stacked100LineSeriesDescription();
                break;
            case 1:
                c = new AreaSeriesDescription();
                break;
            case 76:
                c = new StackedAreaSeriesDescription();
                break;
            case 77:
                c = new Stacked100AreaSeriesDescription();
                break;
        }
        if (typeCast(StackedSeriesBaseDescription.$, c) !== null) {
            this.b2(typeCast(StackedSeriesBaseDescription.$, c));
            if (typeCast(HorizontalStackedSeriesBaseDescription.$, c) !== null) {
                c.xAxisRef = a.axisGroup == 1 ? "XAxisPrimary" : "XAxisSecondary";
                c.yAxisRef = a.axisGroup == 1 ? "YAxisPrimary" : "YAxisSecondary";
            }
            else if (typeCast(VerticalStackedSeriesBaseDescription.$, c) !== null) {
                c.xAxisRef = a.axisGroup == 1 ? "XAxisPrimary" : "XAxisSecondary";
                c.yAxisRef = a.axisGroup == 1 ? "YAxisPrimary" : "YAxisSecondary";
            }
        }
        else {
            this.bj(1);
            c.dataSourceRef = stringFormat("groupedseriesdata{0}", b);
            this.b0(c, a);
            if (typeCast(VerticalAnchoredCategorySeriesDescription.$, c) !== null) {
                c.xAxisRef = a.axisGroup == 1 ? "XAxisPrimary" : "XAxisSecondary";
                c.yAxisRef = a.axisGroup == 1 ? "YAxisPrimary" : "YAxisSecondary";
            }
            else if (typeCast(HorizontalAnchoredCategorySeriesDescription.$, c) !== null) {
                c.xAxisRef = a.axisGroup == 1 ? "XAxisPrimary" : "XAxisSecondary";
                c.yAxisRef = a.axisGroup == 1 ? "YAxisPrimary" : "YAxisSecondary";
            }
            c.valueMemberPath = "Value";
        }
        let d = Enumerable.af(ChartSeriesInfo.$, Enumerable.u(ChartSeriesInfo.$, this.a3, (e) => e.a == a));
        c.name = d.c;
        c.title = d.d;
        c.showDefaultTooltip = true;
        return c;
    }
    b1(a) {
        if (null != this.c.upDownBars) {
            a.brush = SpreadsheetChartAdapterHelpers.r(this.c.upDownBars.upBar._ad, this.ah);
            a.outline = SpreadsheetChartAdapterHelpers.r(this.c.upDownBars.upBar.border._ap, this.ah);
            a.negativeBrush = SpreadsheetChartAdapterHelpers.r(this.c.upDownBars.downBar._ad, this.ah);
            a.negativeOutline = SpreadsheetChartAdapterHelpers.r(this.c.upDownBars.downBar.border._ap, this.ah);
        }
    }
    u(a, b) {
        RingSeriesBaseDescriptionMetadata.d(this.k.context);
        RingSeriesDescriptionMetadata.d(this.k.context);
        HierarchicalRingSeriesDescriptionMetadata.d(this.k.context);
        this.bj(1);
        let c = new RingSeriesDescription();
        c.valueMemberPath = "Value";
        c.labelMemberPath = "Row";
        c.dataSourceRef = stringFormat("groupedseriesdata{0}", b);
        c.tooltipTemplateRef = "doughnutcharttooltip";
        c.brushes = SpreadsheetChartAdapterHelpers.b(a, b);
        if (b == 0) {
            c.legendRef = "legend";
        }
        return c;
    }
    aa(a, b, c) {
        DataChartCategorySeriesDescriptionCoreModule.register(this.k.context);
        DataChartCategorySeriesDescriptionModule.register(this.k.context);
        DataChartVerticalCategorySeriesDescriptionModule.register(this.k.context);
        DataChartRadialSeriesDescriptionCoreModule.register(this.k.context);
        DataChartRadialSeriesDescriptionModule.register(this.k.context);
        let d = null;
        switch (a.chartType) {
            case -4151:
            case 81:
                d = new RadialLineSeriesDescription();
                break;
            case 82:
                d = new RadialAreaSeriesDescription();
                break;
        }
        this.bj(1);
        d.dataSourceRef = stringFormat("groupedseriesdata{0}", b);
        this.b0(d, a);
        d.angleAxisRef = "CategoryAngleAxis";
        d.valueAxisRef = "NumericRadiusAxis";
        d.valueMemberPath = "Value";
        let e = Enumerable.af(ChartSeriesInfo.$, Enumerable.u(ChartSeriesInfo.$, this.a3, (f) => f.a == a));
        d.name = e.c;
        d.title = e.d;
        d.showDefaultTooltip = true;
        if (this.aq) {
            c.m(a.axisGroup == 1, this.ag);
        }
        return d;
    }
    ab(a, b, c) {
        DataChartScatterSeriesDescriptionModule.register(this.k.context);
        this.bi();
        let d = null;
        let e = a.chartType;
        if (7 == a.type) {
            d = new BubbleSeriesDescription();
        }
        else {
            switch (e) {
                case -4169:
                    d = new ScatterSeriesDescription();
                    break;
                case 74:
                case 75:
                    d = new ScatterLineSeriesDescription();
                    break;
                case 72:
                case 73:
                    d = new ScatterSplineSeriesDescription();
                    break;
            }
        }
        d.showDefaultTooltip = true;
        this.b0(d, a);
        d.name = Enumerable.af(ChartSeriesInfo.$, Enumerable.u(ChartSeriesInfo.$, this.a3, (f) => f.a == a)).c;
        d.title = Enumerable.af(ChartSeriesInfo.$, Enumerable.u(ChartSeriesInfo.$, this.a3, (f) => f.a == a)).d;
        if (this.aq) {
            d.xAxisRef = a.axisGroup == 1 ? "XAxisPrimary" : "XAxisSecondary";
            d.yAxisRef = a.axisGroup == 1 ? "YAxisPrimary" : "YAxisSecondary";
        }
        else {
            d.xAxisRef = "XAxisPrimary";
            d.yAxisRef = "YAxisSecondary";
        }
        d.dataSourceRef = stringFormat("groupedscatterseriesdata{0}", b);
        d.yMemberPath = "Y";
        d.xMemberPath = "X";
        if (7 == a.type) {
            let f = null != a.bubbleSizes && a.bubbleSizes.getValues().length != 0;
            if (f) {
                d.radiusMemberPath = "Radius";
            }
        }
        if (this.aq) {
            c.n(a.axisGroup == 1, this.ag);
        }
        let g = SpreadsheetChartAdapterHelpers.r(a._aq(b), this.ah);
        if (false == stringIsNullOrEmpty(g)) {
            d.brush = g;
        }
        g = SpreadsheetChartAdapterHelpers.r(a._ar(b), this.ah);
        if (false == stringIsNullOrEmpty(g)) {
            d.markerBrush = g;
        }
        return d;
    }
    b2(a) {
        DataChartStackedSeriesDescriptionModule.register(this.k.context);
        this.bm();
        let b = this.a3.count;
        let c = new List$1(StackedFragmentSeriesDescription.$, 0);
        for (let d = 0; d < b; d++) {
            let e = this.a3._inner[d].a;
            if (false == stringContains(EnumUtil.getName(ChartType_$type, e.chartType), "Stacked")) {
                continue;
            }
            let f = new StackedFragmentSeriesDescription();
            f.valueMemberPath = stringFormat("SeriesValues[{0}]", d.toString());
            if (2 == e.type) {
                if (null != e.line) {
                    let g = SpreadsheetChartAdapterHelpers.r(e._aq(d), this.ah);
                    if (false == stringIsNullOrEmpty(g)) {
                        f.brush = g;
                    }
                }
            }
            else {
                let h = SpreadsheetChartAdapterHelpers.r(e._ao(d), this.ah);
                if (false == stringIsNullOrEmpty(h)) {
                    f.brush = h;
                }
            }
            if (null != e.border) {
                let i = SpreadsheetChartAdapterHelpers.r(e.border._ap, this.ah);
                if (false == stringIsNullOrEmpty(i)) {
                    f.outline = i;
                }
                else {
                    f.outline = "rgba(0, 0, 0, 0)";
                }
                f.thickness = SpreadsheetChartAdapterHelpers.n(e.border.widthInPoints, this.ah, false);
            }
            else {
                f.outline = "rgba(0, 0, 0, 0)";
            }
            this.bz(f, e);
            f.name = SpreadsheetChartAdapterHelpers.v(e, d + 1) + "_stacked";
            let j = stringFormat("fragmentseriestitle{0}", d.toString());
            this.ac.g(this.k, this.a7, j, SpreadsheetChartAdapterHelpers.w(e, d + 1));
            f.titleRef = j;
            c.add(f);
        }
        a.dataSourceRef = "stackedseriesdata";
        this.b7(c);
        a.series = Enumerable.a(StackedFragmentSeriesDescription.$, c);
    }
    at(a) {
        let b;
        let c;
        let d = this.bp(a, c, b);
        c = d.p1;
        b = d.p2;
        if (null == c || c.length < 1) {
            return true;
        }
        if (null == a.values) {
            return true;
        }
        let e = true;
        c = a.values.getValues();
        for (let g = 0; g < c.length; g++) {
            let f = c[g];
            if (null != f) {
                e = false;
                break;
            }
        }
        return e;
    }
    b3(a) {
        for (let b of fromEnum(a.b)) {
            b.a.RangeChangedRef = stringEmpty();
        }
        if (a.f.count < 1 && a.g.count < 1) {
            return;
        }
        let c = (d) => {
            for (let e of fromEnum(d)) {
                if (null == e.b.majorGridLines) {
                    return false;
                }
            }
            return true;
        };
        for (let d = 0; d < 2; d++) {
            let e = null;
            let f = stringEmpty();
            if (d == 0) {
                e = a.f;
                if (e.count > 1 && c(e)) {
                    f = "syncrange_xaxis";
                }
                else {
                    continue;
                }
            }
            else {
                e = a.g;
                if (e.count > 1 && c(e)) {
                    f = "syncrange_yaxis";
                }
                else {
                    continue;
                }
            }
            e._inner[0].a.RangeChangedRef = f;
            e._inner[1].a.RangeChangedRef = f;
            let g = (h, i) => {
                let j = truncate(Math.floor(log10(h)));
                let k = h / Math.pow(10, j);
                if (i) {
                    let l = k < 1.5 ? 1 : k < 3 ? 2 : k < 7 ? 5 : 10;
                    return l * Math.pow(10, j);
                }
                else {
                    let m = k <= 1 ? 1 : k <= 2 ? 2 : k <= 5 ? 5 : 10;
                    return m * Math.pow(10, j);
                }
            };
            this.ac.w(this.k, this.a7, f, g);
        }
    }
    b4(a, b, c) {
        let d = new Dictionary$2(String_$type, Number_$type, 0);
        let e = new Dictionary$2(String_$type, Number_$type, 0);
        for (let f of fromEnum(b)) {
            let g = stringEmpty();
            let h = stringEmpty();
            if (typeCast(StackedSeriesBaseDescription.$, f) !== null) {
                if (typeCast(HorizontalStackedSeriesBaseDescription.$, f) !== null) {
                    g = f.xAxisRef;
                    h = f.yAxisRef;
                }
                else if (typeCast(VerticalStackedSeriesBaseDescription.$, f) !== null) {
                    g = f.xAxisRef;
                    h = f.yAxisRef;
                }
            }
            else if (typeCast(ScatterBaseDescription.$, f) !== null) {
                g = f.xAxisRef;
                h = f.yAxisRef;
            }
            else {
                if (typeCast(VerticalAnchoredCategorySeriesDescription.$, f) !== null) {
                    g = f.xAxisRef;
                    h = f.yAxisRef;
                }
                else if (typeCast(HorizontalAnchoredCategorySeriesDescription.$, f) !== null) {
                    g = f.xAxisRef;
                    h = f.yAxisRef;
                }
            }
            if (false == d.containsKey(g)) {
                d.addItem(g, 1.7976931348623157E+308);
            }
            if (false == d.containsKey(h)) {
                d.addItem(h, 1.7976931348623157E+308);
            }
            if (false == e.containsKey(g)) {
                e.addItem(g, -1.7976931348623157E+308);
            }
            if (false == e.containsKey(h)) {
                e.addItem(h, -1.7976931348623157E+308);
            }
            let i = c.item(f);
            let j = 1.7976931348623157E+308;
            let k = -1.7976931348623157E+308;
            let l;
            let m;
            let n = this.bp(i, m, l);
            m = n.p1;
            l = n.p2;
            for (let p = 0; p < m.length; p++) {
                let o = m[p];
                if (typeof o === 'number') {
                    let q = Convert.toDouble3(o);
                    j = Math.min(j, q);
                    k = Math.max(k, q);
                }
            }
            let r = d.item(g);
            d.item(g, Math.min(j, r));
            r = d.item(h);
            d.item(h, Math.min(j, r));
            r = e.item(g);
            e.item(g, Math.max(k, r));
            r = e.item(h);
            e.item(h, Math.max(k, r));
        }
        let s = -1.7976931348623157E+308;
        let t = 1.7976931348623157E+308;
        let u = -1.7976931348623157E+308;
        let v = 1.7976931348623157E+308;
        let w = 0;
        let x = 0;
        for (let y of fromEnum(a.b)) {
            if (typeCast(StraightNumericAxisBaseDescription.$, y.a) !== null) {
                if (y.b.minimumScaleIsAuto) {
                    let z = Math.floor(d.item(y.a.name));
                    y.a.minimumValue = z;
                    if (y.j) {
                        x++;
                        v = Math.min(v, z);
                    }
                    else {
                        w++;
                        t = Math.min(t, z);
                    }
                }
                if (y.b.maximumScaleIsAuto) {
                    let aa = Math.ceil(e.item(y.a.name));
                    y.a.maximumValue = aa;
                    if (y.j) {
                        x++;
                        u = Math.max(u, aa);
                    }
                    else {
                        w++;
                        s = Math.max(s, aa);
                    }
                }
            }
        }
        let ab = (ac, ad, ae) => {
            let af = Math.abs(ae - ad);
            return (af / (ad - ac)) <= 0.1;
        };
        let ac = (ad, ae, af) => {
            let ag = Math.abs(af - ad);
            return (ag / (ae - ad)) <= 0.1;
        };
        for (let ad of fromEnum(a.b)) {
            if (typeCast(StraightNumericAxisBaseDescription.$, ad.a) !== null) {
                if (ad.b.minimumScaleIsAuto) {
                    if (ad.j) {
                        if (x > 1) {
                            let ae = ad.a.minimumValue;
                            if (ae != v && ac(v, u, ae)) {
                                ad.a.minimumValue = v;
                            }
                        }
                    }
                    else {
                        if (w > 1) {
                            let af = ad.a.minimumValue;
                            if (af != t && ac(t, s, af)) {
                                ad.a.minimumValue = t;
                            }
                        }
                    }
                }
                if (ad.b.maximumScaleIsAuto) {
                    if (ad.j) {
                        if (x > 1) {
                            let ag = ad.a.maximumValue;
                            if (ag != v && ab(v, u, ag)) {
                                ad.a.maximumValue = u;
                            }
                        }
                    }
                    else {
                        if (w > 1) {
                            let ah = ad.a.maximumValue;
                            if (ah != t && ac(t, s, ah)) {
                                ad.a.maximumValue = s;
                            }
                        }
                    }
                }
            }
        }
    }
    b5() {
        if (false == this.ae._e.contains(this.c.chartType)) {
        }
    }
    au(a, b, c) {
        let d = 0;
        let e = 0;
        let f = 0;
        for (let g of fromEnum(this.c._axisCollection$i)) {
            if (g.type == 1 && g.visible) {
                d++;
            }
            else if (g.axisGroup == 1 && g.visible) {
                e++;
            }
            else if (g.axisGroup == 2 && g.visible) {
                f++;
            }
        }
        return d == a && e == b && f == c;
    }
    b6(a) {
        let b = new HashSet$1(String_$type, 0);
        for (let c of fromEnum(a)) {
            let d = c.name;
            while (b.contains(d)) {
                d = c.name + this.ag.e().toString();
            }
            b.add_1(d);
            if (c.name != d) {
                c.name = d;
            }
        }
    }
    b7(a) {
        let b = new HashSet$1(String_$type, 0);
        for (let c of fromEnum(a)) {
            let d = c.name;
            while (b.contains(d)) {
                d = c.name + this.ag.e().toString();
            }
            b.add_1(d);
            if (c.name != d) {
                c.name = d;
            }
        }
    }
}
SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.$t = markType(SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate, 'SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate', SpreadsheetChartElementInfo.$);
//# sourceMappingURL=SpreadsheetChartAdapter_combined.js.map
