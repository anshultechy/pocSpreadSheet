import { Base, Type } from "./type";
import { DescriptionTreeNode } from "./DescriptionTreeNode";
/**
 * @hidden
 */
export declare class ContainerState extends Base {
    static $t: Type;
    e: any;
    private b;
    private c;
    private a;
    g(a: number, b: any, c: DescriptionTreeNode, d: (arg1: string, arg2: any, arg3: boolean) => void): void;
    f(a: number): any;
    h(a: number, b: (arg1: string, arg2: boolean) => void): void;
    d(a: any): number;
}
