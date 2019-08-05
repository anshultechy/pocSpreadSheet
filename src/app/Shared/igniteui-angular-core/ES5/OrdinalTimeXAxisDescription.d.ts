import { CategoryXAxisDescription } from "./CategoryXAxisDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class OrdinalTimeXAxisDescription extends CategoryXAxisDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private dm;
    dateTimeMemberPath: string;
    private dj;
    minimumValue: Date;
    private di;
    maximumValue: Date;
}
