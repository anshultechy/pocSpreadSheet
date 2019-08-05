import { Description } from "./Description";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class SizeScaleDescription extends Description {
    static $t: Type;
    protected get_type(): string;
    readonly type: string;
    constructor();
    private i;
    minimumValue: number;
    private h;
    maximumValue: number;
    private f;
    isLogarithmic: boolean;
    private l;
    logarithmBase: number;
    private n;
    PropertyUpdatedRef: string;
}
