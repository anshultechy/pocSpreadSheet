import { Description } from "./Description";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class LiveGridFilterDialogDescription extends Description {
    static $t: Type;
    protected get_type(): string;
    readonly type: string;
    constructor();
    private f;
    isAnimationEnabled: boolean;
    private i;
    pixelScalingRatio: number;
    private h;
    actualPixelScalingRatio: number;
    private l;
    DialogOpeningRef: string;
    private n;
    FilterChangingRef: string;
    private m;
    FilterChangedRef: string;
}
