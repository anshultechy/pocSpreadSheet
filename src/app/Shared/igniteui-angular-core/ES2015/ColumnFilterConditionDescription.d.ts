import { Description } from "./Description";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class ColumnFilterConditionDescription extends Description {
    static $t: Type;
    protected get_type(): string;
    readonly type: string;
    constructor();
}
