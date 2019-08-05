import { EventArgs, Type } from "../../igniteui-angular-core/ES2015/type";
import { JsScrollEventType } from "./JsScrollEventType";
/**
 * @hidden
 */
export declare class JsScrollEventArgs extends EventArgs {
    static $t: Type;
    readonly _b: JsScrollEventType;
    _c: number;
    constructor(a: JsScrollEventType, b: number);
}
