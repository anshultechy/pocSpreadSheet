import { Base, INotifyPropertyChanged, PropertyChangedEventArgs, Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export declare abstract class PropertyChangeNotifier extends Base implements INotifyPropertyChanged {
    static $t: Type;
    propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void;
    protected a(a: string): void;
}
