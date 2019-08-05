import { Base, INotifyPropertyChanged, PropertyChangedEventArgs, Type } from "../../igniteui-angular-core/ES2015/type";
import { SortDialogViewModel } from "./SortDialogViewModel";
import { WorksheetSortType } from "../../igniteui-angular-excel/ES2015/excel.core";
/**
 * @hidden
 */
export declare class SortOptionsDialogViewModel extends Base implements INotifyPropertyChanged {
    static $t: Type;
    private _a;
    private _e;
    private _b;
    constructor(a: SortDialogViewModel);
    propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void;
    private _j;
    _s(): void;
    protected _t(a: string): void;
    readonly _d: boolean;
    readonly _i: string;
    _f: boolean;
    _g: boolean;
    _h: boolean;
    readonly _k: string;
    readonly _m: string;
    readonly _l: string;
    readonly _p: string;
    readonly _q: string;
    readonly _r: string;
    readonly _n: string;
    readonly _o: string;
    _c: WorksheetSortType;
}
