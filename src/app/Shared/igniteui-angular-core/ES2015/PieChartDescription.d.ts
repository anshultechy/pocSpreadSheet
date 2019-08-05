import { PieChartBaseDescription } from "./PieChartBaseDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class PieChartDescription extends PieChartBaseDescription {
    static $t: Type;
    private ct;
    width: string;
    private cr;
    height: string;
    private cs;
    legendRef: string;
    private cq;
    background: string;
    protected get_type(): string;
    constructor();
}
