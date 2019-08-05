import { Description } from "./Description";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class ResponsiveStateDescription extends Description {
    static $t: Type;
    protected get_type(): string;
    readonly type: string;
    constructor();
    private l;
    name: string;
    private i;
    minimumWidth: number;
    private h;
    maximumWidth: number;
    private f;
    isManualState: boolean;
    private n;
    StateEnteringRef: string;
    private m;
    StateEnteredRef: string;
    private o;
    StateExitedRef: string;
}
