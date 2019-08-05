import { Description } from "./Description";
import { PrimaryKeyValueDescription } from "./PrimaryKeyValueDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class GridSelectedKeysChangedEventArgsDescription extends Description {
    static $t: Type;
    protected get_type(): string;
    readonly type: string;
    constructor();
    private f;
    addedKeys: PrimaryKeyValueDescription[];
    private g;
    removedKeys: PrimaryKeyValueDescription[];
}
