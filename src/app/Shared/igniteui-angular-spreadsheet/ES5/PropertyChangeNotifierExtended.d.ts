import { PropertyChangeNotifier } from "./PropertyChangeNotifier";
import { ISupportPropertyChangeNotifications } from "./ISupportPropertyChangeNotifications";
import { Type } from "../../igniteui-angular-core/ES5/type";
import { IPropertyChangeListener } from "./IPropertyChangeListener";
import { ITypedPropertyChangeListener$2 } from "./ITypedPropertyChangeListener$2";
/**
 * @hidden
 */
export declare abstract class PropertyChangeNotifierExtended extends PropertyChangeNotifier implements ISupportPropertyChangeNotifications, IPropertyChangeListener {
    static $t: Type;
    private b;
    constructor();
    protected a(a: string): void;
    addListener(a: ITypedPropertyChangeListener$2<any, string>, b: boolean): void;
    d(a: any, b: string, c: any): void;
    e(a: any, b: string, c: any): void;
    removeListener(a: ITypedPropertyChangeListener$2<any, string>): void;
    onPropertyValueChanged(a: any, b: string, c: any): void;
}
