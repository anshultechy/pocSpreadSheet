import { WeakEventHandler$3 } from "./WeakEventHandler$3";
import { INotifyCollectionChanged } from "../../igniteui-angular-core/ES2015/INotifyCollectionChanged";
import { NotifyCollectionChangedEventArgs } from "../../igniteui-angular-core/ES2015/NotifyCollectionChangedEventArgs";
import { Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare class WeakCollectionChangedHandler$1<TInstance> extends WeakEventHandler$3<TInstance, INotifyCollectionChanged, NotifyCollectionChangedEventArgs> {
    static $t: Type;
    protected $tInstance: Type;
    constructor($tInstance: Type, a: TInstance, b: INotifyCollectionChanged, c: (arg1: TInstance, arg2: any, arg3: NotifyCollectionChangedEventArgs) => void);
}
