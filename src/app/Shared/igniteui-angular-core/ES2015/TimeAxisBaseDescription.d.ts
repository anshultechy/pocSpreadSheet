import { CategoryAxisBaseDescription } from "./CategoryAxisBaseDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class TimeAxisBaseDescription extends CategoryAxisBaseDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private dk;
    dateTimeMemberPath: string;
    private da;
    isDataPreSorted: boolean;
    private dd;
    actualMinimumValue: Date;
    private dc;
    actualMaximumValue: Date;
    private df;
    minimumValue: Date;
    private de;
    maximumValue: Date;
}
