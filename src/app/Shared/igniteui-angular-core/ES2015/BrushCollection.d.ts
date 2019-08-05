import { ObservableCollection$1 } from "./ObservableCollection$1";
import { Brush } from "./Brush";
import { InterpolationMode } from "./InterpolationMode";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class BrushCollection extends ObservableCollection$1<Brush> {
    static $t: Type;
    constructor();
    private static ag;
    ai(): Brush;
    af: InterpolationMode;
    private ae;
    item(a: number, b?: Brush): Brush;
    equals(a: any): boolean;
}
