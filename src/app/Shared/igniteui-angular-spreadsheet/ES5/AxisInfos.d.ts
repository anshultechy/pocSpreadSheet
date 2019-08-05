import { Base, IEnumerable$1, Type } from "../../igniteui-angular-core/ES5/type";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { AxisInfo } from "./AxisInfo";
import { SpreadsheetChartAdapterState } from "./SpreadsheetChartAdapterState";
import { AxisDescription } from "../../igniteui-angular-core/ES5/AxisDescription";
/**
 * @hidden
 */
export declare class AxisInfos extends Base {
    static $t: Type;
    private e;
    private c;
    private d;
    constructor();
    readonly f: List$1<AxisInfo>;
    readonly g: List$1<AxisInfo>;
    readonly b: IEnumerable$1<AxisInfo>;
    i: number;
    h: number;
    k: number;
    j: number;
    l(a: AxisInfo): void;
    m(a: boolean, b: SpreadsheetChartAdapterState): void;
    n(a: boolean, b: SpreadsheetChartAdapterState): void;
    a(): AxisDescription[];
}
