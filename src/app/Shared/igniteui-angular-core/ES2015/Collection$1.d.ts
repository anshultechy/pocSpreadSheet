import { List$1 } from "./List$1";
import { IList$1, Type } from "./type";
/**
 * @hidden
 */
export declare class Collection$1<T> extends List$1<T> {
    static $t: Type;
    protected $t: Type;
    constructor($t: Type);
    protected readonly ac: IList$1<T>;
}
