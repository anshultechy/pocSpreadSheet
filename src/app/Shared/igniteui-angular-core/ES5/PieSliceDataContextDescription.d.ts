import { DataContextDescription } from "./DataContextDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class PieSliceDataContextDescription extends DataContextDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private w;
    percentValue: number;
    private u;
    isOthersSlice: boolean;
}
