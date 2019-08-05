import { ScatterBaseDescription } from "./ScatterBaseDescription";
import { SizeScaleDescription } from "./SizeScaleDescription";
import { BrushScaleDescription } from "./BrushScaleDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class BubbleSeriesDescription extends ScatterBaseDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private c0;
    radiusMemberPath: string;
    private cw;
    radiusScale: SizeScaleDescription;
    private cz;
    labelMemberPath: string;
    private cy;
    fillMemberPath: string;
    private cu;
    fillScale: BrushScaleDescription;
}
