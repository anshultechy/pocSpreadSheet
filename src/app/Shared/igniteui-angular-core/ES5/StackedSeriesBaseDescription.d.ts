import { CategorySeriesDescription } from "./CategorySeriesDescription";
import { StackedFragmentSeriesDescription } from "./StackedFragmentSeriesDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class StackedSeriesBaseDescription extends CategorySeriesDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private cm;
    autoGenerateSeries: boolean;
    private cn;
    reverseLegendOrder: boolean;
    private cq;
    SeriesCreatedRef: string;
    private ck;
    series: StackedFragmentSeriesDescription[];
}
