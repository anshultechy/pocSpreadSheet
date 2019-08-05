import { Base, IEnumerator$1, Type } from "../../igniteui-angular-core/ES5/type";
import { IntRange } from "./IntRange";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
/**
 * @hidden
 */
export declare class ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator extends Base implements IEnumerator$1<IntRange> {
    static $t: Type;
    private readonly _b;
    private readonly _d;
    private readonly _e;
    private _a;
    private _c;
    constructor(a: List$1<IntRange>, b: number, c: number);
    readonly current: IntRange;
    dispose(): void;
    readonly currentObject: any;
    moveNext(): boolean;
    reset(): void;
}
