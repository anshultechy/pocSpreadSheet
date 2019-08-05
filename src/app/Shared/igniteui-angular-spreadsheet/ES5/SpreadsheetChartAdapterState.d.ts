import { Base, Type } from "../../igniteui-angular-core/ES5/type";
import { ComponentRenderer } from "../../igniteui-angular-core/ES5/ComponentRenderer";
import { WorksheetChart } from "../../igniteui-angular-excel/ES5/excel.core";
import { ChartElementPlatformHelper } from "./ChartElementPlatformHelper";
/**
 * @hidden
 */
export declare class SpreadsheetChartAdapterState extends Base {
    static $t: Type;
    private d;
    constructor(a: WorksheetChart, b: any, c: any, d: ComponentRenderer, e: ChartElementPlatformHelper);
    f: any;
    g: any;
    a: ComponentRenderer;
    c: WorksheetChart;
    b: ChartElementPlatformHelper;
    e(): number;
}
