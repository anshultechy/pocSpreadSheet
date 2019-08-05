import { Base, Type } from "./type";
import { List$1 } from "./List$1";
import { DescriptionPropertyValue } from "./DescriptionPropertyValue";
/**
 * @hidden
 */
export declare class DescriptionTreeNode extends Base {
    static $t: Type;
    private static g;
    f: number;
    constructor();
    private d;
    private c;
    h: string;
    i(a: string, b: any): void;
    a(a: string): DescriptionPropertyValue;
    b(a: string): boolean;
    k(a: string): void;
    j(): void;
    e(): List$1<DescriptionPropertyValue>;
}