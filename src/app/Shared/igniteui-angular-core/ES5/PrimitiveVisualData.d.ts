import { Base, Type } from "./type";
import { IVisualData } from "./IVisualData";
import { PrimitiveAppearanceData } from "./PrimitiveAppearanceData";
import { ShapeTags } from "./ShapeTags";
import { RectData } from "./RectData";
import { List$1 } from "./List$1";
import { PointData } from "./PointData";
import { GetPointsSettings } from "./GetPointsSettings";
/**
 * @hidden
 */
export declare abstract class PrimitiveVisualData extends Base implements IVisualData {
    static $t: Type;
    constructor(a: number);
    constructor(a: number, b: string);
    constructor(a: number, ..._rest: any[]);
    private _appearance;
    appearance: PrimitiveAppearanceData;
    private _tags;
    tags: ShapeTags;
    abstract readonly type: string;
    private _name;
    name: string;
    scaleByViewport(a: RectData): void;
    getPoints(a: GetPointsSettings): List$1<List$1<PointData>>;
    abstract getPointsOverride(a: List$1<List$1<PointData>>, b: GetPointsSettings): void;
    serialize(): string;
    protected e(): string;
}