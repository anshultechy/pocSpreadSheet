import { AxisDescription } from "./AxisDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare abstract class CategoryAxisBaseDescription extends AxisDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private c6;
    itemsCount: number;
    private c2;
    gap: number;
    private c3;
    overlap: number;
    private c0;
    useClusteringMode: boolean;
    private c8;
    dataSourceRef: string;
}
