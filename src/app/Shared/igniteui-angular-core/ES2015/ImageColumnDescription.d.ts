import { ColumnDescription } from "./ColumnDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class ImageColumnDescription extends ColumnDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private cc;
    imageStretchOption: string;
}
