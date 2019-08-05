import { PropertyChangeListenerBase } from "./PropertyChangeListenerBase";
import { IPropertyChangeListener } from "./IPropertyChangeListener";
import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export declare class PropertyChangeListener$1<TOwner> extends PropertyChangeListenerBase implements IPropertyChangeListener {
    static $t: Type;
    protected $tOwner: Type;
    private d;
    private c;
    constructor($tOwner: Type, a: TOwner, b: (arg1: TOwner, arg2: any, arg3: string, arg4: any) => void, c: boolean);
    readonly b: TOwner;
    onPropertyValueChanged(a: any, b: string, c: any): void;
    a(): any;
}
