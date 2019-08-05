import { BaseError, Type } from "./type";
import { IXmlLineInfo } from "./IXmlLineInfo";
/**
 * @hidden
 */
export declare class XmlException extends BaseError {
    static $t: Type;
    private d;
    private f;
    private i;
    private h;
    private c;
    constructor(a: number);
    constructor(a: number, b: string, c: BaseError);
    constructor(a: number, b: IXmlLineInfo, c: string, d: string);
    constructor(a: number, b: string);
    constructor(a: number, b: string, c: BaseError, d: number, e: number);
    constructor(a: number, ..._rest: any[]);
    readonly lineNumber: number;
    readonly linePosition: number;
}
