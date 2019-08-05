import { CellInfoDescription } from "./CellInfoDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class TextCellInfoDescription extends CellInfoDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private c2;
    textValue: string;
}
