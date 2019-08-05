import { Base, Type } from "../../igniteui-angular-core/ES5/type";
import { IDataObject } from "../../igniteui-angular-core/ES5/IDataObject";
import { NormalizedEvent } from "../../igniteui-angular-core/ES5/dom";
/**
 * @hidden
 */
export declare class JSDataObject extends Base implements IDataObject {
    static $t: Type;
    private readonly _c;
    private readonly _b;
    static readonly _e: any;
    static readonly _d: any;
    constructor(a: any, b: boolean);
    private _f;
    getData(a: string): any;
    getDataPresent(a: string): boolean;
    setData(a: string, b: any): void;
    static _a(a: NormalizedEvent): JSDataObject;
}
