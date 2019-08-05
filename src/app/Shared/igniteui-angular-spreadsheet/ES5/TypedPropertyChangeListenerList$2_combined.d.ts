import { Base, Type } from "../../igniteui-angular-core/ES5/type";
import { ITypedPropertyChangeListener$2 } from "./ITypedPropertyChangeListener$2";
import { IPropertyChangeListener } from "./IPropertyChangeListener";
import { ISupportPropertyChangeNotifications } from "./ISupportPropertyChangeNotifications";
import { NotifyCollectionChangedEventArgs } from "../../igniteui-angular-core/ES5/NotifyCollectionChangedEventArgs";
/**
 * @hidden
 */
export declare class TypedPropertyChangeListenerList$2<TItem, TProperty> extends Base implements ITypedPropertyChangeListener$2<TItem, TProperty> {
    static $t: Type;
    protected $tItem: Type;
    protected $tProperty: Type;
    private a;
    constructor($tItem: Type, $tProperty: Type);
    b(a: ITypedPropertyChangeListener$2<TItem, TProperty>, b: boolean): void;
    d(a: ITypedPropertyChangeListener$2<TItem, TProperty>): void;
    onPropertyValueChanged(a: TItem, b: TProperty, c: any): void;
    c(): void;
}
/**
 * @hidden
 */
export declare class PropertyChangeListenerList extends TypedPropertyChangeListenerList$2<any, string> implements IPropertyChangeListener {
    static $t: Type;
    constructor();
    static e<T extends ISupportPropertyChangeNotifications>($t: Type, a: T, b: T, c: IPropertyChangeListener, d: boolean): {
        p0?: T;
    };
    static f<T>($t: Type, a: T, b: T, c: IPropertyChangeListener, d: boolean): {
        p0?: T;
    };
    g(a: any, b: NotifyCollectionChangedEventArgs): void;
    static h(a: any, b: any, c: string, d: any): void;
}
