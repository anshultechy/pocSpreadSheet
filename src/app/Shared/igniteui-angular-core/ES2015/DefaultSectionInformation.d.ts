import { Base, Type } from "./type";
import { ISectionInformation } from "./ISectionInformation";
/**
 * @hidden
 */
export declare class DefaultSectionInformation extends Base implements ISectionInformation {
    static $t: Type;
    constructor(a: number, b: number, c: string[], d: any[]);
    private d;
    readonly startIndex: number;
    private c;
    private a;
    private b;
    readonly endIndex: number;
    readonly groupKeyValues: any[];
    readonly groupKeyProperties: string[];
}
