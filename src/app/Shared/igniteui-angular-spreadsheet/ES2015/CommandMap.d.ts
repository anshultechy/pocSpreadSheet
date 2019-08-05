import { Base, IEnumerable$1, Type } from "../../igniteui-angular-core/ES2015/type";
import { CommandMap_KeyMapping } from "./CommandMap_KeyMapping";
import { Dictionary$2 } from "../../igniteui-angular-core/ES2015/Dictionary$2";
import { CommandMap_Requirement } from "./CommandMap_Requirement";
import { LongValue } from "./LongValue";
import { Key } from "../../igniteui-angular-core/ES2015/Key";
import { ModifierKeys } from "../../igniteui-angular-core/ES2015/ModifierKeys";
/**
 * @hidden
 */
export declare class CommandMap extends Base {
    static $t: Type;
    private a;
    private d;
    constructor(a: CommandMap_KeyMapping[], b: Dictionary$2<number, CommandMap_Requirement>);
    c(a: number, b: LongValue): boolean;
    e(a: Key, b: ModifierKeys, c: LongValue): IEnumerable$1<number>;
    b(a: number): CommandMap_Requirement;
}
