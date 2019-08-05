import { Base, ICollection, IEnumerable, IEnumerator, Type } from "./type";
import { Group } from "./Group";
import { RegexOptions } from "./RegexOptions";
/**
 * @hidden
 */
export declare class GroupCollection extends Base implements ICollection, IEnumerable {
    static $t: Type;
    private static c;
    private readonly f;
    private readonly a;
    constructor(a: Match);
    readonly count: number;
    readonly b: boolean;
    readonly isSynchronized: boolean;
    readonly syncRoot: any;
    item(a: number): Group;
    item1(a: string): Group;
    copyTo(a: any[], b: number): void;
    getEnumeratorObject(): IEnumerator;
}
/**
 * @hidden
 */
export declare class Match extends Group {
    static $t: Type;
    readonly j: string[];
    readonly p: Regex;
    private readonly k;
    private l;
    constructor(a: Regex, b: string, c: string[]);
    static readonly n: Match;
    protected get_m(): GroupCollection;
    readonly m: GroupCollection;
    o(): Match;
}
/**
 * @hidden
 */
export declare class Regex extends Base {
    static $t: Type;
    private d;
    e: any;
    a: number[][];
    private c;
    constructor(a: number, b: string);
    constructor(a: number, b: string, c: RegexOptions);
    constructor(a: number, ..._rest: any[]);
    static f(a: string): string;
    private static b;
    i(a: string): Match;
    j(a: string, b: number): Match;
    g(a: string, b: string): string;
    static h(a: string, b: string, c: string, d: RegexOptions): string;
}
