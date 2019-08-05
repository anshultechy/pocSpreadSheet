import { Description } from "./Description";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class SelectedItemChangedEventArgsDescription extends Description {
    static $t: Type;
    protected get_type(): string;
    readonly type: string;
    constructor();
    private g;
    oldItemRef: string;
    private f;
    newItemRef: string;
}
