import { Base, Type } from "./type";
import { IVisualData } from "./IVisualData";
/**
 * @hidden
 */
export declare abstract class BrushAppearanceData extends Base implements IVisualData {
    static $t: Type;
    abstract readonly type: string;
    serialize(): string;
    protected a(): string;
}
