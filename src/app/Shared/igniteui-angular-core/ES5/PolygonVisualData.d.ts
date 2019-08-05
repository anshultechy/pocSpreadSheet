import { PrimitiveVisualData } from "./PrimitiveVisualData";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
import { Polygon } from "./Polygon";
import { Type } from "./type";
import { RectData } from "./RectData";
import { GetPointsSettings } from "./GetPointsSettings";
/**
 * @hidden
 */
export declare class PolygonVisualData extends PrimitiveVisualData {
    static $t: Type;
    protected get_type(): string;
    readonly type: string;
    constructor(a: number);
    constructor(a: number, b: string, c: Polygon);
    constructor(a: number, ..._rest: any[]);
    private _points;
    points: List$1<PointData>;
    protected e(): string;
    scaleByViewport(a: RectData): void;
    getPointsOverride(a: List$1<List$1<PointData>>, b: GetPointsSettings): void;
}
