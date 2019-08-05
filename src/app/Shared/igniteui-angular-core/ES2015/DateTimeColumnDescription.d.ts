import { ColumnDescription } from "./ColumnDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class DateTimeColumnDescription extends ColumnDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private cc;
    dateTimeFormat: string;
    private cd;
    formatOverrideRef: string;
}
