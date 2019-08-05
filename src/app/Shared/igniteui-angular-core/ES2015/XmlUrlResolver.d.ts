import { XmlResolver } from "./XmlResolver";
import { ICredentials } from "./ICredentials";
import { Type } from "./type";
import { Uri } from "./Uri";
/**
 * @hidden
 */
export declare class XmlUrlResolver extends XmlResolver {
    static $t: Type;
    private e;
    constructor();
    protected set_a(a: ICredentials): void;
    a: ICredentials;
    b(a: Uri, b: string, c: Type): any;
    private f;
}
