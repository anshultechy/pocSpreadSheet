import { Description } from "./Description";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class SelectedItemsChangedEventArgsDescription extends Description {
    static $t: Type;
    protected get_type(): string;
    readonly type: string;
    constructor();
    private g;
    oldItemsRef: string;
    private f;
    newItemsRef: string;
}
