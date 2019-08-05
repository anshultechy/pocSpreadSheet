import { SegmentData } from "./SegmentData";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
import { PolyBezierSegment } from "./PolyBezierSegment";
import { Type } from "./type";
import { RectData } from "./RectData";
import { GetPointsSettings } from "./GetPointsSettings";
/**
 * @hidden
 */
export declare class PolyBezierSegmentData extends SegmentData {
    static $t: Type;
    constructor(a: number);
    constructor(a: number, b: PolyBezierSegment);
    constructor(a: number, ..._rest: any[]);
    protected get_type(): string;
    readonly type: string;
    private _points;
    points: List$1<PointData>;
    protected a(): string;
    scaleByViewport(a: RectData): void;
    getPointsOverride(a: List$1<PointData>, b: GetPointsSettings): void;
}
