import { BrushScaleDescription } from "./BrushScaleDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class CustomPaletteBrushScaleDescription extends BrushScaleDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private k;
    brushSelectionMode: string;
}
