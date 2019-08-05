import { MouseEventArgs } from "./MouseEventArgs";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class MouseButtonEventArgs extends MouseEventArgs {
    static $t: Type;
    private _handled;
    handled: boolean;
}