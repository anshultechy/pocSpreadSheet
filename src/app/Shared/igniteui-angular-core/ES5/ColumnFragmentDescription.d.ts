import { FragmentBaseDescription } from "./FragmentBaseDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class ColumnFragmentDescription extends FragmentBaseDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private c4;
    radiusX: number;
    private c5;
    radiusY: number;
}
