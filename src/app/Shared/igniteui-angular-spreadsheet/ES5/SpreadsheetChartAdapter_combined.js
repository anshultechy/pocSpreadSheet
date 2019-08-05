/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { SpreadsheetChartAdapterBase } from "igniteui-angular-spreadsheet/ES5/SpreadsheetChartAdapterBase";
import { ChartType_$type, Series, ChartEmptyFill, SeriesType_$type } from "../../igniteui-angular-excel/ES5/excel.core";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { SpreadsheetChartElementInfo } from "igniteui-angular-spreadsheet/ES5/SpreadsheetChartElementInfo";
import { markType, IDisposable_$type, NotSupportedException, runOn, typeCast, EnumUtil, String_$type, fromEnum, typeGetValue, Number_$type } from "../../igniteui-angular-core/ES5/type";
import { Localization } from "../../igniteui-angular-core/ES5/Localization";
import { stringIsNullOrEmpty, stringContains, stringEmpty } from "../../igniteui-angular-core/ES5/string";
import { stringFormat1, stringFormat } from "../../igniteui-angular-core/ES5/stringExtended";
import { SpreadsheetChartAdapterState } from "./SpreadsheetChartAdapterState";
import { ComponentRenderer } from "../../igniteui-angular-core/ES5/ComponentRenderer";
import { ChartElementPlatformHelper } from "./ChartElementPlatformHelper";
import { ChartSeriesInfo } from "./ChartSeriesInfo";
import { SeriesDescription } from "../../igniteui-angular-core/ES5/SeriesDescription";
import { Dictionary$2 } from "../../igniteui-angular-core/ES5/Dictionary$2";
import { SpreadsheetChartAdapter_ScatterSeriesDataItem } from "./SpreadsheetChartAdapter_ScatterSeriesDataItem";
import { Enumerable } from "../../igniteui-angular-core/ES5/Enumerable";
import { SpreadsheetChartAdapter_SeriesDataItem } from "./SpreadsheetChartAdapter_SeriesDataItem";
import { HashSet$1 } from "../../igniteui-angular-core/ES5/HashSet$1";
import { SpreadsheetChartAdapterHelpers } from "./SpreadsheetChartAdapterHelpers";
import { SpreadsheetChartAdapter_PieDataItem } from "./SpreadsheetChartAdapter_PieDataItem";
import { SpreadsheetChartAdapter_StackedSeriesDataItem } from "./SpreadsheetChartAdapter_StackedSeriesDataItem";
import { Convert } from "../../igniteui-angular-core/ES5/Convert";
import { SpreadsheetChartAdapter_StockDataItem } from "./SpreadsheetChartAdapter_StockDataItem";
import { DataChartDescription } from "../../igniteui-angular-core/ES5/DataChartDescription";
import { AxisInfos } from "./AxisInfos";
import { DataChartCategorySeriesDescriptionCoreModule } from "../../igniteui-angular-core/ES5/DataChartCategorySeriesDescriptionCoreModule";
import { DataChartCategorySeriesDescriptionModule } from "../../igniteui-angular-core/ES5/DataChartCategorySeriesDescriptionModule";
import { DataChartVerticalCategorySeriesDescriptionModule } from "../../igniteui-angular-core/ES5/DataChartVerticalCategorySeriesDescriptionModule";
import { HorizontalAnchoredCategorySeriesDescription } from "../../igniteui-angular-core/ES5/HorizontalAnchoredCategorySeriesDescription";
import { SeriesViewerDescription } from "../../igniteui-angular-core/ES5/SeriesViewerDescription";
import { DoughnutChartDescription } from "../../igniteui-angular-core/ES5/DoughnutChartDescription";
import { RingSeriesDescription } from "../../igniteui-angular-core/ES5/RingSeriesDescription";
import { DoughnutChartDescriptionMetadata } from "../../igniteui-angular-core/ES5/DoughnutChartDescriptionMetadata";
import { LegendDescriptionModule } from "../../igniteui-angular-core/ES5/LegendDescriptionModule";
import { ItemLegendDescription } from "../../igniteui-angular-core/ES5/ItemLegendDescription";
import { LegendDescription } from "../../igniteui-angular-core/ES5/LegendDescription";
import { PieChartDescription } from "../../igniteui-angular-core/ES5/PieChartDescription";
import { PieChartDescriptionModule } from "../../igniteui-angular-core/ES5/PieChartDescriptionModule";
import { NumericYAxisDescription } from "../../igniteui-angular-core/ES5/NumericYAxisDescription";
import { DataChartFinancialSeriesDescriptionModule } from "../../igniteui-angular-core/ES5/DataChartFinancialSeriesDescriptionModule";
import { CategoryXAxisDescription } from "../../igniteui-angular-core/ES5/CategoryXAxisDescription";
import { LineSeriesDescription } from "../../igniteui-angular-core/ES5/LineSeriesDescription";
import { AnchoredCategorySeriesDescription } from "../../igniteui-angular-core/ES5/AnchoredCategorySeriesDescription";
import { ColumnSeriesDescription } from "../../igniteui-angular-core/ES5/ColumnSeriesDescription";
import { FinancialPriceSeriesDescription } from "../../igniteui-angular-core/ES5/FinancialPriceSeriesDescription";
import { PriceDisplayType_$type } from "igniteui-angular-charts/ES5/PriceDisplayType";
import { RowColLength } from "./RowColLength";
import { MarkerType_$type } from "igniteui-angular-charts/ES5/MarkerType";
import { MarkerSeriesDescription } from "../../igniteui-angular-core/ES5/MarkerSeriesDescription";
import { StackedFragmentSeriesDescription } from "../../igniteui-angular-core/ES5/StackedFragmentSeriesDescription";
import { BubbleSeriesDescription } from "../../igniteui-angular-core/ES5/BubbleSeriesDescription";
import { TrendLineType_$type } from "../../igniteui-angular-core/ES5/TrendLineType";
import { StackedSeriesBaseDescription } from "../../igniteui-angular-core/ES5/StackedSeriesBaseDescription";
import { ScatterBaseDescription } from "../../igniteui-angular-core/ES5/ScatterBaseDescription";
import { PolarBaseDescription } from "../../igniteui-angular-core/ES5/PolarBaseDescription";
import { StackedColumnSeriesDescription } from "../../igniteui-angular-core/ES5/StackedColumnSeriesDescription";
import { Stacked100ColumnSeriesDescription } from "../../igniteui-angular-core/ES5/Stacked100ColumnSeriesDescription";
import { StackedBarSeriesDescription } from "../../igniteui-angular-core/ES5/StackedBarSeriesDescription";
import { Stacked100BarSeriesDescription } from "../../igniteui-angular-core/ES5/Stacked100BarSeriesDescription";
import { BarSeriesDescription } from "../../igniteui-angular-core/ES5/BarSeriesDescription";
import { StackedLineSeriesDescription } from "../../igniteui-angular-core/ES5/StackedLineSeriesDescription";
import { Stacked100LineSeriesDescription } from "../../igniteui-angular-core/ES5/Stacked100LineSeriesDescription";
import { AreaSeriesDescription } from "../../igniteui-angular-core/ES5/AreaSeriesDescription";
import { StackedAreaSeriesDescription } from "../../igniteui-angular-core/ES5/StackedAreaSeriesDescription";
import { Stacked100AreaSeriesDescription } from "../../igniteui-angular-core/ES5/Stacked100AreaSeriesDescription";
import { HorizontalStackedSeriesBaseDescription } from "../../igniteui-angular-core/ES5/HorizontalStackedSeriesBaseDescription";
import { VerticalStackedSeriesBaseDescription } from "../../igniteui-angular-core/ES5/VerticalStackedSeriesBaseDescription";
import { VerticalAnchoredCategorySeriesDescription } from "../../igniteui-angular-core/ES5/VerticalAnchoredCategorySeriesDescription";
import { RingSeriesBaseDescriptionMetadata } from "../../igniteui-angular-core/ES5/RingSeriesBaseDescriptionMetadata";
import { RingSeriesDescriptionMetadata } from "../../igniteui-angular-core/ES5/RingSeriesDescriptionMetadata";
import { HierarchicalRingSeriesDescriptionMetadata } from "../../igniteui-angular-core/ES5/HierarchicalRingSeriesDescriptionMetadata";
import { DataChartRadialSeriesDescriptionCoreModule } from "../../igniteui-angular-core/ES5/DataChartRadialSeriesDescriptionCoreModule";
import { DataChartRadialSeriesDescriptionModule } from "../../igniteui-angular-core/ES5/DataChartRadialSeriesDescriptionModule";
import { RadialLineSeriesDescription } from "../../igniteui-angular-core/ES5/RadialLineSeriesDescription";
import { RadialAreaSeriesDescription } from "../../igniteui-angular-core/ES5/RadialAreaSeriesDescription";
import { DataChartScatterSeriesDescriptionModule } from "../../igniteui-angular-core/ES5/DataChartScatterSeriesDescriptionModule";
import { ScatterSeriesDescription } from "../../igniteui-angular-core/ES5/ScatterSeriesDescription";
import { ScatterLineSeriesDescription } from "../../igniteui-angular-core/ES5/ScatterLineSeriesDescription";
import { ScatterSplineSeriesDescription } from "../../igniteui-angular-core/ES5/ScatterSplineSeriesDescription";
import { DataChartStackedSeriesDescriptionModule } from "../../igniteui-angular-core/ES5/DataChartStackedSeriesDescriptionModule";
import { StraightNumericAxisBaseDescription } from "../../igniteui-angular-core/ES5/StraightNumericAxisBaseDescription";
import { truncate, log10 } from "../../igniteui-angular-core/ES5/number";
/**
 * Creates and initializes chart elements for the spreadsheet based on a [[WorksheetChart]] instance.
 */
var SpreadsheetChartAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetChartAdapter, _super);
    function SpreadsheetChartAdapter() {
        var _this = _super.call(this) || this;
        _this._d = null;
        /**
         * @hidden
         */
        _this._e = null;
        /**
         * @hidden
         */
        _this._c = null;
        _this._e = new List$1(ChartType_$type, 1, [1, 76, 77, 57, 58, 59, 15, 87, 51, 52, 53, 113, -4120, 80, 4, 63, 64, 65, 66, 67, 5, -4102, 70, 69, -4151, 82, 81, 88, 89, 90, 91, -4169, 74, 75, 72, 73]);
        return _this;
    }
    /**
     * @hidden
     */
    SpreadsheetChartAdapter.prototype._a = function (a, b) {
        this._c = b;
        var c = function (d, e) { return b._v.createChartTitleElement(d.chartTitle, e); };
        return this._d = new SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate(this, a, c);
    };
    /**
     * @hidden
     */
    SpreadsheetChartAdapter.prototype._b = function (a) {
        return this._e.contains(a.chartType);
    };
    /**
     * @hidden
     */
    SpreadsheetChartAdapter.prototype._s = function (a) {
        var b = [];
        for (var _0 = 1; _0 < arguments.length; _0++) {
            b[_0 - 1] = arguments[_0];
        }
        var c;
        c = Localization.c.apply(Localization, tslib_1.__spread(["spreadsheetchartadapter", a], b));
        if (!stringIsNullOrEmpty(c) && b != null && b.length > 0) {
            c = stringFormat1.apply(void 0, tslib_1.__spread([c], b));
        }
        return c;
        return "GetResourceString not Implemented!!!!!!";
    };
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
    return SpreadsheetChartAdapter;
}(SpreadsheetChartAdapterBase));
export { SpreadsheetChartAdapter };
/**
 * @hidden
 */
var SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate, _super);
    function SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate(a, b, c) {
        var _this = _super.call(this) || this;
        _this.ae = null;
        _this.a7 = null;
        _this.ai = false;
        _this.ba = null;
        _this.am = false;
        _this.k = null;
        _this.l = null;
        _this.m = null;
        _this.aj = false;
        _this.ak = false;
        _this.a0 = null;
        _this.ax = null;
        _this.az = null;
        _this.aw = null;
        _this.a1 = null;
        _this.ay = null;
        _this.a2 = null;
        _this.bc = null;
        _this.bb = null;
        _this.af = null;
        _this.al = false;
        _this.av = null;
        _this.a6 = -1;
        _this.ad = null;
        _this.a8 = null;
        _this.a9 = null;
        _this.ac = null;
        _this.ah = null;
        _this.ac = new ChartElementPlatformHelper(a._c, runOn(_this, _this.br));
        _this.ae = a;
        _this.c = b;
        _this.ad = c;
        _this.f = _this.ac.p();
        _this.ad = c;
        _this.k = new ComponentRenderer();
        _this.aj = true;
        _this.ak = true;
        _this.ah = _this.c.worksheet.workbook;
        _this.bg();
        return _this;
    }
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.h = function () {
        if (null != this.a7 && typeCast(IDisposable_$type, this.a7) !== null) {
            this.a7.dispose();
        }
        if (null != this.ba && typeCast(IDisposable_$type, this.ba) !== null) {
            this.ba.dispose();
        }
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.i = function () {
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.e = function (a, b, c) {
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
    };
    Object.defineProperty(SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype, "ag", {
        get: function () {
            if (null == this.af) {
                this.af = new SpreadsheetChartAdapterState(this.c, this.a7, this.ba, this.k, this.ac);
            }
            return this.af;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype, "a3", {
        get: function () {
            return this.av;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype, "ap", {
        get: function () {
            return (null != this.c.legend && null != this.m && null != this.ba);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype, "aq", {
        get: function () {
            return 113 == this.c.chartType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype, "as", {
        get: function () {
            switch (this.c.chartType) {
                case 88:
                case 89:
                case 90:
                case 91: return true;
                default: return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype, "ar", {
        get: function () {
            return stringContains(EnumUtil.getName(ChartType_$type, this.c.chartType), "Stacked");
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.bd = function () {
        var _this = this;
        if (null == this.a7) {
            this.a7 = ((function () { var a = _this.ac.o(_this.ai); _this.ai = a.p0; return a.ret; })());
        }
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.bf = function () {
        var _this = this;
        if (null != this.c.legend) {
            if (null == this.ba) {
                this.ba = ((function () { var a = _this.ac.o(_this.am); _this.am = a.p0; return a.ret; })());
            }
        }
        else if (null != this.ba) {
            this.ac.h(this.ba, this.f);
            if (null != this.a7) {
                this.ac.h(this.ba, this.a7);
            }
            this.ba = null;
        }
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.be = function (a, b, c, d, e, f, g, h, i) {
        if (i === void 0) { i = null; }
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
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.bg = function () {
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
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.an = function (a) {
        if (a === void 0) { a = true; }
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
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.bi = function () {
        var e_1, _0;
        if (false == this.aj) {
            return;
        }
        this.az = this.a4();
        var a = new Dictionary$2(String_$type, List$1.$.specialize(SpreadsheetChartAdapter_ScatterSeriesDataItem.$), 0);
        try {
            for (var _1 = tslib_1.__values(fromEnum(this.az)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var b = _2.value;
                var c = b.SeriesName;
                if (a.containsKey(c)) {
                    a.item(c).add(b);
                }
                else {
                    a.item(c, new List$1(SpreadsheetChartAdapter_ScatterSeriesDataItem.$, 0));
                    a.item(c).add(b);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        for (var d = 0; d < a.values.count; d++) {
            var e = stringFormat("groupedscatterseriesdata{0}", d.toString());
            this.ac.g(this.k, this.a7, e, Enumerable.z(List$1.$.specialize(SpreadsheetChartAdapter_ScatterSeriesDataItem.$), a.values)._inner[d].toArray());
        }
        this.aw = Enumerable.z(List$1.$.specialize(SpreadsheetChartAdapter_ScatterSeriesDataItem.$), a.values);
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.bj = function (a) {
        var e_2, _0;
        if (a === void 0) { a = 0; }
        if (false == this.aj) {
            return;
        }
        this.a0 = this.a5();
        var b = new Dictionary$2(String_$type, List$1.$.specialize(SpreadsheetChartAdapter_SeriesDataItem.$), 0);
        try {
            for (var _1 = tslib_1.__values(fromEnum(this.a0)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var c = _2.value;
                var d = (a == 0) ? c.Row : c.Col;
                if (b.containsKey(d)) {
                    b.item(d).add(c);
                }
                else {
                    b.item(d, new List$1(SpreadsheetChartAdapter_SeriesDataItem.$, 0));
                    b.item(d).add(c);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        for (var e = 0; e < b.values.count; e++) {
            var f = stringFormat("groupedseriesdata{0}", e.toString());
            this.ac.g(this.k, this.a7, f, Enumerable.z(List$1.$.specialize(SpreadsheetChartAdapter_SeriesDataItem.$), b.values)._inner[e].toArray());
        }
        this.ax = Enumerable.z(List$1.$.specialize(SpreadsheetChartAdapter_SeriesDataItem.$), b.values);
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.bh = function () {
        var e_3, _0;
        this.av = new List$1(ChartSeriesInfo.$, 0);
        var a = new HashSet$1(String_$type, 0);
        var b = 0;
        var _loop_1 = function (c) {
            if (false == this_1.at(c)) {
                var d = SpreadsheetChartAdapterHelpers.v(c, b + 1);
                var e_4 = d;
                while (a.contains(e_4)) {
                    e_4 = d + this_1.ag.e().toString();
                }
                a.add_1(e_4);
                var f_1 = SpreadsheetChartAdapterHelpers.w(c, b + 1);
                this_1.av.add(((function () {
                    var $ret = new ChartSeriesInfo();
                    $ret.a = c;
                    $ret.c = e_4;
                    $ret.d = f_1;
                    $ret.b = b;
                    return $ret;
                })()));
                b++;
            }
        };
        var this_1 = this;
        try {
            for (var _1 = tslib_1.__values(fromEnum(this.c._seriesCollection$i)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var c = _2.value;
                _loop_1(c);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.bl = function () {
        var e_5, _0, e_6, _1;
        if (false == this.aj) {
            return;
        }
        this.a0 = this.a5();
        var a = new Dictionary$2(String_$type, List$1.$.specialize(SpreadsheetChartAdapter_SeriesDataItem.$), 0);
        try {
            for (var _2 = tslib_1.__values(fromEnum(this.a0)), _3 = _2.next(); !_3.done; _3 = _2.next()) {
                var b = _3.value;
                var c = b.Row;
                if (a.containsKey(c)) {
                    a.item(c).add(b);
                }
                else {
                    a.item(c, new List$1(SpreadsheetChartAdapter_SeriesDataItem.$, 0));
                    a.item(c).add(b);
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_3 && !_3.done && (_0 = _2.return)) _0.call(_2);
            }
            finally { if (e_5) throw e_5.error; }
        }
        var d = Enumerable.z(List$1.$.specialize(SpreadsheetChartAdapter_SeriesDataItem.$), a.values);
        this.ay = new List$1(SpreadsheetChartAdapter_PieDataItem.$, 0);
        var _loop_2 = function (e) {
            var f = ((function () {
                var $ret = new SpreadsheetChartAdapter_PieDataItem();
                $ret.CategoryName = e._inner[0].Row;
                $ret.Value = e._inner[0].Value;
                $ret.SeriesName = e._inner[0].Col;
                return $ret;
            })());
            this_2.ay.add(f);
        };
        var this_2 = this;
        try {
            for (var _4 = tslib_1.__values(fromEnum(d)), _5 = _4.next(); !_5.done; _5 = _4.next()) {
                var e = _5.value;
                _loop_2(e);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_5 && !_5.done && (_1 = _4.return)) _1.call(_4);
            }
            finally { if (e_6) throw e_6.error; }
        }
        this.ac.g(this.k, this.a7, "piedata", this.ay.toArray());
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.bk = function () {
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
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.bm = function () {
        var e_7, _0;
        if (false == this.aj) {
            return;
        }
        this.a1 = new List$1(SpreadsheetChartAdapter_StackedSeriesDataItem.$, 0);
        var a;
        var b;
        var c = this.bp(this.a3._inner[0].a, b, a);
        b = c.p1;
        a = c.p2;
        var d = a.length;
        var e = b.length;
        var f = 0;
        var g = this.a3.count;
        var h = ((function () {
            var $firstRank;
            var $ret = new Array($firstRank = d);
            var $currRet = $ret;
            for (var $rankInit = 0; $rankInit < $firstRank; $rankInit++) {
                $currRet[$rankInit] = new Array(g);
            }
            return $ret;
        })());
        for (var i = 0; i < d; i++) {
            var j = 0;
            try {
                for (var _1 = tslib_1.__values(fromEnum(this.a3)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                    var k = _2.value;
                    var l = void 0;
                    var m = void 0;
                    var n = this.bp(k.a, m, l);
                    m = n.p1;
                    l = n.p2;
                    h[f][j] = Convert.toDouble3(m[f]);
                    j++;
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
                }
                finally { if (e_7) throw e_7.error; }
            }
            f++;
        }
        f = 0;
        var _loop_3 = function (o) {
            var e_8, _0;
            var p = new Array(g);
            var q = new Array(g);
            var r = 0;
            try {
                for (var _1 = tslib_1.__values(fromEnum(this_3.a3)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                    var s = _2.value;
                    p[r] = Convert.toDouble3(h[f][r]);
                    q[r] = s.c;
                    r++;
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
                }
                finally { if (e_8) throw e_8.error; }
            }
            var t = ((function () {
                var $ret = new SpreadsheetChartAdapter_StackedSeriesDataItem();
                $ret.CategoryName = a[o].toString();
                $ret.SeriesValues = p;
                $ret.SeriesNames = q;
                return $ret;
            })());
            this_3.a1.add(t);
            f++;
        };
        var this_3 = this;
        for (var o = 0; o < d; o++) {
            _loop_3(o);
        }
        this.ac.g(this.k, this.a7, "stackedseriesdata", this.a1.toArray());
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.bn = function () {
        var e_9, _0, e_10, _1;
        if (false == this.aj) {
            return;
        }
        this.a2 = new List$1(SpreadsheetChartAdapter_StockDataItem.$, 0);
        this.a0 = this.a5();
        var a = this.c.chartType;
        var b = stringEmpty();
        var c = null;
        var d = -1;
        var e = new Dictionary$2(String_$type, SpreadsheetChartAdapter_StockDataItem.$, 0);
        var _loop_4 = function (f) {
            if (false == e.containsKey(f.Row)) {
                c = ((function () {
                    var $ret = new SpreadsheetChartAdapter_StockDataItem();
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
        };
        try {
            for (var _2 = tslib_1.__values(fromEnum(this.a0)), _3 = _2.next(); !_3.done; _3 = _2.next()) {
                var f = _3.value;
                _loop_4(f);
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (_3 && !_3.done && (_0 = _2.return)) _0.call(_2);
            }
            finally { if (e_9) throw e_9.error; }
        }
        try {
            for (var _4 = tslib_1.__values(fromEnum(e.values)), _5 = _4.next(); !_5.done; _5 = _4.next()) {
                var g = _5.value;
                this.a2.add(g);
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_5 && !_5.done && (_1 = _4.return)) _1.call(_4);
            }
            finally { if (e_10) throw e_10.error; }
        }
        this.ac.g(this.k, this.a7, "stockdata", this.a2.toArray());
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.n = function () {
        var e_11, _0, e_12, _1, e_13, _2, e_14, _3;
        this.ac.u("datachart");
        DataChartCategorySeriesDescriptionCoreModule.register(this.k.context);
        DataChartCategorySeriesDescriptionModule.register(this.k.context);
        DataChartVerticalCategorySeriesDescriptionModule.register(this.k.context);
        var a = new DataChartDescription();
        var b = new AxisInfos();
        try {
            for (var _4 = tslib_1.__values(fromEnum(this.c._axisCollection$i)), _5 = _4.next(); !_5.done; _5 = _4.next()) {
                var c = _5.value;
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
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (_5 && !_5.done && (_0 = _4.return)) _0.call(_4);
            }
            finally { if (e_11) throw e_11.error; }
        }
        var d = new List$1(SeriesDescription.$, 0);
        var e = 0;
        var f = false;
        var g = 0;
        var h = new Dictionary$2(Series.$, SeriesDescription.$, 0);
        var i = new Dictionary$2(SeriesDescription.$, Series.$, 0);
        try {
            for (var _6 = tslib_1.__values(fromEnum(this.a3)), _7 = _6.next(); !_7.done; _7 = _6.next()) {
                var j = _7.value;
                var k = j.a;
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
                var l = typeCast(SeriesDescription.$, this.q(k, e, b));
                if (null != l) {
                    d.add(l);
                    h.addItem(k, l);
                    i.addItem(l, k);
                    if (stringContains(EnumUtil.getName(ChartType_$type, k.chartType), "Stacked")) {
                        try {
                            for (var _8 = tslib_1.__values(fromEnum(b.b)), _9 = _8.next(); !_9.done; _9 = _8.next()) {
                                var m = _9.value;
                                if (m.d) {
                                    m.a.label = "CategoryName";
                                    m.a.dataSourceRef = "stackedseriesdata";
                                }
                            }
                        }
                        catch (e_13_1) { e_13 = { error: e_13_1 }; }
                        finally {
                            try {
                                if (_9 && !_9.done && (_2 = _8.return)) _2.call(_8);
                            }
                            finally { if (e_13) throw e_13.error; }
                        }
                    }
                }
                else {
                    throw new NotSupportedException(1, this.ae._s("Error_UnsupportedSeriesType", EnumUtil.getName(SeriesType_$type, k.type)));
                }
                e++;
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_7 && !_7.done && (_1 = _6.return)) _1.call(_6);
            }
            finally { if (e_12) throw e_12.error; }
        }
        if (this.aq && f) {
            try {
                for (var _10 = tslib_1.__values(fromEnum(h.keys)), _11 = _10.next(); !_11.done; _11 = _10.next()) {
                    var n = _11.value;
                    if (false == SpreadsheetChartAdapterHelpers.k(n)) {
                        var o = h.item(n);
                        if (typeCast(HorizontalAnchoredCategorySeriesDescription.$, o) !== null && o.xAxisRef == "XAxisSecondary") {
                            o.xAxisRef = "XAxisPrimary";
                            o.yAxisRef = "YAxisPrimary";
                        }
                    }
                }
            }
            catch (e_14_1) { e_14 = { error: e_14_1 }; }
            finally {
                try {
                    if (_11 && !_11.done && (_3 = _10.return)) _3.call(_10);
                }
                finally { if (e_14) throw e_14.error; }
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
        var p = "GetDVDataChart1";
        return a;
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.o = function () {
        var e_15, _0;
        this.ac.u("doughnutchart");
        DoughnutChartDescriptionMetadata.d(this.k.context);
        var a = new DoughnutChartDescription();
        this.bb = "Series '{Col}' Point '{Row}' Value: {Value}";
        this.ac.g(this.k, this.a7, "doughnutcharttooltip", this.bb);
        var b = 0;
        var c = new List$1(RingSeriesDescription.$, 0);
        try {
            for (var _1 = tslib_1.__values(fromEnum(this.a3)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var d = _2.value;
                var e = d.a;
                if (null == e.values || e.values.getValues().length < 1) {
                    b++;
                    continue;
                }
                var f = typeCast(RingSeriesDescription.$, this.q(e, b, null));
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
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_15) throw e_15.error; }
        }
        a.innerExtent = this.c.doughnutHoleSize;
        a.series = Enumerable.a(RingSeriesDescription.$, c);
        var g = SpreadsheetChartAdapterHelpers.r(this.c.plotArea._ap, this.ah);
        if (false == stringIsNullOrEmpty(g)) {
            a.background = g;
        }
        else {
            a.background = "rgba(0, 0, 0, 0)";
        }
        return a;
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.bo = function () {
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
        var a = SpreadsheetChartAdapterHelpers.r(this.c.legend._af, this.ah);
        if (false == stringIsNullOrEmpty(a)) {
            this.m.background = a;
        }
        else {
            this.m.background = "rgba(0, 0, 0, 0)";
        }
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.p = function () {
        this.ac.u("piechart");
        PieChartDescriptionModule.register(this.k.context);
        this.bl();
        var a = new PieChartDescription();
        a.dataSourceRef = "piedata";
        a.valueMemberPath = "Value";
        a.labelMemberPath = "CategoryName";
        a.legendRef = "legend";
        a.startAngle = Math.max(-360, this.c.firstSliceAngle - 90);
        this.bc = "Series '{SeriesName}' Point '{CategoryName}' Value: {Value}";
        this.ac.g(this.k, this.a7, "piecharttooltip", this.bc);
        a.tooltipTemplateRef = "piecharttooltip";
        if (this.a3.count > 0) {
            var b_1 = 0;
            var c_1 = this.a3._inner[b_1].a;
            a.brushes = SpreadsheetChartAdapterHelpers.b(c_1, b_1);
            var d_1 = 0;
            a.explodedSlices = ((function () { var e = SpreadsheetChartAdapterHelpers.a(c_1, b_1, d_1); d_1 = e.p2; return e.ret; })());
            a.explodedRadius = Math.max(d_1, c_1.explosion) / 100;
            a.othersCategoryThreshold = -1.7976931348623157E+308;
        }
        var e = SpreadsheetChartAdapterHelpers.r(this.c.plotArea._ap, this.ah);
        if (false == stringIsNullOrEmpty(e)) {
            a.background = e;
        }
        else {
            a.background = "rgba(0, 0, 0, 0)";
        }
        return a;
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.q = function (a, b, c) {
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
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.r = function () {
        if (!this.as) {
            return null;
        }
        this.ac.u("datachart");
        DataChartFinancialSeriesDescriptionModule.register(this.k.context);
        DataChartCategorySeriesDescriptionModule.register(this.k.context);
        var a = null;
        this.bn();
        switch (this.c.chartType) {
            case 88:
                {
                    if (false == this.au(1, 1, 0)) {
                        throw new NotSupportedException(1, this.ae._s("Error_InvalidAxesCountOrTypeForChartType", EnumUtil.getName(ChartType_$type, this.c.chartType)));
                    }
                    a = new DataChartDescription();
                    var b = this.j(SpreadsheetChartAdapterHelpers.j(0, this.c._axisCollection$i, this.ag));
                    var c = this.s(SpreadsheetChartAdapterHelpers.j(1, this.c._axisCollection$i, this.ag));
                    a.axes = [b, c];
                    var d = new List$1(SeriesDescription.$, 0);
                    d.add(this.w(b.name, c.name));
                    var e = this.a3.count > 0 ? this.a3._inner[0].a : null;
                    var f = this.a3.count > 1 ? this.a3._inner[1].a : null;
                    var g = this.a3.count > 2 ? this.a3._inner[2].a : null;
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
                    var h = this.j(SpreadsheetChartAdapterHelpers.j(0, this.c._axisCollection$i, this.ag));
                    var i = this.s(SpreadsheetChartAdapterHelpers.j(1, this.c._axisCollection$i, this.ag));
                    a.axes = [h, i];
                    var j = new List$1(SeriesDescription.$, 0);
                    j.add(this.x(h.name, i.name));
                    var k = this.a3.count > 0 ? this.a3._inner[0].a : null;
                    var l = this.a3.count > 1 ? this.a3._inner[1].a : null;
                    var m = this.a3.count > 2 ? this.a3._inner[2].a : null;
                    var n = this.a3.count > 3 ? this.a3._inner[3].a : null;
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
                    var o = this.j(SpreadsheetChartAdapterHelpers.j(0, this.c._axisCollection$i, this.ag));
                    var p = this.s(SpreadsheetChartAdapterHelpers.j(1, this.c._axisCollection$i, this.ag));
                    var q = this.t(SpreadsheetChartAdapterHelpers.j(3, this.c._axisCollection$i, this.ag));
                    a.axes = [o, p, q];
                    var r = this.a3.count > 0 ? this.a3._inner[0].a : null;
                    var s = this.a3.count > 1 ? this.a3._inner[1].a : null;
                    var t = this.a3.count > 2 ? this.a3._inner[2].a : null;
                    var u = this.a3.count > 3 ? this.a3._inner[3].a : null;
                    var v = new List$1(SeriesDescription.$, 0);
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
                    var w = this.j(SpreadsheetChartAdapterHelpers.j(0, this.c._axisCollection$i, this.ag));
                    var x = this.s(SpreadsheetChartAdapterHelpers.j(1, this.c._axisCollection$i, this.ag));
                    var y = this.t(SpreadsheetChartAdapterHelpers.j(3, this.c._axisCollection$i, this.ag));
                    a.axes = [w, x, y];
                    var z = this.a3.count > 0 ? this.a3._inner[0].a : null;
                    var aa = this.a3.count > 1 ? this.a3._inner[1].a : null;
                    var ab = this.a3.count > 2 ? this.a3._inner[2].a : null;
                    var ac = this.a3.count > 3 ? this.a3._inner[3].a : null;
                    var ad = this.a3.count > 4 ? this.a3._inner[4].a : null;
                    var ae = new List$1(SeriesDescription.$, 0);
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
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.j = function (a) {
        var b = new CategoryXAxisDescription();
        b.name = "XAxis";
        b.label = "CategoryName";
        b.dataSourceRef = "stockdata";
        b.tickLength = 10;
        b.gap = 0.35;
        SpreadsheetChartAdapterHelpers.x(b, a, this.ag);
        b.useClusteringMode = true;
        return b;
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.s = function (a) {
        var b = new NumericYAxisDescription();
        b.name = "Prices";
        b.minimumValue = 0;
        b.abbreviateLargeNumbers = true;
        SpreadsheetChartAdapterHelpers.x(b, a, this.ag);
        if (a.visible) {
            var c = "formatlabelstockchartaxis_" + b.name;
            this.ac.v(this.ag.a, this.ag.f, c, function (d, e) {
                if (typeof e === 'number') {
                    var f_2 = e;
                    var g_1 = a._y();
                    if (null != g_1) {
                        var h_1 = stringEmpty();
                        if (((function () { var i = g_1.v(f_2, a.tickLabels.numberFormat, h_1); h_1 = i.p2; return i.ret; })())) {
                            return h_1;
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
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.t = function (a) {
        var b = new NumericYAxisDescription();
        b.name = "Volume";
        b.minimumValue = 0;
        b.abbreviateLargeNumbers = true;
        SpreadsheetChartAdapterHelpers.x(b, a, this.ag);
        return b;
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.v = function (a, b, c, d) {
        var e = new LineSeriesDescription();
        e.showDefaultTooltip = true;
        this.b0(e, a);
        e.title = b;
        e.thickness = 1;
        e.xAxisRef = c;
        e.yAxisRef = d;
        e.dataSourceRef = "stockdata";
        e.valueMemberPath = b;
        return e;
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.y = function (a, b, c) {
        var d = new ColumnSeriesDescription();
        d.showDefaultTooltip = true;
        this.b0(d, a);
        d.title = "Volume";
        d.thickness = 1;
        d.xAxisRef = b;
        d.yAxisRef = c;
        d.dataSourceRef = "stockdata";
        d.valueMemberPath = "Volume";
        return d;
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.x = function (a, b) {
        var c = new FinancialPriceSeriesDescription();
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
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.w = function (a, b) {
        var c = new FinancialPriceSeriesDescription();
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
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.ao = function (a) {
        if (null == a.bubbleSizes) {
            return false;
        }
        var b = a.bubbleSizes.getValues();
        for (var d = 0; d < b.length; d++) {
            var c = b[d];
            if (null == c || false == (typeof c === 'number' || typeof c === 'number')) {
                return false;
            }
        }
        return true;
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.a4 = function () {
        var e_16, _0;
        if (null != this.az) {
            return this.az;
        }
        this.az = new List$1(SpreadsheetChartAdapter_ScatterSeriesDataItem.$, 0);
        var a = 0;
        try {
            for (var _1 = tslib_1.__values(fromEnum(this.a3)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var b = _2.value;
                var c = b.a;
                this.bq(c);
                var d = void 0;
                var e = void 0;
                var f = this.bp(c, e, d, true);
                e = f.p1;
                d = f.p2;
                var g = this.ao(c);
                var h = null;
                if (g) {
                    h = c.bubbleSizes.getValues();
                }
                var i = b.c;
                for (var j = 0; j < e.length; j++) {
                    var k = (typeof e[j] === 'number') ? e[j] : typeGetValue(e[j]);
                    var l = (typeof d[j] === 'number') ? d[j] : typeGetValue(d[j]);
                    var m = 0;
                    if (g) {
                        m = (typeof h[j] === 'number') ? h[j] : typeGetValue(h[j]);
                    }
                    this.az.add(new SpreadsheetChartAdapter_ScatterSeriesDataItem(l, k, m, i));
                }
                a++;
            }
        }
        catch (e_16_1) { e_16 = { error: e_16_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_16) throw e_16.error; }
        }
        return this.az;
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.a5 = function () {
        var e_17, _0;
        if (null != this.a0) {
            return this.a0;
        }
        this.a0 = new List$1(SpreadsheetChartAdapter_SeriesDataItem.$, 0);
        var a = 0;
        try {
            for (var _1 = tslib_1.__values(fromEnum(this.a3)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var b = _2.value;
                var c = b.a;
                this.bq(c);
                var d = void 0;
                var e = void 0;
                var f = this.bp(c, e, d);
                e = f.p1;
                d = f.p2;
                var _loop_5 = function (g) {
                    var h = b.c;
                    var i = (typeof e[g] === 'number') ? e[g] : typeGetValue(e[g]);
                    var j = g < d.length ? d[g] : null;
                    var k = (null == j) ? "" : j.toString();
                    this_4.a0.add(((function () {
                        var $ret = new SpreadsheetChartAdapter_SeriesDataItem();
                        $ret.Row = k;
                        $ret.Col = h;
                        $ret.Value = i;
                        return $ret;
                    })()));
                };
                var this_4 = this;
                for (var g = 0; g < e.length; g++) {
                    _loop_5(g);
                }
                a++;
            }
        }
        catch (e_17_1) { e_17 = { error: e_17_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_17) throw e_17.error; }
        }
        return this.a0;
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.bp = function (a, b, c, d) {
        if (d === void 0) { d = false; }
        var e;
        var f;
        var g = a._dl(e, f);
        e = g.p0;
        f = g.p1;
        var h = e.length;
        for (var i = 0; i < h; i++) {
            var j = e[i];
            if (typeof j === 'number' || typeof j === 'number') {
                e[i] = j;
            }
            else {
                e[i] = 0;
            }
        }
        h = f.length;
        for (var k = 0; k < h; k++) {
            var l = f[k];
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
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.bq = function (a) {
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.br = function () {
        if (null != this.a7 && false == this.ai) {
            this.ai = this.ac.e(this.a7);
        }
        if (null != this.ba && false == this.am) {
            this.am = this.ac.e(this.ba);
        }
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.bs = function () {
        var a = 0;
        var b = 0;
        var c = 1;
        var d = 1;
        var e = 0;
        var f = 0;
        var g = 1;
        var h = 1;
        var i = 0;
        var j = false;
        var k = this.c.legend;
        var l = null != k ? k.position : 6;
        this.ac.t(this.f);
        if (null != this.ba) {
            this.ac.h(this.ba, this.a7);
        }
        var m = function () { return l == 1; };
        var n = function () { return l == 2 || l == 4; };
        var o = function () { return l == 3; };
        var p = function () { return l == 0; };
        if (o()) {
            l = 1;
        }
        else if (p()) {
            l = 2;
        }
        var q = new List$1(RowColLength.$, 0);
        var r = new List$1(RowColLength.$, 0);
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
                var s = 0;
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
                var t = 1;
                var u = 0;
                var v = 1;
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
                var w = (null != this.a9);
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
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.bt = function () {
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
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.bu = function () {
        this.l = null;
        this.m = null;
        this.ak = true;
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.bv = function (a) {
        if (a === void 0) { a = null; }
        var b = (null == a) ? this.l : a;
        if (null == b) {
            return;
        }
        if (null == this.a7) {
            return;
        }
        this.ac.x(this.k, b, this.a7);
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.bw = function () {
        if (null != this.m) {
            this.ac.x(this.k, this.m, this.ba);
        }
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.bx = function () {
        if (false == this.ap) {
            if (typeCast(SeriesViewerDescription.$, this.l) !== null) {
                this.l.legendRef = null;
            }
            return;
        }
        if (typeCast(SeriesViewerDescription.$, this.l) !== null) {
            this.l.legendRef = "legend";
        }
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.by = function (a) {
        a.background = "rgba(0, 0, 0, 0)";
        var b = SpreadsheetChartAdapterHelpers.r(this.c.plotArea._ap, this.ah);
        if (false == stringIsNullOrEmpty(b)) {
            a.plotAreaBackground = b;
        }
        else {
            b = SpreadsheetChartAdapterHelpers.r(this.c.chartArea._ap, this.ah);
            if (false == stringIsNullOrEmpty(b)) {
                a.plotAreaBackground = b;
            }
        }
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.bz = function (a, b) {
        if (!(typeCast(MarkerSeriesDescription.$, a) !== null || typeCast(StackedFragmentSeriesDescription.$, a) !== null)) {
            return;
        }
        var c = 1;
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
        var d = Enumerable.af(ChartSeriesInfo.$, Enumerable.u(ChartSeriesInfo.$, this.a3, function (e) { return e.a == b; })).b;
        if (typeCast(MarkerSeriesDescription.$, a) !== null) {
            a.markerType = EnumUtil.getName(MarkerType_$type, c);
            var e = SpreadsheetChartAdapterHelpers.r(b._ar(d), this.ah);
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
            var f = SpreadsheetChartAdapterHelpers.r(b._ar(d), this.ah);
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
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.b0 = function (a, b) {
        var c = Enumerable.af(ChartSeriesInfo.$, Enumerable.u(ChartSeriesInfo.$, this.a3, function (d) { return d.a == b; }));
        if (null == c) {
            return;
        }
        var d = c.b;
        var e = typeCast(StackedSeriesBaseDescription.$, a) !== null;
        if (false == e) {
            if (2 == b.type) {
                if (null != b.line) {
                    var f = SpreadsheetChartAdapterHelpers.r(b._aq(d), this.ah);
                    if (false == stringIsNullOrEmpty(f)) {
                        a.brush = f;
                    }
                }
            }
            else {
                var g = SpreadsheetChartAdapterHelpers.r(b._ao(d), this.ah);
                if (false == stringIsNullOrEmpty(g)) {
                    a.brush = g;
                }
            }
        }
        if (null != b.border) {
            var h = SpreadsheetChartAdapterHelpers.r(b.border._ap, this.ah);
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
            var i = b._trendlineCollection$i.item(0);
            var j = EnumUtil.getName(TrendLineType_$type, SpreadsheetChartAdapterHelpers.e(i.trendlineType, i.order));
            var k = i.period;
            var l = SpreadsheetChartAdapterHelpers.r(i.line._as(d), this.ah);
            var m = SpreadsheetChartAdapterHelpers.n(i.line.widthInPoints, this.ah, false);
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
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.z = function (a, b) {
        DataChartCategorySeriesDescriptionCoreModule.register(this.k.context);
        DataChartCategorySeriesDescriptionModule.register(this.k.context);
        DataChartVerticalCategorySeriesDescriptionModule.register(this.k.context);
        var c = null;
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
        var d = Enumerable.af(ChartSeriesInfo.$, Enumerable.u(ChartSeriesInfo.$, this.a3, function (e) { return e.a == a; }));
        c.name = d.c;
        c.title = d.d;
        c.showDefaultTooltip = true;
        return c;
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.b1 = function (a) {
        if (null != this.c.upDownBars) {
            a.brush = SpreadsheetChartAdapterHelpers.r(this.c.upDownBars.upBar._ad, this.ah);
            a.outline = SpreadsheetChartAdapterHelpers.r(this.c.upDownBars.upBar.border._ap, this.ah);
            a.negativeBrush = SpreadsheetChartAdapterHelpers.r(this.c.upDownBars.downBar._ad, this.ah);
            a.negativeOutline = SpreadsheetChartAdapterHelpers.r(this.c.upDownBars.downBar.border._ap, this.ah);
        }
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.u = function (a, b) {
        RingSeriesBaseDescriptionMetadata.d(this.k.context);
        RingSeriesDescriptionMetadata.d(this.k.context);
        HierarchicalRingSeriesDescriptionMetadata.d(this.k.context);
        this.bj(1);
        var c = new RingSeriesDescription();
        c.valueMemberPath = "Value";
        c.labelMemberPath = "Row";
        c.dataSourceRef = stringFormat("groupedseriesdata{0}", b);
        c.tooltipTemplateRef = "doughnutcharttooltip";
        c.brushes = SpreadsheetChartAdapterHelpers.b(a, b);
        if (b == 0) {
            c.legendRef = "legend";
        }
        return c;
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.aa = function (a, b, c) {
        DataChartCategorySeriesDescriptionCoreModule.register(this.k.context);
        DataChartCategorySeriesDescriptionModule.register(this.k.context);
        DataChartVerticalCategorySeriesDescriptionModule.register(this.k.context);
        DataChartRadialSeriesDescriptionCoreModule.register(this.k.context);
        DataChartRadialSeriesDescriptionModule.register(this.k.context);
        var d = null;
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
        var e = Enumerable.af(ChartSeriesInfo.$, Enumerable.u(ChartSeriesInfo.$, this.a3, function (f) { return f.a == a; }));
        d.name = e.c;
        d.title = e.d;
        d.showDefaultTooltip = true;
        if (this.aq) {
            c.m(a.axisGroup == 1, this.ag);
        }
        return d;
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.ab = function (a, b, c) {
        DataChartScatterSeriesDescriptionModule.register(this.k.context);
        this.bi();
        var d = null;
        var e = a.chartType;
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
        d.name = Enumerable.af(ChartSeriesInfo.$, Enumerable.u(ChartSeriesInfo.$, this.a3, function (f) { return f.a == a; })).c;
        d.title = Enumerable.af(ChartSeriesInfo.$, Enumerable.u(ChartSeriesInfo.$, this.a3, function (f) { return f.a == a; })).d;
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
            var f = null != a.bubbleSizes && a.bubbleSizes.getValues().length != 0;
            if (f) {
                d.radiusMemberPath = "Radius";
            }
        }
        if (this.aq) {
            c.n(a.axisGroup == 1, this.ag);
        }
        var g = SpreadsheetChartAdapterHelpers.r(a._aq(b), this.ah);
        if (false == stringIsNullOrEmpty(g)) {
            d.brush = g;
        }
        g = SpreadsheetChartAdapterHelpers.r(a._ar(b), this.ah);
        if (false == stringIsNullOrEmpty(g)) {
            d.markerBrush = g;
        }
        return d;
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.b2 = function (a) {
        DataChartStackedSeriesDescriptionModule.register(this.k.context);
        this.bm();
        var b = this.a3.count;
        var c = new List$1(StackedFragmentSeriesDescription.$, 0);
        for (var d = 0; d < b; d++) {
            var e = this.a3._inner[d].a;
            if (false == stringContains(EnumUtil.getName(ChartType_$type, e.chartType), "Stacked")) {
                continue;
            }
            var f = new StackedFragmentSeriesDescription();
            f.valueMemberPath = stringFormat("SeriesValues[{0}]", d.toString());
            if (2 == e.type) {
                if (null != e.line) {
                    var g = SpreadsheetChartAdapterHelpers.r(e._aq(d), this.ah);
                    if (false == stringIsNullOrEmpty(g)) {
                        f.brush = g;
                    }
                }
            }
            else {
                var h = SpreadsheetChartAdapterHelpers.r(e._ao(d), this.ah);
                if (false == stringIsNullOrEmpty(h)) {
                    f.brush = h;
                }
            }
            if (null != e.border) {
                var i = SpreadsheetChartAdapterHelpers.r(e.border._ap, this.ah);
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
            var j = stringFormat("fragmentseriestitle{0}", d.toString());
            this.ac.g(this.k, this.a7, j, SpreadsheetChartAdapterHelpers.w(e, d + 1));
            f.titleRef = j;
            c.add(f);
        }
        a.dataSourceRef = "stackedseriesdata";
        this.b7(c);
        a.series = Enumerable.a(StackedFragmentSeriesDescription.$, c);
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.at = function (a) {
        var b;
        var c;
        var d = this.bp(a, c, b);
        c = d.p1;
        b = d.p2;
        if (null == c || c.length < 1) {
            return true;
        }
        if (null == a.values) {
            return true;
        }
        var e = true;
        c = a.values.getValues();
        for (var g = 0; g < c.length; g++) {
            var f = c[g];
            if (null != f) {
                e = false;
                break;
            }
        }
        return e;
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.b3 = function (a) {
        var e_18, _0;
        try {
            for (var _1 = tslib_1.__values(fromEnum(a.b)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var b = _2.value;
                b.a.RangeChangedRef = stringEmpty();
            }
        }
        catch (e_18_1) { e_18 = { error: e_18_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_18) throw e_18.error; }
        }
        if (a.f.count < 1 && a.g.count < 1) {
            return;
        }
        var c = function (d) {
            var e_19, _0;
            try {
                for (var _1 = tslib_1.__values(fromEnum(d)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                    var e = _2.value;
                    if (null == e.b.majorGridLines) {
                        return false;
                    }
                }
            }
            catch (e_19_1) { e_19 = { error: e_19_1 }; }
            finally {
                try {
                    if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
                }
                finally { if (e_19) throw e_19.error; }
            }
            return true;
        };
        for (var d = 0; d < 2; d++) {
            var e = null;
            var f = stringEmpty();
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
            var g = function (h, i) {
                var j = truncate(Math.floor(log10(h)));
                var k = h / Math.pow(10, j);
                if (i) {
                    var l = k < 1.5 ? 1 : k < 3 ? 2 : k < 7 ? 5 : 10;
                    return l * Math.pow(10, j);
                }
                else {
                    var m = k <= 1 ? 1 : k <= 2 ? 2 : k <= 5 ? 5 : 10;
                    return m * Math.pow(10, j);
                }
            };
            this.ac.w(this.k, this.a7, f, g);
        }
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.b4 = function (a, b, c) {
        var e_20, _0, e_21, _1, e_22, _2;
        var d = new Dictionary$2(String_$type, Number_$type, 0);
        var e = new Dictionary$2(String_$type, Number_$type, 0);
        try {
            for (var _3 = tslib_1.__values(fromEnum(b)), _4 = _3.next(); !_4.done; _4 = _3.next()) {
                var f = _4.value;
                var g = stringEmpty();
                var h = stringEmpty();
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
                var i = c.item(f);
                var j = 1.7976931348623157E+308;
                var k = -1.7976931348623157E+308;
                var l = void 0;
                var m = void 0;
                var n = this.bp(i, m, l);
                m = n.p1;
                l = n.p2;
                for (var p = 0; p < m.length; p++) {
                    var o = m[p];
                    if (typeof o === 'number') {
                        var q = Convert.toDouble3(o);
                        j = Math.min(j, q);
                        k = Math.max(k, q);
                    }
                }
                var r = d.item(g);
                d.item(g, Math.min(j, r));
                r = d.item(h);
                d.item(h, Math.min(j, r));
                r = e.item(g);
                e.item(g, Math.max(k, r));
                r = e.item(h);
                e.item(h, Math.max(k, r));
            }
        }
        catch (e_20_1) { e_20 = { error: e_20_1 }; }
        finally {
            try {
                if (_4 && !_4.done && (_0 = _3.return)) _0.call(_3);
            }
            finally { if (e_20) throw e_20.error; }
        }
        var s = -1.7976931348623157E+308;
        var t = 1.7976931348623157E+308;
        var u = -1.7976931348623157E+308;
        var v = 1.7976931348623157E+308;
        var w = 0;
        var x = 0;
        try {
            for (var _5 = tslib_1.__values(fromEnum(a.b)), _6 = _5.next(); !_6.done; _6 = _5.next()) {
                var y = _6.value;
                if (typeCast(StraightNumericAxisBaseDescription.$, y.a) !== null) {
                    if (y.b.minimumScaleIsAuto) {
                        var z = Math.floor(d.item(y.a.name));
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
                        var aa = Math.ceil(e.item(y.a.name));
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
        }
        catch (e_21_1) { e_21 = { error: e_21_1 }; }
        finally {
            try {
                if (_6 && !_6.done && (_1 = _5.return)) _1.call(_5);
            }
            finally { if (e_21) throw e_21.error; }
        }
        var ab = function (ac, ad, ae) {
            var af = Math.abs(ae - ad);
            return (af / (ad - ac)) <= 0.1;
        };
        var ac = function (ad, ae, af) {
            var ag = Math.abs(af - ad);
            return (ag / (ae - ad)) <= 0.1;
        };
        try {
            for (var _7 = tslib_1.__values(fromEnum(a.b)), _8 = _7.next(); !_8.done; _8 = _7.next()) {
                var ad = _8.value;
                if (typeCast(StraightNumericAxisBaseDescription.$, ad.a) !== null) {
                    if (ad.b.minimumScaleIsAuto) {
                        if (ad.j) {
                            if (x > 1) {
                                var ae = ad.a.minimumValue;
                                if (ae != v && ac(v, u, ae)) {
                                    ad.a.minimumValue = v;
                                }
                            }
                        }
                        else {
                            if (w > 1) {
                                var af = ad.a.minimumValue;
                                if (af != t && ac(t, s, af)) {
                                    ad.a.minimumValue = t;
                                }
                            }
                        }
                    }
                    if (ad.b.maximumScaleIsAuto) {
                        if (ad.j) {
                            if (x > 1) {
                                var ag = ad.a.maximumValue;
                                if (ag != v && ab(v, u, ag)) {
                                    ad.a.maximumValue = u;
                                }
                            }
                        }
                        else {
                            if (w > 1) {
                                var ah = ad.a.maximumValue;
                                if (ah != t && ac(t, s, ah)) {
                                    ad.a.maximumValue = s;
                                }
                            }
                        }
                    }
                }
            }
        }
        catch (e_22_1) { e_22 = { error: e_22_1 }; }
        finally {
            try {
                if (_8 && !_8.done && (_2 = _7.return)) _2.call(_7);
            }
            finally { if (e_22) throw e_22.error; }
        }
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.b5 = function () {
        if (false == this.ae._e.contains(this.c.chartType)) {
        }
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.au = function (a, b, c) {
        var e_23, _0;
        var d = 0;
        var e = 0;
        var f = 0;
        try {
            for (var _1 = tslib_1.__values(fromEnum(this.c._axisCollection$i)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var g = _2.value;
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
        }
        catch (e_23_1) { e_23 = { error: e_23_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_23) throw e_23.error; }
        }
        return d == a && e == b && f == c;
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.b6 = function (a) {
        var e_24, _0;
        var b = new HashSet$1(String_$type, 0);
        try {
            for (var _1 = tslib_1.__values(fromEnum(a)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var c = _2.value;
                var d = c.name;
                while (b.contains(d)) {
                    d = c.name + this.ag.e().toString();
                }
                b.add_1(d);
                if (c.name != d) {
                    c.name = d;
                }
            }
        }
        catch (e_24_1) { e_24 = { error: e_24_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_24) throw e_24.error; }
        }
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.prototype.b7 = function (a) {
        var e_25, _0;
        var b = new HashSet$1(String_$type, 0);
        try {
            for (var _1 = tslib_1.__values(fromEnum(a)), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                var c = _2.value;
                var d = c.name;
                while (b.contains(d)) {
                    d = c.name + this.ag.e().toString();
                }
                b.add_1(d);
                if (c.name != d) {
                    c.name = d;
                }
            }
        }
        catch (e_25_1) { e_25 = { error: e_25_1 }; }
        finally {
            try {
                if (_2 && !_2.done && (_0 = _1.return)) _0.call(_1);
            }
            finally { if (e_25) throw e_25.error; }
        }
    };
    SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate.$t = markType(SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate, 'SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate', SpreadsheetChartElementInfo.$);
    return SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate;
}(SpreadsheetChartElementInfo));
export { SpreadsheetChartAdapter_SpreadsheetChartElementInfoPrivate };
//# sourceMappingURL=SpreadsheetChartAdapter_combined.js.map
