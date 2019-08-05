import { Description } from "./Description";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class PrimaryKeyValueDescription extends Description {
    static $t: Type;
    protected get_type(): string;
    readonly type: string;
    constructor();
}