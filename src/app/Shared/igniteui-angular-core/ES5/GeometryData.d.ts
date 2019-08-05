import { Base, Type } from "./type";
import { IVisualData } from "./IVisualData";
import { RectData } from "./RectData";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
import { GetPointsSettings } from "./GetPointsSettings";
/**
 * @hidden
 */
export declare abstract class GeometryData extends Base implements IVisualData {
    static $t: Type;
    abstract readonly type: string;
    abstract scaleByViewport(a: RectData): void;
    abstract getPointsOverride(a: List$1<List$1<PointData>>, b: GetPointsSettings): void;
    serialize(): string;
    protected a(): string;
}