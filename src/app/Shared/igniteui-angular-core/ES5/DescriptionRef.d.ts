import { Base, Type } from "./type";
import { DescriptionRefValueChangedEventArgs } from "./DescriptionRefValueChangedEventArgs";
/**
 * @hidden
 */
export declare class DescriptionRef extends Base {
    static $t: Type;
    constructor(a: string);
    private c;
    readonly d: string;
    readonly b: number;
    private a;
    f(a: any, b: string, c: (sender: any, args: DescriptionRefValueChangedEventArgs) => void): void;
    i(a: any, b: string): void;
    g(): void;
    h(a: any): void;
    e(a: any, b: any): void;
}
