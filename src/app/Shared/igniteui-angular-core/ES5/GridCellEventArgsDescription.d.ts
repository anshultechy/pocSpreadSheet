import { Description } from "./Description";
import { LiveGridDescription } from "./LiveGridDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class GridCellEventArgsDescription extends Description {
    static $t: Type;
    protected get_type(): string;
    readonly type: string;
    constructor();
    private f;
    grid: LiveGridDescription;
}
