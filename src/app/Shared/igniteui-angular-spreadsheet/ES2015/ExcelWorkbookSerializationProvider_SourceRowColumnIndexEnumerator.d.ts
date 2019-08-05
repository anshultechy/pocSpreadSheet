import { Base, IEnumerator$1, Type } from "../../igniteui-angular-core/ES2015/type";
import { WorksheetRow } from "../../igniteui-angular-excel/ES2015/excel.core";
import { CellRegionMapBase } from "./CellRegionMapBase";
/**
 * @hidden
 */
export declare class ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator extends Base implements IEnumerator$1<number> {
    static $t: Type;
    private readonly _c;
    private readonly _a;
    private readonly _g;
    private _f;
    private _h;
    private _d;
    private _e;
    private _i;
    private _j;
    private _b;
    constructor(a: WorksheetRow, b: CellRegionMapBase, c: number, d: number);
    readonly current: number;
    dispose(): void;
    readonly currentObject: any;
    private _k;
    moveNext(): boolean;
    private _l;
    reset(): void;
}
