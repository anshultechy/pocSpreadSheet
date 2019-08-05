import { ObservableCollection$1 } from "./ObservableCollection$1";
import { Color } from "./Color";
import { InterpolationMode } from "./InterpolationMode";
import { IList$1, Type } from "./type";
/**
 * @hidden
 */
export declare class ObservableColorCollection extends ObservableCollection$1<Color> {
    static $t: Type;
    constructor();
    af: InterpolationMode;
    private ae;
    equals(a: any): boolean;
    static ag(a: IList$1<string>): ObservableColorCollection;
}