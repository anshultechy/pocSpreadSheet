import { Base, INotifyPropertyChanged, PropertyChangedEventArgs, Type } from "./type";
import { ILegendContext } from "./ILegendContext";
import { Brush } from "./Brush";
/**
 * @hidden
 */
export declare class DataContext extends Base implements ILegendContext, INotifyPropertyChanged {
    static $t: Type;
    private _series;
    series: any;
    private c;
    item: any;
    private h;
    actualItemBrush: Brush;
    private j;
    outline: Brush;
    private d;
    itemLabel: any;
    private i;
    itemBrush: Brush;
    private a;
    thickness: number;
    private e;
    legendLabel: any;
    propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void;
    protected g(a: string): void;
    flatten(): any;
}
