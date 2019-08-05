import { Comparer$1 } from "../../igniteui-angular-core/ES5/Comparer$1";
import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export declare class ComparisonComparer$1<T> extends Comparer$1<T> {
    static $t: Type;
    protected $t: Type;
    private readonly _c;
    constructor($t: Type, a: (x: T, y: T) => number);
    compare(a: T, b: T): number;
}
