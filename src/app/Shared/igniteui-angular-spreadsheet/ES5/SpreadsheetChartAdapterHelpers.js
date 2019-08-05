/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, typeCast, fromEnum, Number_$type, String_$type, EnumUtil, markType } from "../../igniteui-angular-core/ES5/type";
import { StringBuilder } from "../../igniteui-angular-core/ES5/StringBuilder";
import { Workbook, ChartSolidFill, ChartGradientFill, WorkbookColorInfo, ChartType_$type, SeriesType_$type, AxisGroup_$type } from "../../igniteui-angular-excel/ES5/excel.core";
import { AxisLabelsLocation_$type } from "igniteui-angular-charts/ES5/AxisLabelsLocation";
import { AxisInfo } from "./AxisInfo";
import { SpreadsheetUtilities } from "igniteui-angular-spreadsheet/ES5/SpreadsheetUtilities";
import { CategoryXAxisDescription } from "../../igniteui-angular-core/ES5/CategoryXAxisDescription";
import { CategoryYAxisDescription } from "../../igniteui-angular-core/ES5/CategoryYAxisDescription";
import { CategoryAngleAxisDescription } from "../../igniteui-angular-core/ES5/CategoryAngleAxisDescription";
import { NumericRadiusAxisDescription } from "../../igniteui-angular-core/ES5/NumericRadiusAxisDescription";
import { SpreadsheetChartAdapter_StackedSeriesDataItem } from "./SpreadsheetChartAdapter_StackedSeriesDataItem";
import { SpreadsheetChartAdapter_SeriesDataItem } from "./SpreadsheetChartAdapter_SeriesDataItem";
import { NumericXAxisDescription } from "../../igniteui-angular-core/ES5/NumericXAxisDescription";
import { NumericYAxisDescription } from "../../igniteui-angular-core/ES5/NumericYAxisDescription";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { truncate, tryParseNumber } from "../../igniteui-angular-core/ES5/number";
import { nullableEquals } from "../../igniteui-angular-core/ES5/nullable";
import { stringFormat1, stringFormat } from "../../igniteui-angular-core/ES5/stringExtended";
import { stringEmpty, stringRemove, stringIsNullOrEmpty, stringContains } from "../../igniteui-angular-core/ES5/string";
import { fromOADate } from "../../igniteui-angular-core/ES5/dateExtended";
/**
 * @hidden
 */
var SpreadsheetChartAdapterHelpers = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetChartAdapterHelpers, _super);
    function SpreadsheetChartAdapterHelpers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpreadsheetChartAdapterHelpers.p = function (a) {
        var b = new StringBuilder(0);
        for (var d = 0; d < a.length; d++) {
            var c = a[d];
            var e = null == c ? "<null>" : c.toString();
            b.l(e + ", ");
        }
        return b.toString();
    };
    SpreadsheetChartAdapterHelpers.n = function (a, b, c) {
        return SpreadsheetChartAdapterHelpers.o(Workbook._eq(a), b, c);
    };
    SpreadsheetChartAdapterHelpers.o = function (a, b, c) {
        return Workbook._er(b, a, c);
    };
    SpreadsheetChartAdapterHelpers.e = function (a, b) {
        switch (a) {
            case 0: return 7;
            case 1: return 1;
            case 2: return 6;
            case 3: return 9;
            case 4:
                {
                    switch (b) {
                        case 6: return 5;
                        case 5: return 5;
                        case 4: return 4;
                        case 3: return 3;
                        case 2: return 2;
                        default: return 2;
                    }
                }
            case 5: return 8;
            default: return 1;
        }
    };
    SpreadsheetChartAdapterHelpers.q = function (a, b, c, d) {
        var e = a / 255;
        return stringFormat1("rgba({0},{1},{2},{3})", b, c, d, e.toString());
    };
    SpreadsheetChartAdapterHelpers.r = function (a, b) {
        if (null != a) {
            if (typeCast(ChartSolidFill.$, a) !== null) {
                return SpreadsheetChartAdapterHelpers.t(typeCast(ChartSolidFill.$, a), b);
            }
            else if (typeCast(ChartGradientFill.$, a) !== null) {
                return SpreadsheetChartAdapterHelpers.s(typeCast(ChartGradientFill.$, a), b);
            }
        }
        return stringEmpty();
    };
    SpreadsheetChartAdapterHelpers.s = function (a, b) {
        var e_1, _a;
        var c = "linear-gradient(";
        var d = truncate(a.angle);
        d += 90;
        if (d >= 360) {
            d -= 360;
        }
        c += d.toString() + "deg, ";
        switch (a.gradientType) {
            case 0:
            case 1:
            case 3:
            case 2:
                {
                    try {
                        for (var _b = tslib_1.__values(fromEnum(a.getStops())), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var e = _c.value;
                            c += SpreadsheetChartAdapterHelpers.u(e.color, b);
                            c += " " + truncate((e.position * 100)).toString() + "%, ";
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    c = stringRemove(c, (c.length - 2), 2);
                    break;
                }
        }
        c += ")";
        return c;
    };
    SpreadsheetChartAdapterHelpers.t = function (a, b) {
        return SpreadsheetChartAdapterHelpers.u(a.color, b);
    };
    SpreadsheetChartAdapterHelpers.u = function (a, b) {
        if (WorkbookColorInfo.l_op_Equality(null, a) || null == b) {
            return stringEmpty();
        }
        return SpreadsheetChartAdapterHelpers.q(a._getResolvedColor1(b).l, a._getResolvedColor1(b).o, a._getResolvedColor1(b).n, a._getResolvedColor1(b).m);
    };
    SpreadsheetChartAdapterHelpers.c = function (a) {
        switch (a) {
            case 0:
            case 1: return 1;
            case 2: return 2;
            case 3: return 3;
            case 4: return 0;
            default: return 1;
        }
    };
    SpreadsheetChartAdapterHelpers.d = function (a) {
        var b = true;
        switch (a.position) {
            case 0:
                if (a.type == 1) {
                    b = false;
                }
                break;
            case 1:
            case 4:
                b = false;
                break;
        }
        switch (a.tickLabelPosition) {
            case 4: if (b) {
                return 6;
            }
            else {
                return 4;
            }
            case -4127: if (b) {
                return 3;
            }
            else {
                return 0;
            }
            case -4134: if (b) {
                return 2;
            }
            else {
                return 1;
            }
            default:
                {
                    switch (a.position) {
                        case 0:
                        case 2: return 2;
                        case 4: return 0;
                        case 3: return 3;
                        case 1: return 1;
                        default: return 1;
                    }
                }
        }
    };
    SpreadsheetChartAdapterHelpers.g = function (a, b) {
        var c = SpreadsheetChartAdapterHelpers.m(a, b);
        var d = null;
        if (c) {
            d = new CategoryXAxisDescription();
        }
        else {
            d = new CategoryYAxisDescription();
        }
        if (c) {
            d.name = a.axisGroup == 1 ? "XAxisPrimary" : "XAxisSecondary";
        }
        else {
            d.name = a.axisGroup == 1 ? "YAxisPrimary" : "YAxisSecondary";
        }
        SpreadsheetChartAdapterHelpers.x(d, a, b);
        d.label = "Row";
        d.dataSourceRef = stringFormat("groupedseriesdata{0}", "0");
        if (c) {
            d.interval = a.tickLabelSpacing;
        }
        else {
            d.interval = a.tickLabelSpacing;
        }
        d.useClusteringMode = true;
        if (a.visible) {
            var e_2 = a._y();
            var f = "formatlabelcategoryaxis_" + d.name;
            b.b.v(b.a, b.f, f, function (g, h) {
                var i = stringEmpty();
                if (typeCast(SpreadsheetChartAdapter_SeriesDataItem.$, h) !== null) {
                    i = h.Row;
                }
                else if (typeCast(SpreadsheetChartAdapter_StackedSeriesDataItem.$, h) !== null) {
                    i = h.CategoryName;
                }
                var j = 0;
                if (a.categoryType == 2) {
                    return i;
                }
                else if (a.categoryType == 3) {
                    if (((function () { var k = tryParseNumber(i, j); j = k.p1; return k.ret; })())) {
                        return SpreadsheetUtilities.dt(fromOADate(j), b.c.worksheet);
                    }
                }
                else if (null != e_2) {
                    if (((function () { var k = tryParseNumber(i, j); j = k.p1; return k.ret; })())) {
                        var k_1 = stringEmpty();
                        if (((function () { var l = e_2.v(j, a.tickLabels.numberFormat, k_1); k_1 = l.p2; return l.ret; })())) {
                            if (false == stringIsNullOrEmpty(k_1) && false == (k_1.trim() == i.trim())) {
                                return k_1;
                            }
                            else {
                                try {
                                    return SpreadsheetUtilities.dt(fromOADate(j), b.c.worksheet);
                                }
                                catch (l) {
                                }
                            }
                        }
                    }
                }
                return i;
            });
            d.formatLabelRef = f;
        }
        else {
            d.formatLabelRef = stringEmpty();
        }
        return ((function () {
            var $ret = new AxisInfo();
            $ret.b = a;
            $ret.a = d;
            $ret.g = a.axisGroup == 1;
            $ret.h = a.axisGroup == 2;
            $ret.j = c;
            $ret.k = !c;
            $ret.d = true;
            $ret.i = false;
            $ret.c = false;
            $ret.e = false;
            $ret.f = false;
            return $ret;
        })());
    };
    SpreadsheetChartAdapterHelpers.f = function (a, b) {
        var c = new CategoryAngleAxisDescription();
        c.name = "CategoryAngleAxis";
        SpreadsheetChartAdapterHelpers.x(c, a, b);
        c.label = "Row";
        c.dataSourceRef = stringFormat("groupedseriesdata{0}", "0");
        c.interval = 1;
        c.gap = 0.35;
        c.useClusteringMode = true;
        return ((function () {
            var $ret = new AxisInfo();
            $ret.b = a;
            $ret.a = c;
            $ret.g = a.axisGroup == 1;
            $ret.h = a.axisGroup == 2;
            $ret.j = false;
            $ret.k = false;
            $ret.d = true;
            $ret.i = false;
            $ret.c = true;
            $ret.e = false;
            $ret.f = false;
            return $ret;
        })());
    };
    SpreadsheetChartAdapterHelpers.h = function (a, b) {
        var c = new NumericRadiusAxisDescription();
        c.name = "NumericRadiusAxis";
        SpreadsheetChartAdapterHelpers.x(c, a, b);
        c.interval = 1;
        c.isLogarithmic = a.scaleType == -4133;
        if (false == a.minimumScaleIsAuto) {
            c.minimumValue = a.minimumScale;
        }
        if (false == a.maximumScaleIsAuto) {
            c.maximumValue = a.maximumScale;
        }
        return ((function () {
            var $ret = new AxisInfo();
            $ret.b = a;
            $ret.a = c;
            $ret.g = a.axisGroup == 1;
            $ret.h = a.axisGroup == 2;
            $ret.j = false;
            $ret.k = false;
            $ret.d = false;
            $ret.i = true;
            $ret.c = false;
            $ret.e = false;
            $ret.f = true;
            return $ret;
        })());
    };
    SpreadsheetChartAdapterHelpers.i = function (a, b) {
        var c = SpreadsheetChartAdapterHelpers.m(a, b);
        var d = null;
        if (c) {
            d = new NumericXAxisDescription();
        }
        else {
            d = new NumericYAxisDescription();
        }
        if (c) {
            d.name = a.axisGroup == 1 ? "XAxisPrimary" : "XAxisSecondary";
        }
        else {
            d.name = a.axisGroup == 1 ? "YAxisPrimary" : "YAxisSecondary";
        }
        SpreadsheetChartAdapterHelpers.x(d, a, b);
        d.isLogarithmic = a.scaleType == -4133;
        if (false == a.minimumScaleIsAuto) {
            d.minimumValue = a.minimumScale;
        }
        if (false == a.maximumScaleIsAuto) {
            d.maximumValue = a.maximumScale;
        }
        if (a.visible) {
            var e_3 = a._y();
            var f = "formatlabelvalueaxis_" + d.name;
            b.b.v(b.a, b.f, f, function (g, h) {
                if (null != h && typeof h === 'number') {
                    var i_1 = h;
                    if (null != e_3) {
                        var j_1 = stringEmpty();
                        if (((function () { var k = e_3.v(i_1, a.tickLabels.numberFormat, j_1); j_1 = k.p2; return k.ret; })())) {
                            return j_1;
                        }
                    }
                }
                if (null != h) {
                    return h.toString();
                }
                else {
                    return stringEmpty();
                }
            });
            d.formatLabelRef = f;
        }
        else {
            d.formatLabelRef = stringEmpty();
        }
        if (a.logBase != 10) {
            d.isLogarithmic = true;
            d.logarithmBase = truncate(a.logBase);
        }
        return ((function () {
            var $ret = new AxisInfo();
            $ret.b = a;
            $ret.a = d;
            $ret.g = a.axisGroup == 1;
            $ret.h = a.axisGroup == 2;
            $ret.j = c;
            $ret.k = !c;
            $ret.d = false;
            $ret.i = true;
            $ret.c = false;
            $ret.e = false;
            $ret.f = false;
            return $ret;
        })());
    };
    SpreadsheetChartAdapterHelpers.j = function (a, b, c) {
        var e_4, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(b)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var d = _c.value;
                if (SpreadsheetChartAdapterHelpers.l(d, a, c)) {
                    return d;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return null;
    };
    SpreadsheetChartAdapterHelpers.a = function (a, b, c) {
        c = 0;
        var d = new List$1(Number_$type, 0);
        var e = a._dataPointCollection$i;
        for (var f = 0; f < e.count; f++) {
            var g = e.item(f);
            if (g._a3 > 0) {
                d.add(f);
                c = Math.max(c, g._a3);
            }
        }
        return {
            ret: d.toArray(),
            p2: c
        };
    };
    SpreadsheetChartAdapterHelpers.b = function (a, b) {
        var c = new List$1(String_$type, 0);
        var d = a._dataPointCollection$i.count;
        for (var e = 0; e < d; e++) {
            var f = a._dataPointCollection$i.item(e);
            c.add(SpreadsheetChartAdapterHelpers.r(f._aj(e), a.workbook));
        }
        return c.toArray();
    };
    SpreadsheetChartAdapterHelpers.k = function (a) {
        return stringContains(EnumUtil.getName(ChartType_$type, a.chartType), "Scatter") || stringContains(EnumUtil.getName(ChartType_$type, a.chartType), "Bubble");
    };
    SpreadsheetChartAdapterHelpers.l = function (a, b, c) {
        switch (b) {
            case 0: return a.axisGroup == 1 && SpreadsheetChartAdapterHelpers.m(a, c);
            case 1: return a.axisGroup == 1 && SpreadsheetChartAdapterHelpers.m(a, c) == false;
            case 2: return a.axisGroup == 2 && SpreadsheetChartAdapterHelpers.m(a, c);
            case 3: return a.axisGroup == 2 && SpreadsheetChartAdapterHelpers.m(a, c) == false;
            default: return false;
        }
    };
    SpreadsheetChartAdapterHelpers.m = function (a, b) {
        var c = b.c._eh(a);
        return c == 4 || c == 1;
    };
    SpreadsheetChartAdapterHelpers.v = function (a, b, c) {
        if (c === void 0) { c = true; }
        var d = a.name;
        var e = EnumUtil.getName(SeriesType_$type, a.type);
        var f = "Series_" + b.toString() + "_" + e;
        if (null == d || stringIsNullOrEmpty(d.toString().trim())) {
            return f;
        }
        return d.toString() + "_" + e;
    };
    SpreadsheetChartAdapterHelpers.w = function (a, b) {
        var c = a.name;
        var d = stringEmpty();
        if (null == c || stringIsNullOrEmpty(d = c.toString().trim())) {
            return "Series " + b.toString();
        }
        return d;
    };
    SpreadsheetChartAdapterHelpers.x = function (a, b, c) {
        if (b.axisGroup == 1) {
            var d = stringFormat("axiscrossingvalue-{0}", EnumUtil.getName(AxisGroup_$type, b.axisGroup));
            c.b.g(c.a, c.f, d, b.crossesAt);
            a.crossingValueRef = d;
        }
        if (null != b.tickLines) {
            var e = SpreadsheetChartAdapterHelpers.n(b.tickLines.widthInPoints, b.workbook, false);
            var f = SpreadsheetChartAdapterHelpers.r(b.tickLines.fill, b.workbook);
            if (false == stringIsNullOrEmpty(f)) {
                a.tickStroke = f;
                a.stroke = f;
            }
            a.tickStrokeThickness = e;
            a.tickLength = 10;
            a.strokeThickness = e;
        }
        if (null != b.axisTitle) {
            if (null != b.axisTitle.text) {
                a.title = b.axisTitle.text.toString();
            }
            a.titleAngle = b.axisTitle.rotation;
            var g = SpreadsheetChartAdapterHelpers.u(b.axisTitle._a7, b.workbook);
            if (false == stringIsNullOrEmpty(g)) {
                a.titleTextColor = g;
            }
            var h = b.axisTitle._a3();
            if (null != h) {
                a.titleFontStyle = nullableEquals(h._italic$i, true) ? "Italic" : "Normal";
                a.titleFontWeight = nullableEquals(h._bold$i, true) ? "Bold" : "Normal";
                a.titleFontSize = SpreadsheetChartAdapterHelpers.o(h.height, b.workbook, true);
                if (false == stringIsNullOrEmpty(h.name) && false == stringContains(h.name, "+mn-lt")) {
                    a.titleFontFamily = h.name + ", Calibri";
                }
                else {
                    a.titleFontFamily = "Calibri";
                }
            }
        }
        if (null != b.tickLabels) {
            var i = b.tickLabels._an;
            if (null != i) {
                a.labelFontStyle = nullableEquals(i._italic$i, true) ? "Italic" : "Normal";
                a.labelFontWeight = nullableEquals(i._bold$i, true) ? "Bold" : "Normal";
                a.labelFontSize = SpreadsheetChartAdapterHelpers.o(i.height, b.workbook, true);
                if (false == stringIsNullOrEmpty(i.name) && false == stringContains(i.name, "+mn-lt")) {
                    a.labelFontFamily = i.name + ", Calibri";
                }
                else {
                    a.labelFontFamily = "Calibri";
                }
            }
            var j = SpreadsheetChartAdapterHelpers.u(b.tickLabels._ao, b.workbook);
            if (false == stringIsNullOrEmpty(j)) {
                a.labelTextColor = j;
            }
            a.labelAngle = b.tickLabels.rotation;
            if (b.tickLabelPosition != -4142) {
                a.labelLocation = EnumUtil.getName(AxisLabelsLocation_$type, SpreadsheetChartAdapterHelpers.c(b.position));
            }
            else {
                a.labelTextColor = "rgba(0, 0, 0, 0)";
            }
        }
        if (null != b.majorGridLines) {
            var k = SpreadsheetChartAdapterHelpers.r(b.majorGridLines.fill, b.workbook);
            if (false == stringIsNullOrEmpty(k)) {
                a.majorStroke = k;
            }
            a.majorStrokeThickness = SpreadsheetChartAdapterHelpers.n(b.majorGridLines.widthInPoints, c.c.worksheet.workbook, false);
        }
        else {
            a.majorStroke = "rgba(0, 0, 0, 0)";
        }
        if (null != b.minorGridLines) {
            var l = SpreadsheetChartAdapterHelpers.r(b.minorGridLines.fill, b.workbook);
            if (false == stringIsNullOrEmpty(l)) {
                a.minorStroke = l;
            }
            a.minorStrokeThickness = SpreadsheetChartAdapterHelpers.n(b.minorGridLines.widthInPoints, c.c.worksheet.workbook, false);
        }
        else {
            a.minorStroke = "rgba(0, 0, 0, 0)";
        }
        a.labelVisibility = (false == b.visible) ? "Collapsed" : "Visible";
        if (b.reversePlotOrder) {
            a.isInverted = true;
        }
    };
    SpreadsheetChartAdapterHelpers.$t = markType(SpreadsheetChartAdapterHelpers, 'SpreadsheetChartAdapterHelpers');
    return SpreadsheetChartAdapterHelpers;
}(Base));
export { SpreadsheetChartAdapterHelpers };
//# sourceMappingURL=SpreadsheetChartAdapterHelpers.js.map
