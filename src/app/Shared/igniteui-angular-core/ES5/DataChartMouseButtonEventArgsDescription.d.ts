import { Description } from "./Description";
import { SeriesDescription } from "./SeriesDescription";
import { SeriesViewerDescription } from "./SeriesViewerDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class DataChartMouseButtonEventArgsDescription extends Description {
    static $t: Type;
    protected get_type(): string;
    readonly type: string;
    constructor();
    private j;
    handled: boolean;
    private l;
    itemRef: string;
    private f;
    series: SeriesDescription;
    private h;
    chart: SeriesViewerDescription;
}
