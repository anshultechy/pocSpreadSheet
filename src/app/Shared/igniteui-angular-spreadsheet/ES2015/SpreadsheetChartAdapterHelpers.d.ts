import { Base, Type } from "../../igniteui-angular-core/ES2015/type";
import { Workbook, TrendlineType, TrendlinePolynomialOrder, ChartFillBase, ChartSolidFill, ChartGradientFill, WorkbookColorInfo, Axis, AxisCollection, Series } from "../../igniteui-angular-excel/ES2015/excel.core";
import { TrendLineType } from "../../igniteui-angular-core/ES2015/TrendLineType";
import { AxisInfo } from "./AxisInfo";
import { SpreadsheetChartAdapterState } from "./SpreadsheetChartAdapterState";
import { AxisDescription } from "../../igniteui-angular-core/ES2015/AxisDescription";
import { AxisGroupType } from "./AxisGroupType";
/**
 * @hidden
 */
export declare class SpreadsheetChartAdapterHelpers extends Base {
    static $t: Type;
    static p(a: any[]): string;
    static n(a: number, b: Workbook, c: boolean): number;
    static o(a: number, b: Workbook, c: boolean): number;
    static e(a: TrendlineType, b: TrendlinePolynomialOrder): TrendLineType;
    static q(a: number, b: number, c: number, d: number): string;
    static r(a: ChartFillBase, b: Workbook): string;
    static s(a: ChartGradientFill, b: Workbook): string;
    static t(a: ChartSolidFill, b: Workbook): string;
    static u(a: WorkbookColorInfo, b: Workbook): string;
    private static c;
    private static d;
    static g(a: Axis, b: SpreadsheetChartAdapterState): AxisInfo;
    static f(a: Axis, b: SpreadsheetChartAdapterState): AxisInfo;
    static h(a: Axis, b: SpreadsheetChartAdapterState): AxisInfo;
    static i(a: Axis, b: SpreadsheetChartAdapterState): AxisInfo;
    static j(a: AxisGroupType, b: AxisCollection, c: SpreadsheetChartAdapterState): Axis;
    static a(a: Series, b: number, c: number): {
        ret: number[];
        p2?: number;
    };
    static b(a: Series, b: number): string[];
    static k(a: Series): boolean;
    static l(a: Axis, b: AxisGroupType, c: SpreadsheetChartAdapterState): boolean;
    static m(a: Axis, b: SpreadsheetChartAdapterState): boolean;
    static v(a: Series, b: number, c?: boolean): string;
    static w(a: Series, b: number): string;
    static x(a: AxisDescription, b: Axis, c: SpreadsheetChartAdapterState): void;
}
