import { TextCellInfoDescription } from "./TextCellInfoDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class TextHeaderCellInfoDescription extends TextCellInfoDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private c4;
    isFilterUIVisible: boolean;
}
