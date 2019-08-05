import { TimeAxisBaseDescription } from "./TimeAxisBaseDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class CategoryDateTimeXAxisDescription extends TimeAxisBaseDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private dv;
    displayType: string;
    private dp;
    interval: number;
    private dm;
    actualInterval: number;
    private dq;
    minorInterval: number;
    private dn;
    actualMinorInterval: number;
}
