import { ITypedPropertyChangeListener$2 } from "./ITypedPropertyChangeListener$2";
import { Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export interface ITypedSupportPropertyChangeNotifications$2<TItem, TProperty> {
    addListener(a: ITypedPropertyChangeListener$2<TItem, TProperty>, b: boolean): void;
    removeListener(a: ITypedPropertyChangeListener$2<TItem, TProperty>): void;
}
/**
 * @hidden
 */
export declare let ITypedSupportPropertyChangeNotifications$2_$type: Type;
