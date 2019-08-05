import { Base, Type } from "./type";
import { IVisualData } from "./IVisualData";
import { PointData } from "./PointData";
import { List$1 } from "./List$1";
import { SegmentData } from "./SegmentData";
import { PathFigure } from "./PathFigure";
import { RectData } from "./RectData";
import { GetPointsSettings } from "./GetPointsSettings";
/**
 * @hidden
 */
export declare class PathFigureData extends Base implements IVisualData {
    static $t: Type;
    constructor(a: number);
    constructor(a: number, b: PathFigure);
    constructor(a: number, ..._rest: any[]);
    private _startPoint;
    startPoint: PointData;
    private _segments;
    segments: List$1<SegmentData>;
    serialize(): string;
    d(a: RectData): void;
    getPointsOverride(a: List$1<List$1<PointData>>, b: GetPointsSettings): void;
}