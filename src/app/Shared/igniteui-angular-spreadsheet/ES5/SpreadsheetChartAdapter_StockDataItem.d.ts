import { Base, Type } from "../../igniteui-angular-core/ES5/type";
import { ChartType } from "../../igniteui-angular-excel/ES5/excel.core";
/**
 * @hidden
 */
export declare class SpreadsheetChartAdapter_StockDataItem extends Base {
    static $t: Type;
    private _Open;
    Open: number;
    private _High;
    High: number;
    private _Low;
    Low: number;
    private _Close;
    Close: number;
    private _Volume;
    Volume: number;
    private _CategoryName;
    CategoryName: string;
    g(a: ChartType, b: number, c: number): void;
}
