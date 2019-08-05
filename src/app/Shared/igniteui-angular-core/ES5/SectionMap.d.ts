import { Base, Type } from "./type";
import { List$1 } from "./List$1";
import { SectionData } from "./SectionData";
import { IDataSource } from "./IDataSource";
/**
 * @hidden
 */
export declare class SectionMap extends Base {
    static $t: Type;
    constructor();
    private a;
    private g;
    private h;
    private m;
    readonly n: List$1<SectionData>;
    readonly o: number;
    readonly l: boolean;
    private k;
    private j;
    d(a: number): SectionData;
    private e;
    p(): void;
    v(a: SectionData, b: number, c: number): void;
    u(a: SectionData, b: number, c: number): void;
    r(a: number): void;
    y(a: number, b: IDataSource, c: any, d: string[]): void;
    w(a: SectionData, b: number, c: number): void;
    t(a: number, b: SectionData): void;
    x(a: number): void;
    private static q;
    c(): SectionData;
    b(): SectionData;
    s(): void;
    private i;
    f(a: number): SectionData;
}
