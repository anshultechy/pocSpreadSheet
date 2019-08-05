import { WeakEventHandler$3 } from "./WeakEventHandler$3";
import { INotifyPropertyChanged, PropertyChangedEventArgs, Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare class WeakPropertyChangedHandler$1<TInstance> extends WeakEventHandler$3<TInstance, INotifyPropertyChanged, PropertyChangedEventArgs> {
    static $t: Type;
    protected $tInstance: Type;
    constructor($tInstance: Type, a: TInstance, b: INotifyPropertyChanged, c: (arg1: TInstance, arg2: any, arg3: PropertyChangedEventArgs) => void);
}
