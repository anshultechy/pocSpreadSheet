import { Description } from "./Description";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class ColumnSortDescriptionDescription extends Description {
    static $t: Type;
    protected get_type(): string;
    readonly type: string;
    constructor();
    private f;
    propertyPath: string;
    private g;
    sortDirection: string;
}
