import { Base, IEnumerator$1, IEnumerator, Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export declare class TypedEnumerable_Enumerator$1<T> extends Base implements IEnumerator$1<T> {
    static $t: Type;
    protected $t: Type;
    private a;
    constructor($t: Type, a: IEnumerator);
    reset(): void;
    moveNext(): boolean;
    readonly current: T;
    readonly currentObject: any;
    dispose(): void;
}
