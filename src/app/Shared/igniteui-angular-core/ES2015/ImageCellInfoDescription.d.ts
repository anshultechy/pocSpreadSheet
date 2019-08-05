import { CellInfoDescription } from "./CellInfoDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class ImageCellInfoDescription extends CellInfoDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private c2;
    imagePath: string;
    private c4;
    imageStretchOption: string;
    private c3;
    imageResourceType: string;
}
