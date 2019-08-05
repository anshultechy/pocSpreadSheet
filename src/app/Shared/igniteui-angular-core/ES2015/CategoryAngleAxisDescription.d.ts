import { CategoryAxisBaseDescription } from "./CategoryAxisBaseDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class CategoryAngleAxisDescription extends CategoryAxisBaseDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private de;
    startAngleOffset: number;
    private dc;
    interval: number;
    private da;
    actualInterval: number;
    private dd;
    minorInterval: number;
    private db;
    actualMinorInterval: number;
}
