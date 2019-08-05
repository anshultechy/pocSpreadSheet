import { ScrollInfo } from "./ScrollInfo";
import { IPropertyChangeListener } from "./IPropertyChangeListener";
import { Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare class MergedScrollInfo extends ScrollInfo implements IPropertyChangeListener {
    static $t: Type;
    private _aw;
    private _av;
    private _az;
    private _at;
    constructor();
    protected _ak(a: string): void;
    _au: () => void;
    readonly _ax: boolean;
    _a0(a: ScrollInfo): void;
    _a1(): void;
    _ay(a: ScrollInfo): boolean;
    _a2(): void;
    onPropertyValueChanged(a: any, b: string, c: any): void;
}
