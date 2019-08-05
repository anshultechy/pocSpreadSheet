import { Base, Type } from "../../igniteui-angular-core/ES5/type";
import { PlainTextReader_ParseState } from "./PlainTextReader_ParseState";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
/**
 * @hidden
 */
export declare class PlainTextReader_ParseHelper extends Base {
    static $t: Type;
    readonly g: List$1<string[]>;
    j: number;
    readonly e: string;
    private static readonly a;
    private readonly f;
    private readonly k;
    private readonly d;
    private h;
    private b;
    constructor(a: string, b: boolean);
    readonly c: PlainTextReader_ParseState;
    readonly i: number;
    l(a: string): void;
    n(a?: boolean): void;
    o(): void;
    m(): void;
    p(): void;
}
