/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, typeCast, fromEnum, Number_$type, String_$type, EnumUtil, markType } from "../../igniteui-angular-core/ES2015/type";
import { StringBuilder } from "../../igniteui-angular-core/ES2015/StringBuilder";
import { Workbook, ChartSolidFill, ChartGradientFill, WorkbookColorInfo, ChartType_$type, SeriesType_$type, AxisGroup_$type } from "../../igniteui-angular-excel/ES2015/excel.core";
import { AxisLabelsLocation_$type } from "igniteui-angular-charts/ES2015/AxisLabelsLocation";
import { AxisInfo } from "./AxisInfo";
import { SpreadsheetUtilities } from "igniteui-angular-spreadsheet/ES2015/SpreadsheetUtilities";
import { CategoryXAxisDescription } from "../../igniteui-angular-core/ES2015/CategoryXAxisDescription";
import { CategoryYAxisDescription } from "../../igniteui-angular-core/ES2015/CategoryYAxisDescription";
import { CategoryAngleAxisDescription } from "../../igniteui-angular-core/ES2015/CategoryAngleAxisDescription";
import { NumericRadiusAxisDescription } from "../../igniteui-angular-core/ES2015/NumericRadiusAxisDescription";
import { SpreadsheetChartAdapter_StackedSeriesDataItem } from "./SpreadsheetChartAdapter_StackedSeriesDataItem";
import { SpreadsheetChartAdapter_SeriesDataItem } from "./SpreadsheetChartAdapter_SeriesDataItem";
import { NumericXAxisDescription } from "../../igniteui-angular-core/ES2015/NumericXAxisDescription";
import { NumericYAxisDescription } from "../../igniteui-angular-core/ES2015/NumericYAxisDescription";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { truncate, tryParseNumber } from "../../igniteui-angular-core/ES2015/number";
import { nullableEquals } from "../../igniteui-angular-core/ES2015/nullable";
import { stringFormat1, stringFormat } from "../../igniteui-angular-core/ES2015/stringExtended";
import { stringEmpty, stringRemove, stringIsNullOrEmpty, stringContains } from "../../igniteui-angular-core/ES2015/string";
import { fromOADate } from "../../igniteui-angular-core/ES2015/dateExtended";
/**
 * @hidden
 */
export class SpreadsheetChartAdapterHelpers extends Base {
    static p(a) {
        let b = new StringBuilder(0);
        for (let d = 0; d < a.length; d++) {
            let c = a[d];
            let e = null == c ? "<null>" : c.toString();
            b.l(e + ", ");
        }
        return b.toString();
    }
    static n(a, b, c) {
        return SpreadsheetChartAdapterHelpers.o(Workbook._eq(a), b, c);
    }
    static o(a, b, c) {
        return Workbook._er(b, a, c);
    }
    static e(a, b) {
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
    }
    static q(a, b, c, d) {
        let e = a / 255;
        return stringFormat1("rgba({0},{1},{2},{3})", b, c, d, e.toString());
    }
    static r(a, b) {
        if (null != a) {
            if (typeCast(ChartSolidFill.$, a) !== null) {
                return SpreadsheetChartAdapterHelpers.t(typeCast(ChartSolidFill.$, a), b);
            }
            else if (typeCast(ChartGradientFill.$, a) !== null) {
                return SpreadsheetChartAdapterHelpers.s(typeCast(ChartGradientFill.$, a), b);
            }
        }
        return stringEmpty();
    }
    static s(a, b) {
        let c = "linear-gradient(";
        let d = truncate(a.angle);
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
                    for (let e of fromEnum(a.getStops())) {
                        c += SpreadsheetChartAdapterHelpers.u(e.color, b);
                        c += " " + truncate((e.position * 100)).toString() + "%, ";
                    }
                    c = stringRemove(c, (c.length - 2), 2);
                    break;
                }
        }
        c += ")";
        return c;
    }
    static t(a, b) {
        return SpreadsheetChartAdapterHelpers.u(a.color, b);
    }
    static u(a, b) {
        if (WorkbookColorInfo.l_op_Equality(null, a) || null == b) {
            return stringEmpty();
        }
        return SpreadsheetChartAdapterHelpers.q(a._getResolvedColor1(b).l, a._getResolvedColor1(b).o, a._getResolvedColor1(b).n, a._getResolvedColor1(b).m);
    }
    static c(a) {
        switch (a) {
            case 0:
            case 1: return 1;
            case 2: return 2;
            case 3: return 3;
            case 4: return 0;
            default: return 1;
        }
    }
    static d(a) {
        let b = true;
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
    }
    static g(a, b) {
        let c = SpreadsheetChartAdapterHelpers.m(a, b);
        let d = null;
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
            let e = a._y();
            let f = "formatlabelcategoryaxis_" + d.name;
            b.b.v(b.a, b.f, f, (g, h) => {
                let i = stringEmpty();
                if (typeCast(SpreadsheetChartAdapter_SeriesDataItem.$, h) !== null) {
                    i = h.Row;
                }
                else if (typeCast(SpreadsheetChartAdapter_StackedSeriesDataItem.$, h) !== null) {
                    i = h.CategoryName;
                }
                let j = 0;
                if (a.categoryType == 2) {
                    return i;
                }
                else if (a.categoryType == 3) {
                    if (((() => { let k = tryParseNumber(i, j); j = k.p1; return k.ret; })())) {
                        return SpreadsheetUtilities.dt(fromOADate(j), b.c.worksheet);
                    }
                }
                else if (null != e) {
                    if (((() => { let k = tryParseNumber(i, j); j = k.p1; return k.ret; })())) {
                        let k = stringEmpty();
                        if (((() => { let l = e.v(j, a.tickLabels.numberFormat, k); k = l.p2; return l.ret; })())) {
                            if (false == stringIsNullOrEmpty(k) && false == (k.trim() == i.trim())) {
                                return k;
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
        return ((() => {
            let $ret = new AxisInfo();
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
    }
    static f(a, b) {
        let c = new CategoryAngleAxisDescription();
        c.name = "CategoryAngleAxis";
        SpreadsheetChartAdapterHelpers.x(c, a, b);
        c.label = "Row";
        c.dataSourceRef = stringFormat("groupedseriesdata{0}", "0");
        c.interval = 1;
        c.gap = 0.35;
        c.useClusteringMode = true;
        return ((() => {
            let $ret = new AxisInfo();
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
    }
    static h(a, b) {
        let c = new NumericRadiusAxisDescription();
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
        return ((() => {
            let $ret = new AxisInfo();
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
    }
    static i(a, b) {
        let c = SpreadsheetChartAdapterHelpers.m(a, b);
        let d = null;
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
            let e = a._y();
            let f = "formatlabelvalueaxis_" + d.name;
            b.b.v(b.a, b.f, f, (g, h) => {
                if (null != h && typeof h === 'number') {
                    let i = h;
                    if (null != e) {
                        let j = stringEmpty();
                        if (((() => { let k = e.v(i, a.tickLabels.numberFormat, j); j = k.p2; return k.ret; })())) {
                            return j;
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
        return ((() => {
            let $ret = new AxisInfo();
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
    }
    static j(a, b, c) {
        for (let d of fromEnum(b)) {
            if (SpreadsheetChartAdapterHelpers.l(d, a, c)) {
                return d;
            }
        }
        return null;
    }
    static a(a, b, c) {
        c = 0;
        let d = new List$1(Number_$type, 0);
        let e = a._dataPointCollection$i;
        for (let f = 0; f < e.count; f++) {
            let g = e.item(f);
            if (g._a3 > 0) {
                d.add(f);
                c = Math.max(c, g._a3);
            }
        }
        return {
            ret: d.toArray(),
            p2: c
        };
    }
    static b(a, b) {
        let c = new List$1(String_$type, 0);
        let d = a._dataPointCollection$i.count;
        for (let e = 0; e < d; e++) {
            let f = a._dataPointCollection$i.item(e);
            c.add(SpreadsheetChartAdapterHelpers.r(f._aj(e), a.workbook));
        }
        return c.toArray();
    }
    static k(a) {
        return stringContains(EnumUtil.getName(ChartType_$type, a.chartType), "Scatter") || stringContains(EnumUtil.getName(ChartType_$type, a.chartType), "Bubble");
    }
    static l(a, b, c) {
        switch (b) {
            case 0: return a.axisGroup == 1 && SpreadsheetChartAdapterHelpers.m(a, c);
            case 1: return a.axisGroup == 1 && SpreadsheetChartAdapterHelpers.m(a, c) == false;
            case 2: return a.axisGroup == 2 && SpreadsheetChartAdapterHelpers.m(a, c);
            case 3: return a.axisGroup == 2 && SpreadsheetChartAdapterHelpers.m(a, c) == false;
            default: return false;
        }
    }
    static m(a, b) {
        let c = b.c._eh(a);
        return c == 4 || c == 1;
    }
    static v(a, b, c = true) {
        let d = a.name;
        let e = EnumUtil.getName(SeriesType_$type, a.type);
        let f = "Series_" + b.toString() + "_" + e;
        if (null == d || stringIsNullOrEmpty(d.toString().trim())) {
            return f;
        }
        return d.toString() + "_" + e;
    }
    static w(a, b) {
        let c = a.name;
        let d = stringEmpty();
        if (null == c || stringIsNullOrEmpty(d = c.toString().trim())) {
            return "Series " + b.toString();
        }
        return d;
    }
    static x(a, b, c) {
        if (b.axisGroup == 1) {
            let d = stringFormat("axiscrossingvalue-{0}", EnumUtil.getName(AxisGroup_$type, b.axisGroup));
            c.b.g(c.a, c.f, d, b.crossesAt);
            a.crossingValueRef = d;
        }
        if (null != b.tickLines) {
            let e = SpreadsheetChartAdapterHelpers.n(b.tickLines.widthInPoints, b.workbook, false);
            let f = SpreadsheetChartAdapterHelpers.r(b.tickLines.fill, b.workbook);
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
            let g = SpreadsheetChartAdapterHelpers.u(b.axisTitle._a7, b.workbook);
            if (false == stringIsNullOrEmpty(g)) {
                a.titleTextColor = g;
            }
            let h = b.axisTitle._a3();
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
            let i = b.tickLabels._an;
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
            let j = SpreadsheetChartAdapterHelpers.u(b.tickLabels._ao, b.workbook);
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
            let k = SpreadsheetChartAdapterHelpers.r(b.majorGridLines.fill, b.workbook);
            if (false == stringIsNullOrEmpty(k)) {
                a.majorStroke = k;
            }
            a.majorStrokeThickness = SpreadsheetChartAdapterHelpers.n(b.majorGridLines.widthInPoints, c.c.worksheet.workbook, false);
        }
        else {
            a.majorStroke = "rgba(0, 0, 0, 0)";
        }
        if (null != b.minorGridLines) {
            let l = SpreadsheetChartAdapterHelpers.r(b.minorGridLines.fill, b.workbook);
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
    }
}
SpreadsheetChartAdapterHelpers.$t = markType(SpreadsheetChartAdapterHelpers, 'SpreadsheetChartAdapterHelpers');
//# sourceMappingURL=SpreadsheetChartAdapterHelpers.js.map
