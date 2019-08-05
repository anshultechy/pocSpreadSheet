import { CellInfoDescription } from "./CellInfoDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class TemplateCellInfoDescription extends CellInfoDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private c2;
    valueRef: string;
}
