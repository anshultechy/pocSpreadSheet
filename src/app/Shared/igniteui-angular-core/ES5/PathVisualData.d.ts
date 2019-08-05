import { PrimitiveVisualData } from "./PrimitiveVisualData";
import { List$1 } from "./List$1";
import { GeometryData } from "./GeometryData";
import { Path } from "./Path";
import { Line } from "./Line";
import { Type } from "./type";
import { RectData } from "./RectData";
import { PointData } from "./PointData";
import { GetPointsSettings } from "./GetPointsSettings";
/**
 * @hidden
 */
export declare class PathVisualData extends PrimitiveVisualData {
    static $t: Type;
    protected get_type(): string;
    readonly type: string;
    constructor(a: number);
    constructor(a: number, b: string, c: Path);
    constructor(a: number, b: string, c: Line);
    constructor(a: number, ..._rest: any[]);
    private _data;
    data: List$1<GeometryData>;
    protected e(): string;
    scaleByViewport(a: RectData): void;
    getPointsOverride(a: List$1<List$1<PointData>>, b: GetPointsSettings): void;
}
