import { Base, ICollection$1, IDictionary, IEqualityComparer$1, IEnumerator$1, IEnumerator, Type } from "./type";
import { IDictionary$2 } from "./IDictionary$2";
import { KeyValuePair$2 } from "./KeyValuePair$2";
/**
 * @hidden
 */
export declare class Dictionary$2<TKey, TValue> extends Base implements IDictionary$2<TKey, TValue>, IDictionary {
    static $t: Type;
    protected $tKey: Type;
    protected $tValue: Type;
    private j;
    private k;
    private e;
    private d;
    private c;
    private a;
    private b;
    constructor($tKey: Type, $tValue: Type, a: number);
    constructor($tKey: Type, $tValue: Type, a: number, b: number);
    constructor($tKey: Type, $tValue: Type, a: number, b: IEqualityComparer$1<TKey>);
    constructor($tKey: Type, $tValue: Type, a: number, b: IDictionary$2<TKey, TValue>);
    constructor($tKey: Type, $tValue: Type, a: number, b: number, c: IEqualityComparer$1<TKey>);
    constructor($tKey: Type, $tValue: Type, a: number, ..._rest: any[]);
    readonly count: number;
    item(key_: TKey, a?: TValue): TValue;
    readonly m: number;
    containsKey(a: TKey): boolean;
    removeItem(a: TKey): boolean;
    clear(): void;
    private n;
    private l;
    addItem(a: TKey, b: TValue): void;
    private o;
    f(a: TKey): TValue;
    tryGetValue(a: TKey, b: TValue): {
        ret: boolean;
        p1: TValue;
    };
    readonly isReadOnly: boolean;
    add(a: KeyValuePair$2<TKey, TValue>): void;
    contains(a: KeyValuePair$2<TKey, TValue>): boolean;
    copyTo(a: KeyValuePair$2<TKey, TValue>[], b: number): void;
    remove(a: KeyValuePair$2<TKey, TValue>): boolean;
    getEnumerator(): IEnumerator$1<KeyValuePair$2<TKey, TValue>>;
    private _g;
    private g;
    private _h;
    private h;
    private _i;
    private i;
    getEnumeratorObject(): IEnumerator;
    readonly keys: ICollection$1<TKey>;
    readonly values: ICollection$1<TValue>;
}
