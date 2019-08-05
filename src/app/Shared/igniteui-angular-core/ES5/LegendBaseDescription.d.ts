import { Description } from "./Description";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class LegendBaseDescription extends Description {
    static $t: Type;
    private f;
    background: string;
    protected get_type(): string;
    readonly type: string;
    constructor();
    private i;
    LegendItemMouseLeftButtonDownRef: string;
    private j;
    LegendItemMouseLeftButtonUpRef: string;
    private g;
    LegendItemMouseEnterRef: string;
    private h;
    LegendItemMouseLeaveRef: string;
    private k;
    LegendItemMouseMoveRef: string;
}
