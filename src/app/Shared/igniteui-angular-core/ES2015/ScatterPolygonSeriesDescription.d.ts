import { ShapeSeriesBaseDescription } from "./ShapeSeriesBaseDescription";
import { StyleSelectorDescription } from "./StyleSelectorDescription";
import { StyleDescription } from "./StyleDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class ScatterPolygonSeriesDescription extends ShapeSeriesBaseDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private b2;
    shapeStyleSelector: StyleSelectorDescription;
    private b0;
    shapeStyle: StyleDescription;
    private cb;
    markerType: string;
    private ca;
    markerTemplateRef: string;
    private b6;
    actualMarkerTemplateRef: string;
    private b7;
    markerBrush: string;
    private b4;
    actualMarkerBrush: string;
    private b9;
    markerOutline: string;
    private b5;
    actualMarkerOutline: string;
    private b8;
    markerCollisionAvoidance: string;
}
