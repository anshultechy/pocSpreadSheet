import { Base, IEnumerator$1, Type } from "../../igniteui-angular-core/ES5/type";
import { IntRange } from "./IntRange";
import { Worksheet } from "../../igniteui-angular-excel/ES5/excel.core";
/**
 * @hidden
 */
export declare class ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator extends Base implements IEnumerator$1<IntRange> {
    static $t: Type;
    private readonly _b;
    private readonly _d;
    private readonly _e;
    private _a;
    private _c;
    constructor(a: Worksheet, b: number);
    readonly current: IntRange;
    dispose(): void;
    readonly currentObject: any;
    moveNext(): boolean;
    reset(): void;
}
