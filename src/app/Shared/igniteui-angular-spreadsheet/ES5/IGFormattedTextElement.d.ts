import { Base, IEnumerable$1, Type } from "../../igniteui-angular-core/ES5/type";
import { IGFormattedTextSettings } from "./IGFormattedTextSettings";
/**
 * @hidden
 */
export declare class IGFormattedTextElement extends Base {
    static $t: Type;
    readonly a: IGFormattedTextSettings;
    f: number;
    e: number;
    constructor();
    b(a: number): boolean;
    c(): boolean;
    static d<T extends IGFormattedTextElement>($t: Type, a: IEnumerable$1<T>): boolean;
}
