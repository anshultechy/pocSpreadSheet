import { HeaderDescription } from "./HeaderDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class TemplateHeaderDescription extends HeaderDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private bi;
    CellUpdatingRef: string;
}
