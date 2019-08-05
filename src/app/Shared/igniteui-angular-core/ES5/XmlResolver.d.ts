import { Base, Type } from "./type";
import { ICredentials } from "./ICredentials";
import { Uri } from "./Uri";
/**
 * @hidden
 */
export declare abstract class XmlResolver extends Base {
    static $t: Type;
    abstract a: ICredentials;
    abstract b(a: Uri, b: string, c: Type): any;
    d(a: Uri, b: string): Uri;
    private c;
}