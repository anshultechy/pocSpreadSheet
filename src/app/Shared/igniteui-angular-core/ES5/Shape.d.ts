import { FrameworkElement } from "./FrameworkElement";
import { Brush } from "./Brush";
import { DoubleCollection } from "./DoubleCollection";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class Shape extends FrameworkElement {
    static $t: Type;
    constructor();
    _fill: Brush;
    fill: Brush;
    _stroke: Brush;
    stroke: Brush;
    ab: boolean;
    ac: number;
    ai: DoubleCollection;
    ad: number;
}
