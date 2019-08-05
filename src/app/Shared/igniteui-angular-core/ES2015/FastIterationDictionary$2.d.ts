import { Base, IEnumerable$1, IEqualityComparer$1, Type } from "./type";
import { List$1 } from "./List$1";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
export declare class FastIterationDictionary$2<TKey, TValue> extends Base {
    static $t: Type;
    protected $tKey: Type;
    protected $tValue: Type;
    private k;
    o: List$1<TKey>;
    q: List$1<TValue>;
    p: List$1<boolean>;
    l: Dictionary$2<TKey, number>;
    constructor($tKey: Type, $tValue: Type, a: number);
    constructor($tKey: Type, $tValue: Type, a: number, b: IEqualityComparer$1<TKey>);
    constructor($tKey: Type, $tValue: Type, a: number, ..._rest: any[]);
    s(a: TKey, b: TValue): void;
    i(): boolean;
    e(): boolean;
    j(a: (arg1: TValue) => TKey): boolean;
    u(): void;
    d(a: TKey): boolean;
    readonly r: number;
    readonly m: IEnumerable$1<TKey>;
    private c;
    g: boolean;
    f(a: TKey): boolean;
    private t;
    h(a: TKey, b: TValue): {
        ret: boolean;
        p1: TValue;
    };
    b(a: TKey): TValue;
    readonly n: IEnumerable$1<TValue>;
    item(a: TKey, b?: TValue): TValue;
}