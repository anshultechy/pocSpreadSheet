import { Base, IEnumerable$1, IEnumerable, IEnumerator$1, IEnumerator, Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare class TypedEnumerable$1<T> extends Base implements IEnumerable$1<T> {
    static $t: Type;
    protected $t: Type;
    private a;
    constructor($t: Type, a: IEnumerable);
    b(a: IEnumerable): void;
    getEnumerator(): IEnumerator$1<T>;
    getEnumeratorObject(): IEnumerator;
}
