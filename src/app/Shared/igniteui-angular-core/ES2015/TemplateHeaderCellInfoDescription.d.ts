import { TemplateCellInfoDescription } from "./TemplateCellInfoDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class TemplateHeaderCellInfoDescription extends TemplateCellInfoDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private c4;
    isFilterUIVisible: boolean;
}
