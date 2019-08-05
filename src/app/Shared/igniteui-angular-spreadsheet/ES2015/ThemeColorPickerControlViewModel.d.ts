import { Base, INotifyPropertyChanged, PropertyChangedEventArgs, Type } from "../../igniteui-angular-core/ES2015/type";
import { Dictionary$2 } from "../../igniteui-angular-core/ES2015/Dictionary$2";
import { PaletteEntry } from "./PaletteEntry";
import { Workbook } from "../../igniteui-angular-excel/ES2015/excel.core";
/**
 * @hidden
 */
export declare class ThemeColorPickerControlViewModel extends Base implements INotifyPropertyChanged {
    static $t: Type;
    constructor(a: Workbook, b: string);
    _c: string;
    _b: Dictionary$2<string, PaletteEntry>;
    _a: Workbook;
    private _e;
    private _d;
    propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void;
    protected _f(a: string): void;
}
