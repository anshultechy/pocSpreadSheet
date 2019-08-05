import { SegmentData } from "./SegmentData";
import { PointData } from "./PointData";
import { LineSegment } from "./LineSegment";
import { Type } from "./type";
import { RectData } from "./RectData";
import { List$1 } from "./List$1";
import { GetPointsSettings } from "./GetPointsSettings";
/**
 * @hidden
 */
export declare class LineSegmentData extends SegmentData {
    static $t: Type;
    constructor(a: number);
    constructor(a: number, b: LineSegment);
    constructor(a: number, ..._rest: any[]);
    protected get_type(): string;
    readonly type: string;
    private _point;
    point: PointData;
    protected a(): string;
    scaleByViewport(a: RectData): void;
    getPointsOverride(a: List$1<PointData>, b: GetPointsSettings): void;
}
