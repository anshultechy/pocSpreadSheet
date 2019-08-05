import { Base, Type } from "../../igniteui-angular-core/ES5/type";
import { WorkbookColorInfo, Workbook } from "../../igniteui-angular-excel/ES5/excel.core";
import { Color } from "../../igniteui-angular-core/ES5/Color";
/**
 */
export declare class PaletteEntry extends Base {
    static $t: Type;
    private _a;
    constructor(a: WorkbookColorInfo, b: Workbook);
    private _colorInfo;
    /**
     */
    /**
    */
    colorInfo: WorkbookColorInfo;
    /**
     */
    readonly color: string | Color;
    /**
     * @hidden
     */
    readonly _color$i: Color;
}
