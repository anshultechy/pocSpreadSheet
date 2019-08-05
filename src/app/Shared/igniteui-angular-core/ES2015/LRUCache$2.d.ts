import { Base, IEqualityComparer$1, Type } from "./type";
import { LRUCacheItem$2 } from "./LRUCacheItem$2";
import { FastIterationDictionary$2 } from "./FastIterationDictionary$2";
/**
 * @hidden
 */
export declare class LRUCache$2<TKey, TValue> extends Base {
    static $t: Type;
    protected $tKey: Type;
    protected $tValue: Type;
    constructor($tKey: Type, $tValue: Type, a: number, b: number);
    constructor($tKey: Type, $tValue: Type, a: number, b: number, c: IEqualityComparer$1<TKey>);
    constructor($tKey: Type, $tValue: Type, a: number, ..._rest: any[]);
    private f;
    h: number;
    private e;
    private a;
    readonly b: FastIterationDictionary$2<TKey, LRUCacheItem$2<TKey, TValue>>;
    d(a: TKey): boolean;
    item(a: TKey, b?: TValue): TValue;
    j(a: TKey): void;
    i(): void;
    readonly g: number;
}