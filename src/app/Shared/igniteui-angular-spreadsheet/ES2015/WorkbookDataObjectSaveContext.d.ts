import { Base, IList$1, Type } from "../../igniteui-angular-core/ES2015/type";
import { IDataObject } from "../../igniteui-angular-core/ES2015/IDataObject";
import { Sheet, Workbook, Worksheet } from "../../igniteui-angular-excel/ES2015/excel.core";
import { CellRegionMapBase } from "./CellRegionMapBase";
/**
 * @hidden
 */
export declare class WorkbookDataObjectSaveContext extends Base {
    static $t: Type;
    private q;
    private i;
    private readonly n;
    private readonly o;
    private readonly k;
    private readonly j;
    private readonly c;
    private readonly d;
    readonly a: CellRegionMapBase;
    constructor(a: Workbook, b: IDataObject, c: (arg1: string) => boolean, d: () => boolean);
    r: IDataObject;
    readonly e: boolean;
    readonly f: boolean;
    readonly l: IList$1<Sheet>;
    b: Workbook;
    readonly m: IList$1<Worksheet>;
    p(a: string, b: any): void;
    g(a: string): boolean;
    h(): boolean;
}
