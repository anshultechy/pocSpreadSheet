import { Description } from "./Description";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class LiveGridSortIndicatorDescription extends Description {
    static $t: Type;
    protected get_type(): string;
    readonly type: string;
    constructor();
    private l;
    sortDirection: string;
    private f;
    isAnimationEnabled: boolean;
    private i;
    pixelScalingRatio: number;
    private h;
    actualPixelScalingRatio: number;
}
