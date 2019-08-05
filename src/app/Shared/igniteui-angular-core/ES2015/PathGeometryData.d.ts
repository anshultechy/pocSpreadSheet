import { GeometryData } from "./GeometryData";
import { List$1 } from "./List$1";
import { PathFigureData } from "./PathFigureData";
import { Type } from "./type";
import { RectData } from "./RectData";
import { PointData } from "./PointData";
import { GetPointsSettings } from "./GetPointsSettings";
/**
 * @hidden
 */
export declare class PathGeometryData extends GeometryData {
    static $t: Type;
    constructor();
    protected get_type(): string;
    readonly type: string;
    private _figures;
    figures: List$1<PathFigureData>;
    protected a(): string;
    scaleByViewport(a: RectData): void;
    getPointsOverride(a: List$1<List$1<PointData>>, b: GetPointsSettings): void;
}