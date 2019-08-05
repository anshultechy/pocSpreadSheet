import { LazyReadOnlyNotifyCollection$1 } from "./LazyReadOnlyNotifyCollection$1";
import { IntRange } from "./IntRange";
import { IList$1, Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export declare class AdapterIntRangeSet$1<TSource> extends LazyReadOnlyNotifyCollection$1<IntRange> {
    static $t: Type;
    protected $tSource: Type;
    private _p;
    private _s;
    private _r;
    private _q;
    constructor($tSource: Type, a: IList$1<TSource>, b: (arg1: TSource) => IntRange, c: (arg1: TSource) => boolean, d: (arg1: number, arg2: number) => boolean);
    protected _o(a: IList$1<IntRange>): void;
    _t(): void;
    private _u;
}
