import { Base, Point, Type } from "../../igniteui-angular-core/ES5/type";
import { InputContactChangeType } from "./InputContactChangeType";
import { ModifierKeys } from "../../igniteui-angular-core/ES5/ModifierKeys";
/**
 * @hidden
 */
export declare abstract class InputProxy extends Base {
    static $t: Type;
    abstract f(): void;
    abstract a(): InputContactChangeType;
    abstract c(): boolean;
    abstract e(): number;
    abstract g(): ModifierKeys;
    abstract h(): Point;
    abstract b(): boolean;
    abstract d(): boolean;
}
