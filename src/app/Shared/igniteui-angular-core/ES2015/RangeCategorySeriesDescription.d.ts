import { CategorySeriesDescription } from "./CategorySeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class RangeCategorySeriesDescription extends CategorySeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private cl;
    lowMemberPath: string;
    private ck;
    highMemberPath: string;
}
