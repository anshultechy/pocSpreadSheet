import { Base, Type } from "../../igniteui-angular-core/ES5/type";
import { LongValue } from "./LongValue";
import { Key } from "../../igniteui-angular-core/ES5/Key";
import { ModifierKeys } from "../../igniteui-angular-core/ES5/ModifierKeys";
import { CommandMap_Requirement } from "./CommandMap_Requirement";
/**
 * @hidden
 */
export declare class CommandMap_KeyMapping extends Base {
    static $t: Type;
    readonly f: number;
    a: CommandMap_Requirement;
    readonly b: LongValue;
    readonly c: LongValue;
    readonly g: Key;
    readonly i: ModifierKeys;
    readonly h: ModifierKeys;
    constructor(a: number, b: LongValue, c: LongValue, d: Key, e: ModifierKeys, f: ModifierKeys);
    d(a: Key, b: ModifierKeys): boolean;
    e(a: LongValue): boolean;
}
