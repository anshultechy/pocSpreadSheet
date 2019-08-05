import { Description } from "./Description";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class TimeAxisLabelFormatDescription extends Description {
    static $t: Type;
    protected get_type(): string;
    readonly type: string;
    constructor();
    private f;
    range: number;
    private h;
    format: string;
}