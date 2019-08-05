import { CellInfoDescription } from "./CellInfoDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class DateTimeCellInfoDescription extends CellInfoDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private c4;
    dateTimeValue: Date;
    private c7;
    formatOverrideRef: string;
    private c6;
    dateTimeFormat: string;
    private c2;
    isOffsetValue: boolean;
}
