import { Description } from "./Description";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class BrushScaleDescription extends Description {
    static $t: Type;
    protected get_type(): string;
    readonly type: string;
    constructor();
    private f;
    brushes: string[];
    private h;
    PropertyUpdatedRef: string;
}
