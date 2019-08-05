import { ColumnDescription } from "./ColumnDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class TemplateColumnDescription extends ColumnDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private cc;
    CellUpdatingRef: string;
}
