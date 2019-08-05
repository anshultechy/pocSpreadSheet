import { Base, ICollection$1, IEnumerable, IEqualityComparer$1, IEnumerator, IEnumerator$1, Type } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
export declare class Dictionary_EnumerableCollection$3<TKey, TValue, T> extends Base implements ICollection$1<T> {
    static $t: Type;
    protected $tKey: Type;
    protected $tValue: Type;
    protected $t: Type;
    private readonly c;
    private readonly b;
    private readonly a;
    constructor($tKey: Type, $tValue: Type, $t: Type, a: Dictionary$2<TKey, TValue>, b: IEnumerable, c: IEqualityComparer$1<T>);
    readonly count: number;
    readonly isReadOnly: boolean;
    add(a: T): void;
    clear(): void;
    contains(a: T): boolean;
    copyTo(a: T[], b: number): void;
    remove(a: T): boolean;
    getEnumerator(): IEnumerator$1<T>;
    getEnumeratorObject(): IEnumerator;
}