import { StackedSeriesBaseDescription } from "./StackedSeriesBaseDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class VerticalStackedSeriesBaseDescription extends StackedSeriesBaseDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private cs;
    xAxisRef: string;
    private ct;
    yAxisRef: string;
}
