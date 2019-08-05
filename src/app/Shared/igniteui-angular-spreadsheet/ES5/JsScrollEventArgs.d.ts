import { EventArgs, Type } from "../../igniteui-angular-core/ES5/type";
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
