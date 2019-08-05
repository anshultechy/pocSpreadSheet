import { Base, Type } from "../../igniteui-angular-core/ES5/type";
import { WorksheetChart } from "../../igniteui-angular-excel/ES5/excel.core";
/**
 * @hidden
 */
export declare abstract class SpreadsheetChartElementInfo extends Base {
    static $t: Type;
    protected c: WorksheetChart;
    protected f: any;
    protected a: (chart: WorksheetChart, oldUI: any) => any;
    readonly d: WorksheetChart;
    readonly b: (chart: WorksheetChart, oldUI: any) => any;
    readonly g: any;
    abstract h(): void;
    abstract i(): void;
    abstract e(a: WorksheetChart, b: boolean, c: boolean): boolean;
}
