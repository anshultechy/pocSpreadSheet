import { ColumnDescription } from "./ColumnDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class TextColumnDescription extends ColumnDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
}
