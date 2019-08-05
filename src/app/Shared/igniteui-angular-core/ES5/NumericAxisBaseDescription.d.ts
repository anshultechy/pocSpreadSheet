import { AxisDescription } from "./AxisDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class NumericAxisBaseDescription extends AxisDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private de;
    minimumValue: number;
    private c8;
    actualMinimumValue: number;
    private db;
    actualVisibleMinimumValue: number;
    private dd;
    maximumValue: number;
    private c7;
    actualMaximumValue: number;
    private da;
    actualVisibleMaximumValue: number;
    private dc;
    interval: number;
    private c6;
    actualInterval: number;
    private df;
    minorInterval: number;
    private c9;
    actualMinorInterval: number;
    private dg;
    referenceValue: number;
    private c2;
    isLogarithmic: boolean;
    private c1;
    actualIsLogarithmic: boolean;
    private dt;
    logarithmBase: number;
    private c0;
    abbreviateLargeNumbers: boolean;
}
