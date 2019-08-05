import { Base, Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export declare class MDList$1<T> extends Base {
    static $t: Type;
    protected $t: Type;
    private e;
    private g;
    private a;
    private f;
    constructor($t: Type, a: number, b: number);
    readonly h: number;
    readonly c: boolean;
    readonly i: number;
    item(a: number, b: number, c?: T): T;
    d(a: number): boolean;
    j(a: number, b: number): void;
}
